commangular.create('SigninCommand',
    function($log, $state, userService, userModel) {

    return {

        execute: function(email, password) {
            $log.debug('SigninCommand: authenticating user...');
            return userService.signin(email, password);
        },
        onError: function(error) {
            $log.debug("SigninCommand: failure: " + error.data);
            userModel.resetUser();
        },
        onResult: function(result) {
            $log.debug("SigninCommand: success ");
            if ($state.current.name == 'public.signin') {
                $state.go('public.home');
            }
        }

    }
});
