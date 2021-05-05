import test from 'ava';

import {iter} from '@iterable-iterator/iter';

import {count} from '../../../src/index.js';

test('count', (t) => {
	// The following would loop forever:
	// > t.deepEqual( count( repeat( "A" ) ) , Infinity ) ;

	t.is(count(''), 0);
	t.is(count(new Set('')), 0);
	t.is(count(iter('')), 0);

	t.is(count('abc'), 3);
	t.is(count(new Set('abc')), 3);
	t.is(count(iter('abc')), 3);
});
