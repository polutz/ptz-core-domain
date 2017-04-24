'use strict';

var _ActionStore = require('./ActionStore');

var _ActionStore2 = _interopRequireDefault(_ActionStore);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

describe('Actions to replay', function () {
    var store;
    var allActions = {
        SAVE_USER: 'SAVE_USER',
        DELETE_USER: 'DELETE_USER',
        AUTH_USER: 'AUTH_USER',
        FORGOT_PASSWORD: 'FORGOT_PASSWORD',
        UPDATE_PASSWORD_TOKEN: 'UPDATE_PASSWORD_BY_TOKEN',
        UPDATE_PASSWORD: 'UPDATE_PASSWORD'
    };
    var authUser = { dtCreated: new Date(), ip: '195.1.1.1' };
    beforeEach(function () {
        store = new _ActionStore2.default();
        store.subscribeAll(function (action) {
            switch (action.type) {
                case allActions.AUTH_USER:
                    console.log('log subscriber AUTH_USER');
                    break;
                case allActions.DELETE_USER:
                    console.log('log subscriber DELETE_USER');
                    break;
                case allActions.FORGOT_PASSWORD:
                    console.log('log subscriber FORGOT_PASSWORD');
                    break;
                case allActions.SAVE_USER:
                    console.log('log subscriber SAVE_USER');
                    break;
                case allActions.UPDATE_PASSWORD:
                    console.log('log subscriber UPDATE_PASSWORD');
                    break;
                case allActions.UPDATE_PASSWORD_TOKEN:
                    console.log('log subscriber UPDATE_PASSWORD_TOKEN');
                    break;
                default:
                    break;
            }
        });
        store.subscribeAll(function (action) {
            return console.log('logALL subscriber ' + action.type);
        });
        store.subscribe(allActions.SAVE_USER, function (action, cb) {
            console.log('log subscriber SAVE_USER');
            if (cb) cb(action.data);
        });
    });
    it('Play actions', function () {
        store.dispatch({ type: allActions.AUTH_USER, authUser: authUser, data: { userName: 'angeloocana' } });
        store.dispatch({ type: allActions.DELETE_USER, authUser: authUser, data: { id: 'sdvsdsd' } });
    });
    it('GraphQL mutation example', function (done) {
        var user = {
            displayName: 'Ângelo Ocanã',
            email: 'angeloocana@gmail.com',
            userName: 'angeloocana',
            password: 'testtest'
        };
        function userSaved(data) {
            console.log('-----userSaved: ', data);
            done();
        }
        store.dispatch({
            type: allActions.SAVE_USER,
            authUser: authUser,
            data: user
        }, userSaved);
    });
});
//# sourceMappingURL=ActionStore.test.js.map