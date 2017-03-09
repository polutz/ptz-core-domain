import EntityBase from './EntityBase';
import { ok, equal } from 'ptz-assert';

describe('EntityBase', () => {
    it('should set createdBy', () => {
        var args:IEntityBaseArgs = { 
            createdBy: { 
                userName: 'allanegidio',
                name: 'Allan Egidio',
                dtCreated: new Date(),
                ip: '192.168.1.1',
                userId: 'aswwds423432'
            }
        };

        var entity = new EntityBase(args);
        equal(entity.createdBy, args.createdBy);
    });

    it('should set dtChanged', () => {
        var args:IEntityBaseArgs = {
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