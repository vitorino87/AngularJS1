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

app.controller('timeService', function($scope, $timeout){
    $scope.myHeader = "Hello World!!";
    $timeout(function(){
        $scope.myHeader = "How are you?";
    }, 2000);
});

app.controller('hourService', function($scope, $interval){
    $scope.theTime = new Date().toLocaleTimeString();
    $interval(function(){
        $scope.theTime = new Date().toLocaleTimeString();
    }, 1000); 
});

app.service('hexafy',function(){
    this.myFunc = function(x){
        return x.toString(16);
    };
});

app.controller('customizedService', function($scope,hexafy){
    $scope.hex = hexafy.myFunc(255);
});

app.service('hexafy2', function(){
    this.myFunc2 = function(x){
        return x.toString(16);
    };
});

app.filter('myFormat',['hexafy2', function(hexafy2){
        return function(x){
            return hexafy2.myFunc2(x);
        };
}]);

app.controller('customizedService2',function($scope){
    $scope.counts = [255,251,200];
});