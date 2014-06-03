var EditLeagueController = function($scope, $log, league) {

    $scope.leagueData = league.data;

    $scope.updateLeague = function(leagueData) {
        $scope.dispatch('UpdateLeagueEvent', { leagueParams: leagueData });
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
