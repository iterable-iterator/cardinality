import test from 'ava';

import {iter} from '@iterable-iterator/iter';
import {repeat} from '@iterable-iterator/repeat';

import {ge} from '#module';

test('ge', (t) => {
	t.true(ge(1000, repeat('A')));

	t.true(ge(-1, ''));
	t.true(ge(-1, new Set('')));
	t.true(ge(-1, iter('')));

	t.true(ge(0, ''));
	t.true(ge(0, new Set('')));
	t.true(ge(0, iter('')));

	t.true(!ge(1, ''));
	t.true(!ge(1, new Set('')));
	t.true(!ge(1, iter('')));

	t.true(ge(Number.NEGATIVE_INFINITY, 'abc'));
	t.true(ge(Number.NEGATIVE_INFINITY, new Set('abc')));
	t.true(ge(Number.NEGATIVE_INFINITY, iter('abc')));

	t.true(ge(0, 'abc'));
	t.true(ge(0, new Set('abc')));
	t.true(ge(0, iter('abc')));

	t.true(ge(1, 'abc'));
	t.true(ge(1, new Set('abc')));
	t.true(ge(1, iter('abc')));

	t.true(ge(3, 'abc'));
	t.true(ge(3, new Set('abc')));
	t.true(ge(3, iter('abc')));

	t.true(!ge(4, 'abc'));
	t.true(!ge(4, new Set('abc')));
	t.true(!ge(4, iter('abc')));

	t.true(!ge(Number.POSITIVE_INFINITY, 'abc'));
	t.true(!ge(Number.POSITIVE_INFINITY, new Set('abc')));
	t.true(!ge(Number.POSITIVE_INFINITY, iter('abc')));
});
