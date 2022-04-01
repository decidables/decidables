
// devDependencies
import {h as hastscript} from 'hastscript';
import {visit as unistUtilVisit} from 'unist-util-visit';

export default function remarkDiv({keywords = ['div']} = {}) {
  return (tree) => {
    // Walk markdown parsed into MDAST finding and processing container directives into divs
    unistUtilVisit(tree, 'containerDirective', (node) => {
      // Only looking for specified nodes
      if (!keywords.includes(node.name)) return;

      // Data for building HTML from MD
      const data = node.data || (node.data = {});

      // Build HTML
      const hast = hastscript('div', node.attributes);
      data.hName = hast.tagName;
      data.hProperties = hast.properties;

      // Add our desired classes
      const classes = data.hProperties.className || (data.hProperties.className = []);
      classes.push(node.name);

      // console.log(node);
    });
  };
}
