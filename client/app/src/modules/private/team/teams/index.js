module.exports = angular.module('loghApp.teams', [])
    .controller('TeamsController', require('./TeamsController'))
    .controller('AliveTeamsController', require('./AliveTeamsController'))
    .controller('DeadTeamsController', require('./DeadTeamsController'))
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('private.teams', {
                abstract: true,
                url: 'season/{seasonId}/teams',
                views: {
                    header: {
                        templateUrl: 'common/modules/header/header.tpl.html',
                        controller: 'HeaderController'
                    },
                    message: {
                        templateUrl: 'common/modules/message/message.tpl.html',
                        controller: 'MessageController'
                    },
                    content: {
                        templateUrl: 'modules/private/team/teams/teams.tpl.html',
                        controller: 'TeamsController'
                    },
                    footer: {
                        templateUrl: 'common/templates/footer.tpl.html'
                    }
                }
            })
            .state('private.teams.alive', {
                url: '/alive',
                views: {
                    teamsContent: {
                        templateUrl: 'modules/private/team/teams/teams.alive.tpl.html',
                        controller: 'AliveTeamsController'
                    }
                },
                resolve: {
                    aliveTeams: ['teamService', '$stateParams', function(teamService, $stateParams) {
                        return teamService.getAliveTeams($stateParams.seasonId);
                    }]
                }
            })
            .state('private.teams.dead', {
                url: '/dead',
                views: {
                    teamsContent: {
                        templateUrl: 'modules/private/team/teams/teams.dead.tpl.html',
                        controller: 'DeadTeamsController'
                    }
                },
                resolve: {
                    deadTeams: ['teamService', '$stateParams', function(teamService, $stateParams) {
                        return teamService.getDeadTeams($stateParams.seasonId);
                    }]
                }
            })
        ;
        $urlRouterProvider.otherwise('/');
    });

