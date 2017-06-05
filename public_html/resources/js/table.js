/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module('myApp',[]);

app.controller('tableCtrl1',function($scope,$http){
    $http.get("resources/json/customer.json")
            .then(function(response){
                $scope.names = response.data.records;
    });
    $scope.orderByMe = function(x){
        $scope.myOrderBy = x;
    };
});
