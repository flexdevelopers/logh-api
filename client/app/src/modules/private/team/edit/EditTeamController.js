var EditTeamController = function(team, $scope, $log, $uibModalInstance) {

    $scope.teamData = angular.copy(team);

    $scope.editTeam = function(team) {
      team.name = team.name.toLowerCase();
      $uibModalInstance.close(team);
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
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
        $log.debug("edit team controller");
    };
    init();

};

EditTeamController.$inject = ['team', '$scope', '$log', '$uibModalInstance'];
module.exports = EditTeamController;
