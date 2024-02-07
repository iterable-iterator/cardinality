import test from 'ava';
import {iter} from '@iterable-iterator/iter';
import {repeat} from '@iterable-iterator/repeat';

import {atLeast} from '#module';

test('atLeast', (t) => {
	t.true(atLeast(1000, repeat('A')));

	t.true(atLeast(-1, ''));
	t.true(atLeast(-1, new Set('')));
	t.true(atLeast(-1, iter('')));

	t.true(atLeast(0, ''));
	t.true(atLeast(0, new Set('')));
	t.true(atLeast(0, iter('')));

	t.true(!atLeast(1, ''));
	t.true(!atLeast(1, new Set('')));
	t.true(!atLeast(1, iter('')));

	t.true(atLeast(Number.NEGATIVE_INFINITY, 'abc'));
	t.true(atLeast(Number.NEGATIVE_INFINITY, new Set('abc')));
	t.true(atLeast(Number.NEGATIVE_INFINITY, iter('abc')));

	t.true(atLeast(0, 'abc'));
	t.true(atLeast(0, new Set('abc')));
	t.true(atLeast(0, iter('abc')));

	t.true(atLeast(1, 'abc'));
	t.true(atLeast(1, new Set('abc')));
	t.true(atLeast(1, iter('abc')));

	t.true(atLeast(3, 'abc'));
	t.true(atLeast(3, new Set('abc')));
	t.true(atLeast(3, iter('abc')));

	t.true(!atLeast(4, 'abc'));
	t.true(!atLeast(4, new Set('abc')));
	t.true(!atLeast(4, iter('abc')));

	t.true(!atLeast(Number.POSITIVE_INFINITY, 'abc'));
	t.true(!atLeast(Number.POSITIVE_INFINITY, new Set('abc')));
	t.true(!atLeast(Number.POSITIVE_INFINITY, iter('abc')));
});
