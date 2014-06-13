
var HomeController = function($scope, $log, $location, seasonModel) {

    $scope.season = seasonModel.season;

    $scope.createLeague = function(season) {
        $location.path('season/' + season.id + '/league/new');
    };

    $scope.createTeam = function(season) {
        $location.path('season/' + season.id + '/leagues/public');
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("home controller");
    };
    init();
};

HomeController.$inject = ['$scope', '$log', '$location', 'seasonModel'];
module.exports = HomeController;
