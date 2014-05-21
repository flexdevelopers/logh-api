var TeamService = function($http, $log, $location, apiConfig, messageModel) {

    this.getTeam = function(leagueId, teamId) {
        var promise = $http.get(apiConfig.baseURL + "leagues/" + leagueId + "/teams/" + teamId)
            .success(function(data) {
                $log.debug("TeamService: getTeam success");
                return data;
            })
            .error(function(data) {
                $log.debug("TeamService: getTeam failed");
                return data;
            });

        return promise;
    };

    this.getAliveTeams = function(seasonId) {
        var promise = $http.get(apiConfig.baseURL + "seasons/" + seasonId + "/teams/alive")
            .success(function(data) {
                $log.debug("TeamService: getAliveTeams success");
                return data;
            })
            .error(function(data) {
                $log.debug("TeamService: getAliveTeams failed");
                return data;
            });

        return promise;
    };

    this.getDeadTeams = function(seasonId) {
        var promise = $http.get(apiConfig.baseURL + "seasons/" + seasonId + "/teams/dead")
            .success(function(data) {
                $log.debug("TeamService: getDeadTeams success");
                return data;
            })
            .error(function(data) {
                $log.debug("TeamService: getDeadTeams failed");
                return data;
            });

        return promise;
    };


    this.createTeam = function(teamParams) {
        var promise = $http.post(apiConfig.baseURL + "leagues/" + teamParams.league_id + "/teams",
            { team: teamParams })
            .success(function(data) {
                $log.debug("TeamService: createTeam success");
                var editTeamPath = '/season/' + teamParams.season_id + '/league/' + teamParams.league_id + '/team/' + data.team_id + '/edit';
                $location.path(editTeamPath);
                messageModel.setMessage(data.message, true);
                return data;
            })
            .error(function(data) {
                $log.debug("TeamService: createTeam failed");
                return data;
            });

        return promise;
    };

    this.updateTeam = function(teamParams) {
        var promise = $http.put(apiConfig.baseURL + "leagues/" + teamParams.league_id + "/teams/" + teamParams.id,
            { team: teamParams })
            .success(function(data) {
                $log.debug("TeamService: updateTeam success");
                messageModel.setMessage(data.message, false);
                return data;
            })
            .error(function(data) {
                $log.debug("TeamService: updateTeam failed");
                return data;
            });

        return promise;
    };


};

TeamService.$inject = ['$http', '$log', '$location', 'apiConfig', 'messageModel'];
module.exports = TeamService;