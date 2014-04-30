
var MainController = function($scope, $log, season) {

    $scope.seasonId = season.data.id;

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
