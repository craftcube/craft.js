/**
 * Created by irving on 2017/8/30.
 */
(function () {
    'use strict';
    angular.module('craft.auth.handler', ['craft.widgets.toast']);
    angular.module('craft.auth.handler').factory('AuthHandlerService', AuthHandlerServiceFunc);

    AuthHandlerServiceFunc.$inject = ["$state", "ngToast"];

    function AuthHandlerServiceFunc($state, ngToast) {

        return {
            notLogonHandler: function () {
                ngToast.create({
                    className: 'danger',
                    content: '未登录,请登录'
                });
                $state.go('auth.login', {location: true, reload: true});
            },

            errorLogonHandler: function (error) {
                ngToast.create({
                    className: 'danger',
                    content: '登录失败' + error
                });
            },

            toastError: function (error) {
                ngToast.create({
                    className: 'danger',
                    content: error.errMsg
                });
            }
        };
    }

}).call(this);