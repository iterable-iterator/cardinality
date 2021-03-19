import test from 'ava';

import {iter, repeat} from '@aureooms/js-itertools';

import {lt} from '../../../src/index.js';

test('lt', (t) => {
	t.true(!lt(1000, repeat('A')));

	t.true(!lt(-1, ''));
	t.true(!lt(-1, new Set('')));
	t.true(!lt(-1, iter('')));

	t.true(!lt(0, ''));
	t.true(!lt(0, new Set('')));
	t.true(!lt(0, iter('')));

	t.true(lt(1, ''));
	t.true(lt(1, new Set('')));
	t.true(lt(1, iter('')));

	t.true(!lt(Number.NEGATIVE_INFINITY, 'abc'));
	t.true(!lt(Number.NEGATIVE_INFINITY, new Set('abc')));
	t.true(!lt(Number.NEGATIVE_INFINITY, iter('abc')));

	t.true(!lt(0, 'abc'));
	t.true(!lt(0, new Set('abc')));
	t.true(!lt(0, iter('abc')));

	t.true(!lt(1, 'abc'));
	t.true(!lt(1, new Set('abc')));
	t.true(!lt(1, iter('abc')));

	t.true(!lt(3, 'abc'));
	t.true(!lt(3, new Set('abc')));
	t.true(!lt(3, iter('abc')));

	t.true(lt(4, 'abc'));
	t.true(lt(4, new Set('abc')));
	t.true(lt(4, iter('abc')));

	t.true(lt(Number.POSITIVE_INFINITY, 'abc'));
	t.true(lt(Number.POSITIVE_INFINITY, new Set('abc')));
	t.true(lt(Number.POSITIVE_INFINITY, iter('abc')));
});
