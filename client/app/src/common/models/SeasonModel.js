
var SeasonModel = function($rootScope, $log) {

    var season = {};
    season.id = '';
    season.name = '';

    this.season = season;

    this.setSeason = function(seasonData) {
        season = angular.extend(season, seasonData);
        $rootScope.$broadcast('seasonModel::seasonUpdated', season);
        $log.log("SeasonModel: name: " + season.name);
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        console.log("creating season model");
    };
    init();

};

SeasonModel.$inject = ['$rootScope', '$log'];
module.exports = SeasonModel;
