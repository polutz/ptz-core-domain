import { IHaveValidation, IHaveValidationArgs } from './IHaveValidation';

export interface IEntityMinBase extends IHaveValidation {
    id?: string;
    _id?: string;
}

export interface IEntityMinBaseArgs extends IHaveValidationArgs {
    id?: string;
    _id?: string;
}
