"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _litElement = require("lit-element");

var _sdtElement = _interopRequireDefault(require("../sdt-element"));

var _styleButton = _interopRequireDefault(require("../mixins/styleButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n        :host {\n          display: inline-block;\n        }\n\n        /* Overall container */\n        .holder {\n          display: flex;\n\n          flex-direction: row;\n        }\n\n        /* Response buttons */\n        .responses {\n          display: flex;\n\n          flex-direction: column;\n\n          align-items: stretch;\n          justify-content: center;\n        }\n\n        .waiting:disabled {\n          background-color: var(---color-element-enabled);\n          outline: none;\n          box-shadow: none;\n        }\n\n        .selected[name=\"present\"]:disabled {\n          background-color: var(---color-present);\n        }\n\n        .selected[name=\"absent\"]:disabled {\n          background-color: var(---color-absent);\n        }\n\n        /* Feedback messages */\n        .feedbacks {\n          display: flex;\n\n          flex-direction: column;\n\n          justify-content: center;\n        }\n\n        /* Trial feedback */\n        .trial {\n          text-align: center;\n        }\n\n        .trial .label {\n          font-weight: 600;\n        }\n\n        /* Outcome feedback */\n        .feedback {\n          display: flex;\n\n          flex-direction: column;\n\n          align-items: center;\n          justify-content: center;\n\n          width: 6rem;\n          height: 3.5rem;\n          padding: 0.375rem 0.75rem;\n          margin: 0.25rem;\n\n          text-align: center;\n\n          background-color: var(---color-element-background);\n          border: 1px solid var(---color-element-border);\n        }\n\n        .feedback.h {\n          background-color: var(---color-h-light);\n        }\n\n        .feedback.m {\n          background-color: var(---color-m-light);\n        }\n\n        .feedback.fa {\n          background-color: var(---color-fa-light);\n        }\n\n        .feedback.cr {\n          background-color: var(---color-cr-light);\n        }\n\n        .feedback.nr {\n          background-color: var(---color-nr-light);\n        }\n\n        .feedback.c {\n          background-color: var(---color-correct-light);\n        }\n\n        .feedback.e {\n          color: var(---color-text-inverse);\n\n          background-color: var(---color-error-light);\n        }\n\n        .feedback .outcome {\n          font-weight: 600;\n          line-height: 1.15;\n        }\n\n        :host([payoff=\"trial\"]) .feedback,\n        :host([payoff=\"total\"]) .feedback {\n          height: 4rem;\n        }\n\n        /* Payoff feedback */\n        .payoff {\n          text-align: center;\n        }\n\n        .payoff .label {\n          font-weight: 600;\n        }\n      "]);

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
  var data = _taggedTemplateLiteral([""]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n                  <div class=\"payoff\">\n                    <span class=\"label\">Total: </span><span class=\"value\">", "</span>\n                  </div>"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral([""]);

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
  var data = _taggedTemplateLiteral(["<span class=\"payoff\">", "</span>"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["<span class=\"outcome\">No<br>Response</span>"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["<span class=\"outcome\">Error</span>"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["<span class=\"outcome\">Correct</span>"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["<span class=\"outcome\">No<br>Response</span>"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["<span class=\"outcome\">Correct<br>Rejection</span>"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["<span class=\"outcome\">False<br>Alarm</span>"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["<span class=\"outcome\">Miss</span>"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["<span class=\"outcome\">Hit</span>"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n                  <div class=", ">\n                    ", "\n                    ", "\n                  </div>"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n                  <div class=\"trial\">\n                    <span class=\"label\">Trial: </span><span class=\"count\">", "</span><span class=\"of\"> of </span><span class=\"total\">", "</span>\n                  </div>"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n            <div class=\"feedbacks\">\n              ", "\n              ", "\n              ", "\n            </div>"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <div class=\"holder\">\n        <div class=\"responses\">\n          <button name=\"present\" class=", " ?disabled=", " @click=", ">Present</button>\n          <button name=\"absent\" class=", " ?disabled=", " @click=", ">Absent</button>\n        </div>\n        ", "\n      </div>"]);

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
  SDTResponse element
  <sdt-response>

  Attributes:

*/
var SDTResponse = /*#__PURE__*/function (_SDTMixinStyleButton) {
  _inherits(SDTResponse, _SDTMixinStyleButton);

  _createClass(SDTResponse, null, [{
    key: "properties",
    get: function get() {
      return {
        feedback: {
          attribute: 'feedback',
          type: String,
          reflect: true
        },
        trial: {
          attribute: 'trial',
          type: Boolean,
          reflect: true
        },
        payoff: {
          attribute: 'payoff',
          type: String,
          reflect: true
        },
        hPayoff: {
          attribute: 'hit-payoff',
          type: Number,
          reflect: true
        },
        mPayoff: {
          attribute: 'miss-payoff',
          type: Number,
          reflect: true
        },
        faPayoff: {
          attribute: 'false-alarm-payoff',
          type: Number,
          reflect: true
        },
        crPayoff: {
          attribute: 'correct-rejection-payoff',
          type: Number,
          reflect: true
        },
        nrPayoff: {
          attribute: 'no-response-payoff',
          type: Number,
          reflect: true
        },
        state: {
          attribute: false,
          type: String,
          reflect: false
        },
        trialCount: {
          attribute: false,
          type: Number,
          reflect: false
        },
        trialTotal: {
          attribute: false,
          type: Number,
          reflect: false
        }
      };
    }
  }]);

  function SDTResponse() {
    var _this;

    _classCallCheck(this, SDTResponse);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SDTResponse).call(this)); // Attributes

    _this.feedbacks = ['none', 'accuracy', 'outcome']; // Possible values for 'feedback'

    _this.feedback = 'outcome'; // What feedback to display

    _this.trial = false; // Show trial count?

    _this.payoffs = ['none', 'trial', 'total']; // Possible types of 'payoff' info

    _this.payoff = 'none'; // What payoff info to display

    _this.hPayoff = 0; // Hit payoff

    _this.mPayoff = 0; // Miss payoff

    _this.crPayoff = 0; // Correct Rejection payoff

    _this.faPayoff = 0; // False Alarm payoff

    _this.nrPayoff = 0; // No Response payoff
    // Properties

    _this.states = ['off', 'waiting', 'feedback']; // Possible states

    _this.state = 'off'; // Current state

    _this.trialCount = 0; // Current trial

    _this.trialTotal = 0; // Total trials
    // Private

    _this.signals = ['present', 'absent']; // Possible values of 'signal'

    _this.signal = undefined; // Signal for current trial

    _this.responses = ['present', 'absent']; // Possible values of 'response'

    _this.response = undefined; // Response for current trial

    _this.outcomes = ['h', 'm', 'fa', 'cr', 'nr']; // Possible values of 'outcome'

    _this.outcome = undefined; // Outcome for current trial

    _this.accuracies = ['c', 'e', 'nr']; // Possible values of 'accuracy'

    _this.accuracy = undefined; // Accuracy for current trial

    _this.h = 0; // Count of Hits

    _this.m = 0; // Count of Misses

    _this.cr = 0; // Count of Correct Rejections

    _this.fa = 0; // Count of False Alarms

    _this.c = 0; // Count of Correct trials

    _this.e = 0; // Count of Error trials

    _this.nr = 0; // Count of No Response trials

    return _this;
  }

  _createClass(SDTResponse, [{
    key: "start",
    value: function start(signal, trial) {
      this.trialCount = trial;
      this.state = 'waiting';
      this.signal = signal;
      this.response = undefined;
      this.outcome = undefined;
    }
  }, {
    key: "stop",
    value: function stop() {
      this.state = 'feedback';

      if (this.response === undefined) {
        this.outcome = 'nr';
        this.nr += 1;
        this.accuracy = 'nr';
      }
    }
  }, {
    key: "present",
    value: function present() {
      this.responded('present');
    }
  }, {
    key: "absent",
    value: function absent() {
      this.responded('absent');
    }
  }, {
    key: "responded",
    value: function responded(response) {
      this.state = 'feedback';
      this.response = response;

      if (this.signal === 'present' && this.response === 'present') {
        this.outcome = 'h';
        this.h += 1;
        this.accuracy = 'c';
        this.c += 1;
      } else if (this.signal === 'present' && this.response === 'absent') {
        this.outcome = 'm';
        this.m += 1;
        this.accuracy = 'e';
        this.e += 1;
      } else if (this.signal === 'absent' && this.response === 'present') {
        this.outcome = 'fa';
        this.fa += 1;
        this.accuracy = 'e';
        this.e += 1;
      } else if (this.signal === 'absent' && this.response === 'absent') {
        this.outcome = 'cr';
        this.cr += 1;
        this.accuracy = 'c';
        this.c += 1;
      }

      this.dispatchEvent(new CustomEvent('sdt-response', {
        detail: {
          trial: this.trialCount,
          signal: this.signal,
          response: this.response,
          outcome: this.outcome,
          payoff: this.trialPayoff,
          h: this.h,
          m: this.m,
          fa: this.fa,
          cr: this.cr,
          nr: this.nr,
          totalPayoff: this.totalPayoff
        },
        bubbles: true
      }));
    }
  }, {
    key: "reset",
    value: function reset() {
      this.state = 'off';
      this.trialCount = 0;
      this.signal = undefined;
      this.response = undefined;
      this.outcome = undefined;
      this.accuracy = undefined;
      this.h = 0;
      this.m = 0;
      this.cr = 0;
      this.fa = 0;
      this.nr = 0;
      this.c = 0;
      this.e = 0;
    }
  }, {
    key: "render",
    value: function render() {
      return (0, _litElement.html)(_templateObject(), this.state === 'feedback' && this.response === 'present' ? 'selected' : this.state === 'waiting' ? 'waiting' : '', this.state !== 'waiting' || this.interactive !== true, this.present.bind(this), this.state === 'feedback' && this.response === 'absent' ? 'selected' : this.state === 'waiting' ? 'waiting' : '', this.state !== 'waiting' || this.interactive !== true, this.absent.bind(this), this.trial || this.feedback !== 'none' || this.payoff === 'total' ? (0, _litElement.html)(_templateObject2(), this.trial ? (0, _litElement.html)(_templateObject3(), this.trialCount, this.trialTotal) : (0, _litElement.html)(_templateObject4()), this.feedback !== 'none' ? (0, _litElement.html)(_templateObject5(), "feedback ".concat(this.state === 'feedback' ? this.feedback === 'outcome' ? this.outcome : this.accuracy : ''), this.state === 'feedback' ? this.feedback === 'outcome' ? this.outcome === 'h' ? (0, _litElement.html)(_templateObject6()) : this.outcome === 'm' ? (0, _litElement.html)(_templateObject7()) : this.outcome === 'fa' ? (0, _litElement.html)(_templateObject8()) : this.outcome === 'cr' ? (0, _litElement.html)(_templateObject9()) : (0, _litElement.html)(_templateObject10()) : this.accuracy === 'c' ? (0, _litElement.html)(_templateObject11()) : this.accuracy === 'e' ? (0, _litElement.html)(_templateObject12()) : (0, _litElement.html)(_templateObject13()) : '', this.payoff === 'trial' || this.payoff === 'total' ? (0, _litElement.html)(_templateObject14(), this.trialPayoff) : (0, _litElement.html)(_templateObject15())) : (0, _litElement.html)(_templateObject16()), this.payoff === 'total' ? (0, _litElement.html)(_templateObject17(), this.totalPayoff) : (0, _litElement.html)(_templateObject18())) : (0, _litElement.html)(_templateObject19()));
    }
  }, {
    key: "trialPayoff",
    get: function get() {
      switch (this.outcome) {
        case 'h':
          return this.hPayoff;

        case 'm':
          return this.mPayoff;

        case 'fa':
          return this.faPayoff;

        case 'cr':
          return this.crPayoff;

        case 'nr':
          return this.nrPayoff;

        default:
          return undefined;
      }
    }
  }, {
    key: "totalPayoff",
    get: function get() {
      return this.h * this.hPayoff + this.m * this.mPayoff + this.cr * this.crPayoff + this.fa * this.faPayoff + this.nr * this.nrPayoff;
    }
  }], [{
    key: "styles",
    get: function get() {
      return [_get(_getPrototypeOf(SDTResponse), "styles", this), (0, _litElement.css)(_templateObject20())];
    }
  }]);

  return SDTResponse;
}((0, _styleButton.default)(_sdtElement.default));

exports.default = SDTResponse;
customElements.define('sdt-response', SDTResponse);
//# sourceMappingURL=sdt-response.js.map
