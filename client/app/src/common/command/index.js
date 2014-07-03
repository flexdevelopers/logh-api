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
require('./league/CreateLeagueInviteCommand');
require('./league/LeagueInviteRequestCommand');

// team commands
require('./team/CreateTeamCommand');

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
        $commangularProvider.mapTo('CreateLeagueInviteEvent').asSequence()
            .add('CreateLeagueInviteCommand');
        $commangularProvider.mapTo('LeagueInviteRequestEvent').asSequence()
            .add('LeagueInviteRequestCommand');

        // team events
        $commangularProvider.mapTo('CreateTeamEvent').asSequence()
            .add('CreateTeamCommand');

    }
);

