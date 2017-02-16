import test from 'ava' ;

import { iter , repeat } from '@aureooms/js-itertools' ;

import { gtlt } from '../../../src' ;

test( "gtlt" , t => {

	t.true( !gtlt( 0 , 1000 , repeat( "A" ) ) ) ;

	t.true( gtlt( -1 , 7 , "" ) ) ;
	t.true( gtlt( -1 , 7 , new Set( "" ) ) ) ;
	t.true( gtlt( -1 , 7 , iter( "" ) ) ) ;

	t.true( !gtlt( 0 , 7 , "" ) ) ;
	t.true( !gtlt( 0 , 7 , new Set( "" ) ) ) ;
	t.true( !gtlt( 0 , 7 , iter( "" ) ) ) ;

	t.true( !gtlt( 1 , 7 , "" ) ) ;
	t.true( !gtlt( 1 , 7 , new Set( "" ) ) ) ;
	t.true( !gtlt( 1 , 7 , iter( "" ) ) ) ;

	t.true( gtlt( -Infinity , 7 , "abc" ) ) ;
	t.true( gtlt( -Infinity , 7 , new Set( "abc" ) ) ) ;
	t.true( gtlt( -Infinity , 7 , iter( "abc" ) ) ) ;

	t.true( gtlt( 0 , 7 , "abc" ) ) ;
	t.true( gtlt( 0 , 7 , new Set( "abc" ) ) ) ;
	t.true( gtlt( 0 , 7 , iter( "abc" ) ) ) ;

	t.true( gtlt( 1 , 7 , "abc" ) ) ;
	t.true( gtlt( 1 , 7 , new Set( "abc" ) ) ) ;
	t.true( gtlt( 1 , 7 , iter( "abc" ) ) ) ;

	t.true( !gtlt( 3 , 7 , "abc" ) ) ;
	t.true( !gtlt( 3 , 7 , new Set( "abc" ) ) ) ;
	t.true( !gtlt( 3 , 7 , iter( "abc" ) ) ) ;

	t.true( !gtlt( 4 , 7 , "abc" ) ) ;
	t.true( !gtlt( 4 , 7 , new Set( "abc" ) ) ) ;
	t.true( !gtlt( 4 , 7 , iter( "abc" ) ) ) ;

	t.true( !gtlt( Infinity , 7 , "abc" ) ) ;
	t.true( !gtlt( Infinity , 7 , new Set( "abc" ) ) ) ;
	t.true( !gtlt( Infinity , 7 , iter( "abc" ) ) ) ;

	t.true( gtlt( -1 , 3 , "" ) ) ;
	t.true( gtlt( -1 , 3 , new Set( "" ) ) ) ;
	t.true( gtlt( -1 , 3 , iter( "" ) ) ) ;

	t.true( !gtlt( 0 , 3 , "" ) ) ;
	t.true( !gtlt( 0 , 3 , new Set( "" ) ) ) ;
	t.true( !gtlt( 0 , 3 , iter( "" ) ) ) ;

	t.true( !gtlt( 1 , 3 , "" ) ) ;
	t.true( !gtlt( 1 , 3 , new Set( "" ) ) ) ;
	t.true( !gtlt( 1 , 3 , iter( "" ) ) ) ;

	t.true( !gtlt( -Infinity , 3 , "abc" ) ) ;
	t.true( !gtlt( -Infinity , 3 , new Set( "abc" ) ) ) ;
	t.true( !gtlt( -Infinity , 3 , iter( "abc" ) ) ) ;

	t.true( !gtlt( 0 , 3 , "abc" ) ) ;
	t.true( !gtlt( 0 , 3 , new Set( "abc" ) ) ) ;
	t.true( !gtlt( 0 , 3 , iter( "abc" ) ) ) ;

	t.true( !gtlt( 1 , 3 , "abc" ) ) ;
	t.true( !gtlt( 1 , 3 , new Set( "abc" ) ) ) ;
	t.true( !gtlt( 1 , 3 , iter( "abc" ) ) ) ;

	t.true( !gtlt( 3 , 3 , "abc" ) ) ;
	t.true( !gtlt( 3 , 3 , new Set( "abc" ) ) ) ;
	t.true( !gtlt( 3 , 3 , iter( "abc" ) ) ) ;

	t.true( !gtlt( 4 , 3 , "abc" ) ) ;
	t.true( !gtlt( 4 , 3 , new Set( "abc" ) ) ) ;
	t.true( !gtlt( 4 , 3 , iter( "abc" ) ) ) ;

	t.true( !gtlt( Infinity , 3 , "abc" ) ) ;
	t.true( !gtlt( Infinity , 3 , new Set( "abc" ) ) ) ;
	t.true( !gtlt( Infinity , 3 , iter( "abc" ) ) ) ;

} ) ;

test( "gtlt (base cases)" , t => {

	t.true( gtlt( -1 , Infinity , "" ) ) ;
	t.true( gtlt( -1 , Infinity , new Set( "" ) ) ) ;
	t.true( gtlt( -1 , Infinity , iter( "" ) ) ) ;

	t.true( !gtlt( 0 , Infinity , "" ) ) ;
	t.true( !gtlt( 0 , Infinity , new Set( "" ) ) ) ;
	t.true( !gtlt( 0 , Infinity , iter( "" ) ) ) ;

	t.true( !gtlt( 1 , Infinity , "" ) ) ;
	t.true( !gtlt( 1 , Infinity , new Set( "" ) ) ) ;
	t.true( !gtlt( 1 , Infinity , iter( "" ) ) ) ;

	t.true( gtlt( -Infinity , Infinity , "abc" ) ) ;
	t.true( gtlt( -Infinity , Infinity , new Set( "abc" ) ) ) ;
	t.true( gtlt( -Infinity , Infinity , iter( "abc" ) ) ) ;

	t.true( gtlt( 0 , Infinity , "abc" ) ) ;
	t.true( gtlt( 0 , Infinity , new Set( "abc" ) ) ) ;
	t.true( gtlt( 0 , Infinity , iter( "abc" ) ) ) ;

	t.true( gtlt( 1 , Infinity , "abc" ) ) ;
	t.true( gtlt( 1 , Infinity , new Set( "abc" ) ) ) ;
	t.true( gtlt( 1 , Infinity , iter( "abc" ) ) ) ;

	t.true( !gtlt( 3 , Infinity , "abc" ) ) ;
	t.true( !gtlt( 3 , Infinity , new Set( "abc" ) ) ) ;
	t.true( !gtlt( 3 , Infinity , iter( "abc" ) ) ) ;

	t.true( !gtlt( 4 , Infinity , "abc" ) ) ;
	t.true( !gtlt( 4 , Infinity , new Set( "abc" ) ) ) ;
	t.true( !gtlt( 4 , Infinity , iter( "abc" ) ) ) ;

	t.true( !gtlt( Infinity , Infinity , "abc" ) ) ;
	t.true( !gtlt( Infinity , Infinity , new Set( "abc" ) ) ) ;
	t.true( !gtlt( Infinity , Infinity , iter( "abc" ) ) ) ;

	t.true( !gtlt( 0 , -1 , "" ) ) ;
	t.true( !gtlt( 0 , -1 , new Set( "" ) ) ) ;
	t.true( !gtlt( 0 , -1 , iter( "" ) ) ) ;

	t.true( !gtlt( 0 , 0 , "" ) ) ;
	t.true( !gtlt( 0 , 0 , new Set( "" ) ) ) ;
	t.true( !gtlt( 0 , 0 , iter( "" ) ) ) ;

	t.true( !gtlt( 0 , 1 , "" ) ) ;
	t.true( !gtlt( 0 , 1 , new Set( "" ) ) ) ;
	t.true( !gtlt( 0 , 1 , iter( "" ) ) ) ;

	t.true( !gtlt( 0 , -Infinity , "abc" ) ) ;
	t.true( !gtlt( 0 , -Infinity , new Set( "abc" ) ) ) ;
	t.true( !gtlt( 0 , -Infinity , iter( "abc" ) ) ) ;

	t.true( !gtlt( 0 , 0 , "abc" ) ) ;
	t.true( !gtlt( 0 , 0 , new Set( "abc" ) ) ) ;
	t.true( !gtlt( 0 , 0 , iter( "abc" ) ) ) ;

	t.true( !gtlt( 0 , 1 , "abc" ) ) ;
	t.true( !gtlt( 0 , 1 , new Set( "abc" ) ) ) ;
	t.true( !gtlt( 0 , 1 , iter( "abc" ) ) ) ;

	t.true( !gtlt( 0 , 3 , "abc" ) ) ;
	t.true( !gtlt( 0 , 3 , new Set( "abc" ) ) ) ;
	t.true( !gtlt( 0 , 3 , iter( "abc" ) ) ) ;

	t.true( gtlt( 0 , 4 , "abc" ) ) ;
	t.true( gtlt( 0 , 4 , new Set( "abc" ) ) ) ;
	t.true( gtlt( 0 , 4 , iter( "abc" ) ) ) ;

	t.true( gtlt( 0 , Infinity , "abc" ) ) ;
	t.true( gtlt( 0 , Infinity , new Set( "abc" ) ) ) ;
	t.true( gtlt( 0 , Infinity , iter( "abc" ) ) ) ;

	t.true( !gtlt( -Infinity , -1 , "" ) ) ;
	t.true( !gtlt( -Infinity , -1 , new Set( "" ) ) ) ;
	t.true( !gtlt( -Infinity , -1 , iter( "" ) ) ) ;

	t.true( !gtlt( -Infinity , 0 , "" ) ) ;
	t.true( !gtlt( -Infinity , 0 , new Set( "" ) ) ) ;
	t.true( !gtlt( -Infinity , 0 , iter( "" ) ) ) ;

	t.true( gtlt( -Infinity , 1 , "" ) ) ;
	t.true( gtlt( -Infinity , 1 , new Set( "" ) ) ) ;
	t.true( gtlt( -Infinity , 1 , iter( "" ) ) ) ;

	t.true( !gtlt( -Infinity , -Infinity , "abc" ) ) ;
	t.true( !gtlt( -Infinity , -Infinity , new Set( "abc" ) ) ) ;
	t.true( !gtlt( -Infinity , -Infinity , iter( "abc" ) ) ) ;

	t.true( !gtlt( -Infinity , 0 , "abc" ) ) ;
	t.true( !gtlt( -Infinity , 0 , new Set( "abc" ) ) ) ;
	t.true( !gtlt( -Infinity , 0 , iter( "abc" ) ) ) ;

	t.true( !gtlt( -Infinity , 1 , "abc" ) ) ;
	t.true( !gtlt( -Infinity , 1 , new Set( "abc" ) ) ) ;
	t.true( !gtlt( -Infinity , 1 , iter( "abc" ) ) ) ;

	t.true( !gtlt( -Infinity , 3 , "abc" ) ) ;
	t.true( !gtlt( -Infinity , 3 , new Set( "abc" ) ) ) ;
	t.true( !gtlt( -Infinity , 3 , iter( "abc" ) ) ) ;

	t.true( gtlt( -Infinity , 4 , "abc" ) ) ;
	t.true( gtlt( -Infinity , 4 , new Set( "abc" ) ) ) ;
	t.true( gtlt( -Infinity , 4 , iter( "abc" ) ) ) ;

	t.true( gtlt( -Infinity , Infinity , "abc" ) ) ;
	t.true( gtlt( -Infinity , Infinity , new Set( "abc" ) ) ) ;
	t.true( gtlt( -Infinity , Infinity , iter( "abc" ) ) ) ;

	t.true( gtlt( -1 , 2 , "" ) ) ;
	t.true( gtlt( -1 , 2 , new Set( "" ) ) ) ;
	t.true( gtlt( -1 , 2 , iter( "" ) ) ) ;

	t.true( !gtlt( 0 , 2 , "" ) ) ;
	t.true( !gtlt( 0 , 2 , new Set( "" ) ) ) ;
	t.true( !gtlt( 0 , 2 , iter( "" ) ) ) ;

	t.true( !gtlt( 1 , 2 , "" ) ) ;
	t.true( !gtlt( 1 , 2 , new Set( "" ) ) ) ;
	t.true( !gtlt( 1 , 2 , iter( "" ) ) ) ;

	t.true( !gtlt( -Infinity , 2 , "abc" ) ) ;
	t.true( !gtlt( -Infinity , 2 , new Set( "abc" ) ) ) ;
	t.true( !gtlt( -Infinity , 2 , iter( "abc" ) ) ) ;

	t.true( !gtlt( 0 , 2 , "abc" ) ) ;
	t.true( !gtlt( 0 , 2 , new Set( "abc" ) ) ) ;
	t.true( !gtlt( 0 , 2 , iter( "abc" ) ) ) ;

	t.true( !gtlt( 1 , 2 , "abc" ) ) ;
	t.true( !gtlt( 1 , 2 , new Set( "abc" ) ) ) ;
	t.true( !gtlt( 1 , 2 , iter( "abc" ) ) ) ;

	t.true( !gtlt( 3 , 2 , "abc" ) ) ;
	t.true( !gtlt( 3 , 2 , new Set( "abc" ) ) ) ;
	t.true( !gtlt( 3 , 2 , iter( "abc" ) ) ) ;

	t.true( !gtlt( 4 , 2 , "abc" ) ) ;
	t.true( !gtlt( 4 , 2 , new Set( "abc" ) ) ) ;
	t.true( !gtlt( 4 , 2 , iter( "abc" ) ) ) ;

	t.true( !gtlt( Infinity , 2 , "abc" ) ) ;
	t.true( !gtlt( Infinity , 2 , new Set( "abc" ) ) ) ;
	t.true( !gtlt( Infinity , 2 , iter( "abc" ) ) ) ;

} ) ;
