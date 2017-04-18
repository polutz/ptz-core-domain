'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

var _HaveValidation2 = require('./HaveValidation');

var _HaveValidation3 = _interopRequireDefault(_HaveValidation2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EntityMinBase = function (_HaveValidation) {
    _inherits(EntityMinBase, _HaveValidation);

    function EntityMinBase(entity) {
        _classCallCheck(this, EntityMinBase);

        if (!entity) entity = {};

        var _this = _possibleConstructorReturn(this, (EntityMinBase.__proto__ || Object.getPrototypeOf(EntityMinBase)).call(this, entity));

        _this.setId(entity);
        return _this;
    }

    _createClass(EntityMinBase, [{
        key: 'setId',
        value: function setId(entity) {
            this.id = entity.id || entity._id;
            if (!this.id) this.id = _shortid2.default.generate();
        }
    }]);

    return EntityMinBase;
}(_HaveValidation3.default);
//# sourceMappingURL=EntityMinBase.js.map


exports.default = EntityMinBase;