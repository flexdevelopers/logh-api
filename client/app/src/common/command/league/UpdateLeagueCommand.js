
commangular.create('UpdateLeagueCommand',
    function($log, leagueService) {

        return {

            execute: function(leagueParams) {
                $log.log('UpdateLeagueCommand: updating a league...');
                var promise = leagueService.updateLeague(leagueParams);
                return promise;
            },
            onError: function(error) {
                $log.log("UpdateLeagueCommand: failure: " + error.data);
            },
            onResult: function(result) {
                $log.log("UpdateLeagueCommand: success");
            }

        }
    });