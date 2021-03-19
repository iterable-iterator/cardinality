import le from './le.js';

/**
 * Gt.
 *
 * @param {number} n
 * @param {Iterable} iterable
 */
export default function gt(n, iterable) {
	return !le(n, iterable);
}
