import { equal, ok } from 'ptz-assert';
import EntityBase from './EntityBase';
import { IEntityBaseArgs } from './IEntityBase';

describe('EntityBase', () => {
    it('should set createdBy', () => {
        var args: IEntityBaseArgs<any> = {
            createdBy: {
                dtCreated: new Date(),
                ip: '192.168.1.1',
                user: { id: 'test-id'}
            }
        };

        var entity = new EntityBase(args);
        equal(entity.createdBy, args.createdBy);
    });

    it('should set dtChanged', () => {
        var args: IEntityBaseArgs<any> = {
            dtChanged: new Date()
        };

        var entity = new EntityBase(args);
        equal(entity.dtChanged, args.dtChanged);
    });

    it('should create new Object when null args', () => {
        var entity = new EntityBase(null);
        ok(entity);
    });
});
