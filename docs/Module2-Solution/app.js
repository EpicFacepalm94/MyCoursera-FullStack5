(
    function(){
        angular.module('Module2', [])
        .controller('Module2Controller', Module2Controller );

        Module2Controller.$inject = ['$scope'];

        function Module2Controller($scope){
            $scope.toBuyList = [
                {
                    name: 'cookies',
                    quantity: 10
                },
                {
                    name: 'bags of chips',
                    quantity: 5
                },
                {
                    name: 'jars of peanut butter',
                    quantity: 3
                },
                {
                    name: 'apples',
                    quantity: 2
                },
                {
                    name: 'tubs of ice cream',
                    quantity: 20
                }
            ];

            $scope.boughtList = [];

            
            $scope.toBuyListEmptyMessage = "";
            $scope.boughtListEmptyMessage = "Nothing is bought!";

            $scope.BuyItem = function(index){
                $scope.boughtList.push($scope.toBuyList[index]);
                $scope.toBuyList.splice(index, 1);

                if($scope.toBuyList.length < 1){
                    $scope.toBuyListEmptyMessage = "Everything is bought!";
                }

                if($scope.boughtList.length > 0){
                    $scope.boughtListEmptyMessage = "";
                }
            }
        }
    }
)()