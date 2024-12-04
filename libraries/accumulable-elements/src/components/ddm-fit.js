
import {html, css} from 'lit';

// Special Web Worker import for rollup-plugin-web-worker-loader
import DDMFitWorker from 'web-worker:./ddm-fit-worker'; /* eslint-disable-line import/no-unresolved */

import AccumulableElement from '../accumulable-element';

/*
  DDMFit element
  <ddm-fit>

  Attributes:
    interactive: true/false
*/
export default class DDMFit extends AccumulableElement {
  static get properties() {
    return {
    };
  }

  constructor() {
    super();

    this.a = 1.2;
    this.z = 0.35;
    this.v = 1.5;
    this.t0 = 150;

    this.observed = {};
    this.predicted = {};

    this.working = false;
    this.queued = false;
    this.worker = new DDMFitWorker();

    this.worker.onmessage = (event) => {
      this.working = false;
      this.predicted = event.data.predicted;
      this.a = event.data.params.a;
      this.z = event.data.params.z;
      this.v = event.data.params.v;
      this.t0 = event.data.params.t0;
      this.requestUpdate();

      this.dispatchEvent(new CustomEvent('ddm-fit-update', {
        detail: {
          a: this.a,
          z: this.z,
          v: this.v,
          t0: this.t0,
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
      this.worker.postMessage(this.observed);
      this.working = true;
      this.queued = false;
    } else {
      this.queued = true;
    }
  }

  clear() {
    this.observed = {};

    this.fit();
  }

  set(data) {
    // Deep copy
    this.observed = structuredClone(data);

    this.fit();
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: inline-block;
        }
      `,
    ];
  }

  render() {
    return html`
      <div>
        <div><b>Observed:</b>
          <br/>Accuracy = ${this.observed.accuracy?.toFixed(2)},
          <br/>Correct Mean RT = ${this.observed.correctMeanRT?.toFixed(0)},
          Error Mean RT = ${this.observed.errorMeanRT?.toFixed(0)},
          Mean RT = ${this.observed.meanRT?.toFixed(0)},
          <br/>Correct SD RT = ${this.observed.correctSDRT?.toFixed(0)},
          Error SD RT = ${this.observed.errorSDRT?.toFixed(0)},
          SD RT = ${this.observed.sdRT?.toFixed(0)},
        </div>
        <div><b>Parameters:</b>
          <br/><var class="math-var a">a</var> = ${this.a.toFixed(2)},
          <var class="math-var z">z</var> = ${this.z.toFixed(2)},
          <var class="math-var v">v</var> = ${this.v.toFixed(2)},
          <var class="math-var t0">t0</var> = ${this.t0.toFixed(0)}
        </div>
        <div><b>Predicted:</b>
          <br/>Accuracy = ${this.predicted.accuracy?.toFixed(2)},
          <br/>Correct Mean RT = ${this.predicted.correctMeanRT?.toFixed(0)},
          Error Mean RT = ${this.predicted.errorMeanRT?.toFixed(0)},
          Mean RT = ${this.predicted.meanRT?.toFixed(0)},
          <br/>Correct SD RT = ${this.predicted.correctSDRT?.toFixed(0)},
          Error SD RT = ${this.predicted.errorSDRT?.toFixed(0)},
          SD RT = ${this.predicted.sdRT?.toFixed(0)},
        </div>
      </div>
    `;
  }
}

customElements.define('ddm-fit', DDMFit);
