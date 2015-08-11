
var itertools = require( "aureooms-js-itertools" ) ;

test( "at_most" , function ( ) {

	ok( !cardinality.at_most( 1000 , itertools.repeat( "A" ) ) ) ;

	ok( !cardinality.at_most( -1 , "" ) ) ;
	ok( !cardinality.at_most( -1 , new Set( "" ) ) ) ;
	ok( !cardinality.at_most( -1 , itertools.iter( "" ) ) ) ;

	ok( cardinality.at_most( 0 , "" ) ) ;
	ok( cardinality.at_most( 0 , new Set( "" ) ) ) ;
	ok( cardinality.at_most( 0 , itertools.iter( "" ) ) ) ;

	ok( cardinality.at_most( 1 , "" ) ) ;
	ok( cardinality.at_most( 1 , new Set( "" ) ) ) ;
	ok( cardinality.at_most( 1 , itertools.iter( "" ) ) ) ;

	ok( !cardinality.at_most( -Infinity , "abc" ) ) ;
	ok( !cardinality.at_most( -Infinity , new Set( "abc" ) ) ) ;
	ok( !cardinality.at_most( -Infinity , itertools.iter( "abc" ) ) ) ;

	ok( !cardinality.at_most( 0 , "abc" ) ) ;
	ok( !cardinality.at_most( 0 , new Set( "abc" ) ) ) ;
	ok( !cardinality.at_most( 0 , itertools.iter( "abc" ) ) ) ;

	ok( !cardinality.at_most( 1 , "abc" ) ) ;
	ok( !cardinality.at_most( 1 , new Set( "abc" ) ) ) ;
	ok( !cardinality.at_most( 1 , itertools.iter( "abc" ) ) ) ;

	ok( cardinality.at_most( 3 , "abc" ) ) ;
	ok( cardinality.at_most( 3 , new Set( "abc" ) ) ) ;
	ok( cardinality.at_most( 3 , itertools.iter( "abc" ) ) ) ;

	ok( cardinality.at_most( 4 , "abc" ) ) ;
	ok( cardinality.at_most( 4 , new Set( "abc" ) ) ) ;
	ok( cardinality.at_most( 4 , itertools.iter( "abc" ) ) ) ;

	ok( cardinality.at_most( Infinity , "abc" ) ) ;
	ok( cardinality.at_most( Infinity , new Set( "abc" ) ) ) ;
	ok( cardinality.at_most( Infinity , itertools.iter( "abc" ) ) ) ;

} ) ;
