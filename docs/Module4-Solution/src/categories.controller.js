(
    function(){
        'use strict';

        angular.module('MenuApp')
        .controller('CategoriesController', CategoriesController);

        CategoriesController.$inject = ['menuCategories'];
        function CategoriesController(menuCategories){
            console.log("CategoriesController Import: ", menuCategories);
            var CatCtrl = this;
            CatCtrl.categories = menuCategories;
        }
    }
)();