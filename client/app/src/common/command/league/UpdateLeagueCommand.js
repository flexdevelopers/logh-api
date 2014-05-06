
commangular.create('UpdateLeagueCommand',
    function($log, leagueService) {

        return {

            execute: function(leagueParams) {
                $log.log('UpdateLeagueCommand: Updating a league...');
                var promise = leagueService.updateLeague(leagueParams);
                return promise;
            },
            onError: function(error) {
                $log.log("UpdateLeagueCommand: error when updating league: " + error.data);
            },
            onResult: function(result) {
                $log.log("UpdateLeagueCommand: update league was successful");
            }

        }
    });