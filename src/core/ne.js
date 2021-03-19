import eq from './eq.js';

/**
 * Ne.
 *
 * @param {number} n
 * @param {Iterable} iterable
 */
export default function ne(n, iterable) {
	return !eq(n, iterable);
}
