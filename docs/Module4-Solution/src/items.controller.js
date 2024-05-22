(
    function(){
        'use strict';

        angular.module('data')
        .controller('ItemsController', ItemsController);

        ItemsController.$inject = ['menuItems'];
        function ItemsController(menuItems){
            var ItemCtrl = this;
            ItemCtrl.items = menuItems;
        }
    }
)();