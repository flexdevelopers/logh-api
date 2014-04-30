
//session commands
require('./session/LoginCommand');
require('./session/LogoutCommand');

//user commands
require('./user/GetCurrentUserCommand');
require('./user/CreateUserCommand');
require('./user/UpdateUserCommand');

module.exports = angular.module('loghApp.commandConfig', [])
    .config(function($commangularProvider) {

        $commangularProvider.mapTo('LoginEvent').asSequence()
            .add('LoginCommand');

        $commangularProvider.mapTo('LogoutEvent').asSequence()
            .add('LogoutCommand');

        $commangularProvider.mapTo('GetCurrentUserEvent').asSequence()
            .add('GetCurrentUserCommand');

        $commangularProvider.mapTo('CreateUserEvent').asSequence()
            .add('CreateUserCommand');

        $commangularProvider.mapTo('UpdateUserEvent').asSequence()
            .add('UpdateUserCommand');

    }
);

