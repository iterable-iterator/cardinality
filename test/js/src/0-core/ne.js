
var itertools = require( "aureooms-js-itertools" ) ;

test( "ne" , function ( ) {

	ok( !cardinality.ne( 0 , "" ) ) ;
	ok( !cardinality.ne( 0 , new Set( "" ) ) ) ;
	ok( !cardinality.ne( 0 , itertools.iter( "" ) ) ) ;

	ok( !cardinality.ne( 3 , "abc" ) ) ;
	ok( !cardinality.ne( 3 , new Set( "abc" ) ) ) ;
	ok( !cardinality.ne( 3 , itertools.iter( "abc" ) ) ) ;

	ok( cardinality.ne( 2 , "abc" ) ) ;
	ok( cardinality.ne( 2 , new Set( "abc" ) ) ) ;
	ok( cardinality.ne( 2 , itertools.iter( "abc" ) ) ) ;

	ok( cardinality.ne( 4 , "abc" ) ) ;
	ok( cardinality.ne( 4 , new Set( "abc" ) ) ) ;
	ok( cardinality.ne( 4 , itertools.iter( "abc" ) ) ) ;

	ok( cardinality.ne( 3.01 , "abc" ) ) ;
	ok( cardinality.ne( 3.01 , new Set( "abc" ) ) ) ;
	ok( cardinality.ne( 3.01 , itertools.iter( "abc" ) ) ) ;

} ) ;
