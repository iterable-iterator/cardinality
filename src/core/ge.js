import gt from "./gt.js" ;

/**
 * ge.
 *
 * @param {number} n
 * @param {Iterable} iterable
 */
export default function ge ( n , iterable ) {

	return gt( n - 1 , iterable ) ;

}
