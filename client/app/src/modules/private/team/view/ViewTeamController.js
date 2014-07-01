var ViewTeamController = function(team, regularPicks, playoffPicks, $scope, $log, $modal, $location) {

  $scope.teamData = team.data;

  $scope.regularPicks = regularPicks;
  $scope.playoffPicks = playoffPicks;

  $scope.message = function(team) {
    return "here is a message for the coach";
  };

  $scope.isCoach = function(team) {
    return true;
//    return league.commish_emails.indexOf(userModel.user.email) > -1;
  };

  $scope.editTeam = function(team) {
    alert('popup a modal');
  };

  $scope.showLeague = function(team) {
    $location.path('/season/' + team.league.season_id + '/league/' + team.league.id);
  };

  $scope.makePick = function(team) {
    alert('popup a modal');
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("view team controller");
  };
  init();

};

ViewTeamController.$inject = ['team', 'regularPicks', 'playoffPicks', '$scope', '$log', '$modal', '$location'];
module.exports = ViewTeamController;
