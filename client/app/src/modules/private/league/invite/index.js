module.exports = angular.module('loghApp.league.invite', [])
  .controller('InviteLeagueController', require('./InviteLeagueController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.league.invite', {
        url: '/{leagueId}/invite',
        views: {
          leagueContent: {
            templateUrl: 'modules/private/league/invite/league.invite.tpl.html',
            controller: 'InviteLeagueController'
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });
