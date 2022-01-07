import randomIP from './index.js';
import test from 'ava';

test('randomIP return type to be string', t => {
	t.is(typeof randomIP(), 'string');
});

