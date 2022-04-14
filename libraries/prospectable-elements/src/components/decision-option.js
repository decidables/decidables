
import {html, css} from 'lit';
import * as d3 from 'd3';

import ProspectableElement from '../cpt-element';

/*
  DecisionOption element
  <decision-option>

  Attributes:
  Win, Loss, Probability
*/
export default class DecisionOption extends ProspectableElement {
  static get properties() {
    return {
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
          --decidables-spinner-font-size: 1.75rem;
          --decidables-spinner-input-width: 4rem;
          --decidables-spinner-prefix: "$";

          display: inline-block;
        }

        .main {
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .outline {
          fill: var(---color-element-background);
          stroke: var(---color-element-emphasis);
          stroke-width: 2;
        }

        .arc {
          stroke: var(---color-element-emphasis);
          stroke-width: 2;
        }

        .arc.interactive {
          cursor: ns-resize;

          filter: url("#shadow-2");
          outline: none;
        }

        .arc.interactive:hover {
          filter: url("#shadow-4");
        }

        .arc.interactive:active {
          filter: url("#shadow-8");
        }

        :host(.keyboard) .arc.interactive:focus {
          filter: url("#shadow-8");
        }

        .arc.win {
          fill: var(---color-better-light);
        }

        .arc.loss {
          fill: var(---color-worse-light);
        }

        .arc.sure {
          fill: var(---color-even-light);
        }

        .label.static {
          font-size: 1.75rem;

          user-select: none;

          dominant-baseline: middle;
          text-anchor: middle;
        }

        .label.interactive {
          width: var(--decidables-spinner-input-width);
          height: calc(var(--decidables-spinner-font-size) * 1.5);
          overflow: visible;
        }

        /* HACK: Get Safari to work with SVG foreignObject */
        /* https://stackoverflow.com/questions/51313873/svg-foreignobject-not-working-properly-on-safari */
        /* https://bugs.webkit.org/show_bug.cgi?id=23113 */
        .label.interactive decidables-spinner {
          position: fixed;
        }

        .label.interactive.win decidables-spinner {
          background-color: var(---color-better-light);
        }

        .label.interactive.loss decidables-spinner {
          background-color: var(---color-worse-light);
        }

        .label.interactive.sure decidables-spinner {
          background-color: var(---color-even-light);
        }
      `,
    ];
  }

  render() { /* eslint-disable-line class-methods-use-this */
    return html`
      ${ProspectableElement.svgFilters}
      <slot></slot>
    `;
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
      top: 0, // 0.25 * this.rem,
      bottom: 0, // 0.25 * this.rem,
      left: 0, // 0.25 * this.rem,
      right: 0, // 0.25 * this.rem,
    };
    const height = elementSize - (margin.top + margin.bottom);
    const width = elementSize - (margin.left + margin.right);

    // Get outcomes from slots!
    const decisionOutcomes = this.querySelectorAll('decision-outcome');
    const pCorrection = decisionOutcomes.length ? -decisionOutcomes[0].p : 0;
    const arcs = d3.pie()
      .startAngle((pCorrection * Math.PI) - Math.PI)
      .endAngle((pCorrection * Math.PI) + Math.PI)
      .sortValues(null) // Use inserted order!
      .value((datum) => { return datum.p; })(decisionOutcomes);
    const arcsStatic = arcs.filter(
      (arc) => { return !arc.data.interactive; },
    );
    const arcsInteractive = arcs.filter(
      (arc) => { return arc.data.interactive; },
    );

    // Define drag behavior for arcs
    function fixAngle(angle) {
      const modAngle = (angle + (2 * Math.PI)) % (2 * Math.PI);
      const newAngle = (modAngle > Math.PI)
        ? (modAngle - (2 * Math.PI))
        : ((modAngle < -Math.PI)
          ? (modAngle + (2 * Math.PI))
          : modAngle);
      return newAngle;
    }
    const arcDrag = d3.drag()
      .subject((event, datum) => {
        const arcAngle = fixAngle((datum.endAngle + datum.startAngle) / 2);
        const dragAngle = fixAngle(Math.atan2(event.y, event.x) + (Math.PI / 2));
        decisionOutcomes.forEach((item) => {
          item.startP = item.p;
        });
        return {
          arcAngle: arcAngle,
          startAngle: fixAngle(dragAngle - arcAngle),
        };
      })
      .on('start', (event) => {
        const element = event.currentTarget;
        d3.select(element).classed('dragging', true);
      })
      .on('drag', (event, datum) => {
        const angle = fixAngle(Math.atan2(event.y, event.x) + (Math.PI / 2));
        const currentAngle = fixAngle(angle - event.subject.arcAngle);
        const changeAngle = fixAngle((event.subject.startAngle > 0)
          ? (currentAngle - event.subject.startAngle)
          : (event.subject.startAngle - currentAngle));
        const changeP = changeAngle / Math.PI;
        const proposedP = datum.data.startP + changeP;
        const newP = (proposedP > 0.99)
          ? 0.99
          : ((proposedP < 0.01)
            ? 0.01
            : proposedP);
        decisionOutcomes.forEach((item) => {
          item.p = (item === datum.data)
            ? newP
            : (item.startP / (1 - datum.data.startP)) * (1 - newP);
        });

        this.dispatchEvent(new CustomEvent('decision-outcome-change', {
          detail: {
            x: datum.data.x,
            p: datum.data.p,
            name: datum.data.name,
          },
          bubbles: true,
        }));
        // console.log(`x: ${event.x}, y: ${event.y}`);
        // console.log(`change: ${changeAngle}, changeP: ${changeP}`);
      })
      .on('end', (event) => {
        const element = event.currentTarget;
        d3.select(element).classed('dragging', false);
      });

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
    const pieEnter = svgEnter.append('g')
      .classed('pie', true);
    //  MERGE
    const pieMerge = svgMerge.select('.pie')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    // Outline
    //  ENTER
    pieEnter.append('circle')
      .classed('outline', true);
    //  MERGE
    pieMerge.select('.outline')
      .attr('r', Math.min(width, height) / 2 - 1);

    // Arcs
    //  DATA-JOIN
    const arcUpdate = pieMerge.selectAll('.arc')
      .data(arcs);
    //  ENTER
    const arcEnter = arcUpdate.enter().append('path')
      .call(arcDrag);
    //  MERGE
    arcEnter.merge(arcUpdate)
      .attr('tabindex', (datum) => { return (arcsInteractive.includes(datum) && (arcs.length > 1)) ? 0 : null; })
      .attr('class', (datum) => { return `arc ${datum.data.name}`; })
      .classed('interactive', (datum) => { return (arcsInteractive.includes(datum) && (arcs.length > 1)); })
      .attr('d', d3.arc()
        .innerRadius(0)
        .outerRadius(Math.min(width, height) / 2 - 1));
    //  EXIT
    arcUpdate.exit().remove();

    // Labels
    //  DATA-JOIN
    const labelStaticUpdate = pieMerge.selectAll('.label.static')
      .data(arcsStatic);
    const labelInteractiveUpdate = pieMerge.selectAll('.label.interactive')
      .data(arcsInteractive);
    //  ENTER
    const labelStaticEnter = labelStaticUpdate.enter().append('text');
    const labelInteractiveEnter = labelInteractiveUpdate.enter().append('foreignObject');
    labelInteractiveEnter.append('xhtml:decidables-spinner')
      .on('input', (event, datum) => {
        datum.data.x = parseFloat(event.target.value);

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
        // HACK: Center spinner here instead of CSS for Safari SVG foreignObject
        // x: calc(var(--decidables-spinner-input-width) / -2);
        // y: calc(var(--decidables-spinner-font-size) * 1.5 / -2);
        const inputWidth = parseFloat(this.getComputedStyleValue('--decidables-spinner-input-width'));
        const fontSize = parseFloat(this.getComputedStyleValue('--decidables-spinner-font-size'));
        const rem = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('font-size'), 10);
        const x = (inputWidth * rem) / -2;
        const y = (fontSize * rem * 1.5) / -2;

        if (arcs.length === 1) {
          return `translate(${x}, ${y})`;
        }
        const radius = (Math.min(width, height) / 2) * 0.6;
        const arcLabel = d3.arc().innerRadius(radius).outerRadius(radius);
        return `translate(${arcLabel.centroid(datum)[0] + x}, ${arcLabel.centroid(datum)[1] + y})`;
      });
    labelInteractiveMerge.select('decidables-spinner')
      .attr('value', (datum) => { return `${datum.data.x.toFixed(0)}`; });
    //  EXIT
    labelStaticUpdate.exit().remove();
    labelInteractiveUpdate.exit().remove();
  }
}

customElements.define('decision-option', DecisionOption);
