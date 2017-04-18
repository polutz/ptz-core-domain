'use strict';

var _ptzAssert = require('ptz-assert');

var _index = require('./index');

describe('validate', function () {
    describe('required', function () {
        it('when null return required error', function () {
            var error = 'ERROR_REQUIRED';
            var errors = (0, _index.validate)({ data: null, requiredError: error });
            (0, _ptzAssert.contains)(errors, error);
        });
        it('when undefined return required error', function () {
            var error = 'ERROR_REQUIRED';
            var errors = (0, _index.validate)({ data: undefined, requiredError: error });
            (0, _ptzAssert.contains)(errors, error);
        });
        it('when not null do not return required error', function () {
            var error = 'ERROR_REQUIRED';
            var errors = (0, _index.validate)({ data: '', requiredError: error });
            (0, _ptzAssert.notContains)(errors, error);
        });
    });
    describe('minLength', function () {
        it('when less than minLength return minLength error', function () {
            var error = 'ERROR_MINLENGTH';
            var errors = (0, _index.validate)({ data: 'ab', minLength: 3, minLengthError: error });
            (0, _ptzAssert.contains)(errors, error);
        });
        it('when equal than minLength do not return minLength error', function () {
            var error = 'ERROR_MINLENGTH';
            var errors = (0, _index.validate)({ data: 'abc', minLength: 3, minLengthError: error });
            (0, _ptzAssert.notContains)(errors, error);
        });
        it('when grather than minLength do not return minLength error', function () {
            var error = 'ERROR_MINLENGTH';
            var errors = (0, _index.validate)({ data: 'abcd', minLength: 3, minLengthError: error });
            (0, _ptzAssert.notContains)(errors, error);
        });
        it('when null and not required do not return minLength error', function () {
            var error = 'ERROR_MINLENGTH';
            var errors = (0, _index.validate)({ data: null, minLength: 3, minLengthError: error });
            (0, _ptzAssert.notContains)(errors, error);
        });
    });
    describe('maxLength', function () {
        it('when grather than maxLength return maxLength error', function () {
            var error = 'ERROR_MAXLENGTH';
            var errors = (0, _index.validate)({ data: 'abcd', maxLength: 3, maxLengthError: error });
            (0, _ptzAssert.contains)(errors, error);
        });
        it('when equal than maxLength do not return maxLength error', function () {
            var error = 'ERROR_MAXLENGTH';
            var errors = (0, _index.validate)({ data: 'abc', maxLength: 3, maxLengthError: error });
            (0, _ptzAssert.notContains)(errors, error);
        });
        it('when less than maxLength do not return maxLength error', function () {
            var error = 'ERROR_MAXLENGTH';
            var errors = (0, _index.validate)({ data: 'ab', maxLength: 3, maxLengthError: error });
            (0, _ptzAssert.notContains)(errors, error);
        });
        it('when null and not required do not return maxLength error', function () {
            var error = 'ERROR_MAXLENGTH';
            var errors = (0, _index.validate)({ data: null, maxLength: 3, maxLengthError: error });
            (0, _ptzAssert.notContains)(errors, error);
        });
    });
});
//# sourceMappingURL=Validate.test.js.map