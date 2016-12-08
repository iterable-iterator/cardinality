
export default function len ( iterable ) {

	if ( iterable.length !== undefined ) return iterable.length ;

	if ( iterable.size !== undefined ) return iterable.size ;

	const it = iterable[Symbol.iterator]( ) ;

	let n = 0 ;

	while ( !it.next( ).done ) ++n ;

	return n ;

}


