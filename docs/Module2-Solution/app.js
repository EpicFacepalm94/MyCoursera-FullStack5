(
    function(){
        angular.module('Module2', [])
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
        .controller('ToBuyController', ToBuyController )
        .controller('AlreadyBoughtController', AlreadyBoughtController );

        
        function ShoppingListCheckOffService(){
            var service = this;

            service.toBuyList = [
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

            service.boughtList = [];


            service.BuyItem = function(index){
                service.boughtList.push(service.toBuyList[index]);
                service.toBuyList.splice(index, 1);
            }

            service.getToBuyList = function(){return service.toBuyList;}

            service.getBoughtList = function(){return service.boughtList;}


        }

        ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
        function ToBuyController($scope, service){
            var buyCtrl = this;

            buyCtrl.items = service.getToBuyList();
            buyCtrl.BuyItem = service.BuyItem;
        }

        AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];
        function AlreadyBoughtController($scope, service){
            var boughtCtrl = this;

            boughtCtrl.items = service.getBoughtList();
        }
    }
)()