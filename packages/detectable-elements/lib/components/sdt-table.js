"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _litElement = require("lit-element");

var _detectableMath = _interopRequireDefault(require("@decidable/detectable-math"));

var _sdtElement = _interopRequireDefault(require("../sdt-element"));

var _styleSpinner = _interopRequireDefault(require("../mixins/styleSpinner"));

var _converterSet = _interopRequireDefault(require("../mixins/converterSet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject46() {
  var data = _taggedTemplateLiteral(["\n        :host {\n          display: inline-block;\n        }\n\n        /* Overall element */\n        table {\n          text-align: center;\n\n          border-collapse: collapse;\n\n          border: 0;\n        }\n\n        /* Headers */\n        .th-main {\n          padding: 0;\n\n          font-weight: bold;\n        }\n\n        .th-sub {\n          padding: 0 0.25rem;\n\n          font-weight: 600;\n        }\n\n        .th-left {\n          padding-left: 0;\n\n          text-align: right;\n        }\n\n        /* Cells */\n        .td {\n          width: 10rem;\n\n          padding: 0.25rem 0.25rem 0.375rem;\n        }\n\n        .numeric .td {\n          width: 7rem;\n        }\n\n        /* Labels */\n        label {\n          margin: 0;\n        }\n\n        label span {\n          display: block;\n\n          font-size: 0.75rem;\n        }\n\n        .payoff {\n          font-weight: 600;\n          line-height: 0.75rem;\n        }\n\n        /* User interaction <input> */\n        input {\n          background: none;\n        }\n\n        .td-data input {\n          width: 3.5rem;\n        }\n\n        .td-summary input {\n          width: 4.5rem;\n        }\n\n        /* Table emphasis */\n        .h {\n          border-top: 2px solid var(---color-element-emphasis);\n          border-left: 2px solid var(---color-element-emphasis);\n        }\n\n        .m {\n          border-top: 2px solid var(---color-element-emphasis);\n          border-right: 2px solid var(---color-element-emphasis);\n        }\n\n        .fa {\n          border-bottom: 2px solid var(---color-element-emphasis);\n          border-left: 2px solid var(---color-element-emphasis);\n        }\n\n        .cr {\n          border-right: 2px solid var(---color-element-emphasis);\n          border-bottom: 2px solid var(---color-element-emphasis);\n        }\n\n        /* Color schemes */\n        /* stylelint-disable-next-line no-descending-specificity */\n        .td,\n        .td input {\n          transition: all var(---transition-duration) ease;\n        }\n\n        /* Outcome color scheme */\n        .h,\n        .h input {\n          background: var(---color-h-light);\n        }\n\n        .m,\n        .m input {\n          background: var(---color-m-light);\n        }\n\n        .fa,\n        .fa input {\n          background: var(---color-fa-light);\n        }\n\n        .cr,\n        .cr input {\n          background: var(---color-cr-light);\n        }\n\n        .hr,\n        .hr input {\n          background: var(---color-hr-light);\n        }\n\n        .far,\n        .far input {\n          background: var(---color-far-light);\n        }\n\n        .acc,\n        .acc input {\n          background: var(---color-acc-light);\n        }\n\n        .ppv,\n        .ppv input {\n          background: var(---color-present-light);\n        }\n\n        .fomr,\n        .fomr input {\n          background: var(---color-absent-light);\n        }\n\n        /* Accuracy color scheme */\n        :host([color=\"accuracy\"]) .h,\n        :host([color=\"accuracy\"]) .h input,\n        :host([color=\"accuracy\"]) .cr,\n        :host([color=\"accuracy\"]) .cr input {\n          background: var(---color-correct-light);\n        }\n\n        :host([color=\"accuracy\"]) .m,\n        :host([color=\"accuracy\"]) .m input,\n        :host([color=\"accuracy\"]) .fa,\n        :host([color=\"accuracy\"]) .fa input {\n          color: var(---color-text-inverse);\n\n          background: var(---color-error-light);\n        }\n\n        :host([color=\"accuracy\"]) .hr,\n        :host([color=\"accuracy\"]) .hr input,\n        :host([color=\"accuracy\"]) .far,\n        :host([color=\"accuracy\"]) .far input,\n        :host([color=\"accuracy\"]) .ppv,\n        :host([color=\"accuracy\"]) .ppv input,\n        :host([color=\"accuracy\"]) .fomr,\n        :host([color=\"accuracy\"]) .fomr input {\n          background: var(---color-element-background);\n        }\n\n        /* Stimulus color scheme */\n        :host([color=\"stimulus\"]) .cr,\n        :host([color=\"stimulus\"]) .cr input,\n        :host([color=\"stimulus\"]) .fa,\n        :host([color=\"stimulus\"]) .fa input {\n          background: var(---color-far-light);\n        }\n\n        :host([color=\"stimulus\"]) .m,\n        :host([color=\"stimulus\"]) .m input,\n        :host([color=\"stimulus\"]) .h,\n        :host([color=\"stimulus\"]) .h input {\n          background: var(---color-hr-light);\n        }\n\n        :host([color=\"stimulus\"]) .ppv,\n        :host([color=\"stimulus\"]) .ppv input,\n        :host([color=\"stimulus\"]) .fomr,\n        :host([color=\"stimulus\"]) .fomr input,\n        :host([color=\"stimulus\"]) .acc,\n        :host([color=\"stimulus\"]) .acc input {\n          background: var(---color-element-background);\n        }\n\n        /* Response color scheme */\n        :host([color=\"response\"]) .cr,\n        :host([color=\"response\"]) .cr input,\n        :host([color=\"response\"]) .m,\n        :host([color=\"response\"]) .m input {\n          background: var(---color-absent-light);\n        }\n\n        :host([color=\"response\"]) .fa,\n        :host([color=\"response\"]) .fa input,\n        :host([color=\"response\"]) .h,\n        :host([color=\"response\"]) .h input {\n          background: var(---color-present-light);\n        }\n\n        :host([color=\"response\"]) .hr,\n        :host([color=\"response\"]) .hr input,\n        :host([color=\"response\"]) .far,\n        :host([color=\"response\"]) .far input,\n        :host([color=\"response\"]) .acc,\n        :host([color=\"response\"]) .acc input {\n          background: var(---color-element-background);\n        }\n\n        /* No color scheme */\n        :host([color=\"none\"]) .cr,\n        :host([color=\"none\"]) .cr input,\n        :host([color=\"none\"]) .fa,\n        :host([color=\"none\"]) .fa input,\n        :host([color=\"none\"]) .m,\n        :host([color=\"none\"]) .m input,\n        :host([color=\"none\"]) .h,\n        :host([color=\"none\"]) .h input,\n        :host([color=\"none\"]) .hr,\n        :host([color=\"none\"]) .hr input,\n        :host([color=\"none\"]) .far,\n        :host([color=\"none\"]) .far input,\n        :host([color=\"none\"]) .ppv,\n        :host([color=\"none\"]) .ppv input,\n        :host([color=\"none\"]) .fomr,\n        :host([color=\"none\"]) .fomr input,\n        :host([color=\"none\"]) .acc,\n        :host([color=\"none\"]) .acc input {\n          background: var(---color-element-background);\n        }\n      "]);

  _templateObject46 = function _templateObject46() {
    return data;
  };

  return data;
}

function _templateObject45() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject45 = function _templateObject45() {
    return data;
  };

  return data;
}

function _templateObject44() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject44 = function _templateObject44() {
    return data;
  };

  return data;
}

function _templateObject43() {
  var data = _taggedTemplateLiteral(["\n                    <td class=\"td td-summary acc\" rowspan=\"2\">\n                      ", "\n                    </td>"]);

  _templateObject43 = function _templateObject43() {
    return data;
  };

  return data;
}

function _templateObject42() {
  var data = _taggedTemplateLiteral(["\n                    <td colspan=\"2\"></td>"]);

  _templateObject42 = function _templateObject42() {
    return data;
  };

  return data;
}

function _templateObject41() {
  var data = _taggedTemplateLiteral(["\n                    <td class=\"td td-summary ppv\">\n                      ", "\n                    </td>\n                    <td class=\"td td-summary fomr\">\n                      ", "\n                    </td>"]);

  _templateObject41 = function _templateObject41() {
    return data;
  };

  return data;
}

function _templateObject40() {
  var data = _taggedTemplateLiteral(["\n              <tr>\n                <td colspan=\"2\"></td>\n                ", "\n                ", "\n              </tr>"]);

  _templateObject40 = function _templateObject40() {
    return data;
  };

  return data;
}

function _templateObject39() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject39 = function _templateObject39() {
    return data;
  };

  return data;
}

function _templateObject38() {
  var data = _taggedTemplateLiteral(["\n                <td class=\"td td-summary far\">\n                  ", "\n                </td>"]);

  _templateObject38 = function _templateObject38() {
    return data;
  };

  return data;
}

function _templateObject37() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject37 = function _templateObject37() {
    return data;
  };

  return data;
}

function _templateObject36() {
  var data = _taggedTemplateLiteral(["\n                <td class=\"td td-summary hr\">\n                  ", "\n                </td>"]);

  _templateObject36 = function _templateObject36() {
    return data;
  };

  return data;
}

function _templateObject35() {
  var data = _taggedTemplateLiteral(["\n      <table class=", ">\n        <thead>\n          <tr>\n            <th colspan=\"2\" rowspan=\"2\"></th>\n            <th class=\"th th-main\" colspan=\"2\" scope=\"col\">\n              Response\n            </th>\n          </tr>\n          <tr>\n            <th class=\"th th-sub\" scope=\"col\">\n              \"Present\"\n            </th>\n            <th class=\"th th-sub\" scope=\"col\">\n              \"Absent\"\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <th class=\"th th-main\" rowspan=\"2\" scope=\"row\">\n              Signal\n            </th>\n            <th class=\"th th-sub th-left\" scope=\"row\">\n              Present\n            </th>\n            <td class=\"td td-data h\">\n              ", "\n            </td>\n            <td class=\"td td-data m\">\n              ", "\n            </td>\n            ", "\n          </tr>\n          <tr>\n            <th class=\"th th-sub th-left\" scope=\"row\">\n              Absent\n            </th>\n            <td class=\"td td-data fa\">\n              ", "\n            </td>\n            <td class=\"td td-data cr\">\n              ", "\n            </td>\n            ", "\n          </tr>\n          ", "\n        </tbody>\n      </table>"]);

  _templateObject35 = function _templateObject35() {
    return data;
  };

  return data;
}

function _templateObject34() {
  var data = _taggedTemplateLiteral(["<span>False Omission Rate</span>"]);

  _templateObject34 = function _templateObject34() {
    return data;
  };

  return data;
}

function _templateObject33() {
  var data = _taggedTemplateLiteral(["<span>Positive Predictive Value</span>"]);

  _templateObject33 = function _templateObject33() {
    return data;
  };

  return data;
}

function _templateObject32() {
  var data = _taggedTemplateLiteral(["<span>Accuracy</span>"]);

  _templateObject32 = function _templateObject32() {
    return data;
  };

  return data;
}

function _templateObject31() {
  var data = _taggedTemplateLiteral(["<span>False Alarm Rate</span>"]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = _taggedTemplateLiteral(["<span>Hit Rate</span>"]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteral(["<span class=\"payoff\">", "</span>"]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteral(["<span>Correct Rejections</span>\n        ", ""]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["<span class=\"payoff\">", "</span>"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["<span>False Alarms</span>\n        ", ""]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["<span class=\"payoff\">", "</span>"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["<span>Misses</span>\n        ", ""]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["<span class=\"payoff\">", "</span>"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["<span>Hits</span>\n        ", ""]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["<label>\n          <span>False Omission Rate</span>\n          <input ?disabled=", " type=\"number\" min=\"0\" max=\"1\" step=\".001\" .value=\"", "\" @input=", ">\n        </label>"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["<label>\n          <span>Positive Predictive Value</span>\n          <input ?disabled=", " type=\"number\" min=\"0\" max=\"1\" step=\".001\" .value=\"", "\" @input=", ">\n        </label>"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["<label>\n          <span>Accuracy</span>\n          <input ?disabled=", " type=\"number\" min=\"0\" max=\"1\" step=\".001\" .value=\"", "\" @input=", ">\n        </label>"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["<label>\n          <span>False Alarm Rate</span>\n          <input ?disabled=", " type=\"number\" min=\"0\" max=\"1\" step=\".001\" .value=\"", "\" @input=", ">\n        </label>"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["<label>\n          <span>Hit Rate</span>\n          <input ?disabled=", " type=\"number\" min=\"0\" max=\"1\" step=\".001\" .value=\"", "\" @input=", ">\n        </label>"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["<span class=\"payoff\">", "</span>"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["<label>\n          <span>Correct Rejections</span>\n          ", "\n          <input ?disabled=", " type=\"number\" min=\"0\" .value=\"", "\" @input=", ">\n        </label>"]);

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
  var data = _taggedTemplateLiteral(["<span class=\"payoff\">", "</span>"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["<label>\n          <span>False Alarms</span>\n          ", "\n          <input ?disabled=", " type=\"number\" min=\"0\" .value=\"", "\" @input=", ">\n        </label>"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["<span class=\"payoff\">", "</span>"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["<label>\n          <span>Misses</span>\n          ", "\n          <input ?disabled=", " type=\"number\" min=\"0\" .value=\"", "\" @input=", ">\n        </label>"]);

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
  var data = _taggedTemplateLiteral(["<span class=\"payoff\">", "</span>"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["<label>\n          <span>Hits</span>\n          ", "\n          <input ?disabled=", " type=\"number\" min=\"0\" .value=\"", "\" @input=", ">\n        </label>"]);

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
  SDTTable element
  <sdt-table>

  Attributes:
  Hit; Miss; FalseAlarm; CorrectRejection;
*/
var SDTTable = /*#__PURE__*/function (_SDTMixinConverterSet) {
  _inherits(SDTTable, _SDTMixinConverterSet);

  _createClass(SDTTable, null, [{
    key: "properties",
    get: function get() {
      return {
        numeric: {
          attribute: 'numeric',
          type: Boolean,
          reflect: true
        },
        summary: {
          attribute: 'summary',
          converter: _converterSet.default.converterSet,
          reflect: true
        },
        color: {
          attribute: 'color',
          type: String,
          reflect: true
        },
        h: {
          attribute: 'hits',
          type: Number,
          reflect: true
        },
        m: {
          attribute: 'misses',
          type: Number,
          reflect: true
        },
        fa: {
          attribute: 'false-alarms',
          type: Number,
          reflect: true
        },
        cr: {
          attribute: 'correct-rejections',
          type: Number,
          reflect: true
        },
        payoff: {
          attribute: 'payoff',
          type: Boolean,
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
        far: {
          attribute: false,
          type: Number,
          reflect: false
        },
        hr: {
          attribute: false,
          type: Number,
          reflect: false
        },
        acc: {
          attribute: false,
          type: Number,
          reflect: false
        },
        // positive predictive value (https://en.wikipedia.org/wiki/Receiver_operating_characteristic)
        ppv: {
          attribute: false,
          type: Number,
          reflect: false
        },
        // false omission rate (https://en.wikipedia.org/wiki/Receiver_operating_characteristic)
        // Using "fomr" to avoid keyword "for"
        fomr: {
          attribute: false,
          type: Number,
          reflect: false
        }
      };
    }
  }]);

  function SDTTable() {
    var _this;

    _classCallCheck(this, SDTTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SDTTable).call(this));
    _this.numeric = false;
    _this.summaries = ['stimulusRates, responseRates, accuracy'];
    _this.summary = new Set();
    _this.colors = ['stimulus', 'response', 'outcome', 'none'];
    _this.color = 'outcome';
    _this.h = 40;
    _this.m = 60;
    _this.fa = 75;
    _this.cr = 25;

    _this.alignState();

    _this.payoff = false;
    _this.hPayoff = undefined; // Hit payoff

    _this.mPayoff = undefined; // Miss payoff

    _this.crPayoff = undefined; // Correct Rejection payoff

    _this.faPayoff = undefined; // False Alarm payoff

    return _this;
  }

  _createClass(SDTTable, [{
    key: "alignState",
    value: function alignState() {
      this.hr = _detectableMath.default.hM2Hr(this.h, this.m);
      this.far = _detectableMath.default.faCr2Far(this.fa, this.cr);
      this.acc = _detectableMath.default.hMFaCr2Acc(this.h, this.m, this.fa, this.cr);
      this.ppv = _detectableMath.default.hFa2Ppv(this.h, this.fa);
      this.fomr = _detectableMath.default.mCr2Fomr(this.m, this.cr);
    }
  }, {
    key: "sendEvent",
    value: function sendEvent() {
      this.dispatchEvent(new CustomEvent('sdt-table-change', {
        detail: {
          h: this.h,
          m: this.m,
          hr: this.hr,
          fa: this.fa,
          cr: this.cr,
          far: this.far,
          acc: this.acc,
          ppv: this.ppv,
          fomr: this.fomr
        },
        bubbles: true
      }));
    }
  }, {
    key: "hInput",
    value: function hInput(e) {
      this.h = parseInt(e.target.value, 10);
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "mInput",
    value: function mInput(e) {
      this.m = parseInt(e.target.value, 10);
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "faInput",
    value: function faInput(e) {
      this.fa = parseInt(e.target.value, 10);
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "crInput",
    value: function crInput(e) {
      this.cr = parseInt(e.target.value, 10);
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "hrInput",
    value: function hrInput(e) {
      var newhr = parseFloat(e.target.value);
      var present = this.h + this.m;
      this.h = Math.round(newhr * present);
      this.m = present - this.h;
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "farInput",
    value: function farInput(e) {
      var newfar = parseFloat(e.target.value);
      var absent = this.fa + this.cr;
      this.fa = Math.round(newfar * absent);
      this.cr = absent - this.fa;
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "accInput",
    value: function accInput(e) {
      var newacc = parseFloat(e.target.value);
      var present = this.h + this.m;
      var absent = this.fa + this.cr;
      var x = (this.hr + this.far - 1) / 2; // Rotate into ACC

      var newhr = x + newacc;
      var newfar = 1 + x - newacc;

      if (newfar > 1) {
        newfar = 1;
        newhr = newfar + 2 * newacc - 1;
      }

      if (newfar < 0) {
        newfar = 0;
        newhr = newfar + 2 * newacc - 1;
      }

      if (newhr > 1) {
        newhr = 1;
        newfar = newhr - 2 * newacc + 1;
      }

      if (newhr < 0) {
        newhr = 0;
        newfar = newhr - 2 * newacc + 1;
      }

      this.h = Math.round(newhr * present);
      this.m = present - this.h;
      this.fa = Math.round(newfar * absent);
      this.cr = absent - this.fa;
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "ppvInput",
    value: function ppvInput(e) {
      var newppv = parseFloat(e.target.value);
      var present = this.h + this.fa;
      this.h = Math.round(newppv * present);
      this.fa = present - this.h;
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "fomrInput",
    value: function fomrInput(e) {
      var newfomr = parseFloat(e.target.value);
      var present = this.m + this.cr;
      this.m = Math.round(newfomr * present);
      this.cr = present - this.m;
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "render",
    value: function render() {
      var payoffFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
      this.alignState();
      var h;
      var m;
      var fa;
      var cr;
      var hr;
      var far;
      var acc;
      var ppv;
      var fomr;

      if (this.numeric) {
        h = (0, _litElement.html)(_templateObject(), this.payoff ? (0, _litElement.html)(_templateObject2(), payoffFormatter.format(this.hPayoff)) : (0, _litElement.html)(_templateObject3()), !this.interactive, this.h, this.hInput.bind(this));
        m = (0, _litElement.html)(_templateObject4(), this.payoff ? (0, _litElement.html)(_templateObject5(), payoffFormatter.format(this.mPayoff)) : (0, _litElement.html)(_templateObject6()), !this.interactive, this.m, this.mInput.bind(this));
        fa = (0, _litElement.html)(_templateObject7(), this.payoff ? (0, _litElement.html)(_templateObject8(), payoffFormatter.format(this.faPayoff)) : (0, _litElement.html)(_templateObject9()), !this.interactive, this.fa, this.faInput.bind(this));
        cr = (0, _litElement.html)(_templateObject10(), this.payoff ? (0, _litElement.html)(_templateObject11(), payoffFormatter.format(this.crPayoff)) : (0, _litElement.html)(_templateObject12()), !this.interactive, this.cr, this.crInput.bind(this));
        hr = (0, _litElement.html)(_templateObject13(), !this.interactive, +this.hr.toFixed(3), this.hrInput.bind(this));
        far = (0, _litElement.html)(_templateObject14(), !this.interactive, +this.far.toFixed(3), this.farInput.bind(this));
        acc = (0, _litElement.html)(_templateObject15(), !this.interactive, +this.acc.toFixed(3), this.accInput.bind(this));
        ppv = (0, _litElement.html)(_templateObject16(), !this.interactive, +this.ppv.toFixed(3), this.ppvInput.bind(this));
        fomr = (0, _litElement.html)(_templateObject17(), !this.interactive, +this.fomr.toFixed(3), this.fomrInput.bind(this));
      } else {
        h = (0, _litElement.html)(_templateObject18(), this.payoff ? (0, _litElement.html)(_templateObject19(), payoffFormatter.format(this.hPayoff)) : (0, _litElement.html)(_templateObject20()));
        m = (0, _litElement.html)(_templateObject21(), this.payoff ? (0, _litElement.html)(_templateObject22(), payoffFormatter.format(this.mPayoff)) : (0, _litElement.html)(_templateObject23()));
        fa = (0, _litElement.html)(_templateObject24(), this.payoff ? (0, _litElement.html)(_templateObject25(), payoffFormatter.format(this.faPayoff)) : (0, _litElement.html)(_templateObject26()));
        cr = (0, _litElement.html)(_templateObject27(), this.payoff ? (0, _litElement.html)(_templateObject28(), payoffFormatter.format(this.crPayoff)) : (0, _litElement.html)(_templateObject29()));
        hr = (0, _litElement.html)(_templateObject30());
        far = (0, _litElement.html)(_templateObject31());
        acc = (0, _litElement.html)(_templateObject32());
        ppv = (0, _litElement.html)(_templateObject33());
        fomr = (0, _litElement.html)(_templateObject34());
      }

      return (0, _litElement.html)(_templateObject35(), this.numeric ? 'numeric' : '', h, m, this.summary.has('stimulusRates') ? (0, _litElement.html)(_templateObject36(), hr) : (0, _litElement.html)(_templateObject37()), fa, cr, this.summary.has('stimulusRates') ? (0, _litElement.html)(_templateObject38(), far) : (0, _litElement.html)(_templateObject39()), this.summary.has('responseRates') || this.summary.has('accuracy') ? (0, _litElement.html)(_templateObject40(), this.summary.has('responseRates') ? (0, _litElement.html)(_templateObject41(), ppv, fomr) : (0, _litElement.html)(_templateObject42()), this.summary.has('accuracy') ? (0, _litElement.html)(_templateObject43(), acc) : (0, _litElement.html)(_templateObject44())) : (0, _litElement.html)(_templateObject45()));
    }
  }], [{
    key: "styles",
    get: function get() {
      return [_get(_getPrototypeOf(SDTTable), "styles", this), (0, _litElement.css)(_templateObject46())];
    }
  }]);

  return SDTTable;
}((0, _converterSet.default)((0, _styleSpinner.default)(_sdtElement.default)));

exports.default = SDTTable;
customElements.define('sdt-table', SDTTable);
//# sourceMappingURL=sdt-table.js.map
