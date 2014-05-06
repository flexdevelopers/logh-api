
var JoinLeagueController = function($scope, $log) {

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

JoinLeagueController.$inject = ['$scope', '$log'];
module.exports = JoinLeagueController;
