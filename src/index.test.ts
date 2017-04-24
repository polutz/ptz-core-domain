import { ok } from 'ptz-assert';
import {
    // TODO: Actions after ptz-validations
    // ActionExecution,
    EntityBase,
    EntityMinBase,
    // TODO: Actions after ptz-validations
    // IAction, IActionExecution, IActionExecutionArgs,
    IAppFuncArgs,
    IBaseApp,
    IBaseAppArgs,
    IBaseRepository,
    ICreatedBy,
    IEntityBase,
    IEntityBaseArgs,
    IEntityMinBase,
    IEntityMinBaseArgs
} from './index';

describe('ptz-core-domain', () => {
    describe('exports', () => {
        // TODO: Actions after ptz-validations
        // it('Action', () => ok(ActionExecution));
        it('EntityBase', () => ok(EntityBase));
        it('EntityMinBase', () => ok(EntityMinBase));
    });
});
