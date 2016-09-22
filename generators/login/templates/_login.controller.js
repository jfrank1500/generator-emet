(function () {
    'use strict';
    var f = function ($scope, $stateParams, $state) {
        $scope.user = {
            email: "",
            password: ""
        };
        $scope.login = function () {
            console.log($scope.user.email);
        };
    };
    angular.module('app.controllers').controller('LoginController', f);
    f.$inject = ['$scope', '$stateParams', '$state'];
})();