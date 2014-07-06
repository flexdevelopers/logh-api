var PickService = function($http, $log, apiConfig) {

  this.getRegularPicks = function(params) {
    var apiUrl = apiConfig.baseURL + "teams/" + params.teamId + "/picks/regular";

    var promise = $http.get(apiUrl)
      .success(function(data) {
        $log.debug("PickService: getRegularPicks success");
        return data;
      })
      .error(function(data) {
        $log.debug("PickService: getRegularPicks failed");
        return data;
      });

    return promise;
  };

  this.getPlayoffPicks = function(params) {
    var apiUrl = apiConfig.baseURL + "teams/" + params.teamId + "/picks/playoff";

    var promise = $http.get(apiUrl)
      .success(function(data) {
        $log.debug("PickService: getPlayoffPicks success");
        return data;
      })
      .error(function(data) {
        $log.debug("PickService: getPlayoffPicks failed");
        return data;
      });

    return promise;
  };

};

PickService.$inject = ['$http', '$log', 'apiConfig'];
module.exports = PickService;