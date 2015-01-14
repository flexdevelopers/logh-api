require=(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({"app-templates":[function(require,module,exports){
module.exports=require('0VoVTq');
},{}],"0VoVTq":[function(require,module,exports){
angular.module('app.templates', ['common/modules/confirm/confirm.tpl.html', 'common/modules/footer/footer.tpl.html', 'common/modules/header/header.tpl.html', 'common/modules/message/message.tpl.html', 'common/templates/master.tpl.html', 'modules/private/admin/admin.tpl.html', 'modules/private/admin/game/edit/admin.game.edit.tpl.html', 'modules/private/admin/game/new/admin.game.new.tpl.html', 'modules/private/admin/seasons/admin.seasons.tpl.html', 'modules/private/admin/seasons/season/admin.season.tpl.html', 'modules/private/admin/seasons/season/new/admin.season.new.tpl.html', 'modules/private/admin/week/admin.week.tpl.html', 'modules/private/admin/week/edit/admin.week.edit.tpl.html', 'modules/private/league/contact/league.contact.tpl.html', 'modules/private/league/edit/league.edit.tpl.html', 'modules/private/league/invite/league.invite.tpl.html', 'modules/private/league/invite/request/league.invite.request.tpl.html', 'modules/private/league/join/league.join.tpl.html', 'modules/private/league/league.tpl.html', 'modules/private/league/message/league.message.tpl.html', 'modules/private/league/new/league.new.tpl.html', 'modules/private/league/view/league.view.tpl.html', 'modules/private/leagues/join/leagues.join.tpl.html', 'modules/private/leagues/join/private/leagues.join.private.tpl.html', 'modules/private/leagues/join/public/leagues.join.public.tpl.html', 'modules/private/leagues/leagues.tpl.html', 'modules/private/leagues/manage/leagues.manage.tpl.html', 'modules/private/leagues/my/leagues.my.tpl.html', 'modules/private/pick/make/pick.make.tpl.html', 'modules/private/play/leagues/play.leagues.tpl.html', 'modules/private/play/play.tpl.html', 'modules/private/play/teams/play.teams.tpl.html', 'modules/private/team/edit/team.edit.tpl.html', 'modules/private/team/message/team.message.tpl.html', 'modules/private/team/team.tpl.html', 'modules/private/team/view/team.view.tpl.html', 'modules/private/teams/alive/teams.alive.tpl.html', 'modules/private/teams/dead/teams.dead.tpl.html', 'modules/private/teams/teams.tpl.html', 'modules/private/user/reset/user.reset.tpl.html', 'modules/private/user/user.tpl.html', 'modules/public/abuse/abuse.tpl.html', 'modules/public/faq/faq.tpl.html', 'modules/public/home/home.tpl.html', 'modules/public/register/register.tpl.html', 'modules/public/register/terms/register.terms.tpl.html', 'modules/public/signin/signin.tpl.html']);

angular.module("common/modules/confirm/confirm.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/modules/confirm/confirm.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h4 class=\"modal-title\">Confirm Action</h4>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <p>{{message}}</p>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-primary\" ng-click=\"cancel()\">No</button>\n" +
    "  <button class=\"btn btn-default\" ng-click=\"confirm()\">Yes</button>\n" +
    "</div>");
}]);

angular.module("common/modules/footer/footer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/modules/footer/footer.tpl.html",
    "<div id=\"menu\">\n" +
    "  <h1><a ng-click=\"home()\">LOGH</a></h1>\n" +
    "  <div class=\"links\">\n" +
    "    <span style=\"text-transform: none;\">© 2015 Flexdevelopers.com LLC</span>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("common/modules/header/header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/modules/header/header.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"navbar-header\">\n" +
    "    <button class=\"navbar-toggle\" type=\"button\" ng-click=\"isCollapsed = !isCollapsed\">\n" +
    "      <span class=\"sr-only\">Toggle navigation</span>\n" +
    "      <span class=\"icon-bar\"></span>\n" +
    "      <span class=\"icon-bar\"></span>\n" +
    "      <span class=\"icon-bar\"></span>\n" +
    "    </button>\n" +
    "    <a class=\"navbar-brand\" ng-click=\"home()\"><b>LOSE</b>OR<b>GO</b>HOME</a>\n" +
    "  </div>\n" +
    "  <div collapse=\"isCollapsed\" class=\"navbar-collapse\">\n" +
    "    <ul ng-show=\"userData.user.loaded\" class=\"nav navbar-nav navbar-right\">\n" +
    "      <li ng-class=\"{'active': isState(['private.play.teams', 'private.play.leagues'])}\"><a ng-click=\"play(selectedSeasonId)\">My Teams & Leagues</a></li>\n" +
    "      <li ng-class=\"{'active': isState(['private.leagues.join.public', 'private.leagues.join.private'])}\"><a ng-click=\"joinLeague(selectedSeasonId)\">Join League</a></li>\n" +
    "      <li><a ng-click=\"createLeague(selectedSeasonId)\">Create League</a></li>\n" +
    "      <li><a ng-click=\"faq()\">FAQ</a></li>\n" +
    "      <li class=\"dropdown\">\n" +
    "        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-cog fa-fw settings-icon\" title=\"User Settings\"></i> <b class=\"caret\"></b></a>\n" +
    "        <ul class=\"dropdown-menu\">\n" +
    "          <li><a ng-click=\"contactUs()\">Contact Us</a></li>\n" +
    "          <li class=\"divider\"></li>\n" +
    "          <li><a ng-click=\"userProfile()\">User Profile</a></li>\n" +
    "          <li><a ng-click=\"signout()\">Sign Out</a></li>\n" +
    "        </ul>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "    <ul ng-show=\"!userData.user.loaded\" class=\"nav navbar-nav navbar-right\">\n" +
    "      <li><a ng-click=\"faq()\">FAQ</a></li>\n" +
    "      <li><a ng-click=\"register()\">Register</a></li>\n" +
    "      <li class=\"dropdown\">\n" +
    "        <a class=\"dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\">Sign In</strong></a>\n" +
    "        <div class=\"dropdown-menu panel panel-default\">\n" +
    "          <div class=\"inline-signin-form panel-body\">\n" +
    "            <form name=\"inlineSigninForm\" role=\"form\" ng-submit=\"signin({ email: credentials.email.toLowerCase(), password: credentials.password }); $event.stopPropagation();\" novalidate>\n" +
    "              <div class=\"form-group\">\n" +
    "                <div class=\"input-group\">\n" +
    "                  <span class=\"input-group-addon\"><i class=\"fa fa-envelope fa-fw\"></i></span>\n" +
    "                  <input type=\"email\" class=\"form-control\" autocomplete=\"off\" style=\"cursor:auto;\" placeholder=\"Email\" ng-model=\"credentials.email\" ng-click=\"$event.stopPropagation();\" rc-verify-set autofocus required>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                <div class=\"input-group\">\n" +
    "                  <span class=\"input-group-addon\"><i class=\"fa fa-key fa-fw\"></i></span>\n" +
    "                  <input type=\"password\" class=\"form-control\" autocomplete=\"off\" style=\"cursor:auto;\" placeholder=\"Password\" ng-model=\"credentials.password\" ng-click=\"$event.stopPropagation();\" rc-verify-set required>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div>\n" +
    "                <a class=\"forgot-password btn btn-link pull-left\" role=\"button\" ng-click=\"resetPassword()\">Forgot Password?</a>\n" +
    "                <button type=\"submit\" class=\"sign-in-btn btn btn-primary pull-right\" ng-disabled=\"inlineSigninForm.$invalid\">Sign in</button>\n" +
    "              </div>\n" +
    "              <div style=\"clear: both;\"></div>\n" +
    "              <hr>\n" +
    "              <div class=\"register\"><a ng-click=\"register()\">Don't have an account? <strong>Register</strong></a></div>\n" +
    "            </form>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("common/modules/message/message.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/modules/message/message.tpl.html",
    "<div class=\"alert alert-dismissable alert-{{messageData.message.type}}\" ng-show=\"messageData.message.loaded\">\n" +
    "  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\" ng-click=\"dismissMessage(messageData)\">&times;</button>\n" +
    "  {{messageData.message.content}}\n" +
    "</div>\n" +
    "");
}]);

angular.module("common/templates/master.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/templates/master.tpl.html",
    "<!-- Header -->\n" +
    "<nav class=\"navbar navbar-inverse\" ui-view=\"header\"></nav>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "\n" +
    "  <!-- Message -->\n" +
    "  <div ui-view=\"message\"></div>\n" +
    "\n" +
    "  <!-- Content -->\n" +
    "  <div ui-view=\"content\"></div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<!-- Footer -->\n" +
    "<footer class=\"footer\" ui-view=\"footer\"></footer>\n" +
    "\n" +
    "");
}]);

angular.module("modules/private/admin/admin.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/admin/admin.tpl.html",
    "<div ui-view=\"adminContent\" class=\"admin-content\"></div>\n" +
    "");
}]);

angular.module("modules/private/admin/game/edit/admin.game.edit.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/admin/game/edit/admin.game.edit.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Edit Game</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <h4>{{gameData.display}}</h4>\n" +
    "  <form style=\"padding: 10px;\" name=\"editGameForm\" class=\"edit-game-form form-horizontal\" role=\"form\" novalidate>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-6 control-label\">Starts At (Local Time):</label>\n" +
    "      <div class=\"col-sm-6\">\n" +
    "        <div class=\"dropdown\" is-open=\"startsAtDropdown.isopen\">\n" +
    "          <a class=\"dropdown-toggle\" role=\"button\" data-toggle=\"dropdown\" data-target=\"#\" href=\"#\">\n" +
    "            <div class=\"input-group\">\n" +
    "              <input type=\"text\" class=\"form-control\" formatted-date data-ng-model=\"gameData.starts_at\" ng-required=\"true\" ng-disabled=\"true\">\n" +
    "              <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-calendar\"></i></span>\n" +
    "            </div>\n" +
    "          </a>\n" +
    "          <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dLabel\">\n" +
    "            <datetimepicker data-ng-model=\"gameData.starts_at\" data-on-set-time=\"closeStartsAt()\" data-datetimepicker-config=\"{ minuteStep: 1 }\"/>\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label for=\"overtime\" class=\"col-sm-6 control-label\">Overtime:</label>\n" +
    "      <div class=\"col-sm-6\">\n" +
    "        <input id=\"overtime\" name=\"overtime\" type=\"checkbox\" ng-model=\"gameData.overtime\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label for=\"visitorScore\" class=\"col-sm-6 control-label\">{{gameData.squads[0].name}} Score:</label>\n" +
    "      <div class=\"col-sm-6\">\n" +
    "        <input id=\"visitorScore\" name=\"visitorScore\" type=\"number\" class=\"form-control\" ng-model=\"gameData.visiting_squad_score\" select-on-click required>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label for=\"homeScore\" class=\"col-sm-6 control-label\">{{gameData.squads[1].name}} Score:</label>\n" +
    "      <div class=\"col-sm-6\">\n" +
    "        <input id=\"homeScore\" name=\"homeScore\" type=\"number\" class=\"form-control\" ng-model=\"gameData.home_squad_score\" select-on-click required>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label for=\"complete\" class=\"col-sm-6 control-label\">Completed:</label>\n" +
    "      <div class=\"col-sm-6\">\n" +
    "        <input id=\"complete\" name=\"complete\" type=\"checkbox\" ng-model=\"gameData.complete\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "  <button class=\"btn btn-primary\" ng-disabled=\"editGameForm.$invalid\" ng-click=\"editGame(gameData)\">Update</button>\n" +
    "</div>");
}]);

angular.module("modules/private/admin/game/new/admin.game.new.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/admin/game/new/admin.game.new.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Create Game</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <h4>{{weekData.display}} | {{weekData.type}}</h4>\n" +
    "  <hr>\n" +
    "  <form name=\"newGameForm\" role=\"form\" novalidate>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"control-label\" for=\"visitingSquad\">Visiting Squad:</label>\n" +
    "      <select id=\"visitingSquad\" name=\"visitingSquad\" class=\"form-control\" ng-model=\"newGameData.visiting_squad_id\" ng-options=\"squad.id as squad.name for squad in squads\"></select>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"control-label\" for=\"homeSquad\">Home Squad:</label>\n" +
    "      <select id=\"homeSquad\" name=\"homeSquad\" class=\"form-control\" ng-model=\"newGameData.home_squad_id\" ng-options=\"squad.id as squad.name for squad in squads\"></select>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"control-label\">Starts At (Local Time):</label>\n" +
    "      <div class=\"dropdown\" is-open=\"startsAtDropdown.isopen\">\n" +
    "        <a class=\"dropdown-toggle\" role=\"button\" data-toggle=\"dropdown\" data-target=\"#\" href=\"#\">\n" +
    "          <div class=\"input-group\">\n" +
    "            <input type=\"text\" class=\"form-control\" formatted-date data-ng-model=\"newGameData.starts_at\" ng-required=\"true\" ng-disabled=\"true\">\n" +
    "            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-calendar\"></i></span>\n" +
    "          </div>\n" +
    "        </a>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dLabel\">\n" +
    "          <datetimepicker data-ng-model=\"newGameData.starts_at\" data-on-set-time=\"closeStartsAt()\" data-datetimepicker-config=\"{ minuteStep: 1 }\"/>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "      <!--<input id=\"gameTime\" name=\"gameTime\" type=\"text\" class=\"form-control\" ng-model=\"newGameData.starts_at\" required>-->\n" +
    "      <!--<small>2014-12-07T13:00:00.000-07:00</small>-->\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "  <button class=\"btn btn-primary\" ng-disabled=\"newGameForm.$invalid\" ng-click=\"createGame(newGameData)\">Create</button>\n" +
    "</div>");
}]);

angular.module("modules/private/admin/seasons/admin.seasons.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/admin/seasons/admin.seasons.tpl.html",
    "<div class=\"seasons-header-row row\">\n" +
    "  <div class=\"col-sm-6 col-md-6\">\n" +
    "    <h3>Seasons</h3>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-6 col-md-6\">\n" +
    "    <div class=\"seasons-btn-group\">\n" +
    "      <button type=\"button\" class=\"create-season-btn btn btn-primary\" ng-click=\"createSeason()\">Create Season</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"seasons list-group\">\n" +
    "  <a ng-repeat=\"season in seasons\" ng-click=\"showSeason(season)\" class=\"list-group-item\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-6 col-md-6\"><i class=\"fa fa-check fa-fw\" ng-show=\"season.current === true\" title=\"current season\"></i> {{season.name}}<br><span class=\"start-end\">Starts: {{season.start_display}} | Ends: {{season.end_display}}</span></div>\n" +
    "      <div class=\"col-sm-6 col-md-6\">\n" +
    "        <span class=\"badge\">{{season.week_count}} week<span ng-show=\"season.week_count !== 1\">s</span></span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </a>\n" +
    "</div>");
}]);

angular.module("modules/private/admin/seasons/season/admin.season.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/admin/seasons/season/admin.season.tpl.html",
    "<div class=\"page-header\">\n" +
    "  <h3>{{season.name}} ({{season.start_display}} - {{season.end_display}})</h3>\n" +
    "</div>\n" +
    "<div class=\"season-weeks-header-row row\">\n" +
    "  <div class=\"col-sm-12 col-md-12\">\n" +
    "    <h4>Weeks [ {{weeks.length}} ]</h4>\n" +
    "    <hr>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"season-weeks list-group\">\n" +
    "  <a ng-repeat=\"week in weeks\" ng-click=\"showWeek(week)\" class=\"list-group-item\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-6 col-md-6\"><i class=\"fa fa-check fa-fw\" ng-show=\"week.complete === true\" title=\"complete week\"></i> {{week.display}}</div>\n" +
    "      <div class=\"start-end col-sm-6 col-md-6\">\n" +
    "        <span class=\"badge\">{{week.game_count}} game<span ng-show=\"week.game_count !== 1\">s</span></span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </a>\n" +
    "</div>\n" +
    "<div class=\"season-leagues-header-row row\">\n" +
    "  <div class=\"col-sm-12 col-md-12\">\n" +
    "    <h4>Public Leagues [ {{publicLeagues.length}} ]</h4>\n" +
    "    <hr>\n" +
    "    <div class=\"input-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"Filter public leagues...\" ng-model=\"publicQuery\">\n" +
    "      <span class=\"input-group-btn\">\n" +
    "          <button class=\"btn btn-default\" type=\"button\"><span class=\"glyphicon glyphicon-search\"></span></button>\n" +
    "      </span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"season-leagues list-group\">\n" +
    "  <a ng-repeat=\"publicLeague in publicLeagues | filter:publicQuery:strict\" ng-click=\"showLeague(publicLeague)\" class=\"list-group-item\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"league-name col-sm-6 col-md-6\">{{publicLeague.name}}<br><span class=\"team-count league-commish\">Commish: {{publicLeague.commish_names.join(', ')}}</span></div>\n" +
    "      <div class=\"col-sm-6 col-md-6\">\n" +
    "        <span class=\"public-league-meta\"><span ng-show=\"publicLeague.elimination\"><span class=\"loseorgohome\">LoseOrGoHome</span><span class=\"logh\">LOGH</span> [ single elimination ]</span><span ng-show=\"!publicLeague.elimination\">Biggest Loser [ no elimination ]</span><br>Starts {{publicLeague.start_week}}</span>\n" +
    "        <span class=\"badge\"><span ng-show=\"publicLeague.elimination\">{{publicLeague.alive_team_count}}/</span>{{publicLeague.team_count}} team<span ng-show=\"publicLeague.team_count !== 1\">s</span></span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </a>\n" +
    "</div><div class=\"season-leagues-header-row row\">\n" +
    "  <div class=\"col-sm-12 col-md-12\">\n" +
    "    <h4>Private Leagues [ {{privateLeagues.length}} ]</h4>\n" +
    "    <hr>\n" +
    "    <div class=\"input-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"Filter private leagues...\" ng-model=\"privateQuery\">\n" +
    "      <span class=\"input-group-btn\">\n" +
    "          <button class=\"btn btn-default\" type=\"button\"><span class=\"glyphicon glyphicon-search\"></span></button>\n" +
    "      </span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"season-leagues list-group\">\n" +
    "  <a ng-repeat=\"privateLeague in privateLeagues | filter:privateQuery:strict\" ng-click=\"showLeague(privateLeague)\" class=\"list-group-item\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"league-name col-sm-6 col-md-6\">{{privateLeague.name}}<br><span class=\"team-count league-commish\">Commish: {{privateLeague.commish_names.join(', ')}}</span></div>\n" +
    "      <div class=\"col-sm-6 col-md-6\">\n" +
    "        <span class=\"private-league-meta\"><span ng-show=\"privateLeague.elimination\"><span class=\"loseorgohome\">LoseOrGoHome</span><span class=\"logh\">LOGH</span> [ single elimination ]</span><span ng-show=\"!privateLeague.elimination\">Biggest Loser [ no elimination ]</span><br>Starts {{privateLeague.start_week}}</span>\n" +
    "        <span class=\"badge\"><span ng-show=\"privateLeague.elimination\">{{privateLeague.alive_team_count}}/</span>{{privateLeague.team_count}} team<span ng-show=\"privateLeague.team_count !== 1\">s</span></span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </a>\n" +
    "</div>");
}]);

angular.module("modules/private/admin/seasons/season/new/admin.season.new.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/admin/seasons/season/new/admin.season.new.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Create Season</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <form name=\"newSeasonForm\" role=\"form\" novalidate>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(newSeasonForm.seasonName), 'has-feedback': hasError(newSeasonForm.seasonName)}\">\n" +
    "      <label class=\"control-label\" for=\"seasonName\">Season name:\n" +
    "        <small ng-show=\"hasPropertyError(newSeasonForm.seasonName, 'required')\">[ Required ]</small>\n" +
    "        <small ng-show=\"hasPropertyError(newSeasonForm.seasonName, 'maxlength')\">[ Too Long ]</small>\n" +
    "      </label>\n" +
    "      <input id=\"seasonName\" name=\"seasonName\" type=\"text\" class=\"form-control\" ng-model=\"newSeasonData.name\" ng-maxlength=\"30\" required>\n" +
    "      <span ng-show=\"hasError(newSeasonForm.seasonName)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"control-label\" for=\"seasonType\">Season Type:</label>\n" +
    "      <select id=\"seasonType\" name=\"seasonType\" class=\"form-control\" ng-model=\"newSeasonData.season_type\" ng-options=\"seasonType as seasonType for seasonType in seasonTypes\" required></select>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"control-label\">Starts At (Local Time):</label>\n" +
    "      <div class=\"dropdown\" is-open=\"startsAtDropdown.isopen\">\n" +
    "        <a class=\"dropdown-toggle\" role=\"button\" data-toggle=\"dropdown\" data-target=\"#\" href=\"#\">\n" +
    "          <div class=\"input-group\">\n" +
    "            <input type=\"text\" class=\"form-control\" formatted-date data-ng-model=\"newSeasonData.starts_at\" ng-required=\"true\" ng-disabled=\"true\">\n" +
    "            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-calendar\"></i></span>\n" +
    "          </div>\n" +
    "        </a>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dLabel\">\n" +
    "          <datetimepicker data-ng-model=\"newSeasonData.starts_at\" data-on-set-time=\"closeStartsAt()\" data-datetimepicker-config=\"{ minuteStep: 5 }\"/>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"control-label\">Ends At (Local Time):</label>\n" +
    "      <div class=\"dropdown\" is-open=\"endsAtDropdown.isopen\">\n" +
    "        <a class=\"dropdown-toggle\" role=\"button\" data-toggle=\"dropdown\" data-target=\"#\" href=\"#\">\n" +
    "          <div class=\"input-group\">\n" +
    "            <input type=\"text\" class=\"form-control\" formatted-date data-ng-model=\"newSeasonData.ends_at\" ng-required=\"true\" ng-disabled=\"true\">\n" +
    "            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-calendar\"></i></span>\n" +
    "          </div>\n" +
    "        </a>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dLabel\">\n" +
    "          <datetimepicker data-ng-model=\"newSeasonData.ends_at\" data-on-set-time=\"closeEndsAt()\" data-datetimepicker-config=\"{ minuteStep: 5 }\"/>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "  <button class=\"btn btn-primary\" ng-disabled=\"newSeasonForm.$invalid\" ng-click=\"createSeason(newSeasonData)\">Create</button>\n" +
    "</div>");
}]);

angular.module("modules/private/admin/week/admin.week.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/admin/week/admin.week.tpl.html",
    "<div class=\"games-header-row row\">\n" +
    "  <div class=\"col-sm-6 col-md-6\">\n" +
    "    <h3><i class=\"fa fa-check fa-fw\" ng-show=\"weekData.complete === true\" title=\"Week complete\"></i> {{weekData.display}} <small><a ng-click=\"editWeek(weekData)\">[ edit ]</a></small><br>\n" +
    "      <small>Description: {{weekData.description}}</small></h3>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-6 col-md-6\">\n" +
    "    <div class=\"week-btn-group\">\n" +
    "      <button type=\"button\" class=\"send-reminder-btn btn btn-default\" ng-click=\"confirmSendReminder(weekData)\">Send Reminder</button>\n" +
    "      <button type=\"button\" class=\"create-game-btn btn btn-primary\" ng-click=\"createGame(weekData, games)\">Create Game</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"week-games list-group\">\n" +
    "  <a ng-repeat=\"game in games\" ng-click=\"editGame(game)\" class=\"list-group-item\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"game-display-name col-sm-6 col-md-6\"><i class=\"fa fa-check fa-fw\" ng-show=\"game.complete === true\" title=\"Game finished\"></i> {{game.display}}<br><span class=\"game-starts\">{{dateFormat(game.starts_at, \"ddd, mmm d yyyy h:MM TT (Z)\")}}</span></div>\n" +
    "      <div class=\"game-score col-sm-6 col-md-6\">{{game.squads[0].name}}: {{game.visiting_squad_score}} | {{game.squads[1].name}}: {{game.home_squad_score}} <span ng-show=\"game.overtime === true\">OT</span></div>\n" +
    "    </div>\n" +
    "  </a>\n" +
    "</div>\n" +
    "<hr>\n" +
    "<div class=\"complete-week-btn-group\">\n" +
    "  <button type=\"button\" class=\"complete-week-btn btn btn-danger\" ng-click=\"confirmWeekComplete(weekData)\">Complete Week</button>\n" +
    "</div>\n" +
    "");
}]);

angular.module("modules/private/admin/week/edit/admin.week.edit.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/admin/week/edit/admin.week.edit.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Edit Week</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <h4>{{weekData.display}}</h4>\n" +
    "  <hr>\n" +
    "  <form name=\"editWeekForm\" class=\"edit-week-form form-horizontal\" role=\"form\" novalidate>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(editWeekForm.weekName), 'has-feedback': hasError(editWeekForm.weekName)}\">\n" +
    "      <label for=\"weekName\" class=\"col-sm-3 control-label\">Name:</label>\n" +
    "      <div class=\"col-sm-9\">\n" +
    "        <input id=\"weekName\" name=\"weekName\" type=\"text\" class=\"form-control\" ng-model=\"weekData.name\" ng-maxlength=\"30\" required>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(editWeekForm.weekName, 'required')\">Required</small>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(editWeekForm.weekName, 'maxlength')\">Too Long</small>\n" +
    "        <span ng-show=\"hasError(editWeekForm.weekName)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(editWeekForm.weekDescription), 'has-feedback': hasError(editWeekForm.weekDescription)}\">\n" +
    "      <label for=\"weekDescription\" class=\"col-sm-3 control-label\">Description:</label>\n" +
    "      <div class=\"col-sm-9\">\n" +
    "        <input id=\"weekDescription\" name=\"weekDescription\" type=\"text\" class=\"form-control\" ng-model=\"weekData.description\" ng-maxlength=\"30\" required>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(editWeekForm.weekDescription, 'required')\">Required</small>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(editWeekForm.weekDescription, 'maxlength')\">Too Long</small>\n" +
    "        <span ng-show=\"hasError(editWeekForm.weekDescription)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label for=\"weekType\" class=\"col-sm-3 control-label\">Week Type:</label>\n" +
    "      <div class=\"col-sm-9\">\n" +
    "        <select id=\"weekType\" name=\"weekType\" class=\"form-control\" ng-model=\"weekData.week_type_id\" ng-options=\"weekType.id as weekType.description for weekType in weekTypes\"></select>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Starts At:</label>\n" +
    "      <div class=\"col-sm-9\">\n" +
    "        <div class=\"dropdown\" is-open=\"startsAtDropdown.isopen\">\n" +
    "          <a class=\"dropdown-toggle\" role=\"button\" data-toggle=\"dropdown\" data-target=\"#\" href=\"#\">\n" +
    "            <div class=\"input-group\">\n" +
    "              <input type=\"text\" class=\"form-control\" formatted-date data-ng-model=\"weekData.starts_at\" ng-required=\"true\" ng-disabled=\"true\">\n" +
    "              <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-calendar\"></i></span>\n" +
    "            </div>\n" +
    "          </a>\n" +
    "          <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dLabel\">\n" +
    "            <datetimepicker data-ng-model=\"weekData.starts_at\" data-on-set-time=\"closeStartsAt()\" data-datetimepicker-config=\"{ minuteStep: 5 }\"/>\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Ends At:</label>\n" +
    "      <div class=\"col-sm-9\">\n" +
    "        <div class=\"dropdown\" is-open=\"endsAtDropdown.isopen\">\n" +
    "          <a class=\"dropdown-toggle\" role=\"button\" data-toggle=\"dropdown\" data-target=\"#\" href=\"#\">\n" +
    "            <div class=\"input-group\">\n" +
    "              <input type=\"text\" class=\"form-control\" formatted-date data-ng-model=\"weekData.ends_at\" ng-required=\"true\" ng-disabled=\"true\">\n" +
    "              <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-calendar\"></i></span>\n" +
    "            </div>\n" +
    "          </a>\n" +
    "          <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dLabel\">\n" +
    "            <datetimepicker data-ng-model=\"weekData.ends_at\" data-on-set-time=\"closeEndsAt()\" data-datetimepicker-config=\"{ minuteStep: 5 }\"/>\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "  <button class=\"btn btn-primary\" ng-disabled=\"editWeekForm.$invalid\" ng-click=\"editWeek(weekData)\">Update</button>\n" +
    "</div>");
}]);

angular.module("modules/private/league/contact/league.contact.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/league/contact/league.contact.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Contact Commish</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <form name=\"contactForm\" class=\"contact-form form-horizontal\" role=\"form\" novalidate>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(contactForm.message), 'has-feedback': hasError(contactForm.message)}\">\n" +
    "      <label for=\"message\" class=\"col-sm-2 control-label\">Message:</label>\n" +
    "      <div class=\"col-sm-10\">\n" +
    "        <textarea id=\"message\" name=\"message\" class=\"form-control\" placeholder=\"Send a direct message to the commish...\" rows=\"3\" maxlength=\"200\" ng-model=\"commishMessage\" required></textarea>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(contactForm.message, 'required')\">Required</small>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(contactForm.message, 'maxlength')\">Too Long</small>\n" +
    "        <span ng-show=\"hasError(contactForm.message)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "  <button class=\"btn btn-primary\" ng-disabled=\"contactForm.$pristine || contactForm.$invalid\" ng-click=\"contactCommish(leagueData, commishMessage)\">Send</button>\n" +
    "</div>");
}]);

angular.module("modules/private/league/edit/league.edit.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/league/edit/league.edit.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Edit League</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <form name=\"leagueForm\" role=\"form\" novalidate>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <div class=\"btn-group league-type-btn-group\">\n" +
    "            <label class=\"btn btn-default league-type-btn\" ng-model=\"leagueData.public\" btn-radio=\"true\" uncheckable>Public League<br><span class=\"small-gray\">[ anyone can join ]</span></label>\n" +
    "            <label class=\"btn btn-default league-type-btn\" ng-model=\"leagueData.public\" btn-radio=\"false\" uncheckable>Private League<br><span class=\"small-gray\">[ invite only ]</span></label>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\" ng-show=\"!leagueData.started\">\n" +
    "          <div class=\"btn-group league-format-btn-group\">\n" +
    "            <label class=\"btn btn-default league-format-btn\" ng-model=\"leagueData.elimination\" btn-radio=\"false\" uncheckable>Biggest Loser<br><span class=\"small-gray\">[ most correct picks ]</span></label>\n" +
    "            <label class=\"btn btn-default league-format-btn\" ng-model=\"leagueData.elimination\" btn-radio=\"true\" uncheckable>LoseOrGoHome<br><span class=\"small-gray\">[ single elimination ]</span></label>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\" ng-show=\"leagueData.started\">\n" +
    "          <label class=\"control-label\">League format:</label>\n" +
    "          <input type=\"text\" class=\"form-control\" value=\"Biggest Loser [ no elimination ]\" ng-show=\"leagueData.elimination == false\" ng-disabled=\"true\">\n" +
    "          <input type=\"text\" class=\"form-control\" value=\"LoseOrGoHome [ single elimination ]\" ng-show=\"leagueData.elimination == true\" ng-disabled=\"true\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\" ng-class=\"{'has-error': hasError(leagueForm.leagueName), 'has-feedback': hasError(leagueForm.leagueName)}\">\n" +
    "          <label class=\"control-label\" for=\"leagueName\">League name:\n" +
    "            <small ng-show=\"hasPropertyError(leagueForm.leagueName, 'required')\">[ Required ]</small>\n" +
    "            <small ng-show=\"hasPropertyError(leagueForm.leagueName, 'maxlength')\">[ Too Long ]</small>\n" +
    "          </label>\n" +
    "          <input id=\"leagueName\" name=\"leagueName\" type=\"text\" class=\"form-control\" ng-model=\"leagueData.name\" ng-maxlength=\"30\" required>\n" +
    "          <span ng-show=\"hasError(leagueForm.leagueName)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"control-label\" for=\"season\">Season:</label>\n" +
    "          <select id=\"season\" name=\"season\" class=\"form-control\" ng-show=\"!leagueData.started\" ng-change=\"getSeasonWeeks()\" ng-model=\"leagueData.season_id\" ng-options=\"season.id as season.name for season in seasons\"></select>\n" +
    "          <input id=\"seasonName\" name=\"seasonName\" type=\"text\" class=\"form-control\" ng-show=\"leagueData.started\" ng-model=\"leagueData.season_name\" ng-disabled=\"true\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"control-label\" for=\"startWeek\">Start week:</label>\n" +
    "          <select id=\"startWeek\" name=\"startWeek\" class=\"form-control\" ng-show=\"!leagueData.started\" ng-model=\"leagueData.start_week_id\" ng-options=\"week.id as week.display for week in weeks\"></select>\n" +
    "          <input id=\"startWeekDisplay\" name=\"startWeekDisplay\" type=\"text\" class=\"form-control\" ng-show=\"leagueData.started\" ng-model=\"leagueData.start_week_display\" ng-disabled=\"true\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\" ng-class=\"{'has-error': hasError(leagueForm.maxTeams), 'has-feedback': hasError(leagueForm.maxTeams)}\">\n" +
    "          <label class=\"control-label\" for=\"maxTeams\">How many times can a user join:\n" +
    "            <small ng-show=\"hasPropertyError(leagueForm.maxTeams, 'required')\">[ Number Required ]</small>\n" +
    "            <small ng-show=\"hasPropertyError(leagueForm.maxTeams, 'min')\">[ 1 - 10 ]</small>\n" +
    "            <small ng-show=\"hasPropertyError(leagueForm.maxTeams, 'max')\">[ 1 - 10 ]</small>\n" +
    "          </label>\n" +
    "          <input id=\"maxTeams\" name=\"maxTeams\" type=\"number\" placeholder=\"Between 1 and 10\" min=\"1\" max=\"10\" class=\"form-control\" ng-model=\"leagueData.max_teams_per_user\" logh-focus required>\n" +
    "          <span ng-show=\"hasError(leagueForm.maxTeams)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"control-label\" for=\"message\">Message\n" +
    "            <small>[ Optional ]</small>\n" +
    "          </label>\n" +
    "          <textarea id=\"message\" name=\"message\" class=\"form-control\" placeholder=\"Enter a message for you league here...\" rows=\"2\" maxlength=\"500\" ng-model=\"leagueData.message\"></textarea>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "  <button class=\"btn btn-info btn-primary\" ng-disabled=\"leagueForm.$pristine || leagueForm.$invalid\" ng-click=\"updateLeague(leagueData)\">Update</button>\n" +
    "</div>");
}]);

angular.module("modules/private/league/invite/league.invite.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/league/invite/league.invite.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\"><span ng-show=\"!startWeekComplete\">Invite Friends</span><span ng-show=\"startWeekComplete\">Invitations</span></h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <div ng-show=\"!startWeekComplete\">\n" +
    "    <form name=\"inviteForm\" class=\"invite-form\" role=\"form\" novalidate>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-sm-12 col-md-12\">\n" +
    "          <div class=\"form-group\" ng-class=\"{'has-error': hasError(inviteForm.emails), 'has-feedback': hasError(inviteForm.emails)}\">\n" +
    "            <label for=\"emails\" class=\"control-label\">Email(s):</label>\n" +
    "            <input id=\"emails\" name=\"emails\" type=\"text\" class=\"form-control\" placeholder=\"Seperate emails with a space...\" ng-model=\"invitation.email\" required>\n" +
    "            <small class=\"input-error\" ng-show=\"hasPropertyError(inviteForm.emails, 'required')\">Required</small>\n" +
    "            <span ng-show=\"hasError(inviteForm.emails)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-sm-12 col-md-12\">\n" +
    "          <div class=\"form-group\" ng-class=\"{'has-error': hasError(inviteForm.message), 'has-feedback': hasError(inviteForm.message)}\">\n" +
    "            <label for=\"message\" class=\"control-label\">Message:</label>\n" +
    "            <textarea id=\"message\" name=\"message\" class=\"form-control\" placeholder=\"Enter a optional message to deliver with the invitation...\" rows=\"3\" maxlength=\"400\" ng-model=\"invitation.message\"></textarea>\n" +
    "            <small class=\"input-error\" ng-show=\"hasPropertyError(inviteForm.message, 'maxlength')\">Too Long</small>\n" +
    "            <span ng-show=\"hasError(inviteForm.message)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-sm-6 col-md-6\">\n" +
    "          <button class=\"invite-reset-btn btn btn-default btn-block\" ng-click=\"resetInvite()\">Clear</button>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-6 col-md-6\">\n" +
    "          <button class=\"invite-send-btn btn btn-primary btn-block\" ng-disabled=\"inviteForm.$invalid\" ng-click=\"sendInvite(invitation)\">Send</button>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "    <hr>\n" +
    "  </div>\n" +
    "  <div ng-show=\"isCommish\">\n" +
    "    <div class=\"invites-tab\">\n" +
    "      <ul class=\"nav nav-tabs\">\n" +
    "        <li class=\"active\"><a>Invites [ {{invitations.length}} ]</a></li>\n" +
    "      </ul>\n" +
    "      <span class=\"click-to-edit\" ng-show=\"!startWeekComplete\">[ click invite to edit ]</span>\n" +
    "    </div>\n" +
    "    <div class=\"league-invites\">\n" +
    "      <div class=\"list-group\">\n" +
    "        <a ng-repeat=\"invite in invitations\" class=\"list-group-item\" ng-click=\"populateInvite(invite)\">\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-sm-12 col-md-12\">\n" +
    "              <i class=\"fa fa-check fa-fw\" ng-show=\"invite.accepted_at\" title=\"Accepted\"></i> {{invite.email}}<br><span class=\"sent-date\"><span ng-show=\"!invite.accepted_at\">Sent {{invite.updated_at}}</span><span ng-show=\"invite.accepted_at\">Joined {{invite.accepted_at}}</span></span>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </a>\n" +
    "      </div>\n" +
    "      <div class=\"no-picks-alert alert alert-info\" ng-show=\"invitations.length == 0\">\n" +
    "        No invites\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Close</button>\n" +
    "</div>");
}]);

angular.module("modules/private/league/invite/request/league.invite.request.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/league/invite/request/league.invite.request.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Request Invite</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <form name=\"requestInviteForm\" class=\"request-invite-form form-horizontal\" role=\"form\" novalidate>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(requestInviteForm.email), 'has-feedback': hasError(requestInviteForm.email)}\">\n" +
    "      <label for=\"email\" class=\"col-sm-2 control-label\">For:</label>\n" +
    "      <div class=\"col-sm-10\">\n" +
    "        <input id=\"email\" name=\"email\" type=\"email\" class=\"form-control\" placeholder=\"Enter email\" ng-model=\"invitation.email\" required>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(requestInviteForm.email, 'required')\">Required</small>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(requestInviteForm.email, 'email')\">Invalid email</small>\n" +
    "        <span ng-show=\"hasError(requestInviteForm.email)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(requestInviteForm.message), 'has-feedback': hasError(requestInviteForm.message)}\">\n" +
    "      <label for=\"message\" class=\"col-sm-2 control-label\">Message:</label>\n" +
    "      <div class=\"col-sm-10\">\n" +
    "        <textarea id=\"message\" name=\"message\" class=\"form-control\" placeholder=\"Enter a optional message for the commish of the league...\" rows=\"3\" maxlength=\"200\" ng-model=\"invitation.message\"></textarea>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(requestInviteForm.message, 'maxlength')\">Too Long</small>\n" +
    "        <span ng-show=\"hasError(requestInviteForm.message)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "  <button class=\"btn btn-primary\" ng-disabled=\"requestInviteForm.$invalid\" ng-click=\"requestInvite(invitation)\">Request Invite</button>\n" +
    "</div>");
}]);

angular.module("modules/private/league/join/league.join.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/league/join/league.join.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Join League</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <form name=\"joinForm\" class=\"join-form form-horizontal\" role=\"form\" novalidate>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(joinForm.teamName), 'has-feedback': hasError(joinForm.teamName)}\">\n" +
    "      <label for=\"teamName\" class=\"col-sm-4 col-md-4 control-label\">Give your team a name:</label>\n" +
    "      <div class=\"col-sm-8 col-md-8\">\n" +
    "        <input id=\"teamName\" name=\"teamName\" type=\"text\" class=\"form-control\" placeholder=\"Enter name...\" ng-model=\"newTeamData.name\" ng-maxlength=\"30\" required>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(joinForm.teamName, 'required')\">Required</small>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(joinForm.teamName, 'maxlength')\">Too Long</small>\n" +
    "        <span ng-show=\"hasError(joinForm.teamName)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "  <button class=\"btn btn-primary\" ng-disabled=\"joinForm.$pristine || joinForm.$invalid\" ng-click=\"joinLeague(newTeamData)\">Join</button>\n" +
    "</div>");
}]);

angular.module("modules/private/league/league.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/league/league.tpl.html",
    "<div ui-view=\"leagueContent\" class=\"league-content\"></div>\n" +
    "");
}]);

angular.module("modules/private/league/message/league.message.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/league/message/league.message.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Update Message</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <form name=\"messageForm\" class=\"league-message-form form-horizontal\" role=\"form\" novalidate>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(messageForm.message), 'has-feedback': hasError(messageForm.message)}\">\n" +
    "      <label for=\"message\" class=\"col-sm-4 control-label\">\n" +
    "        League Message: <br>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(messageForm.message, 'maxlength')\">[ Too Long ]</small>\n" +
    "      </label>\n" +
    "      <div class=\"col-sm-8\">\n" +
    "        <textarea id=\"message\" name=\"message\" class=\"form-control\" placeholder=\"Enter a message for your league to see or leave it blank.\" rows=\"3\" ng-maxlength=\"500\" ng-model=\"leagueData.message\"></textarea>\n" +
    "        <div class=\"email-league-message-checkbox\" ng-show=\"leagueData.elimination\">\n" +
    "          <label><input type=\"checkbox\" ng-model=\"messageOptions.sendAlive\"> email message to alive teams</label>\n" +
    "        </div>\n" +
    "        <div class=\"email-league-message-checkbox\">\n" +
    "          <label><input type=\"checkbox\" ng-model=\"messageOptions.sendAll\"> email message to all teams</label>\n" +
    "        </div>\n" +
    "        <span ng-show=\"hasError(messageForm.message)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "  <button class=\"btn btn-primary\" ng-disabled=\"messageForm.$pristine || messageForm.$invalid\" ng-click=\"updateMessage(leagueData, messageOptions.sendAlive, messageOptions.sendAll)\">Update</button>\n" +
    "</div>");
}]);

angular.module("modules/private/league/new/league.new.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/league/new/league.new.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Create League</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <form name=\"newLeagueForm\" role=\"form\" novalidate>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <div class=\"btn-group league-type-btn-group\">\n" +
    "            <label class=\"btn btn-default league-type-btn\" ng-model=\"newLeagueData.public\" btn-radio=\"true\" uncheckable>Public League<br><span class=\"small-gray\">[ anyone can join ]</span></label>\n" +
    "            <label class=\"btn btn-default league-type-btn\" ng-model=\"newLeagueData.public\" btn-radio=\"false\" uncheckable>Private League<br><span class=\"small-gray\">[ invite only ]</span></label>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <div class=\"btn-group league-format-btn-group\">\n" +
    "            <label class=\"btn btn-default league-format-btn\" ng-model=\"newLeagueData.elimination\" btn-radio=\"true\" uncheckable>LoseOrGoHome<br><span class=\"small-gray\">[ single elimination ]</span></label>\n" +
    "            <label class=\"btn btn-default league-format-btn\" ng-model=\"newLeagueData.elimination\" btn-radio=\"false\" uncheckable>Biggest Loser<br><span class=\"small-gray\">[ no elimination ]</span></label>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\" ng-class=\"{'has-error': hasError(newLeagueForm.leagueName), 'has-feedback': hasError(newLeagueForm.leagueName)}\">\n" +
    "          <label class=\"control-label\" for=\"leagueName\">League name:\n" +
    "            <small ng-show=\"hasPropertyError(newLeagueForm.leagueName, 'required')\">[ Required ]</small>\n" +
    "            <small ng-show=\"hasPropertyError(newLeagueForm.leagueName, 'maxlength')\">[ Too Long ]</small>\n" +
    "          </label>\n" +
    "          <input id=\"leagueName\" name=\"leagueName\" type=\"text\" class=\"form-control\" ng-model=\"newLeagueData.name\" ng-maxlength=\"30\" required>\n" +
    "          <span ng-show=\"hasError(newLeagueForm.leagueName)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"league-nickname row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"control-label\" for=\"nickname\">Nickname</label>\n" +
    "          <input id=\"nickname\" name=\"nickname\" type=\"text\" class=\"form-control\" ng-model=\"newLeagueData.nickname\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"control-label\" for=\"season\">Season:</label>\n" +
    "          <select id=\"season\" name=\"season\" class=\"form-control\" ng-change=\"getSeasonWeeks()\" ng-model=\"newLeagueData.season_id\" ng-options=\"season.id as season.name for season in seasons\"></select>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"control-label\" for=\"startWeek\">Start week:</label>\n" +
    "          <select id=\"startWeek\" name=\"startWeek\" class=\"form-control\" ng-model=\"newLeagueData.start_week_id\" ng-options=\"week.id as week.display for week in weeks\"></select>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\" ng-class=\"{'has-error': hasError(newLeagueForm.maxTeams), 'has-feedback': hasError(newLeagueForm.maxTeams)}\">\n" +
    "          <label class=\"control-label\" for=\"maxTeams\">How many times can a user join:\n" +
    "            <small ng-show=\"hasPropertyError(newLeagueForm.maxTeams, 'required')\">[ Number Required ]</small>\n" +
    "            <small ng-show=\"hasPropertyError(newLeagueForm.maxTeams, 'min')\">[ 1 - 10 ]</small>\n" +
    "            <small ng-show=\"hasPropertyError(newLeagueForm.maxTeams, 'max')\">[ 1 - 10 ]</small>\n" +
    "          </label>\n" +
    "          <input id=\"maxTeams\" name=\"maxTeams\" type=\"number\" placeholder=\"Between 1 and 10\" min=\"1\" max=\"10\" class=\"form-control\" ng-model=\"newLeagueData.max_teams_per_user\" logh-focus required>\n" +
    "          <span ng-show=\"hasError(newLeagueForm.maxTeams)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"control-label\" for=\"message\">Message [ Optional ]</label>\n" +
    "          <textarea id=\"message\" name=\"message\" class=\"form-control\" placeholder=\"Enter a message for your league here. You can change it at any time.\" rows=\"2\" maxlength=\"500\" ng-model=\"newLeagueData.message\"></textarea>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "  <button class=\"btn btn-primary\" ng-disabled=\"newLeagueForm.$invalid\" ng-click=\"createLeague(newLeagueData)\">Create</button>\n" +
    "</div>");
}]);

angular.module("modules/private/league/view/league.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/league/view/league.view.tpl.html",
    "<div class=\"header-row row\">\n" +
    "  <div class=\"col-sm-7 col-md-7\">\n" +
    "    <div class=\"btn-group leagues-dropdown\" dropdown is-open=\"leagueDropdown.isopen\">\n" +
    "      <button type=\"button\" class=\"leagues-btn-link btn btn-link dropdown-toggle\" ng-disabled=\"!isCommish(leagueData) && !isAdmin()\">\n" +
    "        <span class=\"league-name\" ng-class=\"{'disabled': !isCommish(leagueData) && !isAdmin()}\">\n" +
    "        <i class=\"fa fa-times icon\" title=\"Closed league\" ng-show=\"!leagueData.open\"></i>\n" +
    "        <i class=\"fa fa-lock icon\" title=\"Private league\" ng-show=\"leagueData.open && !leagueData.public\"></i>\n" +
    "        <i class=\"fa fa-unlock icon\" title=\"Public league\" ng-show=\"leagueData.open && leagueData.public\"></i>\n" +
    "        <strong>{{leagueData.name}}</strong></span> <span ng-show=\"isCommish(leagueData) || isAdmin()\" class=\"caret\"></span>\n" +
    "      </button>\n" +
    "      <ul class=\"dropdown-menu league-actions-menu\" role=\"menu\">\n" +
    "        <li><a ng-show=\"isCommish(leagueData) || isAdmin()\" ng-click=\"toggleDropdown($event);editLeague(leagueData)\">Edit league</a></li>\n" +
    "        <li><a ng-show=\"isCommish(leagueData)\" ng-click=\"toggleDropdown($event);updateMessage(leagueData)\">Edit league message</a></li>\n" +
    "        <li><a ng-show=\"isCommish(leagueData)\" ng-click=\"toggleDropdown($event);invite(leagueData.id, isCommish(leagueData), leagueData.start_week_complete)\">Manage invitations</a></li>\n" +
    "        <li><a ng-show=\"isCommish(leagueData) && teamOptions.inactive == true\" ng-click=\"toggleDropdown($event);showDeactivatedTeams(false);\">Hide deactivated teams</a></li>\n" +
    "        <li><a ng-show=\"isCommish(leagueData) && teamOptions.inactive == false\" ng-click=\"toggleDropdown($event);showDeactivatedTeams(true);\">Show deactivated teams</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "    <h3 style=\"margin-top: 0;\">\n" +
    "      <div class=\"league-meta\" ng-class=\"{'show-meta': !leagueData.start_week_complete}\">\n" +
    "        <small ng-show=\"leagueData.elimination\">LoseOrGoHome [ single elimination ]</small><small ng-show=\"!leagueData.elimination\">Biggest Loser [ no elimination ]</small><br>\n" +
    "        <small>Commish [ {{leagueData.commish_names.join(', ')}} ]</small><br>\n" +
    "      </div>\n" +
    "      <small >{{starts(leagueData)}}</small>\n" +
    "      <small class=\"closed-text\" ng-show=\"!leagueData.open\">CLOSED TO NEW TEAMS</small>\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-5 col-md-5\">\n" +
    "    <button type=\"button\" class=\"join-btn btn btn-primary\" ng-show=\"!leagueData.start_week_complete\" ng-click=\"joinLeague(leagueData)\">Join</button>\n" +
    "    <button type=\"button\" class=\"invite-btn btn btn-primary\" ng-show=\"!leagueData.start_week_complete && (leagueData.public || isCommish(leagueData))\" ng-click=\"invite(leagueData.id, isCommish(leagueData), leagueData.start_week_complete)\">Invite</button>\n" +
    "    <button type=\"button\" class=\"request-invite-btn btn btn-primary\" ng-show=\"!leagueData.start_week_complete && !leagueData.public && !isCommish(leagueData)\" ng-click=\"requestInvite(leagueData)\">Request Invite</button>\n" +
    "    <h3 class=\"league-meta-right\" ng-show=\"leagueData.start_week_complete\">\n" +
    "      <small ng-show=\"leagueData.elimination\">LoseOrGoHome [ single elimination ]</small><small ng-show=\"!leagueData.elimination\">Biggest Loser [ no elimination ]</small><br>\n" +
    "      <small>Commish [ {{leagueData.commish_names.join(', ')}} ]</small><br>\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"league-message alert alert-info\" ng-show=\"!leagueData.start_week_complete || hasTeamInLeague() || isCommish(leagueData)\"><strong>Commish to league:</strong> <p class=\"league-message-text\" ng-show=\"!leagueData.message || leagueData.message.length == 0\">nothing</p><p class=\"league-message-text\" ng-show=\"leagueData.message.length > 0\" ng-bind-html=\"leagueData.message | linky:'_blank'\"></p> <a class=\"alert-link\" ng-show=\"isCommish(leagueData)\" ng-click=\"updateMessage(leagueData)\">[ edit ]</a><a class=\"alert-link\" ng-show=\"!isCommish(leagueData) && hasTeamInLeague()\" ng-click=\"contactCommish(leagueData)\">[ contact ]</a></div>\n" +
    "<hr>\n" +
    "<div class=\"teams-tab\">\n" +
    "  <ul class=\"nav nav-tabs\">\n" +
    "    <li class=\"active\"><a>Teams [ <span ng-show=\"leagueData.elimination\">{{leagueData.alive_team_count}} / </span>{{leagueData.team_count}} ]</a></li>\n" +
    "  </ul>\n" +
    "  <div class=\"weeks\">\n" +
    "    <select class=\"form-control\" ng-change=\"changeWeek(selectedWeekId)\" ng-model=\"selectedWeekId\" ng-options=\"leagueWeek.id as leagueWeek.display for leagueWeek in leagueWeeks\">\n" +
    "      <option value=\"\">All Weeks</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"input-group custom-search-form filter-league-join\">\n" +
    "  <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" ng-model=\"teamQuery\">\n" +
    "</div>\n" +
    "<div class=\"league-container\">\n" +
    "  <div class=\"league-teams list-group\">\n" +
    "    <a class=\"list-group-item\" ng-class=\"{'inactive': !team.active || !team.alive}\" ng-repeat=\"team in leagueTeams | activeTeamFilter:teamOptions | filter:search:strict | offsetFilter:(currentTeamPage-1)*teamsPerPage | limitTo:teamsPerPage\" ng-click=\"showTeam(team)\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"league-name col-sm-5 col-md-5\">\n" +
    "          <i class=\"fa fa-user fa-fw\" ng-show=\"isCoach(team)\" title=\"My team\"></i><i class=\"fa fa-dollar fa-fw\" ng-show=\"!isCoach(team) && isCommish(leagueData) && team.paid == true\" title=\"Paid\"></i> <span class=\"team-name\" ng-class=\"{'inactive': !team.active || !team.alive}\">{{team.name}}</span><br><span class=\"coach-name\">Coach: {{coachName(team)}}</span>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-7 col-md-7\">\n" +
    "          <span class=\"current-pick\" ng-class=\"{'no-pick': hasNoPick(team)}\" ng-show=\"team.active && team.started\">\n" +
    "            <i class=\"fa fa-lock fa-fw\" ng-show=\"team.last_pick.locked && team.last_pick.correct == null\" title=\"Pick locked\"></i>\n" +
    "            <i class=\"fa fa-unlock fa-fw\" ng-show=\"!team.last_pick.locked && team.last_pick.correct == null\" title=\"Pick unlocked\"></i>\n" +
    "            <i class=\"fa fa-times fa-fw\" ng-show=\"team.last_pick.correct === false\" title=\"Pick wrong\"></i>\n" +
    "            <i class=\"fa fa-check fa-fw\" ng-show=\"team.last_pick.correct === true\" title=\"Pick correct\"></i>\n" +
    "            [ <span class=\"current-loser-name\">{{team.last_pick.name}}</span><span class=\"current-loser-abbrev\">{{team.last_pick.abbrev}}</span> ]\n" +
    "          </span>\n" +
    "          <span class=\"current-pick\" ng-show=\"team.active && !team.started\">Starts {{team.start_week}}</span>\n" +
    "          <span class=\"inactive-team current-pick\" ng-show=\"!team.active\">Team has been deactivated</span>\n" +
    "          <span class=\"badge\">{{team.correct_picks_count}} loser<span ng-show=\"team.correct_picks_count !== 1\">s</span></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </a>\n" +
    "  </div>\n" +
    "  <div>\n" +
    "    <div class=\"alert alert-info\" ng-show=\"(leagueTeams | activeTeamFilter:teamOptions | filter:search:strict).length == 0\">\n" +
    "      No teams found\n" +
    "    </div>\n" +
    "    <div class=\"league-teams-pagination\" ng-show=\"leagueTeams.length > teamsPerPage && (leagueTeams | activeTeamFilter:teamOptions | filter:search:strict).length > 0\">\n" +
    "      <pagination boundary-links=\"true\" max-size=\"4\" total-items=\"(leagueTeams | activeTeamFilter:teamOptions | filter:search:strict).length\" items-per-page=\"teamsPerPage\" ng-model=\"currentTeamPage\" class=\"pagination-md\" previous-text=\"&lsaquo;\" next-text=\"&rsaquo;\" first-text=\"&laquo;\" last-text=\"&raquo;\"></pagination>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("modules/private/leagues/join/leagues.join.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/leagues/join/leagues.join.tpl.html",
    "<div class=\"join-leagues-header-row row\">\n" +
    "  <div class=\"col-sm-9 col-md-9\">\n" +
    "    <h3>Join a league...</h3>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-3 col-md-3\">\n" +
    "    <div class=\"join-leagues-btn-group\">\n" +
    "      <button type=\"button\" class=\"create-league-btn btn btn-primary\" ng-click=\"createLeague(selectedSeasonId)\">Create League</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<hr>\n" +
    "<div class=\"join-leagues-tabs\">\n" +
    "  <ul class=\"nav nav-tabs\">\n" +
    "    <li ng-class=\"{'active': isPublic()}\" ng-click=\"resetSearch()\">\n" +
    "      <a ng-click=\"publicLeagues(selectedSeasonId)\"><i class=\"fa fa-unlock fa-fw\" title=\"Public leagues\"></i> Public <span class=\"leagues\">Leagues</span></a>\n" +
    "    </li>\n" +
    "    <li ng-class=\"{'active': !isPublic()}\" ng-click=\"resetSearch()\">\n" +
    "      <a ng-click=\"privateLeagues(selectedSeasonId)\"><i class=\"fa fa-lock fa-fw\" title=\"Private leagues\"></i> Private <span class=\"leagues\">Leagues</span></a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "  <div class=\"seasons\">\n" +
    "    <select class=\"form-control\" ng-change=\"changeSeason(selectedSeasonId)\" ng-model=\"selectedSeasonId\" ng-options=\"currentSeason.id as currentSeason.name for currentSeason in currentSeasons\"></select>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"input-group custom-search-form filter-league-join\">\n" +
    "  <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" ng-model=\"leagueQuery\">\n" +
    "</div>\n" +
    "\n" +
    "<!-- placeholder for public and private leagues -->\n" +
    "<div class=\"leagues-content\" ui-view=\"joinLeaguesContent\"></div>\n" +
    "\n" +
    "");
}]);

angular.module("modules/private/leagues/join/private/leagues.join.private.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/leagues/join/private/leagues.join.private.tpl.html",
    "<div class=\"private-leagues list-group\">\n" +
    "    <a ng-repeat=\"league in privateLeagues | openLeagueFilter:leagueOptions | filter:search:strict | offsetFilter:(currentLeaguePage-1)*leaguesPerPage | limitTo:leaguesPerPage\" ng-click=\"showLeague(league)\" class=\"list-group-item\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"league-name col-sm-5 col-md-5\" ng-class=\"{'closed': !league.open}\"><i class=\"fa fa-times fa-fw\" title=\"Closed league\" ng-show=\"!league.open\"></i> {{league.name}}<br><span class=\"team-count league-commish\">Commish: {{league.commish_names.join(', ')}}</span></div>\n" +
    "        <div class=\"col-sm-7 col-md-7\">\n" +
    "          <span class=\"private-league-meta\"><span ng-show=\"league.elimination\"><span class=\"loseorgohome\">LoseOrGoHome</span><span class=\"logh\">LOGH</span> [ single elimination ]</span><span ng-show=\"!league.elimination\">Biggest Loser [ no elimination ]</span><br>Starts {{league.start_week}}</span>\n" +
    "          <span class=\"badge\">{{league.team_count}} team<span ng-show=\"league.team_count !== 1\">s</span></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </a>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"private-league-pagination\" ng-show=\"privateLeagues.length > leaguesPerPage && (privateLeagues | openLeagueFilter:leagueOptions | filter:search:strict).length > 0\">\n" +
    "    <pagination boundary-links=\"true\" max-size=\"4\" total-items=\"(privateLeagues | openLeagueFilter:leagueOptions | filter:search:strict).length\" items-per-page=\"leaguesPerPage\" ng-model=\"currentLeaguePage\" class=\"pagination-md\" previous-text=\"&lsaquo;\" next-text=\"&rsaquo;\" first-text=\"&laquo;\" last-text=\"&raquo;\"></pagination>\n" +
    "</div>\n" +
    "<div class=\"alert alert-info\" ng-show=\"(privateLeagues | openLeagueFilter:leagueOptions | filter:search:strict).length == 0\">\n" +
    "  No leagues found\n" +
    "</div>\n" +
    "");
}]);

angular.module("modules/private/leagues/join/public/leagues.join.public.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/leagues/join/public/leagues.join.public.tpl.html",
    "<div class=\"public-leagues list-group\">\n" +
    "    <a ng-repeat=\"league in publicLeagues | openLeagueFilter:leagueOptions | filter:search:strict | offsetFilter:(currentLeaguePage-1)*leaguesPerPage | limitTo:leaguesPerPage\" ng-click=\"showLeague(league)\" class=\"list-group-item\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"league-name col-sm-5 col-md-5\" ng-class=\"{'closed': !league.open}\"><i class=\"fa fa-times fa-fw\" title=\"Closed league\" ng-show=\"!league.open\"></i> {{league.name}}<br><span class=\"team-count league-commish\">Commish: {{league.commish_names.join(', ')}}</span></div>\n" +
    "            <div class=\"col-sm-7 col-md-7\">\n" +
    "                <span class=\"public-league-meta\"><span ng-show=\"league.elimination\"><span class=\"loseorgohome\">LoseOrGoHome</span><span class=\"logh\">LOGH</span> [ single elimination ]</span><span ng-show=\"!league.elimination\">Biggest Loser [ no elimination ]</span><br>Starts {{league.start_week}}</span>\n" +
    "                <span class=\"badge\">{{league.team_count}} team<span ng-show=\"league.team_count !== 1\">s</span></span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </a>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"public-league-pagination\" ng-show=\"publicLeagues.length > leaguesPerPage && (publicLeagues | openLeagueFilter:leagueOptions | filter:search:strict).length > 0\">\n" +
    "    <pagination boundary-links=\"true\" max-size=\"4\" total-items=\"(publicLeagues | openLeagueFilter:leagueOptions |filter:search:strict).length\" items-per-page=\"leaguesPerPage\" ng-model=\"currentLeaguePage\" class=\"pagination-md\" previous-text=\"&lsaquo;\" next-text=\"&rsaquo;\" first-text=\"&laquo;\" last-text=\"&raquo;\"></pagination>\n" +
    "</div>\n" +
    "<div class=\"alert alert-info\" ng-show=\"(publicLeagues | openLeagueFilter:leagueOptions | filter:search:strict).length == 0\">\n" +
    "  No leagues found\n" +
    "</div>\n" +
    "");
}]);

angular.module("modules/private/leagues/leagues.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/leagues/leagues.tpl.html",
    "<div ui-view=\"leaguesContent\"></div>\n" +
    "");
}]);

angular.module("modules/private/leagues/manage/leagues.manage.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/leagues/manage/leagues.manage.tpl.html",
    "<div class=\"manage-leagues-header-row row\">\n" +
    "  <div class=\"col-sm-9 col-md-9\">\n" +
    "    <h3>I manage these leagues...</h3>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-3 col-md-3\">\n" +
    "    <div class=\"manage-leagues-btn-group\">\n" +
    "      <button type=\"button\" class=\"create-league-btn btn btn-primary\" ng-click=\"createLeague(season)\">Create League</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<hr>\n" +
    "\n" +
    "<!--if you have managed leagues (i.e. if you're a commish)-->\n" +
    "<div ng-show=\"managedLeagues.length > 0\" class=\"leagues-container\">\n" +
    "\n" +
    "    <div class=\"managed-leagues list-group\">\n" +
    "        <a ng-repeat=\"league in managedLeagues | offsetFilter:(currentLeaguePage-1)*leaguesPerPage | limitTo:leaguesPerPage\" ng-click=\"viewLeague(league)\" class=\"list-group-item\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"league-name col-sm-6 col-md-6\">\n" +
    "                  <i class=\"fa fa-times fa-fw\" title=\"My Closed league\" ng-show=\"!league.open\"></i>\n" +
    "                  <i class=\"fa fa-unlock fa-fw\" title=\"My Public league\" ng-show=\"league.open && league.public\"></i>\n" +
    "                  <i class=\"fa fa-lock fa-fw\" title=\"My Private league\" ng-show=\"league.open && !league.public\"></i> {{league.name}}</div>\n" +
    "                <div class=\"col-sm-6 col-md-6\">\n" +
    "                    <span class=\"start-week\">{{starts(league)}}</span>\n" +
    "                    <span class=\"badge\">{{league.team_count}} teams</span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--dynamic pagination-->\n" +
    "    <div class=\"manage-league-pagination\" ng-show=\"managedLeagues.length > leaguesPerPage\">\n" +
    "        <pagination boundary-links=\"true\" max-size=\"4\" total-items=\"managedLeagues.length\" items-per-page=\"leaguesPerPage\" ng-model=\"currentLeaguePage\" class=\"pagination-md\" previous-text=\"&lsaquo;\" next-text=\"&rsaquo;\" first-text=\"&laquo;\" last-text=\"&raquo;\"></pagination>\n" +
    "    </div>\n" +
    "    <div style=\"clear: both;\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<!--if you have no managed leagues-->\n" +
    "<div class=\"alert alert-info\" ng-show=\"managedLeagues.length == 0\">\n" +
    "  You are not the commish of any leagues. <a class=\"alert-link\" ng-click=\"createLeague(season)\">Create one</a> and invite all your friends.\n" +
    "</div>\n" +
    "");
}]);

angular.module("modules/private/leagues/my/leagues.my.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/leagues/my/leagues.my.tpl.html",
    "<div class=\"my-leagues-header-row row\">\n" +
    "  <div class=\"col-sm-9 col-md-9\">\n" +
    "    <h3>I am in these leagues...</h3>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-3 col-md-3\">\n" +
    "    <div class=\"my-leagues-btn-group\">\n" +
    "      <button type=\"button\" class=\"join-league-btn btn btn-primary\" ng-click=\"joinLeague(season)\">Join League</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<hr>\n" +
    "\n" +
    "<div ng-show=\"leagues.length > 0\" class=\"leagues-container\">\n" +
    "\n" +
    "  <div class=\"my-leagues list-group\">\n" +
    "    <a ng-repeat=\"league in leagues | offsetFilter:(currentLeaguePage-1)*leaguesPerPage | limitTo:leaguesPerPage\" ng-click=\"viewLeague(league)\" class=\"list-group-item\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"league-name col-sm-6 col-md-6\">\n" +
    "          <i class=\"fa fa-times fa-fw\" title=\"My Closed league\" ng-show=\"!league.open\"></i>\n" +
    "          <i class=\"fa fa-unlock fa-fw\" title=\"My Public league\" ng-show=\"league.open && league.public\"></i>\n" +
    "          <i class=\"fa fa-lock fa-fw\" title=\"My Private league\" ng-show=\"league.open && !league.public\"></i> {{league.name}}</div>\n" +
    "        <div class=\"col-sm-6 col-md-6\">\n" +
    "          <span class=\"start-week\">{{starts(league)}}</span>\n" +
    "          <span class=\"badge\">{{league.team_count}} teams</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </a>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"my-league-pagination\" ng-show=\"leagues.length > leaguesPerPage\">\n" +
    "    <pagination boundary-links=\"true\" max-size=\"4\" total-items=\"leagues.length\" items-per-page=\"leaguesPerPage\" ng-model=\"currentLeaguePage\" class=\"pagination-md\" previous-text=\"&lsaquo;\" next-text=\"&rsaquo;\" first-text=\"&laquo;\" last-text=\"&raquo;\"></pagination>\n" +
    "  </div>\n" +
    "  <div style=\"clear: both;\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<!--if you have no leagues-->\n" +
    "<div class=\"alert alert-info\" ng-show=\"leagues.length == 0\">\n" +
    "  You are in no leagues. <a class=\"alert-link\" ng-click=\"joinLeague(season)\">Join</a> one today.\n" +
    "</div>\n" +
    "");
}]);

angular.module("modules/private/pick/make/pick.make.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/pick/make/pick.make.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h4 class=\"modal-title\">Pick a Loser</h4>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <div class=\"week-desc well-sm alert alert-info\"><strong>{{games[0].week_name}} [ {{games[0].week_type}} ]</strong><br>{{games[0].week_description}}</div>\n" +
    "  <div ng-repeat-start=\"game in games\" class=\"week-games list-group\">\n" +
    "    <h5 ng-class=\"{'invalid-game': game.started}\"><span class=\"game-display\">{{game.display}}</span><br><small>{{starts(game)}}</small></h5>\n" +
    "    <a ng-repeat=\"squad in game.squads\" ng-click=\"makePick(game, squad)\" class=\"list-group-item\" ng-class=\"{'disabled': game.started}\">\n" +
    "      <div class=\"row game-row\">\n" +
    "        <span ng-class=\"{'invalid-squad': hasSquadBeenUsed(game, squad)}\">{{squad.name}} <span class=\"record-score\" ng-show=\"!game.complete\">[ {{squad.record}} ]</span><span class=\"record-score\" ng-show=\"game.complete\">[ {{getScore(game, $index)}} ] <span ng-show=\"($index === 1) && game.overtime === true\">OT</span></span></span>\n" +
    "        <span class=\"badge\" ng-show=\"!game.started && !hasSquadBeenUsed(game, squad)\">Pick</span>\n" +
    "      </div>\n" +
    "    </a>\n" +
    "  </div>\n" +
    "  <div ng-repeat-end></div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "</div>");
}]);

angular.module("modules/private/play/leagues/play.leagues.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/play/leagues/play.leagues.tpl.html",
    "<div ng-show=\"leagues.length > 0\" class=\"leagues-container\">\n" +
    "  <div class=\"my-leagues list-group\">\n" +
    "    <a ng-repeat=\"league in leagues | managedLeagueFilter:leagueOptions | filter:search:strict | offsetFilter:(currentLeaguePage-1)*leaguesPerPage | limitTo:leaguesPerPage\" ng-click=\"viewLeague(league)\" class=\"list-group-item\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"league-name col-sm-5 col-md-5\">\n" +
    "          <i class=\"fa fa-comment fa-fw\" ng-show=\"!isCommish(league) && league.message.length > 0\" title=\"Has message from commish\"></i>\n" +
    "          <i class=\"fa fa-user fa-fw\" title=\"My league\" ng-show=\"isCommish(league)\"></i> {{league.name}}<br><span class=\"team-count league-commish\">Commish: {{league.commish_names.join(', ')}}</span>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-7 col-md-7\">\n" +
    "          <span class=\"my-league-meta\"><span ng-show=\"league.elimination\"><span class=\"loseorgohome\">LoseOrGoHome</span><span class=\"logh\">LOGH</span> [ single elimination ]</span><span ng-show=\"!league.elimination\">Biggest Loser [ no elimination ]</span><br>{{starts(league)}}</span>\n" +
    "          <span class=\"badge\"><span ng-show=\"league.elimination\">{{league.alive_team_count}}/</span>{{league.team_count}} team<span ng-show=\"league.team_count !== 1\">s</span></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </a>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"my-league-pagination\" ng-show=\"leagues.length > leaguesPerPage\">\n" +
    "    <pagination boundary-links=\"true\" max-size=\"4\" total-items=\"leagues.length\" items-per-page=\"leaguesPerPage\" ng-model=\"currentLeaguePage\" class=\"pagination-md\" previous-text=\"&lsaquo;\" next-text=\"&rsaquo;\" first-text=\"&laquo;\" last-text=\"&raquo;\"></pagination>\n" +
    "  </div>\n" +
    "  <div style=\"clear: both;\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<!--if you have no leagues-->\n" +
    "<div class=\"leagues-alert alert alert-info\" ng-show=\"(leagues | managedLeagueFilter:leagueOptions | filter:search:strict).length == 0\">\n" +
    "  No leagues found\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("modules/private/play/play.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/play/play.tpl.html",
    "<div class=\"play-header-row row\">\n" +
    "  <div class=\"col-sm-7 col-md-7\">\n" +
    "    <h3 class=\"my-teams-header\">My Teams & Leagues</h3>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-5 col-md-5\">\n" +
    "    <div class=\"play-btn-group\">\n" +
    "      <button type=\"button\" class=\"join-league-btn btn btn-primary\" ng-click=\"joinLeague(selectedSeasonId)\">Join League</button>\n" +
    "      <button type=\"button\" class=\"create-league-btn btn btn-primary\" ng-click=\"createLeague(selectedSeasonId)\">Create League</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<hr>\n" +
    "<div class=\"teams-leagues-tabs\">\n" +
    "  <ul class=\"nav nav-tabs\">\n" +
    "    <li ng-class=\"{'active': isState(['private.play.teams'])}\" ng-click=\"resetSearch()\">\n" +
    "      <a ng-click=\"myTeams(selectedSeasonId)\"><span class=\"my-teams\">My Teams</span></a>\n" +
    "    </li>\n" +
    "    <li ng-class=\"{'active': isState(['private.play.leagues'])}\" ng-click=\"resetSearch()\">\n" +
    "      <a ng-click=\"myLeagues(selectedSeasonId)\"><span class=\"my-leagues\">My Leagues</span></a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "  <div class=\"seasons\">\n" +
    "    <select class=\"form-control\" ng-change=\"changeSeason(selectedSeasonId)\" ng-model=\"selectedSeasonId\" ng-options=\"startedSeason.id as startedSeason.name for startedSeason in startedSeasons\"></select>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"input-group custom-search-form filter-team-league\">\n" +
    "  <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" ng-model=\"query\">\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"play-content\" ui-view=\"playContent\"></div>\n" +
    "\n" +
    "");
}]);

angular.module("modules/private/play/teams/play.teams.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/play/teams/play.teams.tpl.html",
    "<div ng-show=\"teams.length > 0\" class=\"leagues-container\">\n" +
    "  <div class=\"my-teams list-group\">\n" +
    "    <a class=\"list-group-item\" ng-class=\"{'inactive': !team.active || !team.alive}\" ng-repeat=\"team in teams | aliveTeamFilter:teamOptions | filter:search:strict | offsetFilter:(currentTeamPage-1)*teamsPerPage | limitTo:teamsPerPage\" ng-click=\"showTeam(team)\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"league-name col-sm-5 col-md-5\">\n" +
    "          <i class=\"fa fa-comment fa-fw\" ng-show=\"team.message.length > 0\" title=\"Has message from commish\"></i>\n" +
    "          <span ng-class=\"{'dead-team-name': !team.active || !team.alive}\">{{team.name}}</span><br><span class=\"team-league\">{{team.league.name}}</span></div>\n" +
    "        <div class=\"col-sm-7 col-md-7\">\n" +
    "          <span class=\"current-pick\" ng-class=\"{'no-pick': hasNoPick(team)}\" ng-show=\"team.active && team.started\">\n" +
    "            <i class=\"fa fa-lock fa-fw\" ng-show=\"team.last_pick.locked && team.last_pick.correct == null\" title=\"Pick locked\"></i>\n" +
    "            <i class=\"fa fa-unlock fa-fw\" ng-show=\"!team.last_pick.locked && team.last_pick.correct == null\" title=\"Pick unlocked\"></i>\n" +
    "            <i class=\"fa fa-times fa-fw\" ng-show=\"team.last_pick.correct === false\" title=\"Pick wrong\"></i>\n" +
    "            <i class=\"fa fa-check fa-fw\" ng-show=\"team.last_pick.correct === true\" title=\"Pick correct\"></i>\n" +
    "            [ <span class=\"current-loser-name\">{{team.last_pick.name}}</span><span class=\"current-loser-abbrev\">{{team.last_pick.abbrev}}</span> ]\n" +
    "          </span>\n" +
    "          <span class=\"current-pick\" ng-show=\"team.active && !team.started\">Starts {{team.start_week}}</span>\n" +
    "          <span class=\"inactive-team current-pick\" ng-show=\"!team.active\">Team has been deactivated</span>\n" +
    "          <span class=\"badge\">{{team.correct_picks_count}} loser<span ng-show=\"team.correct_picks_count !== 1\">s</span></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </a>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"my-league-pagination\" ng-show=\"teams.length > teamsPerPage && (teams | filter:search:strict).length > 0\">\n" +
    "    <pagination boundary-links=\"true\" max-size=\"4\" total-items=\"(teams | filter:search:strict).length\" items-per-page=\"teamsPerPage\" ng-model=\"currentTeamPage\" class=\"pagination-md\" previous-text=\"&lsaquo;\" next-text=\"&rsaquo;\" first-text=\"&laquo;\" last-text=\"&raquo;\"></pagination>\n" +
    "  </div>\n" +
    "  <div style=\"clear: both;\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"teams-alert alert alert-info\" ng-show=\"(teams | aliveTeamFilter:teamOptions | filter:search:strict).length == 0\">\n" +
    "  No teams found\n" +
    "</div>\n" +
    "");
}]);

angular.module("modules/private/team/edit/team.edit.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/team/edit/team.edit.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Edit Team</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <form name=\"editTeamForm\" class=\"edit-team-form form-horizontal\" role=\"form\" novalidate>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(editTeamForm.teamName), 'has-feedback': hasError(editTeamForm.teamName)}\">\n" +
    "      <label for=\"teamName\" class=\"col-sm-3 control-label\">Team Name:</label>\n" +
    "      <div class=\"col-sm-9\">\n" +
    "        <input id=\"teamName\" name=\"teamName\" type=\"text\" class=\"form-control\" placeholder=\"Enter a team name\" ng-model=\"teamData.name\" ng-maxlength=\"30\" required>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(editTeamForm.teamName, 'required')\">Required</small>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(editTeamForm.teamName, 'maxlength')\">Too Long</small>\n" +
    "        <span ng-show=\"hasError(editTeamForm.teamName)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "  <button class=\"btn btn-primary\" ng-disabled=\"editTeamForm.$invalid\" ng-click=\"editTeam(teamData)\">Update</button>\n" +
    "</div>");
}]);

angular.module("modules/private/team/message/team.message.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/team/message/team.message.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Update Message</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <form name=\"messageForm\" class=\"team-message-form form-horizontal\" role=\"form\" novalidate>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(messageForm.message), 'has-feedback': hasError(messageForm.message)}\">\n" +
    "      <label for=\"message\" class=\"col-sm-4 control-label\">\n" +
    "        Team Message: <br>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(messageForm.message, 'maxlength')\">[ Too Long ]</small>\n" +
    "      </label>\n" +
    "      <div class=\"col-sm-8\">\n" +
    "        <textarea id=\"message\" name=\"message\" class=\"form-control\" placeholder=\"Enter a message to put on the team's wall...\" rows=\"3\" ng-maxlength=\"500\" ng-model=\"teamData.message\"></textarea>\n" +
    "        <div class=\"email-team-message-checkbox\">\n" +
    "          <label><input type=\"checkbox\" ng-model=\"messageOptions.sendEmail\"> email message to coach</label>\n" +
    "        </div>\n" +
    "        <span ng-show=\"hasError(messageForm.message)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "  <button class=\"btn btn-primary\" ng-disabled=\"messageForm.$pristine || messageForm.$invalid\" ng-click=\"updateMessage(teamData, messageOptions.sendEmail)\">Update</button>\n" +
    "</div>");
}]);

angular.module("modules/private/team/team.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/team/team.tpl.html",
    "<div ui-view=\"teamContent\" class=\"team-content\"></div>\n" +
    "");
}]);

angular.module("modules/private/team/view/team.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/team/view/team.view.tpl.html",
    "<div class=\"alert alert-danger\" ng-show=\"!teamData.active\">This team has been deactivated by the commish and will be unable to pick losers. <a class=\"alert-link\" ng-click=\"contactCommish(teamData)\">Contact the commish</a> if you have questions.</div>\n" +
    "<div class=\"alert alert-danger\" ng-show=\"teamData.active && teamData.alive && teamData.started && hasNoPick(teamData)\">No loser picked for current week. <span ng-show=\"isCoach(teamData)\"><a class=\"alert-link\" ng-click=\"makePick(teamData)\">Pick</a> now.</span></div>\n" +
    "<div class=\"alert alert-danger\" ng-show=\"teamData.active && !teamData.alive\">This team is DEAD. So sorry.</div>\n" +
    "<div class=\"alert alert-warning\" ng-show=\"isCoach(teamData) && teamData.active && !teamData.started\">You can make your first pick when the league starts - {{teamData.start_week_display}}</div>\n" +
    "<div class=\"alert alert-warning\" ng-show=\"isCoach(teamData) && teamData.active && teamData.alive && teamData.last_pick.locked\">Your pick is locked for {{teamData.last_pick.week}}</div>\n" +
    "<div class=\"header-row row\">\n" +
    "  <div class=\"col-sm-8 col-md-8\">\n" +
    "    <div class=\"btn-group teams-dropdown\" dropdown is-open=\"teamDropdown.isopen\">\n" +
    "      <button type=\"button\" class=\"teams-btn-link btn btn-link dropdown-toggle\" ng-disabled=\"!isCoach(teamData) && !isCommish(teamData) && !isAdmin()\">\n" +
    "        <i class=\"fa fa-dollar fa-fw\" ng-show=\"isCommish(teamData) && teamData.paid == true\" title=\"Paid\"></i> <strong><span class=\"team-name\" ng-class=\"{'team-inactive': !teamData.active || !teamData.alive, 'disabled': !isCoach(teamData) && !isCommish(teamData) && !isAdmin()}\">{{teamData.name}}</span> <span ng-show=\"isCoach(teamData) || isCommish(teamData)\" class=\"caret\"></span></strong>\n" +
    "      </button>\n" +
    "      <ul class=\"dropdown-menu teams-btn-menu\" role=\"menu\">\n" +
    "        <li><a ng-click=\"toggleDropdown($event);editTeam(teamData)\">Edit {{teamData.name}}</a></li>\n" +
    "        <li><a ng-show=\"isCommish(teamData)\" ng-click=\"toggleDropdown($event);updateMessage(teamData)\">Edit team message</a></li>\n" +
    "        <li ng-show=\"isCommish(teamData) && !teamData.paid\"><a ng-click=\"toggleDropdown($event);paid(teamData)\">Mark team as paid</a></li>\n" +
    "        <li ng-show=\"isCommish(teamData) && teamData.paid\"><a ng-click=\"toggleDropdown($event);unpaid(teamData)\">Mark team as unpaid</a></li>\n" +
    "        <li ng-show=\"isCommish(teamData) && !teamData.active\"><a ng-click=\"toggleDropdown($event);confirmActivate(teamData)\">Reactivate this team</a></li>\n" +
    "        <li ng-show=\"isCommish(teamData) && teamData.active\"><a ng-click=\"toggleDropdown($event);confirmDeactivate(teamData)\">Deactivate this team</a></li>\n" +
    "        <li ng-show=\"!isCommish(teamData)\"><a ng-click=\"toggleDropdown($event);contactCommish(teamData)\">Contact the commish</a></li>\n" +
    "        <li class=\"divider\" ng-show=\"leagueTeams.length > 1\"></li>\n" +
    "        <li ng-repeat=\"team in leagueTeams\" ng-show=\"team.id != teamData.id\"><a ng-click=\"showTeam(team)\"><span class=\"other-team-name\" ng-class=\"{'team-inactive': !team.active || !team.alive}\">{{team.name}}</span> <span class=\"other-team-pick\">{{team.last_pick.abbrev}}</span></a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "    <h6><a ng-click=\"showLeague(teamData)\"><i class=\"fa fa-chevron-left fa-fw\"></i> <span class=\"team-league-name\">{{teamData.league.name}}</span></a></h6>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-4 col-md-4\">\n" +
    "    <button type=\"button\" class=\"make-pick-btn btn btn-primary\" ng-show=\"isCoach(teamData)\" ng-click=\"makePick(teamData)\" ng-disabled=\"teamData.last_pick.locked || !teamData.started\"><span ng-show=\"hasNoPick(teamData)\">Pick Loser</span><span ng-show=\"!hasNoPick(teamData)\">Change Loser</span></button>\n" +
    "    <h3 class=\"team-meta\" ng-show=\"!isCoach(teamData)\"><small>Coach [ {{teamData.coach_names.join(', ')}} ]</small></h3>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"team-message alert alert-info\" ng-show=\"isCommish(teamData) || isCoach(teamData)\"><strong>Commish to team:</strong> <p class=\"team-message-text\" ng-show=\"!teamData.message || teamData.message.length == 0\">nothing</p><p class=\"team-message-text\" ng-show=\"teamData.message.length > 0\" ng-bind-html=\"teamData.message | linky:'_blank'\"></p> <a class=\"alert-link\" ng-show=\"isCommish(teamData)\" ng-click=\"updateMessage(teamData)\">[ edit ]</a><a class=\"alert-link\" ng-show=\"!isCommish(teamData)\" ng-click=\"contactCommish(teamData)\">[ contact ]</a></div>\n" +
    "<hr>\n" +
    "<div class=\"losers-tab\">\n" +
    "  <ul class=\"nav nav-tabs\">\n" +
    "    <li class=\"active\"><a>Losers [ {{correctPickCount((picks | weekPicksFilter:selectedWeekId))}} ]</a></li>\n" +
    "  </ul>\n" +
    "  <div class=\"weeks\">\n" +
    "    <select class=\"form-control\" ng-change=\"changeWeek(selectedWeekId)\" ng-model=\"selectedWeekId\" ng-options=\"leagueWeek.id as leagueWeek.display for leagueWeek in leagueWeeks\">\n" +
    "      <option value=\"\">All Weeks</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"team-container\" style=\"clear:both;\">\n" +
    "    <div class=\"team-picks list-group\">\n" +
    "      <a ng-repeat=\"pick in picks | weekPicksFilter:selectedWeekId\" class=\"team-pick list-group-item\" ng-click=\"makePick(teamData, pick)\" ng-class=\"{'locked': !isCoach(teamData) || pick.locked, 'incorrect': pick.correct === false}\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"week-name col-sm-7 col-md-7\">\n" +
    "            <i class=\"fa fa-lock fa-fw\" ng-show=\"pick.locked && pick.correct == null\" title=\"Pick locked\"></i>\n" +
    "            <i class=\"fa fa-unlock fa-fw\" ng-show=\"!pick.locked && pick.correct == null\" title=\"Pick unlocked\"></i>\n" +
    "            <i class=\"fa fa-times fa-fw\" ng-show=\"pick.correct === false\" title=\"Pick wrong\"></i>\n" +
    "            <i class=\"fa fa-check fa-fw\" ng-show=\"pick.correct === true\" title=\"Pick correct\"></i> <span class=\"pick-squad\"><span class=\"pick-squad-name\">[ {{pick.squad.name}} ]</span><span class=\"pick-squad-abbrev\">[ {{pick.squad.abbrev}} ]</span></span> <span class=\"game-start\">{{pick.week_type}} | {{pick.week_name}}<span ng-show=\"pick.game_start.length > 0\"> | {{pick.game_start}}</span></span>\n" +
    "          </div>\n" +
    "          <div class=\"game-column col-sm-5 col-md-5\">\n" +
    "            <span class=\"game\">{{pick.game_display}}</span>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "    <div class=\"no-picks-alert alert alert-info\" ng-show=\"(picks | weekPicksFilter:selectedWeekId).length == 0\">\n" +
    "      No picks\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("modules/private/teams/alive/teams.alive.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/teams/alive/teams.alive.tpl.html",
    "<div class=\"alive-teams list-group\">\n" +
    "    <a ng-repeat=\"team in aliveTeams | filter:search:strict | offsetFilter:(currentTeamPage-1)*teamsPerPage | limitTo:teamsPerPage\" ng-click=\"showTeam(seasonId, team)\" class=\"list-group-item\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"team-name col-sm-6 col-md-6\"><i class=\"fa fa-comment fa-fw\" ng-show=\"team.message.length > 0\" title=\"Has message from commish\"></i><i class=\"fa fa-times fa-fw\" title=\"Deactivated Team\" ng-show=\"!team.active\"></i> <span ng-class=\"{'inactive-team-name': !team.active}\">{{team.name}}</span> <span class=\"team-league\">{{team.league.name}}</span></div>\n" +
    "            <div class=\"col-sm-6 col-md-6\">\n" +
    "                <span class=\"current-pick\" ng-class=\"{'no-pick': hasNoPick(team)}\" ng-show=\"team.active\">Pick: {{team.last_pick.name}}</span>\n" +
    "                <span class=\"inactive-team\" ng-show=\"!team.active\">Team has been deactivated</span>\n" +
    "                <span class=\"badge\">View</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </a>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"alive-teams-pagination\" ng-show=\"aliveTeams.length > teamsPerPage && (aliveTeams | filter:search:strict).length > 0\">\n" +
    "  <pagination boundary-links=\"true\" max-size=\"4\" total-items=\"(aliveTeams | filter:search:strict).length\" items-per-page=\"teamsPerPage\" ng-model=\"currentTeamPage\" class=\"pagination-md\" previous-text=\"&lsaquo;\" next-text=\"&rsaquo;\" first-text=\"&laquo;\" last-text=\"&raquo;\"></pagination>\n" +
    "</div>\n" +
    "<div style=\"clear: both;\"></div>\n" +
    "\n" +
    "<div class=\"alert alert-info\" ng-show=\"aliveTeams.length == 0\">\n" +
    "  No alive teams :( Maybe you should <a class=\"alert-link\" ng-click=\"createTeam(seasonId)\">join a league</a> pronto!\n" +
    "</div>\n" +
    "");
}]);

angular.module("modules/private/teams/dead/teams.dead.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/teams/dead/teams.dead.tpl.html",
    "<div class=\"dead-teams list-group\">\n" +
    "  <a ng-repeat=\"team in deadTeams | filter:search:strict | offsetFilter:(currentTeamPage-1)*teamsPerPage | limitTo:teamsPerPage\" ng-click=\"showTeam(seasonId, team)\" class=\"list-group-item\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"team-name col-sm-6 col-md-6\"><i class=\"fa fa-comment fa-fw\" ng-show=\"team.message.length > 0\" title=\"Has message from commish\"></i> <i class=\"fa fa-times fa-fw\" title=\"Deactivated Team\" ng-show=\"!team.active\"></i> <span ng-class=\"{'inactive-team-name': !team.active}\">{{team.name}}</span> <span class=\"team-league\">{{team.league.name}}</span></div>\n" +
    "            <div class=\"col-sm-6 col-md-6\">\n" +
    "                <span class=\"current-pick no-pick\" ng-show=\"team.active\">Pick: {{team.last_pick.name}}</span>\n" +
    "                <span class=\"inactive-team\" ng-show=\"!team.active\">Team has been deactivated</span>\n" +
    "                <span class=\"badge\">View</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </a>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"dead-teams-pagination\" ng-show=\"deadTeams.length > teamsPerPage && (deadTeams | filter:search:strict).length > 0\">\n" +
    "  <pagination boundary-links=\"true\" max-size=\"4\" total-items=\"(deadTeams | filter:search:strict).length\" items-per-page=\"teamsPerPage\" ng-model=\"currentTeamPage\" class=\"pagination-md\" previous-text=\"&lsaquo;\" next-text=\"&rsaquo;\" first-text=\"&laquo;\" last-text=\"&raquo;\"></pagination>\n" +
    "</div>\n" +
    "<div style=\"clear: both;\"></div>\n" +
    "\n" +
    "<div class=\"alert alert-info\" ng-show=\"deadTeams.length == 0\">\n" +
    "  No dead teams :)\n" +
    "</div>\n" +
    "");
}]);

angular.module("modules/private/teams/teams.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/teams/teams.tpl.html",
    "<div class=\"teams-header-row row\">\n" +
    "  <div class=\"col-sm-9 col-md-9\">\n" +
    "    <h3>I coach these teams...</h3>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-3 col-md-3\">\n" +
    "    <div class=\"teams-btn-group\">\n" +
    "      <button type=\"button\" class=\"create-team-btn btn btn-primary\" ng-click=\"createTeam(seasonId)\">Join League</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<hr>\n" +
    "<div class=\"teams-container\">\n" +
    "  <ul class=\"nav nav-tabs\">\n" +
    "    <li ng-class=\"{'active': isAliveState()}\">\n" +
    "      <a ng-click=\"aliveTeams(seasonId)\"><i class=\"fa fa-thumbs-up fa-fw\" title=\"Alive teams\"></i> Alive Teams</a>\n" +
    "    </li>\n" +
    "    <li ng-class=\"{'active': !isAliveState()}\">\n" +
    "      <a ng-click=\"deadTeams(seasonId)\"><i class=\"fa fa-thumbs-down fa-fw\" title=\"Dead teams\"></i> Dead Teams</a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "\n" +
    "<!-- placeholder for alive and dead teams -->\n" +
    "<div class=\"teams-content\" ui-view=\"teamsContent\"></div>\n" +
    "\n" +
    "");
}]);

angular.module("modules/private/user/reset/user.reset.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/user/reset/user.reset.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Reset Password</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <form name=\"resetPasswordForm\" class=\"reset-password-form form-horizontal\" role=\"form\" novalidate>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(resetPasswordForm.email), 'has-feedback': hasError(resetPasswordForm.email)}\">\n" +
    "      <label for=\"email\" class=\"col-sm-2 control-label\">Email:</label>\n" +
    "      <div class=\"col-sm-10\">\n" +
    "        <input id=\"email\" name=\"email\" type=\"email\" class=\"form-control\" placeholder=\"Enter your email\" ng-model=\"userData.email\" required>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(resetPasswordForm.email, 'required')\">Required</small>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(resetPasswordForm.email, 'email')\">Invalid email</small>\n" +
    "        <span ng-show=\"hasError(resetPasswordForm.email)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "  <button class=\"btn btn-primary\" ng-disabled=\"resetPasswordForm.$pristine || resetPasswordForm.$invalid\" ng-click=\"reset(userData.email)\">Reset</button>\n" +
    "</div>");
}]);

angular.module("modules/private/user/user.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/user/user.tpl.html",
    "<div class=\"panel panel-default\">\n" +
    "  <div class=\"panel-heading\">\n" +
    "      <h3 class=\"panel-title\">User Profile</h3>\n" +
    "  </div>\n" +
    "  <div class=\"panel-body\">\n" +
    "      <form name=\"editUserForm\" role=\"form\" novalidate>\n" +
    "          <div class=\"row\">\n" +
    "              <div class=\"col-sm-6 col-md-6\">\n" +
    "                  <div class=\"form-group\" ng-class=\"{'has-error': hasError(editUserForm.firstName), 'has-feedback': hasError(editUserForm.firstName)}\">\n" +
    "                      <label class=\"control-label\" for=\"firstName\">First Name\n" +
    "                          <small ng-show=\"hasPropertyError(editUserForm.firstName, 'required')\">[ Required ]</small>\n" +
    "                          <small ng-show=\"hasPropertyError(editUserForm.firstName, 'maxlength')\">[ Too Long ]</small>\n" +
    "                      </label>\n" +
    "                      <input id=\"firstName\" name=\"firstName\" type=\"text\" class=\"form-control\" ng-model=\"userData.user.first_name\" ng-maxlength=\"15\" required>\n" +
    "                      <span ng-show=\"hasError(editUserForm.firstName)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "                  </div>\n" +
    "              </div>\n" +
    "              <div class=\"col-sm-6 col-md-6\">\n" +
    "                  <div class=\"form-group\" ng-class=\"{'has-error': hasError(editUserForm.lastName), 'has-feedback': hasError(editUserForm.lastName)}\">\n" +
    "                      <label class=\"control-label\" for=\"lastName\">Last Name\n" +
    "                          <small ng-show=\"hasPropertyError(editUserForm.lastName, 'required')\">[ Required ]</small>\n" +
    "                          <small ng-show=\"hasPropertyError(editUserForm.lastName, 'maxlength')\">[ Too Long ]</small>\n" +
    "                      </label>\n" +
    "                      <input id=\"lastName\" name=\"lastName\" type=\"text\" class=\"form-control\" ng-model=\"userData.user.last_name\" ng-maxlength=\"20\" required>\n" +
    "                      <span ng-show=\"hasError(editUserForm.lastName)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "                  </div>\n" +
    "              </div>\n" +
    "          </div>\n" +
    "          <div class=\"form-group\">\n" +
    "              <label class=\"control-label\" for=\"email\">Email</label>\n" +
    "              <input id=\"email\" name=\"email\" type=\"email\" class=\"form-control\" ng-disabled=\"true\" ng-model=\"userData.user.email\">\n" +
    "          </div>\n" +
    "          <div class=\"row\">\n" +
    "              <div class=\"col-sm-6 col-md-6\">\n" +
    "                  <div class=\"form-group\" ng-class=\"{'has-error': hasError(editUserForm.password), 'has-feedback': hasError(editUserForm.password)}\">\n" +
    "                      <label class=\"control-label\" for=\"password\">New Password\n" +
    "                          <small ng-show=\"hasPropertyError(editUserForm.password, 'minlength')\">[ 8 - 50 Characters ]</small>\n" +
    "                          <small ng-show=\"hasPropertyError(editUserForm.password, 'maxlength')\">[ 8 - 50 Characters ]</small>\n" +
    "                      </label>\n" +
    "                      <input id=\"password\" name=\"password\" type=\"password\" class=\"form-control\" ng-model=\"userData.user.password\" ng-minlength=\"8\" ng-maxlength=\"50\">\n" +
    "                      <span ng-show=\"hasError(editUserForm.password)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "                  </div>\n" +
    "              </div>\n" +
    "              <div class=\"col-sm-6 col-md-6\">\n" +
    "                  <div class=\"form-group\" ng-class=\"{'has-error': hasError(editUserForm.confirmPassword), 'has-feedback': hasError(editUserForm.confirmPassword)}\">\n" +
    "                      <label class=\"control-label\" for=\"confirmPassword\">Confirm New Password\n" +
    "                          <small ng-show=\"hasPropertyError(editUserForm.confirmPassword, 'match')\">[ No Match ]</small>\n" +
    "                      </label>\n" +
    "                      <input id=\"confirmPassword\" name=\"confirmPassword\" type=\"password\" class=\"form-control\" ng-model=\"userData.user.password_confirmation\" match=\"userData.user.password\">\n" +
    "                      <span ng-show=\"hasError(editUserForm.confirmPassword)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "                  </div>\n" +
    "              </div>\n" +
    "          </div>\n" +
    "          <button type=\"submit\" class=\"btn btn-info btn-block\" ng-disabled=\"editUserForm.$pristine || editUserForm.$invalid\" ng-click=\"update(userData.user)\">Update</button>\n" +
    "      </form>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("modules/public/abuse/abuse.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/public/abuse/abuse.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Contact Us</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <form name=\"abuseForm\" class=\"contact-form form-horizontal\" role=\"form\" novalidate>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(abuseForm.message), 'has-feedback': hasError(abuseForm.message)}\">\n" +
    "      <label for=\"message\" class=\"col-sm-2 control-label\">Message:</label>\n" +
    "      <div class=\"col-sm-10\">\n" +
    "        <textarea id=\"message\" name=\"message\" class=\"form-control\" placeholder=\"What's on your mind?\" rows=\"3\" maxlength=\"200\" ng-model=\"abuseMessage\" required></textarea>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(abuseForm.message, 'required')\">Required</small>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(abuseForm.message, 'maxlength')\">Too Long</small>\n" +
    "        <span ng-show=\"hasError(abuseForm.message)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "  <button class=\"btn btn-primary\" ng-disabled=\"abuseForm.$pristine || abuseForm.$invalid\" ng-click=\"contactUs(abuseMessage)\">Send</button>\n" +
    "</div>");
}]);

angular.module("modules/public/faq/faq.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/public/faq/faq.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"close()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">FAQ</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <dl class=\"faq\">\n" +
    "    <dt>Which sports are available?</dt>\n" +
    "    <dd>NFL, NBA or NHL.</dd>\n" +
    "    <dt>How much does it cost?</dt>\n" +
    "    <dd>Zip. Zilch. Nada. Freeeeeeeeeeee...</dd>\n" +
    "    <dt>How do I play?</dt>\n" +
    "    <dd>\n" +
    "      <p>- Join a single elimination or non-elimination league.</p>\n" +
    "      <p>- Pick a different loser each week.</p>\n" +
    "      <p>- Root for your loser to lose...duh</p>\n" +
    "      <p>- In a non-elimination league, get the most picks right and win.</p>\n" +
    "      <p>- In single elimination league, last the longest and win.</p>\n" +
    "      <p>- Have fun!</p>\n" +
    "    </dd>\n" +
    "    <dt>Can I pick the same loser twice?</dt>\n" +
    "    <dd>Nope...unless you make it to the playoffs, then all teams are once again available to choose from.</dd>\n" +
    "    <dt>When is the deadline to make my pick?</dt>\n" +
    "    <dd>Just get it in before a game starts.</dd>\n" +
    "    <dt>Do ties count as a loss?</dt>\n" +
    "    <dd>No sir. But for NHL, overtime or shootout losses count as a loss.</dd>\n" +
    "    <dt>What is the difference between a public and private league?</dt>\n" +
    "    <dd>Public leagues allow anyone to join. Private leagues require an invitation from the commish.</dd>\n" +
    "    <dt>The season has already started, can I still play?</dt>\n" +
    "    <dd>Yep. There’s always an open league or create your own league to start anytime during the season.</dd>\n" +
    "    <dt>When is the deadline to join a league?</dt>\n" +
    "    <dd>Join before the end of the league's first week.</dd>\n" +
    "    <dt>What if I fail to make a pick for a week?</dt>\n" +
    "    <dd>In a single elimination league, you’re toast. In a non-elimination league, you've just missed an opportunity. Don't let it happen again.</dd>\n" +
    "    <dt>Can the commish make picks for me?</dt>\n" +
    "    <dd>Negative.</dd>\n" +
    "    <dt>How many times can I join a league?</dt>\n" +
    "    <dd>As much as the commish allows (with a max of 10 times).</dd>\n" +
    "    <dt>How do I win?</dt>\n" +
    "    <dd>In a single elimination league, don’t be wrong. (Or at least be the last one in your league to be wrong.) In a non-elimination league, get the most picks right to win.</dd>\n" +
    "    <dt>What do I win?</dt>\n" +
    "    <dd>That is between you and the commish of the league. However, please be careful when dealing with money. Don’t send money to anyone you don’t know. Common sense, please.</dd>\n" +
    "    <dt>Can I see the pick of others in my league?</dt>\n" +
    "    <dd>Only after the game has started.</dd>\n" +
    "    <dt>Can the commish see my pick?</dt>\n" +
    "    <dd>Only after the game has started.</dd>\n" +
    "    <dt>Can I create my own league?</dt>\n" +
    "    <dd>You betcha. Create a single elimination or non-elimination league.</dd>\n" +
    "    <dt>How do I invite my friends to join my league?</dt>\n" +
    "    <dd>On your league page you’ll find an 'Invite' button. Use it. You’ll just need their email address.</dd>\n" +
    "    <dt>How many friends can join my league?</dt>\n" +
    "    <dd>As many as you like.</dd>\n" +
    "    <dt>Can I set a limit on how many times a friend can join my league?</dt>\n" +
    "    <dd>You sure can. 1 - 10 times.</dd>\n" +
    "    <dt>How do I stop people from joining my league?</dt>\n" +
    "    <dd>Change the league to private.</dd>\n" +
    "    <dt>How can I remove people from my league?</dt>\n" +
    "    <dd>You can’t but you can deactivate (or reactivate) their team. A deactivated team is hidden from view and can’t make any picks.</dd>\n" +
    "    <dt>Can I edit my league?</dt>\n" +
    "    <dd>Yes, but you can't change the start week or format (single elimination or no elimination) after the league starts.</dd>\n" +
    "    <dt>Can I edit a team name in my league?</dt>\n" +
    "    <dd>Yes, the team's coach or the commish can edit a team name at any time.</dd>\n" +
    "    <dt>What if i still have questions?</dt>\n" +
    "    <dd>Find the Contact Us button. We'll get right back to you.</dd>\n" +
    "  </dl>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"close()\">Close</button>\n" +
    "</div>");
}]);

angular.module("modules/public/home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/public/home/home.tpl.html",
    "<div class=\"home-content-container\">\n" +
    "    <h1 class=\"header-jumbo\">Losing is Everything.</h1>\n" +
    "    <p class=\"lead\">Pick a different NFL, NBA or NHL loser each week. Single elimination or non-elimination leagues are waiting for you. Join anytime for free.</p>\n" +
    "  <div>\n" +
    "    <a class=\"cta btn btn-primary btn-lg\" role=\"button\" ng-click=\"joinLeague(selectedSeasonId)\">Join League</a>\n" +
    "  </div>\n" +
    "  <div>\n" +
    "    <a class=\"cta btn btn-primary btn-lg\" role=\"button\" ng-click=\"createLeague(selectedSeasonId)\">Create League</a>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("modules/public/register/register.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/public/register/register.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Register</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <form name=\"newUserForm\" role=\"form\" novalidate>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-6 col-md-6\">\n" +
    "        <div class=\"form-group\" ng-class=\"{'has-error': hasError(newUserForm.firstName), 'has-feedback': hasError(newUserForm.firstName)}\">\n" +
    "          <label class=\"control-label\" for=\"firstName\">First Name\n" +
    "            <small ng-show=\"hasPropertyError(newUserForm.firstName, 'required')\">[ Required ]</small>\n" +
    "            <small ng-show=\"hasPropertyError(newUserForm.firstName, 'maxlength')\">[ Too Long ]</small>\n" +
    "          </label>\n" +
    "          <input id=\"firstName\" name=\"firstName\" type=\"text\" class=\"form-control\" ng-model=\"newUserData.first_name\" ng-maxlength=\"15\" required>\n" +
    "          <span ng-show=\"hasError(newUserForm.firstName)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"col-sm-6 col-md-6\">\n" +
    "        <div class=\"form-group\" ng-class=\"{'has-error': hasError(newUserForm.lastName), 'has-feedback': hasError(newUserForm.lastName)}\">\n" +
    "          <label class=\"control-label\" for=\"lastName\">Last Name\n" +
    "            <small ng-show=\"hasPropertyError(newUserForm.lastName, 'required')\">[ Required ]</small>\n" +
    "            <small ng-show=\"hasPropertyError(newUserForm.lastName, 'maxlength')\">[ Too Long ]</small>\n" +
    "          </label>\n" +
    "          <input id=\"lastName\" name=\"lastName\" type=\"text\" class=\"form-control\" ng-model=\"newUserData.last_name\" ng-maxlength=\"20\" required>\n" +
    "          <span ng-show=\"hasError(newUserForm.lastName)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"user-nickname row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"control-label\" for=\"nickname\">Nickname</label>\n" +
    "          <input id=\"nickname\" name=\"nickname\" type=\"text\" class=\"form-control\" ng-model=\"newUserData.nickname\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-6 col-md-6\">\n" +
    "        <div class=\"form-group\" ng-class=\"{'has-error': hasError(newUserForm.email), 'has-feedback': hasError(newUserForm.email)}\">\n" +
    "          <label class=\"control-label\" for=\"email\">Email\n" +
    "            <small ng-show=\"hasPropertyError(newUserForm.email, 'required')\">[ Required ]</small>\n" +
    "            <small ng-show=\"hasPropertyError(newUserForm.email, 'email')\">[ Invalid Email ]</small>\n" +
    "          </label>\n" +
    "          <input id=\"email\" name=\"email\" type=\"email\" class=\"form-control\" ng-model=\"newUserData.email\" logh-focus required>\n" +
    "          <span ng-show=\"hasError(newUserForm.email)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"col-sm-6 col-md-6\">\n" +
    "        <div class=\"form-group\" ng-class=\"{'has-error': hasError(newUserForm.confirmEmail), 'has-feedback': hasError(newUserForm.confirmEmail)}\">\n" +
    "          <label class=\"control-label\" for=\"confirmEmail\">Confirm Email\n" +
    "            <small ng-show=\"hasPropertyError(newUserForm.confirmEmail, 'match')\">[ No Match ]</small>\n" +
    "          </label>\n" +
    "          <input id=\"confirmEmail\" name=\"confirmEmail\" type=\"email\" class=\"form-control\" ng-model=\"newUserData.email_confirmation\" match=\"newUserData.email\">\n" +
    "          <span ng-show=\"hasError(newUserForm.confirmEmail)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-6 col-md-6\">\n" +
    "        <div class=\"form-group\" ng-class=\"{'has-error': hasError(newUserForm.password), 'has-feedback': hasError(newUserForm.password)}\">\n" +
    "          <label class=\"control-label\" for=\"password\">Password\n" +
    "            <small ng-show=\"hasPropertyError(newUserForm.password, 'required')\">[ Required ]</small>\n" +
    "            <small ng-show=\"hasPropertyError(newUserForm.password, 'minlength')\">[ 8 - 50 Characters ]</small>\n" +
    "            <small ng-show=\"hasPropertyError(newUserForm.password, 'maxlength')\">[ 8 - 50 Characters ]</small>\n" +
    "          </label>\n" +
    "          <input id=\"password\" name=\"password\" type=\"password\" class=\"form-control\" ng-model=\"newUserData.password\" ng-minlength=\"8\" ng-maxlength=\"50\" required>\n" +
    "          <span ng-show=\"hasError(newUserForm.password)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"col-sm-6 col-md-6\">\n" +
    "        <div class=\"form-group\" ng-class=\"{'has-error': hasError(newUserForm.confirmPassword), 'has-feedback': hasError(newUserForm.confirmPassword)}\">\n" +
    "          <label class=\"control-label\" for=\"confirmPassword\">Confirm Password\n" +
    "            <small ng-show=\"hasPropertyError(newUserForm.confirmPassword, 'match')\">[ No Match ]</small>\n" +
    "          </label>\n" +
    "          <input id=\"confirmPassword\" name=\"confirmPassword\" type=\"password\" class=\"form-control\" ng-model=\"newUserData.password_confirmation\" match=\"newUserData.password\">\n" +
    "          <span ng-show=\"hasError(newUserForm.confirmPassword)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"terms well well-sm\"><strong>By clicking register, you agree to the <a ng-click=\"showTerms()\">terms of use.</a></strong></div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "  <button type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"newUserForm.$invalid\" ng-click=\"register(newUserData)\">Register</button>\n" +
    "</div>");
}]);

angular.module("modules/public/register/terms/register.terms.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/public/register/terms/register.terms.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"close()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Terms of Use</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <p>If you choose to use this site for gambling purposes, you assume all risks. Don't be a dummy and send money to people you don't know and trust. Use your cabeza.</p>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"close()\">Close</button>\n" +
    "</div>");
}]);

angular.module("modules/public/signin/signin.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/public/signin/signin.tpl.html",
    "<div class=\"signin-box panel panel-default\">\n" +
    "  <div class=\"panel-body\">\n" +
    "    <form name=\"signinForm\" role=\"form\" ng-submit=\"signin({ email: credentials.email.toLowerCase(), password: credentials.password })\" novalidate>\n" +
    "      <div class=\"form-group\">\n" +
    "        <div class=\"input-group\">\n" +
    "          <span class=\"input-group-addon\"><i class=\"fa fa-envelope fa-fw\"></i></span>\n" +
    "          <input type=\"email\" class=\"form-control\" autocomplete=\"off\" placeholder=\"Email\" ng-model=\"credentials.email\" rc-verify-set autofocus required>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <div class=\"input-group\">\n" +
    "          <span class=\"input-group-addon\"><i class=\"fa fa-key fa-fw\"></i></span>\n" +
    "          <input type=\"password\" class=\"form-control\" autocomplete=\"off\" placeholder=\"Password\" ng-model=\"credentials.password\" rc-verify-set required>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div>\n" +
    "        <a class=\"forgot-password btn btn-link pull-left\" role=\"button\" ng-click=\"resetPassword()\">Forgot Password?</a>\n" +
    "        <button type=\"submit\" class=\"sign-in-btn btn btn-primary pull-right\" ng-disabled=\"signinForm.$invalid\">Sign in</button>\n" +
    "      </div>\n" +
    "      <div style=\"clear: both;\"></div>\n" +
    "      <hr>\n" +
    "      <div class=\"register\"><a ng-click=\"register()\">Don't have an account? <strong>Register</strong></a></div>\n" +
    "    </form>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

},{}],1:[function(require,module,exports){
'use strict';
require('app-templates');


var App = function($urlRouterProvider) {
    // unmatched urls should be directed back to the start
    $urlRouterProvider.otherwise('/');
};

App.$inject = ['$urlRouterProvider'];

var loghApp = angular.module('loghApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'commangular',
    'ui.router',
    'ui.bootstrap',
    'ui.bootstrap.datetimepicker',
    'app.templates',
    'ui.router.stateHelper',
    'angular-loading-bar',

    // public modules
    require('./modules/public/home').name,
    require('./modules/public/faq').name,
    require('./modules/public/abuse').name,
    require('./modules/public/signin').name,
    require('./modules/public/register').name,
    require('./modules/public/register/terms').name,

    // private modules
    // user
    require('./modules/private/user').name,
    require('./modules/private/user/reset').name,

    // league
    require('./modules/private/league').name,
    require('./modules/private/league/new').name,
    require('./modules/private/league/view').name,
    require('./modules/private/league/edit').name,
    require('./modules/private/league/contact').name,
    require('./modules/private/league/message').name,
    require('./modules/private/league/join').name,
    require('./modules/private/league/invite').name,
    require('./modules/private/league/invite/request').name,

    // leagues
    require('./modules/private/leagues').name,
    require('./modules/private/leagues/join').name,
    require('./modules/private/leagues/join/public').name,
    require('./modules/private/leagues/join/private').name,
    require('./modules/private/leagues/manage').name,
    require('./modules/private/leagues/my').name,

    // team
    require('./modules/private/team').name,
    require('./modules/private/team/view').name,
    require('./modules/private/team/edit').name,
    require('./modules/private/team/message').name,

    // teams
    require('./modules/private/teams').name,
    require('./modules/private/teams/alive').name,
    require('./modules/private/teams/dead').name,

    // play
    require('./modules/private/play').name,
    require('./modules/private/play/leagues').name,
    require('./modules/private/play/teams').name,

    // pick
    require('./modules/private/pick/make').name,

    // admin
    require('./modules/private/admin').name,
    require('./modules/private/admin/game/edit').name,
    require('./modules/private/admin/game/new').name,
    require('./modules/private/admin/seasons').name,
    require('./modules/private/admin/seasons/season').name,
    require('./modules/private/admin/seasons/season/new').name,
    require('./modules/private/admin/week').name,
    require('./modules/private/admin/week/edit').name,

    // helper modules
    require('./common/modules/header').name,
    require('./common/modules/message').name,
    require('./common/modules/footer').name,
    require('./common/modules/confirm').name,

    require('./common/models').name,
    require('./common/api').name,
    require('./common/command').name,

    // services
    require('./common/service/application').name,
    require('./common/service/utils').name,

    //directives
    require('./common/directives/focus').name,
    require('./common/directives/formattedDate').name,
    require('./common/directives/match').name,
    require('./common/directives/rcSubmit').name,
    require('./common/directives/rcVerifySet').name,
    require('./common/directives/requiredPattern').name,
    require('./common/directives/selectOnClick').name,

    //modals

    //filters
    require('./common/filters').name

    ], App)

    .config(function($stateProvider, $locationProvider, $logProvider, $uiViewScrollProvider, $anchorScrollProvider) {
        // use the HTML5 History API
        $locationProvider.html5Mode(false);

        // disables auto-scroll
        $uiViewScrollProvider.useAnchorScroll();
        $anchorScrollProvider.disableAutoScrolling();

        // turns on/off debug console log statements
        $logProvider.debugEnabled(true);

        // defines root states
        $stateProvider
            .state('public', {
                abstract: true,
                url: '/',
                templateUrl: 'common/templates/master.tpl.html',
                resolve: {
                    seasons: function(seasonService, seasonModel) {
                        if (!seasonModel.loaded) {
                            return seasonService.getSeasons();
                        }
                    }
                }
            })
            .state('private', {
                abstract: true,
                url: '/',
                templateUrl: 'common/templates/master.tpl.html',
                resolve: {
                    user: function(userService, userModel) {
                        if (userModel.user.loaded) {
                            return userModel.user;
                        } else {
                            return userService.getCurrentUser();
                        }
                    },
                    seasons: function(seasonService, seasonModel) {
                        if (!seasonModel.loaded) {
                            return seasonService.getSeasons();
                        }
                    }
                }
            })
    })

    .run(function($rootScope, $urlRouter, $log, applicationService) {
        $log.debug("Application starting up...");
        applicationService.startup();
    })
;

loghApp.factory('authInterceptor', function ($q, $window, $location, $timeout, userModel, messageModel) {
    return {
        request: function (config) {
            config.headers = config.headers || {};
            if ($window.sessionStorage.token) {
                config.headers.Authorization = $window.sessionStorage.token;
            }
            return config;
        },
        responseError: function (rejection) {
          var message;
          if (rejection.status === 401) {
                var path = $location.path();
                message = rejection.data.message;
                $timeout(function () {
                  userModel.resetUser();
                    if ($location.path() == '/signin') {
                        messageModel.setMessage(message, false);
                    } else {
                        messageModel.setMessage(message, true);
                        $location.path('/signin').search({ redirect: encodeURIComponent(path) });
                    }
                }, 200);
          } else if (rejection.status === 404) {
              message = { type: 'danger', content: 'Houston, we have a problem. Page not found.' };
              $timeout(function () {
                  messageModel.setMessage(message, true);
                  $location.path('/');
              }, 200);
          } else if (rejection.status.toString().match(/^5\d{2}$/)) {
            // matches 5xx
            message = { type: 'danger', content: 'Internal Server Error' };
            $timeout(function () {
              messageModel.setMessage(message, false);
            }, 200);
          }
          return $q.reject(rejection);
        }
    };
});

loghApp.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
});










},{"app-templates":"0VoVTq","./modules/public/home":2,"./modules/public/faq":3,"./modules/public/abuse":4,"./modules/public/signin":5,"./modules/public/register":6,"./modules/public/register/terms":7,"./modules/private/user":8,"./modules/private/user/reset":9,"./modules/private/league":10,"./modules/private/league/new":11,"./modules/private/league/view":12,"./modules/private/league/edit":13,"./modules/private/league/contact":14,"./modules/private/league/message":15,"./modules/private/league/join":16,"./modules/private/league/invite":17,"./modules/private/league/invite/request":18,"./modules/private/leagues":19,"./modules/private/leagues/join":20,"./modules/private/leagues/join/public":21,"./modules/private/leagues/join/private":22,"./modules/private/leagues/manage":23,"./modules/private/leagues/my":24,"./modules/private/team":25,"./modules/private/team/view":26,"./modules/private/team/edit":27,"./modules/private/team/message":28,"./modules/private/teams":29,"./modules/private/teams/alive":30,"./modules/private/teams/dead":31,"./modules/private/play":32,"./modules/private/play/leagues":33,"./modules/private/play/teams":34,"./modules/private/pick/make":35,"./modules/private/admin":36,"./modules/private/admin/game/edit":37,"./modules/private/admin/game/new":38,"./modules/private/admin/seasons":39,"./modules/private/admin/seasons/season":40,"./modules/private/admin/seasons/season/new":41,"./modules/private/admin/week":42,"./modules/private/admin/week/edit":43,"./common/modules/header":44,"./common/modules/message":45,"./common/modules/footer":46,"./common/modules/confirm":47,"./common/models":48,"./common/api":49,"./common/command":50,"./common/service/application":51,"./common/service/utils":52,"./common/directives/focus":53,"./common/directives/formattedDate":54,"./common/directives/match":55,"./common/directives/rcSubmit":56,"./common/directives/rcVerifySet":57,"./common/directives/requiredPattern":58,"./common/directives/selectOnClick":59,"./common/filters":60}],48:[function(require,module,exports){
/**
 * Define the application models
 */
module.exports = angular.module('loghApp.models', [])
    //models
    .service('userModel', require('./UserModel'))
    .service('messageModel', require('./MessageModel'))
    .service('seasonModel', require('./SeasonModel'))
;
},{"./UserModel":61,"./MessageModel":62,"./SeasonModel":63}],49:[function(require,module,exports){
/**
 * Define the remote services
 */
module.exports = angular.module('loghApp.api', [])
      .constant('apiConfig', require('./ApiConfig'))
      .service('gameService', require('./GameService'))
      .service('leagueService', require('./LeagueService'))
      .service('pickService', require('./PickService'))
      .service('seasonService', require('./SeasonService'))
      .service('squadService', require('./SquadService'))
      .service('teamService', require('./TeamService'))
      .service('userService', require('./UserService'))
      .service('weekService', require('./WeekService'))
;

},{"./ApiConfig":64,"./GameService":65,"./LeagueService":66,"./PickService":67,"./SeasonService":68,"./SquadService":69,"./TeamService":70,"./UserService":71,"./WeekService":72}],50:[function(require,module,exports){
// session commands
require('./session/SigninCommand');
require('./session/SignoutCommand');

// user commands
require('./user/GetCurrentUserCommand');

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

    }
);


},{"./session/SigninCommand":73,"./session/SignoutCommand":74,"./user/GetCurrentUserCommand":75}],2:[function(require,module,exports){

module.exports = angular.module('loghApp.public.home', [])
    .controller('HomeController', require('./HomeController'))
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('public.home', {
                url: '',
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
                        templateUrl: 'modules/public/home/home.tpl.html',
                        controller: 'HomeController'
                    },
                    footer: {
                        templateUrl: 'common/modules/footer/footer.tpl.html',
                        controller: 'FooterController'
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    });
},{"./HomeController":76}],4:[function(require,module,exports){
module.exports = angular.module('loghApp.abuse', [])
  .controller('AbuseController', require('./AbuseController'));

},{"./AbuseController":77}],3:[function(require,module,exports){
module.exports = angular.module('loghApp.faq', [])
  .controller('FaqController', require('./FaqController'));

},{"./FaqController":78}],5:[function(require,module,exports){
module.exports = angular.module('loghApp.public.signin', [])
  .controller('SigninController', require('./SigninController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('public.signin', {
        url: 'signin',
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
            templateUrl: 'modules/public/signin/signin.tpl.html',
            controller: 'SigninController'
          },
          footer: {
            templateUrl: 'common/modules/footer/footer.tpl.html',
            controller: 'FooterController'
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });

},{"./SigninController":79}],6:[function(require,module,exports){
module.exports = angular.module('loghApp.register', [])
  .controller('RegisterController', require('./RegisterController'));

},{"./RegisterController":80}],60:[function(require,module,exports){
/**
 * Define the application filters
 */
module.exports = angular.module('loghApp.filters', [])
    //filters
    .filter('offsetFilter', require('./OffsetFilter'))
    .filter('activeTeamFilter', require('./ActiveTeamFilter'))
    .filter('aliveTeamFilter', require('./AliveTeamFilter'))
    .filter('openLeagueFilter', require('./OpenLeagueFilter'))
    .filter('managedLeagueFilter', require('./ManagedLeagueFilter'))
    .filter('timeFilter', require('./TimeFilter'))
    .filter('weekPicksFilter', require('./WeekPicksFilter'))
;

},{"./OffsetFilter":81,"./ActiveTeamFilter":82,"./AliveTeamFilter":83,"./OpenLeagueFilter":84,"./ManagedLeagueFilter":85,"./TimeFilter":86,"./WeekPicksFilter":87}],8:[function(require,module,exports){
module.exports = angular.module('loghApp.user', [])
    .controller('UserController', require('./UserController'))
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('private.user', {
                url: 'user',
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
                        templateUrl: 'modules/private/user/user.tpl.html',
                        controller: 'UserController'
                    },
                    footer: {
                        templateUrl: 'common/modules/footer/footer.tpl.html',
                        controller: 'FooterController'
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    });

},{"./UserController":88}],10:[function(require,module,exports){
module.exports = angular.module('loghApp.league', [])
    .controller('LeagueController', require('./LeagueController'))
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('private.league', {
                abstract: true,
                url: 'season/{seasonId}/league',
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
                        templateUrl: 'modules/private/league/league.tpl.html',
                        controller: 'LeagueController'
                    },
                    footer: {
                        templateUrl: 'common/modules/footer/footer.tpl.html',
                        controller: 'FooterController'
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    });

},{"./LeagueController":89}],19:[function(require,module,exports){
module.exports = angular.module('loghApp.leagues', [])
    .controller('LeaguesController', require('./LeaguesController'))
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('private.leagues', {
                abstract: true,
                url: 'season/{seasonId}/leagues',
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
                        templateUrl: 'modules/private/leagues/leagues.tpl.html',
                        controller: 'LeaguesController'
                    },
                    footer: {
                        templateUrl: 'common/modules/footer/footer.tpl.html',
                        controller: 'FooterController'
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    });


},{"./LeaguesController":90}],25:[function(require,module,exports){
module.exports = angular.module('loghApp.team', [])
    .controller('TeamController', require('./TeamController'))
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
                        templateUrl: 'common/modules/footer/footer.tpl.html',
                        controller: 'FooterController'
                    }
                }
            })
        $urlRouterProvider.otherwise('/');
    });

},{"./TeamController":91}],29:[function(require,module,exports){
module.exports = angular.module('loghApp.teams', [])
    .controller('TeamsController', require('./TeamsController'))
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
                        templateUrl: 'modules/private/teams/teams.tpl.html',
                        controller: 'TeamsController'
                    },
                    footer: {
                        templateUrl: 'common/modules/footer/footer.tpl.html',
                        controller: 'FooterController'
                    }
                }
            })
        ;
        $urlRouterProvider.otherwise('/');
    });


},{"./TeamsController":92}],32:[function(require,module,exports){
module.exports = angular.module('loghApp.play', [])
  .controller('PlayController', require('./PlayController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.play', {
        abstract: true,
        url: 'season/{seasonId}/my',
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
            templateUrl: 'modules/private/play/play.tpl.html',
            controller: 'PlayController'
          },
          footer: {
            templateUrl: 'common/modules/footer/footer.tpl.html',
            controller: 'FooterController'
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });


},{"./PlayController":93}],36:[function(require,module,exports){
module.exports = angular.module('loghApp.admin', [])
  .controller('AdminController', require('./AdminController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.admin', {
        abstract: true,
        url: 'admin/',
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
            templateUrl: 'modules/private/admin/admin.tpl.html',
            controller: 'AdminController'
          },
          footer: {
            templateUrl: 'common/modules/footer/footer.tpl.html',
            controller: 'FooterController'
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });

},{"./AdminController":94}],44:[function(require,module,exports){
module.exports = angular.module('loghApp.header', [])
    .controller('HeaderController', require('./HeaderController'))
},{"./HeaderController":95}],45:[function(require,module,exports){
module.exports = angular.module('loghApp.message', [])
    .controller('MessageController', require('./MessageController'));
},{"./MessageController":96}],46:[function(require,module,exports){
module.exports = angular.module('loghApp.footer', [])
  .controller('FooterController', require('./FooterController'))
},{"./FooterController":97}],47:[function(require,module,exports){
module.exports = angular.module('logh.confirm', [])
  .controller('ConfirmController', require('./ConfirmController'));

},{"./ConfirmController":98}],51:[function(require,module,exports){
/**
 * Define the application service
 */
module.exports = angular.module('logh.application', [])
    .service('applicationService', require('./ApplicationService'));
},{"./ApplicationService":99}],52:[function(require,module,exports){
module.exports = angular.module('logh.utils', [])
  .service('dateUtils', require('./DateUtils'));
},{"./DateUtils":100}],53:[function(require,module,exports){
//application directives
module.exports = angular.module('loghApp.directives.focus',[])
    .directive('loghFocus', require('./FocusDirective'))
;

},{"./FocusDirective":101}],54:[function(require,module,exports){
//application directives
module.exports = angular.module('logh.directives.formattedDate',[])
  .directive('formattedDate', require('./FormattedDateDirective'))
;

},{"./FormattedDateDirective":102}],55:[function(require,module,exports){
//application directives
module.exports = angular.module('loghApp.directives.match',[])
    .directive('match', require('./MatchDirective'))
;

},{"./MatchDirective":103}],56:[function(require,module,exports){
//application directives
module.exports = angular.module('logh.directives.rcSubmit',[])
  .directive('rcSubmit', require('./RCSubmitDirective'));

},{"./RCSubmitDirective":104}],57:[function(require,module,exports){
//application directives
module.exports = angular.module('logh.directives.rcVerifySet',[])
  .directive('rcVerifySet', require('./RCVerifySetDirective'));

},{"./RCVerifySetDirective":105}],58:[function(require,module,exports){
//application directives
module.exports = angular.module('loghApp.directives.requiredPattern',[])
    .directive('rpattern', require('./RequiredPatternDirective'))
;

},{"./RequiredPatternDirective":106}],59:[function(require,module,exports){
//application directives
module.exports = angular.module('loghApp.directives.selectOnClick',[])
  .directive('selectOnClick', require('./SelectOnClickDirective'))
;

},{"./SelectOnClickDirective":107}],7:[function(require,module,exports){
module.exports = angular.module('loghApp.register.terms', [])
  .controller('RegisterTermsController', require('./RegisterTermsController'));

},{"./RegisterTermsController":108}],9:[function(require,module,exports){
module.exports = angular.module('loghApp.user.reset', [])
  .controller('UserResetController', require('./UserResetController'));

},{"./UserResetController":109}],11:[function(require,module,exports){
module.exports = angular.module('loghApp.league.new', [])
  .controller('NewLeagueController', require('./NewLeagueController'));

},{"./NewLeagueController":110}],12:[function(require,module,exports){
module.exports = angular.module('loghApp.league.view', [])
  .controller('ViewLeagueController', require('./ViewLeagueController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.league.view', {
        url: '/{leagueId}?week',
        views: {
          leagueContent: {
            templateUrl: 'modules/private/league/view/league.view.tpl.html',
            controller: 'ViewLeagueController'
          }
        },
        resolve: {
          league: function(leagueService, $stateParams) {
            return leagueService.getLeague($stateParams.seasonId, $stateParams.leagueId);
          },
          leagueWeeks: function(league, weekService) {
            return weekService.getLeagueWeeks({ seasonId: league.data.season_id, leagueId: league.data.id });
          },
          leagueTeams: function(league, teamService, $stateParams) {
            return teamService.getAllLeagueTeams({ seasonId: league.data.season_id, leagueId: league.data.id, weekId: $stateParams.week });
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });

},{"./ViewLeagueController":111}],13:[function(require,module,exports){
module.exports = angular.module('loghApp.league.edit', [])
  .controller('EditLeagueController', require('./EditLeagueController'));

},{"./EditLeagueController":112}],14:[function(require,module,exports){
module.exports = angular.module('loghApp.league.contact', [])
  .controller('LeagueContactController', require('./LeagueContactController'));

},{"./LeagueContactController":113}],15:[function(require,module,exports){
module.exports = angular.module('loghApp.league.message', [])
  .controller('LeagueMessageController', require('./LeagueMessageController'));

},{"./LeagueMessageController":114}],16:[function(require,module,exports){
module.exports = angular.module('loghApp.league.join', [])
  .controller('LeagueJoinController', require('./LeagueJoinController'));

},{"./LeagueJoinController":115}],17:[function(require,module,exports){
module.exports = angular.module('loghApp.league.invite', [])
  .controller('LeagueInviteController', require('./LeagueInviteController'));

},{"./LeagueInviteController":116}],20:[function(require,module,exports){
module.exports = angular.module('loghApp.leagues.join', [])
  .controller('JoinLeaguesController', require('./JoinLeaguesController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.leagues.join', {
        url: '/',
        abstract: true,
        views: {
          leaguesContent: {
            templateUrl: 'modules/private/leagues/join/leagues.join.tpl.html',
            controller: 'JoinLeaguesController'
          }
        }
      })
    ;
    $urlRouterProvider.otherwise('/');
  });


},{"./JoinLeaguesController":117}],23:[function(require,module,exports){
module.exports = angular.module('loghApp.leagues.manage', [])
  .controller('ManageLeaguesController', require('./ManageLeaguesController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.leagues.manage', {
        url: '/managed',
        views: {
          leaguesContent: {
            templateUrl: 'modules/private/leagues/manage/leagues.manage.tpl.html',
            controller: 'ManageLeaguesController'
          }
        },
        resolve: {
          managedLeagues: function(user, leagueService, $stateParams) {
            return leagueService.getManagedLeagues($stateParams.seasonId);
          }
        }
      })
    ;
    $urlRouterProvider.otherwise('/');
  });


},{"./ManageLeaguesController":118}],24:[function(require,module,exports){
module.exports = angular.module('loghApp.leagues.my', [])
  .controller('MyLeaguesController', require('./MyLeaguesController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.leagues.my', {
        url: '',
        views: {
          leaguesContent: {
            templateUrl: 'modules/private/leagues/my/leagues.my.tpl.html',
            controller: 'MyLeaguesController'
          }
        },
        resolve: {
          leagues: function(user, leagueService, $stateParams) {
            return leagueService.getLeagues($stateParams.seasonId);
          }
        }
      })
    ;
    $urlRouterProvider.otherwise('/');
  });


},{"./MyLeaguesController":119}],26:[function(require,module,exports){
module.exports = angular.module('loghApp.team.view', [])
  .controller('ViewTeamController', require('./ViewTeamController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.team.view', {
        url: '/{teamId}?week',
        views: {
          teamContent: {
            templateUrl: 'modules/private/team/view/team.view.tpl.html',
            controller: 'ViewTeamController'
          }
        },
        resolve: {
          team: function(user, teamService, $stateParams) {
            return teamService.getTeam($stateParams.leagueId, $stateParams.teamId);
          },
          leagueTeams: function(team, teamService, $stateParams, userModel) {
            if (team.data.coach_ids.indexOf(userModel.user.id) > -1) {
              return teamService.getLeagueTeams($stateParams.leagueId);
            } else {
              return { data: [] };
            }
          },
          leagueWeeks: function(team, weekService, $stateParams) {
            return weekService.getLeagueWeeks({ seasonId: $stateParams.seasonId, leagueId: $stateParams.leagueId });
          },
          picks: function(team, pickService) {
            return pickService.getPicks({ teamId: team.data.id });
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });

},{"./ViewTeamController":120}],27:[function(require,module,exports){
module.exports = angular.module('loghApp.team.edit', [])
  .controller('EditTeamController', require('./EditTeamController'));

},{"./EditTeamController":121}],28:[function(require,module,exports){
module.exports = angular.module('loghApp.team.message', [])
  .controller('TeamMessageController', require('./TeamMessageController'));

},{"./TeamMessageController":122}],30:[function(require,module,exports){
module.exports = angular.module('loghApp.teams.alive', [])
  .controller('AliveTeamsController', require('./AliveTeamsController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.teams.alive', {
        url: '/alive',
        views: {
          teamsContent: {
            templateUrl: 'modules/private/teams/alive/teams.alive.tpl.html',
            controller: 'AliveTeamsController'
          }
        },
        resolve: {
          aliveTeams: function(user, teamService, $stateParams) {
            return teamService.getAliveTeams({ seasonId: $stateParams.seasonId });
          }
        }
      })
    ;
    $urlRouterProvider.otherwise('/');
  });


},{"./AliveTeamsController":123}],31:[function(require,module,exports){
module.exports = angular.module('loghApp.teams.dead', [])
  .controller('DeadTeamsController', require('./DeadTeamsController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.teams.dead', {
        url: '/dead',
        views: {
          teamsContent: {
            templateUrl: 'modules/private/teams/dead/teams.dead.tpl.html',
            controller: 'DeadTeamsController'
          }
        },
        resolve: {
          deadTeams: function(user, teamService, $stateParams) {
            return teamService.getDeadTeams({ seasonId: $stateParams.seasonId });
          }
        }
      })
    ;
    $urlRouterProvider.otherwise('/');
  });


},{"./DeadTeamsController":124}],33:[function(require,module,exports){
module.exports = angular.module('loghApp.play.leagues', [])
  .controller('PlayLeaguesController', require('./PlayLeaguesController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.play.leagues', {
        url: '/leagues',
        views: {
          playContent: {
            templateUrl: 'modules/private/play/leagues/play.leagues.tpl.html',
            controller: 'PlayLeaguesController'
          }
        },
        resolve: {
          leagues: function(user, $stateParams, leagueService) {
            return leagueService.getLeagues($stateParams.seasonId);
          }
        }
      })
    ;
    $urlRouterProvider.otherwise('/');
  });


},{"./PlayLeaguesController":125}],34:[function(require,module,exports){
module.exports = angular.module('loghApp.play.teams', [])
  .controller('PlayTeamsController', require('./PlayTeamsController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.play.teams', {
        url: '/teams',
        views: {
          playContent: {
            templateUrl: 'modules/private/play/teams/play.teams.tpl.html',
            controller: 'PlayTeamsController'
          }
        },
        resolve: {
          teams: function(user, $stateParams, teamService) {
            return teamService.getAllTeams({ seasonId: $stateParams.seasonId });
          }
        }

      })
    ;
    $urlRouterProvider.otherwise('/');
  });


},{"./PlayTeamsController":126}],35:[function(require,module,exports){
module.exports = angular.module('loghApp.pick.make', [])
  .controller('PickMakeController', require('./PickMakeController'));

},{"./PickMakeController":127}],39:[function(require,module,exports){
module.exports = angular.module('loghApp.admin.seasons', [])
  .controller('AdminSeasonsController', require('./AdminSeasonsController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.admin.seasons', {
        url: 'seasons',
        views: {
          adminContent: {
            templateUrl: 'modules/private/admin/seasons/admin.seasons.tpl.html',
            controller: 'AdminSeasonsController'
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });

},{"./AdminSeasonsController":128}],42:[function(require,module,exports){
module.exports = angular.module('loghApp.admin.week', [])
  .controller('AdminWeekController', require('./AdminWeekController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.admin.week', {
        url: 'seasons/{seasonId}/weeks/{weekId}',
        views: {
          adminContent: {
            templateUrl: 'modules/private/admin/week/admin.week.tpl.html',
            controller: 'AdminWeekController',
            resolve: {
              week: function($stateParams, weekService) {
                return weekService.getWeek($stateParams.seasonId, $stateParams.weekId);
              },
              games: function(week, gameService) {
                return gameService.getWeekGames(week.data.id);
              }
            }
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });

},{"./AdminWeekController":129}],18:[function(require,module,exports){
module.exports = angular.module('loghApp.league.invite.request', [])
  .controller('LeagueInviteRequestController', require('./LeagueInviteRequestController'));

},{"./LeagueInviteRequestController":130}],21:[function(require,module,exports){
module.exports = angular.module('loghApp.leagues.join.public', [])
  .controller('PublicLeaguesController', require('./PublicLeaguesController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.leagues.join.public', {
        url: 'public',
        views: {
          joinLeaguesContent: {
            templateUrl: 'modules/private/leagues/join/public/leagues.join.public.tpl.html',
            controller: 'PublicLeaguesController'
          }
        },
        resolve: {
          publicLeagues: function(user, leagueService, $stateParams) {
            return leagueService.getPublicLeagues($stateParams.seasonId);
          }
        }
      })
    ;
    $urlRouterProvider.otherwise('/');
  });


},{"./PublicLeaguesController":131}],22:[function(require,module,exports){
module.exports = angular.module('loghApp.leagues.join.private', [])
  .controller('PrivateLeaguesController', require('./PrivateLeaguesController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.leagues.join.private', {
        url: 'private',
        views: {
          joinLeaguesContent: {
            templateUrl: 'modules/private/leagues/join/private/leagues.join.private.tpl.html',
            controller: 'PrivateLeaguesController'
          }
        },
        resolve: {
          privateLeagues: function(user, leagueService, $stateParams) {
            return leagueService.getPrivateLeagues($stateParams.seasonId);
          }
        }
      })
    ;
    $urlRouterProvider.otherwise('/');
  });


},{"./PrivateLeaguesController":132}],37:[function(require,module,exports){
module.exports = angular.module('loghApp.admin.game.edit', [])
  .controller('AdminGameEditController', require('./AdminGameEditController'));

},{"./AdminGameEditController":133}],38:[function(require,module,exports){
module.exports = angular.module('loghApp.admin.game.new', [])
  .controller('AdminGameNewController', require('./AdminGameNewController'));

},{"./AdminGameNewController":134}],40:[function(require,module,exports){
module.exports = angular.module('loghApp.admin.season', [])
  .controller('AdminSeasonController', require('./AdminSeasonController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.admin.season', {
        url: 'seasons/{seasonId}',
        views: {
          adminContent: {
            templateUrl: 'modules/private/admin/seasons/season/admin.season.tpl.html',
            controller: 'AdminSeasonController',
            resolve: {
              season: function($stateParams, seasonService) {
                return seasonService.getSeason($stateParams.seasonId);
              },
              weeks: function($stateParams, weekService) {
                return weekService.getSeasonWeeks($stateParams.seasonId);
              },
              leagues: function($stateParams, leagueService) {
                return leagueService.getAllLeagues($stateParams.seasonId);
              }
            }
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });

},{"./AdminSeasonController":135}],43:[function(require,module,exports){
module.exports = angular.module('loghApp.admin.week.edit', [])
  .controller('AdminWeekEditController', require('./AdminWeekEditController'));

},{"./AdminWeekEditController":136}],41:[function(require,module,exports){
module.exports = angular.module('loghApp.admin.season.new', [])
  .controller('AdminSeasonNewController', require('./AdminSeasonNewController'));

},{"./AdminSeasonNewController":137}],61:[function(require,module,exports){

var UserModel = function($rootScope, $window, $log) {

    var user = {};
    user.loaded = false;
    user.id = '';
    user.email = '';
    user.first_name = '';
    user.last_name = '';
    user.admin = false;

    this.user = user;

    this.setUser = function(userData) {
        user.loaded = true;
        user = angular.extend(user, userData);
        $rootScope.$broadcast('userModel::userUpdated', user);
        $log.debug("UserModel: setUser: " + user.id);
        $log.debug("UserModel: setUser: " + user.email);
    };

    this.resetUser = function() {
        $window.sessionStorage.removeItem('token');

        user = {};
        user.loaded = false;
        user.id = '';
        user.email = '';
        user.first_name = '';
        user.last_name = '';
        user.admin = false;

        this.user = user;
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("creating user model...");
    };
    init();

};

UserModel.$inject = ['$rootScope', '$window', '$log'];
module.exports = UserModel;
},{}],62:[function(require,module,exports){

var MessageModel = function($rootScope, $log) {

    var model = this;
    var queue = [];

    var message = {};
    message.loaded = false;
    message.type = ''; // can be success, info, warning or danger
    message.content = '';

    this.message = message;

    this.setMessage = function(messageData, delay) {
        var message = {};
        message.loaded = true;
        message = angular.extend(message, messageData);
        if (delay) {
            queue[0] = message; // queue it up for after a location change
        } else {
            model.message = message; // show the message asap
            queue = []; // clear the queue as message will be showed immediately
        }
        $log.debug("MessageModel: content: " + message.content);
    };

    this.resetMessage = function() {
        message = {};
        message.loaded = false;
        message.type = '';
        message.content = '';

        this.message = message;
    };

    $rootScope.$on("$locationChangeStart", function() {
        model.resetMessage();
    });

    $rootScope.$on("$locationChangeSuccess", function() {
        model.message = queue.shift() || {};
    });

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("creating message model...");
    };
    init();

};

MessageModel.$inject = ['$rootScope', '$log'];
module.exports = MessageModel;

},{}],63:[function(require,module,exports){
var SeasonModel = function($log) {

  var model = this;

  var seasons = [];
  var currentSeasons = [];
  var startedSeasons = [];
  var selectedSeasonId;
  var loaded = false;

  this.seasons = seasons;
  this.currentSeasons = currentSeasons;
  this.startedSeasons = startedSeasons;
  this.selectedSeasonId = selectedSeasonId;
  this.loaded = loaded;

  this.setSeasons = function(seasonsArray) {
    if (!angular.isArray(seasonsArray)) return;
    model.seasons = seasonsArray;
    model.currentSeasons = _.filter(seasonsArray, function(season) {
      return season.current;
    });
    model.startedSeasons = _.filter(seasonsArray, function(season) {
      return season.started;
    });
    model.setSelectedSeasonId(model.currentSeasons[model.currentSeasons.length - 1].id);
    model.loaded = true;
  };

  this.setSelectedSeasonId = function(seasonId) {
    model.selectedSeasonId = seasonId;
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("creating season model...");
  };
  init();

};

SeasonModel.$inject = ['$log'];
module.exports = SeasonModel;
},{}],64:[function(require,module,exports){
/*
 *  Global config for remote services
 */

var ApiConfig =  {
    baseURL: '/api/'
};

module.exports = ApiConfig;

},{}],65:[function(require,module,exports){
var GameService = function($http, $log, $state, apiConfig, messageModel) {

  this.getCurrentGames = function(leagueId) {
    var apiUrl = apiConfig.baseURL + "games/current?league_id=" + leagueId;

    var promise = $http.get(apiUrl)
      .success(function(data) {
        $log.debug("GameService: getCurrentGames success");
        return data;
      })
      .error(function(data) {
        $log.debug("GameService: getCurrentGames failed");
        return data;
      });

    return promise;
  };

  this.getWeekGames = function(weekId) {
    var apiUrl = apiConfig.baseURL + "weeks/" + weekId + "/games";

    var promise = $http.get(apiUrl)
      .success(function(data) {
        $log.debug("GameService: getWeekGames success");
        return data;
      })
      .error(function(data) {
        $log.debug("GameService: getWeekGames failed");
        return data;
      });

    return promise;
  };

  this.createGame = function(gameParams) {
    var promise = $http.post(apiConfig.baseURL + "admin/weeks/" + gameParams.week_id + "/games",
      { game: gameParams })
      .success(function(data) {
        $log.debug("GameService: createGame success");
        // todo: this relies on a monkey patch at the moment - https://github.com/angular-ui/ui-router/issues/582
        // but may be resolved with future releases of angular-ui-router
        $state.reload(); // reloads all the resolves for the view league page and reinstantiates the controller
        messageModel.setMessage(data.message, false);
        return data;
      })
      .error(function(data) {
        $log.debug("GameService: createGame failed");
        messageModel.setMessage(data.message, false);
        return data;
      });

    return promise;
  };

  this.updateGame = function(gameParams) {
    var promise = $http.put(apiConfig.baseURL + "admin/weeks/" + gameParams.week_id + "/games/" + gameParams.id,
      { game: gameParams })
      .success(function(data) {
        $log.debug("GameService: updateGame success");
        // todo: this relies on a monkey patch at the moment - https://github.com/angular-ui/ui-router/issues/582
        // but may be resolved with future releases of angular-ui-router
        $state.reload(); // reloads all the resolves for the view league page and reinstantiates the controller
        messageModel.setMessage(data.message, false);
        return data;
      })
      .error(function(data) {
        $log.debug("GameService: updateGame failed");
        messageModel.setMessage(data.message, false);
        return data;
      });

    return promise;
  };

};

GameService.$inject = ['$http', '$log', '$state', 'apiConfig', 'messageModel'];
module.exports = GameService;
},{}],66:[function(require,module,exports){
var LeagueService = function($http, $log, $location, $q, $state, apiConfig, messageModel) {

    this.getLeague = function(seasonId, leagueId) {
        var promise = $http.get(apiConfig.baseURL + "seasons/" + seasonId + "/leagues/" + leagueId)
            .success(function(data) {
                $log.debug("LeagueService: getLeague success");
                return data;
            })
            .error(function(data) {
                $log.debug("LeagueService: getLeague failed");
                return data;
            });

        return promise;
    };

    this.getAllLeagues = function(seasonId) {
        var promise = $http.get(apiConfig.baseURL + "admin/seasons/" + seasonId + "/leagues")
            .success(function(data) {
                $log.debug("LeagueService: getAllLeagues success");
                return data;
            })
            .error(function(data) {
                $log.debug("LeagueService: getAllLeagues failed");
                return data;
            });

        return promise;
    };

    this.getLeagues = function(seasonId) {
        var promise = $http.get(apiConfig.baseURL + "seasons/" + seasonId + "/leagues")
            .success(function(data) {
                $log.debug("LeagueService: getLeagues success");
                return data;
            })
            .error(function(data) {
                $log.debug("LeagueService: getLeagues failed");
                return data;
            });

        return promise;
    };

    this.getManagedLeagues = function(seasonId) {
        var promise = $http.get(apiConfig.baseURL + "seasons/" + seasonId + "/leagues/managed")
            .success(function(data) {
                $log.debug("LeagueService: getManagedLeagues success");
                return data;
            })
            .error(function(data) {
                $log.debug("LeagueService: getManagedLeagues failed");
                return data;
            });

        return promise;
    };

    this.getPublicLeagues = function(seasonId) {
        var promise = $http.get(apiConfig.baseURL + "seasons/" + seasonId + "/leagues/public")
            .success(function(data) {
                $log.debug("LeagueService: getPublicLeagues success");
                return data;
            })
            .error(function(data) {
                $log.debug("LeagueService: getPublicLeagues failed");
                return data;
            });

        return promise;
    };

    this.getPrivateLeagues = function(seasonId) {
        var promise = $http.get(apiConfig.baseURL + "seasons/" + seasonId + "/leagues/private")
            .success(function(data) {
                $log.debug("LeagueService: getPrivateLeagues success");
                return data;
            })
            .error(function(data) {
                $log.debug("LeagueService: getPrivateLeagues failed");
                return data;
            });

        return promise;
    };

    this.createLeague = function(leagueParams) {
        var promise = $http.post(apiConfig.baseURL + "seasons/" + leagueParams.season_id + "/leagues",
            { league: leagueParams })
            .success(function(data) {
                $log.debug("LeagueService: createLeague success");
                messageModel.setMessage(data.message, true);
                $location.path('/season/' + leagueParams.season_id + '/league/' + data.league_id);
                return data;
            })
            .error(function(data) {
                $log.debug("LeagueService: createLeague failed");
                messageModel.setMessage(data.message, false);
                return data;
            });

        return promise;
    };

    this.updateLeague = function(leagueParams) {
        var promise = $http.put(apiConfig.baseURL + "seasons/" + leagueParams.season_id + "/leagues/" + leagueParams.id,
            { league: leagueParams })
            .success(function(data) {
                $log.debug("LeagueService: updateLeague success");
            // todo: this relies on a monkey patch at the moment - https://github.com/angular-ui/ui-router/issues/582
            // but may be resolved with future releases of angular-ui-router
            $state.reload(); // reloads all the resolves for the view league page and reinstantiates the controller
            messageModel.setMessage(data.message, false);
                return data;
            })
            .error(function(data) {
                $log.debug("LeagueService: updateLeague failed");
                messageModel.setMessage(data.message, false);
                return data;
            });

        return promise;
    };

    this.openLeague = function(leagueParams) {
      var promise = $http.get(apiConfig.baseURL + "seasons/" + leagueParams.season_id + "/leagues/" + leagueParams.id + "/open")
        .success(function(data) {
          $log.debug("LeagueService: openLeague success");
          // todo: this relies on a monkey patch at the moment - https://github.com/angular-ui/ui-router/issues/582
          // but may be resolved with future releases of angular-ui-router
          $state.reload(); // reloads all the resolves for the view league page and reinstantiates the controller
          messageModel.setMessage(data.message, false);
          return data;
        })
        .error(function(data) {
          $log.debug("LeagueService: openLeague failed");
          messageModel.setMessage(data.message, false);
          return data;
        });

      return promise;
    };

    this.closeLeague = function(leagueParams) {
      var promise = $http.get(apiConfig.baseURL + "seasons/" + leagueParams.season_id + "/leagues/" + leagueParams.id + "/close")
        .success(function(data) {
          $log.debug("LeagueService: closeLeague success");
          // todo: this relies on a monkey patch at the moment - https://github.com/angular-ui/ui-router/issues/582
          // but may be resolved with future releases of angular-ui-router
          $state.reload(); // reloads all the resolves for the view league page and reinstantiates the controller
          messageModel.setMessage(data.message, false);
          return data;
        })
        .error(function(data) {
          $log.debug("LeagueService: closeLeague failed");
          messageModel.setMessage(data.message, false);
          return data;
        });

      return promise;
    };

    this.updateLeagueMessage = function(leagueParams, emailAlive, emailAll) {
      var deferred = $q.defer();
      $http.put(apiConfig.baseURL + "seasons/" + leagueParams.season_id + "/leagues/" + leagueParams.id + "/message",
            { league: leagueParams, emailAlive: emailAlive, emailAll: emailAll })
            .success(function(data) {
                $log.debug("LeagueService: updateLeagueMessage success");
                messageModel.setMessage(data.message, false);
                deferred.resolve(leagueParams.message);
            })
            .error(function(data) {
                $log.debug("LeagueService: updateLeagueMessage failed");
                messageModel.setMessage(data.message, false);
                deferred.reject();
            });

        return deferred.promise;
    };

    this.sendCommishMessage = function(leagueParams, message) {
        var deferred = $q.defer();
        $http.put(apiConfig.baseURL + "seasons/" + leagueParams.season_id + "/leagues/" + leagueParams.id + "/contact",
            { contact: message })
              .success(function(data) {
                  $log.debug("LeagueService: sendCommishMessage success");
                  messageModel.setMessage(data.message, false);
                  deferred.resolve();
              })
              .error(function(data) {
                  $log.debug("LeagueService: sendCommishMessage failed");
                  messageModel.setMessage(data.message, false);
                  deferred.reject();
              });

        return deferred.promise;
    };

    this.getInvites = function(leagueId) {
      var promise = $http.get(apiConfig.baseURL + "leagues/" + leagueId + "/invitations")
        .success(function(data) {
          $log.debug("LeagueService: getInvites success");
          return data;
        })
        .error(function(data) {
          $log.debug("LeagueService: getInvites failed");
          messageModel.setMessage(data.message, false);
          return data;
        });

      return promise;
    };

    this.createInvite = function(inviteParams) {
        var promise = $http.post(apiConfig.baseURL + "leagues/" + inviteParams.league_id + "/invitations",
            { invitation: inviteParams })
            .success(function(data) {
                $log.debug("LeagueService: createInvite success");
                messageModel.setMessage(data.message, false);
                return data;
            })
            .error(function(data) {
                $log.debug("LeagueService: createInvite failed");
                messageModel.setMessage(data.message, false);
                return data;
            });

        return promise;
    };

    this.requestInvite = function(inviteParams) {
      var promise = $http.post(apiConfig.baseURL + "leagues/" + inviteParams.league_id + "/invitations/new",
            { invitation: inviteParams })
            .success(function(data) {
                $log.debug("LeagueService: requestInvite success");
                messageModel.setMessage(data.message, false);
                return data;
            })
            .error(function(data) {
                $log.debug("LeagueService: requestInvite failed");
                messageModel.setMessage(data.message, false);
                return data;
            });

        return promise;
    };

};

LeagueService.$inject = ['$http', '$log', '$location', '$q', '$state', 'apiConfig', 'messageModel'];
module.exports = LeagueService;
},{}],67:[function(require,module,exports){
var PickService = function($http, $log, $state, apiConfig, messageModel) {

  this.getPicks = function(params) {
    var apiUrl = apiConfig.baseURL + "teams/" + params.teamId + "/picks";

    var promise = $http.get(apiUrl)
      .success(function(data) {
        $log.debug("PickService: getPicks success");
        return data;
      })
      .error(function(data) {
        $log.debug("PickService: getPicks failed");
        return data;
      });

    return promise;
  };

  this.createPick = function(pickParams) {
    var apiUrl = apiConfig.baseURL + "teams/" + pickParams.team_id + "/picks";

    var promise = $http.post(apiUrl, { pick: pickParams })
      .success(function(data) {
        $log.debug("PickService: createPick success");
        // todo: this relies on a monkey patch at the moment - https://github.com/angular-ui/ui-router/issues/582
        // but may be resolved with future releases of angular-ui-router
        $state.reload(); // reloads all the resolves for the view league page and reinstantiates the controller
        messageModel.setMessage(data.message, false);
        return data;
      })
      .error(function(data) {
        $log.debug("PickService: createPick failed");
        messageModel.setMessage(data.message, false);
        return data;
      });

    return promise;
  };

};

PickService.$inject = ['$http', '$log', '$state', 'apiConfig', 'messageModel'];
module.exports = PickService;
},{}],68:[function(require,module,exports){
var SeasonService = function($http, $log, $state, $q, apiConfig, messageModel, seasonModel) {

  var service = this;

  this.getSeasons = function() {
        var deferred = $q.defer();
        $http.get(apiConfig.baseURL + "seasons")
            .success(function(data) {
                $log.debug("SeasonService: getSeasons success");
                seasonModel.setSeasons(data);
                deferred.resolve(data);
            })
            .error(function(data) {
                $log.debug("SeasonService: getSeasons failed");
                deferred.reject();
            });
        return deferred.promise;
    };

    this.getSeason = function(seasonId) {
        var promise = $http.get(apiConfig.baseURL + "admin/seasons/" + seasonId)
            .success(function(data) {
                $log.debug("SeasonService: getSeason success");
                return data;
            })
            .error(function(data) {
                $log.debug("SeasonService: getSeason failed");
                messageModel.setMessage(data.message, true);
                return data;
            });
        return promise;
    };

    this.createSeason = function(seasonParams) {
      var promise = $http.post(apiConfig.baseURL + "admin/seasons/",
        { season: seasonParams })
        .success(function(data) {
          $log.debug("SeasonService: createSeason success");
          messageModel.setMessage(data.message, false);
          // need to call getSeasons() again to reset the seasonmodel
          service.getSeasons()
            .then(
              function(response) {
                // todo: this relies on a monkey patch at the moment - https://github.com/angular-ui/ui-router/issues/582
                // but may be resolved with future releases of angular-ui-router
                $state.reload(); // reloads all the resolves for the view league page and reinstantiates the controller
              }
            );
          return data;
        })
        .error(function(data) {
          $log.debug("SeasonService: createSeason failed");
          messageModel.setMessage(data.message, false);
          return data;
        });

      return promise;
    };

};

SeasonService.$inject = ['$http', '$log', '$state', '$q', 'apiConfig', 'messageModel', 'seasonModel'];
module.exports = SeasonService;
},{}],69:[function(require,module,exports){
var SquadService = function($http, $log, apiConfig) {

  this.getSquads = function() {
    var apiUrl = apiConfig.baseURL + "admin/squads/all";

    var promise = $http.get(apiUrl)
      .success(function(data) {
        $log.debug("SquadService: getSquads success");
        return data;
      })
      .error(function(data) {
        $log.debug("SquadService: getSquads failed");
        return data;
      });

    return promise;
  };

  this.getWeekSquads = function(week) {
    var apiUrl = apiConfig.baseURL + "admin/weeks/" + week.id + "/squads";

    var promise = $http.get(apiUrl)
      .success(function(data) {
        $log.debug("SquadService: getWeekSquads success");
        return data;
      })
      .error(function(data) {
        $log.debug("SquadService: getWeekSquads failed");
        return data;
      });

    return promise;
  };

};

SquadService.$inject = ['$http', '$log', 'apiConfig'];
module.exports = SquadService;
},{}],70:[function(require,module,exports){
var TeamService = function($http, $log, $location, $q, apiConfig, messageModel) {

    this.getTeam = function(leagueId, teamId) {
        var promise = $http.get(apiConfig.baseURL + "leagues/" + leagueId + "/teams/" + teamId)
            .success(function(data) {
                $log.debug("TeamService: getTeam success");
                return data;
            })
            .error(function(data) {
                $log.debug("TeamService: getTeam failed");
                return data;
            });

        return promise;
    };

    this.getAllTeams = function(params) {
        var apiUrl = apiConfig.baseURL + "seasons/" + params.seasonId + "/teams/all";
        var promise = $http.get(apiUrl)
            .success(function(data) {
                $log.debug("TeamService: getAllTeams success");
                return data;
            })
            .error(function(data) {
                $log.debug("TeamService: getAllTeams failed");
                return data;
            });

        return promise;
    };

    this.getAliveTeams = function(params) {
        var apiUrl = apiConfig.baseURL + "seasons/" + params.seasonId + "/teams/alive";
        if (params.leagueId) {
            apiUrl += "?league_id=" + params.leagueId;
        }

        var promise = $http.get(apiUrl)
            .success(function(data) {
                $log.debug("TeamService: getAliveTeams success");
                return data;
            })
            .error(function(data) {
                $log.debug("TeamService: getAliveTeams failed");
                return data;
            });

        return promise;
    };

    this.getDeadTeams = function(params) {
        var apiUrl = apiConfig.baseURL + "seasons/" + params.seasonId + "/teams/dead";
        if (params.leagueId) {
            apiUrl += "?league_id=" + params.leagueId;
        }

        var promise = $http.get(apiUrl)
            .success(function(data) {
                $log.debug("TeamService: getDeadTeams success");
                return data;
            })
            .error(function(data) {
                $log.debug("TeamService: getDeadTeams failed");
                return data;
            });

        return promise;
    };

    this.getAllLeagueTeams = function(params) {
        var apiUrl = apiConfig.baseURL + "seasons/" + params.seasonId + "/teams/all?league_id=" + params.leagueId;
        if (params.weekId) {
            apiUrl += "&week_id=" + params.weekId;
        }

        var promise = $http.get(apiUrl)
            .success(function(data) {
                $log.debug("TeamService: getAllLeagueTeams success");
                return data;
            })
            .error(function(data) {
                $log.debug("TeamService: getAllLeagueTeams failed");
                return data;
            });

        return promise;
    };

    this.getLeagueTeams = function(leagueId) {
        var apiUrl = apiConfig.baseURL + "leagues/" + leagueId + "/teams";
        var promise = $http.get(apiUrl)
            .success(function(data) {
                $log.debug("TeamService: getLeagueTeams success");
                return data;
            })
            .error(function(data) {
                $log.debug("TeamService: getLeagueTeams failed");
                return data;
            });

        return promise;
    };


    this.createTeam = function(teamParams) {
        var promise = $http.post(apiConfig.baseURL + "leagues/" + teamParams.league_id + "/teams",
            { team: teamParams })
            .success(function(data) {
                $log.debug("TeamService: createTeam success");
                var newTeamPath = $location.path() + '/team/' + data.team_id;
                $location.path(newTeamPath); // navigate to the new team page
                return data;
            })
            .error(function(data) {
                $log.debug("TeamService: createTeam failed");
                messageModel.setMessage(data.message, false);
                return data;
            });

        return promise;
    };

    this.updateTeam = function(team) {
        var promise = $http.put(apiConfig.baseURL + "leagues/" + team.league.id + "/teams/" + team.id,
            { team: team })
            .success(function(data) {
                $log.debug("TeamService: updateTeam success");
                messageModel.setMessage(data.message, false);
                return data;
            })
            .error(function(data) {
                $log.debug("TeamService: updateTeam failed");
                messageModel.setMessage(data.message, false);
                return data;
            });

        return promise;
    };

    this.updateTeamMessage = function(teamParams, emailMessage) {
      var deferred = $q.defer();
      $http.put(apiConfig.baseURL + "leagues/" + teamParams.league.id + "/teams/" + teamParams.id + "/message",
        { team: teamParams, emailMessage: emailMessage })
        .success(function(data) {
          $log.debug("TeamService: updateTeamMessage success");
          messageModel.setMessage(data.message, false);
          deferred.resolve(teamParams.message);
        })
        .error(function(data) {
          $log.debug("TeamService: updateTeamMessage failed");
          messageModel.setMessage(data.message, false);
          deferred.reject();
        });

      return deferred.promise;
    };

    this.sendCommishMessage = function(teamParams, message) {
      var deferred = $q.defer();
      $http.put(apiConfig.baseURL + "leagues/" + teamParams.league.id + "/teams/" + teamParams.id + "/contact",
        { contact: message })
        .success(function(data) {
          $log.debug("TeamService: sendCommishMessage success");
          messageModel.setMessage(data.message, false);
          deferred.resolve();
        })
        .error(function(data) {
          $log.debug("TeamService: sendCommishMessage failed");
          messageModel.setMessage(data.message, false);
          deferred.reject();
        });

      return deferred.promise;
    };

    this.activateTeam = function(team) {
        var deferred = $q.defer();
        $http.put(apiConfig.baseURL + "leagues/" + team.league.id + "/teams/" + team.id + "/activate")
            .success(function(data) {
                $log.debug("TeamService: activateTeam success");
                messageModel.setMessage(data.message, false);
                deferred.resolve(true);
            })
            .error(function(data) {
                $log.debug("TeamService: activateTeam failed");
                messageModel.setMessage(data.message, false);
                deferred.reject();
            });

        return deferred.promise;
    };

    this.deactivateTeam = function(team) {
        var deferred = $q.defer();
        $http.put(apiConfig.baseURL + "leagues/" + team.league.id + "/teams/" + team.id + "/deactivate")
            .success(function(data) {
                $log.debug("TeamService: deactivateTeam success");
                messageModel.setMessage(data.message, false);
                deferred.resolve(false);
            })
            .error(function(data) {
                $log.debug("TeamService: deactivateTeam failed");
                messageModel.setMessage(data.message, false);
                deferred.reject();
            });

      return deferred.promise;
    };

    this.paidTeam = function(team) {
        var deferred = $q.defer();
        $http.put(apiConfig.baseURL + "leagues/" + team.league.id + "/teams/" + team.id + "/paid")
            .success(function(data) {
                $log.debug("TeamService: paidTeam success");
                messageModel.setMessage(data.message, false);
                deferred.resolve(true);
            })
            .error(function(data) {
                $log.debug("TeamService: paidTeam failed");
                messageModel.setMessage(data.message, false);
                deferred.reject();
            });

        return deferred.promise;
    };

    this.unpaidTeam = function(team) {
        var deferred = $q.defer();
        $http.put(apiConfig.baseURL + "leagues/" + team.league.id + "/teams/" + team.id + "/unpaid")
            .success(function(data) {
                $log.debug("TeamService: unpaidTeam success");
                messageModel.setMessage(data.message, false);
                deferred.resolve(false);
            })
            .error(function(data) {
                $log.debug("TeamService: unpaidTeam failed");
                messageModel.setMessage(data.message, false);
                deferred.reject();
            });

      return deferred.promise;
    };

};

TeamService.$inject = ['$http', '$log', '$location', '$q', 'apiConfig', 'messageModel'];
module.exports = TeamService;
},{}],71:[function(require,module,exports){
var UserService = function($http, $log, $state, $location, $window, $timeout, apiConfig, messageModel, userModel, seasonModel) {

    var userService = this;

    this.signin = function(email, password) {
      userModel.resetUser();
      var promise = $http.post(
            apiConfig.baseURL + "sessions",
            { email: email, password: password })
            .success(function(data) {
                $log.debug("UserService: signin success");
                $window.sessionStorage.token = data.token;
                var redirect = decodeURIComponent($location.search().redirect);
                if (redirect !== 'undefined') {
                    $location.search('redirect', null); // remove the redirect query param
                    $location.path(redirect);
                    if (['/', '/signin', '/register'].indexOf(redirect) !== -1) {
                      userService.getCurrentUser();
                    }
                } else  {
                  $location.path('/season/' + seasonModel.selectedSeasonId + '/my/teams');
                }
                return data;
            })
            .error(function(data) {
                $log.debug("UserService: signin failure");
                return data;
            });

        return promise;
    };

    this.signout = function() {
      userModel.resetUser();
      var promise = $http.delete(apiConfig.baseURL + 'sessions/destroy')
            .success(function(data) {
                $log.debug("UserService: signout success");
                if ($state.current.name == 'public.home') {
                    messageModel.setMessage(data.message, false);
                } else {
                    messageModel.setMessage(data.message, true);
                    $location.path('/');
                }
                return data;
            })
            .error(function(data) {
                $log.debug("UserService: signout failure");
                messageModel.setMessage(data.message, false);
                return data;
            });

        return promise;
    };

    this.resetUser = function(email) {
      var promise = $http.post(apiConfig.baseURL + "sessions/reset", { email: email })
          .success(function(data) {
            $log.debug("UserService: reset success");
            messageModel.setMessage(data.message, false);
            return data;
          })
          .error(function(data) {
            $log.debug("UserService: reset failure");
            messageModel.setMessage(data.message, false);
            return data;
          });

      return promise;
    };

    this.getCurrentUser = function() {
        var token = $location.search().token;
        if (!_.isUndefined(token)) {
          $window.sessionStorage.token = token;
          $location.search('token', null); // remove the token query param
        }
        var promise = $http.get(apiConfig.baseURL + "users/current")
            .success(function(data) {
                $log.debug("UserService: getCurrentUser success");
                userModel.setUser(data);
                return data;
            })
            .error(function(data) {
                $log.debug("UserService: getCurrentUser failed");
          });

        return promise;
    };

    this.createUser = function(userParams) {
      userModel.resetUser();
      var promise = $http.post(apiConfig.baseURL + "users",
            { user: userParams })
            .success(function(data) {
                $log.debug("UserService: createUser success");
                $window.sessionStorage.token = data.token;
                messageModel.setMessage(data.message, true);
                var redirect = decodeURIComponent($location.search().redirect);
                if (redirect !== 'undefined') {
                    $location.search('redirect', null); // remove the redirect query param
                    $location.path(redirect);
                    if (['/', '/signin', '/register'].indexOf(redirect) !== -1) {
                      userService.getCurrentUser();
                    }
                } else  {
                  $location.path('/season/' + seasonModel.selectedSeasonId + '/my/teams');
                }
                return data;
            })
            .error(function(data) {
                $log.debug("UserService: createUser failed");
                messageModel.setMessage(data.message, false);
                return data;
            });

        return promise;
    };

    this.updateUser = function(userParams) {
        var promise = $http.put(apiConfig.baseURL + "users/current",
            { user: userParams })
            .success(function(data) {
                $log.debug("UserService: updateUser success");
                userModel.setUser(userParams);
                messageModel.setMessage(data.message, false);
                return data;
            })
            .error(function(data) {
                $log.debug("UserService: updateUser failed");
                messageModel.setMessage(data.message, false);
                return data;
            });

        return promise;
    };

    this.contactUs = function(message) {
        var promise = $http.put(apiConfig.baseURL + "users/contact",
            { message: message })
            .success(function(data) {
                $log.debug("UserService: contactUs success");
                messageModel.setMessage(data.message, false);
                return data;
            })
            .error(function(data) {
                $log.debug("UserService: contactUs failed");
                messageModel.setMessage(data.message, false);
                return data;
            });

        return promise;
    };

};

UserService.$inject = ['$http', '$log', '$state', '$location', '$window', '$timeout', 'apiConfig', 'messageModel', 'userModel', 'seasonModel'];
module.exports = UserService;
},{}],72:[function(require,module,exports){
var WeekService = function($http, $log, $q, $state, apiConfig, messageModel) {

    this.getAvailableWeeks = function(seasonId) {
        var promise = $http.get(apiConfig.baseURL + "seasons/" + seasonId + "/weeks/available")
            .success(function(data) {
                $log.debug("WeekService: getAvailableWeeks success");
                return data;
            })
            .error(function(data) {
                $log.debug("WeekService: getAvailableWeeks failed");
                return data;
            });

        return promise;
    };

    this.getSeasonWeeks = function(seasonId) {
        var promise = $http.get(apiConfig.baseURL + "seasons/" + seasonId + "/weeks")
            .success(function(data) {
                $log.debug("WeekService: getSeasonWeeks success");
                return data;
            })
            .error(function(data) {
                $log.debug("WeekService: getSeasonWeeks failed");
                return data;
            });

        return promise;
    };

    this.getLeagueWeeks = function(options) {
        var promise = $http.get(apiConfig.baseURL + "seasons/" + options.seasonId + "/weeks?league_id=" + options.leagueId)
            .success(function(data) {
                $log.debug("WeekService: getLeagueWeeks success");
                return data;
            })
            .error(function(data) {
                $log.debug("WeekService: getLeagueWeeks failed");
                return data;
            });

        return promise;
    };

    this.getWeek = function(seasonId, weekId) {
        var promise = $http.get(apiConfig.baseURL + "seasons/" + seasonId + "/weeks/" + weekId)
            .success(function(data) {
                $log.debug("WeekService: getWeek success");
                return data;
            })
            .error(function(data) {
                $log.debug("WeekService: getWeek failed");
                return data;
            });

        return promise;
    };

    this.getWeekTypes = function() {
        var apiUrl = apiConfig.baseURL + "admin/week_types";

        var promise = $http.get(apiUrl)
          .success(function(data) {
            $log.debug("WeekService: getWeekTypes success");
            return data;
          })
          .error(function(data) {
            $log.debug("WeekService: getWeekTypes failed");
            return data;
        });

      return promise;
    };

    this.updateWeek = function(weekParams) {
      var promise = $http.put(apiConfig.baseURL + "admin/seasons/" + weekParams.season_id + "/weeks/" + weekParams.id,
        { week: weekParams })
        .success(function(data) {
          $log.debug("WeekService: updateWeek success");
          // todo: this relies on a monkey patch at the moment - https://github.com/angular-ui/ui-router/issues/582
          // but may be resolved with future releases of angular-ui-router
          $state.reload(); // reloads all the resolves for the view league page and reinstantiates the controller
          messageModel.setMessage(data.message, false);
          return data;
        })
        .error(function(data) {
          $log.debug("WeekService: updateWeek failed");
          messageModel.setMessage(data.message, false);
          return data;
        });

      return promise;
    };

    this.sendReminder = function(week) {
        var promise = $http.put(apiConfig.baseURL + "admin/seasons/" + week.season_id + "/weeks/" + week.id + "/remind")
            .success(function(data) {
                $log.debug("WeekService: sendReminder success");
                messageModel.setMessage(data.message, false);
                return data;
            })
            .error(function(data) {
                $log.debug("WeekService: sendReminder failed");
                messageModel.setMessage(data.message, false);
                return data;
            });

        return promise;
    };

    this.completeWeek = function(week) {
      var deferred = $q.defer();
      $http.put(apiConfig.baseURL + "admin/seasons/" + week.season_id + "/weeks/" + week.id + "/complete")
            .success(function(data) {
                $log.debug("WeekService: completeWeek success");
                messageModel.setMessage(data.message, false);
                deferred.resolve();
            })
            .error(function(data) {
                $log.debug("WeekService: completeWeek failed");
                messageModel.setMessage(data.message, false);
                deferred.reject();
            });

        return deferred.promise;
    };

};

WeekService.$inject = ['$http', '$log', '$q', '$state', 'apiConfig', 'messageModel'];
module.exports = WeekService;

},{}],73:[function(require,module,exports){
commangular.create('SigninCommand',
    function($log, userService) {

    return {

        execute: function(email, password) {
            $log.debug('SigninCommand: authenticating user...');
            return userService.signin(email, password);
        },
        onError: function(error) {
            $log.debug("SigninCommand: failure: " + error.data);
        },
        onResult: function(result) {
            $log.debug("SigninCommand: success ");
        }

    }
});

},{}],74:[function(require,module,exports){
commangular.create('SignoutCommand',
    function($log, userService) {

        return {

            execute: function() {
                $log.debug('SignoutCommand: signing out user...');
                return userService.signout();
            },
            onError: function(error) {
                $log.debug("SignoutCommand: failure: " + error.data);
            },
            onResult: function(result) {
                $log.debug("SignoutCommand: success");
            }

        }
    });

},{}],75:[function(require,module,exports){

commangular.create('GetCurrentUserCommand',
   function($log, userService, userModel) {

    return {

        execute: function() {
            $log.debug('GetCurrentUserCommand: getting current user details...');
            var userPromise = userService.getCurrentUser();
            return userPromise;
        },
        onError: function(error) {
            $log.debug("GetCurrentUserCommand: failure: " + error.data);
        },
        onResult: function(result) {
            $log.debug("GetCurrentUserCommand: success");
        }

    }
});
},{}],76:[function(require,module,exports){
var HomeController = function($scope, $log, $location, $modal, weekService, leagueService, messageModel, seasonModel) {

  $scope.selectedSeasonId = seasonModel.selectedSeasonId;

  $scope.createLeague = function(seasonId) {
        var modalInstance = $modal.open({
            templateUrl: 'modules/private/league/new/league.new.tpl.html',
            controller: 'NewLeagueController',
            resolve: {
              seasonId: function() {
                return seasonId;
              },
              weeks: function() {
                return weekService.getAvailableWeeks(seasonId);
              }
            }
          });

      modalInstance.result.then(function(league) {
        leagueService.createLeague(league);
      }, function () {
        $log.debug('Create league modal dismissed...');
        messageModel.setMessage({ type: 'warning', content: 'Create league cancelled' }, false);
      });
    };

    $scope.joinLeague = function(seasonId) {
      $location.path('/season/' + seasonId + '/leagues/public');
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
      $log.debug("home controller");
    };
    init();
};

HomeController.$inject = ['$scope', '$log', '$location', '$modal', 'weekService', 'leagueService', 'messageModel', 'seasonModel'];
module.exports = HomeController;

},{}],77:[function(require,module,exports){
var AbuseController = function($modalInstance, $scope, $log) {

  $scope.abuseMessage = '';

  $scope.contactUs = function(message) {
    $modalInstance.close(message);
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };

  $scope.hasError = function(input) {
    return !input.$focused && input.$dirty && input.$invalid;
  };

  $scope.hasPropertyError = function(input, property) {
    return !input.$focused && input.$dirty && input.$error[property];
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("report abuse controller");
  };
  init();
};

AbuseController.$inject = ['$modalInstance', '$scope', '$log'];
module.exports = AbuseController;

},{}],78:[function(require,module,exports){
var FaqController = function($modalInstance, $scope, $log) {

  $scope.close = function () {
    $modalInstance.dismiss('close');
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("faq controller");
  };
  init();
};

FaqController.$inject = ['$modalInstance', '$scope', '$log'];
module.exports = FaqController;

},{}],79:[function(require,module,exports){
var SigninController = function($scope, $log, $location, $modal, messageModel, userService) {

    $scope.credentials = {
        email: '',
        password: ''
    };

    $scope.signin = function(credentials) {
        $log.debug("signin credentials: " + credentials);
        $scope.dispatch("SigninEvent", credentials);
    };

    $scope.forgotPassword = function() {
        // todo: implement this
        alert('tough shit');
    };

    $scope.resetPassword = function() {

      var modalInstance = $modal.open({
        templateUrl: 'modules/private/user/reset/user.reset.tpl.html',
        controller: 'UserResetController'
      });

      modalInstance.result.then(function (email) {
        userService.resetUser(email);
      }, function () {
        $log.debug('Reset password modal dismissed...');
        messageModel.setMessage({ type: 'warning', content: 'Reset password cancelled' }, false);
      });
    };

    $scope.register = function() {

      var modalInstance = $modal.open({
        templateUrl: 'modules/public/register/register.tpl.html',
        controller: 'RegisterController'
      });

      modalInstance.result.then(function(newUser) {
        userService.createUser(newUser);
      }, function () {
        $log.debug('Register modal dismissed...');
        messageModel.setMessage({ type: 'warning', content: 'Register cancelled' }, false);
      });

    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("signin controller");
    };
    init();

};

SigninController.$inject = ['$scope', '$log', '$location', '$modal', 'messageModel', 'userService'];
module.exports = SigninController;

},{}],80:[function(require,module,exports){
var RegisterController = function($scope, $log, $modal, $modalInstance) {

    $scope.newUserData = {
        first_name: '',
        last_name: '',
        nickname: '',
        email: '',
        email_confirmation: '',
        password: '',
        password_confirmation: ''
    };

    $scope.register = function (newUser) {
      $modalInstance.close(newUser);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

    $scope.hasError = function(input) {
        return !input.$focused && input.$dirty && input.$invalid;
    };

    $scope.hasPropertyError = function(input, property) {
        return !input.$focused && input.$dirty && input.$error[property];
    };

    $scope.showTerms = function() {

      var modalInstance = $modal.open({
        templateUrl: 'modules/public/register/terms/register.terms.tpl.html',
        controller: 'RegisterTermsController'
      });

      modalInstance.result.then(function () {
        // do nada
      }, function () {
        $log.debug('Terms and conditions modal closed...');
      });

    };

  /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("register controller");
    };
    init();

};

RegisterController.$inject = ['$scope', '$log', '$modal', '$modalInstance'];
module.exports = RegisterController;

},{}],81:[function(require,module,exports){

var OffsetFilter = function($log) {
    return function(input, start) {
        start = parseInt(start, 10);
        return input.slice(start);
    };
};

OffsetFilter.$inject = ['$log'];
module.exports = OffsetFilter;

},{}],82:[function(require,module,exports){
var ActiveTeamFilter = function() {
  return function(teams, options) {
    if (options.inactive == true) {
      return teams;
    }
    var activeTeams = _.filter(teams, function(team) {
      return team.active;
    });
    return activeTeams;
  };
};

ActiveTeamFilter.$inject = [];
module.exports = ActiveTeamFilter;

},{}],83:[function(require,module,exports){
var AliveTeamFilter = function() {
  return function(teams, options) {
    if (options.dead == true) {
      return teams;
    }
    var aliveTeams = _.filter(teams, function(team) {
      return team.alive;
    });
    return aliveTeams;
  };
};

AliveTeamFilter.$inject = [];
module.exports = AliveTeamFilter;

},{}],84:[function(require,module,exports){
var OpenLeagueFilter = function() {
  return function(leagues, options) {
    if (options.closed == true) {
      return leagues;
    }
    var openLeagues = _.filter(leagues, function(league) {
      return league.open;
    });
    return openLeagues;
  };
};

OpenLeagueFilter.$inject = [];
module.exports = OpenLeagueFilter;

},{}],85:[function(require,module,exports){
var ManagedLeagueFilter = function(userModel) {
  return function(leagues, options) {
    if (options.managed == true) {
      return leagues;
    }
    var inLeagues = _.filter(leagues, function(league) {
      return league.commish_ids.indexOf(userModel.user.id) == -1;
    });
    return inLeagues;
  };
};

ManagedLeagueFilter.$inject = ['userModel'];
module.exports = ManagedLeagueFilter;

},{}],86:[function(require,module,exports){

var TimeFilter = function($log) {
   return function(input) {

       if (input < 1) {
           return "00:00:00";
       }

       function format(val) {
           return (val<10 ? '0' : '') + val;
       }

       var h = Math.floor((input / 1000) / 3600);
       var m = Math.floor(((input / 1000) % 3600) / 60);
       var s = Math.floor((input / 1000) % 60);
       return format(h) + ":" + format(m) + ":" + format(s);
   }

};

TimeFilter.$inject = ['$log'];
module.exports = TimeFilter;

},{}],87:[function(require,module,exports){
var WeekPicksFilter = function() {
  return function(picks, weekId) {
    if (!weekId || isNaN(weekId)) {
      return picks;
    }
    var weekPicks = _.filter(picks, function(pick) {
      return pick.week_id == weekId;
    });
    return weekPicks;
  };
};

WeekPicksFilter.$inject = [];
module.exports = WeekPicksFilter;

},{}],88:[function(require,module,exports){

var UserController = function($scope, $log, userModel, userService) {

    $scope.userData = angular.copy(userModel);

    $scope.update = function(user) {
        userService.updateUser(user);
    };

    $scope.hasError = function(input) {
        return !input.$focused && input.$dirty && input.$invalid;
    };

    $scope.hasPropertyError = function(input, property) {
        return !input.$focused && input.$dirty && input.$error[property];
    };

    $scope.$on('userModel::userUpdated', function(event) {
        $scope.userData = angular.copy(userModel);
    });

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("user controller");
    };
    init();

};

UserController.$inject = ['$scope', '$log', 'userModel', 'userService'];
module.exports = UserController;

},{}],89:[function(require,module,exports){

var LeagueController = function($scope, $log) {

    $scope.hasError = function(input) {
        return !input.$focused && input.$dirty && input.$invalid;
    };

    $scope.hasPropertyError = function(input, property) {
        return !input.$focused && input.$dirty && input.$error[property];
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("league controller");
    };
    init();

};

LeagueController.$inject = ['$scope', '$log'];
module.exports = LeagueController;

},{}],90:[function(require,module,exports){
var LeaguesController = function($scope, $log, $state) {

    // pagination
    $scope.currentLeaguePage = 1;
    $scope.leaguesPerPage = 100;

    $scope.isPublic = function() {
        return $state.current.name == 'private.leagues.join.public';
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("leagues controller");
    };
    init();

};

LeaguesController.$inject = ['$scope', '$log', '$state'];
module.exports = LeaguesController;


},{}],91:[function(require,module,exports){
var TeamController = function($scope, $log) {

    $scope.hasError = function(input) {
        return !input.$focused && input.$dirty && input.$invalid;
    };

    $scope.hasPropertyError = function(input, property) {
        return !input.$focused && input.$dirty && input.$error[property];
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("team controller");
    };
    init();

};

TeamController.$inject = ['$scope', '$log'];
module.exports = TeamController;

},{}],92:[function(require,module,exports){
var TeamsController = function($scope, $log, $state, $location, $stateParams) {

    $scope.seasonId = $stateParams.seasonId;

    // pagination
    $scope.currentTeamPage = 1;
    $scope.teamsPerPage = 100;

    $scope.isAliveState = function() {
        return $state.current.name == 'private.teams.alive';
    };

    $scope.hasNoPick = function(team) {
      return team.last_pick.name.indexOf('No Pick') > -1;
    };

    $scope.createTeam = function(seasonId) {
        $location.path('/season/' + seasonId + '/leagues/public');
    };

    $scope.aliveTeams = function(seasonId) {
      $location.path('/season/' + seasonId + '/teams/alive');
    };

    $scope.deadTeams = function(seasonId) {
      $location.path('/season/' + seasonId + '/teams/dead');
    };

    $scope.showTeam = function(seasonId, team) {
      $location.path('/season/' + seasonId + '/league/' + team.league.id + '/team/' + team.id);
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("teams controller");
    };
    init();

};

TeamsController.$inject = ['$scope', '$log', '$state', '$location', '$stateParams'];
module.exports = TeamsController;

},{}],93:[function(require,module,exports){
var PlayController = function($scope, $log, $location, $modal, $state, $stateParams, messageModel, seasonModel, weekService, leagueService) {

  $scope.selectedSeasonId = parseInt($stateParams.seasonId);

  $scope.startedSeasons = angular.copy(seasonModel.startedSeasons);

  $scope.teamOptions = { alive: true, dead: true };
  $scope.leagueOptions = { managed: true };

  $scope.query = '';

  $scope.changeSeason = function(seasonId) {
    seasonModel.setSelectedSeasonId(seasonId);
    var newPath = $location.path().replace(/(\/season\/)\d*/, '$1' + seasonId);
    $location.path(newPath);
  };

  $scope.myTeams = function(seasonId) {
    $location.path('/season/' + seasonId + '/my/teams');
  };

  $scope.myLeagues = function(seasonId) {
    $location.path('/season/' + seasonId + '/my/leagues');
  };

  $scope.resetSearch = function() {
    $scope.query = '';
  };

  $scope.isState = function(states) {
    return _.indexOf(states, $state.current.name) > -1;
  };

  $scope.createLeague = function(seasonId) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/league/new/league.new.tpl.html',
      controller: 'NewLeagueController',
      resolve: {
        seasonId: function() {
          return seasonId;
        },
        weeks: function() {
          return weekService.getAvailableWeeks(seasonId);
        }
      }

    });

    modalInstance.result.then(function(league) {
      leagueService.createLeague(league);
    }, function () {
      $log.debug('Create league modal dismissed...');
      messageModel.setMessage({ type: 'warning', content: 'Create league cancelled' }, false);
    });

  };

  $scope.joinLeague = function(seasonId) {
    $location.path('/season/' + seasonId + '/leagues/public');
  };

    /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("play controller");
  };
  init();

};

PlayController.$inject = ['$scope', '$log', '$location', '$modal', '$state', '$stateParams', 'messageModel', 'seasonModel', 'weekService', 'leagueService'];
module.exports = PlayController;

},{}],94:[function(require,module,exports){
var AdminController = function($scope) {

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
  };
  init();
};

AdminController.$inject = ['$scope'];
module.exports = AdminController;

},{}],95:[function(require,module,exports){
var HeaderController = function($scope, $log, $location, $modal, $state, $anchorScroll, $stateParams, weekService, userService, leagueService, userModel, messageModel, seasonModel) {

    var scrollToTop = function() {
      $anchorScroll(); // hacky?
    };

    var checkHtml5Storage = function() {

      try {
        localStorage.test = Math.floor(Math.random() * 6000000) + 1;
      } catch (e) {
        messageModel.setMessage({ type: 'danger', content: 'You are in Privacy Mode. This app will not function properly. Turn off Privacy Mode.'}, false);
      }

    };

    $scope.selectedSeasonId = (angular.isDefined($stateParams.seasonId)) ? parseInt($stateParams.seasonId) : seasonModel.selectedSeasonId;

    $scope.isCollapsed = true;

    $scope.userData = userModel;

    $scope.credentials = {
        email: '',
        password: ''
    };

    $scope.isState = function(states) {
      return _.indexOf(states, $state.current.name) > -1;
    };

    $scope.home = function() {
        $location.path('/');
    };

    $scope.faq = function() {

      $modal.open({
        templateUrl: 'modules/public/faq/faq.tpl.html',
        controller: 'FaqController'
      });

    };

    $scope.contactUs = function() {

      var modalInstance = $modal.open({
        templateUrl: 'modules/public/abuse/abuse.tpl.html',
        controller: 'AbuseController'
      });

      modalInstance.result.then(function(message) {
        userService.contactUs(message);
      }, function () {
        messageModel.setMessage({ type: 'warning', content: 'Contact us cancelled' }, false);
        $log.debug('contact us dismissed...');
      });

    };

    $scope.register = function() {

      var modalInstance = $modal.open({
        templateUrl: 'modules/public/register/register.tpl.html',
        controller: 'RegisterController'
      });

      modalInstance.result.then(function(newUser) {
        userService.createUser(newUser);
      }, function () {
        messageModel.setMessage({ type: 'warning', content: 'Register cancelled' }, false);
        $log.debug('Register modal dismissed...');
      });

    };

    $scope.play = function(seasonId) {
      $location.path('/season/' + seasonId + '/my/teams');
    };

    $scope.joinLeague = function(seasonId) {
      $location.path('/season/' + seasonId + '/leagues/public');
    };

    $scope.createLeague = function(seasonId) {
      var modalInstance = $modal.open({
            templateUrl: 'modules/private/league/new/league.new.tpl.html',
            controller: 'NewLeagueController',
            resolve: {
              seasonId: function() {
                return seasonId;
              },
              weeks: function() {
                return weekService.getAvailableWeeks(seasonId);
              }
            }
          });

      modalInstance.result.then(function(league) {
        leagueService.createLeague(league);
      }, function () {
        messageModel.setMessage({ type: 'warning', content: 'Create league cancelled' }, false);
        $log.debug('Create league modal dismissed...');
      });
    };

    $scope.userProfile = function() {
        $location.path('/user');
    };

    $scope.signin = function(credentials) {
        $log.debug("signin credentials: " + credentials);
        $scope.dispatch("SigninEvent", credentials);
    };

    $scope.signout = function() {
        $scope.credentials = {
            email: '',
            password: ''
        };
        $scope.dispatch("SignoutEvent");
    };

    $scope.resetPassword = function() {

      var modalInstance = $modal.open({
        templateUrl: 'modules/private/user/reset/user.reset.tpl.html',
        controller: 'UserResetController'
      });

      modalInstance.result.then(function (email) {
        userService.resetUser(email);
      }, function () {
        messageModel.setMessage({ type: 'warning', content: 'Reset password cancelled' }, false);
        $log.debug('Reset password modal dismissed...');
      });
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("header controller");
        scrollToTop();
        checkHtml5Storage();
    };
    init();
};

HeaderController.$inject = ['$scope', '$log', '$location', '$modal', '$state', '$anchorScroll', '$stateParams', 'weekService', 'userService', 'leagueService', 'userModel', 'messageModel', 'seasonModel'];
module.exports = HeaderController;

},{}],96:[function(require,module,exports){
var MessageController = function($scope, $log, messageModel) {

    $scope.messageData = messageModel;

    $scope.dismissMessage = function(message) {
        message.resetMessage();
    }

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("message controller");
    };
    init();
};

MessageController.$inject = ['$scope', '$log', 'messageModel'];
module.exports = MessageController;

},{}],97:[function(require,module,exports){
var FooterController = function($scope, $log, $location) {

  $scope.home = function() {
    $location.path('/');
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("footer controller");
  };
  init();
};

FooterController.$inject = ['$scope', '$log', '$location'];
module.exports = FooterController;

},{}],98:[function(require,module,exports){
var ConfirmController = function(message, $scope, $log, $modalInstance) {

  $scope.message = message;

  $scope.confirm = function() {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("confirm controller");
  };
  init();

};

ConfirmController.$inject = ['message', '$scope', '$log', '$modalInstance'];
module.exports = ConfirmController;

},{}],101:[function(require,module,exports){
var FocusDirective = function() {
    var FOCUS_CLASS = 'ng-focused';
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ctrl) {
            ctrl.$focused = false;
            element.bind('focus', function(evt) {
                element.addClass(FOCUS_CLASS);
                scope.$apply(function() {
                    ctrl.$focused = true;
                });
            }).bind('blur', function(evt) {
                element.removeClass(FOCUS_CLASS);
                scope.$apply(function() {
                    ctrl.$focused = false;
                });
            });
        }
    }
};

module.exports = FocusDirective;

},{}],99:[function(require,module,exports){
var ApplicationService = function($window, $location, $log) {

        /**
         *  Application Startup Process
         */
        this.startup = function() {
            startupProcess();
        };

        var startupProcess = function() {
          forceSsl();
        };

        var forceSsl = function () {
          if ($location.host() == 'localhost') return;
          if ($location.protocol() != 'https') {
            $window.location.href = $location.absUrl().replace('http', 'https');
          }
        };

        /**
         * Invoked on startup, like a constructor.
         */
        var init = function () {
            $log.debug("ApplicationService init application service");
        };
        init();

    };

ApplicationService.$inject = ['$window', '$location', '$log'];
module.exports = ApplicationService;

},{}],100:[function(require,module,exports){
var DateUtils = function() {

  this.dateFormat = function () {
    // source: http://blog.stevenlevithan.com/archives/date-time-format
    var	token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
      timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
      timezoneClip = /[^-+\dA-Z]/g,
      pad = function (val, len) {
        val = String(val);
        len = len || 2;
        while (val.length < len) val = "0" + val;
        return val;
      };

    // Regexes and supporting functions are cached through closure
    return function (date, mask, utc) {
      var dF = this.dateFormat;

      // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
      if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
        mask = date;
        date = undefined;
      }

      // Passing date through Date applies Date.parse, if necessary
      date = date ? new Date(date) : new Date;
      if (isNaN(date)) throw SyntaxError("invalid date");

      mask = String(dF.masks[mask] || mask || dF.masks["default"]);

      // Allow setting the utc argument via the mask
      if (mask.slice(0, 4) == "UTC:") {
        mask = mask.slice(4);
        utc = true;
      }

      var	_ = utc ? "getUTC" : "get",
        d = date[_ + "Date"](),
        D = date[_ + "Day"](),
        m = date[_ + "Month"](),
        y = date[_ + "FullYear"](),
        H = date[_ + "Hours"](),
        M = date[_ + "Minutes"](),
        s = date[_ + "Seconds"](),
        L = date[_ + "Milliseconds"](),
        o = utc ? 0 : date.getTimezoneOffset(),
        flags = {
          d:    d,
          dd:   pad(d),
          ddd:  dF.i18n.dayNames[D],
          dddd: dF.i18n.dayNames[D + 7],
          m:    m + 1,
          mm:   pad(m + 1),
          mmm:  dF.i18n.monthNames[m],
          mmmm: dF.i18n.monthNames[m + 12],
          yy:   String(y).slice(2),
          yyyy: y,
          h:    H % 12 || 12,
          hh:   pad(H % 12 || 12),
          H:    H,
          HH:   pad(H),
          M:    M,
          MM:   pad(M),
          s:    s,
          ss:   pad(s),
          l:    pad(L, 3),
          L:    pad(L > 99 ? Math.round(L / 10) : L),
          t:    H < 12 ? "a"  : "p",
          tt:   H < 12 ? "am" : "pm",
          T:    H < 12 ? "A"  : "P",
          TT:   H < 12 ? "AM" : "PM",
          Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
          o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
          S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
        };

      return mask.replace(token, function ($0) {
        return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
      });
    };
  }();

  this.dateFormat.masks = {
    "default":      "ddd mmm dd yyyy HH:MM:ss",
    shortDate:      "m/d/yy",
    mediumDate:     "mmm d, yyyy",
    longDate:       "mmmm d, yyyy",
    fullDate:       "dddd, mmmm d, yyyy",
    shortTime:      "h:MM TT",
    mediumTime:     "h:MM:ss TT",
    longTime:       "h:MM:ss TT Z",
    isoDate:        "yyyy-mm-dd",
    isoTime:        "HH:MM:ss",
    isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
  };

  this.dateFormat.i18n = {
    dayNames: [
      "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ],
    monthNames: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
      "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ]
  };

};

DateUtils.$inject = [];
module.exports = DateUtils;

},{}],103:[function(require,module,exports){
var MatchDirective = function() {
    return {
        require: 'ngModel',
        link: function (scope, elem, attrs, ctrl) {
            scope.$watch('[' + attrs.ngModel + ', ' + attrs.match + ']', function(value) {
                var a = value[0] || '';
                var b = value[1] || '';
                ctrl.$setValidity('match', a === b);
            }, true);
        }
    }
};

module.exports = MatchDirective;

},{}],102:[function(require,module,exports){
var FormattedDateDirective = function(dateUtils) {
  return {
    link: function (scope, element, attrs, ctrl) {
      ctrl.$formatters.unshift(function (modelValue) {
        return dateUtils.dateFormat(modelValue, "mmm d yyyy h:MM tt (Z)")
      });

      ctrl.$parsers.unshift(function (viewValue) {
        return dateUtils.dateFormat(modelValue, "mmm d yyyy h:MM tt (Z)")
      });
    },
    restrict: 'A',
    require: 'ngModel'
  }
};

module.exports = FormattedDateDirective;

},{}],104:[function(require,module,exports){
var rcSubmitDirective = {
  'rcSubmit': ['$parse', function ($parse) {
    return {
      restrict: 'A',
      require: ['rcSubmit', '?form'],
      controller: ['$scope', function ($scope) {

        var formController = null;
        var attemptHandlers = [];

        this.attempted = false;

        this.onAttempt = function(handler) {
          attemptHandlers.push(handler);
        };

        this.setAttempted = function() {
          this.attempted = true;

          angular.forEach(attemptHandlers, function (handler) {
            handler();
          });
        };

        this.setFormController = function(controller) {
          formController = controller;
        };

        this.needsAttention = function (fieldModelController) {
          if (!formController) return false;

          if (fieldModelController) {
            return fieldModelController.$invalid &&
              (fieldModelController.$dirty || this.attempted);
          } else {
            return formController && formController.$invalid &&
              (formController.$dirty || this.attempted);
          }
        };
      }],
      compile: function(cElement, cAttributes, transclude) {
        return {
          pre: function(scope, formElement, attributes, controllers) {

            var submitController = controllers[0];
            var formController = (controllers.length > 1) ? controllers[1] : null;

            submitController.setFormController(formController);

            scope.rc = scope.rc || {};
            scope.rc[attributes.name] = submitController;
          },
          post: function(scope, formElement, attributes, controllers) {

            var submitController = controllers[0];
            var formController = (controllers.length > 1) ? controllers[1] : null;
            var fn = $parse(attributes.rcSubmit);

            formElement.bind('submit', function () {
              submitController.setAttempted();
              if (!scope.$$phase) scope.$apply();

              if (!formController.$valid) return false;

              scope.$apply(function() {
                fn(scope, {$event:event});
              });
            });
          }
        };
      }
    };
  }]
};
},{}],105:[function(require,module,exports){
var rcVerifySetDirective = {
  'rcVerifySet': function () {
    return {
      restrict: 'A',
      require: ['^rcSubmit', 'ngModel'],
      link: function (scope, element, attributes, controllers) {
        var submitController = controllers[0];
        var modelController = controllers[1];

        submitController.onAttempt(function() {
          modelController.$setViewValue(element.val());
        });
      }
    };
  }
};
},{}],106:[function(require,module,exports){
/* attribute will enforce a reg ex pattern if the field is marked as ng-required */
var RequiredPatternDirective = function() {
    return {
        restrict: "A",
        require: "ngModel",
        link: function(scope, el, attrs, ngModel) {
            var validator, patternValidator,
                pattern = attrs.rpattern,
                required = true;

            if( pattern ) {
                if (pattern.match(/^\/(.*)\/$/)) {
                    pattern = new RegExp(pattern.substr(1, pattern.length - 2));
                    patternValidator = function(value) {
                        return validate(pattern, value)
                    };
                }
                else {
                    patternValidator = function(value) {
                        var patternObj = scope.$eval(pattern);
                        if (!patternObj || !patternObj.test) {
                            throw new Error('Expected ' + pattern + ' to be a RegExp but was ' + patternObj);
                        }
                        return validate(patternObj, value);
                    };
                }
            }

            ngModel.$formatters.push(patternValidator);
            ngModel.$parsers.push(patternValidator);

            attrs.$observe("required", function(newval) {
                required = newval;
                patternValidator(ngModel.$viewValue);
            });

            function validate(regexp, value) {
                if( value == null || value === "" || !required || regexp.test(value) ) {
                    ngModel.$setValidity('pattern', true);
                    return value;
                }
                else {
                    ngModel.$setValidity('pattern', false);
                    return;
                }
            }
        }
    }
};

module.exports = RequiredPatternDirective;
},{}],107:[function(require,module,exports){
var SelectOnClickDirective = function() {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      element.on('click', function () {
        this.select();
      });
    }
  };
};

module.exports = SelectOnClickDirective;

},{}],108:[function(require,module,exports){
var RegisterTermsController = function($modalInstance, $scope, $log) {

  $scope.close = function () {
    $modalInstance.dismiss('close');
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("register terms and conditions controller");
  };
  init();
};

RegisterTermsController.$inject = ['$modalInstance', '$scope', '$log'];
module.exports = RegisterTermsController;

},{}],109:[function(require,module,exports){
var UserResetController = function($modalInstance, $scope, $log) {

  $scope.userData = {
    email: ""
  };

  $scope.reset = function (email) {
    $modalInstance.close(email);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  $scope.hasError = function(input) {
    return !input.$focused && input.$dirty && input.$invalid;
  };

  $scope.hasPropertyError = function(input, property) {
    return !input.$focused && input.$dirty && input.$error[property];
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("user reset controller");
  };
  init();
};

UserResetController.$inject = ['$modalInstance', '$scope', '$log'];
module.exports = UserResetController;

},{}],110:[function(require,module,exports){
var NewLeagueController = function(seasonId, weeks, $scope, $log, $modalInstance, weekService, seasonModel) {

    $scope.weeks = weeks.data;

    $scope.seasons = angular.copy(seasonModel.currentSeasons);

    $scope.newLeagueData = {
        name: '',
        nickname: '',
        season_id: seasonId,
        start_week_id: $scope.weeks[0].id,
        public: true,
        elimination: true,
        max_teams_per_user: ''
    };

    $scope.getSeasonWeeks = function() {
      weekService.getAvailableWeeks($scope.newLeagueData.season_id)
        .then(function(response) {
          $scope.weeks = response.data;
          $scope.newLeagueData.start_week_id = $scope.weeks[0].id;
        });
    };

    $scope.createLeague = function(league) {
      $modalInstance.close(league);
    };

    $scope.cancel = function() {
      $modalInstance.dismiss('cancel');
    };

    $scope.hasError = function(input) {
      return !input.$focused && input.$dirty && input.$invalid;
    };

    $scope.hasPropertyError = function(input, property) {
      return !input.$focused && input.$dirty && input.$error[property];
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("new league controller");
    };
    init();

};

NewLeagueController.$inject = ['seasonId', 'weeks', '$scope', '$log', '$modalInstance', 'weekService', 'seasonModel'];
module.exports = NewLeagueController;

},{}],111:[function(require,module,exports){
var ViewLeagueController = function(league, leagueWeeks, leagueTeams, $scope, $log, $modal, $location, $state, $stateParams, userModel, messageModel, userService, weekService, teamService, leagueService) {

  $scope.leagueData = league.data;

  $scope.leagueWeeks = leagueWeeks.data;
  $scope.leagueTeams = leagueTeams.data;

  // pagination
  $scope.currentTeamPage = 1;
  $scope.teamsPerPage = 100;

  $scope.teamOptions = { active: true, inactive: false };

  $scope.teamQuery = '';

  $scope.leagueDropdown = {
    isopen: false
  };

  $scope.selectedWeekId = parseInt($stateParams.week);

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.leagueDropdown.isopen = !$scope.leagueDropdown.isopen;
  };

  $scope.changeWeek = function(weekId) {
    if (weekId) {
      $location.search('week', weekId); // add / replace the week query param
    } else {
      $location.search('week', null); // remove the week query param
    }
    $location.path($location.path());
  };

  $scope.search = function(item) {
    if (item.name.indexOf($scope.teamQuery.toLowerCase()) != -1 || item.coach_names.join(', ').indexOf($scope.teamQuery.toLowerCase()) != -1) {
      return true;
    }
    return false;
  };

  $scope.starts = function(league) {
    var startsLabel = (league.started) ? 'Started ' : 'Starts ';
    return startsLabel + league.start_week_display;
  };

  $scope.isCommish = function(league) {
    return league.commish_ids.indexOf(userModel.user.id) > -1;
  };

  $scope.isAdmin = function() {
    return userModel.user.admin;
  };

  $scope.hasTeamInLeague = function() {
    var found = false;
    _.each($scope.leagueTeams, function(team) {
      if (team.coach_ids.indexOf(userModel.user.id) > -1) {
        found = true;
      }
    });
    return found;
  };

  $scope.hasDeactivatedTeams = function() {
    var foundDeactivated = false;
    _.each($scope.leagueTeams, function(team) {
      if (team.active == false) {
        foundDeactivated = true;
      }
    });
    return foundDeactivated;
  };

  $scope.isCoach = function(team) {
    return team.coach_ids.indexOf(userModel.user.id) > -1;
  };

  $scope.coachName = function(team) {
    return team.coach_names.join(', ');
  };

  $scope.hasNoPick = function(team) {
    return team.last_pick.name.indexOf('No Pick') > -1;
  };

  $scope.editLeague = function(league) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/league/edit/league.edit.tpl.html',
      controller: 'EditLeagueController',
      resolve: {
        weeks: function() {
          return weekService.getAvailableWeeks(league.season_id);
        },
        league: function() {
          return league;
        }
      }

    });

    modalInstance.result.then(function(league) {
      leagueService.updateLeague(league);
    }, function () {
      $log.debug('Edit league modal dismissed...');
      messageModel.setMessage({ type: 'warning', content: 'Edit league cancelled' }, false);
    });

  };

  $scope.openLeague = function(league) {
    leagueService.openLeague(league)
  };

  $scope.closeLeague = function(league) {
    leagueService.closeLeague(league)
  };

  $scope.showTeam = function(team) {
    $location.path($location.path() + '/team/' + team.id);
  };

  $scope.contactCommish = function(league) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/league/contact/league.contact.tpl.html',
      controller: 'LeagueContactController',
      resolve: {
        league: function() {
          return league;
        }
      }
    });

    modalInstance.result.then(function(params) {
      leagueService.sendCommishMessage(params.league, params.message)
    }, function () {
      $log.debug('Contact league modal dismissed...');
      messageModel.setMessage({ type: 'warning', content: 'Contact commish cancelled' }, false);
    });

  };

  $scope.reportAbuse = function() {

    var modalInstance = $modal.open({
      templateUrl: 'modules/public/abuse/abuse.tpl.html',
      controller: 'AbuseController'
    });

    modalInstance.result.then(function(message) {
      userService.contactUs(message);
    }, function () {
      messageModel.setMessage({ type: 'warning', content: 'Contact us cancelled' }, false);
      $log.debug('contact us dismissed...');
    });

  };

  $scope.updateMessage = function(league) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/league/message/league.message.tpl.html',
      controller: 'LeagueMessageController',
      resolve: {
        league: function() {
          return league;
        }
      }
    });

    modalInstance.result.then(function(params) {
      leagueService.updateLeagueMessage(params.league, params.sendAlive, params.sendAll)
        .then(function(message) {
          $scope.leagueData.message = message;
        });

    }, function () {
      $log.debug('League message modal dismissed...');
      messageModel.setMessage({ type: 'warning', content: 'Update league message cancelled' }, false);
    });

  };

  $scope.joinLeague = function(league) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/league/join/league.join.tpl.html',
      controller: 'LeagueJoinController',
      resolve: {
        league: function() {
          return league;
        }
      }
    });

    modalInstance.result.then(function(team) {
      teamService.createTeam(team);
    }, function () {
      $log.debug('Join league modal dismissed...');
      messageModel.setMessage({ type: 'warning', content: 'Join league cancelled' }, false);
    });

  };

  $scope.requestInvite = function(league) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/league/invite/request/league.invite.request.tpl.html',
      controller: 'LeagueInviteRequestController',
      resolve: {
        leagueId: function() {
          return league.id;
        }
      }
    });

    modalInstance.result.then(function (invitation) {
      leagueService.requestInvite(invitation);
    }, function () {
      $log.debug('Request invite modal dismissed...');
      messageModel.setMessage({ type: 'warning', content: 'Request invite cancelled' }, false);
    });

  };

  $scope.invite = function(leagueId, isCommish, startWeekComplete) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/league/invite/league.invite.tpl.html',
      controller: 'LeagueInviteController',
      resolve: {
        leagueId: function() {
          return leagueId;
        },
        isCommish: function() {
          return isCommish;
        },
        startWeekComplete: function() {
          return startWeekComplete;
        },
        invitations: function() {
          if (isCommish) {
            return leagueService.getInvites(leagueId);
          } else {
            return { data: [] };
          }
        }
      }
    });

    modalInstance.result.then(function(invitation) {
      leagueService.createInvite(invitation);
    }, function () {
      $log.debug('Invite coach modal dismissed...');
    });
  };

  $scope.showDeactivatedTeams = function(show) {
    $scope.teamOptions.inactive = show;
    if (show) {
      messageModel.setMessage({ type: 'info', content: 'Showing deactivated teams (if any)' }, false);
    } else {
      messageModel.setMessage({ type: 'info', content: 'Hiding deactivated teams (if any)' }, false);
    }
  };

  $scope.resetSearch = function() {
    $scope.teamQuery = '';
    $scope.currentTeamPage = 1;
  };

  $scope.$on("$destroy", function() {
    // if navigating away from league or team view page, remove the week query param
    if ($state.current.name != 'private.league.view' && $state.current.name != 'private.team.view') {
      $location.search('week', null);
    }
  });

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("view league controller");
  };
  init();

};

ViewLeagueController.$inject = ['league','leagueWeeks', 'leagueTeams', '$scope', '$log', '$modal', '$location', '$state', '$stateParams', 'userModel', 'messageModel', 'userService', 'weekService', 'teamService', 'leagueService'];
module.exports = ViewLeagueController;

},{}],112:[function(require,module,exports){
var EditLeagueController = function(weeks, league, $scope, $log, $location, $modalInstance, weekService, seasonModel) {

    $scope.weeks = weeks.data;

    $scope.seasons = angular.copy(seasonModel.currentSeasons);

    $scope.leagueData = angular.copy(league);

    $scope.showLeague = function(league) {
      $location.path('/season/' + league.season_id + '/league/' + league.id);
    };

    $scope.updateLeague = function(league) {
      $modalInstance.close(league);
    };

    $scope.getSeasonWeeks = function() {
      weekService.getAvailableWeeks($scope.leagueData.season_id)
        .then(function(response) {
          $scope.weeks = response.data;
          $scope.leagueData.start_week_id = $scope.weeks[0].id;
        });
    };

    $scope.cancel = function() {
      $modalInstance.dismiss('cancel');
    };

    $scope.hasError = function(input) {
      return !input.$focused && input.$dirty && input.$invalid;
    };

    $scope.hasPropertyError = function(input, property) {
      return !input.$focused && input.$dirty && input.$error[property];
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("edit league controller");
    };
    init();

};

EditLeagueController.$inject = ['weeks', 'league', '$scope', '$log', '$location', '$modalInstance', 'weekService', 'seasonModel'];
module.exports = EditLeagueController;

},{}],113:[function(require,module,exports){
var LeagueContactController = function(league, $modalInstance, $scope, $log) {

  $scope.leagueData = league;

  $scope.commishMessage = '';

  $scope.contactCommish = function(league, message) {
    $modalInstance.close({ league: league, message: message });
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };

  $scope.hasError = function(input) {
    return !input.$focused && input.$dirty && input.$invalid;
  };

  $scope.hasPropertyError = function(input, property) {
    return !input.$focused && input.$dirty && input.$error[property];
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("league contact controller");
  };
  init();
};

LeagueContactController.$inject = ['league', '$modalInstance', '$scope', '$log'];
module.exports = LeagueContactController;

},{}],114:[function(require,module,exports){
var LeagueMessageController = function(league, $modalInstance, $scope, $log) {

  $scope.leagueData = angular.copy(league);

  $scope.messageOptions = {
    sendAlive: false,
    sendAll: false
  };

  $scope.updateMessage = function(league, sendAlive, sendAll) {
    $modalInstance.close({ league: league, sendAlive: sendAlive, sendAll: sendAll });
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };

  $scope.hasError = function(input) {
    return !input.$focused && input.$dirty && input.$invalid;
  };

  $scope.hasPropertyError = function(input, property) {
    return !input.$focused && input.$dirty && input.$error[property];
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("league message controller");
  };
  init();
};

LeagueMessageController.$inject = ['league', '$modalInstance', '$scope', '$log'];
module.exports = LeagueMessageController;

},{}],115:[function(require,module,exports){
var LeagueJoinController = function(league, $modalInstance, $scope, $log) {

  $scope.leagueData = league;

  $scope.newTeamData = {
    name: '',
    season_id: league.season_id,
    league_id: league.id
  };

  $scope.joinLeague = function (newTeam) {
    $modalInstance.close(newTeam);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  $scope.hasError = function(input) {
    return !input.$focused && input.$dirty && input.$invalid;
  };

  $scope.hasPropertyError = function(input, property) {
    return !input.$focused && input.$dirty && input.$error[property];
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("league join controller");
  };
  init();
};

LeagueJoinController.$inject = ['league', '$modalInstance', '$scope', '$log'];
module.exports = LeagueJoinController;

},{}],116:[function(require,module,exports){
var LeagueInviteController = function(leagueId, isCommish, startWeekComplete, invitations, $modal, $modalInstance, $scope, $log) {

  $scope.isCommish = isCommish;

  $scope.startWeekComplete = startWeekComplete;

  $scope.invitations = invitations.data;

  $scope.resetInvite = function() {
    $scope.invitation = {
      league_id: leagueId,
      email: "",
      message: ""
    }
  };
  $scope.resetInvite();

  $scope.populateInvite = function(invitation) {
    $scope.invitation = {
      league_id: invitation.league_id,
      email: invitation.email,
      message: invitation.message
    }
  };

  $scope.sendInvite = function(invitation) {
    $modalInstance.close(invitation);
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };

  $scope.hasError = function(input) {
    return !input.$focused && input.$dirty && input.$invalid;
  };

  $scope.hasPropertyError = function(input, property) {
    return !input.$focused && input.$dirty && input.$error[property];
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("league invite controller");
  };
  init();
};

LeagueInviteController.$inject = ['leagueId', 'isCommish', 'startWeekComplete', 'invitations', '$modal', '$modalInstance', '$scope', '$log'];
module.exports = LeagueInviteController;

},{}],117:[function(require,module,exports){
var JoinLeaguesController = function($scope, $log, $location, $modal, $stateParams, userModel, messageModel, seasonModel, weekService, leagueService) {

  $scope.selectedSeasonId = parseInt($stateParams.seasonId);

  $scope.currentSeasons = angular.copy(seasonModel.currentSeasons);

  $scope.leagueOptions = { closed: false };

  $scope.leagueQuery = '';

  $scope.publicLeagues = function(seasonId) {
    $location.path('/season/' + seasonId + '/leagues/public');
  };

  $scope.privateLeagues = function(seasonId) {
    $location.path('/season/' + seasonId + '/leagues/private');
  };

  $scope.changeSeason = function(seasonId) {
    seasonModel.setSelectedSeasonId(seasonId);
    var newPath = $location.path().replace(/(\/season\/)\d*/, '$1' + seasonId);
    $location.path(newPath);
  };

  $scope.search = function(item) {
    if (item.name.indexOf($scope.leagueQuery.toLowerCase()) != -1 || item.commish_names.join(', ').indexOf($scope.leagueQuery.toLowerCase()) != -1) {
      return true;
    }
    return false;
  };

  $scope.resetSearch = function() {
    $scope.leagueQuery = '';
  };

  $scope.isCommish = function(league) {
    return league.commish_ids.indexOf(userModel.user.id) > -1;
  };

  $scope.createLeague = function(seasonId) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/league/new/league.new.tpl.html',
      controller: 'NewLeagueController',
      resolve: {
        seasonId: function() {
          return seasonId;
        },
        weeks: function() {
          return weekService.getAvailableWeeks(seasonId);
        }
      }

    });

    modalInstance.result.then(function(league) {
      leagueService.createLeague(league);
    }, function () {
      $log.debug('Create league modal dismissed...');
      messageModel.setMessage({ type: 'warning', content: 'Create league cancelled' }, false);
    });

  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("join leagues controller");
  };
  init();

};

JoinLeaguesController.$inject = ['$scope', '$log', '$location', '$modal', '$stateParams', 'userModel', 'messageModel', 'seasonModel', 'weekService', 'leagueService'];
module.exports = JoinLeaguesController;

},{}],118:[function(require,module,exports){
var ManagedLeaguesController = function(managedLeagues, $scope, $log, $location, $modal, messageModel, weekService, leagueService) {

    $scope.managedLeagues = managedLeagues.data;

    $scope.createLeague = function(season) {

      var modalInstance = $modal.open({
        templateUrl: 'modules/private/league/new/league.new.tpl.html',
        controller: 'NewLeagueController',
        resolve: {
          seasonId: function() {
            return season.id;
          },
          weeks: function() {
            return weekService.getAvailableWeeks(season.id);
          }
        }

      });

      modalInstance.result.then(function(league) {
        leagueService.createLeague(league);
      }, function () {
        $log.debug('Create league modal dismissed...');
        messageModel.setMessage({ type: 'warning', content: 'Create league cancelled' }, false);
      });

    };

    $scope.viewLeague = function(league) {
        $location.path('/season/' + league.season_id + '/league/' + league.id);
    };

    $scope.starts = function(league) {
      var startsLabel = (league.started) ? 'Started ' : 'Starts ';
      return startsLabel + league.start_week;
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("managed leagues controller");
    };
    init();

};

ManagedLeaguesController.$inject = ['managedLeagues', '$scope', '$log', '$location', '$modal', 'messageModel', 'weekService', 'leagueService'];
module.exports = ManagedLeaguesController;


},{}],119:[function(require,module,exports){
var MyLeaguesController = function(leagues, $scope, $log, $location, $modal, messageModel, weekService, leagueService) {

  $scope.leagues = leagues.data;

  $scope.createLeague = function(season) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/league/new/league.new.tpl.html',
      controller: 'NewLeagueController',
      resolve: {
        seasonId: function() {
          return season.id;
        },
        weeks: function() {
          return weekService.getAvailableWeeks(season.id);
        }
      }

    });

    modalInstance.result.then(function(league) {
      leagueService.createLeague(league);
    }, function () {
      $log.debug('Create league modal dismissed...');
      messageModel.setMessage({ type: 'warning', content: 'Create league cancelled' }, false);
    });

  };

  $scope.joinLeague = function(season) {
    $location.path('/season/' + season.id + '/leagues/public');
  };

  $scope.viewLeague = function(league) {
    $location.path('/season/' + league.season_id + '/league/' + league.id);
  };

  $scope.starts = function(league) {
    var startsLabel = (league.started) ? 'Started ' : 'Starts ';
    return startsLabel + league.start_week;
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("my leagues controller");
  };
  init();

};

MyLeaguesController.$inject = ['leagues', '$scope', '$log', '$location', '$modal', 'messageModel', 'weekService', 'leagueService'];
module.exports = MyLeaguesController;


},{}],120:[function(require,module,exports){
var ViewTeamController = function(team, leagueTeams, leagueWeeks, picks, $scope, $log, $modal, $location, $state, $stateParams, messageModel, userModel, userService, teamService, gameService, pickService) {

  var activate = function(team) {
    teamService.activateTeam(team)
      .then(function(active) {
        team.active = active;
      });
  };

  var deactivate = function(team) {
    teamService.deactivateTeam(team)
      .then(function(active) {
        team.active = active;
      });
  };

  $scope.teamData = team.data;
  $scope.leagueTeams = leagueTeams.data;
  $scope.leagueWeeks = leagueWeeks.data;

  $scope.picks = picks.data;

  $scope.teamDropdown = {
    isopen: false
  };

  $scope.selectedWeekId = parseInt($stateParams.week);

  $scope.correctPickCount = function(picks) {
    var correctPicks = _.filter(picks, function(pick) {
      return pick.correct;
    });
    return correctPicks.length;
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.teamDropdown.isopen = !$scope.teamDropdown.isopen;
  };

  $scope.changeWeek = function(weekId) {
    if (weekId) {
      $location.search('week', weekId); // add / replace the week query param
    } else {
      $location.search('week', null); // remove the week query param
    }
  };

  $scope.contactCommish = function(team) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/league/contact/league.contact.tpl.html',
      controller: 'LeagueContactController',
      resolve: {
        league: function() {
          return team.league;
        }
      }
    });

    modalInstance.result.then(function(params) {
      teamService.sendCommishMessage(team, params.message)
    }, function () {
      $log.debug('Contact league modal dismissed...');
      messageModel.setMessage({ type: 'warning', content: 'Contact commish cancelled' }, false);
    });

  };

  $scope.updateMessage = function(team) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/team/message/team.message.tpl.html',
      controller: 'TeamMessageController',
      resolve: {
        team: function() {
          return team;
        }
      }
    });

    modalInstance.result.then(function(params) {
      teamService.updateTeamMessage(params.team, params.sendEmail)
        .then(function(message) {
          $scope.teamData.message = message;
        });

    }, function () {
      $log.debug('Team message modal dismissed...');
      messageModel.setMessage({ type: 'warning', content: 'Update team message cancelled' }, false);
    });

  };

  $scope.confirmActivate = function(team) {
    var modalInstance = $modal.open({
      templateUrl: 'common/modules/confirm/confirm.tpl.html',
      controller: 'ConfirmController',
      size: 'sm',
      resolve: {
        message: function() {
          return 'Reactivate ' + team.name + '?';
        }
      }
    });
    modalInstance.result.then(function() {
      activate(team);
    }, function () {
      $log.debug('Activate team cancelled...');
      messageModel.setMessage({ type: 'warning', content: 'Team reactivation cancelled' }, false);
    });
  };

  $scope.confirmDeactivate = function(team) {
    var modalInstance = $modal.open({
      templateUrl: 'common/modules/confirm/confirm.tpl.html',
      controller: 'ConfirmController',
      size: 'sm',
      resolve: {
        message: function() {
          return 'Deactivate ' + team.name + '?';
        }
      }
    });
    modalInstance.result.then(function() {
      deactivate(team);
    }, function () {
      $log.debug('Deactivate team cancelled...');
      messageModel.setMessage({ type: 'warning', content: 'Team deactivation cancelled' }, false);
    });
  };

  $scope.paid = function(team) {
    teamService.paidTeam(team)
      .then(function(paid) {
        team.paid = paid;
      });
  };

  $scope.unpaid = function(team) {
    teamService.unpaidTeam(team)
      .then(function(paid) {
        team.paid = paid;
      });
  };

  $scope.hasNoPick = function(team) {
    return team.last_pick.name.indexOf('No Pick') > -1;
  };

  $scope.isCommish = function(team) {
    return team.commish_ids.indexOf(userModel.user.id) > -1;
  };

  $scope.isCoach = function(team) {
    return team.coach_ids.indexOf(userModel.user.id) > -1;
  };

  $scope.isAdmin = function() {
    return userModel.user.admin;
  };

  $scope.showTeam = function(team) {
    var teamPath = $location.path().replace(/[^\/]*$/, team.id);
    $location.path(teamPath);
  };

  $scope.showLeague = function(team) {
    $location.path('/season/' + team.league.season_id + '/league/' + team.league.id);
  };

  $scope.editTeam = function(team) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/team/edit/team.edit.tpl.html',
      controller: 'EditTeamController',
      resolve: {
        team: function() {
          return team;
        }
      }
    });

    modalInstance.result.then(function(team) {
      teamService.updateTeam(team)
        .then(function() {
          $scope.teamData = team;
        });
    }, function () {
      $log.debug('Edit team modal dismissed...');
      messageModel.setMessage({ type: 'warning', content: 'Edit team cancelled' }, false);
    });

  };

  $scope.makePick = function(team, pick) {

    if (!$scope.isCoach(team) || (pick && pick.locked)) return;

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/pick/make/pick.make.tpl.html',
      controller: 'PickMakeController',
      resolve: {
        picks: function() {
          return $scope.picks;
        },
        currentGames: function() {
          return gameService.getCurrentGames(team.league.id);
        }
      }
    });

    modalInstance.result.then(function(pick) {
      pick.team_id = $scope.teamData.id;
      pickService.createPick(pick);
    }, function () {
      $log.debug('Make pick modal dismissed...');
      messageModel.setMessage({ type: 'warning', content: 'Pick loser cancelled' }, false);
    });

  };

  $scope.$on("$destroy", function() {
    // if navigating away from league or team view page, remove the week query param
    if ($state.current.name != 'private.league.view' && $state.current.name != 'private.team.view') {
      $location.search('week', null);
    }
  });

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("view team controller");
  };
  init();

};

ViewTeamController.$inject = ['team', 'leagueTeams', 'leagueWeeks', 'picks', '$scope', '$log', '$modal', '$location', '$state', '$stateParams', 'messageModel', 'userModel', 'userService', 'teamService', 'gameService', 'pickService'];
module.exports = ViewTeamController;

},{}],121:[function(require,module,exports){
var EditTeamController = function(team, $scope, $log, $modalInstance) {

    $scope.teamData = angular.copy(team);

    $scope.editTeam = function(team) {
      team.name = team.name.toLowerCase();
      $modalInstance.close(team);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

    $scope.hasError = function(input) {
      return !input.$focused && input.$dirty && input.$invalid;
    };

    $scope.hasPropertyError = function(input, property) {
      return !input.$focused && input.$dirty && input.$error[property];
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("edit team controller");
    };
    init();

};

EditTeamController.$inject = ['team', '$scope', '$log', '$modalInstance'];
module.exports = EditTeamController;

},{}],122:[function(require,module,exports){
var TeamMessageController = function(team, $modalInstance, $scope, $log) {

  $scope.teamData = angular.copy(team);

  $scope.messageOptions = { sendEmail: false };

  $scope.updateMessage = function(team, sendEmail) {
    $modalInstance.close({ team: team, sendEmail: sendEmail});
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };

  $scope.hasError = function(input) {
    return !input.$focused && input.$dirty && input.$invalid;
  };

  $scope.hasPropertyError = function(input, property) {
    return !input.$focused && input.$dirty && input.$error[property];
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("team message controller");
  };
  init();
};

TeamMessageController.$inject = ['team', '$modalInstance', '$scope', '$log'];
module.exports = TeamMessageController;

},{}],123:[function(require,module,exports){
var AliveTeamsController = function($scope, $log, aliveTeams) {

    $scope.aliveTeams = aliveTeams.data;

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("alive teams controller");
    };
    init();

};

AliveTeamsController.$inject = ['$scope', '$log', 'aliveTeams'];
module.exports = AliveTeamsController;

},{}],124:[function(require,module,exports){
var DeadTeamsController = function($scope, $log, deadTeams) {

    $scope.deadTeams = deadTeams.data;

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("dead teams controller");
    };
    init();

};

DeadTeamsController.$inject = ['$scope', '$log', 'deadTeams'];
module.exports = DeadTeamsController;

},{}],125:[function(require,module,exports){
var PlayLeaguesController = function(leagues, $scope, $log, $location, $modal, userModel, messageModel, weekService, leagueService) {

  $scope.leagues = leagues.data;

  // pagination
  $scope.currentLeaguePage = 1;
  $scope.leaguesPerPage = 100;

  $scope.createLeague = function(season) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/league/new/league.new.tpl.html',
      controller: 'NewLeagueController',
      resolve: {
        seasonId: function() {
          return season.id;
        },
        weeks: function() {
          return weekService.getAvailableWeeks(season.id);
        }
      }

    });

    modalInstance.result.then(function(league) {
      leagueService.createLeague(league);
    }, function () {
      $log.debug('Create league modal dismissed...');
      messageModel.setMessage({ type: 'warning', content: 'Create league cancelled' }, false);
    });

  };

  $scope.joinLeague = function(season) {
    $location.path('/season/' + season.id + '/leagues/public');
  };

  $scope.viewLeague = function(league) {
    $location.path('/season/' + league.season_id + '/league/' + league.id);
  };

  $scope.starts = function(league) {
    var startsLabel = (league.started) ? 'Started ' : 'Starts ';
    return startsLabel + league.start_week;
  };

  $scope.isCommish = function(league) {
    return league.commish_ids.indexOf(userModel.user.id) > -1;
  };

  $scope.search = function(item) {
    if (item.name.indexOf($scope.query.toLowerCase()) != -1 || item.commish_names.join(', ').indexOf($scope.query.toLowerCase()) != -1) {
      return true;
    }
    return false;
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("my leagues controller");
  };
  init();

};

PlayLeaguesController.$inject = ['leagues', '$scope', '$log', '$location', '$modal', 'userModel', 'messageModel', 'weekService', 'leagueService'];
module.exports = PlayLeaguesController;


},{}],126:[function(require,module,exports){
var PlayTeamsController = function(teams, $scope, $log, $stateParams, $location) {

  $scope.teams = teams.data;

  // pagination
  $scope.currentTeamPage = 1;
  $scope.teamsPerPage = 100;

  $scope.showTeam = function(team) {
    $location.path('/season/' + $stateParams.seasonId + '/league/' + team.league.id + '/team/' + team.id);
  };

  $scope.hasNoPick = function(team) {
    return team.last_pick.name.indexOf('No Pick') > -1;
  };

  $scope.search = function(item) {
    if (item.name.indexOf($scope.query.toLowerCase()) != -1 || item.league.name.indexOf($scope.query.toLowerCase()) != -1) {
      return true;
    }
    return false;
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("play teams controller");
  };
  init();

};

PlayTeamsController.$inject = ['teams', '$scope', '$log', '$stateParams', '$location'];
module.exports = PlayTeamsController;

},{}],127:[function(require,module,exports){
var PickMakeController = function(picks, currentGames, $modalInstance, $scope, $log, dateUtils) {

  var picks = picks;

  $scope.games = currentGames.data;

  $scope.getScore = function(game, index) {
    // warning: magic numbers ahead
    var score = (index === 0) ? game.visiting_squad_score : game.home_squad_score;
    return score;
  };

  $scope.makePick = function(game, squad) {
    if (game.started || $scope.hasSquadBeenUsed(game, squad)) return;
    var pick = {
      week_id: game.week_id,
      week_type_id: game.week_type_id,
      game_id: game.id,
      team_id: '',
      squad_id: squad.id
    };
    $modalInstance.close(pick);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  $scope.starts = function(game) {
    var startsLabel = (game.started) ? 'Started ' : 'Starts ';
    return startsLabel + dateUtils.dateFormat(game.starts_at, "ddd, mmm d h:MM TT (Z)");
  };

  $scope.hasSquadBeenUsed = function(game, squad) {
    var squadHasBeenUsed = false;
    _.each(picks, function(pick) {
      if (pick.squad.id == squad.id && pick.week_type_id == game.week_type_id && pick.week_id != game.week_id) {
        squadHasBeenUsed = true;
      }
    });
    return squadHasBeenUsed;
  };

  $scope.hasError = function(input) {
    return !input.$focused && input.$dirty && input.$invalid;
  };

  $scope.hasPropertyError = function(input, property) {
    return !input.$focused && input.$dirty && input.$error[property];
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("make pick controller");
  };
  init();
};

PickMakeController.$inject = ['picks', 'currentGames', '$modalInstance', '$scope', '$log', 'dateUtils'];
module.exports = PickMakeController;

},{}],128:[function(require,module,exports){
var AdminSeasonsController = function($scope, $location, $modal, seasonModel, seasonService) {

  $scope.seasons = seasonModel.seasons;

  $scope.showSeason = function(season) {
    $location.path($location.path() + '/' + season.id);
  };

  $scope.createSeason = function() {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/admin/seasons/season/new/admin.season.new.tpl.html',
      controller: 'AdminSeasonNewController'
    });

    modalInstance.result.then(function(season) {
      seasonService.createSeason(season);
    }, function () {
      $log.debug('Create season modal dismissed...');
      messageModel.setMessage({ type: 'warning', content: 'Create season cancelled' }, false);
    });

  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
  };
  init();
};

AdminSeasonsController.$inject = ['$scope', '$location', '$modal', 'seasonModel', 'seasonService'];
module.exports = AdminSeasonsController;

},{}],129:[function(require,module,exports){
var AdminWeekController = function(week, games, $scope, $log, $modal, dateUtils, gameService, squadService, weekService, messageModel) {

  var completeWeek = function(week) {
    weekService.completeWeek(week)
      .then(function() {
        $scope.weekData.complete = true;
      });
  };

  var sendReminder = function(week) {
    weekService.sendReminder(week);
  };

  $scope.weekData = week.data;

  $scope.games = games.data;

  $scope.dateFormat = dateUtils.dateFormat;

  $scope.editWeek = function(week) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/admin/week/edit/admin.week.edit.tpl.html',
      controller: 'AdminWeekEditController',
      resolve: {
        week: function() {
          return week;
        },
        weekTypes: function() {
          return weekService.getWeekTypes();
        }
      }
    });

    modalInstance.result.then(function(week) {
      weekService.updateWeek(week);
    }, function () {
      $log.debug('Week update cancelled...');
      messageModel.setMessage({ type: 'warning', content: 'Week update cancelled' }, false);
    });

  };

  $scope.editGame = function(game) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/admin/game/edit/admin.game.edit.tpl.html',
      controller: 'AdminGameEditController',
      resolve: {
        game: function() {
          return game;
        }
      }
    });

    modalInstance.result.then(function(game) {
      gameService.updateGame(game);
    }, function () {
      $log.debug('Game update cancelled...');
      messageModel.setMessage({ type: 'warning', content: 'Game update cancelled' }, false);
    });

  };

  $scope.createGame = function(week, games) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/admin/game/new/admin.game.new.tpl.html',
      controller: 'AdminGameNewController',
      resolve: {
        week: function() {
          return week;
        },
        lastGame: function() {
          if (games.length > 0) {
            return games[games.length - 1]
          } else {
            return null
          }
        },
        squads: function() {
          return squadService.getWeekSquads(week);
        }
      }
    });

    modalInstance.result.then(function(game) {
      gameService.createGame(game);
    }, function () {
      $log.debug('Create game modal dismissed...');
      messageModel.setMessage({ type: 'warning', content: 'Create game cancelled' }, false);
    });

  };


  $scope.confirmSendReminder = function(week) {
    var modalInstance = $modal.open({
      templateUrl: 'common/modules/confirm/confirm.tpl.html',
      controller: 'ConfirmController',
      resolve: {
        message: function() {
          return 'Are you sure you want to send weekly reminder?';
        }
      }
    });
    modalInstance.result.then(function() {
      sendReminder(week);
    }, function () {
      $log.debug('Send reminder cancelled...');
      messageModel.setMessage({ type: 'warning', content: 'Send reminder cancelled' }, false);
    });
  };

  $scope.confirmWeekComplete = function(week) {
    var modalInstance = $modal.open({
      templateUrl: 'common/modules/confirm/confirm.tpl.html',
      controller: 'ConfirmController',
      resolve: {
        message: function() {
          return 'Are you sure you want to mark this week as complete?';
        }
      }
    });
    modalInstance.result.then(function() {
      completeWeek(week);
    }, function () {
      $log.debug('Complete week cancelled...');
      messageModel.setMessage({ type: 'warning', content: 'Week complete cancelled' }, false);
    });
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
  };
  init();
};

AdminWeekController.$inject = ['week', 'games', '$scope', '$log', '$modal', 'dateUtils', 'gameService', 'squadService', 'weekService', 'messageModel'];
module.exports = AdminWeekController;

},{}],130:[function(require,module,exports){
var LeagueInviteRequestController = function(leagueId, $modalInstance, $scope, $log, userModel) {

  $scope.invitation = {
    league_id: leagueId,
    email: userModel.user.email,
    message: ""
  };

  $scope.requestInvite = function (invitation) {
    $modalInstance.close(invitation);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  $scope.hasError = function(input) {
    return !input.$focused && input.$dirty && input.$invalid;
  };

  $scope.hasPropertyError = function(input, property) {
    return !input.$focused && input.$dirty && input.$error[property];
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("league invite request controller");
  };
  init();
};

LeagueInviteRequestController.$inject = ['leagueId', '$modalInstance', '$scope', '$log', 'userModel'];
module.exports = LeagueInviteRequestController;

},{}],131:[function(require,module,exports){

var PublicLeaguesController = function($scope, $log, $location, publicLeagues) {

    $scope.publicLeagues = publicLeagues.data;

    $scope.showLeague = function(league) {
      $location.path('/season/' + league.season_id + '/league/' + league.id);
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("public leagues controller");
    };
    init();

};

PublicLeaguesController.$inject = ['$scope', '$log', '$location', 'publicLeagues'];
module.exports = PublicLeaguesController;


},{}],132:[function(require,module,exports){
var PrivateLeaguesController = function(privateLeagues, $scope, $log, $location) {

    $scope.privateLeagues = privateLeagues.data;

    $scope.showLeague = function(league) {
      $location.path('/season/' + league.season_id + '/league/' + league.id);
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("private leagues controller");
    };
    init();

};

PrivateLeaguesController.$inject = ['privateLeagues', '$scope', '$log', '$location'];
module.exports = PrivateLeaguesController;


},{}],133:[function(require,module,exports){
var AdminGameEditController = function(game, $scope, $modalInstance) {

  $scope.gameData = angular.copy(game);

  $scope.closeStartsAt = function() {
    $scope.startsAtDropdown = {
      isopen: false
    };
  };
  $scope.closeStartsAt();

  $scope.editGame = function(game) {
    $modalInstance.close(game);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
  };
  init();
};

AdminGameEditController.$inject = ['game', '$scope', '$modalInstance'];
module.exports = AdminGameEditController;

},{}],134:[function(require,module,exports){
var AdminGameNewController = function(week, lastGame, squads, $scope, $modalInstance) {

  $scope.weekData = week;

  $scope.squads = squads.data;

  $scope.newGameData = {
    week_id: week.id,
    home_squad_id: squads.data[0].id,
    visiting_squad_id: squads.data[0].id,
    starts_at: (lastGame) ? lastGame.starts_at : moment().format()
  };

  $scope.closeStartsAt = function() {
    $scope.startsAtDropdown = {
      isopen: false
    };
  };
  $scope.closeStartsAt();

  $scope.createGame = function(game) {
    $modalInstance.close(game);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
  };
  init();
};

AdminGameNewController.$inject = ['week', 'lastGame', 'squads', '$scope', '$modalInstance'];
module.exports = AdminGameNewController;

},{}],135:[function(require,module,exports){
var AdminWeeksController = function(season, weeks, leagues, $scope, $location) {

  $scope.season = season.data;

  $scope.weeks = weeks.data;

  $scope.privateQuery = '';

  $scope.publicQuery = '';

  $scope.publicLeagues = _.filter(leagues.data, function(league) {
    return league.public;
  });

  $scope.privateLeagues = _.filter(leagues.data, function(league) {
    return !league.public;
  });

  $scope.showWeek = function(week) {
    $location.path($location.path() + '/weeks/' + week.id);
  };

  $scope.showLeague = function(league) {
    $location.path('/season/' + league.season_id + '/league/' + league.id);
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
  };
  init();
};

AdminWeeksController.$inject = ['season', 'weeks', 'leagues', '$scope', '$location'];
module.exports = AdminWeeksController;

},{}],136:[function(require,module,exports){
var AdminWeekEditController = function(week, weekTypes, $scope, $modalInstance) {

  $scope.weekData = angular.copy(week);

  $scope.weekTypes = weekTypes.data;

  $scope.closeStartsAt = function() {
    $scope.startsAtDropdown = {
      isopen: false
    };
  };
  $scope.closeStartsAt();

  $scope.closeEndsAt = function() {
    $scope.endsAtDropdown = {
      isopen: false
    };
  };
  $scope.closeEndsAt();

  $scope.editWeek = function(week) {
    $modalInstance.close(week);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  $scope.hasError = function(input) {
    return !input.$focused && input.$dirty && input.$invalid;
  };

  $scope.hasPropertyError = function(input, property) {
    return !input.$focused && input.$dirty && input.$error[property];
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
  };
  init();
};

AdminWeekEditController.$inject = ['week', 'weekTypes', '$scope', '$modalInstance'];
module.exports = AdminWeekEditController;

},{}],137:[function(require,module,exports){
var AdminSeasonNewController = function($scope, $modalInstance) {

  $scope.seasonTypes = [
    'NBA',
    'NFL',
    'NHL',
    'MLB'
  ];

  $scope.newSeasonData = {
    name: '',
    season_type: $scope.seasonTypes[0],
    starts_at: moment().format(),
    ends_at: moment().format()
  };

  $scope.closeStartsAt = function() {
    $scope.startsAtDropdown = {
      isopen: false
    };
  };
  $scope.closeStartsAt();

  $scope.closeEndsAt = function() {
    $scope.endsAtDropdown = {
      isopen: false
    };
  };
  $scope.closeEndsAt();

  $scope.createSeason = function(season) {
    $modalInstance.close(season);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  $scope.hasError = function(input) {
    return !input.$focused && input.$dirty && input.$invalid;
  };

  $scope.hasPropertyError = function(input, property) {
    return !input.$focused && input.$dirty && input.$error[property];
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
  };
  init();
};

AdminSeasonNewController.$inject = ['$scope', '$modalInstance'];
module.exports = AdminSeasonNewController;

},{}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvLnRtcC9hcHAtdGVtcGxhdGVzLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvYXBwLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL21vZGVscy9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9hcGkvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vY29tbWFuZC9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHVibGljL2hvbWUvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3B1YmxpYy9hYnVzZS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHVibGljL2ZhcS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHVibGljL3NpZ25pbi9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHVibGljL3JlZ2lzdGVyL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2ZpbHRlcnMvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdXNlci9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS90ZWFtL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3RlYW1zL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3BsYXkvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kdWxlcy9oZWFkZXIvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kdWxlcy9tZXNzYWdlL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL21vZHVsZXMvZm9vdGVyL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL21vZHVsZXMvY29uZmlybS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9zZXJ2aWNlL2FwcGxpY2F0aW9uL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL3NlcnZpY2UvdXRpbHMvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vZGlyZWN0aXZlcy9mb2N1cy9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9kaXJlY3RpdmVzL2Zvcm1hdHRlZERhdGUvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vZGlyZWN0aXZlcy9tYXRjaC9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9kaXJlY3RpdmVzL3JjU3VibWl0L2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2RpcmVjdGl2ZXMvcmNWZXJpZnlTZXQvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vZGlyZWN0aXZlcy9yZXF1aXJlZFBhdHRlcm4vaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vZGlyZWN0aXZlcy9zZWxlY3RPbkNsaWNrL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXIvdGVybXMvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdXNlci9yZXNldC9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbmV3L2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS92aWV3L2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9lZGl0L2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9jb250YWN0L2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9tZXNzYWdlL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9qb2luL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9pbnZpdGUvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvbWFuYWdlL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvbXkvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdGVhbS92aWV3L2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3RlYW0vZWRpdC9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS90ZWFtL21lc3NhZ2UvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdGVhbXMvYWxpdmUvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdGVhbXMvZGVhZC9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9wbGF5L2xlYWd1ZXMvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvcGxheS90ZWFtcy9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9waWNrL21ha2UvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi93ZWVrL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9pbnZpdGUvcmVxdWVzdC9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4vcHVibGljL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9wcml2YXRlL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2FkbWluL2dhbWUvZWRpdC9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9nYW1lL25ldy9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9zZWFzb25zL3NlYXNvbi9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi93ZWVrL2VkaXQvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9zZWFzb24vbmV3L2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL21vZGVscy9Vc2VyTW9kZWwuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kZWxzL01lc3NhZ2VNb2RlbC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9tb2RlbHMvU2Vhc29uTW9kZWwuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vYXBpL0FwaUNvbmZpZy5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9hcGkvR2FtZVNlcnZpY2UuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vYXBpL0xlYWd1ZVNlcnZpY2UuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vYXBpL1BpY2tTZXJ2aWNlLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FwaS9TZWFzb25TZXJ2aWNlLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FwaS9TcXVhZFNlcnZpY2UuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vYXBpL1RlYW1TZXJ2aWNlLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FwaS9Vc2VyU2VydmljZS5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9hcGkvV2Vla1NlcnZpY2UuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vY29tbWFuZC9zZXNzaW9uL1NpZ25pbkNvbW1hbmQuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vY29tbWFuZC9zZXNzaW9uL1NpZ25vdXRDb21tYW5kLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2NvbW1hbmQvdXNlci9HZXRDdXJyZW50VXNlckNvbW1hbmQuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3B1YmxpYy9ob21lL0hvbWVDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wdWJsaWMvYWJ1c2UvQWJ1c2VDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wdWJsaWMvZmFxL0ZhcUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3B1YmxpYy9zaWduaW4vU2lnbmluQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHVibGljL3JlZ2lzdGVyL1JlZ2lzdGVyQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9maWx0ZXJzL09mZnNldEZpbHRlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9maWx0ZXJzL0FjdGl2ZVRlYW1GaWx0ZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vZmlsdGVycy9BbGl2ZVRlYW1GaWx0ZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vZmlsdGVycy9PcGVuTGVhZ3VlRmlsdGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2ZpbHRlcnMvTWFuYWdlZExlYWd1ZUZpbHRlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9maWx0ZXJzL1RpbWVGaWx0ZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vZmlsdGVycy9XZWVrUGlja3NGaWx0ZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdXNlci9Vc2VyQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvTGVhZ3VlQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL0xlYWd1ZXNDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3RlYW0vVGVhbUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdGVhbXMvVGVhbXNDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3BsYXkvUGxheUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vQWRtaW5Db250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL21vZHVsZXMvaGVhZGVyL0hlYWRlckNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kdWxlcy9tZXNzYWdlL01lc3NhZ2VDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL21vZHVsZXMvZm9vdGVyL0Zvb3RlckNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kdWxlcy9jb25maXJtL0NvbmZpcm1Db250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2RpcmVjdGl2ZXMvZm9jdXMvRm9jdXNEaXJlY3RpdmUuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vc2VydmljZS9hcHBsaWNhdGlvbi9BcHBsaWNhdGlvblNlcnZpY2UuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vc2VydmljZS91dGlscy9EYXRlVXRpbHMuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vZGlyZWN0aXZlcy9tYXRjaC9NYXRjaERpcmVjdGl2ZS5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9kaXJlY3RpdmVzL2Zvcm1hdHRlZERhdGUvRm9ybWF0dGVkRGF0ZURpcmVjdGl2ZS5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9kaXJlY3RpdmVzL3JjU3VibWl0L1JDU3VibWl0RGlyZWN0aXZlLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2RpcmVjdGl2ZXMvcmNWZXJpZnlTZXQvUkNWZXJpZnlTZXREaXJlY3RpdmUuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vZGlyZWN0aXZlcy9yZXF1aXJlZFBhdHRlcm4vUmVxdWlyZWRQYXR0ZXJuRGlyZWN0aXZlLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2RpcmVjdGl2ZXMvc2VsZWN0T25DbGljay9TZWxlY3RPbkNsaWNrRGlyZWN0aXZlLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXIvdGVybXMvUmVnaXN0ZXJUZXJtc0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdXNlci9yZXNldC9Vc2VyUmVzZXRDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9uZXcvTmV3TGVhZ3VlQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvdmlldy9WaWV3TGVhZ3VlQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvZWRpdC9FZGl0TGVhZ3VlQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvY29udGFjdC9MZWFndWVDb250YWN0Q29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbWVzc2FnZS9MZWFndWVNZXNzYWdlQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvam9pbi9MZWFndWVKb2luQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlL0xlYWd1ZUludml0ZUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL0pvaW5MZWFndWVzQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL21hbmFnZS9NYW5hZ2VMZWFndWVzQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL215L015TGVhZ3Vlc0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdGVhbS92aWV3L1ZpZXdUZWFtQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS90ZWFtL2VkaXQvRWRpdFRlYW1Db250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3RlYW0vbWVzc2FnZS9UZWFtTWVzc2FnZUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdGVhbXMvYWxpdmUvQWxpdmVUZWFtc0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdGVhbXMvZGVhZC9EZWFkVGVhbXNDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3BsYXkvbGVhZ3Vlcy9QbGF5TGVhZ3Vlc0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvcGxheS90ZWFtcy9QbGF5VGVhbXNDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3BpY2svbWFrZS9QaWNrTWFrZUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9BZG1pblNlYXNvbnNDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2FkbWluL3dlZWsvQWRtaW5XZWVrQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlL3JlcXVlc3QvTGVhZ3VlSW52aXRlUmVxdWVzdENvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL3B1YmxpYy9QdWJsaWNMZWFndWVzQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4vcHJpdmF0ZS9Qcml2YXRlTGVhZ3Vlc0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vZ2FtZS9lZGl0L0FkbWluR2FtZUVkaXRDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2FkbWluL2dhbWUvbmV3L0FkbWluR2FtZU5ld0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9zZWFzb24vQWRtaW5TZWFzb25Db250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2FkbWluL3dlZWsvZWRpdC9BZG1pbldlZWtFZGl0Q29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9zZWFzb25zL3NlYXNvbi9uZXcvQWRtaW5TZWFzb25OZXdDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy92REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnYXBwLnRlbXBsYXRlcycsIFsnY29tbW9uL21vZHVsZXMvY29uZmlybS9jb25maXJtLnRwbC5odG1sJywgJ2NvbW1vbi9tb2R1bGVzL2Zvb3Rlci9mb290ZXIudHBsLmh0bWwnLCAnY29tbW9uL21vZHVsZXMvaGVhZGVyL2hlYWRlci50cGwuaHRtbCcsICdjb21tb24vbW9kdWxlcy9tZXNzYWdlL21lc3NhZ2UudHBsLmh0bWwnLCAnY29tbW9uL3RlbXBsYXRlcy9tYXN0ZXIudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2FkbWluL2FkbWluLnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9nYW1lL2VkaXQvYWRtaW4uZ2FtZS5lZGl0LnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9nYW1lL25ldy9hZG1pbi5nYW1lLm5ldy50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9hZG1pbi5zZWFzb25zLnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9zZWFzb25zL3NlYXNvbi9hZG1pbi5zZWFzb24udHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2FkbWluL3NlYXNvbnMvc2Vhc29uL25ldy9hZG1pbi5zZWFzb24ubmV3LnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9hZG1pbi93ZWVrL2FkbWluLndlZWsudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2FkbWluL3dlZWsvZWRpdC9hZG1pbi53ZWVrLmVkaXQudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9jb250YWN0L2xlYWd1ZS5jb250YWN0LnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvZWRpdC9sZWFndWUuZWRpdC50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2ludml0ZS9sZWFndWUuaW52aXRlLnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlL3JlcXVlc3QvbGVhZ3VlLmludml0ZS5yZXF1ZXN0LnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvam9pbi9sZWFndWUuam9pbi50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2xlYWd1ZS50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL21lc3NhZ2UvbGVhZ3VlLm1lc3NhZ2UudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9uZXcvbGVhZ3VlLm5ldy50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL3ZpZXcvbGVhZ3VlLnZpZXcudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9sZWFndWVzLmpvaW4udHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9wcml2YXRlL2xlYWd1ZXMuam9pbi5wcml2YXRlLnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4vcHVibGljL2xlYWd1ZXMuam9pbi5wdWJsaWMudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvbGVhZ3Vlcy50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9tYW5hZ2UvbGVhZ3Vlcy5tYW5hZ2UudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvbXkvbGVhZ3Vlcy5teS50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvcGljay9tYWtlL3BpY2subWFrZS50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvcGxheS9sZWFndWVzL3BsYXkubGVhZ3Vlcy50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvcGxheS9wbGF5LnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9wbGF5L3RlYW1zL3BsYXkudGVhbXMudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL3RlYW0vZWRpdC90ZWFtLmVkaXQudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL3RlYW0vbWVzc2FnZS90ZWFtLm1lc3NhZ2UudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL3RlYW0vdGVhbS50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvdGVhbS92aWV3L3RlYW0udmlldy50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvdGVhbXMvYWxpdmUvdGVhbXMuYWxpdmUudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL3RlYW1zL2RlYWQvdGVhbXMuZGVhZC50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvdGVhbXMvdGVhbXMudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL3VzZXIvcmVzZXQvdXNlci5yZXNldC50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvdXNlci91c2VyLnRwbC5odG1sJywgJ21vZHVsZXMvcHVibGljL2FidXNlL2FidXNlLnRwbC5odG1sJywgJ21vZHVsZXMvcHVibGljL2ZhcS9mYXEudHBsLmh0bWwnLCAnbW9kdWxlcy9wdWJsaWMvaG9tZS9ob21lLnRwbC5odG1sJywgJ21vZHVsZXMvcHVibGljL3JlZ2lzdGVyL3JlZ2lzdGVyLnRwbC5odG1sJywgJ21vZHVsZXMvcHVibGljL3JlZ2lzdGVyL3Rlcm1zL3JlZ2lzdGVyLnRlcm1zLnRwbC5odG1sJywgJ21vZHVsZXMvcHVibGljL3NpZ25pbi9zaWduaW4udHBsLmh0bWwnXSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwiY29tbW9uL21vZHVsZXMvY29uZmlybS9jb25maXJtLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwiY29tbW9uL21vZHVsZXMvY29uZmlybS9jb25maXJtLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5Db25maXJtIEFjdGlvbjwvaDQ+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8cD57e21lc3NhZ2V9fTwvcD5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPk5vPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJjb25maXJtKClcXFwiPlllczwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJjb21tb24vbW9kdWxlcy9mb290ZXIvZm9vdGVyLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwiY29tbW9uL21vZHVsZXMvZm9vdGVyL2Zvb3Rlci50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBpZD1cXFwibWVudVxcXCI+XFxuXCIgK1xuICAgIFwiICA8aDE+PGEgbmctY2xpY2s9XFxcImhvbWUoKVxcXCI+TE9HSDwvYT48L2gxPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwibGlua3NcXFwiPlxcblwiICtcbiAgICBcIiAgICA8c3BhbiBzdHlsZT1cXFwidGV4dC10cmFuc2Zvcm06IG5vbmU7XFxcIj7CqSAyMDE1IEZsZXhkZXZlbG9wZXJzLmNvbSBMTEM8L3NwYW4+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwiY29tbW9uL21vZHVsZXMvaGVhZGVyL2hlYWRlci50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcImNvbW1vbi9tb2R1bGVzL2hlYWRlci9oZWFkZXIudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJuYXZiYXItaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGJ1dHRvbiBjbGFzcz1cXFwibmF2YmFyLXRvZ2dsZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBuZy1jbGljaz1cXFwiaXNDb2xsYXBzZWQgPSAhaXNDb2xsYXBzZWRcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgIDxhIGNsYXNzPVxcXCJuYXZiYXItYnJhbmRcXFwiIG5nLWNsaWNrPVxcXCJob21lKClcXFwiPjxiPkxPU0U8L2I+T1I8Yj5HTzwvYj5IT01FPC9hPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNvbGxhcHNlPVxcXCJpc0NvbGxhcHNlZFxcXCIgY2xhc3M9XFxcIm5hdmJhci1jb2xsYXBzZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDx1bCBuZy1zaG93PVxcXCJ1c2VyRGF0YS51c2VyLmxvYWRlZFxcXCIgY2xhc3M9XFxcIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxpIG5nLWNsYXNzPVxcXCJ7J2FjdGl2ZSc6IGlzU3RhdGUoWydwcml2YXRlLnBsYXkudGVhbXMnLCAncHJpdmF0ZS5wbGF5LmxlYWd1ZXMnXSl9XFxcIj48YSBuZy1jbGljaz1cXFwicGxheShzZWxlY3RlZFNlYXNvbklkKVxcXCI+TXkgVGVhbXMgJiBMZWFndWVzPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgPGxpIG5nLWNsYXNzPVxcXCJ7J2FjdGl2ZSc6IGlzU3RhdGUoWydwcml2YXRlLmxlYWd1ZXMuam9pbi5wdWJsaWMnLCAncHJpdmF0ZS5sZWFndWVzLmpvaW4ucHJpdmF0ZSddKX1cXFwiPjxhIG5nLWNsaWNrPVxcXCJqb2luTGVhZ3VlKHNlbGVjdGVkU2Vhc29uSWQpXFxcIj5Kb2luIExlYWd1ZTwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgIDxsaT48YSBuZy1jbGljaz1cXFwiY3JlYXRlTGVhZ3VlKHNlbGVjdGVkU2Vhc29uSWQpXFxcIj5DcmVhdGUgTGVhZ3VlPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgPGxpPjxhIG5nLWNsaWNrPVxcXCJmYXEoKVxcXCI+RkFRPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgPGxpIGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1jb2cgZmEtZncgc2V0dGluZ3MtaWNvblxcXCIgdGl0bGU9XFxcIlVzZXIgU2V0dGluZ3NcXFwiPjwvaT4gPGIgY2xhc3M9XFxcImNhcmV0XFxcIj48L2I+PC9hPlxcblwiICtcbiAgICBcIiAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxpPjxhIG5nLWNsaWNrPVxcXCJjb250YWN0VXMoKVxcXCI+Q29udGFjdCBVczwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGkgY2xhc3M9XFxcImRpdmlkZXJcXFwiPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsaT48YSBuZy1jbGljaz1cXFwidXNlclByb2ZpbGUoKVxcXCI+VXNlciBQcm9maWxlPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsaT48YSBuZy1jbGljaz1cXFwic2lnbm91dCgpXFxcIj5TaWduIE91dDwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgICAgPC91bD5cXG5cIiArXG4gICAgXCIgICAgICA8L2xpPlxcblwiICtcbiAgICBcIiAgICA8L3VsPlxcblwiICtcbiAgICBcIiAgICA8dWwgbmctc2hvdz1cXFwiIXVzZXJEYXRhLnVzZXIubG9hZGVkXFxcIiBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGk+PGEgbmctY2xpY2s9XFxcImZhcSgpXFxcIj5GQVE8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICA8bGk+PGEgbmctY2xpY2s9XFxcInJlZ2lzdGVyKClcXFwiPlJlZ2lzdGVyPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgPGxpIGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8YSBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiBocmVmPVxcXCIjXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiPlNpZ24gSW48L3N0cm9uZz48L2E+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1tZW51IHBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmxpbmUtc2lnbmluLWZvcm0gcGFuZWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGZvcm0gbmFtZT1cXFwiaW5saW5lU2lnbmluRm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbmctc3VibWl0PVxcXCJzaWduaW4oeyBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwudG9Mb3dlckNhc2UoKSwgcGFzc3dvcmQ6IGNyZWRlbnRpYWxzLnBhc3N3b3JkIH0pOyAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1lbnZlbG9wZSBmYS1md1xcXCI+PC9pPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIiBzdHlsZT1cXFwiY3Vyc29yOmF1dG87XFxcIiBwbGFjZWhvbGRlcj1cXFwiRW1haWxcXFwiIG5nLW1vZGVsPVxcXCJjcmVkZW50aWFscy5lbWFpbFxcXCIgbmctY2xpY2s9XFxcIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcXFwiIHJjLXZlcmlmeS1zZXQgYXV0b2ZvY3VzIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1rZXkgZmEtZndcXFwiPjwvaT48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCIgc3R5bGU9XFxcImN1cnNvcjphdXRvO1xcXCIgcGxhY2Vob2xkZXI9XFxcIlBhc3N3b3JkXFxcIiBuZy1tb2RlbD1cXFwiY3JlZGVudGlhbHMucGFzc3dvcmRcXFwiIG5nLWNsaWNrPVxcXCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XFxcIiByYy12ZXJpZnktc2V0IHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPGRpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImZvcmdvdC1wYXNzd29yZCBidG4gYnRuLWxpbmsgcHVsbC1sZWZ0XFxcIiByb2xlPVxcXCJidXR0b25cXFwiIG5nLWNsaWNrPVxcXCJyZXNldFBhc3N3b3JkKClcXFwiPkZvcmdvdCBQYXNzd29yZD88L2E+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwic2lnbi1pbi1idG4gYnRuIGJ0bi1wcmltYXJ5IHB1bGwtcmlnaHRcXFwiIG5nLWRpc2FibGVkPVxcXCJpbmxpbmVTaWduaW5Gb3JtLiRpbnZhbGlkXFxcIj5TaWduIGluPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XFxcImNsZWFyOiBib3RoO1xcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8aHI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyZWdpc3RlclxcXCI+PGEgbmctY2xpY2s9XFxcInJlZ2lzdGVyKClcXFwiPkRvbid0IGhhdmUgYW4gYWNjb3VudD8gPHN0cm9uZz5SZWdpc3Rlcjwvc3Ryb25nPjwvYT48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9saT5cXG5cIiArXG4gICAgXCIgICAgPC91bD5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJjb21tb24vbW9kdWxlcy9tZXNzYWdlL21lc3NhZ2UudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJjb21tb24vbW9kdWxlcy9tZXNzYWdlL21lc3NhZ2UudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRpc21pc3NhYmxlIGFsZXJ0LXt7bWVzc2FnZURhdGEubWVzc2FnZS50eXBlfX1cXFwiIG5nLXNob3c9XFxcIm1lc3NhZ2VEYXRhLm1lc3NhZ2UubG9hZGVkXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGRhdGEtZGlzbWlzcz1cXFwiYWxlcnRcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiBuZy1jbGljaz1cXFwiZGlzbWlzc01lc3NhZ2UobWVzc2FnZURhdGEpXFxcIj4mdGltZXM7PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICB7e21lc3NhZ2VEYXRhLm1lc3NhZ2UuY29udGVudH19XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcImNvbW1vbi90ZW1wbGF0ZXMvbWFzdGVyLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwiY29tbW9uL3RlbXBsYXRlcy9tYXN0ZXIudHBsLmh0bWxcIixcbiAgICBcIjwhLS0gSGVhZGVyIC0tPlxcblwiICtcbiAgICBcIjxuYXYgY2xhc3M9XFxcIm5hdmJhciBuYXZiYXItaW52ZXJzZVxcXCIgdWktdmlldz1cXFwiaGVhZGVyXFxcIj48L25hdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgPCEtLSBNZXNzYWdlIC0tPlxcblwiICtcbiAgICBcIiAgPGRpdiB1aS12aWV3PVxcXCJtZXNzYWdlXFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCIgIDwhLS0gQ29udGVudCAtLT5cXG5cIiArXG4gICAgXCIgIDxkaXYgdWktdmlldz1cXFwiY29udGVudFxcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiPCEtLSBGb290ZXIgLS0+XFxuXCIgK1xuICAgIFwiPGZvb3RlciBjbGFzcz1cXFwiZm9vdGVyXFxcIiB1aS12aWV3PVxcXCJmb290ZXJcXFwiPjwvZm9vdGVyPlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvYWRtaW4vYWRtaW4udHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvYWRtaW4vYWRtaW4udHBsLmh0bWxcIixcbiAgICBcIjxkaXYgdWktdmlldz1cXFwiYWRtaW5Db250ZW50XFxcIiBjbGFzcz1cXFwiYWRtaW4tY29udGVudFxcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9hZG1pbi9nYW1lL2VkaXQvYWRtaW4uZ2FtZS5lZGl0LnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2FkbWluL2dhbWUvZWRpdC9hZG1pbi5nYW1lLmVkaXQudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkVkaXQgR2FtZTwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8aDQ+e3tnYW1lRGF0YS5kaXNwbGF5fX08L2g0PlxcblwiICtcbiAgICBcIiAgPGZvcm0gc3R5bGU9XFxcInBhZGRpbmc6IDEwcHg7XFxcIiBuYW1lPVxcXCJlZGl0R2FtZUZvcm1cXFwiIGNsYXNzPVxcXCJlZGl0LWdhbWUtZm9ybSBmb3JtLWhvcml6b250YWxcXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLXNtLTYgY29udHJvbC1sYWJlbFxcXCI+U3RhcnRzIEF0IChMb2NhbCBUaW1lKTo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duXFxcIiBpcy1vcGVuPVxcXCJzdGFydHNBdERyb3Bkb3duLmlzb3BlblxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxhIGNsYXNzPVxcXCJkcm9wZG93bi10b2dnbGVcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCIgZGF0YS10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBkYXRhLXRhcmdldD1cXFwiI1xcXCIgaHJlZj1cXFwiI1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGZvcm1hdHRlZC1kYXRlIGRhdGEtbmctbW9kZWw9XFxcImdhbWVEYXRhLnN0YXJ0c19hdFxcXCIgbmctcmVxdWlyZWQ9XFxcInRydWVcXFwiIG5nLWRpc2FibGVkPVxcXCJ0cnVlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+PGkgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tY2FsZW5kYXJcXFwiPjwvaT48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvYT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIiByb2xlPVxcXCJtZW51XFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcImRMYWJlbFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGRhdGV0aW1lcGlja2VyIGRhdGEtbmctbW9kZWw9XFxcImdhbWVEYXRhLnN0YXJ0c19hdFxcXCIgZGF0YS1vbi1zZXQtdGltZT1cXFwiY2xvc2VTdGFydHNBdCgpXFxcIiBkYXRhLWRhdGV0aW1lcGlja2VyLWNvbmZpZz1cXFwieyBtaW51dGVTdGVwOiAxIH1cXFwiLz5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC91bD5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGZvcj1cXFwib3ZlcnRpbWVcXFwiIGNsYXNzPVxcXCJjb2wtc20tNiBjb250cm9sLWxhYmVsXFxcIj5PdmVydGltZTo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxpbnB1dCBpZD1cXFwib3ZlcnRpbWVcXFwiIG5hbWU9XFxcIm92ZXJ0aW1lXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcImdhbWVEYXRhLm92ZXJ0aW1lXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBmb3I9XFxcInZpc2l0b3JTY29yZVxcXCIgY2xhc3M9XFxcImNvbC1zbS02IGNvbnRyb2wtbGFiZWxcXFwiPnt7Z2FtZURhdGEuc3F1YWRzWzBdLm5hbWV9fSBTY29yZTo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxpbnB1dCBpZD1cXFwidmlzaXRvclNjb3JlXFxcIiBuYW1lPVxcXCJ2aXNpdG9yU2NvcmVcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcImdhbWVEYXRhLnZpc2l0aW5nX3NxdWFkX3Njb3JlXFxcIiBzZWxlY3Qtb24tY2xpY2sgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgZm9yPVxcXCJob21lU2NvcmVcXFwiIGNsYXNzPVxcXCJjb2wtc20tNiBjb250cm9sLWxhYmVsXFxcIj57e2dhbWVEYXRhLnNxdWFkc1sxXS5uYW1lfX0gU2NvcmU6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8aW5wdXQgaWQ9XFxcImhvbWVTY29yZVxcXCIgbmFtZT1cXFwiaG9tZVNjb3JlXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJnYW1lRGF0YS5ob21lX3NxdWFkX3Njb3JlXFxcIiBzZWxlY3Qtb24tY2xpY2sgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgZm9yPVxcXCJjb21wbGV0ZVxcXCIgY2xhc3M9XFxcImNvbC1zbS02IGNvbnRyb2wtbGFiZWxcXFwiPkNvbXBsZXRlZDo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxpbnB1dCBpZD1cXFwiY29tcGxldGVcXFwiIG5hbWU9XFxcImNvbXBsZXRlXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcImdhbWVEYXRhLmNvbXBsZXRlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctZGlzYWJsZWQ9XFxcImVkaXRHYW1lRm9ybS4kaW52YWxpZFxcXCIgbmctY2xpY2s9XFxcImVkaXRHYW1lKGdhbWVEYXRhKVxcXCI+VXBkYXRlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9hZG1pbi9nYW1lL25ldy9hZG1pbi5nYW1lLm5ldy50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9hZG1pbi9nYW1lL25ldy9hZG1pbi5nYW1lLm5ldy50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+Q3JlYXRlIEdhbWU8L2gzPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgPGg0Pnt7d2Vla0RhdGEuZGlzcGxheX19IHwge3t3ZWVrRGF0YS50eXBlfX08L2g0PlxcblwiICtcbiAgICBcIiAgPGhyPlxcblwiICtcbiAgICBcIiAgPGZvcm0gbmFtZT1cXFwibmV3R2FtZUZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJ2aXNpdGluZ1NxdWFkXFxcIj5WaXNpdGluZyBTcXVhZDo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxzZWxlY3QgaWQ9XFxcInZpc2l0aW5nU3F1YWRcXFwiIG5hbWU9XFxcInZpc2l0aW5nU3F1YWRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJuZXdHYW1lRGF0YS52aXNpdGluZ19zcXVhZF9pZFxcXCIgbmctb3B0aW9ucz1cXFwic3F1YWQuaWQgYXMgc3F1YWQubmFtZSBmb3Igc3F1YWQgaW4gc3F1YWRzXFxcIj48L3NlbGVjdD5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJob21lU3F1YWRcXFwiPkhvbWUgU3F1YWQ6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8c2VsZWN0IGlkPVxcXCJob21lU3F1YWRcXFwiIG5hbWU9XFxcImhvbWVTcXVhZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcIm5ld0dhbWVEYXRhLmhvbWVfc3F1YWRfaWRcXFwiIG5nLW9wdGlvbnM9XFxcInNxdWFkLmlkIGFzIHNxdWFkLm5hbWUgZm9yIHNxdWFkIGluIHNxdWFkc1xcXCI+PC9zZWxlY3Q+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiPlN0YXJ0cyBBdCAoTG9jYWwgVGltZSk6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93blxcXCIgaXMtb3Blbj1cXFwic3RhcnRzQXREcm9wZG93bi5pc29wZW5cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGEgY2xhc3M9XFxcImRyb3Bkb3duLXRvZ2dsZVxcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGRhdGEtdGFyZ2V0PVxcXCIjXFxcIiBocmVmPVxcXCIjXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBmb3JtYXR0ZWQtZGF0ZSBkYXRhLW5nLW1vZGVsPVxcXCJuZXdHYW1lRGF0YS5zdGFydHNfYXRcXFwiIG5nLXJlcXVpcmVkPVxcXCJ0cnVlXFxcIiBuZy1kaXNhYmxlZD1cXFwidHJ1ZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWFkZG9uXFxcIj48aSBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jYWxlbmRhclxcXCI+PC9pPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2E+XFxuXCIgK1xuICAgIFwiICAgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiIHJvbGU9XFxcIm1lbnVcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwiZExhYmVsXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGRhdGV0aW1lcGlja2VyIGRhdGEtbmctbW9kZWw9XFxcIm5ld0dhbWVEYXRhLnN0YXJ0c19hdFxcXCIgZGF0YS1vbi1zZXQtdGltZT1cXFwiY2xvc2VTdGFydHNBdCgpXFxcIiBkYXRhLWRhdGV0aW1lcGlja2VyLWNvbmZpZz1cXFwieyBtaW51dGVTdGVwOiAxIH1cXFwiLz5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvdWw+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPCEtLTxpbnB1dCBpZD1cXFwiZ2FtZVRpbWVcXFwiIG5hbWU9XFxcImdhbWVUaW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwibmV3R2FtZURhdGEuc3RhcnRzX2F0XFxcIiByZXF1aXJlZD4tLT5cXG5cIiArXG4gICAgXCIgICAgICA8IS0tPHNtYWxsPjIwMTQtMTItMDdUMTM6MDA6MDAuMDAwLTA3OjAwPC9zbWFsbD4tLT5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctZGlzYWJsZWQ9XFxcIm5ld0dhbWVGb3JtLiRpbnZhbGlkXFxcIiBuZy1jbGljaz1cXFwiY3JlYXRlR2FtZShuZXdHYW1lRGF0YSlcXFwiPkNyZWF0ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9hZG1pbi5zZWFzb25zLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2FkbWluL3NlYXNvbnMvYWRtaW4uc2Vhc29ucy50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwic2Vhc29ucy1oZWFkZXItcm93IHJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxoMz5TZWFzb25zPC9oMz5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJzZWFzb25zLWJ0bi1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjcmVhdGUtc2Vhc29uLWJ0biBidG4gYnRuLXByaW1hcnlcXFwiIG5nLWNsaWNrPVxcXCJjcmVhdGVTZWFzb24oKVxcXCI+Q3JlYXRlIFNlYXNvbjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcInNlYXNvbnMgbGlzdC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICA8YSBuZy1yZXBlYXQ9XFxcInNlYXNvbiBpbiBzZWFzb25zXFxcIiBuZy1jbGljaz1cXFwic2hvd1NlYXNvbihzZWFzb24pXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWNoZWNrIGZhLWZ3XFxcIiBuZy1zaG93PVxcXCJzZWFzb24uY3VycmVudCA9PT0gdHJ1ZVxcXCIgdGl0bGU9XFxcImN1cnJlbnQgc2Vhc29uXFxcIj48L2k+IHt7c2Vhc29uLm5hbWV9fTxicj48c3BhbiBjbGFzcz1cXFwic3RhcnQtZW5kXFxcIj5TdGFydHM6IHt7c2Vhc29uLnN0YXJ0X2Rpc3BsYXl9fSB8IEVuZHM6IHt7c2Vhc29uLmVuZF9kaXNwbGF5fX08L3NwYW4+PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJhZGdlXFxcIj57e3NlYXNvbi53ZWVrX2NvdW50fX0gd2VlazxzcGFuIG5nLXNob3c9XFxcInNlYXNvbi53ZWVrX2NvdW50ICE9PSAxXFxcIj5zPC9zcGFuPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2E+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9hZG1pbi9zZWFzb25zL3NlYXNvbi9hZG1pbi5zZWFzb24udHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9zZWFzb24vYWRtaW4uc2Vhc29uLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJwYWdlLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8aDM+e3tzZWFzb24ubmFtZX19ICh7e3NlYXNvbi5zdGFydF9kaXNwbGF5fX0gLSB7e3NlYXNvbi5lbmRfZGlzcGxheX19KTwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwic2Vhc29uLXdlZWtzLWhlYWRlci1yb3cgcm93XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICA8aDQ+V2Vla3MgWyB7e3dlZWtzLmxlbmd0aH19IF08L2g0PlxcblwiICtcbiAgICBcIiAgICA8aHI+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJzZWFzb24td2Vla3MgbGlzdC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICA8YSBuZy1yZXBlYXQ9XFxcIndlZWsgaW4gd2Vla3NcXFwiIG5nLWNsaWNrPVxcXCJzaG93V2Vlayh3ZWVrKVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1jaGVjayBmYS1md1xcXCIgbmctc2hvdz1cXFwid2Vlay5jb21wbGV0ZSA9PT0gdHJ1ZVxcXCIgdGl0bGU9XFxcImNvbXBsZXRlIHdlZWtcXFwiPjwvaT4ge3t3ZWVrLmRpc3BsYXl9fTwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcInN0YXJ0LWVuZCBjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYmFkZ2VcXFwiPnt7d2Vlay5nYW1lX2NvdW50fX0gZ2FtZTxzcGFuIG5nLXNob3c9XFxcIndlZWsuZ2FtZV9jb3VudCAhPT0gMVxcXCI+czwvc3Bhbj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9hPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcInNlYXNvbi1sZWFndWVzLWhlYWRlci1yb3cgcm93XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICA8aDQ+UHVibGljIExlYWd1ZXMgWyB7e3B1YmxpY0xlYWd1ZXMubGVuZ3RofX0gXTwvaDQ+XFxuXCIgK1xuICAgIFwiICAgIDxocj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRmlsdGVyIHB1YmxpYyBsZWFndWVzLi4uXFxcIiBuZy1tb2RlbD1cXFwicHVibGljUXVlcnlcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1idG5cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tc2VhcmNoXFxcIj48L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgICAgPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcInNlYXNvbi1sZWFndWVzIGxpc3QtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgPGEgbmctcmVwZWF0PVxcXCJwdWJsaWNMZWFndWUgaW4gcHVibGljTGVhZ3VlcyB8IGZpbHRlcjpwdWJsaWNRdWVyeTpzdHJpY3RcXFwiIG5nLWNsaWNrPVxcXCJzaG93TGVhZ3VlKHB1YmxpY0xlYWd1ZSlcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImxlYWd1ZS1uYW1lIGNvbC1zbS02IGNvbC1tZC02XFxcIj57e3B1YmxpY0xlYWd1ZS5uYW1lfX08YnI+PHNwYW4gY2xhc3M9XFxcInRlYW0tY291bnQgbGVhZ3VlLWNvbW1pc2hcXFwiPkNvbW1pc2g6IHt7cHVibGljTGVhZ3VlLmNvbW1pc2hfbmFtZXMuam9pbignLCAnKX19PC9zcGFuPjwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJwdWJsaWMtbGVhZ3VlLW1ldGFcXFwiPjxzcGFuIG5nLXNob3c9XFxcInB1YmxpY0xlYWd1ZS5lbGltaW5hdGlvblxcXCI+PHNwYW4gY2xhc3M9XFxcImxvc2VvcmdvaG9tZVxcXCI+TG9zZU9yR29Ib21lPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJsb2doXFxcIj5MT0dIPC9zcGFuPiBbIHNpbmdsZSBlbGltaW5hdGlvbiBdPC9zcGFuPjxzcGFuIG5nLXNob3c9XFxcIiFwdWJsaWNMZWFndWUuZWxpbWluYXRpb25cXFwiPkJpZ2dlc3QgTG9zZXIgWyBubyBlbGltaW5hdGlvbiBdPC9zcGFuPjxicj5TdGFydHMge3twdWJsaWNMZWFndWUuc3RhcnRfd2Vla319PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJhZGdlXFxcIj48c3BhbiBuZy1zaG93PVxcXCJwdWJsaWNMZWFndWUuZWxpbWluYXRpb25cXFwiPnt7cHVibGljTGVhZ3VlLmFsaXZlX3RlYW1fY291bnR9fS88L3NwYW4+e3twdWJsaWNMZWFndWUudGVhbV9jb3VudH19IHRlYW08c3BhbiBuZy1zaG93PVxcXCJwdWJsaWNMZWFndWUudGVhbV9jb3VudCAhPT0gMVxcXCI+czwvc3Bhbj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9hPlxcblwiICtcbiAgICBcIjwvZGl2PjxkaXYgY2xhc3M9XFxcInNlYXNvbi1sZWFndWVzLWhlYWRlci1yb3cgcm93XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICA8aDQ+UHJpdmF0ZSBMZWFndWVzIFsge3twcml2YXRlTGVhZ3Vlcy5sZW5ndGh9fSBdPC9oND5cXG5cIiArXG4gICAgXCIgICAgPGhyPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJGaWx0ZXIgcHJpdmF0ZSBsZWFndWVzLi4uXFxcIiBuZy1tb2RlbD1cXFwicHJpdmF0ZVF1ZXJ5XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYnRuXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXNlYXJjaFxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICAgIDwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJzZWFzb24tbGVhZ3VlcyBsaXN0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgIDxhIG5nLXJlcGVhdD1cXFwicHJpdmF0ZUxlYWd1ZSBpbiBwcml2YXRlTGVhZ3VlcyB8IGZpbHRlcjpwcml2YXRlUXVlcnk6c3RyaWN0XFxcIiBuZy1jbGljaz1cXFwic2hvd0xlYWd1ZShwcml2YXRlTGVhZ3VlKVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwibGVhZ3VlLW5hbWUgY29sLXNtLTYgY29sLW1kLTZcXFwiPnt7cHJpdmF0ZUxlYWd1ZS5uYW1lfX08YnI+PHNwYW4gY2xhc3M9XFxcInRlYW0tY291bnQgbGVhZ3VlLWNvbW1pc2hcXFwiPkNvbW1pc2g6IHt7cHJpdmF0ZUxlYWd1ZS5jb21taXNoX25hbWVzLmpvaW4oJywgJyl9fTwvc3Bhbj48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBjbGFzcz1cXFwicHJpdmF0ZS1sZWFndWUtbWV0YVxcXCI+PHNwYW4gbmctc2hvdz1cXFwicHJpdmF0ZUxlYWd1ZS5lbGltaW5hdGlvblxcXCI+PHNwYW4gY2xhc3M9XFxcImxvc2VvcmdvaG9tZVxcXCI+TG9zZU9yR29Ib21lPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJsb2doXFxcIj5MT0dIPC9zcGFuPiBbIHNpbmdsZSBlbGltaW5hdGlvbiBdPC9zcGFuPjxzcGFuIG5nLXNob3c9XFxcIiFwcml2YXRlTGVhZ3VlLmVsaW1pbmF0aW9uXFxcIj5CaWdnZXN0IExvc2VyIFsgbm8gZWxpbWluYXRpb24gXTwvc3Bhbj48YnI+U3RhcnRzIHt7cHJpdmF0ZUxlYWd1ZS5zdGFydF93ZWVrfX08L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYmFkZ2VcXFwiPjxzcGFuIG5nLXNob3c9XFxcInByaXZhdGVMZWFndWUuZWxpbWluYXRpb25cXFwiPnt7cHJpdmF0ZUxlYWd1ZS5hbGl2ZV90ZWFtX2NvdW50fX0vPC9zcGFuPnt7cHJpdmF0ZUxlYWd1ZS50ZWFtX2NvdW50fX0gdGVhbTxzcGFuIG5nLXNob3c9XFxcInByaXZhdGVMZWFndWUudGVhbV9jb3VudCAhPT0gMVxcXCI+czwvc3Bhbj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9hPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9zZWFzb24vbmV3L2FkbWluLnNlYXNvbi5uZXcudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9zZWFzb24vbmV3L2FkbWluLnNlYXNvbi5uZXcudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkNyZWF0ZSBTZWFzb248L2gzPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgPGZvcm0gbmFtZT1cXFwibmV3U2Vhc29uRm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZT5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IobmV3U2Vhc29uRm9ybS5zZWFzb25OYW1lKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKG5ld1NlYXNvbkZvcm0uc2Vhc29uTmFtZSl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwic2Vhc29uTmFtZVxcXCI+U2Vhc29uIG5hbWU6XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihuZXdTZWFzb25Gb3JtLnNlYXNvbk5hbWUsICdyZXF1aXJlZCcpXFxcIj5bIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobmV3U2Vhc29uRm9ybS5zZWFzb25OYW1lLCAnbWF4bGVuZ3RoJylcXFwiPlsgVG9vIExvbmcgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8aW5wdXQgaWQ9XFxcInNlYXNvbk5hbWVcXFwiIG5hbWU9XFxcInNlYXNvbk5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJuZXdTZWFzb25EYXRhLm5hbWVcXFwiIG5nLW1heGxlbmd0aD1cXFwiMzBcXFwiIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKG5ld1NlYXNvbkZvcm0uc2Vhc29uTmFtZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJzZWFzb25UeXBlXFxcIj5TZWFzb24gVHlwZTo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxzZWxlY3QgaWQ9XFxcInNlYXNvblR5cGVcXFwiIG5hbWU9XFxcInNlYXNvblR5cGVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJuZXdTZWFzb25EYXRhLnNlYXNvbl90eXBlXFxcIiBuZy1vcHRpb25zPVxcXCJzZWFzb25UeXBlIGFzIHNlYXNvblR5cGUgZm9yIHNlYXNvblR5cGUgaW4gc2Vhc29uVHlwZXNcXFwiIHJlcXVpcmVkPjwvc2VsZWN0PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIj5TdGFydHMgQXQgKExvY2FsIFRpbWUpOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiIGlzLW9wZW49XFxcInN0YXJ0c0F0RHJvcGRvd24uaXNvcGVuXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxhIGNsYXNzPVxcXCJkcm9wZG93bi10b2dnbGVcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCIgZGF0YS10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBkYXRhLXRhcmdldD1cXFwiI1xcXCIgaHJlZj1cXFwiI1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZm9ybWF0dGVkLWRhdGUgZGF0YS1uZy1tb2RlbD1cXFwibmV3U2Vhc29uRGF0YS5zdGFydHNfYXRcXFwiIG5nLXJlcXVpcmVkPVxcXCJ0cnVlXFxcIiBuZy1kaXNhYmxlZD1cXFwidHJ1ZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWFkZG9uXFxcIj48aSBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jYWxlbmRhclxcXCI+PC9pPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2E+XFxuXCIgK1xuICAgIFwiICAgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiIHJvbGU9XFxcIm1lbnVcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwiZExhYmVsXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGRhdGV0aW1lcGlja2VyIGRhdGEtbmctbW9kZWw9XFxcIm5ld1NlYXNvbkRhdGEuc3RhcnRzX2F0XFxcIiBkYXRhLW9uLXNldC10aW1lPVxcXCJjbG9zZVN0YXJ0c0F0KClcXFwiIGRhdGEtZGF0ZXRpbWVwaWNrZXItY29uZmlnPVxcXCJ7IG1pbnV0ZVN0ZXA6IDUgfVxcXCIvPlxcblwiICtcbiAgICBcIiAgICAgICAgPC91bD5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCI+RW5kcyBBdCAoTG9jYWwgVGltZSk6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93blxcXCIgaXMtb3Blbj1cXFwiZW5kc0F0RHJvcGRvd24uaXNvcGVuXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxhIGNsYXNzPVxcXCJkcm9wZG93bi10b2dnbGVcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCIgZGF0YS10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBkYXRhLXRhcmdldD1cXFwiI1xcXCIgaHJlZj1cXFwiI1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZm9ybWF0dGVkLWRhdGUgZGF0YS1uZy1tb2RlbD1cXFwibmV3U2Vhc29uRGF0YS5lbmRzX2F0XFxcIiBuZy1yZXF1aXJlZD1cXFwidHJ1ZVxcXCIgbmctZGlzYWJsZWQ9XFxcInRydWVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+PGkgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tY2FsZW5kYXJcXFwiPjwvaT48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPC9hPlxcblwiICtcbiAgICBcIiAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIiByb2xlPVxcXCJtZW51XFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcImRMYWJlbFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxkYXRldGltZXBpY2tlciBkYXRhLW5nLW1vZGVsPVxcXCJuZXdTZWFzb25EYXRhLmVuZHNfYXRcXFwiIGRhdGEtb24tc2V0LXRpbWU9XFxcImNsb3NlRW5kc0F0KClcXFwiIGRhdGEtZGF0ZXRpbWVwaWNrZXItY29uZmlnPVxcXCJ7IG1pbnV0ZVN0ZXA6IDUgfVxcXCIvPlxcblwiICtcbiAgICBcIiAgICAgICAgPC91bD5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctZGlzYWJsZWQ9XFxcIm5ld1NlYXNvbkZvcm0uJGludmFsaWRcXFwiIG5nLWNsaWNrPVxcXCJjcmVhdGVTZWFzb24obmV3U2Vhc29uRGF0YSlcXFwiPkNyZWF0ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvYWRtaW4vd2Vlay9hZG1pbi53ZWVrLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2FkbWluL3dlZWsvYWRtaW4ud2Vlay50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwiZ2FtZXMtaGVhZGVyLXJvdyByb3dcXFwiPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICA8aDM+PGkgY2xhc3M9XFxcImZhIGZhLWNoZWNrIGZhLWZ3XFxcIiBuZy1zaG93PVxcXCJ3ZWVrRGF0YS5jb21wbGV0ZSA9PT0gdHJ1ZVxcXCIgdGl0bGU9XFxcIldlZWsgY29tcGxldGVcXFwiPjwvaT4ge3t3ZWVrRGF0YS5kaXNwbGF5fX0gPHNtYWxsPjxhIG5nLWNsaWNrPVxcXCJlZGl0V2Vlayh3ZWVrRGF0YSlcXFwiPlsgZWRpdCBdPC9hPjwvc21hbGw+PGJyPlxcblwiICtcbiAgICBcIiAgICAgIDxzbWFsbD5EZXNjcmlwdGlvbjoge3t3ZWVrRGF0YS5kZXNjcmlwdGlvbn19PC9zbWFsbD48L2gzPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcIndlZWstYnRuLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcInNlbmQtcmVtaW5kZXItYnRuIGJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNvbmZpcm1TZW5kUmVtaW5kZXIod2Vla0RhdGEpXFxcIj5TZW5kIFJlbWluZGVyPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjcmVhdGUtZ2FtZS1idG4gYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1jbGljaz1cXFwiY3JlYXRlR2FtZSh3ZWVrRGF0YSwgZ2FtZXMpXFxcIj5DcmVhdGUgR2FtZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIndlZWstZ2FtZXMgbGlzdC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICA8YSBuZy1yZXBlYXQ9XFxcImdhbWUgaW4gZ2FtZXNcXFwiIG5nLWNsaWNrPVxcXCJlZGl0R2FtZShnYW1lKVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiZ2FtZS1kaXNwbGF5LW5hbWUgY29sLXNtLTYgY29sLW1kLTZcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1jaGVjayBmYS1md1xcXCIgbmctc2hvdz1cXFwiZ2FtZS5jb21wbGV0ZSA9PT0gdHJ1ZVxcXCIgdGl0bGU9XFxcIkdhbWUgZmluaXNoZWRcXFwiPjwvaT4ge3tnYW1lLmRpc3BsYXl9fTxicj48c3BhbiBjbGFzcz1cXFwiZ2FtZS1zdGFydHNcXFwiPnt7ZGF0ZUZvcm1hdChnYW1lLnN0YXJ0c19hdCwgXFxcImRkZCwgbW1tIGQgeXl5eSBoOk1NIFRUIChaKVxcXCIpfX08L3NwYW4+PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiZ2FtZS1zY29yZSBjb2wtc20tNiBjb2wtbWQtNlxcXCI+e3tnYW1lLnNxdWFkc1swXS5uYW1lfX06IHt7Z2FtZS52aXNpdGluZ19zcXVhZF9zY29yZX19IHwge3tnYW1lLnNxdWFkc1sxXS5uYW1lfX06IHt7Z2FtZS5ob21lX3NxdWFkX3Njb3JlfX0gPHNwYW4gbmctc2hvdz1cXFwiZ2FtZS5vdmVydGltZSA9PT0gdHJ1ZVxcXCI+T1Q8L3NwYW4+PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9hPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxocj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJjb21wbGV0ZS13ZWVrLWJ0bi1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNvbXBsZXRlLXdlZWstYnRuIGJ0biBidG4tZGFuZ2VyXFxcIiBuZy1jbGljaz1cXFwiY29uZmlybVdlZWtDb21wbGV0ZSh3ZWVrRGF0YSlcXFwiPkNvbXBsZXRlIFdlZWs8L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2FkbWluL3dlZWsvZWRpdC9hZG1pbi53ZWVrLmVkaXQudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvYWRtaW4vd2Vlay9lZGl0L2FkbWluLndlZWsuZWRpdC50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+RWRpdCBXZWVrPC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxoND57e3dlZWtEYXRhLmRpc3BsYXl9fTwvaDQ+XFxuXCIgK1xuICAgIFwiICA8aHI+XFxuXCIgK1xuICAgIFwiICA8Zm9ybSBuYW1lPVxcXCJlZGl0V2Vla0Zvcm1cXFwiIGNsYXNzPVxcXCJlZGl0LXdlZWstZm9ybSBmb3JtLWhvcml6b250YWxcXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKGVkaXRXZWVrRm9ybS53ZWVrTmFtZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihlZGl0V2Vla0Zvcm0ud2Vla05hbWUpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGZvcj1cXFwid2Vla05hbWVcXFwiIGNsYXNzPVxcXCJjb2wtc20tMyBjb250cm9sLWxhYmVsXFxcIj5OYW1lOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTlcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGlucHV0IGlkPVxcXCJ3ZWVrTmFtZVxcXCIgbmFtZT1cXFwid2Vla05hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJ3ZWVrRGF0YS5uYW1lXFxcIiBuZy1tYXhsZW5ndGg9XFxcIjMwXFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoZWRpdFdlZWtGb3JtLndlZWtOYW1lLCAncmVxdWlyZWQnKVxcXCI+UmVxdWlyZWQ8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJpbnB1dC1lcnJvclxcXCIgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihlZGl0V2Vla0Zvcm0ud2Vla05hbWUsICdtYXhsZW5ndGgnKVxcXCI+VG9vIExvbmc8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IoZWRpdFdlZWtGb3JtLndlZWtOYW1lKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IoZWRpdFdlZWtGb3JtLndlZWtEZXNjcmlwdGlvbiksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihlZGl0V2Vla0Zvcm0ud2Vla0Rlc2NyaXB0aW9uKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBmb3I9XFxcIndlZWtEZXNjcmlwdGlvblxcXCIgY2xhc3M9XFxcImNvbC1zbS0zIGNvbnRyb2wtbGFiZWxcXFwiPkRlc2NyaXB0aW9uOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTlcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGlucHV0IGlkPVxcXCJ3ZWVrRGVzY3JpcHRpb25cXFwiIG5hbWU9XFxcIndlZWtEZXNjcmlwdGlvblxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcIndlZWtEYXRhLmRlc2NyaXB0aW9uXFxcIiBuZy1tYXhsZW5ndGg9XFxcIjMwXFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoZWRpdFdlZWtGb3JtLndlZWtEZXNjcmlwdGlvbiwgJ3JlcXVpcmVkJylcXFwiPlJlcXVpcmVkPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoZWRpdFdlZWtGb3JtLndlZWtEZXNjcmlwdGlvbiwgJ21heGxlbmd0aCcpXFxcIj5Ub28gTG9uZzwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihlZGl0V2Vla0Zvcm0ud2Vla0Rlc2NyaXB0aW9uKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGZvcj1cXFwid2Vla1R5cGVcXFwiIGNsYXNzPVxcXCJjb2wtc20tMyBjb250cm9sLWxhYmVsXFxcIj5XZWVrIFR5cGU6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c2VsZWN0IGlkPVxcXCJ3ZWVrVHlwZVxcXCIgbmFtZT1cXFwid2Vla1R5cGVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJ3ZWVrRGF0YS53ZWVrX3R5cGVfaWRcXFwiIG5nLW9wdGlvbnM9XFxcIndlZWtUeXBlLmlkIGFzIHdlZWtUeXBlLmRlc2NyaXB0aW9uIGZvciB3ZWVrVHlwZSBpbiB3ZWVrVHlwZXNcXFwiPjwvc2VsZWN0PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtc20tMyBjb250cm9sLWxhYmVsXFxcIj5TdGFydHMgQXQ6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93blxcXCIgaXMtb3Blbj1cXFwic3RhcnRzQXREcm9wZG93bi5pc29wZW5cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8YSBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiByb2xlPVxcXCJidXR0b25cXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgZGF0YS10YXJnZXQ9XFxcIiNcXFwiIGhyZWY9XFxcIiNcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBmb3JtYXR0ZWQtZGF0ZSBkYXRhLW5nLW1vZGVsPVxcXCJ3ZWVrRGF0YS5zdGFydHNfYXRcXFwiIG5nLXJlcXVpcmVkPVxcXCJ0cnVlXFxcIiBuZy1kaXNhYmxlZD1cXFwidHJ1ZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPjxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNhbGVuZGFyXFxcIj48L2k+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2E+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCIgcm9sZT1cXFwibWVudVxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJkTGFiZWxcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkYXRldGltZXBpY2tlciBkYXRhLW5nLW1vZGVsPVxcXCJ3ZWVrRGF0YS5zdGFydHNfYXRcXFwiIGRhdGEtb24tc2V0LXRpbWU9XFxcImNsb3NlU3RhcnRzQXQoKVxcXCIgZGF0YS1kYXRldGltZXBpY2tlci1jb25maWc9XFxcInsgbWludXRlU3RlcDogNSB9XFxcIi8+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvdWw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLXNtLTMgY29udHJvbC1sYWJlbFxcXCI+RW5kcyBBdDo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS05XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duXFxcIiBpcy1vcGVuPVxcXCJlbmRzQXREcm9wZG93bi5pc29wZW5cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8YSBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiByb2xlPVxcXCJidXR0b25cXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgZGF0YS10YXJnZXQ9XFxcIiNcXFwiIGhyZWY9XFxcIiNcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBmb3JtYXR0ZWQtZGF0ZSBkYXRhLW5nLW1vZGVsPVxcXCJ3ZWVrRGF0YS5lbmRzX2F0XFxcIiBuZy1yZXF1aXJlZD1cXFwidHJ1ZVxcXCIgbmctZGlzYWJsZWQ9XFxcInRydWVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWFkZG9uXFxcIj48aSBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jYWxlbmRhclxcXCI+PC9pPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9hPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiIHJvbGU9XFxcIm1lbnVcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwiZExhYmVsXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8ZGF0ZXRpbWVwaWNrZXIgZGF0YS1uZy1tb2RlbD1cXFwid2Vla0RhdGEuZW5kc19hdFxcXCIgZGF0YS1vbi1zZXQtdGltZT1cXFwiY2xvc2VFbmRzQXQoKVxcXCIgZGF0YS1kYXRldGltZXBpY2tlci1jb25maWc9XFxcInsgbWludXRlU3RlcDogNSB9XFxcIi8+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvdWw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctZGlzYWJsZWQ9XFxcImVkaXRXZWVrRm9ybS4kaW52YWxpZFxcXCIgbmctY2xpY2s9XFxcImVkaXRXZWVrKHdlZWtEYXRhKVxcXCI+VXBkYXRlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvY29udGFjdC9sZWFndWUuY29udGFjdC50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvY29udGFjdC9sZWFndWUuY29udGFjdC50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+Q29udGFjdCBDb21taXNoPC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxmb3JtIG5hbWU9XFxcImNvbnRhY3RGb3JtXFxcIiBjbGFzcz1cXFwiY29udGFjdC1mb3JtIGZvcm0taG9yaXpvbnRhbFxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZT5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IoY29udGFjdEZvcm0ubWVzc2FnZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihjb250YWN0Rm9ybS5tZXNzYWdlKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBmb3I9XFxcIm1lc3NhZ2VcXFwiIGNsYXNzPVxcXCJjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIj5NZXNzYWdlOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDx0ZXh0YXJlYSBpZD1cXFwibWVzc2FnZVxcXCIgbmFtZT1cXFwibWVzc2FnZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIlNlbmQgYSBkaXJlY3QgbWVzc2FnZSB0byB0aGUgY29tbWlzaC4uLlxcXCIgcm93cz1cXFwiM1xcXCIgbWF4bGVuZ3RoPVxcXCIyMDBcXFwiIG5nLW1vZGVsPVxcXCJjb21taXNoTWVzc2FnZVxcXCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoY29udGFjdEZvcm0ubWVzc2FnZSwgJ3JlcXVpcmVkJylcXFwiPlJlcXVpcmVkPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoY29udGFjdEZvcm0ubWVzc2FnZSwgJ21heGxlbmd0aCcpXFxcIj5Ub28gTG9uZzwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihjb250YWN0Rm9ybS5tZXNzYWdlKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZm9ybT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwiY29udGFjdEZvcm0uJHByaXN0aW5lIHx8IGNvbnRhY3RGb3JtLiRpbnZhbGlkXFxcIiBuZy1jbGljaz1cXFwiY29udGFjdENvbW1pc2gobGVhZ3VlRGF0YSwgY29tbWlzaE1lc3NhZ2UpXFxcIj5TZW5kPC9idXR0b24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvZWRpdC9sZWFndWUuZWRpdC50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvZWRpdC9sZWFndWUuZWRpdC50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+RWRpdCBMZWFndWU8L2gzPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgPGZvcm0gbmFtZT1cXFwibGVhZ3VlRm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZT5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXAgbGVhZ3VlLXR5cGUtYnRuLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBsZWFndWUtdHlwZS1idG5cXFwiIG5nLW1vZGVsPVxcXCJsZWFndWVEYXRhLnB1YmxpY1xcXCIgYnRuLXJhZGlvPVxcXCJ0cnVlXFxcIiB1bmNoZWNrYWJsZT5QdWJsaWMgTGVhZ3VlPGJyPjxzcGFuIGNsYXNzPVxcXCJzbWFsbC1ncmF5XFxcIj5bIGFueW9uZSBjYW4gam9pbiBdPC9zcGFuPjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgbGVhZ3VlLXR5cGUtYnRuXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5wdWJsaWNcXFwiIGJ0bi1yYWRpbz1cXFwiZmFsc2VcXFwiIHVuY2hlY2thYmxlPlByaXZhdGUgTGVhZ3VlPGJyPjxzcGFuIGNsYXNzPVxcXCJzbWFsbC1ncmF5XFxcIj5bIGludml0ZSBvbmx5IF08L3NwYW4+PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1zaG93PVxcXCIhbGVhZ3VlRGF0YS5zdGFydGVkXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwIGxlYWd1ZS1mb3JtYXQtYnRuLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBsZWFndWUtZm9ybWF0LWJ0blxcXCIgbmctbW9kZWw9XFxcImxlYWd1ZURhdGEuZWxpbWluYXRpb25cXFwiIGJ0bi1yYWRpbz1cXFwiZmFsc2VcXFwiIHVuY2hlY2thYmxlPkJpZ2dlc3QgTG9zZXI8YnI+PHNwYW4gY2xhc3M9XFxcInNtYWxsLWdyYXlcXFwiPlsgbW9zdCBjb3JyZWN0IHBpY2tzIF08L3NwYW4+PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBsZWFndWUtZm9ybWF0LWJ0blxcXCIgbmctbW9kZWw9XFxcImxlYWd1ZURhdGEuZWxpbWluYXRpb25cXFwiIGJ0bi1yYWRpbz1cXFwidHJ1ZVxcXCIgdW5jaGVja2FibGU+TG9zZU9yR29Ib21lPGJyPjxzcGFuIGNsYXNzPVxcXCJzbWFsbC1ncmF5XFxcIj5bIHNpbmdsZSBlbGltaW5hdGlvbiBdPC9zcGFuPjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1zaG93PVxcXCJsZWFndWVEYXRhLnN0YXJ0ZWRcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiPkxlYWd1ZSBmb3JtYXQ6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHZhbHVlPVxcXCJCaWdnZXN0IExvc2VyIFsgbm8gZWxpbWluYXRpb24gXVxcXCIgbmctc2hvdz1cXFwibGVhZ3VlRGF0YS5lbGltaW5hdGlvbiA9PSBmYWxzZVxcXCIgbmctZGlzYWJsZWQ9XFxcInRydWVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdmFsdWU9XFxcIkxvc2VPckdvSG9tZSBbIHNpbmdsZSBlbGltaW5hdGlvbiBdXFxcIiBuZy1zaG93PVxcXCJsZWFndWVEYXRhLmVsaW1pbmF0aW9uID09IHRydWVcXFwiIG5nLWRpc2FibGVkPVxcXCJ0cnVlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKGxlYWd1ZUZvcm0ubGVhZ3VlTmFtZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihsZWFndWVGb3JtLmxlYWd1ZU5hbWUpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJsZWFndWVOYW1lXFxcIj5MZWFndWUgbmFtZTpcXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihsZWFndWVGb3JtLmxlYWd1ZU5hbWUsICdyZXF1aXJlZCcpXFxcIj5bIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGxlYWd1ZUZvcm0ubGVhZ3VlTmFtZSwgJ21heGxlbmd0aCcpXFxcIj5bIFRvbyBMb25nIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aW5wdXQgaWQ9XFxcImxlYWd1ZU5hbWVcXFwiIG5hbWU9XFxcImxlYWd1ZU5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJsZWFndWVEYXRhLm5hbWVcXFwiIG5nLW1heGxlbmd0aD1cXFwiMzBcXFwiIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihsZWFndWVGb3JtLmxlYWd1ZU5hbWUpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcInNlYXNvblxcXCI+U2Vhc29uOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzZWxlY3QgaWQ9XFxcInNlYXNvblxcXCIgbmFtZT1cXFwic2Vhc29uXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1zaG93PVxcXCIhbGVhZ3VlRGF0YS5zdGFydGVkXFxcIiBuZy1jaGFuZ2U9XFxcImdldFNlYXNvbldlZWtzKClcXFwiIG5nLW1vZGVsPVxcXCJsZWFndWVEYXRhLnNlYXNvbl9pZFxcXCIgbmctb3B0aW9ucz1cXFwic2Vhc29uLmlkIGFzIHNlYXNvbi5uYW1lIGZvciBzZWFzb24gaW4gc2Vhc29uc1xcXCI+PC9zZWxlY3Q+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpbnB1dCBpZD1cXFwic2Vhc29uTmFtZVxcXCIgbmFtZT1cXFwic2Vhc29uTmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctc2hvdz1cXFwibGVhZ3VlRGF0YS5zdGFydGVkXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5zZWFzb25fbmFtZVxcXCIgbmctZGlzYWJsZWQ9XFxcInRydWVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJzdGFydFdlZWtcXFwiPlN0YXJ0IHdlZWs6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNlbGVjdCBpZD1cXFwic3RhcnRXZWVrXFxcIiBuYW1lPVxcXCJzdGFydFdlZWtcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLXNob3c9XFxcIiFsZWFndWVEYXRhLnN0YXJ0ZWRcXFwiIG5nLW1vZGVsPVxcXCJsZWFndWVEYXRhLnN0YXJ0X3dlZWtfaWRcXFwiIG5nLW9wdGlvbnM9XFxcIndlZWsuaWQgYXMgd2Vlay5kaXNwbGF5IGZvciB3ZWVrIGluIHdlZWtzXFxcIj48L3NlbGVjdD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJzdGFydFdlZWtEaXNwbGF5XFxcIiBuYW1lPVxcXCJzdGFydFdlZWtEaXNwbGF5XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1zaG93PVxcXCJsZWFndWVEYXRhLnN0YXJ0ZWRcXFwiIG5nLW1vZGVsPVxcXCJsZWFndWVEYXRhLnN0YXJ0X3dlZWtfZGlzcGxheVxcXCIgbmctZGlzYWJsZWQ9XFxcInRydWVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IobGVhZ3VlRm9ybS5tYXhUZWFtcyksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihsZWFndWVGb3JtLm1heFRlYW1zKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwibWF4VGVhbXNcXFwiPkhvdyBtYW55IHRpbWVzIGNhbiBhIHVzZXIgam9pbjpcXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihsZWFndWVGb3JtLm1heFRlYW1zLCAncmVxdWlyZWQnKVxcXCI+WyBOdW1iZXIgUmVxdWlyZWQgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobGVhZ3VlRm9ybS5tYXhUZWFtcywgJ21pbicpXFxcIj5bIDEgLSAxMCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihsZWFndWVGb3JtLm1heFRlYW1zLCAnbWF4JylcXFwiPlsgMSAtIDEwIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aW5wdXQgaWQ9XFxcIm1heFRlYW1zXFxcIiBuYW1lPVxcXCJtYXhUZWFtc1xcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBwbGFjZWhvbGRlcj1cXFwiQmV0d2VlbiAxIGFuZCAxMFxcXCIgbWluPVxcXCIxXFxcIiBtYXg9XFxcIjEwXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5tYXhfdGVhbXNfcGVyX3VzZXJcXFwiIGxvZ2gtZm9jdXMgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKGxlYWd1ZUZvcm0ubWF4VGVhbXMpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcIm1lc3NhZ2VcXFwiPk1lc3NhZ2VcXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGw+WyBPcHRpb25hbCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHRleHRhcmVhIGlkPVxcXCJtZXNzYWdlXFxcIiBuYW1lPVxcXCJtZXNzYWdlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgYSBtZXNzYWdlIGZvciB5b3UgbGVhZ3VlIGhlcmUuLi5cXFwiIHJvd3M9XFxcIjJcXFwiIG1heGxlbmd0aD1cXFwiNTAwXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5tZXNzYWdlXFxcIj48L3RleHRhcmVhPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9mb3JtPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+Q2FuY2VsPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWluZm8gYnRuLXByaW1hcnlcXFwiIG5nLWRpc2FibGVkPVxcXCJsZWFndWVGb3JtLiRwcmlzdGluZSB8fCBsZWFndWVGb3JtLiRpbnZhbGlkXFxcIiBuZy1jbGljaz1cXFwidXBkYXRlTGVhZ3VlKGxlYWd1ZURhdGEpXFxcIj5VcGRhdGU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9pbnZpdGUvbGVhZ3VlLmludml0ZS50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlL2xlYWd1ZS5pbnZpdGUudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPjxzcGFuIG5nLXNob3c9XFxcIiFzdGFydFdlZWtDb21wbGV0ZVxcXCI+SW52aXRlIEZyaWVuZHM8L3NwYW4+PHNwYW4gbmctc2hvdz1cXFwic3RhcnRXZWVrQ29tcGxldGVcXFwiPkludml0YXRpb25zPC9zcGFuPjwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IG5nLXNob3c9XFxcIiFzdGFydFdlZWtDb21wbGV0ZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxmb3JtIG5hbWU9XFxcImludml0ZUZvcm1cXFwiIGNsYXNzPVxcXCJpbnZpdGUtZm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZT5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKGludml0ZUZvcm0uZW1haWxzKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKGludml0ZUZvcm0uZW1haWxzKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImVtYWlsc1xcXCIgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiPkVtYWlsKHMpOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJlbWFpbHNcXFwiIG5hbWU9XFxcImVtYWlsc1xcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIlNlcGVyYXRlIGVtYWlscyB3aXRoIGEgc3BhY2UuLi5cXFwiIG5nLW1vZGVsPVxcXCJpbnZpdGF0aW9uLmVtYWlsXFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGludml0ZUZvcm0uZW1haWxzLCAncmVxdWlyZWQnKVxcXCI+UmVxdWlyZWQ8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKGludml0ZUZvcm0uZW1haWxzKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IoaW52aXRlRm9ybS5tZXNzYWdlKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKGludml0ZUZvcm0ubWVzc2FnZSl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJtZXNzYWdlXFxcIiBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCI+TWVzc2FnZTo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cXFwibWVzc2FnZVxcXCIgbmFtZT1cXFwibWVzc2FnZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVudGVyIGEgb3B0aW9uYWwgbWVzc2FnZSB0byBkZWxpdmVyIHdpdGggdGhlIGludml0YXRpb24uLi5cXFwiIHJvd3M9XFxcIjNcXFwiIG1heGxlbmd0aD1cXFwiNDAwXFxcIiBuZy1tb2RlbD1cXFwiaW52aXRhdGlvbi5tZXNzYWdlXFxcIj48L3RleHRhcmVhPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoaW52aXRlRm9ybS5tZXNzYWdlLCAnbWF4bGVuZ3RoJylcXFwiPlRvbyBMb25nPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihpbnZpdGVGb3JtLm1lc3NhZ2UpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiaW52aXRlLXJlc2V0LWJ0biBidG4gYnRuLWRlZmF1bHQgYnRuLWJsb2NrXFxcIiBuZy1jbGljaz1cXFwicmVzZXRJbnZpdGUoKVxcXCI+Q2xlYXI8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJpbnZpdGUtc2VuZC1idG4gYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1xcXCIgbmctZGlzYWJsZWQ9XFxcImludml0ZUZvcm0uJGludmFsaWRcXFwiIG5nLWNsaWNrPVxcXCJzZW5kSW52aXRlKGludml0YXRpb24pXFxcIj5TZW5kPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9mb3JtPlxcblwiICtcbiAgICBcIiAgICA8aHI+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgbmctc2hvdz1cXFwiaXNDb21taXNoXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiaW52aXRlcy10YWJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDx1bCBjbGFzcz1cXFwibmF2IG5hdi10YWJzXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaSBjbGFzcz1cXFwiYWN0aXZlXFxcIj48YT5JbnZpdGVzIFsge3tpbnZpdGF0aW9ucy5sZW5ndGh9fSBdPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgPC91bD5cXG5cIiArXG4gICAgXCIgICAgICA8c3BhbiBjbGFzcz1cXFwiY2xpY2stdG8tZWRpdFxcXCIgbmctc2hvdz1cXFwiIXN0YXJ0V2Vla0NvbXBsZXRlXFxcIj5bIGNsaWNrIGludml0ZSB0byBlZGl0IF08L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJsZWFndWUtaW52aXRlc1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwibGlzdC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8YSBuZy1yZXBlYXQ9XFxcImludml0ZSBpbiBpbnZpdGF0aW9uc1xcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCIgbmctY2xpY2s9XFxcInBvcHVsYXRlSW52aXRlKGludml0ZSlcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWNoZWNrIGZhLWZ3XFxcIiBuZy1zaG93PVxcXCJpbnZpdGUuYWNjZXB0ZWRfYXRcXFwiIHRpdGxlPVxcXCJBY2NlcHRlZFxcXCI+PC9pPiB7e2ludml0ZS5lbWFpbH19PGJyPjxzcGFuIGNsYXNzPVxcXCJzZW50LWRhdGVcXFwiPjxzcGFuIG5nLXNob3c9XFxcIiFpbnZpdGUuYWNjZXB0ZWRfYXRcXFwiPlNlbnQge3tpbnZpdGUudXBkYXRlZF9hdH19PC9zcGFuPjxzcGFuIG5nLXNob3c9XFxcImludml0ZS5hY2NlcHRlZF9hdFxcXCI+Sm9pbmVkIHt7aW52aXRlLmFjY2VwdGVkX2F0fX08L3NwYW4+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvYT5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJuby1waWNrcy1hbGVydCBhbGVydCBhbGVydC1pbmZvXFxcIiBuZy1zaG93PVxcXCJpbnZpdGF0aW9ucy5sZW5ndGggPT0gMFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICBObyBpbnZpdGVzXFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DbG9zZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2ludml0ZS9yZXF1ZXN0L2xlYWd1ZS5pbnZpdGUucmVxdWVzdC50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlL3JlcXVlc3QvbGVhZ3VlLmludml0ZS5yZXF1ZXN0LnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5SZXF1ZXN0IEludml0ZTwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8Zm9ybSBuYW1lPVxcXCJyZXF1ZXN0SW52aXRlRm9ybVxcXCIgY2xhc3M9XFxcInJlcXVlc3QtaW52aXRlLWZvcm0gZm9ybS1ob3Jpem9udGFsXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihyZXF1ZXN0SW52aXRlRm9ybS5lbWFpbCksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihyZXF1ZXN0SW52aXRlRm9ybS5lbWFpbCl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgZm9yPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPkZvcjo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8aW5wdXQgaWQ9XFxcImVtYWlsXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciBlbWFpbFxcXCIgbmctbW9kZWw9XFxcImludml0YXRpb24uZW1haWxcXFwiIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJpbnB1dC1lcnJvclxcXCIgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihyZXF1ZXN0SW52aXRlRm9ybS5lbWFpbCwgJ3JlcXVpcmVkJylcXFwiPlJlcXVpcmVkPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IocmVxdWVzdEludml0ZUZvcm0uZW1haWwsICdlbWFpbCcpXFxcIj5JbnZhbGlkIGVtYWlsPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKHJlcXVlc3RJbnZpdGVGb3JtLmVtYWlsKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IocmVxdWVzdEludml0ZUZvcm0ubWVzc2FnZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihyZXF1ZXN0SW52aXRlRm9ybS5tZXNzYWdlKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBmb3I9XFxcIm1lc3NhZ2VcXFwiIGNsYXNzPVxcXCJjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIj5NZXNzYWdlOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDx0ZXh0YXJlYSBpZD1cXFwibWVzc2FnZVxcXCIgbmFtZT1cXFwibWVzc2FnZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVudGVyIGEgb3B0aW9uYWwgbWVzc2FnZSBmb3IgdGhlIGNvbW1pc2ggb2YgdGhlIGxlYWd1ZS4uLlxcXCIgcm93cz1cXFwiM1xcXCIgbWF4bGVuZ3RoPVxcXCIyMDBcXFwiIG5nLW1vZGVsPVxcXCJpbnZpdGF0aW9uLm1lc3NhZ2VcXFwiPjwvdGV4dGFyZWE+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKHJlcXVlc3RJbnZpdGVGb3JtLm1lc3NhZ2UsICdtYXhsZW5ndGgnKVxcXCI+VG9vIExvbmc8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IocmVxdWVzdEludml0ZUZvcm0ubWVzc2FnZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctZGlzYWJsZWQ9XFxcInJlcXVlc3RJbnZpdGVGb3JtLiRpbnZhbGlkXFxcIiBuZy1jbGljaz1cXFwicmVxdWVzdEludml0ZShpbnZpdGF0aW9uKVxcXCI+UmVxdWVzdCBJbnZpdGU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9qb2luL2xlYWd1ZS5qb2luLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9qb2luL2xlYWd1ZS5qb2luLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5Kb2luIExlYWd1ZTwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8Zm9ybSBuYW1lPVxcXCJqb2luRm9ybVxcXCIgY2xhc3M9XFxcImpvaW4tZm9ybSBmb3JtLWhvcml6b250YWxcXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKGpvaW5Gb3JtLnRlYW1OYW1lKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKGpvaW5Gb3JtLnRlYW1OYW1lKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBmb3I9XFxcInRlYW1OYW1lXFxcIiBjbGFzcz1cXFwiY29sLXNtLTQgY29sLW1kLTQgY29udHJvbC1sYWJlbFxcXCI+R2l2ZSB5b3VyIHRlYW0gYSBuYW1lOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTggY29sLW1kLThcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGlucHV0IGlkPVxcXCJ0ZWFtTmFtZVxcXCIgbmFtZT1cXFwidGVhbU5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciBuYW1lLi4uXFxcIiBuZy1tb2RlbD1cXFwibmV3VGVhbURhdGEubmFtZVxcXCIgbmctbWF4bGVuZ3RoPVxcXCIzMFxcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGpvaW5Gb3JtLnRlYW1OYW1lLCAncmVxdWlyZWQnKVxcXCI+UmVxdWlyZWQ8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJpbnB1dC1lcnJvclxcXCIgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihqb2luRm9ybS50ZWFtTmFtZSwgJ21heGxlbmd0aCcpXFxcIj5Ub28gTG9uZzwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihqb2luRm9ybS50ZWFtTmFtZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctZGlzYWJsZWQ9XFxcImpvaW5Gb3JtLiRwcmlzdGluZSB8fCBqb2luRm9ybS4kaW52YWxpZFxcXCIgbmctY2xpY2s9XFxcImpvaW5MZWFndWUobmV3VGVhbURhdGEpXFxcIj5Kb2luPC9idXR0b24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbGVhZ3VlLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9sZWFndWUudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgdWktdmlldz1cXFwibGVhZ3VlQ29udGVudFxcXCIgY2xhc3M9XFxcImxlYWd1ZS1jb250ZW50XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9tZXNzYWdlL2xlYWd1ZS5tZXNzYWdlLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9tZXNzYWdlL2xlYWd1ZS5tZXNzYWdlLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5VcGRhdGUgTWVzc2FnZTwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8Zm9ybSBuYW1lPVxcXCJtZXNzYWdlRm9ybVxcXCIgY2xhc3M9XFxcImxlYWd1ZS1tZXNzYWdlLWZvcm0gZm9ybS1ob3Jpem9udGFsXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihtZXNzYWdlRm9ybS5tZXNzYWdlKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKG1lc3NhZ2VGb3JtLm1lc3NhZ2UpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGZvcj1cXFwibWVzc2FnZVxcXCIgY2xhc3M9XFxcImNvbC1zbS00IGNvbnRyb2wtbGFiZWxcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgTGVhZ3VlIE1lc3NhZ2U6IDxicj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobWVzc2FnZUZvcm0ubWVzc2FnZSwgJ21heGxlbmd0aCcpXFxcIj5bIFRvbyBMb25nIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLThcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPHRleHRhcmVhIGlkPVxcXCJtZXNzYWdlXFxcIiBuYW1lPVxcXCJtZXNzYWdlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgYSBtZXNzYWdlIGZvciB5b3VyIGxlYWd1ZSB0byBzZWUgb3IgbGVhdmUgaXQgYmxhbmsuXFxcIiByb3dzPVxcXCIzXFxcIiBuZy1tYXhsZW5ndGg9XFxcIjUwMFxcXCIgbmctbW9kZWw9XFxcImxlYWd1ZURhdGEubWVzc2FnZVxcXCI+PC90ZXh0YXJlYT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImVtYWlsLWxlYWd1ZS1tZXNzYWdlLWNoZWNrYm94XFxcIiBuZy1zaG93PVxcXCJsZWFndWVEYXRhLmVsaW1pbmF0aW9uXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcIm1lc3NhZ2VPcHRpb25zLnNlbmRBbGl2ZVxcXCI+IGVtYWlsIG1lc3NhZ2UgdG8gYWxpdmUgdGVhbXM8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJlbWFpbC1sZWFndWUtbWVzc2FnZS1jaGVja2JveFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIG5nLW1vZGVsPVxcXCJtZXNzYWdlT3B0aW9ucy5zZW5kQWxsXFxcIj4gZW1haWwgbWVzc2FnZSB0byBhbGwgdGVhbXM8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihtZXNzYWdlRm9ybS5tZXNzYWdlKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZm9ybT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwibWVzc2FnZUZvcm0uJHByaXN0aW5lIHx8IG1lc3NhZ2VGb3JtLiRpbnZhbGlkXFxcIiBuZy1jbGljaz1cXFwidXBkYXRlTWVzc2FnZShsZWFndWVEYXRhLCBtZXNzYWdlT3B0aW9ucy5zZW5kQWxpdmUsIG1lc3NhZ2VPcHRpb25zLnNlbmRBbGwpXFxcIj5VcGRhdGU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9uZXcvbGVhZ3VlLm5ldy50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbmV3L2xlYWd1ZS5uZXcudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkNyZWF0ZSBMZWFndWU8L2gzPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgPGZvcm0gbmFtZT1cXFwibmV3TGVhZ3VlRm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZT5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXAgbGVhZ3VlLXR5cGUtYnRuLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBsZWFndWUtdHlwZS1idG5cXFwiIG5nLW1vZGVsPVxcXCJuZXdMZWFndWVEYXRhLnB1YmxpY1xcXCIgYnRuLXJhZGlvPVxcXCJ0cnVlXFxcIiB1bmNoZWNrYWJsZT5QdWJsaWMgTGVhZ3VlPGJyPjxzcGFuIGNsYXNzPVxcXCJzbWFsbC1ncmF5XFxcIj5bIGFueW9uZSBjYW4gam9pbiBdPC9zcGFuPjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgbGVhZ3VlLXR5cGUtYnRuXFxcIiBuZy1tb2RlbD1cXFwibmV3TGVhZ3VlRGF0YS5wdWJsaWNcXFwiIGJ0bi1yYWRpbz1cXFwiZmFsc2VcXFwiIHVuY2hlY2thYmxlPlByaXZhdGUgTGVhZ3VlPGJyPjxzcGFuIGNsYXNzPVxcXCJzbWFsbC1ncmF5XFxcIj5bIGludml0ZSBvbmx5IF08L3NwYW4+PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwIGxlYWd1ZS1mb3JtYXQtYnRuLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBsZWFndWUtZm9ybWF0LWJ0blxcXCIgbmctbW9kZWw9XFxcIm5ld0xlYWd1ZURhdGEuZWxpbWluYXRpb25cXFwiIGJ0bi1yYWRpbz1cXFwidHJ1ZVxcXCIgdW5jaGVja2FibGU+TG9zZU9yR29Ib21lPGJyPjxzcGFuIGNsYXNzPVxcXCJzbWFsbC1ncmF5XFxcIj5bIHNpbmdsZSBlbGltaW5hdGlvbiBdPC9zcGFuPjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgbGVhZ3VlLWZvcm1hdC1idG5cXFwiIG5nLW1vZGVsPVxcXCJuZXdMZWFndWVEYXRhLmVsaW1pbmF0aW9uXFxcIiBidG4tcmFkaW89XFxcImZhbHNlXFxcIiB1bmNoZWNrYWJsZT5CaWdnZXN0IExvc2VyPGJyPjxzcGFuIGNsYXNzPVxcXCJzbWFsbC1ncmF5XFxcIj5bIG5vIGVsaW1pbmF0aW9uIF08L3NwYW4+PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihuZXdMZWFndWVGb3JtLmxlYWd1ZU5hbWUpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IobmV3TGVhZ3VlRm9ybS5sZWFndWVOYW1lKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwibGVhZ3VlTmFtZVxcXCI+TGVhZ3VlIG5hbWU6XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobmV3TGVhZ3VlRm9ybS5sZWFndWVOYW1lLCAncmVxdWlyZWQnKVxcXCI+WyBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihuZXdMZWFndWVGb3JtLmxlYWd1ZU5hbWUsICdtYXhsZW5ndGgnKVxcXCI+WyBUb28gTG9uZyBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJsZWFndWVOYW1lXFxcIiBuYW1lPVxcXCJsZWFndWVOYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwibmV3TGVhZ3VlRGF0YS5uYW1lXFxcIiBuZy1tYXhsZW5ndGg9XFxcIjMwXFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IobmV3TGVhZ3VlRm9ybS5sZWFndWVOYW1lKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJsZWFndWUtbmlja25hbWUgcm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwibmlja25hbWVcXFwiPk5pY2tuYW1lPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJuaWNrbmFtZVxcXCIgbmFtZT1cXFwibmlja25hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJuZXdMZWFndWVEYXRhLm5pY2tuYW1lXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwic2Vhc29uXFxcIj5TZWFzb246PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNlbGVjdCBpZD1cXFwic2Vhc29uXFxcIiBuYW1lPVxcXCJzZWFzb25cXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLWNoYW5nZT1cXFwiZ2V0U2Vhc29uV2Vla3MoKVxcXCIgbmctbW9kZWw9XFxcIm5ld0xlYWd1ZURhdGEuc2Vhc29uX2lkXFxcIiBuZy1vcHRpb25zPVxcXCJzZWFzb24uaWQgYXMgc2Vhc29uLm5hbWUgZm9yIHNlYXNvbiBpbiBzZWFzb25zXFxcIj48L3NlbGVjdD5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwic3RhcnRXZWVrXFxcIj5TdGFydCB3ZWVrOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzZWxlY3QgaWQ9XFxcInN0YXJ0V2Vla1xcXCIgbmFtZT1cXFwic3RhcnRXZWVrXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwibmV3TGVhZ3VlRGF0YS5zdGFydF93ZWVrX2lkXFxcIiBuZy1vcHRpb25zPVxcXCJ3ZWVrLmlkIGFzIHdlZWsuZGlzcGxheSBmb3Igd2VlayBpbiB3ZWVrc1xcXCI+PC9zZWxlY3Q+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihuZXdMZWFndWVGb3JtLm1heFRlYW1zKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKG5ld0xlYWd1ZUZvcm0ubWF4VGVhbXMpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJtYXhUZWFtc1xcXCI+SG93IG1hbnkgdGltZXMgY2FuIGEgdXNlciBqb2luOlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld0xlYWd1ZUZvcm0ubWF4VGVhbXMsICdyZXF1aXJlZCcpXFxcIj5bIE51bWJlciBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihuZXdMZWFndWVGb3JtLm1heFRlYW1zLCAnbWluJylcXFwiPlsgMSAtIDEwIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld0xlYWd1ZUZvcm0ubWF4VGVhbXMsICdtYXgnKVxcXCI+WyAxIC0gMTAgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpbnB1dCBpZD1cXFwibWF4VGVhbXNcXFwiIG5hbWU9XFxcIm1heFRlYW1zXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIHBsYWNlaG9sZGVyPVxcXCJCZXR3ZWVuIDEgYW5kIDEwXFxcIiBtaW49XFxcIjFcXFwiIG1heD1cXFwiMTBcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJuZXdMZWFndWVEYXRhLm1heF90ZWFtc19wZXJfdXNlclxcXCIgbG9naC1mb2N1cyByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IobmV3TGVhZ3VlRm9ybS5tYXhUZWFtcylcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwibWVzc2FnZVxcXCI+TWVzc2FnZSBbIE9wdGlvbmFsIF08L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8dGV4dGFyZWEgaWQ9XFxcIm1lc3NhZ2VcXFwiIG5hbWU9XFxcIm1lc3NhZ2VcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciBhIG1lc3NhZ2UgZm9yIHlvdXIgbGVhZ3VlIGhlcmUuIFlvdSBjYW4gY2hhbmdlIGl0IGF0IGFueSB0aW1lLlxcXCIgcm93cz1cXFwiMlxcXCIgbWF4bGVuZ3RoPVxcXCI1MDBcXFwiIG5nLW1vZGVsPVxcXCJuZXdMZWFndWVEYXRhLm1lc3NhZ2VcXFwiPjwvdGV4dGFyZWE+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctZGlzYWJsZWQ9XFxcIm5ld0xlYWd1ZUZvcm0uJGludmFsaWRcXFwiIG5nLWNsaWNrPVxcXCJjcmVhdGVMZWFndWUobmV3TGVhZ3VlRGF0YSlcXFwiPkNyZWF0ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL3ZpZXcvbGVhZ3VlLnZpZXcudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL3ZpZXcvbGVhZ3VlLnZpZXcudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcImhlYWRlci1yb3cgcm93XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS03IGNvbC1tZC03XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwIGxlYWd1ZXMtZHJvcGRvd25cXFwiIGRyb3Bkb3duIGlzLW9wZW49XFxcImxlYWd1ZURyb3Bkb3duLmlzb3BlblxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJsZWFndWVzLWJ0bi1saW5rIGJ0biBidG4tbGluayBkcm9wZG93bi10b2dnbGVcXFwiIG5nLWRpc2FibGVkPVxcXCIhaXNDb21taXNoKGxlYWd1ZURhdGEpICYmICFpc0FkbWluKClcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImxlYWd1ZS1uYW1lXFxcIiBuZy1jbGFzcz1cXFwieydkaXNhYmxlZCc6ICFpc0NvbW1pc2gobGVhZ3VlRGF0YSkgJiYgIWlzQWRtaW4oKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXRpbWVzIGljb25cXFwiIHRpdGxlPVxcXCJDbG9zZWQgbGVhZ3VlXFxcIiBuZy1zaG93PVxcXCIhbGVhZ3VlRGF0YS5vcGVuXFxcIj48L2k+XFxuXCIgK1xuICAgIFwiICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtbG9jayBpY29uXFxcIiB0aXRsZT1cXFwiUHJpdmF0ZSBsZWFndWVcXFwiIG5nLXNob3c9XFxcImxlYWd1ZURhdGEub3BlbiAmJiAhbGVhZ3VlRGF0YS5wdWJsaWNcXFwiPjwvaT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS11bmxvY2sgaWNvblxcXCIgdGl0bGU9XFxcIlB1YmxpYyBsZWFndWVcXFwiIG5nLXNob3c9XFxcImxlYWd1ZURhdGEub3BlbiAmJiBsZWFndWVEYXRhLnB1YmxpY1xcXCI+PC9pPlxcblwiICtcbiAgICBcIiAgICAgICAgPHN0cm9uZz57e2xlYWd1ZURhdGEubmFtZX19PC9zdHJvbmc+PC9zcGFuPiA8c3BhbiBuZy1zaG93PVxcXCJpc0NvbW1pc2gobGVhZ3VlRGF0YSkgfHwgaXNBZG1pbigpXFxcIiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnUgbGVhZ3VlLWFjdGlvbnMtbWVudVxcXCIgcm9sZT1cXFwibWVudVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGk+PGEgbmctc2hvdz1cXFwiaXNDb21taXNoKGxlYWd1ZURhdGEpIHx8IGlzQWRtaW4oKVxcXCIgbmctY2xpY2s9XFxcInRvZ2dsZURyb3Bkb3duKCRldmVudCk7ZWRpdExlYWd1ZShsZWFndWVEYXRhKVxcXCI+RWRpdCBsZWFndWU8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaT48YSBuZy1zaG93PVxcXCJpc0NvbW1pc2gobGVhZ3VlRGF0YSlcXFwiIG5nLWNsaWNrPVxcXCJ0b2dnbGVEcm9wZG93bigkZXZlbnQpO3VwZGF0ZU1lc3NhZ2UobGVhZ3VlRGF0YSlcXFwiPkVkaXQgbGVhZ3VlIG1lc3NhZ2U8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaT48YSBuZy1zaG93PVxcXCJpc0NvbW1pc2gobGVhZ3VlRGF0YSlcXFwiIG5nLWNsaWNrPVxcXCJ0b2dnbGVEcm9wZG93bigkZXZlbnQpO2ludml0ZShsZWFndWVEYXRhLmlkLCBpc0NvbW1pc2gobGVhZ3VlRGF0YSksIGxlYWd1ZURhdGEuc3RhcnRfd2Vla19jb21wbGV0ZSlcXFwiPk1hbmFnZSBpbnZpdGF0aW9uczwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgICAgPGxpPjxhIG5nLXNob3c9XFxcImlzQ29tbWlzaChsZWFndWVEYXRhKSAmJiB0ZWFtT3B0aW9ucy5pbmFjdGl2ZSA9PSB0cnVlXFxcIiBuZy1jbGljaz1cXFwidG9nZ2xlRHJvcGRvd24oJGV2ZW50KTtzaG93RGVhY3RpdmF0ZWRUZWFtcyhmYWxzZSk7XFxcIj5IaWRlIGRlYWN0aXZhdGVkIHRlYW1zPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGk+PGEgbmctc2hvdz1cXFwiaXNDb21taXNoKGxlYWd1ZURhdGEpICYmIHRlYW1PcHRpb25zLmluYWN0aXZlID09IGZhbHNlXFxcIiBuZy1jbGljaz1cXFwidG9nZ2xlRHJvcGRvd24oJGV2ZW50KTtzaG93RGVhY3RpdmF0ZWRUZWFtcyh0cnVlKTtcXFwiPlNob3cgZGVhY3RpdmF0ZWQgdGVhbXM8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICA8L3VsPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGgzIHN0eWxlPVxcXCJtYXJnaW4tdG9wOiAwO1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwibGVhZ3VlLW1ldGFcXFwiIG5nLWNsYXNzPVxcXCJ7J3Nob3ctbWV0YSc6ICFsZWFndWVEYXRhLnN0YXJ0X3dlZWtfY29tcGxldGV9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJsZWFndWVEYXRhLmVsaW1pbmF0aW9uXFxcIj5Mb3NlT3JHb0hvbWUgWyBzaW5nbGUgZWxpbWluYXRpb24gXTwvc21hbGw+PHNtYWxsIG5nLXNob3c9XFxcIiFsZWFndWVEYXRhLmVsaW1pbmF0aW9uXFxcIj5CaWdnZXN0IExvc2VyIFsgbm8gZWxpbWluYXRpb24gXTwvc21hbGw+PGJyPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsPkNvbW1pc2ggWyB7e2xlYWd1ZURhdGEuY29tbWlzaF9uYW1lcy5qb2luKCcsICcpfX0gXTwvc21hbGw+PGJyPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDxzbWFsbCA+e3tzdGFydHMobGVhZ3VlRGF0YSl9fTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgPHNtYWxsIGNsYXNzPVxcXCJjbG9zZWQtdGV4dFxcXCIgbmctc2hvdz1cXFwiIWxlYWd1ZURhdGEub3BlblxcXCI+Q0xPU0VEIFRPIE5FVyBURUFNUzwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgIDwvaDM+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS01IGNvbC1tZC01XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJqb2luLWJ0biBidG4gYnRuLXByaW1hcnlcXFwiIG5nLXNob3c9XFxcIiFsZWFndWVEYXRhLnN0YXJ0X3dlZWtfY29tcGxldGVcXFwiIG5nLWNsaWNrPVxcXCJqb2luTGVhZ3VlKGxlYWd1ZURhdGEpXFxcIj5Kb2luPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiaW52aXRlLWJ0biBidG4gYnRuLXByaW1hcnlcXFwiIG5nLXNob3c9XFxcIiFsZWFndWVEYXRhLnN0YXJ0X3dlZWtfY29tcGxldGUgJiYgKGxlYWd1ZURhdGEucHVibGljIHx8IGlzQ29tbWlzaChsZWFndWVEYXRhKSlcXFwiIG5nLWNsaWNrPVxcXCJpbnZpdGUobGVhZ3VlRGF0YS5pZCwgaXNDb21taXNoKGxlYWd1ZURhdGEpLCBsZWFndWVEYXRhLnN0YXJ0X3dlZWtfY29tcGxldGUpXFxcIj5JbnZpdGU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJyZXF1ZXN0LWludml0ZS1idG4gYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1zaG93PVxcXCIhbGVhZ3VlRGF0YS5zdGFydF93ZWVrX2NvbXBsZXRlICYmICFsZWFndWVEYXRhLnB1YmxpYyAmJiAhaXNDb21taXNoKGxlYWd1ZURhdGEpXFxcIiBuZy1jbGljaz1cXFwicmVxdWVzdEludml0ZShsZWFndWVEYXRhKVxcXCI+UmVxdWVzdCBJbnZpdGU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgPGgzIGNsYXNzPVxcXCJsZWFndWUtbWV0YS1yaWdodFxcXCIgbmctc2hvdz1cXFwibGVhZ3VlRGF0YS5zdGFydF93ZWVrX2NvbXBsZXRlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8c21hbGwgbmctc2hvdz1cXFwibGVhZ3VlRGF0YS5lbGltaW5hdGlvblxcXCI+TG9zZU9yR29Ib21lIFsgc2luZ2xlIGVsaW1pbmF0aW9uIF08L3NtYWxsPjxzbWFsbCBuZy1zaG93PVxcXCIhbGVhZ3VlRGF0YS5lbGltaW5hdGlvblxcXCI+QmlnZ2VzdCBMb3NlciBbIG5vIGVsaW1pbmF0aW9uIF08L3NtYWxsPjxicj5cXG5cIiArXG4gICAgXCIgICAgICA8c21hbGw+Q29tbWlzaCBbIHt7bGVhZ3VlRGF0YS5jb21taXNoX25hbWVzLmpvaW4oJywgJyl9fSBdPC9zbWFsbD48YnI+XFxuXCIgK1xuICAgIFwiICAgIDwvaDM+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJsZWFndWUtbWVzc2FnZSBhbGVydCBhbGVydC1pbmZvXFxcIiBuZy1zaG93PVxcXCIhbGVhZ3VlRGF0YS5zdGFydF93ZWVrX2NvbXBsZXRlIHx8IGhhc1RlYW1JbkxlYWd1ZSgpIHx8IGlzQ29tbWlzaChsZWFndWVEYXRhKVxcXCI+PHN0cm9uZz5Db21taXNoIHRvIGxlYWd1ZTo8L3N0cm9uZz4gPHAgY2xhc3M9XFxcImxlYWd1ZS1tZXNzYWdlLXRleHRcXFwiIG5nLXNob3c9XFxcIiFsZWFndWVEYXRhLm1lc3NhZ2UgfHwgbGVhZ3VlRGF0YS5tZXNzYWdlLmxlbmd0aCA9PSAwXFxcIj5ub3RoaW5nPC9wPjxwIGNsYXNzPVxcXCJsZWFndWUtbWVzc2FnZS10ZXh0XFxcIiBuZy1zaG93PVxcXCJsZWFndWVEYXRhLm1lc3NhZ2UubGVuZ3RoID4gMFxcXCIgbmctYmluZC1odG1sPVxcXCJsZWFndWVEYXRhLm1lc3NhZ2UgfCBsaW5reTonX2JsYW5rJ1xcXCI+PC9wPiA8YSBjbGFzcz1cXFwiYWxlcnQtbGlua1xcXCIgbmctc2hvdz1cXFwiaXNDb21taXNoKGxlYWd1ZURhdGEpXFxcIiBuZy1jbGljaz1cXFwidXBkYXRlTWVzc2FnZShsZWFndWVEYXRhKVxcXCI+WyBlZGl0IF08L2E+PGEgY2xhc3M9XFxcImFsZXJ0LWxpbmtcXFwiIG5nLXNob3c9XFxcIiFpc0NvbW1pc2gobGVhZ3VlRGF0YSkgJiYgaGFzVGVhbUluTGVhZ3VlKClcXFwiIG5nLWNsaWNrPVxcXCJjb250YWN0Q29tbWlzaChsZWFndWVEYXRhKVxcXCI+WyBjb250YWN0IF08L2E+PC9kaXY+XFxuXCIgK1xuICAgIFwiPGhyPlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcInRlYW1zLXRhYlxcXCI+XFxuXCIgK1xuICAgIFwiICA8dWwgY2xhc3M9XFxcIm5hdiBuYXYtdGFic1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxsaSBjbGFzcz1cXFwiYWN0aXZlXFxcIj48YT5UZWFtcyBbIDxzcGFuIG5nLXNob3c9XFxcImxlYWd1ZURhdGEuZWxpbWluYXRpb25cXFwiPnt7bGVhZ3VlRGF0YS5hbGl2ZV90ZWFtX2NvdW50fX0gLyA8L3NwYW4+e3tsZWFndWVEYXRhLnRlYW1fY291bnR9fSBdPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICA8L3VsPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwid2Vla3NcXFwiPlxcblwiICtcbiAgICBcIiAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLWNoYW5nZT1cXFwiY2hhbmdlV2VlayhzZWxlY3RlZFdlZWtJZClcXFwiIG5nLW1vZGVsPVxcXCJzZWxlY3RlZFdlZWtJZFxcXCIgbmctb3B0aW9ucz1cXFwibGVhZ3VlV2Vlay5pZCBhcyBsZWFndWVXZWVrLmRpc3BsYXkgZm9yIGxlYWd1ZVdlZWsgaW4gbGVhZ3VlV2Vla3NcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxvcHRpb24gdmFsdWU9XFxcIlxcXCI+QWxsIFdlZWtzPC9vcHRpb24+XFxuXCIgK1xuICAgIFwiICAgIDwvc2VsZWN0PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgY3VzdG9tLXNlYXJjaC1mb3JtIGZpbHRlci1sZWFndWUtam9pblxcXCI+XFxuXCIgK1xuICAgIFwiICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIlNlYXJjaC4uLlxcXCIgbmctbW9kZWw9XFxcInRlYW1RdWVyeVxcXCI+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibGVhZ3VlLWNvbnRhaW5lclxcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJsZWFndWUtdGVhbXMgbGlzdC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxhIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiIG5nLWNsYXNzPVxcXCJ7J2luYWN0aXZlJzogIXRlYW0uYWN0aXZlIHx8ICF0ZWFtLmFsaXZlfVxcXCIgbmctcmVwZWF0PVxcXCJ0ZWFtIGluIGxlYWd1ZVRlYW1zIHwgYWN0aXZlVGVhbUZpbHRlcjp0ZWFtT3B0aW9ucyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0IHwgb2Zmc2V0RmlsdGVyOihjdXJyZW50VGVhbVBhZ2UtMSkqdGVhbXNQZXJQYWdlIHwgbGltaXRUbzp0ZWFtc1BlclBhZ2VcXFwiIG5nLWNsaWNrPVxcXCJzaG93VGVhbSh0ZWFtKVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImxlYWd1ZS1uYW1lIGNvbC1zbS01IGNvbC1tZC01XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXVzZXIgZmEtZndcXFwiIG5nLXNob3c9XFxcImlzQ29hY2godGVhbSlcXFwiIHRpdGxlPVxcXCJNeSB0ZWFtXFxcIj48L2k+PGkgY2xhc3M9XFxcImZhIGZhLWRvbGxhciBmYS1md1xcXCIgbmctc2hvdz1cXFwiIWlzQ29hY2godGVhbSkgJiYgaXNDb21taXNoKGxlYWd1ZURhdGEpICYmIHRlYW0ucGFpZCA9PSB0cnVlXFxcIiB0aXRsZT1cXFwiUGFpZFxcXCI+PC9pPiA8c3BhbiBjbGFzcz1cXFwidGVhbS1uYW1lXFxcIiBuZy1jbGFzcz1cXFwieydpbmFjdGl2ZSc6ICF0ZWFtLmFjdGl2ZSB8fCAhdGVhbS5hbGl2ZX1cXFwiPnt7dGVhbS5uYW1lfX08L3NwYW4+PGJyPjxzcGFuIGNsYXNzPVxcXCJjb2FjaC1uYW1lXFxcIj5Db2FjaDoge3tjb2FjaE5hbWUodGVhbSl9fTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTcgY29sLW1kLTdcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY3VycmVudC1waWNrXFxcIiBuZy1jbGFzcz1cXFwieyduby1waWNrJzogaGFzTm9QaWNrKHRlYW0pfVxcXCIgbmctc2hvdz1cXFwidGVhbS5hY3RpdmUgJiYgdGVhbS5zdGFydGVkXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtbG9jayBmYS1md1xcXCIgbmctc2hvdz1cXFwidGVhbS5sYXN0X3BpY2subG9ja2VkICYmIHRlYW0ubGFzdF9waWNrLmNvcnJlY3QgPT0gbnVsbFxcXCIgdGl0bGU9XFxcIlBpY2sgbG9ja2VkXFxcIj48L2k+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXVubG9jayBmYS1md1xcXCIgbmctc2hvdz1cXFwiIXRlYW0ubGFzdF9waWNrLmxvY2tlZCAmJiB0ZWFtLmxhc3RfcGljay5jb3JyZWN0ID09IG51bGxcXFwiIHRpdGxlPVxcXCJQaWNrIHVubG9ja2VkXFxcIj48L2k+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXRpbWVzIGZhLWZ3XFxcIiBuZy1zaG93PVxcXCJ0ZWFtLmxhc3RfcGljay5jb3JyZWN0ID09PSBmYWxzZVxcXCIgdGl0bGU9XFxcIlBpY2sgd3JvbmdcXFwiPjwvaT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY2hlY2sgZmEtZndcXFwiIG5nLXNob3c9XFxcInRlYW0ubGFzdF9waWNrLmNvcnJlY3QgPT09IHRydWVcXFwiIHRpdGxlPVxcXCJQaWNrIGNvcnJlY3RcXFwiPjwvaT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICBbIDxzcGFuIGNsYXNzPVxcXCJjdXJyZW50LWxvc2VyLW5hbWVcXFwiPnt7dGVhbS5sYXN0X3BpY2submFtZX19PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJjdXJyZW50LWxvc2VyLWFiYnJldlxcXCI+e3t0ZWFtLmxhc3RfcGljay5hYmJyZXZ9fTwvc3Bhbj4gXVxcblwiICtcbiAgICBcIiAgICAgICAgICA8L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjdXJyZW50LXBpY2tcXFwiIG5nLXNob3c9XFxcInRlYW0uYWN0aXZlICYmICF0ZWFtLnN0YXJ0ZWRcXFwiPlN0YXJ0cyB7e3RlYW0uc3RhcnRfd2Vla319PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5hY3RpdmUtdGVhbSBjdXJyZW50LXBpY2tcXFwiIG5nLXNob3c9XFxcIiF0ZWFtLmFjdGl2ZVxcXCI+VGVhbSBoYXMgYmVlbiBkZWFjdGl2YXRlZDwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJhZGdlXFxcIj57e3RlYW0uY29ycmVjdF9waWNrc19jb3VudH19IGxvc2VyPHNwYW4gbmctc2hvdz1cXFwidGVhbS5jb3JyZWN0X3BpY2tzX2NvdW50ICE9PSAxXFxcIj5zPC9zcGFuPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2E+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWluZm9cXFwiIG5nLXNob3c9XFxcIihsZWFndWVUZWFtcyB8IGFjdGl2ZVRlYW1GaWx0ZXI6dGVhbU9wdGlvbnMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCkubGVuZ3RoID09IDBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIE5vIHRlYW1zIGZvdW5kXFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJsZWFndWUtdGVhbXMtcGFnaW5hdGlvblxcXCIgbmctc2hvdz1cXFwibGVhZ3VlVGVhbXMubGVuZ3RoID4gdGVhbXNQZXJQYWdlICYmIChsZWFndWVUZWFtcyB8IGFjdGl2ZVRlYW1GaWx0ZXI6dGVhbU9wdGlvbnMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCkubGVuZ3RoID4gMFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPHBhZ2luYXRpb24gYm91bmRhcnktbGlua3M9XFxcInRydWVcXFwiIG1heC1zaXplPVxcXCI0XFxcIiB0b3RhbC1pdGVtcz1cXFwiKGxlYWd1ZVRlYW1zIHwgYWN0aXZlVGVhbUZpbHRlcjp0ZWFtT3B0aW9ucyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0KS5sZW5ndGhcXFwiIGl0ZW1zLXBlci1wYWdlPVxcXCJ0ZWFtc1BlclBhZ2VcXFwiIG5nLW1vZGVsPVxcXCJjdXJyZW50VGVhbVBhZ2VcXFwiIGNsYXNzPVxcXCJwYWdpbmF0aW9uLW1kXFxcIiBwcmV2aW91cy10ZXh0PVxcXCImbHNhcXVvO1xcXCIgbmV4dC10ZXh0PVxcXCImcnNhcXVvO1xcXCIgZmlyc3QtdGV4dD1cXFwiJmxhcXVvO1xcXCIgbGFzdC10ZXh0PVxcXCImcmFxdW87XFxcIj48L3BhZ2luYXRpb24+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4vbGVhZ3Vlcy5qb2luLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9sZWFndWVzLmpvaW4udHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcImpvaW4tbGVhZ3Vlcy1oZWFkZXItcm93IHJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOSBjb2wtbWQtOVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxoMz5Kb2luIGEgbGVhZ3VlLi4uPC9oMz5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTMgY29sLW1kLTNcXFwiPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJqb2luLWxlYWd1ZXMtYnRuLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNyZWF0ZS1sZWFndWUtYnRuIGJ0biBidG4tcHJpbWFyeVxcXCIgbmctY2xpY2s9XFxcImNyZWF0ZUxlYWd1ZShzZWxlY3RlZFNlYXNvbklkKVxcXCI+Q3JlYXRlIExlYWd1ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxocj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJqb2luLWxlYWd1ZXMtdGFic1xcXCI+XFxuXCIgK1xuICAgIFwiICA8dWwgY2xhc3M9XFxcIm5hdiBuYXYtdGFic1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxsaSBuZy1jbGFzcz1cXFwieydhY3RpdmUnOiBpc1B1YmxpYygpfVxcXCIgbmctY2xpY2s9XFxcInJlc2V0U2VhcmNoKClcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxhIG5nLWNsaWNrPVxcXCJwdWJsaWNMZWFndWVzKHNlbGVjdGVkU2Vhc29uSWQpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtdW5sb2NrIGZhLWZ3XFxcIiB0aXRsZT1cXFwiUHVibGljIGxlYWd1ZXNcXFwiPjwvaT4gUHVibGljIDxzcGFuIGNsYXNzPVxcXCJsZWFndWVzXFxcIj5MZWFndWVzPC9zcGFuPjwvYT5cXG5cIiArXG4gICAgXCIgICAgPC9saT5cXG5cIiArXG4gICAgXCIgICAgPGxpIG5nLWNsYXNzPVxcXCJ7J2FjdGl2ZSc6ICFpc1B1YmxpYygpfVxcXCIgbmctY2xpY2s9XFxcInJlc2V0U2VhcmNoKClcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxhIG5nLWNsaWNrPVxcXCJwcml2YXRlTGVhZ3VlcyhzZWxlY3RlZFNlYXNvbklkKVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWxvY2sgZmEtZndcXFwiIHRpdGxlPVxcXCJQcml2YXRlIGxlYWd1ZXNcXFwiPjwvaT4gUHJpdmF0ZSA8c3BhbiBjbGFzcz1cXFwibGVhZ3Vlc1xcXCI+TGVhZ3Vlczwvc3Bhbj48L2E+XFxuXCIgK1xuICAgIFwiICAgIDwvbGk+XFxuXCIgK1xuICAgIFwiICA8L3VsPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwic2Vhc29uc1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctY2hhbmdlPVxcXCJjaGFuZ2VTZWFzb24oc2VsZWN0ZWRTZWFzb25JZClcXFwiIG5nLW1vZGVsPVxcXCJzZWxlY3RlZFNlYXNvbklkXFxcIiBuZy1vcHRpb25zPVxcXCJjdXJyZW50U2Vhc29uLmlkIGFzIGN1cnJlbnRTZWFzb24ubmFtZSBmb3IgY3VycmVudFNlYXNvbiBpbiBjdXJyZW50U2Vhc29uc1xcXCI+PC9zZWxlY3Q+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cCBjdXN0b20tc2VhcmNoLWZvcm0gZmlsdGVyLWxlYWd1ZS1qb2luXFxcIj5cXG5cIiArXG4gICAgXCIgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiU2VhcmNoLi4uXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlUXVlcnlcXFwiPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjwhLS0gcGxhY2Vob2xkZXIgZm9yIHB1YmxpYyBhbmQgcHJpdmF0ZSBsZWFndWVzIC0tPlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImxlYWd1ZXMtY29udGVudFxcXCIgdWktdmlldz1cXFwiam9pbkxlYWd1ZXNDb250ZW50XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9wcml2YXRlL2xlYWd1ZXMuam9pbi5wcml2YXRlLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9wcml2YXRlL2xlYWd1ZXMuam9pbi5wcml2YXRlLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJwcml2YXRlLWxlYWd1ZXMgbGlzdC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxhIG5nLXJlcGVhdD1cXFwibGVhZ3VlIGluIHByaXZhdGVMZWFndWVzIHwgb3BlbkxlYWd1ZUZpbHRlcjpsZWFndWVPcHRpb25zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QgfCBvZmZzZXRGaWx0ZXI6KGN1cnJlbnRMZWFndWVQYWdlLTEpKmxlYWd1ZXNQZXJQYWdlIHwgbGltaXRUbzpsZWFndWVzUGVyUGFnZVxcXCIgbmctY2xpY2s9XFxcInNob3dMZWFndWUobGVhZ3VlKVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImxlYWd1ZS1uYW1lIGNvbC1zbS01IGNvbC1tZC01XFxcIiBuZy1jbGFzcz1cXFwieydjbG9zZWQnOiAhbGVhZ3VlLm9wZW59XFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtdGltZXMgZmEtZndcXFwiIHRpdGxlPVxcXCJDbG9zZWQgbGVhZ3VlXFxcIiBuZy1zaG93PVxcXCIhbGVhZ3VlLm9wZW5cXFwiPjwvaT4ge3tsZWFndWUubmFtZX19PGJyPjxzcGFuIGNsYXNzPVxcXCJ0ZWFtLWNvdW50IGxlYWd1ZS1jb21taXNoXFxcIj5Db21taXNoOiB7e2xlYWd1ZS5jb21taXNoX25hbWVzLmpvaW4oJywgJyl9fTwvc3Bhbj48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS03IGNvbC1tZC03XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInByaXZhdGUtbGVhZ3VlLW1ldGFcXFwiPjxzcGFuIG5nLXNob3c9XFxcImxlYWd1ZS5lbGltaW5hdGlvblxcXCI+PHNwYW4gY2xhc3M9XFxcImxvc2VvcmdvaG9tZVxcXCI+TG9zZU9yR29Ib21lPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJsb2doXFxcIj5MT0dIPC9zcGFuPiBbIHNpbmdsZSBlbGltaW5hdGlvbiBdPC9zcGFuPjxzcGFuIG5nLXNob3c9XFxcIiFsZWFndWUuZWxpbWluYXRpb25cXFwiPkJpZ2dlc3QgTG9zZXIgWyBubyBlbGltaW5hdGlvbiBdPC9zcGFuPjxicj5TdGFydHMge3tsZWFndWUuc3RhcnRfd2Vla319PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYmFkZ2VcXFwiPnt7bGVhZ3VlLnRlYW1fY291bnR9fSB0ZWFtPHNwYW4gbmctc2hvdz1cXFwibGVhZ3VlLnRlYW1fY291bnQgIT09IDFcXFwiPnM8L3NwYW4+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvYT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJwcml2YXRlLWxlYWd1ZS1wYWdpbmF0aW9uXFxcIiBuZy1zaG93PVxcXCJwcml2YXRlTGVhZ3Vlcy5sZW5ndGggPiBsZWFndWVzUGVyUGFnZSAmJiAocHJpdmF0ZUxlYWd1ZXMgfCBvcGVuTGVhZ3VlRmlsdGVyOmxlYWd1ZU9wdGlvbnMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCkubGVuZ3RoID4gMFxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxwYWdpbmF0aW9uIGJvdW5kYXJ5LWxpbmtzPVxcXCJ0cnVlXFxcIiBtYXgtc2l6ZT1cXFwiNFxcXCIgdG90YWwtaXRlbXM9XFxcIihwcml2YXRlTGVhZ3VlcyB8IG9wZW5MZWFndWVGaWx0ZXI6bGVhZ3VlT3B0aW9ucyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0KS5sZW5ndGhcXFwiIGl0ZW1zLXBlci1wYWdlPVxcXCJsZWFndWVzUGVyUGFnZVxcXCIgbmctbW9kZWw9XFxcImN1cnJlbnRMZWFndWVQYWdlXFxcIiBjbGFzcz1cXFwicGFnaW5hdGlvbi1tZFxcXCIgcHJldmlvdXMtdGV4dD1cXFwiJmxzYXF1bztcXFwiIG5leHQtdGV4dD1cXFwiJnJzYXF1bztcXFwiIGZpcnN0LXRleHQ9XFxcIiZsYXF1bztcXFwiIGxhc3QtdGV4dD1cXFwiJnJhcXVvO1xcXCI+PC9wYWdpbmF0aW9uPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWluZm9cXFwiIG5nLXNob3c9XFxcIihwcml2YXRlTGVhZ3VlcyB8IG9wZW5MZWFndWVGaWx0ZXI6bGVhZ3VlT3B0aW9ucyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0KS5sZW5ndGggPT0gMFxcXCI+XFxuXCIgK1xuICAgIFwiICBObyBsZWFndWVzIGZvdW5kXFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4vcHVibGljL2xlYWd1ZXMuam9pbi5wdWJsaWMudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL3B1YmxpYy9sZWFndWVzLmpvaW4ucHVibGljLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJwdWJsaWMtbGVhZ3VlcyBsaXN0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGEgbmctcmVwZWF0PVxcXCJsZWFndWUgaW4gcHVibGljTGVhZ3VlcyB8IG9wZW5MZWFndWVGaWx0ZXI6bGVhZ3VlT3B0aW9ucyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0IHwgb2Zmc2V0RmlsdGVyOihjdXJyZW50TGVhZ3VlUGFnZS0xKSpsZWFndWVzUGVyUGFnZSB8IGxpbWl0VG86bGVhZ3Vlc1BlclBhZ2VcXFwiIG5nLWNsaWNrPVxcXCJzaG93TGVhZ3VlKGxlYWd1ZSlcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZWFndWUtbmFtZSBjb2wtc20tNSBjb2wtbWQtNVxcXCIgbmctY2xhc3M9XFxcInsnY2xvc2VkJzogIWxlYWd1ZS5vcGVufVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXRpbWVzIGZhLWZ3XFxcIiB0aXRsZT1cXFwiQ2xvc2VkIGxlYWd1ZVxcXCIgbmctc2hvdz1cXFwiIWxlYWd1ZS5vcGVuXFxcIj48L2k+IHt7bGVhZ3VlLm5hbWV9fTxicj48c3BhbiBjbGFzcz1cXFwidGVhbS1jb3VudCBsZWFndWUtY29tbWlzaFxcXCI+Q29tbWlzaDoge3tsZWFndWUuY29tbWlzaF9uYW1lcy5qb2luKCcsICcpfX08L3NwYW4+PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTcgY29sLW1kLTdcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwicHVibGljLWxlYWd1ZS1tZXRhXFxcIj48c3BhbiBuZy1zaG93PVxcXCJsZWFndWUuZWxpbWluYXRpb25cXFwiPjxzcGFuIGNsYXNzPVxcXCJsb3Nlb3Jnb2hvbWVcXFwiPkxvc2VPckdvSG9tZTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwibG9naFxcXCI+TE9HSDwvc3Bhbj4gWyBzaW5nbGUgZWxpbWluYXRpb24gXTwvc3Bhbj48c3BhbiBuZy1zaG93PVxcXCIhbGVhZ3VlLmVsaW1pbmF0aW9uXFxcIj5CaWdnZXN0IExvc2VyIFsgbm8gZWxpbWluYXRpb24gXTwvc3Bhbj48YnI+U3RhcnRzIHt7bGVhZ3VlLnN0YXJ0X3dlZWt9fTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJhZGdlXFxcIj57e2xlYWd1ZS50ZWFtX2NvdW50fX0gdGVhbTxzcGFuIG5nLXNob3c9XFxcImxlYWd1ZS50ZWFtX2NvdW50ICE9PSAxXFxcIj5zPC9zcGFuPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2E+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwicHVibGljLWxlYWd1ZS1wYWdpbmF0aW9uXFxcIiBuZy1zaG93PVxcXCJwdWJsaWNMZWFndWVzLmxlbmd0aCA+IGxlYWd1ZXNQZXJQYWdlICYmIChwdWJsaWNMZWFndWVzIHwgb3BlbkxlYWd1ZUZpbHRlcjpsZWFndWVPcHRpb25zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aCA+IDBcXFwiPlxcblwiICtcbiAgICBcIiAgICA8cGFnaW5hdGlvbiBib3VuZGFyeS1saW5rcz1cXFwidHJ1ZVxcXCIgbWF4LXNpemU9XFxcIjRcXFwiIHRvdGFsLWl0ZW1zPVxcXCIocHVibGljTGVhZ3VlcyB8IG9wZW5MZWFndWVGaWx0ZXI6bGVhZ3VlT3B0aW9ucyB8ZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aFxcXCIgaXRlbXMtcGVyLXBhZ2U9XFxcImxlYWd1ZXNQZXJQYWdlXFxcIiBuZy1tb2RlbD1cXFwiY3VycmVudExlYWd1ZVBhZ2VcXFwiIGNsYXNzPVxcXCJwYWdpbmF0aW9uLW1kXFxcIiBwcmV2aW91cy10ZXh0PVxcXCImbHNhcXVvO1xcXCIgbmV4dC10ZXh0PVxcXCImcnNhcXVvO1xcXCIgZmlyc3QtdGV4dD1cXFwiJmxhcXVvO1xcXCIgbGFzdC10ZXh0PVxcXCImcmFxdW87XFxcIj48L3BhZ2luYXRpb24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtaW5mb1xcXCIgbmctc2hvdz1cXFwiKHB1YmxpY0xlYWd1ZXMgfCBvcGVuTGVhZ3VlRmlsdGVyOmxlYWd1ZU9wdGlvbnMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCkubGVuZ3RoID09IDBcXFwiPlxcblwiICtcbiAgICBcIiAgTm8gbGVhZ3VlcyBmb3VuZFxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9sZWFndWVzLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvbGVhZ3Vlcy50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiB1aS12aWV3PVxcXCJsZWFndWVzQ29udGVudFxcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL21hbmFnZS9sZWFndWVzLm1hbmFnZS50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL21hbmFnZS9sZWFndWVzLm1hbmFnZS50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibWFuYWdlLWxlYWd1ZXMtaGVhZGVyLXJvdyByb3dcXFwiPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTkgY29sLW1kLTlcXFwiPlxcblwiICtcbiAgICBcIiAgICA8aDM+SSBtYW5hZ2UgdGhlc2UgbGVhZ3Vlcy4uLjwvaDM+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0zIGNvbC1tZC0zXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwibWFuYWdlLWxlYWd1ZXMtYnRuLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNyZWF0ZS1sZWFndWUtYnRuIGJ0biBidG4tcHJpbWFyeVxcXCIgbmctY2xpY2s9XFxcImNyZWF0ZUxlYWd1ZShzZWFzb24pXFxcIj5DcmVhdGUgTGVhZ3VlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGhyPlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjwhLS1pZiB5b3UgaGF2ZSBtYW5hZ2VkIGxlYWd1ZXMgKGkuZS4gaWYgeW91J3JlIGEgY29tbWlzaCktLT5cXG5cIiArXG4gICAgXCI8ZGl2IG5nLXNob3c9XFxcIm1hbmFnZWRMZWFndWVzLmxlbmd0aCA+IDBcXFwiIGNsYXNzPVxcXCJsZWFndWVzLWNvbnRhaW5lclxcXCI+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcIm1hbmFnZWQtbGVhZ3VlcyBsaXN0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxhIG5nLXJlcGVhdD1cXFwibGVhZ3VlIGluIG1hbmFnZWRMZWFndWVzIHwgb2Zmc2V0RmlsdGVyOihjdXJyZW50TGVhZ3VlUGFnZS0xKSpsZWFndWVzUGVyUGFnZSB8IGxpbWl0VG86bGVhZ3Vlc1BlclBhZ2VcXFwiIG5nLWNsaWNrPVxcXCJ2aWV3TGVhZ3VlKGxlYWd1ZSlcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxlYWd1ZS1uYW1lIGNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdGltZXMgZmEtZndcXFwiIHRpdGxlPVxcXCJNeSBDbG9zZWQgbGVhZ3VlXFxcIiBuZy1zaG93PVxcXCIhbGVhZ3VlLm9wZW5cXFwiPjwvaT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdW5sb2NrIGZhLWZ3XFxcIiB0aXRsZT1cXFwiTXkgUHVibGljIGxlYWd1ZVxcXCIgbmctc2hvdz1cXFwibGVhZ3VlLm9wZW4gJiYgbGVhZ3VlLnB1YmxpY1xcXCI+PC9pPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1sb2NrIGZhLWZ3XFxcIiB0aXRsZT1cXFwiTXkgUHJpdmF0ZSBsZWFndWVcXFwiIG5nLXNob3c9XFxcImxlYWd1ZS5vcGVuICYmICFsZWFndWUucHVibGljXFxcIj48L2k+IHt7bGVhZ3VlLm5hbWV9fTwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwic3RhcnQtd2Vla1xcXCI+e3tzdGFydHMobGVhZ3VlKX19PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJhZGdlXFxcIj57e2xlYWd1ZS50ZWFtX2NvdW50fX0gdGVhbXM8L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPC9hPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCIgICAgPCEtLWR5bmFtaWMgcGFnaW5hdGlvbi0tPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJtYW5hZ2UtbGVhZ3VlLXBhZ2luYXRpb25cXFwiIG5nLXNob3c9XFxcIm1hbmFnZWRMZWFndWVzLmxlbmd0aCA+IGxlYWd1ZXNQZXJQYWdlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxwYWdpbmF0aW9uIGJvdW5kYXJ5LWxpbmtzPVxcXCJ0cnVlXFxcIiBtYXgtc2l6ZT1cXFwiNFxcXCIgdG90YWwtaXRlbXM9XFxcIm1hbmFnZWRMZWFndWVzLmxlbmd0aFxcXCIgaXRlbXMtcGVyLXBhZ2U9XFxcImxlYWd1ZXNQZXJQYWdlXFxcIiBuZy1tb2RlbD1cXFwiY3VycmVudExlYWd1ZVBhZ2VcXFwiIGNsYXNzPVxcXCJwYWdpbmF0aW9uLW1kXFxcIiBwcmV2aW91cy10ZXh0PVxcXCImbHNhcXVvO1xcXCIgbmV4dC10ZXh0PVxcXCImcnNhcXVvO1xcXCIgZmlyc3QtdGV4dD1cXFwiJmxhcXVvO1xcXCIgbGFzdC10ZXh0PVxcXCImcmFxdW87XFxcIj48L3BhZ2luYXRpb24+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IHN0eWxlPVxcXCJjbGVhcjogYm90aDtcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjwhLS1pZiB5b3UgaGF2ZSBubyBtYW5hZ2VkIGxlYWd1ZXMtLT5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1pbmZvXFxcIiBuZy1zaG93PVxcXCJtYW5hZ2VkTGVhZ3Vlcy5sZW5ndGggPT0gMFxcXCI+XFxuXCIgK1xuICAgIFwiICBZb3UgYXJlIG5vdCB0aGUgY29tbWlzaCBvZiBhbnkgbGVhZ3Vlcy4gPGEgY2xhc3M9XFxcImFsZXJ0LWxpbmtcXFwiIG5nLWNsaWNrPVxcXCJjcmVhdGVMZWFndWUoc2Vhc29uKVxcXCI+Q3JlYXRlIG9uZTwvYT4gYW5kIGludml0ZSBhbGwgeW91ciBmcmllbmRzLlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9teS9sZWFndWVzLm15LnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvbXkvbGVhZ3Vlcy5teS50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibXktbGVhZ3Vlcy1oZWFkZXItcm93IHJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOSBjb2wtbWQtOVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxoMz5JIGFtIGluIHRoZXNlIGxlYWd1ZXMuLi48L2gzPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMyBjb2wtbWQtM1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcIm15LWxlYWd1ZXMtYnRuLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImpvaW4tbGVhZ3VlLWJ0biBidG4gYnRuLXByaW1hcnlcXFwiIG5nLWNsaWNrPVxcXCJqb2luTGVhZ3VlKHNlYXNvbilcXFwiPkpvaW4gTGVhZ3VlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGhyPlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjxkaXYgbmctc2hvdz1cXFwibGVhZ3Vlcy5sZW5ndGggPiAwXFxcIiBjbGFzcz1cXFwibGVhZ3Vlcy1jb250YWluZXJcXFwiPlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwibXktbGVhZ3VlcyBsaXN0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGEgbmctcmVwZWF0PVxcXCJsZWFndWUgaW4gbGVhZ3VlcyB8IG9mZnNldEZpbHRlcjooY3VycmVudExlYWd1ZVBhZ2UtMSkqbGVhZ3Vlc1BlclBhZ2UgfCBsaW1pdFRvOmxlYWd1ZXNQZXJQYWdlXFxcIiBuZy1jbGljaz1cXFwidmlld0xlYWd1ZShsZWFndWUpXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwibGVhZ3VlLW5hbWUgY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdGltZXMgZmEtZndcXFwiIHRpdGxlPVxcXCJNeSBDbG9zZWQgbGVhZ3VlXFxcIiBuZy1zaG93PVxcXCIhbGVhZ3VlLm9wZW5cXFwiPjwvaT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXVubG9jayBmYS1md1xcXCIgdGl0bGU9XFxcIk15IFB1YmxpYyBsZWFndWVcXFwiIG5nLXNob3c9XFxcImxlYWd1ZS5vcGVuICYmIGxlYWd1ZS5wdWJsaWNcXFwiPjwvaT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWxvY2sgZmEtZndcXFwiIHRpdGxlPVxcXCJNeSBQcml2YXRlIGxlYWd1ZVxcXCIgbmctc2hvdz1cXFwibGVhZ3VlLm9wZW4gJiYgIWxlYWd1ZS5wdWJsaWNcXFwiPjwvaT4ge3tsZWFndWUubmFtZX19PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzdGFydC13ZWVrXFxcIj57e3N0YXJ0cyhsZWFndWUpfX08L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJiYWRnZVxcXCI+e3tsZWFndWUudGVhbV9jb3VudH19IHRlYW1zPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvYT5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwibXktbGVhZ3VlLXBhZ2luYXRpb25cXFwiIG5nLXNob3c9XFxcImxlYWd1ZXMubGVuZ3RoID4gbGVhZ3Vlc1BlclBhZ2VcXFwiPlxcblwiICtcbiAgICBcIiAgICA8cGFnaW5hdGlvbiBib3VuZGFyeS1saW5rcz1cXFwidHJ1ZVxcXCIgbWF4LXNpemU9XFxcIjRcXFwiIHRvdGFsLWl0ZW1zPVxcXCJsZWFndWVzLmxlbmd0aFxcXCIgaXRlbXMtcGVyLXBhZ2U9XFxcImxlYWd1ZXNQZXJQYWdlXFxcIiBuZy1tb2RlbD1cXFwiY3VycmVudExlYWd1ZVBhZ2VcXFwiIGNsYXNzPVxcXCJwYWdpbmF0aW9uLW1kXFxcIiBwcmV2aW91cy10ZXh0PVxcXCImbHNhcXVvO1xcXCIgbmV4dC10ZXh0PVxcXCImcnNhcXVvO1xcXCIgZmlyc3QtdGV4dD1cXFwiJmxhcXVvO1xcXCIgbGFzdC10ZXh0PVxcXCImcmFxdW87XFxcIj48L3BhZ2luYXRpb24+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgc3R5bGU9XFxcImNsZWFyOiBib3RoO1xcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiPCEtLWlmIHlvdSBoYXZlIG5vIGxlYWd1ZXMtLT5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1pbmZvXFxcIiBuZy1zaG93PVxcXCJsZWFndWVzLmxlbmd0aCA9PSAwXFxcIj5cXG5cIiArXG4gICAgXCIgIFlvdSBhcmUgaW4gbm8gbGVhZ3Vlcy4gPGEgY2xhc3M9XFxcImFsZXJ0LWxpbmtcXFwiIG5nLWNsaWNrPVxcXCJqb2luTGVhZ3VlKHNlYXNvbilcXFwiPkpvaW48L2E+IG9uZSB0b2RheS5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL3BpY2svbWFrZS9waWNrLm1ha2UudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvcGljay9tYWtlL3BpY2subWFrZS50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+UGljayBhIExvc2VyPC9oND5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcIndlZWstZGVzYyB3ZWxsLXNtIGFsZXJ0IGFsZXJ0LWluZm9cXFwiPjxzdHJvbmc+e3tnYW1lc1swXS53ZWVrX25hbWV9fSBbIHt7Z2FtZXNbMF0ud2Vla190eXBlfX0gXTwvc3Ryb25nPjxicj57e2dhbWVzWzBdLndlZWtfZGVzY3JpcHRpb259fTwvZGl2PlxcblwiICtcbiAgICBcIiAgPGRpdiBuZy1yZXBlYXQtc3RhcnQ9XFxcImdhbWUgaW4gZ2FtZXNcXFwiIGNsYXNzPVxcXCJ3ZWVrLWdhbWVzIGxpc3QtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICA8aDUgbmctY2xhc3M9XFxcInsnaW52YWxpZC1nYW1lJzogZ2FtZS5zdGFydGVkfVxcXCI+PHNwYW4gY2xhc3M9XFxcImdhbWUtZGlzcGxheVxcXCI+e3tnYW1lLmRpc3BsYXl9fTwvc3Bhbj48YnI+PHNtYWxsPnt7c3RhcnRzKGdhbWUpfX08L3NtYWxsPjwvaDU+XFxuXCIgK1xuICAgIFwiICAgIDxhIG5nLXJlcGVhdD1cXFwic3F1YWQgaW4gZ2FtZS5zcXVhZHNcXFwiIG5nLWNsaWNrPVxcXCJtYWtlUGljayhnYW1lLCBzcXVhZClcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiIG5nLWNsYXNzPVxcXCJ7J2Rpc2FibGVkJzogZ2FtZS5zdGFydGVkfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwicm93IGdhbWUtcm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIG5nLWNsYXNzPVxcXCJ7J2ludmFsaWQtc3F1YWQnOiBoYXNTcXVhZEJlZW5Vc2VkKGdhbWUsIHNxdWFkKX1cXFwiPnt7c3F1YWQubmFtZX19IDxzcGFuIGNsYXNzPVxcXCJyZWNvcmQtc2NvcmVcXFwiIG5nLXNob3c9XFxcIiFnYW1lLmNvbXBsZXRlXFxcIj5bIHt7c3F1YWQucmVjb3JkfX0gXTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwicmVjb3JkLXNjb3JlXFxcIiBuZy1zaG93PVxcXCJnYW1lLmNvbXBsZXRlXFxcIj5bIHt7Z2V0U2NvcmUoZ2FtZSwgJGluZGV4KX19IF0gPHNwYW4gbmctc2hvdz1cXFwiKCRpbmRleCA9PT0gMSkgJiYgZ2FtZS5vdmVydGltZSA9PT0gdHJ1ZVxcXCI+T1Q8L3NwYW4+PC9zcGFuPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJiYWRnZVxcXCIgbmctc2hvdz1cXFwiIWdhbWUuc3RhcnRlZCAmJiAhaGFzU3F1YWRCZWVuVXNlZChnYW1lLCBzcXVhZClcXFwiPlBpY2s8L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvYT5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPGRpdiBuZy1yZXBlYXQtZW5kPjwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+Q2FuY2VsPC9idXR0b24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9wbGF5L2xlYWd1ZXMvcGxheS5sZWFndWVzLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL3BsYXkvbGVhZ3Vlcy9wbGF5LmxlYWd1ZXMudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgbmctc2hvdz1cXFwibGVhZ3Vlcy5sZW5ndGggPiAwXFxcIiBjbGFzcz1cXFwibGVhZ3Vlcy1jb250YWluZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwibXktbGVhZ3VlcyBsaXN0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGEgbmctcmVwZWF0PVxcXCJsZWFndWUgaW4gbGVhZ3VlcyB8IG1hbmFnZWRMZWFndWVGaWx0ZXI6bGVhZ3VlT3B0aW9ucyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0IHwgb2Zmc2V0RmlsdGVyOihjdXJyZW50TGVhZ3VlUGFnZS0xKSpsZWFndWVzUGVyUGFnZSB8IGxpbWl0VG86bGVhZ3Vlc1BlclBhZ2VcXFwiIG5nLWNsaWNrPVxcXCJ2aWV3TGVhZ3VlKGxlYWd1ZSlcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZWFndWUtbmFtZSBjb2wtc20tNSBjb2wtbWQtNVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1jb21tZW50IGZhLWZ3XFxcIiBuZy1zaG93PVxcXCIhaXNDb21taXNoKGxlYWd1ZSkgJiYgbGVhZ3VlLm1lc3NhZ2UubGVuZ3RoID4gMFxcXCIgdGl0bGU9XFxcIkhhcyBtZXNzYWdlIGZyb20gY29tbWlzaFxcXCI+PC9pPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdXNlciBmYS1md1xcXCIgdGl0bGU9XFxcIk15IGxlYWd1ZVxcXCIgbmctc2hvdz1cXFwiaXNDb21taXNoKGxlYWd1ZSlcXFwiPjwvaT4ge3tsZWFndWUubmFtZX19PGJyPjxzcGFuIGNsYXNzPVxcXCJ0ZWFtLWNvdW50IGxlYWd1ZS1jb21taXNoXFxcIj5Db21taXNoOiB7e2xlYWd1ZS5jb21taXNoX25hbWVzLmpvaW4oJywgJyl9fTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTcgY29sLW1kLTdcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwibXktbGVhZ3VlLW1ldGFcXFwiPjxzcGFuIG5nLXNob3c9XFxcImxlYWd1ZS5lbGltaW5hdGlvblxcXCI+PHNwYW4gY2xhc3M9XFxcImxvc2VvcmdvaG9tZVxcXCI+TG9zZU9yR29Ib21lPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJsb2doXFxcIj5MT0dIPC9zcGFuPiBbIHNpbmdsZSBlbGltaW5hdGlvbiBdPC9zcGFuPjxzcGFuIG5nLXNob3c9XFxcIiFsZWFndWUuZWxpbWluYXRpb25cXFwiPkJpZ2dlc3QgTG9zZXIgWyBubyBlbGltaW5hdGlvbiBdPC9zcGFuPjxicj57e3N0YXJ0cyhsZWFndWUpfX08L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJiYWRnZVxcXCI+PHNwYW4gbmctc2hvdz1cXFwibGVhZ3VlLmVsaW1pbmF0aW9uXFxcIj57e2xlYWd1ZS5hbGl2ZV90ZWFtX2NvdW50fX0vPC9zcGFuPnt7bGVhZ3VlLnRlYW1fY291bnR9fSB0ZWFtPHNwYW4gbmctc2hvdz1cXFwibGVhZ3VlLnRlYW1fY291bnQgIT09IDFcXFwiPnM8L3NwYW4+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvYT5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwibXktbGVhZ3VlLXBhZ2luYXRpb25cXFwiIG5nLXNob3c9XFxcImxlYWd1ZXMubGVuZ3RoID4gbGVhZ3Vlc1BlclBhZ2VcXFwiPlxcblwiICtcbiAgICBcIiAgICA8cGFnaW5hdGlvbiBib3VuZGFyeS1saW5rcz1cXFwidHJ1ZVxcXCIgbWF4LXNpemU9XFxcIjRcXFwiIHRvdGFsLWl0ZW1zPVxcXCJsZWFndWVzLmxlbmd0aFxcXCIgaXRlbXMtcGVyLXBhZ2U9XFxcImxlYWd1ZXNQZXJQYWdlXFxcIiBuZy1tb2RlbD1cXFwiY3VycmVudExlYWd1ZVBhZ2VcXFwiIGNsYXNzPVxcXCJwYWdpbmF0aW9uLW1kXFxcIiBwcmV2aW91cy10ZXh0PVxcXCImbHNhcXVvO1xcXCIgbmV4dC10ZXh0PVxcXCImcnNhcXVvO1xcXCIgZmlyc3QtdGV4dD1cXFwiJmxhcXVvO1xcXCIgbGFzdC10ZXh0PVxcXCImcmFxdW87XFxcIj48L3BhZ2luYXRpb24+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgc3R5bGU9XFxcImNsZWFyOiBib3RoO1xcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiPCEtLWlmIHlvdSBoYXZlIG5vIGxlYWd1ZXMtLT5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJsZWFndWVzLWFsZXJ0IGFsZXJ0IGFsZXJ0LWluZm9cXFwiIG5nLXNob3c9XFxcIihsZWFndWVzIHwgbWFuYWdlZExlYWd1ZUZpbHRlcjpsZWFndWVPcHRpb25zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aCA9PSAwXFxcIj5cXG5cIiArXG4gICAgXCIgIE5vIGxlYWd1ZXMgZm91bmRcXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL3BsYXkvcGxheS50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9wbGF5L3BsYXkudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcInBsYXktaGVhZGVyLXJvdyByb3dcXFwiPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTcgY29sLW1kLTdcXFwiPlxcblwiICtcbiAgICBcIiAgICA8aDMgY2xhc3M9XFxcIm15LXRlYW1zLWhlYWRlclxcXCI+TXkgVGVhbXMgJiBMZWFndWVzPC9oMz5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTUgY29sLW1kLTVcXFwiPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJwbGF5LWJ0bi1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJqb2luLWxlYWd1ZS1idG4gYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1jbGljaz1cXFwiam9pbkxlYWd1ZShzZWxlY3RlZFNlYXNvbklkKVxcXCI+Sm9pbiBMZWFndWU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNyZWF0ZS1sZWFndWUtYnRuIGJ0biBidG4tcHJpbWFyeVxcXCIgbmctY2xpY2s9XFxcImNyZWF0ZUxlYWd1ZShzZWxlY3RlZFNlYXNvbklkKVxcXCI+Q3JlYXRlIExlYWd1ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxocj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJ0ZWFtcy1sZWFndWVzLXRhYnNcXFwiPlxcblwiICtcbiAgICBcIiAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2LXRhYnNcXFwiPlxcblwiICtcbiAgICBcIiAgICA8bGkgbmctY2xhc3M9XFxcInsnYWN0aXZlJzogaXNTdGF0ZShbJ3ByaXZhdGUucGxheS50ZWFtcyddKX1cXFwiIG5nLWNsaWNrPVxcXCJyZXNldFNlYXJjaCgpXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YSBuZy1jbGljaz1cXFwibXlUZWFtcyhzZWxlY3RlZFNlYXNvbklkKVxcXCI+PHNwYW4gY2xhc3M9XFxcIm15LXRlYW1zXFxcIj5NeSBUZWFtczwvc3Bhbj48L2E+XFxuXCIgK1xuICAgIFwiICAgIDwvbGk+XFxuXCIgK1xuICAgIFwiICAgIDxsaSBuZy1jbGFzcz1cXFwieydhY3RpdmUnOiBpc1N0YXRlKFsncHJpdmF0ZS5wbGF5LmxlYWd1ZXMnXSl9XFxcIiBuZy1jbGljaz1cXFwicmVzZXRTZWFyY2goKVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGEgbmctY2xpY2s9XFxcIm15TGVhZ3VlcyhzZWxlY3RlZFNlYXNvbklkKVxcXCI+PHNwYW4gY2xhc3M9XFxcIm15LWxlYWd1ZXNcXFwiPk15IExlYWd1ZXM8L3NwYW4+PC9hPlxcblwiICtcbiAgICBcIiAgICA8L2xpPlxcblwiICtcbiAgICBcIiAgPC91bD5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcInNlYXNvbnNcXFwiPlxcblwiICtcbiAgICBcIiAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLWNoYW5nZT1cXFwiY2hhbmdlU2Vhc29uKHNlbGVjdGVkU2Vhc29uSWQpXFxcIiBuZy1tb2RlbD1cXFwic2VsZWN0ZWRTZWFzb25JZFxcXCIgbmctb3B0aW9ucz1cXFwic3RhcnRlZFNlYXNvbi5pZCBhcyBzdGFydGVkU2Vhc29uLm5hbWUgZm9yIHN0YXJ0ZWRTZWFzb24gaW4gc3RhcnRlZFNlYXNvbnNcXFwiPjwvc2VsZWN0PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgY3VzdG9tLXNlYXJjaC1mb3JtIGZpbHRlci10ZWFtLWxlYWd1ZVxcXCI+XFxuXCIgK1xuICAgIFwiICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIlNlYXJjaC4uLlxcXCIgbmctbW9kZWw9XFxcInF1ZXJ5XFxcIj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJwbGF5LWNvbnRlbnRcXFwiIHVpLXZpZXc9XFxcInBsYXlDb250ZW50XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL3BsYXkvdGVhbXMvcGxheS50ZWFtcy50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9wbGF5L3RlYW1zL3BsYXkudGVhbXMudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgbmctc2hvdz1cXFwidGVhbXMubGVuZ3RoID4gMFxcXCIgY2xhc3M9XFxcImxlYWd1ZXMtY29udGFpbmVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcIm15LXRlYW1zIGxpc3QtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICA8YSBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIiBuZy1jbGFzcz1cXFwieydpbmFjdGl2ZSc6ICF0ZWFtLmFjdGl2ZSB8fCAhdGVhbS5hbGl2ZX1cXFwiIG5nLXJlcGVhdD1cXFwidGVhbSBpbiB0ZWFtcyB8IGFsaXZlVGVhbUZpbHRlcjp0ZWFtT3B0aW9ucyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0IHwgb2Zmc2V0RmlsdGVyOihjdXJyZW50VGVhbVBhZ2UtMSkqdGVhbXNQZXJQYWdlIHwgbGltaXRUbzp0ZWFtc1BlclBhZ2VcXFwiIG5nLWNsaWNrPVxcXCJzaG93VGVhbSh0ZWFtKVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImxlYWd1ZS1uYW1lIGNvbC1zbS01IGNvbC1tZC01XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWNvbW1lbnQgZmEtZndcXFwiIG5nLXNob3c9XFxcInRlYW0ubWVzc2FnZS5sZW5ndGggPiAwXFxcIiB0aXRsZT1cXFwiSGFzIG1lc3NhZ2UgZnJvbSBjb21taXNoXFxcIj48L2k+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIG5nLWNsYXNzPVxcXCJ7J2RlYWQtdGVhbS1uYW1lJzogIXRlYW0uYWN0aXZlIHx8ICF0ZWFtLmFsaXZlfVxcXCI+e3t0ZWFtLm5hbWV9fTwvc3Bhbj48YnI+PHNwYW4gY2xhc3M9XFxcInRlYW0tbGVhZ3VlXFxcIj57e3RlYW0ubGVhZ3VlLm5hbWV9fTwvc3Bhbj48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS03IGNvbC1tZC03XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImN1cnJlbnQtcGlja1xcXCIgbmctY2xhc3M9XFxcInsnbm8tcGljayc6IGhhc05vUGljayh0ZWFtKX1cXFwiIG5nLXNob3c9XFxcInRlYW0uYWN0aXZlICYmIHRlYW0uc3RhcnRlZFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWxvY2sgZmEtZndcXFwiIG5nLXNob3c9XFxcInRlYW0ubGFzdF9waWNrLmxvY2tlZCAmJiB0ZWFtLmxhc3RfcGljay5jb3JyZWN0ID09IG51bGxcXFwiIHRpdGxlPVxcXCJQaWNrIGxvY2tlZFxcXCI+PC9pPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS11bmxvY2sgZmEtZndcXFwiIG5nLXNob3c9XFxcIiF0ZWFtLmxhc3RfcGljay5sb2NrZWQgJiYgdGVhbS5sYXN0X3BpY2suY29ycmVjdCA9PSBudWxsXFxcIiB0aXRsZT1cXFwiUGljayB1bmxvY2tlZFxcXCI+PC9pPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS10aW1lcyBmYS1md1xcXCIgbmctc2hvdz1cXFwidGVhbS5sYXN0X3BpY2suY29ycmVjdCA9PT0gZmFsc2VcXFwiIHRpdGxlPVxcXCJQaWNrIHdyb25nXFxcIj48L2k+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWNoZWNrIGZhLWZ3XFxcIiBuZy1zaG93PVxcXCJ0ZWFtLmxhc3RfcGljay5jb3JyZWN0ID09PSB0cnVlXFxcIiB0aXRsZT1cXFwiUGljayBjb3JyZWN0XFxcIj48L2k+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgWyA8c3BhbiBjbGFzcz1cXFwiY3VycmVudC1sb3Nlci1uYW1lXFxcIj57e3RlYW0ubGFzdF9waWNrLm5hbWV9fTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiY3VycmVudC1sb3Nlci1hYmJyZXZcXFwiPnt7dGVhbS5sYXN0X3BpY2suYWJicmV2fX08L3NwYW4+IF1cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY3VycmVudC1waWNrXFxcIiBuZy1zaG93PVxcXCJ0ZWFtLmFjdGl2ZSAmJiAhdGVhbS5zdGFydGVkXFxcIj5TdGFydHMge3t0ZWFtLnN0YXJ0X3dlZWt9fTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImluYWN0aXZlLXRlYW0gY3VycmVudC1waWNrXFxcIiBuZy1zaG93PVxcXCIhdGVhbS5hY3RpdmVcXFwiPlRlYW0gaGFzIGJlZW4gZGVhY3RpdmF0ZWQ8L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJiYWRnZVxcXCI+e3t0ZWFtLmNvcnJlY3RfcGlja3NfY291bnR9fSBsb3NlcjxzcGFuIG5nLXNob3c9XFxcInRlYW0uY29ycmVjdF9waWNrc19jb3VudCAhPT0gMVxcXCI+czwvc3Bhbj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9hPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJteS1sZWFndWUtcGFnaW5hdGlvblxcXCIgbmctc2hvdz1cXFwidGVhbXMubGVuZ3RoID4gdGVhbXNQZXJQYWdlICYmICh0ZWFtcyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0KS5sZW5ndGggPiAwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPHBhZ2luYXRpb24gYm91bmRhcnktbGlua3M9XFxcInRydWVcXFwiIG1heC1zaXplPVxcXCI0XFxcIiB0b3RhbC1pdGVtcz1cXFwiKHRlYW1zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aFxcXCIgaXRlbXMtcGVyLXBhZ2U9XFxcInRlYW1zUGVyUGFnZVxcXCIgbmctbW9kZWw9XFxcImN1cnJlbnRUZWFtUGFnZVxcXCIgY2xhc3M9XFxcInBhZ2luYXRpb24tbWRcXFwiIHByZXZpb3VzLXRleHQ9XFxcIiZsc2FxdW87XFxcIiBuZXh0LXRleHQ9XFxcIiZyc2FxdW87XFxcIiBmaXJzdC10ZXh0PVxcXCImbGFxdW87XFxcIiBsYXN0LXRleHQ9XFxcIiZyYXF1bztcXFwiPjwvcGFnaW5hdGlvbj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPGRpdiBzdHlsZT1cXFwiY2xlYXI6IGJvdGg7XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJ0ZWFtcy1hbGVydCBhbGVydCBhbGVydC1pbmZvXFxcIiBuZy1zaG93PVxcXCIodGVhbXMgfCBhbGl2ZVRlYW1GaWx0ZXI6dGVhbU9wdGlvbnMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCkubGVuZ3RoID09IDBcXFwiPlxcblwiICtcbiAgICBcIiAgTm8gdGVhbXMgZm91bmRcXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL3RlYW0vZWRpdC90ZWFtLmVkaXQudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvdGVhbS9lZGl0L3RlYW0uZWRpdC50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+RWRpdCBUZWFtPC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxmb3JtIG5hbWU9XFxcImVkaXRUZWFtRm9ybVxcXCIgY2xhc3M9XFxcImVkaXQtdGVhbS1mb3JtIGZvcm0taG9yaXpvbnRhbFxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZT5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IoZWRpdFRlYW1Gb3JtLnRlYW1OYW1lKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKGVkaXRUZWFtRm9ybS50ZWFtTmFtZSl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgZm9yPVxcXCJ0ZWFtTmFtZVxcXCIgY2xhc3M9XFxcImNvbC1zbS0zIGNvbnRyb2wtbGFiZWxcXFwiPlRlYW0gTmFtZTo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS05XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxpbnB1dCBpZD1cXFwidGVhbU5hbWVcXFwiIG5hbWU9XFxcInRlYW1OYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgYSB0ZWFtIG5hbWVcXFwiIG5nLW1vZGVsPVxcXCJ0ZWFtRGF0YS5uYW1lXFxcIiBuZy1tYXhsZW5ndGg9XFxcIjMwXFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoZWRpdFRlYW1Gb3JtLnRlYW1OYW1lLCAncmVxdWlyZWQnKVxcXCI+UmVxdWlyZWQ8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJpbnB1dC1lcnJvclxcXCIgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihlZGl0VGVhbUZvcm0udGVhbU5hbWUsICdtYXhsZW5ndGgnKVxcXCI+VG9vIExvbmc8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IoZWRpdFRlYW1Gb3JtLnRlYW1OYW1lKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZm9ybT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwiZWRpdFRlYW1Gb3JtLiRpbnZhbGlkXFxcIiBuZy1jbGljaz1cXFwiZWRpdFRlYW0odGVhbURhdGEpXFxcIj5VcGRhdGU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL3RlYW0vbWVzc2FnZS90ZWFtLm1lc3NhZ2UudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvdGVhbS9tZXNzYWdlL3RlYW0ubWVzc2FnZS50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+VXBkYXRlIE1lc3NhZ2U8L2gzPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgPGZvcm0gbmFtZT1cXFwibWVzc2FnZUZvcm1cXFwiIGNsYXNzPVxcXCJ0ZWFtLW1lc3NhZ2UtZm9ybSBmb3JtLWhvcml6b250YWxcXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKG1lc3NhZ2VGb3JtLm1lc3NhZ2UpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IobWVzc2FnZUZvcm0ubWVzc2FnZSl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgZm9yPVxcXCJtZXNzYWdlXFxcIiBjbGFzcz1cXFwiY29sLXNtLTQgY29udHJvbC1sYWJlbFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICBUZWFtIE1lc3NhZ2U6IDxicj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobWVzc2FnZUZvcm0ubWVzc2FnZSwgJ21heGxlbmd0aCcpXFxcIj5bIFRvbyBMb25nIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLThcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPHRleHRhcmVhIGlkPVxcXCJtZXNzYWdlXFxcIiBuYW1lPVxcXCJtZXNzYWdlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgYSBtZXNzYWdlIHRvIHB1dCBvbiB0aGUgdGVhbSdzIHdhbGwuLi5cXFwiIHJvd3M9XFxcIjNcXFwiIG5nLW1heGxlbmd0aD1cXFwiNTAwXFxcIiBuZy1tb2RlbD1cXFwidGVhbURhdGEubWVzc2FnZVxcXCI+PC90ZXh0YXJlYT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImVtYWlsLXRlYW0tbWVzc2FnZS1jaGVja2JveFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIG5nLW1vZGVsPVxcXCJtZXNzYWdlT3B0aW9ucy5zZW5kRW1haWxcXFwiPiBlbWFpbCBtZXNzYWdlIHRvIGNvYWNoPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IobWVzc2FnZUZvcm0ubWVzc2FnZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctZGlzYWJsZWQ9XFxcIm1lc3NhZ2VGb3JtLiRwcmlzdGluZSB8fCBtZXNzYWdlRm9ybS4kaW52YWxpZFxcXCIgbmctY2xpY2s9XFxcInVwZGF0ZU1lc3NhZ2UodGVhbURhdGEsIG1lc3NhZ2VPcHRpb25zLnNlbmRFbWFpbClcXFwiPlVwZGF0ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvdGVhbS90ZWFtLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL3RlYW0vdGVhbS50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiB1aS12aWV3PVxcXCJ0ZWFtQ29udGVudFxcXCIgY2xhc3M9XFxcInRlYW0tY29udGVudFxcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS90ZWFtL3ZpZXcvdGVhbS52aWV3LnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL3RlYW0vdmlldy90ZWFtLnZpZXcudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgbmctc2hvdz1cXFwiIXRlYW1EYXRhLmFjdGl2ZVxcXCI+VGhpcyB0ZWFtIGhhcyBiZWVuIGRlYWN0aXZhdGVkIGJ5IHRoZSBjb21taXNoIGFuZCB3aWxsIGJlIHVuYWJsZSB0byBwaWNrIGxvc2Vycy4gPGEgY2xhc3M9XFxcImFsZXJ0LWxpbmtcXFwiIG5nLWNsaWNrPVxcXCJjb250YWN0Q29tbWlzaCh0ZWFtRGF0YSlcXFwiPkNvbnRhY3QgdGhlIGNvbW1pc2g8L2E+IGlmIHlvdSBoYXZlIHF1ZXN0aW9ucy48L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiIG5nLXNob3c9XFxcInRlYW1EYXRhLmFjdGl2ZSAmJiB0ZWFtRGF0YS5hbGl2ZSAmJiB0ZWFtRGF0YS5zdGFydGVkICYmIGhhc05vUGljayh0ZWFtRGF0YSlcXFwiPk5vIGxvc2VyIHBpY2tlZCBmb3IgY3VycmVudCB3ZWVrLiA8c3BhbiBuZy1zaG93PVxcXCJpc0NvYWNoKHRlYW1EYXRhKVxcXCI+PGEgY2xhc3M9XFxcImFsZXJ0LWxpbmtcXFwiIG5nLWNsaWNrPVxcXCJtYWtlUGljayh0ZWFtRGF0YSlcXFwiPlBpY2s8L2E+IG5vdy48L3NwYW4+PC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiBuZy1zaG93PVxcXCJ0ZWFtRGF0YS5hY3RpdmUgJiYgIXRlYW1EYXRhLmFsaXZlXFxcIj5UaGlzIHRlYW0gaXMgREVBRC4gU28gc29ycnkuPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtd2FybmluZ1xcXCIgbmctc2hvdz1cXFwiaXNDb2FjaCh0ZWFtRGF0YSkgJiYgdGVhbURhdGEuYWN0aXZlICYmICF0ZWFtRGF0YS5zdGFydGVkXFxcIj5Zb3UgY2FuIG1ha2UgeW91ciBmaXJzdCBwaWNrIHdoZW4gdGhlIGxlYWd1ZSBzdGFydHMgLSB7e3RlYW1EYXRhLnN0YXJ0X3dlZWtfZGlzcGxheX19PC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtd2FybmluZ1xcXCIgbmctc2hvdz1cXFwiaXNDb2FjaCh0ZWFtRGF0YSkgJiYgdGVhbURhdGEuYWN0aXZlICYmIHRlYW1EYXRhLmFsaXZlICYmIHRlYW1EYXRhLmxhc3RfcGljay5sb2NrZWRcXFwiPllvdXIgcGljayBpcyBsb2NrZWQgZm9yIHt7dGVhbURhdGEubGFzdF9waWNrLndlZWt9fTwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImhlYWRlci1yb3cgcm93XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS04IGNvbC1tZC04XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwIHRlYW1zLWRyb3Bkb3duXFxcIiBkcm9wZG93biBpcy1vcGVuPVxcXCJ0ZWFtRHJvcGRvd24uaXNvcGVuXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcInRlYW1zLWJ0bi1saW5rIGJ0biBidG4tbGluayBkcm9wZG93bi10b2dnbGVcXFwiIG5nLWRpc2FibGVkPVxcXCIhaXNDb2FjaCh0ZWFtRGF0YSkgJiYgIWlzQ29tbWlzaCh0ZWFtRGF0YSkgJiYgIWlzQWRtaW4oKVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtZG9sbGFyIGZhLWZ3XFxcIiBuZy1zaG93PVxcXCJpc0NvbW1pc2godGVhbURhdGEpICYmIHRlYW1EYXRhLnBhaWQgPT0gdHJ1ZVxcXCIgdGl0bGU9XFxcIlBhaWRcXFwiPjwvaT4gPHN0cm9uZz48c3BhbiBjbGFzcz1cXFwidGVhbS1uYW1lXFxcIiBuZy1jbGFzcz1cXFwieyd0ZWFtLWluYWN0aXZlJzogIXRlYW1EYXRhLmFjdGl2ZSB8fCAhdGVhbURhdGEuYWxpdmUsICdkaXNhYmxlZCc6ICFpc0NvYWNoKHRlYW1EYXRhKSAmJiAhaXNDb21taXNoKHRlYW1EYXRhKSAmJiAhaXNBZG1pbigpfVxcXCI+e3t0ZWFtRGF0YS5uYW1lfX08L3NwYW4+IDxzcGFuIG5nLXNob3c9XFxcImlzQ29hY2godGVhbURhdGEpIHx8IGlzQ29tbWlzaCh0ZWFtRGF0YSlcXFwiIGNsYXNzPVxcXCJjYXJldFxcXCI+PC9zcGFuPjwvc3Ryb25nPlxcblwiICtcbiAgICBcIiAgICAgIDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudSB0ZWFtcy1idG4tbWVudVxcXCIgcm9sZT1cXFwibWVudVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGk+PGEgbmctY2xpY2s9XFxcInRvZ2dsZURyb3Bkb3duKCRldmVudCk7ZWRpdFRlYW0odGVhbURhdGEpXFxcIj5FZGl0IHt7dGVhbURhdGEubmFtZX19PC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGk+PGEgbmctc2hvdz1cXFwiaXNDb21taXNoKHRlYW1EYXRhKVxcXCIgbmctY2xpY2s9XFxcInRvZ2dsZURyb3Bkb3duKCRldmVudCk7dXBkYXRlTWVzc2FnZSh0ZWFtRGF0YSlcXFwiPkVkaXQgdGVhbSBtZXNzYWdlPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGkgbmctc2hvdz1cXFwiaXNDb21taXNoKHRlYW1EYXRhKSAmJiAhdGVhbURhdGEucGFpZFxcXCI+PGEgbmctY2xpY2s9XFxcInRvZ2dsZURyb3Bkb3duKCRldmVudCk7cGFpZCh0ZWFtRGF0YSlcXFwiPk1hcmsgdGVhbSBhcyBwYWlkPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGkgbmctc2hvdz1cXFwiaXNDb21taXNoKHRlYW1EYXRhKSAmJiB0ZWFtRGF0YS5wYWlkXFxcIj48YSBuZy1jbGljaz1cXFwidG9nZ2xlRHJvcGRvd24oJGV2ZW50KTt1bnBhaWQodGVhbURhdGEpXFxcIj5NYXJrIHRlYW0gYXMgdW5wYWlkPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGkgbmctc2hvdz1cXFwiaXNDb21taXNoKHRlYW1EYXRhKSAmJiAhdGVhbURhdGEuYWN0aXZlXFxcIj48YSBuZy1jbGljaz1cXFwidG9nZ2xlRHJvcGRvd24oJGV2ZW50KTtjb25maXJtQWN0aXZhdGUodGVhbURhdGEpXFxcIj5SZWFjdGl2YXRlIHRoaXMgdGVhbTwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgICAgPGxpIG5nLXNob3c9XFxcImlzQ29tbWlzaCh0ZWFtRGF0YSkgJiYgdGVhbURhdGEuYWN0aXZlXFxcIj48YSBuZy1jbGljaz1cXFwidG9nZ2xlRHJvcGRvd24oJGV2ZW50KTtjb25maXJtRGVhY3RpdmF0ZSh0ZWFtRGF0YSlcXFwiPkRlYWN0aXZhdGUgdGhpcyB0ZWFtPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGkgbmctc2hvdz1cXFwiIWlzQ29tbWlzaCh0ZWFtRGF0YSlcXFwiPjxhIG5nLWNsaWNrPVxcXCJ0b2dnbGVEcm9wZG93bigkZXZlbnQpO2NvbnRhY3RDb21taXNoKHRlYW1EYXRhKVxcXCI+Q29udGFjdCB0aGUgY29tbWlzaDwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgICAgPGxpIGNsYXNzPVxcXCJkaXZpZGVyXFxcIiBuZy1zaG93PVxcXCJsZWFndWVUZWFtcy5sZW5ndGggPiAxXFxcIj48L2xpPlxcblwiICtcbiAgICBcIiAgICAgICAgPGxpIG5nLXJlcGVhdD1cXFwidGVhbSBpbiBsZWFndWVUZWFtc1xcXCIgbmctc2hvdz1cXFwidGVhbS5pZCAhPSB0ZWFtRGF0YS5pZFxcXCI+PGEgbmctY2xpY2s9XFxcInNob3dUZWFtKHRlYW0pXFxcIj48c3BhbiBjbGFzcz1cXFwib3RoZXItdGVhbS1uYW1lXFxcIiBuZy1jbGFzcz1cXFwieyd0ZWFtLWluYWN0aXZlJzogIXRlYW0uYWN0aXZlIHx8ICF0ZWFtLmFsaXZlfVxcXCI+e3t0ZWFtLm5hbWV9fTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcIm90aGVyLXRlYW0tcGlja1xcXCI+e3t0ZWFtLmxhc3RfcGljay5hYmJyZXZ9fTwvc3Bhbj48L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICA8L3VsPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGg2PjxhIG5nLWNsaWNrPVxcXCJzaG93TGVhZ3VlKHRlYW1EYXRhKVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWNoZXZyb24tbGVmdCBmYS1md1xcXCI+PC9pPiA8c3BhbiBjbGFzcz1cXFwidGVhbS1sZWFndWUtbmFtZVxcXCI+e3t0ZWFtRGF0YS5sZWFndWUubmFtZX19PC9zcGFuPjwvYT48L2g2PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNCBjb2wtbWQtNFxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwibWFrZS1waWNrLWJ0biBidG4gYnRuLXByaW1hcnlcXFwiIG5nLXNob3c9XFxcImlzQ29hY2godGVhbURhdGEpXFxcIiBuZy1jbGljaz1cXFwibWFrZVBpY2sodGVhbURhdGEpXFxcIiBuZy1kaXNhYmxlZD1cXFwidGVhbURhdGEubGFzdF9waWNrLmxvY2tlZCB8fCAhdGVhbURhdGEuc3RhcnRlZFxcXCI+PHNwYW4gbmctc2hvdz1cXFwiaGFzTm9QaWNrKHRlYW1EYXRhKVxcXCI+UGljayBMb3Nlcjwvc3Bhbj48c3BhbiBuZy1zaG93PVxcXCIhaGFzTm9QaWNrKHRlYW1EYXRhKVxcXCI+Q2hhbmdlIExvc2VyPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICA8aDMgY2xhc3M9XFxcInRlYW0tbWV0YVxcXCIgbmctc2hvdz1cXFwiIWlzQ29hY2godGVhbURhdGEpXFxcIj48c21hbGw+Q29hY2ggWyB7e3RlYW1EYXRhLmNvYWNoX25hbWVzLmpvaW4oJywgJyl9fSBdPC9zbWFsbD48L2gzPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwidGVhbS1tZXNzYWdlIGFsZXJ0IGFsZXJ0LWluZm9cXFwiIG5nLXNob3c9XFxcImlzQ29tbWlzaCh0ZWFtRGF0YSkgfHwgaXNDb2FjaCh0ZWFtRGF0YSlcXFwiPjxzdHJvbmc+Q29tbWlzaCB0byB0ZWFtOjwvc3Ryb25nPiA8cCBjbGFzcz1cXFwidGVhbS1tZXNzYWdlLXRleHRcXFwiIG5nLXNob3c9XFxcIiF0ZWFtRGF0YS5tZXNzYWdlIHx8IHRlYW1EYXRhLm1lc3NhZ2UubGVuZ3RoID09IDBcXFwiPm5vdGhpbmc8L3A+PHAgY2xhc3M9XFxcInRlYW0tbWVzc2FnZS10ZXh0XFxcIiBuZy1zaG93PVxcXCJ0ZWFtRGF0YS5tZXNzYWdlLmxlbmd0aCA+IDBcXFwiIG5nLWJpbmQtaHRtbD1cXFwidGVhbURhdGEubWVzc2FnZSB8IGxpbmt5OidfYmxhbmsnXFxcIj48L3A+IDxhIGNsYXNzPVxcXCJhbGVydC1saW5rXFxcIiBuZy1zaG93PVxcXCJpc0NvbW1pc2godGVhbURhdGEpXFxcIiBuZy1jbGljaz1cXFwidXBkYXRlTWVzc2FnZSh0ZWFtRGF0YSlcXFwiPlsgZWRpdCBdPC9hPjxhIGNsYXNzPVxcXCJhbGVydC1saW5rXFxcIiBuZy1zaG93PVxcXCIhaXNDb21taXNoKHRlYW1EYXRhKVxcXCIgbmctY2xpY2s9XFxcImNvbnRhY3RDb21taXNoKHRlYW1EYXRhKVxcXCI+WyBjb250YWN0IF08L2E+PC9kaXY+XFxuXCIgK1xuICAgIFwiPGhyPlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImxvc2Vycy10YWJcXFwiPlxcblwiICtcbiAgICBcIiAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2LXRhYnNcXFwiPlxcblwiICtcbiAgICBcIiAgICA8bGkgY2xhc3M9XFxcImFjdGl2ZVxcXCI+PGE+TG9zZXJzIFsge3tjb3JyZWN0UGlja0NvdW50KChwaWNrcyB8IHdlZWtQaWNrc0ZpbHRlcjpzZWxlY3RlZFdlZWtJZCkpfX0gXTwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgPC91bD5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcIndlZWtzXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1jaGFuZ2U9XFxcImNoYW5nZVdlZWsoc2VsZWN0ZWRXZWVrSWQpXFxcIiBuZy1tb2RlbD1cXFwic2VsZWN0ZWRXZWVrSWRcXFwiIG5nLW9wdGlvbnM9XFxcImxlYWd1ZVdlZWsuaWQgYXMgbGVhZ3VlV2Vlay5kaXNwbGF5IGZvciBsZWFndWVXZWVrIGluIGxlYWd1ZVdlZWtzXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJcXFwiPkFsbCBXZWVrczwvb3B0aW9uPlxcblwiICtcbiAgICBcIiAgICA8L3NlbGVjdD5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcInRlYW0tY29udGFpbmVyXFxcIiBzdHlsZT1cXFwiY2xlYXI6Ym90aDtcXFwiPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJ0ZWFtLXBpY2tzIGxpc3QtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxhIG5nLXJlcGVhdD1cXFwicGljayBpbiBwaWNrcyB8IHdlZWtQaWNrc0ZpbHRlcjpzZWxlY3RlZFdlZWtJZFxcXCIgY2xhc3M9XFxcInRlYW0tcGljayBsaXN0LWdyb3VwLWl0ZW1cXFwiIG5nLWNsaWNrPVxcXCJtYWtlUGljayh0ZWFtRGF0YSwgcGljaylcXFwiIG5nLWNsYXNzPVxcXCJ7J2xvY2tlZCc6ICFpc0NvYWNoKHRlYW1EYXRhKSB8fCBwaWNrLmxvY2tlZCwgJ2luY29ycmVjdCc6IHBpY2suY29ycmVjdCA9PT0gZmFsc2V9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndlZWstbmFtZSBjb2wtc20tNyBjb2wtbWQtN1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWxvY2sgZmEtZndcXFwiIG5nLXNob3c9XFxcInBpY2subG9ja2VkICYmIHBpY2suY29ycmVjdCA9PSBudWxsXFxcIiB0aXRsZT1cXFwiUGljayBsb2NrZWRcXFwiPjwvaT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdW5sb2NrIGZhLWZ3XFxcIiBuZy1zaG93PVxcXCIhcGljay5sb2NrZWQgJiYgcGljay5jb3JyZWN0ID09IG51bGxcXFwiIHRpdGxlPVxcXCJQaWNrIHVubG9ja2VkXFxcIj48L2k+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXRpbWVzIGZhLWZ3XFxcIiBuZy1zaG93PVxcXCJwaWNrLmNvcnJlY3QgPT09IGZhbHNlXFxcIiB0aXRsZT1cXFwiUGljayB3cm9uZ1xcXCI+PC9pPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1jaGVjayBmYS1md1xcXCIgbmctc2hvdz1cXFwicGljay5jb3JyZWN0ID09PSB0cnVlXFxcIiB0aXRsZT1cXFwiUGljayBjb3JyZWN0XFxcIj48L2k+IDxzcGFuIGNsYXNzPVxcXCJwaWNrLXNxdWFkXFxcIj48c3BhbiBjbGFzcz1cXFwicGljay1zcXVhZC1uYW1lXFxcIj5bIHt7cGljay5zcXVhZC5uYW1lfX0gXTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwicGljay1zcXVhZC1hYmJyZXZcXFwiPlsge3twaWNrLnNxdWFkLmFiYnJldn19IF08L3NwYW4+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiZ2FtZS1zdGFydFxcXCI+e3twaWNrLndlZWtfdHlwZX19IHwge3twaWNrLndlZWtfbmFtZX19PHNwYW4gbmctc2hvdz1cXFwicGljay5nYW1lX3N0YXJ0Lmxlbmd0aCA+IDBcXFwiPiB8IHt7cGljay5nYW1lX3N0YXJ0fX08L3NwYW4+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ2FtZS1jb2x1bW4gY29sLXNtLTUgY29sLW1kLTVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnYW1lXFxcIj57e3BpY2suZ2FtZV9kaXNwbGF5fX08L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9hPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwibm8tcGlja3MtYWxlcnQgYWxlcnQgYWxlcnQtaW5mb1xcXCIgbmctc2hvdz1cXFwiKHBpY2tzIHwgd2Vla1BpY2tzRmlsdGVyOnNlbGVjdGVkV2Vla0lkKS5sZW5ndGggPT0gMFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgTm8gcGlja3NcXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS90ZWFtcy9hbGl2ZS90ZWFtcy5hbGl2ZS50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS90ZWFtcy9hbGl2ZS90ZWFtcy5hbGl2ZS50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwiYWxpdmUtdGVhbXMgbGlzdC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxhIG5nLXJlcGVhdD1cXFwidGVhbSBpbiBhbGl2ZVRlYW1zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QgfCBvZmZzZXRGaWx0ZXI6KGN1cnJlbnRUZWFtUGFnZS0xKSp0ZWFtc1BlclBhZ2UgfCBsaW1pdFRvOnRlYW1zUGVyUGFnZVxcXCIgbmctY2xpY2s9XFxcInNob3dUZWFtKHNlYXNvbklkLCB0ZWFtKVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRlYW0tbmFtZSBjb2wtc20tNiBjb2wtbWQtNlxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWNvbW1lbnQgZmEtZndcXFwiIG5nLXNob3c9XFxcInRlYW0ubWVzc2FnZS5sZW5ndGggPiAwXFxcIiB0aXRsZT1cXFwiSGFzIG1lc3NhZ2UgZnJvbSBjb21taXNoXFxcIj48L2k+PGkgY2xhc3M9XFxcImZhIGZhLXRpbWVzIGZhLWZ3XFxcIiB0aXRsZT1cXFwiRGVhY3RpdmF0ZWQgVGVhbVxcXCIgbmctc2hvdz1cXFwiIXRlYW0uYWN0aXZlXFxcIj48L2k+IDxzcGFuIG5nLWNsYXNzPVxcXCJ7J2luYWN0aXZlLXRlYW0tbmFtZSc6ICF0ZWFtLmFjdGl2ZX1cXFwiPnt7dGVhbS5uYW1lfX08L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0ZWFtLWxlYWd1ZVxcXCI+e3t0ZWFtLmxlYWd1ZS5uYW1lfX08L3NwYW4+PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY3VycmVudC1waWNrXFxcIiBuZy1jbGFzcz1cXFwieyduby1waWNrJzogaGFzTm9QaWNrKHRlYW0pfVxcXCIgbmctc2hvdz1cXFwidGVhbS5hY3RpdmVcXFwiPlBpY2s6IHt7dGVhbS5sYXN0X3BpY2submFtZX19PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5hY3RpdmUtdGVhbVxcXCIgbmctc2hvdz1cXFwiIXRlYW0uYWN0aXZlXFxcIj5UZWFtIGhhcyBiZWVuIGRlYWN0aXZhdGVkPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYmFkZ2VcXFwiPlZpZXc8L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9hPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImFsaXZlLXRlYW1zLXBhZ2luYXRpb25cXFwiIG5nLXNob3c9XFxcImFsaXZlVGVhbXMubGVuZ3RoID4gdGVhbXNQZXJQYWdlICYmIChhbGl2ZVRlYW1zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aCA+IDBcXFwiPlxcblwiICtcbiAgICBcIiAgPHBhZ2luYXRpb24gYm91bmRhcnktbGlua3M9XFxcInRydWVcXFwiIG1heC1zaXplPVxcXCI0XFxcIiB0b3RhbC1pdGVtcz1cXFwiKGFsaXZlVGVhbXMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCkubGVuZ3RoXFxcIiBpdGVtcy1wZXItcGFnZT1cXFwidGVhbXNQZXJQYWdlXFxcIiBuZy1tb2RlbD1cXFwiY3VycmVudFRlYW1QYWdlXFxcIiBjbGFzcz1cXFwicGFnaW5hdGlvbi1tZFxcXCIgcHJldmlvdXMtdGV4dD1cXFwiJmxzYXF1bztcXFwiIG5leHQtdGV4dD1cXFwiJnJzYXF1bztcXFwiIGZpcnN0LXRleHQ9XFxcIiZsYXF1bztcXFwiIGxhc3QtdGV4dD1cXFwiJnJhcXVvO1xcXCI+PC9wYWdpbmF0aW9uPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgc3R5bGU9XFxcImNsZWFyOiBib3RoO1xcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtaW5mb1xcXCIgbmctc2hvdz1cXFwiYWxpdmVUZWFtcy5sZW5ndGggPT0gMFxcXCI+XFxuXCIgK1xuICAgIFwiICBObyBhbGl2ZSB0ZWFtcyA6KCBNYXliZSB5b3Ugc2hvdWxkIDxhIGNsYXNzPVxcXCJhbGVydC1saW5rXFxcIiBuZy1jbGljaz1cXFwiY3JlYXRlVGVhbShzZWFzb25JZClcXFwiPmpvaW4gYSBsZWFndWU8L2E+IHByb250byFcXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL3RlYW1zL2RlYWQvdGVhbXMuZGVhZC50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS90ZWFtcy9kZWFkL3RlYW1zLmRlYWQudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcImRlYWQtdGVhbXMgbGlzdC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICA8YSBuZy1yZXBlYXQ9XFxcInRlYW0gaW4gZGVhZFRlYW1zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QgfCBvZmZzZXRGaWx0ZXI6KGN1cnJlbnRUZWFtUGFnZS0xKSp0ZWFtc1BlclBhZ2UgfCBsaW1pdFRvOnRlYW1zUGVyUGFnZVxcXCIgbmctY2xpY2s9XFxcInNob3dUZWFtKHNlYXNvbklkLCB0ZWFtKVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRlYW0tbmFtZSBjb2wtc20tNiBjb2wtbWQtNlxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWNvbW1lbnQgZmEtZndcXFwiIG5nLXNob3c9XFxcInRlYW0ubWVzc2FnZS5sZW5ndGggPiAwXFxcIiB0aXRsZT1cXFwiSGFzIG1lc3NhZ2UgZnJvbSBjb21taXNoXFxcIj48L2k+IDxpIGNsYXNzPVxcXCJmYSBmYS10aW1lcyBmYS1md1xcXCIgdGl0bGU9XFxcIkRlYWN0aXZhdGVkIFRlYW1cXFwiIG5nLXNob3c9XFxcIiF0ZWFtLmFjdGl2ZVxcXCI+PC9pPiA8c3BhbiBuZy1jbGFzcz1cXFwieydpbmFjdGl2ZS10ZWFtLW5hbWUnOiAhdGVhbS5hY3RpdmV9XFxcIj57e3RlYW0ubmFtZX19PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidGVhbS1sZWFndWVcXFwiPnt7dGVhbS5sZWFndWUubmFtZX19PC9zcGFuPjwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImN1cnJlbnQtcGljayBuby1waWNrXFxcIiBuZy1zaG93PVxcXCJ0ZWFtLmFjdGl2ZVxcXCI+UGljazoge3t0ZWFtLmxhc3RfcGljay5uYW1lfX08L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbmFjdGl2ZS10ZWFtXFxcIiBuZy1zaG93PVxcXCIhdGVhbS5hY3RpdmVcXFwiPlRlYW0gaGFzIGJlZW4gZGVhY3RpdmF0ZWQ8L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJiYWRnZVxcXCI+Vmlldzwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2E+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwiZGVhZC10ZWFtcy1wYWdpbmF0aW9uXFxcIiBuZy1zaG93PVxcXCJkZWFkVGVhbXMubGVuZ3RoID4gdGVhbXNQZXJQYWdlICYmIChkZWFkVGVhbXMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCkubGVuZ3RoID4gMFxcXCI+XFxuXCIgK1xuICAgIFwiICA8cGFnaW5hdGlvbiBib3VuZGFyeS1saW5rcz1cXFwidHJ1ZVxcXCIgbWF4LXNpemU9XFxcIjRcXFwiIHRvdGFsLWl0ZW1zPVxcXCIoZGVhZFRlYW1zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aFxcXCIgaXRlbXMtcGVyLXBhZ2U9XFxcInRlYW1zUGVyUGFnZVxcXCIgbmctbW9kZWw9XFxcImN1cnJlbnRUZWFtUGFnZVxcXCIgY2xhc3M9XFxcInBhZ2luYXRpb24tbWRcXFwiIHByZXZpb3VzLXRleHQ9XFxcIiZsc2FxdW87XFxcIiBuZXh0LXRleHQ9XFxcIiZyc2FxdW87XFxcIiBmaXJzdC10ZXh0PVxcXCImbGFxdW87XFxcIiBsYXN0LXRleHQ9XFxcIiZyYXF1bztcXFwiPjwvcGFnaW5hdGlvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IHN0eWxlPVxcXCJjbGVhcjogYm90aDtcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWluZm9cXFwiIG5nLXNob3c9XFxcImRlYWRUZWFtcy5sZW5ndGggPT0gMFxcXCI+XFxuXCIgK1xuICAgIFwiICBObyBkZWFkIHRlYW1zIDopXFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS90ZWFtcy90ZWFtcy50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS90ZWFtcy90ZWFtcy50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwidGVhbXMtaGVhZGVyLXJvdyByb3dcXFwiPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTkgY29sLW1kLTlcXFwiPlxcblwiICtcbiAgICBcIiAgICA8aDM+SSBjb2FjaCB0aGVzZSB0ZWFtcy4uLjwvaDM+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0zIGNvbC1tZC0zXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwidGVhbXMtYnRuLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNyZWF0ZS10ZWFtLWJ0biBidG4gYnRuLXByaW1hcnlcXFwiIG5nLWNsaWNrPVxcXCJjcmVhdGVUZWFtKHNlYXNvbklkKVxcXCI+Sm9pbiBMZWFndWU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8aHI+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwidGVhbXMtY29udGFpbmVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDx1bCBjbGFzcz1cXFwibmF2IG5hdi10YWJzXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGxpIG5nLWNsYXNzPVxcXCJ7J2FjdGl2ZSc6IGlzQWxpdmVTdGF0ZSgpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGEgbmctY2xpY2s9XFxcImFsaXZlVGVhbXMoc2Vhc29uSWQpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtdGh1bWJzLXVwIGZhLWZ3XFxcIiB0aXRsZT1cXFwiQWxpdmUgdGVhbXNcXFwiPjwvaT4gQWxpdmUgVGVhbXM8L2E+XFxuXCIgK1xuICAgIFwiICAgIDwvbGk+XFxuXCIgK1xuICAgIFwiICAgIDxsaSBuZy1jbGFzcz1cXFwieydhY3RpdmUnOiAhaXNBbGl2ZVN0YXRlKCl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YSBuZy1jbGljaz1cXFwiZGVhZFRlYW1zKHNlYXNvbklkKVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXRodW1icy1kb3duIGZhLWZ3XFxcIiB0aXRsZT1cXFwiRGVhZCB0ZWFtc1xcXCI+PC9pPiBEZWFkIFRlYW1zPC9hPlxcblwiICtcbiAgICBcIiAgICA8L2xpPlxcblwiICtcbiAgICBcIiAgPC91bD5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8IS0tIHBsYWNlaG9sZGVyIGZvciBhbGl2ZSBhbmQgZGVhZCB0ZWFtcyAtLT5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJ0ZWFtcy1jb250ZW50XFxcIiB1aS12aWV3PVxcXCJ0ZWFtc0NvbnRlbnRcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvdXNlci9yZXNldC91c2VyLnJlc2V0LnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL3VzZXIvcmVzZXQvdXNlci5yZXNldC50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+UmVzZXQgUGFzc3dvcmQ8L2gzPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgPGZvcm0gbmFtZT1cXFwicmVzZXRQYXNzd29yZEZvcm1cXFwiIGNsYXNzPVxcXCJyZXNldC1wYXNzd29yZC1mb3JtIGZvcm0taG9yaXpvbnRhbFxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZT5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IocmVzZXRQYXNzd29yZEZvcm0uZW1haWwpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IocmVzZXRQYXNzd29yZEZvcm0uZW1haWwpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGZvcj1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIj5FbWFpbDo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8aW5wdXQgaWQ9XFxcImVtYWlsXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciB5b3VyIGVtYWlsXFxcIiBuZy1tb2RlbD1cXFwidXNlckRhdGEuZW1haWxcXFwiIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJpbnB1dC1lcnJvclxcXCIgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihyZXNldFBhc3N3b3JkRm9ybS5lbWFpbCwgJ3JlcXVpcmVkJylcXFwiPlJlcXVpcmVkPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IocmVzZXRQYXNzd29yZEZvcm0uZW1haWwsICdlbWFpbCcpXFxcIj5JbnZhbGlkIGVtYWlsPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKHJlc2V0UGFzc3dvcmRGb3JtLmVtYWlsKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZm9ybT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwicmVzZXRQYXNzd29yZEZvcm0uJHByaXN0aW5lIHx8IHJlc2V0UGFzc3dvcmRGb3JtLiRpbnZhbGlkXFxcIiBuZy1jbGljaz1cXFwicmVzZXQodXNlckRhdGEuZW1haWwpXFxcIj5SZXNldDwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvdXNlci91c2VyLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL3VzZXIvdXNlci50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8aDMgY2xhc3M9XFxcInBhbmVsLXRpdGxlXFxcIj5Vc2VyIFByb2ZpbGU8L2gzPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8Zm9ybSBuYW1lPVxcXCJlZGl0VXNlckZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IoZWRpdFVzZXJGb3JtLmZpcnN0TmFtZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihlZGl0VXNlckZvcm0uZmlyc3ROYW1lKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiZmlyc3ROYW1lXFxcIj5GaXJzdCBOYW1lXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihlZGl0VXNlckZvcm0uZmlyc3ROYW1lLCAncmVxdWlyZWQnKVxcXCI+WyBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGVkaXRVc2VyRm9ybS5maXJzdE5hbWUsICdtYXhsZW5ndGgnKVxcXCI+WyBUb28gTG9uZyBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJmaXJzdE5hbWVcXFwiIG5hbWU9XFxcImZpcnN0TmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcInVzZXJEYXRhLnVzZXIuZmlyc3RfbmFtZVxcXCIgbmctbWF4bGVuZ3RoPVxcXCIxNVxcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKGVkaXRVc2VyRm9ybS5maXJzdE5hbWUpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihlZGl0VXNlckZvcm0ubGFzdE5hbWUpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IoZWRpdFVzZXJGb3JtLmxhc3ROYW1lKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwibGFzdE5hbWVcXFwiPkxhc3QgTmFtZVxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoZWRpdFVzZXJGb3JtLmxhc3ROYW1lLCAncmVxdWlyZWQnKVxcXCI+WyBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGVkaXRVc2VyRm9ybS5sYXN0TmFtZSwgJ21heGxlbmd0aCcpXFxcIj5bIFRvbyBMb25nIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcImxhc3ROYW1lXFxcIiBuYW1lPVxcXCJsYXN0TmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcInVzZXJEYXRhLnVzZXIubGFzdF9uYW1lXFxcIiBuZy1tYXhsZW5ndGg9XFxcIjIwXFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IoZWRpdFVzZXJGb3JtLmxhc3ROYW1lKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJlbWFpbFxcXCI+RW1haWw8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJlbWFpbFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIHR5cGU9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1kaXNhYmxlZD1cXFwidHJ1ZVxcXCIgbmctbW9kZWw9XFxcInVzZXJEYXRhLnVzZXIuZW1haWxcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihlZGl0VXNlckZvcm0ucGFzc3dvcmQpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IoZWRpdFVzZXJGb3JtLnBhc3N3b3JkKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwicGFzc3dvcmRcXFwiPk5ldyBQYXNzd29yZFxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoZWRpdFVzZXJGb3JtLnBhc3N3b3JkLCAnbWlubGVuZ3RoJylcXFwiPlsgOCAtIDUwIENoYXJhY3RlcnMgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihlZGl0VXNlckZvcm0ucGFzc3dvcmQsICdtYXhsZW5ndGgnKVxcXCI+WyA4IC0gNTAgQ2hhcmFjdGVycyBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwicGFzc3dvcmRcXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidXNlckRhdGEudXNlci5wYXNzd29yZFxcXCIgbmctbWlubGVuZ3RoPVxcXCI4XFxcIiBuZy1tYXhsZW5ndGg9XFxcIjUwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IoZWRpdFVzZXJGb3JtLnBhc3N3b3JkKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IoZWRpdFVzZXJGb3JtLmNvbmZpcm1QYXNzd29yZCksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihlZGl0VXNlckZvcm0uY29uZmlybVBhc3N3b3JkKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiY29uZmlybVBhc3N3b3JkXFxcIj5Db25maXJtIE5ldyBQYXNzd29yZFxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoZWRpdFVzZXJGb3JtLmNvbmZpcm1QYXNzd29yZCwgJ21hdGNoJylcXFwiPlsgTm8gTWF0Y2ggXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiBuYW1lPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidXNlckRhdGEudXNlci5wYXNzd29yZF9jb25maXJtYXRpb25cXFwiIG1hdGNoPVxcXCJ1c2VyRGF0YS51c2VyLnBhc3N3b3JkXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IoZWRpdFVzZXJGb3JtLmNvbmZpcm1QYXNzd29yZClcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWluZm8gYnRuLWJsb2NrXFxcIiBuZy1kaXNhYmxlZD1cXFwiZWRpdFVzZXJGb3JtLiRwcmlzdGluZSB8fCBlZGl0VXNlckZvcm0uJGludmFsaWRcXFwiIG5nLWNsaWNrPVxcXCJ1cGRhdGUodXNlckRhdGEudXNlcilcXFwiPlVwZGF0ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICAgIDwvZm9ybT5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3B1YmxpYy9hYnVzZS9hYnVzZS50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHVibGljL2FidXNlL2FidXNlLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5Db250YWN0IFVzPC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxmb3JtIG5hbWU9XFxcImFidXNlRm9ybVxcXCIgY2xhc3M9XFxcImNvbnRhY3QtZm9ybSBmb3JtLWhvcml6b250YWxcXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKGFidXNlRm9ybS5tZXNzYWdlKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKGFidXNlRm9ybS5tZXNzYWdlKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBmb3I9XFxcIm1lc3NhZ2VcXFwiIGNsYXNzPVxcXCJjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIj5NZXNzYWdlOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDx0ZXh0YXJlYSBpZD1cXFwibWVzc2FnZVxcXCIgbmFtZT1cXFwibWVzc2FnZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIldoYXQncyBvbiB5b3VyIG1pbmQ/XFxcIiByb3dzPVxcXCIzXFxcIiBtYXhsZW5ndGg9XFxcIjIwMFxcXCIgbmctbW9kZWw9XFxcImFidXNlTWVzc2FnZVxcXCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoYWJ1c2VGb3JtLm1lc3NhZ2UsICdyZXF1aXJlZCcpXFxcIj5SZXF1aXJlZDwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGFidXNlRm9ybS5tZXNzYWdlLCAnbWF4bGVuZ3RoJylcXFwiPlRvbyBMb25nPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKGFidXNlRm9ybS5tZXNzYWdlKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZm9ybT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwiYWJ1c2VGb3JtLiRwcmlzdGluZSB8fCBhYnVzZUZvcm0uJGludmFsaWRcXFwiIG5nLWNsaWNrPVxcXCJjb250YWN0VXMoYWJ1c2VNZXNzYWdlKVxcXCI+U2VuZDwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3B1YmxpYy9mYXEvZmFxLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wdWJsaWMvZmFxL2ZhcS50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjbG9zZSgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5GQVE8L2gzPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgPGRsIGNsYXNzPVxcXCJmYXFcXFwiPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+V2hpY2ggc3BvcnRzIGFyZSBhdmFpbGFibGU/PC9kdD5cXG5cIiArXG4gICAgXCIgICAgPGRkPk5GTCwgTkJBIG9yIE5ITC48L2RkPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+SG93IG11Y2ggZG9lcyBpdCBjb3N0PzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5aaXAuIFppbGNoLiBOYWRhLiBGcmVlZWVlZWVlZWVlZS4uLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5Ib3cgZG8gSSBwbGF5PzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5cXG5cIiArXG4gICAgXCIgICAgICA8cD4tIEpvaW4gYSBzaW5nbGUgZWxpbWluYXRpb24gb3Igbm9uLWVsaW1pbmF0aW9uIGxlYWd1ZS48L3A+XFxuXCIgK1xuICAgIFwiICAgICAgPHA+LSBQaWNrIGEgZGlmZmVyZW50IGxvc2VyIGVhY2ggd2Vlay48L3A+XFxuXCIgK1xuICAgIFwiICAgICAgPHA+LSBSb290IGZvciB5b3VyIGxvc2VyIHRvIGxvc2UuLi5kdWg8L3A+XFxuXCIgK1xuICAgIFwiICAgICAgPHA+LSBJbiBhIG5vbi1lbGltaW5hdGlvbiBsZWFndWUsIGdldCB0aGUgbW9zdCBwaWNrcyByaWdodCBhbmQgd2luLjwvcD5cXG5cIiArXG4gICAgXCIgICAgICA8cD4tIEluIHNpbmdsZSBlbGltaW5hdGlvbiBsZWFndWUsIGxhc3QgdGhlIGxvbmdlc3QgYW5kIHdpbi48L3A+XFxuXCIgK1xuICAgIFwiICAgICAgPHA+LSBIYXZlIGZ1biE8L3A+XFxuXCIgK1xuICAgIFwiICAgIDwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5DYW4gSSBwaWNrIHRoZSBzYW1lIGxvc2VyIHR3aWNlPzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5Ob3BlLi4udW5sZXNzIHlvdSBtYWtlIGl0IHRvIHRoZSBwbGF5b2ZmcywgdGhlbiBhbGwgdGVhbXMgYXJlIG9uY2UgYWdhaW4gYXZhaWxhYmxlIHRvIGNob29zZSBmcm9tLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5XaGVuIGlzIHRoZSBkZWFkbGluZSB0byBtYWtlIG15IHBpY2s/PC9kdD5cXG5cIiArXG4gICAgXCIgICAgPGRkPkp1c3QgZ2V0IGl0IGluIGJlZm9yZSBhIGdhbWUgc3RhcnRzLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5EbyB0aWVzIGNvdW50IGFzIGEgbG9zcz88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+Tm8gc2lyLiBCdXQgZm9yIE5ITCwgb3ZlcnRpbWUgb3Igc2hvb3RvdXQgbG9zc2VzIGNvdW50IGFzIGEgbG9zcy48L2RkPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+V2hhdCBpcyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIGEgcHVibGljIGFuZCBwcml2YXRlIGxlYWd1ZT88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+UHVibGljIGxlYWd1ZXMgYWxsb3cgYW55b25lIHRvIGpvaW4uIFByaXZhdGUgbGVhZ3VlcyByZXF1aXJlIGFuIGludml0YXRpb24gZnJvbSB0aGUgY29tbWlzaC48L2RkPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+VGhlIHNlYXNvbiBoYXMgYWxyZWFkeSBzdGFydGVkLCBjYW4gSSBzdGlsbCBwbGF5PzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5ZZXAuIFRoZXJl4oCZcyBhbHdheXMgYW4gb3BlbiBsZWFndWUgb3IgY3JlYXRlIHlvdXIgb3duIGxlYWd1ZSB0byBzdGFydCBhbnl0aW1lIGR1cmluZyB0aGUgc2Vhc29uLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5XaGVuIGlzIHRoZSBkZWFkbGluZSB0byBqb2luIGEgbGVhZ3VlPzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5Kb2luIGJlZm9yZSB0aGUgZW5kIG9mIHRoZSBsZWFndWUncyBmaXJzdCB3ZWVrLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5XaGF0IGlmIEkgZmFpbCB0byBtYWtlIGEgcGljayBmb3IgYSB3ZWVrPzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5JbiBhIHNpbmdsZSBlbGltaW5hdGlvbiBsZWFndWUsIHlvdeKAmXJlIHRvYXN0LiBJbiBhIG5vbi1lbGltaW5hdGlvbiBsZWFndWUsIHlvdSd2ZSBqdXN0IG1pc3NlZCBhbiBvcHBvcnR1bml0eS4gRG9uJ3QgbGV0IGl0IGhhcHBlbiBhZ2Fpbi48L2RkPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+Q2FuIHRoZSBjb21taXNoIG1ha2UgcGlja3MgZm9yIG1lPzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5OZWdhdGl2ZS48L2RkPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+SG93IG1hbnkgdGltZXMgY2FuIEkgam9pbiBhIGxlYWd1ZT88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+QXMgbXVjaCBhcyB0aGUgY29tbWlzaCBhbGxvd3MgKHdpdGggYSBtYXggb2YgMTAgdGltZXMpLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5Ib3cgZG8gSSB3aW4/PC9kdD5cXG5cIiArXG4gICAgXCIgICAgPGRkPkluIGEgc2luZ2xlIGVsaW1pbmF0aW9uIGxlYWd1ZSwgZG9u4oCZdCBiZSB3cm9uZy4gKE9yIGF0IGxlYXN0IGJlIHRoZSBsYXN0IG9uZSBpbiB5b3VyIGxlYWd1ZSB0byBiZSB3cm9uZy4pIEluIGEgbm9uLWVsaW1pbmF0aW9uIGxlYWd1ZSwgZ2V0IHRoZSBtb3N0IHBpY2tzIHJpZ2h0IHRvIHdpbi48L2RkPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+V2hhdCBkbyBJIHdpbj88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+VGhhdCBpcyBiZXR3ZWVuIHlvdSBhbmQgdGhlIGNvbW1pc2ggb2YgdGhlIGxlYWd1ZS4gSG93ZXZlciwgcGxlYXNlIGJlIGNhcmVmdWwgd2hlbiBkZWFsaW5nIHdpdGggbW9uZXkuIERvbuKAmXQgc2VuZCBtb25leSB0byBhbnlvbmUgeW91IGRvbuKAmXQga25vdy4gQ29tbW9uIHNlbnNlLCBwbGVhc2UuPC9kZD5cXG5cIiArXG4gICAgXCIgICAgPGR0PkNhbiBJIHNlZSB0aGUgcGljayBvZiBvdGhlcnMgaW4gbXkgbGVhZ3VlPzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5Pbmx5IGFmdGVyIHRoZSBnYW1lIGhhcyBzdGFydGVkLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5DYW4gdGhlIGNvbW1pc2ggc2VlIG15IHBpY2s/PC9kdD5cXG5cIiArXG4gICAgXCIgICAgPGRkPk9ubHkgYWZ0ZXIgdGhlIGdhbWUgaGFzIHN0YXJ0ZWQuPC9kZD5cXG5cIiArXG4gICAgXCIgICAgPGR0PkNhbiBJIGNyZWF0ZSBteSBvd24gbGVhZ3VlPzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5Zb3UgYmV0Y2hhLiBDcmVhdGUgYSBzaW5nbGUgZWxpbWluYXRpb24gb3Igbm9uLWVsaW1pbmF0aW9uIGxlYWd1ZS48L2RkPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+SG93IGRvIEkgaW52aXRlIG15IGZyaWVuZHMgdG8gam9pbiBteSBsZWFndWU/PC9kdD5cXG5cIiArXG4gICAgXCIgICAgPGRkPk9uIHlvdXIgbGVhZ3VlIHBhZ2UgeW914oCZbGwgZmluZCBhbiAnSW52aXRlJyBidXR0b24uIFVzZSBpdC4gWW914oCZbGwganVzdCBuZWVkIHRoZWlyIGVtYWlsIGFkZHJlc3MuPC9kZD5cXG5cIiArXG4gICAgXCIgICAgPGR0PkhvdyBtYW55IGZyaWVuZHMgY2FuIGpvaW4gbXkgbGVhZ3VlPzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5BcyBtYW55IGFzIHlvdSBsaWtlLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5DYW4gSSBzZXQgYSBsaW1pdCBvbiBob3cgbWFueSB0aW1lcyBhIGZyaWVuZCBjYW4gam9pbiBteSBsZWFndWU/PC9kdD5cXG5cIiArXG4gICAgXCIgICAgPGRkPllvdSBzdXJlIGNhbi4gMSAtIDEwIHRpbWVzLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5Ib3cgZG8gSSBzdG9wIHBlb3BsZSBmcm9tIGpvaW5pbmcgbXkgbGVhZ3VlPzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5DaGFuZ2UgdGhlIGxlYWd1ZSB0byBwcml2YXRlLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5Ib3cgY2FuIEkgcmVtb3ZlIHBlb3BsZSBmcm9tIG15IGxlYWd1ZT88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+WW91IGNhbuKAmXQgYnV0IHlvdSBjYW4gZGVhY3RpdmF0ZSAob3IgcmVhY3RpdmF0ZSkgdGhlaXIgdGVhbS4gQSBkZWFjdGl2YXRlZCB0ZWFtIGlzIGhpZGRlbiBmcm9tIHZpZXcgYW5kIGNhbuKAmXQgbWFrZSBhbnkgcGlja3MuPC9kZD5cXG5cIiArXG4gICAgXCIgICAgPGR0PkNhbiBJIGVkaXQgbXkgbGVhZ3VlPzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5ZZXMsIGJ1dCB5b3UgY2FuJ3QgY2hhbmdlIHRoZSBzdGFydCB3ZWVrIG9yIGZvcm1hdCAoc2luZ2xlIGVsaW1pbmF0aW9uIG9yIG5vIGVsaW1pbmF0aW9uKSBhZnRlciB0aGUgbGVhZ3VlIHN0YXJ0cy48L2RkPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+Q2FuIEkgZWRpdCBhIHRlYW0gbmFtZSBpbiBteSBsZWFndWU/PC9kdD5cXG5cIiArXG4gICAgXCIgICAgPGRkPlllcywgdGhlIHRlYW0ncyBjb2FjaCBvciB0aGUgY29tbWlzaCBjYW4gZWRpdCBhIHRlYW0gbmFtZSBhdCBhbnkgdGltZS48L2RkPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+V2hhdCBpZiBpIHN0aWxsIGhhdmUgcXVlc3Rpb25zPzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5GaW5kIHRoZSBDb250YWN0IFVzIGJ1dHRvbi4gV2UnbGwgZ2V0IHJpZ2h0IGJhY2sgdG8geW91LjwvZGQ+XFxuXCIgK1xuICAgIFwiICA8L2RsPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJjbG9zZSgpXFxcIj5DbG9zZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3B1YmxpYy9ob21lL2hvbWUudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3B1YmxpYy9ob21lL2hvbWUudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcImhvbWUtY29udGVudC1jb250YWluZXJcXFwiPlxcblwiICtcbiAgICBcIiAgICA8aDEgY2xhc3M9XFxcImhlYWRlci1qdW1ib1xcXCI+TG9zaW5nIGlzIEV2ZXJ5dGhpbmcuPC9oMT5cXG5cIiArXG4gICAgXCIgICAgPHAgY2xhc3M9XFxcImxlYWRcXFwiPlBpY2sgYSBkaWZmZXJlbnQgTkZMLCBOQkEgb3IgTkhMIGxvc2VyIGVhY2ggd2Vlay4gU2luZ2xlIGVsaW1pbmF0aW9uIG9yIG5vbi1lbGltaW5hdGlvbiBsZWFndWVzIGFyZSB3YWl0aW5nIGZvciB5b3UuIEpvaW4gYW55dGltZSBmb3IgZnJlZS48L3A+XFxuXCIgK1xuICAgIFwiICA8ZGl2PlxcblwiICtcbiAgICBcIiAgICA8YSBjbGFzcz1cXFwiY3RhIGJ0biBidG4tcHJpbWFyeSBidG4tbGdcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCIgbmctY2xpY2s9XFxcImpvaW5MZWFndWUoc2VsZWN0ZWRTZWFzb25JZClcXFwiPkpvaW4gTGVhZ3VlPC9hPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2PlxcblwiICtcbiAgICBcIiAgICA8YSBjbGFzcz1cXFwiY3RhIGJ0biBidG4tcHJpbWFyeSBidG4tbGdcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCIgbmctY2xpY2s9XFxcImNyZWF0ZUxlYWd1ZShzZWxlY3RlZFNlYXNvbklkKVxcXCI+Q3JlYXRlIExlYWd1ZTwvYT5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci9yZWdpc3Rlci50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHVibGljL3JlZ2lzdGVyL3JlZ2lzdGVyLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5SZWdpc3RlcjwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8Zm9ybSBuYW1lPVxcXCJuZXdVc2VyRm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZT5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihuZXdVc2VyRm9ybS5maXJzdE5hbWUpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IobmV3VXNlckZvcm0uZmlyc3ROYW1lKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiZmlyc3ROYW1lXFxcIj5GaXJzdCBOYW1lXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobmV3VXNlckZvcm0uZmlyc3ROYW1lLCAncmVxdWlyZWQnKVxcXCI+WyBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihuZXdVc2VyRm9ybS5maXJzdE5hbWUsICdtYXhsZW5ndGgnKVxcXCI+WyBUb28gTG9uZyBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJmaXJzdE5hbWVcXFwiIG5hbWU9XFxcImZpcnN0TmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcIm5ld1VzZXJEYXRhLmZpcnN0X25hbWVcXFwiIG5nLW1heGxlbmd0aD1cXFwiMTVcXFwiIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihuZXdVc2VyRm9ybS5maXJzdE5hbWUpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihuZXdVc2VyRm9ybS5sYXN0TmFtZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihuZXdVc2VyRm9ybS5sYXN0TmFtZSl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImxhc3ROYW1lXFxcIj5MYXN0IE5hbWVcXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihuZXdVc2VyRm9ybS5sYXN0TmFtZSwgJ3JlcXVpcmVkJylcXFwiPlsgUmVxdWlyZWQgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobmV3VXNlckZvcm0ubGFzdE5hbWUsICdtYXhsZW5ndGgnKVxcXCI+WyBUb28gTG9uZyBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJsYXN0TmFtZVxcXCIgbmFtZT1cXFwibGFzdE5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJuZXdVc2VyRGF0YS5sYXN0X25hbWVcXFwiIG5nLW1heGxlbmd0aD1cXFwiMjBcXFwiIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihuZXdVc2VyRm9ybS5sYXN0TmFtZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwidXNlci1uaWNrbmFtZSByb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJuaWNrbmFtZVxcXCI+Tmlja25hbWU8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aW5wdXQgaWQ9XFxcIm5pY2tuYW1lXFxcIiBuYW1lPVxcXCJuaWNrbmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcIm5ld1VzZXJEYXRhLm5pY2tuYW1lXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihuZXdVc2VyRm9ybS5lbWFpbCksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihuZXdVc2VyRm9ybS5lbWFpbCl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImVtYWlsXFxcIj5FbWFpbFxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld1VzZXJGb3JtLmVtYWlsLCAncmVxdWlyZWQnKVxcXCI+WyBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihuZXdVc2VyRm9ybS5lbWFpbCwgJ2VtYWlsJylcXFwiPlsgSW52YWxpZCBFbWFpbCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJlbWFpbFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIHR5cGU9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwibmV3VXNlckRhdGEuZW1haWxcXFwiIGxvZ2gtZm9jdXMgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKG5ld1VzZXJGb3JtLmVtYWlsKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IobmV3VXNlckZvcm0uY29uZmlybUVtYWlsKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKG5ld1VzZXJGb3JtLmNvbmZpcm1FbWFpbCl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImNvbmZpcm1FbWFpbFxcXCI+Q29uZmlybSBFbWFpbFxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld1VzZXJGb3JtLmNvbmZpcm1FbWFpbCwgJ21hdGNoJylcXFwiPlsgTm8gTWF0Y2ggXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpbnB1dCBpZD1cXFwiY29uZmlybUVtYWlsXFxcIiBuYW1lPVxcXCJjb25maXJtRW1haWxcXFwiIHR5cGU9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwibmV3VXNlckRhdGEuZW1haWxfY29uZmlybWF0aW9uXFxcIiBtYXRjaD1cXFwibmV3VXNlckRhdGEuZW1haWxcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihuZXdVc2VyRm9ybS5jb25maXJtRW1haWwpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IobmV3VXNlckZvcm0ucGFzc3dvcmQpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IobmV3VXNlckZvcm0ucGFzc3dvcmQpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJwYXNzd29yZFxcXCI+UGFzc3dvcmRcXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihuZXdVc2VyRm9ybS5wYXNzd29yZCwgJ3JlcXVpcmVkJylcXFwiPlsgUmVxdWlyZWQgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobmV3VXNlckZvcm0ucGFzc3dvcmQsICdtaW5sZW5ndGgnKVxcXCI+WyA4IC0gNTAgQ2hhcmFjdGVycyBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihuZXdVc2VyRm9ybS5wYXNzd29yZCwgJ21heGxlbmd0aCcpXFxcIj5bIDggLSA1MCBDaGFyYWN0ZXJzIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aW5wdXQgaWQ9XFxcInBhc3N3b3JkXFxcIiBuYW1lPVxcXCJwYXNzd29yZFxcXCIgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJuZXdVc2VyRGF0YS5wYXNzd29yZFxcXCIgbmctbWlubGVuZ3RoPVxcXCI4XFxcIiBuZy1tYXhsZW5ndGg9XFxcIjUwXFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IobmV3VXNlckZvcm0ucGFzc3dvcmQpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihuZXdVc2VyRm9ybS5jb25maXJtUGFzc3dvcmQpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IobmV3VXNlckZvcm0uY29uZmlybVBhc3N3b3JkKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiY29uZmlybVBhc3N3b3JkXFxcIj5Db25maXJtIFBhc3N3b3JkXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobmV3VXNlckZvcm0uY29uZmlybVBhc3N3b3JkLCAnbWF0Y2gnKVxcXCI+WyBObyBNYXRjaCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiIG5hbWU9XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJuZXdVc2VyRGF0YS5wYXNzd29yZF9jb25maXJtYXRpb25cXFwiIG1hdGNoPVxcXCJuZXdVc2VyRGF0YS5wYXNzd29yZFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKG5ld1VzZXJGb3JtLmNvbmZpcm1QYXNzd29yZClcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwidGVybXMgd2VsbCB3ZWxsLXNtXFxcIj48c3Ryb25nPkJ5IGNsaWNraW5nIHJlZ2lzdGVyLCB5b3UgYWdyZWUgdG8gdGhlIDxhIG5nLWNsaWNrPVxcXCJzaG93VGVybXMoKVxcXCI+dGVybXMgb2YgdXNlLjwvYT48L3N0cm9uZz48L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZm9ybT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG5nLWRpc2FibGVkPVxcXCJuZXdVc2VyRm9ybS4kaW52YWxpZFxcXCIgbmctY2xpY2s9XFxcInJlZ2lzdGVyKG5ld1VzZXJEYXRhKVxcXCI+UmVnaXN0ZXI8L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXIvdGVybXMvcmVnaXN0ZXIudGVybXMudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci90ZXJtcy9yZWdpc3Rlci50ZXJtcy50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjbG9zZSgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5UZXJtcyBvZiBVc2U8L2gzPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgPHA+SWYgeW91IGNob29zZSB0byB1c2UgdGhpcyBzaXRlIGZvciBnYW1ibGluZyBwdXJwb3NlcywgeW91IGFzc3VtZSBhbGwgcmlza3MuIERvbid0IGJlIGEgZHVtbXkgYW5kIHNlbmQgbW9uZXkgdG8gcGVvcGxlIHlvdSBkb24ndCBrbm93IGFuZCB0cnVzdC4gVXNlIHlvdXIgY2FiZXphLjwvcD5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2xvc2UoKVxcXCI+Q2xvc2U8L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wdWJsaWMvc2lnbmluL3NpZ25pbi50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHVibGljL3NpZ25pbi9zaWduaW4udHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcInNpZ25pbi1ib3ggcGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGZvcm0gbmFtZT1cXFwic2lnbmluRm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbmctc3VibWl0PVxcXCJzaWduaW4oeyBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwudG9Mb3dlckNhc2UoKSwgcGFzc3dvcmQ6IGNyZWRlbnRpYWxzLnBhc3N3b3JkIH0pXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1lbnZlbG9wZSBmYS1md1xcXCI+PC9pPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCIgcGxhY2Vob2xkZXI9XFxcIkVtYWlsXFxcIiBuZy1tb2RlbD1cXFwiY3JlZGVudGlhbHMuZW1haWxcXFwiIHJjLXZlcmlmeS1zZXQgYXV0b2ZvY3VzIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWtleSBmYS1md1xcXCI+PC9pPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCIgcGxhY2Vob2xkZXI9XFxcIlBhc3N3b3JkXFxcIiBuZy1tb2RlbD1cXFwiY3JlZGVudGlhbHMucGFzc3dvcmRcXFwiIHJjLXZlcmlmeS1zZXQgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPGEgY2xhc3M9XFxcImZvcmdvdC1wYXNzd29yZCBidG4gYnRuLWxpbmsgcHVsbC1sZWZ0XFxcIiByb2xlPVxcXCJidXR0b25cXFwiIG5nLWNsaWNrPVxcXCJyZXNldFBhc3N3b3JkKClcXFwiPkZvcmdvdCBQYXNzd29yZD88L2E+XFxuXCIgK1xuICAgIFwiICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcInNpZ24taW4tYnRuIGJ0biBidG4tcHJpbWFyeSBwdWxsLXJpZ2h0XFxcIiBuZy1kaXNhYmxlZD1cXFwic2lnbmluRm9ybS4kaW52YWxpZFxcXCI+U2lnbiBpbjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgc3R5bGU9XFxcImNsZWFyOiBib3RoO1xcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPGhyPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcInJlZ2lzdGVyXFxcIj48YSBuZy1jbGljaz1cXFwicmVnaXN0ZXIoKVxcXCI+RG9uJ3QgaGF2ZSBhbiBhY2NvdW50PyA8c3Ryb25nPlJlZ2lzdGVyPC9zdHJvbmc+PC9hPjwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG4iLCIndXNlIHN0cmljdCc7XG5yZXF1aXJlKCdhcHAtdGVtcGxhdGVzJyk7XG5cblxudmFyIEFwcCA9IGZ1bmN0aW9uKCR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgIC8vIHVubWF0Y2hlZCB1cmxzIHNob3VsZCBiZSBkaXJlY3RlZCBiYWNrIHRvIHRoZSBzdGFydFxuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbn07XG5cbkFwcC4kaW5qZWN0ID0gWyckdXJsUm91dGVyUHJvdmlkZXInXTtcblxudmFyIGxvZ2hBcHAgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcCcsIFtcbiAgICAnbmdDb29raWVzJyxcbiAgICAnbmdSZXNvdXJjZScsXG4gICAgJ25nU2FuaXRpemUnLFxuICAgICduZ1JvdXRlJyxcbiAgICAnY29tbWFuZ3VsYXInLFxuICAgICd1aS5yb3V0ZXInLFxuICAgICd1aS5ib290c3RyYXAnLFxuICAgICd1aS5ib290c3RyYXAuZGF0ZXRpbWVwaWNrZXInLFxuICAgICdhcHAudGVtcGxhdGVzJyxcbiAgICAndWkucm91dGVyLnN0YXRlSGVscGVyJyxcbiAgICAnYW5ndWxhci1sb2FkaW5nLWJhcicsXG5cbiAgICAvLyBwdWJsaWMgbW9kdWxlc1xuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wdWJsaWMvaG9tZScpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3B1YmxpYy9mYXEnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wdWJsaWMvYWJ1c2UnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wdWJsaWMvc2lnbmluJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHVibGljL3JlZ2lzdGVyJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHVibGljL3JlZ2lzdGVyL3Rlcm1zJykubmFtZSxcblxuICAgIC8vIHByaXZhdGUgbW9kdWxlc1xuICAgIC8vIHVzZXJcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS91c2VyJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS91c2VyL3Jlc2V0JykubmFtZSxcblxuICAgIC8vIGxlYWd1ZVxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2xlYWd1ZScpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL25ldycpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL3ZpZXcnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9lZGl0JykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvY29udGFjdCcpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL21lc3NhZ2UnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9qb2luJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlL3JlcXVlc3QnKS5uYW1lLFxuXG4gICAgLy8gbGVhZ3Vlc1xuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbicpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL3B1YmxpYycpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL3ByaXZhdGUnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvbWFuYWdlJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL215JykubmFtZSxcblxuICAgIC8vIHRlYW1cbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS90ZWFtJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS90ZWFtL3ZpZXcnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL3RlYW0vZWRpdCcpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvdGVhbS9tZXNzYWdlJykubmFtZSxcblxuICAgIC8vIHRlYW1zXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvdGVhbXMnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL3RlYW1zL2FsaXZlJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS90ZWFtcy9kZWFkJykubmFtZSxcblxuICAgIC8vIHBsYXlcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9wbGF5JykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9wbGF5L2xlYWd1ZXMnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL3BsYXkvdGVhbXMnKS5uYW1lLFxuXG4gICAgLy8gcGlja1xuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL3BpY2svbWFrZScpLm5hbWUsXG5cbiAgICAvLyBhZG1pblxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2FkbWluJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9nYW1lL2VkaXQnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2FkbWluL2dhbWUvbmV3JykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9zZWFzb25zJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9zZWFzb25zL3NlYXNvbicpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9zZWFzb24vbmV3JykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi93ZWVrJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi93ZWVrL2VkaXQnKS5uYW1lLFxuXG4gICAgLy8gaGVscGVyIG1vZHVsZXNcbiAgICByZXF1aXJlKCcuL2NvbW1vbi9tb2R1bGVzL2hlYWRlcicpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9jb21tb24vbW9kdWxlcy9tZXNzYWdlJykubmFtZSxcbiAgICByZXF1aXJlKCcuL2NvbW1vbi9tb2R1bGVzL2Zvb3RlcicpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9jb21tb24vbW9kdWxlcy9jb25maXJtJykubmFtZSxcblxuICAgIHJlcXVpcmUoJy4vY29tbW9uL21vZGVscycpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9jb21tb24vYXBpJykubmFtZSxcbiAgICByZXF1aXJlKCcuL2NvbW1vbi9jb21tYW5kJykubmFtZSxcblxuICAgIC8vIHNlcnZpY2VzXG4gICAgcmVxdWlyZSgnLi9jb21tb24vc2VydmljZS9hcHBsaWNhdGlvbicpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9jb21tb24vc2VydmljZS91dGlscycpLm5hbWUsXG5cbiAgICAvL2RpcmVjdGl2ZXNcbiAgICByZXF1aXJlKCcuL2NvbW1vbi9kaXJlY3RpdmVzL2ZvY3VzJykubmFtZSxcbiAgICByZXF1aXJlKCcuL2NvbW1vbi9kaXJlY3RpdmVzL2Zvcm1hdHRlZERhdGUnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vY29tbW9uL2RpcmVjdGl2ZXMvbWF0Y2gnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vY29tbW9uL2RpcmVjdGl2ZXMvcmNTdWJtaXQnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vY29tbW9uL2RpcmVjdGl2ZXMvcmNWZXJpZnlTZXQnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vY29tbW9uL2RpcmVjdGl2ZXMvcmVxdWlyZWRQYXR0ZXJuJykubmFtZSxcbiAgICByZXF1aXJlKCcuL2NvbW1vbi9kaXJlY3RpdmVzL3NlbGVjdE9uQ2xpY2snKS5uYW1lLFxuXG4gICAgLy9tb2RhbHNcblxuICAgIC8vZmlsdGVyc1xuICAgIHJlcXVpcmUoJy4vY29tbW9uL2ZpbHRlcnMnKS5uYW1lXG5cbiAgICBdLCBBcHApXG5cbiAgICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlciwgJGxvZ1Byb3ZpZGVyLCAkdWlWaWV3U2Nyb2xsUHJvdmlkZXIsICRhbmNob3JTY3JvbGxQcm92aWRlcikge1xuICAgICAgICAvLyB1c2UgdGhlIEhUTUw1IEhpc3RvcnkgQVBJXG4gICAgICAgICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZShmYWxzZSk7XG5cbiAgICAgICAgLy8gZGlzYWJsZXMgYXV0by1zY3JvbGxcbiAgICAgICAgJHVpVmlld1Njcm9sbFByb3ZpZGVyLnVzZUFuY2hvclNjcm9sbCgpO1xuICAgICAgICAkYW5jaG9yU2Nyb2xsUHJvdmlkZXIuZGlzYWJsZUF1dG9TY3JvbGxpbmcoKTtcblxuICAgICAgICAvLyB0dXJucyBvbi9vZmYgZGVidWcgY29uc29sZSBsb2cgc3RhdGVtZW50c1xuICAgICAgICAkbG9nUHJvdmlkZXIuZGVidWdFbmFibGVkKHRydWUpO1xuXG4gICAgICAgIC8vIGRlZmluZXMgcm9vdCBzdGF0ZXNcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgncHVibGljJywge1xuICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHVybDogJy8nLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL3RlbXBsYXRlcy9tYXN0ZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICAgICAgICAgICAgc2Vhc29uczogZnVuY3Rpb24oc2Vhc29uU2VydmljZSwgc2Vhc29uTW9kZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2Vhc29uTW9kZWwubG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlYXNvblNlcnZpY2UuZ2V0U2Vhc29ucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgncHJpdmF0ZScsIHtcbiAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1cmw6ICcvJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi90ZW1wbGF0ZXMvbWFzdGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IGZ1bmN0aW9uKHVzZXJTZXJ2aWNlLCB1c2VyTW9kZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1c2VyTW9kZWwudXNlci5sb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXNlck1vZGVsLnVzZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1c2VyU2VydmljZS5nZXRDdXJyZW50VXNlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzZWFzb25zOiBmdW5jdGlvbihzZWFzb25TZXJ2aWNlLCBzZWFzb25Nb2RlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzZWFzb25Nb2RlbC5sb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2Vhc29uU2VydmljZS5nZXRTZWFzb25zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgIH0pXG5cbiAgICAucnVuKGZ1bmN0aW9uKCRyb290U2NvcGUsICR1cmxSb3V0ZXIsICRsb2csIGFwcGxpY2F0aW9uU2VydmljZSkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiQXBwbGljYXRpb24gc3RhcnRpbmcgdXAuLi5cIik7XG4gICAgICAgIGFwcGxpY2F0aW9uU2VydmljZS5zdGFydHVwKCk7XG4gICAgfSlcbjtcblxubG9naEFwcC5mYWN0b3J5KCdhdXRoSW50ZXJjZXB0b3InLCBmdW5jdGlvbiAoJHEsICR3aW5kb3csICRsb2NhdGlvbiwgJHRpbWVvdXQsIHVzZXJNb2RlbCwgbWVzc2FnZU1vZGVsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVxdWVzdDogZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICAgICAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcbiAgICAgICAgICAgIGlmICgkd2luZG93LnNlc3Npb25TdG9yYWdlLnRva2VuKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudG9rZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgICAgICB9LFxuICAgICAgICByZXNwb25zZUVycm9yOiBmdW5jdGlvbiAocmVqZWN0aW9uKSB7XG4gICAgICAgICAgdmFyIG1lc3NhZ2U7XG4gICAgICAgICAgaWYgKHJlamVjdGlvbi5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgICAgICAgIHZhciBwYXRoID0gJGxvY2F0aW9uLnBhdGgoKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gcmVqZWN0aW9uLmRhdGEubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICB1c2VyTW9kZWwucmVzZXRVc2VyKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkbG9jYXRpb24ucGF0aCgpID09ICcvc2lnbmluJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UobWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UobWVzc2FnZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbG9jYXRpb24ucGF0aCgnL3NpZ25pbicpLnNlYXJjaCh7IHJlZGlyZWN0OiBlbmNvZGVVUklDb21wb25lbnQocGF0aCkgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVqZWN0aW9uLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2UgPSB7IHR5cGU6ICdkYW5nZXInLCBjb250ZW50OiAnSG91c3Rvbiwgd2UgaGF2ZSBhIHByb2JsZW0uIFBhZ2Ugbm90IGZvdW5kLicgfTtcbiAgICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UobWVzc2FnZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAkbG9jYXRpb24ucGF0aCgnLycpO1xuICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVqZWN0aW9uLnN0YXR1cy50b1N0cmluZygpLm1hdGNoKC9eNVxcZHsyfSQvKSkge1xuICAgICAgICAgICAgLy8gbWF0Y2hlcyA1eHhcbiAgICAgICAgICAgIG1lc3NhZ2UgPSB7IHR5cGU6ICdkYW5nZXInLCBjb250ZW50OiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyB9O1xuICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShtZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gJHEucmVqZWN0KHJlamVjdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xufSk7XG5cbmxvZ2hBcHAuY29uZmlnKGZ1bmN0aW9uICgkaHR0cFByb3ZpZGVyKSB7XG4gICAgJGh0dHBQcm92aWRlci5pbnRlcmNlcHRvcnMucHVzaCgnYXV0aEludGVyY2VwdG9yJyk7XG59KTtcblxuXG5cblxuXG5cblxuXG5cbiIsIi8qKlxuICogRGVmaW5lIHRoZSBhcHBsaWNhdGlvbiBtb2RlbHNcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5tb2RlbHMnLCBbXSlcbiAgICAvL21vZGVsc1xuICAgIC5zZXJ2aWNlKCd1c2VyTW9kZWwnLCByZXF1aXJlKCcuL1VzZXJNb2RlbCcpKVxuICAgIC5zZXJ2aWNlKCdtZXNzYWdlTW9kZWwnLCByZXF1aXJlKCcuL01lc3NhZ2VNb2RlbCcpKVxuICAgIC5zZXJ2aWNlKCdzZWFzb25Nb2RlbCcsIHJlcXVpcmUoJy4vU2Vhc29uTW9kZWwnKSlcbjsiLCIvKipcbiAqIERlZmluZSB0aGUgcmVtb3RlIHNlcnZpY2VzXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuYXBpJywgW10pXG4gICAgICAuY29uc3RhbnQoJ2FwaUNvbmZpZycsIHJlcXVpcmUoJy4vQXBpQ29uZmlnJykpXG4gICAgICAuc2VydmljZSgnZ2FtZVNlcnZpY2UnLCByZXF1aXJlKCcuL0dhbWVTZXJ2aWNlJykpXG4gICAgICAuc2VydmljZSgnbGVhZ3VlU2VydmljZScsIHJlcXVpcmUoJy4vTGVhZ3VlU2VydmljZScpKVxuICAgICAgLnNlcnZpY2UoJ3BpY2tTZXJ2aWNlJywgcmVxdWlyZSgnLi9QaWNrU2VydmljZScpKVxuICAgICAgLnNlcnZpY2UoJ3NlYXNvblNlcnZpY2UnLCByZXF1aXJlKCcuL1NlYXNvblNlcnZpY2UnKSlcbiAgICAgIC5zZXJ2aWNlKCdzcXVhZFNlcnZpY2UnLCByZXF1aXJlKCcuL1NxdWFkU2VydmljZScpKVxuICAgICAgLnNlcnZpY2UoJ3RlYW1TZXJ2aWNlJywgcmVxdWlyZSgnLi9UZWFtU2VydmljZScpKVxuICAgICAgLnNlcnZpY2UoJ3VzZXJTZXJ2aWNlJywgcmVxdWlyZSgnLi9Vc2VyU2VydmljZScpKVxuICAgICAgLnNlcnZpY2UoJ3dlZWtTZXJ2aWNlJywgcmVxdWlyZSgnLi9XZWVrU2VydmljZScpKVxuO1xuIiwiLy8gc2Vzc2lvbiBjb21tYW5kc1xucmVxdWlyZSgnLi9zZXNzaW9uL1NpZ25pbkNvbW1hbmQnKTtcbnJlcXVpcmUoJy4vc2Vzc2lvbi9TaWdub3V0Q29tbWFuZCcpO1xuXG4vLyB1c2VyIGNvbW1hbmRzXG5yZXF1aXJlKCcuL3VzZXIvR2V0Q3VycmVudFVzZXJDb21tYW5kJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuY29tbWFuZENvbmZpZycsIFtdKVxuICAgIC5jb25maWcoZnVuY3Rpb24oJGNvbW1hbmd1bGFyUHJvdmlkZXIpIHtcblxuICAgICAgICAvLyBzZXNzaW9uIGV2ZW50c1xuICAgICAgICAkY29tbWFuZ3VsYXJQcm92aWRlci5tYXBUbygnU2lnbmluRXZlbnQnKS5hc1NlcXVlbmNlKClcbiAgICAgICAgICAgIC5hZGQoJ1NpZ25pbkNvbW1hbmQnKTtcbiAgICAgICAgJGNvbW1hbmd1bGFyUHJvdmlkZXIubWFwVG8oJ1NpZ25vdXRFdmVudCcpLmFzU2VxdWVuY2UoKVxuICAgICAgICAgICAgLmFkZCgnU2lnbm91dENvbW1hbmQnKTtcblxuICAgICAgICAvLyB1c2VyIGV2ZW50c1xuICAgICAgICAkY29tbWFuZ3VsYXJQcm92aWRlci5tYXBUbygnR2V0Q3VycmVudFVzZXJFdmVudCcpLmFzU2VxdWVuY2UoKVxuICAgICAgICAgICAgLmFkZCgnR2V0Q3VycmVudFVzZXJDb21tYW5kJyk7XG5cbiAgICB9XG4pO1xuXG4iLCJcbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAucHVibGljLmhvbWUnLCBbXSlcbiAgICAuY29udHJvbGxlcignSG9tZUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL0hvbWVDb250cm9sbGVyJykpXG4gICAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ3B1YmxpYy5ob21lJywge1xuICAgICAgICAgICAgICAgIHVybDogJycsXG4gICAgICAgICAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2hlYWRlci9oZWFkZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0hlYWRlckNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvbWVzc2FnZS9tZXNzYWdlLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdNZXNzYWdlQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3B1YmxpYy9ob21lL2hvbWUudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0hvbWVDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvZm9vdGVyL2Zvb3Rlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnRm9vdGVyQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gICAgfSk7IiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5hYnVzZScsIFtdKVxuICAuY29udHJvbGxlcignQWJ1c2VDb250cm9sbGVyJywgcmVxdWlyZSgnLi9BYnVzZUNvbnRyb2xsZXInKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmZhcScsIFtdKVxuICAuY29udHJvbGxlcignRmFxQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vRmFxQ29udHJvbGxlcicpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAucHVibGljLnNpZ25pbicsIFtdKVxuICAuY29udHJvbGxlcignU2lnbmluQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vU2lnbmluQ29udHJvbGxlcicpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwdWJsaWMuc2lnbmluJywge1xuICAgICAgICB1cmw6ICdzaWduaW4nLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9oZWFkZXIvaGVhZGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdIZWFkZXJDb250cm9sbGVyJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9tZXNzYWdlL21lc3NhZ2UudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ01lc3NhZ2VDb250cm9sbGVyJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3B1YmxpYy9zaWduaW4vc2lnbmluLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdTaWduaW5Db250cm9sbGVyJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZm9vdGVyOiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2Zvb3Rlci9mb290ZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0Zvb3RlckNvbnRyb2xsZXInXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5yZWdpc3RlcicsIFtdKVxuICAuY29udHJvbGxlcignUmVnaXN0ZXJDb250cm9sbGVyJywgcmVxdWlyZSgnLi9SZWdpc3RlckNvbnRyb2xsZXInKSk7XG4iLCIvKipcbiAqIERlZmluZSB0aGUgYXBwbGljYXRpb24gZmlsdGVyc1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmZpbHRlcnMnLCBbXSlcbiAgICAvL2ZpbHRlcnNcbiAgICAuZmlsdGVyKCdvZmZzZXRGaWx0ZXInLCByZXF1aXJlKCcuL09mZnNldEZpbHRlcicpKVxuICAgIC5maWx0ZXIoJ2FjdGl2ZVRlYW1GaWx0ZXInLCByZXF1aXJlKCcuL0FjdGl2ZVRlYW1GaWx0ZXInKSlcbiAgICAuZmlsdGVyKCdhbGl2ZVRlYW1GaWx0ZXInLCByZXF1aXJlKCcuL0FsaXZlVGVhbUZpbHRlcicpKVxuICAgIC5maWx0ZXIoJ29wZW5MZWFndWVGaWx0ZXInLCByZXF1aXJlKCcuL09wZW5MZWFndWVGaWx0ZXInKSlcbiAgICAuZmlsdGVyKCdtYW5hZ2VkTGVhZ3VlRmlsdGVyJywgcmVxdWlyZSgnLi9NYW5hZ2VkTGVhZ3VlRmlsdGVyJykpXG4gICAgLmZpbHRlcigndGltZUZpbHRlcicsIHJlcXVpcmUoJy4vVGltZUZpbHRlcicpKVxuICAgIC5maWx0ZXIoJ3dlZWtQaWNrc0ZpbHRlcicsIHJlcXVpcmUoJy4vV2Vla1BpY2tzRmlsdGVyJykpXG47XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnVzZXInLCBbXSlcbiAgICAuY29udHJvbGxlcignVXNlckNvbnRyb2xsZXInLCByZXF1aXJlKCcuL1VzZXJDb250cm9sbGVyJykpXG4gICAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ3ByaXZhdGUudXNlcicsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICd1c2VyJyxcbiAgICAgICAgICAgICAgICB2aWV3czoge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvaGVhZGVyL2hlYWRlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnSGVhZGVyQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9tZXNzYWdlL21lc3NhZ2UudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ01lc3NhZ2VDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS91c2VyL3VzZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1VzZXJDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvZm9vdGVyL2Zvb3Rlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnRm9vdGVyQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gICAgfSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmxlYWd1ZScsIFtdKVxuICAgIC5jb250cm9sbGVyKCdMZWFndWVDb250cm9sbGVyJywgcmVxdWlyZSgnLi9MZWFndWVDb250cm9sbGVyJykpXG4gICAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ3ByaXZhdGUubGVhZ3VlJywge1xuICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHVybDogJ3NlYXNvbi97c2Vhc29uSWR9L2xlYWd1ZScsXG4gICAgICAgICAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2hlYWRlci9oZWFkZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0hlYWRlckNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvbWVzc2FnZS9tZXNzYWdlLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdNZXNzYWdlQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2xlYWd1ZS50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTGVhZ3VlQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2Zvb3Rlci9mb290ZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0Zvb3RlckNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICAgIH0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5sZWFndWVzJywgW10pXG4gICAgLmNvbnRyb2xsZXIoJ0xlYWd1ZXNDb250cm9sbGVyJywgcmVxdWlyZSgnLi9MZWFndWVzQ29udHJvbGxlcicpKVxuICAgIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdwcml2YXRlLmxlYWd1ZXMnLCB7XG4gICAgICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgdXJsOiAnc2Vhc29uL3tzZWFzb25JZH0vbGVhZ3VlcycsXG4gICAgICAgICAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2hlYWRlci9oZWFkZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0hlYWRlckNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvbWVzc2FnZS9tZXNzYWdlLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdNZXNzYWdlQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9sZWFndWVzLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdMZWFndWVzQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2Zvb3Rlci9mb290ZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0Zvb3RlckNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICAgIH0pO1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnRlYW0nLCBbXSlcbiAgICAuY29udHJvbGxlcignVGVhbUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL1RlYW1Db250cm9sbGVyJykpXG4gICAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ3ByaXZhdGUudGVhbScsIHtcbiAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1cmw6ICdzZWFzb24ve3NlYXNvbklkfS9sZWFndWUve2xlYWd1ZUlkfS90ZWFtJyxcbiAgICAgICAgICAgICAgICB2aWV3czoge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvaGVhZGVyL2hlYWRlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnSGVhZGVyQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9tZXNzYWdlL21lc3NhZ2UudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ01lc3NhZ2VDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS90ZWFtL3RlYW0udHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1RlYW1Db250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvZm9vdGVyL2Zvb3Rlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnRm9vdGVyQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgICB9KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAudGVhbXMnLCBbXSlcbiAgICAuY29udHJvbGxlcignVGVhbXNDb250cm9sbGVyJywgcmVxdWlyZSgnLi9UZWFtc0NvbnRyb2xsZXInKSlcbiAgICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgncHJpdmF0ZS50ZWFtcycsIHtcbiAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1cmw6ICdzZWFzb24ve3NlYXNvbklkfS90ZWFtcycsXG4gICAgICAgICAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2hlYWRlci9oZWFkZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0hlYWRlckNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvbWVzc2FnZS9tZXNzYWdlLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdNZXNzYWdlQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvdGVhbXMvdGVhbXMudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1RlYW1zQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2Zvb3Rlci9mb290ZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0Zvb3RlckNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgICB9KTtcblxuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5wbGF5JywgW10pXG4gIC5jb250cm9sbGVyKCdQbGF5Q29udHJvbGxlcicsIHJlcXVpcmUoJy4vUGxheUNvbnRyb2xsZXInKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHJpdmF0ZS5wbGF5Jywge1xuICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgdXJsOiAnc2Vhc29uL3tzZWFzb25JZH0vbXknLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9oZWFkZXIvaGVhZGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdIZWFkZXJDb250cm9sbGVyJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9tZXNzYWdlL21lc3NhZ2UudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ01lc3NhZ2VDb250cm9sbGVyJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvcGxheS9wbGF5LnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdQbGF5Q29udHJvbGxlcidcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZvb3Rlcjoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9mb290ZXIvZm9vdGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdGb290ZXJDb250cm9sbGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9KTtcblxuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5hZG1pbicsIFtdKVxuICAuY29udHJvbGxlcignQWRtaW5Db250cm9sbGVyJywgcmVxdWlyZSgnLi9BZG1pbkNvbnRyb2xsZXInKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHJpdmF0ZS5hZG1pbicsIHtcbiAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgIHVybDogJ2FkbWluLycsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2hlYWRlci9oZWFkZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0hlYWRlckNvbnRyb2xsZXInXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL21lc3NhZ2UvbWVzc2FnZS50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTWVzc2FnZUNvbnRyb2xsZXInXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9hZG1pbi50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQWRtaW5Db250cm9sbGVyJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZm9vdGVyOiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2Zvb3Rlci9mb290ZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0Zvb3RlckNvbnRyb2xsZXInXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5oZWFkZXInLCBbXSlcbiAgICAuY29udHJvbGxlcignSGVhZGVyQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vSGVhZGVyQ29udHJvbGxlcicpKSIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubWVzc2FnZScsIFtdKVxuICAgIC5jb250cm9sbGVyKCdNZXNzYWdlQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vTWVzc2FnZUNvbnRyb2xsZXInKSk7IiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5mb290ZXInLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0Zvb3RlckNvbnRyb2xsZXInLCByZXF1aXJlKCcuL0Zvb3RlckNvbnRyb2xsZXInKSkiLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doLmNvbmZpcm0nLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0NvbmZpcm1Db250cm9sbGVyJywgcmVxdWlyZSgnLi9Db25maXJtQ29udHJvbGxlcicpKTtcbiIsIi8qKlxuICogRGVmaW5lIHRoZSBhcHBsaWNhdGlvbiBzZXJ2aWNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2guYXBwbGljYXRpb24nLCBbXSlcbiAgICAuc2VydmljZSgnYXBwbGljYXRpb25TZXJ2aWNlJywgcmVxdWlyZSgnLi9BcHBsaWNhdGlvblNlcnZpY2UnKSk7IiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naC51dGlscycsIFtdKVxuICAuc2VydmljZSgnZGF0ZVV0aWxzJywgcmVxdWlyZSgnLi9EYXRlVXRpbHMnKSk7IiwiLy9hcHBsaWNhdGlvbiBkaXJlY3RpdmVzXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmRpcmVjdGl2ZXMuZm9jdXMnLFtdKVxuICAgIC5kaXJlY3RpdmUoJ2xvZ2hGb2N1cycsIHJlcXVpcmUoJy4vRm9jdXNEaXJlY3RpdmUnKSlcbjtcbiIsIi8vYXBwbGljYXRpb24gZGlyZWN0aXZlc1xubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naC5kaXJlY3RpdmVzLmZvcm1hdHRlZERhdGUnLFtdKVxuICAuZGlyZWN0aXZlKCdmb3JtYXR0ZWREYXRlJywgcmVxdWlyZSgnLi9Gb3JtYXR0ZWREYXRlRGlyZWN0aXZlJykpXG47XG4iLCIvL2FwcGxpY2F0aW9uIGRpcmVjdGl2ZXNcbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuZGlyZWN0aXZlcy5tYXRjaCcsW10pXG4gICAgLmRpcmVjdGl2ZSgnbWF0Y2gnLCByZXF1aXJlKCcuL01hdGNoRGlyZWN0aXZlJykpXG47XG4iLCIvL2FwcGxpY2F0aW9uIGRpcmVjdGl2ZXNcbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2guZGlyZWN0aXZlcy5yY1N1Ym1pdCcsW10pXG4gIC5kaXJlY3RpdmUoJ3JjU3VibWl0JywgcmVxdWlyZSgnLi9SQ1N1Ym1pdERpcmVjdGl2ZScpKTtcbiIsIi8vYXBwbGljYXRpb24gZGlyZWN0aXZlc1xubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naC5kaXJlY3RpdmVzLnJjVmVyaWZ5U2V0JyxbXSlcbiAgLmRpcmVjdGl2ZSgncmNWZXJpZnlTZXQnLCByZXF1aXJlKCcuL1JDVmVyaWZ5U2V0RGlyZWN0aXZlJykpO1xuIiwiLy9hcHBsaWNhdGlvbiBkaXJlY3RpdmVzXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmRpcmVjdGl2ZXMucmVxdWlyZWRQYXR0ZXJuJyxbXSlcbiAgICAuZGlyZWN0aXZlKCdycGF0dGVybicsIHJlcXVpcmUoJy4vUmVxdWlyZWRQYXR0ZXJuRGlyZWN0aXZlJykpXG47XG4iLCIvL2FwcGxpY2F0aW9uIGRpcmVjdGl2ZXNcbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuZGlyZWN0aXZlcy5zZWxlY3RPbkNsaWNrJyxbXSlcbiAgLmRpcmVjdGl2ZSgnc2VsZWN0T25DbGljaycsIHJlcXVpcmUoJy4vU2VsZWN0T25DbGlja0RpcmVjdGl2ZScpKVxuO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5yZWdpc3Rlci50ZXJtcycsIFtdKVxuICAuY29udHJvbGxlcignUmVnaXN0ZXJUZXJtc0NvbnRyb2xsZXInLCByZXF1aXJlKCcuL1JlZ2lzdGVyVGVybXNDb250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC51c2VyLnJlc2V0JywgW10pXG4gIC5jb250cm9sbGVyKCdVc2VyUmVzZXRDb250cm9sbGVyJywgcmVxdWlyZSgnLi9Vc2VyUmVzZXRDb250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5sZWFndWUubmV3JywgW10pXG4gIC5jb250cm9sbGVyKCdOZXdMZWFndWVDb250cm9sbGVyJywgcmVxdWlyZSgnLi9OZXdMZWFndWVDb250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5sZWFndWUudmlldycsIFtdKVxuICAuY29udHJvbGxlcignVmlld0xlYWd1ZUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL1ZpZXdMZWFndWVDb250cm9sbGVyJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3ByaXZhdGUubGVhZ3VlLnZpZXcnLCB7XG4gICAgICAgIHVybDogJy97bGVhZ3VlSWR9P3dlZWsnLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIGxlYWd1ZUNvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS92aWV3L2xlYWd1ZS52aWV3LnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdWaWV3TGVhZ3VlQ29udHJvbGxlcidcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICBsZWFndWU6IGZ1bmN0aW9uKGxlYWd1ZVNlcnZpY2UsICRzdGF0ZVBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuIGxlYWd1ZVNlcnZpY2UuZ2V0TGVhZ3VlKCRzdGF0ZVBhcmFtcy5zZWFzb25JZCwgJHN0YXRlUGFyYW1zLmxlYWd1ZUlkKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxlYWd1ZVdlZWtzOiBmdW5jdGlvbihsZWFndWUsIHdlZWtTZXJ2aWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gd2Vla1NlcnZpY2UuZ2V0TGVhZ3VlV2Vla3MoeyBzZWFzb25JZDogbGVhZ3VlLmRhdGEuc2Vhc29uX2lkLCBsZWFndWVJZDogbGVhZ3VlLmRhdGEuaWQgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBsZWFndWVUZWFtczogZnVuY3Rpb24obGVhZ3VlLCB0ZWFtU2VydmljZSwgJHN0YXRlUGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gdGVhbVNlcnZpY2UuZ2V0QWxsTGVhZ3VlVGVhbXMoeyBzZWFzb25JZDogbGVhZ3VlLmRhdGEuc2Vhc29uX2lkLCBsZWFndWVJZDogbGVhZ3VlLmRhdGEuaWQsIHdlZWtJZDogJHN0YXRlUGFyYW1zLndlZWsgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5sZWFndWUuZWRpdCcsIFtdKVxuICAuY29udHJvbGxlcignRWRpdExlYWd1ZUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL0VkaXRMZWFndWVDb250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5sZWFndWUuY29udGFjdCcsIFtdKVxuICAuY29udHJvbGxlcignTGVhZ3VlQ29udGFjdENvbnRyb2xsZXInLCByZXF1aXJlKCcuL0xlYWd1ZUNvbnRhY3RDb250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5sZWFndWUubWVzc2FnZScsIFtdKVxuICAuY29udHJvbGxlcignTGVhZ3VlTWVzc2FnZUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL0xlYWd1ZU1lc3NhZ2VDb250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5sZWFndWUuam9pbicsIFtdKVxuICAuY29udHJvbGxlcignTGVhZ3VlSm9pbkNvbnRyb2xsZXInLCByZXF1aXJlKCcuL0xlYWd1ZUpvaW5Db250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5sZWFndWUuaW52aXRlJywgW10pXG4gIC5jb250cm9sbGVyKCdMZWFndWVJbnZpdGVDb250cm9sbGVyJywgcmVxdWlyZSgnLi9MZWFndWVJbnZpdGVDb250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5sZWFndWVzLmpvaW4nLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0pvaW5MZWFndWVzQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vSm9pbkxlYWd1ZXNDb250cm9sbGVyJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3ByaXZhdGUubGVhZ3Vlcy5qb2luJywge1xuICAgICAgICB1cmw6ICcvJyxcbiAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgbGVhZ3Vlc0NvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9sZWFndWVzLmpvaW4udHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0pvaW5MZWFndWVzQ29udHJvbGxlcidcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfSk7XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubGVhZ3Vlcy5tYW5hZ2UnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ01hbmFnZUxlYWd1ZXNDb250cm9sbGVyJywgcmVxdWlyZSgnLi9NYW5hZ2VMZWFndWVzQ29udHJvbGxlcicpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcml2YXRlLmxlYWd1ZXMubWFuYWdlJywge1xuICAgICAgICB1cmw6ICcvbWFuYWdlZCcsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgbGVhZ3Vlc0NvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvbWFuYWdlL2xlYWd1ZXMubWFuYWdlLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdNYW5hZ2VMZWFndWVzQ29udHJvbGxlcidcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICBtYW5hZ2VkTGVhZ3VlczogZnVuY3Rpb24odXNlciwgbGVhZ3VlU2VydmljZSwgJHN0YXRlUGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gbGVhZ3VlU2VydmljZS5nZXRNYW5hZ2VkTGVhZ3Vlcygkc3RhdGVQYXJhbXMuc2Vhc29uSWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICA7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9KTtcblxuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5sZWFndWVzLm15JywgW10pXG4gIC5jb250cm9sbGVyKCdNeUxlYWd1ZXNDb250cm9sbGVyJywgcmVxdWlyZSgnLi9NeUxlYWd1ZXNDb250cm9sbGVyJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3ByaXZhdGUubGVhZ3Vlcy5teScsIHtcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICBsZWFndWVzQ29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9teS9sZWFndWVzLm15LnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdNeUxlYWd1ZXNDb250cm9sbGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIGxlYWd1ZXM6IGZ1bmN0aW9uKHVzZXIsIGxlYWd1ZVNlcnZpY2UsICRzdGF0ZVBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuIGxlYWd1ZVNlcnZpY2UuZ2V0TGVhZ3Vlcygkc3RhdGVQYXJhbXMuc2Vhc29uSWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICA7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9KTtcblxuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC50ZWFtLnZpZXcnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ1ZpZXdUZWFtQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vVmlld1RlYW1Db250cm9sbGVyJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3ByaXZhdGUudGVhbS52aWV3Jywge1xuICAgICAgICB1cmw6ICcve3RlYW1JZH0/d2VlaycsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgdGVhbUNvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL3RlYW0vdmlldy90ZWFtLnZpZXcudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1ZpZXdUZWFtQ29udHJvbGxlcidcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICB0ZWFtOiBmdW5jdGlvbih1c2VyLCB0ZWFtU2VydmljZSwgJHN0YXRlUGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gdGVhbVNlcnZpY2UuZ2V0VGVhbSgkc3RhdGVQYXJhbXMubGVhZ3VlSWQsICRzdGF0ZVBhcmFtcy50ZWFtSWQpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbGVhZ3VlVGVhbXM6IGZ1bmN0aW9uKHRlYW0sIHRlYW1TZXJ2aWNlLCAkc3RhdGVQYXJhbXMsIHVzZXJNb2RlbCkge1xuICAgICAgICAgICAgaWYgKHRlYW0uZGF0YS5jb2FjaF9pZHMuaW5kZXhPZih1c2VyTW9kZWwudXNlci5pZCkgPiAtMSkge1xuICAgICAgICAgICAgICByZXR1cm4gdGVhbVNlcnZpY2UuZ2V0TGVhZ3VlVGVhbXMoJHN0YXRlUGFyYW1zLmxlYWd1ZUlkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiB7IGRhdGE6IFtdIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBsZWFndWVXZWVrczogZnVuY3Rpb24odGVhbSwgd2Vla1NlcnZpY2UsICRzdGF0ZVBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuIHdlZWtTZXJ2aWNlLmdldExlYWd1ZVdlZWtzKHsgc2Vhc29uSWQ6ICRzdGF0ZVBhcmFtcy5zZWFzb25JZCwgbGVhZ3VlSWQ6ICRzdGF0ZVBhcmFtcy5sZWFndWVJZCB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBpY2tzOiBmdW5jdGlvbih0ZWFtLCBwaWNrU2VydmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIHBpY2tTZXJ2aWNlLmdldFBpY2tzKHsgdGVhbUlkOiB0ZWFtLmRhdGEuaWQgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC50ZWFtLmVkaXQnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0VkaXRUZWFtQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vRWRpdFRlYW1Db250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC50ZWFtLm1lc3NhZ2UnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ1RlYW1NZXNzYWdlQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vVGVhbU1lc3NhZ2VDb250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC50ZWFtcy5hbGl2ZScsIFtdKVxuICAuY29udHJvbGxlcignQWxpdmVUZWFtc0NvbnRyb2xsZXInLCByZXF1aXJlKCcuL0FsaXZlVGVhbXNDb250cm9sbGVyJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3ByaXZhdGUudGVhbXMuYWxpdmUnLCB7XG4gICAgICAgIHVybDogJy9hbGl2ZScsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgdGVhbXNDb250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS90ZWFtcy9hbGl2ZS90ZWFtcy5hbGl2ZS50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQWxpdmVUZWFtc0NvbnRyb2xsZXInXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgYWxpdmVUZWFtczogZnVuY3Rpb24odXNlciwgdGVhbVNlcnZpY2UsICRzdGF0ZVBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuIHRlYW1TZXJ2aWNlLmdldEFsaXZlVGVhbXMoeyBzZWFzb25JZDogJHN0YXRlUGFyYW1zLnNlYXNvbklkIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICA7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9KTtcblxuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC50ZWFtcy5kZWFkJywgW10pXG4gIC5jb250cm9sbGVyKCdEZWFkVGVhbXNDb250cm9sbGVyJywgcmVxdWlyZSgnLi9EZWFkVGVhbXNDb250cm9sbGVyJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3ByaXZhdGUudGVhbXMuZGVhZCcsIHtcbiAgICAgICAgdXJsOiAnL2RlYWQnLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIHRlYW1zQ29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvdGVhbXMvZGVhZC90ZWFtcy5kZWFkLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdEZWFkVGVhbXNDb250cm9sbGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIGRlYWRUZWFtczogZnVuY3Rpb24odXNlciwgdGVhbVNlcnZpY2UsICRzdGF0ZVBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuIHRlYW1TZXJ2aWNlLmdldERlYWRUZWFtcyh7IHNlYXNvbklkOiAkc3RhdGVQYXJhbXMuc2Vhc29uSWQgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIDtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnBsYXkubGVhZ3VlcycsIFtdKVxuICAuY29udHJvbGxlcignUGxheUxlYWd1ZXNDb250cm9sbGVyJywgcmVxdWlyZSgnLi9QbGF5TGVhZ3Vlc0NvbnRyb2xsZXInKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHJpdmF0ZS5wbGF5LmxlYWd1ZXMnLCB7XG4gICAgICAgIHVybDogJy9sZWFndWVzJyxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICBwbGF5Q29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvcGxheS9sZWFndWVzL3BsYXkubGVhZ3Vlcy50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnUGxheUxlYWd1ZXNDb250cm9sbGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIGxlYWd1ZXM6IGZ1bmN0aW9uKHVzZXIsICRzdGF0ZVBhcmFtcywgbGVhZ3VlU2VydmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIGxlYWd1ZVNlcnZpY2UuZ2V0TGVhZ3Vlcygkc3RhdGVQYXJhbXMuc2Vhc29uSWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICA7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9KTtcblxuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5wbGF5LnRlYW1zJywgW10pXG4gIC5jb250cm9sbGVyKCdQbGF5VGVhbXNDb250cm9sbGVyJywgcmVxdWlyZSgnLi9QbGF5VGVhbXNDb250cm9sbGVyJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3ByaXZhdGUucGxheS50ZWFtcycsIHtcbiAgICAgICAgdXJsOiAnL3RlYW1zJyxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICBwbGF5Q29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvcGxheS90ZWFtcy9wbGF5LnRlYW1zLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdQbGF5VGVhbXNDb250cm9sbGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIHRlYW1zOiBmdW5jdGlvbih1c2VyLCAkc3RhdGVQYXJhbXMsIHRlYW1TZXJ2aWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGVhbVNlcnZpY2UuZ2V0QWxsVGVhbXMoeyBzZWFzb25JZDogJHN0YXRlUGFyYW1zLnNlYXNvbklkIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICB9KVxuICAgIDtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnBpY2subWFrZScsIFtdKVxuICAuY29udHJvbGxlcignUGlja01ha2VDb250cm9sbGVyJywgcmVxdWlyZSgnLi9QaWNrTWFrZUNvbnRyb2xsZXInKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmFkbWluLnNlYXNvbnMnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0FkbWluU2Vhc29uc0NvbnRyb2xsZXInLCByZXF1aXJlKCcuL0FkbWluU2Vhc29uc0NvbnRyb2xsZXInKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHJpdmF0ZS5hZG1pbi5zZWFzb25zJywge1xuICAgICAgICB1cmw6ICdzZWFzb25zJyxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICBhZG1pbkNvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2FkbWluL3NlYXNvbnMvYWRtaW4uc2Vhc29ucy50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQWRtaW5TZWFzb25zQ29udHJvbGxlcidcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmFkbWluLndlZWsnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0FkbWluV2Vla0NvbnRyb2xsZXInLCByZXF1aXJlKCcuL0FkbWluV2Vla0NvbnRyb2xsZXInKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHJpdmF0ZS5hZG1pbi53ZWVrJywge1xuICAgICAgICB1cmw6ICdzZWFzb25zL3tzZWFzb25JZH0vd2Vla3Mve3dlZWtJZH0nLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIGFkbWluQ29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvYWRtaW4vd2Vlay9hZG1pbi53ZWVrLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZG1pbldlZWtDb250cm9sbGVyJyxcbiAgICAgICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICAgICAgd2VlazogZnVuY3Rpb24oJHN0YXRlUGFyYW1zLCB3ZWVrU2VydmljZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB3ZWVrU2VydmljZS5nZXRXZWVrKCRzdGF0ZVBhcmFtcy5zZWFzb25JZCwgJHN0YXRlUGFyYW1zLndlZWtJZCk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGdhbWVzOiBmdW5jdGlvbih3ZWVrLCBnYW1lU2VydmljZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBnYW1lU2VydmljZS5nZXRXZWVrR2FtZXMod2Vlay5kYXRhLmlkKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubGVhZ3VlLmludml0ZS5yZXF1ZXN0JywgW10pXG4gIC5jb250cm9sbGVyKCdMZWFndWVJbnZpdGVSZXF1ZXN0Q29udHJvbGxlcicsIHJlcXVpcmUoJy4vTGVhZ3VlSW52aXRlUmVxdWVzdENvbnRyb2xsZXInKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmxlYWd1ZXMuam9pbi5wdWJsaWMnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ1B1YmxpY0xlYWd1ZXNDb250cm9sbGVyJywgcmVxdWlyZSgnLi9QdWJsaWNMZWFndWVzQ29udHJvbGxlcicpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcml2YXRlLmxlYWd1ZXMuam9pbi5wdWJsaWMnLCB7XG4gICAgICAgIHVybDogJ3B1YmxpYycsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgam9pbkxlYWd1ZXNDb250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4vcHVibGljL2xlYWd1ZXMuam9pbi5wdWJsaWMudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1B1YmxpY0xlYWd1ZXNDb250cm9sbGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIHB1YmxpY0xlYWd1ZXM6IGZ1bmN0aW9uKHVzZXIsIGxlYWd1ZVNlcnZpY2UsICRzdGF0ZVBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuIGxlYWd1ZVNlcnZpY2UuZ2V0UHVibGljTGVhZ3Vlcygkc3RhdGVQYXJhbXMuc2Vhc29uSWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICA7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9KTtcblxuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5sZWFndWVzLmpvaW4ucHJpdmF0ZScsIFtdKVxuICAuY29udHJvbGxlcignUHJpdmF0ZUxlYWd1ZXNDb250cm9sbGVyJywgcmVxdWlyZSgnLi9Qcml2YXRlTGVhZ3Vlc0NvbnRyb2xsZXInKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHJpdmF0ZS5sZWFndWVzLmpvaW4ucHJpdmF0ZScsIHtcbiAgICAgICAgdXJsOiAncHJpdmF0ZScsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgam9pbkxlYWd1ZXNDb250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4vcHJpdmF0ZS9sZWFndWVzLmpvaW4ucHJpdmF0ZS50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnUHJpdmF0ZUxlYWd1ZXNDb250cm9sbGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIHByaXZhdGVMZWFndWVzOiBmdW5jdGlvbih1c2VyLCBsZWFndWVTZXJ2aWNlLCAkc3RhdGVQYXJhbXMpIHtcbiAgICAgICAgICAgIHJldHVybiBsZWFndWVTZXJ2aWNlLmdldFByaXZhdGVMZWFndWVzKCRzdGF0ZVBhcmFtcy5zZWFzb25JZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIDtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmFkbWluLmdhbWUuZWRpdCcsIFtdKVxuICAuY29udHJvbGxlcignQWRtaW5HYW1lRWRpdENvbnRyb2xsZXInLCByZXF1aXJlKCcuL0FkbWluR2FtZUVkaXRDb250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5hZG1pbi5nYW1lLm5ldycsIFtdKVxuICAuY29udHJvbGxlcignQWRtaW5HYW1lTmV3Q29udHJvbGxlcicsIHJlcXVpcmUoJy4vQWRtaW5HYW1lTmV3Q29udHJvbGxlcicpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuYWRtaW4uc2Vhc29uJywgW10pXG4gIC5jb250cm9sbGVyKCdBZG1pblNlYXNvbkNvbnRyb2xsZXInLCByZXF1aXJlKCcuL0FkbWluU2Vhc29uQ29udHJvbGxlcicpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcml2YXRlLmFkbWluLnNlYXNvbicsIHtcbiAgICAgICAgdXJsOiAnc2Vhc29ucy97c2Vhc29uSWR9JyxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICBhZG1pbkNvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2FkbWluL3NlYXNvbnMvc2Vhc29uL2FkbWluLnNlYXNvbi50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQWRtaW5TZWFzb25Db250cm9sbGVyJyxcbiAgICAgICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICAgICAgc2Vhc29uOiBmdW5jdGlvbigkc3RhdGVQYXJhbXMsIHNlYXNvblNlcnZpY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2Vhc29uU2VydmljZS5nZXRTZWFzb24oJHN0YXRlUGFyYW1zLnNlYXNvbklkKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgd2Vla3M6IGZ1bmN0aW9uKCRzdGF0ZVBhcmFtcywgd2Vla1NlcnZpY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2Vla1NlcnZpY2UuZ2V0U2Vhc29uV2Vla3MoJHN0YXRlUGFyYW1zLnNlYXNvbklkKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbGVhZ3VlczogZnVuY3Rpb24oJHN0YXRlUGFyYW1zLCBsZWFndWVTZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlYWd1ZVNlcnZpY2UuZ2V0QWxsTGVhZ3Vlcygkc3RhdGVQYXJhbXMuc2Vhc29uSWQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5hZG1pbi53ZWVrLmVkaXQnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0FkbWluV2Vla0VkaXRDb250cm9sbGVyJywgcmVxdWlyZSgnLi9BZG1pbldlZWtFZGl0Q29udHJvbGxlcicpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuYWRtaW4uc2Vhc29uLm5ldycsIFtdKVxuICAuY29udHJvbGxlcignQWRtaW5TZWFzb25OZXdDb250cm9sbGVyJywgcmVxdWlyZSgnLi9BZG1pblNlYXNvbk5ld0NvbnRyb2xsZXInKSk7XG4iLCJcbnZhciBVc2VyTW9kZWwgPSBmdW5jdGlvbigkcm9vdFNjb3BlLCAkd2luZG93LCAkbG9nKSB7XG5cbiAgICB2YXIgdXNlciA9IHt9O1xuICAgIHVzZXIubG9hZGVkID0gZmFsc2U7XG4gICAgdXNlci5pZCA9ICcnO1xuICAgIHVzZXIuZW1haWwgPSAnJztcbiAgICB1c2VyLmZpcnN0X25hbWUgPSAnJztcbiAgICB1c2VyLmxhc3RfbmFtZSA9ICcnO1xuICAgIHVzZXIuYWRtaW4gPSBmYWxzZTtcblxuICAgIHRoaXMudXNlciA9IHVzZXI7XG5cbiAgICB0aGlzLnNldFVzZXIgPSBmdW5jdGlvbih1c2VyRGF0YSkge1xuICAgICAgICB1c2VyLmxvYWRlZCA9IHRydWU7XG4gICAgICAgIHVzZXIgPSBhbmd1bGFyLmV4dGVuZCh1c2VyLCB1c2VyRGF0YSk7XG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgndXNlck1vZGVsOjp1c2VyVXBkYXRlZCcsIHVzZXIpO1xuICAgICAgICAkbG9nLmRlYnVnKFwiVXNlck1vZGVsOiBzZXRVc2VyOiBcIiArIHVzZXIuaWQpO1xuICAgICAgICAkbG9nLmRlYnVnKFwiVXNlck1vZGVsOiBzZXRVc2VyOiBcIiArIHVzZXIuZW1haWwpO1xuICAgIH07XG5cbiAgICB0aGlzLnJlc2V0VXNlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkd2luZG93LnNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XG5cbiAgICAgICAgdXNlciA9IHt9O1xuICAgICAgICB1c2VyLmxvYWRlZCA9IGZhbHNlO1xuICAgICAgICB1c2VyLmlkID0gJyc7XG4gICAgICAgIHVzZXIuZW1haWwgPSAnJztcbiAgICAgICAgdXNlci5maXJzdF9uYW1lID0gJyc7XG4gICAgICAgIHVzZXIubGFzdF9uYW1lID0gJyc7XG4gICAgICAgIHVzZXIuYWRtaW4gPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcImNyZWF0aW5nIHVzZXIgbW9kZWwuLi5cIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cblVzZXJNb2RlbC4kaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyR3aW5kb3cnLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBVc2VyTW9kZWw7IiwiXG52YXIgTWVzc2FnZU1vZGVsID0gZnVuY3Rpb24oJHJvb3RTY29wZSwgJGxvZykge1xuXG4gICAgdmFyIG1vZGVsID0gdGhpcztcbiAgICB2YXIgcXVldWUgPSBbXTtcblxuICAgIHZhciBtZXNzYWdlID0ge307XG4gICAgbWVzc2FnZS5sb2FkZWQgPSBmYWxzZTtcbiAgICBtZXNzYWdlLnR5cGUgPSAnJzsgLy8gY2FuIGJlIHN1Y2Nlc3MsIGluZm8sIHdhcm5pbmcgb3IgZGFuZ2VyXG4gICAgbWVzc2FnZS5jb250ZW50ID0gJyc7XG5cbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuXG4gICAgdGhpcy5zZXRNZXNzYWdlID0gZnVuY3Rpb24obWVzc2FnZURhdGEsIGRlbGF5KSB7XG4gICAgICAgIHZhciBtZXNzYWdlID0ge307XG4gICAgICAgIG1lc3NhZ2UubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgbWVzc2FnZSA9IGFuZ3VsYXIuZXh0ZW5kKG1lc3NhZ2UsIG1lc3NhZ2VEYXRhKTtcbiAgICAgICAgaWYgKGRlbGF5KSB7XG4gICAgICAgICAgICBxdWV1ZVswXSA9IG1lc3NhZ2U7IC8vIHF1ZXVlIGl0IHVwIGZvciBhZnRlciBhIGxvY2F0aW9uIGNoYW5nZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kZWwubWVzc2FnZSA9IG1lc3NhZ2U7IC8vIHNob3cgdGhlIG1lc3NhZ2UgYXNhcFxuICAgICAgICAgICAgcXVldWUgPSBbXTsgLy8gY2xlYXIgdGhlIHF1ZXVlIGFzIG1lc3NhZ2Ugd2lsbCBiZSBzaG93ZWQgaW1tZWRpYXRlbHlcbiAgICAgICAgfVxuICAgICAgICAkbG9nLmRlYnVnKFwiTWVzc2FnZU1vZGVsOiBjb250ZW50OiBcIiArIG1lc3NhZ2UuY29udGVudCk7XG4gICAgfTtcblxuICAgIHRoaXMucmVzZXRNZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1lc3NhZ2UgPSB7fTtcbiAgICAgICAgbWVzc2FnZS5sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgbWVzc2FnZS50eXBlID0gJyc7XG4gICAgICAgIG1lc3NhZ2UuY29udGVudCA9ICcnO1xuXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgfTtcblxuICAgICRyb290U2NvcGUuJG9uKFwiJGxvY2F0aW9uQ2hhbmdlU3RhcnRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIG1vZGVsLnJlc2V0TWVzc2FnZSgpO1xuICAgIH0pO1xuXG4gICAgJHJvb3RTY29wZS4kb24oXCIkbG9jYXRpb25DaGFuZ2VTdWNjZXNzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBtb2RlbC5tZXNzYWdlID0gcXVldWUuc2hpZnQoKSB8fCB7fTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiY3JlYXRpbmcgbWVzc2FnZSBtb2RlbC4uLlwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcblxufTtcblxuTWVzc2FnZU1vZGVsLiRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBNZXNzYWdlTW9kZWw7XG4iLCJ2YXIgU2Vhc29uTW9kZWwgPSBmdW5jdGlvbigkbG9nKSB7XG5cbiAgdmFyIG1vZGVsID0gdGhpcztcblxuICB2YXIgc2Vhc29ucyA9IFtdO1xuICB2YXIgY3VycmVudFNlYXNvbnMgPSBbXTtcbiAgdmFyIHN0YXJ0ZWRTZWFzb25zID0gW107XG4gIHZhciBzZWxlY3RlZFNlYXNvbklkO1xuICB2YXIgbG9hZGVkID0gZmFsc2U7XG5cbiAgdGhpcy5zZWFzb25zID0gc2Vhc29ucztcbiAgdGhpcy5jdXJyZW50U2Vhc29ucyA9IGN1cnJlbnRTZWFzb25zO1xuICB0aGlzLnN0YXJ0ZWRTZWFzb25zID0gc3RhcnRlZFNlYXNvbnM7XG4gIHRoaXMuc2VsZWN0ZWRTZWFzb25JZCA9IHNlbGVjdGVkU2Vhc29uSWQ7XG4gIHRoaXMubG9hZGVkID0gbG9hZGVkO1xuXG4gIHRoaXMuc2V0U2Vhc29ucyA9IGZ1bmN0aW9uKHNlYXNvbnNBcnJheSkge1xuICAgIGlmICghYW5ndWxhci5pc0FycmF5KHNlYXNvbnNBcnJheSkpIHJldHVybjtcbiAgICBtb2RlbC5zZWFzb25zID0gc2Vhc29uc0FycmF5O1xuICAgIG1vZGVsLmN1cnJlbnRTZWFzb25zID0gXy5maWx0ZXIoc2Vhc29uc0FycmF5LCBmdW5jdGlvbihzZWFzb24pIHtcbiAgICAgIHJldHVybiBzZWFzb24uY3VycmVudDtcbiAgICB9KTtcbiAgICBtb2RlbC5zdGFydGVkU2Vhc29ucyA9IF8uZmlsdGVyKHNlYXNvbnNBcnJheSwgZnVuY3Rpb24oc2Vhc29uKSB7XG4gICAgICByZXR1cm4gc2Vhc29uLnN0YXJ0ZWQ7XG4gICAgfSk7XG4gICAgbW9kZWwuc2V0U2VsZWN0ZWRTZWFzb25JZChtb2RlbC5jdXJyZW50U2Vhc29uc1ttb2RlbC5jdXJyZW50U2Vhc29ucy5sZW5ndGggLSAxXS5pZCk7XG4gICAgbW9kZWwubG9hZGVkID0gdHJ1ZTtcbiAgfTtcblxuICB0aGlzLnNldFNlbGVjdGVkU2Vhc29uSWQgPSBmdW5jdGlvbihzZWFzb25JZCkge1xuICAgIG1vZGVsLnNlbGVjdGVkU2Vhc29uSWQgPSBzZWFzb25JZDtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwiY3JlYXRpbmcgc2Vhc29uIG1vZGVsLi4uXCIpO1xuICB9O1xuICBpbml0KCk7XG5cbn07XG5cblNlYXNvbk1vZGVsLiRpbmplY3QgPSBbJyRsb2cnXTtcbm1vZHVsZS5leHBvcnRzID0gU2Vhc29uTW9kZWw7IiwiLypcbiAqICBHbG9iYWwgY29uZmlnIGZvciByZW1vdGUgc2VydmljZXNcbiAqL1xuXG52YXIgQXBpQ29uZmlnID0gIHtcbiAgICBiYXNlVVJMOiAnL2FwaS8nXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwaUNvbmZpZztcbiIsInZhciBHYW1lU2VydmljZSA9IGZ1bmN0aW9uKCRodHRwLCAkbG9nLCAkc3RhdGUsIGFwaUNvbmZpZywgbWVzc2FnZU1vZGVsKSB7XG5cbiAgdGhpcy5nZXRDdXJyZW50R2FtZXMgPSBmdW5jdGlvbihsZWFndWVJZCkge1xuICAgIHZhciBhcGlVcmwgPSBhcGlDb25maWcuYmFzZVVSTCArIFwiZ2FtZXMvY3VycmVudD9sZWFndWVfaWQ9XCIgKyBsZWFndWVJZDtcblxuICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaVVybClcbiAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIkdhbWVTZXJ2aWNlOiBnZXRDdXJyZW50R2FtZXMgc3VjY2Vzc1wiKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KVxuICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIkdhbWVTZXJ2aWNlOiBnZXRDdXJyZW50R2FtZXMgZmFpbGVkXCIpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH07XG5cbiAgdGhpcy5nZXRXZWVrR2FtZXMgPSBmdW5jdGlvbih3ZWVrSWQpIHtcbiAgICB2YXIgYXBpVXJsID0gYXBpQ29uZmlnLmJhc2VVUkwgKyBcIndlZWtzL1wiICsgd2Vla0lkICsgXCIvZ2FtZXNcIjtcblxuICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaVVybClcbiAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIkdhbWVTZXJ2aWNlOiBnZXRXZWVrR2FtZXMgc3VjY2Vzc1wiKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KVxuICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIkdhbWVTZXJ2aWNlOiBnZXRXZWVrR2FtZXMgZmFpbGVkXCIpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH07XG5cbiAgdGhpcy5jcmVhdGVHYW1lID0gZnVuY3Rpb24oZ2FtZVBhcmFtcykge1xuICAgIHZhciBwcm9taXNlID0gJGh0dHAucG9zdChhcGlDb25maWcuYmFzZVVSTCArIFwiYWRtaW4vd2Vla3MvXCIgKyBnYW1lUGFyYW1zLndlZWtfaWQgKyBcIi9nYW1lc1wiLFxuICAgICAgeyBnYW1lOiBnYW1lUGFyYW1zIH0pXG4gICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJHYW1lU2VydmljZTogY3JlYXRlR2FtZSBzdWNjZXNzXCIpO1xuICAgICAgICAvLyB0b2RvOiB0aGlzIHJlbGllcyBvbiBhIG1vbmtleSBwYXRjaCBhdCB0aGUgbW9tZW50IC0gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXItdWkvdWktcm91dGVyL2lzc3Vlcy81ODJcbiAgICAgICAgLy8gYnV0IG1heSBiZSByZXNvbHZlZCB3aXRoIGZ1dHVyZSByZWxlYXNlcyBvZiBhbmd1bGFyLXVpLXJvdXRlclxuICAgICAgICAkc3RhdGUucmVsb2FkKCk7IC8vIHJlbG9hZHMgYWxsIHRoZSByZXNvbHZlcyBmb3IgdGhlIHZpZXcgbGVhZ3VlIHBhZ2UgYW5kIHJlaW5zdGFudGlhdGVzIHRoZSBjb250cm9sbGVyXG4gICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pXG4gICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiR2FtZVNlcnZpY2U6IGNyZWF0ZUdhbWUgZmFpbGVkXCIpO1xuICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KTtcblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9O1xuXG4gIHRoaXMudXBkYXRlR2FtZSA9IGZ1bmN0aW9uKGdhbWVQYXJhbXMpIHtcbiAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnB1dChhcGlDb25maWcuYmFzZVVSTCArIFwiYWRtaW4vd2Vla3MvXCIgKyBnYW1lUGFyYW1zLndlZWtfaWQgKyBcIi9nYW1lcy9cIiArIGdhbWVQYXJhbXMuaWQsXG4gICAgICB7IGdhbWU6IGdhbWVQYXJhbXMgfSlcbiAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIkdhbWVTZXJ2aWNlOiB1cGRhdGVHYW1lIHN1Y2Nlc3NcIik7XG4gICAgICAgIC8vIHRvZG86IHRoaXMgcmVsaWVzIG9uIGEgbW9ua2V5IHBhdGNoIGF0IHRoZSBtb21lbnQgLSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci11aS91aS1yb3V0ZXIvaXNzdWVzLzU4MlxuICAgICAgICAvLyBidXQgbWF5IGJlIHJlc29sdmVkIHdpdGggZnV0dXJlIHJlbGVhc2VzIG9mIGFuZ3VsYXItdWktcm91dGVyXG4gICAgICAgICRzdGF0ZS5yZWxvYWQoKTsgLy8gcmVsb2FkcyBhbGwgdGhlIHJlc29sdmVzIGZvciB0aGUgdmlldyBsZWFndWUgcGFnZSBhbmQgcmVpbnN0YW50aWF0ZXMgdGhlIGNvbnRyb2xsZXJcbiAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSlcbiAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJHYW1lU2VydmljZTogdXBkYXRlR2FtZSBmYWlsZWRcIik7XG4gICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH07XG5cbn07XG5cbkdhbWVTZXJ2aWNlLiRpbmplY3QgPSBbJyRodHRwJywgJyRsb2cnLCAnJHN0YXRlJywgJ2FwaUNvbmZpZycsICdtZXNzYWdlTW9kZWwnXTtcbm1vZHVsZS5leHBvcnRzID0gR2FtZVNlcnZpY2U7IiwidmFyIExlYWd1ZVNlcnZpY2UgPSBmdW5jdGlvbigkaHR0cCwgJGxvZywgJGxvY2F0aW9uLCAkcSwgJHN0YXRlLCBhcGlDb25maWcsIG1lc3NhZ2VNb2RlbCkge1xuXG4gICAgdGhpcy5nZXRMZWFndWUgPSBmdW5jdGlvbihzZWFzb25JZCwgbGVhZ3VlSWQpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBzZWFzb25JZCArIFwiL2xlYWd1ZXMvXCIgKyBsZWFndWVJZClcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogZ2V0TGVhZ3VlIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogZ2V0TGVhZ3VlIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmdldEFsbExlYWd1ZXMgPSBmdW5jdGlvbihzZWFzb25JZCkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlDb25maWcuYmFzZVVSTCArIFwiYWRtaW4vc2Vhc29ucy9cIiArIHNlYXNvbklkICsgXCIvbGVhZ3Vlc1wiKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBnZXRBbGxMZWFndWVzIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogZ2V0QWxsTGVhZ3VlcyBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRMZWFndWVzID0gZnVuY3Rpb24oc2Vhc29uSWQpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBzZWFzb25JZCArIFwiL2xlYWd1ZXNcIilcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogZ2V0TGVhZ3VlcyBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IGdldExlYWd1ZXMgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0TWFuYWdlZExlYWd1ZXMgPSBmdW5jdGlvbihzZWFzb25JZCkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlDb25maWcuYmFzZVVSTCArIFwic2Vhc29ucy9cIiArIHNlYXNvbklkICsgXCIvbGVhZ3Vlcy9tYW5hZ2VkXCIpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IGdldE1hbmFnZWRMZWFndWVzIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogZ2V0TWFuYWdlZExlYWd1ZXMgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0UHVibGljTGVhZ3VlcyA9IGZ1bmN0aW9uKHNlYXNvbklkKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZWFzb25zL1wiICsgc2Vhc29uSWQgKyBcIi9sZWFndWVzL3B1YmxpY1wiKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBnZXRQdWJsaWNMZWFndWVzIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogZ2V0UHVibGljTGVhZ3VlcyBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRQcml2YXRlTGVhZ3VlcyA9IGZ1bmN0aW9uKHNlYXNvbklkKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZWFzb25zL1wiICsgc2Vhc29uSWQgKyBcIi9sZWFndWVzL3ByaXZhdGVcIilcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogZ2V0UHJpdmF0ZUxlYWd1ZXMgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBnZXRQcml2YXRlTGVhZ3VlcyBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5jcmVhdGVMZWFndWUgPSBmdW5jdGlvbihsZWFndWVQYXJhbXMpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5wb3N0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZWFzb25zL1wiICsgbGVhZ3VlUGFyYW1zLnNlYXNvbl9pZCArIFwiL2xlYWd1ZXNcIixcbiAgICAgICAgICAgIHsgbGVhZ3VlOiBsZWFndWVQYXJhbXMgfSlcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogY3JlYXRlTGVhZ3VlIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgbGVhZ3VlUGFyYW1zLnNlYXNvbl9pZCArICcvbGVhZ3VlLycgKyBkYXRhLmxlYWd1ZV9pZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogY3JlYXRlTGVhZ3VlIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLnVwZGF0ZUxlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZVBhcmFtcykge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnB1dChhcGlDb25maWcuYmFzZVVSTCArIFwic2Vhc29ucy9cIiArIGxlYWd1ZVBhcmFtcy5zZWFzb25faWQgKyBcIi9sZWFndWVzL1wiICsgbGVhZ3VlUGFyYW1zLmlkLFxuICAgICAgICAgICAgeyBsZWFndWU6IGxlYWd1ZVBhcmFtcyB9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiB1cGRhdGVMZWFndWUgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgIC8vIHRvZG86IHRoaXMgcmVsaWVzIG9uIGEgbW9ua2V5IHBhdGNoIGF0IHRoZSBtb21lbnQgLSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci11aS91aS1yb3V0ZXIvaXNzdWVzLzU4MlxuICAgICAgICAgICAgLy8gYnV0IG1heSBiZSByZXNvbHZlZCB3aXRoIGZ1dHVyZSByZWxlYXNlcyBvZiBhbmd1bGFyLXVpLXJvdXRlclxuICAgICAgICAgICAgJHN0YXRlLnJlbG9hZCgpOyAvLyByZWxvYWRzIGFsbCB0aGUgcmVzb2x2ZXMgZm9yIHRoZSB2aWV3IGxlYWd1ZSBwYWdlIGFuZCByZWluc3RhbnRpYXRlcyB0aGUgY29udHJvbGxlclxuICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogdXBkYXRlTGVhZ3VlIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLm9wZW5MZWFndWUgPSBmdW5jdGlvbihsZWFndWVQYXJhbXMpIHtcbiAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZWFzb25zL1wiICsgbGVhZ3VlUGFyYW1zLnNlYXNvbl9pZCArIFwiL2xlYWd1ZXMvXCIgKyBsZWFndWVQYXJhbXMuaWQgKyBcIi9vcGVuXCIpXG4gICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogb3BlbkxlYWd1ZSBzdWNjZXNzXCIpO1xuICAgICAgICAgIC8vIHRvZG86IHRoaXMgcmVsaWVzIG9uIGEgbW9ua2V5IHBhdGNoIGF0IHRoZSBtb21lbnQgLSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci11aS91aS1yb3V0ZXIvaXNzdWVzLzU4MlxuICAgICAgICAgIC8vIGJ1dCBtYXkgYmUgcmVzb2x2ZWQgd2l0aCBmdXR1cmUgcmVsZWFzZXMgb2YgYW5ndWxhci11aS1yb3V0ZXJcbiAgICAgICAgICAkc3RhdGUucmVsb2FkKCk7IC8vIHJlbG9hZHMgYWxsIHRoZSByZXNvbHZlcyBmb3IgdGhlIHZpZXcgbGVhZ3VlIHBhZ2UgYW5kIHJlaW5zdGFudGlhdGVzIHRoZSBjb250cm9sbGVyXG4gICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pXG4gICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IG9wZW5MZWFndWUgZmFpbGVkXCIpO1xuICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuY2xvc2VMZWFndWUgPSBmdW5jdGlvbihsZWFndWVQYXJhbXMpIHtcbiAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZWFzb25zL1wiICsgbGVhZ3VlUGFyYW1zLnNlYXNvbl9pZCArIFwiL2xlYWd1ZXMvXCIgKyBsZWFndWVQYXJhbXMuaWQgKyBcIi9jbG9zZVwiKVxuICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IGNsb3NlTGVhZ3VlIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgLy8gdG9kbzogdGhpcyByZWxpZXMgb24gYSBtb25rZXkgcGF0Y2ggYXQgdGhlIG1vbWVudCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyLXVpL3VpLXJvdXRlci9pc3N1ZXMvNTgyXG4gICAgICAgICAgLy8gYnV0IG1heSBiZSByZXNvbHZlZCB3aXRoIGZ1dHVyZSByZWxlYXNlcyBvZiBhbmd1bGFyLXVpLXJvdXRlclxuICAgICAgICAgICRzdGF0ZS5yZWxvYWQoKTsgLy8gcmVsb2FkcyBhbGwgdGhlIHJlc29sdmVzIGZvciB0aGUgdmlldyBsZWFndWUgcGFnZSBhbmQgcmVpbnN0YW50aWF0ZXMgdGhlIGNvbnRyb2xsZXJcbiAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSlcbiAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogY2xvc2VMZWFndWUgZmFpbGVkXCIpO1xuICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMudXBkYXRlTGVhZ3VlTWVzc2FnZSA9IGZ1bmN0aW9uKGxlYWd1ZVBhcmFtcywgZW1haWxBbGl2ZSwgZW1haWxBbGwpIHtcbiAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAkaHR0cC5wdXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBsZWFndWVQYXJhbXMuc2Vhc29uX2lkICsgXCIvbGVhZ3Vlcy9cIiArIGxlYWd1ZVBhcmFtcy5pZCArIFwiL21lc3NhZ2VcIixcbiAgICAgICAgICAgIHsgbGVhZ3VlOiBsZWFndWVQYXJhbXMsIGVtYWlsQWxpdmU6IGVtYWlsQWxpdmUsIGVtYWlsQWxsOiBlbWFpbEFsbCB9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiB1cGRhdGVMZWFndWVNZXNzYWdlIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShsZWFndWVQYXJhbXMubWVzc2FnZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogdXBkYXRlTGVhZ3VlTWVzc2FnZSBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5zZW5kQ29tbWlzaE1lc3NhZ2UgPSBmdW5jdGlvbihsZWFndWVQYXJhbXMsIG1lc3NhZ2UpIHtcbiAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAgICAgJGh0dHAucHV0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZWFzb25zL1wiICsgbGVhZ3VlUGFyYW1zLnNlYXNvbl9pZCArIFwiL2xlYWd1ZXMvXCIgKyBsZWFndWVQYXJhbXMuaWQgKyBcIi9jb250YWN0XCIsXG4gICAgICAgICAgICB7IGNvbnRhY3Q6IG1lc3NhZ2UgfSlcbiAgICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IHNlbmRDb21taXNoTWVzc2FnZSBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogc2VuZENvbW1pc2hNZXNzYWdlIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmdldEludml0ZXMgPSBmdW5jdGlvbihsZWFndWVJZCkge1xuICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImxlYWd1ZXMvXCIgKyBsZWFndWVJZCArIFwiL2ludml0YXRpb25zXCIpXG4gICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogZ2V0SW52aXRlcyBzdWNjZXNzXCIpO1xuICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KVxuICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBnZXRJbnZpdGVzIGZhaWxlZFwiKTtcbiAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmNyZWF0ZUludml0ZSA9IGZ1bmN0aW9uKGludml0ZVBhcmFtcykge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnBvc3QoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImxlYWd1ZXMvXCIgKyBpbnZpdGVQYXJhbXMubGVhZ3VlX2lkICsgXCIvaW52aXRhdGlvbnNcIixcbiAgICAgICAgICAgIHsgaW52aXRhdGlvbjogaW52aXRlUGFyYW1zIH0pXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IGNyZWF0ZUludml0ZSBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IGNyZWF0ZUludml0ZSBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5yZXF1ZXN0SW52aXRlID0gZnVuY3Rpb24oaW52aXRlUGFyYW1zKSB7XG4gICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnBvc3QoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImxlYWd1ZXMvXCIgKyBpbnZpdGVQYXJhbXMubGVhZ3VlX2lkICsgXCIvaW52aXRhdGlvbnMvbmV3XCIsXG4gICAgICAgICAgICB7IGludml0YXRpb246IGludml0ZVBhcmFtcyB9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiByZXF1ZXN0SW52aXRlIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogcmVxdWVzdEludml0ZSBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG59O1xuXG5MZWFndWVTZXJ2aWNlLiRpbmplY3QgPSBbJyRodHRwJywgJyRsb2cnLCAnJGxvY2F0aW9uJywgJyRxJywgJyRzdGF0ZScsICdhcGlDb25maWcnLCAnbWVzc2FnZU1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IExlYWd1ZVNlcnZpY2U7IiwidmFyIFBpY2tTZXJ2aWNlID0gZnVuY3Rpb24oJGh0dHAsICRsb2csICRzdGF0ZSwgYXBpQ29uZmlnLCBtZXNzYWdlTW9kZWwpIHtcblxuICB0aGlzLmdldFBpY2tzID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgdmFyIGFwaVVybCA9IGFwaUNvbmZpZy5iYXNlVVJMICsgXCJ0ZWFtcy9cIiArIHBhcmFtcy50ZWFtSWQgKyBcIi9waWNrc1wiO1xuXG4gICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpVXJsKVxuICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiUGlja1NlcnZpY2U6IGdldFBpY2tzIHN1Y2Nlc3NcIik7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSlcbiAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJQaWNrU2VydmljZTogZ2V0UGlja3MgZmFpbGVkXCIpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH07XG5cbiAgdGhpcy5jcmVhdGVQaWNrID0gZnVuY3Rpb24ocGlja1BhcmFtcykge1xuICAgIHZhciBhcGlVcmwgPSBhcGlDb25maWcuYmFzZVVSTCArIFwidGVhbXMvXCIgKyBwaWNrUGFyYW1zLnRlYW1faWQgKyBcIi9waWNrc1wiO1xuXG4gICAgdmFyIHByb21pc2UgPSAkaHR0cC5wb3N0KGFwaVVybCwgeyBwaWNrOiBwaWNrUGFyYW1zIH0pXG4gICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJQaWNrU2VydmljZTogY3JlYXRlUGljayBzdWNjZXNzXCIpO1xuICAgICAgICAvLyB0b2RvOiB0aGlzIHJlbGllcyBvbiBhIG1vbmtleSBwYXRjaCBhdCB0aGUgbW9tZW50IC0gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXItdWkvdWktcm91dGVyL2lzc3Vlcy81ODJcbiAgICAgICAgLy8gYnV0IG1heSBiZSByZXNvbHZlZCB3aXRoIGZ1dHVyZSByZWxlYXNlcyBvZiBhbmd1bGFyLXVpLXJvdXRlclxuICAgICAgICAkc3RhdGUucmVsb2FkKCk7IC8vIHJlbG9hZHMgYWxsIHRoZSByZXNvbHZlcyBmb3IgdGhlIHZpZXcgbGVhZ3VlIHBhZ2UgYW5kIHJlaW5zdGFudGlhdGVzIHRoZSBjb250cm9sbGVyXG4gICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pXG4gICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiUGlja1NlcnZpY2U6IGNyZWF0ZVBpY2sgZmFpbGVkXCIpO1xuICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KTtcblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9O1xuXG59O1xuXG5QaWNrU2VydmljZS4kaW5qZWN0ID0gWyckaHR0cCcsICckbG9nJywgJyRzdGF0ZScsICdhcGlDb25maWcnLCAnbWVzc2FnZU1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IFBpY2tTZXJ2aWNlOyIsInZhciBTZWFzb25TZXJ2aWNlID0gZnVuY3Rpb24oJGh0dHAsICRsb2csICRzdGF0ZSwgJHEsIGFwaUNvbmZpZywgbWVzc2FnZU1vZGVsLCBzZWFzb25Nb2RlbCkge1xuXG4gIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICB0aGlzLmdldFNlYXNvbnMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAgICAgJGh0dHAuZ2V0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZWFzb25zXCIpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlNlYXNvblNlcnZpY2U6IGdldFNlYXNvbnMgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICBzZWFzb25Nb2RlbC5zZXRTZWFzb25zKGRhdGEpO1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiU2Vhc29uU2VydmljZTogZ2V0U2Vhc29ucyBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0U2Vhc29uID0gZnVuY3Rpb24oc2Vhc29uSWQpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImFkbWluL3NlYXNvbnMvXCIgKyBzZWFzb25JZClcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiU2Vhc29uU2VydmljZTogZ2V0U2Vhc29uIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiU2Vhc29uU2VydmljZTogZ2V0U2Vhc29uIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmNyZWF0ZVNlYXNvbiA9IGZ1bmN0aW9uKHNlYXNvblBhcmFtcykge1xuICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5wb3N0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJhZG1pbi9zZWFzb25zL1wiLFxuICAgICAgICB7IHNlYXNvbjogc2Vhc29uUGFyYW1zIH0pXG4gICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAkbG9nLmRlYnVnKFwiU2Vhc29uU2VydmljZTogY3JlYXRlU2Vhc29uIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgLy8gbmVlZCB0byBjYWxsIGdldFNlYXNvbnMoKSBhZ2FpbiB0byByZXNldCB0aGUgc2Vhc29ubW9kZWxcbiAgICAgICAgICBzZXJ2aWNlLmdldFNlYXNvbnMoKVxuICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgLy8gdG9kbzogdGhpcyByZWxpZXMgb24gYSBtb25rZXkgcGF0Y2ggYXQgdGhlIG1vbWVudCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyLXVpL3VpLXJvdXRlci9pc3N1ZXMvNTgyXG4gICAgICAgICAgICAgICAgLy8gYnV0IG1heSBiZSByZXNvbHZlZCB3aXRoIGZ1dHVyZSByZWxlYXNlcyBvZiBhbmd1bGFyLXVpLXJvdXRlclxuICAgICAgICAgICAgICAgICRzdGF0ZS5yZWxvYWQoKTsgLy8gcmVsb2FkcyBhbGwgdGhlIHJlc29sdmVzIGZvciB0aGUgdmlldyBsZWFndWUgcGFnZSBhbmQgcmVpbnN0YW50aWF0ZXMgdGhlIGNvbnRyb2xsZXJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSlcbiAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAkbG9nLmRlYnVnKFwiU2Vhc29uU2VydmljZTogY3JlYXRlU2Vhc29uIGZhaWxlZFwiKTtcbiAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbn07XG5cblNlYXNvblNlcnZpY2UuJGluamVjdCA9IFsnJGh0dHAnLCAnJGxvZycsICckc3RhdGUnLCAnJHEnLCAnYXBpQ29uZmlnJywgJ21lc3NhZ2VNb2RlbCcsICdzZWFzb25Nb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBTZWFzb25TZXJ2aWNlOyIsInZhciBTcXVhZFNlcnZpY2UgPSBmdW5jdGlvbigkaHR0cCwgJGxvZywgYXBpQ29uZmlnKSB7XG5cbiAgdGhpcy5nZXRTcXVhZHMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXBpVXJsID0gYXBpQ29uZmlnLmJhc2VVUkwgKyBcImFkbWluL3NxdWFkcy9hbGxcIjtcblxuICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaVVybClcbiAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIlNxdWFkU2VydmljZTogZ2V0U3F1YWRzIHN1Y2Nlc3NcIik7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSlcbiAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJTcXVhZFNlcnZpY2U6IGdldFNxdWFkcyBmYWlsZWRcIik7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfTtcblxuICB0aGlzLmdldFdlZWtTcXVhZHMgPSBmdW5jdGlvbih3ZWVrKSB7XG4gICAgdmFyIGFwaVVybCA9IGFwaUNvbmZpZy5iYXNlVVJMICsgXCJhZG1pbi93ZWVrcy9cIiArIHdlZWsuaWQgKyBcIi9zcXVhZHNcIjtcblxuICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaVVybClcbiAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIlNxdWFkU2VydmljZTogZ2V0V2Vla1NxdWFkcyBzdWNjZXNzXCIpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pXG4gICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiU3F1YWRTZXJ2aWNlOiBnZXRXZWVrU3F1YWRzIGZhaWxlZFwiKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KTtcblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9O1xuXG59O1xuXG5TcXVhZFNlcnZpY2UuJGluamVjdCA9IFsnJGh0dHAnLCAnJGxvZycsICdhcGlDb25maWcnXTtcbm1vZHVsZS5leHBvcnRzID0gU3F1YWRTZXJ2aWNlOyIsInZhciBUZWFtU2VydmljZSA9IGZ1bmN0aW9uKCRodHRwLCAkbG9nLCAkbG9jYXRpb24sICRxLCBhcGlDb25maWcsIG1lc3NhZ2VNb2RlbCkge1xuXG4gICAgdGhpcy5nZXRUZWFtID0gZnVuY3Rpb24obGVhZ3VlSWQsIHRlYW1JZCkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlDb25maWcuYmFzZVVSTCArIFwibGVhZ3Vlcy9cIiArIGxlYWd1ZUlkICsgXCIvdGVhbXMvXCIgKyB0ZWFtSWQpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBnZXRUZWFtIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IGdldFRlYW0gZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0QWxsVGVhbXMgPSBmdW5jdGlvbihwYXJhbXMpIHtcbiAgICAgICAgdmFyIGFwaVVybCA9IGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZWFzb25zL1wiICsgcGFyYW1zLnNlYXNvbklkICsgXCIvdGVhbXMvYWxsXCI7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaVVybClcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IGdldEFsbFRlYW1zIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IGdldEFsbFRlYW1zIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmdldEFsaXZlVGVhbXMgPSBmdW5jdGlvbihwYXJhbXMpIHtcbiAgICAgICAgdmFyIGFwaVVybCA9IGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZWFzb25zL1wiICsgcGFyYW1zLnNlYXNvbklkICsgXCIvdGVhbXMvYWxpdmVcIjtcbiAgICAgICAgaWYgKHBhcmFtcy5sZWFndWVJZCkge1xuICAgICAgICAgICAgYXBpVXJsICs9IFwiP2xlYWd1ZV9pZD1cIiArIHBhcmFtcy5sZWFndWVJZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaVVybClcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IGdldEFsaXZlVGVhbXMgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogZ2V0QWxpdmVUZWFtcyBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXREZWFkVGVhbXMgPSBmdW5jdGlvbihwYXJhbXMpIHtcbiAgICAgICAgdmFyIGFwaVVybCA9IGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZWFzb25zL1wiICsgcGFyYW1zLnNlYXNvbklkICsgXCIvdGVhbXMvZGVhZFwiO1xuICAgICAgICBpZiAocGFyYW1zLmxlYWd1ZUlkKSB7XG4gICAgICAgICAgICBhcGlVcmwgKz0gXCI/bGVhZ3VlX2lkPVwiICsgcGFyYW1zLmxlYWd1ZUlkO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpVXJsKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogZ2V0RGVhZFRlYW1zIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IGdldERlYWRUZWFtcyBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRBbGxMZWFndWVUZWFtcyA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICAgICAgICB2YXIgYXBpVXJsID0gYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBwYXJhbXMuc2Vhc29uSWQgKyBcIi90ZWFtcy9hbGw/bGVhZ3VlX2lkPVwiICsgcGFyYW1zLmxlYWd1ZUlkO1xuICAgICAgICBpZiAocGFyYW1zLndlZWtJZCkge1xuICAgICAgICAgICAgYXBpVXJsICs9IFwiJndlZWtfaWQ9XCIgKyBwYXJhbXMud2Vla0lkO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpVXJsKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogZ2V0QWxsTGVhZ3VlVGVhbXMgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogZ2V0QWxsTGVhZ3VlVGVhbXMgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0TGVhZ3VlVGVhbXMgPSBmdW5jdGlvbihsZWFndWVJZCkge1xuICAgICAgICB2YXIgYXBpVXJsID0gYXBpQ29uZmlnLmJhc2VVUkwgKyBcImxlYWd1ZXMvXCIgKyBsZWFndWVJZCArIFwiL3RlYW1zXCI7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaVVybClcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IGdldExlYWd1ZVRlYW1zIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IGdldExlYWd1ZVRlYW1zIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cblxuICAgIHRoaXMuY3JlYXRlVGVhbSA9IGZ1bmN0aW9uKHRlYW1QYXJhbXMpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5wb3N0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJsZWFndWVzL1wiICsgdGVhbVBhcmFtcy5sZWFndWVfaWQgKyBcIi90ZWFtc1wiLFxuICAgICAgICAgICAgeyB0ZWFtOiB0ZWFtUGFyYW1zIH0pXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBjcmVhdGVUZWFtIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgdmFyIG5ld1RlYW1QYXRoID0gJGxvY2F0aW9uLnBhdGgoKSArICcvdGVhbS8nICsgZGF0YS50ZWFtX2lkO1xuICAgICAgICAgICAgICAgICRsb2NhdGlvbi5wYXRoKG5ld1RlYW1QYXRoKTsgLy8gbmF2aWdhdGUgdG8gdGhlIG5ldyB0ZWFtIHBhZ2VcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogY3JlYXRlVGVhbSBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVUZWFtID0gZnVuY3Rpb24odGVhbSkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnB1dChhcGlDb25maWcuYmFzZVVSTCArIFwibGVhZ3Vlcy9cIiArIHRlYW0ubGVhZ3VlLmlkICsgXCIvdGVhbXMvXCIgKyB0ZWFtLmlkLFxuICAgICAgICAgICAgeyB0ZWFtOiB0ZWFtIH0pXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiB1cGRhdGVUZWFtIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IHVwZGF0ZVRlYW0gZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMudXBkYXRlVGVhbU1lc3NhZ2UgPSBmdW5jdGlvbih0ZWFtUGFyYW1zLCBlbWFpbE1lc3NhZ2UpIHtcbiAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAkaHR0cC5wdXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImxlYWd1ZXMvXCIgKyB0ZWFtUGFyYW1zLmxlYWd1ZS5pZCArIFwiL3RlYW1zL1wiICsgdGVhbVBhcmFtcy5pZCArIFwiL21lc3NhZ2VcIixcbiAgICAgICAgeyB0ZWFtOiB0ZWFtUGFyYW1zLCBlbWFpbE1lc3NhZ2U6IGVtYWlsTWVzc2FnZSB9KVxuICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiB1cGRhdGVUZWFtTWVzc2FnZSBzdWNjZXNzXCIpO1xuICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUodGVhbVBhcmFtcy5tZXNzYWdlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IHVwZGF0ZVRlYW1NZXNzYWdlIGZhaWxlZFwiKTtcbiAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLnNlbmRDb21taXNoTWVzc2FnZSA9IGZ1bmN0aW9uKHRlYW1QYXJhbXMsIG1lc3NhZ2UpIHtcbiAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAkaHR0cC5wdXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImxlYWd1ZXMvXCIgKyB0ZWFtUGFyYW1zLmxlYWd1ZS5pZCArIFwiL3RlYW1zL1wiICsgdGVhbVBhcmFtcy5pZCArIFwiL2NvbnRhY3RcIixcbiAgICAgICAgeyBjb250YWN0OiBtZXNzYWdlIH0pXG4gICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IHNlbmRDb21taXNoTWVzc2FnZSBzdWNjZXNzXCIpO1xuICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IHNlbmRDb21taXNoTWVzc2FnZSBmYWlsZWRcIik7XG4gICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5hY3RpdmF0ZVRlYW0gPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgICRodHRwLnB1dChhcGlDb25maWcuYmFzZVVSTCArIFwibGVhZ3Vlcy9cIiArIHRlYW0ubGVhZ3VlLmlkICsgXCIvdGVhbXMvXCIgKyB0ZWFtLmlkICsgXCIvYWN0aXZhdGVcIilcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IGFjdGl2YXRlVGVhbSBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IGFjdGl2YXRlVGVhbSBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5kZWFjdGl2YXRlVGVhbSA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAgICAgJGh0dHAucHV0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJsZWFndWVzL1wiICsgdGVhbS5sZWFndWUuaWQgKyBcIi90ZWFtcy9cIiArIHRlYW0uaWQgKyBcIi9kZWFjdGl2YXRlXCIpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBkZWFjdGl2YXRlVGVhbSBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBkZWFjdGl2YXRlVGVhbSBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMucGFpZFRlYW0gPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgICRodHRwLnB1dChhcGlDb25maWcuYmFzZVVSTCArIFwibGVhZ3Vlcy9cIiArIHRlYW0ubGVhZ3VlLmlkICsgXCIvdGVhbXMvXCIgKyB0ZWFtLmlkICsgXCIvcGFpZFwiKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogcGFpZFRlYW0gc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBwYWlkVGVhbSBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy51bnBhaWRUZWFtID0gZnVuY3Rpb24odGVhbSkge1xuICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgICAkaHR0cC5wdXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImxlYWd1ZXMvXCIgKyB0ZWFtLmxlYWd1ZS5pZCArIFwiL3RlYW1zL1wiICsgdGVhbS5pZCArIFwiL3VucGFpZFwiKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogdW5wYWlkVGVhbSBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiB1bnBhaWRUZWFtIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9O1xuXG59O1xuXG5UZWFtU2VydmljZS4kaW5qZWN0ID0gWyckaHR0cCcsICckbG9nJywgJyRsb2NhdGlvbicsICckcScsICdhcGlDb25maWcnLCAnbWVzc2FnZU1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IFRlYW1TZXJ2aWNlOyIsInZhciBVc2VyU2VydmljZSA9IGZ1bmN0aW9uKCRodHRwLCAkbG9nLCAkc3RhdGUsICRsb2NhdGlvbiwgJHdpbmRvdywgJHRpbWVvdXQsIGFwaUNvbmZpZywgbWVzc2FnZU1vZGVsLCB1c2VyTW9kZWwsIHNlYXNvbk1vZGVsKSB7XG5cbiAgICB2YXIgdXNlclNlcnZpY2UgPSB0aGlzO1xuXG4gICAgdGhpcy5zaWduaW4gPSBmdW5jdGlvbihlbWFpbCwgcGFzc3dvcmQpIHtcbiAgICAgIHVzZXJNb2RlbC5yZXNldFVzZXIoKTtcbiAgICAgIHZhciBwcm9taXNlID0gJGh0dHAucG9zdChcbiAgICAgICAgICAgIGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZXNzaW9uc1wiLFxuICAgICAgICAgICAgeyBlbWFpbDogZW1haWwsIHBhc3N3b3JkOiBwYXNzd29yZCB9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJVc2VyU2VydmljZTogc2lnbmluIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS50b2tlbiA9IGRhdGEudG9rZW47XG4gICAgICAgICAgICAgICAgdmFyIHJlZGlyZWN0ID0gZGVjb2RlVVJJQ29tcG9uZW50KCRsb2NhdGlvbi5zZWFyY2goKS5yZWRpcmVjdCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlZGlyZWN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAkbG9jYXRpb24uc2VhcmNoKCdyZWRpcmVjdCcsIG51bGwpOyAvLyByZW1vdmUgdGhlIHJlZGlyZWN0IHF1ZXJ5IHBhcmFtXG4gICAgICAgICAgICAgICAgICAgICRsb2NhdGlvbi5wYXRoKHJlZGlyZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFsnLycsICcvc2lnbmluJywgJy9yZWdpc3RlciddLmluZGV4T2YocmVkaXJlY3QpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgIHVzZXJTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgIHtcbiAgICAgICAgICAgICAgICAgICRsb2NhdGlvbi5wYXRoKCcvc2Vhc29uLycgKyBzZWFzb25Nb2RlbC5zZWxlY3RlZFNlYXNvbklkICsgJy9teS90ZWFtcycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJVc2VyU2VydmljZTogc2lnbmluIGZhaWx1cmVcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5zaWdub3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB1c2VyTW9kZWwucmVzZXRVc2VyKCk7XG4gICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmRlbGV0ZShhcGlDb25maWcuYmFzZVVSTCArICdzZXNzaW9ucy9kZXN0cm95JylcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVXNlclNlcnZpY2U6IHNpZ25vdXQgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICBpZiAoJHN0YXRlLmN1cnJlbnQubmFtZSA9PSAncHVibGljLmhvbWUnKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICRsb2NhdGlvbi5wYXRoKCcvJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlVzZXJTZXJ2aWNlOiBzaWdub3V0IGZhaWx1cmVcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5yZXNldFVzZXIgPSBmdW5jdGlvbihlbWFpbCkge1xuICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5wb3N0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZXNzaW9ucy9yZXNldFwiLCB7IGVtYWlsOiBlbWFpbCB9KVxuICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICRsb2cuZGVidWcoXCJVc2VyU2VydmljZTogcmVzZXQgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlVzZXJTZXJ2aWNlOiByZXNldCBmYWlsdXJlXCIpO1xuICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0Q3VycmVudFVzZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHRva2VuID0gJGxvY2F0aW9uLnNlYXJjaCgpLnRva2VuO1xuICAgICAgICBpZiAoIV8uaXNVbmRlZmluZWQodG9rZW4pKSB7XG4gICAgICAgICAgJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS50b2tlbiA9IHRva2VuO1xuICAgICAgICAgICRsb2NhdGlvbi5zZWFyY2goJ3Rva2VuJywgbnVsbCk7IC8vIHJlbW92ZSB0aGUgdG9rZW4gcXVlcnkgcGFyYW1cbiAgICAgICAgfVxuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlDb25maWcuYmFzZVVSTCArIFwidXNlcnMvY3VycmVudFwiKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJVc2VyU2VydmljZTogZ2V0Q3VycmVudFVzZXIgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICB1c2VyTW9kZWwuc2V0VXNlcihkYXRhKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJVc2VyU2VydmljZTogZ2V0Q3VycmVudFVzZXIgZmFpbGVkXCIpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmNyZWF0ZVVzZXIgPSBmdW5jdGlvbih1c2VyUGFyYW1zKSB7XG4gICAgICB1c2VyTW9kZWwucmVzZXRVc2VyKCk7XG4gICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnBvc3QoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInVzZXJzXCIsXG4gICAgICAgICAgICB7IHVzZXI6IHVzZXJQYXJhbXMgfSlcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVXNlclNlcnZpY2U6IGNyZWF0ZVVzZXIgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICAkd2luZG93LnNlc3Npb25TdG9yYWdlLnRva2VuID0gZGF0YS50b2tlbjtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIHRydWUpO1xuICAgICAgICAgICAgICAgIHZhciByZWRpcmVjdCA9IGRlY29kZVVSSUNvbXBvbmVudCgkbG9jYXRpb24uc2VhcmNoKCkucmVkaXJlY3QpO1xuICAgICAgICAgICAgICAgIGlmIChyZWRpcmVjdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgJGxvY2F0aW9uLnNlYXJjaCgncmVkaXJlY3QnLCBudWxsKTsgLy8gcmVtb3ZlIHRoZSByZWRpcmVjdCBxdWVyeSBwYXJhbVxuICAgICAgICAgICAgICAgICAgICAkbG9jYXRpb24ucGF0aChyZWRpcmVjdCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChbJy8nLCAnL3NpZ25pbicsICcvcmVnaXN0ZXInXS5pbmRleE9mKHJlZGlyZWN0KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICB1c2VyU2VydmljZS5nZXRDdXJyZW50VXNlcigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlICB7XG4gICAgICAgICAgICAgICAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgc2Vhc29uTW9kZWwuc2VsZWN0ZWRTZWFzb25JZCArICcvbXkvdGVhbXMnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVXNlclNlcnZpY2U6IGNyZWF0ZVVzZXIgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMudXBkYXRlVXNlciA9IGZ1bmN0aW9uKHVzZXJQYXJhbXMpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5wdXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInVzZXJzL2N1cnJlbnRcIixcbiAgICAgICAgICAgIHsgdXNlcjogdXNlclBhcmFtcyB9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJVc2VyU2VydmljZTogdXBkYXRlVXNlciBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHVzZXJNb2RlbC5zZXRVc2VyKHVzZXJQYXJhbXMpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlVzZXJTZXJ2aWNlOiB1cGRhdGVVc2VyIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmNvbnRhY3RVcyA9IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5wdXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInVzZXJzL2NvbnRhY3RcIixcbiAgICAgICAgICAgIHsgbWVzc2FnZTogbWVzc2FnZSB9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJVc2VyU2VydmljZTogY29udGFjdFVzIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVXNlclNlcnZpY2U6IGNvbnRhY3RVcyBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG59O1xuXG5Vc2VyU2VydmljZS4kaW5qZWN0ID0gWyckaHR0cCcsICckbG9nJywgJyRzdGF0ZScsICckbG9jYXRpb24nLCAnJHdpbmRvdycsICckdGltZW91dCcsICdhcGlDb25maWcnLCAnbWVzc2FnZU1vZGVsJywgJ3VzZXJNb2RlbCcsICdzZWFzb25Nb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBVc2VyU2VydmljZTsiLCJ2YXIgV2Vla1NlcnZpY2UgPSBmdW5jdGlvbigkaHR0cCwgJGxvZywgJHEsICRzdGF0ZSwgYXBpQ29uZmlnLCBtZXNzYWdlTW9kZWwpIHtcblxuICAgIHRoaXMuZ2V0QXZhaWxhYmxlV2Vla3MgPSBmdW5jdGlvbihzZWFzb25JZCkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlDb25maWcuYmFzZVVSTCArIFwic2Vhc29ucy9cIiArIHNlYXNvbklkICsgXCIvd2Vla3MvYXZhaWxhYmxlXCIpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIldlZWtTZXJ2aWNlOiBnZXRBdmFpbGFibGVXZWVrcyBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIldlZWtTZXJ2aWNlOiBnZXRBdmFpbGFibGVXZWVrcyBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRTZWFzb25XZWVrcyA9IGZ1bmN0aW9uKHNlYXNvbklkKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZWFzb25zL1wiICsgc2Vhc29uSWQgKyBcIi93ZWVrc1wiKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJXZWVrU2VydmljZTogZ2V0U2Vhc29uV2Vla3Mgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJXZWVrU2VydmljZTogZ2V0U2Vhc29uV2Vla3MgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0TGVhZ3VlV2Vla3MgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZWFzb25zL1wiICsgb3B0aW9ucy5zZWFzb25JZCArIFwiL3dlZWtzP2xlYWd1ZV9pZD1cIiArIG9wdGlvbnMubGVhZ3VlSWQpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIldlZWtTZXJ2aWNlOiBnZXRMZWFndWVXZWVrcyBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIldlZWtTZXJ2aWNlOiBnZXRMZWFndWVXZWVrcyBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRXZWVrID0gZnVuY3Rpb24oc2Vhc29uSWQsIHdlZWtJZCkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlDb25maWcuYmFzZVVSTCArIFwic2Vhc29ucy9cIiArIHNlYXNvbklkICsgXCIvd2Vla3MvXCIgKyB3ZWVrSWQpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIldlZWtTZXJ2aWNlOiBnZXRXZWVrIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiV2Vla1NlcnZpY2U6IGdldFdlZWsgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0V2Vla1R5cGVzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhcGlVcmwgPSBhcGlDb25maWcuYmFzZVVSTCArIFwiYWRtaW4vd2Vla190eXBlc1wiO1xuXG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaVVybClcbiAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAkbG9nLmRlYnVnKFwiV2Vla1NlcnZpY2U6IGdldFdlZWtUeXBlcyBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIldlZWtTZXJ2aWNlOiBnZXRXZWVrVHlwZXMgZmFpbGVkXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVXZWVrID0gZnVuY3Rpb24od2Vla1BhcmFtcykge1xuICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5wdXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImFkbWluL3NlYXNvbnMvXCIgKyB3ZWVrUGFyYW1zLnNlYXNvbl9pZCArIFwiL3dlZWtzL1wiICsgd2Vla1BhcmFtcy5pZCxcbiAgICAgICAgeyB3ZWVrOiB3ZWVrUGFyYW1zIH0pXG4gICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAkbG9nLmRlYnVnKFwiV2Vla1NlcnZpY2U6IHVwZGF0ZVdlZWsgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAvLyB0b2RvOiB0aGlzIHJlbGllcyBvbiBhIG1vbmtleSBwYXRjaCBhdCB0aGUgbW9tZW50IC0gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXItdWkvdWktcm91dGVyL2lzc3Vlcy81ODJcbiAgICAgICAgICAvLyBidXQgbWF5IGJlIHJlc29sdmVkIHdpdGggZnV0dXJlIHJlbGVhc2VzIG9mIGFuZ3VsYXItdWktcm91dGVyXG4gICAgICAgICAgJHN0YXRlLnJlbG9hZCgpOyAvLyByZWxvYWRzIGFsbCB0aGUgcmVzb2x2ZXMgZm9yIHRoZSB2aWV3IGxlYWd1ZSBwYWdlIGFuZCByZWluc3RhbnRpYXRlcyB0aGUgY29udHJvbGxlclxuICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KVxuICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICRsb2cuZGVidWcoXCJXZWVrU2VydmljZTogdXBkYXRlV2VlayBmYWlsZWRcIik7XG4gICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5zZW5kUmVtaW5kZXIgPSBmdW5jdGlvbih3ZWVrKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAucHV0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJhZG1pbi9zZWFzb25zL1wiICsgd2Vlay5zZWFzb25faWQgKyBcIi93ZWVrcy9cIiArIHdlZWsuaWQgKyBcIi9yZW1pbmRcIilcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiV2Vla1NlcnZpY2U6IHNlbmRSZW1pbmRlciBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIldlZWtTZXJ2aWNlOiBzZW5kUmVtaW5kZXIgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuY29tcGxldGVXZWVrID0gZnVuY3Rpb24od2Vlaykge1xuICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAgICRodHRwLnB1dChhcGlDb25maWcuYmFzZVVSTCArIFwiYWRtaW4vc2Vhc29ucy9cIiArIHdlZWsuc2Vhc29uX2lkICsgXCIvd2Vla3MvXCIgKyB3ZWVrLmlkICsgXCIvY29tcGxldGVcIilcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiV2Vla1NlcnZpY2U6IGNvbXBsZXRlV2VlayBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJXZWVrU2VydmljZTogY29tcGxldGVXZWVrIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH07XG5cbn07XG5cbldlZWtTZXJ2aWNlLiRpbmplY3QgPSBbJyRodHRwJywgJyRsb2cnLCAnJHEnLCAnJHN0YXRlJywgJ2FwaUNvbmZpZycsICdtZXNzYWdlTW9kZWwnXTtcbm1vZHVsZS5leHBvcnRzID0gV2Vla1NlcnZpY2U7XG4iLCJjb21tYW5ndWxhci5jcmVhdGUoJ1NpZ25pbkNvbW1hbmQnLFxuICAgIGZ1bmN0aW9uKCRsb2csIHVzZXJTZXJ2aWNlKSB7XG5cbiAgICByZXR1cm4ge1xuXG4gICAgICAgIGV4ZWN1dGU6IGZ1bmN0aW9uKGVtYWlsLCBwYXNzd29yZCkge1xuICAgICAgICAgICAgJGxvZy5kZWJ1ZygnU2lnbmluQ29tbWFuZDogYXV0aGVudGljYXRpbmcgdXNlci4uLicpO1xuICAgICAgICAgICAgcmV0dXJuIHVzZXJTZXJ2aWNlLnNpZ25pbihlbWFpbCwgcGFzc3dvcmQpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlNpZ25pbkNvbW1hbmQ6IGZhaWx1cmU6IFwiICsgZXJyb3IuZGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmVzdWx0OiBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICRsb2cuZGVidWcoXCJTaWduaW5Db21tYW5kOiBzdWNjZXNzIFwiKTtcbiAgICAgICAgfVxuXG4gICAgfVxufSk7XG4iLCJjb21tYW5ndWxhci5jcmVhdGUoJ1NpZ25vdXRDb21tYW5kJyxcbiAgICBmdW5jdGlvbigkbG9nLCB1c2VyU2VydmljZSkge1xuXG4gICAgICAgIHJldHVybiB7XG5cbiAgICAgICAgICAgIGV4ZWN1dGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoJ1NpZ25vdXRDb21tYW5kOiBzaWduaW5nIG91dCB1c2VyLi4uJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXJTZXJ2aWNlLnNpZ25vdXQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJTaWdub3V0Q29tbWFuZDogZmFpbHVyZTogXCIgKyBlcnJvci5kYXRhKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblJlc3VsdDogZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlNpZ25vdXRDb21tYW5kOiBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9KTtcbiIsIlxuY29tbWFuZ3VsYXIuY3JlYXRlKCdHZXRDdXJyZW50VXNlckNvbW1hbmQnLFxuICAgZnVuY3Rpb24oJGxvZywgdXNlclNlcnZpY2UsIHVzZXJNb2RlbCkge1xuXG4gICAgcmV0dXJuIHtcblxuICAgICAgICBleGVjdXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICRsb2cuZGVidWcoJ0dldEN1cnJlbnRVc2VyQ29tbWFuZDogZ2V0dGluZyBjdXJyZW50IHVzZXIgZGV0YWlscy4uLicpO1xuICAgICAgICAgICAgdmFyIHVzZXJQcm9taXNlID0gdXNlclNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoKTtcbiAgICAgICAgICAgIHJldHVybiB1c2VyUHJvbWlzZTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICRsb2cuZGVidWcoXCJHZXRDdXJyZW50VXNlckNvbW1hbmQ6IGZhaWx1cmU6IFwiICsgZXJyb3IuZGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmVzdWx0OiBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICRsb2cuZGVidWcoXCJHZXRDdXJyZW50VXNlckNvbW1hbmQ6IHN1Y2Nlc3NcIik7XG4gICAgICAgIH1cblxuICAgIH1cbn0pOyIsInZhciBIb21lQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJGxvZywgJGxvY2F0aW9uLCAkbW9kYWwsIHdlZWtTZXJ2aWNlLCBsZWFndWVTZXJ2aWNlLCBtZXNzYWdlTW9kZWwsIHNlYXNvbk1vZGVsKSB7XG5cbiAgJHNjb3BlLnNlbGVjdGVkU2Vhc29uSWQgPSBzZWFzb25Nb2RlbC5zZWxlY3RlZFNlYXNvbklkO1xuXG4gICRzY29wZS5jcmVhdGVMZWFndWUgPSBmdW5jdGlvbihzZWFzb25JZCkge1xuICAgICAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9uZXcvbGVhZ3VlLm5ldy50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTmV3TGVhZ3VlQ29udHJvbGxlcicsXG4gICAgICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgICAgIHNlYXNvbklkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2Vhc29uSWQ7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHdlZWtzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2Vla1NlcnZpY2UuZ2V0QXZhaWxhYmxlV2Vla3Moc2Vhc29uSWQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgICAgIGxlYWd1ZVNlcnZpY2UuY3JlYXRlTGVhZ3VlKGxlYWd1ZSk7XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoJ0NyZWF0ZSBsZWFndWUgbW9kYWwgZGlzbWlzc2VkLi4uJyk7XG4gICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnQ3JlYXRlIGxlYWd1ZSBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAkc2NvcGUuam9pbkxlYWd1ZSA9IGZ1bmN0aW9uKHNlYXNvbklkKSB7XG4gICAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgc2Vhc29uSWQgKyAnL2xlYWd1ZXMvcHVibGljJyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZyhcImhvbWUgY29udHJvbGxlclwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcbn07XG5cbkhvbWVDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJywgJyRsb2NhdGlvbicsICckbW9kYWwnLCAnd2Vla1NlcnZpY2UnLCAnbGVhZ3VlU2VydmljZScsICdtZXNzYWdlTW9kZWwnLCAnc2Vhc29uTW9kZWwnXTtcbm1vZHVsZS5leHBvcnRzID0gSG9tZUNvbnRyb2xsZXI7XG4iLCJ2YXIgQWJ1c2VDb250cm9sbGVyID0gZnVuY3Rpb24oJG1vZGFsSW5zdGFuY2UsICRzY29wZSwgJGxvZykge1xuXG4gICRzY29wZS5hYnVzZU1lc3NhZ2UgPSAnJztcblxuICAkc2NvcGUuY29udGFjdFVzID0gZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKG1lc3NhZ2UpO1xuICB9O1xuXG4gICRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgfTtcblxuICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICB9O1xuXG4gICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwicmVwb3J0IGFidXNlIGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cbkFidXNlQ29udHJvbGxlci4kaW5qZWN0ID0gWyckbW9kYWxJbnN0YW5jZScsICckc2NvcGUnLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBBYnVzZUNvbnRyb2xsZXI7XG4iLCJ2YXIgRmFxQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRtb2RhbEluc3RhbmNlLCAkc2NvcGUsICRsb2cpIHtcblxuICAkc2NvcGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2xvc2UnKTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwiZmFxIGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cbkZhcUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJG1vZGFsSW5zdGFuY2UnLCAnJHNjb3BlJywgJyRsb2cnXTtcbm1vZHVsZS5leHBvcnRzID0gRmFxQ29udHJvbGxlcjtcbiIsInZhciBTaWduaW5Db250cm9sbGVyID0gZnVuY3Rpb24oJHNjb3BlLCAkbG9nLCAkbG9jYXRpb24sICRtb2RhbCwgbWVzc2FnZU1vZGVsLCB1c2VyU2VydmljZSkge1xuXG4gICAgJHNjb3BlLmNyZWRlbnRpYWxzID0ge1xuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJ1xuICAgIH07XG5cbiAgICAkc2NvcGUuc2lnbmluID0gZnVuY3Rpb24oY3JlZGVudGlhbHMpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcInNpZ25pbiBjcmVkZW50aWFsczogXCIgKyBjcmVkZW50aWFscyk7XG4gICAgICAgICRzY29wZS5kaXNwYXRjaChcIlNpZ25pbkV2ZW50XCIsIGNyZWRlbnRpYWxzKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmZvcmdvdFBhc3N3b3JkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIHRvZG86IGltcGxlbWVudCB0aGlzXG4gICAgICAgIGFsZXJ0KCd0b3VnaCBzaGl0Jyk7XG4gICAgfTtcblxuICAgICRzY29wZS5yZXNldFBhc3N3b3JkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS91c2VyL3Jlc2V0L3VzZXIucmVzZXQudHBsLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnVXNlclJlc2V0Q29udHJvbGxlcidcbiAgICAgIH0pO1xuXG4gICAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uIChlbWFpbCkge1xuICAgICAgICB1c2VyU2VydmljZS5yZXNldFVzZXIoZW1haWwpO1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKCdSZXNldCBwYXNzd29yZCBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdSZXNldCBwYXNzd29yZCBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAkc2NvcGUucmVnaXN0ZXIgPSBmdW5jdGlvbigpIHtcblxuICAgICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXIvcmVnaXN0ZXIudHBsLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnUmVnaXN0ZXJDb250cm9sbGVyJ1xuICAgICAgfSk7XG5cbiAgICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24obmV3VXNlcikge1xuICAgICAgICB1c2VyU2VydmljZS5jcmVhdGVVc2VyKG5ld1VzZXIpO1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKCdSZWdpc3RlciBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdSZWdpc3RlciBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKFwic2lnbmluIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cblNpZ25pbkNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnLCAnJGxvY2F0aW9uJywgJyRtb2RhbCcsICdtZXNzYWdlTW9kZWwnLCAndXNlclNlcnZpY2UnXTtcbm1vZHVsZS5leHBvcnRzID0gU2lnbmluQ29udHJvbGxlcjtcbiIsInZhciBSZWdpc3RlckNvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2csICRtb2RhbCwgJG1vZGFsSW5zdGFuY2UpIHtcblxuICAgICRzY29wZS5uZXdVc2VyRGF0YSA9IHtcbiAgICAgICAgZmlyc3RfbmFtZTogJycsXG4gICAgICAgIGxhc3RfbmFtZTogJycsXG4gICAgICAgIG5pY2tuYW1lOiAnJyxcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBlbWFpbF9jb25maXJtYXRpb246ICcnLFxuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogJydcbiAgICB9O1xuXG4gICAgJHNjb3BlLnJlZ2lzdGVyID0gZnVuY3Rpb24gKG5ld1VzZXIpIHtcbiAgICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKG5ld1VzZXIpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2FuY2VsJyk7XG4gICAgfTtcblxuICAgICRzY29wZS5oYXNFcnJvciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICAgIH07XG5cbiAgICAkc2NvcGUuaGFzUHJvcGVydHlFcnJvciA9IGZ1bmN0aW9uKGlucHV0LCBwcm9wZXJ0eSkge1xuICAgICAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kZXJyb3JbcHJvcGVydHldO1xuICAgIH07XG5cbiAgICAkc2NvcGUuc2hvd1Rlcm1zID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHVibGljL3JlZ2lzdGVyL3Rlcm1zL3JlZ2lzdGVyLnRlcm1zLnRwbC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1JlZ2lzdGVyVGVybXNDb250cm9sbGVyJ1xuICAgICAgfSk7XG5cbiAgICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBkbyBuYWRhXG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoJ1Rlcm1zIGFuZCBjb25kaXRpb25zIG1vZGFsIGNsb3NlZC4uLicpO1xuICAgICAgfSk7XG5cbiAgICB9O1xuXG4gIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKFwicmVnaXN0ZXIgY29udHJvbGxlclwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcblxufTtcblxuUmVnaXN0ZXJDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJywgJyRtb2RhbCcsICckbW9kYWxJbnN0YW5jZSddO1xubW9kdWxlLmV4cG9ydHMgPSBSZWdpc3RlckNvbnRyb2xsZXI7XG4iLCJcbnZhciBPZmZzZXRGaWx0ZXIgPSBmdW5jdGlvbigkbG9nKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGlucHV0LCBzdGFydCkge1xuICAgICAgICBzdGFydCA9IHBhcnNlSW50KHN0YXJ0LCAxMCk7XG4gICAgICAgIHJldHVybiBpbnB1dC5zbGljZShzdGFydCk7XG4gICAgfTtcbn07XG5cbk9mZnNldEZpbHRlci4kaW5qZWN0ID0gWyckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IE9mZnNldEZpbHRlcjtcbiIsInZhciBBY3RpdmVUZWFtRmlsdGVyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBmdW5jdGlvbih0ZWFtcywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmluYWN0aXZlID09IHRydWUpIHtcbiAgICAgIHJldHVybiB0ZWFtcztcbiAgICB9XG4gICAgdmFyIGFjdGl2ZVRlYW1zID0gXy5maWx0ZXIodGVhbXMsIGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAgIHJldHVybiB0ZWFtLmFjdGl2ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gYWN0aXZlVGVhbXM7XG4gIH07XG59O1xuXG5BY3RpdmVUZWFtRmlsdGVyLiRpbmplY3QgPSBbXTtcbm1vZHVsZS5leHBvcnRzID0gQWN0aXZlVGVhbUZpbHRlcjtcbiIsInZhciBBbGl2ZVRlYW1GaWx0ZXIgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRlYW1zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuZGVhZCA9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdGVhbXM7XG4gICAgfVxuICAgIHZhciBhbGl2ZVRlYW1zID0gXy5maWx0ZXIodGVhbXMsIGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAgIHJldHVybiB0ZWFtLmFsaXZlO1xuICAgIH0pO1xuICAgIHJldHVybiBhbGl2ZVRlYW1zO1xuICB9O1xufTtcblxuQWxpdmVUZWFtRmlsdGVyLiRpbmplY3QgPSBbXTtcbm1vZHVsZS5leHBvcnRzID0gQWxpdmVUZWFtRmlsdGVyO1xuIiwidmFyIE9wZW5MZWFndWVGaWx0ZXIgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGxlYWd1ZXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5jbG9zZWQgPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGxlYWd1ZXM7XG4gICAgfVxuICAgIHZhciBvcGVuTGVhZ3VlcyA9IF8uZmlsdGVyKGxlYWd1ZXMsIGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgICAgcmV0dXJuIGxlYWd1ZS5vcGVuO1xuICAgIH0pO1xuICAgIHJldHVybiBvcGVuTGVhZ3VlcztcbiAgfTtcbn07XG5cbk9wZW5MZWFndWVGaWx0ZXIuJGluamVjdCA9IFtdO1xubW9kdWxlLmV4cG9ydHMgPSBPcGVuTGVhZ3VlRmlsdGVyO1xuIiwidmFyIE1hbmFnZWRMZWFndWVGaWx0ZXIgPSBmdW5jdGlvbih1c2VyTW9kZWwpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGxlYWd1ZXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5tYW5hZ2VkID09IHRydWUpIHtcbiAgICAgIHJldHVybiBsZWFndWVzO1xuICAgIH1cbiAgICB2YXIgaW5MZWFndWVzID0gXy5maWx0ZXIobGVhZ3VlcywgZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgICByZXR1cm4gbGVhZ3VlLmNvbW1pc2hfaWRzLmluZGV4T2YodXNlck1vZGVsLnVzZXIuaWQpID09IC0xO1xuICAgIH0pO1xuICAgIHJldHVybiBpbkxlYWd1ZXM7XG4gIH07XG59O1xuXG5NYW5hZ2VkTGVhZ3VlRmlsdGVyLiRpbmplY3QgPSBbJ3VzZXJNb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBNYW5hZ2VkTGVhZ3VlRmlsdGVyO1xuIiwiXG52YXIgVGltZUZpbHRlciA9IGZ1bmN0aW9uKCRsb2cpIHtcbiAgIHJldHVybiBmdW5jdGlvbihpbnB1dCkge1xuXG4gICAgICAgaWYgKGlucHV0IDwgMSkge1xuICAgICAgICAgICByZXR1cm4gXCIwMDowMDowMFwiO1xuICAgICAgIH1cblxuICAgICAgIGZ1bmN0aW9uIGZvcm1hdCh2YWwpIHtcbiAgICAgICAgICAgcmV0dXJuICh2YWw8MTAgPyAnMCcgOiAnJykgKyB2YWw7XG4gICAgICAgfVxuXG4gICAgICAgdmFyIGggPSBNYXRoLmZsb29yKChpbnB1dCAvIDEwMDApIC8gMzYwMCk7XG4gICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKCgoaW5wdXQgLyAxMDAwKSAlIDM2MDApIC8gNjApO1xuICAgICAgIHZhciBzID0gTWF0aC5mbG9vcigoaW5wdXQgLyAxMDAwKSAlIDYwKTtcbiAgICAgICByZXR1cm4gZm9ybWF0KGgpICsgXCI6XCIgKyBmb3JtYXQobSkgKyBcIjpcIiArIGZvcm1hdChzKTtcbiAgIH1cblxufTtcblxuVGltZUZpbHRlci4kaW5qZWN0ID0gWyckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IFRpbWVGaWx0ZXI7XG4iLCJ2YXIgV2Vla1BpY2tzRmlsdGVyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBmdW5jdGlvbihwaWNrcywgd2Vla0lkKSB7XG4gICAgaWYgKCF3ZWVrSWQgfHwgaXNOYU4od2Vla0lkKSkge1xuICAgICAgcmV0dXJuIHBpY2tzO1xuICAgIH1cbiAgICB2YXIgd2Vla1BpY2tzID0gXy5maWx0ZXIocGlja3MsIGZ1bmN0aW9uKHBpY2spIHtcbiAgICAgIHJldHVybiBwaWNrLndlZWtfaWQgPT0gd2Vla0lkO1xuICAgIH0pO1xuICAgIHJldHVybiB3ZWVrUGlja3M7XG4gIH07XG59O1xuXG5XZWVrUGlja3NGaWx0ZXIuJGluamVjdCA9IFtdO1xubW9kdWxlLmV4cG9ydHMgPSBXZWVrUGlja3NGaWx0ZXI7XG4iLCJcbnZhciBVc2VyQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJGxvZywgdXNlck1vZGVsLCB1c2VyU2VydmljZSkge1xuXG4gICAgJHNjb3BlLnVzZXJEYXRhID0gYW5ndWxhci5jb3B5KHVzZXJNb2RlbCk7XG5cbiAgICAkc2NvcGUudXBkYXRlID0gZnVuY3Rpb24odXNlcikge1xuICAgICAgICB1c2VyU2VydmljZS51cGRhdGVVc2VyKHVzZXIpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICAgICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLiRvbigndXNlck1vZGVsOjp1c2VyVXBkYXRlZCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICRzY29wZS51c2VyRGF0YSA9IGFuZ3VsYXIuY29weSh1c2VyTW9kZWwpO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJ1c2VyIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cblVzZXJDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJywgJ3VzZXJNb2RlbCcsICd1c2VyU2VydmljZSddO1xubW9kdWxlLmV4cG9ydHMgPSBVc2VyQ29udHJvbGxlcjtcbiIsIlxudmFyIExlYWd1ZUNvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2cpIHtcblxuICAgICRzY29wZS5oYXNFcnJvciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICAgIH07XG5cbiAgICAkc2NvcGUuaGFzUHJvcGVydHlFcnJvciA9IGZ1bmN0aW9uKGlucHV0LCBwcm9wZXJ0eSkge1xuICAgICAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kZXJyb3JbcHJvcGVydHldO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcImxlYWd1ZSBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5MZWFndWVDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IExlYWd1ZUNvbnRyb2xsZXI7XG4iLCJ2YXIgTGVhZ3Vlc0NvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2csICRzdGF0ZSkge1xuXG4gICAgLy8gcGFnaW5hdGlvblxuICAgICRzY29wZS5jdXJyZW50TGVhZ3VlUGFnZSA9IDE7XG4gICAgJHNjb3BlLmxlYWd1ZXNQZXJQYWdlID0gMTAwO1xuXG4gICAgJHNjb3BlLmlzUHVibGljID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAkc3RhdGUuY3VycmVudC5uYW1lID09ICdwcml2YXRlLmxlYWd1ZXMuam9pbi5wdWJsaWMnO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcImxlYWd1ZXMgY29udHJvbGxlclwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcblxufTtcblxuTGVhZ3Vlc0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnLCAnJHN0YXRlJ107XG5tb2R1bGUuZXhwb3J0cyA9IExlYWd1ZXNDb250cm9sbGVyO1xuXG4iLCJ2YXIgVGVhbUNvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2cpIHtcblxuICAgICRzY29wZS5oYXNFcnJvciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICAgIH07XG5cbiAgICAkc2NvcGUuaGFzUHJvcGVydHlFcnJvciA9IGZ1bmN0aW9uKGlucHV0LCBwcm9wZXJ0eSkge1xuICAgICAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kZXJyb3JbcHJvcGVydHldO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcInRlYW0gY29udHJvbGxlclwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcblxufTtcblxuVGVhbUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnXTtcbm1vZHVsZS5leHBvcnRzID0gVGVhbUNvbnRyb2xsZXI7XG4iLCJ2YXIgVGVhbXNDb250cm9sbGVyID0gZnVuY3Rpb24oJHNjb3BlLCAkbG9nLCAkc3RhdGUsICRsb2NhdGlvbiwgJHN0YXRlUGFyYW1zKSB7XG5cbiAgICAkc2NvcGUuc2Vhc29uSWQgPSAkc3RhdGVQYXJhbXMuc2Vhc29uSWQ7XG5cbiAgICAvLyBwYWdpbmF0aW9uXG4gICAgJHNjb3BlLmN1cnJlbnRUZWFtUGFnZSA9IDE7XG4gICAgJHNjb3BlLnRlYW1zUGVyUGFnZSA9IDEwMDtcblxuICAgICRzY29wZS5pc0FsaXZlU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICRzdGF0ZS5jdXJyZW50Lm5hbWUgPT0gJ3ByaXZhdGUudGVhbXMuYWxpdmUnO1xuICAgIH07XG5cbiAgICAkc2NvcGUuaGFzTm9QaWNrID0gZnVuY3Rpb24odGVhbSkge1xuICAgICAgcmV0dXJuIHRlYW0ubGFzdF9waWNrLm5hbWUuaW5kZXhPZignTm8gUGljaycpID4gLTE7XG4gICAgfTtcblxuICAgICRzY29wZS5jcmVhdGVUZWFtID0gZnVuY3Rpb24oc2Vhc29uSWQpIHtcbiAgICAgICAgJGxvY2F0aW9uLnBhdGgoJy9zZWFzb24vJyArIHNlYXNvbklkICsgJy9sZWFndWVzL3B1YmxpYycpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuYWxpdmVUZWFtcyA9IGZ1bmN0aW9uKHNlYXNvbklkKSB7XG4gICAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgc2Vhc29uSWQgKyAnL3RlYW1zL2FsaXZlJyk7XG4gICAgfTtcblxuICAgICRzY29wZS5kZWFkVGVhbXMgPSBmdW5jdGlvbihzZWFzb25JZCkge1xuICAgICAgJGxvY2F0aW9uLnBhdGgoJy9zZWFzb24vJyArIHNlYXNvbklkICsgJy90ZWFtcy9kZWFkJyk7XG4gICAgfTtcblxuICAgICRzY29wZS5zaG93VGVhbSA9IGZ1bmN0aW9uKHNlYXNvbklkLCB0ZWFtKSB7XG4gICAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgc2Vhc29uSWQgKyAnL2xlYWd1ZS8nICsgdGVhbS5sZWFndWUuaWQgKyAnL3RlYW0vJyArIHRlYW0uaWQpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcInRlYW1zIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cblRlYW1zQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZycsICckc3RhdGUnLCAnJGxvY2F0aW9uJywgJyRzdGF0ZVBhcmFtcyddO1xubW9kdWxlLmV4cG9ydHMgPSBUZWFtc0NvbnRyb2xsZXI7XG4iLCJ2YXIgUGxheUNvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2csICRsb2NhdGlvbiwgJG1vZGFsLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgbWVzc2FnZU1vZGVsLCBzZWFzb25Nb2RlbCwgd2Vla1NlcnZpY2UsIGxlYWd1ZVNlcnZpY2UpIHtcblxuICAkc2NvcGUuc2VsZWN0ZWRTZWFzb25JZCA9IHBhcnNlSW50KCRzdGF0ZVBhcmFtcy5zZWFzb25JZCk7XG5cbiAgJHNjb3BlLnN0YXJ0ZWRTZWFzb25zID0gYW5ndWxhci5jb3B5KHNlYXNvbk1vZGVsLnN0YXJ0ZWRTZWFzb25zKTtcblxuICAkc2NvcGUudGVhbU9wdGlvbnMgPSB7IGFsaXZlOiB0cnVlLCBkZWFkOiB0cnVlIH07XG4gICRzY29wZS5sZWFndWVPcHRpb25zID0geyBtYW5hZ2VkOiB0cnVlIH07XG5cbiAgJHNjb3BlLnF1ZXJ5ID0gJyc7XG5cbiAgJHNjb3BlLmNoYW5nZVNlYXNvbiA9IGZ1bmN0aW9uKHNlYXNvbklkKSB7XG4gICAgc2Vhc29uTW9kZWwuc2V0U2VsZWN0ZWRTZWFzb25JZChzZWFzb25JZCk7XG4gICAgdmFyIG5ld1BhdGggPSAkbG9jYXRpb24ucGF0aCgpLnJlcGxhY2UoLyhcXC9zZWFzb25cXC8pXFxkKi8sICckMScgKyBzZWFzb25JZCk7XG4gICAgJGxvY2F0aW9uLnBhdGgobmV3UGF0aCk7XG4gIH07XG5cbiAgJHNjb3BlLm15VGVhbXMgPSBmdW5jdGlvbihzZWFzb25JZCkge1xuICAgICRsb2NhdGlvbi5wYXRoKCcvc2Vhc29uLycgKyBzZWFzb25JZCArICcvbXkvdGVhbXMnKTtcbiAgfTtcblxuICAkc2NvcGUubXlMZWFndWVzID0gZnVuY3Rpb24oc2Vhc29uSWQpIHtcbiAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgc2Vhc29uSWQgKyAnL215L2xlYWd1ZXMnKTtcbiAgfTtcblxuICAkc2NvcGUucmVzZXRTZWFyY2ggPSBmdW5jdGlvbigpIHtcbiAgICAkc2NvcGUucXVlcnkgPSAnJztcbiAgfTtcblxuICAkc2NvcGUuaXNTdGF0ZSA9IGZ1bmN0aW9uKHN0YXRlcykge1xuICAgIHJldHVybiBfLmluZGV4T2Yoc3RhdGVzLCAkc3RhdGUuY3VycmVudC5uYW1lKSA+IC0xO1xuICB9O1xuXG4gICRzY29wZS5jcmVhdGVMZWFndWUgPSBmdW5jdGlvbihzZWFzb25JZCkge1xuXG4gICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbmV3L2xlYWd1ZS5uZXcudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ05ld0xlYWd1ZUNvbnRyb2xsZXInLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICBzZWFzb25JZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHNlYXNvbklkO1xuICAgICAgICB9LFxuICAgICAgICB3ZWVrczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHdlZWtTZXJ2aWNlLmdldEF2YWlsYWJsZVdlZWtzKHNlYXNvbklkKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSk7XG5cbiAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgICAgbGVhZ3VlU2VydmljZS5jcmVhdGVMZWFndWUobGVhZ3VlKTtcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAkbG9nLmRlYnVnKCdDcmVhdGUgbGVhZ3VlIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdDcmVhdGUgbGVhZ3VlIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgIH0pO1xuXG4gIH07XG5cbiAgJHNjb3BlLmpvaW5MZWFndWUgPSBmdW5jdGlvbihzZWFzb25JZCkge1xuICAgICRsb2NhdGlvbi5wYXRoKCcvc2Vhc29uLycgKyBzZWFzb25JZCArICcvbGVhZ3Vlcy9wdWJsaWMnKTtcbiAgfTtcblxuICAgIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJwbGF5IGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcblxufTtcblxuUGxheUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnLCAnJGxvY2F0aW9uJywgJyRtb2RhbCcsICckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJ21lc3NhZ2VNb2RlbCcsICdzZWFzb25Nb2RlbCcsICd3ZWVrU2VydmljZScsICdsZWFndWVTZXJ2aWNlJ107XG5tb2R1bGUuZXhwb3J0cyA9IFBsYXlDb250cm9sbGVyO1xuIiwidmFyIEFkbWluQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSkge1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICB9O1xuICBpbml0KCk7XG59O1xuXG5BZG1pbkNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJ107XG5tb2R1bGUuZXhwb3J0cyA9IEFkbWluQ29udHJvbGxlcjtcbiIsInZhciBIZWFkZXJDb250cm9sbGVyID0gZnVuY3Rpb24oJHNjb3BlLCAkbG9nLCAkbG9jYXRpb24sICRtb2RhbCwgJHN0YXRlLCAkYW5jaG9yU2Nyb2xsLCAkc3RhdGVQYXJhbXMsIHdlZWtTZXJ2aWNlLCB1c2VyU2VydmljZSwgbGVhZ3VlU2VydmljZSwgdXNlck1vZGVsLCBtZXNzYWdlTW9kZWwsIHNlYXNvbk1vZGVsKSB7XG5cbiAgICB2YXIgc2Nyb2xsVG9Ub3AgPSBmdW5jdGlvbigpIHtcbiAgICAgICRhbmNob3JTY3JvbGwoKTsgLy8gaGFja3k/XG4gICAgfTtcblxuICAgIHZhciBjaGVja0h0bWw1U3RvcmFnZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICB0cnkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UudGVzdCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYwMDAwMDApICsgMTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnZGFuZ2VyJywgY29udGVudDogJ1lvdSBhcmUgaW4gUHJpdmFjeSBNb2RlLiBUaGlzIGFwcCB3aWxsIG5vdCBmdW5jdGlvbiBwcm9wZXJseS4gVHVybiBvZmYgUHJpdmFjeSBNb2RlLid9LCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICB9O1xuXG4gICAgJHNjb3BlLnNlbGVjdGVkU2Vhc29uSWQgPSAoYW5ndWxhci5pc0RlZmluZWQoJHN0YXRlUGFyYW1zLnNlYXNvbklkKSkgPyBwYXJzZUludCgkc3RhdGVQYXJhbXMuc2Vhc29uSWQpIDogc2Vhc29uTW9kZWwuc2VsZWN0ZWRTZWFzb25JZDtcblxuICAgICRzY29wZS5pc0NvbGxhcHNlZCA9IHRydWU7XG5cbiAgICAkc2NvcGUudXNlckRhdGEgPSB1c2VyTW9kZWw7XG5cbiAgICAkc2NvcGUuY3JlZGVudGlhbHMgPSB7XG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgfTtcblxuICAgICRzY29wZS5pc1N0YXRlID0gZnVuY3Rpb24oc3RhdGVzKSB7XG4gICAgICByZXR1cm4gXy5pbmRleE9mKHN0YXRlcywgJHN0YXRlLmN1cnJlbnQubmFtZSkgPiAtMTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmhvbWUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJGxvY2F0aW9uLnBhdGgoJy8nKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmZhcSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAkbW9kYWwub3Blbih7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wdWJsaWMvZmFxL2ZhcS50cGwuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdGYXFDb250cm9sbGVyJ1xuICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgJHNjb3BlLmNvbnRhY3RVcyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3B1YmxpYy9hYnVzZS9hYnVzZS50cGwuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdBYnVzZUNvbnRyb2xsZXInXG4gICAgICB9KTtcblxuICAgICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgIHVzZXJTZXJ2aWNlLmNvbnRhY3RVcyhtZXNzYWdlKTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdDb250YWN0IHVzIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgICAgICAkbG9nLmRlYnVnKCdjb250YWN0IHVzIGRpc21pc3NlZC4uLicpO1xuICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgJHNjb3BlLnJlZ2lzdGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHVibGljL3JlZ2lzdGVyL3JlZ2lzdGVyLnRwbC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1JlZ2lzdGVyQ29udHJvbGxlcidcbiAgICAgIH0pO1xuXG4gICAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKG5ld1VzZXIpIHtcbiAgICAgICAgdXNlclNlcnZpY2UuY3JlYXRlVXNlcihuZXdVc2VyKTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdSZWdpc3RlciBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICAgICAgJGxvZy5kZWJ1ZygnUmVnaXN0ZXIgbW9kYWwgZGlzbWlzc2VkLi4uJyk7XG4gICAgICB9KTtcblxuICAgIH07XG5cbiAgICAkc2NvcGUucGxheSA9IGZ1bmN0aW9uKHNlYXNvbklkKSB7XG4gICAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgc2Vhc29uSWQgKyAnL215L3RlYW1zJyk7XG4gICAgfTtcblxuICAgICRzY29wZS5qb2luTGVhZ3VlID0gZnVuY3Rpb24oc2Vhc29uSWQpIHtcbiAgICAgICRsb2NhdGlvbi5wYXRoKCcvc2Vhc29uLycgKyBzZWFzb25JZCArICcvbGVhZ3Vlcy9wdWJsaWMnKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNyZWF0ZUxlYWd1ZSA9IGZ1bmN0aW9uKHNlYXNvbklkKSB7XG4gICAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9uZXcvbGVhZ3VlLm5ldy50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTmV3TGVhZ3VlQ29udHJvbGxlcicsXG4gICAgICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgICAgIHNlYXNvbklkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2Vhc29uSWQ7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHdlZWtzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2Vla1NlcnZpY2UuZ2V0QXZhaWxhYmxlV2Vla3Moc2Vhc29uSWQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgICAgIGxlYWd1ZVNlcnZpY2UuY3JlYXRlTGVhZ3VlKGxlYWd1ZSk7XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnQ3JlYXRlIGxlYWd1ZSBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICAgICAgJGxvZy5kZWJ1ZygnQ3JlYXRlIGxlYWd1ZSBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAkc2NvcGUudXNlclByb2ZpbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJGxvY2F0aW9uLnBhdGgoJy91c2VyJyk7XG4gICAgfTtcblxuICAgICRzY29wZS5zaWduaW4gPSBmdW5jdGlvbihjcmVkZW50aWFscykge1xuICAgICAgICAkbG9nLmRlYnVnKFwic2lnbmluIGNyZWRlbnRpYWxzOiBcIiArIGNyZWRlbnRpYWxzKTtcbiAgICAgICAgJHNjb3BlLmRpc3BhdGNoKFwiU2lnbmluRXZlbnRcIiwgY3JlZGVudGlhbHMpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuc2lnbm91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkc2NvcGUuY3JlZGVudGlhbHMgPSB7XG4gICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICBwYXNzd29yZDogJydcbiAgICAgICAgfTtcbiAgICAgICAgJHNjb3BlLmRpc3BhdGNoKFwiU2lnbm91dEV2ZW50XCIpO1xuICAgIH07XG5cbiAgICAkc2NvcGUucmVzZXRQYXNzd29yZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvdXNlci9yZXNldC91c2VyLnJlc2V0LnRwbC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1VzZXJSZXNldENvbnRyb2xsZXInXG4gICAgICB9KTtcblxuICAgICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbiAoZW1haWwpIHtcbiAgICAgICAgdXNlclNlcnZpY2UucmVzZXRVc2VyKGVtYWlsKTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdSZXNldCBwYXNzd29yZCBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICAgICAgJGxvZy5kZWJ1ZygnUmVzZXQgcGFzc3dvcmQgbW9kYWwgZGlzbWlzc2VkLi4uJyk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJoZWFkZXIgY29udHJvbGxlclwiKTtcbiAgICAgICAgc2Nyb2xsVG9Ub3AoKTtcbiAgICAgICAgY2hlY2tIdG1sNVN0b3JhZ2UoKTtcbiAgICB9O1xuICAgIGluaXQoKTtcbn07XG5cbkhlYWRlckNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnLCAnJGxvY2F0aW9uJywgJyRtb2RhbCcsICckc3RhdGUnLCAnJGFuY2hvclNjcm9sbCcsICckc3RhdGVQYXJhbXMnLCAnd2Vla1NlcnZpY2UnLCAndXNlclNlcnZpY2UnLCAnbGVhZ3VlU2VydmljZScsICd1c2VyTW9kZWwnLCAnbWVzc2FnZU1vZGVsJywgJ3NlYXNvbk1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IEhlYWRlckNvbnRyb2xsZXI7XG4iLCJ2YXIgTWVzc2FnZUNvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2csIG1lc3NhZ2VNb2RlbCkge1xuXG4gICAgJHNjb3BlLm1lc3NhZ2VEYXRhID0gbWVzc2FnZU1vZGVsO1xuXG4gICAgJHNjb3BlLmRpc21pc3NNZXNzYWdlID0gZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICBtZXNzYWdlLnJlc2V0TWVzc2FnZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKFwibWVzc2FnZSBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xufTtcblxuTWVzc2FnZUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnLCAnbWVzc2FnZU1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IE1lc3NhZ2VDb250cm9sbGVyO1xuIiwidmFyIEZvb3RlckNvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2csICRsb2NhdGlvbikge1xuXG4gICRzY29wZS5ob21lID0gZnVuY3Rpb24oKSB7XG4gICAgJGxvY2F0aW9uLnBhdGgoJy8nKTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwiZm9vdGVyIGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cbkZvb3RlckNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnLCAnJGxvY2F0aW9uJ107XG5tb2R1bGUuZXhwb3J0cyA9IEZvb3RlckNvbnRyb2xsZXI7XG4iLCJ2YXIgQ29uZmlybUNvbnRyb2xsZXIgPSBmdW5jdGlvbihtZXNzYWdlLCAkc2NvcGUsICRsb2csICRtb2RhbEluc3RhbmNlKSB7XG5cbiAgJHNjb3BlLm1lc3NhZ2UgPSBtZXNzYWdlO1xuXG4gICRzY29wZS5jb25maXJtID0gZnVuY3Rpb24oKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuY2xvc2UoKTtcbiAgfTtcblxuICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJjb25maXJtIGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcblxufTtcblxuQ29uZmlybUNvbnRyb2xsZXIuJGluamVjdCA9IFsnbWVzc2FnZScsICckc2NvcGUnLCAnJGxvZycsICckbW9kYWxJbnN0YW5jZSddO1xubW9kdWxlLmV4cG9ydHMgPSBDb25maXJtQ29udHJvbGxlcjtcbiIsInZhciBGb2N1c0RpcmVjdGl2ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBGT0NVU19DTEFTUyA9ICduZy1mb2N1c2VkJztcbiAgICByZXR1cm4ge1xuICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICByZXF1aXJlOiAnbmdNb2RlbCcsXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3RybCkge1xuICAgICAgICAgICAgY3RybC4kZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgZWxlbWVudC5iaW5kKCdmb2N1cycsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoRk9DVVNfQ0xBU1MpO1xuICAgICAgICAgICAgICAgIHNjb3BlLiRhcHBseShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgY3RybC4kZm9jdXNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS5iaW5kKCdibHVyJywgZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDbGFzcyhGT0NVU19DTEFTUyk7XG4gICAgICAgICAgICAgICAgc2NvcGUuJGFwcGx5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBjdHJsLiRmb2N1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRm9jdXNEaXJlY3RpdmU7XG4iLCJ2YXIgQXBwbGljYXRpb25TZXJ2aWNlID0gZnVuY3Rpb24oJHdpbmRvdywgJGxvY2F0aW9uLCAkbG9nKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqICBBcHBsaWNhdGlvbiBTdGFydHVwIFByb2Nlc3NcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3RhcnR1cCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc3RhcnR1cFByb2Nlc3MoKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgc3RhcnR1cFByb2Nlc3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBmb3JjZVNzbCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBmb3JjZVNzbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoJGxvY2F0aW9uLmhvc3QoKSA9PSAnbG9jYWxob3N0JykgcmV0dXJuO1xuICAgICAgICAgIGlmICgkbG9jYXRpb24ucHJvdG9jb2woKSAhPSAnaHR0cHMnKSB7XG4gICAgICAgICAgICAkd2luZG93LmxvY2F0aW9uLmhyZWYgPSAkbG9jYXRpb24uYWJzVXJsKCkucmVwbGFjZSgnaHR0cCcsICdodHRwcycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRsb2cuZGVidWcoXCJBcHBsaWNhdGlvblNlcnZpY2UgaW5pdCBhcHBsaWNhdGlvbiBzZXJ2aWNlXCIpO1xuICAgICAgICB9O1xuICAgICAgICBpbml0KCk7XG5cbiAgICB9O1xuXG5BcHBsaWNhdGlvblNlcnZpY2UuJGluamVjdCA9IFsnJHdpbmRvdycsICckbG9jYXRpb24nLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBBcHBsaWNhdGlvblNlcnZpY2U7XG4iLCJ2YXIgRGF0ZVV0aWxzID0gZnVuY3Rpb24oKSB7XG5cbiAgdGhpcy5kYXRlRm9ybWF0ID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIHNvdXJjZTogaHR0cDovL2Jsb2cuc3RldmVubGV2aXRoYW4uY29tL2FyY2hpdmVzL2RhdGUtdGltZS1mb3JtYXRcbiAgICB2YXJcdHRva2VuID0gL2R7MSw0fXxtezEsNH18eXkoPzp5eSk/fChbSGhNc1R0XSlcXDE/fFtMbG9TWl18XCJbXlwiXSpcInwnW14nXSonL2csXG4gICAgICB0aW1lem9uZSA9IC9cXGIoPzpbUE1DRUFdW1NEUF1UfCg/OlBhY2lmaWN8TW91bnRhaW58Q2VudHJhbHxFYXN0ZXJufEF0bGFudGljKSAoPzpTdGFuZGFyZHxEYXlsaWdodHxQcmV2YWlsaW5nKSBUaW1lfCg/OkdNVHxVVEMpKD86Wy0rXVxcZHs0fSk/KVxcYi9nLFxuICAgICAgdGltZXpvbmVDbGlwID0gL1teLStcXGRBLVpdL2csXG4gICAgICBwYWQgPSBmdW5jdGlvbiAodmFsLCBsZW4pIHtcbiAgICAgICAgdmFsID0gU3RyaW5nKHZhbCk7XG4gICAgICAgIGxlbiA9IGxlbiB8fCAyO1xuICAgICAgICB3aGlsZSAodmFsLmxlbmd0aCA8IGxlbikgdmFsID0gXCIwXCIgKyB2YWw7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgICB9O1xuXG4gICAgLy8gUmVnZXhlcyBhbmQgc3VwcG9ydGluZyBmdW5jdGlvbnMgYXJlIGNhY2hlZCB0aHJvdWdoIGNsb3N1cmVcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGUsIG1hc2ssIHV0Yykge1xuICAgICAgdmFyIGRGID0gdGhpcy5kYXRlRm9ybWF0O1xuXG4gICAgICAvLyBZb3UgY2FuJ3QgcHJvdmlkZSB1dGMgaWYgeW91IHNraXAgb3RoZXIgYXJncyAodXNlIHRoZSBcIlVUQzpcIiBtYXNrIHByZWZpeClcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDEgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGRhdGUpID09IFwiW29iamVjdCBTdHJpbmddXCIgJiYgIS9cXGQvLnRlc3QoZGF0ZSkpIHtcbiAgICAgICAgbWFzayA9IGRhdGU7XG4gICAgICAgIGRhdGUgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIC8vIFBhc3NpbmcgZGF0ZSB0aHJvdWdoIERhdGUgYXBwbGllcyBEYXRlLnBhcnNlLCBpZiBuZWNlc3NhcnlcbiAgICAgIGRhdGUgPSBkYXRlID8gbmV3IERhdGUoZGF0ZSkgOiBuZXcgRGF0ZTtcbiAgICAgIGlmIChpc05hTihkYXRlKSkgdGhyb3cgU3ludGF4RXJyb3IoXCJpbnZhbGlkIGRhdGVcIik7XG5cbiAgICAgIG1hc2sgPSBTdHJpbmcoZEYubWFza3NbbWFza10gfHwgbWFzayB8fCBkRi5tYXNrc1tcImRlZmF1bHRcIl0pO1xuXG4gICAgICAvLyBBbGxvdyBzZXR0aW5nIHRoZSB1dGMgYXJndW1lbnQgdmlhIHRoZSBtYXNrXG4gICAgICBpZiAobWFzay5zbGljZSgwLCA0KSA9PSBcIlVUQzpcIikge1xuICAgICAgICBtYXNrID0gbWFzay5zbGljZSg0KTtcbiAgICAgICAgdXRjID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyXHRfID0gdXRjID8gXCJnZXRVVENcIiA6IFwiZ2V0XCIsXG4gICAgICAgIGQgPSBkYXRlW18gKyBcIkRhdGVcIl0oKSxcbiAgICAgICAgRCA9IGRhdGVbXyArIFwiRGF5XCJdKCksXG4gICAgICAgIG0gPSBkYXRlW18gKyBcIk1vbnRoXCJdKCksXG4gICAgICAgIHkgPSBkYXRlW18gKyBcIkZ1bGxZZWFyXCJdKCksXG4gICAgICAgIEggPSBkYXRlW18gKyBcIkhvdXJzXCJdKCksXG4gICAgICAgIE0gPSBkYXRlW18gKyBcIk1pbnV0ZXNcIl0oKSxcbiAgICAgICAgcyA9IGRhdGVbXyArIFwiU2Vjb25kc1wiXSgpLFxuICAgICAgICBMID0gZGF0ZVtfICsgXCJNaWxsaXNlY29uZHNcIl0oKSxcbiAgICAgICAgbyA9IHV0YyA/IDAgOiBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCksXG4gICAgICAgIGZsYWdzID0ge1xuICAgICAgICAgIGQ6ICAgIGQsXG4gICAgICAgICAgZGQ6ICAgcGFkKGQpLFxuICAgICAgICAgIGRkZDogIGRGLmkxOG4uZGF5TmFtZXNbRF0sXG4gICAgICAgICAgZGRkZDogZEYuaTE4bi5kYXlOYW1lc1tEICsgN10sXG4gICAgICAgICAgbTogICAgbSArIDEsXG4gICAgICAgICAgbW06ICAgcGFkKG0gKyAxKSxcbiAgICAgICAgICBtbW06ICBkRi5pMThuLm1vbnRoTmFtZXNbbV0sXG4gICAgICAgICAgbW1tbTogZEYuaTE4bi5tb250aE5hbWVzW20gKyAxMl0sXG4gICAgICAgICAgeXk6ICAgU3RyaW5nKHkpLnNsaWNlKDIpLFxuICAgICAgICAgIHl5eXk6IHksXG4gICAgICAgICAgaDogICAgSCAlIDEyIHx8IDEyLFxuICAgICAgICAgIGhoOiAgIHBhZChIICUgMTIgfHwgMTIpLFxuICAgICAgICAgIEg6ICAgIEgsXG4gICAgICAgICAgSEg6ICAgcGFkKEgpLFxuICAgICAgICAgIE06ICAgIE0sXG4gICAgICAgICAgTU06ICAgcGFkKE0pLFxuICAgICAgICAgIHM6ICAgIHMsXG4gICAgICAgICAgc3M6ICAgcGFkKHMpLFxuICAgICAgICAgIGw6ICAgIHBhZChMLCAzKSxcbiAgICAgICAgICBMOiAgICBwYWQoTCA+IDk5ID8gTWF0aC5yb3VuZChMIC8gMTApIDogTCksXG4gICAgICAgICAgdDogICAgSCA8IDEyID8gXCJhXCIgIDogXCJwXCIsXG4gICAgICAgICAgdHQ6ICAgSCA8IDEyID8gXCJhbVwiIDogXCJwbVwiLFxuICAgICAgICAgIFQ6ICAgIEggPCAxMiA/IFwiQVwiICA6IFwiUFwiLFxuICAgICAgICAgIFRUOiAgIEggPCAxMiA/IFwiQU1cIiA6IFwiUE1cIixcbiAgICAgICAgICBaOiAgICB1dGMgPyBcIlVUQ1wiIDogKFN0cmluZyhkYXRlKS5tYXRjaCh0aW1lem9uZSkgfHwgW1wiXCJdKS5wb3AoKS5yZXBsYWNlKHRpbWV6b25lQ2xpcCwgXCJcIiksXG4gICAgICAgICAgbzogICAgKG8gPiAwID8gXCItXCIgOiBcIitcIikgKyBwYWQoTWF0aC5mbG9vcihNYXRoLmFicyhvKSAvIDYwKSAqIDEwMCArIE1hdGguYWJzKG8pICUgNjAsIDQpLFxuICAgICAgICAgIFM6ICAgIFtcInRoXCIsIFwic3RcIiwgXCJuZFwiLCBcInJkXCJdW2QgJSAxMCA+IDMgPyAwIDogKGQgJSAxMDAgLSBkICUgMTAgIT0gMTApICogZCAlIDEwXVxuICAgICAgICB9O1xuXG4gICAgICByZXR1cm4gbWFzay5yZXBsYWNlKHRva2VuLCBmdW5jdGlvbiAoJDApIHtcbiAgICAgICAgcmV0dXJuICQwIGluIGZsYWdzID8gZmxhZ3NbJDBdIDogJDAuc2xpY2UoMSwgJDAubGVuZ3RoIC0gMSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9KCk7XG5cbiAgdGhpcy5kYXRlRm9ybWF0Lm1hc2tzID0ge1xuICAgIFwiZGVmYXVsdFwiOiAgICAgIFwiZGRkIG1tbSBkZCB5eXl5IEhIOk1NOnNzXCIsXG4gICAgc2hvcnREYXRlOiAgICAgIFwibS9kL3l5XCIsXG4gICAgbWVkaXVtRGF0ZTogICAgIFwibW1tIGQsIHl5eXlcIixcbiAgICBsb25nRGF0ZTogICAgICAgXCJtbW1tIGQsIHl5eXlcIixcbiAgICBmdWxsRGF0ZTogICAgICAgXCJkZGRkLCBtbW1tIGQsIHl5eXlcIixcbiAgICBzaG9ydFRpbWU6ICAgICAgXCJoOk1NIFRUXCIsXG4gICAgbWVkaXVtVGltZTogICAgIFwiaDpNTTpzcyBUVFwiLFxuICAgIGxvbmdUaW1lOiAgICAgICBcImg6TU06c3MgVFQgWlwiLFxuICAgIGlzb0RhdGU6ICAgICAgICBcInl5eXktbW0tZGRcIixcbiAgICBpc29UaW1lOiAgICAgICAgXCJISDpNTTpzc1wiLFxuICAgIGlzb0RhdGVUaW1lOiAgICBcInl5eXktbW0tZGQnVCdISDpNTTpzc1wiLFxuICAgIGlzb1V0Y0RhdGVUaW1lOiBcIlVUQzp5eXl5LW1tLWRkJ1QnSEg6TU06c3MnWidcIlxuICB9O1xuXG4gIHRoaXMuZGF0ZUZvcm1hdC5pMThuID0ge1xuICAgIGRheU5hbWVzOiBbXG4gICAgICBcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiLFxuICAgICAgXCJTdW5kYXlcIiwgXCJNb25kYXlcIiwgXCJUdWVzZGF5XCIsIFwiV2VkbmVzZGF5XCIsIFwiVGh1cnNkYXlcIiwgXCJGcmlkYXlcIiwgXCJTYXR1cmRheVwiXG4gICAgXSxcbiAgICBtb250aE5hbWVzOiBbXG4gICAgICBcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiLFxuICAgICAgXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXG4gICAgXVxuICB9O1xuXG59O1xuXG5EYXRlVXRpbHMuJGluamVjdCA9IFtdO1xubW9kdWxlLmV4cG9ydHMgPSBEYXRlVXRpbHM7XG4iLCJ2YXIgTWF0Y2hEaXJlY3RpdmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZXF1aXJlOiAnbmdNb2RlbCcsXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbSwgYXR0cnMsIGN0cmwpIHtcbiAgICAgICAgICAgIHNjb3BlLiR3YXRjaCgnWycgKyBhdHRycy5uZ01vZGVsICsgJywgJyArIGF0dHJzLm1hdGNoICsgJ10nLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBhID0gdmFsdWVbMF0gfHwgJyc7XG4gICAgICAgICAgICAgICAgdmFyIGIgPSB2YWx1ZVsxXSB8fCAnJztcbiAgICAgICAgICAgICAgICBjdHJsLiRzZXRWYWxpZGl0eSgnbWF0Y2gnLCBhID09PSBiKTtcbiAgICAgICAgICAgIH0sIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXRjaERpcmVjdGl2ZTtcbiIsInZhciBGb3JtYXR0ZWREYXRlRGlyZWN0aXZlID0gZnVuY3Rpb24oZGF0ZVV0aWxzKSB7XG4gIHJldHVybiB7XG4gICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3RybCkge1xuICAgICAgY3RybC4kZm9ybWF0dGVycy51bnNoaWZ0KGZ1bmN0aW9uIChtb2RlbFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBkYXRlVXRpbHMuZGF0ZUZvcm1hdChtb2RlbFZhbHVlLCBcIm1tbSBkIHl5eXkgaDpNTSB0dCAoWilcIilcbiAgICAgIH0pO1xuXG4gICAgICBjdHJsLiRwYXJzZXJzLnVuc2hpZnQoZnVuY3Rpb24gKHZpZXdWYWx1ZSkge1xuICAgICAgICByZXR1cm4gZGF0ZVV0aWxzLmRhdGVGb3JtYXQobW9kZWxWYWx1ZSwgXCJtbW0gZCB5eXl5IGg6TU0gdHQgKFopXCIpXG4gICAgICB9KTtcbiAgICB9LFxuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgcmVxdWlyZTogJ25nTW9kZWwnXG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRm9ybWF0dGVkRGF0ZURpcmVjdGl2ZTtcbiIsInZhciByY1N1Ym1pdERpcmVjdGl2ZSA9IHtcbiAgJ3JjU3VibWl0JzogWyckcGFyc2UnLCBmdW5jdGlvbiAoJHBhcnNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICByZXF1aXJlOiBbJ3JjU3VibWl0JywgJz9mb3JtJ10sXG4gICAgICBjb250cm9sbGVyOiBbJyRzY29wZScsIGZ1bmN0aW9uICgkc2NvcGUpIHtcblxuICAgICAgICB2YXIgZm9ybUNvbnRyb2xsZXIgPSBudWxsO1xuICAgICAgICB2YXIgYXR0ZW1wdEhhbmRsZXJzID0gW107XG5cbiAgICAgICAgdGhpcy5hdHRlbXB0ZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLm9uQXR0ZW1wdCA9IGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgICAgICBhdHRlbXB0SGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNldEF0dGVtcHRlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHRoaXMuYXR0ZW1wdGVkID0gdHJ1ZTtcblxuICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChhdHRlbXB0SGFuZGxlcnMsIGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zZXRGb3JtQ29udHJvbGxlciA9IGZ1bmN0aW9uKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgICBmb3JtQ29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5uZWVkc0F0dGVudGlvbiA9IGZ1bmN0aW9uIChmaWVsZE1vZGVsQ29udHJvbGxlcikge1xuICAgICAgICAgIGlmICghZm9ybUNvbnRyb2xsZXIpIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgIGlmIChmaWVsZE1vZGVsQ29udHJvbGxlcikge1xuICAgICAgICAgICAgcmV0dXJuIGZpZWxkTW9kZWxDb250cm9sbGVyLiRpbnZhbGlkICYmXG4gICAgICAgICAgICAgIChmaWVsZE1vZGVsQ29udHJvbGxlci4kZGlydHkgfHwgdGhpcy5hdHRlbXB0ZWQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZm9ybUNvbnRyb2xsZXIgJiYgZm9ybUNvbnRyb2xsZXIuJGludmFsaWQgJiZcbiAgICAgICAgICAgICAgKGZvcm1Db250cm9sbGVyLiRkaXJ0eSB8fCB0aGlzLmF0dGVtcHRlZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfV0sXG4gICAgICBjb21waWxlOiBmdW5jdGlvbihjRWxlbWVudCwgY0F0dHJpYnV0ZXMsIHRyYW5zY2x1ZGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwcmU6IGZ1bmN0aW9uKHNjb3BlLCBmb3JtRWxlbWVudCwgYXR0cmlidXRlcywgY29udHJvbGxlcnMpIHtcblxuICAgICAgICAgICAgdmFyIHN1Ym1pdENvbnRyb2xsZXIgPSBjb250cm9sbGVyc1swXTtcbiAgICAgICAgICAgIHZhciBmb3JtQ29udHJvbGxlciA9IChjb250cm9sbGVycy5sZW5ndGggPiAxKSA/IGNvbnRyb2xsZXJzWzFdIDogbnVsbDtcblxuICAgICAgICAgICAgc3VibWl0Q29udHJvbGxlci5zZXRGb3JtQ29udHJvbGxlcihmb3JtQ29udHJvbGxlcik7XG5cbiAgICAgICAgICAgIHNjb3BlLnJjID0gc2NvcGUucmMgfHwge307XG4gICAgICAgICAgICBzY29wZS5yY1thdHRyaWJ1dGVzLm5hbWVdID0gc3VibWl0Q29udHJvbGxlcjtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBvc3Q6IGZ1bmN0aW9uKHNjb3BlLCBmb3JtRWxlbWVudCwgYXR0cmlidXRlcywgY29udHJvbGxlcnMpIHtcblxuICAgICAgICAgICAgdmFyIHN1Ym1pdENvbnRyb2xsZXIgPSBjb250cm9sbGVyc1swXTtcbiAgICAgICAgICAgIHZhciBmb3JtQ29udHJvbGxlciA9IChjb250cm9sbGVycy5sZW5ndGggPiAxKSA/IGNvbnRyb2xsZXJzWzFdIDogbnVsbDtcbiAgICAgICAgICAgIHZhciBmbiA9ICRwYXJzZShhdHRyaWJ1dGVzLnJjU3VibWl0KTtcblxuICAgICAgICAgICAgZm9ybUVsZW1lbnQuYmluZCgnc3VibWl0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBzdWJtaXRDb250cm9sbGVyLnNldEF0dGVtcHRlZCgpO1xuICAgICAgICAgICAgICBpZiAoIXNjb3BlLiQkcGhhc2UpIHNjb3BlLiRhcHBseSgpO1xuXG4gICAgICAgICAgICAgIGlmICghZm9ybUNvbnRyb2xsZXIuJHZhbGlkKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgICAgc2NvcGUuJGFwcGx5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGZuKHNjb3BlLCB7JGV2ZW50OmV2ZW50fSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH07XG4gIH1dXG59OyIsInZhciByY1ZlcmlmeVNldERpcmVjdGl2ZSA9IHtcbiAgJ3JjVmVyaWZ5U2V0JzogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgcmVxdWlyZTogWydecmNTdWJtaXQnLCAnbmdNb2RlbCddLFxuICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRyaWJ1dGVzLCBjb250cm9sbGVycykge1xuICAgICAgICB2YXIgc3VibWl0Q29udHJvbGxlciA9IGNvbnRyb2xsZXJzWzBdO1xuICAgICAgICB2YXIgbW9kZWxDb250cm9sbGVyID0gY29udHJvbGxlcnNbMV07XG5cbiAgICAgICAgc3VibWl0Q29udHJvbGxlci5vbkF0dGVtcHQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbW9kZWxDb250cm9sbGVyLiRzZXRWaWV3VmFsdWUoZWxlbWVudC52YWwoKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn07IiwiLyogYXR0cmlidXRlIHdpbGwgZW5mb3JjZSBhIHJlZyBleCBwYXR0ZXJuIGlmIHRoZSBmaWVsZCBpcyBtYXJrZWQgYXMgbmctcmVxdWlyZWQgKi9cbnZhciBSZXF1aXJlZFBhdHRlcm5EaXJlY3RpdmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZXN0cmljdDogXCJBXCIsXG4gICAgICAgIHJlcXVpcmU6IFwibmdNb2RlbFwiLFxuICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWwsIGF0dHJzLCBuZ01vZGVsKSB7XG4gICAgICAgICAgICB2YXIgdmFsaWRhdG9yLCBwYXR0ZXJuVmFsaWRhdG9yLFxuICAgICAgICAgICAgICAgIHBhdHRlcm4gPSBhdHRycy5ycGF0dGVybixcbiAgICAgICAgICAgICAgICByZXF1aXJlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmKCBwYXR0ZXJuICkge1xuICAgICAgICAgICAgICAgIGlmIChwYXR0ZXJuLm1hdGNoKC9eXFwvKC4qKVxcLyQvKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuID0gbmV3IFJlZ0V4cChwYXR0ZXJuLnN1YnN0cigxLCBwYXR0ZXJuLmxlbmd0aCAtIDIpKTtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVyblZhbGlkYXRvciA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdGUocGF0dGVybiwgdmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuVmFsaWRhdG9yID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXR0ZXJuT2JqID0gc2NvcGUuJGV2YWwocGF0dGVybik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXBhdHRlcm5PYmogfHwgIXBhdHRlcm5PYmoudGVzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgJyArIHBhdHRlcm4gKyAnIHRvIGJlIGEgUmVnRXhwIGJ1dCB3YXMgJyArIHBhdHRlcm5PYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHBhdHRlcm5PYmosIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5nTW9kZWwuJGZvcm1hdHRlcnMucHVzaChwYXR0ZXJuVmFsaWRhdG9yKTtcbiAgICAgICAgICAgIG5nTW9kZWwuJHBhcnNlcnMucHVzaChwYXR0ZXJuVmFsaWRhdG9yKTtcblxuICAgICAgICAgICAgYXR0cnMuJG9ic2VydmUoXCJyZXF1aXJlZFwiLCBmdW5jdGlvbihuZXd2YWwpIHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZCA9IG5ld3ZhbDtcbiAgICAgICAgICAgICAgICBwYXR0ZXJuVmFsaWRhdG9yKG5nTW9kZWwuJHZpZXdWYWx1ZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGUocmVnZXhwLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmKCB2YWx1ZSA9PSBudWxsIHx8IHZhbHVlID09PSBcIlwiIHx8ICFyZXF1aXJlZCB8fCByZWdleHAudGVzdCh2YWx1ZSkgKSB7XG4gICAgICAgICAgICAgICAgICAgIG5nTW9kZWwuJHNldFZhbGlkaXR5KCdwYXR0ZXJuJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5nTW9kZWwuJHNldFZhbGlkaXR5KCdwYXR0ZXJuJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZXF1aXJlZFBhdHRlcm5EaXJlY3RpdmU7IiwidmFyIFNlbGVjdE9uQ2xpY2tEaXJlY3RpdmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNlbGVjdCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZWxlY3RPbkNsaWNrRGlyZWN0aXZlO1xuIiwidmFyIFJlZ2lzdGVyVGVybXNDb250cm9sbGVyID0gZnVuY3Rpb24oJG1vZGFsSW5zdGFuY2UsICRzY29wZSwgJGxvZykge1xuXG4gICRzY29wZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjbG9zZScpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJyZWdpc3RlciB0ZXJtcyBhbmQgY29uZGl0aW9ucyBjb250cm9sbGVyXCIpO1xuICB9O1xuICBpbml0KCk7XG59O1xuXG5SZWdpc3RlclRlcm1zQ29udHJvbGxlci4kaW5qZWN0ID0gWyckbW9kYWxJbnN0YW5jZScsICckc2NvcGUnLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBSZWdpc3RlclRlcm1zQ29udHJvbGxlcjtcbiIsInZhciBVc2VyUmVzZXRDb250cm9sbGVyID0gZnVuY3Rpb24oJG1vZGFsSW5zdGFuY2UsICRzY29wZSwgJGxvZykge1xuXG4gICRzY29wZS51c2VyRGF0YSA9IHtcbiAgICBlbWFpbDogXCJcIlxuICB9O1xuXG4gICRzY29wZS5yZXNldCA9IGZ1bmN0aW9uIChlbWFpbCkge1xuICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKGVtYWlsKTtcbiAgfTtcblxuICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICB9O1xuXG4gICRzY29wZS5oYXNFcnJvciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gIH07XG5cbiAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kZXJyb3JbcHJvcGVydHldO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJ1c2VyIHJlc2V0IGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cblVzZXJSZXNldENvbnRyb2xsZXIuJGluamVjdCA9IFsnJG1vZGFsSW5zdGFuY2UnLCAnJHNjb3BlJywgJyRsb2cnXTtcbm1vZHVsZS5leHBvcnRzID0gVXNlclJlc2V0Q29udHJvbGxlcjtcbiIsInZhciBOZXdMZWFndWVDb250cm9sbGVyID0gZnVuY3Rpb24oc2Vhc29uSWQsIHdlZWtzLCAkc2NvcGUsICRsb2csICRtb2RhbEluc3RhbmNlLCB3ZWVrU2VydmljZSwgc2Vhc29uTW9kZWwpIHtcblxuICAgICRzY29wZS53ZWVrcyA9IHdlZWtzLmRhdGE7XG5cbiAgICAkc2NvcGUuc2Vhc29ucyA9IGFuZ3VsYXIuY29weShzZWFzb25Nb2RlbC5jdXJyZW50U2Vhc29ucyk7XG5cbiAgICAkc2NvcGUubmV3TGVhZ3VlRGF0YSA9IHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIG5pY2tuYW1lOiAnJyxcbiAgICAgICAgc2Vhc29uX2lkOiBzZWFzb25JZCxcbiAgICAgICAgc3RhcnRfd2Vla19pZDogJHNjb3BlLndlZWtzWzBdLmlkLFxuICAgICAgICBwdWJsaWM6IHRydWUsXG4gICAgICAgIGVsaW1pbmF0aW9uOiB0cnVlLFxuICAgICAgICBtYXhfdGVhbXNfcGVyX3VzZXI6ICcnXG4gICAgfTtcblxuICAgICRzY29wZS5nZXRTZWFzb25XZWVrcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgd2Vla1NlcnZpY2UuZ2V0QXZhaWxhYmxlV2Vla3MoJHNjb3BlLm5ld0xlYWd1ZURhdGEuc2Vhc29uX2lkKVxuICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICRzY29wZS53ZWVrcyA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgJHNjb3BlLm5ld0xlYWd1ZURhdGEuc3RhcnRfd2Vla19pZCA9ICRzY29wZS53ZWVrc1swXS5pZDtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICRzY29wZS5jcmVhdGVMZWFndWUgPSBmdW5jdGlvbihsZWFndWUpIHtcbiAgICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKGxlYWd1ZSk7XG4gICAgfTtcblxuICAgICRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gICAgfTtcblxuICAgICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kZXJyb3JbcHJvcGVydHldO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIm5ldyBsZWFndWUgY29udHJvbGxlclwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcblxufTtcblxuTmV3TGVhZ3VlQ29udHJvbGxlci4kaW5qZWN0ID0gWydzZWFzb25JZCcsICd3ZWVrcycsICckc2NvcGUnLCAnJGxvZycsICckbW9kYWxJbnN0YW5jZScsICd3ZWVrU2VydmljZScsICdzZWFzb25Nb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBOZXdMZWFndWVDb250cm9sbGVyO1xuIiwidmFyIFZpZXdMZWFndWVDb250cm9sbGVyID0gZnVuY3Rpb24obGVhZ3VlLCBsZWFndWVXZWVrcywgbGVhZ3VlVGVhbXMsICRzY29wZSwgJGxvZywgJG1vZGFsLCAkbG9jYXRpb24sICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCB1c2VyTW9kZWwsIG1lc3NhZ2VNb2RlbCwgdXNlclNlcnZpY2UsIHdlZWtTZXJ2aWNlLCB0ZWFtU2VydmljZSwgbGVhZ3VlU2VydmljZSkge1xuXG4gICRzY29wZS5sZWFndWVEYXRhID0gbGVhZ3VlLmRhdGE7XG5cbiAgJHNjb3BlLmxlYWd1ZVdlZWtzID0gbGVhZ3VlV2Vla3MuZGF0YTtcbiAgJHNjb3BlLmxlYWd1ZVRlYW1zID0gbGVhZ3VlVGVhbXMuZGF0YTtcblxuICAvLyBwYWdpbmF0aW9uXG4gICRzY29wZS5jdXJyZW50VGVhbVBhZ2UgPSAxO1xuICAkc2NvcGUudGVhbXNQZXJQYWdlID0gMTAwO1xuXG4gICRzY29wZS50ZWFtT3B0aW9ucyA9IHsgYWN0aXZlOiB0cnVlLCBpbmFjdGl2ZTogZmFsc2UgfTtcblxuICAkc2NvcGUudGVhbVF1ZXJ5ID0gJyc7XG5cbiAgJHNjb3BlLmxlYWd1ZURyb3Bkb3duID0ge1xuICAgIGlzb3BlbjogZmFsc2VcbiAgfTtcblxuICAkc2NvcGUuc2VsZWN0ZWRXZWVrSWQgPSBwYXJzZUludCgkc3RhdGVQYXJhbXMud2Vlayk7XG5cbiAgJHNjb3BlLnRvZ2dsZURyb3Bkb3duID0gZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICRzY29wZS5sZWFndWVEcm9wZG93bi5pc29wZW4gPSAhJHNjb3BlLmxlYWd1ZURyb3Bkb3duLmlzb3BlbjtcbiAgfTtcblxuICAkc2NvcGUuY2hhbmdlV2VlayA9IGZ1bmN0aW9uKHdlZWtJZCkge1xuICAgIGlmICh3ZWVrSWQpIHtcbiAgICAgICRsb2NhdGlvbi5zZWFyY2goJ3dlZWsnLCB3ZWVrSWQpOyAvLyBhZGQgLyByZXBsYWNlIHRoZSB3ZWVrIHF1ZXJ5IHBhcmFtXG4gICAgfSBlbHNlIHtcbiAgICAgICRsb2NhdGlvbi5zZWFyY2goJ3dlZWsnLCBudWxsKTsgLy8gcmVtb3ZlIHRoZSB3ZWVrIHF1ZXJ5IHBhcmFtXG4gICAgfVxuICAgICRsb2NhdGlvbi5wYXRoKCRsb2NhdGlvbi5wYXRoKCkpO1xuICB9O1xuXG4gICRzY29wZS5zZWFyY2ggPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgaWYgKGl0ZW0ubmFtZS5pbmRleE9mKCRzY29wZS50ZWFtUXVlcnkudG9Mb3dlckNhc2UoKSkgIT0gLTEgfHwgaXRlbS5jb2FjaF9uYW1lcy5qb2luKCcsICcpLmluZGV4T2YoJHNjb3BlLnRlYW1RdWVyeS50b0xvd2VyQ2FzZSgpKSAhPSAtMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAkc2NvcGUuc3RhcnRzID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgdmFyIHN0YXJ0c0xhYmVsID0gKGxlYWd1ZS5zdGFydGVkKSA/ICdTdGFydGVkICcgOiAnU3RhcnRzICc7XG4gICAgcmV0dXJuIHN0YXJ0c0xhYmVsICsgbGVhZ3VlLnN0YXJ0X3dlZWtfZGlzcGxheTtcbiAgfTtcblxuICAkc2NvcGUuaXNDb21taXNoID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgcmV0dXJuIGxlYWd1ZS5jb21taXNoX2lkcy5pbmRleE9mKHVzZXJNb2RlbC51c2VyLmlkKSA+IC0xO1xuICB9O1xuXG4gICRzY29wZS5pc0FkbWluID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHVzZXJNb2RlbC51c2VyLmFkbWluO1xuICB9O1xuXG4gICRzY29wZS5oYXNUZWFtSW5MZWFndWUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZm91bmQgPSBmYWxzZTtcbiAgICBfLmVhY2goJHNjb3BlLmxlYWd1ZVRlYW1zLCBmdW5jdGlvbih0ZWFtKSB7XG4gICAgICBpZiAodGVhbS5jb2FjaF9pZHMuaW5kZXhPZih1c2VyTW9kZWwudXNlci5pZCkgPiAtMSkge1xuICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZvdW5kO1xuICB9O1xuXG4gICRzY29wZS5oYXNEZWFjdGl2YXRlZFRlYW1zID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGZvdW5kRGVhY3RpdmF0ZWQgPSBmYWxzZTtcbiAgICBfLmVhY2goJHNjb3BlLmxlYWd1ZVRlYW1zLCBmdW5jdGlvbih0ZWFtKSB7XG4gICAgICBpZiAodGVhbS5hY3RpdmUgPT0gZmFsc2UpIHtcbiAgICAgICAgZm91bmREZWFjdGl2YXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZvdW5kRGVhY3RpdmF0ZWQ7XG4gIH07XG5cbiAgJHNjb3BlLmlzQ29hY2ggPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgcmV0dXJuIHRlYW0uY29hY2hfaWRzLmluZGV4T2YodXNlck1vZGVsLnVzZXIuaWQpID4gLTE7XG4gIH07XG5cbiAgJHNjb3BlLmNvYWNoTmFtZSA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICByZXR1cm4gdGVhbS5jb2FjaF9uYW1lcy5qb2luKCcsICcpO1xuICB9O1xuXG4gICRzY29wZS5oYXNOb1BpY2sgPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgcmV0dXJuIHRlYW0ubGFzdF9waWNrLm5hbWUuaW5kZXhPZignTm8gUGljaycpID4gLTE7XG4gIH07XG5cbiAgJHNjb3BlLmVkaXRMZWFndWUgPSBmdW5jdGlvbihsZWFndWUpIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2VkaXQvbGVhZ3VlLmVkaXQudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0VkaXRMZWFndWVDb250cm9sbGVyJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgd2Vla3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB3ZWVrU2VydmljZS5nZXRBdmFpbGFibGVXZWVrcyhsZWFndWUuc2Vhc29uX2lkKTtcbiAgICAgICAgfSxcbiAgICAgICAgbGVhZ3VlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gbGVhZ3VlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9KTtcblxuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgICBsZWFndWVTZXJ2aWNlLnVwZGF0ZUxlYWd1ZShsZWFndWUpO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ0VkaXQgbGVhZ3VlIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdFZGl0IGxlYWd1ZSBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcblxuICB9O1xuXG4gICRzY29wZS5vcGVuTGVhZ3VlID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgbGVhZ3VlU2VydmljZS5vcGVuTGVhZ3VlKGxlYWd1ZSlcbiAgfTtcblxuICAkc2NvcGUuY2xvc2VMZWFndWUgPSBmdW5jdGlvbihsZWFndWUpIHtcbiAgICBsZWFndWVTZXJ2aWNlLmNsb3NlTGVhZ3VlKGxlYWd1ZSlcbiAgfTtcblxuICAkc2NvcGUuc2hvd1RlYW0gPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgJGxvY2F0aW9uLnBhdGgoJGxvY2F0aW9uLnBhdGgoKSArICcvdGVhbS8nICsgdGVhbS5pZCk7XG4gIH07XG5cbiAgJHNjb3BlLmNvbnRhY3RDb21taXNoID0gZnVuY3Rpb24obGVhZ3VlKSB7XG5cbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9jb250YWN0L2xlYWd1ZS5jb250YWN0LnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdMZWFndWVDb250YWN0Q29udHJvbGxlcicsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIGxlYWd1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGxlYWd1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihwYXJhbXMpIHtcbiAgICAgIGxlYWd1ZVNlcnZpY2Uuc2VuZENvbW1pc2hNZXNzYWdlKHBhcmFtcy5sZWFndWUsIHBhcmFtcy5tZXNzYWdlKVxuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ0NvbnRhY3QgbGVhZ3VlIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdDb250YWN0IGNvbW1pc2ggY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAkc2NvcGUucmVwb3J0QWJ1c2UgPSBmdW5jdGlvbigpIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3B1YmxpYy9hYnVzZS9hYnVzZS50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnQWJ1c2VDb250cm9sbGVyJ1xuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICB1c2VyU2VydmljZS5jb250YWN0VXMobWVzc2FnZSk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdDb250YWN0IHVzIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgICAgJGxvZy5kZWJ1ZygnY29udGFjdCB1cyBkaXNtaXNzZWQuLi4nKTtcbiAgICB9KTtcblxuICB9O1xuXG4gICRzY29wZS51cGRhdGVNZXNzYWdlID0gZnVuY3Rpb24obGVhZ3VlKSB7XG5cbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9tZXNzYWdlL2xlYWd1ZS5tZXNzYWdlLnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdMZWFndWVNZXNzYWdlQ29udHJvbGxlcicsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIGxlYWd1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGxlYWd1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihwYXJhbXMpIHtcbiAgICAgIGxlYWd1ZVNlcnZpY2UudXBkYXRlTGVhZ3VlTWVzc2FnZShwYXJhbXMubGVhZ3VlLCBwYXJhbXMuc2VuZEFsaXZlLCBwYXJhbXMuc2VuZEFsbClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgICRzY29wZS5sZWFndWVEYXRhLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB9KTtcblxuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ0xlYWd1ZSBtZXNzYWdlIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdVcGRhdGUgbGVhZ3VlIG1lc3NhZ2UgY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAkc2NvcGUuam9pbkxlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuXG4gICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvam9pbi9sZWFndWUuam9pbi50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnTGVhZ3VlSm9pbkNvbnRyb2xsZXInLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICBsZWFndWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBsZWFndWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24odGVhbSkge1xuICAgICAgdGVhbVNlcnZpY2UuY3JlYXRlVGVhbSh0ZWFtKTtcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAkbG9nLmRlYnVnKCdKb2luIGxlYWd1ZSBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnSm9pbiBsZWFndWUgY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAkc2NvcGUucmVxdWVzdEludml0ZSA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuXG4gICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlL3JlcXVlc3QvbGVhZ3VlLmludml0ZS5yZXF1ZXN0LnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdMZWFndWVJbnZpdGVSZXF1ZXN0Q29udHJvbGxlcicsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIGxlYWd1ZUlkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gbGVhZ3VlLmlkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uIChpbnZpdGF0aW9uKSB7XG4gICAgICBsZWFndWVTZXJ2aWNlLnJlcXVlc3RJbnZpdGUoaW52aXRhdGlvbik7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnUmVxdWVzdCBpbnZpdGUgbW9kYWwgZGlzbWlzc2VkLi4uJyk7XG4gICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ1JlcXVlc3QgaW52aXRlIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgIH0pO1xuXG4gIH07XG5cbiAgJHNjb3BlLmludml0ZSA9IGZ1bmN0aW9uKGxlYWd1ZUlkLCBpc0NvbW1pc2gsIHN0YXJ0V2Vla0NvbXBsZXRlKSB7XG5cbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9pbnZpdGUvbGVhZ3VlLmludml0ZS50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnTGVhZ3VlSW52aXRlQ29udHJvbGxlcicsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIGxlYWd1ZUlkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gbGVhZ3VlSWQ7XG4gICAgICAgIH0sXG4gICAgICAgIGlzQ29tbWlzaDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGlzQ29tbWlzaDtcbiAgICAgICAgfSxcbiAgICAgICAgc3RhcnRXZWVrQ29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBzdGFydFdlZWtDb21wbGV0ZTtcbiAgICAgICAgfSxcbiAgICAgICAgaW52aXRhdGlvbnM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChpc0NvbW1pc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBsZWFndWVTZXJ2aWNlLmdldEludml0ZXMobGVhZ3VlSWQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4geyBkYXRhOiBbXSB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihpbnZpdGF0aW9uKSB7XG4gICAgICBsZWFndWVTZXJ2aWNlLmNyZWF0ZUludml0ZShpbnZpdGF0aW9uKTtcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAkbG9nLmRlYnVnKCdJbnZpdGUgY29hY2ggbW9kYWwgZGlzbWlzc2VkLi4uJyk7XG4gICAgfSk7XG4gIH07XG5cbiAgJHNjb3BlLnNob3dEZWFjdGl2YXRlZFRlYW1zID0gZnVuY3Rpb24oc2hvdykge1xuICAgICRzY29wZS50ZWFtT3B0aW9ucy5pbmFjdGl2ZSA9IHNob3c7XG4gICAgaWYgKHNob3cpIHtcbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ2luZm8nLCBjb250ZW50OiAnU2hvd2luZyBkZWFjdGl2YXRlZCB0ZWFtcyAoaWYgYW55KScgfSwgZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICdpbmZvJywgY29udGVudDogJ0hpZGluZyBkZWFjdGl2YXRlZCB0ZWFtcyAoaWYgYW55KScgfSwgZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICAkc2NvcGUucmVzZXRTZWFyY2ggPSBmdW5jdGlvbigpIHtcbiAgICAkc2NvcGUudGVhbVF1ZXJ5ID0gJyc7XG4gICAgJHNjb3BlLmN1cnJlbnRUZWFtUGFnZSA9IDE7XG4gIH07XG5cbiAgJHNjb3BlLiRvbihcIiRkZXN0cm95XCIsIGZ1bmN0aW9uKCkge1xuICAgIC8vIGlmIG5hdmlnYXRpbmcgYXdheSBmcm9tIGxlYWd1ZSBvciB0ZWFtIHZpZXcgcGFnZSwgcmVtb3ZlIHRoZSB3ZWVrIHF1ZXJ5IHBhcmFtXG4gICAgaWYgKCRzdGF0ZS5jdXJyZW50Lm5hbWUgIT0gJ3ByaXZhdGUubGVhZ3VlLnZpZXcnICYmICRzdGF0ZS5jdXJyZW50Lm5hbWUgIT0gJ3ByaXZhdGUudGVhbS52aWV3Jykge1xuICAgICAgJGxvY2F0aW9uLnNlYXJjaCgnd2VlaycsIG51bGwpO1xuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcInZpZXcgbGVhZ3VlIGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcblxufTtcblxuVmlld0xlYWd1ZUNvbnRyb2xsZXIuJGluamVjdCA9IFsnbGVhZ3VlJywnbGVhZ3VlV2Vla3MnLCAnbGVhZ3VlVGVhbXMnLCAnJHNjb3BlJywgJyRsb2cnLCAnJG1vZGFsJywgJyRsb2NhdGlvbicsICckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJ3VzZXJNb2RlbCcsICdtZXNzYWdlTW9kZWwnLCAndXNlclNlcnZpY2UnLCAnd2Vla1NlcnZpY2UnLCAndGVhbVNlcnZpY2UnLCAnbGVhZ3VlU2VydmljZSddO1xubW9kdWxlLmV4cG9ydHMgPSBWaWV3TGVhZ3VlQ29udHJvbGxlcjtcbiIsInZhciBFZGl0TGVhZ3VlQ29udHJvbGxlciA9IGZ1bmN0aW9uKHdlZWtzLCBsZWFndWUsICRzY29wZSwgJGxvZywgJGxvY2F0aW9uLCAkbW9kYWxJbnN0YW5jZSwgd2Vla1NlcnZpY2UsIHNlYXNvbk1vZGVsKSB7XG5cbiAgICAkc2NvcGUud2Vla3MgPSB3ZWVrcy5kYXRhO1xuXG4gICAgJHNjb3BlLnNlYXNvbnMgPSBhbmd1bGFyLmNvcHkoc2Vhc29uTW9kZWwuY3VycmVudFNlYXNvbnMpO1xuXG4gICAgJHNjb3BlLmxlYWd1ZURhdGEgPSBhbmd1bGFyLmNvcHkobGVhZ3VlKTtcblxuICAgICRzY29wZS5zaG93TGVhZ3VlID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgbGVhZ3VlLnNlYXNvbl9pZCArICcvbGVhZ3VlLycgKyBsZWFndWUuaWQpO1xuICAgIH07XG5cbiAgICAkc2NvcGUudXBkYXRlTGVhZ3VlID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZShsZWFndWUpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuZ2V0U2Vhc29uV2Vla3MgPSBmdW5jdGlvbigpIHtcbiAgICAgIHdlZWtTZXJ2aWNlLmdldEF2YWlsYWJsZVdlZWtzKCRzY29wZS5sZWFndWVEYXRhLnNlYXNvbl9pZClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAkc2NvcGUud2Vla3MgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICRzY29wZS5sZWFndWVEYXRhLnN0YXJ0X3dlZWtfaWQgPSAkc2NvcGUud2Vla3NbMF0uaWQ7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gICAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmhhc0Vycm9yID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICAgIH07XG5cbiAgICAkc2NvcGUuaGFzUHJvcGVydHlFcnJvciA9IGZ1bmN0aW9uKGlucHV0LCBwcm9wZXJ0eSkge1xuICAgICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJlZGl0IGxlYWd1ZSBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5FZGl0TGVhZ3VlQ29udHJvbGxlci4kaW5qZWN0ID0gWyd3ZWVrcycsICdsZWFndWUnLCAnJHNjb3BlJywgJyRsb2cnLCAnJGxvY2F0aW9uJywgJyRtb2RhbEluc3RhbmNlJywgJ3dlZWtTZXJ2aWNlJywgJ3NlYXNvbk1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IEVkaXRMZWFndWVDb250cm9sbGVyO1xuIiwidmFyIExlYWd1ZUNvbnRhY3RDb250cm9sbGVyID0gZnVuY3Rpb24obGVhZ3VlLCAkbW9kYWxJbnN0YW5jZSwgJHNjb3BlLCAkbG9nKSB7XG5cbiAgJHNjb3BlLmxlYWd1ZURhdGEgPSBsZWFndWU7XG5cbiAgJHNjb3BlLmNvbW1pc2hNZXNzYWdlID0gJyc7XG5cbiAgJHNjb3BlLmNvbnRhY3RDb21taXNoID0gZnVuY3Rpb24obGVhZ3VlLCBtZXNzYWdlKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuY2xvc2UoeyBsZWFndWU6IGxlYWd1ZSwgbWVzc2FnZTogbWVzc2FnZSB9KTtcbiAgfTtcblxuICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2FuY2VsJyk7XG4gIH07XG5cbiAgJHNjb3BlLmhhc0Vycm9yID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgfTtcblxuICAkc2NvcGUuaGFzUHJvcGVydHlFcnJvciA9IGZ1bmN0aW9uKGlucHV0LCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRlcnJvcltwcm9wZXJ0eV07XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcImxlYWd1ZSBjb250YWN0IGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cbkxlYWd1ZUNvbnRhY3RDb250cm9sbGVyLiRpbmplY3QgPSBbJ2xlYWd1ZScsICckbW9kYWxJbnN0YW5jZScsICckc2NvcGUnLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBMZWFndWVDb250YWN0Q29udHJvbGxlcjtcbiIsInZhciBMZWFndWVNZXNzYWdlQ29udHJvbGxlciA9IGZ1bmN0aW9uKGxlYWd1ZSwgJG1vZGFsSW5zdGFuY2UsICRzY29wZSwgJGxvZykge1xuXG4gICRzY29wZS5sZWFndWVEYXRhID0gYW5ndWxhci5jb3B5KGxlYWd1ZSk7XG5cbiAgJHNjb3BlLm1lc3NhZ2VPcHRpb25zID0ge1xuICAgIHNlbmRBbGl2ZTogZmFsc2UsXG4gICAgc2VuZEFsbDogZmFsc2VcbiAgfTtcblxuICAkc2NvcGUudXBkYXRlTWVzc2FnZSA9IGZ1bmN0aW9uKGxlYWd1ZSwgc2VuZEFsaXZlLCBzZW5kQWxsKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuY2xvc2UoeyBsZWFndWU6IGxlYWd1ZSwgc2VuZEFsaXZlOiBzZW5kQWxpdmUsIHNlbmRBbGw6IHNlbmRBbGwgfSk7XG4gIH07XG5cbiAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICB9O1xuXG4gICRzY29wZS5oYXNFcnJvciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gIH07XG5cbiAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kZXJyb3JbcHJvcGVydHldO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJsZWFndWUgbWVzc2FnZSBjb250cm9sbGVyXCIpO1xuICB9O1xuICBpbml0KCk7XG59O1xuXG5MZWFndWVNZXNzYWdlQ29udHJvbGxlci4kaW5qZWN0ID0gWydsZWFndWUnLCAnJG1vZGFsSW5zdGFuY2UnLCAnJHNjb3BlJywgJyRsb2cnXTtcbm1vZHVsZS5leHBvcnRzID0gTGVhZ3VlTWVzc2FnZUNvbnRyb2xsZXI7XG4iLCJ2YXIgTGVhZ3VlSm9pbkNvbnRyb2xsZXIgPSBmdW5jdGlvbihsZWFndWUsICRtb2RhbEluc3RhbmNlLCAkc2NvcGUsICRsb2cpIHtcblxuICAkc2NvcGUubGVhZ3VlRGF0YSA9IGxlYWd1ZTtcblxuICAkc2NvcGUubmV3VGVhbURhdGEgPSB7XG4gICAgbmFtZTogJycsXG4gICAgc2Vhc29uX2lkOiBsZWFndWUuc2Vhc29uX2lkLFxuICAgIGxlYWd1ZV9pZDogbGVhZ3VlLmlkXG4gIH07XG5cbiAgJHNjb3BlLmpvaW5MZWFndWUgPSBmdW5jdGlvbiAobmV3VGVhbSkge1xuICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKG5ld1RlYW0pO1xuICB9O1xuXG4gICRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2FuY2VsJyk7XG4gIH07XG5cbiAgJHNjb3BlLmhhc0Vycm9yID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgfTtcblxuICAkc2NvcGUuaGFzUHJvcGVydHlFcnJvciA9IGZ1bmN0aW9uKGlucHV0LCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRlcnJvcltwcm9wZXJ0eV07XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcImxlYWd1ZSBqb2luIGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cbkxlYWd1ZUpvaW5Db250cm9sbGVyLiRpbmplY3QgPSBbJ2xlYWd1ZScsICckbW9kYWxJbnN0YW5jZScsICckc2NvcGUnLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBMZWFndWVKb2luQ29udHJvbGxlcjtcbiIsInZhciBMZWFndWVJbnZpdGVDb250cm9sbGVyID0gZnVuY3Rpb24obGVhZ3VlSWQsIGlzQ29tbWlzaCwgc3RhcnRXZWVrQ29tcGxldGUsIGludml0YXRpb25zLCAkbW9kYWwsICRtb2RhbEluc3RhbmNlLCAkc2NvcGUsICRsb2cpIHtcblxuICAkc2NvcGUuaXNDb21taXNoID0gaXNDb21taXNoO1xuXG4gICRzY29wZS5zdGFydFdlZWtDb21wbGV0ZSA9IHN0YXJ0V2Vla0NvbXBsZXRlO1xuXG4gICRzY29wZS5pbnZpdGF0aW9ucyA9IGludml0YXRpb25zLmRhdGE7XG5cbiAgJHNjb3BlLnJlc2V0SW52aXRlID0gZnVuY3Rpb24oKSB7XG4gICAgJHNjb3BlLmludml0YXRpb24gPSB7XG4gICAgICBsZWFndWVfaWQ6IGxlYWd1ZUlkLFxuICAgICAgZW1haWw6IFwiXCIsXG4gICAgICBtZXNzYWdlOiBcIlwiXG4gICAgfVxuICB9O1xuICAkc2NvcGUucmVzZXRJbnZpdGUoKTtcblxuICAkc2NvcGUucG9wdWxhdGVJbnZpdGUgPSBmdW5jdGlvbihpbnZpdGF0aW9uKSB7XG4gICAgJHNjb3BlLmludml0YXRpb24gPSB7XG4gICAgICBsZWFndWVfaWQ6IGludml0YXRpb24ubGVhZ3VlX2lkLFxuICAgICAgZW1haWw6IGludml0YXRpb24uZW1haWwsXG4gICAgICBtZXNzYWdlOiBpbnZpdGF0aW9uLm1lc3NhZ2VcbiAgICB9XG4gIH07XG5cbiAgJHNjb3BlLnNlbmRJbnZpdGUgPSBmdW5jdGlvbihpbnZpdGF0aW9uKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuY2xvc2UoaW52aXRhdGlvbik7XG4gIH07XG5cbiAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICB9O1xuXG4gICRzY29wZS5oYXNFcnJvciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gIH07XG5cbiAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kZXJyb3JbcHJvcGVydHldO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJsZWFndWUgaW52aXRlIGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cbkxlYWd1ZUludml0ZUNvbnRyb2xsZXIuJGluamVjdCA9IFsnbGVhZ3VlSWQnLCAnaXNDb21taXNoJywgJ3N0YXJ0V2Vla0NvbXBsZXRlJywgJ2ludml0YXRpb25zJywgJyRtb2RhbCcsICckbW9kYWxJbnN0YW5jZScsICckc2NvcGUnLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBMZWFndWVJbnZpdGVDb250cm9sbGVyO1xuIiwidmFyIEpvaW5MZWFndWVzQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJGxvZywgJGxvY2F0aW9uLCAkbW9kYWwsICRzdGF0ZVBhcmFtcywgdXNlck1vZGVsLCBtZXNzYWdlTW9kZWwsIHNlYXNvbk1vZGVsLCB3ZWVrU2VydmljZSwgbGVhZ3VlU2VydmljZSkge1xuXG4gICRzY29wZS5zZWxlY3RlZFNlYXNvbklkID0gcGFyc2VJbnQoJHN0YXRlUGFyYW1zLnNlYXNvbklkKTtcblxuICAkc2NvcGUuY3VycmVudFNlYXNvbnMgPSBhbmd1bGFyLmNvcHkoc2Vhc29uTW9kZWwuY3VycmVudFNlYXNvbnMpO1xuXG4gICRzY29wZS5sZWFndWVPcHRpb25zID0geyBjbG9zZWQ6IGZhbHNlIH07XG5cbiAgJHNjb3BlLmxlYWd1ZVF1ZXJ5ID0gJyc7XG5cbiAgJHNjb3BlLnB1YmxpY0xlYWd1ZXMgPSBmdW5jdGlvbihzZWFzb25JZCkge1xuICAgICRsb2NhdGlvbi5wYXRoKCcvc2Vhc29uLycgKyBzZWFzb25JZCArICcvbGVhZ3Vlcy9wdWJsaWMnKTtcbiAgfTtcblxuICAkc2NvcGUucHJpdmF0ZUxlYWd1ZXMgPSBmdW5jdGlvbihzZWFzb25JZCkge1xuICAgICRsb2NhdGlvbi5wYXRoKCcvc2Vhc29uLycgKyBzZWFzb25JZCArICcvbGVhZ3Vlcy9wcml2YXRlJyk7XG4gIH07XG5cbiAgJHNjb3BlLmNoYW5nZVNlYXNvbiA9IGZ1bmN0aW9uKHNlYXNvbklkKSB7XG4gICAgc2Vhc29uTW9kZWwuc2V0U2VsZWN0ZWRTZWFzb25JZChzZWFzb25JZCk7XG4gICAgdmFyIG5ld1BhdGggPSAkbG9jYXRpb24ucGF0aCgpLnJlcGxhY2UoLyhcXC9zZWFzb25cXC8pXFxkKi8sICckMScgKyBzZWFzb25JZCk7XG4gICAgJGxvY2F0aW9uLnBhdGgobmV3UGF0aCk7XG4gIH07XG5cbiAgJHNjb3BlLnNlYXJjaCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICBpZiAoaXRlbS5uYW1lLmluZGV4T2YoJHNjb3BlLmxlYWd1ZVF1ZXJ5LnRvTG93ZXJDYXNlKCkpICE9IC0xIHx8IGl0ZW0uY29tbWlzaF9uYW1lcy5qb2luKCcsICcpLmluZGV4T2YoJHNjb3BlLmxlYWd1ZVF1ZXJ5LnRvTG93ZXJDYXNlKCkpICE9IC0xKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gICRzY29wZS5yZXNldFNlYXJjaCA9IGZ1bmN0aW9uKCkge1xuICAgICRzY29wZS5sZWFndWVRdWVyeSA9ICcnO1xuICB9O1xuXG4gICRzY29wZS5pc0NvbW1pc2ggPSBmdW5jdGlvbihsZWFndWUpIHtcbiAgICByZXR1cm4gbGVhZ3VlLmNvbW1pc2hfaWRzLmluZGV4T2YodXNlck1vZGVsLnVzZXIuaWQpID4gLTE7XG4gIH07XG5cbiAgJHNjb3BlLmNyZWF0ZUxlYWd1ZSA9IGZ1bmN0aW9uKHNlYXNvbklkKSB7XG5cbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9uZXcvbGVhZ3VlLm5ldy50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnTmV3TGVhZ3VlQ29udHJvbGxlcicsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIHNlYXNvbklkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gc2Vhc29uSWQ7XG4gICAgICAgIH0sXG4gICAgICAgIHdlZWtzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gd2Vla1NlcnZpY2UuZ2V0QXZhaWxhYmxlV2Vla3Moc2Vhc29uSWQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9KTtcblxuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgICBsZWFndWVTZXJ2aWNlLmNyZWF0ZUxlYWd1ZShsZWFndWUpO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ0NyZWF0ZSBsZWFndWUgbW9kYWwgZGlzbWlzc2VkLi4uJyk7XG4gICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ0NyZWF0ZSBsZWFndWUgY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwiam9pbiBsZWFndWVzIGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcblxufTtcblxuSm9pbkxlYWd1ZXNDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJywgJyRsb2NhdGlvbicsICckbW9kYWwnLCAnJHN0YXRlUGFyYW1zJywgJ3VzZXJNb2RlbCcsICdtZXNzYWdlTW9kZWwnLCAnc2Vhc29uTW9kZWwnLCAnd2Vla1NlcnZpY2UnLCAnbGVhZ3VlU2VydmljZSddO1xubW9kdWxlLmV4cG9ydHMgPSBKb2luTGVhZ3Vlc0NvbnRyb2xsZXI7XG4iLCJ2YXIgTWFuYWdlZExlYWd1ZXNDb250cm9sbGVyID0gZnVuY3Rpb24obWFuYWdlZExlYWd1ZXMsICRzY29wZSwgJGxvZywgJGxvY2F0aW9uLCAkbW9kYWwsIG1lc3NhZ2VNb2RlbCwgd2Vla1NlcnZpY2UsIGxlYWd1ZVNlcnZpY2UpIHtcblxuICAgICRzY29wZS5tYW5hZ2VkTGVhZ3VlcyA9IG1hbmFnZWRMZWFndWVzLmRhdGE7XG5cbiAgICAkc2NvcGUuY3JlYXRlTGVhZ3VlID0gZnVuY3Rpb24oc2Vhc29uKSB7XG5cbiAgICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbmV3L2xlYWd1ZS5uZXcudHBsLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnTmV3TGVhZ3VlQ29udHJvbGxlcicsXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICBzZWFzb25JZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gc2Vhc29uLmlkO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgd2Vla3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHdlZWtTZXJ2aWNlLmdldEF2YWlsYWJsZVdlZWtzKHNlYXNvbi5pZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH0pO1xuXG4gICAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgICAgICBsZWFndWVTZXJ2aWNlLmNyZWF0ZUxlYWd1ZShsZWFndWUpO1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKCdDcmVhdGUgbGVhZ3VlIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ0NyZWF0ZSBsZWFndWUgY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgICB9KTtcblxuICAgIH07XG5cbiAgICAkc2NvcGUudmlld0xlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgICAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgbGVhZ3VlLnNlYXNvbl9pZCArICcvbGVhZ3VlLycgKyBsZWFndWUuaWQpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuc3RhcnRzID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgICB2YXIgc3RhcnRzTGFiZWwgPSAobGVhZ3VlLnN0YXJ0ZWQpID8gJ1N0YXJ0ZWQgJyA6ICdTdGFydHMgJztcbiAgICAgIHJldHVybiBzdGFydHNMYWJlbCArIGxlYWd1ZS5zdGFydF93ZWVrO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIm1hbmFnZWQgbGVhZ3VlcyBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5NYW5hZ2VkTGVhZ3Vlc0NvbnRyb2xsZXIuJGluamVjdCA9IFsnbWFuYWdlZExlYWd1ZXMnLCAnJHNjb3BlJywgJyRsb2cnLCAnJGxvY2F0aW9uJywgJyRtb2RhbCcsICdtZXNzYWdlTW9kZWwnLCAnd2Vla1NlcnZpY2UnLCAnbGVhZ3VlU2VydmljZSddO1xubW9kdWxlLmV4cG9ydHMgPSBNYW5hZ2VkTGVhZ3Vlc0NvbnRyb2xsZXI7XG5cbiIsInZhciBNeUxlYWd1ZXNDb250cm9sbGVyID0gZnVuY3Rpb24obGVhZ3VlcywgJHNjb3BlLCAkbG9nLCAkbG9jYXRpb24sICRtb2RhbCwgbWVzc2FnZU1vZGVsLCB3ZWVrU2VydmljZSwgbGVhZ3VlU2VydmljZSkge1xuXG4gICRzY29wZS5sZWFndWVzID0gbGVhZ3Vlcy5kYXRhO1xuXG4gICRzY29wZS5jcmVhdGVMZWFndWUgPSBmdW5jdGlvbihzZWFzb24pIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL25ldy9sZWFndWUubmV3LnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdOZXdMZWFndWVDb250cm9sbGVyJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgc2Vhc29uSWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBzZWFzb24uaWQ7XG4gICAgICAgIH0sXG4gICAgICAgIHdlZWtzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gd2Vla1NlcnZpY2UuZ2V0QXZhaWxhYmxlV2Vla3Moc2Vhc29uLmlkKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSk7XG5cbiAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgICAgbGVhZ3VlU2VydmljZS5jcmVhdGVMZWFndWUobGVhZ3VlKTtcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAkbG9nLmRlYnVnKCdDcmVhdGUgbGVhZ3VlIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdDcmVhdGUgbGVhZ3VlIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgIH0pO1xuXG4gIH07XG5cbiAgJHNjb3BlLmpvaW5MZWFndWUgPSBmdW5jdGlvbihzZWFzb24pIHtcbiAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgc2Vhc29uLmlkICsgJy9sZWFndWVzL3B1YmxpYycpO1xuICB9O1xuXG4gICRzY29wZS52aWV3TGVhZ3VlID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgJGxvY2F0aW9uLnBhdGgoJy9zZWFzb24vJyArIGxlYWd1ZS5zZWFzb25faWQgKyAnL2xlYWd1ZS8nICsgbGVhZ3VlLmlkKTtcbiAgfTtcblxuICAkc2NvcGUuc3RhcnRzID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgdmFyIHN0YXJ0c0xhYmVsID0gKGxlYWd1ZS5zdGFydGVkKSA/ICdTdGFydGVkICcgOiAnU3RhcnRzICc7XG4gICAgcmV0dXJuIHN0YXJ0c0xhYmVsICsgbGVhZ3VlLnN0YXJ0X3dlZWs7XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcIm15IGxlYWd1ZXMgY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xuXG59O1xuXG5NeUxlYWd1ZXNDb250cm9sbGVyLiRpbmplY3QgPSBbJ2xlYWd1ZXMnLCAnJHNjb3BlJywgJyRsb2cnLCAnJGxvY2F0aW9uJywgJyRtb2RhbCcsICdtZXNzYWdlTW9kZWwnLCAnd2Vla1NlcnZpY2UnLCAnbGVhZ3VlU2VydmljZSddO1xubW9kdWxlLmV4cG9ydHMgPSBNeUxlYWd1ZXNDb250cm9sbGVyO1xuXG4iLCJ2YXIgVmlld1RlYW1Db250cm9sbGVyID0gZnVuY3Rpb24odGVhbSwgbGVhZ3VlVGVhbXMsIGxlYWd1ZVdlZWtzLCBwaWNrcywgJHNjb3BlLCAkbG9nLCAkbW9kYWwsICRsb2NhdGlvbiwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsIG1lc3NhZ2VNb2RlbCwgdXNlck1vZGVsLCB1c2VyU2VydmljZSwgdGVhbVNlcnZpY2UsIGdhbWVTZXJ2aWNlLCBwaWNrU2VydmljZSkge1xuXG4gIHZhciBhY3RpdmF0ZSA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICB0ZWFtU2VydmljZS5hY3RpdmF0ZVRlYW0odGVhbSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uKGFjdGl2ZSkge1xuICAgICAgICB0ZWFtLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHZhciBkZWFjdGl2YXRlID0gZnVuY3Rpb24odGVhbSkge1xuICAgIHRlYW1TZXJ2aWNlLmRlYWN0aXZhdGVUZWFtKHRlYW0pXG4gICAgICAudGhlbihmdW5jdGlvbihhY3RpdmUpIHtcbiAgICAgICAgdGVhbS5hY3RpdmUgPSBhY3RpdmU7XG4gICAgICB9KTtcbiAgfTtcblxuICAkc2NvcGUudGVhbURhdGEgPSB0ZWFtLmRhdGE7XG4gICRzY29wZS5sZWFndWVUZWFtcyA9IGxlYWd1ZVRlYW1zLmRhdGE7XG4gICRzY29wZS5sZWFndWVXZWVrcyA9IGxlYWd1ZVdlZWtzLmRhdGE7XG5cbiAgJHNjb3BlLnBpY2tzID0gcGlja3MuZGF0YTtcblxuICAkc2NvcGUudGVhbURyb3Bkb3duID0ge1xuICAgIGlzb3BlbjogZmFsc2VcbiAgfTtcblxuICAkc2NvcGUuc2VsZWN0ZWRXZWVrSWQgPSBwYXJzZUludCgkc3RhdGVQYXJhbXMud2Vlayk7XG5cbiAgJHNjb3BlLmNvcnJlY3RQaWNrQ291bnQgPSBmdW5jdGlvbihwaWNrcykge1xuICAgIHZhciBjb3JyZWN0UGlja3MgPSBfLmZpbHRlcihwaWNrcywgZnVuY3Rpb24ocGljaykge1xuICAgICAgcmV0dXJuIHBpY2suY29ycmVjdDtcbiAgICB9KTtcbiAgICByZXR1cm4gY29ycmVjdFBpY2tzLmxlbmd0aDtcbiAgfTtcblxuICAkc2NvcGUudG9nZ2xlRHJvcGRvd24gPSBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgJHNjb3BlLnRlYW1Ecm9wZG93bi5pc29wZW4gPSAhJHNjb3BlLnRlYW1Ecm9wZG93bi5pc29wZW47XG4gIH07XG5cbiAgJHNjb3BlLmNoYW5nZVdlZWsgPSBmdW5jdGlvbih3ZWVrSWQpIHtcbiAgICBpZiAod2Vla0lkKSB7XG4gICAgICAkbG9jYXRpb24uc2VhcmNoKCd3ZWVrJywgd2Vla0lkKTsgLy8gYWRkIC8gcmVwbGFjZSB0aGUgd2VlayBxdWVyeSBwYXJhbVxuICAgIH0gZWxzZSB7XG4gICAgICAkbG9jYXRpb24uc2VhcmNoKCd3ZWVrJywgbnVsbCk7IC8vIHJlbW92ZSB0aGUgd2VlayBxdWVyeSBwYXJhbVxuICAgIH1cbiAgfTtcblxuICAkc2NvcGUuY29udGFjdENvbW1pc2ggPSBmdW5jdGlvbih0ZWFtKSB7XG5cbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9jb250YWN0L2xlYWd1ZS5jb250YWN0LnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdMZWFndWVDb250YWN0Q29udHJvbGxlcicsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIGxlYWd1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRlYW0ubGVhZ3VlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKHBhcmFtcykge1xuICAgICAgdGVhbVNlcnZpY2Uuc2VuZENvbW1pc2hNZXNzYWdlKHRlYW0sIHBhcmFtcy5tZXNzYWdlKVxuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ0NvbnRhY3QgbGVhZ3VlIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdDb250YWN0IGNvbW1pc2ggY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAkc2NvcGUudXBkYXRlTWVzc2FnZSA9IGZ1bmN0aW9uKHRlYW0pIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvdGVhbS9tZXNzYWdlL3RlYW0ubWVzc2FnZS50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnVGVhbU1lc3NhZ2VDb250cm9sbGVyJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgdGVhbTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRlYW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgICB0ZWFtU2VydmljZS51cGRhdGVUZWFtTWVzc2FnZShwYXJhbXMudGVhbSwgcGFyYW1zLnNlbmRFbWFpbClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgICRzY29wZS50ZWFtRGF0YS5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgfSk7XG5cbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAkbG9nLmRlYnVnKCdUZWFtIG1lc3NhZ2UgbW9kYWwgZGlzbWlzc2VkLi4uJyk7XG4gICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ1VwZGF0ZSB0ZWFtIG1lc3NhZ2UgY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAkc2NvcGUuY29uZmlybUFjdGl2YXRlID0gZnVuY3Rpb24odGVhbSkge1xuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9jb25maXJtL2NvbmZpcm0udHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0NvbmZpcm1Db250cm9sbGVyJyxcbiAgICAgIHNpemU6ICdzbScsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIG1lc3NhZ2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiAnUmVhY3RpdmF0ZSAnICsgdGVhbS5uYW1lICsgJz8nO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbigpIHtcbiAgICAgIGFjdGl2YXRlKHRlYW0pO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ0FjdGl2YXRlIHRlYW0gY2FuY2VsbGVkLi4uJyk7XG4gICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ1RlYW0gcmVhY3RpdmF0aW9uIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgIH0pO1xuICB9O1xuXG4gICRzY29wZS5jb25maXJtRGVhY3RpdmF0ZSA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvY29uZmlybS9jb25maXJtLnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdDb25maXJtQ29udHJvbGxlcicsXG4gICAgICBzaXplOiAnc20nLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICBtZXNzYWdlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gJ0RlYWN0aXZhdGUgJyArIHRlYW0ubmFtZSArICc/JztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICBkZWFjdGl2YXRlKHRlYW0pO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ0RlYWN0aXZhdGUgdGVhbSBjYW5jZWxsZWQuLi4nKTtcbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnVGVhbSBkZWFjdGl2YXRpb24gY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgJHNjb3BlLnBhaWQgPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgdGVhbVNlcnZpY2UucGFpZFRlYW0odGVhbSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHBhaWQpIHtcbiAgICAgICAgdGVhbS5wYWlkID0gcGFpZDtcbiAgICAgIH0pO1xuICB9O1xuXG4gICRzY29wZS51bnBhaWQgPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgdGVhbVNlcnZpY2UudW5wYWlkVGVhbSh0ZWFtKVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocGFpZCkge1xuICAgICAgICB0ZWFtLnBhaWQgPSBwYWlkO1xuICAgICAgfSk7XG4gIH07XG5cbiAgJHNjb3BlLmhhc05vUGljayA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICByZXR1cm4gdGVhbS5sYXN0X3BpY2submFtZS5pbmRleE9mKCdObyBQaWNrJykgPiAtMTtcbiAgfTtcblxuICAkc2NvcGUuaXNDb21taXNoID0gZnVuY3Rpb24odGVhbSkge1xuICAgIHJldHVybiB0ZWFtLmNvbW1pc2hfaWRzLmluZGV4T2YodXNlck1vZGVsLnVzZXIuaWQpID4gLTE7XG4gIH07XG5cbiAgJHNjb3BlLmlzQ29hY2ggPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgcmV0dXJuIHRlYW0uY29hY2hfaWRzLmluZGV4T2YodXNlck1vZGVsLnVzZXIuaWQpID4gLTE7XG4gIH07XG5cbiAgJHNjb3BlLmlzQWRtaW4gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdXNlck1vZGVsLnVzZXIuYWRtaW47XG4gIH07XG5cbiAgJHNjb3BlLnNob3dUZWFtID0gZnVuY3Rpb24odGVhbSkge1xuICAgIHZhciB0ZWFtUGF0aCA9ICRsb2NhdGlvbi5wYXRoKCkucmVwbGFjZSgvW15cXC9dKiQvLCB0ZWFtLmlkKTtcbiAgICAkbG9jYXRpb24ucGF0aCh0ZWFtUGF0aCk7XG4gIH07XG5cbiAgJHNjb3BlLnNob3dMZWFndWUgPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgJGxvY2F0aW9uLnBhdGgoJy9zZWFzb24vJyArIHRlYW0ubGVhZ3VlLnNlYXNvbl9pZCArICcvbGVhZ3VlLycgKyB0ZWFtLmxlYWd1ZS5pZCk7XG4gIH07XG5cbiAgJHNjb3BlLmVkaXRUZWFtID0gZnVuY3Rpb24odGVhbSkge1xuXG4gICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS90ZWFtL2VkaXQvdGVhbS5lZGl0LnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdFZGl0VGVhbUNvbnRyb2xsZXInLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICB0ZWFtOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdGVhbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbih0ZWFtKSB7XG4gICAgICB0ZWFtU2VydmljZS51cGRhdGVUZWFtKHRlYW0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICRzY29wZS50ZWFtRGF0YSA9IHRlYW07XG4gICAgICAgIH0pO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ0VkaXQgdGVhbSBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnRWRpdCB0ZWFtIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgIH0pO1xuXG4gIH07XG5cbiAgJHNjb3BlLm1ha2VQaWNrID0gZnVuY3Rpb24odGVhbSwgcGljaykge1xuXG4gICAgaWYgKCEkc2NvcGUuaXNDb2FjaCh0ZWFtKSB8fCAocGljayAmJiBwaWNrLmxvY2tlZCkpIHJldHVybjtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvcGljay9tYWtlL3BpY2subWFrZS50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnUGlja01ha2VDb250cm9sbGVyJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgcGlja3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiAkc2NvcGUucGlja3M7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbnRHYW1lczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGdhbWVTZXJ2aWNlLmdldEN1cnJlbnRHYW1lcyh0ZWFtLmxlYWd1ZS5pZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24ocGljaykge1xuICAgICAgcGljay50ZWFtX2lkID0gJHNjb3BlLnRlYW1EYXRhLmlkO1xuICAgICAgcGlja1NlcnZpY2UuY3JlYXRlUGljayhwaWNrKTtcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAkbG9nLmRlYnVnKCdNYWtlIHBpY2sgbW9kYWwgZGlzbWlzc2VkLi4uJyk7XG4gICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ1BpY2sgbG9zZXIgY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAkc2NvcGUuJG9uKFwiJGRlc3Ryb3lcIiwgZnVuY3Rpb24oKSB7XG4gICAgLy8gaWYgbmF2aWdhdGluZyBhd2F5IGZyb20gbGVhZ3VlIG9yIHRlYW0gdmlldyBwYWdlLCByZW1vdmUgdGhlIHdlZWsgcXVlcnkgcGFyYW1cbiAgICBpZiAoJHN0YXRlLmN1cnJlbnQubmFtZSAhPSAncHJpdmF0ZS5sZWFndWUudmlldycgJiYgJHN0YXRlLmN1cnJlbnQubmFtZSAhPSAncHJpdmF0ZS50ZWFtLnZpZXcnKSB7XG4gICAgICAkbG9jYXRpb24uc2VhcmNoKCd3ZWVrJywgbnVsbCk7XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwidmlldyB0ZWFtIGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcblxufTtcblxuVmlld1RlYW1Db250cm9sbGVyLiRpbmplY3QgPSBbJ3RlYW0nLCAnbGVhZ3VlVGVhbXMnLCAnbGVhZ3VlV2Vla3MnLCAncGlja3MnLCAnJHNjb3BlJywgJyRsb2cnLCAnJG1vZGFsJywgJyRsb2NhdGlvbicsICckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJ21lc3NhZ2VNb2RlbCcsICd1c2VyTW9kZWwnLCAndXNlclNlcnZpY2UnLCAndGVhbVNlcnZpY2UnLCAnZ2FtZVNlcnZpY2UnLCAncGlja1NlcnZpY2UnXTtcbm1vZHVsZS5leHBvcnRzID0gVmlld1RlYW1Db250cm9sbGVyO1xuIiwidmFyIEVkaXRUZWFtQ29udHJvbGxlciA9IGZ1bmN0aW9uKHRlYW0sICRzY29wZSwgJGxvZywgJG1vZGFsSW5zdGFuY2UpIHtcblxuICAgICRzY29wZS50ZWFtRGF0YSA9IGFuZ3VsYXIuY29weSh0ZWFtKTtcblxuICAgICRzY29wZS5lZGl0VGVhbSA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAgIHRlYW0ubmFtZSA9IHRlYW0ubmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgJG1vZGFsSW5zdGFuY2UuY2xvc2UodGVhbSk7XG4gICAgfTtcblxuICAgICRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmhhc0Vycm9yID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICAgIH07XG5cbiAgICAkc2NvcGUuaGFzUHJvcGVydHlFcnJvciA9IGZ1bmN0aW9uKGlucHV0LCBwcm9wZXJ0eSkge1xuICAgICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJlZGl0IHRlYW0gY29udHJvbGxlclwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcblxufTtcblxuRWRpdFRlYW1Db250cm9sbGVyLiRpbmplY3QgPSBbJ3RlYW0nLCAnJHNjb3BlJywgJyRsb2cnLCAnJG1vZGFsSW5zdGFuY2UnXTtcbm1vZHVsZS5leHBvcnRzID0gRWRpdFRlYW1Db250cm9sbGVyO1xuIiwidmFyIFRlYW1NZXNzYWdlQ29udHJvbGxlciA9IGZ1bmN0aW9uKHRlYW0sICRtb2RhbEluc3RhbmNlLCAkc2NvcGUsICRsb2cpIHtcblxuICAkc2NvcGUudGVhbURhdGEgPSBhbmd1bGFyLmNvcHkodGVhbSk7XG5cbiAgJHNjb3BlLm1lc3NhZ2VPcHRpb25zID0geyBzZW5kRW1haWw6IGZhbHNlIH07XG5cbiAgJHNjb3BlLnVwZGF0ZU1lc3NhZ2UgPSBmdW5jdGlvbih0ZWFtLCBzZW5kRW1haWwpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZSh7IHRlYW06IHRlYW0sIHNlbmRFbWFpbDogc2VuZEVtYWlsfSk7XG4gIH07XG5cbiAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICB9O1xuXG4gICRzY29wZS5oYXNFcnJvciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gIH07XG5cbiAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kZXJyb3JbcHJvcGVydHldO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJ0ZWFtIG1lc3NhZ2UgY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuVGVhbU1lc3NhZ2VDb250cm9sbGVyLiRpbmplY3QgPSBbJ3RlYW0nLCAnJG1vZGFsSW5zdGFuY2UnLCAnJHNjb3BlJywgJyRsb2cnXTtcbm1vZHVsZS5leHBvcnRzID0gVGVhbU1lc3NhZ2VDb250cm9sbGVyO1xuIiwidmFyIEFsaXZlVGVhbXNDb250cm9sbGVyID0gZnVuY3Rpb24oJHNjb3BlLCAkbG9nLCBhbGl2ZVRlYW1zKSB7XG5cbiAgICAkc2NvcGUuYWxpdmVUZWFtcyA9IGFsaXZlVGVhbXMuZGF0YTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiYWxpdmUgdGVhbXMgY29udHJvbGxlclwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcblxufTtcblxuQWxpdmVUZWFtc0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnLCAnYWxpdmVUZWFtcyddO1xubW9kdWxlLmV4cG9ydHMgPSBBbGl2ZVRlYW1zQ29udHJvbGxlcjtcbiIsInZhciBEZWFkVGVhbXNDb250cm9sbGVyID0gZnVuY3Rpb24oJHNjb3BlLCAkbG9nLCBkZWFkVGVhbXMpIHtcblxuICAgICRzY29wZS5kZWFkVGVhbXMgPSBkZWFkVGVhbXMuZGF0YTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiZGVhZCB0ZWFtcyBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5EZWFkVGVhbXNDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJywgJ2RlYWRUZWFtcyddO1xubW9kdWxlLmV4cG9ydHMgPSBEZWFkVGVhbXNDb250cm9sbGVyO1xuIiwidmFyIFBsYXlMZWFndWVzQ29udHJvbGxlciA9IGZ1bmN0aW9uKGxlYWd1ZXMsICRzY29wZSwgJGxvZywgJGxvY2F0aW9uLCAkbW9kYWwsIHVzZXJNb2RlbCwgbWVzc2FnZU1vZGVsLCB3ZWVrU2VydmljZSwgbGVhZ3VlU2VydmljZSkge1xuXG4gICRzY29wZS5sZWFndWVzID0gbGVhZ3Vlcy5kYXRhO1xuXG4gIC8vIHBhZ2luYXRpb25cbiAgJHNjb3BlLmN1cnJlbnRMZWFndWVQYWdlID0gMTtcbiAgJHNjb3BlLmxlYWd1ZXNQZXJQYWdlID0gMTAwO1xuXG4gICRzY29wZS5jcmVhdGVMZWFndWUgPSBmdW5jdGlvbihzZWFzb24pIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL25ldy9sZWFndWUubmV3LnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdOZXdMZWFndWVDb250cm9sbGVyJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgc2Vhc29uSWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBzZWFzb24uaWQ7XG4gICAgICAgIH0sXG4gICAgICAgIHdlZWtzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gd2Vla1NlcnZpY2UuZ2V0QXZhaWxhYmxlV2Vla3Moc2Vhc29uLmlkKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSk7XG5cbiAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgICAgbGVhZ3VlU2VydmljZS5jcmVhdGVMZWFndWUobGVhZ3VlKTtcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAkbG9nLmRlYnVnKCdDcmVhdGUgbGVhZ3VlIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdDcmVhdGUgbGVhZ3VlIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgIH0pO1xuXG4gIH07XG5cbiAgJHNjb3BlLmpvaW5MZWFndWUgPSBmdW5jdGlvbihzZWFzb24pIHtcbiAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgc2Vhc29uLmlkICsgJy9sZWFndWVzL3B1YmxpYycpO1xuICB9O1xuXG4gICRzY29wZS52aWV3TGVhZ3VlID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgJGxvY2F0aW9uLnBhdGgoJy9zZWFzb24vJyArIGxlYWd1ZS5zZWFzb25faWQgKyAnL2xlYWd1ZS8nICsgbGVhZ3VlLmlkKTtcbiAgfTtcblxuICAkc2NvcGUuc3RhcnRzID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgdmFyIHN0YXJ0c0xhYmVsID0gKGxlYWd1ZS5zdGFydGVkKSA/ICdTdGFydGVkICcgOiAnU3RhcnRzICc7XG4gICAgcmV0dXJuIHN0YXJ0c0xhYmVsICsgbGVhZ3VlLnN0YXJ0X3dlZWs7XG4gIH07XG5cbiAgJHNjb3BlLmlzQ29tbWlzaCA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgIHJldHVybiBsZWFndWUuY29tbWlzaF9pZHMuaW5kZXhPZih1c2VyTW9kZWwudXNlci5pZCkgPiAtMTtcbiAgfTtcblxuICAkc2NvcGUuc2VhcmNoID0gZnVuY3Rpb24oaXRlbSkge1xuICAgIGlmIChpdGVtLm5hbWUuaW5kZXhPZigkc2NvcGUucXVlcnkudG9Mb3dlckNhc2UoKSkgIT0gLTEgfHwgaXRlbS5jb21taXNoX25hbWVzLmpvaW4oJywgJykuaW5kZXhPZigkc2NvcGUucXVlcnkudG9Mb3dlckNhc2UoKSkgIT0gLTEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcIm15IGxlYWd1ZXMgY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xuXG59O1xuXG5QbGF5TGVhZ3Vlc0NvbnRyb2xsZXIuJGluamVjdCA9IFsnbGVhZ3VlcycsICckc2NvcGUnLCAnJGxvZycsICckbG9jYXRpb24nLCAnJG1vZGFsJywgJ3VzZXJNb2RlbCcsICdtZXNzYWdlTW9kZWwnLCAnd2Vla1NlcnZpY2UnLCAnbGVhZ3VlU2VydmljZSddO1xubW9kdWxlLmV4cG9ydHMgPSBQbGF5TGVhZ3Vlc0NvbnRyb2xsZXI7XG5cbiIsInZhciBQbGF5VGVhbXNDb250cm9sbGVyID0gZnVuY3Rpb24odGVhbXMsICRzY29wZSwgJGxvZywgJHN0YXRlUGFyYW1zLCAkbG9jYXRpb24pIHtcblxuICAkc2NvcGUudGVhbXMgPSB0ZWFtcy5kYXRhO1xuXG4gIC8vIHBhZ2luYXRpb25cbiAgJHNjb3BlLmN1cnJlbnRUZWFtUGFnZSA9IDE7XG4gICRzY29wZS50ZWFtc1BlclBhZ2UgPSAxMDA7XG5cbiAgJHNjb3BlLnNob3dUZWFtID0gZnVuY3Rpb24odGVhbSkge1xuICAgICRsb2NhdGlvbi5wYXRoKCcvc2Vhc29uLycgKyAkc3RhdGVQYXJhbXMuc2Vhc29uSWQgKyAnL2xlYWd1ZS8nICsgdGVhbS5sZWFndWUuaWQgKyAnL3RlYW0vJyArIHRlYW0uaWQpO1xuICB9O1xuXG4gICRzY29wZS5oYXNOb1BpY2sgPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgcmV0dXJuIHRlYW0ubGFzdF9waWNrLm5hbWUuaW5kZXhPZignTm8gUGljaycpID4gLTE7XG4gIH07XG5cbiAgJHNjb3BlLnNlYXJjaCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICBpZiAoaXRlbS5uYW1lLmluZGV4T2YoJHNjb3BlLnF1ZXJ5LnRvTG93ZXJDYXNlKCkpICE9IC0xIHx8IGl0ZW0ubGVhZ3VlLm5hbWUuaW5kZXhPZigkc2NvcGUucXVlcnkudG9Mb3dlckNhc2UoKSkgIT0gLTEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcInBsYXkgdGVhbXMgY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xuXG59O1xuXG5QbGF5VGVhbXNDb250cm9sbGVyLiRpbmplY3QgPSBbJ3RlYW1zJywgJyRzY29wZScsICckbG9nJywgJyRzdGF0ZVBhcmFtcycsICckbG9jYXRpb24nXTtcbm1vZHVsZS5leHBvcnRzID0gUGxheVRlYW1zQ29udHJvbGxlcjtcbiIsInZhciBQaWNrTWFrZUNvbnRyb2xsZXIgPSBmdW5jdGlvbihwaWNrcywgY3VycmVudEdhbWVzLCAkbW9kYWxJbnN0YW5jZSwgJHNjb3BlLCAkbG9nLCBkYXRlVXRpbHMpIHtcblxuICB2YXIgcGlja3MgPSBwaWNrcztcblxuICAkc2NvcGUuZ2FtZXMgPSBjdXJyZW50R2FtZXMuZGF0YTtcblxuICAkc2NvcGUuZ2V0U2NvcmUgPSBmdW5jdGlvbihnYW1lLCBpbmRleCkge1xuICAgIC8vIHdhcm5pbmc6IG1hZ2ljIG51bWJlcnMgYWhlYWRcbiAgICB2YXIgc2NvcmUgPSAoaW5kZXggPT09IDApID8gZ2FtZS52aXNpdGluZ19zcXVhZF9zY29yZSA6IGdhbWUuaG9tZV9zcXVhZF9zY29yZTtcbiAgICByZXR1cm4gc2NvcmU7XG4gIH07XG5cbiAgJHNjb3BlLm1ha2VQaWNrID0gZnVuY3Rpb24oZ2FtZSwgc3F1YWQpIHtcbiAgICBpZiAoZ2FtZS5zdGFydGVkIHx8ICRzY29wZS5oYXNTcXVhZEJlZW5Vc2VkKGdhbWUsIHNxdWFkKSkgcmV0dXJuO1xuICAgIHZhciBwaWNrID0ge1xuICAgICAgd2Vla19pZDogZ2FtZS53ZWVrX2lkLFxuICAgICAgd2Vla190eXBlX2lkOiBnYW1lLndlZWtfdHlwZV9pZCxcbiAgICAgIGdhbWVfaWQ6IGdhbWUuaWQsXG4gICAgICB0ZWFtX2lkOiAnJyxcbiAgICAgIHNxdWFkX2lkOiBzcXVhZC5pZFxuICAgIH07XG4gICAgJG1vZGFsSW5zdGFuY2UuY2xvc2UocGljayk7XG4gIH07XG5cbiAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgfTtcblxuICAkc2NvcGUuc3RhcnRzID0gZnVuY3Rpb24oZ2FtZSkge1xuICAgIHZhciBzdGFydHNMYWJlbCA9IChnYW1lLnN0YXJ0ZWQpID8gJ1N0YXJ0ZWQgJyA6ICdTdGFydHMgJztcbiAgICByZXR1cm4gc3RhcnRzTGFiZWwgKyBkYXRlVXRpbHMuZGF0ZUZvcm1hdChnYW1lLnN0YXJ0c19hdCwgXCJkZGQsIG1tbSBkIGg6TU0gVFQgKFopXCIpO1xuICB9O1xuXG4gICRzY29wZS5oYXNTcXVhZEJlZW5Vc2VkID0gZnVuY3Rpb24oZ2FtZSwgc3F1YWQpIHtcbiAgICB2YXIgc3F1YWRIYXNCZWVuVXNlZCA9IGZhbHNlO1xuICAgIF8uZWFjaChwaWNrcywgZnVuY3Rpb24ocGljaykge1xuICAgICAgaWYgKHBpY2suc3F1YWQuaWQgPT0gc3F1YWQuaWQgJiYgcGljay53ZWVrX3R5cGVfaWQgPT0gZ2FtZS53ZWVrX3R5cGVfaWQgJiYgcGljay53ZWVrX2lkICE9IGdhbWUud2Vla19pZCkge1xuICAgICAgICBzcXVhZEhhc0JlZW5Vc2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc3F1YWRIYXNCZWVuVXNlZDtcbiAgfTtcblxuICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICB9O1xuXG4gICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwibWFrZSBwaWNrIGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cblBpY2tNYWtlQ29udHJvbGxlci4kaW5qZWN0ID0gWydwaWNrcycsICdjdXJyZW50R2FtZXMnLCAnJG1vZGFsSW5zdGFuY2UnLCAnJHNjb3BlJywgJyRsb2cnLCAnZGF0ZVV0aWxzJ107XG5tb2R1bGUuZXhwb3J0cyA9IFBpY2tNYWtlQ29udHJvbGxlcjtcbiIsInZhciBBZG1pblNlYXNvbnNDb250cm9sbGVyID0gZnVuY3Rpb24oJHNjb3BlLCAkbG9jYXRpb24sICRtb2RhbCwgc2Vhc29uTW9kZWwsIHNlYXNvblNlcnZpY2UpIHtcblxuICAkc2NvcGUuc2Vhc29ucyA9IHNlYXNvbk1vZGVsLnNlYXNvbnM7XG5cbiAgJHNjb3BlLnNob3dTZWFzb24gPSBmdW5jdGlvbihzZWFzb24pIHtcbiAgICAkbG9jYXRpb24ucGF0aCgkbG9jYXRpb24ucGF0aCgpICsgJy8nICsgc2Vhc29uLmlkKTtcbiAgfTtcblxuICAkc2NvcGUuY3JlYXRlU2Vhc29uID0gZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2FkbWluL3NlYXNvbnMvc2Vhc29uL25ldy9hZG1pbi5zZWFzb24ubmV3LnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdBZG1pblNlYXNvbk5ld0NvbnRyb2xsZXInXG4gICAgfSk7XG5cbiAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKHNlYXNvbikge1xuICAgICAgc2Vhc29uU2VydmljZS5jcmVhdGVTZWFzb24oc2Vhc29uKTtcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAkbG9nLmRlYnVnKCdDcmVhdGUgc2Vhc29uIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdDcmVhdGUgc2Vhc29uIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgIH0pO1xuXG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cbkFkbWluU2Vhc29uc0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2NhdGlvbicsICckbW9kYWwnLCAnc2Vhc29uTW9kZWwnLCAnc2Vhc29uU2VydmljZSddO1xubW9kdWxlLmV4cG9ydHMgPSBBZG1pblNlYXNvbnNDb250cm9sbGVyO1xuIiwidmFyIEFkbWluV2Vla0NvbnRyb2xsZXIgPSBmdW5jdGlvbih3ZWVrLCBnYW1lcywgJHNjb3BlLCAkbG9nLCAkbW9kYWwsIGRhdGVVdGlscywgZ2FtZVNlcnZpY2UsIHNxdWFkU2VydmljZSwgd2Vla1NlcnZpY2UsIG1lc3NhZ2VNb2RlbCkge1xuXG4gIHZhciBjb21wbGV0ZVdlZWsgPSBmdW5jdGlvbih3ZWVrKSB7XG4gICAgd2Vla1NlcnZpY2UuY29tcGxldGVXZWVrKHdlZWspXG4gICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgJHNjb3BlLndlZWtEYXRhLmNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHZhciBzZW5kUmVtaW5kZXIgPSBmdW5jdGlvbih3ZWVrKSB7XG4gICAgd2Vla1NlcnZpY2Uuc2VuZFJlbWluZGVyKHdlZWspO1xuICB9O1xuXG4gICRzY29wZS53ZWVrRGF0YSA9IHdlZWsuZGF0YTtcblxuICAkc2NvcGUuZ2FtZXMgPSBnYW1lcy5kYXRhO1xuXG4gICRzY29wZS5kYXRlRm9ybWF0ID0gZGF0ZVV0aWxzLmRhdGVGb3JtYXQ7XG5cbiAgJHNjb3BlLmVkaXRXZWVrID0gZnVuY3Rpb24od2Vlaykge1xuXG4gICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9hZG1pbi93ZWVrL2VkaXQvYWRtaW4ud2Vlay5lZGl0LnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdBZG1pbldlZWtFZGl0Q29udHJvbGxlcicsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIHdlZWs6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB3ZWVrO1xuICAgICAgICB9LFxuICAgICAgICB3ZWVrVHlwZXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB3ZWVrU2VydmljZS5nZXRXZWVrVHlwZXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbih3ZWVrKSB7XG4gICAgICB3ZWVrU2VydmljZS51cGRhdGVXZWVrKHdlZWspO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ1dlZWsgdXBkYXRlIGNhbmNlbGxlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdXZWVrIHVwZGF0ZSBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcblxuICB9O1xuXG4gICRzY29wZS5lZGl0R2FtZSA9IGZ1bmN0aW9uKGdhbWUpIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvYWRtaW4vZ2FtZS9lZGl0L2FkbWluLmdhbWUuZWRpdC50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnQWRtaW5HYW1lRWRpdENvbnRyb2xsZXInLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICBnYW1lOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gZ2FtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihnYW1lKSB7XG4gICAgICBnYW1lU2VydmljZS51cGRhdGVHYW1lKGdhbWUpO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ0dhbWUgdXBkYXRlIGNhbmNlbGxlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdHYW1lIHVwZGF0ZSBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcblxuICB9O1xuXG4gICRzY29wZS5jcmVhdGVHYW1lID0gZnVuY3Rpb24od2VlaywgZ2FtZXMpIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvYWRtaW4vZ2FtZS9uZXcvYWRtaW4uZ2FtZS5uZXcudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0FkbWluR2FtZU5ld0NvbnRyb2xsZXInLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICB3ZWVrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gd2VlaztcbiAgICAgICAgfSxcbiAgICAgICAgbGFzdEdhbWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChnYW1lcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2FtZXNbZ2FtZXMubGVuZ3RoIC0gMV1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNxdWFkczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHNxdWFkU2VydmljZS5nZXRXZWVrU3F1YWRzKHdlZWspO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKGdhbWUpIHtcbiAgICAgIGdhbWVTZXJ2aWNlLmNyZWF0ZUdhbWUoZ2FtZSk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnQ3JlYXRlIGdhbWUgbW9kYWwgZGlzbWlzc2VkLi4uJyk7XG4gICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ0NyZWF0ZSBnYW1lIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgIH0pO1xuXG4gIH07XG5cblxuICAkc2NvcGUuY29uZmlybVNlbmRSZW1pbmRlciA9IGZ1bmN0aW9uKHdlZWspIHtcbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvY29uZmlybS9jb25maXJtLnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdDb25maXJtQ29udHJvbGxlcicsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIG1lc3NhZ2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHNlbmQgd2Vla2x5IHJlbWluZGVyPyc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgc2VuZFJlbWluZGVyKHdlZWspO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ1NlbmQgcmVtaW5kZXIgY2FuY2VsbGVkLi4uJyk7XG4gICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ1NlbmQgcmVtaW5kZXIgY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgJHNjb3BlLmNvbmZpcm1XZWVrQ29tcGxldGUgPSBmdW5jdGlvbih3ZWVrKSB7XG4gICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2NvbmZpcm0vY29uZmlybS50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnQ29uZmlybUNvbnRyb2xsZXInLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICBtZXNzYWdlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBtYXJrIHRoaXMgd2VlayBhcyBjb21wbGV0ZT8nO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbigpIHtcbiAgICAgIGNvbXBsZXRlV2Vlayh3ZWVrKTtcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAkbG9nLmRlYnVnKCdDb21wbGV0ZSB3ZWVrIGNhbmNlbGxlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdXZWVrIGNvbXBsZXRlIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICB9O1xuICBpbml0KCk7XG59O1xuXG5BZG1pbldlZWtDb250cm9sbGVyLiRpbmplY3QgPSBbJ3dlZWsnLCAnZ2FtZXMnLCAnJHNjb3BlJywgJyRsb2cnLCAnJG1vZGFsJywgJ2RhdGVVdGlscycsICdnYW1lU2VydmljZScsICdzcXVhZFNlcnZpY2UnLCAnd2Vla1NlcnZpY2UnLCAnbWVzc2FnZU1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IEFkbWluV2Vla0NvbnRyb2xsZXI7XG4iLCJ2YXIgTGVhZ3VlSW52aXRlUmVxdWVzdENvbnRyb2xsZXIgPSBmdW5jdGlvbihsZWFndWVJZCwgJG1vZGFsSW5zdGFuY2UsICRzY29wZSwgJGxvZywgdXNlck1vZGVsKSB7XG5cbiAgJHNjb3BlLmludml0YXRpb24gPSB7XG4gICAgbGVhZ3VlX2lkOiBsZWFndWVJZCxcbiAgICBlbWFpbDogdXNlck1vZGVsLnVzZXIuZW1haWwsXG4gICAgbWVzc2FnZTogXCJcIlxuICB9O1xuXG4gICRzY29wZS5yZXF1ZXN0SW52aXRlID0gZnVuY3Rpb24gKGludml0YXRpb24pIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZShpbnZpdGF0aW9uKTtcbiAgfTtcblxuICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICB9O1xuXG4gICRzY29wZS5oYXNFcnJvciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gIH07XG5cbiAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kZXJyb3JbcHJvcGVydHldO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJsZWFndWUgaW52aXRlIHJlcXVlc3QgY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuTGVhZ3VlSW52aXRlUmVxdWVzdENvbnRyb2xsZXIuJGluamVjdCA9IFsnbGVhZ3VlSWQnLCAnJG1vZGFsSW5zdGFuY2UnLCAnJHNjb3BlJywgJyRsb2cnLCAndXNlck1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IExlYWd1ZUludml0ZVJlcXVlc3RDb250cm9sbGVyO1xuIiwiXG52YXIgUHVibGljTGVhZ3Vlc0NvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2csICRsb2NhdGlvbiwgcHVibGljTGVhZ3Vlcykge1xuXG4gICAgJHNjb3BlLnB1YmxpY0xlYWd1ZXMgPSBwdWJsaWNMZWFndWVzLmRhdGE7XG5cbiAgICAkc2NvcGUuc2hvd0xlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgICAgJGxvY2F0aW9uLnBhdGgoJy9zZWFzb24vJyArIGxlYWd1ZS5zZWFzb25faWQgKyAnL2xlYWd1ZS8nICsgbGVhZ3VlLmlkKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJwdWJsaWMgbGVhZ3VlcyBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5QdWJsaWNMZWFndWVzQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZycsICckbG9jYXRpb24nLCAncHVibGljTGVhZ3VlcyddO1xubW9kdWxlLmV4cG9ydHMgPSBQdWJsaWNMZWFndWVzQ29udHJvbGxlcjtcblxuIiwidmFyIFByaXZhdGVMZWFndWVzQ29udHJvbGxlciA9IGZ1bmN0aW9uKHByaXZhdGVMZWFndWVzLCAkc2NvcGUsICRsb2csICRsb2NhdGlvbikge1xuXG4gICAgJHNjb3BlLnByaXZhdGVMZWFndWVzID0gcHJpdmF0ZUxlYWd1ZXMuZGF0YTtcblxuICAgICRzY29wZS5zaG93TGVhZ3VlID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgbGVhZ3VlLnNlYXNvbl9pZCArICcvbGVhZ3VlLycgKyBsZWFndWUuaWQpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcInByaXZhdGUgbGVhZ3VlcyBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5Qcml2YXRlTGVhZ3Vlc0NvbnRyb2xsZXIuJGluamVjdCA9IFsncHJpdmF0ZUxlYWd1ZXMnLCAnJHNjb3BlJywgJyRsb2cnLCAnJGxvY2F0aW9uJ107XG5tb2R1bGUuZXhwb3J0cyA9IFByaXZhdGVMZWFndWVzQ29udHJvbGxlcjtcblxuIiwidmFyIEFkbWluR2FtZUVkaXRDb250cm9sbGVyID0gZnVuY3Rpb24oZ2FtZSwgJHNjb3BlLCAkbW9kYWxJbnN0YW5jZSkge1xuXG4gICRzY29wZS5nYW1lRGF0YSA9IGFuZ3VsYXIuY29weShnYW1lKTtcblxuICAkc2NvcGUuY2xvc2VTdGFydHNBdCA9IGZ1bmN0aW9uKCkge1xuICAgICRzY29wZS5zdGFydHNBdERyb3Bkb3duID0ge1xuICAgICAgaXNvcGVuOiBmYWxzZVxuICAgIH07XG4gIH07XG4gICRzY29wZS5jbG9zZVN0YXJ0c0F0KCk7XG5cbiAgJHNjb3BlLmVkaXRHYW1lID0gZnVuY3Rpb24oZ2FtZSkge1xuICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKGdhbWUpO1xuICB9O1xuXG4gICRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2FuY2VsJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cbkFkbWluR2FtZUVkaXRDb250cm9sbGVyLiRpbmplY3QgPSBbJ2dhbWUnLCAnJHNjb3BlJywgJyRtb2RhbEluc3RhbmNlJ107XG5tb2R1bGUuZXhwb3J0cyA9IEFkbWluR2FtZUVkaXRDb250cm9sbGVyO1xuIiwidmFyIEFkbWluR2FtZU5ld0NvbnRyb2xsZXIgPSBmdW5jdGlvbih3ZWVrLCBsYXN0R2FtZSwgc3F1YWRzLCAkc2NvcGUsICRtb2RhbEluc3RhbmNlKSB7XG5cbiAgJHNjb3BlLndlZWtEYXRhID0gd2VlaztcblxuICAkc2NvcGUuc3F1YWRzID0gc3F1YWRzLmRhdGE7XG5cbiAgJHNjb3BlLm5ld0dhbWVEYXRhID0ge1xuICAgIHdlZWtfaWQ6IHdlZWsuaWQsXG4gICAgaG9tZV9zcXVhZF9pZDogc3F1YWRzLmRhdGFbMF0uaWQsXG4gICAgdmlzaXRpbmdfc3F1YWRfaWQ6IHNxdWFkcy5kYXRhWzBdLmlkLFxuICAgIHN0YXJ0c19hdDogKGxhc3RHYW1lKSA/IGxhc3RHYW1lLnN0YXJ0c19hdCA6IG1vbWVudCgpLmZvcm1hdCgpXG4gIH07XG5cbiAgJHNjb3BlLmNsb3NlU3RhcnRzQXQgPSBmdW5jdGlvbigpIHtcbiAgICAkc2NvcGUuc3RhcnRzQXREcm9wZG93biA9IHtcbiAgICAgIGlzb3BlbjogZmFsc2VcbiAgICB9O1xuICB9O1xuICAkc2NvcGUuY2xvc2VTdGFydHNBdCgpO1xuXG4gICRzY29wZS5jcmVhdGVHYW1lID0gZnVuY3Rpb24oZ2FtZSkge1xuICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKGdhbWUpO1xuICB9O1xuXG4gICRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2FuY2VsJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cbkFkbWluR2FtZU5ld0NvbnRyb2xsZXIuJGluamVjdCA9IFsnd2VlaycsICdsYXN0R2FtZScsICdzcXVhZHMnLCAnJHNjb3BlJywgJyRtb2RhbEluc3RhbmNlJ107XG5tb2R1bGUuZXhwb3J0cyA9IEFkbWluR2FtZU5ld0NvbnRyb2xsZXI7XG4iLCJ2YXIgQWRtaW5XZWVrc0NvbnRyb2xsZXIgPSBmdW5jdGlvbihzZWFzb24sIHdlZWtzLCBsZWFndWVzLCAkc2NvcGUsICRsb2NhdGlvbikge1xuXG4gICRzY29wZS5zZWFzb24gPSBzZWFzb24uZGF0YTtcblxuICAkc2NvcGUud2Vla3MgPSB3ZWVrcy5kYXRhO1xuXG4gICRzY29wZS5wcml2YXRlUXVlcnkgPSAnJztcblxuICAkc2NvcGUucHVibGljUXVlcnkgPSAnJztcblxuICAkc2NvcGUucHVibGljTGVhZ3VlcyA9IF8uZmlsdGVyKGxlYWd1ZXMuZGF0YSwgZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgcmV0dXJuIGxlYWd1ZS5wdWJsaWM7XG4gIH0pO1xuXG4gICRzY29wZS5wcml2YXRlTGVhZ3VlcyA9IF8uZmlsdGVyKGxlYWd1ZXMuZGF0YSwgZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgcmV0dXJuICFsZWFndWUucHVibGljO1xuICB9KTtcblxuICAkc2NvcGUuc2hvd1dlZWsgPSBmdW5jdGlvbih3ZWVrKSB7XG4gICAgJGxvY2F0aW9uLnBhdGgoJGxvY2F0aW9uLnBhdGgoKSArICcvd2Vla3MvJyArIHdlZWsuaWQpO1xuICB9O1xuXG4gICRzY29wZS5zaG93TGVhZ3VlID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgJGxvY2F0aW9uLnBhdGgoJy9zZWFzb24vJyArIGxlYWd1ZS5zZWFzb25faWQgKyAnL2xlYWd1ZS8nICsgbGVhZ3VlLmlkKTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuQWRtaW5XZWVrc0NvbnRyb2xsZXIuJGluamVjdCA9IFsnc2Vhc29uJywgJ3dlZWtzJywgJ2xlYWd1ZXMnLCAnJHNjb3BlJywgJyRsb2NhdGlvbiddO1xubW9kdWxlLmV4cG9ydHMgPSBBZG1pbldlZWtzQ29udHJvbGxlcjtcbiIsInZhciBBZG1pbldlZWtFZGl0Q29udHJvbGxlciA9IGZ1bmN0aW9uKHdlZWssIHdlZWtUeXBlcywgJHNjb3BlLCAkbW9kYWxJbnN0YW5jZSkge1xuXG4gICRzY29wZS53ZWVrRGF0YSA9IGFuZ3VsYXIuY29weSh3ZWVrKTtcblxuICAkc2NvcGUud2Vla1R5cGVzID0gd2Vla1R5cGVzLmRhdGE7XG5cbiAgJHNjb3BlLmNsb3NlU3RhcnRzQXQgPSBmdW5jdGlvbigpIHtcbiAgICAkc2NvcGUuc3RhcnRzQXREcm9wZG93biA9IHtcbiAgICAgIGlzb3BlbjogZmFsc2VcbiAgICB9O1xuICB9O1xuICAkc2NvcGUuY2xvc2VTdGFydHNBdCgpO1xuXG4gICRzY29wZS5jbG9zZUVuZHNBdCA9IGZ1bmN0aW9uKCkge1xuICAgICRzY29wZS5lbmRzQXREcm9wZG93biA9IHtcbiAgICAgIGlzb3BlbjogZmFsc2VcbiAgICB9O1xuICB9O1xuICAkc2NvcGUuY2xvc2VFbmRzQXQoKTtcblxuICAkc2NvcGUuZWRpdFdlZWsgPSBmdW5jdGlvbih3ZWVrKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuY2xvc2Uod2Vlayk7XG4gIH07XG5cbiAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgfTtcblxuICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICB9O1xuXG4gICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuQWRtaW5XZWVrRWRpdENvbnRyb2xsZXIuJGluamVjdCA9IFsnd2VlaycsICd3ZWVrVHlwZXMnLCAnJHNjb3BlJywgJyRtb2RhbEluc3RhbmNlJ107XG5tb2R1bGUuZXhwb3J0cyA9IEFkbWluV2Vla0VkaXRDb250cm9sbGVyO1xuIiwidmFyIEFkbWluU2Vhc29uTmV3Q29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJG1vZGFsSW5zdGFuY2UpIHtcblxuICAkc2NvcGUuc2Vhc29uVHlwZXMgPSBbXG4gICAgJ05CQScsXG4gICAgJ05GTCcsXG4gICAgJ05ITCcsXG4gICAgJ01MQidcbiAgXTtcblxuICAkc2NvcGUubmV3U2Vhc29uRGF0YSA9IHtcbiAgICBuYW1lOiAnJyxcbiAgICBzZWFzb25fdHlwZTogJHNjb3BlLnNlYXNvblR5cGVzWzBdLFxuICAgIHN0YXJ0c19hdDogbW9tZW50KCkuZm9ybWF0KCksXG4gICAgZW5kc19hdDogbW9tZW50KCkuZm9ybWF0KClcbiAgfTtcblxuICAkc2NvcGUuY2xvc2VTdGFydHNBdCA9IGZ1bmN0aW9uKCkge1xuICAgICRzY29wZS5zdGFydHNBdERyb3Bkb3duID0ge1xuICAgICAgaXNvcGVuOiBmYWxzZVxuICAgIH07XG4gIH07XG4gICRzY29wZS5jbG9zZVN0YXJ0c0F0KCk7XG5cbiAgJHNjb3BlLmNsb3NlRW5kc0F0ID0gZnVuY3Rpb24oKSB7XG4gICAgJHNjb3BlLmVuZHNBdERyb3Bkb3duID0ge1xuICAgICAgaXNvcGVuOiBmYWxzZVxuICAgIH07XG4gIH07XG4gICRzY29wZS5jbG9zZUVuZHNBdCgpO1xuXG4gICRzY29wZS5jcmVhdGVTZWFzb24gPSBmdW5jdGlvbihzZWFzb24pIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZShzZWFzb24pO1xuICB9O1xuXG4gICRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2FuY2VsJyk7XG4gIH07XG5cbiAgJHNjb3BlLmhhc0Vycm9yID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgfTtcblxuICAkc2NvcGUuaGFzUHJvcGVydHlFcnJvciA9IGZ1bmN0aW9uKGlucHV0LCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRlcnJvcltwcm9wZXJ0eV07XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cbkFkbWluU2Vhc29uTmV3Q29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJG1vZGFsSW5zdGFuY2UnXTtcbm1vZHVsZS5leHBvcnRzID0gQWRtaW5TZWFzb25OZXdDb250cm9sbGVyO1xuIl19
;