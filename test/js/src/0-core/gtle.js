
var itertools = require( "aureooms-js-itertools" ) ;

test( "gtle" , function ( ) {

	ok( cardinality.gtle( -1 , 7 , "" ) ) ;
	ok( cardinality.gtle( -1 , 7 , new Set( "" ) ) ) ;
	ok( cardinality.gtle( -1 , 7 , itertools.iter( "" ) ) ) ;

	ok( !cardinality.gtle( 0 , 7 , "" ) ) ;
	ok( !cardinality.gtle( 0 , 7 , new Set( "" ) ) ) ;
	ok( !cardinality.gtle( 0 , 7 , itertools.iter( "" ) ) ) ;

	ok( !cardinality.gtle( 1 , 7 , "" ) ) ;
	ok( !cardinality.gtle( 1 , 7 , new Set( "" ) ) ) ;
	ok( !cardinality.gtle( 1 , 7 , itertools.iter( "" ) ) ) ;

	ok( cardinality.gtle( -Infinity , 7 , "abc" ) ) ;
	ok( cardinality.gtle( -Infinity , 7 , new Set( "abc" ) ) ) ;
	ok( cardinality.gtle( -Infinity , 7 , itertools.iter( "abc" ) ) ) ;

	ok( cardinality.gtle( 0 , 7 , "abc" ) ) ;
	ok( cardinality.gtle( 0 , 7 , new Set( "abc" ) ) ) ;
	ok( cardinality.gtle( 0 , 7 , itertools.iter( "abc" ) ) ) ;

	ok( cardinality.gtle( 1 , 7 , "abc" ) ) ;
	ok( cardinality.gtle( 1 , 7 , new Set( "abc" ) ) ) ;
	ok( cardinality.gtle( 1 , 7 , itertools.iter( "abc" ) ) ) ;

	ok( !cardinality.gtle( 3 , 7 , "abc" ) ) ;
	ok( !cardinality.gtle( 3 , 7 , new Set( "abc" ) ) ) ;
	ok( !cardinality.gtle( 3 , 7 , itertools.iter( "abc" ) ) ) ;

	ok( !cardinality.gtle( 4 , 7 , "abc" ) ) ;
	ok( !cardinality.gtle( 4 , 7 , new Set( "abc" ) ) ) ;
	ok( !cardinality.gtle( 4 , 7 , itertools.iter( "abc" ) ) ) ;

	ok( !cardinality.gtle( Infinity , 7 , "abc" ) ) ;
	ok( !cardinality.gtle( Infinity , 7 , new Set( "abc" ) ) ) ;
	ok( !cardinality.gtle( Infinity , 7 , itertools.iter( "abc" ) ) ) ;

	ok( cardinality.gtle( -1 , 3 , "" ) ) ;
	ok( cardinality.gtle( -1 , 3 , new Set( "" ) ) ) ;
	ok( cardinality.gtle( -1 , 3 , itertools.iter( "" ) ) ) ;

	ok( !cardinality.gtle( 0 , 3 , "" ) ) ;
	ok( !cardinality.gtle( 0 , 3 , new Set( "" ) ) ) ;
	ok( !cardinality.gtle( 0 , 3 , itertools.iter( "" ) ) ) ;

	ok( !cardinality.gtle( 1 , 3 , "" ) ) ;
	ok( !cardinality.gtle( 1 , 3 , new Set( "" ) ) ) ;
	ok( !cardinality.gtle( 1 , 3 , itertools.iter( "" ) ) ) ;

	ok( cardinality.gtle( -Infinity , 3 , "abc" ) ) ;
	ok( cardinality.gtle( -Infinity , 3 , new Set( "abc" ) ) ) ;
	ok( cardinality.gtle( -Infinity , 3 , itertools.iter( "abc" ) ) ) ;

	ok( cardinality.gtle( 0 , 3 , "abc" ) ) ;
	ok( cardinality.gtle( 0 , 3 , new Set( "abc" ) ) ) ;
	ok( cardinality.gtle( 0 , 3 , itertools.iter( "abc" ) ) ) ;

	ok( cardinality.gtle( 1 , 3 , "abc" ) ) ;
	ok( cardinality.gtle( 1 , 3 , new Set( "abc" ) ) ) ;
	ok( cardinality.gtle( 1 , 3 , itertools.iter( "abc" ) ) ) ;

	ok( !cardinality.gtle( 3 , 3 , "abc" ) ) ;
	ok( !cardinality.gtle( 3 , 3 , new Set( "abc" ) ) ) ;
	ok( !cardinality.gtle( 3 , 3 , itertools.iter( "abc" ) ) ) ;

	ok( !cardinality.gtle( 4 , 3 , "abc" ) ) ;
	ok( !cardinality.gtle( 4 , 3 , new Set( "abc" ) ) ) ;
	ok( !cardinality.gtle( 4 , 3 , itertools.iter( "abc" ) ) ) ;

	ok( !cardinality.gtle( Infinity , 3 , "abc" ) ) ;
	ok( !cardinality.gtle( Infinity , 3 , new Set( "abc" ) ) ) ;
	ok( !cardinality.gtle( Infinity , 3 , itertools.iter( "abc" ) ) ) ;

} ) ;

test( "gtle (base cases)" , function ( ) {

	ok( cardinality.gtle( -1 , Infinity , "" ) ) ;
	ok( cardinality.gtle( -1 , Infinity , new Set( "" ) ) ) ;
	ok( cardinality.gtle( -1 , Infinity , itertools.iter( "" ) ) ) ;

	ok( !cardinality.gtle( 0 , Infinity , "" ) ) ;
	ok( !cardinality.gtle( 0 , Infinity , new Set( "" ) ) ) ;
	ok( !cardinality.gtle( 0 , Infinity , itertools.iter( "" ) ) ) ;

	ok( !cardinality.gtle( 1 , Infinity , "" ) ) ;
	ok( !cardinality.gtle( 1 , Infinity , new Set( "" ) ) ) ;
	ok( !cardinality.gtle( 1 , Infinity , itertools.iter( "" ) ) ) ;

	ok( cardinality.gtle( -Infinity , Infinity , "abc" ) ) ;
	ok( cardinality.gtle( -Infinity , Infinity , new Set( "abc" ) ) ) ;
	ok( cardinality.gtle( -Infinity , Infinity , itertools.iter( "abc" ) ) ) ;

	ok( cardinality.gtle( 0 , Infinity , "abc" ) ) ;
	ok( cardinality.gtle( 0 , Infinity , new Set( "abc" ) ) ) ;
	ok( cardinality.gtle( 0 , Infinity , itertools.iter( "abc" ) ) ) ;

	ok( cardinality.gtle( 1 , Infinity , "abc" ) ) ;
	ok( cardinality.gtle( 1 , Infinity , new Set( "abc" ) ) ) ;
	ok( cardinality.gtle( 1 , Infinity , itertools.iter( "abc" ) ) ) ;

	ok( !cardinality.gtle( 3 , Infinity , "abc" ) ) ;
	ok( !cardinality.gtle( 3 , Infinity , new Set( "abc" ) ) ) ;
	ok( !cardinality.gtle( 3 , Infinity , itertools.iter( "abc" ) ) ) ;

	ok( !cardinality.gtle( 4 , Infinity , "abc" ) ) ;
	ok( !cardinality.gtle( 4 , Infinity , new Set( "abc" ) ) ) ;
	ok( !cardinality.gtle( 4 , Infinity , itertools.iter( "abc" ) ) ) ;

	ok( !cardinality.gtle( Infinity , Infinity , "abc" ) ) ;
	ok( !cardinality.gtle( Infinity , Infinity , new Set( "abc" ) ) ) ;
	ok( !cardinality.gtle( Infinity , Infinity , itertools.iter( "abc" ) ) ) ;

	ok( !cardinality.gtle( 0 , -1 , "" ) ) ;
	ok( !cardinality.gtle( 0 , -1 , new Set( "" ) ) ) ;
	ok( !cardinality.gtle( 0 , -1 , itertools.iter( "" ) ) ) ;

	ok( !cardinality.gtle( 0 , 0 , "" ) ) ;
	ok( !cardinality.gtle( 0 , 0 , new Set( "" ) ) ) ;
	ok( !cardinality.gtle( 0 , 0 , itertools.iter( "" ) ) ) ;

	ok( !cardinality.gtle( 0 , 1 , "" ) ) ;
	ok( !cardinality.gtle( 0 , 1 , new Set( "" ) ) ) ;
	ok( !cardinality.gtle( 0 , 1 , itertools.iter( "" ) ) ) ;

	ok( !cardinality.gtle( 0 , -Infinity , "abc" ) ) ;
	ok( !cardinality.gtle( 0 , -Infinity , new Set( "abc" ) ) ) ;
	ok( !cardinality.gtle( 0 , -Infinity , itertools.iter( "abc" ) ) ) ;

	ok( !cardinality.gtle( 0 , 0 , "abc" ) ) ;
	ok( !cardinality.gtle( 0 , 0 , new Set( "abc" ) ) ) ;
	ok( !cardinality.gtle( 0 , 0 , itertools.iter( "abc" ) ) ) ;

	ok( !cardinality.gtle( 0 , 1 , "abc" ) ) ;
	ok( !cardinality.gtle( 0 , 1 , new Set( "abc" ) ) ) ;
	ok( !cardinality.gtle( 0 , 1 , itertools.iter( "abc" ) ) ) ;

	ok( cardinality.gtle( 0 , 3 , "abc" ) ) ;
	ok( cardinality.gtle( 0 , 3 , new Set( "abc" ) ) ) ;
	ok( cardinality.gtle( 0 , 3 , itertools.iter( "abc" ) ) ) ;

	ok( cardinality.gtle( 0 , 4 , "abc" ) ) ;
	ok( cardinality.gtle( 0 , 4 , new Set( "abc" ) ) ) ;
	ok( cardinality.gtle( 0 , 4 , itertools.iter( "abc" ) ) ) ;

	ok( cardinality.gtle( 0 , Infinity , "abc" ) ) ;
	ok( cardinality.gtle( 0 , Infinity , new Set( "abc" ) ) ) ;
	ok( cardinality.gtle( 0 , Infinity , itertools.iter( "abc" ) ) ) ;

	ok( !cardinality.gtle( -Infinity , -1 , "" ) ) ;
	ok( !cardinality.gtle( -Infinity , -1 , new Set( "" ) ) ) ;
	ok( !cardinality.gtle( -Infinity , -1 , itertools.iter( "" ) ) ) ;

	ok( cardinality.gtle( -Infinity , 0 , "" ) ) ;
	ok( cardinality.gtle( -Infinity , 0 , new Set( "" ) ) ) ;
	ok( cardinality.gtle( -Infinity , 0 , itertools.iter( "" ) ) ) ;

	ok( cardinality.gtle( -Infinity , 1 , "" ) ) ;
	ok( cardinality.gtle( -Infinity , 1 , new Set( "" ) ) ) ;
	ok( cardinality.gtle( -Infinity , 1 , itertools.iter( "" ) ) ) ;

	ok( !cardinality.gtle( -Infinity , -Infinity , "abc" ) ) ;
	ok( !cardinality.gtle( -Infinity , -Infinity , new Set( "abc" ) ) ) ;
	ok( !cardinality.gtle( -Infinity , -Infinity , itertools.iter( "abc" ) ) ) ;

	ok( !cardinality.gtle( -Infinity , 0 , "abc" ) ) ;
	ok( !cardinality.gtle( -Infinity , 0 , new Set( "abc" ) ) ) ;
	ok( !cardinality.gtle( -Infinity , 0 , itertools.iter( "abc" ) ) ) ;

	ok( !cardinality.gtle( -Infinity , 1 , "abc" ) ) ;
	ok( !cardinality.gtle( -Infinity , 1 , new Set( "abc" ) ) ) ;
	ok( !cardinality.gtle( -Infinity , 1 , itertools.iter( "abc" ) ) ) ;

	ok( cardinality.gtle( -Infinity , 3 , "abc" ) ) ;
	ok( cardinality.gtle( -Infinity , 3 , new Set( "abc" ) ) ) ;
	ok( cardinality.gtle( -Infinity , 3 , itertools.iter( "abc" ) ) ) ;

	ok( cardinality.gtle( -Infinity , 4 , "abc" ) ) ;
	ok( cardinality.gtle( -Infinity , 4 , new Set( "abc" ) ) ) ;
	ok( cardinality.gtle( -Infinity , 4 , itertools.iter( "abc" ) ) ) ;

	ok( cardinality.gtle( -Infinity , Infinity , "abc" ) ) ;
	ok( cardinality.gtle( -Infinity , Infinity , new Set( "abc" ) ) ) ;
	ok( cardinality.gtle( -Infinity , Infinity , itertools.iter( "abc" ) ) ) ;

	ok( cardinality.gtle( -1 , 2 , "" ) ) ;
	ok( cardinality.gtle( -1 , 2 , new Set( "" ) ) ) ;
	ok( cardinality.gtle( -1 , 2 , itertools.iter( "" ) ) ) ;

	ok( !cardinality.gtle( 0 , 2 , "" ) ) ;
	ok( !cardinality.gtle( 0 , 2 , new Set( "" ) ) ) ;
	ok( !cardinality.gtle( 0 , 2 , itertools.iter( "" ) ) ) ;

	ok( !cardinality.gtle( 1 , 2 , "" ) ) ;
	ok( !cardinality.gtle( 1 , 2 , new Set( "" ) ) ) ;
	ok( !cardinality.gtle( 1 , 2 , itertools.iter( "" ) ) ) ;

	ok( !cardinality.gtle( -Infinity , 2 , "abc" ) ) ;
	ok( !cardinality.gtle( -Infinity , 2 , new Set( "abc" ) ) ) ;
	ok( !cardinality.gtle( -Infinity , 2 , itertools.iter( "abc" ) ) ) ;

	ok( !cardinality.gtle( 0 , 2 , "abc" ) ) ;
	ok( !cardinality.gtle( 0 , 2 , new Set( "abc" ) ) ) ;
	ok( !cardinality.gtle( 0 , 2 , itertools.iter( "abc" ) ) ) ;

	ok( !cardinality.gtle( 1 , 2 , "abc" ) ) ;
	ok( !cardinality.gtle( 1 , 2 , new Set( "abc" ) ) ) ;
	ok( !cardinality.gtle( 1 , 2 , itertools.iter( "abc" ) ) ) ;

	ok( !cardinality.gtle( 3 , 2 , "abc" ) ) ;
	ok( !cardinality.gtle( 3 , 2 , new Set( "abc" ) ) ) ;
	ok( !cardinality.gtle( 3 , 2 , itertools.iter( "abc" ) ) ) ;

	ok( !cardinality.gtle( 4 , 2 , "abc" ) ) ;
	ok( !cardinality.gtle( 4 , 2 , new Set( "abc" ) ) ) ;
	ok( !cardinality.gtle( 4 , 2 , itertools.iter( "abc" ) ) ) ;

	ok( !cardinality.gtle( Infinity , 2 , "abc" ) ) ;
	ok( !cardinality.gtle( Infinity , 2 , new Set( "abc" ) ) ) ;
	ok( !cardinality.gtle( Infinity , 2 , itertools.iter( "abc" ) ) ) ;

} ) ;
