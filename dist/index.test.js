'use strict';

var _ptzAssert = require('ptz-assert');

var _index = require('./index');

var index = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe('ptz-core-domain', () => {
    describe('exports', () => {
        it('generateId', () => (0, _ptzAssert.ok)(index.generateId));
        it('generateIdWith', () => (0, _ptzAssert.ok)(index.generateIdWith));
    });
});
//# sourceMappingURL=index.test.js.map
//# sourceMappingURL=index.test.js.map