
var itertools = require( "aureooms-js-itertools" ) ;

test( "gt" , function ( ) {

	ok( cardinality.gt( -1 , "" ) ) ;
	ok( cardinality.gt( -1 , new Set( "" ) ) ) ;
	ok( cardinality.gt( -1 , itertools.iter( "" ) ) ) ;

	ok( !cardinality.gt( 0 , "" ) ) ;
	ok( !cardinality.gt( 0 , new Set( "" ) ) ) ;
	ok( !cardinality.gt( 0 , itertools.iter( "" ) ) ) ;

	ok( !cardinality.gt( 1 , "" ) ) ;
	ok( !cardinality.gt( 1 , new Set( "" ) ) ) ;
	ok( !cardinality.gt( 1 , itertools.iter( "" ) ) ) ;

	ok( cardinality.gt( -Infinity , "abc" ) ) ;
	ok( cardinality.gt( -Infinity , new Set( "abc" ) ) ) ;
	ok( cardinality.gt( -Infinity , itertools.iter( "abc" ) ) ) ;

	ok( cardinality.gt( 0 , "abc" ) ) ;
	ok( cardinality.gt( 0 , new Set( "abc" ) ) ) ;
	ok( cardinality.gt( 0 , itertools.iter( "abc" ) ) ) ;

	ok( cardinality.gt( 1 , "abc" ) ) ;
	ok( cardinality.gt( 1 , new Set( "abc" ) ) ) ;
	ok( cardinality.gt( 1 , itertools.iter( "abc" ) ) ) ;

	ok( !cardinality.gt( 3 , "abc" ) ) ;
	ok( !cardinality.gt( 3 , new Set( "abc" ) ) ) ;
	ok( !cardinality.gt( 3 , itertools.iter( "abc" ) ) ) ;

	ok( !cardinality.gt( 4 , "abc" ) ) ;
	ok( !cardinality.gt( 4 , new Set( "abc" ) ) ) ;
	ok( !cardinality.gt( 4 , itertools.iter( "abc" ) ) ) ;

	ok( !cardinality.gt( Infinity , "abc" ) ) ;
	ok( !cardinality.gt( Infinity , new Set( "abc" ) ) ) ;
	ok( !cardinality.gt( Infinity , itertools.iter( "abc" ) ) ) ;

} ) ;
