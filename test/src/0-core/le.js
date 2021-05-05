import test from 'ava';

import {iter} from '@iterable-iterator/iter';
import {repeat} from '@iterable-iterator/repeat';

import {le} from '../../../src/index.js';

test('le', (t) => {
	t.true(!le(1000, repeat('A')));

	t.true(!le(-1, ''));
	t.true(!le(-1, new Set('')));
	t.true(!le(-1, iter('')));

	t.true(le(0, ''));
	t.true(le(0, new Set('')));
	t.true(le(0, iter('')));

	t.true(le(1, ''));
	t.true(le(1, new Set('')));
	t.true(le(1, iter('')));

	t.true(!le(Number.NEGATIVE_INFINITY, 'abc'));
	t.true(!le(Number.NEGATIVE_INFINITY, new Set('abc')));
	t.true(!le(Number.NEGATIVE_INFINITY, iter('abc')));

	t.true(!le(0, 'abc'));
	t.true(!le(0, new Set('abc')));
	t.true(!le(0, iter('abc')));

	t.true(!le(1, 'abc'));
	t.true(!le(1, new Set('abc')));
	t.true(!le(1, iter('abc')));

	t.true(le(3, 'abc'));
	t.true(le(3, new Set('abc')));
	t.true(le(3, iter('abc')));

	t.true(le(4, 'abc'));
	t.true(le(4, new Set('abc')));
	t.true(le(4, iter('abc')));

	t.true(le(Number.POSITIVE_INFINITY, 'abc'));
	t.true(le(Number.POSITIVE_INFINITY, new Set('abc')));
	t.true(le(Number.POSITIVE_INFINITY, iter('abc')));
});
