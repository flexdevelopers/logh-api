'use strict';

var loghApp = angular.module('loghApp');
loghApp.filter('reverse', function() {
  return function(text) {
    return text.split('').reverse().join('');
  };
});

loghApp.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
  var app = this;
  $http( { method: 'GET', url: '/api/seasons/2/leagues' }).
    success(function(data) {
      app.leagues = data;
    }).
    error(function() {
      console.log('no luck');
    });
}]);
