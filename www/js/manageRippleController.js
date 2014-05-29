var ManageRippleController = angular.module('ManageRippleController', []);

ManageRippleController.controller('RippleController', function ($scope, $ionicSideMenuDelegate) {

    $scope.togglePage = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };
});