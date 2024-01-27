
// devDependencies
import {chai} from '@open-wc/testing';
import {sendMouse} from '@web/test-runner-commands';

// Local Dependencies
import chaiAlmost from './chai-almost.js';

chai.use(chaiAlmost());

// Re-export
export * from '@open-wc/testing';
export * from '@web/test-runner-commands';

export function getPositionOfElement(element, location = 'middle', inset = 2) {
  const {
    x,
    y,
    width,
    height,
  } = element.getBoundingClientRect();

  let X = x;
  let Y = y;
  switch (location) {
    case 'top':
      X += width / 2;
      Y += inset;
      break;
    case 'bottom':
      X += width / 2;
      Y += height - inset;
      break;
    case 'left':
      X += inset;
      Y += height / 2;
      break;
    case 'right':
      X += width - inset;
      Y += height / 2;
      break;
    case 'top-left':
      X += inset;
      Y += inset;
      break;
    case 'top-right':
      X += width - inset;
      Y += inset;
      break;
    case 'bottom-right':
      X += width - inset;
      Y += height - inset;
      break;
    case 'bottom-left':
      X += inset;
      Y += height - inset;
      break;
    case 'middle':
    default:
      X += width / 2;
      Y += height / 2;
  }

  return {
    x: Math.floor(window.scrollX + X),
    y: Math.floor(window.scrollY + Y),
  };
}

export async function mouseClickElement(element, location = 'middle', inset = 2) {
  const {x, y} = getPositionOfElement(element, location, inset);

  sendMouse({type: 'click', position: [x, y]});
}

export async function mouseDragElement(element, dx, dy, location = 'middle', inset = 2) {
  const {x, y} = getPositionOfElement(element, location, inset);

  await sendMouse({type: 'move', position: [x, y]});
  await sendMouse({type: 'down'});
  await sendMouse({type: 'move', position: [x + dx, y + dy]});
  sendMouse({type: 'up'});
}
