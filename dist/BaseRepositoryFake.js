"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseRepositoryFake = function () {
    function BaseRepositoryFake(db, collectionName) {
        _classCallCheck(this, BaseRepositoryFake);

        this.entities = [];
        this.db = db;
        this.collectionName = collectionName;
    }

    _createClass(BaseRepositoryFake, [{
        key: "getDbCollection",
        value: function getDbCollection() {
            return {};
        }
    }, {
        key: "save",
        value: function save(entity) {
            return Promise.resolve(entity);
        }
    }, {
        key: "getById",
        value: function getById(id) {
            return Promise.resolve(this.entities[0]);
        }
    }, {
        key: "getByIds",
        value: function getByIds(ids) {
            return Promise.resolve(this.entities);
        }
    }, {
        key: "find",
        value: function find(query, options) {
            return Promise.resolve(this.entities);
        }
    }]);

    return BaseRepositoryFake;
}();

exports.default = BaseRepositoryFake;