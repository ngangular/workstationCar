angular.module('WSApp').controller('contactusform', function ($scope) {
    $scope.contactus = {};
    $scope.contactusform = function () {
        console.log("I am in ContactUs function");
        console.log($scope.contactus);
    }
});