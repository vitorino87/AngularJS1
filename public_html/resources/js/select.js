/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var app = angular.module('myApp',[]);

app.controller('selectCtrl1',function($scope){
    $scope.names = [
        "Emil","Tobias","Linus"
    ];
});

app.controller('selectCtrl2',function($scope){
    $scope.names = [
        "Emil","Tobias","Linus"
    ];
});

app.controller('selectCtrl3', function($scope){
    $scope.cars = [
        {model:"Ford Mustang",  color: "red"},
        {model:"Fiat 500",      color:"white"},
        {model:"Volvo XC90",    color:"black"}
    ];
});

app.controller('selectCtrl4', function($scope){
    $scope.cars=[
        {model:"Ford Mustang",  color: "red"},
        {model:"Fiat 500",      color:"white"},
        {model:"Volvo XC90",    color:"black"}
    ];
});

app.controller('selectCtrl5', function($scope){
    $scope.cars = {
        car01 : "Ford",
        car02 : "Fiat",
        car03 : "Volvo"
    };
});

app.controller('selectCtrl6', function($scope){
    $scope.cars = {
        car01: {brand:"Ford", model:"Mustang", color:"red"},
        car02: {brand:"Fiat", model:"500", color:"white"},
        car03: {brand:"Volvo", model:"XC90", color:"black"}
    };
});

