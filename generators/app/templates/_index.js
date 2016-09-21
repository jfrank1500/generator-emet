/* global cordova */
(function () {
    'use strict';
    angular.module('app.directives', []);
    angular.module('app.filters', []);
    var app = angular.module('app', [
        'ionic',
        'app.about', 
        'app.directives', 
        'app.filters']);

    var f = function ($urlRouterProvider) {
        $urlRouterProvider.otherwise('/about');
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
