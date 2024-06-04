(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['SignUpService'];
    function SignUpController(SignUpService){
        var signCtrl = this;
        signCtrl.signedUp = SignUpService.signedUp;
        signCtrl.invalidItem = true;

        signCtrl.firstName = "";
        signCtrl.lastName = "";
        signCtrl.email = "";
        signCtrl.phone = "";
        signCtrl.menuItem = "";

        signCtrl.SignUp = function(){
            signCtrl.signedUp = SignUpService.SignUp(
                signCtrl.firstName,
                signCtrl.lastName,
                signCtrl.email,
                signCtrl.phone,
                signCtrl.menuItem
            );
        };

        signCtrl.CheckItem = function(){
            signCtrl.invalidItem = SignUpService.IsInvalidItem(signCtrl.menuItem);
        };
    };
})();