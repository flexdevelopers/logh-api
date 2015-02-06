module.exports = angular.module('loghApp.team.pick.one', [])
  .controller('TeamPickOneController', require('./TeamPickOneController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.team.pick.one', {
        url: '/pick',
        views: {
          pickContent: {
            templateUrl: 'modules/private/team/pick/one/team.pick.one.tpl.html',
            controller: 'TeamPickOneController'
          }
        },
        resolve: {
          picks: function($stateParams, pickService) {
            return pickService.getPicks({ teamId: $stateParams.teamId });
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });
