(
    function(){
        'use strict';

        angular.module('MenuApp')
        .config(RoutesConfig);

        RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
        function RoutesConfig($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise('/');

            $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'templates/home-state.template.html'
            })
            .state('categories', {
                url: '/categories',
                templateUrl: 'templates/categories-state.template.html',
                resolve: {
                    categories: ['MenuDataService', function(MenuDataService){
                        return MenuDataService.getAllCategories();
                    }]
                }
            })
            .state('items',{
                url: '/items/{categoryId}',
                templateUrl: 'templates/items-state.template.html',
                resolve:{
                    items:['$stateParams', 'MenuDataService', function($stateParams, MenuDataService){
                        return MenuDataService.getItemsForCategory($stateParams.categoryId);
                    }]
                }
            });
        }
    }
)();