require=(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({"app-templates":[function(require,module,exports){
module.exports=require('0VoVTq');
},{}],"0VoVTq":[function(require,module,exports){
angular.module('app.templates', ['common/modules/confirm/confirm.tpl.html', 'common/modules/footer/footer.tpl.html', 'common/modules/header/header.tpl.html', 'common/modules/message/message.tpl.html', 'common/templates/master.tpl.html', 'modules/private/admin/admin.tpl.html', 'modules/private/admin/game/edit/admin.game.edit.tpl.html', 'modules/private/admin/game/new/admin.game.new.tpl.html', 'modules/private/admin/seasons/admin.seasons.tpl.html', 'modules/private/admin/seasons/season/admin.season.tpl.html', 'modules/private/admin/seasons/season/edit/admin.season.edit.tpl.html', 'modules/private/admin/seasons/season/new/admin.season.new.tpl.html', 'modules/private/admin/squads/admin.squads.tpl.html', 'modules/private/admin/squads/edit/admin.squads.edit.tpl.html', 'modules/private/admin/squads/new/admin.squads.new.tpl.html', 'modules/private/admin/week/admin.week.tpl.html', 'modules/private/admin/week/edit/admin.week.edit.tpl.html', 'modules/private/admin/week/new/admin.week.new.tpl.html', 'modules/private/league/contact/league.contact.tpl.html', 'modules/private/league/edit/league.edit.tpl.html', 'modules/private/league/invite/league.invite.tpl.html', 'modules/private/league/invite/request/league.invite.request.tpl.html', 'modules/private/league/join/league.join.tpl.html', 'modules/private/league/league.tpl.html', 'modules/private/league/message/league.message.tpl.html', 'modules/private/league/new/league.new.tpl.html', 'modules/private/league/view/league.view.tpl.html', 'modules/private/leagues/join/leagues.join.tpl.html', 'modules/private/leagues/join/private/leagues.join.private.tpl.html', 'modules/private/leagues/join/public/leagues.join.public.tpl.html', 'modules/private/leagues/leagues.tpl.html', 'modules/private/leagues/manage/leagues.manage.tpl.html', 'modules/private/leagues/my/leagues.my.tpl.html', 'modules/private/play/leagues/play.leagues.tpl.html', 'modules/private/play/play.tpl.html', 'modules/private/play/teams/play.teams.tpl.html', 'modules/private/team/edit/team.edit.tpl.html', 'modules/private/team/message/team.message.tpl.html', 'modules/private/team/pick/many/team.pick.many.tpl.html', 'modules/private/team/pick/one/team.pick.one.tpl.html', 'modules/private/team/pick/team.pick.tpl.html', 'modules/private/team/team.tpl.html', 'modules/private/team/view/picks/team.view.picks.tpl.html', 'modules/private/team/view/team.view.tpl.html', 'modules/private/user/reset/user.reset.tpl.html', 'modules/private/user/user.tpl.html', 'modules/public/abuse/abuse.tpl.html', 'modules/public/faq/faq.tpl.html', 'modules/public/home/home.tpl.html', 'modules/public/register/register.tpl.html', 'modules/public/register/terms/register.terms.tpl.html', 'modules/public/signin/signin.tpl.html']);

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
    "  <h3 class=\"modal-title\">Edit Game [ID: {{gameData.id}} ]}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
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
    "      <label for=\"note\" class=\"col-sm-6 control-label\">Note:</label>\n" +
    "      <div class=\"col-sm-6\">\n" +
    "        <input id=\"note\" name=\"note\" type=\"text\" class=\"form-control\" ng-model=\"gameData.note\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label for=\"visitingSquad\" class=\"col-sm-6 control-label\">Visiting Squad:</label>\n" +
    "      <div class=\"col-sm-6\">\n" +
    "        <select id=\"visitingSquad\" name=\"visitingSquad\" class=\"form-control\" ng-model=\"gameData.visiting_squad_id\" ng-options=\"visitingSquad.id as visitingSquad.name for visitingSquad in squads\"></select>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label for=\"homeSquad\" class=\"col-sm-6 control-label\" >Home Squad:</label>\n" +
    "      <div class=\"col-sm-6\">\n" +
    "        <select id=\"homeSquad\" name=\"homeSquad\" class=\"form-control\" ng-model=\"gameData.home_squad_id\" ng-options=\"homeSquad.id as homeSquad.name for homeSquad in squads\"></select>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label for=\"visitorScore\" class=\"col-sm-6 control-label\">{{getSquad(gameData.visiting_squad_id).name}} Score:</label>\n" +
    "      <div class=\"col-sm-6\">\n" +
    "        <input id=\"visitorScore\" name=\"visitorScore\" type=\"number\" min=\"0\" class=\"form-control\" ng-model=\"gameData.visiting_squad_score\" select-on-click required>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label for=\"homeScore\" class=\"col-sm-6 control-label\">{{getSquad(gameData.home_squad_id).name}} Score:</label>\n" +
    "      <div class=\"col-sm-6\">\n" +
    "        <input id=\"homeScore\" name=\"homeScore\" type=\"number\" min=\"0\" class=\"form-control\" ng-model=\"gameData.home_squad_score\" select-on-click required>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label for=\"complete\" class=\"col-sm-6 control-label\">Completed:</label>\n" +
    "      <div class=\"col-sm-6\">\n" +
    "        <input id=\"complete\" name=\"complete\" type=\"checkbox\" ng-model=\"gameData.complete\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <hr>\n" +
    "    <a ng-show=\"!showOptions\" ng-click=\"showOptions = true\">Show Options</a>\n" +
    "    <a ng-show=\"showOptions\" ng-click=\"showOptions = false\">Hide Options</a>\n" +
    "    <div ng-show=\"showOptions\">\n" +
    "      <div class=\"form-group\">\n" +
    "        <label for=\"shootout\" class=\"col-sm-6 control-label\">Shootout:</label>\n" +
    "        <div class=\"col-sm-6\">\n" +
    "          <input id=\"shootout\" name=\"shootout\" type=\"checkbox\" ng-model=\"gameData.shootout\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <label for=\"overtimes\" class=\"col-sm-6 control-label\">Overtimes:</label>\n" +
    "        <div class=\"col-sm-6\">\n" +
    "          <input id=\"overtimes\" name=\"overtimes\" type=\"number\" class=\"form-control\" ng-model=\"gameData.overtimes\" select-on-click required>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <label for=\"innings\" class=\"col-sm-6 control-label\">Innings:</label>\n" +
    "        <div class=\"col-sm-6\">\n" +
    "          <input id=\"innings\" name=\"innings\" type=\"number\" class=\"form-control\" ng-model=\"gameData.innings\" select-on-click required>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <label for=\"postponed\" class=\"col-sm-6 control-label\">Postponed:</label>\n" +
    "        <div class=\"col-sm-6\">\n" +
    "          <input id=\"postponed\" name=\"postponed\" type=\"checkbox\" ng-model=\"gameData.postponed\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <label for=\"playoff\" class=\"col-sm-6 control-label\">Playoffs:</label>\n" +
    "        <div class=\"col-sm-6\">\n" +
    "          <input id=\"playoff\" name=\"playoff\" type=\"checkbox\" ng-model=\"gameData.playoff\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <label for=\"tbd\" class=\"col-sm-6 control-label\">TBD:</label>\n" +
    "        <div class=\"col-sm-6\">\n" +
    "          <input id=\"tbd\" name=\"tbd\" type=\"checkbox\" ng-model=\"gameData.tbd\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <label for=\"if_necessary\" class=\"col-sm-6 control-label\">If Necessary:</label>\n" +
    "        <div class=\"col-sm-6\">\n" +
    "          <input id=\"if_necessary\" name=\"if_necessary\" type=\"checkbox\" ng-model=\"gameData.if_necessary\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
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
    "      <label class=\"control-label\" for=\"note\">Note:</label>\n" +
    "      <input id=\"note\" name=\"note\" type=\"text\" class=\"form-control\" ng-model=\"newGameData.note\">\n" +
    "    </div>\n" +
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
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "        <input id=\"playoff\" name=\"playoff\" type=\"checkbox\" ng-model=\"newGameData.playoff\"> Playoffs\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "        <input id=\"tbd\" name=\"tbd\" type=\"checkbox\" ng-model=\"newGameData.tbd\"> TBD\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "        <input id=\"if_necessary\" name=\"if_necessary\" type=\"checkbox\" ng-model=\"newGameData.if_necessary\"> If Necessary\n" +
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
    "  <h3>{{season.name}} ({{season.start_display}} - {{season.end_display}}) <small><a ng-click=\"editSeason(season)\">[ edit ]</a></small></h3>\n" +
    "</div>\n" +
    "<div class=\"season-weeks-header-row row\">\n" +
    "  <div class=\"col-sm-12 col-md-12\">\n" +
    "    <h4>Weeks [ {{weeks.length}} ] <small><a ng-click=\"createWeek(season)\">[ create ]</a></small></h4>\n" +
    "    <hr>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"season-weeks list-group\">\n" +
    "  <a ng-repeat=\"week in weeks\" ng-click=\"showWeek(week)\" class=\"list-group-item\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-6 col-md-6\"><i class=\"fa fa-check fa-fw\" ng-show=\"week.complete === true\" title=\"complete week\"></i> {{week.display}}</div>\n" +
    "      <div class=\"start-end col-sm-6 col-md-6\">\n" +
    "        <span class=\"badge\">{{week.game_complete_count}} / {{week.game_count}} game<span ng-show=\"week.game_count !== 1\">s</span></span>\n" +
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

angular.module("modules/private/admin/seasons/season/edit/admin.season.edit.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/admin/seasons/season/edit/admin.season.edit.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Edit Season</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <form name=\"seasonForm\" role=\"form\" novalidate>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(seasonForm.seasonName), 'has-feedback': hasError(seasonForm.seasonName)}\">\n" +
    "      <label class=\"control-label\" for=\"seasonName\">Season name:\n" +
    "        <small ng-show=\"hasPropertyError(seasonForm.seasonName, 'required')\">[ Required ]</small>\n" +
    "        <small ng-show=\"hasPropertyError(seasonForm.seasonName, 'maxlength')\">[ Too Long ]</small>\n" +
    "      </label>\n" +
    "      <input id=\"seasonName\" name=\"seasonName\" type=\"text\" class=\"form-control\" ng-model=\"seasonData.name\" ng-maxlength=\"20\" required>\n" +
    "      <span ng-show=\"hasError(seasonForm.seasonName)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(seasonForm.seasonType), 'has-feedback': hasError(seasonForm.seasonType)}\">\n" +
    "      <label class=\"control-label\" for=\"seasonType\">Season type (NBA, NFL, etc):\n" +
    "        <small ng-show=\"hasPropertyError(seasonForm.seasonType, 'required')\">[ Required ]</small>\n" +
    "        <small ng-show=\"hasPropertyError(seasonForm.seasonType, 'maxlength')\">[ Too Long ]</small>\n" +
    "      </label>\n" +
    "      <input id=\"seasonType\" name=\"seasonType\" type=\"text\" class=\"form-control\" ng-model=\"seasonData.season_type\" ng-maxlength=\"10\" required>\n" +
    "      <span ng-show=\"hasError(seasonForm.seasonType)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"control-label\">Starts At (Local Time):</label>\n" +
    "      <div class=\"dropdown\" is-open=\"startsAtDropdown.isopen\">\n" +
    "        <a class=\"dropdown-toggle\" role=\"button\" data-toggle=\"dropdown\" data-target=\"#\" href=\"#\">\n" +
    "          <div class=\"input-group\">\n" +
    "            <input type=\"text\" class=\"form-control\" formatted-date data-ng-model=\"seasonData.starts_at\" ng-required=\"true\" ng-disabled=\"true\">\n" +
    "            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-calendar\"></i></span>\n" +
    "          </div>\n" +
    "          <small>Set to future if season is not ready to go live yet</small>\n" +
    "        </a>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dLabel\">\n" +
    "          <datetimepicker data-ng-model=\"seasonData.starts_at\" data-on-set-time=\"closeStartsAt()\" data-datetimepicker-config=\"{ minuteStep: 5 }\"/>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"control-label\">Ends At (Local Time):</label>\n" +
    "      <div class=\"dropdown\" is-open=\"endsAtDropdown.isopen\">\n" +
    "        <a class=\"dropdown-toggle\" role=\"button\" data-toggle=\"dropdown\" data-target=\"#\" href=\"#\">\n" +
    "          <div class=\"input-group\">\n" +
    "            <input type=\"text\" class=\"form-control\" formatted-date data-ng-model=\"seasonData.ends_at\" ng-required=\"true\" ng-disabled=\"true\">\n" +
    "            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-calendar\"></i></span>\n" +
    "          </div>\n" +
    "          <small>Should be the end date of the season's last week</small>\n" +
    "        </a>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dLabel\">\n" +
    "          <datetimepicker data-ng-model=\"seasonData.ends_at\" data-on-set-time=\"closeEndsAt()\" data-datetimepicker-config=\"{ minuteStep: 5 }\"/>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "  <button class=\"btn btn-primary\" ng-disabled=\"seasonForm.$invalid\" ng-click=\"updateSeason(seasonData)\">Update</button>\n" +
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
    "      <input id=\"seasonName\" name=\"seasonName\" type=\"text\" class=\"form-control\" ng-model=\"newSeasonData.name\" ng-maxlength=\"20\" required>\n" +
    "      <span ng-show=\"hasError(newSeasonForm.seasonName)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(newSeasonForm.seasonType), 'has-feedback': hasError(newSeasonForm.seasonType)}\">\n" +
    "      <label class=\"control-label\" for=\"seasonType\">Season type (NBA, NFL, etc):\n" +
    "        <small ng-show=\"hasPropertyError(newSeasonForm.seasonType, 'required')\">[ Required ]</small>\n" +
    "        <small ng-show=\"hasPropertyError(newSeasonForm.seasonType, 'maxlength')\">[ Too Long ]</small>\n" +
    "      </label>\n" +
    "      <input id=\"seasonType\" name=\"seasonType\" type=\"text\" class=\"form-control\" ng-model=\"newSeasonData.season_type\" ng-maxlength=\"10\" required>\n" +
    "      <span ng-show=\"hasError(newSeasonForm.seasonType)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"control-label\">Starts At (Local Time):</label>\n" +
    "      <div class=\"dropdown\" is-open=\"startsAtDropdown.isopen\">\n" +
    "        <a class=\"dropdown-toggle\" role=\"button\" data-toggle=\"dropdown\" data-target=\"#\" href=\"#\">\n" +
    "          <div class=\"input-group\">\n" +
    "            <input type=\"text\" class=\"form-control\" formatted-date data-ng-model=\"newSeasonData.starts_at\" ng-required=\"true\" ng-disabled=\"true\">\n" +
    "            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-calendar\"></i></span>\n" +
    "          </div>\n" +
    "          <small>Set to future if season is not ready to go live yet</small>\n" +
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
    "          <small>Should be the end date of the season's last week</small>\n" +
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

angular.module("modules/private/admin/squads/admin.squads.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/admin/squads/admin.squads.tpl.html",
    "<div class=\"squads-header-row row\">\n" +
    "  <div class=\"col-sm-9 col-md-9\">\n" +
    "    <h3 class=\"squads-header\">Manage Squads</h3>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-3 col-md-3\">\n" +
    "    <div class=\"squads-btn-group\">\n" +
    "      <button type=\"button\" class=\"create-squad-btn btn btn-primary\" ng-click=\"createSquad()\">Create Squad</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<hr>\n" +
    "<div class=\"squads-tabs\">\n" +
    "  <ul class=\"nav nav-tabs\">\n" +
    "    <li class=\"active\"><a>Squads [ {{(squads | filter:search:strict).length}} ]</a></li>\n" +
    "  </ul>\n" +
    "  <div class=\"squad-types\">\n" +
    "    <select class=\"form-control\" ng-model=\"selectedSquadType\" ng-options=\"squadType as squadType for squadType in squadTypes\">\n" +
    "      <option value=\"\">All Squad Types</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "  <div class=\"input-group custom-search-form\">\n" +
    "    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" ng-model=\"query\">\n" +
    "    <span class=\"input-group-btn\">\n" +
    "      <button class=\"btn btn-default\" type=\"button\"><span class=\"glyphicon glyphicon-search\"></span></button>\n" +
    "    </span>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"squads list-group\">\n" +
    "  <a ng-repeat=\"squad in squads | filter:search:strict\" ng-click=\"editSquad(squad)\" class=\"list-group-item\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"squad-display-name col-sm-6 col-md-6\">{{squad.name}} [ {{squad.abbrev}} ]<br><span class=\"squad-record\">{{squad.record}}</span></div>\n" +
    "      <div class=\"squad-type col-sm-6 col-md-6\">{{squad.squad_type}}<br>Seed: {{squad.seed}}</div>\n" +
    "    </div>\n" +
    "  </a>\n" +
    "</div>");
}]);

angular.module("modules/private/admin/squads/edit/admin.squads.edit.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/admin/squads/edit/admin.squads.edit.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Edit Squad</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <form name=\"squadForm\" role=\"form\" novalidate>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(squadForm.squadName), 'has-feedback': hasError(squadForm.squadName)}\">\n" +
    "      <label class=\"control-label\" for=\"squadName\">Squad name\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.squadName, 'required')\">[ Required ]</small>\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.squadName, 'maxlength')\">[ Too Long ]</small>\n" +
    "      </label>\n" +
    "      <input id=\"squadName\" name=\"squadName\" type=\"text\" class=\"form-control\" ng-model=\"squadData.name\" ng-maxlength=\"30\" required>\n" +
    "      <span ng-show=\"hasError(squadForm.squadName)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(squadForm.squadShort), 'has-feedback': hasError(squadForm.squadShort)}\">\n" +
    "      <label class=\"control-label\" for=\"squadShort\">Short Name\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.squadShort, 'required')\">[ Required ]</small>\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.squadShort, 'maxlength')\">[ Too Long ]</small>\n" +
    "      </label>\n" +
    "      <input id=\"squadShort\" name=\"squadShort\" type=\"text\" class=\"form-control\" ng-model=\"squadData.short\" ng-maxlength=\"30\" required>\n" +
    "      <span ng-show=\"hasError(squadForm.squadShort)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(squadForm.squadAbbrev), 'has-feedback': hasError(squadForm.squadAbbrev)}\">\n" +
    "      <label class=\"control-label\" for=\"squadAbbrev\">Abbreviation\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.squadAbbrev, 'required')\">[ Required ]</small>\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.squadAbbrev, 'maxlength')\">[ Too Long ]</small>\n" +
    "      </label>\n" +
    "      <input id=\"squadAbbrev\" name=\"squadAbbrev\" type=\"text\" class=\"form-control\" ng-model=\"squadData.abbrev\" ng-maxlength=\"30\" required>\n" +
    "      <span ng-show=\"hasError(squadForm.squadAbbrev)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(squadForm.squadType), 'has-feedback': hasError(squadForm.squadType)}\">\n" +
    "      <label class=\"control-label\" for=\"squadType\">Type (NBA, NFL, etc)\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.squadType, 'required')\">[ Required ]</small>\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.squadType, 'maxlength')\">[ Too Long ]</small>\n" +
    "      </label>\n" +
    "      <input id=\"squadType\" name=\"squadType\" type=\"text\" class=\"form-control\" ng-model=\"squadData.squad_type\" ng-maxlength=\"30\" required>\n" +
    "      <span ng-show=\"hasError(squadForm.squadType)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(squadForm.wins), 'has-feedback': hasError(squadForm.wins)}\">\n" +
    "      <label class=\"control-label\" for=\"wins\">Wins\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.wins, 'required')\">[ Number Required ]</small>\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.wins, 'min')\">[ Zero or greater ]</small>\n" +
    "      </label>\n" +
    "      <input id=\"wins\" name=\"wins\" type=\"number\" placeholder=\"Greater than zero\" min=\"0\" class=\"form-control\" ng-model=\"squadData.wins\" select-on-click required>\n" +
    "      <span ng-show=\"hasError(squadForm.wins)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(squadForm.losses), 'has-feedback': hasError(squadForm.losses)}\">\n" +
    "      <label class=\"control-label\" for=\"wins\">Losses\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.losses, 'required')\">[ Number Required ]</small>\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.losses, 'min')\">[ Zero or greater ]</small>\n" +
    "      </label>\n" +
    "      <input id=\"losses\" name=\"losses\" type=\"number\" placeholder=\"Greater than zero\" min=\"0\" class=\"form-control\" ng-model=\"squadData.losses\" select-on-click required>\n" +
    "      <span ng-show=\"hasError(squadForm.losses)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(squadForm.ties), 'has-feedback': hasError(squadForm.ties)}\">\n" +
    "      <label class=\"control-label\" for=\"ties\">Ties\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.ties, 'required')\">[ Number Required ]</small>\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.ties, 'min')\">[ Zero or greater ]</small>\n" +
    "      </label>\n" +
    "      <input id=\"ties\" name=\"ties\" type=\"number\" placeholder=\"Greater than zero\" min=\"0\" class=\"form-control\" ng-model=\"squadData.ties\" select-on-click required>\n" +
    "      <span ng-show=\"hasError(squadForm.ties)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(squadForm.seed), 'has-feedback': hasError(squadForm.seed)}\">\n" +
    "      <label class=\"control-label\" for=\"seed\">Seed\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.seed, 'required')\">[ Number Required ]</small>\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.seed, 'min')\">[ Zero or greater ]</small>\n" +
    "      </label>\n" +
    "      <input id=\"seed\" name=\"seed\" type=\"number\" placeholder=\"Greater than zero\" min=\"0\" class=\"form-control\" ng-model=\"squadData.seed\" select-on-click required>\n" +
    "      <span ng-show=\"hasError(squadForm.seed)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "  <button class=\"btn btn-primary\" ng-disabled=\"squadForm.$invalid\" ng-click=\"editSquad(squadData)\">Edit</button>\n" +
    "</div>");
}]);

angular.module("modules/private/admin/squads/new/admin.squads.new.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/admin/squads/new/admin.squads.new.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Create Squad</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <form name=\"squadForm\" role=\"form\" novalidate>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(squadForm.squadName), 'has-feedback': hasError(squadForm.squadName)}\">\n" +
    "      <label class=\"control-label\" for=\"squadName\">Squad name\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.squadName, 'required')\">[ Required ]</small>\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.squadName, 'maxlength')\">[ Too Long ]</small>\n" +
    "      </label>\n" +
    "      <input id=\"squadName\" name=\"squadName\" type=\"text\" class=\"form-control\" ng-model=\"squadData.name\" ng-maxlength=\"30\" required>\n" +
    "      <span ng-show=\"hasError(squadForm.squadName)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(squadForm.squadShort), 'has-feedback': hasError(squadForm.squadShort)}\">\n" +
    "      <label class=\"control-label\" for=\"squadShort\">Short Name\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.squadShort, 'required')\">[ Required ]</small>\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.squadShort, 'maxlength')\">[ Too Long ]</small>\n" +
    "      </label>\n" +
    "      <input id=\"squadShort\" name=\"squadShort\" type=\"text\" class=\"form-control\" ng-model=\"squadData.short\" ng-maxlength=\"30\" required>\n" +
    "      <span ng-show=\"hasError(squadForm.squadShort)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(squadForm.squadAbbrev), 'has-feedback': hasError(squadForm.squadAbbrev)}\">\n" +
    "      <label class=\"control-label\" for=\"squadAbbrev\">Abbreviation\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.squadAbbrev, 'required')\">[ Required ]</small>\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.squadAbbrev, 'maxlength')\">[ Too Long ]</small>\n" +
    "      </label>\n" +
    "      <input id=\"squadAbbrev\" name=\"squadAbbrev\" type=\"text\" class=\"form-control\" ng-model=\"squadData.abbrev\" ng-maxlength=\"30\" required>\n" +
    "      <span ng-show=\"hasError(squadForm.squadAbbrev)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(squadForm.squadType), 'has-feedback': hasError(squadForm.squadType)}\">\n" +
    "      <label class=\"control-label\" for=\"squadType\">Type (NBA, NFL, etc)\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.squadType, 'required')\">[ Required ]</small>\n" +
    "        <small ng-show=\"hasPropertyError(squadForm.squadType, 'maxlength')\">[ Too Long ]</small>\n" +
    "      </label>\n" +
    "      <input id=\"squadType\" name=\"squadType\" type=\"text\" class=\"form-control\" ng-model=\"squadData.squad_type\" ng-maxlength=\"30\" required>\n" +
    "      <span ng-show=\"hasError(squadForm.squadType)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "  <button class=\"btn btn-primary\" ng-disabled=\"squadForm.$invalid\" ng-click=\"createSquad(squadData)\">Create</button>\n" +
    "</div>");
}]);

angular.module("modules/private/admin/week/admin.week.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/admin/week/admin.week.tpl.html",
    "<div class=\"games-header-row row\">\n" +
    "  <div class=\"col-sm-6 col-md-6\">\n" +
    "    <h3><i class=\"fa fa-check fa-fw\" ng-show=\"weekData.complete === true\" title=\"Week complete\"></i> {{weekData.season_type}} {{weekData.display}} <small><a ng-click=\"editWeek(weekData)\">[ edit ]</a></small><br>\n" +
    "      <small>Reminder Sent: <span ng-show=\"!weekData.reminder_sent_at\">N/A</span><span ng-show=\"weekData.reminder_sent_at\">{{dateFormat(weekData.reminder_sent_at, \"ddd mmm d h:MM TT (Z)\")}}</span></small>\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-6 col-md-6\">\n" +
    "    <div class=\"week-btn-group\">\n" +
    "      <button type=\"button\" class=\"send-reminder-btn btn btn-default\" ng-click=\"confirmSendReminder(weekData)\">Send Reminder</button>\n" +
    "      <button type=\"button\" class=\"create-game-btn btn btn-primary\" ng-click=\"createGame(weekData, games)\">Create Game</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"games-tab\">\n" +
    "  <ul class=\"nav nav-tabs\">\n" +
    "    <li class=\"active\"><a>Games [ {{games.length}} ]</a></li>\n" +
    "  </ul>\n" +
    "  <div class=\"input-group custom-search-form filter-league-join\">\n" +
    "    <input type=\"text\" class=\"form-control\" placeholder=\"Search games...\" ng-model=\"gameQuery\">\n" +
    "    <span class=\"input-group-btn\">\n" +
    "      <button class=\"btn btn-default\" type=\"button\"><span class=\"glyphicon glyphicon-search\"></span></button>\n" +
    "    </span>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"week-games list-group\">\n" +
    "  <a ng-repeat=\"game in games | filter:search:strict\" ng-click=\"editGame(game, weekData)\" class=\"list-group-item\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"game-display-name col-sm-6 col-md-6\">\n" +
    "        <i class=\"fa fa-check fa-fw\" ng-show=\"game.complete\" title=\"Game complete\"></i>\n" +
    "        <i class=\"fa fa-clock-o fa-fw\" style=\"color: #ff472e;\" ng-show=\"game.postponed && !game.complete\" title=\"Game postponed\"></i>\n" +
    "        <span ng-show=\"game.playoff\">*</span>{{game.display}}<br>\n" +
    "        <span class=\"game-starts\"><span style=\"color:#FF0000;\" ng-show=\"game.tbd\">TBD</span><span ng-show=\"!game.tbd\">{{dateFormat(game.starts_at, \"ddd, mmm d yyyy h:MM TT (Z)\")}}</span><span ng-show=\"game.if_necessary\"> *If Necessary</span><span ng-show=\"game.postponed\"> | *PPD</span></span></div>\n" +
    "      <div class=\"game-score col-sm-6 col-md-6\">\n" +
    "        <span ng-show=\"game.note.length > 0\">{{game.note}} - </span>{{game.squads[0].name}}: {{game.visiting_squad_score}} | {{game.squads[1].name}}: {{game.home_squad_score}} <span>{{game.ot_display}}</span><br>\n" +
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
    "    <div class=\"form-group\">\n" +
    "      <label for=\"weekType\" class=\"col-sm-3 control-label\">Week Type:</label>\n" +
    "      <div class=\"col-sm-9\">\n" +
    "        <select id=\"weekType\" name=\"weekType\" class=\"form-control\" ng-model=\"weekData.week_type_id\" ng-options=\"weekType.id as weekType.description for weekType in weekTypes\"></select>\n" +
    "        <small>week_type_id: {{weekData.week_type_id}}</small>\n" +
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

angular.module("modules/private/admin/week/new/admin.week.new.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/admin/week/new/admin.week.new.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Create Week</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <form name=\"weekForm\" class=\"new-week-form form-horizontal\" role=\"form\" novalidate>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(weekForm.weekName), 'has-feedback': hasError(weekForm.weekName)}\">\n" +
    "      <label for=\"weekName\" class=\"col-sm-3 control-label\">Name:</label>\n" +
    "      <div class=\"col-sm-9\">\n" +
    "        <input id=\"weekName\" name=\"weekName\" type=\"text\" class=\"form-control\" ng-model=\"weekData.name\" ng-maxlength=\"30\" required>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(weekForm.weekName, 'required')\">Required</small>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(weekForm.weekName, 'maxlength')\">Too Long</small>\n" +
    "        <span ng-show=\"hasError(weekForm.weekName)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label for=\"weekType\" class=\"col-sm-3 control-label\">Week Type (Use 1 & 2):</label>\n" +
    "      <div class=\"col-sm-9\">\n" +
    "        <select id=\"weekType\" name=\"weekType\" class=\"form-control\" ng-model=\"weekData.week_type_id\" ng-options=\"weekType.id as weekType.description for weekType in weekTypes\"></select>\n" +
    "        <small>week_type_id: {{weekData.week_type_id}}</small>\n" +
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
    "  <button class=\"btn btn-primary\" ng-disabled=\"weekForm.$invalid\" ng-click=\"createWeek(weekData)\">Create</button>\n" +
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
    "<div class=\"edit-league-header-row row\">\n" +
    "  <div class=\"col-sm-12 col-md-12\">\n" +
    "    <h3>Edit {{leagueData.name}}</h3>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<hr>\n" +
    "<form name=\"leagueForm\" class=\"edit-league-form\" role=\"form\" novalidate>\n" +
    "  <div class=\"row form-group product-chooser\">\n" +
    "    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n" +
    "      <div class=\"product-chooser-item\" ng-class=\"{'selected': leagueData.public == true}\" ng-click=\"leagueData.public = true\">\n" +
    "        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "          <span class=\"title\"><i class=\"fa fa-unlock icon\"></i> Public League</span>\n" +
    "          <span class=\"description\">Anyone can join a public league. Members of a public league can also invite others to join the league.</span>\n" +
    "        </div>\n" +
    "        <div class=\"clear\"></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n" +
    "      <div class=\"product-chooser-item\" ng-class=\"{'selected': leagueData.public == false}\" ng-click=\"leagueData.public = false\">\n" +
    "        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "          <span class=\"title\"><i class=\"fa fa-lock icon\"></i> Private League</span>\n" +
    "          <span class=\"description\">An invite from the commish is required to join a private league. Only the commish can invite people to join the league.</span>\n" +
    "        </div>\n" +
    "        <div class=\"clear\"></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row form-group product-chooser\" ng-show=\"!leagueData.started\">\n" +
    "    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n" +
    "      <div class=\"product-chooser-item\" ng-class=\"{'selected': leagueData.elimination == false}\" ng-click=\"leagueData.max_picks_per_week = null; leagueData.elimination = false\">\n" +
    "        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "          <span class=\"title\"><i class=\"fa fa-th-list\"></i> Pick'em Format</span>\n" +
    "          <span class=\"description\">Pick'em format allows teams to make one or more picks each week. The commish determines how many picks can be made each week.</span>\n" +
    "        </div>\n" +
    "        <div class=\"clear\"></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n" +
    "      <div class=\"product-chooser-item\" ng-class=\"{'selected': leagueData.elimination == true}\" ng-click=\"leagueData.max_picks_per_week = 1; leagueData.elimination = true\">\n" +
    "        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "          <span class=\"title\"><i class=\"fa fa-check\"></i> Survivor Format</span>\n" +
    "          <span class=\"description\">Survivor format requires a team to make a different pick each week. If you fail to pick a loser, your team is eliminated. The last team standing wins.</span>\n" +
    "        </div>\n" +
    "        <div class=\"clear\"></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"edit-league-details\">\n" +
    "    <div class=\"row\" ng-show=\"leagueData.started\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"control-label\">League format</label>\n" +
    "          <input type=\"text\" class=\"form-control\" value=\"Pick'em [ no elimination ]\" ng-show=\"!leagueData.elimination\" ng-disabled=\"true\">\n" +
    "          <input type=\"text\" class=\"form-control\" value=\"Survivor [ single elimination ]\" ng-show=\"leagueData.elimination\" ng-disabled=\"true\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"control-label\" for=\"maxPicks\">Picks per week</label>\n" +
    "          <select id=\"maxPicks\" name=\"maxPicks\" class=\"form-control\" ng-disabled=\"leagueData.elimination\" ng-model=\"leagueData.max_picks_per_week\" ng-options=\"maxPick.number as maxPick.display for maxPick in maxPicksPerWeek\"></select>\n" +
    "          <small class=\"input-error\" ng-show=\"leagueData.elimination\"><i class=\"fa fa-warning fa-fw\" title=\"Warning\"></i> Survivor leagues only allow 1 pick per week, no repeats</small>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\" ng-show=\"leagueData.elimination\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" ng-model=\"leagueData.eliminate_on_tie\" ng-disabled=\"leagueData.started\"> eliminate a team that picks a tie\n" +
    "          </label>\n" +
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
    "    <div class=\"edit-league-btn-group\">\n" +
    "      <button class=\"edit-league-btn btn btn-primary\" ng-disabled=\"leagueForm.$invalid || editBtnDisabled\" ng-click=\"updateLeague(leagueData)\">Update League</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</form>\n" +
    "");
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
    "<div class=\"create-league-header-row row\">\n" +
    "  <div class=\"col-sm-12 col-md-12\">\n" +
    "    <h3>Create League</h3>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<hr>\n" +
    "<form name=\"leagueForm\" class=\"create-league-form\" role=\"form\" novalidate>\n" +
    "  <div class=\"row form-group product-chooser\">\n" +
    "    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n" +
    "        <div class=\"product-chooser-item\" ng-class=\"{'selected': leagueData.public == true}\" ng-click=\"leagueData.public = true\">\n" +
    "          <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "            <span class=\"title\"><i class=\"fa fa-unlock icon\"></i> Public League</span>\n" +
    "            <span class=\"description\">Anyone can join a public league. Members of a public league can also invite others to join the league.</span>\n" +
    "          </div>\n" +
    "          <div class=\"clear\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n" +
    "      <div class=\"product-chooser-item\" ng-class=\"{'selected': leagueData.public == false}\" ng-click=\"leagueData.public = false\">\n" +
    "        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "          <span class=\"title\"><i class=\"fa fa-lock icon\"></i> Private League</span>\n" +
    "          <span class=\"description\">An invite from the commish is required to join a private league. Only the commish can invite people to join the league.</span>\n" +
    "        </div>\n" +
    "        <div class=\"clear\"></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row form-group product-chooser\">\n" +
    "    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n" +
    "        <div class=\"product-chooser-item\" ng-class=\"{'selected': leagueData.elimination == false}\" ng-click=\"leagueData.max_picks_per_week = null; leagueData.elimination = false\">\n" +
    "          <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "            <span class=\"title\"><i class=\"fa fa-th-list\"></i> Pick'em Format</span>\n" +
    "            <span class=\"description\">Pick'em format allows teams to make one or more picks each week. The commish determines how many picks can be made each week.</span>\n" +
    "          </div>\n" +
    "          <div class=\"clear\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n" +
    "      <div class=\"product-chooser-item\" ng-class=\"{'selected': leagueData.elimination == true}\" ng-click=\"leagueData.max_picks_per_week = 1; leagueData.elimination = true\">\n" +
    "        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "          <span class=\"title\"><i class=\"fa fa-check\"></i> Survivor Format</span>\n" +
    "          <span class=\"description\">Survivor format requires a team to make a different pick each week. If you fail to pick a loser, your team is eliminated. The last team standing wins.</span>\n" +
    "        </div>\n" +
    "        <div class=\"clear\"></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"create-league-details\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"control-label\" for=\"maxPicks\">Picks per week</label>\n" +
    "          <select id=\"maxPicks\" name=\"maxPicks\" class=\"form-control\" ng-disabled=\"leagueData.elimination\" ng-model=\"leagueData.max_picks_per_week\" ng-options=\"maxPick.number as maxPick.display for maxPick in maxPicksPerWeek\"></select>\n" +
    "          <small class=\"input-error\" ng-show=\"leagueData.elimination\"><i class=\"fa fa-warning fa-fw\" title=\"Warning\"></i> Survivor leagues only allow 1 pick per week, no repeats</small>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\" ng-show=\"leagueData.elimination\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" ng-model=\"leagueData.eliminate_on_tie\"> eliminate a team that picks a tie\n" +
    "          </label>\n" +
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
    "          <select id=\"season\" name=\"season\" class=\"form-control\" ng-change=\"changeSeason()\" ng-model=\"leagueData.season_id\" ng-options=\"season.id as season.name for season in seasons\"></select>\n" +
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
    "    <div class=\"create-league-btn-group\">\n" +
    "      <button class=\"create-league-btn btn btn-primary\" ng-disabled=\"leagueForm.$invalid || createBtnDisabled\" ng-click=\"createLeague(leagueData)\">Save League</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</form>");
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
    "      <small>{{starts(leagueData)}}</small>\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-5 col-md-5\">\n" +
    "    <button type=\"button\" class=\"join-btn btn btn-primary\" ng-show=\"!leagueData.closed\" ng-click=\"joinLeague(leagueData)\">Join ({{leagueData.max_teams_per_user}}X max)</button>\n" +
    "    <button type=\"button\" class=\"invite-btn btn btn-default\" ng-show=\"!leagueData.closed && (leagueData.public || isCommish(leagueData))\" ng-click=\"invite(leagueData.id, isCommish(leagueData), leagueData.closed)\">Invite</button>\n" +
    "    <button type=\"button\" class=\"request-invite-btn btn btn-default\" ng-show=\"!leagueData.closed && !leagueData.public && !isCommish(leagueData)\" ng-click=\"requestInvite(leagueData)\">Request Invite</button>\n" +
    "    <h3 class=\"league-meta-right\" ng-show=\"leagueData.closed\">\n" +
    "      <small>{{leagueData.format}}</small><br>\n" +
    "      <small>Commish [ {{leagueData.commish_names.join(', ')}} ]</small>\n" +
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
    "    <li class=\"active\"><a>Teams [ <span ng-show=\"leagueData.elimination\">{{aliveTeamCount(leagueTeams)}} / </span>{{leagueData.team_count}} ]</a></li>\n" +
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
    "    <a class=\"list-group-item\" ng-repeat=\"team in leagueTeams | orderBy:[inPlay, '-correct_picks_count', 'name'] | activeTeamFilter:teamOptions | filter:search:strict | offsetFilter:(currentTeamPage-1)*teamsPerPage | limitTo:teamsPerPage\" ng-click=\"showTeam(team)\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"league-name col-sm-5 col-md-5\">\n" +
    "          <i class=\"fa fa-user fa-fw\" ng-show=\"isCoach(team)\" title=\"My team\"></i><i class=\"fa fa-check fa-fw\" ng-show=\"!isCoach(team) && isCommish(leagueData) && team.paid == true\" title=\"Paid\"></i> <span class=\"team-name\" ng-class=\"{'inactive': !team.active || isEliminated(team)}\">{{team.name}}</span>\n" +
    "          <br>\n" +
    "          <span class=\"coach-name\">Coach: {{coachName(team)}}</span>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-7 col-md-7\">\n" +
    "          <span class=\"current-pick\" ng-class=\"{'no-pick': team.current_pick.warning == true}\" ng-show=\"team.active && team.started\">\n" +
    "            <i class=\"fa fa-{{pickStatus(team.current_pick)}} fa-fw\"></i>\n" +
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
    "        <div class=\"league-name col-sm-5 col-md-5\">{{league.name}}<br><span class=\"private-league-meta\">{{starts(league)}}</span></div>\n" +
    "        <div class=\"col-sm-7 col-md-7\">\n" +
    "          <span class=\"private-league-meta\">{{league.format}}<br>Commish: {{league.commish_names.join(', ')}}</span>\n" +
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
    "            <div class=\"league-name col-sm-5 col-md-5\">{{league.name}}<br><span class=\"public-league-meta\">{{starts(league)}}</span></div>\n" +
    "            <div class=\"col-sm-7 col-md-7\">\n" +
    "                <span class=\"public-league-meta\">{{league.format}}<br>Commish: {{league.commish_names.join(', ')}}</span>\n" +
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
    "          <span class=\"my-league-meta\">{{league.format}}<br>Commish: {{league.commish_names.join(', ')}}</span>\n" +
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
    "    <a class=\"list-group-item\" ng-class=\"{'inactive': !team.active || !team.alive}\" ng-repeat=\"team in teams | orderBy:[inPlay, 'name'] | filter:search:strict | offsetFilter:(currentTeamPage-1)*teamsPerPage | limitTo:teamsPerPage\" ng-click=\"showTeam(team)\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"league-name col-sm-5 col-md-5\">\n" +
    "          <i class=\"fa fa-comment fa-fw\" ng-show=\"team.message.length > 0\" title=\"Has message from commish\"></i>\n" +
    "          <span ng-class=\"{'dead-team-name': !team.active || !team.alive}\">{{team.name}}</span><br><span class=\"team-league\">{{team.league.name}}</span></div>\n" +
    "        <div class=\"col-sm-7 col-md-7\">\n" +
    "          <span class=\"current-pick\" ng-class=\"{'no-pick': team.current_pick.warning == true}\" ng-show=\"team.active && team.started\">\n" +
    "            <i class=\"fa fa-{{pickStatus(team.current_pick)}} fa-fw\"></i>\n" +
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
    "<div class=\"teams-alert alert alert-info\" ng-show=\"(teams | filter:search:strict).length == 0\">\n" +
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
    "<div ng-repeat=\"game in games | filter:search:strict\" class=\"week-games list-group\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-sm-12 col-md-12\"><h5 class=\"game-display\"><small class=\"start-date\">{{starts(game)}}</small></h5></div>\n" +
    "  </div>\n" +
    "  <div class=\"row game-squads\">\n" +
    "    <div class=\"col-sm-6 col-md-6 game-squad\" ng-repeat=\"squad in game.squads\">\n" +
    "      <a ng-click=\"togglePick(game, squad)\" class=\"list-group-item\" ng-class=\"{'disabled': isDisabled(game, squad)}\">\n" +
    "        <div class=\"row game-row\">\n" +
    "          <span><span ng-show=\"($index === 1)\">@ </span><span ng-show=\"squad.seed > 0\">({{squad.seed}}) </span>{{squad.name}} <span class=\"record-score\" ng-show=\"!game.complete\">[ {{squad.record}} ]</span><span class=\"record-score\" ng-show=\"game.complete\">[ {{getScore(game, $index)}} ] <span ng-show=\"$index === 1\">{{game.ot_display}}</span></span></span>\n" +
    "          <i class=\"fa fa-{{pickStatus(game, squad)}} pull-right\"></i>\n" +
    "        </div>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"alert alert-info\" ng-show=\"(games | filter:search:strict).length == 0\">\n" +
    "  No games found\n" +
    "</div>\n" +
    "<button type=\"button\" class=\"save-pick-btn btn btn-primary\" ng-show=\"isCoach(team)\" ng-disabled=\"!savePicksEnabled\" ng-click=\"savePicks()\">Save Picks</button>\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("modules/private/team/pick/one/team.pick.one.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/team/pick/one/team.pick.one.tpl.html",
    "<div class=\"team-message alert alert-warning\" ng-show=\"isCoach(team) && isCurrentPickLocked()\"><p class=\"team-message-text\">Your pick for {{week.name}} ({{week.type}}) is locked [ {{currentPick.squad.name}} ]</p></div>\n" +
    "<div ng-repeat=\"game in games | filter:search:strict\" class=\"week-games list-group\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-sm-12 col-md-12\"><h5 class=\"game-display\"><small class=\"start-date\">{{starts(game)}}</small></h5></div>\n" +
    "  </div>\n" +
    "  <div class=\"row game-squads\">\n" +
    "    <div class=\"col-sm-6 col-md-6 game-squad\" ng-repeat=\"squad in game.squads\">\n" +
    "      <a ng-click=\"makePick(game, squad)\" class=\"list-group-item\" ng-class=\"{'disabled': isDisabled(game, squad)}\">\n" +
    "        <div class=\"row game-row\">\n" +
    "          <span ng-show=\"($index === 1)\">@ </span><span ng-class=\"{'invalid-squad': hasSquadBeenUsed(game, squad)}\"><span ng-show=\"squad.seed > 0\">({{squad.seed}}) </span>{{squad.name}} <span class=\"record-score\" ng-show=\"!game.complete\">[ {{squad.record}} ]</span><span class=\"record-score\" ng-show=\"game.complete\">[ {{getScore(game, $index)}} ] <span ng-show=\"$index === 1\">{{game.ot_display}}</span></span></span>\n" +
    "          <i class=\"fa fa-{{pickStatus(game, squad)}} pull-right\"></i>\n" +
    "        </div>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"alert alert-info\" ng-show=\"(games | filter:search:strict).length == 0\">\n" +
    "  No games found\n" +
    "</div>\n" +
    "\n" +
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
    "<div class=\"pick-message alert alert-info\" ng-show=\"isCoach(team)\"><p class=\"pick-message-text\">{{pickMessage(team, week)}}</p></div>\n" +
    "<div class=\"picks-tab\">\n" +
    "  <ul class=\"nav nav-tabs\">\n" +
    "    <li class=\"active\"><a>Picks [ {{pickCount}} ]</a></li>\n" +
    "  </ul>\n" +
    "  <div class=\"input-group custom-search-form filter-league-join\">\n" +
    "    <input type=\"text\" class=\"form-control\" placeholder=\"Search games...\" ng-model=\"gameQuery\">\n" +
    "    <span class=\"input-group-btn\">\n" +
    "      <button class=\"btn btn-default\" type=\"button\"><span class=\"glyphicon glyphicon-search\"></span></button>\n" +
    "    </span>\n" +
    "  </div>\n" +
    "</div>\n" +
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
    "    <li class=\"active\"><a>Losers [ {{correctPickCount((picks | weekPicksFilter:selectedWeek:teamData.league.elimination))}} ]</a></li>\n" +
    "  </ul>\n" +
    "  <div class=\"make-pick-btn-container\">\n" +
    "    <button type=\"button\" class=\"make-pick-btn btn btn-primary\" ng-show=\"isCoach(teamData)\" ng-click=\"makePick(teamData)\" ng-disabled=\"teamData.current_pick.locked || !teamData.started || !teamData.active || !teamData.alive\"><span>Pick Loser</span><span ng-show=\"teamData.league.max_picks_per_week != 1\">s</span></button>\n" +
    "  </div>\n" +
    "  <div class=\"weeks\">\n" +
    "    <select class=\"form-control\" ng-change=\"changeWeek(selectedWeekSlug)\" ng-model=\"selectedWeekSlug\" ng-options=\"leagueWeek.slug as leagueWeek.display for leagueWeek in leagueWeeks\">\n" +
    "      <option value=\"\">All Weeks</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"team-container\" style=\"clear:both;\">\n" +
    "  <div class=\"team-picks list-group\">\n" +
    "    <a ng-repeat=\"pick in picks | weekPicksFilter:selectedWeek:teamData.league.elimination\" class=\"team-pick list-group-item\" ng-click=\"makePick(teamData, pick)\" ng-class=\"{'locked': !isCoach(teamData) || pick.locked, 'incorrect': pick.correct === false || (pick.game && pick.game.incomplete === true)}\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"week-name col-sm-7 col-md-7\">\n" +
    "          <i class=\"fa fa-{{pickStatus(pick)}} fa-fw pick-icon\"></i> <span class=\"pick-squad\"><span class=\"pick-squad-name\">[ {{pick.squad.name}} ]</span><span class=\"pick-squad-abbrev\">[ {{pick.squad.abbrev}} ]</span></span> <span class=\"game-start\">{{pickMeta(pick)}}</span></span>\n" +
    "        </div>\n" +
    "        <div class=\"game-column col-sm-5 col-md-5\">\n" +
    "          <span class=\"game\">{{pick.game.display}}</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </a>\n" +
    "  </div>\n" +
    "  <div class=\"no-picks-alert alert alert-info\" ng-show=\"(picks | weekPicksFilter:selectedWeek:teamData.league.elimination).length == 0\">\n" +
    "    No picks\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("modules/private/team/view/team.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/team/view/team.view.tpl.html",
    "<div class=\"alert alert-danger\" ng-show=\"!teamData.active\">This team has been deactivated by the commish and will be unable to pick losers. <a class=\"alert-link\" ng-click=\"contactCommish(teamData)\">Contact the commish</a> if you have questions.</div>\n" +
    "<div class=\"alert alert-danger\" ng-show=\"teamData.active && teamData.alive && teamData.started && hasNotEnoughPicks(teamData)\">{{pickSummary(teamData)}} losers picked for {{teamData.current_week_name}}</div>\n" +
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
    "    <h3 class=\"team-meta\"><small>{{teamData.league.format}}<br>Coach [ {{teamData.coach_names.join(', ')}} ]</small></h3>\n" +
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
    "    <dd>NFL, NBA, NHL, MLB or MLS.</dd>\n" +
    "    <dt>How much does it cost?</dt>\n" +
    "    <dd>Zip. Zilch. Nada. Freeeeeeeeeeee...</dd>\n" +
    "    <dt>How do I play?</dt>\n" +
    "    <dd>\n" +
    "      <p>- Join an existing Survivor or Pick'em league or create your own.</p>\n" +
    "      <p>- Pick losers each week. (Only 1 pick/week for Survivor leagues)</p>\n" +
    "      <p>- Root for your losers to lose...duh</p>\n" +
    "      <p>- In a Survivor league, last the longest and win.</p>\n" +
    "      <p>- In a Pick'em league, get the most picks right and win.</p>\n" +
    "      <p>- Have fun!</p>\n" +
    "    </dd>\n" +
    "    <dt>Can I pick the same loser twice?</dt>\n" +
    "    <dd>In a Survivor league, no...until you make it to the playoffs. In a Pick'em league, yes.</dd>\n" +
    "    <dt>When is the deadline to make my pick?</dt>\n" +
    "    <dd>Just get it in before a game starts.</dd>\n" +
    "    <dt>Do ties count as a loss?</dt>\n" +
    "    <dd>No sir. But, in some Survivor leagues you will not get eliminated for a tie. Also, for NHL, overtime or shootout losses will be treated as a loss and not a tie.</dd>\n" +
    "    <dt>What is the difference between a public and private league?</dt>\n" +
    "    <dd>Public leagues allow anyone to join. Private leagues require an invitation from the commish.</dd>\n" +
    "    <dt>The season has already started, can I still play?</dt>\n" +
    "    <dd>Yep. There’s always an open league or create your own league to start anytime during the season.</dd>\n" +
    "    <dt>When is the deadline to join a league?</dt>\n" +
    "    <dd>For Survivor leagues, join before the end of the league's first week. For Pick'em leagues, join anytime.</dd>\n" +
    "    <dt>What if I fail to make picks for a week?</dt>\n" +
    "    <dd>In a Survivor league, you’re toast. In a Pick'em league, you've just missed an opportunity. Don't let it happen again.</dd>\n" +
    "    <dt>Can the commish make picks for me?</dt>\n" +
    "    <dd>Negative.</dd>\n" +
    "    <dt>How many times can I join a league?</dt>\n" +
    "    <dd>As much as the commish allows (with a max of 10 times).</dd>\n" +
    "    <dt>How do I win?</dt>\n" +
    "    <dd>In a Survivor league, don’t be wrong. (Or at least be the last one in your league to be wrong.) In a Pick'em league, get the most picks right to win.</dd>\n" +
    "    <dt>What do I win?</dt>\n" +
    "    <dd>That is between you and the commish of the league. However, please be careful when dealing with money. Don’t send money to anyone you don’t know. Common sense, please.</dd>\n" +
    "    <dt>Can I see the picks of others in my league?</dt>\n" +
    "    <dd>Only after the games have started.</dd>\n" +
    "    <dt>Can the commish see my picks?</dt>\n" +
    "    <dd>Only after the games have started.</dd>\n" +
    "    <dt>Can I create my own league?</dt>\n" +
    "    <dd>You betcha. Create a Survivor or Pick'em league anytime.</dd>\n" +
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
    "    <dd>Yes, but you can't change the sport, start week or format (Survivor or Pick'em) after the league starts.</dd>\n" +
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
    "    <p class=\"lead\">NFL, NBA, NHL, MLB or MLS survivor and pick'em leagues are waiting for you. Join anytime for free and start picking losers today!</p>\n" +
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
    require('./modules/private/team/view/picks').name,
    require('./modules/private/team/edit').name,
    require('./modules/private/team/message').name,
    require('./modules/private/team/pick').name,
    require('./modules/private/team/pick/one').name,
    require('./modules/private/team/pick/many').name,

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
    require('./modules/private/admin/seasons/season/edit').name,
    require('./modules/private/admin/week').name,
    require('./modules/private/admin/week/new').name,
    require('./modules/private/admin/week/edit').name,
    require('./modules/private/admin/squads').name,
    require('./modules/private/admin/squads/new').name,
    require('./modules/private/admin/squads/edit').name,

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










},{"app-templates":"0VoVTq","./modules/public/home":2,"./modules/public/faq":3,"./modules/public/abuse":4,"./modules/public/signin":5,"./modules/public/register":6,"./modules/public/register/terms":7,"./modules/private/user":8,"./modules/private/user/reset":9,"./modules/private/league":10,"./modules/private/league/new":11,"./modules/private/league/view":12,"./modules/private/league/edit":13,"./modules/private/league/contact":14,"./modules/private/league/message":15,"./modules/private/league/join":16,"./modules/private/league/invite":17,"./modules/private/league/invite/request":18,"./modules/private/leagues":19,"./modules/private/leagues/join":20,"./modules/private/leagues/join/public":21,"./modules/private/leagues/join/private":22,"./modules/private/leagues/manage":23,"./modules/private/leagues/my":24,"./modules/private/team":25,"./modules/private/team/view":26,"./modules/private/team/view/picks":27,"./modules/private/team/edit":28,"./modules/private/team/message":29,"./modules/private/team/pick":30,"./modules/private/team/pick/one":31,"./modules/private/team/pick/many":32,"./modules/private/play":33,"./modules/private/play/leagues":34,"./modules/private/play/teams":35,"./modules/private/admin":36,"./modules/private/admin/game/edit":37,"./modules/private/admin/game/new":38,"./modules/private/admin/seasons":39,"./modules/private/admin/seasons/season":40,"./modules/private/admin/seasons/season/new":41,"./modules/private/admin/seasons/season/edit":42,"./modules/private/admin/week":43,"./modules/private/admin/week/new":44,"./modules/private/admin/week/edit":45,"./modules/private/admin/squads":46,"./modules/private/admin/squads/new":47,"./modules/private/admin/squads/edit":48,"./common/modules/header":49,"./common/modules/message":50,"./common/modules/footer":51,"./common/modules/confirm":52,"./common/models":53,"./common/api":54,"./common/command":55,"./common/service/application":56,"./common/service/utils":57,"./common/directives/focus":58,"./common/directives/formattedDate":59,"./common/directives/match":60,"./common/directives/rcSubmit":61,"./common/directives/rcVerifySet":62,"./common/directives/requiredPattern":63,"./common/directives/selectOnClick":64,"./common/filters":65}],53:[function(require,module,exports){
/**
 * Define the application models
 */
module.exports = angular.module('loghApp.models', [])
    //models
    .service('userModel', require('./UserModel'))
    .service('messageModel', require('./MessageModel'))
    .service('seasonModel', require('./SeasonModel'))
;
},{"./UserModel":66,"./MessageModel":67,"./SeasonModel":68}],54:[function(require,module,exports){
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

},{"./ApiConfig":69,"./GameService":70,"./LeagueService":71,"./PickService":72,"./SeasonService":73,"./SquadService":74,"./TeamService":75,"./UserService":76,"./WeekService":77}],55:[function(require,module,exports){
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


},{"./session/SigninCommand":78,"./session/SignoutCommand":79,"./user/GetCurrentUserCommand":80}],65:[function(require,module,exports){
/**
 * Define the application filters
 */
module.exports = angular.module('loghApp.filters', [])
    //filters
    .filter('offsetFilter', require('./OffsetFilter'))
    .filter('activeTeamFilter', require('./ActiveTeamFilter'))
    .filter('managedLeagueFilter', require('./ManagedLeagueFilter'))
    .filter('timeFilter', require('./TimeFilter'))
    .filter('weekPicksFilter', require('./WeekPicksFilter'))
;

},{"./OffsetFilter":81,"./ActiveTeamFilter":82,"./ManagedLeagueFilter":83,"./TimeFilter":84,"./WeekPicksFilter":85}],2:[function(require,module,exports){

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
},{"./HomeController":86}],3:[function(require,module,exports){
module.exports = angular.module('loghApp.faq', [])
  .controller('FaqController', require('./FaqController'));

},{"./FaqController":87}],4:[function(require,module,exports){
module.exports = angular.module('loghApp.abuse', [])
  .controller('AbuseController', require('./AbuseController'));

},{"./AbuseController":88}],5:[function(require,module,exports){
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

},{"./SigninController":89}],6:[function(require,module,exports){
module.exports = angular.module('loghApp.register', [])
  .controller('RegisterController', require('./RegisterController'));

},{"./RegisterController":90}],8:[function(require,module,exports){
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

},{"./UserController":91}],10:[function(require,module,exports){
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

},{"./LeagueController":92}],19:[function(require,module,exports){
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


},{"./LeaguesController":93}],25:[function(require,module,exports){
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

},{"./TeamController":94}],33:[function(require,module,exports){
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


},{"./PlayController":95}],36:[function(require,module,exports){
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

},{"./AdminController":96}],49:[function(require,module,exports){
module.exports = angular.module('loghApp.header', [])
    .controller('HeaderController', require('./HeaderController'))
},{"./HeaderController":97}],50:[function(require,module,exports){
module.exports = angular.module('loghApp.message', [])
    .controller('MessageController', require('./MessageController'));
},{"./MessageController":98}],51:[function(require,module,exports){
module.exports = angular.module('loghApp.footer', [])
  .controller('FooterController', require('./FooterController'))
},{"./FooterController":99}],52:[function(require,module,exports){
module.exports = angular.module('logh.confirm', [])
  .controller('ConfirmController', require('./ConfirmController'));

},{"./ConfirmController":100}],56:[function(require,module,exports){
/**
 * Define the application service
 */
module.exports = angular.module('logh.application', [])
    .service('applicationService', require('./ApplicationService'));
},{"./ApplicationService":101}],57:[function(require,module,exports){
module.exports = angular.module('logh.utils', [])
  .service('dateUtils', require('./DateUtils'));
},{"./DateUtils":102}],58:[function(require,module,exports){
//application directives
module.exports = angular.module('loghApp.directives.focus',[])
    .directive('loghFocus', require('./FocusDirective'))
;

},{"./FocusDirective":103}],59:[function(require,module,exports){
//application directives
module.exports = angular.module('logh.directives.formattedDate',[])
  .directive('formattedDate', require('./FormattedDateDirective'))
;

},{"./FormattedDateDirective":104}],60:[function(require,module,exports){
//application directives
module.exports = angular.module('loghApp.directives.match',[])
    .directive('match', require('./MatchDirective'))
;

},{"./MatchDirective":105}],61:[function(require,module,exports){
//application directives
module.exports = angular.module('logh.directives.rcSubmit',[])
  .directive('rcSubmit', require('./RCSubmitDirective'));

},{"./RCSubmitDirective":106}],62:[function(require,module,exports){
//application directives
module.exports = angular.module('logh.directives.rcVerifySet',[])
  .directive('rcVerifySet', require('./RCVerifySetDirective'));

},{"./RCVerifySetDirective":107}],63:[function(require,module,exports){
//application directives
module.exports = angular.module('loghApp.directives.requiredPattern',[])
    .directive('rpattern', require('./RequiredPatternDirective'))
;

},{"./RequiredPatternDirective":108}],64:[function(require,module,exports){
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
  .controller('NewLeagueController', require('./NewLeagueController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.league.new', {
        url: '/new',
        views: {
          leagueContent: {
            templateUrl: 'modules/private/league/new/league.new.tpl.html',
            controller: 'NewLeagueController'
          }
        },
        resolve: {
          seasonId: function($stateParams) {
            return parseInt($stateParams.seasonId);
          }
        },
        reloadOnSearch: false
      });
    $urlRouterProvider.otherwise('/');
  });

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
  .controller('EditLeagueController', require('./EditLeagueController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.league.edit', {
        url: '/{leagueId}/edit',
        views: {
          leagueContent: {
            templateUrl: 'modules/private/league/edit/league.edit.tpl.html',
            controller: 'EditLeagueController'
          }
        },
        resolve: {
          league: function(leagueService, $stateParams) {
            return leagueService.getLeague($stateParams.seasonId, $stateParams.leagueId);
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });

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


},{"./PlayLeaguesController":126}],35:[function(require,module,exports){
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


},{"./PlayTeamsController":127}],39:[function(require,module,exports){
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

},{"./AdminSeasonsController":128}],43:[function(require,module,exports){
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

},{"./AdminWeekController":129}],46:[function(require,module,exports){
module.exports = angular.module('loghApp.admin.squads', [])
  .controller('AdminSquadsController', require('./AdminSquadsController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.admin.squads', {
        url: 'squads',
        views: {
          adminContent: {
            templateUrl: 'modules/private/admin/squads/admin.squads.tpl.html',
            controller: 'AdminSquadsController',
            resolve: {
              squads: function($stateParams, squadService) {
                return squadService.getSquads();
              }
            }
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });

},{"./AdminSquadsController":130}],18:[function(require,module,exports){
module.exports = angular.module('loghApp.league.invite.request', [])
  .controller('LeagueInviteRequestController', require('./LeagueInviteRequestController'));

},{"./LeagueInviteRequestController":131}],21:[function(require,module,exports){
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


},{"./PublicLeaguesController":132}],22:[function(require,module,exports){
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


},{"./PrivateLeaguesController":133}],27:[function(require,module,exports){
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
          },
          currentWeek: function(team, $stateParams, weekService) {
            if (!$stateParams.week) {
              return weekService.getCurrentWeek($stateParams.seasonId, $stateParams.leagueId);
            } else {
              return null;
            }
          }
        },
        reloadOnSearch: false
      });
    $urlRouterProvider.otherwise('/');
  });

},{"./ViewTeamPicksController":134}],31:[function(require,module,exports){
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

},{"./TeamPickOneController":135}],32:[function(require,module,exports){
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

},{"./TeamPickManyController":136}],37:[function(require,module,exports){
module.exports = angular.module('loghApp.admin.game.edit', [])
  .controller('AdminGameEditController', require('./AdminGameEditController'));

},{"./AdminGameEditController":137}],38:[function(require,module,exports){
module.exports = angular.module('loghApp.admin.game.new', [])
  .controller('AdminGameNewController', require('./AdminGameNewController'));

},{"./AdminGameNewController":138}],40:[function(require,module,exports){
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

},{"./AdminSeasonController":139}],44:[function(require,module,exports){
module.exports = angular.module('loghApp.admin.week.new', [])
  .controller('AdminWeekNewController', require('./AdminWeekNewController'));

},{"./AdminWeekNewController":140}],45:[function(require,module,exports){
module.exports = angular.module('loghApp.admin.week.edit', [])
  .controller('AdminWeekEditController', require('./AdminWeekEditController'));

},{"./AdminWeekEditController":141}],47:[function(require,module,exports){
module.exports = angular.module('loghApp.admin.squads.new', [])
  .controller('AdminSquadsNewController', require('./AdminSquadsNewController'));

},{"./AdminSquadsNewController":142}],48:[function(require,module,exports){
module.exports = angular.module('loghApp.admin.squads.edit', [])
  .controller('AdminSquadsEditController', require('./AdminSquadsEditController'));

},{"./AdminSquadsEditController":143}],41:[function(require,module,exports){
module.exports = angular.module('loghApp.admin.season.new', [])
  .controller('AdminSeasonNewController', require('./AdminSeasonNewController'));

},{"./AdminSeasonNewController":144}],42:[function(require,module,exports){
module.exports = angular.module('loghApp.admin.season.edit', [])
  .controller('AdminSeasonEditController', require('./AdminSeasonEditController'));

},{"./AdminSeasonEditController":145}],66:[function(require,module,exports){

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
},{}],67:[function(require,module,exports){

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

},{}],68:[function(require,module,exports){
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
},{}],69:[function(require,module,exports){
/*
 *  Global config for remote services
 */

var ApiConfig =  {
    baseURL: '/api/'
};

module.exports = ApiConfig;

},{}],70:[function(require,module,exports){
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
},{}],71:[function(require,module,exports){
var LeagueService = function($http, $log, $q, $state, apiConfig, messageModel) {

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
        var deferred = $q.defer();
        $http.post(apiConfig.baseURL + "seasons/" + leagueParams.season_id + "/leagues",
            { league: leagueParams })
            .success(function(data) {
                $log.debug("LeagueService: createLeague success");
                messageModel.setMessage(data.message, true);
                deferred.resolve(data);
            })
            .error(function(data) {
                $log.debug("LeagueService: createLeague failed");
                messageModel.setMessage(data.message, false);
                deferred.reject(data);
            });

        return deferred.promise;
    };

    this.updateLeague = function(leagueParams) {
        var deferred = $q.defer();
        $http.put(apiConfig.baseURL + "seasons/" + leagueParams.season_id + "/leagues/" + leagueParams.id,
            { league: leagueParams })
            .success(function(data) {
                $log.debug("LeagueService: updateLeague success");
                messageModel.setMessage(data.message, true);
                deferred.resolve(data);
            })
            .error(function(data) {
                $log.debug("LeagueService: updateLeague failed");
                messageModel.setMessage(data.message, false);
                deferred.reject(data);
            });

        return deferred.promise;
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

LeagueService.$inject = ['$http', '$log', '$q', '$state', 'apiConfig', 'messageModel'];
module.exports = LeagueService;
},{}],72:[function(require,module,exports){
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
},{}],73:[function(require,module,exports){
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

    this.updateSeason = function(seasonParams) {
      var promise = $http.put(apiConfig.baseURL + "admin/seasons/" + seasonParams.id,
        { season: seasonParams })
        .success(function(data) {
          $log.debug("SeasonService: updateSeason success");
          // todo: this relies on a monkey patch at the moment - https://github.com/angular-ui/ui-router/issues/582
          // but may be resolved with future releases of angular-ui-router
          $state.reload(); // reloads all the resolves for the view league page and reinstantiates the controller
          messageModel.setMessage(data.message, false);
          return data;
        })
        .error(function(data) {
          $log.debug("SeasonService: updateSeason failed");
          messageModel.setMessage(data.message, false);
          return data;
        });

      return promise;
    };

};

SeasonService.$inject = ['$http', '$log', '$state', '$q', 'apiConfig', 'messageModel', 'seasonModel'];
module.exports = SeasonService;
},{}],74:[function(require,module,exports){
var SquadService = function($http, $log, $state, apiConfig, messageModel) {

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

  this.createSquad = function(squadParams) {
    var promise = $http.post(apiConfig.baseURL + "admin/squads/",
      { squad: squadParams })
      .success(function(data) {
        $log.debug("SquadService: createSquad success");
        // todo: this relies on a monkey patch at the moment - https://github.com/angular-ui/ui-router/issues/582
        // but may be resolved with future releases of angular-ui-router
        $state.reload(); // reloads all the resolves for the view league page and reinstantiates the controller
        messageModel.setMessage(data.message, false);
        return data;
      })
      .error(function(data) {
        $log.debug("SquadService: createSquad failed");
        messageModel.setMessage(data.message, false);
        return data;
      });

    return promise;
  };

  this.updateSquad = function(squadParams) {
    var promise = $http.put(apiConfig.baseURL + "admin/squads/" + squadParams.id,
      { squad: squadParams })
      .success(function(data) {
        $log.debug("SquadService: updateSquad success");
        // todo: this relies on a monkey patch at the moment - https://github.com/angular-ui/ui-router/issues/582
        // but may be resolved with future releases of angular-ui-router
        $state.reload(); // reloads all the resolves for the view league page and reinstantiates the controller
        messageModel.setMessage(data.message, false);
        return data;
      })
      .error(function(data) {
        $log.debug("SquadService: updateSquad failed");
        messageModel.setMessage(data.message, false);
        return data;
      });

    return promise;
  };

};

SquadService.$inject = ['$http', '$log', '$state', 'apiConfig', 'messageModel'];
module.exports = SquadService;
},{}],75:[function(require,module,exports){
var TeamService = function($http, $log, $q, apiConfig, messageModel) {

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
      var deferred = $q.defer();

      $http.post(apiConfig.baseURL + "leagues/" + teamParams.league_id + "/teams",
            { team: teamParams })
            .success(function(data) {
                $log.debug("TeamService: createTeam success");
                deferred.resolve(data);
            })
            .error(function(data) {
                $log.debug("TeamService: createTeam failed");
                deferred.reject(data);
            });

        return deferred.promise;
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

TeamService.$inject = ['$http', '$log', '$q', 'apiConfig', 'messageModel'];
module.exports = TeamService;
},{}],76:[function(require,module,exports){
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
                if ($state.current.name == 'public.signin') {
                    messageModel.setMessage(data.message, false);
                } else {
                    messageModel.setMessage(data.message, true);
                    $state.go('public.signin');
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
},{}],77:[function(require,module,exports){
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

    this.createWeek = function(weekParams) {
      var promise = $http.post(apiConfig.baseURL + "admin/seasons/" + weekParams.season_id + "/weeks",
        { week: weekParams })
        .success(function(data) {
          $log.debug("WeekService: createWeek success");
          // todo: this relies on a monkey patch at the moment - https://github.com/angular-ui/ui-router/issues/582
          // but may be resolved with future releases of angular-ui-router
          $state.reload(); // reloads all the resolves for the view league page and reinstantiates the controller
          messageModel.setMessage(data.message, false);
          return data;
        })
        .error(function(data) {
          $log.debug("WeekService: createWeek failed");
          messageModel.setMessage(data.message, false);
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
                $state.reload();
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

},{}],78:[function(require,module,exports){
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

},{}],79:[function(require,module,exports){
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

},{}],80:[function(require,module,exports){

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

},{}],84:[function(require,module,exports){

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

},{}],85:[function(require,module,exports){
var WeekPicksFilter = function() {
  return function(picks, week, elimination) {
    if (!week) {
      return picks;
    }
    var weekPicks = [];
    if (elimination) {
      // for survivor leagues, gonna show picks up to the week you selected...
      weekPicks = _.filter(picks, function(pick) {
        return moment(pick.week.date).isBefore(week.starts_at) || moment(pick.week.date).isSame(week.starts_at);
      });
    } else {
      // for pick'em leagues, gonna show ONLY picks for the week you selected...
      weekPicks = _.filter(picks, function(pick) {
        return pick.week.slug == week.slug;
      });
    }
    return weekPicks;
  };
};

WeekPicksFilter.$inject = [];
module.exports = WeekPicksFilter;

},{}],86:[function(require,module,exports){
var HomeController = function($scope, $log, $location, leagueService, messageModel, seasonModel) {

    $scope.selectedSeasonId = seasonModel.selectedSeasonId;

    $scope.createLeague = function(seasonId) {
      $location.url('/season/' + seasonId + '/league/new');
    };

    $scope.joinLeague = function(seasonId) {
      $location.url('/season/' + seasonId + '/leagues/public');
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
      $log.debug("home controller");
    };
    init();
};

HomeController.$inject = ['$scope', '$log', '$location', 'leagueService', 'messageModel', 'seasonModel'];
module.exports = HomeController;

},{}],87:[function(require,module,exports){
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

},{}],88:[function(require,module,exports){
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

},{}],89:[function(require,module,exports){
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

},{}],90:[function(require,module,exports){
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

},{}],91:[function(require,module,exports){

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

},{}],92:[function(require,module,exports){

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

},{}],93:[function(require,module,exports){
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


},{}],94:[function(require,module,exports){
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

},{}],95:[function(require,module,exports){
var PlayController = function($scope, $log, $location, $state, $stateParams, messageModel, seasonModel) {

  $scope.selectedSeasonId = parseInt($stateParams.seasonId);

  $scope.startedSeasons = angular.copy(seasonModel.startedSeasons);

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
    var season = seasonModel.getCurrentSeason();
    $location.url('/season/' + season.id + '/league/new');
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

PlayController.$inject = ['$scope', '$log', '$location', '$state', '$stateParams', 'messageModel', 'seasonModel'];
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
var HeaderController = function($rootScope, $scope, $log, $location, $modal, $state, $anchorScroll, $stateParams, userService, leagueService, userModel, messageModel, seasonModel) {

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
      var season = seasonModel.getCurrentSeason();
      $location.url('/season/' + season.id + '/league/new');
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

    $rootScope.$on("$viewContentLoaded", function() {
//      scrollToTop();
    });

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("header controller");
        checkHtml5Storage();
    };
    init();
};

HeaderController.$inject = ['$rootScope', '$scope', '$log', '$location', '$modal', '$state', '$anchorScroll', '$stateParams', 'userService', 'leagueService', 'userModel', 'messageModel', 'seasonModel'];
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
var NewLeagueController = function(seasonId, $scope, $location, weekService, leagueService, seasonModel) {

    var getSeasonWeeks = function() {
      $scope.createBtnDisabled = true;
      weekService.getAvailableWeeks($scope.leagueData.season_id)
        .then(function(response) {
          $scope.weeks = response.data;
          $scope.leagueData.start_week_id = $scope.weeks[0].id;
          $scope.createBtnDisabled = false;
        });
    };

    $scope.seasons = angular.copy(seasonModel.currentSeasons);

    $scope.maxPicksPerWeek = [
      { number: null, display: 'Pick every game' },
      { number: 25, display: 'Pick 25 losers' },
      { number: 15, display: 'Pick 15 losers' },
      { number: 10, display: 'Pick 10 losers' },
      { number: 5, display: 'Pick 5 losers' },
      { number: 2, display: 'Pick 2 losers' },
      { number: 1, display: 'Pick 1 loser' }
    ];

    $scope.leagueData = {
        name: '',
        nickname: '',
        season_id: seasonId,
        start_week_id: '',
        public: true,
        elimination: false,
        eliminate_on_tie: true,
        max_teams_per_user: '',
        max_picks_per_week: $scope.maxPicksPerWeek[0].number
    };

    $scope.changeSeason = function() {
      $location.path('/season/' + $scope.leagueData.season_id + '/league/new'); // will not reload page due to reloadOnSearch: false
      getSeasonWeeks();
    };

    $scope.createLeague = function(league) {
      leagueService.createLeague(league)
        .then(function(data) {
          $location.url('/season/' + league.season_id + '/league/' + data.league_id);
        });
    };

    $scope.hasError = function(input) {
      return !input.$focused && input.$dirty && input.$invalid;
    };

    $scope.hasPropertyError = function(input, property) {
      return !input.$focused && input.$dirty && input.$error[property];
    };

    var init = function () {
        getSeasonWeeks();
    };
    init();

};

NewLeagueController.$inject = ['seasonId', '$scope', '$location', 'weekService', 'leagueService', 'seasonModel'];
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
    return (team.active && !$scope.isEliminated(team)) ? 0 : 1;
  };

  $scope.isEliminated = function(team) {
    var eliminated = false;
    if (team.eliminated_at) {
      eliminated = true;
      if (team.week_ends_at) {
        eliminated = (moment(team.eliminated_at).isBefore(team.week_ends_at) || moment(team.eliminated_at).isSame(team.week_ends_at));
      }
    }
    return eliminated;
  };

  $scope.aliveTeamCount = function(teams) {
    var aliveTeams = _.filter(teams, function(team) {
      return team.active && !$scope.isEliminated(team);
    });
    return aliveTeams.length;
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
    $location.url('/season/' + league.season_id + '/league/' + league.id + '/edit');
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
      teamService.createTeam(team)
        .then(
          function(data) {
            messageModel.setMessage(data.message, true);
            var newTeamPath = $location.path() + '/team/' + data.team_id;
            $location.path(newTeamPath); // navigate to the new team page
          },
          function(data) {
            messageModel.setMessage(data.message, false);
          });
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

  $scope.pickStatus = function(pick) {
    var status = '';
    if (pick.warning === true) {
      status = 'warning';
    } else if (pick.correct === true) {
      status = 'check';
    } else if (pick.tie === true || pick.incomplete === true) {
      status = 'minus';
    } else if (pick.correct === false) {
      status = 'times';
    } else if (pick.locked === true) {
      status = 'lock';
    } else if (pick.locked === false) {
      status = 'unlock';
    } else {
      status = 'th-list';
    }
    return status;
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
var EditLeagueController = function(league, $scope, $location, weekService, leagueService, seasonModel) {

    var showLeague = function(league) {
      $location.url('/season/' + league.season_id + '/league/' + league.id);
    };

    var getSeasonWeeks = function() {
      $scope.editBtnDisabled = true;
      weekService.getAvailableWeeks($scope.leagueData.season_id)
        .then(function(response) {
          $scope.weeks = response.data;
          $scope.editBtnDisabled = false;
        });
    };

    $scope.seasons = angular.copy(seasonModel.currentSeasons);

    $scope.leagueData = angular.copy(league.data);

    $scope.maxPicksPerWeek = [
      { number: null, display: 'Pick every game' },
      { number: 25, display: 'Pick 25 losers' },
      { number: 15, display: 'Pick 15 losers' },
      { number: 10, display: 'Pick 10 losers' },
      { number: 5, display: 'Pick 5 losers' },
      { number: 2, display: 'Pick 2 losers' },
      { number: 1, display: 'Pick 1 loser' }
    ];

    $scope.updateLeague = function(league) {
      leagueService.updateLeague(league)
        .then(function(data) {
          showLeague(league);
        });
    };

    $scope.hasError = function(input) {
      return !input.$focused && input.$dirty && input.$invalid;
    };

    $scope.hasPropertyError = function(input, property) {
      return !input.$focused && input.$dirty && input.$error[property];
    };

    var init = function () {
      if (!$scope.leagueData.started) {
          getSeasonWeeks();
        }
    };
    init();

};

EditLeagueController.$inject = ['league', '$scope', '$location', 'weekService', 'leagueService', 'seasonModel'];
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
var JoinLeaguesController = function($scope, $log, $location, $stateParams, userModel, messageModel, seasonModel) {

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

  $scope.starts = function(league) {
    var startsLabel = (league.started) ? 'Started ' : 'Starts ';
    return startsLabel + league.start_week;
  };

  $scope.isCommish = function(league) {
    return league.commish_ids.indexOf(userModel.user.id) > -1;
  };

  $scope.createLeague = function() {
    var season = seasonModel.getCurrentSeason();
    $location.url('/season/' + season.id + '/league/new');
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("join leagues controller");
  };
  init();

};

JoinLeaguesController.$inject = ['$scope', '$log', '$location', '$stateParams', 'userModel', 'messageModel', 'seasonModel'];
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

  $scope.hasNotEnoughPicks = function(team) {
    var hasNotMetPickCount = team.current_picks_count != team.league.max_picks_per_week;
    var hasNotMetGameCount = team.current_picks_count != team.current_week_game_count;
    return hasNotMetPickCount && hasNotMetGameCount;
  };

  $scope.pickSummary = function(team) {
    var msg = '';
    if (team.league.max_picks_per_week && team.league.max_picks_per_week <= team.current_week_game_count) {
      msg = team.current_picks_count + ' of ' + team.league.max_picks_per_week;
    } else {
      msg = team.current_picks_count + ' of ' + team.current_week_game_count;
    }
    return msg;
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
var TeamPickController = function(team, week, games, picks, $rootScope, $scope, $log, $location, userModel, dateUtils) {

  var updatePickCount = function(picks) {
    $scope.pickCount = (picks) ? picks.length : 0;
  };

  $scope.team = team.data;

  $scope.week = week.data;

  $scope.games = games.data;

  $scope.picks = picks.data;
  updatePickCount($scope.picks);

  $scope.savePicksEnabled = false;

  $scope.gameQuery = '';

  $scope.pickMessage = function(team, week) {
    var msg = '';
    if (!team.league.max_picks_per_week || team.league.max_picks_per_week >= $scope.games.length) {
      msg = 'Pick all games';
    } else {
      msg = 'Pick ' + team.league.max_picks_per_week + ' loser';
      if (team.league.max_picks_per_week > 1) {
        msg += 's';
      }
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
    var startsLabel = '';
    if (game.note && game.note.length > 0) {
      startsLabel += game.note + ' - ';
    }
    if (game.tbd) {
      startsLabel += 'TBD';
    } else {
      startsLabel += (game.started) ? 'Started ' : 'Starts ';
      startsLabel += dateUtils.dateFormat(game.starts_at, "ddd, mmm d h:MM TT Z");
    }
    if (game.if_necessary) {
      startsLabel += ' *If Necessary';
    }
    if (game.postponed) {
      startsLabel += ' [ *PPD ]';
    }
    return startsLabel;
  };

  $scope.showTeam = function(team) {
    var teamPath = '/season/' + team.league.season_id + '/league/' + team.league.id + '/team/' + team.id + '?week=' + $scope.week.slug;
    $location.url(teamPath);
  };

  $scope.isCoach = function(team) {
    return team.coach_ids.indexOf(userModel.user.id) > -1;
  };

  $scope.search = function(game) {
    var match = false;
    _.each(game.squads, function(squad) {
      if (squad.name.toLowerCase().indexOf($scope.gameQuery.toLowerCase()) != -1) {
        match = true;
      }
    });
    return match;
  };

  $scope.$on('TeamPickController::picksChanged', function(event, args) {
    $scope.savePicksEnabled = true;
    updatePickCount(args.picks);
  });

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("make pick controller");
  };
  init();
};

TeamPickController.$inject = ['team', 'week', 'games', 'picks', '$rootScope', '$scope', '$log', '$location', 'userModel', 'dateUtils'];
module.exports = TeamPickController;

},{}],126:[function(require,module,exports){
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


},{}],127:[function(require,module,exports){
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

  $scope.pickStatus = function(pick) {
    var status = '';
    if (pick.warning === true) {
      status = 'warning';
    } else if (pick.correct === true) {
      status = 'check';
    } else if (pick.game && (pick.game.tie === true || pick.game.incomplete === true)) {
      status = 'minus';
    } else if (pick.correct === false) {
      status = 'times';
    } else if (pick.locked === true) {
      status = 'lock';
    } else if (pick.locked === false) {
      status = 'unlock';
    } else {
      status = 'th-list';
    }
    return status;
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

},{}],128:[function(require,module,exports){
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

  $scope.gameQuery = '';

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

  $scope.editGame = function(game, week) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/admin/game/edit/admin.game.edit.tpl.html',
      controller: 'AdminGameEditController',
      resolve: {
        game: function() {
          return game;
        },
        squads: function() {
          return squadService.getWeekSquads(week);
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

  $scope.search = function(game) {
    var match = false;
    _.each(game.squads, function(squad) {
      if (squad.name.toLowerCase().indexOf($scope.gameQuery.toLowerCase()) != -1) {
        match = true;
      }
    });
    return match;
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
var AdminSquadsController = function(squads, $scope, $log, $modal, squadService, messageModel) {

  $scope.squads = squads.data;

  $scope.selectedSquadType = null;

  $scope.squadTypes = _.compact(_.uniq(_.map($scope.squads, function(squad) {
      return squad.squad_type;
  })));

  $scope.query = '';

  $scope.createSquad = function() {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/admin/squads/new/admin.squads.new.tpl.html',
      controller: 'AdminSquadsNewController'
    });

    modalInstance.result.then(function(squad) {
      squadService.createSquad(squad);
    }, function () {
      $log.debug('Create squad modal dismissed...');
      messageModel.setMessage({ type: 'warning', content: 'Create squad cancelled' }, false);
    });

  };

  $scope.editSquad = function(squad) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/admin/squads/edit/admin.squads.edit.tpl.html',
      controller: 'AdminSquadsEditController',
      resolve: {
        squad: function() {
          return squad;
        }
      }
    });

    modalInstance.result.then(function(squad) {
      squadService.updateSquad(squad);
    }, function () {
      $log.debug('Squad update cancelled...');
      messageModel.setMessage({ type: 'warning', content: 'Squad update cancelled' }, false);
    });

  };


  $scope.search = function(item) {
    if (item.name.toLowerCase().indexOf($scope.query.toLowerCase()) != -1 && (!$scope.selectedSquadType || item.squad_type == $scope.selectedSquadType)) {
      return true;
    }
    return false;
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
  };
  init();
};

AdminSquadsController.$inject = ['squads', '$scope', '$log', '$modal', 'squadService', 'messageModel'];
module.exports = AdminSquadsController;

},{}],131:[function(require,module,exports){
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

},{}],132:[function(require,module,exports){

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


},{}],133:[function(require,module,exports){
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


},{}],134:[function(require,module,exports){
var ViewTeamPicksController = function(leagueWeeks, currentWeek, picks, $scope, $log, $location, $stateParams, dateUtils) {

  var createFakeNonePicks = function() {
    if ($scope.picks.length < $scope.leagueWeeks.length) {
      // important that weeks are in ascending order for this to work
      for (i = $scope.picks.length; i < $scope.leagueWeeks.length; i++) {
        createFakeNonePick($scope.leagueWeeks[i]);
      }
    }
  };

  var createFakeNonePick = function(week) {
    var pick = {
      squad: {
        id: 0,
        name: "None",
        abbrev: "None",
        short: "None"
      },
      correct: (!$scope.teamData.alive) ? false : null,
      locked: (!$scope.teamData.alive) ? true : false,
      week: {
        name: week.name,
        slug: week.slug,
        date: week.starts_at
      }
    };
    $scope.picks.push(pick);
  };

  $scope.leagueWeeks = leagueWeeks.data;

  $scope.picks = picks.data;

  $scope.selectedWeekSlug = $stateParams.week;

  $scope.selectedWeek = _.find($scope.leagueWeeks, function(leagueWeek) { return leagueWeek.slug === $scope.selectedWeekSlug });

  $scope.correctPickCount = function(picks) {
    var correctPicks = _.filter(picks, function(pick) {
      return pick.correct;
    });
    return correctPicks.length;
  };

  $scope.changeWeek = function(slug) {
    if (slug) {
      $location.search('week', slug); // add / replace the week query param
      $scope.selectedWeek = _.find($scope.leagueWeeks, function(leagueWeek) { return leagueWeek.slug === slug });
    } else {
      $location.search('week', null); // remove week query param
      $scope.selectedWeek = null;
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
    } else if (pick.game && (pick.game.tie === true || pick.game.incomplete === true)) {
      status = 'minus';
    } else if (pick.correct === false) {
      status = 'times';
    } else if (pick.locked) {
      status = 'lock';
    } else {
      status = 'unlock';
    }
    return status;
  };

  $scope.pickMeta = function(pick) {
    var meta = pick.week.name;
    if (pick.game) {
      if (pick.game.note && pick.game.note.length > 0) {
        meta += ' | ' + pick.game.note;
      } else if (pick.game.tbd) {
        meta += ' | TBD';
      } else {
        meta += ' | ' + dateUtils.dateFormat(pick.game.start, "mmm d") + ' | ' + dateUtils.dateFormat(pick.game.start, "h:MM TT Z");
      }
      if (pick.game.postponed) {
        meta += ' | *PPD';
      }
      if (pick.game.if_necessary) {
        meta += ' | *If necessary';
      }
    }
    return meta;
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    if ($scope.teamData.league.elimination) {
      createFakeNonePicks();
    }
    if (currentWeek) {
      $scope.selectedWeekSlug = currentWeek.data.slug;
      $scope.changeWeek($scope.selectedWeekSlug);
    }
  };
  init();
};

ViewTeamPicksController.$inject = ['leagueWeeks', 'currentWeek', 'picks', '$scope', '$log', '$location', '$stateParams', 'dateUtils'];
module.exports = ViewTeamPicksController;

},{}],135:[function(require,module,exports){
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
        $scope.showTeam($scope.team);
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
    if (game.locked || $scope.hasSquadBeenUsed(game, squad) || $scope.isCurrentPickLocked()) {
      isDisabled = true;
    }
    return isDisabled;
  };

  $scope.pickStatus = function(game, squad) {
    var status = '',
      pick = getPick(game, squad);
    if (!_.isUndefined($scope.currentPick) && $scope.currentPick.game_id == game.id && $scope.currentPick.squad_id == squad.id) {
      if (pick.correct === true) {
        status = 'check';
      } else if (pick.game && (pick.game.tie === true || pick.game.incomplete === true)) {
        status = 'minus';
      } else if (pick.correct === false) {
        status = 'times';
      } else if (pick.locked === true) {
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

},{}],136:[function(require,module,exports){
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
    if (!$scope.isCoach($scope.team) || game.locked) return;
    var pick = getPick(game, squad);
    if (!_.isUndefined(pick) && pick.locked) {
      return; // no toggling locked picks
    }
    if (!_.isUndefined(pick)) {
      // if a pick exists already, then you are attempting to de-select it
      removePick(pick);
    } else {
      removeGamePicks(game); // no 2 picks for the same game
      addPick(game, squad);
    }
    $rootScope.$broadcast('TeamPickController::picksChanged', { picks: $scope.picks });
  };

  $scope.savePicks = function() {
    pickService.savePicks($scope.team.id, $scope.picks)
      .finally(function(result) {
        $scope.showTeam($scope.team);
      });
  };

  $scope.isDisabled = function(game) {
    var isDisabled = false;
    if (game.locked) {
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
      } else if (pick.game && (pick.game.tie === true || pick.game.incomplete === true)) {
        status = 'minus';
      } else if (pick.correct === false) {
        status = 'times';
      } else if (pick.locked === true) {
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

},{}],137:[function(require,module,exports){
var AdminGameEditController = function(game, squads, $scope, $modalInstance) {

  $scope.gameData = angular.copy(game);

  $scope.squads = squads.data;

  $scope.closeStartsAt = function() {
    $scope.startsAtDropdown = {
      isopen: false
    };
  };
  $scope.closeStartsAt();

  $scope.getSquad = function(squadId) {
    var squad = _.find($scope.squads, function(squad) { return squad.id === squadId });
    return squad;
  };

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

AdminGameEditController.$inject = ['game', 'squads', '$scope', '$modalInstance'];
module.exports = AdminGameEditController;

},{}],138:[function(require,module,exports){
var AdminGameNewController = function(week, lastGame, squads, $scope, $modalInstance) {

  $scope.weekData = week;

  $scope.squads = squads.data;

  $scope.newGameData = {
    week_id: week.id,
    note: '',
    home_squad_id: squads.data[0].id,
    visiting_squad_id: squads.data[0].id,
    starts_at: (lastGame) ? lastGame.starts_at : moment().format(),
    playoff: false,
    tbd: false,
    if_necessary: false
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

},{}],139:[function(require,module,exports){
var AdminWeeksController = function(season, weeks, leagues, $scope, $location, $modal, seasonService, weekService) {

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

  $scope.editSeason = function(season) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/admin/seasons/season/edit/admin.season.edit.tpl.html',
      controller: 'AdminSeasonEditController',
      resolve: {
        season: function() {
          return season;
        }
      }
    });

    modalInstance.result.then(function(season) {
      seasonService.updateSeason(season);
    }, function () {
      $log.debug('Edit season modal dismissed...');
      messageModel.setMessage({ type: 'warning', content: 'Edit season cancelled' }, false);
    });

  };

  $scope.createWeek = function(season) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/admin/week/new/admin.week.new.tpl.html',
      controller: 'AdminWeekNewController',
      resolve: {
        season: function() {
          return season;
        },
        weekTypes: function() {
          return weekService.getWeekTypes();
        }
      }
    });

    modalInstance.result.then(function(week) {
      weekService.createWeek(week);
    }, function () {
      $log.debug('Week create cancelled...');
      messageModel.setMessage({ type: 'warning', content: 'Week create cancelled' }, false);
    });

  };

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

AdminWeeksController.$inject = ['season', 'weeks', 'leagues', '$scope', '$location', '$modal', 'seasonService', 'weekService'];
module.exports = AdminWeeksController;

},{}],140:[function(require,module,exports){
var AdminWeekNewController = function(season, weekTypes, $scope, $modalInstance) {

  $scope.weekTypes = weekTypes.data;

  $scope.weekData = {
    season_id: season.id,
    name: '',
    week_type_id: weekTypes.data[0].id,
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

  $scope.createWeek = function(week) {
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

AdminWeekNewController.$inject = ['season', 'weekTypes', '$scope', '$modalInstance'];
module.exports = AdminWeekNewController;

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
var AdminSquadsNewController = function($scope, $modalInstance) {

  $scope.squadData = {
    name: '',
    abbrev: '',
    short: '',
    squad_type: ''
  };

  $scope.createSquad = function(squad) {
    $modalInstance.close(squad);
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

AdminSquadsNewController.$inject = ['$scope', '$modalInstance'];
module.exports = AdminSquadsNewController;

},{}],143:[function(require,module,exports){
var AdminSquadsEditController = function(squad, $scope, $modalInstance) {

  $scope.squadData = angular.copy(squad);

  $scope.editSquad = function(squad) {
    $modalInstance.close(squad);
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

AdminSquadsEditController.$inject = ['squad', '$scope', '$modalInstance'];
module.exports = AdminSquadsEditController;

},{}],144:[function(require,module,exports){
var AdminSeasonNewController = function($scope, $modalInstance) {

  $scope.newSeasonData = {
    name: '',
    season_type: '',
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

},{}],145:[function(require,module,exports){
var AdminSeasonEditController = function(season, $scope, $modalInstance) {

  $scope.seasonData = angular.copy(season);

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

  $scope.updateSeason = function(season) {
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

AdminSeasonEditController.$inject = ['season', '$scope', '$modalInstance'];
module.exports = AdminSeasonEditController;

},{}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC8udG1wL2FwcC10ZW1wbGF0ZXMuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9hcHAuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kZWxzL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FwaS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9jb21tYW5kL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2ZpbHRlcnMvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3B1YmxpYy9ob21lL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wdWJsaWMvZmFxL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wdWJsaWMvYWJ1c2UvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3B1YmxpYy9zaWduaW4vaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS91c2VyL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3RlYW0vaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvcGxheS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9tb2R1bGVzL2hlYWRlci9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9tb2R1bGVzL21lc3NhZ2UvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kdWxlcy9mb290ZXIvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kdWxlcy9jb25maXJtL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL3NlcnZpY2UvYXBwbGljYXRpb24vaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vc2VydmljZS91dGlscy9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9kaXJlY3RpdmVzL2ZvY3VzL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2RpcmVjdGl2ZXMvZm9ybWF0dGVkRGF0ZS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9kaXJlY3RpdmVzL21hdGNoL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2RpcmVjdGl2ZXMvcmNTdWJtaXQvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vZGlyZWN0aXZlcy9yY1ZlcmlmeVNldC9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9kaXJlY3RpdmVzL3JlcXVpcmVkUGF0dGVybi9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9kaXJlY3RpdmVzL3NlbGVjdE9uQ2xpY2svaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci90ZXJtcy9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS91c2VyL3Jlc2V0L2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9uZXcvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL3ZpZXcvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2VkaXQvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2NvbnRhY3QvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL21lc3NhZ2UvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2pvaW4vaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2ludml0ZS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4vaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9tYW5hZ2UvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9teS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS90ZWFtL3ZpZXcvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdGVhbS9lZGl0L2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3RlYW0vbWVzc2FnZS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS90ZWFtL3BpY2svaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvcGxheS9sZWFndWVzL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3BsYXkvdGVhbXMvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi93ZWVrL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2FkbWluL3NxdWFkcy9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlL3JlcXVlc3QvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL3B1YmxpYy9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4vcHJpdmF0ZS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS90ZWFtL3ZpZXcvcGlja3MvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdGVhbS9waWNrL29uZS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS90ZWFtL3BpY2svbWFueS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9nYW1lL2VkaXQvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vZ2FtZS9uZXcvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9zZWFzb24vaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vd2Vlay9uZXcvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vd2Vlay9lZGl0L2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2FkbWluL3NxdWFkcy9uZXcvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vc3F1YWRzL2VkaXQvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9zZWFzb24vbmV3L2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2FkbWluL3NlYXNvbnMvc2Vhc29uL2VkaXQvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kZWxzL1VzZXJNb2RlbC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9tb2RlbHMvTWVzc2FnZU1vZGVsLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL21vZGVscy9TZWFzb25Nb2RlbC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9hcGkvQXBpQ29uZmlnLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FwaS9HYW1lU2VydmljZS5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9hcGkvTGVhZ3VlU2VydmljZS5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9hcGkvUGlja1NlcnZpY2UuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vYXBpL1NlYXNvblNlcnZpY2UuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vYXBpL1NxdWFkU2VydmljZS5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9hcGkvVGVhbVNlcnZpY2UuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vYXBpL1VzZXJTZXJ2aWNlLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FwaS9XZWVrU2VydmljZS5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9jb21tYW5kL3Nlc3Npb24vU2lnbmluQ29tbWFuZC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9jb21tYW5kL3Nlc3Npb24vU2lnbm91dENvbW1hbmQuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vY29tbWFuZC91c2VyL0dldEN1cnJlbnRVc2VyQ29tbWFuZC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9maWx0ZXJzL09mZnNldEZpbHRlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9maWx0ZXJzL0FjdGl2ZVRlYW1GaWx0ZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vZmlsdGVycy9NYW5hZ2VkTGVhZ3VlRmlsdGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2ZpbHRlcnMvVGltZUZpbHRlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9maWx0ZXJzL1dlZWtQaWNrc0ZpbHRlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHVibGljL2hvbWUvSG9tZUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3B1YmxpYy9mYXEvRmFxQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHVibGljL2FidXNlL0FidXNlQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHVibGljL3NpZ25pbi9TaWduaW5Db250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXIvUmVnaXN0ZXJDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3VzZXIvVXNlckNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL0xlYWd1ZUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9MZWFndWVzQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS90ZWFtL1RlYW1Db250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3BsYXkvUGxheUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vQWRtaW5Db250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL21vZHVsZXMvaGVhZGVyL0hlYWRlckNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kdWxlcy9tZXNzYWdlL01lc3NhZ2VDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL21vZHVsZXMvZm9vdGVyL0Zvb3RlckNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kdWxlcy9jb25maXJtL0NvbmZpcm1Db250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL3NlcnZpY2UvYXBwbGljYXRpb24vQXBwbGljYXRpb25TZXJ2aWNlLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2RpcmVjdGl2ZXMvZm9jdXMvRm9jdXNEaXJlY3RpdmUuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vc2VydmljZS91dGlscy9EYXRlVXRpbHMuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vZGlyZWN0aXZlcy9mb3JtYXR0ZWREYXRlL0Zvcm1hdHRlZERhdGVEaXJlY3RpdmUuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vZGlyZWN0aXZlcy9tYXRjaC9NYXRjaERpcmVjdGl2ZS5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9kaXJlY3RpdmVzL3JjU3VibWl0L1JDU3VibWl0RGlyZWN0aXZlLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2RpcmVjdGl2ZXMvcmNWZXJpZnlTZXQvUkNWZXJpZnlTZXREaXJlY3RpdmUuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vZGlyZWN0aXZlcy9yZXF1aXJlZFBhdHRlcm4vUmVxdWlyZWRQYXR0ZXJuRGlyZWN0aXZlLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2RpcmVjdGl2ZXMvc2VsZWN0T25DbGljay9TZWxlY3RPbkNsaWNrRGlyZWN0aXZlLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXIvdGVybXMvUmVnaXN0ZXJUZXJtc0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdXNlci9yZXNldC9Vc2VyUmVzZXRDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9uZXcvTmV3TGVhZ3VlQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvdmlldy9WaWV3TGVhZ3VlQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvZWRpdC9FZGl0TGVhZ3VlQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvY29udGFjdC9MZWFndWVDb250YWN0Q29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbWVzc2FnZS9MZWFndWVNZXNzYWdlQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvam9pbi9MZWFndWVKb2luQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlL0xlYWd1ZUludml0ZUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL0pvaW5MZWFndWVzQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL21hbmFnZS9NYW5hZ2VMZWFndWVzQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL215L015TGVhZ3Vlc0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdGVhbS92aWV3L1ZpZXdUZWFtQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS90ZWFtL2VkaXQvRWRpdFRlYW1Db250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3RlYW0vbWVzc2FnZS9UZWFtTWVzc2FnZUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdGVhbS9waWNrL1RlYW1QaWNrQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9wbGF5L2xlYWd1ZXMvUGxheUxlYWd1ZXNDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3BsYXkvdGVhbXMvUGxheVRlYW1zQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9zZWFzb25zL0FkbWluU2Vhc29uc0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vd2Vlay9BZG1pbldlZWtDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2FkbWluL3NxdWFkcy9BZG1pblNxdWFkc0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2ludml0ZS9yZXF1ZXN0L0xlYWd1ZUludml0ZVJlcXVlc3RDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9wdWJsaWMvUHVibGljTGVhZ3Vlc0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL3ByaXZhdGUvUHJpdmF0ZUxlYWd1ZXNDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3RlYW0vdmlldy9waWNrcy9WaWV3VGVhbVBpY2tzQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS90ZWFtL3BpY2svb25lL1RlYW1QaWNrT25lQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS90ZWFtL3BpY2svbWFueS9UZWFtUGlja01hbnlDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2FkbWluL2dhbWUvZWRpdC9BZG1pbkdhbWVFZGl0Q29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9nYW1lL25ldy9BZG1pbkdhbWVOZXdDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2FkbWluL3NlYXNvbnMvc2Vhc29uL0FkbWluU2Vhc29uQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi93ZWVrL25ldy9BZG1pbldlZWtOZXdDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2FkbWluL3dlZWsvZWRpdC9BZG1pbldlZWtFZGl0Q29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9zcXVhZHMvbmV3L0FkbWluU3F1YWRzTmV3Q29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9zcXVhZHMvZWRpdC9BZG1pblNxdWFkc0VkaXRDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2FkbWluL3NlYXNvbnMvc2Vhc29uL25ldy9BZG1pblNlYXNvbk5ld0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9zZWFzb24vZWRpdC9BZG1pblNlYXNvbkVkaXRDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvc0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL01BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDalVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ2FwcC50ZW1wbGF0ZXMnLCBbJ2NvbW1vbi9tb2R1bGVzL2NvbmZpcm0vY29uZmlybS50cGwuaHRtbCcsICdjb21tb24vbW9kdWxlcy9mb290ZXIvZm9vdGVyLnRwbC5odG1sJywgJ2NvbW1vbi9tb2R1bGVzL2hlYWRlci9oZWFkZXIudHBsLmh0bWwnLCAnY29tbW9uL21vZHVsZXMvbWVzc2FnZS9tZXNzYWdlLnRwbC5odG1sJywgJ2NvbW1vbi90ZW1wbGF0ZXMvbWFzdGVyLnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9hZG1pbi50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvYWRtaW4vZ2FtZS9lZGl0L2FkbWluLmdhbWUuZWRpdC50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvYWRtaW4vZ2FtZS9uZXcvYWRtaW4uZ2FtZS5uZXcudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2FkbWluL3NlYXNvbnMvYWRtaW4uc2Vhc29ucy50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9zZWFzb24vYWRtaW4uc2Vhc29uLnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9zZWFzb25zL3NlYXNvbi9lZGl0L2FkbWluLnNlYXNvbi5lZGl0LnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9zZWFzb25zL3NlYXNvbi9uZXcvYWRtaW4uc2Vhc29uLm5ldy50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvYWRtaW4vc3F1YWRzL2FkbWluLnNxdWFkcy50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvYWRtaW4vc3F1YWRzL2VkaXQvYWRtaW4uc3F1YWRzLmVkaXQudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2FkbWluL3NxdWFkcy9uZXcvYWRtaW4uc3F1YWRzLm5ldy50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvYWRtaW4vd2Vlay9hZG1pbi53ZWVrLnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9hZG1pbi93ZWVrL2VkaXQvYWRtaW4ud2Vlay5lZGl0LnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9hZG1pbi93ZWVrL25ldy9hZG1pbi53ZWVrLm5ldy50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2NvbnRhY3QvbGVhZ3VlLmNvbnRhY3QudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9lZGl0L2xlYWd1ZS5lZGl0LnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlL2xlYWd1ZS5pbnZpdGUudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9pbnZpdGUvcmVxdWVzdC9sZWFndWUuaW52aXRlLnJlcXVlc3QudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9qb2luL2xlYWd1ZS5qb2luLnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbGVhZ3VlLnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbWVzc2FnZS9sZWFndWUubWVzc2FnZS50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL25ldy9sZWFndWUubmV3LnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvdmlldy9sZWFndWUudmlldy50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL2xlYWd1ZXMuam9pbi50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL3ByaXZhdGUvbGVhZ3Vlcy5qb2luLnByaXZhdGUudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9wdWJsaWMvbGVhZ3Vlcy5qb2luLnB1YmxpYy50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9sZWFndWVzLnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL21hbmFnZS9sZWFndWVzLm1hbmFnZS50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9teS9sZWFndWVzLm15LnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9wbGF5L2xlYWd1ZXMvcGxheS5sZWFndWVzLnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9wbGF5L3BsYXkudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL3BsYXkvdGVhbXMvcGxheS50ZWFtcy50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvdGVhbS9lZGl0L3RlYW0uZWRpdC50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvdGVhbS9tZXNzYWdlL3RlYW0ubWVzc2FnZS50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvdGVhbS9waWNrL21hbnkvdGVhbS5waWNrLm1hbnkudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL3RlYW0vcGljay9vbmUvdGVhbS5waWNrLm9uZS50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvdGVhbS9waWNrL3RlYW0ucGljay50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvdGVhbS90ZWFtLnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS90ZWFtL3ZpZXcvcGlja3MvdGVhbS52aWV3LnBpY2tzLnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS90ZWFtL3ZpZXcvdGVhbS52aWV3LnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS91c2VyL3Jlc2V0L3VzZXIucmVzZXQudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL3VzZXIvdXNlci50cGwuaHRtbCcsICdtb2R1bGVzL3B1YmxpYy9hYnVzZS9hYnVzZS50cGwuaHRtbCcsICdtb2R1bGVzL3B1YmxpYy9mYXEvZmFxLnRwbC5odG1sJywgJ21vZHVsZXMvcHVibGljL2hvbWUvaG9tZS50cGwuaHRtbCcsICdtb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci9yZWdpc3Rlci50cGwuaHRtbCcsICdtb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci90ZXJtcy9yZWdpc3Rlci50ZXJtcy50cGwuaHRtbCcsICdtb2R1bGVzL3B1YmxpYy9zaWduaW4vc2lnbmluLnRwbC5odG1sJ10pO1xuXG5hbmd1bGFyLm1vZHVsZShcImNvbW1vbi9tb2R1bGVzL2NvbmZpcm0vY29uZmlybS50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcImNvbW1vbi9tb2R1bGVzL2NvbmZpcm0vY29uZmlybS50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+Q29uZmlybSBBY3Rpb248L2g0PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgPHA+e3ttZXNzYWdlfX08L3A+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5ObzwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY29uZmlybSgpXFxcIj5ZZXM8L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwiY29tbW9uL21vZHVsZXMvZm9vdGVyL2Zvb3Rlci50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcImNvbW1vbi9tb2R1bGVzL2Zvb3Rlci9mb290ZXIudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgaWQ9XFxcIm1lbnVcXFwiPlxcblwiICtcbiAgICBcIiAgPGgxPjxhIG5nLWNsaWNrPVxcXCJob21lKClcXFwiPkxPR0g8L2E+PC9oMT5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImxpbmtzXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPHNwYW4gc3R5bGU9XFxcInRleHQtdHJhbnNmb3JtOiBub25lO1xcXCI+wqkgMjAxNSBGbGV4ZGV2ZWxvcGVycy5jb20gTExDPC9zcGFuPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcImNvbW1vbi9tb2R1bGVzL2hlYWRlci9oZWFkZXIudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJjb21tb24vbW9kdWxlcy9oZWFkZXIvaGVhZGVyLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwibmF2YmFyLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxidXR0b24gY2xhc3M9XFxcIm5hdmJhci10b2dnbGVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgbmctY2xpY2s9XFxcImlzQ29sbGFwc2VkID0gIWlzQ29sbGFwc2VkXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24tYmFyXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24tYmFyXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24tYmFyXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgIDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICA8YSBjbGFzcz1cXFwibmF2YmFyLWJyYW5kXFxcIiBuZy1jbGljaz1cXFwiaG9tZSgpXFxcIj48Yj5MT1NFPC9iPk9SPGI+R088L2I+SE9NRTwvYT5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPGRpdiBjb2xsYXBzZT1cXFwiaXNDb2xsYXBzZWRcXFwiIGNsYXNzPVxcXCJuYXZiYXItY29sbGFwc2VcXFwiPlxcblwiICtcbiAgICBcIiAgICA8dWwgbmctc2hvdz1cXFwidXNlckRhdGEudXNlci5sb2FkZWRcXFwiIGNsYXNzPVxcXCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsaSBuZy1jbGFzcz1cXFwieydhY3RpdmUnOiBpc1N0YXRlKFsncHJpdmF0ZS5wbGF5LnRlYW1zJywgJ3ByaXZhdGUucGxheS5sZWFndWVzJ10pfVxcXCI+PGEgbmctY2xpY2s9XFxcInBsYXkoc2VsZWN0ZWRTZWFzb25JZClcXFwiPk15IFRlYW1zICYgTGVhZ3VlczwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgIDxsaSBuZy1jbGFzcz1cXFwieydhY3RpdmUnOiBpc1N0YXRlKFsncHJpdmF0ZS5sZWFndWVzLmpvaW4ucHVibGljJywgJ3ByaXZhdGUubGVhZ3Vlcy5qb2luLnByaXZhdGUnXSl9XFxcIj48YSBuZy1jbGljaz1cXFwiam9pbkxlYWd1ZSgpXFxcIj5Kb2luIExlYWd1ZTwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgIDxsaT48YSBuZy1jbGljaz1cXFwiY3JlYXRlTGVhZ3VlKClcXFwiPkNyZWF0ZSBMZWFndWU8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICA8bGk+PGEgbmctY2xpY2s9XFxcImZhcSgpXFxcIj5GQVE8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICA8bGkgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJkcm9wZG93bi10b2dnbGVcXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWNvZyBmYS1mdyBzZXR0aW5ncy1pY29uXFxcIiB0aXRsZT1cXFwiVXNlciBTZXR0aW5nc1xcXCI+PC9pPiA8YiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvYj48L2E+XFxuXCIgK1xuICAgIFwiICAgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGk+PGEgbmctY2xpY2s9XFxcImNvbnRhY3RVcygpXFxcIj5Db250YWN0IFVzPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsaSBjbGFzcz1cXFwiZGl2aWRlclxcXCI+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxpPjxhIG5nLWNsaWNrPVxcXCJ1c2VyUHJvZmlsZSgpXFxcIj5Vc2VyIFByb2ZpbGU8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxpPjxhIG5nLWNsaWNrPVxcXCJzaWdub3V0KClcXFwiPlNpZ24gT3V0PC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L3VsPlxcblwiICtcbiAgICBcIiAgICAgIDwvbGk+XFxuXCIgK1xuICAgIFwiICAgIDwvdWw+XFxuXCIgK1xuICAgIFwiICAgIDx1bCBuZy1zaG93PVxcXCIhdXNlckRhdGEudXNlci5sb2FkZWRcXFwiIGNsYXNzPVxcXCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsaT48YSBuZy1jbGljaz1cXFwiZmFxKClcXFwiPkZBUTwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgIDxsaT48YSBuZy1jbGljaz1cXFwicmVnaXN0ZXIoKVxcXCI+UmVnaXN0ZXI8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICA8bGkgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxhIGNsYXNzPVxcXCJkcm9wZG93bi10b2dnbGVcXFwiIGhyZWY9XFxcIiNcXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCI+U2lnbiBJbjwvc3Ryb25nPjwvYT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnUgcGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlubGluZS1zaWduaW4tZm9ybSBwYW5lbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8Zm9ybSBuYW1lPVxcXCJpbmxpbmVTaWduaW5Gb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBuZy1zdWJtaXQ9XFxcInNpZ25pbih7IGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbC50b0xvd2VyQ2FzZSgpLCBwYXNzd29yZDogY3JlZGVudGlhbHMucGFzc3dvcmQgfSk7ICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWVudmVsb3BlIGZhLWZ3XFxcIj48L2k+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiIHN0eWxlPVxcXCJjdXJzb3I6YXV0bztcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbWFpbFxcXCIgbmctbW9kZWw9XFxcImNyZWRlbnRpYWxzLmVtYWlsXFxcIiBuZy1jbGljaz1cXFwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xcXCIgcmMtdmVyaWZ5LXNldCBhdXRvZm9jdXMgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWtleSBmYS1md1xcXCI+PC9pPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIiBzdHlsZT1cXFwiY3Vyc29yOmF1dG87XFxcIiBwbGFjZWhvbGRlcj1cXFwiUGFzc3dvcmRcXFwiIG5nLW1vZGVsPVxcXCJjcmVkZW50aWFscy5wYXNzd29yZFxcXCIgbmctY2xpY2s9XFxcIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcXFwiIHJjLXZlcmlmeS1zZXQgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8ZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiZm9yZ290LXBhc3N3b3JkIGJ0biBidG4tbGluayBwdWxsLWxlZnRcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCIgbmctY2xpY2s9XFxcInJlc2V0UGFzc3dvcmQoKVxcXCI+Rm9yZ290IFBhc3N3b3JkPzwvYT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJzaWduLWluLWJ0biBidG4gYnRuLXByaW1hcnkgcHVsbC1yaWdodFxcXCIgbmctZGlzYWJsZWQ9XFxcImlubGluZVNpZ25pbkZvcm0uJGludmFsaWRcXFwiPlNpZ24gaW48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cXFwiY2xlYXI6IGJvdGg7XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxocj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJlZ2lzdGVyXFxcIj48YSBuZy1jbGljaz1cXFwicmVnaXN0ZXIoKVxcXCI+RG9uJ3QgaGF2ZSBhbiBhY2NvdW50PyA8c3Ryb25nPlJlZ2lzdGVyPC9zdHJvbmc+PC9hPjwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDwvZm9ybT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2xpPlxcblwiICtcbiAgICBcIiAgICA8L3VsPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcImNvbW1vbi9tb2R1bGVzL21lc3NhZ2UvbWVzc2FnZS50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcImNvbW1vbi9tb2R1bGVzL21lc3NhZ2UvbWVzc2FnZS50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGlzbWlzc2FibGUgYWxlcnQte3ttZXNzYWdlRGF0YS5tZXNzYWdlLnR5cGV9fVxcXCIgbmctc2hvdz1cXFwibWVzc2FnZURhdGEubWVzc2FnZS5sb2FkZWRcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJhbGVydFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIG5nLWNsaWNrPVxcXCJkaXNtaXNzTWVzc2FnZShtZXNzYWdlRGF0YSlcXFwiPiZ0aW1lczs8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIHt7bWVzc2FnZURhdGEubWVzc2FnZS5jb250ZW50fX1cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwiY29tbW9uL3RlbXBsYXRlcy9tYXN0ZXIudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJjb21tb24vdGVtcGxhdGVzL21hc3Rlci50cGwuaHRtbFwiLFxuICAgIFwiPCEtLSBIZWFkZXIgLS0+XFxuXCIgK1xuICAgIFwiPG5hdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1pbnZlcnNlXFxcIiB1aS12aWV3PVxcXCJoZWFkZXJcXFwiPjwvbmF2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiICA8IS0tIE1lc3NhZ2UgLS0+XFxuXCIgK1xuICAgIFwiICA8ZGl2IHVpLXZpZXc9XFxcIm1lc3NhZ2VcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgPCEtLSBDb250ZW50IC0tPlxcblwiICtcbiAgICBcIiAgPGRpdiB1aS12aWV3PVxcXCJjb250ZW50XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8IS0tIEZvb3RlciAtLT5cXG5cIiArXG4gICAgXCI8Zm9vdGVyIGNsYXNzPVxcXCJmb290ZXJcXFwiIHVpLXZpZXc9XFxcImZvb3RlclxcXCI+PC9mb290ZXI+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9hZG1pbi9hZG1pbi50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9hZG1pbi9hZG1pbi50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiB1aS12aWV3PVxcXCJhZG1pbkNvbnRlbnRcXFwiIGNsYXNzPVxcXCJhZG1pbi1jb250ZW50XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2FkbWluL2dhbWUvZWRpdC9hZG1pbi5nYW1lLmVkaXQudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvYWRtaW4vZ2FtZS9lZGl0L2FkbWluLmdhbWUuZWRpdC50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+RWRpdCBHYW1lIFtJRDoge3tnYW1lRGF0YS5pZH19IF19PC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxmb3JtIHN0eWxlPVxcXCJwYWRkaW5nOiAxMHB4O1xcXCIgbmFtZT1cXFwiZWRpdEdhbWVGb3JtXFxcIiBjbGFzcz1cXFwiZWRpdC1nYW1lLWZvcm0gZm9ybS1ob3Jpem9udGFsXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1zbS02IGNvbnRyb2wtbGFiZWxcXFwiPlN0YXJ0cyBBdCAoTG9jYWwgVGltZSk6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93blxcXCIgaXMtb3Blbj1cXFwic3RhcnRzQXREcm9wZG93bi5pc29wZW5cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8YSBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiByb2xlPVxcXCJidXR0b25cXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgZGF0YS10YXJnZXQ9XFxcIiNcXFwiIGhyZWY9XFxcIiNcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBmb3JtYXR0ZWQtZGF0ZSBkYXRhLW5nLW1vZGVsPVxcXCJnYW1lRGF0YS5zdGFydHNfYXRcXFwiIG5nLXJlcXVpcmVkPVxcXCJ0cnVlXFxcIiBuZy1kaXNhYmxlZD1cXFwidHJ1ZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPjxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNhbGVuZGFyXFxcIj48L2k+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2E+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCIgcm9sZT1cXFwibWVudVxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJkTGFiZWxcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkYXRldGltZXBpY2tlciBkYXRhLW5nLW1vZGVsPVxcXCJnYW1lRGF0YS5zdGFydHNfYXRcXFwiIGRhdGEtb24tc2V0LXRpbWU9XFxcImNsb3NlU3RhcnRzQXQoKVxcXCIgZGF0YS1kYXRldGltZXBpY2tlci1jb25maWc9XFxcInsgbWludXRlU3RlcDogMSB9XFxcIi8+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvdWw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBmb3I9XFxcIm5vdGVcXFwiIGNsYXNzPVxcXCJjb2wtc20tNiBjb250cm9sLWxhYmVsXFxcIj5Ob3RlOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGlucHV0IGlkPVxcXCJub3RlXFxcIiBuYW1lPVxcXCJub3RlXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwiZ2FtZURhdGEubm90ZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgZm9yPVxcXCJ2aXNpdGluZ1NxdWFkXFxcIiBjbGFzcz1cXFwiY29sLXNtLTYgY29udHJvbC1sYWJlbFxcXCI+VmlzaXRpbmcgU3F1YWQ6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c2VsZWN0IGlkPVxcXCJ2aXNpdGluZ1NxdWFkXFxcIiBuYW1lPVxcXCJ2aXNpdGluZ1NxdWFkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwiZ2FtZURhdGEudmlzaXRpbmdfc3F1YWRfaWRcXFwiIG5nLW9wdGlvbnM9XFxcInZpc2l0aW5nU3F1YWQuaWQgYXMgdmlzaXRpbmdTcXVhZC5uYW1lIGZvciB2aXNpdGluZ1NxdWFkIGluIHNxdWFkc1xcXCI+PC9zZWxlY3Q+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgZm9yPVxcXCJob21lU3F1YWRcXFwiIGNsYXNzPVxcXCJjb2wtc20tNiBjb250cm9sLWxhYmVsXFxcIiA+SG9tZSBTcXVhZDo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzZWxlY3QgaWQ9XFxcImhvbWVTcXVhZFxcXCIgbmFtZT1cXFwiaG9tZVNxdWFkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwiZ2FtZURhdGEuaG9tZV9zcXVhZF9pZFxcXCIgbmctb3B0aW9ucz1cXFwiaG9tZVNxdWFkLmlkIGFzIGhvbWVTcXVhZC5uYW1lIGZvciBob21lU3F1YWQgaW4gc3F1YWRzXFxcIj48L3NlbGVjdD5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBmb3I9XFxcInZpc2l0b3JTY29yZVxcXCIgY2xhc3M9XFxcImNvbC1zbS02IGNvbnRyb2wtbGFiZWxcXFwiPnt7Z2V0U3F1YWQoZ2FtZURhdGEudmlzaXRpbmdfc3F1YWRfaWQpLm5hbWV9fSBTY29yZTo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxpbnB1dCBpZD1cXFwidmlzaXRvclNjb3JlXFxcIiBuYW1lPVxcXCJ2aXNpdG9yU2NvcmVcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgbWluPVxcXCIwXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwiZ2FtZURhdGEudmlzaXRpbmdfc3F1YWRfc2NvcmVcXFwiIHNlbGVjdC1vbi1jbGljayByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBmb3I9XFxcImhvbWVTY29yZVxcXCIgY2xhc3M9XFxcImNvbC1zbS02IGNvbnRyb2wtbGFiZWxcXFwiPnt7Z2V0U3F1YWQoZ2FtZURhdGEuaG9tZV9zcXVhZF9pZCkubmFtZX19IFNjb3JlOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGlucHV0IGlkPVxcXCJob21lU2NvcmVcXFwiIG5hbWU9XFxcImhvbWVTY29yZVxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBtaW49XFxcIjBcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJnYW1lRGF0YS5ob21lX3NxdWFkX3Njb3JlXFxcIiBzZWxlY3Qtb24tY2xpY2sgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgZm9yPVxcXCJjb21wbGV0ZVxcXCIgY2xhc3M9XFxcImNvbC1zbS02IGNvbnRyb2wtbGFiZWxcXFwiPkNvbXBsZXRlZDo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxpbnB1dCBpZD1cXFwiY29tcGxldGVcXFwiIG5hbWU9XFxcImNvbXBsZXRlXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcImdhbWVEYXRhLmNvbXBsZXRlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxocj5cXG5cIiArXG4gICAgXCIgICAgPGEgbmctc2hvdz1cXFwiIXNob3dPcHRpb25zXFxcIiBuZy1jbGljaz1cXFwic2hvd09wdGlvbnMgPSB0cnVlXFxcIj5TaG93IE9wdGlvbnM8L2E+XFxuXCIgK1xuICAgIFwiICAgIDxhIG5nLXNob3c9XFxcInNob3dPcHRpb25zXFxcIiBuZy1jbGljaz1cXFwic2hvd09wdGlvbnMgPSBmYWxzZVxcXCI+SGlkZSBPcHRpb25zPC9hPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IG5nLXNob3c9XFxcInNob3dPcHRpb25zXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsYWJlbCBmb3I9XFxcInNob290b3V0XFxcIiBjbGFzcz1cXFwiY29sLXNtLTYgY29udHJvbC1sYWJlbFxcXCI+U2hvb3RvdXQ6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJzaG9vdG91dFxcXCIgbmFtZT1cXFwic2hvb3RvdXRcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBuZy1tb2RlbD1cXFwiZ2FtZURhdGEuc2hvb3RvdXRcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGFiZWwgZm9yPVxcXCJvdmVydGltZXNcXFwiIGNsYXNzPVxcXCJjb2wtc20tNiBjb250cm9sLWxhYmVsXFxcIj5PdmVydGltZXM6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJvdmVydGltZXNcXFwiIG5hbWU9XFxcIm92ZXJ0aW1lc1xcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwiZ2FtZURhdGEub3ZlcnRpbWVzXFxcIiBzZWxlY3Qtb24tY2xpY2sgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsYWJlbCBmb3I9XFxcImlubmluZ3NcXFwiIGNsYXNzPVxcXCJjb2wtc20tNiBjb250cm9sLWxhYmVsXFxcIj5Jbm5pbmdzOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpbnB1dCBpZD1cXFwiaW5uaW5nc1xcXCIgbmFtZT1cXFwiaW5uaW5nc1xcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwiZ2FtZURhdGEuaW5uaW5nc1xcXCIgc2VsZWN0LW9uLWNsaWNrIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGFiZWwgZm9yPVxcXCJwb3N0cG9uZWRcXFwiIGNsYXNzPVxcXCJjb2wtc20tNiBjb250cm9sLWxhYmVsXFxcIj5Qb3N0cG9uZWQ6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJwb3N0cG9uZWRcXFwiIG5hbWU9XFxcInBvc3Rwb25lZFxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIG5nLW1vZGVsPVxcXCJnYW1lRGF0YS5wb3N0cG9uZWRcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGFiZWwgZm9yPVxcXCJwbGF5b2ZmXFxcIiBjbGFzcz1cXFwiY29sLXNtLTYgY29udHJvbC1sYWJlbFxcXCI+UGxheW9mZnM6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJwbGF5b2ZmXFxcIiBuYW1lPVxcXCJwbGF5b2ZmXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcImdhbWVEYXRhLnBsYXlvZmZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGFiZWwgZm9yPVxcXCJ0YmRcXFwiIGNsYXNzPVxcXCJjb2wtc20tNiBjb250cm9sLWxhYmVsXFxcIj5UQkQ6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJ0YmRcXFwiIG5hbWU9XFxcInRiZFxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIG5nLW1vZGVsPVxcXCJnYW1lRGF0YS50YmRcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGFiZWwgZm9yPVxcXCJpZl9uZWNlc3NhcnlcXFwiIGNsYXNzPVxcXCJjb2wtc20tNiBjb250cm9sLWxhYmVsXFxcIj5JZiBOZWNlc3Nhcnk6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJpZl9uZWNlc3NhcnlcXFwiIG5hbWU9XFxcImlmX25lY2Vzc2FyeVxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIG5nLW1vZGVsPVxcXCJnYW1lRGF0YS5pZl9uZWNlc3NhcnlcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgPC9mb3JtPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+Q2FuY2VsPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG5nLWRpc2FibGVkPVxcXCJlZGl0R2FtZUZvcm0uJGludmFsaWRcXFwiIG5nLWNsaWNrPVxcXCJlZGl0R2FtZShnYW1lRGF0YSlcXFwiPlVwZGF0ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvYWRtaW4vZ2FtZS9uZXcvYWRtaW4uZ2FtZS5uZXcudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvYWRtaW4vZ2FtZS9uZXcvYWRtaW4uZ2FtZS5uZXcudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkNyZWF0ZSBHYW1lPC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxoND57e3dlZWtEYXRhLmRpc3BsYXl9fSB8IHt7d2Vla0RhdGEudHlwZX19PC9oND5cXG5cIiArXG4gICAgXCIgIDxocj5cXG5cIiArXG4gICAgXCIgIDxmb3JtIG5hbWU9XFxcIm5ld0dhbWVGb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwibm90ZVxcXCI+Tm90ZTo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxpbnB1dCBpZD1cXFwibm90ZVxcXCIgbmFtZT1cXFwibm90ZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcIm5ld0dhbWVEYXRhLm5vdGVcXFwiPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcInZpc2l0aW5nU3F1YWRcXFwiPlZpc2l0aW5nIFNxdWFkOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPHNlbGVjdCBpZD1cXFwidmlzaXRpbmdTcXVhZFxcXCIgbmFtZT1cXFwidmlzaXRpbmdTcXVhZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcIm5ld0dhbWVEYXRhLnZpc2l0aW5nX3NxdWFkX2lkXFxcIiBuZy1vcHRpb25zPVxcXCJzcXVhZC5pZCBhcyBzcXVhZC5uYW1lIGZvciBzcXVhZCBpbiBzcXVhZHNcXFwiPjwvc2VsZWN0PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImhvbWVTcXVhZFxcXCI+SG9tZSBTcXVhZDo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxzZWxlY3QgaWQ9XFxcImhvbWVTcXVhZFxcXCIgbmFtZT1cXFwiaG9tZVNxdWFkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwibmV3R2FtZURhdGEuaG9tZV9zcXVhZF9pZFxcXCIgbmctb3B0aW9ucz1cXFwic3F1YWQuaWQgYXMgc3F1YWQubmFtZSBmb3Igc3F1YWQgaW4gc3F1YWRzXFxcIj48L3NlbGVjdD5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCI+U3RhcnRzIEF0IChMb2NhbCBUaW1lKTo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duXFxcIiBpcy1vcGVuPVxcXCJzdGFydHNBdERyb3Bkb3duLmlzb3BlblxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8YSBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiByb2xlPVxcXCJidXR0b25cXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgZGF0YS10YXJnZXQ9XFxcIiNcXFwiIGhyZWY9XFxcIiNcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGZvcm1hdHRlZC1kYXRlIGRhdGEtbmctbW9kZWw9XFxcIm5ld0dhbWVEYXRhLnN0YXJ0c19hdFxcXCIgbmctcmVxdWlyZWQ9XFxcInRydWVcXFwiIG5nLWRpc2FibGVkPVxcXCJ0cnVlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPjxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNhbGVuZGFyXFxcIj48L2k+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvYT5cXG5cIiArXG4gICAgXCIgICAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCIgcm9sZT1cXFwibWVudVxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJkTGFiZWxcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8ZGF0ZXRpbWVwaWNrZXIgZGF0YS1uZy1tb2RlbD1cXFwibmV3R2FtZURhdGEuc3RhcnRzX2F0XFxcIiBkYXRhLW9uLXNldC10aW1lPVxcXCJjbG9zZVN0YXJ0c0F0KClcXFwiIGRhdGEtZGF0ZXRpbWVwaWNrZXItY29uZmlnPVxcXCJ7IG1pbnV0ZVN0ZXA6IDEgfVxcXCIvPlxcblwiICtcbiAgICBcIiAgICAgICAgPC91bD5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGlucHV0IGlkPVxcXCJwbGF5b2ZmXFxcIiBuYW1lPVxcXCJwbGF5b2ZmXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcIm5ld0dhbWVEYXRhLnBsYXlvZmZcXFwiPiBQbGF5b2Zmc1xcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8aW5wdXQgaWQ9XFxcInRiZFxcXCIgbmFtZT1cXFwidGJkXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcIm5ld0dhbWVEYXRhLnRiZFxcXCI+IFRCRFxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8aW5wdXQgaWQ9XFxcImlmX25lY2Vzc2FyeVxcXCIgbmFtZT1cXFwiaWZfbmVjZXNzYXJ5XFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcIm5ld0dhbWVEYXRhLmlmX25lY2Vzc2FyeVxcXCI+IElmIE5lY2Vzc2FyeVxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZm9ybT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwibmV3R2FtZUZvcm0uJGludmFsaWRcXFwiIG5nLWNsaWNrPVxcXCJjcmVhdGVHYW1lKG5ld0dhbWVEYXRhKVxcXCI+Q3JlYXRlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9hZG1pbi9zZWFzb25zL2FkbWluLnNlYXNvbnMudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9hZG1pbi5zZWFzb25zLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJzZWFzb25zLWhlYWRlci1yb3cgcm93XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGgzPlNlYXNvbnM8L2gzPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInNlYXNvbnMtYnRuLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNyZWF0ZS1zZWFzb24tYnRuIGJ0biBidG4tcHJpbWFyeVxcXCIgbmctY2xpY2s9XFxcImNyZWF0ZVNlYXNvbigpXFxcIj5DcmVhdGUgU2Vhc29uPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwic2Vhc29ucyBsaXN0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgIDxhIG5nLXJlcGVhdD1cXFwic2Vhc29uIGluIHNlYXNvbnNcXFwiIG5nLWNsaWNrPVxcXCJzaG93U2Vhc29uKHNlYXNvbilcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtY2hlY2sgZmEtZndcXFwiIG5nLXNob3c9XFxcInNlYXNvbi5jdXJyZW50ID09PSB0cnVlXFxcIiB0aXRsZT1cXFwiY3VycmVudCBzZWFzb25cXFwiPjwvaT4ge3tzZWFzb24ubmFtZX19PGJyPjxzcGFuIGNsYXNzPVxcXCJzdGFydC1lbmRcXFwiPlN0YXJ0czoge3tzZWFzb24uc3RhcnRfZGlzcGxheX19IHwgRW5kczoge3tzZWFzb24uZW5kX2Rpc3BsYXl9fTwvc3Bhbj48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYmFkZ2VcXFwiPnt7c2Vhc29uLndlZWtfY291bnR9fSB3ZWVrPHNwYW4gbmctc2hvdz1cXFwic2Vhc29uLndlZWtfY291bnQgIT09IDFcXFwiPnM8L3NwYW4+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvYT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2FkbWluL3NlYXNvbnMvc2Vhc29uL2FkbWluLnNlYXNvbi50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9hZG1pbi9zZWFzb25zL3NlYXNvbi9hZG1pbi5zZWFzb24udHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcInBhZ2UtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxoMz57e3NlYXNvbi5uYW1lfX0gKHt7c2Vhc29uLnN0YXJ0X2Rpc3BsYXl9fSAtIHt7c2Vhc29uLmVuZF9kaXNwbGF5fX0pIDxzbWFsbD48YSBuZy1jbGljaz1cXFwiZWRpdFNlYXNvbihzZWFzb24pXFxcIj5bIGVkaXQgXTwvYT48L3NtYWxsPjwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwic2Vhc29uLXdlZWtzLWhlYWRlci1yb3cgcm93XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICA8aDQ+V2Vla3MgWyB7e3dlZWtzLmxlbmd0aH19IF0gPHNtYWxsPjxhIG5nLWNsaWNrPVxcXCJjcmVhdGVXZWVrKHNlYXNvbilcXFwiPlsgY3JlYXRlIF08L2E+PC9zbWFsbD48L2g0PlxcblwiICtcbiAgICBcIiAgICA8aHI+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJzZWFzb24td2Vla3MgbGlzdC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICA8YSBuZy1yZXBlYXQ9XFxcIndlZWsgaW4gd2Vla3NcXFwiIG5nLWNsaWNrPVxcXCJzaG93V2Vlayh3ZWVrKVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1jaGVjayBmYS1md1xcXCIgbmctc2hvdz1cXFwid2Vlay5jb21wbGV0ZSA9PT0gdHJ1ZVxcXCIgdGl0bGU9XFxcImNvbXBsZXRlIHdlZWtcXFwiPjwvaT4ge3t3ZWVrLmRpc3BsYXl9fTwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcInN0YXJ0LWVuZCBjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYmFkZ2VcXFwiPnt7d2Vlay5nYW1lX2NvbXBsZXRlX2NvdW50fX0gLyB7e3dlZWsuZ2FtZV9jb3VudH19IGdhbWU8c3BhbiBuZy1zaG93PVxcXCJ3ZWVrLmdhbWVfY291bnQgIT09IDFcXFwiPnM8L3NwYW4+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvYT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJzZWFzb24tbGVhZ3Vlcy1oZWFkZXItcm93IHJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGg0PlB1YmxpYyBMZWFndWVzIFsge3twdWJsaWNMZWFndWVzLmxlbmd0aH19IF08L2g0PlxcblwiICtcbiAgICBcIiAgICA8aHI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkZpbHRlciBwdWJsaWMgbGVhZ3Vlcy4uLlxcXCIgbmctbW9kZWw9XFxcInB1YmxpY1F1ZXJ5XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYnRuXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXNlYXJjaFxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICAgIDwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJzZWFzb24tbGVhZ3VlcyBsaXN0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgIDxhIG5nLXJlcGVhdD1cXFwicHVibGljTGVhZ3VlIGluIHB1YmxpY0xlYWd1ZXMgfCBmaWx0ZXI6cHVibGljUXVlcnk6c3RyaWN0XFxcIiBuZy1jbGljaz1cXFwic2hvd0xlYWd1ZShwdWJsaWNMZWFndWUpXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJsZWFndWUtbmFtZSBjb2wtc20tNiBjb2wtbWQtNlxcXCI+e3twdWJsaWNMZWFndWUubmFtZX19PGJyPjxzcGFuIGNsYXNzPVxcXCJ0ZWFtLWNvdW50IGxlYWd1ZS1jb21taXNoXFxcIj5Db21taXNoOiB7e3B1YmxpY0xlYWd1ZS5jb21taXNoX25hbWVzLmpvaW4oJywgJyl9fTwvc3Bhbj48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBjbGFzcz1cXFwicHVibGljLWxlYWd1ZS1tZXRhXFxcIj57e3B1YmxpY0xlYWd1ZS5mb3JtYXR9fTxicj5TdGFydHMge3twdWJsaWNMZWFndWUuc3RhcnRfd2Vla319PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJhZGdlXFxcIj48c3BhbiBuZy1zaG93PVxcXCJwdWJsaWNMZWFndWUuZWxpbWluYXRpb25cXFwiPnt7cHVibGljTGVhZ3VlLmFsaXZlX3RlYW1fY291bnR9fS88L3NwYW4+e3twdWJsaWNMZWFndWUudGVhbV9jb3VudH19IHRlYW08c3BhbiBuZy1zaG93PVxcXCJwdWJsaWNMZWFndWUudGVhbV9jb3VudCAhPT0gMVxcXCI+czwvc3Bhbj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9hPlxcblwiICtcbiAgICBcIjwvZGl2PjxkaXYgY2xhc3M9XFxcInNlYXNvbi1sZWFndWVzLWhlYWRlci1yb3cgcm93XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICA8aDQ+UHJpdmF0ZSBMZWFndWVzIFsge3twcml2YXRlTGVhZ3Vlcy5sZW5ndGh9fSBdPC9oND5cXG5cIiArXG4gICAgXCIgICAgPGhyPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJGaWx0ZXIgcHJpdmF0ZSBsZWFndWVzLi4uXFxcIiBuZy1tb2RlbD1cXFwicHJpdmF0ZVF1ZXJ5XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYnRuXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXNlYXJjaFxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICAgIDwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJzZWFzb24tbGVhZ3VlcyBsaXN0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgIDxhIG5nLXJlcGVhdD1cXFwicHJpdmF0ZUxlYWd1ZSBpbiBwcml2YXRlTGVhZ3VlcyB8IGZpbHRlcjpwcml2YXRlUXVlcnk6c3RyaWN0XFxcIiBuZy1jbGljaz1cXFwic2hvd0xlYWd1ZShwcml2YXRlTGVhZ3VlKVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwibGVhZ3VlLW5hbWUgY29sLXNtLTYgY29sLW1kLTZcXFwiPnt7cHJpdmF0ZUxlYWd1ZS5uYW1lfX08YnI+PHNwYW4gY2xhc3M9XFxcInRlYW0tY291bnQgbGVhZ3VlLWNvbW1pc2hcXFwiPkNvbW1pc2g6IHt7cHJpdmF0ZUxlYWd1ZS5jb21taXNoX25hbWVzLmpvaW4oJywgJyl9fTwvc3Bhbj48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBjbGFzcz1cXFwicHJpdmF0ZS1sZWFndWUtbWV0YVxcXCI+e3twcml2YXRlTGVhZ3VlLmZvcm1hdH19PGJyPlN0YXJ0cyB7e3ByaXZhdGVMZWFndWUuc3RhcnRfd2Vla319PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJhZGdlXFxcIj48c3BhbiBuZy1zaG93PVxcXCJwcml2YXRlTGVhZ3VlLmVsaW1pbmF0aW9uXFxcIj57e3ByaXZhdGVMZWFndWUuYWxpdmVfdGVhbV9jb3VudH19Lzwvc3Bhbj57e3ByaXZhdGVMZWFndWUudGVhbV9jb3VudH19IHRlYW08c3BhbiBuZy1zaG93PVxcXCJwcml2YXRlTGVhZ3VlLnRlYW1fY291bnQgIT09IDFcXFwiPnM8L3NwYW4+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvYT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2FkbWluL3NlYXNvbnMvc2Vhc29uL2VkaXQvYWRtaW4uc2Vhc29uLmVkaXQudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9zZWFzb24vZWRpdC9hZG1pbi5zZWFzb24uZWRpdC50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+RWRpdCBTZWFzb248L2gzPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgPGZvcm0gbmFtZT1cXFwic2Vhc29uRm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZT5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3Ioc2Vhc29uRm9ybS5zZWFzb25OYW1lKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKHNlYXNvbkZvcm0uc2Vhc29uTmFtZSl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwic2Vhc29uTmFtZVxcXCI+U2Vhc29uIG5hbWU6XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihzZWFzb25Gb3JtLnNlYXNvbk5hbWUsICdyZXF1aXJlZCcpXFxcIj5bIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3Ioc2Vhc29uRm9ybS5zZWFzb25OYW1lLCAnbWF4bGVuZ3RoJylcXFwiPlsgVG9vIExvbmcgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8aW5wdXQgaWQ9XFxcInNlYXNvbk5hbWVcXFwiIG5hbWU9XFxcInNlYXNvbk5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJzZWFzb25EYXRhLm5hbWVcXFwiIG5nLW1heGxlbmd0aD1cXFwiMjBcXFwiIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKHNlYXNvbkZvcm0uc2Vhc29uTmFtZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKHNlYXNvbkZvcm0uc2Vhc29uVHlwZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihzZWFzb25Gb3JtLnNlYXNvblR5cGUpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcInNlYXNvblR5cGVcXFwiPlNlYXNvbiB0eXBlIChOQkEsIE5GTCwgZXRjKTpcXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKHNlYXNvbkZvcm0uc2Vhc29uVHlwZSwgJ3JlcXVpcmVkJylcXFwiPlsgUmVxdWlyZWQgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihzZWFzb25Gb3JtLnNlYXNvblR5cGUsICdtYXhsZW5ndGgnKVxcXCI+WyBUb28gTG9uZyBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxpbnB1dCBpZD1cXFwic2Vhc29uVHlwZVxcXCIgbmFtZT1cXFwic2Vhc29uVHlwZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcInNlYXNvbkRhdGEuc2Vhc29uX3R5cGVcXFwiIG5nLW1heGxlbmd0aD1cXFwiMTBcXFwiIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKHNlYXNvbkZvcm0uc2Vhc29uVHlwZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCI+U3RhcnRzIEF0IChMb2NhbCBUaW1lKTo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duXFxcIiBpcy1vcGVuPVxcXCJzdGFydHNBdERyb3Bkb3duLmlzb3BlblxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8YSBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiByb2xlPVxcXCJidXR0b25cXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgZGF0YS10YXJnZXQ9XFxcIiNcXFwiIGhyZWY9XFxcIiNcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGZvcm1hdHRlZC1kYXRlIGRhdGEtbmctbW9kZWw9XFxcInNlYXNvbkRhdGEuc3RhcnRzX2F0XFxcIiBuZy1yZXF1aXJlZD1cXFwidHJ1ZVxcXCIgbmctZGlzYWJsZWQ9XFxcInRydWVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+PGkgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tY2FsZW5kYXJcXFwiPjwvaT48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c21hbGw+U2V0IHRvIGZ1dHVyZSBpZiBzZWFzb24gaXMgbm90IHJlYWR5IHRvIGdvIGxpdmUgeWV0PC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvYT5cXG5cIiArXG4gICAgXCIgICAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCIgcm9sZT1cXFwibWVudVxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJkTGFiZWxcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8ZGF0ZXRpbWVwaWNrZXIgZGF0YS1uZy1tb2RlbD1cXFwic2Vhc29uRGF0YS5zdGFydHNfYXRcXFwiIGRhdGEtb24tc2V0LXRpbWU9XFxcImNsb3NlU3RhcnRzQXQoKVxcXCIgZGF0YS1kYXRldGltZXBpY2tlci1jb25maWc9XFxcInsgbWludXRlU3RlcDogNSB9XFxcIi8+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L3VsPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIj5FbmRzIEF0IChMb2NhbCBUaW1lKTo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duXFxcIiBpcy1vcGVuPVxcXCJlbmRzQXREcm9wZG93bi5pc29wZW5cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGEgY2xhc3M9XFxcImRyb3Bkb3duLXRvZ2dsZVxcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGRhdGEtdGFyZ2V0PVxcXCIjXFxcIiBocmVmPVxcXCIjXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBmb3JtYXR0ZWQtZGF0ZSBkYXRhLW5nLW1vZGVsPVxcXCJzZWFzb25EYXRhLmVuZHNfYXRcXFwiIG5nLXJlcXVpcmVkPVxcXCJ0cnVlXFxcIiBuZy1kaXNhYmxlZD1cXFwidHJ1ZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWFkZG9uXFxcIj48aSBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jYWxlbmRhclxcXCI+PC9pPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzbWFsbD5TaG91bGQgYmUgdGhlIGVuZCBkYXRlIG9mIHRoZSBzZWFzb24ncyBsYXN0IHdlZWs8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9hPlxcblwiICtcbiAgICBcIiAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIiByb2xlPVxcXCJtZW51XFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcImRMYWJlbFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxkYXRldGltZXBpY2tlciBkYXRhLW5nLW1vZGVsPVxcXCJzZWFzb25EYXRhLmVuZHNfYXRcXFwiIGRhdGEtb24tc2V0LXRpbWU9XFxcImNsb3NlRW5kc0F0KClcXFwiIGRhdGEtZGF0ZXRpbWVwaWNrZXItY29uZmlnPVxcXCJ7IG1pbnV0ZVN0ZXA6IDUgfVxcXCIvPlxcblwiICtcbiAgICBcIiAgICAgICAgPC91bD5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctZGlzYWJsZWQ9XFxcInNlYXNvbkZvcm0uJGludmFsaWRcXFwiIG5nLWNsaWNrPVxcXCJ1cGRhdGVTZWFzb24oc2Vhc29uRGF0YSlcXFwiPlVwZGF0ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9zZWFzb24vbmV3L2FkbWluLnNlYXNvbi5uZXcudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9zZWFzb24vbmV3L2FkbWluLnNlYXNvbi5uZXcudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkNyZWF0ZSBTZWFzb248L2gzPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgPGZvcm0gbmFtZT1cXFwibmV3U2Vhc29uRm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZT5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IobmV3U2Vhc29uRm9ybS5zZWFzb25OYW1lKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKG5ld1NlYXNvbkZvcm0uc2Vhc29uTmFtZSl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwic2Vhc29uTmFtZVxcXCI+U2Vhc29uIG5hbWU6XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihuZXdTZWFzb25Gb3JtLnNlYXNvbk5hbWUsICdyZXF1aXJlZCcpXFxcIj5bIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobmV3U2Vhc29uRm9ybS5zZWFzb25OYW1lLCAnbWF4bGVuZ3RoJylcXFwiPlsgVG9vIExvbmcgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8aW5wdXQgaWQ9XFxcInNlYXNvbk5hbWVcXFwiIG5hbWU9XFxcInNlYXNvbk5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJuZXdTZWFzb25EYXRhLm5hbWVcXFwiIG5nLW1heGxlbmd0aD1cXFwiMjBcXFwiIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKG5ld1NlYXNvbkZvcm0uc2Vhc29uTmFtZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKG5ld1NlYXNvbkZvcm0uc2Vhc29uVHlwZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihuZXdTZWFzb25Gb3JtLnNlYXNvblR5cGUpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcInNlYXNvblR5cGVcXFwiPlNlYXNvbiB0eXBlIChOQkEsIE5GTCwgZXRjKTpcXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld1NlYXNvbkZvcm0uc2Vhc29uVHlwZSwgJ3JlcXVpcmVkJylcXFwiPlsgUmVxdWlyZWQgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihuZXdTZWFzb25Gb3JtLnNlYXNvblR5cGUsICdtYXhsZW5ndGgnKVxcXCI+WyBUb28gTG9uZyBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxpbnB1dCBpZD1cXFwic2Vhc29uVHlwZVxcXCIgbmFtZT1cXFwic2Vhc29uVHlwZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcIm5ld1NlYXNvbkRhdGEuc2Vhc29uX3R5cGVcXFwiIG5nLW1heGxlbmd0aD1cXFwiMTBcXFwiIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKG5ld1NlYXNvbkZvcm0uc2Vhc29uVHlwZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCI+U3RhcnRzIEF0IChMb2NhbCBUaW1lKTo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duXFxcIiBpcy1vcGVuPVxcXCJzdGFydHNBdERyb3Bkb3duLmlzb3BlblxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8YSBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiByb2xlPVxcXCJidXR0b25cXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgZGF0YS10YXJnZXQ9XFxcIiNcXFwiIGhyZWY9XFxcIiNcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGZvcm1hdHRlZC1kYXRlIGRhdGEtbmctbW9kZWw9XFxcIm5ld1NlYXNvbkRhdGEuc3RhcnRzX2F0XFxcIiBuZy1yZXF1aXJlZD1cXFwidHJ1ZVxcXCIgbmctZGlzYWJsZWQ9XFxcInRydWVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+PGkgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tY2FsZW5kYXJcXFwiPjwvaT48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c21hbGw+U2V0IHRvIGZ1dHVyZSBpZiBzZWFzb24gaXMgbm90IHJlYWR5IHRvIGdvIGxpdmUgeWV0PC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvYT5cXG5cIiArXG4gICAgXCIgICAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCIgcm9sZT1cXFwibWVudVxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJkTGFiZWxcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8ZGF0ZXRpbWVwaWNrZXIgZGF0YS1uZy1tb2RlbD1cXFwibmV3U2Vhc29uRGF0YS5zdGFydHNfYXRcXFwiIGRhdGEtb24tc2V0LXRpbWU9XFxcImNsb3NlU3RhcnRzQXQoKVxcXCIgZGF0YS1kYXRldGltZXBpY2tlci1jb25maWc9XFxcInsgbWludXRlU3RlcDogNSB9XFxcIi8+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L3VsPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIj5FbmRzIEF0IChMb2NhbCBUaW1lKTo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duXFxcIiBpcy1vcGVuPVxcXCJlbmRzQXREcm9wZG93bi5pc29wZW5cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGEgY2xhc3M9XFxcImRyb3Bkb3duLXRvZ2dsZVxcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGRhdGEtdGFyZ2V0PVxcXCIjXFxcIiBocmVmPVxcXCIjXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBmb3JtYXR0ZWQtZGF0ZSBkYXRhLW5nLW1vZGVsPVxcXCJuZXdTZWFzb25EYXRhLmVuZHNfYXRcXFwiIG5nLXJlcXVpcmVkPVxcXCJ0cnVlXFxcIiBuZy1kaXNhYmxlZD1cXFwidHJ1ZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWFkZG9uXFxcIj48aSBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jYWxlbmRhclxcXCI+PC9pPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzbWFsbD5TaG91bGQgYmUgdGhlIGVuZCBkYXRlIG9mIHRoZSBzZWFzb24ncyBsYXN0IHdlZWs8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9hPlxcblwiICtcbiAgICBcIiAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIiByb2xlPVxcXCJtZW51XFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcImRMYWJlbFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxkYXRldGltZXBpY2tlciBkYXRhLW5nLW1vZGVsPVxcXCJuZXdTZWFzb25EYXRhLmVuZHNfYXRcXFwiIGRhdGEtb24tc2V0LXRpbWU9XFxcImNsb3NlRW5kc0F0KClcXFwiIGRhdGEtZGF0ZXRpbWVwaWNrZXItY29uZmlnPVxcXCJ7IG1pbnV0ZVN0ZXA6IDUgfVxcXCIvPlxcblwiICtcbiAgICBcIiAgICAgICAgPC91bD5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctZGlzYWJsZWQ9XFxcIm5ld1NlYXNvbkZvcm0uJGludmFsaWRcXFwiIG5nLWNsaWNrPVxcXCJjcmVhdGVTZWFzb24obmV3U2Vhc29uRGF0YSlcXFwiPkNyZWF0ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvYWRtaW4vc3F1YWRzL2FkbWluLnNxdWFkcy50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9hZG1pbi9zcXVhZHMvYWRtaW4uc3F1YWRzLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJzcXVhZHMtaGVhZGVyLXJvdyByb3dcXFwiPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTkgY29sLW1kLTlcXFwiPlxcblwiICtcbiAgICBcIiAgICA8aDMgY2xhc3M9XFxcInNxdWFkcy1oZWFkZXJcXFwiPk1hbmFnZSBTcXVhZHM8L2gzPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMyBjb2wtbWQtM1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInNxdWFkcy1idG4tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY3JlYXRlLXNxdWFkLWJ0biBidG4gYnRuLXByaW1hcnlcXFwiIG5nLWNsaWNrPVxcXCJjcmVhdGVTcXVhZCgpXFxcIj5DcmVhdGUgU3F1YWQ8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8aHI+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwic3F1YWRzLXRhYnNcXFwiPlxcblwiICtcbiAgICBcIiAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2LXRhYnNcXFwiPlxcblwiICtcbiAgICBcIiAgICA8bGkgY2xhc3M9XFxcImFjdGl2ZVxcXCI+PGE+U3F1YWRzIFsge3soc3F1YWRzIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aH19IF08L2E+PC9saT5cXG5cIiArXG4gICAgXCIgIDwvdWw+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJzcXVhZC10eXBlc1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcInNlbGVjdGVkU3F1YWRUeXBlXFxcIiBuZy1vcHRpb25zPVxcXCJzcXVhZFR5cGUgYXMgc3F1YWRUeXBlIGZvciBzcXVhZFR5cGUgaW4gc3F1YWRUeXBlc1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiXFxcIj5BbGwgU3F1YWQgVHlwZXM8L29wdGlvbj5cXG5cIiArXG4gICAgXCIgICAgPC9zZWxlY3Q+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwIGN1c3RvbS1zZWFyY2gtZm9ybVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiU2VhcmNoLi4uXFxcIiBuZy1tb2RlbD1cXFwicXVlcnlcXFwiPlxcblwiICtcbiAgICBcIiAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYnRuXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tc2VhcmNoXFxcIj48L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgIDwvc3Bhbj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcInNxdWFkcyBsaXN0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgIDxhIG5nLXJlcGVhdD1cXFwic3F1YWQgaW4gc3F1YWRzIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3RcXFwiIG5nLWNsaWNrPVxcXCJlZGl0U3F1YWQoc3F1YWQpXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJzcXVhZC1kaXNwbGF5LW5hbWUgY29sLXNtLTYgY29sLW1kLTZcXFwiPnt7c3F1YWQubmFtZX19IFsge3tzcXVhZC5hYmJyZXZ9fSBdPGJyPjxzcGFuIGNsYXNzPVxcXCJzcXVhZC1yZWNvcmRcXFwiPnt7c3F1YWQucmVjb3JkfX08L3NwYW4+PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwic3F1YWQtdHlwZSBjb2wtc20tNiBjb2wtbWQtNlxcXCI+e3tzcXVhZC5zcXVhZF90eXBlfX08YnI+U2VlZDoge3tzcXVhZC5zZWVkfX08L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2E+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9hZG1pbi9zcXVhZHMvZWRpdC9hZG1pbi5zcXVhZHMuZWRpdC50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9hZG1pbi9zcXVhZHMvZWRpdC9hZG1pbi5zcXVhZHMuZWRpdC50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+RWRpdCBTcXVhZDwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8Zm9ybSBuYW1lPVxcXCJzcXVhZEZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKHNxdWFkRm9ybS5zcXVhZE5hbWUpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3Ioc3F1YWRGb3JtLnNxdWFkTmFtZSl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwic3F1YWROYW1lXFxcIj5TcXVhZCBuYW1lXFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihzcXVhZEZvcm0uc3F1YWROYW1lLCAncmVxdWlyZWQnKVxcXCI+WyBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKHNxdWFkRm9ybS5zcXVhZE5hbWUsICdtYXhsZW5ndGgnKVxcXCI+WyBUb28gTG9uZyBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxpbnB1dCBpZD1cXFwic3F1YWROYW1lXFxcIiBuYW1lPVxcXCJzcXVhZE5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJzcXVhZERhdGEubmFtZVxcXCIgbmctbWF4bGVuZ3RoPVxcXCIzMFxcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3Ioc3F1YWRGb3JtLnNxdWFkTmFtZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKHNxdWFkRm9ybS5zcXVhZFNob3J0KSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKHNxdWFkRm9ybS5zcXVhZFNob3J0KX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJzcXVhZFNob3J0XFxcIj5TaG9ydCBOYW1lXFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihzcXVhZEZvcm0uc3F1YWRTaG9ydCwgJ3JlcXVpcmVkJylcXFwiPlsgUmVxdWlyZWQgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihzcXVhZEZvcm0uc3F1YWRTaG9ydCwgJ21heGxlbmd0aCcpXFxcIj5bIFRvbyBMb25nIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGlucHV0IGlkPVxcXCJzcXVhZFNob3J0XFxcIiBuYW1lPVxcXCJzcXVhZFNob3J0XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwic3F1YWREYXRhLnNob3J0XFxcIiBuZy1tYXhsZW5ndGg9XFxcIjMwXFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihzcXVhZEZvcm0uc3F1YWRTaG9ydClcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKHNxdWFkRm9ybS5zcXVhZEFiYnJldiksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihzcXVhZEZvcm0uc3F1YWRBYmJyZXYpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcInNxdWFkQWJicmV2XFxcIj5BYmJyZXZpYXRpb25cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKHNxdWFkRm9ybS5zcXVhZEFiYnJldiwgJ3JlcXVpcmVkJylcXFwiPlsgUmVxdWlyZWQgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihzcXVhZEZvcm0uc3F1YWRBYmJyZXYsICdtYXhsZW5ndGgnKVxcXCI+WyBUb28gTG9uZyBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxpbnB1dCBpZD1cXFwic3F1YWRBYmJyZXZcXFwiIG5hbWU9XFxcInNxdWFkQWJicmV2XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwic3F1YWREYXRhLmFiYnJldlxcXCIgbmctbWF4bGVuZ3RoPVxcXCIzMFxcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3Ioc3F1YWRGb3JtLnNxdWFkQWJicmV2KVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3Ioc3F1YWRGb3JtLnNxdWFkVHlwZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihzcXVhZEZvcm0uc3F1YWRUeXBlKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJzcXVhZFR5cGVcXFwiPlR5cGUgKE5CQSwgTkZMLCBldGMpXFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihzcXVhZEZvcm0uc3F1YWRUeXBlLCAncmVxdWlyZWQnKVxcXCI+WyBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKHNxdWFkRm9ybS5zcXVhZFR5cGUsICdtYXhsZW5ndGgnKVxcXCI+WyBUb28gTG9uZyBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxpbnB1dCBpZD1cXFwic3F1YWRUeXBlXFxcIiBuYW1lPVxcXCJzcXVhZFR5cGVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJzcXVhZERhdGEuc3F1YWRfdHlwZVxcXCIgbmctbWF4bGVuZ3RoPVxcXCIzMFxcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3Ioc3F1YWRGb3JtLnNxdWFkVHlwZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKHNxdWFkRm9ybS53aW5zKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKHNxdWFkRm9ybS53aW5zKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJ3aW5zXFxcIj5XaW5zXFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihzcXVhZEZvcm0ud2lucywgJ3JlcXVpcmVkJylcXFwiPlsgTnVtYmVyIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3Ioc3F1YWRGb3JtLndpbnMsICdtaW4nKVxcXCI+WyBaZXJvIG9yIGdyZWF0ZXIgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8aW5wdXQgaWQ9XFxcIndpbnNcXFwiIG5hbWU9XFxcIndpbnNcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgcGxhY2Vob2xkZXI9XFxcIkdyZWF0ZXIgdGhhbiB6ZXJvXFxcIiBtaW49XFxcIjBcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJzcXVhZERhdGEud2luc1xcXCIgc2VsZWN0LW9uLWNsaWNrIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKHNxdWFkRm9ybS53aW5zKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3Ioc3F1YWRGb3JtLmxvc3NlcyksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihzcXVhZEZvcm0ubG9zc2VzKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJ3aW5zXFxcIj5Mb3NzZXNcXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKHNxdWFkRm9ybS5sb3NzZXMsICdyZXF1aXJlZCcpXFxcIj5bIE51bWJlciBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKHNxdWFkRm9ybS5sb3NzZXMsICdtaW4nKVxcXCI+WyBaZXJvIG9yIGdyZWF0ZXIgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8aW5wdXQgaWQ9XFxcImxvc3Nlc1xcXCIgbmFtZT1cXFwibG9zc2VzXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIHBsYWNlaG9sZGVyPVxcXCJHcmVhdGVyIHRoYW4gemVyb1xcXCIgbWluPVxcXCIwXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwic3F1YWREYXRhLmxvc3Nlc1xcXCIgc2VsZWN0LW9uLWNsaWNrIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKHNxdWFkRm9ybS5sb3NzZXMpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihzcXVhZEZvcm0udGllcyksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihzcXVhZEZvcm0udGllcyl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwidGllc1xcXCI+VGllc1xcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3Ioc3F1YWRGb3JtLnRpZXMsICdyZXF1aXJlZCcpXFxcIj5bIE51bWJlciBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKHNxdWFkRm9ybS50aWVzLCAnbWluJylcXFwiPlsgWmVybyBvciBncmVhdGVyIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGlucHV0IGlkPVxcXCJ0aWVzXFxcIiBuYW1lPVxcXCJ0aWVzXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIHBsYWNlaG9sZGVyPVxcXCJHcmVhdGVyIHRoYW4gemVyb1xcXCIgbWluPVxcXCIwXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwic3F1YWREYXRhLnRpZXNcXFwiIHNlbGVjdC1vbi1jbGljayByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihzcXVhZEZvcm0udGllcylcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKHNxdWFkRm9ybS5zZWVkKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKHNxdWFkRm9ybS5zZWVkKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJzZWVkXFxcIj5TZWVkXFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihzcXVhZEZvcm0uc2VlZCwgJ3JlcXVpcmVkJylcXFwiPlsgTnVtYmVyIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3Ioc3F1YWRGb3JtLnNlZWQsICdtaW4nKVxcXCI+WyBaZXJvIG9yIGdyZWF0ZXIgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8aW5wdXQgaWQ9XFxcInNlZWRcXFwiIG5hbWU9XFxcInNlZWRcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgcGxhY2Vob2xkZXI9XFxcIkdyZWF0ZXIgdGhhbiB6ZXJvXFxcIiBtaW49XFxcIjBcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJzcXVhZERhdGEuc2VlZFxcXCIgc2VsZWN0LW9uLWNsaWNrIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKHNxdWFkRm9ybS5zZWVkKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZm9ybT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwic3F1YWRGb3JtLiRpbnZhbGlkXFxcIiBuZy1jbGljaz1cXFwiZWRpdFNxdWFkKHNxdWFkRGF0YSlcXFwiPkVkaXQ8L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2FkbWluL3NxdWFkcy9uZXcvYWRtaW4uc3F1YWRzLm5ldy50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9hZG1pbi9zcXVhZHMvbmV3L2FkbWluLnNxdWFkcy5uZXcudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkNyZWF0ZSBTcXVhZDwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8Zm9ybSBuYW1lPVxcXCJzcXVhZEZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKHNxdWFkRm9ybS5zcXVhZE5hbWUpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3Ioc3F1YWRGb3JtLnNxdWFkTmFtZSl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwic3F1YWROYW1lXFxcIj5TcXVhZCBuYW1lXFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihzcXVhZEZvcm0uc3F1YWROYW1lLCAncmVxdWlyZWQnKVxcXCI+WyBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKHNxdWFkRm9ybS5zcXVhZE5hbWUsICdtYXhsZW5ndGgnKVxcXCI+WyBUb28gTG9uZyBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxpbnB1dCBpZD1cXFwic3F1YWROYW1lXFxcIiBuYW1lPVxcXCJzcXVhZE5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJzcXVhZERhdGEubmFtZVxcXCIgbmctbWF4bGVuZ3RoPVxcXCIzMFxcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3Ioc3F1YWRGb3JtLnNxdWFkTmFtZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKHNxdWFkRm9ybS5zcXVhZFNob3J0KSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKHNxdWFkRm9ybS5zcXVhZFNob3J0KX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJzcXVhZFNob3J0XFxcIj5TaG9ydCBOYW1lXFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihzcXVhZEZvcm0uc3F1YWRTaG9ydCwgJ3JlcXVpcmVkJylcXFwiPlsgUmVxdWlyZWQgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihzcXVhZEZvcm0uc3F1YWRTaG9ydCwgJ21heGxlbmd0aCcpXFxcIj5bIFRvbyBMb25nIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGlucHV0IGlkPVxcXCJzcXVhZFNob3J0XFxcIiBuYW1lPVxcXCJzcXVhZFNob3J0XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwic3F1YWREYXRhLnNob3J0XFxcIiBuZy1tYXhsZW5ndGg9XFxcIjMwXFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihzcXVhZEZvcm0uc3F1YWRTaG9ydClcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKHNxdWFkRm9ybS5zcXVhZEFiYnJldiksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihzcXVhZEZvcm0uc3F1YWRBYmJyZXYpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcInNxdWFkQWJicmV2XFxcIj5BYmJyZXZpYXRpb25cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKHNxdWFkRm9ybS5zcXVhZEFiYnJldiwgJ3JlcXVpcmVkJylcXFwiPlsgUmVxdWlyZWQgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihzcXVhZEZvcm0uc3F1YWRBYmJyZXYsICdtYXhsZW5ndGgnKVxcXCI+WyBUb28gTG9uZyBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxpbnB1dCBpZD1cXFwic3F1YWRBYmJyZXZcXFwiIG5hbWU9XFxcInNxdWFkQWJicmV2XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwic3F1YWREYXRhLmFiYnJldlxcXCIgbmctbWF4bGVuZ3RoPVxcXCIzMFxcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3Ioc3F1YWRGb3JtLnNxdWFkQWJicmV2KVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3Ioc3F1YWRGb3JtLnNxdWFkVHlwZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihzcXVhZEZvcm0uc3F1YWRUeXBlKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJzcXVhZFR5cGVcXFwiPlR5cGUgKE5CQSwgTkZMLCBldGMpXFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihzcXVhZEZvcm0uc3F1YWRUeXBlLCAncmVxdWlyZWQnKVxcXCI+WyBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKHNxdWFkRm9ybS5zcXVhZFR5cGUsICdtYXhsZW5ndGgnKVxcXCI+WyBUb28gTG9uZyBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxpbnB1dCBpZD1cXFwic3F1YWRUeXBlXFxcIiBuYW1lPVxcXCJzcXVhZFR5cGVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJzcXVhZERhdGEuc3F1YWRfdHlwZVxcXCIgbmctbWF4bGVuZ3RoPVxcXCIzMFxcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3Ioc3F1YWRGb3JtLnNxdWFkVHlwZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctZGlzYWJsZWQ9XFxcInNxdWFkRm9ybS4kaW52YWxpZFxcXCIgbmctY2xpY2s9XFxcImNyZWF0ZVNxdWFkKHNxdWFkRGF0YSlcXFwiPkNyZWF0ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvYWRtaW4vd2Vlay9hZG1pbi53ZWVrLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2FkbWluL3dlZWsvYWRtaW4ud2Vlay50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwiZ2FtZXMtaGVhZGVyLXJvdyByb3dcXFwiPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICA8aDM+PGkgY2xhc3M9XFxcImZhIGZhLWNoZWNrIGZhLWZ3XFxcIiBuZy1zaG93PVxcXCJ3ZWVrRGF0YS5jb21wbGV0ZSA9PT0gdHJ1ZVxcXCIgdGl0bGU9XFxcIldlZWsgY29tcGxldGVcXFwiPjwvaT4ge3t3ZWVrRGF0YS5zZWFzb25fdHlwZX19IHt7d2Vla0RhdGEuZGlzcGxheX19IDxzbWFsbD48YSBuZy1jbGljaz1cXFwiZWRpdFdlZWsod2Vla0RhdGEpXFxcIj5bIGVkaXQgXTwvYT48L3NtYWxsPjxicj5cXG5cIiArXG4gICAgXCIgICAgICA8c21hbGw+UmVtaW5kZXIgU2VudDogPHNwYW4gbmctc2hvdz1cXFwiIXdlZWtEYXRhLnJlbWluZGVyX3NlbnRfYXRcXFwiPk4vQTwvc3Bhbj48c3BhbiBuZy1zaG93PVxcXCJ3ZWVrRGF0YS5yZW1pbmRlcl9zZW50X2F0XFxcIj57e2RhdGVGb3JtYXQod2Vla0RhdGEucmVtaW5kZXJfc2VudF9hdCwgXFxcImRkZCBtbW0gZCBoOk1NIFRUIChaKVxcXCIpfX08L3NwYW4+PC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgPC9oMz5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJ3ZWVrLWJ0bi1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJzZW5kLXJlbWluZGVyLWJ0biBidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJjb25maXJtU2VuZFJlbWluZGVyKHdlZWtEYXRhKVxcXCI+U2VuZCBSZW1pbmRlcjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY3JlYXRlLWdhbWUtYnRuIGJ0biBidG4tcHJpbWFyeVxcXCIgbmctY2xpY2s9XFxcImNyZWF0ZUdhbWUod2Vla0RhdGEsIGdhbWVzKVxcXCI+Q3JlYXRlIEdhbWU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJnYW1lcy10YWJcXFwiPlxcblwiICtcbiAgICBcIiAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2LXRhYnNcXFwiPlxcblwiICtcbiAgICBcIiAgICA8bGkgY2xhc3M9XFxcImFjdGl2ZVxcXCI+PGE+R2FtZXMgWyB7e2dhbWVzLmxlbmd0aH19IF08L2E+PC9saT5cXG5cIiArXG4gICAgXCIgIDwvdWw+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cCBjdXN0b20tc2VhcmNoLWZvcm0gZmlsdGVyLWxlYWd1ZS1qb2luXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJTZWFyY2ggZ2FtZXMuLi5cXFwiIG5nLW1vZGVsPVxcXCJnYW1lUXVlcnlcXFwiPlxcblwiICtcbiAgICBcIiAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYnRuXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tc2VhcmNoXFxcIj48L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgIDwvc3Bhbj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIndlZWstZ2FtZXMgbGlzdC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICA8YSBuZy1yZXBlYXQ9XFxcImdhbWUgaW4gZ2FtZXMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdFxcXCIgbmctY2xpY2s9XFxcImVkaXRHYW1lKGdhbWUsIHdlZWtEYXRhKVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiZ2FtZS1kaXNwbGF5LW5hbWUgY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWNoZWNrIGZhLWZ3XFxcIiBuZy1zaG93PVxcXCJnYW1lLmNvbXBsZXRlXFxcIiB0aXRsZT1cXFwiR2FtZSBjb21wbGV0ZVxcXCI+PC9pPlxcblwiICtcbiAgICBcIiAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWNsb2NrLW8gZmEtZndcXFwiIHN0eWxlPVxcXCJjb2xvcjogI2ZmNDcyZTtcXFwiIG5nLXNob3c9XFxcImdhbWUucG9zdHBvbmVkICYmICFnYW1lLmNvbXBsZXRlXFxcIiB0aXRsZT1cXFwiR2FtZSBwb3N0cG9uZWRcXFwiPjwvaT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImdhbWUucGxheW9mZlxcXCI+Kjwvc3Bhbj57e2dhbWUuZGlzcGxheX19PGJyPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdhbWUtc3RhcnRzXFxcIj48c3BhbiBzdHlsZT1cXFwiY29sb3I6I0ZGMDAwMDtcXFwiIG5nLXNob3c9XFxcImdhbWUudGJkXFxcIj5UQkQ8L3NwYW4+PHNwYW4gbmctc2hvdz1cXFwiIWdhbWUudGJkXFxcIj57e2RhdGVGb3JtYXQoZ2FtZS5zdGFydHNfYXQsIFxcXCJkZGQsIG1tbSBkIHl5eXkgaDpNTSBUVCAoWilcXFwiKX19PC9zcGFuPjxzcGFuIG5nLXNob3c9XFxcImdhbWUuaWZfbmVjZXNzYXJ5XFxcIj4gKklmIE5lY2Vzc2FyeTwvc3Bhbj48c3BhbiBuZy1zaG93PVxcXCJnYW1lLnBvc3Rwb25lZFxcXCI+IHwgKlBQRDwvc3Bhbj48L3NwYW4+PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiZ2FtZS1zY29yZSBjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJnYW1lLm5vdGUubGVuZ3RoID4gMFxcXCI+e3tnYW1lLm5vdGV9fSAtIDwvc3Bhbj57e2dhbWUuc3F1YWRzWzBdLm5hbWV9fToge3tnYW1lLnZpc2l0aW5nX3NxdWFkX3Njb3JlfX0gfCB7e2dhbWUuc3F1YWRzWzFdLm5hbWV9fToge3tnYW1lLmhvbWVfc3F1YWRfc2NvcmV9fSA8c3Bhbj57e2dhbWUub3RfZGlzcGxheX19PC9zcGFuPjxicj5cXG5cIiArXG4gICAgXCIgICAgICAgIFBpY2tzOiB7e2dhbWUucGlja19jb3VudH19XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9hPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxocj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJjb21wbGV0ZS13ZWVrLWJ0bi1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNvbXBsZXRlLXdlZWstYnRuIGJ0biBidG4tZGFuZ2VyXFxcIiBuZy1jbGljaz1cXFwiY29uZmlybVdlZWtDb21wbGV0ZSh3ZWVrRGF0YSlcXFwiPkNvbXBsZXRlIFdlZWs8L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2FkbWluL3dlZWsvZWRpdC9hZG1pbi53ZWVrLmVkaXQudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvYWRtaW4vd2Vlay9lZGl0L2FkbWluLndlZWsuZWRpdC50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+RWRpdCBXZWVrPC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxmb3JtIG5hbWU9XFxcImVkaXRXZWVrRm9ybVxcXCIgY2xhc3M9XFxcImVkaXQtd2Vlay1mb3JtIGZvcm0taG9yaXpvbnRhbFxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZT5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IoZWRpdFdlZWtGb3JtLndlZWtOYW1lKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKGVkaXRXZWVrRm9ybS53ZWVrTmFtZSl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgZm9yPVxcXCJ3ZWVrTmFtZVxcXCIgY2xhc3M9XFxcImNvbC1zbS0zIGNvbnRyb2wtbGFiZWxcXFwiPk5hbWU6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8aW5wdXQgaWQ9XFxcIndlZWtOYW1lXFxcIiBuYW1lPVxcXCJ3ZWVrTmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcIndlZWtEYXRhLm5hbWVcXFwiIG5nLW1heGxlbmd0aD1cXFwiMzBcXFwiIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJpbnB1dC1lcnJvclxcXCIgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihlZGl0V2Vla0Zvcm0ud2Vla05hbWUsICdyZXF1aXJlZCcpXFxcIj5SZXF1aXJlZDwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGVkaXRXZWVrRm9ybS53ZWVrTmFtZSwgJ21heGxlbmd0aCcpXFxcIj5Ub28gTG9uZzwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihlZGl0V2Vla0Zvcm0ud2Vla05hbWUpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgZm9yPVxcXCJ3ZWVrVHlwZVxcXCIgY2xhc3M9XFxcImNvbC1zbS0zIGNvbnRyb2wtbGFiZWxcXFwiPldlZWsgVHlwZTo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS05XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzZWxlY3QgaWQ9XFxcIndlZWtUeXBlXFxcIiBuYW1lPVxcXCJ3ZWVrVHlwZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcIndlZWtEYXRhLndlZWtfdHlwZV9pZFxcXCIgbmctb3B0aW9ucz1cXFwid2Vla1R5cGUuaWQgYXMgd2Vla1R5cGUuZGVzY3JpcHRpb24gZm9yIHdlZWtUeXBlIGluIHdlZWtUeXBlc1xcXCI+PC9zZWxlY3Q+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGw+d2Vla190eXBlX2lkOiB7e3dlZWtEYXRhLndlZWtfdHlwZV9pZH19PC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLXNtLTMgY29udHJvbC1sYWJlbFxcXCI+U3RhcnRzIEF0OjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTlcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiIGlzLW9wZW49XFxcInN0YXJ0c0F0RHJvcGRvd24uaXNvcGVuXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGEgY2xhc3M9XFxcImRyb3Bkb3duLXRvZ2dsZVxcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGRhdGEtdGFyZ2V0PVxcXCIjXFxcIiBocmVmPVxcXCIjXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZm9ybWF0dGVkLWRhdGUgZGF0YS1uZy1tb2RlbD1cXFwid2Vla0RhdGEuc3RhcnRzX2F0XFxcIiBuZy1yZXF1aXJlZD1cXFwidHJ1ZVxcXCIgbmctZGlzYWJsZWQ9XFxcInRydWVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWFkZG9uXFxcIj48aSBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jYWxlbmRhclxcXCI+PC9pPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9hPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiIHJvbGU9XFxcIm1lbnVcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwiZExhYmVsXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8ZGF0ZXRpbWVwaWNrZXIgZGF0YS1uZy1tb2RlbD1cXFwid2Vla0RhdGEuc3RhcnRzX2F0XFxcIiBkYXRhLW9uLXNldC10aW1lPVxcXCJjbG9zZVN0YXJ0c0F0KClcXFwiIGRhdGEtZGF0ZXRpbWVwaWNrZXItY29uZmlnPVxcXCJ7IG1pbnV0ZVN0ZXA6IDUgfVxcXCIvPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L3VsPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1zbS0zIGNvbnRyb2wtbGFiZWxcXFwiPkVuZHMgQXQ6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93blxcXCIgaXMtb3Blbj1cXFwiZW5kc0F0RHJvcGRvd24uaXNvcGVuXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGEgY2xhc3M9XFxcImRyb3Bkb3duLXRvZ2dsZVxcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGRhdGEtdGFyZ2V0PVxcXCIjXFxcIiBocmVmPVxcXCIjXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZm9ybWF0dGVkLWRhdGUgZGF0YS1uZy1tb2RlbD1cXFwid2Vla0RhdGEuZW5kc19hdFxcXCIgbmctcmVxdWlyZWQ9XFxcInRydWVcXFwiIG5nLWRpc2FibGVkPVxcXCJ0cnVlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+PGkgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tY2FsZW5kYXJcXFwiPjwvaT48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvYT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIiByb2xlPVxcXCJtZW51XFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcImRMYWJlbFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGRhdGV0aW1lcGlja2VyIGRhdGEtbmctbW9kZWw9XFxcIndlZWtEYXRhLmVuZHNfYXRcXFwiIGRhdGEtb24tc2V0LXRpbWU9XFxcImNsb3NlRW5kc0F0KClcXFwiIGRhdGEtZGF0ZXRpbWVwaWNrZXItY29uZmlnPVxcXCJ7IG1pbnV0ZVN0ZXA6IDUgfVxcXCIvPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L3VsPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9mb3JtPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+Q2FuY2VsPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG5nLWRpc2FibGVkPVxcXCJlZGl0V2Vla0Zvcm0uJGludmFsaWRcXFwiIG5nLWNsaWNrPVxcXCJlZGl0V2Vlayh3ZWVrRGF0YSlcXFwiPlVwZGF0ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvYWRtaW4vd2Vlay9uZXcvYWRtaW4ud2Vlay5uZXcudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvYWRtaW4vd2Vlay9uZXcvYWRtaW4ud2Vlay5uZXcudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkNyZWF0ZSBXZWVrPC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxmb3JtIG5hbWU9XFxcIndlZWtGb3JtXFxcIiBjbGFzcz1cXFwibmV3LXdlZWstZm9ybSBmb3JtLWhvcml6b250YWxcXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKHdlZWtGb3JtLndlZWtOYW1lKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKHdlZWtGb3JtLndlZWtOYW1lKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBmb3I9XFxcIndlZWtOYW1lXFxcIiBjbGFzcz1cXFwiY29sLXNtLTMgY29udHJvbC1sYWJlbFxcXCI+TmFtZTo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS05XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxpbnB1dCBpZD1cXFwid2Vla05hbWVcXFwiIG5hbWU9XFxcIndlZWtOYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwid2Vla0RhdGEubmFtZVxcXCIgbmctbWF4bGVuZ3RoPVxcXCIzMFxcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKHdlZWtGb3JtLndlZWtOYW1lLCAncmVxdWlyZWQnKVxcXCI+UmVxdWlyZWQ8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJpbnB1dC1lcnJvclxcXCIgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcih3ZWVrRm9ybS53ZWVrTmFtZSwgJ21heGxlbmd0aCcpXFxcIj5Ub28gTG9uZzwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcih3ZWVrRm9ybS53ZWVrTmFtZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBmb3I9XFxcIndlZWtUeXBlXFxcIiBjbGFzcz1cXFwiY29sLXNtLTMgY29udHJvbC1sYWJlbFxcXCI+V2VlayBUeXBlIChVc2UgMSAmIDIpOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTlcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNlbGVjdCBpZD1cXFwid2Vla1R5cGVcXFwiIG5hbWU9XFxcIndlZWtUeXBlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwid2Vla0RhdGEud2Vla190eXBlX2lkXFxcIiBuZy1vcHRpb25zPVxcXCJ3ZWVrVHlwZS5pZCBhcyB3ZWVrVHlwZS5kZXNjcmlwdGlvbiBmb3Igd2Vla1R5cGUgaW4gd2Vla1R5cGVzXFxcIj48L3NlbGVjdD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbD53ZWVrX3R5cGVfaWQ6IHt7d2Vla0RhdGEud2Vla190eXBlX2lkfX08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtc20tMyBjb250cm9sLWxhYmVsXFxcIj5TdGFydHMgQXQ6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93blxcXCIgaXMtb3Blbj1cXFwic3RhcnRzQXREcm9wZG93bi5pc29wZW5cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8YSBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiByb2xlPVxcXCJidXR0b25cXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgZGF0YS10YXJnZXQ9XFxcIiNcXFwiIGhyZWY9XFxcIiNcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBmb3JtYXR0ZWQtZGF0ZSBkYXRhLW5nLW1vZGVsPVxcXCJ3ZWVrRGF0YS5zdGFydHNfYXRcXFwiIG5nLXJlcXVpcmVkPVxcXCJ0cnVlXFxcIiBuZy1kaXNhYmxlZD1cXFwidHJ1ZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPjxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNhbGVuZGFyXFxcIj48L2k+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2E+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCIgcm9sZT1cXFwibWVudVxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJkTGFiZWxcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkYXRldGltZXBpY2tlciBkYXRhLW5nLW1vZGVsPVxcXCJ3ZWVrRGF0YS5zdGFydHNfYXRcXFwiIGRhdGEtb24tc2V0LXRpbWU9XFxcImNsb3NlU3RhcnRzQXQoKVxcXCIgZGF0YS1kYXRldGltZXBpY2tlci1jb25maWc9XFxcInsgbWludXRlU3RlcDogNSB9XFxcIi8+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvdWw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLXNtLTMgY29udHJvbC1sYWJlbFxcXCI+RW5kcyBBdDo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS05XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duXFxcIiBpcy1vcGVuPVxcXCJlbmRzQXREcm9wZG93bi5pc29wZW5cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8YSBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiByb2xlPVxcXCJidXR0b25cXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgZGF0YS10YXJnZXQ9XFxcIiNcXFwiIGhyZWY9XFxcIiNcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBmb3JtYXR0ZWQtZGF0ZSBkYXRhLW5nLW1vZGVsPVxcXCJ3ZWVrRGF0YS5lbmRzX2F0XFxcIiBuZy1yZXF1aXJlZD1cXFwidHJ1ZVxcXCIgbmctZGlzYWJsZWQ9XFxcInRydWVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWFkZG9uXFxcIj48aSBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jYWxlbmRhclxcXCI+PC9pPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9hPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiIHJvbGU9XFxcIm1lbnVcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwiZExhYmVsXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8ZGF0ZXRpbWVwaWNrZXIgZGF0YS1uZy1tb2RlbD1cXFwid2Vla0RhdGEuZW5kc19hdFxcXCIgZGF0YS1vbi1zZXQtdGltZT1cXFwiY2xvc2VFbmRzQXQoKVxcXCIgZGF0YS1kYXRldGltZXBpY2tlci1jb25maWc9XFxcInsgbWludXRlU3RlcDogNSB9XFxcIi8+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvdWw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctZGlzYWJsZWQ9XFxcIndlZWtGb3JtLiRpbnZhbGlkXFxcIiBuZy1jbGljaz1cXFwiY3JlYXRlV2Vlayh3ZWVrRGF0YSlcXFwiPkNyZWF0ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2NvbnRhY3QvbGVhZ3VlLmNvbnRhY3QudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2NvbnRhY3QvbGVhZ3VlLmNvbnRhY3QudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkNvbnRhY3QgQ29tbWlzaDwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8Zm9ybSBuYW1lPVxcXCJjb250YWN0Rm9ybVxcXCIgY2xhc3M9XFxcImNvbnRhY3QtZm9ybSBmb3JtLWhvcml6b250YWxcXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKGNvbnRhY3RGb3JtLm1lc3NhZ2UpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IoY29udGFjdEZvcm0ubWVzc2FnZSl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgZm9yPVxcXCJtZXNzYWdlXFxcIiBjbGFzcz1cXFwiY29sLXNtLTIgY29udHJvbC1sYWJlbFxcXCI+TWVzc2FnZTo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8dGV4dGFyZWEgaWQ9XFxcIm1lc3NhZ2VcXFwiIG5hbWU9XFxcIm1lc3NhZ2VcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJTZW5kIGEgZGlyZWN0IG1lc3NhZ2UgdG8gdGhlIGNvbW1pc2guLi5cXFwiIHJvd3M9XFxcIjNcXFwiIG1heGxlbmd0aD1cXFwiMjAwXFxcIiBuZy1tb2RlbD1cXFwiY29tbWlzaE1lc3NhZ2VcXFwiIHJlcXVpcmVkPjwvdGV4dGFyZWE+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGNvbnRhY3RGb3JtLm1lc3NhZ2UsICdyZXF1aXJlZCcpXFxcIj5SZXF1aXJlZDwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGNvbnRhY3RGb3JtLm1lc3NhZ2UsICdtYXhsZW5ndGgnKVxcXCI+VG9vIExvbmc8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IoY29udGFjdEZvcm0ubWVzc2FnZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctZGlzYWJsZWQ9XFxcImNvbnRhY3RGb3JtLiRwcmlzdGluZSB8fCBjb250YWN0Rm9ybS4kaW52YWxpZFxcXCIgbmctY2xpY2s9XFxcImNvbnRhY3RDb21taXNoKGxlYWd1ZURhdGEsIGNvbW1pc2hNZXNzYWdlKVxcXCI+U2VuZDwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2VkaXQvbGVhZ3VlLmVkaXQudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2VkaXQvbGVhZ3VlLmVkaXQudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcImVkaXQtbGVhZ3VlLWhlYWRlci1yb3cgcm93XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICA8aDM+RWRpdCB7e2xlYWd1ZURhdGEubmFtZX19PC9oMz5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxocj5cXG5cIiArXG4gICAgXCI8Zm9ybSBuYW1lPVxcXCJsZWFndWVGb3JtXFxcIiBjbGFzcz1cXFwiZWRpdC1sZWFndWUtZm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZT5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcInJvdyBmb3JtLWdyb3VwIHByb2R1Y3QtY2hvb3NlclxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcInByb2R1Y3QtY2hvb3Nlci1pdGVtXFxcIiBuZy1jbGFzcz1cXFwieydzZWxlY3RlZCc6IGxlYWd1ZURhdGEucHVibGljID09IHRydWV9XFxcIiBuZy1jbGljaz1cXFwibGVhZ3VlRGF0YS5wdWJsaWMgPSB0cnVlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTEyIGNvbC1sZy0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0aXRsZVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXVubG9jayBpY29uXFxcIj48L2k+IFB1YmxpYyBMZWFndWU8L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+QW55b25lIGNhbiBqb2luIGEgcHVibGljIGxlYWd1ZS4gTWVtYmVycyBvZiBhIHB1YmxpYyBsZWFndWUgY2FuIGFsc28gaW52aXRlIG90aGVycyB0byBqb2luIHRoZSBsZWFndWUuPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjbGVhclxcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9kdWN0LWNob29zZXItaXRlbVxcXCIgbmctY2xhc3M9XFxcInsnc2VsZWN0ZWQnOiBsZWFndWVEYXRhLnB1YmxpYyA9PSBmYWxzZX1cXFwiIG5nLWNsaWNrPVxcXCJsZWFndWVEYXRhLnB1YmxpYyA9IGZhbHNlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTEyIGNvbC1sZy0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0aXRsZVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWxvY2sgaWNvblxcXCI+PC9pPiBQcml2YXRlIExlYWd1ZTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uXFxcIj5BbiBpbnZpdGUgZnJvbSB0aGUgY29tbWlzaCBpcyByZXF1aXJlZCB0byBqb2luIGEgcHJpdmF0ZSBsZWFndWUuIE9ubHkgdGhlIGNvbW1pc2ggY2FuIGludml0ZSBwZW9wbGUgdG8gam9pbiB0aGUgbGVhZ3VlLjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2xlYXJcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwicm93IGZvcm0tZ3JvdXAgcHJvZHVjdC1jaG9vc2VyXFxcIiBuZy1zaG93PVxcXCIhbGVhZ3VlRGF0YS5zdGFydGVkXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZHVjdC1jaG9vc2VyLWl0ZW1cXFwiIG5nLWNsYXNzPVxcXCJ7J3NlbGVjdGVkJzogbGVhZ3VlRGF0YS5lbGltaW5hdGlvbiA9PSBmYWxzZX1cXFwiIG5nLWNsaWNrPVxcXCJsZWFndWVEYXRhLm1heF9waWNrc19wZXJfd2VlayA9IG51bGw7IGxlYWd1ZURhdGEuZWxpbWluYXRpb24gPSBmYWxzZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0xMiBjb2wtbGctMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGl0bGVcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS10aC1saXN0XFxcIj48L2k+IFBpY2snZW0gRm9ybWF0PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPlBpY2snZW0gZm9ybWF0IGFsbG93cyB0ZWFtcyB0byBtYWtlIG9uZSBvciBtb3JlIHBpY2tzIGVhY2ggd2Vlay4gVGhlIGNvbW1pc2ggZGV0ZXJtaW5lcyBob3cgbWFueSBwaWNrcyBjYW4gYmUgbWFkZSBlYWNoIHdlZWsuPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjbGVhclxcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9kdWN0LWNob29zZXItaXRlbVxcXCIgbmctY2xhc3M9XFxcInsnc2VsZWN0ZWQnOiBsZWFndWVEYXRhLmVsaW1pbmF0aW9uID09IHRydWV9XFxcIiBuZy1jbGljaz1cXFwibGVhZ3VlRGF0YS5tYXhfcGlja3NfcGVyX3dlZWsgPSAxOyBsZWFndWVEYXRhLmVsaW1pbmF0aW9uID0gdHJ1ZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0xMiBjb2wtbGctMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGl0bGVcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1jaGVja1xcXCI+PC9pPiBTdXJ2aXZvciBGb3JtYXQ8L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+U3Vydml2b3IgZm9ybWF0IHJlcXVpcmVzIGEgdGVhbSB0byBtYWtlIGEgZGlmZmVyZW50IHBpY2sgZWFjaCB3ZWVrLiBJZiB5b3UgZmFpbCB0byBwaWNrIGEgbG9zZXIsIHlvdXIgdGVhbSBpcyBlbGltaW5hdGVkLiBUaGUgbGFzdCB0ZWFtIHN0YW5kaW5nIHdpbnMuPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjbGVhclxcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJlZGl0LWxlYWd1ZS1kZXRhaWxzXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiBuZy1zaG93PVxcXCJsZWFndWVEYXRhLnN0YXJ0ZWRcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCI+TGVhZ3VlIGZvcm1hdDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB2YWx1ZT1cXFwiUGljaydlbSBbIG5vIGVsaW1pbmF0aW9uIF1cXFwiIG5nLXNob3c9XFxcIiFsZWFndWVEYXRhLmVsaW1pbmF0aW9uXFxcIiBuZy1kaXNhYmxlZD1cXFwidHJ1ZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB2YWx1ZT1cXFwiU3Vydml2b3IgWyBzaW5nbGUgZWxpbWluYXRpb24gXVxcXCIgbmctc2hvdz1cXFwibGVhZ3VlRGF0YS5lbGltaW5hdGlvblxcXCIgbmctZGlzYWJsZWQ9XFxcInRydWVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJtYXhQaWNrc1xcXCI+UGlja3MgcGVyIHdlZWs8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c2VsZWN0IGlkPVxcXCJtYXhQaWNrc1xcXCIgbmFtZT1cXFwibWF4UGlja3NcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLWRpc2FibGVkPVxcXCJsZWFndWVEYXRhLmVsaW1pbmF0aW9uXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5tYXhfcGlja3NfcGVyX3dlZWtcXFwiIG5nLW9wdGlvbnM9XFxcIm1heFBpY2subnVtYmVyIGFzIG1heFBpY2suZGlzcGxheSBmb3IgbWF4UGljayBpbiBtYXhQaWNrc1BlcldlZWtcXFwiPjwvc2VsZWN0PlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJsZWFndWVEYXRhLmVsaW1pbmF0aW9uXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtd2FybmluZyBmYS1md1xcXCIgdGl0bGU9XFxcIldhcm5pbmdcXFwiPjwvaT4gU3Vydml2b3IgbGVhZ3VlcyBvbmx5IGFsbG93IDEgcGljayBwZXIgd2Vlaywgbm8gcmVwZWF0czwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgbmctc2hvdz1cXFwibGVhZ3VlRGF0YS5lbGltaW5hdGlvblxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcImxlYWd1ZURhdGEuZWxpbWluYXRlX29uX3RpZVxcXCIgbmctZGlzYWJsZWQ9XFxcImxlYWd1ZURhdGEuc3RhcnRlZFxcXCI+IGVsaW1pbmF0ZSBhIHRlYW0gdGhhdCBwaWNrcyBhIHRpZVxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8aHI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihsZWFndWVGb3JtLmxlYWd1ZU5hbWUpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IobGVhZ3VlRm9ybS5sZWFndWVOYW1lKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwibGVhZ3VlTmFtZVxcXCI+TGVhZ3VlIG5hbWVcXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihsZWFndWVGb3JtLmxlYWd1ZU5hbWUsICdyZXF1aXJlZCcpXFxcIj5bIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGxlYWd1ZUZvcm0ubGVhZ3VlTmFtZSwgJ21heGxlbmd0aCcpXFxcIj5bIFRvbyBMb25nIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aW5wdXQgaWQ9XFxcImxlYWd1ZU5hbWVcXFwiIG5hbWU9XFxcImxlYWd1ZU5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJsZWFndWVEYXRhLm5hbWVcXFwiIG5nLW1heGxlbmd0aD1cXFwiMzBcXFwiIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihsZWFndWVGb3JtLmxlYWd1ZU5hbWUpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIj5TZWFzb248L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aW5wdXQgaWQ9XFxcInNlYXNvbk5hbWVcXFwiIG5hbWU9XFxcInNlYXNvbk5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJsZWFndWVEYXRhLnNlYXNvbl9uYW1lXFxcIiBuZy1kaXNhYmxlZD1cXFwidHJ1ZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcInN0YXJ0V2Vla1xcXCI+U3RhcnQgd2VlazwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzZWxlY3QgaWQ9XFxcInN0YXJ0V2Vla1xcXCIgbmFtZT1cXFwic3RhcnRXZWVrXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1zaG93PVxcXCIhbGVhZ3VlRGF0YS5zdGFydGVkXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5zdGFydF93ZWVrX2lkXFxcIiBuZy1vcHRpb25zPVxcXCJ3ZWVrLmlkIGFzIHdlZWsuZGlzcGxheSBmb3Igd2VlayBpbiB3ZWVrc1xcXCI+PC9zZWxlY3Q+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpbnB1dCBpZD1cXFwic3RhcnRXZWVrRGlzcGxheVxcXCIgbmFtZT1cXFwic3RhcnRXZWVrRGlzcGxheVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctc2hvdz1cXFwibGVhZ3VlRGF0YS5zdGFydGVkXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5zdGFydF93ZWVrX2Rpc3BsYXlcXFwiIG5nLWRpc2FibGVkPVxcXCJ0cnVlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKGxlYWd1ZUZvcm0ubWF4VGVhbXMpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IobGVhZ3VlRm9ybS5tYXhUZWFtcyl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcIm1heFRlYW1zXFxcIj5Ib3cgbWFueSB0aW1lcyBjYW4gYSB1c2VyIGpvaW4/XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobGVhZ3VlRm9ybS5tYXhUZWFtcywgJ3JlcXVpcmVkJylcXFwiPlsgTnVtYmVyIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGxlYWd1ZUZvcm0ubWF4VGVhbXMsICdtaW4nKVxcXCI+WyAxIC0gMTAgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobGVhZ3VlRm9ybS5tYXhUZWFtcywgJ21heCcpXFxcIj5bIDEgLSAxMCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJtYXhUZWFtc1xcXCIgbmFtZT1cXFwibWF4VGVhbXNcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgcGxhY2Vob2xkZXI9XFxcIkJldHdlZW4gMSBhbmQgMTBcXFwiIG1pbj1cXFwiMVxcXCIgbWF4PVxcXCIxMFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcImxlYWd1ZURhdGEubWF4X3RlYW1zX3Blcl91c2VyXFxcIiBsb2doLWZvY3VzIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihsZWFndWVGb3JtLm1heFRlYW1zKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJtZXNzYWdlXFxcIj5NZXNzYWdlIFsgT3B0aW9uYWwgXTwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cXFwibWVzc2FnZVxcXCIgbmFtZT1cXFwibWVzc2FnZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVudGVyIGEgbWVzc2FnZSBmb3IgeW91ciBsZWFndWUgaGVyZS4gWW91IGNhbiBjaGFuZ2UgaXQgYXQgYW55IHRpbWUuXFxcIiByb3dzPVxcXCIyXFxcIiBtYXhsZW5ndGg9XFxcIjUwMFxcXCIgbmctbW9kZWw9XFxcImxlYWd1ZURhdGEubWVzc2FnZVxcXCI+PC90ZXh0YXJlYT5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZWRpdC1sZWFndWUtYnRuLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJlZGl0LWxlYWd1ZS1idG4gYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwibGVhZ3VlRm9ybS4kaW52YWxpZCB8fCBlZGl0QnRuRGlzYWJsZWRcXFwiIG5nLWNsaWNrPVxcXCJ1cGRhdGVMZWFndWUobGVhZ3VlRGF0YSlcXFwiPlVwZGF0ZSBMZWFndWU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Zvcm0+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlL2xlYWd1ZS5pbnZpdGUudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2ludml0ZS9sZWFndWUuaW52aXRlLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj48c3BhbiBuZy1zaG93PVxcXCIhbGVhZ3VlQ2xvc2VkXFxcIj5JbnZpdGUgRnJpZW5kczwvc3Bhbj48c3BhbiBuZy1zaG93PVxcXCJsZWFndWVDbG9zZWRcXFwiPkludml0YXRpb25zPC9zcGFuPjwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IG5nLXNob3c9XFxcIiFsZWFndWVDbG9zZWRcXFwiPlxcblwiICtcbiAgICBcIiAgICA8Zm9ybSBuYW1lPVxcXCJpbnZpdGVGb3JtXFxcIiBjbGFzcz1cXFwiaW52aXRlLWZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihpbnZpdGVGb3JtLmVtYWlscyksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihpbnZpdGVGb3JtLmVtYWlscyl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJlbWFpbHNcXFwiIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIj5FbWFpbChzKTo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwiZW1haWxzXFxcIiBuYW1lPVxcXCJlbWFpbHNcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJTZXBlcmF0ZSBlbWFpbHMgd2l0aCBhIHNwYWNlLi4uXFxcIiBuZy1tb2RlbD1cXFwiaW52aXRhdGlvbi5lbWFpbFxcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJpbnB1dC1lcnJvclxcXCIgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihpbnZpdGVGb3JtLmVtYWlscywgJ3JlcXVpcmVkJylcXFwiPlJlcXVpcmVkPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihpbnZpdGVGb3JtLmVtYWlscylcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKGludml0ZUZvcm0ubWVzc2FnZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihpbnZpdGVGb3JtLm1lc3NhZ2UpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibWVzc2FnZVxcXCIgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiPk1lc3NhZ2U6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XFxcIm1lc3NhZ2VcXFwiIG5hbWU9XFxcIm1lc3NhZ2VcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciBhIG9wdGlvbmFsIG1lc3NhZ2UgdG8gZGVsaXZlciB3aXRoIHRoZSBpbnZpdGF0aW9uLi4uXFxcIiByb3dzPVxcXCIzXFxcIiBtYXhsZW5ndGg9XFxcIjQwMFxcXCIgbmctbW9kZWw9XFxcImludml0YXRpb24ubWVzc2FnZVxcXCI+PC90ZXh0YXJlYT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGludml0ZUZvcm0ubWVzc2FnZSwgJ21heGxlbmd0aCcpXFxcIj5Ub28gTG9uZzwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IoaW52aXRlRm9ybS5tZXNzYWdlKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImludml0ZS1yZXNldC1idG4gYnRuIGJ0bi1kZWZhdWx0IGJ0bi1ibG9ja1xcXCIgbmctY2xpY2s9XFxcInJlc2V0SW52aXRlKClcXFwiPkNsZWFyPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiaW52aXRlLXNlbmQtYnRuIGJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcXFwiIG5nLWRpc2FibGVkPVxcXCJpbnZpdGVGb3JtLiRpbnZhbGlkXFxcIiBuZy1jbGljaz1cXFwic2VuZEludml0ZShpbnZpdGF0aW9uKVxcXCI+U2VuZDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZm9ybT5cXG5cIiArXG4gICAgXCIgICAgPGhyPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IG5nLXNob3c9XFxcImlzQ29tbWlzaFxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImludml0ZXMtdGFiXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8dWwgY2xhc3M9XFxcIm5hdiBuYXYtdGFic1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGkgY2xhc3M9XFxcImFjdGl2ZVxcXCI+PGE+SW52aXRlcyBbIHt7aW52aXRhdGlvbnMubGVuZ3RofX0gXTwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgIDwvdWw+XFxuXCIgK1xuICAgIFwiICAgICAgPHNwYW4gY2xhc3M9XFxcImNsaWNrLXRvLWVkaXRcXFwiIG5nLXNob3c9XFxcIiFsZWFndWVDbG9zZWRcXFwiPlsgY2xpY2sgaW52aXRlIHRvIGVkaXQgXTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImxlYWd1ZS1pbnZpdGVzXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJsaXN0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxhIG5nLXJlcGVhdD1cXFwiaW52aXRlIGluIGludml0YXRpb25zXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIiBuZy1jbGljaz1cXFwicG9wdWxhdGVJbnZpdGUoaW52aXRlKVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY2hlY2sgZmEtZndcXFwiIG5nLXNob3c9XFxcImludml0ZS5hY2NlcHRlZF9hdFxcXCIgdGl0bGU9XFxcIkFjY2VwdGVkXFxcIj48L2k+IHt7aW52aXRlLmVtYWlsfX1cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxicj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzZW50LWRhdGVcXFwiPjxzcGFuIG5nLXNob3c9XFxcIiFpbnZpdGUuYWNjZXB0ZWRfYXRcXFwiPlNlbnQ6IHt7aW52aXRlLnVwZGF0ZWRfYXR9fTwvc3Bhbj48c3BhbiBuZy1zaG93PVxcXCJpbnZpdGUuYWNjZXB0ZWRfYXRcXFwiPkpvaW5lZDoge3tpbnZpdGUuYWNjZXB0ZWRfYXR9fTwvc3Bhbj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8YnI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW52aXRlZVxcXCIgbmctc2hvdz1cXFwiaW52aXRlLmludml0ZWUubGVuZ3RoID4gMFxcXCI+SW52aXRlZToge3tpbnZpdGUuaW52aXRlZX19PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvYT5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJuby1waWNrcy1hbGVydCBhbGVydCBhbGVydC1pbmZvXFxcIiBuZy1zaG93PVxcXCJpbnZpdGF0aW9ucy5sZW5ndGggPT0gMFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICBObyBpbnZpdGVzXFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DbG9zZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2ludml0ZS9yZXF1ZXN0L2xlYWd1ZS5pbnZpdGUucmVxdWVzdC50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlL3JlcXVlc3QvbGVhZ3VlLmludml0ZS5yZXF1ZXN0LnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5SZXF1ZXN0IEludml0ZTwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8Zm9ybSBuYW1lPVxcXCJyZXF1ZXN0SW52aXRlRm9ybVxcXCIgY2xhc3M9XFxcInJlcXVlc3QtaW52aXRlLWZvcm0gZm9ybS1ob3Jpem9udGFsXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihyZXF1ZXN0SW52aXRlRm9ybS5lbWFpbCksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihyZXF1ZXN0SW52aXRlRm9ybS5lbWFpbCl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgZm9yPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPkZvcjo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8aW5wdXQgaWQ9XFxcImVtYWlsXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciBlbWFpbFxcXCIgbmctbW9kZWw9XFxcImludml0YXRpb24uZW1haWxcXFwiIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJpbnB1dC1lcnJvclxcXCIgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihyZXF1ZXN0SW52aXRlRm9ybS5lbWFpbCwgJ3JlcXVpcmVkJylcXFwiPlJlcXVpcmVkPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IocmVxdWVzdEludml0ZUZvcm0uZW1haWwsICdlbWFpbCcpXFxcIj5JbnZhbGlkIGVtYWlsPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKHJlcXVlc3RJbnZpdGVGb3JtLmVtYWlsKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IocmVxdWVzdEludml0ZUZvcm0ubWVzc2FnZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihyZXF1ZXN0SW52aXRlRm9ybS5tZXNzYWdlKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBmb3I9XFxcIm1lc3NhZ2VcXFwiIGNsYXNzPVxcXCJjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIj5NZXNzYWdlOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDx0ZXh0YXJlYSBpZD1cXFwibWVzc2FnZVxcXCIgbmFtZT1cXFwibWVzc2FnZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVudGVyIGEgb3B0aW9uYWwgbWVzc2FnZSBmb3IgdGhlIGNvbW1pc2ggb2YgdGhlIGxlYWd1ZS4uLlxcXCIgcm93cz1cXFwiM1xcXCIgbWF4bGVuZ3RoPVxcXCIyMDBcXFwiIG5nLW1vZGVsPVxcXCJpbnZpdGF0aW9uLm1lc3NhZ2VcXFwiPjwvdGV4dGFyZWE+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKHJlcXVlc3RJbnZpdGVGb3JtLm1lc3NhZ2UsICdtYXhsZW5ndGgnKVxcXCI+VG9vIExvbmc8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IocmVxdWVzdEludml0ZUZvcm0ubWVzc2FnZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctZGlzYWJsZWQ9XFxcInJlcXVlc3RJbnZpdGVGb3JtLiRpbnZhbGlkXFxcIiBuZy1jbGljaz1cXFwicmVxdWVzdEludml0ZShpbnZpdGF0aW9uKVxcXCI+UmVxdWVzdCBJbnZpdGU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9qb2luL2xlYWd1ZS5qb2luLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9qb2luL2xlYWd1ZS5qb2luLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5Kb2luIExlYWd1ZTwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8Zm9ybSBuYW1lPVxcXCJqb2luRm9ybVxcXCIgY2xhc3M9XFxcImpvaW4tZm9ybSBmb3JtLWhvcml6b250YWxcXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKGpvaW5Gb3JtLnRlYW1OYW1lKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKGpvaW5Gb3JtLnRlYW1OYW1lKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBmb3I9XFxcInRlYW1OYW1lXFxcIiBjbGFzcz1cXFwiY29sLXNtLTQgY29sLW1kLTQgY29udHJvbC1sYWJlbFxcXCI+R2l2ZSB5b3VyIHRlYW0gYSBuYW1lOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTggY29sLW1kLThcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGlucHV0IGlkPVxcXCJ0ZWFtTmFtZVxcXCIgbmFtZT1cXFwidGVhbU5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciBuYW1lLi4uXFxcIiBuZy1tb2RlbD1cXFwibmV3VGVhbURhdGEubmFtZVxcXCIgbmctbWF4bGVuZ3RoPVxcXCIzMFxcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGpvaW5Gb3JtLnRlYW1OYW1lLCAncmVxdWlyZWQnKVxcXCI+UmVxdWlyZWQ8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJpbnB1dC1lcnJvclxcXCIgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihqb2luRm9ybS50ZWFtTmFtZSwgJ21heGxlbmd0aCcpXFxcIj5Ub28gTG9uZzwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihqb2luRm9ybS50ZWFtTmFtZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctZGlzYWJsZWQ9XFxcImpvaW5Gb3JtLiRwcmlzdGluZSB8fCBqb2luRm9ybS4kaW52YWxpZFxcXCIgbmctY2xpY2s9XFxcImpvaW5MZWFndWUobmV3VGVhbURhdGEpXFxcIj5Kb2luPC9idXR0b24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbGVhZ3VlLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9sZWFndWUudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgdWktdmlldz1cXFwibGVhZ3VlQ29udGVudFxcXCIgY2xhc3M9XFxcImxlYWd1ZS1jb250ZW50XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9tZXNzYWdlL2xlYWd1ZS5tZXNzYWdlLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9tZXNzYWdlL2xlYWd1ZS5tZXNzYWdlLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5VcGRhdGUgTWVzc2FnZTwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8Zm9ybSBuYW1lPVxcXCJtZXNzYWdlRm9ybVxcXCIgY2xhc3M9XFxcImxlYWd1ZS1tZXNzYWdlLWZvcm0gZm9ybS1ob3Jpem9udGFsXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihtZXNzYWdlRm9ybS5tZXNzYWdlKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKG1lc3NhZ2VGb3JtLm1lc3NhZ2UpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGZvcj1cXFwibWVzc2FnZVxcXCIgY2xhc3M9XFxcImNvbC1zbS00IGNvbnRyb2wtbGFiZWxcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgTGVhZ3VlIE1lc3NhZ2U6IDxicj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobWVzc2FnZUZvcm0ubWVzc2FnZSwgJ21heGxlbmd0aCcpXFxcIj5bIFRvbyBMb25nIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLThcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPHRleHRhcmVhIGlkPVxcXCJtZXNzYWdlXFxcIiBuYW1lPVxcXCJtZXNzYWdlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgYSBtZXNzYWdlIGZvciB5b3VyIGxlYWd1ZSB0byBzZWUgb3IgbGVhdmUgaXQgYmxhbmsuXFxcIiByb3dzPVxcXCIzXFxcIiBuZy1tYXhsZW5ndGg9XFxcIjUwMFxcXCIgbmctbW9kZWw9XFxcImxlYWd1ZURhdGEubWVzc2FnZVxcXCI+PC90ZXh0YXJlYT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImVtYWlsLWxlYWd1ZS1tZXNzYWdlLWNoZWNrYm94XFxcIiBuZy1zaG93PVxcXCJsZWFndWVEYXRhLmVsaW1pbmF0aW9uXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcIm1lc3NhZ2VPcHRpb25zLnNlbmRBbGl2ZVxcXCI+IGVtYWlsIG1lc3NhZ2UgdG8gYWxpdmUgdGVhbXM8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJlbWFpbC1sZWFndWUtbWVzc2FnZS1jaGVja2JveFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIG5nLW1vZGVsPVxcXCJtZXNzYWdlT3B0aW9ucy5zZW5kQWxsXFxcIj4gZW1haWwgbWVzc2FnZSB0byBhbGwgdGVhbXM8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihtZXNzYWdlRm9ybS5tZXNzYWdlKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZm9ybT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwibWVzc2FnZUZvcm0uJHByaXN0aW5lIHx8IG1lc3NhZ2VGb3JtLiRpbnZhbGlkXFxcIiBuZy1jbGljaz1cXFwidXBkYXRlTWVzc2FnZShsZWFndWVEYXRhLCBtZXNzYWdlT3B0aW9ucy5zZW5kQWxpdmUsIG1lc3NhZ2VPcHRpb25zLnNlbmRBbGwpXFxcIj5VcGRhdGU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9uZXcvbGVhZ3VlLm5ldy50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbmV3L2xlYWd1ZS5uZXcudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcImNyZWF0ZS1sZWFndWUtaGVhZGVyLXJvdyByb3dcXFwiPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxoMz5DcmVhdGUgTGVhZ3VlPC9oMz5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxocj5cXG5cIiArXG4gICAgXCI8Zm9ybSBuYW1lPVxcXCJsZWFndWVGb3JtXFxcIiBjbGFzcz1cXFwiY3JlYXRlLWxlYWd1ZS1mb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwicm93IGZvcm0tZ3JvdXAgcHJvZHVjdC1jaG9vc2VyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9kdWN0LWNob29zZXItaXRlbVxcXCIgbmctY2xhc3M9XFxcInsnc2VsZWN0ZWQnOiBsZWFndWVEYXRhLnB1YmxpYyA9PSB0cnVlfVxcXCIgbmctY2xpY2s9XFxcImxlYWd1ZURhdGEucHVibGljID0gdHJ1ZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTEyIGNvbC1sZy0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRpdGxlXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtdW5sb2NrIGljb25cXFwiPjwvaT4gUHVibGljIExlYWd1ZTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPkFueW9uZSBjYW4gam9pbiBhIHB1YmxpYyBsZWFndWUuIE1lbWJlcnMgb2YgYSBwdWJsaWMgbGVhZ3VlIGNhbiBhbHNvIGludml0ZSBvdGhlcnMgdG8gam9pbiB0aGUgbGVhZ3VlLjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNsZWFyXFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZHVjdC1jaG9vc2VyLWl0ZW1cXFwiIG5nLWNsYXNzPVxcXCJ7J3NlbGVjdGVkJzogbGVhZ3VlRGF0YS5wdWJsaWMgPT0gZmFsc2V9XFxcIiBuZy1jbGljaz1cXFwibGVhZ3VlRGF0YS5wdWJsaWMgPSBmYWxzZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0xMiBjb2wtbGctMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGl0bGVcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1sb2NrIGljb25cXFwiPjwvaT4gUHJpdmF0ZSBMZWFndWU8L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+QW4gaW52aXRlIGZyb20gdGhlIGNvbW1pc2ggaXMgcmVxdWlyZWQgdG8gam9pbiBhIHByaXZhdGUgbGVhZ3VlLiBPbmx5IHRoZSBjb21taXNoIGNhbiBpbnZpdGUgcGVvcGxlIHRvIGpvaW4gdGhlIGxlYWd1ZS48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImNsZWFyXFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcInJvdyBmb3JtLWdyb3VwIHByb2R1Y3QtY2hvb3NlclxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZHVjdC1jaG9vc2VyLWl0ZW1cXFwiIG5nLWNsYXNzPVxcXCJ7J3NlbGVjdGVkJzogbGVhZ3VlRGF0YS5lbGltaW5hdGlvbiA9PSBmYWxzZX1cXFwiIG5nLWNsaWNrPVxcXCJsZWFndWVEYXRhLm1heF9waWNrc19wZXJfd2VlayA9IG51bGw7IGxlYWd1ZURhdGEuZWxpbWluYXRpb24gPSBmYWxzZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTEyIGNvbC1sZy0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRpdGxlXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtdGgtbGlzdFxcXCI+PC9pPiBQaWNrJ2VtIEZvcm1hdDwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPlBpY2snZW0gZm9ybWF0IGFsbG93cyB0ZWFtcyB0byBtYWtlIG9uZSBvciBtb3JlIHBpY2tzIGVhY2ggd2Vlay4gVGhlIGNvbW1pc2ggZGV0ZXJtaW5lcyBob3cgbWFueSBwaWNrcyBjYW4gYmUgbWFkZSBlYWNoIHdlZWsuPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2xlYXJcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9kdWN0LWNob29zZXItaXRlbVxcXCIgbmctY2xhc3M9XFxcInsnc2VsZWN0ZWQnOiBsZWFndWVEYXRhLmVsaW1pbmF0aW9uID09IHRydWV9XFxcIiBuZy1jbGljaz1cXFwibGVhZ3VlRGF0YS5tYXhfcGlja3NfcGVyX3dlZWsgPSAxOyBsZWFndWVEYXRhLmVsaW1pbmF0aW9uID0gdHJ1ZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0xMiBjb2wtbGctMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGl0bGVcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1jaGVja1xcXCI+PC9pPiBTdXJ2aXZvciBGb3JtYXQ8L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+U3Vydml2b3IgZm9ybWF0IHJlcXVpcmVzIGEgdGVhbSB0byBtYWtlIGEgZGlmZmVyZW50IHBpY2sgZWFjaCB3ZWVrLiBJZiB5b3UgZmFpbCB0byBwaWNrIGEgbG9zZXIsIHlvdXIgdGVhbSBpcyBlbGltaW5hdGVkLiBUaGUgbGFzdCB0ZWFtIHN0YW5kaW5nIHdpbnMuPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjbGVhclxcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjcmVhdGUtbGVhZ3VlLWRldGFpbHNcXFwiPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJtYXhQaWNrc1xcXCI+UGlja3MgcGVyIHdlZWs8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c2VsZWN0IGlkPVxcXCJtYXhQaWNrc1xcXCIgbmFtZT1cXFwibWF4UGlja3NcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLWRpc2FibGVkPVxcXCJsZWFndWVEYXRhLmVsaW1pbmF0aW9uXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5tYXhfcGlja3NfcGVyX3dlZWtcXFwiIG5nLW9wdGlvbnM9XFxcIm1heFBpY2subnVtYmVyIGFzIG1heFBpY2suZGlzcGxheSBmb3IgbWF4UGljayBpbiBtYXhQaWNrc1BlcldlZWtcXFwiPjwvc2VsZWN0PlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJsZWFndWVEYXRhLmVsaW1pbmF0aW9uXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtd2FybmluZyBmYS1md1xcXCIgdGl0bGU9XFxcIldhcm5pbmdcXFwiPjwvaT4gU3Vydml2b3IgbGVhZ3VlcyBvbmx5IGFsbG93IDEgcGljayBwZXIgd2Vlaywgbm8gcmVwZWF0czwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgbmctc2hvdz1cXFwibGVhZ3VlRGF0YS5lbGltaW5hdGlvblxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcImxlYWd1ZURhdGEuZWxpbWluYXRlX29uX3RpZVxcXCI+IGVsaW1pbmF0ZSBhIHRlYW0gdGhhdCBwaWNrcyBhIHRpZVxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8aHI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihsZWFndWVGb3JtLmxlYWd1ZU5hbWUpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IobGVhZ3VlRm9ybS5sZWFndWVOYW1lKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwibGVhZ3VlTmFtZVxcXCI+TGVhZ3VlIG5hbWVcXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihsZWFndWVGb3JtLmxlYWd1ZU5hbWUsICdyZXF1aXJlZCcpXFxcIj5bIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGxlYWd1ZUZvcm0ubGVhZ3VlTmFtZSwgJ21heGxlbmd0aCcpXFxcIj5bIFRvbyBMb25nIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aW5wdXQgaWQ9XFxcImxlYWd1ZU5hbWVcXFwiIG5hbWU9XFxcImxlYWd1ZU5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJsZWFndWVEYXRhLm5hbWVcXFwiIG5nLW1heGxlbmd0aD1cXFwiMzBcXFwiIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihsZWFndWVGb3JtLmxlYWd1ZU5hbWUpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImxlYWd1ZS1uaWNrbmFtZSByb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJuaWNrbmFtZVxcXCI+Tmlja25hbWU8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aW5wdXQgaWQ9XFxcIm5pY2tuYW1lXFxcIiBuYW1lPVxcXCJuaWNrbmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcImxlYWd1ZURhdGEubmlja25hbWVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJzZWFzb25cXFwiPlNlYXNvbjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzZWxlY3QgaWQ9XFxcInNlYXNvblxcXCIgbmFtZT1cXFwic2Vhc29uXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1jaGFuZ2U9XFxcImNoYW5nZVNlYXNvbigpXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5zZWFzb25faWRcXFwiIG5nLW9wdGlvbnM9XFxcInNlYXNvbi5pZCBhcyBzZWFzb24ubmFtZSBmb3Igc2Vhc29uIGluIHNlYXNvbnNcXFwiPjwvc2VsZWN0PlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJzdGFydFdlZWtcXFwiPlN0YXJ0IHdlZWs8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c2VsZWN0IGlkPVxcXCJzdGFydFdlZWtcXFwiIG5hbWU9XFxcInN0YXJ0V2Vla1xcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcImxlYWd1ZURhdGEuc3RhcnRfd2Vla19pZFxcXCIgbmctb3B0aW9ucz1cXFwid2Vlay5pZCBhcyB3ZWVrLmRpc3BsYXkgZm9yIHdlZWsgaW4gd2Vla3NcXFwiIHJlcXVpcmVkPjwvc2VsZWN0PlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IobGVhZ3VlRm9ybS5tYXhUZWFtcyksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihsZWFndWVGb3JtLm1heFRlYW1zKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwibWF4VGVhbXNcXFwiPkhvdyBtYW55IHRpbWVzIGNhbiBhIHVzZXIgam9pbj9cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihsZWFndWVGb3JtLm1heFRlYW1zLCAncmVxdWlyZWQnKVxcXCI+WyBOdW1iZXIgUmVxdWlyZWQgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobGVhZ3VlRm9ybS5tYXhUZWFtcywgJ21pbicpXFxcIj5bIDEgLSAxMCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihsZWFndWVGb3JtLm1heFRlYW1zLCAnbWF4JylcXFwiPlsgMSAtIDEwIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aW5wdXQgaWQ9XFxcIm1heFRlYW1zXFxcIiBuYW1lPVxcXCJtYXhUZWFtc1xcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBwbGFjZWhvbGRlcj1cXFwiQmV0d2VlbiAxIGFuZCAxMFxcXCIgbWluPVxcXCIxXFxcIiBtYXg9XFxcIjEwXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5tYXhfdGVhbXNfcGVyX3VzZXJcXFwiIGxvZ2gtZm9jdXMgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKGxlYWd1ZUZvcm0ubWF4VGVhbXMpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcIm1lc3NhZ2VcXFwiPk1lc3NhZ2UgWyBPcHRpb25hbCBdPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHRleHRhcmVhIGlkPVxcXCJtZXNzYWdlXFxcIiBuYW1lPVxcXCJtZXNzYWdlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgYSBtZXNzYWdlIGZvciB5b3VyIGxlYWd1ZSBoZXJlLiBZb3UgY2FuIGNoYW5nZSBpdCBhdCBhbnkgdGltZS5cXFwiIHJvd3M9XFxcIjJcXFwiIG1heGxlbmd0aD1cXFwiNTAwXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5tZXNzYWdlXFxcIj48L3RleHRhcmVhPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJjcmVhdGUtbGVhZ3VlLWJ0bi1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY3JlYXRlLWxlYWd1ZS1idG4gYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwibGVhZ3VlRm9ybS4kaW52YWxpZCB8fCBjcmVhdGVCdG5EaXNhYmxlZFxcXCIgbmctY2xpY2s9XFxcImNyZWF0ZUxlYWd1ZShsZWFndWVEYXRhKVxcXCI+U2F2ZSBMZWFndWU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Zvcm0+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvdmlldy9sZWFndWUudmlldy50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvdmlldy9sZWFndWUudmlldy50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwiaGVhZGVyLXJvdyByb3dcXFwiPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTcgY29sLW1kLTdcXFwiPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXAgbGVhZ3Vlcy1kcm9wZG93blxcXCIgZHJvcGRvd24gaXMtb3Blbj1cXFwibGVhZ3VlRHJvcGRvd24uaXNvcGVuXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImxlYWd1ZXMtYnRuLWxpbmsgYnRuIGJ0bi1saW5rIGRyb3Bkb3duLXRvZ2dsZVxcXCIgbmctZGlzYWJsZWQ9XFxcIiFpc0NvbW1pc2gobGVhZ3VlRGF0YSkgJiYgIWlzQWRtaW4oKVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBjbGFzcz1cXFwibGVhZ3VlLW5hbWVcXFwiIG5nLWNsYXNzPVxcXCJ7J2Rpc2FibGVkJzogIWlzQ29tbWlzaChsZWFndWVEYXRhKSAmJiAhaXNBZG1pbigpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtbG9jayBpY29uXFxcIiB0aXRsZT1cXFwiUHJpdmF0ZSBsZWFndWVcXFwiIG5nLXNob3c9XFxcIiFsZWFndWVEYXRhLnB1YmxpY1xcXCI+PC9pPlxcblwiICtcbiAgICBcIiAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXVubG9jayBpY29uXFxcIiB0aXRsZT1cXFwiUHVibGljIGxlYWd1ZVxcXCIgbmctc2hvdz1cXFwibGVhZ3VlRGF0YS5wdWJsaWNcXFwiPjwvaT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzdHJvbmc+e3tsZWFndWVEYXRhLm5hbWV9fTwvc3Ryb25nPjwvc3Bhbj4gPHNwYW4gbmctc2hvdz1cXFwiaXNDb21taXNoKGxlYWd1ZURhdGEpIHx8IGlzQWRtaW4oKVxcXCIgY2xhc3M9XFxcImNhcmV0XFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51IGxlYWd1ZS1hY3Rpb25zLW1lbnVcXFwiIHJvbGU9XFxcIm1lbnVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGxpPjxhIG5nLXNob3c9XFxcImlzQ29tbWlzaChsZWFndWVEYXRhKSB8fCBpc0FkbWluKClcXFwiIG5nLWNsaWNrPVxcXCJ0b2dnbGVEcm9wZG93bigkZXZlbnQpO2VkaXRMZWFndWUobGVhZ3VlRGF0YSlcXFwiPkVkaXQgbGVhZ3VlPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGk+PGEgbmctc2hvdz1cXFwiaXNDb21taXNoKGxlYWd1ZURhdGEpXFxcIiBuZy1jbGljaz1cXFwidG9nZ2xlRHJvcGRvd24oJGV2ZW50KTt1cGRhdGVNZXNzYWdlKGxlYWd1ZURhdGEpXFxcIj5FZGl0IGxlYWd1ZSBtZXNzYWdlPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGk+PGEgbmctc2hvdz1cXFwiaXNDb21taXNoKGxlYWd1ZURhdGEpXFxcIiBuZy1jbGljaz1cXFwidG9nZ2xlRHJvcGRvd24oJGV2ZW50KTtpbnZpdGUobGVhZ3VlRGF0YS5pZCwgaXNDb21taXNoKGxlYWd1ZURhdGEpLCBsZWFndWVEYXRhLmNsb3NlZClcXFwiPk1hbmFnZSBpbnZpdGF0aW9uczwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgICAgPGxpPjxhIG5nLXNob3c9XFxcImlzQ29tbWlzaChsZWFndWVEYXRhKSAmJiB0ZWFtT3B0aW9ucy5pbmFjdGl2ZSA9PSB0cnVlXFxcIiBuZy1jbGljaz1cXFwidG9nZ2xlRHJvcGRvd24oJGV2ZW50KTtzaG93RGVhY3RpdmF0ZWRUZWFtcyhmYWxzZSk7XFxcIj5IaWRlIGRlYWN0aXZhdGVkIHRlYW1zPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGk+PGEgbmctc2hvdz1cXFwiaXNDb21taXNoKGxlYWd1ZURhdGEpICYmIHRlYW1PcHRpb25zLmluYWN0aXZlID09IGZhbHNlXFxcIiBuZy1jbGljaz1cXFwidG9nZ2xlRHJvcGRvd24oJGV2ZW50KTtzaG93RGVhY3RpdmF0ZWRUZWFtcyh0cnVlKTtcXFwiPlNob3cgZGVhY3RpdmF0ZWQgdGVhbXM8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICA8L3VsPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGgzIHN0eWxlPVxcXCJtYXJnaW4tdG9wOiAwO1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwibGVhZ3VlLW1ldGFcXFwiIG5nLWNsYXNzPVxcXCJ7J3Nob3ctbWV0YSc6ICFsZWFndWVEYXRhLmNsb3NlZH1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsPkNvbW1pc2ggWyB7e2xlYWd1ZURhdGEuY29tbWlzaF9uYW1lcy5qb2luKCcsICcpfX0gXTwvc21hbGw+PGJyPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsPnt7bGVhZ3VlRGF0YS5mb3JtYXR9fTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPHNtYWxsPnt7c3RhcnRzKGxlYWd1ZURhdGEpfX08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICA8L2gzPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNSBjb2wtbWQtNVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiam9pbi1idG4gYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1zaG93PVxcXCIhbGVhZ3VlRGF0YS5jbG9zZWRcXFwiIG5nLWNsaWNrPVxcXCJqb2luTGVhZ3VlKGxlYWd1ZURhdGEpXFxcIj5Kb2luICh7e2xlYWd1ZURhdGEubWF4X3RlYW1zX3Blcl91c2VyfX1YIG1heCk8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJpbnZpdGUtYnRuIGJ0biBidG4tZGVmYXVsdFxcXCIgbmctc2hvdz1cXFwiIWxlYWd1ZURhdGEuY2xvc2VkICYmIChsZWFndWVEYXRhLnB1YmxpYyB8fCBpc0NvbW1pc2gobGVhZ3VlRGF0YSkpXFxcIiBuZy1jbGljaz1cXFwiaW52aXRlKGxlYWd1ZURhdGEuaWQsIGlzQ29tbWlzaChsZWFndWVEYXRhKSwgbGVhZ3VlRGF0YS5jbG9zZWQpXFxcIj5JbnZpdGU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJyZXF1ZXN0LWludml0ZS1idG4gYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1zaG93PVxcXCIhbGVhZ3VlRGF0YS5jbG9zZWQgJiYgIWxlYWd1ZURhdGEucHVibGljICYmICFpc0NvbW1pc2gobGVhZ3VlRGF0YSlcXFwiIG5nLWNsaWNrPVxcXCJyZXF1ZXN0SW52aXRlKGxlYWd1ZURhdGEpXFxcIj5SZXF1ZXN0IEludml0ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICA8aDMgY2xhc3M9XFxcImxlYWd1ZS1tZXRhLXJpZ2h0XFxcIiBuZy1zaG93PVxcXCJsZWFndWVEYXRhLmNsb3NlZFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPHNtYWxsPnt7bGVhZ3VlRGF0YS5mb3JtYXR9fTwvc21hbGw+PGJyPlxcblwiICtcbiAgICBcIiAgICAgIDxzbWFsbD5Db21taXNoIFsge3tsZWFndWVEYXRhLmNvbW1pc2hfbmFtZXMuam9pbignLCAnKX19IF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICA8L2gzPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGhyPlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImxlYWd1ZS1tZXNzYWdlXFxcIiBuZy1zaG93PVxcXCIhbGVhZ3VlRGF0YS5jbG9zZWQgfHwgaGFzVGVhbUluTGVhZ3VlKCkgfHwgaXNDb21taXNoKGxlYWd1ZURhdGEpXFxcIj5cXG5cIiArXG4gICAgXCIgIDxhY2NvcmRpb24gY2xvc2Utb3RoZXJzPVxcXCJ0cnVlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGFjY29yZGlvbi1ncm91cCBpcy1vcGVuPVxcXCJ1c2VyTW9kZWwubGVhZ3VlTWVzc2FnZU9wZW5bbGVhZ3VlRGF0YS5pZF1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxhY2NvcmRpb24taGVhZGluZz5cXG5cIiArXG4gICAgXCIgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1jb21tZW50IGZhLWZ3XFxcIj48L2k+IE1lc3NhZ2VzIHRvIGxlYWd1ZSBbIDxzcGFuIG5nLXNob3c9XFxcImxlYWd1ZURhdGEubWVzc2FnZS5sZW5ndGggPiAwXFxcIj4xPC9zcGFuPjxzcGFuIG5nLXNob3c9XFxcIiFsZWFndWVEYXRhLm1lc3NhZ2UgfHwgbGVhZ3VlRGF0YS5tZXNzYWdlLmxlbmd0aCA9PSAwXFxcIj4wPC9zcGFuPiBdIDxpIGNsYXNzPVxcXCJwdWxsLXJpZ2h0IGdseXBoaWNvblxcXCIgbmctY2xhc3M9XFxcInsnZ2x5cGhpY29uLWNoZXZyb24tZG93bic6IHVzZXJNb2RlbC5sZWFndWVNZXNzYWdlT3BlbltsZWFndWVEYXRhLmlkXSwgJ2dseXBoaWNvbi1jaGV2cm9uLXJpZ2h0JzogIXVzZXJNb2RlbC5sZWFndWVNZXNzYWdlT3BlbltsZWFndWVEYXRhLmlkXX1cXFwiPjwvaT5cXG5cIiArXG4gICAgXCIgICAgICA8L2FjY29yZGlvbi1oZWFkaW5nPlxcblwiICtcbiAgICBcIiAgICAgIDxwIGNsYXNzPVxcXCJsZWFndWUtbWVzc2FnZS10ZXh0XFxcIiBuZy1zaG93PVxcXCIhbGVhZ3VlRGF0YS5tZXNzYWdlIHx8IGxlYWd1ZURhdGEubWVzc2FnZS5sZW5ndGggPT0gMFxcXCI+bm8gbWVzc2FnZXM8L3A+PHAgY2xhc3M9XFxcImxlYWd1ZS1tZXNzYWdlLXRleHRcXFwiIG5nLXNob3c9XFxcImxlYWd1ZURhdGEubWVzc2FnZS5sZW5ndGggPiAwXFxcIiBuZy1iaW5kLWh0bWw9XFxcImxlYWd1ZURhdGEubWVzc2FnZSB8IGxpbmt5OidfYmxhbmsnXFxcIj48L3A+IDxhIGNsYXNzPVxcXCJhbGVydC1saW5rXFxcIiBuZy1zaG93PVxcXCJpc0NvbW1pc2gobGVhZ3VlRGF0YSlcXFwiIG5nLWNsaWNrPVxcXCJ1cGRhdGVNZXNzYWdlKGxlYWd1ZURhdGEpXFxcIj5bIGVkaXQgXTwvYT48YSBjbGFzcz1cXFwiYWxlcnQtbGlua1xcXCIgbmctc2hvdz1cXFwiIWlzQ29tbWlzaChsZWFndWVEYXRhKSAmJiBoYXNUZWFtSW5MZWFndWUoKVxcXCIgbmctY2xpY2s9XFxcImNvbnRhY3RDb21taXNoKGxlYWd1ZURhdGEpXFxcIj5bIGNvbnRhY3QgY29tbWlzaCBdPC9hPlxcblwiICtcbiAgICBcIiAgICA8L2FjY29yZGlvbi1ncm91cD5cXG5cIiArXG4gICAgXCIgIDwvYWNjb3JkaW9uPlxcblwiICtcbiAgICBcIiAgPGhyPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcInRlYW1zLXRhYlxcXCI+XFxuXCIgK1xuICAgIFwiICA8dWwgY2xhc3M9XFxcIm5hdiBuYXYtdGFic1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxsaSBjbGFzcz1cXFwiYWN0aXZlXFxcIj48YT5UZWFtcyBbIDxzcGFuIG5nLXNob3c9XFxcImxlYWd1ZURhdGEuZWxpbWluYXRpb25cXFwiPnt7YWxpdmVUZWFtQ291bnQobGVhZ3VlVGVhbXMpfX0gLyA8L3NwYW4+e3tsZWFndWVEYXRhLnRlYW1fY291bnR9fSBdPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICA8L3VsPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwid2Vla3NcXFwiPlxcblwiICtcbiAgICBcIiAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLWNoYW5nZT1cXFwiY2hhbmdlV2VlayhzZWxlY3RlZFdlZWtTbHVnKVxcXCIgbmctbW9kZWw9XFxcInNlbGVjdGVkV2Vla1NsdWdcXFwiIG5nLW9wdGlvbnM9XFxcImxlYWd1ZVdlZWsuc2x1ZyBhcyBsZWFndWVXZWVrLmRpc3BsYXkgZm9yIGxlYWd1ZVdlZWsgaW4gbGVhZ3VlV2Vla3NcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxvcHRpb24gdmFsdWU9XFxcIlxcXCI+QWxsIFdlZWtzPC9vcHRpb24+XFxuXCIgK1xuICAgIFwiICAgIDwvc2VsZWN0PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cCBjdXN0b20tc2VhcmNoLWZvcm0gZmlsdGVyLWxlYWd1ZS1qb2luXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJTZWFyY2guLi5cXFwiIG5nLW1vZGVsPVxcXCJ0ZWFtUXVlcnlcXFwiPlxcblwiICtcbiAgICBcIiAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYnRuXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tc2VhcmNoXFxcIj48L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgIDwvc3Bhbj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImxlYWd1ZS1jb250YWluZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwibGVhZ3VlLXRlYW1zIGxpc3QtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICA8YSBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIiBuZy1yZXBlYXQ9XFxcInRlYW0gaW4gbGVhZ3VlVGVhbXMgfCBvcmRlckJ5OltpblBsYXksICctY29ycmVjdF9waWNrc19jb3VudCcsICduYW1lJ10gfCBhY3RpdmVUZWFtRmlsdGVyOnRlYW1PcHRpb25zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QgfCBvZmZzZXRGaWx0ZXI6KGN1cnJlbnRUZWFtUGFnZS0xKSp0ZWFtc1BlclBhZ2UgfCBsaW1pdFRvOnRlYW1zUGVyUGFnZVxcXCIgbmctY2xpY2s9XFxcInNob3dUZWFtKHRlYW0pXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwibGVhZ3VlLW5hbWUgY29sLXNtLTUgY29sLW1kLTVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdXNlciBmYS1md1xcXCIgbmctc2hvdz1cXFwiaXNDb2FjaCh0ZWFtKVxcXCIgdGl0bGU9XFxcIk15IHRlYW1cXFwiPjwvaT48aSBjbGFzcz1cXFwiZmEgZmEtY2hlY2sgZmEtZndcXFwiIG5nLXNob3c9XFxcIiFpc0NvYWNoKHRlYW0pICYmIGlzQ29tbWlzaChsZWFndWVEYXRhKSAmJiB0ZWFtLnBhaWQgPT0gdHJ1ZVxcXCIgdGl0bGU9XFxcIlBhaWRcXFwiPjwvaT4gPHNwYW4gY2xhc3M9XFxcInRlYW0tbmFtZVxcXCIgbmctY2xhc3M9XFxcInsnaW5hY3RpdmUnOiAhdGVhbS5hY3RpdmUgfHwgaXNFbGltaW5hdGVkKHRlYW0pfVxcXCI+e3t0ZWFtLm5hbWV9fTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGJyPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY29hY2gtbmFtZVxcXCI+Q29hY2g6IHt7Y29hY2hOYW1lKHRlYW0pfX08L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS03IGNvbC1tZC03XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImN1cnJlbnQtcGlja1xcXCIgbmctY2xhc3M9XFxcInsnbm8tcGljayc6IHRlYW0uY3VycmVudF9waWNrLndhcm5pbmcgPT0gdHJ1ZX1cXFwiIG5nLXNob3c9XFxcInRlYW0uYWN0aXZlICYmIHRlYW0uc3RhcnRlZFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXt7cGlja1N0YXR1cyh0ZWFtLmN1cnJlbnRfcGljayl9fSBmYS1md1xcXCI+PC9pPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIFsgPHNwYW4gY2xhc3M9XFxcImN1cnJlbnQtbG9zZXItbmFtZVxcXCI+e3t0ZWFtLmN1cnJlbnRfcGljay5uYW1lfX08L3NwYW4+PHNwYW4gY2xhc3M9XFxcImN1cnJlbnQtbG9zZXItYWJicmV2XFxcIj57e3RlYW0uY3VycmVudF9waWNrLmFiYnJldn19PC9zcGFuPiBdXFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImN1cnJlbnQtcGlja1xcXCIgbmctc2hvdz1cXFwidGVhbS5hY3RpdmUgJiYgIXRlYW0uc3RhcnRlZFxcXCI+U3RhcnRzIHt7dGVhbS5zdGFydF93ZWVrfX08L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbmFjdGl2ZS10ZWFtIGN1cnJlbnQtcGlja1xcXCIgbmctc2hvdz1cXFwiIXRlYW0uYWN0aXZlXFxcIj5UZWFtIGhhcyBiZWVuIGRlYWN0aXZhdGVkPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYmFkZ2VcXFwiPnt7dGVhbS5jb3JyZWN0X3BpY2tzX2NvdW50fX0gbG9zZXI8c3BhbiBuZy1zaG93PVxcXCJ0ZWFtLmNvcnJlY3RfcGlja3NfY291bnQgIT0gMVxcXCI+czwvc3Bhbj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9hPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1pbmZvXFxcIiBuZy1zaG93PVxcXCIobGVhZ3VlVGVhbXMgfCBhY3RpdmVUZWFtRmlsdGVyOnRlYW1PcHRpb25zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aCA9PSAwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICBObyB0ZWFtcyBmb3VuZFxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwibGVhZ3VlLXRlYW1zLXBhZ2luYXRpb25cXFwiIG5nLXNob3c9XFxcImxlYWd1ZVRlYW1zLmxlbmd0aCA+IHRlYW1zUGVyUGFnZSAmJiAobGVhZ3VlVGVhbXMgfCBhY3RpdmVUZWFtRmlsdGVyOnRlYW1PcHRpb25zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aCA+IDBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxwYWdpbmF0aW9uIGJvdW5kYXJ5LWxpbmtzPVxcXCJ0cnVlXFxcIiBtYXgtc2l6ZT1cXFwiNFxcXCIgdG90YWwtaXRlbXM9XFxcIihsZWFndWVUZWFtcyB8IGFjdGl2ZVRlYW1GaWx0ZXI6dGVhbU9wdGlvbnMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCkubGVuZ3RoXFxcIiBpdGVtcy1wZXItcGFnZT1cXFwidGVhbXNQZXJQYWdlXFxcIiBuZy1tb2RlbD1cXFwiY3VycmVudFRlYW1QYWdlXFxcIiBjbGFzcz1cXFwicGFnaW5hdGlvbi1tZFxcXCIgcHJldmlvdXMtdGV4dD1cXFwiJmxzYXF1bztcXFwiIG5leHQtdGV4dD1cXFwiJnJzYXF1bztcXFwiIGZpcnN0LXRleHQ9XFxcIiZsYXF1bztcXFwiIGxhc3QtdGV4dD1cXFwiJnJhcXVvO1xcXCI+PC9wYWdpbmF0aW9uPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL2xlYWd1ZXMuam9pbi50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4vbGVhZ3Vlcy5qb2luLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJqb2luLWxlYWd1ZXMtaGVhZGVyLXJvdyByb3dcXFwiPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTkgY29sLW1kLTlcXFwiPlxcblwiICtcbiAgICBcIiAgICA8aDM+Sm9pbiBhIGxlYWd1ZS4uLjwvaDM+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0zIGNvbC1tZC0zXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiam9pbi1sZWFndWVzLWJ0bi1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjcmVhdGUtbGVhZ3VlLWJ0biBidG4gYnRuLXByaW1hcnlcXFwiIG5nLWNsaWNrPVxcXCJjcmVhdGVMZWFndWUoKVxcXCI+Q3JlYXRlIExlYWd1ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxocj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJqb2luLWxlYWd1ZXMtdGFic1xcXCI+XFxuXCIgK1xuICAgIFwiICA8dWwgY2xhc3M9XFxcIm5hdiBuYXYtdGFic1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxsaSBuZy1jbGFzcz1cXFwieydhY3RpdmUnOiBpc1B1YmxpYygpfVxcXCIgbmctY2xpY2s9XFxcInJlc2V0U2VhcmNoKClcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxhIG5nLWNsaWNrPVxcXCJwdWJsaWNMZWFndWVzKHNlbGVjdGVkU2Vhc29uSWQpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtdW5sb2NrIGZhLWZ3XFxcIiB0aXRsZT1cXFwiUHVibGljIGxlYWd1ZXNcXFwiPjwvaT4gUHVibGljIDxzcGFuIGNsYXNzPVxcXCJsZWFndWVzXFxcIj5MZWFndWVzPC9zcGFuPjwvYT5cXG5cIiArXG4gICAgXCIgICAgPC9saT5cXG5cIiArXG4gICAgXCIgICAgPGxpIG5nLWNsYXNzPVxcXCJ7J2FjdGl2ZSc6ICFpc1B1YmxpYygpfVxcXCIgbmctY2xpY2s9XFxcInJlc2V0U2VhcmNoKClcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxhIG5nLWNsaWNrPVxcXCJwcml2YXRlTGVhZ3VlcyhzZWxlY3RlZFNlYXNvbklkKVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWxvY2sgZmEtZndcXFwiIHRpdGxlPVxcXCJQcml2YXRlIGxlYWd1ZXNcXFwiPjwvaT4gUHJpdmF0ZSA8c3BhbiBjbGFzcz1cXFwibGVhZ3Vlc1xcXCI+TGVhZ3Vlczwvc3Bhbj48L2E+XFxuXCIgK1xuICAgIFwiICAgIDwvbGk+XFxuXCIgK1xuICAgIFwiICA8L3VsPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwic2Vhc29uc1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctY2hhbmdlPVxcXCJjaGFuZ2VTZWFzb24oc2VsZWN0ZWRTZWFzb25JZClcXFwiIG5nLW1vZGVsPVxcXCJzZWxlY3RlZFNlYXNvbklkXFxcIiBuZy1vcHRpb25zPVxcXCJjdXJyZW50U2Vhc29uLmlkIGFzIGN1cnJlbnRTZWFzb24ubmFtZSBmb3IgY3VycmVudFNlYXNvbiBpbiBjdXJyZW50U2Vhc29uc1xcXCI+PC9zZWxlY3Q+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwIGN1c3RvbS1zZWFyY2gtZm9ybSBmaWx0ZXItbGVhZ3VlLWpvaW5cXFwiPlxcblwiICtcbiAgICBcIiAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIlNlYXJjaC4uLlxcXCIgbmctbW9kZWw9XFxcImxlYWd1ZVF1ZXJ5XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0blxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXNlYXJjaFxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICA8L3NwYW4+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJsZWFndWVzLWNvbnRlbnRcXFwiIHVpLXZpZXc9XFxcImpvaW5MZWFndWVzQ29udGVudFxcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4vcHJpdmF0ZS9sZWFndWVzLmpvaW4ucHJpdmF0ZS50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4vcHJpdmF0ZS9sZWFndWVzLmpvaW4ucHJpdmF0ZS50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwicHJpdmF0ZS1sZWFndWVzIGxpc3QtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICA8YSBuZy1yZXBlYXQ9XFxcImxlYWd1ZSBpbiBwcml2YXRlTGVhZ3VlcyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0IHwgb2Zmc2V0RmlsdGVyOihjdXJyZW50TGVhZ3VlUGFnZS0xKSpsZWFndWVzUGVyUGFnZSB8IGxpbWl0VG86bGVhZ3Vlc1BlclBhZ2VcXFwiIG5nLWNsaWNrPVxcXCJzaG93TGVhZ3VlKGxlYWd1ZSlcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZWFndWUtbmFtZSBjb2wtc20tNSBjb2wtbWQtNVxcXCI+e3tsZWFndWUubmFtZX19PGJyPjxzcGFuIGNsYXNzPVxcXCJwcml2YXRlLWxlYWd1ZS1tZXRhXFxcIj57e3N0YXJ0cyhsZWFndWUpfX08L3NwYW4+PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNyBjb2wtbWQtN1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJwcml2YXRlLWxlYWd1ZS1tZXRhXFxcIj57e2xlYWd1ZS5mb3JtYXR9fTxicj5Db21taXNoOiB7e2xlYWd1ZS5jb21taXNoX25hbWVzLmpvaW4oJywgJyl9fTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJhZGdlXFxcIj57e2xlYWd1ZS50ZWFtX2NvdW50fX0gdGVhbTxzcGFuIG5nLXNob3c9XFxcImxlYWd1ZS50ZWFtX2NvdW50ICE9PSAxXFxcIj5zPC9zcGFuPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2E+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwicHJpdmF0ZS1sZWFndWUtcGFnaW5hdGlvblxcXCIgbmctc2hvdz1cXFwicHJpdmF0ZUxlYWd1ZXMubGVuZ3RoID4gbGVhZ3Vlc1BlclBhZ2UgJiYgKHByaXZhdGVMZWFndWVzIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aCA+IDBcXFwiPlxcblwiICtcbiAgICBcIiAgICA8cGFnaW5hdGlvbiBib3VuZGFyeS1saW5rcz1cXFwidHJ1ZVxcXCIgbWF4LXNpemU9XFxcIjRcXFwiIHRvdGFsLWl0ZW1zPVxcXCIocHJpdmF0ZUxlYWd1ZXMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCkubGVuZ3RoXFxcIiBpdGVtcy1wZXItcGFnZT1cXFwibGVhZ3Vlc1BlclBhZ2VcXFwiIG5nLW1vZGVsPVxcXCJjdXJyZW50TGVhZ3VlUGFnZVxcXCIgY2xhc3M9XFxcInBhZ2luYXRpb24tbWRcXFwiIHByZXZpb3VzLXRleHQ9XFxcIiZsc2FxdW87XFxcIiBuZXh0LXRleHQ9XFxcIiZyc2FxdW87XFxcIiBmaXJzdC10ZXh0PVxcXCImbGFxdW87XFxcIiBsYXN0LXRleHQ9XFxcIiZyYXF1bztcXFwiPjwvcGFnaW5hdGlvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1pbmZvXFxcIiBuZy1zaG93PVxcXCIocHJpdmF0ZUxlYWd1ZXMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCkubGVuZ3RoID09IDBcXFwiPlxcblwiICtcbiAgICBcIiAgTm8gbGVhZ3VlcyBmb3VuZFxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL3B1YmxpYy9sZWFndWVzLmpvaW4ucHVibGljLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9wdWJsaWMvbGVhZ3Vlcy5qb2luLnB1YmxpYy50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwicHVibGljLWxlYWd1ZXMgbGlzdC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxhIG5nLXJlcGVhdD1cXFwibGVhZ3VlIGluIHB1YmxpY0xlYWd1ZXMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCB8IG9mZnNldEZpbHRlcjooY3VycmVudExlYWd1ZVBhZ2UtMSkqbGVhZ3Vlc1BlclBhZ2UgfCBsaW1pdFRvOmxlYWd1ZXNQZXJQYWdlXFxcIiBuZy1jbGljaz1cXFwic2hvd0xlYWd1ZShsZWFndWUpXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGVhZ3VlLW5hbWUgY29sLXNtLTUgY29sLW1kLTVcXFwiPnt7bGVhZ3VlLm5hbWV9fTxicj48c3BhbiBjbGFzcz1cXFwicHVibGljLWxlYWd1ZS1tZXRhXFxcIj57e3N0YXJ0cyhsZWFndWUpfX08L3NwYW4+PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTcgY29sLW1kLTdcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwicHVibGljLWxlYWd1ZS1tZXRhXFxcIj57e2xlYWd1ZS5mb3JtYXR9fTxicj5Db21taXNoOiB7e2xlYWd1ZS5jb21taXNoX25hbWVzLmpvaW4oJywgJyl9fTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJhZGdlXFxcIj57e2xlYWd1ZS50ZWFtX2NvdW50fX0gdGVhbTxzcGFuIG5nLXNob3c9XFxcImxlYWd1ZS50ZWFtX2NvdW50ICE9PSAxXFxcIj5zPC9zcGFuPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2E+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwicHVibGljLWxlYWd1ZS1wYWdpbmF0aW9uXFxcIiBuZy1zaG93PVxcXCJwdWJsaWNMZWFndWVzLmxlbmd0aCA+IGxlYWd1ZXNQZXJQYWdlICYmIChwdWJsaWNMZWFndWVzIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aCA+IDBcXFwiPlxcblwiICtcbiAgICBcIiAgICA8cGFnaW5hdGlvbiBib3VuZGFyeS1saW5rcz1cXFwidHJ1ZVxcXCIgbWF4LXNpemU9XFxcIjRcXFwiIHRvdGFsLWl0ZW1zPVxcXCIocHVibGljTGVhZ3VlcyB8ZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aFxcXCIgaXRlbXMtcGVyLXBhZ2U9XFxcImxlYWd1ZXNQZXJQYWdlXFxcIiBuZy1tb2RlbD1cXFwiY3VycmVudExlYWd1ZVBhZ2VcXFwiIGNsYXNzPVxcXCJwYWdpbmF0aW9uLW1kXFxcIiBwcmV2aW91cy10ZXh0PVxcXCImbHNhcXVvO1xcXCIgbmV4dC10ZXh0PVxcXCImcnNhcXVvO1xcXCIgZmlyc3QtdGV4dD1cXFwiJmxhcXVvO1xcXCIgbGFzdC10ZXh0PVxcXCImcmFxdW87XFxcIj48L3BhZ2luYXRpb24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtaW5mb1xcXCIgbmctc2hvdz1cXFwiKHB1YmxpY0xlYWd1ZXMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCkubGVuZ3RoID09IDBcXFwiPlxcblwiICtcbiAgICBcIiAgTm8gbGVhZ3VlcyBmb3VuZFxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9sZWFndWVzLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvbGVhZ3Vlcy50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiB1aS12aWV3PVxcXCJsZWFndWVzQ29udGVudFxcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL21hbmFnZS9sZWFndWVzLm1hbmFnZS50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL21hbmFnZS9sZWFndWVzLm1hbmFnZS50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibWFuYWdlLWxlYWd1ZXMtaGVhZGVyLXJvdyByb3dcXFwiPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTkgY29sLW1kLTlcXFwiPlxcblwiICtcbiAgICBcIiAgICA8aDM+SSBtYW5hZ2UgdGhlc2UgbGVhZ3Vlcy4uLjwvaDM+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0zIGNvbC1tZC0zXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwibWFuYWdlLWxlYWd1ZXMtYnRuLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNyZWF0ZS1sZWFndWUtYnRuIGJ0biBidG4tcHJpbWFyeVxcXCIgbmctY2xpY2s9XFxcImNyZWF0ZUxlYWd1ZSgpXFxcIj5DcmVhdGUgTGVhZ3VlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGhyPlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjwhLS1pZiB5b3UgaGF2ZSBtYW5hZ2VkIGxlYWd1ZXMgKGkuZS4gaWYgeW91J3JlIGEgY29tbWlzaCktLT5cXG5cIiArXG4gICAgXCI8ZGl2IG5nLXNob3c9XFxcIm1hbmFnZWRMZWFndWVzLmxlbmd0aCA+IDBcXFwiIGNsYXNzPVxcXCJsZWFndWVzLWNvbnRhaW5lclxcXCI+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcIm1hbmFnZWQtbGVhZ3VlcyBsaXN0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxhIG5nLXJlcGVhdD1cXFwibGVhZ3VlIGluIG1hbmFnZWRMZWFndWVzIHwgb2Zmc2V0RmlsdGVyOihjdXJyZW50TGVhZ3VlUGFnZS0xKSpsZWFndWVzUGVyUGFnZSB8IGxpbWl0VG86bGVhZ3Vlc1BlclBhZ2VcXFwiIG5nLWNsaWNrPVxcXCJ2aWV3TGVhZ3VlKGxlYWd1ZSlcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxlYWd1ZS1uYW1lIGNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdW5sb2NrIGZhLWZ3XFxcIiB0aXRsZT1cXFwiTXkgUHVibGljIGxlYWd1ZVxcXCIgbmctc2hvdz1cXFwibGVhZ3VlLnB1YmxpY1xcXCI+PC9pPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1sb2NrIGZhLWZ3XFxcIiB0aXRsZT1cXFwiTXkgUHJpdmF0ZSBsZWFndWVcXFwiIG5nLXNob3c9XFxcIiFsZWFndWUucHVibGljXFxcIj48L2k+IHt7bGVhZ3VlLm5hbWV9fTwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwic3RhcnQtd2Vla1xcXCI+e3tzdGFydHMobGVhZ3VlKX19PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJhZGdlXFxcIj57e2xlYWd1ZS50ZWFtX2NvdW50fX0gdGVhbXM8L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPC9hPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCIgICAgPCEtLWR5bmFtaWMgcGFnaW5hdGlvbi0tPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJtYW5hZ2UtbGVhZ3VlLXBhZ2luYXRpb25cXFwiIG5nLXNob3c9XFxcIm1hbmFnZWRMZWFndWVzLmxlbmd0aCA+IGxlYWd1ZXNQZXJQYWdlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxwYWdpbmF0aW9uIGJvdW5kYXJ5LWxpbmtzPVxcXCJ0cnVlXFxcIiBtYXgtc2l6ZT1cXFwiNFxcXCIgdG90YWwtaXRlbXM9XFxcIm1hbmFnZWRMZWFndWVzLmxlbmd0aFxcXCIgaXRlbXMtcGVyLXBhZ2U9XFxcImxlYWd1ZXNQZXJQYWdlXFxcIiBuZy1tb2RlbD1cXFwiY3VycmVudExlYWd1ZVBhZ2VcXFwiIGNsYXNzPVxcXCJwYWdpbmF0aW9uLW1kXFxcIiBwcmV2aW91cy10ZXh0PVxcXCImbHNhcXVvO1xcXCIgbmV4dC10ZXh0PVxcXCImcnNhcXVvO1xcXCIgZmlyc3QtdGV4dD1cXFwiJmxhcXVvO1xcXCIgbGFzdC10ZXh0PVxcXCImcmFxdW87XFxcIj48L3BhZ2luYXRpb24+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IHN0eWxlPVxcXCJjbGVhcjogYm90aDtcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjwhLS1pZiB5b3UgaGF2ZSBubyBtYW5hZ2VkIGxlYWd1ZXMtLT5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1pbmZvXFxcIiBuZy1zaG93PVxcXCJtYW5hZ2VkTGVhZ3Vlcy5sZW5ndGggPT0gMFxcXCI+XFxuXCIgK1xuICAgIFwiICBZb3UgYXJlIG5vdCB0aGUgY29tbWlzaCBvZiBhbnkgbGVhZ3Vlcy4gPGEgY2xhc3M9XFxcImFsZXJ0LWxpbmtcXFwiIG5nLWNsaWNrPVxcXCJjcmVhdGVMZWFndWUoc2Vhc29uKVxcXCI+Q3JlYXRlIG9uZTwvYT4gYW5kIGludml0ZSBhbGwgeW91ciBmcmllbmRzLlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9teS9sZWFndWVzLm15LnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvbXkvbGVhZ3Vlcy5teS50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibXktbGVhZ3Vlcy1oZWFkZXItcm93IHJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOSBjb2wtbWQtOVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxoMz5JIGFtIGluIHRoZXNlIGxlYWd1ZXMuLi48L2gzPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMyBjb2wtbWQtM1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcIm15LWxlYWd1ZXMtYnRuLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImpvaW4tbGVhZ3VlLWJ0biBidG4gYnRuLXByaW1hcnlcXFwiIG5nLWNsaWNrPVxcXCJqb2luTGVhZ3VlKClcXFwiPkpvaW4gTGVhZ3VlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGhyPlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjxkaXYgbmctc2hvdz1cXFwibGVhZ3Vlcy5sZW5ndGggPiAwXFxcIiBjbGFzcz1cXFwibGVhZ3Vlcy1jb250YWluZXJcXFwiPlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwibXktbGVhZ3VlcyBsaXN0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGEgbmctcmVwZWF0PVxcXCJsZWFndWUgaW4gbGVhZ3VlcyB8IG9mZnNldEZpbHRlcjooY3VycmVudExlYWd1ZVBhZ2UtMSkqbGVhZ3Vlc1BlclBhZ2UgfCBsaW1pdFRvOmxlYWd1ZXNQZXJQYWdlXFxcIiBuZy1jbGljaz1cXFwidmlld0xlYWd1ZShsZWFndWUpXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwibGVhZ3VlLW5hbWUgY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdW5sb2NrIGZhLWZ3XFxcIiB0aXRsZT1cXFwiTXkgUHVibGljIGxlYWd1ZVxcXCIgbmctc2hvdz1cXFwibGVhZ3VlLnB1YmxpY1xcXCI+PC9pPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtbG9jayBmYS1md1xcXCIgdGl0bGU9XFxcIk15IFByaXZhdGUgbGVhZ3VlXFxcIiBuZy1zaG93PVxcXCIhbGVhZ3VlLnB1YmxpY1xcXCI+PC9pPiB7e2xlYWd1ZS5uYW1lfX08L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInN0YXJ0LXdlZWtcXFwiPnt7c3RhcnRzKGxlYWd1ZSl9fTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJhZGdlXFxcIj57e2xlYWd1ZS50ZWFtX2NvdW50fX0gdGVhbXM8L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9hPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJteS1sZWFndWUtcGFnaW5hdGlvblxcXCIgbmctc2hvdz1cXFwibGVhZ3Vlcy5sZW5ndGggPiBsZWFndWVzUGVyUGFnZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxwYWdpbmF0aW9uIGJvdW5kYXJ5LWxpbmtzPVxcXCJ0cnVlXFxcIiBtYXgtc2l6ZT1cXFwiNFxcXCIgdG90YWwtaXRlbXM9XFxcImxlYWd1ZXMubGVuZ3RoXFxcIiBpdGVtcy1wZXItcGFnZT1cXFwibGVhZ3Vlc1BlclBhZ2VcXFwiIG5nLW1vZGVsPVxcXCJjdXJyZW50TGVhZ3VlUGFnZVxcXCIgY2xhc3M9XFxcInBhZ2luYXRpb24tbWRcXFwiIHByZXZpb3VzLXRleHQ9XFxcIiZsc2FxdW87XFxcIiBuZXh0LXRleHQ9XFxcIiZyc2FxdW87XFxcIiBmaXJzdC10ZXh0PVxcXCImbGFxdW87XFxcIiBsYXN0LXRleHQ9XFxcIiZyYXF1bztcXFwiPjwvcGFnaW5hdGlvbj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPGRpdiBzdHlsZT1cXFwiY2xlYXI6IGJvdGg7XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8IS0taWYgeW91IGhhdmUgbm8gbGVhZ3Vlcy0tPlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWluZm9cXFwiIG5nLXNob3c9XFxcImxlYWd1ZXMubGVuZ3RoID09IDBcXFwiPlxcblwiICtcbiAgICBcIiAgWW91IGFyZSBpbiBubyBsZWFndWVzLiA8YSBjbGFzcz1cXFwiYWxlcnQtbGlua1xcXCIgbmctY2xpY2s9XFxcImpvaW5MZWFndWUoc2Vhc29uKVxcXCI+Sm9pbjwvYT4gb25lIHRvZGF5LlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvcGxheS9sZWFndWVzL3BsYXkubGVhZ3Vlcy50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9wbGF5L2xlYWd1ZXMvcGxheS5sZWFndWVzLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IG5nLXNob3c9XFxcImxlYWd1ZXMubGVuZ3RoID4gMFxcXCIgY2xhc3M9XFxcImxlYWd1ZXMtY29udGFpbmVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcIm15LWxlYWd1ZXMgbGlzdC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxhIG5nLXJlcGVhdD1cXFwibGVhZ3VlIGluIGxlYWd1ZXMgfCBtYW5hZ2VkTGVhZ3VlRmlsdGVyOmxlYWd1ZU9wdGlvbnMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCB8IG9mZnNldEZpbHRlcjooY3VycmVudExlYWd1ZVBhZ2UtMSkqbGVhZ3Vlc1BlclBhZ2UgfCBsaW1pdFRvOmxlYWd1ZXNQZXJQYWdlXFxcIiBuZy1jbGljaz1cXFwidmlld0xlYWd1ZShsZWFndWUpXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwibGVhZ3VlLW5hbWUgY29sLXNtLTUgY29sLW1kLTVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY29tbWVudCBmYS1md1xcXCIgbmctc2hvdz1cXFwiIWlzQ29tbWlzaChsZWFndWUpICYmIGxlYWd1ZS5tZXNzYWdlLmxlbmd0aCA+IDBcXFwiIHRpdGxlPVxcXCJIYXMgbWVzc2FnZSBmcm9tIGNvbW1pc2hcXFwiPjwvaT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXVzZXIgZmEtZndcXFwiIHRpdGxlPVxcXCJNeSBsZWFndWVcXFwiIG5nLXNob3c9XFxcImlzQ29tbWlzaChsZWFndWUpXFxcIj48L2k+IHt7bGVhZ3VlLm5hbWV9fTxicj48c3BhbiBjbGFzcz1cXFwibXktbGVhZ3VlLW1ldGFcXFwiPnt7c3RhcnRzKGxlYWd1ZSl9fTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTcgY29sLW1kLTdcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwibXktbGVhZ3VlLW1ldGFcXFwiPnt7bGVhZ3VlLmZvcm1hdH19PGJyPkNvbW1pc2g6IHt7bGVhZ3VlLmNvbW1pc2hfbmFtZXMuam9pbignLCAnKX19PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYmFkZ2VcXFwiPjxzcGFuIG5nLXNob3c9XFxcImxlYWd1ZS5lbGltaW5hdGlvblxcXCI+e3tsZWFndWUuYWxpdmVfdGVhbV9jb3VudH19Lzwvc3Bhbj57e2xlYWd1ZS50ZWFtX2NvdW50fX0gdGVhbTxzcGFuIG5nLXNob3c9XFxcImxlYWd1ZS50ZWFtX2NvdW50ICE9PSAxXFxcIj5zPC9zcGFuPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2E+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcIm15LWxlYWd1ZS1wYWdpbmF0aW9uXFxcIiBuZy1zaG93PVxcXCJsZWFndWVzLmxlbmd0aCA+IGxlYWd1ZXNQZXJQYWdlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPHBhZ2luYXRpb24gYm91bmRhcnktbGlua3M9XFxcInRydWVcXFwiIG1heC1zaXplPVxcXCI0XFxcIiB0b3RhbC1pdGVtcz1cXFwibGVhZ3Vlcy5sZW5ndGhcXFwiIGl0ZW1zLXBlci1wYWdlPVxcXCJsZWFndWVzUGVyUGFnZVxcXCIgbmctbW9kZWw9XFxcImN1cnJlbnRMZWFndWVQYWdlXFxcIiBjbGFzcz1cXFwicGFnaW5hdGlvbi1tZFxcXCIgcHJldmlvdXMtdGV4dD1cXFwiJmxzYXF1bztcXFwiIG5leHQtdGV4dD1cXFwiJnJzYXF1bztcXFwiIGZpcnN0LXRleHQ9XFxcIiZsYXF1bztcXFwiIGxhc3QtdGV4dD1cXFwiJnJhcXVvO1xcXCI+PC9wYWdpbmF0aW9uPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IHN0eWxlPVxcXCJjbGVhcjogYm90aDtcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjwhLS1pZiB5b3UgaGF2ZSBubyBsZWFndWVzLS0+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibGVhZ3Vlcy1hbGVydCBhbGVydCBhbGVydC1pbmZvXFxcIiBuZy1zaG93PVxcXCIobGVhZ3VlcyB8IG1hbmFnZWRMZWFndWVGaWx0ZXI6bGVhZ3VlT3B0aW9ucyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0KS5sZW5ndGggPT0gMFxcXCI+XFxuXCIgK1xuICAgIFwiICBObyBsZWFndWVzIGZvdW5kXFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9wbGF5L3BsYXkudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvcGxheS9wbGF5LnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJwbGF5LWhlYWRlci1yb3cgcm93XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS03IGNvbC1tZC03XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGgzIGNsYXNzPVxcXCJteS10ZWFtcy1oZWFkZXJcXFwiPk15IFRlYW1zICYgTGVhZ3VlczwvaDM+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS01IGNvbC1tZC01XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicGxheS1idG4tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiam9pbi1sZWFndWUtYnRuIGJ0biBidG4tcHJpbWFyeVxcXCIgbmctY2xpY2s9XFxcImpvaW5MZWFndWUoKVxcXCI+Sm9pbiBMZWFndWU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNyZWF0ZS1sZWFndWUtYnRuIGJ0biBidG4tcHJpbWFyeVxcXCIgbmctY2xpY2s9XFxcImNyZWF0ZUxlYWd1ZSgpXFxcIj5DcmVhdGUgTGVhZ3VlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGhyPlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcInRlYW1zLWxlYWd1ZXMtdGFic1xcXCI+XFxuXCIgK1xuICAgIFwiICA8dWwgY2xhc3M9XFxcIm5hdiBuYXYtdGFic1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxsaSBuZy1jbGFzcz1cXFwieydhY3RpdmUnOiBpc1N0YXRlKFsncHJpdmF0ZS5wbGF5LnRlYW1zJ10pfVxcXCIgbmctY2xpY2s9XFxcInJlc2V0U2VhcmNoKClcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxhIG5nLWNsaWNrPVxcXCJteVRlYW1zKHNlbGVjdGVkU2Vhc29uSWQpXFxcIj48c3BhbiBjbGFzcz1cXFwibXktdGVhbXNcXFwiPk15IFRlYW1zPC9zcGFuPjwvYT5cXG5cIiArXG4gICAgXCIgICAgPC9saT5cXG5cIiArXG4gICAgXCIgICAgPGxpIG5nLWNsYXNzPVxcXCJ7J2FjdGl2ZSc6IGlzU3RhdGUoWydwcml2YXRlLnBsYXkubGVhZ3VlcyddKX1cXFwiIG5nLWNsaWNrPVxcXCJyZXNldFNlYXJjaCgpXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YSBuZy1jbGljaz1cXFwibXlMZWFndWVzKHNlbGVjdGVkU2Vhc29uSWQpXFxcIj48c3BhbiBjbGFzcz1cXFwibXktbGVhZ3Vlc1xcXCI+TXkgTGVhZ3Vlczwvc3Bhbj48L2E+XFxuXCIgK1xuICAgIFwiICAgIDwvbGk+XFxuXCIgK1xuICAgIFwiICA8L3VsPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwic2Vhc29uc1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctY2hhbmdlPVxcXCJjaGFuZ2VTZWFzb24oc2VsZWN0ZWRTZWFzb25JZClcXFwiIG5nLW1vZGVsPVxcXCJzZWxlY3RlZFNlYXNvbklkXFxcIiBuZy1vcHRpb25zPVxcXCJzdGFydGVkU2Vhc29uLmlkIGFzIHN0YXJ0ZWRTZWFzb24ubmFtZSBmb3Igc3RhcnRlZFNlYXNvbiBpbiBzdGFydGVkU2Vhc29uc1xcXCI+PC9zZWxlY3Q+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwIGN1c3RvbS1zZWFyY2gtZm9ybSBmaWx0ZXItdGVhbS1sZWFndWVcXFwiPlxcblwiICtcbiAgICBcIiAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIlNlYXJjaC4uLlxcXCIgbmctbW9kZWw9XFxcInF1ZXJ5XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0blxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXNlYXJjaFxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICA8L3NwYW4+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJwbGF5LWNvbnRlbnRcXFwiIHVpLXZpZXc9XFxcInBsYXlDb250ZW50XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL3BsYXkvdGVhbXMvcGxheS50ZWFtcy50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9wbGF5L3RlYW1zL3BsYXkudGVhbXMudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgbmctc2hvdz1cXFwidGVhbXMubGVuZ3RoID4gMFxcXCIgY2xhc3M9XFxcImxlYWd1ZXMtY29udGFpbmVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcIm15LXRlYW1zIGxpc3QtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICA8YSBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIiBuZy1jbGFzcz1cXFwieydpbmFjdGl2ZSc6ICF0ZWFtLmFjdGl2ZSB8fCAhdGVhbS5hbGl2ZX1cXFwiIG5nLXJlcGVhdD1cXFwidGVhbSBpbiB0ZWFtcyB8IG9yZGVyQnk6W2luUGxheSwgJ25hbWUnXSB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0IHwgb2Zmc2V0RmlsdGVyOihjdXJyZW50VGVhbVBhZ2UtMSkqdGVhbXNQZXJQYWdlIHwgbGltaXRUbzp0ZWFtc1BlclBhZ2VcXFwiIG5nLWNsaWNrPVxcXCJzaG93VGVhbSh0ZWFtKVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImxlYWd1ZS1uYW1lIGNvbC1zbS01IGNvbC1tZC01XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWNvbW1lbnQgZmEtZndcXFwiIG5nLXNob3c9XFxcInRlYW0ubWVzc2FnZS5sZW5ndGggPiAwXFxcIiB0aXRsZT1cXFwiSGFzIG1lc3NhZ2UgZnJvbSBjb21taXNoXFxcIj48L2k+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIG5nLWNsYXNzPVxcXCJ7J2RlYWQtdGVhbS1uYW1lJzogIXRlYW0uYWN0aXZlIHx8ICF0ZWFtLmFsaXZlfVxcXCI+e3t0ZWFtLm5hbWV9fTwvc3Bhbj48YnI+PHNwYW4gY2xhc3M9XFxcInRlYW0tbGVhZ3VlXFxcIj57e3RlYW0ubGVhZ3VlLm5hbWV9fTwvc3Bhbj48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS03IGNvbC1tZC03XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImN1cnJlbnQtcGlja1xcXCIgbmctY2xhc3M9XFxcInsnbm8tcGljayc6IHRlYW0uY3VycmVudF9waWNrLndhcm5pbmcgPT0gdHJ1ZX1cXFwiIG5nLXNob3c9XFxcInRlYW0uYWN0aXZlICYmIHRlYW0uc3RhcnRlZFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXt7cGlja1N0YXR1cyh0ZWFtLmN1cnJlbnRfcGljayl9fSBmYS1md1xcXCI+PC9pPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIFsgPHNwYW4gY2xhc3M9XFxcImN1cnJlbnQtbG9zZXItbmFtZVxcXCI+e3t0ZWFtLmN1cnJlbnRfcGljay5uYW1lfX08L3NwYW4+PHNwYW4gY2xhc3M9XFxcImN1cnJlbnQtbG9zZXItYWJicmV2XFxcIj57e3RlYW0uY3VycmVudF9waWNrLmFiYnJldn19PC9zcGFuPiBdXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGJyPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjdXJyZW50LXBpY2tcXFwiPnt7dGVhbS5sZWFndWUuZm9ybWF0fX08L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImN1cnJlbnQtcGlja1xcXCIgbmctc2hvdz1cXFwidGVhbS5hY3RpdmUgJiYgIXRlYW0uc3RhcnRlZFxcXCI+U3RhcnRzIHt7dGVhbS5zdGFydF93ZWVrfX08YnI+e3t0ZWFtLmxlYWd1ZS5mb3JtYXR9fTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImluYWN0aXZlLXRlYW0gY3VycmVudC1waWNrXFxcIiBuZy1zaG93PVxcXCIhdGVhbS5hY3RpdmVcXFwiPlRlYW0gaGFzIGJlZW4gZGVhY3RpdmF0ZWQ8L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJiYWRnZVxcXCI+e3t0ZWFtLmNvcnJlY3RfcGlja3NfY291bnR9fSBsb3NlcjxzcGFuIG5nLXNob3c9XFxcInRlYW0uY29ycmVjdF9waWNrc19jb3VudCAhPT0gMVxcXCI+czwvc3Bhbj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9hPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJteS1sZWFndWUtcGFnaW5hdGlvblxcXCIgbmctc2hvdz1cXFwidGVhbXMubGVuZ3RoID4gdGVhbXNQZXJQYWdlICYmICh0ZWFtcyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0KS5sZW5ndGggPiAwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPHBhZ2luYXRpb24gYm91bmRhcnktbGlua3M9XFxcInRydWVcXFwiIG1heC1zaXplPVxcXCI0XFxcIiB0b3RhbC1pdGVtcz1cXFwiKHRlYW1zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aFxcXCIgaXRlbXMtcGVyLXBhZ2U9XFxcInRlYW1zUGVyUGFnZVxcXCIgbmctbW9kZWw9XFxcImN1cnJlbnRUZWFtUGFnZVxcXCIgY2xhc3M9XFxcInBhZ2luYXRpb24tbWRcXFwiIHByZXZpb3VzLXRleHQ9XFxcIiZsc2FxdW87XFxcIiBuZXh0LXRleHQ9XFxcIiZyc2FxdW87XFxcIiBmaXJzdC10ZXh0PVxcXCImbGFxdW87XFxcIiBsYXN0LXRleHQ9XFxcIiZyYXF1bztcXFwiPjwvcGFnaW5hdGlvbj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPGRpdiBzdHlsZT1cXFwiY2xlYXI6IGJvdGg7XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJ0ZWFtcy1hbGVydCBhbGVydCBhbGVydC1pbmZvXFxcIiBuZy1zaG93PVxcXCIodGVhbXMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCkubGVuZ3RoID09IDBcXFwiPlxcblwiICtcbiAgICBcIiAgTm8gdGVhbXMgZm91bmRcXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL3RlYW0vZWRpdC90ZWFtLmVkaXQudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvdGVhbS9lZGl0L3RlYW0uZWRpdC50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+RWRpdCBUZWFtPC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxmb3JtIG5hbWU9XFxcImVkaXRUZWFtRm9ybVxcXCIgY2xhc3M9XFxcImVkaXQtdGVhbS1mb3JtIGZvcm0taG9yaXpvbnRhbFxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZT5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IoZWRpdFRlYW1Gb3JtLnRlYW1OYW1lKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKGVkaXRUZWFtRm9ybS50ZWFtTmFtZSl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgZm9yPVxcXCJ0ZWFtTmFtZVxcXCIgY2xhc3M9XFxcImNvbC1zbS0zIGNvbnRyb2wtbGFiZWxcXFwiPlRlYW0gTmFtZTo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS05XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxpbnB1dCBpZD1cXFwidGVhbU5hbWVcXFwiIG5hbWU9XFxcInRlYW1OYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgYSB0ZWFtIG5hbWVcXFwiIG5nLW1vZGVsPVxcXCJ0ZWFtRGF0YS5uYW1lXFxcIiBuZy1tYXhsZW5ndGg9XFxcIjMwXFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoZWRpdFRlYW1Gb3JtLnRlYW1OYW1lLCAncmVxdWlyZWQnKVxcXCI+UmVxdWlyZWQ8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJpbnB1dC1lcnJvclxcXCIgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihlZGl0VGVhbUZvcm0udGVhbU5hbWUsICdtYXhsZW5ndGgnKVxcXCI+VG9vIExvbmc8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IoZWRpdFRlYW1Gb3JtLnRlYW1OYW1lKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZm9ybT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwiZWRpdFRlYW1Gb3JtLiRpbnZhbGlkXFxcIiBuZy1jbGljaz1cXFwiZWRpdFRlYW0odGVhbURhdGEpXFxcIj5VcGRhdGU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL3RlYW0vbWVzc2FnZS90ZWFtLm1lc3NhZ2UudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvdGVhbS9tZXNzYWdlL3RlYW0ubWVzc2FnZS50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+VXBkYXRlIE1lc3NhZ2U8L2gzPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgPGZvcm0gbmFtZT1cXFwibWVzc2FnZUZvcm1cXFwiIGNsYXNzPVxcXCJ0ZWFtLW1lc3NhZ2UtZm9ybSBmb3JtLWhvcml6b250YWxcXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKG1lc3NhZ2VGb3JtLm1lc3NhZ2UpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IobWVzc2FnZUZvcm0ubWVzc2FnZSl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgZm9yPVxcXCJtZXNzYWdlXFxcIiBjbGFzcz1cXFwiY29sLXNtLTQgY29udHJvbC1sYWJlbFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICBUZWFtIE1lc3NhZ2U6IDxicj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobWVzc2FnZUZvcm0ubWVzc2FnZSwgJ21heGxlbmd0aCcpXFxcIj5bIFRvbyBMb25nIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLThcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPHRleHRhcmVhIGlkPVxcXCJtZXNzYWdlXFxcIiBuYW1lPVxcXCJtZXNzYWdlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgYSBtZXNzYWdlIHRvIHB1dCBvbiB0aGUgdGVhbSdzIHdhbGwuLi5cXFwiIHJvd3M9XFxcIjNcXFwiIG5nLW1heGxlbmd0aD1cXFwiNTAwXFxcIiBuZy1tb2RlbD1cXFwidGVhbURhdGEubWVzc2FnZVxcXCI+PC90ZXh0YXJlYT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImVtYWlsLXRlYW0tbWVzc2FnZS1jaGVja2JveFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIG5nLW1vZGVsPVxcXCJtZXNzYWdlT3B0aW9ucy5zZW5kRW1haWxcXFwiPiBlbWFpbCBtZXNzYWdlIHRvIGNvYWNoPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IobWVzc2FnZUZvcm0ubWVzc2FnZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctZGlzYWJsZWQ9XFxcIm1lc3NhZ2VGb3JtLiRwcmlzdGluZSB8fCBtZXNzYWdlRm9ybS4kaW52YWxpZFxcXCIgbmctY2xpY2s9XFxcInVwZGF0ZU1lc3NhZ2UodGVhbURhdGEsIG1lc3NhZ2VPcHRpb25zLnNlbmRFbWFpbClcXFwiPlVwZGF0ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvdGVhbS9waWNrL21hbnkvdGVhbS5waWNrLm1hbnkudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvdGVhbS9waWNrL21hbnkvdGVhbS5waWNrLm1hbnkudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgbmctcmVwZWF0PVxcXCJnYW1lIGluIGdhbWVzIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3RcXFwiIGNsYXNzPVxcXCJ3ZWVrLWdhbWVzIGxpc3QtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+PGg1IGNsYXNzPVxcXCJnYW1lLWRpc3BsYXlcXFwiPjxzbWFsbCBjbGFzcz1cXFwic3RhcnQtZGF0ZVxcXCI+e3tzdGFydHMoZ2FtZSl9fTwvc21hbGw+PC9oNT48L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwicm93IGdhbWUtc3F1YWRzXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTYgZ2FtZS1zcXVhZFxcXCIgbmctcmVwZWF0PVxcXCJzcXVhZCBpbiBnYW1lLnNxdWFkc1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGEgbmctY2xpY2s9XFxcInRvZ2dsZVBpY2soZ2FtZSwgc3F1YWQpXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIiBuZy1jbGFzcz1cXFwieydkaXNhYmxlZCc6IGlzRGlzYWJsZWQoZ2FtZSwgc3F1YWQpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgZ2FtZS1yb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3Bhbj48c3BhbiBuZy1zaG93PVxcXCIoJGluZGV4ID09PSAxKVxcXCI+QCA8L3NwYW4+PHNwYW4gbmctc2hvdz1cXFwic3F1YWQuc2VlZCA+IDBcXFwiPih7e3NxdWFkLnNlZWR9fSkgPC9zcGFuPnt7c3F1YWQubmFtZX19IDxzcGFuIGNsYXNzPVxcXCJyZWNvcmQtc2NvcmVcXFwiIG5nLXNob3c9XFxcIiFnYW1lLmNvbXBsZXRlXFxcIj5bIHt7c3F1YWQucmVjb3JkfX0gXTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwicmVjb3JkLXNjb3JlXFxcIiBuZy1zaG93PVxcXCJnYW1lLmNvbXBsZXRlXFxcIj5bIHt7Z2V0U2NvcmUoZ2FtZSwgJGluZGV4KX19IF0gPHNwYW4gbmctc2hvdz1cXFwiJGluZGV4ID09PSAxXFxcIj57e2dhbWUub3RfZGlzcGxheX19PC9zcGFuPjwvc3Bhbj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS17e3BpY2tTdGF0dXMoZ2FtZSwgc3F1YWQpfX0gcHVsbC1yaWdodFxcXCI+PC9pPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9hPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWluZm9cXFwiIG5nLXNob3c9XFxcIihnYW1lcyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0KS5sZW5ndGggPT0gMFxcXCI+XFxuXCIgK1xuICAgIFwiICBObyBnYW1lcyBmb3VuZFxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwic2F2ZS1waWNrLWJ0biBidG4gYnRuLXByaW1hcnlcXFwiIG5nLXNob3c9XFxcImlzQ29hY2godGVhbSlcXFwiIG5nLWRpc2FibGVkPVxcXCIhc2F2ZVBpY2tzRW5hYmxlZFxcXCIgbmctY2xpY2s9XFxcInNhdmVQaWNrcygpXFxcIj5TYXZlIFBpY2tzPC9idXR0b24+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS90ZWFtL3BpY2svb25lL3RlYW0ucGljay5vbmUudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvdGVhbS9waWNrL29uZS90ZWFtLnBpY2sub25lLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJ0ZWFtLW1lc3NhZ2UgYWxlcnQgYWxlcnQtd2FybmluZ1xcXCIgbmctc2hvdz1cXFwiaXNDb2FjaCh0ZWFtKSAmJiBpc0N1cnJlbnRQaWNrTG9ja2VkKClcXFwiPjxwIGNsYXNzPVxcXCJ0ZWFtLW1lc3NhZ2UtdGV4dFxcXCI+WW91ciBwaWNrIGZvciB7e3dlZWsubmFtZX19ICh7e3dlZWsudHlwZX19KSBpcyBsb2NrZWQgWyB7e2N1cnJlbnRQaWNrLnNxdWFkLm5hbWV9fSBdPC9wPjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgbmctcmVwZWF0PVxcXCJnYW1lIGluIGdhbWVzIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3RcXFwiIGNsYXNzPVxcXCJ3ZWVrLWdhbWVzIGxpc3QtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+PGg1IGNsYXNzPVxcXCJnYW1lLWRpc3BsYXlcXFwiPjxzbWFsbCBjbGFzcz1cXFwic3RhcnQtZGF0ZVxcXCI+e3tzdGFydHMoZ2FtZSl9fTwvc21hbGw+PC9oNT48L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwicm93IGdhbWUtc3F1YWRzXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTYgZ2FtZS1zcXVhZFxcXCIgbmctcmVwZWF0PVxcXCJzcXVhZCBpbiBnYW1lLnNxdWFkc1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGEgbmctY2xpY2s9XFxcIm1ha2VQaWNrKGdhbWUsIHNxdWFkKVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCIgbmctY2xhc3M9XFxcInsnZGlzYWJsZWQnOiBpc0Rpc2FibGVkKGdhbWUsIHNxdWFkKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93IGdhbWUtcm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiKCRpbmRleCA9PT0gMSlcXFwiPkAgPC9zcGFuPjxzcGFuIG5nLWNsYXNzPVxcXCJ7J2ludmFsaWQtc3F1YWQnOiBoYXNTcXVhZEJlZW5Vc2VkKGdhbWUsIHNxdWFkKX1cXFwiPjxzcGFuIG5nLXNob3c9XFxcInNxdWFkLnNlZWQgPiAwXFxcIj4oe3tzcXVhZC5zZWVkfX0pIDwvc3Bhbj57e3NxdWFkLm5hbWV9fSA8c3BhbiBjbGFzcz1cXFwicmVjb3JkLXNjb3JlXFxcIiBuZy1zaG93PVxcXCIhZ2FtZS5jb21wbGV0ZVxcXCI+WyB7e3NxdWFkLnJlY29yZH19IF08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInJlY29yZC1zY29yZVxcXCIgbmctc2hvdz1cXFwiZ2FtZS5jb21wbGV0ZVxcXCI+WyB7e2dldFNjb3JlKGdhbWUsICRpbmRleCl9fSBdIDxzcGFuIG5nLXNob3c9XFxcIiRpbmRleCA9PT0gMVxcXCI+e3tnYW1lLm90X2Rpc3BsYXl9fTwvc3Bhbj48L3NwYW4+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEte3twaWNrU3RhdHVzKGdhbWUsIHNxdWFkKX19IHB1bGwtcmlnaHRcXFwiPjwvaT5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvYT5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1pbmZvXFxcIiBuZy1zaG93PVxcXCIoZ2FtZXMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCkubGVuZ3RoID09IDBcXFwiPlxcblwiICtcbiAgICBcIiAgTm8gZ2FtZXMgZm91bmRcXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL3RlYW0vcGljay90ZWFtLnBpY2sudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvdGVhbS9waWNrL3RlYW0ucGljay50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibWFrZS1waWNrcy1oZWFkZXItcm93IHJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNyBjb2wtbWQtN1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxoMyBjbGFzcz1cXFwid2Vlay1kaXNwbGF5XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICB7e3dlZWsubmFtZX19XFxuXCIgK1xuICAgIFwiICAgIDwvaDM+XFxuXCIgK1xuICAgIFwiICAgIDxoNj48YSBuZy1jbGljaz1cXFwic2hvd1RlYW0odGVhbSlcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1jaGV2cm9uLWxlZnQgZmEtZndcXFwiPjwvaT4gPHNwYW4gY2xhc3M9XFxcInRlYW0tbGVhZ3VlLW5hbWVcXFwiPnt7dGVhbS5uYW1lfX08L3NwYW4+PC9hPjwvaDY+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS01IGNvbC1tZC01XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJzYXZlLXBpY2stYnRuIGJ0biBidG4tcHJpbWFyeVxcXCIgbmctc2hvdz1cXFwidGVhbS5sZWFndWUubWF4X3BpY2tzX3Blcl93ZWVrICE9IDEgJiYgaXNDb2FjaCh0ZWFtKVxcXCIgbmctZGlzYWJsZWQ9XFxcIiFzYXZlUGlja3NFbmFibGVkXFxcIiBuZy1jbGljaz1cXFwic2F2ZVBpY2tzKClcXFwiPlNhdmUgUGlja3M8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcInBpY2stbWVzc2FnZSBhbGVydCBhbGVydC1pbmZvXFxcIiBuZy1zaG93PVxcXCJpc0NvYWNoKHRlYW0pXFxcIj48cCBjbGFzcz1cXFwicGljay1tZXNzYWdlLXRleHRcXFwiPnt7cGlja01lc3NhZ2UodGVhbSwgd2Vlayl9fTwvcD48L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJwaWNrcy10YWJcXFwiPlxcblwiICtcbiAgICBcIiAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2LXRhYnNcXFwiPlxcblwiICtcbiAgICBcIiAgICA8bGkgY2xhc3M9XFxcImFjdGl2ZVxcXCI+PGE+UGlja3MgWyB7e3BpY2tDb3VudH19IF08L2E+PC9saT5cXG5cIiArXG4gICAgXCIgIDwvdWw+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cCBjdXN0b20tc2VhcmNoLWZvcm0gZmlsdGVyLWxlYWd1ZS1qb2luXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJTZWFyY2ggZ2FtZXMuLi5cXFwiIG5nLW1vZGVsPVxcXCJnYW1lUXVlcnlcXFwiPlxcblwiICtcbiAgICBcIiAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYnRuXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tc2VhcmNoXFxcIj48L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgIDwvc3Bhbj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgdWktdmlldz1cXFwicGlja0NvbnRlbnRcXFwiIGNsYXNzPVxcXCJwaWNrLWNvbnRlbnRcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvdGVhbS90ZWFtLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL3RlYW0vdGVhbS50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiB1aS12aWV3PVxcXCJ0ZWFtQ29udGVudFxcXCIgY2xhc3M9XFxcInRlYW0tY29udGVudFxcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS90ZWFtL3ZpZXcvcGlja3MvdGVhbS52aWV3LnBpY2tzLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL3RlYW0vdmlldy9waWNrcy90ZWFtLnZpZXcucGlja3MudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcImxvc2Vycy10YWJcXFwiPlxcblwiICtcbiAgICBcIiAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2LXRhYnNcXFwiPlxcblwiICtcbiAgICBcIiAgICA8bGkgY2xhc3M9XFxcImFjdGl2ZVxcXCI+PGE+TG9zZXJzIFsge3tjb3JyZWN0UGlja0NvdW50KChwaWNrcyB8IHdlZWtQaWNrc0ZpbHRlcjpzZWxlY3RlZFdlZWs6dGVhbURhdGEubGVhZ3VlLmVsaW1pbmF0aW9uKSl9fSBdPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICA8L3VsPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwibWFrZS1waWNrLWJ0bi1jb250YWluZXJcXFwiPlxcblwiICtcbiAgICBcIiAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcIm1ha2UtcGljay1idG4gYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1zaG93PVxcXCJpc0NvYWNoKHRlYW1EYXRhKVxcXCIgbmctY2xpY2s9XFxcIm1ha2VQaWNrKHRlYW1EYXRhKVxcXCIgbmctZGlzYWJsZWQ9XFxcInRlYW1EYXRhLmN1cnJlbnRfcGljay5sb2NrZWQgfHwgIXRlYW1EYXRhLnN0YXJ0ZWQgfHwgIXRlYW1EYXRhLmFjdGl2ZSB8fCAhdGVhbURhdGEuYWxpdmVcXFwiPjxzcGFuPlBpY2sgTG9zZXI8L3NwYW4+PHNwYW4gbmctc2hvdz1cXFwidGVhbURhdGEubGVhZ3VlLm1heF9waWNrc19wZXJfd2VlayAhPSAxXFxcIj5zPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJ3ZWVrc1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctY2hhbmdlPVxcXCJjaGFuZ2VXZWVrKHNlbGVjdGVkV2Vla1NsdWcpXFxcIiBuZy1tb2RlbD1cXFwic2VsZWN0ZWRXZWVrU2x1Z1xcXCIgbmctb3B0aW9ucz1cXFwibGVhZ3VlV2Vlay5zbHVnIGFzIGxlYWd1ZVdlZWsuZGlzcGxheSBmb3IgbGVhZ3VlV2VlayBpbiBsZWFndWVXZWVrc1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiXFxcIj5BbGwgV2Vla3M8L29wdGlvbj5cXG5cIiArXG4gICAgXCIgICAgPC9zZWxlY3Q+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJ0ZWFtLWNvbnRhaW5lclxcXCIgc3R5bGU9XFxcImNsZWFyOmJvdGg7XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcInRlYW0tcGlja3MgbGlzdC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxhIG5nLXJlcGVhdD1cXFwicGljayBpbiBwaWNrcyB8IHdlZWtQaWNrc0ZpbHRlcjpzZWxlY3RlZFdlZWs6dGVhbURhdGEubGVhZ3VlLmVsaW1pbmF0aW9uXFxcIiBjbGFzcz1cXFwidGVhbS1waWNrIGxpc3QtZ3JvdXAtaXRlbVxcXCIgbmctY2xpY2s9XFxcIm1ha2VQaWNrKHRlYW1EYXRhLCBwaWNrKVxcXCIgbmctY2xhc3M9XFxcInsnbG9ja2VkJzogIWlzQ29hY2godGVhbURhdGEpIHx8IHBpY2subG9ja2VkLCAnaW5jb3JyZWN0JzogcGljay5jb3JyZWN0ID09PSBmYWxzZSB8fCAocGljay5nYW1lICYmIHBpY2suZ2FtZS5pbmNvbXBsZXRlID09PSB0cnVlKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3ZWVrLW5hbWUgY29sLXNtLTcgY29sLW1kLTdcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEte3twaWNrU3RhdHVzKHBpY2spfX0gZmEtZncgcGljay1pY29uXFxcIj48L2k+IDxzcGFuIGNsYXNzPVxcXCJwaWNrLXNxdWFkXFxcIj48c3BhbiBjbGFzcz1cXFwicGljay1zcXVhZC1uYW1lXFxcIj5bIHt7cGljay5zcXVhZC5uYW1lfX0gXTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwicGljay1zcXVhZC1hYmJyZXZcXFwiPlsge3twaWNrLnNxdWFkLmFiYnJldn19IF08L3NwYW4+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiZ2FtZS1zdGFydFxcXCI+e3twaWNrTWV0YShwaWNrKX19PC9zcGFuPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ2FtZS1jb2x1bW4gY29sLXNtLTUgY29sLW1kLTVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2FtZVxcXCI+e3twaWNrLmdhbWUuZGlzcGxheX19PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvYT5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwibm8tcGlja3MtYWxlcnQgYWxlcnQgYWxlcnQtaW5mb1xcXCIgbmctc2hvdz1cXFwiKHBpY2tzIHwgd2Vla1BpY2tzRmlsdGVyOnNlbGVjdGVkV2Vlazp0ZWFtRGF0YS5sZWFndWUuZWxpbWluYXRpb24pLmxlbmd0aCA9PSAwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgTm8gcGlja3NcXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvdGVhbS92aWV3L3RlYW0udmlldy50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS90ZWFtL3ZpZXcvdGVhbS52aWV3LnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiIG5nLXNob3c9XFxcIiF0ZWFtRGF0YS5hY3RpdmVcXFwiPlRoaXMgdGVhbSBoYXMgYmVlbiBkZWFjdGl2YXRlZCBieSB0aGUgY29tbWlzaCBhbmQgd2lsbCBiZSB1bmFibGUgdG8gcGljayBsb3NlcnMuIDxhIGNsYXNzPVxcXCJhbGVydC1saW5rXFxcIiBuZy1jbGljaz1cXFwiY29udGFjdENvbW1pc2godGVhbURhdGEpXFxcIj5Db250YWN0IHRoZSBjb21taXNoPC9hPiBpZiB5b3UgaGF2ZSBxdWVzdGlvbnMuPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiBuZy1zaG93PVxcXCJ0ZWFtRGF0YS5hY3RpdmUgJiYgdGVhbURhdGEuYWxpdmUgJiYgdGVhbURhdGEuc3RhcnRlZCAmJiBoYXNOb3RFbm91Z2hQaWNrcyh0ZWFtRGF0YSlcXFwiPnt7cGlja1N1bW1hcnkodGVhbURhdGEpfX0gbG9zZXJzIHBpY2tlZCBmb3Ige3t0ZWFtRGF0YS5jdXJyZW50X3dlZWtfbmFtZX19PC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiBuZy1zaG93PVxcXCJ0ZWFtRGF0YS5hY3RpdmUgJiYgIXRlYW1EYXRhLmFsaXZlXFxcIj5UaGlzIHRlYW0gaXMgREVBRC4gU28gc29ycnkuPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtd2FybmluZ1xcXCIgbmctc2hvdz1cXFwiaXNDb2FjaCh0ZWFtRGF0YSkgJiYgdGVhbURhdGEuYWN0aXZlICYmICF0ZWFtRGF0YS5zdGFydGVkXFxcIj5Zb3UgY2FuIHBpY2sgbG9zZXJzIHdoZW4gdGhlIGxlYWd1ZSBzdGFydHMgLSB7e3RlYW1EYXRhLnN0YXJ0X3dlZWtfZGlzcGxheX19PC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwiaGVhZGVyLXJvdyByb3dcXFwiPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTcgY29sLW1kLTdcXFwiPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXAgdGVhbXMtZHJvcGRvd25cXFwiIGRyb3Bkb3duIGlzLW9wZW49XFxcInRlYW1Ecm9wZG93bi5pc29wZW5cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwidGVhbXMtYnRuLWxpbmsgYnRuIGJ0bi1saW5rIGRyb3Bkb3duLXRvZ2dsZVxcXCIgbmctZGlzYWJsZWQ9XFxcIiFpc0NvYWNoKHRlYW1EYXRhKSAmJiAhaXNDb21taXNoKHRlYW1EYXRhKSAmJiAhaXNBZG1pbigpXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1jaGVjayBmYS1md1xcXCIgbmctc2hvdz1cXFwiaXNDb21taXNoKHRlYW1EYXRhKSAmJiB0ZWFtRGF0YS5wYWlkID09IHRydWVcXFwiIHRpdGxlPVxcXCJQYWlkXFxcIj48L2k+IDxzdHJvbmc+PHNwYW4gY2xhc3M9XFxcInRlYW0tbmFtZVxcXCIgbmctY2xhc3M9XFxcInsndGVhbS1pbmFjdGl2ZSc6ICF0ZWFtRGF0YS5hY3RpdmUgfHwgIXRlYW1EYXRhLmFsaXZlLCAnZGlzYWJsZWQnOiAhaXNDb2FjaCh0ZWFtRGF0YSkgJiYgIWlzQ29tbWlzaCh0ZWFtRGF0YSkgJiYgIWlzQWRtaW4oKX1cXFwiPnt7dGVhbURhdGEubmFtZX19PC9zcGFuPiA8c3BhbiBuZy1zaG93PVxcXCJpc0NvYWNoKHRlYW1EYXRhKSB8fCBpc0NvbW1pc2godGVhbURhdGEpIHx8IGlzQWRtaW4oKVxcXCIgY2xhc3M9XFxcImNhcmV0XFxcIj48L3NwYW4+PC9zdHJvbmc+XFxuXCIgK1xuICAgIFwiICAgICAgPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51IHRlYW1zLWJ0bi1tZW51XFxcIiByb2xlPVxcXCJtZW51XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaT48YSBuZy1jbGljaz1cXFwidG9nZ2xlRHJvcGRvd24oJGV2ZW50KTtlZGl0VGVhbSh0ZWFtRGF0YSlcXFwiPkVkaXQge3t0ZWFtRGF0YS5uYW1lfX08L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaT48YSBuZy1zaG93PVxcXCJpc0NvbW1pc2godGVhbURhdGEpXFxcIiBuZy1jbGljaz1cXFwidG9nZ2xlRHJvcGRvd24oJGV2ZW50KTt1cGRhdGVNZXNzYWdlKHRlYW1EYXRhKVxcXCI+RWRpdCB0ZWFtIG1lc3NhZ2U8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaSBuZy1zaG93PVxcXCJpc0NvbW1pc2godGVhbURhdGEpICYmICF0ZWFtRGF0YS5wYWlkXFxcIj48YSBuZy1jbGljaz1cXFwidG9nZ2xlRHJvcGRvd24oJGV2ZW50KTtwYWlkKHRlYW1EYXRhKVxcXCI+TWFyayB0ZWFtIGFzIHBhaWQ8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaSBuZy1zaG93PVxcXCJpc0NvbW1pc2godGVhbURhdGEpICYmIHRlYW1EYXRhLnBhaWRcXFwiPjxhIG5nLWNsaWNrPVxcXCJ0b2dnbGVEcm9wZG93bigkZXZlbnQpO3VucGFpZCh0ZWFtRGF0YSlcXFwiPk1hcmsgdGVhbSBhcyB1bnBhaWQ8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaSBuZy1zaG93PVxcXCJpc0NvbW1pc2godGVhbURhdGEpICYmICF0ZWFtRGF0YS5hY3RpdmVcXFwiPjxhIG5nLWNsaWNrPVxcXCJ0b2dnbGVEcm9wZG93bigkZXZlbnQpO2NvbmZpcm1BY3RpdmF0ZSh0ZWFtRGF0YSlcXFwiPlJlYWN0aXZhdGUgdGhpcyB0ZWFtPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGkgbmctc2hvdz1cXFwiaXNDb21taXNoKHRlYW1EYXRhKSAmJiB0ZWFtRGF0YS5hY3RpdmVcXFwiPjxhIG5nLWNsaWNrPVxcXCJ0b2dnbGVEcm9wZG93bigkZXZlbnQpO2NvbmZpcm1EZWFjdGl2YXRlKHRlYW1EYXRhKVxcXCI+RGVhY3RpdmF0ZSB0aGlzIHRlYW08L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaSBuZy1zaG93PVxcXCIhaXNDb21taXNoKHRlYW1EYXRhKVxcXCI+PGEgbmctY2xpY2s9XFxcInRvZ2dsZURyb3Bkb3duKCRldmVudCk7Y29udGFjdENvbW1pc2godGVhbURhdGEpXFxcIj5Db250YWN0IHRoZSBjb21taXNoPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGkgY2xhc3M9XFxcImRpdmlkZXJcXFwiIG5nLXNob3c9XFxcImxlYWd1ZVRlYW1zLmxlbmd0aCA+IDFcXFwiPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGkgbmctcmVwZWF0PVxcXCJ0ZWFtIGluIGxlYWd1ZVRlYW1zXFxcIiBuZy1zaG93PVxcXCJ0ZWFtLmlkICE9IHRlYW1EYXRhLmlkXFxcIj48YSBuZy1jbGljaz1cXFwic2hvd1RlYW0odGVhbSlcXFwiPjxzcGFuIGNsYXNzPVxcXCJvdGhlci10ZWFtLW5hbWVcXFwiIG5nLWNsYXNzPVxcXCJ7J3RlYW0taW5hY3RpdmUnOiAhdGVhbS5hY3RpdmUgfHwgIXRlYW0uYWxpdmV9XFxcIj57e3RlYW0ubmFtZX19PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwib3RoZXItdGVhbS1waWNrXFxcIj57e3RlYW0uY3VycmVudF9waWNrLmFiYnJldn19PC9zcGFuPjwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgIDwvdWw+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8aDY+PGEgbmctY2xpY2s9XFxcInNob3dMZWFndWUodGVhbURhdGEpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtY2hldnJvbi1sZWZ0IGZhLWZ3XFxcIj48L2k+IDxzcGFuIGNsYXNzPVxcXCJ0ZWFtLWxlYWd1ZS1uYW1lXFxcIj57e3RlYW1EYXRhLmxlYWd1ZS5uYW1lfX08L3NwYW4+PC9hPjwvaDY+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS01IGNvbC1tZC01IGhpZGRlbi14c1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxoMyBjbGFzcz1cXFwidGVhbS1tZXRhXFxcIj48c21hbGw+e3t0ZWFtRGF0YS5sZWFndWUuZm9ybWF0fX08YnI+Q29hY2ggWyB7e3RlYW1EYXRhLmNvYWNoX25hbWVzLmpvaW4oJywgJyl9fSBdPC9zbWFsbD48L2gzPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGhyPlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcInRlYW0tbWVzc2FnZVxcXCIgbmctc2hvdz1cXFwiaXNDb21taXNoKHRlYW1EYXRhKSB8fCBpc0NvYWNoKHRlYW1EYXRhKVxcXCI+XFxuXCIgK1xuICAgIFwiICA8YWNjb3JkaW9uIGNsb3NlLW90aGVycz1cXFwidHJ1ZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxhY2NvcmRpb24tZ3JvdXAgaXMtb3Blbj1cXFwidXNlck1vZGVsLnRlYW1NZXNzYWdlT3Blblt0ZWFtRGF0YS5pZF1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxhY2NvcmRpb24taGVhZGluZz5cXG5cIiArXG4gICAgXCIgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1jb21tZW50IGZhLWZ3XFxcIj48L2k+IE1lc3NhZ2VzIHRvIHRlYW0gWyA8c3BhbiBuZy1zaG93PVxcXCJ0ZWFtRGF0YS5tZXNzYWdlLmxlbmd0aCA+IDBcXFwiPjE8L3NwYW4+PHNwYW4gbmctc2hvdz1cXFwiIXRlYW1EYXRhLm1lc3NhZ2UgfHwgdGVhbURhdGEubWVzc2FnZS5sZW5ndGggPT0gMFxcXCI+MDwvc3Bhbj4gXSA8aSBjbGFzcz1cXFwicHVsbC1yaWdodCBnbHlwaGljb25cXFwiIG5nLWNsYXNzPVxcXCJ7J2dseXBoaWNvbi1jaGV2cm9uLWRvd24nOiB1c2VyTW9kZWwudGVhbU1lc3NhZ2VPcGVuW3RlYW1EYXRhLmlkXSwgJ2dseXBoaWNvbi1jaGV2cm9uLXJpZ2h0JzogIXVzZXJNb2RlbC50ZWFtTWVzc2FnZU9wZW5bdGVhbURhdGEuaWRdfVxcXCI+PC9pPlxcblwiICtcbiAgICBcIiAgICAgIDwvYWNjb3JkaW9uLWhlYWRpbmc+XFxuXCIgK1xuICAgIFwiICAgICAgPHAgY2xhc3M9XFxcInRlYW0tbWVzc2FnZS10ZXh0XFxcIiBuZy1zaG93PVxcXCIhdGVhbURhdGEubWVzc2FnZSB8fCB0ZWFtRGF0YS5tZXNzYWdlLmxlbmd0aCA9PSAwXFxcIj5ubyBtZXNzYWdlczwvcD48cCBjbGFzcz1cXFwidGVhbS1tZXNzYWdlLXRleHRcXFwiIG5nLXNob3c9XFxcInRlYW1EYXRhLm1lc3NhZ2UubGVuZ3RoID4gMFxcXCIgbmctYmluZC1odG1sPVxcXCJ0ZWFtRGF0YS5tZXNzYWdlIHwgbGlua3k6J19ibGFuaydcXFwiPjwvcD4gPGEgY2xhc3M9XFxcImFsZXJ0LWxpbmtcXFwiIG5nLXNob3c9XFxcImlzQ29tbWlzaCh0ZWFtRGF0YSlcXFwiIG5nLWNsaWNrPVxcXCJ1cGRhdGVNZXNzYWdlKHRlYW1EYXRhKVxcXCI+WyBlZGl0IF08L2E+PGEgY2xhc3M9XFxcImFsZXJ0LWxpbmtcXFwiIG5nLXNob3c9XFxcIiFpc0NvbW1pc2godGVhbURhdGEpXFxcIiBuZy1jbGljaz1cXFwiY29udGFjdENvbW1pc2godGVhbURhdGEpXFxcIj5bIGNvbnRhY3QgY29tbWlzaCBdPC9hPlxcblwiICtcbiAgICBcIiAgICA8L2FjY29yZGlvbi1ncm91cD5cXG5cIiArXG4gICAgXCIgIDwvYWNjb3JkaW9uPlxcblwiICtcbiAgICBcIiAgPGhyPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgdWktdmlldz1cXFwidGVhbVBpY2tzQ29udGVudFxcXCIgY2xhc3M9XFxcInBpY2tzLWNvbnRlbnRcXFwiPjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvdXNlci9yZXNldC91c2VyLnJlc2V0LnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL3VzZXIvcmVzZXQvdXNlci5yZXNldC50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+UmVzZXQgUGFzc3dvcmQ8L2gzPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgPGZvcm0gbmFtZT1cXFwicmVzZXRQYXNzd29yZEZvcm1cXFwiIGNsYXNzPVxcXCJyZXNldC1wYXNzd29yZC1mb3JtIGZvcm0taG9yaXpvbnRhbFxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZT5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IocmVzZXRQYXNzd29yZEZvcm0uZW1haWwpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IocmVzZXRQYXNzd29yZEZvcm0uZW1haWwpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGZvcj1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIj5FbWFpbDo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8aW5wdXQgaWQ9XFxcImVtYWlsXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciB5b3VyIGVtYWlsXFxcIiBuZy1tb2RlbD1cXFwidXNlckRhdGEuZW1haWxcXFwiIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJpbnB1dC1lcnJvclxcXCIgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihyZXNldFBhc3N3b3JkRm9ybS5lbWFpbCwgJ3JlcXVpcmVkJylcXFwiPlJlcXVpcmVkPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IocmVzZXRQYXNzd29yZEZvcm0uZW1haWwsICdlbWFpbCcpXFxcIj5JbnZhbGlkIGVtYWlsPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKHJlc2V0UGFzc3dvcmRGb3JtLmVtYWlsKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZm9ybT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwicmVzZXRQYXNzd29yZEZvcm0uJHByaXN0aW5lIHx8IHJlc2V0UGFzc3dvcmRGb3JtLiRpbnZhbGlkXFxcIiBuZy1jbGljaz1cXFwicmVzZXQodXNlckRhdGEuZW1haWwpXFxcIj5SZXNldDwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvdXNlci91c2VyLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL3VzZXIvdXNlci50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8aDMgY2xhc3M9XFxcInBhbmVsLXRpdGxlXFxcIj5Vc2VyIFByb2ZpbGU8L2gzPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8Zm9ybSBuYW1lPVxcXCJlZGl0VXNlckZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IoZWRpdFVzZXJGb3JtLmZpcnN0TmFtZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihlZGl0VXNlckZvcm0uZmlyc3ROYW1lKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiZmlyc3ROYW1lXFxcIj5GaXJzdCBOYW1lXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihlZGl0VXNlckZvcm0uZmlyc3ROYW1lLCAncmVxdWlyZWQnKVxcXCI+WyBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGVkaXRVc2VyRm9ybS5maXJzdE5hbWUsICdtYXhsZW5ndGgnKVxcXCI+WyBUb28gTG9uZyBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJmaXJzdE5hbWVcXFwiIG5hbWU9XFxcImZpcnN0TmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcInVzZXJEYXRhLnVzZXIuZmlyc3RfbmFtZVxcXCIgbmctbWF4bGVuZ3RoPVxcXCIxNVxcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKGVkaXRVc2VyRm9ybS5maXJzdE5hbWUpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihlZGl0VXNlckZvcm0ubGFzdE5hbWUpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IoZWRpdFVzZXJGb3JtLmxhc3ROYW1lKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwibGFzdE5hbWVcXFwiPkxhc3QgTmFtZVxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoZWRpdFVzZXJGb3JtLmxhc3ROYW1lLCAncmVxdWlyZWQnKVxcXCI+WyBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGVkaXRVc2VyRm9ybS5sYXN0TmFtZSwgJ21heGxlbmd0aCcpXFxcIj5bIFRvbyBMb25nIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcImxhc3ROYW1lXFxcIiBuYW1lPVxcXCJsYXN0TmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcInVzZXJEYXRhLnVzZXIubGFzdF9uYW1lXFxcIiBuZy1tYXhsZW5ndGg9XFxcIjIwXFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IoZWRpdFVzZXJGb3JtLmxhc3ROYW1lKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJlbWFpbFxcXCI+RW1haWw8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJlbWFpbFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIHR5cGU9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1kaXNhYmxlZD1cXFwidHJ1ZVxcXCIgbmctbW9kZWw9XFxcInVzZXJEYXRhLnVzZXIuZW1haWxcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihlZGl0VXNlckZvcm0ucGFzc3dvcmQpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IoZWRpdFVzZXJGb3JtLnBhc3N3b3JkKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwicGFzc3dvcmRcXFwiPk5ldyBQYXNzd29yZFxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoZWRpdFVzZXJGb3JtLnBhc3N3b3JkLCAnbWlubGVuZ3RoJylcXFwiPlsgOCAtIDUwIENoYXJhY3RlcnMgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihlZGl0VXNlckZvcm0ucGFzc3dvcmQsICdtYXhsZW5ndGgnKVxcXCI+WyA4IC0gNTAgQ2hhcmFjdGVycyBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwicGFzc3dvcmRcXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidXNlckRhdGEudXNlci5wYXNzd29yZFxcXCIgbmctbWlubGVuZ3RoPVxcXCI4XFxcIiBuZy1tYXhsZW5ndGg9XFxcIjUwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IoZWRpdFVzZXJGb3JtLnBhc3N3b3JkKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IoZWRpdFVzZXJGb3JtLmNvbmZpcm1QYXNzd29yZCksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihlZGl0VXNlckZvcm0uY29uZmlybVBhc3N3b3JkKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiY29uZmlybVBhc3N3b3JkXFxcIj5Db25maXJtIE5ldyBQYXNzd29yZFxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoZWRpdFVzZXJGb3JtLmNvbmZpcm1QYXNzd29yZCwgJ21hdGNoJylcXFwiPlsgTm8gTWF0Y2ggXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiBuYW1lPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidXNlckRhdGEudXNlci5wYXNzd29yZF9jb25maXJtYXRpb25cXFwiIG1hdGNoPVxcXCJ1c2VyRGF0YS51c2VyLnBhc3N3b3JkXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IoZWRpdFVzZXJGb3JtLmNvbmZpcm1QYXNzd29yZClcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWluZm8gYnRuLWJsb2NrXFxcIiBuZy1kaXNhYmxlZD1cXFwiZWRpdFVzZXJGb3JtLiRwcmlzdGluZSB8fCBlZGl0VXNlckZvcm0uJGludmFsaWRcXFwiIG5nLWNsaWNrPVxcXCJ1cGRhdGUodXNlckRhdGEudXNlcilcXFwiPlVwZGF0ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICAgIDwvZm9ybT5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3B1YmxpYy9hYnVzZS9hYnVzZS50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHVibGljL2FidXNlL2FidXNlLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5Db250YWN0IFVzPC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxmb3JtIG5hbWU9XFxcImFidXNlRm9ybVxcXCIgY2xhc3M9XFxcImNvbnRhY3QtZm9ybSBmb3JtLWhvcml6b250YWxcXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKGFidXNlRm9ybS5tZXNzYWdlKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKGFidXNlRm9ybS5tZXNzYWdlKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBmb3I9XFxcIm1lc3NhZ2VcXFwiIGNsYXNzPVxcXCJjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIj5NZXNzYWdlOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDx0ZXh0YXJlYSBpZD1cXFwibWVzc2FnZVxcXCIgbmFtZT1cXFwibWVzc2FnZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIldoYXQncyBvbiB5b3VyIG1pbmQ/XFxcIiByb3dzPVxcXCIzXFxcIiBtYXhsZW5ndGg9XFxcIjIwMFxcXCIgbmctbW9kZWw9XFxcImFidXNlTWVzc2FnZVxcXCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoYWJ1c2VGb3JtLm1lc3NhZ2UsICdyZXF1aXJlZCcpXFxcIj5SZXF1aXJlZDwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGFidXNlRm9ybS5tZXNzYWdlLCAnbWF4bGVuZ3RoJylcXFwiPlRvbyBMb25nPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKGFidXNlRm9ybS5tZXNzYWdlKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZm9ybT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwiYWJ1c2VGb3JtLiRwcmlzdGluZSB8fCBhYnVzZUZvcm0uJGludmFsaWRcXFwiIG5nLWNsaWNrPVxcXCJjb250YWN0VXMoYWJ1c2VNZXNzYWdlKVxcXCI+U2VuZDwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3B1YmxpYy9mYXEvZmFxLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wdWJsaWMvZmFxL2ZhcS50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjbG9zZSgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5GQVE8L2gzPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgPGRsIGNsYXNzPVxcXCJmYXFcXFwiPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+V2hpY2ggc3BvcnRzIGFyZSBhdmFpbGFibGU/PC9kdD5cXG5cIiArXG4gICAgXCIgICAgPGRkPk5GTCwgTkJBLCBOSEwsIE1MQiBvciBNTFMuPC9kZD5cXG5cIiArXG4gICAgXCIgICAgPGR0PkhvdyBtdWNoIGRvZXMgaXQgY29zdD88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+WmlwLiBaaWxjaC4gTmFkYS4gRnJlZWVlZWVlZWVlZWUuLi48L2RkPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+SG93IGRvIEkgcGxheT88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+XFxuXCIgK1xuICAgIFwiICAgICAgPHA+LSBKb2luIGFuIGV4aXN0aW5nIFN1cnZpdm9yIG9yIFBpY2snZW0gbGVhZ3VlIG9yIGNyZWF0ZSB5b3VyIG93bi48L3A+XFxuXCIgK1xuICAgIFwiICAgICAgPHA+LSBQaWNrIGxvc2VycyBlYWNoIHdlZWsuIChPbmx5IDEgcGljay93ZWVrIGZvciBTdXJ2aXZvciBsZWFndWVzKTwvcD5cXG5cIiArXG4gICAgXCIgICAgICA8cD4tIFJvb3QgZm9yIHlvdXIgbG9zZXJzIHRvIGxvc2UuLi5kdWg8L3A+XFxuXCIgK1xuICAgIFwiICAgICAgPHA+LSBJbiBhIFN1cnZpdm9yIGxlYWd1ZSwgbGFzdCB0aGUgbG9uZ2VzdCBhbmQgd2luLjwvcD5cXG5cIiArXG4gICAgXCIgICAgICA8cD4tIEluIGEgUGljaydlbSBsZWFndWUsIGdldCB0aGUgbW9zdCBwaWNrcyByaWdodCBhbmQgd2luLjwvcD5cXG5cIiArXG4gICAgXCIgICAgICA8cD4tIEhhdmUgZnVuITwvcD5cXG5cIiArXG4gICAgXCIgICAgPC9kZD5cXG5cIiArXG4gICAgXCIgICAgPGR0PkNhbiBJIHBpY2sgdGhlIHNhbWUgbG9zZXIgdHdpY2U/PC9kdD5cXG5cIiArXG4gICAgXCIgICAgPGRkPkluIGEgU3Vydml2b3IgbGVhZ3VlLCBuby4uLnVudGlsIHlvdSBtYWtlIGl0IHRvIHRoZSBwbGF5b2Zmcy4gSW4gYSBQaWNrJ2VtIGxlYWd1ZSwgeWVzLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5XaGVuIGlzIHRoZSBkZWFkbGluZSB0byBtYWtlIG15IHBpY2s/PC9kdD5cXG5cIiArXG4gICAgXCIgICAgPGRkPkp1c3QgZ2V0IGl0IGluIGJlZm9yZSBhIGdhbWUgc3RhcnRzLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5EbyB0aWVzIGNvdW50IGFzIGEgbG9zcz88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+Tm8gc2lyLiBCdXQsIGluIHNvbWUgU3Vydml2b3IgbGVhZ3VlcyB5b3Ugd2lsbCBub3QgZ2V0IGVsaW1pbmF0ZWQgZm9yIGEgdGllLiBBbHNvLCBmb3IgTkhMLCBvdmVydGltZSBvciBzaG9vdG91dCBsb3NzZXMgd2lsbCBiZSB0cmVhdGVkIGFzIGEgbG9zcyBhbmQgbm90IGEgdGllLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5XaGF0IGlzIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gYSBwdWJsaWMgYW5kIHByaXZhdGUgbGVhZ3VlPzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5QdWJsaWMgbGVhZ3VlcyBhbGxvdyBhbnlvbmUgdG8gam9pbi4gUHJpdmF0ZSBsZWFndWVzIHJlcXVpcmUgYW4gaW52aXRhdGlvbiBmcm9tIHRoZSBjb21taXNoLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5UaGUgc2Vhc29uIGhhcyBhbHJlYWR5IHN0YXJ0ZWQsIGNhbiBJIHN0aWxsIHBsYXk/PC9kdD5cXG5cIiArXG4gICAgXCIgICAgPGRkPlllcC4gVGhlcmXigJlzIGFsd2F5cyBhbiBvcGVuIGxlYWd1ZSBvciBjcmVhdGUgeW91ciBvd24gbGVhZ3VlIHRvIHN0YXJ0IGFueXRpbWUgZHVyaW5nIHRoZSBzZWFzb24uPC9kZD5cXG5cIiArXG4gICAgXCIgICAgPGR0PldoZW4gaXMgdGhlIGRlYWRsaW5lIHRvIGpvaW4gYSBsZWFndWU/PC9kdD5cXG5cIiArXG4gICAgXCIgICAgPGRkPkZvciBTdXJ2aXZvciBsZWFndWVzLCBqb2luIGJlZm9yZSB0aGUgZW5kIG9mIHRoZSBsZWFndWUncyBmaXJzdCB3ZWVrLiBGb3IgUGljaydlbSBsZWFndWVzLCBqb2luIGFueXRpbWUuPC9kZD5cXG5cIiArXG4gICAgXCIgICAgPGR0PldoYXQgaWYgSSBmYWlsIHRvIG1ha2UgcGlja3MgZm9yIGEgd2Vlaz88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+SW4gYSBTdXJ2aXZvciBsZWFndWUsIHlvdeKAmXJlIHRvYXN0LiBJbiBhIFBpY2snZW0gbGVhZ3VlLCB5b3UndmUganVzdCBtaXNzZWQgYW4gb3Bwb3J0dW5pdHkuIERvbid0IGxldCBpdCBoYXBwZW4gYWdhaW4uPC9kZD5cXG5cIiArXG4gICAgXCIgICAgPGR0PkNhbiB0aGUgY29tbWlzaCBtYWtlIHBpY2tzIGZvciBtZT88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+TmVnYXRpdmUuPC9kZD5cXG5cIiArXG4gICAgXCIgICAgPGR0PkhvdyBtYW55IHRpbWVzIGNhbiBJIGpvaW4gYSBsZWFndWU/PC9kdD5cXG5cIiArXG4gICAgXCIgICAgPGRkPkFzIG11Y2ggYXMgdGhlIGNvbW1pc2ggYWxsb3dzICh3aXRoIGEgbWF4IG9mIDEwIHRpbWVzKS48L2RkPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+SG93IGRvIEkgd2luPzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5JbiBhIFN1cnZpdm9yIGxlYWd1ZSwgZG9u4oCZdCBiZSB3cm9uZy4gKE9yIGF0IGxlYXN0IGJlIHRoZSBsYXN0IG9uZSBpbiB5b3VyIGxlYWd1ZSB0byBiZSB3cm9uZy4pIEluIGEgUGljaydlbSBsZWFndWUsIGdldCB0aGUgbW9zdCBwaWNrcyByaWdodCB0byB3aW4uPC9kZD5cXG5cIiArXG4gICAgXCIgICAgPGR0PldoYXQgZG8gSSB3aW4/PC9kdD5cXG5cIiArXG4gICAgXCIgICAgPGRkPlRoYXQgaXMgYmV0d2VlbiB5b3UgYW5kIHRoZSBjb21taXNoIG9mIHRoZSBsZWFndWUuIEhvd2V2ZXIsIHBsZWFzZSBiZSBjYXJlZnVsIHdoZW4gZGVhbGluZyB3aXRoIG1vbmV5LiBEb27igJl0IHNlbmQgbW9uZXkgdG8gYW55b25lIHlvdSBkb27igJl0IGtub3cuIENvbW1vbiBzZW5zZSwgcGxlYXNlLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5DYW4gSSBzZWUgdGhlIHBpY2tzIG9mIG90aGVycyBpbiBteSBsZWFndWU/PC9kdD5cXG5cIiArXG4gICAgXCIgICAgPGRkPk9ubHkgYWZ0ZXIgdGhlIGdhbWVzIGhhdmUgc3RhcnRlZC48L2RkPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+Q2FuIHRoZSBjb21taXNoIHNlZSBteSBwaWNrcz88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+T25seSBhZnRlciB0aGUgZ2FtZXMgaGF2ZSBzdGFydGVkLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5DYW4gSSBjcmVhdGUgbXkgb3duIGxlYWd1ZT88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+WW91IGJldGNoYS4gQ3JlYXRlIGEgU3Vydml2b3Igb3IgUGljaydlbSBsZWFndWUgYW55dGltZS48L2RkPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+SG93IGRvIEkgaW52aXRlIG15IGZyaWVuZHMgdG8gam9pbiBteSBsZWFndWU/PC9kdD5cXG5cIiArXG4gICAgXCIgICAgPGRkPk9uIHlvdXIgbGVhZ3VlIHBhZ2UgeW914oCZbGwgZmluZCBhbiAnSW52aXRlJyBidXR0b24uIFVzZSBpdC4gWW914oCZbGwganVzdCBuZWVkIHRoZWlyIGVtYWlsIGFkZHJlc3MuPC9kZD5cXG5cIiArXG4gICAgXCIgICAgPGR0PkhvdyBtYW55IGZyaWVuZHMgY2FuIGpvaW4gbXkgbGVhZ3VlPzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5BcyBtYW55IGFzIHlvdSBsaWtlLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5DYW4gSSBzZXQgYSBsaW1pdCBvbiBob3cgbWFueSB0aW1lcyBhIGZyaWVuZCBjYW4gam9pbiBteSBsZWFndWU/PC9kdD5cXG5cIiArXG4gICAgXCIgICAgPGRkPllvdSBzdXJlIGNhbi4gMSAtIDEwIHRpbWVzLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5Ib3cgZG8gSSBzdG9wIHBlb3BsZSBmcm9tIGpvaW5pbmcgbXkgbGVhZ3VlPzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5DaGFuZ2UgdGhlIGxlYWd1ZSB0byBwcml2YXRlLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5Ib3cgY2FuIEkgcmVtb3ZlIHBlb3BsZSBmcm9tIG15IGxlYWd1ZT88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+WW91IGNhbuKAmXQgYnV0IHlvdSBjYW4gZGVhY3RpdmF0ZSAob3IgcmVhY3RpdmF0ZSkgdGhlaXIgdGVhbS4gQSBkZWFjdGl2YXRlZCB0ZWFtIGlzIGhpZGRlbiBmcm9tIHZpZXcgYW5kIGNhbuKAmXQgbWFrZSBhbnkgcGlja3MuPC9kZD5cXG5cIiArXG4gICAgXCIgICAgPGR0PkNhbiBJIGVkaXQgbXkgbGVhZ3VlPzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5ZZXMsIGJ1dCB5b3UgY2FuJ3QgY2hhbmdlIHRoZSBzcG9ydCwgc3RhcnQgd2VlayBvciBmb3JtYXQgKFN1cnZpdm9yIG9yIFBpY2snZW0pIGFmdGVyIHRoZSBsZWFndWUgc3RhcnRzLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5DYW4gSSBlZGl0IGEgdGVhbSBuYW1lIGluIG15IGxlYWd1ZT88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+WWVzLCB0aGUgdGVhbSdzIGNvYWNoIG9yIHRoZSBjb21taXNoIGNhbiBlZGl0IGEgdGVhbSBuYW1lIGF0IGFueSB0aW1lLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5XaGF0IGlmIGkgc3RpbGwgaGF2ZSBxdWVzdGlvbnM/PC9kdD5cXG5cIiArXG4gICAgXCIgICAgPGRkPkZpbmQgdGhlIENvbnRhY3QgVXMgYnV0dG9uLiBXZSdsbCBnZXQgcmlnaHQgYmFjayB0byB5b3UuPC9kZD5cXG5cIiArXG4gICAgXCIgIDwvZGw+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNsb3NlKClcXFwiPkNsb3NlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHVibGljL2hvbWUvaG9tZS50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHVibGljL2hvbWUvaG9tZS50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwiaG9tZS1jb250ZW50LWNvbnRhaW5lclxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxoMSBjbGFzcz1cXFwiaGVhZGVyLWp1bWJvXFxcIj5Mb3NpbmcgaXMgRXZlcnl0aGluZy48L2gxPlxcblwiICtcbiAgICBcIiAgICA8cCBjbGFzcz1cXFwibGVhZFxcXCI+TkZMLCBOQkEsIE5ITCwgTUxCIG9yIE1MUyBzdXJ2aXZvciBhbmQgcGljaydlbSBsZWFndWVzIGFyZSB3YWl0aW5nIGZvciB5b3UuIEpvaW4gYW55dGltZSBmb3IgZnJlZSBhbmQgc3RhcnQgcGlja2luZyBsb3NlcnMgdG9kYXkhPC9wPlxcblwiICtcbiAgICBcIiAgPGRpdj5cXG5cIiArXG4gICAgXCIgICAgPGEgY2xhc3M9XFxcImN0YSBidG4gYnRuLXByaW1hcnkgYnRuLWxnXFxcIiByb2xlPVxcXCJidXR0b25cXFwiIG5nLWNsaWNrPVxcXCJqb2luTGVhZ3VlKHNlbGVjdGVkU2Vhc29uSWQpXFxcIj5Kb2luIExlYWd1ZTwvYT5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPGRpdj5cXG5cIiArXG4gICAgXCIgICAgPGEgY2xhc3M9XFxcImN0YSBidG4gYnRuLXByaW1hcnkgYnRuLWxnXFxcIiByb2xlPVxcXCJidXR0b25cXFwiIG5nLWNsaWNrPVxcXCJjcmVhdGVMZWFndWUoc2VsZWN0ZWRTZWFzb25JZClcXFwiPkNyZWF0ZSBMZWFndWU8L2E+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXIvcmVnaXN0ZXIudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci9yZWdpc3Rlci50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+UmVnaXN0ZXI8L2gzPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgPGZvcm0gbmFtZT1cXFwibmV3VXNlckZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IobmV3VXNlckZvcm0uZmlyc3ROYW1lKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKG5ld1VzZXJGb3JtLmZpcnN0TmFtZSl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImZpcnN0TmFtZVxcXCI+Rmlyc3QgTmFtZVxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld1VzZXJGb3JtLmZpcnN0TmFtZSwgJ3JlcXVpcmVkJylcXFwiPlsgUmVxdWlyZWQgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobmV3VXNlckZvcm0uZmlyc3ROYW1lLCAnbWF4bGVuZ3RoJylcXFwiPlsgVG9vIExvbmcgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpbnB1dCBpZD1cXFwiZmlyc3ROYW1lXFxcIiBuYW1lPVxcXCJmaXJzdE5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJuZXdVc2VyRGF0YS5maXJzdF9uYW1lXFxcIiBuZy1tYXhsZW5ndGg9XFxcIjE1XFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IobmV3VXNlckZvcm0uZmlyc3ROYW1lKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IobmV3VXNlckZvcm0ubGFzdE5hbWUpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IobmV3VXNlckZvcm0ubGFzdE5hbWUpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJsYXN0TmFtZVxcXCI+TGFzdCBOYW1lXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobmV3VXNlckZvcm0ubGFzdE5hbWUsICdyZXF1aXJlZCcpXFxcIj5bIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld1VzZXJGb3JtLmxhc3ROYW1lLCAnbWF4bGVuZ3RoJylcXFwiPlsgVG9vIExvbmcgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpbnB1dCBpZD1cXFwibGFzdE5hbWVcXFwiIG5hbWU9XFxcImxhc3ROYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwibmV3VXNlckRhdGEubGFzdF9uYW1lXFxcIiBuZy1tYXhsZW5ndGg9XFxcIjIwXFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IobmV3VXNlckZvcm0ubGFzdE5hbWUpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInVzZXItbmlja25hbWUgcm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwibmlja25hbWVcXFwiPk5pY2tuYW1lPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJuaWNrbmFtZVxcXCIgbmFtZT1cXFwibmlja25hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJuZXdVc2VyRGF0YS5uaWNrbmFtZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IobmV3VXNlckZvcm0uZW1haWwpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IobmV3VXNlckZvcm0uZW1haWwpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJlbWFpbFxcXCI+RW1haWxcXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihuZXdVc2VyRm9ybS5lbWFpbCwgJ3JlcXVpcmVkJylcXFwiPlsgUmVxdWlyZWQgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobmV3VXNlckZvcm0uZW1haWwsICdlbWFpbCcpXFxcIj5bIEludmFsaWQgRW1haWwgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpbnB1dCBpZD1cXFwiZW1haWxcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiB0eXBlPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcIm5ld1VzZXJEYXRhLmVtYWlsXFxcIiBsb2doLWZvY3VzIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihuZXdVc2VyRm9ybS5lbWFpbClcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKG5ld1VzZXJGb3JtLmNvbmZpcm1FbWFpbCksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihuZXdVc2VyRm9ybS5jb25maXJtRW1haWwpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJjb25maXJtRW1haWxcXFwiPkNvbmZpcm0gRW1haWxcXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihuZXdVc2VyRm9ybS5jb25maXJtRW1haWwsICdtYXRjaCcpXFxcIj5bIE5vIE1hdGNoIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aW5wdXQgaWQ9XFxcImNvbmZpcm1FbWFpbFxcXCIgbmFtZT1cXFwiY29uZmlybUVtYWlsXFxcIiB0eXBlPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcIm5ld1VzZXJEYXRhLmVtYWlsX2NvbmZpcm1hdGlvblxcXCIgbWF0Y2g9XFxcIm5ld1VzZXJEYXRhLmVtYWlsXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IobmV3VXNlckZvcm0uY29uZmlybUVtYWlsKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKG5ld1VzZXJGb3JtLnBhc3N3b3JkKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKG5ld1VzZXJGb3JtLnBhc3N3b3JkKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwicGFzc3dvcmRcXFwiPlBhc3N3b3JkXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobmV3VXNlckZvcm0ucGFzc3dvcmQsICdyZXF1aXJlZCcpXFxcIj5bIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld1VzZXJGb3JtLnBhc3N3b3JkLCAnbWlubGVuZ3RoJylcXFwiPlsgOCAtIDUwIENoYXJhY3RlcnMgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobmV3VXNlckZvcm0ucGFzc3dvcmQsICdtYXhsZW5ndGgnKVxcXCI+WyA4IC0gNTAgQ2hhcmFjdGVycyBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwicGFzc3dvcmRcXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwibmV3VXNlckRhdGEucGFzc3dvcmRcXFwiIG5nLW1pbmxlbmd0aD1cXFwiOFxcXCIgbmctbWF4bGVuZ3RoPVxcXCI1MFxcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKG5ld1VzZXJGb3JtLnBhc3N3b3JkKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IobmV3VXNlckZvcm0uY29uZmlybVBhc3N3b3JkKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKG5ld1VzZXJGb3JtLmNvbmZpcm1QYXNzd29yZCl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImNvbmZpcm1QYXNzd29yZFxcXCI+Q29uZmlybSBQYXNzd29yZFxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld1VzZXJGb3JtLmNvbmZpcm1QYXNzd29yZCwgJ21hdGNoJylcXFwiPlsgTm8gTWF0Y2ggXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpbnB1dCBpZD1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiBuYW1lPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwibmV3VXNlckRhdGEucGFzc3dvcmRfY29uZmlybWF0aW9uXFxcIiBtYXRjaD1cXFwibmV3VXNlckRhdGEucGFzc3dvcmRcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihuZXdVc2VyRm9ybS5jb25maXJtUGFzc3dvcmQpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInRlcm1zIHdlbGwgd2VsbC1zbVxcXCI+PHN0cm9uZz5CeSBjbGlja2luZyByZWdpc3RlciwgeW91IGFncmVlIHRvIHRoZSA8YSBuZy1jbGljaz1cXFwic2hvd1Rlcm1zKClcXFwiPnRlcm1zIG9mIHVzZS48L2E+PC9zdHJvbmc+PC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwibmV3VXNlckZvcm0uJGludmFsaWRcXFwiIG5nLWNsaWNrPVxcXCJyZWdpc3RlcihuZXdVc2VyRGF0YSlcXFwiPlJlZ2lzdGVyPC9idXR0b24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHVibGljL3JlZ2lzdGVyL3Rlcm1zL3JlZ2lzdGVyLnRlcm1zLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXIvdGVybXMvcmVnaXN0ZXIudGVybXMudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2xvc2UoKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+VGVybXMgb2YgVXNlPC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxwPklmIHlvdSBjaG9vc2UgdG8gdXNlIHRoaXMgc2l0ZSBmb3IgZ2FtYmxpbmcgcHVycG9zZXMsIHlvdSBhc3N1bWUgYWxsIHJpc2tzLiBEb24ndCBiZSBhIGR1bW15IGFuZCBzZW5kIG1vbmV5IHRvIHBlb3BsZSB5b3UgZG9uJ3Qga25vdyBhbmQgdHJ1c3QuIFVzZSB5b3VyIGNhYmV6YS48L3A+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNsb3NlKClcXFwiPkNsb3NlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHVibGljL3NpZ25pbi9zaWduaW4udHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3B1YmxpYy9zaWduaW4vc2lnbmluLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJzaWduaW4tYm94IHBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxmb3JtIG5hbWU9XFxcInNpZ25pbkZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5nLXN1Ym1pdD1cXFwic2lnbmluKHsgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsLnRvTG93ZXJDYXNlKCksIHBhc3N3b3JkOiBjcmVkZW50aWFscy5wYXNzd29yZCB9KVxcXCIgbm92YWxpZGF0ZT5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWFkZG9uXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtZW52ZWxvcGUgZmEtZndcXFwiPjwvaT48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbWFpbFxcXCIgbmctbW9kZWw9XFxcImNyZWRlbnRpYWxzLmVtYWlsXFxcIiByYy12ZXJpZnktc2V0IGF1dG9mb2N1cyByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1rZXkgZmEtZndcXFwiPjwvaT48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiIHBsYWNlaG9sZGVyPVxcXCJQYXNzd29yZFxcXCIgbmctbW9kZWw9XFxcImNyZWRlbnRpYWxzLnBhc3N3b3JkXFxcIiByYy12ZXJpZnktc2V0IHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxhIGNsYXNzPVxcXCJmb3Jnb3QtcGFzc3dvcmQgYnRuIGJ0bi1saW5rIHB1bGwtbGVmdFxcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIiBuZy1jbGljaz1cXFwicmVzZXRQYXNzd29yZCgpXFxcIj5Gb3Jnb3QgUGFzc3dvcmQ/PC9hPlxcblwiICtcbiAgICBcIiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJzaWduLWluLWJ0biBidG4gYnRuLXByaW1hcnkgcHVsbC1yaWdodFxcXCIgbmctZGlzYWJsZWQ9XFxcInNpZ25pbkZvcm0uJGludmFsaWRcXFwiPlNpZ24gaW48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IHN0eWxlPVxcXCJjbGVhcjogYm90aDtcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDxocj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJyZWdpc3RlclxcXCI+PGEgbmctY2xpY2s9XFxcInJlZ2lzdGVyKClcXFwiPkRvbid0IGhhdmUgYW4gYWNjb3VudD8gPHN0cm9uZz5SZWdpc3Rlcjwvc3Ryb25nPjwvYT48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9mb3JtPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xucmVxdWlyZSgnYXBwLXRlbXBsYXRlcycpO1xuXG5cbnZhciBBcHAgPSBmdW5jdGlvbigkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAvLyB1bm1hdGNoZWQgdXJscyBzaG91bGQgYmUgZGlyZWN0ZWQgYmFjayB0byB0aGUgc3RhcnRcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG59O1xuXG5BcHAuJGluamVjdCA9IFsnJHVybFJvdXRlclByb3ZpZGVyJ107XG5cbnZhciBsb2doQXBwID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAnLCBbXG4gICAgJ25nQ29va2llcycsXG4gICAgJ25nUmVzb3VyY2UnLFxuICAgICduZ1Nhbml0aXplJyxcbiAgICAnbmdSb3V0ZScsXG4gICAgJ2NvbW1hbmd1bGFyJyxcbiAgICAndWkucm91dGVyJyxcbiAgICAndWkuYm9vdHN0cmFwJyxcbiAgICAndWkuYm9vdHN0cmFwLmRhdGV0aW1lcGlja2VyJyxcbiAgICAnYXBwLnRlbXBsYXRlcycsXG4gICAgJ3VpLnJvdXRlci5zdGF0ZUhlbHBlcicsXG4gICAgJ2FuZ3VsYXItbG9hZGluZy1iYXInLFxuXG4gICAgLy8gcHVibGljIG1vZHVsZXNcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHVibGljL2hvbWUnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wdWJsaWMvZmFxJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHVibGljL2FidXNlJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHVibGljL3NpZ25pbicpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3B1YmxpYy9yZWdpc3RlcicpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci90ZXJtcycpLm5hbWUsXG5cbiAgICAvLyBwcml2YXRlIG1vZHVsZXNcbiAgICAvLyB1c2VyXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvdXNlcicpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvdXNlci9yZXNldCcpLm5hbWUsXG5cbiAgICAvLyBsZWFndWVcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9uZXcnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS92aWV3JykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvZWRpdCcpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2NvbnRhY3QnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9tZXNzYWdlJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvam9pbicpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2ludml0ZScpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2ludml0ZS9yZXF1ZXN0JykubmFtZSxcblxuICAgIC8vIGxlYWd1ZXNcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4nKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9wdWJsaWMnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9wcml2YXRlJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL21hbmFnZScpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9teScpLm5hbWUsXG5cbiAgICAvLyB0ZWFtXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvdGVhbScpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvdGVhbS92aWV3JykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS90ZWFtL3ZpZXcvcGlja3MnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL3RlYW0vZWRpdCcpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvdGVhbS9tZXNzYWdlJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS90ZWFtL3BpY2snKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL3RlYW0vcGljay9vbmUnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL3RlYW0vcGljay9tYW55JykubmFtZSxcblxuICAgIC8vIHBsYXlcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9wbGF5JykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9wbGF5L2xlYWd1ZXMnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL3BsYXkvdGVhbXMnKS5uYW1lLFxuXG4gICAgLy8gYWRtaW5cbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9hZG1pbicpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vZ2FtZS9lZGl0JykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9nYW1lL25ldycpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucycpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9zZWFzb24nKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2FkbWluL3NlYXNvbnMvc2Vhc29uL25ldycpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9zZWFzb24vZWRpdCcpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vd2VlaycpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vd2Vlay9uZXcnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2FkbWluL3dlZWsvZWRpdCcpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vc3F1YWRzJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9zcXVhZHMvbmV3JykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9zcXVhZHMvZWRpdCcpLm5hbWUsXG5cbiAgICAvLyBoZWxwZXIgbW9kdWxlc1xuICAgIHJlcXVpcmUoJy4vY29tbW9uL21vZHVsZXMvaGVhZGVyJykubmFtZSxcbiAgICByZXF1aXJlKCcuL2NvbW1vbi9tb2R1bGVzL21lc3NhZ2UnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vY29tbW9uL21vZHVsZXMvZm9vdGVyJykubmFtZSxcbiAgICByZXF1aXJlKCcuL2NvbW1vbi9tb2R1bGVzL2NvbmZpcm0nKS5uYW1lLFxuXG4gICAgcmVxdWlyZSgnLi9jb21tb24vbW9kZWxzJykubmFtZSxcbiAgICByZXF1aXJlKCcuL2NvbW1vbi9hcGknKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vY29tbW9uL2NvbW1hbmQnKS5uYW1lLFxuXG4gICAgLy8gc2VydmljZXNcbiAgICByZXF1aXJlKCcuL2NvbW1vbi9zZXJ2aWNlL2FwcGxpY2F0aW9uJykubmFtZSxcbiAgICByZXF1aXJlKCcuL2NvbW1vbi9zZXJ2aWNlL3V0aWxzJykubmFtZSxcblxuICAgIC8vZGlyZWN0aXZlc1xuICAgIHJlcXVpcmUoJy4vY29tbW9uL2RpcmVjdGl2ZXMvZm9jdXMnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vY29tbW9uL2RpcmVjdGl2ZXMvZm9ybWF0dGVkRGF0ZScpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9jb21tb24vZGlyZWN0aXZlcy9tYXRjaCcpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9jb21tb24vZGlyZWN0aXZlcy9yY1N1Ym1pdCcpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9jb21tb24vZGlyZWN0aXZlcy9yY1ZlcmlmeVNldCcpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9jb21tb24vZGlyZWN0aXZlcy9yZXF1aXJlZFBhdHRlcm4nKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vY29tbW9uL2RpcmVjdGl2ZXMvc2VsZWN0T25DbGljaycpLm5hbWUsXG5cbiAgICAvL21vZGFsc1xuXG4gICAgLy9maWx0ZXJzXG4gICAgcmVxdWlyZSgnLi9jb21tb24vZmlsdGVycycpLm5hbWVcblxuICAgIF0sIEFwcClcblxuICAgIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyLCAkbG9nUHJvdmlkZXIsICR1aVZpZXdTY3JvbGxQcm92aWRlciwgJGFuY2hvclNjcm9sbFByb3ZpZGVyKSB7XG4gICAgICAgIC8vIHVzZSB0aGUgSFRNTDUgSGlzdG9yeSBBUElcbiAgICAgICAgJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKGZhbHNlKTtcblxuICAgICAgICAvLyBkaXNhYmxlcyBhdXRvLXNjcm9sbFxuICAgICAgICAkdWlWaWV3U2Nyb2xsUHJvdmlkZXIudXNlQW5jaG9yU2Nyb2xsKCk7XG4gICAgICAgICRhbmNob3JTY3JvbGxQcm92aWRlci5kaXNhYmxlQXV0b1Njcm9sbGluZygpO1xuXG4gICAgICAgIC8vIHR1cm5zIG9uL29mZiBkZWJ1ZyBjb25zb2xlIGxvZyBzdGF0ZW1lbnRzXG4gICAgICAgICRsb2dQcm92aWRlci5kZWJ1Z0VuYWJsZWQodHJ1ZSk7XG5cbiAgICAgICAgLy8gZGVmaW5lcyByb290IHN0YXRlc1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdwdWJsaWMnLCB7XG4gICAgICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgdXJsOiAnLycsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vdGVtcGxhdGVzL21hc3Rlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgICAgICAgICAgICBzZWFzb25zOiBmdW5jdGlvbihzZWFzb25TZXJ2aWNlLCBzZWFzb25Nb2RlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzZWFzb25Nb2RlbC5sb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2Vhc29uU2VydmljZS5nZXRTZWFzb25zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdwcml2YXRlJywge1xuICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHVybDogJy8nLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL3RlbXBsYXRlcy9tYXN0ZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcjogZnVuY3Rpb24odXNlclNlcnZpY2UsIHVzZXJNb2RlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXJNb2RlbC51c2VyLmxvYWRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1c2VyTW9kZWwudXNlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZXJTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNlYXNvbnM6IGZ1bmN0aW9uKHNlYXNvblNlcnZpY2UsIHNlYXNvbk1vZGVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNlYXNvbk1vZGVsLmxvYWRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWFzb25TZXJ2aWNlLmdldFNlYXNvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgfSlcblxuICAgIC5ydW4oZnVuY3Rpb24oJHJvb3RTY29wZSwgJHVybFJvdXRlciwgJGxvZywgYXBwbGljYXRpb25TZXJ2aWNlKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJBcHBsaWNhdGlvbiBzdGFydGluZyB1cC4uLlwiKTtcbiAgICAgICAgYXBwbGljYXRpb25TZXJ2aWNlLnN0YXJ0dXAoKTtcbiAgICB9KVxuO1xuXG5sb2doQXBwLmZhY3RvcnkoJ2F1dGhJbnRlcmNlcHRvcicsIGZ1bmN0aW9uICgkcSwgJHdpbmRvdywgJGxvY2F0aW9uLCAkdGltZW91dCwgdXNlck1vZGVsLCBtZXNzYWdlTW9kZWwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZXF1ZXN0OiBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgICAgICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuICAgICAgICAgICAgaWYgKCR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudG9rZW4pIHtcbiAgICAgICAgICAgICAgICBjb25maWcuaGVhZGVycy5BdXRob3JpemF0aW9uID0gJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS50b2tlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb25maWc7XG4gICAgICAgIH0sXG4gICAgICAgIHJlc3BvbnNlRXJyb3I6IGZ1bmN0aW9uIChyZWplY3Rpb24pIHtcbiAgICAgICAgICB2YXIgbWVzc2FnZTtcbiAgICAgICAgICBpZiAocmVqZWN0aW9uLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9ICRsb2NhdGlvbi51cmwoKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gcmVqZWN0aW9uLmRhdGEubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICB1c2VyTW9kZWwucmVzZXRVc2VyKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkbG9jYXRpb24ucGF0aCgpID09ICcvc2lnbmluJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UobWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UobWVzc2FnZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbG9jYXRpb24udXJsKCcvc2lnbmluJykuc2VhcmNoKHsgcmVkaXJlY3Q6IGVuY29kZVVSSUNvbXBvbmVudCh1cmwpIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlamVjdGlvbi5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgICAgICBtZXNzYWdlID0geyB0eXBlOiAnZGFuZ2VyJywgY29udGVudDogJ0hvdXN0b24sIHdlIGhhdmUgYSBwcm9ibGVtLiBQYWdlIG5vdCBmb3VuZC4nIH07XG4gICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKG1lc3NhZ2UsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgJGxvY2F0aW9uLnVybCgnLycpO1xuICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVqZWN0aW9uLnN0YXR1cy50b1N0cmluZygpLm1hdGNoKC9eNVxcZHsyfSQvKSkge1xuICAgICAgICAgICAgLy8gbWF0Y2hlcyA1eHhcbiAgICAgICAgICAgIG1lc3NhZ2UgPSB7IHR5cGU6ICdkYW5nZXInLCBjb250ZW50OiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyB9O1xuICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShtZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gJHEucmVqZWN0KHJlamVjdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xufSk7XG5cbmxvZ2hBcHAuY29uZmlnKGZ1bmN0aW9uICgkaHR0cFByb3ZpZGVyKSB7XG4gICAgJGh0dHBQcm92aWRlci5pbnRlcmNlcHRvcnMucHVzaCgnYXV0aEludGVyY2VwdG9yJyk7XG59KTtcblxuXG5cblxuXG5cblxuXG5cbiIsIi8qKlxuICogRGVmaW5lIHRoZSBhcHBsaWNhdGlvbiBtb2RlbHNcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5tb2RlbHMnLCBbXSlcbiAgICAvL21vZGVsc1xuICAgIC5zZXJ2aWNlKCd1c2VyTW9kZWwnLCByZXF1aXJlKCcuL1VzZXJNb2RlbCcpKVxuICAgIC5zZXJ2aWNlKCdtZXNzYWdlTW9kZWwnLCByZXF1aXJlKCcuL01lc3NhZ2VNb2RlbCcpKVxuICAgIC5zZXJ2aWNlKCdzZWFzb25Nb2RlbCcsIHJlcXVpcmUoJy4vU2Vhc29uTW9kZWwnKSlcbjsiLCIvKipcbiAqIERlZmluZSB0aGUgcmVtb3RlIHNlcnZpY2VzXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuYXBpJywgW10pXG4gICAgICAuY29uc3RhbnQoJ2FwaUNvbmZpZycsIHJlcXVpcmUoJy4vQXBpQ29uZmlnJykpXG4gICAgICAuc2VydmljZSgnZ2FtZVNlcnZpY2UnLCByZXF1aXJlKCcuL0dhbWVTZXJ2aWNlJykpXG4gICAgICAuc2VydmljZSgnbGVhZ3VlU2VydmljZScsIHJlcXVpcmUoJy4vTGVhZ3VlU2VydmljZScpKVxuICAgICAgLnNlcnZpY2UoJ3BpY2tTZXJ2aWNlJywgcmVxdWlyZSgnLi9QaWNrU2VydmljZScpKVxuICAgICAgLnNlcnZpY2UoJ3NlYXNvblNlcnZpY2UnLCByZXF1aXJlKCcuL1NlYXNvblNlcnZpY2UnKSlcbiAgICAgIC5zZXJ2aWNlKCdzcXVhZFNlcnZpY2UnLCByZXF1aXJlKCcuL1NxdWFkU2VydmljZScpKVxuICAgICAgLnNlcnZpY2UoJ3RlYW1TZXJ2aWNlJywgcmVxdWlyZSgnLi9UZWFtU2VydmljZScpKVxuICAgICAgLnNlcnZpY2UoJ3VzZXJTZXJ2aWNlJywgcmVxdWlyZSgnLi9Vc2VyU2VydmljZScpKVxuICAgICAgLnNlcnZpY2UoJ3dlZWtTZXJ2aWNlJywgcmVxdWlyZSgnLi9XZWVrU2VydmljZScpKVxuO1xuIiwiLy8gc2Vzc2lvbiBjb21tYW5kc1xucmVxdWlyZSgnLi9zZXNzaW9uL1NpZ25pbkNvbW1hbmQnKTtcbnJlcXVpcmUoJy4vc2Vzc2lvbi9TaWdub3V0Q29tbWFuZCcpO1xuXG4vLyB1c2VyIGNvbW1hbmRzXG5yZXF1aXJlKCcuL3VzZXIvR2V0Q3VycmVudFVzZXJDb21tYW5kJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuY29tbWFuZENvbmZpZycsIFtdKVxuICAgIC5jb25maWcoZnVuY3Rpb24oJGNvbW1hbmd1bGFyUHJvdmlkZXIpIHtcblxuICAgICAgICAvLyBzZXNzaW9uIGV2ZW50c1xuICAgICAgICAkY29tbWFuZ3VsYXJQcm92aWRlci5tYXBUbygnU2lnbmluRXZlbnQnKS5hc1NlcXVlbmNlKClcbiAgICAgICAgICAgIC5hZGQoJ1NpZ25pbkNvbW1hbmQnKTtcbiAgICAgICAgJGNvbW1hbmd1bGFyUHJvdmlkZXIubWFwVG8oJ1NpZ25vdXRFdmVudCcpLmFzU2VxdWVuY2UoKVxuICAgICAgICAgICAgLmFkZCgnU2lnbm91dENvbW1hbmQnKTtcblxuICAgICAgICAvLyB1c2VyIGV2ZW50c1xuICAgICAgICAkY29tbWFuZ3VsYXJQcm92aWRlci5tYXBUbygnR2V0Q3VycmVudFVzZXJFdmVudCcpLmFzU2VxdWVuY2UoKVxuICAgICAgICAgICAgLmFkZCgnR2V0Q3VycmVudFVzZXJDb21tYW5kJyk7XG5cbiAgICB9XG4pO1xuXG4iLCIvKipcbiAqIERlZmluZSB0aGUgYXBwbGljYXRpb24gZmlsdGVyc1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmZpbHRlcnMnLCBbXSlcbiAgICAvL2ZpbHRlcnNcbiAgICAuZmlsdGVyKCdvZmZzZXRGaWx0ZXInLCByZXF1aXJlKCcuL09mZnNldEZpbHRlcicpKVxuICAgIC5maWx0ZXIoJ2FjdGl2ZVRlYW1GaWx0ZXInLCByZXF1aXJlKCcuL0FjdGl2ZVRlYW1GaWx0ZXInKSlcbiAgICAuZmlsdGVyKCdtYW5hZ2VkTGVhZ3VlRmlsdGVyJywgcmVxdWlyZSgnLi9NYW5hZ2VkTGVhZ3VlRmlsdGVyJykpXG4gICAgLmZpbHRlcigndGltZUZpbHRlcicsIHJlcXVpcmUoJy4vVGltZUZpbHRlcicpKVxuICAgIC5maWx0ZXIoJ3dlZWtQaWNrc0ZpbHRlcicsIHJlcXVpcmUoJy4vV2Vla1BpY2tzRmlsdGVyJykpXG47XG4iLCJcbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAucHVibGljLmhvbWUnLCBbXSlcbiAgICAuY29udHJvbGxlcignSG9tZUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL0hvbWVDb250cm9sbGVyJykpXG4gICAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ3B1YmxpYy5ob21lJywge1xuICAgICAgICAgICAgICAgIHVybDogJycsXG4gICAgICAgICAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2hlYWRlci9oZWFkZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0hlYWRlckNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvbWVzc2FnZS9tZXNzYWdlLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdNZXNzYWdlQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3B1YmxpYy9ob21lL2hvbWUudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0hvbWVDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvZm9vdGVyL2Zvb3Rlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnRm9vdGVyQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gICAgfSk7IiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5mYXEnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0ZhcUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL0ZhcUNvbnRyb2xsZXInKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmFidXNlJywgW10pXG4gIC5jb250cm9sbGVyKCdBYnVzZUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL0FidXNlQ29udHJvbGxlcicpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAucHVibGljLnNpZ25pbicsIFtdKVxuICAuY29udHJvbGxlcignU2lnbmluQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vU2lnbmluQ29udHJvbGxlcicpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwdWJsaWMuc2lnbmluJywge1xuICAgICAgICB1cmw6ICdzaWduaW4nLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9oZWFkZXIvaGVhZGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdIZWFkZXJDb250cm9sbGVyJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9tZXNzYWdlL21lc3NhZ2UudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ01lc3NhZ2VDb250cm9sbGVyJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3B1YmxpYy9zaWduaW4vc2lnbmluLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdTaWduaW5Db250cm9sbGVyJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZm9vdGVyOiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2Zvb3Rlci9mb290ZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0Zvb3RlckNvbnRyb2xsZXInXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5yZWdpc3RlcicsIFtdKVxuICAuY29udHJvbGxlcignUmVnaXN0ZXJDb250cm9sbGVyJywgcmVxdWlyZSgnLi9SZWdpc3RlckNvbnRyb2xsZXInKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnVzZXInLCBbXSlcbiAgICAuY29udHJvbGxlcignVXNlckNvbnRyb2xsZXInLCByZXF1aXJlKCcuL1VzZXJDb250cm9sbGVyJykpXG4gICAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ3ByaXZhdGUudXNlcicsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICd1c2VyJyxcbiAgICAgICAgICAgICAgICB2aWV3czoge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvaGVhZGVyL2hlYWRlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnSGVhZGVyQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9tZXNzYWdlL21lc3NhZ2UudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ01lc3NhZ2VDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS91c2VyL3VzZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1VzZXJDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvZm9vdGVyL2Zvb3Rlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnRm9vdGVyQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gICAgfSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmxlYWd1ZScsIFtdKVxuICAgIC5jb250cm9sbGVyKCdMZWFndWVDb250cm9sbGVyJywgcmVxdWlyZSgnLi9MZWFndWVDb250cm9sbGVyJykpXG4gICAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ3ByaXZhdGUubGVhZ3VlJywge1xuICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHVybDogJ3NlYXNvbi97c2Vhc29uSWR9L2xlYWd1ZScsXG4gICAgICAgICAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2hlYWRlci9oZWFkZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0hlYWRlckNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvbWVzc2FnZS9tZXNzYWdlLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdNZXNzYWdlQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2xlYWd1ZS50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTGVhZ3VlQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2Zvb3Rlci9mb290ZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0Zvb3RlckNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICAgIH0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5sZWFndWVzJywgW10pXG4gICAgLmNvbnRyb2xsZXIoJ0xlYWd1ZXNDb250cm9sbGVyJywgcmVxdWlyZSgnLi9MZWFndWVzQ29udHJvbGxlcicpKVxuICAgIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdwcml2YXRlLmxlYWd1ZXMnLCB7XG4gICAgICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgdXJsOiAnc2Vhc29uL3tzZWFzb25JZH0vbGVhZ3VlcycsXG4gICAgICAgICAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2hlYWRlci9oZWFkZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0hlYWRlckNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvbWVzc2FnZS9tZXNzYWdlLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdNZXNzYWdlQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9sZWFndWVzLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdMZWFndWVzQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2Zvb3Rlci9mb290ZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0Zvb3RlckNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICAgIH0pO1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnRlYW0nLCBbXSlcbiAgICAuY29udHJvbGxlcignVGVhbUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL1RlYW1Db250cm9sbGVyJykpXG4gICAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ3ByaXZhdGUudGVhbScsIHtcbiAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1cmw6ICdzZWFzb24ve3NlYXNvbklkfS9sZWFndWUve2xlYWd1ZUlkfS90ZWFtJyxcbiAgICAgICAgICAgICAgICB2aWV3czoge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvaGVhZGVyL2hlYWRlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnSGVhZGVyQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9tZXNzYWdlL21lc3NhZ2UudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ01lc3NhZ2VDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS90ZWFtL3RlYW0udHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1RlYW1Db250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvZm9vdGVyL2Zvb3Rlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnRm9vdGVyQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgICB9KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAucGxheScsIFtdKVxuICAuY29udHJvbGxlcignUGxheUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL1BsYXlDb250cm9sbGVyJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3ByaXZhdGUucGxheScsIHtcbiAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgIHVybDogJ3NlYXNvbi97c2Vhc29uSWR9L215JyxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvaGVhZGVyL2hlYWRlci50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnSGVhZGVyQ29udHJvbGxlcidcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvbWVzc2FnZS9tZXNzYWdlLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdNZXNzYWdlQ29udHJvbGxlcidcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL3BsYXkvcGxheS50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnUGxheUNvbnRyb2xsZXInXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvZm9vdGVyL2Zvb3Rlci50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnRm9vdGVyQ29udHJvbGxlcidcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfSk7XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuYWRtaW4nLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0FkbWluQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vQWRtaW5Db250cm9sbGVyJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3ByaXZhdGUuYWRtaW4nLCB7XG4gICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICB1cmw6ICdhZG1pbi8nLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9oZWFkZXIvaGVhZGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdIZWFkZXJDb250cm9sbGVyJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9tZXNzYWdlL21lc3NhZ2UudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ01lc3NhZ2VDb250cm9sbGVyJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvYWRtaW4vYWRtaW4udHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkbWluQ29udHJvbGxlcidcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZvb3Rlcjoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9mb290ZXIvZm9vdGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdGb290ZXJDb250cm9sbGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuaGVhZGVyJywgW10pXG4gICAgLmNvbnRyb2xsZXIoJ0hlYWRlckNvbnRyb2xsZXInLCByZXF1aXJlKCcuL0hlYWRlckNvbnRyb2xsZXInKSkiLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLm1lc3NhZ2UnLCBbXSlcbiAgICAuY29udHJvbGxlcignTWVzc2FnZUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL01lc3NhZ2VDb250cm9sbGVyJykpOyIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuZm9vdGVyJywgW10pXG4gIC5jb250cm9sbGVyKCdGb290ZXJDb250cm9sbGVyJywgcmVxdWlyZSgnLi9Gb290ZXJDb250cm9sbGVyJykpIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naC5jb25maXJtJywgW10pXG4gIC5jb250cm9sbGVyKCdDb25maXJtQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vQ29uZmlybUNvbnRyb2xsZXInKSk7XG4iLCIvKipcbiAqIERlZmluZSB0aGUgYXBwbGljYXRpb24gc2VydmljZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doLmFwcGxpY2F0aW9uJywgW10pXG4gICAgLnNlcnZpY2UoJ2FwcGxpY2F0aW9uU2VydmljZScsIHJlcXVpcmUoJy4vQXBwbGljYXRpb25TZXJ2aWNlJykpOyIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2gudXRpbHMnLCBbXSlcbiAgLnNlcnZpY2UoJ2RhdGVVdGlscycsIHJlcXVpcmUoJy4vRGF0ZVV0aWxzJykpOyIsIi8vYXBwbGljYXRpb24gZGlyZWN0aXZlc1xubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5kaXJlY3RpdmVzLmZvY3VzJyxbXSlcbiAgICAuZGlyZWN0aXZlKCdsb2doRm9jdXMnLCByZXF1aXJlKCcuL0ZvY3VzRGlyZWN0aXZlJykpXG47XG4iLCIvL2FwcGxpY2F0aW9uIGRpcmVjdGl2ZXNcbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2guZGlyZWN0aXZlcy5mb3JtYXR0ZWREYXRlJyxbXSlcbiAgLmRpcmVjdGl2ZSgnZm9ybWF0dGVkRGF0ZScsIHJlcXVpcmUoJy4vRm9ybWF0dGVkRGF0ZURpcmVjdGl2ZScpKVxuO1xuIiwiLy9hcHBsaWNhdGlvbiBkaXJlY3RpdmVzXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmRpcmVjdGl2ZXMubWF0Y2gnLFtdKVxuICAgIC5kaXJlY3RpdmUoJ21hdGNoJywgcmVxdWlyZSgnLi9NYXRjaERpcmVjdGl2ZScpKVxuO1xuIiwiLy9hcHBsaWNhdGlvbiBkaXJlY3RpdmVzXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doLmRpcmVjdGl2ZXMucmNTdWJtaXQnLFtdKVxuICAuZGlyZWN0aXZlKCdyY1N1Ym1pdCcsIHJlcXVpcmUoJy4vUkNTdWJtaXREaXJlY3RpdmUnKSk7XG4iLCIvL2FwcGxpY2F0aW9uIGRpcmVjdGl2ZXNcbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2guZGlyZWN0aXZlcy5yY1ZlcmlmeVNldCcsW10pXG4gIC5kaXJlY3RpdmUoJ3JjVmVyaWZ5U2V0JywgcmVxdWlyZSgnLi9SQ1ZlcmlmeVNldERpcmVjdGl2ZScpKTtcbiIsIi8vYXBwbGljYXRpb24gZGlyZWN0aXZlc1xubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5kaXJlY3RpdmVzLnJlcXVpcmVkUGF0dGVybicsW10pXG4gICAgLmRpcmVjdGl2ZSgncnBhdHRlcm4nLCByZXF1aXJlKCcuL1JlcXVpcmVkUGF0dGVybkRpcmVjdGl2ZScpKVxuO1xuIiwiLy9hcHBsaWNhdGlvbiBkaXJlY3RpdmVzXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmRpcmVjdGl2ZXMuc2VsZWN0T25DbGljaycsW10pXG4gIC5kaXJlY3RpdmUoJ3NlbGVjdE9uQ2xpY2snLCByZXF1aXJlKCcuL1NlbGVjdE9uQ2xpY2tEaXJlY3RpdmUnKSlcbjtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAucmVnaXN0ZXIudGVybXMnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ1JlZ2lzdGVyVGVybXNDb250cm9sbGVyJywgcmVxdWlyZSgnLi9SZWdpc3RlclRlcm1zQ29udHJvbGxlcicpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAudXNlci5yZXNldCcsIFtdKVxuICAuY29udHJvbGxlcignVXNlclJlc2V0Q29udHJvbGxlcicsIHJlcXVpcmUoJy4vVXNlclJlc2V0Q29udHJvbGxlcicpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubGVhZ3VlLm5ldycsIFtdKVxuICAuY29udHJvbGxlcignTmV3TGVhZ3VlQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vTmV3TGVhZ3VlQ29udHJvbGxlcicpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcml2YXRlLmxlYWd1ZS5uZXcnLCB7XG4gICAgICAgIHVybDogJy9uZXcnLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIGxlYWd1ZUNvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9uZXcvbGVhZ3VlLm5ldy50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTmV3TGVhZ3VlQ29udHJvbGxlcidcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICBzZWFzb25JZDogZnVuY3Rpb24oJHN0YXRlUGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoJHN0YXRlUGFyYW1zLnNlYXNvbklkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlbG9hZE9uU2VhcmNoOiBmYWxzZVxuICAgICAgfSk7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubGVhZ3VlLnZpZXcnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ1ZpZXdMZWFndWVDb250cm9sbGVyJywgcmVxdWlyZSgnLi9WaWV3TGVhZ3VlQ29udHJvbGxlcicpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcml2YXRlLmxlYWd1ZS52aWV3Jywge1xuICAgICAgICB1cmw6ICcve2xlYWd1ZUlkfT93ZWVrJyxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICBsZWFndWVDb250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvdmlldy9sZWFndWUudmlldy50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnVmlld0xlYWd1ZUNvbnRyb2xsZXInXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgbGVhZ3VlOiBmdW5jdGlvbihsZWFndWVTZXJ2aWNlLCAkc3RhdGVQYXJhbXMpIHtcbiAgICAgICAgICAgIHJldHVybiBsZWFndWVTZXJ2aWNlLmdldExlYWd1ZSgkc3RhdGVQYXJhbXMuc2Vhc29uSWQsICRzdGF0ZVBhcmFtcy5sZWFndWVJZCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBsZWFndWVXZWVrczogZnVuY3Rpb24obGVhZ3VlLCB3ZWVrU2VydmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIHdlZWtTZXJ2aWNlLmdldExlYWd1ZVdlZWtzKHsgc2Vhc29uSWQ6IGxlYWd1ZS5kYXRhLnNlYXNvbl9pZCwgbGVhZ3VlSWQ6IGxlYWd1ZS5kYXRhLmlkIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbGVhZ3VlVGVhbXM6IGZ1bmN0aW9uKGxlYWd1ZSwgdGVhbVNlcnZpY2UsICRzdGF0ZVBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuIHRlYW1TZXJ2aWNlLmdldEFsbExlYWd1ZVRlYW1zKHsgc2Vhc29uSWQ6IGxlYWd1ZS5kYXRhLnNlYXNvbl9pZCwgbGVhZ3VlSWQ6IGxlYWd1ZS5kYXRhLmlkLCB3ZWVrU2x1ZzogJHN0YXRlUGFyYW1zLndlZWsgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5sZWFndWUuZWRpdCcsIFtdKVxuICAuY29udHJvbGxlcignRWRpdExlYWd1ZUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL0VkaXRMZWFndWVDb250cm9sbGVyJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3ByaXZhdGUubGVhZ3VlLmVkaXQnLCB7XG4gICAgICAgIHVybDogJy97bGVhZ3VlSWR9L2VkaXQnLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIGxlYWd1ZUNvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9lZGl0L2xlYWd1ZS5lZGl0LnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdFZGl0TGVhZ3VlQ29udHJvbGxlcidcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICBsZWFndWU6IGZ1bmN0aW9uKGxlYWd1ZVNlcnZpY2UsICRzdGF0ZVBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuIGxlYWd1ZVNlcnZpY2UuZ2V0TGVhZ3VlKCRzdGF0ZVBhcmFtcy5zZWFzb25JZCwgJHN0YXRlUGFyYW1zLmxlYWd1ZUlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmxlYWd1ZS5jb250YWN0JywgW10pXG4gIC5jb250cm9sbGVyKCdMZWFndWVDb250YWN0Q29udHJvbGxlcicsIHJlcXVpcmUoJy4vTGVhZ3VlQ29udGFjdENvbnRyb2xsZXInKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmxlYWd1ZS5tZXNzYWdlJywgW10pXG4gIC5jb250cm9sbGVyKCdMZWFndWVNZXNzYWdlQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vTGVhZ3VlTWVzc2FnZUNvbnRyb2xsZXInKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmxlYWd1ZS5qb2luJywgW10pXG4gIC5jb250cm9sbGVyKCdMZWFndWVKb2luQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vTGVhZ3VlSm9pbkNvbnRyb2xsZXInKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmxlYWd1ZS5pbnZpdGUnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0xlYWd1ZUludml0ZUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL0xlYWd1ZUludml0ZUNvbnRyb2xsZXInKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmxlYWd1ZXMuam9pbicsIFtdKVxuICAuY29udHJvbGxlcignSm9pbkxlYWd1ZXNDb250cm9sbGVyJywgcmVxdWlyZSgnLi9Kb2luTGVhZ3Vlc0NvbnRyb2xsZXInKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHJpdmF0ZS5sZWFndWVzLmpvaW4nLCB7XG4gICAgICAgIHVybDogJy8nLFxuICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICBsZWFndWVzQ29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL2xlYWd1ZXMuam9pbi50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnSm9pbkxlYWd1ZXNDb250cm9sbGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICA7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9KTtcblxuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5sZWFndWVzLm1hbmFnZScsIFtdKVxuICAuY29udHJvbGxlcignTWFuYWdlTGVhZ3Vlc0NvbnRyb2xsZXInLCByZXF1aXJlKCcuL01hbmFnZUxlYWd1ZXNDb250cm9sbGVyJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3ByaXZhdGUubGVhZ3Vlcy5tYW5hZ2UnLCB7XG4gICAgICAgIHVybDogJy9tYW5hZ2VkJyxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICBsZWFndWVzQ29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9tYW5hZ2UvbGVhZ3Vlcy5tYW5hZ2UudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ01hbmFnZUxlYWd1ZXNDb250cm9sbGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIG1hbmFnZWRMZWFndWVzOiBmdW5jdGlvbih1c2VyLCBsZWFndWVTZXJ2aWNlLCAkc3RhdGVQYXJhbXMpIHtcbiAgICAgICAgICAgIHJldHVybiBsZWFndWVTZXJ2aWNlLmdldE1hbmFnZWRMZWFndWVzKCRzdGF0ZVBhcmFtcy5zZWFzb25JZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIDtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmxlYWd1ZXMubXknLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ015TGVhZ3Vlc0NvbnRyb2xsZXInLCByZXF1aXJlKCcuL015TGVhZ3Vlc0NvbnRyb2xsZXInKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHJpdmF0ZS5sZWFndWVzLm15Jywge1xuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIGxlYWd1ZXNDb250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL215L2xlYWd1ZXMubXkudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ015TGVhZ3Vlc0NvbnRyb2xsZXInXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgbGVhZ3VlczogZnVuY3Rpb24odXNlciwgbGVhZ3VlU2VydmljZSwgJHN0YXRlUGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gbGVhZ3VlU2VydmljZS5nZXRMZWFndWVzKCRzdGF0ZVBhcmFtcy5zZWFzb25JZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIDtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnRlYW0udmlldycsIFtdKVxuICAuY29udHJvbGxlcignVmlld1RlYW1Db250cm9sbGVyJywgcmVxdWlyZSgnLi9WaWV3VGVhbUNvbnRyb2xsZXInKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHJpdmF0ZS50ZWFtLnZpZXcnLCB7XG4gICAgICAgIHVybDogJy97dGVhbUlkfScsXG4gICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIHRlYW1Db250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS90ZWFtL3ZpZXcvdGVhbS52aWV3LnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdWaWV3VGVhbUNvbnRyb2xsZXInXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgdGVhbTogZnVuY3Rpb24odXNlciwgdGVhbVNlcnZpY2UsICRzdGF0ZVBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuIHRlYW1TZXJ2aWNlLmdldFRlYW0oJHN0YXRlUGFyYW1zLmxlYWd1ZUlkLCAkc3RhdGVQYXJhbXMudGVhbUlkKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxlYWd1ZVRlYW1zOiBmdW5jdGlvbih0ZWFtLCB0ZWFtU2VydmljZSwgJHN0YXRlUGFyYW1zLCB1c2VyTW9kZWwpIHtcbiAgICAgICAgICAgIGlmICh0ZWFtLmRhdGEuY29hY2hfaWRzLmluZGV4T2YodXNlck1vZGVsLnVzZXIuaWQpID4gLTEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRlYW1TZXJ2aWNlLmdldExlYWd1ZVRlYW1zKCRzdGF0ZVBhcmFtcy5sZWFndWVJZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4geyBkYXRhOiBbXSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAudGVhbS5lZGl0JywgW10pXG4gIC5jb250cm9sbGVyKCdFZGl0VGVhbUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL0VkaXRUZWFtQ29udHJvbGxlcicpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAudGVhbS5tZXNzYWdlJywgW10pXG4gIC5jb250cm9sbGVyKCdUZWFtTWVzc2FnZUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL1RlYW1NZXNzYWdlQ29udHJvbGxlcicpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAudGVhbS5waWNrJywgW10pXG4gIC5jb250cm9sbGVyKCdUZWFtUGlja0NvbnRyb2xsZXInLCByZXF1aXJlKCcuL1RlYW1QaWNrQ29udHJvbGxlcicpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcml2YXRlLnRlYW0ucGljaycsIHtcbiAgICAgICAgdXJsOiAnL3t0ZWFtSWR9JyxcbiAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgdGVhbUNvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL3RlYW0vcGljay90ZWFtLnBpY2sudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1RlYW1QaWNrQ29udHJvbGxlcidcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICB0ZWFtOiBmdW5jdGlvbigkc3RhdGVQYXJhbXMsIHRlYW1TZXJ2aWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGVhbVNlcnZpY2UuZ2V0VGVhbSgkc3RhdGVQYXJhbXMubGVhZ3VlSWQsICRzdGF0ZVBhcmFtcy50ZWFtSWQpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgd2VlazogZnVuY3Rpb24oJHN0YXRlUGFyYW1zLCB3ZWVrU2VydmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIHdlZWtTZXJ2aWNlLmdldEN1cnJlbnRXZWVrKCRzdGF0ZVBhcmFtcy5zZWFzb25JZCwgJHN0YXRlUGFyYW1zLmxlYWd1ZUlkKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdhbWVzOiBmdW5jdGlvbigkc3RhdGVQYXJhbXMsIGdhbWVTZXJ2aWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2FtZVNlcnZpY2UuZ2V0Q3VycmVudEdhbWVzKCRzdGF0ZVBhcmFtcy5sZWFndWVJZCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBwaWNrczogZnVuY3Rpb24oJHN0YXRlUGFyYW1zLCBwaWNrU2VydmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIHBpY2tTZXJ2aWNlLmdldFNlbGVjdGVkUGlja3MoeyB0ZWFtSWQ6ICRzdGF0ZVBhcmFtcy50ZWFtSWQgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5wbGF5LmxlYWd1ZXMnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ1BsYXlMZWFndWVzQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vUGxheUxlYWd1ZXNDb250cm9sbGVyJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3ByaXZhdGUucGxheS5sZWFndWVzJywge1xuICAgICAgICB1cmw6ICcvbGVhZ3VlcycsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgcGxheUNvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL3BsYXkvbGVhZ3Vlcy9wbGF5LmxlYWd1ZXMudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1BsYXlMZWFndWVzQ29udHJvbGxlcidcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICBsZWFndWVzOiBmdW5jdGlvbih1c2VyLCAkc3RhdGVQYXJhbXMsIGxlYWd1ZVNlcnZpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBsZWFndWVTZXJ2aWNlLmdldExlYWd1ZXMoJHN0YXRlUGFyYW1zLnNlYXNvbklkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfSk7XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAucGxheS50ZWFtcycsIFtdKVxuICAuY29udHJvbGxlcignUGxheVRlYW1zQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vUGxheVRlYW1zQ29udHJvbGxlcicpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcml2YXRlLnBsYXkudGVhbXMnLCB7XG4gICAgICAgIHVybDogJy90ZWFtcycsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgcGxheUNvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL3BsYXkvdGVhbXMvcGxheS50ZWFtcy50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnUGxheVRlYW1zQ29udHJvbGxlcidcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICB0ZWFtczogZnVuY3Rpb24odXNlciwgJHN0YXRlUGFyYW1zLCB0ZWFtU2VydmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRlYW1TZXJ2aWNlLmdldEFsbFRlYW1zKHsgc2Vhc29uSWQ6ICRzdGF0ZVBhcmFtcy5zZWFzb25JZCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgfSlcbiAgICA7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9KTtcblxuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5hZG1pbi5zZWFzb25zJywgW10pXG4gIC5jb250cm9sbGVyKCdBZG1pblNlYXNvbnNDb250cm9sbGVyJywgcmVxdWlyZSgnLi9BZG1pblNlYXNvbnNDb250cm9sbGVyJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3ByaXZhdGUuYWRtaW4uc2Vhc29ucycsIHtcbiAgICAgICAgdXJsOiAnc2Vhc29ucycsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgYWRtaW5Db250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9zZWFzb25zL2FkbWluLnNlYXNvbnMudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkbWluU2Vhc29uc0NvbnRyb2xsZXInXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5hZG1pbi53ZWVrJywgW10pXG4gIC5jb250cm9sbGVyKCdBZG1pbldlZWtDb250cm9sbGVyJywgcmVxdWlyZSgnLi9BZG1pbldlZWtDb250cm9sbGVyJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3ByaXZhdGUuYWRtaW4ud2VlaycsIHtcbiAgICAgICAgdXJsOiAnc2Vhc29ucy97c2Vhc29uSWR9L3dlZWtzL3t3ZWVrSWR9JyxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICBhZG1pbkNvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2FkbWluL3dlZWsvYWRtaW4ud2Vlay50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQWRtaW5XZWVrQ29udHJvbGxlcicsXG4gICAgICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgICAgIHdlZWs6IGZ1bmN0aW9uKCRzdGF0ZVBhcmFtcywgd2Vla1NlcnZpY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2Vla1NlcnZpY2UuZ2V0V2Vlaygkc3RhdGVQYXJhbXMuc2Vhc29uSWQsICRzdGF0ZVBhcmFtcy53ZWVrSWQpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBnYW1lczogZnVuY3Rpb24od2VlaywgZ2FtZVNlcnZpY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2FtZVNlcnZpY2UuZ2V0V2Vla0dhbWVzKHdlZWsuZGF0YS5pZCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmFkbWluLnNxdWFkcycsIFtdKVxuICAuY29udHJvbGxlcignQWRtaW5TcXVhZHNDb250cm9sbGVyJywgcmVxdWlyZSgnLi9BZG1pblNxdWFkc0NvbnRyb2xsZXInKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHJpdmF0ZS5hZG1pbi5zcXVhZHMnLCB7XG4gICAgICAgIHVybDogJ3NxdWFkcycsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgYWRtaW5Db250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9zcXVhZHMvYWRtaW4uc3F1YWRzLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZG1pblNxdWFkc0NvbnRyb2xsZXInLFxuICAgICAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgICAgICBzcXVhZHM6IGZ1bmN0aW9uKCRzdGF0ZVBhcmFtcywgc3F1YWRTZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNxdWFkU2VydmljZS5nZXRTcXVhZHMoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubGVhZ3VlLmludml0ZS5yZXF1ZXN0JywgW10pXG4gIC5jb250cm9sbGVyKCdMZWFndWVJbnZpdGVSZXF1ZXN0Q29udHJvbGxlcicsIHJlcXVpcmUoJy4vTGVhZ3VlSW52aXRlUmVxdWVzdENvbnRyb2xsZXInKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmxlYWd1ZXMuam9pbi5wdWJsaWMnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ1B1YmxpY0xlYWd1ZXNDb250cm9sbGVyJywgcmVxdWlyZSgnLi9QdWJsaWNMZWFndWVzQ29udHJvbGxlcicpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcml2YXRlLmxlYWd1ZXMuam9pbi5wdWJsaWMnLCB7XG4gICAgICAgIHVybDogJ3B1YmxpYycsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgam9pbkxlYWd1ZXNDb250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4vcHVibGljL2xlYWd1ZXMuam9pbi5wdWJsaWMudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1B1YmxpY0xlYWd1ZXNDb250cm9sbGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIHB1YmxpY0xlYWd1ZXM6IGZ1bmN0aW9uKHVzZXIsIGxlYWd1ZVNlcnZpY2UsICRzdGF0ZVBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuIGxlYWd1ZVNlcnZpY2UuZ2V0UHVibGljTGVhZ3Vlcygkc3RhdGVQYXJhbXMuc2Vhc29uSWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICA7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9KTtcblxuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5sZWFndWVzLmpvaW4ucHJpdmF0ZScsIFtdKVxuICAuY29udHJvbGxlcignUHJpdmF0ZUxlYWd1ZXNDb250cm9sbGVyJywgcmVxdWlyZSgnLi9Qcml2YXRlTGVhZ3Vlc0NvbnRyb2xsZXInKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHJpdmF0ZS5sZWFndWVzLmpvaW4ucHJpdmF0ZScsIHtcbiAgICAgICAgdXJsOiAncHJpdmF0ZScsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgam9pbkxlYWd1ZXNDb250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4vcHJpdmF0ZS9sZWFndWVzLmpvaW4ucHJpdmF0ZS50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnUHJpdmF0ZUxlYWd1ZXNDb250cm9sbGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIHByaXZhdGVMZWFndWVzOiBmdW5jdGlvbih1c2VyLCBsZWFndWVTZXJ2aWNlLCAkc3RhdGVQYXJhbXMpIHtcbiAgICAgICAgICAgIHJldHVybiBsZWFndWVTZXJ2aWNlLmdldFByaXZhdGVMZWFndWVzKCRzdGF0ZVBhcmFtcy5zZWFzb25JZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIDtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnRlYW0udmlldy5waWNrcycsIFtdKVxuICAuY29udHJvbGxlcignVmlld1RlYW1QaWNrc0NvbnRyb2xsZXInLCByZXF1aXJlKCcuL1ZpZXdUZWFtUGlja3NDb250cm9sbGVyJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3ByaXZhdGUudGVhbS52aWV3LnBpY2tzJywge1xuICAgICAgICB1cmw6ICc/d2VlaycsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgdGVhbVBpY2tzQ29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvdGVhbS92aWV3L3BpY2tzL3RlYW0udmlldy5waWNrcy50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnVmlld1RlYW1QaWNrc0NvbnRyb2xsZXInXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgbGVhZ3VlV2Vla3M6IGZ1bmN0aW9uKHRlYW0sIHdlZWtTZXJ2aWNlLCAkc3RhdGVQYXJhbXMpIHtcbiAgICAgICAgICAgIHJldHVybiB3ZWVrU2VydmljZS5nZXRMZWFndWVXZWVrcyh7IHNlYXNvbklkOiAkc3RhdGVQYXJhbXMuc2Vhc29uSWQsIGxlYWd1ZUlkOiAkc3RhdGVQYXJhbXMubGVhZ3VlSWQgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBwaWNrczogZnVuY3Rpb24odGVhbSwgcGlja1NlcnZpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBwaWNrU2VydmljZS5nZXRQaWNrcyh7IHRlYW1JZDogdGVhbS5kYXRhLmlkIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY3VycmVudFdlZWs6IGZ1bmN0aW9uKHRlYW0sICRzdGF0ZVBhcmFtcywgd2Vla1NlcnZpY2UpIHtcbiAgICAgICAgICAgIGlmICghJHN0YXRlUGFyYW1zLndlZWspIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHdlZWtTZXJ2aWNlLmdldEN1cnJlbnRXZWVrKCRzdGF0ZVBhcmFtcy5zZWFzb25JZCwgJHN0YXRlUGFyYW1zLmxlYWd1ZUlkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVsb2FkT25TZWFyY2g6IGZhbHNlXG4gICAgICB9KTtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC50ZWFtLnBpY2sub25lJywgW10pXG4gIC5jb250cm9sbGVyKCdUZWFtUGlja09uZUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL1RlYW1QaWNrT25lQ29udHJvbGxlcicpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcml2YXRlLnRlYW0ucGljay5vbmUnLCB7XG4gICAgICAgIHVybDogJy9waWNrJyxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICBwaWNrQ29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvdGVhbS9waWNrL29uZS90ZWFtLnBpY2sub25lLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdUZWFtUGlja09uZUNvbnRyb2xsZXInXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC50ZWFtLnBpY2subWFueScsIFtdKVxuICAuY29udHJvbGxlcignVGVhbVBpY2tNYW55Q29udHJvbGxlcicsIHJlcXVpcmUoJy4vVGVhbVBpY2tNYW55Q29udHJvbGxlcicpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcml2YXRlLnRlYW0ucGljay5tYW55Jywge1xuICAgICAgICB1cmw6ICcvcGlja3MnLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIHBpY2tDb250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS90ZWFtL3BpY2svbWFueS90ZWFtLnBpY2subWFueS50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnVGVhbVBpY2tNYW55Q29udHJvbGxlcidcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmFkbWluLmdhbWUuZWRpdCcsIFtdKVxuICAuY29udHJvbGxlcignQWRtaW5HYW1lRWRpdENvbnRyb2xsZXInLCByZXF1aXJlKCcuL0FkbWluR2FtZUVkaXRDb250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5hZG1pbi5nYW1lLm5ldycsIFtdKVxuICAuY29udHJvbGxlcignQWRtaW5HYW1lTmV3Q29udHJvbGxlcicsIHJlcXVpcmUoJy4vQWRtaW5HYW1lTmV3Q29udHJvbGxlcicpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuYWRtaW4uc2Vhc29uJywgW10pXG4gIC5jb250cm9sbGVyKCdBZG1pblNlYXNvbkNvbnRyb2xsZXInLCByZXF1aXJlKCcuL0FkbWluU2Vhc29uQ29udHJvbGxlcicpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcml2YXRlLmFkbWluLnNlYXNvbicsIHtcbiAgICAgICAgdXJsOiAnc2Vhc29ucy97c2Vhc29uSWR9JyxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICBhZG1pbkNvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2FkbWluL3NlYXNvbnMvc2Vhc29uL2FkbWluLnNlYXNvbi50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQWRtaW5TZWFzb25Db250cm9sbGVyJyxcbiAgICAgICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICAgICAgc2Vhc29uOiBmdW5jdGlvbigkc3RhdGVQYXJhbXMsIHNlYXNvblNlcnZpY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2Vhc29uU2VydmljZS5nZXRTZWFzb24oJHN0YXRlUGFyYW1zLnNlYXNvbklkKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgd2Vla3M6IGZ1bmN0aW9uKCRzdGF0ZVBhcmFtcywgd2Vla1NlcnZpY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2Vla1NlcnZpY2UuZ2V0U2Vhc29uV2Vla3MoJHN0YXRlUGFyYW1zLnNlYXNvbklkKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbGVhZ3VlczogZnVuY3Rpb24oJHN0YXRlUGFyYW1zLCBsZWFndWVTZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlYWd1ZVNlcnZpY2UuZ2V0QWxsTGVhZ3Vlcygkc3RhdGVQYXJhbXMuc2Vhc29uSWQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5hZG1pbi53ZWVrLm5ldycsIFtdKVxuICAuY29udHJvbGxlcignQWRtaW5XZWVrTmV3Q29udHJvbGxlcicsIHJlcXVpcmUoJy4vQWRtaW5XZWVrTmV3Q29udHJvbGxlcicpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuYWRtaW4ud2Vlay5lZGl0JywgW10pXG4gIC5jb250cm9sbGVyKCdBZG1pbldlZWtFZGl0Q29udHJvbGxlcicsIHJlcXVpcmUoJy4vQWRtaW5XZWVrRWRpdENvbnRyb2xsZXInKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmFkbWluLnNxdWFkcy5uZXcnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0FkbWluU3F1YWRzTmV3Q29udHJvbGxlcicsIHJlcXVpcmUoJy4vQWRtaW5TcXVhZHNOZXdDb250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5hZG1pbi5zcXVhZHMuZWRpdCcsIFtdKVxuICAuY29udHJvbGxlcignQWRtaW5TcXVhZHNFZGl0Q29udHJvbGxlcicsIHJlcXVpcmUoJy4vQWRtaW5TcXVhZHNFZGl0Q29udHJvbGxlcicpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuYWRtaW4uc2Vhc29uLm5ldycsIFtdKVxuICAuY29udHJvbGxlcignQWRtaW5TZWFzb25OZXdDb250cm9sbGVyJywgcmVxdWlyZSgnLi9BZG1pblNlYXNvbk5ld0NvbnRyb2xsZXInKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmFkbWluLnNlYXNvbi5lZGl0JywgW10pXG4gIC5jb250cm9sbGVyKCdBZG1pblNlYXNvbkVkaXRDb250cm9sbGVyJywgcmVxdWlyZSgnLi9BZG1pblNlYXNvbkVkaXRDb250cm9sbGVyJykpO1xuIiwiXG52YXIgVXNlck1vZGVsID0gZnVuY3Rpb24oJHJvb3RTY29wZSwgJHdpbmRvdywgJGxvZykge1xuXG4gICAgdmFyIHVzZXIgPSB7fTtcbiAgICB1c2VyLmxvYWRlZCA9IGZhbHNlO1xuICAgIHVzZXIuaWQgPSAnJztcbiAgICB1c2VyLmVtYWlsID0gJyc7XG4gICAgdXNlci5maXJzdF9uYW1lID0gJyc7XG4gICAgdXNlci5sYXN0X25hbWUgPSAnJztcbiAgICB1c2VyLmFkbWluID0gZmFsc2U7XG4gICAgdGhpcy51c2VyID0gdXNlcjtcblxuICAgIHZhciB0ZWFtTWVzc2FnZU9wZW4gPSB7fTtcbiAgICB0aGlzLnRlYW1NZXNzYWdlT3BlbiA9IHRlYW1NZXNzYWdlT3BlbjtcblxuICAgIHZhciBsZWFndWVNZXNzYWdlT3BlbiA9IHt9O1xuICAgIHRoaXMubGVhZ3VlTWVzc2FnZU9wZW4gPSBsZWFndWVNZXNzYWdlT3BlbjtcblxuICAgIHRoaXMuc2V0VXNlciA9IGZ1bmN0aW9uKHVzZXJEYXRhKSB7XG4gICAgICAgIHVzZXIubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgdXNlciA9IGFuZ3VsYXIuZXh0ZW5kKHVzZXIsIHVzZXJEYXRhKTtcbiAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCd1c2VyTW9kZWw6OnVzZXJVcGRhdGVkJywgdXNlcik7XG4gICAgICAgICRsb2cuZGVidWcoXCJVc2VyTW9kZWw6IHNldFVzZXI6IFwiICsgdXNlci5pZCk7XG4gICAgICAgICRsb2cuZGVidWcoXCJVc2VyTW9kZWw6IHNldFVzZXI6IFwiICsgdXNlci5lbWFpbCk7XG4gICAgfTtcblxuICAgIHRoaXMucmVzZXRVc2VyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcblxuICAgICAgICB1c2VyID0ge307XG4gICAgICAgIHVzZXIubG9hZGVkID0gZmFsc2U7XG4gICAgICAgIHVzZXIuaWQgPSAnJztcbiAgICAgICAgdXNlci5lbWFpbCA9ICcnO1xuICAgICAgICB1c2VyLmZpcnN0X25hbWUgPSAnJztcbiAgICAgICAgdXNlci5sYXN0X25hbWUgPSAnJztcbiAgICAgICAgdXNlci5hZG1pbiA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMudXNlciA9IHVzZXI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiY3JlYXRpbmcgdXNlciBtb2RlbC4uLlwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcblxufTtcblxuVXNlck1vZGVsLiRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJHdpbmRvdycsICckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IFVzZXJNb2RlbDsiLCJcbnZhciBNZXNzYWdlTW9kZWwgPSBmdW5jdGlvbigkcm9vdFNjb3BlLCAkbG9nKSB7XG5cbiAgICB2YXIgbW9kZWwgPSB0aGlzO1xuICAgIHZhciBxdWV1ZSA9IFtdO1xuXG4gICAgdmFyIG1lc3NhZ2UgPSB7fTtcbiAgICBtZXNzYWdlLmxvYWRlZCA9IGZhbHNlO1xuICAgIG1lc3NhZ2UudHlwZSA9ICcnOyAvLyBjYW4gYmUgc3VjY2VzcywgaW5mbywgd2FybmluZyBvciBkYW5nZXJcbiAgICBtZXNzYWdlLmNvbnRlbnQgPSAnJztcblxuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG5cbiAgICB0aGlzLnNldE1lc3NhZ2UgPSBmdW5jdGlvbihtZXNzYWdlRGF0YSwgZGVsYXkpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSB7fTtcbiAgICAgICAgbWVzc2FnZS5sb2FkZWQgPSB0cnVlO1xuICAgICAgICBtZXNzYWdlID0gYW5ndWxhci5leHRlbmQobWVzc2FnZSwgbWVzc2FnZURhdGEpO1xuICAgICAgICBpZiAoZGVsYXkpIHtcbiAgICAgICAgICAgIHF1ZXVlWzBdID0gbWVzc2FnZTsgLy8gcXVldWUgaXQgdXAgZm9yIGFmdGVyIGEgbG9jYXRpb24gY2hhbmdlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2RlbC5tZXNzYWdlID0gbWVzc2FnZTsgLy8gc2hvdyB0aGUgbWVzc2FnZSBhc2FwXG4gICAgICAgICAgICBxdWV1ZSA9IFtdOyAvLyBjbGVhciB0aGUgcXVldWUgYXMgbWVzc2FnZSB3aWxsIGJlIHNob3dlZCBpbW1lZGlhdGVseVxuICAgICAgICB9XG4gICAgICAgICRsb2cuZGVidWcoXCJNZXNzYWdlTW9kZWw6IGNvbnRlbnQ6IFwiICsgbWVzc2FnZS5jb250ZW50KTtcbiAgICB9O1xuXG4gICAgdGhpcy5yZXNldE1lc3NhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbWVzc2FnZSA9IHt9O1xuICAgICAgICBtZXNzYWdlLmxvYWRlZCA9IGZhbHNlO1xuICAgICAgICBtZXNzYWdlLnR5cGUgPSAnJztcbiAgICAgICAgbWVzc2FnZS5jb250ZW50ID0gJyc7XG5cbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB9O1xuXG4gICAgJHJvb3RTY29wZS4kb24oXCIkbG9jYXRpb25DaGFuZ2VTdGFydFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbW9kZWwucmVzZXRNZXNzYWdlKCk7XG4gICAgfSk7XG5cbiAgICAkcm9vdFNjb3BlLiRvbihcIiRsb2NhdGlvbkNoYW5nZVN1Y2Nlc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIG1vZGVsLm1lc3NhZ2UgPSBxdWV1ZS5zaGlmdCgpIHx8IHt9O1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJjcmVhdGluZyBtZXNzYWdlIG1vZGVsLi4uXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5NZXNzYWdlTW9kZWwuJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IE1lc3NhZ2VNb2RlbDtcbiIsInZhciBTZWFzb25Nb2RlbCA9IGZ1bmN0aW9uKCRsb2cpIHtcblxuICB2YXIgbW9kZWwgPSB0aGlzO1xuXG4gIHZhciBzZWFzb25zID0gW107XG4gIHZhciBjdXJyZW50U2Vhc29ucyA9IFtdO1xuICB2YXIgc3RhcnRlZFNlYXNvbnMgPSBbXTtcbiAgdmFyIHNlbGVjdGVkU2Vhc29uSWQ7XG4gIHZhciBsb2FkZWQgPSBmYWxzZTtcblxuICB0aGlzLnNlYXNvbnMgPSBzZWFzb25zO1xuICB0aGlzLmN1cnJlbnRTZWFzb25zID0gY3VycmVudFNlYXNvbnM7XG4gIHRoaXMuc3RhcnRlZFNlYXNvbnMgPSBzdGFydGVkU2Vhc29ucztcbiAgdGhpcy5zZWxlY3RlZFNlYXNvbklkID0gc2VsZWN0ZWRTZWFzb25JZDtcbiAgdGhpcy5sb2FkZWQgPSBsb2FkZWQ7XG5cbiAgdGhpcy5nZXRDdXJyZW50U2Vhc29uID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG1vZGVsLmN1cnJlbnRTZWFzb25zW21vZGVsLmN1cnJlbnRTZWFzb25zLmxlbmd0aCAtIDFdO1xuICB9O1xuXG4gIHRoaXMuc2V0U2Vhc29ucyA9IGZ1bmN0aW9uKHNlYXNvbnNBcnJheSkge1xuICAgIGlmICghYW5ndWxhci5pc0FycmF5KHNlYXNvbnNBcnJheSkpIHJldHVybjtcbiAgICBtb2RlbC5zZWFzb25zID0gc2Vhc29uc0FycmF5O1xuICAgIG1vZGVsLmN1cnJlbnRTZWFzb25zID0gXy5maWx0ZXIoc2Vhc29uc0FycmF5LCBmdW5jdGlvbihzZWFzb24pIHtcbiAgICAgIHJldHVybiBzZWFzb24uY3VycmVudDtcbiAgICB9KTtcbiAgICBtb2RlbC5zdGFydGVkU2Vhc29ucyA9IF8uZmlsdGVyKHNlYXNvbnNBcnJheSwgZnVuY3Rpb24oc2Vhc29uKSB7XG4gICAgICByZXR1cm4gc2Vhc29uLnN0YXJ0ZWQ7XG4gICAgfSk7XG4gICAgbW9kZWwuc2V0U2VsZWN0ZWRTZWFzb25JZChtb2RlbC5nZXRDdXJyZW50U2Vhc29uKCkuaWQpO1xuICAgIG1vZGVsLmxvYWRlZCA9IHRydWU7XG4gIH07XG5cbiAgdGhpcy5zZXRTZWxlY3RlZFNlYXNvbklkID0gZnVuY3Rpb24oc2Vhc29uSWQpIHtcbiAgICBtb2RlbC5zZWxlY3RlZFNlYXNvbklkID0gc2Vhc29uSWQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcImNyZWF0aW5nIHNlYXNvbiBtb2RlbC4uLlwiKTtcbiAgfTtcbiAgaW5pdCgpO1xuXG59O1xuXG5TZWFzb25Nb2RlbC4kaW5qZWN0ID0gWyckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IFNlYXNvbk1vZGVsOyIsIi8qXG4gKiAgR2xvYmFsIGNvbmZpZyBmb3IgcmVtb3RlIHNlcnZpY2VzXG4gKi9cblxudmFyIEFwaUNvbmZpZyA9ICB7XG4gICAgYmFzZVVSTDogJy9hcGkvJ1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcGlDb25maWc7XG4iLCJ2YXIgR2FtZVNlcnZpY2UgPSBmdW5jdGlvbigkaHR0cCwgJGxvZywgJHN0YXRlLCBhcGlDb25maWcsIG1lc3NhZ2VNb2RlbCkge1xuXG4gIHRoaXMuZ2V0Q3VycmVudEdhbWVzID0gZnVuY3Rpb24obGVhZ3VlSWQpIHtcbiAgICB2YXIgYXBpVXJsID0gYXBpQ29uZmlnLmJhc2VVUkwgKyBcImdhbWVzL2N1cnJlbnQ/bGVhZ3VlX2lkPVwiICsgbGVhZ3VlSWQ7XG5cbiAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlVcmwpXG4gICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJHYW1lU2VydmljZTogZ2V0Q3VycmVudEdhbWVzIHN1Y2Nlc3NcIik7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSlcbiAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJHYW1lU2VydmljZTogZ2V0Q3VycmVudEdhbWVzIGZhaWxlZFwiKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KTtcblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9O1xuXG4gIHRoaXMuZ2V0V2Vla0dhbWVzID0gZnVuY3Rpb24od2Vla0lkKSB7XG4gICAgdmFyIGFwaVVybCA9IGFwaUNvbmZpZy5iYXNlVVJMICsgXCJ3ZWVrcy9cIiArIHdlZWtJZCArIFwiL2dhbWVzXCI7XG5cbiAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlVcmwpXG4gICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJHYW1lU2VydmljZTogZ2V0V2Vla0dhbWVzIHN1Y2Nlc3NcIik7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSlcbiAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJHYW1lU2VydmljZTogZ2V0V2Vla0dhbWVzIGZhaWxlZFwiKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KTtcblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9O1xuXG4gIHRoaXMuY3JlYXRlR2FtZSA9IGZ1bmN0aW9uKGdhbWVQYXJhbXMpIHtcbiAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnBvc3QoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImFkbWluL3dlZWtzL1wiICsgZ2FtZVBhcmFtcy53ZWVrX2lkICsgXCIvZ2FtZXNcIixcbiAgICAgIHsgZ2FtZTogZ2FtZVBhcmFtcyB9KVxuICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiR2FtZVNlcnZpY2U6IGNyZWF0ZUdhbWUgc3VjY2Vzc1wiKTtcbiAgICAgICAgLy8gdG9kbzogdGhpcyByZWxpZXMgb24gYSBtb25rZXkgcGF0Y2ggYXQgdGhlIG1vbWVudCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyLXVpL3VpLXJvdXRlci9pc3N1ZXMvNTgyXG4gICAgICAgIC8vIGJ1dCBtYXkgYmUgcmVzb2x2ZWQgd2l0aCBmdXR1cmUgcmVsZWFzZXMgb2YgYW5ndWxhci11aS1yb3V0ZXJcbiAgICAgICAgJHN0YXRlLnJlbG9hZCgpOyAvLyByZWxvYWRzIGFsbCB0aGUgcmVzb2x2ZXMgZm9yIHRoZSB2aWV3IGxlYWd1ZSBwYWdlIGFuZCByZWluc3RhbnRpYXRlcyB0aGUgY29udHJvbGxlclxuICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KVxuICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIkdhbWVTZXJ2aWNlOiBjcmVhdGVHYW1lIGZhaWxlZFwiKTtcbiAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfTtcblxuICB0aGlzLnVwZGF0ZUdhbWUgPSBmdW5jdGlvbihnYW1lUGFyYW1zKSB7XG4gICAgdmFyIHByb21pc2UgPSAkaHR0cC5wdXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImFkbWluL3dlZWtzL1wiICsgZ2FtZVBhcmFtcy53ZWVrX2lkICsgXCIvZ2FtZXMvXCIgKyBnYW1lUGFyYW1zLmlkLFxuICAgICAgeyBnYW1lOiBnYW1lUGFyYW1zIH0pXG4gICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJHYW1lU2VydmljZTogdXBkYXRlR2FtZSBzdWNjZXNzXCIpO1xuICAgICAgICAvLyB0b2RvOiB0aGlzIHJlbGllcyBvbiBhIG1vbmtleSBwYXRjaCBhdCB0aGUgbW9tZW50IC0gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXItdWkvdWktcm91dGVyL2lzc3Vlcy81ODJcbiAgICAgICAgLy8gYnV0IG1heSBiZSByZXNvbHZlZCB3aXRoIGZ1dHVyZSByZWxlYXNlcyBvZiBhbmd1bGFyLXVpLXJvdXRlclxuICAgICAgICAkc3RhdGUucmVsb2FkKCk7IC8vIHJlbG9hZHMgYWxsIHRoZSByZXNvbHZlcyBmb3IgdGhlIHZpZXcgbGVhZ3VlIHBhZ2UgYW5kIHJlaW5zdGFudGlhdGVzIHRoZSBjb250cm9sbGVyXG4gICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pXG4gICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiR2FtZVNlcnZpY2U6IHVwZGF0ZUdhbWUgZmFpbGVkXCIpO1xuICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KTtcblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9O1xuXG59O1xuXG5HYW1lU2VydmljZS4kaW5qZWN0ID0gWyckaHR0cCcsICckbG9nJywgJyRzdGF0ZScsICdhcGlDb25maWcnLCAnbWVzc2FnZU1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVTZXJ2aWNlOyIsInZhciBMZWFndWVTZXJ2aWNlID0gZnVuY3Rpb24oJGh0dHAsICRsb2csICRxLCAkc3RhdGUsIGFwaUNvbmZpZywgbWVzc2FnZU1vZGVsKSB7XG5cbiAgICB0aGlzLmdldExlYWd1ZSA9IGZ1bmN0aW9uKHNlYXNvbklkLCBsZWFndWVJZCkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlDb25maWcuYmFzZVVSTCArIFwic2Vhc29ucy9cIiArIHNlYXNvbklkICsgXCIvbGVhZ3Vlcy9cIiArIGxlYWd1ZUlkKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBnZXRMZWFndWUgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBnZXRMZWFndWUgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0QWxsTGVhZ3VlcyA9IGZ1bmN0aW9uKHNlYXNvbklkKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJhZG1pbi9zZWFzb25zL1wiICsgc2Vhc29uSWQgKyBcIi9sZWFndWVzXCIpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IGdldEFsbExlYWd1ZXMgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBnZXRBbGxMZWFndWVzIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmdldExlYWd1ZXMgPSBmdW5jdGlvbihzZWFzb25JZCkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlDb25maWcuYmFzZVVSTCArIFwic2Vhc29ucy9cIiArIHNlYXNvbklkICsgXCIvbGVhZ3Vlc1wiKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBnZXRMZWFndWVzIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogZ2V0TGVhZ3VlcyBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRNYW5hZ2VkTGVhZ3VlcyA9IGZ1bmN0aW9uKHNlYXNvbklkKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZWFzb25zL1wiICsgc2Vhc29uSWQgKyBcIi9sZWFndWVzL21hbmFnZWRcIilcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogZ2V0TWFuYWdlZExlYWd1ZXMgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBnZXRNYW5hZ2VkTGVhZ3VlcyBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRQdWJsaWNMZWFndWVzID0gZnVuY3Rpb24oc2Vhc29uSWQpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBzZWFzb25JZCArIFwiL2xlYWd1ZXMvcHVibGljXCIpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IGdldFB1YmxpY0xlYWd1ZXMgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBnZXRQdWJsaWNMZWFndWVzIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmdldFByaXZhdGVMZWFndWVzID0gZnVuY3Rpb24oc2Vhc29uSWQpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBzZWFzb25JZCArIFwiL2xlYWd1ZXMvcHJpdmF0ZVwiKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBnZXRQcml2YXRlTGVhZ3VlcyBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IGdldFByaXZhdGVMZWFndWVzIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmNyZWF0ZUxlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZVBhcmFtcykge1xuICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgICAkaHR0cC5wb3N0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZWFzb25zL1wiICsgbGVhZ3VlUGFyYW1zLnNlYXNvbl9pZCArIFwiL2xlYWd1ZXNcIixcbiAgICAgICAgICAgIHsgbGVhZ3VlOiBsZWFndWVQYXJhbXMgfSlcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogY3JlYXRlTGVhZ3VlIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IGNyZWF0ZUxlYWd1ZSBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGRhdGEpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMudXBkYXRlTGVhZ3VlID0gZnVuY3Rpb24obGVhZ3VlUGFyYW1zKSB7XG4gICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgICRodHRwLnB1dChhcGlDb25maWcuYmFzZVVSTCArIFwic2Vhc29ucy9cIiArIGxlYWd1ZVBhcmFtcy5zZWFzb25faWQgKyBcIi9sZWFndWVzL1wiICsgbGVhZ3VlUGFyYW1zLmlkLFxuICAgICAgICAgICAgeyBsZWFndWU6IGxlYWd1ZVBhcmFtcyB9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiB1cGRhdGVMZWFndWUgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIHRydWUpO1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogdXBkYXRlTGVhZ3VlIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZGF0YSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5jbG9zZUxlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZVBhcmFtcykge1xuICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBsZWFndWVQYXJhbXMuc2Vhc29uX2lkICsgXCIvbGVhZ3Vlcy9cIiArIGxlYWd1ZVBhcmFtcy5pZCArIFwiL2Nsb3NlXCIpXG4gICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogY2xvc2VMZWFndWUgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAvLyB0b2RvOiB0aGlzIHJlbGllcyBvbiBhIG1vbmtleSBwYXRjaCBhdCB0aGUgbW9tZW50IC0gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXItdWkvdWktcm91dGVyL2lzc3Vlcy81ODJcbiAgICAgICAgICAvLyBidXQgbWF5IGJlIHJlc29sdmVkIHdpdGggZnV0dXJlIHJlbGVhc2VzIG9mIGFuZ3VsYXItdWktcm91dGVyXG4gICAgICAgICAgJHN0YXRlLnJlbG9hZCgpOyAvLyByZWxvYWRzIGFsbCB0aGUgcmVzb2x2ZXMgZm9yIHRoZSB2aWV3IGxlYWd1ZSBwYWdlIGFuZCByZWluc3RhbnRpYXRlcyB0aGUgY29udHJvbGxlclxuICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KVxuICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBjbG9zZUxlYWd1ZSBmYWlsZWRcIik7XG4gICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVMZWFndWVNZXNzYWdlID0gZnVuY3Rpb24obGVhZ3VlUGFyYW1zLCBlbWFpbEFsaXZlLCBlbWFpbEFsbCkge1xuICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAgICRodHRwLnB1dChhcGlDb25maWcuYmFzZVVSTCArIFwic2Vhc29ucy9cIiArIGxlYWd1ZVBhcmFtcy5zZWFzb25faWQgKyBcIi9sZWFndWVzL1wiICsgbGVhZ3VlUGFyYW1zLmlkICsgXCIvbWVzc2FnZVwiLFxuICAgICAgICAgICAgeyBsZWFndWU6IGxlYWd1ZVBhcmFtcywgZW1haWxBbGl2ZTogZW1haWxBbGl2ZSwgZW1haWxBbGw6IGVtYWlsQWxsIH0pXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IHVwZGF0ZUxlYWd1ZU1lc3NhZ2Ugc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGxlYWd1ZVBhcmFtcy5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiB1cGRhdGVMZWFndWVNZXNzYWdlIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLnNlbmRDb21taXNoTWVzc2FnZSA9IGZ1bmN0aW9uKGxlYWd1ZVBhcmFtcywgbWVzc2FnZSkge1xuICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgICAkaHR0cC5wdXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBsZWFndWVQYXJhbXMuc2Vhc29uX2lkICsgXCIvbGVhZ3Vlcy9cIiArIGxlYWd1ZVBhcmFtcy5pZCArIFwiL2NvbnRhY3RcIixcbiAgICAgICAgICAgIHsgY29udGFjdDogbWVzc2FnZSB9KVxuICAgICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogc2VuZENvbW1pc2hNZXNzYWdlIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBzZW5kQ29tbWlzaE1lc3NhZ2UgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0SW52aXRlcyA9IGZ1bmN0aW9uKGxlYWd1ZUlkKSB7XG4gICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlDb25maWcuYmFzZVVSTCArIFwibGVhZ3Vlcy9cIiArIGxlYWd1ZUlkICsgXCIvaW52aXRhdGlvbnNcIilcbiAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBnZXRJbnZpdGVzIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pXG4gICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IGdldEludml0ZXMgZmFpbGVkXCIpO1xuICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuY3JlYXRlSW52aXRlID0gZnVuY3Rpb24oaW52aXRlUGFyYW1zKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAucG9zdChhcGlDb25maWcuYmFzZVVSTCArIFwibGVhZ3Vlcy9cIiArIGludml0ZVBhcmFtcy5sZWFndWVfaWQgKyBcIi9pbnZpdGF0aW9uc1wiLFxuICAgICAgICAgICAgeyBpbnZpdGF0aW9uOiBpbnZpdGVQYXJhbXMgfSlcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogY3JlYXRlSW52aXRlIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogY3JlYXRlSW52aXRlIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLnJlcXVlc3RJbnZpdGUgPSBmdW5jdGlvbihpbnZpdGVQYXJhbXMpIHtcbiAgICAgIHZhciBwcm9taXNlID0gJGh0dHAucG9zdChhcGlDb25maWcuYmFzZVVSTCArIFwibGVhZ3Vlcy9cIiArIGludml0ZVBhcmFtcy5sZWFndWVfaWQgKyBcIi9pbnZpdGF0aW9ucy9uZXdcIixcbiAgICAgICAgICAgIHsgaW52aXRhdGlvbjogaW52aXRlUGFyYW1zIH0pXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IHJlcXVlc3RJbnZpdGUgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiByZXF1ZXN0SW52aXRlIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbn07XG5cbkxlYWd1ZVNlcnZpY2UuJGluamVjdCA9IFsnJGh0dHAnLCAnJGxvZycsICckcScsICckc3RhdGUnLCAnYXBpQ29uZmlnJywgJ21lc3NhZ2VNb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBMZWFndWVTZXJ2aWNlOyIsInZhciBQaWNrU2VydmljZSA9IGZ1bmN0aW9uKCRodHRwLCAkbG9nLCAkcSwgYXBpQ29uZmlnLCBtZXNzYWdlTW9kZWwpIHtcblxuICB0aGlzLmdldFBpY2tzID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgdmFyIGFwaVVybCA9IGFwaUNvbmZpZy5iYXNlVVJMICsgXCJ0ZWFtcy9cIiArIHBhcmFtcy50ZWFtSWQgKyBcIi9waWNrc1wiO1xuXG4gICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpVXJsKVxuICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiUGlja1NlcnZpY2U6IGdldFBpY2tzIHN1Y2Nlc3NcIik7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSlcbiAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJQaWNrU2VydmljZTogZ2V0UGlja3MgZmFpbGVkXCIpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH07XG5cbiAgdGhpcy5nZXRTZWxlY3RlZFBpY2tzID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgdmFyIGFwaVVybCA9IGFwaUNvbmZpZy5iYXNlVVJMICsgXCJ0ZWFtcy9cIiArIHBhcmFtcy50ZWFtSWQgKyBcIi9waWNrcy9zZWxlY3RlZFwiO1xuXG4gICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpVXJsKVxuICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiUGlja1NlcnZpY2U6IGdldFNlbGVjdGVkUGlja3Mgc3VjY2Vzc1wiKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KVxuICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIlBpY2tTZXJ2aWNlOiBnZXRTZWxlY3RlZFBpY2tzIGZhaWxlZFwiKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KTtcblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9O1xuXG4gIHRoaXMuc2F2ZVBpY2sgPSBmdW5jdGlvbihwaWNrUGFyYW1zKSB7XG4gICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKSxcbiAgICAgICAgYXBpVXJsID0gYXBpQ29uZmlnLmJhc2VVUkwgKyBcInRlYW1zL1wiICsgcGlja1BhcmFtcy50ZWFtX2lkICsgXCIvcGlja3NcIjtcblxuICAgICRodHRwLnBvc3QoYXBpVXJsLCB7IHBpY2s6IHBpY2tQYXJhbXMgfSlcbiAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIlBpY2tTZXJ2aWNlOiBzYXZlUGljayBzdWNjZXNzXCIpO1xuICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIHRydWUpO1xuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJQaWNrU2VydmljZTogc2F2ZVBpY2sgZmFpbGVkXCIpO1xuICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIHRydWUpO1xuICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gIH07XG5cbiAgdGhpcy5zYXZlUGlja3MgPSBmdW5jdGlvbih0ZWFtSWQsIHBpY2tzKSB7XG4gICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKSxcbiAgICAgICAgYXBpVXJsID0gYXBpQ29uZmlnLmJhc2VVUkwgKyBcInRlYW1zL1wiICsgdGVhbUlkICsgXCIvcGlja3MvbWFueVwiO1xuXG4gICAgJGh0dHAucG9zdChhcGlVcmwsIHsgcGlja3M6IHBpY2tzIH0pXG4gICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJQaWNrU2VydmljZTogc2F2ZVBpY2tzIHN1Y2Nlc3NcIik7XG4gICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgdHJ1ZSk7XG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUoZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIlBpY2tTZXJ2aWNlOiBzYXZlUGlja3MgZmFpbGVkXCIpO1xuICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIHRydWUpO1xuICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gIH07XG5cbn07XG5cblBpY2tTZXJ2aWNlLiRpbmplY3QgPSBbJyRodHRwJywgJyRsb2cnLCAnJHEnLCAnYXBpQ29uZmlnJywgJ21lc3NhZ2VNb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBQaWNrU2VydmljZTsiLCJ2YXIgU2Vhc29uU2VydmljZSA9IGZ1bmN0aW9uKCRodHRwLCAkbG9nLCAkc3RhdGUsICRxLCBhcGlDb25maWcsIG1lc3NhZ2VNb2RlbCwgc2Vhc29uTW9kZWwpIHtcblxuICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgdGhpcy5nZXRTZWFzb25zID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgICRodHRwLmdldChhcGlDb25maWcuYmFzZVVSTCArIFwic2Vhc29uc1wiKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJTZWFzb25TZXJ2aWNlOiBnZXRTZWFzb25zIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgc2Vhc29uTW9kZWwuc2V0U2Vhc29ucyhkYXRhKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlNlYXNvblNlcnZpY2U6IGdldFNlYXNvbnMgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmdldFNlYXNvbiA9IGZ1bmN0aW9uKHNlYXNvbklkKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJhZG1pbi9zZWFzb25zL1wiICsgc2Vhc29uSWQpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlNlYXNvblNlcnZpY2U6IGdldFNlYXNvbiBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlNlYXNvblNlcnZpY2U6IGdldFNlYXNvbiBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5jcmVhdGVTZWFzb24gPSBmdW5jdGlvbihzZWFzb25QYXJhbXMpIHtcbiAgICAgIHZhciBwcm9taXNlID0gJGh0dHAucG9zdChhcGlDb25maWcuYmFzZVVSTCArIFwiYWRtaW4vc2Vhc29ucy9cIixcbiAgICAgICAgeyBzZWFzb246IHNlYXNvblBhcmFtcyB9KVxuICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgJGxvZy5kZWJ1ZyhcIlNlYXNvblNlcnZpY2U6IGNyZWF0ZVNlYXNvbiBzdWNjZXNzXCIpO1xuICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgIC8vIG5lZWQgdG8gY2FsbCBnZXRTZWFzb25zKCkgYWdhaW4gdG8gcmVzZXQgdGhlIHNlYXNvbm1vZGVsXG4gICAgICAgICAgc2VydmljZS5nZXRTZWFzb25zKClcbiAgICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgICBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIC8vIHRvZG86IHRoaXMgcmVsaWVzIG9uIGEgbW9ua2V5IHBhdGNoIGF0IHRoZSBtb21lbnQgLSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci11aS91aS1yb3V0ZXIvaXNzdWVzLzU4MlxuICAgICAgICAgICAgICAgIC8vIGJ1dCBtYXkgYmUgcmVzb2x2ZWQgd2l0aCBmdXR1cmUgcmVsZWFzZXMgb2YgYW5ndWxhci11aS1yb3V0ZXJcbiAgICAgICAgICAgICAgICAkc3RhdGUucmVsb2FkKCk7IC8vIHJlbG9hZHMgYWxsIHRoZSByZXNvbHZlcyBmb3IgdGhlIHZpZXcgbGVhZ3VlIHBhZ2UgYW5kIHJlaW5zdGFudGlhdGVzIHRoZSBjb250cm9sbGVyXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pXG4gICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgJGxvZy5kZWJ1ZyhcIlNlYXNvblNlcnZpY2U6IGNyZWF0ZVNlYXNvbiBmYWlsZWRcIik7XG4gICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVTZWFzb24gPSBmdW5jdGlvbihzZWFzb25QYXJhbXMpIHtcbiAgICAgIHZhciBwcm9taXNlID0gJGh0dHAucHV0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJhZG1pbi9zZWFzb25zL1wiICsgc2Vhc29uUGFyYW1zLmlkLFxuICAgICAgICB7IHNlYXNvbjogc2Vhc29uUGFyYW1zIH0pXG4gICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAkbG9nLmRlYnVnKFwiU2Vhc29uU2VydmljZTogdXBkYXRlU2Vhc29uIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgLy8gdG9kbzogdGhpcyByZWxpZXMgb24gYSBtb25rZXkgcGF0Y2ggYXQgdGhlIG1vbWVudCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyLXVpL3VpLXJvdXRlci9pc3N1ZXMvNTgyXG4gICAgICAgICAgLy8gYnV0IG1heSBiZSByZXNvbHZlZCB3aXRoIGZ1dHVyZSByZWxlYXNlcyBvZiBhbmd1bGFyLXVpLXJvdXRlclxuICAgICAgICAgICRzdGF0ZS5yZWxvYWQoKTsgLy8gcmVsb2FkcyBhbGwgdGhlIHJlc29sdmVzIGZvciB0aGUgdmlldyBsZWFndWUgcGFnZSBhbmQgcmVpbnN0YW50aWF0ZXMgdGhlIGNvbnRyb2xsZXJcbiAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSlcbiAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAkbG9nLmRlYnVnKFwiU2Vhc29uU2VydmljZTogdXBkYXRlU2Vhc29uIGZhaWxlZFwiKTtcbiAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbn07XG5cblNlYXNvblNlcnZpY2UuJGluamVjdCA9IFsnJGh0dHAnLCAnJGxvZycsICckc3RhdGUnLCAnJHEnLCAnYXBpQ29uZmlnJywgJ21lc3NhZ2VNb2RlbCcsICdzZWFzb25Nb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBTZWFzb25TZXJ2aWNlOyIsInZhciBTcXVhZFNlcnZpY2UgPSBmdW5jdGlvbigkaHR0cCwgJGxvZywgJHN0YXRlLCBhcGlDb25maWcsIG1lc3NhZ2VNb2RlbCkge1xuXG4gIHRoaXMuZ2V0U3F1YWRzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFwaVVybCA9IGFwaUNvbmZpZy5iYXNlVVJMICsgXCJhZG1pbi9zcXVhZHMvYWxsXCI7XG5cbiAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlVcmwpXG4gICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJTcXVhZFNlcnZpY2U6IGdldFNxdWFkcyBzdWNjZXNzXCIpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pXG4gICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiU3F1YWRTZXJ2aWNlOiBnZXRTcXVhZHMgZmFpbGVkXCIpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH07XG5cbiAgdGhpcy5nZXRXZWVrU3F1YWRzID0gZnVuY3Rpb24od2Vlaykge1xuICAgIHZhciBhcGlVcmwgPSBhcGlDb25maWcuYmFzZVVSTCArIFwiYWRtaW4vd2Vla3MvXCIgKyB3ZWVrLmlkICsgXCIvc3F1YWRzXCI7XG5cbiAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlVcmwpXG4gICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJTcXVhZFNlcnZpY2U6IGdldFdlZWtTcXVhZHMgc3VjY2Vzc1wiKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KVxuICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIlNxdWFkU2VydmljZTogZ2V0V2Vla1NxdWFkcyBmYWlsZWRcIik7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfTtcblxuICB0aGlzLmNyZWF0ZVNxdWFkID0gZnVuY3Rpb24oc3F1YWRQYXJhbXMpIHtcbiAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnBvc3QoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImFkbWluL3NxdWFkcy9cIixcbiAgICAgIHsgc3F1YWQ6IHNxdWFkUGFyYW1zIH0pXG4gICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJTcXVhZFNlcnZpY2U6IGNyZWF0ZVNxdWFkIHN1Y2Nlc3NcIik7XG4gICAgICAgIC8vIHRvZG86IHRoaXMgcmVsaWVzIG9uIGEgbW9ua2V5IHBhdGNoIGF0IHRoZSBtb21lbnQgLSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci11aS91aS1yb3V0ZXIvaXNzdWVzLzU4MlxuICAgICAgICAvLyBidXQgbWF5IGJlIHJlc29sdmVkIHdpdGggZnV0dXJlIHJlbGVhc2VzIG9mIGFuZ3VsYXItdWktcm91dGVyXG4gICAgICAgICRzdGF0ZS5yZWxvYWQoKTsgLy8gcmVsb2FkcyBhbGwgdGhlIHJlc29sdmVzIGZvciB0aGUgdmlldyBsZWFndWUgcGFnZSBhbmQgcmVpbnN0YW50aWF0ZXMgdGhlIGNvbnRyb2xsZXJcbiAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSlcbiAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJTcXVhZFNlcnZpY2U6IGNyZWF0ZVNxdWFkIGZhaWxlZFwiKTtcbiAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfTtcblxuICB0aGlzLnVwZGF0ZVNxdWFkID0gZnVuY3Rpb24oc3F1YWRQYXJhbXMpIHtcbiAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnB1dChhcGlDb25maWcuYmFzZVVSTCArIFwiYWRtaW4vc3F1YWRzL1wiICsgc3F1YWRQYXJhbXMuaWQsXG4gICAgICB7IHNxdWFkOiBzcXVhZFBhcmFtcyB9KVxuICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiU3F1YWRTZXJ2aWNlOiB1cGRhdGVTcXVhZCBzdWNjZXNzXCIpO1xuICAgICAgICAvLyB0b2RvOiB0aGlzIHJlbGllcyBvbiBhIG1vbmtleSBwYXRjaCBhdCB0aGUgbW9tZW50IC0gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXItdWkvdWktcm91dGVyL2lzc3Vlcy81ODJcbiAgICAgICAgLy8gYnV0IG1heSBiZSByZXNvbHZlZCB3aXRoIGZ1dHVyZSByZWxlYXNlcyBvZiBhbmd1bGFyLXVpLXJvdXRlclxuICAgICAgICAkc3RhdGUucmVsb2FkKCk7IC8vIHJlbG9hZHMgYWxsIHRoZSByZXNvbHZlcyBmb3IgdGhlIHZpZXcgbGVhZ3VlIHBhZ2UgYW5kIHJlaW5zdGFudGlhdGVzIHRoZSBjb250cm9sbGVyXG4gICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pXG4gICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiU3F1YWRTZXJ2aWNlOiB1cGRhdGVTcXVhZCBmYWlsZWRcIik7XG4gICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH07XG5cbn07XG5cblNxdWFkU2VydmljZS4kaW5qZWN0ID0gWyckaHR0cCcsICckbG9nJywgJyRzdGF0ZScsICdhcGlDb25maWcnLCAnbWVzc2FnZU1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IFNxdWFkU2VydmljZTsiLCJ2YXIgVGVhbVNlcnZpY2UgPSBmdW5jdGlvbigkaHR0cCwgJGxvZywgJHEsIGFwaUNvbmZpZywgbWVzc2FnZU1vZGVsKSB7XG5cbiAgICB0aGlzLmdldFRlYW0gPSBmdW5jdGlvbihsZWFndWVJZCwgdGVhbUlkKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJsZWFndWVzL1wiICsgbGVhZ3VlSWQgKyBcIi90ZWFtcy9cIiArIHRlYW1JZClcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IGdldFRlYW0gc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogZ2V0VGVhbSBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRBbGxUZWFtcyA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICAgICAgICB2YXIgYXBpVXJsID0gYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBwYXJhbXMuc2Vhc29uSWQgKyBcIi90ZWFtcy9hbGxcIjtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpVXJsKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogZ2V0QWxsVGVhbXMgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogZ2V0QWxsVGVhbXMgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0QWxsTGVhZ3VlVGVhbXMgPSBmdW5jdGlvbihwYXJhbXMpIHtcbiAgICAgICAgdmFyIGFwaVVybCA9IGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZWFzb25zL1wiICsgcGFyYW1zLnNlYXNvbklkICsgXCIvdGVhbXMvYWxsP2xlYWd1ZV9pZD1cIiArIHBhcmFtcy5sZWFndWVJZDtcbiAgICAgICAgaWYgKHBhcmFtcy53ZWVrU2x1Zykge1xuICAgICAgICAgICAgYXBpVXJsICs9IFwiJndlZWtfc2x1Zz1cIiArIHBhcmFtcy53ZWVrU2x1ZztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaVVybClcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IGdldEFsbExlYWd1ZVRlYW1zIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IGdldEFsbExlYWd1ZVRlYW1zIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmdldExlYWd1ZVRlYW1zID0gZnVuY3Rpb24obGVhZ3VlSWQpIHtcbiAgICAgICAgdmFyIGFwaVVybCA9IGFwaUNvbmZpZy5iYXNlVVJMICsgXCJsZWFndWVzL1wiICsgbGVhZ3VlSWQgKyBcIi90ZWFtc1wiO1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlVcmwpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBnZXRMZWFndWVUZWFtcyBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBnZXRMZWFndWVUZWFtcyBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG5cbiAgICB0aGlzLmNyZWF0ZVRlYW0gPSBmdW5jdGlvbih0ZWFtUGFyYW1zKSB7XG4gICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuXG4gICAgICAkaHR0cC5wb3N0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJsZWFndWVzL1wiICsgdGVhbVBhcmFtcy5sZWFndWVfaWQgKyBcIi90ZWFtc1wiLFxuICAgICAgICAgICAgeyB0ZWFtOiB0ZWFtUGFyYW1zIH0pXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBjcmVhdGVUZWFtIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogY3JlYXRlVGVhbSBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGRhdGEpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMudXBkYXRlVGVhbSA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5wdXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImxlYWd1ZXMvXCIgKyB0ZWFtLmxlYWd1ZS5pZCArIFwiL3RlYW1zL1wiICsgdGVhbS5pZCxcbiAgICAgICAgICAgIHsgdGVhbTogdGVhbSB9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogdXBkYXRlVGVhbSBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiB1cGRhdGVUZWFtIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLnVwZGF0ZVRlYW1NZXNzYWdlID0gZnVuY3Rpb24odGVhbVBhcmFtcywgZW1haWxNZXNzYWdlKSB7XG4gICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgJGh0dHAucHV0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJsZWFndWVzL1wiICsgdGVhbVBhcmFtcy5sZWFndWUuaWQgKyBcIi90ZWFtcy9cIiArIHRlYW1QYXJhbXMuaWQgKyBcIi9tZXNzYWdlXCIsXG4gICAgICAgIHsgdGVhbTogdGVhbVBhcmFtcywgZW1haWxNZXNzYWdlOiBlbWFpbE1lc3NhZ2UgfSlcbiAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogdXBkYXRlVGVhbU1lc3NhZ2Ugc3VjY2Vzc1wiKTtcbiAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHRlYW1QYXJhbXMubWVzc2FnZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiB1cGRhdGVUZWFtTWVzc2FnZSBmYWlsZWRcIik7XG4gICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5zZW5kQ29tbWlzaE1lc3NhZ2UgPSBmdW5jdGlvbih0ZWFtUGFyYW1zLCBtZXNzYWdlKSB7XG4gICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgJGh0dHAucHV0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJsZWFndWVzL1wiICsgdGVhbVBhcmFtcy5sZWFndWUuaWQgKyBcIi90ZWFtcy9cIiArIHRlYW1QYXJhbXMuaWQgKyBcIi9jb250YWN0XCIsXG4gICAgICAgIHsgY29udGFjdDogbWVzc2FnZSB9KVxuICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBzZW5kQ29tbWlzaE1lc3NhZ2Ugc3VjY2Vzc1wiKTtcbiAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBzZW5kQ29tbWlzaE1lc3NhZ2UgZmFpbGVkXCIpO1xuICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuYWN0aXZhdGVUZWFtID0gZnVuY3Rpb24odGVhbSkge1xuICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgICAkaHR0cC5wdXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImxlYWd1ZXMvXCIgKyB0ZWFtLmxlYWd1ZS5pZCArIFwiL3RlYW1zL1wiICsgdGVhbS5pZCArIFwiL2FjdGl2YXRlXCIpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBhY3RpdmF0ZVRlYW0gc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBhY3RpdmF0ZVRlYW0gZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuZGVhY3RpdmF0ZVRlYW0gPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgICRodHRwLnB1dChhcGlDb25maWcuYmFzZVVSTCArIFwibGVhZ3Vlcy9cIiArIHRlYW0ubGVhZ3VlLmlkICsgXCIvdGVhbXMvXCIgKyB0ZWFtLmlkICsgXCIvZGVhY3RpdmF0ZVwiKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogZGVhY3RpdmF0ZVRlYW0gc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogZGVhY3RpdmF0ZVRlYW0gZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLnBhaWRUZWFtID0gZnVuY3Rpb24odGVhbSkge1xuICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgICAkaHR0cC5wdXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImxlYWd1ZXMvXCIgKyB0ZWFtLmxlYWd1ZS5pZCArIFwiL3RlYW1zL1wiICsgdGVhbS5pZCArIFwiL3BhaWRcIilcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IHBhaWRUZWFtIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogcGFpZFRlYW0gZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMudW5wYWlkVGVhbSA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAgICAgJGh0dHAucHV0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJsZWFndWVzL1wiICsgdGVhbS5sZWFndWUuaWQgKyBcIi90ZWFtcy9cIiArIHRlYW0uaWQgKyBcIi91bnBhaWRcIilcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IHVucGFpZFRlYW0gc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogdW5wYWlkVGVhbSBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcblxufTtcblxuVGVhbVNlcnZpY2UuJGluamVjdCA9IFsnJGh0dHAnLCAnJGxvZycsICckcScsICdhcGlDb25maWcnLCAnbWVzc2FnZU1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IFRlYW1TZXJ2aWNlOyIsInZhciBVc2VyU2VydmljZSA9IGZ1bmN0aW9uKCRodHRwLCAkbG9nLCAkc3RhdGUsICRsb2NhdGlvbiwgJHdpbmRvdywgJHRpbWVvdXQsIGFwaUNvbmZpZywgbWVzc2FnZU1vZGVsLCB1c2VyTW9kZWwsIHNlYXNvbk1vZGVsKSB7XG5cbiAgICB2YXIgdXNlclNlcnZpY2UgPSB0aGlzO1xuXG4gICAgdGhpcy5zaWduaW4gPSBmdW5jdGlvbihlbWFpbCwgcGFzc3dvcmQpIHtcbiAgICAgIHVzZXJNb2RlbC5yZXNldFVzZXIoKTtcbiAgICAgIHZhciBwcm9taXNlID0gJGh0dHAucG9zdChcbiAgICAgICAgICAgIGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZXNzaW9uc1wiLFxuICAgICAgICAgICAgeyBlbWFpbDogZW1haWwsIHBhc3N3b3JkOiBwYXNzd29yZCB9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJVc2VyU2VydmljZTogc2lnbmluIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS50b2tlbiA9IGRhdGEudG9rZW47XG4gICAgICAgICAgICAgICAgdmFyIHJlZGlyZWN0ID0gZGVjb2RlVVJJQ29tcG9uZW50KCRsb2NhdGlvbi5zZWFyY2goKS5yZWRpcmVjdCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlZGlyZWN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAkbG9jYXRpb24uc2VhcmNoKCdyZWRpcmVjdCcsIG51bGwpOyAvLyByZW1vdmUgdGhlIHJlZGlyZWN0IHF1ZXJ5IHBhcmFtXG4gICAgICAgICAgICAgICAgICAgICRsb2NhdGlvbi51cmwocmVkaXJlY3QpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoWycvJywgJy9zaWduaW4nLCAnL3JlZ2lzdGVyJ10uaW5kZXhPZihyZWRpcmVjdCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdXNlclNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSAge1xuICAgICAgICAgICAgICAgICAgJGxvY2F0aW9uLnVybCgnL3NlYXNvbi8nICsgc2Vhc29uTW9kZWwuc2VsZWN0ZWRTZWFzb25JZCArICcvbXkvdGVhbXMnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVXNlclNlcnZpY2U6IHNpZ25pbiBmYWlsdXJlXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuc2lnbm91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdXNlck1vZGVsLnJlc2V0VXNlcigpO1xuICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5kZWxldGUoYXBpQ29uZmlnLmJhc2VVUkwgKyAnc2Vzc2lvbnMvZGVzdHJveScpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlVzZXJTZXJ2aWNlOiBzaWdub3V0IHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgaWYgKCRzdGF0ZS5jdXJyZW50Lm5hbWUgPT0gJ3B1YmxpYy5zaWduaW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICRzdGF0ZS5nbygncHVibGljLnNpZ25pbicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJVc2VyU2VydmljZTogc2lnbm91dCBmYWlsdXJlXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMucmVzZXRVc2VyID0gZnVuY3Rpb24oZW1haWwpIHtcbiAgICAgIHZhciBwcm9taXNlID0gJGh0dHAucG9zdChhcGlDb25maWcuYmFzZVVSTCArIFwic2Vzc2lvbnMvcmVzZXRcIiwgeyBlbWFpbDogZW1haWwgfSlcbiAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAkbG9nLmRlYnVnKFwiVXNlclNlcnZpY2U6IHJlc2V0IHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICRsb2cuZGVidWcoXCJVc2VyU2VydmljZTogcmVzZXQgZmFpbHVyZVwiKTtcbiAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmdldEN1cnJlbnRVc2VyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0b2tlbiA9ICRsb2NhdGlvbi5zZWFyY2goKS50b2tlbjtcbiAgICAgICAgaWYgKCFfLmlzVW5kZWZpbmVkKHRva2VuKSkge1xuICAgICAgICAgICR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudG9rZW4gPSB0b2tlbjtcbiAgICAgICAgICAkbG9jYXRpb24uc2VhcmNoKCd0b2tlbicsIG51bGwpOyAvLyByZW1vdmUgdGhlIHRva2VuIHF1ZXJ5IHBhcmFtXG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInVzZXJzL2N1cnJlbnRcIilcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVXNlclNlcnZpY2U6IGdldEN1cnJlbnRVc2VyIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgdXNlck1vZGVsLnNldFVzZXIoZGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVXNlclNlcnZpY2U6IGdldEN1cnJlbnRVc2VyIGZhaWxlZFwiKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5jcmVhdGVVc2VyID0gZnVuY3Rpb24odXNlclBhcmFtcykge1xuICAgICAgdXNlck1vZGVsLnJlc2V0VXNlcigpO1xuICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5wb3N0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJ1c2Vyc1wiLFxuICAgICAgICAgICAgeyB1c2VyOiB1c2VyUGFyYW1zIH0pXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlVzZXJTZXJ2aWNlOiBjcmVhdGVVc2VyIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS50b2tlbiA9IGRhdGEudG9rZW47XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB2YXIgcmVkaXJlY3QgPSBkZWNvZGVVUklDb21wb25lbnQoJGxvY2F0aW9uLnNlYXJjaCgpLnJlZGlyZWN0KTtcbiAgICAgICAgICAgICAgICBpZiAocmVkaXJlY3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2NhdGlvbi5zZWFyY2goJ3JlZGlyZWN0JywgbnVsbCk7IC8vIHJlbW92ZSB0aGUgcmVkaXJlY3QgcXVlcnkgcGFyYW1cbiAgICAgICAgICAgICAgICAgICAgJGxvY2F0aW9uLnVybChyZWRpcmVjdCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChbJy8nLCAnL3NpZ25pbicsICcvcmVnaXN0ZXInXS5pbmRleE9mKHJlZGlyZWN0KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICB1c2VyU2VydmljZS5nZXRDdXJyZW50VXNlcigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlICB7XG4gICAgICAgICAgICAgICAgICAkbG9jYXRpb24udXJsKCcvc2Vhc29uLycgKyBzZWFzb25Nb2RlbC5zZWxlY3RlZFNlYXNvbklkICsgJy9teS90ZWFtcycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJVc2VyU2VydmljZTogY3JlYXRlVXNlciBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVVc2VyID0gZnVuY3Rpb24odXNlclBhcmFtcykge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnB1dChhcGlDb25maWcuYmFzZVVSTCArIFwidXNlcnMvY3VycmVudFwiLFxuICAgICAgICAgICAgeyB1c2VyOiB1c2VyUGFyYW1zIH0pXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlVzZXJTZXJ2aWNlOiB1cGRhdGVVc2VyIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgdXNlck1vZGVsLnNldFVzZXIodXNlclBhcmFtcyk7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVXNlclNlcnZpY2U6IHVwZGF0ZVVzZXIgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuY29udGFjdFVzID0gZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnB1dChhcGlDb25maWcuYmFzZVVSTCArIFwidXNlcnMvY29udGFjdFwiLFxuICAgICAgICAgICAgeyBtZXNzYWdlOiBtZXNzYWdlIH0pXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlVzZXJTZXJ2aWNlOiBjb250YWN0VXMgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJVc2VyU2VydmljZTogY29udGFjdFVzIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbn07XG5cblVzZXJTZXJ2aWNlLiRpbmplY3QgPSBbJyRodHRwJywgJyRsb2cnLCAnJHN0YXRlJywgJyRsb2NhdGlvbicsICckd2luZG93JywgJyR0aW1lb3V0JywgJ2FwaUNvbmZpZycsICdtZXNzYWdlTW9kZWwnLCAndXNlck1vZGVsJywgJ3NlYXNvbk1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IFVzZXJTZXJ2aWNlOyIsInZhciBXZWVrU2VydmljZSA9IGZ1bmN0aW9uKCRodHRwLCAkbG9nLCAkcSwgJHN0YXRlLCBhcGlDb25maWcsIG1lc3NhZ2VNb2RlbCkge1xuXG4gICAgdGhpcy5nZXRBdmFpbGFibGVXZWVrcyA9IGZ1bmN0aW9uKHNlYXNvbklkKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZWFzb25zL1wiICsgc2Vhc29uSWQgKyBcIi93ZWVrcy9hdmFpbGFibGVcIilcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiV2Vla1NlcnZpY2U6IGdldEF2YWlsYWJsZVdlZWtzIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiV2Vla1NlcnZpY2U6IGdldEF2YWlsYWJsZVdlZWtzIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmdldFNlYXNvbldlZWtzID0gZnVuY3Rpb24oc2Vhc29uSWQpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBzZWFzb25JZCArIFwiL3dlZWtzXCIpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIldlZWtTZXJ2aWNlOiBnZXRTZWFzb25XZWVrcyBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIldlZWtTZXJ2aWNlOiBnZXRTZWFzb25XZWVrcyBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRMZWFndWVXZWVrcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBvcHRpb25zLnNlYXNvbklkICsgXCIvd2Vla3M/bGVhZ3VlX2lkPVwiICsgb3B0aW9ucy5sZWFndWVJZClcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiV2Vla1NlcnZpY2U6IGdldExlYWd1ZVdlZWtzIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiV2Vla1NlcnZpY2U6IGdldExlYWd1ZVdlZWtzIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmdldFdlZWsgPSBmdW5jdGlvbihzZWFzb25JZCwgd2Vla0lkKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZWFzb25zL1wiICsgc2Vhc29uSWQgKyBcIi93ZWVrcy9cIiArIHdlZWtJZClcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiV2Vla1NlcnZpY2U6IGdldFdlZWsgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJXZWVrU2VydmljZTogZ2V0V2VlayBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRDdXJyZW50V2VlayA9IGZ1bmN0aW9uKHNlYXNvbklkLCBsZWFndWVJZCkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlDb25maWcuYmFzZVVSTCArIFwic2Vhc29ucy9cIiArIHNlYXNvbklkICsgXCIvd2Vla3MvY3VycmVudD9sZWFndWVfaWQ9XCIgKyBsZWFndWVJZClcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiV2Vla1NlcnZpY2U6IGdldEN1cnJlbnRXZWVrIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiV2Vla1NlcnZpY2U6IGdldEN1cnJlbnRXZWVrIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmdldFdlZWtUeXBlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYXBpVXJsID0gYXBpQ29uZmlnLmJhc2VVUkwgKyBcImFkbWluL3dlZWtfdHlwZXNcIjtcblxuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlVcmwpXG4gICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIldlZWtTZXJ2aWNlOiBnZXRXZWVrVHlwZXMgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICRsb2cuZGVidWcoXCJXZWVrU2VydmljZTogZ2V0V2Vla1R5cGVzIGZhaWxlZFwiKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuY3JlYXRlV2VlayA9IGZ1bmN0aW9uKHdlZWtQYXJhbXMpIHtcbiAgICAgIHZhciBwcm9taXNlID0gJGh0dHAucG9zdChhcGlDb25maWcuYmFzZVVSTCArIFwiYWRtaW4vc2Vhc29ucy9cIiArIHdlZWtQYXJhbXMuc2Vhc29uX2lkICsgXCIvd2Vla3NcIixcbiAgICAgICAgeyB3ZWVrOiB3ZWVrUGFyYW1zIH0pXG4gICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAkbG9nLmRlYnVnKFwiV2Vla1NlcnZpY2U6IGNyZWF0ZVdlZWsgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAvLyB0b2RvOiB0aGlzIHJlbGllcyBvbiBhIG1vbmtleSBwYXRjaCBhdCB0aGUgbW9tZW50IC0gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXItdWkvdWktcm91dGVyL2lzc3Vlcy81ODJcbiAgICAgICAgICAvLyBidXQgbWF5IGJlIHJlc29sdmVkIHdpdGggZnV0dXJlIHJlbGVhc2VzIG9mIGFuZ3VsYXItdWktcm91dGVyXG4gICAgICAgICAgJHN0YXRlLnJlbG9hZCgpOyAvLyByZWxvYWRzIGFsbCB0aGUgcmVzb2x2ZXMgZm9yIHRoZSB2aWV3IGxlYWd1ZSBwYWdlIGFuZCByZWluc3RhbnRpYXRlcyB0aGUgY29udHJvbGxlclxuICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KVxuICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICRsb2cuZGVidWcoXCJXZWVrU2VydmljZTogY3JlYXRlV2VlayBmYWlsZWRcIik7XG4gICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVXZWVrID0gZnVuY3Rpb24od2Vla1BhcmFtcykge1xuICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5wdXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImFkbWluL3NlYXNvbnMvXCIgKyB3ZWVrUGFyYW1zLnNlYXNvbl9pZCArIFwiL3dlZWtzL1wiICsgd2Vla1BhcmFtcy5pZCxcbiAgICAgICAgeyB3ZWVrOiB3ZWVrUGFyYW1zIH0pXG4gICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAkbG9nLmRlYnVnKFwiV2Vla1NlcnZpY2U6IHVwZGF0ZVdlZWsgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAvLyB0b2RvOiB0aGlzIHJlbGllcyBvbiBhIG1vbmtleSBwYXRjaCBhdCB0aGUgbW9tZW50IC0gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXItdWkvdWktcm91dGVyL2lzc3Vlcy81ODJcbiAgICAgICAgICAvLyBidXQgbWF5IGJlIHJlc29sdmVkIHdpdGggZnV0dXJlIHJlbGVhc2VzIG9mIGFuZ3VsYXItdWktcm91dGVyXG4gICAgICAgICAgJHN0YXRlLnJlbG9hZCgpOyAvLyByZWxvYWRzIGFsbCB0aGUgcmVzb2x2ZXMgZm9yIHRoZSB2aWV3IGxlYWd1ZSBwYWdlIGFuZCByZWluc3RhbnRpYXRlcyB0aGUgY29udHJvbGxlclxuICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KVxuICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICRsb2cuZGVidWcoXCJXZWVrU2VydmljZTogdXBkYXRlV2VlayBmYWlsZWRcIik7XG4gICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5zZW5kUmVtaW5kZXIgPSBmdW5jdGlvbih3ZWVrKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAucHV0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJhZG1pbi9zZWFzb25zL1wiICsgd2Vlay5zZWFzb25faWQgKyBcIi93ZWVrcy9cIiArIHdlZWsuaWQgKyBcIi9yZW1pbmRcIilcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiV2Vla1NlcnZpY2U6IHNlbmRSZW1pbmRlciBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgICRzdGF0ZS5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJXZWVrU2VydmljZTogc2VuZFJlbWluZGVyIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmNvbXBsZXRlV2VlayA9IGZ1bmN0aW9uKHdlZWspIHtcbiAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAkaHR0cC5wdXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImFkbWluL3NlYXNvbnMvXCIgKyB3ZWVrLnNlYXNvbl9pZCArIFwiL3dlZWtzL1wiICsgd2Vlay5pZCArIFwiL2NvbXBsZXRlXCIpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIldlZWtTZXJ2aWNlOiBjb21wbGV0ZVdlZWsgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiV2Vla1NlcnZpY2U6IGNvbXBsZXRlV2VlayBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9O1xuXG59O1xuXG5XZWVrU2VydmljZS4kaW5qZWN0ID0gWyckaHR0cCcsICckbG9nJywgJyRxJywgJyRzdGF0ZScsICdhcGlDb25maWcnLCAnbWVzc2FnZU1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IFdlZWtTZXJ2aWNlO1xuIiwiY29tbWFuZ3VsYXIuY3JlYXRlKCdTaWduaW5Db21tYW5kJyxcbiAgICBmdW5jdGlvbigkbG9nLCB1c2VyU2VydmljZSkge1xuXG4gICAgcmV0dXJuIHtcblxuICAgICAgICBleGVjdXRlOiBmdW5jdGlvbihlbWFpbCwgcGFzc3dvcmQpIHtcbiAgICAgICAgICAgICRsb2cuZGVidWcoJ1NpZ25pbkNvbW1hbmQ6IGF1dGhlbnRpY2F0aW5nIHVzZXIuLi4nKTtcbiAgICAgICAgICAgIHJldHVybiB1c2VyU2VydmljZS5zaWduaW4oZW1haWwsIHBhc3N3b3JkKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICRsb2cuZGVidWcoXCJTaWduaW5Db21tYW5kOiBmYWlsdXJlOiBcIiArIGVycm9yLmRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICBvblJlc3VsdDogZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICAkbG9nLmRlYnVnKFwiU2lnbmluQ29tbWFuZDogc3VjY2VzcyBcIik7XG4gICAgICAgIH1cblxuICAgIH1cbn0pO1xuIiwiY29tbWFuZ3VsYXIuY3JlYXRlKCdTaWdub3V0Q29tbWFuZCcsXG4gICAgZnVuY3Rpb24oJGxvZywgdXNlclNlcnZpY2UpIHtcblxuICAgICAgICByZXR1cm4ge1xuXG4gICAgICAgICAgICBleGVjdXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKCdTaWdub3V0Q29tbWFuZDogc2lnbmluZyBvdXQgdXNlci4uLicpO1xuICAgICAgICAgICAgICAgIHJldHVybiB1c2VyU2VydmljZS5zaWdub3V0KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25FcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiU2lnbm91dENvbW1hbmQ6IGZhaWx1cmU6IFwiICsgZXJyb3IuZGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25SZXN1bHQ6IGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJTaWdub3V0Q29tbWFuZDogc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfSk7XG4iLCJcbmNvbW1hbmd1bGFyLmNyZWF0ZSgnR2V0Q3VycmVudFVzZXJDb21tYW5kJyxcbiAgIGZ1bmN0aW9uKCRsb2csIHVzZXJTZXJ2aWNlLCB1c2VyTW9kZWwpIHtcblxuICAgIHJldHVybiB7XG5cbiAgICAgICAgZXhlY3V0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkbG9nLmRlYnVnKCdHZXRDdXJyZW50VXNlckNvbW1hbmQ6IGdldHRpbmcgY3VycmVudCB1c2VyIGRldGFpbHMuLi4nKTtcbiAgICAgICAgICAgIHZhciB1c2VyUHJvbWlzZSA9IHVzZXJTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCk7XG4gICAgICAgICAgICByZXR1cm4gdXNlclByb21pc2U7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAkbG9nLmRlYnVnKFwiR2V0Q3VycmVudFVzZXJDb21tYW5kOiBmYWlsdXJlOiBcIiArIGVycm9yLmRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICBvblJlc3VsdDogZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICAkbG9nLmRlYnVnKFwiR2V0Q3VycmVudFVzZXJDb21tYW5kOiBzdWNjZXNzXCIpO1xuICAgICAgICB9XG5cbiAgICB9XG59KTsiLCJcbnZhciBPZmZzZXRGaWx0ZXIgPSBmdW5jdGlvbigkbG9nKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGlucHV0LCBzdGFydCkge1xuICAgICAgICBzdGFydCA9IHBhcnNlSW50KHN0YXJ0LCAxMCk7XG4gICAgICAgIHJldHVybiBpbnB1dC5zbGljZShzdGFydCk7XG4gICAgfTtcbn07XG5cbk9mZnNldEZpbHRlci4kaW5qZWN0ID0gWyckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IE9mZnNldEZpbHRlcjtcbiIsInZhciBBY3RpdmVUZWFtRmlsdGVyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBmdW5jdGlvbih0ZWFtcywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmluYWN0aXZlID09IHRydWUpIHtcbiAgICAgIHJldHVybiB0ZWFtcztcbiAgICB9XG4gICAgdmFyIGFjdGl2ZVRlYW1zID0gXy5maWx0ZXIodGVhbXMsIGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAgIHJldHVybiB0ZWFtLmFjdGl2ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gYWN0aXZlVGVhbXM7XG4gIH07XG59O1xuXG5BY3RpdmVUZWFtRmlsdGVyLiRpbmplY3QgPSBbXTtcbm1vZHVsZS5leHBvcnRzID0gQWN0aXZlVGVhbUZpbHRlcjtcbiIsInZhciBNYW5hZ2VkTGVhZ3VlRmlsdGVyID0gZnVuY3Rpb24odXNlck1vZGVsKSB7XG4gIHJldHVybiBmdW5jdGlvbihsZWFndWVzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMubWFuYWdlZCA9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gbGVhZ3VlcztcbiAgICB9XG4gICAgdmFyIGluTGVhZ3VlcyA9IF8uZmlsdGVyKGxlYWd1ZXMsIGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgICAgcmV0dXJuIGxlYWd1ZS5jb21taXNoX2lkcy5pbmRleE9mKHVzZXJNb2RlbC51c2VyLmlkKSA9PSAtMTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW5MZWFndWVzO1xuICB9O1xufTtcblxuTWFuYWdlZExlYWd1ZUZpbHRlci4kaW5qZWN0ID0gWyd1c2VyTW9kZWwnXTtcbm1vZHVsZS5leHBvcnRzID0gTWFuYWdlZExlYWd1ZUZpbHRlcjtcbiIsIlxudmFyIFRpbWVGaWx0ZXIgPSBmdW5jdGlvbigkbG9nKSB7XG4gICByZXR1cm4gZnVuY3Rpb24oaW5wdXQpIHtcblxuICAgICAgIGlmIChpbnB1dCA8IDEpIHtcbiAgICAgICAgICAgcmV0dXJuIFwiMDA6MDA6MDBcIjtcbiAgICAgICB9XG5cbiAgICAgICBmdW5jdGlvbiBmb3JtYXQodmFsKSB7XG4gICAgICAgICAgIHJldHVybiAodmFsPDEwID8gJzAnIDogJycpICsgdmFsO1xuICAgICAgIH1cblxuICAgICAgIHZhciBoID0gTWF0aC5mbG9vcigoaW5wdXQgLyAxMDAwKSAvIDM2MDApO1xuICAgICAgIHZhciBtID0gTWF0aC5mbG9vcigoKGlucHV0IC8gMTAwMCkgJSAzNjAwKSAvIDYwKTtcbiAgICAgICB2YXIgcyA9IE1hdGguZmxvb3IoKGlucHV0IC8gMTAwMCkgJSA2MCk7XG4gICAgICAgcmV0dXJuIGZvcm1hdChoKSArIFwiOlwiICsgZm9ybWF0KG0pICsgXCI6XCIgKyBmb3JtYXQocyk7XG4gICB9XG5cbn07XG5cblRpbWVGaWx0ZXIuJGluamVjdCA9IFsnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBUaW1lRmlsdGVyO1xuIiwidmFyIFdlZWtQaWNrc0ZpbHRlciA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gZnVuY3Rpb24ocGlja3MsIHdlZWssIGVsaW1pbmF0aW9uKSB7XG4gICAgaWYgKCF3ZWVrKSB7XG4gICAgICByZXR1cm4gcGlja3M7XG4gICAgfVxuICAgIHZhciB3ZWVrUGlja3MgPSBbXTtcbiAgICBpZiAoZWxpbWluYXRpb24pIHtcbiAgICAgIC8vIGZvciBzdXJ2aXZvciBsZWFndWVzLCBnb25uYSBzaG93IHBpY2tzIHVwIHRvIHRoZSB3ZWVrIHlvdSBzZWxlY3RlZC4uLlxuICAgICAgd2Vla1BpY2tzID0gXy5maWx0ZXIocGlja3MsIGZ1bmN0aW9uKHBpY2spIHtcbiAgICAgICAgcmV0dXJuIG1vbWVudChwaWNrLndlZWsuZGF0ZSkuaXNCZWZvcmUod2Vlay5zdGFydHNfYXQpIHx8IG1vbWVudChwaWNrLndlZWsuZGF0ZSkuaXNTYW1lKHdlZWsuc3RhcnRzX2F0KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmb3IgcGljaydlbSBsZWFndWVzLCBnb25uYSBzaG93IE9OTFkgcGlja3MgZm9yIHRoZSB3ZWVrIHlvdSBzZWxlY3RlZC4uLlxuICAgICAgd2Vla1BpY2tzID0gXy5maWx0ZXIocGlja3MsIGZ1bmN0aW9uKHBpY2spIHtcbiAgICAgICAgcmV0dXJuIHBpY2sud2Vlay5zbHVnID09IHdlZWsuc2x1ZztcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gd2Vla1BpY2tzO1xuICB9O1xufTtcblxuV2Vla1BpY2tzRmlsdGVyLiRpbmplY3QgPSBbXTtcbm1vZHVsZS5leHBvcnRzID0gV2Vla1BpY2tzRmlsdGVyO1xuIiwidmFyIEhvbWVDb250cm9sbGVyID0gZnVuY3Rpb24oJHNjb3BlLCAkbG9nLCAkbG9jYXRpb24sIGxlYWd1ZVNlcnZpY2UsIG1lc3NhZ2VNb2RlbCwgc2Vhc29uTW9kZWwpIHtcblxuICAgICRzY29wZS5zZWxlY3RlZFNlYXNvbklkID0gc2Vhc29uTW9kZWwuc2VsZWN0ZWRTZWFzb25JZDtcblxuICAgICRzY29wZS5jcmVhdGVMZWFndWUgPSBmdW5jdGlvbihzZWFzb25JZCkge1xuICAgICAgJGxvY2F0aW9uLnVybCgnL3NlYXNvbi8nICsgc2Vhc29uSWQgKyAnL2xlYWd1ZS9uZXcnKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmpvaW5MZWFndWUgPSBmdW5jdGlvbihzZWFzb25JZCkge1xuICAgICAgJGxvY2F0aW9uLnVybCgnL3NlYXNvbi8nICsgc2Vhc29uSWQgKyAnL2xlYWd1ZXMvcHVibGljJyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZyhcImhvbWUgY29udHJvbGxlclwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcbn07XG5cbkhvbWVDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJywgJyRsb2NhdGlvbicsICdsZWFndWVTZXJ2aWNlJywgJ21lc3NhZ2VNb2RlbCcsICdzZWFzb25Nb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBIb21lQ29udHJvbGxlcjtcbiIsInZhciBGYXFDb250cm9sbGVyID0gZnVuY3Rpb24oJG1vZGFsSW5zdGFuY2UsICRzY29wZSwgJGxvZykge1xuXG4gICRzY29wZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjbG9zZScpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJmYXEgY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuRmFxQ29udHJvbGxlci4kaW5qZWN0ID0gWyckbW9kYWxJbnN0YW5jZScsICckc2NvcGUnLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBGYXFDb250cm9sbGVyO1xuIiwidmFyIEFidXNlQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRtb2RhbEluc3RhbmNlLCAkc2NvcGUsICRsb2cpIHtcblxuICAkc2NvcGUuYWJ1c2VNZXNzYWdlID0gJyc7XG5cbiAgJHNjb3BlLmNvbnRhY3RVcyA9IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZShtZXNzYWdlKTtcbiAgfTtcblxuICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2FuY2VsJyk7XG4gIH07XG5cbiAgJHNjb3BlLmhhc0Vycm9yID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgfTtcblxuICAkc2NvcGUuaGFzUHJvcGVydHlFcnJvciA9IGZ1bmN0aW9uKGlucHV0LCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRlcnJvcltwcm9wZXJ0eV07XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcInJlcG9ydCBhYnVzZSBjb250cm9sbGVyXCIpO1xuICB9O1xuICBpbml0KCk7XG59O1xuXG5BYnVzZUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJG1vZGFsSW5zdGFuY2UnLCAnJHNjb3BlJywgJyRsb2cnXTtcbm1vZHVsZS5leHBvcnRzID0gQWJ1c2VDb250cm9sbGVyO1xuIiwidmFyIFNpZ25pbkNvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2csICRsb2NhdGlvbiwgJG1vZGFsLCBtZXNzYWdlTW9kZWwsIHVzZXJTZXJ2aWNlKSB7XG5cbiAgICAkc2NvcGUuY3JlZGVudGlhbHMgPSB7XG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgfTtcblxuICAgICRzY29wZS5zaWduaW4gPSBmdW5jdGlvbihjcmVkZW50aWFscykge1xuICAgICAgICAkbG9nLmRlYnVnKFwic2lnbmluIGNyZWRlbnRpYWxzOiBcIiArIGNyZWRlbnRpYWxzKTtcbiAgICAgICAgJHNjb3BlLmRpc3BhdGNoKFwiU2lnbmluRXZlbnRcIiwgY3JlZGVudGlhbHMpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuZm9yZ290UGFzc3dvcmQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gdG9kbzogaW1wbGVtZW50IHRoaXNcbiAgICAgICAgYWxlcnQoJ3RvdWdoIHNoaXQnKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLnJlc2V0UGFzc3dvcmQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL3VzZXIvcmVzZXQvdXNlci5yZXNldC50cGwuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdVc2VyUmVzZXRDb250cm9sbGVyJ1xuICAgICAgfSk7XG5cbiAgICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24gKGVtYWlsKSB7XG4gICAgICAgIHVzZXJTZXJ2aWNlLnJlc2V0VXNlcihlbWFpbCk7XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoJ1Jlc2V0IHBhc3N3b3JkIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ1Jlc2V0IHBhc3N3b3JkIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgICRzY29wZS5yZWdpc3RlciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci9yZWdpc3Rlci50cGwuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdSZWdpc3RlckNvbnRyb2xsZXInXG4gICAgICB9KTtcblxuICAgICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihuZXdVc2VyKSB7XG4gICAgICAgIHVzZXJTZXJ2aWNlLmNyZWF0ZVVzZXIobmV3VXNlcik7XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoJ1JlZ2lzdGVyIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ1JlZ2lzdGVyIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJzaWduaW4gY29udHJvbGxlclwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcblxufTtcblxuU2lnbmluQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZycsICckbG9jYXRpb24nLCAnJG1vZGFsJywgJ21lc3NhZ2VNb2RlbCcsICd1c2VyU2VydmljZSddO1xubW9kdWxlLmV4cG9ydHMgPSBTaWduaW5Db250cm9sbGVyO1xuIiwidmFyIFJlZ2lzdGVyQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJGxvZywgJG1vZGFsLCAkbW9kYWxJbnN0YW5jZSkge1xuXG4gICAgJHNjb3BlLm5ld1VzZXJEYXRhID0ge1xuICAgICAgICBmaXJzdF9uYW1lOiAnJyxcbiAgICAgICAgbGFzdF9uYW1lOiAnJyxcbiAgICAgICAgbmlja25hbWU6ICcnLFxuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIGVtYWlsX2NvbmZpcm1hdGlvbjogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uOiAnJ1xuICAgIH07XG5cbiAgICAkc2NvcGUucmVnaXN0ZXIgPSBmdW5jdGlvbiAobmV3VXNlcikge1xuICAgICAgJG1vZGFsSW5zdGFuY2UuY2xvc2UobmV3VXNlcik7XG4gICAgfTtcblxuICAgICRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmhhc0Vycm9yID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gICAgfTtcblxuICAgICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRlcnJvcltwcm9wZXJ0eV07XG4gICAgfTtcblxuICAgICRzY29wZS5zaG93VGVybXMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXIvdGVybXMvcmVnaXN0ZXIudGVybXMudHBsLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnUmVnaXN0ZXJUZXJtc0NvbnRyb2xsZXInXG4gICAgICB9KTtcblxuICAgICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGRvIG5hZGFcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZygnVGVybXMgYW5kIGNvbmRpdGlvbnMgbW9kYWwgY2xvc2VkLi4uJyk7XG4gICAgICB9KTtcblxuICAgIH07XG5cbiAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJyZWdpc3RlciBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5SZWdpc3RlckNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnLCAnJG1vZGFsJywgJyRtb2RhbEluc3RhbmNlJ107XG5tb2R1bGUuZXhwb3J0cyA9IFJlZ2lzdGVyQ29udHJvbGxlcjtcbiIsIlxudmFyIFVzZXJDb250cm9sbGVyID0gZnVuY3Rpb24oJHNjb3BlLCAkbG9nLCB1c2VyTW9kZWwsIHVzZXJTZXJ2aWNlKSB7XG5cbiAgICAkc2NvcGUudXNlckRhdGEgPSBhbmd1bGFyLmNvcHkodXNlck1vZGVsKTtcblxuICAgICRzY29wZS51cGRhdGUgPSBmdW5jdGlvbih1c2VyKSB7XG4gICAgICAgIHVzZXJTZXJ2aWNlLnVwZGF0ZVVzZXIodXNlcik7XG4gICAgfTtcblxuICAgICRzY29wZS5oYXNFcnJvciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICAgIH07XG5cbiAgICAkc2NvcGUuaGFzUHJvcGVydHlFcnJvciA9IGZ1bmN0aW9uKGlucHV0LCBwcm9wZXJ0eSkge1xuICAgICAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kZXJyb3JbcHJvcGVydHldO1xuICAgIH07XG5cbiAgICAkc2NvcGUuJG9uKCd1c2VyTW9kZWw6OnVzZXJVcGRhdGVkJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgJHNjb3BlLnVzZXJEYXRhID0gYW5ndWxhci5jb3B5KHVzZXJNb2RlbCk7XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcInVzZXIgY29udHJvbGxlclwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcblxufTtcblxuVXNlckNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnLCAndXNlck1vZGVsJywgJ3VzZXJTZXJ2aWNlJ107XG5tb2R1bGUuZXhwb3J0cyA9IFVzZXJDb250cm9sbGVyO1xuIiwiXG52YXIgTGVhZ3VlQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJGxvZykge1xuXG4gICAgJHNjb3BlLmhhc0Vycm9yID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gICAgfTtcblxuICAgICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRlcnJvcltwcm9wZXJ0eV07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKFwibGVhZ3VlIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cbkxlYWd1ZUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnXTtcbm1vZHVsZS5leHBvcnRzID0gTGVhZ3VlQ29udHJvbGxlcjtcbiIsInZhciBMZWFndWVzQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJGxvZywgJHN0YXRlKSB7XG5cbiAgICAvLyBwYWdpbmF0aW9uXG4gICAgJHNjb3BlLmN1cnJlbnRMZWFndWVQYWdlID0gMTtcbiAgICAkc2NvcGUubGVhZ3Vlc1BlclBhZ2UgPSAxMDA7XG5cbiAgICAkc2NvcGUuaXNQdWJsaWMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICRzdGF0ZS5jdXJyZW50Lm5hbWUgPT0gJ3ByaXZhdGUubGVhZ3Vlcy5qb2luLnB1YmxpYyc7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKFwibGVhZ3VlcyBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5MZWFndWVzQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZycsICckc3RhdGUnXTtcbm1vZHVsZS5leHBvcnRzID0gTGVhZ3Vlc0NvbnRyb2xsZXI7XG5cbiIsInZhciBUZWFtQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJGxvZykge1xuXG4gICAgJHNjb3BlLmhhc0Vycm9yID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gICAgfTtcblxuICAgICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRlcnJvcltwcm9wZXJ0eV07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKFwidGVhbSBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5UZWFtQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBUZWFtQ29udHJvbGxlcjtcbiIsInZhciBQbGF5Q29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJGxvZywgJGxvY2F0aW9uLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgbWVzc2FnZU1vZGVsLCBzZWFzb25Nb2RlbCkge1xuXG4gICRzY29wZS5zZWxlY3RlZFNlYXNvbklkID0gcGFyc2VJbnQoJHN0YXRlUGFyYW1zLnNlYXNvbklkKTtcblxuICAkc2NvcGUuc3RhcnRlZFNlYXNvbnMgPSBhbmd1bGFyLmNvcHkoc2Vhc29uTW9kZWwuc3RhcnRlZFNlYXNvbnMpO1xuXG4gICRzY29wZS5sZWFndWVPcHRpb25zID0geyBtYW5hZ2VkOiB0cnVlIH07XG5cbiAgJHNjb3BlLnF1ZXJ5ID0gJyc7XG5cbiAgJHNjb3BlLmNoYW5nZVNlYXNvbiA9IGZ1bmN0aW9uKHNlYXNvbklkKSB7XG4gICAgc2Vhc29uTW9kZWwuc2V0U2VsZWN0ZWRTZWFzb25JZChzZWFzb25JZCk7XG4gICAgdmFyIG5ld1BhdGggPSAkbG9jYXRpb24ucGF0aCgpLnJlcGxhY2UoLyhcXC9zZWFzb25cXC8pXFxkKi8sICckMScgKyBzZWFzb25JZCk7XG4gICAgJGxvY2F0aW9uLnVybChuZXdQYXRoKTtcbiAgfTtcblxuICAkc2NvcGUubXlUZWFtcyA9IGZ1bmN0aW9uKHNlYXNvbklkKSB7XG4gICAgJGxvY2F0aW9uLnVybCgnL3NlYXNvbi8nICsgc2Vhc29uSWQgKyAnL215L3RlYW1zJyk7XG4gIH07XG5cbiAgJHNjb3BlLm15TGVhZ3VlcyA9IGZ1bmN0aW9uKHNlYXNvbklkKSB7XG4gICAgJGxvY2F0aW9uLnVybCgnL3NlYXNvbi8nICsgc2Vhc29uSWQgKyAnL215L2xlYWd1ZXMnKTtcbiAgfTtcblxuICAkc2NvcGUucmVzZXRTZWFyY2ggPSBmdW5jdGlvbigpIHtcbiAgICAkc2NvcGUucXVlcnkgPSAnJztcbiAgfTtcblxuICAkc2NvcGUuaXNTdGF0ZSA9IGZ1bmN0aW9uKHN0YXRlcykge1xuICAgIHJldHVybiBfLmluZGV4T2Yoc3RhdGVzLCAkc3RhdGUuY3VycmVudC5uYW1lKSA+IC0xO1xuICB9O1xuXG4gICRzY29wZS5jcmVhdGVMZWFndWUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2Vhc29uID0gc2Vhc29uTW9kZWwuZ2V0Q3VycmVudFNlYXNvbigpO1xuICAgICRsb2NhdGlvbi51cmwoJy9zZWFzb24vJyArIHNlYXNvbi5pZCArICcvbGVhZ3VlL25ldycpO1xuICB9O1xuXG4gICRzY29wZS5qb2luTGVhZ3VlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNlYXNvbiA9IHNlYXNvbk1vZGVsLmdldEN1cnJlbnRTZWFzb24oKTtcbiAgICAkbG9jYXRpb24udXJsKCcvc2Vhc29uLycgKyBzZWFzb24uaWQgKyAnL2xlYWd1ZXMvcHVibGljJyk7XG4gIH07XG5cbiAgICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwicGxheSBjb250cm9sbGVyXCIpO1xuICB9O1xuICBpbml0KCk7XG5cbn07XG5cblBsYXlDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJywgJyRsb2NhdGlvbicsICckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJywgJ21lc3NhZ2VNb2RlbCcsICdzZWFzb25Nb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBQbGF5Q29udHJvbGxlcjtcbiIsInZhciBBZG1pbkNvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUpIHtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuQWRtaW5Db250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZSddO1xubW9kdWxlLmV4cG9ydHMgPSBBZG1pbkNvbnRyb2xsZXI7XG4iLCJ2YXIgSGVhZGVyQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRyb290U2NvcGUsICRzY29wZSwgJGxvZywgJGxvY2F0aW9uLCAkbW9kYWwsICRzdGF0ZSwgJGFuY2hvclNjcm9sbCwgJHN0YXRlUGFyYW1zLCB1c2VyU2VydmljZSwgbGVhZ3VlU2VydmljZSwgdXNlck1vZGVsLCBtZXNzYWdlTW9kZWwsIHNlYXNvbk1vZGVsKSB7XG5cbiAgICB2YXIgc2Nyb2xsVG9Ub3AgPSBmdW5jdGlvbigpIHtcbiAgICAgICRhbmNob3JTY3JvbGwoKTsgLy8gaGFja3k/XG4gICAgfTtcblxuICAgIHZhciBjaGVja0h0bWw1U3RvcmFnZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICB0cnkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UudGVzdCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYwMDAwMDApICsgMTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnZGFuZ2VyJywgY29udGVudDogJ1lvdSBhcmUgaW4gUHJpdmFjeSBNb2RlLiBUaGlzIGFwcCB3aWxsIG5vdCBmdW5jdGlvbiBwcm9wZXJseS4gVHVybiBvZmYgUHJpdmFjeSBNb2RlLid9LCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICB9O1xuXG4gICAgJHNjb3BlLnNlbGVjdGVkU2Vhc29uSWQgPSAoYW5ndWxhci5pc0RlZmluZWQoJHN0YXRlUGFyYW1zLnNlYXNvbklkKSkgPyBwYXJzZUludCgkc3RhdGVQYXJhbXMuc2Vhc29uSWQpIDogc2Vhc29uTW9kZWwuc2VsZWN0ZWRTZWFzb25JZDtcblxuICAgICRzY29wZS5pc0NvbGxhcHNlZCA9IHRydWU7XG5cbiAgICAkc2NvcGUudXNlckRhdGEgPSB1c2VyTW9kZWw7XG5cbiAgICAkc2NvcGUuY3JlZGVudGlhbHMgPSB7XG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgfTtcblxuICAgICRzY29wZS5pc1N0YXRlID0gZnVuY3Rpb24oc3RhdGVzKSB7XG4gICAgICByZXR1cm4gXy5pbmRleE9mKHN0YXRlcywgJHN0YXRlLmN1cnJlbnQubmFtZSkgPiAtMTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmhvbWUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJGxvY2F0aW9uLnVybCgnLycpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuZmFxID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICRtb2RhbC5vcGVuKHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3B1YmxpYy9mYXEvZmFxLnRwbC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ0ZhcUNvbnRyb2xsZXInXG4gICAgICB9KTtcblxuICAgIH07XG5cbiAgICAkc2NvcGUuY29udGFjdFVzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHVibGljL2FidXNlL2FidXNlLnRwbC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ0FidXNlQ29udHJvbGxlcidcbiAgICAgIH0pO1xuXG4gICAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgdXNlclNlcnZpY2UuY29udGFjdFVzKG1lc3NhZ2UpO1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ0NvbnRhY3QgdXMgY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgICAgICRsb2cuZGVidWcoJ2NvbnRhY3QgdXMgZGlzbWlzc2VkLi4uJyk7XG4gICAgICB9KTtcblxuICAgIH07XG5cbiAgICAkc2NvcGUucmVnaXN0ZXIgPSBmdW5jdGlvbigpIHtcblxuICAgICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXIvcmVnaXN0ZXIudHBsLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnUmVnaXN0ZXJDb250cm9sbGVyJ1xuICAgICAgfSk7XG5cbiAgICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24obmV3VXNlcikge1xuICAgICAgICB1c2VyU2VydmljZS5jcmVhdGVVc2VyKG5ld1VzZXIpO1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ1JlZ2lzdGVyIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgICAgICAkbG9nLmRlYnVnKCdSZWdpc3RlciBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgICRzY29wZS5wbGF5ID0gZnVuY3Rpb24oc2Vhc29uSWQpIHtcbiAgICAgICRsb2NhdGlvbi51cmwoJy9zZWFzb24vJyArIHNlYXNvbklkICsgJy9teS90ZWFtcycpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuam9pbkxlYWd1ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlYXNvbiA9IHNlYXNvbk1vZGVsLmdldEN1cnJlbnRTZWFzb24oKTtcbiAgICAgICRsb2NhdGlvbi51cmwoJy9zZWFzb24vJyArIHNlYXNvbi5pZCArICcvbGVhZ3Vlcy9wdWJsaWMnKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNyZWF0ZUxlYWd1ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlYXNvbiA9IHNlYXNvbk1vZGVsLmdldEN1cnJlbnRTZWFzb24oKTtcbiAgICAgICRsb2NhdGlvbi51cmwoJy9zZWFzb24vJyArIHNlYXNvbi5pZCArICcvbGVhZ3VlL25ldycpO1xuICAgIH07XG5cbiAgICAkc2NvcGUudXNlclByb2ZpbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJGxvY2F0aW9uLnVybCgnL3VzZXInKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLnNpZ25pbiA9IGZ1bmN0aW9uKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJzaWduaW4gY3JlZGVudGlhbHM6IFwiICsgY3JlZGVudGlhbHMpO1xuICAgICAgICAkc2NvcGUuZGlzcGF0Y2goXCJTaWduaW5FdmVudFwiLCBjcmVkZW50aWFscyk7XG4gICAgfTtcblxuICAgICRzY29wZS5zaWdub3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRzY29wZS5jcmVkZW50aWFscyA9IHtcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJ1xuICAgICAgICB9O1xuICAgICAgICAkc2NvcGUuZGlzcGF0Y2goXCJTaWdub3V0RXZlbnRcIik7XG4gICAgfTtcblxuICAgICRzY29wZS5yZXNldFBhc3N3b3JkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS91c2VyL3Jlc2V0L3VzZXIucmVzZXQudHBsLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnVXNlclJlc2V0Q29udHJvbGxlcidcbiAgICAgIH0pO1xuXG4gICAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uIChlbWFpbCkge1xuICAgICAgICB1c2VyU2VydmljZS5yZXNldFVzZXIoZW1haWwpO1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ1Jlc2V0IHBhc3N3b3JkIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgICAgICAkbG9nLmRlYnVnKCdSZXNldCBwYXNzd29yZCBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAkcm9vdFNjb3BlLiRvbihcIiR2aWV3Q29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcbi8vICAgICAgc2Nyb2xsVG9Ub3AoKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiaGVhZGVyIGNvbnRyb2xsZXJcIik7XG4gICAgICAgIGNoZWNrSHRtbDVTdG9yYWdlKCk7XG4gICAgfTtcbiAgICBpbml0KCk7XG59O1xuXG5IZWFkZXJDb250cm9sbGVyLiRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJHNjb3BlJywgJyRsb2cnLCAnJGxvY2F0aW9uJywgJyRtb2RhbCcsICckc3RhdGUnLCAnJGFuY2hvclNjcm9sbCcsICckc3RhdGVQYXJhbXMnLCAndXNlclNlcnZpY2UnLCAnbGVhZ3VlU2VydmljZScsICd1c2VyTW9kZWwnLCAnbWVzc2FnZU1vZGVsJywgJ3NlYXNvbk1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IEhlYWRlckNvbnRyb2xsZXI7XG4iLCJ2YXIgTWVzc2FnZUNvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2csIG1lc3NhZ2VNb2RlbCkge1xuXG4gICAgJHNjb3BlLm1lc3NhZ2VEYXRhID0gbWVzc2FnZU1vZGVsO1xuXG4gICAgJHNjb3BlLmRpc21pc3NNZXNzYWdlID0gZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICBtZXNzYWdlLnJlc2V0TWVzc2FnZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKFwibWVzc2FnZSBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xufTtcblxuTWVzc2FnZUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnLCAnbWVzc2FnZU1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IE1lc3NhZ2VDb250cm9sbGVyO1xuIiwidmFyIEZvb3RlckNvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2csICRsb2NhdGlvbikge1xuXG4gICRzY29wZS5ob21lID0gZnVuY3Rpb24oKSB7XG4gICAgJGxvY2F0aW9uLnVybCgnLycpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJmb290ZXIgY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuRm9vdGVyQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZycsICckbG9jYXRpb24nXTtcbm1vZHVsZS5leHBvcnRzID0gRm9vdGVyQ29udHJvbGxlcjtcbiIsInZhciBDb25maXJtQ29udHJvbGxlciA9IGZ1bmN0aW9uKG1lc3NhZ2UsICRzY29wZSwgJGxvZywgJG1vZGFsSW5zdGFuY2UpIHtcblxuICAkc2NvcGUubWVzc2FnZSA9IG1lc3NhZ2U7XG5cbiAgJHNjb3BlLmNvbmZpcm0gPSBmdW5jdGlvbigpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZSgpO1xuICB9O1xuXG4gICRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2FuY2VsJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcImNvbmZpcm0gY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xuXG59O1xuXG5Db25maXJtQ29udHJvbGxlci4kaW5qZWN0ID0gWydtZXNzYWdlJywgJyRzY29wZScsICckbG9nJywgJyRtb2RhbEluc3RhbmNlJ107XG5tb2R1bGUuZXhwb3J0cyA9IENvbmZpcm1Db250cm9sbGVyO1xuIiwidmFyIEFwcGxpY2F0aW9uU2VydmljZSA9IGZ1bmN0aW9uKCR3aW5kb3csICRsb2NhdGlvbiwgJGxvZykge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgQXBwbGljYXRpb24gU3RhcnR1cCBQcm9jZXNzXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0YXJ0dXAgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHN0YXJ0dXBQcm9jZXNzKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHN0YXJ0dXBQcm9jZXNzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZm9yY2VTc2woKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgZm9yY2VTc2wgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCRsb2NhdGlvbi5ob3N0KCkgPT0gJ2xvY2FsaG9zdCcpIHJldHVybjtcbiAgICAgICAgICBpZiAoJGxvY2F0aW9uLnByb3RvY29sKCkgIT0gJ2h0dHBzJykge1xuICAgICAgICAgICAgJHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJGxvY2F0aW9uLmFic1VybCgpLnJlcGxhY2UoJ2h0dHAnLCAnaHR0cHMnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkbG9nLmRlYnVnKFwiQXBwbGljYXRpb25TZXJ2aWNlIGluaXQgYXBwbGljYXRpb24gc2VydmljZVwiKTtcbiAgICAgICAgfTtcbiAgICAgICAgaW5pdCgpO1xuXG4gICAgfTtcblxuQXBwbGljYXRpb25TZXJ2aWNlLiRpbmplY3QgPSBbJyR3aW5kb3cnLCAnJGxvY2F0aW9uJywgJyRsb2cnXTtcbm1vZHVsZS5leHBvcnRzID0gQXBwbGljYXRpb25TZXJ2aWNlO1xuIiwidmFyIEZvY3VzRGlyZWN0aXZlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIEZPQ1VTX0NMQVNTID0gJ25nLWZvY3VzZWQnO1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgIHJlcXVpcmU6ICduZ01vZGVsJyxcbiAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjdHJsKSB7XG4gICAgICAgICAgICBjdHJsLiRmb2N1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICBlbGVtZW50LmJpbmQoJ2ZvY3VzJywgZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hZGRDbGFzcyhGT0NVU19DTEFTUyk7XG4gICAgICAgICAgICAgICAgc2NvcGUuJGFwcGx5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBjdHJsLiRmb2N1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLmJpbmQoJ2JsdXInLCBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNsYXNzKEZPQ1VTX0NMQVNTKTtcbiAgICAgICAgICAgICAgICBzY29wZS4kYXBwbHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0cmwuJGZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb2N1c0RpcmVjdGl2ZTtcbiIsInZhciBEYXRlVXRpbHMgPSBmdW5jdGlvbigpIHtcblxuICB0aGlzLmRhdGVGb3JtYXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gc291cmNlOiBodHRwOi8vYmxvZy5zdGV2ZW5sZXZpdGhhbi5jb20vYXJjaGl2ZXMvZGF0ZS10aW1lLWZvcm1hdFxuICAgIHZhclx0dG9rZW4gPSAvZHsxLDR9fG17MSw0fXx5eSg/Onl5KT98KFtIaE1zVHRdKVxcMT98W0xsb1NaXXxcIlteXCJdKlwifCdbXiddKicvZyxcbiAgICAgIHRpbWV6b25lID0gL1xcYig/OltQTUNFQV1bU0RQXVR8KD86UGFjaWZpY3xNb3VudGFpbnxDZW50cmFsfEVhc3Rlcm58QXRsYW50aWMpICg/OlN0YW5kYXJkfERheWxpZ2h0fFByZXZhaWxpbmcpIFRpbWV8KD86R01UfFVUQykoPzpbLStdXFxkezR9KT8pXFxiL2csXG4gICAgICB0aW1lem9uZUNsaXAgPSAvW14tK1xcZEEtWl0vZyxcbiAgICAgIHBhZCA9IGZ1bmN0aW9uICh2YWwsIGxlbikge1xuICAgICAgICB2YWwgPSBTdHJpbmcodmFsKTtcbiAgICAgICAgbGVuID0gbGVuIHx8IDI7XG4gICAgICAgIHdoaWxlICh2YWwubGVuZ3RoIDwgbGVuKSB2YWwgPSBcIjBcIiArIHZhbDtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgIH07XG5cbiAgICAvLyBSZWdleGVzIGFuZCBzdXBwb3J0aW5nIGZ1bmN0aW9ucyBhcmUgY2FjaGVkIHRocm91Z2ggY2xvc3VyZVxuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0ZSwgbWFzaywgdXRjKSB7XG4gICAgICB2YXIgZEYgPSB0aGlzLmRhdGVGb3JtYXQ7XG5cbiAgICAgIC8vIFlvdSBjYW4ndCBwcm92aWRlIHV0YyBpZiB5b3Ugc2tpcCBvdGhlciBhcmdzICh1c2UgdGhlIFwiVVRDOlwiIG1hc2sgcHJlZml4KVxuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZGF0ZSkgPT0gXCJbb2JqZWN0IFN0cmluZ11cIiAmJiAhL1xcZC8udGVzdChkYXRlKSkge1xuICAgICAgICBtYXNrID0gZGF0ZTtcbiAgICAgICAgZGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgLy8gUGFzc2luZyBkYXRlIHRocm91Z2ggRGF0ZSBhcHBsaWVzIERhdGUucGFyc2UsIGlmIG5lY2Vzc2FyeVxuICAgICAgZGF0ZSA9IGRhdGUgPyBuZXcgRGF0ZShkYXRlKSA6IG5ldyBEYXRlO1xuICAgICAgaWYgKGlzTmFOKGRhdGUpKSB0aHJvdyBTeW50YXhFcnJvcihcImludmFsaWQgZGF0ZVwiKTtcblxuICAgICAgbWFzayA9IFN0cmluZyhkRi5tYXNrc1ttYXNrXSB8fCBtYXNrIHx8IGRGLm1hc2tzW1wiZGVmYXVsdFwiXSk7XG5cbiAgICAgIC8vIEFsbG93IHNldHRpbmcgdGhlIHV0YyBhcmd1bWVudCB2aWEgdGhlIG1hc2tcbiAgICAgIGlmIChtYXNrLnNsaWNlKDAsIDQpID09IFwiVVRDOlwiKSB7XG4gICAgICAgIG1hc2sgPSBtYXNrLnNsaWNlKDQpO1xuICAgICAgICB1dGMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB2YXJcdF8gPSB1dGMgPyBcImdldFVUQ1wiIDogXCJnZXRcIixcbiAgICAgICAgZCA9IGRhdGVbXyArIFwiRGF0ZVwiXSgpLFxuICAgICAgICBEID0gZGF0ZVtfICsgXCJEYXlcIl0oKSxcbiAgICAgICAgbSA9IGRhdGVbXyArIFwiTW9udGhcIl0oKSxcbiAgICAgICAgeSA9IGRhdGVbXyArIFwiRnVsbFllYXJcIl0oKSxcbiAgICAgICAgSCA9IGRhdGVbXyArIFwiSG91cnNcIl0oKSxcbiAgICAgICAgTSA9IGRhdGVbXyArIFwiTWludXRlc1wiXSgpLFxuICAgICAgICBzID0gZGF0ZVtfICsgXCJTZWNvbmRzXCJdKCksXG4gICAgICAgIEwgPSBkYXRlW18gKyBcIk1pbGxpc2Vjb25kc1wiXSgpLFxuICAgICAgICBvID0gdXRjID8gMCA6IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSxcbiAgICAgICAgZmxhZ3MgPSB7XG4gICAgICAgICAgZDogICAgZCxcbiAgICAgICAgICBkZDogICBwYWQoZCksXG4gICAgICAgICAgZGRkOiAgZEYuaTE4bi5kYXlOYW1lc1tEXSxcbiAgICAgICAgICBkZGRkOiBkRi5pMThuLmRheU5hbWVzW0QgKyA3XSxcbiAgICAgICAgICBtOiAgICBtICsgMSxcbiAgICAgICAgICBtbTogICBwYWQobSArIDEpLFxuICAgICAgICAgIG1tbTogIGRGLmkxOG4ubW9udGhOYW1lc1ttXSxcbiAgICAgICAgICBtbW1tOiBkRi5pMThuLm1vbnRoTmFtZXNbbSArIDEyXSxcbiAgICAgICAgICB5eTogICBTdHJpbmcoeSkuc2xpY2UoMiksXG4gICAgICAgICAgeXl5eTogeSxcbiAgICAgICAgICBoOiAgICBIICUgMTIgfHwgMTIsXG4gICAgICAgICAgaGg6ICAgcGFkKEggJSAxMiB8fCAxMiksXG4gICAgICAgICAgSDogICAgSCxcbiAgICAgICAgICBISDogICBwYWQoSCksXG4gICAgICAgICAgTTogICAgTSxcbiAgICAgICAgICBNTTogICBwYWQoTSksXG4gICAgICAgICAgczogICAgcyxcbiAgICAgICAgICBzczogICBwYWQocyksXG4gICAgICAgICAgbDogICAgcGFkKEwsIDMpLFxuICAgICAgICAgIEw6ICAgIHBhZChMID4gOTkgPyBNYXRoLnJvdW5kKEwgLyAxMCkgOiBMKSxcbiAgICAgICAgICB0OiAgICBIIDwgMTIgPyBcImFcIiAgOiBcInBcIixcbiAgICAgICAgICB0dDogICBIIDwgMTIgPyBcImFtXCIgOiBcInBtXCIsXG4gICAgICAgICAgVDogICAgSCA8IDEyID8gXCJBXCIgIDogXCJQXCIsXG4gICAgICAgICAgVFQ6ICAgSCA8IDEyID8gXCJBTVwiIDogXCJQTVwiLFxuICAgICAgICAgIFo6ICAgIHV0YyA/IFwiVVRDXCIgOiAoU3RyaW5nKGRhdGUpLm1hdGNoKHRpbWV6b25lKSB8fCBbXCJcIl0pLnBvcCgpLnJlcGxhY2UodGltZXpvbmVDbGlwLCBcIlwiKSxcbiAgICAgICAgICBvOiAgICAobyA+IDAgPyBcIi1cIiA6IFwiK1wiKSArIHBhZChNYXRoLmZsb29yKE1hdGguYWJzKG8pIC8gNjApICogMTAwICsgTWF0aC5hYnMobykgJSA2MCwgNCksXG4gICAgICAgICAgUzogICAgW1widGhcIiwgXCJzdFwiLCBcIm5kXCIsIFwicmRcIl1bZCAlIDEwID4gMyA/IDAgOiAoZCAlIDEwMCAtIGQgJSAxMCAhPSAxMCkgKiBkICUgMTBdXG4gICAgICAgIH07XG5cbiAgICAgIHJldHVybiBtYXNrLnJlcGxhY2UodG9rZW4sIGZ1bmN0aW9uICgkMCkge1xuICAgICAgICByZXR1cm4gJDAgaW4gZmxhZ3MgPyBmbGFnc1skMF0gOiAkMC5zbGljZSgxLCAkMC5sZW5ndGggLSAxKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0oKTtcblxuICB0aGlzLmRhdGVGb3JtYXQubWFza3MgPSB7XG4gICAgXCJkZWZhdWx0XCI6ICAgICAgXCJkZGQgbW1tIGRkIHl5eXkgSEg6TU06c3NcIixcbiAgICBzaG9ydERhdGU6ICAgICAgXCJtL2QveXlcIixcbiAgICBtZWRpdW1EYXRlOiAgICAgXCJtbW0gZCwgeXl5eVwiLFxuICAgIGxvbmdEYXRlOiAgICAgICBcIm1tbW0gZCwgeXl5eVwiLFxuICAgIGZ1bGxEYXRlOiAgICAgICBcImRkZGQsIG1tbW0gZCwgeXl5eVwiLFxuICAgIHNob3J0VGltZTogICAgICBcImg6TU0gVFRcIixcbiAgICBtZWRpdW1UaW1lOiAgICAgXCJoOk1NOnNzIFRUXCIsXG4gICAgbG9uZ1RpbWU6ICAgICAgIFwiaDpNTTpzcyBUVCBaXCIsXG4gICAgaXNvRGF0ZTogICAgICAgIFwieXl5eS1tbS1kZFwiLFxuICAgIGlzb1RpbWU6ICAgICAgICBcIkhIOk1NOnNzXCIsXG4gICAgaXNvRGF0ZVRpbWU6ICAgIFwieXl5eS1tbS1kZCdUJ0hIOk1NOnNzXCIsXG4gICAgaXNvVXRjRGF0ZVRpbWU6IFwiVVRDOnl5eXktbW0tZGQnVCdISDpNTTpzcydaJ1wiXG4gIH07XG5cbiAgdGhpcy5kYXRlRm9ybWF0LmkxOG4gPSB7XG4gICAgZGF5TmFtZXM6IFtcbiAgICAgIFwiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCIsXG4gICAgICBcIlN1bmRheVwiLCBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCJcbiAgICBdLFxuICAgIG1vbnRoTmFtZXM6IFtcbiAgICAgIFwiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCIsXG4gICAgICBcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJcbiAgICBdXG4gIH07XG5cbn07XG5cbkRhdGVVdGlscy4kaW5qZWN0ID0gW107XG5tb2R1bGUuZXhwb3J0cyA9IERhdGVVdGlscztcbiIsInZhciBGb3JtYXR0ZWREYXRlRGlyZWN0aXZlID0gZnVuY3Rpb24oZGF0ZVV0aWxzKSB7XG4gIHJldHVybiB7XG4gICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3RybCkge1xuICAgICAgY3RybC4kZm9ybWF0dGVycy51bnNoaWZ0KGZ1bmN0aW9uIChtb2RlbFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBkYXRlVXRpbHMuZGF0ZUZvcm1hdChtb2RlbFZhbHVlLCBcIm1tbSBkIHl5eXkgaDpNTSB0dCAoWilcIilcbiAgICAgIH0pO1xuXG4gICAgICBjdHJsLiRwYXJzZXJzLnVuc2hpZnQoZnVuY3Rpb24gKHZpZXdWYWx1ZSkge1xuICAgICAgICByZXR1cm4gZGF0ZVV0aWxzLmRhdGVGb3JtYXQobW9kZWxWYWx1ZSwgXCJtbW0gZCB5eXl5IGg6TU0gdHQgKFopXCIpXG4gICAgICB9KTtcbiAgICB9LFxuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgcmVxdWlyZTogJ25nTW9kZWwnXG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRm9ybWF0dGVkRGF0ZURpcmVjdGl2ZTtcbiIsInZhciBNYXRjaERpcmVjdGl2ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlcXVpcmU6ICduZ01vZGVsJyxcbiAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtLCBhdHRycywgY3RybCkge1xuICAgICAgICAgICAgc2NvcGUuJHdhdGNoKCdbJyArIGF0dHJzLm5nTW9kZWwgKyAnLCAnICsgYXR0cnMubWF0Y2ggKyAnXScsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSB2YWx1ZVswXSB8fCAnJztcbiAgICAgICAgICAgICAgICB2YXIgYiA9IHZhbHVlWzFdIHx8ICcnO1xuICAgICAgICAgICAgICAgIGN0cmwuJHNldFZhbGlkaXR5KCdtYXRjaCcsIGEgPT09IGIpO1xuICAgICAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hdGNoRGlyZWN0aXZlO1xuIiwidmFyIHJjU3VibWl0RGlyZWN0aXZlID0ge1xuICAncmNTdWJtaXQnOiBbJyRwYXJzZScsIGZ1bmN0aW9uICgkcGFyc2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgIHJlcXVpcmU6IFsncmNTdWJtaXQnLCAnP2Zvcm0nXSxcbiAgICAgIGNvbnRyb2xsZXI6IFsnJHNjb3BlJywgZnVuY3Rpb24gKCRzY29wZSkge1xuXG4gICAgICAgIHZhciBmb3JtQ29udHJvbGxlciA9IG51bGw7XG4gICAgICAgIHZhciBhdHRlbXB0SGFuZGxlcnMgPSBbXTtcblxuICAgICAgICB0aGlzLmF0dGVtcHRlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMub25BdHRlbXB0ID0gZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgICAgIGF0dGVtcHRIYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2V0QXR0ZW1wdGVkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdGhpcy5hdHRlbXB0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgYW5ndWxhci5mb3JFYWNoKGF0dGVtcHRIYW5kbGVycywgZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGhhbmRsZXIoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNldEZvcm1Db250cm9sbGVyID0gZnVuY3Rpb24oY29udHJvbGxlcikge1xuICAgICAgICAgIGZvcm1Db250cm9sbGVyID0gY29udHJvbGxlcjtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm5lZWRzQXR0ZW50aW9uID0gZnVuY3Rpb24gKGZpZWxkTW9kZWxDb250cm9sbGVyKSB7XG4gICAgICAgICAgaWYgKCFmb3JtQ29udHJvbGxlcikgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgaWYgKGZpZWxkTW9kZWxDb250cm9sbGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gZmllbGRNb2RlbENvbnRyb2xsZXIuJGludmFsaWQgJiZcbiAgICAgICAgICAgICAgKGZpZWxkTW9kZWxDb250cm9sbGVyLiRkaXJ0eSB8fCB0aGlzLmF0dGVtcHRlZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmb3JtQ29udHJvbGxlciAmJiBmb3JtQ29udHJvbGxlci4kaW52YWxpZCAmJlxuICAgICAgICAgICAgICAoZm9ybUNvbnRyb2xsZXIuJGRpcnR5IHx8IHRoaXMuYXR0ZW1wdGVkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XSxcbiAgICAgIGNvbXBpbGU6IGZ1bmN0aW9uKGNFbGVtZW50LCBjQXR0cmlidXRlcywgdHJhbnNjbHVkZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHByZTogZnVuY3Rpb24oc2NvcGUsIGZvcm1FbGVtZW50LCBhdHRyaWJ1dGVzLCBjb250cm9sbGVycykge1xuXG4gICAgICAgICAgICB2YXIgc3VibWl0Q29udHJvbGxlciA9IGNvbnRyb2xsZXJzWzBdO1xuICAgICAgICAgICAgdmFyIGZvcm1Db250cm9sbGVyID0gKGNvbnRyb2xsZXJzLmxlbmd0aCA+IDEpID8gY29udHJvbGxlcnNbMV0gOiBudWxsO1xuXG4gICAgICAgICAgICBzdWJtaXRDb250cm9sbGVyLnNldEZvcm1Db250cm9sbGVyKGZvcm1Db250cm9sbGVyKTtcblxuICAgICAgICAgICAgc2NvcGUucmMgPSBzY29wZS5yYyB8fCB7fTtcbiAgICAgICAgICAgIHNjb3BlLnJjW2F0dHJpYnV0ZXMubmFtZV0gPSBzdWJtaXRDb250cm9sbGVyO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcG9zdDogZnVuY3Rpb24oc2NvcGUsIGZvcm1FbGVtZW50LCBhdHRyaWJ1dGVzLCBjb250cm9sbGVycykge1xuXG4gICAgICAgICAgICB2YXIgc3VibWl0Q29udHJvbGxlciA9IGNvbnRyb2xsZXJzWzBdO1xuICAgICAgICAgICAgdmFyIGZvcm1Db250cm9sbGVyID0gKGNvbnRyb2xsZXJzLmxlbmd0aCA+IDEpID8gY29udHJvbGxlcnNbMV0gOiBudWxsO1xuICAgICAgICAgICAgdmFyIGZuID0gJHBhcnNlKGF0dHJpYnV0ZXMucmNTdWJtaXQpO1xuXG4gICAgICAgICAgICBmb3JtRWxlbWVudC5iaW5kKCdzdWJtaXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHN1Ym1pdENvbnRyb2xsZXIuc2V0QXR0ZW1wdGVkKCk7XG4gICAgICAgICAgICAgIGlmICghc2NvcGUuJCRwaGFzZSkgc2NvcGUuJGFwcGx5KCk7XG5cbiAgICAgICAgICAgICAgaWYgKCFmb3JtQ29udHJvbGxlci4kdmFsaWQpIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgICBzY29wZS4kYXBwbHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZm4oc2NvcGUsIHskZXZlbnQ6ZXZlbnR9KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcbiAgfV1cbn07IiwidmFyIHJjVmVyaWZ5U2V0RGlyZWN0aXZlID0ge1xuICAncmNWZXJpZnlTZXQnOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICByZXF1aXJlOiBbJ15yY1N1Ym1pdCcsICduZ01vZGVsJ10sXG4gICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJpYnV0ZXMsIGNvbnRyb2xsZXJzKSB7XG4gICAgICAgIHZhciBzdWJtaXRDb250cm9sbGVyID0gY29udHJvbGxlcnNbMF07XG4gICAgICAgIHZhciBtb2RlbENvbnRyb2xsZXIgPSBjb250cm9sbGVyc1sxXTtcblxuICAgICAgICBzdWJtaXRDb250cm9sbGVyLm9uQXR0ZW1wdChmdW5jdGlvbigpIHtcbiAgICAgICAgICBtb2RlbENvbnRyb2xsZXIuJHNldFZpZXdWYWx1ZShlbGVtZW50LnZhbCgpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufTsiLCIvKiBhdHRyaWJ1dGUgd2lsbCBlbmZvcmNlIGEgcmVnIGV4IHBhdHRlcm4gaWYgdGhlIGZpZWxkIGlzIG1hcmtlZCBhcyBuZy1yZXF1aXJlZCAqL1xudmFyIFJlcXVpcmVkUGF0dGVybkRpcmVjdGl2ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiBcIkFcIixcbiAgICAgICAgcmVxdWlyZTogXCJuZ01vZGVsXCIsXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbCwgYXR0cnMsIG5nTW9kZWwpIHtcbiAgICAgICAgICAgIHZhciB2YWxpZGF0b3IsIHBhdHRlcm5WYWxpZGF0b3IsXG4gICAgICAgICAgICAgICAgcGF0dGVybiA9IGF0dHJzLnJwYXR0ZXJuLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYoIHBhdHRlcm4gKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhdHRlcm4ubWF0Y2goL15cXC8oLiopXFwvJC8pKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gPSBuZXcgUmVnRXhwKHBhdHRlcm4uc3Vic3RyKDEsIHBhdHRlcm4ubGVuZ3RoIC0gMikpO1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuVmFsaWRhdG9yID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0ZShwYXR0ZXJuLCB2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm5WYWxpZGF0b3IgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhdHRlcm5PYmogPSBzY29wZS4kZXZhbChwYXR0ZXJuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcGF0dGVybk9iaiB8fCAhcGF0dGVybk9iai50ZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCAnICsgcGF0dGVybiArICcgdG8gYmUgYSBSZWdFeHAgYnV0IHdhcyAnICsgcGF0dGVybk9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdGUocGF0dGVybk9iaiwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmdNb2RlbC4kZm9ybWF0dGVycy5wdXNoKHBhdHRlcm5WYWxpZGF0b3IpO1xuICAgICAgICAgICAgbmdNb2RlbC4kcGFyc2Vycy5wdXNoKHBhdHRlcm5WYWxpZGF0b3IpO1xuXG4gICAgICAgICAgICBhdHRycy4kb2JzZXJ2ZShcInJlcXVpcmVkXCIsIGZ1bmN0aW9uKG5ld3ZhbCkge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkID0gbmV3dmFsO1xuICAgICAgICAgICAgICAgIHBhdHRlcm5WYWxpZGF0b3IobmdNb2RlbC4kdmlld1ZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZShyZWdleHAsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYoIHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09IFwiXCIgfHwgIXJlcXVpcmVkIHx8IHJlZ2V4cC50ZXN0KHZhbHVlKSApIHtcbiAgICAgICAgICAgICAgICAgICAgbmdNb2RlbC4kc2V0VmFsaWRpdHkoJ3BhdHRlcm4nLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmdNb2RlbC4kc2V0VmFsaWRpdHkoJ3BhdHRlcm4nLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlcXVpcmVkUGF0dGVybkRpcmVjdGl2ZTsiLCJ2YXIgU2VsZWN0T25DbGlja0RpcmVjdGl2ZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgZWxlbWVudC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0KCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNlbGVjdE9uQ2xpY2tEaXJlY3RpdmU7XG4iLCJ2YXIgUmVnaXN0ZXJUZXJtc0NvbnRyb2xsZXIgPSBmdW5jdGlvbigkbW9kYWxJbnN0YW5jZSwgJHNjb3BlLCAkbG9nKSB7XG5cbiAgJHNjb3BlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2Nsb3NlJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcInJlZ2lzdGVyIHRlcm1zIGFuZCBjb25kaXRpb25zIGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cblJlZ2lzdGVyVGVybXNDb250cm9sbGVyLiRpbmplY3QgPSBbJyRtb2RhbEluc3RhbmNlJywgJyRzY29wZScsICckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IFJlZ2lzdGVyVGVybXNDb250cm9sbGVyO1xuIiwidmFyIFVzZXJSZXNldENvbnRyb2xsZXIgPSBmdW5jdGlvbigkbW9kYWxJbnN0YW5jZSwgJHNjb3BlLCAkbG9nKSB7XG5cbiAgJHNjb3BlLnVzZXJEYXRhID0ge1xuICAgIGVtYWlsOiBcIlwiXG4gIH07XG5cbiAgJHNjb3BlLnJlc2V0ID0gZnVuY3Rpb24gKGVtYWlsKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuY2xvc2UoZW1haWwpO1xuICB9O1xuXG4gICRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2FuY2VsJyk7XG4gIH07XG5cbiAgJHNjb3BlLmhhc0Vycm9yID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgfTtcblxuICAkc2NvcGUuaGFzUHJvcGVydHlFcnJvciA9IGZ1bmN0aW9uKGlucHV0LCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRlcnJvcltwcm9wZXJ0eV07XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcInVzZXIgcmVzZXQgY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuVXNlclJlc2V0Q29udHJvbGxlci4kaW5qZWN0ID0gWyckbW9kYWxJbnN0YW5jZScsICckc2NvcGUnLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBVc2VyUmVzZXRDb250cm9sbGVyO1xuIiwidmFyIE5ld0xlYWd1ZUNvbnRyb2xsZXIgPSBmdW5jdGlvbihzZWFzb25JZCwgJHNjb3BlLCAkbG9jYXRpb24sIHdlZWtTZXJ2aWNlLCBsZWFndWVTZXJ2aWNlLCBzZWFzb25Nb2RlbCkge1xuXG4gICAgdmFyIGdldFNlYXNvbldlZWtzID0gZnVuY3Rpb24oKSB7XG4gICAgICAkc2NvcGUuY3JlYXRlQnRuRGlzYWJsZWQgPSB0cnVlO1xuICAgICAgd2Vla1NlcnZpY2UuZ2V0QXZhaWxhYmxlV2Vla3MoJHNjb3BlLmxlYWd1ZURhdGEuc2Vhc29uX2lkKVxuICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICRzY29wZS53ZWVrcyA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgJHNjb3BlLmxlYWd1ZURhdGEuc3RhcnRfd2Vla19pZCA9ICRzY29wZS53ZWVrc1swXS5pZDtcbiAgICAgICAgICAkc2NvcGUuY3JlYXRlQnRuRGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICRzY29wZS5zZWFzb25zID0gYW5ndWxhci5jb3B5KHNlYXNvbk1vZGVsLmN1cnJlbnRTZWFzb25zKTtcblxuICAgICRzY29wZS5tYXhQaWNrc1BlcldlZWsgPSBbXG4gICAgICB7IG51bWJlcjogbnVsbCwgZGlzcGxheTogJ1BpY2sgZXZlcnkgZ2FtZScgfSxcbiAgICAgIHsgbnVtYmVyOiAyNSwgZGlzcGxheTogJ1BpY2sgMjUgbG9zZXJzJyB9LFxuICAgICAgeyBudW1iZXI6IDE1LCBkaXNwbGF5OiAnUGljayAxNSBsb3NlcnMnIH0sXG4gICAgICB7IG51bWJlcjogMTAsIGRpc3BsYXk6ICdQaWNrIDEwIGxvc2VycycgfSxcbiAgICAgIHsgbnVtYmVyOiA1LCBkaXNwbGF5OiAnUGljayA1IGxvc2VycycgfSxcbiAgICAgIHsgbnVtYmVyOiAyLCBkaXNwbGF5OiAnUGljayAyIGxvc2VycycgfSxcbiAgICAgIHsgbnVtYmVyOiAxLCBkaXNwbGF5OiAnUGljayAxIGxvc2VyJyB9XG4gICAgXTtcblxuICAgICRzY29wZS5sZWFndWVEYXRhID0ge1xuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgbmlja25hbWU6ICcnLFxuICAgICAgICBzZWFzb25faWQ6IHNlYXNvbklkLFxuICAgICAgICBzdGFydF93ZWVrX2lkOiAnJyxcbiAgICAgICAgcHVibGljOiB0cnVlLFxuICAgICAgICBlbGltaW5hdGlvbjogZmFsc2UsXG4gICAgICAgIGVsaW1pbmF0ZV9vbl90aWU6IHRydWUsXG4gICAgICAgIG1heF90ZWFtc19wZXJfdXNlcjogJycsXG4gICAgICAgIG1heF9waWNrc19wZXJfd2VlazogJHNjb3BlLm1heFBpY2tzUGVyV2Vla1swXS5udW1iZXJcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNoYW5nZVNlYXNvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgJGxvY2F0aW9uLnBhdGgoJy9zZWFzb24vJyArICRzY29wZS5sZWFndWVEYXRhLnNlYXNvbl9pZCArICcvbGVhZ3VlL25ldycpOyAvLyB3aWxsIG5vdCByZWxvYWQgcGFnZSBkdWUgdG8gcmVsb2FkT25TZWFyY2g6IGZhbHNlXG4gICAgICBnZXRTZWFzb25XZWVrcygpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuY3JlYXRlTGVhZ3VlID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgICBsZWFndWVTZXJ2aWNlLmNyZWF0ZUxlYWd1ZShsZWFndWUpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAkbG9jYXRpb24udXJsKCcvc2Vhc29uLycgKyBsZWFndWUuc2Vhc29uX2lkICsgJy9sZWFndWUvJyArIGRhdGEubGVhZ3VlX2lkKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICRzY29wZS5oYXNFcnJvciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRlcnJvcltwcm9wZXJ0eV07XG4gICAgfTtcblxuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBnZXRTZWFzb25XZWVrcygpO1xuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5OZXdMZWFndWVDb250cm9sbGVyLiRpbmplY3QgPSBbJ3NlYXNvbklkJywgJyRzY29wZScsICckbG9jYXRpb24nLCAnd2Vla1NlcnZpY2UnLCAnbGVhZ3VlU2VydmljZScsICdzZWFzb25Nb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBOZXdMZWFndWVDb250cm9sbGVyO1xuIiwidmFyIFZpZXdMZWFndWVDb250cm9sbGVyID0gZnVuY3Rpb24obGVhZ3VlLCBsZWFndWVXZWVrcywgbGVhZ3VlVGVhbXMsICRzY29wZSwgJGxvZywgJG1vZGFsLCAkbG9jYXRpb24sICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCB1c2VyTW9kZWwsIG1lc3NhZ2VNb2RlbCwgdXNlclNlcnZpY2UsIHdlZWtTZXJ2aWNlLCB0ZWFtU2VydmljZSwgbGVhZ3VlU2VydmljZSkge1xuXG4gIHZhciBzZXRNZXNzYWdlU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIV8uaGFzKCRzY29wZS51c2VyTW9kZWwubGVhZ3VlTWVzc2FnZU9wZW4sICRzY29wZS5sZWFndWVEYXRhLmlkKSkge1xuICAgICAgJHNjb3BlLnVzZXJNb2RlbC5sZWFndWVNZXNzYWdlT3Blblskc2NvcGUubGVhZ3VlRGF0YS5pZF0gPSAkc2NvcGUubGVhZ3VlRGF0YS5tZXNzYWdlICYmICRzY29wZS5sZWFndWVEYXRhLm1lc3NhZ2UubGVuZ3RoID4gMDtcbiAgICB9XG4gIH07XG5cbiAgJHNjb3BlLmxlYWd1ZURhdGEgPSBsZWFndWUuZGF0YTtcblxuICAkc2NvcGUubGVhZ3VlV2Vla3MgPSBsZWFndWVXZWVrcy5kYXRhO1xuICAkc2NvcGUubGVhZ3VlVGVhbXMgPSBsZWFndWVUZWFtcy5kYXRhO1xuXG4gIC8vIHBhZ2luYXRpb25cbiAgJHNjb3BlLmN1cnJlbnRUZWFtUGFnZSA9IDE7XG4gICRzY29wZS50ZWFtc1BlclBhZ2UgPSAxMDA7XG5cbiAgJHNjb3BlLnRlYW1PcHRpb25zID0geyBhY3RpdmU6IHRydWUsIGluYWN0aXZlOiBmYWxzZSB9O1xuXG4gICRzY29wZS50ZWFtUXVlcnkgPSAnJztcblxuICAkc2NvcGUubGVhZ3VlRHJvcGRvd24gPSB7XG4gICAgaXNvcGVuOiBmYWxzZVxuICB9O1xuXG4gICRzY29wZS5zZWxlY3RlZFdlZWtTbHVnID0gJHN0YXRlUGFyYW1zLndlZWs7XG5cbiAgJHNjb3BlLnVzZXJNb2RlbCA9IHVzZXJNb2RlbDtcblxuICAkc2NvcGUuaW5QbGF5ID0gZnVuY3Rpb24odGVhbSkge1xuICAgIHJldHVybiAodGVhbS5hY3RpdmUgJiYgISRzY29wZS5pc0VsaW1pbmF0ZWQodGVhbSkpID8gMCA6IDE7XG4gIH07XG5cbiAgJHNjb3BlLmlzRWxpbWluYXRlZCA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICB2YXIgZWxpbWluYXRlZCA9IGZhbHNlO1xuICAgIGlmICh0ZWFtLmVsaW1pbmF0ZWRfYXQpIHtcbiAgICAgIGVsaW1pbmF0ZWQgPSB0cnVlO1xuICAgICAgaWYgKHRlYW0ud2Vla19lbmRzX2F0KSB7XG4gICAgICAgIGVsaW1pbmF0ZWQgPSAobW9tZW50KHRlYW0uZWxpbWluYXRlZF9hdCkuaXNCZWZvcmUodGVhbS53ZWVrX2VuZHNfYXQpIHx8IG1vbWVudCh0ZWFtLmVsaW1pbmF0ZWRfYXQpLmlzU2FtZSh0ZWFtLndlZWtfZW5kc19hdCkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZWxpbWluYXRlZDtcbiAgfTtcblxuICAkc2NvcGUuYWxpdmVUZWFtQ291bnQgPSBmdW5jdGlvbih0ZWFtcykge1xuICAgIHZhciBhbGl2ZVRlYW1zID0gXy5maWx0ZXIodGVhbXMsIGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAgIHJldHVybiB0ZWFtLmFjdGl2ZSAmJiAhJHNjb3BlLmlzRWxpbWluYXRlZCh0ZWFtKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYWxpdmVUZWFtcy5sZW5ndGg7XG4gIH07XG5cbiAgJHNjb3BlLnRvZ2dsZURyb3Bkb3duID0gZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICRzY29wZS5sZWFndWVEcm9wZG93bi5pc29wZW4gPSAhJHNjb3BlLmxlYWd1ZURyb3Bkb3duLmlzb3BlbjtcbiAgfTtcblxuICAkc2NvcGUuY2hhbmdlV2VlayA9IGZ1bmN0aW9uKHNsdWcpIHtcbiAgICBpZiAoc2x1Zykge1xuICAgICAgJGxvY2F0aW9uLnNlYXJjaCgnd2VlaycsIHNsdWcpOyAvLyBhZGQgLyByZXBsYWNlIHRoZSB3ZWVrIHF1ZXJ5IHBhcmFtXG4gICAgfSBlbHNlIHtcbiAgICAgICRsb2NhdGlvbi5zZWFyY2goJ3dlZWsnLCBudWxsKTsgLy8gcmVtb3ZlIHdlZWsgcXVlcnkgcGFyYW1cbiAgICB9XG4gIH07XG5cbiAgJHNjb3BlLnNlYXJjaCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICBpZiAoaXRlbS5uYW1lLmluZGV4T2YoJHNjb3BlLnRlYW1RdWVyeS50b0xvd2VyQ2FzZSgpKSAhPSAtMSB8fCBpdGVtLmNvYWNoX25hbWVzLmpvaW4oJywgJykuaW5kZXhPZigkc2NvcGUudGVhbVF1ZXJ5LnRvTG93ZXJDYXNlKCkpICE9IC0xKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gICRzY29wZS5zdGFydHMgPSBmdW5jdGlvbihsZWFndWUpIHtcbiAgICB2YXIgc3RhcnRzTGFiZWwgPSAobGVhZ3VlLnN0YXJ0ZWQpID8gJ1N0YXJ0ZWQgJyA6ICdTdGFydHMgJztcbiAgICByZXR1cm4gc3RhcnRzTGFiZWwgKyBsZWFndWUuc3RhcnRfd2Vla19kaXNwbGF5O1xuICB9O1xuXG4gICRzY29wZS5pc0NvbW1pc2ggPSBmdW5jdGlvbihsZWFndWUpIHtcbiAgICByZXR1cm4gbGVhZ3VlLmNvbW1pc2hfaWRzLmluZGV4T2YodXNlck1vZGVsLnVzZXIuaWQpID4gLTE7XG4gIH07XG5cbiAgJHNjb3BlLmlzQWRtaW4gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdXNlck1vZGVsLnVzZXIuYWRtaW47XG4gIH07XG5cbiAgJHNjb3BlLmhhc1RlYW1JbkxlYWd1ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuICAgIF8uZWFjaCgkc2NvcGUubGVhZ3VlVGVhbXMsIGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAgIGlmICh0ZWFtLmNvYWNoX2lkcy5pbmRleE9mKHVzZXJNb2RlbC51c2VyLmlkKSA+IC0xKSB7XG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZm91bmQ7XG4gIH07XG5cbiAgJHNjb3BlLmhhc0RlYWN0aXZhdGVkVGVhbXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZm91bmREZWFjdGl2YXRlZCA9IGZhbHNlO1xuICAgIF8uZWFjaCgkc2NvcGUubGVhZ3VlVGVhbXMsIGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAgIGlmICh0ZWFtLmFjdGl2ZSA9PSBmYWxzZSkge1xuICAgICAgICBmb3VuZERlYWN0aXZhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZm91bmREZWFjdGl2YXRlZDtcbiAgfTtcblxuICAkc2NvcGUuaXNDb2FjaCA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICByZXR1cm4gdGVhbS5jb2FjaF9pZHMuaW5kZXhPZih1c2VyTW9kZWwudXNlci5pZCkgPiAtMTtcbiAgfTtcblxuICAkc2NvcGUuY29hY2hOYW1lID0gZnVuY3Rpb24odGVhbSkge1xuICAgIHJldHVybiB0ZWFtLmNvYWNoX25hbWVzLmpvaW4oJywgJyk7XG4gIH07XG5cbiAgJHNjb3BlLmVkaXRMZWFndWUgPSBmdW5jdGlvbihsZWFndWUpIHtcbiAgICAkbG9jYXRpb24udXJsKCcvc2Vhc29uLycgKyBsZWFndWUuc2Vhc29uX2lkICsgJy9sZWFndWUvJyArIGxlYWd1ZS5pZCArICcvZWRpdCcpO1xuICB9O1xuXG4gICRzY29wZS5vcGVuTGVhZ3VlID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgbGVhZ3VlU2VydmljZS5vcGVuTGVhZ3VlKGxlYWd1ZSlcbiAgfTtcblxuICAkc2NvcGUuY2xvc2VMZWFndWUgPSBmdW5jdGlvbihsZWFndWUpIHtcbiAgICBsZWFndWVTZXJ2aWNlLmNsb3NlTGVhZ3VlKGxlYWd1ZSlcbiAgfTtcblxuICAkc2NvcGUuc2hvd1RlYW0gPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgJGxvY2F0aW9uLnBhdGgoJGxvY2F0aW9uLnBhdGgoKSArICcvdGVhbS8nICsgdGVhbS5pZCk7IC8vIHBhdGggd2lsbCByZXRhaW4gcXVlcnkgcGFyYW1zXG4gIH07XG5cbiAgJHNjb3BlLmNvbnRhY3RDb21taXNoID0gZnVuY3Rpb24obGVhZ3VlKSB7XG5cbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9jb250YWN0L2xlYWd1ZS5jb250YWN0LnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdMZWFndWVDb250YWN0Q29udHJvbGxlcicsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIGxlYWd1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGxlYWd1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihwYXJhbXMpIHtcbiAgICAgIGxlYWd1ZVNlcnZpY2Uuc2VuZENvbW1pc2hNZXNzYWdlKHBhcmFtcy5sZWFndWUsIHBhcmFtcy5tZXNzYWdlKVxuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ0NvbnRhY3QgbGVhZ3VlIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdDb250YWN0IGNvbW1pc2ggY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAkc2NvcGUucmVwb3J0QWJ1c2UgPSBmdW5jdGlvbigpIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3B1YmxpYy9hYnVzZS9hYnVzZS50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnQWJ1c2VDb250cm9sbGVyJ1xuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICB1c2VyU2VydmljZS5jb250YWN0VXMobWVzc2FnZSk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdDb250YWN0IHVzIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgICAgJGxvZy5kZWJ1ZygnY29udGFjdCB1cyBkaXNtaXNzZWQuLi4nKTtcbiAgICB9KTtcblxuICB9O1xuXG4gICRzY29wZS51cGRhdGVNZXNzYWdlID0gZnVuY3Rpb24obGVhZ3VlKSB7XG5cbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9tZXNzYWdlL2xlYWd1ZS5tZXNzYWdlLnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdMZWFndWVNZXNzYWdlQ29udHJvbGxlcicsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIGxlYWd1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGxlYWd1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihwYXJhbXMpIHtcbiAgICAgIGxlYWd1ZVNlcnZpY2UudXBkYXRlTGVhZ3VlTWVzc2FnZShwYXJhbXMubGVhZ3VlLCBwYXJhbXMuc2VuZEFsaXZlLCBwYXJhbXMuc2VuZEFsbClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgICRzY29wZS5sZWFndWVEYXRhLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB9KTtcblxuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ0xlYWd1ZSBtZXNzYWdlIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdVcGRhdGUgbGVhZ3VlIG1lc3NhZ2UgY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAkc2NvcGUuam9pbkxlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuXG4gICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvam9pbi9sZWFndWUuam9pbi50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnTGVhZ3VlSm9pbkNvbnRyb2xsZXInLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICBsZWFndWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBsZWFndWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24odGVhbSkge1xuICAgICAgdGVhbVNlcnZpY2UuY3JlYXRlVGVhbSh0ZWFtKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIHRydWUpO1xuICAgICAgICAgICAgdmFyIG5ld1RlYW1QYXRoID0gJGxvY2F0aW9uLnBhdGgoKSArICcvdGVhbS8nICsgZGF0YS50ZWFtX2lkO1xuICAgICAgICAgICAgJGxvY2F0aW9uLnBhdGgobmV3VGVhbVBhdGgpOyAvLyBuYXZpZ2F0ZSB0byB0aGUgbmV3IHRlYW0gcGFnZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgfSk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnSm9pbiBsZWFndWUgbW9kYWwgZGlzbWlzc2VkLi4uJyk7XG4gICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ0pvaW4gbGVhZ3VlIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgIH0pO1xuXG4gIH07XG5cbiAgJHNjb3BlLnJlcXVlc3RJbnZpdGUgPSBmdW5jdGlvbihsZWFndWUpIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2ludml0ZS9yZXF1ZXN0L2xlYWd1ZS5pbnZpdGUucmVxdWVzdC50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnTGVhZ3VlSW52aXRlUmVxdWVzdENvbnRyb2xsZXInLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICBsZWFndWVJZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGxlYWd1ZS5pZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbiAoaW52aXRhdGlvbikge1xuICAgICAgbGVhZ3VlU2VydmljZS5yZXF1ZXN0SW52aXRlKGludml0YXRpb24pO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ1JlcXVlc3QgaW52aXRlIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdSZXF1ZXN0IGludml0ZSBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcblxuICB9O1xuXG4gICRzY29wZS5pbnZpdGUgPSBmdW5jdGlvbihsZWFndWVJZCwgaXNDb21taXNoLCBsZWFndWVDbG9zZWQpIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2ludml0ZS9sZWFndWUuaW52aXRlLnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdMZWFndWVJbnZpdGVDb250cm9sbGVyJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgbGVhZ3VlSWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBsZWFndWVJZDtcbiAgICAgICAgfSxcbiAgICAgICAgaXNDb21taXNoOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gaXNDb21taXNoO1xuICAgICAgICB9LFxuICAgICAgICBsZWFndWVDbG9zZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBsZWFndWVDbG9zZWQ7XG4gICAgICAgIH0sXG4gICAgICAgIGludml0YXRpb25zOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoaXNDb21taXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gbGVhZ3VlU2VydmljZS5nZXRJbnZpdGVzKGxlYWd1ZUlkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHsgZGF0YTogW10gfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24oaW52aXRhdGlvbikge1xuICAgICAgbGVhZ3VlU2VydmljZS5jcmVhdGVJbnZpdGUoaW52aXRhdGlvbik7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnSW52aXRlIGNvYWNoIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgIH0pO1xuICB9O1xuXG4gICRzY29wZS5zaG93RGVhY3RpdmF0ZWRUZWFtcyA9IGZ1bmN0aW9uKHNob3cpIHtcbiAgICAkc2NvcGUudGVhbU9wdGlvbnMuaW5hY3RpdmUgPSBzaG93O1xuICAgIGlmIChzaG93KSB7XG4gICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICdpbmZvJywgY29udGVudDogJ1Nob3dpbmcgZGVhY3RpdmF0ZWQgdGVhbXMgKGlmIGFueSknIH0sIGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnaW5mbycsIGNvbnRlbnQ6ICdIaWRpbmcgZGVhY3RpdmF0ZWQgdGVhbXMgKGlmIGFueSknIH0sIGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgJHNjb3BlLnBpY2tTdGF0dXMgPSBmdW5jdGlvbihwaWNrKSB7XG4gICAgdmFyIHN0YXR1cyA9ICcnO1xuICAgIGlmIChwaWNrLndhcm5pbmcgPT09IHRydWUpIHtcbiAgICAgIHN0YXR1cyA9ICd3YXJuaW5nJztcbiAgICB9IGVsc2UgaWYgKHBpY2suY29ycmVjdCA9PT0gdHJ1ZSkge1xuICAgICAgc3RhdHVzID0gJ2NoZWNrJztcbiAgICB9IGVsc2UgaWYgKHBpY2sudGllID09PSB0cnVlIHx8IHBpY2suaW5jb21wbGV0ZSA9PT0gdHJ1ZSkge1xuICAgICAgc3RhdHVzID0gJ21pbnVzJztcbiAgICB9IGVsc2UgaWYgKHBpY2suY29ycmVjdCA9PT0gZmFsc2UpIHtcbiAgICAgIHN0YXR1cyA9ICd0aW1lcyc7XG4gICAgfSBlbHNlIGlmIChwaWNrLmxvY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgc3RhdHVzID0gJ2xvY2snO1xuICAgIH0gZWxzZSBpZiAocGljay5sb2NrZWQgPT09IGZhbHNlKSB7XG4gICAgICBzdGF0dXMgPSAndW5sb2NrJztcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdHVzID0gJ3RoLWxpc3QnO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdHVzO1xuICB9O1xuXG4gICRzY29wZS5yZXNldFNlYXJjaCA9IGZ1bmN0aW9uKCkge1xuICAgICRzY29wZS50ZWFtUXVlcnkgPSAnJztcbiAgICAkc2NvcGUuY3VycmVudFRlYW1QYWdlID0gMTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwidmlldyBsZWFndWUgY29udHJvbGxlclwiKTtcbiAgICBzZXRNZXNzYWdlU3RhdGUoKTtcbiAgfTtcbiAgaW5pdCgpO1xuXG59O1xuXG5WaWV3TGVhZ3VlQ29udHJvbGxlci4kaW5qZWN0ID0gWydsZWFndWUnLCdsZWFndWVXZWVrcycsICdsZWFndWVUZWFtcycsICckc2NvcGUnLCAnJGxvZycsICckbW9kYWwnLCAnJGxvY2F0aW9uJywgJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAndXNlck1vZGVsJywgJ21lc3NhZ2VNb2RlbCcsICd1c2VyU2VydmljZScsICd3ZWVrU2VydmljZScsICd0ZWFtU2VydmljZScsICdsZWFndWVTZXJ2aWNlJ107XG5tb2R1bGUuZXhwb3J0cyA9IFZpZXdMZWFndWVDb250cm9sbGVyO1xuIiwidmFyIEVkaXRMZWFndWVDb250cm9sbGVyID0gZnVuY3Rpb24obGVhZ3VlLCAkc2NvcGUsICRsb2NhdGlvbiwgd2Vla1NlcnZpY2UsIGxlYWd1ZVNlcnZpY2UsIHNlYXNvbk1vZGVsKSB7XG5cbiAgICB2YXIgc2hvd0xlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgICAgJGxvY2F0aW9uLnVybCgnL3NlYXNvbi8nICsgbGVhZ3VlLnNlYXNvbl9pZCArICcvbGVhZ3VlLycgKyBsZWFndWUuaWQpO1xuICAgIH07XG5cbiAgICB2YXIgZ2V0U2Vhc29uV2Vla3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICRzY29wZS5lZGl0QnRuRGlzYWJsZWQgPSB0cnVlO1xuICAgICAgd2Vla1NlcnZpY2UuZ2V0QXZhaWxhYmxlV2Vla3MoJHNjb3BlLmxlYWd1ZURhdGEuc2Vhc29uX2lkKVxuICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICRzY29wZS53ZWVrcyA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgJHNjb3BlLmVkaXRCdG5EaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLnNlYXNvbnMgPSBhbmd1bGFyLmNvcHkoc2Vhc29uTW9kZWwuY3VycmVudFNlYXNvbnMpO1xuXG4gICAgJHNjb3BlLmxlYWd1ZURhdGEgPSBhbmd1bGFyLmNvcHkobGVhZ3VlLmRhdGEpO1xuXG4gICAgJHNjb3BlLm1heFBpY2tzUGVyV2VlayA9IFtcbiAgICAgIHsgbnVtYmVyOiBudWxsLCBkaXNwbGF5OiAnUGljayBldmVyeSBnYW1lJyB9LFxuICAgICAgeyBudW1iZXI6IDI1LCBkaXNwbGF5OiAnUGljayAyNSBsb3NlcnMnIH0sXG4gICAgICB7IG51bWJlcjogMTUsIGRpc3BsYXk6ICdQaWNrIDE1IGxvc2VycycgfSxcbiAgICAgIHsgbnVtYmVyOiAxMCwgZGlzcGxheTogJ1BpY2sgMTAgbG9zZXJzJyB9LFxuICAgICAgeyBudW1iZXI6IDUsIGRpc3BsYXk6ICdQaWNrIDUgbG9zZXJzJyB9LFxuICAgICAgeyBudW1iZXI6IDIsIGRpc3BsYXk6ICdQaWNrIDIgbG9zZXJzJyB9LFxuICAgICAgeyBudW1iZXI6IDEsIGRpc3BsYXk6ICdQaWNrIDEgbG9zZXInIH1cbiAgICBdO1xuXG4gICAgJHNjb3BlLnVwZGF0ZUxlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgICAgbGVhZ3VlU2VydmljZS51cGRhdGVMZWFndWUobGVhZ3VlKVxuICAgICAgICAudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgc2hvd0xlYWd1ZShsZWFndWUpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmhhc0Vycm9yID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICAgIH07XG5cbiAgICAkc2NvcGUuaGFzUHJvcGVydHlFcnJvciA9IGZ1bmN0aW9uKGlucHV0LCBwcm9wZXJ0eSkge1xuICAgICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgICB9O1xuXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoISRzY29wZS5sZWFndWVEYXRhLnN0YXJ0ZWQpIHtcbiAgICAgICAgICBnZXRTZWFzb25XZWVrcygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cbkVkaXRMZWFndWVDb250cm9sbGVyLiRpbmplY3QgPSBbJ2xlYWd1ZScsICckc2NvcGUnLCAnJGxvY2F0aW9uJywgJ3dlZWtTZXJ2aWNlJywgJ2xlYWd1ZVNlcnZpY2UnLCAnc2Vhc29uTW9kZWwnXTtcbm1vZHVsZS5leHBvcnRzID0gRWRpdExlYWd1ZUNvbnRyb2xsZXI7XG4iLCJ2YXIgTGVhZ3VlQ29udGFjdENvbnRyb2xsZXIgPSBmdW5jdGlvbihsZWFndWUsICRtb2RhbEluc3RhbmNlLCAkc2NvcGUsICRsb2cpIHtcblxuICAkc2NvcGUubGVhZ3VlRGF0YSA9IGxlYWd1ZTtcblxuICAkc2NvcGUuY29tbWlzaE1lc3NhZ2UgPSAnJztcblxuICAkc2NvcGUuY29udGFjdENvbW1pc2ggPSBmdW5jdGlvbihsZWFndWUsIG1lc3NhZ2UpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZSh7IGxlYWd1ZTogbGVhZ3VlLCBtZXNzYWdlOiBtZXNzYWdlIH0pO1xuICB9O1xuXG4gICRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgfTtcblxuICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICB9O1xuXG4gICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwibGVhZ3VlIGNvbnRhY3QgY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuTGVhZ3VlQ29udGFjdENvbnRyb2xsZXIuJGluamVjdCA9IFsnbGVhZ3VlJywgJyRtb2RhbEluc3RhbmNlJywgJyRzY29wZScsICckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IExlYWd1ZUNvbnRhY3RDb250cm9sbGVyO1xuIiwidmFyIExlYWd1ZU1lc3NhZ2VDb250cm9sbGVyID0gZnVuY3Rpb24obGVhZ3VlLCAkbW9kYWxJbnN0YW5jZSwgJHNjb3BlLCAkbG9nKSB7XG5cbiAgJHNjb3BlLmxlYWd1ZURhdGEgPSBhbmd1bGFyLmNvcHkobGVhZ3VlKTtcblxuICAkc2NvcGUubWVzc2FnZU9wdGlvbnMgPSB7XG4gICAgc2VuZEFsaXZlOiBmYWxzZSxcbiAgICBzZW5kQWxsOiBmYWxzZVxuICB9O1xuXG4gICRzY29wZS51cGRhdGVNZXNzYWdlID0gZnVuY3Rpb24obGVhZ3VlLCBzZW5kQWxpdmUsIHNlbmRBbGwpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZSh7IGxlYWd1ZTogbGVhZ3VlLCBzZW5kQWxpdmU6IHNlbmRBbGl2ZSwgc2VuZEFsbDogc2VuZEFsbCB9KTtcbiAgfTtcblxuICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2FuY2VsJyk7XG4gIH07XG5cbiAgJHNjb3BlLmhhc0Vycm9yID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgfTtcblxuICAkc2NvcGUuaGFzUHJvcGVydHlFcnJvciA9IGZ1bmN0aW9uKGlucHV0LCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRlcnJvcltwcm9wZXJ0eV07XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcImxlYWd1ZSBtZXNzYWdlIGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cbkxlYWd1ZU1lc3NhZ2VDb250cm9sbGVyLiRpbmplY3QgPSBbJ2xlYWd1ZScsICckbW9kYWxJbnN0YW5jZScsICckc2NvcGUnLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBMZWFndWVNZXNzYWdlQ29udHJvbGxlcjtcbiIsInZhciBMZWFndWVKb2luQ29udHJvbGxlciA9IGZ1bmN0aW9uKGxlYWd1ZSwgJG1vZGFsSW5zdGFuY2UsICRzY29wZSwgJGxvZykge1xuXG4gICRzY29wZS5sZWFndWVEYXRhID0gbGVhZ3VlO1xuXG4gICRzY29wZS5uZXdUZWFtRGF0YSA9IHtcbiAgICBuYW1lOiAnJyxcbiAgICBzZWFzb25faWQ6IGxlYWd1ZS5zZWFzb25faWQsXG4gICAgbGVhZ3VlX2lkOiBsZWFndWUuaWRcbiAgfTtcblxuICAkc2NvcGUuam9pbkxlYWd1ZSA9IGZ1bmN0aW9uIChuZXdUZWFtKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuY2xvc2UobmV3VGVhbSk7XG4gIH07XG5cbiAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgfTtcblxuICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICB9O1xuXG4gICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwibGVhZ3VlIGpvaW4gY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuTGVhZ3VlSm9pbkNvbnRyb2xsZXIuJGluamVjdCA9IFsnbGVhZ3VlJywgJyRtb2RhbEluc3RhbmNlJywgJyRzY29wZScsICckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IExlYWd1ZUpvaW5Db250cm9sbGVyO1xuIiwidmFyIExlYWd1ZUludml0ZUNvbnRyb2xsZXIgPSBmdW5jdGlvbihsZWFndWVJZCwgaXNDb21taXNoLCBsZWFndWVDbG9zZWQsIGludml0YXRpb25zLCAkbW9kYWwsICRtb2RhbEluc3RhbmNlLCAkc2NvcGUsICRsb2cpIHtcblxuICAkc2NvcGUuaXNDb21taXNoID0gaXNDb21taXNoO1xuXG4gICRzY29wZS5sZWFndWVDbG9zZWQgPSBsZWFndWVDbG9zZWQ7XG5cbiAgJHNjb3BlLmludml0YXRpb25zID0gaW52aXRhdGlvbnMuZGF0YTtcblxuICAkc2NvcGUucmVzZXRJbnZpdGUgPSBmdW5jdGlvbigpIHtcbiAgICAkc2NvcGUuaW52aXRhdGlvbiA9IHtcbiAgICAgIGxlYWd1ZV9pZDogbGVhZ3VlSWQsXG4gICAgICBlbWFpbDogXCJcIixcbiAgICAgIG1lc3NhZ2U6IFwiXCJcbiAgICB9XG4gIH07XG4gICRzY29wZS5yZXNldEludml0ZSgpO1xuXG4gICRzY29wZS5wb3B1bGF0ZUludml0ZSA9IGZ1bmN0aW9uKGludml0YXRpb24pIHtcbiAgICAkc2NvcGUuaW52aXRhdGlvbiA9IHtcbiAgICAgIGxlYWd1ZV9pZDogaW52aXRhdGlvbi5sZWFndWVfaWQsXG4gICAgICBlbWFpbDogaW52aXRhdGlvbi5lbWFpbCxcbiAgICAgIG1lc3NhZ2U6IGludml0YXRpb24ubWVzc2FnZVxuICAgIH1cbiAgfTtcblxuICAkc2NvcGUuc2VuZEludml0ZSA9IGZ1bmN0aW9uKGludml0YXRpb24pIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZShpbnZpdGF0aW9uKTtcbiAgfTtcblxuICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2FuY2VsJyk7XG4gIH07XG5cbiAgJHNjb3BlLmhhc0Vycm9yID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgfTtcblxuICAkc2NvcGUuaGFzUHJvcGVydHlFcnJvciA9IGZ1bmN0aW9uKGlucHV0LCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRlcnJvcltwcm9wZXJ0eV07XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcImxlYWd1ZSBpbnZpdGUgY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuTGVhZ3VlSW52aXRlQ29udHJvbGxlci4kaW5qZWN0ID0gWydsZWFndWVJZCcsICdpc0NvbW1pc2gnLCAnbGVhZ3VlQ2xvc2VkJywgJ2ludml0YXRpb25zJywgJyRtb2RhbCcsICckbW9kYWxJbnN0YW5jZScsICckc2NvcGUnLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBMZWFndWVJbnZpdGVDb250cm9sbGVyO1xuIiwidmFyIEpvaW5MZWFndWVzQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJGxvZywgJGxvY2F0aW9uLCAkc3RhdGVQYXJhbXMsIHVzZXJNb2RlbCwgbWVzc2FnZU1vZGVsLCBzZWFzb25Nb2RlbCkge1xuXG4gICRzY29wZS5zZWxlY3RlZFNlYXNvbklkID0gcGFyc2VJbnQoJHN0YXRlUGFyYW1zLnNlYXNvbklkKTtcblxuICAkc2NvcGUuY3VycmVudFNlYXNvbnMgPSBhbmd1bGFyLmNvcHkoc2Vhc29uTW9kZWwuY3VycmVudFNlYXNvbnMpO1xuXG4gICRzY29wZS5sZWFndWVRdWVyeSA9ICcnO1xuXG4gICRzY29wZS5wdWJsaWNMZWFndWVzID0gZnVuY3Rpb24oc2Vhc29uSWQpIHtcbiAgICAkbG9jYXRpb24udXJsKCcvc2Vhc29uLycgKyBzZWFzb25JZCArICcvbGVhZ3Vlcy9wdWJsaWMnKTtcbiAgfTtcblxuICAkc2NvcGUucHJpdmF0ZUxlYWd1ZXMgPSBmdW5jdGlvbihzZWFzb25JZCkge1xuICAgICRsb2NhdGlvbi51cmwoJy9zZWFzb24vJyArIHNlYXNvbklkICsgJy9sZWFndWVzL3ByaXZhdGUnKTtcbiAgfTtcblxuICAkc2NvcGUuY2hhbmdlU2Vhc29uID0gZnVuY3Rpb24oc2Vhc29uSWQpIHtcbiAgICBzZWFzb25Nb2RlbC5zZXRTZWxlY3RlZFNlYXNvbklkKHNlYXNvbklkKTtcbiAgICB2YXIgbmV3UGF0aCA9ICRsb2NhdGlvbi5wYXRoKCkucmVwbGFjZSgvKFxcL3NlYXNvblxcLylcXGQqLywgJyQxJyArIHNlYXNvbklkKTtcbiAgICAkbG9jYXRpb24udXJsKG5ld1BhdGgpO1xuICB9O1xuXG4gICRzY29wZS5zZWFyY2ggPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgaWYgKGl0ZW0ubmFtZS5pbmRleE9mKCRzY29wZS5sZWFndWVRdWVyeS50b0xvd2VyQ2FzZSgpKSAhPSAtMSB8fCBpdGVtLmNvbW1pc2hfbmFtZXMuam9pbignLCAnKS5pbmRleE9mKCRzY29wZS5sZWFndWVRdWVyeS50b0xvd2VyQ2FzZSgpKSAhPSAtMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAkc2NvcGUucmVzZXRTZWFyY2ggPSBmdW5jdGlvbigpIHtcbiAgICAkc2NvcGUubGVhZ3VlUXVlcnkgPSAnJztcbiAgfTtcblxuICAkc2NvcGUuc3RhcnRzID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgdmFyIHN0YXJ0c0xhYmVsID0gKGxlYWd1ZS5zdGFydGVkKSA/ICdTdGFydGVkICcgOiAnU3RhcnRzICc7XG4gICAgcmV0dXJuIHN0YXJ0c0xhYmVsICsgbGVhZ3VlLnN0YXJ0X3dlZWs7XG4gIH07XG5cbiAgJHNjb3BlLmlzQ29tbWlzaCA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgIHJldHVybiBsZWFndWUuY29tbWlzaF9pZHMuaW5kZXhPZih1c2VyTW9kZWwudXNlci5pZCkgPiAtMTtcbiAgfTtcblxuICAkc2NvcGUuY3JlYXRlTGVhZ3VlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNlYXNvbiA9IHNlYXNvbk1vZGVsLmdldEN1cnJlbnRTZWFzb24oKTtcbiAgICAkbG9jYXRpb24udXJsKCcvc2Vhc29uLycgKyBzZWFzb24uaWQgKyAnL2xlYWd1ZS9uZXcnKTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwiam9pbiBsZWFndWVzIGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcblxufTtcblxuSm9pbkxlYWd1ZXNDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJywgJyRsb2NhdGlvbicsICckc3RhdGVQYXJhbXMnLCAndXNlck1vZGVsJywgJ21lc3NhZ2VNb2RlbCcsICdzZWFzb25Nb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBKb2luTGVhZ3Vlc0NvbnRyb2xsZXI7XG4iLCJ2YXIgTWFuYWdlZExlYWd1ZXNDb250cm9sbGVyID0gZnVuY3Rpb24obWFuYWdlZExlYWd1ZXMsICRzY29wZSwgJGxvZywgJGxvY2F0aW9uLCAkbW9kYWwsIG1lc3NhZ2VNb2RlbCwgbGVhZ3VlU2VydmljZSkge1xuXG4gICAgJHNjb3BlLm1hbmFnZWRMZWFndWVzID0gbWFuYWdlZExlYWd1ZXMuZGF0YTtcblxuICAgICRzY29wZS5jcmVhdGVMZWFndWUgPSBmdW5jdGlvbihzZWFzb24pIHtcblxuICAgICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9uZXcvbGVhZ3VlLm5ldy50cGwuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdOZXdMZWFndWVDb250cm9sbGVyJ1xuICAgICAgfSk7XG5cbiAgICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgICAgIGxlYWd1ZVNlcnZpY2UuY3JlYXRlTGVhZ3VlKGxlYWd1ZSk7XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoJ0NyZWF0ZSBsZWFndWUgbW9kYWwgZGlzbWlzc2VkLi4uJyk7XG4gICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnQ3JlYXRlIGxlYWd1ZSBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgICRzY29wZS52aWV3TGVhZ3VlID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgICAgICRsb2NhdGlvbi51cmwoJy9zZWFzb24vJyArIGxlYWd1ZS5zZWFzb25faWQgKyAnL2xlYWd1ZS8nICsgbGVhZ3VlLmlkKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLnN0YXJ0cyA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgICAgdmFyIHN0YXJ0c0xhYmVsID0gKGxlYWd1ZS5zdGFydGVkKSA/ICdTdGFydGVkICcgOiAnU3RhcnRzICc7XG4gICAgICByZXR1cm4gc3RhcnRzTGFiZWwgKyBsZWFndWUuc3RhcnRfd2VlaztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJtYW5hZ2VkIGxlYWd1ZXMgY29udHJvbGxlclwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcblxufTtcblxuTWFuYWdlZExlYWd1ZXNDb250cm9sbGVyLiRpbmplY3QgPSBbJ21hbmFnZWRMZWFndWVzJywgJyRzY29wZScsICckbG9nJywgJyRsb2NhdGlvbicsICckbW9kYWwnLCAnbWVzc2FnZU1vZGVsJywgJ2xlYWd1ZVNlcnZpY2UnXTtcbm1vZHVsZS5leHBvcnRzID0gTWFuYWdlZExlYWd1ZXNDb250cm9sbGVyO1xuXG4iLCJ2YXIgTXlMZWFndWVzQ29udHJvbGxlciA9IGZ1bmN0aW9uKGxlYWd1ZXMsICRzY29wZSwgJGxvZywgJGxvY2F0aW9uLCAkbW9kYWwsIG1lc3NhZ2VNb2RlbCwgc2Vhc29uTW9kZWwsIGxlYWd1ZVNlcnZpY2UpIHtcblxuICAkc2NvcGUubGVhZ3VlcyA9IGxlYWd1ZXMuZGF0YTtcblxuICAkc2NvcGUuY3JlYXRlTGVhZ3VlID0gZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9uZXcvbGVhZ3VlLm5ldy50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnTmV3TGVhZ3VlQ29udHJvbGxlcidcbiAgICB9KTtcblxuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgICBsZWFndWVTZXJ2aWNlLmNyZWF0ZUxlYWd1ZShsZWFndWUpO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ0NyZWF0ZSBsZWFndWUgbW9kYWwgZGlzbWlzc2VkLi4uJyk7XG4gICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ0NyZWF0ZSBsZWFndWUgY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAkc2NvcGUuam9pbkxlYWd1ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzZWFzb24gPSBzZWFzb25Nb2RlbC5nZXRDdXJyZW50U2Vhc29uKCk7XG4gICAgJGxvY2F0aW9uLnVybCgnL3NlYXNvbi8nICsgc2Vhc29uLmlkICsgJy9sZWFndWVzL3B1YmxpYycpO1xuICB9O1xuXG4gICRzY29wZS52aWV3TGVhZ3VlID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgJGxvY2F0aW9uLnVybCgnL3NlYXNvbi8nICsgbGVhZ3VlLnNlYXNvbl9pZCArICcvbGVhZ3VlLycgKyBsZWFndWUuaWQpO1xuICB9O1xuXG4gICRzY29wZS5zdGFydHMgPSBmdW5jdGlvbihsZWFndWUpIHtcbiAgICB2YXIgc3RhcnRzTGFiZWwgPSAobGVhZ3VlLnN0YXJ0ZWQpID8gJ1N0YXJ0ZWQgJyA6ICdTdGFydHMgJztcbiAgICByZXR1cm4gc3RhcnRzTGFiZWwgKyBsZWFndWUuc3RhcnRfd2VlaztcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwibXkgbGVhZ3VlcyBjb250cm9sbGVyXCIpO1xuICB9O1xuICBpbml0KCk7XG5cbn07XG5cbk15TGVhZ3Vlc0NvbnRyb2xsZXIuJGluamVjdCA9IFsnbGVhZ3VlcycsICckc2NvcGUnLCAnJGxvZycsICckbG9jYXRpb24nLCAnJG1vZGFsJywgJ21lc3NhZ2VNb2RlbCcsICdzZWFzb25Nb2RlbCcsICdsZWFndWVTZXJ2aWNlJ107XG5tb2R1bGUuZXhwb3J0cyA9IE15TGVhZ3Vlc0NvbnRyb2xsZXI7XG5cbiIsInZhciBWaWV3VGVhbUNvbnRyb2xsZXIgPSBmdW5jdGlvbih0ZWFtLCBsZWFndWVUZWFtcywgJHNjb3BlLCAkbG9nLCAkbW9kYWwsICR3aW5kb3csICR0aW1lb3V0LCAkbG9jYXRpb24sICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBtZXNzYWdlTW9kZWwsIHVzZXJNb2RlbCwgdXNlclNlcnZpY2UsIHRlYW1TZXJ2aWNlKSB7XG5cbiAgdmFyIGFjdGl2YXRlID0gZnVuY3Rpb24odGVhbSkge1xuICAgIHRlYW1TZXJ2aWNlLmFjdGl2YXRlVGVhbSh0ZWFtKVxuICAgICAgLnRoZW4oZnVuY3Rpb24oYWN0aXZlKSB7XG4gICAgICAgIHRlYW0uYWN0aXZlID0gYWN0aXZlO1xuICAgICAgfSk7XG4gIH07XG5cbiAgdmFyIGRlYWN0aXZhdGUgPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgdGVhbVNlcnZpY2UuZGVhY3RpdmF0ZVRlYW0odGVhbSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uKGFjdGl2ZSkge1xuICAgICAgICB0ZWFtLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHZhciBzZXRNZXNzYWdlU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIV8uaGFzKCRzY29wZS51c2VyTW9kZWwudGVhbU1lc3NhZ2VPcGVuLCAkc2NvcGUudGVhbURhdGEuaWQpKSB7XG4gICAgICAkc2NvcGUudXNlck1vZGVsLnRlYW1NZXNzYWdlT3Blblskc2NvcGUudGVhbURhdGEuaWRdID0gJHNjb3BlLnRlYW1EYXRhLm1lc3NhZ2UgJiYgJHNjb3BlLnRlYW1EYXRhLm1lc3NhZ2UubGVuZ3RoID4gMDtcbiAgICB9XG4gIH07XG5cbiAgJHNjb3BlLnRlYW1EYXRhID0gdGVhbS5kYXRhO1xuICAkc2NvcGUubGVhZ3VlVGVhbXMgPSBsZWFndWVUZWFtcy5kYXRhO1xuXG4gICRzY29wZS50ZWFtRHJvcGRvd24gPSB7XG4gICAgaXNvcGVuOiBmYWxzZVxuICB9O1xuXG4gICRzY29wZS51c2VyTW9kZWwgPSB1c2VyTW9kZWw7XG5cbiAgJHNjb3BlLnRvZ2dsZURyb3Bkb3duID0gZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICRzY29wZS50ZWFtRHJvcGRvd24uaXNvcGVuID0gISRzY29wZS50ZWFtRHJvcGRvd24uaXNvcGVuO1xuICB9O1xuXG4gICRzY29wZS5jb250YWN0Q29tbWlzaCA9IGZ1bmN0aW9uKHRlYW0pIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2NvbnRhY3QvbGVhZ3VlLmNvbnRhY3QudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0xlYWd1ZUNvbnRhY3RDb250cm9sbGVyJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgbGVhZ3VlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdGVhbS5sZWFndWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgICB0ZWFtU2VydmljZS5zZW5kQ29tbWlzaE1lc3NhZ2UodGVhbSwgcGFyYW1zLm1lc3NhZ2UpXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnQ29udGFjdCBsZWFndWUgbW9kYWwgZGlzbWlzc2VkLi4uJyk7XG4gICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ0NvbnRhY3QgY29tbWlzaCBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcblxuICB9O1xuXG4gICRzY29wZS51cGRhdGVNZXNzYWdlID0gZnVuY3Rpb24odGVhbSkge1xuXG4gICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS90ZWFtL21lc3NhZ2UvdGVhbS5tZXNzYWdlLnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdUZWFtTWVzc2FnZUNvbnRyb2xsZXInLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICB0ZWFtOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdGVhbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihwYXJhbXMpIHtcbiAgICAgIHRlYW1TZXJ2aWNlLnVwZGF0ZVRlYW1NZXNzYWdlKHBhcmFtcy50ZWFtLCBwYXJhbXMuc2VuZEVtYWlsKVxuICAgICAgICAudGhlbihmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgICAgJHNjb3BlLnRlYW1EYXRhLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB9KTtcblxuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ1RlYW0gbWVzc2FnZSBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnVXBkYXRlIHRlYW0gbWVzc2FnZSBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcblxuICB9O1xuXG4gICRzY29wZS5jb25maXJtQWN0aXZhdGUgPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2NvbmZpcm0vY29uZmlybS50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnQ29uZmlybUNvbnRyb2xsZXInLFxuICAgICAgc2l6ZTogJ3NtJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgbWVzc2FnZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuICdSZWFjdGl2YXRlICcgKyB0ZWFtLm5hbWUgKyAnPyc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgYWN0aXZhdGUodGVhbSk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnQWN0aXZhdGUgdGVhbSBjYW5jZWxsZWQuLi4nKTtcbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnVGVhbSByZWFjdGl2YXRpb24gY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgJHNjb3BlLmNvbmZpcm1EZWFjdGl2YXRlID0gZnVuY3Rpb24odGVhbSkge1xuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9jb25maXJtL2NvbmZpcm0udHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0NvbmZpcm1Db250cm9sbGVyJyxcbiAgICAgIHNpemU6ICdzbScsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIG1lc3NhZ2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiAnRGVhY3RpdmF0ZSAnICsgdGVhbS5uYW1lICsgJz8nO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbigpIHtcbiAgICAgIGRlYWN0aXZhdGUodGVhbSk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnRGVhY3RpdmF0ZSB0ZWFtIGNhbmNlbGxlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdUZWFtIGRlYWN0aXZhdGlvbiBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcbiAgfTtcblxuICAkc2NvcGUucGFpZCA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICB0ZWFtU2VydmljZS5wYWlkVGVhbSh0ZWFtKVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocGFpZCkge1xuICAgICAgICB0ZWFtLnBhaWQgPSBwYWlkO1xuICAgICAgfSk7XG4gIH07XG5cbiAgJHNjb3BlLnVucGFpZCA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICB0ZWFtU2VydmljZS51bnBhaWRUZWFtKHRlYW0pXG4gICAgICAudGhlbihmdW5jdGlvbihwYWlkKSB7XG4gICAgICAgIHRlYW0ucGFpZCA9IHBhaWQ7XG4gICAgICB9KTtcbiAgfTtcblxuICAkc2NvcGUuaGFzTm90RW5vdWdoUGlja3MgPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgdmFyIGhhc05vdE1ldFBpY2tDb3VudCA9IHRlYW0uY3VycmVudF9waWNrc19jb3VudCAhPSB0ZWFtLmxlYWd1ZS5tYXhfcGlja3NfcGVyX3dlZWs7XG4gICAgdmFyIGhhc05vdE1ldEdhbWVDb3VudCA9IHRlYW0uY3VycmVudF9waWNrc19jb3VudCAhPSB0ZWFtLmN1cnJlbnRfd2Vla19nYW1lX2NvdW50O1xuICAgIHJldHVybiBoYXNOb3RNZXRQaWNrQ291bnQgJiYgaGFzTm90TWV0R2FtZUNvdW50O1xuICB9O1xuXG4gICRzY29wZS5waWNrU3VtbWFyeSA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICB2YXIgbXNnID0gJyc7XG4gICAgaWYgKHRlYW0ubGVhZ3VlLm1heF9waWNrc19wZXJfd2VlayAmJiB0ZWFtLmxlYWd1ZS5tYXhfcGlja3NfcGVyX3dlZWsgPD0gdGVhbS5jdXJyZW50X3dlZWtfZ2FtZV9jb3VudCkge1xuICAgICAgbXNnID0gdGVhbS5jdXJyZW50X3BpY2tzX2NvdW50ICsgJyBvZiAnICsgdGVhbS5sZWFndWUubWF4X3BpY2tzX3Blcl93ZWVrO1xuICAgIH0gZWxzZSB7XG4gICAgICBtc2cgPSB0ZWFtLmN1cnJlbnRfcGlja3NfY291bnQgKyAnIG9mICcgKyB0ZWFtLmN1cnJlbnRfd2Vla19nYW1lX2NvdW50O1xuICAgIH1cbiAgICByZXR1cm4gbXNnO1xuICB9O1xuXG4gICRzY29wZS5pc0NvbW1pc2ggPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgcmV0dXJuIHRlYW0uY29tbWlzaF9pZHMuaW5kZXhPZih1c2VyTW9kZWwudXNlci5pZCkgPiAtMTtcbiAgfTtcblxuICAkc2NvcGUuaXNDb2FjaCA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICByZXR1cm4gdGVhbS5jb2FjaF9pZHMuaW5kZXhPZih1c2VyTW9kZWwudXNlci5pZCkgPiAtMTtcbiAgfTtcblxuICAkc2NvcGUuaXNBZG1pbiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB1c2VyTW9kZWwudXNlci5hZG1pbjtcbiAgfTtcblxuICAkc2NvcGUuc2hvd1RlYW0gPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgLy8gb21nIHdoYXQgYSBzaW4gdGhpcyBpcy4gcmVmcmVzaGVzIHRoZSBicm93c2VyIHdpbmRvdy4gdGFsayBhYm91dCB1c2luZyBhIGJpZyBhc3MgaGFtbWVyLi4uXG4gICAgLy8gaGF2ZSB0byBkbyB0aGlzIGJlY2F1c2Ugb2YgcmVsb2FkT25TZWFyY2g6IGZhbHNlIGluc2lkZSBvZiB2aWV3L3BpY2tzL2luZGV4LmpzIG5lZWRlZCB0byBwcmV2ZW50IGNvbnRyb2xsZXIgcmVpbml0IHdoZW4gdXNpbmcgdGhlIHdlZWsgZmlsdGVyXG4gICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgJHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJGxvY2F0aW9uLmFic1VybCgpLnJlcGxhY2UoL1teXFwvXSokLywgdGVhbS5pZCk7XG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9LCAyMDApO1xuICB9O1xuXG4gICRzY29wZS5zaG93TGVhZ3VlID0gZnVuY3Rpb24odGVhbSkge1xuICAgICRsb2NhdGlvbi5wYXRoKCcvc2Vhc29uLycgKyB0ZWFtLmxlYWd1ZS5zZWFzb25faWQgKyAnL2xlYWd1ZS8nICsgdGVhbS5sZWFndWUuaWQpO1xuICB9O1xuXG4gICRzY29wZS5lZGl0VGVhbSA9IGZ1bmN0aW9uKHRlYW0pIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvdGVhbS9lZGl0L3RlYW0uZWRpdC50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnRWRpdFRlYW1Db250cm9sbGVyJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgdGVhbTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRlYW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24odGVhbSkge1xuICAgICAgdGVhbVNlcnZpY2UudXBkYXRlVGVhbSh0ZWFtKVxuICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAkc2NvcGUudGVhbURhdGEgPSB0ZWFtO1xuICAgICAgICB9KTtcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAkbG9nLmRlYnVnKCdFZGl0IHRlYW0gbW9kYWwgZGlzbWlzc2VkLi4uJyk7XG4gICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ0VkaXQgdGVhbSBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcblxuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJ2aWV3IHRlYW0gY29udHJvbGxlclwiKTtcbiAgICBzZXRNZXNzYWdlU3RhdGUoKTtcbiAgfTtcbiAgaW5pdCgpO1xuXG59O1xuXG5WaWV3VGVhbUNvbnRyb2xsZXIuJGluamVjdCA9IFsndGVhbScsICdsZWFndWVUZWFtcycsICckc2NvcGUnLCAnJGxvZycsICckbW9kYWwnLCAnJHdpbmRvdycsICckdGltZW91dCcsICckbG9jYXRpb24nLCAnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICdtZXNzYWdlTW9kZWwnLCAndXNlck1vZGVsJywgJ3VzZXJTZXJ2aWNlJywgJ3RlYW1TZXJ2aWNlJ107XG5tb2R1bGUuZXhwb3J0cyA9IFZpZXdUZWFtQ29udHJvbGxlcjtcbiIsInZhciBFZGl0VGVhbUNvbnRyb2xsZXIgPSBmdW5jdGlvbih0ZWFtLCAkc2NvcGUsICRsb2csICRtb2RhbEluc3RhbmNlKSB7XG5cbiAgICAkc2NvcGUudGVhbURhdGEgPSBhbmd1bGFyLmNvcHkodGVhbSk7XG5cbiAgICAkc2NvcGUuZWRpdFRlYW0gPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgICB0ZWFtLm5hbWUgPSB0ZWFtLm5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKHRlYW0pO1xuICAgIH07XG5cbiAgICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2FuY2VsJyk7XG4gICAgfTtcblxuICAgICRzY29wZS5oYXNFcnJvciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRlcnJvcltwcm9wZXJ0eV07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiZWRpdCB0ZWFtIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cbkVkaXRUZWFtQ29udHJvbGxlci4kaW5qZWN0ID0gWyd0ZWFtJywgJyRzY29wZScsICckbG9nJywgJyRtb2RhbEluc3RhbmNlJ107XG5tb2R1bGUuZXhwb3J0cyA9IEVkaXRUZWFtQ29udHJvbGxlcjtcbiIsInZhciBUZWFtTWVzc2FnZUNvbnRyb2xsZXIgPSBmdW5jdGlvbih0ZWFtLCAkbW9kYWxJbnN0YW5jZSwgJHNjb3BlLCAkbG9nKSB7XG5cbiAgJHNjb3BlLnRlYW1EYXRhID0gYW5ndWxhci5jb3B5KHRlYW0pO1xuXG4gICRzY29wZS5tZXNzYWdlT3B0aW9ucyA9IHsgc2VuZEVtYWlsOiBmYWxzZSB9O1xuXG4gICRzY29wZS51cGRhdGVNZXNzYWdlID0gZnVuY3Rpb24odGVhbSwgc2VuZEVtYWlsKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuY2xvc2UoeyB0ZWFtOiB0ZWFtLCBzZW5kRW1haWw6IHNlbmRFbWFpbH0pO1xuICB9O1xuXG4gICRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgfTtcblxuICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICB9O1xuXG4gICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwidGVhbSBtZXNzYWdlIGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cblRlYW1NZXNzYWdlQ29udHJvbGxlci4kaW5qZWN0ID0gWyd0ZWFtJywgJyRtb2RhbEluc3RhbmNlJywgJyRzY29wZScsICckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IFRlYW1NZXNzYWdlQ29udHJvbGxlcjtcbiIsInZhciBUZWFtUGlja0NvbnRyb2xsZXIgPSBmdW5jdGlvbih0ZWFtLCB3ZWVrLCBnYW1lcywgcGlja3MsICRyb290U2NvcGUsICRzY29wZSwgJGxvZywgJGxvY2F0aW9uLCB1c2VyTW9kZWwsIGRhdGVVdGlscykge1xuXG4gIHZhciB1cGRhdGVQaWNrQ291bnQgPSBmdW5jdGlvbihwaWNrcykge1xuICAgICRzY29wZS5waWNrQ291bnQgPSAocGlja3MpID8gcGlja3MubGVuZ3RoIDogMDtcbiAgfTtcblxuICAkc2NvcGUudGVhbSA9IHRlYW0uZGF0YTtcblxuICAkc2NvcGUud2VlayA9IHdlZWsuZGF0YTtcblxuICAkc2NvcGUuZ2FtZXMgPSBnYW1lcy5kYXRhO1xuXG4gICRzY29wZS5waWNrcyA9IHBpY2tzLmRhdGE7XG4gIHVwZGF0ZVBpY2tDb3VudCgkc2NvcGUucGlja3MpO1xuXG4gICRzY29wZS5zYXZlUGlja3NFbmFibGVkID0gZmFsc2U7XG5cbiAgJHNjb3BlLmdhbWVRdWVyeSA9ICcnO1xuXG4gICRzY29wZS5waWNrTWVzc2FnZSA9IGZ1bmN0aW9uKHRlYW0sIHdlZWspIHtcbiAgICB2YXIgbXNnID0gJyc7XG4gICAgaWYgKCF0ZWFtLmxlYWd1ZS5tYXhfcGlja3NfcGVyX3dlZWsgfHwgdGVhbS5sZWFndWUubWF4X3BpY2tzX3Blcl93ZWVrID49ICRzY29wZS5nYW1lcy5sZW5ndGgpIHtcbiAgICAgIG1zZyA9ICdQaWNrIGFsbCBnYW1lcyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1zZyA9ICdQaWNrICcgKyB0ZWFtLmxlYWd1ZS5tYXhfcGlja3NfcGVyX3dlZWsgKyAnIGxvc2VyJztcbiAgICAgIGlmICh0ZWFtLmxlYWd1ZS5tYXhfcGlja3NfcGVyX3dlZWsgPiAxKSB7XG4gICAgICAgIG1zZyArPSAncyc7XG4gICAgICB9XG4gICAgfVxuICAgIG1zZyArPSAnIGZvciAnICsgd2Vlay5uYW1lO1xuICAgIHJldHVybiBtc2c7XG4gIH07XG5cbiAgJHNjb3BlLnNhdmVQaWNrcyA9IGZ1bmN0aW9uKCkge1xuICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnVGVhbVBpY2tDb250cm9sbGVyOjpzYXZlUGlja3MnKTtcbiAgfTtcblxuICAkc2NvcGUuZ2V0U2NvcmUgPSBmdW5jdGlvbihnYW1lLCBpbmRleCkge1xuICAgIC8vIHdhcm5pbmc6IG1hZ2ljIG51bWJlcnMgYWhlYWRcbiAgICB2YXIgc2NvcmUgPSAoaW5kZXggPT09IDApID8gZ2FtZS52aXNpdGluZ19zcXVhZF9zY29yZSA6IGdhbWUuaG9tZV9zcXVhZF9zY29yZTtcbiAgICByZXR1cm4gc2NvcmU7XG4gIH07XG5cbiAgJHNjb3BlLnN0YXJ0cyA9IGZ1bmN0aW9uKGdhbWUpIHtcbiAgICB2YXIgc3RhcnRzTGFiZWwgPSAnJztcbiAgICBpZiAoZ2FtZS5ub3RlICYmIGdhbWUubm90ZS5sZW5ndGggPiAwKSB7XG4gICAgICBzdGFydHNMYWJlbCArPSBnYW1lLm5vdGUgKyAnIC0gJztcbiAgICB9XG4gICAgaWYgKGdhbWUudGJkKSB7XG4gICAgICBzdGFydHNMYWJlbCArPSAnVEJEJztcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhcnRzTGFiZWwgKz0gKGdhbWUuc3RhcnRlZCkgPyAnU3RhcnRlZCAnIDogJ1N0YXJ0cyAnO1xuICAgICAgc3RhcnRzTGFiZWwgKz0gZGF0ZVV0aWxzLmRhdGVGb3JtYXQoZ2FtZS5zdGFydHNfYXQsIFwiZGRkLCBtbW0gZCBoOk1NIFRUIFpcIik7XG4gICAgfVxuICAgIGlmIChnYW1lLmlmX25lY2Vzc2FyeSkge1xuICAgICAgc3RhcnRzTGFiZWwgKz0gJyAqSWYgTmVjZXNzYXJ5JztcbiAgICB9XG4gICAgaWYgKGdhbWUucG9zdHBvbmVkKSB7XG4gICAgICBzdGFydHNMYWJlbCArPSAnIFsgKlBQRCBdJztcbiAgICB9XG4gICAgcmV0dXJuIHN0YXJ0c0xhYmVsO1xuICB9O1xuXG4gICRzY29wZS5zaG93VGVhbSA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICB2YXIgdGVhbVBhdGggPSAnL3NlYXNvbi8nICsgdGVhbS5sZWFndWUuc2Vhc29uX2lkICsgJy9sZWFndWUvJyArIHRlYW0ubGVhZ3VlLmlkICsgJy90ZWFtLycgKyB0ZWFtLmlkICsgJz93ZWVrPScgKyAkc2NvcGUud2Vlay5zbHVnO1xuICAgICRsb2NhdGlvbi51cmwodGVhbVBhdGgpO1xuICB9O1xuXG4gICRzY29wZS5pc0NvYWNoID0gZnVuY3Rpb24odGVhbSkge1xuICAgIHJldHVybiB0ZWFtLmNvYWNoX2lkcy5pbmRleE9mKHVzZXJNb2RlbC51c2VyLmlkKSA+IC0xO1xuICB9O1xuXG4gICRzY29wZS5zZWFyY2ggPSBmdW5jdGlvbihnYW1lKSB7XG4gICAgdmFyIG1hdGNoID0gZmFsc2U7XG4gICAgXy5lYWNoKGdhbWUuc3F1YWRzLCBmdW5jdGlvbihzcXVhZCkge1xuICAgICAgaWYgKHNxdWFkLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCRzY29wZS5nYW1lUXVlcnkudG9Mb3dlckNhc2UoKSkgIT0gLTEpIHtcbiAgICAgICAgbWF0Y2ggPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBtYXRjaDtcbiAgfTtcblxuICAkc2NvcGUuJG9uKCdUZWFtUGlja0NvbnRyb2xsZXI6OnBpY2tzQ2hhbmdlZCcsIGZ1bmN0aW9uKGV2ZW50LCBhcmdzKSB7XG4gICAgJHNjb3BlLnNhdmVQaWNrc0VuYWJsZWQgPSB0cnVlO1xuICAgIHVwZGF0ZVBpY2tDb3VudChhcmdzLnBpY2tzKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcIm1ha2UgcGljayBjb250cm9sbGVyXCIpO1xuICB9O1xuICBpbml0KCk7XG59O1xuXG5UZWFtUGlja0NvbnRyb2xsZXIuJGluamVjdCA9IFsndGVhbScsICd3ZWVrJywgJ2dhbWVzJywgJ3BpY2tzJywgJyRyb290U2NvcGUnLCAnJHNjb3BlJywgJyRsb2cnLCAnJGxvY2F0aW9uJywgJ3VzZXJNb2RlbCcsICdkYXRlVXRpbHMnXTtcbm1vZHVsZS5leHBvcnRzID0gVGVhbVBpY2tDb250cm9sbGVyO1xuIiwidmFyIFBsYXlMZWFndWVzQ29udHJvbGxlciA9IGZ1bmN0aW9uKGxlYWd1ZXMsICRzY29wZSwgJGxvZywgJGxvY2F0aW9uLCAkbW9kYWwsIHVzZXJNb2RlbCwgbWVzc2FnZU1vZGVsLCBzZWFzb25Nb2RlbCwgbGVhZ3VlU2VydmljZSkge1xuXG4gICRzY29wZS5sZWFndWVzID0gbGVhZ3Vlcy5kYXRhO1xuXG4gIC8vIHBhZ2luYXRpb25cbiAgJHNjb3BlLmN1cnJlbnRMZWFndWVQYWdlID0gMTtcbiAgJHNjb3BlLmxlYWd1ZXNQZXJQYWdlID0gMTAwO1xuXG4gICRzY29wZS5jcmVhdGVMZWFndWUgPSBmdW5jdGlvbihzZWFzb24pIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL25ldy9sZWFndWUubmV3LnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdOZXdMZWFndWVDb250cm9sbGVyJ1xuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihsZWFndWUpIHtcbiAgICAgIGxlYWd1ZVNlcnZpY2UuY3JlYXRlTGVhZ3VlKGxlYWd1ZSk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnQ3JlYXRlIGxlYWd1ZSBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnQ3JlYXRlIGxlYWd1ZSBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcblxuICB9O1xuXG4gICRzY29wZS5qb2luTGVhZ3VlID0gZnVuY3Rpb24oc2Vhc29uKSB7XG4gICAgdmFyIHNlYXNvbiA9IHNlYXNvbk1vZGVsLmdldEN1cnJlbnRTZWFzb24oKTtcbiAgICAkbG9jYXRpb24udXJsKCcvc2Vhc29uLycgKyBzZWFzb24uaWQgKyAnL2xlYWd1ZXMvcHVibGljJyk7XG4gIH07XG5cbiAgJHNjb3BlLnZpZXdMZWFndWUgPSBmdW5jdGlvbihsZWFndWUpIHtcbiAgICAkbG9jYXRpb24udXJsKCcvc2Vhc29uLycgKyBsZWFndWUuc2Vhc29uX2lkICsgJy9sZWFndWUvJyArIGxlYWd1ZS5pZCk7XG4gIH07XG5cbiAgJHNjb3BlLnN0YXJ0cyA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgIHZhciBzdGFydHNMYWJlbCA9IChsZWFndWUuc3RhcnRlZCkgPyAnU3RhcnRlZCAnIDogJ1N0YXJ0cyAnO1xuICAgIHJldHVybiBzdGFydHNMYWJlbCArIGxlYWd1ZS5zdGFydF93ZWVrO1xuICB9O1xuXG4gICRzY29wZS5pc0NvbW1pc2ggPSBmdW5jdGlvbihsZWFndWUpIHtcbiAgICByZXR1cm4gbGVhZ3VlLmNvbW1pc2hfaWRzLmluZGV4T2YodXNlck1vZGVsLnVzZXIuaWQpID4gLTE7XG4gIH07XG5cbiAgJHNjb3BlLnNlYXJjaCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICBpZiAoaXRlbS5uYW1lLmluZGV4T2YoJHNjb3BlLnF1ZXJ5LnRvTG93ZXJDYXNlKCkpICE9IC0xIHx8IGl0ZW0uY29tbWlzaF9uYW1lcy5qb2luKCcsICcpLmluZGV4T2YoJHNjb3BlLnF1ZXJ5LnRvTG93ZXJDYXNlKCkpICE9IC0xKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJteSBsZWFndWVzIGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcblxufTtcblxuUGxheUxlYWd1ZXNDb250cm9sbGVyLiRpbmplY3QgPSBbJ2xlYWd1ZXMnLCAnJHNjb3BlJywgJyRsb2cnLCAnJGxvY2F0aW9uJywgJyRtb2RhbCcsICd1c2VyTW9kZWwnLCAnbWVzc2FnZU1vZGVsJywgJ3NlYXNvbk1vZGVsJywgJ2xlYWd1ZVNlcnZpY2UnXTtcbm1vZHVsZS5leHBvcnRzID0gUGxheUxlYWd1ZXNDb250cm9sbGVyO1xuXG4iLCJ2YXIgUGxheVRlYW1zQ29udHJvbGxlciA9IGZ1bmN0aW9uKHRlYW1zLCAkc2NvcGUsICRsb2csICRzdGF0ZVBhcmFtcywgJGxvY2F0aW9uKSB7XG5cbiAgJHNjb3BlLnRlYW1zID0gdGVhbXMuZGF0YTtcblxuICAvLyBwYWdpbmF0aW9uXG4gICRzY29wZS5jdXJyZW50VGVhbVBhZ2UgPSAxO1xuICAkc2NvcGUudGVhbXNQZXJQYWdlID0gMTAwO1xuXG4gICRzY29wZS5pblBsYXkgPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgcmV0dXJuICh0ZWFtLmFjdGl2ZSAmJiB0ZWFtLmFsaXZlKSA/IDAgOiAxO1xuICB9O1xuXG4gICRzY29wZS5zaG93VGVhbSA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAkbG9jYXRpb24udXJsKCcvc2Vhc29uLycgKyAkc3RhdGVQYXJhbXMuc2Vhc29uSWQgKyAnL2xlYWd1ZS8nICsgdGVhbS5sZWFndWUuaWQgKyAnL3RlYW0vJyArIHRlYW0uaWQpO1xuICB9O1xuXG4gICRzY29wZS5zZWFyY2ggPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgaWYgKGl0ZW0ubmFtZS5pbmRleE9mKCRzY29wZS5xdWVyeS50b0xvd2VyQ2FzZSgpKSAhPSAtMSB8fCBpdGVtLmxlYWd1ZS5uYW1lLmluZGV4T2YoJHNjb3BlLnF1ZXJ5LnRvTG93ZXJDYXNlKCkpICE9IC0xKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gICRzY29wZS5waWNrU3RhdHVzID0gZnVuY3Rpb24ocGljaykge1xuICAgIHZhciBzdGF0dXMgPSAnJztcbiAgICBpZiAocGljay53YXJuaW5nID09PSB0cnVlKSB7XG4gICAgICBzdGF0dXMgPSAnd2FybmluZyc7XG4gICAgfSBlbHNlIGlmIChwaWNrLmNvcnJlY3QgPT09IHRydWUpIHtcbiAgICAgIHN0YXR1cyA9ICdjaGVjayc7XG4gICAgfSBlbHNlIGlmIChwaWNrLmdhbWUgJiYgKHBpY2suZ2FtZS50aWUgPT09IHRydWUgfHwgcGljay5nYW1lLmluY29tcGxldGUgPT09IHRydWUpKSB7XG4gICAgICBzdGF0dXMgPSAnbWludXMnO1xuICAgIH0gZWxzZSBpZiAocGljay5jb3JyZWN0ID09PSBmYWxzZSkge1xuICAgICAgc3RhdHVzID0gJ3RpbWVzJztcbiAgICB9IGVsc2UgaWYgKHBpY2subG9ja2VkID09PSB0cnVlKSB7XG4gICAgICBzdGF0dXMgPSAnbG9jayc7XG4gICAgfSBlbHNlIGlmIChwaWNrLmxvY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHN0YXR1cyA9ICd1bmxvY2snO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0dXMgPSAndGgtbGlzdCc7XG4gICAgfVxuICAgIHJldHVybiBzdGF0dXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcInBsYXkgdGVhbXMgY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xuXG59O1xuXG5QbGF5VGVhbXNDb250cm9sbGVyLiRpbmplY3QgPSBbJ3RlYW1zJywgJyRzY29wZScsICckbG9nJywgJyRzdGF0ZVBhcmFtcycsICckbG9jYXRpb24nXTtcbm1vZHVsZS5leHBvcnRzID0gUGxheVRlYW1zQ29udHJvbGxlcjtcbiIsInZhciBBZG1pblNlYXNvbnNDb250cm9sbGVyID0gZnVuY3Rpb24oJHNjb3BlLCAkbG9jYXRpb24sICRtb2RhbCwgc2Vhc29uTW9kZWwsIHNlYXNvblNlcnZpY2UpIHtcblxuICAkc2NvcGUuc2Vhc29ucyA9IHNlYXNvbk1vZGVsLnNlYXNvbnM7XG5cbiAgJHNjb3BlLnNob3dTZWFzb24gPSBmdW5jdGlvbihzZWFzb24pIHtcbiAgICAkbG9jYXRpb24udXJsKCRsb2NhdGlvbi5wYXRoKCkgKyAnLycgKyBzZWFzb24uaWQpO1xuICB9O1xuXG4gICRzY29wZS5jcmVhdGVTZWFzb24gPSBmdW5jdGlvbigpIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9zZWFzb24vbmV3L2FkbWluLnNlYXNvbi5uZXcudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0FkbWluU2Vhc29uTmV3Q29udHJvbGxlcidcbiAgICB9KTtcblxuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24oc2Vhc29uKSB7XG4gICAgICBzZWFzb25TZXJ2aWNlLmNyZWF0ZVNlYXNvbihzZWFzb24pO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ0NyZWF0ZSBzZWFzb24gbW9kYWwgZGlzbWlzc2VkLi4uJyk7XG4gICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ0NyZWF0ZSBzZWFzb24gY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuQWRtaW5TZWFzb25zQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvY2F0aW9uJywgJyRtb2RhbCcsICdzZWFzb25Nb2RlbCcsICdzZWFzb25TZXJ2aWNlJ107XG5tb2R1bGUuZXhwb3J0cyA9IEFkbWluU2Vhc29uc0NvbnRyb2xsZXI7XG4iLCJ2YXIgQWRtaW5XZWVrQ29udHJvbGxlciA9IGZ1bmN0aW9uKHdlZWssIGdhbWVzLCAkc2NvcGUsICRsb2csICRtb2RhbCwgZGF0ZVV0aWxzLCBnYW1lU2VydmljZSwgc3F1YWRTZXJ2aWNlLCB3ZWVrU2VydmljZSwgbWVzc2FnZU1vZGVsKSB7XG5cbiAgdmFyIGNvbXBsZXRlV2VlayA9IGZ1bmN0aW9uKHdlZWspIHtcbiAgICB3ZWVrU2VydmljZS5jb21wbGV0ZVdlZWsod2VlaylcbiAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAkc2NvcGUud2Vla0RhdGEuY29tcGxldGUgPSB0cnVlO1xuICAgICAgfSk7XG4gIH07XG5cbiAgdmFyIHNlbmRSZW1pbmRlciA9IGZ1bmN0aW9uKHdlZWspIHtcbiAgICB3ZWVrU2VydmljZS5zZW5kUmVtaW5kZXIod2Vlayk7XG4gIH07XG5cbiAgJHNjb3BlLndlZWtEYXRhID0gd2Vlay5kYXRhO1xuXG4gICRzY29wZS5nYW1lcyA9IGdhbWVzLmRhdGE7XG5cbiAgJHNjb3BlLmRhdGVGb3JtYXQgPSBkYXRlVXRpbHMuZGF0ZUZvcm1hdDtcblxuICAkc2NvcGUuZ2FtZVF1ZXJ5ID0gJyc7XG5cbiAgJHNjb3BlLmVkaXRXZWVrID0gZnVuY3Rpb24od2Vlaykge1xuXG4gICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9hZG1pbi93ZWVrL2VkaXQvYWRtaW4ud2Vlay5lZGl0LnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdBZG1pbldlZWtFZGl0Q29udHJvbGxlcicsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIHdlZWs6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB3ZWVrO1xuICAgICAgICB9LFxuICAgICAgICB3ZWVrVHlwZXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB3ZWVrU2VydmljZS5nZXRXZWVrVHlwZXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbih3ZWVrKSB7XG4gICAgICB3ZWVrU2VydmljZS51cGRhdGVXZWVrKHdlZWspO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ1dlZWsgdXBkYXRlIGNhbmNlbGxlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdXZWVrIHVwZGF0ZSBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcblxuICB9O1xuXG4gICRzY29wZS5lZGl0R2FtZSA9IGZ1bmN0aW9uKGdhbWUsIHdlZWspIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvYWRtaW4vZ2FtZS9lZGl0L2FkbWluLmdhbWUuZWRpdC50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnQWRtaW5HYW1lRWRpdENvbnRyb2xsZXInLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICBnYW1lOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gZ2FtZTtcbiAgICAgICAgfSxcbiAgICAgICAgc3F1YWRzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gc3F1YWRTZXJ2aWNlLmdldFdlZWtTcXVhZHMod2Vlayk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24oZ2FtZSkge1xuICAgICAgZ2FtZVNlcnZpY2UudXBkYXRlR2FtZShnYW1lKTtcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAkbG9nLmRlYnVnKCdHYW1lIHVwZGF0ZSBjYW5jZWxsZWQuLi4nKTtcbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnR2FtZSB1cGRhdGUgY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAkc2NvcGUuY3JlYXRlR2FtZSA9IGZ1bmN0aW9uKHdlZWssIGdhbWVzKSB7XG5cbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2FkbWluL2dhbWUvbmV3L2FkbWluLmdhbWUubmV3LnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdBZG1pbkdhbWVOZXdDb250cm9sbGVyJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgd2VlazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHdlZWs7XG4gICAgICAgIH0sXG4gICAgICAgIGxhc3RHYW1lOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoZ2FtZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGdhbWVzW2dhbWVzLmxlbmd0aCAtIDFdXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzcXVhZHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBzcXVhZFNlcnZpY2UuZ2V0V2Vla1NxdWFkcyh3ZWVrKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihnYW1lKSB7XG4gICAgICBnYW1lU2VydmljZS5jcmVhdGVHYW1lKGdhbWUpO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ0NyZWF0ZSBnYW1lIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdDcmVhdGUgZ2FtZSBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcblxuICB9O1xuXG4gICRzY29wZS5jb25maXJtU2VuZFJlbWluZGVyID0gZnVuY3Rpb24od2Vlaykge1xuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9jb25maXJtL2NvbmZpcm0udHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0NvbmZpcm1Db250cm9sbGVyJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgbWVzc2FnZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gc2VuZCB3ZWVrbHkgcmVtaW5kZXI/JztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICBzZW5kUmVtaW5kZXIod2Vlayk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnU2VuZCByZW1pbmRlciBjYW5jZWxsZWQuLi4nKTtcbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnU2VuZCByZW1pbmRlciBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcbiAgfTtcblxuICAkc2NvcGUuY29uZmlybVdlZWtDb21wbGV0ZSA9IGZ1bmN0aW9uKHdlZWspIHtcbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvY29uZmlybS9jb25maXJtLnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdDb25maXJtQ29udHJvbGxlcicsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIG1lc3NhZ2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIG1hcmsgdGhpcyB3ZWVrIGFzIGNvbXBsZXRlPyc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgY29tcGxldGVXZWVrKHdlZWspO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ0NvbXBsZXRlIHdlZWsgY2FuY2VsbGVkLi4uJyk7XG4gICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ1dlZWsgY29tcGxldGUgY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgJHNjb3BlLnNlYXJjaCA9IGZ1bmN0aW9uKGdhbWUpIHtcbiAgICB2YXIgbWF0Y2ggPSBmYWxzZTtcbiAgICBfLmVhY2goZ2FtZS5zcXVhZHMsIGZ1bmN0aW9uKHNxdWFkKSB7XG4gICAgICBpZiAoc3F1YWQubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJHNjb3BlLmdhbWVRdWVyeS50b0xvd2VyQ2FzZSgpKSAhPSAtMSkge1xuICAgICAgICBtYXRjaCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG1hdGNoO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICB9O1xuICBpbml0KCk7XG59O1xuXG5BZG1pbldlZWtDb250cm9sbGVyLiRpbmplY3QgPSBbJ3dlZWsnLCAnZ2FtZXMnLCAnJHNjb3BlJywgJyRsb2cnLCAnJG1vZGFsJywgJ2RhdGVVdGlscycsICdnYW1lU2VydmljZScsICdzcXVhZFNlcnZpY2UnLCAnd2Vla1NlcnZpY2UnLCAnbWVzc2FnZU1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IEFkbWluV2Vla0NvbnRyb2xsZXI7XG4iLCJ2YXIgQWRtaW5TcXVhZHNDb250cm9sbGVyID0gZnVuY3Rpb24oc3F1YWRzLCAkc2NvcGUsICRsb2csICRtb2RhbCwgc3F1YWRTZXJ2aWNlLCBtZXNzYWdlTW9kZWwpIHtcblxuICAkc2NvcGUuc3F1YWRzID0gc3F1YWRzLmRhdGE7XG5cbiAgJHNjb3BlLnNlbGVjdGVkU3F1YWRUeXBlID0gbnVsbDtcblxuICAkc2NvcGUuc3F1YWRUeXBlcyA9IF8uY29tcGFjdChfLnVuaXEoXy5tYXAoJHNjb3BlLnNxdWFkcywgZnVuY3Rpb24oc3F1YWQpIHtcbiAgICAgIHJldHVybiBzcXVhZC5zcXVhZF90eXBlO1xuICB9KSkpO1xuXG4gICRzY29wZS5xdWVyeSA9ICcnO1xuXG4gICRzY29wZS5jcmVhdGVTcXVhZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9zcXVhZHMvbmV3L2FkbWluLnNxdWFkcy5uZXcudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0FkbWluU3F1YWRzTmV3Q29udHJvbGxlcidcbiAgICB9KTtcblxuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24oc3F1YWQpIHtcbiAgICAgIHNxdWFkU2VydmljZS5jcmVhdGVTcXVhZChzcXVhZCk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnQ3JlYXRlIHNxdWFkIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdDcmVhdGUgc3F1YWQgY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAkc2NvcGUuZWRpdFNxdWFkID0gZnVuY3Rpb24oc3F1YWQpIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvYWRtaW4vc3F1YWRzL2VkaXQvYWRtaW4uc3F1YWRzLmVkaXQudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0FkbWluU3F1YWRzRWRpdENvbnRyb2xsZXInLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICBzcXVhZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHNxdWFkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKHNxdWFkKSB7XG4gICAgICBzcXVhZFNlcnZpY2UudXBkYXRlU3F1YWQoc3F1YWQpO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ1NxdWFkIHVwZGF0ZSBjYW5jZWxsZWQuLi4nKTtcbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnU3F1YWQgdXBkYXRlIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgIH0pO1xuXG4gIH07XG5cblxuICAkc2NvcGUuc2VhcmNoID0gZnVuY3Rpb24oaXRlbSkge1xuICAgIGlmIChpdGVtLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCRzY29wZS5xdWVyeS50b0xvd2VyQ2FzZSgpKSAhPSAtMSAmJiAoISRzY29wZS5zZWxlY3RlZFNxdWFkVHlwZSB8fCBpdGVtLnNxdWFkX3R5cGUgPT0gJHNjb3BlLnNlbGVjdGVkU3F1YWRUeXBlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuQWRtaW5TcXVhZHNDb250cm9sbGVyLiRpbmplY3QgPSBbJ3NxdWFkcycsICckc2NvcGUnLCAnJGxvZycsICckbW9kYWwnLCAnc3F1YWRTZXJ2aWNlJywgJ21lc3NhZ2VNb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBBZG1pblNxdWFkc0NvbnRyb2xsZXI7XG4iLCJ2YXIgTGVhZ3VlSW52aXRlUmVxdWVzdENvbnRyb2xsZXIgPSBmdW5jdGlvbihsZWFndWVJZCwgJG1vZGFsSW5zdGFuY2UsICRzY29wZSwgJGxvZywgdXNlck1vZGVsKSB7XG5cbiAgJHNjb3BlLmludml0YXRpb24gPSB7XG4gICAgbGVhZ3VlX2lkOiBsZWFndWVJZCxcbiAgICBlbWFpbDogdXNlck1vZGVsLnVzZXIuZW1haWwsXG4gICAgbWVzc2FnZTogXCJcIlxuICB9O1xuXG4gICRzY29wZS5yZXF1ZXN0SW52aXRlID0gZnVuY3Rpb24gKGludml0YXRpb24pIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZShpbnZpdGF0aW9uKTtcbiAgfTtcblxuICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICB9O1xuXG4gICRzY29wZS5oYXNFcnJvciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gIH07XG5cbiAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kZXJyb3JbcHJvcGVydHldO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJsZWFndWUgaW52aXRlIHJlcXVlc3QgY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuTGVhZ3VlSW52aXRlUmVxdWVzdENvbnRyb2xsZXIuJGluamVjdCA9IFsnbGVhZ3VlSWQnLCAnJG1vZGFsSW5zdGFuY2UnLCAnJHNjb3BlJywgJyRsb2cnLCAndXNlck1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IExlYWd1ZUludml0ZVJlcXVlc3RDb250cm9sbGVyO1xuIiwiXG52YXIgUHVibGljTGVhZ3Vlc0NvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2csICRsb2NhdGlvbiwgcHVibGljTGVhZ3Vlcykge1xuXG4gICAgJHNjb3BlLnB1YmxpY0xlYWd1ZXMgPSBwdWJsaWNMZWFndWVzLmRhdGE7XG5cbiAgICAkc2NvcGUuc2hvd0xlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgICAgJGxvY2F0aW9uLnVybCgnL3NlYXNvbi8nICsgbGVhZ3VlLnNlYXNvbl9pZCArICcvbGVhZ3VlLycgKyBsZWFndWUuaWQpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcInB1YmxpYyBsZWFndWVzIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cblB1YmxpY0xlYWd1ZXNDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJywgJyRsb2NhdGlvbicsICdwdWJsaWNMZWFndWVzJ107XG5tb2R1bGUuZXhwb3J0cyA9IFB1YmxpY0xlYWd1ZXNDb250cm9sbGVyO1xuXG4iLCJ2YXIgUHJpdmF0ZUxlYWd1ZXNDb250cm9sbGVyID0gZnVuY3Rpb24ocHJpdmF0ZUxlYWd1ZXMsICRzY29wZSwgJGxvZywgJGxvY2F0aW9uKSB7XG5cbiAgICAkc2NvcGUucHJpdmF0ZUxlYWd1ZXMgPSBwcml2YXRlTGVhZ3Vlcy5kYXRhO1xuXG4gICAgJHNjb3BlLnNob3dMZWFndWUgPSBmdW5jdGlvbihsZWFndWUpIHtcbiAgICAgICRsb2NhdGlvbi51cmwoJy9zZWFzb24vJyArIGxlYWd1ZS5zZWFzb25faWQgKyAnL2xlYWd1ZS8nICsgbGVhZ3VlLmlkKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJwcml2YXRlIGxlYWd1ZXMgY29udHJvbGxlclwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcblxufTtcblxuUHJpdmF0ZUxlYWd1ZXNDb250cm9sbGVyLiRpbmplY3QgPSBbJ3ByaXZhdGVMZWFndWVzJywgJyRzY29wZScsICckbG9nJywgJyRsb2NhdGlvbiddO1xubW9kdWxlLmV4cG9ydHMgPSBQcml2YXRlTGVhZ3Vlc0NvbnRyb2xsZXI7XG5cbiIsInZhciBWaWV3VGVhbVBpY2tzQ29udHJvbGxlciA9IGZ1bmN0aW9uKGxlYWd1ZVdlZWtzLCBjdXJyZW50V2VlaywgcGlja3MsICRzY29wZSwgJGxvZywgJGxvY2F0aW9uLCAkc3RhdGVQYXJhbXMsIGRhdGVVdGlscykge1xuXG4gIHZhciBjcmVhdGVGYWtlTm9uZVBpY2tzID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCRzY29wZS5waWNrcy5sZW5ndGggPCAkc2NvcGUubGVhZ3VlV2Vla3MubGVuZ3RoKSB7XG4gICAgICAvLyBpbXBvcnRhbnQgdGhhdCB3ZWVrcyBhcmUgaW4gYXNjZW5kaW5nIG9yZGVyIGZvciB0aGlzIHRvIHdvcmtcbiAgICAgIGZvciAoaSA9ICRzY29wZS5waWNrcy5sZW5ndGg7IGkgPCAkc2NvcGUubGVhZ3VlV2Vla3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY3JlYXRlRmFrZU5vbmVQaWNrKCRzY29wZS5sZWFndWVXZWVrc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHZhciBjcmVhdGVGYWtlTm9uZVBpY2sgPSBmdW5jdGlvbih3ZWVrKSB7XG4gICAgdmFyIHBpY2sgPSB7XG4gICAgICBzcXVhZDoge1xuICAgICAgICBpZDogMCxcbiAgICAgICAgbmFtZTogXCJOb25lXCIsXG4gICAgICAgIGFiYnJldjogXCJOb25lXCIsXG4gICAgICAgIHNob3J0OiBcIk5vbmVcIlxuICAgICAgfSxcbiAgICAgIGNvcnJlY3Q6ICghJHNjb3BlLnRlYW1EYXRhLmFsaXZlKSA/IGZhbHNlIDogbnVsbCxcbiAgICAgIGxvY2tlZDogKCEkc2NvcGUudGVhbURhdGEuYWxpdmUpID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgd2Vlazoge1xuICAgICAgICBuYW1lOiB3ZWVrLm5hbWUsXG4gICAgICAgIHNsdWc6IHdlZWsuc2x1ZyxcbiAgICAgICAgZGF0ZTogd2Vlay5zdGFydHNfYXRcbiAgICAgIH1cbiAgICB9O1xuICAgICRzY29wZS5waWNrcy5wdXNoKHBpY2spO1xuICB9O1xuXG4gICRzY29wZS5sZWFndWVXZWVrcyA9IGxlYWd1ZVdlZWtzLmRhdGE7XG5cbiAgJHNjb3BlLnBpY2tzID0gcGlja3MuZGF0YTtcblxuICAkc2NvcGUuc2VsZWN0ZWRXZWVrU2x1ZyA9ICRzdGF0ZVBhcmFtcy53ZWVrO1xuXG4gICRzY29wZS5zZWxlY3RlZFdlZWsgPSBfLmZpbmQoJHNjb3BlLmxlYWd1ZVdlZWtzLCBmdW5jdGlvbihsZWFndWVXZWVrKSB7IHJldHVybiBsZWFndWVXZWVrLnNsdWcgPT09ICRzY29wZS5zZWxlY3RlZFdlZWtTbHVnIH0pO1xuXG4gICRzY29wZS5jb3JyZWN0UGlja0NvdW50ID0gZnVuY3Rpb24ocGlja3MpIHtcbiAgICB2YXIgY29ycmVjdFBpY2tzID0gXy5maWx0ZXIocGlja3MsIGZ1bmN0aW9uKHBpY2spIHtcbiAgICAgIHJldHVybiBwaWNrLmNvcnJlY3Q7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvcnJlY3RQaWNrcy5sZW5ndGg7XG4gIH07XG5cbiAgJHNjb3BlLmNoYW5nZVdlZWsgPSBmdW5jdGlvbihzbHVnKSB7XG4gICAgaWYgKHNsdWcpIHtcbiAgICAgICRsb2NhdGlvbi5zZWFyY2goJ3dlZWsnLCBzbHVnKTsgLy8gYWRkIC8gcmVwbGFjZSB0aGUgd2VlayBxdWVyeSBwYXJhbVxuICAgICAgJHNjb3BlLnNlbGVjdGVkV2VlayA9IF8uZmluZCgkc2NvcGUubGVhZ3VlV2Vla3MsIGZ1bmN0aW9uKGxlYWd1ZVdlZWspIHsgcmV0dXJuIGxlYWd1ZVdlZWsuc2x1ZyA9PT0gc2x1ZyB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgJGxvY2F0aW9uLnNlYXJjaCgnd2VlaycsIG51bGwpOyAvLyByZW1vdmUgd2VlayBxdWVyeSBwYXJhbVxuICAgICAgJHNjb3BlLnNlbGVjdGVkV2VlayA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gICRzY29wZS5tYWtlUGljayA9IGZ1bmN0aW9uKHRlYW0sIHBpY2spIHtcbiAgICBpZiAoISRzY29wZS5pc0NvYWNoKHRlYW0pIHx8IChwaWNrICYmIHBpY2subG9ja2VkKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGVhbS5sZWFndWUubWF4X3BpY2tzX3Blcl93ZWVrID09IDEpIHtcbiAgICAgICRsb2NhdGlvbi51cmwoJGxvY2F0aW9uLnBhdGgoKSArICcvcGljaycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkbG9jYXRpb24udXJsKCRsb2NhdGlvbi5wYXRoKCkgKyAnL3BpY2tzJyk7XG4gICAgfVxuICB9O1xuXG4gICRzY29wZS5waWNrU3RhdHVzID0gZnVuY3Rpb24ocGljaykge1xuICAgIHZhciBzdGF0dXMgPSAnJztcbiAgICBpZiAocGljay5jb3JyZWN0ID09PSB0cnVlKSB7XG4gICAgICBzdGF0dXMgPSAnY2hlY2snO1xuICAgIH0gZWxzZSBpZiAocGljay5nYW1lICYmIChwaWNrLmdhbWUudGllID09PSB0cnVlIHx8IHBpY2suZ2FtZS5pbmNvbXBsZXRlID09PSB0cnVlKSkge1xuICAgICAgc3RhdHVzID0gJ21pbnVzJztcbiAgICB9IGVsc2UgaWYgKHBpY2suY29ycmVjdCA9PT0gZmFsc2UpIHtcbiAgICAgIHN0YXR1cyA9ICd0aW1lcyc7XG4gICAgfSBlbHNlIGlmIChwaWNrLmxvY2tlZCkge1xuICAgICAgc3RhdHVzID0gJ2xvY2snO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0dXMgPSAndW5sb2NrJztcbiAgICB9XG4gICAgcmV0dXJuIHN0YXR1cztcbiAgfTtcblxuICAkc2NvcGUucGlja01ldGEgPSBmdW5jdGlvbihwaWNrKSB7XG4gICAgdmFyIG1ldGEgPSBwaWNrLndlZWsubmFtZTtcbiAgICBpZiAocGljay5nYW1lKSB7XG4gICAgICBpZiAocGljay5nYW1lLm5vdGUgJiYgcGljay5nYW1lLm5vdGUubGVuZ3RoID4gMCkge1xuICAgICAgICBtZXRhICs9ICcgfCAnICsgcGljay5nYW1lLm5vdGU7XG4gICAgICB9IGVsc2UgaWYgKHBpY2suZ2FtZS50YmQpIHtcbiAgICAgICAgbWV0YSArPSAnIHwgVEJEJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1ldGEgKz0gJyB8ICcgKyBkYXRlVXRpbHMuZGF0ZUZvcm1hdChwaWNrLmdhbWUuc3RhcnQsIFwibW1tIGRcIikgKyAnIHwgJyArIGRhdGVVdGlscy5kYXRlRm9ybWF0KHBpY2suZ2FtZS5zdGFydCwgXCJoOk1NIFRUIFpcIik7XG4gICAgICB9XG4gICAgICBpZiAocGljay5nYW1lLnBvc3Rwb25lZCkge1xuICAgICAgICBtZXRhICs9ICcgfCAqUFBEJztcbiAgICAgIH1cbiAgICAgIGlmIChwaWNrLmdhbWUuaWZfbmVjZXNzYXJ5KSB7XG4gICAgICAgIG1ldGEgKz0gJyB8ICpJZiBuZWNlc3NhcnknO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWV0YTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJHNjb3BlLnRlYW1EYXRhLmxlYWd1ZS5lbGltaW5hdGlvbikge1xuICAgICAgY3JlYXRlRmFrZU5vbmVQaWNrcygpO1xuICAgIH1cbiAgICBpZiAoY3VycmVudFdlZWspIHtcbiAgICAgICRzY29wZS5zZWxlY3RlZFdlZWtTbHVnID0gY3VycmVudFdlZWsuZGF0YS5zbHVnO1xuICAgICAgJHNjb3BlLmNoYW5nZVdlZWsoJHNjb3BlLnNlbGVjdGVkV2Vla1NsdWcpO1xuICAgIH1cbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuVmlld1RlYW1QaWNrc0NvbnRyb2xsZXIuJGluamVjdCA9IFsnbGVhZ3VlV2Vla3MnLCAnY3VycmVudFdlZWsnLCAncGlja3MnLCAnJHNjb3BlJywgJyRsb2cnLCAnJGxvY2F0aW9uJywgJyRzdGF0ZVBhcmFtcycsICdkYXRlVXRpbHMnXTtcbm1vZHVsZS5leHBvcnRzID0gVmlld1RlYW1QaWNrc0NvbnRyb2xsZXI7XG4iLCJ2YXIgVGVhbVBpY2tPbmVDb250cm9sbGVyID0gZnVuY3Rpb24oJHNjb3BlLCAkbG9nLCBwaWNrU2VydmljZSkge1xuXG4gICRzY29wZS5jdXJyZW50UGljayA9IF8uZmluZCgkc2NvcGUucGlja3MsIGZ1bmN0aW9uKHBpY2speyByZXR1cm4gcGljay53ZWVrX2lkID09PSAkc2NvcGUud2Vlay5pZCB9KTtcblxuICAkc2NvcGUubWFrZVBpY2sgPSBmdW5jdGlvbihnYW1lLCBzcXVhZCkge1xuICAgIGlmICgkc2NvcGUuaXNEaXNhYmxlZChnYW1lLCBzcXVhZCkpIHtcbiAgICAgIC8vIGlnbm9yZSBpdFxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAkc2NvcGUuY3VycmVudFBpY2sgPSB7XG4gICAgICB3ZWVrX2lkOiBnYW1lLndlZWtfaWQsXG4gICAgICB3ZWVrX3R5cGVfaWQ6IGdhbWUud2Vla190eXBlX2lkLFxuICAgICAgZ2FtZV9pZDogZ2FtZS5pZCxcbiAgICAgIHRlYW1faWQ6ICRzY29wZS50ZWFtLmlkLFxuICAgICAgc3F1YWRfaWQ6IHNxdWFkLmlkLFxuICAgICAgZ2FtZTogZ2FtZSxcbiAgICAgIHNxdWFkOiBzcXVhZFxuICAgIH07XG4gICAgJHNjb3BlLnNhdmVQaWNrKCk7XG4gIH07XG5cbiAgJHNjb3BlLnNhdmVQaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgcGlja1NlcnZpY2Uuc2F2ZVBpY2soJHNjb3BlLmN1cnJlbnRQaWNrKVxuICAgICAgLmZpbmFsbHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICRzY29wZS5zaG93VGVhbSgkc2NvcGUudGVhbSk7XG4gICAgICB9KTtcbiAgfTtcblxuICAkc2NvcGUuaGFzU3F1YWRCZWVuVXNlZCA9IGZ1bmN0aW9uKGdhbWUsIHNxdWFkKSB7XG4gICAgaWYgKCRzY29wZS50ZWFtLmxlYWd1ZS5hbGxvd19kdXBzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzcXVhZEhhc0JlZW5Vc2VkID0gZmFsc2U7XG4gICAgICBfLmVhY2goJHNjb3BlLnBpY2tzLCBmdW5jdGlvbihwaWNrKSB7XG4gICAgICAgIGlmIChwaWNrLnNxdWFkLmlkID09IHNxdWFkLmlkICYmIHBpY2sud2Vla190eXBlX2lkID09IGdhbWUud2Vla190eXBlX2lkICYmIHBpY2sud2Vla19pZCAhPSBnYW1lLndlZWtfaWQpIHtcbiAgICAgICAgICBzcXVhZEhhc0JlZW5Vc2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gc3F1YWRIYXNCZWVuVXNlZDtcbiAgICB9XG4gIH07XG5cbiAgJHNjb3BlLmlzQ3VycmVudFBpY2tMb2NrZWQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gJHNjb3BlLmN1cnJlbnRQaWNrICYmICRzY29wZS5jdXJyZW50UGljay5sb2NrZWQ7XG4gIH07XG5cbiAgJHNjb3BlLmlzRGlzYWJsZWQgPSBmdW5jdGlvbihnYW1lLCBzcXVhZCkge1xuICAgIHZhciBpc0Rpc2FibGVkID0gZmFsc2U7XG4gICAgaWYgKGdhbWUubG9ja2VkIHx8ICRzY29wZS5oYXNTcXVhZEJlZW5Vc2VkKGdhbWUsIHNxdWFkKSB8fCAkc2NvcGUuaXNDdXJyZW50UGlja0xvY2tlZCgpKSB7XG4gICAgICBpc0Rpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGlzRGlzYWJsZWQ7XG4gIH07XG5cbiAgJHNjb3BlLnBpY2tTdGF0dXMgPSBmdW5jdGlvbihnYW1lLCBzcXVhZCkge1xuICAgIHZhciBzdGF0dXMgPSAnJyxcbiAgICAgIHBpY2sgPSBnZXRQaWNrKGdhbWUsIHNxdWFkKTtcbiAgICBpZiAoIV8uaXNVbmRlZmluZWQoJHNjb3BlLmN1cnJlbnRQaWNrKSAmJiAkc2NvcGUuY3VycmVudFBpY2suZ2FtZV9pZCA9PSBnYW1lLmlkICYmICRzY29wZS5jdXJyZW50UGljay5zcXVhZF9pZCA9PSBzcXVhZC5pZCkge1xuICAgICAgaWYgKHBpY2suY29ycmVjdCA9PT0gdHJ1ZSkge1xuICAgICAgICBzdGF0dXMgPSAnY2hlY2snO1xuICAgICAgfSBlbHNlIGlmIChwaWNrLmdhbWUgJiYgKHBpY2suZ2FtZS50aWUgPT09IHRydWUgfHwgcGljay5nYW1lLmluY29tcGxldGUgPT09IHRydWUpKSB7XG4gICAgICAgIHN0YXR1cyA9ICdtaW51cyc7XG4gICAgICB9IGVsc2UgaWYgKHBpY2suY29ycmVjdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgc3RhdHVzID0gJ3RpbWVzJztcbiAgICAgIH0gZWxzZSBpZiAocGljay5sb2NrZWQgPT09IHRydWUpIHtcbiAgICAgICAgc3RhdHVzID0gJ2xvY2snO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdHVzID0gJ3VubG9jayc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdGF0dXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcInBpY2sgb25lIGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cblRlYW1QaWNrT25lQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZycsICdwaWNrU2VydmljZSddO1xubW9kdWxlLmV4cG9ydHMgPSBUZWFtUGlja09uZUNvbnRyb2xsZXI7XG4iLCJ2YXIgVGVhbVBpY2tNYW55Q29udHJvbGxlciA9IGZ1bmN0aW9uKCRyb290U2NvcGUsICRzY29wZSwgJGxvZywgJGFuY2hvclNjcm9sbCwgbWVzc2FnZU1vZGVsLCBwaWNrU2VydmljZSkge1xuXG4gIHZhciBzY3JvbGxUb1RvcCA9IGZ1bmN0aW9uKCkge1xuICAgICRhbmNob3JTY3JvbGwoKTsgLy8gaGFja3k/XG4gIH07XG5cbiAgdmFyIGFsbFBpY2tzTWFkZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAkc2NvcGUucGlja3MubGVuZ3RoID09ICRzY29wZS50ZWFtLmxlYWd1ZS5tYXhfcGlja3NfcGVyX3dlZWsgfHwgJHNjb3BlLnBpY2tzLmxlbmd0aCA+PSAkc2NvcGUuZ2FtZXMubGVuZ3RoO1xuICB9O1xuXG4gIHZhciBnZXRQaWNrID0gZnVuY3Rpb24oZ2FtZSwgc3F1YWQpIHtcbiAgICB2YXIgcGljayA9IF8uZmluZCgkc2NvcGUucGlja3MsIGZ1bmN0aW9uKHBpY2spIHsgcmV0dXJuIHBpY2suZ2FtZV9pZCA9PT0gZ2FtZS5pZCAmJiBwaWNrLnNxdWFkX2lkID09PSBzcXVhZC5pZCB9KTtcbiAgICByZXR1cm4gcGljaztcbiAgfTtcblxuICB2YXIgcmVtb3ZlUGljayA9IGZ1bmN0aW9uKHBpY2tUb1JlbW92ZSkge1xuICAgICRzY29wZS5waWNrcyA9IF8ucmVqZWN0KCRzY29wZS5waWNrcywgZnVuY3Rpb24ocGljaykgeyByZXR1cm4gcGljay5nYW1lX2lkID09PSBwaWNrVG9SZW1vdmUuZ2FtZV9pZCAmJiBwaWNrLnNxdWFkX2lkID09PSBwaWNrVG9SZW1vdmUuc3F1YWRfaWQgfSlcbiAgfTtcblxuICB2YXIgcmVtb3ZlR2FtZVBpY2tzID0gZnVuY3Rpb24oZ2FtZSkge1xuICAgICRzY29wZS5waWNrcyA9IF8ucmVqZWN0KCRzY29wZS5waWNrcywgZnVuY3Rpb24ocGljaykgeyByZXR1cm4gcGljay5nYW1lX2lkID09PSBnYW1lLmlkIH0pXG4gIH07XG5cbiAgdmFyIGFkZFBpY2sgPSBmdW5jdGlvbihnYW1lLCBzcXVhZCkge1xuICAgIGlmIChhbGxQaWNrc01hZGUoKSkge1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnTm8gbW9yZSBwaWNrcyBhbGxvd2VkLiBVbnNlbGVjdCBhIHBpY2sgaWYgbmVjZXNzYXJ5Lic7XG4gICAgICB2YXIgbWF4UGlja3MgPSAkc2NvcGUudGVhbS5sZWFndWUubWF4X3BpY2tzX3Blcl93ZWVrO1xuICAgICAgaWYgKG1heFBpY2tzKSB7XG4gICAgICAgIG1lc3NhZ2UgPSAnT25seSAnICsgbWF4UGlja3MgKyAnIHBpY2tzIGFsbG93ZWQuIFVuc2VsZWN0IGEgcGljayBpZiBuZWNlc3NhcnkuJztcbiAgICAgIH1cbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ2RhbmdlcicsIGNvbnRlbnQ6IG1lc3NhZ2UgfSwgZmFsc2UpO1xuICAgICAgc2Nyb2xsVG9Ub3AoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHBpY2sgPSB7XG4gICAgICB3ZWVrX2lkOiBnYW1lLndlZWtfaWQsXG4gICAgICB3ZWVrX3R5cGVfaWQ6IGdhbWUud2Vla190eXBlX2lkLFxuICAgICAgZ2FtZV9pZDogZ2FtZS5pZCxcbiAgICAgIHRlYW1faWQ6ICRzY29wZS50ZWFtLmlkLFxuICAgICAgc3F1YWRfaWQ6IHNxdWFkLmlkXG4gICAgfTtcbiAgICAkc2NvcGUucGlja3MucHVzaChwaWNrKTtcbiAgfTtcblxuICAkc2NvcGUudG9nZ2xlUGljayA9IGZ1bmN0aW9uKGdhbWUsIHNxdWFkKSB7XG4gICAgaWYgKCEkc2NvcGUuaXNDb2FjaCgkc2NvcGUudGVhbSkgfHwgZ2FtZS5sb2NrZWQpIHJldHVybjtcbiAgICB2YXIgcGljayA9IGdldFBpY2soZ2FtZSwgc3F1YWQpO1xuICAgIGlmICghXy5pc1VuZGVmaW5lZChwaWNrKSAmJiBwaWNrLmxvY2tlZCkge1xuICAgICAgcmV0dXJuOyAvLyBubyB0b2dnbGluZyBsb2NrZWQgcGlja3NcbiAgICB9XG4gICAgaWYgKCFfLmlzVW5kZWZpbmVkKHBpY2spKSB7XG4gICAgICAvLyBpZiBhIHBpY2sgZXhpc3RzIGFscmVhZHksIHRoZW4geW91IGFyZSBhdHRlbXB0aW5nIHRvIGRlLXNlbGVjdCBpdFxuICAgICAgcmVtb3ZlUGljayhwaWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlR2FtZVBpY2tzKGdhbWUpOyAvLyBubyAyIHBpY2tzIGZvciB0aGUgc2FtZSBnYW1lXG4gICAgICBhZGRQaWNrKGdhbWUsIHNxdWFkKTtcbiAgICB9XG4gICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdUZWFtUGlja0NvbnRyb2xsZXI6OnBpY2tzQ2hhbmdlZCcsIHsgcGlja3M6ICRzY29wZS5waWNrcyB9KTtcbiAgfTtcblxuICAkc2NvcGUuc2F2ZVBpY2tzID0gZnVuY3Rpb24oKSB7XG4gICAgcGlja1NlcnZpY2Uuc2F2ZVBpY2tzKCRzY29wZS50ZWFtLmlkLCAkc2NvcGUucGlja3MpXG4gICAgICAuZmluYWxseShmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgJHNjb3BlLnNob3dUZWFtKCRzY29wZS50ZWFtKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gICRzY29wZS5pc0Rpc2FibGVkID0gZnVuY3Rpb24oZ2FtZSkge1xuICAgIHZhciBpc0Rpc2FibGVkID0gZmFsc2U7XG4gICAgaWYgKGdhbWUubG9ja2VkKSB7XG4gICAgICBpc0Rpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGlzRGlzYWJsZWQ7XG4gIH07XG5cbiAgJHNjb3BlLnBpY2tTdGF0dXMgPSBmdW5jdGlvbihnYW1lLCBzcXVhZCkge1xuICAgIHZhciBzdGF0dXMgPSAnJyxcbiAgICAgIHBpY2sgPSBnZXRQaWNrKGdhbWUsIHNxdWFkKTtcbiAgICBpZiAoIV8uaXNVbmRlZmluZWQocGljaykpIHtcbiAgICAgIGlmIChwaWNrLmNvcnJlY3QgPT09IHRydWUpIHtcbiAgICAgICAgc3RhdHVzID0gJ2NoZWNrJztcbiAgICAgIH0gZWxzZSBpZiAocGljay5nYW1lICYmIChwaWNrLmdhbWUudGllID09PSB0cnVlIHx8IHBpY2suZ2FtZS5pbmNvbXBsZXRlID09PSB0cnVlKSkge1xuICAgICAgICBzdGF0dXMgPSAnbWludXMnO1xuICAgICAgfSBlbHNlIGlmIChwaWNrLmNvcnJlY3QgPT09IGZhbHNlKSB7XG4gICAgICAgIHN0YXR1cyA9ICd0aW1lcyc7XG4gICAgICB9IGVsc2UgaWYgKHBpY2subG9ja2VkID09PSB0cnVlKSB7XG4gICAgICAgIHN0YXR1cyA9ICdsb2NrJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXR1cyA9ICd1bmxvY2snO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RhdHVzO1xuICB9O1xuXG4gICRzY29wZS4kb24oJ1RlYW1QaWNrQ29udHJvbGxlcjo6c2F2ZVBpY2tzJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAkc2NvcGUuc2F2ZVBpY2tzKCk7XG4gIH0pO1xuICBcbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcInBpY2sgbWFueSBjb250cm9sbGVyXCIpO1xuICB9O1xuICBpbml0KCk7XG59O1xuXG5UZWFtUGlja01hbnlDb250cm9sbGVyLiRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJHNjb3BlJywgJyRsb2cnLCAnJGFuY2hvclNjcm9sbCcsICdtZXNzYWdlTW9kZWwnLCAncGlja1NlcnZpY2UnXTtcbm1vZHVsZS5leHBvcnRzID0gVGVhbVBpY2tNYW55Q29udHJvbGxlcjtcbiIsInZhciBBZG1pbkdhbWVFZGl0Q29udHJvbGxlciA9IGZ1bmN0aW9uKGdhbWUsIHNxdWFkcywgJHNjb3BlLCAkbW9kYWxJbnN0YW5jZSkge1xuXG4gICRzY29wZS5nYW1lRGF0YSA9IGFuZ3VsYXIuY29weShnYW1lKTtcblxuICAkc2NvcGUuc3F1YWRzID0gc3F1YWRzLmRhdGE7XG5cbiAgJHNjb3BlLmNsb3NlU3RhcnRzQXQgPSBmdW5jdGlvbigpIHtcbiAgICAkc2NvcGUuc3RhcnRzQXREcm9wZG93biA9IHtcbiAgICAgIGlzb3BlbjogZmFsc2VcbiAgICB9O1xuICB9O1xuICAkc2NvcGUuY2xvc2VTdGFydHNBdCgpO1xuXG4gICRzY29wZS5nZXRTcXVhZCA9IGZ1bmN0aW9uKHNxdWFkSWQpIHtcbiAgICB2YXIgc3F1YWQgPSBfLmZpbmQoJHNjb3BlLnNxdWFkcywgZnVuY3Rpb24oc3F1YWQpIHsgcmV0dXJuIHNxdWFkLmlkID09PSBzcXVhZElkIH0pO1xuICAgIHJldHVybiBzcXVhZDtcbiAgfTtcblxuICAkc2NvcGUuZWRpdEdhbWUgPSBmdW5jdGlvbihnYW1lKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuY2xvc2UoZ2FtZSk7XG4gIH07XG5cbiAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuQWRtaW5HYW1lRWRpdENvbnRyb2xsZXIuJGluamVjdCA9IFsnZ2FtZScsICdzcXVhZHMnLCAnJHNjb3BlJywgJyRtb2RhbEluc3RhbmNlJ107XG5tb2R1bGUuZXhwb3J0cyA9IEFkbWluR2FtZUVkaXRDb250cm9sbGVyO1xuIiwidmFyIEFkbWluR2FtZU5ld0NvbnRyb2xsZXIgPSBmdW5jdGlvbih3ZWVrLCBsYXN0R2FtZSwgc3F1YWRzLCAkc2NvcGUsICRtb2RhbEluc3RhbmNlKSB7XG5cbiAgJHNjb3BlLndlZWtEYXRhID0gd2VlaztcblxuICAkc2NvcGUuc3F1YWRzID0gc3F1YWRzLmRhdGE7XG5cbiAgJHNjb3BlLm5ld0dhbWVEYXRhID0ge1xuICAgIHdlZWtfaWQ6IHdlZWsuaWQsXG4gICAgbm90ZTogJycsXG4gICAgaG9tZV9zcXVhZF9pZDogc3F1YWRzLmRhdGFbMF0uaWQsXG4gICAgdmlzaXRpbmdfc3F1YWRfaWQ6IHNxdWFkcy5kYXRhWzBdLmlkLFxuICAgIHN0YXJ0c19hdDogKGxhc3RHYW1lKSA/IGxhc3RHYW1lLnN0YXJ0c19hdCA6IG1vbWVudCgpLmZvcm1hdCgpLFxuICAgIHBsYXlvZmY6IGZhbHNlLFxuICAgIHRiZDogZmFsc2UsXG4gICAgaWZfbmVjZXNzYXJ5OiBmYWxzZVxuICB9O1xuXG4gICRzY29wZS5jbG9zZVN0YXJ0c0F0ID0gZnVuY3Rpb24oKSB7XG4gICAgJHNjb3BlLnN0YXJ0c0F0RHJvcGRvd24gPSB7XG4gICAgICBpc29wZW46IGZhbHNlXG4gICAgfTtcbiAgfTtcbiAgJHNjb3BlLmNsb3NlU3RhcnRzQXQoKTtcblxuICAkc2NvcGUuY3JlYXRlR2FtZSA9IGZ1bmN0aW9uKGdhbWUpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZShnYW1lKTtcbiAgfTtcblxuICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICB9O1xuICBpbml0KCk7XG59O1xuXG5BZG1pbkdhbWVOZXdDb250cm9sbGVyLiRpbmplY3QgPSBbJ3dlZWsnLCAnbGFzdEdhbWUnLCAnc3F1YWRzJywgJyRzY29wZScsICckbW9kYWxJbnN0YW5jZSddO1xubW9kdWxlLmV4cG9ydHMgPSBBZG1pbkdhbWVOZXdDb250cm9sbGVyO1xuIiwidmFyIEFkbWluV2Vla3NDb250cm9sbGVyID0gZnVuY3Rpb24oc2Vhc29uLCB3ZWVrcywgbGVhZ3VlcywgJHNjb3BlLCAkbG9jYXRpb24sICRtb2RhbCwgc2Vhc29uU2VydmljZSwgd2Vla1NlcnZpY2UpIHtcblxuICAkc2NvcGUuc2Vhc29uID0gc2Vhc29uLmRhdGE7XG5cbiAgJHNjb3BlLndlZWtzID0gd2Vla3MuZGF0YTtcblxuICAkc2NvcGUucHJpdmF0ZVF1ZXJ5ID0gJyc7XG5cbiAgJHNjb3BlLnB1YmxpY1F1ZXJ5ID0gJyc7XG5cbiAgJHNjb3BlLnB1YmxpY0xlYWd1ZXMgPSBfLmZpbHRlcihsZWFndWVzLmRhdGEsIGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgIHJldHVybiBsZWFndWUucHVibGljO1xuICB9KTtcblxuICAkc2NvcGUucHJpdmF0ZUxlYWd1ZXMgPSBfLmZpbHRlcihsZWFndWVzLmRhdGEsIGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgIHJldHVybiAhbGVhZ3VlLnB1YmxpYztcbiAgfSk7XG5cbiAgJHNjb3BlLmVkaXRTZWFzb24gPSBmdW5jdGlvbihzZWFzb24pIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvYWRtaW4vc2Vhc29ucy9zZWFzb24vZWRpdC9hZG1pbi5zZWFzb24uZWRpdC50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnQWRtaW5TZWFzb25FZGl0Q29udHJvbGxlcicsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIHNlYXNvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHNlYXNvbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihzZWFzb24pIHtcbiAgICAgIHNlYXNvblNlcnZpY2UudXBkYXRlU2Vhc29uKHNlYXNvbik7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnRWRpdCBzZWFzb24gbW9kYWwgZGlzbWlzc2VkLi4uJyk7XG4gICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ0VkaXQgc2Vhc29uIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgIH0pO1xuXG4gIH07XG5cbiAgJHNjb3BlLmNyZWF0ZVdlZWsgPSBmdW5jdGlvbihzZWFzb24pIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvYWRtaW4vd2Vlay9uZXcvYWRtaW4ud2Vlay5uZXcudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0FkbWluV2Vla05ld0NvbnRyb2xsZXInLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICBzZWFzb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBzZWFzb247XG4gICAgICAgIH0sXG4gICAgICAgIHdlZWtUeXBlczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHdlZWtTZXJ2aWNlLmdldFdlZWtUeXBlcygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKHdlZWspIHtcbiAgICAgIHdlZWtTZXJ2aWNlLmNyZWF0ZVdlZWsod2Vlayk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnV2VlayBjcmVhdGUgY2FuY2VsbGVkLi4uJyk7XG4gICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ1dlZWsgY3JlYXRlIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgIH0pO1xuXG4gIH07XG5cbiAgJHNjb3BlLnNob3dXZWVrID0gZnVuY3Rpb24od2Vlaykge1xuICAgICRsb2NhdGlvbi51cmwoJGxvY2F0aW9uLnBhdGgoKSArICcvd2Vla3MvJyArIHdlZWsuaWQpO1xuICB9O1xuXG4gICRzY29wZS5zaG93TGVhZ3VlID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgJGxvY2F0aW9uLnVybCgnL3NlYXNvbi8nICsgbGVhZ3VlLnNlYXNvbl9pZCArICcvbGVhZ3VlLycgKyBsZWFndWUuaWQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICB9O1xuICBpbml0KCk7XG59O1xuXG5BZG1pbldlZWtzQ29udHJvbGxlci4kaW5qZWN0ID0gWydzZWFzb24nLCAnd2Vla3MnLCAnbGVhZ3VlcycsICckc2NvcGUnLCAnJGxvY2F0aW9uJywgJyRtb2RhbCcsICdzZWFzb25TZXJ2aWNlJywgJ3dlZWtTZXJ2aWNlJ107XG5tb2R1bGUuZXhwb3J0cyA9IEFkbWluV2Vla3NDb250cm9sbGVyO1xuIiwidmFyIEFkbWluV2Vla05ld0NvbnRyb2xsZXIgPSBmdW5jdGlvbihzZWFzb24sIHdlZWtUeXBlcywgJHNjb3BlLCAkbW9kYWxJbnN0YW5jZSkge1xuXG4gICRzY29wZS53ZWVrVHlwZXMgPSB3ZWVrVHlwZXMuZGF0YTtcblxuICAkc2NvcGUud2Vla0RhdGEgPSB7XG4gICAgc2Vhc29uX2lkOiBzZWFzb24uaWQsXG4gICAgbmFtZTogJycsXG4gICAgd2Vla190eXBlX2lkOiB3ZWVrVHlwZXMuZGF0YVswXS5pZCxcbiAgICBzdGFydHNfYXQ6IG1vbWVudCgpLmZvcm1hdCgpLFxuICAgIGVuZHNfYXQ6IG1vbWVudCgpLmZvcm1hdCgpXG4gIH07XG5cbiAgJHNjb3BlLmNsb3NlU3RhcnRzQXQgPSBmdW5jdGlvbigpIHtcbiAgICAkc2NvcGUuc3RhcnRzQXREcm9wZG93biA9IHtcbiAgICAgIGlzb3BlbjogZmFsc2VcbiAgICB9O1xuICB9O1xuICAkc2NvcGUuY2xvc2VTdGFydHNBdCgpO1xuXG4gICRzY29wZS5jbG9zZUVuZHNBdCA9IGZ1bmN0aW9uKCkge1xuICAgICRzY29wZS5lbmRzQXREcm9wZG93biA9IHtcbiAgICAgIGlzb3BlbjogZmFsc2VcbiAgICB9O1xuICB9O1xuICAkc2NvcGUuY2xvc2VFbmRzQXQoKTtcblxuICAkc2NvcGUuY3JlYXRlV2VlayA9IGZ1bmN0aW9uKHdlZWspIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZSh3ZWVrKTtcbiAgfTtcblxuICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICB9O1xuXG4gICRzY29wZS5oYXNFcnJvciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gIH07XG5cbiAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kZXJyb3JbcHJvcGVydHldO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICB9O1xuICBpbml0KCk7XG59O1xuXG5BZG1pbldlZWtOZXdDb250cm9sbGVyLiRpbmplY3QgPSBbJ3NlYXNvbicsICd3ZWVrVHlwZXMnLCAnJHNjb3BlJywgJyRtb2RhbEluc3RhbmNlJ107XG5tb2R1bGUuZXhwb3J0cyA9IEFkbWluV2Vla05ld0NvbnRyb2xsZXI7XG4iLCJ2YXIgQWRtaW5XZWVrRWRpdENvbnRyb2xsZXIgPSBmdW5jdGlvbih3ZWVrLCB3ZWVrVHlwZXMsICRzY29wZSwgJG1vZGFsSW5zdGFuY2UpIHtcblxuICAkc2NvcGUud2Vla0RhdGEgPSBhbmd1bGFyLmNvcHkod2Vlayk7XG5cbiAgJHNjb3BlLndlZWtUeXBlcyA9IHdlZWtUeXBlcy5kYXRhO1xuXG4gICRzY29wZS5jbG9zZVN0YXJ0c0F0ID0gZnVuY3Rpb24oKSB7XG4gICAgJHNjb3BlLnN0YXJ0c0F0RHJvcGRvd24gPSB7XG4gICAgICBpc29wZW46IGZhbHNlXG4gICAgfTtcbiAgfTtcbiAgJHNjb3BlLmNsb3NlU3RhcnRzQXQoKTtcblxuICAkc2NvcGUuY2xvc2VFbmRzQXQgPSBmdW5jdGlvbigpIHtcbiAgICAkc2NvcGUuZW5kc0F0RHJvcGRvd24gPSB7XG4gICAgICBpc29wZW46IGZhbHNlXG4gICAgfTtcbiAgfTtcbiAgJHNjb3BlLmNsb3NlRW5kc0F0KCk7XG5cbiAgJHNjb3BlLmVkaXRXZWVrID0gZnVuY3Rpb24od2Vlaykge1xuICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKHdlZWspO1xuICB9O1xuXG4gICRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2FuY2VsJyk7XG4gIH07XG5cbiAgJHNjb3BlLmhhc0Vycm9yID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgfTtcblxuICAkc2NvcGUuaGFzUHJvcGVydHlFcnJvciA9IGZ1bmN0aW9uKGlucHV0LCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRlcnJvcltwcm9wZXJ0eV07XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cbkFkbWluV2Vla0VkaXRDb250cm9sbGVyLiRpbmplY3QgPSBbJ3dlZWsnLCAnd2Vla1R5cGVzJywgJyRzY29wZScsICckbW9kYWxJbnN0YW5jZSddO1xubW9kdWxlLmV4cG9ydHMgPSBBZG1pbldlZWtFZGl0Q29udHJvbGxlcjtcbiIsInZhciBBZG1pblNxdWFkc05ld0NvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRtb2RhbEluc3RhbmNlKSB7XG5cbiAgJHNjb3BlLnNxdWFkRGF0YSA9IHtcbiAgICBuYW1lOiAnJyxcbiAgICBhYmJyZXY6ICcnLFxuICAgIHNob3J0OiAnJyxcbiAgICBzcXVhZF90eXBlOiAnJ1xuICB9O1xuXG4gICRzY29wZS5jcmVhdGVTcXVhZCA9IGZ1bmN0aW9uKHNxdWFkKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuY2xvc2Uoc3F1YWQpO1xuICB9O1xuXG4gICRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2FuY2VsJyk7XG4gIH07XG5cbiAgJHNjb3BlLmhhc0Vycm9yID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgfTtcblxuICAkc2NvcGUuaGFzUHJvcGVydHlFcnJvciA9IGZ1bmN0aW9uKGlucHV0LCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRlcnJvcltwcm9wZXJ0eV07XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cbkFkbWluU3F1YWRzTmV3Q29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJG1vZGFsSW5zdGFuY2UnXTtcbm1vZHVsZS5leHBvcnRzID0gQWRtaW5TcXVhZHNOZXdDb250cm9sbGVyO1xuIiwidmFyIEFkbWluU3F1YWRzRWRpdENvbnRyb2xsZXIgPSBmdW5jdGlvbihzcXVhZCwgJHNjb3BlLCAkbW9kYWxJbnN0YW5jZSkge1xuXG4gICRzY29wZS5zcXVhZERhdGEgPSBhbmd1bGFyLmNvcHkoc3F1YWQpO1xuXG4gICRzY29wZS5lZGl0U3F1YWQgPSBmdW5jdGlvbihzcXVhZCkge1xuICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKHNxdWFkKTtcbiAgfTtcblxuICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICB9O1xuXG4gICRzY29wZS5oYXNFcnJvciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gIH07XG5cbiAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kZXJyb3JbcHJvcGVydHldO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICB9O1xuICBpbml0KCk7XG59O1xuXG5BZG1pblNxdWFkc0VkaXRDb250cm9sbGVyLiRpbmplY3QgPSBbJ3NxdWFkJywgJyRzY29wZScsICckbW9kYWxJbnN0YW5jZSddO1xubW9kdWxlLmV4cG9ydHMgPSBBZG1pblNxdWFkc0VkaXRDb250cm9sbGVyO1xuIiwidmFyIEFkbWluU2Vhc29uTmV3Q29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJG1vZGFsSW5zdGFuY2UpIHtcblxuICAkc2NvcGUubmV3U2Vhc29uRGF0YSA9IHtcbiAgICBuYW1lOiAnJyxcbiAgICBzZWFzb25fdHlwZTogJycsXG4gICAgc3RhcnRzX2F0OiBtb21lbnQoKS5mb3JtYXQoKSxcbiAgICBlbmRzX2F0OiBtb21lbnQoKS5mb3JtYXQoKVxuICB9O1xuXG4gICRzY29wZS5jbG9zZVN0YXJ0c0F0ID0gZnVuY3Rpb24oKSB7XG4gICAgJHNjb3BlLnN0YXJ0c0F0RHJvcGRvd24gPSB7XG4gICAgICBpc29wZW46IGZhbHNlXG4gICAgfTtcbiAgfTtcbiAgJHNjb3BlLmNsb3NlU3RhcnRzQXQoKTtcblxuICAkc2NvcGUuY2xvc2VFbmRzQXQgPSBmdW5jdGlvbigpIHtcbiAgICAkc2NvcGUuZW5kc0F0RHJvcGRvd24gPSB7XG4gICAgICBpc29wZW46IGZhbHNlXG4gICAgfTtcbiAgfTtcbiAgJHNjb3BlLmNsb3NlRW5kc0F0KCk7XG5cbiAgJHNjb3BlLmNyZWF0ZVNlYXNvbiA9IGZ1bmN0aW9uKHNlYXNvbikge1xuICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKHNlYXNvbik7XG4gIH07XG5cbiAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgfTtcblxuICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICB9O1xuXG4gICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuQWRtaW5TZWFzb25OZXdDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbW9kYWxJbnN0YW5jZSddO1xubW9kdWxlLmV4cG9ydHMgPSBBZG1pblNlYXNvbk5ld0NvbnRyb2xsZXI7XG4iLCJ2YXIgQWRtaW5TZWFzb25FZGl0Q29udHJvbGxlciA9IGZ1bmN0aW9uKHNlYXNvbiwgJHNjb3BlLCAkbW9kYWxJbnN0YW5jZSkge1xuXG4gICRzY29wZS5zZWFzb25EYXRhID0gYW5ndWxhci5jb3B5KHNlYXNvbik7XG5cbiAgJHNjb3BlLmNsb3NlU3RhcnRzQXQgPSBmdW5jdGlvbigpIHtcbiAgICAkc2NvcGUuc3RhcnRzQXREcm9wZG93biA9IHtcbiAgICAgIGlzb3BlbjogZmFsc2VcbiAgICB9O1xuICB9O1xuICAkc2NvcGUuY2xvc2VTdGFydHNBdCgpO1xuXG4gICRzY29wZS5jbG9zZUVuZHNBdCA9IGZ1bmN0aW9uKCkge1xuICAgICRzY29wZS5lbmRzQXREcm9wZG93biA9IHtcbiAgICAgIGlzb3BlbjogZmFsc2VcbiAgICB9O1xuICB9O1xuICAkc2NvcGUuY2xvc2VFbmRzQXQoKTtcblxuICAkc2NvcGUudXBkYXRlU2Vhc29uID0gZnVuY3Rpb24oc2Vhc29uKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuY2xvc2Uoc2Vhc29uKTtcbiAgfTtcblxuICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICB9O1xuXG4gICRzY29wZS5oYXNFcnJvciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gIH07XG5cbiAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kZXJyb3JbcHJvcGVydHldO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICB9O1xuICBpbml0KCk7XG59O1xuXG5BZG1pblNlYXNvbkVkaXRDb250cm9sbGVyLiRpbmplY3QgPSBbJ3NlYXNvbicsICckc2NvcGUnLCAnJG1vZGFsSW5zdGFuY2UnXTtcbm1vZHVsZS5leHBvcnRzID0gQWRtaW5TZWFzb25FZGl0Q29udHJvbGxlcjtcbiJdfQ==
;