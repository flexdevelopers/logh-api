var ViewLeagueController = function(league, aliveTeams, deadTeams, $scope, $log, $modal, $location, userModel) {

  $scope.leagueData = league.data;

  $scope.aliveTeams = aliveTeams.data;
  $scope.deadTeams = deadTeams.data;

  $scope.startWeek = function(leagueData) {
    var message;
    if (leagueData.started) {
      message = "Started ";
    } else {
      message = "Starts ";
    }
    return message + leagueData.week_display;
  };

  $scope.showInvite = function(league) {
    return league.commish_emails.indexOf(userModel.user.email) > -1;
  };

  $scope.showJoin = function(league) {
    return !league.started;
  };

  $scope.joinLeague = function(league) {
    $location.path('/season/' + league.season_id + '/league/' + league.id + '/team/new');
  };

  $scope.invite = function(leagueId) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/league/invite/league.invite.tpl.html',
      controller: 'LeagueInviteController',
      resolve: {
        leagueId: function() {
          return leagueId;
        }
      }
    });

    modalInstance.result.then(function (invitation) {
      $scope.dispatch('CreateLeagueInviteEvent', { inviteParams: invitation });
    }, function () {
      $log.debug('Invite coach modal dismissed...');
    });
  };

  $scope.resetSearch = function() {
    $scope.search = {
      name: ""
    };
  }

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("view league controller");
  };
  init();

};

ViewLeagueController.$inject = ['league', 'aliveTeams', 'deadTeams', '$scope', '$log', '$modal', '$location', 'userModel'];
module.exports = ViewLeagueController;
