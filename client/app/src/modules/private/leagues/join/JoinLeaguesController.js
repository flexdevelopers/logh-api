var JoinLeaguesController = function($scope, $log, $location) {

  $scope.publicLeagues = function(seasonId) {
    $location.path('/season/' + seasonId + '/leagues/public');
  };

  $scope.privateLeagues = function(seasonId) {
    $location.path('/season/' + seasonId + '/leagues/private');
  };

  $scope.resetSearch = function() {
    $scope.search = {
      name: ""
    };
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("join leagues controller");
  };
  init();

};

JoinLeaguesController.$inject = ['$scope', '$log', '$location'];
module.exports = JoinLeaguesController;
