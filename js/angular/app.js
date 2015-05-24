/**
 * Created by Nasruddin on 5/23/2015.
 */
var app = angular.module('StarterApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){

    $scope.testApp = function(){
        //alert("App Started");
        console.log("Hello");
    }

}]);
