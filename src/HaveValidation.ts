import { IHaveValidation, IHaveValidationArgs } from './index';

export default class HaveValidation implements IHaveValidation {

    errors: string[];

    constructor(args?: IHaveValidationArgs) {
        if (!args)
            args = {};

        this.errors = args.errors;
    }

    addError(error: string) {
        if (!this.errors)
            this.errors = [];

        if (!(this.errors.indexOf(error) >= 0))
            this.errors.push(error);
    }

    isValid(): boolean {
        return !this.errors || this.errors.length === 0;
    }

    throwErrorIfIsInvalid() {
        if (this.errors && this.errors.length > 0)
            throw 'ERROR_INVALID_ENTITY';
    }
}
