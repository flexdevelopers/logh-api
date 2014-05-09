
var PublicLeaguesController = function($scope, $log, publicLeagues) {

    $scope.publicLeagues = publicLeagues.data;

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.log("public leagues controller");
    };
    init();

};

PublicLeaguesController.$inject = ['$scope', '$log', 'publicLeagues'];
module.exports = PublicLeaguesController;

