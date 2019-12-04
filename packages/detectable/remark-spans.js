/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */ // devDeps okay
/* eslint-disable new-cap */ // devDeps start with lowercase letter!
/* eslint-disable no-console */ // writing to console is okay for gulpfile!

// devDependencies
const unistUtilVisit = require('unist-util-visit');

/* Local! */
const mdastUtilAttributes = require('./mdast-util-attributes');

// console.log(node);
// console.log(parent.children[i + 1]);
// console.log(attributeString);
// console.log(attributes);

function remarkSpans() {
  // Walk markdown parsed into MDAST finding and processing all spans
  return (tree /* , file */) => {
    // Spans will get parsed as a reference-style link
    unistUtilVisit(tree, 'linkReference', (node, i, parent) => {
      // The link must be a shortcut, with a node right after (with the attributes)
      if (node.referenceType !== 'shortcut' || !parent.children[i + 1].value) return;

      // There must be an attribute definition immediately after the span (no space allowed!)
      const attributeMatch = parent.children[i + 1].value.match(/^\{(?:(?:[^}]*)|(?:"[^"]*")|(?:'[^']*'))*\}/);
      if (!attributeMatch) return;
      const attributeString = attributeMatch[0];

      // Process the attribute string
      const attributes = mdastUtilAttributes(attributeString);
      if (!attributes) return;

      // Adjust position for span and following text
      const attributeStringLength = attributeString.length;
      node.position.end.offset += attributeStringLength;
      // HACK: Assumes attribute string is all on same line!
      node.position.end.column += attributeStringLength;
      parent.children[i + 1].position.start.offset += attributeStringLength;
      // HACK: Assumes attribute string is all on same line!
      parent.children[i + 1].position.start.column += attributeStringLength;
      parent.children[i + 1].value = parent.children[i + 1].value.replace(attributeString, '');

      // Convert linkReference to new 'span' node
      node.type = 'span';

      // Clean out old properties
      delete node.identifier;
      delete node.label;
      delete node.referenceType;

      // Add in new Properties
      if (!node.data) node.data = {};
      node.data.hName = attributes.element || 'span';
      if (attributes.attributes) node.data.hProperties = attributes.attributes;

      console.log(node);
    });
  };
}

module.exports = remarkSpans;
