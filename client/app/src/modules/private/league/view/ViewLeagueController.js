var ViewLeagueController = function($scope, $log, league) {

  $scope.leagueData = league.data;

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("view league controller");
  };
  init();

};

ViewLeagueController.$inject = ['$scope', '$log', 'league'];
module.exports = ViewLeagueController;
