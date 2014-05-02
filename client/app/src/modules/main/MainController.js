
var MainController = function($scope, $log, season) {

    $scope.season = season.data;

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.log("main controller");
    };
    init();
};

MainController.$inject = ['$scope', '$log', 'season'];
module.exports = MainController;
