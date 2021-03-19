import le from './le' ;

/**
 * lt.
 *
 * @param {number} n
 * @param {Iterable} iterable
 */
export default function lt ( n , iterable ) {

	return le( n - 1 , iterable ) ;

}
