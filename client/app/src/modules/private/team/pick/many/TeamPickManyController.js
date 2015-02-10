var TeamPickManyController = function(picks, $scope, $log, $anchorScroll, messageModel, pickService) {

  var scrollToTop = function() {
    $anchorScroll(); // hacky?
  };

  $scope.picks = picks.data;

  $scope.savePicks = function() {
    alert('save picks');
  };

  $scope.addPick = function(game, squad) {
    if (!$scope.isCoach($scope.team) || game.started) return;
    var pick = {
      week_id: game.week_id,
      week_type_id: game.week_type_id,
      game_id: game.id,
      team_id: $scope.team.id,
      squad_id: squad.id
    };
    $scope.picks.push(pick);
  };

  $scope.savePicksFooo = function(picks) {
    if (!picks || picks.length == 0) {
      messageModel.setMessage({ type: 'warning', content: 'No losers selected' }, false);
      scrollToTop();
    }
    pickService.savePicks(picks)
      .finally(function(result) {
        $scope.showTeam($scope.team);
      });
  };

  $scope.isPicked = function(game, squad) {
    if (!$scope.pick) return false;
    if ($scope.pick.squad_id == squad.id && $scope.pick.game_id == game.id && $scope.pick.week_type_id == game.week_type_id && $scope.pick.week_id == game.week_id) {
      return true;
    }
    return false;
  };

  $scope.$on('TeamPickController::savePicks', function(event) {
    $scope.savePicks();
  });

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("pick many controller");
  };
  init();
};

TeamPickManyController.$inject = ['picks', '$scope', '$log', '$anchorScroll', 'messageModel', 'pickService'];
module.exports = TeamPickManyController;
