var ViewLeagueController = function(league, aliveTeams, deadTeams, $scope, $log, $modal, $location, userModel) {

  $scope.leagueData = league.data;

  $scope.aliveTeams = aliveTeams.data;
  $scope.deadTeams = deadTeams.data;

  // pagination
  $scope.currentTeamPage = 1;
  $scope.teamsPerPage = 10;

  $scope.message = function(league) {
    var message = 'The league message board is empty';
    if (league.message && league.message.length > 0) {
      message = league.message;
    }
    return message;
  };

  $scope.startWeek = function(leagueData) {
    var message;
    if (leagueData.started) {
      message = "Started ";
    } else {
      message = "Starts ";
    }
    return message + leagueData.week_display;
  };

  $scope.isCommish = function(league) {
    return league.commish_emails.indexOf(userModel.user.email) > -1;
  };

  $scope.editLeague = function(league) {
    $location.path($location.path() + '/edit');
  };

  $scope.showTeam = function(team) {
    $location.path($location.path() + '/team/' + team.id);
  };

  $scope.joinLeague = function(league) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/league/join/league.join.tpl.html',
      controller: 'LeagueJoinController',
      resolve: {
        league: function() {
          return league;
        }
      }
    });

    modalInstance.result.then(function (team) {
      $scope.dispatch('CreateTeamEvent', { teamParams: team } );
    }, function () {
      $log.debug('Join league modal dismissed...');
    });

  };

  $scope.requestInvite = function(league) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/league/invite/request/league.invite.request.tpl.html',
      controller: 'LeagueInviteRequestController',
      resolve: {
        leagueId: function() {
          return league.id;
        }
      }
    });

    modalInstance.result.then(function (invitation) {
      $scope.dispatch('LeagueInviteRequestEvent', { inviteParams: invitation });
    }, function () {
      $log.debug('Request invite modal dismissed...');
    });

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
    $scope.currentTeamPage = 1;
  };

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
