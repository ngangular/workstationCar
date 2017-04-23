angular.module('WSApp').controller('homeform', function ($scope) {
    $scope.form = {};
    $scope.regform = function () {
        console.log("I am in home registration form function");
        console.log($scope.form);
    }
});

