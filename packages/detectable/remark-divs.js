/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */ // devDeps okay
/* eslint-disable new-cap */ // devDeps start with lowercase letter!
/* eslint-disable no-console */ // writing to console is okay for gulpfile!

/* Local! */
const mdastUtilAttributes = require('./mdast-util-attributes');

// console.log(node);
// console.log(parent.children[i + 1]);
// console.log(attributeString);
// console.log(attributes);

// Plugin for new fenced divs
function remarkDivs() {
  // Tokenizer for fenced divs
  function divTokenizer(eat, value, silent) {
    // Quick exclusion - must have a div marker to be a match
    if (!value.includes(':::')) {
      if (silent) return false;
      return undefined;
    }

    // Find a div marker followed by an attribute definition
    const attributeMatch = value.match(/^\s*:::\{((?:(?:[^}]*)|(?:"[^"]*")|(?:'[^']*'))*)\}\s*/);
    if (!attributeMatch) {
      if (silent) return false;
      return undefined;
    }
    const attributeString = attributeMatch[0];

    // Process the attribute definition
    const attributes = mdastUtilAttributes(attributeString);
    if (!attributes) {
      if (silent) return false;
      return undefined;
    }

    // Check for nested divs and proper closing of divs
    const container = [];
    let depth = 0;
    let i = 0;
    const lines = value.split('\n');
    do {
      const line = lines[i];
      i += 1;
      if (line.match(/^\s*:::\{((?:(?:[^}]*)|(?:"[^"]*")|(?:'[^']*'))*)\}\s*/)) {
        // Found start of div
        depth += 1;
      } else if (line.match(/^\s*:::\s*/)) {
        // Found end of div
        depth -= 1;
      }
      container.push(line);
    } while (depth > 0 && i <= lines.length);
    if (depth !== 0) {
      if (silent) return false;
      return undefined;
    }

    // We have a properly closed div
    if (silent) return true;

    // Remember start of div
    const now = eat.now();

    // Form the body from the container lines except the first and last lines
    const body = container.slice(1, container.length - 1).join('\n');

    // Eat the container
    const add = eat(container.join('\n'));

    // Create the new node
    const node = {
      type: 'div',
      data: {
        hName: attributes.element || 'div',
      },
    };
    if (attributes.attributes) node.data.hProperties = attributes.attributes;

    // Process the content of the div
    const exit = this.enterBlock();
    node.children = this.tokenizeBlock(body, now);
    exit();

    console.log(node);

    return add(node);
  }

  // Add our div tokenizer to the remark parser
  const {blockTokenizers, blockMethods} = this.Parser.prototype;
  blockTokenizers.div = divTokenizer;
  blockMethods.splice(blockMethods.indexOf('fencedCode') + 1, 0, 'div');
}

module.exports = remarkDivs;
