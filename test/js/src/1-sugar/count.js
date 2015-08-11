
var itertools = require( "aureooms-js-itertools" ) ;

test( "count" , function ( ) {

	deepEqual( cardinality.count( "" ) , 0 ) ;
	deepEqual( cardinality.count( new Set( "" ) ) , 0 ) ;
	deepEqual( cardinality.count( itertools.iter( "" ) ) , 0 ) ;

	deepEqual( cardinality.count( "abc" ) , 3 ) ;
	deepEqual( cardinality.count( new Set( "abc" ) ) , 3 ) ;
	deepEqual( cardinality.count( itertools.iter( "abc" ) ) , 3 ) ;

} ) ;
