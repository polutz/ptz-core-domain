import { HaveValidation } from 'ptz-validations';
import shortid from 'shortid';
export class EntityMinBase extends HaveValidation {
    constructor(entity) {
        if (!entity)
            entity = {};
        super(entity);
        this.setId(entity);
    }
    setId(entity) {
        this.id = entity.id || entity._id;
        if (!this.id)
            this.id = shortid.generate();
    }
}
//# sourceMappingURL=EntityMinBase.js.map