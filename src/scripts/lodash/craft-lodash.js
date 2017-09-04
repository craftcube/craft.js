(function () {
    "use strict";
    angular.module('craft.lodash', [])
        // allow DI for use in controllers, unit tests
        .constant('_', window._)
        // use in views, ng-repeat="x in _.range(3)"
        .run(function ($rootScope) {
            $rootScope._ = window._;
        });
}).call(this);