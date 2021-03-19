import gt from './gt.js';

/**
 * Ge.
 *
 * @param {number} n
 * @param {Iterable} iterable
 */
export default function ge(n, iterable) {
	return gt(n - 1, iterable);
}
