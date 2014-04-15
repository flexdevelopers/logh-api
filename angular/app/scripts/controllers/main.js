'use strict';

var loghApp = angular.module('loghApp');
loghApp.filter('reverse', function() {
  return function(text) {
    return text.split('').reverse().join('');
  };
});

loghApp.controller('MainCtrl', ['$scope', function($scope) {

  $scope.choices = [
    { code: 'edit-profile', desc: 'Edit Profile' },
    { code: 'sign-out', desc: 'Sign Out' }
  ];

  $scope.footon = function(choice) {
    alert(choice.desc) ;
  };

}]);
