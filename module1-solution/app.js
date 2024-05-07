(function () {
'use strict';


angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
    $scope.msgColor = "red";
    $scope.msg = "Please Enter Data First";

    $scope.Check = function(){

        if(typeof $scope.menu == "string" && $scope.menu != ""){

            var items = $scope.menu.split(",");
            var length = items.length;

            for(var item of items){
                if(item.replace(" ", "") ===""){
                    length--;
                    console.log(item);
                }
            }

            if(length > 3){
                $scope.msg = "Too Much!";
            }else{
                $scope.msg = "Enjoy";
            }
            $scope.msgColor = "green";

        }else{

            //console.log("Invalid Input");
            $scope.msgColor = "red";
            $scope.msg = "Please Enter Data First";

        }

    }
}

}


)();
