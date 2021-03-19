import test from 'ava' ;

import { iter } from '@aureooms/js-itertools' ;

import { count } from '../../../src' ;

test( "count" , t => {

	// The following would loop forever:
	// > t.deepEqual( count( repeat( "A" ) ) , Infinity ) ;

	t.deepEqual( count( "" ) , 0 ) ;
	t.deepEqual( count( new Set( "" ) ) , 0 ) ;
	t.deepEqual( count( iter( "" ) ) , 0 ) ;

	t.deepEqual( count( "abc" ) , 3 ) ;
	t.deepEqual( count( new Set( "abc" ) ) , 3 ) ;
	t.deepEqual( count( iter( "abc" ) ) , 3 ) ;

} ) ;
