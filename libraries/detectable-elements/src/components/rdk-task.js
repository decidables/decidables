
import {html, css} from 'lit';
import * as d3 from 'd3';

import DetectableElement from '../detectable-element';

/*
  RDKTask element
  <rdk-task>

  Attributes:
  Dots; Coherence;
  # Direction, Speed, Lifetime
*/
export default class RDKTask extends DetectableElement {
  static get properties() {
    return {
      coherence: {
        attribute: 'coherence',
        type: Number,
        reflect: true,
      },
      count: {
        attribute: 'count',
        type: Number,
        reflect: true,
      },
      probability: {
        attribute: 'probability',
        type: Number,
        reflect: true,
      },
      duration: {
        attribute: 'duration',
        type: Number,
        reflect: true,
      },
      wait: {
        attribute: 'wait',
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

      direction: {
        attribute: false,
        type: Number,
        reflect: false,
      },
      lifetime: {
        attribute: false,
        type: Number,
        reflect: false,
      },
      speed: {
        attribute: false,
        type: Number,
        reflect: false,
      },

      width: {
        attribute: false,
        type: Number,
        reflect: false,
      },
      height: {
        attribute: false,
        type: Number,
        reflect: false,
      },
      rem: {
        attribute: false,
        type: Number,
        reflect: false,
      },
    };
  }

  constructor() {
    super();

    // Attributes
    this.coherence = 0.5; // Proportion of dots moving coherently
    this.count = 100; // Number of dots
    this.probability = 0.5; // Probability of signal (as opposed to noise)
    this.duration = 2000; // Duration of stimulus in milliseconds
    this.wait = 2000; // Duration of wait period for response in milliseconds
    this.iti = 2000; // Duration of inter-trial interval in milliseconds
    this.trials = 5; // Number of trials per block
    this.running = false; // Currently executing block of trials

    // Properties
    this.direction = -1; // Direction of current trial in degrees
    this.lifetime = 400; // Lifetime of each dot in milliseconds
    this.speed = 50; // Rate of dot movement in pixels per second

    this.width = NaN; // Width of component in pixels
    this.height = NaN; // Height of component in pixels
    this.rem = NaN; // Pixels per rem for component

    // Private
    this.firstUpdate = true;
    this.COHERENT = 0; // "Constant" for index to coherent dots
    this.RANDOM = 1; // "Constant" for index to random dots
    this.dots = [[], []]; // Array of array of dots
    this.trial = 0; // Count of current trial

    this.states = ['resetted', 'iti', 'stimulus', 'wait', 'ended']; // Possible states of task
    this.state = 'resetted'; // Current state of task

    this.baseTime = 0; // Real time, in milliseconds, that the current block started
    this.pauseTime = 0; // Real time, in milliseconds, that block was paused at
    this.startTime = 0; // Virtual time, in milliseconds, that current stage of trial started
    this.lastTime = 0; // Virtual time, in milliseconds, of the most recent frame
    this.currentDirection = undefined; // Direction in degrees for current trial

    this.signals = ['present', 'absent']; // Possible trial types
    this.signal = undefined; // Current trial type

    this.runner = undefined; // D3 Interval for frame timing
    this.xScale = undefined; // D3 Scale for x-axis
    this.yScale = undefined; // D3 Scale for y-axis
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: inline-block;

          width: 10rem;
          height: 10rem;
        }

        .main {
          width: 100%;
          height: 100%;
        }

        .background {
          fill: var(---color-element-disabled);
          stroke: none;
        }

        .outline {
          fill: none;
          stroke: var(---color-element-emphasis);
          stroke-width: 2px;
        }

        .dot {
          r: 2px;
        }

        .dots.coherent {
          fill: var(---color-background);
        }

        .dots.random {
          fill: var(---color-background);
        }

        .fixation {
          stroke: var(---color-text);
          stroke-width: 2px;
        }

        .query {
          font-size: 1.75rem;
          font-weight: 600;
        }
      `,
    ];
  }

  render() { /* eslint-disable-line class-methods-use-this */
    return html``;
  }

  getDimensions() {
    this.width = parseFloat(this.getComputedStyleValue('width'), 10);
    this.height = parseFloat(this.getComputedStyleValue('height'), 10);
    this.rem = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('font-size'), 10);
    // console.log(`rdk-task: width = ${this.width}, height = ${this.height}, rem = ${this.rem}`);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this.getDimensions.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.getDimensions.bind(this));
    super.disconnectedCallback();
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);

    // Get the width and height after initial render/update has occurred
    this.getDimensions();
  }

  update(changedProperties) {
    super.update(changedProperties);

    // Bail out if we can't get the width/height/rem
    if (Number.isNaN(this.width) || Number.isNaN(this.height) || Number.isNaN(this.rem)) {
      return;
    }

    const elementWidth = this.width;
    const elementHeight = this.height;
    const elementSize = Math.min(elementWidth, elementHeight);

    const margin = {
      top: 0.25 * this.rem,
      bottom: 0.25 * this.rem,
      left: 0.25 * this.rem,
      right: 0.25 * this.rem,
    };
    const height = elementSize - (margin.top + margin.bottom);
    const width = elementSize - (margin.left + margin.right);

    // X Scale
    this.xScale = d3.scaleLinear()
      .domain([-1, 1])
      .range([0, width]);

    // Y Scale
    this.yScale = d3.scaleLinear()
      .domain([1, -1])
      .range([0, height]);

    // Svg
    //  DATA-JOIN
    const svgUpdate = d3.select(this.renderRoot).selectAll('.main')
      .data([{
        width: this.width,
        height: this.height,
        rem: this.rem,
      }]);
    //  ENTER
    const svgEnter = svgUpdate.enter().append('svg')
      .classed('main', true);
    //  MERGE
    const svgMerge = svgEnter.merge(svgUpdate)
      .attr('viewBox', `0 0 ${elementSize} ${elementSize}`);

    // Clippath
    //  ENTER
    svgEnter.append('clipPath')
      .attr('id', 'clip-rdk-task')
      .append('circle');
    //  MERGE
    svgMerge.select('clipPath circle')
      .attr('cx', this.xScale(0))
      .attr('cy', this.yScale(0))
      .attr('r', this.xScale(1) - this.xScale(0));

    // Plot
    //  ENTER
    const plotEnter = svgEnter.append('g')
      .classed('plot', true);
    //  MERGE
    const plotMerge = svgMerge.select('.plot')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // Underlayer
    //  ENTER
    const underlayerEnter = plotEnter.append('g')
      .classed('underlayer', true);
    // MERGE
    const underlayerMerge = plotMerge.select('.underlayer');

    // Background
    //  ENTER
    underlayerEnter.append('circle')
      .classed('background', true);
    //  MERGE
    underlayerMerge.select('.background')
      .attr('cx', this.xScale(0))
      .attr('cy', this.yScale(0))
      .attr('r', this.xScale(1) - this.xScale(0));

    // Content
    //  ENTER
    plotEnter.append('g')
      .classed('content', true)
      .attr('clip-path', 'url(#clip-rdk-task)');
    //  MERGE
    const contentMerge = plotMerge.select('.content');

    // Dot Groups
    //  DATA-JOIN
    const dotsUpdate = contentMerge.selectAll('.dots')
      .data([[], []]);
    //  ENTER
    dotsUpdate.enter().append('g')
      .classed('dots', true)
      .classed('coherent', (datum, index) => { return index === this.COHERENT; })
      .classed('random', (datum, index) => { return index === this.RANDOM; });

    // Overlayer
    //  ENTER
    const overlayerEnter = plotEnter.append('g')
      .classed('overlayer', true);
    // MERGE
    const overlayerMerge = plotMerge.select('.overlayer');

    // Outline
    //  ENTER
    overlayerEnter.append('circle')
      .classed('outline', true);
    //  MERGE
    overlayerMerge.select('.outline')
      .attr('cx', this.xScale(0))
      .attr('cy', this.yScale(0))
      .attr('r', this.xScale(1) - this.yScale(0));

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
    if (this.runner !== undefined) {
      this.runner.stop();
    }
    this.running = false;
    this.trial = 0;
    this.state = 'resetted';
    this.baseTime = 0;
    this.pauseTime = 0;
    this.startTime = 0;
    this.lastTime = 0;
    this.signal = undefined;
    this.currentDirection = undefined;

    const dotsUpdate = d3.select(this.renderRoot).select('.content').selectAll('.dots')
      .data([[], []]);
    const dotUpdate = dotsUpdate.selectAll('.dot')
      .data((datum) => { return datum; });
    dotUpdate.exit()
      .remove();

    const fixationUpdate = d3.select(this.renderRoot).select('.content').selectAll('.fixation')
      .data([]);
    fixationUpdate.exit()
      .remove();
    const queryUpdate = d3.select(this.renderRoot).select('.content').selectAll('.query')
      .data([]);
    queryUpdate.exit()
      .remove();
  }

  run(/* elapsed */) {
    const realTime = d3.now();
    const currentTime = (this.baseTime) ? (realTime - this.baseTime) : 0;
    const elapsedTime = (this.baseTime) ? (currentTime - this.startTime) : 0;
    const frameTime = (this.baseTime) ? (currentTime - this.lastTime) : 0;
    this.lastTime = currentTime;
    let newTrial = false;
    if (this.state === 'resetted') {
      // Start block with an ITI
      this.state = 'iti';
      this.baseTime = realTime;
      this.startTime = 0;
      this.dispatchEvent(new CustomEvent('rdk-block-start', {
        detail: {
          trials: this.trials,
        },
        bubbles: true,
      }));
    } else if ((this.state === 'iti') && (elapsedTime >= this.iti)) {
      // Start new trial with a stimulus
      newTrial = true;
      this.trial += 1;
      this.state = 'stimulus';
      this.startTime = currentTime;
      this.signal = (Math.random() < this.probability) ? 'present' : 'absent';
      this.currentDirection = (this.signal === 'absent')
        ? undefined
        : (this.direction >= 0)
          ? this.direction
          : (Math.random() * 360);
      this.dispatchEvent(new CustomEvent('rdk-trial-start', {
        detail: {
          trials: this.trials,
          duration: this.duration,
          wait: this.wait,
          iti: this.iti,
          trial: this.trial,
          signal: this.signal,
        },
        bubbles: true,
      }));
    } else if ((this.state === 'stimulus') && (elapsedTime >= this.duration)) {
      // Stimulus is over, now wait
      this.state = 'wait';
      this.startTime = currentTime;
      this.dispatchEvent(new CustomEvent('rdk-trial-middle', {
        detail: {
          trials: this.trials,
          duration: this.duration,
          wait: this.wait,
          iti: this.iti,
          trial: this.trial,
          signal: this.signal,
        },
        bubbles: true,
      }));
    } else if ((this.state === 'wait') && (elapsedTime >= this.wait)) {
      // Wait is over, end of trial
      this.dispatchEvent(new CustomEvent('rdk-trial-end', {
        detail: {
          trials: this.trials,
          duration: this.duration,
          wait: this.wait,
          iti: this.iti,
          trial: this.trial,
          signal: this.signal,
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
        this.signal = undefined;
        this.currentDirection = undefined;
        this.dispatchEvent(new CustomEvent('rdk-block-end', {
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

    // Dots
    if (this.state === 'stimulus') {
      this.dots[this.COHERENT].length = (this.signal === 'present') ? Math.round(this.count * this.coherence) : 0;
      this.dots[this.RANDOM].length = (this.signal === 'present') ? (this.count - this.dots[this.COHERENT].length) : this.count;

      for (let t = 0; t < this.dots.length; t += 1) {
        for (let i = 0; i < this.dots[t].length; i += 1) {
          const newDot = (this.dots[t][i] === undefined);
          if (newDot) {
            this.dots[t][i] = {};
          }
          const dot = this.dots[t][i];
          if (newTrial || newDot) {
            dot.direction = (t === this.RANDOM) ? (Math.random() * 360) : this.currentDirection;
            dot.birth = currentTime - Math.floor(Math.random() * this.lifetime);
            const angle = Math.random() * 2 * Math.PI;
            const radius = Math.sqrt(Math.random());
            dot.x = this.xScale(radius * Math.cos(angle));
            dot.y = this.yScale(radius * Math.sin(angle));
          } else if (currentTime > (dot.birth + this.lifetime)) {
            // Dot has died, so rebirth
            dot.birth += this.lifetime;
            dot.direction = (t === this.RANDOM) ? (Math.random() * 360) : this.currentDirection;
            const angle = Math.random() * 2 * Math.PI;
            const radius = Math.sqrt(Math.random());
            dot.x = this.xScale(radius * Math.cos(angle));
            dot.y = this.yScale(radius * Math.sin(angle));
          } else {
            if (t === this.COHERENT) {
              dot.direction = this.currentDirection;
            }
            const directionR = dot.direction * (Math.PI / 180);
            dot.dx = this.speed * (frameTime / 1000) * Math.cos(directionR);
            dot.dy = this.speed * (frameTime / 1000) * Math.sin(directionR);
            // Update position
            dot.x += dot.dx;
            dot.y += dot.dy;
            // Calculate squared distance from center
            const distance2 = ((dot.x - this.xScale(0)) ** 2) + ((dot.y - this.yScale(0)) ** 2);
            const radius2 = (this.xScale(1) - this.xScale(0)) ** 2;
            if (distance2 > radius2) {
              // Dot has exited so move to other side
              dot.x = -(dot.x - this.xScale(0)) + this.xScale(0);
              dot.y = -(dot.y - this.yScale(0)) + this.yScale(0);
            }
          }
        }
      }
    }

    // Fixation
    //  DATA-JOIN
    const fixationUpdate = d3.select(this.renderRoot).select('.content').selectAll('.fixation')
      .data((this.state === 'iti') ? [true] : []);
    //  ENTER
    const fixationEnter = fixationUpdate.enter().append('g')
      .classed('fixation', true);
    fixationEnter.append('line')
      .attr('x1', this.xScale(-0.1))
      .attr('y1', this.xScale(0))
      .attr('x2', this.xScale(0.1))
      .attr('y2', this.xScale(0));
    fixationEnter.append('line')
      .attr('x1', this.xScale(0))
      .attr('y1', this.xScale(-0.1))
      .attr('x2', this.xScale(0))
      .attr('y2', this.xScale(0.1));
    //  EXIT
    fixationUpdate.exit().remove();

    // Dots
    //  DATA-JOIN
    const dotsUpdate = d3.select(this.renderRoot).select('.content').selectAll('.dots')
      .data((this.state === 'stimulus') ? this.dots : [[], []]);
    const dotUpdate = dotsUpdate.selectAll('.dot')
      .data((datum) => { return datum; });
    //  ENTER
    const dotEnter = dotUpdate.enter().append('circle')
      .classed('dot', true);
    //  MERGE
    dotEnter.merge(dotUpdate)
      .attr('cx', (datum) => { return datum.x; })
      .attr('cy', (datum) => { return datum.y; });
    //  EXIT
    dotUpdate.exit().remove();

    // Query
    //  DATA-JOIN
    const queryUpdate = d3.select(this.renderRoot).select('.content').selectAll('.query')
      .data((this.state === 'wait') ? [true] : []);
    //  ENTER
    const queryEnter = queryUpdate.enter().append('g')
      .classed('query', true);
    queryEnter.append('text')
      .attr('x', this.xScale(0))
      .attr('y', this.xScale(0))
      .attr('text-anchor', 'middle')
      .attr('alignment-baseline', 'middle')
      .text('?');
    //  EXIT
    queryUpdate.exit().remove();
  }
}

customElements.define('rdk-task', RDKTask);
