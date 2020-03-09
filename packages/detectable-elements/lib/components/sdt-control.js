"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _litElement = require("lit-element");

var _sdtElement = _interopRequireDefault(require("../sdt-element"));

var _styleButton = _interopRequireDefault(require("../mixins/styleButton"));

var _styleSlider = _interopRequireDefault(require("../mixins/styleSlider"));

var _styleSpinner = _interopRequireDefault(require("../mixins/styleSpinner"));

var _styleSwitch = _interopRequireDefault(require("../mixins/styleSwitch"));

var _styleToggle = _interopRequireDefault(require("../mixins/styleToggle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n        :host {\n          ---shadow-2-rotate: ", ";\n          ---shadow-4-rotate: ", ";\n          ---shadow-8-rotate: ", ";\n\n          display: inline-block;\n        }\n\n        .holder {\n          display: flex;\n\n          flex-direction: row;\n\n          align-items: stretch;\n          justify-content: center;\n        }\n\n        label {\n          margin: 0.25rem 0.25rem 0;\n        }\n\n        .range {\n          display: inline-block;\n\n          width: 3.5rem;\n          height: 4.75rem;\n          margin: 0 0.25rem 0.25rem;\n        }\n\n        .slider {\n          display: flex;\n\n          flex-direction: column;\n\n          align-items: center;\n          justify-content: center;\n        }\n\n        .switch {\n          display: flex;\n\n          flex-direction: column;\n\n          align-items: center;\n          justify-content: center;\n        }\n\n        .toggle {\n          display: flex;\n\n          flex-direction: column;\n\n          align-items: stretch;\n          justify-content: center;\n        }\n\n        .buttons {\n          display: flex;\n\n          flex-direction: column;\n\n          align-items: stretch;\n          justify-content: center;\n        }\n\n        /* Spinners */\n        input[type=number] {\n          width: 3.5rem;\n          margin: 0 0.25rem 0.25rem;\n\n          background: var(---color-background);\n        }\n\n        /* Toggles */\n        fieldset {\n          border: 0;\n        }\n\n        legend {\n          text-align: center;\n        }\n\n        /* Payoff  Slider */\n        .payoff {\n          line-height: 1;\n        }\n\n        .payoff::before {\n          position: absolute;\n\n          padding-top: 1px;\n          padding-left: 0.5rem;\n\n          line-height: normal;\n\n          content: \"$\";\n        }\n      "]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["<button name=\"reset\" ?disabled=", " @click=", ">Reset</button>"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["<button name=\"pause\" ?disabled=", " @click=", ">Pause</button>"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["<button name=\"run\" ?disabled=", " @click=", ">Run</button>"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n            <div class=\"switch\">\n              <input type=\"checkbox\" id=", " name=\"z-roc\" ?checked=", " @change=", ">\n              <label for=", ">ROC</label>\n              <label for=", "><span class=\"math-var\">z</span>ROC</label>\n            </div>"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n            <fieldset class=\"toggle\">\n              <legend>Emphasis</legend>\n              <input type=\"radio\" id=", " name=", " value=\"none\" ?checked=", " @change=", ">\n              <label for=", ">None</label>\n              <input type=\"radio\" id=", " name=", " value=\"accuracy\" ?checked=", " @change=", ">\n              <label for=", ">Accuracy</label>\n              <input type=\"radio\" id=", " name=", " value=\"stimulus\" ?checked=", " @change=", ">\n              <label for=", ">Stimulus</label>\n              <input type=\"radio\" id=", " name=", " value=\"response\" ?checked=", " @change=", ">\n              <label for=", ">Response</label>\n              <input type=\"radio\" id=", " name=", " value=\"outcome\" ?checked=", " @change=", ">\n              <label for=", ">Outcome</label>\n            </fieldset>"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n            <div class=\"slider\">\n              <label for=", ">Payoff</label>\n              <div class=\"range\">\n                <input type=\"range\" id=", " name=\"payoff\" min=\"0\" max=\"100\" step=\"1\" .value=", " @input=", " @change=", ">\n              </div>\n              <div class=\"payoff\">\n                <input type=\"number\" min=\"0\" max=\"100\" step=\"1\" .value=\"", "\" @input=", ">\n              </div>\n            </div>"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n            <div class=\"slider\">\n              <label for=", ">Coherence</label>\n              <div class=\"range\">\n                <input type=\"range\" id=", " name=\"coherence\" min=\"0\" max=\"1\" step=\".01\" .value=", " @input=", " @change=", ">\n              </div>\n              <input type=\"number\" min=\"0\" max=\"1\" step=\".01\" .value=\"", "\" @input=", ">\n            </div>"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n            <div class=\"slider\">\n              <label for=", ">Duration</label>\n              <div class=\"range\">\n                <input type=\"range\" id=", " name=\"duration\" min=\"10\" max=\"2000\" step=\"10\" .value=", " @input=", " @change=", ">\n              </div>\n              <input type=\"number\" min=\"10\" max=\"2000\" step=\"10\" .value=", " @input=", ">\n            </div>"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n            <div class=\"slider\">\n              <label for=", ">Trials</label>\n              <div class=\"range\">\n                <input type=\"range\" id=", " name=\"trials\" min=\"1\" max=\"100\" step=\"1\" .value=", " @input=", " @change=", ">\n              </div>\n              <input type=\"number\" min=\"1\" max=\"100\" step=\"1\" .value=", " @input=", ">\n            </div>"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <div class=\"holder\">\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        <div class=\"buttons\">\n          ", "\n          ", "\n          ", "\n        </div>\n      </div>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
  SDTControl element
  <sdt-control>

  Attributes:

*/
var SDTControl = /*#__PURE__*/function (_SDTMixinStyleButton) {
  _inherits(SDTControl, _SDTMixinStyleButton);

  _createClass(SDTControl, null, [{
    key: "properties",
    // eslint-disable-line max-len
    get: function get() {
      return {
        trials: {
          attribute: 'trials',
          type: Number,
          reflect: true
        },
        duration: {
          attribute: 'duration',
          type: Number,
          reflect: true
        },
        coherence: {
          attribute: 'coherence',
          type: Number,
          reflect: true
        },
        payoff: {
          attribute: 'payoff',
          type: Number,
          reflect: true
        },
        color: {
          attribute: 'color',
          type: String,
          reflect: true
        },
        zRoc: {
          attribute: 'z-roc',
          type: Boolean,
          reflect: true
        },
        run: {
          attribute: 'run',
          type: Boolean,
          reflect: true
        },
        pause: {
          attribute: 'pause',
          type: Boolean,
          reflect: true
        },
        reset: {
          attribute: 'reset',
          type: Boolean,
          reflect: true
        },
        state: {
          atribute: false,
          type: String,
          reflect: false
        }
      };
    }
  }]);

  function SDTControl() {
    var _this;

    _classCallCheck(this, SDTControl);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SDTControl).call(this)); // Attributes

    _this.trials = undefined;
    _this.duration = undefined;
    _this.coherence = undefined;
    _this.payoff = undefined;
    _this.colors = ['none', 'accuracy', 'stimulus', 'response', 'outcome'];
    _this.color = undefined;
    _this.zRoc = undefined;
    _this.run = false;
    _this.pause = false;
    _this.reset = false; // Properties

    _this.states = ['resetted', 'running', 'paused', 'ended'];
    _this.state = 'resetted';
    return _this;
  }

  _createClass(SDTControl, [{
    key: "setTrials",
    value: function setTrials(e) {
      this.trials = e.target.value;
      this.dispatchEvent(new CustomEvent('sdt-control-trials', {
        detail: {
          trials: this.trials
        },
        bubbles: true
      }));
    }
  }, {
    key: "setDuration",
    value: function setDuration(e) {
      this.duration = e.target.value;
      this.dispatchEvent(new CustomEvent('sdt-control-duration', {
        detail: {
          duration: this.duration
        },
        bubbles: true
      }));
    }
  }, {
    key: "setCoherence",
    value: function setCoherence(e) {
      this.coherence = e.target.value;
      this.dispatchEvent(new CustomEvent('sdt-control-coherence', {
        detail: {
          coherence: this.coherence
        },
        bubbles: true
      }));
    }
  }, {
    key: "setPayoff",
    value: function setPayoff(e) {
      this.payoff = e.target.value;
      this.dispatchEvent(new CustomEvent('sdt-control-payoff', {
        detail: {
          payoff: this.payoff
        },
        bubbles: true
      }));
    }
  }, {
    key: "chooseColor",
    value: function chooseColor(e) {
      this.color = e.target.value;
      this.dispatchEvent(new CustomEvent('sdt-control-color', {
        detail: {
          color: this.color
        },
        bubbles: true
      }));
    }
  }, {
    key: "flipZRoc",
    value: function flipZRoc(e) {
      this.zRoc = e.target.checked;
      this.dispatchEvent(new CustomEvent('sdt-control-z-roc', {
        detail: {
          zRoc: this.zRoc
        },
        bubbles: true
      }));
    }
  }, {
    key: "doRun",
    value: function doRun() {
      this.state = 'running';
      this.dispatchEvent(new CustomEvent('sdt-control-run', {
        detail: {},
        bubbles: true
      }));
    }
  }, {
    key: "doPause",
    value: function doPause() {
      this.state = 'paused';
      this.dispatchEvent(new CustomEvent('sdt-control-pause', {
        detail: {},
        bubbles: true
      }));
    }
  }, {
    key: "doReset",
    value: function doReset() {
      this.state = 'resetted';
      this.dispatchEvent(new CustomEvent('sdt-control-reset', {
        detail: {},
        bubbles: true
      }));
    }
  }, {
    key: "complete",
    value: function complete() {
      this.state = 'ended';
    }
  }, {
    key: "render",
    value: function render() {
      return (0, _litElement.html)(_templateObject(), this.trials ? (0, _litElement.html)(_templateObject2(), "".concat(this.uniqueId, "-trials"), "".concat(this.uniqueId, "-trials"), this.trials, this.setTrials.bind(this), this.setTrials.bind(this), this.trials, this.setTrials.bind(this)) : (0, _litElement.html)(_templateObject3()), this.duration ? (0, _litElement.html)(_templateObject4(), "".concat(this.uniqueId, "-duration"), "".concat(this.uniqueId, "-duration"), this.duration, this.setDuration.bind(this), this.setDuration.bind(this), this.duration, this.setDuration.bind(this)) : (0, _litElement.html)(_templateObject5()), this.coherence ? (0, _litElement.html)(_templateObject6(), "".concat(this.uniqueId, "-coherence"), "".concat(this.uniqueId, "-coherence"), this.coherence, this.setCoherence.bind(this), this.setCoherence.bind(this), this.coherence, this.setCoherence.bind(this)) : (0, _litElement.html)(_templateObject7()), this.payoff ? (0, _litElement.html)(_templateObject8(), "".concat(this.uniqueId, "-payoff"), "".concat(this.uniqueId, "-payoff"), this.payoff, this.setPayoff.bind(this), this.setPayoff.bind(this), this.payoff, this.setPayoff.bind(this)) : (0, _litElement.html)(_templateObject9()), this.color !== undefined ? (0, _litElement.html)(_templateObject10(), "".concat(this.uniqueId, "-color-none"), "".concat(this.uniqueId, "-color"), this.color === 'none', this.chooseColor.bind(this), "".concat(this.uniqueId, "-color-none"), "".concat(this.uniqueId, "-color-accuracy"), "".concat(this.uniqueId, "-color"), this.color === 'accuracy', this.chooseColor.bind(this), "".concat(this.uniqueId, "-color-accuracy"), "".concat(this.uniqueId, "-color-stimulus"), "".concat(this.uniqueId, "-color"), this.color === 'stimulus', this.chooseColor.bind(this), "".concat(this.uniqueId, "-color-stimulus"), "".concat(this.uniqueId, "-color-response"), "".concat(this.uniqueId, "-color"), this.color === 'response', this.chooseColor.bind(this), "".concat(this.uniqueId, "-color-response"), "".concat(this.uniqueId, "-color-outcome"), "".concat(this.uniqueId, "-color"), this.color === 'outcome', this.chooseColor.bind(this), "".concat(this.uniqueId, "-color-outcome")) : (0, _litElement.html)(_templateObject11()), this.zRoc !== undefined ? (0, _litElement.html)(_templateObject12(), "".concat(this.uniqueId, "-z-roc"), this.zRoc, this.flipZRoc.bind(this), "".concat(this.uniqueId, "-z-roc"), "".concat(this.uniqueId, "-z-roc")) : (0, _litElement.html)(_templateObject13()), this.run ? (0, _litElement.html)(_templateObject14(), this.state === 'running' || this.state === 'ended', this.doRun.bind(this)) : (0, _litElement.html)(_templateObject15()), this.pause ? (0, _litElement.html)(_templateObject16(), this.state !== 'running', this.doPause.bind(this)) : (0, _litElement.html)(_templateObject17()), this.reset ? (0, _litElement.html)(_templateObject18(), this.state === 'resetted', this.doReset.bind(this)) : (0, _litElement.html)(_templateObject19()));
    }
  }], [{
    key: "styles",
    get: function get() {
      return [_get(_getPrototypeOf(SDTControl), "styles", this), (0, _litElement.css)(_templateObject20(), (0, _litElement.unsafeCSS)(this.cssBoxShadow(2, true, false)), (0, _litElement.unsafeCSS)(this.cssBoxShadow(4, true, false)), (0, _litElement.unsafeCSS)(this.cssBoxShadow(8, true, false)))];
    }
  }]);

  return SDTControl;
}((0, _styleButton.default)((0, _styleSlider.default)((0, _styleSpinner.default)((0, _styleSwitch.default)((0, _styleToggle.default)(_sdtElement.default))))));

exports.default = SDTControl;
customElements.define('sdt-control', SDTControl);
//# sourceMappingURL=sdt-control.js.map
