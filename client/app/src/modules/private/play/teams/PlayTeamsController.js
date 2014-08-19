var PlayTeamsController = function(teams, $scope, $log, $location) {

  $scope.teams = teams.data;

  // pagination
  $scope.currentTeamPage = 1;
  $scope.teamsPerPage = 100;

  $scope.showTeam = function(season, team) {
    $location.path('/season/' + season.id + '/league/' + team.league.id + '/team/' + team.id);
  };

  $scope.hasNoPick = function(team) {
    return team.last_pick_squad_name == 'No Pick';
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("play teams controller");
  };
  init();

};

PlayTeamsController.$inject = ['teams', '$scope', '$log', '$location'];
module.exports = PlayTeamsController;
