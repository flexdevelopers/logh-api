module.exports = angular.module('loghApp.leagues.manage', [])
  .controller('ManageLeaguesController', require('./ManageLeaguesController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.leagues.manage', {
        url: '',
        views: {
          leaguesContent: {
            templateUrl: 'modules/private/league/leagues/manage/leagues.manage.tpl.html',
            controller: 'ManageLeaguesController'
          }
        },
        resolve: {
          managedLeagues: ['leagueService', '$stateParams', function(leagueService, $stateParams) {
            return leagueService.getManagedLeagues($stateParams.seasonId);
          }]
        }
      })
    ;
    $urlRouterProvider.otherwise('/');
  });

