'use strict';

var _ptzAssert = require('ptz-assert');

var _index = require('../index');

describe('EntityMinBase', function () {
    describe('Id', function () {
        it('Generate Id', function () {
            var entity = new _index.EntityMinBase({});
            (0, _ptzAssert.notEmptyString)(entity.id);
        });
        it('Set _id to id', function () {
            var id = 'sdfds-sdfd-gfdg-33';
            var entity = new _index.EntityMinBase({ _id: id });
            (0, _ptzAssert.equal)(entity.id, id);
        });
        it('Set id', function () {
            var id = 'sdfds-sdfd-gfdg-33';
            var entity = new _index.EntityMinBase({ id: id });
            (0, _ptzAssert.equal)(entity.id, id);
        });
        it('Generate Id when null object', function () {
            var entity = new _index.EntityMinBase(null);
            (0, _ptzAssert.notEmptyString)(entity.id);
        });
    });
});
//# sourceMappingURL=EntityMinBase.test.js.map
//# sourceMappingURL=EntityMinBase.test.js.map