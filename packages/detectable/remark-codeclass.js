/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */ // devDeps okay
/* eslint-disable new-cap */ // devDeps start with lowercase letter!
/* eslint-disable no-console */ // writing to console is okay for gulpfile!

// devDependencies
const unistUtilVisit = require('unist-util-visit');

function remarkCodeclass(options = {prefix: ''}) {
  return (tree /* , file */) => {
    // Walk markdown parsed into MDAST finding and processing all citations
    unistUtilVisit(tree, 'inlineCode', (node /* , i, parent */) => {
      // console.log(node);

      const codeClass = options.prefix
        + node.value.split(' ')[0]
        + ((node.value.split(' ').length > 1) ? node.value.split(' ')[1] : '')
        + ((node.value.split(' ').length > 2) ? node.value.split(' ')[2] : '');

      node.data = {hProperties: {className: [codeClass]}};

      // console.log(node);
    });
  };
}

module.exports = remarkCodeclass;
