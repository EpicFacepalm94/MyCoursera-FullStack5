(
    function(){
        'use strict';

        angular.module('data')
        .controller('CategoriesController', CategoriesController);

        CategoriesController.$inject = ['MenuDataService'];
        function CategoriesController(MenuDataService){
            var $ctrl = this;
            $ctrl.categories = MenuDataService.categories;
        }
    }
)();