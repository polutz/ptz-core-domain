'use strict';

var _ptzAssert = require('ptz-assert');

var _index = require('./index');

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

describe('Action', function () {
    it('Sum', function () {
        return __awaiter(undefined, void 0, void 0, regeneratorRuntime.mark(function _callee() {
            var action, returnData;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            action = new _index.Action({
                                actionType: 'SUM',
                                args: { a: 1, b: 2 },
                                func: function func(args) {
                                    return args.a + args.b;
                                }
                            });

                            (0, _ptzAssert.ok)(action.startDate, 'startDate not set');
                            (0, _ptzAssert.notOk)(action.endDate, 'endDate set before execution');
                            _context.next = 5;
                            return (0, _index.execAction)(action);

                        case 5:
                            returnData = _context.sent;

                            console.log('action=====>', action);
                            (0, _ptzAssert.equal)(returnData, 3, 'execAction Return wrong value');
                            (0, _ptzAssert.ok)(action.actionType, 'actionType not set');
                            (0, _ptzAssert.ok)(action.args, 'args not set');
                            (0, _ptzAssert.ok)(action.endDate, 'endDate not set');
                            (0, _ptzAssert.ok)(action.startDate, 'startDate not set');
                            (0, _ptzAssert.ok)(action.func, 'func not set');
                            (0, _ptzAssert.notOk)(action.error, 'has error');

                        case 14:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));
    });
    it('Error func', function () {
        return __awaiter(undefined, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
            var error, action, returnData;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            error = 'expected error';
                            action = new _index.Action({
                                actionType: 'ERROR_FUNC',
                                args: { a: 1, b: 2 },
                                func: function func(args) {
                                    throw Error(error);
                                }
                            });

                            (0, _ptzAssert.ok)(action.startDate, 'startDate not set');
                            (0, _ptzAssert.notOk)(action.endDate, 'endDate set before execution');
                            _context2.next = 6;
                            return (0, _index.execAction)(action);

                        case 6:
                            returnData = _context2.sent;

                            (0, _ptzAssert.notOk)(returnData, 'returnData should not be set');
                            (0, _ptzAssert.ok)(action.actionType, 'actionType not set');
                            (0, _ptzAssert.ok)(action.args, 'args not set');
                            (0, _ptzAssert.ok)(action.endDate, 'endDate not set');
                            (0, _ptzAssert.ok)(action.startDate, 'startDate not set');
                            (0, _ptzAssert.ok)(action.func, 'func not set');
                            (0, _ptzAssert.equal)(action.error, error, 'Different error msg');

                        case 14:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));
    });
});
//# sourceMappingURL=Action.test.js.map