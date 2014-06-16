var ViewLeagueController = function($scope, $log, $modal, league, aliveTeams, deadTeams) {

  $scope.leagueData = league.data;

  $scope.startWeek = function(leagueData) {
    var message;
    if (leagueData.started) {
      message = "Started ";
    } else {
      message = "Starts ";
    }
    return message + leagueData.week_display;
  }

  $scope.aliveTeams = aliveTeams.data;
  $scope.deadTeams = deadTeams.data;

  $scope.invite = function() {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/league/invite/league.invite.tpl.html',
      controller: 'InviteLeagueController'
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
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

ViewLeagueController.$inject = ['$scope', '$log', '$modal', 'league', 'aliveTeams', 'deadTeams'];
module.exports = ViewLeagueController;
