/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module('myApp', []);

app.controller('toggleCtrl', function ($scope) {
    $scope.showMe = false;
    $scope.myFunc = function () {
        $scope.showMe = !$scope.showMe;
    };
});

app.controller('coordinatesCtrl',function($scope){
    $scope.myFunc = function(myE){
        $scope.x = myE.clientX;
        $scope.y = myE.clientY;
    };
});