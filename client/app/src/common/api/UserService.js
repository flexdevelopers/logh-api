var UserService = function($http, $log, $window, apiConfig, userModel) {

    this.login = function(email, password) {
        $log.log('UserService: login');
        var promise = $http.post(
            apiConfig.baseURL + "sessions",
            { email: email, password: password })
            .success(function(data) {
                $log.log("UserService: POST /api/sessions success");
                $window.sessionStorage.token = data.token;
                return data;
            })
            .error(function(data) {
                $log.log("UserService: POST /api/sessions failure");
                return data;
            });

        return promise;
    };

    this.logout = function() {
        $log.log('UserService: logout');
        var promise = $http.delete(
            apiConfig.baseURL + 'sessions/destroy')
            .success(function(data) {
                $log.log("UserService: DELETE /api/sessions/destroy success");
                return data;
            })
            .error(function(data) {
                $log.log("UserService: DELETE /api/sessions/destroy failure");
                return data;
            });

        return promise;

    };

    this.getCurrentUser = function() {
        $log.log('UserService: getCurrentUser');
        var promise = $http.get(apiConfig.baseURL + "users/current")
            .success(function(data) {
                $log.log("UserService: get current user success");
                $log.log("UserService: current user data:" + data);
                userModel.setUser(data);
                return data;
            })
            .error(function(data) {
                $log.log("UserService: get current user failed");
                return data;
            });

        return promise;
    };

};

UserService.$inject = ['$http', '$log', '$window', 'apiConfig', 'userModel'];
module.exports = UserService;