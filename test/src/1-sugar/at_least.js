import test from 'ava' ;

import { iter , repeat } from 'aureooms-js-itertools' ;

import { at_least } from '../../../src' ;

test( "at_least" , t => {

	t.true( at_least( 1000 , repeat( "A" ) ) ) ;

	t.true( at_least( -1 , "" ) ) ;
	t.true( at_least( -1 , new Set( "" ) ) ) ;
	t.true( at_least( -1 , iter( "" ) ) ) ;

	t.true( at_least( 0 , "" ) ) ;
	t.true( at_least( 0 , new Set( "" ) ) ) ;
	t.true( at_least( 0 , iter( "" ) ) ) ;

	t.true( !at_least( 1 , "" ) ) ;
	t.true( !at_least( 1 , new Set( "" ) ) ) ;
	t.true( !at_least( 1 , iter( "" ) ) ) ;

	t.true( at_least( -Infinity , "abc" ) ) ;
	t.true( at_least( -Infinity , new Set( "abc" ) ) ) ;
	t.true( at_least( -Infinity , iter( "abc" ) ) ) ;

	t.true( at_least( 0 , "abc" ) ) ;
	t.true( at_least( 0 , new Set( "abc" ) ) ) ;
	t.true( at_least( 0 , iter( "abc" ) ) ) ;

	t.true( at_least( 1 , "abc" ) ) ;
	t.true( at_least( 1 , new Set( "abc" ) ) ) ;
	t.true( at_least( 1 , iter( "abc" ) ) ) ;

	t.true( at_least( 3 , "abc" ) ) ;
	t.true( at_least( 3 , new Set( "abc" ) ) ) ;
	t.true( at_least( 3 , iter( "abc" ) ) ) ;

	t.true( !at_least( 4 , "abc" ) ) ;
	t.true( !at_least( 4 , new Set( "abc" ) ) ) ;
	t.true( !at_least( 4 , iter( "abc" ) ) ) ;

	t.true( !at_least( Infinity , "abc" ) ) ;
	t.true( !at_least( Infinity , new Set( "abc" ) ) ) ;
	t.true( !at_least( Infinity , iter( "abc" ) ) ) ;

} ) ;
