export interface IValidateArgs {
    data: any;
    requiredError?: string;
    minLength?: number;
    minLengthError?: string;
    maxLength?: number;
    maxLengthError?: string;
}

export function validate(args: IValidateArgs): string[] {
    if (args.data == null || args.data.length === 0) {
        if (args.requiredError)
            return [args.requiredError];
        else
            return [];
    }

    if (args.data.length < args.minLength)
        return [args.minLengthError];

    if (args.data.length > args.maxLength)
        return [args.maxLengthError];

    return [];
}
