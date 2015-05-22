== README

This repository houses the AngularJS responsive client and the stand-alone Rails API for LOGH located at http://www.loseorgohome.com and http://www.loseorgohome.com/api respectively.

#### Access Token
---

All requests (except for creating a user or creating a session (aka logging in)) require an access token sent via the Authorization Header. Get a valid access token by creating a session like this:

- curl -X POST -H "Content-Type: application/json" -d '{"email":"me@email.com","password":"password"}' http://www.loseorgohome.com/api/sessions

And then you can do this, for example:

- curl -X POST -H "Content-Type: application/json" -H "Authorization: biglongnastytoken" -d '{"league":{"name":"my league","start_week_id":"4"}}' http://www.loseorgohome.com/api/seasons/9/leagues

#### Non-admin endpoints:

##### Sessions (sign in/out)
---
* POST        /api/sessions                                   [ create session ] { email*, password* }
* DELETE      /api/sessions/destroy                           [ destroy session ]

##### Users
---
* POST        /api/users                                       [ create user ] { email*, first_name*, last_name*, password*, password_confirmation* }
* GET         /api/users/current                               [ show current user ]
* PATCH       /api/users/current                               [ update current user ] { email*, first_name*, last_name*, password, password_confirmation }
* PUT         /api/users/contact                               [ contact us ] { message* }

##### Seasons
---
* GET         /api/seasons                                     [ all seasons ]

##### Weeks
---
* GET         /api/seasons/:season_id/weeks                    [ season weeks ]
* GET         /api/seasons/:season_id/weeks/available          [ available season weeks ]
* GET         /api/seasons/:season_id/weeks/:id                [ show week ]

##### Leagues
---
* GET         /api/seasons/:season_id/leagues                   [ season leagues ]
* GET         /api/seasons/:season_id/leagues/public            [ season public leagues ]
* GET         /api/seasons/:season_id/leagues/private           [ season private leagues ]
* POST        /api/seasons/:season_id/leagues                   [ create league ] { name*, start_week_id*, password*, public, max_teams_per_user, message }
* GET         /api/seasons/:season_id/leagues/:id               [ show league ]
* PATCH/PUT   /api/seasons/:season_id/leagues/:id               [ update league ] { name*, start_week_id*, password, public, max_teams_per_user, message }
* PUT         /api/seasons/:season_id/leagues/:id/message       [ update league message ] { message* }
* PUT         /api/seasons/:season_id/leagues/:id/contact       [ sends commish a message ] { contact* }
* DELETE      /api/seasons/:season_id/leagues/:id               [ destroy league ]

##### Invitations
---
* GET         /api/leagues/:league_id/invitations               [ league invitations ]
* POST        /api/leagues/:league_id/invitations               [ create invitation ] { email* }
* POST        /api/leagues/:league_id/invitations/new           [ request invitation ] { email* }
* DELETE      /api/leagues/:league_id/invitations/:id           [ destroy invitation ]

##### Teams
---
* GET         /api/seasons/:season_id/teams/all                 [ user all teams ]
* GET         /api/leagues/:league_id/teams                     [ league teams ]
* POST        /api/leagues/:league_id/teams                     [ create team ] { name* }
* GET         /api/leagues/:league_id/teams/:id                 [ show team ]
* PATCH/PUT   /api/leagues/:league_id/teams/:id                 [ update team ] { name* }
* PATCH/PUT   /api/leagues/:league_id/teams/:id/activate        [ activate team ]
* PATCH/PUT   /api/leagues/:league_id/teams/:id/deactivate      [ deactivate team ]
* DELETE      /api/leagues/:league_id/teams/:id                 [ destroy team ]

##### Picks
---
* GET         /api/teams/:team_id/picks                         [ team picks ]
* POST        /api/teams/:team_id/picks                         [ create pick ] { week_id*, week_type_id*, squad_id* }
* GET         /api/teams/:team_id/picks/:id                     [ show pick ]
* DELETE      /api/teams/:team_id/picks/:id                     [ destroy pick ]

##### Games
---
* GET         /api/games/current                                [ current games ]
* GET         /api/weeks/:week_id/games                         [ week games ]
* GET         /api/weeks/:week_id/games/:id                     [ show game ]
