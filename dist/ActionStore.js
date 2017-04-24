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

var ActionStore = function () {
    function ActionStore() {
        _classCallCheck(this, ActionStore);

        this.typeSubscribers = {};
        this.subscribers = [];
    }

    _createClass(ActionStore, [{
        key: "subscribe",
        value: function subscribe(type, func) {
            if (this.typeSubscribers[type] == null) this.typeSubscribers[type] = [func];
            this.typeSubscribers[type].push(func);
        }
    }, {
        key: "subscribeAll",
        value: function subscribeAll(func) {
            this.subscribers.push(func);
        }
    }, {
        key: "dispatch",
        value: function dispatch(action, cb) {
            this.subscribers.forEach(function (func) {
                return func(action, cb);
            });
            if (this.typeSubscribers[action.type]) this.typeSubscribers[action.type].forEach(function (func) {
                return func(action, cb);
            });
        }
    }]);

    return ActionStore;
}();
//# sourceMappingURL=ActionStore.js.map


exports.default = ActionStore;