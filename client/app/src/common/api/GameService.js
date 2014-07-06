var GameService = function($http, $log, apiConfig) {

  this.getCurrentGames = function() {
    var apiUrl = apiConfig.baseURL + "games/current";

    var promise = $http.get(apiUrl)
      .success(function(data) {
        $log.debug("GameService: getCurrentGames success");
        return data;
      })
      .error(function(data) {
        $log.debug("GameService: getCurrentGames failed");
        return data;
      });

    return promise;
  };

};

GameService.$inject = ['$http', '$log', 'apiConfig'];
module.exports = GameService;