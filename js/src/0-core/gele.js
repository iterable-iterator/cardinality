
const gele = function ( m , n , iterable ) {

	if ( n < m ) return false ;

	if ( n < 0 ) return false ;

	if ( m <= 0 ) return le( n , iterable ) ;

	if ( n === Infinity ) return ge( m , iterable ) ;

	if ( iterable.length !== undefined ) return m <= iterable.length && iterable.length <= n ;

	if ( iterable.size !== undefined ) return m <= iterable.size && iterable.size <= n ;

	const it = iterable[Symbol.iterator]( ) ;

	n -= m ;

	for ( ; m > 0 ; --m ) if ( it.next( ).done ) return false ;
	for ( ; n > 0 ; --n ) if ( it.next( ).done ) return true ;

	return it.next( ).done ;

} ;

exports.gele = gele ;