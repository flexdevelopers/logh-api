var NewLeagueController = function(seasonId, weeks, $scope, $log, $modalInstance, weekService, seasonModel) {

    $scope.weeks = weeks.data;

    $scope.seasons = angular.copy(seasonModel.currentSeasons);

    $scope.maxPicksPerWeek = [
      { number: 0, display: 'Pick all games' },
      { number: 25, display: 'Pick 25 games' },
      { number: 15, display: 'Pick 15 games' },
      { number: 10, display: 'Pick 10 games' },
      { number: 5, display: 'Pick 5 games' },
      { number: 2, display: 'Pick 2 games' },
      { number: 1, display: 'Pick 1 game (no duplicates)' }
    ];

    $scope.newLeagueData = {
        name: '',
        nickname: '',
        season_id: seasonId,
        start_week_id: $scope.weeks[0].id,
        public: true,
        elimination: true,
        max_teams_per_user: '',
        max_picks_per_week: $scope.maxPicksPerWeek[0].number
    };

    $scope.getSeasonWeeks = function() {
      weekService.getAvailableWeeks($scope.newLeagueData.season_id)
        .then(function(response) {
          $scope.weeks = response.data;
          $scope.newLeagueData.start_week_id = $scope.weeks[0].id;
        });
    };

    $scope.createLeague = function(league) {
      $modalInstance.close(league);
    };

    $scope.cancel = function() {
      $modalInstance.dismiss('cancel');
    };

    $scope.hasError = function(input) {
      return !input.$focused && input.$dirty && input.$invalid;
    };

    $scope.hasPropertyError = function(input, property) {
      return !input.$focused && input.$dirty && input.$error[property];
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("new league controller");
    };
    init();

};

NewLeagueController.$inject = ['seasonId', 'weeks', '$scope', '$log', '$modalInstance', 'weekService', 'seasonModel'];
module.exports = NewLeagueController;
