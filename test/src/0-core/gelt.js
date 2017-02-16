import test from 'ava' ;

import { iter , repeat } from '@aureooms/js-itertools' ;

import { gelt } from '../../../src' ;

test( "gelt" , t => {

	t.true( !gelt( 0 , 1000 , repeat( "A" ) ) ) ;

	t.true( gelt( -1 , 7 , "" ) ) ;
	t.true( gelt( -1 , 7 , new Set( "" ) ) ) ;
	t.true( gelt( -1 , 7 , iter( "" ) ) ) ;

	t.true( gelt( 0 , 7 , "" ) ) ;
	t.true( gelt( 0 , 7 , new Set( "" ) ) ) ;
	t.true( gelt( 0 , 7 , iter( "" ) ) ) ;

	t.true( !gelt( 1 , 7 , "" ) ) ;
	t.true( !gelt( 1 , 7 , new Set( "" ) ) ) ;
	t.true( !gelt( 1 , 7 , iter( "" ) ) ) ;

	t.true( gelt( -Infinity , 7 , "abc" ) ) ;
	t.true( gelt( -Infinity , 7 , new Set( "abc" ) ) ) ;
	t.true( gelt( -Infinity , 7 , iter( "abc" ) ) ) ;

	t.true( gelt( 0 , 7 , "abc" ) ) ;
	t.true( gelt( 0 , 7 , new Set( "abc" ) ) ) ;
	t.true( gelt( 0 , 7 , iter( "abc" ) ) ) ;

	t.true( gelt( 1 , 7 , "abc" ) ) ;
	t.true( gelt( 1 , 7 , new Set( "abc" ) ) ) ;
	t.true( gelt( 1 , 7 , iter( "abc" ) ) ) ;

	t.true( gelt( 3 , 7 , "abc" ) ) ;
	t.true( gelt( 3 , 7 , new Set( "abc" ) ) ) ;
	t.true( gelt( 3 , 7 , iter( "abc" ) ) ) ;

	t.true( !gelt( 4 , 7 , "abc" ) ) ;
	t.true( !gelt( 4 , 7 , new Set( "abc" ) ) ) ;
	t.true( !gelt( 4 , 7 , iter( "abc" ) ) ) ;

	t.true( !gelt( Infinity , 7 , "abc" ) ) ;
	t.true( !gelt( Infinity , 7 , new Set( "abc" ) ) ) ;
	t.true( !gelt( Infinity , 7 , iter( "abc" ) ) ) ;

	t.true( gelt( -1 , 3 , "" ) ) ;
	t.true( gelt( -1 , 3 , new Set( "" ) ) ) ;
	t.true( gelt( -1 , 3 , iter( "" ) ) ) ;

	t.true( gelt( 0 , 3 , "" ) ) ;
	t.true( gelt( 0 , 3 , new Set( "" ) ) ) ;
	t.true( gelt( 0 , 3 , iter( "" ) ) ) ;

	t.true( !gelt( 1 , 3 , "" ) ) ;
	t.true( !gelt( 1 , 3 , new Set( "" ) ) ) ;
	t.true( !gelt( 1 , 3 , iter( "" ) ) ) ;

	t.true( !gelt( -Infinity , 3 , "abc" ) ) ;
	t.true( !gelt( -Infinity , 3 , new Set( "abc" ) ) ) ;
	t.true( !gelt( -Infinity , 3 , iter( "abc" ) ) ) ;

	t.true( !gelt( 0 , 3 , "abc" ) ) ;
	t.true( !gelt( 0 , 3 , new Set( "abc" ) ) ) ;
	t.true( !gelt( 0 , 3 , iter( "abc" ) ) ) ;

	t.true( !gelt( 1 , 3 , "abc" ) ) ;
	t.true( !gelt( 1 , 3 , new Set( "abc" ) ) ) ;
	t.true( !gelt( 1 , 3 , iter( "abc" ) ) ) ;

	t.true( !gelt( 3 , 3 , "abc" ) ) ;
	t.true( !gelt( 3 , 3 , new Set( "abc" ) ) ) ;
	t.true( !gelt( 3 , 3 , iter( "abc" ) ) ) ;

	t.true( !gelt( 4 , 3 , "abc" ) ) ;
	t.true( !gelt( 4 , 3 , new Set( "abc" ) ) ) ;
	t.true( !gelt( 4 , 3 , iter( "abc" ) ) ) ;

	t.true( !gelt( Infinity , 3 , "abc" ) ) ;
	t.true( !gelt( Infinity , 3 , new Set( "abc" ) ) ) ;
	t.true( !gelt( Infinity , 3 , iter( "abc" ) ) ) ;

} ) ;

test( "gelt (base cases)" , t => {

	t.true( gelt( -1 , Infinity , "" ) ) ;
	t.true( gelt( -1 , Infinity , new Set( "" ) ) ) ;
	t.true( gelt( -1 , Infinity , iter( "" ) ) ) ;

	t.true( gelt( 0 , Infinity , "" ) ) ;
	t.true( gelt( 0 , Infinity , new Set( "" ) ) ) ;
	t.true( gelt( 0 , Infinity , iter( "" ) ) ) ;

	t.true( !gelt( 1 , Infinity , "" ) ) ;
	t.true( !gelt( 1 , Infinity , new Set( "" ) ) ) ;
	t.true( !gelt( 1 , Infinity , iter( "" ) ) ) ;

	t.true( gelt( -Infinity , Infinity , "abc" ) ) ;
	t.true( gelt( -Infinity , Infinity , new Set( "abc" ) ) ) ;
	t.true( gelt( -Infinity , Infinity , iter( "abc" ) ) ) ;

	t.true( gelt( 0 , Infinity , "abc" ) ) ;
	t.true( gelt( 0 , Infinity , new Set( "abc" ) ) ) ;
	t.true( gelt( 0 , Infinity , iter( "abc" ) ) ) ;

	t.true( gelt( 1 , Infinity , "abc" ) ) ;
	t.true( gelt( 1 , Infinity , new Set( "abc" ) ) ) ;
	t.true( gelt( 1 , Infinity , iter( "abc" ) ) ) ;

	t.true( gelt( 3 , Infinity , "abc" ) ) ;
	t.true( gelt( 3 , Infinity , new Set( "abc" ) ) ) ;
	t.true( gelt( 3 , Infinity , iter( "abc" ) ) ) ;

	t.true( !gelt( 4 , Infinity , "abc" ) ) ;
	t.true( !gelt( 4 , Infinity , new Set( "abc" ) ) ) ;
	t.true( !gelt( 4 , Infinity , iter( "abc" ) ) ) ;

	t.true( !gelt( Infinity , Infinity , "abc" ) ) ;
	t.true( !gelt( Infinity , Infinity , new Set( "abc" ) ) ) ;
	t.true( !gelt( Infinity , Infinity , iter( "abc" ) ) ) ;

	t.true( !gelt( 0 , -1 , "" ) ) ;
	t.true( !gelt( 0 , -1 , new Set( "" ) ) ) ;
	t.true( !gelt( 0 , -1 , iter( "" ) ) ) ;

	t.true( !gelt( 0 , 0 , "" ) ) ;
	t.true( !gelt( 0 , 0 , new Set( "" ) ) ) ;
	t.true( !gelt( 0 , 0 , iter( "" ) ) ) ;

	t.true( gelt( 0 , 1 , "" ) ) ;
	t.true( gelt( 0 , 1 , new Set( "" ) ) ) ;
	t.true( gelt( 0 , 1 , iter( "" ) ) ) ;

	t.true( !gelt( 0 , -Infinity , "abc" ) ) ;
	t.true( !gelt( 0 , -Infinity , new Set( "abc" ) ) ) ;
	t.true( !gelt( 0 , -Infinity , iter( "abc" ) ) ) ;

	t.true( !gelt( 0 , 0 , "abc" ) ) ;
	t.true( !gelt( 0 , 0 , new Set( "abc" ) ) ) ;
	t.true( !gelt( 0 , 0 , iter( "abc" ) ) ) ;

	t.true( !gelt( 0 , 1 , "abc" ) ) ;
	t.true( !gelt( 0 , 1 , new Set( "abc" ) ) ) ;
	t.true( !gelt( 0 , 1 , iter( "abc" ) ) ) ;

	t.true( !gelt( 0 , 3 , "abc" ) ) ;
	t.true( !gelt( 0 , 3 , new Set( "abc" ) ) ) ;
	t.true( !gelt( 0 , 3 , iter( "abc" ) ) ) ;

	t.true( gelt( 0 , 4 , "abc" ) ) ;
	t.true( gelt( 0 , 4 , new Set( "abc" ) ) ) ;
	t.true( gelt( 0 , 4 , iter( "abc" ) ) ) ;

	t.true( gelt( 0 , Infinity , "abc" ) ) ;
	t.true( gelt( 0 , Infinity , new Set( "abc" ) ) ) ;
	t.true( gelt( 0 , Infinity , iter( "abc" ) ) ) ;

	t.true( !gelt( -Infinity , -1 , "" ) ) ;
	t.true( !gelt( -Infinity , -1 , new Set( "" ) ) ) ;
	t.true( !gelt( -Infinity , -1 , iter( "" ) ) ) ;

	t.true( !gelt( -Infinity , 0 , "" ) ) ;
	t.true( !gelt( -Infinity , 0 , new Set( "" ) ) ) ;
	t.true( !gelt( -Infinity , 0 , iter( "" ) ) ) ;

	t.true( gelt( -Infinity , 1 , "" ) ) ;
	t.true( gelt( -Infinity , 1 , new Set( "" ) ) ) ;
	t.true( gelt( -Infinity , 1 , iter( "" ) ) ) ;

	t.true( !gelt( -Infinity , -Infinity , "abc" ) ) ;
	t.true( !gelt( -Infinity , -Infinity , new Set( "abc" ) ) ) ;
	t.true( !gelt( -Infinity , -Infinity , iter( "abc" ) ) ) ;

	t.true( !gelt( -Infinity , 0 , "abc" ) ) ;
	t.true( !gelt( -Infinity , 0 , new Set( "abc" ) ) ) ;
	t.true( !gelt( -Infinity , 0 , iter( "abc" ) ) ) ;

	t.true( !gelt( -Infinity , 1 , "abc" ) ) ;
	t.true( !gelt( -Infinity , 1 , new Set( "abc" ) ) ) ;
	t.true( !gelt( -Infinity , 1 , iter( "abc" ) ) ) ;

	t.true( !gelt( -Infinity , 3 , "abc" ) ) ;
	t.true( !gelt( -Infinity , 3 , new Set( "abc" ) ) ) ;
	t.true( !gelt( -Infinity , 3 , iter( "abc" ) ) ) ;

	t.true( gelt( -Infinity , 4 , "abc" ) ) ;
	t.true( gelt( -Infinity , 4 , new Set( "abc" ) ) ) ;
	t.true( gelt( -Infinity , 4 , iter( "abc" ) ) ) ;

	t.true( gelt( -Infinity , Infinity , "abc" ) ) ;
	t.true( gelt( -Infinity , Infinity , new Set( "abc" ) ) ) ;
	t.true( gelt( -Infinity , Infinity , iter( "abc" ) ) ) ;

	t.true( gelt( -1 , 2 , "" ) ) ;
	t.true( gelt( -1 , 2 , new Set( "" ) ) ) ;
	t.true( gelt( -1 , 2 , iter( "" ) ) ) ;

	t.true( gelt( 0 , 2 , "" ) ) ;
	t.true( gelt( 0 , 2 , new Set( "" ) ) ) ;
	t.true( gelt( 0 , 2 , iter( "" ) ) ) ;

	t.true( !gelt( 1 , 2 , "" ) ) ;
	t.true( !gelt( 1 , 2 , new Set( "" ) ) ) ;
	t.true( !gelt( 1 , 2 , iter( "" ) ) ) ;

	t.true( !gelt( -Infinity , 2 , "abc" ) ) ;
	t.true( !gelt( -Infinity , 2 , new Set( "abc" ) ) ) ;
	t.true( !gelt( -Infinity , 2 , iter( "abc" ) ) ) ;

	t.true( !gelt( 0 , 2 , "abc" ) ) ;
	t.true( !gelt( 0 , 2 , new Set( "abc" ) ) ) ;
	t.true( !gelt( 0 , 2 , iter( "abc" ) ) ) ;

	t.true( !gelt( 1 , 2 , "abc" ) ) ;
	t.true( !gelt( 1 , 2 , new Set( "abc" ) ) ) ;
	t.true( !gelt( 1 , 2 , iter( "abc" ) ) ) ;

	t.true( !gelt( 3 , 2 , "abc" ) ) ;
	t.true( !gelt( 3 , 2 , new Set( "abc" ) ) ) ;
	t.true( !gelt( 3 , 2 , iter( "abc" ) ) ) ;

	t.true( !gelt( 4 , 2 , "abc" ) ) ;
	t.true( !gelt( 4 , 2 , new Set( "abc" ) ) ) ;
	t.true( !gelt( 4 , 2 , iter( "abc" ) ) ) ;

	t.true( !gelt( Infinity , 2 , "abc" ) ) ;
	t.true( !gelt( Infinity , 2 , new Set( "abc" ) ) ) ;
	t.true( !gelt( Infinity , 2 , iter( "abc" ) ) ) ;

} ) ;
