
var LeagueController = function($scope, $log) {

    $scope.hasError = function(input) {
        return !input.$focused && input.$dirty && input.$invalid;
    };

    $scope.hasPropertyError = function(input, property) {
        return !input.$focused && input.$dirty && input.$error[property];
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("league controller");
    };
    init();

};

LeagueController.$inject = ['$scope', '$log'];
module.exports = LeagueController;
