/**
 * Created by chenming1 on 2017/8/31.
 */

(function () {
    angular.module('demo',['craft.core','craft.api.cap','craft.widgets','craft.auth.session']);
    angular.module('demo').controller("DemoCtrl",function ($scope,ngToast) {
        $scope.model="Hello Craft!";
        $scope.showMe= function () {
            ngToast.create({
                "content":"<a href='#'>数据源更新错误</a>",
                "className":'danger',
                "horizontalPosition":"center",
                "verticalPosition":"top",
                "maxNumber":2,
                "dismissOnTimeout": true,
                "dismissButton": true,
                "timeout": 2000
            });
        }
    })
}).call(this);