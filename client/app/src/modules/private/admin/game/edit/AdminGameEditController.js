var AdminGameEditController = function(game, squads, $scope, $uibModalInstance) {

  $scope.gameData = angular.copy(game);

  $scope.squads = squads.data;

  $scope.closeStartsAt = function() {
    $scope.startsAtDropdown = {
      isopen: false
    };
  };
  $scope.closeStartsAt();

  $scope.getSquad = function(squadId) {
    var squad = _.find($scope.squads, function(squad) { return squad.id === squadId });
    return squad;
  };

  $scope.editGame = function(game) {
    $uibModalInstance.close(game);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
  };
  init();
};

AdminGameEditController.$inject = ['game', 'squads', '$scope', '$uibModalInstance'];
module.exports = AdminGameEditController;
