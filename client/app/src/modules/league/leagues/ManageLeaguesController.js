var ManagedLeaguesController = function($scope, $log, managedLeagues) {

    $scope.managedLeagues = managedLeagues.data;

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.log("managed leagues controller");
    };
    init();

};

ManagedLeaguesController.$inject = ['$scope', '$log', 'managedLeagues'];
module.exports = ManagedLeaguesController;

