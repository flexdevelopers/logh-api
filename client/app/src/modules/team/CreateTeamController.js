var CreateTeamController = function($scope, $log, $stateParams, league) {

    $scope.league = league.data;

    $scope.newTeamData = {
        name: '',
        season_id: $stateParams.seasonId,
        league_id: $scope.league.id
    };

    $scope.create = function(newTeam) {
        $scope.dispatch('CreateTeamEvent', { teamParams: newTeam } );
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
        $log.log("create team controller");
    };
    init();

};

CreateTeamController.$inject = ['$scope', '$log', '$stateParams', 'league'];
module.exports = CreateTeamController;
