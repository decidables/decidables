
import {html, css} from 'lit-element';
// import {LitElement, html, css} from 'lit-element';
import * as d3 from 'd3';

import SDTElement from '../sdt-element';

/*
  RDKTask element
  <rdk-task>

  Attributes:
  Dots; Coherence;
  # Direction, Speed, Lifetime
*/
// export default class RDKTask extends LitElement {
export default class RDKTask extends SDTElement {
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
    };
  }

  constructor() {
    super();
    this.coherence = 0.5;
    this.count = 100;
    this.direction = -1;
    this.lifetime = 20;
    this.probability = 0.5;
    this.speed = 1;
    this.duration = 2000;
    this.wait = 2000;
    this.iti = 2000;
    this.trials = 5;
    this.running = false;

    this.COHERENT = 0;
    this.RANDOM = 1;
    this.dots = [[], []];
    this.trial = 0;

    this.states = ['resetted', 'iti', 'stimulus', 'wait', 'ended'];
    this.state = 'resetted';

    this.start = 0;
    this.current = undefined;

    this.signals = ['present', 'absent'];
    this.signal = undefined;

    this.runner = undefined;
    this.xScale = undefined;
    this.yScale = undefined;

    this.width = NaN;
    this.height = NaN;
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: inline-block;
        }

        svg {
          box-sizing: border-box;

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
          /* r: 2px; HACK: Firefox does not support CSS SVG Geometry Properties */
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

  render() { // eslint-disable-line class-methods-use-this
    return html``;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);

    // Get the width and height after initial render/update has occurred
    // HACK Edge: Edge doesn't have width/height until after a 0ms timeout
    window.setTimeout(() => {
      this.width = parseFloat(this.getComputedStyleValue('width'), 10);
      this.height = parseFloat(this.getComputedStyleValue('height'), 10);
      // console.log(`rdk-task(timeout): width = ${this.width}, height = ${this.height}`);
    }, 0);
  }

  update(changedProperties) {
    super.update(changedProperties);

    // Bail out if we can't get the width/height
    if (Number.isNaN(this.width) || Number.isNaN(this.height)) {
      return;
    }

    const aspectRatio = 1;
    const hostWidth = this.width;
    const hostHeight = this.height;
    let elementWidth;
    let elementHeight;
    if ((hostWidth / aspectRatio) < (hostHeight * aspectRatio)) {
      elementWidth = hostHeight * aspectRatio;
      elementHeight = elementWidth / aspectRatio;
    } else {
      elementHeight = hostWidth / aspectRatio;
      elementWidth = elementHeight * aspectRatio;
    }

    const margin = {
      top: 4,
      bottom: 4,
      left: 4,
      right: 4,
    };
    const innerWidth = elementWidth - (margin.left + margin.right);
    const innerHeight = elementHeight - (margin.top + margin.bottom);
    const size = (innerWidth < innerHeight) ? innerWidth : innerHeight;

    // Scales
    this.xScale = d3.scaleLinear()
      .domain([-1, 1])
      .range([0, size]);

    this.yScale = d3.scaleLinear()
      .domain([1, -1])
      .range([0, size]);

    // DATA JOIN - Plot
    const svgUpdate = d3.select(this.renderRoot).selectAll('svg')
      .data([{that: this}]);

    // ENTER - Plot
    const svgEnter = svgUpdate.enter().append('svg')
      .attr('viewBox', `0 0 ${elementWidth} ${elementHeight}`);

    const clipPathEnter = svgEnter.append('clipPath')
      .attr('id', 'clipPath');

    clipPathEnter.append('circle')
      .attr('cx', this.xScale(0))
      .attr('cy', this.yScale(0))
      .attr('r', this.xScale(1) - this.xScale(0));

    const plotEnter = svgEnter.append('g')
      .classed('plot', true)
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // Plot Underlay
    const underlayEnter = plotEnter.append('g')
      .classed('underlay', true);

    // Plot Content
    plotEnter.append('g')
      .classed('content', true)
      .attr('clip-path', 'url(#clipPath)');

    // Plot Overlay
    const overlayEnter = plotEnter.append('g')
      .classed('overlay', true);

    // Background
    underlayEnter.append('circle')
      .classed('background', true)
      .attr('cx', this.xScale(0))
      .attr('cy', this.yScale(0))
      .attr('r', this.xScale(1) - this.xScale(0));

    // Outline
    overlayEnter.append('circle')
      .classed('outline', true)
      .attr('cx', this.xScale(0))
      .attr('cy', this.yScale(0))
      .attr('r', this.xScale(1) - this.yScale(0));

    // MERGE - Plot
    const svgMerge = svgEnter.merge(svgUpdate);

    // DATA JOIN - Dot Groups
    const dotsUpdate = svgMerge.select('.content').selectAll('.dots')
      .data([[], []]);

    // ENTER - Dot Groups
    const dotsEnter = dotsUpdate.enter().append('g')
      .classed('dots', true)
      .classed('coherent', (datum, index) => { return index === this.COHERENT; })
      .classed('random', (datum, index) => { return index === this.RANDOM; });

    // MERGE - Dot Groups
    dotsEnter.merge(dotsUpdate);

    // Start or stop trial block
    if (changedProperties.has('running')) {
      if (this.running) {
        this.runner = d3.interval(this.run.bind(this), 20); // FIXME??
      } else if (this.runner !== undefined) {
        this.runner.stop();
      }
    }
  }

  reset() {
    this.runner.stop();
    this.running = false;
    this.trial = 0;
    this.state = 'resetted';
    this.start = 0;
    this.signal = undefined;
    this.current = undefined;

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

  run(time) {
    const elapsedTime = time - this.start;
    let newTrial = false;
    if (this.state === 'resetted') {
      // Start block with an ITI
      this.state = 'iti';
      this.start = time;
      this.dispatchEvent(new CustomEvent('rdk-block-start', {
        detail: {},
        bubbles: true,
      }));
    } else if ((this.state === 'iti') && (elapsedTime >= this.iti)) {
      // Start new trial with a stimulus
      newTrial = true;
      this.trial += 1;
      this.state = 'stimulus';
      this.start = time;
      this.signal = (Math.random() < this.probability) ? 'present' : 'absent';
      this.current = (this.signal === 'absent')
        ? undefined
        : (this.direction >= 0)
          ? this.direction
          : (Math.random() * 360);
      this.dispatchEvent(new CustomEvent('rdk-trial-start', {
        detail: {
          trial: this.trial,
          signal: this.signal,
        },
        bubbles: true,
      }));
    } else if ((this.state === 'stimulus') && (elapsedTime >= this.duration)) {
      // Stimulus is over, now wait
      this.state = 'wait';
      this.start = time;
      this.dispatchEvent(new CustomEvent('rdk-trial-middle', {
        detail: {
          trial: this.trial,
          signal: this.signal,
        },
        bubbles: true,
      }));
    } else if ((this.state === 'wait') && (elapsedTime >= this.wait)) {
      // Wait is over, end of trial
      this.dispatchEvent(new CustomEvent('rdk-trial-end', {
        detail: {
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
        this.start = 0;
        this.signal = undefined;
        this.current = undefined;
        this.dispatchEvent(new CustomEvent('rdk-block-end', {
          detail: {
            trials: this.trial,
          },
          bubbles: true,
        }));
      } else {
        // ITI
        this.state = 'iti';
        this.start = time;
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
            dot.direction = (t === this.RANDOM) ? (Math.random() * 360) : this.current;
            dot.age = Math.floor(Math.random() * this.lifetime);
            const angle = Math.random() * 2 * Math.PI;
            const radius = Math.sqrt(Math.random());
            dot.x = this.xScale(radius * Math.cos(angle));
            dot.y = this.yScale(radius * Math.sin(angle));
            const directionR = dot.direction * Math.PI / 180;
            dot.speed = this.speed;
            dot.dx = dot.speed * Math.cos(directionR);
            dot.dy = dot.speed * Math.sin(directionR);
          } else {
            dot.age += 1;
            if (dot.age >= this.lifetime) {
              // Dot has died, so rebirth
              dot.age = 0;
              dot.direction = (t === this.RANDOM) ? (Math.random() * 360) : this.current;
              const angle = Math.random() * 2 * Math.PI;
              const radius = Math.sqrt(Math.random());
              dot.x = this.xScale(radius * Math.cos(angle));
              dot.y = this.yScale(radius * Math.sin(angle));
              const directionR = dot.direction * Math.PI / 180;
              dot.speed = this.speed;
              dot.dx = dot.speed * Math.cos(directionR);
              dot.dy = dot.speed * Math.sin(directionR);
            } else {
              if (t === this.COHERENT) {
                dot.direction = this.current;
              }
              const directionR = dot.direction * Math.PI / 180;
              dot.speed = this.speed;
              dot.dx = dot.speed * Math.cos(directionR);
              dot.dy = dot.speed * Math.sin(directionR);
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
    }

    // DATA JOIN - Fixation
    const fixationUpdate = d3.select(this.renderRoot).select('.content').selectAll('.fixation')
      .data((this.state === 'iti') ? [true] : []);

    // ENTER - Fixation
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

    // EXIT - Fixation
    fixationUpdate.exit().remove();

    // DATA JOIN - Dots
    const dotsUpdate = d3.select(this.renderRoot).select('.content').selectAll('.dots')
      .data((this.state === 'stimulus') ? this.dots : [[], []]);

    const dotUpdate = dotsUpdate.selectAll('.dot')
      .data((datum) => { return datum; });

    // ENTER - Dots
    const dotEnter = dotUpdate.enter().append('circle')
      .classed('dot', true)
      .attr('r', 2); /* HACK: Firefox does not support CSS SVG Geometry Properties */

    // MERGE - Dots
    dotEnter.merge(dotUpdate)
      .attr('cx', (datum) => { return datum.x; })
      .attr('cy', (datum) => { return datum.y; });

    // EXIT - Dots
    dotUpdate.exit().remove();

    // DATA JOIN - Query
    const queryUpdate = d3.select(this.renderRoot).select('.content').selectAll('.query')
      .data((this.state === 'wait') ? [true] : []);

    // ENTER - Query
    const queryEnter = queryUpdate.enter().append('g')
      .classed('query', true);
    queryEnter.append('text')
      .attr('x', this.xScale(0))
      .attr('y', this.xScale(0))
      .attr('text-anchor', 'middle')
      .attr('alignment-baseline', 'middle')
      .text('?');

    // EXIT - Query
    queryUpdate.exit().remove();
  }
}

customElements.define('rdk-task', RDKTask);
