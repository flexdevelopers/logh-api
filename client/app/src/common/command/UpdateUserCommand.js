
commangular.create('UpdateUserCommand',
    function($log, userService) {

        return {

            execute: function(userParams) {
                $log.log('UpdateUserCommand: Updating a user...');
                var userPromise = userService.updateUser(userParams);
                return userPromise;
            },
            onError : function(error) {
                $log.log("UpdateUserCommand: error in UpdateUser: " + error.data);
            },
            onResult : function(result) {
                $log.log("UpdateUserCommand: update user was successful");
            }

        }
    });
