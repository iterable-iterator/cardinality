import eq from './eq.js';

/**
 * Ne.
 *
 * @param {number} n
 * @param {Iterable} iterable
 */
const ne = (n, iterable) => !eq(n, iterable);
export default ne;
