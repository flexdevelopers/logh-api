
var HomeController = function($scope, $log, seasonModel) {

    $scope.season = seasonModel.season;

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.log("main controller");
    };
    init();
};

HomeController.$inject = ['$scope', '$log', 'seasonModel'];
module.exports = HomeController;
