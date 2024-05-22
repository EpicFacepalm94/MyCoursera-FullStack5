(
    function(){
        'use strict';

        angular.module('data')
        .component('menuItems', {
            bindings: {
                items: '<'
            },
            templateUrl: 'templates/items.template.html'
        });
    }
)();