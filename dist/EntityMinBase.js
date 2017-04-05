import shortid from 'shortid';
export default class EntityMinBase {
    constructor(entity) {
        if (!entity)
            entity = {};
        this.setId(entity);
        this.errors = entity.errors;
    }
    addError(error) {
        if (!this.errors)
            this.errors = [];
        if (!(this.errors.indexOf(error) >= 0))
            this.errors.push(error);
    }
    isValid() {
        return !this.errors || this.errors.length === 0;
    }
    throwErrorIfIsInvalid() {
        if (this.errors && this.errors.length > 0)
            throw 'ERROR_INVALID_ENTITY';
    }
    setId(entity) {
        this.id = entity.id || entity._id;
        if (!this.id)
            this.id = shortid.generate();
    }
}
//# sourceMappingURL=EntityMinBase.js.map