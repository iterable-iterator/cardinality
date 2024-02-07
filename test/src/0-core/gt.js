import test from 'ava';

import {iter} from '@iterable-iterator/iter';
import {repeat} from '@iterable-iterator/repeat';

import {gt} from '#module';

test('gt', (t) => {
	t.true(gt(1000, repeat('A')));

	t.true(gt(-1, ''));
	t.true(gt(-1, new Set('')));
	t.true(gt(-1, iter('')));

	t.true(!gt(0, ''));
	t.true(!gt(0, new Set('')));
	t.true(!gt(0, iter('')));

	t.true(!gt(1, ''));
	t.true(!gt(1, new Set('')));
	t.true(!gt(1, iter('')));

	t.true(gt(Number.NEGATIVE_INFINITY, 'abc'));
	t.true(gt(Number.NEGATIVE_INFINITY, new Set('abc')));
	t.true(gt(Number.NEGATIVE_INFINITY, iter('abc')));

	t.true(gt(0, 'abc'));
	t.true(gt(0, new Set('abc')));
	t.true(gt(0, iter('abc')));

	t.true(gt(1, 'abc'));
	t.true(gt(1, new Set('abc')));
	t.true(gt(1, iter('abc')));

	t.true(!gt(3, 'abc'));
	t.true(!gt(3, new Set('abc')));
	t.true(!gt(3, iter('abc')));

	t.true(!gt(4, 'abc'));
	t.true(!gt(4, new Set('abc')));
	t.true(!gt(4, iter('abc')));

	t.true(!gt(Number.POSITIVE_INFINITY, 'abc'));
	t.true(!gt(Number.POSITIVE_INFINITY, new Set('abc')));
	t.true(!gt(Number.POSITIVE_INFINITY, iter('abc')));
});
