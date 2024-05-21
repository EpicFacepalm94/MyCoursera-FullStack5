(
    function(){
        'use strict';
        angular.module('data')
        .service('MenuDataService', MenuDataService)
        .constant('ApiBasePath', 'https://coursera-jhu-default-rtdb.firebaseio.com');

        MenuDataService.$inject = ['$http', 'ApiBasePath'];
        function MenuDataService($http, ApiBasePath){
            var dataService = this;
            dataService.categories = [];
            dataService.category = [];
            dataService.items = [];

            dataService.getAllCategories = function(){
                var promise = $http({
                    method: "GET",
                    url: (ApiBasePath + "/categories.json")
                });

                return promise.then(
                    function success(response){
                        dataService.categories = response.data;
                    },
                    function failure(error){
                        console.log(error);
                    }
                );
            }

            dataService.getItemsForCategory = function(categoryShortName){
                dataService.category = [];
                return $http({
                    method: "GET",
                    url: (ApiBasePath + "/menu_items/" + categoryShortName + ".json")
                }).then(
                    function success(response){
                        dataService.category = response.data.category;
                        console.log(dataService.category);
                        dataService.items = response.data.menu_items;
                        return response;
                    },
                    function failure(error){
                        console.log(error);
                        return error;
                    }
                );
            }
        }
    }
)();