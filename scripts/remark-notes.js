
// devDependencies
import {h as hastscript} from 'hastscript';
import {visit as unistUtilVisit} from 'unist-util-visit';

export default function remarkNotes() {
  return (tree) => {
    // Walk markdown parsed into MDAST finding and processing all citations
    unistUtilVisit(tree, 'containerDirective', (node) => {
      // Only looking for specified nodes
      if (!['ui'].includes(node.name)) return;

      // Data for building HTML from MD
      const data = node.data || (node.data = {});

      // Build HTML
      const hast = hastscript('div', node.attributes);
      data.hName = hast.tagName;
      data.hProperties = hast.properties;

      // Add our desired classes
      const classes = data.hProperties.className || (data.hProperties.className = []);
      classes.push(`${node.name}-note`);

      // console.log(node);
    });
  };
}
