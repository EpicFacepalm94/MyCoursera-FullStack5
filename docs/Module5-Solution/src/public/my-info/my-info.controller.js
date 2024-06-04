(function () {
    "use strict";
    
    angular.module('public')
    .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['SignUpService'];
    function MyInfoController(SignUpService){
        var infoCtrl = this;

        infoCtrl.firstName = SignUpService.firstName;
        infoCtrl.lastName = SignUpService.lastName;
        infoCtrl.email = SignUpService.email;
        infoCtrl.phone = SignUpService.phone;
        infoCtrl.category = SignUpService.category;
        infoCtrl.menuItem = SignUpService.menuItem;

        console.log(infoCtrl.category)
        console.log(infoCtrl.menuItem)

        infoCtrl.signedUp = SignUpService.signedUp;
    };
})();