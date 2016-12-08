import test from 'ava' ;

import { iter , repeat } from 'aureooms-js-itertools' ;

import { at_most } from '../../../src' ;

test( "at_most" , t => {

	t.true( !at_most( 1000 , repeat( "A" ) ) ) ;

	t.true( !at_most( -1 , "" ) ) ;
	t.true( !at_most( -1 , new Set( "" ) ) ) ;
	t.true( !at_most( -1 , iter( "" ) ) ) ;

	t.true( at_most( 0 , "" ) ) ;
	t.true( at_most( 0 , new Set( "" ) ) ) ;
	t.true( at_most( 0 , iter( "" ) ) ) ;

	t.true( at_most( 1 , "" ) ) ;
	t.true( at_most( 1 , new Set( "" ) ) ) ;
	t.true( at_most( 1 , iter( "" ) ) ) ;

	t.true( !at_most( -Infinity , "abc" ) ) ;
	t.true( !at_most( -Infinity , new Set( "abc" ) ) ) ;
	t.true( !at_most( -Infinity , iter( "abc" ) ) ) ;

	t.true( !at_most( 0 , "abc" ) ) ;
	t.true( !at_most( 0 , new Set( "abc" ) ) ) ;
	t.true( !at_most( 0 , iter( "abc" ) ) ) ;

	t.true( !at_most( 1 , "abc" ) ) ;
	t.true( !at_most( 1 , new Set( "abc" ) ) ) ;
	t.true( !at_most( 1 , iter( "abc" ) ) ) ;

	t.true( at_most( 3 , "abc" ) ) ;
	t.true( at_most( 3 , new Set( "abc" ) ) ) ;
	t.true( at_most( 3 , iter( "abc" ) ) ) ;

	t.true( at_most( 4 , "abc" ) ) ;
	t.true( at_most( 4 , new Set( "abc" ) ) ) ;
	t.true( at_most( 4 , iter( "abc" ) ) ) ;

	t.true( at_most( Infinity , "abc" ) ) ;
	t.true( at_most( Infinity , new Set( "abc" ) ) ) ;
	t.true( at_most( Infinity , iter( "abc" ) ) ) ;

} ) ;
