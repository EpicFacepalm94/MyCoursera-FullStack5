(function () {
    "use strict";
    
    angular.module('common')
    .service('SignUpService', SignUpService);
    
    
    SignUpService.$inject = ['$http', 'ApiPath'];
    function SignUpService($http, ApiPath){

        var service = this;
        service.signedUp = false;
        service.category = null;
        service.menuItem = null;

        service.GetMenuItems = function(){
            return $http.get(ApiPath + '/menu_items.json').then(function (response) {
                service.menuItems = response.data;
                return response.data;
              });
        }
        service.GetMenuItems();

        service.SignUp = function(firstName, lastName, email, phone, item){
            if(service.IsInvalidItem(item)){
                return service.signedUp;
            }

            service.firstName = firstName;
            service.lastName = lastName;
            service.email = email;
            service.phone = phone;

            service.signedUp = true;

            return service.signedUp;
        }

        service.IsInvalidItem = function(menuNumber){
            for(let key in service.menuItems){
                for(var item of service.menuItems[key].menu_items){
                    if(item.short_name === menuNumber){
                        service.menuItem = item;
                        service.category = service.menuItems[key].category.short_name;
                        //console.log(service.category);
                        //console.log(item);
                        return false;
                    }
                }
            }

            return true;
        }
    };
})();