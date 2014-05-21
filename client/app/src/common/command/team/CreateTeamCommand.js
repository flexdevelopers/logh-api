commangular.create('CreateTeamCommand',
    function($log, teamService) {

        return {

            execute: function(teamParams) {
                $log.debug('CreateTeamCommand: creating a new team...');
                var promise = teamService.createTeam(teamParams);
                return promise;
            },
            onError: function(error) {
                $log.debug("CreateTeamCommand: failure: " + error.data);
            },
            onResult: function(result) {
                $log.debug("CreateTeamCommand: success");
            }

        }
    });
