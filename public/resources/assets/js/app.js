require=(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({"app-templates":[function(require,module,exports){
module.exports=require('0VoVTq');
},{}],"0VoVTq":[function(require,module,exports){
angular.module('app.templates', ['common/modules/confirm/confirm.tpl.html', 'common/modules/footer/footer.tpl.html', 'common/modules/header/header.tpl.html', 'common/modules/message/message.tpl.html', 'common/templates/master.tpl.html', 'modules/private/admin/admin.tpl.html', 'modules/private/admin/games/admin.games.tpl.html', 'modules/private/admin/games/edit/games.edit.tpl.html', 'modules/private/league/contact/league.contact.tpl.html', 'modules/private/league/edit/league.edit.tpl.html', 'modules/private/league/invite/league.invite.tpl.html', 'modules/private/league/invite/request/league.invite.request.tpl.html', 'modules/private/league/join/league.join.tpl.html', 'modules/private/league/league.tpl.html', 'modules/private/league/message/league.message.tpl.html', 'modules/private/league/new/league.new.tpl.html', 'modules/private/league/view/league.view.tpl.html', 'modules/private/leagues/join/leagues.join.tpl.html', 'modules/private/leagues/join/private/leagues.join.private.tpl.html', 'modules/private/leagues/join/public/leagues.join.public.tpl.html', 'modules/private/leagues/leagues.tpl.html', 'modules/private/leagues/manage/leagues.manage.tpl.html', 'modules/private/leagues/my/leagues.my.tpl.html', 'modules/private/pick/make/pick.make.tpl.html', 'modules/private/play/leagues/play.leagues.tpl.html', 'modules/private/play/play.tpl.html', 'modules/private/play/teams/play.teams.tpl.html', 'modules/private/team/edit/team.edit.tpl.html', 'modules/private/team/message/team.message.tpl.html', 'modules/private/team/team.tpl.html', 'modules/private/team/view/team.view.tpl.html', 'modules/private/teams/alive/teams.alive.tpl.html', 'modules/private/teams/dead/teams.dead.tpl.html', 'modules/private/teams/teams.tpl.html', 'modules/private/user/reset/user.reset.tpl.html', 'modules/private/user/user.tpl.html', 'modules/public/abuse/abuse.tpl.html', 'modules/public/faq/faq.tpl.html', 'modules/public/home/home.tpl.html', 'modules/public/register/register.tpl.html', 'modules/public/register/terms/register.terms.tpl.html', 'modules/public/signin/signin.tpl.html']);

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
    "    <span style=\"text-transform: none;\">© 2014 Flexdevelopers.com LLC</span>\n" +
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
    "      <li ng-class=\"{'active': isState(['private.play.teams', 'private.play.leagues'])}\"><a ng-click=\"play(currentSeasonId)\">My Teams & Leagues</a></li>\n" +
    "      <li ng-class=\"{'active': isState(['private.leagues.join.public', 'private.leagues.join.private'])}\"><a ng-click=\"joinLeague(currentSeasonId)\">Join League</a></li>\n" +
    "      <li><a ng-click=\"createLeague(currentSeasonId)\">Create League</a></li>\n" +
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

angular.module("modules/private/admin/games/admin.games.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/admin/games/admin.games.tpl.html",
    "<div class=\"games-header-row row\">\n" +
    "  <div class=\"col-sm-9 col-md-9\">\n" +
    "    <h3>Games for {{weekData.display}} <br>\n" +
    "    <small>Complete: {{weekData.complete}}</small></h3>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-3 col-md-3\">\n" +
    "    <button type=\"button\" class=\"complete-week-btn btn btn-danger btn-sm\" ng-click=\"confirmWeekComplete(weekData)\">Complete Week</button>\n" +
    "    <button type=\"button\" class=\"send-reminder-btn btn btn-default btn-sm\" ng-click=\"sendReminder(weekData)\">Send Reminder</button>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"week-games list-group\">\n" +
    "  <a ng-repeat=\"game in games\" ng-click=\"editGame(game)\" class=\"list-group-item\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"game-display-name col-sm-6 col-md-6\"><i class=\"fa fa-check fa-fw\" ng-show=\"game.complete === true\" title=\"Pick correct\"></i> {{game.display}}</div>\n" +
    "      <div class=\"game-score col-sm-6 col-md-6\">{{game.squads[0].name}}: {{game.visiting_squad_score}} | {{game.squads[1].name}}: {{game.home_squad_score}}</div>\n" +
    "    </div>\n" +
    "  </a>\n" +
    "</div>");
}]);

angular.module("modules/private/admin/games/edit/games.edit.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/admin/games/edit/games.edit.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Edit Game</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <h4>{{gameData.display}}</h4>\n" +
    "  <form style=\"padding: 10px;\" name=\"editGameForm\" class=\"edit-game-form form-horizontal\" role=\"form\" novalidate>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label for=\"visitorScore\" class=\"col-sm-6 control-label\">{{gameData.squads[0].name}} Score:</label>\n" +
    "      <div class=\"col-sm-6\">\n" +
    "        <input id=\"visitorScore\" name=\"visitorScore\" type=\"text\" class=\"form-control\" ng-model=\"gameData.visiting_squad_score\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label for=\"homeScore\" class=\"col-sm-6 control-label\">{{gameData.squads[1].name}} Score:</label>\n" +
    "      <div class=\"col-sm-6\">\n" +
    "        <input id=\"homeScore\" name=\"homeScore\" type=\"text\" class=\"form-control\" ng-model=\"gameData.home_squad_score\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label><input type=\"checkbox\" ng-model=\"gameData.complete\"> completed</label>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "  <button class=\"btn btn-primary\" ng-click=\"editGame(gameData)\">Update</button>\n" +
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
    "  <h3 class=\"modal-title\">Invite Friends</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <div ng-show=\"!startWeekComplete\">\n" +
    "    <form name=\"inviteForm\" class=\"invite-form\" role=\"form\" novalidate>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-sm-12 col-md-12\">\n" +
    "          <div class=\"form-group\" ng-class=\"{'has-error': hasError(inviteForm.emails), 'has-feedback': hasError(inviteForm.emails)}\">\n" +
    "            <label for=\"emails\" class=\"control-label\">Email(s):</label>\n" +
    "            <input id=\"emails\" name=\"emails\" type=\"text\" class=\"form-control\" placeholder=\"Seperate emails with a space or comma...\" ng-model=\"invitation.email\" required>\n" +
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
    "              <i class=\"fa fa-check fa-fw\" ng-show=\"invite.accepted_at\" title=\"Accepted\"></i> {{invite.email}} <span class=\"sent-date\"><span ng-show=\"!invite.accepted_at\">Sent {{invite.updated_at}}</span><span ng-show=\"invite.accepted_at\">Joined  {{invite.accepted_at}}</span></span>\n" +
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
    "        <small >{{starts(leagueData)}}</small>\n" +
    "      </div>\n" +
    "      <small>Commish [ {{leagueData.commish_names.join(', ')}} ]</small><br>\n" +
    "      <small class=\"closed-text\" ng-show=\"!leagueData.open\">CLOSED TO NEW TEAMS</small>\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-5 col-md-5\">\n" +
    "    <button type=\"button\" class=\"join-btn btn btn-primary\" ng-show=\"!leagueData.start_week_complete\" ng-click=\"joinLeague(leagueData)\">Join</button>\n" +
    "    <button type=\"button\" class=\"invite-btn btn btn-primary\" ng-show=\"!leagueData.start_week_complete && (leagueData.public || isCommish(leagueData))\" ng-click=\"invite(leagueData.id, isCommish(leagueData), leagueData.start_week_complete)\">Invite</button>\n" +
    "    <button type=\"button\" class=\"request-invite-btn btn btn-primary\" ng-show=\"!leagueData.start_week_complete && !leagueData.public && !isCommish(leagueData)\" ng-click=\"requestInvite(leagueData)\">Request Invite</button>\n" +
    "    <h3 class=\"league-meta-right\" ng-show=\"leagueData.start_week_complete\">\n" +
    "      <small ng-show=\"leagueData.elimination\">LoseOrGoHome [ single elimination ]</small><small ng-show=\"!leagueData.elimination\">Biggest Loser [ no elimination ]</small><br>\n" +
    "      <small>{{starts(leagueData)}}</small>\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"league-message well well-sm\" ng-show=\"!leagueData.start_week_complete || hasTeamInLeague() || isCommish(leagueData)\"><strong>Commish to league:</strong> <p class=\"league-message-text\" ng-show=\"!leagueData.message || leagueData.message.length == 0\">no message</p><p class=\"league-message-text\" ng-show=\"leagueData.message.length > 0\" ng-bind-html=\"leagueData.message | linky:'_blank'\"></p> <a ng-show=\"isCommish(leagueData)\" ng-click=\"updateMessage(leagueData)\">[ edit ]</a><a ng-show=\"!isCommish(leagueData) && hasTeamInLeague()\" ng-click=\"contactCommish(leagueData)\">[ contact ]</a></div>\n" +
    "<hr>\n" +
    "<div class=\"teams-tab\">\n" +
    "  <ul class=\"nav nav-tabs\">\n" +
    "    <li class=\"active\"><a>Teams [ <span ng-show=\"leagueData.elimination\">{{leagueData.alive_team_count}} / </span>{{leagueData.team_count}} ]</a></li>\n" +
    "  </ul>\n" +
    "  <a class=\"join-times\" ng-show=\"!leagueData.start_week_complete && leagueData.max_teams_per_user > 1\" ng-click=\"joinLeague(leagueData)\">[ join up to {{leagueData.max_teams_per_user}}Xs ]</a>\n" +
    "</div>\n" +
    "<div class=\"input-group custom-search-form filter-league-join\">\n" +
    "  <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" ng-model=\"teamQuery\">\n" +
    "</div>\n" +
    "<div class=\"league-container\">\n" +
    "  <div class=\"league-teams list-group\">\n" +
    "    <a class=\"list-group-item\" ng-class=\"{'inactive': !team.active || !team.alive}\" ng-repeat=\"team in leagueTeams | activeTeamFilter:teamOptions | filter:search:strict | offsetFilter:(currentTeamPage-1)*teamsPerPage | limitTo:teamsPerPage\" ng-click=\"showTeam(team)\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"league-name col-sm-6 col-md-6\">\n" +
    "          <i class=\"fa fa-user fa-fw\" ng-show=\"isCoach(team)\" title=\"My team\"></i><i class=\"fa fa-check fa-fw\" ng-show=\"!isCoach(team) && isCommish(leagueData) && team.paid == true\" title=\"Paid\"></i> <span class=\"team-name\" ng-class=\"{'inactive': !team.active || !team.alive}\">{{team.name}}</span><br><span class=\"coach-name\">Coach: {{coachName(team)}}</span>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-6 col-md-6\">\n" +
    "          <span class=\"current-pick\" ng-class=\"{'no-pick': hasNoPick(team)}\" ng-show=\"team.active\">Pick: [ <span class=\"current-loser-name\">{{team.last_pick_squad.name}}</span><span class=\"current-loser-abbrev\">{{team.last_pick_squad.abbrev}}</span> ]</span>\n" +
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
    "      <button type=\"button\" class=\"create-league-btn btn btn-primary\" ng-click=\"createLeague(currentSeasonId)\">Create League</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<hr>\n" +
    "<div class=\"join-leagues-tabs\">\n" +
    "  <ul class=\"nav nav-tabs\">\n" +
    "    <li ng-class=\"{'active': isPublic()}\" ng-click=\"resetSearch()\">\n" +
    "      <a ng-click=\"publicLeagues()\"><i class=\"fa fa-unlock fa-fw\" title=\"Public leagues\"></i> Public <span class=\"leagues\">Leagues</span></a>\n" +
    "    </li>\n" +
    "    <li ng-class=\"{'active': !isPublic()}\" ng-click=\"resetSearch()\">\n" +
    "      <a ng-click=\"privateLeagues()\"><i class=\"fa fa-lock fa-fw\" title=\"Private leagues\"></i> Private <span class=\"leagues\">Leagues</span></a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "  <select class=\"seasons form-control\" ng-change=\"changeSeason()\" ng-model=\"selectedSeason.id\" ng-options=\"currentSeason.id as currentSeason.name for currentSeason in currentSeasons\"></select>\n" +
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
    "        <div class=\"league-name col-sm-6 col-md-6\" ng-class=\"{'closed': !league.open}\"><i class=\"fa fa-times fa-fw\" title=\"Closed league\" ng-show=\"!league.open\"></i> {{league.name}}<br><span class=\"team-count league-commish\">Commish: {{league.commish_names.join(', ')}}</span></div>\n" +
    "        <div class=\"col-sm-6 col-md-6\">\n" +
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
    "            <div class=\"league-name col-sm-6 col-md-6\" ng-class=\"{'closed': !league.open}\"><i class=\"fa fa-times fa-fw\" title=\"Closed league\" ng-show=\"!league.open\"></i> {{league.name}}<br><span class=\"team-count league-commish\">Commish: {{league.commish_names.join(', ')}}</span></div>\n" +
    "            <div class=\"col-sm-6 col-md-6\">\n" +
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
    "  <div class=\"well well-sm\"><strong>Week {{games[0].week_number}} [ {{games[0].week_type}} ]</strong></div>\n" +
    "  <div ng-repeat-start=\"game in games\" class=\"week-games list-group\">\n" +
    "    <h5 ng-class=\"{'invalid-game': game.started}\">{{game.display}}<br><small>{{starts(game)}}</small></h5>\n" +
    "    <a ng-repeat=\"squad in game.squads\" ng-click=\"makePick(game, squad)\" class=\"list-group-item\" ng-class=\"{'disabled': game.started}\">\n" +
    "      <div class=\"row game-row\">\n" +
    "        <span ng-class=\"{'invalid-squad': hasSquadBeenUsed(game, squad)}\">{{squad.name}} <span class=\"record-score\" ng-show=\"!game.complete && squad.record.length > 0\">[ {{squad.record}} ]</span><span class=\"record-score\" ng-show=\"game.complete\">[ {{getScore(game, $index)}} ]</span></span>\n" +
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
    "        <div class=\"league-name col-sm-6 col-md-6\">\n" +
    "          <i class=\"fa fa-comment fa-fw\" ng-show=\"!isCommish(league) && league.message.length > 0\" title=\"Has message from commish\"></i>\n" +
    "          <i class=\"fa fa-user fa-fw\" title=\"My league\" ng-show=\"isCommish(league)\"></i> {{league.name}}<br><span class=\"team-count league-commish\">Commish: {{league.commish_names.join(', ')}}</span>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-6 col-md-6\">\n" +
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
    "      <button type=\"button\" class=\"join-league-btn btn btn-primary\" ng-click=\"joinLeague(currentSeasonId)\">Join League</button>\n" +
    "      <button type=\"button\" class=\"create-league-btn btn btn-primary\" ng-click=\"createLeague(currentSeasonId)\">Create League</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<hr>\n" +
    "<div class=\"teams-leagues-tabs\">\n" +
    "  <ul class=\"nav nav-tabs\">\n" +
    "    <li ng-class=\"{'active': isState(['private.play.teams'])}\" ng-click=\"resetSearch()\">\n" +
    "      <a ng-click=\"myTeams()\"><span class=\"my-teams\">My Teams</span></a>\n" +
    "    </li>\n" +
    "    <li ng-class=\"{'active': isState(['private.play.leagues'])}\" ng-click=\"resetSearch()\">\n" +
    "      <a ng-click=\"myLeagues()\"><span class=\"my-leagues\">My Leagues</span></a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "  <select class=\"seasons form-control\" ng-change=\"changeSeason()\" ng-model=\"selectedSeason.id\" ng-options=\"season.id as season.name for season in seasons\"></select>\n" +
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
    "        <div class=\"league-name col-sm-6 col-md-6\">\n" +
    "          <i class=\"fa fa-comment fa-fw\" ng-show=\"team.message.length > 0\" title=\"Has message from commish\"></i>\n" +
    "          <span ng-class=\"{'dead-team-name': !team.active || !team.alive}\">{{team.name}}</span><br><span class=\"team-league\">{{team.league.name}}</span></div>\n" +
    "        <div class=\"col-sm-6 col-md-6\">\n" +
    "          <span class=\"current-pick\" ng-class=\"{'no-pick': hasNoPick(team)}\" ng-show=\"team.active && team.started\">Pick: [ <span class=\"current-loser-name\">{{team.last_pick_squad.name}}</span><span class=\"current-loser-abbrev\">{{team.last_pick_squad.abbrev}}</span> ]</span>\n" +
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
    "<div class=\"alert alert-danger\" ng-show=\"teamData.active && teamData.alive && teamData.started && hasNoPick(teamData)\">No loser picked for this week. <span ng-show=\"isCoach(teamData)\"><a class=\"alert-link\" ng-click=\"makePick(teamData)\">Pick</a> now.</span></div>\n" +
    "<div class=\"alert alert-danger\" ng-show=\"teamData.active && !teamData.alive\">This team is DEAD. So sorry.</div>\n" +
    "<div class=\"alert alert-warning\" ng-show=\"isCoach(teamData) && teamData.active && !teamData.started\">You can make your first pick when the league starts - {{teamData.start_week_display}}</div>\n" +
    "<div class=\"alert alert-warning\" ng-show=\"isCoach(teamData) && teamData.active && teamData.alive && teamData.last_pick_squad.locked\">Your pick is locked for {{teamData.last_pick_squad.week}}</div>\n" +
    "<div class=\"header-row row\">\n" +
    "  <div class=\"col-sm-8 col-md-8\">\n" +
    "    <div class=\"btn-group teams-dropdown\" dropdown is-open=\"teamDropdown.isopen\">\n" +
    "      <button type=\"button\" class=\"teams-btn-link btn btn-link dropdown-toggle\" ng-disabled=\"!isCoach(teamData) && !isCommish(teamData) && !isAdmin()\">\n" +
    "        <i class=\"fa fa-check fa-fw\" ng-show=\"isCommish(teamData) && teamData.paid == true\" title=\"Paid\"></i> <strong><span class=\"team-name\" ng-class=\"{'team-inactive': !teamData.active || !teamData.alive, 'disabled': !isCoach(teamData) && !isCommish(teamData) && !isAdmin()}\">{{teamData.name}}</span> <span ng-show=\"isCoach(teamData) || isCommish(teamData)\" class=\"caret\"></span></strong>\n" +
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
    "        <li ng-repeat=\"team in leagueTeams\" ng-show=\"team.id != teamData.id\"><a ng-click=\"showTeam(team)\"><span class=\"other-team-name\" ng-class=\"{'team-inactive': !team.active || !team.alive}\">{{team.name}}</span> <span class=\"other-team-pick\">{{team.last_pick_squad.abbrev}}</span></a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "    <h6><a ng-click=\"showLeague(teamData)\"><i class=\"fa fa-chevron-left fa-fw\"></i> <span class=\"team-league-name\">{{teamData.league.name}}</span></a></h6>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-4 col-md-4\">\n" +
    "    <button type=\"button\" class=\"make-pick-btn btn btn-primary\" ng-show=\"isCoach(teamData)\" ng-click=\"makePick(teamData)\" ng-disabled=\"teamData.last_pick_squad.locked || !teamData.started\"><span ng-show=\"hasNoPick(teamData)\">Pick Loser</span><span ng-show=\"!hasNoPick(teamData)\">Change Loser</span></button>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"team-message well well-sm\" ng-show=\"isCommish(teamData) || isCoach(teamData)\"><strong>Commish to team:</strong> <p class=\"team-message-text\" ng-show=\"!teamData.message || teamData.message.length == 0\">no message</p><p class=\"team-message-text\" ng-show=\"teamData.message.length > 0\" ng-bind-html=\"teamData.message | linky:'_blank'\"></p> <a ng-show=\"isCommish(teamData)\" ng-click=\"updateMessage(teamData)\">[ edit ]</a><a ng-show=\"!isCommish(teamData)\" ng-click=\"contactCommish(teamData)\">[ contact ]</a></div>\n" +
    "<hr>\n" +
    "<div class=\"losers-tab\">\n" +
    "  <ul class=\"nav nav-tabs\">\n" +
    "    <li class=\"active\"><a>Losers [ {{teamData.pick_count}} ]</a></li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "<div class=\"team-container\" style=\"clear:both;\">\n" +
    "    <div class=\"team-picks list-group\">\n" +
    "      <a ng-repeat=\"pick in picks\" class=\"team-pick list-group-item\" ng-click=\"makePick(teamData, pick)\" ng-class=\"{'locked': !isCoach(teamData) || pick.locked, 'incorrect': pick.correct === false}\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"week-name col-sm-6 col-md-6\">\n" +
    "            <i class=\"fa fa-lock fa-fw\" ng-show=\"pick.locked && pick.correct == null\" title=\"Pick locked\"></i>\n" +
    "            <i class=\"fa fa-unlock fa-fw\" ng-show=\"!pick.locked && pick.correct == null\" title=\"Pick unlocked\"></i>\n" +
    "            <i class=\"fa fa-times fa-fw\" ng-show=\"pick.correct === false\" title=\"Pick wrong\"></i>\n" +
    "            <i class=\"fa fa-check fa-fw\" ng-show=\"pick.correct === true\" title=\"Pick correct\"></i> <span class=\"pick-squad\"><span class=\"pick-squad-name\">[ {{pick.squad.name}} ]</span><span class=\"pick-squad-abbrev\">[ {{pick.squad.abbrev}} ]</span></span> <span class=\"game\">Week {{pick.week_number}} ({{pick.week_type}})</span>\n" +
    "          </div>\n" +
    "          <div class=\"game-column col-sm-6 col-md-6\">\n" +
    "            <span class=\"game\">{{pick.game_display}}</span>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "    <div class=\"no-picks-alert alert alert-info\" ng-show=\"picks.length == 0\">\n" +
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
    "                <span class=\"current-pick\" ng-class=\"{'no-pick': hasNoPick(team)}\" ng-show=\"team.active\">Pick: {{team.last_pick_squad.name}}</span>\n" +
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
    "                <span class=\"current-pick no-pick\" ng-show=\"team.active\">Pick: {{team.last_pick_squad.name}}</span>\n" +
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
    "    <dt>How do I play?</dt>\n" +
    "    <dd>\n" +
    "      <p>- Join a single elimination or non-elimination league.</p>\n" +
    "      <p>- Pick a different loser each week.</p>\n" +
    "      <p>- Root for your loser to lose...duh</p>\n" +
    "      <p>- In a non-elimination league, get the most picks right and win.</p>\n" +
    "      <p>- In single elimination league, last the longest and win.</p>\n" +
    "      <p>- Have fun!</p>\n" +
    "    </dd>\n" +
    "    <dt>How much does it cost?</dt>\n" +
    "    <dd>Zip. Zilch. Nada. Freeeeeeeeeeee...</dd>\n" +
    "    <dt>Can I pick the same loser twice?</dt>\n" +
    "    <dd>Nope...unless you make the playoffs, then all teams are once again available to choose from.</dd>\n" +
    "    <dt>Do ties count as a loss?</dt>\n" +
    "    <dd>No sir.</dd>\n" +
    "    <dt>What is the difference between a public and private league?</dt>\n" +
    "    <dd>Public leagues allow anyone to join. Private leagues require an invitation from the commish.</dd>\n" +
    "    <dt>The season has already started, can I still play?</dt>\n" +
    "    <dd>Yep. There’s always an open league or create your own league to start anytime during the season.</dd>\n" +
    "    <dt>When is the deadline to join a league?</dt>\n" +
    "    <dd>Join before the end of the league's first week.</dd>\n" +
    "    <dt>When is the deadline to make my pick?</dt>\n" +
    "    <dd>Just get it in before a game starts.</dd>\n" +
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
    "    <dt>Can I see the picks of others in my league?</dt>\n" +
    "    <dd>Only after the game has started. (this is true for the commish as well)</dd>\n" +
    "    <dt>Can I create my own league?</dt>\n" +
    "    <dd>You betcha. Create a single elimination or non-elimination league.</dd>\n" +
    "    <dt>How do I invite my friends to join my league?</dt>\n" +
    "    <dd>On your league page you’ll find an 'Invite' button. Use it. You’ll just need their email address.</dd>\n" +
    "    <dt>How many friends can join my league?</dt>\n" +
    "    <dd>As many as you like. Just to prove it, put a link to your league on Facebook and see if you can get all your Facebook friends to join.</dd>\n" +
    "    <dt>Can I set a limit on how many times a friend can join my league?</dt>\n" +
    "    <dd>You sure can. 1 - 10 times.</dd>\n" +
    "    <dt>How do I stop people from joining my league?</dt>\n" +
    "    <dd>Change the league to private.</dd>\n" +
    "    <dt>How can I remove people from my league?</dt>\n" +
    "    <dd>You can’t but you can deactivate (or reactivate) their team. A deactivated team is hidden from view and can’t make any picks.</dd>\n" +
    "    <dt>Can I edit my league?</dt>\n" +
    "    <dd>Yes, but you can't change the start week or format (single elimination or no elimination) after the league starts.</dd>\n" +
    "    <dt>Can I edit a team name in my league?</dt>\n" +
    "    <dd>Yes, the team's coach or the commish can edit a team name.</dd>\n" +
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
    "    <p class=\"lead\">Pick a different NFL loser each week. Single elimination or non-elimination leagues are waiting for you. Join anytime for free.</p>\n" +
    "  <div>\n" +
    "    <a class=\"cta btn btn-primary btn-lg\" role=\"button\" ng-click=\"joinLeague(currentSeasonId)\">Join League</a>\n" +
    "  </div>\n" +
    "  <div>\n" +
    "    <a class=\"cta btn btn-primary btn-lg\" role=\"button\" ng-click=\"createLeague(currentSeasonId)\">Create League</a>\n" +
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
    // game
    require('./modules/private/admin').name,
    require('./modules/private/admin/games').name,
    require('./modules/private/admin/games/edit').name,

    // helper modules
    require('./common/modules/header').name,
    require('./common/modules/message').name,
    require('./common/modules/footer').name,
    require('./common/modules/confirm').name,

    require('./common/aspects').name,
    require('./common/models').name,
    require('./common/api').name,
    require('./common/command').name,

    require('./common/service/application').name,

    //directives
    require('./common/directives/focus').name,
    require('./common/directives/match').name,
    require('./common/directives/rcSubmit').name,
    require('./common/directives/rcVerifySet').name,
    require('./common/directives/requiredPattern').name,

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
          }
          return $q.reject(rejection);
        }
    };
});

loghApp.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
});










},{"app-templates":"0VoVTq","./modules/public/home":2,"./modules/public/faq":3,"./modules/public/abuse":4,"./modules/public/signin":5,"./modules/public/register":6,"./modules/public/register/terms":7,"./modules/private/user":8,"./modules/private/user/reset":9,"./modules/private/league":10,"./modules/private/league/new":11,"./modules/private/league/view":12,"./modules/private/league/edit":13,"./modules/private/league/contact":14,"./modules/private/league/message":15,"./modules/private/league/join":16,"./modules/private/league/invite":17,"./modules/private/league/invite/request":18,"./modules/private/leagues":19,"./modules/private/leagues/join":20,"./modules/private/leagues/join/public":21,"./modules/private/leagues/join/private":22,"./modules/private/leagues/manage":23,"./modules/private/leagues/my":24,"./modules/private/team":25,"./modules/private/team/view":26,"./modules/private/team/edit":27,"./modules/private/team/message":28,"./modules/private/teams":29,"./modules/private/teams/alive":30,"./modules/private/teams/dead":31,"./modules/private/play":32,"./modules/private/play/leagues":33,"./modules/private/play/teams":34,"./modules/private/pick/make":35,"./modules/private/admin":36,"./modules/private/admin/games":37,"./modules/private/admin/games/edit":38,"./common/modules/header":39,"./common/modules/message":40,"./common/modules/footer":41,"./common/modules/confirm":42,"./common/aspects":43,"./common/models":44,"./common/api":45,"./common/command":46,"./common/service/application":47,"./common/directives/focus":48,"./common/directives/match":49,"./common/directives/rcSubmit":50,"./common/directives/rcVerifySet":51,"./common/directives/requiredPattern":52,"./common/filters":53}],43:[function(require,module,exports){

require("./TestAspect");

module.exports = angular.module('loghApp.aspects', [])
    .config( function() {

       //TODO aspect config if necessary
    }
);
},{"./TestAspect":54}],45:[function(require,module,exports){
/**
 * Define the remote services
 */
module.exports = angular.module('loghApp.api', [])
      .constant('apiConfig', require('./ApiConfig'))
      .service('userService', require('./UserService'))
      .service('leagueService', require('./LeagueService'))
      .service('teamService', require('./TeamService'))
      .service('pickService', require('./PickService'))
      .service('seasonService', require('./SeasonService'))
      .service('weekService', require('./WeekService'))
      .service('gameService', require('./GameService'))
;

},{"./ApiConfig":55,"./UserService":56,"./LeagueService":57,"./TeamService":58,"./PickService":59,"./SeasonService":60,"./WeekService":61,"./GameService":62}],44:[function(require,module,exports){
/**
 * Define the application models
 */
module.exports = angular.module('loghApp.models', [])
    //models
    .service('userModel', require('./UserModel'))
    .service('messageModel', require('./MessageModel'))
    .service('seasonModel', require('./SeasonModel'))
;
},{"./UserModel":63,"./MessageModel":64,"./SeasonModel":65}],46:[function(require,module,exports){
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


},{"./session/SigninCommand":66,"./session/SignoutCommand":67,"./user/GetCurrentUserCommand":68}],2:[function(require,module,exports){

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
},{"./HomeController":69}],4:[function(require,module,exports){
module.exports = angular.module('loghApp.abuse', [])
  .controller('AbuseController', require('./AbuseController'));

},{"./AbuseController":70}],3:[function(require,module,exports){
module.exports = angular.module('loghApp.faq', [])
  .controller('FaqController', require('./FaqController'));

},{"./FaqController":71}],5:[function(require,module,exports){
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

},{"./SigninController":72}],6:[function(require,module,exports){
module.exports = angular.module('loghApp.register', [])
  .controller('RegisterController', require('./RegisterController'));

},{"./RegisterController":73}],8:[function(require,module,exports){
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

},{"./UserController":74}],10:[function(require,module,exports){
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

},{"./LeagueController":75}],19:[function(require,module,exports){
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


},{"./LeaguesController":76}],25:[function(require,module,exports){
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

},{"./TeamController":77}],29:[function(require,module,exports){
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


},{"./TeamsController":78}],32:[function(require,module,exports){
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


},{"./PlayController":79}],36:[function(require,module,exports){
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

},{"./AdminController":80}],39:[function(require,module,exports){
module.exports = angular.module('loghApp.header', [])
    .controller('HeaderController', require('./HeaderController'))
},{"./HeaderController":81}],40:[function(require,module,exports){
module.exports = angular.module('loghApp.message', [])
    .controller('MessageController', require('./MessageController'));
},{"./MessageController":82}],42:[function(require,module,exports){
module.exports = angular.module('logh.confirm', [])
  .controller('ConfirmController', require('./ConfirmController'));

},{"./ConfirmController":83}],41:[function(require,module,exports){
module.exports = angular.module('loghApp.footer', [])
  .controller('FooterController', require('./FooterController'))
},{"./FooterController":84}],47:[function(require,module,exports){
/**
 * Define the application service
 */
module.exports = angular.module('logh.application', [])
    .service('applicationService', require('./ApplicationService'));
},{"./ApplicationService":85}],48:[function(require,module,exports){
//application directives
module.exports = angular.module('loghApp.directives.focus',[])
    .directive('loghFocus', require('./FocusDirective'))
;

},{"./FocusDirective":86}],49:[function(require,module,exports){
//application directives
module.exports = angular.module('loghApp.directives.match',[])
    .directive('match', require('./MatchDirective'))
;

},{"./MatchDirective":87}],50:[function(require,module,exports){
//application directives
module.exports = angular.module('logh.directives.rcSubmit',[])
  .directive('rcSubmit', require('./RCSubmitDirective'));

},{"./RCSubmitDirective":88}],53:[function(require,module,exports){
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
;

},{"./OffsetFilter":89,"./ActiveTeamFilter":90,"./AliveTeamFilter":91,"./OpenLeagueFilter":92,"./ManagedLeagueFilter":93,"./TimeFilter":94}],7:[function(require,module,exports){
module.exports = angular.module('loghApp.register.terms', [])
  .controller('RegisterTermsController', require('./RegisterTermsController'));

},{"./RegisterTermsController":95}],9:[function(require,module,exports){
module.exports = angular.module('loghApp.user.reset', [])
  .controller('UserResetController', require('./UserResetController'));

},{"./UserResetController":96}],11:[function(require,module,exports){
module.exports = angular.module('loghApp.league.new', [])
  .controller('NewLeagueController', require('./NewLeagueController'));

},{"./NewLeagueController":97}],12:[function(require,module,exports){
module.exports = angular.module('loghApp.league.view', [])
  .controller('ViewLeagueController', require('./ViewLeagueController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.league.view', {
        url: '/{leagueId}',
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
          leagueTeams: function(league, teamService) {
            return teamService.getAllLeagueTeams({ seasonId: league.data.season_id, leagueId: league.data.id });
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });

},{"./ViewLeagueController":98}],13:[function(require,module,exports){
module.exports = angular.module('loghApp.league.edit', [])
  .controller('EditLeagueController', require('./EditLeagueController'));

},{"./EditLeagueController":99}],14:[function(require,module,exports){
module.exports = angular.module('loghApp.league.contact', [])
  .controller('LeagueContactController', require('./LeagueContactController'));

},{"./LeagueContactController":100}],15:[function(require,module,exports){
module.exports = angular.module('loghApp.league.message', [])
  .controller('LeagueMessageController', require('./LeagueMessageController'));

},{"./LeagueMessageController":101}],16:[function(require,module,exports){
module.exports = angular.module('loghApp.league.join', [])
  .controller('LeagueJoinController', require('./LeagueJoinController'));

},{"./LeagueJoinController":102}],17:[function(require,module,exports){
module.exports = angular.module('loghApp.league.invite', [])
  .controller('LeagueInviteController', require('./LeagueInviteController'));

},{"./LeagueInviteController":103}],20:[function(require,module,exports){
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


},{"./JoinLeaguesController":104}],23:[function(require,module,exports){
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


},{"./ManageLeaguesController":105}],24:[function(require,module,exports){
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


},{"./MyLeaguesController":106}],26:[function(require,module,exports){
module.exports = angular.module('loghApp.team.view', [])
  .controller('ViewTeamController', require('./ViewTeamController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.team.view', {
        url: '/{teamId}',
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
          picks: function(team, pickService) {
            return pickService.getPicks({ teamId: team.data.id });
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });

},{"./ViewTeamController":107}],27:[function(require,module,exports){
module.exports = angular.module('loghApp.team.edit', [])
  .controller('EditTeamController', require('./EditTeamController'));

},{"./EditTeamController":108}],28:[function(require,module,exports){
module.exports = angular.module('loghApp.team.message', [])
  .controller('TeamMessageController', require('./TeamMessageController'));

},{"./TeamMessageController":109}],31:[function(require,module,exports){
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


},{"./DeadTeamsController":110}],30:[function(require,module,exports){
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


},{"./AliveTeamsController":111}],33:[function(require,module,exports){
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


},{"./PlayLeaguesController":112}],34:[function(require,module,exports){
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


},{"./PlayTeamsController":113}],35:[function(require,module,exports){
module.exports = angular.module('loghApp.pick.make', [])
  .controller('PickMakeController', require('./PickMakeController'));

},{"./PickMakeController":114}],37:[function(require,module,exports){
module.exports = angular.module('loghApp.admin.games', [])
  .controller('AdminGamesController', require('./AdminGamesController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.admin.games', {
        url: 'season/{seasonId}/week/{weekId}/games',
        views: {
          adminContent: {
            templateUrl: 'modules/private/admin/games/admin.games.tpl.html',
            controller: 'AdminGamesController',
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

},{"./AdminGamesController":115}],51:[function(require,module,exports){
//application directives
module.exports = angular.module('logh.directives.rcVerifySet',[])
  .directive('rcVerifySet', require('./RCVerifySetDirective'));

},{"./RCVerifySetDirective":116}],52:[function(require,module,exports){
//application directives
module.exports = angular.module('loghApp.directives.requiredPattern',[])
    .directive('rpattern', require('./RequiredPatternDirective'))
;

},{"./RequiredPatternDirective":117}],21:[function(require,module,exports){
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


},{"./PublicLeaguesController":118}],18:[function(require,module,exports){
module.exports = angular.module('loghApp.league.invite.request', [])
  .controller('LeagueInviteRequestController', require('./LeagueInviteRequestController'));

},{"./LeagueInviteRequestController":119}],22:[function(require,module,exports){
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


},{"./PrivateLeaguesController":120}],38:[function(require,module,exports){
module.exports = angular.module('loghApp.admin.games.edit', [])
  .controller('GamesEditController', require('./GamesEditController'));

},{"./GamesEditController":121}],54:[function(require,module,exports){

commangular.eventAspect('@Before(/.*/)', function(processor, $log) {

    return {

        execute : function () {

//            if (CurrentTodo.todo.length === 0) {
//                processor.cancel('Empty todo');
//            }
            //$log.log('Test Aspect');

        }
    }
});
},{}],55:[function(require,module,exports){
/*
 *  Global config for remote services
 */

var ApiConfig =  {
    baseURL: '/api/'
};

module.exports = ApiConfig;

},{}],58:[function(require,module,exports){
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
        var apiUrl = apiConfig.baseURL + "seasons/" + params.seasonId + "/teams/all";
        if (params.leagueId) {
            apiUrl += "?league_id=" + params.leagueId;
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
                messageModel.setMessage(data.message, true);
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
},{}],56:[function(require,module,exports){
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
                  $location.path('/season/' + seasonModel.currentSeasons[0].id + '/my/teams');
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
                  $location.path('/season/' + seasonModel.currentSeasons[0].id + '/my/teams');
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
},{}],59:[function(require,module,exports){
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
},{}],57:[function(require,module,exports){
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
},{}],60:[function(require,module,exports){
var SeasonService = function($http, $log, apiConfig, seasonModel) {

    this.getSeasons = function() {
        var promise = $http.get(apiConfig.baseURL + "seasons")
            .success(function(data) {
                $log.debug("SeasonService: getSeasons success");
                seasonModel.setSeasons(data);
                return data;
            })
            .error(function(data) {
                $log.debug("SeasonService: getSeasons failed");
                return data;
            });
        return promise;
    };

};

SeasonService.$inject = ['$http', '$log', 'apiConfig', 'seasonModel'];
module.exports = SeasonService;
},{}],61:[function(require,module,exports){
var WeekService = function($http, $log, $q, apiConfig, messageModel) {

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

WeekService.$inject = ['$http', '$log', '$q', 'apiConfig', 'messageModel'];
module.exports = WeekService;

},{}],62:[function(require,module,exports){
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
},{}],64:[function(require,module,exports){

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
},{}],65:[function(require,module,exports){
var SeasonModel = function($log) {

  var model = this;

  var seasons = [];
  var currentSeasons = [];
  var loaded = false;

  this.seasons = seasons;
  this.currentSeasons = currentSeasons;
  this.loaded = loaded;

  this.setSeasons = function(seasonsArray) {
    if (!_.isArray(seasonsArray)) return;
    model.seasons = seasonsArray;
    model.currentSeasons = _.filter(seasonsArray, function(season) {
      return season.current;
    });
    model.loaded = true;
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
},{}],66:[function(require,module,exports){
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

},{}],67:[function(require,module,exports){
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

},{}],69:[function(require,module,exports){
var HomeController = function($scope, $log, $location, $modal, weekService, leagueService, messageModel, seasonModel) {

  $scope.currentSeasonId = seasonModel.currentSeasons[0].id;

  $scope.createLeague = function(seasonId) {
        var modalInstance = $modal.open({
            templateUrl: 'modules/private/league/new/league.new.tpl.html',
            controller: 'NewLeagueController',
            resolve: {
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

},{}],68:[function(require,module,exports){

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
},{}],70:[function(require,module,exports){
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

},{}],71:[function(require,module,exports){
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

},{}],72:[function(require,module,exports){
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

},{}],73:[function(require,module,exports){
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

},{}],74:[function(require,module,exports){

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

},{}],75:[function(require,module,exports){

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

},{}],79:[function(require,module,exports){
var PlayController = function($scope, $log, $location, $modal, $state, $stateParams, messageModel, seasonModel, weekService, leagueService) {

  $scope.currentSeasonId = seasonModel.currentSeasons[0].id;

  $scope.seasons = angular.copy(seasonModel.seasons).reverse();

  $scope.selectedSeason = {
    id: parseInt($stateParams.seasonId)
  };

  $scope.teamOptions = { alive: true, dead: true };
  $scope.leagueOptions = { managed: true };

  $scope.query = '';

  $scope.changeSeason = function() {
    var newPath = $location.path().replace(/(\/season\/)\d/, '$1' + $scope.selectedSeason.id);
    $location.path(newPath);
  };

  $scope.myTeams = function() {
    $location.path('/season/' + $stateParams.seasonId + '/my/teams');
  };

  $scope.myLeagues = function() {
    $location.path('/season/' + $stateParams.seasonId + '/my/leagues');
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

},{}],76:[function(require,module,exports){
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


},{}],77:[function(require,module,exports){
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

},{}],78:[function(require,module,exports){
var TeamsController = function($scope, $log, $state, $location, $stateParams) {

    $scope.seasonId = $stateParams.seasonId;

    // pagination
    $scope.currentTeamPage = 1;
    $scope.teamsPerPage = 100;

    $scope.isAliveState = function() {
        return $state.current.name == 'private.teams.alive';
    };

    $scope.hasNoPick = function(team) {
      return team.last_pick_squad.name == 'No Pick';
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

},{}],80:[function(require,module,exports){
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

},{}],82:[function(require,module,exports){
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

},{}],83:[function(require,module,exports){
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

},{}],81:[function(require,module,exports){
var HeaderController = function($scope, $log, $location, $modal, $state, $anchorScroll, weekService, userService, leagueService, userModel, messageModel, seasonModel) {

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

    $scope.currentSeasonId = seasonModel.currentSeasons[0].id;

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

HeaderController.$inject = ['$scope', '$log', '$location', '$modal', '$state', '$anchorScroll', 'weekService', 'userService', 'leagueService', 'userModel', 'messageModel', 'seasonModel'];
module.exports = HeaderController;

},{}],85:[function(require,module,exports){
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

},{}],84:[function(require,module,exports){
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

},{}],86:[function(require,module,exports){
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

},{}],87:[function(require,module,exports){
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

},{}],88:[function(require,module,exports){
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
},{}],89:[function(require,module,exports){

var OffsetFilter = function($log) {
    return function(input, start) {
        start = parseInt(start, 10);
        return input.slice(start);
    };
};

OffsetFilter.$inject = ['$log'];
module.exports = OffsetFilter;

},{}],90:[function(require,module,exports){
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

},{}],92:[function(require,module,exports){
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

},{}],91:[function(require,module,exports){
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

},{}],93:[function(require,module,exports){
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

},{}],97:[function(require,module,exports){
var NewLeagueController = function(weeks, $scope, $log, $modalInstance, weekService, seasonModel) {

    $scope.weeks = weeks.data;

    $scope.seasons = angular.copy(seasonModel.currentSeasons);

    $scope.newLeagueData = {
        name: '',
        nickname: '',
        season_id: seasonModel.currentSeasons[0].id,
        start_week_id: $scope.weeks[0].id,
        public: true,
        elimination: true,
        max_teams_per_user: ''
    };

    $scope.getSeasonWeeks = function() {
      weekService.getAvailableWeeks($scope.newLeagueData.season_id)
        .then(function(response) {
          $scope.weeks = response.data;
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

NewLeagueController.$inject = ['weeks', '$scope', '$log', '$modalInstance', 'weekService', 'seasonModel'];
module.exports = NewLeagueController;

},{}],94:[function(require,module,exports){

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

},{}],99:[function(require,module,exports){
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

},{}],95:[function(require,module,exports){
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

},{}],96:[function(require,module,exports){
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

},{}],98:[function(require,module,exports){
var ViewLeagueController = function(league, leagueTeams, $scope, $log, $modal, $location, userModel, messageModel, userService, weekService, teamService, leagueService) {

  $scope.leagueData = league.data;

  $scope.leagueTeams = leagueTeams.data;

  // pagination
  $scope.currentTeamPage = 1;
  $scope.teamsPerPage = 100;

  $scope.teamOptions = { active: true, inactive: false };

  $scope.teamQuery = '';

  $scope.leagueDropdown = {
    isopen: false
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.leagueDropdown.isopen = !$scope.leagueDropdown.isopen;
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
    return team.last_pick_squad.name == 'No Pick';
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

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("view league controller");
  };
  init();

};

ViewLeagueController.$inject = ['league', 'leagueTeams', '$scope', '$log', '$modal', '$location', 'userModel', 'messageModel', 'userService', 'weekService', 'teamService', 'leagueService'];
module.exports = ViewLeagueController;

},{}],100:[function(require,module,exports){
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

},{}],104:[function(require,module,exports){
var JoinLeaguesController = function($scope, $log, $location, $modal, $stateParams, userModel, messageModel, seasonModel, weekService, leagueService) {

  $scope.currentSeasonId = seasonModel.currentSeasons[0].id;

  $scope.currentSeasons = angular.copy(seasonModel.currentSeasons);

  $scope.selectedSeason = {
    id: parseInt($stateParams.seasonId)
  };

  $scope.leagueOptions = { closed: false };

  $scope.leagueQuery = '';

  $scope.publicLeagues = function() {
    $location.path('/season/' + $stateParams.seasonId + '/leagues/public');
  };

  $scope.privateLeagues = function() {
    $location.path('/season/' + $stateParams.seasonId + '/leagues/private');
  };

  $scope.changeSeason = function() {
    var newPath = $location.path().replace(/(\/season\/)\d/, '$1' + $scope.selectedSeason.id);
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

},{}],101:[function(require,module,exports){
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

},{}],102:[function(require,module,exports){
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

},{}],103:[function(require,module,exports){
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

},{}],105:[function(require,module,exports){
var ManagedLeaguesController = function(managedLeagues, $scope, $log, $location, $modal, messageModel, weekService, leagueService) {

    $scope.managedLeagues = managedLeagues.data;

    $scope.createLeague = function(season) {

      var modalInstance = $modal.open({
        templateUrl: 'modules/private/league/new/league.new.tpl.html',
        controller: 'NewLeagueController',
        resolve: {
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


},{}],106:[function(require,module,exports){
var MyLeaguesController = function(leagues, $scope, $log, $location, $modal, messageModel, weekService, leagueService) {

  $scope.leagues = leagues.data;

  $scope.createLeague = function(season) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/league/new/league.new.tpl.html',
      controller: 'NewLeagueController',
      resolve: {
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


},{}],107:[function(require,module,exports){
var ViewTeamController = function(team, leagueTeams, picks, $scope, $log, $modal, $location, messageModel, userModel, userService, teamService, gameService, pickService) {

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

  $scope.picks = picks.data;

  $scope.teamDropdown = {
    isopen: false
  };

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
    return team.last_pick_squad.name == 'No Pick';
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

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("view team controller");
  };
  init();

};

ViewTeamController.$inject = ['team', 'leagueTeams', 'picks', '$scope', '$log', '$modal', '$location', 'messageModel', 'userModel', 'userService', 'teamService', 'gameService', 'pickService'];
module.exports = ViewTeamController;

},{}],108:[function(require,module,exports){
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

},{}],110:[function(require,module,exports){
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

},{}],109:[function(require,module,exports){
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

},{}],111:[function(require,module,exports){
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

},{}],112:[function(require,module,exports){
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


},{}],113:[function(require,module,exports){
var PlayTeamsController = function(teams, $scope, $log, $stateParams, $location) {

  $scope.teams = teams.data;

  // pagination
  $scope.currentTeamPage = 1;
  $scope.teamsPerPage = 100;

  $scope.showTeam = function(team) {
    $location.path('/season/' + $stateParams.seasonId + '/league/' + team.league.id + '/team/' + team.id);
  };

  $scope.hasNoPick = function(team) {
    return team.last_pick_squad.name == 'No Pick';
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

},{}],114:[function(require,module,exports){
var PickMakeController = function(picks, currentGames, $modalInstance, $scope, $log) {

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
    return startsLabel + game.start_display;
  };

  $scope.hasSquadBeenUsed = function(game, squad) {
    var squadHasBeenUsed = false;
    _.each(picks, function(pick) {
      if (pick.squad.id == squad.id && pick.week_type_id == game.week_type_id) {
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

PickMakeController.$inject = ['picks', 'currentGames', '$modalInstance', '$scope', '$log'];
module.exports = PickMakeController;

},{}],115:[function(require,module,exports){
var AdminGamesController = function(week, games, $scope, $log, $modal, gameService, weekService, messageModel) {

  var completeWeek = function(week) {
    weekService.completeWeek(week)
      .then(function() {
        $scope.weekData.complete = true;
      });
  };

  $scope.weekData = week.data;

  $scope.games = games.data;

  $scope.editGame = function(game) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/admin/games/edit/games.edit.tpl.html',
      controller: 'GamesEditController',
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

  $scope.sendReminder = function(week) {
    weekService.sendReminder(week);
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

AdminGamesController.$inject = ['week', 'games', '$scope', '$log', '$modal', 'gameService', 'weekService', 'messageModel'];
module.exports = AdminGamesController;

},{}],116:[function(require,module,exports){
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
},{}],117:[function(require,module,exports){
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
},{}],118:[function(require,module,exports){

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


},{}],120:[function(require,module,exports){
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


},{}],119:[function(require,module,exports){
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

},{}],121:[function(require,module,exports){
var GamesEditController = function(game, $scope, $modalInstance) {

  $scope.gameData = angular.copy(game);

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

GamesEditController.$inject = ['game', '$scope', '$modalInstance'];
module.exports = GamesEditController;

},{}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvLnRtcC9hcHAtdGVtcGxhdGVzLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvYXBwLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FzcGVjdHMvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vYXBpL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL21vZGVscy9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9jb21tYW5kL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wdWJsaWMvaG9tZS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHVibGljL2FidXNlL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wdWJsaWMvZmFxL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wdWJsaWMvc2lnbmluL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXIvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdXNlci9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS90ZWFtL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3RlYW1zL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3BsYXkvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kdWxlcy9oZWFkZXIvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kdWxlcy9tZXNzYWdlL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL21vZHVsZXMvY29uZmlybS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9tb2R1bGVzL2Zvb3Rlci9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9zZXJ2aWNlL2FwcGxpY2F0aW9uL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2RpcmVjdGl2ZXMvZm9jdXMvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vZGlyZWN0aXZlcy9tYXRjaC9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9kaXJlY3RpdmVzL3JjU3VibWl0L2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2ZpbHRlcnMvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci90ZXJtcy9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS91c2VyL3Jlc2V0L2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9uZXcvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL3ZpZXcvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2VkaXQvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2NvbnRhY3QvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL21lc3NhZ2UvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2pvaW4vaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2ludml0ZS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4vaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9tYW5hZ2UvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9teS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS90ZWFtL3ZpZXcvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdGVhbS9lZGl0L2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3RlYW0vbWVzc2FnZS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS90ZWFtcy9kZWFkL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3RlYW1zL2FsaXZlL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3BsYXkvbGVhZ3Vlcy9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9wbGF5L3RlYW1zL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3BpY2svbWFrZS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9nYW1lcy9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9kaXJlY3RpdmVzL3JjVmVyaWZ5U2V0L2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2RpcmVjdGl2ZXMvcmVxdWlyZWRQYXR0ZXJuL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9wdWJsaWMvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2ludml0ZS9yZXF1ZXN0L2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9wcml2YXRlL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2FkbWluL2dhbWVzL2VkaXQvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vYXNwZWN0cy9UZXN0QXNwZWN0LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FwaS9BcGlDb25maWcuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vYXBpL1RlYW1TZXJ2aWNlLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FwaS9Vc2VyU2VydmljZS5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9hcGkvUGlja1NlcnZpY2UuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vYXBpL0xlYWd1ZVNlcnZpY2UuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vYXBpL1NlYXNvblNlcnZpY2UuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vYXBpL1dlZWtTZXJ2aWNlLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FwaS9HYW1lU2VydmljZS5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9tb2RlbHMvTWVzc2FnZU1vZGVsLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL21vZGVscy9Vc2VyTW9kZWwuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kZWxzL1NlYXNvbk1vZGVsLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2NvbW1hbmQvc2Vzc2lvbi9TaWduaW5Db21tYW5kLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2NvbW1hbmQvc2Vzc2lvbi9TaWdub3V0Q29tbWFuZC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHVibGljL2hvbWUvSG9tZUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vY29tbWFuZC91c2VyL0dldEN1cnJlbnRVc2VyQ29tbWFuZC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHVibGljL2FidXNlL0FidXNlQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHVibGljL2ZhcS9GYXFDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wdWJsaWMvc2lnbmluL1NpZ25pbkNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci9SZWdpc3RlckNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdXNlci9Vc2VyQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvTGVhZ3VlQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9wbGF5L1BsYXlDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvTGVhZ3Vlc0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdGVhbS9UZWFtQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS90ZWFtcy9UZWFtc0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vQWRtaW5Db250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL21vZHVsZXMvbWVzc2FnZS9NZXNzYWdlQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9tb2R1bGVzL2NvbmZpcm0vQ29uZmlybUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kdWxlcy9oZWFkZXIvSGVhZGVyQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9zZXJ2aWNlL2FwcGxpY2F0aW9uL0FwcGxpY2F0aW9uU2VydmljZS5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9tb2R1bGVzL2Zvb3Rlci9Gb290ZXJDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2RpcmVjdGl2ZXMvZm9jdXMvRm9jdXNEaXJlY3RpdmUuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vZGlyZWN0aXZlcy9tYXRjaC9NYXRjaERpcmVjdGl2ZS5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9kaXJlY3RpdmVzL3JjU3VibWl0L1JDU3VibWl0RGlyZWN0aXZlLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2ZpbHRlcnMvT2Zmc2V0RmlsdGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2ZpbHRlcnMvQWN0aXZlVGVhbUZpbHRlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9maWx0ZXJzL09wZW5MZWFndWVGaWx0ZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vZmlsdGVycy9BbGl2ZVRlYW1GaWx0ZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vZmlsdGVycy9NYW5hZ2VkTGVhZ3VlRmlsdGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9uZXcvTmV3TGVhZ3VlQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9maWx0ZXJzL1RpbWVGaWx0ZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2VkaXQvRWRpdExlYWd1ZUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci90ZXJtcy9SZWdpc3RlclRlcm1zQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS91c2VyL3Jlc2V0L1VzZXJSZXNldENvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL3ZpZXcvVmlld0xlYWd1ZUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2NvbnRhY3QvTGVhZ3VlQ29udGFjdENvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL0pvaW5MZWFndWVzQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbWVzc2FnZS9MZWFndWVNZXNzYWdlQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvam9pbi9MZWFndWVKb2luQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlL0xlYWd1ZUludml0ZUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9tYW5hZ2UvTWFuYWdlTGVhZ3Vlc0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9teS9NeUxlYWd1ZXNDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3RlYW0vdmlldy9WaWV3VGVhbUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdGVhbS9lZGl0L0VkaXRUZWFtQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS90ZWFtcy9kZWFkL0RlYWRUZWFtc0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdGVhbS9tZXNzYWdlL1RlYW1NZXNzYWdlQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS90ZWFtcy9hbGl2ZS9BbGl2ZVRlYW1zQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9wbGF5L2xlYWd1ZXMvUGxheUxlYWd1ZXNDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3BsYXkvdGVhbXMvUGxheVRlYW1zQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9waWNrL21ha2UvUGlja01ha2VDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2FkbWluL2dhbWVzL0FkbWluR2FtZXNDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2RpcmVjdGl2ZXMvcmNWZXJpZnlTZXQvUkNWZXJpZnlTZXREaXJlY3RpdmUuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vZGlyZWN0aXZlcy9yZXF1aXJlZFBhdHRlcm4vUmVxdWlyZWRQYXR0ZXJuRGlyZWN0aXZlLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9wdWJsaWMvUHVibGljTGVhZ3Vlc0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL3ByaXZhdGUvUHJpdmF0ZUxlYWd1ZXNDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9pbnZpdGUvcmVxdWVzdC9MZWFndWVJbnZpdGVSZXF1ZXN0Q29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9nYW1lcy9lZGl0L0dhbWVzRWRpdENvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeDdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ2FwcC50ZW1wbGF0ZXMnLCBbJ2NvbW1vbi9tb2R1bGVzL2NvbmZpcm0vY29uZmlybS50cGwuaHRtbCcsICdjb21tb24vbW9kdWxlcy9mb290ZXIvZm9vdGVyLnRwbC5odG1sJywgJ2NvbW1vbi9tb2R1bGVzL2hlYWRlci9oZWFkZXIudHBsLmh0bWwnLCAnY29tbW9uL21vZHVsZXMvbWVzc2FnZS9tZXNzYWdlLnRwbC5odG1sJywgJ2NvbW1vbi90ZW1wbGF0ZXMvbWFzdGVyLnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9hZG1pbi50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvYWRtaW4vZ2FtZXMvYWRtaW4uZ2FtZXMudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2FkbWluL2dhbWVzL2VkaXQvZ2FtZXMuZWRpdC50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2NvbnRhY3QvbGVhZ3VlLmNvbnRhY3QudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9lZGl0L2xlYWd1ZS5lZGl0LnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlL2xlYWd1ZS5pbnZpdGUudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9pbnZpdGUvcmVxdWVzdC9sZWFndWUuaW52aXRlLnJlcXVlc3QudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9qb2luL2xlYWd1ZS5qb2luLnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbGVhZ3VlLnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbWVzc2FnZS9sZWFndWUubWVzc2FnZS50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL25ldy9sZWFndWUubmV3LnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvdmlldy9sZWFndWUudmlldy50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL2xlYWd1ZXMuam9pbi50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL3ByaXZhdGUvbGVhZ3Vlcy5qb2luLnByaXZhdGUudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9wdWJsaWMvbGVhZ3Vlcy5qb2luLnB1YmxpYy50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9sZWFndWVzLnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL21hbmFnZS9sZWFndWVzLm1hbmFnZS50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9teS9sZWFndWVzLm15LnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9waWNrL21ha2UvcGljay5tYWtlLnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9wbGF5L2xlYWd1ZXMvcGxheS5sZWFndWVzLnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9wbGF5L3BsYXkudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL3BsYXkvdGVhbXMvcGxheS50ZWFtcy50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvdGVhbS9lZGl0L3RlYW0uZWRpdC50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvdGVhbS9tZXNzYWdlL3RlYW0ubWVzc2FnZS50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvdGVhbS90ZWFtLnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS90ZWFtL3ZpZXcvdGVhbS52aWV3LnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS90ZWFtcy9hbGl2ZS90ZWFtcy5hbGl2ZS50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvdGVhbXMvZGVhZC90ZWFtcy5kZWFkLnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS90ZWFtcy90ZWFtcy50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvdXNlci9yZXNldC91c2VyLnJlc2V0LnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS91c2VyL3VzZXIudHBsLmh0bWwnLCAnbW9kdWxlcy9wdWJsaWMvYWJ1c2UvYWJ1c2UudHBsLmh0bWwnLCAnbW9kdWxlcy9wdWJsaWMvZmFxL2ZhcS50cGwuaHRtbCcsICdtb2R1bGVzL3B1YmxpYy9ob21lL2hvbWUudHBsLmh0bWwnLCAnbW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXIvcmVnaXN0ZXIudHBsLmh0bWwnLCAnbW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXIvdGVybXMvcmVnaXN0ZXIudGVybXMudHBsLmh0bWwnLCAnbW9kdWxlcy9wdWJsaWMvc2lnbmluL3NpZ25pbi50cGwuaHRtbCddKTtcblxuYW5ndWxhci5tb2R1bGUoXCJjb21tb24vbW9kdWxlcy9jb25maXJtL2NvbmZpcm0udHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJjb21tb24vbW9kdWxlcy9jb25maXJtL2NvbmZpcm0udHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkNvbmZpcm0gQWN0aW9uPC9oND5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxwPnt7bWVzc2FnZX19PC9wPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+Tm88L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNvbmZpcm0oKVxcXCI+WWVzPC9idXR0b24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcImNvbW1vbi9tb2R1bGVzL2Zvb3Rlci9mb290ZXIudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJjb21tb24vbW9kdWxlcy9mb290ZXIvZm9vdGVyLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGlkPVxcXCJtZW51XFxcIj5cXG5cIiArXG4gICAgXCIgIDxoMT48YSBuZy1jbGljaz1cXFwiaG9tZSgpXFxcIj5MT0dIPC9hPjwvaDE+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJsaW5rc1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxzcGFuIHN0eWxlPVxcXCJ0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXFwiPsKpIDIwMTQgRmxleGRldmVsb3BlcnMuY29tIExMQzwvc3Bhbj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJjb21tb24vbW9kdWxlcy9oZWFkZXIvaGVhZGVyLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwiY29tbW9uL21vZHVsZXMvaGVhZGVyL2hlYWRlci50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcIm5hdmJhci1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgICA8YnV0dG9uIGNsYXNzPVxcXCJuYXZiYXItdG9nZ2xlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIG5nLWNsaWNrPVxcXCJpc0NvbGxhcHNlZCA9ICFpc0NvbGxhcHNlZFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICA8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgPGEgY2xhc3M9XFxcIm5hdmJhci1icmFuZFxcXCIgbmctY2xpY2s9XFxcImhvbWUoKVxcXCI+PGI+TE9TRTwvYj5PUjxiPkdPPC9iPkhPTUU8L2E+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY29sbGFwc2U9XFxcImlzQ29sbGFwc2VkXFxcIiBjbGFzcz1cXFwibmF2YmFyLWNvbGxhcHNlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPHVsIG5nLXNob3c9XFxcInVzZXJEYXRhLnVzZXIubG9hZGVkXFxcIiBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGkgbmctY2xhc3M9XFxcInsnYWN0aXZlJzogaXNTdGF0ZShbJ3ByaXZhdGUucGxheS50ZWFtcycsICdwcml2YXRlLnBsYXkubGVhZ3VlcyddKX1cXFwiPjxhIG5nLWNsaWNrPVxcXCJwbGF5KGN1cnJlbnRTZWFzb25JZClcXFwiPk15IFRlYW1zICYgTGVhZ3VlczwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgIDxsaSBuZy1jbGFzcz1cXFwieydhY3RpdmUnOiBpc1N0YXRlKFsncHJpdmF0ZS5sZWFndWVzLmpvaW4ucHVibGljJywgJ3ByaXZhdGUubGVhZ3Vlcy5qb2luLnByaXZhdGUnXSl9XFxcIj48YSBuZy1jbGljaz1cXFwiam9pbkxlYWd1ZShjdXJyZW50U2Vhc29uSWQpXFxcIj5Kb2luIExlYWd1ZTwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgIDxsaT48YSBuZy1jbGljaz1cXFwiY3JlYXRlTGVhZ3VlKGN1cnJlbnRTZWFzb25JZClcXFwiPkNyZWF0ZSBMZWFndWU8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICA8bGk+PGEgbmctY2xpY2s9XFxcImZhcSgpXFxcIj5GQVE8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICA8bGkgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJkcm9wZG93bi10b2dnbGVcXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWNvZyBmYS1mdyBzZXR0aW5ncy1pY29uXFxcIiB0aXRsZT1cXFwiVXNlciBTZXR0aW5nc1xcXCI+PC9pPiA8YiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvYj48L2E+XFxuXCIgK1xuICAgIFwiICAgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGk+PGEgbmctY2xpY2s9XFxcImNvbnRhY3RVcygpXFxcIj5Db250YWN0IFVzPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsaSBjbGFzcz1cXFwiZGl2aWRlclxcXCI+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxpPjxhIG5nLWNsaWNrPVxcXCJ1c2VyUHJvZmlsZSgpXFxcIj5Vc2VyIFByb2ZpbGU8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxpPjxhIG5nLWNsaWNrPVxcXCJzaWdub3V0KClcXFwiPlNpZ24gT3V0PC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L3VsPlxcblwiICtcbiAgICBcIiAgICAgIDwvbGk+XFxuXCIgK1xuICAgIFwiICAgIDwvdWw+XFxuXCIgK1xuICAgIFwiICAgIDx1bCBuZy1zaG93PVxcXCIhdXNlckRhdGEudXNlci5sb2FkZWRcXFwiIGNsYXNzPVxcXCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsaT48YSBuZy1jbGljaz1cXFwiZmFxKClcXFwiPkZBUTwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgIDxsaT48YSBuZy1jbGljaz1cXFwicmVnaXN0ZXIoKVxcXCI+UmVnaXN0ZXI8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICA8bGkgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxhIGNsYXNzPVxcXCJkcm9wZG93bi10b2dnbGVcXFwiIGhyZWY9XFxcIiNcXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCI+U2lnbiBJbjwvc3Ryb25nPjwvYT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnUgcGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlubGluZS1zaWduaW4tZm9ybSBwYW5lbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8Zm9ybSBuYW1lPVxcXCJpbmxpbmVTaWduaW5Gb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBuZy1zdWJtaXQ9XFxcInNpZ25pbih7IGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbC50b0xvd2VyQ2FzZSgpLCBwYXNzd29yZDogY3JlZGVudGlhbHMucGFzc3dvcmQgfSk7ICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWVudmVsb3BlIGZhLWZ3XFxcIj48L2k+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiIHN0eWxlPVxcXCJjdXJzb3I6YXV0bztcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbWFpbFxcXCIgbmctbW9kZWw9XFxcImNyZWRlbnRpYWxzLmVtYWlsXFxcIiBuZy1jbGljaz1cXFwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xcXCIgcmMtdmVyaWZ5LXNldCBhdXRvZm9jdXMgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWtleSBmYS1md1xcXCI+PC9pPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIiBzdHlsZT1cXFwiY3Vyc29yOmF1dG87XFxcIiBwbGFjZWhvbGRlcj1cXFwiUGFzc3dvcmRcXFwiIG5nLW1vZGVsPVxcXCJjcmVkZW50aWFscy5wYXNzd29yZFxcXCIgbmctY2xpY2s9XFxcIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcXFwiIHJjLXZlcmlmeS1zZXQgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8ZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiZm9yZ290LXBhc3N3b3JkIGJ0biBidG4tbGluayBwdWxsLWxlZnRcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCIgbmctY2xpY2s9XFxcInJlc2V0UGFzc3dvcmQoKVxcXCI+Rm9yZ290IFBhc3N3b3JkPzwvYT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJzaWduLWluLWJ0biBidG4gYnRuLXByaW1hcnkgcHVsbC1yaWdodFxcXCIgbmctZGlzYWJsZWQ9XFxcImlubGluZVNpZ25pbkZvcm0uJGludmFsaWRcXFwiPlNpZ24gaW48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cXFwiY2xlYXI6IGJvdGg7XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxocj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJlZ2lzdGVyXFxcIj48YSBuZy1jbGljaz1cXFwicmVnaXN0ZXIoKVxcXCI+RG9uJ3QgaGF2ZSBhbiBhY2NvdW50PyA8c3Ryb25nPlJlZ2lzdGVyPC9zdHJvbmc+PC9hPjwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDwvZm9ybT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2xpPlxcblwiICtcbiAgICBcIiAgICA8L3VsPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcImNvbW1vbi9tb2R1bGVzL21lc3NhZ2UvbWVzc2FnZS50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcImNvbW1vbi9tb2R1bGVzL21lc3NhZ2UvbWVzc2FnZS50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGlzbWlzc2FibGUgYWxlcnQte3ttZXNzYWdlRGF0YS5tZXNzYWdlLnR5cGV9fVxcXCIgbmctc2hvdz1cXFwibWVzc2FnZURhdGEubWVzc2FnZS5sb2FkZWRcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJhbGVydFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIG5nLWNsaWNrPVxcXCJkaXNtaXNzTWVzc2FnZShtZXNzYWdlRGF0YSlcXFwiPiZ0aW1lczs8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIHt7bWVzc2FnZURhdGEubWVzc2FnZS5jb250ZW50fX1cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwiY29tbW9uL3RlbXBsYXRlcy9tYXN0ZXIudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJjb21tb24vdGVtcGxhdGVzL21hc3Rlci50cGwuaHRtbFwiLFxuICAgIFwiPCEtLSBIZWFkZXIgLS0+XFxuXCIgK1xuICAgIFwiPG5hdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1pbnZlcnNlXFxcIiB1aS12aWV3PVxcXCJoZWFkZXJcXFwiPjwvbmF2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiICA8IS0tIE1lc3NhZ2UgLS0+XFxuXCIgK1xuICAgIFwiICA8ZGl2IHVpLXZpZXc9XFxcIm1lc3NhZ2VcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgPCEtLSBDb250ZW50IC0tPlxcblwiICtcbiAgICBcIiAgPGRpdiB1aS12aWV3PVxcXCJjb250ZW50XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8IS0tIEZvb3RlciAtLT5cXG5cIiArXG4gICAgXCI8Zm9vdGVyIGNsYXNzPVxcXCJmb290ZXJcXFwiIHVpLXZpZXc9XFxcImZvb3RlclxcXCI+PC9mb290ZXI+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9hZG1pbi9hZG1pbi50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9hZG1pbi9hZG1pbi50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiB1aS12aWV3PVxcXCJhZG1pbkNvbnRlbnRcXFwiIGNsYXNzPVxcXCJhZG1pbi1jb250ZW50XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2FkbWluL2dhbWVzL2FkbWluLmdhbWVzLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2FkbWluL2dhbWVzL2FkbWluLmdhbWVzLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJnYW1lcy1oZWFkZXItcm93IHJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOSBjb2wtbWQtOVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxoMz5HYW1lcyBmb3Ige3t3ZWVrRGF0YS5kaXNwbGF5fX0gPGJyPlxcblwiICtcbiAgICBcIiAgICA8c21hbGw+Q29tcGxldGU6IHt7d2Vla0RhdGEuY29tcGxldGV9fTwvc21hbGw+PC9oMz5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTMgY29sLW1kLTNcXFwiPlxcblwiICtcbiAgICBcIiAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNvbXBsZXRlLXdlZWstYnRuIGJ0biBidG4tZGFuZ2VyIGJ0bi1zbVxcXCIgbmctY2xpY2s9XFxcImNvbmZpcm1XZWVrQ29tcGxldGUod2Vla0RhdGEpXFxcIj5Db21wbGV0ZSBXZWVrPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwic2VuZC1yZW1pbmRlci1idG4gYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVxcXCIgbmctY2xpY2s9XFxcInNlbmRSZW1pbmRlcih3ZWVrRGF0YSlcXFwiPlNlbmQgUmVtaW5kZXI8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIndlZWstZ2FtZXMgbGlzdC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICA8YSBuZy1yZXBlYXQ9XFxcImdhbWUgaW4gZ2FtZXNcXFwiIG5nLWNsaWNrPVxcXCJlZGl0R2FtZShnYW1lKVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiZ2FtZS1kaXNwbGF5LW5hbWUgY29sLXNtLTYgY29sLW1kLTZcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1jaGVjayBmYS1md1xcXCIgbmctc2hvdz1cXFwiZ2FtZS5jb21wbGV0ZSA9PT0gdHJ1ZVxcXCIgdGl0bGU9XFxcIlBpY2sgY29ycmVjdFxcXCI+PC9pPiB7e2dhbWUuZGlzcGxheX19PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiZ2FtZS1zY29yZSBjb2wtc20tNiBjb2wtbWQtNlxcXCI+e3tnYW1lLnNxdWFkc1swXS5uYW1lfX06IHt7Z2FtZS52aXNpdGluZ19zcXVhZF9zY29yZX19IHwge3tnYW1lLnNxdWFkc1sxXS5uYW1lfX06IHt7Z2FtZS5ob21lX3NxdWFkX3Njb3JlfX08L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2E+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9hZG1pbi9nYW1lcy9lZGl0L2dhbWVzLmVkaXQudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvYWRtaW4vZ2FtZXMvZWRpdC9nYW1lcy5lZGl0LnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5FZGl0IEdhbWU8L2gzPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgPGg0Pnt7Z2FtZURhdGEuZGlzcGxheX19PC9oND5cXG5cIiArXG4gICAgXCIgIDxmb3JtIHN0eWxlPVxcXCJwYWRkaW5nOiAxMHB4O1xcXCIgbmFtZT1cXFwiZWRpdEdhbWVGb3JtXFxcIiBjbGFzcz1cXFwiZWRpdC1nYW1lLWZvcm0gZm9ybS1ob3Jpem9udGFsXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgZm9yPVxcXCJ2aXNpdG9yU2NvcmVcXFwiIGNsYXNzPVxcXCJjb2wtc20tNiBjb250cm9sLWxhYmVsXFxcIj57e2dhbWVEYXRhLnNxdWFkc1swXS5uYW1lfX0gU2NvcmU6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8aW5wdXQgaWQ9XFxcInZpc2l0b3JTY29yZVxcXCIgbmFtZT1cXFwidmlzaXRvclNjb3JlXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwiZ2FtZURhdGEudmlzaXRpbmdfc3F1YWRfc2NvcmVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGZvcj1cXFwiaG9tZVNjb3JlXFxcIiBjbGFzcz1cXFwiY29sLXNtLTYgY29udHJvbC1sYWJlbFxcXCI+e3tnYW1lRGF0YS5zcXVhZHNbMV0ubmFtZX19IFNjb3JlOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGlucHV0IGlkPVxcXCJob21lU2NvcmVcXFwiIG5hbWU9XFxcImhvbWVTY29yZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcImdhbWVEYXRhLmhvbWVfc3F1YWRfc2NvcmVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcImdhbWVEYXRhLmNvbXBsZXRlXFxcIj4gY29tcGxldGVkPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctY2xpY2s9XFxcImVkaXRHYW1lKGdhbWVEYXRhKVxcXCI+VXBkYXRlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvY29udGFjdC9sZWFndWUuY29udGFjdC50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvY29udGFjdC9sZWFndWUuY29udGFjdC50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+Q29udGFjdCBDb21taXNoPC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxmb3JtIG5hbWU9XFxcImNvbnRhY3RGb3JtXFxcIiBjbGFzcz1cXFwiY29udGFjdC1mb3JtIGZvcm0taG9yaXpvbnRhbFxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZT5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IoY29udGFjdEZvcm0ubWVzc2FnZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihjb250YWN0Rm9ybS5tZXNzYWdlKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBmb3I9XFxcIm1lc3NhZ2VcXFwiIGNsYXNzPVxcXCJjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIj5NZXNzYWdlOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDx0ZXh0YXJlYSBpZD1cXFwibWVzc2FnZVxcXCIgbmFtZT1cXFwibWVzc2FnZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIlNlbmQgYSBkaXJlY3QgbWVzc2FnZSB0byB0aGUgY29tbWlzaC4uLlxcXCIgcm93cz1cXFwiM1xcXCIgbWF4bGVuZ3RoPVxcXCIyMDBcXFwiIG5nLW1vZGVsPVxcXCJjb21taXNoTWVzc2FnZVxcXCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoY29udGFjdEZvcm0ubWVzc2FnZSwgJ3JlcXVpcmVkJylcXFwiPlJlcXVpcmVkPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoY29udGFjdEZvcm0ubWVzc2FnZSwgJ21heGxlbmd0aCcpXFxcIj5Ub28gTG9uZzwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihjb250YWN0Rm9ybS5tZXNzYWdlKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZm9ybT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwiY29udGFjdEZvcm0uJHByaXN0aW5lIHx8IGNvbnRhY3RGb3JtLiRpbnZhbGlkXFxcIiBuZy1jbGljaz1cXFwiY29udGFjdENvbW1pc2gobGVhZ3VlRGF0YSwgY29tbWlzaE1lc3NhZ2UpXFxcIj5TZW5kPC9idXR0b24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvZWRpdC9sZWFndWUuZWRpdC50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvZWRpdC9sZWFndWUuZWRpdC50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+RWRpdCBMZWFndWU8L2gzPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgPGZvcm0gbmFtZT1cXFwibGVhZ3VlRm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZT5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXAgbGVhZ3VlLXR5cGUtYnRuLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBsZWFndWUtdHlwZS1idG5cXFwiIG5nLW1vZGVsPVxcXCJsZWFndWVEYXRhLnB1YmxpY1xcXCIgYnRuLXJhZGlvPVxcXCJ0cnVlXFxcIiB1bmNoZWNrYWJsZT5QdWJsaWMgTGVhZ3VlPGJyPjxzcGFuIGNsYXNzPVxcXCJzbWFsbC1ncmF5XFxcIj5bIGFueW9uZSBjYW4gam9pbiBdPC9zcGFuPjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgbGVhZ3VlLXR5cGUtYnRuXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5wdWJsaWNcXFwiIGJ0bi1yYWRpbz1cXFwiZmFsc2VcXFwiIHVuY2hlY2thYmxlPlByaXZhdGUgTGVhZ3VlPGJyPjxzcGFuIGNsYXNzPVxcXCJzbWFsbC1ncmF5XFxcIj5bIGludml0ZSBvbmx5IF08L3NwYW4+PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1zaG93PVxcXCIhbGVhZ3VlRGF0YS5zdGFydGVkXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwIGxlYWd1ZS1mb3JtYXQtYnRuLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBsZWFndWUtZm9ybWF0LWJ0blxcXCIgbmctbW9kZWw9XFxcImxlYWd1ZURhdGEuZWxpbWluYXRpb25cXFwiIGJ0bi1yYWRpbz1cXFwiZmFsc2VcXFwiIHVuY2hlY2thYmxlPkJpZ2dlc3QgTG9zZXI8YnI+PHNwYW4gY2xhc3M9XFxcInNtYWxsLWdyYXlcXFwiPlsgbW9zdCBjb3JyZWN0IHBpY2tzIF08L3NwYW4+PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBsZWFndWUtZm9ybWF0LWJ0blxcXCIgbmctbW9kZWw9XFxcImxlYWd1ZURhdGEuZWxpbWluYXRpb25cXFwiIGJ0bi1yYWRpbz1cXFwidHJ1ZVxcXCIgdW5jaGVja2FibGU+TG9zZU9yR29Ib21lPGJyPjxzcGFuIGNsYXNzPVxcXCJzbWFsbC1ncmF5XFxcIj5bIHNpbmdsZSBlbGltaW5hdGlvbiBdPC9zcGFuPjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1zaG93PVxcXCJsZWFndWVEYXRhLnN0YXJ0ZWRcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiPkxlYWd1ZSBmb3JtYXQ6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHZhbHVlPVxcXCJCaWdnZXN0IExvc2VyIFsgbm8gZWxpbWluYXRpb24gXVxcXCIgbmctc2hvdz1cXFwibGVhZ3VlRGF0YS5lbGltaW5hdGlvbiA9PSBmYWxzZVxcXCIgbmctZGlzYWJsZWQ9XFxcInRydWVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdmFsdWU9XFxcIkxvc2VPckdvSG9tZSBbIHNpbmdsZSBlbGltaW5hdGlvbiBdXFxcIiBuZy1zaG93PVxcXCJsZWFndWVEYXRhLmVsaW1pbmF0aW9uID09IHRydWVcXFwiIG5nLWRpc2FibGVkPVxcXCJ0cnVlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKGxlYWd1ZUZvcm0ubGVhZ3VlTmFtZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihsZWFndWVGb3JtLmxlYWd1ZU5hbWUpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJsZWFndWVOYW1lXFxcIj5MZWFndWUgbmFtZTpcXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihsZWFndWVGb3JtLmxlYWd1ZU5hbWUsICdyZXF1aXJlZCcpXFxcIj5bIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGxlYWd1ZUZvcm0ubGVhZ3VlTmFtZSwgJ21heGxlbmd0aCcpXFxcIj5bIFRvbyBMb25nIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aW5wdXQgaWQ9XFxcImxlYWd1ZU5hbWVcXFwiIG5hbWU9XFxcImxlYWd1ZU5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJsZWFndWVEYXRhLm5hbWVcXFwiIG5nLW1heGxlbmd0aD1cXFwiMzBcXFwiIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihsZWFndWVGb3JtLmxlYWd1ZU5hbWUpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcInNlYXNvblxcXCI+U2Vhc29uOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzZWxlY3QgaWQ9XFxcInNlYXNvblxcXCIgbmFtZT1cXFwic2Vhc29uXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1zaG93PVxcXCIhbGVhZ3VlRGF0YS5zdGFydGVkXFxcIiBuZy1jaGFuZ2U9XFxcImdldFNlYXNvbldlZWtzKClcXFwiIG5nLW1vZGVsPVxcXCJsZWFndWVEYXRhLnNlYXNvbl9pZFxcXCIgbmctb3B0aW9ucz1cXFwic2Vhc29uLmlkIGFzIHNlYXNvbi5uYW1lIGZvciBzZWFzb24gaW4gc2Vhc29uc1xcXCI+PC9zZWxlY3Q+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpbnB1dCBpZD1cXFwic2Vhc29uTmFtZVxcXCIgbmFtZT1cXFwic2Vhc29uTmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctc2hvdz1cXFwibGVhZ3VlRGF0YS5zdGFydGVkXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5zZWFzb25fbmFtZVxcXCIgbmctZGlzYWJsZWQ9XFxcInRydWVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJzdGFydFdlZWtcXFwiPlN0YXJ0IHdlZWs6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNlbGVjdCBpZD1cXFwic3RhcnRXZWVrXFxcIiBuYW1lPVxcXCJzdGFydFdlZWtcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLXNob3c9XFxcIiFsZWFndWVEYXRhLnN0YXJ0ZWRcXFwiIG5nLW1vZGVsPVxcXCJsZWFndWVEYXRhLnN0YXJ0X3dlZWtfaWRcXFwiIG5nLW9wdGlvbnM9XFxcIndlZWsuaWQgYXMgd2Vlay5kaXNwbGF5IGZvciB3ZWVrIGluIHdlZWtzXFxcIj48L3NlbGVjdD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJzdGFydFdlZWtEaXNwbGF5XFxcIiBuYW1lPVxcXCJzdGFydFdlZWtEaXNwbGF5XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1zaG93PVxcXCJsZWFndWVEYXRhLnN0YXJ0ZWRcXFwiIG5nLW1vZGVsPVxcXCJsZWFndWVEYXRhLnN0YXJ0X3dlZWtfZGlzcGxheVxcXCIgbmctZGlzYWJsZWQ9XFxcInRydWVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IobGVhZ3VlRm9ybS5tYXhUZWFtcyksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihsZWFndWVGb3JtLm1heFRlYW1zKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwibWF4VGVhbXNcXFwiPkhvdyBtYW55IHRpbWVzIGNhbiBhIHVzZXIgam9pbjpcXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihsZWFndWVGb3JtLm1heFRlYW1zLCAncmVxdWlyZWQnKVxcXCI+WyBOdW1iZXIgUmVxdWlyZWQgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobGVhZ3VlRm9ybS5tYXhUZWFtcywgJ21pbicpXFxcIj5bIDEgLSAxMCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihsZWFndWVGb3JtLm1heFRlYW1zLCAnbWF4JylcXFwiPlsgMSAtIDEwIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aW5wdXQgaWQ9XFxcIm1heFRlYW1zXFxcIiBuYW1lPVxcXCJtYXhUZWFtc1xcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBwbGFjZWhvbGRlcj1cXFwiQmV0d2VlbiAxIGFuZCAxMFxcXCIgbWluPVxcXCIxXFxcIiBtYXg9XFxcIjEwXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5tYXhfdGVhbXNfcGVyX3VzZXJcXFwiIGxvZ2gtZm9jdXMgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKGxlYWd1ZUZvcm0ubWF4VGVhbXMpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcIm1lc3NhZ2VcXFwiPk1lc3NhZ2VcXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGw+WyBPcHRpb25hbCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHRleHRhcmVhIGlkPVxcXCJtZXNzYWdlXFxcIiBuYW1lPVxcXCJtZXNzYWdlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgYSBtZXNzYWdlIGZvciB5b3UgbGVhZ3VlIGhlcmUuLi5cXFwiIHJvd3M9XFxcIjJcXFwiIG1heGxlbmd0aD1cXFwiNTAwXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5tZXNzYWdlXFxcIj48L3RleHRhcmVhPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9mb3JtPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+Q2FuY2VsPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWluZm8gYnRuLXByaW1hcnlcXFwiIG5nLWRpc2FibGVkPVxcXCJsZWFndWVGb3JtLiRwcmlzdGluZSB8fCBsZWFndWVGb3JtLiRpbnZhbGlkXFxcIiBuZy1jbGljaz1cXFwidXBkYXRlTGVhZ3VlKGxlYWd1ZURhdGEpXFxcIj5VcGRhdGU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9pbnZpdGUvbGVhZ3VlLmludml0ZS50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlL2xlYWd1ZS5pbnZpdGUudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkludml0ZSBGcmllbmRzPC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgbmctc2hvdz1cXFwiIXN0YXJ0V2Vla0NvbXBsZXRlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGZvcm0gbmFtZT1cXFwiaW52aXRlRm9ybVxcXCIgY2xhc3M9XFxcImludml0ZS1mb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IoaW52aXRlRm9ybS5lbWFpbHMpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IoaW52aXRlRm9ybS5lbWFpbHMpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiZW1haWxzXFxcIiBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCI+RW1haWwocyk6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcImVtYWlsc1xcXCIgbmFtZT1cXFwiZW1haWxzXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiU2VwZXJhdGUgZW1haWxzIHdpdGggYSBzcGFjZSBvciBjb21tYS4uLlxcXCIgbmctbW9kZWw9XFxcImludml0YXRpb24uZW1haWxcXFwiIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoaW52aXRlRm9ybS5lbWFpbHMsICdyZXF1aXJlZCcpXFxcIj5SZXF1aXJlZDwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IoaW52aXRlRm9ybS5lbWFpbHMpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihpbnZpdGVGb3JtLm1lc3NhZ2UpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IoaW52aXRlRm9ybS5tZXNzYWdlKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm1lc3NhZ2VcXFwiIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIj5NZXNzYWdlOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHRleHRhcmVhIGlkPVxcXCJtZXNzYWdlXFxcIiBuYW1lPVxcXCJtZXNzYWdlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgYSBvcHRpb25hbCBtZXNzYWdlIHRvIGRlbGl2ZXIgd2l0aCB0aGUgaW52aXRhdGlvbi4uLlxcXCIgcm93cz1cXFwiM1xcXCIgbWF4bGVuZ3RoPVxcXCI0MDBcXFwiIG5nLW1vZGVsPVxcXCJpbnZpdGF0aW9uLm1lc3NhZ2VcXFwiPjwvdGV4dGFyZWE+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJpbnB1dC1lcnJvclxcXCIgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihpbnZpdGVGb3JtLm1lc3NhZ2UsICdtYXhsZW5ndGgnKVxcXCI+VG9vIExvbmc8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKGludml0ZUZvcm0ubWVzc2FnZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJpbnZpdGUtcmVzZXQtYnRuIGJ0biBidG4tZGVmYXVsdCBidG4tYmxvY2tcXFwiIG5nLWNsaWNrPVxcXCJyZXNldEludml0ZSgpXFxcIj5DbGVhcjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImludml0ZS1zZW5kLWJ0biBidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXFxcIiBuZy1kaXNhYmxlZD1cXFwiaW52aXRlRm9ybS4kaW52YWxpZFxcXCIgbmctY2xpY2s9XFxcInNlbmRJbnZpdGUoaW52aXRhdGlvbilcXFwiPlNlbmQ8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiICAgIDxocj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPGRpdiBuZy1zaG93PVxcXCJpc0NvbW1pc2hcXFwiPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJpbnZpdGVzLXRhYlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2LXRhYnNcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGxpIGNsYXNzPVxcXCJhY3RpdmVcXFwiPjxhPkludml0ZXMgWyB7e2ludml0YXRpb25zLmxlbmd0aH19IF08L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICA8L3VsPlxcblwiICtcbiAgICBcIiAgICAgIDxzcGFuIGNsYXNzPVxcXCJjbGljay10by1lZGl0XFxcIiBuZy1zaG93PVxcXCIhc3RhcnRXZWVrQ29tcGxldGVcXFwiPlsgY2xpY2sgaW52aXRlIHRvIGVkaXQgXTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImxlYWd1ZS1pbnZpdGVzXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJsaXN0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxhIG5nLXJlcGVhdD1cXFwiaW52aXRlIGluIGludml0YXRpb25zXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIiBuZy1jbGljaz1cXFwicG9wdWxhdGVJbnZpdGUoaW52aXRlKVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY2hlY2sgZmEtZndcXFwiIG5nLXNob3c9XFxcImludml0ZS5hY2NlcHRlZF9hdFxcXCIgdGl0bGU9XFxcIkFjY2VwdGVkXFxcIj48L2k+IHt7aW52aXRlLmVtYWlsfX0gPHNwYW4gY2xhc3M9XFxcInNlbnQtZGF0ZVxcXCI+PHNwYW4gbmctc2hvdz1cXFwiIWludml0ZS5hY2NlcHRlZF9hdFxcXCI+U2VudCB7e2ludml0ZS51cGRhdGVkX2F0fX08L3NwYW4+PHNwYW4gbmctc2hvdz1cXFwiaW52aXRlLmFjY2VwdGVkX2F0XFxcIj5Kb2luZWQgIHt7aW52aXRlLmFjY2VwdGVkX2F0fX08L3NwYW4+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvYT5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJuby1waWNrcy1hbGVydCBhbGVydCBhbGVydC1pbmZvXFxcIiBuZy1zaG93PVxcXCJpbnZpdGF0aW9ucy5sZW5ndGggPT0gMFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICBObyBpbnZpdGVzXFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DbG9zZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2ludml0ZS9yZXF1ZXN0L2xlYWd1ZS5pbnZpdGUucmVxdWVzdC50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlL3JlcXVlc3QvbGVhZ3VlLmludml0ZS5yZXF1ZXN0LnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5SZXF1ZXN0IEludml0ZTwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8Zm9ybSBuYW1lPVxcXCJyZXF1ZXN0SW52aXRlRm9ybVxcXCIgY2xhc3M9XFxcInJlcXVlc3QtaW52aXRlLWZvcm0gZm9ybS1ob3Jpem9udGFsXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihyZXF1ZXN0SW52aXRlRm9ybS5lbWFpbCksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihyZXF1ZXN0SW52aXRlRm9ybS5lbWFpbCl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgZm9yPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPkZvcjo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8aW5wdXQgaWQ9XFxcImVtYWlsXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciBlbWFpbFxcXCIgbmctbW9kZWw9XFxcImludml0YXRpb24uZW1haWxcXFwiIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJpbnB1dC1lcnJvclxcXCIgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihyZXF1ZXN0SW52aXRlRm9ybS5lbWFpbCwgJ3JlcXVpcmVkJylcXFwiPlJlcXVpcmVkPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IocmVxdWVzdEludml0ZUZvcm0uZW1haWwsICdlbWFpbCcpXFxcIj5JbnZhbGlkIGVtYWlsPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKHJlcXVlc3RJbnZpdGVGb3JtLmVtYWlsKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IocmVxdWVzdEludml0ZUZvcm0ubWVzc2FnZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihyZXF1ZXN0SW52aXRlRm9ybS5tZXNzYWdlKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBmb3I9XFxcIm1lc3NhZ2VcXFwiIGNsYXNzPVxcXCJjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIj5NZXNzYWdlOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDx0ZXh0YXJlYSBpZD1cXFwibWVzc2FnZVxcXCIgbmFtZT1cXFwibWVzc2FnZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVudGVyIGEgb3B0aW9uYWwgbWVzc2FnZSBmb3IgdGhlIGNvbW1pc2ggb2YgdGhlIGxlYWd1ZS4uLlxcXCIgcm93cz1cXFwiM1xcXCIgbWF4bGVuZ3RoPVxcXCIyMDBcXFwiIG5nLW1vZGVsPVxcXCJpbnZpdGF0aW9uLm1lc3NhZ2VcXFwiPjwvdGV4dGFyZWE+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKHJlcXVlc3RJbnZpdGVGb3JtLm1lc3NhZ2UsICdtYXhsZW5ndGgnKVxcXCI+VG9vIExvbmc8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IocmVxdWVzdEludml0ZUZvcm0ubWVzc2FnZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctZGlzYWJsZWQ9XFxcInJlcXVlc3RJbnZpdGVGb3JtLiRpbnZhbGlkXFxcIiBuZy1jbGljaz1cXFwicmVxdWVzdEludml0ZShpbnZpdGF0aW9uKVxcXCI+UmVxdWVzdCBJbnZpdGU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9qb2luL2xlYWd1ZS5qb2luLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9qb2luL2xlYWd1ZS5qb2luLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5Kb2luIExlYWd1ZTwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8Zm9ybSBuYW1lPVxcXCJqb2luRm9ybVxcXCIgY2xhc3M9XFxcImpvaW4tZm9ybSBmb3JtLWhvcml6b250YWxcXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKGpvaW5Gb3JtLnRlYW1OYW1lKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKGpvaW5Gb3JtLnRlYW1OYW1lKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBmb3I9XFxcInRlYW1OYW1lXFxcIiBjbGFzcz1cXFwiY29sLXNtLTQgY29sLW1kLTQgY29udHJvbC1sYWJlbFxcXCI+R2l2ZSB5b3VyIHRlYW0gYSBuYW1lOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTggY29sLW1kLThcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGlucHV0IGlkPVxcXCJ0ZWFtTmFtZVxcXCIgbmFtZT1cXFwidGVhbU5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciBuYW1lLi4uXFxcIiBuZy1tb2RlbD1cXFwibmV3VGVhbURhdGEubmFtZVxcXCIgbmctbWF4bGVuZ3RoPVxcXCIzMFxcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGpvaW5Gb3JtLnRlYW1OYW1lLCAncmVxdWlyZWQnKVxcXCI+UmVxdWlyZWQ8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJpbnB1dC1lcnJvclxcXCIgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihqb2luRm9ybS50ZWFtTmFtZSwgJ21heGxlbmd0aCcpXFxcIj5Ub28gTG9uZzwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihqb2luRm9ybS50ZWFtTmFtZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctZGlzYWJsZWQ9XFxcImpvaW5Gb3JtLiRwcmlzdGluZSB8fCBqb2luRm9ybS4kaW52YWxpZFxcXCIgbmctY2xpY2s9XFxcImpvaW5MZWFndWUobmV3VGVhbURhdGEpXFxcIj5Kb2luPC9idXR0b24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbGVhZ3VlLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9sZWFndWUudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgdWktdmlldz1cXFwibGVhZ3VlQ29udGVudFxcXCIgY2xhc3M9XFxcImxlYWd1ZS1jb250ZW50XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9tZXNzYWdlL2xlYWd1ZS5tZXNzYWdlLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9tZXNzYWdlL2xlYWd1ZS5tZXNzYWdlLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5VcGRhdGUgTWVzc2FnZTwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8Zm9ybSBuYW1lPVxcXCJtZXNzYWdlRm9ybVxcXCIgY2xhc3M9XFxcImxlYWd1ZS1tZXNzYWdlLWZvcm0gZm9ybS1ob3Jpem9udGFsXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihtZXNzYWdlRm9ybS5tZXNzYWdlKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKG1lc3NhZ2VGb3JtLm1lc3NhZ2UpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGZvcj1cXFwibWVzc2FnZVxcXCIgY2xhc3M9XFxcImNvbC1zbS00IGNvbnRyb2wtbGFiZWxcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgTGVhZ3VlIE1lc3NhZ2U6IDxicj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobWVzc2FnZUZvcm0ubWVzc2FnZSwgJ21heGxlbmd0aCcpXFxcIj5bIFRvbyBMb25nIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLThcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPHRleHRhcmVhIGlkPVxcXCJtZXNzYWdlXFxcIiBuYW1lPVxcXCJtZXNzYWdlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgYSBtZXNzYWdlIGZvciB5b3VyIGxlYWd1ZSB0byBzZWUgb3IgbGVhdmUgaXQgYmxhbmsuXFxcIiByb3dzPVxcXCIzXFxcIiBuZy1tYXhsZW5ndGg9XFxcIjUwMFxcXCIgbmctbW9kZWw9XFxcImxlYWd1ZURhdGEubWVzc2FnZVxcXCI+PC90ZXh0YXJlYT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImVtYWlsLWxlYWd1ZS1tZXNzYWdlLWNoZWNrYm94XFxcIiBuZy1zaG93PVxcXCJsZWFndWVEYXRhLmVsaW1pbmF0aW9uXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcIm1lc3NhZ2VPcHRpb25zLnNlbmRBbGl2ZVxcXCI+IGVtYWlsIG1lc3NhZ2UgdG8gYWxpdmUgdGVhbXM8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJlbWFpbC1sZWFndWUtbWVzc2FnZS1jaGVja2JveFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIG5nLW1vZGVsPVxcXCJtZXNzYWdlT3B0aW9ucy5zZW5kQWxsXFxcIj4gZW1haWwgbWVzc2FnZSB0byBhbGwgdGVhbXM8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihtZXNzYWdlRm9ybS5tZXNzYWdlKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZm9ybT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwibWVzc2FnZUZvcm0uJHByaXN0aW5lIHx8IG1lc3NhZ2VGb3JtLiRpbnZhbGlkXFxcIiBuZy1jbGljaz1cXFwidXBkYXRlTWVzc2FnZShsZWFndWVEYXRhLCBtZXNzYWdlT3B0aW9ucy5zZW5kQWxpdmUsIG1lc3NhZ2VPcHRpb25zLnNlbmRBbGwpXFxcIj5VcGRhdGU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9uZXcvbGVhZ3VlLm5ldy50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbmV3L2xlYWd1ZS5uZXcudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkNyZWF0ZSBMZWFndWU8L2gzPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgPGZvcm0gbmFtZT1cXFwibmV3TGVhZ3VlRm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZT5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXAgbGVhZ3VlLXR5cGUtYnRuLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBsZWFndWUtdHlwZS1idG5cXFwiIG5nLW1vZGVsPVxcXCJuZXdMZWFndWVEYXRhLnB1YmxpY1xcXCIgYnRuLXJhZGlvPVxcXCJ0cnVlXFxcIiB1bmNoZWNrYWJsZT5QdWJsaWMgTGVhZ3VlPGJyPjxzcGFuIGNsYXNzPVxcXCJzbWFsbC1ncmF5XFxcIj5bIGFueW9uZSBjYW4gam9pbiBdPC9zcGFuPjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgbGVhZ3VlLXR5cGUtYnRuXFxcIiBuZy1tb2RlbD1cXFwibmV3TGVhZ3VlRGF0YS5wdWJsaWNcXFwiIGJ0bi1yYWRpbz1cXFwiZmFsc2VcXFwiIHVuY2hlY2thYmxlPlByaXZhdGUgTGVhZ3VlPGJyPjxzcGFuIGNsYXNzPVxcXCJzbWFsbC1ncmF5XFxcIj5bIGludml0ZSBvbmx5IF08L3NwYW4+PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwIGxlYWd1ZS1mb3JtYXQtYnRuLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBsZWFndWUtZm9ybWF0LWJ0blxcXCIgbmctbW9kZWw9XFxcIm5ld0xlYWd1ZURhdGEuZWxpbWluYXRpb25cXFwiIGJ0bi1yYWRpbz1cXFwidHJ1ZVxcXCIgdW5jaGVja2FibGU+TG9zZU9yR29Ib21lPGJyPjxzcGFuIGNsYXNzPVxcXCJzbWFsbC1ncmF5XFxcIj5bIHNpbmdsZSBlbGltaW5hdGlvbiBdPC9zcGFuPjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgbGVhZ3VlLWZvcm1hdC1idG5cXFwiIG5nLW1vZGVsPVxcXCJuZXdMZWFndWVEYXRhLmVsaW1pbmF0aW9uXFxcIiBidG4tcmFkaW89XFxcImZhbHNlXFxcIiB1bmNoZWNrYWJsZT5CaWdnZXN0IExvc2VyPGJyPjxzcGFuIGNsYXNzPVxcXCJzbWFsbC1ncmF5XFxcIj5bIG5vIGVsaW1pbmF0aW9uIF08L3NwYW4+PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihuZXdMZWFndWVGb3JtLmxlYWd1ZU5hbWUpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IobmV3TGVhZ3VlRm9ybS5sZWFndWVOYW1lKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwibGVhZ3VlTmFtZVxcXCI+TGVhZ3VlIG5hbWU6XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobmV3TGVhZ3VlRm9ybS5sZWFndWVOYW1lLCAncmVxdWlyZWQnKVxcXCI+WyBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihuZXdMZWFndWVGb3JtLmxlYWd1ZU5hbWUsICdtYXhsZW5ndGgnKVxcXCI+WyBUb28gTG9uZyBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJsZWFndWVOYW1lXFxcIiBuYW1lPVxcXCJsZWFndWVOYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwibmV3TGVhZ3VlRGF0YS5uYW1lXFxcIiBuZy1tYXhsZW5ndGg9XFxcIjMwXFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IobmV3TGVhZ3VlRm9ybS5sZWFndWVOYW1lKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJsZWFndWUtbmlja25hbWUgcm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwibmlja25hbWVcXFwiPk5pY2tuYW1lPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJuaWNrbmFtZVxcXCIgbmFtZT1cXFwibmlja25hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJuZXdMZWFndWVEYXRhLm5pY2tuYW1lXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwic2Vhc29uXFxcIj5TZWFzb246PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNlbGVjdCBpZD1cXFwic2Vhc29uXFxcIiBuYW1lPVxcXCJzZWFzb25cXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLWNoYW5nZT1cXFwiZ2V0U2Vhc29uV2Vla3MoKVxcXCIgbmctbW9kZWw9XFxcIm5ld0xlYWd1ZURhdGEuc2Vhc29uX2lkXFxcIiBuZy1vcHRpb25zPVxcXCJzZWFzb24uaWQgYXMgc2Vhc29uLm5hbWUgZm9yIHNlYXNvbiBpbiBzZWFzb25zXFxcIj48L3NlbGVjdD5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwic3RhcnRXZWVrXFxcIj5TdGFydCB3ZWVrOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzZWxlY3QgaWQ9XFxcInN0YXJ0V2Vla1xcXCIgbmFtZT1cXFwic3RhcnRXZWVrXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwibmV3TGVhZ3VlRGF0YS5zdGFydF93ZWVrX2lkXFxcIiBuZy1vcHRpb25zPVxcXCJ3ZWVrLmlkIGFzIHdlZWsuZGlzcGxheSBmb3Igd2VlayBpbiB3ZWVrc1xcXCI+PC9zZWxlY3Q+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihuZXdMZWFndWVGb3JtLm1heFRlYW1zKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKG5ld0xlYWd1ZUZvcm0ubWF4VGVhbXMpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJtYXhUZWFtc1xcXCI+SG93IG1hbnkgdGltZXMgY2FuIGEgdXNlciBqb2luOlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld0xlYWd1ZUZvcm0ubWF4VGVhbXMsICdyZXF1aXJlZCcpXFxcIj5bIE51bWJlciBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihuZXdMZWFndWVGb3JtLm1heFRlYW1zLCAnbWluJylcXFwiPlsgMSAtIDEwIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld0xlYWd1ZUZvcm0ubWF4VGVhbXMsICdtYXgnKVxcXCI+WyAxIC0gMTAgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpbnB1dCBpZD1cXFwibWF4VGVhbXNcXFwiIG5hbWU9XFxcIm1heFRlYW1zXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIHBsYWNlaG9sZGVyPVxcXCJCZXR3ZWVuIDEgYW5kIDEwXFxcIiBtaW49XFxcIjFcXFwiIG1heD1cXFwiMTBcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJuZXdMZWFndWVEYXRhLm1heF90ZWFtc19wZXJfdXNlclxcXCIgbG9naC1mb2N1cyByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IobmV3TGVhZ3VlRm9ybS5tYXhUZWFtcylcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwibWVzc2FnZVxcXCI+TWVzc2FnZSBbIE9wdGlvbmFsIF08L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8dGV4dGFyZWEgaWQ9XFxcIm1lc3NhZ2VcXFwiIG5hbWU9XFxcIm1lc3NhZ2VcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciBhIG1lc3NhZ2UgZm9yIHlvdXIgbGVhZ3VlIGhlcmUuIFlvdSBjYW4gY2hhbmdlIGl0IGF0IGFueSB0aW1lLlxcXCIgcm93cz1cXFwiMlxcXCIgbWF4bGVuZ3RoPVxcXCI1MDBcXFwiIG5nLW1vZGVsPVxcXCJuZXdMZWFndWVEYXRhLm1lc3NhZ2VcXFwiPjwvdGV4dGFyZWE+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctZGlzYWJsZWQ9XFxcIm5ld0xlYWd1ZUZvcm0uJGludmFsaWRcXFwiIG5nLWNsaWNrPVxcXCJjcmVhdGVMZWFndWUobmV3TGVhZ3VlRGF0YSlcXFwiPkNyZWF0ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL3ZpZXcvbGVhZ3VlLnZpZXcudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL3ZpZXcvbGVhZ3VlLnZpZXcudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcImhlYWRlci1yb3cgcm93XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS03IGNvbC1tZC03XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwIGxlYWd1ZXMtZHJvcGRvd25cXFwiIGRyb3Bkb3duIGlzLW9wZW49XFxcImxlYWd1ZURyb3Bkb3duLmlzb3BlblxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJsZWFndWVzLWJ0bi1saW5rIGJ0biBidG4tbGluayBkcm9wZG93bi10b2dnbGVcXFwiIG5nLWRpc2FibGVkPVxcXCIhaXNDb21taXNoKGxlYWd1ZURhdGEpICYmICFpc0FkbWluKClcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImxlYWd1ZS1uYW1lXFxcIiBuZy1jbGFzcz1cXFwieydkaXNhYmxlZCc6ICFpc0NvbW1pc2gobGVhZ3VlRGF0YSkgJiYgIWlzQWRtaW4oKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXRpbWVzIGljb25cXFwiIHRpdGxlPVxcXCJDbG9zZWQgbGVhZ3VlXFxcIiBuZy1zaG93PVxcXCIhbGVhZ3VlRGF0YS5vcGVuXFxcIj48L2k+XFxuXCIgK1xuICAgIFwiICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtbG9jayBpY29uXFxcIiB0aXRsZT1cXFwiUHJpdmF0ZSBsZWFndWVcXFwiIG5nLXNob3c9XFxcImxlYWd1ZURhdGEub3BlbiAmJiAhbGVhZ3VlRGF0YS5wdWJsaWNcXFwiPjwvaT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS11bmxvY2sgaWNvblxcXCIgdGl0bGU9XFxcIlB1YmxpYyBsZWFndWVcXFwiIG5nLXNob3c9XFxcImxlYWd1ZURhdGEub3BlbiAmJiBsZWFndWVEYXRhLnB1YmxpY1xcXCI+PC9pPlxcblwiICtcbiAgICBcIiAgICAgICAgPHN0cm9uZz57e2xlYWd1ZURhdGEubmFtZX19PC9zdHJvbmc+PC9zcGFuPiA8c3BhbiBuZy1zaG93PVxcXCJpc0NvbW1pc2gobGVhZ3VlRGF0YSkgfHwgaXNBZG1pbigpXFxcIiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnUgbGVhZ3VlLWFjdGlvbnMtbWVudVxcXCIgcm9sZT1cXFwibWVudVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGk+PGEgbmctc2hvdz1cXFwiaXNDb21taXNoKGxlYWd1ZURhdGEpIHx8IGlzQWRtaW4oKVxcXCIgbmctY2xpY2s9XFxcInRvZ2dsZURyb3Bkb3duKCRldmVudCk7ZWRpdExlYWd1ZShsZWFndWVEYXRhKVxcXCI+RWRpdCBsZWFndWU8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaT48YSBuZy1zaG93PVxcXCJpc0NvbW1pc2gobGVhZ3VlRGF0YSlcXFwiIG5nLWNsaWNrPVxcXCJ0b2dnbGVEcm9wZG93bigkZXZlbnQpO3VwZGF0ZU1lc3NhZ2UobGVhZ3VlRGF0YSlcXFwiPkVkaXQgbGVhZ3VlIG1lc3NhZ2U8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaT48YSBuZy1zaG93PVxcXCJpc0NvbW1pc2gobGVhZ3VlRGF0YSlcXFwiIG5nLWNsaWNrPVxcXCJ0b2dnbGVEcm9wZG93bigkZXZlbnQpO2ludml0ZShsZWFndWVEYXRhLmlkLCBpc0NvbW1pc2gobGVhZ3VlRGF0YSksIGxlYWd1ZURhdGEuc3RhcnRfd2Vla19jb21wbGV0ZSlcXFwiPk1hbmFnZSBpbnZpdGF0aW9uczwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgICAgPGxpPjxhIG5nLXNob3c9XFxcImlzQ29tbWlzaChsZWFndWVEYXRhKSAmJiB0ZWFtT3B0aW9ucy5pbmFjdGl2ZSA9PSB0cnVlXFxcIiBuZy1jbGljaz1cXFwidG9nZ2xlRHJvcGRvd24oJGV2ZW50KTtzaG93RGVhY3RpdmF0ZWRUZWFtcyhmYWxzZSk7XFxcIj5IaWRlIGRlYWN0aXZhdGVkIHRlYW1zPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGk+PGEgbmctc2hvdz1cXFwiaXNDb21taXNoKGxlYWd1ZURhdGEpICYmIHRlYW1PcHRpb25zLmluYWN0aXZlID09IGZhbHNlXFxcIiBuZy1jbGljaz1cXFwidG9nZ2xlRHJvcGRvd24oJGV2ZW50KTtzaG93RGVhY3RpdmF0ZWRUZWFtcyh0cnVlKTtcXFwiPlNob3cgZGVhY3RpdmF0ZWQgdGVhbXM8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICA8L3VsPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGgzIHN0eWxlPVxcXCJtYXJnaW4tdG9wOiAwO1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwibGVhZ3VlLW1ldGFcXFwiIG5nLWNsYXNzPVxcXCJ7J3Nob3ctbWV0YSc6ICFsZWFndWVEYXRhLnN0YXJ0X3dlZWtfY29tcGxldGV9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJsZWFndWVEYXRhLmVsaW1pbmF0aW9uXFxcIj5Mb3NlT3JHb0hvbWUgWyBzaW5nbGUgZWxpbWluYXRpb24gXTwvc21hbGw+PHNtYWxsIG5nLXNob3c9XFxcIiFsZWFndWVEYXRhLmVsaW1pbmF0aW9uXFxcIj5CaWdnZXN0IExvc2VyIFsgbm8gZWxpbWluYXRpb24gXTwvc21hbGw+PGJyPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsID57e3N0YXJ0cyhsZWFndWVEYXRhKX19PC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8c21hbGw+Q29tbWlzaCBbIHt7bGVhZ3VlRGF0YS5jb21taXNoX25hbWVzLmpvaW4oJywgJyl9fSBdPC9zbWFsbD48YnI+XFxuXCIgK1xuICAgIFwiICAgICAgPHNtYWxsIGNsYXNzPVxcXCJjbG9zZWQtdGV4dFxcXCIgbmctc2hvdz1cXFwiIWxlYWd1ZURhdGEub3BlblxcXCI+Q0xPU0VEIFRPIE5FVyBURUFNUzwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgIDwvaDM+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS01IGNvbC1tZC01XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJqb2luLWJ0biBidG4gYnRuLXByaW1hcnlcXFwiIG5nLXNob3c9XFxcIiFsZWFndWVEYXRhLnN0YXJ0X3dlZWtfY29tcGxldGVcXFwiIG5nLWNsaWNrPVxcXCJqb2luTGVhZ3VlKGxlYWd1ZURhdGEpXFxcIj5Kb2luPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiaW52aXRlLWJ0biBidG4gYnRuLXByaW1hcnlcXFwiIG5nLXNob3c9XFxcIiFsZWFndWVEYXRhLnN0YXJ0X3dlZWtfY29tcGxldGUgJiYgKGxlYWd1ZURhdGEucHVibGljIHx8IGlzQ29tbWlzaChsZWFndWVEYXRhKSlcXFwiIG5nLWNsaWNrPVxcXCJpbnZpdGUobGVhZ3VlRGF0YS5pZCwgaXNDb21taXNoKGxlYWd1ZURhdGEpLCBsZWFndWVEYXRhLnN0YXJ0X3dlZWtfY29tcGxldGUpXFxcIj5JbnZpdGU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJyZXF1ZXN0LWludml0ZS1idG4gYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1zaG93PVxcXCIhbGVhZ3VlRGF0YS5zdGFydF93ZWVrX2NvbXBsZXRlICYmICFsZWFndWVEYXRhLnB1YmxpYyAmJiAhaXNDb21taXNoKGxlYWd1ZURhdGEpXFxcIiBuZy1jbGljaz1cXFwicmVxdWVzdEludml0ZShsZWFndWVEYXRhKVxcXCI+UmVxdWVzdCBJbnZpdGU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgPGgzIGNsYXNzPVxcXCJsZWFndWUtbWV0YS1yaWdodFxcXCIgbmctc2hvdz1cXFwibGVhZ3VlRGF0YS5zdGFydF93ZWVrX2NvbXBsZXRlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8c21hbGwgbmctc2hvdz1cXFwibGVhZ3VlRGF0YS5lbGltaW5hdGlvblxcXCI+TG9zZU9yR29Ib21lIFsgc2luZ2xlIGVsaW1pbmF0aW9uIF08L3NtYWxsPjxzbWFsbCBuZy1zaG93PVxcXCIhbGVhZ3VlRGF0YS5lbGltaW5hdGlvblxcXCI+QmlnZ2VzdCBMb3NlciBbIG5vIGVsaW1pbmF0aW9uIF08L3NtYWxsPjxicj5cXG5cIiArXG4gICAgXCIgICAgICA8c21hbGw+e3tzdGFydHMobGVhZ3VlRGF0YSl9fTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgIDwvaDM+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJsZWFndWUtbWVzc2FnZSB3ZWxsIHdlbGwtc21cXFwiIG5nLXNob3c9XFxcIiFsZWFndWVEYXRhLnN0YXJ0X3dlZWtfY29tcGxldGUgfHwgaGFzVGVhbUluTGVhZ3VlKCkgfHwgaXNDb21taXNoKGxlYWd1ZURhdGEpXFxcIj48c3Ryb25nPkNvbW1pc2ggdG8gbGVhZ3VlOjwvc3Ryb25nPiA8cCBjbGFzcz1cXFwibGVhZ3VlLW1lc3NhZ2UtdGV4dFxcXCIgbmctc2hvdz1cXFwiIWxlYWd1ZURhdGEubWVzc2FnZSB8fCBsZWFndWVEYXRhLm1lc3NhZ2UubGVuZ3RoID09IDBcXFwiPm5vIG1lc3NhZ2U8L3A+PHAgY2xhc3M9XFxcImxlYWd1ZS1tZXNzYWdlLXRleHRcXFwiIG5nLXNob3c9XFxcImxlYWd1ZURhdGEubWVzc2FnZS5sZW5ndGggPiAwXFxcIiBuZy1iaW5kLWh0bWw9XFxcImxlYWd1ZURhdGEubWVzc2FnZSB8IGxpbmt5OidfYmxhbmsnXFxcIj48L3A+IDxhIG5nLXNob3c9XFxcImlzQ29tbWlzaChsZWFndWVEYXRhKVxcXCIgbmctY2xpY2s9XFxcInVwZGF0ZU1lc3NhZ2UobGVhZ3VlRGF0YSlcXFwiPlsgZWRpdCBdPC9hPjxhIG5nLXNob3c9XFxcIiFpc0NvbW1pc2gobGVhZ3VlRGF0YSkgJiYgaGFzVGVhbUluTGVhZ3VlKClcXFwiIG5nLWNsaWNrPVxcXCJjb250YWN0Q29tbWlzaChsZWFndWVEYXRhKVxcXCI+WyBjb250YWN0IF08L2E+PC9kaXY+XFxuXCIgK1xuICAgIFwiPGhyPlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcInRlYW1zLXRhYlxcXCI+XFxuXCIgK1xuICAgIFwiICA8dWwgY2xhc3M9XFxcIm5hdiBuYXYtdGFic1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxsaSBjbGFzcz1cXFwiYWN0aXZlXFxcIj48YT5UZWFtcyBbIDxzcGFuIG5nLXNob3c9XFxcImxlYWd1ZURhdGEuZWxpbWluYXRpb25cXFwiPnt7bGVhZ3VlRGF0YS5hbGl2ZV90ZWFtX2NvdW50fX0gLyA8L3NwYW4+e3tsZWFndWVEYXRhLnRlYW1fY291bnR9fSBdPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICA8L3VsPlxcblwiICtcbiAgICBcIiAgPGEgY2xhc3M9XFxcImpvaW4tdGltZXNcXFwiIG5nLXNob3c9XFxcIiFsZWFndWVEYXRhLnN0YXJ0X3dlZWtfY29tcGxldGUgJiYgbGVhZ3VlRGF0YS5tYXhfdGVhbXNfcGVyX3VzZXIgPiAxXFxcIiBuZy1jbGljaz1cXFwiam9pbkxlYWd1ZShsZWFndWVEYXRhKVxcXCI+WyBqb2luIHVwIHRvIHt7bGVhZ3VlRGF0YS5tYXhfdGVhbXNfcGVyX3VzZXJ9fVhzIF08L2E+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgY3VzdG9tLXNlYXJjaC1mb3JtIGZpbHRlci1sZWFndWUtam9pblxcXCI+XFxuXCIgK1xuICAgIFwiICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIlNlYXJjaC4uLlxcXCIgbmctbW9kZWw9XFxcInRlYW1RdWVyeVxcXCI+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibGVhZ3VlLWNvbnRhaW5lclxcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJsZWFndWUtdGVhbXMgbGlzdC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxhIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiIG5nLWNsYXNzPVxcXCJ7J2luYWN0aXZlJzogIXRlYW0uYWN0aXZlIHx8ICF0ZWFtLmFsaXZlfVxcXCIgbmctcmVwZWF0PVxcXCJ0ZWFtIGluIGxlYWd1ZVRlYW1zIHwgYWN0aXZlVGVhbUZpbHRlcjp0ZWFtT3B0aW9ucyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0IHwgb2Zmc2V0RmlsdGVyOihjdXJyZW50VGVhbVBhZ2UtMSkqdGVhbXNQZXJQYWdlIHwgbGltaXRUbzp0ZWFtc1BlclBhZ2VcXFwiIG5nLWNsaWNrPVxcXCJzaG93VGVhbSh0ZWFtKVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImxlYWd1ZS1uYW1lIGNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXVzZXIgZmEtZndcXFwiIG5nLXNob3c9XFxcImlzQ29hY2godGVhbSlcXFwiIHRpdGxlPVxcXCJNeSB0ZWFtXFxcIj48L2k+PGkgY2xhc3M9XFxcImZhIGZhLWNoZWNrIGZhLWZ3XFxcIiBuZy1zaG93PVxcXCIhaXNDb2FjaCh0ZWFtKSAmJiBpc0NvbW1pc2gobGVhZ3VlRGF0YSkgJiYgdGVhbS5wYWlkID09IHRydWVcXFwiIHRpdGxlPVxcXCJQYWlkXFxcIj48L2k+IDxzcGFuIGNsYXNzPVxcXCJ0ZWFtLW5hbWVcXFwiIG5nLWNsYXNzPVxcXCJ7J2luYWN0aXZlJzogIXRlYW0uYWN0aXZlIHx8ICF0ZWFtLmFsaXZlfVxcXCI+e3t0ZWFtLm5hbWV9fTwvc3Bhbj48YnI+PHNwYW4gY2xhc3M9XFxcImNvYWNoLW5hbWVcXFwiPkNvYWNoOiB7e2NvYWNoTmFtZSh0ZWFtKX19PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjdXJyZW50LXBpY2tcXFwiIG5nLWNsYXNzPVxcXCJ7J25vLXBpY2snOiBoYXNOb1BpY2sodGVhbSl9XFxcIiBuZy1zaG93PVxcXCJ0ZWFtLmFjdGl2ZVxcXCI+UGljazogWyA8c3BhbiBjbGFzcz1cXFwiY3VycmVudC1sb3Nlci1uYW1lXFxcIj57e3RlYW0ubGFzdF9waWNrX3NxdWFkLm5hbWV9fTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiY3VycmVudC1sb3Nlci1hYmJyZXZcXFwiPnt7dGVhbS5sYXN0X3BpY2tfc3F1YWQuYWJicmV2fX08L3NwYW4+IF08L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbmFjdGl2ZS10ZWFtIGN1cnJlbnQtcGlja1xcXCIgbmctc2hvdz1cXFwiIXRlYW0uYWN0aXZlXFxcIj5UZWFtIGhhcyBiZWVuIGRlYWN0aXZhdGVkPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYmFkZ2VcXFwiPnt7dGVhbS5jb3JyZWN0X3BpY2tzX2NvdW50fX0gbG9zZXI8c3BhbiBuZy1zaG93PVxcXCJ0ZWFtLmNvcnJlY3RfcGlja3NfY291bnQgIT09IDFcXFwiPnM8L3NwYW4+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvYT5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPGRpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtaW5mb1xcXCIgbmctc2hvdz1cXFwiKGxlYWd1ZVRlYW1zIHwgYWN0aXZlVGVhbUZpbHRlcjp0ZWFtT3B0aW9ucyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0KS5sZW5ndGggPT0gMFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgTm8gdGVhbXMgZm91bmRcXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImxlYWd1ZS10ZWFtcy1wYWdpbmF0aW9uXFxcIiBuZy1zaG93PVxcXCJsZWFndWVUZWFtcy5sZW5ndGggPiB0ZWFtc1BlclBhZ2UgJiYgKGxlYWd1ZVRlYW1zIHwgYWN0aXZlVGVhbUZpbHRlcjp0ZWFtT3B0aW9ucyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0KS5sZW5ndGggPiAwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8cGFnaW5hdGlvbiBib3VuZGFyeS1saW5rcz1cXFwidHJ1ZVxcXCIgbWF4LXNpemU9XFxcIjRcXFwiIHRvdGFsLWl0ZW1zPVxcXCIobGVhZ3VlVGVhbXMgfCBhY3RpdmVUZWFtRmlsdGVyOnRlYW1PcHRpb25zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aFxcXCIgaXRlbXMtcGVyLXBhZ2U9XFxcInRlYW1zUGVyUGFnZVxcXCIgbmctbW9kZWw9XFxcImN1cnJlbnRUZWFtUGFnZVxcXCIgY2xhc3M9XFxcInBhZ2luYXRpb24tbWRcXFwiIHByZXZpb3VzLXRleHQ9XFxcIiZsc2FxdW87XFxcIiBuZXh0LXRleHQ9XFxcIiZyc2FxdW87XFxcIiBmaXJzdC10ZXh0PVxcXCImbGFxdW87XFxcIiBsYXN0LXRleHQ9XFxcIiZyYXF1bztcXFwiPjwvcGFnaW5hdGlvbj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9sZWFndWVzLmpvaW4udHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL2xlYWd1ZXMuam9pbi50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwiam9pbi1sZWFndWVzLWhlYWRlci1yb3cgcm93XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS05IGNvbC1tZC05XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGgzPkpvaW4gYSBsZWFndWUuLi48L2gzPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMyBjb2wtbWQtM1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImpvaW4tbGVhZ3Vlcy1idG4tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY3JlYXRlLWxlYWd1ZS1idG4gYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1jbGljaz1cXFwiY3JlYXRlTGVhZ3VlKGN1cnJlbnRTZWFzb25JZClcXFwiPkNyZWF0ZSBMZWFndWU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8aHI+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwiam9pbi1sZWFndWVzLXRhYnNcXFwiPlxcblwiICtcbiAgICBcIiAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2LXRhYnNcXFwiPlxcblwiICtcbiAgICBcIiAgICA8bGkgbmctY2xhc3M9XFxcInsnYWN0aXZlJzogaXNQdWJsaWMoKX1cXFwiIG5nLWNsaWNrPVxcXCJyZXNldFNlYXJjaCgpXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YSBuZy1jbGljaz1cXFwicHVibGljTGVhZ3VlcygpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtdW5sb2NrIGZhLWZ3XFxcIiB0aXRsZT1cXFwiUHVibGljIGxlYWd1ZXNcXFwiPjwvaT4gUHVibGljIDxzcGFuIGNsYXNzPVxcXCJsZWFndWVzXFxcIj5MZWFndWVzPC9zcGFuPjwvYT5cXG5cIiArXG4gICAgXCIgICAgPC9saT5cXG5cIiArXG4gICAgXCIgICAgPGxpIG5nLWNsYXNzPVxcXCJ7J2FjdGl2ZSc6ICFpc1B1YmxpYygpfVxcXCIgbmctY2xpY2s9XFxcInJlc2V0U2VhcmNoKClcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxhIG5nLWNsaWNrPVxcXCJwcml2YXRlTGVhZ3VlcygpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtbG9jayBmYS1md1xcXCIgdGl0bGU9XFxcIlByaXZhdGUgbGVhZ3Vlc1xcXCI+PC9pPiBQcml2YXRlIDxzcGFuIGNsYXNzPVxcXCJsZWFndWVzXFxcIj5MZWFndWVzPC9zcGFuPjwvYT5cXG5cIiArXG4gICAgXCIgICAgPC9saT5cXG5cIiArXG4gICAgXCIgIDwvdWw+XFxuXCIgK1xuICAgIFwiICA8c2VsZWN0IGNsYXNzPVxcXCJzZWFzb25zIGZvcm0tY29udHJvbFxcXCIgbmctY2hhbmdlPVxcXCJjaGFuZ2VTZWFzb24oKVxcXCIgbmctbW9kZWw9XFxcInNlbGVjdGVkU2Vhc29uLmlkXFxcIiBuZy1vcHRpb25zPVxcXCJjdXJyZW50U2Vhc29uLmlkIGFzIGN1cnJlbnRTZWFzb24ubmFtZSBmb3IgY3VycmVudFNlYXNvbiBpbiBjdXJyZW50U2Vhc29uc1xcXCI+PC9zZWxlY3Q+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgY3VzdG9tLXNlYXJjaC1mb3JtIGZpbHRlci1sZWFndWUtam9pblxcXCI+XFxuXCIgK1xuICAgIFwiICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIlNlYXJjaC4uLlxcXCIgbmctbW9kZWw9XFxcImxlYWd1ZVF1ZXJ5XFxcIj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8IS0tIHBsYWNlaG9sZGVyIGZvciBwdWJsaWMgYW5kIHByaXZhdGUgbGVhZ3VlcyAtLT5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJsZWFndWVzLWNvbnRlbnRcXFwiIHVpLXZpZXc9XFxcImpvaW5MZWFndWVzQ29udGVudFxcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4vcHJpdmF0ZS9sZWFndWVzLmpvaW4ucHJpdmF0ZS50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4vcHJpdmF0ZS9sZWFndWVzLmpvaW4ucHJpdmF0ZS50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwicHJpdmF0ZS1sZWFndWVzIGxpc3QtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICA8YSBuZy1yZXBlYXQ9XFxcImxlYWd1ZSBpbiBwcml2YXRlTGVhZ3VlcyB8IG9wZW5MZWFndWVGaWx0ZXI6bGVhZ3VlT3B0aW9ucyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0IHwgb2Zmc2V0RmlsdGVyOihjdXJyZW50TGVhZ3VlUGFnZS0xKSpsZWFndWVzUGVyUGFnZSB8IGxpbWl0VG86bGVhZ3Vlc1BlclBhZ2VcXFwiIG5nLWNsaWNrPVxcXCJzaG93TGVhZ3VlKGxlYWd1ZSlcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZWFndWUtbmFtZSBjb2wtc20tNiBjb2wtbWQtNlxcXCIgbmctY2xhc3M9XFxcInsnY2xvc2VkJzogIWxlYWd1ZS5vcGVufVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXRpbWVzIGZhLWZ3XFxcIiB0aXRsZT1cXFwiQ2xvc2VkIGxlYWd1ZVxcXCIgbmctc2hvdz1cXFwiIWxlYWd1ZS5vcGVuXFxcIj48L2k+IHt7bGVhZ3VlLm5hbWV9fTxicj48c3BhbiBjbGFzcz1cXFwidGVhbS1jb3VudCBsZWFndWUtY29tbWlzaFxcXCI+Q29tbWlzaDoge3tsZWFndWUuY29tbWlzaF9uYW1lcy5qb2luKCcsICcpfX08L3NwYW4+PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJwcml2YXRlLWxlYWd1ZS1tZXRhXFxcIj48c3BhbiBuZy1zaG93PVxcXCJsZWFndWUuZWxpbWluYXRpb25cXFwiPjxzcGFuIGNsYXNzPVxcXCJsb3Nlb3Jnb2hvbWVcXFwiPkxvc2VPckdvSG9tZTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwibG9naFxcXCI+TE9HSDwvc3Bhbj4gWyBzaW5nbGUgZWxpbWluYXRpb24gXTwvc3Bhbj48c3BhbiBuZy1zaG93PVxcXCIhbGVhZ3VlLmVsaW1pbmF0aW9uXFxcIj5CaWdnZXN0IExvc2VyIFsgbm8gZWxpbWluYXRpb24gXTwvc3Bhbj48YnI+U3RhcnRzIHt7bGVhZ3VlLnN0YXJ0X3dlZWt9fTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJhZGdlXFxcIj57e2xlYWd1ZS50ZWFtX2NvdW50fX0gdGVhbTxzcGFuIG5nLXNob3c9XFxcImxlYWd1ZS50ZWFtX2NvdW50ICE9PSAxXFxcIj5zPC9zcGFuPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2E+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwicHJpdmF0ZS1sZWFndWUtcGFnaW5hdGlvblxcXCIgbmctc2hvdz1cXFwicHJpdmF0ZUxlYWd1ZXMubGVuZ3RoID4gbGVhZ3Vlc1BlclBhZ2UgJiYgKHByaXZhdGVMZWFndWVzIHwgb3BlbkxlYWd1ZUZpbHRlcjpsZWFndWVPcHRpb25zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aCA+IDBcXFwiPlxcblwiICtcbiAgICBcIiAgICA8cGFnaW5hdGlvbiBib3VuZGFyeS1saW5rcz1cXFwidHJ1ZVxcXCIgbWF4LXNpemU9XFxcIjRcXFwiIHRvdGFsLWl0ZW1zPVxcXCIocHJpdmF0ZUxlYWd1ZXMgfCBvcGVuTGVhZ3VlRmlsdGVyOmxlYWd1ZU9wdGlvbnMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCkubGVuZ3RoXFxcIiBpdGVtcy1wZXItcGFnZT1cXFwibGVhZ3Vlc1BlclBhZ2VcXFwiIG5nLW1vZGVsPVxcXCJjdXJyZW50TGVhZ3VlUGFnZVxcXCIgY2xhc3M9XFxcInBhZ2luYXRpb24tbWRcXFwiIHByZXZpb3VzLXRleHQ9XFxcIiZsc2FxdW87XFxcIiBuZXh0LXRleHQ9XFxcIiZyc2FxdW87XFxcIiBmaXJzdC10ZXh0PVxcXCImbGFxdW87XFxcIiBsYXN0LXRleHQ9XFxcIiZyYXF1bztcXFwiPjwvcGFnaW5hdGlvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1pbmZvXFxcIiBuZy1zaG93PVxcXCIocHJpdmF0ZUxlYWd1ZXMgfCBvcGVuTGVhZ3VlRmlsdGVyOmxlYWd1ZU9wdGlvbnMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCkubGVuZ3RoID09IDBcXFwiPlxcblwiICtcbiAgICBcIiAgTm8gbGVhZ3VlcyBmb3VuZFxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL3B1YmxpYy9sZWFndWVzLmpvaW4ucHVibGljLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9wdWJsaWMvbGVhZ3Vlcy5qb2luLnB1YmxpYy50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwicHVibGljLWxlYWd1ZXMgbGlzdC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxhIG5nLXJlcGVhdD1cXFwibGVhZ3VlIGluIHB1YmxpY0xlYWd1ZXMgfCBvcGVuTGVhZ3VlRmlsdGVyOmxlYWd1ZU9wdGlvbnMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCB8IG9mZnNldEZpbHRlcjooY3VycmVudExlYWd1ZVBhZ2UtMSkqbGVhZ3Vlc1BlclBhZ2UgfCBsaW1pdFRvOmxlYWd1ZXNQZXJQYWdlXFxcIiBuZy1jbGljaz1cXFwic2hvd0xlYWd1ZShsZWFndWUpXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGVhZ3VlLW5hbWUgY29sLXNtLTYgY29sLW1kLTZcXFwiIG5nLWNsYXNzPVxcXCJ7J2Nsb3NlZCc6ICFsZWFndWUub3Blbn1cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS10aW1lcyBmYS1md1xcXCIgdGl0bGU9XFxcIkNsb3NlZCBsZWFndWVcXFwiIG5nLXNob3c9XFxcIiFsZWFndWUub3BlblxcXCI+PC9pPiB7e2xlYWd1ZS5uYW1lfX08YnI+PHNwYW4gY2xhc3M9XFxcInRlYW0tY291bnQgbGVhZ3VlLWNvbW1pc2hcXFwiPkNvbW1pc2g6IHt7bGVhZ3VlLmNvbW1pc2hfbmFtZXMuam9pbignLCAnKX19PC9zcGFuPjwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInB1YmxpYy1sZWFndWUtbWV0YVxcXCI+PHNwYW4gbmctc2hvdz1cXFwibGVhZ3VlLmVsaW1pbmF0aW9uXFxcIj48c3BhbiBjbGFzcz1cXFwibG9zZW9yZ29ob21lXFxcIj5Mb3NlT3JHb0hvbWU8L3NwYW4+PHNwYW4gY2xhc3M9XFxcImxvZ2hcXFwiPkxPR0g8L3NwYW4+IFsgc2luZ2xlIGVsaW1pbmF0aW9uIF08L3NwYW4+PHNwYW4gbmctc2hvdz1cXFwiIWxlYWd1ZS5lbGltaW5hdGlvblxcXCI+QmlnZ2VzdCBMb3NlciBbIG5vIGVsaW1pbmF0aW9uIF08L3NwYW4+PGJyPlN0YXJ0cyB7e2xlYWd1ZS5zdGFydF93ZWVrfX08L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJiYWRnZVxcXCI+e3tsZWFndWUudGVhbV9jb3VudH19IHRlYW08c3BhbiBuZy1zaG93PVxcXCJsZWFndWUudGVhbV9jb3VudCAhPT0gMVxcXCI+czwvc3Bhbj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9hPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcInB1YmxpYy1sZWFndWUtcGFnaW5hdGlvblxcXCIgbmctc2hvdz1cXFwicHVibGljTGVhZ3Vlcy5sZW5ndGggPiBsZWFndWVzUGVyUGFnZSAmJiAocHVibGljTGVhZ3VlcyB8IG9wZW5MZWFndWVGaWx0ZXI6bGVhZ3VlT3B0aW9ucyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0KS5sZW5ndGggPiAwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPHBhZ2luYXRpb24gYm91bmRhcnktbGlua3M9XFxcInRydWVcXFwiIG1heC1zaXplPVxcXCI0XFxcIiB0b3RhbC1pdGVtcz1cXFwiKHB1YmxpY0xlYWd1ZXMgfCBvcGVuTGVhZ3VlRmlsdGVyOmxlYWd1ZU9wdGlvbnMgfGZpbHRlcjpzZWFyY2g6c3RyaWN0KS5sZW5ndGhcXFwiIGl0ZW1zLXBlci1wYWdlPVxcXCJsZWFndWVzUGVyUGFnZVxcXCIgbmctbW9kZWw9XFxcImN1cnJlbnRMZWFndWVQYWdlXFxcIiBjbGFzcz1cXFwicGFnaW5hdGlvbi1tZFxcXCIgcHJldmlvdXMtdGV4dD1cXFwiJmxzYXF1bztcXFwiIG5leHQtdGV4dD1cXFwiJnJzYXF1bztcXFwiIGZpcnN0LXRleHQ9XFxcIiZsYXF1bztcXFwiIGxhc3QtdGV4dD1cXFwiJnJhcXVvO1xcXCI+PC9wYWdpbmF0aW9uPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWluZm9cXFwiIG5nLXNob3c9XFxcIihwdWJsaWNMZWFndWVzIHwgb3BlbkxlYWd1ZUZpbHRlcjpsZWFndWVPcHRpb25zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aCA9PSAwXFxcIj5cXG5cIiArXG4gICAgXCIgIE5vIGxlYWd1ZXMgZm91bmRcXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvbGVhZ3Vlcy50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2xlYWd1ZXMudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgdWktdmlldz1cXFwibGVhZ3Vlc0NvbnRlbnRcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9tYW5hZ2UvbGVhZ3Vlcy5tYW5hZ2UudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9tYW5hZ2UvbGVhZ3Vlcy5tYW5hZ2UudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1hbmFnZS1sZWFndWVzLWhlYWRlci1yb3cgcm93XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS05IGNvbC1tZC05XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGgzPkkgbWFuYWdlIHRoZXNlIGxlYWd1ZXMuLi48L2gzPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMyBjb2wtbWQtM1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcIm1hbmFnZS1sZWFndWVzLWJ0bi1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjcmVhdGUtbGVhZ3VlLWJ0biBidG4gYnRuLXByaW1hcnlcXFwiIG5nLWNsaWNrPVxcXCJjcmVhdGVMZWFndWUoc2Vhc29uKVxcXCI+Q3JlYXRlIExlYWd1ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxocj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8IS0taWYgeW91IGhhdmUgbWFuYWdlZCBsZWFndWVzIChpLmUuIGlmIHlvdSdyZSBhIGNvbW1pc2gpLS0+XFxuXCIgK1xuICAgIFwiPGRpdiBuZy1zaG93PVxcXCJtYW5hZ2VkTGVhZ3Vlcy5sZW5ndGggPiAwXFxcIiBjbGFzcz1cXFwibGVhZ3Vlcy1jb250YWluZXJcXFwiPlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJtYW5hZ2VkLWxlYWd1ZXMgbGlzdC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8YSBuZy1yZXBlYXQ9XFxcImxlYWd1ZSBpbiBtYW5hZ2VkTGVhZ3VlcyB8IG9mZnNldEZpbHRlcjooY3VycmVudExlYWd1ZVBhZ2UtMSkqbGVhZ3Vlc1BlclBhZ2UgfCBsaW1pdFRvOmxlYWd1ZXNQZXJQYWdlXFxcIiBuZy1jbGljaz1cXFwidmlld0xlYWd1ZShsZWFndWUpXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZWFndWUtbmFtZSBjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXRpbWVzIGZhLWZ3XFxcIiB0aXRsZT1cXFwiTXkgQ2xvc2VkIGxlYWd1ZVxcXCIgbmctc2hvdz1cXFwiIWxlYWd1ZS5vcGVuXFxcIj48L2k+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXVubG9jayBmYS1md1xcXCIgdGl0bGU9XFxcIk15IFB1YmxpYyBsZWFndWVcXFwiIG5nLXNob3c9XFxcImxlYWd1ZS5vcGVuICYmIGxlYWd1ZS5wdWJsaWNcXFwiPjwvaT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtbG9jayBmYS1md1xcXCIgdGl0bGU9XFxcIk15IFByaXZhdGUgbGVhZ3VlXFxcIiBuZy1zaG93PVxcXCJsZWFndWUub3BlbiAmJiAhbGVhZ3VlLnB1YmxpY1xcXCI+PC9pPiB7e2xlYWd1ZS5uYW1lfX08L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInN0YXJ0LXdlZWtcXFwiPnt7c3RhcnRzKGxlYWd1ZSl9fTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJiYWRnZVxcXCI+e3tsZWFndWUudGVhbV9jb3VudH19IHRlYW1zPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvYT5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiICAgIDwhLS1keW5hbWljIHBhZ2luYXRpb24tLT5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwibWFuYWdlLWxlYWd1ZS1wYWdpbmF0aW9uXFxcIiBuZy1zaG93PVxcXCJtYW5hZ2VkTGVhZ3Vlcy5sZW5ndGggPiBsZWFndWVzUGVyUGFnZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8cGFnaW5hdGlvbiBib3VuZGFyeS1saW5rcz1cXFwidHJ1ZVxcXCIgbWF4LXNpemU9XFxcIjRcXFwiIHRvdGFsLWl0ZW1zPVxcXCJtYW5hZ2VkTGVhZ3Vlcy5sZW5ndGhcXFwiIGl0ZW1zLXBlci1wYWdlPVxcXCJsZWFndWVzUGVyUGFnZVxcXCIgbmctbW9kZWw9XFxcImN1cnJlbnRMZWFndWVQYWdlXFxcIiBjbGFzcz1cXFwicGFnaW5hdGlvbi1tZFxcXCIgcHJldmlvdXMtdGV4dD1cXFwiJmxzYXF1bztcXFwiIG5leHQtdGV4dD1cXFwiJnJzYXF1bztcXFwiIGZpcnN0LXRleHQ9XFxcIiZsYXF1bztcXFwiIGxhc3QtdGV4dD1cXFwiJnJhcXVvO1xcXCI+PC9wYWdpbmF0aW9uPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBzdHlsZT1cXFwiY2xlYXI6IGJvdGg7XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8IS0taWYgeW91IGhhdmUgbm8gbWFuYWdlZCBsZWFndWVzLS0+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtaW5mb1xcXCIgbmctc2hvdz1cXFwibWFuYWdlZExlYWd1ZXMubGVuZ3RoID09IDBcXFwiPlxcblwiICtcbiAgICBcIiAgWW91IGFyZSBub3QgdGhlIGNvbW1pc2ggb2YgYW55IGxlYWd1ZXMuIDxhIGNsYXNzPVxcXCJhbGVydC1saW5rXFxcIiBuZy1jbGljaz1cXFwiY3JlYXRlTGVhZ3VlKHNlYXNvbilcXFwiPkNyZWF0ZSBvbmU8L2E+IGFuZCBpbnZpdGUgYWxsIHlvdXIgZnJpZW5kcy5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvbXkvbGVhZ3Vlcy5teS50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL215L2xlYWd1ZXMubXkudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm15LWxlYWd1ZXMtaGVhZGVyLXJvdyByb3dcXFwiPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTkgY29sLW1kLTlcXFwiPlxcblwiICtcbiAgICBcIiAgICA8aDM+SSBhbSBpbiB0aGVzZSBsZWFndWVzLi4uPC9oMz5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTMgY29sLW1kLTNcXFwiPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJteS1sZWFndWVzLWJ0bi1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJqb2luLWxlYWd1ZS1idG4gYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1jbGljaz1cXFwiam9pbkxlYWd1ZShzZWFzb24pXFxcIj5Kb2luIExlYWd1ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxocj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8ZGl2IG5nLXNob3c9XFxcImxlYWd1ZXMubGVuZ3RoID4gMFxcXCIgY2xhc3M9XFxcImxlYWd1ZXMtY29udGFpbmVyXFxcIj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcIm15LWxlYWd1ZXMgbGlzdC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxhIG5nLXJlcGVhdD1cXFwibGVhZ3VlIGluIGxlYWd1ZXMgfCBvZmZzZXRGaWx0ZXI6KGN1cnJlbnRMZWFndWVQYWdlLTEpKmxlYWd1ZXNQZXJQYWdlIHwgbGltaXRUbzpsZWFndWVzUGVyUGFnZVxcXCIgbmctY2xpY2s9XFxcInZpZXdMZWFndWUobGVhZ3VlKVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImxlYWd1ZS1uYW1lIGNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXRpbWVzIGZhLWZ3XFxcIiB0aXRsZT1cXFwiTXkgQ2xvc2VkIGxlYWd1ZVxcXCIgbmctc2hvdz1cXFwiIWxlYWd1ZS5vcGVuXFxcIj48L2k+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS11bmxvY2sgZmEtZndcXFwiIHRpdGxlPVxcXCJNeSBQdWJsaWMgbGVhZ3VlXFxcIiBuZy1zaG93PVxcXCJsZWFndWUub3BlbiAmJiBsZWFndWUucHVibGljXFxcIj48L2k+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1sb2NrIGZhLWZ3XFxcIiB0aXRsZT1cXFwiTXkgUHJpdmF0ZSBsZWFndWVcXFwiIG5nLXNob3c9XFxcImxlYWd1ZS5vcGVuICYmICFsZWFndWUucHVibGljXFxcIj48L2k+IHt7bGVhZ3VlLm5hbWV9fTwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwic3RhcnQtd2Vla1xcXCI+e3tzdGFydHMobGVhZ3VlKX19PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYmFkZ2VcXFwiPnt7bGVhZ3VlLnRlYW1fY291bnR9fSB0ZWFtczwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2E+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcIm15LWxlYWd1ZS1wYWdpbmF0aW9uXFxcIiBuZy1zaG93PVxcXCJsZWFndWVzLmxlbmd0aCA+IGxlYWd1ZXNQZXJQYWdlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPHBhZ2luYXRpb24gYm91bmRhcnktbGlua3M9XFxcInRydWVcXFwiIG1heC1zaXplPVxcXCI0XFxcIiB0b3RhbC1pdGVtcz1cXFwibGVhZ3Vlcy5sZW5ndGhcXFwiIGl0ZW1zLXBlci1wYWdlPVxcXCJsZWFndWVzUGVyUGFnZVxcXCIgbmctbW9kZWw9XFxcImN1cnJlbnRMZWFndWVQYWdlXFxcIiBjbGFzcz1cXFwicGFnaW5hdGlvbi1tZFxcXCIgcHJldmlvdXMtdGV4dD1cXFwiJmxzYXF1bztcXFwiIG5leHQtdGV4dD1cXFwiJnJzYXF1bztcXFwiIGZpcnN0LXRleHQ9XFxcIiZsYXF1bztcXFwiIGxhc3QtdGV4dD1cXFwiJnJhcXVvO1xcXCI+PC9wYWdpbmF0aW9uPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IHN0eWxlPVxcXCJjbGVhcjogYm90aDtcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjwhLS1pZiB5b3UgaGF2ZSBubyBsZWFndWVzLS0+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtaW5mb1xcXCIgbmctc2hvdz1cXFwibGVhZ3Vlcy5sZW5ndGggPT0gMFxcXCI+XFxuXCIgK1xuICAgIFwiICBZb3UgYXJlIGluIG5vIGxlYWd1ZXMuIDxhIGNsYXNzPVxcXCJhbGVydC1saW5rXFxcIiBuZy1jbGljaz1cXFwiam9pbkxlYWd1ZShzZWFzb24pXFxcIj5Kb2luPC9hPiBvbmUgdG9kYXkuXFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9waWNrL21ha2UvcGljay5tYWtlLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL3BpY2svbWFrZS9waWNrLm1ha2UudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPlBpY2sgYSBMb3NlcjwvaDQ+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJ3ZWxsIHdlbGwtc21cXFwiPjxzdHJvbmc+V2VlayB7e2dhbWVzWzBdLndlZWtfbnVtYmVyfX0gWyB7e2dhbWVzWzBdLndlZWtfdHlwZX19IF08L3N0cm9uZz48L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgbmctcmVwZWF0LXN0YXJ0PVxcXCJnYW1lIGluIGdhbWVzXFxcIiBjbGFzcz1cXFwid2Vlay1nYW1lcyBsaXN0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGg1IG5nLWNsYXNzPVxcXCJ7J2ludmFsaWQtZ2FtZSc6IGdhbWUuc3RhcnRlZH1cXFwiPnt7Z2FtZS5kaXNwbGF5fX08YnI+PHNtYWxsPnt7c3RhcnRzKGdhbWUpfX08L3NtYWxsPjwvaDU+XFxuXCIgK1xuICAgIFwiICAgIDxhIG5nLXJlcGVhdD1cXFwic3F1YWQgaW4gZ2FtZS5zcXVhZHNcXFwiIG5nLWNsaWNrPVxcXCJtYWtlUGljayhnYW1lLCBzcXVhZClcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiIG5nLWNsYXNzPVxcXCJ7J2Rpc2FibGVkJzogZ2FtZS5zdGFydGVkfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwicm93IGdhbWUtcm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIG5nLWNsYXNzPVxcXCJ7J2ludmFsaWQtc3F1YWQnOiBoYXNTcXVhZEJlZW5Vc2VkKGdhbWUsIHNxdWFkKX1cXFwiPnt7c3F1YWQubmFtZX19IDxzcGFuIGNsYXNzPVxcXCJyZWNvcmQtc2NvcmVcXFwiIG5nLXNob3c9XFxcIiFnYW1lLmNvbXBsZXRlICYmIHNxdWFkLnJlY29yZC5sZW5ndGggPiAwXFxcIj5bIHt7c3F1YWQucmVjb3JkfX0gXTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwicmVjb3JkLXNjb3JlXFxcIiBuZy1zaG93PVxcXCJnYW1lLmNvbXBsZXRlXFxcIj5bIHt7Z2V0U2NvcmUoZ2FtZSwgJGluZGV4KX19IF08L3NwYW4+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJhZGdlXFxcIiBuZy1zaG93PVxcXCIhZ2FtZS5zdGFydGVkICYmICFoYXNTcXVhZEJlZW5Vc2VkKGdhbWUsIHNxdWFkKVxcXCI+UGljazwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9hPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IG5nLXJlcGVhdC1lbmQ+PC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL3BsYXkvbGVhZ3Vlcy9wbGF5LmxlYWd1ZXMudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvcGxheS9sZWFndWVzL3BsYXkubGVhZ3Vlcy50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBuZy1zaG93PVxcXCJsZWFndWVzLmxlbmd0aCA+IDBcXFwiIGNsYXNzPVxcXCJsZWFndWVzLWNvbnRhaW5lclxcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJteS1sZWFndWVzIGxpc3QtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICA8YSBuZy1yZXBlYXQ9XFxcImxlYWd1ZSBpbiBsZWFndWVzIHwgbWFuYWdlZExlYWd1ZUZpbHRlcjpsZWFndWVPcHRpb25zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QgfCBvZmZzZXRGaWx0ZXI6KGN1cnJlbnRMZWFndWVQYWdlLTEpKmxlYWd1ZXNQZXJQYWdlIHwgbGltaXRUbzpsZWFndWVzUGVyUGFnZVxcXCIgbmctY2xpY2s9XFxcInZpZXdMZWFndWUobGVhZ3VlKVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImxlYWd1ZS1uYW1lIGNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWNvbW1lbnQgZmEtZndcXFwiIG5nLXNob3c9XFxcIiFpc0NvbW1pc2gobGVhZ3VlKSAmJiBsZWFndWUubWVzc2FnZS5sZW5ndGggPiAwXFxcIiB0aXRsZT1cXFwiSGFzIG1lc3NhZ2UgZnJvbSBjb21taXNoXFxcIj48L2k+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS11c2VyIGZhLWZ3XFxcIiB0aXRsZT1cXFwiTXkgbGVhZ3VlXFxcIiBuZy1zaG93PVxcXCJpc0NvbW1pc2gobGVhZ3VlKVxcXCI+PC9pPiB7e2xlYWd1ZS5uYW1lfX08YnI+PHNwYW4gY2xhc3M9XFxcInRlYW0tY291bnQgbGVhZ3VlLWNvbW1pc2hcXFwiPkNvbW1pc2g6IHt7bGVhZ3VlLmNvbW1pc2hfbmFtZXMuam9pbignLCAnKX19PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJteS1sZWFndWUtbWV0YVxcXCI+PHNwYW4gbmctc2hvdz1cXFwibGVhZ3VlLmVsaW1pbmF0aW9uXFxcIj48c3BhbiBjbGFzcz1cXFwibG9zZW9yZ29ob21lXFxcIj5Mb3NlT3JHb0hvbWU8L3NwYW4+PHNwYW4gY2xhc3M9XFxcImxvZ2hcXFwiPkxPR0g8L3NwYW4+IFsgc2luZ2xlIGVsaW1pbmF0aW9uIF08L3NwYW4+PHNwYW4gbmctc2hvdz1cXFwiIWxlYWd1ZS5lbGltaW5hdGlvblxcXCI+QmlnZ2VzdCBMb3NlciBbIG5vIGVsaW1pbmF0aW9uIF08L3NwYW4+PGJyPnt7c3RhcnRzKGxlYWd1ZSl9fTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJhZGdlXFxcIj48c3BhbiBuZy1zaG93PVxcXCJsZWFndWUuZWxpbWluYXRpb25cXFwiPnt7bGVhZ3VlLmFsaXZlX3RlYW1fY291bnR9fS88L3NwYW4+e3tsZWFndWUudGVhbV9jb3VudH19IHRlYW08c3BhbiBuZy1zaG93PVxcXCJsZWFndWUudGVhbV9jb3VudCAhPT0gMVxcXCI+czwvc3Bhbj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9hPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJteS1sZWFndWUtcGFnaW5hdGlvblxcXCIgbmctc2hvdz1cXFwibGVhZ3Vlcy5sZW5ndGggPiBsZWFndWVzUGVyUGFnZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxwYWdpbmF0aW9uIGJvdW5kYXJ5LWxpbmtzPVxcXCJ0cnVlXFxcIiBtYXgtc2l6ZT1cXFwiNFxcXCIgdG90YWwtaXRlbXM9XFxcImxlYWd1ZXMubGVuZ3RoXFxcIiBpdGVtcy1wZXItcGFnZT1cXFwibGVhZ3Vlc1BlclBhZ2VcXFwiIG5nLW1vZGVsPVxcXCJjdXJyZW50TGVhZ3VlUGFnZVxcXCIgY2xhc3M9XFxcInBhZ2luYXRpb24tbWRcXFwiIHByZXZpb3VzLXRleHQ9XFxcIiZsc2FxdW87XFxcIiBuZXh0LXRleHQ9XFxcIiZyc2FxdW87XFxcIiBmaXJzdC10ZXh0PVxcXCImbGFxdW87XFxcIiBsYXN0LXRleHQ9XFxcIiZyYXF1bztcXFwiPjwvcGFnaW5hdGlvbj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPGRpdiBzdHlsZT1cXFwiY2xlYXI6IGJvdGg7XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8IS0taWYgeW91IGhhdmUgbm8gbGVhZ3Vlcy0tPlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImxlYWd1ZXMtYWxlcnQgYWxlcnQgYWxlcnQtaW5mb1xcXCIgbmctc2hvdz1cXFwiKGxlYWd1ZXMgfCBtYW5hZ2VkTGVhZ3VlRmlsdGVyOmxlYWd1ZU9wdGlvbnMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCkubGVuZ3RoID09IDBcXFwiPlxcblwiICtcbiAgICBcIiAgTm8gbGVhZ3VlcyBmb3VuZFxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvcGxheS9wbGF5LnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL3BsYXkvcGxheS50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwicGxheS1oZWFkZXItcm93IHJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNyBjb2wtbWQtN1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxoMyBjbGFzcz1cXFwibXktdGVhbXMtaGVhZGVyXFxcIj5NeSBUZWFtcyAmIExlYWd1ZXM8L2gzPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNSBjb2wtbWQtNVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInBsYXktYnRuLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImpvaW4tbGVhZ3VlLWJ0biBidG4gYnRuLXByaW1hcnlcXFwiIG5nLWNsaWNrPVxcXCJqb2luTGVhZ3VlKGN1cnJlbnRTZWFzb25JZClcXFwiPkpvaW4gTGVhZ3VlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjcmVhdGUtbGVhZ3VlLWJ0biBidG4gYnRuLXByaW1hcnlcXFwiIG5nLWNsaWNrPVxcXCJjcmVhdGVMZWFndWUoY3VycmVudFNlYXNvbklkKVxcXCI+Q3JlYXRlIExlYWd1ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxocj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJ0ZWFtcy1sZWFndWVzLXRhYnNcXFwiPlxcblwiICtcbiAgICBcIiAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2LXRhYnNcXFwiPlxcblwiICtcbiAgICBcIiAgICA8bGkgbmctY2xhc3M9XFxcInsnYWN0aXZlJzogaXNTdGF0ZShbJ3ByaXZhdGUucGxheS50ZWFtcyddKX1cXFwiIG5nLWNsaWNrPVxcXCJyZXNldFNlYXJjaCgpXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YSBuZy1jbGljaz1cXFwibXlUZWFtcygpXFxcIj48c3BhbiBjbGFzcz1cXFwibXktdGVhbXNcXFwiPk15IFRlYW1zPC9zcGFuPjwvYT5cXG5cIiArXG4gICAgXCIgICAgPC9saT5cXG5cIiArXG4gICAgXCIgICAgPGxpIG5nLWNsYXNzPVxcXCJ7J2FjdGl2ZSc6IGlzU3RhdGUoWydwcml2YXRlLnBsYXkubGVhZ3VlcyddKX1cXFwiIG5nLWNsaWNrPVxcXCJyZXNldFNlYXJjaCgpXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YSBuZy1jbGljaz1cXFwibXlMZWFndWVzKClcXFwiPjxzcGFuIGNsYXNzPVxcXCJteS1sZWFndWVzXFxcIj5NeSBMZWFndWVzPC9zcGFuPjwvYT5cXG5cIiArXG4gICAgXCIgICAgPC9saT5cXG5cIiArXG4gICAgXCIgIDwvdWw+XFxuXCIgK1xuICAgIFwiICA8c2VsZWN0IGNsYXNzPVxcXCJzZWFzb25zIGZvcm0tY29udHJvbFxcXCIgbmctY2hhbmdlPVxcXCJjaGFuZ2VTZWFzb24oKVxcXCIgbmctbW9kZWw9XFxcInNlbGVjdGVkU2Vhc29uLmlkXFxcIiBuZy1vcHRpb25zPVxcXCJzZWFzb24uaWQgYXMgc2Vhc29uLm5hbWUgZm9yIHNlYXNvbiBpbiBzZWFzb25zXFxcIj48L3NlbGVjdD5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cCBjdXN0b20tc2VhcmNoLWZvcm0gZmlsdGVyLXRlYW0tbGVhZ3VlXFxcIj5cXG5cIiArXG4gICAgXCIgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiU2VhcmNoLi4uXFxcIiBuZy1tb2RlbD1cXFwicXVlcnlcXFwiPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcInBsYXktY29udGVudFxcXCIgdWktdmlldz1cXFwicGxheUNvbnRlbnRcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvcGxheS90ZWFtcy9wbGF5LnRlYW1zLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL3BsYXkvdGVhbXMvcGxheS50ZWFtcy50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBuZy1zaG93PVxcXCJ0ZWFtcy5sZW5ndGggPiAwXFxcIiBjbGFzcz1cXFwibGVhZ3Vlcy1jb250YWluZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwibXktdGVhbXMgbGlzdC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxhIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiIG5nLWNsYXNzPVxcXCJ7J2luYWN0aXZlJzogIXRlYW0uYWN0aXZlIHx8ICF0ZWFtLmFsaXZlfVxcXCIgbmctcmVwZWF0PVxcXCJ0ZWFtIGluIHRlYW1zIHwgYWxpdmVUZWFtRmlsdGVyOnRlYW1PcHRpb25zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QgfCBvZmZzZXRGaWx0ZXI6KGN1cnJlbnRUZWFtUGFnZS0xKSp0ZWFtc1BlclBhZ2UgfCBsaW1pdFRvOnRlYW1zUGVyUGFnZVxcXCIgbmctY2xpY2s9XFxcInNob3dUZWFtKHRlYW0pXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwibGVhZ3VlLW5hbWUgY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY29tbWVudCBmYS1md1xcXCIgbmctc2hvdz1cXFwidGVhbS5tZXNzYWdlLmxlbmd0aCA+IDBcXFwiIHRpdGxlPVxcXCJIYXMgbWVzc2FnZSBmcm9tIGNvbW1pc2hcXFwiPjwvaT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gbmctY2xhc3M9XFxcInsnZGVhZC10ZWFtLW5hbWUnOiAhdGVhbS5hY3RpdmUgfHwgIXRlYW0uYWxpdmV9XFxcIj57e3RlYW0ubmFtZX19PC9zcGFuPjxicj48c3BhbiBjbGFzcz1cXFwidGVhbS1sZWFndWVcXFwiPnt7dGVhbS5sZWFndWUubmFtZX19PC9zcGFuPjwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY3VycmVudC1waWNrXFxcIiBuZy1jbGFzcz1cXFwieyduby1waWNrJzogaGFzTm9QaWNrKHRlYW0pfVxcXCIgbmctc2hvdz1cXFwidGVhbS5hY3RpdmUgJiYgdGVhbS5zdGFydGVkXFxcIj5QaWNrOiBbIDxzcGFuIGNsYXNzPVxcXCJjdXJyZW50LWxvc2VyLW5hbWVcXFwiPnt7dGVhbS5sYXN0X3BpY2tfc3F1YWQubmFtZX19PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJjdXJyZW50LWxvc2VyLWFiYnJldlxcXCI+e3t0ZWFtLmxhc3RfcGlja19zcXVhZC5hYmJyZXZ9fTwvc3Bhbj4gXTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImN1cnJlbnQtcGlja1xcXCIgbmctc2hvdz1cXFwidGVhbS5hY3RpdmUgJiYgIXRlYW0uc3RhcnRlZFxcXCI+U3RhcnRzIHt7dGVhbS5zdGFydF93ZWVrfX08L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbmFjdGl2ZS10ZWFtIGN1cnJlbnQtcGlja1xcXCIgbmctc2hvdz1cXFwiIXRlYW0uYWN0aXZlXFxcIj5UZWFtIGhhcyBiZWVuIGRlYWN0aXZhdGVkPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYmFkZ2VcXFwiPnt7dGVhbS5jb3JyZWN0X3BpY2tzX2NvdW50fX0gbG9zZXI8c3BhbiBuZy1zaG93PVxcXCJ0ZWFtLmNvcnJlY3RfcGlja3NfY291bnQgIT09IDFcXFwiPnM8L3NwYW4+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvYT5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwibXktbGVhZ3VlLXBhZ2luYXRpb25cXFwiIG5nLXNob3c9XFxcInRlYW1zLmxlbmd0aCA+IHRlYW1zUGVyUGFnZSAmJiAodGVhbXMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCkubGVuZ3RoID4gMFxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxwYWdpbmF0aW9uIGJvdW5kYXJ5LWxpbmtzPVxcXCJ0cnVlXFxcIiBtYXgtc2l6ZT1cXFwiNFxcXCIgdG90YWwtaXRlbXM9XFxcIih0ZWFtcyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0KS5sZW5ndGhcXFwiIGl0ZW1zLXBlci1wYWdlPVxcXCJ0ZWFtc1BlclBhZ2VcXFwiIG5nLW1vZGVsPVxcXCJjdXJyZW50VGVhbVBhZ2VcXFwiIGNsYXNzPVxcXCJwYWdpbmF0aW9uLW1kXFxcIiBwcmV2aW91cy10ZXh0PVxcXCImbHNhcXVvO1xcXCIgbmV4dC10ZXh0PVxcXCImcnNhcXVvO1xcXCIgZmlyc3QtdGV4dD1cXFwiJmxhcXVvO1xcXCIgbGFzdC10ZXh0PVxcXCImcmFxdW87XFxcIj48L3BhZ2luYXRpb24+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgc3R5bGU9XFxcImNsZWFyOiBib3RoO1xcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwidGVhbXMtYWxlcnQgYWxlcnQgYWxlcnQtaW5mb1xcXCIgbmctc2hvdz1cXFwiKHRlYW1zIHwgYWxpdmVUZWFtRmlsdGVyOnRlYW1PcHRpb25zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aCA9PSAwXFxcIj5cXG5cIiArXG4gICAgXCIgIE5vIHRlYW1zIGZvdW5kXFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS90ZWFtL2VkaXQvdGVhbS5lZGl0LnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL3RlYW0vZWRpdC90ZWFtLmVkaXQudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkVkaXQgVGVhbTwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8Zm9ybSBuYW1lPVxcXCJlZGl0VGVhbUZvcm1cXFwiIGNsYXNzPVxcXCJlZGl0LXRlYW0tZm9ybSBmb3JtLWhvcml6b250YWxcXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKGVkaXRUZWFtRm9ybS50ZWFtTmFtZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihlZGl0VGVhbUZvcm0udGVhbU5hbWUpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGZvcj1cXFwidGVhbU5hbWVcXFwiIGNsYXNzPVxcXCJjb2wtc20tMyBjb250cm9sLWxhYmVsXFxcIj5UZWFtIE5hbWU6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8aW5wdXQgaWQ9XFxcInRlYW1OYW1lXFxcIiBuYW1lPVxcXCJ0ZWFtTmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVudGVyIGEgdGVhbSBuYW1lXFxcIiBuZy1tb2RlbD1cXFwidGVhbURhdGEubmFtZVxcXCIgbmctbWF4bGVuZ3RoPVxcXCIzMFxcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGVkaXRUZWFtRm9ybS50ZWFtTmFtZSwgJ3JlcXVpcmVkJylcXFwiPlJlcXVpcmVkPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoZWRpdFRlYW1Gb3JtLnRlYW1OYW1lLCAnbWF4bGVuZ3RoJylcXFwiPlRvbyBMb25nPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKGVkaXRUZWFtRm9ybS50ZWFtTmFtZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctZGlzYWJsZWQ9XFxcImVkaXRUZWFtRm9ybS4kaW52YWxpZFxcXCIgbmctY2xpY2s9XFxcImVkaXRUZWFtKHRlYW1EYXRhKVxcXCI+VXBkYXRlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS90ZWFtL21lc3NhZ2UvdGVhbS5tZXNzYWdlLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL3RlYW0vbWVzc2FnZS90ZWFtLm1lc3NhZ2UudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPlVwZGF0ZSBNZXNzYWdlPC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxmb3JtIG5hbWU9XFxcIm1lc3NhZ2VGb3JtXFxcIiBjbGFzcz1cXFwidGVhbS1tZXNzYWdlLWZvcm0gZm9ybS1ob3Jpem9udGFsXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihtZXNzYWdlRm9ybS5tZXNzYWdlKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKG1lc3NhZ2VGb3JtLm1lc3NhZ2UpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGZvcj1cXFwibWVzc2FnZVxcXCIgY2xhc3M9XFxcImNvbC1zbS00IGNvbnRyb2wtbGFiZWxcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgVGVhbSBNZXNzYWdlOiA8YnI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG1lc3NhZ2VGb3JtLm1lc3NhZ2UsICdtYXhsZW5ndGgnKVxcXCI+WyBUb28gTG9uZyBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS04XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDx0ZXh0YXJlYSBpZD1cXFwibWVzc2FnZVxcXCIgbmFtZT1cXFwibWVzc2FnZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVudGVyIGEgbWVzc2FnZSB0byBwdXQgb24gdGhlIHRlYW0ncyB3YWxsLi4uXFxcIiByb3dzPVxcXCIzXFxcIiBuZy1tYXhsZW5ndGg9XFxcIjUwMFxcXCIgbmctbW9kZWw9XFxcInRlYW1EYXRhLm1lc3NhZ2VcXFwiPjwvdGV4dGFyZWE+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJlbWFpbC10ZWFtLW1lc3NhZ2UtY2hlY2tib3hcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBuZy1tb2RlbD1cXFwibWVzc2FnZU9wdGlvbnMuc2VuZEVtYWlsXFxcIj4gZW1haWwgbWVzc2FnZSB0byBjb2FjaDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKG1lc3NhZ2VGb3JtLm1lc3NhZ2UpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9mb3JtPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+Q2FuY2VsPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG5nLWRpc2FibGVkPVxcXCJtZXNzYWdlRm9ybS4kcHJpc3RpbmUgfHwgbWVzc2FnZUZvcm0uJGludmFsaWRcXFwiIG5nLWNsaWNrPVxcXCJ1cGRhdGVNZXNzYWdlKHRlYW1EYXRhLCBtZXNzYWdlT3B0aW9ucy5zZW5kRW1haWwpXFxcIj5VcGRhdGU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL3RlYW0vdGVhbS50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS90ZWFtL3RlYW0udHBsLmh0bWxcIixcbiAgICBcIjxkaXYgdWktdmlldz1cXFwidGVhbUNvbnRlbnRcXFwiIGNsYXNzPVxcXCJ0ZWFtLWNvbnRlbnRcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvdGVhbS92aWV3L3RlYW0udmlldy50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS90ZWFtL3ZpZXcvdGVhbS52aWV3LnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiIG5nLXNob3c9XFxcIiF0ZWFtRGF0YS5hY3RpdmVcXFwiPlRoaXMgdGVhbSBoYXMgYmVlbiBkZWFjdGl2YXRlZCBieSB0aGUgY29tbWlzaCBhbmQgd2lsbCBiZSB1bmFibGUgdG8gcGljayBsb3NlcnMuIDxhIGNsYXNzPVxcXCJhbGVydC1saW5rXFxcIiBuZy1jbGljaz1cXFwiY29udGFjdENvbW1pc2godGVhbURhdGEpXFxcIj5Db250YWN0IHRoZSBjb21taXNoPC9hPiBpZiB5b3UgaGF2ZSBxdWVzdGlvbnMuPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiBuZy1zaG93PVxcXCJ0ZWFtRGF0YS5hY3RpdmUgJiYgdGVhbURhdGEuYWxpdmUgJiYgdGVhbURhdGEuc3RhcnRlZCAmJiBoYXNOb1BpY2sodGVhbURhdGEpXFxcIj5ObyBsb3NlciBwaWNrZWQgZm9yIHRoaXMgd2Vlay4gPHNwYW4gbmctc2hvdz1cXFwiaXNDb2FjaCh0ZWFtRGF0YSlcXFwiPjxhIGNsYXNzPVxcXCJhbGVydC1saW5rXFxcIiBuZy1jbGljaz1cXFwibWFrZVBpY2sodGVhbURhdGEpXFxcIj5QaWNrPC9hPiBub3cuPC9zcGFuPjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgbmctc2hvdz1cXFwidGVhbURhdGEuYWN0aXZlICYmICF0ZWFtRGF0YS5hbGl2ZVxcXCI+VGhpcyB0ZWFtIGlzIERFQUQuIFNvIHNvcnJ5LjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LXdhcm5pbmdcXFwiIG5nLXNob3c9XFxcImlzQ29hY2godGVhbURhdGEpICYmIHRlYW1EYXRhLmFjdGl2ZSAmJiAhdGVhbURhdGEuc3RhcnRlZFxcXCI+WW91IGNhbiBtYWtlIHlvdXIgZmlyc3QgcGljayB3aGVuIHRoZSBsZWFndWUgc3RhcnRzIC0ge3t0ZWFtRGF0YS5zdGFydF93ZWVrX2Rpc3BsYXl9fTwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LXdhcm5pbmdcXFwiIG5nLXNob3c9XFxcImlzQ29hY2godGVhbURhdGEpICYmIHRlYW1EYXRhLmFjdGl2ZSAmJiB0ZWFtRGF0YS5hbGl2ZSAmJiB0ZWFtRGF0YS5sYXN0X3BpY2tfc3F1YWQubG9ja2VkXFxcIj5Zb3VyIHBpY2sgaXMgbG9ja2VkIGZvciB7e3RlYW1EYXRhLmxhc3RfcGlja19zcXVhZC53ZWVrfX08L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJoZWFkZXItcm93IHJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOCBjb2wtbWQtOFxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImJ0bi1ncm91cCB0ZWFtcy1kcm9wZG93blxcXCIgZHJvcGRvd24gaXMtb3Blbj1cXFwidGVhbURyb3Bkb3duLmlzb3BlblxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJ0ZWFtcy1idG4tbGluayBidG4gYnRuLWxpbmsgZHJvcGRvd24tdG9nZ2xlXFxcIiBuZy1kaXNhYmxlZD1cXFwiIWlzQ29hY2godGVhbURhdGEpICYmICFpc0NvbW1pc2godGVhbURhdGEpICYmICFpc0FkbWluKClcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWNoZWNrIGZhLWZ3XFxcIiBuZy1zaG93PVxcXCJpc0NvbW1pc2godGVhbURhdGEpICYmIHRlYW1EYXRhLnBhaWQgPT0gdHJ1ZVxcXCIgdGl0bGU9XFxcIlBhaWRcXFwiPjwvaT4gPHN0cm9uZz48c3BhbiBjbGFzcz1cXFwidGVhbS1uYW1lXFxcIiBuZy1jbGFzcz1cXFwieyd0ZWFtLWluYWN0aXZlJzogIXRlYW1EYXRhLmFjdGl2ZSB8fCAhdGVhbURhdGEuYWxpdmUsICdkaXNhYmxlZCc6ICFpc0NvYWNoKHRlYW1EYXRhKSAmJiAhaXNDb21taXNoKHRlYW1EYXRhKSAmJiAhaXNBZG1pbigpfVxcXCI+e3t0ZWFtRGF0YS5uYW1lfX08L3NwYW4+IDxzcGFuIG5nLXNob3c9XFxcImlzQ29hY2godGVhbURhdGEpIHx8IGlzQ29tbWlzaCh0ZWFtRGF0YSlcXFwiIGNsYXNzPVxcXCJjYXJldFxcXCI+PC9zcGFuPjwvc3Ryb25nPlxcblwiICtcbiAgICBcIiAgICAgIDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudSB0ZWFtcy1idG4tbWVudVxcXCIgcm9sZT1cXFwibWVudVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGk+PGEgbmctY2xpY2s9XFxcInRvZ2dsZURyb3Bkb3duKCRldmVudCk7ZWRpdFRlYW0odGVhbURhdGEpXFxcIj5FZGl0IHt7dGVhbURhdGEubmFtZX19PC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGk+PGEgbmctc2hvdz1cXFwiaXNDb21taXNoKHRlYW1EYXRhKVxcXCIgbmctY2xpY2s9XFxcInRvZ2dsZURyb3Bkb3duKCRldmVudCk7dXBkYXRlTWVzc2FnZSh0ZWFtRGF0YSlcXFwiPkVkaXQgdGVhbSBtZXNzYWdlPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGkgbmctc2hvdz1cXFwiaXNDb21taXNoKHRlYW1EYXRhKSAmJiAhdGVhbURhdGEucGFpZFxcXCI+PGEgbmctY2xpY2s9XFxcInRvZ2dsZURyb3Bkb3duKCRldmVudCk7cGFpZCh0ZWFtRGF0YSlcXFwiPk1hcmsgdGVhbSBhcyBwYWlkPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGkgbmctc2hvdz1cXFwiaXNDb21taXNoKHRlYW1EYXRhKSAmJiB0ZWFtRGF0YS5wYWlkXFxcIj48YSBuZy1jbGljaz1cXFwidG9nZ2xlRHJvcGRvd24oJGV2ZW50KTt1bnBhaWQodGVhbURhdGEpXFxcIj5NYXJrIHRlYW0gYXMgdW5wYWlkPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGkgbmctc2hvdz1cXFwiaXNDb21taXNoKHRlYW1EYXRhKSAmJiAhdGVhbURhdGEuYWN0aXZlXFxcIj48YSBuZy1jbGljaz1cXFwidG9nZ2xlRHJvcGRvd24oJGV2ZW50KTtjb25maXJtQWN0aXZhdGUodGVhbURhdGEpXFxcIj5SZWFjdGl2YXRlIHRoaXMgdGVhbTwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgICAgPGxpIG5nLXNob3c9XFxcImlzQ29tbWlzaCh0ZWFtRGF0YSkgJiYgdGVhbURhdGEuYWN0aXZlXFxcIj48YSBuZy1jbGljaz1cXFwidG9nZ2xlRHJvcGRvd24oJGV2ZW50KTtjb25maXJtRGVhY3RpdmF0ZSh0ZWFtRGF0YSlcXFwiPkRlYWN0aXZhdGUgdGhpcyB0ZWFtPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGkgbmctc2hvdz1cXFwiIWlzQ29tbWlzaCh0ZWFtRGF0YSlcXFwiPjxhIG5nLWNsaWNrPVxcXCJ0b2dnbGVEcm9wZG93bigkZXZlbnQpO2NvbnRhY3RDb21taXNoKHRlYW1EYXRhKVxcXCI+Q29udGFjdCB0aGUgY29tbWlzaDwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgICAgPGxpIGNsYXNzPVxcXCJkaXZpZGVyXFxcIiBuZy1zaG93PVxcXCJsZWFndWVUZWFtcy5sZW5ndGggPiAxXFxcIj48L2xpPlxcblwiICtcbiAgICBcIiAgICAgICAgPGxpIG5nLXJlcGVhdD1cXFwidGVhbSBpbiBsZWFndWVUZWFtc1xcXCIgbmctc2hvdz1cXFwidGVhbS5pZCAhPSB0ZWFtRGF0YS5pZFxcXCI+PGEgbmctY2xpY2s9XFxcInNob3dUZWFtKHRlYW0pXFxcIj48c3BhbiBjbGFzcz1cXFwib3RoZXItdGVhbS1uYW1lXFxcIiBuZy1jbGFzcz1cXFwieyd0ZWFtLWluYWN0aXZlJzogIXRlYW0uYWN0aXZlIHx8ICF0ZWFtLmFsaXZlfVxcXCI+e3t0ZWFtLm5hbWV9fTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcIm90aGVyLXRlYW0tcGlja1xcXCI+e3t0ZWFtLmxhc3RfcGlja19zcXVhZC5hYmJyZXZ9fTwvc3Bhbj48L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICA8L3VsPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGg2PjxhIG5nLWNsaWNrPVxcXCJzaG93TGVhZ3VlKHRlYW1EYXRhKVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWNoZXZyb24tbGVmdCBmYS1md1xcXCI+PC9pPiA8c3BhbiBjbGFzcz1cXFwidGVhbS1sZWFndWUtbmFtZVxcXCI+e3t0ZWFtRGF0YS5sZWFndWUubmFtZX19PC9zcGFuPjwvYT48L2g2PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNCBjb2wtbWQtNFxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwibWFrZS1waWNrLWJ0biBidG4gYnRuLXByaW1hcnlcXFwiIG5nLXNob3c9XFxcImlzQ29hY2godGVhbURhdGEpXFxcIiBuZy1jbGljaz1cXFwibWFrZVBpY2sodGVhbURhdGEpXFxcIiBuZy1kaXNhYmxlZD1cXFwidGVhbURhdGEubGFzdF9waWNrX3NxdWFkLmxvY2tlZCB8fCAhdGVhbURhdGEuc3RhcnRlZFxcXCI+PHNwYW4gbmctc2hvdz1cXFwiaGFzTm9QaWNrKHRlYW1EYXRhKVxcXCI+UGljayBMb3Nlcjwvc3Bhbj48c3BhbiBuZy1zaG93PVxcXCIhaGFzTm9QaWNrKHRlYW1EYXRhKVxcXCI+Q2hhbmdlIExvc2VyPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwidGVhbS1tZXNzYWdlIHdlbGwgd2VsbC1zbVxcXCIgbmctc2hvdz1cXFwiaXNDb21taXNoKHRlYW1EYXRhKSB8fCBpc0NvYWNoKHRlYW1EYXRhKVxcXCI+PHN0cm9uZz5Db21taXNoIHRvIHRlYW06PC9zdHJvbmc+IDxwIGNsYXNzPVxcXCJ0ZWFtLW1lc3NhZ2UtdGV4dFxcXCIgbmctc2hvdz1cXFwiIXRlYW1EYXRhLm1lc3NhZ2UgfHwgdGVhbURhdGEubWVzc2FnZS5sZW5ndGggPT0gMFxcXCI+bm8gbWVzc2FnZTwvcD48cCBjbGFzcz1cXFwidGVhbS1tZXNzYWdlLXRleHRcXFwiIG5nLXNob3c9XFxcInRlYW1EYXRhLm1lc3NhZ2UubGVuZ3RoID4gMFxcXCIgbmctYmluZC1odG1sPVxcXCJ0ZWFtRGF0YS5tZXNzYWdlIHwgbGlua3k6J19ibGFuaydcXFwiPjwvcD4gPGEgbmctc2hvdz1cXFwiaXNDb21taXNoKHRlYW1EYXRhKVxcXCIgbmctY2xpY2s9XFxcInVwZGF0ZU1lc3NhZ2UodGVhbURhdGEpXFxcIj5bIGVkaXQgXTwvYT48YSBuZy1zaG93PVxcXCIhaXNDb21taXNoKHRlYW1EYXRhKVxcXCIgbmctY2xpY2s9XFxcImNvbnRhY3RDb21taXNoKHRlYW1EYXRhKVxcXCI+WyBjb250YWN0IF08L2E+PC9kaXY+XFxuXCIgK1xuICAgIFwiPGhyPlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImxvc2Vycy10YWJcXFwiPlxcblwiICtcbiAgICBcIiAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2LXRhYnNcXFwiPlxcblwiICtcbiAgICBcIiAgICA8bGkgY2xhc3M9XFxcImFjdGl2ZVxcXCI+PGE+TG9zZXJzIFsge3t0ZWFtRGF0YS5waWNrX2NvdW50fX0gXTwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgPC91bD5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJ0ZWFtLWNvbnRhaW5lclxcXCIgc3R5bGU9XFxcImNsZWFyOmJvdGg7XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwidGVhbS1waWNrcyBsaXN0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YSBuZy1yZXBlYXQ9XFxcInBpY2sgaW4gcGlja3NcXFwiIGNsYXNzPVxcXCJ0ZWFtLXBpY2sgbGlzdC1ncm91cC1pdGVtXFxcIiBuZy1jbGljaz1cXFwibWFrZVBpY2sodGVhbURhdGEsIHBpY2spXFxcIiBuZy1jbGFzcz1cXFwieydsb2NrZWQnOiAhaXNDb2FjaCh0ZWFtRGF0YSkgfHwgcGljay5sb2NrZWQsICdpbmNvcnJlY3QnOiBwaWNrLmNvcnJlY3QgPT09IGZhbHNlfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3ZWVrLW5hbWUgY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1sb2NrIGZhLWZ3XFxcIiBuZy1zaG93PVxcXCJwaWNrLmxvY2tlZCAmJiBwaWNrLmNvcnJlY3QgPT0gbnVsbFxcXCIgdGl0bGU9XFxcIlBpY2sgbG9ja2VkXFxcIj48L2k+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXVubG9jayBmYS1md1xcXCIgbmctc2hvdz1cXFwiIXBpY2subG9ja2VkICYmIHBpY2suY29ycmVjdCA9PSBudWxsXFxcIiB0aXRsZT1cXFwiUGljayB1bmxvY2tlZFxcXCI+PC9pPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS10aW1lcyBmYS1md1xcXCIgbmctc2hvdz1cXFwicGljay5jb3JyZWN0ID09PSBmYWxzZVxcXCIgdGl0bGU9XFxcIlBpY2sgd3JvbmdcXFwiPjwvaT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY2hlY2sgZmEtZndcXFwiIG5nLXNob3c9XFxcInBpY2suY29ycmVjdCA9PT0gdHJ1ZVxcXCIgdGl0bGU9XFxcIlBpY2sgY29ycmVjdFxcXCI+PC9pPiA8c3BhbiBjbGFzcz1cXFwicGljay1zcXVhZFxcXCI+PHNwYW4gY2xhc3M9XFxcInBpY2stc3F1YWQtbmFtZVxcXCI+WyB7e3BpY2suc3F1YWQubmFtZX19IF08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInBpY2stc3F1YWQtYWJicmV2XFxcIj5bIHt7cGljay5zcXVhZC5hYmJyZXZ9fSBdPC9zcGFuPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImdhbWVcXFwiPldlZWsge3twaWNrLndlZWtfbnVtYmVyfX0gKHt7cGljay53ZWVrX3R5cGV9fSk8L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJnYW1lLWNvbHVtbiBjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdhbWVcXFwiPnt7cGljay5nYW1lX2Rpc3BsYXl9fTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2E+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJuby1waWNrcy1hbGVydCBhbGVydCBhbGVydC1pbmZvXFxcIiBuZy1zaG93PVxcXCJwaWNrcy5sZW5ndGggPT0gMFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgTm8gcGlja3NcXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS90ZWFtcy9hbGl2ZS90ZWFtcy5hbGl2ZS50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS90ZWFtcy9hbGl2ZS90ZWFtcy5hbGl2ZS50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwiYWxpdmUtdGVhbXMgbGlzdC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxhIG5nLXJlcGVhdD1cXFwidGVhbSBpbiBhbGl2ZVRlYW1zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QgfCBvZmZzZXRGaWx0ZXI6KGN1cnJlbnRUZWFtUGFnZS0xKSp0ZWFtc1BlclBhZ2UgfCBsaW1pdFRvOnRlYW1zUGVyUGFnZVxcXCIgbmctY2xpY2s9XFxcInNob3dUZWFtKHNlYXNvbklkLCB0ZWFtKVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRlYW0tbmFtZSBjb2wtc20tNiBjb2wtbWQtNlxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWNvbW1lbnQgZmEtZndcXFwiIG5nLXNob3c9XFxcInRlYW0ubWVzc2FnZS5sZW5ndGggPiAwXFxcIiB0aXRsZT1cXFwiSGFzIG1lc3NhZ2UgZnJvbSBjb21taXNoXFxcIj48L2k+PGkgY2xhc3M9XFxcImZhIGZhLXRpbWVzIGZhLWZ3XFxcIiB0aXRsZT1cXFwiRGVhY3RpdmF0ZWQgVGVhbVxcXCIgbmctc2hvdz1cXFwiIXRlYW0uYWN0aXZlXFxcIj48L2k+IDxzcGFuIG5nLWNsYXNzPVxcXCJ7J2luYWN0aXZlLXRlYW0tbmFtZSc6ICF0ZWFtLmFjdGl2ZX1cXFwiPnt7dGVhbS5uYW1lfX08L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0ZWFtLWxlYWd1ZVxcXCI+e3t0ZWFtLmxlYWd1ZS5uYW1lfX08L3NwYW4+PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY3VycmVudC1waWNrXFxcIiBuZy1jbGFzcz1cXFwieyduby1waWNrJzogaGFzTm9QaWNrKHRlYW0pfVxcXCIgbmctc2hvdz1cXFwidGVhbS5hY3RpdmVcXFwiPlBpY2s6IHt7dGVhbS5sYXN0X3BpY2tfc3F1YWQubmFtZX19PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5hY3RpdmUtdGVhbVxcXCIgbmctc2hvdz1cXFwiIXRlYW0uYWN0aXZlXFxcIj5UZWFtIGhhcyBiZWVuIGRlYWN0aXZhdGVkPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYmFkZ2VcXFwiPlZpZXc8L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9hPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImFsaXZlLXRlYW1zLXBhZ2luYXRpb25cXFwiIG5nLXNob3c9XFxcImFsaXZlVGVhbXMubGVuZ3RoID4gdGVhbXNQZXJQYWdlICYmIChhbGl2ZVRlYW1zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aCA+IDBcXFwiPlxcblwiICtcbiAgICBcIiAgPHBhZ2luYXRpb24gYm91bmRhcnktbGlua3M9XFxcInRydWVcXFwiIG1heC1zaXplPVxcXCI0XFxcIiB0b3RhbC1pdGVtcz1cXFwiKGFsaXZlVGVhbXMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCkubGVuZ3RoXFxcIiBpdGVtcy1wZXItcGFnZT1cXFwidGVhbXNQZXJQYWdlXFxcIiBuZy1tb2RlbD1cXFwiY3VycmVudFRlYW1QYWdlXFxcIiBjbGFzcz1cXFwicGFnaW5hdGlvbi1tZFxcXCIgcHJldmlvdXMtdGV4dD1cXFwiJmxzYXF1bztcXFwiIG5leHQtdGV4dD1cXFwiJnJzYXF1bztcXFwiIGZpcnN0LXRleHQ9XFxcIiZsYXF1bztcXFwiIGxhc3QtdGV4dD1cXFwiJnJhcXVvO1xcXCI+PC9wYWdpbmF0aW9uPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgc3R5bGU9XFxcImNsZWFyOiBib3RoO1xcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtaW5mb1xcXCIgbmctc2hvdz1cXFwiYWxpdmVUZWFtcy5sZW5ndGggPT0gMFxcXCI+XFxuXCIgK1xuICAgIFwiICBObyBhbGl2ZSB0ZWFtcyA6KCBNYXliZSB5b3Ugc2hvdWxkIDxhIGNsYXNzPVxcXCJhbGVydC1saW5rXFxcIiBuZy1jbGljaz1cXFwiY3JlYXRlVGVhbShzZWFzb25JZClcXFwiPmpvaW4gYSBsZWFndWU8L2E+IHByb250byFcXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL3RlYW1zL2RlYWQvdGVhbXMuZGVhZC50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS90ZWFtcy9kZWFkL3RlYW1zLmRlYWQudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcImRlYWQtdGVhbXMgbGlzdC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICA8YSBuZy1yZXBlYXQ9XFxcInRlYW0gaW4gZGVhZFRlYW1zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QgfCBvZmZzZXRGaWx0ZXI6KGN1cnJlbnRUZWFtUGFnZS0xKSp0ZWFtc1BlclBhZ2UgfCBsaW1pdFRvOnRlYW1zUGVyUGFnZVxcXCIgbmctY2xpY2s9XFxcInNob3dUZWFtKHNlYXNvbklkLCB0ZWFtKVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRlYW0tbmFtZSBjb2wtc20tNiBjb2wtbWQtNlxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWNvbW1lbnQgZmEtZndcXFwiIG5nLXNob3c9XFxcInRlYW0ubWVzc2FnZS5sZW5ndGggPiAwXFxcIiB0aXRsZT1cXFwiSGFzIG1lc3NhZ2UgZnJvbSBjb21taXNoXFxcIj48L2k+IDxpIGNsYXNzPVxcXCJmYSBmYS10aW1lcyBmYS1md1xcXCIgdGl0bGU9XFxcIkRlYWN0aXZhdGVkIFRlYW1cXFwiIG5nLXNob3c9XFxcIiF0ZWFtLmFjdGl2ZVxcXCI+PC9pPiA8c3BhbiBuZy1jbGFzcz1cXFwieydpbmFjdGl2ZS10ZWFtLW5hbWUnOiAhdGVhbS5hY3RpdmV9XFxcIj57e3RlYW0ubmFtZX19PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidGVhbS1sZWFndWVcXFwiPnt7dGVhbS5sZWFndWUubmFtZX19PC9zcGFuPjwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImN1cnJlbnQtcGljayBuby1waWNrXFxcIiBuZy1zaG93PVxcXCJ0ZWFtLmFjdGl2ZVxcXCI+UGljazoge3t0ZWFtLmxhc3RfcGlja19zcXVhZC5uYW1lfX08L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbmFjdGl2ZS10ZWFtXFxcIiBuZy1zaG93PVxcXCIhdGVhbS5hY3RpdmVcXFwiPlRlYW0gaGFzIGJlZW4gZGVhY3RpdmF0ZWQ8L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJiYWRnZVxcXCI+Vmlldzwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2E+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwiZGVhZC10ZWFtcy1wYWdpbmF0aW9uXFxcIiBuZy1zaG93PVxcXCJkZWFkVGVhbXMubGVuZ3RoID4gdGVhbXNQZXJQYWdlICYmIChkZWFkVGVhbXMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCkubGVuZ3RoID4gMFxcXCI+XFxuXCIgK1xuICAgIFwiICA8cGFnaW5hdGlvbiBib3VuZGFyeS1saW5rcz1cXFwidHJ1ZVxcXCIgbWF4LXNpemU9XFxcIjRcXFwiIHRvdGFsLWl0ZW1zPVxcXCIoZGVhZFRlYW1zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aFxcXCIgaXRlbXMtcGVyLXBhZ2U9XFxcInRlYW1zUGVyUGFnZVxcXCIgbmctbW9kZWw9XFxcImN1cnJlbnRUZWFtUGFnZVxcXCIgY2xhc3M9XFxcInBhZ2luYXRpb24tbWRcXFwiIHByZXZpb3VzLXRleHQ9XFxcIiZsc2FxdW87XFxcIiBuZXh0LXRleHQ9XFxcIiZyc2FxdW87XFxcIiBmaXJzdC10ZXh0PVxcXCImbGFxdW87XFxcIiBsYXN0LXRleHQ9XFxcIiZyYXF1bztcXFwiPjwvcGFnaW5hdGlvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IHN0eWxlPVxcXCJjbGVhcjogYm90aDtcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWluZm9cXFwiIG5nLXNob3c9XFxcImRlYWRUZWFtcy5sZW5ndGggPT0gMFxcXCI+XFxuXCIgK1xuICAgIFwiICBObyBkZWFkIHRlYW1zIDopXFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS90ZWFtcy90ZWFtcy50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS90ZWFtcy90ZWFtcy50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwidGVhbXMtaGVhZGVyLXJvdyByb3dcXFwiPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTkgY29sLW1kLTlcXFwiPlxcblwiICtcbiAgICBcIiAgICA8aDM+SSBjb2FjaCB0aGVzZSB0ZWFtcy4uLjwvaDM+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0zIGNvbC1tZC0zXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwidGVhbXMtYnRuLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNyZWF0ZS10ZWFtLWJ0biBidG4gYnRuLXByaW1hcnlcXFwiIG5nLWNsaWNrPVxcXCJjcmVhdGVUZWFtKHNlYXNvbklkKVxcXCI+Sm9pbiBMZWFndWU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8aHI+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwidGVhbXMtY29udGFpbmVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDx1bCBjbGFzcz1cXFwibmF2IG5hdi10YWJzXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGxpIG5nLWNsYXNzPVxcXCJ7J2FjdGl2ZSc6IGlzQWxpdmVTdGF0ZSgpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGEgbmctY2xpY2s9XFxcImFsaXZlVGVhbXMoc2Vhc29uSWQpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtdGh1bWJzLXVwIGZhLWZ3XFxcIiB0aXRsZT1cXFwiQWxpdmUgdGVhbXNcXFwiPjwvaT4gQWxpdmUgVGVhbXM8L2E+XFxuXCIgK1xuICAgIFwiICAgIDwvbGk+XFxuXCIgK1xuICAgIFwiICAgIDxsaSBuZy1jbGFzcz1cXFwieydhY3RpdmUnOiAhaXNBbGl2ZVN0YXRlKCl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YSBuZy1jbGljaz1cXFwiZGVhZFRlYW1zKHNlYXNvbklkKVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXRodW1icy1kb3duIGZhLWZ3XFxcIiB0aXRsZT1cXFwiRGVhZCB0ZWFtc1xcXCI+PC9pPiBEZWFkIFRlYW1zPC9hPlxcblwiICtcbiAgICBcIiAgICA8L2xpPlxcblwiICtcbiAgICBcIiAgPC91bD5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8IS0tIHBsYWNlaG9sZGVyIGZvciBhbGl2ZSBhbmQgZGVhZCB0ZWFtcyAtLT5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJ0ZWFtcy1jb250ZW50XFxcIiB1aS12aWV3PVxcXCJ0ZWFtc0NvbnRlbnRcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvdXNlci9yZXNldC91c2VyLnJlc2V0LnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL3VzZXIvcmVzZXQvdXNlci5yZXNldC50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+UmVzZXQgUGFzc3dvcmQ8L2gzPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgPGZvcm0gbmFtZT1cXFwicmVzZXRQYXNzd29yZEZvcm1cXFwiIGNsYXNzPVxcXCJyZXNldC1wYXNzd29yZC1mb3JtIGZvcm0taG9yaXpvbnRhbFxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZT5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IocmVzZXRQYXNzd29yZEZvcm0uZW1haWwpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IocmVzZXRQYXNzd29yZEZvcm0uZW1haWwpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGZvcj1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIj5FbWFpbDo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8aW5wdXQgaWQ9XFxcImVtYWlsXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciB5b3VyIGVtYWlsXFxcIiBuZy1tb2RlbD1cXFwidXNlckRhdGEuZW1haWxcXFwiIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJpbnB1dC1lcnJvclxcXCIgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihyZXNldFBhc3N3b3JkRm9ybS5lbWFpbCwgJ3JlcXVpcmVkJylcXFwiPlJlcXVpcmVkPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IocmVzZXRQYXNzd29yZEZvcm0uZW1haWwsICdlbWFpbCcpXFxcIj5JbnZhbGlkIGVtYWlsPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKHJlc2V0UGFzc3dvcmRGb3JtLmVtYWlsKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZm9ybT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwicmVzZXRQYXNzd29yZEZvcm0uJHByaXN0aW5lIHx8IHJlc2V0UGFzc3dvcmRGb3JtLiRpbnZhbGlkXFxcIiBuZy1jbGljaz1cXFwicmVzZXQodXNlckRhdGEuZW1haWwpXFxcIj5SZXNldDwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvdXNlci91c2VyLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL3VzZXIvdXNlci50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8aDMgY2xhc3M9XFxcInBhbmVsLXRpdGxlXFxcIj5Vc2VyIFByb2ZpbGU8L2gzPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8Zm9ybSBuYW1lPVxcXCJlZGl0VXNlckZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IoZWRpdFVzZXJGb3JtLmZpcnN0TmFtZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihlZGl0VXNlckZvcm0uZmlyc3ROYW1lKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiZmlyc3ROYW1lXFxcIj5GaXJzdCBOYW1lXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihlZGl0VXNlckZvcm0uZmlyc3ROYW1lLCAncmVxdWlyZWQnKVxcXCI+WyBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGVkaXRVc2VyRm9ybS5maXJzdE5hbWUsICdtYXhsZW5ndGgnKVxcXCI+WyBUb28gTG9uZyBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJmaXJzdE5hbWVcXFwiIG5hbWU9XFxcImZpcnN0TmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcInVzZXJEYXRhLnVzZXIuZmlyc3RfbmFtZVxcXCIgbmctbWF4bGVuZ3RoPVxcXCIxNVxcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKGVkaXRVc2VyRm9ybS5maXJzdE5hbWUpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihlZGl0VXNlckZvcm0ubGFzdE5hbWUpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IoZWRpdFVzZXJGb3JtLmxhc3ROYW1lKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwibGFzdE5hbWVcXFwiPkxhc3QgTmFtZVxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoZWRpdFVzZXJGb3JtLmxhc3ROYW1lLCAncmVxdWlyZWQnKVxcXCI+WyBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGVkaXRVc2VyRm9ybS5sYXN0TmFtZSwgJ21heGxlbmd0aCcpXFxcIj5bIFRvbyBMb25nIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcImxhc3ROYW1lXFxcIiBuYW1lPVxcXCJsYXN0TmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcInVzZXJEYXRhLnVzZXIubGFzdF9uYW1lXFxcIiBuZy1tYXhsZW5ndGg9XFxcIjIwXFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IoZWRpdFVzZXJGb3JtLmxhc3ROYW1lKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJlbWFpbFxcXCI+RW1haWw8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJlbWFpbFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIHR5cGU9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1kaXNhYmxlZD1cXFwidHJ1ZVxcXCIgbmctbW9kZWw9XFxcInVzZXJEYXRhLnVzZXIuZW1haWxcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihlZGl0VXNlckZvcm0ucGFzc3dvcmQpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IoZWRpdFVzZXJGb3JtLnBhc3N3b3JkKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwicGFzc3dvcmRcXFwiPk5ldyBQYXNzd29yZFxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoZWRpdFVzZXJGb3JtLnBhc3N3b3JkLCAnbWlubGVuZ3RoJylcXFwiPlsgOCAtIDUwIENoYXJhY3RlcnMgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihlZGl0VXNlckZvcm0ucGFzc3dvcmQsICdtYXhsZW5ndGgnKVxcXCI+WyA4IC0gNTAgQ2hhcmFjdGVycyBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwicGFzc3dvcmRcXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidXNlckRhdGEudXNlci5wYXNzd29yZFxcXCIgbmctbWlubGVuZ3RoPVxcXCI4XFxcIiBuZy1tYXhsZW5ndGg9XFxcIjUwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IoZWRpdFVzZXJGb3JtLnBhc3N3b3JkKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IoZWRpdFVzZXJGb3JtLmNvbmZpcm1QYXNzd29yZCksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihlZGl0VXNlckZvcm0uY29uZmlybVBhc3N3b3JkKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiY29uZmlybVBhc3N3b3JkXFxcIj5Db25maXJtIE5ldyBQYXNzd29yZFxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoZWRpdFVzZXJGb3JtLmNvbmZpcm1QYXNzd29yZCwgJ21hdGNoJylcXFwiPlsgTm8gTWF0Y2ggXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiBuYW1lPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidXNlckRhdGEudXNlci5wYXNzd29yZF9jb25maXJtYXRpb25cXFwiIG1hdGNoPVxcXCJ1c2VyRGF0YS51c2VyLnBhc3N3b3JkXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IoZWRpdFVzZXJGb3JtLmNvbmZpcm1QYXNzd29yZClcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWluZm8gYnRuLWJsb2NrXFxcIiBuZy1kaXNhYmxlZD1cXFwiZWRpdFVzZXJGb3JtLiRwcmlzdGluZSB8fCBlZGl0VXNlckZvcm0uJGludmFsaWRcXFwiIG5nLWNsaWNrPVxcXCJ1cGRhdGUodXNlckRhdGEudXNlcilcXFwiPlVwZGF0ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICAgIDwvZm9ybT5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3B1YmxpYy9hYnVzZS9hYnVzZS50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHVibGljL2FidXNlL2FidXNlLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5Db250YWN0IFVzPC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxmb3JtIG5hbWU9XFxcImFidXNlRm9ybVxcXCIgY2xhc3M9XFxcImNvbnRhY3QtZm9ybSBmb3JtLWhvcml6b250YWxcXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKGFidXNlRm9ybS5tZXNzYWdlKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKGFidXNlRm9ybS5tZXNzYWdlKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBmb3I9XFxcIm1lc3NhZ2VcXFwiIGNsYXNzPVxcXCJjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIj5NZXNzYWdlOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDx0ZXh0YXJlYSBpZD1cXFwibWVzc2FnZVxcXCIgbmFtZT1cXFwibWVzc2FnZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIldoYXQncyBvbiB5b3VyIG1pbmQ/XFxcIiByb3dzPVxcXCIzXFxcIiBtYXhsZW5ndGg9XFxcIjIwMFxcXCIgbmctbW9kZWw9XFxcImFidXNlTWVzc2FnZVxcXCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoYWJ1c2VGb3JtLm1lc3NhZ2UsICdyZXF1aXJlZCcpXFxcIj5SZXF1aXJlZDwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGFidXNlRm9ybS5tZXNzYWdlLCAnbWF4bGVuZ3RoJylcXFwiPlRvbyBMb25nPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKGFidXNlRm9ybS5tZXNzYWdlKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZm9ybT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwiYWJ1c2VGb3JtLiRwcmlzdGluZSB8fCBhYnVzZUZvcm0uJGludmFsaWRcXFwiIG5nLWNsaWNrPVxcXCJjb250YWN0VXMoYWJ1c2VNZXNzYWdlKVxcXCI+U2VuZDwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3B1YmxpYy9mYXEvZmFxLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wdWJsaWMvZmFxL2ZhcS50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjbG9zZSgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5GQVE8L2gzPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgPGRsIGNsYXNzPVxcXCJmYXFcXFwiPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+SG93IGRvIEkgcGxheT88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+XFxuXCIgK1xuICAgIFwiICAgICAgPHA+LSBKb2luIGEgc2luZ2xlIGVsaW1pbmF0aW9uIG9yIG5vbi1lbGltaW5hdGlvbiBsZWFndWUuPC9wPlxcblwiICtcbiAgICBcIiAgICAgIDxwPi0gUGljayBhIGRpZmZlcmVudCBsb3NlciBlYWNoIHdlZWsuPC9wPlxcblwiICtcbiAgICBcIiAgICAgIDxwPi0gUm9vdCBmb3IgeW91ciBsb3NlciB0byBsb3NlLi4uZHVoPC9wPlxcblwiICtcbiAgICBcIiAgICAgIDxwPi0gSW4gYSBub24tZWxpbWluYXRpb24gbGVhZ3VlLCBnZXQgdGhlIG1vc3QgcGlja3MgcmlnaHQgYW5kIHdpbi48L3A+XFxuXCIgK1xuICAgIFwiICAgICAgPHA+LSBJbiBzaW5nbGUgZWxpbWluYXRpb24gbGVhZ3VlLCBsYXN0IHRoZSBsb25nZXN0IGFuZCB3aW4uPC9wPlxcblwiICtcbiAgICBcIiAgICAgIDxwPi0gSGF2ZSBmdW4hPC9wPlxcblwiICtcbiAgICBcIiAgICA8L2RkPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+SG93IG11Y2ggZG9lcyBpdCBjb3N0PzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5aaXAuIFppbGNoLiBOYWRhLiBGcmVlZWVlZWVlZWVlZS4uLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5DYW4gSSBwaWNrIHRoZSBzYW1lIGxvc2VyIHR3aWNlPzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5Ob3BlLi4udW5sZXNzIHlvdSBtYWtlIHRoZSBwbGF5b2ZmcywgdGhlbiBhbGwgdGVhbXMgYXJlIG9uY2UgYWdhaW4gYXZhaWxhYmxlIHRvIGNob29zZSBmcm9tLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5EbyB0aWVzIGNvdW50IGFzIGEgbG9zcz88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+Tm8gc2lyLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5XaGF0IGlzIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gYSBwdWJsaWMgYW5kIHByaXZhdGUgbGVhZ3VlPzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5QdWJsaWMgbGVhZ3VlcyBhbGxvdyBhbnlvbmUgdG8gam9pbi4gUHJpdmF0ZSBsZWFndWVzIHJlcXVpcmUgYW4gaW52aXRhdGlvbiBmcm9tIHRoZSBjb21taXNoLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5UaGUgc2Vhc29uIGhhcyBhbHJlYWR5IHN0YXJ0ZWQsIGNhbiBJIHN0aWxsIHBsYXk/PC9kdD5cXG5cIiArXG4gICAgXCIgICAgPGRkPlllcC4gVGhlcmXigJlzIGFsd2F5cyBhbiBvcGVuIGxlYWd1ZSBvciBjcmVhdGUgeW91ciBvd24gbGVhZ3VlIHRvIHN0YXJ0IGFueXRpbWUgZHVyaW5nIHRoZSBzZWFzb24uPC9kZD5cXG5cIiArXG4gICAgXCIgICAgPGR0PldoZW4gaXMgdGhlIGRlYWRsaW5lIHRvIGpvaW4gYSBsZWFndWU/PC9kdD5cXG5cIiArXG4gICAgXCIgICAgPGRkPkpvaW4gYmVmb3JlIHRoZSBlbmQgb2YgdGhlIGxlYWd1ZSdzIGZpcnN0IHdlZWsuPC9kZD5cXG5cIiArXG4gICAgXCIgICAgPGR0PldoZW4gaXMgdGhlIGRlYWRsaW5lIHRvIG1ha2UgbXkgcGljaz88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+SnVzdCBnZXQgaXQgaW4gYmVmb3JlIGEgZ2FtZSBzdGFydHMuPC9kZD5cXG5cIiArXG4gICAgXCIgICAgPGR0PldoYXQgaWYgSSBmYWlsIHRvIG1ha2UgYSBwaWNrIGZvciBhIHdlZWs/PC9kdD5cXG5cIiArXG4gICAgXCIgICAgPGRkPkluIGEgc2luZ2xlIGVsaW1pbmF0aW9uIGxlYWd1ZSwgeW914oCZcmUgdG9hc3QuIEluIGEgbm9uLWVsaW1pbmF0aW9uIGxlYWd1ZSwgeW91J3ZlIGp1c3QgbWlzc2VkIGFuIG9wcG9ydHVuaXR5LiBEb24ndCBsZXQgaXQgaGFwcGVuIGFnYWluLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5DYW4gdGhlIGNvbW1pc2ggbWFrZSBwaWNrcyBmb3IgbWU/PC9kdD5cXG5cIiArXG4gICAgXCIgICAgPGRkPk5lZ2F0aXZlLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5Ib3cgbWFueSB0aW1lcyBjYW4gSSBqb2luIGEgbGVhZ3VlPzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5BcyBtdWNoIGFzIHRoZSBjb21taXNoIGFsbG93cyAod2l0aCBhIG1heCBvZiAxMCB0aW1lcykuPC9kZD5cXG5cIiArXG4gICAgXCIgICAgPGR0PkhvdyBkbyBJIHdpbj88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+SW4gYSBzaW5nbGUgZWxpbWluYXRpb24gbGVhZ3VlLCBkb27igJl0IGJlIHdyb25nLiAoT3IgYXQgbGVhc3QgYmUgdGhlIGxhc3Qgb25lIGluIHlvdXIgbGVhZ3VlIHRvIGJlIHdyb25nLikgSW4gYSBub24tZWxpbWluYXRpb24gbGVhZ3VlLCBnZXQgdGhlIG1vc3QgcGlja3MgcmlnaHQgdG8gd2luLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5XaGF0IGRvIEkgd2luPzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5UaGF0IGlzIGJldHdlZW4geW91IGFuZCB0aGUgY29tbWlzaCBvZiB0aGUgbGVhZ3VlLiBIb3dldmVyLCBwbGVhc2UgYmUgY2FyZWZ1bCB3aGVuIGRlYWxpbmcgd2l0aCBtb25leS4gRG9u4oCZdCBzZW5kIG1vbmV5IHRvIGFueW9uZSB5b3UgZG9u4oCZdCBrbm93LiBDb21tb24gc2Vuc2UsIHBsZWFzZS48L2RkPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+Q2FuIEkgc2VlIHRoZSBwaWNrcyBvZiBvdGhlcnMgaW4gbXkgbGVhZ3VlPzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5Pbmx5IGFmdGVyIHRoZSBnYW1lIGhhcyBzdGFydGVkLiAodGhpcyBpcyB0cnVlIGZvciB0aGUgY29tbWlzaCBhcyB3ZWxsKTwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5DYW4gSSBjcmVhdGUgbXkgb3duIGxlYWd1ZT88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+WW91IGJldGNoYS4gQ3JlYXRlIGEgc2luZ2xlIGVsaW1pbmF0aW9uIG9yIG5vbi1lbGltaW5hdGlvbiBsZWFndWUuPC9kZD5cXG5cIiArXG4gICAgXCIgICAgPGR0PkhvdyBkbyBJIGludml0ZSBteSBmcmllbmRzIHRvIGpvaW4gbXkgbGVhZ3VlPzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5PbiB5b3VyIGxlYWd1ZSBwYWdlIHlvdeKAmWxsIGZpbmQgYW4gJ0ludml0ZScgYnV0dG9uLiBVc2UgaXQuIFlvdeKAmWxsIGp1c3QgbmVlZCB0aGVpciBlbWFpbCBhZGRyZXNzLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5Ib3cgbWFueSBmcmllbmRzIGNhbiBqb2luIG15IGxlYWd1ZT88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+QXMgbWFueSBhcyB5b3UgbGlrZS4gSnVzdCB0byBwcm92ZSBpdCwgcHV0IGEgbGluayB0byB5b3VyIGxlYWd1ZSBvbiBGYWNlYm9vayBhbmQgc2VlIGlmIHlvdSBjYW4gZ2V0IGFsbCB5b3VyIEZhY2Vib29rIGZyaWVuZHMgdG8gam9pbi48L2RkPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+Q2FuIEkgc2V0IGEgbGltaXQgb24gaG93IG1hbnkgdGltZXMgYSBmcmllbmQgY2FuIGpvaW4gbXkgbGVhZ3VlPzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5Zb3Ugc3VyZSBjYW4uIDEgLSAxMCB0aW1lcy48L2RkPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+SG93IGRvIEkgc3RvcCBwZW9wbGUgZnJvbSBqb2luaW5nIG15IGxlYWd1ZT88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+Q2hhbmdlIHRoZSBsZWFndWUgdG8gcHJpdmF0ZS48L2RkPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+SG93IGNhbiBJIHJlbW92ZSBwZW9wbGUgZnJvbSBteSBsZWFndWU/PC9kdD5cXG5cIiArXG4gICAgXCIgICAgPGRkPllvdSBjYW7igJl0IGJ1dCB5b3UgY2FuIGRlYWN0aXZhdGUgKG9yIHJlYWN0aXZhdGUpIHRoZWlyIHRlYW0uIEEgZGVhY3RpdmF0ZWQgdGVhbSBpcyBoaWRkZW4gZnJvbSB2aWV3IGFuZCBjYW7igJl0IG1ha2UgYW55IHBpY2tzLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5DYW4gSSBlZGl0IG15IGxlYWd1ZT88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+WWVzLCBidXQgeW91IGNhbid0IGNoYW5nZSB0aGUgc3RhcnQgd2VlayBvciBmb3JtYXQgKHNpbmdsZSBlbGltaW5hdGlvbiBvciBubyBlbGltaW5hdGlvbikgYWZ0ZXIgdGhlIGxlYWd1ZSBzdGFydHMuPC9kZD5cXG5cIiArXG4gICAgXCIgICAgPGR0PkNhbiBJIGVkaXQgYSB0ZWFtIG5hbWUgaW4gbXkgbGVhZ3VlPzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5ZZXMsIHRoZSB0ZWFtJ3MgY29hY2ggb3IgdGhlIGNvbW1pc2ggY2FuIGVkaXQgYSB0ZWFtIG5hbWUuPC9kZD5cXG5cIiArXG4gICAgXCIgICAgPGR0PldoYXQgaWYgaSBzdGlsbCBoYXZlIHF1ZXN0aW9ucz88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+RmluZCB0aGUgQ29udGFjdCBVcyBidXR0b24uIFdlJ2xsIGdldCByaWdodCBiYWNrIHRvIHlvdS48L2RkPlxcblwiICtcbiAgICBcIiAgPC9kbD5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2xvc2UoKVxcXCI+Q2xvc2U8L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wdWJsaWMvaG9tZS9ob21lLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wdWJsaWMvaG9tZS9ob21lLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJob21lLWNvbnRlbnQtY29udGFpbmVyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGgxIGNsYXNzPVxcXCJoZWFkZXItanVtYm9cXFwiPkxvc2luZyBpcyBFdmVyeXRoaW5nLjwvaDE+XFxuXCIgK1xuICAgIFwiICAgIDxwIGNsYXNzPVxcXCJsZWFkXFxcIj5QaWNrIGEgZGlmZmVyZW50IE5GTCBsb3NlciBlYWNoIHdlZWsuIFNpbmdsZSBlbGltaW5hdGlvbiBvciBub24tZWxpbWluYXRpb24gbGVhZ3VlcyBhcmUgd2FpdGluZyBmb3IgeW91LiBKb2luIGFueXRpbWUgZm9yIGZyZWUuPC9wPlxcblwiICtcbiAgICBcIiAgPGRpdj5cXG5cIiArXG4gICAgXCIgICAgPGEgY2xhc3M9XFxcImN0YSBidG4gYnRuLXByaW1hcnkgYnRuLWxnXFxcIiByb2xlPVxcXCJidXR0b25cXFwiIG5nLWNsaWNrPVxcXCJqb2luTGVhZ3VlKGN1cnJlbnRTZWFzb25JZClcXFwiPkpvaW4gTGVhZ3VlPC9hPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2PlxcblwiICtcbiAgICBcIiAgICA8YSBjbGFzcz1cXFwiY3RhIGJ0biBidG4tcHJpbWFyeSBidG4tbGdcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCIgbmctY2xpY2s9XFxcImNyZWF0ZUxlYWd1ZShjdXJyZW50U2Vhc29uSWQpXFxcIj5DcmVhdGUgTGVhZ3VlPC9hPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHVibGljL3JlZ2lzdGVyL3JlZ2lzdGVyLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXIvcmVnaXN0ZXIudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPlJlZ2lzdGVyPC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxmb3JtIG5hbWU9XFxcIm5ld1VzZXJGb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKG5ld1VzZXJGb3JtLmZpcnN0TmFtZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihuZXdVc2VyRm9ybS5maXJzdE5hbWUpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJmaXJzdE5hbWVcXFwiPkZpcnN0IE5hbWVcXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihuZXdVc2VyRm9ybS5maXJzdE5hbWUsICdyZXF1aXJlZCcpXFxcIj5bIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld1VzZXJGb3JtLmZpcnN0TmFtZSwgJ21heGxlbmd0aCcpXFxcIj5bIFRvbyBMb25nIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aW5wdXQgaWQ9XFxcImZpcnN0TmFtZVxcXCIgbmFtZT1cXFwiZmlyc3ROYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwibmV3VXNlckRhdGEuZmlyc3RfbmFtZVxcXCIgbmctbWF4bGVuZ3RoPVxcXCIxNVxcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKG5ld1VzZXJGb3JtLmZpcnN0TmFtZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKG5ld1VzZXJGb3JtLmxhc3ROYW1lKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKG5ld1VzZXJGb3JtLmxhc3ROYW1lKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwibGFzdE5hbWVcXFwiPkxhc3QgTmFtZVxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld1VzZXJGb3JtLmxhc3ROYW1lLCAncmVxdWlyZWQnKVxcXCI+WyBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihuZXdVc2VyRm9ybS5sYXN0TmFtZSwgJ21heGxlbmd0aCcpXFxcIj5bIFRvbyBMb25nIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aW5wdXQgaWQ9XFxcImxhc3ROYW1lXFxcIiBuYW1lPVxcXCJsYXN0TmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcIm5ld1VzZXJEYXRhLmxhc3RfbmFtZVxcXCIgbmctbWF4bGVuZ3RoPVxcXCIyMFxcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKG5ld1VzZXJGb3JtLmxhc3ROYW1lKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJ1c2VyLW5pY2tuYW1lIHJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcIm5pY2tuYW1lXFxcIj5OaWNrbmFtZTwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpbnB1dCBpZD1cXFwibmlja25hbWVcXFwiIG5hbWU9XFxcIm5pY2tuYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwibmV3VXNlckRhdGEubmlja25hbWVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKG5ld1VzZXJGb3JtLmVtYWlsKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKG5ld1VzZXJGb3JtLmVtYWlsKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiZW1haWxcXFwiPkVtYWlsXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobmV3VXNlckZvcm0uZW1haWwsICdyZXF1aXJlZCcpXFxcIj5bIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld1VzZXJGb3JtLmVtYWlsLCAnZW1haWwnKVxcXCI+WyBJbnZhbGlkIEVtYWlsIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aW5wdXQgaWQ9XFxcImVtYWlsXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJuZXdVc2VyRGF0YS5lbWFpbFxcXCIgbG9naC1mb2N1cyByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IobmV3VXNlckZvcm0uZW1haWwpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihuZXdVc2VyRm9ybS5jb25maXJtRW1haWwpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IobmV3VXNlckZvcm0uY29uZmlybUVtYWlsKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiY29uZmlybUVtYWlsXFxcIj5Db25maXJtIEVtYWlsXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobmV3VXNlckZvcm0uY29uZmlybUVtYWlsLCAnbWF0Y2gnKVxcXCI+WyBObyBNYXRjaCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJjb25maXJtRW1haWxcXFwiIG5hbWU9XFxcImNvbmZpcm1FbWFpbFxcXCIgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJuZXdVc2VyRGF0YS5lbWFpbF9jb25maXJtYXRpb25cXFwiIG1hdGNoPVxcXCJuZXdVc2VyRGF0YS5lbWFpbFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKG5ld1VzZXJGb3JtLmNvbmZpcm1FbWFpbClcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihuZXdVc2VyRm9ybS5wYXNzd29yZCksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihuZXdVc2VyRm9ybS5wYXNzd29yZCl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcInBhc3N3b3JkXFxcIj5QYXNzd29yZFxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld1VzZXJGb3JtLnBhc3N3b3JkLCAncmVxdWlyZWQnKVxcXCI+WyBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihuZXdVc2VyRm9ybS5wYXNzd29yZCwgJ21pbmxlbmd0aCcpXFxcIj5bIDggLSA1MCBDaGFyYWN0ZXJzIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld1VzZXJGb3JtLnBhc3N3b3JkLCAnbWF4bGVuZ3RoJylcXFwiPlsgOCAtIDUwIENoYXJhY3RlcnMgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpbnB1dCBpZD1cXFwicGFzc3dvcmRcXFwiIG5hbWU9XFxcInBhc3N3b3JkXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcIm5ld1VzZXJEYXRhLnBhc3N3b3JkXFxcIiBuZy1taW5sZW5ndGg9XFxcIjhcXFwiIG5nLW1heGxlbmd0aD1cXFwiNTBcXFwiIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihuZXdVc2VyRm9ybS5wYXNzd29yZClcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKG5ld1VzZXJGb3JtLmNvbmZpcm1QYXNzd29yZCksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihuZXdVc2VyRm9ybS5jb25maXJtUGFzc3dvcmQpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiPkNvbmZpcm0gUGFzc3dvcmRcXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihuZXdVc2VyRm9ybS5jb25maXJtUGFzc3dvcmQsICdtYXRjaCcpXFxcIj5bIE5vIE1hdGNoIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aW5wdXQgaWQ9XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgbmFtZT1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcIm5ld1VzZXJEYXRhLnBhc3N3b3JkX2NvbmZpcm1hdGlvblxcXCIgbWF0Y2g9XFxcIm5ld1VzZXJEYXRhLnBhc3N3b3JkXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IobmV3VXNlckZvcm0uY29uZmlybVBhc3N3b3JkKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJ0ZXJtcyB3ZWxsIHdlbGwtc21cXFwiPjxzdHJvbmc+QnkgY2xpY2tpbmcgcmVnaXN0ZXIsIHlvdSBhZ3JlZSB0byB0aGUgPGEgbmctY2xpY2s9XFxcInNob3dUZXJtcygpXFxcIj50ZXJtcyBvZiB1c2UuPC9hPjwvc3Ryb25nPjwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9mb3JtPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+Q2FuY2VsPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctZGlzYWJsZWQ9XFxcIm5ld1VzZXJGb3JtLiRpbnZhbGlkXFxcIiBuZy1jbGljaz1cXFwicmVnaXN0ZXIobmV3VXNlckRhdGEpXFxcIj5SZWdpc3RlcjwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci90ZXJtcy9yZWdpc3Rlci50ZXJtcy50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHVibGljL3JlZ2lzdGVyL3Rlcm1zL3JlZ2lzdGVyLnRlcm1zLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgbmctY2xpY2s9XFxcImNsb3NlKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPlRlcm1zIG9mIFVzZTwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8cD5JZiB5b3UgY2hvb3NlIHRvIHVzZSB0aGlzIHNpdGUgZm9yIGdhbWJsaW5nIHB1cnBvc2VzLCB5b3UgYXNzdW1lIGFsbCByaXNrcy4gRG9uJ3QgYmUgYSBkdW1teSBhbmQgc2VuZCBtb25leSB0byBwZW9wbGUgeW91IGRvbid0IGtub3cgYW5kIHRydXN0LiBVc2UgeW91ciBjYWJlemEuPC9wPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJjbG9zZSgpXFxcIj5DbG9zZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3B1YmxpYy9zaWduaW4vc2lnbmluLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wdWJsaWMvc2lnbmluL3NpZ25pbi50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwic2lnbmluLWJveCBwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgICA8Zm9ybSBuYW1lPVxcXCJzaWduaW5Gb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBuZy1zdWJtaXQ9XFxcInNpZ25pbih7IGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbC50b0xvd2VyQ2FzZSgpLCBwYXNzd29yZDogY3JlZGVudGlhbHMucGFzc3dvcmQgfSlcXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWVudmVsb3BlIGZhLWZ3XFxcIj48L2k+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW1haWxcXFwiIG5nLW1vZGVsPVxcXCJjcmVkZW50aWFscy5lbWFpbFxcXCIgcmMtdmVyaWZ5LXNldCBhdXRvZm9jdXMgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWFkZG9uXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEta2V5IGZhLWZ3XFxcIj48L2k+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIiBwbGFjZWhvbGRlcj1cXFwiUGFzc3dvcmRcXFwiIG5nLW1vZGVsPVxcXCJjcmVkZW50aWFscy5wYXNzd29yZFxcXCIgcmMtdmVyaWZ5LXNldCByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDxkaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8YSBjbGFzcz1cXFwiZm9yZ290LXBhc3N3b3JkIGJ0biBidG4tbGluayBwdWxsLWxlZnRcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCIgbmctY2xpY2s9XFxcInJlc2V0UGFzc3dvcmQoKVxcXCI+Rm9yZ290IFBhc3N3b3JkPzwvYT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwic2lnbi1pbi1idG4gYnRuIGJ0bi1wcmltYXJ5IHB1bGwtcmlnaHRcXFwiIG5nLWRpc2FibGVkPVxcXCJzaWduaW5Gb3JtLiRpbnZhbGlkXFxcIj5TaWduIGluPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBzdHlsZT1cXFwiY2xlYXI6IGJvdGg7XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8aHI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwicmVnaXN0ZXJcXFwiPjxhIG5nLWNsaWNrPVxcXCJyZWdpc3RlcigpXFxcIj5Eb24ndCBoYXZlIGFuIGFjY291bnQ/IDxzdHJvbmc+UmVnaXN0ZXI8L3N0cm9uZz48L2E+PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZm9ybT5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcbiIsIid1c2Ugc3RyaWN0JztcbnJlcXVpcmUoJ2FwcC10ZW1wbGF0ZXMnKTtcblxuXG52YXIgQXBwID0gZnVuY3Rpb24oJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgLy8gdW5tYXRjaGVkIHVybHMgc2hvdWxkIGJlIGRpcmVjdGVkIGJhY2sgdG8gdGhlIHN0YXJ0XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xufTtcblxuQXBwLiRpbmplY3QgPSBbJyR1cmxSb3V0ZXJQcm92aWRlciddO1xuXG52YXIgbG9naEFwcCA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwJywgW1xuICAgICduZ0Nvb2tpZXMnLFxuICAgICduZ1Jlc291cmNlJyxcbiAgICAnbmdTYW5pdGl6ZScsXG4gICAgJ25nUm91dGUnLFxuICAgICdjb21tYW5ndWxhcicsXG4gICAgJ3VpLnJvdXRlcicsXG4gICAgJ3VpLmJvb3RzdHJhcCcsXG4gICAgJ2FwcC50ZW1wbGF0ZXMnLFxuICAgICd1aS5yb3V0ZXIuc3RhdGVIZWxwZXInLFxuICAgICdhbmd1bGFyLWxvYWRpbmctYmFyJyxcblxuICAgIC8vIHB1YmxpYyBtb2R1bGVzXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3B1YmxpYy9ob21lJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHVibGljL2ZhcScpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3B1YmxpYy9hYnVzZScpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3B1YmxpYy9zaWduaW4nKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXInKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXIvdGVybXMnKS5uYW1lLFxuXG4gICAgLy8gcHJpdmF0ZSBtb2R1bGVzXG4gICAgLy8gdXNlclxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL3VzZXInKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL3VzZXIvcmVzZXQnKS5uYW1lLFxuICAgIC8vIGxlYWd1ZVxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2xlYWd1ZScpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL25ldycpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL3ZpZXcnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9lZGl0JykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvY29udGFjdCcpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL21lc3NhZ2UnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9qb2luJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlL3JlcXVlc3QnKS5uYW1lLFxuICAgIC8vIGxlYWd1ZXNcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4nKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9wdWJsaWMnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9wcml2YXRlJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL21hbmFnZScpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9teScpLm5hbWUsXG4gICAgLy8gdGVhbVxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL3RlYW0nKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL3RlYW0vdmlldycpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvdGVhbS9lZGl0JykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS90ZWFtL21lc3NhZ2UnKS5uYW1lLFxuICAgIC8vIHRlYW1zXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvdGVhbXMnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL3RlYW1zL2FsaXZlJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS90ZWFtcy9kZWFkJykubmFtZSxcbiAgICAvLyBwbGF5XG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvcGxheScpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvcGxheS9sZWFndWVzJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9wbGF5L3RlYW1zJykubmFtZSxcbiAgICAvLyBwaWNrXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvcGljay9tYWtlJykubmFtZSxcbiAgICAvLyBnYW1lXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvYWRtaW4nKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2FkbWluL2dhbWVzJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9nYW1lcy9lZGl0JykubmFtZSxcblxuICAgIC8vIGhlbHBlciBtb2R1bGVzXG4gICAgcmVxdWlyZSgnLi9jb21tb24vbW9kdWxlcy9oZWFkZXInKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vY29tbW9uL21vZHVsZXMvbWVzc2FnZScpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9jb21tb24vbW9kdWxlcy9mb290ZXInKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vY29tbW9uL21vZHVsZXMvY29uZmlybScpLm5hbWUsXG5cbiAgICByZXF1aXJlKCcuL2NvbW1vbi9hc3BlY3RzJykubmFtZSxcbiAgICByZXF1aXJlKCcuL2NvbW1vbi9tb2RlbHMnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vY29tbW9uL2FwaScpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9jb21tb24vY29tbWFuZCcpLm5hbWUsXG5cbiAgICByZXF1aXJlKCcuL2NvbW1vbi9zZXJ2aWNlL2FwcGxpY2F0aW9uJykubmFtZSxcblxuICAgIC8vZGlyZWN0aXZlc1xuICAgIHJlcXVpcmUoJy4vY29tbW9uL2RpcmVjdGl2ZXMvZm9jdXMnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vY29tbW9uL2RpcmVjdGl2ZXMvbWF0Y2gnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vY29tbW9uL2RpcmVjdGl2ZXMvcmNTdWJtaXQnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vY29tbW9uL2RpcmVjdGl2ZXMvcmNWZXJpZnlTZXQnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vY29tbW9uL2RpcmVjdGl2ZXMvcmVxdWlyZWRQYXR0ZXJuJykubmFtZSxcblxuICAgIC8vbW9kYWxzXG5cbiAgICAvL2ZpbHRlcnNcbiAgICByZXF1aXJlKCcuL2NvbW1vbi9maWx0ZXJzJykubmFtZVxuXG4gICAgXSwgQXBwKVxuXG4gICAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIsICRsb2dQcm92aWRlciwgJHVpVmlld1Njcm9sbFByb3ZpZGVyLCAkYW5jaG9yU2Nyb2xsUHJvdmlkZXIpIHtcbiAgICAgICAgLy8gdXNlIHRoZSBIVE1MNSBIaXN0b3J5IEFQSVxuICAgICAgICAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUoZmFsc2UpO1xuXG4gICAgICAgIC8vIGRpc2FibGVzIGF1dG8tc2Nyb2xsXG4gICAgICAgICR1aVZpZXdTY3JvbGxQcm92aWRlci51c2VBbmNob3JTY3JvbGwoKTtcbiAgICAgICAgJGFuY2hvclNjcm9sbFByb3ZpZGVyLmRpc2FibGVBdXRvU2Nyb2xsaW5nKCk7XG5cbiAgICAgICAgLy8gdHVybnMgb24vb2ZmIGRlYnVnIGNvbnNvbGUgbG9nIHN0YXRlbWVudHNcbiAgICAgICAgJGxvZ1Byb3ZpZGVyLmRlYnVnRW5hYmxlZCh0cnVlKTtcblxuICAgICAgICAvLyBkZWZpbmVzIHJvb3Qgc3RhdGVzXG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ3B1YmxpYycsIHtcbiAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1cmw6ICcvJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi90ZW1wbGF0ZXMvbWFzdGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgICAgICAgICAgIHNlYXNvbnM6IGZ1bmN0aW9uKHNlYXNvblNlcnZpY2UsIHNlYXNvbk1vZGVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNlYXNvbk1vZGVsLmxvYWRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWFzb25TZXJ2aWNlLmdldFNlYXNvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ3ByaXZhdGUnLCB7XG4gICAgICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgdXJsOiAnLycsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vdGVtcGxhdGVzL21hc3Rlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgICAgICAgICAgICB1c2VyOiBmdW5jdGlvbih1c2VyU2VydmljZSwgdXNlck1vZGVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXNlck1vZGVsLnVzZXIubG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZXJNb2RlbC51c2VyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXNlclNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc2Vhc29uczogZnVuY3Rpb24oc2Vhc29uU2VydmljZSwgc2Vhc29uTW9kZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2Vhc29uTW9kZWwubG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlYXNvblNlcnZpY2UuZ2V0U2Vhc29ucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgLnJ1bihmdW5jdGlvbigkcm9vdFNjb3BlLCAkdXJsUm91dGVyLCAkbG9nLCBhcHBsaWNhdGlvblNlcnZpY2UpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIkFwcGxpY2F0aW9uIHN0YXJ0aW5nIHVwLi4uXCIpO1xuICAgICAgICBhcHBsaWNhdGlvblNlcnZpY2Uuc3RhcnR1cCgpO1xuICAgIH0pXG47XG5cbmxvZ2hBcHAuZmFjdG9yeSgnYXV0aEludGVyY2VwdG9yJywgZnVuY3Rpb24gKCRxLCAkd2luZG93LCAkbG9jYXRpb24sICR0aW1lb3V0LCB1c2VyTW9kZWwsIG1lc3NhZ2VNb2RlbCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlcXVlc3Q6IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgICAgIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG4gICAgICAgICAgICBpZiAoJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS50b2tlbikge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSAkd2luZG93LnNlc3Npb25TdG9yYWdlLnRva2VuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICAgICAgfSxcbiAgICAgICAgcmVzcG9uc2VFcnJvcjogZnVuY3Rpb24gKHJlamVjdGlvbikge1xuICAgICAgICAgIHZhciBtZXNzYWdlO1xuICAgICAgICAgIGlmIChyZWplY3Rpb24uc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGF0aCA9ICRsb2NhdGlvbi5wYXRoKCk7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IHJlamVjdGlvbi5kYXRhLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgdXNlck1vZGVsLnJlc2V0VXNlcigpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGxvY2F0aW9uLnBhdGgoKSA9PSAnL3NpZ25pbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKG1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKG1lc3NhZ2UsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2F0aW9uLnBhdGgoJy9zaWduaW4nKS5zZWFyY2goeyByZWRpcmVjdDogZW5jb2RlVVJJQ29tcG9uZW50KHBhdGgpIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlamVjdGlvbi5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgICAgICBtZXNzYWdlID0geyB0eXBlOiAnZGFuZ2VyJywgY29udGVudDogJ0hvdXN0b24sIHdlIGhhdmUgYSBwcm9ibGVtLiBQYWdlIG5vdCBmb3VuZC4nIH07XG4gICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKG1lc3NhZ2UsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgJGxvY2F0aW9uLnBhdGgoJy8nKTtcbiAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuICRxLnJlamVjdChyZWplY3Rpb24pO1xuICAgICAgICB9XG4gICAgfTtcbn0pO1xuXG5sb2doQXBwLmNvbmZpZyhmdW5jdGlvbiAoJGh0dHBQcm92aWRlcikge1xuICAgICRodHRwUHJvdmlkZXIuaW50ZXJjZXB0b3JzLnB1c2goJ2F1dGhJbnRlcmNlcHRvcicpO1xufSk7XG5cblxuXG5cblxuXG5cblxuXG4iLCJcbnJlcXVpcmUoXCIuL1Rlc3RBc3BlY3RcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuYXNwZWN0cycsIFtdKVxuICAgIC5jb25maWcoIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgLy9UT0RPIGFzcGVjdCBjb25maWcgaWYgbmVjZXNzYXJ5XG4gICAgfVxuKTsiLCIvKipcbiAqIERlZmluZSB0aGUgcmVtb3RlIHNlcnZpY2VzXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuYXBpJywgW10pXG4gICAgICAuY29uc3RhbnQoJ2FwaUNvbmZpZycsIHJlcXVpcmUoJy4vQXBpQ29uZmlnJykpXG4gICAgICAuc2VydmljZSgndXNlclNlcnZpY2UnLCByZXF1aXJlKCcuL1VzZXJTZXJ2aWNlJykpXG4gICAgICAuc2VydmljZSgnbGVhZ3VlU2VydmljZScsIHJlcXVpcmUoJy4vTGVhZ3VlU2VydmljZScpKVxuICAgICAgLnNlcnZpY2UoJ3RlYW1TZXJ2aWNlJywgcmVxdWlyZSgnLi9UZWFtU2VydmljZScpKVxuICAgICAgLnNlcnZpY2UoJ3BpY2tTZXJ2aWNlJywgcmVxdWlyZSgnLi9QaWNrU2VydmljZScpKVxuICAgICAgLnNlcnZpY2UoJ3NlYXNvblNlcnZpY2UnLCByZXF1aXJlKCcuL1NlYXNvblNlcnZpY2UnKSlcbiAgICAgIC5zZXJ2aWNlKCd3ZWVrU2VydmljZScsIHJlcXVpcmUoJy4vV2Vla1NlcnZpY2UnKSlcbiAgICAgIC5zZXJ2aWNlKCdnYW1lU2VydmljZScsIHJlcXVpcmUoJy4vR2FtZVNlcnZpY2UnKSlcbjtcbiIsIi8qKlxuICogRGVmaW5lIHRoZSBhcHBsaWNhdGlvbiBtb2RlbHNcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5tb2RlbHMnLCBbXSlcbiAgICAvL21vZGVsc1xuICAgIC5zZXJ2aWNlKCd1c2VyTW9kZWwnLCByZXF1aXJlKCcuL1VzZXJNb2RlbCcpKVxuICAgIC5zZXJ2aWNlKCdtZXNzYWdlTW9kZWwnLCByZXF1aXJlKCcuL01lc3NhZ2VNb2RlbCcpKVxuICAgIC5zZXJ2aWNlKCdzZWFzb25Nb2RlbCcsIHJlcXVpcmUoJy4vU2Vhc29uTW9kZWwnKSlcbjsiLCIvLyBzZXNzaW9uIGNvbW1hbmRzXG5yZXF1aXJlKCcuL3Nlc3Npb24vU2lnbmluQ29tbWFuZCcpO1xucmVxdWlyZSgnLi9zZXNzaW9uL1NpZ25vdXRDb21tYW5kJyk7XG5cbi8vIHVzZXIgY29tbWFuZHNcbnJlcXVpcmUoJy4vdXNlci9HZXRDdXJyZW50VXNlckNvbW1hbmQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5jb21tYW5kQ29uZmlnJywgW10pXG4gICAgLmNvbmZpZyhmdW5jdGlvbigkY29tbWFuZ3VsYXJQcm92aWRlcikge1xuXG4gICAgICAgIC8vIHNlc3Npb24gZXZlbnRzXG4gICAgICAgICRjb21tYW5ndWxhclByb3ZpZGVyLm1hcFRvKCdTaWduaW5FdmVudCcpLmFzU2VxdWVuY2UoKVxuICAgICAgICAgICAgLmFkZCgnU2lnbmluQ29tbWFuZCcpO1xuICAgICAgICAkY29tbWFuZ3VsYXJQcm92aWRlci5tYXBUbygnU2lnbm91dEV2ZW50JykuYXNTZXF1ZW5jZSgpXG4gICAgICAgICAgICAuYWRkKCdTaWdub3V0Q29tbWFuZCcpO1xuXG4gICAgICAgIC8vIHVzZXIgZXZlbnRzXG4gICAgICAgICRjb21tYW5ndWxhclByb3ZpZGVyLm1hcFRvKCdHZXRDdXJyZW50VXNlckV2ZW50JykuYXNTZXF1ZW5jZSgpXG4gICAgICAgICAgICAuYWRkKCdHZXRDdXJyZW50VXNlckNvbW1hbmQnKTtcblxuICAgIH1cbik7XG5cbiIsIlxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5wdWJsaWMuaG9tZScsIFtdKVxuICAgIC5jb250cm9sbGVyKCdIb21lQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vSG9tZUNvbnRyb2xsZXInKSlcbiAgICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgncHVibGljLmhvbWUnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgICAgICAgICB2aWV3czoge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvaGVhZGVyL2hlYWRlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnSGVhZGVyQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9tZXNzYWdlL21lc3NhZ2UudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ01lc3NhZ2VDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHVibGljL2hvbWUvaG9tZS50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnSG9tZUNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9mb290ZXIvZm9vdGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdGb290ZXJDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgICB9KTsiLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmFidXNlJywgW10pXG4gIC5jb250cm9sbGVyKCdBYnVzZUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL0FidXNlQ29udHJvbGxlcicpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuZmFxJywgW10pXG4gIC5jb250cm9sbGVyKCdGYXFDb250cm9sbGVyJywgcmVxdWlyZSgnLi9GYXFDb250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5wdWJsaWMuc2lnbmluJywgW10pXG4gIC5jb250cm9sbGVyKCdTaWduaW5Db250cm9sbGVyJywgcmVxdWlyZSgnLi9TaWduaW5Db250cm9sbGVyJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3B1YmxpYy5zaWduaW4nLCB7XG4gICAgICAgIHVybDogJ3NpZ25pbicsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2hlYWRlci9oZWFkZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0hlYWRlckNvbnRyb2xsZXInXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL21lc3NhZ2UvbWVzc2FnZS50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTWVzc2FnZUNvbnRyb2xsZXInXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHVibGljL3NpZ25pbi9zaWduaW4udHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1NpZ25pbkNvbnRyb2xsZXInXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvZm9vdGVyL2Zvb3Rlci50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnRm9vdGVyQ29udHJvbGxlcidcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnJlZ2lzdGVyJywgW10pXG4gIC5jb250cm9sbGVyKCdSZWdpc3RlckNvbnRyb2xsZXInLCByZXF1aXJlKCcuL1JlZ2lzdGVyQ29udHJvbGxlcicpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAudXNlcicsIFtdKVxuICAgIC5jb250cm9sbGVyKCdVc2VyQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vVXNlckNvbnRyb2xsZXInKSlcbiAgICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgncHJpdmF0ZS51c2VyJywge1xuICAgICAgICAgICAgICAgIHVybDogJ3VzZXInLFxuICAgICAgICAgICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9oZWFkZXIvaGVhZGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdIZWFkZXJDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL21lc3NhZ2UvbWVzc2FnZS50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTWVzc2FnZUNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL3VzZXIvdXNlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVXNlckNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9mb290ZXIvZm9vdGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdGb290ZXJDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgICB9KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubGVhZ3VlJywgW10pXG4gICAgLmNvbnRyb2xsZXIoJ0xlYWd1ZUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL0xlYWd1ZUNvbnRyb2xsZXInKSlcbiAgICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgncHJpdmF0ZS5sZWFndWUnLCB7XG4gICAgICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgdXJsOiAnc2Vhc29uL3tzZWFzb25JZH0vbGVhZ3VlJyxcbiAgICAgICAgICAgICAgICB2aWV3czoge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvaGVhZGVyL2hlYWRlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnSGVhZGVyQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9tZXNzYWdlL21lc3NhZ2UudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ01lc3NhZ2VDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbGVhZ3VlLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdMZWFndWVDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvZm9vdGVyL2Zvb3Rlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnRm9vdGVyQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gICAgfSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmxlYWd1ZXMnLCBbXSlcbiAgICAuY29udHJvbGxlcignTGVhZ3Vlc0NvbnRyb2xsZXInLCByZXF1aXJlKCcuL0xlYWd1ZXNDb250cm9sbGVyJykpXG4gICAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ3ByaXZhdGUubGVhZ3VlcycsIHtcbiAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1cmw6ICdzZWFzb24ve3NlYXNvbklkfS9sZWFndWVzJyxcbiAgICAgICAgICAgICAgICB2aWV3czoge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvaGVhZGVyL2hlYWRlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnSGVhZGVyQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9tZXNzYWdlL21lc3NhZ2UudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ01lc3NhZ2VDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2xlYWd1ZXMudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0xlYWd1ZXNDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvZm9vdGVyL2Zvb3Rlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnRm9vdGVyQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gICAgfSk7XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAudGVhbScsIFtdKVxuICAgIC5jb250cm9sbGVyKCdUZWFtQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vVGVhbUNvbnRyb2xsZXInKSlcbiAgICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgncHJpdmF0ZS50ZWFtJywge1xuICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHVybDogJ3NlYXNvbi97c2Vhc29uSWR9L2xlYWd1ZS97bGVhZ3VlSWR9L3RlYW0nLFxuICAgICAgICAgICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9oZWFkZXIvaGVhZGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdIZWFkZXJDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL21lc3NhZ2UvbWVzc2FnZS50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTWVzc2FnZUNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL3RlYW0vdGVhbS50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVGVhbUNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9mb290ZXIvZm9vdGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdGb290ZXJDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICAgIH0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC50ZWFtcycsIFtdKVxuICAgIC5jb250cm9sbGVyKCdUZWFtc0NvbnRyb2xsZXInLCByZXF1aXJlKCcuL1RlYW1zQ29udHJvbGxlcicpKVxuICAgIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdwcml2YXRlLnRlYW1zJywge1xuICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHVybDogJ3NlYXNvbi97c2Vhc29uSWR9L3RlYW1zJyxcbiAgICAgICAgICAgICAgICB2aWV3czoge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvaGVhZGVyL2hlYWRlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnSGVhZGVyQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9tZXNzYWdlL21lc3NhZ2UudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ01lc3NhZ2VDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS90ZWFtcy90ZWFtcy50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVGVhbXNDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvZm9vdGVyL2Zvb3Rlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnRm9vdGVyQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICAgIH0pO1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnBsYXknLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ1BsYXlDb250cm9sbGVyJywgcmVxdWlyZSgnLi9QbGF5Q29udHJvbGxlcicpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcml2YXRlLnBsYXknLCB7XG4gICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICB1cmw6ICdzZWFzb24ve3NlYXNvbklkfS9teScsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2hlYWRlci9oZWFkZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0hlYWRlckNvbnRyb2xsZXInXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL21lc3NhZ2UvbWVzc2FnZS50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTWVzc2FnZUNvbnRyb2xsZXInXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9wbGF5L3BsYXkudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1BsYXlDb250cm9sbGVyJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZm9vdGVyOiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2Zvb3Rlci9mb290ZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0Zvb3RlckNvbnRyb2xsZXInXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmFkbWluJywgW10pXG4gIC5jb250cm9sbGVyKCdBZG1pbkNvbnRyb2xsZXInLCByZXF1aXJlKCcuL0FkbWluQ29udHJvbGxlcicpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcml2YXRlLmFkbWluJywge1xuICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgdXJsOiAnYWRtaW4vJyxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvaGVhZGVyL2hlYWRlci50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnSGVhZGVyQ29udHJvbGxlcidcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvbWVzc2FnZS9tZXNzYWdlLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdNZXNzYWdlQ29udHJvbGxlcidcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2FkbWluL2FkbWluLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBZG1pbkNvbnRyb2xsZXInXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvZm9vdGVyL2Zvb3Rlci50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnRm9vdGVyQ29udHJvbGxlcidcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmhlYWRlcicsIFtdKVxuICAgIC5jb250cm9sbGVyKCdIZWFkZXJDb250cm9sbGVyJywgcmVxdWlyZSgnLi9IZWFkZXJDb250cm9sbGVyJykpIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5tZXNzYWdlJywgW10pXG4gICAgLmNvbnRyb2xsZXIoJ01lc3NhZ2VDb250cm9sbGVyJywgcmVxdWlyZSgnLi9NZXNzYWdlQ29udHJvbGxlcicpKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doLmNvbmZpcm0nLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0NvbmZpcm1Db250cm9sbGVyJywgcmVxdWlyZSgnLi9Db25maXJtQ29udHJvbGxlcicpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuZm9vdGVyJywgW10pXG4gIC5jb250cm9sbGVyKCdGb290ZXJDb250cm9sbGVyJywgcmVxdWlyZSgnLi9Gb290ZXJDb250cm9sbGVyJykpIiwiLyoqXG4gKiBEZWZpbmUgdGhlIGFwcGxpY2F0aW9uIHNlcnZpY2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naC5hcHBsaWNhdGlvbicsIFtdKVxuICAgIC5zZXJ2aWNlKCdhcHBsaWNhdGlvblNlcnZpY2UnLCByZXF1aXJlKCcuL0FwcGxpY2F0aW9uU2VydmljZScpKTsiLCIvL2FwcGxpY2F0aW9uIGRpcmVjdGl2ZXNcbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuZGlyZWN0aXZlcy5mb2N1cycsW10pXG4gICAgLmRpcmVjdGl2ZSgnbG9naEZvY3VzJywgcmVxdWlyZSgnLi9Gb2N1c0RpcmVjdGl2ZScpKVxuO1xuIiwiLy9hcHBsaWNhdGlvbiBkaXJlY3RpdmVzXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmRpcmVjdGl2ZXMubWF0Y2gnLFtdKVxuICAgIC5kaXJlY3RpdmUoJ21hdGNoJywgcmVxdWlyZSgnLi9NYXRjaERpcmVjdGl2ZScpKVxuO1xuIiwiLy9hcHBsaWNhdGlvbiBkaXJlY3RpdmVzXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doLmRpcmVjdGl2ZXMucmNTdWJtaXQnLFtdKVxuICAuZGlyZWN0aXZlKCdyY1N1Ym1pdCcsIHJlcXVpcmUoJy4vUkNTdWJtaXREaXJlY3RpdmUnKSk7XG4iLCIvKipcbiAqIERlZmluZSB0aGUgYXBwbGljYXRpb24gZmlsdGVyc1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmZpbHRlcnMnLCBbXSlcbiAgICAvL2ZpbHRlcnNcbiAgICAuZmlsdGVyKCdvZmZzZXRGaWx0ZXInLCByZXF1aXJlKCcuL09mZnNldEZpbHRlcicpKVxuICAgIC5maWx0ZXIoJ2FjdGl2ZVRlYW1GaWx0ZXInLCByZXF1aXJlKCcuL0FjdGl2ZVRlYW1GaWx0ZXInKSlcbiAgICAuZmlsdGVyKCdhbGl2ZVRlYW1GaWx0ZXInLCByZXF1aXJlKCcuL0FsaXZlVGVhbUZpbHRlcicpKVxuICAgIC5maWx0ZXIoJ29wZW5MZWFndWVGaWx0ZXInLCByZXF1aXJlKCcuL09wZW5MZWFndWVGaWx0ZXInKSlcbiAgICAuZmlsdGVyKCdtYW5hZ2VkTGVhZ3VlRmlsdGVyJywgcmVxdWlyZSgnLi9NYW5hZ2VkTGVhZ3VlRmlsdGVyJykpXG4gICAgLmZpbHRlcigndGltZUZpbHRlcicsIHJlcXVpcmUoJy4vVGltZUZpbHRlcicpKVxuO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5yZWdpc3Rlci50ZXJtcycsIFtdKVxuICAuY29udHJvbGxlcignUmVnaXN0ZXJUZXJtc0NvbnRyb2xsZXInLCByZXF1aXJlKCcuL1JlZ2lzdGVyVGVybXNDb250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC51c2VyLnJlc2V0JywgW10pXG4gIC5jb250cm9sbGVyKCdVc2VyUmVzZXRDb250cm9sbGVyJywgcmVxdWlyZSgnLi9Vc2VyUmVzZXRDb250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5sZWFndWUubmV3JywgW10pXG4gIC5jb250cm9sbGVyKCdOZXdMZWFndWVDb250cm9sbGVyJywgcmVxdWlyZSgnLi9OZXdMZWFndWVDb250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5sZWFndWUudmlldycsIFtdKVxuICAuY29udHJvbGxlcignVmlld0xlYWd1ZUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL1ZpZXdMZWFndWVDb250cm9sbGVyJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3ByaXZhdGUubGVhZ3VlLnZpZXcnLCB7XG4gICAgICAgIHVybDogJy97bGVhZ3VlSWR9JyxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICBsZWFndWVDb250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvdmlldy9sZWFndWUudmlldy50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnVmlld0xlYWd1ZUNvbnRyb2xsZXInXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgbGVhZ3VlOiBmdW5jdGlvbihsZWFndWVTZXJ2aWNlLCAkc3RhdGVQYXJhbXMpIHtcbiAgICAgICAgICAgIHJldHVybiBsZWFndWVTZXJ2aWNlLmdldExlYWd1ZSgkc3RhdGVQYXJhbXMuc2Vhc29uSWQsICRzdGF0ZVBhcmFtcy5sZWFndWVJZCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBsZWFndWVUZWFtczogZnVuY3Rpb24obGVhZ3VlLCB0ZWFtU2VydmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRlYW1TZXJ2aWNlLmdldEFsbExlYWd1ZVRlYW1zKHsgc2Vhc29uSWQ6IGxlYWd1ZS5kYXRhLnNlYXNvbl9pZCwgbGVhZ3VlSWQ6IGxlYWd1ZS5kYXRhLmlkIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubGVhZ3VlLmVkaXQnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0VkaXRMZWFndWVDb250cm9sbGVyJywgcmVxdWlyZSgnLi9FZGl0TGVhZ3VlQ29udHJvbGxlcicpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubGVhZ3VlLmNvbnRhY3QnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0xlYWd1ZUNvbnRhY3RDb250cm9sbGVyJywgcmVxdWlyZSgnLi9MZWFndWVDb250YWN0Q29udHJvbGxlcicpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubGVhZ3VlLm1lc3NhZ2UnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0xlYWd1ZU1lc3NhZ2VDb250cm9sbGVyJywgcmVxdWlyZSgnLi9MZWFndWVNZXNzYWdlQ29udHJvbGxlcicpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubGVhZ3VlLmpvaW4nLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0xlYWd1ZUpvaW5Db250cm9sbGVyJywgcmVxdWlyZSgnLi9MZWFndWVKb2luQ29udHJvbGxlcicpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubGVhZ3VlLmludml0ZScsIFtdKVxuICAuY29udHJvbGxlcignTGVhZ3VlSW52aXRlQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vTGVhZ3VlSW52aXRlQ29udHJvbGxlcicpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubGVhZ3Vlcy5qb2luJywgW10pXG4gIC5jb250cm9sbGVyKCdKb2luTGVhZ3Vlc0NvbnRyb2xsZXInLCByZXF1aXJlKCcuL0pvaW5MZWFndWVzQ29udHJvbGxlcicpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcml2YXRlLmxlYWd1ZXMuam9pbicsIHtcbiAgICAgICAgdXJsOiAnLycsXG4gICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIGxlYWd1ZXNDb250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4vbGVhZ3Vlcy5qb2luLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdKb2luTGVhZ3Vlc0NvbnRyb2xsZXInXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIDtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmxlYWd1ZXMubWFuYWdlJywgW10pXG4gIC5jb250cm9sbGVyKCdNYW5hZ2VMZWFndWVzQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vTWFuYWdlTGVhZ3Vlc0NvbnRyb2xsZXInKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHJpdmF0ZS5sZWFndWVzLm1hbmFnZScsIHtcbiAgICAgICAgdXJsOiAnL21hbmFnZWQnLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIGxlYWd1ZXNDb250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL21hbmFnZS9sZWFndWVzLm1hbmFnZS50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTWFuYWdlTGVhZ3Vlc0NvbnRyb2xsZXInXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgbWFuYWdlZExlYWd1ZXM6IGZ1bmN0aW9uKHVzZXIsIGxlYWd1ZVNlcnZpY2UsICRzdGF0ZVBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuIGxlYWd1ZVNlcnZpY2UuZ2V0TWFuYWdlZExlYWd1ZXMoJHN0YXRlUGFyYW1zLnNlYXNvbklkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfSk7XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubGVhZ3Vlcy5teScsIFtdKVxuICAuY29udHJvbGxlcignTXlMZWFndWVzQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vTXlMZWFndWVzQ29udHJvbGxlcicpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcml2YXRlLmxlYWd1ZXMubXknLCB7XG4gICAgICAgIHVybDogJycsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgbGVhZ3Vlc0NvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvbXkvbGVhZ3Vlcy5teS50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTXlMZWFndWVzQ29udHJvbGxlcidcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICBsZWFndWVzOiBmdW5jdGlvbih1c2VyLCBsZWFndWVTZXJ2aWNlLCAkc3RhdGVQYXJhbXMpIHtcbiAgICAgICAgICAgIHJldHVybiBsZWFndWVTZXJ2aWNlLmdldExlYWd1ZXMoJHN0YXRlUGFyYW1zLnNlYXNvbklkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfSk7XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAudGVhbS52aWV3JywgW10pXG4gIC5jb250cm9sbGVyKCdWaWV3VGVhbUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL1ZpZXdUZWFtQ29udHJvbGxlcicpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcml2YXRlLnRlYW0udmlldycsIHtcbiAgICAgICAgdXJsOiAnL3t0ZWFtSWR9JyxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICB0ZWFtQ29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvdGVhbS92aWV3L3RlYW0udmlldy50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnVmlld1RlYW1Db250cm9sbGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIHRlYW06IGZ1bmN0aW9uKHVzZXIsIHRlYW1TZXJ2aWNlLCAkc3RhdGVQYXJhbXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZWFtU2VydmljZS5nZXRUZWFtKCRzdGF0ZVBhcmFtcy5sZWFndWVJZCwgJHN0YXRlUGFyYW1zLnRlYW1JZCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBsZWFndWVUZWFtczogZnVuY3Rpb24odGVhbSwgdGVhbVNlcnZpY2UsICRzdGF0ZVBhcmFtcywgdXNlck1vZGVsKSB7XG4gICAgICAgICAgICBpZiAodGVhbS5kYXRhLmNvYWNoX2lkcy5pbmRleE9mKHVzZXJNb2RlbC51c2VyLmlkKSA+IC0xKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0ZWFtU2VydmljZS5nZXRMZWFndWVUZWFtcygkc3RhdGVQYXJhbXMubGVhZ3VlSWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHsgZGF0YTogW10gfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHBpY2tzOiBmdW5jdGlvbih0ZWFtLCBwaWNrU2VydmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIHBpY2tTZXJ2aWNlLmdldFBpY2tzKHsgdGVhbUlkOiB0ZWFtLmRhdGEuaWQgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC50ZWFtLmVkaXQnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0VkaXRUZWFtQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vRWRpdFRlYW1Db250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC50ZWFtLm1lc3NhZ2UnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ1RlYW1NZXNzYWdlQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vVGVhbU1lc3NhZ2VDb250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC50ZWFtcy5kZWFkJywgW10pXG4gIC5jb250cm9sbGVyKCdEZWFkVGVhbXNDb250cm9sbGVyJywgcmVxdWlyZSgnLi9EZWFkVGVhbXNDb250cm9sbGVyJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3ByaXZhdGUudGVhbXMuZGVhZCcsIHtcbiAgICAgICAgdXJsOiAnL2RlYWQnLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIHRlYW1zQ29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvdGVhbXMvZGVhZC90ZWFtcy5kZWFkLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdEZWFkVGVhbXNDb250cm9sbGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIGRlYWRUZWFtczogZnVuY3Rpb24odXNlciwgdGVhbVNlcnZpY2UsICRzdGF0ZVBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuIHRlYW1TZXJ2aWNlLmdldERlYWRUZWFtcyh7IHNlYXNvbklkOiAkc3RhdGVQYXJhbXMuc2Vhc29uSWQgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIDtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnRlYW1zLmFsaXZlJywgW10pXG4gIC5jb250cm9sbGVyKCdBbGl2ZVRlYW1zQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vQWxpdmVUZWFtc0NvbnRyb2xsZXInKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHJpdmF0ZS50ZWFtcy5hbGl2ZScsIHtcbiAgICAgICAgdXJsOiAnL2FsaXZlJyxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICB0ZWFtc0NvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL3RlYW1zL2FsaXZlL3RlYW1zLmFsaXZlLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBbGl2ZVRlYW1zQ29udHJvbGxlcidcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICBhbGl2ZVRlYW1zOiBmdW5jdGlvbih1c2VyLCB0ZWFtU2VydmljZSwgJHN0YXRlUGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gdGVhbVNlcnZpY2UuZ2V0QWxpdmVUZWFtcyh7IHNlYXNvbklkOiAkc3RhdGVQYXJhbXMuc2Vhc29uSWQgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIDtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnBsYXkubGVhZ3VlcycsIFtdKVxuICAuY29udHJvbGxlcignUGxheUxlYWd1ZXNDb250cm9sbGVyJywgcmVxdWlyZSgnLi9QbGF5TGVhZ3Vlc0NvbnRyb2xsZXInKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHJpdmF0ZS5wbGF5LmxlYWd1ZXMnLCB7XG4gICAgICAgIHVybDogJy9sZWFndWVzJyxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICBwbGF5Q29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvcGxheS9sZWFndWVzL3BsYXkubGVhZ3Vlcy50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnUGxheUxlYWd1ZXNDb250cm9sbGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIGxlYWd1ZXM6IGZ1bmN0aW9uKHVzZXIsICRzdGF0ZVBhcmFtcywgbGVhZ3VlU2VydmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIGxlYWd1ZVNlcnZpY2UuZ2V0TGVhZ3Vlcygkc3RhdGVQYXJhbXMuc2Vhc29uSWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICA7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9KTtcblxuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5wbGF5LnRlYW1zJywgW10pXG4gIC5jb250cm9sbGVyKCdQbGF5VGVhbXNDb250cm9sbGVyJywgcmVxdWlyZSgnLi9QbGF5VGVhbXNDb250cm9sbGVyJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3ByaXZhdGUucGxheS50ZWFtcycsIHtcbiAgICAgICAgdXJsOiAnL3RlYW1zJyxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICBwbGF5Q29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvcGxheS90ZWFtcy9wbGF5LnRlYW1zLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdQbGF5VGVhbXNDb250cm9sbGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIHRlYW1zOiBmdW5jdGlvbih1c2VyLCAkc3RhdGVQYXJhbXMsIHRlYW1TZXJ2aWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGVhbVNlcnZpY2UuZ2V0QWxsVGVhbXMoeyBzZWFzb25JZDogJHN0YXRlUGFyYW1zLnNlYXNvbklkIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICB9KVxuICAgIDtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnBpY2subWFrZScsIFtdKVxuICAuY29udHJvbGxlcignUGlja01ha2VDb250cm9sbGVyJywgcmVxdWlyZSgnLi9QaWNrTWFrZUNvbnRyb2xsZXInKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmFkbWluLmdhbWVzJywgW10pXG4gIC5jb250cm9sbGVyKCdBZG1pbkdhbWVzQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vQWRtaW5HYW1lc0NvbnRyb2xsZXInKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHJpdmF0ZS5hZG1pbi5nYW1lcycsIHtcbiAgICAgICAgdXJsOiAnc2Vhc29uL3tzZWFzb25JZH0vd2Vlay97d2Vla0lkfS9nYW1lcycsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgYWRtaW5Db250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9nYW1lcy9hZG1pbi5nYW1lcy50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQWRtaW5HYW1lc0NvbnRyb2xsZXInLFxuICAgICAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgICAgICB3ZWVrOiBmdW5jdGlvbigkc3RhdGVQYXJhbXMsIHdlZWtTZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdlZWtTZXJ2aWNlLmdldFdlZWsoJHN0YXRlUGFyYW1zLnNlYXNvbklkLCAkc3RhdGVQYXJhbXMud2Vla0lkKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZ2FtZXM6IGZ1bmN0aW9uKHdlZWssIGdhbWVTZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdhbWVTZXJ2aWNlLmdldFdlZWtHYW1lcyh3ZWVrLmRhdGEuaWQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuIiwiLy9hcHBsaWNhdGlvbiBkaXJlY3RpdmVzXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doLmRpcmVjdGl2ZXMucmNWZXJpZnlTZXQnLFtdKVxuICAuZGlyZWN0aXZlKCdyY1ZlcmlmeVNldCcsIHJlcXVpcmUoJy4vUkNWZXJpZnlTZXREaXJlY3RpdmUnKSk7XG4iLCIvL2FwcGxpY2F0aW9uIGRpcmVjdGl2ZXNcbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuZGlyZWN0aXZlcy5yZXF1aXJlZFBhdHRlcm4nLFtdKVxuICAgIC5kaXJlY3RpdmUoJ3JwYXR0ZXJuJywgcmVxdWlyZSgnLi9SZXF1aXJlZFBhdHRlcm5EaXJlY3RpdmUnKSlcbjtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubGVhZ3Vlcy5qb2luLnB1YmxpYycsIFtdKVxuICAuY29udHJvbGxlcignUHVibGljTGVhZ3Vlc0NvbnRyb2xsZXInLCByZXF1aXJlKCcuL1B1YmxpY0xlYWd1ZXNDb250cm9sbGVyJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3ByaXZhdGUubGVhZ3Vlcy5qb2luLnB1YmxpYycsIHtcbiAgICAgICAgdXJsOiAncHVibGljJyxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICBqb2luTGVhZ3Vlc0NvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9wdWJsaWMvbGVhZ3Vlcy5qb2luLnB1YmxpYy50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnUHVibGljTGVhZ3Vlc0NvbnRyb2xsZXInXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgcHVibGljTGVhZ3VlczogZnVuY3Rpb24odXNlciwgbGVhZ3VlU2VydmljZSwgJHN0YXRlUGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gbGVhZ3VlU2VydmljZS5nZXRQdWJsaWNMZWFndWVzKCRzdGF0ZVBhcmFtcy5zZWFzb25JZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIDtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmxlYWd1ZS5pbnZpdGUucmVxdWVzdCcsIFtdKVxuICAuY29udHJvbGxlcignTGVhZ3VlSW52aXRlUmVxdWVzdENvbnRyb2xsZXInLCByZXF1aXJlKCcuL0xlYWd1ZUludml0ZVJlcXVlc3RDb250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5sZWFndWVzLmpvaW4ucHJpdmF0ZScsIFtdKVxuICAuY29udHJvbGxlcignUHJpdmF0ZUxlYWd1ZXNDb250cm9sbGVyJywgcmVxdWlyZSgnLi9Qcml2YXRlTGVhZ3Vlc0NvbnRyb2xsZXInKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHJpdmF0ZS5sZWFndWVzLmpvaW4ucHJpdmF0ZScsIHtcbiAgICAgICAgdXJsOiAncHJpdmF0ZScsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgam9pbkxlYWd1ZXNDb250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4vcHJpdmF0ZS9sZWFndWVzLmpvaW4ucHJpdmF0ZS50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnUHJpdmF0ZUxlYWd1ZXNDb250cm9sbGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIHByaXZhdGVMZWFndWVzOiBmdW5jdGlvbih1c2VyLCBsZWFndWVTZXJ2aWNlLCAkc3RhdGVQYXJhbXMpIHtcbiAgICAgICAgICAgIHJldHVybiBsZWFndWVTZXJ2aWNlLmdldFByaXZhdGVMZWFndWVzKCRzdGF0ZVBhcmFtcy5zZWFzb25JZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIDtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmFkbWluLmdhbWVzLmVkaXQnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0dhbWVzRWRpdENvbnRyb2xsZXInLCByZXF1aXJlKCcuL0dhbWVzRWRpdENvbnRyb2xsZXInKSk7XG4iLCJcbmNvbW1hbmd1bGFyLmV2ZW50QXNwZWN0KCdAQmVmb3JlKC8uKi8pJywgZnVuY3Rpb24ocHJvY2Vzc29yLCAkbG9nKSB7XG5cbiAgICByZXR1cm4ge1xuXG4gICAgICAgIGV4ZWN1dGUgOiBmdW5jdGlvbiAoKSB7XG5cbi8vICAgICAgICAgICAgaWYgKEN1cnJlbnRUb2RvLnRvZG8ubGVuZ3RoID09PSAwKSB7XG4vLyAgICAgICAgICAgICAgICBwcm9jZXNzb3IuY2FuY2VsKCdFbXB0eSB0b2RvJyk7XG4vLyAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vJGxvZy5sb2coJ1Rlc3QgQXNwZWN0Jyk7XG5cbiAgICAgICAgfVxuICAgIH1cbn0pOyIsIi8qXG4gKiAgR2xvYmFsIGNvbmZpZyBmb3IgcmVtb3RlIHNlcnZpY2VzXG4gKi9cblxudmFyIEFwaUNvbmZpZyA9ICB7XG4gICAgYmFzZVVSTDogJy9hcGkvJ1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcGlDb25maWc7XG4iLCJ2YXIgVGVhbVNlcnZpY2UgPSBmdW5jdGlvbigkaHR0cCwgJGxvZywgJGxvY2F0aW9uLCAkcSwgYXBpQ29uZmlnLCBtZXNzYWdlTW9kZWwpIHtcblxuICAgIHRoaXMuZ2V0VGVhbSA9IGZ1bmN0aW9uKGxlYWd1ZUlkLCB0ZWFtSWQpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImxlYWd1ZXMvXCIgKyBsZWFndWVJZCArIFwiL3RlYW1zL1wiICsgdGVhbUlkKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogZ2V0VGVhbSBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBnZXRUZWFtIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmdldEFsbFRlYW1zID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgICAgIHZhciBhcGlVcmwgPSBhcGlDb25maWcuYmFzZVVSTCArIFwic2Vhc29ucy9cIiArIHBhcmFtcy5zZWFzb25JZCArIFwiL3RlYW1zL2FsbFwiO1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlVcmwpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBnZXRBbGxUZWFtcyBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBnZXRBbGxUZWFtcyBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRBbGl2ZVRlYW1zID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgICAgIHZhciBhcGlVcmwgPSBhcGlDb25maWcuYmFzZVVSTCArIFwic2Vhc29ucy9cIiArIHBhcmFtcy5zZWFzb25JZCArIFwiL3RlYW1zL2FsaXZlXCI7XG4gICAgICAgIGlmIChwYXJhbXMubGVhZ3VlSWQpIHtcbiAgICAgICAgICAgIGFwaVVybCArPSBcIj9sZWFndWVfaWQ9XCIgKyBwYXJhbXMubGVhZ3VlSWQ7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlVcmwpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBnZXRBbGl2ZVRlYW1zIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IGdldEFsaXZlVGVhbXMgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0RGVhZFRlYW1zID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgICAgIHZhciBhcGlVcmwgPSBhcGlDb25maWcuYmFzZVVSTCArIFwic2Vhc29ucy9cIiArIHBhcmFtcy5zZWFzb25JZCArIFwiL3RlYW1zL2RlYWRcIjtcbiAgICAgICAgaWYgKHBhcmFtcy5sZWFndWVJZCkge1xuICAgICAgICAgICAgYXBpVXJsICs9IFwiP2xlYWd1ZV9pZD1cIiArIHBhcmFtcy5sZWFndWVJZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaVVybClcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IGdldERlYWRUZWFtcyBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBnZXREZWFkVGVhbXMgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0QWxsTGVhZ3VlVGVhbXMgPSBmdW5jdGlvbihwYXJhbXMpIHtcbiAgICAgICAgdmFyIGFwaVVybCA9IGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZWFzb25zL1wiICsgcGFyYW1zLnNlYXNvbklkICsgXCIvdGVhbXMvYWxsXCI7XG4gICAgICAgIGlmIChwYXJhbXMubGVhZ3VlSWQpIHtcbiAgICAgICAgICAgIGFwaVVybCArPSBcIj9sZWFndWVfaWQ9XCIgKyBwYXJhbXMubGVhZ3VlSWQ7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlVcmwpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBnZXRBbGxMZWFndWVUZWFtcyBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBnZXRBbGxMZWFndWVUZWFtcyBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRMZWFndWVUZWFtcyA9IGZ1bmN0aW9uKGxlYWd1ZUlkKSB7XG4gICAgICAgIHZhciBhcGlVcmwgPSBhcGlDb25maWcuYmFzZVVSTCArIFwibGVhZ3Vlcy9cIiArIGxlYWd1ZUlkICsgXCIvdGVhbXNcIjtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpVXJsKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogZ2V0TGVhZ3VlVGVhbXMgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogZ2V0TGVhZ3VlVGVhbXMgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuXG4gICAgdGhpcy5jcmVhdGVUZWFtID0gZnVuY3Rpb24odGVhbVBhcmFtcykge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnBvc3QoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImxlYWd1ZXMvXCIgKyB0ZWFtUGFyYW1zLmxlYWd1ZV9pZCArIFwiL3RlYW1zXCIsXG4gICAgICAgICAgICB7IHRlYW06IHRlYW1QYXJhbXMgfSlcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IGNyZWF0ZVRlYW0gc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3VGVhbVBhdGggPSAkbG9jYXRpb24ucGF0aCgpICsgJy90ZWFtLycgKyBkYXRhLnRlYW1faWQ7XG4gICAgICAgICAgICAgICAgJGxvY2F0aW9uLnBhdGgobmV3VGVhbVBhdGgpOyAvLyBuYXZpZ2F0ZSB0byB0aGUgbmV3IHRlYW0gcGFnZVxuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IGNyZWF0ZVRlYW0gZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMudXBkYXRlVGVhbSA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5wdXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImxlYWd1ZXMvXCIgKyB0ZWFtLmxlYWd1ZS5pZCArIFwiL3RlYW1zL1wiICsgdGVhbS5pZCxcbiAgICAgICAgICAgIHsgdGVhbTogdGVhbSB9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogdXBkYXRlVGVhbSBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiB1cGRhdGVUZWFtIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLnVwZGF0ZVRlYW1NZXNzYWdlID0gZnVuY3Rpb24odGVhbVBhcmFtcywgZW1haWxNZXNzYWdlKSB7XG4gICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgJGh0dHAucHV0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJsZWFndWVzL1wiICsgdGVhbVBhcmFtcy5sZWFndWUuaWQgKyBcIi90ZWFtcy9cIiArIHRlYW1QYXJhbXMuaWQgKyBcIi9tZXNzYWdlXCIsXG4gICAgICAgIHsgdGVhbTogdGVhbVBhcmFtcywgZW1haWxNZXNzYWdlOiBlbWFpbE1lc3NhZ2UgfSlcbiAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogdXBkYXRlVGVhbU1lc3NhZ2Ugc3VjY2Vzc1wiKTtcbiAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHRlYW1QYXJhbXMubWVzc2FnZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiB1cGRhdGVUZWFtTWVzc2FnZSBmYWlsZWRcIik7XG4gICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5zZW5kQ29tbWlzaE1lc3NhZ2UgPSBmdW5jdGlvbih0ZWFtUGFyYW1zLCBtZXNzYWdlKSB7XG4gICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgJGh0dHAucHV0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJsZWFndWVzL1wiICsgdGVhbVBhcmFtcy5sZWFndWUuaWQgKyBcIi90ZWFtcy9cIiArIHRlYW1QYXJhbXMuaWQgKyBcIi9jb250YWN0XCIsXG4gICAgICAgIHsgY29udGFjdDogbWVzc2FnZSB9KVxuICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBzZW5kQ29tbWlzaE1lc3NhZ2Ugc3VjY2Vzc1wiKTtcbiAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBzZW5kQ29tbWlzaE1lc3NhZ2UgZmFpbGVkXCIpO1xuICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuYWN0aXZhdGVUZWFtID0gZnVuY3Rpb24odGVhbSkge1xuICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgICAkaHR0cC5wdXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImxlYWd1ZXMvXCIgKyB0ZWFtLmxlYWd1ZS5pZCArIFwiL3RlYW1zL1wiICsgdGVhbS5pZCArIFwiL2FjdGl2YXRlXCIpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBhY3RpdmF0ZVRlYW0gc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBhY3RpdmF0ZVRlYW0gZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuZGVhY3RpdmF0ZVRlYW0gPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgICRodHRwLnB1dChhcGlDb25maWcuYmFzZVVSTCArIFwibGVhZ3Vlcy9cIiArIHRlYW0ubGVhZ3VlLmlkICsgXCIvdGVhbXMvXCIgKyB0ZWFtLmlkICsgXCIvZGVhY3RpdmF0ZVwiKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogZGVhY3RpdmF0ZVRlYW0gc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogZGVhY3RpdmF0ZVRlYW0gZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLnBhaWRUZWFtID0gZnVuY3Rpb24odGVhbSkge1xuICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgICAkaHR0cC5wdXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImxlYWd1ZXMvXCIgKyB0ZWFtLmxlYWd1ZS5pZCArIFwiL3RlYW1zL1wiICsgdGVhbS5pZCArIFwiL3BhaWRcIilcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IHBhaWRUZWFtIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogcGFpZFRlYW0gZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMudW5wYWlkVGVhbSA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAgICAgJGh0dHAucHV0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJsZWFndWVzL1wiICsgdGVhbS5sZWFndWUuaWQgKyBcIi90ZWFtcy9cIiArIHRlYW0uaWQgKyBcIi91bnBhaWRcIilcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IHVucGFpZFRlYW0gc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogdW5wYWlkVGVhbSBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcblxufTtcblxuVGVhbVNlcnZpY2UuJGluamVjdCA9IFsnJGh0dHAnLCAnJGxvZycsICckbG9jYXRpb24nLCAnJHEnLCAnYXBpQ29uZmlnJywgJ21lc3NhZ2VNb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBUZWFtU2VydmljZTsiLCJ2YXIgVXNlclNlcnZpY2UgPSBmdW5jdGlvbigkaHR0cCwgJGxvZywgJHN0YXRlLCAkbG9jYXRpb24sICR3aW5kb3csICR0aW1lb3V0LCBhcGlDb25maWcsIG1lc3NhZ2VNb2RlbCwgdXNlck1vZGVsLCBzZWFzb25Nb2RlbCkge1xuXG4gICAgdmFyIHVzZXJTZXJ2aWNlID0gdGhpcztcblxuICAgIHRoaXMuc2lnbmluID0gZnVuY3Rpb24oZW1haWwsIHBhc3N3b3JkKSB7XG4gICAgICB1c2VyTW9kZWwucmVzZXRVc2VyKCk7XG4gICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnBvc3QoXG4gICAgICAgICAgICBhcGlDb25maWcuYmFzZVVSTCArIFwic2Vzc2lvbnNcIixcbiAgICAgICAgICAgIHsgZW1haWw6IGVtYWlsLCBwYXNzd29yZDogcGFzc3dvcmQgfSlcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVXNlclNlcnZpY2U6IHNpZ25pbiBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgICR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudG9rZW4gPSBkYXRhLnRva2VuO1xuICAgICAgICAgICAgICAgIHZhciByZWRpcmVjdCA9IGRlY29kZVVSSUNvbXBvbmVudCgkbG9jYXRpb24uc2VhcmNoKCkucmVkaXJlY3QpO1xuICAgICAgICAgICAgICAgIGlmIChyZWRpcmVjdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgJGxvY2F0aW9uLnNlYXJjaCgncmVkaXJlY3QnLCBudWxsKTsgLy8gcmVtb3ZlIHRoZSByZWRpcmVjdCBxdWVyeSBwYXJhbVxuICAgICAgICAgICAgICAgICAgICAkbG9jYXRpb24ucGF0aChyZWRpcmVjdCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChbJy8nLCAnL3NpZ25pbicsICcvcmVnaXN0ZXInXS5pbmRleE9mKHJlZGlyZWN0KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICB1c2VyU2VydmljZS5nZXRDdXJyZW50VXNlcigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlICB7XG4gICAgICAgICAgICAgICAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgc2Vhc29uTW9kZWwuY3VycmVudFNlYXNvbnNbMF0uaWQgKyAnL215L3RlYW1zJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlVzZXJTZXJ2aWNlOiBzaWduaW4gZmFpbHVyZVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLnNpZ25vdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHVzZXJNb2RlbC5yZXNldFVzZXIoKTtcbiAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZGVsZXRlKGFwaUNvbmZpZy5iYXNlVVJMICsgJ3Nlc3Npb25zL2Rlc3Ryb3knKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJVc2VyU2VydmljZTogc2lnbm91dCBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIGlmICgkc3RhdGUuY3VycmVudC5uYW1lID09ICdwdWJsaWMuaG9tZScpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgJGxvY2F0aW9uLnBhdGgoJy8nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVXNlclNlcnZpY2U6IHNpZ25vdXQgZmFpbHVyZVwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLnJlc2V0VXNlciA9IGZ1bmN0aW9uKGVtYWlsKSB7XG4gICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnBvc3QoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlc3Npb25zL3Jlc2V0XCIsIHsgZW1haWw6IGVtYWlsIH0pXG4gICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlVzZXJTZXJ2aWNlOiByZXNldCBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAkbG9nLmRlYnVnKFwiVXNlclNlcnZpY2U6IHJlc2V0IGZhaWx1cmVcIik7XG4gICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRDdXJyZW50VXNlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdG9rZW4gPSAkbG9jYXRpb24uc2VhcmNoKCkudG9rZW47XG4gICAgICAgIGlmICghXy5pc1VuZGVmaW5lZCh0b2tlbikpIHtcbiAgICAgICAgICAkd2luZG93LnNlc3Npb25TdG9yYWdlLnRva2VuID0gdG9rZW47XG4gICAgICAgICAgJGxvY2F0aW9uLnNlYXJjaCgndG9rZW4nLCBudWxsKTsgLy8gcmVtb3ZlIHRoZSB0b2tlbiBxdWVyeSBwYXJhbVxuICAgICAgICB9XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJ1c2Vycy9jdXJyZW50XCIpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlVzZXJTZXJ2aWNlOiBnZXRDdXJyZW50VXNlciBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHVzZXJNb2RlbC5zZXRVc2VyKGRhdGEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlVzZXJTZXJ2aWNlOiBnZXRDdXJyZW50VXNlciBmYWlsZWRcIik7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuY3JlYXRlVXNlciA9IGZ1bmN0aW9uKHVzZXJQYXJhbXMpIHtcbiAgICAgIHVzZXJNb2RlbC5yZXNldFVzZXIoKTtcbiAgICAgIHZhciBwcm9taXNlID0gJGh0dHAucG9zdChhcGlDb25maWcuYmFzZVVSTCArIFwidXNlcnNcIixcbiAgICAgICAgICAgIHsgdXNlcjogdXNlclBhcmFtcyB9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJVc2VyU2VydmljZTogY3JlYXRlVXNlciBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgICR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudG9rZW4gPSBkYXRhLnRva2VuO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdmFyIHJlZGlyZWN0ID0gZGVjb2RlVVJJQ29tcG9uZW50KCRsb2NhdGlvbi5zZWFyY2goKS5yZWRpcmVjdCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlZGlyZWN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAkbG9jYXRpb24uc2VhcmNoKCdyZWRpcmVjdCcsIG51bGwpOyAvLyByZW1vdmUgdGhlIHJlZGlyZWN0IHF1ZXJ5IHBhcmFtXG4gICAgICAgICAgICAgICAgICAgICRsb2NhdGlvbi5wYXRoKHJlZGlyZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFsnLycsICcvc2lnbmluJywgJy9yZWdpc3RlciddLmluZGV4T2YocmVkaXJlY3QpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgIHVzZXJTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgIHtcbiAgICAgICAgICAgICAgICAgICRsb2NhdGlvbi5wYXRoKCcvc2Vhc29uLycgKyBzZWFzb25Nb2RlbC5jdXJyZW50U2Vhc29uc1swXS5pZCArICcvbXkvdGVhbXMnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVXNlclNlcnZpY2U6IGNyZWF0ZVVzZXIgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMudXBkYXRlVXNlciA9IGZ1bmN0aW9uKHVzZXJQYXJhbXMpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5wdXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInVzZXJzL2N1cnJlbnRcIixcbiAgICAgICAgICAgIHsgdXNlcjogdXNlclBhcmFtcyB9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJVc2VyU2VydmljZTogdXBkYXRlVXNlciBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHVzZXJNb2RlbC5zZXRVc2VyKHVzZXJQYXJhbXMpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlVzZXJTZXJ2aWNlOiB1cGRhdGVVc2VyIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmNvbnRhY3RVcyA9IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5wdXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInVzZXJzL2NvbnRhY3RcIixcbiAgICAgICAgICAgIHsgbWVzc2FnZTogbWVzc2FnZSB9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJVc2VyU2VydmljZTogY29udGFjdFVzIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVXNlclNlcnZpY2U6IGNvbnRhY3RVcyBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG59O1xuXG5Vc2VyU2VydmljZS4kaW5qZWN0ID0gWyckaHR0cCcsICckbG9nJywgJyRzdGF0ZScsICckbG9jYXRpb24nLCAnJHdpbmRvdycsICckdGltZW91dCcsICdhcGlDb25maWcnLCAnbWVzc2FnZU1vZGVsJywgJ3VzZXJNb2RlbCcsICdzZWFzb25Nb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBVc2VyU2VydmljZTsiLCJ2YXIgUGlja1NlcnZpY2UgPSBmdW5jdGlvbigkaHR0cCwgJGxvZywgJHN0YXRlLCBhcGlDb25maWcsIG1lc3NhZ2VNb2RlbCkge1xuXG4gIHRoaXMuZ2V0UGlja3MgPSBmdW5jdGlvbihwYXJhbXMpIHtcbiAgICB2YXIgYXBpVXJsID0gYXBpQ29uZmlnLmJhc2VVUkwgKyBcInRlYW1zL1wiICsgcGFyYW1zLnRlYW1JZCArIFwiL3BpY2tzXCI7XG5cbiAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlVcmwpXG4gICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJQaWNrU2VydmljZTogZ2V0UGlja3Mgc3VjY2Vzc1wiKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KVxuICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIlBpY2tTZXJ2aWNlOiBnZXRQaWNrcyBmYWlsZWRcIik7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfTtcblxuICB0aGlzLmNyZWF0ZVBpY2sgPSBmdW5jdGlvbihwaWNrUGFyYW1zKSB7XG4gICAgdmFyIGFwaVVybCA9IGFwaUNvbmZpZy5iYXNlVVJMICsgXCJ0ZWFtcy9cIiArIHBpY2tQYXJhbXMudGVhbV9pZCArIFwiL3BpY2tzXCI7XG5cbiAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnBvc3QoYXBpVXJsLCB7IHBpY2s6IHBpY2tQYXJhbXMgfSlcbiAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIlBpY2tTZXJ2aWNlOiBjcmVhdGVQaWNrIHN1Y2Nlc3NcIik7XG4gICAgICAgIC8vIHRvZG86IHRoaXMgcmVsaWVzIG9uIGEgbW9ua2V5IHBhdGNoIGF0IHRoZSBtb21lbnQgLSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci11aS91aS1yb3V0ZXIvaXNzdWVzLzU4MlxuICAgICAgICAvLyBidXQgbWF5IGJlIHJlc29sdmVkIHdpdGggZnV0dXJlIHJlbGVhc2VzIG9mIGFuZ3VsYXItdWktcm91dGVyXG4gICAgICAgICRzdGF0ZS5yZWxvYWQoKTsgLy8gcmVsb2FkcyBhbGwgdGhlIHJlc29sdmVzIGZvciB0aGUgdmlldyBsZWFndWUgcGFnZSBhbmQgcmVpbnN0YW50aWF0ZXMgdGhlIGNvbnRyb2xsZXJcbiAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSlcbiAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJQaWNrU2VydmljZTogY3JlYXRlUGljayBmYWlsZWRcIik7XG4gICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH07XG5cbn07XG5cblBpY2tTZXJ2aWNlLiRpbmplY3QgPSBbJyRodHRwJywgJyRsb2cnLCAnJHN0YXRlJywgJ2FwaUNvbmZpZycsICdtZXNzYWdlTW9kZWwnXTtcbm1vZHVsZS5leHBvcnRzID0gUGlja1NlcnZpY2U7IiwidmFyIExlYWd1ZVNlcnZpY2UgPSBmdW5jdGlvbigkaHR0cCwgJGxvZywgJGxvY2F0aW9uLCAkcSwgJHN0YXRlLCBhcGlDb25maWcsIG1lc3NhZ2VNb2RlbCkge1xuXG4gICAgdGhpcy5nZXRMZWFndWUgPSBmdW5jdGlvbihzZWFzb25JZCwgbGVhZ3VlSWQpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBzZWFzb25JZCArIFwiL2xlYWd1ZXMvXCIgKyBsZWFndWVJZClcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogZ2V0TGVhZ3VlIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogZ2V0TGVhZ3VlIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmdldExlYWd1ZXMgPSBmdW5jdGlvbihzZWFzb25JZCkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlDb25maWcuYmFzZVVSTCArIFwic2Vhc29ucy9cIiArIHNlYXNvbklkICsgXCIvbGVhZ3Vlc1wiKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBnZXRMZWFndWVzIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogZ2V0TGVhZ3VlcyBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRNYW5hZ2VkTGVhZ3VlcyA9IGZ1bmN0aW9uKHNlYXNvbklkKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZWFzb25zL1wiICsgc2Vhc29uSWQgKyBcIi9sZWFndWVzL21hbmFnZWRcIilcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogZ2V0TWFuYWdlZExlYWd1ZXMgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBnZXRNYW5hZ2VkTGVhZ3VlcyBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRQdWJsaWNMZWFndWVzID0gZnVuY3Rpb24oc2Vhc29uSWQpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBzZWFzb25JZCArIFwiL2xlYWd1ZXMvcHVibGljXCIpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IGdldFB1YmxpY0xlYWd1ZXMgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBnZXRQdWJsaWNMZWFndWVzIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmdldFByaXZhdGVMZWFndWVzID0gZnVuY3Rpb24oc2Vhc29uSWQpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBzZWFzb25JZCArIFwiL2xlYWd1ZXMvcHJpdmF0ZVwiKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBnZXRQcml2YXRlTGVhZ3VlcyBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IGdldFByaXZhdGVMZWFndWVzIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmNyZWF0ZUxlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZVBhcmFtcykge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnBvc3QoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBsZWFndWVQYXJhbXMuc2Vhc29uX2lkICsgXCIvbGVhZ3Vlc1wiLFxuICAgICAgICAgICAgeyBsZWFndWU6IGxlYWd1ZVBhcmFtcyB9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBjcmVhdGVMZWFndWUgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIHRydWUpO1xuICAgICAgICAgICAgICAgICRsb2NhdGlvbi5wYXRoKCcvc2Vhc29uLycgKyBsZWFndWVQYXJhbXMuc2Vhc29uX2lkICsgJy9sZWFndWUvJyArIGRhdGEubGVhZ3VlX2lkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBjcmVhdGVMZWFndWUgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMudXBkYXRlTGVhZ3VlID0gZnVuY3Rpb24obGVhZ3VlUGFyYW1zKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAucHV0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZWFzb25zL1wiICsgbGVhZ3VlUGFyYW1zLnNlYXNvbl9pZCArIFwiL2xlYWd1ZXMvXCIgKyBsZWFndWVQYXJhbXMuaWQsXG4gICAgICAgICAgICB7IGxlYWd1ZTogbGVhZ3VlUGFyYW1zIH0pXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IHVwZGF0ZUxlYWd1ZSBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgLy8gdG9kbzogdGhpcyByZWxpZXMgb24gYSBtb25rZXkgcGF0Y2ggYXQgdGhlIG1vbWVudCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyLXVpL3VpLXJvdXRlci9pc3N1ZXMvNTgyXG4gICAgICAgICAgICAvLyBidXQgbWF5IGJlIHJlc29sdmVkIHdpdGggZnV0dXJlIHJlbGVhc2VzIG9mIGFuZ3VsYXItdWktcm91dGVyXG4gICAgICAgICAgICAkc3RhdGUucmVsb2FkKCk7IC8vIHJlbG9hZHMgYWxsIHRoZSByZXNvbHZlcyBmb3IgdGhlIHZpZXcgbGVhZ3VlIHBhZ2UgYW5kIHJlaW5zdGFudGlhdGVzIHRoZSBjb250cm9sbGVyXG4gICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiB1cGRhdGVMZWFndWUgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMub3BlbkxlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZVBhcmFtcykge1xuICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBsZWFndWVQYXJhbXMuc2Vhc29uX2lkICsgXCIvbGVhZ3Vlcy9cIiArIGxlYWd1ZVBhcmFtcy5pZCArIFwiL29wZW5cIilcbiAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBvcGVuTGVhZ3VlIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgLy8gdG9kbzogdGhpcyByZWxpZXMgb24gYSBtb25rZXkgcGF0Y2ggYXQgdGhlIG1vbWVudCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyLXVpL3VpLXJvdXRlci9pc3N1ZXMvNTgyXG4gICAgICAgICAgLy8gYnV0IG1heSBiZSByZXNvbHZlZCB3aXRoIGZ1dHVyZSByZWxlYXNlcyBvZiBhbmd1bGFyLXVpLXJvdXRlclxuICAgICAgICAgICRzdGF0ZS5yZWxvYWQoKTsgLy8gcmVsb2FkcyBhbGwgdGhlIHJlc29sdmVzIGZvciB0aGUgdmlldyBsZWFndWUgcGFnZSBhbmQgcmVpbnN0YW50aWF0ZXMgdGhlIGNvbnRyb2xsZXJcbiAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSlcbiAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogb3BlbkxlYWd1ZSBmYWlsZWRcIik7XG4gICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5jbG9zZUxlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZVBhcmFtcykge1xuICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBsZWFndWVQYXJhbXMuc2Vhc29uX2lkICsgXCIvbGVhZ3Vlcy9cIiArIGxlYWd1ZVBhcmFtcy5pZCArIFwiL2Nsb3NlXCIpXG4gICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogY2xvc2VMZWFndWUgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAvLyB0b2RvOiB0aGlzIHJlbGllcyBvbiBhIG1vbmtleSBwYXRjaCBhdCB0aGUgbW9tZW50IC0gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXItdWkvdWktcm91dGVyL2lzc3Vlcy81ODJcbiAgICAgICAgICAvLyBidXQgbWF5IGJlIHJlc29sdmVkIHdpdGggZnV0dXJlIHJlbGVhc2VzIG9mIGFuZ3VsYXItdWktcm91dGVyXG4gICAgICAgICAgJHN0YXRlLnJlbG9hZCgpOyAvLyByZWxvYWRzIGFsbCB0aGUgcmVzb2x2ZXMgZm9yIHRoZSB2aWV3IGxlYWd1ZSBwYWdlIGFuZCByZWluc3RhbnRpYXRlcyB0aGUgY29udHJvbGxlclxuICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KVxuICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBjbG9zZUxlYWd1ZSBmYWlsZWRcIik7XG4gICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVMZWFndWVNZXNzYWdlID0gZnVuY3Rpb24obGVhZ3VlUGFyYW1zLCBlbWFpbEFsaXZlLCBlbWFpbEFsbCkge1xuICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAgICRodHRwLnB1dChhcGlDb25maWcuYmFzZVVSTCArIFwic2Vhc29ucy9cIiArIGxlYWd1ZVBhcmFtcy5zZWFzb25faWQgKyBcIi9sZWFndWVzL1wiICsgbGVhZ3VlUGFyYW1zLmlkICsgXCIvbWVzc2FnZVwiLFxuICAgICAgICAgICAgeyBsZWFndWU6IGxlYWd1ZVBhcmFtcywgZW1haWxBbGl2ZTogZW1haWxBbGl2ZSwgZW1haWxBbGw6IGVtYWlsQWxsIH0pXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IHVwZGF0ZUxlYWd1ZU1lc3NhZ2Ugc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGxlYWd1ZVBhcmFtcy5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiB1cGRhdGVMZWFndWVNZXNzYWdlIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLnNlbmRDb21taXNoTWVzc2FnZSA9IGZ1bmN0aW9uKGxlYWd1ZVBhcmFtcywgbWVzc2FnZSkge1xuICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgICAkaHR0cC5wdXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBsZWFndWVQYXJhbXMuc2Vhc29uX2lkICsgXCIvbGVhZ3Vlcy9cIiArIGxlYWd1ZVBhcmFtcy5pZCArIFwiL2NvbnRhY3RcIixcbiAgICAgICAgICAgIHsgY29udGFjdDogbWVzc2FnZSB9KVxuICAgICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogc2VuZENvbW1pc2hNZXNzYWdlIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBzZW5kQ29tbWlzaE1lc3NhZ2UgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0SW52aXRlcyA9IGZ1bmN0aW9uKGxlYWd1ZUlkKSB7XG4gICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlDb25maWcuYmFzZVVSTCArIFwibGVhZ3Vlcy9cIiArIGxlYWd1ZUlkICsgXCIvaW52aXRhdGlvbnNcIilcbiAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBnZXRJbnZpdGVzIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pXG4gICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IGdldEludml0ZXMgZmFpbGVkXCIpO1xuICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuY3JlYXRlSW52aXRlID0gZnVuY3Rpb24oaW52aXRlUGFyYW1zKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAucG9zdChhcGlDb25maWcuYmFzZVVSTCArIFwibGVhZ3Vlcy9cIiArIGludml0ZVBhcmFtcy5sZWFndWVfaWQgKyBcIi9pbnZpdGF0aW9uc1wiLFxuICAgICAgICAgICAgeyBpbnZpdGF0aW9uOiBpbnZpdGVQYXJhbXMgfSlcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogY3JlYXRlSW52aXRlIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogY3JlYXRlSW52aXRlIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLnJlcXVlc3RJbnZpdGUgPSBmdW5jdGlvbihpbnZpdGVQYXJhbXMpIHtcbiAgICAgIHZhciBwcm9taXNlID0gJGh0dHAucG9zdChhcGlDb25maWcuYmFzZVVSTCArIFwibGVhZ3Vlcy9cIiArIGludml0ZVBhcmFtcy5sZWFndWVfaWQgKyBcIi9pbnZpdGF0aW9ucy9uZXdcIixcbiAgICAgICAgICAgIHsgaW52aXRhdGlvbjogaW52aXRlUGFyYW1zIH0pXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IHJlcXVlc3RJbnZpdGUgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiByZXF1ZXN0SW52aXRlIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbn07XG5cbkxlYWd1ZVNlcnZpY2UuJGluamVjdCA9IFsnJGh0dHAnLCAnJGxvZycsICckbG9jYXRpb24nLCAnJHEnLCAnJHN0YXRlJywgJ2FwaUNvbmZpZycsICdtZXNzYWdlTW9kZWwnXTtcbm1vZHVsZS5leHBvcnRzID0gTGVhZ3VlU2VydmljZTsiLCJ2YXIgU2Vhc29uU2VydmljZSA9IGZ1bmN0aW9uKCRodHRwLCAkbG9nLCBhcGlDb25maWcsIHNlYXNvbk1vZGVsKSB7XG5cbiAgICB0aGlzLmdldFNlYXNvbnMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnNcIilcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiU2Vhc29uU2VydmljZTogZ2V0U2Vhc29ucyBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHNlYXNvbk1vZGVsLnNldFNlYXNvbnMoZGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiU2Vhc29uU2VydmljZTogZ2V0U2Vhc29ucyBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxufTtcblxuU2Vhc29uU2VydmljZS4kaW5qZWN0ID0gWyckaHR0cCcsICckbG9nJywgJ2FwaUNvbmZpZycsICdzZWFzb25Nb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBTZWFzb25TZXJ2aWNlOyIsInZhciBXZWVrU2VydmljZSA9IGZ1bmN0aW9uKCRodHRwLCAkbG9nLCAkcSwgYXBpQ29uZmlnLCBtZXNzYWdlTW9kZWwpIHtcblxuICAgIHRoaXMuZ2V0QXZhaWxhYmxlV2Vla3MgPSBmdW5jdGlvbihzZWFzb25JZCkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlDb25maWcuYmFzZVVSTCArIFwic2Vhc29ucy9cIiArIHNlYXNvbklkICsgXCIvd2Vla3MvYXZhaWxhYmxlXCIpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIldlZWtTZXJ2aWNlOiBnZXRBdmFpbGFibGVXZWVrcyBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIldlZWtTZXJ2aWNlOiBnZXRBdmFpbGFibGVXZWVrcyBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRXZWVrID0gZnVuY3Rpb24oc2Vhc29uSWQsIHdlZWtJZCkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlDb25maWcuYmFzZVVSTCArIFwic2Vhc29ucy9cIiArIHNlYXNvbklkICsgXCIvd2Vla3MvXCIgKyB3ZWVrSWQpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIldlZWtTZXJ2aWNlOiBnZXRXZWVrIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiV2Vla1NlcnZpY2U6IGdldFdlZWsgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuc2VuZFJlbWluZGVyID0gZnVuY3Rpb24od2Vlaykge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnB1dChhcGlDb25maWcuYmFzZVVSTCArIFwiYWRtaW4vc2Vhc29ucy9cIiArIHdlZWsuc2Vhc29uX2lkICsgXCIvd2Vla3MvXCIgKyB3ZWVrLmlkICsgXCIvcmVtaW5kXCIpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIldlZWtTZXJ2aWNlOiBzZW5kUmVtaW5kZXIgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJXZWVrU2VydmljZTogc2VuZFJlbWluZGVyIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmNvbXBsZXRlV2VlayA9IGZ1bmN0aW9uKHdlZWspIHtcbiAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAkaHR0cC5wdXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImFkbWluL3NlYXNvbnMvXCIgKyB3ZWVrLnNlYXNvbl9pZCArIFwiL3dlZWtzL1wiICsgd2Vlay5pZCArIFwiL2NvbXBsZXRlXCIpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIldlZWtTZXJ2aWNlOiBjb21wbGV0ZVdlZWsgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiV2Vla1NlcnZpY2U6IGNvbXBsZXRlV2VlayBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9O1xuXG59O1xuXG5XZWVrU2VydmljZS4kaW5qZWN0ID0gWyckaHR0cCcsICckbG9nJywgJyRxJywgJ2FwaUNvbmZpZycsICdtZXNzYWdlTW9kZWwnXTtcbm1vZHVsZS5leHBvcnRzID0gV2Vla1NlcnZpY2U7XG4iLCJ2YXIgR2FtZVNlcnZpY2UgPSBmdW5jdGlvbigkaHR0cCwgJGxvZywgJHN0YXRlLCBhcGlDb25maWcsIG1lc3NhZ2VNb2RlbCkge1xuXG4gIHRoaXMuZ2V0Q3VycmVudEdhbWVzID0gZnVuY3Rpb24obGVhZ3VlSWQpIHtcbiAgICB2YXIgYXBpVXJsID0gYXBpQ29uZmlnLmJhc2VVUkwgKyBcImdhbWVzL2N1cnJlbnQ/bGVhZ3VlX2lkPVwiICsgbGVhZ3VlSWQ7XG5cbiAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlVcmwpXG4gICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJHYW1lU2VydmljZTogZ2V0Q3VycmVudEdhbWVzIHN1Y2Nlc3NcIik7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSlcbiAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJHYW1lU2VydmljZTogZ2V0Q3VycmVudEdhbWVzIGZhaWxlZFwiKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KTtcblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9O1xuXG4gIHRoaXMuZ2V0V2Vla0dhbWVzID0gZnVuY3Rpb24od2Vla0lkKSB7XG4gICAgdmFyIGFwaVVybCA9IGFwaUNvbmZpZy5iYXNlVVJMICsgXCJ3ZWVrcy9cIiArIHdlZWtJZCArIFwiL2dhbWVzXCI7XG5cbiAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlVcmwpXG4gICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJHYW1lU2VydmljZTogZ2V0V2Vla0dhbWVzIHN1Y2Nlc3NcIik7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSlcbiAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJHYW1lU2VydmljZTogZ2V0V2Vla0dhbWVzIGZhaWxlZFwiKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KTtcblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9O1xuXG4gIHRoaXMudXBkYXRlR2FtZSA9IGZ1bmN0aW9uKGdhbWVQYXJhbXMpIHtcbiAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnB1dChhcGlDb25maWcuYmFzZVVSTCArIFwiYWRtaW4vd2Vla3MvXCIgKyBnYW1lUGFyYW1zLndlZWtfaWQgKyBcIi9nYW1lcy9cIiArIGdhbWVQYXJhbXMuaWQsXG4gICAgICB7IGdhbWU6IGdhbWVQYXJhbXMgfSlcbiAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIkdhbWVTZXJ2aWNlOiB1cGRhdGVHYW1lIHN1Y2Nlc3NcIik7XG4gICAgICAgIC8vIHRvZG86IHRoaXMgcmVsaWVzIG9uIGEgbW9ua2V5IHBhdGNoIGF0IHRoZSBtb21lbnQgLSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci11aS91aS1yb3V0ZXIvaXNzdWVzLzU4MlxuICAgICAgICAvLyBidXQgbWF5IGJlIHJlc29sdmVkIHdpdGggZnV0dXJlIHJlbGVhc2VzIG9mIGFuZ3VsYXItdWktcm91dGVyXG4gICAgICAgICRzdGF0ZS5yZWxvYWQoKTsgLy8gcmVsb2FkcyBhbGwgdGhlIHJlc29sdmVzIGZvciB0aGUgdmlldyBsZWFndWUgcGFnZSBhbmQgcmVpbnN0YW50aWF0ZXMgdGhlIGNvbnRyb2xsZXJcbiAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSlcbiAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJHYW1lU2VydmljZTogdXBkYXRlR2FtZSBmYWlsZWRcIik7XG4gICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH07XG5cbn07XG5cbkdhbWVTZXJ2aWNlLiRpbmplY3QgPSBbJyRodHRwJywgJyRsb2cnLCAnJHN0YXRlJywgJ2FwaUNvbmZpZycsICdtZXNzYWdlTW9kZWwnXTtcbm1vZHVsZS5leHBvcnRzID0gR2FtZVNlcnZpY2U7IiwiXG52YXIgTWVzc2FnZU1vZGVsID0gZnVuY3Rpb24oJHJvb3RTY29wZSwgJGxvZykge1xuXG4gICAgdmFyIG1vZGVsID0gdGhpcztcbiAgICB2YXIgcXVldWUgPSBbXTtcblxuICAgIHZhciBtZXNzYWdlID0ge307XG4gICAgbWVzc2FnZS5sb2FkZWQgPSBmYWxzZTtcbiAgICBtZXNzYWdlLnR5cGUgPSAnJzsgLy8gY2FuIGJlIHN1Y2Nlc3MsIGluZm8sIHdhcm5pbmcgb3IgZGFuZ2VyXG4gICAgbWVzc2FnZS5jb250ZW50ID0gJyc7XG5cbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuXG4gICAgdGhpcy5zZXRNZXNzYWdlID0gZnVuY3Rpb24obWVzc2FnZURhdGEsIGRlbGF5KSB7XG4gICAgICAgIHZhciBtZXNzYWdlID0ge307XG4gICAgICAgIG1lc3NhZ2UubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgbWVzc2FnZSA9IGFuZ3VsYXIuZXh0ZW5kKG1lc3NhZ2UsIG1lc3NhZ2VEYXRhKTtcbiAgICAgICAgaWYgKGRlbGF5KSB7XG4gICAgICAgICAgICBxdWV1ZVswXSA9IG1lc3NhZ2U7IC8vIHF1ZXVlIGl0IHVwIGZvciBhZnRlciBhIGxvY2F0aW9uIGNoYW5nZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kZWwubWVzc2FnZSA9IG1lc3NhZ2U7IC8vIHNob3cgdGhlIG1lc3NhZ2UgYXNhcFxuICAgICAgICAgICAgcXVldWUgPSBbXTsgLy8gY2xlYXIgdGhlIHF1ZXVlIGFzIG1lc3NhZ2Ugd2lsbCBiZSBzaG93ZWQgaW1tZWRpYXRlbHlcbiAgICAgICAgfVxuICAgICAgICAkbG9nLmRlYnVnKFwiTWVzc2FnZU1vZGVsOiBjb250ZW50OiBcIiArIG1lc3NhZ2UuY29udGVudCk7XG4gICAgfTtcblxuICAgIHRoaXMucmVzZXRNZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1lc3NhZ2UgPSB7fTtcbiAgICAgICAgbWVzc2FnZS5sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgbWVzc2FnZS50eXBlID0gJyc7XG4gICAgICAgIG1lc3NhZ2UuY29udGVudCA9ICcnO1xuXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgfTtcblxuICAgICRyb290U2NvcGUuJG9uKFwiJGxvY2F0aW9uQ2hhbmdlU3RhcnRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIG1vZGVsLnJlc2V0TWVzc2FnZSgpO1xuICAgIH0pO1xuXG4gICAgJHJvb3RTY29wZS4kb24oXCIkbG9jYXRpb25DaGFuZ2VTdWNjZXNzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBtb2RlbC5tZXNzYWdlID0gcXVldWUuc2hpZnQoKSB8fCB7fTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiY3JlYXRpbmcgbWVzc2FnZSBtb2RlbC4uLlwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcblxufTtcblxuTWVzc2FnZU1vZGVsLiRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBNZXNzYWdlTW9kZWw7XG4iLCJcbnZhciBVc2VyTW9kZWwgPSBmdW5jdGlvbigkcm9vdFNjb3BlLCAkd2luZG93LCAkbG9nKSB7XG5cbiAgICB2YXIgdXNlciA9IHt9O1xuICAgIHVzZXIubG9hZGVkID0gZmFsc2U7XG4gICAgdXNlci5pZCA9ICcnO1xuICAgIHVzZXIuZW1haWwgPSAnJztcbiAgICB1c2VyLmZpcnN0X25hbWUgPSAnJztcbiAgICB1c2VyLmxhc3RfbmFtZSA9ICcnO1xuICAgIHVzZXIuYWRtaW4gPSBmYWxzZTtcblxuICAgIHRoaXMudXNlciA9IHVzZXI7XG5cbiAgICB0aGlzLnNldFVzZXIgPSBmdW5jdGlvbih1c2VyRGF0YSkge1xuICAgICAgICB1c2VyLmxvYWRlZCA9IHRydWU7XG4gICAgICAgIHVzZXIgPSBhbmd1bGFyLmV4dGVuZCh1c2VyLCB1c2VyRGF0YSk7XG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgndXNlck1vZGVsOjp1c2VyVXBkYXRlZCcsIHVzZXIpO1xuICAgICAgICAkbG9nLmRlYnVnKFwiVXNlck1vZGVsOiBzZXRVc2VyOiBcIiArIHVzZXIuaWQpO1xuICAgICAgICAkbG9nLmRlYnVnKFwiVXNlck1vZGVsOiBzZXRVc2VyOiBcIiArIHVzZXIuZW1haWwpO1xuICAgIH07XG5cbiAgICB0aGlzLnJlc2V0VXNlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkd2luZG93LnNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XG5cbiAgICAgICAgdXNlciA9IHt9O1xuICAgICAgICB1c2VyLmxvYWRlZCA9IGZhbHNlO1xuICAgICAgICB1c2VyLmlkID0gJyc7XG4gICAgICAgIHVzZXIuZW1haWwgPSAnJztcbiAgICAgICAgdXNlci5maXJzdF9uYW1lID0gJyc7XG4gICAgICAgIHVzZXIubGFzdF9uYW1lID0gJyc7XG4gICAgICAgIHVzZXIuYWRtaW4gPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcImNyZWF0aW5nIHVzZXIgbW9kZWwuLi5cIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cblVzZXJNb2RlbC4kaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyR3aW5kb3cnLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBVc2VyTW9kZWw7IiwidmFyIFNlYXNvbk1vZGVsID0gZnVuY3Rpb24oJGxvZykge1xuXG4gIHZhciBtb2RlbCA9IHRoaXM7XG5cbiAgdmFyIHNlYXNvbnMgPSBbXTtcbiAgdmFyIGN1cnJlbnRTZWFzb25zID0gW107XG4gIHZhciBsb2FkZWQgPSBmYWxzZTtcblxuICB0aGlzLnNlYXNvbnMgPSBzZWFzb25zO1xuICB0aGlzLmN1cnJlbnRTZWFzb25zID0gY3VycmVudFNlYXNvbnM7XG4gIHRoaXMubG9hZGVkID0gbG9hZGVkO1xuXG4gIHRoaXMuc2V0U2Vhc29ucyA9IGZ1bmN0aW9uKHNlYXNvbnNBcnJheSkge1xuICAgIGlmICghXy5pc0FycmF5KHNlYXNvbnNBcnJheSkpIHJldHVybjtcbiAgICBtb2RlbC5zZWFzb25zID0gc2Vhc29uc0FycmF5O1xuICAgIG1vZGVsLmN1cnJlbnRTZWFzb25zID0gXy5maWx0ZXIoc2Vhc29uc0FycmF5LCBmdW5jdGlvbihzZWFzb24pIHtcbiAgICAgIHJldHVybiBzZWFzb24uY3VycmVudDtcbiAgICB9KTtcbiAgICBtb2RlbC5sb2FkZWQgPSB0cnVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJjcmVhdGluZyBzZWFzb24gbW9kZWwuLi5cIik7XG4gIH07XG4gIGluaXQoKTtcblxufTtcblxuU2Vhc29uTW9kZWwuJGluamVjdCA9IFsnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBTZWFzb25Nb2RlbDsiLCJjb21tYW5ndWxhci5jcmVhdGUoJ1NpZ25pbkNvbW1hbmQnLFxuICAgIGZ1bmN0aW9uKCRsb2csIHVzZXJTZXJ2aWNlKSB7XG5cbiAgICByZXR1cm4ge1xuXG4gICAgICAgIGV4ZWN1dGU6IGZ1bmN0aW9uKGVtYWlsLCBwYXNzd29yZCkge1xuICAgICAgICAgICAgJGxvZy5kZWJ1ZygnU2lnbmluQ29tbWFuZDogYXV0aGVudGljYXRpbmcgdXNlci4uLicpO1xuICAgICAgICAgICAgcmV0dXJuIHVzZXJTZXJ2aWNlLnNpZ25pbihlbWFpbCwgcGFzc3dvcmQpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlNpZ25pbkNvbW1hbmQ6IGZhaWx1cmU6IFwiICsgZXJyb3IuZGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmVzdWx0OiBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICRsb2cuZGVidWcoXCJTaWduaW5Db21tYW5kOiBzdWNjZXNzIFwiKTtcbiAgICAgICAgfVxuXG4gICAgfVxufSk7XG4iLCJjb21tYW5ndWxhci5jcmVhdGUoJ1NpZ25vdXRDb21tYW5kJyxcbiAgICBmdW5jdGlvbigkbG9nLCB1c2VyU2VydmljZSkge1xuXG4gICAgICAgIHJldHVybiB7XG5cbiAgICAgICAgICAgIGV4ZWN1dGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoJ1NpZ25vdXRDb21tYW5kOiBzaWduaW5nIG91dCB1c2VyLi4uJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXJTZXJ2aWNlLnNpZ25vdXQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJTaWdub3V0Q29tbWFuZDogZmFpbHVyZTogXCIgKyBlcnJvci5kYXRhKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblJlc3VsdDogZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlNpZ25vdXRDb21tYW5kOiBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9KTtcbiIsInZhciBIb21lQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJGxvZywgJGxvY2F0aW9uLCAkbW9kYWwsIHdlZWtTZXJ2aWNlLCBsZWFndWVTZXJ2aWNlLCBtZXNzYWdlTW9kZWwsIHNlYXNvbk1vZGVsKSB7XG5cbiAgJHNjb3BlLmN1cnJlbnRTZWFzb25JZCA9IHNlYXNvbk1vZGVsLmN1cnJlbnRTZWFzb25zWzBdLmlkO1xuXG4gICRzY29wZS5jcmVhdGVMZWFndWUgPSBmdW5jdGlvbihzZWFzb25JZCkge1xuICAgICAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9uZXcvbGVhZ3VlLm5ldy50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTmV3TGVhZ3VlQ29udHJvbGxlcicsXG4gICAgICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgICAgIHdlZWtzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2Vla1NlcnZpY2UuZ2V0QXZhaWxhYmxlV2Vla3Moc2Vhc29uSWQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgICAgIGxlYWd1ZVNlcnZpY2UuY3JlYXRlTGVhZ3VlKGxlYWd1ZSk7XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoJ0NyZWF0ZSBsZWFndWUgbW9kYWwgZGlzbWlzc2VkLi4uJyk7XG4gICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnQ3JlYXRlIGxlYWd1ZSBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAkc2NvcGUuam9pbkxlYWd1ZSA9IGZ1bmN0aW9uKHNlYXNvbklkKSB7XG4gICAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgc2Vhc29uSWQgKyAnL2xlYWd1ZXMvcHVibGljJyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZyhcImhvbWUgY29udHJvbGxlclwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcbn07XG5cbkhvbWVDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJywgJyRsb2NhdGlvbicsICckbW9kYWwnLCAnd2Vla1NlcnZpY2UnLCAnbGVhZ3VlU2VydmljZScsICdtZXNzYWdlTW9kZWwnLCAnc2Vhc29uTW9kZWwnXTtcbm1vZHVsZS5leHBvcnRzID0gSG9tZUNvbnRyb2xsZXI7XG4iLCJcbmNvbW1hbmd1bGFyLmNyZWF0ZSgnR2V0Q3VycmVudFVzZXJDb21tYW5kJyxcbiAgIGZ1bmN0aW9uKCRsb2csIHVzZXJTZXJ2aWNlLCB1c2VyTW9kZWwpIHtcblxuICAgIHJldHVybiB7XG5cbiAgICAgICAgZXhlY3V0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkbG9nLmRlYnVnKCdHZXRDdXJyZW50VXNlckNvbW1hbmQ6IGdldHRpbmcgY3VycmVudCB1c2VyIGRldGFpbHMuLi4nKTtcbiAgICAgICAgICAgIHZhciB1c2VyUHJvbWlzZSA9IHVzZXJTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCk7XG4gICAgICAgICAgICByZXR1cm4gdXNlclByb21pc2U7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAkbG9nLmRlYnVnKFwiR2V0Q3VycmVudFVzZXJDb21tYW5kOiBmYWlsdXJlOiBcIiArIGVycm9yLmRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICBvblJlc3VsdDogZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICAkbG9nLmRlYnVnKFwiR2V0Q3VycmVudFVzZXJDb21tYW5kOiBzdWNjZXNzXCIpO1xuICAgICAgICB9XG5cbiAgICB9XG59KTsiLCJ2YXIgQWJ1c2VDb250cm9sbGVyID0gZnVuY3Rpb24oJG1vZGFsSW5zdGFuY2UsICRzY29wZSwgJGxvZykge1xuXG4gICRzY29wZS5hYnVzZU1lc3NhZ2UgPSAnJztcblxuICAkc2NvcGUuY29udGFjdFVzID0gZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKG1lc3NhZ2UpO1xuICB9O1xuXG4gICRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgfTtcblxuICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICB9O1xuXG4gICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwicmVwb3J0IGFidXNlIGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cbkFidXNlQ29udHJvbGxlci4kaW5qZWN0ID0gWyckbW9kYWxJbnN0YW5jZScsICckc2NvcGUnLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBBYnVzZUNvbnRyb2xsZXI7XG4iLCJ2YXIgRmFxQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRtb2RhbEluc3RhbmNlLCAkc2NvcGUsICRsb2cpIHtcblxuICAkc2NvcGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2xvc2UnKTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwiZmFxIGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cbkZhcUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJG1vZGFsSW5zdGFuY2UnLCAnJHNjb3BlJywgJyRsb2cnXTtcbm1vZHVsZS5leHBvcnRzID0gRmFxQ29udHJvbGxlcjtcbiIsInZhciBTaWduaW5Db250cm9sbGVyID0gZnVuY3Rpb24oJHNjb3BlLCAkbG9nLCAkbG9jYXRpb24sICRtb2RhbCwgbWVzc2FnZU1vZGVsLCB1c2VyU2VydmljZSkge1xuXG4gICAgJHNjb3BlLmNyZWRlbnRpYWxzID0ge1xuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJ1xuICAgIH07XG5cbiAgICAkc2NvcGUuc2lnbmluID0gZnVuY3Rpb24oY3JlZGVudGlhbHMpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcInNpZ25pbiBjcmVkZW50aWFsczogXCIgKyBjcmVkZW50aWFscyk7XG4gICAgICAgICRzY29wZS5kaXNwYXRjaChcIlNpZ25pbkV2ZW50XCIsIGNyZWRlbnRpYWxzKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmZvcmdvdFBhc3N3b3JkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIHRvZG86IGltcGxlbWVudCB0aGlzXG4gICAgICAgIGFsZXJ0KCd0b3VnaCBzaGl0Jyk7XG4gICAgfTtcblxuICAgICRzY29wZS5yZXNldFBhc3N3b3JkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS91c2VyL3Jlc2V0L3VzZXIucmVzZXQudHBsLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnVXNlclJlc2V0Q29udHJvbGxlcidcbiAgICAgIH0pO1xuXG4gICAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uIChlbWFpbCkge1xuICAgICAgICB1c2VyU2VydmljZS5yZXNldFVzZXIoZW1haWwpO1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKCdSZXNldCBwYXNzd29yZCBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdSZXNldCBwYXNzd29yZCBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAkc2NvcGUucmVnaXN0ZXIgPSBmdW5jdGlvbigpIHtcblxuICAgICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXIvcmVnaXN0ZXIudHBsLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnUmVnaXN0ZXJDb250cm9sbGVyJ1xuICAgICAgfSk7XG5cbiAgICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24obmV3VXNlcikge1xuICAgICAgICB1c2VyU2VydmljZS5jcmVhdGVVc2VyKG5ld1VzZXIpO1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKCdSZWdpc3RlciBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdSZWdpc3RlciBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKFwic2lnbmluIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cblNpZ25pbkNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnLCAnJGxvY2F0aW9uJywgJyRtb2RhbCcsICdtZXNzYWdlTW9kZWwnLCAndXNlclNlcnZpY2UnXTtcbm1vZHVsZS5leHBvcnRzID0gU2lnbmluQ29udHJvbGxlcjtcbiIsInZhciBSZWdpc3RlckNvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2csICRtb2RhbCwgJG1vZGFsSW5zdGFuY2UpIHtcblxuICAgICRzY29wZS5uZXdVc2VyRGF0YSA9IHtcbiAgICAgICAgZmlyc3RfbmFtZTogJycsXG4gICAgICAgIGxhc3RfbmFtZTogJycsXG4gICAgICAgIG5pY2tuYW1lOiAnJyxcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBlbWFpbF9jb25maXJtYXRpb246ICcnLFxuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogJydcbiAgICB9O1xuXG4gICAgJHNjb3BlLnJlZ2lzdGVyID0gZnVuY3Rpb24gKG5ld1VzZXIpIHtcbiAgICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKG5ld1VzZXIpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2FuY2VsJyk7XG4gICAgfTtcblxuICAgICRzY29wZS5oYXNFcnJvciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICAgIH07XG5cbiAgICAkc2NvcGUuaGFzUHJvcGVydHlFcnJvciA9IGZ1bmN0aW9uKGlucHV0LCBwcm9wZXJ0eSkge1xuICAgICAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kZXJyb3JbcHJvcGVydHldO1xuICAgIH07XG5cbiAgICAkc2NvcGUuc2hvd1Rlcm1zID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHVibGljL3JlZ2lzdGVyL3Rlcm1zL3JlZ2lzdGVyLnRlcm1zLnRwbC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1JlZ2lzdGVyVGVybXNDb250cm9sbGVyJ1xuICAgICAgfSk7XG5cbiAgICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBkbyBuYWRhXG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoJ1Rlcm1zIGFuZCBjb25kaXRpb25zIG1vZGFsIGNsb3NlZC4uLicpO1xuICAgICAgfSk7XG5cbiAgICB9O1xuXG4gIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKFwicmVnaXN0ZXIgY29udHJvbGxlclwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcblxufTtcblxuUmVnaXN0ZXJDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJywgJyRtb2RhbCcsICckbW9kYWxJbnN0YW5jZSddO1xubW9kdWxlLmV4cG9ydHMgPSBSZWdpc3RlckNvbnRyb2xsZXI7XG4iLCJcbnZhciBVc2VyQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJGxvZywgdXNlck1vZGVsLCB1c2VyU2VydmljZSkge1xuXG4gICAgJHNjb3BlLnVzZXJEYXRhID0gYW5ndWxhci5jb3B5KHVzZXJNb2RlbCk7XG5cbiAgICAkc2NvcGUudXBkYXRlID0gZnVuY3Rpb24odXNlcikge1xuICAgICAgICB1c2VyU2VydmljZS51cGRhdGVVc2VyKHVzZXIpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICAgICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLiRvbigndXNlck1vZGVsOjp1c2VyVXBkYXRlZCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICRzY29wZS51c2VyRGF0YSA9IGFuZ3VsYXIuY29weSh1c2VyTW9kZWwpO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJ1c2VyIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cblVzZXJDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJywgJ3VzZXJNb2RlbCcsICd1c2VyU2VydmljZSddO1xubW9kdWxlLmV4cG9ydHMgPSBVc2VyQ29udHJvbGxlcjtcbiIsIlxudmFyIExlYWd1ZUNvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2cpIHtcblxuICAgICRzY29wZS5oYXNFcnJvciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICAgIH07XG5cbiAgICAkc2NvcGUuaGFzUHJvcGVydHlFcnJvciA9IGZ1bmN0aW9uKGlucHV0LCBwcm9wZXJ0eSkge1xuICAgICAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kZXJyb3JbcHJvcGVydHldO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcImxlYWd1ZSBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5MZWFndWVDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IExlYWd1ZUNvbnRyb2xsZXI7XG4iLCJ2YXIgUGxheUNvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2csICRsb2NhdGlvbiwgJG1vZGFsLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgbWVzc2FnZU1vZGVsLCBzZWFzb25Nb2RlbCwgd2Vla1NlcnZpY2UsIGxlYWd1ZVNlcnZpY2UpIHtcblxuICAkc2NvcGUuY3VycmVudFNlYXNvbklkID0gc2Vhc29uTW9kZWwuY3VycmVudFNlYXNvbnNbMF0uaWQ7XG5cbiAgJHNjb3BlLnNlYXNvbnMgPSBhbmd1bGFyLmNvcHkoc2Vhc29uTW9kZWwuc2Vhc29ucykucmV2ZXJzZSgpO1xuXG4gICRzY29wZS5zZWxlY3RlZFNlYXNvbiA9IHtcbiAgICBpZDogcGFyc2VJbnQoJHN0YXRlUGFyYW1zLnNlYXNvbklkKVxuICB9O1xuXG4gICRzY29wZS50ZWFtT3B0aW9ucyA9IHsgYWxpdmU6IHRydWUsIGRlYWQ6IHRydWUgfTtcbiAgJHNjb3BlLmxlYWd1ZU9wdGlvbnMgPSB7IG1hbmFnZWQ6IHRydWUgfTtcblxuICAkc2NvcGUucXVlcnkgPSAnJztcblxuICAkc2NvcGUuY2hhbmdlU2Vhc29uID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG5ld1BhdGggPSAkbG9jYXRpb24ucGF0aCgpLnJlcGxhY2UoLyhcXC9zZWFzb25cXC8pXFxkLywgJyQxJyArICRzY29wZS5zZWxlY3RlZFNlYXNvbi5pZCk7XG4gICAgJGxvY2F0aW9uLnBhdGgobmV3UGF0aCk7XG4gIH07XG5cbiAgJHNjb3BlLm15VGVhbXMgPSBmdW5jdGlvbigpIHtcbiAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgJHN0YXRlUGFyYW1zLnNlYXNvbklkICsgJy9teS90ZWFtcycpO1xuICB9O1xuXG4gICRzY29wZS5teUxlYWd1ZXMgPSBmdW5jdGlvbigpIHtcbiAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgJHN0YXRlUGFyYW1zLnNlYXNvbklkICsgJy9teS9sZWFndWVzJyk7XG4gIH07XG5cbiAgJHNjb3BlLnJlc2V0U2VhcmNoID0gZnVuY3Rpb24oKSB7XG4gICAgJHNjb3BlLnF1ZXJ5ID0gJyc7XG4gIH07XG5cbiAgJHNjb3BlLmlzU3RhdGUgPSBmdW5jdGlvbihzdGF0ZXMpIHtcbiAgICByZXR1cm4gXy5pbmRleE9mKHN0YXRlcywgJHN0YXRlLmN1cnJlbnQubmFtZSkgPiAtMTtcbiAgfTtcblxuICAkc2NvcGUuY3JlYXRlTGVhZ3VlID0gZnVuY3Rpb24oc2Vhc29uSWQpIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL25ldy9sZWFndWUubmV3LnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdOZXdMZWFndWVDb250cm9sbGVyJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgd2Vla3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB3ZWVrU2VydmljZS5nZXRBdmFpbGFibGVXZWVrcyhzZWFzb25JZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihsZWFndWUpIHtcbiAgICAgIGxlYWd1ZVNlcnZpY2UuY3JlYXRlTGVhZ3VlKGxlYWd1ZSk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnQ3JlYXRlIGxlYWd1ZSBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnQ3JlYXRlIGxlYWd1ZSBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcblxuICB9O1xuXG4gICRzY29wZS5qb2luTGVhZ3VlID0gZnVuY3Rpb24oc2Vhc29uSWQpIHtcbiAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgc2Vhc29uSWQgKyAnL2xlYWd1ZXMvcHVibGljJyk7XG4gIH07XG5cbiAgICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwicGxheSBjb250cm9sbGVyXCIpO1xuICB9O1xuICBpbml0KCk7XG5cbn07XG5cblBsYXlDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJywgJyRsb2NhdGlvbicsICckbW9kYWwnLCAnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICdtZXNzYWdlTW9kZWwnLCAnc2Vhc29uTW9kZWwnLCAnd2Vla1NlcnZpY2UnLCAnbGVhZ3VlU2VydmljZSddO1xubW9kdWxlLmV4cG9ydHMgPSBQbGF5Q29udHJvbGxlcjtcbiIsInZhciBMZWFndWVzQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJGxvZywgJHN0YXRlKSB7XG5cbiAgICAvLyBwYWdpbmF0aW9uXG4gICAgJHNjb3BlLmN1cnJlbnRMZWFndWVQYWdlID0gMTtcbiAgICAkc2NvcGUubGVhZ3Vlc1BlclBhZ2UgPSAxMDA7XG5cbiAgICAkc2NvcGUuaXNQdWJsaWMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICRzdGF0ZS5jdXJyZW50Lm5hbWUgPT0gJ3ByaXZhdGUubGVhZ3Vlcy5qb2luLnB1YmxpYyc7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKFwibGVhZ3VlcyBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5MZWFndWVzQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZycsICckc3RhdGUnXTtcbm1vZHVsZS5leHBvcnRzID0gTGVhZ3Vlc0NvbnRyb2xsZXI7XG5cbiIsInZhciBUZWFtQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJGxvZykge1xuXG4gICAgJHNjb3BlLmhhc0Vycm9yID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gICAgfTtcblxuICAgICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRlcnJvcltwcm9wZXJ0eV07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKFwidGVhbSBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5UZWFtQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBUZWFtQ29udHJvbGxlcjtcbiIsInZhciBUZWFtc0NvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2csICRzdGF0ZSwgJGxvY2F0aW9uLCAkc3RhdGVQYXJhbXMpIHtcblxuICAgICRzY29wZS5zZWFzb25JZCA9ICRzdGF0ZVBhcmFtcy5zZWFzb25JZDtcblxuICAgIC8vIHBhZ2luYXRpb25cbiAgICAkc2NvcGUuY3VycmVudFRlYW1QYWdlID0gMTtcbiAgICAkc2NvcGUudGVhbXNQZXJQYWdlID0gMTAwO1xuXG4gICAgJHNjb3BlLmlzQWxpdmVTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gJHN0YXRlLmN1cnJlbnQubmFtZSA9PSAncHJpdmF0ZS50ZWFtcy5hbGl2ZSc7XG4gICAgfTtcblxuICAgICRzY29wZS5oYXNOb1BpY2sgPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgICByZXR1cm4gdGVhbS5sYXN0X3BpY2tfc3F1YWQubmFtZSA9PSAnTm8gUGljayc7XG4gICAgfTtcblxuICAgICRzY29wZS5jcmVhdGVUZWFtID0gZnVuY3Rpb24oc2Vhc29uSWQpIHtcbiAgICAgICAgJGxvY2F0aW9uLnBhdGgoJy9zZWFzb24vJyArIHNlYXNvbklkICsgJy9sZWFndWVzL3B1YmxpYycpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuYWxpdmVUZWFtcyA9IGZ1bmN0aW9uKHNlYXNvbklkKSB7XG4gICAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgc2Vhc29uSWQgKyAnL3RlYW1zL2FsaXZlJyk7XG4gICAgfTtcblxuICAgICRzY29wZS5kZWFkVGVhbXMgPSBmdW5jdGlvbihzZWFzb25JZCkge1xuICAgICAgJGxvY2F0aW9uLnBhdGgoJy9zZWFzb24vJyArIHNlYXNvbklkICsgJy90ZWFtcy9kZWFkJyk7XG4gICAgfTtcblxuICAgICRzY29wZS5zaG93VGVhbSA9IGZ1bmN0aW9uKHNlYXNvbklkLCB0ZWFtKSB7XG4gICAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgc2Vhc29uSWQgKyAnL2xlYWd1ZS8nICsgdGVhbS5sZWFndWUuaWQgKyAnL3RlYW0vJyArIHRlYW0uaWQpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcInRlYW1zIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cblRlYW1zQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZycsICckc3RhdGUnLCAnJGxvY2F0aW9uJywgJyRzdGF0ZVBhcmFtcyddO1xubW9kdWxlLmV4cG9ydHMgPSBUZWFtc0NvbnRyb2xsZXI7XG4iLCJ2YXIgQWRtaW5Db250cm9sbGVyID0gZnVuY3Rpb24oJHNjb3BlKSB7XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cbkFkbWluQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnXTtcbm1vZHVsZS5leHBvcnRzID0gQWRtaW5Db250cm9sbGVyO1xuIiwidmFyIE1lc3NhZ2VDb250cm9sbGVyID0gZnVuY3Rpb24oJHNjb3BlLCAkbG9nLCBtZXNzYWdlTW9kZWwpIHtcblxuICAgICRzY29wZS5tZXNzYWdlRGF0YSA9IG1lc3NhZ2VNb2RlbDtcblxuICAgICRzY29wZS5kaXNtaXNzTWVzc2FnZSA9IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgbWVzc2FnZS5yZXNldE1lc3NhZ2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIm1lc3NhZ2UgY29udHJvbGxlclwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcbn07XG5cbk1lc3NhZ2VDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJywgJ21lc3NhZ2VNb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBNZXNzYWdlQ29udHJvbGxlcjtcbiIsInZhciBDb25maXJtQ29udHJvbGxlciA9IGZ1bmN0aW9uKG1lc3NhZ2UsICRzY29wZSwgJGxvZywgJG1vZGFsSW5zdGFuY2UpIHtcblxuICAkc2NvcGUubWVzc2FnZSA9IG1lc3NhZ2U7XG5cbiAgJHNjb3BlLmNvbmZpcm0gPSBmdW5jdGlvbigpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZSgpO1xuICB9O1xuXG4gICRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2FuY2VsJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcImNvbmZpcm0gY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xuXG59O1xuXG5Db25maXJtQ29udHJvbGxlci4kaW5qZWN0ID0gWydtZXNzYWdlJywgJyRzY29wZScsICckbG9nJywgJyRtb2RhbEluc3RhbmNlJ107XG5tb2R1bGUuZXhwb3J0cyA9IENvbmZpcm1Db250cm9sbGVyO1xuIiwidmFyIEhlYWRlckNvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2csICRsb2NhdGlvbiwgJG1vZGFsLCAkc3RhdGUsICRhbmNob3JTY3JvbGwsIHdlZWtTZXJ2aWNlLCB1c2VyU2VydmljZSwgbGVhZ3VlU2VydmljZSwgdXNlck1vZGVsLCBtZXNzYWdlTW9kZWwsIHNlYXNvbk1vZGVsKSB7XG5cbiAgICB2YXIgc2Nyb2xsVG9Ub3AgPSBmdW5jdGlvbigpIHtcbiAgICAgICRhbmNob3JTY3JvbGwoKTsgLy8gaGFja3k/XG4gICAgfTtcblxuICAgIHZhciBjaGVja0h0bWw1U3RvcmFnZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICB0cnkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UudGVzdCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYwMDAwMDApICsgMTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnZGFuZ2VyJywgY29udGVudDogJ1lvdSBhcmUgaW4gUHJpdmFjeSBNb2RlLiBUaGlzIGFwcCB3aWxsIG5vdCBmdW5jdGlvbiBwcm9wZXJseS4gVHVybiBvZmYgUHJpdmFjeSBNb2RlLid9LCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICB9O1xuXG4gICAgJHNjb3BlLmN1cnJlbnRTZWFzb25JZCA9IHNlYXNvbk1vZGVsLmN1cnJlbnRTZWFzb25zWzBdLmlkO1xuXG4gICAgJHNjb3BlLmlzQ29sbGFwc2VkID0gdHJ1ZTtcblxuICAgICRzY29wZS51c2VyRGF0YSA9IHVzZXJNb2RlbDtcblxuICAgICRzY29wZS5jcmVkZW50aWFscyA9IHtcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJydcbiAgICB9O1xuXG4gICAgJHNjb3BlLmlzU3RhdGUgPSBmdW5jdGlvbihzdGF0ZXMpIHtcbiAgICAgIHJldHVybiBfLmluZGV4T2Yoc3RhdGVzLCAkc3RhdGUuY3VycmVudC5uYW1lKSA+IC0xO1xuICAgIH07XG5cbiAgICAkc2NvcGUuaG9tZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkbG9jYXRpb24ucGF0aCgnLycpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuZmFxID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICRtb2RhbC5vcGVuKHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3B1YmxpYy9mYXEvZmFxLnRwbC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ0ZhcUNvbnRyb2xsZXInXG4gICAgICB9KTtcblxuICAgIH07XG5cbiAgICAkc2NvcGUuY29udGFjdFVzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHVibGljL2FidXNlL2FidXNlLnRwbC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ0FidXNlQ29udHJvbGxlcidcbiAgICAgIH0pO1xuXG4gICAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgdXNlclNlcnZpY2UuY29udGFjdFVzKG1lc3NhZ2UpO1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ0NvbnRhY3QgdXMgY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgICAgICRsb2cuZGVidWcoJ2NvbnRhY3QgdXMgZGlzbWlzc2VkLi4uJyk7XG4gICAgICB9KTtcblxuICAgIH07XG5cbiAgICAkc2NvcGUucmVnaXN0ZXIgPSBmdW5jdGlvbigpIHtcblxuICAgICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXIvcmVnaXN0ZXIudHBsLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnUmVnaXN0ZXJDb250cm9sbGVyJ1xuICAgICAgfSk7XG5cbiAgICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24obmV3VXNlcikge1xuICAgICAgICB1c2VyU2VydmljZS5jcmVhdGVVc2VyKG5ld1VzZXIpO1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ1JlZ2lzdGVyIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgICAgICAkbG9nLmRlYnVnKCdSZWdpc3RlciBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgICRzY29wZS5wbGF5ID0gZnVuY3Rpb24oc2Vhc29uSWQpIHtcbiAgICAgICRsb2NhdGlvbi5wYXRoKCcvc2Vhc29uLycgKyBzZWFzb25JZCArICcvbXkvdGVhbXMnKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmpvaW5MZWFndWUgPSBmdW5jdGlvbihzZWFzb25JZCkge1xuICAgICAgJGxvY2F0aW9uLnBhdGgoJy9zZWFzb24vJyArIHNlYXNvbklkICsgJy9sZWFndWVzL3B1YmxpYycpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuY3JlYXRlTGVhZ3VlID0gZnVuY3Rpb24oc2Vhc29uSWQpIHtcbiAgICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL25ldy9sZWFndWUubmV3LnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdOZXdMZWFndWVDb250cm9sbGVyJyxcbiAgICAgICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICAgICAgd2Vla3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB3ZWVrU2VydmljZS5nZXRBdmFpbGFibGVXZWVrcyhzZWFzb25JZCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihsZWFndWUpIHtcbiAgICAgICAgbGVhZ3VlU2VydmljZS5jcmVhdGVMZWFndWUobGVhZ3VlKTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdDcmVhdGUgbGVhZ3VlIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgICAgICAkbG9nLmRlYnVnKCdDcmVhdGUgbGVhZ3VlIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgICRzY29wZS51c2VyUHJvZmlsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkbG9jYXRpb24ucGF0aCgnL3VzZXInKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLnNpZ25pbiA9IGZ1bmN0aW9uKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJzaWduaW4gY3JlZGVudGlhbHM6IFwiICsgY3JlZGVudGlhbHMpO1xuICAgICAgICAkc2NvcGUuZGlzcGF0Y2goXCJTaWduaW5FdmVudFwiLCBjcmVkZW50aWFscyk7XG4gICAgfTtcblxuICAgICRzY29wZS5zaWdub3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRzY29wZS5jcmVkZW50aWFscyA9IHtcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJ1xuICAgICAgICB9O1xuICAgICAgICAkc2NvcGUuZGlzcGF0Y2goXCJTaWdub3V0RXZlbnRcIik7XG4gICAgfTtcblxuICAgICRzY29wZS5yZXNldFBhc3N3b3JkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS91c2VyL3Jlc2V0L3VzZXIucmVzZXQudHBsLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnVXNlclJlc2V0Q29udHJvbGxlcidcbiAgICAgIH0pO1xuXG4gICAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uIChlbWFpbCkge1xuICAgICAgICB1c2VyU2VydmljZS5yZXNldFVzZXIoZW1haWwpO1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ1Jlc2V0IHBhc3N3b3JkIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgICAgICAkbG9nLmRlYnVnKCdSZXNldCBwYXNzd29yZCBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcImhlYWRlciBjb250cm9sbGVyXCIpO1xuICAgICAgICBzY3JvbGxUb1RvcCgpO1xuICAgICAgICBjaGVja0h0bWw1U3RvcmFnZSgpO1xuICAgIH07XG4gICAgaW5pdCgpO1xufTtcblxuSGVhZGVyQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZycsICckbG9jYXRpb24nLCAnJG1vZGFsJywgJyRzdGF0ZScsICckYW5jaG9yU2Nyb2xsJywgJ3dlZWtTZXJ2aWNlJywgJ3VzZXJTZXJ2aWNlJywgJ2xlYWd1ZVNlcnZpY2UnLCAndXNlck1vZGVsJywgJ21lc3NhZ2VNb2RlbCcsICdzZWFzb25Nb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBIZWFkZXJDb250cm9sbGVyO1xuIiwidmFyIEFwcGxpY2F0aW9uU2VydmljZSA9IGZ1bmN0aW9uKCR3aW5kb3csICRsb2NhdGlvbiwgJGxvZykge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgQXBwbGljYXRpb24gU3RhcnR1cCBQcm9jZXNzXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0YXJ0dXAgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHN0YXJ0dXBQcm9jZXNzKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHN0YXJ0dXBQcm9jZXNzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZm9yY2VTc2woKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgZm9yY2VTc2wgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCRsb2NhdGlvbi5ob3N0KCkgPT0gJ2xvY2FsaG9zdCcpIHJldHVybjtcbiAgICAgICAgICBpZiAoJGxvY2F0aW9uLnByb3RvY29sKCkgIT0gJ2h0dHBzJykge1xuICAgICAgICAgICAgJHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJGxvY2F0aW9uLmFic1VybCgpLnJlcGxhY2UoJ2h0dHAnLCAnaHR0cHMnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkbG9nLmRlYnVnKFwiQXBwbGljYXRpb25TZXJ2aWNlIGluaXQgYXBwbGljYXRpb24gc2VydmljZVwiKTtcbiAgICAgICAgfTtcbiAgICAgICAgaW5pdCgpO1xuXG4gICAgfTtcblxuQXBwbGljYXRpb25TZXJ2aWNlLiRpbmplY3QgPSBbJyR3aW5kb3cnLCAnJGxvY2F0aW9uJywgJyRsb2cnXTtcbm1vZHVsZS5leHBvcnRzID0gQXBwbGljYXRpb25TZXJ2aWNlO1xuIiwidmFyIEZvb3RlckNvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2csICRsb2NhdGlvbikge1xuXG4gICRzY29wZS5ob21lID0gZnVuY3Rpb24oKSB7XG4gICAgJGxvY2F0aW9uLnBhdGgoJy8nKTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwiZm9vdGVyIGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cbkZvb3RlckNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnLCAnJGxvY2F0aW9uJ107XG5tb2R1bGUuZXhwb3J0cyA9IEZvb3RlckNvbnRyb2xsZXI7XG4iLCJ2YXIgRm9jdXNEaXJlY3RpdmUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgRk9DVVNfQ0xBU1MgPSAnbmctZm9jdXNlZCc7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgICAgcmVxdWlyZTogJ25nTW9kZWwnLFxuICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMsIGN0cmwpIHtcbiAgICAgICAgICAgIGN0cmwuJGZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGVsZW1lbnQuYmluZCgnZm9jdXMnLCBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKEZPQ1VTX0NMQVNTKTtcbiAgICAgICAgICAgICAgICBzY29wZS4kYXBwbHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0cmwuJGZvY3VzZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkuYmluZCgnYmx1cicsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoRk9DVVNfQ0xBU1MpO1xuICAgICAgICAgICAgICAgIHNjb3BlLiRhcHBseShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgY3RybC4kZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZvY3VzRGlyZWN0aXZlO1xuIiwidmFyIE1hdGNoRGlyZWN0aXZlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVxdWlyZTogJ25nTW9kZWwnLFxuICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW0sIGF0dHJzLCBjdHJsKSB7XG4gICAgICAgICAgICBzY29wZS4kd2F0Y2goJ1snICsgYXR0cnMubmdNb2RlbCArICcsICcgKyBhdHRycy5tYXRjaCArICddJywgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IHZhbHVlWzBdIHx8ICcnO1xuICAgICAgICAgICAgICAgIHZhciBiID0gdmFsdWVbMV0gfHwgJyc7XG4gICAgICAgICAgICAgICAgY3RybC4kc2V0VmFsaWRpdHkoJ21hdGNoJywgYSA9PT0gYik7XG4gICAgICAgICAgICB9LCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTWF0Y2hEaXJlY3RpdmU7XG4iLCJ2YXIgcmNTdWJtaXREaXJlY3RpdmUgPSB7XG4gICdyY1N1Ym1pdCc6IFsnJHBhcnNlJywgZnVuY3Rpb24gKCRwYXJzZSkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgcmVxdWlyZTogWydyY1N1Ym1pdCcsICc/Zm9ybSddLFxuICAgICAgY29udHJvbGxlcjogWyckc2NvcGUnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XG5cbiAgICAgICAgdmFyIGZvcm1Db250cm9sbGVyID0gbnVsbDtcbiAgICAgICAgdmFyIGF0dGVtcHRIYW5kbGVycyA9IFtdO1xuXG4gICAgICAgIHRoaXMuYXR0ZW1wdGVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5vbkF0dGVtcHQgPSBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgICAgYXR0ZW1wdEhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zZXRBdHRlbXB0ZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB0aGlzLmF0dGVtcHRlZCA9IHRydWU7XG5cbiAgICAgICAgICBhbmd1bGFyLmZvckVhY2goYXR0ZW1wdEhhbmRsZXJzLCBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlcigpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2V0Rm9ybUNvbnRyb2xsZXIgPSBmdW5jdGlvbihjb250cm9sbGVyKSB7XG4gICAgICAgICAgZm9ybUNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubmVlZHNBdHRlbnRpb24gPSBmdW5jdGlvbiAoZmllbGRNb2RlbENvbnRyb2xsZXIpIHtcbiAgICAgICAgICBpZiAoIWZvcm1Db250cm9sbGVyKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICBpZiAoZmllbGRNb2RlbENvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBmaWVsZE1vZGVsQ29udHJvbGxlci4kaW52YWxpZCAmJlxuICAgICAgICAgICAgICAoZmllbGRNb2RlbENvbnRyb2xsZXIuJGRpcnR5IHx8IHRoaXMuYXR0ZW1wdGVkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZvcm1Db250cm9sbGVyICYmIGZvcm1Db250cm9sbGVyLiRpbnZhbGlkICYmXG4gICAgICAgICAgICAgIChmb3JtQ29udHJvbGxlci4kZGlydHkgfHwgdGhpcy5hdHRlbXB0ZWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1dLFxuICAgICAgY29tcGlsZTogZnVuY3Rpb24oY0VsZW1lbnQsIGNBdHRyaWJ1dGVzLCB0cmFuc2NsdWRlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcHJlOiBmdW5jdGlvbihzY29wZSwgZm9ybUVsZW1lbnQsIGF0dHJpYnV0ZXMsIGNvbnRyb2xsZXJzKSB7XG5cbiAgICAgICAgICAgIHZhciBzdWJtaXRDb250cm9sbGVyID0gY29udHJvbGxlcnNbMF07XG4gICAgICAgICAgICB2YXIgZm9ybUNvbnRyb2xsZXIgPSAoY29udHJvbGxlcnMubGVuZ3RoID4gMSkgPyBjb250cm9sbGVyc1sxXSA6IG51bGw7XG5cbiAgICAgICAgICAgIHN1Ym1pdENvbnRyb2xsZXIuc2V0Rm9ybUNvbnRyb2xsZXIoZm9ybUNvbnRyb2xsZXIpO1xuXG4gICAgICAgICAgICBzY29wZS5yYyA9IHNjb3BlLnJjIHx8IHt9O1xuICAgICAgICAgICAgc2NvcGUucmNbYXR0cmlidXRlcy5uYW1lXSA9IHN1Ym1pdENvbnRyb2xsZXI7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBwb3N0OiBmdW5jdGlvbihzY29wZSwgZm9ybUVsZW1lbnQsIGF0dHJpYnV0ZXMsIGNvbnRyb2xsZXJzKSB7XG5cbiAgICAgICAgICAgIHZhciBzdWJtaXRDb250cm9sbGVyID0gY29udHJvbGxlcnNbMF07XG4gICAgICAgICAgICB2YXIgZm9ybUNvbnRyb2xsZXIgPSAoY29udHJvbGxlcnMubGVuZ3RoID4gMSkgPyBjb250cm9sbGVyc1sxXSA6IG51bGw7XG4gICAgICAgICAgICB2YXIgZm4gPSAkcGFyc2UoYXR0cmlidXRlcy5yY1N1Ym1pdCk7XG5cbiAgICAgICAgICAgIGZvcm1FbGVtZW50LmJpbmQoJ3N1Ym1pdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgc3VibWl0Q29udHJvbGxlci5zZXRBdHRlbXB0ZWQoKTtcbiAgICAgICAgICAgICAgaWYgKCFzY29wZS4kJHBoYXNlKSBzY29wZS4kYXBwbHkoKTtcblxuICAgICAgICAgICAgICBpZiAoIWZvcm1Db250cm9sbGVyLiR2YWxpZCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICAgIHNjb3BlLiRhcHBseShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBmbihzY29wZSwgeyRldmVudDpldmVudH0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9O1xuICB9XVxufTsiLCJcbnZhciBPZmZzZXRGaWx0ZXIgPSBmdW5jdGlvbigkbG9nKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGlucHV0LCBzdGFydCkge1xuICAgICAgICBzdGFydCA9IHBhcnNlSW50KHN0YXJ0LCAxMCk7XG4gICAgICAgIHJldHVybiBpbnB1dC5zbGljZShzdGFydCk7XG4gICAgfTtcbn07XG5cbk9mZnNldEZpbHRlci4kaW5qZWN0ID0gWyckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IE9mZnNldEZpbHRlcjtcbiIsInZhciBBY3RpdmVUZWFtRmlsdGVyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBmdW5jdGlvbih0ZWFtcywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmluYWN0aXZlID09IHRydWUpIHtcbiAgICAgIHJldHVybiB0ZWFtcztcbiAgICB9XG4gICAgdmFyIGFjdGl2ZVRlYW1zID0gXy5maWx0ZXIodGVhbXMsIGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAgIHJldHVybiB0ZWFtLmFjdGl2ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gYWN0aXZlVGVhbXM7XG4gIH07XG59O1xuXG5BY3RpdmVUZWFtRmlsdGVyLiRpbmplY3QgPSBbXTtcbm1vZHVsZS5leHBvcnRzID0gQWN0aXZlVGVhbUZpbHRlcjtcbiIsInZhciBPcGVuTGVhZ3VlRmlsdGVyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBmdW5jdGlvbihsZWFndWVzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuY2xvc2VkID09IHRydWUpIHtcbiAgICAgIHJldHVybiBsZWFndWVzO1xuICAgIH1cbiAgICB2YXIgb3BlbkxlYWd1ZXMgPSBfLmZpbHRlcihsZWFndWVzLCBmdW5jdGlvbihsZWFndWUpIHtcbiAgICAgIHJldHVybiBsZWFndWUub3BlbjtcbiAgICB9KTtcbiAgICByZXR1cm4gb3BlbkxlYWd1ZXM7XG4gIH07XG59O1xuXG5PcGVuTGVhZ3VlRmlsdGVyLiRpbmplY3QgPSBbXTtcbm1vZHVsZS5leHBvcnRzID0gT3BlbkxlYWd1ZUZpbHRlcjtcbiIsInZhciBBbGl2ZVRlYW1GaWx0ZXIgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRlYW1zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuZGVhZCA9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdGVhbXM7XG4gICAgfVxuICAgIHZhciBhbGl2ZVRlYW1zID0gXy5maWx0ZXIodGVhbXMsIGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAgIHJldHVybiB0ZWFtLmFsaXZlO1xuICAgIH0pO1xuICAgIHJldHVybiBhbGl2ZVRlYW1zO1xuICB9O1xufTtcblxuQWxpdmVUZWFtRmlsdGVyLiRpbmplY3QgPSBbXTtcbm1vZHVsZS5leHBvcnRzID0gQWxpdmVUZWFtRmlsdGVyO1xuIiwidmFyIE1hbmFnZWRMZWFndWVGaWx0ZXIgPSBmdW5jdGlvbih1c2VyTW9kZWwpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGxlYWd1ZXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5tYW5hZ2VkID09IHRydWUpIHtcbiAgICAgIHJldHVybiBsZWFndWVzO1xuICAgIH1cbiAgICB2YXIgaW5MZWFndWVzID0gXy5maWx0ZXIobGVhZ3VlcywgZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgICByZXR1cm4gbGVhZ3VlLmNvbW1pc2hfaWRzLmluZGV4T2YodXNlck1vZGVsLnVzZXIuaWQpID09IC0xO1xuICAgIH0pO1xuICAgIHJldHVybiBpbkxlYWd1ZXM7XG4gIH07XG59O1xuXG5NYW5hZ2VkTGVhZ3VlRmlsdGVyLiRpbmplY3QgPSBbJ3VzZXJNb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBNYW5hZ2VkTGVhZ3VlRmlsdGVyO1xuIiwidmFyIE5ld0xlYWd1ZUNvbnRyb2xsZXIgPSBmdW5jdGlvbih3ZWVrcywgJHNjb3BlLCAkbG9nLCAkbW9kYWxJbnN0YW5jZSwgd2Vla1NlcnZpY2UsIHNlYXNvbk1vZGVsKSB7XG5cbiAgICAkc2NvcGUud2Vla3MgPSB3ZWVrcy5kYXRhO1xuXG4gICAgJHNjb3BlLnNlYXNvbnMgPSBhbmd1bGFyLmNvcHkoc2Vhc29uTW9kZWwuY3VycmVudFNlYXNvbnMpO1xuXG4gICAgJHNjb3BlLm5ld0xlYWd1ZURhdGEgPSB7XG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBuaWNrbmFtZTogJycsXG4gICAgICAgIHNlYXNvbl9pZDogc2Vhc29uTW9kZWwuY3VycmVudFNlYXNvbnNbMF0uaWQsXG4gICAgICAgIHN0YXJ0X3dlZWtfaWQ6ICRzY29wZS53ZWVrc1swXS5pZCxcbiAgICAgICAgcHVibGljOiB0cnVlLFxuICAgICAgICBlbGltaW5hdGlvbjogdHJ1ZSxcbiAgICAgICAgbWF4X3RlYW1zX3Blcl91c2VyOiAnJ1xuICAgIH07XG5cbiAgICAkc2NvcGUuZ2V0U2Vhc29uV2Vla3MgPSBmdW5jdGlvbigpIHtcbiAgICAgIHdlZWtTZXJ2aWNlLmdldEF2YWlsYWJsZVdlZWtzKCRzY29wZS5uZXdMZWFndWVEYXRhLnNlYXNvbl9pZClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAkc2NvcGUud2Vla3MgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNyZWF0ZUxlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgICAgJG1vZGFsSW5zdGFuY2UuY2xvc2UobGVhZ3VlKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2FuY2VsJyk7XG4gICAgfTtcblxuICAgICRzY29wZS5oYXNFcnJvciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRlcnJvcltwcm9wZXJ0eV07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKFwibmV3IGxlYWd1ZSBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5OZXdMZWFndWVDb250cm9sbGVyLiRpbmplY3QgPSBbJ3dlZWtzJywgJyRzY29wZScsICckbG9nJywgJyRtb2RhbEluc3RhbmNlJywgJ3dlZWtTZXJ2aWNlJywgJ3NlYXNvbk1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IE5ld0xlYWd1ZUNvbnRyb2xsZXI7XG4iLCJcbnZhciBUaW1lRmlsdGVyID0gZnVuY3Rpb24oJGxvZykge1xuICAgcmV0dXJuIGZ1bmN0aW9uKGlucHV0KSB7XG5cbiAgICAgICBpZiAoaW5wdXQgPCAxKSB7XG4gICAgICAgICAgIHJldHVybiBcIjAwOjAwOjAwXCI7XG4gICAgICAgfVxuXG4gICAgICAgZnVuY3Rpb24gZm9ybWF0KHZhbCkge1xuICAgICAgICAgICByZXR1cm4gKHZhbDwxMCA/ICcwJyA6ICcnKSArIHZhbDtcbiAgICAgICB9XG5cbiAgICAgICB2YXIgaCA9IE1hdGguZmxvb3IoKGlucHV0IC8gMTAwMCkgLyAzNjAwKTtcbiAgICAgICB2YXIgbSA9IE1hdGguZmxvb3IoKChpbnB1dCAvIDEwMDApICUgMzYwMCkgLyA2MCk7XG4gICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKChpbnB1dCAvIDEwMDApICUgNjApO1xuICAgICAgIHJldHVybiBmb3JtYXQoaCkgKyBcIjpcIiArIGZvcm1hdChtKSArIFwiOlwiICsgZm9ybWF0KHMpO1xuICAgfVxuXG59O1xuXG5UaW1lRmlsdGVyLiRpbmplY3QgPSBbJyRsb2cnXTtcbm1vZHVsZS5leHBvcnRzID0gVGltZUZpbHRlcjtcbiIsInZhciBFZGl0TGVhZ3VlQ29udHJvbGxlciA9IGZ1bmN0aW9uKHdlZWtzLCBsZWFndWUsICRzY29wZSwgJGxvZywgJGxvY2F0aW9uLCAkbW9kYWxJbnN0YW5jZSwgd2Vla1NlcnZpY2UsIHNlYXNvbk1vZGVsKSB7XG5cbiAgICAkc2NvcGUud2Vla3MgPSB3ZWVrcy5kYXRhO1xuXG4gICAgJHNjb3BlLnNlYXNvbnMgPSBhbmd1bGFyLmNvcHkoc2Vhc29uTW9kZWwuY3VycmVudFNlYXNvbnMpO1xuXG4gICAgJHNjb3BlLmxlYWd1ZURhdGEgPSBhbmd1bGFyLmNvcHkobGVhZ3VlKTtcblxuICAgICRzY29wZS5zaG93TGVhZ3VlID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgbGVhZ3VlLnNlYXNvbl9pZCArICcvbGVhZ3VlLycgKyBsZWFndWUuaWQpO1xuICAgIH07XG5cbiAgICAkc2NvcGUudXBkYXRlTGVhZ3VlID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZShsZWFndWUpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuZ2V0U2Vhc29uV2Vla3MgPSBmdW5jdGlvbigpIHtcbiAgICAgIHdlZWtTZXJ2aWNlLmdldEF2YWlsYWJsZVdlZWtzKCRzY29wZS5sZWFndWVEYXRhLnNlYXNvbl9pZClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAkc2NvcGUud2Vla3MgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2FuY2VsJyk7XG4gICAgfTtcblxuICAgICRzY29wZS5oYXNFcnJvciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRlcnJvcltwcm9wZXJ0eV07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiZWRpdCBsZWFndWUgY29udHJvbGxlclwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcblxufTtcblxuRWRpdExlYWd1ZUNvbnRyb2xsZXIuJGluamVjdCA9IFsnd2Vla3MnLCAnbGVhZ3VlJywgJyRzY29wZScsICckbG9nJywgJyRsb2NhdGlvbicsICckbW9kYWxJbnN0YW5jZScsICd3ZWVrU2VydmljZScsICdzZWFzb25Nb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBFZGl0TGVhZ3VlQ29udHJvbGxlcjtcbiIsInZhciBSZWdpc3RlclRlcm1zQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRtb2RhbEluc3RhbmNlLCAkc2NvcGUsICRsb2cpIHtcblxuICAkc2NvcGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2xvc2UnKTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwicmVnaXN0ZXIgdGVybXMgYW5kIGNvbmRpdGlvbnMgY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuUmVnaXN0ZXJUZXJtc0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJG1vZGFsSW5zdGFuY2UnLCAnJHNjb3BlJywgJyRsb2cnXTtcbm1vZHVsZS5leHBvcnRzID0gUmVnaXN0ZXJUZXJtc0NvbnRyb2xsZXI7XG4iLCJ2YXIgVXNlclJlc2V0Q29udHJvbGxlciA9IGZ1bmN0aW9uKCRtb2RhbEluc3RhbmNlLCAkc2NvcGUsICRsb2cpIHtcblxuICAkc2NvcGUudXNlckRhdGEgPSB7XG4gICAgZW1haWw6IFwiXCJcbiAgfTtcblxuICAkc2NvcGUucmVzZXQgPSBmdW5jdGlvbiAoZW1haWwpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZShlbWFpbCk7XG4gIH07XG5cbiAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgfTtcblxuICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICB9O1xuXG4gICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwidXNlciByZXNldCBjb250cm9sbGVyXCIpO1xuICB9O1xuICBpbml0KCk7XG59O1xuXG5Vc2VyUmVzZXRDb250cm9sbGVyLiRpbmplY3QgPSBbJyRtb2RhbEluc3RhbmNlJywgJyRzY29wZScsICckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IFVzZXJSZXNldENvbnRyb2xsZXI7XG4iLCJ2YXIgVmlld0xlYWd1ZUNvbnRyb2xsZXIgPSBmdW5jdGlvbihsZWFndWUsIGxlYWd1ZVRlYW1zLCAkc2NvcGUsICRsb2csICRtb2RhbCwgJGxvY2F0aW9uLCB1c2VyTW9kZWwsIG1lc3NhZ2VNb2RlbCwgdXNlclNlcnZpY2UsIHdlZWtTZXJ2aWNlLCB0ZWFtU2VydmljZSwgbGVhZ3VlU2VydmljZSkge1xuXG4gICRzY29wZS5sZWFndWVEYXRhID0gbGVhZ3VlLmRhdGE7XG5cbiAgJHNjb3BlLmxlYWd1ZVRlYW1zID0gbGVhZ3VlVGVhbXMuZGF0YTtcblxuICAvLyBwYWdpbmF0aW9uXG4gICRzY29wZS5jdXJyZW50VGVhbVBhZ2UgPSAxO1xuICAkc2NvcGUudGVhbXNQZXJQYWdlID0gMTAwO1xuXG4gICRzY29wZS50ZWFtT3B0aW9ucyA9IHsgYWN0aXZlOiB0cnVlLCBpbmFjdGl2ZTogZmFsc2UgfTtcblxuICAkc2NvcGUudGVhbVF1ZXJ5ID0gJyc7XG5cbiAgJHNjb3BlLmxlYWd1ZURyb3Bkb3duID0ge1xuICAgIGlzb3BlbjogZmFsc2VcbiAgfTtcblxuICAkc2NvcGUudG9nZ2xlRHJvcGRvd24gPSBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgJHNjb3BlLmxlYWd1ZURyb3Bkb3duLmlzb3BlbiA9ICEkc2NvcGUubGVhZ3VlRHJvcGRvd24uaXNvcGVuO1xuICB9O1xuXG4gICRzY29wZS5zZWFyY2ggPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgaWYgKGl0ZW0ubmFtZS5pbmRleE9mKCRzY29wZS50ZWFtUXVlcnkudG9Mb3dlckNhc2UoKSkgIT0gLTEgfHwgaXRlbS5jb2FjaF9uYW1lcy5qb2luKCcsICcpLmluZGV4T2YoJHNjb3BlLnRlYW1RdWVyeS50b0xvd2VyQ2FzZSgpKSAhPSAtMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAkc2NvcGUuc3RhcnRzID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgdmFyIHN0YXJ0c0xhYmVsID0gKGxlYWd1ZS5zdGFydGVkKSA/ICdTdGFydGVkICcgOiAnU3RhcnRzICc7XG4gICAgcmV0dXJuIHN0YXJ0c0xhYmVsICsgbGVhZ3VlLnN0YXJ0X3dlZWtfZGlzcGxheTtcbiAgfTtcblxuICAkc2NvcGUuaXNDb21taXNoID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgcmV0dXJuIGxlYWd1ZS5jb21taXNoX2lkcy5pbmRleE9mKHVzZXJNb2RlbC51c2VyLmlkKSA+IC0xO1xuICB9O1xuXG4gICRzY29wZS5pc0FkbWluID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHVzZXJNb2RlbC51c2VyLmFkbWluO1xuICB9O1xuXG4gICRzY29wZS5oYXNUZWFtSW5MZWFndWUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZm91bmQgPSBmYWxzZTtcbiAgICBfLmVhY2goJHNjb3BlLmxlYWd1ZVRlYW1zLCBmdW5jdGlvbih0ZWFtKSB7XG4gICAgICBpZiAodGVhbS5jb2FjaF9pZHMuaW5kZXhPZih1c2VyTW9kZWwudXNlci5pZCkgPiAtMSkge1xuICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZvdW5kO1xuICB9O1xuXG4gICRzY29wZS5oYXNEZWFjdGl2YXRlZFRlYW1zID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGZvdW5kRGVhY3RpdmF0ZWQgPSBmYWxzZTtcbiAgICBfLmVhY2goJHNjb3BlLmxlYWd1ZVRlYW1zLCBmdW5jdGlvbih0ZWFtKSB7XG4gICAgICBpZiAodGVhbS5hY3RpdmUgPT0gZmFsc2UpIHtcbiAgICAgICAgZm91bmREZWFjdGl2YXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZvdW5kRGVhY3RpdmF0ZWQ7XG4gIH07XG5cbiAgJHNjb3BlLmlzQ29hY2ggPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgcmV0dXJuIHRlYW0uY29hY2hfaWRzLmluZGV4T2YodXNlck1vZGVsLnVzZXIuaWQpID4gLTE7XG4gIH07XG5cbiAgJHNjb3BlLmNvYWNoTmFtZSA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICByZXR1cm4gdGVhbS5jb2FjaF9uYW1lcy5qb2luKCcsICcpO1xuICB9O1xuXG4gICRzY29wZS5oYXNOb1BpY2sgPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgcmV0dXJuIHRlYW0ubGFzdF9waWNrX3NxdWFkLm5hbWUgPT0gJ05vIFBpY2snO1xuICB9O1xuXG4gICRzY29wZS5lZGl0TGVhZ3VlID0gZnVuY3Rpb24obGVhZ3VlKSB7XG5cbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9lZGl0L2xlYWd1ZS5lZGl0LnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdFZGl0TGVhZ3VlQ29udHJvbGxlcicsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIHdlZWtzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gd2Vla1NlcnZpY2UuZ2V0QXZhaWxhYmxlV2Vla3MobGVhZ3VlLnNlYXNvbl9pZCk7XG4gICAgICAgIH0sXG4gICAgICAgIGxlYWd1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGxlYWd1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSk7XG5cbiAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgICAgbGVhZ3VlU2VydmljZS51cGRhdGVMZWFndWUobGVhZ3VlKTtcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAkbG9nLmRlYnVnKCdFZGl0IGxlYWd1ZSBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnRWRpdCBsZWFndWUgY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAkc2NvcGUub3BlbkxlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgIGxlYWd1ZVNlcnZpY2Uub3BlbkxlYWd1ZShsZWFndWUpXG4gIH07XG5cbiAgJHNjb3BlLmNsb3NlTGVhZ3VlID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgbGVhZ3VlU2VydmljZS5jbG9zZUxlYWd1ZShsZWFndWUpXG4gIH07XG5cbiAgJHNjb3BlLnNob3dUZWFtID0gZnVuY3Rpb24odGVhbSkge1xuICAgICRsb2NhdGlvbi5wYXRoKCRsb2NhdGlvbi5wYXRoKCkgKyAnL3RlYW0vJyArIHRlYW0uaWQpO1xuICB9O1xuXG4gICRzY29wZS5jb250YWN0Q29tbWlzaCA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuXG4gICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvY29udGFjdC9sZWFndWUuY29udGFjdC50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnTGVhZ3VlQ29udGFjdENvbnRyb2xsZXInLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICBsZWFndWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBsZWFndWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgICBsZWFndWVTZXJ2aWNlLnNlbmRDb21taXNoTWVzc2FnZShwYXJhbXMubGVhZ3VlLCBwYXJhbXMubWVzc2FnZSlcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAkbG9nLmRlYnVnKCdDb250YWN0IGxlYWd1ZSBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnQ29udGFjdCBjb21taXNoIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgIH0pO1xuXG4gIH07XG5cbiAgJHNjb3BlLnJlcG9ydEFidXNlID0gZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wdWJsaWMvYWJ1c2UvYWJ1c2UudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0FidXNlQ29udHJvbGxlcidcbiAgICB9KTtcblxuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgdXNlclNlcnZpY2UuY29udGFjdFVzKG1lc3NhZ2UpO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnQ29udGFjdCB1cyBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICAgICRsb2cuZGVidWcoJ2NvbnRhY3QgdXMgZGlzbWlzc2VkLi4uJyk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAkc2NvcGUudXBkYXRlTWVzc2FnZSA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuXG4gICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbWVzc2FnZS9sZWFndWUubWVzc2FnZS50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnTGVhZ3VlTWVzc2FnZUNvbnRyb2xsZXInLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICBsZWFndWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBsZWFndWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgICBsZWFndWVTZXJ2aWNlLnVwZGF0ZUxlYWd1ZU1lc3NhZ2UocGFyYW1zLmxlYWd1ZSwgcGFyYW1zLnNlbmRBbGl2ZSwgcGFyYW1zLnNlbmRBbGwpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICAkc2NvcGUubGVhZ3VlRGF0YS5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgfSk7XG5cbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAkbG9nLmRlYnVnKCdMZWFndWUgbWVzc2FnZSBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnVXBkYXRlIGxlYWd1ZSBtZXNzYWdlIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgIH0pO1xuXG4gIH07XG5cbiAgJHNjb3BlLmpvaW5MZWFndWUgPSBmdW5jdGlvbihsZWFndWUpIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2pvaW4vbGVhZ3VlLmpvaW4udHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0xlYWd1ZUpvaW5Db250cm9sbGVyJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgbGVhZ3VlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gbGVhZ3VlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAgIHRlYW1TZXJ2aWNlLmNyZWF0ZVRlYW0odGVhbSk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnSm9pbiBsZWFndWUgbW9kYWwgZGlzbWlzc2VkLi4uJyk7XG4gICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ0pvaW4gbGVhZ3VlIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgIH0pO1xuXG4gIH07XG5cbiAgJHNjb3BlLnJlcXVlc3RJbnZpdGUgPSBmdW5jdGlvbihsZWFndWUpIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2ludml0ZS9yZXF1ZXN0L2xlYWd1ZS5pbnZpdGUucmVxdWVzdC50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnTGVhZ3VlSW52aXRlUmVxdWVzdENvbnRyb2xsZXInLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICBsZWFndWVJZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGxlYWd1ZS5pZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbiAoaW52aXRhdGlvbikge1xuICAgICAgbGVhZ3VlU2VydmljZS5yZXF1ZXN0SW52aXRlKGludml0YXRpb24pO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ1JlcXVlc3QgaW52aXRlIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdSZXF1ZXN0IGludml0ZSBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcblxuICB9O1xuXG4gICRzY29wZS5pbnZpdGUgPSBmdW5jdGlvbihsZWFndWVJZCwgaXNDb21taXNoLCBzdGFydFdlZWtDb21wbGV0ZSkge1xuXG4gICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlL2xlYWd1ZS5pbnZpdGUudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0xlYWd1ZUludml0ZUNvbnRyb2xsZXInLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICBsZWFndWVJZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGxlYWd1ZUlkO1xuICAgICAgICB9LFxuICAgICAgICBpc0NvbW1pc2g6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBpc0NvbW1pc2g7XG4gICAgICAgIH0sXG4gICAgICAgIHN0YXJ0V2Vla0NvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gc3RhcnRXZWVrQ29tcGxldGU7XG4gICAgICAgIH0sXG4gICAgICAgIGludml0YXRpb25zOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoaXNDb21taXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gbGVhZ3VlU2VydmljZS5nZXRJbnZpdGVzKGxlYWd1ZUlkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHsgZGF0YTogW10gfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24oaW52aXRhdGlvbikge1xuICAgICAgbGVhZ3VlU2VydmljZS5jcmVhdGVJbnZpdGUoaW52aXRhdGlvbik7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnSW52aXRlIGNvYWNoIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgIH0pO1xuICB9O1xuXG4gICRzY29wZS5zaG93RGVhY3RpdmF0ZWRUZWFtcyA9IGZ1bmN0aW9uKHNob3cpIHtcbiAgICAkc2NvcGUudGVhbU9wdGlvbnMuaW5hY3RpdmUgPSBzaG93O1xuICAgIGlmIChzaG93KSB7XG4gICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICdpbmZvJywgY29udGVudDogJ1Nob3dpbmcgZGVhY3RpdmF0ZWQgdGVhbXMgKGlmIGFueSknIH0sIGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnaW5mbycsIGNvbnRlbnQ6ICdIaWRpbmcgZGVhY3RpdmF0ZWQgdGVhbXMgKGlmIGFueSknIH0sIGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgJHNjb3BlLnJlc2V0U2VhcmNoID0gZnVuY3Rpb24oKSB7XG4gICAgJHNjb3BlLnRlYW1RdWVyeSA9ICcnO1xuICAgICRzY29wZS5jdXJyZW50VGVhbVBhZ2UgPSAxO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJ2aWV3IGxlYWd1ZSBjb250cm9sbGVyXCIpO1xuICB9O1xuICBpbml0KCk7XG5cbn07XG5cblZpZXdMZWFndWVDb250cm9sbGVyLiRpbmplY3QgPSBbJ2xlYWd1ZScsICdsZWFndWVUZWFtcycsICckc2NvcGUnLCAnJGxvZycsICckbW9kYWwnLCAnJGxvY2F0aW9uJywgJ3VzZXJNb2RlbCcsICdtZXNzYWdlTW9kZWwnLCAndXNlclNlcnZpY2UnLCAnd2Vla1NlcnZpY2UnLCAndGVhbVNlcnZpY2UnLCAnbGVhZ3VlU2VydmljZSddO1xubW9kdWxlLmV4cG9ydHMgPSBWaWV3TGVhZ3VlQ29udHJvbGxlcjtcbiIsInZhciBMZWFndWVDb250YWN0Q29udHJvbGxlciA9IGZ1bmN0aW9uKGxlYWd1ZSwgJG1vZGFsSW5zdGFuY2UsICRzY29wZSwgJGxvZykge1xuXG4gICRzY29wZS5sZWFndWVEYXRhID0gbGVhZ3VlO1xuXG4gICRzY29wZS5jb21taXNoTWVzc2FnZSA9ICcnO1xuXG4gICRzY29wZS5jb250YWN0Q29tbWlzaCA9IGZ1bmN0aW9uKGxlYWd1ZSwgbWVzc2FnZSkge1xuICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKHsgbGVhZ3VlOiBsZWFndWUsIG1lc3NhZ2U6IG1lc3NhZ2UgfSk7XG4gIH07XG5cbiAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICB9O1xuXG4gICRzY29wZS5oYXNFcnJvciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gIH07XG5cbiAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kZXJyb3JbcHJvcGVydHldO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJsZWFndWUgY29udGFjdCBjb250cm9sbGVyXCIpO1xuICB9O1xuICBpbml0KCk7XG59O1xuXG5MZWFndWVDb250YWN0Q29udHJvbGxlci4kaW5qZWN0ID0gWydsZWFndWUnLCAnJG1vZGFsSW5zdGFuY2UnLCAnJHNjb3BlJywgJyRsb2cnXTtcbm1vZHVsZS5leHBvcnRzID0gTGVhZ3VlQ29udGFjdENvbnRyb2xsZXI7XG4iLCJ2YXIgSm9pbkxlYWd1ZXNDb250cm9sbGVyID0gZnVuY3Rpb24oJHNjb3BlLCAkbG9nLCAkbG9jYXRpb24sICRtb2RhbCwgJHN0YXRlUGFyYW1zLCB1c2VyTW9kZWwsIG1lc3NhZ2VNb2RlbCwgc2Vhc29uTW9kZWwsIHdlZWtTZXJ2aWNlLCBsZWFndWVTZXJ2aWNlKSB7XG5cbiAgJHNjb3BlLmN1cnJlbnRTZWFzb25JZCA9IHNlYXNvbk1vZGVsLmN1cnJlbnRTZWFzb25zWzBdLmlkO1xuXG4gICRzY29wZS5jdXJyZW50U2Vhc29ucyA9IGFuZ3VsYXIuY29weShzZWFzb25Nb2RlbC5jdXJyZW50U2Vhc29ucyk7XG5cbiAgJHNjb3BlLnNlbGVjdGVkU2Vhc29uID0ge1xuICAgIGlkOiBwYXJzZUludCgkc3RhdGVQYXJhbXMuc2Vhc29uSWQpXG4gIH07XG5cbiAgJHNjb3BlLmxlYWd1ZU9wdGlvbnMgPSB7IGNsb3NlZDogZmFsc2UgfTtcblxuICAkc2NvcGUubGVhZ3VlUXVlcnkgPSAnJztcblxuICAkc2NvcGUucHVibGljTGVhZ3VlcyA9IGZ1bmN0aW9uKCkge1xuICAgICRsb2NhdGlvbi5wYXRoKCcvc2Vhc29uLycgKyAkc3RhdGVQYXJhbXMuc2Vhc29uSWQgKyAnL2xlYWd1ZXMvcHVibGljJyk7XG4gIH07XG5cbiAgJHNjb3BlLnByaXZhdGVMZWFndWVzID0gZnVuY3Rpb24oKSB7XG4gICAgJGxvY2F0aW9uLnBhdGgoJy9zZWFzb24vJyArICRzdGF0ZVBhcmFtcy5zZWFzb25JZCArICcvbGVhZ3Vlcy9wcml2YXRlJyk7XG4gIH07XG5cbiAgJHNjb3BlLmNoYW5nZVNlYXNvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBuZXdQYXRoID0gJGxvY2F0aW9uLnBhdGgoKS5yZXBsYWNlKC8oXFwvc2Vhc29uXFwvKVxcZC8sICckMScgKyAkc2NvcGUuc2VsZWN0ZWRTZWFzb24uaWQpO1xuICAgICRsb2NhdGlvbi5wYXRoKG5ld1BhdGgpO1xuICB9O1xuXG4gICRzY29wZS5zZWFyY2ggPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgaWYgKGl0ZW0ubmFtZS5pbmRleE9mKCRzY29wZS5sZWFndWVRdWVyeS50b0xvd2VyQ2FzZSgpKSAhPSAtMSB8fCBpdGVtLmNvbW1pc2hfbmFtZXMuam9pbignLCAnKS5pbmRleE9mKCRzY29wZS5sZWFndWVRdWVyeS50b0xvd2VyQ2FzZSgpKSAhPSAtMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAkc2NvcGUucmVzZXRTZWFyY2ggPSBmdW5jdGlvbigpIHtcbiAgICAkc2NvcGUubGVhZ3VlUXVlcnkgPSAnJztcbiAgfTtcblxuICAkc2NvcGUuaXNDb21taXNoID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgcmV0dXJuIGxlYWd1ZS5jb21taXNoX2lkcy5pbmRleE9mKHVzZXJNb2RlbC51c2VyLmlkKSA+IC0xO1xuICB9O1xuXG4gICRzY29wZS5jcmVhdGVMZWFndWUgPSBmdW5jdGlvbihzZWFzb25JZCkge1xuXG4gICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbmV3L2xlYWd1ZS5uZXcudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ05ld0xlYWd1ZUNvbnRyb2xsZXInLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICB3ZWVrczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHdlZWtTZXJ2aWNlLmdldEF2YWlsYWJsZVdlZWtzKHNlYXNvbklkKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSk7XG5cbiAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgICAgbGVhZ3VlU2VydmljZS5jcmVhdGVMZWFndWUobGVhZ3VlKTtcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAkbG9nLmRlYnVnKCdDcmVhdGUgbGVhZ3VlIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdDcmVhdGUgbGVhZ3VlIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgIH0pO1xuXG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcImpvaW4gbGVhZ3VlcyBjb250cm9sbGVyXCIpO1xuICB9O1xuICBpbml0KCk7XG5cbn07XG5cbkpvaW5MZWFndWVzQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZycsICckbG9jYXRpb24nLCAnJG1vZGFsJywgJyRzdGF0ZVBhcmFtcycsICd1c2VyTW9kZWwnLCAnbWVzc2FnZU1vZGVsJywgJ3NlYXNvbk1vZGVsJywgJ3dlZWtTZXJ2aWNlJywgJ2xlYWd1ZVNlcnZpY2UnXTtcbm1vZHVsZS5leHBvcnRzID0gSm9pbkxlYWd1ZXNDb250cm9sbGVyO1xuIiwidmFyIExlYWd1ZU1lc3NhZ2VDb250cm9sbGVyID0gZnVuY3Rpb24obGVhZ3VlLCAkbW9kYWxJbnN0YW5jZSwgJHNjb3BlLCAkbG9nKSB7XG5cbiAgJHNjb3BlLmxlYWd1ZURhdGEgPSBhbmd1bGFyLmNvcHkobGVhZ3VlKTtcblxuICAkc2NvcGUubWVzc2FnZU9wdGlvbnMgPSB7XG4gICAgc2VuZEFsaXZlOiBmYWxzZSxcbiAgICBzZW5kQWxsOiBmYWxzZVxuICB9O1xuXG4gICRzY29wZS51cGRhdGVNZXNzYWdlID0gZnVuY3Rpb24obGVhZ3VlLCBzZW5kQWxpdmUsIHNlbmRBbGwpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZSh7IGxlYWd1ZTogbGVhZ3VlLCBzZW5kQWxpdmU6IHNlbmRBbGl2ZSwgc2VuZEFsbDogc2VuZEFsbCB9KTtcbiAgfTtcblxuICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2FuY2VsJyk7XG4gIH07XG5cbiAgJHNjb3BlLmhhc0Vycm9yID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgfTtcblxuICAkc2NvcGUuaGFzUHJvcGVydHlFcnJvciA9IGZ1bmN0aW9uKGlucHV0LCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRlcnJvcltwcm9wZXJ0eV07XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcImxlYWd1ZSBtZXNzYWdlIGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cbkxlYWd1ZU1lc3NhZ2VDb250cm9sbGVyLiRpbmplY3QgPSBbJ2xlYWd1ZScsICckbW9kYWxJbnN0YW5jZScsICckc2NvcGUnLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBMZWFndWVNZXNzYWdlQ29udHJvbGxlcjtcbiIsInZhciBMZWFndWVKb2luQ29udHJvbGxlciA9IGZ1bmN0aW9uKGxlYWd1ZSwgJG1vZGFsSW5zdGFuY2UsICRzY29wZSwgJGxvZykge1xuXG4gICRzY29wZS5sZWFndWVEYXRhID0gbGVhZ3VlO1xuXG4gICRzY29wZS5uZXdUZWFtRGF0YSA9IHtcbiAgICBuYW1lOiAnJyxcbiAgICBzZWFzb25faWQ6IGxlYWd1ZS5zZWFzb25faWQsXG4gICAgbGVhZ3VlX2lkOiBsZWFndWUuaWRcbiAgfTtcblxuICAkc2NvcGUuam9pbkxlYWd1ZSA9IGZ1bmN0aW9uIChuZXdUZWFtKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuY2xvc2UobmV3VGVhbSk7XG4gIH07XG5cbiAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgfTtcblxuICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICB9O1xuXG4gICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwibGVhZ3VlIGpvaW4gY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuTGVhZ3VlSm9pbkNvbnRyb2xsZXIuJGluamVjdCA9IFsnbGVhZ3VlJywgJyRtb2RhbEluc3RhbmNlJywgJyRzY29wZScsICckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IExlYWd1ZUpvaW5Db250cm9sbGVyO1xuIiwidmFyIExlYWd1ZUludml0ZUNvbnRyb2xsZXIgPSBmdW5jdGlvbihsZWFndWVJZCwgaXNDb21taXNoLCBzdGFydFdlZWtDb21wbGV0ZSwgaW52aXRhdGlvbnMsICRtb2RhbCwgJG1vZGFsSW5zdGFuY2UsICRzY29wZSwgJGxvZykge1xuXG4gICRzY29wZS5pc0NvbW1pc2ggPSBpc0NvbW1pc2g7XG5cbiAgJHNjb3BlLnN0YXJ0V2Vla0NvbXBsZXRlID0gc3RhcnRXZWVrQ29tcGxldGU7XG5cbiAgJHNjb3BlLmludml0YXRpb25zID0gaW52aXRhdGlvbnMuZGF0YTtcblxuICAkc2NvcGUucmVzZXRJbnZpdGUgPSBmdW5jdGlvbigpIHtcbiAgICAkc2NvcGUuaW52aXRhdGlvbiA9IHtcbiAgICAgIGxlYWd1ZV9pZDogbGVhZ3VlSWQsXG4gICAgICBlbWFpbDogXCJcIixcbiAgICAgIG1lc3NhZ2U6IFwiXCJcbiAgICB9XG4gIH07XG4gICRzY29wZS5yZXNldEludml0ZSgpO1xuXG4gICRzY29wZS5wb3B1bGF0ZUludml0ZSA9IGZ1bmN0aW9uKGludml0YXRpb24pIHtcbiAgICAkc2NvcGUuaW52aXRhdGlvbiA9IHtcbiAgICAgIGxlYWd1ZV9pZDogaW52aXRhdGlvbi5sZWFndWVfaWQsXG4gICAgICBlbWFpbDogaW52aXRhdGlvbi5lbWFpbCxcbiAgICAgIG1lc3NhZ2U6IGludml0YXRpb24ubWVzc2FnZVxuICAgIH1cbiAgfTtcblxuICAkc2NvcGUuc2VuZEludml0ZSA9IGZ1bmN0aW9uKGludml0YXRpb24pIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZShpbnZpdGF0aW9uKTtcbiAgfTtcblxuICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2FuY2VsJyk7XG4gIH07XG5cbiAgJHNjb3BlLmhhc0Vycm9yID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgfTtcblxuICAkc2NvcGUuaGFzUHJvcGVydHlFcnJvciA9IGZ1bmN0aW9uKGlucHV0LCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRlcnJvcltwcm9wZXJ0eV07XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcImxlYWd1ZSBpbnZpdGUgY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuTGVhZ3VlSW52aXRlQ29udHJvbGxlci4kaW5qZWN0ID0gWydsZWFndWVJZCcsICdpc0NvbW1pc2gnLCAnc3RhcnRXZWVrQ29tcGxldGUnLCAnaW52aXRhdGlvbnMnLCAnJG1vZGFsJywgJyRtb2RhbEluc3RhbmNlJywgJyRzY29wZScsICckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IExlYWd1ZUludml0ZUNvbnRyb2xsZXI7XG4iLCJ2YXIgTWFuYWdlZExlYWd1ZXNDb250cm9sbGVyID0gZnVuY3Rpb24obWFuYWdlZExlYWd1ZXMsICRzY29wZSwgJGxvZywgJGxvY2F0aW9uLCAkbW9kYWwsIG1lc3NhZ2VNb2RlbCwgd2Vla1NlcnZpY2UsIGxlYWd1ZVNlcnZpY2UpIHtcblxuICAgICRzY29wZS5tYW5hZ2VkTGVhZ3VlcyA9IG1hbmFnZWRMZWFndWVzLmRhdGE7XG5cbiAgICAkc2NvcGUuY3JlYXRlTGVhZ3VlID0gZnVuY3Rpb24oc2Vhc29uKSB7XG5cbiAgICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbmV3L2xlYWd1ZS5uZXcudHBsLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnTmV3TGVhZ3VlQ29udHJvbGxlcicsXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICB3ZWVrczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gd2Vla1NlcnZpY2UuZ2V0QXZhaWxhYmxlV2Vla3Moc2Vhc29uLmlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgfSk7XG5cbiAgICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgICAgIGxlYWd1ZVNlcnZpY2UuY3JlYXRlTGVhZ3VlKGxlYWd1ZSk7XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoJ0NyZWF0ZSBsZWFndWUgbW9kYWwgZGlzbWlzc2VkLi4uJyk7XG4gICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnQ3JlYXRlIGxlYWd1ZSBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgICRzY29wZS52aWV3TGVhZ3VlID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgICAgICRsb2NhdGlvbi5wYXRoKCcvc2Vhc29uLycgKyBsZWFndWUuc2Vhc29uX2lkICsgJy9sZWFndWUvJyArIGxlYWd1ZS5pZCk7XG4gICAgfTtcblxuICAgICRzY29wZS5zdGFydHMgPSBmdW5jdGlvbihsZWFndWUpIHtcbiAgICAgIHZhciBzdGFydHNMYWJlbCA9IChsZWFndWUuc3RhcnRlZCkgPyAnU3RhcnRlZCAnIDogJ1N0YXJ0cyAnO1xuICAgICAgcmV0dXJuIHN0YXJ0c0xhYmVsICsgbGVhZ3VlLnN0YXJ0X3dlZWs7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKFwibWFuYWdlZCBsZWFndWVzIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cbk1hbmFnZWRMZWFndWVzQ29udHJvbGxlci4kaW5qZWN0ID0gWydtYW5hZ2VkTGVhZ3VlcycsICckc2NvcGUnLCAnJGxvZycsICckbG9jYXRpb24nLCAnJG1vZGFsJywgJ21lc3NhZ2VNb2RlbCcsICd3ZWVrU2VydmljZScsICdsZWFndWVTZXJ2aWNlJ107XG5tb2R1bGUuZXhwb3J0cyA9IE1hbmFnZWRMZWFndWVzQ29udHJvbGxlcjtcblxuIiwidmFyIE15TGVhZ3Vlc0NvbnRyb2xsZXIgPSBmdW5jdGlvbihsZWFndWVzLCAkc2NvcGUsICRsb2csICRsb2NhdGlvbiwgJG1vZGFsLCBtZXNzYWdlTW9kZWwsIHdlZWtTZXJ2aWNlLCBsZWFndWVTZXJ2aWNlKSB7XG5cbiAgJHNjb3BlLmxlYWd1ZXMgPSBsZWFndWVzLmRhdGE7XG5cbiAgJHNjb3BlLmNyZWF0ZUxlYWd1ZSA9IGZ1bmN0aW9uKHNlYXNvbikge1xuXG4gICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbmV3L2xlYWd1ZS5uZXcudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ05ld0xlYWd1ZUNvbnRyb2xsZXInLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICB3ZWVrczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHdlZWtTZXJ2aWNlLmdldEF2YWlsYWJsZVdlZWtzKHNlYXNvbi5pZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihsZWFndWUpIHtcbiAgICAgIGxlYWd1ZVNlcnZpY2UuY3JlYXRlTGVhZ3VlKGxlYWd1ZSk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnQ3JlYXRlIGxlYWd1ZSBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnQ3JlYXRlIGxlYWd1ZSBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcblxuICB9O1xuXG4gICRzY29wZS5qb2luTGVhZ3VlID0gZnVuY3Rpb24oc2Vhc29uKSB7XG4gICAgJGxvY2F0aW9uLnBhdGgoJy9zZWFzb24vJyArIHNlYXNvbi5pZCArICcvbGVhZ3Vlcy9wdWJsaWMnKTtcbiAgfTtcblxuICAkc2NvcGUudmlld0xlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgICRsb2NhdGlvbi5wYXRoKCcvc2Vhc29uLycgKyBsZWFndWUuc2Vhc29uX2lkICsgJy9sZWFndWUvJyArIGxlYWd1ZS5pZCk7XG4gIH07XG5cbiAgJHNjb3BlLnN0YXJ0cyA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgIHZhciBzdGFydHNMYWJlbCA9IChsZWFndWUuc3RhcnRlZCkgPyAnU3RhcnRlZCAnIDogJ1N0YXJ0cyAnO1xuICAgIHJldHVybiBzdGFydHNMYWJlbCArIGxlYWd1ZS5zdGFydF93ZWVrO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJteSBsZWFndWVzIGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcblxufTtcblxuTXlMZWFndWVzQ29udHJvbGxlci4kaW5qZWN0ID0gWydsZWFndWVzJywgJyRzY29wZScsICckbG9nJywgJyRsb2NhdGlvbicsICckbW9kYWwnLCAnbWVzc2FnZU1vZGVsJywgJ3dlZWtTZXJ2aWNlJywgJ2xlYWd1ZVNlcnZpY2UnXTtcbm1vZHVsZS5leHBvcnRzID0gTXlMZWFndWVzQ29udHJvbGxlcjtcblxuIiwidmFyIFZpZXdUZWFtQ29udHJvbGxlciA9IGZ1bmN0aW9uKHRlYW0sIGxlYWd1ZVRlYW1zLCBwaWNrcywgJHNjb3BlLCAkbG9nLCAkbW9kYWwsICRsb2NhdGlvbiwgbWVzc2FnZU1vZGVsLCB1c2VyTW9kZWwsIHVzZXJTZXJ2aWNlLCB0ZWFtU2VydmljZSwgZ2FtZVNlcnZpY2UsIHBpY2tTZXJ2aWNlKSB7XG5cbiAgdmFyIGFjdGl2YXRlID0gZnVuY3Rpb24odGVhbSkge1xuICAgIHRlYW1TZXJ2aWNlLmFjdGl2YXRlVGVhbSh0ZWFtKVxuICAgICAgLnRoZW4oZnVuY3Rpb24oYWN0aXZlKSB7XG4gICAgICAgIHRlYW0uYWN0aXZlID0gYWN0aXZlO1xuICAgICAgfSk7XG4gIH07XG5cbiAgdmFyIGRlYWN0aXZhdGUgPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgdGVhbVNlcnZpY2UuZGVhY3RpdmF0ZVRlYW0odGVhbSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uKGFjdGl2ZSkge1xuICAgICAgICB0ZWFtLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgICAgIH0pO1xuICB9O1xuXG4gICRzY29wZS50ZWFtRGF0YSA9IHRlYW0uZGF0YTtcbiAgJHNjb3BlLmxlYWd1ZVRlYW1zID0gbGVhZ3VlVGVhbXMuZGF0YTtcblxuICAkc2NvcGUucGlja3MgPSBwaWNrcy5kYXRhO1xuXG4gICRzY29wZS50ZWFtRHJvcGRvd24gPSB7XG4gICAgaXNvcGVuOiBmYWxzZVxuICB9O1xuXG4gICRzY29wZS50b2dnbGVEcm9wZG93biA9IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAkc2NvcGUudGVhbURyb3Bkb3duLmlzb3BlbiA9ICEkc2NvcGUudGVhbURyb3Bkb3duLmlzb3BlbjtcbiAgfTtcblxuICAkc2NvcGUuY29udGFjdENvbW1pc2ggPSBmdW5jdGlvbih0ZWFtKSB7XG5cbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9jb250YWN0L2xlYWd1ZS5jb250YWN0LnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdMZWFndWVDb250YWN0Q29udHJvbGxlcicsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIGxlYWd1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRlYW0ubGVhZ3VlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKHBhcmFtcykge1xuICAgICAgdGVhbVNlcnZpY2Uuc2VuZENvbW1pc2hNZXNzYWdlKHRlYW0sIHBhcmFtcy5tZXNzYWdlKVxuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ0NvbnRhY3QgbGVhZ3VlIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdDb250YWN0IGNvbW1pc2ggY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAkc2NvcGUudXBkYXRlTWVzc2FnZSA9IGZ1bmN0aW9uKHRlYW0pIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvdGVhbS9tZXNzYWdlL3RlYW0ubWVzc2FnZS50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnVGVhbU1lc3NhZ2VDb250cm9sbGVyJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgdGVhbTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRlYW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgICB0ZWFtU2VydmljZS51cGRhdGVUZWFtTWVzc2FnZShwYXJhbXMudGVhbSwgcGFyYW1zLnNlbmRFbWFpbClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgICRzY29wZS50ZWFtRGF0YS5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgfSk7XG5cbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAkbG9nLmRlYnVnKCdUZWFtIG1lc3NhZ2UgbW9kYWwgZGlzbWlzc2VkLi4uJyk7XG4gICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ1VwZGF0ZSB0ZWFtIG1lc3NhZ2UgY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAkc2NvcGUuY29uZmlybUFjdGl2YXRlID0gZnVuY3Rpb24odGVhbSkge1xuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9jb25maXJtL2NvbmZpcm0udHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0NvbmZpcm1Db250cm9sbGVyJyxcbiAgICAgIHNpemU6ICdzbScsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIG1lc3NhZ2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiAnUmVhY3RpdmF0ZSAnICsgdGVhbS5uYW1lICsgJz8nO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbigpIHtcbiAgICAgIGFjdGl2YXRlKHRlYW0pO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ0FjdGl2YXRlIHRlYW0gY2FuY2VsbGVkLi4uJyk7XG4gICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ1RlYW0gcmVhY3RpdmF0aW9uIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgIH0pO1xuICB9O1xuXG4gICRzY29wZS5jb25maXJtRGVhY3RpdmF0ZSA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvY29uZmlybS9jb25maXJtLnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdDb25maXJtQ29udHJvbGxlcicsXG4gICAgICBzaXplOiAnc20nLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICBtZXNzYWdlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gJ0RlYWN0aXZhdGUgJyArIHRlYW0ubmFtZSArICc/JztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICBkZWFjdGl2YXRlKHRlYW0pO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ0RlYWN0aXZhdGUgdGVhbSBjYW5jZWxsZWQuLi4nKTtcbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnVGVhbSBkZWFjdGl2YXRpb24gY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgJHNjb3BlLnBhaWQgPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgdGVhbVNlcnZpY2UucGFpZFRlYW0odGVhbSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHBhaWQpIHtcbiAgICAgICAgdGVhbS5wYWlkID0gcGFpZDtcbiAgICAgIH0pO1xuICB9O1xuXG4gICRzY29wZS51bnBhaWQgPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgdGVhbVNlcnZpY2UudW5wYWlkVGVhbSh0ZWFtKVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocGFpZCkge1xuICAgICAgICB0ZWFtLnBhaWQgPSBwYWlkO1xuICAgICAgfSk7XG4gIH07XG5cbiAgJHNjb3BlLmhhc05vUGljayA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICByZXR1cm4gdGVhbS5sYXN0X3BpY2tfc3F1YWQubmFtZSA9PSAnTm8gUGljayc7XG4gIH07XG5cbiAgJHNjb3BlLmlzQ29tbWlzaCA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICByZXR1cm4gdGVhbS5jb21taXNoX2lkcy5pbmRleE9mKHVzZXJNb2RlbC51c2VyLmlkKSA+IC0xO1xuICB9O1xuXG4gICRzY29wZS5pc0NvYWNoID0gZnVuY3Rpb24odGVhbSkge1xuICAgIHJldHVybiB0ZWFtLmNvYWNoX2lkcy5pbmRleE9mKHVzZXJNb2RlbC51c2VyLmlkKSA+IC0xO1xuICB9O1xuXG4gICRzY29wZS5pc0FkbWluID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHVzZXJNb2RlbC51c2VyLmFkbWluO1xuICB9O1xuXG4gICRzY29wZS5zaG93VGVhbSA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICB2YXIgdGVhbVBhdGggPSAkbG9jYXRpb24ucGF0aCgpLnJlcGxhY2UoL1teXFwvXSokLywgdGVhbS5pZCk7XG4gICAgJGxvY2F0aW9uLnBhdGgodGVhbVBhdGgpO1xuICB9O1xuXG4gICRzY29wZS5zaG93TGVhZ3VlID0gZnVuY3Rpb24odGVhbSkge1xuICAgICRsb2NhdGlvbi5wYXRoKCcvc2Vhc29uLycgKyB0ZWFtLmxlYWd1ZS5zZWFzb25faWQgKyAnL2xlYWd1ZS8nICsgdGVhbS5sZWFndWUuaWQpO1xuICB9O1xuXG4gICRzY29wZS5lZGl0VGVhbSA9IGZ1bmN0aW9uKHRlYW0pIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvdGVhbS9lZGl0L3RlYW0uZWRpdC50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnRWRpdFRlYW1Db250cm9sbGVyJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgdGVhbTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRlYW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24odGVhbSkge1xuICAgICAgdGVhbVNlcnZpY2UudXBkYXRlVGVhbSh0ZWFtKVxuICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAkc2NvcGUudGVhbURhdGEgPSB0ZWFtO1xuICAgICAgICB9KTtcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAkbG9nLmRlYnVnKCdFZGl0IHRlYW0gbW9kYWwgZGlzbWlzc2VkLi4uJyk7XG4gICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ0VkaXQgdGVhbSBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcblxuICB9O1xuXG4gICRzY29wZS5tYWtlUGljayA9IGZ1bmN0aW9uKHRlYW0sIHBpY2spIHtcblxuICAgIGlmICghJHNjb3BlLmlzQ29hY2godGVhbSkgfHwgKHBpY2sgJiYgcGljay5sb2NrZWQpKSByZXR1cm47XG5cbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL3BpY2svbWFrZS9waWNrLm1ha2UudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ1BpY2tNYWtlQ29udHJvbGxlcicsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIHBpY2tzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gJHNjb3BlLnBpY2tzO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW50R2FtZXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBnYW1lU2VydmljZS5nZXRDdXJyZW50R2FtZXModGVhbS5sZWFndWUuaWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKHBpY2spIHtcbiAgICAgIHBpY2sudGVhbV9pZCA9ICRzY29wZS50ZWFtRGF0YS5pZDtcbiAgICAgIHBpY2tTZXJ2aWNlLmNyZWF0ZVBpY2socGljayk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnTWFrZSBwaWNrIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdQaWNrIGxvc2VyIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgIH0pO1xuXG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcInZpZXcgdGVhbSBjb250cm9sbGVyXCIpO1xuICB9O1xuICBpbml0KCk7XG5cbn07XG5cblZpZXdUZWFtQ29udHJvbGxlci4kaW5qZWN0ID0gWyd0ZWFtJywgJ2xlYWd1ZVRlYW1zJywgJ3BpY2tzJywgJyRzY29wZScsICckbG9nJywgJyRtb2RhbCcsICckbG9jYXRpb24nLCAnbWVzc2FnZU1vZGVsJywgJ3VzZXJNb2RlbCcsICd1c2VyU2VydmljZScsICd0ZWFtU2VydmljZScsICdnYW1lU2VydmljZScsICdwaWNrU2VydmljZSddO1xubW9kdWxlLmV4cG9ydHMgPSBWaWV3VGVhbUNvbnRyb2xsZXI7XG4iLCJ2YXIgRWRpdFRlYW1Db250cm9sbGVyID0gZnVuY3Rpb24odGVhbSwgJHNjb3BlLCAkbG9nLCAkbW9kYWxJbnN0YW5jZSkge1xuXG4gICAgJHNjb3BlLnRlYW1EYXRhID0gYW5ndWxhci5jb3B5KHRlYW0pO1xuXG4gICAgJHNjb3BlLmVkaXRUZWFtID0gZnVuY3Rpb24odGVhbSkge1xuICAgICAgdGVhbS5uYW1lID0gdGVhbS5uYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZSh0ZWFtKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gICAgfTtcblxuICAgICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kZXJyb3JbcHJvcGVydHldO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcImVkaXQgdGVhbSBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5FZGl0VGVhbUNvbnRyb2xsZXIuJGluamVjdCA9IFsndGVhbScsICckc2NvcGUnLCAnJGxvZycsICckbW9kYWxJbnN0YW5jZSddO1xubW9kdWxlLmV4cG9ydHMgPSBFZGl0VGVhbUNvbnRyb2xsZXI7XG4iLCJ2YXIgRGVhZFRlYW1zQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJGxvZywgZGVhZFRlYW1zKSB7XG5cbiAgICAkc2NvcGUuZGVhZFRlYW1zID0gZGVhZFRlYW1zLmRhdGE7XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcImRlYWQgdGVhbXMgY29udHJvbGxlclwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcblxufTtcblxuRGVhZFRlYW1zQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZycsICdkZWFkVGVhbXMnXTtcbm1vZHVsZS5leHBvcnRzID0gRGVhZFRlYW1zQ29udHJvbGxlcjtcbiIsInZhciBUZWFtTWVzc2FnZUNvbnRyb2xsZXIgPSBmdW5jdGlvbih0ZWFtLCAkbW9kYWxJbnN0YW5jZSwgJHNjb3BlLCAkbG9nKSB7XG5cbiAgJHNjb3BlLnRlYW1EYXRhID0gYW5ndWxhci5jb3B5KHRlYW0pO1xuXG4gICRzY29wZS5tZXNzYWdlT3B0aW9ucyA9IHsgc2VuZEVtYWlsOiBmYWxzZSB9O1xuXG4gICRzY29wZS51cGRhdGVNZXNzYWdlID0gZnVuY3Rpb24odGVhbSwgc2VuZEVtYWlsKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuY2xvc2UoeyB0ZWFtOiB0ZWFtLCBzZW5kRW1haWw6IHNlbmRFbWFpbH0pO1xuICB9O1xuXG4gICRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgfTtcblxuICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICB9O1xuXG4gICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwidGVhbSBtZXNzYWdlIGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cblRlYW1NZXNzYWdlQ29udHJvbGxlci4kaW5qZWN0ID0gWyd0ZWFtJywgJyRtb2RhbEluc3RhbmNlJywgJyRzY29wZScsICckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IFRlYW1NZXNzYWdlQ29udHJvbGxlcjtcbiIsInZhciBBbGl2ZVRlYW1zQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJGxvZywgYWxpdmVUZWFtcykge1xuXG4gICAgJHNjb3BlLmFsaXZlVGVhbXMgPSBhbGl2ZVRlYW1zLmRhdGE7XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcImFsaXZlIHRlYW1zIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cbkFsaXZlVGVhbXNDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJywgJ2FsaXZlVGVhbXMnXTtcbm1vZHVsZS5leHBvcnRzID0gQWxpdmVUZWFtc0NvbnRyb2xsZXI7XG4iLCJ2YXIgUGxheUxlYWd1ZXNDb250cm9sbGVyID0gZnVuY3Rpb24obGVhZ3VlcywgJHNjb3BlLCAkbG9nLCAkbG9jYXRpb24sICRtb2RhbCwgdXNlck1vZGVsLCBtZXNzYWdlTW9kZWwsIHdlZWtTZXJ2aWNlLCBsZWFndWVTZXJ2aWNlKSB7XG5cbiAgJHNjb3BlLmxlYWd1ZXMgPSBsZWFndWVzLmRhdGE7XG5cbiAgLy8gcGFnaW5hdGlvblxuICAkc2NvcGUuY3VycmVudExlYWd1ZVBhZ2UgPSAxO1xuICAkc2NvcGUubGVhZ3Vlc1BlclBhZ2UgPSAxMDA7XG5cbiAgJHNjb3BlLmNyZWF0ZUxlYWd1ZSA9IGZ1bmN0aW9uKHNlYXNvbikge1xuXG4gICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbmV3L2xlYWd1ZS5uZXcudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ05ld0xlYWd1ZUNvbnRyb2xsZXInLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICB3ZWVrczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHdlZWtTZXJ2aWNlLmdldEF2YWlsYWJsZVdlZWtzKHNlYXNvbi5pZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihsZWFndWUpIHtcbiAgICAgIGxlYWd1ZVNlcnZpY2UuY3JlYXRlTGVhZ3VlKGxlYWd1ZSk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnQ3JlYXRlIGxlYWd1ZSBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnQ3JlYXRlIGxlYWd1ZSBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcblxuICB9O1xuXG4gICRzY29wZS5qb2luTGVhZ3VlID0gZnVuY3Rpb24oc2Vhc29uKSB7XG4gICAgJGxvY2F0aW9uLnBhdGgoJy9zZWFzb24vJyArIHNlYXNvbi5pZCArICcvbGVhZ3Vlcy9wdWJsaWMnKTtcbiAgfTtcblxuICAkc2NvcGUudmlld0xlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgICRsb2NhdGlvbi5wYXRoKCcvc2Vhc29uLycgKyBsZWFndWUuc2Vhc29uX2lkICsgJy9sZWFndWUvJyArIGxlYWd1ZS5pZCk7XG4gIH07XG5cbiAgJHNjb3BlLnN0YXJ0cyA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgIHZhciBzdGFydHNMYWJlbCA9IChsZWFndWUuc3RhcnRlZCkgPyAnU3RhcnRlZCAnIDogJ1N0YXJ0cyAnO1xuICAgIHJldHVybiBzdGFydHNMYWJlbCArIGxlYWd1ZS5zdGFydF93ZWVrO1xuICB9O1xuXG4gICRzY29wZS5pc0NvbW1pc2ggPSBmdW5jdGlvbihsZWFndWUpIHtcbiAgICByZXR1cm4gbGVhZ3VlLmNvbW1pc2hfaWRzLmluZGV4T2YodXNlck1vZGVsLnVzZXIuaWQpID4gLTE7XG4gIH07XG5cbiAgJHNjb3BlLnNlYXJjaCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICBpZiAoaXRlbS5uYW1lLmluZGV4T2YoJHNjb3BlLnF1ZXJ5LnRvTG93ZXJDYXNlKCkpICE9IC0xIHx8IGl0ZW0uY29tbWlzaF9uYW1lcy5qb2luKCcsICcpLmluZGV4T2YoJHNjb3BlLnF1ZXJ5LnRvTG93ZXJDYXNlKCkpICE9IC0xKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJteSBsZWFndWVzIGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcblxufTtcblxuUGxheUxlYWd1ZXNDb250cm9sbGVyLiRpbmplY3QgPSBbJ2xlYWd1ZXMnLCAnJHNjb3BlJywgJyRsb2cnLCAnJGxvY2F0aW9uJywgJyRtb2RhbCcsICd1c2VyTW9kZWwnLCAnbWVzc2FnZU1vZGVsJywgJ3dlZWtTZXJ2aWNlJywgJ2xlYWd1ZVNlcnZpY2UnXTtcbm1vZHVsZS5leHBvcnRzID0gUGxheUxlYWd1ZXNDb250cm9sbGVyO1xuXG4iLCJ2YXIgUGxheVRlYW1zQ29udHJvbGxlciA9IGZ1bmN0aW9uKHRlYW1zLCAkc2NvcGUsICRsb2csICRzdGF0ZVBhcmFtcywgJGxvY2F0aW9uKSB7XG5cbiAgJHNjb3BlLnRlYW1zID0gdGVhbXMuZGF0YTtcblxuICAvLyBwYWdpbmF0aW9uXG4gICRzY29wZS5jdXJyZW50VGVhbVBhZ2UgPSAxO1xuICAkc2NvcGUudGVhbXNQZXJQYWdlID0gMTAwO1xuXG4gICRzY29wZS5zaG93VGVhbSA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgJHN0YXRlUGFyYW1zLnNlYXNvbklkICsgJy9sZWFndWUvJyArIHRlYW0ubGVhZ3VlLmlkICsgJy90ZWFtLycgKyB0ZWFtLmlkKTtcbiAgfTtcblxuICAkc2NvcGUuaGFzTm9QaWNrID0gZnVuY3Rpb24odGVhbSkge1xuICAgIHJldHVybiB0ZWFtLmxhc3RfcGlja19zcXVhZC5uYW1lID09ICdObyBQaWNrJztcbiAgfTtcblxuICAkc2NvcGUuc2VhcmNoID0gZnVuY3Rpb24oaXRlbSkge1xuICAgIGlmIChpdGVtLm5hbWUuaW5kZXhPZigkc2NvcGUucXVlcnkudG9Mb3dlckNhc2UoKSkgIT0gLTEgfHwgaXRlbS5sZWFndWUubmFtZS5pbmRleE9mKCRzY29wZS5xdWVyeS50b0xvd2VyQ2FzZSgpKSAhPSAtMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwicGxheSB0ZWFtcyBjb250cm9sbGVyXCIpO1xuICB9O1xuICBpbml0KCk7XG5cbn07XG5cblBsYXlUZWFtc0NvbnRyb2xsZXIuJGluamVjdCA9IFsndGVhbXMnLCAnJHNjb3BlJywgJyRsb2cnLCAnJHN0YXRlUGFyYW1zJywgJyRsb2NhdGlvbiddO1xubW9kdWxlLmV4cG9ydHMgPSBQbGF5VGVhbXNDb250cm9sbGVyO1xuIiwidmFyIFBpY2tNYWtlQ29udHJvbGxlciA9IGZ1bmN0aW9uKHBpY2tzLCBjdXJyZW50R2FtZXMsICRtb2RhbEluc3RhbmNlLCAkc2NvcGUsICRsb2cpIHtcblxuICB2YXIgcGlja3MgPSBwaWNrcztcblxuICAkc2NvcGUuZ2FtZXMgPSBjdXJyZW50R2FtZXMuZGF0YTtcblxuICAkc2NvcGUuZ2V0U2NvcmUgPSBmdW5jdGlvbihnYW1lLCBpbmRleCkge1xuICAgIC8vIHdhcm5pbmc6IG1hZ2ljIG51bWJlcnMgYWhlYWRcbiAgICB2YXIgc2NvcmUgPSAoaW5kZXggPT09IDApID8gZ2FtZS52aXNpdGluZ19zcXVhZF9zY29yZSA6IGdhbWUuaG9tZV9zcXVhZF9zY29yZTtcbiAgICByZXR1cm4gc2NvcmU7XG4gIH07XG5cbiAgJHNjb3BlLm1ha2VQaWNrID0gZnVuY3Rpb24oZ2FtZSwgc3F1YWQpIHtcbiAgICBpZiAoZ2FtZS5zdGFydGVkIHx8ICRzY29wZS5oYXNTcXVhZEJlZW5Vc2VkKGdhbWUsIHNxdWFkKSkgcmV0dXJuO1xuICAgIHZhciBwaWNrID0ge1xuICAgICAgd2Vla19pZDogZ2FtZS53ZWVrX2lkLFxuICAgICAgd2Vla190eXBlX2lkOiBnYW1lLndlZWtfdHlwZV9pZCxcbiAgICAgIGdhbWVfaWQ6IGdhbWUuaWQsXG4gICAgICB0ZWFtX2lkOiAnJyxcbiAgICAgIHNxdWFkX2lkOiBzcXVhZC5pZFxuICAgIH07XG4gICAgJG1vZGFsSW5zdGFuY2UuY2xvc2UocGljayk7XG4gIH07XG5cbiAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgfTtcblxuICAkc2NvcGUuc3RhcnRzID0gZnVuY3Rpb24oZ2FtZSkge1xuICAgIHZhciBzdGFydHNMYWJlbCA9IChnYW1lLnN0YXJ0ZWQpID8gJ1N0YXJ0ZWQgJyA6ICdTdGFydHMgJztcbiAgICByZXR1cm4gc3RhcnRzTGFiZWwgKyBnYW1lLnN0YXJ0X2Rpc3BsYXk7XG4gIH07XG5cbiAgJHNjb3BlLmhhc1NxdWFkQmVlblVzZWQgPSBmdW5jdGlvbihnYW1lLCBzcXVhZCkge1xuICAgIHZhciBzcXVhZEhhc0JlZW5Vc2VkID0gZmFsc2U7XG4gICAgXy5lYWNoKHBpY2tzLCBmdW5jdGlvbihwaWNrKSB7XG4gICAgICBpZiAocGljay5zcXVhZC5pZCA9PSBzcXVhZC5pZCAmJiBwaWNrLndlZWtfdHlwZV9pZCA9PSBnYW1lLndlZWtfdHlwZV9pZCkge1xuICAgICAgICBzcXVhZEhhc0JlZW5Vc2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc3F1YWRIYXNCZWVuVXNlZDtcbiAgfTtcblxuICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICB9O1xuXG4gICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwibWFrZSBwaWNrIGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cblBpY2tNYWtlQ29udHJvbGxlci4kaW5qZWN0ID0gWydwaWNrcycsICdjdXJyZW50R2FtZXMnLCAnJG1vZGFsSW5zdGFuY2UnLCAnJHNjb3BlJywgJyRsb2cnXTtcbm1vZHVsZS5leHBvcnRzID0gUGlja01ha2VDb250cm9sbGVyO1xuIiwidmFyIEFkbWluR2FtZXNDb250cm9sbGVyID0gZnVuY3Rpb24od2VlaywgZ2FtZXMsICRzY29wZSwgJGxvZywgJG1vZGFsLCBnYW1lU2VydmljZSwgd2Vla1NlcnZpY2UsIG1lc3NhZ2VNb2RlbCkge1xuXG4gIHZhciBjb21wbGV0ZVdlZWsgPSBmdW5jdGlvbih3ZWVrKSB7XG4gICAgd2Vla1NlcnZpY2UuY29tcGxldGVXZWVrKHdlZWspXG4gICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgJHNjb3BlLndlZWtEYXRhLmNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgIH0pO1xuICB9O1xuXG4gICRzY29wZS53ZWVrRGF0YSA9IHdlZWsuZGF0YTtcblxuICAkc2NvcGUuZ2FtZXMgPSBnYW1lcy5kYXRhO1xuXG4gICRzY29wZS5lZGl0R2FtZSA9IGZ1bmN0aW9uKGdhbWUpIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvYWRtaW4vZ2FtZXMvZWRpdC9nYW1lcy5lZGl0LnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdHYW1lc0VkaXRDb250cm9sbGVyJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgZ2FtZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGdhbWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihnYW1lKSB7XG4gICAgICBnYW1lU2VydmljZS51cGRhdGVHYW1lKGdhbWUpO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ0dhbWUgdXBkYXRlIGNhbmNlbGxlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdHYW1lIHVwZGF0ZSBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcblxuICB9O1xuXG4gICRzY29wZS5zZW5kUmVtaW5kZXIgPSBmdW5jdGlvbih3ZWVrKSB7XG4gICAgd2Vla1NlcnZpY2Uuc2VuZFJlbWluZGVyKHdlZWspO1xuICB9O1xuXG4gICRzY29wZS5jb25maXJtV2Vla0NvbXBsZXRlID0gZnVuY3Rpb24od2Vlaykge1xuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9jb25maXJtL2NvbmZpcm0udHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0NvbmZpcm1Db250cm9sbGVyJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgbWVzc2FnZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gbWFyayB0aGlzIHdlZWsgYXMgY29tcGxldGU/JztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICBjb21wbGV0ZVdlZWsod2Vlayk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnQ29tcGxldGUgd2VlayBjYW5jZWxsZWQuLi4nKTtcbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnV2VlayBjb21wbGV0ZSBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuQWRtaW5HYW1lc0NvbnRyb2xsZXIuJGluamVjdCA9IFsnd2VlaycsICdnYW1lcycsICckc2NvcGUnLCAnJGxvZycsICckbW9kYWwnLCAnZ2FtZVNlcnZpY2UnLCAnd2Vla1NlcnZpY2UnLCAnbWVzc2FnZU1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IEFkbWluR2FtZXNDb250cm9sbGVyO1xuIiwidmFyIHJjVmVyaWZ5U2V0RGlyZWN0aXZlID0ge1xuICAncmNWZXJpZnlTZXQnOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICByZXF1aXJlOiBbJ15yY1N1Ym1pdCcsICduZ01vZGVsJ10sXG4gICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJpYnV0ZXMsIGNvbnRyb2xsZXJzKSB7XG4gICAgICAgIHZhciBzdWJtaXRDb250cm9sbGVyID0gY29udHJvbGxlcnNbMF07XG4gICAgICAgIHZhciBtb2RlbENvbnRyb2xsZXIgPSBjb250cm9sbGVyc1sxXTtcblxuICAgICAgICBzdWJtaXRDb250cm9sbGVyLm9uQXR0ZW1wdChmdW5jdGlvbigpIHtcbiAgICAgICAgICBtb2RlbENvbnRyb2xsZXIuJHNldFZpZXdWYWx1ZShlbGVtZW50LnZhbCgpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufTsiLCIvKiBhdHRyaWJ1dGUgd2lsbCBlbmZvcmNlIGEgcmVnIGV4IHBhdHRlcm4gaWYgdGhlIGZpZWxkIGlzIG1hcmtlZCBhcyBuZy1yZXF1aXJlZCAqL1xudmFyIFJlcXVpcmVkUGF0dGVybkRpcmVjdGl2ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiBcIkFcIixcbiAgICAgICAgcmVxdWlyZTogXCJuZ01vZGVsXCIsXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbCwgYXR0cnMsIG5nTW9kZWwpIHtcbiAgICAgICAgICAgIHZhciB2YWxpZGF0b3IsIHBhdHRlcm5WYWxpZGF0b3IsXG4gICAgICAgICAgICAgICAgcGF0dGVybiA9IGF0dHJzLnJwYXR0ZXJuLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYoIHBhdHRlcm4gKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhdHRlcm4ubWF0Y2goL15cXC8oLiopXFwvJC8pKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gPSBuZXcgUmVnRXhwKHBhdHRlcm4uc3Vic3RyKDEsIHBhdHRlcm4ubGVuZ3RoIC0gMikpO1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuVmFsaWRhdG9yID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0ZShwYXR0ZXJuLCB2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm5WYWxpZGF0b3IgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhdHRlcm5PYmogPSBzY29wZS4kZXZhbChwYXR0ZXJuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcGF0dGVybk9iaiB8fCAhcGF0dGVybk9iai50ZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCAnICsgcGF0dGVybiArICcgdG8gYmUgYSBSZWdFeHAgYnV0IHdhcyAnICsgcGF0dGVybk9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdGUocGF0dGVybk9iaiwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmdNb2RlbC4kZm9ybWF0dGVycy5wdXNoKHBhdHRlcm5WYWxpZGF0b3IpO1xuICAgICAgICAgICAgbmdNb2RlbC4kcGFyc2Vycy5wdXNoKHBhdHRlcm5WYWxpZGF0b3IpO1xuXG4gICAgICAgICAgICBhdHRycy4kb2JzZXJ2ZShcInJlcXVpcmVkXCIsIGZ1bmN0aW9uKG5ld3ZhbCkge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkID0gbmV3dmFsO1xuICAgICAgICAgICAgICAgIHBhdHRlcm5WYWxpZGF0b3IobmdNb2RlbC4kdmlld1ZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZShyZWdleHAsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYoIHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09IFwiXCIgfHwgIXJlcXVpcmVkIHx8IHJlZ2V4cC50ZXN0KHZhbHVlKSApIHtcbiAgICAgICAgICAgICAgICAgICAgbmdNb2RlbC4kc2V0VmFsaWRpdHkoJ3BhdHRlcm4nLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmdNb2RlbC4kc2V0VmFsaWRpdHkoJ3BhdHRlcm4nLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlcXVpcmVkUGF0dGVybkRpcmVjdGl2ZTsiLCJcbnZhciBQdWJsaWNMZWFndWVzQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJGxvZywgJGxvY2F0aW9uLCBwdWJsaWNMZWFndWVzKSB7XG5cbiAgICAkc2NvcGUucHVibGljTGVhZ3VlcyA9IHB1YmxpY0xlYWd1ZXMuZGF0YTtcblxuICAgICRzY29wZS5zaG93TGVhZ3VlID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgbGVhZ3VlLnNlYXNvbl9pZCArICcvbGVhZ3VlLycgKyBsZWFndWUuaWQpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcInB1YmxpYyBsZWFndWVzIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cblB1YmxpY0xlYWd1ZXNDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJywgJyRsb2NhdGlvbicsICdwdWJsaWNMZWFndWVzJ107XG5tb2R1bGUuZXhwb3J0cyA9IFB1YmxpY0xlYWd1ZXNDb250cm9sbGVyO1xuXG4iLCJ2YXIgUHJpdmF0ZUxlYWd1ZXNDb250cm9sbGVyID0gZnVuY3Rpb24ocHJpdmF0ZUxlYWd1ZXMsICRzY29wZSwgJGxvZywgJGxvY2F0aW9uKSB7XG5cbiAgICAkc2NvcGUucHJpdmF0ZUxlYWd1ZXMgPSBwcml2YXRlTGVhZ3Vlcy5kYXRhO1xuXG4gICAgJHNjb3BlLnNob3dMZWFndWUgPSBmdW5jdGlvbihsZWFndWUpIHtcbiAgICAgICRsb2NhdGlvbi5wYXRoKCcvc2Vhc29uLycgKyBsZWFndWUuc2Vhc29uX2lkICsgJy9sZWFndWUvJyArIGxlYWd1ZS5pZCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKFwicHJpdmF0ZSBsZWFndWVzIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cblByaXZhdGVMZWFndWVzQ29udHJvbGxlci4kaW5qZWN0ID0gWydwcml2YXRlTGVhZ3VlcycsICckc2NvcGUnLCAnJGxvZycsICckbG9jYXRpb24nXTtcbm1vZHVsZS5leHBvcnRzID0gUHJpdmF0ZUxlYWd1ZXNDb250cm9sbGVyO1xuXG4iLCJ2YXIgTGVhZ3VlSW52aXRlUmVxdWVzdENvbnRyb2xsZXIgPSBmdW5jdGlvbihsZWFndWVJZCwgJG1vZGFsSW5zdGFuY2UsICRzY29wZSwgJGxvZywgdXNlck1vZGVsKSB7XG5cbiAgJHNjb3BlLmludml0YXRpb24gPSB7XG4gICAgbGVhZ3VlX2lkOiBsZWFndWVJZCxcbiAgICBlbWFpbDogdXNlck1vZGVsLnVzZXIuZW1haWwsXG4gICAgbWVzc2FnZTogXCJcIlxuICB9O1xuXG4gICRzY29wZS5yZXF1ZXN0SW52aXRlID0gZnVuY3Rpb24gKGludml0YXRpb24pIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZShpbnZpdGF0aW9uKTtcbiAgfTtcblxuICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICB9O1xuXG4gICRzY29wZS5oYXNFcnJvciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gIH07XG5cbiAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kZXJyb3JbcHJvcGVydHldO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJsZWFndWUgaW52aXRlIHJlcXVlc3QgY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuTGVhZ3VlSW52aXRlUmVxdWVzdENvbnRyb2xsZXIuJGluamVjdCA9IFsnbGVhZ3VlSWQnLCAnJG1vZGFsSW5zdGFuY2UnLCAnJHNjb3BlJywgJyRsb2cnLCAndXNlck1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IExlYWd1ZUludml0ZVJlcXVlc3RDb250cm9sbGVyO1xuIiwidmFyIEdhbWVzRWRpdENvbnRyb2xsZXIgPSBmdW5jdGlvbihnYW1lLCAkc2NvcGUsICRtb2RhbEluc3RhbmNlKSB7XG5cbiAgJHNjb3BlLmdhbWVEYXRhID0gYW5ndWxhci5jb3B5KGdhbWUpO1xuXG4gICRzY29wZS5lZGl0R2FtZSA9IGZ1bmN0aW9uKGdhbWUpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZShnYW1lKTtcbiAgfTtcblxuICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICB9O1xuICBpbml0KCk7XG59O1xuXG5HYW1lc0VkaXRDb250cm9sbGVyLiRpbmplY3QgPSBbJ2dhbWUnLCAnJHNjb3BlJywgJyRtb2RhbEluc3RhbmNlJ107XG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVzRWRpdENvbnRyb2xsZXI7XG4iXX0=
;