import test from 'ava';

import {iter} from '@iterable-iterator/iter';
import {repeat} from '@iterable-iterator/repeat';

import {ne} from '../../../src/index.js';

test('ne', (t) => {
	t.true(ne(1000, repeat('A')));

	t.true(!ne(0, ''));
	t.true(!ne(0, new Set('')));
	t.true(!ne(0, iter('')));

	t.true(!ne(3, 'abc'));
	t.true(!ne(3, new Set('abc')));
	t.true(!ne(3, iter('abc')));

	t.true(ne(2, 'abc'));
	t.true(ne(2, new Set('abc')));
	t.true(ne(2, iter('abc')));

	t.true(ne(4, 'abc'));
	t.true(ne(4, new Set('abc')));
	t.true(ne(4, iter('abc')));

	t.true(ne(3.01, 'abc'));
	t.true(ne(3.01, new Set('abc')));
	t.true(ne(3.01, iter('abc')));
});
