/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app = angular.module('myApp',[]);

app.controller('locationService', function($scope, $location){
    $scope.myUrl = $location.absUrl();
});

app.controller('httpService', function($scope, $http){
    $http.get("resources/demo/services.html").then(function(response){
        $scope.myWelcome = response.data;
    });
});