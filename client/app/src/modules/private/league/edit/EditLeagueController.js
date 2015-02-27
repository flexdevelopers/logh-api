var EditLeagueController = function(league, $scope, $log, $location, $modalInstance, weekService, seasonModel) {

    $scope.seasons = angular.copy(seasonModel.currentSeasons);

    $scope.leagueData = angular.copy(league);

    $scope.maxPicksPerWeek = [
      { number: null, display: 'Pick every game' },
      { number: 25, display: 'Pick 25 losers' },
      { number: 15, display: 'Pick 15 losers' },
      { number: 10, display: 'Pick 10 losers' },
      { number: 5, display: 'Pick 5 losers' },
      { number: 2, display: 'Pick 2 losers' },
      { number: 1, display: 'Pick 1 loser' }
    ];

    $scope.getSeasonWeeks = function() {
      $scope.editBtnDisabled = true;
      weekService.getAvailableWeeks($scope.leagueData.season_id)
        .then(function(response) {
          $scope.weeks = response.data;
          $scope.editBtnDisabled = false;
        });
    };

    $scope.updateLeague = function(league) {
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
        $log.debug("edit league controller");
        if (!$scope.leagueData.started) {
          $scope.getSeasonWeeks();
        }
    };
    init();

};

EditLeagueController.$inject = ['league', '$scope', '$log', '$location', '$modalInstance', 'weekService', 'seasonModel'];
module.exports = EditLeagueController;
