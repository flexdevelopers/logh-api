commangular.create('CreateTeamCommand',
    function($log, teamService) {

        return {

            execute: function(teamParams) {
                $log.log('CreateTeamCommand: creating a new team...');
                var promise = teamService.createTeam(teamParams);
                return promise;
            },
            onError: function(error) {
                $log.log("CreateTeamCommand: failure: " + error.data);
            },
            onResult: function(result) {
                $log.log("CreateTeamCommand: success");
            }

        }
    });
