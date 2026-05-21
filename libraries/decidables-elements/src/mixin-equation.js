import {css} from 'lit';

export default function DecidablesMixinEquation(superClass) {
  return class extends superClass {
    static get properties() {
      return {
        numeric: {
          attribute: 'numeric',
          type: Boolean,
          reflect: true,
        },
      };
    }

    constructor() {
      super();

      this.numeric = false;
    }

    static get styles() {
      return [
        super.styles,
        css`
          :host {
            ---font-family-math: var(--font-family-math, "DejaVu Math", math);

            display: block;

            margin: 1rem;
          }

          /* Containing <div> */
          .holder {
            display: flex;

            flex-direction: row;

            justify-content: left;
          }

          /* MathML */
          .math-id {
            padding: 0.25rem;

            border-radius: var(---border-radius);
          }

          /* Different bounding box in Firefox */
          @supports (-moz-appearance: textfield) {
            .math-id {
              padding: 0 0.25rem;
            }

            /* Avoid excessive float above fraction line */
            /* Target mrow on top of mfrac with mtext or mi in it */
            /* stylelint-disable-next-line selector-max-compound-selectors */
            mfrac > mrow:first-child:has(> mtable, > msup > mrow > mtable) {
              transform: translateY(0.375rem);
            }

            /* Avoid bounding box overlapping fraction line */
            /* Target mrow on top of mfrac with mtext or mi in it */
            /* stylelint-disable-next-line selector-max-compound-selectors */
            mfrac > mrow:first-child:has(> mtext, > mi, > msup > mrow > mi) {
              transform: translateY(-0.125rem);
            }

            /* Avoid bounding box overlapping fraction line */
            /* Target mrow on bottom of mfrac with mtext or mi in it */
            /* stylelint-disable-next-line selector-max-compound-selectors */
            mfrac > mrow + mrow:has(> mtext, > mi) {
              transform: translateY(0.25rem);
            }

          }

          math {
            font-family: var(---font-family-math);
          }

          mi {
            font-family: var(---font-family-symbol);
            font-style: italic;

            text-transform: none;
          }

          mn {
            font-family: var(---font-family-base);
          }

          mtext {
            font-family: var(---font-family-base);
          }

          mtable {
            display: table;
          }

          mtable mtable {
            display: inline-table;
          }

          mtd {
            padding: 0;
          }

          .layout > mtr > mtd {
            padding: 0.125rem;
            
            vertical-align: middle;          
          }

          .leftside {
            text-align: -webkit-right;
          }

          /* Different in Safari */
          @supports (-webkit-hyphens:none) {
            .leftside {
              text-align: right;
            }
          }

          .rightside {
            text-align: left;
          }

          /* Basic <var> w/modifiers */
          var {
            padding: 0 0.25rem;

            font-style: normal;

            border-radius: var(---border-radius);
          }

          /* Different bounding box in Safari */
          @supports (-webkit-hyphens:none) {
            var {
              padding: 0.25rem;
            }
          }

          /* Input wrapping <label> */
          decidables-spinner {
            --decidables-spinner-input-width: 4rem;

            display: inline-block;

            padding: 0.125rem 0.375rem 0.375rem;

            line-height: 1.5;
            vertical-align: middle;

            border-radius: var(---border-radius);
          }

          .sum-over {
            --decidables-spinner-input-width: 2rem;
          }
        `,
      ];
    }
  };
}
