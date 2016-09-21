(function () {
    'use strict';
    var f = function ($scope, $stateParams) {
        $scope.video = "https://www.youtube.com/embed/lTLTs2ZA2JQ?rel=0&amp;showinfo=0";
    };
    angular.module('app.<%= moduleName %>').controller('<%= moduleName %>Controller', f);
    f.$inject = ['$scope', '$stateParams'];
})();