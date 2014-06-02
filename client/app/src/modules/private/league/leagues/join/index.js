module.exports = angular.module('loghApp.leagues.join', [])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.leagues.join', {
        url: '/',
        abstract: true,
        views: {
          leaguesContent: {
            templateUrl: 'modules/private/league/leagues/join/leagues.join.tpl.html'
          }
        }
      })
    ;
    $urlRouterProvider.otherwise('/');
  });

