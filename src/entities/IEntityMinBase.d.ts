import { IHaveValidation, IHaveValidationArgs } from 'ptz-validations';

export interface IEntityMinBase extends IHaveValidation {
    id?: string;
    _id?: string;
}

export interface IEntityMinBaseArgs extends IHaveValidationArgs {
    id?: string;
    _id?: string;
}
