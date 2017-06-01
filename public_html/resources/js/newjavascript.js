/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var app = angular.module('myApp',[]);
app.controller('myCtrl',function($scope){
    $scope.firstName="John";
    $scope.lastName = "Doe";
});

var app2 =  angular.module("myApp2",[]);
app2.directive("w3TestDirective",function(){
    return{
        /*
         * The legal restrict values are:

            E for Element name
            A for Attribute
            C for Class
            M for Comment

            By default the value is EA, meaning that both Element names and attribute names can invoke the directive.
         */
        restrict: "ECAM",
        replace: true, /*Note: We've added the replace property in this example, otherwise the comment would be invisible.*/
        template: "<h1>Made by a directive!</h1>"
    };
});

var app3 = angular.module("myApp3",[]);
app3.controller('myCtrl', function($scope){
    $scope.firstname = "John";
    $scope.changeName = function(){
        if($scope.firstname === "John"){
            $scope.firstname= "Tiago";
        }else{
            $scope.firstname="John";
        }        
    };
});