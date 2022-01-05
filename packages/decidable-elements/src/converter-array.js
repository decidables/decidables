
/*
  Attribute: Space-separated sequence of numbers
  Property: Array of numbers
*/
const DecidableConverterArray = {
  fromAttribute: (value) => {
    return value.split(/\s+/).map((item) => { return Number.parseFloat(item); });
  },
  toAttribute: (value) => {
    return (value.length) ? value.map((item) => { return item.toFixed(3); }).join(' ') : null;
  },
};

export default DecidableConverterArray;
