var docsAppModule = angular.module('docsApp', ['ngResource']);

docsAppModule.controller('DocsController', ['$scope', 'League', function($scope, League) {
    $scope.leagues = League.query();
}]);

docsAppModule.factory('League', ['$resource', function($resource) {
    return $resource('/seasons/47/leagues'); // just for shits and giggles
}]);