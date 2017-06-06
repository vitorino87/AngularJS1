/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module('myApp',["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
            .when("/",{
                template:"<h1>Main</h1><p>Click on\n\
the links to change this content</p>"
    })
            .when("/banana",{
                template:"<h1>Banana</h1><p>Bananas contain\n\
around 75% water.</p>"
    })
            .when("/tomato",{
                template:"<h1>Tomato</h1><p>Tomatoes contain\n\
around 95% water.</p>"
    });
});