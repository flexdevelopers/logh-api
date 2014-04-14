'use strict';

angular.module('angularApp')
  .controller('MainCtrl', function ($http) {
    var app = this;
    $http({method: 'GET', url: '/api/seasons/2/leagues'}).
      success(function(data, status, headers, config) {
        app.leagues = data;
      }).
      error(function(data, status, headers, config) {
        console.log('no luck');
      });
  });
