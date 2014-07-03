var ViewTeamController = function(team, regularPicks, playoffPicks, $scope, $log, $modal, $location, userModel) {

  $scope.teamData = team.data;

  $scope.regularPicks = regularPicks.data;
  $scope.playoffPicks = playoffPicks.data;

  $scope.message = function(team) {
    return "here is a message for the coach";
  };

  $scope.isCoach = function(team) {
    return team.coach_emails.indexOf(userModel.user.email) > -1;
  };

  $scope.editTeam = function(team) {
    alert('popup a modal');
  };

  $scope.showLeague = function(team) {
    $location.path('/season/' + team.league.season_id + '/league/' + team.league.id);
  };

  $scope.editTeam = function(team) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/team/edit/team.edit.tpl.html',
      controller: 'EditTeamController',
      resolve: {
        team: function() {
          return team;
        }
      }
    });

    modalInstance.result.then(function (team) {
      $scope.dispatch('UpdateTeamEvent', { teamParams: team } );
    }, function () {
      $log.debug('Edit team modal dismissed...');
    });

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

ViewTeamController.$inject = ['team', 'regularPicks', 'playoffPicks', '$scope', '$log', '$modal', '$location', 'userModel'];
module.exports = ViewTeamController;
