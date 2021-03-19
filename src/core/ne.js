import eq from './eq' ;

/**
 * ne.
 *
 * @param {number} n
 * @param {Iterable} iterable
 */
export default function ne ( n , iterable ) {

	return !eq( n , iterable ) ;

}
