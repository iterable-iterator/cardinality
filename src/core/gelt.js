import gele from './gele.js';

/**
 * Gelt.
 *
 * @param {number} m
 * @param {number} n
 * @param {Iterable} iterable
 */
export default function gelt(m, n, iterable) {
	return gele(m, n - 1, iterable);
}
