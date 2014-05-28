var UserService = function($http, $log, $state, $window, $timeout, apiConfig, messageModel, userModel) {

    this.signin = function(email, password) {
        var promise = $http.post(
            apiConfig.baseURL + "sessions",
            { email: email, password: password })
            .success(function(data) {
                $log.debug("UserService: signin success");
                userModel.setUser(data.user);
                $window.sessionStorage.token = data.token;
                messageModel.resetMessage();
                return data;
            })
            .error(function(data) {
                $log.debug("UserService: signin failure");
                return data;
            });

        return promise;
    };

    this.logout = function() {
        var promise = $http.delete(
            apiConfig.baseURL + 'sessions/destroy')
            .success(function(data) {
                messageModel.setMessage(data.message, false);
                $log.debug("UserService: logout success");
                return data;
            })
            .error(function(data) {
                $log.debug("UserService: logout failure");
                return data;
            });

        return promise;

    };

    this.getCurrentUser = function() {
        var promise = $http.get(apiConfig.baseURL + "users/current")
            .success(function(data) {
                $log.debug("UserService: getCurrentUser success");
                userModel.setUser(data);
                return data;
            })
            .error(function(data) {
                $log.debug("UserService: getCurrentUser failed");
                $timeout(function () {
                  messageModel.setMessage({ type: 'danger', content: "Authorization failure. Please sign in or register." }, true);
                  $state.go('public.signin');
                }, 200);
            });

        return promise;
    };

    this.createUser = function(userParams) {
        var promise = $http.post(apiConfig.baseURL + "users",
            { user: userParams })
            .success(function(data) {
                $log.debug("UserService: createUser success");
                userModel.setUser(data.user);
                $window.sessionStorage.token = data.token;
                messageModel.setMessage(data.message, true);
                return data;
            })
            .error(function(data) {
                $log.debug("UserService: createUser failed");
                return data;
            });

        return promise;
    };

    this.updateUser = function(userParams) {
        var promise = $http.put(apiConfig.baseURL + "users/current",
            { user: userParams })
            .success(function(data) {
                $log.debug("UserService: updateUser success");
                userModel.setUser(userParams);
                messageModel.setMessage(data.message, false);
                return data;
            })
            .error(function(data) {
                $log.debug("UserService: updateUser failed");
                return data;
            });

        return promise;
    };

};

UserService.$inject = ['$http', '$log', '$state', '$window', '$timeout', 'apiConfig', 'messageModel', 'userModel'];
module.exports = UserService;