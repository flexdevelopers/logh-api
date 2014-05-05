
var LeaguesController = function($scope, $log) {

    $scope.foo = 'bar';

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.log("leagues controller");
    };
    init();

};

LeaguesController.$inject = ['$scope', '$log'];
module.exports = LeaguesController;

