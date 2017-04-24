'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _EntityMinBase2 = require('./EntityMinBase');

var _EntityMinBase3 = _interopRequireDefault(_EntityMinBase2);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var EntityBase = function (_EntityMinBase) {
    _inherits(EntityBase, _EntityMinBase);

    function EntityBase(entity) {
        _classCallCheck(this, EntityBase);

        if (!entity) entity = {};

        var _this = _possibleConstructorReturn(this, (EntityBase.__proto__ || Object.getPrototypeOf(EntityBase)).call(this, entity));

        _this.createdBy = entity.createdBy;
        _this.dtChanged = entity.dtChanged;
        return _this;
    }

    return EntityBase;
}(_EntityMinBase3.default);
//# sourceMappingURL=EntityBase.js.map


exports.default = EntityBase;