var TeamPickController = function(team, week, games, picks, $stateParams, $scope, $log, $location, $anchorScroll, userModel, messageModel, dateUtils, pickService) {

  var picks = picks.data;

  var scrollToTop = function() {
    $anchorScroll(); // hacky?
  };

  $scope.pick;

  $scope.team = team.data;

  $scope.week = week.data;

  $scope.games = games.data;

  $scope.numPicks = function(team) {
    if (team.league.max_picks_per_week == 0) {
      return 'Pick all games';
    }
    var msg = 'Pick ' + team.league.max_picks_per_week + ' loser'
    if (team.league.max_picks_per_week > 1) {
      msg += 's';
    }
    return msg;
  };

  $scope.getScore = function(game, index) {
    // warning: magic numbers ahead
    var score = (index === 0) ? game.visiting_squad_score : game.home_squad_score;
    return score;
  };

  $scope.makePick = function(game, squad) {
    if (game.started || $scope.hasSquadBeenUsed(game, squad)) return;
    $scope.pick = {
      week_id: game.week_id,
      week_type_id: game.week_type_id,
      game_id: game.id,
      team_id: $scope.team.id,
      squad_id: squad.id
    };
    if ($scope.team.league.max_picks_per_week === 1) {
      $scope.savePick($scope.pick);
    }
  };

  $scope.savePick = function(pick) {
    if (!pick) {
      messageModel.setMessage({ type: 'warning', content: 'No loser selected' }, false);
      scrollToTop();
    }
    pickService.createPick(pick)
      .finally(function(result) {
        $scope.showTeam($scope.team);
      });
  };

  $scope.starts = function(game) {
    var startsLabel = (game.started) ? 'Started ' : 'Starts ';
    return startsLabel + dateUtils.dateFormat(game.starts_at, "ddd, mmm d h:MM TT (Z)");
  };

  $scope.hasSquadBeenUsed = function(game, squad) {
    var squadHasBeenUsed = false;
    _.each(picks, function(pick) {
      if (pick.squad.id == squad.id && pick.week_type_id == game.week_type_id && pick.week_id != game.week_id) {
        squadHasBeenUsed = true;
      }
    });
    return squadHasBeenUsed;
  };

  $scope.isPicked = function(game, squad) {
    if (!$scope.pick) return false;
    if ($scope.pick.squad_id == squad.id && $scope.pick.game_id == game.id && $scope.pick.week_type_id == game.week_type_id && $scope.pick.week_id == game.week_id) {
      return true;
    }
    return false;
  };

  $scope.showTeam = function(team) {
    var teamPath = '/season/' + team.league.season_id + '/league/' + team.league.id + '/team/' + team.id;
    if (team.league.max_picks_per_week !== 1) {
      teamPath += '?week=' + $scope.week.slug;
    }
    $location.url(teamPath);
  };

  $scope.isCoach = function(team) {
    return team.coach_ids.indexOf(userModel.user.id) > -1;
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("make pick controller");
  };
  init();
};

TeamPickController.$inject = ['team', 'week', 'games', 'picks', '$stateParams', '$scope', '$log', '$location', '$anchorScroll', 'userModel', 'messageModel', 'dateUtils', 'pickService'];
module.exports = TeamPickController;
