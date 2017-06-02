/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app = angular.module('myApp',[]);
app.run(function($rootScope){
    $rootScope.color  = 'blue';
});

app.controller('myCtrl',function($scope){
    $scope.color  = "red";
});

