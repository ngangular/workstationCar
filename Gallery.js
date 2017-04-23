angular.module('WSApp').controller('galleryform', function ($scope, $http, myfactory) {
    $scope.form = {};
    $scope.regform = function () {
        console.log("I am in gallery registration form function");
        console.log($scope.form);
    }
    myfactory.getTableData().then(function (response) {
        console.log(response.data.records);
        $scope.cars = response.data;
    })

    $scope.editInfo = function (car) {
        $scope.form = car;
        console.log(car);
        console.log($scope.form);
     }
});

