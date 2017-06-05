/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app = angular.module('myApp',[]);

app.controller('customerCtrl', function($scope, $http){
    $http.get("resources/json/customer.json")
            .then(function(response){
                $scope.names = response.data.records;
    });
});

/*
 * By default, the ng-include directive does not allow you to include files from other domains.
 * To include files from another domain, you can add a whitelist of legal files and/or domains in the config function of your application:
 */
app.config(function($sceDelegateProvider){
    $sceDelegateProvider.resourceUrlWhitelist([
        'https://tryit.w3schools.com/**',
        'http://**'
    ]);
});