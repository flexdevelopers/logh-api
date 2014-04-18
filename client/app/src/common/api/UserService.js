/**
 * User service that gets the user data
 * @param $http
 * @param $log
 * @param ApiConfig
 */
var UserService = function($http, $log, $window, apiConfig, userModel) {


    this.getUser = function(userId) {
        $log.log('UserService: getUser');
        var promise = $http.get(apiConfig.baseURL + "users/" + userId)
            .success(function(data) {
                $log.log("UserService: get user success");
                $log.log("UserService: user data:" + data);
                userModel.setUser(data);
                return data;
            })
            .error(function(data) {
                $log.log("UserService: get user failed");
                return data;
            });

        return promise;
    };

    this.login = function(email, password) {
        $log.log('UserService: login');
        var promise = $http.post(
            apiConfig.baseURL + "sessions",
            { email: email, password: password })
            .success(function(data) {
                $log.log("UserService: POST /api/sessions success");
                $window.sessionStorage.token = data.token;
                userModel.setUser(data);
                return data;
            })
            .error(function(data) {
                $log.log("UserService: POST /api/sessions failure");
                return data;
            });

        return promise;
    };


};

UserService.$inject = ['$http', '$log', '$window', 'apiConfig', 'userModel'];
module.exports = UserService;