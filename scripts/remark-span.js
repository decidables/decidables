
// devDependencies
import {h as hastscript} from 'hastscript';
import {toString as mdastUtilToString} from 'mdast-util-to-string';
import {visit as unistUtilVisit} from 'unist-util-visit';

export default function remarkSpan({keywords = ['span']} = {}) {
  return (tree) => {
    // Walk markdown parsed into MDAST finding and processing text directives into spans
    unistUtilVisit(tree, 'textDirective', (node) => {
      // Only looking for specified nodes
      if (!keywords.includes(node.name)) return;

      // Get the text, strip HTML tags, strip whitespace, convert to lowercase
      const id = mdastUtilToString(node).replace(/<[^>]+>/g, '').replace(/\s/g, '').toLowerCase();

      // Data for building HTML from MD
      const data = node.data || (node.data = {});

      // Build HTML
      const hast = hastscript('span', node.attributes);
      data.hName = hast.tagName;
      data.hProperties = hast.properties;

      // Add our desired classes
      const classes = data.hProperties.className || (data.hProperties.className = []);
      classes.push(node.name);
      classes.push(id);
    });
  };
}
