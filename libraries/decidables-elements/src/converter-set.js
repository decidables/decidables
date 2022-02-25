
/*
  Attribute: Space-separated sequence of strings
  Property: Set of strings
*/
const DecidableConverterSet = {
  fromAttribute: (value) => {
    return new Set(value.split(/\s+/));
  },
  toAttribute: (value) => {
    return (value.size) ? [...value].join(' ') : null;
  },
};

export default DecidableConverterSet;
