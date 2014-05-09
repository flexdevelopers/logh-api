var TeamService = function($http, $log, $location, apiConfig, messageModel) {

    this.createTeam = function(teamParams) {
        var promise = $http.post(apiConfig.baseURL + "leagues/" + teamParams.league_id + "/teams",
            { team: teamParams })
            .success(function(data) {
                $log.log("TeamService: createTeam success");
                $location.path('/season/' + teamParams.season_id + '/league/' + teamParams.league_id + '/team/' + data.team_id + '/edit' );
                messageModel.setMessage(data.message, true);
                return data;
            })
            .error(function(data) {
                $log.log("TeamService: createTeam failed");
                return data;
            });

        return promise;
    };

};

TeamService.$inject = ['$http', '$log', '$location', 'apiConfig', 'messageModel'];
module.exports = TeamService;