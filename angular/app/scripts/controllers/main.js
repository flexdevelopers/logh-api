'use strict';

var loghApp = angular.module('loghApp');
loghApp.filter('reverse', function() {
  return function(text) {
    return text.split('').reverse().join('');
  };
});

loghApp.controller('MainCtrl', ['$scope', '$http', '$window', function($scope, $http, $window) {

  $scope.choices = [
    { code: 'edit-profile', desc: 'Edit Profile' },
    { code: 'sign-out', desc: 'Sign Out' }
  ];

  $scope.isCollapsed = true;

  // needs to be in own controller
  $scope.submit = function () {
    $http
      .post('/api/sessions', $scope.user)
      .success(function (data, status, headers, config) {
        $window.sessionStorage.token = data.token;
        $scope.isAuthenticated = true;
      })
      .error(function (data, status, headers, config) {
        delete $window.sessionStorage.token;
        $scope.isAuthenticated = false;
        $scope.message = 'Error: Invalid user or password';
      });
  };

  $scope.logout = function () {
    $scope.isAuthenticated = false;
    delete $window.sessionStorage.token;
  };

  $scope.getLeagues = function () {
    $http({url: '/api/seasons/9/leagues', method: 'GET'})
      .success(function (data, status, headers, config) {
        alert(JSON.stringify(data));
      })
      .error(function (data, status, headers, config) {
        alert(JSON.stringify(data));
      });
  };

}]);

loghApp.factory('authInterceptor', function ($rootScope, $q, $window) {
  return {
    request: function (config) {
      config.headers = config.headers || {};
      if ($window.sessionStorage.token) {
        config.headers.Authorization = $window.sessionStorage.token;
      }
      return config;
    },
    responseError: function (rejection) {
      if (rejection.status === 401) {
        // handle the case where the user is not authenticated
      }
      return $q.reject(rejection);
    }
  };
});

loghApp.config(function ($httpProvider) {
  $httpProvider.interceptors.push('authInterceptor');
});
