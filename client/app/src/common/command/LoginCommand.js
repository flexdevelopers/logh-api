
commangular.create('LoginCommand',
    function($log, userService, userModel) {

    return {

        execute: function(email, password) {
            $log.log('LoginCommand: Authenticating user');
            return userService.login(email, password);
        },
        onError: function(error) {
            $log.log("LoginCommand: error in login: " + error.data);
            userModel.reset();
        },
        onResult: function(result) {
            $log.log("LoginCommand: login successful ");
            userModel.setAuthenticated(true);
        }

    }
});


