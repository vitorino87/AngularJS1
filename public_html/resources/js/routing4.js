/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app = angular.module("myApp",["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
            .when("/banana",{
                template:"<h1>Banana</h1><p>Bananas contain around 75% water.</p>"
    })
            .when("/tomato",{
                template:"<h1>Tomato</h1><p>Tomatoes contain around 95% water.</p>"
    })
            .otherwise({
                template:"<h1>Nothing</h1><p>Nothing has been selected</p>"
    });
});

