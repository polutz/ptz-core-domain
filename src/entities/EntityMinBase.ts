import { HaveValidation } from 'ptz-validations';
import shortid from 'shortid';
import { IEntityMinBase, IEntityMinBaseArgs } from './IEntityMinBase';

export class EntityMinBase extends HaveValidation implements IEntityMinBase {

    id: string;

    constructor(entity?: IEntityMinBaseArgs) {
        if (!entity)
            entity = {};

        super(entity);

        this.setId(entity);
    }

    private setId(entity) {
        this.id = entity.id || entity._id;

        if (!this.id)
            this.id = shortid.generate();
    }
}
