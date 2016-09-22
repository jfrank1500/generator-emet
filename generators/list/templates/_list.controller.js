(function () {
    'use strict';

    var f = function ($scope, $stateParams) {
        $scope.list = [
            {value: 'AAAAAAAAAAAA', url: 'about', icon: 'fa fa-truck'},
            {value: 'BBBBBBBBBBBB', url: 'about', icon: 'fa fa-truck'},
            {value: 'CCCCCCCCCCCC', url: 'about', icon: 'fa fa-truck'},
            {value: 'DDDDDDDDDDDD', url: 'about', icon: 'fa fa-truck'},
            {value: 'EEEEEEEEEEEE', url: 'about', icon: 'fa fa-truck'},
            {value: 'FFFFFFFFFFFF', url: 'about', icon: 'fa fa-truck'},
            {value: 'GGGGGGGGGGGG', url: 'about', icon: 'fa fa-truck'}
        ];
    };

    angular.module('app.controllers').controller('<%= moduleName %>Controller', f);
    f.$inject = ['$scope', '$stateParams'];
})();