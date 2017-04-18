'use strict';

var _ptzAssert = require('ptz-assert');

var _index = require('./index');

describe('Email', function () {
    it('Valid Email', function () {
        (0, _ptzAssert.ok)((0, _index.validateEmail)('alanmarcell@live.com'));
    });
    it('Invalid Email', function () {
        (0, _ptzAssert.notOk)((0, _index.validateEmail)('alanmarcelllive.com'));
    });
});
//# sourceMappingURL=Email.test.js.map