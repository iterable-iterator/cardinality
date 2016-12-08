'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.empty = exports.between = exports.at_most = exports.at_least = exports.count = undefined;

var _core = require('./0-core');

var count = exports.count = _core.len;
var at_least = exports.at_least = _core.ge;
var at_most = exports.at_most = _core.le;
var between = exports.between = _core.gele;
var empty = exports.empty = function empty(iterable) {
  return (0, _core.eq)(0, iterable);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy8xLXN1Z2FyLmpzIl0sIm5hbWVzIjpbImNvdW50IiwiYXRfbGVhc3QiLCJhdF9tb3N0IiwiYmV0d2VlbiIsImVtcHR5IiwiaXRlcmFibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFTyxJQUFNQSxpQ0FBTjtBQUNBLElBQU1DLHNDQUFOO0FBQ0EsSUFBTUMsb0NBQU47QUFDQSxJQUFNQyxzQ0FBTjtBQUNBLElBQU1DLHdCQUFRLFNBQVJBLEtBQVEsQ0FBRUMsUUFBRjtBQUFBLFNBQWdCLGNBQUksQ0FBSixFQUFRQSxRQUFSLENBQWhCO0FBQUEsQ0FBZCIsImZpbGUiOiIxLXN1Z2FyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGVuICwgZ2UgLCBsZSAsIGdlbGUgLCBlcSB9IGZyb20gJy4vMC1jb3JlJyA7XG5cbmV4cG9ydCBjb25zdCBjb3VudCA9IGxlbiA7XG5leHBvcnQgY29uc3QgYXRfbGVhc3QgPSBnZSA7XG5leHBvcnQgY29uc3QgYXRfbW9zdCA9IGxlIDtcbmV4cG9ydCBjb25zdCBiZXR3ZWVuID0gZ2VsZSA7XG5leHBvcnQgY29uc3QgZW1wdHkgPSAoIGl0ZXJhYmxlICkgPT4gZXEoIDAgLCBpdGVyYWJsZSApIDtcbiJdfQ==