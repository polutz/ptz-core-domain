'use strict';

var _ptzAssert = require('ptz-assert');

var _EntityMinBase = require('./EntityMinBase');

var _EntityMinBase2 = _interopRequireDefault(_EntityMinBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EntityMinBase', function () {
    describe('Id', function () {
        it('Generate Id', function () {
            var entity = new _EntityMinBase2.default({});
            (0, _ptzAssert.notEmptyString)(entity.id);
        });
        it('Set _id to id', function () {
            var id = 'sdfds-sdfd-gfdg-33';
            var entity = new _EntityMinBase2.default({ _id: id });
            (0, _ptzAssert.equal)(entity.id, id);
        });
        it('Set id', function () {
            var id = 'sdfds-sdfd-gfdg-33';
            var entity = new _EntityMinBase2.default({ id: id });
            (0, _ptzAssert.equal)(entity.id, id);
        });
    });
    describe('Errors', function () {
        it('should addError when errors is null', function () {
            var errorKey = 'ERROR_';
            var entity = new _EntityMinBase2.default({ errors: null });
            entity.addError(errorKey);
            (0, _ptzAssert.contains)(entity.errors, errorKey);
        });
        it('should addError when errors exists', function () {
            var errorKey = 'ERROR_';
            var entity = new _EntityMinBase2.default({ errors: ['ERROR_ANOTHER_ERROR'] });
            entity.addError(errorKey);
            (0, _ptzAssert.contains)(entity.errors, errorKey);
        });
    });
    describe('IsValid', function () {
        it('should return true when errors is null', function () {
            var entity = new _EntityMinBase2.default({ errors: null });
            (0, _ptzAssert.ok)(entity.isValid());
        });
        it('should return true when error is empty', function () {
            var entity = new _EntityMinBase2.default({ errors: [] });
            (0, _ptzAssert.ok)(entity.isValid());
        });
        it('should return false when there are errors', function () {
            var entity = new _EntityMinBase2.default({ errors: ['ERROR_ANOTHER_ERROR'] });
            (0, _ptzAssert.notOk)(entity.isValid());
        });
    });
    describe('throwErrorIfIsInvalid', function () {
        it('should not throw error when errors is null', function () {
            var entity = new _EntityMinBase2.default({ errors: null });
            entity.throwErrorIfIsInvalid();
        });
        it('should not throw error when errors is empty', function () {
            var entity = new _EntityMinBase2.default({ errors: [] });
            entity.throwErrorIfIsInvalid();
        });
        it('should throw error when there are errors', function () {
            var entity = new _EntityMinBase2.default({ errors: ['ERROR_ANOTHER_ERROR'] });
            (0, _ptzAssert.throws)(function () {
                entity.throwErrorIfIsInvalid();
            });
        });
    });
});