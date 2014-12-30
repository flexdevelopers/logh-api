var AdminGameNewController = function(week, lastGame, squads, $scope, $modalInstance) {

  $scope.weekData = week;

  $scope.squads = squads.data;

  $scope.newGameData = {
    week_id: week.id,
    home_squad_id: squads.data[0].id,
    visiting_squad_id: squads.data[0].id,
    starts_at: (lastGame) ? lastGame.starts_at : moment().format()
  };

  $scope.closeStartsAt = function() {
    $scope.startsAtDropdown = {
      isopen: false
    };
  };
  $scope.closeStartsAt();

  $scope.createGame = function(game) {
    $modalInstance.close(game);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
  };
  init();
};

AdminGameNewController.$inject = ['week', 'lastGame', 'squads', '$scope', '$modalInstance'];
module.exports = AdminGameNewController;
