(
    function(){
        'use strict';

        angular.module('Module3', [])
        .controller('MenuController', MenuController)
        .service('MenuService', MenuService)
        .constant('ApiBasePath', " https://coursera-jhu-default-rtdb.firebaseio.com");

        MenuController.$inject = ['$scope', 'MenuService'];
        function MenuController($scope, MenuService){
            var menu = this;

            menu.found = [];

            menu.narrow = function(){
                menu.found = MenuService.narrow(menu.searchText.toLowerCase());
                
            };
            
            menu.getFoundItems = function(){
                return MenuService.getFoundItems();
            };

            menu.remove = function(index){
                this.found.splice(index, 1);
            };

            menu.searchText = "";
        };

        MenuService.$inject = ['$http', 'ApiBasePath'];
        function MenuService($http, ApiBasePath){
            var service = this;

            service.narrow = function(searchText){

                var categories = [];
                var items = [];

                $http({
                    url: ApiBasePath + "/categories.json",
                    method: "GET"
                })
                .then(
                    function success(response){
                        categories = response.data;

                        for(var i=0; i < categories.length; i++){
                            
                            $http({
                                url: ApiBasePath + "/menu_items/" + categories[i].short_name + ".json"
                            })
                            .then(
                                function success(response){
                                    var menuItems = response.data.menu_items;
                                    for(var j=0; j < menuItems.length; j++){
                                        if(menuItems[j].description.toLowerCase().indexOf(searchText) != -1){
                                            console.log(menuItems[j]);
                                            items.push(menuItems[j]);
                                        }
                                    }
                                },
                                function failure(response){
                                    console.log("Failed to retrieve category: " + categories[i].short_name);
                                }
                            );

                        }
                    },
                    function failure(response){
                        console.log("HTTP Error retrieving categories.json");
                    }
                );
                
                return items;
            };
        };

    }
)();