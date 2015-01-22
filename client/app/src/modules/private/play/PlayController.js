var PlayController = function($scope, $log, $location, $modal, $state, $stateParams, messageModel, seasonModel, weekService, leagueService) {

  $scope.selectedSeasonId = parseInt($stateParams.seasonId);

  $scope.startedSeasons = angular.copy(seasonModel.startedSeasons);

  $scope.teamOptions = { alive: true, dead: true };
  $scope.leagueOptions = { managed: true };

  $scope.query = '';

  $scope.changeSeason = function(seasonId) {
    seasonModel.setSelectedSeasonId(seasonId);
    var newPath = $location.path().replace(/(\/season\/)\d*/, '$1' + seasonId);
    $location.url(newPath);
  };

  $scope.myTeams = function(seasonId) {
    $location.url('/season/' + seasonId + '/my/teams');
  };

  $scope.myLeagues = function(seasonId) {
    $location.url('/season/' + seasonId + '/my/leagues');
  };

  $scope.resetSearch = function() {
    $scope.query = '';
  };

  $scope.isState = function(states) {
    return _.indexOf(states, $state.current.name) > -1;
  };

  $scope.createLeague = function(seasonId) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/league/new/league.new.tpl.html',
      controller: 'NewLeagueController',
      resolve: {
        seasonId: function() {
          return seasonId;
        },
        weeks: function() {
          return weekService.getAvailableWeeks(seasonId);
        }
      }

    });

    modalInstance.result.then(function(league) {
      leagueService.createLeague(league);
    }, function () {
      $log.debug('Create league modal dismissed...');
      messageModel.setMessage({ type: 'warning', content: 'Create league cancelled' }, false);
    });

  };

  $scope.joinLeague = function(seasonId) {
    $location.url('/season/' + seasonId + '/leagues/public');
  };

    /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("play controller");
  };
  init();

};

PlayController.$inject = ['$scope', '$log', '$location', '$modal', '$state', '$stateParams', 'messageModel', 'seasonModel', 'weekService', 'leagueService'];
module.exports = PlayController;
