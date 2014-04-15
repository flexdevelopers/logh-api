'use strict';

var loghApp = angular.module('loghApp');
loghApp.filter('reverse', function() {
  return function(text) {
    return text.split('').reverse().join('');
  };
});

function MainCtrl($http, $scope) {
  var app = this;
  $http( { method: 'GET', url: '/api/seasons/9/leagues' }).
    success(function(data) {
      app.leagues = data;
    }).
    error(function() {
      console.log('no luck');
    });


}

