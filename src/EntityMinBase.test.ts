import EntityMinBase from './EntityMinBase';
import { throws, notOk, ok, contains, notEmptyString, equal } from 'ptz-assert';

describe('EntityMinBase', ()=>{

    describe('Id', ()=>{
        it('Generate Id',()=>{
            var entity = new EntityMinBase({}); 
            notEmptyString(entity.id);
        });

        it('Set _id to id',()=>{
            var id = "sdfds-sdfd-gfdg-33";
            var entity = new EntityMinBase({_id: id}); 
            equal(entity.id, id);
        });

        it('Set id',()=>{
            var id = "sdfds-sdfd-gfdg-33";
            var entity = new EntityMinBase({id: id}); 
            equal(entity.id, id);
        });
    });

    describe('Errors', () => {
        it('should addError when errors is null', () => {
            const errorKey = 'ERROR_';
            var entity = new EntityMinBase({ errors: null });
            entity.addError(errorKey);
            contains(entity.errors, errorKey);
        });

        it('should addError when errors exists', () => {
            const errorKey = 'ERROR_';
            var entity = new EntityMinBase({ errors: ['ERROR_ANOTHER_ERROR'] });
            entity.addError(errorKey);
            contains(entity.errors, errorKey);
        });
    });

    describe('IsValid', () => {
        it('should return true when errors is null', () => {
            var entity = new EntityMinBase({ errors: null });
            ok(entity.isValid());
        });

        it('should return true when error is empty', () => {
            var entity = new EntityMinBase({ errors: [] });
            ok(entity.isValid());
        });

        it('should return false when there are errors', () => {
            var entity = new EntityMinBase({ errors: ['ERROR_ANOTHER_ERROR'] });
            notOk(entity.isValid());
        });
    });

    describe('throwErrorIfIsInvalid', () => {
        it('should not throw error when errors is null', () => {
            var entity = new EntityMinBase({ errors: null });
            entity.throwErrorIfIsInvalid();
        });

        it('should not throw error when errors is empty', () => {
            var entity = new EntityMinBase({ errors: [] });
            entity.throwErrorIfIsInvalid();
        });

        it('should throw error when there are errors', () => {
            var entity = new EntityMinBase({ errors: ['ERROR_ANOTHER_ERROR'] });
            throws(() => {
                entity.throwErrorIfIsInvalid()
            });
        });
    });
});
