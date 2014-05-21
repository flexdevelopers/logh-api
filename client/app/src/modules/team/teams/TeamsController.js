var TeamsController = function($scope, $log, $state, $stateParams) {

    // pagination
    $scope.currentTeamPage = 1;
    $scope.teamsPerPage = 10;

    $scope.seasonId = $stateParams.seasonId;

    $scope.isAliveState = function() {
        return $state.current.name == 'app.teams.alive';
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("teams controller");
    };
    init();

};

TeamsController.$inject = ['$scope', '$log', '$state', '$stateParams'];
module.exports = TeamsController;
