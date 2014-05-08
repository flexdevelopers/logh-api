var LeagueService = function($http, $log, $location, apiConfig, leagueModel, messageModel) {

    this.getLeague = function(seasonId, leagueId) {
        var promise = $http.get(apiConfig.baseURL + "seasons/" + seasonId + "/leagues/" + leagueId)
            .success(function(data) {
                $log.log("LeagueService: getLeague success");
                leagueModel.setLeague(data);
                return data;
            })
            .error(function(data) {
                $log.log("LeagueService: getLeague failed");
                return data;
            });

        return promise;
    };

    this.getPublicLeagues = function(seasonId) {
        var promise = $http.get(apiConfig.baseURL + "seasons/" + seasonId + "/leagues/public")
            .success(function(data) {
                $log.log("LeagueService: getPublicLeagues success");
                return data;
            })
            .error(function(data) {
                $log.log("LeagueService: getPublicLeagues failed");
                return data;
            });

        return promise;
    };

    this.getPrivateLeagues = function(seasonId) {
        var promise = $http.get(apiConfig.baseURL + "seasons/" + seasonId + "/leagues/private")
            .success(function(data) {
                $log.log("LeagueService: getPrivateLeagues success");
                return data;
            })
            .error(function(data) {
                $log.log("LeagueService: getPrivateLeagues failed");
                return data;
            });

        return promise;
    };

    this.createLeague = function(leagueParams) {
        var promise = $http.post(apiConfig.baseURL + "seasons/" + leagueParams.season_id + "/leagues",
            { league: leagueParams })
            .success(function(data) {
                $log.log("LeagueService: createLeague success");
                $location.path('/season/' + leagueParams.season_id + '/league/' + data.league_id + '/edit' );
                messageModel.setMessage(data.message, true);
                return data;
            })
            .error(function(data) {
                $log.log("LeagueService: createLeague failed");
                return data;
            });

        return promise;
    };

    this.updateLeague = function(leagueParams) {
        var promise = $http.put(apiConfig.baseURL + "seasons/" + leagueParams.season_id + "/leagues/" + leagueParams.id,
            { league: leagueParams })
            .success(function(data) {
                $log.log("LeagueService: updateLeague success");
                leagueModel.setLeague(leagueParams);
                messageModel.setMessage(data.message, false);
                return data;
            })
            .error(function(data) {
                $log.log("LeagueService: updateLeague failed");
                return data;
            });

        return promise;
    };

};

LeagueService.$inject = ['$http', '$log', '$location', 'apiConfig', 'leagueModel', 'messageModel'];
module.exports = LeagueService;