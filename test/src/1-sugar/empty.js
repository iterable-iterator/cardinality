import test from 'ava';

import {iter} from '@iterable-iterator/iter';

import {isEmpty} from '../../../src/index.js';

test('isEmpty', (t) => {
	t.true(isEmpty(''));
	t.true(isEmpty(new Set('')));
	t.true(isEmpty(iter('')));

	t.true(!isEmpty('abc'));
	t.true(!isEmpty(new Set('abc')));
	t.true(!isEmpty(iter('abc')));
});
