/**
 * Created by Ming on 2017/2/24.
 */
angular.module("store", [{
    name: "cart",
    files: ["cart/cart.js", "../bower_components/moment/moment.js"]
}])
    .controller("StoreCtrl", function ($scope,list) {

        $scope.store=angular.extend({});
        $scope.store.message = list.items;

        $scope.store.date = moment().format('MMMM Do YYYY, h:mm:ss a');

    });