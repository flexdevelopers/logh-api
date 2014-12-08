var NewLeagueController = function(weeks, $scope, $log, $modalInstance, weekService, seasonModel) {

    $scope.weeks = weeks.data;

    $scope.seasons = angular.copy(seasonModel.currentSeasons);

    $scope.newLeagueData = {
        name: '',
        nickname: '',
        season_id: seasonModel.currentSeasons[0].id,
        start_week_id: $scope.weeks[0].id,
        public: true,
        elimination: true,
        max_teams_per_user: ''
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

NewLeagueController.$inject = ['weeks', '$scope', '$log', '$modalInstance', 'weekService', 'seasonModel'];
module.exports = NewLeagueController;
