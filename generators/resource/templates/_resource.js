(function () {
    'use strict';

    var f = function ($resource) {
        return $resource('https://jsonplaceholder.typicode.com/posts/:id',
                {id: '@_id'},
                {update: {method: 'PUT'}});
    };
    angular.module('app.resources').factory('<%= moduleName %>Resource', f);
    f.$inject = ['$resource'];

})();