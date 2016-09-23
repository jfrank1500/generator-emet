(function () {
    'use strict';

    var f = function ($scope, $stateParams /* , $ionicLoading, postResource */) {
        $scope.post = {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        };

//        $ionicLoading.show({
//            content: 'Loading...',
//            animation: 'fade-in',
//            showBackdrop: true,
//            maxWidth: 200,
//            showDelay: 0
//        });
//        var post = postResource.get({id: $stateParams.id }, function () {
//            $scope.post = post;
//            $ionicLoading.hide();
//        });
    };

    angular.module('app.controllers').controller('<%= moduleName %>Controller', f);
    f.$inject = ['$scope', '$stateParams' /* , '$ionicLoading', 'postResource' */];
})();