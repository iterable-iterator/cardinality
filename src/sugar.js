import {len, ge, le, gele, eq} from './core/index.js';

export const count = len;
export const atLeast = ge;
export const atMost = le;
export const between = gele;
export const isEmpty = (iterable) => eq(0, iterable);
