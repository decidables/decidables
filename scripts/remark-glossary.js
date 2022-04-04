
// devDependencies
import {h as hastscript} from 'hastscript';
import {toString as mdastUtilToString} from 'mdast-util-to-string';
import {visit as unistUtilVisit} from 'unist-util-visit';

const entries = new Set();
const terms = new Set();

function setDifference(setA, setB) {
  const difference = new Set(setA);
  setB.forEach((item) => {
    difference.delete(item);
  });
  return difference;
}

export function extraEntries() {
  return setDifference(entries, terms);
}

export function extraTerms() {
  return setDifference(terms, entries);
}

export function remarkGlossary({location = 'glossary.html'} = {}) {
  return (tree) => {
    // Walk markdown parsed into MDAST finding and processing terms, entries, and glossary
    unistUtilVisit(
      tree,
      [
        {type: 'containerDirective', name: 'glossary'},
        {type: 'textDirective', name: 'entry'},
        {type: 'textDirective', name: 'term'},
      ],
      (node) => {
        // Data for building HTML from MD
        const data = node.data || (node.data = {});

        if (['entry', 'term'].includes(node.name)) {
          // Get the text, strip HTML tags, strip whitespace, convert to lowercase
          const id = mdastUtilToString(node).replace(/<[^>]+>/g, '').replace(/\s/g, '').toLowerCase();

          if (node.name === 'term') {
            terms.add(id);

            // Build HTML
            const hast = hastscript('a', node.attributes);
            data.hName = hast.tagName;
            data.hProperties = hast.properties;

            // Add link
            data.hProperties.href = `${location}#${id}`;
          } else if (node.name === 'entry') {
            entries.add(id);

            // Build HTML
            const hast = hastscript('span', node.attributes);
            data.hName = hast.tagName;
            data.hProperties = hast.properties;

            // Add id
            data.hProperties.id = id;
          }
        } else { // 'glossary'
          // Build HTML
          const hast = hastscript('div', node.attributes);
          data.hName = hast.tagName;
          data.hProperties = hast.properties;
        }

        // Add our desired classes
        const classes = data.hProperties.className || (data.hProperties.className = []);
        classes.push(node.name);
      },
    );
  };
}
export default remarkGlossary;
