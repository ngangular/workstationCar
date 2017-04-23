angular.module('WSApp').factory('myfactory', function ($http) {
    var obj = {};
    obj.getTableData = function () {
        return $http.get("../Data/car.json");
    }
    return obj;
});