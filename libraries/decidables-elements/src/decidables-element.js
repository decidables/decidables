
import {
  LitElement,
  css,
  svg,
  unsafeCSS,
} from 'lit';
import * as d3 from 'd3';

/*
  DecidablesElement Base Class - Not intended for instantiation!
  <decidables-element>
*/
export default class DecidablesElement extends LitElement {
  // HACK: Create a unique ID for each DecidablesElement
  // This is needed because Edge/IE11 don't have real Shadow DOM, so IDs leak
  // out of elements and collide if there is more than one of an element on a
  // page. Known issue for checkbox/switches and the id/for pattern on <input>
  // and <label>
  static get uniqueId() {
    DecidablesElement.ID += 1;
    return DecidablesElement.ID;
  }

  constructor() {
    super();
    this.uniqueId = `decidables-${DecidablesElement.uniqueId}`;
  }

  getComputedStyleValue(property) {
    // HACK: IE11 requires use of polyfill interface to get custom property value in Javascript
    if (window.ShadyCSS) {
      return window.ShadyCSS.getComputedStyleValue(this, property);
    }
    return getComputedStyle(this).getPropertyValue(property);
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);

    // Use focus highlighting if keyboard is used at all
    d3.select(this.renderRoot.host)
      .classed('keyboard', true)
      .on('mousemove.keyboard touchstart.keyboard', (event) => {
        const element = event.currentTarget;
        d3.select(element.renderRoot.host)
          .classed('keyboard', false)
          .on('mousemove.keyboard touchstart.keyboard', null);
      })
      .on('keydown.keyboard', (event) => {
        const element = event.currentTarget;
        d3.select(element.renderRoot.host)
          .classed('keyboard', true)
          .on('keydown.keyboard mousemove.keyboard touchstart.keyboard', null);
      });
  }

  static get greys() {
    const grey = '#999999';
    const greys = {};
    greys.white = '#ffffff';
    greys.light75 = d3.interpolateRgb(grey, '#ffffff')(0.75);
    greys.light50 = d3.interpolateRgb(grey, '#ffffff')(0.5);
    greys.light25 = d3.interpolateRgb(grey, '#ffffff')(0.25);
    greys.grey = grey;
    greys.dark25 = d3.interpolateRgb(grey, '#000000')(0.25);
    greys.dark50 = d3.interpolateRgb(grey, '#000000')(0.5);
    greys.dark75 = d3.interpolateRgb(grey, '#000000')(0.75);
    greys.black = '#000000';
    return greys;
  }

  static get shadows() {
    // Material Design elevation styles
    // References:
    //   https://github.com/material-components/material-components-web/tree/master/packages/mdc-elevation
    //   https://codepen.io/hanger/pen/yOGvQp
    /* eslint-disable key-spacing, object-curly-newline */
    return {
      elevations: [0, 2, 4, 8, 16],
      baselineColor: '#000000',
      baselineColorString: '0, 0, 0',
      inverseBaselineColor: '#FFFFFF',
      inverseBaselineColorString: '255, 255, 255',
      opacityUmbra: 0.2,
      opacityPenumbra: 0.14,
      opacityAmbient: 0.12,
      opacityBoost: 0.2,
      mapUmbra: {// $mdc-elevation-umbra-map
        0:  {x: 0, y:  0, b:  0, s:  0}, // offset-x, offset-y, blur-radius, spread-radius
        2:  {x: 0, y:  3, b:  1, s: -2},
        4:  {x: 0, y:  2, b:  4, s: -1},
        8:  {x: 0, y:  5, b:  5, s: -3},
        16: {x: 0, y:  8, b: 10, s: -5},
      },
      mapPenumbra: {// $mdc-elevation-penumbra-map
        0:  {x: 0, y:  0, b:  0, s:  0}, // offset-x, offset-y, blur-radius, spread-radius
        2:  {x: 0, y:  2, b:  2, s:  0},
        4:  {x: 0, y:  4, b:  5, s:  0},
        8:  {x: 0, y:  8, b: 10, s:  1},
        16: {x: 0, y: 16, b: 24, s:  2},
      },
      mapAmbient: {// $mdc-elevation-ambient-map
        0:  {x: 0, y:  0, b:  0, s:  0}, // offset-x, offset-y, blur-radius, spread-radius
        2:  {x: 0, y:  1, b:  5, s:  0},
        4:  {x: 0, y:  1, b: 10, s:  0},
        8:  {x: 0, y:  3, b: 14, s:  2},
        16: {x: 0, y:  6, b: 30, s:  5},
      },
    };
    /* eslint-enable key-spacing, object-curly-newline */
  }

  static cssBoxShadow(elevation, rotate = false, inverse = false) {
    const umbraO = this.shadows.opacityUmbra + this.shadows.opacityBoost;
    const penumbraO = this.shadows.opacityPenumbra + this.shadows.opacityBoost;
    const ambientO = this.shadows.opacityAmbient + this.shadows.opacityBoost;

    const umbraC = (inverse)
      ? `rgba(${this.shadows.inverseBaselineColorString}, ${umbraO})`
      : `rgba(${this.shadows.baselineColorString}, ${umbraO})`;
    const penumbraC = (inverse)
      ? `rgba(${this.shadows.inverseBaselineColorString}, ${penumbraO})`
      : `rgba(${this.shadows.baselineColorString}, ${penumbraO})`;
    const ambientC = (inverse)
      ? `rgba(${this.shadows.inverseBaselineColorString}, ${ambientO})`
      : `rgba(${this.shadows.baselineColorString}, ${ambientO})`;

    const umbraM = this.shadows.mapUmbra[elevation];
    const penumbraM = this.shadows.mapPenumbra[elevation];
    const ambientM = this.shadows.mapAmbient[elevation];

    const umbraS = (rotate)
      ? `${-umbraM.y}px ${umbraM.y / 2}px ${umbraM.b}px ${umbraM.s}px`
      : `${umbraM.y / 2}px ${umbraM.y}px ${umbraM.b}px ${umbraM.s}px`;
    const penumbraS = (rotate)
      ? `${-penumbraM.y}px ${penumbraM.y / 2}px ${penumbraM.b}px ${penumbraM.s}px`
      : `${penumbraM.y / 2}px ${penumbraM.y}px ${penumbraM.b}px ${penumbraM.s}px`;
    const ambientS = (rotate)
      ? `${-ambientM.y}px ${ambientM.y / 2}px ${ambientM.b}px ${ambientM.s}px`
      : `${ambientM.y / 2}px ${ambientM.y}px ${ambientM.b}px ${ambientM.s}px`;

    return `${umbraS} ${umbraC}, ${penumbraS} ${penumbraC}, ${ambientS} ${ambientC}`;
  }

  static get svgFilters() {
    const shadows = DecidablesElement.shadows; // eslint-disable-line prefer-destructuring
    const erodeRadius = 1;

    const filters = shadows.elevations.map((z) => {
      return svg`
        <filter id=${`shadow-${z}`} x="-250%" y="-250%" width="600%" height="600%">
          <feComponentTransfer in="SourceAlpha" result="solid">
            <feFuncA  type="table" tableValues="0 1 1"/>
          </feComponentTransfer>
          <feOffset in="solid" result="offU" dx=${shadows.mapUmbra[z].y / 2} dy=${shadows.mapUmbra[z].y} />
          <feOffset in="solid" result="offP" dx=${shadows.mapPenumbra[z].y / 2} dy=${shadows.mapPenumbra[z].y} />
          <feOffset in="solid" result="offA" dx=${shadows.mapAmbient[z].y / 2} dy=${shadows.mapAmbient[z].y} />
          ${(shadows.mapUmbra[z].s === 0)
            ? svg``
            : svg`<feMorphology in="offU" result="spreadU" operator=${(shadows.mapUmbra[z].s > 0) ? 'dilate' : 'erode'} radius=${Math.abs(shadows.mapUmbra[z].s)} />`
          }
          ${(shadows.mapPenumbra[z].s === 0)
            ? svg``
            : svg`<feMorphology in="offP" result="spreadP" operator=${(shadows.mapPenumbra[z].s > 0) ? 'dilate' : 'erode'} radius=${Math.abs(shadows.mapPenumbra[z].s)} />`
          }
          ${(shadows.mapAmbient[z].s === 0)
            ? svg``
            : svg`<feMorphology in="offA" result="spreadA" operator=${(shadows.mapAmbient[z].s > 0) ? 'dilate' : 'erode'} radius=${Math.abs(shadows.mapAmbient[z].s)} />`
          }
          <feGaussianBlur in=${(shadows.mapUmbra[z].s === 0) ? 'offU' : 'spreadU'} result="blurU" stdDeviation=${shadows.mapUmbra[z].b / 2} />
          <feGaussianBlur in=${(shadows.mapPenumbra[z].s === 0) ? 'offP' : 'spreadP'} result="blurP" stdDeviation=${shadows.mapPenumbra[z].b / 2} />
          <feGaussianBlur in=${(shadows.mapAmbient[z].s === 0) ? 'offA' : 'spreadA'} result="blurA" stdDeviation=${shadows.mapAmbient[z].b / 2} />
          <feFlood in="SourceGraphic" result="opU" flood-color=${shadows.baselineColor} flood-opacity=${shadows.opacityUmbra + shadows.opacityBoost} />
          <feFlood in="SourceGraphic" result="opP" flood-color=${shadows.baselineColor} flood-opacity=${shadows.opacityPenumbra + shadows.opacityBoost} />
          <feFlood in="SourceGraphic" result="opA" flood-color=${shadows.baselineColor} flood-opacity=${shadows.opacityAmbient + shadows.opacityBoost} />
          <feComposite in="opU" in2="blurU" result="shU" operator="in" />
          <feComposite in="opP" in2="blurP" result="shP" operator="in" />
          <feComposite in="opA" in2="blurA" result="shA" operator="in" />
          <!-- HACK Edge: Using a dynamic value for erode radius stops Edge from corrupting the "radius" value! -->
          <feMorphology in="solid" result="smaller" operator="erode" radius=${erodeRadius} />
          <feComposite in="shU" in2="smaller" result="finalU" operator="out" />
          <feComposite in="shP" in2="smaller" result="finalP" operator="out" />
          <feComposite in="shA" in2="smaller" result="finalA" operator="out" />
          <feMerge>
            <feMergeNode in="finalU" />
            <feMergeNode in="finalP" />
            <feMergeNode in="finalA" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>`;
    });

    return svg`
      <svg class="defs">
        <defs>
          ${filters}
        </defs>
      </svg>
    `;
  }

  static get styles() {
    return css`
      :host {
        ---shadow-0: var(--shadow-0, ${unsafeCSS(this.cssBoxShadow(0))});
        ---shadow-2: var(--shadow-2, ${unsafeCSS(this.cssBoxShadow(2))});
        ---shadow-4: var(--shadow-4, ${unsafeCSS(this.cssBoxShadow(4))});
        ---shadow-8: var(--shadow-8, ${unsafeCSS(this.cssBoxShadow(8))});

        ---color-background: var(--color-background, ${unsafeCSS(this.greys.white)});
        ---color-border: var(--color-border, ${unsafeCSS(this.greys.light75)});
        ---color-text: var(--color-text, ${unsafeCSS(this.greys.dark75)});
        ---color-text-inverse: var(--color-text-inverse, ${unsafeCSS(this.greys.white)});
        ---color-link: var(--color-link, ${unsafeCSS(this.greys.dark25)});
        ---color-element-background: var(--color-element-background, ${unsafeCSS(this.greys.light75)});
        ---color-element-disabled: var(--color-element-disabled, ${unsafeCSS(this.greys.light50)});
        ---color-element-enabled: var(--color-element-enabled, ${unsafeCSS(this.greys.grey)});
        ---color-element-selected: var(--color-element-selected, ${unsafeCSS(this.greys.dark25)});
        ---color-element-border: var(--color-element-border, ${unsafeCSS(this.greys.dark50)});
        ---color-element-emphasis: var(--color-element-emphasis, ${unsafeCSS(this.greys.dark75)});

        ---font-family-base: var(--font-family-base, "Source Sans", sans-serif);
        ---font-family-math: var(--font-family-math, "Source Serif", serif);

        ---transition-duration: var(--transition-duration, 500ms);

        font-family: var(---font-family-base);
      }

      :host,
      :host *,
      :host *::before,
      :host *::after {
        box-sizing: border-box;
      }

      .math-greek {
        font-family: var(---font-family-math);
        font-style: normal;
      }

      .math-num {
        font-family: var(---font-family-base);
        font-style: normal;
      }

      .math-var {
        font-family: var(---font-family-math);
        font-style: italic;
      }

      .defs {
        display: block;

        width: 0;
        height: 0;
      }
    `;
  }
}

// Static property of DecidablesElement!
DecidablesElement.ID = 0;
