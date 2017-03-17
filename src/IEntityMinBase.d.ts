export interface IEntityMinBase {
    id?: string;
    _id?: string;
    errors?: string[];
    isValid(): boolean;
    throwErrorIfIsInvalid(): void;
}

export interface IEntityMinBaseArgs {
    id?: string;
    _id?: string;
    errors?: string[];
}
