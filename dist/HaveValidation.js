'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HaveValidation = function () {
    function HaveValidation(args) {
        _classCallCheck(this, HaveValidation);

        if (!args) args = {};
        this.addErrors(args.errors);
    }

    _createClass(HaveValidation, [{
        key: 'addError',
        value: function addError(error) {
            if (error == null) return;
            if (!(this.errors.indexOf(error) >= 0)) this.errors.push(error);
        }
    }, {
        key: 'addErrors',
        value: function addErrors(errors) {
            var _this = this;

            if (this.errors == null) this.errors = [];
            if (errors == null) return;
            errors.forEach(function (error) {
                return _this.addError(error);
            });
        }
    }, {
        key: 'isValid',
        value: function isValid() {
            return !this.errors || this.errors.length === 0;
        }
    }, {
        key: 'throwErrorIfIsInvalid',
        value: function throwErrorIfIsInvalid() {
            if (this.errors && this.errors.length > 0) throw 'ERROR_INVALID_ENTITY';
        }
    }]);

    return HaveValidation;
}();
//# sourceMappingURL=HaveValidation.js.map


exports.default = HaveValidation;