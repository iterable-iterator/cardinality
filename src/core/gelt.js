import gele from './gele.js';

/**
 * Gelt.
 *
 * @param {number} m
 * @param {number} n
 * @param {Iterable} iterable
 */
const gelt = (m, n, iterable) => gele(m, n - 1, iterable);
export default gelt;
