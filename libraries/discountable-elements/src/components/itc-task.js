
import {html, css} from 'lit';
import * as d3 from 'd3';

import DiscountableElement from '../discountable-element';
import './itc-choice';

/*
  ITCTask element
  <itc-task>

  Attributes:
  Dots; Coherence;
  # Direction, Speed, Lifetime
*/
export default class ITCTask extends DiscountableElement {
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
    this.range.as = {start: 10, stop: 20, step: 1}; // Amount SS
    this.range.ds = {start: 10, stop: 40, step: 1}; // Delay SS
    this.range.al = {start: 20, stop: 40, step: 1}; // Amount LL
    this.range.dl = {start: 50, stop: 80, step: 1}; // Delay LL

    this.range.as.values = d3.range(
      this.range.as.start,
      this.range.as.stop + 0.01,
      this.range.as.step,
    );
    this.range.ds.values = d3.range(
      this.range.ds.start,
      this.range.ds.stop + 0.01,
      this.range.ds.step,
    );
    this.range.al.values = d3.range(
      this.range.al.start,
      this.range.al.stop + 0.01,
      this.range.al.step,
    );
    this.range.dl.values = d3.range(
      this.range.dl.start,
      this.range.dl.stop + 0.01,
      this.range.dl.step,
    );

    // Private
    this.firstUpdate = true;

    this.as = 0;
    this.ds = 0;
    this.al = 0;
    this.dl = 0;

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
        <itc-choice 
          state="${(this.state === 'stimulus')
            ? 'choice'
            : (this.state === 'iti')
              ? 'fixation'
              : 'blank'}"
          amount-ss="${this.as}"
          delay-ss="${this.ds}"
          amount-ll="${this.al}"
          delay-ll="${this.dl}">
        </itc-choice>
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

    this.as = 0;
    this.ds = 0;
    this.al = 0;
    this.dl = 0;

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
      this.dispatchEvent(new CustomEvent('itc-block-start', {
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
      this.as = this.range.as.values[Math.floor(Math.random() * this.range.as.values.length)];
      this.ds = this.range.ds.values[Math.floor(Math.random() * this.range.ds.values.length)];
      this.al = this.range.al.values[Math.floor(Math.random() * this.range.al.values.length)];
      this.dl = this.range.dl.values[Math.floor(Math.random() * this.range.dl.values.length)];
      this.dispatchEvent(new CustomEvent('itc-trial-start', {
        detail: {
          trials: this.trials,
          duration: this.duration,
          iti: this.iti,
          trial: this.trial,
          as: this.as,
          ds: this.ds,
          al: this.al,
          dl: this.dl,
        },
        bubbles: true,
      }));
    } else if ((this.state === 'stimulus') && (elapsedTime >= this.duration)) {
      // Stimulus is over, end of trial
      this.dispatchEvent(new CustomEvent('itc-trial-end', {
        detail: {
          trials: this.trials,
          duration: this.duration,
          iti: this.iti,
          trial: this.trial,
          as: this.as,
          ds: this.ds,
          al: this.al,
          dl: this.dl,
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
        this.dispatchEvent(new CustomEvent('itc-block-end', {
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

customElements.define('itc-task', ITCTask);
