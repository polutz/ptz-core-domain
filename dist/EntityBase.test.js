'use strict';

var _ptzAssert = require('ptz-assert');

var _index = require('./index');

describe('EntityBase', function () {
    it('should set createdBy', function () {
        var args = {
            createdBy: {
                dtCreated: new Date(),
                ip: '192.168.1.1',
                user: { id: 'test-id' }
            }
        };
        var entity = new _index.EntityBase(args);
        (0, _ptzAssert.equal)(entity.createdBy, args.createdBy);
    });
    it('should set dtChanged', function () {
        var args = {
            dtChanged: new Date()
        };
        var entity = new _index.EntityBase(args);
        (0, _ptzAssert.equal)(entity.dtChanged, args.dtChanged);
    });
    it('should create new Object when null args', function () {
        var entity = new _index.EntityBase(null);
        (0, _ptzAssert.ok)(entity);
    });
});
//# sourceMappingURL=EntityBase.test.js.map