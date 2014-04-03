== README

This application serves as the stand-alone API for LOGH accessible at http://api.loseorgohome.com

#### Access Token
---

All requests (except for creating a user or creating a session (aka logging in)) require an access token sent via the Authorization Header. Get a valid access token by creating a session like this:

- curl -X POST -H "Content-Type: application/json" -d '{"email":"foo@bar.com","password":"foobar"}' http://api.loseorgohome.com/sessions

And then you can do this, for example:

- curl -X POST -H "Content-Type: application/json" -H "Authorization: biglongnastytoken" -d '{"name":"my league","season_id":"44"}' http://api.loseorgohome.com/users/79/leagues

#### Non-admin endpoints:

##### Sessions (sign in/out)
---
* POST        /sessions                                   [ create session ] { email*, password* }
* DELETE      /sessions/:id                               [ destroy session ]

##### Users
---
* POST        /users                                       [ create user ] { email*, first_name*, last_name*, password*, password_confirmation* }
* GET         /users/:id                                   [ show user ]
* PATCH/PUT   /users/:id                                   [ update user ] { email*, first_name*, last_name*, password, password_confirmation }

##### Leagues
---
* GET         /seasons/:season_id/leagues                   [ season leagues ]
* POST        /seasons/:season_id/leagues                   [ create league ] { name*, start_week_id*, password*, password_confirmation*, max_teams_per_user }
* GET         /seasons/:season_id/leagues/:id               [ show league ]
* PATCH/PUT   /seasons/:season_id/leagues/:id               [ update league ] { name*, start_week_id*, password, password_confirmation, max_teams_per_user }
* DELETE      /seasons/:season_id/leagues/:id               [ destroy league ]

##### Invitations
---
* GET         /leagues/:league_id/invitations               [ league invitations ]
* POST        /leagues/:league_id/invitations               [ create invitation ] { email* }
* DELETE      /leagues/:league_id/invitations/:id           [ destroy invitation ]

##### Teams
---
* GET         /leagues/:league_id/teams                     [ league teams ]
* POST        /leagues/:league_id/teams                     [ create team ] { name* }
* GET         /leagues/:league_id/teams/:id                 [ show team ]
* PATCH/PUT   /leagues/:league_id/teams/:id                 [ update team ] { name* }
* DELETE      /leagues/:league_id/teams/:id                 [ destroy team ]

##### Picks
---
* GET         /teams/:team_id/picks                         [ team picks ]
* POST        /teams/:team_id/picks                         [ create pick ] { week_id*, loser_id* }
* GET         /teams/:team_id/picks/:id                     [ show pick ]
* PATCH/PUT   /teams/:team_id/picks/:id                     [ update pick ] { week_id*, loser_id* }
* DELETE      /teams/:team_id/picks/:id                     [ destroy pick ]

##### Games
---
* GET         /weeks/:week_id/games                         [ week games ]
* GET         /weeks/:week_id/games/:id                     [ show game ]

#### Admin endpoints:

##### Users
---
* GET         /admin/users                                  [ all users ]
* GET         /admin/users/:id                              [ show user ]
* PATCH/PUT   /admin/users/:id                              [ update user ] { email*, first_name*, last_name*, password, password_confirmation }
* DELETE      /admin/users/:id                              [ destroy user ]

##### Seasons
---
* GET         /admin/seasons/                               [ all seasons ]
* POST        /admin/seasons/                               [ create season ] { name* }
* GET         /admin/seasons/:id                            [ show season ]
* PATCH/PUT   /admin/seasons/:id                            [ update season ] { name* }
* DELETE      /admin/seasons/:id                            [ destroy season ]


##### Weeks
---
* GET         /admin/seasons/:season_id/weeks               [ seasons weeks ]
* POST        /admin/seasons/:season_id/weeks               [ create week ] { number*, starts_at*, complete }
* GET         /admin/seasons/:season_id/weeks/:id           [ show week ]
* PATCH/PUT   /admin/seasons/:season_id/weeks/:id           [ update week ] { number*, starts_at*, complete }
* DELETE      /admin/seasons/:season_id/weeks/:id           [ destroy week ]

##### Games
---
* POST        /admin/weeks/:week_id/games                   [ create game ] { starts_at*, home_squad_id*, visiting_squad_id*, home_squad_score, visiting_squad_score }
* PATCH/PUT   /admin/weeks/:week_id/games/:id               [ update game ] { starts_at*, home_squad_id*, visiting_squad_id*, home_squad_score, visiting_squad_score }
* DELETE      /admin/weeks/:week_id/games/:id               [ destroy game ]

##### Leagues
---
* GET        /admin/leagues                                 [ all leagues ]


#### Notes:

