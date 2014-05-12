commangular.create('UpdateTeamCommand',
    function($log, teamService) {

        return {

            execute: function(teamParams) {
                $log.log('UpdateTeamCommand: updating a team...');
                var promise = teamService.updateTeam(teamParams);
                return promise;
            },
            onError: function(error) {
                $log.log("UpdateTeamCommand: failure: " + error.data);
            },
            onResult: function(result) {
                $log.log("UpdateTeamCommand: success");
            }

        }
    });
