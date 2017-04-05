import { notOk, ok } from 'ptz-assert';
import { validateEmail } from './Email';
describe('Email', () => {
    it('Valid Email', () => {
        ok(validateEmail('alanmarcell@live.com'));
    });
    it('Invalid Email', () => {
        notOk(validateEmail('alanmarcelllive.com'));
    });
});
//# sourceMappingURL=Email.test.js.map