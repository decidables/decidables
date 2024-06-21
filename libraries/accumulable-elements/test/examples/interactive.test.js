import {
  expect,
  fixture,
  html,
  oneEvent,
  sendKeys,
  waitUntil,
} from '../../../../scripts/test-utility';

// import '../../src/components/htd-calculation';
// import '../../src/components/htd-curves';
// import '../../src/components/itc-choice';
import '../../src/examples/interactive';

describe('ddm-example-interactive', () => {
  // it('has a shadowDom', async () => {
  //   const el = await fixture(html`
  //     <htd-example-interactive a1="5" d1="20" a2="30" d2="350" k="0.01">
  //       <itc-choice interactive></itc-choice>
  //       <htd-curves interactive></htd-curves>
  //       <htd-calculation numeric interactive></htd-calculation>
  //     </htd-example-interactive>
  //   `);
  //   expect(el).shadowDom.to.equal(`
  //     <div class="holder">
  //       <div class="body">
  //         <slot>
  //           Empty!
  //         </slot>
  //       </div>
  //     </div>
  //   `);
  // });

  // it('has a lightDom', async () => {
  //   const el = await fixture(html`
  //     <htd-example-interactive a1="5" d1="20" a2="30" d2="350" k="0.01">
  //       <itc-choice interactive></itc-choice>
  //       <htd-curves interactive></htd-curves>
  //       <htd-calculation numeric interactive></htd-calculation>
  //     </htd-example-interactive>
  //   `);
  //   expect(el).lightDom.to.equal(`
  //     <itc-choice class="keyboard" interactive state="choice" amount-ss="10" delay-ss="1" amount-ll="50" delay-ll="40"></itc-choice>
  //     <htd-curves class="keyboard" interactive label="s" k="0.01" class="" amount="10" delay="1"></htd-curves>
  //     <htd-calculation class="keyboard" numeric interactive amount-ss="10" delay-ss="1" amount-ll="50" delay-ll="40" k="0.01"></htd-calculation>
  //   `);
  // });

  // it('connects the components properly');

  // it('can propagate an itc-choice interaction', async () => {
  //   const el = await fixture(html`
  //     <htd-example-interactive a1="5" d1="20" a2="30" d2="350" k="0.01">
  //       <itc-choice interactive></itc-choice>
  //       <htd-curves interactive></htd-curves>
  //       <htd-calculation numeric interactive></htd-calculation>
  //     </htd-example-interactive>
  //   `);
  //   // Action
  //   const target = el.querySelector('itc-choice')
  //     .shadowRoot.querySelector('itc-option')
  //     .shadowRoot.querySelector('decidables-spinner.amount')
  //     .shadowRoot.querySelector('input');
  //   target.focus();
  //   target.select();
  //   setTimeout(() => { sendKeys({type: '9'}); });
  //   await oneEvent(el, 'itc-choice-change');
  //   // Check "after" state
  //   expect(el.itcChoice.as).to.equal(9);
  //   expect(el.htdCurves.a).to.equal(9);
  //   expect(el.htdCalculation.as).to.equal(9);
  // });

  // it('can propagate a htd-curves interaction', async () => {
  //   const el = await fixture(html`
  //     <htd-example-interactive a1="5" d1="20" a2="30" d2="350" k="0.01">
  //       <itc-choice interactive></itc-choice>
  //       <htd-curves interactive></htd-curves>
  //       <htd-calculation numeric interactive></htd-calculation>
  //     </htd-example-interactive>
  //   `);
  //   await waitUntil(
  //     () => { return el.querySelector('htd-curves').shadowRoot.querySelector('.bar.interactive'); },
  //     'Element did not render children',
  //   );
  //   // Action
  //   const target = el.querySelector('htd-curves').shadowRoot.querySelector('.bar.interactive');
  //   target.focus();
  //   setTimeout(() => { sendKeys({press: 'ArrowLeft'}); });
  //   await oneEvent(el, 'htd-curves-change');
  //   // Check "after" state
  //   expect(el.itcChoice.ds).to.be.below(20);
  //   expect(el.htdCurves.d).to.equal(el.itcChoice.ds);
  //   expect(el.htdCalculation.ds).to.equal(el.itcChoice.ds);
  // });

  // it('can propagate a htd-calculation interaction', async () => {
  //   const el = await fixture(html`
  //     <htd-example-interactive a1="5" d1="20" a2="30" d2="350" k="0.01">
  //       <itc-choice interactive></itc-choice>
  //       <htd-curves interactive></htd-curves>
  //       <htd-calculation numeric interactive></htd-calculation>
  //     </htd-example-interactive>
  //   `);
  //   // Action
  //   const target = el.querySelector('htd-calculation').shadowRoot.querySelector('decidables-spinner.al').shadowRoot.querySelector('input');
  //   target.focus();
  //   target.select();
  //   setTimeout(() => { sendKeys({type: '8'}); });
  //   await oneEvent(el, 'htd-calculation-change');
  //   // Check "after" state
  //   expect(el.itcChoice.al).to.equal(8);
  //   expect(el.htdCurves.options[1].a).to.equal(8);
  //   expect(el.htdCalculation.al).to.equal(8);
  // });
});
