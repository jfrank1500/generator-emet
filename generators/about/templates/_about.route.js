(function () {
    'use strict';
    var f = function ($stateProvider) {
        $stateProvider.state('about', {
            url: '/about',
            templateUrl: 'templates/about.html',
            controller: 'AboutController'
        });
    };
    angular.module('app.routes').config(f);
    f.$inject = ['$stateProvider'];
})();