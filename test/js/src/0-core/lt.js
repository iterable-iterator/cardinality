
var itertools = require( "aureooms-js-itertools" ) ;

test( "lt" , function ( ) {

	ok( !cardinality.lt( 1000 , itertools.repeat( "A" ) ) ) ;

	ok( !cardinality.lt( -1 , "" ) ) ;
	ok( !cardinality.lt( -1 , new Set( "" ) ) ) ;
	ok( !cardinality.lt( -1 , itertools.iter( "" ) ) ) ;

	ok( !cardinality.lt( 0 , "" ) ) ;
	ok( !cardinality.lt( 0 , new Set( "" ) ) ) ;
	ok( !cardinality.lt( 0 , itertools.iter( "" ) ) ) ;

	ok( cardinality.lt( 1 , "" ) ) ;
	ok( cardinality.lt( 1 , new Set( "" ) ) ) ;
	ok( cardinality.lt( 1 , itertools.iter( "" ) ) ) ;

	ok( !cardinality.lt( -Infinity , "abc" ) ) ;
	ok( !cardinality.lt( -Infinity , new Set( "abc" ) ) ) ;
	ok( !cardinality.lt( -Infinity , itertools.iter( "abc" ) ) ) ;

	ok( !cardinality.lt( 0 , "abc" ) ) ;
	ok( !cardinality.lt( 0 , new Set( "abc" ) ) ) ;
	ok( !cardinality.lt( 0 , itertools.iter( "abc" ) ) ) ;

	ok( !cardinality.lt( 1 , "abc" ) ) ;
	ok( !cardinality.lt( 1 , new Set( "abc" ) ) ) ;
	ok( !cardinality.lt( 1 , itertools.iter( "abc" ) ) ) ;

	ok( !cardinality.lt( 3 , "abc" ) ) ;
	ok( !cardinality.lt( 3 , new Set( "abc" ) ) ) ;
	ok( !cardinality.lt( 3 , itertools.iter( "abc" ) ) ) ;

	ok( cardinality.lt( 4 , "abc" ) ) ;
	ok( cardinality.lt( 4 , new Set( "abc" ) ) ) ;
	ok( cardinality.lt( 4 , itertools.iter( "abc" ) ) ) ;

	ok( cardinality.lt( Infinity , "abc" ) ) ;
	ok( cardinality.lt( Infinity , new Set( "abc" ) ) ) ;
	ok( cardinality.lt( Infinity , itertools.iter( "abc" ) ) ) ;

} ) ;
