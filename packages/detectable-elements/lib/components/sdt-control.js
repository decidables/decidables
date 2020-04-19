"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _litElement = require("lit-element");

require("@decidable/decidable-elements");

var _sdtElement = _interopRequireDefault(require("../sdt-element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n        :host {\n          ---shadow-2-rotate: ", ";\n          ---shadow-4-rotate: ", ";\n          ---shadow-8-rotate: ", ";\n\n          display: inline-block;\n        }\n\n        .holder {\n          display: flex;\n\n          flex-direction: row;\n\n          align-items: stretch;\n          justify-content: center;\n        }\n\n        .buttons {\n          display: flex;\n\n          flex-direction: column;\n\n          align-items: stretch;\n          justify-content: center;\n        }\n\n        /* Payoff  Slider */\n        .payoff {\n          --decidable-spinner-prefix: \"$\";\n        }\n      "]);

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
  var data = _taggedTemplateLiteral(["<decidable-button name=\"reset\" ?disabled=", " @click=", ">Reset</decidable-button>"]);

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
  var data = _taggedTemplateLiteral(["<decidable-button name=\"pause\" ?disabled=", " @click=", ">Pause</decidable-button>"]);

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
  var data = _taggedTemplateLiteral(["<decidable-button name=\"run\" ?disabled=", " @click=", ">Run</decidable-button>"]);

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
  var data = _taggedTemplateLiteral(["\n            <decidable-switch ?checked=", " @change=", ">\n              <span class=\"math-var\">z</span>ROC\n              <span slot=\"off-label\">ROC</span>\n            </decidable-switch>\n          "]);

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
  var data = _taggedTemplateLiteral(["\n            <decidable-toggle @change=", ">\n              <span slot=\"label\">Emphasis</span>\n              <decidable-toggle-option name=", " value=\"none\" ?checked=", ">None</decidable-toggle-option>\n              <decidable-toggle-option name=", " value=\"accuracy\" ?checked=", ">Accuracy</decidable-toggle-option>\n              <decidable-toggle-option name=", " value=\"stimulus\" ?checked=", ">Stimulus</decidable-toggle-option>\n              <decidable-toggle-option name=", " value=\"response\" ?checked=", ">Response</decidable-toggle-option>\n              <decidable-toggle-option name=", " value=\"outcome\" ?checked=", ">Outcome</decidable-toggle-option>\n            </decidable-toggle>\n          "]);

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
  var data = _taggedTemplateLiteral(["<decidable-slider class=\"payoff\" min=\"0\" max=\"100\" step=\"1\" .value=", " @change=", " @input=", ">Payoff</decidable-slider>"]);

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
  var data = _taggedTemplateLiteral(["<decidable-slider min=\"0\" max=\"1\" step=\".01\" .value=", " @change=", " @input=", ">Coherence</decidable-slider>"]);

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
  var data = _taggedTemplateLiteral(["<decidable-slider min=\"10\" max=\"2000\" step=\"10\" .value=", " @change=", " @input=", ">Duration</decidable-slider>"]);

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
  var data = _taggedTemplateLiteral(["<decidable-slider min=\"1\" max=\"100\" step=\"1\" .value=", " @change=", " @input=", ">Trials</decidable-slider>"]);

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
var SDTControl = /*#__PURE__*/function (_SDTElement) {
  _inherits(SDTControl, _SDTElement);

  _createClass(SDTControl, null, [{
    key: "properties",
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
      return (0, _litElement.html)(_templateObject(), this.trials ? (0, _litElement.html)(_templateObject2(), this.trials, this.setTrials.bind(this), this.setTrials.bind(this)) : (0, _litElement.html)(_templateObject3()), this.duration ? (0, _litElement.html)(_templateObject4(), this.duration, this.setDuration.bind(this), this.setDuration.bind(this)) : (0, _litElement.html)(_templateObject5()), this.coherence ? (0, _litElement.html)(_templateObject6(), this.coherence, this.setCoherence.bind(this), this.setCoherence.bind(this)) : (0, _litElement.html)(_templateObject7()), this.payoff ? (0, _litElement.html)(_templateObject8(), this.payoff, this.setPayoff.bind(this), this.setPayoff.bind(this)) : (0, _litElement.html)(_templateObject9()), this.color !== undefined ? (0, _litElement.html)(_templateObject10(), this.chooseColor.bind(this), "".concat(this.uniqueId, "-color"), this.color === 'none', "".concat(this.uniqueId, "-color"), this.color === 'accuracy', "".concat(this.uniqueId, "-color"), this.color === 'stimulus', "".concat(this.uniqueId, "-color"), this.color === 'response', "".concat(this.uniqueId, "-color"), this.color === 'outcome') : (0, _litElement.html)(_templateObject11()), this.zRoc !== undefined ? (0, _litElement.html)(_templateObject12(), this.zRoc, this.flipZRoc.bind(this)) : (0, _litElement.html)(_templateObject13()), this.run ? (0, _litElement.html)(_templateObject14(), this.state === 'running' || this.state === 'ended', this.doRun.bind(this)) : (0, _litElement.html)(_templateObject15()), this.pause ? (0, _litElement.html)(_templateObject16(), this.state !== 'running', this.doPause.bind(this)) : (0, _litElement.html)(_templateObject17()), this.reset ? (0, _litElement.html)(_templateObject18(), this.state === 'resetted', this.doReset.bind(this)) : (0, _litElement.html)(_templateObject19()));
    }
  }], [{
    key: "styles",
    get: function get() {
      return [_get(_getPrototypeOf(SDTControl), "styles", this), (0, _litElement.css)(_templateObject20(), (0, _litElement.unsafeCSS)(this.cssBoxShadow(2, true, false)), (0, _litElement.unsafeCSS)(this.cssBoxShadow(4, true, false)), (0, _litElement.unsafeCSS)(this.cssBoxShadow(8, true, false)))];
    }
  }]);

  return SDTControl;
}(_sdtElement.default);

exports.default = SDTControl;
customElements.define('sdt-control', SDTControl);
//# sourceMappingURL=sdt-control.js.map
