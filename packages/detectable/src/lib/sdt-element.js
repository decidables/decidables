
import {
  LitElement,
  svg,
  css,
  unsafeCSS,
} from 'lit-element';
import * as d3 from 'd3';
import * as jStat from 'jstat';

/*
  SDTElement Base Class - Not intended for instantiation!
  <sdt-element>

  Variables:
    H = hits
    M = misses
    FA = false alarms
    CR = correct rejections
    HR = hit rate
    FAR = false alarm rate
    ACC = accuracy
    d = sensitivity (d' for equal variance, d_a for unequal variance)
    c = response bias (c for equal variance, c_a for unequal variance)
    s = standard deviation of signal distribution, with standard deviation of noise distribution = 1
    muN = mean of noise distribution
    muS = mean of signal distribution
    l = lambda, threshold location, with l = 0 indicating no response bias
    h = height of signal distribution

  Equations (* = unequal variance):
    HR = H / (H + M)
    FAR = FA / (FA + CR)
    ACC = (H + CR) / (H + M + FA + CR)
    ACC = (HR + (1 - FAR)) / 2

    d' = Z^-1(HR) - Z^-1(FAR)
    *d' = (2 / (s^2 + 1))^(1/2) * (s * Z^-1(HR) - Z^-1(FAR))

    c = -(Z^-1(HR) + Z^-1(FAR))/2
    *c = (2 / (s^2 + 1))^(1/2) * (s / s + 1) * -(Z^-1(HR) + Z^-1(FAR))

    HR = Z(d'/2 - c)
    *HR = Z(((s^2 + 1) / 2)^(1/2) * (d' / (s + 1) - c / s))

    FAR = Z(-d'/2 - c)
    *FAR = Z(((s^2 + 1) / 2)^(1/2) * -(d' / (s + 1) + c))

    HR = Z(d' + Z^-1(FAR))
    *HR = Z(((s^2 + 1) / 2)^(1/2) * d' + Z^-1(FAR) / s)

    HR = Z(-2c - Z^-1(FAR))
    *HR = Z(-((s^2 + 1) / 2)^(1/2) * ((s + 1) / s) * c - Z^-1(FAR))

    muN = -d'/2
    *muN = -((s^2 + 1) / 2)^(1/2) * (1 / (s + 1)) * d'

    d' = -2 * muN
    *d' = -(2 / (s^2 + 1))^(1/2) * (s + 1) * muN

    muS = d'/2
    *muS = ((s^2 + 1) / 2)^(1/2) * (s / (s + 1)) * d'

    d' = 2 * muS
    *d' = (2 / (s^2 + 1))^(1/2) * ((s + 1) / s) * muS

    l = c
    l = ((s^2 + 1) / 2)^(1/2) * c

    c = l
    c = (2 / (s^2 + 1))^(1/2) * l

    h = 1 / (s * (2 * pi)^(1/2))
    s = 1 / (h * (2 * pi)^(1/2))
*/
export default class SDTElement extends LitElement {
  static get properties() {
    return {
      interactive: {
        attribute: 'interactive',
        type: Boolean,
        reflect: true,
      },
    };
  }

  // HACK: Create a unique ID for each SDTElement
  // This is needed because Edge/IE11 don't have real Shadow DOM, so IDs leak
  // out of elements and collide if there is more than one of an element on a
  // page. Known issue for checkbox/switches and the id/for pattern on <input>
  // and <label>
  static get uniqueId() {
    SDTElement.ID += 1;
    return SDTElement.ID;
  }

  constructor() {
    super();
    this.uniqueId = `sdt-${SDTElement.uniqueId}`;
    this.interactive = false;
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
      .on('mousemove.keyboard touchstart.keyboard', (datum, index, elements) => {
        const element = elements[index];
        d3.select(element.renderRoot.host)
          .classed('keyboard', false)
          .on('mousemove.keyboard touchstart.keyboard', null);
      })
      .on('keydown.keyboard', (datum, index, elements) => {
        const element = elements[index];
        d3.select(element.renderRoot.host)
          .classed('keyboard', true)
          .on('keydown.keyboard mousemove.keyboard touchstart.keyboard', null);
      });
  }

  static get colors() {
    return {
      h: d3.schemeSet1[2],
      m: d3.schemeSet1[4],
      fa: d3.schemeSet1[1],
      cr: d3.schemeSet1[0],
      hr: d3.schemeSet1[5],
      far: d3.schemeSet1[3],
      acc: d3.schemeSet1[8],
      d: d3.schemeSet1[7],
      c: d3.schemeSet1[6],
      s: '#4545d0',
      present: '#f032e6',
      absent: '#10dbc9',
      correct: '#ffffff',
      error: '#000000',
    };
  }

  static get lights() {
    return Object.keys(SDTElement.colors).reduce((acc, cur) => {
      acc[cur] = d3.interpolateRgb(SDTElement.colors[cur], '#ffffff')(0.5);
      return acc;
    }, {});
  }

  static get darks() {
    return Object.keys(SDTElement.colors).reduce((acc, cur) => {
      acc[cur] = d3.interpolateRgb(SDTElement.colors[cur], '#000000')(0.5);
      return acc;
    }, {});
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
      opacityUmbra: 0.2,
      opacityPenumbra: 0.14,
      opacityAmbient: 0.12,
      opacityBoost: 0.2,
      mapUmbra: { // $mdc-elevation-umbra-map
        0:  {x: 0, y:  0, b:  0, s:  0}, // offset-x, offset-y, blur-radius, spread-radius
        2:  {x: 0, y:  3, b:  1, s: -2},
        4:  {x: 0, y:  2, b:  4, s: -1},
        8:  {x: 0, y:  5, b:  5, s: -3},
        16: {x: 0, y:  8, b: 10, s: -5},
      },
      mapPenumbra: { // $mdc-elevation-penumbra-map
        0:  {x: 0, y:  0, b:  0, s:  0}, // offset-x, offset-y, blur-radius, spread-radius
        2:  {x: 0, y:  2, b:  2, s:  0},
        4:  {x: 0, y:  4, b:  5, s:  0},
        8:  {x: 0, y:  8, b: 10, s:  1},
        16: {x: 0, y: 16, b: 24, s:  2},
      },
      mapAmbient: { // $mdc-elevation-ambient-map
        0:  {x: 0, y:  0, b:  0, s:  0}, // offset-x, offset-y, blur-radius, spread-radius
        2:  {x: 0, y:  1, b:  5, s:  0},
        4:  {x: 0, y:  1, b: 10, s:  0},
        8:  {x: 0, y:  3, b: 14, s:  2},
        16: {x: 0, y:  6, b: 30, s:  5},
      },
    };
    /* eslint-enable key-spacing, object-curly-newline */
  }

  static cssBoxShadow(elevation) {
    const umbraO = this.shadows.opacityUmbra + this.shadows.opacityBoost;
    const penumbraO = this.shadows.opacityPenumbra + this.shadows.opacityBoost;
    const ambientO = this.shadows.opacityAmbient + this.shadows.opacityBoost;

    const umbraC = `rgba(${this.shadows.baselineColorString}, ${umbraO})`;
    const penumbraC = `rgba(${this.shadows.baselineColorString}, ${penumbraO})`;
    const ambientC = `rgba(${this.shadows.baselineColorString}, ${ambientO})`;

    const umbraM = this.shadows.mapUmbra[elevation];
    const penumbraM = this.shadows.mapPenumbra[elevation];
    const ambientM = this.shadows.mapAmbient[elevation];

    const umbraS = `${umbraM.y / 2}px ${umbraM.y}px ${umbraM.b}px ${umbraM.s}px`;
    const penumbraS = `${penumbraM.y / 2}px ${penumbraM.y}px ${penumbraM.b}px ${penumbraM.s}px`;
    const ambientS = `${ambientM.y / 2}px ${ambientM.y}px ${ambientM.b}px ${ambientM.s}px`;

    return `${umbraS} ${umbraC}, ${penumbraS} ${penumbraC}, ${ambientS} ${ambientC}`;
  }

  static get svgFilters() {
    const shadows = SDTElement.shadows; // eslint-disable-line prefer-destructuring
    const erodeRadius = 1;

    const filters = shadows.elevations.map((z) => {
      return svg`
        <filter id=${`shadow-${z}`} x="-200%" y="-200%" width="500%" height="500%">
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

        ---color-h: var(--color-h, ${unsafeCSS(this.colors.h)});
        ---color-m: var(--color-m, ${unsafeCSS(this.colors.m)});
        ---color-fa: var(--color-fa, ${unsafeCSS(this.colors.fa)});
        ---color-cr: var(--color-cr, ${unsafeCSS(this.colors.cr)});
        ---color-hr: var(--color-hr, ${unsafeCSS(this.colors.hr)});
        ---color-far: var(--color-far, ${unsafeCSS(this.colors.far)});
        ---color-acc: var(--color-acc, ${unsafeCSS(this.colors.acc)});
        ---color-d: var(--color-d, ${unsafeCSS(this.colors.d)});
        ---color-c: var(--color-c, ${unsafeCSS(this.colors.c)});
        ---color-s: var(--color-s, ${unsafeCSS(this.colors.s)});
        ---color-present: var(--color-present, ${unsafeCSS(this.colors.present)});
        ---color-absent: var(--color-absent, ${unsafeCSS(this.colors.absent)});
        ---color-correct: var(--color-correct, ${unsafeCSS(this.colors.correct)});
        ---color-error: var(--color-error, ${unsafeCSS(this.colors.error)});

        ---color-h-light: var(--color-h-light, ${unsafeCSS(this.lights.h)});
        ---color-m-light: var(--color-m-light, ${unsafeCSS(this.lights.m)});
        ---color-fa-light: var(--color-fa-light, ${unsafeCSS(this.lights.fa)});
        ---color-cr-light: var(--color-cr-light, ${unsafeCSS(this.lights.cr)});
        ---color-hr-light: var(--color-hr-light, ${unsafeCSS(this.lights.hr)});
        ---color-far-light: var(--color-far-light, ${unsafeCSS(this.lights.far)});
        ---color-acc-light: var(--color-acc-light, ${unsafeCSS(this.lights.acc)});
        ---color-d-light: var(--color-d-light, ${unsafeCSS(this.lights.d)});
        ---color-c-light: var(--color-c-light, ${unsafeCSS(this.lights.c)});
        ---color-s-light: var(--color-s-light, ${unsafeCSS(this.lights.s)});
        ---color-present-light: var(--color-present-light, ${unsafeCSS(this.lights.present)});
        ---color-absent-light: var(--color-absent-light, ${unsafeCSS(this.lights.absent)});

        ---color-h-dark: var(--color-h-dark, ${unsafeCSS(this.darks.h)});
        ---color-m-dark: var(--color-m-dark, ${unsafeCSS(this.darks.m)});
        ---color-fa-dark: var(--color-fa-dark, ${unsafeCSS(this.darks.fa)});
        ---color-cr-dark: var(--color-cr-dark, ${unsafeCSS(this.darks.cr)});
        ---color-hr-dark: var(--color-hr-dark, ${unsafeCSS(this.darks.hr)});
        ---color-far-dark: var(--color-far-dark, ${unsafeCSS(this.darks.far)});
        ---color-acc-dark: var(--color-acc-dark, ${unsafeCSS(this.darks.acc)});
        ---color-d-dark: var(--color-d-dark, ${unsafeCSS(this.darks.d)});
        ---color-c-dark: var(--color-c-dark, ${unsafeCSS(this.darks.c)});
        ---color-s-dark: var(--color-s-dark, ${unsafeCSS(this.darks.s)});
        ---color-present-dark: var(--color-present-dark, ${unsafeCSS(this.darks.present)});
        ---color-absent-dark: var(--color-absent-dark, ${unsafeCSS(this.darks.absent)});

        ---color-background: var(--color-background, ${unsafeCSS(this.greys.white)});
        ---color-border: var(--color-border, ${unsafeCSS(this.greys.light75)});
        ---color-text: var(--color-text, ${unsafeCSS(this.greys.dark75)});
        ---color-text-light: var(--color-text-light, ${unsafeCSS(this.greys.light75)});
        ---color-link: var(--color-link, ${unsafeCSS(this.greys.dark25)});
        ---color-element-background: var(--color-element-background, ${unsafeCSS(this.greys.light75)});
        ---color-element-disabled: var(--color-element-disabled, ${unsafeCSS(this.greys.light50)});
        ---color-element-enabled: var(--color-element-enabled, ${unsafeCSS(this.greys.grey)});
        ---color-element-border: var(--color-element-border, ${unsafeCSS(this.greys.dark50)});
        ---color-element-emphasis: var(--color-element-emphasis, ${unsafeCSS(this.greys.dark75)});

        ---font-family-base: var(--font-family-base, "Source Sans Pro", sans-serif);
        ---font-family-math: var(--font-family-math, "Source Serif Pro", serif);

        font-family: var(---font-family-base);
      }

      :host,
      :host *,
      :host *::before,
      :host *::after {
        box-sizing: border-box;
      }

      .math-var {
        font-family: var(---font-family-math);
        font-style: italic;
      }

      .math-greek {
        font-family: var(---font-family-math);
        font-style: normal;
      }

      .defs {
        display: block;

        width: 0;
        height: 0;
      }
    `;
  }

  static hm2hr(h, m) {
    if ((h === 0) && (m === 0)) {
      return 0;
    }
    return h / (h + m);
  }

  static facr2far(fa, cr) {
    if ((fa === 0) && (cr === 0)) {
      return 0;
    }
    return fa / (fa + cr);
  }

  static hmfacr2acc(h, m, fa, cr) {
    if ((h === 0) && (m === 0) && (fa === 0) && (cr === 0)) {
      return 0;
    }
    return (h + cr) / (h + m + fa + cr);
  }

  static hrfar2acc(hr, far) {
    return (hr + (1 - far)) / 2;
  }

  static hrfar2d(hr, far, s = 1) {
    if (s === 1) return (jStat.normal.inv(hr, 0, 1) - jStat.normal.inv(far, 0, 1));
    return (
      Math.sqrt(2 / (s * s + 1))
      * (s * jStat.normal.inv(hr, 0, 1) - jStat.normal.inv(far, 0, 1))
    );
  }

  static hrfar2c(hr, far, s = 1) {
    if (s === 1) return (-(jStat.normal.inv(hr, 0, 1) + jStat.normal.inv(far, 0, 1)) / 2);
    return (
      Math.sqrt(2 / (s * s + 1))
      * (s / (s + 1))
      * -(jStat.normal.inv(hr, 0, 1) + jStat.normal.inv(far, 0, 1))
    );
  }

  static dc2hr(d, c, s = 1) {
    if (s === 1) return (jStat.normal.cdf(d / 2 - c, 0, 1));
    return (jStat.normal.cdf(Math.sqrt((s * s + 1) / 2) * (d / (1 + s) - c / s), 0, 1));
  }

  static dc2far(d, c, s = 1) {
    if (s === 1) return (jStat.normal.cdf(-(d / 2 + c), 0, 1));
    return (jStat.normal.cdf(Math.sqrt((s * s + 1) / 2) * -(d / (1 + s) + c), 0, 1));
  }

  static dfar2hr(d, far, s = 1) {
    if (s === 1) return (jStat.normal.cdf(d + jStat.normal.inv(far, 0, 1), 0, 1));
    return (jStat.normal.cdf(
      (Math.sqrt((s * s + 1) / 2) * d + jStat.normal.inv(far, 0, 1)) / s,
      0,
      1,
    ));
  }

  static cfar2hr(c, far, s = 1) {
    if (s === 1) return (jStat.normal.cdf(-(2 * c) - jStat.normal.inv(far, 0, 1), 0, 1));
    return (jStat.normal.cdf(
      -Math.sqrt((s * s + 1) / 2) * ((s + 1) / s) * c - jStat.normal.inv(far, 0, 1),
      0,
      1,
    ));
  }

  static d2muN(d, s = 1) {
    if (s === 1) return -d / 2;
    return -Math.sqrt((s * s + 1) / 2) * (1 / (s + 1)) * d;
  }

  static muN2d(muN, s = 1) {
    if (s === 1) return -2 * muN;
    return -Math.sqrt(2 / (s * s + 1)) * (s + 1) * muN;
  }

  static d2muS(d, s = 1) {
    if (s === 1) return d / 2;
    return Math.sqrt((s * s + 1) / 2) * (s / (s + 1)) * d;
  }

  static muS2d(muS, s = 1) {
    if (s === 1) return 2 * muS;
    return Math.sqrt(2 / (s * s + 1)) * ((s + 1) / s) * muS;
  }

  static c2l(c, s = 1) {
    if (s === 1) return c;
    return Math.sqrt((s * s + 1) / 2) * c;
  }

  static l2c(l, s = 1) {
    if (s === 1) return l;
    return Math.sqrt(2 / (s * s + 1)) * l;
  }

  static s2h(s = 1) {
    return 1 / (s * Math.sqrt(2 * Math.PI));
  }

  static h2s(h) {
    return 1 / (h * Math.sqrt(2 * Math.PI));
  }

  static hr2zhr(hr) {
    return jStat.normal.inv(hr, 0, 1);
  }

  static far2zfar(far) {
    return jStat.normal.inv(far, 0, 1);
  }

  static zhr2hr(zhr) {
    return jStat.normal.cdf(zhr, 0, 1);
  }

  static zfar2far(zfar) {
    return jStat.normal.cdf(zfar, 0, 1);
  }
}

// Static property of SDTElement!
SDTElement.ID = 0;
