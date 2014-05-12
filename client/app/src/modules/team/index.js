module.exports = angular.module('loghApp.team', [])
    .controller('TeamController', require('./TeamController'))
    .controller('CreateTeamController', require('./CreateTeamController'))
    .controller('EditTeamController', require('./EditTeamController'))
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app.team', {
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
                        templateUrl: 'modules/team/team.tpl.html',
                        controller: 'TeamController'
                    },
                    footer: {
                        templateUrl: 'common/templates/footer.tpl.html'
                    }
                }
            })
            .state('app.team.new', {
                url: '/new',
                views: {
                    teamContent: {
                        templateUrl: 'modules/team/team.new.tpl.html',
                        controller: 'CreateTeamController'
                    }
                },
                resolve: {
                    league: ['leagueService', '$stateParams', function(leagueService, $stateParams) {
                        return leagueService.getLeague($stateParams.seasonId, $stateParams.leagueId);
                    }]
                }
            })
            .state('app.team.edit', {
                url: '/{teamId}/edit',
                views: {
                    teamContent: {
                        templateUrl: 'modules/team/team.edit.tpl.html',
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
