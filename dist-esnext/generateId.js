import * as P from 'ptz-fp';
import R from 'ramda';
import shortid from 'shortid';
/**
 * Generate Id with custom function.
 */
export const generateIdWith = R.curry((genId, o) => {
    if (!o)
        return { id: genId() };
    if (P.isNotNilOrEmpty(o.id))
        return o;
    const id = P.isNotNilOrEmpty(o._id) ? o._id : genId();
    return R.assoc('id', id, o);
});
/**
 * Generate Id if .id and ._id are null or undefined.
 */
export const generateId = generateIdWith(shortid.generate);
//# sourceMappingURL=generateId.js.map