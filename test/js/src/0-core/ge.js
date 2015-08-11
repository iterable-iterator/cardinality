
var itertools = require( "aureooms-js-itertools" ) ;

test( "ge" , function ( ) {

	ok( cardinality.ge( 1000 , itertools.repeat( "A" ) ) ) ;

	ok( cardinality.ge( -1 , "" ) ) ;
	ok( cardinality.ge( -1 , new Set( "" ) ) ) ;
	ok( cardinality.ge( -1 , itertools.iter( "" ) ) ) ;

	ok( cardinality.ge( 0 , "" ) ) ;
	ok( cardinality.ge( 0 , new Set( "" ) ) ) ;
	ok( cardinality.ge( 0 , itertools.iter( "" ) ) ) ;

	ok( !cardinality.ge( 1 , "" ) ) ;
	ok( !cardinality.ge( 1 , new Set( "" ) ) ) ;
	ok( !cardinality.ge( 1 , itertools.iter( "" ) ) ) ;

	ok( cardinality.ge( -Infinity , "abc" ) ) ;
	ok( cardinality.ge( -Infinity , new Set( "abc" ) ) ) ;
	ok( cardinality.ge( -Infinity , itertools.iter( "abc" ) ) ) ;

	ok( cardinality.ge( 0 , "abc" ) ) ;
	ok( cardinality.ge( 0 , new Set( "abc" ) ) ) ;
	ok( cardinality.ge( 0 , itertools.iter( "abc" ) ) ) ;

	ok( cardinality.ge( 1 , "abc" ) ) ;
	ok( cardinality.ge( 1 , new Set( "abc" ) ) ) ;
	ok( cardinality.ge( 1 , itertools.iter( "abc" ) ) ) ;

	ok( cardinality.ge( 3 , "abc" ) ) ;
	ok( cardinality.ge( 3 , new Set( "abc" ) ) ) ;
	ok( cardinality.ge( 3 , itertools.iter( "abc" ) ) ) ;

	ok( !cardinality.ge( 4 , "abc" ) ) ;
	ok( !cardinality.ge( 4 , new Set( "abc" ) ) ) ;
	ok( !cardinality.ge( 4 , itertools.iter( "abc" ) ) ) ;

	ok( !cardinality.ge( Infinity , "abc" ) ) ;
	ok( !cardinality.ge( Infinity , new Set( "abc" ) ) ) ;
	ok( !cardinality.ge( Infinity , itertools.iter( "abc" ) ) ) ;

} ) ;
