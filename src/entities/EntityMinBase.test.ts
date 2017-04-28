import { equal, notEmptyString } from 'ptz-assert';
import { EntityMinBase } from '../index';

describe('EntityMinBase', () => {

    describe('Id', () => {
        it('Generate Id', () => {
            const entity = new EntityMinBase({});
            notEmptyString(entity.id);
        });

        it('Set _id to id', () => {
            const id = 'sdfds-sdfd-gfdg-33';
            const entity = new EntityMinBase({ _id: id });
            equal(entity.id, id);
        });

        it('Set id', () => {
            const id = 'sdfds-sdfd-gfdg-33';
            const entity = new EntityMinBase({ id });
            equal(entity.id, id);
        });

        it('Generate Id when null object', () => {
            const entity = new EntityMinBase(null);
            notEmptyString(entity.id);
        });
    });
});
