'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = gele;

var _le = require('./le');

var _le2 = _interopRequireDefault(_le);

var _ge = require('./ge');

var _ge2 = _interopRequireDefault(_ge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function gele(m, n, iterable) {

	if (n < m) return false;

	if (n < 0) return false;

	if (m <= 0) return (0, _le2.default)(n, iterable);

	if (n === Infinity) return (0, _ge2.default)(m, iterable);

	if (iterable.length !== undefined) return m <= iterable.length && iterable.length <= n;

	if (iterable.size !== undefined) return m <= iterable.size && iterable.size <= n;

	var it = iterable[Symbol.iterator]();

	n -= m;

	for (; m > 0; --m) {
		if (it.next().done) return false;
	}for (; n > 0; --n) {
		if (it.next().done) return true;
	}return it.next().done;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy8wLWNvcmUvZ2VsZS5qcyJdLCJuYW1lcyI6WyJnZWxlIiwibSIsIm4iLCJpdGVyYWJsZSIsIkluZmluaXR5IiwibGVuZ3RoIiwidW5kZWZpbmVkIiwic2l6ZSIsIml0IiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJuZXh0IiwiZG9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBR3dCQSxJOztBQUh4Qjs7OztBQUNBOzs7Ozs7QUFFZSxTQUFTQSxJQUFULENBQWdCQyxDQUFoQixFQUFvQkMsQ0FBcEIsRUFBd0JDLFFBQXhCLEVBQW1DOztBQUVqRCxLQUFLRCxJQUFJRCxDQUFULEVBQWEsT0FBTyxLQUFQOztBQUViLEtBQUtDLElBQUksQ0FBVCxFQUFhLE9BQU8sS0FBUDs7QUFFYixLQUFLRCxLQUFLLENBQVYsRUFBYyxPQUFPLGtCQUFJQyxDQUFKLEVBQVFDLFFBQVIsQ0FBUDs7QUFFZCxLQUFLRCxNQUFNRSxRQUFYLEVBQXNCLE9BQU8sa0JBQUlILENBQUosRUFBUUUsUUFBUixDQUFQOztBQUV0QixLQUFLQSxTQUFTRSxNQUFULEtBQW9CQyxTQUF6QixFQUFxQyxPQUFPTCxLQUFLRSxTQUFTRSxNQUFkLElBQXdCRixTQUFTRSxNQUFULElBQW1CSCxDQUFsRDs7QUFFckMsS0FBS0MsU0FBU0ksSUFBVCxLQUFrQkQsU0FBdkIsRUFBbUMsT0FBT0wsS0FBS0UsU0FBU0ksSUFBZCxJQUFzQkosU0FBU0ksSUFBVCxJQUFpQkwsQ0FBOUM7O0FBRW5DLEtBQU1NLEtBQUtMLFNBQVNNLE9BQU9DLFFBQWhCLEdBQVg7O0FBRUFSLE1BQUtELENBQUw7O0FBRUEsUUFBUUEsSUFBSSxDQUFaLEVBQWdCLEVBQUVBLENBQWxCO0FBQXNCLE1BQUtPLEdBQUdHLElBQUgsR0FBV0MsSUFBaEIsRUFBdUIsT0FBTyxLQUFQO0FBQTdDLEVBQ0EsT0FBUVYsSUFBSSxDQUFaLEVBQWdCLEVBQUVBLENBQWxCO0FBQXNCLE1BQUtNLEdBQUdHLElBQUgsR0FBV0MsSUFBaEIsRUFBdUIsT0FBTyxJQUFQO0FBQTdDLEVBRUEsT0FBT0osR0FBR0csSUFBSCxHQUFXQyxJQUFsQjtBQUVBIiwiZmlsZSI6ImdlbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbGUgZnJvbSAnLi9sZScgO1xuaW1wb3J0IGdlIGZyb20gJy4vZ2UnIDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VsZSAoIG0gLCBuICwgaXRlcmFibGUgKSB7XG5cblx0aWYgKCBuIDwgbSApIHJldHVybiBmYWxzZSA7XG5cblx0aWYgKCBuIDwgMCApIHJldHVybiBmYWxzZSA7XG5cblx0aWYgKCBtIDw9IDAgKSByZXR1cm4gbGUoIG4gLCBpdGVyYWJsZSApIDtcblxuXHRpZiAoIG4gPT09IEluZmluaXR5ICkgcmV0dXJuIGdlKCBtICwgaXRlcmFibGUgKSA7XG5cblx0aWYgKCBpdGVyYWJsZS5sZW5ndGggIT09IHVuZGVmaW5lZCApIHJldHVybiBtIDw9IGl0ZXJhYmxlLmxlbmd0aCAmJiBpdGVyYWJsZS5sZW5ndGggPD0gbiA7XG5cblx0aWYgKCBpdGVyYWJsZS5zaXplICE9PSB1bmRlZmluZWQgKSByZXR1cm4gbSA8PSBpdGVyYWJsZS5zaXplICYmIGl0ZXJhYmxlLnNpemUgPD0gbiA7XG5cblx0Y29uc3QgaXQgPSBpdGVyYWJsZVtTeW1ib2wuaXRlcmF0b3JdKCApIDtcblxuXHRuIC09IG0gO1xuXG5cdGZvciAoIDsgbSA+IDAgOyAtLW0gKSBpZiAoIGl0Lm5leHQoICkuZG9uZSApIHJldHVybiBmYWxzZSA7XG5cdGZvciAoIDsgbiA+IDAgOyAtLW4gKSBpZiAoIGl0Lm5leHQoICkuZG9uZSApIHJldHVybiB0cnVlIDtcblxuXHRyZXR1cm4gaXQubmV4dCggKS5kb25lIDtcblxufVxuXG5cbiJdfQ==