import test from 'ava';

import {iter, repeat} from '@aureooms/js-itertools';

import {atMost} from '../../../src/index.js';

test('atMost', (t) => {
	t.true(!atMost(1000, repeat('A')));

	t.true(!atMost(-1, ''));
	t.true(!atMost(-1, new Set('')));
	t.true(!atMost(-1, iter('')));

	t.true(atMost(0, ''));
	t.true(atMost(0, new Set('')));
	t.true(atMost(0, iter('')));

	t.true(atMost(1, ''));
	t.true(atMost(1, new Set('')));
	t.true(atMost(1, iter('')));

	t.true(!atMost(Number.NEGATIVE_INFINITY, 'abc'));
	t.true(!atMost(Number.NEGATIVE_INFINITY, new Set('abc')));
	t.true(!atMost(Number.NEGATIVE_INFINITY, iter('abc')));

	t.true(!atMost(0, 'abc'));
	t.true(!atMost(0, new Set('abc')));
	t.true(!atMost(0, iter('abc')));

	t.true(!atMost(1, 'abc'));
	t.true(!atMost(1, new Set('abc')));
	t.true(!atMost(1, iter('abc')));

	t.true(atMost(3, 'abc'));
	t.true(atMost(3, new Set('abc')));
	t.true(atMost(3, iter('abc')));

	t.true(atMost(4, 'abc'));
	t.true(atMost(4, new Set('abc')));
	t.true(atMost(4, iter('abc')));

	t.true(atMost(Number.POSITIVE_INFINITY, 'abc'));
	t.true(atMost(Number.POSITIVE_INFINITY, new Set('abc')));
	t.true(atMost(Number.POSITIVE_INFINITY, iter('abc')));
});
