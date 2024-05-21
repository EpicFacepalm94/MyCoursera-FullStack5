(
    function(){
        'use strict';

        angular.module('data')
        .component('items', {
            bindings: {
                items: '<'
            },
            templateUrl: 'templates/items.template.html',
            controller: 'ItemsController as $ctrl'
        });
    }
)();