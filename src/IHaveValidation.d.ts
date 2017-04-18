export interface IHaveValidation {
    errors?: string[];
    addError(error: string): void;
    addErrors(errors: string[]): void;
    isValid(): boolean;
    throwErrorIfIsInvalid(): void;
}

export interface IHaveValidationArgs {
    errors?: string[];
}
