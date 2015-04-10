var TeamPickManyController = function($rootScope, $scope, $log, $anchorScroll, messageModel, pickService) {

  var scrollToTop = function() {
    $anchorScroll(); // hacky?
  };

  var allPicksMade = function() {
    return $scope.picks.length == $scope.team.league.max_picks_per_week || $scope.picks.length >= $scope.games.length;
  };

  var getPick = function(game, squad) {
    var pick = _.find($scope.picks, function(pick) { return pick.game_id === game.id && pick.squad_id === squad.id });
    return pick;
  };

  var removePick = function(pickToRemove) {
    $scope.picks = _.reject($scope.picks, function(pick) { return pick.game_id === pickToRemove.game_id && pick.squad_id === pickToRemove.squad_id })
  };

  var removeGamePicks = function(game) {
    $scope.picks = _.reject($scope.picks, function(pick) { return pick.game_id === game.id })
  };

  var addPick = function(game, squad) {
    if (allPicksMade()) {
      var message = 'No more picks allowed. Unselect a pick if necessary.';
      var maxPicks = $scope.team.league.max_picks_per_week;
      if (maxPicks) {
        message = 'Only ' + maxPicks + ' picks allowed. Unselect a pick if necessary.';
      }
      messageModel.setMessage({ type: 'danger', content: message }, false);
      scrollToTop();
      return;
    }
    var pick = {
      week_id: game.week_id,
      week_type_id: game.week_type_id,
      game_id: game.id,
      team_id: $scope.team.id,
      squad_id: squad.id
    };
    $scope.picks.push(pick);
  };

  $scope.togglePick = function(game, squad) {
    if (!$scope.isCoach($scope.team) || game.started) return;
    var pick = getPick(game, squad);
    if (!_.isUndefined(pick) && pick.locked) {
      return; // no toggling locked picks
    }
    $rootScope.$broadcast('TeamPickController::enableSavePicks');
    if (!_.isUndefined(pick)) {
      // if a pick exists already, then you are attempting to de-select it
      removePick(pick);
    } else {
      removeGamePicks(game); // no 2 picks for the same game
      addPick(game, squad);
    }
  };

  $scope.savePicks = function() {
    pickService.savePicks($scope.team.id, $scope.picks)
      .finally(function(result) {
        $scope.showTeam($scope.team);
      });
  };

  $scope.isDisabled = function(game) {
    var isDisabled = false;
    if (game.started || game.postponed) {
      isDisabled = true;
    }
    return isDisabled;
  };

  $scope.pickStatus = function(game, squad) {
    var status = '',
      pick = getPick(game, squad);
    if (!_.isUndefined(pick)) {
      if (pick.correct === true) {
        status = 'check';
      } else if (pick.correct === false) {
        status = 'times';
      } else if (pick.locked) {
        status = 'lock';
      } else {
        status = 'unlock';
      }
    }
    return status;
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

TeamPickManyController.$inject = ['$rootScope', '$scope', '$log', '$anchorScroll', 'messageModel', 'pickService'];
module.exports = TeamPickManyController;
