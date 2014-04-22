
commangular.create('LoginCommand',
    function($log, userService) {

    return {

        execute: function(email, password) {
            $log.log('LoginCommand: Authenticating user');
            return userService.login(email, password);
        },
        onError: function(error) {
            $log.log("LoginCommand: error in login: " + error.data);
        },
        onResult: function(result) {
            $log.log("LoginCommand: login successful ");
        }

    }
});


