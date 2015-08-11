
var itertools = require( "aureooms-js-itertools" ) ;

test( "eq" , function ( ) {

	ok( cardinality.eq( 0 , "" ) ) ;
	ok( cardinality.eq( 0 , new Set( "" ) ) ) ;
	ok( cardinality.eq( 0 , itertools.iter( "" ) ) ) ;

	ok( cardinality.eq( 3 , "abc" ) ) ;
	ok( cardinality.eq( 3 , new Set( "abc" ) ) ) ;
	ok( cardinality.eq( 3 , itertools.iter( "abc" ) ) ) ;

	ok( !cardinality.eq( 2 , "abc" ) ) ;
	ok( !cardinality.eq( 2 , new Set( "abc" ) ) ) ;
	ok( !cardinality.eq( 2 , itertools.iter( "abc" ) ) ) ;

	ok( !cardinality.eq( 4 , "abc" ) ) ;
	ok( !cardinality.eq( 4 , new Set( "abc" ) ) ) ;
	ok( !cardinality.eq( 4 , itertools.iter( "abc" ) ) ) ;

	ok( !cardinality.eq( 3.01 , "abc" ) ) ;
	ok( !cardinality.eq( 3.01 , new Set( "abc" ) ) ) ;
	ok( !cardinality.eq( 3.01 , itertools.iter( "abc" ) ) ) ;

} ) ;
