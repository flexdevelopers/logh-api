var ViewLeagueController = function($scope, $log, league, aliveTeams, deadTeams) {

  $scope.leagueData = league.data;

  $scope.aliveTeams = aliveTeams.data;
  $scope.deadTeams = deadTeams.data;

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

ViewLeagueController.$inject = ['$scope', '$log', 'league', 'aliveTeams', 'deadTeams'];
module.exports = ViewLeagueController;
