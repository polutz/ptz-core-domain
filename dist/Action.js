"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

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

var Action = function () {
    function Action(args) {
        _classCallCheck(this, Action);

        this.startDate = new Date();
        this.actionType = args.actionType;
        this.func = args.func;
        this.args = args.args;
    }

    _createClass(Action, [{
        key: "setEnd",
        value: function setEnd() {
            this.endDate = new Date();
        }
    }, {
        key: "setReturnData",
        value: function setReturnData(returnData) {
            this.returnData = returnData;
            this.setEnd();
        }
    }, {
        key: "setError",
        value: function setError(error) {
            this.error = error;
            this.setEnd();
        }
    }]);

    return Action;
}();

exports.default = Action;

function execAction(args) {
    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
        var action;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        action = new Action(args);
                        _context.prev = 1;
                        _context.t0 = action;
                        _context.next = 5;
                        return args.func(args.args);

                    case 5:
                        _context.t1 = _context.sent;

                        _context.t0.setReturnData.call(_context.t0, _context.t1);

                        console.log('Action.exectAction after setReturnData', action);
                        return _context.abrupt("return", Promise.resolve(action.returnData));

                    case 11:
                        _context.prev = 11;
                        _context.t2 = _context["catch"](1);

                        action.setError(_context.t2);
                        return _context.abrupt("return", Promise.reject(action));

                    case 15:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this, [[1, 11]]);
    }));
}
exports.Action = Action;
exports.execAction = execAction;
//# sourceMappingURL=Action.js.map