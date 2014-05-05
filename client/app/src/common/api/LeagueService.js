var LeagueService = function($http, $log, $location, apiConfig, messageModel) {

    this.createLeague = function(leagueParams) {
        $log.log('LeagueService: createLeague');
        var promise = $http.post(apiConfig.baseURL + "seasons/" + leagueParams.season_id + "/leagues",
            { league: leagueParams })
            .success(function(data) {
                $log.log("LeagueService: createLeague success");
                // todo: change to this? $state.go('app.league.detail', { leagueId: data.payload.league.id, seasonId: data.payload.league.season_id });
                $location.path('/seasons/' + leagueParams.season_id + '/leagues/' + data.payload.league_id );
                messageModel.setMessage(data.message);
                return data;
            })
            .error(function(data) {
                $log.log("LeagueService: createLeague failed");
                return data;
            });

        return promise;
    };

};

LeagueService.$inject = ['$http', '$log', '$location', 'apiConfig', 'messageModel'];
module.exports = LeagueService;