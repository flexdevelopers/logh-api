
commangular.create('GetUserCommand',
   function($log, userService, userModel) {

    return {

        execute: function(userId) {
            $log.log('GetUserCommand: Getting user details...');
            var userPromise = userService.getUser(userId);
            return userPromise;
        },
        onError : function(error) {
            $log.log("GetUserCommand: error in GetUser: " + error.data);
//            $state.go('app.registration.login');
        },
        onResult : function(result) {
            $log.log("GetUserCommand: user data result is " + result);
        }


    }
});