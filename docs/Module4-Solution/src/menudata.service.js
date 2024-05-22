(
    function(){
        'use strict';
        angular.module('data')
        .service('MenuDataService', MenuDataService)
        .constant('ApiBasePath', 'https://coursera-jhu-default-rtdb.firebaseio.com');

        MenuDataService.$inject = ['$http', 'ApiBasePath'];
        function MenuDataService($http, ApiBasePath){
            var dataService = this;

            dataService.getAllCategories = function(){
                return $http({
                    method: "GET",
                    url: (ApiBasePath + "/categories.json")
                })
                .then(
                    function(response){
                        dataService.categories = response.data;
                        //console.log("HTTP Requested Categories Data: ", response.data);
                        return response.data;
                    }
                );
            };

            dataService.getItemsForCategory = function(categoryShortName){
                return $http({
                    method: "GET",
                    url: (ApiBasePath + "/menu_items/" + categoryShortName + ".json")
                })
                .then(
                    function(response){
                        dataService.items = response.data;
                        //console.log("HTTP Requested Items Data: ", response);
                        return response.data;
                    }
                );
            };
        }
    }
)();