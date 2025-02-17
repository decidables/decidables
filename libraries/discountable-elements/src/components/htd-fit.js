
import {html, css} from 'lit';
import * as Plot from '@observablehq/plot';

// Special Web Worker import for rollup-plugin-web-worker-loader
import HTDFitWorker from 'web-worker:./htd-fit-worker'; /* eslint-disable-line import/no-unresolved */

import DiscountableElement from '../discountable-element';

/*
  HTDFit element
  <htd-fit>

  Attributes:
    interactive: true/false

*/
export default class HTDFit extends DiscountableElement {
  static get properties() {
    return {
    };
  }

  constructor() {
    super();

    this.k = 0.05;

    this.choices = [];
    this.samples = null;

    this.working = false;
    this.queued = false;
    this.worker = new HTDFitWorker();

    this.worker.onmessage = (event) => {
      this.working = false;
      this.samples = event.data.samples;
      this.k = event.data.results.k;
      this.requestUpdate();

      this.dispatchEvent(new CustomEvent('htd-fit-update', {
        detail: {
          k: this.k,
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

  set(as, ds, al, dl, response, name = '', label = '') {
    const choice = this.choices.find((item) => {
      return (item.name === name);
    });
    if (choice === undefined) {
      this.choices.push({
        as: as,
        ds: ds,
        al: al,
        dl: dl,
        response: response,
        name: name,
        label: label,
      });
    } else {
      choice.as = as;
      choice.ds = ds;
      choice.al = al;
      choice.dl = dl;
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
          <var class="math-var k">k</var> = ${this.k.toFixed(2)}
        </div>
        <div class="param">
          <div class="trace k"></div>
          <div class="hist k"></div>
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
            Plot.binX({y: 'count'}, {x: Plot.identity}),
          ),
        ],
      }),
    );

    this.shadowRoot.querySelector(`.trace.${param}`).replaceChildren(
      Plot.plot({
        title: `Traceplot of ${param}`,
        x: {label: 'Samples'},
        y: {label: `${param}`},
        width: 320,
        height: 240,
        style: 'font-size: 0.75rem; font-family: var(---font-family-base);',
        marks: [
          Plot.lineY(
            this.samples[param],
          ),
        ],
      }),
    );
  }

  update(changedProperties) {
    super.update(changedProperties);

    if (this.samples !== null) {
      this.plotParam('k');
      this.plotParam('luce');
    }
  }
}

customElements.define('htd-fit', HTDFit);
