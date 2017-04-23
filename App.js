angular.module('WSApp', ['ngRoute']);
angular.module('WSApp').config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "../Home/Home.html"
    })
    .when("/gallery", {
        templateUrl: "../Gallery/Gallery.html"
    })
    .when("/contactUs", {
        templateUrl: "../ContactUs/ContactUs.html"
    });
});
