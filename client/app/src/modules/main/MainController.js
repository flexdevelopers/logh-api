
var MainController = function($scope, $log, seasonModel) {

    $scope.seasonId = seasonModel.season.id;

    $scope.$on('seasonModel::seasonUpdated', function(event) {
        $scope.seasonId = seasonModel.season.id;
    });

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.log("main controller");
    };
    init();
};

MainController.$inject = ['$scope', '$log', 'seasonModel'];
module.exports = MainController;
