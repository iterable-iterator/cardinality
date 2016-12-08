import test from 'ava' ;

import { iter , repeat } from 'aureooms-js-itertools' ;

import { le } from '../../../src' ;

test( "le" , t => {

	t.true( !le( 1000 , repeat( "A" ) ) ) ;

	t.true( !le( -1 , "" ) ) ;
	t.true( !le( -1 , new Set( "" ) ) ) ;
	t.true( !le( -1 , iter( "" ) ) ) ;

	t.true( le( 0 , "" ) ) ;
	t.true( le( 0 , new Set( "" ) ) ) ;
	t.true( le( 0 , iter( "" ) ) ) ;

	t.true( le( 1 , "" ) ) ;
	t.true( le( 1 , new Set( "" ) ) ) ;
	t.true( le( 1 , iter( "" ) ) ) ;

	t.true( !le( -Infinity , "abc" ) ) ;
	t.true( !le( -Infinity , new Set( "abc" ) ) ) ;
	t.true( !le( -Infinity , iter( "abc" ) ) ) ;

	t.true( !le( 0 , "abc" ) ) ;
	t.true( !le( 0 , new Set( "abc" ) ) ) ;
	t.true( !le( 0 , iter( "abc" ) ) ) ;

	t.true( !le( 1 , "abc" ) ) ;
	t.true( !le( 1 , new Set( "abc" ) ) ) ;
	t.true( !le( 1 , iter( "abc" ) ) ) ;

	t.true( le( 3 , "abc" ) ) ;
	t.true( le( 3 , new Set( "abc" ) ) ) ;
	t.true( le( 3 , iter( "abc" ) ) ) ;

	t.true( le( 4 , "abc" ) ) ;
	t.true( le( 4 , new Set( "abc" ) ) ) ;
	t.true( le( 4 , iter( "abc" ) ) ) ;

	t.true( le( Infinity , "abc" ) ) ;
	t.true( le( Infinity , new Set( "abc" ) ) ) ;
	t.true( le( Infinity , iter( "abc" ) ) ) ;

} ) ;
