(function () {
    'use strict';
    var f = function ($stateProvider) {
        $stateProvider.state('<%= moduleName %>', {
            url: '/<%= moduleName %>',
            templateUrl: 'templates/<%= moduleName %>.html',
            controller: '<%= moduleName %>Controller'
        });
    };
    angular.module('app.<%= moduleName %>').config(f);
    f.$inject = ['$stateProvider'];
})();