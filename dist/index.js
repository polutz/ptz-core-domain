'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _generateId = require('./generateId');

Object.keys(_generateId).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _generateId[key];
    }
  });
});
//# sourceMappingURL=index.js.map