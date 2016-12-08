import test from 'ava' ;

import { iter , repeat } from 'aureooms-js-itertools' ;

import { empty } from '../../../src' ;

test( "empty" , t => {

	t.true( empty( "" ) ) ;
	t.true( empty( new Set( "" ) ) ) ;
	t.true( empty( iter( "" ) ) ) ;

	t.true( !empty( "abc" ) ) ;
	t.true( !empty( new Set( "abc" ) ) ) ;
	t.true( !empty( iter( "abc" ) ) ) ;

} ) ;
