import { contains, notContains } from 'ptz-assert';
import { validate } from './index';

describe('validate', () => {
    describe('required', () => {
        it('when null return required error', () => {
            const error = 'ERROR_REQUIRED';
            const errors = validate({ data: null, requiredError: error });
            contains(errors, error);
        });

        it('when undefined return required error', () => {
            const error = 'ERROR_REQUIRED';
            const errors = validate({ data: undefined, requiredError: error });
            contains(errors, error);
        });

        it('when empty return required error', () => {
            const error = 'ERROR_REQUIRED';
            const errors = validate({ data: '', requiredError: error });
            contains(errors, error);
        });

        it('when not empty do not return required error', () => {
            const error = 'ERROR_REQUIRED';
            const errors = validate({ data: 'HI!', requiredError: error });
            notContains(errors, error);
        });
    });

    describe('minLength', () => {
        it('when less than minLength return minLength error', () => {
            const error = 'ERROR_MINLENGTH';
            const errors = validate({ data: 'ab', minLength: 3, minLengthError: error });
            contains(errors, error);
        });

        it('when equal than minLength do not return minLength error', () => {
            const error = 'ERROR_MINLENGTH';
            const errors = validate({ data: 'abc', minLength: 3, minLengthError: error });
            notContains(errors, error);
        });

        it('when grather than minLength do not return minLength error', () => {
            const error = 'ERROR_MINLENGTH';
            const errors = validate({ data: 'abcd', minLength: 3, minLengthError: error });
            notContains(errors, error);
        });

        it('when null and not required do not return minLength error', () => {
            const error = 'ERROR_MINLENGTH';
            const errors = validate({ data: null, minLength: 3, minLengthError: error });
            notContains(errors, error);
        });
    });

    describe('maxLength', () => {
        it('when grather than maxLength return maxLength error', () => {
            const error = 'ERROR_MAXLENGTH';
            const errors = validate({ data: 'abcd', maxLength: 3, maxLengthError: error });
            contains(errors, error);
        });

        it('when equal than maxLength do not return maxLength error', () => {
            const error = 'ERROR_MAXLENGTH';
            const errors = validate({ data: 'abc', maxLength: 3, maxLengthError: error });
            notContains(errors, error);
        });

        it('when less than maxLength do not return maxLength error', () => {
            const error = 'ERROR_MAXLENGTH';
            const errors = validate({ data: 'ab', maxLength: 3, maxLengthError: error });
            notContains(errors, error);
        });

        it('when null and not required do not return maxLength error', () => {
            const error = 'ERROR_MAXLENGTH';
            const errors = validate({ data: null, maxLength: 3, maxLengthError: error });
            notContains(errors, error);
        });
    });
});
