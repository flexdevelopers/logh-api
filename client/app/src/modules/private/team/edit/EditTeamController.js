var EditTeamController = function($scope, $log, team) {

    $scope.teamData = team.data;

    $scope.updateTeam = function(teamData) {
        $scope.dispatch('UpdateTeamEvent', { teamParams: teamData });
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("edit team controller");
    };
    init();

};

EditTeamController.$inject = ['$scope', '$log', 'team'];
module.exports = EditTeamController;
