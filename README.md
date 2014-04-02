== README

This application serves as the public API for LOGH

Non-admin endpoints:

- POST   /sessions                                     create session
- DELETE /sessions/:id                                 destroy session
- POST   /users                                        create user
- GET    /users/:id                                    show user
- PATCH  /users/:id                                    update user
- PUT    /users/:id                                    update user
- GET    /seasons/:season_id/leagues                   season leagues
- POST   /seasons/:season_id/leagues                   create league
- GET    /seasons/:season_id/leagues/:id               show league
- PATCH  /seasons/:season_id/leagues/:id               update league
- PUT    /seasons/:season_id/leagues/:id               update league
- DELETE /seasons/:season_id/leagues/:id               destroy league
- GET    /leagues/:league_id/teams                     league teams
- POST   /leagues/:league_id/teams                     create team
- GET    /leagues/:league_id/teams/:id                 show team
- PATCH  /leagues/:league_id/teams/:id                 update team
- PUT    /leagues/:league_id/teams/:id                 update team
- DELETE /leagues/:league_id/teams/:id                 destroy team
- GET    /teams/:team_id/picks                         team picks
- POST   /teams/:team_id/picks                         create pick
- GET    /teams/:team_id/picks/:id                     show pick
- PATCH  /teams/:team_id/picks/:id                     update pick
- PUT    /teams/:team_id/picks/:id                     update pick
- DELETE /teams/:team_id/picks/:id                     destroy pick
- GET    /weeks/:week_id/games                         week games
- GET    /weeks/:week_id/games/:id                     show game
