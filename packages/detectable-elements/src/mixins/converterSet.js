
const SDTMixinConverterSet = (superclass) => {
  return class extends superclass {
  };
};

// Static property of SDTMixinConverterSet!
SDTMixinConverterSet.converterSet = {
  fromAttribute: (value) => {
    return new Set(value.split(/\s+/));
  },
  toAttribute: (value) => {
    return (value.size) ? [...value].join(' ') : null;
  },
};

export {SDTMixinConverterSet as default};
