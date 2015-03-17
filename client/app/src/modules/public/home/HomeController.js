var HomeController = function($scope, $log, $location, leagueService, messageModel, seasonModel) {

    $scope.selectedSeasonId = seasonModel.selectedSeasonId;

    $scope.createLeague = function(seasonId) {
      $location.url('/season/' + seasonId + '/league/new');
    };

    $scope.joinLeague = function(seasonId) {
      $location.url('/season/' + seasonId + '/leagues/public');
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
      $log.debug("home controller");
    };
    init();
};

HomeController.$inject = ['$scope', '$log', '$location', 'leagueService', 'messageModel', 'seasonModel'];
module.exports = HomeController;
