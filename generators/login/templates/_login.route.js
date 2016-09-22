(function () {
    'use strict';
    var f = function ($stateProvider) {
        $stateProvider.state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginController'
        });
    };
    angular.module('app.routes').config(f);
    f.$inject = ['$stateProvider'];
})();