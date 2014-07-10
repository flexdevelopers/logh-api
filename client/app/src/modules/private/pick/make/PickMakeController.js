var PickMakeController = function(regularPicks, playoffPicks, currentGames, $modalInstance, $scope, $log) {

  var regularPicks = regularPicks;
  var playoffPicks = playoffPicks;
  var picks = regularPicks;
//  var picks = _.union(regularPicks, playoffPicks);

  $scope.games = currentGames.data;

  $scope.makePick = function(game, squad) {
    if (!game.started && !$scope.hasSquadBeenUsed(game, squad)) {
      $modalInstance.close();
    }
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  $scope.starts = function(game) {
    var startsLabel = (game.started) ? 'Started ' : 'Starts ';
    return startsLabel + game.start_display;
  };

  $scope.hasSquadBeenUsed = function(game, squad) {
    var squadHasBeenUsed = false;
    _.each(picks, function(pick) {
      if (pick.squad_id == squad.id && pick.week_type_id == game.week_type_id) {
        squadHasBeenUsed = true;
      }
    });
    return squadHasBeenUsed;
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
    $log.debug("make pick controller");
  };
  init();
};

PickMakeController.$inject = ['regularPicks', 'playoffPicks', 'currentGames', '$modalInstance', '$scope', '$log'];
module.exports = PickMakeController;
