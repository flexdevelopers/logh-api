
var PrivateLeaguesController = function($scope, $log, privateLeagues) {

    $scope.privateLeagues = privateLeagues.data;

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("private leagues controller");
    };
    init();

};

PrivateLeaguesController.$inject = ['$scope', '$log', 'privateLeagues'];
module.exports = PrivateLeaguesController;

