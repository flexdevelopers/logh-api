var TeamController = function($scope, $log) {

    $scope.foo = 'bar';

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.log("team controller");
    };
    init();

};

TeamController.$inject = ['$scope', '$log'];
module.exports = TeamController;
