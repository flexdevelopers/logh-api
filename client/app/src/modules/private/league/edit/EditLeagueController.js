var EditLeagueController = function(weeks, league, $scope, $log, $location, $modalInstance) {

    $scope.weeks = weeks.data;

    $scope.leagueData = angular.copy(league);

    $scope.showLeague = function(league) {
      $location.path('/season/' + league.season_id + '/league/' + league.id);
    };

    $scope.updateLeague = function(league) {
      $modalInstance.close(league);
    };

    $scope.cancel = function() {
      $modalInstance.dismiss('cancel');
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("edit league controller");
    };
    init();

};

EditLeagueController.$inject = ['weeks', 'league', '$scope', '$log', '$location', '$modalInstance'];
module.exports = EditLeagueController;
