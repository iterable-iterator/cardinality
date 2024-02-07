import test from 'ava';
import {iter} from '@iterable-iterator/iter';
import {repeat} from '@iterable-iterator/repeat';

import {gele} from '#module';

test('gele', (t) => {
	t.true(!gele(0, 1000, repeat('A')));

	t.true(gele(-1, 7, ''));
	t.true(gele(-1, 7, new Set('')));
	t.true(gele(-1, 7, iter('')));

	t.true(gele(0, 7, ''));
	t.true(gele(0, 7, new Set('')));
	t.true(gele(0, 7, iter('')));

	t.true(!gele(1, 7, ''));
	t.true(!gele(1, 7, new Set('')));
	t.true(!gele(1, 7, iter('')));

	t.true(gele(Number.NEGATIVE_INFINITY, 7, 'abc'));
	t.true(gele(Number.NEGATIVE_INFINITY, 7, new Set('abc')));
	t.true(gele(Number.NEGATIVE_INFINITY, 7, iter('abc')));

	t.true(gele(0, 7, 'abc'));
	t.true(gele(0, 7, new Set('abc')));
	t.true(gele(0, 7, iter('abc')));

	t.true(gele(1, 7, 'abc'));
	t.true(gele(1, 7, new Set('abc')));
	t.true(gele(1, 7, iter('abc')));

	t.true(gele(3, 7, 'abc'));
	t.true(gele(3, 7, new Set('abc')));
	t.true(gele(3, 7, iter('abc')));

	t.true(!gele(4, 7, 'abc'));
	t.true(!gele(4, 7, new Set('abc')));
	t.true(!gele(4, 7, iter('abc')));

	t.true(!gele(Number.POSITIVE_INFINITY, 7, 'abc'));
	t.true(!gele(Number.POSITIVE_INFINITY, 7, new Set('abc')));
	t.true(!gele(Number.POSITIVE_INFINITY, 7, iter('abc')));

	t.true(gele(-1, 3, ''));
	t.true(gele(-1, 3, new Set('')));
	t.true(gele(-1, 3, iter('')));

	t.true(gele(0, 3, ''));
	t.true(gele(0, 3, new Set('')));
	t.true(gele(0, 3, iter('')));

	t.true(!gele(1, 3, ''));
	t.true(!gele(1, 3, new Set('')));
	t.true(!gele(1, 3, iter('')));

	t.true(gele(Number.NEGATIVE_INFINITY, 3, 'abc'));
	t.true(gele(Number.NEGATIVE_INFINITY, 3, new Set('abc')));
	t.true(gele(Number.NEGATIVE_INFINITY, 3, iter('abc')));

	t.true(gele(0, 3, 'abc'));
	t.true(gele(0, 3, new Set('abc')));
	t.true(gele(0, 3, iter('abc')));

	t.true(gele(1, 3, 'abc'));
	t.true(gele(1, 3, new Set('abc')));
	t.true(gele(1, 3, iter('abc')));

	t.true(gele(3, 3, 'abc'));
	t.true(gele(3, 3, new Set('abc')));
	t.true(gele(3, 3, iter('abc')));

	t.true(!gele(4, 3, 'abc'));
	t.true(!gele(4, 3, new Set('abc')));
	t.true(!gele(4, 3, iter('abc')));

	t.true(!gele(Number.POSITIVE_INFINITY, 3, 'abc'));
	t.true(!gele(Number.POSITIVE_INFINITY, 3, new Set('abc')));
	t.true(!gele(Number.POSITIVE_INFINITY, 3, iter('abc')));
});

test('gele (base cases)', (t) => {
	t.true(gele(-1, Number.POSITIVE_INFINITY, ''));
	t.true(gele(-1, Number.POSITIVE_INFINITY, new Set('')));
	t.true(gele(-1, Number.POSITIVE_INFINITY, iter('')));

	t.true(gele(0, Number.POSITIVE_INFINITY, ''));
	t.true(gele(0, Number.POSITIVE_INFINITY, new Set('')));
	t.true(gele(0, Number.POSITIVE_INFINITY, iter('')));

	t.true(!gele(1, Number.POSITIVE_INFINITY, ''));
	t.true(!gele(1, Number.POSITIVE_INFINITY, new Set('')));
	t.true(!gele(1, Number.POSITIVE_INFINITY, iter('')));

	t.true(gele(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, 'abc'));
	t.true(
		gele(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, new Set('abc')),
	);
	t.true(gele(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, iter('abc')));

	t.true(gele(0, Number.POSITIVE_INFINITY, 'abc'));
	t.true(gele(0, Number.POSITIVE_INFINITY, new Set('abc')));
	t.true(gele(0, Number.POSITIVE_INFINITY, iter('abc')));

	t.true(gele(1, Number.POSITIVE_INFINITY, 'abc'));
	t.true(gele(1, Number.POSITIVE_INFINITY, new Set('abc')));
	t.true(gele(1, Number.POSITIVE_INFINITY, iter('abc')));

	t.true(gele(3, Number.POSITIVE_INFINITY, 'abc'));
	t.true(gele(3, Number.POSITIVE_INFINITY, new Set('abc')));
	t.true(gele(3, Number.POSITIVE_INFINITY, iter('abc')));

	t.true(!gele(4, Number.POSITIVE_INFINITY, 'abc'));
	t.true(!gele(4, Number.POSITIVE_INFINITY, new Set('abc')));
	t.true(!gele(4, Number.POSITIVE_INFINITY, iter('abc')));

	t.true(!gele(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, 'abc'));
	t.true(
		!gele(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, new Set('abc')),
	);
	t.true(
		!gele(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, iter('abc')),
	);

	t.true(!gele(0, -1, ''));
	t.true(!gele(0, -1, new Set('')));
	t.true(!gele(0, -1, iter('')));

	t.true(gele(0, 0, ''));
	t.true(gele(0, 0, new Set('')));
	t.true(gele(0, 0, iter('')));

	t.true(gele(0, 1, ''));
	t.true(gele(0, 1, new Set('')));
	t.true(gele(0, 1, iter('')));

	t.true(!gele(0, Number.NEGATIVE_INFINITY, 'abc'));
	t.true(!gele(0, Number.NEGATIVE_INFINITY, new Set('abc')));
	t.true(!gele(0, Number.NEGATIVE_INFINITY, iter('abc')));

	t.true(!gele(0, 0, 'abc'));
	t.true(!gele(0, 0, new Set('abc')));
	t.true(!gele(0, 0, iter('abc')));

	t.true(!gele(0, 1, 'abc'));
	t.true(!gele(0, 1, new Set('abc')));
	t.true(!gele(0, 1, iter('abc')));

	t.true(gele(0, 3, 'abc'));
	t.true(gele(0, 3, new Set('abc')));
	t.true(gele(0, 3, iter('abc')));

	t.true(gele(0, 4, 'abc'));
	t.true(gele(0, 4, new Set('abc')));
	t.true(gele(0, 4, iter('abc')));

	t.true(gele(0, Number.POSITIVE_INFINITY, 'abc'));
	t.true(gele(0, Number.POSITIVE_INFINITY, new Set('abc')));
	t.true(gele(0, Number.POSITIVE_INFINITY, iter('abc')));

	t.true(!gele(Number.NEGATIVE_INFINITY, -1, ''));
	t.true(!gele(Number.NEGATIVE_INFINITY, -1, new Set('')));
	t.true(!gele(Number.NEGATIVE_INFINITY, -1, iter('')));

	t.true(gele(Number.NEGATIVE_INFINITY, 0, ''));
	t.true(gele(Number.NEGATIVE_INFINITY, 0, new Set('')));
	t.true(gele(Number.NEGATIVE_INFINITY, 0, iter('')));

	t.true(gele(Number.NEGATIVE_INFINITY, 1, ''));
	t.true(gele(Number.NEGATIVE_INFINITY, 1, new Set('')));
	t.true(gele(Number.NEGATIVE_INFINITY, 1, iter('')));

	t.true(!gele(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, 'abc'));
	t.true(
		!gele(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, new Set('abc')),
	);
	t.true(
		!gele(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, iter('abc')),
	);

	t.true(!gele(Number.NEGATIVE_INFINITY, 0, 'abc'));
	t.true(!gele(Number.NEGATIVE_INFINITY, 0, new Set('abc')));
	t.true(!gele(Number.NEGATIVE_INFINITY, 0, iter('abc')));

	t.true(!gele(Number.NEGATIVE_INFINITY, 1, 'abc'));
	t.true(!gele(Number.NEGATIVE_INFINITY, 1, new Set('abc')));
	t.true(!gele(Number.NEGATIVE_INFINITY, 1, iter('abc')));

	t.true(gele(Number.NEGATIVE_INFINITY, 3, 'abc'));
	t.true(gele(Number.NEGATIVE_INFINITY, 3, new Set('abc')));
	t.true(gele(Number.NEGATIVE_INFINITY, 3, iter('abc')));

	t.true(gele(Number.NEGATIVE_INFINITY, 4, 'abc'));
	t.true(gele(Number.NEGATIVE_INFINITY, 4, new Set('abc')));
	t.true(gele(Number.NEGATIVE_INFINITY, 4, iter('abc')));

	t.true(gele(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, 'abc'));
	t.true(
		gele(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, new Set('abc')),
	);
	t.true(gele(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, iter('abc')));

	t.true(gele(-1, 2, ''));
	t.true(gele(-1, 2, new Set('')));
	t.true(gele(-1, 2, iter('')));

	t.true(gele(0, 2, ''));
	t.true(gele(0, 2, new Set('')));
	t.true(gele(0, 2, iter('')));

	t.true(!gele(1, 2, ''));
	t.true(!gele(1, 2, new Set('')));
	t.true(!gele(1, 2, iter('')));

	t.true(!gele(Number.NEGATIVE_INFINITY, 2, 'abc'));
	t.true(!gele(Number.NEGATIVE_INFINITY, 2, new Set('abc')));
	t.true(!gele(Number.NEGATIVE_INFINITY, 2, iter('abc')));

	t.true(!gele(0, 2, 'abc'));
	t.true(!gele(0, 2, new Set('abc')));
	t.true(!gele(0, 2, iter('abc')));

	t.true(!gele(1, 2, 'abc'));
	t.true(!gele(1, 2, new Set('abc')));
	t.true(!gele(1, 2, iter('abc')));

	t.true(!gele(3, 2, 'abc'));
	t.true(!gele(3, 2, new Set('abc')));
	t.true(!gele(3, 2, iter('abc')));

	t.true(!gele(4, 2, 'abc'));
	t.true(!gele(4, 2, new Set('abc')));
	t.true(!gele(4, 2, iter('abc')));

	t.true(!gele(Number.POSITIVE_INFINITY, 2, 'abc'));
	t.true(!gele(Number.POSITIVE_INFINITY, 2, new Set('abc')));
	t.true(!gele(Number.POSITIVE_INFINITY, 2, iter('abc')));
});
