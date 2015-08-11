"use strict";

(function () {

	'use strict';

	var definition = function definition(exports, undefined) {

		/* js/src/0-core */
		/* js/src/0-core/eq.js */

		var eq = function eq(n, iterable) {

			if (n < 0 || n !== (n | 0)) return false;

			if (iterable.length !== undefined) return iterable.length === n;

			if (iterable.size !== undefined) return iterable.size === n;

			var it = iterable[Symbol.iterator]();

			for (; n > 0; --n) if (it.next().done) return false;

			return it.next().done;
		};

		exports.eq = eq;

		/* js/src/0-core/ge.js */

		var ge = function ge(n, iterable) {

			return gt(n - 1, iterable);
		};

		exports.ge = ge;

		/* js/src/0-core/gele.js */

		var gele = function gele(m, n, iterable) {

			if (n < m) return false;

			if (n < 0) return false;

			if (m <= 0) return le(n, iterable);

			if (n === Infinity) return ge(m, iterable);

			if (iterable.length !== undefined) return m <= iterable.length && iterable.length <= n;

			if (iterable.size !== undefined) return m <= iterable.size && iterable.size <= n;

			var it = iterable[Symbol.iterator]();

			n -= m;

			for (; m > 0; --m) if (it.next().done) return false;
			for (; n > 0; --n) if (it.next().done) return true;

			return it.next().done;
		};

		exports.gele = gele;

		/* js/src/0-core/gelt.js */

		var gelt = function gelt(m, n, iterable) {

			return gele(m, n - 1, iterable);
		};

		exports.gelt = gelt;

		/* js/src/0-core/gt.js */

		var gt = function gt(n, iterable) {

			return !le(n, iterable);
		};

		exports.gt = gt;

		/* js/src/0-core/gtle.js */

		var gtle = function gtle(m, n, iterable) {

			return gele(m + 1, n, iterable);
		};

		exports.gtle = gtle;

		/* js/src/0-core/gtlt.js */

		var gtlt = function gtlt(m, n, iterable) {

			return gele(m + 1, n - 1, iterable);
		};

		exports.gtlt = gtlt;

		/* js/src/0-core/le.js */

		var le = function le(n, iterable) {

			if (n < 0) return false;

			if (iterable.length !== undefined) return iterable.length <= n;

			if (iterable.size !== undefined) return iterable.size <= n;

			var it = iterable[Symbol.iterator]();

			for (; n > 0; --n) if (it.next().done) return true;

			return it.next().done;
		};

		exports.le = le;

		/* js/src/0-core/len.js */

		var len = function len(iterable) {

			if (iterable.length !== undefined) return iterable.length;

			if (iterable.size !== undefined) return iterable.size;

			var it = iterable[Symbol.iterator]();

			var n = 0;

			while (!it.next().done) ++n;

			return n;
		};

		exports.len = len;

		/* js/src/0-core/lt.js */

		var lt = function lt(n, iterable) {

			return le(n - 1, iterable);
		};

		exports.lt = lt;

		/* js/src/0-core/ne.js */

		var ne = function ne(n, iterable) {

			return !eq(n, iterable);
		};

		exports.ne = ne;

		/* js/src/1-sugar.js */
		exports.count = len;
		exports.at_least = ge;
		exports.at_most = le;
		exports.between = gele;
		exports.empty = function (iterable) {
			return eq(0, iterable);
		};

		return exports;
	};
	if (typeof exports === "object") {
		definition(exports);
	} else if (typeof define === "function" && define.amd) {
		define("aureooms-js-cardinality", [], function () {
			return definition({});
		});
	} else if (typeof window === "object" && typeof window.document === "object") {
		definition(window["cardinality"] = {});
	} else console.error("unable to detect type of module to define for aureooms-js-cardinality");
})();