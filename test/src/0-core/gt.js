import test from 'ava' ;

import { iter , repeat } from 'aureooms-js-itertools' ;

import { gt } from '../../../src' ;

test( "gt" , t => {

	t.true( gt( 1000 , repeat( "A" ) ) ) ;

	t.true( gt( -1 , "" ) ) ;
	t.true( gt( -1 , new Set( "" ) ) ) ;
	t.true( gt( -1 , iter( "" ) ) ) ;

	t.true( !gt( 0 , "" ) ) ;
	t.true( !gt( 0 , new Set( "" ) ) ) ;
	t.true( !gt( 0 , iter( "" ) ) ) ;

	t.true( !gt( 1 , "" ) ) ;
	t.true( !gt( 1 , new Set( "" ) ) ) ;
	t.true( !gt( 1 , iter( "" ) ) ) ;

	t.true( gt( -Infinity , "abc" ) ) ;
	t.true( gt( -Infinity , new Set( "abc" ) ) ) ;
	t.true( gt( -Infinity , iter( "abc" ) ) ) ;

	t.true( gt( 0 , "abc" ) ) ;
	t.true( gt( 0 , new Set( "abc" ) ) ) ;
	t.true( gt( 0 , iter( "abc" ) ) ) ;

	t.true( gt( 1 , "abc" ) ) ;
	t.true( gt( 1 , new Set( "abc" ) ) ) ;
	t.true( gt( 1 , iter( "abc" ) ) ) ;

	t.true( !gt( 3 , "abc" ) ) ;
	t.true( !gt( 3 , new Set( "abc" ) ) ) ;
	t.true( !gt( 3 , iter( "abc" ) ) ) ;

	t.true( !gt( 4 , "abc" ) ) ;
	t.true( !gt( 4 , new Set( "abc" ) ) ) ;
	t.true( !gt( 4 , iter( "abc" ) ) ) ;

	t.true( !gt( Infinity , "abc" ) ) ;
	t.true( !gt( Infinity , new Set( "abc" ) ) ) ;
	t.true( !gt( Infinity , iter( "abc" ) ) ) ;

} ) ;
