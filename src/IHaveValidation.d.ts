export interface IHaveValidation {
    errors?: string[];
    isValid(): boolean;
    throwErrorIfIsInvalid(): void;
}

export interface IHaveValidationArgs {
    errors?: string[];
}
