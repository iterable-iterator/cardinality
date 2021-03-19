
/**
 * eq.
 *
 * @param {number} n
 * @param {Iterable} iterable
 */
export default function eq ( n , iterable ) {

	if ( n < 0 || !Number.isInteger(n) ) return false ;

	if ( iterable.length !== undefined ) return iterable.length === n ;

	if ( iterable.size !== undefined ) return iterable.size === n ;

	const it = iterable[Symbol.iterator]( ) ;

	for ( ; n > 0 ; --n ) if ( it.next( ).done ) return false ;

	return it.next( ).done ;

}


