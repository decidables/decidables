
import {css, html} from 'lit';
import * as Plot from '@observablehq/plot';

import CPTMath from '@decidables/prospectable-math';

// Special Web Worker import for rollup-plugin-web-worker-loader
import CPTFitWorker from 'web-worker:./cpt-fit-worker'; /* eslint-disable-line import/no-unresolved */

import ProspectableElement from '../prospectable-element';

/*
  CPTFit element
  <cpt-fit>

  Attributes:
    interactive: true/false

*/
export default class CPTFit extends ProspectableElement {
  static get properties() {
    return {
    };
  }

  constructor() {
    super();

    this.a = CPTMath.a.DEFAULT;
    this.l = CPTMath.l.DEFAULT;
    this.g = CPTMath.g.DEFAULT;

    this.choices = [];
    this.samples = null;

    this.working = false;
    this.queued = false;
    this.worker = new CPTFitWorker();

    this.worker.onmessage = (event) => {
      this.working = false;
      this.samples = event.data.samples;
      this.a = event.data.results.alpha;
      this.l = event.data.results.lambda;
      this.g = event.data.results.gamma;
      this.requestUpdate();

      this.dispatchEvent(new CustomEvent('cpt-fit-update', {
        detail: {
          a: this.a,
          l: this.l,
          g: this.g,
        },
        bubbles: true,
      }));

      if (this.queued) {
        this.fit();
      }
    };

    this.fit();
  }

  fit() {
    if (!this.working) {
      this.worker.postMessage(this.choices);
      this.working = true;
      this.queued = false;
    } else {
      this.queued = true;
    }
  }

  clear() {
    this.choices = [];

    this.fit();
  }

  get(name = 'default') {
    const choice = this.choices.find((item) => {
      return (item.name === name);
    });

    return (choice === undefined) ? null : choice;
  }

  set(xl, xw, pw, xs, response, name = '', label = '') {
    const choice = this.choices.find((item) => {
      return (item.name === name);
    });
    if (choice === undefined) {
      this.choices.push({
        xl: xl,
        xw: xw,
        pw: pw,
        xs: xs,
        response: response,
        name: name,
        label: label,
      });
    } else {
      choice.xl = xl;
      choice.xw = xw;
      choice.pw = pw;
      choice.xs = xs;
      choice.response = response;
      choice.label = label;
    }

    this.fit();
  }

  static get styles() {
    return [
      super.styles,
      css`
        /* :host {
          display: inline-block;
        } */

        figure {
          margin: 0.625rem;
        }

        figure h2 {
          margin: 0.25rem 0;

          font-size: 1.125rem;
          font-weight: 600;
        }

        .trace,
        .hist {
          display: inline-block;
        }
      `,
    ];
  }

  render() {
    return html`
      <div>
        <div>After ${this.choices.length} trials:</div>
        <div>Current:
          <var class="math-var a">α</var> = ${this.a.toFixed(2)},
          <var class="math-var l">λ</var> = ${this.l.toFixed(2)},
          <var class="math-var g">γ</var> = ${this.g.toFixed(2)}
        </div>
        <div class="param">
          <div class="trace alpha"></div>
          <div class="hist alpha"></div>
        </div>
        <div class="param">
          <div class="trace lambda"></div>
          <div class="hist lambda"></div>
        </div>
        <div class="param">
          <div class="trace gamma"></div>
          <div class="hist gamma"></div>
        </div>
        <div class="param">
          <div class="trace luce"></div>
          <div class="hist luce"></div>
        </div>
      </div>
    `;
  }

  plotParam(param) {
    this.shadowRoot.querySelector(`.hist.${param}`).replaceChildren(
      Plot.plot({
        title: `Posterior of ${param}`,
        x: {label: `${param}`},
        width: 320,
        height: 240,
        style: 'font-size: 0.75rem; font-family: var(---font-family-base);',
        marks: [
          Plot.rectY(
            this.samples[param],
            Plot.binX(
              {y: 'count'},
              {x: Plot.identity},
            ),
          ),
          Plot.rectY(
            this.samples[param],
            Plot.pointerX(Plot.binX(
              {y: 'count'},
              {
                x: Plot.identity,
                stroke: 'black',
                fill: 'white',
                tip: true,
              },
            )),
          ),
        ],
      }),
    );

    this.shadowRoot.querySelector(`.trace.${param}`).replaceChildren(
      Plot.plot({
        title: `Traceplot of ${param}`,
        x: {label: 'Sample'},
        y: {label: `${param}`},
        width: 320,
        height: 240,
        style: 'font-size: 0.75rem; font-family: var(---font-family-base);',
        marks: [
          Plot.lineY(
            this.samples[param],
          ),
          Plot.dot(
            this.samples[param],
            Plot.pointer({
              x: Plot.indexOf,
              y: Plot.identity,
              stroke: 'black',
              fill: 'white',
              r: 4,
              tip: true,
            }),
          ),
        ],
      }),
    );
  }

  update(changedProperties) {
    super.update(changedProperties);

    if (this.samples !== null) {
      this.plotParam('alpha');
      this.plotParam('lambda');
      this.plotParam('gamma');
      this.plotParam('luce');
    }
  }
}

customElements.define('cpt-fit', CPTFit);
