'use strict';

var _ptzAssert = require('ptz-assert');

var _index = require('./index');

describe('HaveValidation', function () {
    describe('addError', function () {
        it('do not throw error when args.errors is null', function () {
            var errorKey = 'ERROR_';
            var entity = new _index.HaveValidation({ errors: null });
            entity.addError(errorKey);
            (0, _ptzAssert.contains)(entity.errors, errorKey);
        });
        it('add errors from args.errors', function () {
            var errorKey = 'ERROR_';
            var errorArgsKey = 'ERROR_ANOTHER_ERROR';
            var entity = new _index.HaveValidation({ errors: [errorArgsKey] });
            entity.addError(errorKey);
            (0, _ptzAssert.contains)(entity.errors, errorArgsKey);
            (0, _ptzAssert.contains)(entity.errors, errorKey);
        });
        it('does not duplicate errors', function () {
            var errorKey = 'ERROR_';
            var entity = new _index.HaveValidation({ errors: [errorKey] });
            entity.addError(errorKey);
            (0, _ptzAssert.containsNTimes)(entity.errors, errorKey, 1);
        });
    });
    describe('IsValid', function () {
        it('should return true when errors is null', function () {
            var entity = new _index.HaveValidation({ errors: null });
            (0, _ptzAssert.ok)(entity.isValid());
        });
        it('should return true when error is empty', function () {
            var entity = new _index.HaveValidation({ errors: [] });
            (0, _ptzAssert.ok)(entity.isValid());
        });
        it('should return false when there are errors', function () {
            var entity = new _index.HaveValidation({ errors: ['ERROR_ANOTHER_ERROR'] });
            (0, _ptzAssert.notOk)(entity.isValid());
        });
    });
    describe('throwErrorIfIsInvalid', function () {
        it('should not throw error when errors is null', function () {
            var entity = new _index.HaveValidation({ errors: null });
            entity.throwErrorIfIsInvalid();
        });
        it('should not throw error when errors is empty', function () {
            var entity = new _index.HaveValidation({ errors: [] });
            entity.throwErrorIfIsInvalid();
        });
        it('should throw error when there are errors', function () {
            var entity = new _index.HaveValidation({ errors: ['ERROR_ANOTHER_ERROR'] });
            (0, _ptzAssert.throws)(function () {
                entity.throwErrorIfIsInvalid();
            });
        });
    });
});
//# sourceMappingURL=HaveValidation.test.js.map