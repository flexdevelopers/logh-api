var NewLeagueController = function($scope, $log, $modalInstance, weekService, seasonModel) {

    $scope.seasons = angular.copy(seasonModel.currentSeasons);

    $scope.maxPicksPerWeek = [
      { number: null, display: 'Pick a loser for every game' },
      { number: 25, display: 'Pick up to 25 losers' },
      { number: 15, display: 'Pick up to 15 losers' },
      { number: 10, display: 'Pick up to 10 losers' },
      { number: 5, display: 'Pick up to 5 losers' },
      { number: 2, display: 'Pick up to 2 losers' },
      { number: 1, display: 'Pick 1 loser' }
    ];

    $scope.newLeagueData = {
        name: '',
        nickname: '',
        season_id: $scope.seasons[$scope.seasons.length - 1].id,
        start_week_id: '',
        public: true,
        elimination: false,
        max_teams_per_user: '',
        max_picks_per_week: $scope.maxPicksPerWeek[0].number
    };

    $scope.getSeasonWeeks = function() {
      $scope.createBtnDisabled = true;
      weekService.getAvailableWeeks($scope.newLeagueData.season_id)
        .then(function(response) {
          $scope.weeks = response.data;
          $scope.newLeagueData.start_week_id = $scope.weeks[0].id;
          $scope.createBtnDisabled = false;
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
        $scope.getSeasonWeeks();
    };
    init();

};

NewLeagueController.$inject = ['$scope', '$log', '$modalInstance', 'weekService', 'seasonModel'];
module.exports = NewLeagueController;
