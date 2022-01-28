
import {html, css} from 'lit';
import * as d3 from 'd3';

import CPTElement from '../cpt-element';

/*
  DecisionTask element
  <decision-task>

  Attributes:
  Dots; Coherence;
  # Direction, Speed, Lifetime
*/
export default class DecisionTask extends CPTElement {
  static get properties() {
    return {
      duration: {
        attribute: 'duration',
        type: Number,
        reflect: true,
      },
      iti: {
        attribute: 'iti',
        type: Number,
        reflect: true,
      },
      trials: {
        attribute: 'trials',
        type: Number,
        reflect: true,
      },
      running: {
        attribute: 'running',
        type: Boolean,
        reflect: true,
      },

      state: {
        attribute: false,
        type: String,
        reflect: false,
      },
    };
  }

  constructor() {
    super();

    // Attributes
    this.duration = 2000; // Duration of stimulus in milliseconds
    this.iti = 2000; // Duration of inter-trial interval in milliseconds
    this.trials = 5; // Number of trials per block
    this.running = false; // Currently executing block of trials

    // Properties
    this.states = ['resetted', 'iti', 'stimulus', 'ended']; // Possible states of task
    this.state = 'resetted'; // Current state of task

    // Decision parameters
    this.range = {};
    this.range.xl = {start: 0, stop: 0, step: 1}; // Gamble Loss Value
    this.range.xw = {start: 10, stop: 30, step: 1}; // Gamble Win Value
    this.range.pw = {start: 0.1, stop: 0.9, step: 0.1}; // Gamble Win Probability
    this.range.xs = {start: 5, stop: 15, step: 1}; // Sure Value

    this.range.xl.values = d3.range(
      this.range.xl.start,
      this.range.xl.stop + 0.01,
      this.range.xl.step,
    );
    this.range.xw.values = d3.range(
      this.range.xw.start,
      this.range.xw.stop + 0.01,
      this.range.xw.step,
    );
    this.range.pw.values = d3.range(
      this.range.pw.start,
      this.range.pw.stop + 0.01,
      this.range.pw.step,
    );
    this.range.xs.values = d3.range(
      this.range.xs.start,
      this.range.xs.stop + 0.01,
      this.range.xs.step,
    );

    // Private
    this.firstUpdate = true;

    this.xl = 0;
    this.xw = 0;
    this.pw = 0;
    this.xs = 0;

    this.trial = 0; // Count of current trial

    this.baseTime = 0; // Real time, in milliseconds, that the current block started
    this.pauseTime = 0; // Real time, in milliseconds, that block was paused at
    this.startTime = 0; // Virtual time, in milliseconds, that current stage of trial started
    this.lastTime = 0; // Virtual time, in milliseconds, of the most recent frame

    this.runner = undefined; // D3 Interval for frame timing
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
      <div class="holder">
        <decision-choice state="${(this.state === 'stimulus') ? 'choice' : (this.state === 'iti') ? 'fixation' : 'blank'}" probability="${this.pw}" win="${this.xw}" loss="${this.xl}" sure="${this.xs}"></decision-choice>
      </div>`;
  }

  update(changedProperties) {
    super.update(changedProperties);

    // Start or stop trial block
    if (this.firstUpdate || changedProperties.has('running')) {
      if (this.running) {
        // (Re)Start
        if (this.pauseTime) {
          // Shift timeline forward as if paused time never happened
          this.baseTime += (d3.now() - this.pauseTime);
          this.pauseTime = 0;
        }
        this.runner = d3.interval(this.run.bind(this), 20); // FIXME??
      } else if (this.runner !== undefined) {
        // Pause
        this.runner.stop();
        this.pauseTime = d3.now();
      }
    }

    this.firstUpdate = false;
  }

  reset() {
    this.runner.stop();
    this.running = false;
    this.trial = 0;
    this.state = 'resetted';

    this.xl = 0;
    this.xw = 0;
    this.pw = 0;
    this.xs = 0;

    this.baseTime = 0;
    this.pauseTime = 0;
    this.startTime = 0;
    this.lastTime = 0;
  }

  run(/* elapsed */) {
    const realTime = d3.now();
    const currentTime = (this.baseTime) ? (realTime - this.baseTime) : 0;
    const elapsedTime = (this.baseTime) ? (currentTime - this.startTime) : 0;
    this.lastTime = currentTime;
    if (this.state === 'resetted') {
      // Start block with an ITI
      this.state = 'iti';
      this.baseTime = realTime;
      this.startTime = 0;
      this.dispatchEvent(new CustomEvent('decision-block-start', {
        detail: {
          trials: this.trials,
        },
        bubbles: true,
      }));
    } else if ((this.state === 'iti') && (elapsedTime >= this.iti)) {
      // Start new trial with a stimulus
      this.trial += 1;
      this.state = 'stimulus';
      this.startTime = currentTime;
      // Determine trial
      this.xl = this.range.xl.values[Math.floor(Math.random() * this.range.xl.values.length)];
      this.xw = this.range.xw.values[Math.floor(Math.random() * this.range.xw.values.length)];
      this.pw = this.range.pw.values[Math.floor(Math.random() * this.range.pw.values.length)];
      this.xs = this.range.xs.values[Math.floor(Math.random() * this.range.xs.values.length)];
      this.vDiff = ((this.xw * this.pw) + (this.xl * (1 - this.pw))) - this.xs;
      this.gamblePayoff = (Math.random() < this.pw) ? this.xw : this.xl;
      this.surePayoff = this.xs;
      this.better = (this.vDiff > 0)
        ? 'gamble'
        : (this.vDiff < 0)
          ? 'sure'
          : 'equal';
      this.dispatchEvent(new CustomEvent('decision-trial-start', {
        detail: {
          trials: this.trials,
          duration: this.duration,
          iti: this.iti,
          trial: this.trial,
          xl: this.xl,
          xw: this.xw,
          pw: this.pw,
          xs: this.xs,
          better: this.better,
          gamblePayoff: this.gamblePayoff,
          surePayoff: this.surePayoff,
        },
        bubbles: true,
      }));
    } else if ((this.state === 'stimulus') && (elapsedTime >= this.duration)) {
      // Stimulus is over, end of trial
      this.dispatchEvent(new CustomEvent('decision-trial-end', {
        detail: {
          trials: this.trials,
          duration: this.duration,
          iti: this.iti,
          trial: this.trial,
          xl: this.xl,
          xw: this.xw,
          pw: this.pw,
          xs: this.xs,
          better: this.better,
          gamblePayoff: this.gamblePayoff,
          surePayoff: this.surePayoff,
        },
        bubbles: true,
      }));
      if (this.trial >= this.trials) {
        // End of block
        this.runner.stop();
        this.running = false;
        this.state = 'ended';
        this.baseTime = 0;
        this.pauseTime = 0;
        this.startTime = 0;
        this.lastTime = 0;
        this.dispatchEvent(new CustomEvent('decision-block-end', {
          detail: {
            trials: this.trial,
          },
          bubbles: true,
        }));
      } else {
        // ITI
        this.state = 'iti';
        this.startTime = currentTime;
      }
    }
  }
}

customElements.define('decision-task', DecisionTask);
