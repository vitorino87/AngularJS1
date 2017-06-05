/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var app = angular.module('myApp',[]);

app.controller('myCtrl1', function($scope){
    $scope.x1 = "JOHN";
    $scope.x2 = angular.lowercase($scope.x1);
});

app.controller('myCtrl2', function($scope){
    $scope.x1 = "John";
    $scope.x2 = angular.uppercase($scope.x1);
});

app.controller('myCtrl3', function($scope){
    $scope.x1 = "john";
    $scope.x2 = angular.isString($scope.x1);
});

app.controller('myCtrl4', function($scope){
    $scope.x1 = "john";
    $scope.x2 = angular.isNumber($scope.x1);
});