
commangular.create('CreateUserCommand',
    function($log, $state, userService) {

        return {

            execute: function(userParams) {
                $log.debug('CreateUserCommand: creating a new user...');
                var userPromise = userService.createUser(userParams);
                return userPromise;
            },
            onError: function(error) {
                $log.debug("CreateUserCommand: failure: " + error.data);
            },
            onResult: function(result) {
                $log.debug("CreateUserCommand: success");
                $state.go('private.user');
            }

        }
    });