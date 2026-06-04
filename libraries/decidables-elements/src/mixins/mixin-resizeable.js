
export default function DecidablesMixinResizeable(superClass) {
  return class extends superClass {
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

      this.width = NaN;
      this.height = NaN;
      this.rem = NaN;
    }

    getDimensions() {
      this.width = parseFloat(this.getComputedStyleValue('width'), 10);
      this.height = parseFloat(this.getComputedStyleValue('height'), 10);
      this.rem = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('font-size'), 10);
    }

    connectedCallback() {
      super.connectedCallback();

      this.resizeObserver = new ResizeObserver(this.getDimensions.bind(this));
      this.resizeObserver.observe(this);
    }

    disconnectedCallback() {
      this.resizeObserver.unobserve(this);

      super.disconnectedCallback();
    }
  };
}
