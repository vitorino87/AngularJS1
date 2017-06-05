/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var app = angular.module('myApp',[]);

app.controller('customersCtrl', function($scope, $http){
    //$http.get("http://localhost:8084/customer.php")
    $http.get("http://localhost:8095/customers.cshtml")
            .then(function(response){
                $scope.names = response.data.records;
    });
});