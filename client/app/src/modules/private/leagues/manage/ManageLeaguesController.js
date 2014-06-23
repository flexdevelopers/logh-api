var ManagedLeaguesController = function($scope, $log, $location, managedLeagues) {

    $scope.managedLeagues = managedLeagues.data;

    $scope.createLeague = function(season) {
        $location.path('/season/' + season.id + '/league/new');
    };

  $scope.viewLeague = function(league) {
    $location.path('/season/' + league.season_id + '/league/' + league.id);
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("managed leagues controller");
    };
    init();

};

ManagedLeaguesController.$inject = ['$scope', '$log', '$location', 'managedLeagues'];
module.exports = ManagedLeaguesController;

