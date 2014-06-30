var EditLeagueController = function($scope, $log, league) {

    $scope.leagueData = league.data;

    $scope.updateLeague = function(league) {
        $scope.dispatch('UpdateLeagueEvent', { leagueParams: league });
    };

    $scope.canUpdateStartWeek = function(league) {
      return !league.started && league.team_count == 0;
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("edit league controller");
    };
    init();

};

EditLeagueController.$inject = ['$scope', '$log', 'league'];
module.exports = EditLeagueController;
