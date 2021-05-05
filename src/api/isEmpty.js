import eq from '../core/eq.js';

/**
 * Returns whether input iterable is empty.
 *
 * @param {Iterable} iterable
 * @return {boolean}
 */
const isEmpty = (iterable) => eq(0, iterable);
export default isEmpty;
