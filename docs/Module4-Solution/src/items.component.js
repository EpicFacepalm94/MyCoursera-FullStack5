(
    function(){
        'use strict';

        angular.module('data')
        .component('items', {
            bindings: {
                menuItems: '<'
            },
            templateUrl: 'templates/items.template.html'
        });
    }
)();