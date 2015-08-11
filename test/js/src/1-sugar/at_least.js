
var itertools = require( "aureooms-js-itertools" ) ;

test( "at_least" , function ( ) {

	ok( cardinality.at_least( 1000 , itertools.repeat( "A" ) ) ) ;

	ok( cardinality.at_least( -1 , "" ) ) ;
	ok( cardinality.at_least( -1 , new Set( "" ) ) ) ;
	ok( cardinality.at_least( -1 , itertools.iter( "" ) ) ) ;

	ok( cardinality.at_least( 0 , "" ) ) ;
	ok( cardinality.at_least( 0 , new Set( "" ) ) ) ;
	ok( cardinality.at_least( 0 , itertools.iter( "" ) ) ) ;

	ok( !cardinality.at_least( 1 , "" ) ) ;
	ok( !cardinality.at_least( 1 , new Set( "" ) ) ) ;
	ok( !cardinality.at_least( 1 , itertools.iter( "" ) ) ) ;

	ok( cardinality.at_least( -Infinity , "abc" ) ) ;
	ok( cardinality.at_least( -Infinity , new Set( "abc" ) ) ) ;
	ok( cardinality.at_least( -Infinity , itertools.iter( "abc" ) ) ) ;

	ok( cardinality.at_least( 0 , "abc" ) ) ;
	ok( cardinality.at_least( 0 , new Set( "abc" ) ) ) ;
	ok( cardinality.at_least( 0 , itertools.iter( "abc" ) ) ) ;

	ok( cardinality.at_least( 1 , "abc" ) ) ;
	ok( cardinality.at_least( 1 , new Set( "abc" ) ) ) ;
	ok( cardinality.at_least( 1 , itertools.iter( "abc" ) ) ) ;

	ok( cardinality.at_least( 3 , "abc" ) ) ;
	ok( cardinality.at_least( 3 , new Set( "abc" ) ) ) ;
	ok( cardinality.at_least( 3 , itertools.iter( "abc" ) ) ) ;

	ok( !cardinality.at_least( 4 , "abc" ) ) ;
	ok( !cardinality.at_least( 4 , new Set( "abc" ) ) ) ;
	ok( !cardinality.at_least( 4 , itertools.iter( "abc" ) ) ) ;

	ok( !cardinality.at_least( Infinity , "abc" ) ) ;
	ok( !cardinality.at_least( Infinity , new Set( "abc" ) ) ) ;
	ok( !cardinality.at_least( Infinity , itertools.iter( "abc" ) ) ) ;

} ) ;
