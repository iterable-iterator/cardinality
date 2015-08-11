
var itertools = require( "aureooms-js-itertools" ) ;

test( "le" , function ( ) {

	ok( !cardinality.le( -1 , "" ) ) ;
	ok( !cardinality.le( -1 , new Set( "" ) ) ) ;
	ok( !cardinality.le( -1 , itertools.iter( "" ) ) ) ;

	ok( cardinality.le( 0 , "" ) ) ;
	ok( cardinality.le( 0 , new Set( "" ) ) ) ;
	ok( cardinality.le( 0 , itertools.iter( "" ) ) ) ;

	ok( cardinality.le( 1 , "" ) ) ;
	ok( cardinality.le( 1 , new Set( "" ) ) ) ;
	ok( cardinality.le( 1 , itertools.iter( "" ) ) ) ;

	ok( !cardinality.le( -Infinity , "abc" ) ) ;
	ok( !cardinality.le( -Infinity , new Set( "abc" ) ) ) ;
	ok( !cardinality.le( -Infinity , itertools.iter( "abc" ) ) ) ;

	ok( !cardinality.le( 0 , "abc" ) ) ;
	ok( !cardinality.le( 0 , new Set( "abc" ) ) ) ;
	ok( !cardinality.le( 0 , itertools.iter( "abc" ) ) ) ;

	ok( !cardinality.le( 1 , "abc" ) ) ;
	ok( !cardinality.le( 1 , new Set( "abc" ) ) ) ;
	ok( !cardinality.le( 1 , itertools.iter( "abc" ) ) ) ;

	ok( cardinality.le( 3 , "abc" ) ) ;
	ok( cardinality.le( 3 , new Set( "abc" ) ) ) ;
	ok( cardinality.le( 3 , itertools.iter( "abc" ) ) ) ;

	ok( cardinality.le( 4 , "abc" ) ) ;
	ok( cardinality.le( 4 , new Set( "abc" ) ) ) ;
	ok( cardinality.le( 4 , itertools.iter( "abc" ) ) ) ;

	ok( cardinality.le( Infinity , "abc" ) ) ;
	ok( cardinality.le( Infinity , new Set( "abc" ) ) ) ;
	ok( cardinality.le( Infinity , itertools.iter( "abc" ) ) ) ;

} ) ;
