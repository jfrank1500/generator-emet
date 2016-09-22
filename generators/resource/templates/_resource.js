(function () {
    'use strict';
    
    var f = function ($resource) {
       return $resource('https://jsonplaceholder.typicode.com/posts/:id');
    };
    angular.module('app.resources').factory('<%= moduleName %>Resource', f);
    f.$inject = ['$resource'];
    
})();