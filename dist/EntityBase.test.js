'use strict';

var _ptzAssert = require('ptz-assert');

var _EntityBase = require('./EntityBase');

var _EntityBase2 = _interopRequireDefault(_EntityBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EntityBase', function () {
    it('should set createdBy', function () {
        var args = {
            createdBy: {
                userName: 'allanegidio',
                name: 'Allan Egidio',
                dtCreated: new Date(),
                ip: '192.168.1.1',
                userId: 'aswwds423432'
            }
        };
        var entity = new _EntityBase2.default(args);
        (0, _ptzAssert.equal)(entity.createdBy, args.createdBy);
    });
    it('should set dtChanged', function () {
        var args = {
            dtChanged: new Date()
        };
        var entity = new _EntityBase2.default(args);
        (0, _ptzAssert.equal)(entity.dtChanged, args.dtChanged);
    });
    it('should create new Object when null args', function () {
        var entity = new _EntityBase2.default(null);
        (0, _ptzAssert.ok)(entity);
    });
});