/// <reference path="IEntityMinBase.d.ts" />
/// <reference path="IEntityBase.d.ts" />
/// <reference path="ICreatedBy.d.ts" />

declare module ptzCoreDomain {
    class EntityMinBase implements IEntityMinBase {
        constructor(entity?: IEntityMinBaseArgs);

        id: string;
        errors: string[];

        isValid(): boolean;
        throwErrorIfIsInvalid(): void;
    }

    class EntityBase implements IEntityBase {

        createdBy: ICreatedBy;
        dtChanged: Date;

        constructor(entity: IEntityBaseArgs);

        isValid(): boolean;
        throwErrorIfIsInvalid(): void;
    }
}
declare module "ptz-core-domain"
{
    export = ptzCoreDomain;
}