import test from 'ava';

import {iter} from '@iterable-iterator/iter';
import {repeat} from '@iterable-iterator/repeat';

import {between} from '#module';

test('between', (t) => {
	t.true(!between(0, 1000, repeat('A')));

	t.true(between(-1, 7, ''));
	t.true(between(-1, 7, new Set('')));
	t.true(between(-1, 7, iter('')));

	t.true(between(0, 7, ''));
	t.true(between(0, 7, new Set('')));
	t.true(between(0, 7, iter('')));

	t.true(!between(1, 7, ''));
	t.true(!between(1, 7, new Set('')));
	t.true(!between(1, 7, iter('')));

	t.true(between(Number.NEGATIVE_INFINITY, 7, 'abc'));
	t.true(between(Number.NEGATIVE_INFINITY, 7, new Set('abc')));
	t.true(between(Number.NEGATIVE_INFINITY, 7, iter('abc')));

	t.true(between(0, 7, 'abc'));
	t.true(between(0, 7, new Set('abc')));
	t.true(between(0, 7, iter('abc')));

	t.true(between(1, 7, 'abc'));
	t.true(between(1, 7, new Set('abc')));
	t.true(between(1, 7, iter('abc')));

	t.true(between(3, 7, 'abc'));
	t.true(between(3, 7, new Set('abc')));
	t.true(between(3, 7, iter('abc')));

	t.true(!between(4, 7, 'abc'));
	t.true(!between(4, 7, new Set('abc')));
	t.true(!between(4, 7, iter('abc')));

	t.true(!between(Number.POSITIVE_INFINITY, 7, 'abc'));
	t.true(!between(Number.POSITIVE_INFINITY, 7, new Set('abc')));
	t.true(!between(Number.POSITIVE_INFINITY, 7, iter('abc')));

	t.true(between(-1, 3, ''));
	t.true(between(-1, 3, new Set('')));
	t.true(between(-1, 3, iter('')));

	t.true(between(0, 3, ''));
	t.true(between(0, 3, new Set('')));
	t.true(between(0, 3, iter('')));

	t.true(!between(1, 3, ''));
	t.true(!between(1, 3, new Set('')));
	t.true(!between(1, 3, iter('')));

	t.true(between(Number.NEGATIVE_INFINITY, 3, 'abc'));
	t.true(between(Number.NEGATIVE_INFINITY, 3, new Set('abc')));
	t.true(between(Number.NEGATIVE_INFINITY, 3, iter('abc')));

	t.true(between(0, 3, 'abc'));
	t.true(between(0, 3, new Set('abc')));
	t.true(between(0, 3, iter('abc')));

	t.true(between(1, 3, 'abc'));
	t.true(between(1, 3, new Set('abc')));
	t.true(between(1, 3, iter('abc')));

	t.true(between(3, 3, 'abc'));
	t.true(between(3, 3, new Set('abc')));
	t.true(between(3, 3, iter('abc')));

	t.true(!between(4, 3, 'abc'));
	t.true(!between(4, 3, new Set('abc')));
	t.true(!between(4, 3, iter('abc')));

	t.true(!between(Number.POSITIVE_INFINITY, 3, 'abc'));
	t.true(!between(Number.POSITIVE_INFINITY, 3, new Set('abc')));
	t.true(!between(Number.POSITIVE_INFINITY, 3, iter('abc')));
});

test('between (base cases)', (t) => {
	t.true(between(-1, Number.POSITIVE_INFINITY, ''));
	t.true(between(-1, Number.POSITIVE_INFINITY, new Set('')));
	t.true(between(-1, Number.POSITIVE_INFINITY, iter('')));

	t.true(between(0, Number.POSITIVE_INFINITY, ''));
	t.true(between(0, Number.POSITIVE_INFINITY, new Set('')));
	t.true(between(0, Number.POSITIVE_INFINITY, iter('')));

	t.true(!between(1, Number.POSITIVE_INFINITY, ''));
	t.true(!between(1, Number.POSITIVE_INFINITY, new Set('')));
	t.true(!between(1, Number.POSITIVE_INFINITY, iter('')));

	t.true(between(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, 'abc'));
	t.true(
		between(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, new Set('abc')),
	);
	t.true(
		between(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, iter('abc')),
	);

	t.true(between(0, Number.POSITIVE_INFINITY, 'abc'));
	t.true(between(0, Number.POSITIVE_INFINITY, new Set('abc')));
	t.true(between(0, Number.POSITIVE_INFINITY, iter('abc')));

	t.true(between(1, Number.POSITIVE_INFINITY, 'abc'));
	t.true(between(1, Number.POSITIVE_INFINITY, new Set('abc')));
	t.true(between(1, Number.POSITIVE_INFINITY, iter('abc')));

	t.true(between(3, Number.POSITIVE_INFINITY, 'abc'));
	t.true(between(3, Number.POSITIVE_INFINITY, new Set('abc')));
	t.true(between(3, Number.POSITIVE_INFINITY, iter('abc')));

	t.true(!between(4, Number.POSITIVE_INFINITY, 'abc'));
	t.true(!between(4, Number.POSITIVE_INFINITY, new Set('abc')));
	t.true(!between(4, Number.POSITIVE_INFINITY, iter('abc')));

	t.true(!between(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, 'abc'));
	t.true(
		!between(
			Number.POSITIVE_INFINITY,
			Number.POSITIVE_INFINITY,
			new Set('abc'),
		),
	);
	t.true(
		!between(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, iter('abc')),
	);

	t.true(!between(0, -1, ''));
	t.true(!between(0, -1, new Set('')));
	t.true(!between(0, -1, iter('')));

	t.true(between(0, 0, ''));
	t.true(between(0, 0, new Set('')));
	t.true(between(0, 0, iter('')));

	t.true(between(0, 1, ''));
	t.true(between(0, 1, new Set('')));
	t.true(between(0, 1, iter('')));

	t.true(!between(0, Number.NEGATIVE_INFINITY, 'abc'));
	t.true(!between(0, Number.NEGATIVE_INFINITY, new Set('abc')));
	t.true(!between(0, Number.NEGATIVE_INFINITY, iter('abc')));

	t.true(!between(0, 0, 'abc'));
	t.true(!between(0, 0, new Set('abc')));
	t.true(!between(0, 0, iter('abc')));

	t.true(!between(0, 1, 'abc'));
	t.true(!between(0, 1, new Set('abc')));
	t.true(!between(0, 1, iter('abc')));

	t.true(between(0, 3, 'abc'));
	t.true(between(0, 3, new Set('abc')));
	t.true(between(0, 3, iter('abc')));

	t.true(between(0, 4, 'abc'));
	t.true(between(0, 4, new Set('abc')));
	t.true(between(0, 4, iter('abc')));

	t.true(between(0, Number.POSITIVE_INFINITY, 'abc'));
	t.true(between(0, Number.POSITIVE_INFINITY, new Set('abc')));
	t.true(between(0, Number.POSITIVE_INFINITY, iter('abc')));

	t.true(!between(Number.NEGATIVE_INFINITY, -1, ''));
	t.true(!between(Number.NEGATIVE_INFINITY, -1, new Set('')));
	t.true(!between(Number.NEGATIVE_INFINITY, -1, iter('')));

	t.true(between(Number.NEGATIVE_INFINITY, 0, ''));
	t.true(between(Number.NEGATIVE_INFINITY, 0, new Set('')));
	t.true(between(Number.NEGATIVE_INFINITY, 0, iter('')));

	t.true(between(Number.NEGATIVE_INFINITY, 1, ''));
	t.true(between(Number.NEGATIVE_INFINITY, 1, new Set('')));
	t.true(between(Number.NEGATIVE_INFINITY, 1, iter('')));

	t.true(!between(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, 'abc'));
	t.true(
		!between(
			Number.NEGATIVE_INFINITY,
			Number.NEGATIVE_INFINITY,
			new Set('abc'),
		),
	);
	t.true(
		!between(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, iter('abc')),
	);

	t.true(!between(Number.NEGATIVE_INFINITY, 0, 'abc'));
	t.true(!between(Number.NEGATIVE_INFINITY, 0, new Set('abc')));
	t.true(!between(Number.NEGATIVE_INFINITY, 0, iter('abc')));

	t.true(!between(Number.NEGATIVE_INFINITY, 1, 'abc'));
	t.true(!between(Number.NEGATIVE_INFINITY, 1, new Set('abc')));
	t.true(!between(Number.NEGATIVE_INFINITY, 1, iter('abc')));

	t.true(between(Number.NEGATIVE_INFINITY, 3, 'abc'));
	t.true(between(Number.NEGATIVE_INFINITY, 3, new Set('abc')));
	t.true(between(Number.NEGATIVE_INFINITY, 3, iter('abc')));

	t.true(between(Number.NEGATIVE_INFINITY, 4, 'abc'));
	t.true(between(Number.NEGATIVE_INFINITY, 4, new Set('abc')));
	t.true(between(Number.NEGATIVE_INFINITY, 4, iter('abc')));

	t.true(between(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, 'abc'));
	t.true(
		between(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, new Set('abc')),
	);
	t.true(
		between(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, iter('abc')),
	);

	t.true(between(-1, 2, ''));
	t.true(between(-1, 2, new Set('')));
	t.true(between(-1, 2, iter('')));

	t.true(between(0, 2, ''));
	t.true(between(0, 2, new Set('')));
	t.true(between(0, 2, iter('')));

	t.true(!between(1, 2, ''));
	t.true(!between(1, 2, new Set('')));
	t.true(!between(1, 2, iter('')));

	t.true(!between(Number.NEGATIVE_INFINITY, 2, 'abc'));
	t.true(!between(Number.NEGATIVE_INFINITY, 2, new Set('abc')));
	t.true(!between(Number.NEGATIVE_INFINITY, 2, iter('abc')));

	t.true(!between(0, 2, 'abc'));
	t.true(!between(0, 2, new Set('abc')));
	t.true(!between(0, 2, iter('abc')));

	t.true(!between(1, 2, 'abc'));
	t.true(!between(1, 2, new Set('abc')));
	t.true(!between(1, 2, iter('abc')));

	t.true(!between(3, 2, 'abc'));
	t.true(!between(3, 2, new Set('abc')));
	t.true(!between(3, 2, iter('abc')));

	t.true(!between(4, 2, 'abc'));
	t.true(!between(4, 2, new Set('abc')));
	t.true(!between(4, 2, iter('abc')));

	t.true(!between(Number.POSITIVE_INFINITY, 2, 'abc'));
	t.true(!between(Number.POSITIVE_INFINITY, 2, new Set('abc')));
	t.true(!between(Number.POSITIVE_INFINITY, 2, iter('abc')));
});
