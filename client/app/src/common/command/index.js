// session commands
require('./session/SigninCommand');
require('./session/SignoutCommand');

// user commands
require('./user/GetCurrentUserCommand');
require('./user/CreateUserCommand');
require('./user/UpdateUserCommand');

// league commands
require('./league/CreateLeagueCommand');
require('./league/UpdateLeagueCommand');
require('./league/InviteLeagueCommand');

// team commands
require('./team/CreateTeamCommand');
require('./team/UpdateTeamCommand');

module.exports = angular.module('loghApp.commandConfig', [])
    .config(function($commangularProvider) {

        // session events
        $commangularProvider.mapTo('SigninEvent').asSequence()
            .add('SigninCommand');
        $commangularProvider.mapTo('SignoutEvent').asSequence()
            .add('SignoutCommand');

        // user events
        $commangularProvider.mapTo('GetCurrentUserEvent').asSequence()
            .add('GetCurrentUserCommand');
        $commangularProvider.mapTo('CreateUserEvent').asSequence()
            .add('CreateUserCommand');
        $commangularProvider.mapTo('UpdateUserEvent').asSequence()
            .add('UpdateUserCommand');

        // league events
        $commangularProvider.mapTo('CreateLeagueEvent').asSequence()
            .add('CreateLeagueCommand');
        $commangularProvider.mapTo('UpdateLeagueEvent').asSequence()
            .add('UpdateLeagueCommand');
        $commangularProvider.mapTo('InviteLeagueEvent').asSequence()
            .add('InviteLeagueCommand');

        // team events
        $commangularProvider.mapTo('CreateTeamEvent').asSequence()
            .add('CreateTeamCommand');
        $commangularProvider.mapTo('UpdateTeamEvent').asSequence()
            .add('UpdateTeamCommand');

    }
);

