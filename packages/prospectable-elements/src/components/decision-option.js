
import {html, css} from 'lit-element';
import * as d3 from 'd3';

import CPTElement from '../cpt-element';

/*
  DecisionOption element
  <decision-option>

  Attributes:
  Win, Loss, Probability
*/
export default class DecisionOption extends CPTElement {
  static get properties() {
    return {
      a: {
        attribute: 'alpha',
        type: Number,
        reflect: true,
      },
      l: {
        attribute: 'lambda',
        type: Number,
        reflect: true,
      },
      g: {
        attribute: 'gamma',
        type: Number,
        reflect: true,
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
    this.a = 1; // alpha
    this.l = 1; // lambda
    this.g = 1; // gamma

    // Properties
    this.width = NaN; // Width of component in pixels
    this.height = NaN; // Height of component in pixels
    this.rem = NaN; // Pixels per rem for component
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: inline-block;
        }

        .main {
          width: 100%;
          height: 100%;
        }

        .arc {
          stroke: var(---color-element-emphasis);
          stroke-width: 2;
        }

        .arc.win {
          fill: var(---color-better);
        }

        .arc.loss {
          fill: var(---color-worse);
        }

        .arc.sure {
          fill: var(---color-even);
        }

        .label.static {
          font-size: 1.75rem;

          dominant-baseline: middle;
          text-anchor: middle;
        }

        .label.interactive {
          --decidable-spinner-font-size: 1.75rem;
          --decidable-spinner-input-width: 4rem;
          --decidable-spinner-prefix: "$";

          width: var(--decidable-spinner-input-width);
          height: calc(var(--decidable-spinner-font-size) * 1.5);
          overflow: visible;
          x: calc(var(--decidable-spinner-input-width) / -2);
          y: calc(var(--decidable-spinner-font-size) * 1.5 / -2);
        }

        .label.interactive.win decidable-spinner {
          background-color: var(---color-better);
        }

        .label.interactive.loss decidable-spinner {
          background-color: var(---color-worse);
        }

        .label.interactive.sure decidable-spinner {
          background-color: var(---color-even);
        }
      `,
    ];
  }

  render() { // eslint-disable-line class-methods-use-this
    return html`<slot></slot>`;
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

    // Detect and update on changes in children
    this.observer = new MutationObserver((mutations) => {
      if (mutations.some((mutation) => {
        return ((mutation.type === 'childList') || ((mutation.type === 'attributes') && (mutation.target !== this)));
      })) {
        this.requestUpdate();
      }
    });
    this.observer.observe(this, {subtree: true, childList: true, attributes: true});
  }

  disconnectedCallback() {
    this.observer.disconnect();

    window.removeEventListener('resize', this.getDimensions.bind(this));

    super.disconnectedCallback();
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);

    // Get the width and height after initial render/update has occurred
    // HACK Edge: Edge doesn't have width/height until after a 0ms timeout
    window.setTimeout(this.getDimensions.bind(this), 0);
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
      top: 0, // 0.25 * this.rem,
      bottom: 0, // 0.25 * this.rem,
      left: 0, // 0.25 * this.rem,
      right: 0, // 0.25 * this.rem,
    };
    const height = elementSize - (margin.top + margin.bottom);
    const width = elementSize - (margin.left + margin.right);

    // Get outcomes from slots!
    const decisionOutcomes = this.querySelectorAll('decision-outcome');
    const pTotal = Array.from(decisionOutcomes).reduce((total, item) => { return total + item.p; }, 0);
    const arcs = d3.pie()
      .startAngle(-(decisionOutcomes[0].p / pTotal) * Math.PI)
      .endAngle((-(decisionOutcomes[0].p / pTotal) * Math.PI) + (2 * Math.PI))
      .sortValues(null) // Use inserted order!
      .value((datum) => { return datum.p; })(decisionOutcomes);

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

    // Pie
    //  ENTER
    svgEnter.append('g')
      .classed('pie', true);
    //  MERGE
    const pieMerge = svgMerge.select('.pie')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    // Arcs
    //  DATA-JOIN
    const arcUpdate = pieMerge.selectAll('.arc')
      .data(arcs);
    //  ENTER
    const arcEnter = arcUpdate.enter().append('path');
    //  MERGE
    arcEnter.merge(arcUpdate)
      .attr('class', (datum) => { return `arc ${datum.data.name}`; })
      .attr('d', d3.arc()
        .innerRadius(0)
        .outerRadius(Math.min(width, height) / 2 - 1));
    //  EXIT
    arcUpdate.exit().remove();

    // Labels
    //  DATA-JOIN
    const labelStaticUpdate = pieMerge.selectAll('.label.static')
      .data(arcs.filter((arc) => { return !arc.data.interactive; }));
    const labelInteractiveUpdate = pieMerge.selectAll('.label.interactive')
      .data(arcs.filter((arc) => { return arc.data.interactive; }));
    //  ENTER
    const labelStaticEnter = labelStaticUpdate.enter().append('text');
    const labelInteractiveEnter = labelInteractiveUpdate.enter().append('foreignObject');
    labelInteractiveEnter.append('xhtml:decidable-spinner')
      .on('input', (datum) => {
        datum.data.x = parseFloat(d3.event.target.value);

        this.dispatchEvent(new CustomEvent('decision-outcome-change', {
          detail: {
            x: datum.data.x,
            p: datum.data.p,
            name: datum.data.name,
          },
          bubbles: true,
        }));
      });
    //  MERGE
    labelStaticEnter.merge(labelStaticUpdate)
      .attr('class', (datum) => { return `label static ${datum.data.name}`; })
      .attr('transform', (datum) => {
        if (arcs.length === 1) {
          return 'translate(0, 0)';
        }
        const radius = (Math.min(width, height) / 2) * 0.6;
        const arcLabel = d3.arc().innerRadius(radius).outerRadius(radius);
        return `translate(${arcLabel.centroid(datum)})`;
      })
      .text((datum) => { return `$${datum.data.x.toFixed(0)}`; });
    const labelInteractiveMerge = labelInteractiveEnter.merge(labelInteractiveUpdate)
      .attr('class', (datum) => { return `label interactive ${datum.data.name}`; })
      .attr('transform', (datum) => {
        if (arcs.length === 1) {
          return 'translate(0, 0)';
        }
        const radius = (Math.min(width, height) / 2) * 0.6;
        const arcLabel = d3.arc().innerRadius(radius).outerRadius(radius);
        return `translate(${arcLabel.centroid(datum)})`;
      });
    labelInteractiveMerge.select('decidable-spinner')
      .attr('value', (datum) => { return `${datum.data.x.toFixed(0)}`; });
    //  EXIT
    labelStaticUpdate.exit().remove();
    labelInteractiveUpdate.exit().remove();
  }
}

customElements.define('decision-option', DecisionOption);
