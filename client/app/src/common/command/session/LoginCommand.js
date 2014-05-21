
commangular.create('LoginCommand',
    function($log, userService, userModel) {

    return {

        execute: function(email, password) {
            $log.debug('LoginCommand: authenticating user...');
            return userService.login(email, password);
        },
        onError: function(error) {
            $log.debug("LoginCommand: failure: " + error.data);
            userModel.resetUser();
        },
        onResult: function(result) {
            $log.debug("LoginCommand: success ");
        }

    }
});


