var PlayController = function($scope, $log, $location, $modal, $state, $stateParams, messageModel, seasonModel, weekService, leagueService) {

  $scope.currentSeasonId = seasonModel.currentSeasons[0].id;

  $scope.startedSeasons = angular.copy(seasonModel.startedSeasons);

  $scope.selectedSeason = {
    id: parseInt($stateParams.seasonId)
  };

  $scope.teamOptions = { alive: true, dead: true };
  $scope.leagueOptions = { managed: true };

  $scope.query = '';

  $scope.changeSeason = function() {
    var newPath = $location.path().replace(/(\/season\/)\d*/, '$1' + $scope.selectedSeason.id);
    $location.path(newPath);
  };

  $scope.myTeams = function() {
    $location.path('/season/' + $stateParams.seasonId + '/my/teams');
  };

  $scope.myLeagues = function() {
    $location.path('/season/' + $stateParams.seasonId + '/my/leagues');
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
    $location.path('/season/' + seasonId + '/leagues/public');
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
