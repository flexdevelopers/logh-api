var TeamPickOneController = function(picks, $scope, $log, pickService) {

  var picks = picks.data,
      currentPick = _.find(picks, function(pick){ return pick.week_id === $scope.week.id });

  $scope.makePick = function(game, squad) {
    if ($scope.isDisabled(game, squad)) {
      // ignore it
      return;
    }
    currentPick = {
      game: game,
      squad: squad
    };
    var pickParams = {
      week_id: game.week_id,
      week_type_id: game.week_type_id,
      game_id: game.id,
      team_id: $scope.team.id,
      squad_id: squad.id
    };
    pickService.savePick(pickParams)
      .finally(function() {
        $scope.showTeam($scope.team, false);
      });
  };

  $scope.hasSquadBeenUsed = function(game, squad) {
    if ($scope.team.league.allow_dups) {
      return false;
    } else {
      var squadHasBeenUsed = false;
      _.each(picks, function(pick) {
        if (pick.squad.id == squad.id && pick.week_type_id == game.week_type_id && pick.week_id != game.week_id) {
          squadHasBeenUsed = true;
        }
      });
      return squadHasBeenUsed;
    }
  };

  $scope.isPicked = function(game, squad, gameStarted) {
    var isPicked = false;
    if (currentPick && currentPick.squad.id == squad.id && currentPick.game.id == game.id && (gameStarted === null || game.started === gameStarted)) {
      isPicked = true;
    }
    return isPicked;
  };

  $scope.isDisabled = function(game, squad) {
    var isDisabled = false;
    if (game.started || $scope.hasSquadBeenUsed(game, squad) || (currentPick && currentPick.locked)) {
      isDisabled = true;
    }
    return isDisabled;
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("pick one controller");
  };
  init();
};

TeamPickOneController.$inject = ['picks', '$scope', '$log', 'pickService'];
module.exports = TeamPickOneController;
