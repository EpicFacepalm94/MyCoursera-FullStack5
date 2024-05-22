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
                    menuCategories: ['MenuDataService', function(MenuDataService){
                        return MenuDataService.getAllCategories()
                        .then(
                            function success(response){
                                console.log("Resolving Categories Response: ", response);
                                return response;
                            }
                        );
                    }]
                }
            })
            .state('items',{
                url: '/items/{categoryId}',
                templateUrl: 'templates/items-state.template.html',
                resolve:{
                    menuItems:['$stateParams', 'MenuDataService', function($stateParams, MenuDataService){
                        return MenuDataService.getItemsForCategory($stateParams.categoryId)
                        .then(
                            function success(response){
                                MenuDataService.items = response.data.menu_items;
                                console.log("Resolving Items Response: ",response);
                                return response;
                            }
                        );
                    }]
                }
            });
        }
    }
)();