"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var DecidableConverterSet = {
  fromAttribute: function fromAttribute(value) {
    return new Set(value.split(/\s+/));
  },
  toAttribute: function toAttribute(value) {
    return value.size ? _toConsumableArray(value).join(' ') : null;
  }
};
exports.default = DecidableConverterSet;
//# sourceMappingURL=converter-set.js.map
