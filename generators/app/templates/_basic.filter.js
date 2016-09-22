(function () {
    'use strict';

    var g = function ($sce) {
        return function (url) {
            return $sce.trustAsResourceUrl(url);
        };
    };
    angular.module('app.filters').filter('trustURL', g);
    g.$inject = ['$sce'];
})();
