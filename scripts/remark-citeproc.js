
// Node native modules
import fs from 'fs';

// devDependencies
import citationJs from 'citation-js';
import citeproc from 'citeproc';
import {visit as unistUtilVisit} from 'unist-util-visit';

// Module variables
let referencesLink;
let citeprocEngine;
let citationsPre;

function initialize(options) {
  if (!('locale' in options)) {
    throw new Error('A _locale_ must be provided to initialize _remark-citeproc_');
  }
  if (!('style' in options)) {
    throw new Error('A _style_ must be provided to initialize _remark-citeproc_');
  }
  if (!('bibliographyFile' in options)) {
    throw new Error('A _bibliographyFile_ must be provided to initialize _remark-citeproc_');
  }
  if (!('referencesLink' in options)) {
    throw new Error('A _referencesLink_ must be provided to initialize _remark-citeproc_');
  }
  // Read in bibliography (stripping Mendeley "file" fields)
  const bibtex = fs.readFileSync(options.bibliographyFile).toString().replace(/^file = {.*},$\n/gm, '');
  // console.log(`bibtex:\n${bibtex}`);

  // Use citation.js to convert from bibtex to CSL-JSON (stripping citation.js "_graph" fields)
  const referenceList = (new citationJs(bibtex)).format('data', {format: 'object'}).map((reference) => { /* eslint-disable-line new-cap */
    delete reference._graph; /* eslint-disable-line no-underscore-dangle */
    return reference;
  });

  // Put into a keyed dictionary
  const referenceMap = referenceList.reduce((map, reference) => {
    return map.set(reference.id, reference);
  }, new Map());
  // console.log(`referenceMap:\n${referenceMap}`);

  // Create and initialize Citeproc
  const sys = {
    retrieveLocale: () => { return options.locale; },
    retrieveItem: (id) => { return referenceMap.get(id); },
  };
  citeprocEngine = new citeproc.Engine(sys, options.style);
  citeprocEngine.opt.development_extensions.wrap_url_and_doi = true;
  citeprocEngine.updateItems(Array.from(referenceMap.keys()));

  // Create a new running list of citations
  citationsPre = [];

  // Define location to use for links from citations to references
  referencesLink = options.referencesLink; /* eslint-disable-line prefer-destructuring */
}

export default function remarkCiteproc(options = {}) {
  if ('initialize' in options && options.initialize) {
    initialize(options);
  }
  if (citeprocEngine === undefined) {
    throw new Error('_remark-citeproc_ must be initialized');
  }

  return (tree) => {
    // Walk markdown parsed into MDAST finding and processing all citations
    unistUtilVisit(tree, 'textDirective', (node, i, parent) => {
      // Only looking for 'cite' nodes
      if (node.name !== 'cite') return;

      // There must be exactly one 'text' child node containing atleast one '@'
      if (node.children.length !== 1 || node.children[0].type !== 'text' || !node.children[0].value.includes('@')) return;

      // Get the list of citations as a string
      const citationsString = node.children[0].value;

      // Split the list of citations on semicolons
      const citationStrings = citationsString.split(/\s*(?:;|$)\s*/);

      // Now parse each citation
      const citationItems = citationStrings.map((citationString) => {
        // {prefix}{-}@<id>{suffix}
        // https://pandoc.org/MANUAL.html#citations
        // citation key must begin with a letter, digit, or _, and may contain alphanumerics, _, and
        // internal punctuation characters (:.#$%&-+?<>~/)
        const citationMatch = citationString.match(/(?<prefix>[^@]*?[^@-]??)(?<noauthor>-?)@(?<id>\w[:.#$%&\-+?<>~/\w]*)(?<suffix>.*)/);

        // Convert into a citeproc citeItem
        if (citationMatch === null) {
          return null;
        }
        const citationItem = {};
        citationItem.id = citationMatch.groups.id;
        // Wrap citation into a link to its reference
        citationItem.prefix = `${citationMatch.groups.prefix}<a class="csl-ref" href="${referencesLink}#${citationMatch.groups.id}">`;
        citationItem.suffix = `</a>${citationMatch.groups.suffix}`;
        if (citationMatch.groups.noauthor !== '') {
          citationItem['suppress-author'] = true;
        }
        return citationItem;
      });

      // Convert into citeproc citation
      const citationCluster = {
        citationItems: citationItems,
        properties: {noteIndex: 0},
      };

      // Add citation to citeproc
      citeprocEngine.processCitationCluster(citationCluster, citationsPre, []);
      // Generate text of citation!
      const citationPreview = citeprocEngine.previewCitationCluster(citationCluster, citationsPre, [], 'html').replace(/&#60;/g, '<').replace(/&#62;/g, '>');

      // Update list of citations
      citationsPre.push([citationCluster.citationID, 0]);

      // Build new MDAST node
      const children = [
        {
          type: 'html',
          value: citationPreview,
        },
      ];
      parent.children.splice(i, 1, ...children);

      // console.log(`citationCluster:\n${citationCluster}`);
      // console.log(`citationResult:\n${citationResult}`);
      // console.log(`citation:\n ${citationPreview}`);
      // console.log(`citationsPre:\n${citationsPre}`);
      // console.log(`node:\n${node}`);
    });

    // Walk markdown parsed into MDAST finding insertion point for references (bibliography)
    unistUtilVisit(tree, 'leafDirective', (node, i, parent) => {
      // Only looking for 'ref' nodes
      if (node.name !== 'ref') return;

      // Build bibliography!
      const bibliography = citeprocEngine.makeBibliography();

      // Insert IDs to act as link targets
      const refList = bibliography[1].map((reference, index) => {
        return reference.replace('<div', `<div id="${bibliography[0].entry_ids[index]}"`);
      });

      // Glue bibliography into one big string
      const bibliographyString = bibliography[0].bibstart + refList.reduce((refString, ref) => {
        return refString + ref;
      }, '') + bibliography[0].bibend;

      // Build new MDAST node
      const children = [
        {
          type: 'html',
          value: bibliographyString,
        },
      ];
      parent.children.splice(i, 1, ...children);

      // console.log(`bibliography:\n ${bibliographyString}`);
    });
  };
}
