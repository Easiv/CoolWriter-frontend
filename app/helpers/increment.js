import { helper } from '@ember/component/helper';

export function increment(num) {
  return parseInt(num) + 1;
}

export default helper(increment);
