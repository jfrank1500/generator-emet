(function () {
    'use strict';
    
    /* See http://benfoster.io/blog/ui-router-optional-parameters */
    
    var f = function ($stateProvider) {
        $stateProvider.state('<%= moduleName %>', {
            url: '/<%= moduleName %>?id',
            templateUrl: 'templates/<%= moduleName %>.html',
            controller: '<%= moduleName %>Controller'
        });
    };
    
    angular.module('app.routes').config(f);
    f.$inject = ['$stateProvider'];
})();