
//application commands
require('./LoginCommand');
require('./LogoutCommand');
require('./GetCurrentUserCommand');
require('./CreateUserCommand');
require('./UpdateUserCommand');

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

