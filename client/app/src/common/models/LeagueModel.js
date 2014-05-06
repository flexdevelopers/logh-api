
var LeagueModel = function($rootScope, $window, $log) {

    var league = {};
    league.loaded = false;
    league.id = 0;
    league.name = '';
    league.public = true;
    league.season_id = 0;
    league.start_week_id = 0;
    league.max_teams_per_user = 0;

    this.league = league;

    this.setLeague = function(leagueData) {
        league.loaded = true;
        league = angular.extend(league, leagueData);
        $rootScope.$broadcast('leagueModel::leagueUpdated', league);
        $log.log("LeagueModel: setLeague: " + league.name);
    };

    this.resetLeague = function() {
        league = {};
        league.loaded = false;
        league.id = 0;
        league.name = '';
        league.public = true;
        league.season_id = 0;
        league.start_week_id = 0;
        league.max_teams_per_user = 0;

        this.league = league;
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        console.log("creating league model...");
    };
    init();

};

LeagueModel.$inject = ['$rootScope', '$window', '$log'];
module.exports = LeagueModel;