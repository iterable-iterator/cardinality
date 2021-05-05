import le from './le.js';

/**
 * Gt.
 *
 * @param {number} n
 * @param {Iterable} iterable
 */
const gt = (n, iterable) => !le(n, iterable);
export default gt;
