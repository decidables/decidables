/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */ // devDeps okay
/* eslint-disable new-cap */ // devDeps start with lowercase letter!
/* eslint-disable no-console */ // writing to console is okay for gulpfile!

// Parse string with custom attributes for Markdown element
// Format is:
//  {(element)(id)(class)+(attr)+}
//    element: (\s)[\w][\w-]*(\s)
//    id: (\s)#[\w][\w-]*(\s)
//    class: (\s).[\w][\w-]*(\s)
//    attr: (\s)[\w][\w-]*=(("[^"]*")|('[^']*')|([^}\s]+))
//  Where:
//    \s: whitespace
//    \w: letter, number, or underscore
function mdastUtilAttributes(attributeString) {
  const attributes = {};
  attributes.attributes = {};

  const elementMatch = attributeString.match(/(?:^|{|\s+)\w(?:-|\w)*(?:\s|[.#}]|$)/);
  const idMatch = attributeString.match(/#\w(?:-|\w)*/);
  const classMatch = attributeString.match(/\.\w(?:-|\w)*/g);
  const attrMatch = attributeString.match(/(?:\w(?:-|\w)*=(?:(?:"[^"]*")|(?:'[^']*')|[^}\s]+))/g);

  if (elementMatch) {
    attributes.element = elementMatch[0].trim().replace(/[{.#}]/, '');
  }

  if (idMatch) {
    attributes.attributes.id = idMatch[0].replace('#', '');
  }

  if (classMatch) {
    attributes.attributes.className = classMatch.map((classItem) => {
      return classItem.replace('.', '');
    });
  }

  if (attrMatch) {
    attrMatch.forEach((attrItem) => {
      const splitString = attrItem.split('=');
      const key = splitString[0].trim().replace('{', '');
      const value = splitString[1].trim().replace(/"/g, '');
      attributes.attributes[key] = value;
    });
  }

  return attributes;
}

module.exports = mdastUtilAttributes;
