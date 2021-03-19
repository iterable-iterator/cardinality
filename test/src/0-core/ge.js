import test from 'ava' ;

import { iter , repeat } from '@aureooms/js-itertools' ;

import { ge } from "../../../src/index.js" ;

test( "ge" , t => {

	t.true( ge( 1000 , repeat( "A" ) ) ) ;

	t.true( ge( -1 , "" ) ) ;
	t.true( ge( -1 , new Set( "" ) ) ) ;
	t.true( ge( -1 , iter( "" ) ) ) ;

	t.true( ge( 0 , "" ) ) ;
	t.true( ge( 0 , new Set( "" ) ) ) ;
	t.true( ge( 0 , iter( "" ) ) ) ;

	t.true( !ge( 1 , "" ) ) ;
	t.true( !ge( 1 , new Set( "" ) ) ) ;
	t.true( !ge( 1 , iter( "" ) ) ) ;

	t.true( ge( -Infinity , "abc" ) ) ;
	t.true( ge( -Infinity , new Set( "abc" ) ) ) ;
	t.true( ge( -Infinity , iter( "abc" ) ) ) ;

	t.true( ge( 0 , "abc" ) ) ;
	t.true( ge( 0 , new Set( "abc" ) ) ) ;
	t.true( ge( 0 , iter( "abc" ) ) ) ;

	t.true( ge( 1 , "abc" ) ) ;
	t.true( ge( 1 , new Set( "abc" ) ) ) ;
	t.true( ge( 1 , iter( "abc" ) ) ) ;

	t.true( ge( 3 , "abc" ) ) ;
	t.true( ge( 3 , new Set( "abc" ) ) ) ;
	t.true( ge( 3 , iter( "abc" ) ) ) ;

	t.true( !ge( 4 , "abc" ) ) ;
	t.true( !ge( 4 , new Set( "abc" ) ) ) ;
	t.true( !ge( 4 , iter( "abc" ) ) ) ;

	t.true( !ge( Infinity , "abc" ) ) ;
	t.true( !ge( Infinity , new Set( "abc" ) ) ) ;
	t.true( !ge( Infinity , iter( "abc" ) ) ) ;

} ) ;
