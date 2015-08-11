
var itertools = require( "aureooms-js-itertools" ) ;

test( "empty" , function ( ) {

	ok( cardinality.empty( "" ) ) ;
	ok( cardinality.empty( new Set( "" ) ) ) ;
	ok( cardinality.empty( itertools.iter( "" ) ) ) ;

	ok( !cardinality.empty( "abc" ) ) ;
	ok( !cardinality.empty( new Set( "abc" ) ) ) ;
	ok( !cardinality.empty( itertools.iter( "abc" ) ) ) ;

} ) ;
