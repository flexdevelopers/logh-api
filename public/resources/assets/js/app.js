require=(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({"app-templates":[function(require,module,exports){
module.exports=require('0VoVTq');
},{}],"0VoVTq":[function(require,module,exports){
angular.module('app.templates', ['common/modules/confirm/confirm.tpl.html', 'common/modules/footer/footer.tpl.html', 'common/modules/header/header.tpl.html', 'common/modules/message/message.tpl.html', 'common/templates/master.tpl.html', 'modules/private/admin/admin.tpl.html', 'modules/private/admin/game/edit/admin.game.edit.tpl.html', 'modules/private/admin/game/new/admin.game.new.tpl.html', 'modules/private/admin/seasons/admin.seasons.tpl.html', 'modules/private/admin/seasons/season/admin.season.tpl.html', 'modules/private/admin/seasons/season/new/admin.season.new.tpl.html', 'modules/private/admin/week/admin.week.tpl.html', 'modules/private/admin/week/edit/admin.week.edit.tpl.html', 'modules/private/league/contact/league.contact.tpl.html', 'modules/private/league/edit/league.edit.tpl.html', 'modules/private/league/invite/league.invite.tpl.html', 'modules/private/league/invite/request/league.invite.request.tpl.html', 'modules/private/league/join/league.join.tpl.html', 'modules/private/league/league.tpl.html', 'modules/private/league/message/league.message.tpl.html', 'modules/private/league/new/league.new.tpl.html', 'modules/private/league/view/league.view.tpl.html', 'modules/private/leagues/join/leagues.join.tpl.html', 'modules/private/leagues/join/private/leagues.join.private.tpl.html', 'modules/private/leagues/join/public/leagues.join.public.tpl.html', 'modules/private/leagues/leagues.tpl.html', 'modules/private/leagues/manage/leagues.manage.tpl.html', 'modules/private/leagues/my/leagues.my.tpl.html', 'modules/private/play/leagues/play.leagues.tpl.html', 'modules/private/play/play.tpl.html', 'modules/private/play/teams/play.teams.tpl.html', 'modules/private/team/edit/team.edit.tpl.html', 'modules/private/team/message/team.message.tpl.html', 'modules/private/team/pick/many/team.pick.many.tpl.html', 'modules/private/team/pick/one/team.pick.one.tpl.html', 'modules/private/team/pick/team.pick.tpl.html', 'modules/private/team/team.tpl.html', 'modules/private/team/view/picks/team.view.picks.tpl.html', 'modules/private/team/view/team.view.tpl.html', 'modules/private/teams/alive/teams.alive.tpl.html', 'modules/private/teams/dead/teams.dead.tpl.html', 'modules/private/teams/teams.tpl.html', 'modules/private/user/reset/user.reset.tpl.html', 'modules/private/user/user.tpl.html', 'modules/public/abuse/abuse.tpl.html', 'modules/public/faq/faq.tpl.html', 'modules/public/home/home.tpl.html', 'modules/public/register/register.tpl.html', 'modules/public/register/terms/register.terms.tpl.html', 'modules/public/signin/signin.tpl.html']);

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
    "      <li ng-class=\"{'active': isState(['private.leagues.join.public', 'private.leagues.join.private'])}\"><a ng-click=\"joinLeague()\">Join League</a></li>\n" +
    "      <li><a ng-click=\"createLeague()\">Create League</a></li>\n" +
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
    "        <span class=\"public-league-meta\">{{publicLeague.format}}<br>Starts {{publicLeague.start_week}}</span>\n" +
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
    "        <span class=\"private-league-meta\">{{privateLeague.format}}<br>Starts {{privateLeague.start_week}}</span>\n" +
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
    "    <h3><i class=\"fa fa-check fa-fw\" ng-show=\"weekData.complete === true\" title=\"Week complete\"></i> {{weekData.season_type}} {{weekData.display}} <small><a ng-click=\"editWeek(weekData)\">[ edit ]</a></small><br>\n" +
    "      <small>Description: {{weekData.description}}</small><br>\n" +
    "      <small>Reminder Sent: <span ng-show=\"!weekData.reminder_sent_at\">N/A</span><span ng-show=\"weekData.reminder_sent_at\">{{dateFormat(weekData.reminder_sent_at, \"mmm d h:MM TT (Z)\")}}</span></small>\n" +
    "    </h3>\n" +
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
    "      <div class=\"game-score col-sm-6 col-md-6\">\n" +
    "        {{game.squads[0].name}}: {{game.visiting_squad_score}} | {{game.squads[1].name}}: {{game.home_squad_score}} <span ng-show=\"game.overtime === true\">OT</span><br>\n" +
    "        Picks: {{game.pick_count}}\n" +
    "      </div>\n" +
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
    "            <label class=\"btn btn-default league-format-btn\" ng-click=\"leagueData.max_picks_per_week = null\" ng-model=\"leagueData.elimination\" btn-radio=\"false\" uncheckable>Pick'em<br><span class=\"small-gray\">[ no elimination ]</span></label>\n" +
    "            <label class=\"btn btn-default league-format-btn\" ng-click=\"leagueData.max_picks_per_week = 1\" ng-model=\"leagueData.elimination\" btn-radio=\"true\" uncheckable>Survivor<br><span class=\"small-gray\">[ single elimination ]</span></label>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\" ng-show=\"leagueData.started\">\n" +
    "          <label class=\"control-label\">League format</label>\n" +
    "          <input type=\"text\" class=\"form-control\" value=\"Pick'em [ no elimination ]\" ng-show=\"!leagueData.elimination\" ng-disabled=\"true\">\n" +
    "          <input type=\"text\" class=\"form-control\" value=\"Survivor [ single elimination ]\" ng-show=\"leagueData.elimination\" ng-disabled=\"true\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"control-label\" for=\"maxPicks\">How many losers can I pick per week?</label>\n" +
    "          <select id=\"maxPicks\" name=\"maxPicks\" class=\"form-control\" ng-disabled=\"leagueData.elimination\" ng-model=\"leagueData.max_picks_per_week\" ng-options=\"maxPick.number as maxPick.display for maxPick in maxPicksPerWeek\"></select>\n" +
    "          <small class=\"input-error\" ng-show=\"leagueData.elimination\"><i class=\"fa fa-warning fa-fw\" title=\"Warning\"></i> Survivor leagues only allow 1 pick per week, no repeats</small>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <hr>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\" ng-class=\"{'has-error': hasError(leagueForm.leagueName), 'has-feedback': hasError(leagueForm.leagueName)}\">\n" +
    "          <label class=\"control-label\" for=\"leagueName\">League name\n" +
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
    "          <label class=\"control-label\">Season</label>\n" +
    "          <input id=\"seasonName\" name=\"seasonName\" type=\"text\" class=\"form-control\" ng-model=\"leagueData.season_name\" ng-disabled=\"true\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"control-label\" for=\"startWeek\">Start week</label>\n" +
    "          <select id=\"startWeek\" name=\"startWeek\" class=\"form-control\" ng-show=\"!leagueData.started\" ng-model=\"leagueData.start_week_id\" ng-options=\"week.id as week.display for week in weeks\"></select>\n" +
    "          <input id=\"startWeekDisplay\" name=\"startWeekDisplay\" type=\"text\" class=\"form-control\" ng-show=\"leagueData.started\" ng-model=\"leagueData.start_week_display\" ng-disabled=\"true\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\" ng-class=\"{'has-error': hasError(leagueForm.maxTeams), 'has-feedback': hasError(leagueForm.maxTeams)}\">\n" +
    "          <label class=\"control-label\" for=\"maxTeams\">How many times can a user join?\n" +
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
    "          <label class=\"control-label\" for=\"message\">Message [ Optional ]</label>\n" +
    "          <textarea id=\"message\" name=\"message\" class=\"form-control\" placeholder=\"Enter a message for your league here. You can change it at any time.\" rows=\"2\" maxlength=\"500\" ng-model=\"leagueData.message\"></textarea>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "  <button class=\"btn btn-primary\" ng-disabled=\"leagueForm.$invalid || editBtnDisabled\" ng-click=\"updateLeague(leagueData)\">Update</button>\n" +
    "</div>");
}]);

angular.module("modules/private/league/invite/league.invite.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/league/invite/league.invite.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\"><span ng-show=\"!leagueClosed\">Invite Friends</span><span ng-show=\"leagueClosed\">Invitations</span></h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <div ng-show=\"!leagueClosed\">\n" +
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
    "      <span class=\"click-to-edit\" ng-show=\"!leagueClosed\">[ click invite to edit ]</span>\n" +
    "    </div>\n" +
    "    <div class=\"league-invites\">\n" +
    "      <div class=\"list-group\">\n" +
    "        <a ng-repeat=\"invite in invitations\" class=\"list-group-item\" ng-click=\"populateInvite(invite)\">\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-sm-12 col-md-12\">\n" +
    "              <i class=\"fa fa-check fa-fw\" ng-show=\"invite.accepted_at\" title=\"Accepted\"></i> {{invite.email}}\n" +
    "              <br>\n" +
    "              <span class=\"sent-date\"><span ng-show=\"!invite.accepted_at\">Sent: {{invite.updated_at}}</span><span ng-show=\"invite.accepted_at\">Joined: {{invite.accepted_at}}</span></span>\n" +
    "              <br>\n" +
    "              <span class=\"invitee\" ng-show=\"invite.invitee.length > 0\">Invitee: {{invite.invitee}}</span>\n" +
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
    "        <div class=\"form-group\">\n" +
    "          <div class=\"btn-group league-format-btn-group\">\n" +
    "            <label class=\"btn btn-default league-format-btn\" ng-click=\"leagueData.max_picks_per_week = null\" ng-model=\"leagueData.elimination\" btn-radio=\"false\" uncheckable>Pick'em<br><span class=\"small-gray\">[ no elimination ]</span></label>\n" +
    "            <label class=\"btn btn-default league-format-btn\" ng-click=\"leagueData.max_picks_per_week = 1\" ng-model=\"leagueData.elimination\" btn-radio=\"true\" uncheckable>Survivor<br><span class=\"small-gray\">[ single elimination ]</span></label>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"control-label\" for=\"maxPicks\">How many losers can I pick per week?</label>\n" +
    "          <select id=\"maxPicks\" name=\"maxPicks\" class=\"form-control\" ng-disabled=\"leagueData.elimination\" ng-model=\"leagueData.max_picks_per_week\" ng-options=\"maxPick.number as maxPick.display for maxPick in maxPicksPerWeek\"></select>\n" +
    "          <small class=\"input-error\" ng-show=\"leagueData.elimination\"><i class=\"fa fa-warning fa-fw\" title=\"Warning\"></i> Survivor leagues only allow 1 pick per week, no repeats</small>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <hr>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\" ng-class=\"{'has-error': hasError(leagueForm.leagueName), 'has-feedback': hasError(leagueForm.leagueName)}\">\n" +
    "          <label class=\"control-label\" for=\"leagueName\">League name\n" +
    "            <small ng-show=\"hasPropertyError(leagueForm.leagueName, 'required')\">[ Required ]</small>\n" +
    "            <small ng-show=\"hasPropertyError(leagueForm.leagueName, 'maxlength')\">[ Too Long ]</small>\n" +
    "          </label>\n" +
    "          <input id=\"leagueName\" name=\"leagueName\" type=\"text\" class=\"form-control\" ng-model=\"leagueData.name\" ng-maxlength=\"30\" required>\n" +
    "          <span ng-show=\"hasError(leagueForm.leagueName)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"league-nickname row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"control-label\" for=\"nickname\">Nickname</label>\n" +
    "          <input id=\"nickname\" name=\"nickname\" type=\"text\" class=\"form-control\" ng-model=\"leagueData.nickname\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"control-label\" for=\"season\">Season</label>\n" +
    "          <select id=\"season\" name=\"season\" class=\"form-control\" ng-change=\"getSeasonWeeks()\" ng-model=\"leagueData.season_id\" ng-options=\"season.id as season.name for season in seasons\"></select>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"control-label\" for=\"startWeek\">Start week</label>\n" +
    "          <select id=\"startWeek\" name=\"startWeek\" class=\"form-control\" ng-model=\"leagueData.start_week_id\" ng-options=\"week.id as week.display for week in weeks\" required></select>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\" ng-class=\"{'has-error': hasError(leagueForm.maxTeams), 'has-feedback': hasError(leagueForm.maxTeams)}\">\n" +
    "          <label class=\"control-label\" for=\"maxTeams\">How many times can a user join?\n" +
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
    "          <label class=\"control-label\" for=\"message\">Message [ Optional ]</label>\n" +
    "          <textarea id=\"message\" name=\"message\" class=\"form-control\" placeholder=\"Enter a message for your league here. You can change it at any time.\" rows=\"2\" maxlength=\"500\" ng-model=\"leagueData.message\"></textarea>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "  <button class=\"btn btn-primary\" ng-disabled=\"leagueForm.$invalid || createBtnDisabled\" ng-click=\"createLeague(leagueData)\">Create</button>\n" +
    "</div>");
}]);

angular.module("modules/private/league/view/league.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/league/view/league.view.tpl.html",
    "<div class=\"header-row row\">\n" +
    "  <div class=\"col-sm-7 col-md-7\">\n" +
    "    <div class=\"btn-group leagues-dropdown\" dropdown is-open=\"leagueDropdown.isopen\">\n" +
    "      <button type=\"button\" class=\"leagues-btn-link btn btn-link dropdown-toggle\" ng-disabled=\"!isCommish(leagueData) && !isAdmin()\">\n" +
    "        <span class=\"league-name\" ng-class=\"{'disabled': !isCommish(leagueData) && !isAdmin()}\">\n" +
    "        <i class=\"fa fa-lock icon\" title=\"Private league\" ng-show=\"!leagueData.public\"></i>\n" +
    "        <i class=\"fa fa-unlock icon\" title=\"Public league\" ng-show=\"leagueData.public\"></i>\n" +
    "        <strong>{{leagueData.name}}</strong></span> <span ng-show=\"isCommish(leagueData) || isAdmin()\" class=\"caret\"></span>\n" +
    "      </button>\n" +
    "      <ul class=\"dropdown-menu league-actions-menu\" role=\"menu\">\n" +
    "        <li><a ng-show=\"isCommish(leagueData) || isAdmin()\" ng-click=\"toggleDropdown($event);editLeague(leagueData)\">Edit league</a></li>\n" +
    "        <li><a ng-show=\"isCommish(leagueData)\" ng-click=\"toggleDropdown($event);updateMessage(leagueData)\">Edit league message</a></li>\n" +
    "        <li><a ng-show=\"isCommish(leagueData)\" ng-click=\"toggleDropdown($event);invite(leagueData.id, isCommish(leagueData), leagueData.closed)\">Manage invitations</a></li>\n" +
    "        <li><a ng-show=\"isCommish(leagueData) && teamOptions.inactive == true\" ng-click=\"toggleDropdown($event);showDeactivatedTeams(false);\">Hide deactivated teams</a></li>\n" +
    "        <li><a ng-show=\"isCommish(leagueData) && teamOptions.inactive == false\" ng-click=\"toggleDropdown($event);showDeactivatedTeams(true);\">Show deactivated teams</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "    <h3 style=\"margin-top: 0;\">\n" +
    "      <div class=\"league-meta\" ng-class=\"{'show-meta': !leagueData.closed}\">\n" +
    "        <small>Commish [ {{leagueData.commish_names.join(', ')}} ]</small><br>\n" +
    "        <small>{{leagueData.format}}</small>\n" +
    "      </div>\n" +
    "      <small>{{starts(leagueData)}}</small><br>\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-5 col-md-5\">\n" +
    "    <button type=\"button\" class=\"join-btn btn btn-primary\" ng-show=\"!leagueData.closed\" ng-click=\"joinLeague(leagueData)\">Join ({{leagueData.max_teams_per_user}}X Max)</button>\n" +
    "    <button type=\"button\" class=\"invite-btn btn btn-default\" ng-show=\"!leagueData.closed && (leagueData.public || isCommish(leagueData))\" ng-click=\"invite(leagueData.id, isCommish(leagueData), leagueData.closed)\">Invite</button>\n" +
    "    <button type=\"button\" class=\"request-invite-btn btn btn-default\" ng-show=\"!leagueData.closed && !leagueData.public && !isCommish(leagueData)\" ng-click=\"requestInvite(leagueData)\">Request Invite</button>\n" +
    "    <h3 class=\"league-meta-right\" ng-show=\"leagueData.closed\">\n" +
    "      <small>Commish [ {{leagueData.commish_names.join(', ')}} ]</small><br>\n" +
    "      <small>{{leagueData.format}}</small>\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<hr>\n" +
    "<div class=\"league-message\" ng-show=\"!leagueData.closed || hasTeamInLeague() || isCommish(leagueData)\">\n" +
    "  <accordion close-others=\"true\">\n" +
    "    <accordion-group is-open=\"userModel.leagueMessageOpen[leagueData.id]\">\n" +
    "      <accordion-heading>\n" +
    "        <i class=\"fa fa-comment fa-fw\"></i> Messages to league [ <span ng-show=\"leagueData.message.length > 0\">1</span><span ng-show=\"!leagueData.message || leagueData.message.length == 0\">0</span> ] <i class=\"pull-right glyphicon\" ng-class=\"{'glyphicon-chevron-down': userModel.leagueMessageOpen[leagueData.id], 'glyphicon-chevron-right': !userModel.leagueMessageOpen[leagueData.id]}\"></i>\n" +
    "      </accordion-heading>\n" +
    "      <p class=\"league-message-text\" ng-show=\"!leagueData.message || leagueData.message.length == 0\">no messages</p><p class=\"league-message-text\" ng-show=\"leagueData.message.length > 0\" ng-bind-html=\"leagueData.message | linky:'_blank'\"></p> <a class=\"alert-link\" ng-show=\"isCommish(leagueData)\" ng-click=\"updateMessage(leagueData)\">[ edit ]</a><a class=\"alert-link\" ng-show=\"!isCommish(leagueData) && hasTeamInLeague()\" ng-click=\"contactCommish(leagueData)\">[ contact commish ]</a>\n" +
    "    </accordion-group>\n" +
    "  </accordion>\n" +
    "  <hr>\n" +
    "</div>\n" +
    "<div class=\"teams-tab\">\n" +
    "  <ul class=\"nav nav-tabs\">\n" +
    "    <li class=\"active\"><a>Teams [ <span ng-show=\"leagueData.elimination\">{{leagueData.alive_team_count}} / </span>{{leagueData.team_count}} ]</a></li>\n" +
    "  </ul>\n" +
    "  <div class=\"weeks\">\n" +
    "    <select class=\"form-control\" ng-change=\"changeWeek(selectedWeekSlug)\" ng-model=\"selectedWeekSlug\" ng-options=\"leagueWeek.slug as leagueWeek.display for leagueWeek in leagueWeeks\">\n" +
    "      <option value=\"\">All Weeks</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "  <div class=\"input-group custom-search-form filter-league-join\">\n" +
    "    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" ng-model=\"teamQuery\">\n" +
    "    <span class=\"input-group-btn\">\n" +
    "      <button class=\"btn btn-default\" type=\"button\"><span class=\"glyphicon glyphicon-search\"></span></button>\n" +
    "    </span>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"league-container\">\n" +
    "  <div class=\"league-teams list-group\">\n" +
    "    <a class=\"list-group-item\" ng-class=\"{'inactive': !team.active || !team.alive}\" ng-repeat=\"team in leagueTeams | orderBy:[inPlay, '-correct_picks_count', 'name'] | activeTeamFilter:teamOptions | filter:search:strict | offsetFilter:(currentTeamPage-1)*teamsPerPage | limitTo:teamsPerPage\" ng-click=\"showTeam(team)\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"league-name col-sm-5 col-md-5\">\n" +
    "          <i class=\"fa fa-user fa-fw\" ng-show=\"isCoach(team)\" title=\"My team\"></i><i class=\"fa fa-check fa-fw\" ng-show=\"!isCoach(team) && isCommish(leagueData) && team.paid == true\" title=\"Paid\"></i> <span class=\"team-name\" ng-class=\"{'inactive': !team.active || !team.alive}\">{{team.name}}</span>\n" +
    "          <br>\n" +
    "          <span class=\"coach-name\">Coach: {{coachName(team)}}</span>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-7 col-md-7\">\n" +
    "          <span class=\"current-pick\" ng-class=\"{'no-pick': team.current_pick.warning == true}\" ng-show=\"team.active && team.started\">\n" +
    "            <i class=\"fa fa-warning fa-fw\" ng-show=\"team.current_pick.warning == true\" title=\"Warning\"></i>\n" +
    "            <i class=\"fa fa-lock fa-fw\" ng-show=\"team.current_pick.locked && team.current_pick.correct == null\" title=\"Pick locked\"></i>\n" +
    "            <i class=\"fa fa-unlock fa-fw\" ng-show=\"team.current_pick.locked == false && team.current_pick.correct == null\" title=\"Pick unlocked\"></i>\n" +
    "            <i class=\"fa fa-times fa-fw\" ng-show=\"team.current_pick.correct === false\" title=\"Pick wrong\"></i>\n" +
    "            <i class=\"fa fa-check fa-fw\" ng-show=\"team.current_pick.correct === true\" title=\"Pick correct\"></i>\n" +
    "            [ <span class=\"current-loser-name\">{{team.current_pick.name}}</span><span class=\"current-loser-abbrev\">{{team.current_pick.abbrev}}</span> ]\n" +
    "          </span>\n" +
    "          <span class=\"current-pick\" ng-show=\"team.active && !team.started\">Starts {{team.start_week}}</span>\n" +
    "          <span class=\"inactive-team current-pick\" ng-show=\"!team.active\">Team has been deactivated</span>\n" +
    "          <span class=\"badge\">{{team.correct_picks_count}} loser<span ng-show=\"team.correct_picks_count != 1\">s</span></span>\n" +
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
    "      <button type=\"button\" class=\"create-league-btn btn btn-primary\" ng-click=\"createLeague()\">Create League</button>\n" +
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
    "  <div class=\"input-group custom-search-form filter-league-join\">\n" +
    "    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" ng-model=\"leagueQuery\">\n" +
    "    <span class=\"input-group-btn\">\n" +
    "      <button class=\"btn btn-default\" type=\"button\"><span class=\"glyphicon glyphicon-search\"></span></button>\n" +
    "    </span>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"leagues-content\" ui-view=\"joinLeaguesContent\"></div>\n" +
    "\n" +
    "");
}]);

angular.module("modules/private/leagues/join/private/leagues.join.private.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/leagues/join/private/leagues.join.private.tpl.html",
    "<div class=\"private-leagues list-group\">\n" +
    "    <a ng-repeat=\"league in privateLeagues | filter:search:strict | offsetFilter:(currentLeaguePage-1)*leaguesPerPage | limitTo:leaguesPerPage\" ng-click=\"showLeague(league)\" class=\"list-group-item\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"league-name col-sm-5 col-md-5\">{{league.name}}<br><span class=\"private-league-meta\">Starts {{league.start_week}}</span></div>\n" +
    "        <div class=\"col-sm-7 col-md-7\">\n" +
    "          <span class=\"private-league-meta\">Commish: {{league.commish_names.join(', ')}}<br>{{league.format}}</span>\n" +
    "          <span class=\"badge\">{{league.team_count}} team<span ng-show=\"league.team_count !== 1\">s</span></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </a>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"private-league-pagination\" ng-show=\"privateLeagues.length > leaguesPerPage && (privateLeagues | filter:search:strict).length > 0\">\n" +
    "    <pagination boundary-links=\"true\" max-size=\"4\" total-items=\"(privateLeagues | filter:search:strict).length\" items-per-page=\"leaguesPerPage\" ng-model=\"currentLeaguePage\" class=\"pagination-md\" previous-text=\"&lsaquo;\" next-text=\"&rsaquo;\" first-text=\"&laquo;\" last-text=\"&raquo;\"></pagination>\n" +
    "</div>\n" +
    "<div class=\"alert alert-info\" ng-show=\"(privateLeagues | filter:search:strict).length == 0\">\n" +
    "  No leagues found\n" +
    "</div>\n" +
    "");
}]);

angular.module("modules/private/leagues/join/public/leagues.join.public.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/leagues/join/public/leagues.join.public.tpl.html",
    "<div class=\"public-leagues list-group\">\n" +
    "    <a ng-repeat=\"league in publicLeagues | filter:search:strict | offsetFilter:(currentLeaguePage-1)*leaguesPerPage | limitTo:leaguesPerPage\" ng-click=\"showLeague(league)\" class=\"list-group-item\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"league-name col-sm-5 col-md-5\">{{league.name}}<br><span class=\"public-league-meta\">Starts {{league.start_week}}</span></div>\n" +
    "            <div class=\"col-sm-7 col-md-7\">\n" +
    "                <span class=\"public-league-meta\">Commish: {{league.commish_names.join(', ')}}<br>{{league.format}}</span>\n" +
    "                <span class=\"badge\">{{league.team_count}} team<span ng-show=\"league.team_count !== 1\">s</span></span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </a>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"public-league-pagination\" ng-show=\"publicLeagues.length > leaguesPerPage && (publicLeagues | filter:search:strict).length > 0\">\n" +
    "    <pagination boundary-links=\"true\" max-size=\"4\" total-items=\"(publicLeagues |filter:search:strict).length\" items-per-page=\"leaguesPerPage\" ng-model=\"currentLeaguePage\" class=\"pagination-md\" previous-text=\"&lsaquo;\" next-text=\"&rsaquo;\" first-text=\"&laquo;\" last-text=\"&raquo;\"></pagination>\n" +
    "</div>\n" +
    "<div class=\"alert alert-info\" ng-show=\"(publicLeagues | filter:search:strict).length == 0\">\n" +
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
    "      <button type=\"button\" class=\"create-league-btn btn btn-primary\" ng-click=\"createLeague()\">Create League</button>\n" +
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
    "                  <i class=\"fa fa-unlock fa-fw\" title=\"My Public league\" ng-show=\"league.public\"></i>\n" +
    "                  <i class=\"fa fa-lock fa-fw\" title=\"My Private league\" ng-show=\"!league.public\"></i> {{league.name}}</div>\n" +
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
    "      <button type=\"button\" class=\"join-league-btn btn btn-primary\" ng-click=\"joinLeague()\">Join League</button>\n" +
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
    "          <i class=\"fa fa-unlock fa-fw\" title=\"My Public league\" ng-show=\"league.public\"></i>\n" +
    "          <i class=\"fa fa-lock fa-fw\" title=\"My Private league\" ng-show=\"!league.public\"></i> {{league.name}}</div>\n" +
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

angular.module("modules/private/play/leagues/play.leagues.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/play/leagues/play.leagues.tpl.html",
    "<div ng-show=\"leagues.length > 0\" class=\"leagues-container\">\n" +
    "  <div class=\"my-leagues list-group\">\n" +
    "    <a ng-repeat=\"league in leagues | managedLeagueFilter:leagueOptions | filter:search:strict | offsetFilter:(currentLeaguePage-1)*leaguesPerPage | limitTo:leaguesPerPage\" ng-click=\"viewLeague(league)\" class=\"list-group-item\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"league-name col-sm-5 col-md-5\">\n" +
    "          <i class=\"fa fa-comment fa-fw\" ng-show=\"!isCommish(league) && league.message.length > 0\" title=\"Has message from commish\"></i>\n" +
    "          <i class=\"fa fa-user fa-fw\" title=\"My league\" ng-show=\"isCommish(league)\"></i> {{league.name}}<br><span class=\"my-league-meta\">{{starts(league)}}</span>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-7 col-md-7\">\n" +
    "          <span class=\"my-league-meta\">Commish: {{league.commish_names.join(', ')}}<br>{{league.format}}</span>\n" +
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
    "      <button type=\"button\" class=\"join-league-btn btn btn-primary\" ng-click=\"joinLeague()\">Join League</button>\n" +
    "      <button type=\"button\" class=\"create-league-btn btn btn-primary\" ng-click=\"createLeague()\">Create League</button>\n" +
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
    "  <div class=\"input-group custom-search-form filter-team-league\">\n" +
    "    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" ng-model=\"query\">\n" +
    "    <span class=\"input-group-btn\">\n" +
    "      <button class=\"btn btn-default\" type=\"button\"><span class=\"glyphicon glyphicon-search\"></span></button>\n" +
    "    </span>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"play-content\" ui-view=\"playContent\"></div>\n" +
    "\n" +
    "");
}]);

angular.module("modules/private/play/teams/play.teams.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/play/teams/play.teams.tpl.html",
    "<div ng-show=\"teams.length > 0\" class=\"leagues-container\">\n" +
    "  <div class=\"my-teams list-group\">\n" +
    "    <a class=\"list-group-item\" ng-class=\"{'inactive': !team.active || !team.alive}\" ng-repeat=\"team in teams | orderBy:[inPlay, 'name'] | aliveTeamFilter:teamOptions | filter:search:strict | offsetFilter:(currentTeamPage-1)*teamsPerPage | limitTo:teamsPerPage\" ng-click=\"showTeam(team)\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"league-name col-sm-5 col-md-5\">\n" +
    "          <i class=\"fa fa-comment fa-fw\" ng-show=\"team.message.length > 0\" title=\"Has message from commish\"></i>\n" +
    "          <span ng-class=\"{'dead-team-name': !team.active || !team.alive}\">{{team.name}}</span><br><span class=\"team-league\">{{team.league.name}}</span></div>\n" +
    "        <div class=\"col-sm-7 col-md-7\">\n" +
    "          <span class=\"current-pick\" ng-class=\"{'no-pick': team.current_pick.warning == true}\" ng-show=\"team.active && team.started\">\n" +
    "            <i class=\"fa fa-warning fa-fw\" ng-show=\"team.current_pick.warning == true\" title=\"Warning\"></i>\n" +
    "            <i class=\"fa fa-lock fa-fw\" ng-show=\"team.current_pick.locked && team.current_pick.correct == null\" title=\"Pick locked\"></i>\n" +
    "            <i class=\"fa fa-unlock fa-fw\" ng-show=\"team.current_pick.locked == false && team.current_pick.correct == null\" title=\"Pick unlocked\"></i>\n" +
    "            <i class=\"fa fa-times fa-fw\" ng-show=\"team.current_pick.correct === false\" title=\"Pick wrong\"></i>\n" +
    "            <i class=\"fa fa-check fa-fw\" ng-show=\"team.current_pick.correct === true\" title=\"Pick correct\"></i>\n" +
    "            [ <span class=\"current-loser-name\">{{team.current_pick.name}}</span><span class=\"current-loser-abbrev\">{{team.current_pick.abbrev}}</span> ]\n" +
    "            <br>\n" +
    "            <span class=\"current-pick\">{{team.league.format}}</span>\n" +
    "          </span>\n" +
    "          <span class=\"current-pick\" ng-show=\"team.active && !team.started\">Starts {{team.start_week}}<br>{{team.league.format}}</span>\n" +
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

angular.module("modules/private/team/pick/many/team.pick.many.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/team/pick/many/team.pick.many.tpl.html",
    "<hr>\n" +
    "<div ng-repeat-start=\"game in games\" class=\"week-games list-group\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-sm-12 col-md-12\"><h5 class=\"start-date\"><small>{{starts(game)}}</small></h5></div>\n" +
    "  </div>\n" +
    "  <div class=\"row game-squads\">\n" +
    "    <div class=\"col-sm-6 col-md-6\" ng-repeat=\"squad in game.squads\">\n" +
    "      <a ng-click=\"togglePick(game, squad)\" class=\"list-group-item\" ng-class=\"{'disabled': isDisabled(game, squad)}\">\n" +
    "        <div class=\"row game-row\">\n" +
    "          <span><span ng-show=\"($index === 1)\">@ </span>{{squad.name}} <span class=\"record-score\" ng-show=\"!game.complete\">[ {{squad.record}} ]</span><span class=\"record-score\" ng-show=\"game.complete\">[ {{getScore(game, $index)}} ] <span ng-show=\"($index === 1) && game.overtime === true\">OT</span></span></span>\n" +
    "          <i class=\"fa fa-{{pickStatus(game, squad)}} pull-right\"></i>\n" +
    "        </div>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div ng-repeat-end></div>\n" +
    "<button type=\"button\" class=\"save-pick-btn btn btn-primary\" ng-show=\"isCoach(team)\" ng-disabled=\"!savePicksEnabled\" ng-click=\"savePicks()\">Save Picks</button>\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("modules/private/team/pick/one/team.pick.one.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/team/pick/one/team.pick.one.tpl.html",
    "<div class=\"team-message alert alert-warning\" ng-show=\"isCoach(team) && isCurrentPickLocked()\"><p class=\"team-message-text\">Your pick for {{week.name}} ({{week.type}}) is locked [ {{currentPick.squad.name}} ]</p></div>\n" +
    "<hr>\n" +
    "<div ng-repeat-start=\"game in games\" class=\"week-games list-group\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-sm-12 col-md-12\"><h5 class=\"start-date\"><small>{{starts(game)}}</small></h5></div>\n" +
    "  </div>\n" +
    "  <div class=\"row game-squads\">\n" +
    "    <div class=\"col-sm-6 col-md-6\" ng-repeat=\"squad in game.squads\">\n" +
    "      <a ng-click=\"makePick(game, squad)\" class=\"list-group-item\" ng-class=\"{'disabled': isDisabled(game, squad)}\">\n" +
    "        <div class=\"row game-row\">\n" +
    "          <span ng-class=\"{'invalid-squad': hasSquadBeenUsed(game, squad)}\">{{squad.name}} <span class=\"record-score\" ng-show=\"!game.complete\">[ {{squad.record}} ]</span><span class=\"record-score\" ng-show=\"game.complete\">[ {{getScore(game, $index)}} ] <span ng-show=\"($index === 1) && game.overtime === true\">OT</span></span></span>\n" +
    "          <i class=\"fa fa-{{pickStatus(game, squad)}} pull-right\"></i>\n" +
    "        </div>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div ng-repeat-end></div>\n" +
    "\n" +
    "");
}]);

angular.module("modules/private/team/pick/team.pick.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/team/pick/team.pick.tpl.html",
    "<div class=\"make-picks-header-row row\">\n" +
    "  <div class=\"col-sm-7 col-md-7\">\n" +
    "    <h3 class=\"week-display\">\n" +
    "      {{week.name}}\n" +
    "    </h3>\n" +
    "    <h6><a ng-click=\"showTeam(team)\"><i class=\"fa fa-chevron-left fa-fw\"></i> <span class=\"team-league-name\">{{team.name}}</span></a></h6>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-5 col-md-5\">\n" +
    "    <button type=\"button\" class=\"save-pick-btn btn btn-primary\" ng-show=\"team.league.max_picks_per_week != 1 && isCoach(team)\" ng-disabled=\"!savePicksEnabled\" ng-click=\"savePicks()\">Save Picks</button>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"team-message alert alert-info\" ng-show=\"isCoach(team)\"><p class=\"team-message-text\"><strong>{{pickMessage(team, week)}}</strong></p></div>\n" +
    "<div ui-view=\"pickContent\" class=\"pick-content\"></div>\n" +
    "\n" +
    "");
}]);

angular.module("modules/private/team/team.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/team/team.tpl.html",
    "<div ui-view=\"teamContent\" class=\"team-content\"></div>\n" +
    "");
}]);

angular.module("modules/private/team/view/picks/team.view.picks.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/team/view/picks/team.view.picks.tpl.html",
    "<div class=\"losers-tab\">\n" +
    "  <ul class=\"nav nav-tabs\">\n" +
    "    <li class=\"active\"><a>Losers [ {{correctPickCount((picks | weekPicksFilter:selectedWeekSlug))}} ]</a></li>\n" +
    "  </ul>\n" +
    "  <div class=\"make-pick-btn-container\">\n" +
    "    <button type=\"button\" class=\"make-pick-btn btn btn-primary\" ng-show=\"isCoach(teamData)\" ng-click=\"makePick(teamData)\" ng-disabled=\"teamData.current_pick.locked || !teamData.started\"><span>Pick Loser</span><span ng-show=\"teamData.league.max_picks_per_week != 1\">s</span></button>\n" +
    "  </div>\n" +
    "  <div class=\"weeks\">\n" +
    "    <select class=\"form-control\" ng-change=\"changeWeek(selectedWeekSlug)\" ng-model=\"selectedWeekSlug\" ng-options=\"leagueWeek.slug as leagueWeek.display for leagueWeek in leagueWeeks\">\n" +
    "      <option value=\"\">All Weeks</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"team-container\" style=\"clear:both;\">\n" +
    "  <div class=\"team-picks list-group\">\n" +
    "    <a ng-repeat=\"pick in picks | weekPicksFilter:selectedWeekSlug\" class=\"team-pick list-group-item\" ng-click=\"makePick(teamData, pick)\" ng-class=\"{'locked': !isCoach(teamData) || pick.locked, 'incorrect': pick.correct === false}\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"week-name col-sm-7 col-md-7\">\n" +
    "          <i class=\"fa fa-{{pickStatus(pick)}} fa-fw pick-icon\"></i> <span class=\"pick-squad\"><span class=\"pick-squad-name\">[ {{pick.squad.name}} ]</span><span class=\"pick-squad-abbrev\">[ {{pick.squad.abbrev}} ]</span></span> <span class=\"game-start\">{{pick.week_type}} | {{pick.week_name}}<span ng-show=\"pick.game.start.length > 0\"> | {{pick.game.start}}</span></span>\n" +
    "        </div>\n" +
    "        <div class=\"game-column col-sm-5 col-md-5\">\n" +
    "          <span class=\"game\">{{pick.game.display}}</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </a>\n" +
    "  </div>\n" +
    "  <div class=\"no-picks-alert alert alert-info\" ng-show=\"(picks | weekPicksFilter:selectedWeekSlug).length == 0\">\n" +
    "    No picks\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("modules/private/team/view/team.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/team/view/team.view.tpl.html",
    "<div class=\"alert alert-danger\" ng-show=\"!teamData.active\">This team has been deactivated by the commish and will be unable to pick losers. <a class=\"alert-link\" ng-click=\"contactCommish(teamData)\">Contact the commish</a> if you have questions.</div>\n" +
    "<div class=\"alert alert-danger\" ng-show=\"teamData.active && teamData.alive && teamData.started && hasNoPick(teamData)\">No loser<span ng-show=\"teamData.league.max_picks_per_week != 1\">s</span> picked for {{teamData.current_week_name}}. <span ng-show=\"isCoach(teamData)\"><a class=\"alert-link\" ng-click=\"makePick(teamData)\">Pick</a> now.</span></div>\n" +
    "<div class=\"alert alert-danger\" ng-show=\"teamData.active && !teamData.alive\">This team is DEAD. So sorry.</div>\n" +
    "<div class=\"alert alert-warning\" ng-show=\"isCoach(teamData) && teamData.active && !teamData.started\">You can pick losers when the league starts - {{teamData.start_week_display}}</div>\n" +
    "<div class=\"header-row row\">\n" +
    "  <div class=\"col-sm-7 col-md-7\">\n" +
    "    <div class=\"btn-group teams-dropdown\" dropdown is-open=\"teamDropdown.isopen\">\n" +
    "      <button type=\"button\" class=\"teams-btn-link btn btn-link dropdown-toggle\" ng-disabled=\"!isCoach(teamData) && !isCommish(teamData) && !isAdmin()\">\n" +
    "        <i class=\"fa fa-check fa-fw\" ng-show=\"isCommish(teamData) && teamData.paid == true\" title=\"Paid\"></i> <strong><span class=\"team-name\" ng-class=\"{'team-inactive': !teamData.active || !teamData.alive, 'disabled': !isCoach(teamData) && !isCommish(teamData) && !isAdmin()}\">{{teamData.name}}</span> <span ng-show=\"isCoach(teamData) || isCommish(teamData) || isAdmin()\" class=\"caret\"></span></strong>\n" +
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
    "        <li ng-repeat=\"team in leagueTeams\" ng-show=\"team.id != teamData.id\"><a ng-click=\"showTeam(team)\"><span class=\"other-team-name\" ng-class=\"{'team-inactive': !team.active || !team.alive}\">{{team.name}}</span> <span class=\"other-team-pick\">{{team.current_pick.abbrev}}</span></a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "    <h6><a ng-click=\"showLeague(teamData)\"><i class=\"fa fa-chevron-left fa-fw\"></i> <span class=\"team-league-name\">{{teamData.league.name}}</span></a></h6>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-5 col-md-5 hidden-xs\">\n" +
    "    <h3 class=\"team-meta\"><small>Coach [ {{teamData.coach_names.join(', ')}} ]<br>{{teamData.league.format}}</small></h3>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<hr>\n" +
    "<div class=\"team-message\" ng-show=\"isCommish(teamData) || isCoach(teamData)\">\n" +
    "  <accordion close-others=\"true\">\n" +
    "    <accordion-group is-open=\"userModel.teamMessageOpen[teamData.id]\">\n" +
    "      <accordion-heading>\n" +
    "        <i class=\"fa fa-comment fa-fw\"></i> Messages to team [ <span ng-show=\"teamData.message.length > 0\">1</span><span ng-show=\"!teamData.message || teamData.message.length == 0\">0</span> ] <i class=\"pull-right glyphicon\" ng-class=\"{'glyphicon-chevron-down': userModel.teamMessageOpen[teamData.id], 'glyphicon-chevron-right': !userModel.teamMessageOpen[teamData.id]}\"></i>\n" +
    "      </accordion-heading>\n" +
    "      <p class=\"team-message-text\" ng-show=\"!teamData.message || teamData.message.length == 0\">no messages</p><p class=\"team-message-text\" ng-show=\"teamData.message.length > 0\" ng-bind-html=\"teamData.message | linky:'_blank'\"></p> <a class=\"alert-link\" ng-show=\"isCommish(teamData)\" ng-click=\"updateMessage(teamData)\">[ edit ]</a><a class=\"alert-link\" ng-show=\"!isCommish(teamData)\" ng-click=\"contactCommish(teamData)\">[ contact commish ]</a>\n" +
    "    </accordion-group>\n" +
    "  </accordion>\n" +
    "  <hr>\n" +
    "</div>\n" +
    "<div ui-view=\"teamPicksContent\" class=\"picks-content\"></div>");
}]);

angular.module("modules/private/teams/alive/teams.alive.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/teams/alive/teams.alive.tpl.html",
    "<div class=\"alive-teams list-group\">\n" +
    "    <a ng-repeat=\"team in aliveTeams | filter:search:strict | offsetFilter:(currentTeamPage-1)*teamsPerPage | limitTo:teamsPerPage\" ng-click=\"showTeam(seasonId, team)\" class=\"list-group-item\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"team-name col-sm-6 col-md-6\"><i class=\"fa fa-comment fa-fw\" ng-show=\"team.message.length > 0\" title=\"Has message from commish\"></i><i class=\"fa fa-times fa-fw\" title=\"Deactivated Team\" ng-show=\"!team.active\"></i> <span ng-class=\"{'inactive-team-name': !team.active}\">{{team.name}}</span> <span class=\"team-league\">{{team.league.name}}</span></div>\n" +
    "            <div class=\"col-sm-6 col-md-6\">\n" +
    "                <span class=\"current-pick\" ng-show=\"team.active\">Pick: {{team.current_pick.name}}</span>\n" +
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
    "                <span class=\"current-pick no-pick\" ng-show=\"team.active\">Pick: {{team.current_pick.name}}</span>\n" +
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
    "    <p class=\"lead\">NFL, NBA or NHL survivor and pick'em leagues are waiting for you. Join anytime for free.</p>\n" +
    "  <div>\n" +
    "    <a class=\"cta btn btn-primary btn-lg\" role=\"button\" ng-click=\"joinLeague()\">Join League</a>\n" +
    "  </div>\n" +
    "  <div>\n" +
    "    <a class=\"cta btn btn-primary btn-lg\" role=\"button\" ng-click=\"createLeague()\">Create League</a>\n" +
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
    require('./modules/private/team/view/picks').name,
    require('./modules/private/team/edit').name,
    require('./modules/private/team/message').name,
    require('./modules/private/team/pick').name,
    require('./modules/private/team/pick/one').name,
    require('./modules/private/team/pick/many').name,

    // teams
    require('./modules/private/teams').name,
    require('./modules/private/teams/alive').name,
    require('./modules/private/teams/dead').name,

    // play
    require('./modules/private/play').name,
    require('./modules/private/play/leagues').name,
    require('./modules/private/play/teams').name,

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
                var url = $location.url();
                message = rejection.data.message;
                $timeout(function () {
                  userModel.resetUser();
                    if ($location.path() == '/signin') {
                        messageModel.setMessage(message, false);
                    } else {
                        messageModel.setMessage(message, true);
                        $location.url('/signin').search({ redirect: encodeURIComponent(url) });
                    }
                }, 200);
          } else if (rejection.status === 404) {
              message = { type: 'danger', content: 'Houston, we have a problem. Page not found.' };
              $timeout(function () {
                  messageModel.setMessage(message, true);
                  $location.url('/');
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










},{"app-templates":"0VoVTq","./modules/public/home":2,"./modules/public/faq":3,"./modules/public/abuse":4,"./modules/public/signin":5,"./modules/public/register":6,"./modules/public/register/terms":7,"./modules/private/user":8,"./modules/private/user/reset":9,"./modules/private/league":10,"./modules/private/league/new":11,"./modules/private/league/view":12,"./modules/private/league/edit":13,"./modules/private/league/contact":14,"./modules/private/league/message":15,"./modules/private/league/join":16,"./modules/private/league/invite":17,"./modules/private/league/invite/request":18,"./modules/private/leagues":19,"./modules/private/leagues/join":20,"./modules/private/leagues/join/public":21,"./modules/private/leagues/join/private":22,"./modules/private/leagues/manage":23,"./modules/private/leagues/my":24,"./modules/private/team":25,"./modules/private/team/view":26,"./modules/private/team/view/picks":27,"./modules/private/team/edit":28,"./modules/private/team/message":29,"./modules/private/team/pick":30,"./modules/private/team/pick/one":31,"./modules/private/team/pick/many":32,"./modules/private/teams":33,"./modules/private/teams/alive":34,"./modules/private/teams/dead":35,"./modules/private/play":36,"./modules/private/play/leagues":37,"./modules/private/play/teams":38,"./modules/private/admin":39,"./modules/private/admin/game/edit":40,"./modules/private/admin/game/new":41,"./modules/private/admin/seasons":42,"./modules/private/admin/seasons/season":43,"./modules/private/admin/seasons/season/new":44,"./modules/private/admin/week":45,"./modules/private/admin/week/edit":46,"./common/modules/header":47,"./common/modules/message":48,"./common/modules/footer":49,"./common/modules/confirm":50,"./common/models":51,"./common/api":52,"./common/command":53,"./common/service/application":54,"./common/service/utils":55,"./common/directives/focus":56,"./common/directives/formattedDate":57,"./common/directives/match":58,"./common/directives/rcSubmit":59,"./common/directives/rcVerifySet":60,"./common/directives/requiredPattern":61,"./common/directives/selectOnClick":62,"./common/filters":63}],51:[function(require,module,exports){
/**
 * Define the application models
 */
module.exports = angular.module('loghApp.models', [])
    //models
    .service('userModel', require('./UserModel'))
    .service('messageModel', require('./MessageModel'))
    .service('seasonModel', require('./SeasonModel'))
;
},{"./UserModel":64,"./MessageModel":65,"./SeasonModel":66}],52:[function(require,module,exports){
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

},{"./ApiConfig":67,"./GameService":68,"./LeagueService":69,"./PickService":70,"./SeasonService":71,"./SquadService":72,"./TeamService":73,"./UserService":74,"./WeekService":75}],53:[function(require,module,exports){
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


},{"./session/SigninCommand":76,"./user/GetCurrentUserCommand":77,"./session/SignoutCommand":78}],63:[function(require,module,exports){
/**
 * Define the application filters
 */
module.exports = angular.module('loghApp.filters', [])
    //filters
    .filter('offsetFilter', require('./OffsetFilter'))
    .filter('activeTeamFilter', require('./ActiveTeamFilter'))
    .filter('aliveTeamFilter', require('./AliveTeamFilter'))
    .filter('managedLeagueFilter', require('./ManagedLeagueFilter'))
    .filter('timeFilter', require('./TimeFilter'))
    .filter('weekPicksFilter', require('./WeekPicksFilter'))
;

},{"./OffsetFilter":79,"./ActiveTeamFilter":80,"./AliveTeamFilter":81,"./ManagedLeagueFilter":82,"./TimeFilter":83,"./WeekPicksFilter":84}],2:[function(require,module,exports){

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
},{"./HomeController":85}],3:[function(require,module,exports){
module.exports = angular.module('loghApp.faq', [])
  .controller('FaqController', require('./FaqController'));

},{"./FaqController":86}],4:[function(require,module,exports){
module.exports = angular.module('loghApp.abuse', [])
  .controller('AbuseController', require('./AbuseController'));

},{"./AbuseController":87}],5:[function(require,module,exports){
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

},{"./SigninController":88}],6:[function(require,module,exports){
module.exports = angular.module('loghApp.register', [])
  .controller('RegisterController', require('./RegisterController'));

},{"./RegisterController":89}],8:[function(require,module,exports){
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

},{"./UserController":90}],10:[function(require,module,exports){
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

},{"./LeagueController":91}],19:[function(require,module,exports){
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


},{"./LeaguesController":92}],25:[function(require,module,exports){
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

},{"./TeamController":93}],33:[function(require,module,exports){
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


},{"./TeamsController":94}],36:[function(require,module,exports){
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


},{"./PlayController":95}],39:[function(require,module,exports){
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

},{"./AdminController":96}],47:[function(require,module,exports){
module.exports = angular.module('loghApp.header', [])
    .controller('HeaderController', require('./HeaderController'))
},{"./HeaderController":97}],48:[function(require,module,exports){
module.exports = angular.module('loghApp.message', [])
    .controller('MessageController', require('./MessageController'));
},{"./MessageController":98}],49:[function(require,module,exports){
module.exports = angular.module('loghApp.footer', [])
  .controller('FooterController', require('./FooterController'))
},{"./FooterController":99}],50:[function(require,module,exports){
module.exports = angular.module('logh.confirm', [])
  .controller('ConfirmController', require('./ConfirmController'));

},{"./ConfirmController":100}],54:[function(require,module,exports){
/**
 * Define the application service
 */
module.exports = angular.module('logh.application', [])
    .service('applicationService', require('./ApplicationService'));
},{"./ApplicationService":101}],55:[function(require,module,exports){
module.exports = angular.module('logh.utils', [])
  .service('dateUtils', require('./DateUtils'));
},{"./DateUtils":102}],56:[function(require,module,exports){
//application directives
module.exports = angular.module('loghApp.directives.focus',[])
    .directive('loghFocus', require('./FocusDirective'))
;

},{"./FocusDirective":103}],57:[function(require,module,exports){
//application directives
module.exports = angular.module('logh.directives.formattedDate',[])
  .directive('formattedDate', require('./FormattedDateDirective'))
;

},{"./FormattedDateDirective":104}],58:[function(require,module,exports){
//application directives
module.exports = angular.module('loghApp.directives.match',[])
    .directive('match', require('./MatchDirective'))
;

},{"./MatchDirective":105}],59:[function(require,module,exports){
//application directives
module.exports = angular.module('logh.directives.rcSubmit',[])
  .directive('rcSubmit', require('./RCSubmitDirective'));

},{"./RCSubmitDirective":106}],60:[function(require,module,exports){
//application directives
module.exports = angular.module('logh.directives.rcVerifySet',[])
  .directive('rcVerifySet', require('./RCVerifySetDirective'));

},{"./RCVerifySetDirective":107}],61:[function(require,module,exports){
//application directives
module.exports = angular.module('loghApp.directives.requiredPattern',[])
    .directive('rpattern', require('./RequiredPatternDirective'))
;

},{"./RequiredPatternDirective":108}],62:[function(require,module,exports){
//application directives
module.exports = angular.module('loghApp.directives.selectOnClick',[])
  .directive('selectOnClick', require('./SelectOnClickDirective'))
;

},{"./SelectOnClickDirective":109}],7:[function(require,module,exports){
module.exports = angular.module('loghApp.register.terms', [])
  .controller('RegisterTermsController', require('./RegisterTermsController'));

},{"./RegisterTermsController":110}],9:[function(require,module,exports){
module.exports = angular.module('loghApp.user.reset', [])
  .controller('UserResetController', require('./UserResetController'));

},{"./UserResetController":111}],11:[function(require,module,exports){
module.exports = angular.module('loghApp.league.new', [])
  .controller('NewLeagueController', require('./NewLeagueController'));

},{"./NewLeagueController":112}],12:[function(require,module,exports){
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
            return teamService.getAllLeagueTeams({ seasonId: league.data.season_id, leagueId: league.data.id, weekSlug: $stateParams.week });
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });

},{"./ViewLeagueController":113}],13:[function(require,module,exports){
module.exports = angular.module('loghApp.league.edit', [])
  .controller('EditLeagueController', require('./EditLeagueController'));

},{"./EditLeagueController":114}],14:[function(require,module,exports){
module.exports = angular.module('loghApp.league.contact', [])
  .controller('LeagueContactController', require('./LeagueContactController'));

},{"./LeagueContactController":115}],15:[function(require,module,exports){
module.exports = angular.module('loghApp.league.message', [])
  .controller('LeagueMessageController', require('./LeagueMessageController'));

},{"./LeagueMessageController":116}],16:[function(require,module,exports){
module.exports = angular.module('loghApp.league.join', [])
  .controller('LeagueJoinController', require('./LeagueJoinController'));

},{"./LeagueJoinController":117}],17:[function(require,module,exports){
module.exports = angular.module('loghApp.league.invite', [])
  .controller('LeagueInviteController', require('./LeagueInviteController'));

},{"./LeagueInviteController":118}],20:[function(require,module,exports){
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


},{"./JoinLeaguesController":119}],23:[function(require,module,exports){
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


},{"./ManageLeaguesController":120}],24:[function(require,module,exports){
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


},{"./MyLeaguesController":121}],26:[function(require,module,exports){
module.exports = angular.module('loghApp.team.view', [])
  .controller('ViewTeamController', require('./ViewTeamController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.team.view', {
        url: '/{teamId}',
        abstract: true,
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
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });

},{"./ViewTeamController":122}],28:[function(require,module,exports){
module.exports = angular.module('loghApp.team.edit', [])
  .controller('EditTeamController', require('./EditTeamController'));

},{"./EditTeamController":123}],29:[function(require,module,exports){
module.exports = angular.module('loghApp.team.message', [])
  .controller('TeamMessageController', require('./TeamMessageController'));

},{"./TeamMessageController":124}],30:[function(require,module,exports){
module.exports = angular.module('loghApp.team.pick', [])
  .controller('TeamPickController', require('./TeamPickController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.team.pick', {
        url: '/{teamId}',
        abstract: true,
        views: {
          teamContent: {
            templateUrl: 'modules/private/team/pick/team.pick.tpl.html',
            controller: 'TeamPickController'
          }
        },
        resolve: {
          team: function($stateParams, teamService) {
            return teamService.getTeam($stateParams.leagueId, $stateParams.teamId);
          },
          week: function($stateParams, weekService) {
            return weekService.getCurrentWeek($stateParams.seasonId, $stateParams.leagueId);
          },
          games: function($stateParams, gameService) {
            return gameService.getCurrentGames($stateParams.leagueId);
          },
          picks: function($stateParams, pickService) {
            return pickService.getSelectedPicks({ teamId: $stateParams.teamId });
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });

},{"./TeamPickController":125}],34:[function(require,module,exports){
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


},{"./AliveTeamsController":126}],35:[function(require,module,exports){
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


},{"./DeadTeamsController":127}],37:[function(require,module,exports){
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


},{"./PlayLeaguesController":128}],38:[function(require,module,exports){
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


},{"./PlayTeamsController":129}],42:[function(require,module,exports){
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

},{"./AdminSeasonsController":130}],45:[function(require,module,exports){
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

},{"./AdminWeekController":131}],18:[function(require,module,exports){
module.exports = angular.module('loghApp.league.invite.request', [])
  .controller('LeagueInviteRequestController', require('./LeagueInviteRequestController'));

},{"./LeagueInviteRequestController":132}],21:[function(require,module,exports){
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


},{"./PublicLeaguesController":133}],22:[function(require,module,exports){
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


},{"./PrivateLeaguesController":134}],27:[function(require,module,exports){
module.exports = angular.module('loghApp.team.view.picks', [])
  .controller('ViewTeamPicksController', require('./ViewTeamPicksController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.team.view.picks', {
        url: '?week',
        views: {
          teamPicksContent: {
            templateUrl: 'modules/private/team/view/picks/team.view.picks.tpl.html',
            controller: 'ViewTeamPicksController'
          }
        },
        resolve: {
          leagueWeeks: function(team, weekService, $stateParams) {
            return weekService.getLeagueWeeks({ seasonId: $stateParams.seasonId, leagueId: $stateParams.leagueId });
          },
          picks: function(team, pickService) {
            return pickService.getPicks({ teamId: team.data.id });
          }
        },
        reloadOnSearch: false
      });
    $urlRouterProvider.otherwise('/');
  });

},{"./ViewTeamPicksController":135}],31:[function(require,module,exports){
module.exports = angular.module('loghApp.team.pick.one', [])
  .controller('TeamPickOneController', require('./TeamPickOneController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.team.pick.one', {
        url: '/pick',
        views: {
          pickContent: {
            templateUrl: 'modules/private/team/pick/one/team.pick.one.tpl.html',
            controller: 'TeamPickOneController'
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });

},{"./TeamPickOneController":136}],32:[function(require,module,exports){
module.exports = angular.module('loghApp.team.pick.many', [])
  .controller('TeamPickManyController', require('./TeamPickManyController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.team.pick.many', {
        url: '/picks',
        views: {
          pickContent: {
            templateUrl: 'modules/private/team/pick/many/team.pick.many.tpl.html',
            controller: 'TeamPickManyController'
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });

},{"./TeamPickManyController":137}],40:[function(require,module,exports){
module.exports = angular.module('loghApp.admin.game.edit', [])
  .controller('AdminGameEditController', require('./AdminGameEditController'));

},{"./AdminGameEditController":138}],41:[function(require,module,exports){
module.exports = angular.module('loghApp.admin.game.new', [])
  .controller('AdminGameNewController', require('./AdminGameNewController'));

},{"./AdminGameNewController":139}],43:[function(require,module,exports){
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

},{"./AdminSeasonController":140}],46:[function(require,module,exports){
module.exports = angular.module('loghApp.admin.week.edit', [])
  .controller('AdminWeekEditController', require('./AdminWeekEditController'));

},{"./AdminWeekEditController":141}],44:[function(require,module,exports){
module.exports = angular.module('loghApp.admin.season.new', [])
  .controller('AdminSeasonNewController', require('./AdminSeasonNewController'));

},{"./AdminSeasonNewController":142}],64:[function(require,module,exports){

var UserModel = function($rootScope, $window, $log) {

    var user = {};
    user.loaded = false;
    user.id = '';
    user.email = '';
    user.first_name = '';
    user.last_name = '';
    user.admin = false;
    this.user = user;

    var teamMessageOpen = {};
    this.teamMessageOpen = teamMessageOpen;

    var leagueMessageOpen = {};
    this.leagueMessageOpen = leagueMessageOpen;

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
},{}],65:[function(require,module,exports){

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

},{}],66:[function(require,module,exports){
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

  this.getCurrentSeason = function() {
    return model.currentSeasons[model.currentSeasons.length - 1];
  };

  this.setSeasons = function(seasonsArray) {
    if (!angular.isArray(seasonsArray)) return;
    model.seasons = seasonsArray;
    model.currentSeasons = _.filter(seasonsArray, function(season) {
      return season.current;
    });
    model.startedSeasons = _.filter(seasonsArray, function(season) {
      return season.started;
    });
    model.setSelectedSeasonId(model.getCurrentSeason().id);
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
},{}],67:[function(require,module,exports){
/*
 *  Global config for remote services
 */

var ApiConfig =  {
    baseURL: '/api/'
};

module.exports = ApiConfig;

},{}],68:[function(require,module,exports){
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
},{}],69:[function(require,module,exports){
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
                $location.url('/season/' + leagueParams.season_id + '/league/' + data.league_id);
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
},{}],70:[function(require,module,exports){
var PickService = function($http, $log, $q, apiConfig, messageModel) {

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

  this.getSelectedPicks = function(params) {
    var apiUrl = apiConfig.baseURL + "teams/" + params.teamId + "/picks/selected";

    var promise = $http.get(apiUrl)
      .success(function(data) {
        $log.debug("PickService: getSelectedPicks success");
        return data;
      })
      .error(function(data) {
        $log.debug("PickService: getSelectedPicks failed");
        return data;
      });

    return promise;
  };

  this.savePick = function(pickParams) {
    var deferred = $q.defer(),
        apiUrl = apiConfig.baseURL + "teams/" + pickParams.team_id + "/picks";

    $http.post(apiUrl, { pick: pickParams })
      .success(function(data) {
        $log.debug("PickService: savePick success");
        messageModel.setMessage(data.message, true);
        deferred.resolve(data);
      })
      .error(function(data) {
        $log.debug("PickService: savePick failed");
        messageModel.setMessage(data.message, true);
        deferred.reject();
      });

    return deferred.promise;
  };

  this.savePicks = function(teamId, picks) {
    var deferred = $q.defer(),
        apiUrl = apiConfig.baseURL + "teams/" + teamId + "/picks/many";

    $http.post(apiUrl, { picks: picks })
      .success(function(data) {
        $log.debug("PickService: savePicks success");
        messageModel.setMessage(data.message, true);
        deferred.resolve(data);
      })
      .error(function(data) {
        $log.debug("PickService: savePicks failed");
        messageModel.setMessage(data.message, true);
        deferred.reject();
      });

    return deferred.promise;
  };

};

PickService.$inject = ['$http', '$log', '$q', 'apiConfig', 'messageModel'];
module.exports = PickService;
},{}],71:[function(require,module,exports){
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
},{}],73:[function(require,module,exports){
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
        if (params.weekSlug) {
            apiUrl += "&week_slug=" + params.weekSlug;
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
                $location.url(newTeamPath); // navigate to the new team page
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
},{}],72:[function(require,module,exports){
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
},{}],74:[function(require,module,exports){
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
                    $location.url(redirect);
                    if (['/', '/signin', '/register'].indexOf(redirect) !== -1) {
                      userService.getCurrentUser();
                    }
                } else  {
                  $location.url('/season/' + seasonModel.selectedSeasonId + '/my/teams');
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
                    $location.url('/');
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
                    $location.url(redirect);
                    if (['/', '/signin', '/register'].indexOf(redirect) !== -1) {
                      userService.getCurrentUser();
                    }
                } else  {
                  $location.url('/season/' + seasonModel.selectedSeasonId + '/my/teams');
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
},{}],75:[function(require,module,exports){
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

    this.getCurrentWeek = function(seasonId, leagueId) {
        var promise = $http.get(apiConfig.baseURL + "seasons/" + seasonId + "/weeks/current?league_id=" + leagueId)
            .success(function(data) {
                $log.debug("WeekService: getCurrentWeek success");
                return data;
            })
            .error(function(data) {
                $log.debug("WeekService: getCurrentWeek failed");
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

},{}],76:[function(require,module,exports){
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

},{}],77:[function(require,module,exports){

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
},{}],78:[function(require,module,exports){
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

},{}],79:[function(require,module,exports){

var OffsetFilter = function($log) {
    return function(input, start) {
        start = parseInt(start, 10);
        return input.slice(start);
    };
};

OffsetFilter.$inject = ['$log'];
module.exports = OffsetFilter;

},{}],80:[function(require,module,exports){
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

},{}],81:[function(require,module,exports){
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

},{}],82:[function(require,module,exports){
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

},{}],83:[function(require,module,exports){

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

},{}],84:[function(require,module,exports){
var WeekPicksFilter = function() {
  return function(picks, weekSlug) {
    if (!weekSlug) {
      return picks;
    }
    var weekPicks = _.filter(picks, function(pick) {
      return pick.week_slug == weekSlug;
    });
    return weekPicks;
  };
};

WeekPicksFilter.$inject = [];
module.exports = WeekPicksFilter;

},{}],85:[function(require,module,exports){
var HomeController = function($scope, $log, $location, $modal, leagueService, messageModel, seasonModel) {

  $scope.selectedSeasonId = seasonModel.selectedSeasonId;

  $scope.createLeague = function(seasonId) {
        var modalInstance = $modal.open({
            templateUrl: 'modules/private/league/new/league.new.tpl.html',
            controller: 'NewLeagueController'
          });

      modalInstance.result.then(function(league) {
        leagueService.createLeague(league);
      }, function () {
        $log.debug('Create league modal dismissed...');
        messageModel.setMessage({ type: 'warning', content: 'Create league cancelled' }, false);
      });
    };

    $scope.joinLeague = function() {
      var season = seasonModel.getCurrentSeason();
      $location.url('/season/' + season.id + '/leagues/public');
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
      $log.debug("home controller");
    };
    init();
};

HomeController.$inject = ['$scope', '$log', '$location', '$modal', 'leagueService', 'messageModel', 'seasonModel'];
module.exports = HomeController;

},{}],86:[function(require,module,exports){
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

},{}],87:[function(require,module,exports){
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

},{}],88:[function(require,module,exports){
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

},{}],89:[function(require,module,exports){
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

},{}],90:[function(require,module,exports){

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

},{}],91:[function(require,module,exports){

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

},{}],92:[function(require,module,exports){
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


},{}],93:[function(require,module,exports){
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

},{}],94:[function(require,module,exports){
var TeamsController = function($scope, $log, $state, $location, $stateParams) {

    $scope.seasonId = $stateParams.seasonId;

    // pagination
    $scope.currentTeamPage = 1;
    $scope.teamsPerPage = 100;

    $scope.isAliveState = function() {
        return $state.current.name == 'private.teams.alive';
    };

    $scope.createTeam = function(seasonId) {
        $location.url('/season/' + seasonId + '/leagues/public');
    };

    $scope.aliveTeams = function(seasonId) {
      $location.url('/season/' + seasonId + '/teams/alive');
    };

    $scope.deadTeams = function(seasonId) {
      $location.url('/season/' + seasonId + '/teams/dead');
    };

    $scope.showTeam = function(seasonId, team) {
      $location.url('/season/' + seasonId + '/league/' + team.league.id + '/team/' + team.id);
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

},{}],95:[function(require,module,exports){
var PlayController = function($scope, $log, $location, $modal, $state, $stateParams, messageModel, seasonModel, leagueService) {

  $scope.selectedSeasonId = parseInt($stateParams.seasonId);

  $scope.startedSeasons = angular.copy(seasonModel.startedSeasons);

  $scope.teamOptions = { alive: true, dead: true };
  $scope.leagueOptions = { managed: true };

  $scope.query = '';

  $scope.changeSeason = function(seasonId) {
    seasonModel.setSelectedSeasonId(seasonId);
    var newPath = $location.path().replace(/(\/season\/)\d*/, '$1' + seasonId);
    $location.url(newPath);
  };

  $scope.myTeams = function(seasonId) {
    $location.url('/season/' + seasonId + '/my/teams');
  };

  $scope.myLeagues = function(seasonId) {
    $location.url('/season/' + seasonId + '/my/leagues');
  };

  $scope.resetSearch = function() {
    $scope.query = '';
  };

  $scope.isState = function(states) {
    return _.indexOf(states, $state.current.name) > -1;
  };

  $scope.createLeague = function() {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/league/new/league.new.tpl.html',
      controller: 'NewLeagueController'
    });

    modalInstance.result.then(function(league) {
      leagueService.createLeague(league);
    }, function () {
      $log.debug('Create league modal dismissed...');
      messageModel.setMessage({ type: 'warning', content: 'Create league cancelled' }, false);
    });

  };

  $scope.joinLeague = function() {
    var season = seasonModel.getCurrentSeason();
    $location.url('/season/' + season.id + '/leagues/public');
  };

    /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("play controller");
  };
  init();

};

PlayController.$inject = ['$scope', '$log', '$location', '$modal', '$state', '$stateParams', 'messageModel', 'seasonModel', 'leagueService'];
module.exports = PlayController;

},{}],96:[function(require,module,exports){
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

},{}],97:[function(require,module,exports){
var HeaderController = function($scope, $log, $location, $modal, $state, $anchorScroll, $stateParams, userService, leagueService, userModel, messageModel, seasonModel) {

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
        $location.url('/');
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
      $location.url('/season/' + seasonId + '/my/teams');
    };

    $scope.joinLeague = function() {
      var season = seasonModel.getCurrentSeason();
      $location.url('/season/' + season.id + '/leagues/public');
    };

    $scope.createLeague = function() {
      var modalInstance = $modal.open({
            templateUrl: 'modules/private/league/new/league.new.tpl.html',
            controller: 'NewLeagueController'
          });

      modalInstance.result.then(function(league) {
        leagueService.createLeague(league);
      }, function () {
        messageModel.setMessage({ type: 'warning', content: 'Create league cancelled' }, false);
        $log.debug('Create league modal dismissed...');
      });
    };

    $scope.userProfile = function() {
        $location.url('/user');
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

HeaderController.$inject = ['$scope', '$log', '$location', '$modal', '$state', '$anchorScroll', '$stateParams', 'userService', 'leagueService', 'userModel', 'messageModel', 'seasonModel'];
module.exports = HeaderController;

},{}],98:[function(require,module,exports){
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

},{}],99:[function(require,module,exports){
var FooterController = function($scope, $log, $location) {

  $scope.home = function() {
    $location.url('/');
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

},{}],100:[function(require,module,exports){
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

},{}],102:[function(require,module,exports){
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

},{}],101:[function(require,module,exports){
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

},{}],104:[function(require,module,exports){
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

},{}],105:[function(require,module,exports){
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

},{}],103:[function(require,module,exports){
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

},{}],106:[function(require,module,exports){
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
},{}],107:[function(require,module,exports){
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
},{}],108:[function(require,module,exports){
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
},{}],109:[function(require,module,exports){
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

},{}],110:[function(require,module,exports){
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

},{}],111:[function(require,module,exports){
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

},{}],112:[function(require,module,exports){
var NewLeagueController = function($scope, $log, $modalInstance, weekService, seasonModel) {

    $scope.seasons = angular.copy(seasonModel.currentSeasons);

    $scope.maxPicksPerWeek = [
      { number: null, display: 'Pick a loser for every game' },
      { number: 25, display: 'Pick up to 25 losers' },
      { number: 15, display: 'Pick up to 15 losers' },
      { number: 10, display: 'Pick up to 10 losers' },
      { number: 5, display: 'Pick up to 5 losers' },
      { number: 2, display: 'Pick up to 2 losers' },
      { number: 1, display: 'Pick 1 loser' }
    ];

    $scope.leagueData = {
        name: '',
        nickname: '',
        season_id: $scope.seasons[$scope.seasons.length - 1].id,
        start_week_id: '',
        public: true,
        elimination: false,
        max_teams_per_user: '',
        max_picks_per_week: $scope.maxPicksPerWeek[0].number
    };

    $scope.getSeasonWeeks = function() {
      $scope.createBtnDisabled = true;
      weekService.getAvailableWeeks($scope.leagueData.season_id)
        .then(function(response) {
          $scope.weeks = response.data;
          $scope.leagueData.start_week_id = $scope.weeks[0].id;
          $scope.createBtnDisabled = false;
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
        $scope.getSeasonWeeks();
    };
    init();

};

NewLeagueController.$inject = ['$scope', '$log', '$modalInstance', 'weekService', 'seasonModel'];
module.exports = NewLeagueController;

},{}],113:[function(require,module,exports){
var ViewLeagueController = function(league, leagueWeeks, leagueTeams, $scope, $log, $modal, $location, $state, $stateParams, userModel, messageModel, userService, weekService, teamService, leagueService) {

  var setMessageState = function() {
    if (!_.has($scope.userModel.leagueMessageOpen, $scope.leagueData.id)) {
      $scope.userModel.leagueMessageOpen[$scope.leagueData.id] = $scope.leagueData.message && $scope.leagueData.message.length > 0;
    }
  };

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

  $scope.selectedWeekSlug = $stateParams.week;

  $scope.userModel = userModel;

  $scope.inPlay = function(team) {
    return (team.active && team.alive) ? 0 : 1;
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.leagueDropdown.isopen = !$scope.leagueDropdown.isopen;
  };

  $scope.changeWeek = function(slug) {
    if (slug) {
      $location.search('week', slug); // add / replace the week query param
    } else {
      $location.search('week', null); // remove week query param
    }
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
    $location.path($location.path() + '/team/' + team.id); // path will retain query params
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

  $scope.invite = function(leagueId, isCommish, leagueClosed) {

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
        leagueClosed: function() {
          return leagueClosed;
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

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("view league controller");
    setMessageState();
  };
  init();

};

ViewLeagueController.$inject = ['league','leagueWeeks', 'leagueTeams', '$scope', '$log', '$modal', '$location', '$state', '$stateParams', 'userModel', 'messageModel', 'userService', 'weekService', 'teamService', 'leagueService'];
module.exports = ViewLeagueController;

},{}],114:[function(require,module,exports){
var EditLeagueController = function(league, $scope, $log, $location, $modalInstance, weekService, seasonModel) {

    $scope.seasons = angular.copy(seasonModel.currentSeasons);

    $scope.leagueData = angular.copy(league);

    $scope.maxPicksPerWeek = [
      { number: null, display: 'Pick a loser for every game' },
      { number: 25, display: 'Pick up to 25 losers' },
      { number: 15, display: 'Pick up to 15 losers' },
      { number: 10, display: 'Pick up to 10 losers' },
      { number: 5, display: 'Pick up to 5 losers' },
      { number: 2, display: 'Pick up to 2 losers' },
      { number: 1, display: 'Pick 1 loser' }
    ];

    $scope.getSeasonWeeks = function() {
      $scope.editBtnDisabled = true;
      weekService.getAvailableWeeks($scope.leagueData.season_id)
        .then(function(response) {
          $scope.weeks = response.data;
          $scope.editBtnDisabled = false;
        });
    };

    $scope.updateLeague = function(league) {
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
        $log.debug("edit league controller");
        if (!$scope.leagueData.started) {
          $scope.getSeasonWeeks();
        }
    };
    init();

};

EditLeagueController.$inject = ['league', '$scope', '$log', '$location', '$modalInstance', 'weekService', 'seasonModel'];
module.exports = EditLeagueController;

},{}],115:[function(require,module,exports){
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

},{}],116:[function(require,module,exports){
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

},{}],117:[function(require,module,exports){
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

},{}],118:[function(require,module,exports){
var LeagueInviteController = function(leagueId, isCommish, leagueClosed, invitations, $modal, $modalInstance, $scope, $log) {

  $scope.isCommish = isCommish;

  $scope.leagueClosed = leagueClosed;

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

LeagueInviteController.$inject = ['leagueId', 'isCommish', 'leagueClosed', 'invitations', '$modal', '$modalInstance', '$scope', '$log'];
module.exports = LeagueInviteController;

},{}],119:[function(require,module,exports){
var JoinLeaguesController = function($scope, $log, $location, $modal, $stateParams, userModel, messageModel, seasonModel, leagueService) {

  $scope.selectedSeasonId = parseInt($stateParams.seasonId);

  $scope.currentSeasons = angular.copy(seasonModel.currentSeasons);

  $scope.leagueQuery = '';

  $scope.publicLeagues = function(seasonId) {
    $location.url('/season/' + seasonId + '/leagues/public');
  };

  $scope.privateLeagues = function(seasonId) {
    $location.url('/season/' + seasonId + '/leagues/private');
  };

  $scope.changeSeason = function(seasonId) {
    seasonModel.setSelectedSeasonId(seasonId);
    var newPath = $location.path().replace(/(\/season\/)\d*/, '$1' + seasonId);
    $location.url(newPath);
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

  $scope.createLeague = function() {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/league/new/league.new.tpl.html',
      controller: 'NewLeagueController'
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

JoinLeaguesController.$inject = ['$scope', '$log', '$location', '$modal', '$stateParams', 'userModel', 'messageModel', 'seasonModel', 'leagueService'];
module.exports = JoinLeaguesController;

},{}],120:[function(require,module,exports){
var ManagedLeaguesController = function(managedLeagues, $scope, $log, $location, $modal, messageModel, leagueService) {

    $scope.managedLeagues = managedLeagues.data;

    $scope.createLeague = function(season) {

      var modalInstance = $modal.open({
        templateUrl: 'modules/private/league/new/league.new.tpl.html',
        controller: 'NewLeagueController'
      });

      modalInstance.result.then(function(league) {
        leagueService.createLeague(league);
      }, function () {
        $log.debug('Create league modal dismissed...');
        messageModel.setMessage({ type: 'warning', content: 'Create league cancelled' }, false);
      });

    };

    $scope.viewLeague = function(league) {
        $location.url('/season/' + league.season_id + '/league/' + league.id);
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

ManagedLeaguesController.$inject = ['managedLeagues', '$scope', '$log', '$location', '$modal', 'messageModel', 'leagueService'];
module.exports = ManagedLeaguesController;


},{}],121:[function(require,module,exports){
var MyLeaguesController = function(leagues, $scope, $log, $location, $modal, messageModel, seasonModel, leagueService) {

  $scope.leagues = leagues.data;

  $scope.createLeague = function() {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/league/new/league.new.tpl.html',
      controller: 'NewLeagueController'
    });

    modalInstance.result.then(function(league) {
      leagueService.createLeague(league);
    }, function () {
      $log.debug('Create league modal dismissed...');
      messageModel.setMessage({ type: 'warning', content: 'Create league cancelled' }, false);
    });

  };

  $scope.joinLeague = function() {
    var season = seasonModel.getCurrentSeason();
    $location.url('/season/' + season.id + '/leagues/public');
  };

  $scope.viewLeague = function(league) {
    $location.url('/season/' + league.season_id + '/league/' + league.id);
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

MyLeaguesController.$inject = ['leagues', '$scope', '$log', '$location', '$modal', 'messageModel', 'seasonModel', 'leagueService'];
module.exports = MyLeaguesController;


},{}],122:[function(require,module,exports){
var ViewTeamController = function(team, leagueTeams, $scope, $log, $modal, $window, $timeout, $location, $state, $stateParams, messageModel, userModel, userService, teamService) {

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

  var setMessageState = function() {
    if (!_.has($scope.userModel.teamMessageOpen, $scope.teamData.id)) {
      $scope.userModel.teamMessageOpen[$scope.teamData.id] = $scope.teamData.message && $scope.teamData.message.length > 0;
    }
  };

  $scope.teamData = team.data;
  $scope.leagueTeams = leagueTeams.data;

  $scope.teamDropdown = {
    isopen: false
  };

  $scope.userModel = userModel;

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.teamDropdown.isopen = !$scope.teamDropdown.isopen;
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
    return team.current_picks_count == 0;
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
    // omg what a sin this is. refreshes the browser window. talk about using a big ass hammer...
    // have to do this because of reloadOnSearch: false inside of view/picks/index.js needed to prevent controller reinit when using the week filter
    $timeout(function () {
      $window.location.href = $location.absUrl().replace(/[^\/]*$/, team.id);
      location.reload();
    }, 200);
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

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("view team controller");
    setMessageState();
  };
  init();

};

ViewTeamController.$inject = ['team', 'leagueTeams', '$scope', '$log', '$modal', '$window', '$timeout', '$location', '$state', '$stateParams', 'messageModel', 'userModel', 'userService', 'teamService'];
module.exports = ViewTeamController;

},{}],123:[function(require,module,exports){
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

},{}],124:[function(require,module,exports){
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

},{}],125:[function(require,module,exports){
var TeamPickController = function(team, week, games, picks, $rootScope, $scope, $log, $location, $anchorScroll, userModel, dateUtils) {

  $scope.team = team.data;

  $scope.week = week.data;

  $scope.games = games.data;

  $scope.picks = picks.data;

  $scope.savePicksEnabled = false;

  $scope.scrollToTop = function() {
    $anchorScroll(); // hacky?
  };

  $scope.pickMessage = function(team, week) {
    var msg = '';
    if (!team.league.max_picks_per_week || team.league.max_picks_per_week >= $scope.games.length) {
      msg = 'Pick all games';
    } else {
      msg = 'Pick up to ' + team.league.max_picks_per_week + ' loser';
    }
    if (team.league.max_picks_per_week > 1) {
      msg += 's';
    }
    msg += ' for ' + week.name;
    return msg;
  };

  $scope.savePicks = function() {
    $rootScope.$broadcast('TeamPickController::savePicks');
  };

  $scope.getScore = function(game, index) {
    // warning: magic numbers ahead
    var score = (index === 0) ? game.visiting_squad_score : game.home_squad_score;
    return score;
  };

  $scope.starts = function(game) {
    var startsLabel = (game.started) ? 'Started ' : 'Starts ';
    return startsLabel + dateUtils.dateFormat(game.starts_at, "ddd, mmm d h:MM TT (Z)");
  };

  $scope.showTeam = function(team, showCurrentWeek) {
    var teamPath = '/season/' + team.league.season_id + '/league/' + team.league.id + '/team/' + team.id;
    if (showCurrentWeek) {
      teamPath += '?week=' + $scope.week.slug;
    }
    $location.url(teamPath);
  };

  $scope.isCoach = function(team) {
    return team.coach_ids.indexOf(userModel.user.id) > -1;
  };

  $scope.$on('TeamPickController::enableSavePicks', function(event) {
    $scope.savePicksEnabled = true;
  });

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("make pick controller");
  };
  init();
};

TeamPickController.$inject = ['team', 'week', 'games', 'picks', '$rootScope', '$scope', '$log', '$location', '$anchorScroll', 'userModel', 'dateUtils'];
module.exports = TeamPickController;

},{}],126:[function(require,module,exports){
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

},{}],127:[function(require,module,exports){
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

},{}],128:[function(require,module,exports){
var PlayLeaguesController = function(leagues, $scope, $log, $location, $modal, userModel, messageModel, seasonModel, leagueService) {

  $scope.leagues = leagues.data;

  // pagination
  $scope.currentLeaguePage = 1;
  $scope.leaguesPerPage = 100;

  $scope.createLeague = function(season) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/league/new/league.new.tpl.html',
      controller: 'NewLeagueController'
    });

    modalInstance.result.then(function(league) {
      leagueService.createLeague(league);
    }, function () {
      $log.debug('Create league modal dismissed...');
      messageModel.setMessage({ type: 'warning', content: 'Create league cancelled' }, false);
    });

  };

  $scope.joinLeague = function(season) {
    var season = seasonModel.getCurrentSeason();
    $location.url('/season/' + season.id + '/leagues/public');
  };

  $scope.viewLeague = function(league) {
    $location.url('/season/' + league.season_id + '/league/' + league.id);
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

PlayLeaguesController.$inject = ['leagues', '$scope', '$log', '$location', '$modal', 'userModel', 'messageModel', 'seasonModel', 'leagueService'];
module.exports = PlayLeaguesController;


},{}],129:[function(require,module,exports){
var PlayTeamsController = function(teams, $scope, $log, $stateParams, $location) {

  $scope.teams = teams.data;

  // pagination
  $scope.currentTeamPage = 1;
  $scope.teamsPerPage = 100;

  $scope.inPlay = function(team) {
    return (team.active && team.alive) ? 0 : 1;
  };

  $scope.showTeam = function(team) {
    $location.url('/season/' + $stateParams.seasonId + '/league/' + team.league.id + '/team/' + team.id);
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

},{}],130:[function(require,module,exports){
var AdminSeasonsController = function($scope, $location, $modal, seasonModel, seasonService) {

  $scope.seasons = seasonModel.seasons;

  $scope.showSeason = function(season) {
    $location.url($location.path() + '/' + season.id);
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

},{}],131:[function(require,module,exports){
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

},{}],132:[function(require,module,exports){
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

},{}],133:[function(require,module,exports){

var PublicLeaguesController = function($scope, $log, $location, publicLeagues) {

    $scope.publicLeagues = publicLeagues.data;

    $scope.showLeague = function(league) {
      $location.url('/season/' + league.season_id + '/league/' + league.id);
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


},{}],134:[function(require,module,exports){
var PrivateLeaguesController = function(privateLeagues, $scope, $log, $location) {

    $scope.privateLeagues = privateLeagues.data;

    $scope.showLeague = function(league) {
      $location.url('/season/' + league.season_id + '/league/' + league.id);
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


},{}],135:[function(require,module,exports){
var ViewTeamPicksController = function(leagueWeeks, picks, $scope, $log, $location, $stateParams) {

  $scope.leagueWeeks = leagueWeeks.data;

  $scope.picks = picks.data;

  $scope.selectedWeekSlug = $stateParams.week;

  $scope.correctPickCount = function(picks) {
    var correctPicks = _.filter(picks, function(pick) {
      return pick.correct;
    });
    return correctPicks.length;
  };

  $scope.changeWeek = function(slug) {
    if (slug) {
      $location.search('week', slug); // add / replace the week query param
    } else {
      $location.search('week', null); // remove week query param
    }
  };

  $scope.makePick = function(team, pick) {
    if (!$scope.isCoach(team) || (pick && pick.locked)) {
      return;
    }
    if (team.league.max_picks_per_week == 1) {
      $location.url($location.path() + '/pick');
    } else {
      $location.url($location.path() + '/picks');
    }
  };

  $scope.pickStatus = function(pick) {
    var status = '';
    if (pick.correct === true) {
      status = 'check';
    } else if (pick.correct === false) {
      status = 'times';
    } else if (pick.locked) {
      status = 'lock';
    } else {
      status = 'unlock';
    }
    return status;
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("view team picks controller");
  };
  init();

};

ViewTeamPicksController.$inject = ['leagueWeeks', 'picks', '$scope', '$log', '$location', '$stateParams'];
module.exports = ViewTeamPicksController;

},{}],136:[function(require,module,exports){
var TeamPickOneController = function($scope, $log, pickService) {

  $scope.currentPick = _.find($scope.picks, function(pick){ return pick.week_id === $scope.week.id });

  $scope.makePick = function(game, squad) {
    if ($scope.isDisabled(game, squad)) {
      // ignore it
      return;
    }
    $scope.currentPick = {
      week_id: game.week_id,
      week_type_id: game.week_type_id,
      game_id: game.id,
      team_id: $scope.team.id,
      squad_id: squad.id,
      game: game,
      squad: squad
    };
    $scope.savePick();
  };

  $scope.savePick = function() {
    pickService.savePick($scope.currentPick)
      .finally(function() {
        $scope.showTeam($scope.team, false);
      });
  };

  $scope.hasSquadBeenUsed = function(game, squad) {
    if ($scope.team.league.allow_dups) {
      return false;
    } else {
      var squadHasBeenUsed = false;
      _.each($scope.picks, function(pick) {
        if (pick.squad.id == squad.id && pick.week_type_id == game.week_type_id && pick.week_id != game.week_id) {
          squadHasBeenUsed = true;
        }
      });
      return squadHasBeenUsed;
    }
  };

  $scope.isCurrentPickLocked = function() {
    return $scope.currentPick && $scope.currentPick.locked;
  };

  $scope.isDisabled = function(game, squad) {
    var isDisabled = false;
    if (game.started || $scope.hasSquadBeenUsed(game, squad) || $scope.isCurrentPickLocked()) {
      isDisabled = true;
    }
    return isDisabled;
  };

  $scope.pickStatus = function(game, squad) {
    var status = '';
    if (!_.isUndefined($scope.currentPick) && $scope.currentPick.game_id == game.id && $scope.currentPick.squad_id == squad.id) {
      if ($scope.currentPick.correct === true) {
        status = 'check';
      } else if ($scope.currentPick.correct === false) {
        status = 'times';
      } else if ($scope.currentPick.locked) {
        status = 'lock';
      } else {
        status = 'unlock';
      }
    }
    return status;
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("pick one controller");
  };
  init();
};

TeamPickOneController.$inject = ['$scope', '$log', 'pickService'];
module.exports = TeamPickOneController;

},{}],137:[function(require,module,exports){
var TeamPickManyController = function($rootScope, $scope, $log, $anchorScroll, messageModel, pickService) {

  var scrollToTop = function() {
    $anchorScroll(); // hacky?
  };

  var allPicksMade = function() {
    return $scope.picks.length == $scope.team.league.max_picks_per_week || $scope.picks.length >= $scope.games.length;
  };

  var getPick = function(game, squad) {
    var pick = _.find($scope.picks, function(pick) { return pick.game_id === game.id && pick.squad_id === squad.id });
    return pick;
  };

  var removePick = function(pickToRemove) {
    $scope.picks = _.reject($scope.picks, function(pick) { return pick.game_id === pickToRemove.game_id && pick.squad_id === pickToRemove.squad_id })
  };

  var removeGamePicks = function(game) {
    $scope.picks = _.reject($scope.picks, function(pick) { return pick.game_id === game.id })
  };

  var addPick = function(game, squad) {
    if (allPicksMade()) {
      var message = 'No more picks allowed. Unselect a pick if necessary.';
      var maxPicks = $scope.team.league.max_picks_per_week;
      if (maxPicks) {
        message = 'Only ' + maxPicks + ' picks allowed. Unselect a pick if necessary.';
      }
      messageModel.setMessage({ type: 'danger', content: message }, false);
      scrollToTop();
      return;
    }
    var pick = {
      week_id: game.week_id,
      week_type_id: game.week_type_id,
      game_id: game.id,
      team_id: $scope.team.id,
      squad_id: squad.id
    };
    $scope.picks.push(pick);
  };

  $scope.togglePick = function(game, squad) {
    if (!$scope.isCoach($scope.team) || game.started) return;
    var pick = getPick(game, squad);
    if (!_.isUndefined(pick) && pick.locked) {
      return; // no toggling locked picks
    }
    $rootScope.$broadcast('TeamPickController::enableSavePicks');
    if (!_.isUndefined(pick)) {
      // if a pick exists already, then you are attempting to de-select it
      removePick(pick);
    } else {
      removeGamePicks(game); // no 2 picks for the same game
      addPick(game, squad);
    }
  };

  $scope.savePicks = function() {
    pickService.savePicks($scope.team.id, $scope.picks)
      .finally(function(result) {
        $scope.showTeam($scope.team, true);
      });
  };

  $scope.isDisabled = function(game) {
    var isDisabled = false;
    if (game.started) {
      isDisabled = true;
    }
    return isDisabled;
  };

  $scope.pickStatus = function(game, squad) {
    var status = '',
      pick = getPick(game, squad);
    if (!_.isUndefined(pick)) {
      if (pick.correct === true) {
        status = 'check';
      } else if (pick.correct === false) {
        status = 'times';
      } else if (pick.locked) {
        status = 'lock';
      } else {
        status = 'unlock';
      }
    }
    return status;
  };

  $scope.$on('TeamPickController::savePicks', function(event) {
    $scope.savePicks();
  });
  
  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("pick many controller");
  };
  init();
};

TeamPickManyController.$inject = ['$rootScope', '$scope', '$log', '$anchorScroll', 'messageModel', 'pickService'];
module.exports = TeamPickManyController;

},{}],138:[function(require,module,exports){
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

},{}],139:[function(require,module,exports){
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

},{}],140:[function(require,module,exports){
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
    $location.url($location.path() + '/weeks/' + week.id);
  };

  $scope.showLeague = function(league) {
    $location.url('/season/' + league.season_id + '/league/' + league.id);
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

},{}],141:[function(require,module,exports){
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

},{}],142:[function(require,module,exports){
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
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC8udG1wL2FwcC10ZW1wbGF0ZXMuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9hcHAuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kZWxzL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FwaS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9jb21tYW5kL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2ZpbHRlcnMvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3B1YmxpYy9ob21lL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wdWJsaWMvZmFxL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wdWJsaWMvYWJ1c2UvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3B1YmxpYy9zaWduaW4vaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS91c2VyL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3RlYW0vaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdGVhbXMvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvcGxheS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9tb2R1bGVzL2hlYWRlci9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9tb2R1bGVzL21lc3NhZ2UvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kdWxlcy9mb290ZXIvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kdWxlcy9jb25maXJtL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL3NlcnZpY2UvYXBwbGljYXRpb24vaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vc2VydmljZS91dGlscy9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9kaXJlY3RpdmVzL2ZvY3VzL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2RpcmVjdGl2ZXMvZm9ybWF0dGVkRGF0ZS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9kaXJlY3RpdmVzL21hdGNoL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2RpcmVjdGl2ZXMvcmNTdWJtaXQvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vZGlyZWN0aXZlcy9yY1ZlcmlmeVNldC9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9kaXJlY3RpdmVzL3JlcXVpcmVkUGF0dGVybi9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9kaXJlY3RpdmVzL3NlbGVjdE9uQ2xpY2svaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci90ZXJtcy9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS91c2VyL3Jlc2V0L2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9uZXcvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL3ZpZXcvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2VkaXQvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2NvbnRhY3QvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL21lc3NhZ2UvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2pvaW4vaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2ludml0ZS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4vaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9tYW5hZ2UvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9teS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS90ZWFtL3ZpZXcvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdGVhbS9lZGl0L2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3RlYW0vbWVzc2FnZS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS90ZWFtL3BpY2svaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdGVhbXMvYWxpdmUvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdGVhbXMvZGVhZC9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9wbGF5L2xlYWd1ZXMvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvcGxheS90ZWFtcy9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9zZWFzb25zL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2FkbWluL3dlZWsvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2ludml0ZS9yZXF1ZXN0L2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9wdWJsaWMvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL3ByaXZhdGUvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdGVhbS92aWV3L3BpY2tzL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3RlYW0vcGljay9vbmUvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdGVhbS9waWNrL21hbnkvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vZ2FtZS9lZGl0L2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2FkbWluL2dhbWUvbmV3L2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2FkbWluL3NlYXNvbnMvc2Vhc29uL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2FkbWluL3dlZWsvZWRpdC9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9zZWFzb25zL3NlYXNvbi9uZXcvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kZWxzL1VzZXJNb2RlbC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9tb2RlbHMvTWVzc2FnZU1vZGVsLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL21vZGVscy9TZWFzb25Nb2RlbC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9hcGkvQXBpQ29uZmlnLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FwaS9HYW1lU2VydmljZS5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9hcGkvTGVhZ3VlU2VydmljZS5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9hcGkvUGlja1NlcnZpY2UuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vYXBpL1NlYXNvblNlcnZpY2UuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vYXBpL1RlYW1TZXJ2aWNlLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FwaS9TcXVhZFNlcnZpY2UuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vYXBpL1VzZXJTZXJ2aWNlLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FwaS9XZWVrU2VydmljZS5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9jb21tYW5kL3Nlc3Npb24vU2lnbmluQ29tbWFuZC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9jb21tYW5kL3VzZXIvR2V0Q3VycmVudFVzZXJDb21tYW5kLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2NvbW1hbmQvc2Vzc2lvbi9TaWdub3V0Q29tbWFuZC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9maWx0ZXJzL09mZnNldEZpbHRlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9maWx0ZXJzL0FjdGl2ZVRlYW1GaWx0ZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vZmlsdGVycy9BbGl2ZVRlYW1GaWx0ZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vZmlsdGVycy9NYW5hZ2VkTGVhZ3VlRmlsdGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2ZpbHRlcnMvVGltZUZpbHRlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9maWx0ZXJzL1dlZWtQaWNrc0ZpbHRlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHVibGljL2hvbWUvSG9tZUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3B1YmxpYy9mYXEvRmFxQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHVibGljL2FidXNlL0FidXNlQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHVibGljL3NpZ25pbi9TaWduaW5Db250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXIvUmVnaXN0ZXJDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3VzZXIvVXNlckNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL0xlYWd1ZUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9MZWFndWVzQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS90ZWFtL1RlYW1Db250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3RlYW1zL1RlYW1zQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9wbGF5L1BsYXlDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2FkbWluL0FkbWluQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9tb2R1bGVzL2hlYWRlci9IZWFkZXJDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL21vZHVsZXMvbWVzc2FnZS9NZXNzYWdlQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9tb2R1bGVzL2Zvb3Rlci9Gb290ZXJDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL21vZHVsZXMvY29uZmlybS9Db25maXJtQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9zZXJ2aWNlL3V0aWxzL0RhdGVVdGlscy5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9zZXJ2aWNlL2FwcGxpY2F0aW9uL0FwcGxpY2F0aW9uU2VydmljZS5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9kaXJlY3RpdmVzL2Zvcm1hdHRlZERhdGUvRm9ybWF0dGVkRGF0ZURpcmVjdGl2ZS5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9kaXJlY3RpdmVzL21hdGNoL01hdGNoRGlyZWN0aXZlLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2RpcmVjdGl2ZXMvZm9jdXMvRm9jdXNEaXJlY3RpdmUuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vZGlyZWN0aXZlcy9yY1N1Ym1pdC9SQ1N1Ym1pdERpcmVjdGl2ZS5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9kaXJlY3RpdmVzL3JjVmVyaWZ5U2V0L1JDVmVyaWZ5U2V0RGlyZWN0aXZlLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2RpcmVjdGl2ZXMvcmVxdWlyZWRQYXR0ZXJuL1JlcXVpcmVkUGF0dGVybkRpcmVjdGl2ZS5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9kaXJlY3RpdmVzL3NlbGVjdE9uQ2xpY2svU2VsZWN0T25DbGlja0RpcmVjdGl2ZS5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHVibGljL3JlZ2lzdGVyL3Rlcm1zL1JlZ2lzdGVyVGVybXNDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3VzZXIvcmVzZXQvVXNlclJlc2V0Q29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbmV3L05ld0xlYWd1ZUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL3ZpZXcvVmlld0xlYWd1ZUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2VkaXQvRWRpdExlYWd1ZUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2NvbnRhY3QvTGVhZ3VlQ29udGFjdENvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL21lc3NhZ2UvTGVhZ3VlTWVzc2FnZUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2pvaW4vTGVhZ3VlSm9pbkNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2ludml0ZS9MZWFndWVJbnZpdGVDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9Kb2luTGVhZ3Vlc0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9tYW5hZ2UvTWFuYWdlTGVhZ3Vlc0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9teS9NeUxlYWd1ZXNDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3RlYW0vdmlldy9WaWV3VGVhbUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdGVhbS9lZGl0L0VkaXRUZWFtQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS90ZWFtL21lc3NhZ2UvVGVhbU1lc3NhZ2VDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3RlYW0vcGljay9UZWFtUGlja0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdGVhbXMvYWxpdmUvQWxpdmVUZWFtc0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdGVhbXMvZGVhZC9EZWFkVGVhbXNDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3BsYXkvbGVhZ3Vlcy9QbGF5TGVhZ3Vlc0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvcGxheS90ZWFtcy9QbGF5VGVhbXNDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2FkbWluL3NlYXNvbnMvQWRtaW5TZWFzb25zQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi93ZWVrL0FkbWluV2Vla0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2ludml0ZS9yZXF1ZXN0L0xlYWd1ZUludml0ZVJlcXVlc3RDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9wdWJsaWMvUHVibGljTGVhZ3Vlc0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL3ByaXZhdGUvUHJpdmF0ZUxlYWd1ZXNDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3RlYW0vdmlldy9waWNrcy9WaWV3VGVhbVBpY2tzQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS90ZWFtL3BpY2svb25lL1RlYW1QaWNrT25lQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS90ZWFtL3BpY2svbWFueS9UZWFtUGlja01hbnlDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2FkbWluL2dhbWUvZWRpdC9BZG1pbkdhbWVFZGl0Q29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9nYW1lL25ldy9BZG1pbkdhbWVOZXdDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2FkbWluL3NlYXNvbnMvc2Vhc29uL0FkbWluU2Vhc29uQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi93ZWVrL2VkaXQvQWRtaW5XZWVrRWRpdENvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9zZWFzb24vbmV3L0FkbWluU2Vhc29uTmV3Q29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyMkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdk9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDek1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdhcHAudGVtcGxhdGVzJywgWydjb21tb24vbW9kdWxlcy9jb25maXJtL2NvbmZpcm0udHBsLmh0bWwnLCAnY29tbW9uL21vZHVsZXMvZm9vdGVyL2Zvb3Rlci50cGwuaHRtbCcsICdjb21tb24vbW9kdWxlcy9oZWFkZXIvaGVhZGVyLnRwbC5odG1sJywgJ2NvbW1vbi9tb2R1bGVzL21lc3NhZ2UvbWVzc2FnZS50cGwuaHRtbCcsICdjb21tb24vdGVtcGxhdGVzL21hc3Rlci50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvYWRtaW4vYWRtaW4udHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2FkbWluL2dhbWUvZWRpdC9hZG1pbi5nYW1lLmVkaXQudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2FkbWluL2dhbWUvbmV3L2FkbWluLmdhbWUubmV3LnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9zZWFzb25zL2FkbWluLnNlYXNvbnMudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2FkbWluL3NlYXNvbnMvc2Vhc29uL2FkbWluLnNlYXNvbi50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9zZWFzb24vbmV3L2FkbWluLnNlYXNvbi5uZXcudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2FkbWluL3dlZWsvYWRtaW4ud2Vlay50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvYWRtaW4vd2Vlay9lZGl0L2FkbWluLndlZWsuZWRpdC50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2NvbnRhY3QvbGVhZ3VlLmNvbnRhY3QudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9lZGl0L2xlYWd1ZS5lZGl0LnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlL2xlYWd1ZS5pbnZpdGUudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9pbnZpdGUvcmVxdWVzdC9sZWFndWUuaW52aXRlLnJlcXVlc3QudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9qb2luL2xlYWd1ZS5qb2luLnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbGVhZ3VlLnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbWVzc2FnZS9sZWFndWUubWVzc2FnZS50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL25ldy9sZWFndWUubmV3LnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvdmlldy9sZWFndWUudmlldy50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL2xlYWd1ZXMuam9pbi50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL3ByaXZhdGUvbGVhZ3Vlcy5qb2luLnByaXZhdGUudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9wdWJsaWMvbGVhZ3Vlcy5qb2luLnB1YmxpYy50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9sZWFndWVzLnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL21hbmFnZS9sZWFndWVzLm1hbmFnZS50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9teS9sZWFndWVzLm15LnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9wbGF5L2xlYWd1ZXMvcGxheS5sZWFndWVzLnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9wbGF5L3BsYXkudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL3BsYXkvdGVhbXMvcGxheS50ZWFtcy50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvdGVhbS9lZGl0L3RlYW0uZWRpdC50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvdGVhbS9tZXNzYWdlL3RlYW0ubWVzc2FnZS50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvdGVhbS9waWNrL21hbnkvdGVhbS5waWNrLm1hbnkudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL3RlYW0vcGljay9vbmUvdGVhbS5waWNrLm9uZS50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvdGVhbS9waWNrL3RlYW0ucGljay50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvdGVhbS90ZWFtLnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS90ZWFtL3ZpZXcvcGlja3MvdGVhbS52aWV3LnBpY2tzLnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS90ZWFtL3ZpZXcvdGVhbS52aWV3LnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS90ZWFtcy9hbGl2ZS90ZWFtcy5hbGl2ZS50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvdGVhbXMvZGVhZC90ZWFtcy5kZWFkLnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS90ZWFtcy90ZWFtcy50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvdXNlci9yZXNldC91c2VyLnJlc2V0LnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS91c2VyL3VzZXIudHBsLmh0bWwnLCAnbW9kdWxlcy9wdWJsaWMvYWJ1c2UvYWJ1c2UudHBsLmh0bWwnLCAnbW9kdWxlcy9wdWJsaWMvZmFxL2ZhcS50cGwuaHRtbCcsICdtb2R1bGVzL3B1YmxpYy9ob21lL2hvbWUudHBsLmh0bWwnLCAnbW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXIvcmVnaXN0ZXIudHBsLmh0bWwnLCAnbW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXIvdGVybXMvcmVnaXN0ZXIudGVybXMudHBsLmh0bWwnLCAnbW9kdWxlcy9wdWJsaWMvc2lnbmluL3NpZ25pbi50cGwuaHRtbCddKTtcblxuYW5ndWxhci5tb2R1bGUoXCJjb21tb24vbW9kdWxlcy9jb25maXJtL2NvbmZpcm0udHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJjb21tb24vbW9kdWxlcy9jb25maXJtL2NvbmZpcm0udHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkNvbmZpcm0gQWN0aW9uPC9oND5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxwPnt7bWVzc2FnZX19PC9wPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+Tm88L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNvbmZpcm0oKVxcXCI+WWVzPC9idXR0b24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcImNvbW1vbi9tb2R1bGVzL2Zvb3Rlci9mb290ZXIudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJjb21tb24vbW9kdWxlcy9mb290ZXIvZm9vdGVyLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGlkPVxcXCJtZW51XFxcIj5cXG5cIiArXG4gICAgXCIgIDxoMT48YSBuZy1jbGljaz1cXFwiaG9tZSgpXFxcIj5MT0dIPC9hPjwvaDE+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJsaW5rc1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxzcGFuIHN0eWxlPVxcXCJ0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXFwiPsKpIDIwMTUgRmxleGRldmVsb3BlcnMuY29tIExMQzwvc3Bhbj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJjb21tb24vbW9kdWxlcy9oZWFkZXIvaGVhZGVyLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwiY29tbW9uL21vZHVsZXMvaGVhZGVyL2hlYWRlci50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcIm5hdmJhci1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgICA8YnV0dG9uIGNsYXNzPVxcXCJuYXZiYXItdG9nZ2xlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIG5nLWNsaWNrPVxcXCJpc0NvbGxhcHNlZCA9ICFpc0NvbGxhcHNlZFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICA8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgPGEgY2xhc3M9XFxcIm5hdmJhci1icmFuZFxcXCIgbmctY2xpY2s9XFxcImhvbWUoKVxcXCI+PGI+TE9TRTwvYj5PUjxiPkdPPC9iPkhPTUU8L2E+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY29sbGFwc2U9XFxcImlzQ29sbGFwc2VkXFxcIiBjbGFzcz1cXFwibmF2YmFyLWNvbGxhcHNlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPHVsIG5nLXNob3c9XFxcInVzZXJEYXRhLnVzZXIubG9hZGVkXFxcIiBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGkgbmctY2xhc3M9XFxcInsnYWN0aXZlJzogaXNTdGF0ZShbJ3ByaXZhdGUucGxheS50ZWFtcycsICdwcml2YXRlLnBsYXkubGVhZ3VlcyddKX1cXFwiPjxhIG5nLWNsaWNrPVxcXCJwbGF5KHNlbGVjdGVkU2Vhc29uSWQpXFxcIj5NeSBUZWFtcyAmIExlYWd1ZXM8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICA8bGkgbmctY2xhc3M9XFxcInsnYWN0aXZlJzogaXNTdGF0ZShbJ3ByaXZhdGUubGVhZ3Vlcy5qb2luLnB1YmxpYycsICdwcml2YXRlLmxlYWd1ZXMuam9pbi5wcml2YXRlJ10pfVxcXCI+PGEgbmctY2xpY2s9XFxcImpvaW5MZWFndWUoKVxcXCI+Sm9pbiBMZWFndWU8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICA8bGk+PGEgbmctY2xpY2s9XFxcImNyZWF0ZUxlYWd1ZSgpXFxcIj5DcmVhdGUgTGVhZ3VlPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgPGxpPjxhIG5nLWNsaWNrPVxcXCJmYXEoKVxcXCI+RkFRPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgPGxpIGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1jb2cgZmEtZncgc2V0dGluZ3MtaWNvblxcXCIgdGl0bGU9XFxcIlVzZXIgU2V0dGluZ3NcXFwiPjwvaT4gPGIgY2xhc3M9XFxcImNhcmV0XFxcIj48L2I+PC9hPlxcblwiICtcbiAgICBcIiAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxpPjxhIG5nLWNsaWNrPVxcXCJjb250YWN0VXMoKVxcXCI+Q29udGFjdCBVczwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGkgY2xhc3M9XFxcImRpdmlkZXJcXFwiPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsaT48YSBuZy1jbGljaz1cXFwidXNlclByb2ZpbGUoKVxcXCI+VXNlciBQcm9maWxlPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsaT48YSBuZy1jbGljaz1cXFwic2lnbm91dCgpXFxcIj5TaWduIE91dDwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgICAgPC91bD5cXG5cIiArXG4gICAgXCIgICAgICA8L2xpPlxcblwiICtcbiAgICBcIiAgICA8L3VsPlxcblwiICtcbiAgICBcIiAgICA8dWwgbmctc2hvdz1cXFwiIXVzZXJEYXRhLnVzZXIubG9hZGVkXFxcIiBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGk+PGEgbmctY2xpY2s9XFxcImZhcSgpXFxcIj5GQVE8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICA8bGk+PGEgbmctY2xpY2s9XFxcInJlZ2lzdGVyKClcXFwiPlJlZ2lzdGVyPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgPGxpIGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8YSBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiBocmVmPVxcXCIjXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiPlNpZ24gSW48L3N0cm9uZz48L2E+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1tZW51IHBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmxpbmUtc2lnbmluLWZvcm0gcGFuZWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGZvcm0gbmFtZT1cXFwiaW5saW5lU2lnbmluRm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbmctc3VibWl0PVxcXCJzaWduaW4oeyBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwudG9Mb3dlckNhc2UoKSwgcGFzc3dvcmQ6IGNyZWRlbnRpYWxzLnBhc3N3b3JkIH0pOyAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1lbnZlbG9wZSBmYS1md1xcXCI+PC9pPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIiBzdHlsZT1cXFwiY3Vyc29yOmF1dG87XFxcIiBwbGFjZWhvbGRlcj1cXFwiRW1haWxcXFwiIG5nLW1vZGVsPVxcXCJjcmVkZW50aWFscy5lbWFpbFxcXCIgbmctY2xpY2s9XFxcIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcXFwiIHJjLXZlcmlmeS1zZXQgYXV0b2ZvY3VzIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1rZXkgZmEtZndcXFwiPjwvaT48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCIgc3R5bGU9XFxcImN1cnNvcjphdXRvO1xcXCIgcGxhY2Vob2xkZXI9XFxcIlBhc3N3b3JkXFxcIiBuZy1tb2RlbD1cXFwiY3JlZGVudGlhbHMucGFzc3dvcmRcXFwiIG5nLWNsaWNrPVxcXCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XFxcIiByYy12ZXJpZnktc2V0IHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPGRpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImZvcmdvdC1wYXNzd29yZCBidG4gYnRuLWxpbmsgcHVsbC1sZWZ0XFxcIiByb2xlPVxcXCJidXR0b25cXFwiIG5nLWNsaWNrPVxcXCJyZXNldFBhc3N3b3JkKClcXFwiPkZvcmdvdCBQYXNzd29yZD88L2E+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwic2lnbi1pbi1idG4gYnRuIGJ0bi1wcmltYXJ5IHB1bGwtcmlnaHRcXFwiIG5nLWRpc2FibGVkPVxcXCJpbmxpbmVTaWduaW5Gb3JtLiRpbnZhbGlkXFxcIj5TaWduIGluPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XFxcImNsZWFyOiBib3RoO1xcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8aHI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyZWdpc3RlclxcXCI+PGEgbmctY2xpY2s9XFxcInJlZ2lzdGVyKClcXFwiPkRvbid0IGhhdmUgYW4gYWNjb3VudD8gPHN0cm9uZz5SZWdpc3Rlcjwvc3Ryb25nPjwvYT48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9saT5cXG5cIiArXG4gICAgXCIgICAgPC91bD5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJjb21tb24vbW9kdWxlcy9tZXNzYWdlL21lc3NhZ2UudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJjb21tb24vbW9kdWxlcy9tZXNzYWdlL21lc3NhZ2UudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRpc21pc3NhYmxlIGFsZXJ0LXt7bWVzc2FnZURhdGEubWVzc2FnZS50eXBlfX1cXFwiIG5nLXNob3c9XFxcIm1lc3NhZ2VEYXRhLm1lc3NhZ2UubG9hZGVkXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGRhdGEtZGlzbWlzcz1cXFwiYWxlcnRcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiBuZy1jbGljaz1cXFwiZGlzbWlzc01lc3NhZ2UobWVzc2FnZURhdGEpXFxcIj4mdGltZXM7PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICB7e21lc3NhZ2VEYXRhLm1lc3NhZ2UuY29udGVudH19XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcImNvbW1vbi90ZW1wbGF0ZXMvbWFzdGVyLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwiY29tbW9uL3RlbXBsYXRlcy9tYXN0ZXIudHBsLmh0bWxcIixcbiAgICBcIjwhLS0gSGVhZGVyIC0tPlxcblwiICtcbiAgICBcIjxuYXYgY2xhc3M9XFxcIm5hdmJhciBuYXZiYXItaW52ZXJzZVxcXCIgdWktdmlldz1cXFwiaGVhZGVyXFxcIj48L25hdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgPCEtLSBNZXNzYWdlIC0tPlxcblwiICtcbiAgICBcIiAgPGRpdiB1aS12aWV3PVxcXCJtZXNzYWdlXFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCIgIDwhLS0gQ29udGVudCAtLT5cXG5cIiArXG4gICAgXCIgIDxkaXYgdWktdmlldz1cXFwiY29udGVudFxcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiPCEtLSBGb290ZXIgLS0+XFxuXCIgK1xuICAgIFwiPGZvb3RlciBjbGFzcz1cXFwiZm9vdGVyXFxcIiB1aS12aWV3PVxcXCJmb290ZXJcXFwiPjwvZm9vdGVyPlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvYWRtaW4vYWRtaW4udHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvYWRtaW4vYWRtaW4udHBsLmh0bWxcIixcbiAgICBcIjxkaXYgdWktdmlldz1cXFwiYWRtaW5Db250ZW50XFxcIiBjbGFzcz1cXFwiYWRtaW4tY29udGVudFxcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9hZG1pbi9nYW1lL2VkaXQvYWRtaW4uZ2FtZS5lZGl0LnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2FkbWluL2dhbWUvZWRpdC9hZG1pbi5nYW1lLmVkaXQudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkVkaXQgR2FtZTwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8aDQ+e3tnYW1lRGF0YS5kaXNwbGF5fX08L2g0PlxcblwiICtcbiAgICBcIiAgPGZvcm0gc3R5bGU9XFxcInBhZGRpbmc6IDEwcHg7XFxcIiBuYW1lPVxcXCJlZGl0R2FtZUZvcm1cXFwiIGNsYXNzPVxcXCJlZGl0LWdhbWUtZm9ybSBmb3JtLWhvcml6b250YWxcXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLXNtLTYgY29udHJvbC1sYWJlbFxcXCI+U3RhcnRzIEF0IChMb2NhbCBUaW1lKTo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duXFxcIiBpcy1vcGVuPVxcXCJzdGFydHNBdERyb3Bkb3duLmlzb3BlblxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxhIGNsYXNzPVxcXCJkcm9wZG93bi10b2dnbGVcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCIgZGF0YS10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBkYXRhLXRhcmdldD1cXFwiI1xcXCIgaHJlZj1cXFwiI1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGZvcm1hdHRlZC1kYXRlIGRhdGEtbmctbW9kZWw9XFxcImdhbWVEYXRhLnN0YXJ0c19hdFxcXCIgbmctcmVxdWlyZWQ9XFxcInRydWVcXFwiIG5nLWRpc2FibGVkPVxcXCJ0cnVlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+PGkgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tY2FsZW5kYXJcXFwiPjwvaT48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvYT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIiByb2xlPVxcXCJtZW51XFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcImRMYWJlbFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGRhdGV0aW1lcGlja2VyIGRhdGEtbmctbW9kZWw9XFxcImdhbWVEYXRhLnN0YXJ0c19hdFxcXCIgZGF0YS1vbi1zZXQtdGltZT1cXFwiY2xvc2VTdGFydHNBdCgpXFxcIiBkYXRhLWRhdGV0aW1lcGlja2VyLWNvbmZpZz1cXFwieyBtaW51dGVTdGVwOiAxIH1cXFwiLz5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC91bD5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGZvcj1cXFwib3ZlcnRpbWVcXFwiIGNsYXNzPVxcXCJjb2wtc20tNiBjb250cm9sLWxhYmVsXFxcIj5PdmVydGltZTo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxpbnB1dCBpZD1cXFwib3ZlcnRpbWVcXFwiIG5hbWU9XFxcIm92ZXJ0aW1lXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcImdhbWVEYXRhLm92ZXJ0aW1lXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBmb3I9XFxcInZpc2l0b3JTY29yZVxcXCIgY2xhc3M9XFxcImNvbC1zbS02IGNvbnRyb2wtbGFiZWxcXFwiPnt7Z2FtZURhdGEuc3F1YWRzWzBdLm5hbWV9fSBTY29yZTo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxpbnB1dCBpZD1cXFwidmlzaXRvclNjb3JlXFxcIiBuYW1lPVxcXCJ2aXNpdG9yU2NvcmVcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcImdhbWVEYXRhLnZpc2l0aW5nX3NxdWFkX3Njb3JlXFxcIiBzZWxlY3Qtb24tY2xpY2sgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgZm9yPVxcXCJob21lU2NvcmVcXFwiIGNsYXNzPVxcXCJjb2wtc20tNiBjb250cm9sLWxhYmVsXFxcIj57e2dhbWVEYXRhLnNxdWFkc1sxXS5uYW1lfX0gU2NvcmU6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8aW5wdXQgaWQ9XFxcImhvbWVTY29yZVxcXCIgbmFtZT1cXFwiaG9tZVNjb3JlXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJnYW1lRGF0YS5ob21lX3NxdWFkX3Njb3JlXFxcIiBzZWxlY3Qtb24tY2xpY2sgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgZm9yPVxcXCJjb21wbGV0ZVxcXCIgY2xhc3M9XFxcImNvbC1zbS02IGNvbnRyb2wtbGFiZWxcXFwiPkNvbXBsZXRlZDo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxpbnB1dCBpZD1cXFwiY29tcGxldGVcXFwiIG5hbWU9XFxcImNvbXBsZXRlXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcImdhbWVEYXRhLmNvbXBsZXRlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctZGlzYWJsZWQ9XFxcImVkaXRHYW1lRm9ybS4kaW52YWxpZFxcXCIgbmctY2xpY2s9XFxcImVkaXRHYW1lKGdhbWVEYXRhKVxcXCI+VXBkYXRlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9hZG1pbi9nYW1lL25ldy9hZG1pbi5nYW1lLm5ldy50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9hZG1pbi9nYW1lL25ldy9hZG1pbi5nYW1lLm5ldy50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+Q3JlYXRlIEdhbWU8L2gzPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgPGg0Pnt7d2Vla0RhdGEuZGlzcGxheX19IHwge3t3ZWVrRGF0YS50eXBlfX08L2g0PlxcblwiICtcbiAgICBcIiAgPGhyPlxcblwiICtcbiAgICBcIiAgPGZvcm0gbmFtZT1cXFwibmV3R2FtZUZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJ2aXNpdGluZ1NxdWFkXFxcIj5WaXNpdGluZyBTcXVhZDo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxzZWxlY3QgaWQ9XFxcInZpc2l0aW5nU3F1YWRcXFwiIG5hbWU9XFxcInZpc2l0aW5nU3F1YWRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJuZXdHYW1lRGF0YS52aXNpdGluZ19zcXVhZF9pZFxcXCIgbmctb3B0aW9ucz1cXFwic3F1YWQuaWQgYXMgc3F1YWQubmFtZSBmb3Igc3F1YWQgaW4gc3F1YWRzXFxcIj48L3NlbGVjdD5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJob21lU3F1YWRcXFwiPkhvbWUgU3F1YWQ6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8c2VsZWN0IGlkPVxcXCJob21lU3F1YWRcXFwiIG5hbWU9XFxcImhvbWVTcXVhZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcIm5ld0dhbWVEYXRhLmhvbWVfc3F1YWRfaWRcXFwiIG5nLW9wdGlvbnM9XFxcInNxdWFkLmlkIGFzIHNxdWFkLm5hbWUgZm9yIHNxdWFkIGluIHNxdWFkc1xcXCI+PC9zZWxlY3Q+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiPlN0YXJ0cyBBdCAoTG9jYWwgVGltZSk6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93blxcXCIgaXMtb3Blbj1cXFwic3RhcnRzQXREcm9wZG93bi5pc29wZW5cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGEgY2xhc3M9XFxcImRyb3Bkb3duLXRvZ2dsZVxcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGRhdGEtdGFyZ2V0PVxcXCIjXFxcIiBocmVmPVxcXCIjXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBmb3JtYXR0ZWQtZGF0ZSBkYXRhLW5nLW1vZGVsPVxcXCJuZXdHYW1lRGF0YS5zdGFydHNfYXRcXFwiIG5nLXJlcXVpcmVkPVxcXCJ0cnVlXFxcIiBuZy1kaXNhYmxlZD1cXFwidHJ1ZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWFkZG9uXFxcIj48aSBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jYWxlbmRhclxcXCI+PC9pPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2E+XFxuXCIgK1xuICAgIFwiICAgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiIHJvbGU9XFxcIm1lbnVcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwiZExhYmVsXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGRhdGV0aW1lcGlja2VyIGRhdGEtbmctbW9kZWw9XFxcIm5ld0dhbWVEYXRhLnN0YXJ0c19hdFxcXCIgZGF0YS1vbi1zZXQtdGltZT1cXFwiY2xvc2VTdGFydHNBdCgpXFxcIiBkYXRhLWRhdGV0aW1lcGlja2VyLWNvbmZpZz1cXFwieyBtaW51dGVTdGVwOiAxIH1cXFwiLz5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvdWw+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPCEtLTxpbnB1dCBpZD1cXFwiZ2FtZVRpbWVcXFwiIG5hbWU9XFxcImdhbWVUaW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwibmV3R2FtZURhdGEuc3RhcnRzX2F0XFxcIiByZXF1aXJlZD4tLT5cXG5cIiArXG4gICAgXCIgICAgICA8IS0tPHNtYWxsPjIwMTQtMTItMDdUMTM6MDA6MDAuMDAwLTA3OjAwPC9zbWFsbD4tLT5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctZGlzYWJsZWQ9XFxcIm5ld0dhbWVGb3JtLiRpbnZhbGlkXFxcIiBuZy1jbGljaz1cXFwiY3JlYXRlR2FtZShuZXdHYW1lRGF0YSlcXFwiPkNyZWF0ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9hZG1pbi5zZWFzb25zLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2FkbWluL3NlYXNvbnMvYWRtaW4uc2Vhc29ucy50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwic2Vhc29ucy1oZWFkZXItcm93IHJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxoMz5TZWFzb25zPC9oMz5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJzZWFzb25zLWJ0bi1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjcmVhdGUtc2Vhc29uLWJ0biBidG4gYnRuLXByaW1hcnlcXFwiIG5nLWNsaWNrPVxcXCJjcmVhdGVTZWFzb24oKVxcXCI+Q3JlYXRlIFNlYXNvbjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcInNlYXNvbnMgbGlzdC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICA8YSBuZy1yZXBlYXQ9XFxcInNlYXNvbiBpbiBzZWFzb25zXFxcIiBuZy1jbGljaz1cXFwic2hvd1NlYXNvbihzZWFzb24pXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWNoZWNrIGZhLWZ3XFxcIiBuZy1zaG93PVxcXCJzZWFzb24uY3VycmVudCA9PT0gdHJ1ZVxcXCIgdGl0bGU9XFxcImN1cnJlbnQgc2Vhc29uXFxcIj48L2k+IHt7c2Vhc29uLm5hbWV9fTxicj48c3BhbiBjbGFzcz1cXFwic3RhcnQtZW5kXFxcIj5TdGFydHM6IHt7c2Vhc29uLnN0YXJ0X2Rpc3BsYXl9fSB8IEVuZHM6IHt7c2Vhc29uLmVuZF9kaXNwbGF5fX08L3NwYW4+PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJhZGdlXFxcIj57e3NlYXNvbi53ZWVrX2NvdW50fX0gd2VlazxzcGFuIG5nLXNob3c9XFxcInNlYXNvbi53ZWVrX2NvdW50ICE9PSAxXFxcIj5zPC9zcGFuPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2E+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9hZG1pbi9zZWFzb25zL3NlYXNvbi9hZG1pbi5zZWFzb24udHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9zZWFzb24vYWRtaW4uc2Vhc29uLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJwYWdlLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8aDM+e3tzZWFzb24ubmFtZX19ICh7e3NlYXNvbi5zdGFydF9kaXNwbGF5fX0gLSB7e3NlYXNvbi5lbmRfZGlzcGxheX19KTwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwic2Vhc29uLXdlZWtzLWhlYWRlci1yb3cgcm93XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICA8aDQ+V2Vla3MgWyB7e3dlZWtzLmxlbmd0aH19IF08L2g0PlxcblwiICtcbiAgICBcIiAgICA8aHI+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJzZWFzb24td2Vla3MgbGlzdC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICA8YSBuZy1yZXBlYXQ9XFxcIndlZWsgaW4gd2Vla3NcXFwiIG5nLWNsaWNrPVxcXCJzaG93V2Vlayh3ZWVrKVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1jaGVjayBmYS1md1xcXCIgbmctc2hvdz1cXFwid2Vlay5jb21wbGV0ZSA9PT0gdHJ1ZVxcXCIgdGl0bGU9XFxcImNvbXBsZXRlIHdlZWtcXFwiPjwvaT4ge3t3ZWVrLmRpc3BsYXl9fTwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcInN0YXJ0LWVuZCBjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYmFkZ2VcXFwiPnt7d2Vlay5nYW1lX2NvdW50fX0gZ2FtZTxzcGFuIG5nLXNob3c9XFxcIndlZWsuZ2FtZV9jb3VudCAhPT0gMVxcXCI+czwvc3Bhbj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9hPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcInNlYXNvbi1sZWFndWVzLWhlYWRlci1yb3cgcm93XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICA8aDQ+UHVibGljIExlYWd1ZXMgWyB7e3B1YmxpY0xlYWd1ZXMubGVuZ3RofX0gXTwvaDQ+XFxuXCIgK1xuICAgIFwiICAgIDxocj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRmlsdGVyIHB1YmxpYyBsZWFndWVzLi4uXFxcIiBuZy1tb2RlbD1cXFwicHVibGljUXVlcnlcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1idG5cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tc2VhcmNoXFxcIj48L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgICAgPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcInNlYXNvbi1sZWFndWVzIGxpc3QtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgPGEgbmctcmVwZWF0PVxcXCJwdWJsaWNMZWFndWUgaW4gcHVibGljTGVhZ3VlcyB8IGZpbHRlcjpwdWJsaWNRdWVyeTpzdHJpY3RcXFwiIG5nLWNsaWNrPVxcXCJzaG93TGVhZ3VlKHB1YmxpY0xlYWd1ZSlcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImxlYWd1ZS1uYW1lIGNvbC1zbS02IGNvbC1tZC02XFxcIj57e3B1YmxpY0xlYWd1ZS5uYW1lfX08YnI+PHNwYW4gY2xhc3M9XFxcInRlYW0tY291bnQgbGVhZ3VlLWNvbW1pc2hcXFwiPkNvbW1pc2g6IHt7cHVibGljTGVhZ3VlLmNvbW1pc2hfbmFtZXMuam9pbignLCAnKX19PC9zcGFuPjwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJwdWJsaWMtbGVhZ3VlLW1ldGFcXFwiPnt7cHVibGljTGVhZ3VlLmZvcm1hdH19PGJyPlN0YXJ0cyB7e3B1YmxpY0xlYWd1ZS5zdGFydF93ZWVrfX08L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYmFkZ2VcXFwiPjxzcGFuIG5nLXNob3c9XFxcInB1YmxpY0xlYWd1ZS5lbGltaW5hdGlvblxcXCI+e3twdWJsaWNMZWFndWUuYWxpdmVfdGVhbV9jb3VudH19Lzwvc3Bhbj57e3B1YmxpY0xlYWd1ZS50ZWFtX2NvdW50fX0gdGVhbTxzcGFuIG5nLXNob3c9XFxcInB1YmxpY0xlYWd1ZS50ZWFtX2NvdW50ICE9PSAxXFxcIj5zPC9zcGFuPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2E+XFxuXCIgK1xuICAgIFwiPC9kaXY+PGRpdiBjbGFzcz1cXFwic2Vhc29uLWxlYWd1ZXMtaGVhZGVyLXJvdyByb3dcXFwiPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxoND5Qcml2YXRlIExlYWd1ZXMgWyB7e3ByaXZhdGVMZWFndWVzLmxlbmd0aH19IF08L2g0PlxcblwiICtcbiAgICBcIiAgICA8aHI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkZpbHRlciBwcml2YXRlIGxlYWd1ZXMuLi5cXFwiIG5nLW1vZGVsPVxcXCJwcml2YXRlUXVlcnlcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1idG5cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tc2VhcmNoXFxcIj48L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgICAgPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcInNlYXNvbi1sZWFndWVzIGxpc3QtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgPGEgbmctcmVwZWF0PVxcXCJwcml2YXRlTGVhZ3VlIGluIHByaXZhdGVMZWFndWVzIHwgZmlsdGVyOnByaXZhdGVRdWVyeTpzdHJpY3RcXFwiIG5nLWNsaWNrPVxcXCJzaG93TGVhZ3VlKHByaXZhdGVMZWFndWUpXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJsZWFndWUtbmFtZSBjb2wtc20tNiBjb2wtbWQtNlxcXCI+e3twcml2YXRlTGVhZ3VlLm5hbWV9fTxicj48c3BhbiBjbGFzcz1cXFwidGVhbS1jb3VudCBsZWFndWUtY29tbWlzaFxcXCI+Q29tbWlzaDoge3twcml2YXRlTGVhZ3VlLmNvbW1pc2hfbmFtZXMuam9pbignLCAnKX19PC9zcGFuPjwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJwcml2YXRlLWxlYWd1ZS1tZXRhXFxcIj57e3ByaXZhdGVMZWFndWUuZm9ybWF0fX08YnI+U3RhcnRzIHt7cHJpdmF0ZUxlYWd1ZS5zdGFydF93ZWVrfX08L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYmFkZ2VcXFwiPjxzcGFuIG5nLXNob3c9XFxcInByaXZhdGVMZWFndWUuZWxpbWluYXRpb25cXFwiPnt7cHJpdmF0ZUxlYWd1ZS5hbGl2ZV90ZWFtX2NvdW50fX0vPC9zcGFuPnt7cHJpdmF0ZUxlYWd1ZS50ZWFtX2NvdW50fX0gdGVhbTxzcGFuIG5nLXNob3c9XFxcInByaXZhdGVMZWFndWUudGVhbV9jb3VudCAhPT0gMVxcXCI+czwvc3Bhbj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9hPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9zZWFzb24vbmV3L2FkbWluLnNlYXNvbi5uZXcudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9zZWFzb24vbmV3L2FkbWluLnNlYXNvbi5uZXcudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkNyZWF0ZSBTZWFzb248L2gzPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgPGZvcm0gbmFtZT1cXFwibmV3U2Vhc29uRm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZT5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IobmV3U2Vhc29uRm9ybS5zZWFzb25OYW1lKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKG5ld1NlYXNvbkZvcm0uc2Vhc29uTmFtZSl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwic2Vhc29uTmFtZVxcXCI+U2Vhc29uIG5hbWU6XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihuZXdTZWFzb25Gb3JtLnNlYXNvbk5hbWUsICdyZXF1aXJlZCcpXFxcIj5bIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobmV3U2Vhc29uRm9ybS5zZWFzb25OYW1lLCAnbWF4bGVuZ3RoJylcXFwiPlsgVG9vIExvbmcgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8aW5wdXQgaWQ9XFxcInNlYXNvbk5hbWVcXFwiIG5hbWU9XFxcInNlYXNvbk5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJuZXdTZWFzb25EYXRhLm5hbWVcXFwiIG5nLW1heGxlbmd0aD1cXFwiMzBcXFwiIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKG5ld1NlYXNvbkZvcm0uc2Vhc29uTmFtZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJzZWFzb25UeXBlXFxcIj5TZWFzb24gVHlwZTo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxzZWxlY3QgaWQ9XFxcInNlYXNvblR5cGVcXFwiIG5hbWU9XFxcInNlYXNvblR5cGVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJuZXdTZWFzb25EYXRhLnNlYXNvbl90eXBlXFxcIiBuZy1vcHRpb25zPVxcXCJzZWFzb25UeXBlIGFzIHNlYXNvblR5cGUgZm9yIHNlYXNvblR5cGUgaW4gc2Vhc29uVHlwZXNcXFwiIHJlcXVpcmVkPjwvc2VsZWN0PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIj5TdGFydHMgQXQgKExvY2FsIFRpbWUpOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiIGlzLW9wZW49XFxcInN0YXJ0c0F0RHJvcGRvd24uaXNvcGVuXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxhIGNsYXNzPVxcXCJkcm9wZG93bi10b2dnbGVcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCIgZGF0YS10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBkYXRhLXRhcmdldD1cXFwiI1xcXCIgaHJlZj1cXFwiI1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZm9ybWF0dGVkLWRhdGUgZGF0YS1uZy1tb2RlbD1cXFwibmV3U2Vhc29uRGF0YS5zdGFydHNfYXRcXFwiIG5nLXJlcXVpcmVkPVxcXCJ0cnVlXFxcIiBuZy1kaXNhYmxlZD1cXFwidHJ1ZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWFkZG9uXFxcIj48aSBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jYWxlbmRhclxcXCI+PC9pPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2E+XFxuXCIgK1xuICAgIFwiICAgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiIHJvbGU9XFxcIm1lbnVcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwiZExhYmVsXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGRhdGV0aW1lcGlja2VyIGRhdGEtbmctbW9kZWw9XFxcIm5ld1NlYXNvbkRhdGEuc3RhcnRzX2F0XFxcIiBkYXRhLW9uLXNldC10aW1lPVxcXCJjbG9zZVN0YXJ0c0F0KClcXFwiIGRhdGEtZGF0ZXRpbWVwaWNrZXItY29uZmlnPVxcXCJ7IG1pbnV0ZVN0ZXA6IDUgfVxcXCIvPlxcblwiICtcbiAgICBcIiAgICAgICAgPC91bD5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCI+RW5kcyBBdCAoTG9jYWwgVGltZSk6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93blxcXCIgaXMtb3Blbj1cXFwiZW5kc0F0RHJvcGRvd24uaXNvcGVuXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxhIGNsYXNzPVxcXCJkcm9wZG93bi10b2dnbGVcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCIgZGF0YS10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBkYXRhLXRhcmdldD1cXFwiI1xcXCIgaHJlZj1cXFwiI1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZm9ybWF0dGVkLWRhdGUgZGF0YS1uZy1tb2RlbD1cXFwibmV3U2Vhc29uRGF0YS5lbmRzX2F0XFxcIiBuZy1yZXF1aXJlZD1cXFwidHJ1ZVxcXCIgbmctZGlzYWJsZWQ9XFxcInRydWVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+PGkgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tY2FsZW5kYXJcXFwiPjwvaT48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPC9hPlxcblwiICtcbiAgICBcIiAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIiByb2xlPVxcXCJtZW51XFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcImRMYWJlbFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxkYXRldGltZXBpY2tlciBkYXRhLW5nLW1vZGVsPVxcXCJuZXdTZWFzb25EYXRhLmVuZHNfYXRcXFwiIGRhdGEtb24tc2V0LXRpbWU9XFxcImNsb3NlRW5kc0F0KClcXFwiIGRhdGEtZGF0ZXRpbWVwaWNrZXItY29uZmlnPVxcXCJ7IG1pbnV0ZVN0ZXA6IDUgfVxcXCIvPlxcblwiICtcbiAgICBcIiAgICAgICAgPC91bD5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctZGlzYWJsZWQ9XFxcIm5ld1NlYXNvbkZvcm0uJGludmFsaWRcXFwiIG5nLWNsaWNrPVxcXCJjcmVhdGVTZWFzb24obmV3U2Vhc29uRGF0YSlcXFwiPkNyZWF0ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvYWRtaW4vd2Vlay9hZG1pbi53ZWVrLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2FkbWluL3dlZWsvYWRtaW4ud2Vlay50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwiZ2FtZXMtaGVhZGVyLXJvdyByb3dcXFwiPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICA8aDM+PGkgY2xhc3M9XFxcImZhIGZhLWNoZWNrIGZhLWZ3XFxcIiBuZy1zaG93PVxcXCJ3ZWVrRGF0YS5jb21wbGV0ZSA9PT0gdHJ1ZVxcXCIgdGl0bGU9XFxcIldlZWsgY29tcGxldGVcXFwiPjwvaT4ge3t3ZWVrRGF0YS5zZWFzb25fdHlwZX19IHt7d2Vla0RhdGEuZGlzcGxheX19IDxzbWFsbD48YSBuZy1jbGljaz1cXFwiZWRpdFdlZWsod2Vla0RhdGEpXFxcIj5bIGVkaXQgXTwvYT48L3NtYWxsPjxicj5cXG5cIiArXG4gICAgXCIgICAgICA8c21hbGw+RGVzY3JpcHRpb246IHt7d2Vla0RhdGEuZGVzY3JpcHRpb259fTwvc21hbGw+PGJyPlxcblwiICtcbiAgICBcIiAgICAgIDxzbWFsbD5SZW1pbmRlciBTZW50OiA8c3BhbiBuZy1zaG93PVxcXCIhd2Vla0RhdGEucmVtaW5kZXJfc2VudF9hdFxcXCI+Ti9BPC9zcGFuPjxzcGFuIG5nLXNob3c9XFxcIndlZWtEYXRhLnJlbWluZGVyX3NlbnRfYXRcXFwiPnt7ZGF0ZUZvcm1hdCh3ZWVrRGF0YS5yZW1pbmRlcl9zZW50X2F0LCBcXFwibW1tIGQgaDpNTSBUVCAoWilcXFwiKX19PC9zcGFuPjwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgIDwvaDM+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwid2Vlay1idG4tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwic2VuZC1yZW1pbmRlci1idG4gYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY29uZmlybVNlbmRSZW1pbmRlcih3ZWVrRGF0YSlcXFwiPlNlbmQgUmVtaW5kZXI8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNyZWF0ZS1nYW1lLWJ0biBidG4gYnRuLXByaW1hcnlcXFwiIG5nLWNsaWNrPVxcXCJjcmVhdGVHYW1lKHdlZWtEYXRhLCBnYW1lcylcXFwiPkNyZWF0ZSBHYW1lPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwid2Vlay1nYW1lcyBsaXN0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgIDxhIG5nLXJlcGVhdD1cXFwiZ2FtZSBpbiBnYW1lc1xcXCIgbmctY2xpY2s9XFxcImVkaXRHYW1lKGdhbWUpXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJnYW1lLWRpc3BsYXktbmFtZSBjb2wtc20tNiBjb2wtbWQtNlxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWNoZWNrIGZhLWZ3XFxcIiBuZy1zaG93PVxcXCJnYW1lLmNvbXBsZXRlID09PSB0cnVlXFxcIiB0aXRsZT1cXFwiR2FtZSBmaW5pc2hlZFxcXCI+PC9pPiB7e2dhbWUuZGlzcGxheX19PGJyPjxzcGFuIGNsYXNzPVxcXCJnYW1lLXN0YXJ0c1xcXCI+e3tkYXRlRm9ybWF0KGdhbWUuc3RhcnRzX2F0LCBcXFwiZGRkLCBtbW0gZCB5eXl5IGg6TU0gVFQgKFopXFxcIil9fTwvc3Bhbj48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJnYW1lLXNjb3JlIGNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIHt7Z2FtZS5zcXVhZHNbMF0ubmFtZX19OiB7e2dhbWUudmlzaXRpbmdfc3F1YWRfc2NvcmV9fSB8IHt7Z2FtZS5zcXVhZHNbMV0ubmFtZX19OiB7e2dhbWUuaG9tZV9zcXVhZF9zY29yZX19IDxzcGFuIG5nLXNob3c9XFxcImdhbWUub3ZlcnRpbWUgPT09IHRydWVcXFwiPk9UPC9zcGFuPjxicj5cXG5cIiArXG4gICAgXCIgICAgICAgIFBpY2tzOiB7e2dhbWUucGlja19jb3VudH19XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9hPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxocj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJjb21wbGV0ZS13ZWVrLWJ0bi1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNvbXBsZXRlLXdlZWstYnRuIGJ0biBidG4tZGFuZ2VyXFxcIiBuZy1jbGljaz1cXFwiY29uZmlybVdlZWtDb21wbGV0ZSh3ZWVrRGF0YSlcXFwiPkNvbXBsZXRlIFdlZWs8L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2FkbWluL3dlZWsvZWRpdC9hZG1pbi53ZWVrLmVkaXQudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvYWRtaW4vd2Vlay9lZGl0L2FkbWluLndlZWsuZWRpdC50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+RWRpdCBXZWVrPC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxoND57e3dlZWtEYXRhLmRpc3BsYXl9fTwvaDQ+XFxuXCIgK1xuICAgIFwiICA8aHI+XFxuXCIgK1xuICAgIFwiICA8Zm9ybSBuYW1lPVxcXCJlZGl0V2Vla0Zvcm1cXFwiIGNsYXNzPVxcXCJlZGl0LXdlZWstZm9ybSBmb3JtLWhvcml6b250YWxcXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKGVkaXRXZWVrRm9ybS53ZWVrTmFtZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihlZGl0V2Vla0Zvcm0ud2Vla05hbWUpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGZvcj1cXFwid2Vla05hbWVcXFwiIGNsYXNzPVxcXCJjb2wtc20tMyBjb250cm9sLWxhYmVsXFxcIj5OYW1lOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTlcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGlucHV0IGlkPVxcXCJ3ZWVrTmFtZVxcXCIgbmFtZT1cXFwid2Vla05hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJ3ZWVrRGF0YS5uYW1lXFxcIiBuZy1tYXhsZW5ndGg9XFxcIjMwXFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoZWRpdFdlZWtGb3JtLndlZWtOYW1lLCAncmVxdWlyZWQnKVxcXCI+UmVxdWlyZWQ8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJpbnB1dC1lcnJvclxcXCIgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihlZGl0V2Vla0Zvcm0ud2Vla05hbWUsICdtYXhsZW5ndGgnKVxcXCI+VG9vIExvbmc8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IoZWRpdFdlZWtGb3JtLndlZWtOYW1lKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IoZWRpdFdlZWtGb3JtLndlZWtEZXNjcmlwdGlvbiksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihlZGl0V2Vla0Zvcm0ud2Vla0Rlc2NyaXB0aW9uKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBmb3I9XFxcIndlZWtEZXNjcmlwdGlvblxcXCIgY2xhc3M9XFxcImNvbC1zbS0zIGNvbnRyb2wtbGFiZWxcXFwiPkRlc2NyaXB0aW9uOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTlcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGlucHV0IGlkPVxcXCJ3ZWVrRGVzY3JpcHRpb25cXFwiIG5hbWU9XFxcIndlZWtEZXNjcmlwdGlvblxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcIndlZWtEYXRhLmRlc2NyaXB0aW9uXFxcIiBuZy1tYXhsZW5ndGg9XFxcIjMwXFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoZWRpdFdlZWtGb3JtLndlZWtEZXNjcmlwdGlvbiwgJ3JlcXVpcmVkJylcXFwiPlJlcXVpcmVkPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoZWRpdFdlZWtGb3JtLndlZWtEZXNjcmlwdGlvbiwgJ21heGxlbmd0aCcpXFxcIj5Ub28gTG9uZzwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihlZGl0V2Vla0Zvcm0ud2Vla0Rlc2NyaXB0aW9uKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGZvcj1cXFwid2Vla1R5cGVcXFwiIGNsYXNzPVxcXCJjb2wtc20tMyBjb250cm9sLWxhYmVsXFxcIj5XZWVrIFR5cGU6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c2VsZWN0IGlkPVxcXCJ3ZWVrVHlwZVxcXCIgbmFtZT1cXFwid2Vla1R5cGVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJ3ZWVrRGF0YS53ZWVrX3R5cGVfaWRcXFwiIG5nLW9wdGlvbnM9XFxcIndlZWtUeXBlLmlkIGFzIHdlZWtUeXBlLmRlc2NyaXB0aW9uIGZvciB3ZWVrVHlwZSBpbiB3ZWVrVHlwZXNcXFwiPjwvc2VsZWN0PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtc20tMyBjb250cm9sLWxhYmVsXFxcIj5TdGFydHMgQXQ6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93blxcXCIgaXMtb3Blbj1cXFwic3RhcnRzQXREcm9wZG93bi5pc29wZW5cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8YSBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiByb2xlPVxcXCJidXR0b25cXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgZGF0YS10YXJnZXQ9XFxcIiNcXFwiIGhyZWY9XFxcIiNcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBmb3JtYXR0ZWQtZGF0ZSBkYXRhLW5nLW1vZGVsPVxcXCJ3ZWVrRGF0YS5zdGFydHNfYXRcXFwiIG5nLXJlcXVpcmVkPVxcXCJ0cnVlXFxcIiBuZy1kaXNhYmxlZD1cXFwidHJ1ZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPjxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNhbGVuZGFyXFxcIj48L2k+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2E+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCIgcm9sZT1cXFwibWVudVxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJkTGFiZWxcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkYXRldGltZXBpY2tlciBkYXRhLW5nLW1vZGVsPVxcXCJ3ZWVrRGF0YS5zdGFydHNfYXRcXFwiIGRhdGEtb24tc2V0LXRpbWU9XFxcImNsb3NlU3RhcnRzQXQoKVxcXCIgZGF0YS1kYXRldGltZXBpY2tlci1jb25maWc9XFxcInsgbWludXRlU3RlcDogNSB9XFxcIi8+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvdWw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLXNtLTMgY29udHJvbC1sYWJlbFxcXCI+RW5kcyBBdDo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS05XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duXFxcIiBpcy1vcGVuPVxcXCJlbmRzQXREcm9wZG93bi5pc29wZW5cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8YSBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiByb2xlPVxcXCJidXR0b25cXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgZGF0YS10YXJnZXQ9XFxcIiNcXFwiIGhyZWY9XFxcIiNcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBmb3JtYXR0ZWQtZGF0ZSBkYXRhLW5nLW1vZGVsPVxcXCJ3ZWVrRGF0YS5lbmRzX2F0XFxcIiBuZy1yZXF1aXJlZD1cXFwidHJ1ZVxcXCIgbmctZGlzYWJsZWQ9XFxcInRydWVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWFkZG9uXFxcIj48aSBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jYWxlbmRhclxcXCI+PC9pPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9hPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiIHJvbGU9XFxcIm1lbnVcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwiZExhYmVsXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8ZGF0ZXRpbWVwaWNrZXIgZGF0YS1uZy1tb2RlbD1cXFwid2Vla0RhdGEuZW5kc19hdFxcXCIgZGF0YS1vbi1zZXQtdGltZT1cXFwiY2xvc2VFbmRzQXQoKVxcXCIgZGF0YS1kYXRldGltZXBpY2tlci1jb25maWc9XFxcInsgbWludXRlU3RlcDogNSB9XFxcIi8+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvdWw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctZGlzYWJsZWQ9XFxcImVkaXRXZWVrRm9ybS4kaW52YWxpZFxcXCIgbmctY2xpY2s9XFxcImVkaXRXZWVrKHdlZWtEYXRhKVxcXCI+VXBkYXRlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvY29udGFjdC9sZWFndWUuY29udGFjdC50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvY29udGFjdC9sZWFndWUuY29udGFjdC50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+Q29udGFjdCBDb21taXNoPC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxmb3JtIG5hbWU9XFxcImNvbnRhY3RGb3JtXFxcIiBjbGFzcz1cXFwiY29udGFjdC1mb3JtIGZvcm0taG9yaXpvbnRhbFxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZT5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IoY29udGFjdEZvcm0ubWVzc2FnZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihjb250YWN0Rm9ybS5tZXNzYWdlKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBmb3I9XFxcIm1lc3NhZ2VcXFwiIGNsYXNzPVxcXCJjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIj5NZXNzYWdlOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDx0ZXh0YXJlYSBpZD1cXFwibWVzc2FnZVxcXCIgbmFtZT1cXFwibWVzc2FnZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIlNlbmQgYSBkaXJlY3QgbWVzc2FnZSB0byB0aGUgY29tbWlzaC4uLlxcXCIgcm93cz1cXFwiM1xcXCIgbWF4bGVuZ3RoPVxcXCIyMDBcXFwiIG5nLW1vZGVsPVxcXCJjb21taXNoTWVzc2FnZVxcXCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoY29udGFjdEZvcm0ubWVzc2FnZSwgJ3JlcXVpcmVkJylcXFwiPlJlcXVpcmVkPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoY29udGFjdEZvcm0ubWVzc2FnZSwgJ21heGxlbmd0aCcpXFxcIj5Ub28gTG9uZzwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihjb250YWN0Rm9ybS5tZXNzYWdlKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZm9ybT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwiY29udGFjdEZvcm0uJHByaXN0aW5lIHx8IGNvbnRhY3RGb3JtLiRpbnZhbGlkXFxcIiBuZy1jbGljaz1cXFwiY29udGFjdENvbW1pc2gobGVhZ3VlRGF0YSwgY29tbWlzaE1lc3NhZ2UpXFxcIj5TZW5kPC9idXR0b24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvZWRpdC9sZWFndWUuZWRpdC50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvZWRpdC9sZWFndWUuZWRpdC50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+RWRpdCBMZWFndWU8L2gzPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgPGZvcm0gbmFtZT1cXFwibGVhZ3VlRm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZT5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXAgbGVhZ3VlLXR5cGUtYnRuLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBsZWFndWUtdHlwZS1idG5cXFwiIG5nLW1vZGVsPVxcXCJsZWFndWVEYXRhLnB1YmxpY1xcXCIgYnRuLXJhZGlvPVxcXCJ0cnVlXFxcIiB1bmNoZWNrYWJsZT5QdWJsaWMgTGVhZ3VlPGJyPjxzcGFuIGNsYXNzPVxcXCJzbWFsbC1ncmF5XFxcIj5bIGFueW9uZSBjYW4gam9pbiBdPC9zcGFuPjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgbGVhZ3VlLXR5cGUtYnRuXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5wdWJsaWNcXFwiIGJ0bi1yYWRpbz1cXFwiZmFsc2VcXFwiIHVuY2hlY2thYmxlPlByaXZhdGUgTGVhZ3VlPGJyPjxzcGFuIGNsYXNzPVxcXCJzbWFsbC1ncmF5XFxcIj5bIGludml0ZSBvbmx5IF08L3NwYW4+PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1zaG93PVxcXCIhbGVhZ3VlRGF0YS5zdGFydGVkXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwIGxlYWd1ZS1mb3JtYXQtYnRuLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBsZWFndWUtZm9ybWF0LWJ0blxcXCIgbmctY2xpY2s9XFxcImxlYWd1ZURhdGEubWF4X3BpY2tzX3Blcl93ZWVrID0gbnVsbFxcXCIgbmctbW9kZWw9XFxcImxlYWd1ZURhdGEuZWxpbWluYXRpb25cXFwiIGJ0bi1yYWRpbz1cXFwiZmFsc2VcXFwiIHVuY2hlY2thYmxlPlBpY2snZW08YnI+PHNwYW4gY2xhc3M9XFxcInNtYWxsLWdyYXlcXFwiPlsgbm8gZWxpbWluYXRpb24gXTwvc3Bhbj48L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IGxlYWd1ZS1mb3JtYXQtYnRuXFxcIiBuZy1jbGljaz1cXFwibGVhZ3VlRGF0YS5tYXhfcGlja3NfcGVyX3dlZWsgPSAxXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5lbGltaW5hdGlvblxcXCIgYnRuLXJhZGlvPVxcXCJ0cnVlXFxcIiB1bmNoZWNrYWJsZT5TdXJ2aXZvcjxicj48c3BhbiBjbGFzcz1cXFwic21hbGwtZ3JheVxcXCI+WyBzaW5nbGUgZWxpbWluYXRpb24gXTwvc3Bhbj48L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctc2hvdz1cXFwibGVhZ3VlRGF0YS5zdGFydGVkXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIj5MZWFndWUgZm9ybWF0PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHZhbHVlPVxcXCJQaWNrJ2VtIFsgbm8gZWxpbWluYXRpb24gXVxcXCIgbmctc2hvdz1cXFwiIWxlYWd1ZURhdGEuZWxpbWluYXRpb25cXFwiIG5nLWRpc2FibGVkPVxcXCJ0cnVlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHZhbHVlPVxcXCJTdXJ2aXZvciBbIHNpbmdsZSBlbGltaW5hdGlvbiBdXFxcIiBuZy1zaG93PVxcXCJsZWFndWVEYXRhLmVsaW1pbmF0aW9uXFxcIiBuZy1kaXNhYmxlZD1cXFwidHJ1ZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcIm1heFBpY2tzXFxcIj5Ib3cgbWFueSBsb3NlcnMgY2FuIEkgcGljayBwZXIgd2Vlaz88L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c2VsZWN0IGlkPVxcXCJtYXhQaWNrc1xcXCIgbmFtZT1cXFwibWF4UGlja3NcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLWRpc2FibGVkPVxcXCJsZWFndWVEYXRhLmVsaW1pbmF0aW9uXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5tYXhfcGlja3NfcGVyX3dlZWtcXFwiIG5nLW9wdGlvbnM9XFxcIm1heFBpY2subnVtYmVyIGFzIG1heFBpY2suZGlzcGxheSBmb3IgbWF4UGljayBpbiBtYXhQaWNrc1BlcldlZWtcXFwiPjwvc2VsZWN0PlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJsZWFndWVEYXRhLmVsaW1pbmF0aW9uXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtd2FybmluZyBmYS1md1xcXCIgdGl0bGU9XFxcIldhcm5pbmdcXFwiPjwvaT4gU3Vydml2b3IgbGVhZ3VlcyBvbmx5IGFsbG93IDEgcGljayBwZXIgd2Vlaywgbm8gcmVwZWF0czwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxocj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKGxlYWd1ZUZvcm0ubGVhZ3VlTmFtZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihsZWFndWVGb3JtLmxlYWd1ZU5hbWUpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJsZWFndWVOYW1lXFxcIj5MZWFndWUgbmFtZVxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGxlYWd1ZUZvcm0ubGVhZ3VlTmFtZSwgJ3JlcXVpcmVkJylcXFwiPlsgUmVxdWlyZWQgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobGVhZ3VlRm9ybS5sZWFndWVOYW1lLCAnbWF4bGVuZ3RoJylcXFwiPlsgVG9vIExvbmcgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpbnB1dCBpZD1cXFwibGVhZ3VlTmFtZVxcXCIgbmFtZT1cXFwibGVhZ3VlTmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcImxlYWd1ZURhdGEubmFtZVxcXCIgbmctbWF4bGVuZ3RoPVxcXCIzMFxcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKGxlYWd1ZUZvcm0ubGVhZ3VlTmFtZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiPlNlYXNvbjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpbnB1dCBpZD1cXFwic2Vhc29uTmFtZVxcXCIgbmFtZT1cXFwic2Vhc29uTmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcImxlYWd1ZURhdGEuc2Vhc29uX25hbWVcXFwiIG5nLWRpc2FibGVkPVxcXCJ0cnVlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwic3RhcnRXZWVrXFxcIj5TdGFydCB3ZWVrPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNlbGVjdCBpZD1cXFwic3RhcnRXZWVrXFxcIiBuYW1lPVxcXCJzdGFydFdlZWtcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLXNob3c9XFxcIiFsZWFndWVEYXRhLnN0YXJ0ZWRcXFwiIG5nLW1vZGVsPVxcXCJsZWFndWVEYXRhLnN0YXJ0X3dlZWtfaWRcXFwiIG5nLW9wdGlvbnM9XFxcIndlZWsuaWQgYXMgd2Vlay5kaXNwbGF5IGZvciB3ZWVrIGluIHdlZWtzXFxcIj48L3NlbGVjdD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJzdGFydFdlZWtEaXNwbGF5XFxcIiBuYW1lPVxcXCJzdGFydFdlZWtEaXNwbGF5XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1zaG93PVxcXCJsZWFndWVEYXRhLnN0YXJ0ZWRcXFwiIG5nLW1vZGVsPVxcXCJsZWFndWVEYXRhLnN0YXJ0X3dlZWtfZGlzcGxheVxcXCIgbmctZGlzYWJsZWQ9XFxcInRydWVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IobGVhZ3VlRm9ybS5tYXhUZWFtcyksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihsZWFndWVGb3JtLm1heFRlYW1zKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwibWF4VGVhbXNcXFwiPkhvdyBtYW55IHRpbWVzIGNhbiBhIHVzZXIgam9pbj9cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihsZWFndWVGb3JtLm1heFRlYW1zLCAncmVxdWlyZWQnKVxcXCI+WyBOdW1iZXIgUmVxdWlyZWQgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobGVhZ3VlRm9ybS5tYXhUZWFtcywgJ21pbicpXFxcIj5bIDEgLSAxMCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihsZWFndWVGb3JtLm1heFRlYW1zLCAnbWF4JylcXFwiPlsgMSAtIDEwIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aW5wdXQgaWQ9XFxcIm1heFRlYW1zXFxcIiBuYW1lPVxcXCJtYXhUZWFtc1xcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBwbGFjZWhvbGRlcj1cXFwiQmV0d2VlbiAxIGFuZCAxMFxcXCIgbWluPVxcXCIxXFxcIiBtYXg9XFxcIjEwXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5tYXhfdGVhbXNfcGVyX3VzZXJcXFwiIGxvZ2gtZm9jdXMgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKGxlYWd1ZUZvcm0ubWF4VGVhbXMpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcIm1lc3NhZ2VcXFwiPk1lc3NhZ2UgWyBPcHRpb25hbCBdPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHRleHRhcmVhIGlkPVxcXCJtZXNzYWdlXFxcIiBuYW1lPVxcXCJtZXNzYWdlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgYSBtZXNzYWdlIGZvciB5b3VyIGxlYWd1ZSBoZXJlLiBZb3UgY2FuIGNoYW5nZSBpdCBhdCBhbnkgdGltZS5cXFwiIHJvd3M9XFxcIjJcXFwiIG1heGxlbmd0aD1cXFwiNTAwXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5tZXNzYWdlXFxcIj48L3RleHRhcmVhPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9mb3JtPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+Q2FuY2VsPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG5nLWRpc2FibGVkPVxcXCJsZWFndWVGb3JtLiRpbnZhbGlkIHx8IGVkaXRCdG5EaXNhYmxlZFxcXCIgbmctY2xpY2s9XFxcInVwZGF0ZUxlYWd1ZShsZWFndWVEYXRhKVxcXCI+VXBkYXRlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlL2xlYWd1ZS5pbnZpdGUudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2ludml0ZS9sZWFndWUuaW52aXRlLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj48c3BhbiBuZy1zaG93PVxcXCIhbGVhZ3VlQ2xvc2VkXFxcIj5JbnZpdGUgRnJpZW5kczwvc3Bhbj48c3BhbiBuZy1zaG93PVxcXCJsZWFndWVDbG9zZWRcXFwiPkludml0YXRpb25zPC9zcGFuPjwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IG5nLXNob3c9XFxcIiFsZWFndWVDbG9zZWRcXFwiPlxcblwiICtcbiAgICBcIiAgICA8Zm9ybSBuYW1lPVxcXCJpbnZpdGVGb3JtXFxcIiBjbGFzcz1cXFwiaW52aXRlLWZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihpbnZpdGVGb3JtLmVtYWlscyksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihpbnZpdGVGb3JtLmVtYWlscyl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJlbWFpbHNcXFwiIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIj5FbWFpbChzKTo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwiZW1haWxzXFxcIiBuYW1lPVxcXCJlbWFpbHNcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJTZXBlcmF0ZSBlbWFpbHMgd2l0aCBhIHNwYWNlLi4uXFxcIiBuZy1tb2RlbD1cXFwiaW52aXRhdGlvbi5lbWFpbFxcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJpbnB1dC1lcnJvclxcXCIgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihpbnZpdGVGb3JtLmVtYWlscywgJ3JlcXVpcmVkJylcXFwiPlJlcXVpcmVkPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihpbnZpdGVGb3JtLmVtYWlscylcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKGludml0ZUZvcm0ubWVzc2FnZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihpbnZpdGVGb3JtLm1lc3NhZ2UpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibWVzc2FnZVxcXCIgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiPk1lc3NhZ2U6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XFxcIm1lc3NhZ2VcXFwiIG5hbWU9XFxcIm1lc3NhZ2VcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciBhIG9wdGlvbmFsIG1lc3NhZ2UgdG8gZGVsaXZlciB3aXRoIHRoZSBpbnZpdGF0aW9uLi4uXFxcIiByb3dzPVxcXCIzXFxcIiBtYXhsZW5ndGg9XFxcIjQwMFxcXCIgbmctbW9kZWw9XFxcImludml0YXRpb24ubWVzc2FnZVxcXCI+PC90ZXh0YXJlYT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGludml0ZUZvcm0ubWVzc2FnZSwgJ21heGxlbmd0aCcpXFxcIj5Ub28gTG9uZzwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IoaW52aXRlRm9ybS5tZXNzYWdlKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImludml0ZS1yZXNldC1idG4gYnRuIGJ0bi1kZWZhdWx0IGJ0bi1ibG9ja1xcXCIgbmctY2xpY2s9XFxcInJlc2V0SW52aXRlKClcXFwiPkNsZWFyPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiaW52aXRlLXNlbmQtYnRuIGJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcXFwiIG5nLWRpc2FibGVkPVxcXCJpbnZpdGVGb3JtLiRpbnZhbGlkXFxcIiBuZy1jbGljaz1cXFwic2VuZEludml0ZShpbnZpdGF0aW9uKVxcXCI+U2VuZDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZm9ybT5cXG5cIiArXG4gICAgXCIgICAgPGhyPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IG5nLXNob3c9XFxcImlzQ29tbWlzaFxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImludml0ZXMtdGFiXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8dWwgY2xhc3M9XFxcIm5hdiBuYXYtdGFic1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGkgY2xhc3M9XFxcImFjdGl2ZVxcXCI+PGE+SW52aXRlcyBbIHt7aW52aXRhdGlvbnMubGVuZ3RofX0gXTwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgIDwvdWw+XFxuXCIgK1xuICAgIFwiICAgICAgPHNwYW4gY2xhc3M9XFxcImNsaWNrLXRvLWVkaXRcXFwiIG5nLXNob3c9XFxcIiFsZWFndWVDbG9zZWRcXFwiPlsgY2xpY2sgaW52aXRlIHRvIGVkaXQgXTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImxlYWd1ZS1pbnZpdGVzXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJsaXN0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxhIG5nLXJlcGVhdD1cXFwiaW52aXRlIGluIGludml0YXRpb25zXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIiBuZy1jbGljaz1cXFwicG9wdWxhdGVJbnZpdGUoaW52aXRlKVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY2hlY2sgZmEtZndcXFwiIG5nLXNob3c9XFxcImludml0ZS5hY2NlcHRlZF9hdFxcXCIgdGl0bGU9XFxcIkFjY2VwdGVkXFxcIj48L2k+IHt7aW52aXRlLmVtYWlsfX1cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxicj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzZW50LWRhdGVcXFwiPjxzcGFuIG5nLXNob3c9XFxcIiFpbnZpdGUuYWNjZXB0ZWRfYXRcXFwiPlNlbnQ6IHt7aW52aXRlLnVwZGF0ZWRfYXR9fTwvc3Bhbj48c3BhbiBuZy1zaG93PVxcXCJpbnZpdGUuYWNjZXB0ZWRfYXRcXFwiPkpvaW5lZDoge3tpbnZpdGUuYWNjZXB0ZWRfYXR9fTwvc3Bhbj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8YnI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW52aXRlZVxcXCIgbmctc2hvdz1cXFwiaW52aXRlLmludml0ZWUubGVuZ3RoID4gMFxcXCI+SW52aXRlZToge3tpbnZpdGUuaW52aXRlZX19PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvYT5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJuby1waWNrcy1hbGVydCBhbGVydCBhbGVydC1pbmZvXFxcIiBuZy1zaG93PVxcXCJpbnZpdGF0aW9ucy5sZW5ndGggPT0gMFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICBObyBpbnZpdGVzXFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DbG9zZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2ludml0ZS9yZXF1ZXN0L2xlYWd1ZS5pbnZpdGUucmVxdWVzdC50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlL3JlcXVlc3QvbGVhZ3VlLmludml0ZS5yZXF1ZXN0LnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5SZXF1ZXN0IEludml0ZTwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8Zm9ybSBuYW1lPVxcXCJyZXF1ZXN0SW52aXRlRm9ybVxcXCIgY2xhc3M9XFxcInJlcXVlc3QtaW52aXRlLWZvcm0gZm9ybS1ob3Jpem9udGFsXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihyZXF1ZXN0SW52aXRlRm9ybS5lbWFpbCksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihyZXF1ZXN0SW52aXRlRm9ybS5lbWFpbCl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgZm9yPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPkZvcjo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8aW5wdXQgaWQ9XFxcImVtYWlsXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciBlbWFpbFxcXCIgbmctbW9kZWw9XFxcImludml0YXRpb24uZW1haWxcXFwiIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJpbnB1dC1lcnJvclxcXCIgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihyZXF1ZXN0SW52aXRlRm9ybS5lbWFpbCwgJ3JlcXVpcmVkJylcXFwiPlJlcXVpcmVkPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IocmVxdWVzdEludml0ZUZvcm0uZW1haWwsICdlbWFpbCcpXFxcIj5JbnZhbGlkIGVtYWlsPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKHJlcXVlc3RJbnZpdGVGb3JtLmVtYWlsKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IocmVxdWVzdEludml0ZUZvcm0ubWVzc2FnZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihyZXF1ZXN0SW52aXRlRm9ybS5tZXNzYWdlKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBmb3I9XFxcIm1lc3NhZ2VcXFwiIGNsYXNzPVxcXCJjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIj5NZXNzYWdlOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDx0ZXh0YXJlYSBpZD1cXFwibWVzc2FnZVxcXCIgbmFtZT1cXFwibWVzc2FnZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVudGVyIGEgb3B0aW9uYWwgbWVzc2FnZSBmb3IgdGhlIGNvbW1pc2ggb2YgdGhlIGxlYWd1ZS4uLlxcXCIgcm93cz1cXFwiM1xcXCIgbWF4bGVuZ3RoPVxcXCIyMDBcXFwiIG5nLW1vZGVsPVxcXCJpbnZpdGF0aW9uLm1lc3NhZ2VcXFwiPjwvdGV4dGFyZWE+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKHJlcXVlc3RJbnZpdGVGb3JtLm1lc3NhZ2UsICdtYXhsZW5ndGgnKVxcXCI+VG9vIExvbmc8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IocmVxdWVzdEludml0ZUZvcm0ubWVzc2FnZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctZGlzYWJsZWQ9XFxcInJlcXVlc3RJbnZpdGVGb3JtLiRpbnZhbGlkXFxcIiBuZy1jbGljaz1cXFwicmVxdWVzdEludml0ZShpbnZpdGF0aW9uKVxcXCI+UmVxdWVzdCBJbnZpdGU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9qb2luL2xlYWd1ZS5qb2luLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9qb2luL2xlYWd1ZS5qb2luLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5Kb2luIExlYWd1ZTwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8Zm9ybSBuYW1lPVxcXCJqb2luRm9ybVxcXCIgY2xhc3M9XFxcImpvaW4tZm9ybSBmb3JtLWhvcml6b250YWxcXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKGpvaW5Gb3JtLnRlYW1OYW1lKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKGpvaW5Gb3JtLnRlYW1OYW1lKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBmb3I9XFxcInRlYW1OYW1lXFxcIiBjbGFzcz1cXFwiY29sLXNtLTQgY29sLW1kLTQgY29udHJvbC1sYWJlbFxcXCI+R2l2ZSB5b3VyIHRlYW0gYSBuYW1lOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTggY29sLW1kLThcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGlucHV0IGlkPVxcXCJ0ZWFtTmFtZVxcXCIgbmFtZT1cXFwidGVhbU5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciBuYW1lLi4uXFxcIiBuZy1tb2RlbD1cXFwibmV3VGVhbURhdGEubmFtZVxcXCIgbmctbWF4bGVuZ3RoPVxcXCIzMFxcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGpvaW5Gb3JtLnRlYW1OYW1lLCAncmVxdWlyZWQnKVxcXCI+UmVxdWlyZWQ8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJpbnB1dC1lcnJvclxcXCIgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihqb2luRm9ybS50ZWFtTmFtZSwgJ21heGxlbmd0aCcpXFxcIj5Ub28gTG9uZzwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihqb2luRm9ybS50ZWFtTmFtZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctZGlzYWJsZWQ9XFxcImpvaW5Gb3JtLiRwcmlzdGluZSB8fCBqb2luRm9ybS4kaW52YWxpZFxcXCIgbmctY2xpY2s9XFxcImpvaW5MZWFndWUobmV3VGVhbURhdGEpXFxcIj5Kb2luPC9idXR0b24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbGVhZ3VlLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9sZWFndWUudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgdWktdmlldz1cXFwibGVhZ3VlQ29udGVudFxcXCIgY2xhc3M9XFxcImxlYWd1ZS1jb250ZW50XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9tZXNzYWdlL2xlYWd1ZS5tZXNzYWdlLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9tZXNzYWdlL2xlYWd1ZS5tZXNzYWdlLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5VcGRhdGUgTWVzc2FnZTwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8Zm9ybSBuYW1lPVxcXCJtZXNzYWdlRm9ybVxcXCIgY2xhc3M9XFxcImxlYWd1ZS1tZXNzYWdlLWZvcm0gZm9ybS1ob3Jpem9udGFsXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihtZXNzYWdlRm9ybS5tZXNzYWdlKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKG1lc3NhZ2VGb3JtLm1lc3NhZ2UpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGZvcj1cXFwibWVzc2FnZVxcXCIgY2xhc3M9XFxcImNvbC1zbS00IGNvbnRyb2wtbGFiZWxcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgTGVhZ3VlIE1lc3NhZ2U6IDxicj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobWVzc2FnZUZvcm0ubWVzc2FnZSwgJ21heGxlbmd0aCcpXFxcIj5bIFRvbyBMb25nIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLThcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPHRleHRhcmVhIGlkPVxcXCJtZXNzYWdlXFxcIiBuYW1lPVxcXCJtZXNzYWdlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgYSBtZXNzYWdlIGZvciB5b3VyIGxlYWd1ZSB0byBzZWUgb3IgbGVhdmUgaXQgYmxhbmsuXFxcIiByb3dzPVxcXCIzXFxcIiBuZy1tYXhsZW5ndGg9XFxcIjUwMFxcXCIgbmctbW9kZWw9XFxcImxlYWd1ZURhdGEubWVzc2FnZVxcXCI+PC90ZXh0YXJlYT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImVtYWlsLWxlYWd1ZS1tZXNzYWdlLWNoZWNrYm94XFxcIiBuZy1zaG93PVxcXCJsZWFndWVEYXRhLmVsaW1pbmF0aW9uXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcIm1lc3NhZ2VPcHRpb25zLnNlbmRBbGl2ZVxcXCI+IGVtYWlsIG1lc3NhZ2UgdG8gYWxpdmUgdGVhbXM8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJlbWFpbC1sZWFndWUtbWVzc2FnZS1jaGVja2JveFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIG5nLW1vZGVsPVxcXCJtZXNzYWdlT3B0aW9ucy5zZW5kQWxsXFxcIj4gZW1haWwgbWVzc2FnZSB0byBhbGwgdGVhbXM8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihtZXNzYWdlRm9ybS5tZXNzYWdlKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZm9ybT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwibWVzc2FnZUZvcm0uJHByaXN0aW5lIHx8IG1lc3NhZ2VGb3JtLiRpbnZhbGlkXFxcIiBuZy1jbGljaz1cXFwidXBkYXRlTWVzc2FnZShsZWFndWVEYXRhLCBtZXNzYWdlT3B0aW9ucy5zZW5kQWxpdmUsIG1lc3NhZ2VPcHRpb25zLnNlbmRBbGwpXFxcIj5VcGRhdGU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9uZXcvbGVhZ3VlLm5ldy50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbmV3L2xlYWd1ZS5uZXcudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkNyZWF0ZSBMZWFndWU8L2gzPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgPGZvcm0gbmFtZT1cXFwibGVhZ3VlRm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZT5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXAgbGVhZ3VlLXR5cGUtYnRuLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBsZWFndWUtdHlwZS1idG5cXFwiIG5nLW1vZGVsPVxcXCJsZWFndWVEYXRhLnB1YmxpY1xcXCIgYnRuLXJhZGlvPVxcXCJ0cnVlXFxcIiB1bmNoZWNrYWJsZT5QdWJsaWMgTGVhZ3VlPGJyPjxzcGFuIGNsYXNzPVxcXCJzbWFsbC1ncmF5XFxcIj5bIGFueW9uZSBjYW4gam9pbiBdPC9zcGFuPjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgbGVhZ3VlLXR5cGUtYnRuXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5wdWJsaWNcXFwiIGJ0bi1yYWRpbz1cXFwiZmFsc2VcXFwiIHVuY2hlY2thYmxlPlByaXZhdGUgTGVhZ3VlPGJyPjxzcGFuIGNsYXNzPVxcXCJzbWFsbC1ncmF5XFxcIj5bIGludml0ZSBvbmx5IF08L3NwYW4+PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwIGxlYWd1ZS1mb3JtYXQtYnRuLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBsZWFndWUtZm9ybWF0LWJ0blxcXCIgbmctY2xpY2s9XFxcImxlYWd1ZURhdGEubWF4X3BpY2tzX3Blcl93ZWVrID0gbnVsbFxcXCIgbmctbW9kZWw9XFxcImxlYWd1ZURhdGEuZWxpbWluYXRpb25cXFwiIGJ0bi1yYWRpbz1cXFwiZmFsc2VcXFwiIHVuY2hlY2thYmxlPlBpY2snZW08YnI+PHNwYW4gY2xhc3M9XFxcInNtYWxsLWdyYXlcXFwiPlsgbm8gZWxpbWluYXRpb24gXTwvc3Bhbj48L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IGxlYWd1ZS1mb3JtYXQtYnRuXFxcIiBuZy1jbGljaz1cXFwibGVhZ3VlRGF0YS5tYXhfcGlja3NfcGVyX3dlZWsgPSAxXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5lbGltaW5hdGlvblxcXCIgYnRuLXJhZGlvPVxcXCJ0cnVlXFxcIiB1bmNoZWNrYWJsZT5TdXJ2aXZvcjxicj48c3BhbiBjbGFzcz1cXFwic21hbGwtZ3JheVxcXCI+WyBzaW5nbGUgZWxpbWluYXRpb24gXTwvc3Bhbj48L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwibWF4UGlja3NcXFwiPkhvdyBtYW55IGxvc2VycyBjYW4gSSBwaWNrIHBlciB3ZWVrPzwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzZWxlY3QgaWQ9XFxcIm1heFBpY2tzXFxcIiBuYW1lPVxcXCJtYXhQaWNrc1xcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctZGlzYWJsZWQ9XFxcImxlYWd1ZURhdGEuZWxpbWluYXRpb25cXFwiIG5nLW1vZGVsPVxcXCJsZWFndWVEYXRhLm1heF9waWNrc19wZXJfd2Vla1xcXCIgbmctb3B0aW9ucz1cXFwibWF4UGljay5udW1iZXIgYXMgbWF4UGljay5kaXNwbGF5IGZvciBtYXhQaWNrIGluIG1heFBpY2tzUGVyV2Vla1xcXCI+PC9zZWxlY3Q+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImxlYWd1ZURhdGEuZWxpbWluYXRpb25cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS13YXJuaW5nIGZhLWZ3XFxcIiB0aXRsZT1cXFwiV2FybmluZ1xcXCI+PC9pPiBTdXJ2aXZvciBsZWFndWVzIG9ubHkgYWxsb3cgMSBwaWNrIHBlciB3ZWVrLCBubyByZXBlYXRzPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGhyPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IobGVhZ3VlRm9ybS5sZWFndWVOYW1lKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKGxlYWd1ZUZvcm0ubGVhZ3VlTmFtZSl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImxlYWd1ZU5hbWVcXFwiPkxlYWd1ZSBuYW1lXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobGVhZ3VlRm9ybS5sZWFndWVOYW1lLCAncmVxdWlyZWQnKVxcXCI+WyBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihsZWFndWVGb3JtLmxlYWd1ZU5hbWUsICdtYXhsZW5ndGgnKVxcXCI+WyBUb28gTG9uZyBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJsZWFndWVOYW1lXFxcIiBuYW1lPVxcXCJsZWFndWVOYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5uYW1lXFxcIiBuZy1tYXhsZW5ndGg9XFxcIjMwXFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IobGVhZ3VlRm9ybS5sZWFndWVOYW1lKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJsZWFndWUtbmlja25hbWUgcm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwibmlja25hbWVcXFwiPk5pY2tuYW1lPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJuaWNrbmFtZVxcXCIgbmFtZT1cXFwibmlja25hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJsZWFndWVEYXRhLm5pY2tuYW1lXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwic2Vhc29uXFxcIj5TZWFzb248L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c2VsZWN0IGlkPVxcXCJzZWFzb25cXFwiIG5hbWU9XFxcInNlYXNvblxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctY2hhbmdlPVxcXCJnZXRTZWFzb25XZWVrcygpXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5zZWFzb25faWRcXFwiIG5nLW9wdGlvbnM9XFxcInNlYXNvbi5pZCBhcyBzZWFzb24ubmFtZSBmb3Igc2Vhc29uIGluIHNlYXNvbnNcXFwiPjwvc2VsZWN0PlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJzdGFydFdlZWtcXFwiPlN0YXJ0IHdlZWs8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c2VsZWN0IGlkPVxcXCJzdGFydFdlZWtcXFwiIG5hbWU9XFxcInN0YXJ0V2Vla1xcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcImxlYWd1ZURhdGEuc3RhcnRfd2Vla19pZFxcXCIgbmctb3B0aW9ucz1cXFwid2Vlay5pZCBhcyB3ZWVrLmRpc3BsYXkgZm9yIHdlZWsgaW4gd2Vla3NcXFwiIHJlcXVpcmVkPjwvc2VsZWN0PlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IobGVhZ3VlRm9ybS5tYXhUZWFtcyksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihsZWFndWVGb3JtLm1heFRlYW1zKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwibWF4VGVhbXNcXFwiPkhvdyBtYW55IHRpbWVzIGNhbiBhIHVzZXIgam9pbj9cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihsZWFndWVGb3JtLm1heFRlYW1zLCAncmVxdWlyZWQnKVxcXCI+WyBOdW1iZXIgUmVxdWlyZWQgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobGVhZ3VlRm9ybS5tYXhUZWFtcywgJ21pbicpXFxcIj5bIDEgLSAxMCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihsZWFndWVGb3JtLm1heFRlYW1zLCAnbWF4JylcXFwiPlsgMSAtIDEwIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aW5wdXQgaWQ9XFxcIm1heFRlYW1zXFxcIiBuYW1lPVxcXCJtYXhUZWFtc1xcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBwbGFjZWhvbGRlcj1cXFwiQmV0d2VlbiAxIGFuZCAxMFxcXCIgbWluPVxcXCIxXFxcIiBtYXg9XFxcIjEwXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5tYXhfdGVhbXNfcGVyX3VzZXJcXFwiIGxvZ2gtZm9jdXMgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKGxlYWd1ZUZvcm0ubWF4VGVhbXMpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcIm1lc3NhZ2VcXFwiPk1lc3NhZ2UgWyBPcHRpb25hbCBdPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHRleHRhcmVhIGlkPVxcXCJtZXNzYWdlXFxcIiBuYW1lPVxcXCJtZXNzYWdlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgYSBtZXNzYWdlIGZvciB5b3VyIGxlYWd1ZSBoZXJlLiBZb3UgY2FuIGNoYW5nZSBpdCBhdCBhbnkgdGltZS5cXFwiIHJvd3M9XFxcIjJcXFwiIG1heGxlbmd0aD1cXFwiNTAwXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5tZXNzYWdlXFxcIj48L3RleHRhcmVhPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9mb3JtPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+Q2FuY2VsPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG5nLWRpc2FibGVkPVxcXCJsZWFndWVGb3JtLiRpbnZhbGlkIHx8IGNyZWF0ZUJ0bkRpc2FibGVkXFxcIiBuZy1jbGljaz1cXFwiY3JlYXRlTGVhZ3VlKGxlYWd1ZURhdGEpXFxcIj5DcmVhdGU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS92aWV3L2xlYWd1ZS52aWV3LnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS92aWV3L2xlYWd1ZS52aWV3LnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJoZWFkZXItcm93IHJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNyBjb2wtbWQtN1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImJ0bi1ncm91cCBsZWFndWVzLWRyb3Bkb3duXFxcIiBkcm9wZG93biBpcy1vcGVuPVxcXCJsZWFndWVEcm9wZG93bi5pc29wZW5cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwibGVhZ3Vlcy1idG4tbGluayBidG4gYnRuLWxpbmsgZHJvcGRvd24tdG9nZ2xlXFxcIiBuZy1kaXNhYmxlZD1cXFwiIWlzQ29tbWlzaChsZWFndWVEYXRhKSAmJiAhaXNBZG1pbigpXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJsZWFndWUtbmFtZVxcXCIgbmctY2xhc3M9XFxcInsnZGlzYWJsZWQnOiAhaXNDb21taXNoKGxlYWd1ZURhdGEpICYmICFpc0FkbWluKCl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1sb2NrIGljb25cXFwiIHRpdGxlPVxcXCJQcml2YXRlIGxlYWd1ZVxcXCIgbmctc2hvdz1cXFwiIWxlYWd1ZURhdGEucHVibGljXFxcIj48L2k+XFxuXCIgK1xuICAgIFwiICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdW5sb2NrIGljb25cXFwiIHRpdGxlPVxcXCJQdWJsaWMgbGVhZ3VlXFxcIiBuZy1zaG93PVxcXCJsZWFndWVEYXRhLnB1YmxpY1xcXCI+PC9pPlxcblwiICtcbiAgICBcIiAgICAgICAgPHN0cm9uZz57e2xlYWd1ZURhdGEubmFtZX19PC9zdHJvbmc+PC9zcGFuPiA8c3BhbiBuZy1zaG93PVxcXCJpc0NvbW1pc2gobGVhZ3VlRGF0YSkgfHwgaXNBZG1pbigpXFxcIiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnUgbGVhZ3VlLWFjdGlvbnMtbWVudVxcXCIgcm9sZT1cXFwibWVudVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGk+PGEgbmctc2hvdz1cXFwiaXNDb21taXNoKGxlYWd1ZURhdGEpIHx8IGlzQWRtaW4oKVxcXCIgbmctY2xpY2s9XFxcInRvZ2dsZURyb3Bkb3duKCRldmVudCk7ZWRpdExlYWd1ZShsZWFndWVEYXRhKVxcXCI+RWRpdCBsZWFndWU8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaT48YSBuZy1zaG93PVxcXCJpc0NvbW1pc2gobGVhZ3VlRGF0YSlcXFwiIG5nLWNsaWNrPVxcXCJ0b2dnbGVEcm9wZG93bigkZXZlbnQpO3VwZGF0ZU1lc3NhZ2UobGVhZ3VlRGF0YSlcXFwiPkVkaXQgbGVhZ3VlIG1lc3NhZ2U8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaT48YSBuZy1zaG93PVxcXCJpc0NvbW1pc2gobGVhZ3VlRGF0YSlcXFwiIG5nLWNsaWNrPVxcXCJ0b2dnbGVEcm9wZG93bigkZXZlbnQpO2ludml0ZShsZWFndWVEYXRhLmlkLCBpc0NvbW1pc2gobGVhZ3VlRGF0YSksIGxlYWd1ZURhdGEuY2xvc2VkKVxcXCI+TWFuYWdlIGludml0YXRpb25zPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGk+PGEgbmctc2hvdz1cXFwiaXNDb21taXNoKGxlYWd1ZURhdGEpICYmIHRlYW1PcHRpb25zLmluYWN0aXZlID09IHRydWVcXFwiIG5nLWNsaWNrPVxcXCJ0b2dnbGVEcm9wZG93bigkZXZlbnQpO3Nob3dEZWFjdGl2YXRlZFRlYW1zKGZhbHNlKTtcXFwiPkhpZGUgZGVhY3RpdmF0ZWQgdGVhbXM8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaT48YSBuZy1zaG93PVxcXCJpc0NvbW1pc2gobGVhZ3VlRGF0YSkgJiYgdGVhbU9wdGlvbnMuaW5hY3RpdmUgPT0gZmFsc2VcXFwiIG5nLWNsaWNrPVxcXCJ0b2dnbGVEcm9wZG93bigkZXZlbnQpO3Nob3dEZWFjdGl2YXRlZFRlYW1zKHRydWUpO1xcXCI+U2hvdyBkZWFjdGl2YXRlZCB0ZWFtczwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgIDwvdWw+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8aDMgc3R5bGU9XFxcIm1hcmdpbi10b3A6IDA7XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJsZWFndWUtbWV0YVxcXCIgbmctY2xhc3M9XFxcInsnc2hvdy1tZXRhJzogIWxlYWd1ZURhdGEuY2xvc2VkfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGw+Q29tbWlzaCBbIHt7bGVhZ3VlRGF0YS5jb21taXNoX25hbWVzLmpvaW4oJywgJyl9fSBdPC9zbWFsbD48YnI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGw+e3tsZWFndWVEYXRhLmZvcm1hdH19PC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8c21hbGw+e3tzdGFydHMobGVhZ3VlRGF0YSl9fTwvc21hbGw+PGJyPlxcblwiICtcbiAgICBcIiAgICA8L2gzPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNSBjb2wtbWQtNVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiam9pbi1idG4gYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1zaG93PVxcXCIhbGVhZ3VlRGF0YS5jbG9zZWRcXFwiIG5nLWNsaWNrPVxcXCJqb2luTGVhZ3VlKGxlYWd1ZURhdGEpXFxcIj5Kb2luICh7e2xlYWd1ZURhdGEubWF4X3RlYW1zX3Blcl91c2VyfX1YIE1heCk8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJpbnZpdGUtYnRuIGJ0biBidG4tZGVmYXVsdFxcXCIgbmctc2hvdz1cXFwiIWxlYWd1ZURhdGEuY2xvc2VkICYmIChsZWFndWVEYXRhLnB1YmxpYyB8fCBpc0NvbW1pc2gobGVhZ3VlRGF0YSkpXFxcIiBuZy1jbGljaz1cXFwiaW52aXRlKGxlYWd1ZURhdGEuaWQsIGlzQ29tbWlzaChsZWFndWVEYXRhKSwgbGVhZ3VlRGF0YS5jbG9zZWQpXFxcIj5JbnZpdGU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJyZXF1ZXN0LWludml0ZS1idG4gYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1zaG93PVxcXCIhbGVhZ3VlRGF0YS5jbG9zZWQgJiYgIWxlYWd1ZURhdGEucHVibGljICYmICFpc0NvbW1pc2gobGVhZ3VlRGF0YSlcXFwiIG5nLWNsaWNrPVxcXCJyZXF1ZXN0SW52aXRlKGxlYWd1ZURhdGEpXFxcIj5SZXF1ZXN0IEludml0ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICA8aDMgY2xhc3M9XFxcImxlYWd1ZS1tZXRhLXJpZ2h0XFxcIiBuZy1zaG93PVxcXCJsZWFndWVEYXRhLmNsb3NlZFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPHNtYWxsPkNvbW1pc2ggWyB7e2xlYWd1ZURhdGEuY29tbWlzaF9uYW1lcy5qb2luKCcsICcpfX0gXTwvc21hbGw+PGJyPlxcblwiICtcbiAgICBcIiAgICAgIDxzbWFsbD57e2xlYWd1ZURhdGEuZm9ybWF0fX08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICA8L2gzPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGhyPlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImxlYWd1ZS1tZXNzYWdlXFxcIiBuZy1zaG93PVxcXCIhbGVhZ3VlRGF0YS5jbG9zZWQgfHwgaGFzVGVhbUluTGVhZ3VlKCkgfHwgaXNDb21taXNoKGxlYWd1ZURhdGEpXFxcIj5cXG5cIiArXG4gICAgXCIgIDxhY2NvcmRpb24gY2xvc2Utb3RoZXJzPVxcXCJ0cnVlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGFjY29yZGlvbi1ncm91cCBpcy1vcGVuPVxcXCJ1c2VyTW9kZWwubGVhZ3VlTWVzc2FnZU9wZW5bbGVhZ3VlRGF0YS5pZF1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxhY2NvcmRpb24taGVhZGluZz5cXG5cIiArXG4gICAgXCIgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1jb21tZW50IGZhLWZ3XFxcIj48L2k+IE1lc3NhZ2VzIHRvIGxlYWd1ZSBbIDxzcGFuIG5nLXNob3c9XFxcImxlYWd1ZURhdGEubWVzc2FnZS5sZW5ndGggPiAwXFxcIj4xPC9zcGFuPjxzcGFuIG5nLXNob3c9XFxcIiFsZWFndWVEYXRhLm1lc3NhZ2UgfHwgbGVhZ3VlRGF0YS5tZXNzYWdlLmxlbmd0aCA9PSAwXFxcIj4wPC9zcGFuPiBdIDxpIGNsYXNzPVxcXCJwdWxsLXJpZ2h0IGdseXBoaWNvblxcXCIgbmctY2xhc3M9XFxcInsnZ2x5cGhpY29uLWNoZXZyb24tZG93bic6IHVzZXJNb2RlbC5sZWFndWVNZXNzYWdlT3BlbltsZWFndWVEYXRhLmlkXSwgJ2dseXBoaWNvbi1jaGV2cm9uLXJpZ2h0JzogIXVzZXJNb2RlbC5sZWFndWVNZXNzYWdlT3BlbltsZWFndWVEYXRhLmlkXX1cXFwiPjwvaT5cXG5cIiArXG4gICAgXCIgICAgICA8L2FjY29yZGlvbi1oZWFkaW5nPlxcblwiICtcbiAgICBcIiAgICAgIDxwIGNsYXNzPVxcXCJsZWFndWUtbWVzc2FnZS10ZXh0XFxcIiBuZy1zaG93PVxcXCIhbGVhZ3VlRGF0YS5tZXNzYWdlIHx8IGxlYWd1ZURhdGEubWVzc2FnZS5sZW5ndGggPT0gMFxcXCI+bm8gbWVzc2FnZXM8L3A+PHAgY2xhc3M9XFxcImxlYWd1ZS1tZXNzYWdlLXRleHRcXFwiIG5nLXNob3c9XFxcImxlYWd1ZURhdGEubWVzc2FnZS5sZW5ndGggPiAwXFxcIiBuZy1iaW5kLWh0bWw9XFxcImxlYWd1ZURhdGEubWVzc2FnZSB8IGxpbmt5OidfYmxhbmsnXFxcIj48L3A+IDxhIGNsYXNzPVxcXCJhbGVydC1saW5rXFxcIiBuZy1zaG93PVxcXCJpc0NvbW1pc2gobGVhZ3VlRGF0YSlcXFwiIG5nLWNsaWNrPVxcXCJ1cGRhdGVNZXNzYWdlKGxlYWd1ZURhdGEpXFxcIj5bIGVkaXQgXTwvYT48YSBjbGFzcz1cXFwiYWxlcnQtbGlua1xcXCIgbmctc2hvdz1cXFwiIWlzQ29tbWlzaChsZWFndWVEYXRhKSAmJiBoYXNUZWFtSW5MZWFndWUoKVxcXCIgbmctY2xpY2s9XFxcImNvbnRhY3RDb21taXNoKGxlYWd1ZURhdGEpXFxcIj5bIGNvbnRhY3QgY29tbWlzaCBdPC9hPlxcblwiICtcbiAgICBcIiAgICA8L2FjY29yZGlvbi1ncm91cD5cXG5cIiArXG4gICAgXCIgIDwvYWNjb3JkaW9uPlxcblwiICtcbiAgICBcIiAgPGhyPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcInRlYW1zLXRhYlxcXCI+XFxuXCIgK1xuICAgIFwiICA8dWwgY2xhc3M9XFxcIm5hdiBuYXYtdGFic1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxsaSBjbGFzcz1cXFwiYWN0aXZlXFxcIj48YT5UZWFtcyBbIDxzcGFuIG5nLXNob3c9XFxcImxlYWd1ZURhdGEuZWxpbWluYXRpb25cXFwiPnt7bGVhZ3VlRGF0YS5hbGl2ZV90ZWFtX2NvdW50fX0gLyA8L3NwYW4+e3tsZWFndWVEYXRhLnRlYW1fY291bnR9fSBdPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICA8L3VsPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwid2Vla3NcXFwiPlxcblwiICtcbiAgICBcIiAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLWNoYW5nZT1cXFwiY2hhbmdlV2VlayhzZWxlY3RlZFdlZWtTbHVnKVxcXCIgbmctbW9kZWw9XFxcInNlbGVjdGVkV2Vla1NsdWdcXFwiIG5nLW9wdGlvbnM9XFxcImxlYWd1ZVdlZWsuc2x1ZyBhcyBsZWFndWVXZWVrLmRpc3BsYXkgZm9yIGxlYWd1ZVdlZWsgaW4gbGVhZ3VlV2Vla3NcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxvcHRpb24gdmFsdWU9XFxcIlxcXCI+QWxsIFdlZWtzPC9vcHRpb24+XFxuXCIgK1xuICAgIFwiICAgIDwvc2VsZWN0PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cCBjdXN0b20tc2VhcmNoLWZvcm0gZmlsdGVyLWxlYWd1ZS1qb2luXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJTZWFyY2guLi5cXFwiIG5nLW1vZGVsPVxcXCJ0ZWFtUXVlcnlcXFwiPlxcblwiICtcbiAgICBcIiAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYnRuXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tc2VhcmNoXFxcIj48L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgIDwvc3Bhbj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImxlYWd1ZS1jb250YWluZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwibGVhZ3VlLXRlYW1zIGxpc3QtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICA8YSBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIiBuZy1jbGFzcz1cXFwieydpbmFjdGl2ZSc6ICF0ZWFtLmFjdGl2ZSB8fCAhdGVhbS5hbGl2ZX1cXFwiIG5nLXJlcGVhdD1cXFwidGVhbSBpbiBsZWFndWVUZWFtcyB8IG9yZGVyQnk6W2luUGxheSwgJy1jb3JyZWN0X3BpY2tzX2NvdW50JywgJ25hbWUnXSB8IGFjdGl2ZVRlYW1GaWx0ZXI6dGVhbU9wdGlvbnMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCB8IG9mZnNldEZpbHRlcjooY3VycmVudFRlYW1QYWdlLTEpKnRlYW1zUGVyUGFnZSB8IGxpbWl0VG86dGVhbXNQZXJQYWdlXFxcIiBuZy1jbGljaz1cXFwic2hvd1RlYW0odGVhbSlcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZWFndWUtbmFtZSBjb2wtc20tNSBjb2wtbWQtNVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS11c2VyIGZhLWZ3XFxcIiBuZy1zaG93PVxcXCJpc0NvYWNoKHRlYW0pXFxcIiB0aXRsZT1cXFwiTXkgdGVhbVxcXCI+PC9pPjxpIGNsYXNzPVxcXCJmYSBmYS1jaGVjayBmYS1md1xcXCIgbmctc2hvdz1cXFwiIWlzQ29hY2godGVhbSkgJiYgaXNDb21taXNoKGxlYWd1ZURhdGEpICYmIHRlYW0ucGFpZCA9PSB0cnVlXFxcIiB0aXRsZT1cXFwiUGFpZFxcXCI+PC9pPiA8c3BhbiBjbGFzcz1cXFwidGVhbS1uYW1lXFxcIiBuZy1jbGFzcz1cXFwieydpbmFjdGl2ZSc6ICF0ZWFtLmFjdGl2ZSB8fCAhdGVhbS5hbGl2ZX1cXFwiPnt7dGVhbS5uYW1lfX08L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxicj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNvYWNoLW5hbWVcXFwiPkNvYWNoOiB7e2NvYWNoTmFtZSh0ZWFtKX19PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNyBjb2wtbWQtN1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjdXJyZW50LXBpY2tcXFwiIG5nLWNsYXNzPVxcXCJ7J25vLXBpY2snOiB0ZWFtLmN1cnJlbnRfcGljay53YXJuaW5nID09IHRydWV9XFxcIiBuZy1zaG93PVxcXCJ0ZWFtLmFjdGl2ZSAmJiB0ZWFtLnN0YXJ0ZWRcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS13YXJuaW5nIGZhLWZ3XFxcIiBuZy1zaG93PVxcXCJ0ZWFtLmN1cnJlbnRfcGljay53YXJuaW5nID09IHRydWVcXFwiIHRpdGxlPVxcXCJXYXJuaW5nXFxcIj48L2k+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWxvY2sgZmEtZndcXFwiIG5nLXNob3c9XFxcInRlYW0uY3VycmVudF9waWNrLmxvY2tlZCAmJiB0ZWFtLmN1cnJlbnRfcGljay5jb3JyZWN0ID09IG51bGxcXFwiIHRpdGxlPVxcXCJQaWNrIGxvY2tlZFxcXCI+PC9pPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS11bmxvY2sgZmEtZndcXFwiIG5nLXNob3c9XFxcInRlYW0uY3VycmVudF9waWNrLmxvY2tlZCA9PSBmYWxzZSAmJiB0ZWFtLmN1cnJlbnRfcGljay5jb3JyZWN0ID09IG51bGxcXFwiIHRpdGxlPVxcXCJQaWNrIHVubG9ja2VkXFxcIj48L2k+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXRpbWVzIGZhLWZ3XFxcIiBuZy1zaG93PVxcXCJ0ZWFtLmN1cnJlbnRfcGljay5jb3JyZWN0ID09PSBmYWxzZVxcXCIgdGl0bGU9XFxcIlBpY2sgd3JvbmdcXFwiPjwvaT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY2hlY2sgZmEtZndcXFwiIG5nLXNob3c9XFxcInRlYW0uY3VycmVudF9waWNrLmNvcnJlY3QgPT09IHRydWVcXFwiIHRpdGxlPVxcXCJQaWNrIGNvcnJlY3RcXFwiPjwvaT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICBbIDxzcGFuIGNsYXNzPVxcXCJjdXJyZW50LWxvc2VyLW5hbWVcXFwiPnt7dGVhbS5jdXJyZW50X3BpY2submFtZX19PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJjdXJyZW50LWxvc2VyLWFiYnJldlxcXCI+e3t0ZWFtLmN1cnJlbnRfcGljay5hYmJyZXZ9fTwvc3Bhbj4gXVxcblwiICtcbiAgICBcIiAgICAgICAgICA8L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjdXJyZW50LXBpY2tcXFwiIG5nLXNob3c9XFxcInRlYW0uYWN0aXZlICYmICF0ZWFtLnN0YXJ0ZWRcXFwiPlN0YXJ0cyB7e3RlYW0uc3RhcnRfd2Vla319PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5hY3RpdmUtdGVhbSBjdXJyZW50LXBpY2tcXFwiIG5nLXNob3c9XFxcIiF0ZWFtLmFjdGl2ZVxcXCI+VGVhbSBoYXMgYmVlbiBkZWFjdGl2YXRlZDwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJhZGdlXFxcIj57e3RlYW0uY29ycmVjdF9waWNrc19jb3VudH19IGxvc2VyPHNwYW4gbmctc2hvdz1cXFwidGVhbS5jb3JyZWN0X3BpY2tzX2NvdW50ICE9IDFcXFwiPnM8L3NwYW4+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvYT5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPGRpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtaW5mb1xcXCIgbmctc2hvdz1cXFwiKGxlYWd1ZVRlYW1zIHwgYWN0aXZlVGVhbUZpbHRlcjp0ZWFtT3B0aW9ucyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0KS5sZW5ndGggPT0gMFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgTm8gdGVhbXMgZm91bmRcXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImxlYWd1ZS10ZWFtcy1wYWdpbmF0aW9uXFxcIiBuZy1zaG93PVxcXCJsZWFndWVUZWFtcy5sZW5ndGggPiB0ZWFtc1BlclBhZ2UgJiYgKGxlYWd1ZVRlYW1zIHwgYWN0aXZlVGVhbUZpbHRlcjp0ZWFtT3B0aW9ucyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0KS5sZW5ndGggPiAwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8cGFnaW5hdGlvbiBib3VuZGFyeS1saW5rcz1cXFwidHJ1ZVxcXCIgbWF4LXNpemU9XFxcIjRcXFwiIHRvdGFsLWl0ZW1zPVxcXCIobGVhZ3VlVGVhbXMgfCBhY3RpdmVUZWFtRmlsdGVyOnRlYW1PcHRpb25zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aFxcXCIgaXRlbXMtcGVyLXBhZ2U9XFxcInRlYW1zUGVyUGFnZVxcXCIgbmctbW9kZWw9XFxcImN1cnJlbnRUZWFtUGFnZVxcXCIgY2xhc3M9XFxcInBhZ2luYXRpb24tbWRcXFwiIHByZXZpb3VzLXRleHQ9XFxcIiZsc2FxdW87XFxcIiBuZXh0LXRleHQ9XFxcIiZyc2FxdW87XFxcIiBmaXJzdC10ZXh0PVxcXCImbGFxdW87XFxcIiBsYXN0LXRleHQ9XFxcIiZyYXF1bztcXFwiPjwvcGFnaW5hdGlvbj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9sZWFndWVzLmpvaW4udHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL2xlYWd1ZXMuam9pbi50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwiam9pbi1sZWFndWVzLWhlYWRlci1yb3cgcm93XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS05IGNvbC1tZC05XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGgzPkpvaW4gYSBsZWFndWUuLi48L2gzPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMyBjb2wtbWQtM1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImpvaW4tbGVhZ3Vlcy1idG4tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY3JlYXRlLWxlYWd1ZS1idG4gYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1jbGljaz1cXFwiY3JlYXRlTGVhZ3VlKClcXFwiPkNyZWF0ZSBMZWFndWU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8aHI+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwiam9pbi1sZWFndWVzLXRhYnNcXFwiPlxcblwiICtcbiAgICBcIiAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2LXRhYnNcXFwiPlxcblwiICtcbiAgICBcIiAgICA8bGkgbmctY2xhc3M9XFxcInsnYWN0aXZlJzogaXNQdWJsaWMoKX1cXFwiIG5nLWNsaWNrPVxcXCJyZXNldFNlYXJjaCgpXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YSBuZy1jbGljaz1cXFwicHVibGljTGVhZ3VlcyhzZWxlY3RlZFNlYXNvbklkKVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXVubG9jayBmYS1md1xcXCIgdGl0bGU9XFxcIlB1YmxpYyBsZWFndWVzXFxcIj48L2k+IFB1YmxpYyA8c3BhbiBjbGFzcz1cXFwibGVhZ3Vlc1xcXCI+TGVhZ3Vlczwvc3Bhbj48L2E+XFxuXCIgK1xuICAgIFwiICAgIDwvbGk+XFxuXCIgK1xuICAgIFwiICAgIDxsaSBuZy1jbGFzcz1cXFwieydhY3RpdmUnOiAhaXNQdWJsaWMoKX1cXFwiIG5nLWNsaWNrPVxcXCJyZXNldFNlYXJjaCgpXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YSBuZy1jbGljaz1cXFwicHJpdmF0ZUxlYWd1ZXMoc2VsZWN0ZWRTZWFzb25JZClcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1sb2NrIGZhLWZ3XFxcIiB0aXRsZT1cXFwiUHJpdmF0ZSBsZWFndWVzXFxcIj48L2k+IFByaXZhdGUgPHNwYW4gY2xhc3M9XFxcImxlYWd1ZXNcXFwiPkxlYWd1ZXM8L3NwYW4+PC9hPlxcblwiICtcbiAgICBcIiAgICA8L2xpPlxcblwiICtcbiAgICBcIiAgPC91bD5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcInNlYXNvbnNcXFwiPlxcblwiICtcbiAgICBcIiAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLWNoYW5nZT1cXFwiY2hhbmdlU2Vhc29uKHNlbGVjdGVkU2Vhc29uSWQpXFxcIiBuZy1tb2RlbD1cXFwic2VsZWN0ZWRTZWFzb25JZFxcXCIgbmctb3B0aW9ucz1cXFwiY3VycmVudFNlYXNvbi5pZCBhcyBjdXJyZW50U2Vhc29uLm5hbWUgZm9yIGN1cnJlbnRTZWFzb24gaW4gY3VycmVudFNlYXNvbnNcXFwiPjwvc2VsZWN0PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cCBjdXN0b20tc2VhcmNoLWZvcm0gZmlsdGVyLWxlYWd1ZS1qb2luXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJTZWFyY2guLi5cXFwiIG5nLW1vZGVsPVxcXCJsZWFndWVRdWVyeVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1idG5cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1zZWFyY2hcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgPC9zcGFuPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibGVhZ3Vlcy1jb250ZW50XFxcIiB1aS12aWV3PVxcXCJqb2luTGVhZ3Vlc0NvbnRlbnRcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL3ByaXZhdGUvbGVhZ3Vlcy5qb2luLnByaXZhdGUudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL3ByaXZhdGUvbGVhZ3Vlcy5qb2luLnByaXZhdGUudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcInByaXZhdGUtbGVhZ3VlcyBsaXN0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGEgbmctcmVwZWF0PVxcXCJsZWFndWUgaW4gcHJpdmF0ZUxlYWd1ZXMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCB8IG9mZnNldEZpbHRlcjooY3VycmVudExlYWd1ZVBhZ2UtMSkqbGVhZ3Vlc1BlclBhZ2UgfCBsaW1pdFRvOmxlYWd1ZXNQZXJQYWdlXFxcIiBuZy1jbGljaz1cXFwic2hvd0xlYWd1ZShsZWFndWUpXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwibGVhZ3VlLW5hbWUgY29sLXNtLTUgY29sLW1kLTVcXFwiPnt7bGVhZ3VlLm5hbWV9fTxicj48c3BhbiBjbGFzcz1cXFwicHJpdmF0ZS1sZWFndWUtbWV0YVxcXCI+U3RhcnRzIHt7bGVhZ3VlLnN0YXJ0X3dlZWt9fTwvc3Bhbj48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS03IGNvbC1tZC03XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInByaXZhdGUtbGVhZ3VlLW1ldGFcXFwiPkNvbW1pc2g6IHt7bGVhZ3VlLmNvbW1pc2hfbmFtZXMuam9pbignLCAnKX19PGJyPnt7bGVhZ3VlLmZvcm1hdH19PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYmFkZ2VcXFwiPnt7bGVhZ3VlLnRlYW1fY291bnR9fSB0ZWFtPHNwYW4gbmctc2hvdz1cXFwibGVhZ3VlLnRlYW1fY291bnQgIT09IDFcXFwiPnM8L3NwYW4+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvYT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJwcml2YXRlLWxlYWd1ZS1wYWdpbmF0aW9uXFxcIiBuZy1zaG93PVxcXCJwcml2YXRlTGVhZ3Vlcy5sZW5ndGggPiBsZWFndWVzUGVyUGFnZSAmJiAocHJpdmF0ZUxlYWd1ZXMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCkubGVuZ3RoID4gMFxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxwYWdpbmF0aW9uIGJvdW5kYXJ5LWxpbmtzPVxcXCJ0cnVlXFxcIiBtYXgtc2l6ZT1cXFwiNFxcXCIgdG90YWwtaXRlbXM9XFxcIihwcml2YXRlTGVhZ3VlcyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0KS5sZW5ndGhcXFwiIGl0ZW1zLXBlci1wYWdlPVxcXCJsZWFndWVzUGVyUGFnZVxcXCIgbmctbW9kZWw9XFxcImN1cnJlbnRMZWFndWVQYWdlXFxcIiBjbGFzcz1cXFwicGFnaW5hdGlvbi1tZFxcXCIgcHJldmlvdXMtdGV4dD1cXFwiJmxzYXF1bztcXFwiIG5leHQtdGV4dD1cXFwiJnJzYXF1bztcXFwiIGZpcnN0LXRleHQ9XFxcIiZsYXF1bztcXFwiIGxhc3QtdGV4dD1cXFwiJnJhcXVvO1xcXCI+PC9wYWdpbmF0aW9uPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWluZm9cXFwiIG5nLXNob3c9XFxcIihwcml2YXRlTGVhZ3VlcyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0KS5sZW5ndGggPT0gMFxcXCI+XFxuXCIgK1xuICAgIFwiICBObyBsZWFndWVzIGZvdW5kXFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4vcHVibGljL2xlYWd1ZXMuam9pbi5wdWJsaWMudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL3B1YmxpYy9sZWFndWVzLmpvaW4ucHVibGljLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJwdWJsaWMtbGVhZ3VlcyBsaXN0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGEgbmctcmVwZWF0PVxcXCJsZWFndWUgaW4gcHVibGljTGVhZ3VlcyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0IHwgb2Zmc2V0RmlsdGVyOihjdXJyZW50TGVhZ3VlUGFnZS0xKSpsZWFndWVzUGVyUGFnZSB8IGxpbWl0VG86bGVhZ3Vlc1BlclBhZ2VcXFwiIG5nLWNsaWNrPVxcXCJzaG93TGVhZ3VlKGxlYWd1ZSlcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZWFndWUtbmFtZSBjb2wtc20tNSBjb2wtbWQtNVxcXCI+e3tsZWFndWUubmFtZX19PGJyPjxzcGFuIGNsYXNzPVxcXCJwdWJsaWMtbGVhZ3VlLW1ldGFcXFwiPlN0YXJ0cyB7e2xlYWd1ZS5zdGFydF93ZWVrfX08L3NwYW4+PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTcgY29sLW1kLTdcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwicHVibGljLWxlYWd1ZS1tZXRhXFxcIj5Db21taXNoOiB7e2xlYWd1ZS5jb21taXNoX25hbWVzLmpvaW4oJywgJyl9fTxicj57e2xlYWd1ZS5mb3JtYXR9fTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJhZGdlXFxcIj57e2xlYWd1ZS50ZWFtX2NvdW50fX0gdGVhbTxzcGFuIG5nLXNob3c9XFxcImxlYWd1ZS50ZWFtX2NvdW50ICE9PSAxXFxcIj5zPC9zcGFuPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2E+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwicHVibGljLWxlYWd1ZS1wYWdpbmF0aW9uXFxcIiBuZy1zaG93PVxcXCJwdWJsaWNMZWFndWVzLmxlbmd0aCA+IGxlYWd1ZXNQZXJQYWdlICYmIChwdWJsaWNMZWFndWVzIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aCA+IDBcXFwiPlxcblwiICtcbiAgICBcIiAgICA8cGFnaW5hdGlvbiBib3VuZGFyeS1saW5rcz1cXFwidHJ1ZVxcXCIgbWF4LXNpemU9XFxcIjRcXFwiIHRvdGFsLWl0ZW1zPVxcXCIocHVibGljTGVhZ3VlcyB8ZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aFxcXCIgaXRlbXMtcGVyLXBhZ2U9XFxcImxlYWd1ZXNQZXJQYWdlXFxcIiBuZy1tb2RlbD1cXFwiY3VycmVudExlYWd1ZVBhZ2VcXFwiIGNsYXNzPVxcXCJwYWdpbmF0aW9uLW1kXFxcIiBwcmV2aW91cy10ZXh0PVxcXCImbHNhcXVvO1xcXCIgbmV4dC10ZXh0PVxcXCImcnNhcXVvO1xcXCIgZmlyc3QtdGV4dD1cXFwiJmxhcXVvO1xcXCIgbGFzdC10ZXh0PVxcXCImcmFxdW87XFxcIj48L3BhZ2luYXRpb24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtaW5mb1xcXCIgbmctc2hvdz1cXFwiKHB1YmxpY0xlYWd1ZXMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCkubGVuZ3RoID09IDBcXFwiPlxcblwiICtcbiAgICBcIiAgTm8gbGVhZ3VlcyBmb3VuZFxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9sZWFndWVzLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvbGVhZ3Vlcy50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiB1aS12aWV3PVxcXCJsZWFndWVzQ29udGVudFxcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL21hbmFnZS9sZWFndWVzLm1hbmFnZS50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL21hbmFnZS9sZWFndWVzLm1hbmFnZS50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibWFuYWdlLWxlYWd1ZXMtaGVhZGVyLXJvdyByb3dcXFwiPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTkgY29sLW1kLTlcXFwiPlxcblwiICtcbiAgICBcIiAgICA8aDM+SSBtYW5hZ2UgdGhlc2UgbGVhZ3Vlcy4uLjwvaDM+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0zIGNvbC1tZC0zXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwibWFuYWdlLWxlYWd1ZXMtYnRuLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNyZWF0ZS1sZWFndWUtYnRuIGJ0biBidG4tcHJpbWFyeVxcXCIgbmctY2xpY2s9XFxcImNyZWF0ZUxlYWd1ZSgpXFxcIj5DcmVhdGUgTGVhZ3VlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGhyPlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjwhLS1pZiB5b3UgaGF2ZSBtYW5hZ2VkIGxlYWd1ZXMgKGkuZS4gaWYgeW91J3JlIGEgY29tbWlzaCktLT5cXG5cIiArXG4gICAgXCI8ZGl2IG5nLXNob3c9XFxcIm1hbmFnZWRMZWFndWVzLmxlbmd0aCA+IDBcXFwiIGNsYXNzPVxcXCJsZWFndWVzLWNvbnRhaW5lclxcXCI+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcIm1hbmFnZWQtbGVhZ3VlcyBsaXN0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxhIG5nLXJlcGVhdD1cXFwibGVhZ3VlIGluIG1hbmFnZWRMZWFndWVzIHwgb2Zmc2V0RmlsdGVyOihjdXJyZW50TGVhZ3VlUGFnZS0xKSpsZWFndWVzUGVyUGFnZSB8IGxpbWl0VG86bGVhZ3Vlc1BlclBhZ2VcXFwiIG5nLWNsaWNrPVxcXCJ2aWV3TGVhZ3VlKGxlYWd1ZSlcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxlYWd1ZS1uYW1lIGNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdW5sb2NrIGZhLWZ3XFxcIiB0aXRsZT1cXFwiTXkgUHVibGljIGxlYWd1ZVxcXCIgbmctc2hvdz1cXFwibGVhZ3VlLnB1YmxpY1xcXCI+PC9pPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1sb2NrIGZhLWZ3XFxcIiB0aXRsZT1cXFwiTXkgUHJpdmF0ZSBsZWFndWVcXFwiIG5nLXNob3c9XFxcIiFsZWFndWUucHVibGljXFxcIj48L2k+IHt7bGVhZ3VlLm5hbWV9fTwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwic3RhcnQtd2Vla1xcXCI+e3tzdGFydHMobGVhZ3VlKX19PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJhZGdlXFxcIj57e2xlYWd1ZS50ZWFtX2NvdW50fX0gdGVhbXM8L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPC9hPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCIgICAgPCEtLWR5bmFtaWMgcGFnaW5hdGlvbi0tPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJtYW5hZ2UtbGVhZ3VlLXBhZ2luYXRpb25cXFwiIG5nLXNob3c9XFxcIm1hbmFnZWRMZWFndWVzLmxlbmd0aCA+IGxlYWd1ZXNQZXJQYWdlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxwYWdpbmF0aW9uIGJvdW5kYXJ5LWxpbmtzPVxcXCJ0cnVlXFxcIiBtYXgtc2l6ZT1cXFwiNFxcXCIgdG90YWwtaXRlbXM9XFxcIm1hbmFnZWRMZWFndWVzLmxlbmd0aFxcXCIgaXRlbXMtcGVyLXBhZ2U9XFxcImxlYWd1ZXNQZXJQYWdlXFxcIiBuZy1tb2RlbD1cXFwiY3VycmVudExlYWd1ZVBhZ2VcXFwiIGNsYXNzPVxcXCJwYWdpbmF0aW9uLW1kXFxcIiBwcmV2aW91cy10ZXh0PVxcXCImbHNhcXVvO1xcXCIgbmV4dC10ZXh0PVxcXCImcnNhcXVvO1xcXCIgZmlyc3QtdGV4dD1cXFwiJmxhcXVvO1xcXCIgbGFzdC10ZXh0PVxcXCImcmFxdW87XFxcIj48L3BhZ2luYXRpb24+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IHN0eWxlPVxcXCJjbGVhcjogYm90aDtcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjwhLS1pZiB5b3UgaGF2ZSBubyBtYW5hZ2VkIGxlYWd1ZXMtLT5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1pbmZvXFxcIiBuZy1zaG93PVxcXCJtYW5hZ2VkTGVhZ3Vlcy5sZW5ndGggPT0gMFxcXCI+XFxuXCIgK1xuICAgIFwiICBZb3UgYXJlIG5vdCB0aGUgY29tbWlzaCBvZiBhbnkgbGVhZ3Vlcy4gPGEgY2xhc3M9XFxcImFsZXJ0LWxpbmtcXFwiIG5nLWNsaWNrPVxcXCJjcmVhdGVMZWFndWUoc2Vhc29uKVxcXCI+Q3JlYXRlIG9uZTwvYT4gYW5kIGludml0ZSBhbGwgeW91ciBmcmllbmRzLlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9teS9sZWFndWVzLm15LnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvbXkvbGVhZ3Vlcy5teS50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibXktbGVhZ3Vlcy1oZWFkZXItcm93IHJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOSBjb2wtbWQtOVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxoMz5JIGFtIGluIHRoZXNlIGxlYWd1ZXMuLi48L2gzPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMyBjb2wtbWQtM1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcIm15LWxlYWd1ZXMtYnRuLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImpvaW4tbGVhZ3VlLWJ0biBidG4gYnRuLXByaW1hcnlcXFwiIG5nLWNsaWNrPVxcXCJqb2luTGVhZ3VlKClcXFwiPkpvaW4gTGVhZ3VlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGhyPlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjxkaXYgbmctc2hvdz1cXFwibGVhZ3Vlcy5sZW5ndGggPiAwXFxcIiBjbGFzcz1cXFwibGVhZ3Vlcy1jb250YWluZXJcXFwiPlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwibXktbGVhZ3VlcyBsaXN0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGEgbmctcmVwZWF0PVxcXCJsZWFndWUgaW4gbGVhZ3VlcyB8IG9mZnNldEZpbHRlcjooY3VycmVudExlYWd1ZVBhZ2UtMSkqbGVhZ3Vlc1BlclBhZ2UgfCBsaW1pdFRvOmxlYWd1ZXNQZXJQYWdlXFxcIiBuZy1jbGljaz1cXFwidmlld0xlYWd1ZShsZWFndWUpXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwibGVhZ3VlLW5hbWUgY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdW5sb2NrIGZhLWZ3XFxcIiB0aXRsZT1cXFwiTXkgUHVibGljIGxlYWd1ZVxcXCIgbmctc2hvdz1cXFwibGVhZ3VlLnB1YmxpY1xcXCI+PC9pPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtbG9jayBmYS1md1xcXCIgdGl0bGU9XFxcIk15IFByaXZhdGUgbGVhZ3VlXFxcIiBuZy1zaG93PVxcXCIhbGVhZ3VlLnB1YmxpY1xcXCI+PC9pPiB7e2xlYWd1ZS5uYW1lfX08L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInN0YXJ0LXdlZWtcXFwiPnt7c3RhcnRzKGxlYWd1ZSl9fTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJhZGdlXFxcIj57e2xlYWd1ZS50ZWFtX2NvdW50fX0gdGVhbXM8L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9hPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJteS1sZWFndWUtcGFnaW5hdGlvblxcXCIgbmctc2hvdz1cXFwibGVhZ3Vlcy5sZW5ndGggPiBsZWFndWVzUGVyUGFnZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxwYWdpbmF0aW9uIGJvdW5kYXJ5LWxpbmtzPVxcXCJ0cnVlXFxcIiBtYXgtc2l6ZT1cXFwiNFxcXCIgdG90YWwtaXRlbXM9XFxcImxlYWd1ZXMubGVuZ3RoXFxcIiBpdGVtcy1wZXItcGFnZT1cXFwibGVhZ3Vlc1BlclBhZ2VcXFwiIG5nLW1vZGVsPVxcXCJjdXJyZW50TGVhZ3VlUGFnZVxcXCIgY2xhc3M9XFxcInBhZ2luYXRpb24tbWRcXFwiIHByZXZpb3VzLXRleHQ9XFxcIiZsc2FxdW87XFxcIiBuZXh0LXRleHQ9XFxcIiZyc2FxdW87XFxcIiBmaXJzdC10ZXh0PVxcXCImbGFxdW87XFxcIiBsYXN0LXRleHQ9XFxcIiZyYXF1bztcXFwiPjwvcGFnaW5hdGlvbj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPGRpdiBzdHlsZT1cXFwiY2xlYXI6IGJvdGg7XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8IS0taWYgeW91IGhhdmUgbm8gbGVhZ3Vlcy0tPlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWluZm9cXFwiIG5nLXNob3c9XFxcImxlYWd1ZXMubGVuZ3RoID09IDBcXFwiPlxcblwiICtcbiAgICBcIiAgWW91IGFyZSBpbiBubyBsZWFndWVzLiA8YSBjbGFzcz1cXFwiYWxlcnQtbGlua1xcXCIgbmctY2xpY2s9XFxcImpvaW5MZWFndWUoc2Vhc29uKVxcXCI+Sm9pbjwvYT4gb25lIHRvZGF5LlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvcGxheS9sZWFndWVzL3BsYXkubGVhZ3Vlcy50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9wbGF5L2xlYWd1ZXMvcGxheS5sZWFndWVzLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IG5nLXNob3c9XFxcImxlYWd1ZXMubGVuZ3RoID4gMFxcXCIgY2xhc3M9XFxcImxlYWd1ZXMtY29udGFpbmVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcIm15LWxlYWd1ZXMgbGlzdC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxhIG5nLXJlcGVhdD1cXFwibGVhZ3VlIGluIGxlYWd1ZXMgfCBtYW5hZ2VkTGVhZ3VlRmlsdGVyOmxlYWd1ZU9wdGlvbnMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCB8IG9mZnNldEZpbHRlcjooY3VycmVudExlYWd1ZVBhZ2UtMSkqbGVhZ3Vlc1BlclBhZ2UgfCBsaW1pdFRvOmxlYWd1ZXNQZXJQYWdlXFxcIiBuZy1jbGljaz1cXFwidmlld0xlYWd1ZShsZWFndWUpXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwibGVhZ3VlLW5hbWUgY29sLXNtLTUgY29sLW1kLTVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY29tbWVudCBmYS1md1xcXCIgbmctc2hvdz1cXFwiIWlzQ29tbWlzaChsZWFndWUpICYmIGxlYWd1ZS5tZXNzYWdlLmxlbmd0aCA+IDBcXFwiIHRpdGxlPVxcXCJIYXMgbWVzc2FnZSBmcm9tIGNvbW1pc2hcXFwiPjwvaT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXVzZXIgZmEtZndcXFwiIHRpdGxlPVxcXCJNeSBsZWFndWVcXFwiIG5nLXNob3c9XFxcImlzQ29tbWlzaChsZWFndWUpXFxcIj48L2k+IHt7bGVhZ3VlLm5hbWV9fTxicj48c3BhbiBjbGFzcz1cXFwibXktbGVhZ3VlLW1ldGFcXFwiPnt7c3RhcnRzKGxlYWd1ZSl9fTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTcgY29sLW1kLTdcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwibXktbGVhZ3VlLW1ldGFcXFwiPkNvbW1pc2g6IHt7bGVhZ3VlLmNvbW1pc2hfbmFtZXMuam9pbignLCAnKX19PGJyPnt7bGVhZ3VlLmZvcm1hdH19PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYmFkZ2VcXFwiPjxzcGFuIG5nLXNob3c9XFxcImxlYWd1ZS5lbGltaW5hdGlvblxcXCI+e3tsZWFndWUuYWxpdmVfdGVhbV9jb3VudH19Lzwvc3Bhbj57e2xlYWd1ZS50ZWFtX2NvdW50fX0gdGVhbTxzcGFuIG5nLXNob3c9XFxcImxlYWd1ZS50ZWFtX2NvdW50ICE9PSAxXFxcIj5zPC9zcGFuPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2E+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcIm15LWxlYWd1ZS1wYWdpbmF0aW9uXFxcIiBuZy1zaG93PVxcXCJsZWFndWVzLmxlbmd0aCA+IGxlYWd1ZXNQZXJQYWdlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPHBhZ2luYXRpb24gYm91bmRhcnktbGlua3M9XFxcInRydWVcXFwiIG1heC1zaXplPVxcXCI0XFxcIiB0b3RhbC1pdGVtcz1cXFwibGVhZ3Vlcy5sZW5ndGhcXFwiIGl0ZW1zLXBlci1wYWdlPVxcXCJsZWFndWVzUGVyUGFnZVxcXCIgbmctbW9kZWw9XFxcImN1cnJlbnRMZWFndWVQYWdlXFxcIiBjbGFzcz1cXFwicGFnaW5hdGlvbi1tZFxcXCIgcHJldmlvdXMtdGV4dD1cXFwiJmxzYXF1bztcXFwiIG5leHQtdGV4dD1cXFwiJnJzYXF1bztcXFwiIGZpcnN0LXRleHQ9XFxcIiZsYXF1bztcXFwiIGxhc3QtdGV4dD1cXFwiJnJhcXVvO1xcXCI+PC9wYWdpbmF0aW9uPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IHN0eWxlPVxcXCJjbGVhcjogYm90aDtcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjwhLS1pZiB5b3UgaGF2ZSBubyBsZWFndWVzLS0+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibGVhZ3Vlcy1hbGVydCBhbGVydCBhbGVydC1pbmZvXFxcIiBuZy1zaG93PVxcXCIobGVhZ3VlcyB8IG1hbmFnZWRMZWFndWVGaWx0ZXI6bGVhZ3VlT3B0aW9ucyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0KS5sZW5ndGggPT0gMFxcXCI+XFxuXCIgK1xuICAgIFwiICBObyBsZWFndWVzIGZvdW5kXFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9wbGF5L3BsYXkudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvcGxheS9wbGF5LnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJwbGF5LWhlYWRlci1yb3cgcm93XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS03IGNvbC1tZC03XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGgzIGNsYXNzPVxcXCJteS10ZWFtcy1oZWFkZXJcXFwiPk15IFRlYW1zICYgTGVhZ3VlczwvaDM+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS01IGNvbC1tZC01XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicGxheS1idG4tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiam9pbi1sZWFndWUtYnRuIGJ0biBidG4tcHJpbWFyeVxcXCIgbmctY2xpY2s9XFxcImpvaW5MZWFndWUoKVxcXCI+Sm9pbiBMZWFndWU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNyZWF0ZS1sZWFndWUtYnRuIGJ0biBidG4tcHJpbWFyeVxcXCIgbmctY2xpY2s9XFxcImNyZWF0ZUxlYWd1ZSgpXFxcIj5DcmVhdGUgTGVhZ3VlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGhyPlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcInRlYW1zLWxlYWd1ZXMtdGFic1xcXCI+XFxuXCIgK1xuICAgIFwiICA8dWwgY2xhc3M9XFxcIm5hdiBuYXYtdGFic1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxsaSBuZy1jbGFzcz1cXFwieydhY3RpdmUnOiBpc1N0YXRlKFsncHJpdmF0ZS5wbGF5LnRlYW1zJ10pfVxcXCIgbmctY2xpY2s9XFxcInJlc2V0U2VhcmNoKClcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxhIG5nLWNsaWNrPVxcXCJteVRlYW1zKHNlbGVjdGVkU2Vhc29uSWQpXFxcIj48c3BhbiBjbGFzcz1cXFwibXktdGVhbXNcXFwiPk15IFRlYW1zPC9zcGFuPjwvYT5cXG5cIiArXG4gICAgXCIgICAgPC9saT5cXG5cIiArXG4gICAgXCIgICAgPGxpIG5nLWNsYXNzPVxcXCJ7J2FjdGl2ZSc6IGlzU3RhdGUoWydwcml2YXRlLnBsYXkubGVhZ3VlcyddKX1cXFwiIG5nLWNsaWNrPVxcXCJyZXNldFNlYXJjaCgpXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YSBuZy1jbGljaz1cXFwibXlMZWFndWVzKHNlbGVjdGVkU2Vhc29uSWQpXFxcIj48c3BhbiBjbGFzcz1cXFwibXktbGVhZ3Vlc1xcXCI+TXkgTGVhZ3Vlczwvc3Bhbj48L2E+XFxuXCIgK1xuICAgIFwiICAgIDwvbGk+XFxuXCIgK1xuICAgIFwiICA8L3VsPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwic2Vhc29uc1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctY2hhbmdlPVxcXCJjaGFuZ2VTZWFzb24oc2VsZWN0ZWRTZWFzb25JZClcXFwiIG5nLW1vZGVsPVxcXCJzZWxlY3RlZFNlYXNvbklkXFxcIiBuZy1vcHRpb25zPVxcXCJzdGFydGVkU2Vhc29uLmlkIGFzIHN0YXJ0ZWRTZWFzb24ubmFtZSBmb3Igc3RhcnRlZFNlYXNvbiBpbiBzdGFydGVkU2Vhc29uc1xcXCI+PC9zZWxlY3Q+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwIGN1c3RvbS1zZWFyY2gtZm9ybSBmaWx0ZXItdGVhbS1sZWFndWVcXFwiPlxcblwiICtcbiAgICBcIiAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIlNlYXJjaC4uLlxcXCIgbmctbW9kZWw9XFxcInF1ZXJ5XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0blxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXNlYXJjaFxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICA8L3NwYW4+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJwbGF5LWNvbnRlbnRcXFwiIHVpLXZpZXc9XFxcInBsYXlDb250ZW50XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL3BsYXkvdGVhbXMvcGxheS50ZWFtcy50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9wbGF5L3RlYW1zL3BsYXkudGVhbXMudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgbmctc2hvdz1cXFwidGVhbXMubGVuZ3RoID4gMFxcXCIgY2xhc3M9XFxcImxlYWd1ZXMtY29udGFpbmVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcIm15LXRlYW1zIGxpc3QtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICA8YSBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIiBuZy1jbGFzcz1cXFwieydpbmFjdGl2ZSc6ICF0ZWFtLmFjdGl2ZSB8fCAhdGVhbS5hbGl2ZX1cXFwiIG5nLXJlcGVhdD1cXFwidGVhbSBpbiB0ZWFtcyB8IG9yZGVyQnk6W2luUGxheSwgJ25hbWUnXSB8IGFsaXZlVGVhbUZpbHRlcjp0ZWFtT3B0aW9ucyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0IHwgb2Zmc2V0RmlsdGVyOihjdXJyZW50VGVhbVBhZ2UtMSkqdGVhbXNQZXJQYWdlIHwgbGltaXRUbzp0ZWFtc1BlclBhZ2VcXFwiIG5nLWNsaWNrPVxcXCJzaG93VGVhbSh0ZWFtKVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImxlYWd1ZS1uYW1lIGNvbC1zbS01IGNvbC1tZC01XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWNvbW1lbnQgZmEtZndcXFwiIG5nLXNob3c9XFxcInRlYW0ubWVzc2FnZS5sZW5ndGggPiAwXFxcIiB0aXRsZT1cXFwiSGFzIG1lc3NhZ2UgZnJvbSBjb21taXNoXFxcIj48L2k+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIG5nLWNsYXNzPVxcXCJ7J2RlYWQtdGVhbS1uYW1lJzogIXRlYW0uYWN0aXZlIHx8ICF0ZWFtLmFsaXZlfVxcXCI+e3t0ZWFtLm5hbWV9fTwvc3Bhbj48YnI+PHNwYW4gY2xhc3M9XFxcInRlYW0tbGVhZ3VlXFxcIj57e3RlYW0ubGVhZ3VlLm5hbWV9fTwvc3Bhbj48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS03IGNvbC1tZC03XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImN1cnJlbnQtcGlja1xcXCIgbmctY2xhc3M9XFxcInsnbm8tcGljayc6IHRlYW0uY3VycmVudF9waWNrLndhcm5pbmcgPT0gdHJ1ZX1cXFwiIG5nLXNob3c9XFxcInRlYW0uYWN0aXZlICYmIHRlYW0uc3RhcnRlZFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXdhcm5pbmcgZmEtZndcXFwiIG5nLXNob3c9XFxcInRlYW0uY3VycmVudF9waWNrLndhcm5pbmcgPT0gdHJ1ZVxcXCIgdGl0bGU9XFxcIldhcm5pbmdcXFwiPjwvaT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtbG9jayBmYS1md1xcXCIgbmctc2hvdz1cXFwidGVhbS5jdXJyZW50X3BpY2subG9ja2VkICYmIHRlYW0uY3VycmVudF9waWNrLmNvcnJlY3QgPT0gbnVsbFxcXCIgdGl0bGU9XFxcIlBpY2sgbG9ja2VkXFxcIj48L2k+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXVubG9jayBmYS1md1xcXCIgbmctc2hvdz1cXFwidGVhbS5jdXJyZW50X3BpY2subG9ja2VkID09IGZhbHNlICYmIHRlYW0uY3VycmVudF9waWNrLmNvcnJlY3QgPT0gbnVsbFxcXCIgdGl0bGU9XFxcIlBpY2sgdW5sb2NrZWRcXFwiPjwvaT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdGltZXMgZmEtZndcXFwiIG5nLXNob3c9XFxcInRlYW0uY3VycmVudF9waWNrLmNvcnJlY3QgPT09IGZhbHNlXFxcIiB0aXRsZT1cXFwiUGljayB3cm9uZ1xcXCI+PC9pPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1jaGVjayBmYS1md1xcXCIgbmctc2hvdz1cXFwidGVhbS5jdXJyZW50X3BpY2suY29ycmVjdCA9PT0gdHJ1ZVxcXCIgdGl0bGU9XFxcIlBpY2sgY29ycmVjdFxcXCI+PC9pPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIFsgPHNwYW4gY2xhc3M9XFxcImN1cnJlbnQtbG9zZXItbmFtZVxcXCI+e3t0ZWFtLmN1cnJlbnRfcGljay5uYW1lfX08L3NwYW4+PHNwYW4gY2xhc3M9XFxcImN1cnJlbnQtbG9zZXItYWJicmV2XFxcIj57e3RlYW0uY3VycmVudF9waWNrLmFiYnJldn19PC9zcGFuPiBdXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGJyPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjdXJyZW50LXBpY2tcXFwiPnt7dGVhbS5sZWFndWUuZm9ybWF0fX08L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImN1cnJlbnQtcGlja1xcXCIgbmctc2hvdz1cXFwidGVhbS5hY3RpdmUgJiYgIXRlYW0uc3RhcnRlZFxcXCI+U3RhcnRzIHt7dGVhbS5zdGFydF93ZWVrfX08YnI+e3t0ZWFtLmxlYWd1ZS5mb3JtYXR9fTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImluYWN0aXZlLXRlYW0gY3VycmVudC1waWNrXFxcIiBuZy1zaG93PVxcXCIhdGVhbS5hY3RpdmVcXFwiPlRlYW0gaGFzIGJlZW4gZGVhY3RpdmF0ZWQ8L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJiYWRnZVxcXCI+e3t0ZWFtLmNvcnJlY3RfcGlja3NfY291bnR9fSBsb3NlcjxzcGFuIG5nLXNob3c9XFxcInRlYW0uY29ycmVjdF9waWNrc19jb3VudCAhPT0gMVxcXCI+czwvc3Bhbj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9hPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJteS1sZWFndWUtcGFnaW5hdGlvblxcXCIgbmctc2hvdz1cXFwidGVhbXMubGVuZ3RoID4gdGVhbXNQZXJQYWdlICYmICh0ZWFtcyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0KS5sZW5ndGggPiAwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPHBhZ2luYXRpb24gYm91bmRhcnktbGlua3M9XFxcInRydWVcXFwiIG1heC1zaXplPVxcXCI0XFxcIiB0b3RhbC1pdGVtcz1cXFwiKHRlYW1zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aFxcXCIgaXRlbXMtcGVyLXBhZ2U9XFxcInRlYW1zUGVyUGFnZVxcXCIgbmctbW9kZWw9XFxcImN1cnJlbnRUZWFtUGFnZVxcXCIgY2xhc3M9XFxcInBhZ2luYXRpb24tbWRcXFwiIHByZXZpb3VzLXRleHQ9XFxcIiZsc2FxdW87XFxcIiBuZXh0LXRleHQ9XFxcIiZyc2FxdW87XFxcIiBmaXJzdC10ZXh0PVxcXCImbGFxdW87XFxcIiBsYXN0LXRleHQ9XFxcIiZyYXF1bztcXFwiPjwvcGFnaW5hdGlvbj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPGRpdiBzdHlsZT1cXFwiY2xlYXI6IGJvdGg7XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJ0ZWFtcy1hbGVydCBhbGVydCBhbGVydC1pbmZvXFxcIiBuZy1zaG93PVxcXCIodGVhbXMgfCBhbGl2ZVRlYW1GaWx0ZXI6dGVhbU9wdGlvbnMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCkubGVuZ3RoID09IDBcXFwiPlxcblwiICtcbiAgICBcIiAgTm8gdGVhbXMgZm91bmRcXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL3RlYW0vZWRpdC90ZWFtLmVkaXQudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvdGVhbS9lZGl0L3RlYW0uZWRpdC50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+RWRpdCBUZWFtPC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxmb3JtIG5hbWU9XFxcImVkaXRUZWFtRm9ybVxcXCIgY2xhc3M9XFxcImVkaXQtdGVhbS1mb3JtIGZvcm0taG9yaXpvbnRhbFxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZT5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IoZWRpdFRlYW1Gb3JtLnRlYW1OYW1lKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKGVkaXRUZWFtRm9ybS50ZWFtTmFtZSl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgZm9yPVxcXCJ0ZWFtTmFtZVxcXCIgY2xhc3M9XFxcImNvbC1zbS0zIGNvbnRyb2wtbGFiZWxcXFwiPlRlYW0gTmFtZTo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS05XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxpbnB1dCBpZD1cXFwidGVhbU5hbWVcXFwiIG5hbWU9XFxcInRlYW1OYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgYSB0ZWFtIG5hbWVcXFwiIG5nLW1vZGVsPVxcXCJ0ZWFtRGF0YS5uYW1lXFxcIiBuZy1tYXhsZW5ndGg9XFxcIjMwXFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoZWRpdFRlYW1Gb3JtLnRlYW1OYW1lLCAncmVxdWlyZWQnKVxcXCI+UmVxdWlyZWQ8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJpbnB1dC1lcnJvclxcXCIgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihlZGl0VGVhbUZvcm0udGVhbU5hbWUsICdtYXhsZW5ndGgnKVxcXCI+VG9vIExvbmc8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IoZWRpdFRlYW1Gb3JtLnRlYW1OYW1lKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZm9ybT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwiZWRpdFRlYW1Gb3JtLiRpbnZhbGlkXFxcIiBuZy1jbGljaz1cXFwiZWRpdFRlYW0odGVhbURhdGEpXFxcIj5VcGRhdGU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL3RlYW0vbWVzc2FnZS90ZWFtLm1lc3NhZ2UudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvdGVhbS9tZXNzYWdlL3RlYW0ubWVzc2FnZS50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+VXBkYXRlIE1lc3NhZ2U8L2gzPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgPGZvcm0gbmFtZT1cXFwibWVzc2FnZUZvcm1cXFwiIGNsYXNzPVxcXCJ0ZWFtLW1lc3NhZ2UtZm9ybSBmb3JtLWhvcml6b250YWxcXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKG1lc3NhZ2VGb3JtLm1lc3NhZ2UpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IobWVzc2FnZUZvcm0ubWVzc2FnZSl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgZm9yPVxcXCJtZXNzYWdlXFxcIiBjbGFzcz1cXFwiY29sLXNtLTQgY29udHJvbC1sYWJlbFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICBUZWFtIE1lc3NhZ2U6IDxicj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobWVzc2FnZUZvcm0ubWVzc2FnZSwgJ21heGxlbmd0aCcpXFxcIj5bIFRvbyBMb25nIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLThcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPHRleHRhcmVhIGlkPVxcXCJtZXNzYWdlXFxcIiBuYW1lPVxcXCJtZXNzYWdlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgYSBtZXNzYWdlIHRvIHB1dCBvbiB0aGUgdGVhbSdzIHdhbGwuLi5cXFwiIHJvd3M9XFxcIjNcXFwiIG5nLW1heGxlbmd0aD1cXFwiNTAwXFxcIiBuZy1tb2RlbD1cXFwidGVhbURhdGEubWVzc2FnZVxcXCI+PC90ZXh0YXJlYT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImVtYWlsLXRlYW0tbWVzc2FnZS1jaGVja2JveFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIG5nLW1vZGVsPVxcXCJtZXNzYWdlT3B0aW9ucy5zZW5kRW1haWxcXFwiPiBlbWFpbCBtZXNzYWdlIHRvIGNvYWNoPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IobWVzc2FnZUZvcm0ubWVzc2FnZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctZGlzYWJsZWQ9XFxcIm1lc3NhZ2VGb3JtLiRwcmlzdGluZSB8fCBtZXNzYWdlRm9ybS4kaW52YWxpZFxcXCIgbmctY2xpY2s9XFxcInVwZGF0ZU1lc3NhZ2UodGVhbURhdGEsIG1lc3NhZ2VPcHRpb25zLnNlbmRFbWFpbClcXFwiPlVwZGF0ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvdGVhbS9waWNrL21hbnkvdGVhbS5waWNrLm1hbnkudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvdGVhbS9waWNrL21hbnkvdGVhbS5waWNrLm1hbnkudHBsLmh0bWxcIixcbiAgICBcIjxocj5cXG5cIiArXG4gICAgXCI8ZGl2IG5nLXJlcGVhdC1zdGFydD1cXFwiZ2FtZSBpbiBnYW1lc1xcXCIgY2xhc3M9XFxcIndlZWstZ2FtZXMgbGlzdC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj48aDUgY2xhc3M9XFxcInN0YXJ0LWRhdGVcXFwiPjxzbWFsbD57e3N0YXJ0cyhnYW1lKX19PC9zbWFsbD48L2g1PjwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJyb3cgZ2FtZS1zcXVhZHNcXFwiPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCIgbmctcmVwZWF0PVxcXCJzcXVhZCBpbiBnYW1lLnNxdWFkc1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGEgbmctY2xpY2s9XFxcInRvZ2dsZVBpY2soZ2FtZSwgc3F1YWQpXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIiBuZy1jbGFzcz1cXFwieydkaXNhYmxlZCc6IGlzRGlzYWJsZWQoZ2FtZSwgc3F1YWQpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgZ2FtZS1yb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3Bhbj48c3BhbiBuZy1zaG93PVxcXCIoJGluZGV4ID09PSAxKVxcXCI+QCA8L3NwYW4+e3tzcXVhZC5uYW1lfX0gPHNwYW4gY2xhc3M9XFxcInJlY29yZC1zY29yZVxcXCIgbmctc2hvdz1cXFwiIWdhbWUuY29tcGxldGVcXFwiPlsge3tzcXVhZC5yZWNvcmR9fSBdPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJyZWNvcmQtc2NvcmVcXFwiIG5nLXNob3c9XFxcImdhbWUuY29tcGxldGVcXFwiPlsge3tnZXRTY29yZShnYW1lLCAkaW5kZXgpfX0gXSA8c3BhbiBuZy1zaG93PVxcXCIoJGluZGV4ID09PSAxKSAmJiBnYW1lLm92ZXJ0aW1lID09PSB0cnVlXFxcIj5PVDwvc3Bhbj48L3NwYW4+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEte3twaWNrU3RhdHVzKGdhbWUsIHNxdWFkKX19IHB1bGwtcmlnaHRcXFwiPjwvaT5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvYT5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IG5nLXJlcGVhdC1lbmQ+PC9kaXY+XFxuXCIgK1xuICAgIFwiPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJzYXZlLXBpY2stYnRuIGJ0biBidG4tcHJpbWFyeVxcXCIgbmctc2hvdz1cXFwiaXNDb2FjaCh0ZWFtKVxcXCIgbmctZGlzYWJsZWQ9XFxcIiFzYXZlUGlja3NFbmFibGVkXFxcIiBuZy1jbGljaz1cXFwic2F2ZVBpY2tzKClcXFwiPlNhdmUgUGlja3M8L2J1dHRvbj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL3RlYW0vcGljay9vbmUvdGVhbS5waWNrLm9uZS50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS90ZWFtL3BpY2svb25lL3RlYW0ucGljay5vbmUudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcInRlYW0tbWVzc2FnZSBhbGVydCBhbGVydC13YXJuaW5nXFxcIiBuZy1zaG93PVxcXCJpc0NvYWNoKHRlYW0pICYmIGlzQ3VycmVudFBpY2tMb2NrZWQoKVxcXCI+PHAgY2xhc3M9XFxcInRlYW0tbWVzc2FnZS10ZXh0XFxcIj5Zb3VyIHBpY2sgZm9yIHt7d2Vlay5uYW1lfX0gKHt7d2Vlay50eXBlfX0pIGlzIGxvY2tlZCBbIHt7Y3VycmVudFBpY2suc3F1YWQubmFtZX19IF08L3A+PC9kaXY+XFxuXCIgK1xuICAgIFwiPGhyPlxcblwiICtcbiAgICBcIjxkaXYgbmctcmVwZWF0LXN0YXJ0PVxcXCJnYW1lIGluIGdhbWVzXFxcIiBjbGFzcz1cXFwid2Vlay1nYW1lcyBsaXN0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPjxoNSBjbGFzcz1cXFwic3RhcnQtZGF0ZVxcXCI+PHNtYWxsPnt7c3RhcnRzKGdhbWUpfX08L3NtYWxsPjwvaDU+PC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcInJvdyBnYW1lLXNxdWFkc1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIiBuZy1yZXBlYXQ9XFxcInNxdWFkIGluIGdhbWUuc3F1YWRzXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YSBuZy1jbGljaz1cXFwibWFrZVBpY2soZ2FtZSwgc3F1YWQpXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIiBuZy1jbGFzcz1cXFwieydkaXNhYmxlZCc6IGlzRGlzYWJsZWQoZ2FtZSwgc3F1YWQpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgZ2FtZS1yb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBuZy1jbGFzcz1cXFwieydpbnZhbGlkLXNxdWFkJzogaGFzU3F1YWRCZWVuVXNlZChnYW1lLCBzcXVhZCl9XFxcIj57e3NxdWFkLm5hbWV9fSA8c3BhbiBjbGFzcz1cXFwicmVjb3JkLXNjb3JlXFxcIiBuZy1zaG93PVxcXCIhZ2FtZS5jb21wbGV0ZVxcXCI+WyB7e3NxdWFkLnJlY29yZH19IF08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInJlY29yZC1zY29yZVxcXCIgbmctc2hvdz1cXFwiZ2FtZS5jb21wbGV0ZVxcXCI+WyB7e2dldFNjb3JlKGdhbWUsICRpbmRleCl9fSBdIDxzcGFuIG5nLXNob3c9XFxcIigkaW5kZXggPT09IDEpICYmIGdhbWUub3ZlcnRpbWUgPT09IHRydWVcXFwiPk9UPC9zcGFuPjwvc3Bhbj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS17e3BpY2tTdGF0dXMoZ2FtZSwgc3F1YWQpfX0gcHVsbC1yaWdodFxcXCI+PC9pPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9hPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgbmctcmVwZWF0LWVuZD48L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL3RlYW0vcGljay90ZWFtLnBpY2sudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvdGVhbS9waWNrL3RlYW0ucGljay50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibWFrZS1waWNrcy1oZWFkZXItcm93IHJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNyBjb2wtbWQtN1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxoMyBjbGFzcz1cXFwid2Vlay1kaXNwbGF5XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICB7e3dlZWsubmFtZX19XFxuXCIgK1xuICAgIFwiICAgIDwvaDM+XFxuXCIgK1xuICAgIFwiICAgIDxoNj48YSBuZy1jbGljaz1cXFwic2hvd1RlYW0odGVhbSlcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1jaGV2cm9uLWxlZnQgZmEtZndcXFwiPjwvaT4gPHNwYW4gY2xhc3M9XFxcInRlYW0tbGVhZ3VlLW5hbWVcXFwiPnt7dGVhbS5uYW1lfX08L3NwYW4+PC9hPjwvaDY+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS01IGNvbC1tZC01XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJzYXZlLXBpY2stYnRuIGJ0biBidG4tcHJpbWFyeVxcXCIgbmctc2hvdz1cXFwidGVhbS5sZWFndWUubWF4X3BpY2tzX3Blcl93ZWVrICE9IDEgJiYgaXNDb2FjaCh0ZWFtKVxcXCIgbmctZGlzYWJsZWQ9XFxcIiFzYXZlUGlja3NFbmFibGVkXFxcIiBuZy1jbGljaz1cXFwic2F2ZVBpY2tzKClcXFwiPlNhdmUgUGlja3M8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcInRlYW0tbWVzc2FnZSBhbGVydCBhbGVydC1pbmZvXFxcIiBuZy1zaG93PVxcXCJpc0NvYWNoKHRlYW0pXFxcIj48cCBjbGFzcz1cXFwidGVhbS1tZXNzYWdlLXRleHRcXFwiPjxzdHJvbmc+e3twaWNrTWVzc2FnZSh0ZWFtLCB3ZWVrKX19PC9zdHJvbmc+PC9wPjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgdWktdmlldz1cXFwicGlja0NvbnRlbnRcXFwiIGNsYXNzPVxcXCJwaWNrLWNvbnRlbnRcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvdGVhbS90ZWFtLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL3RlYW0vdGVhbS50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiB1aS12aWV3PVxcXCJ0ZWFtQ29udGVudFxcXCIgY2xhc3M9XFxcInRlYW0tY29udGVudFxcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS90ZWFtL3ZpZXcvcGlja3MvdGVhbS52aWV3LnBpY2tzLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL3RlYW0vdmlldy9waWNrcy90ZWFtLnZpZXcucGlja3MudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcImxvc2Vycy10YWJcXFwiPlxcblwiICtcbiAgICBcIiAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2LXRhYnNcXFwiPlxcblwiICtcbiAgICBcIiAgICA8bGkgY2xhc3M9XFxcImFjdGl2ZVxcXCI+PGE+TG9zZXJzIFsge3tjb3JyZWN0UGlja0NvdW50KChwaWNrcyB8IHdlZWtQaWNrc0ZpbHRlcjpzZWxlY3RlZFdlZWtTbHVnKSl9fSBdPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICA8L3VsPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwibWFrZS1waWNrLWJ0bi1jb250YWluZXJcXFwiPlxcblwiICtcbiAgICBcIiAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcIm1ha2UtcGljay1idG4gYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1zaG93PVxcXCJpc0NvYWNoKHRlYW1EYXRhKVxcXCIgbmctY2xpY2s9XFxcIm1ha2VQaWNrKHRlYW1EYXRhKVxcXCIgbmctZGlzYWJsZWQ9XFxcInRlYW1EYXRhLmN1cnJlbnRfcGljay5sb2NrZWQgfHwgIXRlYW1EYXRhLnN0YXJ0ZWRcXFwiPjxzcGFuPlBpY2sgTG9zZXI8L3NwYW4+PHNwYW4gbmctc2hvdz1cXFwidGVhbURhdGEubGVhZ3VlLm1heF9waWNrc19wZXJfd2VlayAhPSAxXFxcIj5zPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJ3ZWVrc1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctY2hhbmdlPVxcXCJjaGFuZ2VXZWVrKHNlbGVjdGVkV2Vla1NsdWcpXFxcIiBuZy1tb2RlbD1cXFwic2VsZWN0ZWRXZWVrU2x1Z1xcXCIgbmctb3B0aW9ucz1cXFwibGVhZ3VlV2Vlay5zbHVnIGFzIGxlYWd1ZVdlZWsuZGlzcGxheSBmb3IgbGVhZ3VlV2VlayBpbiBsZWFndWVXZWVrc1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiXFxcIj5BbGwgV2Vla3M8L29wdGlvbj5cXG5cIiArXG4gICAgXCIgICAgPC9zZWxlY3Q+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJ0ZWFtLWNvbnRhaW5lclxcXCIgc3R5bGU9XFxcImNsZWFyOmJvdGg7XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcInRlYW0tcGlja3MgbGlzdC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxhIG5nLXJlcGVhdD1cXFwicGljayBpbiBwaWNrcyB8IHdlZWtQaWNrc0ZpbHRlcjpzZWxlY3RlZFdlZWtTbHVnXFxcIiBjbGFzcz1cXFwidGVhbS1waWNrIGxpc3QtZ3JvdXAtaXRlbVxcXCIgbmctY2xpY2s9XFxcIm1ha2VQaWNrKHRlYW1EYXRhLCBwaWNrKVxcXCIgbmctY2xhc3M9XFxcInsnbG9ja2VkJzogIWlzQ29hY2godGVhbURhdGEpIHx8IHBpY2subG9ja2VkLCAnaW5jb3JyZWN0JzogcGljay5jb3JyZWN0ID09PSBmYWxzZX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3ZWVrLW5hbWUgY29sLXNtLTcgY29sLW1kLTdcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEte3twaWNrU3RhdHVzKHBpY2spfX0gZmEtZncgcGljay1pY29uXFxcIj48L2k+IDxzcGFuIGNsYXNzPVxcXCJwaWNrLXNxdWFkXFxcIj48c3BhbiBjbGFzcz1cXFwicGljay1zcXVhZC1uYW1lXFxcIj5bIHt7cGljay5zcXVhZC5uYW1lfX0gXTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwicGljay1zcXVhZC1hYmJyZXZcXFwiPlsge3twaWNrLnNxdWFkLmFiYnJldn19IF08L3NwYW4+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiZ2FtZS1zdGFydFxcXCI+e3twaWNrLndlZWtfdHlwZX19IHwge3twaWNrLndlZWtfbmFtZX19PHNwYW4gbmctc2hvdz1cXFwicGljay5nYW1lLnN0YXJ0Lmxlbmd0aCA+IDBcXFwiPiB8IHt7cGljay5nYW1lLnN0YXJ0fX08L3NwYW4+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJnYW1lLWNvbHVtbiBjb2wtc20tNSBjb2wtbWQtNVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnYW1lXFxcIj57e3BpY2suZ2FtZS5kaXNwbGF5fX08L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9hPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJuby1waWNrcy1hbGVydCBhbGVydCBhbGVydC1pbmZvXFxcIiBuZy1zaG93PVxcXCIocGlja3MgfCB3ZWVrUGlja3NGaWx0ZXI6c2VsZWN0ZWRXZWVrU2x1ZykubGVuZ3RoID09IDBcXFwiPlxcblwiICtcbiAgICBcIiAgICBObyBwaWNrc1xcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS90ZWFtL3ZpZXcvdGVhbS52aWV3LnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL3RlYW0vdmlldy90ZWFtLnZpZXcudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgbmctc2hvdz1cXFwiIXRlYW1EYXRhLmFjdGl2ZVxcXCI+VGhpcyB0ZWFtIGhhcyBiZWVuIGRlYWN0aXZhdGVkIGJ5IHRoZSBjb21taXNoIGFuZCB3aWxsIGJlIHVuYWJsZSB0byBwaWNrIGxvc2Vycy4gPGEgY2xhc3M9XFxcImFsZXJ0LWxpbmtcXFwiIG5nLWNsaWNrPVxcXCJjb250YWN0Q29tbWlzaCh0ZWFtRGF0YSlcXFwiPkNvbnRhY3QgdGhlIGNvbW1pc2g8L2E+IGlmIHlvdSBoYXZlIHF1ZXN0aW9ucy48L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiIG5nLXNob3c9XFxcInRlYW1EYXRhLmFjdGl2ZSAmJiB0ZWFtRGF0YS5hbGl2ZSAmJiB0ZWFtRGF0YS5zdGFydGVkICYmIGhhc05vUGljayh0ZWFtRGF0YSlcXFwiPk5vIGxvc2VyPHNwYW4gbmctc2hvdz1cXFwidGVhbURhdGEubGVhZ3VlLm1heF9waWNrc19wZXJfd2VlayAhPSAxXFxcIj5zPC9zcGFuPiBwaWNrZWQgZm9yIHt7dGVhbURhdGEuY3VycmVudF93ZWVrX25hbWV9fS4gPHNwYW4gbmctc2hvdz1cXFwiaXNDb2FjaCh0ZWFtRGF0YSlcXFwiPjxhIGNsYXNzPVxcXCJhbGVydC1saW5rXFxcIiBuZy1jbGljaz1cXFwibWFrZVBpY2sodGVhbURhdGEpXFxcIj5QaWNrPC9hPiBub3cuPC9zcGFuPjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgbmctc2hvdz1cXFwidGVhbURhdGEuYWN0aXZlICYmICF0ZWFtRGF0YS5hbGl2ZVxcXCI+VGhpcyB0ZWFtIGlzIERFQUQuIFNvIHNvcnJ5LjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LXdhcm5pbmdcXFwiIG5nLXNob3c9XFxcImlzQ29hY2godGVhbURhdGEpICYmIHRlYW1EYXRhLmFjdGl2ZSAmJiAhdGVhbURhdGEuc3RhcnRlZFxcXCI+WW91IGNhbiBwaWNrIGxvc2VycyB3aGVuIHRoZSBsZWFndWUgc3RhcnRzIC0ge3t0ZWFtRGF0YS5zdGFydF93ZWVrX2Rpc3BsYXl9fTwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImhlYWRlci1yb3cgcm93XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS03IGNvbC1tZC03XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwIHRlYW1zLWRyb3Bkb3duXFxcIiBkcm9wZG93biBpcy1vcGVuPVxcXCJ0ZWFtRHJvcGRvd24uaXNvcGVuXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcInRlYW1zLWJ0bi1saW5rIGJ0biBidG4tbGluayBkcm9wZG93bi10b2dnbGVcXFwiIG5nLWRpc2FibGVkPVxcXCIhaXNDb2FjaCh0ZWFtRGF0YSkgJiYgIWlzQ29tbWlzaCh0ZWFtRGF0YSkgJiYgIWlzQWRtaW4oKVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY2hlY2sgZmEtZndcXFwiIG5nLXNob3c9XFxcImlzQ29tbWlzaCh0ZWFtRGF0YSkgJiYgdGVhbURhdGEucGFpZCA9PSB0cnVlXFxcIiB0aXRsZT1cXFwiUGFpZFxcXCI+PC9pPiA8c3Ryb25nPjxzcGFuIGNsYXNzPVxcXCJ0ZWFtLW5hbWVcXFwiIG5nLWNsYXNzPVxcXCJ7J3RlYW0taW5hY3RpdmUnOiAhdGVhbURhdGEuYWN0aXZlIHx8ICF0ZWFtRGF0YS5hbGl2ZSwgJ2Rpc2FibGVkJzogIWlzQ29hY2godGVhbURhdGEpICYmICFpc0NvbW1pc2godGVhbURhdGEpICYmICFpc0FkbWluKCl9XFxcIj57e3RlYW1EYXRhLm5hbWV9fTwvc3Bhbj4gPHNwYW4gbmctc2hvdz1cXFwiaXNDb2FjaCh0ZWFtRGF0YSkgfHwgaXNDb21taXNoKHRlYW1EYXRhKSB8fCBpc0FkbWluKClcXFwiIGNsYXNzPVxcXCJjYXJldFxcXCI+PC9zcGFuPjwvc3Ryb25nPlxcblwiICtcbiAgICBcIiAgICAgIDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudSB0ZWFtcy1idG4tbWVudVxcXCIgcm9sZT1cXFwibWVudVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGk+PGEgbmctY2xpY2s9XFxcInRvZ2dsZURyb3Bkb3duKCRldmVudCk7ZWRpdFRlYW0odGVhbURhdGEpXFxcIj5FZGl0IHt7dGVhbURhdGEubmFtZX19PC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGk+PGEgbmctc2hvdz1cXFwiaXNDb21taXNoKHRlYW1EYXRhKVxcXCIgbmctY2xpY2s9XFxcInRvZ2dsZURyb3Bkb3duKCRldmVudCk7dXBkYXRlTWVzc2FnZSh0ZWFtRGF0YSlcXFwiPkVkaXQgdGVhbSBtZXNzYWdlPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGkgbmctc2hvdz1cXFwiaXNDb21taXNoKHRlYW1EYXRhKSAmJiAhdGVhbURhdGEucGFpZFxcXCI+PGEgbmctY2xpY2s9XFxcInRvZ2dsZURyb3Bkb3duKCRldmVudCk7cGFpZCh0ZWFtRGF0YSlcXFwiPk1hcmsgdGVhbSBhcyBwYWlkPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGkgbmctc2hvdz1cXFwiaXNDb21taXNoKHRlYW1EYXRhKSAmJiB0ZWFtRGF0YS5wYWlkXFxcIj48YSBuZy1jbGljaz1cXFwidG9nZ2xlRHJvcGRvd24oJGV2ZW50KTt1bnBhaWQodGVhbURhdGEpXFxcIj5NYXJrIHRlYW0gYXMgdW5wYWlkPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGkgbmctc2hvdz1cXFwiaXNDb21taXNoKHRlYW1EYXRhKSAmJiAhdGVhbURhdGEuYWN0aXZlXFxcIj48YSBuZy1jbGljaz1cXFwidG9nZ2xlRHJvcGRvd24oJGV2ZW50KTtjb25maXJtQWN0aXZhdGUodGVhbURhdGEpXFxcIj5SZWFjdGl2YXRlIHRoaXMgdGVhbTwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgICAgPGxpIG5nLXNob3c9XFxcImlzQ29tbWlzaCh0ZWFtRGF0YSkgJiYgdGVhbURhdGEuYWN0aXZlXFxcIj48YSBuZy1jbGljaz1cXFwidG9nZ2xlRHJvcGRvd24oJGV2ZW50KTtjb25maXJtRGVhY3RpdmF0ZSh0ZWFtRGF0YSlcXFwiPkRlYWN0aXZhdGUgdGhpcyB0ZWFtPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGkgbmctc2hvdz1cXFwiIWlzQ29tbWlzaCh0ZWFtRGF0YSlcXFwiPjxhIG5nLWNsaWNrPVxcXCJ0b2dnbGVEcm9wZG93bigkZXZlbnQpO2NvbnRhY3RDb21taXNoKHRlYW1EYXRhKVxcXCI+Q29udGFjdCB0aGUgY29tbWlzaDwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgICAgPGxpIGNsYXNzPVxcXCJkaXZpZGVyXFxcIiBuZy1zaG93PVxcXCJsZWFndWVUZWFtcy5sZW5ndGggPiAxXFxcIj48L2xpPlxcblwiICtcbiAgICBcIiAgICAgICAgPGxpIG5nLXJlcGVhdD1cXFwidGVhbSBpbiBsZWFndWVUZWFtc1xcXCIgbmctc2hvdz1cXFwidGVhbS5pZCAhPSB0ZWFtRGF0YS5pZFxcXCI+PGEgbmctY2xpY2s9XFxcInNob3dUZWFtKHRlYW0pXFxcIj48c3BhbiBjbGFzcz1cXFwib3RoZXItdGVhbS1uYW1lXFxcIiBuZy1jbGFzcz1cXFwieyd0ZWFtLWluYWN0aXZlJzogIXRlYW0uYWN0aXZlIHx8ICF0ZWFtLmFsaXZlfVxcXCI+e3t0ZWFtLm5hbWV9fTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcIm90aGVyLXRlYW0tcGlja1xcXCI+e3t0ZWFtLmN1cnJlbnRfcGljay5hYmJyZXZ9fTwvc3Bhbj48L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICA8L3VsPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGg2PjxhIG5nLWNsaWNrPVxcXCJzaG93TGVhZ3VlKHRlYW1EYXRhKVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWNoZXZyb24tbGVmdCBmYS1md1xcXCI+PC9pPiA8c3BhbiBjbGFzcz1cXFwidGVhbS1sZWFndWUtbmFtZVxcXCI+e3t0ZWFtRGF0YS5sZWFndWUubmFtZX19PC9zcGFuPjwvYT48L2g2PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNSBjb2wtbWQtNSBoaWRkZW4teHNcXFwiPlxcblwiICtcbiAgICBcIiAgICA8aDMgY2xhc3M9XFxcInRlYW0tbWV0YVxcXCI+PHNtYWxsPkNvYWNoIFsge3t0ZWFtRGF0YS5jb2FjaF9uYW1lcy5qb2luKCcsICcpfX0gXTxicj57e3RlYW1EYXRhLmxlYWd1ZS5mb3JtYXR9fTwvc21hbGw+PC9oMz5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxocj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJ0ZWFtLW1lc3NhZ2VcXFwiIG5nLXNob3c9XFxcImlzQ29tbWlzaCh0ZWFtRGF0YSkgfHwgaXNDb2FjaCh0ZWFtRGF0YSlcXFwiPlxcblwiICtcbiAgICBcIiAgPGFjY29yZGlvbiBjbG9zZS1vdGhlcnM9XFxcInRydWVcXFwiPlxcblwiICtcbiAgICBcIiAgICA8YWNjb3JkaW9uLWdyb3VwIGlzLW9wZW49XFxcInVzZXJNb2RlbC50ZWFtTWVzc2FnZU9wZW5bdGVhbURhdGEuaWRdXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YWNjb3JkaW9uLWhlYWRpbmc+XFxuXCIgK1xuICAgIFwiICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY29tbWVudCBmYS1md1xcXCI+PC9pPiBNZXNzYWdlcyB0byB0ZWFtIFsgPHNwYW4gbmctc2hvdz1cXFwidGVhbURhdGEubWVzc2FnZS5sZW5ndGggPiAwXFxcIj4xPC9zcGFuPjxzcGFuIG5nLXNob3c9XFxcIiF0ZWFtRGF0YS5tZXNzYWdlIHx8IHRlYW1EYXRhLm1lc3NhZ2UubGVuZ3RoID09IDBcXFwiPjA8L3NwYW4+IF0gPGkgY2xhc3M9XFxcInB1bGwtcmlnaHQgZ2x5cGhpY29uXFxcIiBuZy1jbGFzcz1cXFwieydnbHlwaGljb24tY2hldnJvbi1kb3duJzogdXNlck1vZGVsLnRlYW1NZXNzYWdlT3Blblt0ZWFtRGF0YS5pZF0sICdnbHlwaGljb24tY2hldnJvbi1yaWdodCc6ICF1c2VyTW9kZWwudGVhbU1lc3NhZ2VPcGVuW3RlYW1EYXRhLmlkXX1cXFwiPjwvaT5cXG5cIiArXG4gICAgXCIgICAgICA8L2FjY29yZGlvbi1oZWFkaW5nPlxcblwiICtcbiAgICBcIiAgICAgIDxwIGNsYXNzPVxcXCJ0ZWFtLW1lc3NhZ2UtdGV4dFxcXCIgbmctc2hvdz1cXFwiIXRlYW1EYXRhLm1lc3NhZ2UgfHwgdGVhbURhdGEubWVzc2FnZS5sZW5ndGggPT0gMFxcXCI+bm8gbWVzc2FnZXM8L3A+PHAgY2xhc3M9XFxcInRlYW0tbWVzc2FnZS10ZXh0XFxcIiBuZy1zaG93PVxcXCJ0ZWFtRGF0YS5tZXNzYWdlLmxlbmd0aCA+IDBcXFwiIG5nLWJpbmQtaHRtbD1cXFwidGVhbURhdGEubWVzc2FnZSB8IGxpbmt5OidfYmxhbmsnXFxcIj48L3A+IDxhIGNsYXNzPVxcXCJhbGVydC1saW5rXFxcIiBuZy1zaG93PVxcXCJpc0NvbW1pc2godGVhbURhdGEpXFxcIiBuZy1jbGljaz1cXFwidXBkYXRlTWVzc2FnZSh0ZWFtRGF0YSlcXFwiPlsgZWRpdCBdPC9hPjxhIGNsYXNzPVxcXCJhbGVydC1saW5rXFxcIiBuZy1zaG93PVxcXCIhaXNDb21taXNoKHRlYW1EYXRhKVxcXCIgbmctY2xpY2s9XFxcImNvbnRhY3RDb21taXNoKHRlYW1EYXRhKVxcXCI+WyBjb250YWN0IGNvbW1pc2ggXTwvYT5cXG5cIiArXG4gICAgXCIgICAgPC9hY2NvcmRpb24tZ3JvdXA+XFxuXCIgK1xuICAgIFwiICA8L2FjY29yZGlvbj5cXG5cIiArXG4gICAgXCIgIDxocj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IHVpLXZpZXc9XFxcInRlYW1QaWNrc0NvbnRlbnRcXFwiIGNsYXNzPVxcXCJwaWNrcy1jb250ZW50XFxcIj48L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL3RlYW1zL2FsaXZlL3RlYW1zLmFsaXZlLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL3RlYW1zL2FsaXZlL3RlYW1zLmFsaXZlLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJhbGl2ZS10ZWFtcyBsaXN0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGEgbmctcmVwZWF0PVxcXCJ0ZWFtIGluIGFsaXZlVGVhbXMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCB8IG9mZnNldEZpbHRlcjooY3VycmVudFRlYW1QYWdlLTEpKnRlYW1zUGVyUGFnZSB8IGxpbWl0VG86dGVhbXNQZXJQYWdlXFxcIiBuZy1jbGljaz1cXFwic2hvd1RlYW0oc2Vhc29uSWQsIHRlYW0pXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGVhbS1uYW1lIGNvbC1zbS02IGNvbC1tZC02XFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtY29tbWVudCBmYS1md1xcXCIgbmctc2hvdz1cXFwidGVhbS5tZXNzYWdlLmxlbmd0aCA+IDBcXFwiIHRpdGxlPVxcXCJIYXMgbWVzc2FnZSBmcm9tIGNvbW1pc2hcXFwiPjwvaT48aSBjbGFzcz1cXFwiZmEgZmEtdGltZXMgZmEtZndcXFwiIHRpdGxlPVxcXCJEZWFjdGl2YXRlZCBUZWFtXFxcIiBuZy1zaG93PVxcXCIhdGVhbS5hY3RpdmVcXFwiPjwvaT4gPHNwYW4gbmctY2xhc3M9XFxcInsnaW5hY3RpdmUtdGVhbS1uYW1lJzogIXRlYW0uYWN0aXZlfVxcXCI+e3t0ZWFtLm5hbWV9fTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRlYW0tbGVhZ3VlXFxcIj57e3RlYW0ubGVhZ3VlLm5hbWV9fTwvc3Bhbj48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjdXJyZW50LXBpY2tcXFwiIG5nLXNob3c9XFxcInRlYW0uYWN0aXZlXFxcIj5QaWNrOiB7e3RlYW0uY3VycmVudF9waWNrLm5hbWV9fTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImluYWN0aXZlLXRlYW1cXFwiIG5nLXNob3c9XFxcIiF0ZWFtLmFjdGl2ZVxcXCI+VGVhbSBoYXMgYmVlbiBkZWFjdGl2YXRlZDwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJhZGdlXFxcIj5WaWV3PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvYT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJhbGl2ZS10ZWFtcy1wYWdpbmF0aW9uXFxcIiBuZy1zaG93PVxcXCJhbGl2ZVRlYW1zLmxlbmd0aCA+IHRlYW1zUGVyUGFnZSAmJiAoYWxpdmVUZWFtcyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0KS5sZW5ndGggPiAwXFxcIj5cXG5cIiArXG4gICAgXCIgIDxwYWdpbmF0aW9uIGJvdW5kYXJ5LWxpbmtzPVxcXCJ0cnVlXFxcIiBtYXgtc2l6ZT1cXFwiNFxcXCIgdG90YWwtaXRlbXM9XFxcIihhbGl2ZVRlYW1zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aFxcXCIgaXRlbXMtcGVyLXBhZ2U9XFxcInRlYW1zUGVyUGFnZVxcXCIgbmctbW9kZWw9XFxcImN1cnJlbnRUZWFtUGFnZVxcXCIgY2xhc3M9XFxcInBhZ2luYXRpb24tbWRcXFwiIHByZXZpb3VzLXRleHQ9XFxcIiZsc2FxdW87XFxcIiBuZXh0LXRleHQ9XFxcIiZyc2FxdW87XFxcIiBmaXJzdC10ZXh0PVxcXCImbGFxdW87XFxcIiBsYXN0LXRleHQ9XFxcIiZyYXF1bztcXFwiPjwvcGFnaW5hdGlvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IHN0eWxlPVxcXCJjbGVhcjogYm90aDtcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWluZm9cXFwiIG5nLXNob3c9XFxcImFsaXZlVGVhbXMubGVuZ3RoID09IDBcXFwiPlxcblwiICtcbiAgICBcIiAgTm8gYWxpdmUgdGVhbXMgOiggTWF5YmUgeW91IHNob3VsZCA8YSBjbGFzcz1cXFwiYWxlcnQtbGlua1xcXCIgbmctY2xpY2s9XFxcImNyZWF0ZVRlYW0oc2Vhc29uSWQpXFxcIj5qb2luIGEgbGVhZ3VlPC9hPiBwcm9udG8hXFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS90ZWFtcy9kZWFkL3RlYW1zLmRlYWQudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvdGVhbXMvZGVhZC90ZWFtcy5kZWFkLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJkZWFkLXRlYW1zIGxpc3QtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgPGEgbmctcmVwZWF0PVxcXCJ0ZWFtIGluIGRlYWRUZWFtcyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0IHwgb2Zmc2V0RmlsdGVyOihjdXJyZW50VGVhbVBhZ2UtMSkqdGVhbXNQZXJQYWdlIHwgbGltaXRUbzp0ZWFtc1BlclBhZ2VcXFwiIG5nLWNsaWNrPVxcXCJzaG93VGVhbShzZWFzb25JZCwgdGVhbSlcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0ZWFtLW5hbWUgY29sLXNtLTYgY29sLW1kLTZcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1jb21tZW50IGZhLWZ3XFxcIiBuZy1zaG93PVxcXCJ0ZWFtLm1lc3NhZ2UubGVuZ3RoID4gMFxcXCIgdGl0bGU9XFxcIkhhcyBtZXNzYWdlIGZyb20gY29tbWlzaFxcXCI+PC9pPiA8aSBjbGFzcz1cXFwiZmEgZmEtdGltZXMgZmEtZndcXFwiIHRpdGxlPVxcXCJEZWFjdGl2YXRlZCBUZWFtXFxcIiBuZy1zaG93PVxcXCIhdGVhbS5hY3RpdmVcXFwiPjwvaT4gPHNwYW4gbmctY2xhc3M9XFxcInsnaW5hY3RpdmUtdGVhbS1uYW1lJzogIXRlYW0uYWN0aXZlfVxcXCI+e3t0ZWFtLm5hbWV9fTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRlYW0tbGVhZ3VlXFxcIj57e3RlYW0ubGVhZ3VlLm5hbWV9fTwvc3Bhbj48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjdXJyZW50LXBpY2sgbm8tcGlja1xcXCIgbmctc2hvdz1cXFwidGVhbS5hY3RpdmVcXFwiPlBpY2s6IHt7dGVhbS5jdXJyZW50X3BpY2submFtZX19PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5hY3RpdmUtdGVhbVxcXCIgbmctc2hvdz1cXFwiIXRlYW0uYWN0aXZlXFxcIj5UZWFtIGhhcyBiZWVuIGRlYWN0aXZhdGVkPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYmFkZ2VcXFwiPlZpZXc8L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9hPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImRlYWQtdGVhbXMtcGFnaW5hdGlvblxcXCIgbmctc2hvdz1cXFwiZGVhZFRlYW1zLmxlbmd0aCA+IHRlYW1zUGVyUGFnZSAmJiAoZGVhZFRlYW1zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aCA+IDBcXFwiPlxcblwiICtcbiAgICBcIiAgPHBhZ2luYXRpb24gYm91bmRhcnktbGlua3M9XFxcInRydWVcXFwiIG1heC1zaXplPVxcXCI0XFxcIiB0b3RhbC1pdGVtcz1cXFwiKGRlYWRUZWFtcyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0KS5sZW5ndGhcXFwiIGl0ZW1zLXBlci1wYWdlPVxcXCJ0ZWFtc1BlclBhZ2VcXFwiIG5nLW1vZGVsPVxcXCJjdXJyZW50VGVhbVBhZ2VcXFwiIGNsYXNzPVxcXCJwYWdpbmF0aW9uLW1kXFxcIiBwcmV2aW91cy10ZXh0PVxcXCImbHNhcXVvO1xcXCIgbmV4dC10ZXh0PVxcXCImcnNhcXVvO1xcXCIgZmlyc3QtdGV4dD1cXFwiJmxhcXVvO1xcXCIgbGFzdC10ZXh0PVxcXCImcmFxdW87XFxcIj48L3BhZ2luYXRpb24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBzdHlsZT1cXFwiY2xlYXI6IGJvdGg7XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1pbmZvXFxcIiBuZy1zaG93PVxcXCJkZWFkVGVhbXMubGVuZ3RoID09IDBcXFwiPlxcblwiICtcbiAgICBcIiAgTm8gZGVhZCB0ZWFtcyA6KVxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvdGVhbXMvdGVhbXMudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvdGVhbXMvdGVhbXMudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcInRlYW1zLWhlYWRlci1yb3cgcm93XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS05IGNvbC1tZC05XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGgzPkkgY29hY2ggdGhlc2UgdGVhbXMuLi48L2gzPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMyBjb2wtbWQtM1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInRlYW1zLWJ0bi1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjcmVhdGUtdGVhbS1idG4gYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1jbGljaz1cXFwiY3JlYXRlVGVhbShzZWFzb25JZClcXFwiPkpvaW4gTGVhZ3VlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGhyPlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcInRlYW1zLWNvbnRhaW5lclxcXCI+XFxuXCIgK1xuICAgIFwiICA8dWwgY2xhc3M9XFxcIm5hdiBuYXYtdGFic1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxsaSBuZy1jbGFzcz1cXFwieydhY3RpdmUnOiBpc0FsaXZlU3RhdGUoKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxhIG5nLWNsaWNrPVxcXCJhbGl2ZVRlYW1zKHNlYXNvbklkKVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXRodW1icy11cCBmYS1md1xcXCIgdGl0bGU9XFxcIkFsaXZlIHRlYW1zXFxcIj48L2k+IEFsaXZlIFRlYW1zPC9hPlxcblwiICtcbiAgICBcIiAgICA8L2xpPlxcblwiICtcbiAgICBcIiAgICA8bGkgbmctY2xhc3M9XFxcInsnYWN0aXZlJzogIWlzQWxpdmVTdGF0ZSgpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGEgbmctY2xpY2s9XFxcImRlYWRUZWFtcyhzZWFzb25JZClcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS10aHVtYnMtZG93biBmYS1md1xcXCIgdGl0bGU9XFxcIkRlYWQgdGVhbXNcXFwiPjwvaT4gRGVhZCBUZWFtczwvYT5cXG5cIiArXG4gICAgXCIgICAgPC9saT5cXG5cIiArXG4gICAgXCIgIDwvdWw+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiPCEtLSBwbGFjZWhvbGRlciBmb3IgYWxpdmUgYW5kIGRlYWQgdGVhbXMgLS0+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwidGVhbXMtY29udGVudFxcXCIgdWktdmlldz1cXFwidGVhbXNDb250ZW50XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL3VzZXIvcmVzZXQvdXNlci5yZXNldC50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS91c2VyL3Jlc2V0L3VzZXIucmVzZXQudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPlJlc2V0IFBhc3N3b3JkPC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxmb3JtIG5hbWU9XFxcInJlc2V0UGFzc3dvcmRGb3JtXFxcIiBjbGFzcz1cXFwicmVzZXQtcGFzc3dvcmQtZm9ybSBmb3JtLWhvcml6b250YWxcXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKHJlc2V0UGFzc3dvcmRGb3JtLmVtYWlsKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKHJlc2V0UGFzc3dvcmRGb3JtLmVtYWlsKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBmb3I9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiY29sLXNtLTIgY29udHJvbC1sYWJlbFxcXCI+RW1haWw6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGlucHV0IGlkPVxcXCJlbWFpbFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIHR5cGU9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgeW91ciBlbWFpbFxcXCIgbmctbW9kZWw9XFxcInVzZXJEYXRhLmVtYWlsXFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IocmVzZXRQYXNzd29yZEZvcm0uZW1haWwsICdyZXF1aXJlZCcpXFxcIj5SZXF1aXJlZDwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKHJlc2V0UGFzc3dvcmRGb3JtLmVtYWlsLCAnZW1haWwnKVxcXCI+SW52YWxpZCBlbWFpbDwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihyZXNldFBhc3N3b3JkRm9ybS5lbWFpbClcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctZGlzYWJsZWQ9XFxcInJlc2V0UGFzc3dvcmRGb3JtLiRwcmlzdGluZSB8fCByZXNldFBhc3N3b3JkRm9ybS4kaW52YWxpZFxcXCIgbmctY2xpY2s9XFxcInJlc2V0KHVzZXJEYXRhLmVtYWlsKVxcXCI+UmVzZXQ8L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL3VzZXIvdXNlci50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS91c2VyL3VzZXIudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGgzIGNsYXNzPVxcXCJwYW5lbC10aXRsZVxcXCI+VXNlciBQcm9maWxlPC9oMz5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGZvcm0gbmFtZT1cXFwiZWRpdFVzZXJGb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKGVkaXRVc2VyRm9ybS5maXJzdE5hbWUpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IoZWRpdFVzZXJGb3JtLmZpcnN0TmFtZSl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImZpcnN0TmFtZVxcXCI+Rmlyc3QgTmFtZVxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoZWRpdFVzZXJGb3JtLmZpcnN0TmFtZSwgJ3JlcXVpcmVkJylcXFwiPlsgUmVxdWlyZWQgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihlZGl0VXNlckZvcm0uZmlyc3ROYW1lLCAnbWF4bGVuZ3RoJylcXFwiPlsgVG9vIExvbmcgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwiZmlyc3ROYW1lXFxcIiBuYW1lPVxcXCJmaXJzdE5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJ1c2VyRGF0YS51c2VyLmZpcnN0X25hbWVcXFwiIG5nLW1heGxlbmd0aD1cXFwiMTVcXFwiIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihlZGl0VXNlckZvcm0uZmlyc3ROYW1lKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IoZWRpdFVzZXJGb3JtLmxhc3ROYW1lKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKGVkaXRVc2VyRm9ybS5sYXN0TmFtZSl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImxhc3ROYW1lXFxcIj5MYXN0IE5hbWVcXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGVkaXRVc2VyRm9ybS5sYXN0TmFtZSwgJ3JlcXVpcmVkJylcXFwiPlsgUmVxdWlyZWQgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihlZGl0VXNlckZvcm0ubGFzdE5hbWUsICdtYXhsZW5ndGgnKVxcXCI+WyBUb28gTG9uZyBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJsYXN0TmFtZVxcXCIgbmFtZT1cXFwibGFzdE5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJ1c2VyRGF0YS51c2VyLmxhc3RfbmFtZVxcXCIgbmctbWF4bGVuZ3RoPVxcXCIyMFxcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKGVkaXRVc2VyRm9ybS5sYXN0TmFtZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiZW1haWxcXFwiPkVtYWlsPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwiZW1haWxcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiB0eXBlPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctZGlzYWJsZWQ9XFxcInRydWVcXFwiIG5nLW1vZGVsPVxcXCJ1c2VyRGF0YS51c2VyLmVtYWlsXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IoZWRpdFVzZXJGb3JtLnBhc3N3b3JkKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKGVkaXRVc2VyRm9ybS5wYXNzd29yZCl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcInBhc3N3b3JkXFxcIj5OZXcgUGFzc3dvcmRcXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGVkaXRVc2VyRm9ybS5wYXNzd29yZCwgJ21pbmxlbmd0aCcpXFxcIj5bIDggLSA1MCBDaGFyYWN0ZXJzIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoZWRpdFVzZXJGb3JtLnBhc3N3b3JkLCAnbWF4bGVuZ3RoJylcXFwiPlsgOCAtIDUwIENoYXJhY3RlcnMgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwicGFzc3dvcmRcXFwiIG5hbWU9XFxcInBhc3N3b3JkXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcInVzZXJEYXRhLnVzZXIucGFzc3dvcmRcXFwiIG5nLW1pbmxlbmd0aD1cXFwiOFxcXCIgbmctbWF4bGVuZ3RoPVxcXCI1MFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKGVkaXRVc2VyRm9ybS5wYXNzd29yZClcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKGVkaXRVc2VyRm9ybS5jb25maXJtUGFzc3dvcmQpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IoZWRpdFVzZXJGb3JtLmNvbmZpcm1QYXNzd29yZCl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImNvbmZpcm1QYXNzd29yZFxcXCI+Q29uZmlybSBOZXcgUGFzc3dvcmRcXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGVkaXRVc2VyRm9ybS5jb25maXJtUGFzc3dvcmQsICdtYXRjaCcpXFxcIj5bIE5vIE1hdGNoIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgbmFtZT1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcInVzZXJEYXRhLnVzZXIucGFzc3dvcmRfY29uZmlybWF0aW9uXFxcIiBtYXRjaD1cXFwidXNlckRhdGEudXNlci5wYXNzd29yZFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKGVkaXRVc2VyRm9ybS5jb25maXJtUGFzc3dvcmQpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvIGJ0bi1ibG9ja1xcXCIgbmctZGlzYWJsZWQ9XFxcImVkaXRVc2VyRm9ybS4kcHJpc3RpbmUgfHwgZWRpdFVzZXJGb3JtLiRpbnZhbGlkXFxcIiBuZy1jbGljaz1cXFwidXBkYXRlKHVzZXJEYXRhLnVzZXIpXFxcIj5VcGRhdGU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wdWJsaWMvYWJ1c2UvYWJ1c2UudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3B1YmxpYy9hYnVzZS9hYnVzZS50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+Q29udGFjdCBVczwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8Zm9ybSBuYW1lPVxcXCJhYnVzZUZvcm1cXFwiIGNsYXNzPVxcXCJjb250YWN0LWZvcm0gZm9ybS1ob3Jpem9udGFsXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihhYnVzZUZvcm0ubWVzc2FnZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihhYnVzZUZvcm0ubWVzc2FnZSl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgZm9yPVxcXCJtZXNzYWdlXFxcIiBjbGFzcz1cXFwiY29sLXNtLTIgY29udHJvbC1sYWJlbFxcXCI+TWVzc2FnZTo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8dGV4dGFyZWEgaWQ9XFxcIm1lc3NhZ2VcXFwiIG5hbWU9XFxcIm1lc3NhZ2VcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJXaGF0J3Mgb24geW91ciBtaW5kP1xcXCIgcm93cz1cXFwiM1xcXCIgbWF4bGVuZ3RoPVxcXCIyMDBcXFwiIG5nLW1vZGVsPVxcXCJhYnVzZU1lc3NhZ2VcXFwiIHJlcXVpcmVkPjwvdGV4dGFyZWE+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGFidXNlRm9ybS5tZXNzYWdlLCAncmVxdWlyZWQnKVxcXCI+UmVxdWlyZWQ8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJpbnB1dC1lcnJvclxcXCIgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihhYnVzZUZvcm0ubWVzc2FnZSwgJ21heGxlbmd0aCcpXFxcIj5Ub28gTG9uZzwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihhYnVzZUZvcm0ubWVzc2FnZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctZGlzYWJsZWQ9XFxcImFidXNlRm9ybS4kcHJpc3RpbmUgfHwgYWJ1c2VGb3JtLiRpbnZhbGlkXFxcIiBuZy1jbGljaz1cXFwiY29udGFjdFVzKGFidXNlTWVzc2FnZSlcXFwiPlNlbmQ8L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wdWJsaWMvZmFxL2ZhcS50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHVibGljL2ZhcS9mYXEudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2xvc2UoKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+RkFRPC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkbCBjbGFzcz1cXFwiZmFxXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGR0PldoaWNoIHNwb3J0cyBhcmUgYXZhaWxhYmxlPzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5ORkwsIE5CQSBvciBOSEwuPC9kZD5cXG5cIiArXG4gICAgXCIgICAgPGR0PkhvdyBtdWNoIGRvZXMgaXQgY29zdD88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+WmlwLiBaaWxjaC4gTmFkYS4gRnJlZWVlZWVlZWVlZWUuLi48L2RkPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+SG93IGRvIEkgcGxheT88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+XFxuXCIgK1xuICAgIFwiICAgICAgPHA+LSBKb2luIGEgc2luZ2xlIGVsaW1pbmF0aW9uIG9yIG5vbi1lbGltaW5hdGlvbiBsZWFndWUuPC9wPlxcblwiICtcbiAgICBcIiAgICAgIDxwPi0gUGljayBhIGRpZmZlcmVudCBsb3NlciBlYWNoIHdlZWsuPC9wPlxcblwiICtcbiAgICBcIiAgICAgIDxwPi0gUm9vdCBmb3IgeW91ciBsb3NlciB0byBsb3NlLi4uZHVoPC9wPlxcblwiICtcbiAgICBcIiAgICAgIDxwPi0gSW4gYSBub24tZWxpbWluYXRpb24gbGVhZ3VlLCBnZXQgdGhlIG1vc3QgcGlja3MgcmlnaHQgYW5kIHdpbi48L3A+XFxuXCIgK1xuICAgIFwiICAgICAgPHA+LSBJbiBzaW5nbGUgZWxpbWluYXRpb24gbGVhZ3VlLCBsYXN0IHRoZSBsb25nZXN0IGFuZCB3aW4uPC9wPlxcblwiICtcbiAgICBcIiAgICAgIDxwPi0gSGF2ZSBmdW4hPC9wPlxcblwiICtcbiAgICBcIiAgICA8L2RkPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+Q2FuIEkgcGljayB0aGUgc2FtZSBsb3NlciB0d2ljZT88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+Tm9wZS4uLnVubGVzcyB5b3UgbWFrZSBpdCB0byB0aGUgcGxheW9mZnMsIHRoZW4gYWxsIHRlYW1zIGFyZSBvbmNlIGFnYWluIGF2YWlsYWJsZSB0byBjaG9vc2UgZnJvbS48L2RkPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+V2hlbiBpcyB0aGUgZGVhZGxpbmUgdG8gbWFrZSBteSBwaWNrPzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5KdXN0IGdldCBpdCBpbiBiZWZvcmUgYSBnYW1lIHN0YXJ0cy48L2RkPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+RG8gdGllcyBjb3VudCBhcyBhIGxvc3M/PC9kdD5cXG5cIiArXG4gICAgXCIgICAgPGRkPk5vIHNpci4gQnV0IGZvciBOSEwsIG92ZXJ0aW1lIG9yIHNob290b3V0IGxvc3NlcyBjb3VudCBhcyBhIGxvc3MuPC9kZD5cXG5cIiArXG4gICAgXCIgICAgPGR0PldoYXQgaXMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBhIHB1YmxpYyBhbmQgcHJpdmF0ZSBsZWFndWU/PC9kdD5cXG5cIiArXG4gICAgXCIgICAgPGRkPlB1YmxpYyBsZWFndWVzIGFsbG93IGFueW9uZSB0byBqb2luLiBQcml2YXRlIGxlYWd1ZXMgcmVxdWlyZSBhbiBpbnZpdGF0aW9uIGZyb20gdGhlIGNvbW1pc2guPC9kZD5cXG5cIiArXG4gICAgXCIgICAgPGR0PlRoZSBzZWFzb24gaGFzIGFscmVhZHkgc3RhcnRlZCwgY2FuIEkgc3RpbGwgcGxheT88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+WWVwLiBUaGVyZeKAmXMgYWx3YXlzIGFuIG9wZW4gbGVhZ3VlIG9yIGNyZWF0ZSB5b3VyIG93biBsZWFndWUgdG8gc3RhcnQgYW55dGltZSBkdXJpbmcgdGhlIHNlYXNvbi48L2RkPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+V2hlbiBpcyB0aGUgZGVhZGxpbmUgdG8gam9pbiBhIGxlYWd1ZT88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+Sm9pbiBiZWZvcmUgdGhlIGVuZCBvZiB0aGUgbGVhZ3VlJ3MgZmlyc3Qgd2Vlay48L2RkPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+V2hhdCBpZiBJIGZhaWwgdG8gbWFrZSBhIHBpY2sgZm9yIGEgd2Vlaz88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+SW4gYSBzaW5nbGUgZWxpbWluYXRpb24gbGVhZ3VlLCB5b3XigJlyZSB0b2FzdC4gSW4gYSBub24tZWxpbWluYXRpb24gbGVhZ3VlLCB5b3UndmUganVzdCBtaXNzZWQgYW4gb3Bwb3J0dW5pdHkuIERvbid0IGxldCBpdCBoYXBwZW4gYWdhaW4uPC9kZD5cXG5cIiArXG4gICAgXCIgICAgPGR0PkNhbiB0aGUgY29tbWlzaCBtYWtlIHBpY2tzIGZvciBtZT88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+TmVnYXRpdmUuPC9kZD5cXG5cIiArXG4gICAgXCIgICAgPGR0PkhvdyBtYW55IHRpbWVzIGNhbiBJIGpvaW4gYSBsZWFndWU/PC9kdD5cXG5cIiArXG4gICAgXCIgICAgPGRkPkFzIG11Y2ggYXMgdGhlIGNvbW1pc2ggYWxsb3dzICh3aXRoIGEgbWF4IG9mIDEwIHRpbWVzKS48L2RkPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+SG93IGRvIEkgd2luPzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5JbiBhIHNpbmdsZSBlbGltaW5hdGlvbiBsZWFndWUsIGRvbuKAmXQgYmUgd3JvbmcuIChPciBhdCBsZWFzdCBiZSB0aGUgbGFzdCBvbmUgaW4geW91ciBsZWFndWUgdG8gYmUgd3JvbmcuKSBJbiBhIG5vbi1lbGltaW5hdGlvbiBsZWFndWUsIGdldCB0aGUgbW9zdCBwaWNrcyByaWdodCB0byB3aW4uPC9kZD5cXG5cIiArXG4gICAgXCIgICAgPGR0PldoYXQgZG8gSSB3aW4/PC9kdD5cXG5cIiArXG4gICAgXCIgICAgPGRkPlRoYXQgaXMgYmV0d2VlbiB5b3UgYW5kIHRoZSBjb21taXNoIG9mIHRoZSBsZWFndWUuIEhvd2V2ZXIsIHBsZWFzZSBiZSBjYXJlZnVsIHdoZW4gZGVhbGluZyB3aXRoIG1vbmV5LiBEb27igJl0IHNlbmQgbW9uZXkgdG8gYW55b25lIHlvdSBkb27igJl0IGtub3cuIENvbW1vbiBzZW5zZSwgcGxlYXNlLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5DYW4gSSBzZWUgdGhlIHBpY2sgb2Ygb3RoZXJzIGluIG15IGxlYWd1ZT88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+T25seSBhZnRlciB0aGUgZ2FtZSBoYXMgc3RhcnRlZC48L2RkPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+Q2FuIHRoZSBjb21taXNoIHNlZSBteSBwaWNrPzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5Pbmx5IGFmdGVyIHRoZSBnYW1lIGhhcyBzdGFydGVkLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5DYW4gSSBjcmVhdGUgbXkgb3duIGxlYWd1ZT88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+WW91IGJldGNoYS4gQ3JlYXRlIGEgc2luZ2xlIGVsaW1pbmF0aW9uIG9yIG5vbi1lbGltaW5hdGlvbiBsZWFndWUuPC9kZD5cXG5cIiArXG4gICAgXCIgICAgPGR0PkhvdyBkbyBJIGludml0ZSBteSBmcmllbmRzIHRvIGpvaW4gbXkgbGVhZ3VlPzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5PbiB5b3VyIGxlYWd1ZSBwYWdlIHlvdeKAmWxsIGZpbmQgYW4gJ0ludml0ZScgYnV0dG9uLiBVc2UgaXQuIFlvdeKAmWxsIGp1c3QgbmVlZCB0aGVpciBlbWFpbCBhZGRyZXNzLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5Ib3cgbWFueSBmcmllbmRzIGNhbiBqb2luIG15IGxlYWd1ZT88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+QXMgbWFueSBhcyB5b3UgbGlrZS48L2RkPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+Q2FuIEkgc2V0IGEgbGltaXQgb24gaG93IG1hbnkgdGltZXMgYSBmcmllbmQgY2FuIGpvaW4gbXkgbGVhZ3VlPzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5Zb3Ugc3VyZSBjYW4uIDEgLSAxMCB0aW1lcy48L2RkPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+SG93IGRvIEkgc3RvcCBwZW9wbGUgZnJvbSBqb2luaW5nIG15IGxlYWd1ZT88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+Q2hhbmdlIHRoZSBsZWFndWUgdG8gcHJpdmF0ZS48L2RkPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+SG93IGNhbiBJIHJlbW92ZSBwZW9wbGUgZnJvbSBteSBsZWFndWU/PC9kdD5cXG5cIiArXG4gICAgXCIgICAgPGRkPllvdSBjYW7igJl0IGJ1dCB5b3UgY2FuIGRlYWN0aXZhdGUgKG9yIHJlYWN0aXZhdGUpIHRoZWlyIHRlYW0uIEEgZGVhY3RpdmF0ZWQgdGVhbSBpcyBoaWRkZW4gZnJvbSB2aWV3IGFuZCBjYW7igJl0IG1ha2UgYW55IHBpY2tzLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5DYW4gSSBlZGl0IG15IGxlYWd1ZT88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+WWVzLCBidXQgeW91IGNhbid0IGNoYW5nZSB0aGUgc3RhcnQgd2VlayBvciBmb3JtYXQgKHNpbmdsZSBlbGltaW5hdGlvbiBvciBubyBlbGltaW5hdGlvbikgYWZ0ZXIgdGhlIGxlYWd1ZSBzdGFydHMuPC9kZD5cXG5cIiArXG4gICAgXCIgICAgPGR0PkNhbiBJIGVkaXQgYSB0ZWFtIG5hbWUgaW4gbXkgbGVhZ3VlPzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5ZZXMsIHRoZSB0ZWFtJ3MgY29hY2ggb3IgdGhlIGNvbW1pc2ggY2FuIGVkaXQgYSB0ZWFtIG5hbWUgYXQgYW55IHRpbWUuPC9kZD5cXG5cIiArXG4gICAgXCIgICAgPGR0PldoYXQgaWYgaSBzdGlsbCBoYXZlIHF1ZXN0aW9ucz88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+RmluZCB0aGUgQ29udGFjdCBVcyBidXR0b24uIFdlJ2xsIGdldCByaWdodCBiYWNrIHRvIHlvdS48L2RkPlxcblwiICtcbiAgICBcIiAgPC9kbD5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2xvc2UoKVxcXCI+Q2xvc2U8L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wdWJsaWMvaG9tZS9ob21lLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wdWJsaWMvaG9tZS9ob21lLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJob21lLWNvbnRlbnQtY29udGFpbmVyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGgxIGNsYXNzPVxcXCJoZWFkZXItanVtYm9cXFwiPkxvc2luZyBpcyBFdmVyeXRoaW5nLjwvaDE+XFxuXCIgK1xuICAgIFwiICAgIDxwIGNsYXNzPVxcXCJsZWFkXFxcIj5ORkwsIE5CQSBvciBOSEwgc3Vydml2b3IgYW5kIHBpY2snZW0gbGVhZ3VlcyBhcmUgd2FpdGluZyBmb3IgeW91LiBKb2luIGFueXRpbWUgZm9yIGZyZWUuPC9wPlxcblwiICtcbiAgICBcIiAgPGRpdj5cXG5cIiArXG4gICAgXCIgICAgPGEgY2xhc3M9XFxcImN0YSBidG4gYnRuLXByaW1hcnkgYnRuLWxnXFxcIiByb2xlPVxcXCJidXR0b25cXFwiIG5nLWNsaWNrPVxcXCJqb2luTGVhZ3VlKClcXFwiPkpvaW4gTGVhZ3VlPC9hPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2PlxcblwiICtcbiAgICBcIiAgICA8YSBjbGFzcz1cXFwiY3RhIGJ0biBidG4tcHJpbWFyeSBidG4tbGdcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCIgbmctY2xpY2s9XFxcImNyZWF0ZUxlYWd1ZSgpXFxcIj5DcmVhdGUgTGVhZ3VlPC9hPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHVibGljL3JlZ2lzdGVyL3JlZ2lzdGVyLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXIvcmVnaXN0ZXIudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPlJlZ2lzdGVyPC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxmb3JtIG5hbWU9XFxcIm5ld1VzZXJGb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKG5ld1VzZXJGb3JtLmZpcnN0TmFtZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihuZXdVc2VyRm9ybS5maXJzdE5hbWUpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJmaXJzdE5hbWVcXFwiPkZpcnN0IE5hbWVcXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihuZXdVc2VyRm9ybS5maXJzdE5hbWUsICdyZXF1aXJlZCcpXFxcIj5bIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld1VzZXJGb3JtLmZpcnN0TmFtZSwgJ21heGxlbmd0aCcpXFxcIj5bIFRvbyBMb25nIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aW5wdXQgaWQ9XFxcImZpcnN0TmFtZVxcXCIgbmFtZT1cXFwiZmlyc3ROYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwibmV3VXNlckRhdGEuZmlyc3RfbmFtZVxcXCIgbmctbWF4bGVuZ3RoPVxcXCIxNVxcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKG5ld1VzZXJGb3JtLmZpcnN0TmFtZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKG5ld1VzZXJGb3JtLmxhc3ROYW1lKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKG5ld1VzZXJGb3JtLmxhc3ROYW1lKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwibGFzdE5hbWVcXFwiPkxhc3QgTmFtZVxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld1VzZXJGb3JtLmxhc3ROYW1lLCAncmVxdWlyZWQnKVxcXCI+WyBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihuZXdVc2VyRm9ybS5sYXN0TmFtZSwgJ21heGxlbmd0aCcpXFxcIj5bIFRvbyBMb25nIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aW5wdXQgaWQ9XFxcImxhc3ROYW1lXFxcIiBuYW1lPVxcXCJsYXN0TmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcIm5ld1VzZXJEYXRhLmxhc3RfbmFtZVxcXCIgbmctbWF4bGVuZ3RoPVxcXCIyMFxcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKG5ld1VzZXJGb3JtLmxhc3ROYW1lKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJ1c2VyLW5pY2tuYW1lIHJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcIm5pY2tuYW1lXFxcIj5OaWNrbmFtZTwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpbnB1dCBpZD1cXFwibmlja25hbWVcXFwiIG5hbWU9XFxcIm5pY2tuYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwibmV3VXNlckRhdGEubmlja25hbWVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKG5ld1VzZXJGb3JtLmVtYWlsKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKG5ld1VzZXJGb3JtLmVtYWlsKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiZW1haWxcXFwiPkVtYWlsXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobmV3VXNlckZvcm0uZW1haWwsICdyZXF1aXJlZCcpXFxcIj5bIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld1VzZXJGb3JtLmVtYWlsLCAnZW1haWwnKVxcXCI+WyBJbnZhbGlkIEVtYWlsIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aW5wdXQgaWQ9XFxcImVtYWlsXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJuZXdVc2VyRGF0YS5lbWFpbFxcXCIgbG9naC1mb2N1cyByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IobmV3VXNlckZvcm0uZW1haWwpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihuZXdVc2VyRm9ybS5jb25maXJtRW1haWwpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IobmV3VXNlckZvcm0uY29uZmlybUVtYWlsKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiY29uZmlybUVtYWlsXFxcIj5Db25maXJtIEVtYWlsXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobmV3VXNlckZvcm0uY29uZmlybUVtYWlsLCAnbWF0Y2gnKVxcXCI+WyBObyBNYXRjaCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJjb25maXJtRW1haWxcXFwiIG5hbWU9XFxcImNvbmZpcm1FbWFpbFxcXCIgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJuZXdVc2VyRGF0YS5lbWFpbF9jb25maXJtYXRpb25cXFwiIG1hdGNoPVxcXCJuZXdVc2VyRGF0YS5lbWFpbFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKG5ld1VzZXJGb3JtLmNvbmZpcm1FbWFpbClcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihuZXdVc2VyRm9ybS5wYXNzd29yZCksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihuZXdVc2VyRm9ybS5wYXNzd29yZCl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcInBhc3N3b3JkXFxcIj5QYXNzd29yZFxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld1VzZXJGb3JtLnBhc3N3b3JkLCAncmVxdWlyZWQnKVxcXCI+WyBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihuZXdVc2VyRm9ybS5wYXNzd29yZCwgJ21pbmxlbmd0aCcpXFxcIj5bIDggLSA1MCBDaGFyYWN0ZXJzIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld1VzZXJGb3JtLnBhc3N3b3JkLCAnbWF4bGVuZ3RoJylcXFwiPlsgOCAtIDUwIENoYXJhY3RlcnMgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpbnB1dCBpZD1cXFwicGFzc3dvcmRcXFwiIG5hbWU9XFxcInBhc3N3b3JkXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcIm5ld1VzZXJEYXRhLnBhc3N3b3JkXFxcIiBuZy1taW5sZW5ndGg9XFxcIjhcXFwiIG5nLW1heGxlbmd0aD1cXFwiNTBcXFwiIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihuZXdVc2VyRm9ybS5wYXNzd29yZClcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKG5ld1VzZXJGb3JtLmNvbmZpcm1QYXNzd29yZCksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihuZXdVc2VyRm9ybS5jb25maXJtUGFzc3dvcmQpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiPkNvbmZpcm0gUGFzc3dvcmRcXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihuZXdVc2VyRm9ybS5jb25maXJtUGFzc3dvcmQsICdtYXRjaCcpXFxcIj5bIE5vIE1hdGNoIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aW5wdXQgaWQ9XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgbmFtZT1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcIm5ld1VzZXJEYXRhLnBhc3N3b3JkX2NvbmZpcm1hdGlvblxcXCIgbWF0Y2g9XFxcIm5ld1VzZXJEYXRhLnBhc3N3b3JkXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IobmV3VXNlckZvcm0uY29uZmlybVBhc3N3b3JkKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJ0ZXJtcyB3ZWxsIHdlbGwtc21cXFwiPjxzdHJvbmc+QnkgY2xpY2tpbmcgcmVnaXN0ZXIsIHlvdSBhZ3JlZSB0byB0aGUgPGEgbmctY2xpY2s9XFxcInNob3dUZXJtcygpXFxcIj50ZXJtcyBvZiB1c2UuPC9hPjwvc3Ryb25nPjwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9mb3JtPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+Q2FuY2VsPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctZGlzYWJsZWQ9XFxcIm5ld1VzZXJGb3JtLiRpbnZhbGlkXFxcIiBuZy1jbGljaz1cXFwicmVnaXN0ZXIobmV3VXNlckRhdGEpXFxcIj5SZWdpc3RlcjwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci90ZXJtcy9yZWdpc3Rlci50ZXJtcy50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHVibGljL3JlZ2lzdGVyL3Rlcm1zL3JlZ2lzdGVyLnRlcm1zLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgbmctY2xpY2s9XFxcImNsb3NlKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPlRlcm1zIG9mIFVzZTwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8cD5JZiB5b3UgY2hvb3NlIHRvIHVzZSB0aGlzIHNpdGUgZm9yIGdhbWJsaW5nIHB1cnBvc2VzLCB5b3UgYXNzdW1lIGFsbCByaXNrcy4gRG9uJ3QgYmUgYSBkdW1teSBhbmQgc2VuZCBtb25leSB0byBwZW9wbGUgeW91IGRvbid0IGtub3cgYW5kIHRydXN0LiBVc2UgeW91ciBjYWJlemEuPC9wPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJjbG9zZSgpXFxcIj5DbG9zZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3B1YmxpYy9zaWduaW4vc2lnbmluLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wdWJsaWMvc2lnbmluL3NpZ25pbi50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwic2lnbmluLWJveCBwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgICA8Zm9ybSBuYW1lPVxcXCJzaWduaW5Gb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBuZy1zdWJtaXQ9XFxcInNpZ25pbih7IGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbC50b0xvd2VyQ2FzZSgpLCBwYXNzd29yZDogY3JlZGVudGlhbHMucGFzc3dvcmQgfSlcXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWVudmVsb3BlIGZhLWZ3XFxcIj48L2k+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW1haWxcXFwiIG5nLW1vZGVsPVxcXCJjcmVkZW50aWFscy5lbWFpbFxcXCIgcmMtdmVyaWZ5LXNldCBhdXRvZm9jdXMgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWFkZG9uXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEta2V5IGZhLWZ3XFxcIj48L2k+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIiBwbGFjZWhvbGRlcj1cXFwiUGFzc3dvcmRcXFwiIG5nLW1vZGVsPVxcXCJjcmVkZW50aWFscy5wYXNzd29yZFxcXCIgcmMtdmVyaWZ5LXNldCByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDxkaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8YSBjbGFzcz1cXFwiZm9yZ290LXBhc3N3b3JkIGJ0biBidG4tbGluayBwdWxsLWxlZnRcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCIgbmctY2xpY2s9XFxcInJlc2V0UGFzc3dvcmQoKVxcXCI+Rm9yZ290IFBhc3N3b3JkPzwvYT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwic2lnbi1pbi1idG4gYnRuIGJ0bi1wcmltYXJ5IHB1bGwtcmlnaHRcXFwiIG5nLWRpc2FibGVkPVxcXCJzaWduaW5Gb3JtLiRpbnZhbGlkXFxcIj5TaWduIGluPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBzdHlsZT1cXFwiY2xlYXI6IGJvdGg7XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8aHI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwicmVnaXN0ZXJcXFwiPjxhIG5nLWNsaWNrPVxcXCJyZWdpc3RlcigpXFxcIj5Eb24ndCBoYXZlIGFuIGFjY291bnQ/IDxzdHJvbmc+UmVnaXN0ZXI8L3N0cm9uZz48L2E+PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZm9ybT5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcbiIsIid1c2Ugc3RyaWN0JztcbnJlcXVpcmUoJ2FwcC10ZW1wbGF0ZXMnKTtcblxuXG52YXIgQXBwID0gZnVuY3Rpb24oJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgLy8gdW5tYXRjaGVkIHVybHMgc2hvdWxkIGJlIGRpcmVjdGVkIGJhY2sgdG8gdGhlIHN0YXJ0XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xufTtcblxuQXBwLiRpbmplY3QgPSBbJyR1cmxSb3V0ZXJQcm92aWRlciddO1xuXG52YXIgbG9naEFwcCA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwJywgW1xuICAgICduZ0Nvb2tpZXMnLFxuICAgICduZ1Jlc291cmNlJyxcbiAgICAnbmdTYW5pdGl6ZScsXG4gICAgJ25nUm91dGUnLFxuICAgICdjb21tYW5ndWxhcicsXG4gICAgJ3VpLnJvdXRlcicsXG4gICAgJ3VpLmJvb3RzdHJhcCcsXG4gICAgJ3VpLmJvb3RzdHJhcC5kYXRldGltZXBpY2tlcicsXG4gICAgJ2FwcC50ZW1wbGF0ZXMnLFxuICAgICd1aS5yb3V0ZXIuc3RhdGVIZWxwZXInLFxuICAgICdhbmd1bGFyLWxvYWRpbmctYmFyJyxcblxuICAgIC8vIHB1YmxpYyBtb2R1bGVzXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3B1YmxpYy9ob21lJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHVibGljL2ZhcScpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3B1YmxpYy9hYnVzZScpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3B1YmxpYy9zaWduaW4nKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXInKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXIvdGVybXMnKS5uYW1lLFxuXG4gICAgLy8gcHJpdmF0ZSBtb2R1bGVzXG4gICAgLy8gdXNlclxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL3VzZXInKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL3VzZXIvcmVzZXQnKS5uYW1lLFxuXG4gICAgLy8gbGVhZ3VlXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbmV3JykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvdmlldycpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2VkaXQnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9jb250YWN0JykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbWVzc2FnZScpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2pvaW4nKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9pbnZpdGUnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9pbnZpdGUvcmVxdWVzdCcpLm5hbWUsXG5cbiAgICAvLyBsZWFndWVzXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlcycpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4vcHVibGljJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4vcHJpdmF0ZScpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9tYW5hZ2UnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvbXknKS5uYW1lLFxuXG4gICAgLy8gdGVhbVxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL3RlYW0nKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL3RlYW0vdmlldycpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvdGVhbS92aWV3L3BpY2tzJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS90ZWFtL2VkaXQnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL3RlYW0vbWVzc2FnZScpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvdGVhbS9waWNrJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS90ZWFtL3BpY2svb25lJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS90ZWFtL3BpY2svbWFueScpLm5hbWUsXG5cbiAgICAvLyB0ZWFtc1xuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL3RlYW1zJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS90ZWFtcy9hbGl2ZScpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvdGVhbXMvZGVhZCcpLm5hbWUsXG5cbiAgICAvLyBwbGF5XG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvcGxheScpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvcGxheS9sZWFndWVzJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9wbGF5L3RlYW1zJykubmFtZSxcblxuICAgIC8vIGFkbWluXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvYWRtaW4nKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2FkbWluL2dhbWUvZWRpdCcpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vZ2FtZS9uZXcnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2FkbWluL3NlYXNvbnMnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2FkbWluL3NlYXNvbnMvc2Vhc29uJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9zZWFzb25zL3NlYXNvbi9uZXcnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2FkbWluL3dlZWsnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2FkbWluL3dlZWsvZWRpdCcpLm5hbWUsXG5cbiAgICAvLyBoZWxwZXIgbW9kdWxlc1xuICAgIHJlcXVpcmUoJy4vY29tbW9uL21vZHVsZXMvaGVhZGVyJykubmFtZSxcbiAgICByZXF1aXJlKCcuL2NvbW1vbi9tb2R1bGVzL21lc3NhZ2UnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vY29tbW9uL21vZHVsZXMvZm9vdGVyJykubmFtZSxcbiAgICByZXF1aXJlKCcuL2NvbW1vbi9tb2R1bGVzL2NvbmZpcm0nKS5uYW1lLFxuXG4gICAgcmVxdWlyZSgnLi9jb21tb24vbW9kZWxzJykubmFtZSxcbiAgICByZXF1aXJlKCcuL2NvbW1vbi9hcGknKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vY29tbW9uL2NvbW1hbmQnKS5uYW1lLFxuXG4gICAgLy8gc2VydmljZXNcbiAgICByZXF1aXJlKCcuL2NvbW1vbi9zZXJ2aWNlL2FwcGxpY2F0aW9uJykubmFtZSxcbiAgICByZXF1aXJlKCcuL2NvbW1vbi9zZXJ2aWNlL3V0aWxzJykubmFtZSxcblxuICAgIC8vZGlyZWN0aXZlc1xuICAgIHJlcXVpcmUoJy4vY29tbW9uL2RpcmVjdGl2ZXMvZm9jdXMnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vY29tbW9uL2RpcmVjdGl2ZXMvZm9ybWF0dGVkRGF0ZScpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9jb21tb24vZGlyZWN0aXZlcy9tYXRjaCcpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9jb21tb24vZGlyZWN0aXZlcy9yY1N1Ym1pdCcpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9jb21tb24vZGlyZWN0aXZlcy9yY1ZlcmlmeVNldCcpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9jb21tb24vZGlyZWN0aXZlcy9yZXF1aXJlZFBhdHRlcm4nKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vY29tbW9uL2RpcmVjdGl2ZXMvc2VsZWN0T25DbGljaycpLm5hbWUsXG5cbiAgICAvL21vZGFsc1xuXG4gICAgLy9maWx0ZXJzXG4gICAgcmVxdWlyZSgnLi9jb21tb24vZmlsdGVycycpLm5hbWVcblxuICAgIF0sIEFwcClcblxuICAgIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyLCAkbG9nUHJvdmlkZXIsICR1aVZpZXdTY3JvbGxQcm92aWRlciwgJGFuY2hvclNjcm9sbFByb3ZpZGVyKSB7XG4gICAgICAgIC8vIHVzZSB0aGUgSFRNTDUgSGlzdG9yeSBBUElcbiAgICAgICAgJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKGZhbHNlKTtcblxuICAgICAgICAvLyBkaXNhYmxlcyBhdXRvLXNjcm9sbFxuICAgICAgICAkdWlWaWV3U2Nyb2xsUHJvdmlkZXIudXNlQW5jaG9yU2Nyb2xsKCk7XG4gICAgICAgICRhbmNob3JTY3JvbGxQcm92aWRlci5kaXNhYmxlQXV0b1Njcm9sbGluZygpO1xuXG4gICAgICAgIC8vIHR1cm5zIG9uL29mZiBkZWJ1ZyBjb25zb2xlIGxvZyBzdGF0ZW1lbnRzXG4gICAgICAgICRsb2dQcm92aWRlci5kZWJ1Z0VuYWJsZWQodHJ1ZSk7XG5cbiAgICAgICAgLy8gZGVmaW5lcyByb290IHN0YXRlc1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdwdWJsaWMnLCB7XG4gICAgICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgdXJsOiAnLycsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vdGVtcGxhdGVzL21hc3Rlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgICAgICAgICAgICBzZWFzb25zOiBmdW5jdGlvbihzZWFzb25TZXJ2aWNlLCBzZWFzb25Nb2RlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzZWFzb25Nb2RlbC5sb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2Vhc29uU2VydmljZS5nZXRTZWFzb25zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdwcml2YXRlJywge1xuICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHVybDogJy8nLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL3RlbXBsYXRlcy9tYXN0ZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcjogZnVuY3Rpb24odXNlclNlcnZpY2UsIHVzZXJNb2RlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXJNb2RlbC51c2VyLmxvYWRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1c2VyTW9kZWwudXNlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZXJTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNlYXNvbnM6IGZ1bmN0aW9uKHNlYXNvblNlcnZpY2UsIHNlYXNvbk1vZGVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNlYXNvbk1vZGVsLmxvYWRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWFzb25TZXJ2aWNlLmdldFNlYXNvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgfSlcblxuICAgIC5ydW4oZnVuY3Rpb24oJHJvb3RTY29wZSwgJHVybFJvdXRlciwgJGxvZywgYXBwbGljYXRpb25TZXJ2aWNlKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJBcHBsaWNhdGlvbiBzdGFydGluZyB1cC4uLlwiKTtcbiAgICAgICAgYXBwbGljYXRpb25TZXJ2aWNlLnN0YXJ0dXAoKTtcbiAgICB9KVxuO1xuXG5sb2doQXBwLmZhY3RvcnkoJ2F1dGhJbnRlcmNlcHRvcicsIGZ1bmN0aW9uICgkcSwgJHdpbmRvdywgJGxvY2F0aW9uLCAkdGltZW91dCwgdXNlck1vZGVsLCBtZXNzYWdlTW9kZWwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZXF1ZXN0OiBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgICAgICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuICAgICAgICAgICAgaWYgKCR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudG9rZW4pIHtcbiAgICAgICAgICAgICAgICBjb25maWcuaGVhZGVycy5BdXRob3JpemF0aW9uID0gJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS50b2tlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb25maWc7XG4gICAgICAgIH0sXG4gICAgICAgIHJlc3BvbnNlRXJyb3I6IGZ1bmN0aW9uIChyZWplY3Rpb24pIHtcbiAgICAgICAgICB2YXIgbWVzc2FnZTtcbiAgICAgICAgICBpZiAocmVqZWN0aW9uLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9ICRsb2NhdGlvbi51cmwoKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gcmVqZWN0aW9uLmRhdGEubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICB1c2VyTW9kZWwucmVzZXRVc2VyKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkbG9jYXRpb24ucGF0aCgpID09ICcvc2lnbmluJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UobWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UobWVzc2FnZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbG9jYXRpb24udXJsKCcvc2lnbmluJykuc2VhcmNoKHsgcmVkaXJlY3Q6IGVuY29kZVVSSUNvbXBvbmVudCh1cmwpIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlamVjdGlvbi5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgICAgICBtZXNzYWdlID0geyB0eXBlOiAnZGFuZ2VyJywgY29udGVudDogJ0hvdXN0b24sIHdlIGhhdmUgYSBwcm9ibGVtLiBQYWdlIG5vdCBmb3VuZC4nIH07XG4gICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKG1lc3NhZ2UsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgJGxvY2F0aW9uLnVybCgnLycpO1xuICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVqZWN0aW9uLnN0YXR1cy50b1N0cmluZygpLm1hdGNoKC9eNVxcZHsyfSQvKSkge1xuICAgICAgICAgICAgLy8gbWF0Y2hlcyA1eHhcbiAgICAgICAgICAgIG1lc3NhZ2UgPSB7IHR5cGU6ICdkYW5nZXInLCBjb250ZW50OiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyB9O1xuICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShtZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gJHEucmVqZWN0KHJlamVjdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xufSk7XG5cbmxvZ2hBcHAuY29uZmlnKGZ1bmN0aW9uICgkaHR0cFByb3ZpZGVyKSB7XG4gICAgJGh0dHBQcm92aWRlci5pbnRlcmNlcHRvcnMucHVzaCgnYXV0aEludGVyY2VwdG9yJyk7XG59KTtcblxuXG5cblxuXG5cblxuXG5cbiIsIi8qKlxuICogRGVmaW5lIHRoZSBhcHBsaWNhdGlvbiBtb2RlbHNcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5tb2RlbHMnLCBbXSlcbiAgICAvL21vZGVsc1xuICAgIC5zZXJ2aWNlKCd1c2VyTW9kZWwnLCByZXF1aXJlKCcuL1VzZXJNb2RlbCcpKVxuICAgIC5zZXJ2aWNlKCdtZXNzYWdlTW9kZWwnLCByZXF1aXJlKCcuL01lc3NhZ2VNb2RlbCcpKVxuICAgIC5zZXJ2aWNlKCdzZWFzb25Nb2RlbCcsIHJlcXVpcmUoJy4vU2Vhc29uTW9kZWwnKSlcbjsiLCIvKipcbiAqIERlZmluZSB0aGUgcmVtb3RlIHNlcnZpY2VzXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuYXBpJywgW10pXG4gICAgICAuY29uc3RhbnQoJ2FwaUNvbmZpZycsIHJlcXVpcmUoJy4vQXBpQ29uZmlnJykpXG4gICAgICAuc2VydmljZSgnZ2FtZVNlcnZpY2UnLCByZXF1aXJlKCcuL0dhbWVTZXJ2aWNlJykpXG4gICAgICAuc2VydmljZSgnbGVhZ3VlU2VydmljZScsIHJlcXVpcmUoJy4vTGVhZ3VlU2VydmljZScpKVxuICAgICAgLnNlcnZpY2UoJ3BpY2tTZXJ2aWNlJywgcmVxdWlyZSgnLi9QaWNrU2VydmljZScpKVxuICAgICAgLnNlcnZpY2UoJ3NlYXNvblNlcnZpY2UnLCByZXF1aXJlKCcuL1NlYXNvblNlcnZpY2UnKSlcbiAgICAgIC5zZXJ2aWNlKCdzcXVhZFNlcnZpY2UnLCByZXF1aXJlKCcuL1NxdWFkU2VydmljZScpKVxuICAgICAgLnNlcnZpY2UoJ3RlYW1TZXJ2aWNlJywgcmVxdWlyZSgnLi9UZWFtU2VydmljZScpKVxuICAgICAgLnNlcnZpY2UoJ3VzZXJTZXJ2aWNlJywgcmVxdWlyZSgnLi9Vc2VyU2VydmljZScpKVxuICAgICAgLnNlcnZpY2UoJ3dlZWtTZXJ2aWNlJywgcmVxdWlyZSgnLi9XZWVrU2VydmljZScpKVxuO1xuIiwiLy8gc2Vzc2lvbiBjb21tYW5kc1xucmVxdWlyZSgnLi9zZXNzaW9uL1NpZ25pbkNvbW1hbmQnKTtcbnJlcXVpcmUoJy4vc2Vzc2lvbi9TaWdub3V0Q29tbWFuZCcpO1xuXG4vLyB1c2VyIGNvbW1hbmRzXG5yZXF1aXJlKCcuL3VzZXIvR2V0Q3VycmVudFVzZXJDb21tYW5kJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuY29tbWFuZENvbmZpZycsIFtdKVxuICAgIC5jb25maWcoZnVuY3Rpb24oJGNvbW1hbmd1bGFyUHJvdmlkZXIpIHtcblxuICAgICAgICAvLyBzZXNzaW9uIGV2ZW50c1xuICAgICAgICAkY29tbWFuZ3VsYXJQcm92aWRlci5tYXBUbygnU2lnbmluRXZlbnQnKS5hc1NlcXVlbmNlKClcbiAgICAgICAgICAgIC5hZGQoJ1NpZ25pbkNvbW1hbmQnKTtcbiAgICAgICAgJGNvbW1hbmd1bGFyUHJvdmlkZXIubWFwVG8oJ1NpZ25vdXRFdmVudCcpLmFzU2VxdWVuY2UoKVxuICAgICAgICAgICAgLmFkZCgnU2lnbm91dENvbW1hbmQnKTtcblxuICAgICAgICAvLyB1c2VyIGV2ZW50c1xuICAgICAgICAkY29tbWFuZ3VsYXJQcm92aWRlci5tYXBUbygnR2V0Q3VycmVudFVzZXJFdmVudCcpLmFzU2VxdWVuY2UoKVxuICAgICAgICAgICAgLmFkZCgnR2V0Q3VycmVudFVzZXJDb21tYW5kJyk7XG5cbiAgICB9XG4pO1xuXG4iLCIvKipcbiAqIERlZmluZSB0aGUgYXBwbGljYXRpb24gZmlsdGVyc1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmZpbHRlcnMnLCBbXSlcbiAgICAvL2ZpbHRlcnNcbiAgICAuZmlsdGVyKCdvZmZzZXRGaWx0ZXInLCByZXF1aXJlKCcuL09mZnNldEZpbHRlcicpKVxuICAgIC5maWx0ZXIoJ2FjdGl2ZVRlYW1GaWx0ZXInLCByZXF1aXJlKCcuL0FjdGl2ZVRlYW1GaWx0ZXInKSlcbiAgICAuZmlsdGVyKCdhbGl2ZVRlYW1GaWx0ZXInLCByZXF1aXJlKCcuL0FsaXZlVGVhbUZpbHRlcicpKVxuICAgIC5maWx0ZXIoJ21hbmFnZWRMZWFndWVGaWx0ZXInLCByZXF1aXJlKCcuL01hbmFnZWRMZWFndWVGaWx0ZXInKSlcbiAgICAuZmlsdGVyKCd0aW1lRmlsdGVyJywgcmVxdWlyZSgnLi9UaW1lRmlsdGVyJykpXG4gICAgLmZpbHRlcignd2Vla1BpY2tzRmlsdGVyJywgcmVxdWlyZSgnLi9XZWVrUGlja3NGaWx0ZXInKSlcbjtcbiIsIlxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5wdWJsaWMuaG9tZScsIFtdKVxuICAgIC5jb250cm9sbGVyKCdIb21lQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vSG9tZUNvbnRyb2xsZXInKSlcbiAgICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgncHVibGljLmhvbWUnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgICAgICAgICB2aWV3czoge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvaGVhZGVyL2hlYWRlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnSGVhZGVyQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9tZXNzYWdlL21lc3NhZ2UudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ01lc3NhZ2VDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHVibGljL2hvbWUvaG9tZS50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnSG9tZUNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9mb290ZXIvZm9vdGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdGb290ZXJDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgICB9KTsiLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmZhcScsIFtdKVxuICAuY29udHJvbGxlcignRmFxQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vRmFxQ29udHJvbGxlcicpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuYWJ1c2UnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0FidXNlQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vQWJ1c2VDb250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5wdWJsaWMuc2lnbmluJywgW10pXG4gIC5jb250cm9sbGVyKCdTaWduaW5Db250cm9sbGVyJywgcmVxdWlyZSgnLi9TaWduaW5Db250cm9sbGVyJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3B1YmxpYy5zaWduaW4nLCB7XG4gICAgICAgIHVybDogJ3NpZ25pbicsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2hlYWRlci9oZWFkZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0hlYWRlckNvbnRyb2xsZXInXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL21lc3NhZ2UvbWVzc2FnZS50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTWVzc2FnZUNvbnRyb2xsZXInXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHVibGljL3NpZ25pbi9zaWduaW4udHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1NpZ25pbkNvbnRyb2xsZXInXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvZm9vdGVyL2Zvb3Rlci50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnRm9vdGVyQ29udHJvbGxlcidcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnJlZ2lzdGVyJywgW10pXG4gIC5jb250cm9sbGVyKCdSZWdpc3RlckNvbnRyb2xsZXInLCByZXF1aXJlKCcuL1JlZ2lzdGVyQ29udHJvbGxlcicpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAudXNlcicsIFtdKVxuICAgIC5jb250cm9sbGVyKCdVc2VyQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vVXNlckNvbnRyb2xsZXInKSlcbiAgICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgncHJpdmF0ZS51c2VyJywge1xuICAgICAgICAgICAgICAgIHVybDogJ3VzZXInLFxuICAgICAgICAgICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9oZWFkZXIvaGVhZGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdIZWFkZXJDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL21lc3NhZ2UvbWVzc2FnZS50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTWVzc2FnZUNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL3VzZXIvdXNlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVXNlckNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9mb290ZXIvZm9vdGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdGb290ZXJDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgICB9KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubGVhZ3VlJywgW10pXG4gICAgLmNvbnRyb2xsZXIoJ0xlYWd1ZUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL0xlYWd1ZUNvbnRyb2xsZXInKSlcbiAgICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgncHJpdmF0ZS5sZWFndWUnLCB7XG4gICAgICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgdXJsOiAnc2Vhc29uL3tzZWFzb25JZH0vbGVhZ3VlJyxcbiAgICAgICAgICAgICAgICB2aWV3czoge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvaGVhZGVyL2hlYWRlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnSGVhZGVyQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9tZXNzYWdlL21lc3NhZ2UudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ01lc3NhZ2VDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbGVhZ3VlLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdMZWFndWVDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvZm9vdGVyL2Zvb3Rlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnRm9vdGVyQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gICAgfSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmxlYWd1ZXMnLCBbXSlcbiAgICAuY29udHJvbGxlcignTGVhZ3Vlc0NvbnRyb2xsZXInLCByZXF1aXJlKCcuL0xlYWd1ZXNDb250cm9sbGVyJykpXG4gICAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ3ByaXZhdGUubGVhZ3VlcycsIHtcbiAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1cmw6ICdzZWFzb24ve3NlYXNvbklkfS9sZWFndWVzJyxcbiAgICAgICAgICAgICAgICB2aWV3czoge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvaGVhZGVyL2hlYWRlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnSGVhZGVyQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9tZXNzYWdlL21lc3NhZ2UudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ01lc3NhZ2VDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2xlYWd1ZXMudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0xlYWd1ZXNDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvZm9vdGVyL2Zvb3Rlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnRm9vdGVyQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gICAgfSk7XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAudGVhbScsIFtdKVxuICAgIC5jb250cm9sbGVyKCdUZWFtQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vVGVhbUNvbnRyb2xsZXInKSlcbiAgICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgncHJpdmF0ZS50ZWFtJywge1xuICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHVybDogJ3NlYXNvbi97c2Vhc29uSWR9L2xlYWd1ZS97bGVhZ3VlSWR9L3RlYW0nLFxuICAgICAgICAgICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9oZWFkZXIvaGVhZGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdIZWFkZXJDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL21lc3NhZ2UvbWVzc2FnZS50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTWVzc2FnZUNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL3RlYW0vdGVhbS50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVGVhbUNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9mb290ZXIvZm9vdGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdGb290ZXJDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICAgIH0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC50ZWFtcycsIFtdKVxuICAgIC5jb250cm9sbGVyKCdUZWFtc0NvbnRyb2xsZXInLCByZXF1aXJlKCcuL1RlYW1zQ29udHJvbGxlcicpKVxuICAgIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdwcml2YXRlLnRlYW1zJywge1xuICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHVybDogJ3NlYXNvbi97c2Vhc29uSWR9L3RlYW1zJyxcbiAgICAgICAgICAgICAgICB2aWV3czoge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvaGVhZGVyL2hlYWRlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnSGVhZGVyQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9tZXNzYWdlL21lc3NhZ2UudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ01lc3NhZ2VDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS90ZWFtcy90ZWFtcy50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVGVhbXNDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvZm9vdGVyL2Zvb3Rlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnRm9vdGVyQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICAgIH0pO1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnBsYXknLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ1BsYXlDb250cm9sbGVyJywgcmVxdWlyZSgnLi9QbGF5Q29udHJvbGxlcicpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcml2YXRlLnBsYXknLCB7XG4gICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICB1cmw6ICdzZWFzb24ve3NlYXNvbklkfS9teScsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2hlYWRlci9oZWFkZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0hlYWRlckNvbnRyb2xsZXInXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL21lc3NhZ2UvbWVzc2FnZS50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTWVzc2FnZUNvbnRyb2xsZXInXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9wbGF5L3BsYXkudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1BsYXlDb250cm9sbGVyJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZm9vdGVyOiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2Zvb3Rlci9mb290ZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0Zvb3RlckNvbnRyb2xsZXInXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmFkbWluJywgW10pXG4gIC5jb250cm9sbGVyKCdBZG1pbkNvbnRyb2xsZXInLCByZXF1aXJlKCcuL0FkbWluQ29udHJvbGxlcicpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcml2YXRlLmFkbWluJywge1xuICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgdXJsOiAnYWRtaW4vJyxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvaGVhZGVyL2hlYWRlci50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnSGVhZGVyQ29udHJvbGxlcidcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvbWVzc2FnZS9tZXNzYWdlLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdNZXNzYWdlQ29udHJvbGxlcidcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2FkbWluL2FkbWluLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZG1pbkNvbnRyb2xsZXInXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvZm9vdGVyL2Zvb3Rlci50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnRm9vdGVyQ29udHJvbGxlcidcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmhlYWRlcicsIFtdKVxuICAgIC5jb250cm9sbGVyKCdIZWFkZXJDb250cm9sbGVyJywgcmVxdWlyZSgnLi9IZWFkZXJDb250cm9sbGVyJykpIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5tZXNzYWdlJywgW10pXG4gICAgLmNvbnRyb2xsZXIoJ01lc3NhZ2VDb250cm9sbGVyJywgcmVxdWlyZSgnLi9NZXNzYWdlQ29udHJvbGxlcicpKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmZvb3RlcicsIFtdKVxuICAuY29udHJvbGxlcignRm9vdGVyQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vRm9vdGVyQ29udHJvbGxlcicpKSIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2guY29uZmlybScsIFtdKVxuICAuY29udHJvbGxlcignQ29uZmlybUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL0NvbmZpcm1Db250cm9sbGVyJykpO1xuIiwiLyoqXG4gKiBEZWZpbmUgdGhlIGFwcGxpY2F0aW9uIHNlcnZpY2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naC5hcHBsaWNhdGlvbicsIFtdKVxuICAgIC5zZXJ2aWNlKCdhcHBsaWNhdGlvblNlcnZpY2UnLCByZXF1aXJlKCcuL0FwcGxpY2F0aW9uU2VydmljZScpKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doLnV0aWxzJywgW10pXG4gIC5zZXJ2aWNlKCdkYXRlVXRpbHMnLCByZXF1aXJlKCcuL0RhdGVVdGlscycpKTsiLCIvL2FwcGxpY2F0aW9uIGRpcmVjdGl2ZXNcbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuZGlyZWN0aXZlcy5mb2N1cycsW10pXG4gICAgLmRpcmVjdGl2ZSgnbG9naEZvY3VzJywgcmVxdWlyZSgnLi9Gb2N1c0RpcmVjdGl2ZScpKVxuO1xuIiwiLy9hcHBsaWNhdGlvbiBkaXJlY3RpdmVzXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doLmRpcmVjdGl2ZXMuZm9ybWF0dGVkRGF0ZScsW10pXG4gIC5kaXJlY3RpdmUoJ2Zvcm1hdHRlZERhdGUnLCByZXF1aXJlKCcuL0Zvcm1hdHRlZERhdGVEaXJlY3RpdmUnKSlcbjtcbiIsIi8vYXBwbGljYXRpb24gZGlyZWN0aXZlc1xubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5kaXJlY3RpdmVzLm1hdGNoJyxbXSlcbiAgICAuZGlyZWN0aXZlKCdtYXRjaCcsIHJlcXVpcmUoJy4vTWF0Y2hEaXJlY3RpdmUnKSlcbjtcbiIsIi8vYXBwbGljYXRpb24gZGlyZWN0aXZlc1xubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naC5kaXJlY3RpdmVzLnJjU3VibWl0JyxbXSlcbiAgLmRpcmVjdGl2ZSgncmNTdWJtaXQnLCByZXF1aXJlKCcuL1JDU3VibWl0RGlyZWN0aXZlJykpO1xuIiwiLy9hcHBsaWNhdGlvbiBkaXJlY3RpdmVzXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doLmRpcmVjdGl2ZXMucmNWZXJpZnlTZXQnLFtdKVxuICAuZGlyZWN0aXZlKCdyY1ZlcmlmeVNldCcsIHJlcXVpcmUoJy4vUkNWZXJpZnlTZXREaXJlY3RpdmUnKSk7XG4iLCIvL2FwcGxpY2F0aW9uIGRpcmVjdGl2ZXNcbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuZGlyZWN0aXZlcy5yZXF1aXJlZFBhdHRlcm4nLFtdKVxuICAgIC5kaXJlY3RpdmUoJ3JwYXR0ZXJuJywgcmVxdWlyZSgnLi9SZXF1aXJlZFBhdHRlcm5EaXJlY3RpdmUnKSlcbjtcbiIsIi8vYXBwbGljYXRpb24gZGlyZWN0aXZlc1xubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5kaXJlY3RpdmVzLnNlbGVjdE9uQ2xpY2snLFtdKVxuICAuZGlyZWN0aXZlKCdzZWxlY3RPbkNsaWNrJywgcmVxdWlyZSgnLi9TZWxlY3RPbkNsaWNrRGlyZWN0aXZlJykpXG47XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnJlZ2lzdGVyLnRlcm1zJywgW10pXG4gIC5jb250cm9sbGVyKCdSZWdpc3RlclRlcm1zQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vUmVnaXN0ZXJUZXJtc0NvbnRyb2xsZXInKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnVzZXIucmVzZXQnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ1VzZXJSZXNldENvbnRyb2xsZXInLCByZXF1aXJlKCcuL1VzZXJSZXNldENvbnRyb2xsZXInKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmxlYWd1ZS5uZXcnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ05ld0xlYWd1ZUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL05ld0xlYWd1ZUNvbnRyb2xsZXInKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmxlYWd1ZS52aWV3JywgW10pXG4gIC5jb250cm9sbGVyKCdWaWV3TGVhZ3VlQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vVmlld0xlYWd1ZUNvbnRyb2xsZXInKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHJpdmF0ZS5sZWFndWUudmlldycsIHtcbiAgICAgICAgdXJsOiAnL3tsZWFndWVJZH0/d2VlaycsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgbGVhZ3VlQ29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL3ZpZXcvbGVhZ3VlLnZpZXcudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1ZpZXdMZWFndWVDb250cm9sbGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIGxlYWd1ZTogZnVuY3Rpb24obGVhZ3VlU2VydmljZSwgJHN0YXRlUGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gbGVhZ3VlU2VydmljZS5nZXRMZWFndWUoJHN0YXRlUGFyYW1zLnNlYXNvbklkLCAkc3RhdGVQYXJhbXMubGVhZ3VlSWQpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbGVhZ3VlV2Vla3M6IGZ1bmN0aW9uKGxlYWd1ZSwgd2Vla1NlcnZpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiB3ZWVrU2VydmljZS5nZXRMZWFndWVXZWVrcyh7IHNlYXNvbklkOiBsZWFndWUuZGF0YS5zZWFzb25faWQsIGxlYWd1ZUlkOiBsZWFndWUuZGF0YS5pZCB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxlYWd1ZVRlYW1zOiBmdW5jdGlvbihsZWFndWUsIHRlYW1TZXJ2aWNlLCAkc3RhdGVQYXJhbXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZWFtU2VydmljZS5nZXRBbGxMZWFndWVUZWFtcyh7IHNlYXNvbklkOiBsZWFndWUuZGF0YS5zZWFzb25faWQsIGxlYWd1ZUlkOiBsZWFndWUuZGF0YS5pZCwgd2Vla1NsdWc6ICRzdGF0ZVBhcmFtcy53ZWVrIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubGVhZ3VlLmVkaXQnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0VkaXRMZWFndWVDb250cm9sbGVyJywgcmVxdWlyZSgnLi9FZGl0TGVhZ3VlQ29udHJvbGxlcicpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubGVhZ3VlLmNvbnRhY3QnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0xlYWd1ZUNvbnRhY3RDb250cm9sbGVyJywgcmVxdWlyZSgnLi9MZWFndWVDb250YWN0Q29udHJvbGxlcicpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubGVhZ3VlLm1lc3NhZ2UnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0xlYWd1ZU1lc3NhZ2VDb250cm9sbGVyJywgcmVxdWlyZSgnLi9MZWFndWVNZXNzYWdlQ29udHJvbGxlcicpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubGVhZ3VlLmpvaW4nLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0xlYWd1ZUpvaW5Db250cm9sbGVyJywgcmVxdWlyZSgnLi9MZWFndWVKb2luQ29udHJvbGxlcicpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubGVhZ3VlLmludml0ZScsIFtdKVxuICAuY29udHJvbGxlcignTGVhZ3VlSW52aXRlQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vTGVhZ3VlSW52aXRlQ29udHJvbGxlcicpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubGVhZ3Vlcy5qb2luJywgW10pXG4gIC5jb250cm9sbGVyKCdKb2luTGVhZ3Vlc0NvbnRyb2xsZXInLCByZXF1aXJlKCcuL0pvaW5MZWFndWVzQ29udHJvbGxlcicpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcml2YXRlLmxlYWd1ZXMuam9pbicsIHtcbiAgICAgICAgdXJsOiAnLycsXG4gICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIGxlYWd1ZXNDb250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4vbGVhZ3Vlcy5qb2luLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdKb2luTGVhZ3Vlc0NvbnRyb2xsZXInXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIDtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmxlYWd1ZXMubWFuYWdlJywgW10pXG4gIC5jb250cm9sbGVyKCdNYW5hZ2VMZWFndWVzQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vTWFuYWdlTGVhZ3Vlc0NvbnRyb2xsZXInKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHJpdmF0ZS5sZWFndWVzLm1hbmFnZScsIHtcbiAgICAgICAgdXJsOiAnL21hbmFnZWQnLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIGxlYWd1ZXNDb250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL21hbmFnZS9sZWFndWVzLm1hbmFnZS50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTWFuYWdlTGVhZ3Vlc0NvbnRyb2xsZXInXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgbWFuYWdlZExlYWd1ZXM6IGZ1bmN0aW9uKHVzZXIsIGxlYWd1ZVNlcnZpY2UsICRzdGF0ZVBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuIGxlYWd1ZVNlcnZpY2UuZ2V0TWFuYWdlZExlYWd1ZXMoJHN0YXRlUGFyYW1zLnNlYXNvbklkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfSk7XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubGVhZ3Vlcy5teScsIFtdKVxuICAuY29udHJvbGxlcignTXlMZWFndWVzQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vTXlMZWFndWVzQ29udHJvbGxlcicpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcml2YXRlLmxlYWd1ZXMubXknLCB7XG4gICAgICAgIHVybDogJycsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgbGVhZ3Vlc0NvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvbXkvbGVhZ3Vlcy5teS50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTXlMZWFndWVzQ29udHJvbGxlcidcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICBsZWFndWVzOiBmdW5jdGlvbih1c2VyLCBsZWFndWVTZXJ2aWNlLCAkc3RhdGVQYXJhbXMpIHtcbiAgICAgICAgICAgIHJldHVybiBsZWFndWVTZXJ2aWNlLmdldExlYWd1ZXMoJHN0YXRlUGFyYW1zLnNlYXNvbklkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfSk7XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAudGVhbS52aWV3JywgW10pXG4gIC5jb250cm9sbGVyKCdWaWV3VGVhbUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL1ZpZXdUZWFtQ29udHJvbGxlcicpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcml2YXRlLnRlYW0udmlldycsIHtcbiAgICAgICAgdXJsOiAnL3t0ZWFtSWR9JyxcbiAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgdGVhbUNvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL3RlYW0vdmlldy90ZWFtLnZpZXcudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1ZpZXdUZWFtQ29udHJvbGxlcidcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICB0ZWFtOiBmdW5jdGlvbih1c2VyLCB0ZWFtU2VydmljZSwgJHN0YXRlUGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gdGVhbVNlcnZpY2UuZ2V0VGVhbSgkc3RhdGVQYXJhbXMubGVhZ3VlSWQsICRzdGF0ZVBhcmFtcy50ZWFtSWQpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbGVhZ3VlVGVhbXM6IGZ1bmN0aW9uKHRlYW0sIHRlYW1TZXJ2aWNlLCAkc3RhdGVQYXJhbXMsIHVzZXJNb2RlbCkge1xuICAgICAgICAgICAgaWYgKHRlYW0uZGF0YS5jb2FjaF9pZHMuaW5kZXhPZih1c2VyTW9kZWwudXNlci5pZCkgPiAtMSkge1xuICAgICAgICAgICAgICByZXR1cm4gdGVhbVNlcnZpY2UuZ2V0TGVhZ3VlVGVhbXMoJHN0YXRlUGFyYW1zLmxlYWd1ZUlkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiB7IGRhdGE6IFtdIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC50ZWFtLmVkaXQnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0VkaXRUZWFtQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vRWRpdFRlYW1Db250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC50ZWFtLm1lc3NhZ2UnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ1RlYW1NZXNzYWdlQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vVGVhbU1lc3NhZ2VDb250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC50ZWFtLnBpY2snLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ1RlYW1QaWNrQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vVGVhbVBpY2tDb250cm9sbGVyJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3ByaXZhdGUudGVhbS5waWNrJywge1xuICAgICAgICB1cmw6ICcve3RlYW1JZH0nLFxuICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICB0ZWFtQ29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvdGVhbS9waWNrL3RlYW0ucGljay50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnVGVhbVBpY2tDb250cm9sbGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIHRlYW06IGZ1bmN0aW9uKCRzdGF0ZVBhcmFtcywgdGVhbVNlcnZpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZWFtU2VydmljZS5nZXRUZWFtKCRzdGF0ZVBhcmFtcy5sZWFndWVJZCwgJHN0YXRlUGFyYW1zLnRlYW1JZCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB3ZWVrOiBmdW5jdGlvbigkc3RhdGVQYXJhbXMsIHdlZWtTZXJ2aWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gd2Vla1NlcnZpY2UuZ2V0Q3VycmVudFdlZWsoJHN0YXRlUGFyYW1zLnNlYXNvbklkLCAkc3RhdGVQYXJhbXMubGVhZ3VlSWQpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2FtZXM6IGZ1bmN0aW9uKCRzdGF0ZVBhcmFtcywgZ2FtZVNlcnZpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBnYW1lU2VydmljZS5nZXRDdXJyZW50R2FtZXMoJHN0YXRlUGFyYW1zLmxlYWd1ZUlkKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBpY2tzOiBmdW5jdGlvbigkc3RhdGVQYXJhbXMsIHBpY2tTZXJ2aWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gcGlja1NlcnZpY2UuZ2V0U2VsZWN0ZWRQaWNrcyh7IHRlYW1JZDogJHN0YXRlUGFyYW1zLnRlYW1JZCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnRlYW1zLmFsaXZlJywgW10pXG4gIC5jb250cm9sbGVyKCdBbGl2ZVRlYW1zQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vQWxpdmVUZWFtc0NvbnRyb2xsZXInKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHJpdmF0ZS50ZWFtcy5hbGl2ZScsIHtcbiAgICAgICAgdXJsOiAnL2FsaXZlJyxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICB0ZWFtc0NvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL3RlYW1zL2FsaXZlL3RlYW1zLmFsaXZlLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBbGl2ZVRlYW1zQ29udHJvbGxlcidcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICBhbGl2ZVRlYW1zOiBmdW5jdGlvbih1c2VyLCB0ZWFtU2VydmljZSwgJHN0YXRlUGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gdGVhbVNlcnZpY2UuZ2V0QWxpdmVUZWFtcyh7IHNlYXNvbklkOiAkc3RhdGVQYXJhbXMuc2Vhc29uSWQgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIDtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnRlYW1zLmRlYWQnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0RlYWRUZWFtc0NvbnRyb2xsZXInLCByZXF1aXJlKCcuL0RlYWRUZWFtc0NvbnRyb2xsZXInKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHJpdmF0ZS50ZWFtcy5kZWFkJywge1xuICAgICAgICB1cmw6ICcvZGVhZCcsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgdGVhbXNDb250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS90ZWFtcy9kZWFkL3RlYW1zLmRlYWQudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0RlYWRUZWFtc0NvbnRyb2xsZXInXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgZGVhZFRlYW1zOiBmdW5jdGlvbih1c2VyLCB0ZWFtU2VydmljZSwgJHN0YXRlUGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gdGVhbVNlcnZpY2UuZ2V0RGVhZFRlYW1zKHsgc2Vhc29uSWQ6ICRzdGF0ZVBhcmFtcy5zZWFzb25JZCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfSk7XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAucGxheS5sZWFndWVzJywgW10pXG4gIC5jb250cm9sbGVyKCdQbGF5TGVhZ3Vlc0NvbnRyb2xsZXInLCByZXF1aXJlKCcuL1BsYXlMZWFndWVzQ29udHJvbGxlcicpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcml2YXRlLnBsYXkubGVhZ3VlcycsIHtcbiAgICAgICAgdXJsOiAnL2xlYWd1ZXMnLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIHBsYXlDb250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9wbGF5L2xlYWd1ZXMvcGxheS5sZWFndWVzLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdQbGF5TGVhZ3Vlc0NvbnRyb2xsZXInXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgbGVhZ3VlczogZnVuY3Rpb24odXNlciwgJHN0YXRlUGFyYW1zLCBsZWFndWVTZXJ2aWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gbGVhZ3VlU2VydmljZS5nZXRMZWFndWVzKCRzdGF0ZVBhcmFtcy5zZWFzb25JZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIDtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnBsYXkudGVhbXMnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ1BsYXlUZWFtc0NvbnRyb2xsZXInLCByZXF1aXJlKCcuL1BsYXlUZWFtc0NvbnRyb2xsZXInKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHJpdmF0ZS5wbGF5LnRlYW1zJywge1xuICAgICAgICB1cmw6ICcvdGVhbXMnLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIHBsYXlDb250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9wbGF5L3RlYW1zL3BsYXkudGVhbXMudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1BsYXlUZWFtc0NvbnRyb2xsZXInXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgdGVhbXM6IGZ1bmN0aW9uKHVzZXIsICRzdGF0ZVBhcmFtcywgdGVhbVNlcnZpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZWFtU2VydmljZS5nZXRBbGxUZWFtcyh7IHNlYXNvbklkOiAkc3RhdGVQYXJhbXMuc2Vhc29uSWQgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH0pXG4gICAgO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfSk7XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuYWRtaW4uc2Vhc29ucycsIFtdKVxuICAuY29udHJvbGxlcignQWRtaW5TZWFzb25zQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vQWRtaW5TZWFzb25zQ29udHJvbGxlcicpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcml2YXRlLmFkbWluLnNlYXNvbnMnLCB7XG4gICAgICAgIHVybDogJ3NlYXNvbnMnLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIGFkbWluQ29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9hZG1pbi5zZWFzb25zLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZG1pblNlYXNvbnNDb250cm9sbGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuYWRtaW4ud2VlaycsIFtdKVxuICAuY29udHJvbGxlcignQWRtaW5XZWVrQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vQWRtaW5XZWVrQ29udHJvbGxlcicpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcml2YXRlLmFkbWluLndlZWsnLCB7XG4gICAgICAgIHVybDogJ3NlYXNvbnMve3NlYXNvbklkfS93ZWVrcy97d2Vla0lkfScsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgYWRtaW5Db250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9hZG1pbi93ZWVrL2FkbWluLndlZWsudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkbWluV2Vla0NvbnRyb2xsZXInLFxuICAgICAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgICAgICB3ZWVrOiBmdW5jdGlvbigkc3RhdGVQYXJhbXMsIHdlZWtTZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdlZWtTZXJ2aWNlLmdldFdlZWsoJHN0YXRlUGFyYW1zLnNlYXNvbklkLCAkc3RhdGVQYXJhbXMud2Vla0lkKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZ2FtZXM6IGZ1bmN0aW9uKHdlZWssIGdhbWVTZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdhbWVTZXJ2aWNlLmdldFdlZWtHYW1lcyh3ZWVrLmRhdGEuaWQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5sZWFndWUuaW52aXRlLnJlcXVlc3QnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0xlYWd1ZUludml0ZVJlcXVlc3RDb250cm9sbGVyJywgcmVxdWlyZSgnLi9MZWFndWVJbnZpdGVSZXF1ZXN0Q29udHJvbGxlcicpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubGVhZ3Vlcy5qb2luLnB1YmxpYycsIFtdKVxuICAuY29udHJvbGxlcignUHVibGljTGVhZ3Vlc0NvbnRyb2xsZXInLCByZXF1aXJlKCcuL1B1YmxpY0xlYWd1ZXNDb250cm9sbGVyJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3ByaXZhdGUubGVhZ3Vlcy5qb2luLnB1YmxpYycsIHtcbiAgICAgICAgdXJsOiAncHVibGljJyxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICBqb2luTGVhZ3Vlc0NvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9wdWJsaWMvbGVhZ3Vlcy5qb2luLnB1YmxpYy50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnUHVibGljTGVhZ3Vlc0NvbnRyb2xsZXInXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgcHVibGljTGVhZ3VlczogZnVuY3Rpb24odXNlciwgbGVhZ3VlU2VydmljZSwgJHN0YXRlUGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gbGVhZ3VlU2VydmljZS5nZXRQdWJsaWNMZWFndWVzKCRzdGF0ZVBhcmFtcy5zZWFzb25JZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIDtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmxlYWd1ZXMuam9pbi5wcml2YXRlJywgW10pXG4gIC5jb250cm9sbGVyKCdQcml2YXRlTGVhZ3Vlc0NvbnRyb2xsZXInLCByZXF1aXJlKCcuL1ByaXZhdGVMZWFndWVzQ29udHJvbGxlcicpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcml2YXRlLmxlYWd1ZXMuam9pbi5wcml2YXRlJywge1xuICAgICAgICB1cmw6ICdwcml2YXRlJyxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICBqb2luTGVhZ3Vlc0NvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9wcml2YXRlL2xlYWd1ZXMuam9pbi5wcml2YXRlLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdQcml2YXRlTGVhZ3Vlc0NvbnRyb2xsZXInXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgcHJpdmF0ZUxlYWd1ZXM6IGZ1bmN0aW9uKHVzZXIsIGxlYWd1ZVNlcnZpY2UsICRzdGF0ZVBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuIGxlYWd1ZVNlcnZpY2UuZ2V0UHJpdmF0ZUxlYWd1ZXMoJHN0YXRlUGFyYW1zLnNlYXNvbklkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfSk7XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAudGVhbS52aWV3LnBpY2tzJywgW10pXG4gIC5jb250cm9sbGVyKCdWaWV3VGVhbVBpY2tzQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vVmlld1RlYW1QaWNrc0NvbnRyb2xsZXInKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHJpdmF0ZS50ZWFtLnZpZXcucGlja3MnLCB7XG4gICAgICAgIHVybDogJz93ZWVrJyxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICB0ZWFtUGlja3NDb250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS90ZWFtL3ZpZXcvcGlja3MvdGVhbS52aWV3LnBpY2tzLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdWaWV3VGVhbVBpY2tzQ29udHJvbGxlcidcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICBsZWFndWVXZWVrczogZnVuY3Rpb24odGVhbSwgd2Vla1NlcnZpY2UsICRzdGF0ZVBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuIHdlZWtTZXJ2aWNlLmdldExlYWd1ZVdlZWtzKHsgc2Vhc29uSWQ6ICRzdGF0ZVBhcmFtcy5zZWFzb25JZCwgbGVhZ3VlSWQ6ICRzdGF0ZVBhcmFtcy5sZWFndWVJZCB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBpY2tzOiBmdW5jdGlvbih0ZWFtLCBwaWNrU2VydmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIHBpY2tTZXJ2aWNlLmdldFBpY2tzKHsgdGVhbUlkOiB0ZWFtLmRhdGEuaWQgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZWxvYWRPblNlYXJjaDogZmFsc2VcbiAgICAgIH0pO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnRlYW0ucGljay5vbmUnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ1RlYW1QaWNrT25lQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vVGVhbVBpY2tPbmVDb250cm9sbGVyJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3ByaXZhdGUudGVhbS5waWNrLm9uZScsIHtcbiAgICAgICAgdXJsOiAnL3BpY2snLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIHBpY2tDb250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS90ZWFtL3BpY2svb25lL3RlYW0ucGljay5vbmUudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1RlYW1QaWNrT25lQ29udHJvbGxlcidcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnRlYW0ucGljay5tYW55JywgW10pXG4gIC5jb250cm9sbGVyKCdUZWFtUGlja01hbnlDb250cm9sbGVyJywgcmVxdWlyZSgnLi9UZWFtUGlja01hbnlDb250cm9sbGVyJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3ByaXZhdGUudGVhbS5waWNrLm1hbnknLCB7XG4gICAgICAgIHVybDogJy9waWNrcycsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgcGlja0NvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL3RlYW0vcGljay9tYW55L3RlYW0ucGljay5tYW55LnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdUZWFtUGlja01hbnlDb250cm9sbGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuYWRtaW4uZ2FtZS5lZGl0JywgW10pXG4gIC5jb250cm9sbGVyKCdBZG1pbkdhbWVFZGl0Q29udHJvbGxlcicsIHJlcXVpcmUoJy4vQWRtaW5HYW1lRWRpdENvbnRyb2xsZXInKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmFkbWluLmdhbWUubmV3JywgW10pXG4gIC5jb250cm9sbGVyKCdBZG1pbkdhbWVOZXdDb250cm9sbGVyJywgcmVxdWlyZSgnLi9BZG1pbkdhbWVOZXdDb250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5hZG1pbi5zZWFzb24nLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0FkbWluU2Vhc29uQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vQWRtaW5TZWFzb25Db250cm9sbGVyJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3ByaXZhdGUuYWRtaW4uc2Vhc29uJywge1xuICAgICAgICB1cmw6ICdzZWFzb25zL3tzZWFzb25JZH0nLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIGFkbWluQ29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9zZWFzb24vYWRtaW4uc2Vhc29uLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZG1pblNlYXNvbkNvbnRyb2xsZXInLFxuICAgICAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgICAgICBzZWFzb246IGZ1bmN0aW9uKCRzdGF0ZVBhcmFtcywgc2Vhc29uU2VydmljZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWFzb25TZXJ2aWNlLmdldFNlYXNvbigkc3RhdGVQYXJhbXMuc2Vhc29uSWQpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB3ZWVrczogZnVuY3Rpb24oJHN0YXRlUGFyYW1zLCB3ZWVrU2VydmljZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB3ZWVrU2VydmljZS5nZXRTZWFzb25XZWVrcygkc3RhdGVQYXJhbXMuc2Vhc29uSWQpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBsZWFndWVzOiBmdW5jdGlvbigkc3RhdGVQYXJhbXMsIGxlYWd1ZVNlcnZpY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVhZ3VlU2VydmljZS5nZXRBbGxMZWFndWVzKCRzdGF0ZVBhcmFtcy5zZWFzb25JZCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmFkbWluLndlZWsuZWRpdCcsIFtdKVxuICAuY29udHJvbGxlcignQWRtaW5XZWVrRWRpdENvbnRyb2xsZXInLCByZXF1aXJlKCcuL0FkbWluV2Vla0VkaXRDb250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5hZG1pbi5zZWFzb24ubmV3JywgW10pXG4gIC5jb250cm9sbGVyKCdBZG1pblNlYXNvbk5ld0NvbnRyb2xsZXInLCByZXF1aXJlKCcuL0FkbWluU2Vhc29uTmV3Q29udHJvbGxlcicpKTtcbiIsIlxudmFyIFVzZXJNb2RlbCA9IGZ1bmN0aW9uKCRyb290U2NvcGUsICR3aW5kb3csICRsb2cpIHtcblxuICAgIHZhciB1c2VyID0ge307XG4gICAgdXNlci5sb2FkZWQgPSBmYWxzZTtcbiAgICB1c2VyLmlkID0gJyc7XG4gICAgdXNlci5lbWFpbCA9ICcnO1xuICAgIHVzZXIuZmlyc3RfbmFtZSA9ICcnO1xuICAgIHVzZXIubGFzdF9uYW1lID0gJyc7XG4gICAgdXNlci5hZG1pbiA9IGZhbHNlO1xuICAgIHRoaXMudXNlciA9IHVzZXI7XG5cbiAgICB2YXIgdGVhbU1lc3NhZ2VPcGVuID0ge307XG4gICAgdGhpcy50ZWFtTWVzc2FnZU9wZW4gPSB0ZWFtTWVzc2FnZU9wZW47XG5cbiAgICB2YXIgbGVhZ3VlTWVzc2FnZU9wZW4gPSB7fTtcbiAgICB0aGlzLmxlYWd1ZU1lc3NhZ2VPcGVuID0gbGVhZ3VlTWVzc2FnZU9wZW47XG5cbiAgICB0aGlzLnNldFVzZXIgPSBmdW5jdGlvbih1c2VyRGF0YSkge1xuICAgICAgICB1c2VyLmxvYWRlZCA9IHRydWU7XG4gICAgICAgIHVzZXIgPSBhbmd1bGFyLmV4dGVuZCh1c2VyLCB1c2VyRGF0YSk7XG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgndXNlck1vZGVsOjp1c2VyVXBkYXRlZCcsIHVzZXIpO1xuICAgICAgICAkbG9nLmRlYnVnKFwiVXNlck1vZGVsOiBzZXRVc2VyOiBcIiArIHVzZXIuaWQpO1xuICAgICAgICAkbG9nLmRlYnVnKFwiVXNlck1vZGVsOiBzZXRVc2VyOiBcIiArIHVzZXIuZW1haWwpO1xuICAgIH07XG5cbiAgICB0aGlzLnJlc2V0VXNlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkd2luZG93LnNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XG5cbiAgICAgICAgdXNlciA9IHt9O1xuICAgICAgICB1c2VyLmxvYWRlZCA9IGZhbHNlO1xuICAgICAgICB1c2VyLmlkID0gJyc7XG4gICAgICAgIHVzZXIuZW1haWwgPSAnJztcbiAgICAgICAgdXNlci5maXJzdF9uYW1lID0gJyc7XG4gICAgICAgIHVzZXIubGFzdF9uYW1lID0gJyc7XG4gICAgICAgIHVzZXIuYWRtaW4gPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcImNyZWF0aW5nIHVzZXIgbW9kZWwuLi5cIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cblVzZXJNb2RlbC4kaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyR3aW5kb3cnLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBVc2VyTW9kZWw7IiwiXG52YXIgTWVzc2FnZU1vZGVsID0gZnVuY3Rpb24oJHJvb3RTY29wZSwgJGxvZykge1xuXG4gICAgdmFyIG1vZGVsID0gdGhpcztcbiAgICB2YXIgcXVldWUgPSBbXTtcblxuICAgIHZhciBtZXNzYWdlID0ge307XG4gICAgbWVzc2FnZS5sb2FkZWQgPSBmYWxzZTtcbiAgICBtZXNzYWdlLnR5cGUgPSAnJzsgLy8gY2FuIGJlIHN1Y2Nlc3MsIGluZm8sIHdhcm5pbmcgb3IgZGFuZ2VyXG4gICAgbWVzc2FnZS5jb250ZW50ID0gJyc7XG5cbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuXG4gICAgdGhpcy5zZXRNZXNzYWdlID0gZnVuY3Rpb24obWVzc2FnZURhdGEsIGRlbGF5KSB7XG4gICAgICAgIHZhciBtZXNzYWdlID0ge307XG4gICAgICAgIG1lc3NhZ2UubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgbWVzc2FnZSA9IGFuZ3VsYXIuZXh0ZW5kKG1lc3NhZ2UsIG1lc3NhZ2VEYXRhKTtcbiAgICAgICAgaWYgKGRlbGF5KSB7XG4gICAgICAgICAgICBxdWV1ZVswXSA9IG1lc3NhZ2U7IC8vIHF1ZXVlIGl0IHVwIGZvciBhZnRlciBhIGxvY2F0aW9uIGNoYW5nZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kZWwubWVzc2FnZSA9IG1lc3NhZ2U7IC8vIHNob3cgdGhlIG1lc3NhZ2UgYXNhcFxuICAgICAgICAgICAgcXVldWUgPSBbXTsgLy8gY2xlYXIgdGhlIHF1ZXVlIGFzIG1lc3NhZ2Ugd2lsbCBiZSBzaG93ZWQgaW1tZWRpYXRlbHlcbiAgICAgICAgfVxuICAgICAgICAkbG9nLmRlYnVnKFwiTWVzc2FnZU1vZGVsOiBjb250ZW50OiBcIiArIG1lc3NhZ2UuY29udGVudCk7XG4gICAgfTtcblxuICAgIHRoaXMucmVzZXRNZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1lc3NhZ2UgPSB7fTtcbiAgICAgICAgbWVzc2FnZS5sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgbWVzc2FnZS50eXBlID0gJyc7XG4gICAgICAgIG1lc3NhZ2UuY29udGVudCA9ICcnO1xuXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgfTtcblxuICAgICRyb290U2NvcGUuJG9uKFwiJGxvY2F0aW9uQ2hhbmdlU3RhcnRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIG1vZGVsLnJlc2V0TWVzc2FnZSgpO1xuICAgIH0pO1xuXG4gICAgJHJvb3RTY29wZS4kb24oXCIkbG9jYXRpb25DaGFuZ2VTdWNjZXNzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBtb2RlbC5tZXNzYWdlID0gcXVldWUuc2hpZnQoKSB8fCB7fTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiY3JlYXRpbmcgbWVzc2FnZSBtb2RlbC4uLlwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcblxufTtcblxuTWVzc2FnZU1vZGVsLiRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBNZXNzYWdlTW9kZWw7XG4iLCJ2YXIgU2Vhc29uTW9kZWwgPSBmdW5jdGlvbigkbG9nKSB7XG5cbiAgdmFyIG1vZGVsID0gdGhpcztcblxuICB2YXIgc2Vhc29ucyA9IFtdO1xuICB2YXIgY3VycmVudFNlYXNvbnMgPSBbXTtcbiAgdmFyIHN0YXJ0ZWRTZWFzb25zID0gW107XG4gIHZhciBzZWxlY3RlZFNlYXNvbklkO1xuICB2YXIgbG9hZGVkID0gZmFsc2U7XG5cbiAgdGhpcy5zZWFzb25zID0gc2Vhc29ucztcbiAgdGhpcy5jdXJyZW50U2Vhc29ucyA9IGN1cnJlbnRTZWFzb25zO1xuICB0aGlzLnN0YXJ0ZWRTZWFzb25zID0gc3RhcnRlZFNlYXNvbnM7XG4gIHRoaXMuc2VsZWN0ZWRTZWFzb25JZCA9IHNlbGVjdGVkU2Vhc29uSWQ7XG4gIHRoaXMubG9hZGVkID0gbG9hZGVkO1xuXG4gIHRoaXMuZ2V0Q3VycmVudFNlYXNvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBtb2RlbC5jdXJyZW50U2Vhc29uc1ttb2RlbC5jdXJyZW50U2Vhc29ucy5sZW5ndGggLSAxXTtcbiAgfTtcblxuICB0aGlzLnNldFNlYXNvbnMgPSBmdW5jdGlvbihzZWFzb25zQXJyYXkpIHtcbiAgICBpZiAoIWFuZ3VsYXIuaXNBcnJheShzZWFzb25zQXJyYXkpKSByZXR1cm47XG4gICAgbW9kZWwuc2Vhc29ucyA9IHNlYXNvbnNBcnJheTtcbiAgICBtb2RlbC5jdXJyZW50U2Vhc29ucyA9IF8uZmlsdGVyKHNlYXNvbnNBcnJheSwgZnVuY3Rpb24oc2Vhc29uKSB7XG4gICAgICByZXR1cm4gc2Vhc29uLmN1cnJlbnQ7XG4gICAgfSk7XG4gICAgbW9kZWwuc3RhcnRlZFNlYXNvbnMgPSBfLmZpbHRlcihzZWFzb25zQXJyYXksIGZ1bmN0aW9uKHNlYXNvbikge1xuICAgICAgcmV0dXJuIHNlYXNvbi5zdGFydGVkO1xuICAgIH0pO1xuICAgIG1vZGVsLnNldFNlbGVjdGVkU2Vhc29uSWQobW9kZWwuZ2V0Q3VycmVudFNlYXNvbigpLmlkKTtcbiAgICBtb2RlbC5sb2FkZWQgPSB0cnVlO1xuICB9O1xuXG4gIHRoaXMuc2V0U2VsZWN0ZWRTZWFzb25JZCA9IGZ1bmN0aW9uKHNlYXNvbklkKSB7XG4gICAgbW9kZWwuc2VsZWN0ZWRTZWFzb25JZCA9IHNlYXNvbklkO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJjcmVhdGluZyBzZWFzb24gbW9kZWwuLi5cIik7XG4gIH07XG4gIGluaXQoKTtcblxufTtcblxuU2Vhc29uTW9kZWwuJGluamVjdCA9IFsnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBTZWFzb25Nb2RlbDsiLCIvKlxuICogIEdsb2JhbCBjb25maWcgZm9yIHJlbW90ZSBzZXJ2aWNlc1xuICovXG5cbnZhciBBcGlDb25maWcgPSAge1xuICAgIGJhc2VVUkw6ICcvYXBpLydcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQXBpQ29uZmlnO1xuIiwidmFyIEdhbWVTZXJ2aWNlID0gZnVuY3Rpb24oJGh0dHAsICRsb2csICRzdGF0ZSwgYXBpQ29uZmlnLCBtZXNzYWdlTW9kZWwpIHtcblxuICB0aGlzLmdldEN1cnJlbnRHYW1lcyA9IGZ1bmN0aW9uKGxlYWd1ZUlkKSB7XG4gICAgdmFyIGFwaVVybCA9IGFwaUNvbmZpZy5iYXNlVVJMICsgXCJnYW1lcy9jdXJyZW50P2xlYWd1ZV9pZD1cIiArIGxlYWd1ZUlkO1xuXG4gICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpVXJsKVxuICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiR2FtZVNlcnZpY2U6IGdldEN1cnJlbnRHYW1lcyBzdWNjZXNzXCIpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pXG4gICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiR2FtZVNlcnZpY2U6IGdldEN1cnJlbnRHYW1lcyBmYWlsZWRcIik7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfTtcblxuICB0aGlzLmdldFdlZWtHYW1lcyA9IGZ1bmN0aW9uKHdlZWtJZCkge1xuICAgIHZhciBhcGlVcmwgPSBhcGlDb25maWcuYmFzZVVSTCArIFwid2Vla3MvXCIgKyB3ZWVrSWQgKyBcIi9nYW1lc1wiO1xuXG4gICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpVXJsKVxuICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiR2FtZVNlcnZpY2U6IGdldFdlZWtHYW1lcyBzdWNjZXNzXCIpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pXG4gICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiR2FtZVNlcnZpY2U6IGdldFdlZWtHYW1lcyBmYWlsZWRcIik7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfTtcblxuICB0aGlzLmNyZWF0ZUdhbWUgPSBmdW5jdGlvbihnYW1lUGFyYW1zKSB7XG4gICAgdmFyIHByb21pc2UgPSAkaHR0cC5wb3N0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJhZG1pbi93ZWVrcy9cIiArIGdhbWVQYXJhbXMud2Vla19pZCArIFwiL2dhbWVzXCIsXG4gICAgICB7IGdhbWU6IGdhbWVQYXJhbXMgfSlcbiAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIkdhbWVTZXJ2aWNlOiBjcmVhdGVHYW1lIHN1Y2Nlc3NcIik7XG4gICAgICAgIC8vIHRvZG86IHRoaXMgcmVsaWVzIG9uIGEgbW9ua2V5IHBhdGNoIGF0IHRoZSBtb21lbnQgLSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci11aS91aS1yb3V0ZXIvaXNzdWVzLzU4MlxuICAgICAgICAvLyBidXQgbWF5IGJlIHJlc29sdmVkIHdpdGggZnV0dXJlIHJlbGVhc2VzIG9mIGFuZ3VsYXItdWktcm91dGVyXG4gICAgICAgICRzdGF0ZS5yZWxvYWQoKTsgLy8gcmVsb2FkcyBhbGwgdGhlIHJlc29sdmVzIGZvciB0aGUgdmlldyBsZWFndWUgcGFnZSBhbmQgcmVpbnN0YW50aWF0ZXMgdGhlIGNvbnRyb2xsZXJcbiAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSlcbiAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJHYW1lU2VydmljZTogY3JlYXRlR2FtZSBmYWlsZWRcIik7XG4gICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH07XG5cbiAgdGhpcy51cGRhdGVHYW1lID0gZnVuY3Rpb24oZ2FtZVBhcmFtcykge1xuICAgIHZhciBwcm9taXNlID0gJGh0dHAucHV0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJhZG1pbi93ZWVrcy9cIiArIGdhbWVQYXJhbXMud2Vla19pZCArIFwiL2dhbWVzL1wiICsgZ2FtZVBhcmFtcy5pZCxcbiAgICAgIHsgZ2FtZTogZ2FtZVBhcmFtcyB9KVxuICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiR2FtZVNlcnZpY2U6IHVwZGF0ZUdhbWUgc3VjY2Vzc1wiKTtcbiAgICAgICAgLy8gdG9kbzogdGhpcyByZWxpZXMgb24gYSBtb25rZXkgcGF0Y2ggYXQgdGhlIG1vbWVudCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyLXVpL3VpLXJvdXRlci9pc3N1ZXMvNTgyXG4gICAgICAgIC8vIGJ1dCBtYXkgYmUgcmVzb2x2ZWQgd2l0aCBmdXR1cmUgcmVsZWFzZXMgb2YgYW5ndWxhci11aS1yb3V0ZXJcbiAgICAgICAgJHN0YXRlLnJlbG9hZCgpOyAvLyByZWxvYWRzIGFsbCB0aGUgcmVzb2x2ZXMgZm9yIHRoZSB2aWV3IGxlYWd1ZSBwYWdlIGFuZCByZWluc3RhbnRpYXRlcyB0aGUgY29udHJvbGxlclxuICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KVxuICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIkdhbWVTZXJ2aWNlOiB1cGRhdGVHYW1lIGZhaWxlZFwiKTtcbiAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfTtcblxufTtcblxuR2FtZVNlcnZpY2UuJGluamVjdCA9IFsnJGh0dHAnLCAnJGxvZycsICckc3RhdGUnLCAnYXBpQ29uZmlnJywgJ21lc3NhZ2VNb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBHYW1lU2VydmljZTsiLCJ2YXIgTGVhZ3VlU2VydmljZSA9IGZ1bmN0aW9uKCRodHRwLCAkbG9nLCAkbG9jYXRpb24sICRxLCAkc3RhdGUsIGFwaUNvbmZpZywgbWVzc2FnZU1vZGVsKSB7XG5cbiAgICB0aGlzLmdldExlYWd1ZSA9IGZ1bmN0aW9uKHNlYXNvbklkLCBsZWFndWVJZCkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlDb25maWcuYmFzZVVSTCArIFwic2Vhc29ucy9cIiArIHNlYXNvbklkICsgXCIvbGVhZ3Vlcy9cIiArIGxlYWd1ZUlkKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBnZXRMZWFndWUgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBnZXRMZWFndWUgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0QWxsTGVhZ3VlcyA9IGZ1bmN0aW9uKHNlYXNvbklkKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJhZG1pbi9zZWFzb25zL1wiICsgc2Vhc29uSWQgKyBcIi9sZWFndWVzXCIpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IGdldEFsbExlYWd1ZXMgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBnZXRBbGxMZWFndWVzIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmdldExlYWd1ZXMgPSBmdW5jdGlvbihzZWFzb25JZCkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlDb25maWcuYmFzZVVSTCArIFwic2Vhc29ucy9cIiArIHNlYXNvbklkICsgXCIvbGVhZ3Vlc1wiKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBnZXRMZWFndWVzIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogZ2V0TGVhZ3VlcyBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRNYW5hZ2VkTGVhZ3VlcyA9IGZ1bmN0aW9uKHNlYXNvbklkKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZWFzb25zL1wiICsgc2Vhc29uSWQgKyBcIi9sZWFndWVzL21hbmFnZWRcIilcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogZ2V0TWFuYWdlZExlYWd1ZXMgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBnZXRNYW5hZ2VkTGVhZ3VlcyBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRQdWJsaWNMZWFndWVzID0gZnVuY3Rpb24oc2Vhc29uSWQpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBzZWFzb25JZCArIFwiL2xlYWd1ZXMvcHVibGljXCIpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IGdldFB1YmxpY0xlYWd1ZXMgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBnZXRQdWJsaWNMZWFndWVzIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmdldFByaXZhdGVMZWFndWVzID0gZnVuY3Rpb24oc2Vhc29uSWQpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBzZWFzb25JZCArIFwiL2xlYWd1ZXMvcHJpdmF0ZVwiKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBnZXRQcml2YXRlTGVhZ3VlcyBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IGdldFByaXZhdGVMZWFndWVzIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmNyZWF0ZUxlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZVBhcmFtcykge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnBvc3QoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBsZWFndWVQYXJhbXMuc2Vhc29uX2lkICsgXCIvbGVhZ3Vlc1wiLFxuICAgICAgICAgICAgeyBsZWFndWU6IGxlYWd1ZVBhcmFtcyB9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBjcmVhdGVMZWFndWUgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIHRydWUpO1xuICAgICAgICAgICAgICAgICRsb2NhdGlvbi51cmwoJy9zZWFzb24vJyArIGxlYWd1ZVBhcmFtcy5zZWFzb25faWQgKyAnL2xlYWd1ZS8nICsgZGF0YS5sZWFndWVfaWQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IGNyZWF0ZUxlYWd1ZSBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVMZWFndWUgPSBmdW5jdGlvbihsZWFndWVQYXJhbXMpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5wdXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBsZWFndWVQYXJhbXMuc2Vhc29uX2lkICsgXCIvbGVhZ3Vlcy9cIiArIGxlYWd1ZVBhcmFtcy5pZCxcbiAgICAgICAgICAgIHsgbGVhZ3VlOiBsZWFndWVQYXJhbXMgfSlcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogdXBkYXRlTGVhZ3VlIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAvLyB0b2RvOiB0aGlzIHJlbGllcyBvbiBhIG1vbmtleSBwYXRjaCBhdCB0aGUgbW9tZW50IC0gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXItdWkvdWktcm91dGVyL2lzc3Vlcy81ODJcbiAgICAgICAgICAgIC8vIGJ1dCBtYXkgYmUgcmVzb2x2ZWQgd2l0aCBmdXR1cmUgcmVsZWFzZXMgb2YgYW5ndWxhci11aS1yb3V0ZXJcbiAgICAgICAgICAgICRzdGF0ZS5yZWxvYWQoKTsgLy8gcmVsb2FkcyBhbGwgdGhlIHJlc29sdmVzIGZvciB0aGUgdmlldyBsZWFndWUgcGFnZSBhbmQgcmVpbnN0YW50aWF0ZXMgdGhlIGNvbnRyb2xsZXJcbiAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IHVwZGF0ZUxlYWd1ZSBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5jbG9zZUxlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZVBhcmFtcykge1xuICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBsZWFndWVQYXJhbXMuc2Vhc29uX2lkICsgXCIvbGVhZ3Vlcy9cIiArIGxlYWd1ZVBhcmFtcy5pZCArIFwiL2Nsb3NlXCIpXG4gICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogY2xvc2VMZWFndWUgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAvLyB0b2RvOiB0aGlzIHJlbGllcyBvbiBhIG1vbmtleSBwYXRjaCBhdCB0aGUgbW9tZW50IC0gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXItdWkvdWktcm91dGVyL2lzc3Vlcy81ODJcbiAgICAgICAgICAvLyBidXQgbWF5IGJlIHJlc29sdmVkIHdpdGggZnV0dXJlIHJlbGVhc2VzIG9mIGFuZ3VsYXItdWktcm91dGVyXG4gICAgICAgICAgJHN0YXRlLnJlbG9hZCgpOyAvLyByZWxvYWRzIGFsbCB0aGUgcmVzb2x2ZXMgZm9yIHRoZSB2aWV3IGxlYWd1ZSBwYWdlIGFuZCByZWluc3RhbnRpYXRlcyB0aGUgY29udHJvbGxlclxuICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KVxuICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBjbG9zZUxlYWd1ZSBmYWlsZWRcIik7XG4gICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVMZWFndWVNZXNzYWdlID0gZnVuY3Rpb24obGVhZ3VlUGFyYW1zLCBlbWFpbEFsaXZlLCBlbWFpbEFsbCkge1xuICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAgICRodHRwLnB1dChhcGlDb25maWcuYmFzZVVSTCArIFwic2Vhc29ucy9cIiArIGxlYWd1ZVBhcmFtcy5zZWFzb25faWQgKyBcIi9sZWFndWVzL1wiICsgbGVhZ3VlUGFyYW1zLmlkICsgXCIvbWVzc2FnZVwiLFxuICAgICAgICAgICAgeyBsZWFndWU6IGxlYWd1ZVBhcmFtcywgZW1haWxBbGl2ZTogZW1haWxBbGl2ZSwgZW1haWxBbGw6IGVtYWlsQWxsIH0pXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IHVwZGF0ZUxlYWd1ZU1lc3NhZ2Ugc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGxlYWd1ZVBhcmFtcy5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiB1cGRhdGVMZWFndWVNZXNzYWdlIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLnNlbmRDb21taXNoTWVzc2FnZSA9IGZ1bmN0aW9uKGxlYWd1ZVBhcmFtcywgbWVzc2FnZSkge1xuICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgICAkaHR0cC5wdXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBsZWFndWVQYXJhbXMuc2Vhc29uX2lkICsgXCIvbGVhZ3Vlcy9cIiArIGxlYWd1ZVBhcmFtcy5pZCArIFwiL2NvbnRhY3RcIixcbiAgICAgICAgICAgIHsgY29udGFjdDogbWVzc2FnZSB9KVxuICAgICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogc2VuZENvbW1pc2hNZXNzYWdlIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBzZW5kQ29tbWlzaE1lc3NhZ2UgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0SW52aXRlcyA9IGZ1bmN0aW9uKGxlYWd1ZUlkKSB7XG4gICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlDb25maWcuYmFzZVVSTCArIFwibGVhZ3Vlcy9cIiArIGxlYWd1ZUlkICsgXCIvaW52aXRhdGlvbnNcIilcbiAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBnZXRJbnZpdGVzIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pXG4gICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IGdldEludml0ZXMgZmFpbGVkXCIpO1xuICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuY3JlYXRlSW52aXRlID0gZnVuY3Rpb24oaW52aXRlUGFyYW1zKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAucG9zdChhcGlDb25maWcuYmFzZVVSTCArIFwibGVhZ3Vlcy9cIiArIGludml0ZVBhcmFtcy5sZWFndWVfaWQgKyBcIi9pbnZpdGF0aW9uc1wiLFxuICAgICAgICAgICAgeyBpbnZpdGF0aW9uOiBpbnZpdGVQYXJhbXMgfSlcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogY3JlYXRlSW52aXRlIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogY3JlYXRlSW52aXRlIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLnJlcXVlc3RJbnZpdGUgPSBmdW5jdGlvbihpbnZpdGVQYXJhbXMpIHtcbiAgICAgIHZhciBwcm9taXNlID0gJGh0dHAucG9zdChhcGlDb25maWcuYmFzZVVSTCArIFwibGVhZ3Vlcy9cIiArIGludml0ZVBhcmFtcy5sZWFndWVfaWQgKyBcIi9pbnZpdGF0aW9ucy9uZXdcIixcbiAgICAgICAgICAgIHsgaW52aXRhdGlvbjogaW52aXRlUGFyYW1zIH0pXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IHJlcXVlc3RJbnZpdGUgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiByZXF1ZXN0SW52aXRlIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbn07XG5cbkxlYWd1ZVNlcnZpY2UuJGluamVjdCA9IFsnJGh0dHAnLCAnJGxvZycsICckbG9jYXRpb24nLCAnJHEnLCAnJHN0YXRlJywgJ2FwaUNvbmZpZycsICdtZXNzYWdlTW9kZWwnXTtcbm1vZHVsZS5leHBvcnRzID0gTGVhZ3VlU2VydmljZTsiLCJ2YXIgUGlja1NlcnZpY2UgPSBmdW5jdGlvbigkaHR0cCwgJGxvZywgJHEsIGFwaUNvbmZpZywgbWVzc2FnZU1vZGVsKSB7XG5cbiAgdGhpcy5nZXRQaWNrcyA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICAgIHZhciBhcGlVcmwgPSBhcGlDb25maWcuYmFzZVVSTCArIFwidGVhbXMvXCIgKyBwYXJhbXMudGVhbUlkICsgXCIvcGlja3NcIjtcblxuICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaVVybClcbiAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIlBpY2tTZXJ2aWNlOiBnZXRQaWNrcyBzdWNjZXNzXCIpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pXG4gICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiUGlja1NlcnZpY2U6IGdldFBpY2tzIGZhaWxlZFwiKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KTtcblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9O1xuXG4gIHRoaXMuZ2V0U2VsZWN0ZWRQaWNrcyA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICAgIHZhciBhcGlVcmwgPSBhcGlDb25maWcuYmFzZVVSTCArIFwidGVhbXMvXCIgKyBwYXJhbXMudGVhbUlkICsgXCIvcGlja3Mvc2VsZWN0ZWRcIjtcblxuICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaVVybClcbiAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIlBpY2tTZXJ2aWNlOiBnZXRTZWxlY3RlZFBpY2tzIHN1Y2Nlc3NcIik7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSlcbiAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJQaWNrU2VydmljZTogZ2V0U2VsZWN0ZWRQaWNrcyBmYWlsZWRcIik7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfTtcblxuICB0aGlzLnNhdmVQaWNrID0gZnVuY3Rpb24ocGlja1BhcmFtcykge1xuICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCksXG4gICAgICAgIGFwaVVybCA9IGFwaUNvbmZpZy5iYXNlVVJMICsgXCJ0ZWFtcy9cIiArIHBpY2tQYXJhbXMudGVhbV9pZCArIFwiL3BpY2tzXCI7XG5cbiAgICAkaHR0cC5wb3N0KGFwaVVybCwgeyBwaWNrOiBwaWNrUGFyYW1zIH0pXG4gICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJQaWNrU2VydmljZTogc2F2ZVBpY2sgc3VjY2Vzc1wiKTtcbiAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCB0cnVlKTtcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShkYXRhKTtcbiAgICAgIH0pXG4gICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiUGlja1NlcnZpY2U6IHNhdmVQaWNrIGZhaWxlZFwiKTtcbiAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCB0cnVlKTtcbiAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XG4gICAgICB9KTtcblxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICB9O1xuXG4gIHRoaXMuc2F2ZVBpY2tzID0gZnVuY3Rpb24odGVhbUlkLCBwaWNrcykge1xuICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCksXG4gICAgICAgIGFwaVVybCA9IGFwaUNvbmZpZy5iYXNlVVJMICsgXCJ0ZWFtcy9cIiArIHRlYW1JZCArIFwiL3BpY2tzL21hbnlcIjtcblxuICAgICRodHRwLnBvc3QoYXBpVXJsLCB7IHBpY2tzOiBwaWNrcyB9KVxuICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiUGlja1NlcnZpY2U6IHNhdmVQaWNrcyBzdWNjZXNzXCIpO1xuICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIHRydWUpO1xuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJQaWNrU2VydmljZTogc2F2ZVBpY2tzIGZhaWxlZFwiKTtcbiAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCB0cnVlKTtcbiAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XG4gICAgICB9KTtcblxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICB9O1xuXG59O1xuXG5QaWNrU2VydmljZS4kaW5qZWN0ID0gWyckaHR0cCcsICckbG9nJywgJyRxJywgJ2FwaUNvbmZpZycsICdtZXNzYWdlTW9kZWwnXTtcbm1vZHVsZS5leHBvcnRzID0gUGlja1NlcnZpY2U7IiwidmFyIFNlYXNvblNlcnZpY2UgPSBmdW5jdGlvbigkaHR0cCwgJGxvZywgJHN0YXRlLCAkcSwgYXBpQ29uZmlnLCBtZXNzYWdlTW9kZWwsIHNlYXNvbk1vZGVsKSB7XG5cbiAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gIHRoaXMuZ2V0U2Vhc29ucyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgICAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnNcIilcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiU2Vhc29uU2VydmljZTogZ2V0U2Vhc29ucyBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHNlYXNvbk1vZGVsLnNldFNlYXNvbnMoZGF0YSk7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJTZWFzb25TZXJ2aWNlOiBnZXRTZWFzb25zIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRTZWFzb24gPSBmdW5jdGlvbihzZWFzb25JZCkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlDb25maWcuYmFzZVVSTCArIFwiYWRtaW4vc2Vhc29ucy9cIiArIHNlYXNvbklkKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJTZWFzb25TZXJ2aWNlOiBnZXRTZWFzb24gc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJTZWFzb25TZXJ2aWNlOiBnZXRTZWFzb24gZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuY3JlYXRlU2Vhc29uID0gZnVuY3Rpb24oc2Vhc29uUGFyYW1zKSB7XG4gICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnBvc3QoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImFkbWluL3NlYXNvbnMvXCIsXG4gICAgICAgIHsgc2Vhc29uOiBzZWFzb25QYXJhbXMgfSlcbiAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICRsb2cuZGVidWcoXCJTZWFzb25TZXJ2aWNlOiBjcmVhdGVTZWFzb24gc3VjY2Vzc1wiKTtcbiAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAvLyBuZWVkIHRvIGNhbGwgZ2V0U2Vhc29ucygpIGFnYWluIHRvIHJlc2V0IHRoZSBzZWFzb25tb2RlbFxuICAgICAgICAgIHNlcnZpY2UuZ2V0U2Vhc29ucygpXG4gICAgICAgICAgICAudGhlbihcbiAgICAgICAgICAgICAgZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAvLyB0b2RvOiB0aGlzIHJlbGllcyBvbiBhIG1vbmtleSBwYXRjaCBhdCB0aGUgbW9tZW50IC0gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXItdWkvdWktcm91dGVyL2lzc3Vlcy81ODJcbiAgICAgICAgICAgICAgICAvLyBidXQgbWF5IGJlIHJlc29sdmVkIHdpdGggZnV0dXJlIHJlbGVhc2VzIG9mIGFuZ3VsYXItdWktcm91dGVyXG4gICAgICAgICAgICAgICAgJHN0YXRlLnJlbG9hZCgpOyAvLyByZWxvYWRzIGFsbCB0aGUgcmVzb2x2ZXMgZm9yIHRoZSB2aWV3IGxlYWd1ZSBwYWdlIGFuZCByZWluc3RhbnRpYXRlcyB0aGUgY29udHJvbGxlclxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KVxuICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICRsb2cuZGVidWcoXCJTZWFzb25TZXJ2aWNlOiBjcmVhdGVTZWFzb24gZmFpbGVkXCIpO1xuICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxufTtcblxuU2Vhc29uU2VydmljZS4kaW5qZWN0ID0gWyckaHR0cCcsICckbG9nJywgJyRzdGF0ZScsICckcScsICdhcGlDb25maWcnLCAnbWVzc2FnZU1vZGVsJywgJ3NlYXNvbk1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IFNlYXNvblNlcnZpY2U7IiwidmFyIFRlYW1TZXJ2aWNlID0gZnVuY3Rpb24oJGh0dHAsICRsb2csICRsb2NhdGlvbiwgJHEsIGFwaUNvbmZpZywgbWVzc2FnZU1vZGVsKSB7XG5cbiAgICB0aGlzLmdldFRlYW0gPSBmdW5jdGlvbihsZWFndWVJZCwgdGVhbUlkKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJsZWFndWVzL1wiICsgbGVhZ3VlSWQgKyBcIi90ZWFtcy9cIiArIHRlYW1JZClcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IGdldFRlYW0gc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogZ2V0VGVhbSBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRBbGxUZWFtcyA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICAgICAgICB2YXIgYXBpVXJsID0gYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBwYXJhbXMuc2Vhc29uSWQgKyBcIi90ZWFtcy9hbGxcIjtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpVXJsKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogZ2V0QWxsVGVhbXMgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogZ2V0QWxsVGVhbXMgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0QWxpdmVUZWFtcyA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICAgICAgICB2YXIgYXBpVXJsID0gYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBwYXJhbXMuc2Vhc29uSWQgKyBcIi90ZWFtcy9hbGl2ZVwiO1xuICAgICAgICBpZiAocGFyYW1zLmxlYWd1ZUlkKSB7XG4gICAgICAgICAgICBhcGlVcmwgKz0gXCI/bGVhZ3VlX2lkPVwiICsgcGFyYW1zLmxlYWd1ZUlkO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpVXJsKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogZ2V0QWxpdmVUZWFtcyBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBnZXRBbGl2ZVRlYW1zIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmdldERlYWRUZWFtcyA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICAgICAgICB2YXIgYXBpVXJsID0gYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBwYXJhbXMuc2Vhc29uSWQgKyBcIi90ZWFtcy9kZWFkXCI7XG4gICAgICAgIGlmIChwYXJhbXMubGVhZ3VlSWQpIHtcbiAgICAgICAgICAgIGFwaVVybCArPSBcIj9sZWFndWVfaWQ9XCIgKyBwYXJhbXMubGVhZ3VlSWQ7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlVcmwpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBnZXREZWFkVGVhbXMgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogZ2V0RGVhZFRlYW1zIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmdldEFsbExlYWd1ZVRlYW1zID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgICAgIHZhciBhcGlVcmwgPSBhcGlDb25maWcuYmFzZVVSTCArIFwic2Vhc29ucy9cIiArIHBhcmFtcy5zZWFzb25JZCArIFwiL3RlYW1zL2FsbD9sZWFndWVfaWQ9XCIgKyBwYXJhbXMubGVhZ3VlSWQ7XG4gICAgICAgIGlmIChwYXJhbXMud2Vla1NsdWcpIHtcbiAgICAgICAgICAgIGFwaVVybCArPSBcIiZ3ZWVrX3NsdWc9XCIgKyBwYXJhbXMud2Vla1NsdWc7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlVcmwpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBnZXRBbGxMZWFndWVUZWFtcyBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBnZXRBbGxMZWFndWVUZWFtcyBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRMZWFndWVUZWFtcyA9IGZ1bmN0aW9uKGxlYWd1ZUlkKSB7XG4gICAgICAgIHZhciBhcGlVcmwgPSBhcGlDb25maWcuYmFzZVVSTCArIFwibGVhZ3Vlcy9cIiArIGxlYWd1ZUlkICsgXCIvdGVhbXNcIjtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpVXJsKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogZ2V0TGVhZ3VlVGVhbXMgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogZ2V0TGVhZ3VlVGVhbXMgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuXG4gICAgdGhpcy5jcmVhdGVUZWFtID0gZnVuY3Rpb24odGVhbVBhcmFtcykge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnBvc3QoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImxlYWd1ZXMvXCIgKyB0ZWFtUGFyYW1zLmxlYWd1ZV9pZCArIFwiL3RlYW1zXCIsXG4gICAgICAgICAgICB7IHRlYW06IHRlYW1QYXJhbXMgfSlcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IGNyZWF0ZVRlYW0gc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3VGVhbVBhdGggPSAkbG9jYXRpb24ucGF0aCgpICsgJy90ZWFtLycgKyBkYXRhLnRlYW1faWQ7XG4gICAgICAgICAgICAgICAgJGxvY2F0aW9uLnVybChuZXdUZWFtUGF0aCk7IC8vIG5hdmlnYXRlIHRvIHRoZSBuZXcgdGVhbSBwYWdlXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IGNyZWF0ZVRlYW0gZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMudXBkYXRlVGVhbSA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5wdXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImxlYWd1ZXMvXCIgKyB0ZWFtLmxlYWd1ZS5pZCArIFwiL3RlYW1zL1wiICsgdGVhbS5pZCxcbiAgICAgICAgICAgIHsgdGVhbTogdGVhbSB9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogdXBkYXRlVGVhbSBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiB1cGRhdGVUZWFtIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLnVwZGF0ZVRlYW1NZXNzYWdlID0gZnVuY3Rpb24odGVhbVBhcmFtcywgZW1haWxNZXNzYWdlKSB7XG4gICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgJGh0dHAucHV0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJsZWFndWVzL1wiICsgdGVhbVBhcmFtcy5sZWFndWUuaWQgKyBcIi90ZWFtcy9cIiArIHRlYW1QYXJhbXMuaWQgKyBcIi9tZXNzYWdlXCIsXG4gICAgICAgIHsgdGVhbTogdGVhbVBhcmFtcywgZW1haWxNZXNzYWdlOiBlbWFpbE1lc3NhZ2UgfSlcbiAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogdXBkYXRlVGVhbU1lc3NhZ2Ugc3VjY2Vzc1wiKTtcbiAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHRlYW1QYXJhbXMubWVzc2FnZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiB1cGRhdGVUZWFtTWVzc2FnZSBmYWlsZWRcIik7XG4gICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5zZW5kQ29tbWlzaE1lc3NhZ2UgPSBmdW5jdGlvbih0ZWFtUGFyYW1zLCBtZXNzYWdlKSB7XG4gICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgJGh0dHAucHV0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJsZWFndWVzL1wiICsgdGVhbVBhcmFtcy5sZWFndWUuaWQgKyBcIi90ZWFtcy9cIiArIHRlYW1QYXJhbXMuaWQgKyBcIi9jb250YWN0XCIsXG4gICAgICAgIHsgY29udGFjdDogbWVzc2FnZSB9KVxuICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBzZW5kQ29tbWlzaE1lc3NhZ2Ugc3VjY2Vzc1wiKTtcbiAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBzZW5kQ29tbWlzaE1lc3NhZ2UgZmFpbGVkXCIpO1xuICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuYWN0aXZhdGVUZWFtID0gZnVuY3Rpb24odGVhbSkge1xuICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgICAkaHR0cC5wdXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImxlYWd1ZXMvXCIgKyB0ZWFtLmxlYWd1ZS5pZCArIFwiL3RlYW1zL1wiICsgdGVhbS5pZCArIFwiL2FjdGl2YXRlXCIpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBhY3RpdmF0ZVRlYW0gc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBhY3RpdmF0ZVRlYW0gZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuZGVhY3RpdmF0ZVRlYW0gPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgICRodHRwLnB1dChhcGlDb25maWcuYmFzZVVSTCArIFwibGVhZ3Vlcy9cIiArIHRlYW0ubGVhZ3VlLmlkICsgXCIvdGVhbXMvXCIgKyB0ZWFtLmlkICsgXCIvZGVhY3RpdmF0ZVwiKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogZGVhY3RpdmF0ZVRlYW0gc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogZGVhY3RpdmF0ZVRlYW0gZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLnBhaWRUZWFtID0gZnVuY3Rpb24odGVhbSkge1xuICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgICAkaHR0cC5wdXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImxlYWd1ZXMvXCIgKyB0ZWFtLmxlYWd1ZS5pZCArIFwiL3RlYW1zL1wiICsgdGVhbS5pZCArIFwiL3BhaWRcIilcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IHBhaWRUZWFtIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogcGFpZFRlYW0gZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMudW5wYWlkVGVhbSA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAgICAgJGh0dHAucHV0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJsZWFndWVzL1wiICsgdGVhbS5sZWFndWUuaWQgKyBcIi90ZWFtcy9cIiArIHRlYW0uaWQgKyBcIi91bnBhaWRcIilcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IHVucGFpZFRlYW0gc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogdW5wYWlkVGVhbSBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcblxufTtcblxuVGVhbVNlcnZpY2UuJGluamVjdCA9IFsnJGh0dHAnLCAnJGxvZycsICckbG9jYXRpb24nLCAnJHEnLCAnYXBpQ29uZmlnJywgJ21lc3NhZ2VNb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBUZWFtU2VydmljZTsiLCJ2YXIgU3F1YWRTZXJ2aWNlID0gZnVuY3Rpb24oJGh0dHAsICRsb2csIGFwaUNvbmZpZykge1xuXG4gIHRoaXMuZ2V0U3F1YWRzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFwaVVybCA9IGFwaUNvbmZpZy5iYXNlVVJMICsgXCJhZG1pbi9zcXVhZHMvYWxsXCI7XG5cbiAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlVcmwpXG4gICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJTcXVhZFNlcnZpY2U6IGdldFNxdWFkcyBzdWNjZXNzXCIpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pXG4gICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiU3F1YWRTZXJ2aWNlOiBnZXRTcXVhZHMgZmFpbGVkXCIpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH07XG5cbiAgdGhpcy5nZXRXZWVrU3F1YWRzID0gZnVuY3Rpb24od2Vlaykge1xuICAgIHZhciBhcGlVcmwgPSBhcGlDb25maWcuYmFzZVVSTCArIFwiYWRtaW4vd2Vla3MvXCIgKyB3ZWVrLmlkICsgXCIvc3F1YWRzXCI7XG5cbiAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlVcmwpXG4gICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJTcXVhZFNlcnZpY2U6IGdldFdlZWtTcXVhZHMgc3VjY2Vzc1wiKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KVxuICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIlNxdWFkU2VydmljZTogZ2V0V2Vla1NxdWFkcyBmYWlsZWRcIik7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfTtcblxufTtcblxuU3F1YWRTZXJ2aWNlLiRpbmplY3QgPSBbJyRodHRwJywgJyRsb2cnLCAnYXBpQ29uZmlnJ107XG5tb2R1bGUuZXhwb3J0cyA9IFNxdWFkU2VydmljZTsiLCJ2YXIgVXNlclNlcnZpY2UgPSBmdW5jdGlvbigkaHR0cCwgJGxvZywgJHN0YXRlLCAkbG9jYXRpb24sICR3aW5kb3csICR0aW1lb3V0LCBhcGlDb25maWcsIG1lc3NhZ2VNb2RlbCwgdXNlck1vZGVsLCBzZWFzb25Nb2RlbCkge1xuXG4gICAgdmFyIHVzZXJTZXJ2aWNlID0gdGhpcztcblxuICAgIHRoaXMuc2lnbmluID0gZnVuY3Rpb24oZW1haWwsIHBhc3N3b3JkKSB7XG4gICAgICB1c2VyTW9kZWwucmVzZXRVc2VyKCk7XG4gICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnBvc3QoXG4gICAgICAgICAgICBhcGlDb25maWcuYmFzZVVSTCArIFwic2Vzc2lvbnNcIixcbiAgICAgICAgICAgIHsgZW1haWw6IGVtYWlsLCBwYXNzd29yZDogcGFzc3dvcmQgfSlcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVXNlclNlcnZpY2U6IHNpZ25pbiBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgICR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudG9rZW4gPSBkYXRhLnRva2VuO1xuICAgICAgICAgICAgICAgIHZhciByZWRpcmVjdCA9IGRlY29kZVVSSUNvbXBvbmVudCgkbG9jYXRpb24uc2VhcmNoKCkucmVkaXJlY3QpO1xuICAgICAgICAgICAgICAgIGlmIChyZWRpcmVjdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgJGxvY2F0aW9uLnNlYXJjaCgncmVkaXJlY3QnLCBudWxsKTsgLy8gcmVtb3ZlIHRoZSByZWRpcmVjdCBxdWVyeSBwYXJhbVxuICAgICAgICAgICAgICAgICAgICAkbG9jYXRpb24udXJsKHJlZGlyZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFsnLycsICcvc2lnbmluJywgJy9yZWdpc3RlciddLmluZGV4T2YocmVkaXJlY3QpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgIHVzZXJTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgIHtcbiAgICAgICAgICAgICAgICAgICRsb2NhdGlvbi51cmwoJy9zZWFzb24vJyArIHNlYXNvbk1vZGVsLnNlbGVjdGVkU2Vhc29uSWQgKyAnL215L3RlYW1zJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlVzZXJTZXJ2aWNlOiBzaWduaW4gZmFpbHVyZVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLnNpZ25vdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHVzZXJNb2RlbC5yZXNldFVzZXIoKTtcbiAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZGVsZXRlKGFwaUNvbmZpZy5iYXNlVVJMICsgJ3Nlc3Npb25zL2Rlc3Ryb3knKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJVc2VyU2VydmljZTogc2lnbm91dCBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIGlmICgkc3RhdGUuY3VycmVudC5uYW1lID09ICdwdWJsaWMuaG9tZScpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgJGxvY2F0aW9uLnVybCgnLycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJVc2VyU2VydmljZTogc2lnbm91dCBmYWlsdXJlXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMucmVzZXRVc2VyID0gZnVuY3Rpb24oZW1haWwpIHtcbiAgICAgIHZhciBwcm9taXNlID0gJGh0dHAucG9zdChhcGlDb25maWcuYmFzZVVSTCArIFwic2Vzc2lvbnMvcmVzZXRcIiwgeyBlbWFpbDogZW1haWwgfSlcbiAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAkbG9nLmRlYnVnKFwiVXNlclNlcnZpY2U6IHJlc2V0IHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICRsb2cuZGVidWcoXCJVc2VyU2VydmljZTogcmVzZXQgZmFpbHVyZVwiKTtcbiAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmdldEN1cnJlbnRVc2VyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0b2tlbiA9ICRsb2NhdGlvbi5zZWFyY2goKS50b2tlbjtcbiAgICAgICAgaWYgKCFfLmlzVW5kZWZpbmVkKHRva2VuKSkge1xuICAgICAgICAgICR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudG9rZW4gPSB0b2tlbjtcbiAgICAgICAgICAkbG9jYXRpb24uc2VhcmNoKCd0b2tlbicsIG51bGwpOyAvLyByZW1vdmUgdGhlIHRva2VuIHF1ZXJ5IHBhcmFtXG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInVzZXJzL2N1cnJlbnRcIilcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVXNlclNlcnZpY2U6IGdldEN1cnJlbnRVc2VyIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgdXNlck1vZGVsLnNldFVzZXIoZGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVXNlclNlcnZpY2U6IGdldEN1cnJlbnRVc2VyIGZhaWxlZFwiKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5jcmVhdGVVc2VyID0gZnVuY3Rpb24odXNlclBhcmFtcykge1xuICAgICAgdXNlck1vZGVsLnJlc2V0VXNlcigpO1xuICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5wb3N0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJ1c2Vyc1wiLFxuICAgICAgICAgICAgeyB1c2VyOiB1c2VyUGFyYW1zIH0pXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlVzZXJTZXJ2aWNlOiBjcmVhdGVVc2VyIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS50b2tlbiA9IGRhdGEudG9rZW47XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB2YXIgcmVkaXJlY3QgPSBkZWNvZGVVUklDb21wb25lbnQoJGxvY2F0aW9uLnNlYXJjaCgpLnJlZGlyZWN0KTtcbiAgICAgICAgICAgICAgICBpZiAocmVkaXJlY3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2NhdGlvbi5zZWFyY2goJ3JlZGlyZWN0JywgbnVsbCk7IC8vIHJlbW92ZSB0aGUgcmVkaXJlY3QgcXVlcnkgcGFyYW1cbiAgICAgICAgICAgICAgICAgICAgJGxvY2F0aW9uLnVybChyZWRpcmVjdCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChbJy8nLCAnL3NpZ25pbicsICcvcmVnaXN0ZXInXS5pbmRleE9mKHJlZGlyZWN0KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICB1c2VyU2VydmljZS5nZXRDdXJyZW50VXNlcigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlICB7XG4gICAgICAgICAgICAgICAgICAkbG9jYXRpb24udXJsKCcvc2Vhc29uLycgKyBzZWFzb25Nb2RlbC5zZWxlY3RlZFNlYXNvbklkICsgJy9teS90ZWFtcycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJVc2VyU2VydmljZTogY3JlYXRlVXNlciBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVVc2VyID0gZnVuY3Rpb24odXNlclBhcmFtcykge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnB1dChhcGlDb25maWcuYmFzZVVSTCArIFwidXNlcnMvY3VycmVudFwiLFxuICAgICAgICAgICAgeyB1c2VyOiB1c2VyUGFyYW1zIH0pXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlVzZXJTZXJ2aWNlOiB1cGRhdGVVc2VyIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgdXNlck1vZGVsLnNldFVzZXIodXNlclBhcmFtcyk7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVXNlclNlcnZpY2U6IHVwZGF0ZVVzZXIgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuY29udGFjdFVzID0gZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnB1dChhcGlDb25maWcuYmFzZVVSTCArIFwidXNlcnMvY29udGFjdFwiLFxuICAgICAgICAgICAgeyBtZXNzYWdlOiBtZXNzYWdlIH0pXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlVzZXJTZXJ2aWNlOiBjb250YWN0VXMgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJVc2VyU2VydmljZTogY29udGFjdFVzIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbn07XG5cblVzZXJTZXJ2aWNlLiRpbmplY3QgPSBbJyRodHRwJywgJyRsb2cnLCAnJHN0YXRlJywgJyRsb2NhdGlvbicsICckd2luZG93JywgJyR0aW1lb3V0JywgJ2FwaUNvbmZpZycsICdtZXNzYWdlTW9kZWwnLCAndXNlck1vZGVsJywgJ3NlYXNvbk1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IFVzZXJTZXJ2aWNlOyIsInZhciBXZWVrU2VydmljZSA9IGZ1bmN0aW9uKCRodHRwLCAkbG9nLCAkcSwgJHN0YXRlLCBhcGlDb25maWcsIG1lc3NhZ2VNb2RlbCkge1xuXG4gICAgdGhpcy5nZXRBdmFpbGFibGVXZWVrcyA9IGZ1bmN0aW9uKHNlYXNvbklkKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZWFzb25zL1wiICsgc2Vhc29uSWQgKyBcIi93ZWVrcy9hdmFpbGFibGVcIilcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiV2Vla1NlcnZpY2U6IGdldEF2YWlsYWJsZVdlZWtzIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiV2Vla1NlcnZpY2U6IGdldEF2YWlsYWJsZVdlZWtzIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmdldFNlYXNvbldlZWtzID0gZnVuY3Rpb24oc2Vhc29uSWQpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBzZWFzb25JZCArIFwiL3dlZWtzXCIpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIldlZWtTZXJ2aWNlOiBnZXRTZWFzb25XZWVrcyBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIldlZWtTZXJ2aWNlOiBnZXRTZWFzb25XZWVrcyBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRMZWFndWVXZWVrcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBvcHRpb25zLnNlYXNvbklkICsgXCIvd2Vla3M/bGVhZ3VlX2lkPVwiICsgb3B0aW9ucy5sZWFndWVJZClcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiV2Vla1NlcnZpY2U6IGdldExlYWd1ZVdlZWtzIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiV2Vla1NlcnZpY2U6IGdldExlYWd1ZVdlZWtzIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmdldFdlZWsgPSBmdW5jdGlvbihzZWFzb25JZCwgd2Vla0lkKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZWFzb25zL1wiICsgc2Vhc29uSWQgKyBcIi93ZWVrcy9cIiArIHdlZWtJZClcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiV2Vla1NlcnZpY2U6IGdldFdlZWsgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJXZWVrU2VydmljZTogZ2V0V2VlayBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRDdXJyZW50V2VlayA9IGZ1bmN0aW9uKHNlYXNvbklkLCBsZWFndWVJZCkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlDb25maWcuYmFzZVVSTCArIFwic2Vhc29ucy9cIiArIHNlYXNvbklkICsgXCIvd2Vla3MvY3VycmVudD9sZWFndWVfaWQ9XCIgKyBsZWFndWVJZClcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiV2Vla1NlcnZpY2U6IGdldEN1cnJlbnRXZWVrIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiV2Vla1NlcnZpY2U6IGdldEN1cnJlbnRXZWVrIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmdldFdlZWtUeXBlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYXBpVXJsID0gYXBpQ29uZmlnLmJhc2VVUkwgKyBcImFkbWluL3dlZWtfdHlwZXNcIjtcblxuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlVcmwpXG4gICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIldlZWtTZXJ2aWNlOiBnZXRXZWVrVHlwZXMgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICRsb2cuZGVidWcoXCJXZWVrU2VydmljZTogZ2V0V2Vla1R5cGVzIGZhaWxlZFwiKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMudXBkYXRlV2VlayA9IGZ1bmN0aW9uKHdlZWtQYXJhbXMpIHtcbiAgICAgIHZhciBwcm9taXNlID0gJGh0dHAucHV0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJhZG1pbi9zZWFzb25zL1wiICsgd2Vla1BhcmFtcy5zZWFzb25faWQgKyBcIi93ZWVrcy9cIiArIHdlZWtQYXJhbXMuaWQsXG4gICAgICAgIHsgd2Vlazogd2Vla1BhcmFtcyB9KVxuICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgJGxvZy5kZWJ1ZyhcIldlZWtTZXJ2aWNlOiB1cGRhdGVXZWVrIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgLy8gdG9kbzogdGhpcyByZWxpZXMgb24gYSBtb25rZXkgcGF0Y2ggYXQgdGhlIG1vbWVudCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyLXVpL3VpLXJvdXRlci9pc3N1ZXMvNTgyXG4gICAgICAgICAgLy8gYnV0IG1heSBiZSByZXNvbHZlZCB3aXRoIGZ1dHVyZSByZWxlYXNlcyBvZiBhbmd1bGFyLXVpLXJvdXRlclxuICAgICAgICAgICRzdGF0ZS5yZWxvYWQoKTsgLy8gcmVsb2FkcyBhbGwgdGhlIHJlc29sdmVzIGZvciB0aGUgdmlldyBsZWFndWUgcGFnZSBhbmQgcmVpbnN0YW50aWF0ZXMgdGhlIGNvbnRyb2xsZXJcbiAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSlcbiAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAkbG9nLmRlYnVnKFwiV2Vla1NlcnZpY2U6IHVwZGF0ZVdlZWsgZmFpbGVkXCIpO1xuICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuc2VuZFJlbWluZGVyID0gZnVuY3Rpb24od2Vlaykge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnB1dChhcGlDb25maWcuYmFzZVVSTCArIFwiYWRtaW4vc2Vhc29ucy9cIiArIHdlZWsuc2Vhc29uX2lkICsgXCIvd2Vla3MvXCIgKyB3ZWVrLmlkICsgXCIvcmVtaW5kXCIpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIldlZWtTZXJ2aWNlOiBzZW5kUmVtaW5kZXIgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJXZWVrU2VydmljZTogc2VuZFJlbWluZGVyIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmNvbXBsZXRlV2VlayA9IGZ1bmN0aW9uKHdlZWspIHtcbiAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAkaHR0cC5wdXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImFkbWluL3NlYXNvbnMvXCIgKyB3ZWVrLnNlYXNvbl9pZCArIFwiL3dlZWtzL1wiICsgd2Vlay5pZCArIFwiL2NvbXBsZXRlXCIpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIldlZWtTZXJ2aWNlOiBjb21wbGV0ZVdlZWsgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiV2Vla1NlcnZpY2U6IGNvbXBsZXRlV2VlayBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9O1xuXG59O1xuXG5XZWVrU2VydmljZS4kaW5qZWN0ID0gWyckaHR0cCcsICckbG9nJywgJyRxJywgJyRzdGF0ZScsICdhcGlDb25maWcnLCAnbWVzc2FnZU1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IFdlZWtTZXJ2aWNlO1xuIiwiY29tbWFuZ3VsYXIuY3JlYXRlKCdTaWduaW5Db21tYW5kJyxcbiAgICBmdW5jdGlvbigkbG9nLCB1c2VyU2VydmljZSkge1xuXG4gICAgcmV0dXJuIHtcblxuICAgICAgICBleGVjdXRlOiBmdW5jdGlvbihlbWFpbCwgcGFzc3dvcmQpIHtcbiAgICAgICAgICAgICRsb2cuZGVidWcoJ1NpZ25pbkNvbW1hbmQ6IGF1dGhlbnRpY2F0aW5nIHVzZXIuLi4nKTtcbiAgICAgICAgICAgIHJldHVybiB1c2VyU2VydmljZS5zaWduaW4oZW1haWwsIHBhc3N3b3JkKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICRsb2cuZGVidWcoXCJTaWduaW5Db21tYW5kOiBmYWlsdXJlOiBcIiArIGVycm9yLmRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICBvblJlc3VsdDogZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICAkbG9nLmRlYnVnKFwiU2lnbmluQ29tbWFuZDogc3VjY2VzcyBcIik7XG4gICAgICAgIH1cblxuICAgIH1cbn0pO1xuIiwiXG5jb21tYW5ndWxhci5jcmVhdGUoJ0dldEN1cnJlbnRVc2VyQ29tbWFuZCcsXG4gICBmdW5jdGlvbigkbG9nLCB1c2VyU2VydmljZSwgdXNlck1vZGVsKSB7XG5cbiAgICByZXR1cm4ge1xuXG4gICAgICAgIGV4ZWN1dGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJGxvZy5kZWJ1ZygnR2V0Q3VycmVudFVzZXJDb21tYW5kOiBnZXR0aW5nIGN1cnJlbnQgdXNlciBkZXRhaWxzLi4uJyk7XG4gICAgICAgICAgICB2YXIgdXNlclByb21pc2UgPSB1c2VyU2VydmljZS5nZXRDdXJyZW50VXNlcigpO1xuICAgICAgICAgICAgcmV0dXJuIHVzZXJQcm9taXNlO1xuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkdldEN1cnJlbnRVc2VyQ29tbWFuZDogZmFpbHVyZTogXCIgKyBlcnJvci5kYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25SZXN1bHQ6IGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkdldEN1cnJlbnRVc2VyQ29tbWFuZDogc3VjY2Vzc1wiKTtcbiAgICAgICAgfVxuXG4gICAgfVxufSk7IiwiY29tbWFuZ3VsYXIuY3JlYXRlKCdTaWdub3V0Q29tbWFuZCcsXG4gICAgZnVuY3Rpb24oJGxvZywgdXNlclNlcnZpY2UpIHtcblxuICAgICAgICByZXR1cm4ge1xuXG4gICAgICAgICAgICBleGVjdXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKCdTaWdub3V0Q29tbWFuZDogc2lnbmluZyBvdXQgdXNlci4uLicpO1xuICAgICAgICAgICAgICAgIHJldHVybiB1c2VyU2VydmljZS5zaWdub3V0KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25FcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiU2lnbm91dENvbW1hbmQ6IGZhaWx1cmU6IFwiICsgZXJyb3IuZGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25SZXN1bHQ6IGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJTaWdub3V0Q29tbWFuZDogc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfSk7XG4iLCJcbnZhciBPZmZzZXRGaWx0ZXIgPSBmdW5jdGlvbigkbG9nKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGlucHV0LCBzdGFydCkge1xuICAgICAgICBzdGFydCA9IHBhcnNlSW50KHN0YXJ0LCAxMCk7XG4gICAgICAgIHJldHVybiBpbnB1dC5zbGljZShzdGFydCk7XG4gICAgfTtcbn07XG5cbk9mZnNldEZpbHRlci4kaW5qZWN0ID0gWyckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IE9mZnNldEZpbHRlcjtcbiIsInZhciBBY3RpdmVUZWFtRmlsdGVyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBmdW5jdGlvbih0ZWFtcywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmluYWN0aXZlID09IHRydWUpIHtcbiAgICAgIHJldHVybiB0ZWFtcztcbiAgICB9XG4gICAgdmFyIGFjdGl2ZVRlYW1zID0gXy5maWx0ZXIodGVhbXMsIGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAgIHJldHVybiB0ZWFtLmFjdGl2ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gYWN0aXZlVGVhbXM7XG4gIH07XG59O1xuXG5BY3RpdmVUZWFtRmlsdGVyLiRpbmplY3QgPSBbXTtcbm1vZHVsZS5leHBvcnRzID0gQWN0aXZlVGVhbUZpbHRlcjtcbiIsInZhciBBbGl2ZVRlYW1GaWx0ZXIgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRlYW1zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuZGVhZCA9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdGVhbXM7XG4gICAgfVxuICAgIHZhciBhbGl2ZVRlYW1zID0gXy5maWx0ZXIodGVhbXMsIGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAgIHJldHVybiB0ZWFtLmFsaXZlO1xuICAgIH0pO1xuICAgIHJldHVybiBhbGl2ZVRlYW1zO1xuICB9O1xufTtcblxuQWxpdmVUZWFtRmlsdGVyLiRpbmplY3QgPSBbXTtcbm1vZHVsZS5leHBvcnRzID0gQWxpdmVUZWFtRmlsdGVyO1xuIiwidmFyIE1hbmFnZWRMZWFndWVGaWx0ZXIgPSBmdW5jdGlvbih1c2VyTW9kZWwpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGxlYWd1ZXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5tYW5hZ2VkID09IHRydWUpIHtcbiAgICAgIHJldHVybiBsZWFndWVzO1xuICAgIH1cbiAgICB2YXIgaW5MZWFndWVzID0gXy5maWx0ZXIobGVhZ3VlcywgZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgICByZXR1cm4gbGVhZ3VlLmNvbW1pc2hfaWRzLmluZGV4T2YodXNlck1vZGVsLnVzZXIuaWQpID09IC0xO1xuICAgIH0pO1xuICAgIHJldHVybiBpbkxlYWd1ZXM7XG4gIH07XG59O1xuXG5NYW5hZ2VkTGVhZ3VlRmlsdGVyLiRpbmplY3QgPSBbJ3VzZXJNb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBNYW5hZ2VkTGVhZ3VlRmlsdGVyO1xuIiwiXG52YXIgVGltZUZpbHRlciA9IGZ1bmN0aW9uKCRsb2cpIHtcbiAgIHJldHVybiBmdW5jdGlvbihpbnB1dCkge1xuXG4gICAgICAgaWYgKGlucHV0IDwgMSkge1xuICAgICAgICAgICByZXR1cm4gXCIwMDowMDowMFwiO1xuICAgICAgIH1cblxuICAgICAgIGZ1bmN0aW9uIGZvcm1hdCh2YWwpIHtcbiAgICAgICAgICAgcmV0dXJuICh2YWw8MTAgPyAnMCcgOiAnJykgKyB2YWw7XG4gICAgICAgfVxuXG4gICAgICAgdmFyIGggPSBNYXRoLmZsb29yKChpbnB1dCAvIDEwMDApIC8gMzYwMCk7XG4gICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKCgoaW5wdXQgLyAxMDAwKSAlIDM2MDApIC8gNjApO1xuICAgICAgIHZhciBzID0gTWF0aC5mbG9vcigoaW5wdXQgLyAxMDAwKSAlIDYwKTtcbiAgICAgICByZXR1cm4gZm9ybWF0KGgpICsgXCI6XCIgKyBmb3JtYXQobSkgKyBcIjpcIiArIGZvcm1hdChzKTtcbiAgIH1cblxufTtcblxuVGltZUZpbHRlci4kaW5qZWN0ID0gWyckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IFRpbWVGaWx0ZXI7XG4iLCJ2YXIgV2Vla1BpY2tzRmlsdGVyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBmdW5jdGlvbihwaWNrcywgd2Vla1NsdWcpIHtcbiAgICBpZiAoIXdlZWtTbHVnKSB7XG4gICAgICByZXR1cm4gcGlja3M7XG4gICAgfVxuICAgIHZhciB3ZWVrUGlja3MgPSBfLmZpbHRlcihwaWNrcywgZnVuY3Rpb24ocGljaykge1xuICAgICAgcmV0dXJuIHBpY2sud2Vla19zbHVnID09IHdlZWtTbHVnO1xuICAgIH0pO1xuICAgIHJldHVybiB3ZWVrUGlja3M7XG4gIH07XG59O1xuXG5XZWVrUGlja3NGaWx0ZXIuJGluamVjdCA9IFtdO1xubW9kdWxlLmV4cG9ydHMgPSBXZWVrUGlja3NGaWx0ZXI7XG4iLCJ2YXIgSG9tZUNvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2csICRsb2NhdGlvbiwgJG1vZGFsLCBsZWFndWVTZXJ2aWNlLCBtZXNzYWdlTW9kZWwsIHNlYXNvbk1vZGVsKSB7XG5cbiAgJHNjb3BlLnNlbGVjdGVkU2Vhc29uSWQgPSBzZWFzb25Nb2RlbC5zZWxlY3RlZFNlYXNvbklkO1xuXG4gICRzY29wZS5jcmVhdGVMZWFndWUgPSBmdW5jdGlvbihzZWFzb25JZCkge1xuICAgICAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9uZXcvbGVhZ3VlLm5ldy50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTmV3TGVhZ3VlQ29udHJvbGxlcidcbiAgICAgICAgICB9KTtcblxuICAgICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihsZWFndWUpIHtcbiAgICAgICAgbGVhZ3VlU2VydmljZS5jcmVhdGVMZWFndWUobGVhZ3VlKTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZygnQ3JlYXRlIGxlYWd1ZSBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdDcmVhdGUgbGVhZ3VlIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgICRzY29wZS5qb2luTGVhZ3VlID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2Vhc29uID0gc2Vhc29uTW9kZWwuZ2V0Q3VycmVudFNlYXNvbigpO1xuICAgICAgJGxvY2F0aW9uLnVybCgnL3NlYXNvbi8nICsgc2Vhc29uLmlkICsgJy9sZWFndWVzL3B1YmxpYycpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoXCJob21lIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG59O1xuXG5Ib21lQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZycsICckbG9jYXRpb24nLCAnJG1vZGFsJywgJ2xlYWd1ZVNlcnZpY2UnLCAnbWVzc2FnZU1vZGVsJywgJ3NlYXNvbk1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IEhvbWVDb250cm9sbGVyO1xuIiwidmFyIEZhcUNvbnRyb2xsZXIgPSBmdW5jdGlvbigkbW9kYWxJbnN0YW5jZSwgJHNjb3BlLCAkbG9nKSB7XG5cbiAgJHNjb3BlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2Nsb3NlJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcImZhcSBjb250cm9sbGVyXCIpO1xuICB9O1xuICBpbml0KCk7XG59O1xuXG5GYXFDb250cm9sbGVyLiRpbmplY3QgPSBbJyRtb2RhbEluc3RhbmNlJywgJyRzY29wZScsICckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IEZhcUNvbnRyb2xsZXI7XG4iLCJ2YXIgQWJ1c2VDb250cm9sbGVyID0gZnVuY3Rpb24oJG1vZGFsSW5zdGFuY2UsICRzY29wZSwgJGxvZykge1xuXG4gICRzY29wZS5hYnVzZU1lc3NhZ2UgPSAnJztcblxuICAkc2NvcGUuY29udGFjdFVzID0gZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKG1lc3NhZ2UpO1xuICB9O1xuXG4gICRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgfTtcblxuICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICB9O1xuXG4gICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwicmVwb3J0IGFidXNlIGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cbkFidXNlQ29udHJvbGxlci4kaW5qZWN0ID0gWyckbW9kYWxJbnN0YW5jZScsICckc2NvcGUnLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBBYnVzZUNvbnRyb2xsZXI7XG4iLCJ2YXIgU2lnbmluQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJGxvZywgJGxvY2F0aW9uLCAkbW9kYWwsIG1lc3NhZ2VNb2RlbCwgdXNlclNlcnZpY2UpIHtcblxuICAgICRzY29wZS5jcmVkZW50aWFscyA9IHtcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJydcbiAgICB9O1xuXG4gICAgJHNjb3BlLnNpZ25pbiA9IGZ1bmN0aW9uKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJzaWduaW4gY3JlZGVudGlhbHM6IFwiICsgY3JlZGVudGlhbHMpO1xuICAgICAgICAkc2NvcGUuZGlzcGF0Y2goXCJTaWduaW5FdmVudFwiLCBjcmVkZW50aWFscyk7XG4gICAgfTtcblxuICAgICRzY29wZS5mb3Jnb3RQYXNzd29yZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyB0b2RvOiBpbXBsZW1lbnQgdGhpc1xuICAgICAgICBhbGVydCgndG91Z2ggc2hpdCcpO1xuICAgIH07XG5cbiAgICAkc2NvcGUucmVzZXRQYXNzd29yZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvdXNlci9yZXNldC91c2VyLnJlc2V0LnRwbC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1VzZXJSZXNldENvbnRyb2xsZXInXG4gICAgICB9KTtcblxuICAgICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbiAoZW1haWwpIHtcbiAgICAgICAgdXNlclNlcnZpY2UucmVzZXRVc2VyKGVtYWlsKTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZygnUmVzZXQgcGFzc3dvcmQgbW9kYWwgZGlzbWlzc2VkLi4uJyk7XG4gICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnUmVzZXQgcGFzc3dvcmQgY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLnJlZ2lzdGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHVibGljL3JlZ2lzdGVyL3JlZ2lzdGVyLnRwbC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1JlZ2lzdGVyQ29udHJvbGxlcidcbiAgICAgIH0pO1xuXG4gICAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKG5ld1VzZXIpIHtcbiAgICAgICAgdXNlclNlcnZpY2UuY3JlYXRlVXNlcihuZXdVc2VyKTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZygnUmVnaXN0ZXIgbW9kYWwgZGlzbWlzc2VkLi4uJyk7XG4gICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnUmVnaXN0ZXIgY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgICB9KTtcblxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcInNpZ25pbiBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5TaWduaW5Db250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJywgJyRsb2NhdGlvbicsICckbW9kYWwnLCAnbWVzc2FnZU1vZGVsJywgJ3VzZXJTZXJ2aWNlJ107XG5tb2R1bGUuZXhwb3J0cyA9IFNpZ25pbkNvbnRyb2xsZXI7XG4iLCJ2YXIgUmVnaXN0ZXJDb250cm9sbGVyID0gZnVuY3Rpb24oJHNjb3BlLCAkbG9nLCAkbW9kYWwsICRtb2RhbEluc3RhbmNlKSB7XG5cbiAgICAkc2NvcGUubmV3VXNlckRhdGEgPSB7XG4gICAgICAgIGZpcnN0X25hbWU6ICcnLFxuICAgICAgICBsYXN0X25hbWU6ICcnLFxuICAgICAgICBuaWNrbmFtZTogJycsXG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgZW1haWxfY29uZmlybWF0aW9uOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICBwYXNzd29yZF9jb25maXJtYXRpb246ICcnXG4gICAgfTtcblxuICAgICRzY29wZS5yZWdpc3RlciA9IGZ1bmN0aW9uIChuZXdVc2VyKSB7XG4gICAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZShuZXdVc2VyKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICAgICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLnNob3dUZXJtcyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci90ZXJtcy9yZWdpc3Rlci50ZXJtcy50cGwuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdSZWdpc3RlclRlcm1zQ29udHJvbGxlcidcbiAgICAgIH0pO1xuXG4gICAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gZG8gbmFkYVxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKCdUZXJtcyBhbmQgY29uZGl0aW9ucyBtb2RhbCBjbG9zZWQuLi4nKTtcbiAgICAgIH0pO1xuXG4gICAgfTtcblxuICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcInJlZ2lzdGVyIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cblJlZ2lzdGVyQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZycsICckbW9kYWwnLCAnJG1vZGFsSW5zdGFuY2UnXTtcbm1vZHVsZS5leHBvcnRzID0gUmVnaXN0ZXJDb250cm9sbGVyO1xuIiwiXG52YXIgVXNlckNvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2csIHVzZXJNb2RlbCwgdXNlclNlcnZpY2UpIHtcblxuICAgICRzY29wZS51c2VyRGF0YSA9IGFuZ3VsYXIuY29weSh1c2VyTW9kZWwpO1xuXG4gICAgJHNjb3BlLnVwZGF0ZSA9IGZ1bmN0aW9uKHVzZXIpIHtcbiAgICAgICAgdXNlclNlcnZpY2UudXBkYXRlVXNlcih1c2VyKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmhhc0Vycm9yID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gICAgfTtcblxuICAgICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRlcnJvcltwcm9wZXJ0eV07XG4gICAgfTtcblxuICAgICRzY29wZS4kb24oJ3VzZXJNb2RlbDo6dXNlclVwZGF0ZWQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAkc2NvcGUudXNlckRhdGEgPSBhbmd1bGFyLmNvcHkodXNlck1vZGVsKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKFwidXNlciBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5Vc2VyQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZycsICd1c2VyTW9kZWwnLCAndXNlclNlcnZpY2UnXTtcbm1vZHVsZS5leHBvcnRzID0gVXNlckNvbnRyb2xsZXI7XG4iLCJcbnZhciBMZWFndWVDb250cm9sbGVyID0gZnVuY3Rpb24oJHNjb3BlLCAkbG9nKSB7XG5cbiAgICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICAgICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJsZWFndWUgY29udHJvbGxlclwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcblxufTtcblxuTGVhZ3VlQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBMZWFndWVDb250cm9sbGVyO1xuIiwidmFyIExlYWd1ZXNDb250cm9sbGVyID0gZnVuY3Rpb24oJHNjb3BlLCAkbG9nLCAkc3RhdGUpIHtcblxuICAgIC8vIHBhZ2luYXRpb25cbiAgICAkc2NvcGUuY3VycmVudExlYWd1ZVBhZ2UgPSAxO1xuICAgICRzY29wZS5sZWFndWVzUGVyUGFnZSA9IDEwMDtcblxuICAgICRzY29wZS5pc1B1YmxpYyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gJHN0YXRlLmN1cnJlbnQubmFtZSA9PSAncHJpdmF0ZS5sZWFndWVzLmpvaW4ucHVibGljJztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJsZWFndWVzIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cbkxlYWd1ZXNDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJywgJyRzdGF0ZSddO1xubW9kdWxlLmV4cG9ydHMgPSBMZWFndWVzQ29udHJvbGxlcjtcblxuIiwidmFyIFRlYW1Db250cm9sbGVyID0gZnVuY3Rpb24oJHNjb3BlLCAkbG9nKSB7XG5cbiAgICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICAgICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJ0ZWFtIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cblRlYW1Db250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IFRlYW1Db250cm9sbGVyO1xuIiwidmFyIFRlYW1zQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJGxvZywgJHN0YXRlLCAkbG9jYXRpb24sICRzdGF0ZVBhcmFtcykge1xuXG4gICAgJHNjb3BlLnNlYXNvbklkID0gJHN0YXRlUGFyYW1zLnNlYXNvbklkO1xuXG4gICAgLy8gcGFnaW5hdGlvblxuICAgICRzY29wZS5jdXJyZW50VGVhbVBhZ2UgPSAxO1xuICAgICRzY29wZS50ZWFtc1BlclBhZ2UgPSAxMDA7XG5cbiAgICAkc2NvcGUuaXNBbGl2ZVN0YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAkc3RhdGUuY3VycmVudC5uYW1lID09ICdwcml2YXRlLnRlYW1zLmFsaXZlJztcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNyZWF0ZVRlYW0gPSBmdW5jdGlvbihzZWFzb25JZCkge1xuICAgICAgICAkbG9jYXRpb24udXJsKCcvc2Vhc29uLycgKyBzZWFzb25JZCArICcvbGVhZ3Vlcy9wdWJsaWMnKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmFsaXZlVGVhbXMgPSBmdW5jdGlvbihzZWFzb25JZCkge1xuICAgICAgJGxvY2F0aW9uLnVybCgnL3NlYXNvbi8nICsgc2Vhc29uSWQgKyAnL3RlYW1zL2FsaXZlJyk7XG4gICAgfTtcblxuICAgICRzY29wZS5kZWFkVGVhbXMgPSBmdW5jdGlvbihzZWFzb25JZCkge1xuICAgICAgJGxvY2F0aW9uLnVybCgnL3NlYXNvbi8nICsgc2Vhc29uSWQgKyAnL3RlYW1zL2RlYWQnKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLnNob3dUZWFtID0gZnVuY3Rpb24oc2Vhc29uSWQsIHRlYW0pIHtcbiAgICAgICRsb2NhdGlvbi51cmwoJy9zZWFzb24vJyArIHNlYXNvbklkICsgJy9sZWFndWUvJyArIHRlYW0ubGVhZ3VlLmlkICsgJy90ZWFtLycgKyB0ZWFtLmlkKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJ0ZWFtcyBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5UZWFtc0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnLCAnJHN0YXRlJywgJyRsb2NhdGlvbicsICckc3RhdGVQYXJhbXMnXTtcbm1vZHVsZS5leHBvcnRzID0gVGVhbXNDb250cm9sbGVyO1xuIiwidmFyIFBsYXlDb250cm9sbGVyID0gZnVuY3Rpb24oJHNjb3BlLCAkbG9nLCAkbG9jYXRpb24sICRtb2RhbCwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsIG1lc3NhZ2VNb2RlbCwgc2Vhc29uTW9kZWwsIGxlYWd1ZVNlcnZpY2UpIHtcblxuICAkc2NvcGUuc2VsZWN0ZWRTZWFzb25JZCA9IHBhcnNlSW50KCRzdGF0ZVBhcmFtcy5zZWFzb25JZCk7XG5cbiAgJHNjb3BlLnN0YXJ0ZWRTZWFzb25zID0gYW5ndWxhci5jb3B5KHNlYXNvbk1vZGVsLnN0YXJ0ZWRTZWFzb25zKTtcblxuICAkc2NvcGUudGVhbU9wdGlvbnMgPSB7IGFsaXZlOiB0cnVlLCBkZWFkOiB0cnVlIH07XG4gICRzY29wZS5sZWFndWVPcHRpb25zID0geyBtYW5hZ2VkOiB0cnVlIH07XG5cbiAgJHNjb3BlLnF1ZXJ5ID0gJyc7XG5cbiAgJHNjb3BlLmNoYW5nZVNlYXNvbiA9IGZ1bmN0aW9uKHNlYXNvbklkKSB7XG4gICAgc2Vhc29uTW9kZWwuc2V0U2VsZWN0ZWRTZWFzb25JZChzZWFzb25JZCk7XG4gICAgdmFyIG5ld1BhdGggPSAkbG9jYXRpb24ucGF0aCgpLnJlcGxhY2UoLyhcXC9zZWFzb25cXC8pXFxkKi8sICckMScgKyBzZWFzb25JZCk7XG4gICAgJGxvY2F0aW9uLnVybChuZXdQYXRoKTtcbiAgfTtcblxuICAkc2NvcGUubXlUZWFtcyA9IGZ1bmN0aW9uKHNlYXNvbklkKSB7XG4gICAgJGxvY2F0aW9uLnVybCgnL3NlYXNvbi8nICsgc2Vhc29uSWQgKyAnL215L3RlYW1zJyk7XG4gIH07XG5cbiAgJHNjb3BlLm15TGVhZ3VlcyA9IGZ1bmN0aW9uKHNlYXNvbklkKSB7XG4gICAgJGxvY2F0aW9uLnVybCgnL3NlYXNvbi8nICsgc2Vhc29uSWQgKyAnL215L2xlYWd1ZXMnKTtcbiAgfTtcblxuICAkc2NvcGUucmVzZXRTZWFyY2ggPSBmdW5jdGlvbigpIHtcbiAgICAkc2NvcGUucXVlcnkgPSAnJztcbiAgfTtcblxuICAkc2NvcGUuaXNTdGF0ZSA9IGZ1bmN0aW9uKHN0YXRlcykge1xuICAgIHJldHVybiBfLmluZGV4T2Yoc3RhdGVzLCAkc3RhdGUuY3VycmVudC5uYW1lKSA+IC0xO1xuICB9O1xuXG4gICRzY29wZS5jcmVhdGVMZWFndWUgPSBmdW5jdGlvbigpIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL25ldy9sZWFndWUubmV3LnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdOZXdMZWFndWVDb250cm9sbGVyJ1xuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihsZWFndWUpIHtcbiAgICAgIGxlYWd1ZVNlcnZpY2UuY3JlYXRlTGVhZ3VlKGxlYWd1ZSk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnQ3JlYXRlIGxlYWd1ZSBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnQ3JlYXRlIGxlYWd1ZSBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcblxuICB9O1xuXG4gICRzY29wZS5qb2luTGVhZ3VlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNlYXNvbiA9IHNlYXNvbk1vZGVsLmdldEN1cnJlbnRTZWFzb24oKTtcbiAgICAkbG9jYXRpb24udXJsKCcvc2Vhc29uLycgKyBzZWFzb24uaWQgKyAnL2xlYWd1ZXMvcHVibGljJyk7XG4gIH07XG5cbiAgICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwicGxheSBjb250cm9sbGVyXCIpO1xuICB9O1xuICBpbml0KCk7XG5cbn07XG5cblBsYXlDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJywgJyRsb2NhdGlvbicsICckbW9kYWwnLCAnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICdtZXNzYWdlTW9kZWwnLCAnc2Vhc29uTW9kZWwnLCAnbGVhZ3VlU2VydmljZSddO1xubW9kdWxlLmV4cG9ydHMgPSBQbGF5Q29udHJvbGxlcjtcbiIsInZhciBBZG1pbkNvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUpIHtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuQWRtaW5Db250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZSddO1xubW9kdWxlLmV4cG9ydHMgPSBBZG1pbkNvbnRyb2xsZXI7XG4iLCJ2YXIgSGVhZGVyQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJGxvZywgJGxvY2F0aW9uLCAkbW9kYWwsICRzdGF0ZSwgJGFuY2hvclNjcm9sbCwgJHN0YXRlUGFyYW1zLCB1c2VyU2VydmljZSwgbGVhZ3VlU2VydmljZSwgdXNlck1vZGVsLCBtZXNzYWdlTW9kZWwsIHNlYXNvbk1vZGVsKSB7XG5cbiAgICB2YXIgc2Nyb2xsVG9Ub3AgPSBmdW5jdGlvbigpIHtcbiAgICAgICRhbmNob3JTY3JvbGwoKTsgLy8gaGFja3k/XG4gICAgfTtcblxuICAgIHZhciBjaGVja0h0bWw1U3RvcmFnZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICB0cnkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UudGVzdCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYwMDAwMDApICsgMTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnZGFuZ2VyJywgY29udGVudDogJ1lvdSBhcmUgaW4gUHJpdmFjeSBNb2RlLiBUaGlzIGFwcCB3aWxsIG5vdCBmdW5jdGlvbiBwcm9wZXJseS4gVHVybiBvZmYgUHJpdmFjeSBNb2RlLid9LCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICB9O1xuXG4gICAgJHNjb3BlLnNlbGVjdGVkU2Vhc29uSWQgPSAoYW5ndWxhci5pc0RlZmluZWQoJHN0YXRlUGFyYW1zLnNlYXNvbklkKSkgPyBwYXJzZUludCgkc3RhdGVQYXJhbXMuc2Vhc29uSWQpIDogc2Vhc29uTW9kZWwuc2VsZWN0ZWRTZWFzb25JZDtcblxuICAgICRzY29wZS5pc0NvbGxhcHNlZCA9IHRydWU7XG5cbiAgICAkc2NvcGUudXNlckRhdGEgPSB1c2VyTW9kZWw7XG5cbiAgICAkc2NvcGUuY3JlZGVudGlhbHMgPSB7XG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgfTtcblxuICAgICRzY29wZS5pc1N0YXRlID0gZnVuY3Rpb24oc3RhdGVzKSB7XG4gICAgICByZXR1cm4gXy5pbmRleE9mKHN0YXRlcywgJHN0YXRlLmN1cnJlbnQubmFtZSkgPiAtMTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmhvbWUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJGxvY2F0aW9uLnVybCgnLycpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuZmFxID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICRtb2RhbC5vcGVuKHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3B1YmxpYy9mYXEvZmFxLnRwbC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ0ZhcUNvbnRyb2xsZXInXG4gICAgICB9KTtcblxuICAgIH07XG5cbiAgICAkc2NvcGUuY29udGFjdFVzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHVibGljL2FidXNlL2FidXNlLnRwbC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ0FidXNlQ29udHJvbGxlcidcbiAgICAgIH0pO1xuXG4gICAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgdXNlclNlcnZpY2UuY29udGFjdFVzKG1lc3NhZ2UpO1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ0NvbnRhY3QgdXMgY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgICAgICRsb2cuZGVidWcoJ2NvbnRhY3QgdXMgZGlzbWlzc2VkLi4uJyk7XG4gICAgICB9KTtcblxuICAgIH07XG5cbiAgICAkc2NvcGUucmVnaXN0ZXIgPSBmdW5jdGlvbigpIHtcblxuICAgICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXIvcmVnaXN0ZXIudHBsLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnUmVnaXN0ZXJDb250cm9sbGVyJ1xuICAgICAgfSk7XG5cbiAgICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24obmV3VXNlcikge1xuICAgICAgICB1c2VyU2VydmljZS5jcmVhdGVVc2VyKG5ld1VzZXIpO1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ1JlZ2lzdGVyIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgICAgICAkbG9nLmRlYnVnKCdSZWdpc3RlciBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgICRzY29wZS5wbGF5ID0gZnVuY3Rpb24oc2Vhc29uSWQpIHtcbiAgICAgICRsb2NhdGlvbi51cmwoJy9zZWFzb24vJyArIHNlYXNvbklkICsgJy9teS90ZWFtcycpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuam9pbkxlYWd1ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlYXNvbiA9IHNlYXNvbk1vZGVsLmdldEN1cnJlbnRTZWFzb24oKTtcbiAgICAgICRsb2NhdGlvbi51cmwoJy9zZWFzb24vJyArIHNlYXNvbi5pZCArICcvbGVhZ3Vlcy9wdWJsaWMnKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNyZWF0ZUxlYWd1ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbmV3L2xlYWd1ZS5uZXcudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ05ld0xlYWd1ZUNvbnRyb2xsZXInXG4gICAgICAgICAgfSk7XG5cbiAgICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgICAgIGxlYWd1ZVNlcnZpY2UuY3JlYXRlTGVhZ3VlKGxlYWd1ZSk7XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnQ3JlYXRlIGxlYWd1ZSBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICAgICAgJGxvZy5kZWJ1ZygnQ3JlYXRlIGxlYWd1ZSBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAkc2NvcGUudXNlclByb2ZpbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJGxvY2F0aW9uLnVybCgnL3VzZXInKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLnNpZ25pbiA9IGZ1bmN0aW9uKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJzaWduaW4gY3JlZGVudGlhbHM6IFwiICsgY3JlZGVudGlhbHMpO1xuICAgICAgICAkc2NvcGUuZGlzcGF0Y2goXCJTaWduaW5FdmVudFwiLCBjcmVkZW50aWFscyk7XG4gICAgfTtcblxuICAgICRzY29wZS5zaWdub3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRzY29wZS5jcmVkZW50aWFscyA9IHtcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJ1xuICAgICAgICB9O1xuICAgICAgICAkc2NvcGUuZGlzcGF0Y2goXCJTaWdub3V0RXZlbnRcIik7XG4gICAgfTtcblxuICAgICRzY29wZS5yZXNldFBhc3N3b3JkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS91c2VyL3Jlc2V0L3VzZXIucmVzZXQudHBsLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnVXNlclJlc2V0Q29udHJvbGxlcidcbiAgICAgIH0pO1xuXG4gICAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uIChlbWFpbCkge1xuICAgICAgICB1c2VyU2VydmljZS5yZXNldFVzZXIoZW1haWwpO1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ1Jlc2V0IHBhc3N3b3JkIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgICAgICAkbG9nLmRlYnVnKCdSZXNldCBwYXNzd29yZCBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcImhlYWRlciBjb250cm9sbGVyXCIpO1xuICAgICAgICBzY3JvbGxUb1RvcCgpO1xuICAgICAgICBjaGVja0h0bWw1U3RvcmFnZSgpO1xuICAgIH07XG4gICAgaW5pdCgpO1xufTtcblxuSGVhZGVyQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZycsICckbG9jYXRpb24nLCAnJG1vZGFsJywgJyRzdGF0ZScsICckYW5jaG9yU2Nyb2xsJywgJyRzdGF0ZVBhcmFtcycsICd1c2VyU2VydmljZScsICdsZWFndWVTZXJ2aWNlJywgJ3VzZXJNb2RlbCcsICdtZXNzYWdlTW9kZWwnLCAnc2Vhc29uTW9kZWwnXTtcbm1vZHVsZS5leHBvcnRzID0gSGVhZGVyQ29udHJvbGxlcjtcbiIsInZhciBNZXNzYWdlQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJGxvZywgbWVzc2FnZU1vZGVsKSB7XG5cbiAgICAkc2NvcGUubWVzc2FnZURhdGEgPSBtZXNzYWdlTW9kZWw7XG5cbiAgICAkc2NvcGUuZGlzbWlzc01lc3NhZ2UgPSBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgIG1lc3NhZ2UucmVzZXRNZXNzYWdlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJtZXNzYWdlIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG59O1xuXG5NZXNzYWdlQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZycsICdtZXNzYWdlTW9kZWwnXTtcbm1vZHVsZS5leHBvcnRzID0gTWVzc2FnZUNvbnRyb2xsZXI7XG4iLCJ2YXIgRm9vdGVyQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJGxvZywgJGxvY2F0aW9uKSB7XG5cbiAgJHNjb3BlLmhvbWUgPSBmdW5jdGlvbigpIHtcbiAgICAkbG9jYXRpb24udXJsKCcvJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcImZvb3RlciBjb250cm9sbGVyXCIpO1xuICB9O1xuICBpbml0KCk7XG59O1xuXG5Gb290ZXJDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJywgJyRsb2NhdGlvbiddO1xubW9kdWxlLmV4cG9ydHMgPSBGb290ZXJDb250cm9sbGVyO1xuIiwidmFyIENvbmZpcm1Db250cm9sbGVyID0gZnVuY3Rpb24obWVzc2FnZSwgJHNjb3BlLCAkbG9nLCAkbW9kYWxJbnN0YW5jZSkge1xuXG4gICRzY29wZS5tZXNzYWdlID0gbWVzc2FnZTtcblxuICAkc2NvcGUuY29uZmlybSA9IGZ1bmN0aW9uKCkge1xuICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKCk7XG4gIH07XG5cbiAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwiY29uZmlybSBjb250cm9sbGVyXCIpO1xuICB9O1xuICBpbml0KCk7XG5cbn07XG5cbkNvbmZpcm1Db250cm9sbGVyLiRpbmplY3QgPSBbJ21lc3NhZ2UnLCAnJHNjb3BlJywgJyRsb2cnLCAnJG1vZGFsSW5zdGFuY2UnXTtcbm1vZHVsZS5leHBvcnRzID0gQ29uZmlybUNvbnRyb2xsZXI7XG4iLCJ2YXIgRGF0ZVV0aWxzID0gZnVuY3Rpb24oKSB7XG5cbiAgdGhpcy5kYXRlRm9ybWF0ID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIHNvdXJjZTogaHR0cDovL2Jsb2cuc3RldmVubGV2aXRoYW4uY29tL2FyY2hpdmVzL2RhdGUtdGltZS1mb3JtYXRcbiAgICB2YXJcdHRva2VuID0gL2R7MSw0fXxtezEsNH18eXkoPzp5eSk/fChbSGhNc1R0XSlcXDE/fFtMbG9TWl18XCJbXlwiXSpcInwnW14nXSonL2csXG4gICAgICB0aW1lem9uZSA9IC9cXGIoPzpbUE1DRUFdW1NEUF1UfCg/OlBhY2lmaWN8TW91bnRhaW58Q2VudHJhbHxFYXN0ZXJufEF0bGFudGljKSAoPzpTdGFuZGFyZHxEYXlsaWdodHxQcmV2YWlsaW5nKSBUaW1lfCg/OkdNVHxVVEMpKD86Wy0rXVxcZHs0fSk/KVxcYi9nLFxuICAgICAgdGltZXpvbmVDbGlwID0gL1teLStcXGRBLVpdL2csXG4gICAgICBwYWQgPSBmdW5jdGlvbiAodmFsLCBsZW4pIHtcbiAgICAgICAgdmFsID0gU3RyaW5nKHZhbCk7XG4gICAgICAgIGxlbiA9IGxlbiB8fCAyO1xuICAgICAgICB3aGlsZSAodmFsLmxlbmd0aCA8IGxlbikgdmFsID0gXCIwXCIgKyB2YWw7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgICB9O1xuXG4gICAgLy8gUmVnZXhlcyBhbmQgc3VwcG9ydGluZyBmdW5jdGlvbnMgYXJlIGNhY2hlZCB0aHJvdWdoIGNsb3N1cmVcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGUsIG1hc2ssIHV0Yykge1xuICAgICAgdmFyIGRGID0gdGhpcy5kYXRlRm9ybWF0O1xuXG4gICAgICAvLyBZb3UgY2FuJ3QgcHJvdmlkZSB1dGMgaWYgeW91IHNraXAgb3RoZXIgYXJncyAodXNlIHRoZSBcIlVUQzpcIiBtYXNrIHByZWZpeClcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDEgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGRhdGUpID09IFwiW29iamVjdCBTdHJpbmddXCIgJiYgIS9cXGQvLnRlc3QoZGF0ZSkpIHtcbiAgICAgICAgbWFzayA9IGRhdGU7XG4gICAgICAgIGRhdGUgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIC8vIFBhc3NpbmcgZGF0ZSB0aHJvdWdoIERhdGUgYXBwbGllcyBEYXRlLnBhcnNlLCBpZiBuZWNlc3NhcnlcbiAgICAgIGRhdGUgPSBkYXRlID8gbmV3IERhdGUoZGF0ZSkgOiBuZXcgRGF0ZTtcbiAgICAgIGlmIChpc05hTihkYXRlKSkgdGhyb3cgU3ludGF4RXJyb3IoXCJpbnZhbGlkIGRhdGVcIik7XG5cbiAgICAgIG1hc2sgPSBTdHJpbmcoZEYubWFza3NbbWFza10gfHwgbWFzayB8fCBkRi5tYXNrc1tcImRlZmF1bHRcIl0pO1xuXG4gICAgICAvLyBBbGxvdyBzZXR0aW5nIHRoZSB1dGMgYXJndW1lbnQgdmlhIHRoZSBtYXNrXG4gICAgICBpZiAobWFzay5zbGljZSgwLCA0KSA9PSBcIlVUQzpcIikge1xuICAgICAgICBtYXNrID0gbWFzay5zbGljZSg0KTtcbiAgICAgICAgdXRjID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyXHRfID0gdXRjID8gXCJnZXRVVENcIiA6IFwiZ2V0XCIsXG4gICAgICAgIGQgPSBkYXRlW18gKyBcIkRhdGVcIl0oKSxcbiAgICAgICAgRCA9IGRhdGVbXyArIFwiRGF5XCJdKCksXG4gICAgICAgIG0gPSBkYXRlW18gKyBcIk1vbnRoXCJdKCksXG4gICAgICAgIHkgPSBkYXRlW18gKyBcIkZ1bGxZZWFyXCJdKCksXG4gICAgICAgIEggPSBkYXRlW18gKyBcIkhvdXJzXCJdKCksXG4gICAgICAgIE0gPSBkYXRlW18gKyBcIk1pbnV0ZXNcIl0oKSxcbiAgICAgICAgcyA9IGRhdGVbXyArIFwiU2Vjb25kc1wiXSgpLFxuICAgICAgICBMID0gZGF0ZVtfICsgXCJNaWxsaXNlY29uZHNcIl0oKSxcbiAgICAgICAgbyA9IHV0YyA/IDAgOiBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCksXG4gICAgICAgIGZsYWdzID0ge1xuICAgICAgICAgIGQ6ICAgIGQsXG4gICAgICAgICAgZGQ6ICAgcGFkKGQpLFxuICAgICAgICAgIGRkZDogIGRGLmkxOG4uZGF5TmFtZXNbRF0sXG4gICAgICAgICAgZGRkZDogZEYuaTE4bi5kYXlOYW1lc1tEICsgN10sXG4gICAgICAgICAgbTogICAgbSArIDEsXG4gICAgICAgICAgbW06ICAgcGFkKG0gKyAxKSxcbiAgICAgICAgICBtbW06ICBkRi5pMThuLm1vbnRoTmFtZXNbbV0sXG4gICAgICAgICAgbW1tbTogZEYuaTE4bi5tb250aE5hbWVzW20gKyAxMl0sXG4gICAgICAgICAgeXk6ICAgU3RyaW5nKHkpLnNsaWNlKDIpLFxuICAgICAgICAgIHl5eXk6IHksXG4gICAgICAgICAgaDogICAgSCAlIDEyIHx8IDEyLFxuICAgICAgICAgIGhoOiAgIHBhZChIICUgMTIgfHwgMTIpLFxuICAgICAgICAgIEg6ICAgIEgsXG4gICAgICAgICAgSEg6ICAgcGFkKEgpLFxuICAgICAgICAgIE06ICAgIE0sXG4gICAgICAgICAgTU06ICAgcGFkKE0pLFxuICAgICAgICAgIHM6ICAgIHMsXG4gICAgICAgICAgc3M6ICAgcGFkKHMpLFxuICAgICAgICAgIGw6ICAgIHBhZChMLCAzKSxcbiAgICAgICAgICBMOiAgICBwYWQoTCA+IDk5ID8gTWF0aC5yb3VuZChMIC8gMTApIDogTCksXG4gICAgICAgICAgdDogICAgSCA8IDEyID8gXCJhXCIgIDogXCJwXCIsXG4gICAgICAgICAgdHQ6ICAgSCA8IDEyID8gXCJhbVwiIDogXCJwbVwiLFxuICAgICAgICAgIFQ6ICAgIEggPCAxMiA/IFwiQVwiICA6IFwiUFwiLFxuICAgICAgICAgIFRUOiAgIEggPCAxMiA/IFwiQU1cIiA6IFwiUE1cIixcbiAgICAgICAgICBaOiAgICB1dGMgPyBcIlVUQ1wiIDogKFN0cmluZyhkYXRlKS5tYXRjaCh0aW1lem9uZSkgfHwgW1wiXCJdKS5wb3AoKS5yZXBsYWNlKHRpbWV6b25lQ2xpcCwgXCJcIiksXG4gICAgICAgICAgbzogICAgKG8gPiAwID8gXCItXCIgOiBcIitcIikgKyBwYWQoTWF0aC5mbG9vcihNYXRoLmFicyhvKSAvIDYwKSAqIDEwMCArIE1hdGguYWJzKG8pICUgNjAsIDQpLFxuICAgICAgICAgIFM6ICAgIFtcInRoXCIsIFwic3RcIiwgXCJuZFwiLCBcInJkXCJdW2QgJSAxMCA+IDMgPyAwIDogKGQgJSAxMDAgLSBkICUgMTAgIT0gMTApICogZCAlIDEwXVxuICAgICAgICB9O1xuXG4gICAgICByZXR1cm4gbWFzay5yZXBsYWNlKHRva2VuLCBmdW5jdGlvbiAoJDApIHtcbiAgICAgICAgcmV0dXJuICQwIGluIGZsYWdzID8gZmxhZ3NbJDBdIDogJDAuc2xpY2UoMSwgJDAubGVuZ3RoIC0gMSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9KCk7XG5cbiAgdGhpcy5kYXRlRm9ybWF0Lm1hc2tzID0ge1xuICAgIFwiZGVmYXVsdFwiOiAgICAgIFwiZGRkIG1tbSBkZCB5eXl5IEhIOk1NOnNzXCIsXG4gICAgc2hvcnREYXRlOiAgICAgIFwibS9kL3l5XCIsXG4gICAgbWVkaXVtRGF0ZTogICAgIFwibW1tIGQsIHl5eXlcIixcbiAgICBsb25nRGF0ZTogICAgICAgXCJtbW1tIGQsIHl5eXlcIixcbiAgICBmdWxsRGF0ZTogICAgICAgXCJkZGRkLCBtbW1tIGQsIHl5eXlcIixcbiAgICBzaG9ydFRpbWU6ICAgICAgXCJoOk1NIFRUXCIsXG4gICAgbWVkaXVtVGltZTogICAgIFwiaDpNTTpzcyBUVFwiLFxuICAgIGxvbmdUaW1lOiAgICAgICBcImg6TU06c3MgVFQgWlwiLFxuICAgIGlzb0RhdGU6ICAgICAgICBcInl5eXktbW0tZGRcIixcbiAgICBpc29UaW1lOiAgICAgICAgXCJISDpNTTpzc1wiLFxuICAgIGlzb0RhdGVUaW1lOiAgICBcInl5eXktbW0tZGQnVCdISDpNTTpzc1wiLFxuICAgIGlzb1V0Y0RhdGVUaW1lOiBcIlVUQzp5eXl5LW1tLWRkJ1QnSEg6TU06c3MnWidcIlxuICB9O1xuXG4gIHRoaXMuZGF0ZUZvcm1hdC5pMThuID0ge1xuICAgIGRheU5hbWVzOiBbXG4gICAgICBcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiLFxuICAgICAgXCJTdW5kYXlcIiwgXCJNb25kYXlcIiwgXCJUdWVzZGF5XCIsIFwiV2VkbmVzZGF5XCIsIFwiVGh1cnNkYXlcIiwgXCJGcmlkYXlcIiwgXCJTYXR1cmRheVwiXG4gICAgXSxcbiAgICBtb250aE5hbWVzOiBbXG4gICAgICBcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiLFxuICAgICAgXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXG4gICAgXVxuICB9O1xuXG59O1xuXG5EYXRlVXRpbHMuJGluamVjdCA9IFtdO1xubW9kdWxlLmV4cG9ydHMgPSBEYXRlVXRpbHM7XG4iLCJ2YXIgQXBwbGljYXRpb25TZXJ2aWNlID0gZnVuY3Rpb24oJHdpbmRvdywgJGxvY2F0aW9uLCAkbG9nKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqICBBcHBsaWNhdGlvbiBTdGFydHVwIFByb2Nlc3NcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3RhcnR1cCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc3RhcnR1cFByb2Nlc3MoKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgc3RhcnR1cFByb2Nlc3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBmb3JjZVNzbCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBmb3JjZVNzbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoJGxvY2F0aW9uLmhvc3QoKSA9PSAnbG9jYWxob3N0JykgcmV0dXJuO1xuICAgICAgICAgIGlmICgkbG9jYXRpb24ucHJvdG9jb2woKSAhPSAnaHR0cHMnKSB7XG4gICAgICAgICAgICAkd2luZG93LmxvY2F0aW9uLmhyZWYgPSAkbG9jYXRpb24uYWJzVXJsKCkucmVwbGFjZSgnaHR0cCcsICdodHRwcycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRsb2cuZGVidWcoXCJBcHBsaWNhdGlvblNlcnZpY2UgaW5pdCBhcHBsaWNhdGlvbiBzZXJ2aWNlXCIpO1xuICAgICAgICB9O1xuICAgICAgICBpbml0KCk7XG5cbiAgICB9O1xuXG5BcHBsaWNhdGlvblNlcnZpY2UuJGluamVjdCA9IFsnJHdpbmRvdycsICckbG9jYXRpb24nLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBBcHBsaWNhdGlvblNlcnZpY2U7XG4iLCJ2YXIgRm9ybWF0dGVkRGF0ZURpcmVjdGl2ZSA9IGZ1bmN0aW9uKGRhdGVVdGlscykge1xuICByZXR1cm4ge1xuICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMsIGN0cmwpIHtcbiAgICAgIGN0cmwuJGZvcm1hdHRlcnMudW5zaGlmdChmdW5jdGlvbiAobW9kZWxWYWx1ZSkge1xuICAgICAgICByZXR1cm4gZGF0ZVV0aWxzLmRhdGVGb3JtYXQobW9kZWxWYWx1ZSwgXCJtbW0gZCB5eXl5IGg6TU0gdHQgKFopXCIpXG4gICAgICB9KTtcblxuICAgICAgY3RybC4kcGFyc2Vycy51bnNoaWZ0KGZ1bmN0aW9uICh2aWV3VmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGRhdGVVdGlscy5kYXRlRm9ybWF0KG1vZGVsVmFsdWUsIFwibW1tIGQgeXl5eSBoOk1NIHR0IChaKVwiKVxuICAgICAgfSk7XG4gICAgfSxcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIHJlcXVpcmU6ICduZ01vZGVsJ1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZvcm1hdHRlZERhdGVEaXJlY3RpdmU7XG4iLCJ2YXIgTWF0Y2hEaXJlY3RpdmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZXF1aXJlOiAnbmdNb2RlbCcsXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbSwgYXR0cnMsIGN0cmwpIHtcbiAgICAgICAgICAgIHNjb3BlLiR3YXRjaCgnWycgKyBhdHRycy5uZ01vZGVsICsgJywgJyArIGF0dHJzLm1hdGNoICsgJ10nLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBhID0gdmFsdWVbMF0gfHwgJyc7XG4gICAgICAgICAgICAgICAgdmFyIGIgPSB2YWx1ZVsxXSB8fCAnJztcbiAgICAgICAgICAgICAgICBjdHJsLiRzZXRWYWxpZGl0eSgnbWF0Y2gnLCBhID09PSBiKTtcbiAgICAgICAgICAgIH0sIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXRjaERpcmVjdGl2ZTtcbiIsInZhciBGb2N1c0RpcmVjdGl2ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBGT0NVU19DTEFTUyA9ICduZy1mb2N1c2VkJztcbiAgICByZXR1cm4ge1xuICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICByZXF1aXJlOiAnbmdNb2RlbCcsXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3RybCkge1xuICAgICAgICAgICAgY3RybC4kZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgZWxlbWVudC5iaW5kKCdmb2N1cycsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoRk9DVVNfQ0xBU1MpO1xuICAgICAgICAgICAgICAgIHNjb3BlLiRhcHBseShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgY3RybC4kZm9jdXNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS5iaW5kKCdibHVyJywgZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDbGFzcyhGT0NVU19DTEFTUyk7XG4gICAgICAgICAgICAgICAgc2NvcGUuJGFwcGx5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBjdHJsLiRmb2N1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRm9jdXNEaXJlY3RpdmU7XG4iLCJ2YXIgcmNTdWJtaXREaXJlY3RpdmUgPSB7XG4gICdyY1N1Ym1pdCc6IFsnJHBhcnNlJywgZnVuY3Rpb24gKCRwYXJzZSkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgcmVxdWlyZTogWydyY1N1Ym1pdCcsICc/Zm9ybSddLFxuICAgICAgY29udHJvbGxlcjogWyckc2NvcGUnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XG5cbiAgICAgICAgdmFyIGZvcm1Db250cm9sbGVyID0gbnVsbDtcbiAgICAgICAgdmFyIGF0dGVtcHRIYW5kbGVycyA9IFtdO1xuXG4gICAgICAgIHRoaXMuYXR0ZW1wdGVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5vbkF0dGVtcHQgPSBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgICAgYXR0ZW1wdEhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zZXRBdHRlbXB0ZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB0aGlzLmF0dGVtcHRlZCA9IHRydWU7XG5cbiAgICAgICAgICBhbmd1bGFyLmZvckVhY2goYXR0ZW1wdEhhbmRsZXJzLCBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlcigpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2V0Rm9ybUNvbnRyb2xsZXIgPSBmdW5jdGlvbihjb250cm9sbGVyKSB7XG4gICAgICAgICAgZm9ybUNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubmVlZHNBdHRlbnRpb24gPSBmdW5jdGlvbiAoZmllbGRNb2RlbENvbnRyb2xsZXIpIHtcbiAgICAgICAgICBpZiAoIWZvcm1Db250cm9sbGVyKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICBpZiAoZmllbGRNb2RlbENvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBmaWVsZE1vZGVsQ29udHJvbGxlci4kaW52YWxpZCAmJlxuICAgICAgICAgICAgICAoZmllbGRNb2RlbENvbnRyb2xsZXIuJGRpcnR5IHx8IHRoaXMuYXR0ZW1wdGVkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZvcm1Db250cm9sbGVyICYmIGZvcm1Db250cm9sbGVyLiRpbnZhbGlkICYmXG4gICAgICAgICAgICAgIChmb3JtQ29udHJvbGxlci4kZGlydHkgfHwgdGhpcy5hdHRlbXB0ZWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1dLFxuICAgICAgY29tcGlsZTogZnVuY3Rpb24oY0VsZW1lbnQsIGNBdHRyaWJ1dGVzLCB0cmFuc2NsdWRlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcHJlOiBmdW5jdGlvbihzY29wZSwgZm9ybUVsZW1lbnQsIGF0dHJpYnV0ZXMsIGNvbnRyb2xsZXJzKSB7XG5cbiAgICAgICAgICAgIHZhciBzdWJtaXRDb250cm9sbGVyID0gY29udHJvbGxlcnNbMF07XG4gICAgICAgICAgICB2YXIgZm9ybUNvbnRyb2xsZXIgPSAoY29udHJvbGxlcnMubGVuZ3RoID4gMSkgPyBjb250cm9sbGVyc1sxXSA6IG51bGw7XG5cbiAgICAgICAgICAgIHN1Ym1pdENvbnRyb2xsZXIuc2V0Rm9ybUNvbnRyb2xsZXIoZm9ybUNvbnRyb2xsZXIpO1xuXG4gICAgICAgICAgICBzY29wZS5yYyA9IHNjb3BlLnJjIHx8IHt9O1xuICAgICAgICAgICAgc2NvcGUucmNbYXR0cmlidXRlcy5uYW1lXSA9IHN1Ym1pdENvbnRyb2xsZXI7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBwb3N0OiBmdW5jdGlvbihzY29wZSwgZm9ybUVsZW1lbnQsIGF0dHJpYnV0ZXMsIGNvbnRyb2xsZXJzKSB7XG5cbiAgICAgICAgICAgIHZhciBzdWJtaXRDb250cm9sbGVyID0gY29udHJvbGxlcnNbMF07XG4gICAgICAgICAgICB2YXIgZm9ybUNvbnRyb2xsZXIgPSAoY29udHJvbGxlcnMubGVuZ3RoID4gMSkgPyBjb250cm9sbGVyc1sxXSA6IG51bGw7XG4gICAgICAgICAgICB2YXIgZm4gPSAkcGFyc2UoYXR0cmlidXRlcy5yY1N1Ym1pdCk7XG5cbiAgICAgICAgICAgIGZvcm1FbGVtZW50LmJpbmQoJ3N1Ym1pdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgc3VibWl0Q29udHJvbGxlci5zZXRBdHRlbXB0ZWQoKTtcbiAgICAgICAgICAgICAgaWYgKCFzY29wZS4kJHBoYXNlKSBzY29wZS4kYXBwbHkoKTtcblxuICAgICAgICAgICAgICBpZiAoIWZvcm1Db250cm9sbGVyLiR2YWxpZCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICAgIHNjb3BlLiRhcHBseShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBmbihzY29wZSwgeyRldmVudDpldmVudH0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9O1xuICB9XVxufTsiLCJ2YXIgcmNWZXJpZnlTZXREaXJlY3RpdmUgPSB7XG4gICdyY1ZlcmlmeVNldCc6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgIHJlcXVpcmU6IFsnXnJjU3VibWl0JywgJ25nTW9kZWwnXSxcbiAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cmlidXRlcywgY29udHJvbGxlcnMpIHtcbiAgICAgICAgdmFyIHN1Ym1pdENvbnRyb2xsZXIgPSBjb250cm9sbGVyc1swXTtcbiAgICAgICAgdmFyIG1vZGVsQ29udHJvbGxlciA9IGNvbnRyb2xsZXJzWzFdO1xuXG4gICAgICAgIHN1Ym1pdENvbnRyb2xsZXIub25BdHRlbXB0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIG1vZGVsQ29udHJvbGxlci4kc2V0Vmlld1ZhbHVlKGVsZW1lbnQudmFsKCkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59OyIsIi8qIGF0dHJpYnV0ZSB3aWxsIGVuZm9yY2UgYSByZWcgZXggcGF0dGVybiBpZiB0aGUgZmllbGQgaXMgbWFya2VkIGFzIG5nLXJlcXVpcmVkICovXG52YXIgUmVxdWlyZWRQYXR0ZXJuRGlyZWN0aXZlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6IFwiQVwiLFxuICAgICAgICByZXF1aXJlOiBcIm5nTW9kZWxcIixcbiAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsLCBhdHRycywgbmdNb2RlbCkge1xuICAgICAgICAgICAgdmFyIHZhbGlkYXRvciwgcGF0dGVyblZhbGlkYXRvcixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuID0gYXR0cnMucnBhdHRlcm4sXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiggcGF0dGVybiApIHtcbiAgICAgICAgICAgICAgICBpZiAocGF0dGVybi5tYXRjaCgvXlxcLyguKilcXC8kLykpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiA9IG5ldyBSZWdFeHAocGF0dGVybi5zdWJzdHIoMSwgcGF0dGVybi5sZW5ndGggLSAyKSk7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm5WYWxpZGF0b3IgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHBhdHRlcm4sIHZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVyblZhbGlkYXRvciA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGF0dGVybk9iaiA9IHNjb3BlLiRldmFsKHBhdHRlcm4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwYXR0ZXJuT2JqIHx8ICFwYXR0ZXJuT2JqLnRlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkICcgKyBwYXR0ZXJuICsgJyB0byBiZSBhIFJlZ0V4cCBidXQgd2FzICcgKyBwYXR0ZXJuT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0ZShwYXR0ZXJuT2JqLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZ01vZGVsLiRmb3JtYXR0ZXJzLnB1c2gocGF0dGVyblZhbGlkYXRvcik7XG4gICAgICAgICAgICBuZ01vZGVsLiRwYXJzZXJzLnB1c2gocGF0dGVyblZhbGlkYXRvcik7XG5cbiAgICAgICAgICAgIGF0dHJzLiRvYnNlcnZlKFwicmVxdWlyZWRcIiwgZnVuY3Rpb24obmV3dmFsKSB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQgPSBuZXd2YWw7XG4gICAgICAgICAgICAgICAgcGF0dGVyblZhbGlkYXRvcihuZ01vZGVsLiR2aWV3VmFsdWUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHJlZ2V4cCwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiggdmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PT0gXCJcIiB8fCAhcmVxdWlyZWQgfHwgcmVnZXhwLnRlc3QodmFsdWUpICkge1xuICAgICAgICAgICAgICAgICAgICBuZ01vZGVsLiRzZXRWYWxpZGl0eSgncGF0dGVybicsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZ01vZGVsLiRzZXRWYWxpZGl0eSgncGF0dGVybicsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVxdWlyZWRQYXR0ZXJuRGlyZWN0aXZlOyIsInZhciBTZWxlY3RPbkNsaWNrRGlyZWN0aXZlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICBlbGVtZW50Lm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3QoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2VsZWN0T25DbGlja0RpcmVjdGl2ZTtcbiIsInZhciBSZWdpc3RlclRlcm1zQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRtb2RhbEluc3RhbmNlLCAkc2NvcGUsICRsb2cpIHtcblxuICAkc2NvcGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2xvc2UnKTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwicmVnaXN0ZXIgdGVybXMgYW5kIGNvbmRpdGlvbnMgY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuUmVnaXN0ZXJUZXJtc0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJG1vZGFsSW5zdGFuY2UnLCAnJHNjb3BlJywgJyRsb2cnXTtcbm1vZHVsZS5leHBvcnRzID0gUmVnaXN0ZXJUZXJtc0NvbnRyb2xsZXI7XG4iLCJ2YXIgVXNlclJlc2V0Q29udHJvbGxlciA9IGZ1bmN0aW9uKCRtb2RhbEluc3RhbmNlLCAkc2NvcGUsICRsb2cpIHtcblxuICAkc2NvcGUudXNlckRhdGEgPSB7XG4gICAgZW1haWw6IFwiXCJcbiAgfTtcblxuICAkc2NvcGUucmVzZXQgPSBmdW5jdGlvbiAoZW1haWwpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZShlbWFpbCk7XG4gIH07XG5cbiAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgfTtcblxuICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICB9O1xuXG4gICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwidXNlciByZXNldCBjb250cm9sbGVyXCIpO1xuICB9O1xuICBpbml0KCk7XG59O1xuXG5Vc2VyUmVzZXRDb250cm9sbGVyLiRpbmplY3QgPSBbJyRtb2RhbEluc3RhbmNlJywgJyRzY29wZScsICckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IFVzZXJSZXNldENvbnRyb2xsZXI7XG4iLCJ2YXIgTmV3TGVhZ3VlQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJGxvZywgJG1vZGFsSW5zdGFuY2UsIHdlZWtTZXJ2aWNlLCBzZWFzb25Nb2RlbCkge1xuXG4gICAgJHNjb3BlLnNlYXNvbnMgPSBhbmd1bGFyLmNvcHkoc2Vhc29uTW9kZWwuY3VycmVudFNlYXNvbnMpO1xuXG4gICAgJHNjb3BlLm1heFBpY2tzUGVyV2VlayA9IFtcbiAgICAgIHsgbnVtYmVyOiBudWxsLCBkaXNwbGF5OiAnUGljayBhIGxvc2VyIGZvciBldmVyeSBnYW1lJyB9LFxuICAgICAgeyBudW1iZXI6IDI1LCBkaXNwbGF5OiAnUGljayB1cCB0byAyNSBsb3NlcnMnIH0sXG4gICAgICB7IG51bWJlcjogMTUsIGRpc3BsYXk6ICdQaWNrIHVwIHRvIDE1IGxvc2VycycgfSxcbiAgICAgIHsgbnVtYmVyOiAxMCwgZGlzcGxheTogJ1BpY2sgdXAgdG8gMTAgbG9zZXJzJyB9LFxuICAgICAgeyBudW1iZXI6IDUsIGRpc3BsYXk6ICdQaWNrIHVwIHRvIDUgbG9zZXJzJyB9LFxuICAgICAgeyBudW1iZXI6IDIsIGRpc3BsYXk6ICdQaWNrIHVwIHRvIDIgbG9zZXJzJyB9LFxuICAgICAgeyBudW1iZXI6IDEsIGRpc3BsYXk6ICdQaWNrIDEgbG9zZXInIH1cbiAgICBdO1xuXG4gICAgJHNjb3BlLmxlYWd1ZURhdGEgPSB7XG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBuaWNrbmFtZTogJycsXG4gICAgICAgIHNlYXNvbl9pZDogJHNjb3BlLnNlYXNvbnNbJHNjb3BlLnNlYXNvbnMubGVuZ3RoIC0gMV0uaWQsXG4gICAgICAgIHN0YXJ0X3dlZWtfaWQ6ICcnLFxuICAgICAgICBwdWJsaWM6IHRydWUsXG4gICAgICAgIGVsaW1pbmF0aW9uOiBmYWxzZSxcbiAgICAgICAgbWF4X3RlYW1zX3Blcl91c2VyOiAnJyxcbiAgICAgICAgbWF4X3BpY2tzX3Blcl93ZWVrOiAkc2NvcGUubWF4UGlja3NQZXJXZWVrWzBdLm51bWJlclxuICAgIH07XG5cbiAgICAkc2NvcGUuZ2V0U2Vhc29uV2Vla3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICRzY29wZS5jcmVhdGVCdG5EaXNhYmxlZCA9IHRydWU7XG4gICAgICB3ZWVrU2VydmljZS5nZXRBdmFpbGFibGVXZWVrcygkc2NvcGUubGVhZ3VlRGF0YS5zZWFzb25faWQpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgJHNjb3BlLndlZWtzID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAkc2NvcGUubGVhZ3VlRGF0YS5zdGFydF93ZWVrX2lkID0gJHNjb3BlLndlZWtzWzBdLmlkO1xuICAgICAgICAgICRzY29wZS5jcmVhdGVCdG5EaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNyZWF0ZUxlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgICAgJG1vZGFsSW5zdGFuY2UuY2xvc2UobGVhZ3VlKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2FuY2VsJyk7XG4gICAgfTtcblxuICAgICRzY29wZS5oYXNFcnJvciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRlcnJvcltwcm9wZXJ0eV07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKFwibmV3IGxlYWd1ZSBjb250cm9sbGVyXCIpO1xuICAgICAgICAkc2NvcGUuZ2V0U2Vhc29uV2Vla3MoKTtcbiAgICB9O1xuICAgIGluaXQoKTtcblxufTtcblxuTmV3TGVhZ3VlQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZycsICckbW9kYWxJbnN0YW5jZScsICd3ZWVrU2VydmljZScsICdzZWFzb25Nb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBOZXdMZWFndWVDb250cm9sbGVyO1xuIiwidmFyIFZpZXdMZWFndWVDb250cm9sbGVyID0gZnVuY3Rpb24obGVhZ3VlLCBsZWFndWVXZWVrcywgbGVhZ3VlVGVhbXMsICRzY29wZSwgJGxvZywgJG1vZGFsLCAkbG9jYXRpb24sICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCB1c2VyTW9kZWwsIG1lc3NhZ2VNb2RlbCwgdXNlclNlcnZpY2UsIHdlZWtTZXJ2aWNlLCB0ZWFtU2VydmljZSwgbGVhZ3VlU2VydmljZSkge1xuXG4gIHZhciBzZXRNZXNzYWdlU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIV8uaGFzKCRzY29wZS51c2VyTW9kZWwubGVhZ3VlTWVzc2FnZU9wZW4sICRzY29wZS5sZWFndWVEYXRhLmlkKSkge1xuICAgICAgJHNjb3BlLnVzZXJNb2RlbC5sZWFndWVNZXNzYWdlT3Blblskc2NvcGUubGVhZ3VlRGF0YS5pZF0gPSAkc2NvcGUubGVhZ3VlRGF0YS5tZXNzYWdlICYmICRzY29wZS5sZWFndWVEYXRhLm1lc3NhZ2UubGVuZ3RoID4gMDtcbiAgICB9XG4gIH07XG5cbiAgJHNjb3BlLmxlYWd1ZURhdGEgPSBsZWFndWUuZGF0YTtcblxuICAkc2NvcGUubGVhZ3VlV2Vla3MgPSBsZWFndWVXZWVrcy5kYXRhO1xuICAkc2NvcGUubGVhZ3VlVGVhbXMgPSBsZWFndWVUZWFtcy5kYXRhO1xuXG4gIC8vIHBhZ2luYXRpb25cbiAgJHNjb3BlLmN1cnJlbnRUZWFtUGFnZSA9IDE7XG4gICRzY29wZS50ZWFtc1BlclBhZ2UgPSAxMDA7XG5cbiAgJHNjb3BlLnRlYW1PcHRpb25zID0geyBhY3RpdmU6IHRydWUsIGluYWN0aXZlOiBmYWxzZSB9O1xuXG4gICRzY29wZS50ZWFtUXVlcnkgPSAnJztcblxuICAkc2NvcGUubGVhZ3VlRHJvcGRvd24gPSB7XG4gICAgaXNvcGVuOiBmYWxzZVxuICB9O1xuXG4gICRzY29wZS5zZWxlY3RlZFdlZWtTbHVnID0gJHN0YXRlUGFyYW1zLndlZWs7XG5cbiAgJHNjb3BlLnVzZXJNb2RlbCA9IHVzZXJNb2RlbDtcblxuICAkc2NvcGUuaW5QbGF5ID0gZnVuY3Rpb24odGVhbSkge1xuICAgIHJldHVybiAodGVhbS5hY3RpdmUgJiYgdGVhbS5hbGl2ZSkgPyAwIDogMTtcbiAgfTtcblxuICAkc2NvcGUudG9nZ2xlRHJvcGRvd24gPSBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgJHNjb3BlLmxlYWd1ZURyb3Bkb3duLmlzb3BlbiA9ICEkc2NvcGUubGVhZ3VlRHJvcGRvd24uaXNvcGVuO1xuICB9O1xuXG4gICRzY29wZS5jaGFuZ2VXZWVrID0gZnVuY3Rpb24oc2x1Zykge1xuICAgIGlmIChzbHVnKSB7XG4gICAgICAkbG9jYXRpb24uc2VhcmNoKCd3ZWVrJywgc2x1Zyk7IC8vIGFkZCAvIHJlcGxhY2UgdGhlIHdlZWsgcXVlcnkgcGFyYW1cbiAgICB9IGVsc2Uge1xuICAgICAgJGxvY2F0aW9uLnNlYXJjaCgnd2VlaycsIG51bGwpOyAvLyByZW1vdmUgd2VlayBxdWVyeSBwYXJhbVxuICAgIH1cbiAgfTtcblxuICAkc2NvcGUuc2VhcmNoID0gZnVuY3Rpb24oaXRlbSkge1xuICAgIGlmIChpdGVtLm5hbWUuaW5kZXhPZigkc2NvcGUudGVhbVF1ZXJ5LnRvTG93ZXJDYXNlKCkpICE9IC0xIHx8IGl0ZW0uY29hY2hfbmFtZXMuam9pbignLCAnKS5pbmRleE9mKCRzY29wZS50ZWFtUXVlcnkudG9Mb3dlckNhc2UoKSkgIT0gLTEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgJHNjb3BlLnN0YXJ0cyA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgIHZhciBzdGFydHNMYWJlbCA9IChsZWFndWUuc3RhcnRlZCkgPyAnU3RhcnRlZCAnIDogJ1N0YXJ0cyAnO1xuICAgIHJldHVybiBzdGFydHNMYWJlbCArIGxlYWd1ZS5zdGFydF93ZWVrX2Rpc3BsYXk7XG4gIH07XG5cbiAgJHNjb3BlLmlzQ29tbWlzaCA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgIHJldHVybiBsZWFndWUuY29tbWlzaF9pZHMuaW5kZXhPZih1c2VyTW9kZWwudXNlci5pZCkgPiAtMTtcbiAgfTtcblxuICAkc2NvcGUuaXNBZG1pbiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB1c2VyTW9kZWwudXNlci5hZG1pbjtcbiAgfTtcblxuICAkc2NvcGUuaGFzVGVhbUluTGVhZ3VlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGZvdW5kID0gZmFsc2U7XG4gICAgXy5lYWNoKCRzY29wZS5sZWFndWVUZWFtcywgZnVuY3Rpb24odGVhbSkge1xuICAgICAgaWYgKHRlYW0uY29hY2hfaWRzLmluZGV4T2YodXNlck1vZGVsLnVzZXIuaWQpID4gLTEpIHtcbiAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmb3VuZDtcbiAgfTtcblxuICAkc2NvcGUuaGFzRGVhY3RpdmF0ZWRUZWFtcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBmb3VuZERlYWN0aXZhdGVkID0gZmFsc2U7XG4gICAgXy5lYWNoKCRzY29wZS5sZWFndWVUZWFtcywgZnVuY3Rpb24odGVhbSkge1xuICAgICAgaWYgKHRlYW0uYWN0aXZlID09IGZhbHNlKSB7XG4gICAgICAgIGZvdW5kRGVhY3RpdmF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmb3VuZERlYWN0aXZhdGVkO1xuICB9O1xuXG4gICRzY29wZS5pc0NvYWNoID0gZnVuY3Rpb24odGVhbSkge1xuICAgIHJldHVybiB0ZWFtLmNvYWNoX2lkcy5pbmRleE9mKHVzZXJNb2RlbC51c2VyLmlkKSA+IC0xO1xuICB9O1xuXG4gICRzY29wZS5jb2FjaE5hbWUgPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgcmV0dXJuIHRlYW0uY29hY2hfbmFtZXMuam9pbignLCAnKTtcbiAgfTtcblxuICAkc2NvcGUuZWRpdExlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuXG4gICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvZWRpdC9sZWFndWUuZWRpdC50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnRWRpdExlYWd1ZUNvbnRyb2xsZXInLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICB3ZWVrczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHdlZWtTZXJ2aWNlLmdldEF2YWlsYWJsZVdlZWtzKGxlYWd1ZS5zZWFzb25faWQpO1xuICAgICAgICB9LFxuICAgICAgICBsZWFndWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBsZWFndWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihsZWFndWUpIHtcbiAgICAgIGxlYWd1ZVNlcnZpY2UudXBkYXRlTGVhZ3VlKGxlYWd1ZSk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnRWRpdCBsZWFndWUgbW9kYWwgZGlzbWlzc2VkLi4uJyk7XG4gICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ0VkaXQgbGVhZ3VlIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgIH0pO1xuXG4gIH07XG5cbiAgJHNjb3BlLm9wZW5MZWFndWUgPSBmdW5jdGlvbihsZWFndWUpIHtcbiAgICBsZWFndWVTZXJ2aWNlLm9wZW5MZWFndWUobGVhZ3VlKVxuICB9O1xuXG4gICRzY29wZS5jbG9zZUxlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgIGxlYWd1ZVNlcnZpY2UuY2xvc2VMZWFndWUobGVhZ3VlKVxuICB9O1xuXG4gICRzY29wZS5zaG93VGVhbSA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAkbG9jYXRpb24ucGF0aCgkbG9jYXRpb24ucGF0aCgpICsgJy90ZWFtLycgKyB0ZWFtLmlkKTsgLy8gcGF0aCB3aWxsIHJldGFpbiBxdWVyeSBwYXJhbXNcbiAgfTtcblxuICAkc2NvcGUuY29udGFjdENvbW1pc2ggPSBmdW5jdGlvbihsZWFndWUpIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2NvbnRhY3QvbGVhZ3VlLmNvbnRhY3QudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0xlYWd1ZUNvbnRhY3RDb250cm9sbGVyJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgbGVhZ3VlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gbGVhZ3VlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKHBhcmFtcykge1xuICAgICAgbGVhZ3VlU2VydmljZS5zZW5kQ29tbWlzaE1lc3NhZ2UocGFyYW1zLmxlYWd1ZSwgcGFyYW1zLm1lc3NhZ2UpXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnQ29udGFjdCBsZWFndWUgbW9kYWwgZGlzbWlzc2VkLi4uJyk7XG4gICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ0NvbnRhY3QgY29tbWlzaCBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcblxuICB9O1xuXG4gICRzY29wZS5yZXBvcnRBYnVzZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHVibGljL2FidXNlL2FidXNlLnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdBYnVzZUNvbnRyb2xsZXInXG4gICAgfSk7XG5cbiAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgIHVzZXJTZXJ2aWNlLmNvbnRhY3RVcyhtZXNzYWdlKTtcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ0NvbnRhY3QgdXMgY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgICAkbG9nLmRlYnVnKCdjb250YWN0IHVzIGRpc21pc3NlZC4uLicpO1xuICAgIH0pO1xuXG4gIH07XG5cbiAgJHNjb3BlLnVwZGF0ZU1lc3NhZ2UgPSBmdW5jdGlvbihsZWFndWUpIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL21lc3NhZ2UvbGVhZ3VlLm1lc3NhZ2UudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0xlYWd1ZU1lc3NhZ2VDb250cm9sbGVyJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgbGVhZ3VlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gbGVhZ3VlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKHBhcmFtcykge1xuICAgICAgbGVhZ3VlU2VydmljZS51cGRhdGVMZWFndWVNZXNzYWdlKHBhcmFtcy5sZWFndWUsIHBhcmFtcy5zZW5kQWxpdmUsIHBhcmFtcy5zZW5kQWxsKVxuICAgICAgICAudGhlbihmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgICAgJHNjb3BlLmxlYWd1ZURhdGEubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIH0pO1xuXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnTGVhZ3VlIG1lc3NhZ2UgbW9kYWwgZGlzbWlzc2VkLi4uJyk7XG4gICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ1VwZGF0ZSBsZWFndWUgbWVzc2FnZSBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcblxuICB9O1xuXG4gICRzY29wZS5qb2luTGVhZ3VlID0gZnVuY3Rpb24obGVhZ3VlKSB7XG5cbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9qb2luL2xlYWd1ZS5qb2luLnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdMZWFndWVKb2luQ29udHJvbGxlcicsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIGxlYWd1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGxlYWd1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbih0ZWFtKSB7XG4gICAgICB0ZWFtU2VydmljZS5jcmVhdGVUZWFtKHRlYW0pO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ0pvaW4gbGVhZ3VlIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdKb2luIGxlYWd1ZSBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcblxuICB9O1xuXG4gICRzY29wZS5yZXF1ZXN0SW52aXRlID0gZnVuY3Rpb24obGVhZ3VlKSB7XG5cbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9pbnZpdGUvcmVxdWVzdC9sZWFndWUuaW52aXRlLnJlcXVlc3QudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0xlYWd1ZUludml0ZVJlcXVlc3RDb250cm9sbGVyJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgbGVhZ3VlSWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBsZWFndWUuaWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24gKGludml0YXRpb24pIHtcbiAgICAgIGxlYWd1ZVNlcnZpY2UucmVxdWVzdEludml0ZShpbnZpdGF0aW9uKTtcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAkbG9nLmRlYnVnKCdSZXF1ZXN0IGludml0ZSBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnUmVxdWVzdCBpbnZpdGUgY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAkc2NvcGUuaW52aXRlID0gZnVuY3Rpb24obGVhZ3VlSWQsIGlzQ29tbWlzaCwgbGVhZ3VlQ2xvc2VkKSB7XG5cbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9pbnZpdGUvbGVhZ3VlLmludml0ZS50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnTGVhZ3VlSW52aXRlQ29udHJvbGxlcicsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIGxlYWd1ZUlkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gbGVhZ3VlSWQ7XG4gICAgICAgIH0sXG4gICAgICAgIGlzQ29tbWlzaDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGlzQ29tbWlzaDtcbiAgICAgICAgfSxcbiAgICAgICAgbGVhZ3VlQ2xvc2VkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gbGVhZ3VlQ2xvc2VkO1xuICAgICAgICB9LFxuICAgICAgICBpbnZpdGF0aW9uczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKGlzQ29tbWlzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGxlYWd1ZVNlcnZpY2UuZ2V0SW52aXRlcyhsZWFndWVJZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7IGRhdGE6IFtdIH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKGludml0YXRpb24pIHtcbiAgICAgIGxlYWd1ZVNlcnZpY2UuY3JlYXRlSW52aXRlKGludml0YXRpb24pO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ0ludml0ZSBjb2FjaCBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICB9KTtcbiAgfTtcblxuICAkc2NvcGUuc2hvd0RlYWN0aXZhdGVkVGVhbXMgPSBmdW5jdGlvbihzaG93KSB7XG4gICAgJHNjb3BlLnRlYW1PcHRpb25zLmluYWN0aXZlID0gc2hvdztcbiAgICBpZiAoc2hvdykge1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnaW5mbycsIGNvbnRlbnQ6ICdTaG93aW5nIGRlYWN0aXZhdGVkIHRlYW1zIChpZiBhbnkpJyB9LCBmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ2luZm8nLCBjb250ZW50OiAnSGlkaW5nIGRlYWN0aXZhdGVkIHRlYW1zIChpZiBhbnkpJyB9LCBmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gICRzY29wZS5yZXNldFNlYXJjaCA9IGZ1bmN0aW9uKCkge1xuICAgICRzY29wZS50ZWFtUXVlcnkgPSAnJztcbiAgICAkc2NvcGUuY3VycmVudFRlYW1QYWdlID0gMTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwidmlldyBsZWFndWUgY29udHJvbGxlclwiKTtcbiAgICBzZXRNZXNzYWdlU3RhdGUoKTtcbiAgfTtcbiAgaW5pdCgpO1xuXG59O1xuXG5WaWV3TGVhZ3VlQ29udHJvbGxlci4kaW5qZWN0ID0gWydsZWFndWUnLCdsZWFndWVXZWVrcycsICdsZWFndWVUZWFtcycsICckc2NvcGUnLCAnJGxvZycsICckbW9kYWwnLCAnJGxvY2F0aW9uJywgJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAndXNlck1vZGVsJywgJ21lc3NhZ2VNb2RlbCcsICd1c2VyU2VydmljZScsICd3ZWVrU2VydmljZScsICd0ZWFtU2VydmljZScsICdsZWFndWVTZXJ2aWNlJ107XG5tb2R1bGUuZXhwb3J0cyA9IFZpZXdMZWFndWVDb250cm9sbGVyO1xuIiwidmFyIEVkaXRMZWFndWVDb250cm9sbGVyID0gZnVuY3Rpb24obGVhZ3VlLCAkc2NvcGUsICRsb2csICRsb2NhdGlvbiwgJG1vZGFsSW5zdGFuY2UsIHdlZWtTZXJ2aWNlLCBzZWFzb25Nb2RlbCkge1xuXG4gICAgJHNjb3BlLnNlYXNvbnMgPSBhbmd1bGFyLmNvcHkoc2Vhc29uTW9kZWwuY3VycmVudFNlYXNvbnMpO1xuXG4gICAgJHNjb3BlLmxlYWd1ZURhdGEgPSBhbmd1bGFyLmNvcHkobGVhZ3VlKTtcblxuICAgICRzY29wZS5tYXhQaWNrc1BlcldlZWsgPSBbXG4gICAgICB7IG51bWJlcjogbnVsbCwgZGlzcGxheTogJ1BpY2sgYSBsb3NlciBmb3IgZXZlcnkgZ2FtZScgfSxcbiAgICAgIHsgbnVtYmVyOiAyNSwgZGlzcGxheTogJ1BpY2sgdXAgdG8gMjUgbG9zZXJzJyB9LFxuICAgICAgeyBudW1iZXI6IDE1LCBkaXNwbGF5OiAnUGljayB1cCB0byAxNSBsb3NlcnMnIH0sXG4gICAgICB7IG51bWJlcjogMTAsIGRpc3BsYXk6ICdQaWNrIHVwIHRvIDEwIGxvc2VycycgfSxcbiAgICAgIHsgbnVtYmVyOiA1LCBkaXNwbGF5OiAnUGljayB1cCB0byA1IGxvc2VycycgfSxcbiAgICAgIHsgbnVtYmVyOiAyLCBkaXNwbGF5OiAnUGljayB1cCB0byAyIGxvc2VycycgfSxcbiAgICAgIHsgbnVtYmVyOiAxLCBkaXNwbGF5OiAnUGljayAxIGxvc2VyJyB9XG4gICAgXTtcblxuICAgICRzY29wZS5nZXRTZWFzb25XZWVrcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgJHNjb3BlLmVkaXRCdG5EaXNhYmxlZCA9IHRydWU7XG4gICAgICB3ZWVrU2VydmljZS5nZXRBdmFpbGFibGVXZWVrcygkc2NvcGUubGVhZ3VlRGF0YS5zZWFzb25faWQpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgJHNjb3BlLndlZWtzID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAkc2NvcGUuZWRpdEJ0bkRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAkc2NvcGUudXBkYXRlTGVhZ3VlID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZShsZWFndWUpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gICAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmhhc0Vycm9yID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICAgIH07XG5cbiAgICAkc2NvcGUuaGFzUHJvcGVydHlFcnJvciA9IGZ1bmN0aW9uKGlucHV0LCBwcm9wZXJ0eSkge1xuICAgICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJlZGl0IGxlYWd1ZSBjb250cm9sbGVyXCIpO1xuICAgICAgICBpZiAoISRzY29wZS5sZWFndWVEYXRhLnN0YXJ0ZWQpIHtcbiAgICAgICAgICAkc2NvcGUuZ2V0U2Vhc29uV2Vla3MoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5FZGl0TGVhZ3VlQ29udHJvbGxlci4kaW5qZWN0ID0gWydsZWFndWUnLCAnJHNjb3BlJywgJyRsb2cnLCAnJGxvY2F0aW9uJywgJyRtb2RhbEluc3RhbmNlJywgJ3dlZWtTZXJ2aWNlJywgJ3NlYXNvbk1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IEVkaXRMZWFndWVDb250cm9sbGVyO1xuIiwidmFyIExlYWd1ZUNvbnRhY3RDb250cm9sbGVyID0gZnVuY3Rpb24obGVhZ3VlLCAkbW9kYWxJbnN0YW5jZSwgJHNjb3BlLCAkbG9nKSB7XG5cbiAgJHNjb3BlLmxlYWd1ZURhdGEgPSBsZWFndWU7XG5cbiAgJHNjb3BlLmNvbW1pc2hNZXNzYWdlID0gJyc7XG5cbiAgJHNjb3BlLmNvbnRhY3RDb21taXNoID0gZnVuY3Rpb24obGVhZ3VlLCBtZXNzYWdlKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuY2xvc2UoeyBsZWFndWU6IGxlYWd1ZSwgbWVzc2FnZTogbWVzc2FnZSB9KTtcbiAgfTtcblxuICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2FuY2VsJyk7XG4gIH07XG5cbiAgJHNjb3BlLmhhc0Vycm9yID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgfTtcblxuICAkc2NvcGUuaGFzUHJvcGVydHlFcnJvciA9IGZ1bmN0aW9uKGlucHV0LCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRlcnJvcltwcm9wZXJ0eV07XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcImxlYWd1ZSBjb250YWN0IGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cbkxlYWd1ZUNvbnRhY3RDb250cm9sbGVyLiRpbmplY3QgPSBbJ2xlYWd1ZScsICckbW9kYWxJbnN0YW5jZScsICckc2NvcGUnLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBMZWFndWVDb250YWN0Q29udHJvbGxlcjtcbiIsInZhciBMZWFndWVNZXNzYWdlQ29udHJvbGxlciA9IGZ1bmN0aW9uKGxlYWd1ZSwgJG1vZGFsSW5zdGFuY2UsICRzY29wZSwgJGxvZykge1xuXG4gICRzY29wZS5sZWFndWVEYXRhID0gYW5ndWxhci5jb3B5KGxlYWd1ZSk7XG5cbiAgJHNjb3BlLm1lc3NhZ2VPcHRpb25zID0ge1xuICAgIHNlbmRBbGl2ZTogZmFsc2UsXG4gICAgc2VuZEFsbDogZmFsc2VcbiAgfTtcblxuICAkc2NvcGUudXBkYXRlTWVzc2FnZSA9IGZ1bmN0aW9uKGxlYWd1ZSwgc2VuZEFsaXZlLCBzZW5kQWxsKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuY2xvc2UoeyBsZWFndWU6IGxlYWd1ZSwgc2VuZEFsaXZlOiBzZW5kQWxpdmUsIHNlbmRBbGw6IHNlbmRBbGwgfSk7XG4gIH07XG5cbiAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICB9O1xuXG4gICRzY29wZS5oYXNFcnJvciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gIH07XG5cbiAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kZXJyb3JbcHJvcGVydHldO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJsZWFndWUgbWVzc2FnZSBjb250cm9sbGVyXCIpO1xuICB9O1xuICBpbml0KCk7XG59O1xuXG5MZWFndWVNZXNzYWdlQ29udHJvbGxlci4kaW5qZWN0ID0gWydsZWFndWUnLCAnJG1vZGFsSW5zdGFuY2UnLCAnJHNjb3BlJywgJyRsb2cnXTtcbm1vZHVsZS5leHBvcnRzID0gTGVhZ3VlTWVzc2FnZUNvbnRyb2xsZXI7XG4iLCJ2YXIgTGVhZ3VlSm9pbkNvbnRyb2xsZXIgPSBmdW5jdGlvbihsZWFndWUsICRtb2RhbEluc3RhbmNlLCAkc2NvcGUsICRsb2cpIHtcblxuICAkc2NvcGUubGVhZ3VlRGF0YSA9IGxlYWd1ZTtcblxuICAkc2NvcGUubmV3VGVhbURhdGEgPSB7XG4gICAgbmFtZTogJycsXG4gICAgc2Vhc29uX2lkOiBsZWFndWUuc2Vhc29uX2lkLFxuICAgIGxlYWd1ZV9pZDogbGVhZ3VlLmlkXG4gIH07XG5cbiAgJHNjb3BlLmpvaW5MZWFndWUgPSBmdW5jdGlvbiAobmV3VGVhbSkge1xuICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKG5ld1RlYW0pO1xuICB9O1xuXG4gICRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2FuY2VsJyk7XG4gIH07XG5cbiAgJHNjb3BlLmhhc0Vycm9yID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgfTtcblxuICAkc2NvcGUuaGFzUHJvcGVydHlFcnJvciA9IGZ1bmN0aW9uKGlucHV0LCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRlcnJvcltwcm9wZXJ0eV07XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcImxlYWd1ZSBqb2luIGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cbkxlYWd1ZUpvaW5Db250cm9sbGVyLiRpbmplY3QgPSBbJ2xlYWd1ZScsICckbW9kYWxJbnN0YW5jZScsICckc2NvcGUnLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBMZWFndWVKb2luQ29udHJvbGxlcjtcbiIsInZhciBMZWFndWVJbnZpdGVDb250cm9sbGVyID0gZnVuY3Rpb24obGVhZ3VlSWQsIGlzQ29tbWlzaCwgbGVhZ3VlQ2xvc2VkLCBpbnZpdGF0aW9ucywgJG1vZGFsLCAkbW9kYWxJbnN0YW5jZSwgJHNjb3BlLCAkbG9nKSB7XG5cbiAgJHNjb3BlLmlzQ29tbWlzaCA9IGlzQ29tbWlzaDtcblxuICAkc2NvcGUubGVhZ3VlQ2xvc2VkID0gbGVhZ3VlQ2xvc2VkO1xuXG4gICRzY29wZS5pbnZpdGF0aW9ucyA9IGludml0YXRpb25zLmRhdGE7XG5cbiAgJHNjb3BlLnJlc2V0SW52aXRlID0gZnVuY3Rpb24oKSB7XG4gICAgJHNjb3BlLmludml0YXRpb24gPSB7XG4gICAgICBsZWFndWVfaWQ6IGxlYWd1ZUlkLFxuICAgICAgZW1haWw6IFwiXCIsXG4gICAgICBtZXNzYWdlOiBcIlwiXG4gICAgfVxuICB9O1xuICAkc2NvcGUucmVzZXRJbnZpdGUoKTtcblxuICAkc2NvcGUucG9wdWxhdGVJbnZpdGUgPSBmdW5jdGlvbihpbnZpdGF0aW9uKSB7XG4gICAgJHNjb3BlLmludml0YXRpb24gPSB7XG4gICAgICBsZWFndWVfaWQ6IGludml0YXRpb24ubGVhZ3VlX2lkLFxuICAgICAgZW1haWw6IGludml0YXRpb24uZW1haWwsXG4gICAgICBtZXNzYWdlOiBpbnZpdGF0aW9uLm1lc3NhZ2VcbiAgICB9XG4gIH07XG5cbiAgJHNjb3BlLnNlbmRJbnZpdGUgPSBmdW5jdGlvbihpbnZpdGF0aW9uKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuY2xvc2UoaW52aXRhdGlvbik7XG4gIH07XG5cbiAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICB9O1xuXG4gICRzY29wZS5oYXNFcnJvciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gIH07XG5cbiAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kZXJyb3JbcHJvcGVydHldO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJsZWFndWUgaW52aXRlIGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cbkxlYWd1ZUludml0ZUNvbnRyb2xsZXIuJGluamVjdCA9IFsnbGVhZ3VlSWQnLCAnaXNDb21taXNoJywgJ2xlYWd1ZUNsb3NlZCcsICdpbnZpdGF0aW9ucycsICckbW9kYWwnLCAnJG1vZGFsSW5zdGFuY2UnLCAnJHNjb3BlJywgJyRsb2cnXTtcbm1vZHVsZS5leHBvcnRzID0gTGVhZ3VlSW52aXRlQ29udHJvbGxlcjtcbiIsInZhciBKb2luTGVhZ3Vlc0NvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2csICRsb2NhdGlvbiwgJG1vZGFsLCAkc3RhdGVQYXJhbXMsIHVzZXJNb2RlbCwgbWVzc2FnZU1vZGVsLCBzZWFzb25Nb2RlbCwgbGVhZ3VlU2VydmljZSkge1xuXG4gICRzY29wZS5zZWxlY3RlZFNlYXNvbklkID0gcGFyc2VJbnQoJHN0YXRlUGFyYW1zLnNlYXNvbklkKTtcblxuICAkc2NvcGUuY3VycmVudFNlYXNvbnMgPSBhbmd1bGFyLmNvcHkoc2Vhc29uTW9kZWwuY3VycmVudFNlYXNvbnMpO1xuXG4gICRzY29wZS5sZWFndWVRdWVyeSA9ICcnO1xuXG4gICRzY29wZS5wdWJsaWNMZWFndWVzID0gZnVuY3Rpb24oc2Vhc29uSWQpIHtcbiAgICAkbG9jYXRpb24udXJsKCcvc2Vhc29uLycgKyBzZWFzb25JZCArICcvbGVhZ3Vlcy9wdWJsaWMnKTtcbiAgfTtcblxuICAkc2NvcGUucHJpdmF0ZUxlYWd1ZXMgPSBmdW5jdGlvbihzZWFzb25JZCkge1xuICAgICRsb2NhdGlvbi51cmwoJy9zZWFzb24vJyArIHNlYXNvbklkICsgJy9sZWFndWVzL3ByaXZhdGUnKTtcbiAgfTtcblxuICAkc2NvcGUuY2hhbmdlU2Vhc29uID0gZnVuY3Rpb24oc2Vhc29uSWQpIHtcbiAgICBzZWFzb25Nb2RlbC5zZXRTZWxlY3RlZFNlYXNvbklkKHNlYXNvbklkKTtcbiAgICB2YXIgbmV3UGF0aCA9ICRsb2NhdGlvbi5wYXRoKCkucmVwbGFjZSgvKFxcL3NlYXNvblxcLylcXGQqLywgJyQxJyArIHNlYXNvbklkKTtcbiAgICAkbG9jYXRpb24udXJsKG5ld1BhdGgpO1xuICB9O1xuXG4gICRzY29wZS5zZWFyY2ggPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgaWYgKGl0ZW0ubmFtZS5pbmRleE9mKCRzY29wZS5sZWFndWVRdWVyeS50b0xvd2VyQ2FzZSgpKSAhPSAtMSB8fCBpdGVtLmNvbW1pc2hfbmFtZXMuam9pbignLCAnKS5pbmRleE9mKCRzY29wZS5sZWFndWVRdWVyeS50b0xvd2VyQ2FzZSgpKSAhPSAtMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAkc2NvcGUucmVzZXRTZWFyY2ggPSBmdW5jdGlvbigpIHtcbiAgICAkc2NvcGUubGVhZ3VlUXVlcnkgPSAnJztcbiAgfTtcblxuICAkc2NvcGUuaXNDb21taXNoID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgcmV0dXJuIGxlYWd1ZS5jb21taXNoX2lkcy5pbmRleE9mKHVzZXJNb2RlbC51c2VyLmlkKSA+IC0xO1xuICB9O1xuXG4gICRzY29wZS5jcmVhdGVMZWFndWUgPSBmdW5jdGlvbigpIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL25ldy9sZWFndWUubmV3LnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdOZXdMZWFndWVDb250cm9sbGVyJ1xuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihsZWFndWUpIHtcbiAgICAgIGxlYWd1ZVNlcnZpY2UuY3JlYXRlTGVhZ3VlKGxlYWd1ZSk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnQ3JlYXRlIGxlYWd1ZSBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnQ3JlYXRlIGxlYWd1ZSBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcblxuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJqb2luIGxlYWd1ZXMgY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xuXG59O1xuXG5Kb2luTGVhZ3Vlc0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnLCAnJGxvY2F0aW9uJywgJyRtb2RhbCcsICckc3RhdGVQYXJhbXMnLCAndXNlck1vZGVsJywgJ21lc3NhZ2VNb2RlbCcsICdzZWFzb25Nb2RlbCcsICdsZWFndWVTZXJ2aWNlJ107XG5tb2R1bGUuZXhwb3J0cyA9IEpvaW5MZWFndWVzQ29udHJvbGxlcjtcbiIsInZhciBNYW5hZ2VkTGVhZ3Vlc0NvbnRyb2xsZXIgPSBmdW5jdGlvbihtYW5hZ2VkTGVhZ3VlcywgJHNjb3BlLCAkbG9nLCAkbG9jYXRpb24sICRtb2RhbCwgbWVzc2FnZU1vZGVsLCBsZWFndWVTZXJ2aWNlKSB7XG5cbiAgICAkc2NvcGUubWFuYWdlZExlYWd1ZXMgPSBtYW5hZ2VkTGVhZ3Vlcy5kYXRhO1xuXG4gICAgJHNjb3BlLmNyZWF0ZUxlYWd1ZSA9IGZ1bmN0aW9uKHNlYXNvbikge1xuXG4gICAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL25ldy9sZWFndWUubmV3LnRwbC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ05ld0xlYWd1ZUNvbnRyb2xsZXInXG4gICAgICB9KTtcblxuICAgICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihsZWFndWUpIHtcbiAgICAgICAgbGVhZ3VlU2VydmljZS5jcmVhdGVMZWFndWUobGVhZ3VlKTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZygnQ3JlYXRlIGxlYWd1ZSBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdDcmVhdGUgbGVhZ3VlIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgJHNjb3BlLnZpZXdMZWFndWUgPSBmdW5jdGlvbihsZWFndWUpIHtcbiAgICAgICAgJGxvY2F0aW9uLnVybCgnL3NlYXNvbi8nICsgbGVhZ3VlLnNlYXNvbl9pZCArICcvbGVhZ3VlLycgKyBsZWFndWUuaWQpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuc3RhcnRzID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgICB2YXIgc3RhcnRzTGFiZWwgPSAobGVhZ3VlLnN0YXJ0ZWQpID8gJ1N0YXJ0ZWQgJyA6ICdTdGFydHMgJztcbiAgICAgIHJldHVybiBzdGFydHNMYWJlbCArIGxlYWd1ZS5zdGFydF93ZWVrO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIm1hbmFnZWQgbGVhZ3VlcyBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5NYW5hZ2VkTGVhZ3Vlc0NvbnRyb2xsZXIuJGluamVjdCA9IFsnbWFuYWdlZExlYWd1ZXMnLCAnJHNjb3BlJywgJyRsb2cnLCAnJGxvY2F0aW9uJywgJyRtb2RhbCcsICdtZXNzYWdlTW9kZWwnLCAnbGVhZ3VlU2VydmljZSddO1xubW9kdWxlLmV4cG9ydHMgPSBNYW5hZ2VkTGVhZ3Vlc0NvbnRyb2xsZXI7XG5cbiIsInZhciBNeUxlYWd1ZXNDb250cm9sbGVyID0gZnVuY3Rpb24obGVhZ3VlcywgJHNjb3BlLCAkbG9nLCAkbG9jYXRpb24sICRtb2RhbCwgbWVzc2FnZU1vZGVsLCBzZWFzb25Nb2RlbCwgbGVhZ3VlU2VydmljZSkge1xuXG4gICRzY29wZS5sZWFndWVzID0gbGVhZ3Vlcy5kYXRhO1xuXG4gICRzY29wZS5jcmVhdGVMZWFndWUgPSBmdW5jdGlvbigpIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL25ldy9sZWFndWUubmV3LnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdOZXdMZWFndWVDb250cm9sbGVyJ1xuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihsZWFndWUpIHtcbiAgICAgIGxlYWd1ZVNlcnZpY2UuY3JlYXRlTGVhZ3VlKGxlYWd1ZSk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnQ3JlYXRlIGxlYWd1ZSBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnQ3JlYXRlIGxlYWd1ZSBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcblxuICB9O1xuXG4gICRzY29wZS5qb2luTGVhZ3VlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNlYXNvbiA9IHNlYXNvbk1vZGVsLmdldEN1cnJlbnRTZWFzb24oKTtcbiAgICAkbG9jYXRpb24udXJsKCcvc2Vhc29uLycgKyBzZWFzb24uaWQgKyAnL2xlYWd1ZXMvcHVibGljJyk7XG4gIH07XG5cbiAgJHNjb3BlLnZpZXdMZWFndWUgPSBmdW5jdGlvbihsZWFndWUpIHtcbiAgICAkbG9jYXRpb24udXJsKCcvc2Vhc29uLycgKyBsZWFndWUuc2Vhc29uX2lkICsgJy9sZWFndWUvJyArIGxlYWd1ZS5pZCk7XG4gIH07XG5cbiAgJHNjb3BlLnN0YXJ0cyA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgIHZhciBzdGFydHNMYWJlbCA9IChsZWFndWUuc3RhcnRlZCkgPyAnU3RhcnRlZCAnIDogJ1N0YXJ0cyAnO1xuICAgIHJldHVybiBzdGFydHNMYWJlbCArIGxlYWd1ZS5zdGFydF93ZWVrO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJteSBsZWFndWVzIGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcblxufTtcblxuTXlMZWFndWVzQ29udHJvbGxlci4kaW5qZWN0ID0gWydsZWFndWVzJywgJyRzY29wZScsICckbG9nJywgJyRsb2NhdGlvbicsICckbW9kYWwnLCAnbWVzc2FnZU1vZGVsJywgJ3NlYXNvbk1vZGVsJywgJ2xlYWd1ZVNlcnZpY2UnXTtcbm1vZHVsZS5leHBvcnRzID0gTXlMZWFndWVzQ29udHJvbGxlcjtcblxuIiwidmFyIFZpZXdUZWFtQ29udHJvbGxlciA9IGZ1bmN0aW9uKHRlYW0sIGxlYWd1ZVRlYW1zLCAkc2NvcGUsICRsb2csICRtb2RhbCwgJHdpbmRvdywgJHRpbWVvdXQsICRsb2NhdGlvbiwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsIG1lc3NhZ2VNb2RlbCwgdXNlck1vZGVsLCB1c2VyU2VydmljZSwgdGVhbVNlcnZpY2UpIHtcblxuICB2YXIgYWN0aXZhdGUgPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgdGVhbVNlcnZpY2UuYWN0aXZhdGVUZWFtKHRlYW0pXG4gICAgICAudGhlbihmdW5jdGlvbihhY3RpdmUpIHtcbiAgICAgICAgdGVhbS5hY3RpdmUgPSBhY3RpdmU7XG4gICAgICB9KTtcbiAgfTtcblxuICB2YXIgZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICB0ZWFtU2VydmljZS5kZWFjdGl2YXRlVGVhbSh0ZWFtKVxuICAgICAgLnRoZW4oZnVuY3Rpb24oYWN0aXZlKSB7XG4gICAgICAgIHRlYW0uYWN0aXZlID0gYWN0aXZlO1xuICAgICAgfSk7XG4gIH07XG5cbiAgdmFyIHNldE1lc3NhZ2VTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghXy5oYXMoJHNjb3BlLnVzZXJNb2RlbC50ZWFtTWVzc2FnZU9wZW4sICRzY29wZS50ZWFtRGF0YS5pZCkpIHtcbiAgICAgICRzY29wZS51c2VyTW9kZWwudGVhbU1lc3NhZ2VPcGVuWyRzY29wZS50ZWFtRGF0YS5pZF0gPSAkc2NvcGUudGVhbURhdGEubWVzc2FnZSAmJiAkc2NvcGUudGVhbURhdGEubWVzc2FnZS5sZW5ndGggPiAwO1xuICAgIH1cbiAgfTtcblxuICAkc2NvcGUudGVhbURhdGEgPSB0ZWFtLmRhdGE7XG4gICRzY29wZS5sZWFndWVUZWFtcyA9IGxlYWd1ZVRlYW1zLmRhdGE7XG5cbiAgJHNjb3BlLnRlYW1Ecm9wZG93biA9IHtcbiAgICBpc29wZW46IGZhbHNlXG4gIH07XG5cbiAgJHNjb3BlLnVzZXJNb2RlbCA9IHVzZXJNb2RlbDtcblxuICAkc2NvcGUudG9nZ2xlRHJvcGRvd24gPSBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgJHNjb3BlLnRlYW1Ecm9wZG93bi5pc29wZW4gPSAhJHNjb3BlLnRlYW1Ecm9wZG93bi5pc29wZW47XG4gIH07XG5cbiAgJHNjb3BlLmNvbnRhY3RDb21taXNoID0gZnVuY3Rpb24odGVhbSkge1xuXG4gICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvY29udGFjdC9sZWFndWUuY29udGFjdC50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnTGVhZ3VlQ29udGFjdENvbnRyb2xsZXInLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICBsZWFndWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB0ZWFtLmxlYWd1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihwYXJhbXMpIHtcbiAgICAgIHRlYW1TZXJ2aWNlLnNlbmRDb21taXNoTWVzc2FnZSh0ZWFtLCBwYXJhbXMubWVzc2FnZSlcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAkbG9nLmRlYnVnKCdDb250YWN0IGxlYWd1ZSBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnQ29udGFjdCBjb21taXNoIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgIH0pO1xuXG4gIH07XG5cbiAgJHNjb3BlLnVwZGF0ZU1lc3NhZ2UgPSBmdW5jdGlvbih0ZWFtKSB7XG5cbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL3RlYW0vbWVzc2FnZS90ZWFtLm1lc3NhZ2UudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ1RlYW1NZXNzYWdlQ29udHJvbGxlcicsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIHRlYW06IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB0ZWFtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKHBhcmFtcykge1xuICAgICAgdGVhbVNlcnZpY2UudXBkYXRlVGVhbU1lc3NhZ2UocGFyYW1zLnRlYW0sIHBhcmFtcy5zZW5kRW1haWwpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICAkc2NvcGUudGVhbURhdGEubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIH0pO1xuXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnVGVhbSBtZXNzYWdlIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdVcGRhdGUgdGVhbSBtZXNzYWdlIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgIH0pO1xuXG4gIH07XG5cbiAgJHNjb3BlLmNvbmZpcm1BY3RpdmF0ZSA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvY29uZmlybS9jb25maXJtLnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdDb25maXJtQ29udHJvbGxlcicsXG4gICAgICBzaXplOiAnc20nLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICBtZXNzYWdlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gJ1JlYWN0aXZhdGUgJyArIHRlYW0ubmFtZSArICc/JztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICBhY3RpdmF0ZSh0ZWFtKTtcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAkbG9nLmRlYnVnKCdBY3RpdmF0ZSB0ZWFtIGNhbmNlbGxlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdUZWFtIHJlYWN0aXZhdGlvbiBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcbiAgfTtcblxuICAkc2NvcGUuY29uZmlybURlYWN0aXZhdGUgPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2NvbmZpcm0vY29uZmlybS50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnQ29uZmlybUNvbnRyb2xsZXInLFxuICAgICAgc2l6ZTogJ3NtJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgbWVzc2FnZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuICdEZWFjdGl2YXRlICcgKyB0ZWFtLm5hbWUgKyAnPyc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgZGVhY3RpdmF0ZSh0ZWFtKTtcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAkbG9nLmRlYnVnKCdEZWFjdGl2YXRlIHRlYW0gY2FuY2VsbGVkLi4uJyk7XG4gICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ1RlYW0gZGVhY3RpdmF0aW9uIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgIH0pO1xuICB9O1xuXG4gICRzY29wZS5wYWlkID0gZnVuY3Rpb24odGVhbSkge1xuICAgIHRlYW1TZXJ2aWNlLnBhaWRUZWFtKHRlYW0pXG4gICAgICAudGhlbihmdW5jdGlvbihwYWlkKSB7XG4gICAgICAgIHRlYW0ucGFpZCA9IHBhaWQ7XG4gICAgICB9KTtcbiAgfTtcblxuICAkc2NvcGUudW5wYWlkID0gZnVuY3Rpb24odGVhbSkge1xuICAgIHRlYW1TZXJ2aWNlLnVucGFpZFRlYW0odGVhbSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHBhaWQpIHtcbiAgICAgICAgdGVhbS5wYWlkID0gcGFpZDtcbiAgICAgIH0pO1xuICB9O1xuXG4gICRzY29wZS5oYXNOb1BpY2sgPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgcmV0dXJuIHRlYW0uY3VycmVudF9waWNrc19jb3VudCA9PSAwO1xuICB9O1xuXG4gICRzY29wZS5pc0NvbW1pc2ggPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgcmV0dXJuIHRlYW0uY29tbWlzaF9pZHMuaW5kZXhPZih1c2VyTW9kZWwudXNlci5pZCkgPiAtMTtcbiAgfTtcblxuICAkc2NvcGUuaXNDb2FjaCA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICByZXR1cm4gdGVhbS5jb2FjaF9pZHMuaW5kZXhPZih1c2VyTW9kZWwudXNlci5pZCkgPiAtMTtcbiAgfTtcblxuICAkc2NvcGUuaXNBZG1pbiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB1c2VyTW9kZWwudXNlci5hZG1pbjtcbiAgfTtcblxuICAkc2NvcGUuc2hvd1RlYW0gPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgLy8gb21nIHdoYXQgYSBzaW4gdGhpcyBpcy4gcmVmcmVzaGVzIHRoZSBicm93c2VyIHdpbmRvdy4gdGFsayBhYm91dCB1c2luZyBhIGJpZyBhc3MgaGFtbWVyLi4uXG4gICAgLy8gaGF2ZSB0byBkbyB0aGlzIGJlY2F1c2Ugb2YgcmVsb2FkT25TZWFyY2g6IGZhbHNlIGluc2lkZSBvZiB2aWV3L3BpY2tzL2luZGV4LmpzIG5lZWRlZCB0byBwcmV2ZW50IGNvbnRyb2xsZXIgcmVpbml0IHdoZW4gdXNpbmcgdGhlIHdlZWsgZmlsdGVyXG4gICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgJHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJGxvY2F0aW9uLmFic1VybCgpLnJlcGxhY2UoL1teXFwvXSokLywgdGVhbS5pZCk7XG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9LCAyMDApO1xuICB9O1xuXG4gICRzY29wZS5zaG93TGVhZ3VlID0gZnVuY3Rpb24odGVhbSkge1xuICAgICRsb2NhdGlvbi5wYXRoKCcvc2Vhc29uLycgKyB0ZWFtLmxlYWd1ZS5zZWFzb25faWQgKyAnL2xlYWd1ZS8nICsgdGVhbS5sZWFndWUuaWQpO1xuICB9O1xuXG4gICRzY29wZS5lZGl0VGVhbSA9IGZ1bmN0aW9uKHRlYW0pIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvdGVhbS9lZGl0L3RlYW0uZWRpdC50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnRWRpdFRlYW1Db250cm9sbGVyJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgdGVhbTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRlYW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24odGVhbSkge1xuICAgICAgdGVhbVNlcnZpY2UudXBkYXRlVGVhbSh0ZWFtKVxuICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAkc2NvcGUudGVhbURhdGEgPSB0ZWFtO1xuICAgICAgICB9KTtcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAkbG9nLmRlYnVnKCdFZGl0IHRlYW0gbW9kYWwgZGlzbWlzc2VkLi4uJyk7XG4gICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ0VkaXQgdGVhbSBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcblxuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJ2aWV3IHRlYW0gY29udHJvbGxlclwiKTtcbiAgICBzZXRNZXNzYWdlU3RhdGUoKTtcbiAgfTtcbiAgaW5pdCgpO1xuXG59O1xuXG5WaWV3VGVhbUNvbnRyb2xsZXIuJGluamVjdCA9IFsndGVhbScsICdsZWFndWVUZWFtcycsICckc2NvcGUnLCAnJGxvZycsICckbW9kYWwnLCAnJHdpbmRvdycsICckdGltZW91dCcsICckbG9jYXRpb24nLCAnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICdtZXNzYWdlTW9kZWwnLCAndXNlck1vZGVsJywgJ3VzZXJTZXJ2aWNlJywgJ3RlYW1TZXJ2aWNlJ107XG5tb2R1bGUuZXhwb3J0cyA9IFZpZXdUZWFtQ29udHJvbGxlcjtcbiIsInZhciBFZGl0VGVhbUNvbnRyb2xsZXIgPSBmdW5jdGlvbih0ZWFtLCAkc2NvcGUsICRsb2csICRtb2RhbEluc3RhbmNlKSB7XG5cbiAgICAkc2NvcGUudGVhbURhdGEgPSBhbmd1bGFyLmNvcHkodGVhbSk7XG5cbiAgICAkc2NvcGUuZWRpdFRlYW0gPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgICB0ZWFtLm5hbWUgPSB0ZWFtLm5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKHRlYW0pO1xuICAgIH07XG5cbiAgICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2FuY2VsJyk7XG4gICAgfTtcblxuICAgICRzY29wZS5oYXNFcnJvciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRlcnJvcltwcm9wZXJ0eV07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiZWRpdCB0ZWFtIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cbkVkaXRUZWFtQ29udHJvbGxlci4kaW5qZWN0ID0gWyd0ZWFtJywgJyRzY29wZScsICckbG9nJywgJyRtb2RhbEluc3RhbmNlJ107XG5tb2R1bGUuZXhwb3J0cyA9IEVkaXRUZWFtQ29udHJvbGxlcjtcbiIsInZhciBUZWFtTWVzc2FnZUNvbnRyb2xsZXIgPSBmdW5jdGlvbih0ZWFtLCAkbW9kYWxJbnN0YW5jZSwgJHNjb3BlLCAkbG9nKSB7XG5cbiAgJHNjb3BlLnRlYW1EYXRhID0gYW5ndWxhci5jb3B5KHRlYW0pO1xuXG4gICRzY29wZS5tZXNzYWdlT3B0aW9ucyA9IHsgc2VuZEVtYWlsOiBmYWxzZSB9O1xuXG4gICRzY29wZS51cGRhdGVNZXNzYWdlID0gZnVuY3Rpb24odGVhbSwgc2VuZEVtYWlsKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuY2xvc2UoeyB0ZWFtOiB0ZWFtLCBzZW5kRW1haWw6IHNlbmRFbWFpbH0pO1xuICB9O1xuXG4gICRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgfTtcblxuICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICB9O1xuXG4gICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwidGVhbSBtZXNzYWdlIGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cblRlYW1NZXNzYWdlQ29udHJvbGxlci4kaW5qZWN0ID0gWyd0ZWFtJywgJyRtb2RhbEluc3RhbmNlJywgJyRzY29wZScsICckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IFRlYW1NZXNzYWdlQ29udHJvbGxlcjtcbiIsInZhciBUZWFtUGlja0NvbnRyb2xsZXIgPSBmdW5jdGlvbih0ZWFtLCB3ZWVrLCBnYW1lcywgcGlja3MsICRyb290U2NvcGUsICRzY29wZSwgJGxvZywgJGxvY2F0aW9uLCAkYW5jaG9yU2Nyb2xsLCB1c2VyTW9kZWwsIGRhdGVVdGlscykge1xuXG4gICRzY29wZS50ZWFtID0gdGVhbS5kYXRhO1xuXG4gICRzY29wZS53ZWVrID0gd2Vlay5kYXRhO1xuXG4gICRzY29wZS5nYW1lcyA9IGdhbWVzLmRhdGE7XG5cbiAgJHNjb3BlLnBpY2tzID0gcGlja3MuZGF0YTtcblxuICAkc2NvcGUuc2F2ZVBpY2tzRW5hYmxlZCA9IGZhbHNlO1xuXG4gICRzY29wZS5zY3JvbGxUb1RvcCA9IGZ1bmN0aW9uKCkge1xuICAgICRhbmNob3JTY3JvbGwoKTsgLy8gaGFja3k/XG4gIH07XG5cbiAgJHNjb3BlLnBpY2tNZXNzYWdlID0gZnVuY3Rpb24odGVhbSwgd2Vlaykge1xuICAgIHZhciBtc2cgPSAnJztcbiAgICBpZiAoIXRlYW0ubGVhZ3VlLm1heF9waWNrc19wZXJfd2VlayB8fCB0ZWFtLmxlYWd1ZS5tYXhfcGlja3NfcGVyX3dlZWsgPj0gJHNjb3BlLmdhbWVzLmxlbmd0aCkge1xuICAgICAgbXNnID0gJ1BpY2sgYWxsIGdhbWVzJztcbiAgICB9IGVsc2Uge1xuICAgICAgbXNnID0gJ1BpY2sgdXAgdG8gJyArIHRlYW0ubGVhZ3VlLm1heF9waWNrc19wZXJfd2VlayArICcgbG9zZXInO1xuICAgIH1cbiAgICBpZiAodGVhbS5sZWFndWUubWF4X3BpY2tzX3Blcl93ZWVrID4gMSkge1xuICAgICAgbXNnICs9ICdzJztcbiAgICB9XG4gICAgbXNnICs9ICcgZm9yICcgKyB3ZWVrLm5hbWU7XG4gICAgcmV0dXJuIG1zZztcbiAgfTtcblxuICAkc2NvcGUuc2F2ZVBpY2tzID0gZnVuY3Rpb24oKSB7XG4gICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdUZWFtUGlja0NvbnRyb2xsZXI6OnNhdmVQaWNrcycpO1xuICB9O1xuXG4gICRzY29wZS5nZXRTY29yZSA9IGZ1bmN0aW9uKGdhbWUsIGluZGV4KSB7XG4gICAgLy8gd2FybmluZzogbWFnaWMgbnVtYmVycyBhaGVhZFxuICAgIHZhciBzY29yZSA9IChpbmRleCA9PT0gMCkgPyBnYW1lLnZpc2l0aW5nX3NxdWFkX3Njb3JlIDogZ2FtZS5ob21lX3NxdWFkX3Njb3JlO1xuICAgIHJldHVybiBzY29yZTtcbiAgfTtcblxuICAkc2NvcGUuc3RhcnRzID0gZnVuY3Rpb24oZ2FtZSkge1xuICAgIHZhciBzdGFydHNMYWJlbCA9IChnYW1lLnN0YXJ0ZWQpID8gJ1N0YXJ0ZWQgJyA6ICdTdGFydHMgJztcbiAgICByZXR1cm4gc3RhcnRzTGFiZWwgKyBkYXRlVXRpbHMuZGF0ZUZvcm1hdChnYW1lLnN0YXJ0c19hdCwgXCJkZGQsIG1tbSBkIGg6TU0gVFQgKFopXCIpO1xuICB9O1xuXG4gICRzY29wZS5zaG93VGVhbSA9IGZ1bmN0aW9uKHRlYW0sIHNob3dDdXJyZW50V2Vlaykge1xuICAgIHZhciB0ZWFtUGF0aCA9ICcvc2Vhc29uLycgKyB0ZWFtLmxlYWd1ZS5zZWFzb25faWQgKyAnL2xlYWd1ZS8nICsgdGVhbS5sZWFndWUuaWQgKyAnL3RlYW0vJyArIHRlYW0uaWQ7XG4gICAgaWYgKHNob3dDdXJyZW50V2Vlaykge1xuICAgICAgdGVhbVBhdGggKz0gJz93ZWVrPScgKyAkc2NvcGUud2Vlay5zbHVnO1xuICAgIH1cbiAgICAkbG9jYXRpb24udXJsKHRlYW1QYXRoKTtcbiAgfTtcblxuICAkc2NvcGUuaXNDb2FjaCA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICByZXR1cm4gdGVhbS5jb2FjaF9pZHMuaW5kZXhPZih1c2VyTW9kZWwudXNlci5pZCkgPiAtMTtcbiAgfTtcblxuICAkc2NvcGUuJG9uKCdUZWFtUGlja0NvbnRyb2xsZXI6OmVuYWJsZVNhdmVQaWNrcycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgJHNjb3BlLnNhdmVQaWNrc0VuYWJsZWQgPSB0cnVlO1xuICB9KTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwibWFrZSBwaWNrIGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cblRlYW1QaWNrQ29udHJvbGxlci4kaW5qZWN0ID0gWyd0ZWFtJywgJ3dlZWsnLCAnZ2FtZXMnLCAncGlja3MnLCAnJHJvb3RTY29wZScsICckc2NvcGUnLCAnJGxvZycsICckbG9jYXRpb24nLCAnJGFuY2hvclNjcm9sbCcsICd1c2VyTW9kZWwnLCAnZGF0ZVV0aWxzJ107XG5tb2R1bGUuZXhwb3J0cyA9IFRlYW1QaWNrQ29udHJvbGxlcjtcbiIsInZhciBBbGl2ZVRlYW1zQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJGxvZywgYWxpdmVUZWFtcykge1xuXG4gICAgJHNjb3BlLmFsaXZlVGVhbXMgPSBhbGl2ZVRlYW1zLmRhdGE7XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcImFsaXZlIHRlYW1zIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cbkFsaXZlVGVhbXNDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJywgJ2FsaXZlVGVhbXMnXTtcbm1vZHVsZS5leHBvcnRzID0gQWxpdmVUZWFtc0NvbnRyb2xsZXI7XG4iLCJ2YXIgRGVhZFRlYW1zQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJGxvZywgZGVhZFRlYW1zKSB7XG5cbiAgICAkc2NvcGUuZGVhZFRlYW1zID0gZGVhZFRlYW1zLmRhdGE7XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcImRlYWQgdGVhbXMgY29udHJvbGxlclwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcblxufTtcblxuRGVhZFRlYW1zQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZycsICdkZWFkVGVhbXMnXTtcbm1vZHVsZS5leHBvcnRzID0gRGVhZFRlYW1zQ29udHJvbGxlcjtcbiIsInZhciBQbGF5TGVhZ3Vlc0NvbnRyb2xsZXIgPSBmdW5jdGlvbihsZWFndWVzLCAkc2NvcGUsICRsb2csICRsb2NhdGlvbiwgJG1vZGFsLCB1c2VyTW9kZWwsIG1lc3NhZ2VNb2RlbCwgc2Vhc29uTW9kZWwsIGxlYWd1ZVNlcnZpY2UpIHtcblxuICAkc2NvcGUubGVhZ3VlcyA9IGxlYWd1ZXMuZGF0YTtcblxuICAvLyBwYWdpbmF0aW9uXG4gICRzY29wZS5jdXJyZW50TGVhZ3VlUGFnZSA9IDE7XG4gICRzY29wZS5sZWFndWVzUGVyUGFnZSA9IDEwMDtcblxuICAkc2NvcGUuY3JlYXRlTGVhZ3VlID0gZnVuY3Rpb24oc2Vhc29uKSB7XG5cbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9uZXcvbGVhZ3VlLm5ldy50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnTmV3TGVhZ3VlQ29udHJvbGxlcidcbiAgICB9KTtcblxuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgICBsZWFndWVTZXJ2aWNlLmNyZWF0ZUxlYWd1ZShsZWFndWUpO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ0NyZWF0ZSBsZWFndWUgbW9kYWwgZGlzbWlzc2VkLi4uJyk7XG4gICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ0NyZWF0ZSBsZWFndWUgY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAkc2NvcGUuam9pbkxlYWd1ZSA9IGZ1bmN0aW9uKHNlYXNvbikge1xuICAgIHZhciBzZWFzb24gPSBzZWFzb25Nb2RlbC5nZXRDdXJyZW50U2Vhc29uKCk7XG4gICAgJGxvY2F0aW9uLnVybCgnL3NlYXNvbi8nICsgc2Vhc29uLmlkICsgJy9sZWFndWVzL3B1YmxpYycpO1xuICB9O1xuXG4gICRzY29wZS52aWV3TGVhZ3VlID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgJGxvY2F0aW9uLnVybCgnL3NlYXNvbi8nICsgbGVhZ3VlLnNlYXNvbl9pZCArICcvbGVhZ3VlLycgKyBsZWFndWUuaWQpO1xuICB9O1xuXG4gICRzY29wZS5zdGFydHMgPSBmdW5jdGlvbihsZWFndWUpIHtcbiAgICB2YXIgc3RhcnRzTGFiZWwgPSAobGVhZ3VlLnN0YXJ0ZWQpID8gJ1N0YXJ0ZWQgJyA6ICdTdGFydHMgJztcbiAgICByZXR1cm4gc3RhcnRzTGFiZWwgKyBsZWFndWUuc3RhcnRfd2VlaztcbiAgfTtcblxuICAkc2NvcGUuaXNDb21taXNoID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgcmV0dXJuIGxlYWd1ZS5jb21taXNoX2lkcy5pbmRleE9mKHVzZXJNb2RlbC51c2VyLmlkKSA+IC0xO1xuICB9O1xuXG4gICRzY29wZS5zZWFyY2ggPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgaWYgKGl0ZW0ubmFtZS5pbmRleE9mKCRzY29wZS5xdWVyeS50b0xvd2VyQ2FzZSgpKSAhPSAtMSB8fCBpdGVtLmNvbW1pc2hfbmFtZXMuam9pbignLCAnKS5pbmRleE9mKCRzY29wZS5xdWVyeS50b0xvd2VyQ2FzZSgpKSAhPSAtMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwibXkgbGVhZ3VlcyBjb250cm9sbGVyXCIpO1xuICB9O1xuICBpbml0KCk7XG5cbn07XG5cblBsYXlMZWFndWVzQ29udHJvbGxlci4kaW5qZWN0ID0gWydsZWFndWVzJywgJyRzY29wZScsICckbG9nJywgJyRsb2NhdGlvbicsICckbW9kYWwnLCAndXNlck1vZGVsJywgJ21lc3NhZ2VNb2RlbCcsICdzZWFzb25Nb2RlbCcsICdsZWFndWVTZXJ2aWNlJ107XG5tb2R1bGUuZXhwb3J0cyA9IFBsYXlMZWFndWVzQ29udHJvbGxlcjtcblxuIiwidmFyIFBsYXlUZWFtc0NvbnRyb2xsZXIgPSBmdW5jdGlvbih0ZWFtcywgJHNjb3BlLCAkbG9nLCAkc3RhdGVQYXJhbXMsICRsb2NhdGlvbikge1xuXG4gICRzY29wZS50ZWFtcyA9IHRlYW1zLmRhdGE7XG5cbiAgLy8gcGFnaW5hdGlvblxuICAkc2NvcGUuY3VycmVudFRlYW1QYWdlID0gMTtcbiAgJHNjb3BlLnRlYW1zUGVyUGFnZSA9IDEwMDtcblxuICAkc2NvcGUuaW5QbGF5ID0gZnVuY3Rpb24odGVhbSkge1xuICAgIHJldHVybiAodGVhbS5hY3RpdmUgJiYgdGVhbS5hbGl2ZSkgPyAwIDogMTtcbiAgfTtcblxuICAkc2NvcGUuc2hvd1RlYW0gPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgJGxvY2F0aW9uLnVybCgnL3NlYXNvbi8nICsgJHN0YXRlUGFyYW1zLnNlYXNvbklkICsgJy9sZWFndWUvJyArIHRlYW0ubGVhZ3VlLmlkICsgJy90ZWFtLycgKyB0ZWFtLmlkKTtcbiAgfTtcblxuICAkc2NvcGUuc2VhcmNoID0gZnVuY3Rpb24oaXRlbSkge1xuICAgIGlmIChpdGVtLm5hbWUuaW5kZXhPZigkc2NvcGUucXVlcnkudG9Mb3dlckNhc2UoKSkgIT0gLTEgfHwgaXRlbS5sZWFndWUubmFtZS5pbmRleE9mKCRzY29wZS5xdWVyeS50b0xvd2VyQ2FzZSgpKSAhPSAtMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwicGxheSB0ZWFtcyBjb250cm9sbGVyXCIpO1xuICB9O1xuICBpbml0KCk7XG5cbn07XG5cblBsYXlUZWFtc0NvbnRyb2xsZXIuJGluamVjdCA9IFsndGVhbXMnLCAnJHNjb3BlJywgJyRsb2cnLCAnJHN0YXRlUGFyYW1zJywgJyRsb2NhdGlvbiddO1xubW9kdWxlLmV4cG9ydHMgPSBQbGF5VGVhbXNDb250cm9sbGVyO1xuIiwidmFyIEFkbWluU2Vhc29uc0NvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2NhdGlvbiwgJG1vZGFsLCBzZWFzb25Nb2RlbCwgc2Vhc29uU2VydmljZSkge1xuXG4gICRzY29wZS5zZWFzb25zID0gc2Vhc29uTW9kZWwuc2Vhc29ucztcblxuICAkc2NvcGUuc2hvd1NlYXNvbiA9IGZ1bmN0aW9uKHNlYXNvbikge1xuICAgICRsb2NhdGlvbi51cmwoJGxvY2F0aW9uLnBhdGgoKSArICcvJyArIHNlYXNvbi5pZCk7XG4gIH07XG5cbiAgJHNjb3BlLmNyZWF0ZVNlYXNvbiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9zZWFzb25zL3NlYXNvbi9uZXcvYWRtaW4uc2Vhc29uLm5ldy50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnQWRtaW5TZWFzb25OZXdDb250cm9sbGVyJ1xuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihzZWFzb24pIHtcbiAgICAgIHNlYXNvblNlcnZpY2UuY3JlYXRlU2Vhc29uKHNlYXNvbik7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnQ3JlYXRlIHNlYXNvbiBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnQ3JlYXRlIHNlYXNvbiBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcblxuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICB9O1xuICBpbml0KCk7XG59O1xuXG5BZG1pblNlYXNvbnNDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9jYXRpb24nLCAnJG1vZGFsJywgJ3NlYXNvbk1vZGVsJywgJ3NlYXNvblNlcnZpY2UnXTtcbm1vZHVsZS5leHBvcnRzID0gQWRtaW5TZWFzb25zQ29udHJvbGxlcjtcbiIsInZhciBBZG1pbldlZWtDb250cm9sbGVyID0gZnVuY3Rpb24od2VlaywgZ2FtZXMsICRzY29wZSwgJGxvZywgJG1vZGFsLCBkYXRlVXRpbHMsIGdhbWVTZXJ2aWNlLCBzcXVhZFNlcnZpY2UsIHdlZWtTZXJ2aWNlLCBtZXNzYWdlTW9kZWwpIHtcblxuICB2YXIgY29tcGxldGVXZWVrID0gZnVuY3Rpb24od2Vlaykge1xuICAgIHdlZWtTZXJ2aWNlLmNvbXBsZXRlV2Vlayh3ZWVrKVxuICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICRzY29wZS53ZWVrRGF0YS5jb21wbGV0ZSA9IHRydWU7XG4gICAgICB9KTtcbiAgfTtcblxuICB2YXIgc2VuZFJlbWluZGVyID0gZnVuY3Rpb24od2Vlaykge1xuICAgIHdlZWtTZXJ2aWNlLnNlbmRSZW1pbmRlcih3ZWVrKTtcbiAgfTtcblxuICAkc2NvcGUud2Vla0RhdGEgPSB3ZWVrLmRhdGE7XG5cbiAgJHNjb3BlLmdhbWVzID0gZ2FtZXMuZGF0YTtcblxuICAkc2NvcGUuZGF0ZUZvcm1hdCA9IGRhdGVVdGlscy5kYXRlRm9ybWF0O1xuXG4gICRzY29wZS5lZGl0V2VlayA9IGZ1bmN0aW9uKHdlZWspIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvYWRtaW4vd2Vlay9lZGl0L2FkbWluLndlZWsuZWRpdC50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnQWRtaW5XZWVrRWRpdENvbnRyb2xsZXInLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICB3ZWVrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gd2VlaztcbiAgICAgICAgfSxcbiAgICAgICAgd2Vla1R5cGVzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gd2Vla1NlcnZpY2UuZ2V0V2Vla1R5cGVzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24od2Vlaykge1xuICAgICAgd2Vla1NlcnZpY2UudXBkYXRlV2Vlayh3ZWVrKTtcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAkbG9nLmRlYnVnKCdXZWVrIHVwZGF0ZSBjYW5jZWxsZWQuLi4nKTtcbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnV2VlayB1cGRhdGUgY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAkc2NvcGUuZWRpdEdhbWUgPSBmdW5jdGlvbihnYW1lKSB7XG5cbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2FkbWluL2dhbWUvZWRpdC9hZG1pbi5nYW1lLmVkaXQudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0FkbWluR2FtZUVkaXRDb250cm9sbGVyJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgZ2FtZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGdhbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24oZ2FtZSkge1xuICAgICAgZ2FtZVNlcnZpY2UudXBkYXRlR2FtZShnYW1lKTtcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAkbG9nLmRlYnVnKCdHYW1lIHVwZGF0ZSBjYW5jZWxsZWQuLi4nKTtcbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnR2FtZSB1cGRhdGUgY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAkc2NvcGUuY3JlYXRlR2FtZSA9IGZ1bmN0aW9uKHdlZWssIGdhbWVzKSB7XG5cbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2FkbWluL2dhbWUvbmV3L2FkbWluLmdhbWUubmV3LnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdBZG1pbkdhbWVOZXdDb250cm9sbGVyJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgd2VlazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHdlZWs7XG4gICAgICAgIH0sXG4gICAgICAgIGxhc3RHYW1lOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoZ2FtZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGdhbWVzW2dhbWVzLmxlbmd0aCAtIDFdXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzcXVhZHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBzcXVhZFNlcnZpY2UuZ2V0V2Vla1NxdWFkcyh3ZWVrKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihnYW1lKSB7XG4gICAgICBnYW1lU2VydmljZS5jcmVhdGVHYW1lKGdhbWUpO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ0NyZWF0ZSBnYW1lIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdDcmVhdGUgZ2FtZSBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcblxuICB9O1xuXG5cbiAgJHNjb3BlLmNvbmZpcm1TZW5kUmVtaW5kZXIgPSBmdW5jdGlvbih3ZWVrKSB7XG4gICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2NvbmZpcm0vY29uZmlybS50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnQ29uZmlybUNvbnRyb2xsZXInLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICBtZXNzYWdlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBzZW5kIHdlZWtseSByZW1pbmRlcj8nO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbigpIHtcbiAgICAgIHNlbmRSZW1pbmRlcih3ZWVrKTtcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAkbG9nLmRlYnVnKCdTZW5kIHJlbWluZGVyIGNhbmNlbGxlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdTZW5kIHJlbWluZGVyIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgIH0pO1xuICB9O1xuXG4gICRzY29wZS5jb25maXJtV2Vla0NvbXBsZXRlID0gZnVuY3Rpb24od2Vlaykge1xuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9jb25maXJtL2NvbmZpcm0udHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0NvbmZpcm1Db250cm9sbGVyJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgbWVzc2FnZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gbWFyayB0aGlzIHdlZWsgYXMgY29tcGxldGU/JztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICBjb21wbGV0ZVdlZWsod2Vlayk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnQ29tcGxldGUgd2VlayBjYW5jZWxsZWQuLi4nKTtcbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnV2VlayBjb21wbGV0ZSBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuQWRtaW5XZWVrQ29udHJvbGxlci4kaW5qZWN0ID0gWyd3ZWVrJywgJ2dhbWVzJywgJyRzY29wZScsICckbG9nJywgJyRtb2RhbCcsICdkYXRlVXRpbHMnLCAnZ2FtZVNlcnZpY2UnLCAnc3F1YWRTZXJ2aWNlJywgJ3dlZWtTZXJ2aWNlJywgJ21lc3NhZ2VNb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBBZG1pbldlZWtDb250cm9sbGVyO1xuIiwidmFyIExlYWd1ZUludml0ZVJlcXVlc3RDb250cm9sbGVyID0gZnVuY3Rpb24obGVhZ3VlSWQsICRtb2RhbEluc3RhbmNlLCAkc2NvcGUsICRsb2csIHVzZXJNb2RlbCkge1xuXG4gICRzY29wZS5pbnZpdGF0aW9uID0ge1xuICAgIGxlYWd1ZV9pZDogbGVhZ3VlSWQsXG4gICAgZW1haWw6IHVzZXJNb2RlbC51c2VyLmVtYWlsLFxuICAgIG1lc3NhZ2U6IFwiXCJcbiAgfTtcblxuICAkc2NvcGUucmVxdWVzdEludml0ZSA9IGZ1bmN0aW9uIChpbnZpdGF0aW9uKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuY2xvc2UoaW52aXRhdGlvbik7XG4gIH07XG5cbiAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgfTtcblxuICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICB9O1xuXG4gICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwibGVhZ3VlIGludml0ZSByZXF1ZXN0IGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cbkxlYWd1ZUludml0ZVJlcXVlc3RDb250cm9sbGVyLiRpbmplY3QgPSBbJ2xlYWd1ZUlkJywgJyRtb2RhbEluc3RhbmNlJywgJyRzY29wZScsICckbG9nJywgJ3VzZXJNb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBMZWFndWVJbnZpdGVSZXF1ZXN0Q29udHJvbGxlcjtcbiIsIlxudmFyIFB1YmxpY0xlYWd1ZXNDb250cm9sbGVyID0gZnVuY3Rpb24oJHNjb3BlLCAkbG9nLCAkbG9jYXRpb24sIHB1YmxpY0xlYWd1ZXMpIHtcblxuICAgICRzY29wZS5wdWJsaWNMZWFndWVzID0gcHVibGljTGVhZ3Vlcy5kYXRhO1xuXG4gICAgJHNjb3BlLnNob3dMZWFndWUgPSBmdW5jdGlvbihsZWFndWUpIHtcbiAgICAgICRsb2NhdGlvbi51cmwoJy9zZWFzb24vJyArIGxlYWd1ZS5zZWFzb25faWQgKyAnL2xlYWd1ZS8nICsgbGVhZ3VlLmlkKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJwdWJsaWMgbGVhZ3VlcyBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5QdWJsaWNMZWFndWVzQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZycsICckbG9jYXRpb24nLCAncHVibGljTGVhZ3VlcyddO1xubW9kdWxlLmV4cG9ydHMgPSBQdWJsaWNMZWFndWVzQ29udHJvbGxlcjtcblxuIiwidmFyIFByaXZhdGVMZWFndWVzQ29udHJvbGxlciA9IGZ1bmN0aW9uKHByaXZhdGVMZWFndWVzLCAkc2NvcGUsICRsb2csICRsb2NhdGlvbikge1xuXG4gICAgJHNjb3BlLnByaXZhdGVMZWFndWVzID0gcHJpdmF0ZUxlYWd1ZXMuZGF0YTtcblxuICAgICRzY29wZS5zaG93TGVhZ3VlID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgICAkbG9jYXRpb24udXJsKCcvc2Vhc29uLycgKyBsZWFndWUuc2Vhc29uX2lkICsgJy9sZWFndWUvJyArIGxlYWd1ZS5pZCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKFwicHJpdmF0ZSBsZWFndWVzIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cblByaXZhdGVMZWFndWVzQ29udHJvbGxlci4kaW5qZWN0ID0gWydwcml2YXRlTGVhZ3VlcycsICckc2NvcGUnLCAnJGxvZycsICckbG9jYXRpb24nXTtcbm1vZHVsZS5leHBvcnRzID0gUHJpdmF0ZUxlYWd1ZXNDb250cm9sbGVyO1xuXG4iLCJ2YXIgVmlld1RlYW1QaWNrc0NvbnRyb2xsZXIgPSBmdW5jdGlvbihsZWFndWVXZWVrcywgcGlja3MsICRzY29wZSwgJGxvZywgJGxvY2F0aW9uLCAkc3RhdGVQYXJhbXMpIHtcblxuICAkc2NvcGUubGVhZ3VlV2Vla3MgPSBsZWFndWVXZWVrcy5kYXRhO1xuXG4gICRzY29wZS5waWNrcyA9IHBpY2tzLmRhdGE7XG5cbiAgJHNjb3BlLnNlbGVjdGVkV2Vla1NsdWcgPSAkc3RhdGVQYXJhbXMud2VlaztcblxuICAkc2NvcGUuY29ycmVjdFBpY2tDb3VudCA9IGZ1bmN0aW9uKHBpY2tzKSB7XG4gICAgdmFyIGNvcnJlY3RQaWNrcyA9IF8uZmlsdGVyKHBpY2tzLCBmdW5jdGlvbihwaWNrKSB7XG4gICAgICByZXR1cm4gcGljay5jb3JyZWN0O1xuICAgIH0pO1xuICAgIHJldHVybiBjb3JyZWN0UGlja3MubGVuZ3RoO1xuICB9O1xuXG4gICRzY29wZS5jaGFuZ2VXZWVrID0gZnVuY3Rpb24oc2x1Zykge1xuICAgIGlmIChzbHVnKSB7XG4gICAgICAkbG9jYXRpb24uc2VhcmNoKCd3ZWVrJywgc2x1Zyk7IC8vIGFkZCAvIHJlcGxhY2UgdGhlIHdlZWsgcXVlcnkgcGFyYW1cbiAgICB9IGVsc2Uge1xuICAgICAgJGxvY2F0aW9uLnNlYXJjaCgnd2VlaycsIG51bGwpOyAvLyByZW1vdmUgd2VlayBxdWVyeSBwYXJhbVxuICAgIH1cbiAgfTtcblxuICAkc2NvcGUubWFrZVBpY2sgPSBmdW5jdGlvbih0ZWFtLCBwaWNrKSB7XG4gICAgaWYgKCEkc2NvcGUuaXNDb2FjaCh0ZWFtKSB8fCAocGljayAmJiBwaWNrLmxvY2tlZCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRlYW0ubGVhZ3VlLm1heF9waWNrc19wZXJfd2VlayA9PSAxKSB7XG4gICAgICAkbG9jYXRpb24udXJsKCRsb2NhdGlvbi5wYXRoKCkgKyAnL3BpY2snKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJGxvY2F0aW9uLnVybCgkbG9jYXRpb24ucGF0aCgpICsgJy9waWNrcycpO1xuICAgIH1cbiAgfTtcblxuICAkc2NvcGUucGlja1N0YXR1cyA9IGZ1bmN0aW9uKHBpY2spIHtcbiAgICB2YXIgc3RhdHVzID0gJyc7XG4gICAgaWYgKHBpY2suY29ycmVjdCA9PT0gdHJ1ZSkge1xuICAgICAgc3RhdHVzID0gJ2NoZWNrJztcbiAgICB9IGVsc2UgaWYgKHBpY2suY29ycmVjdCA9PT0gZmFsc2UpIHtcbiAgICAgIHN0YXR1cyA9ICd0aW1lcyc7XG4gICAgfSBlbHNlIGlmIChwaWNrLmxvY2tlZCkge1xuICAgICAgc3RhdHVzID0gJ2xvY2snO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0dXMgPSAndW5sb2NrJztcbiAgICB9XG4gICAgcmV0dXJuIHN0YXR1cztcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwidmlldyB0ZWFtIHBpY2tzIGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcblxufTtcblxuVmlld1RlYW1QaWNrc0NvbnRyb2xsZXIuJGluamVjdCA9IFsnbGVhZ3VlV2Vla3MnLCAncGlja3MnLCAnJHNjb3BlJywgJyRsb2cnLCAnJGxvY2F0aW9uJywgJyRzdGF0ZVBhcmFtcyddO1xubW9kdWxlLmV4cG9ydHMgPSBWaWV3VGVhbVBpY2tzQ29udHJvbGxlcjtcbiIsInZhciBUZWFtUGlja09uZUNvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2csIHBpY2tTZXJ2aWNlKSB7XG5cbiAgJHNjb3BlLmN1cnJlbnRQaWNrID0gXy5maW5kKCRzY29wZS5waWNrcywgZnVuY3Rpb24ocGljayl7IHJldHVybiBwaWNrLndlZWtfaWQgPT09ICRzY29wZS53ZWVrLmlkIH0pO1xuXG4gICRzY29wZS5tYWtlUGljayA9IGZ1bmN0aW9uKGdhbWUsIHNxdWFkKSB7XG4gICAgaWYgKCRzY29wZS5pc0Rpc2FibGVkKGdhbWUsIHNxdWFkKSkge1xuICAgICAgLy8gaWdub3JlIGl0XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgICRzY29wZS5jdXJyZW50UGljayA9IHtcbiAgICAgIHdlZWtfaWQ6IGdhbWUud2Vla19pZCxcbiAgICAgIHdlZWtfdHlwZV9pZDogZ2FtZS53ZWVrX3R5cGVfaWQsXG4gICAgICBnYW1lX2lkOiBnYW1lLmlkLFxuICAgICAgdGVhbV9pZDogJHNjb3BlLnRlYW0uaWQsXG4gICAgICBzcXVhZF9pZDogc3F1YWQuaWQsXG4gICAgICBnYW1lOiBnYW1lLFxuICAgICAgc3F1YWQ6IHNxdWFkXG4gICAgfTtcbiAgICAkc2NvcGUuc2F2ZVBpY2soKTtcbiAgfTtcblxuICAkc2NvcGUuc2F2ZVBpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBwaWNrU2VydmljZS5zYXZlUGljaygkc2NvcGUuY3VycmVudFBpY2spXG4gICAgICAuZmluYWxseShmdW5jdGlvbigpIHtcbiAgICAgICAgJHNjb3BlLnNob3dUZWFtKCRzY29wZS50ZWFtLCBmYWxzZSk7XG4gICAgICB9KTtcbiAgfTtcblxuICAkc2NvcGUuaGFzU3F1YWRCZWVuVXNlZCA9IGZ1bmN0aW9uKGdhbWUsIHNxdWFkKSB7XG4gICAgaWYgKCRzY29wZS50ZWFtLmxlYWd1ZS5hbGxvd19kdXBzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzcXVhZEhhc0JlZW5Vc2VkID0gZmFsc2U7XG4gICAgICBfLmVhY2goJHNjb3BlLnBpY2tzLCBmdW5jdGlvbihwaWNrKSB7XG4gICAgICAgIGlmIChwaWNrLnNxdWFkLmlkID09IHNxdWFkLmlkICYmIHBpY2sud2Vla190eXBlX2lkID09IGdhbWUud2Vla190eXBlX2lkICYmIHBpY2sud2Vla19pZCAhPSBnYW1lLndlZWtfaWQpIHtcbiAgICAgICAgICBzcXVhZEhhc0JlZW5Vc2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gc3F1YWRIYXNCZWVuVXNlZDtcbiAgICB9XG4gIH07XG5cbiAgJHNjb3BlLmlzQ3VycmVudFBpY2tMb2NrZWQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gJHNjb3BlLmN1cnJlbnRQaWNrICYmICRzY29wZS5jdXJyZW50UGljay5sb2NrZWQ7XG4gIH07XG5cbiAgJHNjb3BlLmlzRGlzYWJsZWQgPSBmdW5jdGlvbihnYW1lLCBzcXVhZCkge1xuICAgIHZhciBpc0Rpc2FibGVkID0gZmFsc2U7XG4gICAgaWYgKGdhbWUuc3RhcnRlZCB8fCAkc2NvcGUuaGFzU3F1YWRCZWVuVXNlZChnYW1lLCBzcXVhZCkgfHwgJHNjb3BlLmlzQ3VycmVudFBpY2tMb2NrZWQoKSkge1xuICAgICAgaXNEaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBpc0Rpc2FibGVkO1xuICB9O1xuXG4gICRzY29wZS5waWNrU3RhdHVzID0gZnVuY3Rpb24oZ2FtZSwgc3F1YWQpIHtcbiAgICB2YXIgc3RhdHVzID0gJyc7XG4gICAgaWYgKCFfLmlzVW5kZWZpbmVkKCRzY29wZS5jdXJyZW50UGljaykgJiYgJHNjb3BlLmN1cnJlbnRQaWNrLmdhbWVfaWQgPT0gZ2FtZS5pZCAmJiAkc2NvcGUuY3VycmVudFBpY2suc3F1YWRfaWQgPT0gc3F1YWQuaWQpIHtcbiAgICAgIGlmICgkc2NvcGUuY3VycmVudFBpY2suY29ycmVjdCA9PT0gdHJ1ZSkge1xuICAgICAgICBzdGF0dXMgPSAnY2hlY2snO1xuICAgICAgfSBlbHNlIGlmICgkc2NvcGUuY3VycmVudFBpY2suY29ycmVjdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgc3RhdHVzID0gJ3RpbWVzJztcbiAgICAgIH0gZWxzZSBpZiAoJHNjb3BlLmN1cnJlbnRQaWNrLmxvY2tlZCkge1xuICAgICAgICBzdGF0dXMgPSAnbG9jayc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0dXMgPSAndW5sb2NrJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0YXR1cztcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwicGljayBvbmUgY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuVGVhbVBpY2tPbmVDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJywgJ3BpY2tTZXJ2aWNlJ107XG5tb2R1bGUuZXhwb3J0cyA9IFRlYW1QaWNrT25lQ29udHJvbGxlcjtcbiIsInZhciBUZWFtUGlja01hbnlDb250cm9sbGVyID0gZnVuY3Rpb24oJHJvb3RTY29wZSwgJHNjb3BlLCAkbG9nLCAkYW5jaG9yU2Nyb2xsLCBtZXNzYWdlTW9kZWwsIHBpY2tTZXJ2aWNlKSB7XG5cbiAgdmFyIHNjcm9sbFRvVG9wID0gZnVuY3Rpb24oKSB7XG4gICAgJGFuY2hvclNjcm9sbCgpOyAvLyBoYWNreT9cbiAgfTtcblxuICB2YXIgYWxsUGlja3NNYWRlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICRzY29wZS5waWNrcy5sZW5ndGggPT0gJHNjb3BlLnRlYW0ubGVhZ3VlLm1heF9waWNrc19wZXJfd2VlayB8fCAkc2NvcGUucGlja3MubGVuZ3RoID49ICRzY29wZS5nYW1lcy5sZW5ndGg7XG4gIH07XG5cbiAgdmFyIGdldFBpY2sgPSBmdW5jdGlvbihnYW1lLCBzcXVhZCkge1xuICAgIHZhciBwaWNrID0gXy5maW5kKCRzY29wZS5waWNrcywgZnVuY3Rpb24ocGljaykgeyByZXR1cm4gcGljay5nYW1lX2lkID09PSBnYW1lLmlkICYmIHBpY2suc3F1YWRfaWQgPT09IHNxdWFkLmlkIH0pO1xuICAgIHJldHVybiBwaWNrO1xuICB9O1xuXG4gIHZhciByZW1vdmVQaWNrID0gZnVuY3Rpb24ocGlja1RvUmVtb3ZlKSB7XG4gICAgJHNjb3BlLnBpY2tzID0gXy5yZWplY3QoJHNjb3BlLnBpY2tzLCBmdW5jdGlvbihwaWNrKSB7IHJldHVybiBwaWNrLmdhbWVfaWQgPT09IHBpY2tUb1JlbW92ZS5nYW1lX2lkICYmIHBpY2suc3F1YWRfaWQgPT09IHBpY2tUb1JlbW92ZS5zcXVhZF9pZCB9KVxuICB9O1xuXG4gIHZhciByZW1vdmVHYW1lUGlja3MgPSBmdW5jdGlvbihnYW1lKSB7XG4gICAgJHNjb3BlLnBpY2tzID0gXy5yZWplY3QoJHNjb3BlLnBpY2tzLCBmdW5jdGlvbihwaWNrKSB7IHJldHVybiBwaWNrLmdhbWVfaWQgPT09IGdhbWUuaWQgfSlcbiAgfTtcblxuICB2YXIgYWRkUGljayA9IGZ1bmN0aW9uKGdhbWUsIHNxdWFkKSB7XG4gICAgaWYgKGFsbFBpY2tzTWFkZSgpKSB7XG4gICAgICB2YXIgbWVzc2FnZSA9ICdObyBtb3JlIHBpY2tzIGFsbG93ZWQuIFVuc2VsZWN0IGEgcGljayBpZiBuZWNlc3NhcnkuJztcbiAgICAgIHZhciBtYXhQaWNrcyA9ICRzY29wZS50ZWFtLmxlYWd1ZS5tYXhfcGlja3NfcGVyX3dlZWs7XG4gICAgICBpZiAobWF4UGlja3MpIHtcbiAgICAgICAgbWVzc2FnZSA9ICdPbmx5ICcgKyBtYXhQaWNrcyArICcgcGlja3MgYWxsb3dlZC4gVW5zZWxlY3QgYSBwaWNrIGlmIG5lY2Vzc2FyeS4nO1xuICAgICAgfVxuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnZGFuZ2VyJywgY29udGVudDogbWVzc2FnZSB9LCBmYWxzZSk7XG4gICAgICBzY3JvbGxUb1RvcCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgcGljayA9IHtcbiAgICAgIHdlZWtfaWQ6IGdhbWUud2Vla19pZCxcbiAgICAgIHdlZWtfdHlwZV9pZDogZ2FtZS53ZWVrX3R5cGVfaWQsXG4gICAgICBnYW1lX2lkOiBnYW1lLmlkLFxuICAgICAgdGVhbV9pZDogJHNjb3BlLnRlYW0uaWQsXG4gICAgICBzcXVhZF9pZDogc3F1YWQuaWRcbiAgICB9O1xuICAgICRzY29wZS5waWNrcy5wdXNoKHBpY2spO1xuICB9O1xuXG4gICRzY29wZS50b2dnbGVQaWNrID0gZnVuY3Rpb24oZ2FtZSwgc3F1YWQpIHtcbiAgICBpZiAoISRzY29wZS5pc0NvYWNoKCRzY29wZS50ZWFtKSB8fCBnYW1lLnN0YXJ0ZWQpIHJldHVybjtcbiAgICB2YXIgcGljayA9IGdldFBpY2soZ2FtZSwgc3F1YWQpO1xuICAgIGlmICghXy5pc1VuZGVmaW5lZChwaWNrKSAmJiBwaWNrLmxvY2tlZCkge1xuICAgICAgcmV0dXJuOyAvLyBubyB0b2dnbGluZyBsb2NrZWQgcGlja3NcbiAgICB9XG4gICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdUZWFtUGlja0NvbnRyb2xsZXI6OmVuYWJsZVNhdmVQaWNrcycpO1xuICAgIGlmICghXy5pc1VuZGVmaW5lZChwaWNrKSkge1xuICAgICAgLy8gaWYgYSBwaWNrIGV4aXN0cyBhbHJlYWR5LCB0aGVuIHlvdSBhcmUgYXR0ZW1wdGluZyB0byBkZS1zZWxlY3QgaXRcbiAgICAgIHJlbW92ZVBpY2socGljayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZUdhbWVQaWNrcyhnYW1lKTsgLy8gbm8gMiBwaWNrcyBmb3IgdGhlIHNhbWUgZ2FtZVxuICAgICAgYWRkUGljayhnYW1lLCBzcXVhZCk7XG4gICAgfVxuICB9O1xuXG4gICRzY29wZS5zYXZlUGlja3MgPSBmdW5jdGlvbigpIHtcbiAgICBwaWNrU2VydmljZS5zYXZlUGlja3MoJHNjb3BlLnRlYW0uaWQsICRzY29wZS5waWNrcylcbiAgICAgIC5maW5hbGx5KGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAkc2NvcGUuc2hvd1RlYW0oJHNjb3BlLnRlYW0sIHRydWUpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgJHNjb3BlLmlzRGlzYWJsZWQgPSBmdW5jdGlvbihnYW1lKSB7XG4gICAgdmFyIGlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgICBpZiAoZ2FtZS5zdGFydGVkKSB7XG4gICAgICBpc0Rpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGlzRGlzYWJsZWQ7XG4gIH07XG5cbiAgJHNjb3BlLnBpY2tTdGF0dXMgPSBmdW5jdGlvbihnYW1lLCBzcXVhZCkge1xuICAgIHZhciBzdGF0dXMgPSAnJyxcbiAgICAgIHBpY2sgPSBnZXRQaWNrKGdhbWUsIHNxdWFkKTtcbiAgICBpZiAoIV8uaXNVbmRlZmluZWQocGljaykpIHtcbiAgICAgIGlmIChwaWNrLmNvcnJlY3QgPT09IHRydWUpIHtcbiAgICAgICAgc3RhdHVzID0gJ2NoZWNrJztcbiAgICAgIH0gZWxzZSBpZiAocGljay5jb3JyZWN0ID09PSBmYWxzZSkge1xuICAgICAgICBzdGF0dXMgPSAndGltZXMnO1xuICAgICAgfSBlbHNlIGlmIChwaWNrLmxvY2tlZCkge1xuICAgICAgICBzdGF0dXMgPSAnbG9jayc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0dXMgPSAndW5sb2NrJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0YXR1cztcbiAgfTtcblxuICAkc2NvcGUuJG9uKCdUZWFtUGlja0NvbnRyb2xsZXI6OnNhdmVQaWNrcycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgJHNjb3BlLnNhdmVQaWNrcygpO1xuICB9KTtcbiAgXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJwaWNrIG1hbnkgY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuVGVhbVBpY2tNYW55Q29udHJvbGxlci4kaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRzY29wZScsICckbG9nJywgJyRhbmNob3JTY3JvbGwnLCAnbWVzc2FnZU1vZGVsJywgJ3BpY2tTZXJ2aWNlJ107XG5tb2R1bGUuZXhwb3J0cyA9IFRlYW1QaWNrTWFueUNvbnRyb2xsZXI7XG4iLCJ2YXIgQWRtaW5HYW1lRWRpdENvbnRyb2xsZXIgPSBmdW5jdGlvbihnYW1lLCAkc2NvcGUsICRtb2RhbEluc3RhbmNlKSB7XG5cbiAgJHNjb3BlLmdhbWVEYXRhID0gYW5ndWxhci5jb3B5KGdhbWUpO1xuXG4gICRzY29wZS5jbG9zZVN0YXJ0c0F0ID0gZnVuY3Rpb24oKSB7XG4gICAgJHNjb3BlLnN0YXJ0c0F0RHJvcGRvd24gPSB7XG4gICAgICBpc29wZW46IGZhbHNlXG4gICAgfTtcbiAgfTtcbiAgJHNjb3BlLmNsb3NlU3RhcnRzQXQoKTtcblxuICAkc2NvcGUuZWRpdEdhbWUgPSBmdW5jdGlvbihnYW1lKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuY2xvc2UoZ2FtZSk7XG4gIH07XG5cbiAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuQWRtaW5HYW1lRWRpdENvbnRyb2xsZXIuJGluamVjdCA9IFsnZ2FtZScsICckc2NvcGUnLCAnJG1vZGFsSW5zdGFuY2UnXTtcbm1vZHVsZS5leHBvcnRzID0gQWRtaW5HYW1lRWRpdENvbnRyb2xsZXI7XG4iLCJ2YXIgQWRtaW5HYW1lTmV3Q29udHJvbGxlciA9IGZ1bmN0aW9uKHdlZWssIGxhc3RHYW1lLCBzcXVhZHMsICRzY29wZSwgJG1vZGFsSW5zdGFuY2UpIHtcblxuICAkc2NvcGUud2Vla0RhdGEgPSB3ZWVrO1xuXG4gICRzY29wZS5zcXVhZHMgPSBzcXVhZHMuZGF0YTtcblxuICAkc2NvcGUubmV3R2FtZURhdGEgPSB7XG4gICAgd2Vla19pZDogd2Vlay5pZCxcbiAgICBob21lX3NxdWFkX2lkOiBzcXVhZHMuZGF0YVswXS5pZCxcbiAgICB2aXNpdGluZ19zcXVhZF9pZDogc3F1YWRzLmRhdGFbMF0uaWQsXG4gICAgc3RhcnRzX2F0OiAobGFzdEdhbWUpID8gbGFzdEdhbWUuc3RhcnRzX2F0IDogbW9tZW50KCkuZm9ybWF0KClcbiAgfTtcblxuICAkc2NvcGUuY2xvc2VTdGFydHNBdCA9IGZ1bmN0aW9uKCkge1xuICAgICRzY29wZS5zdGFydHNBdERyb3Bkb3duID0ge1xuICAgICAgaXNvcGVuOiBmYWxzZVxuICAgIH07XG4gIH07XG4gICRzY29wZS5jbG9zZVN0YXJ0c0F0KCk7XG5cbiAgJHNjb3BlLmNyZWF0ZUdhbWUgPSBmdW5jdGlvbihnYW1lKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuY2xvc2UoZ2FtZSk7XG4gIH07XG5cbiAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuQWRtaW5HYW1lTmV3Q29udHJvbGxlci4kaW5qZWN0ID0gWyd3ZWVrJywgJ2xhc3RHYW1lJywgJ3NxdWFkcycsICckc2NvcGUnLCAnJG1vZGFsSW5zdGFuY2UnXTtcbm1vZHVsZS5leHBvcnRzID0gQWRtaW5HYW1lTmV3Q29udHJvbGxlcjtcbiIsInZhciBBZG1pbldlZWtzQ29udHJvbGxlciA9IGZ1bmN0aW9uKHNlYXNvbiwgd2Vla3MsIGxlYWd1ZXMsICRzY29wZSwgJGxvY2F0aW9uKSB7XG5cbiAgJHNjb3BlLnNlYXNvbiA9IHNlYXNvbi5kYXRhO1xuXG4gICRzY29wZS53ZWVrcyA9IHdlZWtzLmRhdGE7XG5cbiAgJHNjb3BlLnByaXZhdGVRdWVyeSA9ICcnO1xuXG4gICRzY29wZS5wdWJsaWNRdWVyeSA9ICcnO1xuXG4gICRzY29wZS5wdWJsaWNMZWFndWVzID0gXy5maWx0ZXIobGVhZ3Vlcy5kYXRhLCBmdW5jdGlvbihsZWFndWUpIHtcbiAgICByZXR1cm4gbGVhZ3VlLnB1YmxpYztcbiAgfSk7XG5cbiAgJHNjb3BlLnByaXZhdGVMZWFndWVzID0gXy5maWx0ZXIobGVhZ3Vlcy5kYXRhLCBmdW5jdGlvbihsZWFndWUpIHtcbiAgICByZXR1cm4gIWxlYWd1ZS5wdWJsaWM7XG4gIH0pO1xuXG4gICRzY29wZS5zaG93V2VlayA9IGZ1bmN0aW9uKHdlZWspIHtcbiAgICAkbG9jYXRpb24udXJsKCRsb2NhdGlvbi5wYXRoKCkgKyAnL3dlZWtzLycgKyB3ZWVrLmlkKTtcbiAgfTtcblxuICAkc2NvcGUuc2hvd0xlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgICRsb2NhdGlvbi51cmwoJy9zZWFzb24vJyArIGxlYWd1ZS5zZWFzb25faWQgKyAnL2xlYWd1ZS8nICsgbGVhZ3VlLmlkKTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuQWRtaW5XZWVrc0NvbnRyb2xsZXIuJGluamVjdCA9IFsnc2Vhc29uJywgJ3dlZWtzJywgJ2xlYWd1ZXMnLCAnJHNjb3BlJywgJyRsb2NhdGlvbiddO1xubW9kdWxlLmV4cG9ydHMgPSBBZG1pbldlZWtzQ29udHJvbGxlcjtcbiIsInZhciBBZG1pbldlZWtFZGl0Q29udHJvbGxlciA9IGZ1bmN0aW9uKHdlZWssIHdlZWtUeXBlcywgJHNjb3BlLCAkbW9kYWxJbnN0YW5jZSkge1xuXG4gICRzY29wZS53ZWVrRGF0YSA9IGFuZ3VsYXIuY29weSh3ZWVrKTtcblxuICAkc2NvcGUud2Vla1R5cGVzID0gd2Vla1R5cGVzLmRhdGE7XG5cbiAgJHNjb3BlLmNsb3NlU3RhcnRzQXQgPSBmdW5jdGlvbigpIHtcbiAgICAkc2NvcGUuc3RhcnRzQXREcm9wZG93biA9IHtcbiAgICAgIGlzb3BlbjogZmFsc2VcbiAgICB9O1xuICB9O1xuICAkc2NvcGUuY2xvc2VTdGFydHNBdCgpO1xuXG4gICRzY29wZS5jbG9zZUVuZHNBdCA9IGZ1bmN0aW9uKCkge1xuICAgICRzY29wZS5lbmRzQXREcm9wZG93biA9IHtcbiAgICAgIGlzb3BlbjogZmFsc2VcbiAgICB9O1xuICB9O1xuICAkc2NvcGUuY2xvc2VFbmRzQXQoKTtcblxuICAkc2NvcGUuZWRpdFdlZWsgPSBmdW5jdGlvbih3ZWVrKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuY2xvc2Uod2Vlayk7XG4gIH07XG5cbiAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgfTtcblxuICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICB9O1xuXG4gICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuQWRtaW5XZWVrRWRpdENvbnRyb2xsZXIuJGluamVjdCA9IFsnd2VlaycsICd3ZWVrVHlwZXMnLCAnJHNjb3BlJywgJyRtb2RhbEluc3RhbmNlJ107XG5tb2R1bGUuZXhwb3J0cyA9IEFkbWluV2Vla0VkaXRDb250cm9sbGVyO1xuIiwidmFyIEFkbWluU2Vhc29uTmV3Q29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJG1vZGFsSW5zdGFuY2UpIHtcblxuICAkc2NvcGUuc2Vhc29uVHlwZXMgPSBbXG4gICAgJ05CQScsXG4gICAgJ05GTCcsXG4gICAgJ05ITCcsXG4gICAgJ01MQidcbiAgXTtcblxuICAkc2NvcGUubmV3U2Vhc29uRGF0YSA9IHtcbiAgICBuYW1lOiAnJyxcbiAgICBzZWFzb25fdHlwZTogJHNjb3BlLnNlYXNvblR5cGVzWzBdLFxuICAgIHN0YXJ0c19hdDogbW9tZW50KCkuZm9ybWF0KCksXG4gICAgZW5kc19hdDogbW9tZW50KCkuZm9ybWF0KClcbiAgfTtcblxuICAkc2NvcGUuY2xvc2VTdGFydHNBdCA9IGZ1bmN0aW9uKCkge1xuICAgICRzY29wZS5zdGFydHNBdERyb3Bkb3duID0ge1xuICAgICAgaXNvcGVuOiBmYWxzZVxuICAgIH07XG4gIH07XG4gICRzY29wZS5jbG9zZVN0YXJ0c0F0KCk7XG5cbiAgJHNjb3BlLmNsb3NlRW5kc0F0ID0gZnVuY3Rpb24oKSB7XG4gICAgJHNjb3BlLmVuZHNBdERyb3Bkb3duID0ge1xuICAgICAgaXNvcGVuOiBmYWxzZVxuICAgIH07XG4gIH07XG4gICRzY29wZS5jbG9zZUVuZHNBdCgpO1xuXG4gICRzY29wZS5jcmVhdGVTZWFzb24gPSBmdW5jdGlvbihzZWFzb24pIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZShzZWFzb24pO1xuICB9O1xuXG4gICRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2FuY2VsJyk7XG4gIH07XG5cbiAgJHNjb3BlLmhhc0Vycm9yID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgfTtcblxuICAkc2NvcGUuaGFzUHJvcGVydHlFcnJvciA9IGZ1bmN0aW9uKGlucHV0LCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRlcnJvcltwcm9wZXJ0eV07XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cbkFkbWluU2Vhc29uTmV3Q29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJG1vZGFsSW5zdGFuY2UnXTtcbm1vZHVsZS5leHBvcnRzID0gQWRtaW5TZWFzb25OZXdDb250cm9sbGVyO1xuIl19
;