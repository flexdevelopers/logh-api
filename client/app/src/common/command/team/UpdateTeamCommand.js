commangular.create('UpdateTeamCommand',
    function($log, teamService) {

        return {

            execute: function(teamParams) {
                $log.debug('UpdateTeamCommand: updating a team...');
                var promise = teamService.updateTeam(teamParams);
                return promise;
            },
            onError: function(error) {
                $log.debug("UpdateTeamCommand: failure: " + error.data);
            },
            onResult: function(result) {
                $log.debug("UpdateTeamCommand: success");
            }

        }
    });
