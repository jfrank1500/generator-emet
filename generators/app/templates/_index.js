/* global cordova */
(function () {
    'use strict';

    var DEFAULT_ROUTE = '/about';

    var app = angular.module('app', [
        'ionic',
        'app.controllers',
        'app.routes',
        'app.directives',
        'app.filters'
    ]);

    var f = function ($urlRouterProvider) {
        $urlRouterProvider.otherwise(DEFAULT_ROUTE);
    };
    app.config(f);

    f.$inject = ['$urlRouterProvider'];
    app.run(['$ionicPlatform', '$rootScope',
        function ($ionicPlatform, $rootScope) {
            $rootScope.app = "<%= appname %>";
            $rootScope.autenticado = true;
            $ionicPlatform.ready(function () {
                if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    cordova.plugins.Keyboard.disableScroll(true);
                }
                if (window.StatusBar) {
                    window.StatusBar.styleDefault();
                }
                $ionicPlatform.registerBackButtonAction(function (event) {
                    event.preventDefault();
                    if (true) {
                        navigator.app.exitApp();
                    } else {
                    }
                }, 100);
            });
        }]);

})();
