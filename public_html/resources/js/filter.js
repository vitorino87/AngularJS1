/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var app = angular.module('myApp',[]);


app.controller('personCtrl',function($scope){
    $scope.firstName = "John",
    $scope.lastName = "Doe"
});


app.controller('namesCtrl',function($scope){
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Carl',country:'Sweden'},
        {name:'Margareth',country:'England'},
        {name:'Hege',country:'Norway'},
        {name:'Joe',country:'Denmark'},
        {name:'Gustav',country:'Sweden'},
        {name:'Birgit',country:'Denmark'},
        {name:'Mary',country:'England'},
        {name:'Kai',country:'Norway'}
    ];
});

app.controller('costCtrl',function($scope){
    $scope.price = 60;
});

app.controller('filterCtrl',function($scope){
    $scope.names = [
        'Tiago','Vitorino','Lucas','Damaris','Ferreira'
    ];
});

app.controller('filterCtrl2', function($scope){
    $scope.names=[
       'Tiago','Vitorino','Lucas','Damaris','Ferreira'
    ];
});

app.controller('filterCtrl3', function($scope){
    $scope.names = [
        {name:'Jani',       country:'Norway'},
        {name:'Carl',       country:'Sweden'},
        {name:'Margareth',  country:'England'},
        {name:'Hege',       country:'Norway'},
        {name:'Joe',        country:'Denmark'},
        {name:'Gustav',     country:'Sweden'},
        {name:'Birgit',     country:'Denmark'},
        {name:'Mary',       country:'England'},
        {name:'Kay',        country:'Norway'}
    ];
    $scope.orderByMe = function(x){
        $scope.myOrderBy = x;
    };
});

app.filter('myFormat', function(){
    return function(x){
        var i, c, txt = "";
        for(i=0; i<x.length;i++){
            c=x[i];
            if(i%2==0){
                c=c.toUpperCase();
            }
            txt += c;
        }
        return txt;
    };
});

app.controller('filterCtrl4', function($scope){
    $scope.names = [
        'Jani',
        'Carl',
        'Margareth',
        'Hege',
        'Joe',
        'Gustav',
        'Birgit',
        'Mary',
        'Kai'
    ];
});

