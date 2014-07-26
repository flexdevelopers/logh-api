var EditLeagueController = function(league, $scope, $log, $location, leagueService) {

    $scope.leagueData = league.data;

    $scope.showLeague = function(league) {
      $location.path('/season/' + league.season_id + '/league/' + league.id);
    };

    $scope.updateLeague = function(league) {
        leagueService.updateLeague(league);
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("edit league controller");
    };
    init();

};

EditLeagueController.$inject = ['league', '$scope', '$log', '$location', 'leagueService'];
module.exports = EditLeagueController;
