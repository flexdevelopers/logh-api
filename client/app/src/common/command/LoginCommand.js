
commangular.create('LoginCommand',
    function($log, $commangular, userService, userModel) {

    return {

        execute: function(email, password) {
            $log.log('LoginCommand: Authenticating user');
            return userService.login(email, password);
        },
        onError: function(error) {
            $log.log("LoginCommand: error in login: " + error.data);
            userModel.setAuthenticationFailure();
        },
        onResult: function(result) {
            $log.log("LoginCommand: login successful ");
            userModel.setAuthenticated(true);
        }

    }
});


