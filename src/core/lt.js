import le from './le.js';

/**
 * Lt.
 *
 * @param {number} n
 * @param {Iterable} iterable
 */
export default function lt(n, iterable) {
	return le(n - 1, iterable);
}
