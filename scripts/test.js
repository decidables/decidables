
// devDependencies
import {chai} from '@open-wc/testing';
import {sendMouse} from '@web/test-runner-commands';

// Local Dependencies
import chaiAlmost from './chai-almost.js';

chai.use(chaiAlmost());

// Re-export
export * from '@open-wc/testing';
export * from '@web/test-runner-commands';

export function getMiddleOfElement(element) {
  const {
    x,
    y,
    width,
    height,
  } = element.getBoundingClientRect();

  return {
    x: Math.floor(x + window.pageXOffset + width / 2),
    y: Math.floor(y + window.pageYOffset + height / 2),
  };
}

export async function mouseClickElement(element) {
  const {x, y} = getMiddleOfElement(element);

  sendMouse({type: 'click', position: [x, y]});
}

export async function mouseDragElement(element, dx, dy) {
  const {x, y} = getMiddleOfElement(element);

  sendMouse({type: 'move', position: [x, y]});
  sendMouse({type: 'down'});
  sendMouse({type: 'move', position: [x + dx, y + dy]});
  sendMouse({type: 'up'});
}
