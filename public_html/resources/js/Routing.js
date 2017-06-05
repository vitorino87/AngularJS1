/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "resources/demo/main.html"
    })
    .when("/red", {
        templateUrl : "resources/demo/red.html"
    })
    .when("/green", {
        templateUrl : "resources/demo/green.html"
    })
    .when("/blue", {
        templateUrl : "resources/demo/blue.html"
    });
});

