
commangular.create('UpdateUserCommand',
    function($log, userService) {

        return {

            execute: function(userParams) {
                $log.debug('UpdateUserCommand: updating a user...');
                var userPromise = userService.updateUser(userParams);
                return userPromise;
            },
            onError: function(error) {
                $log.debug("UpdateUserCommand: failure: " + error.data);
            },
            onResult: function(result) {
                $log.debug("UpdateUserCommand: success");
            }

        }
    });
