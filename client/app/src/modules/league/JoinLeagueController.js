
var JoinLeagueController = function($scope, $log, league) {

    $scope.leagueData = league.data;

    $scope.joinLeague = function(team) {
        $scope.dispatch('CreateTeamEvent', {});
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.log("join league controller");
    };
    init();

};

JoinLeagueController.$inject = ['$scope', '$log', 'league'];
module.exports = JoinLeagueController;
