"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.validate = validate;
function validate(args) {
    if (args.data == null || args.data.length === 0) {
        if (args.requiredError) return [args.requiredError];else return [];
    }
    if (args.data.length < args.minLength) return [args.minLengthError];
    if (args.data.length > args.maxLength) return [args.maxLengthError];
    return [];
}
//# sourceMappingURL=Validate.js.map