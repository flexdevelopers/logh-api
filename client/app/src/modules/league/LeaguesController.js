
var LeaguesController = function($scope, $log, leagues) {

    $scope.leagues = leagues.data.payload.leagues;

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.log("leagues controller");
    };
    init();

};

LeaguesController.$inject = ['$scope', '$log', 'leagues'];
module.exports = LeaguesController;

