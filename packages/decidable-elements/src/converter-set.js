
const DecidableConverterSet = {
  fromAttribute: (value) => {
    return new Set(value.split(/\s+/));
  },
  toAttribute: (value) => {
    return (value.size) ? [...value].join(' ') : null;
  },
};

export {DecidableConverterSet as default};
