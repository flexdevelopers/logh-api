var SquadService = function($http, $log, apiConfig) {

  this.getSquads = function() {
    var apiUrl = apiConfig.baseURL + "admin/squads/all";

    var promise = $http.get(apiUrl)
      .success(function(data) {
        $log.debug("SquadService: getSquads success");
        return data;
      })
      .error(function(data) {
        $log.debug("SquadService: getSquads failed");
        return data;
      });

    return promise;
  };

  this.getWeekSquads = function(week) {
    var apiUrl = apiConfig.baseURL + "admin/weeks/" + week.id + "/squads";

    var promise = $http.get(apiUrl)
      .success(function(data) {
        $log.debug("SquadService: getWeekSquads success");
        return data;
      })
      .error(function(data) {
        $log.debug("SquadService: getWeekSquads failed");
        return data;
      });

    return promise;
  };

};

SquadService.$inject = ['$http', '$log', 'apiConfig'];
module.exports = SquadService;