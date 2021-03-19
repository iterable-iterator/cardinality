import test from 'ava';

import {iter, repeat} from '@aureooms/js-itertools';

import {eq} from '../../../src/index.js';

test('eq', (t) => {
	t.true(!eq(1000, repeat('A')));

	t.true(eq(0, ''));
	t.true(eq(0, new Set('')));
	t.true(eq(0, iter('')));

	t.true(eq(3, 'abc'));
	t.true(eq(3, new Set('abc')));
	t.true(eq(3, iter('abc')));

	t.true(!eq(2, 'abc'));
	t.true(!eq(2, new Set('abc')));
	t.true(!eq(2, iter('abc')));

	t.true(!eq(4, 'abc'));
	t.true(!eq(4, new Set('abc')));
	t.true(!eq(4, iter('abc')));

	t.true(!eq(3.01, 'abc'));
	t.true(!eq(3.01, new Set('abc')));
	t.true(!eq(3.01, iter('abc')));
});
