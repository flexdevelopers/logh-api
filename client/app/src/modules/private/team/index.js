module.exports = angular.module('loghApp.team', [])
    .controller('TeamController', require('./TeamController'))
    .controller('CreateTeamController', require('./CreateTeamController'))
    .controller('EditTeamController', require('./EditTeamController'))
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('private.team', {
                abstract: true,
                url: 'season/{seasonId}/league/{leagueId}/team',
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
                        templateUrl: 'modules/private/team/team.tpl.html',
                        controller: 'TeamController'
                    },
                    footer: {
                        templateUrl: 'common/templates/footer.tpl.html'
                    }
                }
            })
            .state('private.team.new', {
                url: '/new',
                views: {
                    teamContent: {
                        templateUrl: 'modules/private/team/team.new.tpl.html',
                        controller: 'CreateTeamController'
                    }
                },
                resolve: {
                    league: ['leagueService', '$stateParams', function(leagueService, $stateParams) {
                        return leagueService.getLeague($stateParams.seasonId, $stateParams.leagueId);
                    }]
                }
            })
            .state('private.team.edit', {
                url: '/{teamId}/edit',
                views: {
                    teamContent: {
                        templateUrl: 'modules/private/team/team.edit.tpl.html',
                        controller: 'EditTeamController'
                    }
                },
                resolve: {
                    team: ['teamService', '$stateParams', function(teamService, $stateParams) {
                        return teamService.getTeam($stateParams.leagueId, $stateParams.teamId);
                    }]
                }
            })

        ;
        $urlRouterProvider.otherwise('/');
    });
