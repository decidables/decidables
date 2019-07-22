
import {html, css} from 'lit-element';

import SDTExample from './sdt-example';

/*
  SDTExample_Legend element
  <sdt-example-legend>
*/
export default class SDTExampleLegend extends SDTExample {
  static get styles() {
    return [
      super.styles,
      css`
        dt {
          padding: 0.375rem 0.675rem;
        }

        dd {
          margin-top: 0.25rem;
          margin-bottom: 1rem;
        }

        .h {
          background: var(---color-h-light);
          border-left: 1rem solid var(---color-h);
        }

        .m {
          background: var(---color-m-light);
          border-left: 1rem solid var(---color-m);
        }

        .fa {
          background: var(---color-fa-light);
          border-left: 1rem solid var(---color-fa);
        }

        .cr {
          background: var(---color-cr-light);
          border-left: 1rem solid var(---color-cr);
        }

        .hr {
          background: var(---color-hr-light);
          border-left: 1rem solid var(---color-hr);
        }

        .far {
          background: var(---color-far-light);
          border-left: 1rem solid var(---color-far);
        }

        .acc {
          background: var(---color-acc-light);
          border-left: 1rem solid var(---color-acc);
        }

        .d {
          background: var(---color-d-light);
          border-left: 1rem solid var(---color-d);
        }

        .c {
          background: var(---color-c-light);
          border-left: 1rem solid var(---color-c);
        }

        .s {
          background: var(---color-s-light);
          border-left: 1rem solid var(---color-s);
        }

        .present {
          background: var(---color-present-light);
          border-left: 1rem solid var(---color-present);
        }

        .absent {
          background: var(---color-absent-light);
          border-left: 1rem solid var(---color-absent);
        }

        .correct {
          padding-left: calc(1.675rem - 1px);

          background: var(---color-correct);
          border: 1px solid var(---color-element-border);
        }

        .error {
          color: var(---color-text-light);

          background: var(---color-error);
          border-left: 1rem solid var(---color-error);
        }
      `,
    ];
  }

  render() { // eslint-disable-line class-methods-use-this
    return html`
      <div class="holder">
        <div class="body">
          <dl>
            <dt class="present">Response 'Present'</dt>
            <dd>This is a 'blank'.</dd>
            <dt class="absent">Response 'Absent'</dt>
            <dd>This is a 'blank'.</dd>
            <dt class="correct">Correct</dt>
            <dd>This is a 'blank'.</dd>
            <dt class="error">Error</dt>
            <dd>This is a 'blank'.</dd>
            <dt class="acc">Accuracy</dt>
            <dd>This is a 'blank'.</dd>
            <dt class="h">Hit (<var class="math-var">H</var>)</dt>
            <dd>This is a 'blank'.</dd>
            <dt class="m">Miss (<var class="math-var">M</var>)</dt>
            <dd>This is a 'blank'.</dd>
            <dt class="fa">False Alarm (<var class="math-var">FA</var>)</dt>
            <dd>This is a 'blank'.</dd>
            <dt class="cr">Correct Rejection (<var class="math-var">CR</var>)</dt>
            <dd>This is a 'blank'.</dd>
            <dt class="hr">Signal Present/Hit Rate (<var class="math-var">HR</var>)</dt>
            <dd>This is a 'blank'.</dd>
            <dt class="far">Signal Absent/False Alarm Rate (<var class="math-var">FAR</var>)</dt>
            <dd>This is a 'blank'.</dd>
            <dt class="d">Sensitivity (<var class="math-var">d&prime;</var>)</dt>
            <dd>This is a 'blank'.</dd>
            <dt class="c">Bias (<var class="math-var">c</var>)</dt>
            <dd>This is a 'blank'.</dd>
            <dt class="s">Variance (<var class="math-var">σ</var>)</dt>
            <dd>This is a 'blank'.</dd>
          </dl>
        </div>
      </div>
    `;
  }
}

customElements.define('sdt-example-legend', SDTExampleLegend);
