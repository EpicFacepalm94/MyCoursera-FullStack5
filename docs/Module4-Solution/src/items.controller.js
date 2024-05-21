(
    function(){
        'use strict';

        angular.module('data')
        .controller('ItemsController', ItemsController);

        ItemsController.$inject = ['MenuDataService'];
        function ItemsController(MenuDataService){
            var $ctrl = this;
            $ctrl.items = MenuDataService.items;
            $ctrl.category = MenuDataService.category;
        }
    }
)();