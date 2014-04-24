
commangular.create('CreateUserCommand',
    function($log, userService) {

        return {

            execute: function(userParams) {
                $log.log('CreateUserCommand: Creating a new user...');
                var userPromise = userService.createUser(userParams);
                return userPromise;
            },
            onError : function(error) {
                $log.log("CreateUserCommand: error in CreateUser: " + error.data);
            },
            onResult : function(result) {
                $log.log("CreateUserCommand: create user was successful");
            }

        }
    });