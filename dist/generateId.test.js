'use strict';

var _ptzAssert = require('ptz-assert');

var assert = _interopRequireWildcard(_ptzAssert);

var _index = require('./index');

var Core = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe('generateId', () => {
    it('Generate Id', () => {
        const entity = Core.generateId({});
        assert.notEmptyString(entity.id);
    });
    it('Set _id to id', () => {
        const id = 'jh47mk2';
        const entity = Core.generateId({ _id: id });
        assert.equal(entity.id, id);
    });
    it('Set id', () => {
        const id = 'jh47mk2';
        const entity = Core.generateId({ id });
        assert.equal(entity.id, id);
    });
    it('Generate Id when null object', () => {
        const entity = Core.generateId(null);
        assert.notEmptyString(entity.id);
    });
});
//# sourceMappingURL=generateId.test.js.map
//# sourceMappingURL=generateId.test.js.map