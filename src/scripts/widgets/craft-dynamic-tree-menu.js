(function () {
    angular.module('craft.widgets.dynamicTreeMenu',[]).component('craftDynamicTreeMenu', {
        templateUrl: "templates/widgets/tree-menu/tree-menu.html",
        bindings: {
            data: '<',
            hover:'<',
            highlight:'<'
        },
        controller: [function () {
            var vm = this;
            vm.$onInit = function () {
                vm.treeMenuItems = vm.data;
            };
            vm.active = function (item) {
                vm.selected = item;
            };

            vm.toggleSubmenu = function (item) {
                if (vm.opened == item) {
                    vm.opened = null;
                } else {
                    vm.opened = item;
                }
            };
            vm.isSubOpen = function(item) {
                if (vm.opened == item) return true;
                else return false;
            };
            vm.isActiveItem = function(item) {
                return vm.selected ===item;
            };
        }],
        controllerAs:'vm'
    });

}).call(this);