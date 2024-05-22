(
    function(){
        'use strict';

        angular.module('MenuApp')
        .controller('CategoriesController', CategoriesController);

        CategoriesController.$inject = ['menuCategories'];
        function CategoriesController(menuCategories){
            var CatCtrl = this;
            CatCtrl.menuCategories = menuCategories;
            console.log("CategoriesController Import: ", CatCtrl.menuCategories);
        }
    }
)();