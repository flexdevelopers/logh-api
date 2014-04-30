
var LeagueController = function($scope, $log, $stateParams) {

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.log("league controller");
    };
    init();

};

LeagueController.$inject = ['$scope', '$log'];
module.exports = LeagueController;
