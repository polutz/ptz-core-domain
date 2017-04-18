import { IHaveValidation, IHaveValidationArgs } from './index';

export default class HaveValidation implements IHaveValidation {

    errors: string[];

    constructor(args?: IHaveValidationArgs) {
        if (!args)
            args = {};

        this.addErrors(args.errors);
    }

    addError(error: string): void {
        if (error == null)
            return;

        if (!(this.errors.indexOf(error) >= 0))
            this.errors.push(error);
    }

    addErrors(errors: string[]): void {
        if (this.errors == null)
            this.errors = [];

        if (errors == null)
            return;

        errors.forEach(error => this.addError(error));
    }

    isValid(): boolean {
        return !this.errors || this.errors.length === 0;
    }

    throwErrorIfIsInvalid() {
        if (this.errors && this.errors.length > 0)
            throw 'ERROR_INVALID_ENTITY';
    }
}
