(function () {
    'use strict';
    
    var f = function ($resource) {
       return $resource('https://jsonplaceholder.typicode.com/posts/:id');
    };
    angular.module('app.services').factory('<%= moduleName %>Service', f);
    f.$inject = ['$resource'];
    
})();