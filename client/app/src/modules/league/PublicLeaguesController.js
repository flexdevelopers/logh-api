
var PublicLeaguesController = function($scope, $log, publicLeagues) {

    $scope.publicLeagues = publicLeagues.data.payload.leagues;

    $scope.totalItems = 64;
    $scope.currentPage = 4;

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function() {
        console.log('Page changed to: ' + $scope.currentPage);
    };

    $scope.maxSize = 5;
    $scope.bigTotalItems = 175;
    $scope.bigCurrentPage = 1;

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.log("public leagues controller");
    };
    init();

};

PublicLeaguesController.$inject = ['$scope', '$log', 'publicLeagues'];
module.exports = PublicLeaguesController;

