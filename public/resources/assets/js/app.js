require=(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({"app-templates":[function(require,module,exports){
module.exports=require('0VoVTq');
},{}],"0VoVTq":[function(require,module,exports){
angular.module('app.templates', ['common/modules/footer/footer.tpl.html', 'common/modules/header/header.tpl.html', 'common/modules/message/message.tpl.html', 'common/templates/master.tpl.html', 'modules/private/admin/admin.tpl.html', 'modules/private/admin/games/admin.games.tpl.html', 'modules/private/admin/games/edit/games.edit.tpl.html', 'modules/private/league/contact/league.contact.tpl.html', 'modules/private/league/edit/league.edit.tpl.html', 'modules/private/league/invite/league.invite.tpl.html', 'modules/private/league/invite/request/league.invite.request.tpl.html', 'modules/private/league/join/league.join.tpl.html', 'modules/private/league/league.tpl.html', 'modules/private/league/message/league.message.tpl.html', 'modules/private/league/new/league.new.tpl.html', 'modules/private/league/view/league.view.tpl.html', 'modules/private/leagues/join/leagues.join.tpl.html', 'modules/private/leagues/join/private/leagues.join.private.tpl.html', 'modules/private/leagues/join/public/leagues.join.public.tpl.html', 'modules/private/leagues/leagues.tpl.html', 'modules/private/leagues/manage/leagues.manage.tpl.html', 'modules/private/leagues/my/leagues.my.tpl.html', 'modules/private/pick/make/pick.make.tpl.html', 'modules/private/play/leagues/play.leagues.tpl.html', 'modules/private/play/play.tpl.html', 'modules/private/play/teams/play.teams.tpl.html', 'modules/private/team/edit/team.edit.tpl.html', 'modules/private/team/message/team.message.tpl.html', 'modules/private/team/team.tpl.html', 'modules/private/team/view/team.view.tpl.html', 'modules/private/teams/alive/teams.alive.tpl.html', 'modules/private/teams/dead/teams.dead.tpl.html', 'modules/private/teams/teams.tpl.html', 'modules/private/user/reset/user.reset.tpl.html', 'modules/private/user/user.tpl.html', 'modules/public/abuse/abuse.tpl.html', 'modules/public/faq/faq.tpl.html', 'modules/public/home/home.tpl.html', 'modules/public/register/register.tpl.html', 'modules/public/register/terms/register.terms.tpl.html', 'modules/public/signin/signin.tpl.html']);

angular.module("common/modules/footer/footer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/modules/footer/footer.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-sm-8 col-md-8\">\n" +
    "      <div class=\"links\">\n" +
    "        <a ng-click=\"play(season)\">My Teams & Leagues</a>\n" +
    "        &nbsp;|&nbsp;\n" +
    "        <a ng-click=\"joinLeague(season)\">Join League</a>\n" +
    "        &nbsp;|&nbsp;\n" +
    "        <a ng-click=\"createLeague(season)\">Create League</a>\n" +
    "        <br>\n" +
    "        <span style=\"text-transform: none;\">© 2014 Flexdevelopers.com LLC</span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-4 col-md-4\">\n" +
    "      <!--<div class=\"links\" style=\"float: right;\">-->\n" +
    "        <!--<a href=\"https://www.facebook.com/loseorgohome\" target=\"_blank\"><i class=\"fa fa-facebook-square fa-fw\" title=\"Facebook\"></i></a>-->\n" +
    "        <!--<a href=\"https://twitter.com/loseorgohome\" target=\"_blank\"><i class=\"fa fa-twitter fa-fw\" title=\"Twitter\"></i></a>-->\n" +
    "      <!--</div>-->\n" +
    "    </div>\n" +
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
    "    <a class=\"navbar-brand\" ng-click=\"home()\">LoseOrGoHome.com</a>\n" +
    "  </div>\n" +
    "  <div collapse=\"isCollapsed\" class=\"navbar-collapse\">\n" +
    "    <ul ng-show=\"userData.user.loaded\" class=\"nav navbar-nav navbar-right\">\n" +
    "      <li ng-class=\"{'active': isState(['private.play.teams', 'private.play.leagues'])}\"><a ng-click=\"play(season)\">My Teams & Leagues</a></li>\n" +
    "      <li ng-class=\"{'active': isState(['private.leagues.join.public', 'private.leagues.join.private'])}\"><a ng-click=\"joinLeague(season)\">Join League</a></li>\n" +
    "      <li><a ng-click=\"createLeague(season)\">Create League</a></li>\n" +
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
    "            <form name=\"inlineSigninForm\" role=\"form\" ng-submit=\"signin(credentials); $event.stopPropagation();\" novalidate>\n" +
    "              <div class=\"form-group\">\n" +
    "                <div class=\"input-group\">\n" +
    "                  <span class=\"input-group-addon\"><i class=\"fa fa-envelope fa-fw\"></i></span>\n" +
    "                  <input type=\"email\" class=\"form-control\" style=\"cursor:auto;\" placeholder=\"Email\" ng-model=\"credentials.email\" ng-click=\"$event.stopPropagation();\" autofocus required>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                <div class=\"input-group\">\n" +
    "                  <span class=\"input-group-addon\"><i class=\"fa fa-key fa-fw\"></i></span>\n" +
    "                  <input type=\"password\" class=\"form-control\" style=\"cursor:auto;\" placeholder=\"Password\" ng-model=\"credentials.password\" ng-click=\"$event.stopPropagation();\" required>\n" +
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
    "    <button type=\"button\" class=\"complete-week-btn btn btn-primary btn-sm\" ng-click=\"completeWeek(weekData)\">Complete Week</button>\n" +
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
    "  <div class=\"well well-sm\"><strong>Note:</strong> <em>Public leagues allow anyone to join. Private leagues require an invitation from the commish.</em></div>\n" +
    "  <form name=\"leagueForm\" role=\"form\" novalidate>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-6 col-md-6\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"radio-inline\">\n" +
    "            <input type=\"radio\" ng-model=\"leagueData.public\" ng-value=\"true\"> Public League\n" +
    "          </label>\n" +
    "          <label class=\"radio-inline\">\n" +
    "            <input type=\"radio\" ng-model=\"leagueData.public\" ng-value=\"false\"> Private League\n" +
    "          </label>\n" +
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
    "          <textarea id=\"message\" name=\"message\" class=\"form-control\" placeholder=\"Enter a message for you league here...\" rows=\"2\" maxlength=\"200\" ng-model=\"leagueData.message\"></textarea>\n" +
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
    "  <h3 class=\"modal-title\">Invite Friend</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <form name=\"inviteForm\" class=\"invite-form form-horizontal\" role=\"form\" novalidate>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(inviteForm.email), 'has-feedback': hasError(inviteForm.email)}\">\n" +
    "      <label for=\"email\" class=\"col-sm-2 control-label\">Email:</label>\n" +
    "      <div class=\"col-sm-10\">\n" +
    "        <input id=\"email\" name=\"email\" type=\"email\" class=\"form-control\" placeholder=\"Enter email\" ng-model=\"invitation.email\" required>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(inviteForm.email, 'required')\">Required</small>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(inviteForm.email, 'email')\">Invalid email</small>\n" +
    "        <span ng-show=\"hasError(inviteForm.email)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(inviteForm.message), 'has-feedback': hasError(inviteForm.message)}\">\n" +
    "      <label for=\"message\" class=\"col-sm-2 control-label\">Message:</label>\n" +
    "      <div class=\"col-sm-10\">\n" +
    "        <textarea id=\"message\" name=\"message\" class=\"form-control\" placeholder=\"Enter a optional message to deliver with the invitation...\" rows=\"3\" maxlength=\"200\" ng-model=\"invitation.message\"></textarea>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(inviteForm.message, 'maxlength')\">Too Long</small>\n" +
    "        <span ng-show=\"hasError(inviteForm.message)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "  <button class=\"btn btn-primary\" ng-disabled=\"inviteForm.$pristine || inviteForm.$invalid\" ng-click=\"invite(invitation)\">Invite</button>\n" +
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
    "        <textarea id=\"message\" name=\"message\" class=\"form-control\" placeholder=\"Enter a message for your league to see or leave it blank.\" rows=\"3\" ng-maxlength=\"200\" ng-model=\"leagueData.message\"></textarea>\n" +
    "        <div class=\"email-league-message-checkbox\">\n" +
    "          <label><input type=\"checkbox\" ng-model=\"messageOptions.sendEmail\"> email message to league</label>\n" +
    "        </div>\n" +
    "        <span ng-show=\"hasError(messageForm.message)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "  <button class=\"btn btn-primary\" ng-disabled=\"messageForm.$pristine || messageForm.$invalid\" ng-click=\"updateMessage(leagueData, messageOptions.sendEmail)\">Update</button>\n" +
    "</div>");
}]);

angular.module("modules/private/league/new/league.new.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/league/new/league.new.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Create League</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <div class=\"well well-sm\"><strong>Note:</strong> <em>Public leagues allow anyone to join. Private leagues require an invitation from the commish.</em></div>\n" +
    "  <form name=\"newLeagueForm\" role=\"form\" novalidate>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-6 col-md-6\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"radio-inline\">\n" +
    "            <input type=\"radio\" ng-model=\"newLeagueData.public\" ng-checked=\"true\" ng-value=\"true\"> Public League\n" +
    "          </label>\n" +
    "          <label class=\"radio-inline\">\n" +
    "            <input type=\"radio\" ng-model=\"newLeagueData.public\" ng-value=\"false\"> Private League\n" +
    "          </label>\n" +
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
    "          <textarea id=\"message\" name=\"message\" class=\"form-control\" placeholder=\"Enter a message for your league here. You can change it at any time.\" rows=\"2\" maxlength=\"200\" ng-model=\"newLeagueData.message\"></textarea>\n" +
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
    "<div class=\"alert alert-success\" ng-show=\"leagueData.start_week_complete && aliveTeams.length == 0\">Oops. All of the teams are now dead. Check the 'Dead Teams' tab to see the final results.</div>\n" +
    "<div class=\"header-row row\">\n" +
    "  <div class=\"col-sm-7 col-md-7\">\n" +
    "    <h3 class=\"league-name\">\n" +
    "      <i class=\"fa fa-times\" title=\"Closed league\" ng-show=\"!leagueData.open\"></i>\n" +
    "      <i class=\"fa fa-lock\" title=\"Private league\" ng-show=\"leagueData.open && !leagueData.public\"></i>\n" +
    "      <i class=\"fa fa-unlock\" title=\"Public league\" ng-show=\"leagueData.open && leagueData.public\"></i>\n" +
    "      {{leagueData.name}} <small class=\"edit-league\"><a ng-show=\"isCommish(leagueData) && !leagueData.start_week_complete\" ng-click=\"editLeague(leagueData)\">[ edit ]</a></small> <br>\n" +
    "      <small>{{starts(leagueData)}}</small>\n" +
    "      <small class=\"closed-text\" ng-show=\"!leagueData.open\">CLOSED TO NEW TEAMS</small>\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-5 col-md-5\">\n" +
    "    <button type=\"button\" class=\"join-btn btn btn-primary btn-sm\" ng-show=\"!leagueData.start_week_complete\" ng-click=\"joinLeague(leagueData)\">Join</button>\n" +
    "    <button type=\"button\" class=\"invite-btn btn btn-primary btn-sm\" ng-show=\"!leagueData.start_week_complete && (leagueData.public || isCommish(leagueData))\" ng-click=\"invite(leagueData.id)\">Invite</button>\n" +
    "    <button type=\"button\" class=\"request-invite-btn btn btn-primary btn-sm\" ng-show=\"!leagueData.start_week_complete && !leagueData.public && !isCommish(leagueData)\" ng-click=\"requestInvite(leagueData)\">Request Invite</button>\n" +
    "    <div class=\"btn-group league-actions\" ng-show=\"hasTeamInLeague() || isCommish(leagueData)\" dropdown is-open=\"commish.isopen\">\n" +
    "      <button type=\"button\" class=\"league-actions-btn btn btn-default btn-sm dropdown-toggle\">\n" +
    "        <strong>Actions</strong> <span class=\"caret\"></span>\n" +
    "      </button>\n" +
    "      <ul class=\"dropdown-menu league-actions-menu\" role=\"menu\">\n" +
    "        <li ng-show=\"!isCommish(leagueData)\"><a ng-click=\"contactCommish(leagueData)\">Contact the commish</a></li>\n" +
    "        <li><a ng-click=\"reportAbuse()\">Report abuse</a></li>\n" +
    "        <li><a ng-click=\"reportAbuse()\">Report a bug</a></li>\n" +
    "        <li ng-show=\"isCommish(leagueData)\" class=\"divider\"></li>\n" +
    "        <li><a ng-show=\"isCommish(leagueData) && !leagueData.start_week_complete\" ng-click=\"editLeague(leagueData)\">Edit league</a></li>\n" +
    "        <li><a ng-show=\"isCommish(leagueData)\" ng-click=\"updateMessage(leagueData)\">Edit league message</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"league-message well well-sm\" ng-show=\"!leagueData.start_week_complete || hasTeamInLeague() || isCommish(leagueData)\"><i class=\"fa fa-comment fa-fw\" title=\"Message for the league\"></i> <strong>The commish says:</strong> <p class=\"league-message-text\" ng-show=\"!leagueData.message || leagueData.message.length == 0\">Nothing</p><p class=\"league-message-text\" ng-show=\"leagueData.message.length > 0\" ng-bind-html=\"leagueData.message | linky:'_blank'\"></p> <a ng-show=\"isCommish(leagueData)\" ng-click=\"updateMessage(leagueData)\">[ edit ]</a><a ng-show=\"!isCommish(leagueData) && hasTeamInLeague()\" ng-click=\"contactCommish(leagueData)\">[ contact commish ]</a></div>\n" +
    "<hr>\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-sm-7 col-md-7\">\n" +
    "    <h4>Teams ({{leagueData.team_count}}) <small><a ng-show=\"!leagueData.start_week_complete && !isCommish(leagueData)\" ng-click=\"joinLeague(leagueData)\">[ join up to {{leagueData.max_teams_per_user}} times ]</a> <a ng-show=\"isCommish(leagueData) && teamOptions.inactive == true\" ng-click=\"teamOptions.inactive = false\">[ hide deactivated<span class=\"teams\"> teams</span> ]</a><a ng-show=\"isCommish(leagueData) && teamOptions.inactive == false\" ng-click=\"teamOptions.inactive = true\">[ show deactivated<span class=\"teams\"> teams</span> ]</a></small></h4>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-5 col-md-5\">\n" +
    "    <div class=\"input-group custom-search-form\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"Filter by team name or coach...\" ng-model=\"teamQuery\">\n" +
    "      <span class=\"input-group-btn\">\n" +
    "          <button class=\"btn btn-default\" type=\"button\">\n" +
    "            <span class=\"glyphicon glyphicon-search\"></span>\n" +
    "          </button>\n" +
    "      </span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<hr>\n" +
    "<div class=\"league-container\">\n" +
    "  <tabset justified=\"true\">\n" +
    "    <tab select=\"resetSearch()\">\n" +
    "      <tab-heading>\n" +
    "        <i class=\"fa fa-thumbs-up fa-fw\" title=\"Alive teams\"></i> Alive Teams\n" +
    "      </tab-heading>\n" +
    "      <div class=\"alive-teams list-group\">\n" +
    "        <a ng-repeat=\"team in aliveTeams | activeTeamFilter:teamOptions | filter:search:strict | offsetFilter:(currentTeamPage-1)*teamsPerPage | limitTo:teamsPerPage\" ng-click=\"showTeam(team)\" class=\"list-group-item\">\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"league-name col-sm-6 col-md-6 team-name\" ng-class=\"{'inactive': !team.active}\">\n" +
    "              <i class=\"fa fa-times fa-fw\" title=\"Deactivated Team\" ng-show=\"!team.active\"></i>\n" +
    "              <i class=\"fa fa-user fa-fw\" ng-show=\"team.active && isCoach(team)\" title=\"My team\"></i> {{team.name}}<br><span class=\"coach-name\">Coach: {{coachName(team)}}</span></div>\n" +
    "            <div class=\"col-sm-6 col-md-6\">\n" +
    "              <span class=\"current-pick\" ng-class=\"{'no-pick': hasNoPick(team)}\" ng-show=\"team.active\">Current Loser: [ <span class=\"current-loser-name\">{{team.last_pick_squad.name}}</span><span class=\"current-loser-abbrev\">{{team.last_pick_squad.abbrev}}</span> ]</span>\n" +
    "              <span class=\"inactive-team\" ng-show=\"!team.active\">Deactivated by the commish</span>\n" +
    "              <span class=\"badge\">{{team.correct_picks_count}} correct</span>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </a>\n" +
    "      </div>\n" +
    "      <div>\n" +
    "        <div class=\"alert alert-info\" ng-show=\"(aliveTeams | activeTeamFilter:teamOptions | filter:search:strict).length == 0\">\n" +
    "          No teams found\n" +
    "        </div>\n" +
    "        <div class=\"alive-teams-pagination\" ng-show=\"aliveTeams.length > teamsPerPage && (aliveTeams | activeTeamFilter:teamOptions | filter:search:strict).length > 0\">\n" +
    "          <pagination boundary-links=\"true\" max-size=\"4\" total-items=\"(aliveTeams | activeTeamFilter:teamOptions | filter:search:strict).length\" items-per-page=\"teamsPerPage\" ng-model=\"currentTeamPage\" class=\"pagination-md\" previous-text=\"&lsaquo;\" next-text=\"&rsaquo;\" first-text=\"&laquo;\" last-text=\"&raquo;\"></pagination>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div style=\"clear: both;\"></div>\n" +
    "    </tab>\n" +
    "    <tab select=\"resetSearch()\">\n" +
    "      <tab-heading>\n" +
    "        <i class=\"fa fa-thumbs-down fa-fw\" title=\"Dead teams\"></i> Dead Teams\n" +
    "      </tab-heading>\n" +
    "      <div class=\"dead-teams list-group\">\n" +
    "        <a ng-repeat=\"team in deadTeams | activeTeamFilter:teamOptions | filter:search:strict | offsetFilter:(currentTeamPage-1)*teamsPerPage | limitTo:teamsPerPage\" ng-click=\"showTeam(team)\" class=\"list-group-item\">\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"league-name col-sm-4 col-md-4 team-name\" ng-class=\"{'inactive': !team.active}\">\n" +
    "              <i class=\"fa fa-user fa-fw\" ng-show=\"team.active && isCoach(team)\" title=\"My team\"></i>\n" +
    "              <i class=\"fa fa-times fa-fw\" title=\"Deactivated Team\" ng-show=\"!team.active\"></i> {{team.name}}<br><span class=\"coach-name\">Coach: {{coachName(team)}}</span></div>\n" +
    "            <div class=\"col-sm-8 col-md-8\">\n" +
    "              <span class=\"current-pick no-pick\" ng-show=\"team.active\">Last Pick: [ <span class=\"last-pick-name\">{{team.last_pick_squad.name}}</span><span class=\"last-pick-abbrev\">{{team.last_pick_squad.abbrev}}</span> ]</span>\n" +
    "              <span class=\"inactive-team\" ng-show=\"!team.active\">Deactivated by the commish</span>\n" +
    "              <span class=\"badge\">{{team.correct_picks_count}} correct</span>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </a>\n" +
    "      </div>\n" +
    "      <div>\n" +
    "        <div class=\"alert alert-info\" ng-show=\"(deadTeams | activeTeamFilter:teamOptions | filter:search:strict).length == 0\">\n" +
    "          No teams found\n" +
    "        </div>\n" +
    "        <div class=\"dead-teams-pagination\" ng-show=\"deadTeams.length > teamsPerPage && (deadTeams | activeTeamFilter:teamOptions | filter:search:strict).length > 0\">\n" +
    "          <pagination boundary-links=\"true\" max-size=\"4\" total-items=\"(deadTeams | activeTeamFilter:teamOptions | filter:search:strict).length\" items-per-page=\"teamsPerPage\" ng-model=\"currentTeamPage\" class=\"pagination-md\" previous-text=\"&lsaquo;\" next-text=\"&rsaquo;\" first-text=\"&laquo;\" last-text=\"&raquo;\"></pagination>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div style=\"clear: both;\"></div>\n" +
    "    </tab>\n" +
    "  </tabset>\n" +
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
    "      <button type=\"button\" class=\"create-league-btn btn btn-primary btn-sm\" ng-click=\"createLeague(season)\">Create League</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<hr>\n" +
    "<ul class=\"nav nav-tabs nav-justified\">\n" +
    "    <li ng-class=\"{'active': isPublic()}\" ng-click=\"resetSearch()\">\n" +
    "        <a ng-click=\"publicLeagues(seasonId)\"><i class=\"fa fa-unlock fa-fw\" title=\"Public leagues\"></i> Public <span class=\"leagues\">Leagues</span></a>\n" +
    "    </li>\n" +
    "    <li ng-class=\"{'active': !isPublic()}\" ng-click=\"resetSearch()\">\n" +
    "        <a ng-click=\"privateLeagues(seasonId)\"><i class=\"fa fa-lock fa-fw\" title=\"Private leagues\"></i> Private <span class=\"leagues\">Leagues</span></a>\n" +
    "    </li>\n" +
    "</ul>\n" +
    "<div class=\"input-group custom-search-form filter-league-join\">\n" +
    "  <input type=\"text\" class=\"form-control\" placeholder=\"Search by league name or commish...\" ng-model=\"leagueQuery\">\n" +
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
    "        <div class=\"row\">\n" +
    "            <div class=\"league-name col-sm-6 col-md-6\" ng-class=\"{'closed': !league.open}\"><i class=\"fa fa-times fa-fw\" title=\"Closed league\" ng-show=\"!league.open\"></i> {{league.name}} <span class=\"team-count\">Join up to {{league.max_teams_per_user}} times<br>Commish: {{league.commish_names.join(', ')}}</span></div>\n" +
    "            <div class=\"col-sm-6 col-md-6\">\n" +
    "                <span class=\"start-week\">Starts {{league.start_week}}</span>\n" +
    "                <span class=\"badge\">{{league.team_count}} teams</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </a>\n" +
    "</div>\n" +
    "\n" +
    "<!--dynamic pagination-->\n" +
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
    "            <div class=\"league-name col-sm-6 col-md-6\" ng-class=\"{'closed': !league.open}\"><i class=\"fa fa-times fa-fw\" title=\"Closed league\" ng-show=\"!league.open\"></i> {{league.name}} <span class=\"team-count\">Join up to {{league.max_teams_per_user}} times<br>Commish: {{league.commish_names.join(', ')}}</span></div>\n" +
    "            <div class=\"col-sm-6 col-md-6\">\n" +
    "                <span class=\"start-week\">Starts {{league.start_week}}</span>\n" +
    "                <span class=\"badge\">{{league.team_count}} teams</span>\n" +
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
    "      <button type=\"button\" class=\"create-league-btn btn btn-primary btn-sm\" ng-click=\"createLeague(season)\">Create League</button>\n" +
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
    "      <button type=\"button\" class=\"join-league-btn btn btn-primary btn-sm\" ng-click=\"joinLeague(season)\">Join League</button>\n" +
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
    "  <h4 class=\"modal-title\">Pick a Loser <br> {{games[0].week_display}}</h4>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <div class=\"well well-sm\"><strong>Note:</strong> <em>Teams you have already picked are crossed out. Games that have already started are disabled.</em></div>\n" +
    "  <div ng-repeat-start=\"game in games\" class=\"week-games list-group\">\n" +
    "    <h4 ng-class=\"{'invalid-game': game.started}\">{{game.display}} <br> <small>{{starts(game)}}</small></h4>\n" +
    "    <a ng-repeat=\"squad in game.squads\" ng-click=\"makePick(game, squad)\" class=\"list-group-item\" ng-class=\"{'disabled': game.started || hasSquadBeenUsed(game, squad)}\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"squad-name col-sm-6 col-md-6\" ng-class=\"{'invalid-squad': hasSquadBeenUsed(game, squad)}\">{{squad.name}} <span ng-show=\"game.started\">[ {{getScore(game, $index)}} ]</span></div>\n" +
    "        <div class=\"col-sm-6 col-md-6\">\n" +
    "          <span class=\"badge\" ng-show=\"!game.started && !hasSquadBeenUsed(game, squad)\">Pick</span>\n" +
    "        </div>\n" +
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
    "          <i class=\"fa fa-group fa-fw\" title=\"My Public league\" ng-show=\"isCommish(league)\"></i> {{league.name}}<br><span class=\"team-count\">Commish: {{league.commish_names.join(', ')}}</span>\n" +
    "        </div>\n" +
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
    "<div class=\"leagues-alert alert alert-info\" ng-show=\"(leagues | managedLeagueFilter:leagueOptions | filter:search:strict).length == 0\">\n" +
    "  You are in no leagues. <a class=\"alert-link\" ng-click=\"joinLeague(season)\">Join a league</a> or <a class=\"alert-link\" ng-click=\"createLeague(season)\">create a league</a> now.\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("modules/private/play/play.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/play/play.tpl.html",
    "<div class=\"play-header-row row\">\n" +
    "  <div class=\"col-sm-7 col-md-7\">\n" +
    "    <h4 class=\"my-teams-header\">My Teams & Leagues <small ng-show=\"isState(['private.play.teams'])\"><a ng-show=\"teamOptions.dead == true\" ng-click=\"teamOptions.dead = false\">[ hide dead teams ]</a><a ng-show=\"teamOptions.dead == false\" ng-click=\"teamOptions.dead = true\">[ show dead teams ]</a></small></h4>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-5 col-md-5\">\n" +
    "    <div class=\"play-btn-group\">\n" +
    "      <button type=\"button\" class=\"join-league-btn btn btn-primary btn-sm\" ng-click=\"joinLeague(season)\">Join League</button>\n" +
    "      <button type=\"button\" class=\"create-league-btn btn btn-primary btn-sm\" ng-click=\"createLeague(season)\">Create League</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<hr>\n" +
    "<ul class=\"nav nav-tabs nav-justified\">\n" +
    "  <li ng-class=\"{'active': isState(['private.play.teams'])}\" ng-click=\"resetSearch()\">\n" +
    "    <a ng-click=\"myTeams(season)\"><span class=\"my-teams\">My Teams</span></a>\n" +
    "  </li>\n" +
    "  <li ng-class=\"{'active': isState(['private.play.leagues'])}\" ng-click=\"resetSearch()\">\n" +
    "    <a ng-click=\"myLeagues(season)\"><span class=\"my-leagues\">My Leagues</span></a>\n" +
    "  </li>\n" +
    "</ul>\n" +
    "<div class=\"input-group custom-search-form filter-team-league\">\n" +
    "  <input type=\"text\" class=\"form-control\" placeholder=\"Search by name...\" ng-model=\"query\">\n" +
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
    "    <a ng-repeat=\"team in teams | aliveTeamFilter:teamOptions | filter:search:strict | offsetFilter:(currentTeamPage-1)*teamsPerPage | limitTo:teamsPerPage\" ng-click=\"showTeam(season, team)\" class=\"list-group-item\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"league-name col-sm-6 col-md-6\">\n" +
    "          <i class=\"fa fa-comment fa-fw\" ng-show=\"team.active && team.message.length > 0\" title=\"Has message from commish\"></i>\n" +
    "          <i class=\"fa fa-times fa-fw\" title=\"Deactivated Team\" ng-show=\"!team.active\"></i>\n" +
    "          <i class=\"fa fa-thumbs-down fa-fw\" title=\"Dead Team\" ng-show=\"team.active && !team.alive\"></i> <span ng-class=\"{'dead-team-name': !team.active}\">{{team.name}}</span><br><span class=\"team-league\">{{team.league.name}}</span></div>\n" +
    "        <div class=\"col-sm-6 col-md-6\">\n" +
    "          <span class=\"current-pick\" ng-class=\"{'no-pick': hasNoPick(team)}\" ng-show=\"team.active && team.started\">Current Loser: [ <span class=\"current-loser-name\">{{team.last_pick_squad.name}}</span><span class=\"current-loser-abbrev\">{{team.last_pick_squad.abbrev}}</span> ]</span>\n" +
    "          <span class=\"current-pick\" ng-show=\"team.active && !team.started\">Starts {{team.start_week}}</span>\n" +
    "          <span class=\"inactive-team\" ng-show=\"!team.active\">Contact the commish to reactivate team</span>\n" +
    "          <span class=\"badge\">View</span>\n" +
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
    "  No teams :( Maybe you should <a class=\"alert-link\" ng-click=\"joinLeague(season)\">join a league</a> pronto!\n" +
    "</div>\n" +
    "\n" +
    "\n" +
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
    "        <textarea id=\"message\" name=\"message\" class=\"form-control\" placeholder=\"Enter a message to put on the team's wall...\" rows=\"3\" ng-maxlength=\"200\" ng-model=\"teamData.message\"></textarea>\n" +
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
    "<div class=\"alert alert-danger\" ng-show=\"teamData.active && teamData.alive && teamData.started && hasNoPick(teamData)\">This team has no pick for the current week. Pick a loser before it's too late, buddy.</div>\n" +
    "<div class=\"alert alert-danger\" ng-show=\"teamData.active && !teamData.alive\">This team is DEAD. I guess you're not the loser you thought you were.</div>\n" +
    "<div class=\"alert alert-warning\" ng-show=\"teamData.active && !teamData.started\">You can make your first pick when the league starts - {{teamData.start_week_display}}</div>\n" +
    "<div class=\"header-row row\">\n" +
    "  <div class=\"col-sm-8 col-md-8\">\n" +
    "    <div class=\"btn-group teams-dropdown\" dropdown is-open=\"teamsDropdown.isopen\">\n" +
    "      <button type=\"button\" class=\"teams-btn-link btn btn-link btn-lg dropdown-toggle\" ng-disabled=\"!isCoach(teamData)\">\n" +
    "        <i class=\"fa fa-thumbs-up fa-fw\" title=\"Alive\" ng-show=\"teamData.alive\"></i>\n" +
    "        <i class=\"fa fa-thumbs-down fa-fw\" title=\"Dead\" ng-show=\"!teamData.alive\"></i> <strong><span ng-class=\"{'team-alive': teamData.alive, 'team-dead': !teamData.alive}\">{{teamData.name}} <span ng-show=\"isCoach(teamData)\" class=\"caret\"></span></span></strong>\n" +
    "      </button>\n" +
    "      <ul class=\"dropdown-menu teams-btn-menu\" role=\"menu\">\n" +
    "        <li><a ng-click=\"editTeam(teamData)\">Edit {{teamData.name}}</a></li>\n" +
    "        <li class=\"divider\" ng-show=\"leagueTeams.length > 1\"></li>\n" +
    "        <li ng-repeat=\"team in leagueTeams\" ng-show=\"team.id != teamData.id\"><a ng-click=\"showTeam(team)\"><span ng-show=\"team.active && team.alive\"><i class=\"fa fa-thumbs-up fa-fw\"></i></span><span ng-show=\"team.active && !team.alive\"><i class=\"fa fa-thumbs-down fa-fw\"></i></span><span ng-show=\"!team.active\"><i class=\"fa fa-times fa-fw\"></i></span> <span class=\"other-team-name\" ng-class=\"{'team-inactive': !team.active}\">{{team.name}}</span> <span class=\"other-team-pick\">{{team.last_pick_squad.name}}</span></a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "    <h3 class=\"team-league-name\"><small><a ng-click=\"showLeague(teamData)\"><i class=\"fa fa-group fa-fw\"></i> <em>{{teamData.league.name}}</em></a></small></h3>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-4 col-md-4\">\n" +
    "    <button type=\"button\" class=\"make-pick-btn btn btn-primary btn-sm\" ng-show=\"isCoach(teamData)\" ng-click=\"makePick(teamData)\" ng-disabled=\"!teamData.started\">Pick Loser</button>\n" +
    "    <div class=\"btn-group team-actions\" ng-show=\"isCoach(teamData) || isCommish(teamData)\" dropdown is-open=\"coach.isopen\">\n" +
    "      <button type=\"button\" class=\"actions-btn btn btn-default btn-sm dropdown-toggle\">\n" +
    "        <strong>Actions</strong> <span class=\"caret\"></span>\n" +
    "      </button>\n" +
    "      <ul class=\"dropdown-menu team-actions-menu\" role=\"menu\">\n" +
    "        <li><a ng-click=\"editTeam(teamData)\">Edit {{teamData.name}}</a></li>\n" +
    "        <li ng-show=\"!isCommish(teamData)\"><a ng-click=\"contactCommish(teamData)\">Contact the commish</a></li>\n" +
    "        <li><a ng-click=\"reportAbuse()\">Report abuse</a></li>\n" +
    "        <li><a ng-click=\"reportAbuse()\">Report a bug</a></li>\n" +
    "        <li ng-show=\"isCommish(teamData)\" class=\"divider\"></li>\n" +
    "        <li><a ng-show=\"isCommish(teamData)\" ng-click=\"updateMessage(teamData)\">Edit team message</a></li>\n" +
    "        <li ng-show=\"isCommish(teamData) && !teamData.active\"><a ng-click=\"activate(teamData)\">Reactivate this team</a></li>\n" +
    "        <li ng-show=\"isCommish(teamData) && teamData.active\"><a ng-click=\"deactivate(teamData)\">Deactivate this team</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"team-message well well-sm\" ng-show=\"isCommish(teamData) || isCoach(teamData)\"><i class=\"fa fa-comment fa-fw\" title=\"Message for this team\"></i> <strong>A private message from the commish:</strong> <p class=\"team-message-text\" ng-show=\"!teamData.message || teamData.message.length == 0\">Nothing</p><p class=\"team-message-text\" ng-show=\"teamData.message.length > 0\" ng-bind-html=\"teamData.message | linky:'_blank'\"></p> <a ng-show=\"isCommish(teamData)\" ng-click=\"updateMessage(teamData)\">[ edit ]</a><a ng-show=\"!isCommish(teamData)\" ng-click=\"contactCommish(teamData)\">[ contact commish ]</a></div>\n" +
    "<hr>\n" +
    "<h4 class=\"losers-heading\">Loser Picks ({{teamData.pick_count}}) <small ng-show=\"teamData.started && isCoach(teamData)\"><a ng-click=\"makePick(teamData)\">[ pick loser ]</a></small></h4>\n" +
    "<div class=\"team-container\" style=\"clear:both;\">\n" +
    "    <div class=\"team-picks list-group\">\n" +
    "      <a ng-repeat=\"pick in picks\" class=\"list-group-item\" ng-click=\"makePick(teamData, pick)\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"week-name col-sm-6 col-md-6\">\n" +
    "            <i class=\"fa fa-lock fa-fw\" ng-show=\"pick.locked && pick.correct == null\" title=\"Pick locked\"></i>\n" +
    "            <i class=\"fa fa-unlock fa-fw\" ng-show=\"!pick.locked && pick.correct == null\" title=\"Pick unlocked\"></i>\n" +
    "            <i class=\"fa fa-thumbs-down fa-fw\" ng-show=\"pick.correct === false\" title=\"Pick wrong\"></i>\n" +
    "            <i class=\"fa fa-thumbs-up fa-fw\" ng-show=\"pick.correct === true\" title=\"Pick correct\"></i> <span class=\"pick-squad\" ng-class=\"{'pick-correct': pick.correct === true, 'pick-incorrect': pick.correct === false}\"> <span class=\"pick-squad-name\">[ {{pick.squad.name}} ]</span><span class=\"pick-squad-abbrev\">[ {{pick.squad.abbrev}} ]</span></span> <span class=\"game\">Week {{pick.week_number}} ({{pick.week_type}})</span>\n" +
    "          </div>\n" +
    "          <div class=\"game-column col-sm-6 col-md-6\">\n" +
    "            <span class=\"game\">{{pick.game_display}}</span>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "    <div class=\"alert alert-info\" ng-show=\"picks.length == 0\">\n" +
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
    "                <span class=\"current-pick\" ng-class=\"{'no-pick': hasNoPick(team)}\" ng-show=\"team.active\">Current Loser: {{team.last_pick_squad.name}}</span>\n" +
    "                <span class=\"inactive-team\" ng-show=\"!team.active\">Contact the commish to reactivate team</span>\n" +
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
    "                <span class=\"current-pick no-pick\" ng-show=\"team.active\">Last Pick: {{team.last_pick_squad.name}}</span>\n" +
    "                <span class=\"inactive-team\" ng-show=\"!team.active\">Deactivated by the commish</span>\n" +
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
    "      <button type=\"button\" class=\"create-team-btn btn btn-primary btn-sm\" ng-click=\"createTeam(seasonId)\">Join League</button>\n" +
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
    "      <p>- Join a league or create your own league.</p>\n" +
    "      <p>- Pick ONE loser per week.</p>\n" +
    "      <p>- Root for your loser to lose...duh</p>\n" +
    "      <p>- If your loser loses, then you move to the next week.</p>\n" +
    "      <p>- The last team remaining in your league wins!</p>\n" +
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
    "    <dd>Just get it in before the game starts.</dd>\n" +
    "    <dt>What if I fail to make a pick for a week?</dt>\n" +
    "    <dd>You’re gone. Hit the road, Jack!</dd>\n" +
    "    <dt>Can the commish make picks for me?</dt>\n" +
    "    <dd>Negative.</dd>\n" +
    "    <dt>How many times can I join a league?</dt>\n" +
    "    <dd>As much as the commish allows (with a max of 10 times).</dd>\n" +
    "    <dt>How do I win?</dt>\n" +
    "    <dd>Don’t be wrong. Or at least be the last one in your league to be wrong.</dd>\n" +
    "    <dt>What do I win?</dt>\n" +
    "    <dd>That is between you and the commish of the league. However, please be careful when dealing with money. Don’t send money to anyone you don’t know. Common sense, please.</dd>\n" +
    "    <dt>Can I see the picks of others in my league?</dt>\n" +
    "    <dd>Only after the game has started.</dd>\n" +
    "    <dt>Can I create my own league?</dt>\n" +
    "    <dd>You betcha.</dd>\n" +
    "    <dt>How do I invite my friends to join my league?</dt>\n" +
    "    <dd>On your league page you’ll find an 'Invite' button. Use it. You’ll need their email address.</dd>\n" +
    "    <dt>How many friends can join my league?</dt>\n" +
    "    <dd>As many as you like. Just to prove it, put a link to your league on Facebook and see if you can get all your Facebook friends to join.</dd>\n" +
    "    <dt>Can I set a limit on how many times a friend can join my league?</dt>\n" +
    "    <dd>You sure can. 1 - 10 times.</dd>\n" +
    "    <dt>How do I stop people from joining my league?</dt>\n" +
    "    <dd>Change the league to private.</dd>\n" +
    "    <dt>How can I remove people from my league?</dt>\n" +
    "    <dd>You can’t but you can deactivate (or reactivate) their team. A deactivated team is hidden from view and can’t make any picks so it will have a quick and painless death...</dd>\n" +
    "    <dt>Can I edit my league?</dt>\n" +
    "    <dd>Yes, but you can't change the start week after the league starts.</dd>\n" +
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
    "    <p class=\"lead\">Pick a different NFL loser each week. The last team standing wins. Join anytime for free.</p>\n" +
    "  <div>\n" +
    "    <a class=\"cta btn btn-primary btn-lg\" role=\"button\" ng-click=\"joinLeague(season)\">Join League</a>\n" +
    "  </div>\n" +
    "  <div>\n" +
    "    <a class=\"cta btn btn-primary btn-lg\" role=\"button\" ng-click=\"createLeague(season)\">Create League</a>\n" +
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
    "    <form name=\"signinForm\" role=\"form\" ng-submit=\"signin(credentials)\" novalidate>\n" +
    "      <div class=\"form-group\">\n" +
    "        <div class=\"input-group\">\n" +
    "          <span class=\"input-group-addon\"><i class=\"fa fa-envelope fa-fw\"></i></span>\n" +
    "          <input type=\"email\" class=\"form-control\" placeholder=\"Email\" ng-model=\"credentials.email\" autofocus required>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <div class=\"input-group\">\n" +
    "          <span class=\"input-group-addon\"><i class=\"fa fa-key fa-fw\"></i></span>\n" +
    "          <input type=\"password\" class=\"form-control\" placeholder=\"Password\" ng-model=\"credentials.password\" required>\n" +
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

    require('./common/aspects').name,
    require('./common/models').name,
    require('./common/api').name,
    require('./common/command').name,

    require('./common/service/application').name,

    //directives
    require('./common/directives/focus').name,
    require('./common/directives/match').name,
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
                    currentSeason: function(seasonService) {
                        return seasonService.getCurrentSeason();
                    }
                }
            })
            .state('private', {
                abstract: true,
                url: '/',
                templateUrl: 'common/templates/master.tpl.html',
                resolve: {
                    currentSeason: function(seasonService) {
                        return seasonService.getCurrentSeason();
                    },
                    user: function(currentSeason, userService, userModel) {
                        if (userModel.user.loaded) {
                            return userModel.user;
                        } else {
                            return userService.getCurrentUser();
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










},{"app-templates":"0VoVTq","./modules/public/home":2,"./modules/public/faq":3,"./modules/public/abuse":4,"./modules/public/signin":5,"./modules/public/register":6,"./modules/public/register/terms":7,"./modules/private/user":8,"./modules/private/user/reset":9,"./modules/private/league":10,"./modules/private/league/new":11,"./modules/private/league/view":12,"./modules/private/league/edit":13,"./modules/private/league/contact":14,"./modules/private/league/message":15,"./modules/private/league/join":16,"./modules/private/league/invite":17,"./modules/private/league/invite/request":18,"./modules/private/leagues":19,"./modules/private/leagues/join":20,"./modules/private/leagues/join/public":21,"./modules/private/leagues/join/private":22,"./modules/private/leagues/manage":23,"./modules/private/leagues/my":24,"./modules/private/team":25,"./modules/private/team/view":26,"./modules/private/team/edit":27,"./modules/private/team/message":28,"./modules/private/teams":29,"./modules/private/teams/alive":30,"./modules/private/teams/dead":31,"./modules/private/play":32,"./modules/private/play/leagues":33,"./modules/private/play/teams":34,"./modules/private/pick/make":35,"./modules/private/admin":36,"./modules/private/admin/games":37,"./modules/private/admin/games/edit":38,"./common/modules/header":39,"./common/modules/message":40,"./common/modules/footer":41,"./common/aspects":42,"./common/models":43,"./common/api":44,"./common/command":45,"./common/service/application":46,"./common/directives/focus":47,"./common/directives/match":48,"./common/directives/requiredPattern":49,"./common/filters":50}],42:[function(require,module,exports){

require("./TestAspect");

module.exports = angular.module('loghApp.aspects', [])
    .config( function() {

       //TODO aspect config if necessary
    }
);
},{"./TestAspect":51}],43:[function(require,module,exports){
/**
 * Define the application models
 */
module.exports = angular.module('loghApp.models', [])
    //models
    .service('userModel', require('./UserModel'))
    .service('seasonModel', require('./SeasonModel'))
    .service('messageModel', require('./MessageModel'))
;
},{"./UserModel":52,"./SeasonModel":53,"./MessageModel":54}],44:[function(require,module,exports){
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

},{"./ApiConfig":55,"./UserService":56,"./LeagueService":57,"./TeamService":58,"./PickService":59,"./SeasonService":60,"./WeekService":61,"./GameService":62}],45:[function(require,module,exports){
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


},{"./session/SigninCommand":63,"./session/SignoutCommand":64,"./user/GetCurrentUserCommand":65}],50:[function(require,module,exports){
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

},{"./OffsetFilter":66,"./ActiveTeamFilter":67,"./AliveTeamFilter":68,"./OpenLeagueFilter":69,"./ManagedLeagueFilter":70,"./TimeFilter":71}],2:[function(require,module,exports){

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
},{"./HomeController":72}],3:[function(require,module,exports){
module.exports = angular.module('loghApp.faq', [])
  .controller('FaqController', require('./FaqController'));

},{"./FaqController":73}],4:[function(require,module,exports){
module.exports = angular.module('loghApp.abuse', [])
  .controller('AbuseController', require('./AbuseController'));

},{"./AbuseController":74}],6:[function(require,module,exports){
module.exports = angular.module('loghApp.register', [])
  .controller('RegisterController', require('./RegisterController'));

},{"./RegisterController":75}],5:[function(require,module,exports){
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

},{"./SigninController":76}],8:[function(require,module,exports){
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

},{"./UserController":77}],10:[function(require,module,exports){
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

},{"./LeagueController":78}],19:[function(require,module,exports){
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


},{"./LeaguesController":79}],25:[function(require,module,exports){
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

},{"./TeamController":80}],29:[function(require,module,exports){
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


},{"./TeamsController":81}],32:[function(require,module,exports){
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


},{"./PlayController":82}],36:[function(require,module,exports){
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

},{"./AdminController":83}],39:[function(require,module,exports){
module.exports = angular.module('loghApp.header', [])
    .controller('HeaderController', require('./HeaderController'))
},{"./HeaderController":84}],40:[function(require,module,exports){
module.exports = angular.module('loghApp.message', [])
    .controller('MessageController', require('./MessageController'));
},{"./MessageController":85}],41:[function(require,module,exports){
module.exports = angular.module('loghApp.footer', [])
  .controller('FooterController', require('./FooterController'))
},{"./FooterController":86}],46:[function(require,module,exports){
/**
 * Define the application service
 */
module.exports = angular.module('logh.application', [])
    .service('applicationService', require('./ApplicationService'));
},{"./ApplicationService":87}],47:[function(require,module,exports){
//application directives
module.exports = angular.module('loghApp.directives.focus',[])
    .directive('loghFocus', require('./FocusDirective'))
;

},{"./FocusDirective":88}],48:[function(require,module,exports){
//application directives
module.exports = angular.module('loghApp.directives.match',[])
    .directive('match', require('./MatchDirective'))
;

},{"./MatchDirective":89}],49:[function(require,module,exports){
//application directives
module.exports = angular.module('loghApp.directives.requiredPattern',[])
    .directive('rpattern', require('./RequiredPatternDirective'))
;

},{"./RequiredPatternDirective":90}],7:[function(require,module,exports){
module.exports = angular.module('loghApp.register.terms', [])
  .controller('RegisterTermsController', require('./RegisterTermsController'));

},{"./RegisterTermsController":91}],9:[function(require,module,exports){
module.exports = angular.module('loghApp.user.reset', [])
  .controller('UserResetController', require('./UserResetController'));

},{"./UserResetController":92}],11:[function(require,module,exports){
module.exports = angular.module('loghApp.league.new', [])
  .controller('NewLeagueController', require('./NewLeagueController'));

},{"./NewLeagueController":93}],12:[function(require,module,exports){
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
          aliveTeams: function(league, teamService) {
            return teamService.getAliveTeams({ seasonId: league.data.season_id, leagueId: league.data.id });
          },
          deadTeams: function(league, teamService) {
            return teamService.getDeadTeams({ seasonId: league.data.season_id, leagueId: league.data.id });
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });

},{"./ViewLeagueController":94}],13:[function(require,module,exports){
module.exports = angular.module('loghApp.league.edit', [])
  .controller('EditLeagueController', require('./EditLeagueController'));

},{"./EditLeagueController":95}],14:[function(require,module,exports){
module.exports = angular.module('loghApp.league.contact', [])
  .controller('LeagueContactController', require('./LeagueContactController'));

},{"./LeagueContactController":96}],15:[function(require,module,exports){
module.exports = angular.module('loghApp.league.message', [])
  .controller('LeagueMessageController', require('./LeagueMessageController'));

},{"./LeagueMessageController":97}],16:[function(require,module,exports){
module.exports = angular.module('loghApp.league.join', [])
  .controller('LeagueJoinController', require('./LeagueJoinController'));

},{"./LeagueJoinController":98}],17:[function(require,module,exports){
module.exports = angular.module('loghApp.league.invite', [])
  .controller('LeagueInviteController', require('./LeagueInviteController'));

},{"./LeagueInviteController":99}],20:[function(require,module,exports){
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


},{"./JoinLeaguesController":100}],23:[function(require,module,exports){
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


},{"./ManageLeaguesController":101}],24:[function(require,module,exports){
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


},{"./MyLeaguesController":102}],26:[function(require,module,exports){
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

},{"./ViewTeamController":103}],27:[function(require,module,exports){
module.exports = angular.module('loghApp.team.edit', [])
  .controller('EditTeamController', require('./EditTeamController'));

},{"./EditTeamController":104}],28:[function(require,module,exports){
module.exports = angular.module('loghApp.team.message', [])
  .controller('TeamMessageController', require('./TeamMessageController'));

},{"./TeamMessageController":105}],30:[function(require,module,exports){
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


},{"./AliveTeamsController":106}],31:[function(require,module,exports){
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


},{"./DeadTeamsController":107}],33:[function(require,module,exports){
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
          leagues: function(user, leagueService, seasonModel) {
            return leagueService.getLeagues(seasonModel.season.id);
          }
        }
      })
    ;
    $urlRouterProvider.otherwise('/');
  });


},{"./PlayLeaguesController":108}],34:[function(require,module,exports){
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
          teams: function(user, teamService, seasonModel) {
            return teamService.getAllTeams({ seasonId: seasonModel.season.id });
          }
        }

      })
    ;
    $urlRouterProvider.otherwise('/');
  });


},{"./PlayTeamsController":109}],35:[function(require,module,exports){
module.exports = angular.module('loghApp.pick.make', [])
  .controller('PickMakeController', require('./PickMakeController'));

},{"./PickMakeController":110}],37:[function(require,module,exports){
module.exports = angular.module('loghApp.admin.games', [])
  .controller('AdminGamesController', require('./AdminGamesController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.admin.games', {
        url: 'week/{weekId}/games',
        views: {
          adminContent: {
            templateUrl: 'modules/private/admin/games/admin.games.tpl.html',
            controller: 'AdminGamesController',
            resolve: {
              week: function(currentSeason, $stateParams, weekService) {
                return weekService.getWeek($stateParams.weekId);
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

},{"./AdminGamesController":111}],18:[function(require,module,exports){
module.exports = angular.module('loghApp.league.invite.request', [])
  .controller('LeagueInviteRequestController', require('./LeagueInviteRequestController'));

},{"./LeagueInviteRequestController":112}],21:[function(require,module,exports){
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


},{"./PublicLeaguesController":113}],22:[function(require,module,exports){
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


},{"./PrivateLeaguesController":114}],38:[function(require,module,exports){
module.exports = angular.module('loghApp.admin.games.edit', [])
  .controller('GamesEditController', require('./GamesEditController'));

},{"./GamesEditController":115}],51:[function(require,module,exports){

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
},{}],52:[function(require,module,exports){

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
},{}],53:[function(require,module,exports){
var SeasonModel = function($rootScope, $log) {

    var season = {};
    season.id = '';
    season.name = '';

    this.season = season;

    this.setSeason = function(seasonData) {
        season = angular.extend(season, seasonData);
        $log.debug("SeasonModel: setSeasonn: " + season.name);
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("creating season model...");
    };
    init();

};

SeasonModel.$inject = ['$rootScope', '$log'];
module.exports = SeasonModel;
},{}],54:[function(require,module,exports){

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

},{}],55:[function(require,module,exports){
/*
 *  Global config for remote services
 */

var ApiConfig =  {
    baseURL: '/api/'
};

module.exports = ApiConfig;

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
                  $location.path('/season/' + seasonModel.season.id + '/my/teams');
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
        var promise = $http.delete(apiConfig.baseURL + 'sessions/destroy')
            .success(function(data) {
                $log.debug("UserService: signout success");
                userModel.resetUser();
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
                  $location.path('/season/' + seasonModel.season.id + '/my/teams');
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

    this.updateLeagueMessage = function(leagueParams, emailMessage) {
      var deferred = $q.defer();
      $http.put(apiConfig.baseURL + "seasons/" + leagueParams.season_id + "/leagues/" + leagueParams.id + "/message",
            { league: leagueParams, emailMessage: emailMessage })
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
},{}],58:[function(require,module,exports){
var TeamService = function($http, $log, $location, $state, $q, apiConfig, messageModel) {

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
                // todo: this relies on a monkey patch at the moment - https://github.com/angular-ui/ui-router/issues/582
                // but may be resolved with future releases of angular-ui-router
                $state.reload(); // reloads all the resolves for the view league page and reinstantiates the controller
                messageModel.setMessage(data.message, false);
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

};

TeamService.$inject = ['$http', '$log', '$location', '$state', '$q', 'apiConfig', 'messageModel'];
module.exports = TeamService;
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
},{}],60:[function(require,module,exports){
var SeasonService = function($http, $log, apiConfig, seasonModel) {

    this.getCurrentSeason = function() {
        var promise = $http.get(apiConfig.baseURL + "seasons/current")
            .success(function(data) {
                $log.debug("SeasonService: getCurrentSeason success");
                seasonModel.setSeason(data);
                return data;
            })
            .error(function(data) {
                $log.debug("SeasonService: getCurrentSeason failed");
                return data;
            });

        return promise;
    };

};

SeasonService.$inject = ['$http', '$log', 'apiConfig', 'seasonModel'];
module.exports = SeasonService;
},{}],61:[function(require,module,exports){
var WeekService = function($http, $log, $q, apiConfig, seasonModel, messageModel) {

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

    this.getWeek = function(weekId) {
        var promise = $http.get(apiConfig.baseURL + "seasons/" + seasonModel.season.id + "/weeks/" + weekId)
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

WeekService.$inject = ['$http', '$log', '$q', 'apiConfig', 'seasonModel', 'messageModel'];
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
},{}],63:[function(require,module,exports){
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

},{}],64:[function(require,module,exports){
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

},{}],65:[function(require,module,exports){

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
},{}],66:[function(require,module,exports){

var OffsetFilter = function($log) {
    return function(input, start) {
        start = parseInt(start, 10);
        return input.slice(start);
    };
};

OffsetFilter.$inject = ['$log'];
module.exports = OffsetFilter;

},{}],67:[function(require,module,exports){
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

},{}],68:[function(require,module,exports){
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

},{}],69:[function(require,module,exports){
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

},{}],70:[function(require,module,exports){
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

},{}],71:[function(require,module,exports){

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

},{}],72:[function(require,module,exports){
var HomeController = function($scope, $log, $location, $modal, seasonModel, messageModel, weekService, leagueService) {

    $scope.season = seasonModel.season;

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

    $scope.viewTeams = function(season) {
      $location.path('/season/' + season.id + '/teams/alive');
    };

    $scope.viewLeagues = function(season) {
      $location.path('/season/' + season.id + '/leagues');
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("home controller");
    };
    init();
};

HomeController.$inject = ['$scope', '$log', '$location', '$modal', 'seasonModel', 'messageModel', 'weekService', 'leagueService'];
module.exports = HomeController;

},{}],73:[function(require,module,exports){
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

},{}],74:[function(require,module,exports){
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

},{}],75:[function(require,module,exports){
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

},{}],76:[function(require,module,exports){
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

},{}],77:[function(require,module,exports){

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

},{}],78:[function(require,module,exports){

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

var LeaguesController = function($scope, $log, $state, $stateParams, seasonModel) {

    $scope.season = seasonModel.season;

    // pagination
    $scope.currentLeaguePage = 1;
    $scope.leaguesPerPage = 100;

    $scope.seasonId = $stateParams.seasonId;

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

LeaguesController.$inject = ['$scope', '$log', '$state', '$stateParams', 'seasonModel'];
module.exports = LeaguesController;


},{}],80:[function(require,module,exports){
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

},{}],81:[function(require,module,exports){
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

},{}],82:[function(require,module,exports){
var PlayController = function($scope, $log, $location, $modal, $state, seasonModel, messageModel, weekService, leagueService) {

  $scope.season = seasonModel.season;

  $scope.teamOptions = { alive: true, dead: true };
  $scope.leagueOptions = { managed: true };

  $scope.query = '';

  $scope.myTeams = function(season) {
    $location.path('/season/' + season.id + '/my/teams');
  };

  $scope.myLeagues = function(season) {
    $location.path('/season/' + season.id + '/my/leagues');
  };

  $scope.resetSearch = function() {
    $scope.query = '';
  };

  $scope.isState = function(states) {
    return _.indexOf(states, $state.current.name) > -1;
  };

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

    /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("play controller");
  };
  init();

};

PlayController.$inject = ['$scope', '$log', '$location', '$modal', '$state', 'seasonModel', 'messageModel', 'weekService', 'leagueService'];
module.exports = PlayController;

},{}],83:[function(require,module,exports){
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

},{}],84:[function(require,module,exports){
var HeaderController = function($scope, $log, $location, $modal, $state, $anchorScroll, weekService, userService, leagueService, userModel, seasonModel, messageModel) {

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

    $scope.isCollapsed = true;

    $scope.userData = userModel;

    $scope.season = seasonModel.season;

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

    $scope.play = function(season) {
        $location.path('/season/' + season.id + '/my/teams');
    };

    $scope.joinLeague = function(season) {
        $location.path('/season/' + season.id + '/leagues/public');
    };

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

HeaderController.$inject = ['$scope', '$log', '$location', '$modal', '$state', '$anchorScroll', 'weekService', 'userService', 'leagueService', 'userModel', 'seasonModel', 'messageModel'];
module.exports = HeaderController;

},{}],85:[function(require,module,exports){
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

},{}],86:[function(require,module,exports){
var FooterController = function($scope, $log, $modal, $location, weekService, leagueService, seasonModel, messageModel) {

  $scope.season = seasonModel.season;

  $scope.play = function(season) {
    $location.path('/season/' + season.id + '/my/teams');
  };

  $scope.joinLeague = function(season) {
    $location.path('/season/' + season.id + '/leagues/public');
  };

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
      messageModel.setMessage({ type: 'warning', content: 'Create league cancelled' }, false);
      $log.debug('Create league modal dismissed...');
    });

  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("footer controller");
  };
  init();
};

FooterController.$inject = ['$scope', '$log', '$modal', '$location', 'weekService', 'leagueService', 'seasonModel', 'messageModel'];
module.exports = FooterController;

},{}],87:[function(require,module,exports){
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

},{}],88:[function(require,module,exports){
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

},{}],89:[function(require,module,exports){
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

},{}],90:[function(require,module,exports){
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
},{}],91:[function(require,module,exports){
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

},{}],93:[function(require,module,exports){
var NewLeagueController = function(weeks, $scope, $log, $modalInstance) {

    $scope.weeks = weeks.data;

    $scope.newLeagueData = {
        name: '',
        nickname: '',
        season_id: $scope.weeks[0].season_id,
        start_week_id: $scope.weeks[0].id,
        public: true,
        max_teams_per_user: ''
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

NewLeagueController.$inject = ['weeks', '$scope', '$log', '$modalInstance'];
module.exports = NewLeagueController;

},{}],92:[function(require,module,exports){
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

},{}],94:[function(require,module,exports){
var ViewLeagueController = function(league, aliveTeams, deadTeams, $scope, $log, $modal, $location, userModel, messageModel, userService, weekService, teamService, leagueService) {

  $scope.leagueData = league.data;

  $scope.aliveTeams = aliveTeams.data;
  $scope.deadTeams = deadTeams.data;

  // pagination
  $scope.currentTeamPage = 1;
  $scope.teamsPerPage = 100;

  $scope.teamOptions = { active: true, inactive: false };

  $scope.teamQuery = '';

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

  $scope.hasTeamInLeague = function() {
    var found = false;
    var teams = _.union($scope.aliveTeams, $scope.deadTeams);
    _.each(teams, function(team) {
      if (team.coach_ids.indexOf(userModel.user.id) > -1) {
        found = true;
      }
    });
    return found;
  };

  $scope.hasDeactivatedTeams = function() {
    var foundDeactivated = false;
    var teams = _.union($scope.aliveTeams, $scope.deadTeams);
    _.each(teams, function(team) {
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
      leagueService.updateLeagueMessage(params.league, params.sendEmail)
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

  $scope.invite = function(leagueId) {

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/league/invite/league.invite.tpl.html',
      controller: 'LeagueInviteController',
      resolve: {
        leagueId: function() {
          return leagueId;
        }
      }
    });

    modalInstance.result.then(function (invitation) {
      leagueService.createInvite(invitation);
    }, function () {
      $log.debug('Invite coach modal dismissed...');
      messageModel.setMessage({ type: 'warning', content: 'Invite cancelled' }, false);
    });
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

ViewLeagueController.$inject = ['league', 'aliveTeams', 'deadTeams', '$scope', '$log', '$modal', '$location', 'userModel', 'messageModel', 'userService', 'weekService', 'teamService', 'leagueService'];
module.exports = ViewLeagueController;

},{}],98:[function(require,module,exports){
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

},{}],95:[function(require,module,exports){
var EditLeagueController = function(weeks, league, $scope, $log, $location, $modalInstance) {

    $scope.weeks = weeks.data;

    $scope.leagueData = angular.copy(league);

    $scope.showLeague = function(league) {
      $location.path('/season/' + league.season_id + '/league/' + league.id);
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
    };
    init();

};

EditLeagueController.$inject = ['weeks', 'league', '$scope', '$log', '$location', '$modalInstance'];
module.exports = EditLeagueController;

},{}],97:[function(require,module,exports){
var LeagueMessageController = function(league, $modalInstance, $scope, $log) {

  $scope.leagueData = angular.copy(league);

  $scope.messageOptions = { sendEmail: false };

  $scope.updateMessage = function(league, sendEmail) {
    $modalInstance.close({ league: league, sendEmail: sendEmail });
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

},{}],96:[function(require,module,exports){
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

},{}],99:[function(require,module,exports){
var LeagueInviteController = function(leagueId, $modalInstance, $scope, $log) {

  $scope.invitation = {
    league_id: leagueId,
    email: "",
    message: ""
  };

  $scope.invite = function (invitation) {
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
    $log.debug("league invite controller");
  };
  init();
};

LeagueInviteController.$inject = ['leagueId', '$modalInstance', '$scope', '$log'];
module.exports = LeagueInviteController;

},{}],100:[function(require,module,exports){
var JoinLeaguesController = function($scope, $log, $location, $modal, userModel, seasonModel, messageModel, weekService, leagueService) {

  $scope.season = seasonModel.season;

  $scope.leagueOptions = { closed: false };

  $scope.leagueQuery = '';

  $scope.publicLeagues = function(seasonId) {
    $location.path('/season/' + seasonId + '/leagues/public');
  };

  $scope.privateLeagues = function(seasonId) {
    $location.path('/season/' + seasonId + '/leagues/private');
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

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("join leagues controller");
  };
  init();

};

JoinLeaguesController.$inject = ['$scope', '$log', '$location', '$modal', 'userModel', 'seasonModel', 'messageModel', 'weekService', 'leagueService'];
module.exports = JoinLeaguesController;

},{}],101:[function(require,module,exports){
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


},{}],102:[function(require,module,exports){
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


},{}],103:[function(require,module,exports){
var ViewTeamController = function(team, leagueTeams, picks, $scope, $log, $modal, $location, messageModel, userModel, userService, teamService, gameService, pickService) {

  $scope.teamData = team.data;
  $scope.leagueTeams = leagueTeams.data;

  $scope.picks = picks.data;

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

  $scope.activate = function(team) {
    teamService.activateTeam(team)
      .then(function(active) {
        team.active = active;
      });
  };

  $scope.deactivate = function(team) {
    teamService.deactivateTeam(team)
      .then(function(active) {
        team.active = active;
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

},{}],104:[function(require,module,exports){
var EditTeamController = function(team, $scope, $log, $modalInstance) {

    $scope.teamData = angular.copy(team);

    $scope.editTeam = function (team) {
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

},{}],105:[function(require,module,exports){
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

},{}],107:[function(require,module,exports){
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

},{}],106:[function(require,module,exports){
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

},{}],108:[function(require,module,exports){
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


},{}],109:[function(require,module,exports){
var PlayTeamsController = function(teams, $scope, $log, $location) {

  $scope.teams = teams.data;

  // pagination
  $scope.currentTeamPage = 1;
  $scope.teamsPerPage = 100;

  $scope.showTeam = function(season, team) {
    $location.path('/season/' + season.id + '/league/' + team.league.id + '/team/' + team.id);
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

PlayTeamsController.$inject = ['teams', '$scope', '$log', '$location'];
module.exports = PlayTeamsController;

},{}],110:[function(require,module,exports){
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

},{}],111:[function(require,module,exports){
var AdminGamesController = function(week, games, $scope, $modal, gameService, weekService) {

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
    });

  };

  $scope.completeWeek = function(week) {
    weekService.completeWeek(week)
      .then(function() {
        $scope.weekData.complete = true;
      });
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
  };
  init();
};

AdminGamesController.$inject = ['week', 'games', '$scope', '$modal', 'gameService', 'weekService'];
module.exports = AdminGamesController;

},{}],112:[function(require,module,exports){
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

},{}],113:[function(require,module,exports){

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


},{}],114:[function(require,module,exports){
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


},{}],115:[function(require,module,exports){
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
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvLnRtcC9hcHAtdGVtcGxhdGVzLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvYXBwLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FzcGVjdHMvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kZWxzL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FwaS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9jb21tYW5kL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2ZpbHRlcnMvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3B1YmxpYy9ob21lL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wdWJsaWMvZmFxL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wdWJsaWMvYWJ1c2UvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHVibGljL3NpZ25pbi9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS91c2VyL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3RlYW0vaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdGVhbXMvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvcGxheS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9tb2R1bGVzL2hlYWRlci9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9tb2R1bGVzL21lc3NhZ2UvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kdWxlcy9mb290ZXIvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vc2VydmljZS9hcHBsaWNhdGlvbi9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9kaXJlY3RpdmVzL2ZvY3VzL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2RpcmVjdGl2ZXMvbWF0Y2gvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vZGlyZWN0aXZlcy9yZXF1aXJlZFBhdHRlcm4vaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci90ZXJtcy9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS91c2VyL3Jlc2V0L2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9uZXcvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL3ZpZXcvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2VkaXQvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2NvbnRhY3QvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL21lc3NhZ2UvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2pvaW4vaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2ludml0ZS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4vaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9tYW5hZ2UvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9teS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS90ZWFtL3ZpZXcvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdGVhbS9lZGl0L2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3RlYW0vbWVzc2FnZS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS90ZWFtcy9hbGl2ZS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS90ZWFtcy9kZWFkL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3BsYXkvbGVhZ3Vlcy9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9wbGF5L3RlYW1zL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3BpY2svbWFrZS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9nYW1lcy9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlL3JlcXVlc3QvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL3B1YmxpYy9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4vcHJpdmF0ZS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9nYW1lcy9lZGl0L2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FzcGVjdHMvVGVzdEFzcGVjdC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9tb2RlbHMvVXNlck1vZGVsLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL21vZGVscy9TZWFzb25Nb2RlbC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9tb2RlbHMvTWVzc2FnZU1vZGVsLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FwaS9BcGlDb25maWcuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vYXBpL1VzZXJTZXJ2aWNlLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FwaS9MZWFndWVTZXJ2aWNlLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FwaS9UZWFtU2VydmljZS5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9hcGkvUGlja1NlcnZpY2UuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vYXBpL1NlYXNvblNlcnZpY2UuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vYXBpL1dlZWtTZXJ2aWNlLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FwaS9HYW1lU2VydmljZS5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9jb21tYW5kL3Nlc3Npb24vU2lnbmluQ29tbWFuZC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9jb21tYW5kL3Nlc3Npb24vU2lnbm91dENvbW1hbmQuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vY29tbWFuZC91c2VyL0dldEN1cnJlbnRVc2VyQ29tbWFuZC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9maWx0ZXJzL09mZnNldEZpbHRlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9maWx0ZXJzL0FjdGl2ZVRlYW1GaWx0ZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vZmlsdGVycy9BbGl2ZVRlYW1GaWx0ZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vZmlsdGVycy9PcGVuTGVhZ3VlRmlsdGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2ZpbHRlcnMvTWFuYWdlZExlYWd1ZUZpbHRlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9maWx0ZXJzL1RpbWVGaWx0ZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3B1YmxpYy9ob21lL0hvbWVDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wdWJsaWMvZmFxL0ZhcUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3B1YmxpYy9hYnVzZS9BYnVzZUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci9SZWdpc3RlckNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3B1YmxpYy9zaWduaW4vU2lnbmluQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS91c2VyL1VzZXJDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9MZWFndWVDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvTGVhZ3Vlc0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdGVhbS9UZWFtQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS90ZWFtcy9UZWFtc0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvcGxheS9QbGF5Q29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9BZG1pbkNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kdWxlcy9oZWFkZXIvSGVhZGVyQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9tb2R1bGVzL21lc3NhZ2UvTWVzc2FnZUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kdWxlcy9mb290ZXIvRm9vdGVyQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9zZXJ2aWNlL2FwcGxpY2F0aW9uL0FwcGxpY2F0aW9uU2VydmljZS5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9kaXJlY3RpdmVzL2ZvY3VzL0ZvY3VzRGlyZWN0aXZlLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2RpcmVjdGl2ZXMvbWF0Y2gvTWF0Y2hEaXJlY3RpdmUuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vZGlyZWN0aXZlcy9yZXF1aXJlZFBhdHRlcm4vUmVxdWlyZWRQYXR0ZXJuRGlyZWN0aXZlLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXIvdGVybXMvUmVnaXN0ZXJUZXJtc0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL25ldy9OZXdMZWFndWVDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3VzZXIvcmVzZXQvVXNlclJlc2V0Q29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvdmlldy9WaWV3TGVhZ3VlQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvam9pbi9MZWFndWVKb2luQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvZWRpdC9FZGl0TGVhZ3VlQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbWVzc2FnZS9MZWFndWVNZXNzYWdlQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvY29udGFjdC9MZWFndWVDb250YWN0Q29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlL0xlYWd1ZUludml0ZUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL0pvaW5MZWFndWVzQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL21hbmFnZS9NYW5hZ2VMZWFndWVzQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL215L015TGVhZ3Vlc0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdGVhbS92aWV3L1ZpZXdUZWFtQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS90ZWFtL2VkaXQvRWRpdFRlYW1Db250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3RlYW0vbWVzc2FnZS9UZWFtTWVzc2FnZUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdGVhbXMvZGVhZC9EZWFkVGVhbXNDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3RlYW1zL2FsaXZlL0FsaXZlVGVhbXNDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3BsYXkvbGVhZ3Vlcy9QbGF5TGVhZ3Vlc0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvcGxheS90ZWFtcy9QbGF5VGVhbXNDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3BpY2svbWFrZS9QaWNrTWFrZUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvYWRtaW4vZ2FtZXMvQWRtaW5HYW1lc0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2ludml0ZS9yZXF1ZXN0L0xlYWd1ZUludml0ZVJlcXVlc3RDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9wdWJsaWMvUHVibGljTGVhZ3Vlc0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL3ByaXZhdGUvUHJpdmF0ZUxlYWd1ZXNDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2FkbWluL2dhbWVzL2VkaXQvR2FtZXNFZGl0Q29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdDVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25NQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdhcHAudGVtcGxhdGVzJywgWydjb21tb24vbW9kdWxlcy9mb290ZXIvZm9vdGVyLnRwbC5odG1sJywgJ2NvbW1vbi9tb2R1bGVzL2hlYWRlci9oZWFkZXIudHBsLmh0bWwnLCAnY29tbW9uL21vZHVsZXMvbWVzc2FnZS9tZXNzYWdlLnRwbC5odG1sJywgJ2NvbW1vbi90ZW1wbGF0ZXMvbWFzdGVyLnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9hZG1pbi50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvYWRtaW4vZ2FtZXMvYWRtaW4uZ2FtZXMudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2FkbWluL2dhbWVzL2VkaXQvZ2FtZXMuZWRpdC50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2NvbnRhY3QvbGVhZ3VlLmNvbnRhY3QudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9lZGl0L2xlYWd1ZS5lZGl0LnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlL2xlYWd1ZS5pbnZpdGUudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9pbnZpdGUvcmVxdWVzdC9sZWFndWUuaW52aXRlLnJlcXVlc3QudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9qb2luL2xlYWd1ZS5qb2luLnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbGVhZ3VlLnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbWVzc2FnZS9sZWFndWUubWVzc2FnZS50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL25ldy9sZWFndWUubmV3LnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvdmlldy9sZWFndWUudmlldy50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL2xlYWd1ZXMuam9pbi50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL3ByaXZhdGUvbGVhZ3Vlcy5qb2luLnByaXZhdGUudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9wdWJsaWMvbGVhZ3Vlcy5qb2luLnB1YmxpYy50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9sZWFndWVzLnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL21hbmFnZS9sZWFndWVzLm1hbmFnZS50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9teS9sZWFndWVzLm15LnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9waWNrL21ha2UvcGljay5tYWtlLnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9wbGF5L2xlYWd1ZXMvcGxheS5sZWFndWVzLnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9wbGF5L3BsYXkudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL3BsYXkvdGVhbXMvcGxheS50ZWFtcy50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvdGVhbS9lZGl0L3RlYW0uZWRpdC50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvdGVhbS9tZXNzYWdlL3RlYW0ubWVzc2FnZS50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvdGVhbS90ZWFtLnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS90ZWFtL3ZpZXcvdGVhbS52aWV3LnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS90ZWFtcy9hbGl2ZS90ZWFtcy5hbGl2ZS50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvdGVhbXMvZGVhZC90ZWFtcy5kZWFkLnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS90ZWFtcy90ZWFtcy50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvdXNlci9yZXNldC91c2VyLnJlc2V0LnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS91c2VyL3VzZXIudHBsLmh0bWwnLCAnbW9kdWxlcy9wdWJsaWMvYWJ1c2UvYWJ1c2UudHBsLmh0bWwnLCAnbW9kdWxlcy9wdWJsaWMvZmFxL2ZhcS50cGwuaHRtbCcsICdtb2R1bGVzL3B1YmxpYy9ob21lL2hvbWUudHBsLmh0bWwnLCAnbW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXIvcmVnaXN0ZXIudHBsLmh0bWwnLCAnbW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXIvdGVybXMvcmVnaXN0ZXIudGVybXMudHBsLmh0bWwnLCAnbW9kdWxlcy9wdWJsaWMvc2lnbmluL3NpZ25pbi50cGwuaHRtbCddKTtcblxuYW5ndWxhci5tb2R1bGUoXCJjb21tb24vbW9kdWxlcy9mb290ZXIvZm9vdGVyLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwiY29tbW9uL21vZHVsZXMvZm9vdGVyL2Zvb3Rlci50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS04IGNvbC1tZC04XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJsaW5rc1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8YSBuZy1jbGljaz1cXFwicGxheShzZWFzb24pXFxcIj5NeSBUZWFtcyAmIExlYWd1ZXM8L2E+XFxuXCIgK1xuICAgIFwiICAgICAgICAmbmJzcDt8Jm5ic3A7XFxuXCIgK1xuICAgIFwiICAgICAgICA8YSBuZy1jbGljaz1cXFwiam9pbkxlYWd1ZShzZWFzb24pXFxcIj5Kb2luIExlYWd1ZTwvYT5cXG5cIiArXG4gICAgXCIgICAgICAgICZuYnNwO3wmbmJzcDtcXG5cIiArXG4gICAgXCIgICAgICAgIDxhIG5nLWNsaWNrPVxcXCJjcmVhdGVMZWFndWUoc2Vhc29uKVxcXCI+Q3JlYXRlIExlYWd1ZTwvYT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxicj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIHN0eWxlPVxcXCJ0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXFwiPsKpIDIwMTQgRmxleGRldmVsb3BlcnMuY29tIExMQzwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00IGNvbC1tZC00XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwibGlua3NcXFwiIHN0eWxlPVxcXCJmbG9hdDogcmlnaHQ7XFxcIj4tLT5cXG5cIiArXG4gICAgXCIgICAgICAgIDwhLS08YSBocmVmPVxcXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vbG9zZW9yZ29ob21lXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWZhY2Vib29rLXNxdWFyZSBmYS1md1xcXCIgdGl0bGU9XFxcIkZhY2Vib29rXFxcIj48L2k+PC9hPi0tPlxcblwiICtcbiAgICBcIiAgICAgICAgPCEtLTxhIGhyZWY9XFxcImh0dHBzOi8vdHdpdHRlci5jb20vbG9zZW9yZ29ob21lXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXR3aXR0ZXIgZmEtZndcXFwiIHRpdGxlPVxcXCJUd2l0dGVyXFxcIj48L2k+PC9hPi0tPlxcblwiICtcbiAgICBcIiAgICAgIDwhLS08L2Rpdj4tLT5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwiY29tbW9uL21vZHVsZXMvaGVhZGVyL2hlYWRlci50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcImNvbW1vbi9tb2R1bGVzL2hlYWRlci9oZWFkZXIudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJuYXZiYXItaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGJ1dHRvbiBjbGFzcz1cXFwibmF2YmFyLXRvZ2dsZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBuZy1jbGljaz1cXFwiaXNDb2xsYXBzZWQgPSAhaXNDb2xsYXBzZWRcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgIDxhIGNsYXNzPVxcXCJuYXZiYXItYnJhbmRcXFwiIG5nLWNsaWNrPVxcXCJob21lKClcXFwiPkxvc2VPckdvSG9tZS5jb208L2E+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY29sbGFwc2U9XFxcImlzQ29sbGFwc2VkXFxcIiBjbGFzcz1cXFwibmF2YmFyLWNvbGxhcHNlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPHVsIG5nLXNob3c9XFxcInVzZXJEYXRhLnVzZXIubG9hZGVkXFxcIiBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGkgbmctY2xhc3M9XFxcInsnYWN0aXZlJzogaXNTdGF0ZShbJ3ByaXZhdGUucGxheS50ZWFtcycsICdwcml2YXRlLnBsYXkubGVhZ3VlcyddKX1cXFwiPjxhIG5nLWNsaWNrPVxcXCJwbGF5KHNlYXNvbilcXFwiPk15IFRlYW1zICYgTGVhZ3VlczwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgIDxsaSBuZy1jbGFzcz1cXFwieydhY3RpdmUnOiBpc1N0YXRlKFsncHJpdmF0ZS5sZWFndWVzLmpvaW4ucHVibGljJywgJ3ByaXZhdGUubGVhZ3Vlcy5qb2luLnByaXZhdGUnXSl9XFxcIj48YSBuZy1jbGljaz1cXFwiam9pbkxlYWd1ZShzZWFzb24pXFxcIj5Kb2luIExlYWd1ZTwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgIDxsaT48YSBuZy1jbGljaz1cXFwiY3JlYXRlTGVhZ3VlKHNlYXNvbilcXFwiPkNyZWF0ZSBMZWFndWU8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICA8bGk+PGEgbmctY2xpY2s9XFxcImZhcSgpXFxcIj5GQVE8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICA8bGkgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJkcm9wZG93bi10b2dnbGVcXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWNvZyBmYS1mdyBzZXR0aW5ncy1pY29uXFxcIiB0aXRsZT1cXFwiVXNlciBTZXR0aW5nc1xcXCI+PC9pPiA8YiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvYj48L2E+XFxuXCIgK1xuICAgIFwiICAgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGk+PGEgbmctY2xpY2s9XFxcImNvbnRhY3RVcygpXFxcIj5Db250YWN0IFVzPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsaSBjbGFzcz1cXFwiZGl2aWRlclxcXCI+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxpPjxhIG5nLWNsaWNrPVxcXCJ1c2VyUHJvZmlsZSgpXFxcIj5Vc2VyIFByb2ZpbGU8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxpPjxhIG5nLWNsaWNrPVxcXCJzaWdub3V0KClcXFwiPlNpZ24gT3V0PC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L3VsPlxcblwiICtcbiAgICBcIiAgICAgIDwvbGk+XFxuXCIgK1xuICAgIFwiICAgIDwvdWw+XFxuXCIgK1xuICAgIFwiICAgIDx1bCBuZy1zaG93PVxcXCIhdXNlckRhdGEudXNlci5sb2FkZWRcXFwiIGNsYXNzPVxcXCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsaT48YSBuZy1jbGljaz1cXFwiZmFxKClcXFwiPkZBUTwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgIDxsaT48YSBuZy1jbGljaz1cXFwicmVnaXN0ZXIoKVxcXCI+UmVnaXN0ZXI8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICA8bGkgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxhIGNsYXNzPVxcXCJkcm9wZG93bi10b2dnbGVcXFwiIGhyZWY9XFxcIiNcXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCI+U2lnbiBJbjwvc3Ryb25nPjwvYT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnUgcGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlubGluZS1zaWduaW4tZm9ybSBwYW5lbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8Zm9ybSBuYW1lPVxcXCJpbmxpbmVTaWduaW5Gb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBuZy1zdWJtaXQ9XFxcInNpZ25pbihjcmVkZW50aWFscyk7ICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWVudmVsb3BlIGZhLWZ3XFxcIj48L2k+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgc3R5bGU9XFxcImN1cnNvcjphdXRvO1xcXCIgcGxhY2Vob2xkZXI9XFxcIkVtYWlsXFxcIiBuZy1tb2RlbD1cXFwiY3JlZGVudGlhbHMuZW1haWxcXFwiIG5nLWNsaWNrPVxcXCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XFxcIiBhdXRvZm9jdXMgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWtleSBmYS1md1xcXCI+PC9pPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHN0eWxlPVxcXCJjdXJzb3I6YXV0bztcXFwiIHBsYWNlaG9sZGVyPVxcXCJQYXNzd29yZFxcXCIgbmctbW9kZWw9XFxcImNyZWRlbnRpYWxzLnBhc3N3b3JkXFxcIiBuZy1jbGljaz1cXFwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8ZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiZm9yZ290LXBhc3N3b3JkIGJ0biBidG4tbGluayBwdWxsLWxlZnRcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCIgbmctY2xpY2s9XFxcInJlc2V0UGFzc3dvcmQoKVxcXCI+Rm9yZ290IFBhc3N3b3JkPzwvYT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJzaWduLWluLWJ0biBidG4gYnRuLXByaW1hcnkgcHVsbC1yaWdodFxcXCIgbmctZGlzYWJsZWQ9XFxcImlubGluZVNpZ25pbkZvcm0uJGludmFsaWRcXFwiPlNpZ24gaW48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cXFwiY2xlYXI6IGJvdGg7XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxocj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJlZ2lzdGVyXFxcIj48YSBuZy1jbGljaz1cXFwicmVnaXN0ZXIoKVxcXCI+RG9uJ3QgaGF2ZSBhbiBhY2NvdW50PyA8c3Ryb25nPlJlZ2lzdGVyPC9zdHJvbmc+PC9hPjwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDwvZm9ybT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2xpPlxcblwiICtcbiAgICBcIiAgICA8L3VsPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcImNvbW1vbi9tb2R1bGVzL21lc3NhZ2UvbWVzc2FnZS50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcImNvbW1vbi9tb2R1bGVzL21lc3NhZ2UvbWVzc2FnZS50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGlzbWlzc2FibGUgYWxlcnQte3ttZXNzYWdlRGF0YS5tZXNzYWdlLnR5cGV9fVxcXCIgbmctc2hvdz1cXFwibWVzc2FnZURhdGEubWVzc2FnZS5sb2FkZWRcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJhbGVydFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIG5nLWNsaWNrPVxcXCJkaXNtaXNzTWVzc2FnZShtZXNzYWdlRGF0YSlcXFwiPiZ0aW1lczs8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIHt7bWVzc2FnZURhdGEubWVzc2FnZS5jb250ZW50fX1cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwiY29tbW9uL3RlbXBsYXRlcy9tYXN0ZXIudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJjb21tb24vdGVtcGxhdGVzL21hc3Rlci50cGwuaHRtbFwiLFxuICAgIFwiPCEtLSBIZWFkZXIgLS0+XFxuXCIgK1xuICAgIFwiPG5hdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1pbnZlcnNlXFxcIiB1aS12aWV3PVxcXCJoZWFkZXJcXFwiPjwvbmF2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiICA8IS0tIE1lc3NhZ2UgLS0+XFxuXCIgK1xuICAgIFwiICA8ZGl2IHVpLXZpZXc9XFxcIm1lc3NhZ2VcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgPCEtLSBDb250ZW50IC0tPlxcblwiICtcbiAgICBcIiAgPGRpdiB1aS12aWV3PVxcXCJjb250ZW50XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8IS0tIEZvb3RlciAtLT5cXG5cIiArXG4gICAgXCI8Zm9vdGVyIGNsYXNzPVxcXCJmb290ZXJcXFwiIHVpLXZpZXc9XFxcImZvb3RlclxcXCI+PC9mb290ZXI+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9hZG1pbi9hZG1pbi50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9hZG1pbi9hZG1pbi50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiB1aS12aWV3PVxcXCJhZG1pbkNvbnRlbnRcXFwiIGNsYXNzPVxcXCJhZG1pbi1jb250ZW50XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2FkbWluL2dhbWVzL2FkbWluLmdhbWVzLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2FkbWluL2dhbWVzL2FkbWluLmdhbWVzLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJnYW1lcy1oZWFkZXItcm93IHJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOSBjb2wtbWQtOVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxoMz5HYW1lcyBmb3Ige3t3ZWVrRGF0YS5kaXNwbGF5fX0gPGJyPlxcblwiICtcbiAgICBcIiAgICA8c21hbGw+Q29tcGxldGU6IHt7d2Vla0RhdGEuY29tcGxldGV9fTwvc21hbGw+PC9oMz5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTMgY29sLW1kLTNcXFwiPlxcblwiICtcbiAgICBcIiAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNvbXBsZXRlLXdlZWstYnRuIGJ0biBidG4tcHJpbWFyeSBidG4tc21cXFwiIG5nLWNsaWNrPVxcXCJjb21wbGV0ZVdlZWsod2Vla0RhdGEpXFxcIj5Db21wbGV0ZSBXZWVrPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJ3ZWVrLWdhbWVzIGxpc3QtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgPGEgbmctcmVwZWF0PVxcXCJnYW1lIGluIGdhbWVzXFxcIiBuZy1jbGljaz1cXFwiZWRpdEdhbWUoZ2FtZSlcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImdhbWUtZGlzcGxheS1uYW1lIGNvbC1zbS02IGNvbC1tZC02XFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtY2hlY2sgZmEtZndcXFwiIG5nLXNob3c9XFxcImdhbWUuY29tcGxldGUgPT09IHRydWVcXFwiIHRpdGxlPVxcXCJQaWNrIGNvcnJlY3RcXFwiPjwvaT4ge3tnYW1lLmRpc3BsYXl9fTwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImdhbWUtc2NvcmUgY29sLXNtLTYgY29sLW1kLTZcXFwiPnt7Z2FtZS5zcXVhZHNbMF0ubmFtZX19OiB7e2dhbWUudmlzaXRpbmdfc3F1YWRfc2NvcmV9fSB8IHt7Z2FtZS5zcXVhZHNbMV0ubmFtZX19OiB7e2dhbWUuaG9tZV9zcXVhZF9zY29yZX19PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9hPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvYWRtaW4vZ2FtZXMvZWRpdC9nYW1lcy5lZGl0LnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2FkbWluL2dhbWVzL2VkaXQvZ2FtZXMuZWRpdC50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+RWRpdCBHYW1lPC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxoND57e2dhbWVEYXRhLmRpc3BsYXl9fTwvaDQ+XFxuXCIgK1xuICAgIFwiICA8Zm9ybSBzdHlsZT1cXFwicGFkZGluZzogMTBweDtcXFwiIG5hbWU9XFxcImVkaXRHYW1lRm9ybVxcXCIgY2xhc3M9XFxcImVkaXQtZ2FtZS1mb3JtIGZvcm0taG9yaXpvbnRhbFxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZT5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGZvcj1cXFwidmlzaXRvclNjb3JlXFxcIiBjbGFzcz1cXFwiY29sLXNtLTYgY29udHJvbC1sYWJlbFxcXCI+e3tnYW1lRGF0YS5zcXVhZHNbMF0ubmFtZX19IFNjb3JlOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGlucHV0IGlkPVxcXCJ2aXNpdG9yU2NvcmVcXFwiIG5hbWU9XFxcInZpc2l0b3JTY29yZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcImdhbWVEYXRhLnZpc2l0aW5nX3NxdWFkX3Njb3JlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBmb3I9XFxcImhvbWVTY29yZVxcXCIgY2xhc3M9XFxcImNvbC1zbS02IGNvbnRyb2wtbGFiZWxcXFwiPnt7Z2FtZURhdGEuc3F1YWRzWzFdLm5hbWV9fSBTY29yZTo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxpbnB1dCBpZD1cXFwiaG9tZVNjb3JlXFxcIiBuYW1lPVxcXCJob21lU2NvcmVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJnYW1lRGF0YS5ob21lX3NxdWFkX3Njb3JlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIG5nLW1vZGVsPVxcXCJnYW1lRGF0YS5jb21wbGV0ZVxcXCI+IGNvbXBsZXRlZDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9mb3JtPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+Q2FuY2VsPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG5nLWNsaWNrPVxcXCJlZGl0R2FtZShnYW1lRGF0YSlcXFwiPlVwZGF0ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2NvbnRhY3QvbGVhZ3VlLmNvbnRhY3QudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2NvbnRhY3QvbGVhZ3VlLmNvbnRhY3QudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkNvbnRhY3QgQ29tbWlzaDwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8Zm9ybSBuYW1lPVxcXCJjb250YWN0Rm9ybVxcXCIgY2xhc3M9XFxcImNvbnRhY3QtZm9ybSBmb3JtLWhvcml6b250YWxcXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKGNvbnRhY3RGb3JtLm1lc3NhZ2UpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IoY29udGFjdEZvcm0ubWVzc2FnZSl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgZm9yPVxcXCJtZXNzYWdlXFxcIiBjbGFzcz1cXFwiY29sLXNtLTIgY29udHJvbC1sYWJlbFxcXCI+TWVzc2FnZTo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8dGV4dGFyZWEgaWQ9XFxcIm1lc3NhZ2VcXFwiIG5hbWU9XFxcIm1lc3NhZ2VcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJTZW5kIGEgZGlyZWN0IG1lc3NhZ2UgdG8gdGhlIGNvbW1pc2guLi5cXFwiIHJvd3M9XFxcIjNcXFwiIG1heGxlbmd0aD1cXFwiMjAwXFxcIiBuZy1tb2RlbD1cXFwiY29tbWlzaE1lc3NhZ2VcXFwiIHJlcXVpcmVkPjwvdGV4dGFyZWE+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGNvbnRhY3RGb3JtLm1lc3NhZ2UsICdyZXF1aXJlZCcpXFxcIj5SZXF1aXJlZDwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGNvbnRhY3RGb3JtLm1lc3NhZ2UsICdtYXhsZW5ndGgnKVxcXCI+VG9vIExvbmc8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IoY29udGFjdEZvcm0ubWVzc2FnZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctZGlzYWJsZWQ9XFxcImNvbnRhY3RGb3JtLiRwcmlzdGluZSB8fCBjb250YWN0Rm9ybS4kaW52YWxpZFxcXCIgbmctY2xpY2s9XFxcImNvbnRhY3RDb21taXNoKGxlYWd1ZURhdGEsIGNvbW1pc2hNZXNzYWdlKVxcXCI+U2VuZDwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2VkaXQvbGVhZ3VlLmVkaXQudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2VkaXQvbGVhZ3VlLmVkaXQudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkVkaXQgTGVhZ3VlPC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcIndlbGwgd2VsbC1zbVxcXCI+PHN0cm9uZz5Ob3RlOjwvc3Ryb25nPiA8ZW0+UHVibGljIGxlYWd1ZXMgYWxsb3cgYW55b25lIHRvIGpvaW4uIFByaXZhdGUgbGVhZ3VlcyByZXF1aXJlIGFuIGludml0YXRpb24gZnJvbSB0aGUgY29tbWlzaC48L2VtPjwvZGl2PlxcblwiICtcbiAgICBcIiAgPGZvcm0gbmFtZT1cXFwibGVhZ3VlRm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZT5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJyYWRpby1pbmxpbmVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJyYWRpb1xcXCIgbmctbW9kZWw9XFxcImxlYWd1ZURhdGEucHVibGljXFxcIiBuZy12YWx1ZT1cXFwidHJ1ZVxcXCI+IFB1YmxpYyBMZWFndWVcXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJyYWRpby1pbmxpbmVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJyYWRpb1xcXCIgbmctbW9kZWw9XFxcImxlYWd1ZURhdGEucHVibGljXFxcIiBuZy12YWx1ZT1cXFwiZmFsc2VcXFwiPiBQcml2YXRlIExlYWd1ZVxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IobGVhZ3VlRm9ybS5sZWFndWVOYW1lKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKGxlYWd1ZUZvcm0ubGVhZ3VlTmFtZSl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImxlYWd1ZU5hbWVcXFwiPkxlYWd1ZSBuYW1lOlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGxlYWd1ZUZvcm0ubGVhZ3VlTmFtZSwgJ3JlcXVpcmVkJylcXFwiPlsgUmVxdWlyZWQgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobGVhZ3VlRm9ybS5sZWFndWVOYW1lLCAnbWF4bGVuZ3RoJylcXFwiPlsgVG9vIExvbmcgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpbnB1dCBpZD1cXFwibGVhZ3VlTmFtZVxcXCIgbmFtZT1cXFwibGVhZ3VlTmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcImxlYWd1ZURhdGEubmFtZVxcXCIgbmctbWF4bGVuZ3RoPVxcXCIzMFxcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKGxlYWd1ZUZvcm0ubGVhZ3VlTmFtZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwic3RhcnRXZWVrXFxcIj5TdGFydCB3ZWVrOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzZWxlY3QgaWQ9XFxcInN0YXJ0V2Vla1xcXCIgbmFtZT1cXFwic3RhcnRXZWVrXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1zaG93PVxcXCIhbGVhZ3VlRGF0YS5zdGFydGVkXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5zdGFydF93ZWVrX2lkXFxcIiBuZy1vcHRpb25zPVxcXCJ3ZWVrLmlkIGFzIHdlZWsuZGlzcGxheSBmb3Igd2VlayBpbiB3ZWVrc1xcXCI+PC9zZWxlY3Q+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpbnB1dCBpZD1cXFwic3RhcnRXZWVrRGlzcGxheVxcXCIgbmFtZT1cXFwic3RhcnRXZWVrRGlzcGxheVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctc2hvdz1cXFwibGVhZ3VlRGF0YS5zdGFydGVkXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5zdGFydF93ZWVrX2Rpc3BsYXlcXFwiIG5nLWRpc2FibGVkPVxcXCJ0cnVlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKGxlYWd1ZUZvcm0ubWF4VGVhbXMpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IobGVhZ3VlRm9ybS5tYXhUZWFtcyl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcIm1heFRlYW1zXFxcIj5Ib3cgbWFueSB0aW1lcyBjYW4gYSB1c2VyIGpvaW46XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobGVhZ3VlRm9ybS5tYXhUZWFtcywgJ3JlcXVpcmVkJylcXFwiPlsgTnVtYmVyIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGxlYWd1ZUZvcm0ubWF4VGVhbXMsICdtaW4nKVxcXCI+WyAxIC0gMTAgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobGVhZ3VlRm9ybS5tYXhUZWFtcywgJ21heCcpXFxcIj5bIDEgLSAxMCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJtYXhUZWFtc1xcXCIgbmFtZT1cXFwibWF4VGVhbXNcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgcGxhY2Vob2xkZXI9XFxcIkJldHdlZW4gMSBhbmQgMTBcXFwiIG1pbj1cXFwiMVxcXCIgbWF4PVxcXCIxMFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcImxlYWd1ZURhdGEubWF4X3RlYW1zX3Blcl91c2VyXFxcIiBsb2doLWZvY3VzIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihsZWFndWVGb3JtLm1heFRlYW1zKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJtZXNzYWdlXFxcIj5NZXNzYWdlXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsPlsgT3B0aW9uYWwgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cXFwibWVzc2FnZVxcXCIgbmFtZT1cXFwibWVzc2FnZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVudGVyIGEgbWVzc2FnZSBmb3IgeW91IGxlYWd1ZSBoZXJlLi4uXFxcIiByb3dzPVxcXCIyXFxcIiBtYXhsZW5ndGg9XFxcIjIwMFxcXCIgbmctbW9kZWw9XFxcImxlYWd1ZURhdGEubWVzc2FnZVxcXCI+PC90ZXh0YXJlYT5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZm9ybT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwibGVhZ3VlRm9ybS4kcHJpc3RpbmUgfHwgbGVhZ3VlRm9ybS4kaW52YWxpZFxcXCIgbmctY2xpY2s9XFxcInVwZGF0ZUxlYWd1ZShsZWFndWVEYXRhKVxcXCI+VXBkYXRlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlL2xlYWd1ZS5pbnZpdGUudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2ludml0ZS9sZWFndWUuaW52aXRlLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5JbnZpdGUgRnJpZW5kPC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxmb3JtIG5hbWU9XFxcImludml0ZUZvcm1cXFwiIGNsYXNzPVxcXCJpbnZpdGUtZm9ybSBmb3JtLWhvcml6b250YWxcXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKGludml0ZUZvcm0uZW1haWwpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IoaW52aXRlRm9ybS5lbWFpbCl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgZm9yPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPkVtYWlsOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxpbnB1dCBpZD1cXFwiZW1haWxcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiB0eXBlPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVudGVyIGVtYWlsXFxcIiBuZy1tb2RlbD1cXFwiaW52aXRhdGlvbi5lbWFpbFxcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGludml0ZUZvcm0uZW1haWwsICdyZXF1aXJlZCcpXFxcIj5SZXF1aXJlZDwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGludml0ZUZvcm0uZW1haWwsICdlbWFpbCcpXFxcIj5JbnZhbGlkIGVtYWlsPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKGludml0ZUZvcm0uZW1haWwpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihpbnZpdGVGb3JtLm1lc3NhZ2UpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IoaW52aXRlRm9ybS5tZXNzYWdlKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBmb3I9XFxcIm1lc3NhZ2VcXFwiIGNsYXNzPVxcXCJjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIj5NZXNzYWdlOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDx0ZXh0YXJlYSBpZD1cXFwibWVzc2FnZVxcXCIgbmFtZT1cXFwibWVzc2FnZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVudGVyIGEgb3B0aW9uYWwgbWVzc2FnZSB0byBkZWxpdmVyIHdpdGggdGhlIGludml0YXRpb24uLi5cXFwiIHJvd3M9XFxcIjNcXFwiIG1heGxlbmd0aD1cXFwiMjAwXFxcIiBuZy1tb2RlbD1cXFwiaW52aXRhdGlvbi5tZXNzYWdlXFxcIj48L3RleHRhcmVhPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJpbnB1dC1lcnJvclxcXCIgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihpbnZpdGVGb3JtLm1lc3NhZ2UsICdtYXhsZW5ndGgnKVxcXCI+VG9vIExvbmc8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IoaW52aXRlRm9ybS5tZXNzYWdlKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZm9ybT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwiaW52aXRlRm9ybS4kcHJpc3RpbmUgfHwgaW52aXRlRm9ybS4kaW52YWxpZFxcXCIgbmctY2xpY2s9XFxcImludml0ZShpbnZpdGF0aW9uKVxcXCI+SW52aXRlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlL3JlcXVlc3QvbGVhZ3VlLmludml0ZS5yZXF1ZXN0LnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9pbnZpdGUvcmVxdWVzdC9sZWFndWUuaW52aXRlLnJlcXVlc3QudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPlJlcXVlc3QgSW52aXRlPC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxmb3JtIG5hbWU9XFxcInJlcXVlc3RJbnZpdGVGb3JtXFxcIiBjbGFzcz1cXFwicmVxdWVzdC1pbnZpdGUtZm9ybSBmb3JtLWhvcml6b250YWxcXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKHJlcXVlc3RJbnZpdGVGb3JtLmVtYWlsKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKHJlcXVlc3RJbnZpdGVGb3JtLmVtYWlsKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBmb3I9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiY29sLXNtLTIgY29udHJvbC1sYWJlbFxcXCI+Rm9yOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxpbnB1dCBpZD1cXFwiZW1haWxcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiB0eXBlPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVudGVyIGVtYWlsXFxcIiBuZy1tb2RlbD1cXFwiaW52aXRhdGlvbi5lbWFpbFxcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKHJlcXVlc3RJbnZpdGVGb3JtLmVtYWlsLCAncmVxdWlyZWQnKVxcXCI+UmVxdWlyZWQ8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJpbnB1dC1lcnJvclxcXCIgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihyZXF1ZXN0SW52aXRlRm9ybS5lbWFpbCwgJ2VtYWlsJylcXFwiPkludmFsaWQgZW1haWw8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IocmVxdWVzdEludml0ZUZvcm0uZW1haWwpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihyZXF1ZXN0SW52aXRlRm9ybS5tZXNzYWdlKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKHJlcXVlc3RJbnZpdGVGb3JtLm1lc3NhZ2UpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGZvcj1cXFwibWVzc2FnZVxcXCIgY2xhc3M9XFxcImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPk1lc3NhZ2U6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPHRleHRhcmVhIGlkPVxcXCJtZXNzYWdlXFxcIiBuYW1lPVxcXCJtZXNzYWdlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgYSBvcHRpb25hbCBtZXNzYWdlIGZvciB0aGUgY29tbWlzaCBvZiB0aGUgbGVhZ3VlLi4uXFxcIiByb3dzPVxcXCIzXFxcIiBtYXhsZW5ndGg9XFxcIjIwMFxcXCIgbmctbW9kZWw9XFxcImludml0YXRpb24ubWVzc2FnZVxcXCI+PC90ZXh0YXJlYT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IocmVxdWVzdEludml0ZUZvcm0ubWVzc2FnZSwgJ21heGxlbmd0aCcpXFxcIj5Ub28gTG9uZzwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihyZXF1ZXN0SW52aXRlRm9ybS5tZXNzYWdlKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZm9ybT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwicmVxdWVzdEludml0ZUZvcm0uJGludmFsaWRcXFwiIG5nLWNsaWNrPVxcXCJyZXF1ZXN0SW52aXRlKGludml0YXRpb24pXFxcIj5SZXF1ZXN0IEludml0ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2pvaW4vbGVhZ3VlLmpvaW4udHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2pvaW4vbGVhZ3VlLmpvaW4udHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkpvaW4gTGVhZ3VlPC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxmb3JtIG5hbWU9XFxcImpvaW5Gb3JtXFxcIiBjbGFzcz1cXFwiam9pbi1mb3JtIGZvcm0taG9yaXpvbnRhbFxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZT5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3Ioam9pbkZvcm0udGVhbU5hbWUpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3Ioam9pbkZvcm0udGVhbU5hbWUpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGZvcj1cXFwidGVhbU5hbWVcXFwiIGNsYXNzPVxcXCJjb2wtc20tNCBjb2wtbWQtNCBjb250cm9sLWxhYmVsXFxcIj5HaXZlIHlvdXIgdGVhbSBhIG5hbWU6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOCBjb2wtbWQtOFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8aW5wdXQgaWQ9XFxcInRlYW1OYW1lXFxcIiBuYW1lPVxcXCJ0ZWFtTmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVudGVyIG5hbWUuLi5cXFwiIG5nLW1vZGVsPVxcXCJuZXdUZWFtRGF0YS5uYW1lXFxcIiBuZy1tYXhsZW5ndGg9XFxcIjMwXFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3Ioam9pbkZvcm0udGVhbU5hbWUsICdyZXF1aXJlZCcpXFxcIj5SZXF1aXJlZDwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGpvaW5Gb3JtLnRlYW1OYW1lLCAnbWF4bGVuZ3RoJylcXFwiPlRvbyBMb25nPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKGpvaW5Gb3JtLnRlYW1OYW1lKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZm9ybT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwiam9pbkZvcm0uJHByaXN0aW5lIHx8IGpvaW5Gb3JtLiRpbnZhbGlkXFxcIiBuZy1jbGljaz1cXFwiam9pbkxlYWd1ZShuZXdUZWFtRGF0YSlcXFwiPkpvaW48L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9sZWFndWUudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2xlYWd1ZS50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiB1aS12aWV3PVxcXCJsZWFndWVDb250ZW50XFxcIiBjbGFzcz1cXFwibGVhZ3VlLWNvbnRlbnRcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL21lc3NhZ2UvbGVhZ3VlLm1lc3NhZ2UudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL21lc3NhZ2UvbGVhZ3VlLm1lc3NhZ2UudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPlVwZGF0ZSBNZXNzYWdlPC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxmb3JtIG5hbWU9XFxcIm1lc3NhZ2VGb3JtXFxcIiBjbGFzcz1cXFwibGVhZ3VlLW1lc3NhZ2UtZm9ybSBmb3JtLWhvcml6b250YWxcXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKG1lc3NhZ2VGb3JtLm1lc3NhZ2UpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IobWVzc2FnZUZvcm0ubWVzc2FnZSl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgZm9yPVxcXCJtZXNzYWdlXFxcIiBjbGFzcz1cXFwiY29sLXNtLTQgY29udHJvbC1sYWJlbFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICBMZWFndWUgTWVzc2FnZTogPGJyPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJpbnB1dC1lcnJvclxcXCIgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihtZXNzYWdlRm9ybS5tZXNzYWdlLCAnbWF4bGVuZ3RoJylcXFwiPlsgVG9vIExvbmcgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8dGV4dGFyZWEgaWQ9XFxcIm1lc3NhZ2VcXFwiIG5hbWU9XFxcIm1lc3NhZ2VcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciBhIG1lc3NhZ2UgZm9yIHlvdXIgbGVhZ3VlIHRvIHNlZSBvciBsZWF2ZSBpdCBibGFuay5cXFwiIHJvd3M9XFxcIjNcXFwiIG5nLW1heGxlbmd0aD1cXFwiMjAwXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5tZXNzYWdlXFxcIj48L3RleHRhcmVhPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZW1haWwtbGVhZ3VlLW1lc3NhZ2UtY2hlY2tib3hcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBuZy1tb2RlbD1cXFwibWVzc2FnZU9wdGlvbnMuc2VuZEVtYWlsXFxcIj4gZW1haWwgbWVzc2FnZSB0byBsZWFndWU8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihtZXNzYWdlRm9ybS5tZXNzYWdlKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZm9ybT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwibWVzc2FnZUZvcm0uJHByaXN0aW5lIHx8IG1lc3NhZ2VGb3JtLiRpbnZhbGlkXFxcIiBuZy1jbGljaz1cXFwidXBkYXRlTWVzc2FnZShsZWFndWVEYXRhLCBtZXNzYWdlT3B0aW9ucy5zZW5kRW1haWwpXFxcIj5VcGRhdGU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9uZXcvbGVhZ3VlLm5ldy50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbmV3L2xlYWd1ZS5uZXcudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkNyZWF0ZSBMZWFndWU8L2gzPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwid2VsbCB3ZWxsLXNtXFxcIj48c3Ryb25nPk5vdGU6PC9zdHJvbmc+IDxlbT5QdWJsaWMgbGVhZ3VlcyBhbGxvdyBhbnlvbmUgdG8gam9pbi4gUHJpdmF0ZSBsZWFndWVzIHJlcXVpcmUgYW4gaW52aXRhdGlvbiBmcm9tIHRoZSBjb21taXNoLjwvZW0+PC9kaXY+XFxuXCIgK1xuICAgIFwiICA8Zm9ybSBuYW1lPVxcXCJuZXdMZWFndWVGb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcInJhZGlvLWlubGluZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInJhZGlvXFxcIiBuZy1tb2RlbD1cXFwibmV3TGVhZ3VlRGF0YS5wdWJsaWNcXFwiIG5nLWNoZWNrZWQ9XFxcInRydWVcXFwiIG5nLXZhbHVlPVxcXCJ0cnVlXFxcIj4gUHVibGljIExlYWd1ZVxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcInJhZGlvLWlubGluZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInJhZGlvXFxcIiBuZy1tb2RlbD1cXFwibmV3TGVhZ3VlRGF0YS5wdWJsaWNcXFwiIG5nLXZhbHVlPVxcXCJmYWxzZVxcXCI+IFByaXZhdGUgTGVhZ3VlXFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihuZXdMZWFndWVGb3JtLmxlYWd1ZU5hbWUpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IobmV3TGVhZ3VlRm9ybS5sZWFndWVOYW1lKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwibGVhZ3VlTmFtZVxcXCI+TGVhZ3VlIG5hbWU6XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobmV3TGVhZ3VlRm9ybS5sZWFndWVOYW1lLCAncmVxdWlyZWQnKVxcXCI+WyBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihuZXdMZWFndWVGb3JtLmxlYWd1ZU5hbWUsICdtYXhsZW5ndGgnKVxcXCI+WyBUb28gTG9uZyBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJsZWFndWVOYW1lXFxcIiBuYW1lPVxcXCJsZWFndWVOYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwibmV3TGVhZ3VlRGF0YS5uYW1lXFxcIiBuZy1tYXhsZW5ndGg9XFxcIjMwXFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IobmV3TGVhZ3VlRm9ybS5sZWFndWVOYW1lKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJsZWFndWUtbmlja25hbWUgcm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwibmlja25hbWVcXFwiPk5pY2tuYW1lPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJuaWNrbmFtZVxcXCIgbmFtZT1cXFwibmlja25hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJuZXdMZWFndWVEYXRhLm5pY2tuYW1lXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwic3RhcnRXZWVrXFxcIj5TdGFydCB3ZWVrOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzZWxlY3QgaWQ9XFxcInN0YXJ0V2Vla1xcXCIgbmFtZT1cXFwic3RhcnRXZWVrXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwibmV3TGVhZ3VlRGF0YS5zdGFydF93ZWVrX2lkXFxcIiBuZy1vcHRpb25zPVxcXCJ3ZWVrLmlkIGFzIHdlZWsuZGlzcGxheSBmb3Igd2VlayBpbiB3ZWVrc1xcXCI+PC9zZWxlY3Q+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihuZXdMZWFndWVGb3JtLm1heFRlYW1zKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKG5ld0xlYWd1ZUZvcm0ubWF4VGVhbXMpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJtYXhUZWFtc1xcXCI+SG93IG1hbnkgdGltZXMgY2FuIGEgdXNlciBqb2luOlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld0xlYWd1ZUZvcm0ubWF4VGVhbXMsICdyZXF1aXJlZCcpXFxcIj5bIE51bWJlciBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihuZXdMZWFndWVGb3JtLm1heFRlYW1zLCAnbWluJylcXFwiPlsgMSAtIDEwIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld0xlYWd1ZUZvcm0ubWF4VGVhbXMsICdtYXgnKVxcXCI+WyAxIC0gMTAgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpbnB1dCBpZD1cXFwibWF4VGVhbXNcXFwiIG5hbWU9XFxcIm1heFRlYW1zXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIHBsYWNlaG9sZGVyPVxcXCJCZXR3ZWVuIDEgYW5kIDEwXFxcIiBtaW49XFxcIjFcXFwiIG1heD1cXFwiMTBcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJuZXdMZWFndWVEYXRhLm1heF90ZWFtc19wZXJfdXNlclxcXCIgbG9naC1mb2N1cyByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IobmV3TGVhZ3VlRm9ybS5tYXhUZWFtcylcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwibWVzc2FnZVxcXCI+TWVzc2FnZSBbIE9wdGlvbmFsIF08L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8dGV4dGFyZWEgaWQ9XFxcIm1lc3NhZ2VcXFwiIG5hbWU9XFxcIm1lc3NhZ2VcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciBhIG1lc3NhZ2UgZm9yIHlvdXIgbGVhZ3VlIGhlcmUuIFlvdSBjYW4gY2hhbmdlIGl0IGF0IGFueSB0aW1lLlxcXCIgcm93cz1cXFwiMlxcXCIgbWF4bGVuZ3RoPVxcXCIyMDBcXFwiIG5nLW1vZGVsPVxcXCJuZXdMZWFndWVEYXRhLm1lc3NhZ2VcXFwiPjwvdGV4dGFyZWE+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctZGlzYWJsZWQ9XFxcIm5ld0xlYWd1ZUZvcm0uJGludmFsaWRcXFwiIG5nLWNsaWNrPVxcXCJjcmVhdGVMZWFndWUobmV3TGVhZ3VlRGF0YSlcXFwiPkNyZWF0ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL3ZpZXcvbGVhZ3VlLnZpZXcudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL3ZpZXcvbGVhZ3VlLnZpZXcudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcXFwiIG5nLXNob3c9XFxcImxlYWd1ZURhdGEuc3RhcnRfd2Vla19jb21wbGV0ZSAmJiBhbGl2ZVRlYW1zLmxlbmd0aCA9PSAwXFxcIj5Pb3BzLiBBbGwgb2YgdGhlIHRlYW1zIGFyZSBub3cgZGVhZC4gQ2hlY2sgdGhlICdEZWFkIFRlYW1zJyB0YWIgdG8gc2VlIHRoZSBmaW5hbCByZXN1bHRzLjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImhlYWRlci1yb3cgcm93XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS03IGNvbC1tZC03XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGgzIGNsYXNzPVxcXCJsZWFndWUtbmFtZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXRpbWVzXFxcIiB0aXRsZT1cXFwiQ2xvc2VkIGxlYWd1ZVxcXCIgbmctc2hvdz1cXFwiIWxlYWd1ZURhdGEub3BlblxcXCI+PC9pPlxcblwiICtcbiAgICBcIiAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1sb2NrXFxcIiB0aXRsZT1cXFwiUHJpdmF0ZSBsZWFndWVcXFwiIG5nLXNob3c9XFxcImxlYWd1ZURhdGEub3BlbiAmJiAhbGVhZ3VlRGF0YS5wdWJsaWNcXFwiPjwvaT5cXG5cIiArXG4gICAgXCIgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdW5sb2NrXFxcIiB0aXRsZT1cXFwiUHVibGljIGxlYWd1ZVxcXCIgbmctc2hvdz1cXFwibGVhZ3VlRGF0YS5vcGVuICYmIGxlYWd1ZURhdGEucHVibGljXFxcIj48L2k+XFxuXCIgK1xuICAgIFwiICAgICAge3tsZWFndWVEYXRhLm5hbWV9fSA8c21hbGwgY2xhc3M9XFxcImVkaXQtbGVhZ3VlXFxcIj48YSBuZy1zaG93PVxcXCJpc0NvbW1pc2gobGVhZ3VlRGF0YSkgJiYgIWxlYWd1ZURhdGEuc3RhcnRfd2Vla19jb21wbGV0ZVxcXCIgbmctY2xpY2s9XFxcImVkaXRMZWFndWUobGVhZ3VlRGF0YSlcXFwiPlsgZWRpdCBdPC9hPjwvc21hbGw+IDxicj5cXG5cIiArXG4gICAgXCIgICAgICA8c21hbGw+e3tzdGFydHMobGVhZ3VlRGF0YSl9fTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgPHNtYWxsIGNsYXNzPVxcXCJjbG9zZWQtdGV4dFxcXCIgbmctc2hvdz1cXFwiIWxlYWd1ZURhdGEub3BlblxcXCI+Q0xPU0VEIFRPIE5FVyBURUFNUzwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgIDwvaDM+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS01IGNvbC1tZC01XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJqb2luLWJ0biBidG4gYnRuLXByaW1hcnkgYnRuLXNtXFxcIiBuZy1zaG93PVxcXCIhbGVhZ3VlRGF0YS5zdGFydF93ZWVrX2NvbXBsZXRlXFxcIiBuZy1jbGljaz1cXFwiam9pbkxlYWd1ZShsZWFndWVEYXRhKVxcXCI+Sm9pbjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImludml0ZS1idG4gYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVxcXCIgbmctc2hvdz1cXFwiIWxlYWd1ZURhdGEuc3RhcnRfd2Vla19jb21wbGV0ZSAmJiAobGVhZ3VlRGF0YS5wdWJsaWMgfHwgaXNDb21taXNoKGxlYWd1ZURhdGEpKVxcXCIgbmctY2xpY2s9XFxcImludml0ZShsZWFndWVEYXRhLmlkKVxcXCI+SW52aXRlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwicmVxdWVzdC1pbnZpdGUtYnRuIGJ0biBidG4tcHJpbWFyeSBidG4tc21cXFwiIG5nLXNob3c9XFxcIiFsZWFndWVEYXRhLnN0YXJ0X3dlZWtfY29tcGxldGUgJiYgIWxlYWd1ZURhdGEucHVibGljICYmICFpc0NvbW1pc2gobGVhZ3VlRGF0YSlcXFwiIG5nLWNsaWNrPVxcXCJyZXF1ZXN0SW52aXRlKGxlYWd1ZURhdGEpXFxcIj5SZXF1ZXN0IEludml0ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXAgbGVhZ3VlLWFjdGlvbnNcXFwiIG5nLXNob3c9XFxcImhhc1RlYW1JbkxlYWd1ZSgpIHx8IGlzQ29tbWlzaChsZWFndWVEYXRhKVxcXCIgZHJvcGRvd24gaXMtb3Blbj1cXFwiY29tbWlzaC5pc29wZW5cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwibGVhZ3VlLWFjdGlvbnMtYnRuIGJ0biBidG4tZGVmYXVsdCBidG4tc20gZHJvcGRvd24tdG9nZ2xlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzdHJvbmc+QWN0aW9uczwvc3Ryb25nPiA8c3BhbiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnUgbGVhZ3VlLWFjdGlvbnMtbWVudVxcXCIgcm9sZT1cXFwibWVudVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGkgbmctc2hvdz1cXFwiIWlzQ29tbWlzaChsZWFndWVEYXRhKVxcXCI+PGEgbmctY2xpY2s9XFxcImNvbnRhY3RDb21taXNoKGxlYWd1ZURhdGEpXFxcIj5Db250YWN0IHRoZSBjb21taXNoPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGk+PGEgbmctY2xpY2s9XFxcInJlcG9ydEFidXNlKClcXFwiPlJlcG9ydCBhYnVzZTwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgICAgPGxpPjxhIG5nLWNsaWNrPVxcXCJyZXBvcnRBYnVzZSgpXFxcIj5SZXBvcnQgYSBidWc8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaSBuZy1zaG93PVxcXCJpc0NvbW1pc2gobGVhZ3VlRGF0YSlcXFwiIGNsYXNzPVxcXCJkaXZpZGVyXFxcIj48L2xpPlxcblwiICtcbiAgICBcIiAgICAgICAgPGxpPjxhIG5nLXNob3c9XFxcImlzQ29tbWlzaChsZWFndWVEYXRhKSAmJiAhbGVhZ3VlRGF0YS5zdGFydF93ZWVrX2NvbXBsZXRlXFxcIiBuZy1jbGljaz1cXFwiZWRpdExlYWd1ZShsZWFndWVEYXRhKVxcXCI+RWRpdCBsZWFndWU8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaT48YSBuZy1zaG93PVxcXCJpc0NvbW1pc2gobGVhZ3VlRGF0YSlcXFwiIG5nLWNsaWNrPVxcXCJ1cGRhdGVNZXNzYWdlKGxlYWd1ZURhdGEpXFxcIj5FZGl0IGxlYWd1ZSBtZXNzYWdlPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgPC91bD5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJsZWFndWUtbWVzc2FnZSB3ZWxsIHdlbGwtc21cXFwiIG5nLXNob3c9XFxcIiFsZWFndWVEYXRhLnN0YXJ0X3dlZWtfY29tcGxldGUgfHwgaGFzVGVhbUluTGVhZ3VlKCkgfHwgaXNDb21taXNoKGxlYWd1ZURhdGEpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtY29tbWVudCBmYS1md1xcXCIgdGl0bGU9XFxcIk1lc3NhZ2UgZm9yIHRoZSBsZWFndWVcXFwiPjwvaT4gPHN0cm9uZz5UaGUgY29tbWlzaCBzYXlzOjwvc3Ryb25nPiA8cCBjbGFzcz1cXFwibGVhZ3VlLW1lc3NhZ2UtdGV4dFxcXCIgbmctc2hvdz1cXFwiIWxlYWd1ZURhdGEubWVzc2FnZSB8fCBsZWFndWVEYXRhLm1lc3NhZ2UubGVuZ3RoID09IDBcXFwiPk5vdGhpbmc8L3A+PHAgY2xhc3M9XFxcImxlYWd1ZS1tZXNzYWdlLXRleHRcXFwiIG5nLXNob3c9XFxcImxlYWd1ZURhdGEubWVzc2FnZS5sZW5ndGggPiAwXFxcIiBuZy1iaW5kLWh0bWw9XFxcImxlYWd1ZURhdGEubWVzc2FnZSB8IGxpbmt5OidfYmxhbmsnXFxcIj48L3A+IDxhIG5nLXNob3c9XFxcImlzQ29tbWlzaChsZWFndWVEYXRhKVxcXCIgbmctY2xpY2s9XFxcInVwZGF0ZU1lc3NhZ2UobGVhZ3VlRGF0YSlcXFwiPlsgZWRpdCBdPC9hPjxhIG5nLXNob3c9XFxcIiFpc0NvbW1pc2gobGVhZ3VlRGF0YSkgJiYgaGFzVGVhbUluTGVhZ3VlKClcXFwiIG5nLWNsaWNrPVxcXCJjb250YWN0Q29tbWlzaChsZWFndWVEYXRhKVxcXCI+WyBjb250YWN0IGNvbW1pc2ggXTwvYT48L2Rpdj5cXG5cIiArXG4gICAgXCI8aHI+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS03IGNvbC1tZC03XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGg0PlRlYW1zICh7e2xlYWd1ZURhdGEudGVhbV9jb3VudH19KSA8c21hbGw+PGEgbmctc2hvdz1cXFwiIWxlYWd1ZURhdGEuc3RhcnRfd2Vla19jb21wbGV0ZSAmJiAhaXNDb21taXNoKGxlYWd1ZURhdGEpXFxcIiBuZy1jbGljaz1cXFwiam9pbkxlYWd1ZShsZWFndWVEYXRhKVxcXCI+WyBqb2luIHVwIHRvIHt7bGVhZ3VlRGF0YS5tYXhfdGVhbXNfcGVyX3VzZXJ9fSB0aW1lcyBdPC9hPiA8YSBuZy1zaG93PVxcXCJpc0NvbW1pc2gobGVhZ3VlRGF0YSkgJiYgdGVhbU9wdGlvbnMuaW5hY3RpdmUgPT0gdHJ1ZVxcXCIgbmctY2xpY2s9XFxcInRlYW1PcHRpb25zLmluYWN0aXZlID0gZmFsc2VcXFwiPlsgaGlkZSBkZWFjdGl2YXRlZDxzcGFuIGNsYXNzPVxcXCJ0ZWFtc1xcXCI+IHRlYW1zPC9zcGFuPiBdPC9hPjxhIG5nLXNob3c9XFxcImlzQ29tbWlzaChsZWFndWVEYXRhKSAmJiB0ZWFtT3B0aW9ucy5pbmFjdGl2ZSA9PSBmYWxzZVxcXCIgbmctY2xpY2s9XFxcInRlYW1PcHRpb25zLmluYWN0aXZlID0gdHJ1ZVxcXCI+WyBzaG93IGRlYWN0aXZhdGVkPHNwYW4gY2xhc3M9XFxcInRlYW1zXFxcIj4gdGVhbXM8L3NwYW4+IF08L2E+PC9zbWFsbD48L2g0PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNSBjb2wtbWQtNVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwIGN1c3RvbS1zZWFyY2gtZm9ybVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJGaWx0ZXIgYnkgdGVhbSBuYW1lIG9yIGNvYWNoLi4uXFxcIiBuZy1tb2RlbD1cXFwidGVhbVF1ZXJ5XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYnRuXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXNlYXJjaFxcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgICA8L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGhyPlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImxlYWd1ZS1jb250YWluZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPHRhYnNldCBqdXN0aWZpZWQ9XFxcInRydWVcXFwiPlxcblwiICtcbiAgICBcIiAgICA8dGFiIHNlbGVjdD1cXFwicmVzZXRTZWFyY2goKVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPHRhYi1oZWFkaW5nPlxcblwiICtcbiAgICBcIiAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXRodW1icy11cCBmYS1md1xcXCIgdGl0bGU9XFxcIkFsaXZlIHRlYW1zXFxcIj48L2k+IEFsaXZlIFRlYW1zXFxuXCIgK1xuICAgIFwiICAgICAgPC90YWItaGVhZGluZz5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGl2ZS10ZWFtcyBsaXN0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxhIG5nLXJlcGVhdD1cXFwidGVhbSBpbiBhbGl2ZVRlYW1zIHwgYWN0aXZlVGVhbUZpbHRlcjp0ZWFtT3B0aW9ucyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0IHwgb2Zmc2V0RmlsdGVyOihjdXJyZW50VGVhbVBhZ2UtMSkqdGVhbXNQZXJQYWdlIHwgbGltaXRUbzp0ZWFtc1BlclBhZ2VcXFwiIG5nLWNsaWNrPVxcXCJzaG93VGVhbSh0ZWFtKVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGVhZ3VlLW5hbWUgY29sLXNtLTYgY29sLW1kLTYgdGVhbS1uYW1lXFxcIiBuZy1jbGFzcz1cXFwieydpbmFjdGl2ZSc6ICF0ZWFtLmFjdGl2ZX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXRpbWVzIGZhLWZ3XFxcIiB0aXRsZT1cXFwiRGVhY3RpdmF0ZWQgVGVhbVxcXCIgbmctc2hvdz1cXFwiIXRlYW0uYWN0aXZlXFxcIj48L2k+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdXNlciBmYS1md1xcXCIgbmctc2hvdz1cXFwidGVhbS5hY3RpdmUgJiYgaXNDb2FjaCh0ZWFtKVxcXCIgdGl0bGU9XFxcIk15IHRlYW1cXFwiPjwvaT4ge3t0ZWFtLm5hbWV9fTxicj48c3BhbiBjbGFzcz1cXFwiY29hY2gtbmFtZVxcXCI+Q29hY2g6IHt7Y29hY2hOYW1lKHRlYW0pfX08L3NwYW4+PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImN1cnJlbnQtcGlja1xcXCIgbmctY2xhc3M9XFxcInsnbm8tcGljayc6IGhhc05vUGljayh0ZWFtKX1cXFwiIG5nLXNob3c9XFxcInRlYW0uYWN0aXZlXFxcIj5DdXJyZW50IExvc2VyOiBbIDxzcGFuIGNsYXNzPVxcXCJjdXJyZW50LWxvc2VyLW5hbWVcXFwiPnt7dGVhbS5sYXN0X3BpY2tfc3F1YWQubmFtZX19PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJjdXJyZW50LWxvc2VyLWFiYnJldlxcXCI+e3t0ZWFtLmxhc3RfcGlja19zcXVhZC5hYmJyZXZ9fTwvc3Bhbj4gXTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbmFjdGl2ZS10ZWFtXFxcIiBuZy1zaG93PVxcXCIhdGVhbS5hY3RpdmVcXFwiPkRlYWN0aXZhdGVkIGJ5IHRoZSBjb21taXNoPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJhZGdlXFxcIj57e3RlYW0uY29ycmVjdF9waWNrc19jb3VudH19IGNvcnJlY3Q8L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPC9hPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDxkaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1pbmZvXFxcIiBuZy1zaG93PVxcXCIoYWxpdmVUZWFtcyB8IGFjdGl2ZVRlYW1GaWx0ZXI6dGVhbU9wdGlvbnMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCkubGVuZ3RoID09IDBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICBObyB0ZWFtcyBmb3VuZFxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGl2ZS10ZWFtcy1wYWdpbmF0aW9uXFxcIiBuZy1zaG93PVxcXCJhbGl2ZVRlYW1zLmxlbmd0aCA+IHRlYW1zUGVyUGFnZSAmJiAoYWxpdmVUZWFtcyB8IGFjdGl2ZVRlYW1GaWx0ZXI6dGVhbU9wdGlvbnMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCkubGVuZ3RoID4gMFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxwYWdpbmF0aW9uIGJvdW5kYXJ5LWxpbmtzPVxcXCJ0cnVlXFxcIiBtYXgtc2l6ZT1cXFwiNFxcXCIgdG90YWwtaXRlbXM9XFxcIihhbGl2ZVRlYW1zIHwgYWN0aXZlVGVhbUZpbHRlcjp0ZWFtT3B0aW9ucyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0KS5sZW5ndGhcXFwiIGl0ZW1zLXBlci1wYWdlPVxcXCJ0ZWFtc1BlclBhZ2VcXFwiIG5nLW1vZGVsPVxcXCJjdXJyZW50VGVhbVBhZ2VcXFwiIGNsYXNzPVxcXCJwYWdpbmF0aW9uLW1kXFxcIiBwcmV2aW91cy10ZXh0PVxcXCImbHNhcXVvO1xcXCIgbmV4dC10ZXh0PVxcXCImcnNhcXVvO1xcXCIgZmlyc3QtdGV4dD1cXFwiJmxhcXVvO1xcXCIgbGFzdC10ZXh0PVxcXCImcmFxdW87XFxcIj48L3BhZ2luYXRpb24+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IHN0eWxlPVxcXCJjbGVhcjogYm90aDtcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L3RhYj5cXG5cIiArXG4gICAgXCIgICAgPHRhYiBzZWxlY3Q9XFxcInJlc2V0U2VhcmNoKClcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDx0YWItaGVhZGluZz5cXG5cIiArXG4gICAgXCIgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS10aHVtYnMtZG93biBmYS1md1xcXCIgdGl0bGU9XFxcIkRlYWQgdGVhbXNcXFwiPjwvaT4gRGVhZCBUZWFtc1xcblwiICtcbiAgICBcIiAgICAgIDwvdGFiLWhlYWRpbmc+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiZGVhZC10ZWFtcyBsaXN0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxhIG5nLXJlcGVhdD1cXFwidGVhbSBpbiBkZWFkVGVhbXMgfCBhY3RpdmVUZWFtRmlsdGVyOnRlYW1PcHRpb25zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QgfCBvZmZzZXRGaWx0ZXI6KGN1cnJlbnRUZWFtUGFnZS0xKSp0ZWFtc1BlclBhZ2UgfCBsaW1pdFRvOnRlYW1zUGVyUGFnZVxcXCIgbmctY2xpY2s9XFxcInNob3dUZWFtKHRlYW0pXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZWFndWUtbmFtZSBjb2wtc20tNCBjb2wtbWQtNCB0ZWFtLW5hbWVcXFwiIG5nLWNsYXNzPVxcXCJ7J2luYWN0aXZlJzogIXRlYW0uYWN0aXZlfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdXNlciBmYS1md1xcXCIgbmctc2hvdz1cXFwidGVhbS5hY3RpdmUgJiYgaXNDb2FjaCh0ZWFtKVxcXCIgdGl0bGU9XFxcIk15IHRlYW1cXFwiPjwvaT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS10aW1lcyBmYS1md1xcXCIgdGl0bGU9XFxcIkRlYWN0aXZhdGVkIFRlYW1cXFwiIG5nLXNob3c9XFxcIiF0ZWFtLmFjdGl2ZVxcXCI+PC9pPiB7e3RlYW0ubmFtZX19PGJyPjxzcGFuIGNsYXNzPVxcXCJjb2FjaC1uYW1lXFxcIj5Db2FjaDoge3tjb2FjaE5hbWUodGVhbSl9fTwvc3Bhbj48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOCBjb2wtbWQtOFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY3VycmVudC1waWNrIG5vLXBpY2tcXFwiIG5nLXNob3c9XFxcInRlYW0uYWN0aXZlXFxcIj5MYXN0IFBpY2s6IFsgPHNwYW4gY2xhc3M9XFxcImxhc3QtcGljay1uYW1lXFxcIj57e3RlYW0ubGFzdF9waWNrX3NxdWFkLm5hbWV9fTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwibGFzdC1waWNrLWFiYnJldlxcXCI+e3t0ZWFtLmxhc3RfcGlja19zcXVhZC5hYmJyZXZ9fTwvc3Bhbj4gXTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbmFjdGl2ZS10ZWFtXFxcIiBuZy1zaG93PVxcXCIhdGVhbS5hY3RpdmVcXFwiPkRlYWN0aXZhdGVkIGJ5IHRoZSBjb21taXNoPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJhZGdlXFxcIj57e3RlYW0uY29ycmVjdF9waWNrc19jb3VudH19IGNvcnJlY3Q8L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPC9hPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDxkaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1pbmZvXFxcIiBuZy1zaG93PVxcXCIoZGVhZFRlYW1zIHwgYWN0aXZlVGVhbUZpbHRlcjp0ZWFtT3B0aW9ucyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0KS5sZW5ndGggPT0gMFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIE5vIHRlYW1zIGZvdW5kXFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImRlYWQtdGVhbXMtcGFnaW5hdGlvblxcXCIgbmctc2hvdz1cXFwiZGVhZFRlYW1zLmxlbmd0aCA+IHRlYW1zUGVyUGFnZSAmJiAoZGVhZFRlYW1zIHwgYWN0aXZlVGVhbUZpbHRlcjp0ZWFtT3B0aW9ucyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0KS5sZW5ndGggPiAwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHBhZ2luYXRpb24gYm91bmRhcnktbGlua3M9XFxcInRydWVcXFwiIG1heC1zaXplPVxcXCI0XFxcIiB0b3RhbC1pdGVtcz1cXFwiKGRlYWRUZWFtcyB8IGFjdGl2ZVRlYW1GaWx0ZXI6dGVhbU9wdGlvbnMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCkubGVuZ3RoXFxcIiBpdGVtcy1wZXItcGFnZT1cXFwidGVhbXNQZXJQYWdlXFxcIiBuZy1tb2RlbD1cXFwiY3VycmVudFRlYW1QYWdlXFxcIiBjbGFzcz1cXFwicGFnaW5hdGlvbi1tZFxcXCIgcHJldmlvdXMtdGV4dD1cXFwiJmxzYXF1bztcXFwiIG5leHQtdGV4dD1cXFwiJnJzYXF1bztcXFwiIGZpcnN0LXRleHQ9XFxcIiZsYXF1bztcXFwiIGxhc3QtdGV4dD1cXFwiJnJhcXVvO1xcXCI+PC9wYWdpbmF0aW9uPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBzdHlsZT1cXFwiY2xlYXI6IGJvdGg7XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC90YWI+XFxuXCIgK1xuICAgIFwiICA8L3RhYnNldD5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9sZWFndWVzLmpvaW4udHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL2xlYWd1ZXMuam9pbi50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwiam9pbi1sZWFndWVzLWhlYWRlci1yb3cgcm93XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS05IGNvbC1tZC05XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGgzPkpvaW4gYSBsZWFndWUuLi48L2gzPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMyBjb2wtbWQtM1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImpvaW4tbGVhZ3Vlcy1idG4tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY3JlYXRlLWxlYWd1ZS1idG4gYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVxcXCIgbmctY2xpY2s9XFxcImNyZWF0ZUxlYWd1ZShzZWFzb24pXFxcIj5DcmVhdGUgTGVhZ3VlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGhyPlxcblwiICtcbiAgICBcIjx1bCBjbGFzcz1cXFwibmF2IG5hdi10YWJzIG5hdi1qdXN0aWZpZWRcXFwiPlxcblwiICtcbiAgICBcIiAgICA8bGkgbmctY2xhc3M9XFxcInsnYWN0aXZlJzogaXNQdWJsaWMoKX1cXFwiIG5nLWNsaWNrPVxcXCJyZXNldFNlYXJjaCgpXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxhIG5nLWNsaWNrPVxcXCJwdWJsaWNMZWFndWVzKHNlYXNvbklkKVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXVubG9jayBmYS1md1xcXCIgdGl0bGU9XFxcIlB1YmxpYyBsZWFndWVzXFxcIj48L2k+IFB1YmxpYyA8c3BhbiBjbGFzcz1cXFwibGVhZ3Vlc1xcXCI+TGVhZ3Vlczwvc3Bhbj48L2E+XFxuXCIgK1xuICAgIFwiICAgIDwvbGk+XFxuXCIgK1xuICAgIFwiICAgIDxsaSBuZy1jbGFzcz1cXFwieydhY3RpdmUnOiAhaXNQdWJsaWMoKX1cXFwiIG5nLWNsaWNrPVxcXCJyZXNldFNlYXJjaCgpXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxhIG5nLWNsaWNrPVxcXCJwcml2YXRlTGVhZ3VlcyhzZWFzb25JZClcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1sb2NrIGZhLWZ3XFxcIiB0aXRsZT1cXFwiUHJpdmF0ZSBsZWFndWVzXFxcIj48L2k+IFByaXZhdGUgPHNwYW4gY2xhc3M9XFxcImxlYWd1ZXNcXFwiPkxlYWd1ZXM8L3NwYW4+PC9hPlxcblwiICtcbiAgICBcIiAgICA8L2xpPlxcblwiICtcbiAgICBcIjwvdWw+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgY3VzdG9tLXNlYXJjaC1mb3JtIGZpbHRlci1sZWFndWUtam9pblxcXCI+XFxuXCIgK1xuICAgIFwiICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIlNlYXJjaCBieSBsZWFndWUgbmFtZSBvciBjb21taXNoLi4uXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlUXVlcnlcXFwiPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjwhLS0gcGxhY2Vob2xkZXIgZm9yIHB1YmxpYyBhbmQgcHJpdmF0ZSBsZWFndWVzIC0tPlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImxlYWd1ZXMtY29udGVudFxcXCIgdWktdmlldz1cXFwiam9pbkxlYWd1ZXNDb250ZW50XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9wcml2YXRlL2xlYWd1ZXMuam9pbi5wcml2YXRlLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9wcml2YXRlL2xlYWd1ZXMuam9pbi5wcml2YXRlLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJwcml2YXRlLWxlYWd1ZXMgbGlzdC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxhIG5nLXJlcGVhdD1cXFwibGVhZ3VlIGluIHByaXZhdGVMZWFndWVzIHwgb3BlbkxlYWd1ZUZpbHRlcjpsZWFndWVPcHRpb25zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QgfCBvZmZzZXRGaWx0ZXI6KGN1cnJlbnRMZWFndWVQYWdlLTEpKmxlYWd1ZXNQZXJQYWdlIHwgbGltaXRUbzpsZWFndWVzUGVyUGFnZVxcXCIgbmctY2xpY2s9XFxcInNob3dMZWFndWUobGVhZ3VlKVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxlYWd1ZS1uYW1lIGNvbC1zbS02IGNvbC1tZC02XFxcIiBuZy1jbGFzcz1cXFwieydjbG9zZWQnOiAhbGVhZ3VlLm9wZW59XFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtdGltZXMgZmEtZndcXFwiIHRpdGxlPVxcXCJDbG9zZWQgbGVhZ3VlXFxcIiBuZy1zaG93PVxcXCIhbGVhZ3VlLm9wZW5cXFwiPjwvaT4ge3tsZWFndWUubmFtZX19IDxzcGFuIGNsYXNzPVxcXCJ0ZWFtLWNvdW50XFxcIj5Kb2luIHVwIHRvIHt7bGVhZ3VlLm1heF90ZWFtc19wZXJfdXNlcn19IHRpbWVzPGJyPkNvbW1pc2g6IHt7bGVhZ3VlLmNvbW1pc2hfbmFtZXMuam9pbignLCAnKX19PC9zcGFuPjwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInN0YXJ0LXdlZWtcXFwiPlN0YXJ0cyB7e2xlYWd1ZS5zdGFydF93ZWVrfX08L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJiYWRnZVxcXCI+e3tsZWFndWUudGVhbV9jb3VudH19IHRlYW1zPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvYT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8IS0tZHluYW1pYyBwYWdpbmF0aW9uLS0+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwicHJpdmF0ZS1sZWFndWUtcGFnaW5hdGlvblxcXCIgbmctc2hvdz1cXFwicHJpdmF0ZUxlYWd1ZXMubGVuZ3RoID4gbGVhZ3Vlc1BlclBhZ2UgJiYgKHByaXZhdGVMZWFndWVzIHwgb3BlbkxlYWd1ZUZpbHRlcjpsZWFndWVPcHRpb25zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aCA+IDBcXFwiPlxcblwiICtcbiAgICBcIiAgICA8cGFnaW5hdGlvbiBib3VuZGFyeS1saW5rcz1cXFwidHJ1ZVxcXCIgbWF4LXNpemU9XFxcIjRcXFwiIHRvdGFsLWl0ZW1zPVxcXCIocHJpdmF0ZUxlYWd1ZXMgfCBvcGVuTGVhZ3VlRmlsdGVyOmxlYWd1ZU9wdGlvbnMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCkubGVuZ3RoXFxcIiBpdGVtcy1wZXItcGFnZT1cXFwibGVhZ3Vlc1BlclBhZ2VcXFwiIG5nLW1vZGVsPVxcXCJjdXJyZW50TGVhZ3VlUGFnZVxcXCIgY2xhc3M9XFxcInBhZ2luYXRpb24tbWRcXFwiIHByZXZpb3VzLXRleHQ9XFxcIiZsc2FxdW87XFxcIiBuZXh0LXRleHQ9XFxcIiZyc2FxdW87XFxcIiBmaXJzdC10ZXh0PVxcXCImbGFxdW87XFxcIiBsYXN0LXRleHQ9XFxcIiZyYXF1bztcXFwiPjwvcGFnaW5hdGlvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1pbmZvXFxcIiBuZy1zaG93PVxcXCIocHJpdmF0ZUxlYWd1ZXMgfCBvcGVuTGVhZ3VlRmlsdGVyOmxlYWd1ZU9wdGlvbnMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCkubGVuZ3RoID09IDBcXFwiPlxcblwiICtcbiAgICBcIiAgTm8gbGVhZ3VlcyBmb3VuZFxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL3B1YmxpYy9sZWFndWVzLmpvaW4ucHVibGljLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9wdWJsaWMvbGVhZ3Vlcy5qb2luLnB1YmxpYy50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwicHVibGljLWxlYWd1ZXMgbGlzdC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxhIG5nLXJlcGVhdD1cXFwibGVhZ3VlIGluIHB1YmxpY0xlYWd1ZXMgfCBvcGVuTGVhZ3VlRmlsdGVyOmxlYWd1ZU9wdGlvbnMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCB8IG9mZnNldEZpbHRlcjooY3VycmVudExlYWd1ZVBhZ2UtMSkqbGVhZ3Vlc1BlclBhZ2UgfCBsaW1pdFRvOmxlYWd1ZXNQZXJQYWdlXFxcIiBuZy1jbGljaz1cXFwic2hvd0xlYWd1ZShsZWFndWUpXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGVhZ3VlLW5hbWUgY29sLXNtLTYgY29sLW1kLTZcXFwiIG5nLWNsYXNzPVxcXCJ7J2Nsb3NlZCc6ICFsZWFndWUub3Blbn1cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS10aW1lcyBmYS1md1xcXCIgdGl0bGU9XFxcIkNsb3NlZCBsZWFndWVcXFwiIG5nLXNob3c9XFxcIiFsZWFndWUub3BlblxcXCI+PC9pPiB7e2xlYWd1ZS5uYW1lfX0gPHNwYW4gY2xhc3M9XFxcInRlYW0tY291bnRcXFwiPkpvaW4gdXAgdG8ge3tsZWFndWUubWF4X3RlYW1zX3Blcl91c2VyfX0gdGltZXM8YnI+Q29tbWlzaDoge3tsZWFndWUuY29tbWlzaF9uYW1lcy5qb2luKCcsICcpfX08L3NwYW4+PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwic3RhcnQtd2Vla1xcXCI+U3RhcnRzIHt7bGVhZ3VlLnN0YXJ0X3dlZWt9fTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJhZGdlXFxcIj57e2xlYWd1ZS50ZWFtX2NvdW50fX0gdGVhbXM8L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9hPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcInB1YmxpYy1sZWFndWUtcGFnaW5hdGlvblxcXCIgbmctc2hvdz1cXFwicHVibGljTGVhZ3Vlcy5sZW5ndGggPiBsZWFndWVzUGVyUGFnZSAmJiAocHVibGljTGVhZ3VlcyB8IG9wZW5MZWFndWVGaWx0ZXI6bGVhZ3VlT3B0aW9ucyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0KS5sZW5ndGggPiAwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPHBhZ2luYXRpb24gYm91bmRhcnktbGlua3M9XFxcInRydWVcXFwiIG1heC1zaXplPVxcXCI0XFxcIiB0b3RhbC1pdGVtcz1cXFwiKHB1YmxpY0xlYWd1ZXMgfCBvcGVuTGVhZ3VlRmlsdGVyOmxlYWd1ZU9wdGlvbnMgfGZpbHRlcjpzZWFyY2g6c3RyaWN0KS5sZW5ndGhcXFwiIGl0ZW1zLXBlci1wYWdlPVxcXCJsZWFndWVzUGVyUGFnZVxcXCIgbmctbW9kZWw9XFxcImN1cnJlbnRMZWFndWVQYWdlXFxcIiBjbGFzcz1cXFwicGFnaW5hdGlvbi1tZFxcXCIgcHJldmlvdXMtdGV4dD1cXFwiJmxzYXF1bztcXFwiIG5leHQtdGV4dD1cXFwiJnJzYXF1bztcXFwiIGZpcnN0LXRleHQ9XFxcIiZsYXF1bztcXFwiIGxhc3QtdGV4dD1cXFwiJnJhcXVvO1xcXCI+PC9wYWdpbmF0aW9uPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWluZm9cXFwiIG5nLXNob3c9XFxcIihwdWJsaWNMZWFndWVzIHwgb3BlbkxlYWd1ZUZpbHRlcjpsZWFndWVPcHRpb25zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aCA9PSAwXFxcIj5cXG5cIiArXG4gICAgXCIgIE5vIGxlYWd1ZXMgZm91bmRcXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvbGVhZ3Vlcy50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2xlYWd1ZXMudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgdWktdmlldz1cXFwibGVhZ3Vlc0NvbnRlbnRcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9tYW5hZ2UvbGVhZ3Vlcy5tYW5hZ2UudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9tYW5hZ2UvbGVhZ3Vlcy5tYW5hZ2UudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1hbmFnZS1sZWFndWVzLWhlYWRlci1yb3cgcm93XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS05IGNvbC1tZC05XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGgzPkkgbWFuYWdlIHRoZXNlIGxlYWd1ZXMuLi48L2gzPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMyBjb2wtbWQtM1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcIm1hbmFnZS1sZWFndWVzLWJ0bi1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjcmVhdGUtbGVhZ3VlLWJ0biBidG4gYnRuLXByaW1hcnkgYnRuLXNtXFxcIiBuZy1jbGljaz1cXFwiY3JlYXRlTGVhZ3VlKHNlYXNvbilcXFwiPkNyZWF0ZSBMZWFndWU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8aHI+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiPCEtLWlmIHlvdSBoYXZlIG1hbmFnZWQgbGVhZ3VlcyAoaS5lLiBpZiB5b3UncmUgYSBjb21taXNoKS0tPlxcblwiICtcbiAgICBcIjxkaXYgbmctc2hvdz1cXFwibWFuYWdlZExlYWd1ZXMubGVuZ3RoID4gMFxcXCIgY2xhc3M9XFxcImxlYWd1ZXMtY29udGFpbmVyXFxcIj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwibWFuYWdlZC1sZWFndWVzIGxpc3QtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGEgbmctcmVwZWF0PVxcXCJsZWFndWUgaW4gbWFuYWdlZExlYWd1ZXMgfCBvZmZzZXRGaWx0ZXI6KGN1cnJlbnRMZWFndWVQYWdlLTEpKmxlYWd1ZXNQZXJQYWdlIHwgbGltaXRUbzpsZWFndWVzUGVyUGFnZVxcXCIgbmctY2xpY2s9XFxcInZpZXdMZWFndWUobGVhZ3VlKVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGVhZ3VlLW5hbWUgY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS10aW1lcyBmYS1md1xcXCIgdGl0bGU9XFxcIk15IENsb3NlZCBsZWFndWVcXFwiIG5nLXNob3c9XFxcIiFsZWFndWUub3BlblxcXCI+PC9pPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS11bmxvY2sgZmEtZndcXFwiIHRpdGxlPVxcXCJNeSBQdWJsaWMgbGVhZ3VlXFxcIiBuZy1zaG93PVxcXCJsZWFndWUub3BlbiAmJiBsZWFndWUucHVibGljXFxcIj48L2k+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWxvY2sgZmEtZndcXFwiIHRpdGxlPVxcXCJNeSBQcml2YXRlIGxlYWd1ZVxcXCIgbmctc2hvdz1cXFwibGVhZ3VlLm9wZW4gJiYgIWxlYWd1ZS5wdWJsaWNcXFwiPjwvaT4ge3tsZWFndWUubmFtZX19PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzdGFydC13ZWVrXFxcIj57e3N0YXJ0cyhsZWFndWUpfX08L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYmFkZ2VcXFwiPnt7bGVhZ3VlLnRlYW1fY291bnR9fSB0ZWFtczwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2E+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgICA8IS0tZHluYW1pYyBwYWdpbmF0aW9uLS0+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcIm1hbmFnZS1sZWFndWUtcGFnaW5hdGlvblxcXCIgbmctc2hvdz1cXFwibWFuYWdlZExlYWd1ZXMubGVuZ3RoID4gbGVhZ3Vlc1BlclBhZ2VcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPHBhZ2luYXRpb24gYm91bmRhcnktbGlua3M9XFxcInRydWVcXFwiIG1heC1zaXplPVxcXCI0XFxcIiB0b3RhbC1pdGVtcz1cXFwibWFuYWdlZExlYWd1ZXMubGVuZ3RoXFxcIiBpdGVtcy1wZXItcGFnZT1cXFwibGVhZ3Vlc1BlclBhZ2VcXFwiIG5nLW1vZGVsPVxcXCJjdXJyZW50TGVhZ3VlUGFnZVxcXCIgY2xhc3M9XFxcInBhZ2luYXRpb24tbWRcXFwiIHByZXZpb3VzLXRleHQ9XFxcIiZsc2FxdW87XFxcIiBuZXh0LXRleHQ9XFxcIiZyc2FxdW87XFxcIiBmaXJzdC10ZXh0PVxcXCImbGFxdW87XFxcIiBsYXN0LXRleHQ9XFxcIiZyYXF1bztcXFwiPjwvcGFnaW5hdGlvbj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgc3R5bGU9XFxcImNsZWFyOiBib3RoO1xcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiPCEtLWlmIHlvdSBoYXZlIG5vIG1hbmFnZWQgbGVhZ3Vlcy0tPlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWluZm9cXFwiIG5nLXNob3c9XFxcIm1hbmFnZWRMZWFndWVzLmxlbmd0aCA9PSAwXFxcIj5cXG5cIiArXG4gICAgXCIgIFlvdSBhcmUgbm90IHRoZSBjb21taXNoIG9mIGFueSBsZWFndWVzLiA8YSBjbGFzcz1cXFwiYWxlcnQtbGlua1xcXCIgbmctY2xpY2s9XFxcImNyZWF0ZUxlYWd1ZShzZWFzb24pXFxcIj5DcmVhdGUgb25lPC9hPiBhbmQgaW52aXRlIGFsbCB5b3VyIGZyaWVuZHMuXFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL215L2xlYWd1ZXMubXkudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9teS9sZWFndWVzLm15LnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJteS1sZWFndWVzLWhlYWRlci1yb3cgcm93XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS05IGNvbC1tZC05XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGgzPkkgYW0gaW4gdGhlc2UgbGVhZ3Vlcy4uLjwvaDM+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0zIGNvbC1tZC0zXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwibXktbGVhZ3Vlcy1idG4tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiam9pbi1sZWFndWUtYnRuIGJ0biBidG4tcHJpbWFyeSBidG4tc21cXFwiIG5nLWNsaWNrPVxcXCJqb2luTGVhZ3VlKHNlYXNvbilcXFwiPkpvaW4gTGVhZ3VlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGhyPlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjxkaXYgbmctc2hvdz1cXFwibGVhZ3Vlcy5sZW5ndGggPiAwXFxcIiBjbGFzcz1cXFwibGVhZ3Vlcy1jb250YWluZXJcXFwiPlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwibXktbGVhZ3VlcyBsaXN0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGEgbmctcmVwZWF0PVxcXCJsZWFndWUgaW4gbGVhZ3VlcyB8IG9mZnNldEZpbHRlcjooY3VycmVudExlYWd1ZVBhZ2UtMSkqbGVhZ3Vlc1BlclBhZ2UgfCBsaW1pdFRvOmxlYWd1ZXNQZXJQYWdlXFxcIiBuZy1jbGljaz1cXFwidmlld0xlYWd1ZShsZWFndWUpXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwibGVhZ3VlLW5hbWUgY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdGltZXMgZmEtZndcXFwiIHRpdGxlPVxcXCJNeSBDbG9zZWQgbGVhZ3VlXFxcIiBuZy1zaG93PVxcXCIhbGVhZ3VlLm9wZW5cXFwiPjwvaT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXVubG9jayBmYS1md1xcXCIgdGl0bGU9XFxcIk15IFB1YmxpYyBsZWFndWVcXFwiIG5nLXNob3c9XFxcImxlYWd1ZS5vcGVuICYmIGxlYWd1ZS5wdWJsaWNcXFwiPjwvaT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWxvY2sgZmEtZndcXFwiIHRpdGxlPVxcXCJNeSBQcml2YXRlIGxlYWd1ZVxcXCIgbmctc2hvdz1cXFwibGVhZ3VlLm9wZW4gJiYgIWxlYWd1ZS5wdWJsaWNcXFwiPjwvaT4ge3tsZWFndWUubmFtZX19PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzdGFydC13ZWVrXFxcIj57e3N0YXJ0cyhsZWFndWUpfX08L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJiYWRnZVxcXCI+e3tsZWFndWUudGVhbV9jb3VudH19IHRlYW1zPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvYT5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwibXktbGVhZ3VlLXBhZ2luYXRpb25cXFwiIG5nLXNob3c9XFxcImxlYWd1ZXMubGVuZ3RoID4gbGVhZ3Vlc1BlclBhZ2VcXFwiPlxcblwiICtcbiAgICBcIiAgICA8cGFnaW5hdGlvbiBib3VuZGFyeS1saW5rcz1cXFwidHJ1ZVxcXCIgbWF4LXNpemU9XFxcIjRcXFwiIHRvdGFsLWl0ZW1zPVxcXCJsZWFndWVzLmxlbmd0aFxcXCIgaXRlbXMtcGVyLXBhZ2U9XFxcImxlYWd1ZXNQZXJQYWdlXFxcIiBuZy1tb2RlbD1cXFwiY3VycmVudExlYWd1ZVBhZ2VcXFwiIGNsYXNzPVxcXCJwYWdpbmF0aW9uLW1kXFxcIiBwcmV2aW91cy10ZXh0PVxcXCImbHNhcXVvO1xcXCIgbmV4dC10ZXh0PVxcXCImcnNhcXVvO1xcXCIgZmlyc3QtdGV4dD1cXFwiJmxhcXVvO1xcXCIgbGFzdC10ZXh0PVxcXCImcmFxdW87XFxcIj48L3BhZ2luYXRpb24+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgc3R5bGU9XFxcImNsZWFyOiBib3RoO1xcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiPCEtLWlmIHlvdSBoYXZlIG5vIGxlYWd1ZXMtLT5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1pbmZvXFxcIiBuZy1zaG93PVxcXCJsZWFndWVzLmxlbmd0aCA9PSAwXFxcIj5cXG5cIiArXG4gICAgXCIgIFlvdSBhcmUgaW4gbm8gbGVhZ3Vlcy4gPGEgY2xhc3M9XFxcImFsZXJ0LWxpbmtcXFwiIG5nLWNsaWNrPVxcXCJqb2luTGVhZ3VlKHNlYXNvbilcXFwiPkpvaW48L2E+IG9uZSB0b2RheS5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL3BpY2svbWFrZS9waWNrLm1ha2UudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvcGljay9tYWtlL3BpY2subWFrZS50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+UGljayBhIExvc2VyIDxicj4ge3tnYW1lc1swXS53ZWVrX2Rpc3BsYXl9fTwvaDQ+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJ3ZWxsIHdlbGwtc21cXFwiPjxzdHJvbmc+Tm90ZTo8L3N0cm9uZz4gPGVtPlRlYW1zIHlvdSBoYXZlIGFscmVhZHkgcGlja2VkIGFyZSBjcm9zc2VkIG91dC4gR2FtZXMgdGhhdCBoYXZlIGFscmVhZHkgc3RhcnRlZCBhcmUgZGlzYWJsZWQuPC9lbT48L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgbmctcmVwZWF0LXN0YXJ0PVxcXCJnYW1lIGluIGdhbWVzXFxcIiBjbGFzcz1cXFwid2Vlay1nYW1lcyBsaXN0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGg0IG5nLWNsYXNzPVxcXCJ7J2ludmFsaWQtZ2FtZSc6IGdhbWUuc3RhcnRlZH1cXFwiPnt7Z2FtZS5kaXNwbGF5fX0gPGJyPiA8c21hbGw+e3tzdGFydHMoZ2FtZSl9fTwvc21hbGw+PC9oND5cXG5cIiArXG4gICAgXCIgICAgPGEgbmctcmVwZWF0PVxcXCJzcXVhZCBpbiBnYW1lLnNxdWFkc1xcXCIgbmctY2xpY2s9XFxcIm1ha2VQaWNrKGdhbWUsIHNxdWFkKVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCIgbmctY2xhc3M9XFxcInsnZGlzYWJsZWQnOiBnYW1lLnN0YXJ0ZWQgfHwgaGFzU3F1YWRCZWVuVXNlZChnYW1lLCBzcXVhZCl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwic3F1YWQtbmFtZSBjb2wtc20tNiBjb2wtbWQtNlxcXCIgbmctY2xhc3M9XFxcInsnaW52YWxpZC1zcXVhZCc6IGhhc1NxdWFkQmVlblVzZWQoZ2FtZSwgc3F1YWQpfVxcXCI+e3tzcXVhZC5uYW1lfX0gPHNwYW4gbmctc2hvdz1cXFwiZ2FtZS5zdGFydGVkXFxcIj5bIHt7Z2V0U2NvcmUoZ2FtZSwgJGluZGV4KX19IF08L3NwYW4+PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJiYWRnZVxcXCIgbmctc2hvdz1cXFwiIWdhbWUuc3RhcnRlZCAmJiAhaGFzU3F1YWRCZWVuVXNlZChnYW1lLCBzcXVhZClcXFwiPlBpY2s8L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9hPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IG5nLXJlcGVhdC1lbmQ+PC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL3BsYXkvbGVhZ3Vlcy9wbGF5LmxlYWd1ZXMudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvcGxheS9sZWFndWVzL3BsYXkubGVhZ3Vlcy50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBuZy1zaG93PVxcXCJsZWFndWVzLmxlbmd0aCA+IDBcXFwiIGNsYXNzPVxcXCJsZWFndWVzLWNvbnRhaW5lclxcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJteS1sZWFndWVzIGxpc3QtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICA8YSBuZy1yZXBlYXQ9XFxcImxlYWd1ZSBpbiBsZWFndWVzIHwgbWFuYWdlZExlYWd1ZUZpbHRlcjpsZWFndWVPcHRpb25zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QgfCBvZmZzZXRGaWx0ZXI6KGN1cnJlbnRMZWFndWVQYWdlLTEpKmxlYWd1ZXNQZXJQYWdlIHwgbGltaXRUbzpsZWFndWVzUGVyUGFnZVxcXCIgbmctY2xpY2s9XFxcInZpZXdMZWFndWUobGVhZ3VlKVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImxlYWd1ZS1uYW1lIGNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWNvbW1lbnQgZmEtZndcXFwiIG5nLXNob3c9XFxcIiFpc0NvbW1pc2gobGVhZ3VlKSAmJiBsZWFndWUubWVzc2FnZS5sZW5ndGggPiAwXFxcIiB0aXRsZT1cXFwiSGFzIG1lc3NhZ2UgZnJvbSBjb21taXNoXFxcIj48L2k+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1ncm91cCBmYS1md1xcXCIgdGl0bGU9XFxcIk15IFB1YmxpYyBsZWFndWVcXFwiIG5nLXNob3c9XFxcImlzQ29tbWlzaChsZWFndWUpXFxcIj48L2k+IHt7bGVhZ3VlLm5hbWV9fTxicj48c3BhbiBjbGFzcz1cXFwidGVhbS1jb3VudFxcXCI+Q29tbWlzaDoge3tsZWFndWUuY29tbWlzaF9uYW1lcy5qb2luKCcsICcpfX08L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInN0YXJ0LXdlZWtcXFwiPnt7c3RhcnRzKGxlYWd1ZSl9fTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJhZGdlXFxcIj57e2xlYWd1ZS50ZWFtX2NvdW50fX0gdGVhbXM8L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9hPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJteS1sZWFndWUtcGFnaW5hdGlvblxcXCIgbmctc2hvdz1cXFwibGVhZ3Vlcy5sZW5ndGggPiBsZWFndWVzUGVyUGFnZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxwYWdpbmF0aW9uIGJvdW5kYXJ5LWxpbmtzPVxcXCJ0cnVlXFxcIiBtYXgtc2l6ZT1cXFwiNFxcXCIgdG90YWwtaXRlbXM9XFxcImxlYWd1ZXMubGVuZ3RoXFxcIiBpdGVtcy1wZXItcGFnZT1cXFwibGVhZ3Vlc1BlclBhZ2VcXFwiIG5nLW1vZGVsPVxcXCJjdXJyZW50TGVhZ3VlUGFnZVxcXCIgY2xhc3M9XFxcInBhZ2luYXRpb24tbWRcXFwiIHByZXZpb3VzLXRleHQ9XFxcIiZsc2FxdW87XFxcIiBuZXh0LXRleHQ9XFxcIiZyc2FxdW87XFxcIiBmaXJzdC10ZXh0PVxcXCImbGFxdW87XFxcIiBsYXN0LXRleHQ9XFxcIiZyYXF1bztcXFwiPjwvcGFnaW5hdGlvbj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPGRpdiBzdHlsZT1cXFwiY2xlYXI6IGJvdGg7XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8IS0taWYgeW91IGhhdmUgbm8gbGVhZ3Vlcy0tPlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImxlYWd1ZXMtYWxlcnQgYWxlcnQgYWxlcnQtaW5mb1xcXCIgbmctc2hvdz1cXFwiKGxlYWd1ZXMgfCBtYW5hZ2VkTGVhZ3VlRmlsdGVyOmxlYWd1ZU9wdGlvbnMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCkubGVuZ3RoID09IDBcXFwiPlxcblwiICtcbiAgICBcIiAgWW91IGFyZSBpbiBubyBsZWFndWVzLiA8YSBjbGFzcz1cXFwiYWxlcnQtbGlua1xcXCIgbmctY2xpY2s9XFxcImpvaW5MZWFndWUoc2Vhc29uKVxcXCI+Sm9pbiBhIGxlYWd1ZTwvYT4gb3IgPGEgY2xhc3M9XFxcImFsZXJ0LWxpbmtcXFwiIG5nLWNsaWNrPVxcXCJjcmVhdGVMZWFndWUoc2Vhc29uKVxcXCI+Y3JlYXRlIGEgbGVhZ3VlPC9hPiBub3cuXFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9wbGF5L3BsYXkudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvcGxheS9wbGF5LnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJwbGF5LWhlYWRlci1yb3cgcm93XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS03IGNvbC1tZC03XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGg0IGNsYXNzPVxcXCJteS10ZWFtcy1oZWFkZXJcXFwiPk15IFRlYW1zICYgTGVhZ3VlcyA8c21hbGwgbmctc2hvdz1cXFwiaXNTdGF0ZShbJ3ByaXZhdGUucGxheS50ZWFtcyddKVxcXCI+PGEgbmctc2hvdz1cXFwidGVhbU9wdGlvbnMuZGVhZCA9PSB0cnVlXFxcIiBuZy1jbGljaz1cXFwidGVhbU9wdGlvbnMuZGVhZCA9IGZhbHNlXFxcIj5bIGhpZGUgZGVhZCB0ZWFtcyBdPC9hPjxhIG5nLXNob3c9XFxcInRlYW1PcHRpb25zLmRlYWQgPT0gZmFsc2VcXFwiIG5nLWNsaWNrPVxcXCJ0ZWFtT3B0aW9ucy5kZWFkID0gdHJ1ZVxcXCI+WyBzaG93IGRlYWQgdGVhbXMgXTwvYT48L3NtYWxsPjwvaDQ+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS01IGNvbC1tZC01XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicGxheS1idG4tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiam9pbi1sZWFndWUtYnRuIGJ0biBidG4tcHJpbWFyeSBidG4tc21cXFwiIG5nLWNsaWNrPVxcXCJqb2luTGVhZ3VlKHNlYXNvbilcXFwiPkpvaW4gTGVhZ3VlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjcmVhdGUtbGVhZ3VlLWJ0biBidG4gYnRuLXByaW1hcnkgYnRuLXNtXFxcIiBuZy1jbGljaz1cXFwiY3JlYXRlTGVhZ3VlKHNlYXNvbilcXFwiPkNyZWF0ZSBMZWFndWU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8aHI+XFxuXCIgK1xuICAgIFwiPHVsIGNsYXNzPVxcXCJuYXYgbmF2LXRhYnMgbmF2LWp1c3RpZmllZFxcXCI+XFxuXCIgK1xuICAgIFwiICA8bGkgbmctY2xhc3M9XFxcInsnYWN0aXZlJzogaXNTdGF0ZShbJ3ByaXZhdGUucGxheS50ZWFtcyddKX1cXFwiIG5nLWNsaWNrPVxcXCJyZXNldFNlYXJjaCgpXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGEgbmctY2xpY2s9XFxcIm15VGVhbXMoc2Vhc29uKVxcXCI+PHNwYW4gY2xhc3M9XFxcIm15LXRlYW1zXFxcIj5NeSBUZWFtczwvc3Bhbj48L2E+XFxuXCIgK1xuICAgIFwiICA8L2xpPlxcblwiICtcbiAgICBcIiAgPGxpIG5nLWNsYXNzPVxcXCJ7J2FjdGl2ZSc6IGlzU3RhdGUoWydwcml2YXRlLnBsYXkubGVhZ3VlcyddKX1cXFwiIG5nLWNsaWNrPVxcXCJyZXNldFNlYXJjaCgpXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGEgbmctY2xpY2s9XFxcIm15TGVhZ3VlcyhzZWFzb24pXFxcIj48c3BhbiBjbGFzcz1cXFwibXktbGVhZ3Vlc1xcXCI+TXkgTGVhZ3Vlczwvc3Bhbj48L2E+XFxuXCIgK1xuICAgIFwiICA8L2xpPlxcblwiICtcbiAgICBcIjwvdWw+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgY3VzdG9tLXNlYXJjaC1mb3JtIGZpbHRlci10ZWFtLWxlYWd1ZVxcXCI+XFxuXCIgK1xuICAgIFwiICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIlNlYXJjaCBieSBuYW1lLi4uXFxcIiBuZy1tb2RlbD1cXFwicXVlcnlcXFwiPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcInBsYXktY29udGVudFxcXCIgdWktdmlldz1cXFwicGxheUNvbnRlbnRcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvcGxheS90ZWFtcy9wbGF5LnRlYW1zLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL3BsYXkvdGVhbXMvcGxheS50ZWFtcy50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBuZy1zaG93PVxcXCJ0ZWFtcy5sZW5ndGggPiAwXFxcIiBjbGFzcz1cXFwibGVhZ3Vlcy1jb250YWluZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwibXktdGVhbXMgbGlzdC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxhIG5nLXJlcGVhdD1cXFwidGVhbSBpbiB0ZWFtcyB8IGFsaXZlVGVhbUZpbHRlcjp0ZWFtT3B0aW9ucyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0IHwgb2Zmc2V0RmlsdGVyOihjdXJyZW50VGVhbVBhZ2UtMSkqdGVhbXNQZXJQYWdlIHwgbGltaXRUbzp0ZWFtc1BlclBhZ2VcXFwiIG5nLWNsaWNrPVxcXCJzaG93VGVhbShzZWFzb24sIHRlYW0pXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwibGVhZ3VlLW5hbWUgY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY29tbWVudCBmYS1md1xcXCIgbmctc2hvdz1cXFwidGVhbS5hY3RpdmUgJiYgdGVhbS5tZXNzYWdlLmxlbmd0aCA+IDBcXFwiIHRpdGxlPVxcXCJIYXMgbWVzc2FnZSBmcm9tIGNvbW1pc2hcXFwiPjwvaT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXRpbWVzIGZhLWZ3XFxcIiB0aXRsZT1cXFwiRGVhY3RpdmF0ZWQgVGVhbVxcXCIgbmctc2hvdz1cXFwiIXRlYW0uYWN0aXZlXFxcIj48L2k+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS10aHVtYnMtZG93biBmYS1md1xcXCIgdGl0bGU9XFxcIkRlYWQgVGVhbVxcXCIgbmctc2hvdz1cXFwidGVhbS5hY3RpdmUgJiYgIXRlYW0uYWxpdmVcXFwiPjwvaT4gPHNwYW4gbmctY2xhc3M9XFxcInsnZGVhZC10ZWFtLW5hbWUnOiAhdGVhbS5hY3RpdmV9XFxcIj57e3RlYW0ubmFtZX19PC9zcGFuPjxicj48c3BhbiBjbGFzcz1cXFwidGVhbS1sZWFndWVcXFwiPnt7dGVhbS5sZWFndWUubmFtZX19PC9zcGFuPjwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY3VycmVudC1waWNrXFxcIiBuZy1jbGFzcz1cXFwieyduby1waWNrJzogaGFzTm9QaWNrKHRlYW0pfVxcXCIgbmctc2hvdz1cXFwidGVhbS5hY3RpdmUgJiYgdGVhbS5zdGFydGVkXFxcIj5DdXJyZW50IExvc2VyOiBbIDxzcGFuIGNsYXNzPVxcXCJjdXJyZW50LWxvc2VyLW5hbWVcXFwiPnt7dGVhbS5sYXN0X3BpY2tfc3F1YWQubmFtZX19PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJjdXJyZW50LWxvc2VyLWFiYnJldlxcXCI+e3t0ZWFtLmxhc3RfcGlja19zcXVhZC5hYmJyZXZ9fTwvc3Bhbj4gXTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImN1cnJlbnQtcGlja1xcXCIgbmctc2hvdz1cXFwidGVhbS5hY3RpdmUgJiYgIXRlYW0uc3RhcnRlZFxcXCI+U3RhcnRzIHt7dGVhbS5zdGFydF93ZWVrfX08L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbmFjdGl2ZS10ZWFtXFxcIiBuZy1zaG93PVxcXCIhdGVhbS5hY3RpdmVcXFwiPkNvbnRhY3QgdGhlIGNvbW1pc2ggdG8gcmVhY3RpdmF0ZSB0ZWFtPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYmFkZ2VcXFwiPlZpZXc8L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9hPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJteS1sZWFndWUtcGFnaW5hdGlvblxcXCIgbmctc2hvdz1cXFwidGVhbXMubGVuZ3RoID4gdGVhbXNQZXJQYWdlICYmICh0ZWFtcyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0KS5sZW5ndGggPiAwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPHBhZ2luYXRpb24gYm91bmRhcnktbGlua3M9XFxcInRydWVcXFwiIG1heC1zaXplPVxcXCI0XFxcIiB0b3RhbC1pdGVtcz1cXFwiKHRlYW1zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aFxcXCIgaXRlbXMtcGVyLXBhZ2U9XFxcInRlYW1zUGVyUGFnZVxcXCIgbmctbW9kZWw9XFxcImN1cnJlbnRUZWFtUGFnZVxcXCIgY2xhc3M9XFxcInBhZ2luYXRpb24tbWRcXFwiIHByZXZpb3VzLXRleHQ9XFxcIiZsc2FxdW87XFxcIiBuZXh0LXRleHQ9XFxcIiZyc2FxdW87XFxcIiBmaXJzdC10ZXh0PVxcXCImbGFxdW87XFxcIiBsYXN0LXRleHQ9XFxcIiZyYXF1bztcXFwiPjwvcGFnaW5hdGlvbj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPGRpdiBzdHlsZT1cXFwiY2xlYXI6IGJvdGg7XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJ0ZWFtcy1hbGVydCBhbGVydCBhbGVydC1pbmZvXFxcIiBuZy1zaG93PVxcXCIodGVhbXMgfCBhbGl2ZVRlYW1GaWx0ZXI6dGVhbU9wdGlvbnMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCkubGVuZ3RoID09IDBcXFwiPlxcblwiICtcbiAgICBcIiAgTm8gdGVhbXMgOiggTWF5YmUgeW91IHNob3VsZCA8YSBjbGFzcz1cXFwiYWxlcnQtbGlua1xcXCIgbmctY2xpY2s9XFxcImpvaW5MZWFndWUoc2Vhc29uKVxcXCI+am9pbiBhIGxlYWd1ZTwvYT4gcHJvbnRvIVxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvdGVhbS9lZGl0L3RlYW0uZWRpdC50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS90ZWFtL2VkaXQvdGVhbS5lZGl0LnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5FZGl0IFRlYW08L2gzPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgPGZvcm0gbmFtZT1cXFwiZWRpdFRlYW1Gb3JtXFxcIiBjbGFzcz1cXFwiZWRpdC10ZWFtLWZvcm0gZm9ybS1ob3Jpem9udGFsXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihlZGl0VGVhbUZvcm0udGVhbU5hbWUpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IoZWRpdFRlYW1Gb3JtLnRlYW1OYW1lKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBmb3I9XFxcInRlYW1OYW1lXFxcIiBjbGFzcz1cXFwiY29sLXNtLTMgY29udHJvbC1sYWJlbFxcXCI+VGVhbSBOYW1lOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTlcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGlucHV0IGlkPVxcXCJ0ZWFtTmFtZVxcXCIgbmFtZT1cXFwidGVhbU5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciBhIHRlYW0gbmFtZVxcXCIgbmctbW9kZWw9XFxcInRlYW1EYXRhLm5hbWVcXFwiIG5nLW1heGxlbmd0aD1cXFwiMzBcXFwiIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJpbnB1dC1lcnJvclxcXCIgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihlZGl0VGVhbUZvcm0udGVhbU5hbWUsICdyZXF1aXJlZCcpXFxcIj5SZXF1aXJlZDwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGVkaXRUZWFtRm9ybS50ZWFtTmFtZSwgJ21heGxlbmd0aCcpXFxcIj5Ub28gTG9uZzwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihlZGl0VGVhbUZvcm0udGVhbU5hbWUpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9mb3JtPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+Q2FuY2VsPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG5nLWRpc2FibGVkPVxcXCJlZGl0VGVhbUZvcm0uJGludmFsaWRcXFwiIG5nLWNsaWNrPVxcXCJlZGl0VGVhbSh0ZWFtRGF0YSlcXFwiPlVwZGF0ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvdGVhbS9tZXNzYWdlL3RlYW0ubWVzc2FnZS50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS90ZWFtL21lc3NhZ2UvdGVhbS5tZXNzYWdlLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5VcGRhdGUgTWVzc2FnZTwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8Zm9ybSBuYW1lPVxcXCJtZXNzYWdlRm9ybVxcXCIgY2xhc3M9XFxcInRlYW0tbWVzc2FnZS1mb3JtIGZvcm0taG9yaXpvbnRhbFxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZT5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IobWVzc2FnZUZvcm0ubWVzc2FnZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihtZXNzYWdlRm9ybS5tZXNzYWdlKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBmb3I9XFxcIm1lc3NhZ2VcXFwiIGNsYXNzPVxcXCJjb2wtc20tNCBjb250cm9sLWxhYmVsXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIFRlYW0gTWVzc2FnZTogPGJyPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJpbnB1dC1lcnJvclxcXCIgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihtZXNzYWdlRm9ybS5tZXNzYWdlLCAnbWF4bGVuZ3RoJylcXFwiPlsgVG9vIExvbmcgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8dGV4dGFyZWEgaWQ9XFxcIm1lc3NhZ2VcXFwiIG5hbWU9XFxcIm1lc3NhZ2VcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciBhIG1lc3NhZ2UgdG8gcHV0IG9uIHRoZSB0ZWFtJ3Mgd2FsbC4uLlxcXCIgcm93cz1cXFwiM1xcXCIgbmctbWF4bGVuZ3RoPVxcXCIyMDBcXFwiIG5nLW1vZGVsPVxcXCJ0ZWFtRGF0YS5tZXNzYWdlXFxcIj48L3RleHRhcmVhPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZW1haWwtdGVhbS1tZXNzYWdlLWNoZWNrYm94XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcIm1lc3NhZ2VPcHRpb25zLnNlbmRFbWFpbFxcXCI+IGVtYWlsIG1lc3NhZ2UgdG8gY29hY2g8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihtZXNzYWdlRm9ybS5tZXNzYWdlKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZm9ybT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwibWVzc2FnZUZvcm0uJHByaXN0aW5lIHx8IG1lc3NhZ2VGb3JtLiRpbnZhbGlkXFxcIiBuZy1jbGljaz1cXFwidXBkYXRlTWVzc2FnZSh0ZWFtRGF0YSwgbWVzc2FnZU9wdGlvbnMuc2VuZEVtYWlsKVxcXCI+VXBkYXRlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS90ZWFtL3RlYW0udHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvdGVhbS90ZWFtLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IHVpLXZpZXc9XFxcInRlYW1Db250ZW50XFxcIiBjbGFzcz1cXFwidGVhbS1jb250ZW50XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL3RlYW0vdmlldy90ZWFtLnZpZXcudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvdGVhbS92aWV3L3RlYW0udmlldy50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiBuZy1zaG93PVxcXCIhdGVhbURhdGEuYWN0aXZlXFxcIj5UaGlzIHRlYW0gaGFzIGJlZW4gZGVhY3RpdmF0ZWQgYnkgdGhlIGNvbW1pc2ggYW5kIHdpbGwgYmUgdW5hYmxlIHRvIHBpY2sgbG9zZXJzLiA8YSBjbGFzcz1cXFwiYWxlcnQtbGlua1xcXCIgbmctY2xpY2s9XFxcImNvbnRhY3RDb21taXNoKHRlYW1EYXRhKVxcXCI+Q29udGFjdCB0aGUgY29tbWlzaDwvYT4gaWYgeW91IGhhdmUgcXVlc3Rpb25zLjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgbmctc2hvdz1cXFwidGVhbURhdGEuYWN0aXZlICYmIHRlYW1EYXRhLmFsaXZlICYmIHRlYW1EYXRhLnN0YXJ0ZWQgJiYgaGFzTm9QaWNrKHRlYW1EYXRhKVxcXCI+VGhpcyB0ZWFtIGhhcyBubyBwaWNrIGZvciB0aGUgY3VycmVudCB3ZWVrLiBQaWNrIGEgbG9zZXIgYmVmb3JlIGl0J3MgdG9vIGxhdGUsIGJ1ZGR5LjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgbmctc2hvdz1cXFwidGVhbURhdGEuYWN0aXZlICYmICF0ZWFtRGF0YS5hbGl2ZVxcXCI+VGhpcyB0ZWFtIGlzIERFQUQuIEkgZ3Vlc3MgeW91J3JlIG5vdCB0aGUgbG9zZXIgeW91IHRob3VnaHQgeW91IHdlcmUuPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtd2FybmluZ1xcXCIgbmctc2hvdz1cXFwidGVhbURhdGEuYWN0aXZlICYmICF0ZWFtRGF0YS5zdGFydGVkXFxcIj5Zb3UgY2FuIG1ha2UgeW91ciBmaXJzdCBwaWNrIHdoZW4gdGhlIGxlYWd1ZSBzdGFydHMgLSB7e3RlYW1EYXRhLnN0YXJ0X3dlZWtfZGlzcGxheX19PC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwiaGVhZGVyLXJvdyByb3dcXFwiPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTggY29sLW1kLThcXFwiPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXAgdGVhbXMtZHJvcGRvd25cXFwiIGRyb3Bkb3duIGlzLW9wZW49XFxcInRlYW1zRHJvcGRvd24uaXNvcGVuXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcInRlYW1zLWJ0bi1saW5rIGJ0biBidG4tbGluayBidG4tbGcgZHJvcGRvd24tdG9nZ2xlXFxcIiBuZy1kaXNhYmxlZD1cXFwiIWlzQ29hY2godGVhbURhdGEpXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS10aHVtYnMtdXAgZmEtZndcXFwiIHRpdGxlPVxcXCJBbGl2ZVxcXCIgbmctc2hvdz1cXFwidGVhbURhdGEuYWxpdmVcXFwiPjwvaT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS10aHVtYnMtZG93biBmYS1md1xcXCIgdGl0bGU9XFxcIkRlYWRcXFwiIG5nLXNob3c9XFxcIiF0ZWFtRGF0YS5hbGl2ZVxcXCI+PC9pPiA8c3Ryb25nPjxzcGFuIG5nLWNsYXNzPVxcXCJ7J3RlYW0tYWxpdmUnOiB0ZWFtRGF0YS5hbGl2ZSwgJ3RlYW0tZGVhZCc6ICF0ZWFtRGF0YS5hbGl2ZX1cXFwiPnt7dGVhbURhdGEubmFtZX19IDxzcGFuIG5nLXNob3c9XFxcImlzQ29hY2godGVhbURhdGEpXFxcIiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvc3Bhbj48L3NwYW4+PC9zdHJvbmc+XFxuXCIgK1xuICAgIFwiICAgICAgPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51IHRlYW1zLWJ0bi1tZW51XFxcIiByb2xlPVxcXCJtZW51XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaT48YSBuZy1jbGljaz1cXFwiZWRpdFRlYW0odGVhbURhdGEpXFxcIj5FZGl0IHt7dGVhbURhdGEubmFtZX19PC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGkgY2xhc3M9XFxcImRpdmlkZXJcXFwiIG5nLXNob3c9XFxcImxlYWd1ZVRlYW1zLmxlbmd0aCA+IDFcXFwiPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGkgbmctcmVwZWF0PVxcXCJ0ZWFtIGluIGxlYWd1ZVRlYW1zXFxcIiBuZy1zaG93PVxcXCJ0ZWFtLmlkICE9IHRlYW1EYXRhLmlkXFxcIj48YSBuZy1jbGljaz1cXFwic2hvd1RlYW0odGVhbSlcXFwiPjxzcGFuIG5nLXNob3c9XFxcInRlYW0uYWN0aXZlICYmIHRlYW0uYWxpdmVcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS10aHVtYnMtdXAgZmEtZndcXFwiPjwvaT48L3NwYW4+PHNwYW4gbmctc2hvdz1cXFwidGVhbS5hY3RpdmUgJiYgIXRlYW0uYWxpdmVcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS10aHVtYnMtZG93biBmYS1md1xcXCI+PC9pPjwvc3Bhbj48c3BhbiBuZy1zaG93PVxcXCIhdGVhbS5hY3RpdmVcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS10aW1lcyBmYS1md1xcXCI+PC9pPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcIm90aGVyLXRlYW0tbmFtZVxcXCIgbmctY2xhc3M9XFxcInsndGVhbS1pbmFjdGl2ZSc6ICF0ZWFtLmFjdGl2ZX1cXFwiPnt7dGVhbS5uYW1lfX08L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJvdGhlci10ZWFtLXBpY2tcXFwiPnt7dGVhbS5sYXN0X3BpY2tfc3F1YWQubmFtZX19PC9zcGFuPjwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgIDwvdWw+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8aDMgY2xhc3M9XFxcInRlYW0tbGVhZ3VlLW5hbWVcXFwiPjxzbWFsbD48YSBuZy1jbGljaz1cXFwic2hvd0xlYWd1ZSh0ZWFtRGF0YSlcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1ncm91cCBmYS1md1xcXCI+PC9pPiA8ZW0+e3t0ZWFtRGF0YS5sZWFndWUubmFtZX19PC9lbT48L2E+PC9zbWFsbD48L2gzPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNCBjb2wtbWQtNFxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwibWFrZS1waWNrLWJ0biBidG4gYnRuLXByaW1hcnkgYnRuLXNtXFxcIiBuZy1zaG93PVxcXCJpc0NvYWNoKHRlYW1EYXRhKVxcXCIgbmctY2xpY2s9XFxcIm1ha2VQaWNrKHRlYW1EYXRhKVxcXCIgbmctZGlzYWJsZWQ9XFxcIiF0ZWFtRGF0YS5zdGFydGVkXFxcIj5QaWNrIExvc2VyPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImJ0bi1ncm91cCB0ZWFtLWFjdGlvbnNcXFwiIG5nLXNob3c9XFxcImlzQ29hY2godGVhbURhdGEpIHx8IGlzQ29tbWlzaCh0ZWFtRGF0YSlcXFwiIGRyb3Bkb3duIGlzLW9wZW49XFxcImNvYWNoLmlzb3BlblxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJhY3Rpb25zLWJ0biBidG4gYnRuLWRlZmF1bHQgYnRuLXNtIGRyb3Bkb3duLXRvZ2dsZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3Ryb25nPkFjdGlvbnM8L3N0cm9uZz4gPHNwYW4gY2xhc3M9XFxcImNhcmV0XFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51IHRlYW0tYWN0aW9ucy1tZW51XFxcIiByb2xlPVxcXCJtZW51XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaT48YSBuZy1jbGljaz1cXFwiZWRpdFRlYW0odGVhbURhdGEpXFxcIj5FZGl0IHt7dGVhbURhdGEubmFtZX19PC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGkgbmctc2hvdz1cXFwiIWlzQ29tbWlzaCh0ZWFtRGF0YSlcXFwiPjxhIG5nLWNsaWNrPVxcXCJjb250YWN0Q29tbWlzaCh0ZWFtRGF0YSlcXFwiPkNvbnRhY3QgdGhlIGNvbW1pc2g8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaT48YSBuZy1jbGljaz1cXFwicmVwb3J0QWJ1c2UoKVxcXCI+UmVwb3J0IGFidXNlPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGk+PGEgbmctY2xpY2s9XFxcInJlcG9ydEFidXNlKClcXFwiPlJlcG9ydCBhIGJ1ZzwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgICAgPGxpIG5nLXNob3c9XFxcImlzQ29tbWlzaCh0ZWFtRGF0YSlcXFwiIGNsYXNzPVxcXCJkaXZpZGVyXFxcIj48L2xpPlxcblwiICtcbiAgICBcIiAgICAgICAgPGxpPjxhIG5nLXNob3c9XFxcImlzQ29tbWlzaCh0ZWFtRGF0YSlcXFwiIG5nLWNsaWNrPVxcXCJ1cGRhdGVNZXNzYWdlKHRlYW1EYXRhKVxcXCI+RWRpdCB0ZWFtIG1lc3NhZ2U8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaSBuZy1zaG93PVxcXCJpc0NvbW1pc2godGVhbURhdGEpICYmICF0ZWFtRGF0YS5hY3RpdmVcXFwiPjxhIG5nLWNsaWNrPVxcXCJhY3RpdmF0ZSh0ZWFtRGF0YSlcXFwiPlJlYWN0aXZhdGUgdGhpcyB0ZWFtPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGkgbmctc2hvdz1cXFwiaXNDb21taXNoKHRlYW1EYXRhKSAmJiB0ZWFtRGF0YS5hY3RpdmVcXFwiPjxhIG5nLWNsaWNrPVxcXCJkZWFjdGl2YXRlKHRlYW1EYXRhKVxcXCI+RGVhY3RpdmF0ZSB0aGlzIHRlYW08L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICA8L3VsPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcInRlYW0tbWVzc2FnZSB3ZWxsIHdlbGwtc21cXFwiIG5nLXNob3c9XFxcImlzQ29tbWlzaCh0ZWFtRGF0YSkgfHwgaXNDb2FjaCh0ZWFtRGF0YSlcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1jb21tZW50IGZhLWZ3XFxcIiB0aXRsZT1cXFwiTWVzc2FnZSBmb3IgdGhpcyB0ZWFtXFxcIj48L2k+IDxzdHJvbmc+QSBwcml2YXRlIG1lc3NhZ2UgZnJvbSB0aGUgY29tbWlzaDo8L3N0cm9uZz4gPHAgY2xhc3M9XFxcInRlYW0tbWVzc2FnZS10ZXh0XFxcIiBuZy1zaG93PVxcXCIhdGVhbURhdGEubWVzc2FnZSB8fCB0ZWFtRGF0YS5tZXNzYWdlLmxlbmd0aCA9PSAwXFxcIj5Ob3RoaW5nPC9wPjxwIGNsYXNzPVxcXCJ0ZWFtLW1lc3NhZ2UtdGV4dFxcXCIgbmctc2hvdz1cXFwidGVhbURhdGEubWVzc2FnZS5sZW5ndGggPiAwXFxcIiBuZy1iaW5kLWh0bWw9XFxcInRlYW1EYXRhLm1lc3NhZ2UgfCBsaW5reTonX2JsYW5rJ1xcXCI+PC9wPiA8YSBuZy1zaG93PVxcXCJpc0NvbW1pc2godGVhbURhdGEpXFxcIiBuZy1jbGljaz1cXFwidXBkYXRlTWVzc2FnZSh0ZWFtRGF0YSlcXFwiPlsgZWRpdCBdPC9hPjxhIG5nLXNob3c9XFxcIiFpc0NvbW1pc2godGVhbURhdGEpXFxcIiBuZy1jbGljaz1cXFwiY29udGFjdENvbW1pc2godGVhbURhdGEpXFxcIj5bIGNvbnRhY3QgY29tbWlzaCBdPC9hPjwvZGl2PlxcblwiICtcbiAgICBcIjxocj5cXG5cIiArXG4gICAgXCI8aDQgY2xhc3M9XFxcImxvc2Vycy1oZWFkaW5nXFxcIj5Mb3NlciBQaWNrcyAoe3t0ZWFtRGF0YS5waWNrX2NvdW50fX0pIDxzbWFsbCBuZy1zaG93PVxcXCJ0ZWFtRGF0YS5zdGFydGVkICYmIGlzQ29hY2godGVhbURhdGEpXFxcIj48YSBuZy1jbGljaz1cXFwibWFrZVBpY2sodGVhbURhdGEpXFxcIj5bIHBpY2sgbG9zZXIgXTwvYT48L3NtYWxsPjwvaDQ+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwidGVhbS1jb250YWluZXJcXFwiIHN0eWxlPVxcXCJjbGVhcjpib3RoO1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInRlYW0tcGlja3MgbGlzdC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGEgbmctcmVwZWF0PVxcXCJwaWNrIGluIHBpY2tzXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIiBuZy1jbGljaz1cXFwibWFrZVBpY2sodGVhbURhdGEsIHBpY2spXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndlZWstbmFtZSBjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWxvY2sgZmEtZndcXFwiIG5nLXNob3c9XFxcInBpY2subG9ja2VkICYmIHBpY2suY29ycmVjdCA9PSBudWxsXFxcIiB0aXRsZT1cXFwiUGljayBsb2NrZWRcXFwiPjwvaT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdW5sb2NrIGZhLWZ3XFxcIiBuZy1zaG93PVxcXCIhcGljay5sb2NrZWQgJiYgcGljay5jb3JyZWN0ID09IG51bGxcXFwiIHRpdGxlPVxcXCJQaWNrIHVubG9ja2VkXFxcIj48L2k+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXRodW1icy1kb3duIGZhLWZ3XFxcIiBuZy1zaG93PVxcXCJwaWNrLmNvcnJlY3QgPT09IGZhbHNlXFxcIiB0aXRsZT1cXFwiUGljayB3cm9uZ1xcXCI+PC9pPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS10aHVtYnMtdXAgZmEtZndcXFwiIG5nLXNob3c9XFxcInBpY2suY29ycmVjdCA9PT0gdHJ1ZVxcXCIgdGl0bGU9XFxcIlBpY2sgY29ycmVjdFxcXCI+PC9pPiA8c3BhbiBjbGFzcz1cXFwicGljay1zcXVhZFxcXCIgbmctY2xhc3M9XFxcInsncGljay1jb3JyZWN0JzogcGljay5jb3JyZWN0ID09PSB0cnVlLCAncGljay1pbmNvcnJlY3QnOiBwaWNrLmNvcnJlY3QgPT09IGZhbHNlfVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJwaWNrLXNxdWFkLW5hbWVcXFwiPlsge3twaWNrLnNxdWFkLm5hbWV9fSBdPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJwaWNrLXNxdWFkLWFiYnJldlxcXCI+WyB7e3BpY2suc3F1YWQuYWJicmV2fX0gXTwvc3Bhbj48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJnYW1lXFxcIj5XZWVrIHt7cGljay53ZWVrX251bWJlcn19ICh7e3BpY2sud2Vla190eXBlfX0pPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ2FtZS1jb2x1bW4gY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnYW1lXFxcIj57e3BpY2suZ2FtZV9kaXNwbGF5fX08L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9hPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtaW5mb1xcXCIgbmctc2hvdz1cXFwicGlja3MubGVuZ3RoID09IDBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIE5vIHBpY2tzXFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvdGVhbXMvYWxpdmUvdGVhbXMuYWxpdmUudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvdGVhbXMvYWxpdmUvdGVhbXMuYWxpdmUudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcImFsaXZlLXRlYW1zIGxpc3QtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICA8YSBuZy1yZXBlYXQ9XFxcInRlYW0gaW4gYWxpdmVUZWFtcyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0IHwgb2Zmc2V0RmlsdGVyOihjdXJyZW50VGVhbVBhZ2UtMSkqdGVhbXNQZXJQYWdlIHwgbGltaXRUbzp0ZWFtc1BlclBhZ2VcXFwiIG5nLWNsaWNrPVxcXCJzaG93VGVhbShzZWFzb25JZCwgdGVhbSlcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0ZWFtLW5hbWUgY29sLXNtLTYgY29sLW1kLTZcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1jb21tZW50IGZhLWZ3XFxcIiBuZy1zaG93PVxcXCJ0ZWFtLm1lc3NhZ2UubGVuZ3RoID4gMFxcXCIgdGl0bGU9XFxcIkhhcyBtZXNzYWdlIGZyb20gY29tbWlzaFxcXCI+PC9pPjxpIGNsYXNzPVxcXCJmYSBmYS10aW1lcyBmYS1md1xcXCIgdGl0bGU9XFxcIkRlYWN0aXZhdGVkIFRlYW1cXFwiIG5nLXNob3c9XFxcIiF0ZWFtLmFjdGl2ZVxcXCI+PC9pPiA8c3BhbiBuZy1jbGFzcz1cXFwieydpbmFjdGl2ZS10ZWFtLW5hbWUnOiAhdGVhbS5hY3RpdmV9XFxcIj57e3RlYW0ubmFtZX19PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidGVhbS1sZWFndWVcXFwiPnt7dGVhbS5sZWFndWUubmFtZX19PC9zcGFuPjwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImN1cnJlbnQtcGlja1xcXCIgbmctY2xhc3M9XFxcInsnbm8tcGljayc6IGhhc05vUGljayh0ZWFtKX1cXFwiIG5nLXNob3c9XFxcInRlYW0uYWN0aXZlXFxcIj5DdXJyZW50IExvc2VyOiB7e3RlYW0ubGFzdF9waWNrX3NxdWFkLm5hbWV9fTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImluYWN0aXZlLXRlYW1cXFwiIG5nLXNob3c9XFxcIiF0ZWFtLmFjdGl2ZVxcXCI+Q29udGFjdCB0aGUgY29tbWlzaCB0byByZWFjdGl2YXRlIHRlYW08L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJiYWRnZVxcXCI+Vmlldzwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2E+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwiYWxpdmUtdGVhbXMtcGFnaW5hdGlvblxcXCIgbmctc2hvdz1cXFwiYWxpdmVUZWFtcy5sZW5ndGggPiB0ZWFtc1BlclBhZ2UgJiYgKGFsaXZlVGVhbXMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCkubGVuZ3RoID4gMFxcXCI+XFxuXCIgK1xuICAgIFwiICA8cGFnaW5hdGlvbiBib3VuZGFyeS1saW5rcz1cXFwidHJ1ZVxcXCIgbWF4LXNpemU9XFxcIjRcXFwiIHRvdGFsLWl0ZW1zPVxcXCIoYWxpdmVUZWFtcyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0KS5sZW5ndGhcXFwiIGl0ZW1zLXBlci1wYWdlPVxcXCJ0ZWFtc1BlclBhZ2VcXFwiIG5nLW1vZGVsPVxcXCJjdXJyZW50VGVhbVBhZ2VcXFwiIGNsYXNzPVxcXCJwYWdpbmF0aW9uLW1kXFxcIiBwcmV2aW91cy10ZXh0PVxcXCImbHNhcXVvO1xcXCIgbmV4dC10ZXh0PVxcXCImcnNhcXVvO1xcXCIgZmlyc3QtdGV4dD1cXFwiJmxhcXVvO1xcXCIgbGFzdC10ZXh0PVxcXCImcmFxdW87XFxcIj48L3BhZ2luYXRpb24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBzdHlsZT1cXFwiY2xlYXI6IGJvdGg7XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1pbmZvXFxcIiBuZy1zaG93PVxcXCJhbGl2ZVRlYW1zLmxlbmd0aCA9PSAwXFxcIj5cXG5cIiArXG4gICAgXCIgIE5vIGFsaXZlIHRlYW1zIDooIE1heWJlIHlvdSBzaG91bGQgPGEgY2xhc3M9XFxcImFsZXJ0LWxpbmtcXFwiIG5nLWNsaWNrPVxcXCJjcmVhdGVUZWFtKHNlYXNvbklkKVxcXCI+am9pbiBhIGxlYWd1ZTwvYT4gcHJvbnRvIVxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvdGVhbXMvZGVhZC90ZWFtcy5kZWFkLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL3RlYW1zL2RlYWQvdGVhbXMuZGVhZC50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwiZGVhZC10ZWFtcyBsaXN0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgIDxhIG5nLXJlcGVhdD1cXFwidGVhbSBpbiBkZWFkVGVhbXMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCB8IG9mZnNldEZpbHRlcjooY3VycmVudFRlYW1QYWdlLTEpKnRlYW1zUGVyUGFnZSB8IGxpbWl0VG86dGVhbXNQZXJQYWdlXFxcIiBuZy1jbGljaz1cXFwic2hvd1RlYW0oc2Vhc29uSWQsIHRlYW0pXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGVhbS1uYW1lIGNvbC1zbS02IGNvbC1tZC02XFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtY29tbWVudCBmYS1md1xcXCIgbmctc2hvdz1cXFwidGVhbS5tZXNzYWdlLmxlbmd0aCA+IDBcXFwiIHRpdGxlPVxcXCJIYXMgbWVzc2FnZSBmcm9tIGNvbW1pc2hcXFwiPjwvaT4gPGkgY2xhc3M9XFxcImZhIGZhLXRpbWVzIGZhLWZ3XFxcIiB0aXRsZT1cXFwiRGVhY3RpdmF0ZWQgVGVhbVxcXCIgbmctc2hvdz1cXFwiIXRlYW0uYWN0aXZlXFxcIj48L2k+IDxzcGFuIG5nLWNsYXNzPVxcXCJ7J2luYWN0aXZlLXRlYW0tbmFtZSc6ICF0ZWFtLmFjdGl2ZX1cXFwiPnt7dGVhbS5uYW1lfX08L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0ZWFtLWxlYWd1ZVxcXCI+e3t0ZWFtLmxlYWd1ZS5uYW1lfX08L3NwYW4+PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY3VycmVudC1waWNrIG5vLXBpY2tcXFwiIG5nLXNob3c9XFxcInRlYW0uYWN0aXZlXFxcIj5MYXN0IFBpY2s6IHt7dGVhbS5sYXN0X3BpY2tfc3F1YWQubmFtZX19PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5hY3RpdmUtdGVhbVxcXCIgbmctc2hvdz1cXFwiIXRlYW0uYWN0aXZlXFxcIj5EZWFjdGl2YXRlZCBieSB0aGUgY29tbWlzaDwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJhZGdlXFxcIj5WaWV3PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvYT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJkZWFkLXRlYW1zLXBhZ2luYXRpb25cXFwiIG5nLXNob3c9XFxcImRlYWRUZWFtcy5sZW5ndGggPiB0ZWFtc1BlclBhZ2UgJiYgKGRlYWRUZWFtcyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0KS5sZW5ndGggPiAwXFxcIj5cXG5cIiArXG4gICAgXCIgIDxwYWdpbmF0aW9uIGJvdW5kYXJ5LWxpbmtzPVxcXCJ0cnVlXFxcIiBtYXgtc2l6ZT1cXFwiNFxcXCIgdG90YWwtaXRlbXM9XFxcIihkZWFkVGVhbXMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCkubGVuZ3RoXFxcIiBpdGVtcy1wZXItcGFnZT1cXFwidGVhbXNQZXJQYWdlXFxcIiBuZy1tb2RlbD1cXFwiY3VycmVudFRlYW1QYWdlXFxcIiBjbGFzcz1cXFwicGFnaW5hdGlvbi1tZFxcXCIgcHJldmlvdXMtdGV4dD1cXFwiJmxzYXF1bztcXFwiIG5leHQtdGV4dD1cXFwiJnJzYXF1bztcXFwiIGZpcnN0LXRleHQ9XFxcIiZsYXF1bztcXFwiIGxhc3QtdGV4dD1cXFwiJnJhcXVvO1xcXCI+PC9wYWdpbmF0aW9uPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgc3R5bGU9XFxcImNsZWFyOiBib3RoO1xcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtaW5mb1xcXCIgbmctc2hvdz1cXFwiZGVhZFRlYW1zLmxlbmd0aCA9PSAwXFxcIj5cXG5cIiArXG4gICAgXCIgIE5vIGRlYWQgdGVhbXMgOilcXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL3RlYW1zL3RlYW1zLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL3RlYW1zL3RlYW1zLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJ0ZWFtcy1oZWFkZXItcm93IHJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOSBjb2wtbWQtOVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxoMz5JIGNvYWNoIHRoZXNlIHRlYW1zLi4uPC9oMz5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTMgY29sLW1kLTNcXFwiPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJ0ZWFtcy1idG4tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY3JlYXRlLXRlYW0tYnRuIGJ0biBidG4tcHJpbWFyeSBidG4tc21cXFwiIG5nLWNsaWNrPVxcXCJjcmVhdGVUZWFtKHNlYXNvbklkKVxcXCI+Sm9pbiBMZWFndWU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8aHI+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwidGVhbXMtY29udGFpbmVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDx1bCBjbGFzcz1cXFwibmF2IG5hdi10YWJzXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGxpIG5nLWNsYXNzPVxcXCJ7J2FjdGl2ZSc6IGlzQWxpdmVTdGF0ZSgpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGEgbmctY2xpY2s9XFxcImFsaXZlVGVhbXMoc2Vhc29uSWQpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtdGh1bWJzLXVwIGZhLWZ3XFxcIiB0aXRsZT1cXFwiQWxpdmUgdGVhbXNcXFwiPjwvaT4gQWxpdmUgVGVhbXM8L2E+XFxuXCIgK1xuICAgIFwiICAgIDwvbGk+XFxuXCIgK1xuICAgIFwiICAgIDxsaSBuZy1jbGFzcz1cXFwieydhY3RpdmUnOiAhaXNBbGl2ZVN0YXRlKCl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YSBuZy1jbGljaz1cXFwiZGVhZFRlYW1zKHNlYXNvbklkKVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXRodW1icy1kb3duIGZhLWZ3XFxcIiB0aXRsZT1cXFwiRGVhZCB0ZWFtc1xcXCI+PC9pPiBEZWFkIFRlYW1zPC9hPlxcblwiICtcbiAgICBcIiAgICA8L2xpPlxcblwiICtcbiAgICBcIiAgPC91bD5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8IS0tIHBsYWNlaG9sZGVyIGZvciBhbGl2ZSBhbmQgZGVhZCB0ZWFtcyAtLT5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJ0ZWFtcy1jb250ZW50XFxcIiB1aS12aWV3PVxcXCJ0ZWFtc0NvbnRlbnRcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvdXNlci9yZXNldC91c2VyLnJlc2V0LnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL3VzZXIvcmVzZXQvdXNlci5yZXNldC50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+UmVzZXQgUGFzc3dvcmQ8L2gzPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgPGZvcm0gbmFtZT1cXFwicmVzZXRQYXNzd29yZEZvcm1cXFwiIGNsYXNzPVxcXCJyZXNldC1wYXNzd29yZC1mb3JtIGZvcm0taG9yaXpvbnRhbFxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZT5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IocmVzZXRQYXNzd29yZEZvcm0uZW1haWwpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IocmVzZXRQYXNzd29yZEZvcm0uZW1haWwpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGZvcj1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIj5FbWFpbDo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8aW5wdXQgaWQ9XFxcImVtYWlsXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciB5b3VyIGVtYWlsXFxcIiBuZy1tb2RlbD1cXFwidXNlckRhdGEuZW1haWxcXFwiIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJpbnB1dC1lcnJvclxcXCIgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihyZXNldFBhc3N3b3JkRm9ybS5lbWFpbCwgJ3JlcXVpcmVkJylcXFwiPlJlcXVpcmVkPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IocmVzZXRQYXNzd29yZEZvcm0uZW1haWwsICdlbWFpbCcpXFxcIj5JbnZhbGlkIGVtYWlsPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKHJlc2V0UGFzc3dvcmRGb3JtLmVtYWlsKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZm9ybT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwicmVzZXRQYXNzd29yZEZvcm0uJHByaXN0aW5lIHx8IHJlc2V0UGFzc3dvcmRGb3JtLiRpbnZhbGlkXFxcIiBuZy1jbGljaz1cXFwicmVzZXQodXNlckRhdGEuZW1haWwpXFxcIj5SZXNldDwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvdXNlci91c2VyLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL3VzZXIvdXNlci50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8aDMgY2xhc3M9XFxcInBhbmVsLXRpdGxlXFxcIj5Vc2VyIFByb2ZpbGU8L2gzPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8Zm9ybSBuYW1lPVxcXCJlZGl0VXNlckZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IoZWRpdFVzZXJGb3JtLmZpcnN0TmFtZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihlZGl0VXNlckZvcm0uZmlyc3ROYW1lKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiZmlyc3ROYW1lXFxcIj5GaXJzdCBOYW1lXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihlZGl0VXNlckZvcm0uZmlyc3ROYW1lLCAncmVxdWlyZWQnKVxcXCI+WyBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGVkaXRVc2VyRm9ybS5maXJzdE5hbWUsICdtYXhsZW5ndGgnKVxcXCI+WyBUb28gTG9uZyBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJmaXJzdE5hbWVcXFwiIG5hbWU9XFxcImZpcnN0TmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcInVzZXJEYXRhLnVzZXIuZmlyc3RfbmFtZVxcXCIgbmctbWF4bGVuZ3RoPVxcXCIxNVxcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKGVkaXRVc2VyRm9ybS5maXJzdE5hbWUpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihlZGl0VXNlckZvcm0ubGFzdE5hbWUpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IoZWRpdFVzZXJGb3JtLmxhc3ROYW1lKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwibGFzdE5hbWVcXFwiPkxhc3QgTmFtZVxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoZWRpdFVzZXJGb3JtLmxhc3ROYW1lLCAncmVxdWlyZWQnKVxcXCI+WyBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGVkaXRVc2VyRm9ybS5sYXN0TmFtZSwgJ21heGxlbmd0aCcpXFxcIj5bIFRvbyBMb25nIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcImxhc3ROYW1lXFxcIiBuYW1lPVxcXCJsYXN0TmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcInVzZXJEYXRhLnVzZXIubGFzdF9uYW1lXFxcIiBuZy1tYXhsZW5ndGg9XFxcIjIwXFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IoZWRpdFVzZXJGb3JtLmxhc3ROYW1lKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJlbWFpbFxcXCI+RW1haWw8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJlbWFpbFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIHR5cGU9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1kaXNhYmxlZD1cXFwidHJ1ZVxcXCIgbmctbW9kZWw9XFxcInVzZXJEYXRhLnVzZXIuZW1haWxcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihlZGl0VXNlckZvcm0ucGFzc3dvcmQpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IoZWRpdFVzZXJGb3JtLnBhc3N3b3JkKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwicGFzc3dvcmRcXFwiPk5ldyBQYXNzd29yZFxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoZWRpdFVzZXJGb3JtLnBhc3N3b3JkLCAnbWlubGVuZ3RoJylcXFwiPlsgOCAtIDUwIENoYXJhY3RlcnMgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihlZGl0VXNlckZvcm0ucGFzc3dvcmQsICdtYXhsZW5ndGgnKVxcXCI+WyA4IC0gNTAgQ2hhcmFjdGVycyBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwicGFzc3dvcmRcXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidXNlckRhdGEudXNlci5wYXNzd29yZFxcXCIgbmctbWlubGVuZ3RoPVxcXCI4XFxcIiBuZy1tYXhsZW5ndGg9XFxcIjUwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IoZWRpdFVzZXJGb3JtLnBhc3N3b3JkKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IoZWRpdFVzZXJGb3JtLmNvbmZpcm1QYXNzd29yZCksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihlZGl0VXNlckZvcm0uY29uZmlybVBhc3N3b3JkKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiY29uZmlybVBhc3N3b3JkXFxcIj5Db25maXJtIE5ldyBQYXNzd29yZFxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoZWRpdFVzZXJGb3JtLmNvbmZpcm1QYXNzd29yZCwgJ21hdGNoJylcXFwiPlsgTm8gTWF0Y2ggXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiBuYW1lPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidXNlckRhdGEudXNlci5wYXNzd29yZF9jb25maXJtYXRpb25cXFwiIG1hdGNoPVxcXCJ1c2VyRGF0YS51c2VyLnBhc3N3b3JkXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IoZWRpdFVzZXJGb3JtLmNvbmZpcm1QYXNzd29yZClcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWluZm8gYnRuLWJsb2NrXFxcIiBuZy1kaXNhYmxlZD1cXFwiZWRpdFVzZXJGb3JtLiRwcmlzdGluZSB8fCBlZGl0VXNlckZvcm0uJGludmFsaWRcXFwiIG5nLWNsaWNrPVxcXCJ1cGRhdGUodXNlckRhdGEudXNlcilcXFwiPlVwZGF0ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICAgIDwvZm9ybT5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3B1YmxpYy9hYnVzZS9hYnVzZS50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHVibGljL2FidXNlL2FidXNlLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5Db250YWN0IFVzPC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxmb3JtIG5hbWU9XFxcImFidXNlRm9ybVxcXCIgY2xhc3M9XFxcImNvbnRhY3QtZm9ybSBmb3JtLWhvcml6b250YWxcXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKGFidXNlRm9ybS5tZXNzYWdlKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKGFidXNlRm9ybS5tZXNzYWdlKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBmb3I9XFxcIm1lc3NhZ2VcXFwiIGNsYXNzPVxcXCJjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIj5NZXNzYWdlOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDx0ZXh0YXJlYSBpZD1cXFwibWVzc2FnZVxcXCIgbmFtZT1cXFwibWVzc2FnZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIldoYXQncyBvbiB5b3VyIG1pbmQ/XFxcIiByb3dzPVxcXCIzXFxcIiBtYXhsZW5ndGg9XFxcIjIwMFxcXCIgbmctbW9kZWw9XFxcImFidXNlTWVzc2FnZVxcXCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoYWJ1c2VGb3JtLm1lc3NhZ2UsICdyZXF1aXJlZCcpXFxcIj5SZXF1aXJlZDwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGFidXNlRm9ybS5tZXNzYWdlLCAnbWF4bGVuZ3RoJylcXFwiPlRvbyBMb25nPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKGFidXNlRm9ybS5tZXNzYWdlKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZm9ybT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwiYWJ1c2VGb3JtLiRwcmlzdGluZSB8fCBhYnVzZUZvcm0uJGludmFsaWRcXFwiIG5nLWNsaWNrPVxcXCJjb250YWN0VXMoYWJ1c2VNZXNzYWdlKVxcXCI+U2VuZDwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3B1YmxpYy9mYXEvZmFxLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wdWJsaWMvZmFxL2ZhcS50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjbG9zZSgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5GQVE8L2gzPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgPGRsIGNsYXNzPVxcXCJmYXFcXFwiPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+SG93IGRvIEkgcGxheT88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+XFxuXCIgK1xuICAgIFwiICAgICAgPHA+LSBKb2luIGEgbGVhZ3VlIG9yIGNyZWF0ZSB5b3VyIG93biBsZWFndWUuPC9wPlxcblwiICtcbiAgICBcIiAgICAgIDxwPi0gUGljayBPTkUgbG9zZXIgcGVyIHdlZWsuPC9wPlxcblwiICtcbiAgICBcIiAgICAgIDxwPi0gUm9vdCBmb3IgeW91ciBsb3NlciB0byBsb3NlLi4uZHVoPC9wPlxcblwiICtcbiAgICBcIiAgICAgIDxwPi0gSWYgeW91ciBsb3NlciBsb3NlcywgdGhlbiB5b3UgbW92ZSB0byB0aGUgbmV4dCB3ZWVrLjwvcD5cXG5cIiArXG4gICAgXCIgICAgICA8cD4tIFRoZSBsYXN0IHRlYW0gcmVtYWluaW5nIGluIHlvdXIgbGVhZ3VlIHdpbnMhPC9wPlxcblwiICtcbiAgICBcIiAgICA8L2RkPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+SG93IG11Y2ggZG9lcyBpdCBjb3N0PzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5aaXAuIFppbGNoLiBOYWRhLiBGcmVlZWVlZWVlZWVlZS4uLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5DYW4gSSBwaWNrIHRoZSBzYW1lIGxvc2VyIHR3aWNlPzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5Ob3BlLi4udW5sZXNzIHlvdSBtYWtlIHRoZSBwbGF5b2ZmcywgdGhlbiBhbGwgdGVhbXMgYXJlIG9uY2UgYWdhaW4gYXZhaWxhYmxlIHRvIGNob29zZSBmcm9tLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5EbyB0aWVzIGNvdW50IGFzIGEgbG9zcz88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+Tm8gc2lyLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5XaGF0IGlzIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gYSBwdWJsaWMgYW5kIHByaXZhdGUgbGVhZ3VlPzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5QdWJsaWMgbGVhZ3VlcyBhbGxvdyBhbnlvbmUgdG8gam9pbi4gUHJpdmF0ZSBsZWFndWVzIHJlcXVpcmUgYW4gaW52aXRhdGlvbiBmcm9tIHRoZSBjb21taXNoLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5UaGUgc2Vhc29uIGhhcyBhbHJlYWR5IHN0YXJ0ZWQsIGNhbiBJIHN0aWxsIHBsYXk/PC9kdD5cXG5cIiArXG4gICAgXCIgICAgPGRkPlllcC4gVGhlcmXigJlzIGFsd2F5cyBhbiBvcGVuIGxlYWd1ZSBvciBjcmVhdGUgeW91ciBvd24gbGVhZ3VlIHRvIHN0YXJ0IGFueXRpbWUgZHVyaW5nIHRoZSBzZWFzb24uPC9kZD5cXG5cIiArXG4gICAgXCIgICAgPGR0PldoZW4gaXMgdGhlIGRlYWRsaW5lIHRvIGpvaW4gYSBsZWFndWU/PC9kdD5cXG5cIiArXG4gICAgXCIgICAgPGRkPkpvaW4gYmVmb3JlIHRoZSBlbmQgb2YgdGhlIGxlYWd1ZSdzIGZpcnN0IHdlZWsuPC9kZD5cXG5cIiArXG4gICAgXCIgICAgPGR0PldoZW4gaXMgdGhlIGRlYWRsaW5lIHRvIG1ha2UgbXkgcGljaz88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+SnVzdCBnZXQgaXQgaW4gYmVmb3JlIHRoZSBnYW1lIHN0YXJ0cy48L2RkPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+V2hhdCBpZiBJIGZhaWwgdG8gbWFrZSBhIHBpY2sgZm9yIGEgd2Vlaz88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+WW914oCZcmUgZ29uZS4gSGl0IHRoZSByb2FkLCBKYWNrITwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5DYW4gdGhlIGNvbW1pc2ggbWFrZSBwaWNrcyBmb3IgbWU/PC9kdD5cXG5cIiArXG4gICAgXCIgICAgPGRkPk5lZ2F0aXZlLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5Ib3cgbWFueSB0aW1lcyBjYW4gSSBqb2luIGEgbGVhZ3VlPzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5BcyBtdWNoIGFzIHRoZSBjb21taXNoIGFsbG93cyAod2l0aCBhIG1heCBvZiAxMCB0aW1lcykuPC9kZD5cXG5cIiArXG4gICAgXCIgICAgPGR0PkhvdyBkbyBJIHdpbj88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+RG9u4oCZdCBiZSB3cm9uZy4gT3IgYXQgbGVhc3QgYmUgdGhlIGxhc3Qgb25lIGluIHlvdXIgbGVhZ3VlIHRvIGJlIHdyb25nLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5XaGF0IGRvIEkgd2luPzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5UaGF0IGlzIGJldHdlZW4geW91IGFuZCB0aGUgY29tbWlzaCBvZiB0aGUgbGVhZ3VlLiBIb3dldmVyLCBwbGVhc2UgYmUgY2FyZWZ1bCB3aGVuIGRlYWxpbmcgd2l0aCBtb25leS4gRG9u4oCZdCBzZW5kIG1vbmV5IHRvIGFueW9uZSB5b3UgZG9u4oCZdCBrbm93LiBDb21tb24gc2Vuc2UsIHBsZWFzZS48L2RkPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+Q2FuIEkgc2VlIHRoZSBwaWNrcyBvZiBvdGhlcnMgaW4gbXkgbGVhZ3VlPzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5Pbmx5IGFmdGVyIHRoZSBnYW1lIGhhcyBzdGFydGVkLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5DYW4gSSBjcmVhdGUgbXkgb3duIGxlYWd1ZT88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+WW91IGJldGNoYS48L2RkPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+SG93IGRvIEkgaW52aXRlIG15IGZyaWVuZHMgdG8gam9pbiBteSBsZWFndWU/PC9kdD5cXG5cIiArXG4gICAgXCIgICAgPGRkPk9uIHlvdXIgbGVhZ3VlIHBhZ2UgeW914oCZbGwgZmluZCBhbiAnSW52aXRlJyBidXR0b24uIFVzZSBpdC4gWW914oCZbGwgbmVlZCB0aGVpciBlbWFpbCBhZGRyZXNzLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5Ib3cgbWFueSBmcmllbmRzIGNhbiBqb2luIG15IGxlYWd1ZT88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+QXMgbWFueSBhcyB5b3UgbGlrZS4gSnVzdCB0byBwcm92ZSBpdCwgcHV0IGEgbGluayB0byB5b3VyIGxlYWd1ZSBvbiBGYWNlYm9vayBhbmQgc2VlIGlmIHlvdSBjYW4gZ2V0IGFsbCB5b3VyIEZhY2Vib29rIGZyaWVuZHMgdG8gam9pbi48L2RkPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+Q2FuIEkgc2V0IGEgbGltaXQgb24gaG93IG1hbnkgdGltZXMgYSBmcmllbmQgY2FuIGpvaW4gbXkgbGVhZ3VlPzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5Zb3Ugc3VyZSBjYW4uIDEgLSAxMCB0aW1lcy48L2RkPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+SG93IGRvIEkgc3RvcCBwZW9wbGUgZnJvbSBqb2luaW5nIG15IGxlYWd1ZT88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+Q2hhbmdlIHRoZSBsZWFndWUgdG8gcHJpdmF0ZS48L2RkPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+SG93IGNhbiBJIHJlbW92ZSBwZW9wbGUgZnJvbSBteSBsZWFndWU/PC9kdD5cXG5cIiArXG4gICAgXCIgICAgPGRkPllvdSBjYW7igJl0IGJ1dCB5b3UgY2FuIGRlYWN0aXZhdGUgKG9yIHJlYWN0aXZhdGUpIHRoZWlyIHRlYW0uIEEgZGVhY3RpdmF0ZWQgdGVhbSBpcyBoaWRkZW4gZnJvbSB2aWV3IGFuZCBjYW7igJl0IG1ha2UgYW55IHBpY2tzIHNvIGl0IHdpbGwgaGF2ZSBhIHF1aWNrIGFuZCBwYWlubGVzcyBkZWF0aC4uLjwvZGQ+XFxuXCIgK1xuICAgIFwiICAgIDxkdD5DYW4gSSBlZGl0IG15IGxlYWd1ZT88L2R0PlxcblwiICtcbiAgICBcIiAgICA8ZGQ+WWVzLCBidXQgeW91IGNhbid0IGNoYW5nZSB0aGUgc3RhcnQgd2VlayBhZnRlciB0aGUgbGVhZ3VlIHN0YXJ0cy48L2RkPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+Q2FuIEkgZWRpdCBhIHRlYW0gbmFtZSBpbiBteSBsZWFndWU/PC9kdD5cXG5cIiArXG4gICAgXCIgICAgPGRkPlllcywgdGhlIHRlYW0ncyBjb2FjaCBvciB0aGUgY29tbWlzaCBjYW4gZWRpdCBhIHRlYW0gbmFtZS48L2RkPlxcblwiICtcbiAgICBcIiAgICA8ZHQ+V2hhdCBpZiBpIHN0aWxsIGhhdmUgcXVlc3Rpb25zPzwvZHQ+XFxuXCIgK1xuICAgIFwiICAgIDxkZD5GaW5kIHRoZSBDb250YWN0IFVzIGJ1dHRvbi4gV2UnbGwgZ2V0IHJpZ2h0IGJhY2sgdG8geW91LjwvZGQ+XFxuXCIgK1xuICAgIFwiICA8L2RsPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJjbG9zZSgpXFxcIj5DbG9zZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3B1YmxpYy9ob21lL2hvbWUudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3B1YmxpYy9ob21lL2hvbWUudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcImhvbWUtY29udGVudC1jb250YWluZXJcXFwiPlxcblwiICtcbiAgICBcIiAgICA8aDEgY2xhc3M9XFxcImhlYWRlci1qdW1ib1xcXCI+TG9zaW5nIGlzIEV2ZXJ5dGhpbmcuPC9oMT5cXG5cIiArXG4gICAgXCIgICAgPHAgY2xhc3M9XFxcImxlYWRcXFwiPlBpY2sgYSBkaWZmZXJlbnQgTkZMIGxvc2VyIGVhY2ggd2Vlay4gVGhlIGxhc3QgdGVhbSBzdGFuZGluZyB3aW5zLiBKb2luIGFueXRpbWUgZm9yIGZyZWUuPC9wPlxcblwiICtcbiAgICBcIiAgPGRpdj5cXG5cIiArXG4gICAgXCIgICAgPGEgY2xhc3M9XFxcImN0YSBidG4gYnRuLXByaW1hcnkgYnRuLWxnXFxcIiByb2xlPVxcXCJidXR0b25cXFwiIG5nLWNsaWNrPVxcXCJqb2luTGVhZ3VlKHNlYXNvbilcXFwiPkpvaW4gTGVhZ3VlPC9hPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2PlxcblwiICtcbiAgICBcIiAgICA8YSBjbGFzcz1cXFwiY3RhIGJ0biBidG4tcHJpbWFyeSBidG4tbGdcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCIgbmctY2xpY2s9XFxcImNyZWF0ZUxlYWd1ZShzZWFzb24pXFxcIj5DcmVhdGUgTGVhZ3VlPC9hPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHVibGljL3JlZ2lzdGVyL3JlZ2lzdGVyLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXIvcmVnaXN0ZXIudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPlJlZ2lzdGVyPC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxmb3JtIG5hbWU9XFxcIm5ld1VzZXJGb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKG5ld1VzZXJGb3JtLmZpcnN0TmFtZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihuZXdVc2VyRm9ybS5maXJzdE5hbWUpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJmaXJzdE5hbWVcXFwiPkZpcnN0IE5hbWVcXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihuZXdVc2VyRm9ybS5maXJzdE5hbWUsICdyZXF1aXJlZCcpXFxcIj5bIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld1VzZXJGb3JtLmZpcnN0TmFtZSwgJ21heGxlbmd0aCcpXFxcIj5bIFRvbyBMb25nIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aW5wdXQgaWQ9XFxcImZpcnN0TmFtZVxcXCIgbmFtZT1cXFwiZmlyc3ROYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwibmV3VXNlckRhdGEuZmlyc3RfbmFtZVxcXCIgbmctbWF4bGVuZ3RoPVxcXCIxNVxcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKG5ld1VzZXJGb3JtLmZpcnN0TmFtZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKG5ld1VzZXJGb3JtLmxhc3ROYW1lKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKG5ld1VzZXJGb3JtLmxhc3ROYW1lKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwibGFzdE5hbWVcXFwiPkxhc3QgTmFtZVxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld1VzZXJGb3JtLmxhc3ROYW1lLCAncmVxdWlyZWQnKVxcXCI+WyBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihuZXdVc2VyRm9ybS5sYXN0TmFtZSwgJ21heGxlbmd0aCcpXFxcIj5bIFRvbyBMb25nIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aW5wdXQgaWQ9XFxcImxhc3ROYW1lXFxcIiBuYW1lPVxcXCJsYXN0TmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcIm5ld1VzZXJEYXRhLmxhc3RfbmFtZVxcXCIgbmctbWF4bGVuZ3RoPVxcXCIyMFxcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKG5ld1VzZXJGb3JtLmxhc3ROYW1lKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJ1c2VyLW5pY2tuYW1lIHJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcIm5pY2tuYW1lXFxcIj5OaWNrbmFtZTwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpbnB1dCBpZD1cXFwibmlja25hbWVcXFwiIG5hbWU9XFxcIm5pY2tuYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwibmV3VXNlckRhdGEubmlja25hbWVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKG5ld1VzZXJGb3JtLmVtYWlsKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKG5ld1VzZXJGb3JtLmVtYWlsKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiZW1haWxcXFwiPkVtYWlsXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobmV3VXNlckZvcm0uZW1haWwsICdyZXF1aXJlZCcpXFxcIj5bIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld1VzZXJGb3JtLmVtYWlsLCAnZW1haWwnKVxcXCI+WyBJbnZhbGlkIEVtYWlsIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aW5wdXQgaWQ9XFxcImVtYWlsXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJuZXdVc2VyRGF0YS5lbWFpbFxcXCIgbG9naC1mb2N1cyByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IobmV3VXNlckZvcm0uZW1haWwpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihuZXdVc2VyRm9ybS5jb25maXJtRW1haWwpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IobmV3VXNlckZvcm0uY29uZmlybUVtYWlsKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiY29uZmlybUVtYWlsXFxcIj5Db25maXJtIEVtYWlsXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobmV3VXNlckZvcm0uY29uZmlybUVtYWlsLCAnbWF0Y2gnKVxcXCI+WyBObyBNYXRjaCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJjb25maXJtRW1haWxcXFwiIG5hbWU9XFxcImNvbmZpcm1FbWFpbFxcXCIgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJuZXdVc2VyRGF0YS5lbWFpbF9jb25maXJtYXRpb25cXFwiIG1hdGNoPVxcXCJuZXdVc2VyRGF0YS5lbWFpbFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKG5ld1VzZXJGb3JtLmNvbmZpcm1FbWFpbClcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihuZXdVc2VyRm9ybS5wYXNzd29yZCksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihuZXdVc2VyRm9ybS5wYXNzd29yZCl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcInBhc3N3b3JkXFxcIj5QYXNzd29yZFxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld1VzZXJGb3JtLnBhc3N3b3JkLCAncmVxdWlyZWQnKVxcXCI+WyBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihuZXdVc2VyRm9ybS5wYXNzd29yZCwgJ21pbmxlbmd0aCcpXFxcIj5bIDggLSA1MCBDaGFyYWN0ZXJzIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld1VzZXJGb3JtLnBhc3N3b3JkLCAnbWF4bGVuZ3RoJylcXFwiPlsgOCAtIDUwIENoYXJhY3RlcnMgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxpbnB1dCBpZD1cXFwicGFzc3dvcmRcXFwiIG5hbWU9XFxcInBhc3N3b3JkXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcIm5ld1VzZXJEYXRhLnBhc3N3b3JkXFxcIiBuZy1taW5sZW5ndGg9XFxcIjhcXFwiIG5nLW1heGxlbmd0aD1cXFwiNTBcXFwiIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihuZXdVc2VyRm9ybS5wYXNzd29yZClcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKG5ld1VzZXJGb3JtLmNvbmZpcm1QYXNzd29yZCksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihuZXdVc2VyRm9ybS5jb25maXJtUGFzc3dvcmQpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiPkNvbmZpcm0gUGFzc3dvcmRcXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihuZXdVc2VyRm9ybS5jb25maXJtUGFzc3dvcmQsICdtYXRjaCcpXFxcIj5bIE5vIE1hdGNoIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aW5wdXQgaWQ9XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgbmFtZT1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcIm5ld1VzZXJEYXRhLnBhc3N3b3JkX2NvbmZpcm1hdGlvblxcXCIgbWF0Y2g9XFxcIm5ld1VzZXJEYXRhLnBhc3N3b3JkXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IobmV3VXNlckZvcm0uY29uZmlybVBhc3N3b3JkKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJ0ZXJtcyB3ZWxsIHdlbGwtc21cXFwiPjxzdHJvbmc+QnkgY2xpY2tpbmcgcmVnaXN0ZXIsIHlvdSBhZ3JlZSB0byB0aGUgPGEgbmctY2xpY2s9XFxcInNob3dUZXJtcygpXFxcIj50ZXJtcyBvZiB1c2UuPC9hPjwvc3Ryb25nPjwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9mb3JtPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+Q2FuY2VsPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctZGlzYWJsZWQ9XFxcIm5ld1VzZXJGb3JtLiRpbnZhbGlkXFxcIiBuZy1jbGljaz1cXFwicmVnaXN0ZXIobmV3VXNlckRhdGEpXFxcIj5SZWdpc3RlcjwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci90ZXJtcy9yZWdpc3Rlci50ZXJtcy50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHVibGljL3JlZ2lzdGVyL3Rlcm1zL3JlZ2lzdGVyLnRlcm1zLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgbmctY2xpY2s9XFxcImNsb3NlKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPlRlcm1zIG9mIFVzZTwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8cD5JZiB5b3UgY2hvb3NlIHRvIHVzZSB0aGlzIHNpdGUgZm9yIGdhbWJsaW5nIHB1cnBvc2VzLCB5b3UgYXNzdW1lIGFsbCByaXNrcy4gRG9uJ3QgYmUgYSBkdW1teSBhbmQgc2VuZCBtb25leSB0byBwZW9wbGUgeW91IGRvbid0IGtub3cgYW5kIHRydXN0LiBVc2UgeW91ciBjYWJlemEuPC9wPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJjbG9zZSgpXFxcIj5DbG9zZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3B1YmxpYy9zaWduaW4vc2lnbmluLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wdWJsaWMvc2lnbmluL3NpZ25pbi50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwic2lnbmluLWJveCBwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgICA8Zm9ybSBuYW1lPVxcXCJzaWduaW5Gb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBuZy1zdWJtaXQ9XFxcInNpZ25pbihjcmVkZW50aWFscylcXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWVudmVsb3BlIGZhLWZ3XFxcIj48L2k+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbWFpbFxcXCIgbmctbW9kZWw9XFxcImNyZWRlbnRpYWxzLmVtYWlsXFxcIiBhdXRvZm9jdXMgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWFkZG9uXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEta2V5IGZhLWZ3XFxcIj48L2k+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJQYXNzd29yZFxcXCIgbmctbW9kZWw9XFxcImNyZWRlbnRpYWxzLnBhc3N3b3JkXFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDxkaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8YSBjbGFzcz1cXFwiZm9yZ290LXBhc3N3b3JkIGJ0biBidG4tbGluayBwdWxsLWxlZnRcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCIgbmctY2xpY2s9XFxcInJlc2V0UGFzc3dvcmQoKVxcXCI+Rm9yZ290IFBhc3N3b3JkPzwvYT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwic2lnbi1pbi1idG4gYnRuIGJ0bi1wcmltYXJ5IHB1bGwtcmlnaHRcXFwiIG5nLWRpc2FibGVkPVxcXCJzaWduaW5Gb3JtLiRpbnZhbGlkXFxcIj5TaWduIGluPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBzdHlsZT1cXFwiY2xlYXI6IGJvdGg7XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8aHI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwicmVnaXN0ZXJcXFwiPjxhIG5nLWNsaWNrPVxcXCJyZWdpc3RlcigpXFxcIj5Eb24ndCBoYXZlIGFuIGFjY291bnQ/IDxzdHJvbmc+UmVnaXN0ZXI8L3N0cm9uZz48L2E+PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZm9ybT5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcbiIsIid1c2Ugc3RyaWN0JztcbnJlcXVpcmUoJ2FwcC10ZW1wbGF0ZXMnKTtcblxuXG52YXIgQXBwID0gZnVuY3Rpb24oJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgLy8gdW5tYXRjaGVkIHVybHMgc2hvdWxkIGJlIGRpcmVjdGVkIGJhY2sgdG8gdGhlIHN0YXJ0XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xufTtcblxuQXBwLiRpbmplY3QgPSBbJyR1cmxSb3V0ZXJQcm92aWRlciddO1xuXG52YXIgbG9naEFwcCA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwJywgW1xuICAgICduZ0Nvb2tpZXMnLFxuICAgICduZ1Jlc291cmNlJyxcbiAgICAnbmdTYW5pdGl6ZScsXG4gICAgJ25nUm91dGUnLFxuICAgICdjb21tYW5ndWxhcicsXG4gICAgJ3VpLnJvdXRlcicsXG4gICAgJ3VpLmJvb3RzdHJhcCcsXG4gICAgJ2FwcC50ZW1wbGF0ZXMnLFxuICAgICd1aS5yb3V0ZXIuc3RhdGVIZWxwZXInLFxuICAgICdhbmd1bGFyLWxvYWRpbmctYmFyJyxcblxuICAgIC8vIHB1YmxpYyBtb2R1bGVzXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3B1YmxpYy9ob21lJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHVibGljL2ZhcScpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3B1YmxpYy9hYnVzZScpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3B1YmxpYy9zaWduaW4nKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXInKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXIvdGVybXMnKS5uYW1lLFxuXG4gICAgLy8gcHJpdmF0ZSBtb2R1bGVzXG4gICAgLy8gdXNlclxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL3VzZXInKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL3VzZXIvcmVzZXQnKS5uYW1lLFxuICAgIC8vIGxlYWd1ZVxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2xlYWd1ZScpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL25ldycpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL3ZpZXcnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9lZGl0JykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvY29udGFjdCcpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL21lc3NhZ2UnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9qb2luJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlL3JlcXVlc3QnKS5uYW1lLFxuICAgIC8vIGxlYWd1ZXNcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4nKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9wdWJsaWMnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9wcml2YXRlJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL21hbmFnZScpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9teScpLm5hbWUsXG4gICAgLy8gdGVhbVxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL3RlYW0nKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL3RlYW0vdmlldycpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvdGVhbS9lZGl0JykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS90ZWFtL21lc3NhZ2UnKS5uYW1lLFxuICAgIC8vIHRlYW1zXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvdGVhbXMnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL3RlYW1zL2FsaXZlJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS90ZWFtcy9kZWFkJykubmFtZSxcbiAgICAvLyBwbGF5XG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvcGxheScpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvcGxheS9sZWFndWVzJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9wbGF5L3RlYW1zJykubmFtZSxcbiAgICAvLyBwaWNrXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvcGljay9tYWtlJykubmFtZSxcbiAgICAvLyBnYW1lXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvYWRtaW4nKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2FkbWluL2dhbWVzJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9hZG1pbi9nYW1lcy9lZGl0JykubmFtZSxcblxuICAgIC8vIGhlbHBlciBtb2R1bGVzXG4gICAgcmVxdWlyZSgnLi9jb21tb24vbW9kdWxlcy9oZWFkZXInKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vY29tbW9uL21vZHVsZXMvbWVzc2FnZScpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9jb21tb24vbW9kdWxlcy9mb290ZXInKS5uYW1lLFxuXG4gICAgcmVxdWlyZSgnLi9jb21tb24vYXNwZWN0cycpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9jb21tb24vbW9kZWxzJykubmFtZSxcbiAgICByZXF1aXJlKCcuL2NvbW1vbi9hcGknKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vY29tbW9uL2NvbW1hbmQnKS5uYW1lLFxuXG4gICAgcmVxdWlyZSgnLi9jb21tb24vc2VydmljZS9hcHBsaWNhdGlvbicpLm5hbWUsXG5cbiAgICAvL2RpcmVjdGl2ZXNcbiAgICByZXF1aXJlKCcuL2NvbW1vbi9kaXJlY3RpdmVzL2ZvY3VzJykubmFtZSxcbiAgICByZXF1aXJlKCcuL2NvbW1vbi9kaXJlY3RpdmVzL21hdGNoJykubmFtZSxcbiAgICByZXF1aXJlKCcuL2NvbW1vbi9kaXJlY3RpdmVzL3JlcXVpcmVkUGF0dGVybicpLm5hbWUsXG5cbiAgICAvL21vZGFsc1xuXG4gICAgLy9maWx0ZXJzXG4gICAgcmVxdWlyZSgnLi9jb21tb24vZmlsdGVycycpLm5hbWVcblxuICAgIF0sIEFwcClcblxuICAgIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyLCAkbG9nUHJvdmlkZXIsICR1aVZpZXdTY3JvbGxQcm92aWRlciwgJGFuY2hvclNjcm9sbFByb3ZpZGVyKSB7XG4gICAgICAgIC8vIHVzZSB0aGUgSFRNTDUgSGlzdG9yeSBBUElcbiAgICAgICAgJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKGZhbHNlKTtcblxuICAgICAgICAvLyBkaXNhYmxlcyBhdXRvLXNjcm9sbFxuICAgICAgICAkdWlWaWV3U2Nyb2xsUHJvdmlkZXIudXNlQW5jaG9yU2Nyb2xsKCk7XG4gICAgICAgICRhbmNob3JTY3JvbGxQcm92aWRlci5kaXNhYmxlQXV0b1Njcm9sbGluZygpO1xuXG4gICAgICAgIC8vIHR1cm5zIG9uL29mZiBkZWJ1ZyBjb25zb2xlIGxvZyBzdGF0ZW1lbnRzXG4gICAgICAgICRsb2dQcm92aWRlci5kZWJ1Z0VuYWJsZWQodHJ1ZSk7XG5cbiAgICAgICAgLy8gZGVmaW5lcyByb290IHN0YXRlc1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdwdWJsaWMnLCB7XG4gICAgICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgdXJsOiAnLycsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vdGVtcGxhdGVzL21hc3Rlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2Vhc29uOiBmdW5jdGlvbihzZWFzb25TZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2Vhc29uU2VydmljZS5nZXRDdXJyZW50U2Vhc29uKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdwcml2YXRlJywge1xuICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHVybDogJy8nLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL3RlbXBsYXRlcy9tYXN0ZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFNlYXNvbjogZnVuY3Rpb24oc2Vhc29uU2VydmljZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlYXNvblNlcnZpY2UuZ2V0Q3VycmVudFNlYXNvbigpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB1c2VyOiBmdW5jdGlvbihjdXJyZW50U2Vhc29uLCB1c2VyU2VydmljZSwgdXNlck1vZGVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXNlck1vZGVsLnVzZXIubG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZXJNb2RlbC51c2VyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXNlclNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgfSlcblxuICAgIC5ydW4oZnVuY3Rpb24oJHJvb3RTY29wZSwgJHVybFJvdXRlciwgJGxvZywgYXBwbGljYXRpb25TZXJ2aWNlKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJBcHBsaWNhdGlvbiBzdGFydGluZyB1cC4uLlwiKTtcbiAgICAgICAgYXBwbGljYXRpb25TZXJ2aWNlLnN0YXJ0dXAoKTtcbiAgICB9KVxuO1xuXG5sb2doQXBwLmZhY3RvcnkoJ2F1dGhJbnRlcmNlcHRvcicsIGZ1bmN0aW9uICgkcSwgJHdpbmRvdywgJGxvY2F0aW9uLCAkdGltZW91dCwgdXNlck1vZGVsLCBtZXNzYWdlTW9kZWwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZXF1ZXN0OiBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgICAgICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuICAgICAgICAgICAgaWYgKCR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudG9rZW4pIHtcbiAgICAgICAgICAgICAgICBjb25maWcuaGVhZGVycy5BdXRob3JpemF0aW9uID0gJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS50b2tlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb25maWc7XG4gICAgICAgIH0sXG4gICAgICAgIHJlc3BvbnNlRXJyb3I6IGZ1bmN0aW9uIChyZWplY3Rpb24pIHtcbiAgICAgICAgICB2YXIgbWVzc2FnZTtcbiAgICAgICAgICBpZiAocmVqZWN0aW9uLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhdGggPSAkbG9jYXRpb24ucGF0aCgpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSByZWplY3Rpb24uZGF0YS5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHVzZXJNb2RlbC5yZXNldFVzZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRsb2NhdGlvbi5wYXRoKCkgPT0gJy9zaWduaW4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShtZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShtZXNzYWdlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRsb2NhdGlvbi5wYXRoKCcvc2lnbmluJykuc2VhcmNoKHsgcmVkaXJlY3Q6IGVuY29kZVVSSUNvbXBvbmVudChwYXRoKSB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChyZWplY3Rpb24uc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IHsgdHlwZTogJ2RhbmdlcicsIGNvbnRlbnQ6ICdIb3VzdG9uLCB3ZSBoYXZlIGEgcHJvYmxlbS4gUGFnZSBub3QgZm91bmQuJyB9O1xuICAgICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShtZXNzYWdlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICRsb2NhdGlvbi5wYXRoKCcvJyk7XG4gICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAkcS5yZWplY3QocmVqZWN0aW9uKTtcbiAgICAgICAgfVxuICAgIH07XG59KTtcblxubG9naEFwcC5jb25maWcoZnVuY3Rpb24gKCRodHRwUHJvdmlkZXIpIHtcbiAgICAkaHR0cFByb3ZpZGVyLmludGVyY2VwdG9ycy5wdXNoKCdhdXRoSW50ZXJjZXB0b3InKTtcbn0pO1xuXG5cblxuXG5cblxuXG5cblxuIiwiXG5yZXF1aXJlKFwiLi9UZXN0QXNwZWN0XCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmFzcGVjdHMnLCBbXSlcbiAgICAuY29uZmlnKCBmdW5jdGlvbigpIHtcblxuICAgICAgIC8vVE9ETyBhc3BlY3QgY29uZmlnIGlmIG5lY2Vzc2FyeVxuICAgIH1cbik7IiwiLyoqXG4gKiBEZWZpbmUgdGhlIGFwcGxpY2F0aW9uIG1vZGVsc1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLm1vZGVscycsIFtdKVxuICAgIC8vbW9kZWxzXG4gICAgLnNlcnZpY2UoJ3VzZXJNb2RlbCcsIHJlcXVpcmUoJy4vVXNlck1vZGVsJykpXG4gICAgLnNlcnZpY2UoJ3NlYXNvbk1vZGVsJywgcmVxdWlyZSgnLi9TZWFzb25Nb2RlbCcpKVxuICAgIC5zZXJ2aWNlKCdtZXNzYWdlTW9kZWwnLCByZXF1aXJlKCcuL01lc3NhZ2VNb2RlbCcpKVxuOyIsIi8qKlxuICogRGVmaW5lIHRoZSByZW1vdGUgc2VydmljZXNcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5hcGknLCBbXSlcbiAgICAgIC5jb25zdGFudCgnYXBpQ29uZmlnJywgcmVxdWlyZSgnLi9BcGlDb25maWcnKSlcbiAgICAgIC5zZXJ2aWNlKCd1c2VyU2VydmljZScsIHJlcXVpcmUoJy4vVXNlclNlcnZpY2UnKSlcbiAgICAgIC5zZXJ2aWNlKCdsZWFndWVTZXJ2aWNlJywgcmVxdWlyZSgnLi9MZWFndWVTZXJ2aWNlJykpXG4gICAgICAuc2VydmljZSgndGVhbVNlcnZpY2UnLCByZXF1aXJlKCcuL1RlYW1TZXJ2aWNlJykpXG4gICAgICAuc2VydmljZSgncGlja1NlcnZpY2UnLCByZXF1aXJlKCcuL1BpY2tTZXJ2aWNlJykpXG4gICAgICAuc2VydmljZSgnc2Vhc29uU2VydmljZScsIHJlcXVpcmUoJy4vU2Vhc29uU2VydmljZScpKVxuICAgICAgLnNlcnZpY2UoJ3dlZWtTZXJ2aWNlJywgcmVxdWlyZSgnLi9XZWVrU2VydmljZScpKVxuICAgICAgLnNlcnZpY2UoJ2dhbWVTZXJ2aWNlJywgcmVxdWlyZSgnLi9HYW1lU2VydmljZScpKVxuO1xuIiwiLy8gc2Vzc2lvbiBjb21tYW5kc1xucmVxdWlyZSgnLi9zZXNzaW9uL1NpZ25pbkNvbW1hbmQnKTtcbnJlcXVpcmUoJy4vc2Vzc2lvbi9TaWdub3V0Q29tbWFuZCcpO1xuXG4vLyB1c2VyIGNvbW1hbmRzXG5yZXF1aXJlKCcuL3VzZXIvR2V0Q3VycmVudFVzZXJDb21tYW5kJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuY29tbWFuZENvbmZpZycsIFtdKVxuICAgIC5jb25maWcoZnVuY3Rpb24oJGNvbW1hbmd1bGFyUHJvdmlkZXIpIHtcblxuICAgICAgICAvLyBzZXNzaW9uIGV2ZW50c1xuICAgICAgICAkY29tbWFuZ3VsYXJQcm92aWRlci5tYXBUbygnU2lnbmluRXZlbnQnKS5hc1NlcXVlbmNlKClcbiAgICAgICAgICAgIC5hZGQoJ1NpZ25pbkNvbW1hbmQnKTtcbiAgICAgICAgJGNvbW1hbmd1bGFyUHJvdmlkZXIubWFwVG8oJ1NpZ25vdXRFdmVudCcpLmFzU2VxdWVuY2UoKVxuICAgICAgICAgICAgLmFkZCgnU2lnbm91dENvbW1hbmQnKTtcblxuICAgICAgICAvLyB1c2VyIGV2ZW50c1xuICAgICAgICAkY29tbWFuZ3VsYXJQcm92aWRlci5tYXBUbygnR2V0Q3VycmVudFVzZXJFdmVudCcpLmFzU2VxdWVuY2UoKVxuICAgICAgICAgICAgLmFkZCgnR2V0Q3VycmVudFVzZXJDb21tYW5kJyk7XG5cbiAgICB9XG4pO1xuXG4iLCIvKipcbiAqIERlZmluZSB0aGUgYXBwbGljYXRpb24gZmlsdGVyc1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmZpbHRlcnMnLCBbXSlcbiAgICAvL2ZpbHRlcnNcbiAgICAuZmlsdGVyKCdvZmZzZXRGaWx0ZXInLCByZXF1aXJlKCcuL09mZnNldEZpbHRlcicpKVxuICAgIC5maWx0ZXIoJ2FjdGl2ZVRlYW1GaWx0ZXInLCByZXF1aXJlKCcuL0FjdGl2ZVRlYW1GaWx0ZXInKSlcbiAgICAuZmlsdGVyKCdhbGl2ZVRlYW1GaWx0ZXInLCByZXF1aXJlKCcuL0FsaXZlVGVhbUZpbHRlcicpKVxuICAgIC5maWx0ZXIoJ29wZW5MZWFndWVGaWx0ZXInLCByZXF1aXJlKCcuL09wZW5MZWFndWVGaWx0ZXInKSlcbiAgICAuZmlsdGVyKCdtYW5hZ2VkTGVhZ3VlRmlsdGVyJywgcmVxdWlyZSgnLi9NYW5hZ2VkTGVhZ3VlRmlsdGVyJykpXG4gICAgLmZpbHRlcigndGltZUZpbHRlcicsIHJlcXVpcmUoJy4vVGltZUZpbHRlcicpKVxuO1xuIiwiXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnB1YmxpYy5ob21lJywgW10pXG4gICAgLmNvbnRyb2xsZXIoJ0hvbWVDb250cm9sbGVyJywgcmVxdWlyZSgnLi9Ib21lQ29udHJvbGxlcicpKVxuICAgIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdwdWJsaWMuaG9tZScsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcnLFxuICAgICAgICAgICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9oZWFkZXIvaGVhZGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdIZWFkZXJDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL21lc3NhZ2UvbWVzc2FnZS50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTWVzc2FnZUNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wdWJsaWMvaG9tZS9ob21lLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdIb21lQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2Zvb3Rlci9mb290ZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0Zvb3RlckNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICAgIH0pOyIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuZmFxJywgW10pXG4gIC5jb250cm9sbGVyKCdGYXFDb250cm9sbGVyJywgcmVxdWlyZSgnLi9GYXFDb250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5hYnVzZScsIFtdKVxuICAuY29udHJvbGxlcignQWJ1c2VDb250cm9sbGVyJywgcmVxdWlyZSgnLi9BYnVzZUNvbnRyb2xsZXInKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnJlZ2lzdGVyJywgW10pXG4gIC5jb250cm9sbGVyKCdSZWdpc3RlckNvbnRyb2xsZXInLCByZXF1aXJlKCcuL1JlZ2lzdGVyQ29udHJvbGxlcicpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAucHVibGljLnNpZ25pbicsIFtdKVxuICAuY29udHJvbGxlcignU2lnbmluQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vU2lnbmluQ29udHJvbGxlcicpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwdWJsaWMuc2lnbmluJywge1xuICAgICAgICB1cmw6ICdzaWduaW4nLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9oZWFkZXIvaGVhZGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdIZWFkZXJDb250cm9sbGVyJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9tZXNzYWdlL21lc3NhZ2UudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ01lc3NhZ2VDb250cm9sbGVyJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3B1YmxpYy9zaWduaW4vc2lnbmluLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdTaWduaW5Db250cm9sbGVyJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZm9vdGVyOiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2Zvb3Rlci9mb290ZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0Zvb3RlckNvbnRyb2xsZXInXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC51c2VyJywgW10pXG4gICAgLmNvbnRyb2xsZXIoJ1VzZXJDb250cm9sbGVyJywgcmVxdWlyZSgnLi9Vc2VyQ29udHJvbGxlcicpKVxuICAgIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdwcml2YXRlLnVzZXInLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAndXNlcicsXG4gICAgICAgICAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2hlYWRlci9oZWFkZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0hlYWRlckNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvbWVzc2FnZS9tZXNzYWdlLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdNZXNzYWdlQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvdXNlci91c2VyLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdVc2VyQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2Zvb3Rlci9mb290ZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0Zvb3RlckNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICAgIH0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5sZWFndWUnLCBbXSlcbiAgICAuY29udHJvbGxlcignTGVhZ3VlQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vTGVhZ3VlQ29udHJvbGxlcicpKVxuICAgIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdwcml2YXRlLmxlYWd1ZScsIHtcbiAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1cmw6ICdzZWFzb24ve3NlYXNvbklkfS9sZWFndWUnLFxuICAgICAgICAgICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9oZWFkZXIvaGVhZGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdIZWFkZXJDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL21lc3NhZ2UvbWVzc2FnZS50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTWVzc2FnZUNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9sZWFndWUudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0xlYWd1ZUNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9mb290ZXIvZm9vdGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdGb290ZXJDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgICB9KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubGVhZ3VlcycsIFtdKVxuICAgIC5jb250cm9sbGVyKCdMZWFndWVzQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vTGVhZ3Vlc0NvbnRyb2xsZXInKSlcbiAgICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgncHJpdmF0ZS5sZWFndWVzJywge1xuICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHVybDogJ3NlYXNvbi97c2Vhc29uSWR9L2xlYWd1ZXMnLFxuICAgICAgICAgICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9oZWFkZXIvaGVhZGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdIZWFkZXJDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL21lc3NhZ2UvbWVzc2FnZS50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTWVzc2FnZUNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvbGVhZ3Vlcy50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTGVhZ3Vlc0NvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9mb290ZXIvZm9vdGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdGb290ZXJDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgICB9KTtcblxuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC50ZWFtJywgW10pXG4gICAgLmNvbnRyb2xsZXIoJ1RlYW1Db250cm9sbGVyJywgcmVxdWlyZSgnLi9UZWFtQ29udHJvbGxlcicpKVxuICAgIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdwcml2YXRlLnRlYW0nLCB7XG4gICAgICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgdXJsOiAnc2Vhc29uL3tzZWFzb25JZH0vbGVhZ3VlL3tsZWFndWVJZH0vdGVhbScsXG4gICAgICAgICAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2hlYWRlci9oZWFkZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0hlYWRlckNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvbWVzc2FnZS9tZXNzYWdlLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdNZXNzYWdlQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvdGVhbS90ZWFtLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdUZWFtQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2Zvb3Rlci9mb290ZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0Zvb3RlckNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gICAgfSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnRlYW1zJywgW10pXG4gICAgLmNvbnRyb2xsZXIoJ1RlYW1zQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vVGVhbXNDb250cm9sbGVyJykpXG4gICAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ3ByaXZhdGUudGVhbXMnLCB7XG4gICAgICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgdXJsOiAnc2Vhc29uL3tzZWFzb25JZH0vdGVhbXMnLFxuICAgICAgICAgICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9oZWFkZXIvaGVhZGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdIZWFkZXJDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL21lc3NhZ2UvbWVzc2FnZS50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTWVzc2FnZUNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL3RlYW1zL3RlYW1zLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdUZWFtc0NvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9mb290ZXIvZm9vdGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdGb290ZXJDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gICAgfSk7XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAucGxheScsIFtdKVxuICAuY29udHJvbGxlcignUGxheUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL1BsYXlDb250cm9sbGVyJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3ByaXZhdGUucGxheScsIHtcbiAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgIHVybDogJ3NlYXNvbi97c2Vhc29uSWR9L215JyxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvaGVhZGVyL2hlYWRlci50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnSGVhZGVyQ29udHJvbGxlcidcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvbWVzc2FnZS9tZXNzYWdlLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdNZXNzYWdlQ29udHJvbGxlcidcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL3BsYXkvcGxheS50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnUGxheUNvbnRyb2xsZXInXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvZm9vdGVyL2Zvb3Rlci50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnRm9vdGVyQ29udHJvbGxlcidcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfSk7XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuYWRtaW4nLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0FkbWluQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vQWRtaW5Db250cm9sbGVyJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3ByaXZhdGUuYWRtaW4nLCB7XG4gICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICB1cmw6ICdhZG1pbi8nLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9oZWFkZXIvaGVhZGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdIZWFkZXJDb250cm9sbGVyJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9tZXNzYWdlL21lc3NhZ2UudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ01lc3NhZ2VDb250cm9sbGVyJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvYWRtaW4vYWRtaW4udHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkbWluQ29udHJvbGxlcidcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZvb3Rlcjoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9mb290ZXIvZm9vdGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdGb290ZXJDb250cm9sbGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuaGVhZGVyJywgW10pXG4gICAgLmNvbnRyb2xsZXIoJ0hlYWRlckNvbnRyb2xsZXInLCByZXF1aXJlKCcuL0hlYWRlckNvbnRyb2xsZXInKSkiLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLm1lc3NhZ2UnLCBbXSlcbiAgICAuY29udHJvbGxlcignTWVzc2FnZUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL01lc3NhZ2VDb250cm9sbGVyJykpOyIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuZm9vdGVyJywgW10pXG4gIC5jb250cm9sbGVyKCdGb290ZXJDb250cm9sbGVyJywgcmVxdWlyZSgnLi9Gb290ZXJDb250cm9sbGVyJykpIiwiLyoqXG4gKiBEZWZpbmUgdGhlIGFwcGxpY2F0aW9uIHNlcnZpY2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naC5hcHBsaWNhdGlvbicsIFtdKVxuICAgIC5zZXJ2aWNlKCdhcHBsaWNhdGlvblNlcnZpY2UnLCByZXF1aXJlKCcuL0FwcGxpY2F0aW9uU2VydmljZScpKTsiLCIvL2FwcGxpY2F0aW9uIGRpcmVjdGl2ZXNcbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuZGlyZWN0aXZlcy5mb2N1cycsW10pXG4gICAgLmRpcmVjdGl2ZSgnbG9naEZvY3VzJywgcmVxdWlyZSgnLi9Gb2N1c0RpcmVjdGl2ZScpKVxuO1xuIiwiLy9hcHBsaWNhdGlvbiBkaXJlY3RpdmVzXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmRpcmVjdGl2ZXMubWF0Y2gnLFtdKVxuICAgIC5kaXJlY3RpdmUoJ21hdGNoJywgcmVxdWlyZSgnLi9NYXRjaERpcmVjdGl2ZScpKVxuO1xuIiwiLy9hcHBsaWNhdGlvbiBkaXJlY3RpdmVzXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmRpcmVjdGl2ZXMucmVxdWlyZWRQYXR0ZXJuJyxbXSlcbiAgICAuZGlyZWN0aXZlKCdycGF0dGVybicsIHJlcXVpcmUoJy4vUmVxdWlyZWRQYXR0ZXJuRGlyZWN0aXZlJykpXG47XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnJlZ2lzdGVyLnRlcm1zJywgW10pXG4gIC5jb250cm9sbGVyKCdSZWdpc3RlclRlcm1zQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vUmVnaXN0ZXJUZXJtc0NvbnRyb2xsZXInKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnVzZXIucmVzZXQnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ1VzZXJSZXNldENvbnRyb2xsZXInLCByZXF1aXJlKCcuL1VzZXJSZXNldENvbnRyb2xsZXInKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmxlYWd1ZS5uZXcnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ05ld0xlYWd1ZUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL05ld0xlYWd1ZUNvbnRyb2xsZXInKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmxlYWd1ZS52aWV3JywgW10pXG4gIC5jb250cm9sbGVyKCdWaWV3TGVhZ3VlQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vVmlld0xlYWd1ZUNvbnRyb2xsZXInKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHJpdmF0ZS5sZWFndWUudmlldycsIHtcbiAgICAgICAgdXJsOiAnL3tsZWFndWVJZH0nLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIGxlYWd1ZUNvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS92aWV3L2xlYWd1ZS52aWV3LnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdWaWV3TGVhZ3VlQ29udHJvbGxlcidcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICBsZWFndWU6IGZ1bmN0aW9uKGxlYWd1ZVNlcnZpY2UsICRzdGF0ZVBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuIGxlYWd1ZVNlcnZpY2UuZ2V0TGVhZ3VlKCRzdGF0ZVBhcmFtcy5zZWFzb25JZCwgJHN0YXRlUGFyYW1zLmxlYWd1ZUlkKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFsaXZlVGVhbXM6IGZ1bmN0aW9uKGxlYWd1ZSwgdGVhbVNlcnZpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZWFtU2VydmljZS5nZXRBbGl2ZVRlYW1zKHsgc2Vhc29uSWQ6IGxlYWd1ZS5kYXRhLnNlYXNvbl9pZCwgbGVhZ3VlSWQ6IGxlYWd1ZS5kYXRhLmlkIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVhZFRlYW1zOiBmdW5jdGlvbihsZWFndWUsIHRlYW1TZXJ2aWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGVhbVNlcnZpY2UuZ2V0RGVhZFRlYW1zKHsgc2Vhc29uSWQ6IGxlYWd1ZS5kYXRhLnNlYXNvbl9pZCwgbGVhZ3VlSWQ6IGxlYWd1ZS5kYXRhLmlkIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubGVhZ3VlLmVkaXQnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0VkaXRMZWFndWVDb250cm9sbGVyJywgcmVxdWlyZSgnLi9FZGl0TGVhZ3VlQ29udHJvbGxlcicpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubGVhZ3VlLmNvbnRhY3QnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0xlYWd1ZUNvbnRhY3RDb250cm9sbGVyJywgcmVxdWlyZSgnLi9MZWFndWVDb250YWN0Q29udHJvbGxlcicpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubGVhZ3VlLm1lc3NhZ2UnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0xlYWd1ZU1lc3NhZ2VDb250cm9sbGVyJywgcmVxdWlyZSgnLi9MZWFndWVNZXNzYWdlQ29udHJvbGxlcicpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubGVhZ3VlLmpvaW4nLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0xlYWd1ZUpvaW5Db250cm9sbGVyJywgcmVxdWlyZSgnLi9MZWFndWVKb2luQ29udHJvbGxlcicpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubGVhZ3VlLmludml0ZScsIFtdKVxuICAuY29udHJvbGxlcignTGVhZ3VlSW52aXRlQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vTGVhZ3VlSW52aXRlQ29udHJvbGxlcicpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubGVhZ3Vlcy5qb2luJywgW10pXG4gIC5jb250cm9sbGVyKCdKb2luTGVhZ3Vlc0NvbnRyb2xsZXInLCByZXF1aXJlKCcuL0pvaW5MZWFndWVzQ29udHJvbGxlcicpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcml2YXRlLmxlYWd1ZXMuam9pbicsIHtcbiAgICAgICAgdXJsOiAnLycsXG4gICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIGxlYWd1ZXNDb250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4vbGVhZ3Vlcy5qb2luLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdKb2luTGVhZ3Vlc0NvbnRyb2xsZXInXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIDtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmxlYWd1ZXMubWFuYWdlJywgW10pXG4gIC5jb250cm9sbGVyKCdNYW5hZ2VMZWFndWVzQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vTWFuYWdlTGVhZ3Vlc0NvbnRyb2xsZXInKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHJpdmF0ZS5sZWFndWVzLm1hbmFnZScsIHtcbiAgICAgICAgdXJsOiAnL21hbmFnZWQnLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIGxlYWd1ZXNDb250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL21hbmFnZS9sZWFndWVzLm1hbmFnZS50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTWFuYWdlTGVhZ3Vlc0NvbnRyb2xsZXInXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgbWFuYWdlZExlYWd1ZXM6IGZ1bmN0aW9uKHVzZXIsIGxlYWd1ZVNlcnZpY2UsICRzdGF0ZVBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuIGxlYWd1ZVNlcnZpY2UuZ2V0TWFuYWdlZExlYWd1ZXMoJHN0YXRlUGFyYW1zLnNlYXNvbklkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfSk7XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubGVhZ3Vlcy5teScsIFtdKVxuICAuY29udHJvbGxlcignTXlMZWFndWVzQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vTXlMZWFndWVzQ29udHJvbGxlcicpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcml2YXRlLmxlYWd1ZXMubXknLCB7XG4gICAgICAgIHVybDogJycsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgbGVhZ3Vlc0NvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvbXkvbGVhZ3Vlcy5teS50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTXlMZWFndWVzQ29udHJvbGxlcidcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICBsZWFndWVzOiBmdW5jdGlvbih1c2VyLCBsZWFndWVTZXJ2aWNlLCAkc3RhdGVQYXJhbXMpIHtcbiAgICAgICAgICAgIHJldHVybiBsZWFndWVTZXJ2aWNlLmdldExlYWd1ZXMoJHN0YXRlUGFyYW1zLnNlYXNvbklkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfSk7XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAudGVhbS52aWV3JywgW10pXG4gIC5jb250cm9sbGVyKCdWaWV3VGVhbUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL1ZpZXdUZWFtQ29udHJvbGxlcicpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcml2YXRlLnRlYW0udmlldycsIHtcbiAgICAgICAgdXJsOiAnL3t0ZWFtSWR9JyxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICB0ZWFtQ29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvdGVhbS92aWV3L3RlYW0udmlldy50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnVmlld1RlYW1Db250cm9sbGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIHRlYW06IGZ1bmN0aW9uKHVzZXIsIHRlYW1TZXJ2aWNlLCAkc3RhdGVQYXJhbXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZWFtU2VydmljZS5nZXRUZWFtKCRzdGF0ZVBhcmFtcy5sZWFndWVJZCwgJHN0YXRlUGFyYW1zLnRlYW1JZCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBsZWFndWVUZWFtczogZnVuY3Rpb24odGVhbSwgdGVhbVNlcnZpY2UsICRzdGF0ZVBhcmFtcywgdXNlck1vZGVsKSB7XG4gICAgICAgICAgICBpZiAodGVhbS5kYXRhLmNvYWNoX2lkcy5pbmRleE9mKHVzZXJNb2RlbC51c2VyLmlkKSA+IC0xKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0ZWFtU2VydmljZS5nZXRMZWFndWVUZWFtcygkc3RhdGVQYXJhbXMubGVhZ3VlSWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHsgZGF0YTogW10gfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHBpY2tzOiBmdW5jdGlvbih0ZWFtLCBwaWNrU2VydmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIHBpY2tTZXJ2aWNlLmdldFBpY2tzKHsgdGVhbUlkOiB0ZWFtLmRhdGEuaWQgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC50ZWFtLmVkaXQnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0VkaXRUZWFtQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vRWRpdFRlYW1Db250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC50ZWFtLm1lc3NhZ2UnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ1RlYW1NZXNzYWdlQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vVGVhbU1lc3NhZ2VDb250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC50ZWFtcy5hbGl2ZScsIFtdKVxuICAuY29udHJvbGxlcignQWxpdmVUZWFtc0NvbnRyb2xsZXInLCByZXF1aXJlKCcuL0FsaXZlVGVhbXNDb250cm9sbGVyJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3ByaXZhdGUudGVhbXMuYWxpdmUnLCB7XG4gICAgICAgIHVybDogJy9hbGl2ZScsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgdGVhbXNDb250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS90ZWFtcy9hbGl2ZS90ZWFtcy5hbGl2ZS50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQWxpdmVUZWFtc0NvbnRyb2xsZXInXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgYWxpdmVUZWFtczogZnVuY3Rpb24odXNlciwgdGVhbVNlcnZpY2UsICRzdGF0ZVBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuIHRlYW1TZXJ2aWNlLmdldEFsaXZlVGVhbXMoeyBzZWFzb25JZDogJHN0YXRlUGFyYW1zLnNlYXNvbklkIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICA7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9KTtcblxuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC50ZWFtcy5kZWFkJywgW10pXG4gIC5jb250cm9sbGVyKCdEZWFkVGVhbXNDb250cm9sbGVyJywgcmVxdWlyZSgnLi9EZWFkVGVhbXNDb250cm9sbGVyJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3ByaXZhdGUudGVhbXMuZGVhZCcsIHtcbiAgICAgICAgdXJsOiAnL2RlYWQnLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIHRlYW1zQ29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvdGVhbXMvZGVhZC90ZWFtcy5kZWFkLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdEZWFkVGVhbXNDb250cm9sbGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIGRlYWRUZWFtczogZnVuY3Rpb24odXNlciwgdGVhbVNlcnZpY2UsICRzdGF0ZVBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuIHRlYW1TZXJ2aWNlLmdldERlYWRUZWFtcyh7IHNlYXNvbklkOiAkc3RhdGVQYXJhbXMuc2Vhc29uSWQgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIDtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnBsYXkubGVhZ3VlcycsIFtdKVxuICAuY29udHJvbGxlcignUGxheUxlYWd1ZXNDb250cm9sbGVyJywgcmVxdWlyZSgnLi9QbGF5TGVhZ3Vlc0NvbnRyb2xsZXInKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHJpdmF0ZS5wbGF5LmxlYWd1ZXMnLCB7XG4gICAgICAgIHVybDogJy9sZWFndWVzJyxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICBwbGF5Q29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvcGxheS9sZWFndWVzL3BsYXkubGVhZ3Vlcy50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnUGxheUxlYWd1ZXNDb250cm9sbGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIGxlYWd1ZXM6IGZ1bmN0aW9uKHVzZXIsIGxlYWd1ZVNlcnZpY2UsIHNlYXNvbk1vZGVsKSB7XG4gICAgICAgICAgICByZXR1cm4gbGVhZ3VlU2VydmljZS5nZXRMZWFndWVzKHNlYXNvbk1vZGVsLnNlYXNvbi5pZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIDtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnBsYXkudGVhbXMnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ1BsYXlUZWFtc0NvbnRyb2xsZXInLCByZXF1aXJlKCcuL1BsYXlUZWFtc0NvbnRyb2xsZXInKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHJpdmF0ZS5wbGF5LnRlYW1zJywge1xuICAgICAgICB1cmw6ICcvdGVhbXMnLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIHBsYXlDb250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9wbGF5L3RlYW1zL3BsYXkudGVhbXMudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1BsYXlUZWFtc0NvbnRyb2xsZXInXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgdGVhbXM6IGZ1bmN0aW9uKHVzZXIsIHRlYW1TZXJ2aWNlLCBzZWFzb25Nb2RlbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRlYW1TZXJ2aWNlLmdldEFsbFRlYW1zKHsgc2Vhc29uSWQ6IHNlYXNvbk1vZGVsLnNlYXNvbi5pZCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgfSlcbiAgICA7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9KTtcblxuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5waWNrLm1ha2UnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ1BpY2tNYWtlQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vUGlja01ha2VDb250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5hZG1pbi5nYW1lcycsIFtdKVxuICAuY29udHJvbGxlcignQWRtaW5HYW1lc0NvbnRyb2xsZXInLCByZXF1aXJlKCcuL0FkbWluR2FtZXNDb250cm9sbGVyJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3ByaXZhdGUuYWRtaW4uZ2FtZXMnLCB7XG4gICAgICAgIHVybDogJ3dlZWsve3dlZWtJZH0vZ2FtZXMnLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIGFkbWluQ29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvYWRtaW4vZ2FtZXMvYWRtaW4uZ2FtZXMudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FkbWluR2FtZXNDb250cm9sbGVyJyxcbiAgICAgICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICAgICAgd2VlazogZnVuY3Rpb24oY3VycmVudFNlYXNvbiwgJHN0YXRlUGFyYW1zLCB3ZWVrU2VydmljZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB3ZWVrU2VydmljZS5nZXRXZWVrKCRzdGF0ZVBhcmFtcy53ZWVrSWQpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBnYW1lczogZnVuY3Rpb24od2VlaywgZ2FtZVNlcnZpY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2FtZVNlcnZpY2UuZ2V0V2Vla0dhbWVzKHdlZWsuZGF0YS5pZCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmxlYWd1ZS5pbnZpdGUucmVxdWVzdCcsIFtdKVxuICAuY29udHJvbGxlcignTGVhZ3VlSW52aXRlUmVxdWVzdENvbnRyb2xsZXInLCByZXF1aXJlKCcuL0xlYWd1ZUludml0ZVJlcXVlc3RDb250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5sZWFndWVzLmpvaW4ucHVibGljJywgW10pXG4gIC5jb250cm9sbGVyKCdQdWJsaWNMZWFndWVzQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vUHVibGljTGVhZ3Vlc0NvbnRyb2xsZXInKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHJpdmF0ZS5sZWFndWVzLmpvaW4ucHVibGljJywge1xuICAgICAgICB1cmw6ICdwdWJsaWMnLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIGpvaW5MZWFndWVzQ29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL3B1YmxpYy9sZWFndWVzLmpvaW4ucHVibGljLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdQdWJsaWNMZWFndWVzQ29udHJvbGxlcidcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICBwdWJsaWNMZWFndWVzOiBmdW5jdGlvbih1c2VyLCBsZWFndWVTZXJ2aWNlLCAkc3RhdGVQYXJhbXMpIHtcbiAgICAgICAgICAgIHJldHVybiBsZWFndWVTZXJ2aWNlLmdldFB1YmxpY0xlYWd1ZXMoJHN0YXRlUGFyYW1zLnNlYXNvbklkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfSk7XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubGVhZ3Vlcy5qb2luLnByaXZhdGUnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ1ByaXZhdGVMZWFndWVzQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vUHJpdmF0ZUxlYWd1ZXNDb250cm9sbGVyJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3ByaXZhdGUubGVhZ3Vlcy5qb2luLnByaXZhdGUnLCB7XG4gICAgICAgIHVybDogJ3ByaXZhdGUnLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIGpvaW5MZWFndWVzQ29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL3ByaXZhdGUvbGVhZ3Vlcy5qb2luLnByaXZhdGUudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1ByaXZhdGVMZWFndWVzQ29udHJvbGxlcidcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICBwcml2YXRlTGVhZ3VlczogZnVuY3Rpb24odXNlciwgbGVhZ3VlU2VydmljZSwgJHN0YXRlUGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gbGVhZ3VlU2VydmljZS5nZXRQcml2YXRlTGVhZ3Vlcygkc3RhdGVQYXJhbXMuc2Vhc29uSWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICA7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9KTtcblxuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5hZG1pbi5nYW1lcy5lZGl0JywgW10pXG4gIC5jb250cm9sbGVyKCdHYW1lc0VkaXRDb250cm9sbGVyJywgcmVxdWlyZSgnLi9HYW1lc0VkaXRDb250cm9sbGVyJykpO1xuIiwiXG5jb21tYW5ndWxhci5ldmVudEFzcGVjdCgnQEJlZm9yZSgvLiovKScsIGZ1bmN0aW9uKHByb2Nlc3NvciwgJGxvZykge1xuXG4gICAgcmV0dXJuIHtcblxuICAgICAgICBleGVjdXRlIDogZnVuY3Rpb24gKCkge1xuXG4vLyAgICAgICAgICAgIGlmIChDdXJyZW50VG9kby50b2RvLmxlbmd0aCA9PT0gMCkge1xuLy8gICAgICAgICAgICAgICAgcHJvY2Vzc29yLmNhbmNlbCgnRW1wdHkgdG9kbycpO1xuLy8gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyRsb2cubG9nKCdUZXN0IEFzcGVjdCcpO1xuXG4gICAgICAgIH1cbiAgICB9XG59KTsiLCJcbnZhciBVc2VyTW9kZWwgPSBmdW5jdGlvbigkcm9vdFNjb3BlLCAkd2luZG93LCAkbG9nKSB7XG5cbiAgICB2YXIgdXNlciA9IHt9O1xuICAgIHVzZXIubG9hZGVkID0gZmFsc2U7XG4gICAgdXNlci5pZCA9ICcnO1xuICAgIHVzZXIuZW1haWwgPSAnJztcbiAgICB1c2VyLmZpcnN0X25hbWUgPSAnJztcbiAgICB1c2VyLmxhc3RfbmFtZSA9ICcnO1xuICAgIHVzZXIuYWRtaW4gPSBmYWxzZTtcblxuICAgIHRoaXMudXNlciA9IHVzZXI7XG5cbiAgICB0aGlzLnNldFVzZXIgPSBmdW5jdGlvbih1c2VyRGF0YSkge1xuICAgICAgICB1c2VyLmxvYWRlZCA9IHRydWU7XG4gICAgICAgIHVzZXIgPSBhbmd1bGFyLmV4dGVuZCh1c2VyLCB1c2VyRGF0YSk7XG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgndXNlck1vZGVsOjp1c2VyVXBkYXRlZCcsIHVzZXIpO1xuICAgICAgICAkbG9nLmRlYnVnKFwiVXNlck1vZGVsOiBzZXRVc2VyOiBcIiArIHVzZXIuaWQpO1xuICAgICAgICAkbG9nLmRlYnVnKFwiVXNlck1vZGVsOiBzZXRVc2VyOiBcIiArIHVzZXIuZW1haWwpO1xuICAgIH07XG5cbiAgICB0aGlzLnJlc2V0VXNlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkd2luZG93LnNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XG5cbiAgICAgICAgdXNlciA9IHt9O1xuICAgICAgICB1c2VyLmxvYWRlZCA9IGZhbHNlO1xuICAgICAgICB1c2VyLmlkID0gJyc7XG4gICAgICAgIHVzZXIuZW1haWwgPSAnJztcbiAgICAgICAgdXNlci5maXJzdF9uYW1lID0gJyc7XG4gICAgICAgIHVzZXIubGFzdF9uYW1lID0gJyc7XG4gICAgICAgIHVzZXIuYWRtaW4gPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcImNyZWF0aW5nIHVzZXIgbW9kZWwuLi5cIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cblVzZXJNb2RlbC4kaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyR3aW5kb3cnLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBVc2VyTW9kZWw7IiwidmFyIFNlYXNvbk1vZGVsID0gZnVuY3Rpb24oJHJvb3RTY29wZSwgJGxvZykge1xuXG4gICAgdmFyIHNlYXNvbiA9IHt9O1xuICAgIHNlYXNvbi5pZCA9ICcnO1xuICAgIHNlYXNvbi5uYW1lID0gJyc7XG5cbiAgICB0aGlzLnNlYXNvbiA9IHNlYXNvbjtcblxuICAgIHRoaXMuc2V0U2Vhc29uID0gZnVuY3Rpb24oc2Vhc29uRGF0YSkge1xuICAgICAgICBzZWFzb24gPSBhbmd1bGFyLmV4dGVuZChzZWFzb24sIHNlYXNvbkRhdGEpO1xuICAgICAgICAkbG9nLmRlYnVnKFwiU2Vhc29uTW9kZWw6IHNldFNlYXNvbm46IFwiICsgc2Vhc29uLm5hbWUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcImNyZWF0aW5nIHNlYXNvbiBtb2RlbC4uLlwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcblxufTtcblxuU2Vhc29uTW9kZWwuJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IFNlYXNvbk1vZGVsOyIsIlxudmFyIE1lc3NhZ2VNb2RlbCA9IGZ1bmN0aW9uKCRyb290U2NvcGUsICRsb2cpIHtcblxuICAgIHZhciBtb2RlbCA9IHRoaXM7XG4gICAgdmFyIHF1ZXVlID0gW107XG5cbiAgICB2YXIgbWVzc2FnZSA9IHt9O1xuICAgIG1lc3NhZ2UubG9hZGVkID0gZmFsc2U7XG4gICAgbWVzc2FnZS50eXBlID0gJyc7IC8vIGNhbiBiZSBzdWNjZXNzLCBpbmZvLCB3YXJuaW5nIG9yIGRhbmdlclxuICAgIG1lc3NhZ2UuY29udGVudCA9ICcnO1xuXG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcblxuICAgIHRoaXMuc2V0TWVzc2FnZSA9IGZ1bmN0aW9uKG1lc3NhZ2VEYXRhLCBkZWxheSkge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IHt9O1xuICAgICAgICBtZXNzYWdlLmxvYWRlZCA9IHRydWU7XG4gICAgICAgIG1lc3NhZ2UgPSBhbmd1bGFyLmV4dGVuZChtZXNzYWdlLCBtZXNzYWdlRGF0YSk7XG4gICAgICAgIGlmIChkZWxheSkge1xuICAgICAgICAgICAgcXVldWVbMF0gPSBtZXNzYWdlOyAvLyBxdWV1ZSBpdCB1cCBmb3IgYWZ0ZXIgYSBsb2NhdGlvbiBjaGFuZ2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZGVsLm1lc3NhZ2UgPSBtZXNzYWdlOyAvLyBzaG93IHRoZSBtZXNzYWdlIGFzYXBcbiAgICAgICAgICAgIHF1ZXVlID0gW107IC8vIGNsZWFyIHRoZSBxdWV1ZSBhcyBtZXNzYWdlIHdpbGwgYmUgc2hvd2VkIGltbWVkaWF0ZWx5XG4gICAgICAgIH1cbiAgICAgICAgJGxvZy5kZWJ1ZyhcIk1lc3NhZ2VNb2RlbDogY29udGVudDogXCIgKyBtZXNzYWdlLmNvbnRlbnQpO1xuICAgIH07XG5cbiAgICB0aGlzLnJlc2V0TWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBtZXNzYWdlID0ge307XG4gICAgICAgIG1lc3NhZ2UubG9hZGVkID0gZmFsc2U7XG4gICAgICAgIG1lc3NhZ2UudHlwZSA9ICcnO1xuICAgICAgICBtZXNzYWdlLmNvbnRlbnQgPSAnJztcblxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIH07XG5cbiAgICAkcm9vdFNjb3BlLiRvbihcIiRsb2NhdGlvbkNoYW5nZVN0YXJ0XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBtb2RlbC5yZXNldE1lc3NhZ2UoKTtcbiAgICB9KTtcblxuICAgICRyb290U2NvcGUuJG9uKFwiJGxvY2F0aW9uQ2hhbmdlU3VjY2Vzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbW9kZWwubWVzc2FnZSA9IHF1ZXVlLnNoaWZ0KCkgfHwge307XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcImNyZWF0aW5nIG1lc3NhZ2UgbW9kZWwuLi5cIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cbk1lc3NhZ2VNb2RlbC4kaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRsb2cnXTtcbm1vZHVsZS5leHBvcnRzID0gTWVzc2FnZU1vZGVsO1xuIiwiLypcbiAqICBHbG9iYWwgY29uZmlnIGZvciByZW1vdGUgc2VydmljZXNcbiAqL1xuXG52YXIgQXBpQ29uZmlnID0gIHtcbiAgICBiYXNlVVJMOiAnL2FwaS8nXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwaUNvbmZpZztcbiIsInZhciBVc2VyU2VydmljZSA9IGZ1bmN0aW9uKCRodHRwLCAkbG9nLCAkc3RhdGUsICRsb2NhdGlvbiwgJHdpbmRvdywgJHRpbWVvdXQsIGFwaUNvbmZpZywgbWVzc2FnZU1vZGVsLCB1c2VyTW9kZWwsIHNlYXNvbk1vZGVsKSB7XG5cbiAgICB2YXIgdXNlclNlcnZpY2UgPSB0aGlzO1xuXG4gICAgdGhpcy5zaWduaW4gPSBmdW5jdGlvbihlbWFpbCwgcGFzc3dvcmQpIHtcbiAgICAgIHVzZXJNb2RlbC5yZXNldFVzZXIoKTtcbiAgICAgIHZhciBwcm9taXNlID0gJGh0dHAucG9zdChcbiAgICAgICAgICAgIGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZXNzaW9uc1wiLFxuICAgICAgICAgICAgeyBlbWFpbDogZW1haWwsIHBhc3N3b3JkOiBwYXNzd29yZCB9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJVc2VyU2VydmljZTogc2lnbmluIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS50b2tlbiA9IGRhdGEudG9rZW47XG4gICAgICAgICAgICAgICAgdmFyIHJlZGlyZWN0ID0gZGVjb2RlVVJJQ29tcG9uZW50KCRsb2NhdGlvbi5zZWFyY2goKS5yZWRpcmVjdCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlZGlyZWN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAkbG9jYXRpb24uc2VhcmNoKCdyZWRpcmVjdCcsIG51bGwpOyAvLyByZW1vdmUgdGhlIHJlZGlyZWN0IHF1ZXJ5IHBhcmFtXG4gICAgICAgICAgICAgICAgICAgICRsb2NhdGlvbi5wYXRoKHJlZGlyZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFsnLycsICcvc2lnbmluJywgJy9yZWdpc3RlciddLmluZGV4T2YocmVkaXJlY3QpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgIHVzZXJTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgIHtcbiAgICAgICAgICAgICAgICAgICRsb2NhdGlvbi5wYXRoKCcvc2Vhc29uLycgKyBzZWFzb25Nb2RlbC5zZWFzb24uaWQgKyAnL215L3RlYW1zJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlVzZXJTZXJ2aWNlOiBzaWduaW4gZmFpbHVyZVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLnNpZ25vdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5kZWxldGUoYXBpQ29uZmlnLmJhc2VVUkwgKyAnc2Vzc2lvbnMvZGVzdHJveScpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlVzZXJTZXJ2aWNlOiBzaWdub3V0IHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgdXNlck1vZGVsLnJlc2V0VXNlcigpO1xuICAgICAgICAgICAgICAgIGlmICgkc3RhdGUuY3VycmVudC5uYW1lID09ICdwdWJsaWMuaG9tZScpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgJGxvY2F0aW9uLnBhdGgoJy8nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVXNlclNlcnZpY2U6IHNpZ25vdXQgZmFpbHVyZVwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLnJlc2V0VXNlciA9IGZ1bmN0aW9uKGVtYWlsKSB7XG4gICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnBvc3QoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlc3Npb25zL3Jlc2V0XCIsIHsgZW1haWw6IGVtYWlsIH0pXG4gICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlVzZXJTZXJ2aWNlOiByZXNldCBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAkbG9nLmRlYnVnKFwiVXNlclNlcnZpY2U6IHJlc2V0IGZhaWx1cmVcIik7XG4gICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRDdXJyZW50VXNlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdG9rZW4gPSAkbG9jYXRpb24uc2VhcmNoKCkudG9rZW47XG4gICAgICAgIGlmICghXy5pc1VuZGVmaW5lZCh0b2tlbikpIHtcbiAgICAgICAgICAkd2luZG93LnNlc3Npb25TdG9yYWdlLnRva2VuID0gdG9rZW47XG4gICAgICAgICAgJGxvY2F0aW9uLnNlYXJjaCgndG9rZW4nLCBudWxsKTsgLy8gcmVtb3ZlIHRoZSB0b2tlbiBxdWVyeSBwYXJhbVxuICAgICAgICB9XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJ1c2Vycy9jdXJyZW50XCIpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlVzZXJTZXJ2aWNlOiBnZXRDdXJyZW50VXNlciBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHVzZXJNb2RlbC5zZXRVc2VyKGRhdGEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlVzZXJTZXJ2aWNlOiBnZXRDdXJyZW50VXNlciBmYWlsZWRcIik7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuY3JlYXRlVXNlciA9IGZ1bmN0aW9uKHVzZXJQYXJhbXMpIHtcbiAgICAgIHVzZXJNb2RlbC5yZXNldFVzZXIoKTtcbiAgICAgIHZhciBwcm9taXNlID0gJGh0dHAucG9zdChhcGlDb25maWcuYmFzZVVSTCArIFwidXNlcnNcIixcbiAgICAgICAgICAgIHsgdXNlcjogdXNlclBhcmFtcyB9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJVc2VyU2VydmljZTogY3JlYXRlVXNlciBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgICR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudG9rZW4gPSBkYXRhLnRva2VuO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdmFyIHJlZGlyZWN0ID0gZGVjb2RlVVJJQ29tcG9uZW50KCRsb2NhdGlvbi5zZWFyY2goKS5yZWRpcmVjdCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlZGlyZWN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAkbG9jYXRpb24uc2VhcmNoKCdyZWRpcmVjdCcsIG51bGwpOyAvLyByZW1vdmUgdGhlIHJlZGlyZWN0IHF1ZXJ5IHBhcmFtXG4gICAgICAgICAgICAgICAgICAgICRsb2NhdGlvbi5wYXRoKHJlZGlyZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFsnLycsICcvc2lnbmluJywgJy9yZWdpc3RlciddLmluZGV4T2YocmVkaXJlY3QpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgIHVzZXJTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgIHtcbiAgICAgICAgICAgICAgICAgICRsb2NhdGlvbi5wYXRoKCcvc2Vhc29uLycgKyBzZWFzb25Nb2RlbC5zZWFzb24uaWQgKyAnL215L3RlYW1zJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlVzZXJTZXJ2aWNlOiBjcmVhdGVVc2VyIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLnVwZGF0ZVVzZXIgPSBmdW5jdGlvbih1c2VyUGFyYW1zKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAucHV0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJ1c2Vycy9jdXJyZW50XCIsXG4gICAgICAgICAgICB7IHVzZXI6IHVzZXJQYXJhbXMgfSlcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVXNlclNlcnZpY2U6IHVwZGF0ZVVzZXIgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICB1c2VyTW9kZWwuc2V0VXNlcih1c2VyUGFyYW1zKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJVc2VyU2VydmljZTogdXBkYXRlVXNlciBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5jb250YWN0VXMgPSBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAucHV0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJ1c2Vycy9jb250YWN0XCIsXG4gICAgICAgICAgICB7IG1lc3NhZ2U6IG1lc3NhZ2UgfSlcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVXNlclNlcnZpY2U6IGNvbnRhY3RVcyBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlVzZXJTZXJ2aWNlOiBjb250YWN0VXMgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxufTtcblxuVXNlclNlcnZpY2UuJGluamVjdCA9IFsnJGh0dHAnLCAnJGxvZycsICckc3RhdGUnLCAnJGxvY2F0aW9uJywgJyR3aW5kb3cnLCAnJHRpbWVvdXQnLCAnYXBpQ29uZmlnJywgJ21lc3NhZ2VNb2RlbCcsICd1c2VyTW9kZWwnLCAnc2Vhc29uTW9kZWwnXTtcbm1vZHVsZS5leHBvcnRzID0gVXNlclNlcnZpY2U7IiwidmFyIExlYWd1ZVNlcnZpY2UgPSBmdW5jdGlvbigkaHR0cCwgJGxvZywgJGxvY2F0aW9uLCAkcSwgJHN0YXRlLCBhcGlDb25maWcsIG1lc3NhZ2VNb2RlbCkge1xuXG4gICAgdGhpcy5nZXRMZWFndWUgPSBmdW5jdGlvbihzZWFzb25JZCwgbGVhZ3VlSWQpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBzZWFzb25JZCArIFwiL2xlYWd1ZXMvXCIgKyBsZWFndWVJZClcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogZ2V0TGVhZ3VlIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogZ2V0TGVhZ3VlIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmdldExlYWd1ZXMgPSBmdW5jdGlvbihzZWFzb25JZCkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlDb25maWcuYmFzZVVSTCArIFwic2Vhc29ucy9cIiArIHNlYXNvbklkICsgXCIvbGVhZ3Vlc1wiKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBnZXRMZWFndWVzIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogZ2V0TGVhZ3VlcyBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRNYW5hZ2VkTGVhZ3VlcyA9IGZ1bmN0aW9uKHNlYXNvbklkKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZWFzb25zL1wiICsgc2Vhc29uSWQgKyBcIi9sZWFndWVzL21hbmFnZWRcIilcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogZ2V0TWFuYWdlZExlYWd1ZXMgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBnZXRNYW5hZ2VkTGVhZ3VlcyBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRQdWJsaWNMZWFndWVzID0gZnVuY3Rpb24oc2Vhc29uSWQpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBzZWFzb25JZCArIFwiL2xlYWd1ZXMvcHVibGljXCIpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IGdldFB1YmxpY0xlYWd1ZXMgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBnZXRQdWJsaWNMZWFndWVzIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmdldFByaXZhdGVMZWFndWVzID0gZnVuY3Rpb24oc2Vhc29uSWQpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBzZWFzb25JZCArIFwiL2xlYWd1ZXMvcHJpdmF0ZVwiKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBnZXRQcml2YXRlTGVhZ3VlcyBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IGdldFByaXZhdGVMZWFndWVzIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmNyZWF0ZUxlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZVBhcmFtcykge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnBvc3QoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBsZWFndWVQYXJhbXMuc2Vhc29uX2lkICsgXCIvbGVhZ3Vlc1wiLFxuICAgICAgICAgICAgeyBsZWFndWU6IGxlYWd1ZVBhcmFtcyB9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBjcmVhdGVMZWFndWUgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIHRydWUpO1xuICAgICAgICAgICAgICAgICRsb2NhdGlvbi5wYXRoKCcvc2Vhc29uLycgKyBsZWFndWVQYXJhbXMuc2Vhc29uX2lkICsgJy9sZWFndWUvJyArIGRhdGEubGVhZ3VlX2lkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBjcmVhdGVMZWFndWUgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMudXBkYXRlTGVhZ3VlID0gZnVuY3Rpb24obGVhZ3VlUGFyYW1zKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAucHV0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZWFzb25zL1wiICsgbGVhZ3VlUGFyYW1zLnNlYXNvbl9pZCArIFwiL2xlYWd1ZXMvXCIgKyBsZWFndWVQYXJhbXMuaWQsXG4gICAgICAgICAgICB7IGxlYWd1ZTogbGVhZ3VlUGFyYW1zIH0pXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IHVwZGF0ZUxlYWd1ZSBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgLy8gdG9kbzogdGhpcyByZWxpZXMgb24gYSBtb25rZXkgcGF0Y2ggYXQgdGhlIG1vbWVudCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyLXVpL3VpLXJvdXRlci9pc3N1ZXMvNTgyXG4gICAgICAgICAgICAvLyBidXQgbWF5IGJlIHJlc29sdmVkIHdpdGggZnV0dXJlIHJlbGVhc2VzIG9mIGFuZ3VsYXItdWktcm91dGVyXG4gICAgICAgICAgICAkc3RhdGUucmVsb2FkKCk7IC8vIHJlbG9hZHMgYWxsIHRoZSByZXNvbHZlcyBmb3IgdGhlIHZpZXcgbGVhZ3VlIHBhZ2UgYW5kIHJlaW5zdGFudGlhdGVzIHRoZSBjb250cm9sbGVyXG4gICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiB1cGRhdGVMZWFndWUgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMub3BlbkxlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZVBhcmFtcykge1xuICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBsZWFndWVQYXJhbXMuc2Vhc29uX2lkICsgXCIvbGVhZ3Vlcy9cIiArIGxlYWd1ZVBhcmFtcy5pZCArIFwiL29wZW5cIilcbiAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBvcGVuTGVhZ3VlIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgLy8gdG9kbzogdGhpcyByZWxpZXMgb24gYSBtb25rZXkgcGF0Y2ggYXQgdGhlIG1vbWVudCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyLXVpL3VpLXJvdXRlci9pc3N1ZXMvNTgyXG4gICAgICAgICAgLy8gYnV0IG1heSBiZSByZXNvbHZlZCB3aXRoIGZ1dHVyZSByZWxlYXNlcyBvZiBhbmd1bGFyLXVpLXJvdXRlclxuICAgICAgICAgICRzdGF0ZS5yZWxvYWQoKTsgLy8gcmVsb2FkcyBhbGwgdGhlIHJlc29sdmVzIGZvciB0aGUgdmlldyBsZWFndWUgcGFnZSBhbmQgcmVpbnN0YW50aWF0ZXMgdGhlIGNvbnRyb2xsZXJcbiAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSlcbiAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogb3BlbkxlYWd1ZSBmYWlsZWRcIik7XG4gICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5jbG9zZUxlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZVBhcmFtcykge1xuICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBsZWFndWVQYXJhbXMuc2Vhc29uX2lkICsgXCIvbGVhZ3Vlcy9cIiArIGxlYWd1ZVBhcmFtcy5pZCArIFwiL2Nsb3NlXCIpXG4gICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogY2xvc2VMZWFndWUgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAvLyB0b2RvOiB0aGlzIHJlbGllcyBvbiBhIG1vbmtleSBwYXRjaCBhdCB0aGUgbW9tZW50IC0gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXItdWkvdWktcm91dGVyL2lzc3Vlcy81ODJcbiAgICAgICAgICAvLyBidXQgbWF5IGJlIHJlc29sdmVkIHdpdGggZnV0dXJlIHJlbGVhc2VzIG9mIGFuZ3VsYXItdWktcm91dGVyXG4gICAgICAgICAgJHN0YXRlLnJlbG9hZCgpOyAvLyByZWxvYWRzIGFsbCB0aGUgcmVzb2x2ZXMgZm9yIHRoZSB2aWV3IGxlYWd1ZSBwYWdlIGFuZCByZWluc3RhbnRpYXRlcyB0aGUgY29udHJvbGxlclxuICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KVxuICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBjbG9zZUxlYWd1ZSBmYWlsZWRcIik7XG4gICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVMZWFndWVNZXNzYWdlID0gZnVuY3Rpb24obGVhZ3VlUGFyYW1zLCBlbWFpbE1lc3NhZ2UpIHtcbiAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAkaHR0cC5wdXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBsZWFndWVQYXJhbXMuc2Vhc29uX2lkICsgXCIvbGVhZ3Vlcy9cIiArIGxlYWd1ZVBhcmFtcy5pZCArIFwiL21lc3NhZ2VcIixcbiAgICAgICAgICAgIHsgbGVhZ3VlOiBsZWFndWVQYXJhbXMsIGVtYWlsTWVzc2FnZTogZW1haWxNZXNzYWdlIH0pXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IHVwZGF0ZUxlYWd1ZU1lc3NhZ2Ugc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGxlYWd1ZVBhcmFtcy5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiB1cGRhdGVMZWFndWVNZXNzYWdlIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLnNlbmRDb21taXNoTWVzc2FnZSA9IGZ1bmN0aW9uKGxlYWd1ZVBhcmFtcywgbWVzc2FnZSkge1xuICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgICAkaHR0cC5wdXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBsZWFndWVQYXJhbXMuc2Vhc29uX2lkICsgXCIvbGVhZ3Vlcy9cIiArIGxlYWd1ZVBhcmFtcy5pZCArIFwiL2NvbnRhY3RcIixcbiAgICAgICAgICAgIHsgY29udGFjdDogbWVzc2FnZSB9KVxuICAgICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogc2VuZENvbW1pc2hNZXNzYWdlIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBzZW5kQ29tbWlzaE1lc3NhZ2UgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcblxuICB0aGlzLmNyZWF0ZUludml0ZSA9IGZ1bmN0aW9uKGludml0ZVBhcmFtcykge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnBvc3QoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImxlYWd1ZXMvXCIgKyBpbnZpdGVQYXJhbXMubGVhZ3VlX2lkICsgXCIvaW52aXRhdGlvbnNcIixcbiAgICAgICAgICAgIHsgaW52aXRhdGlvbjogaW52aXRlUGFyYW1zIH0pXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IGNyZWF0ZUludml0ZSBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IGNyZWF0ZUludml0ZSBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5yZXF1ZXN0SW52aXRlID0gZnVuY3Rpb24oaW52aXRlUGFyYW1zKSB7XG4gICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnBvc3QoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImxlYWd1ZXMvXCIgKyBpbnZpdGVQYXJhbXMubGVhZ3VlX2lkICsgXCIvaW52aXRhdGlvbnMvbmV3XCIsXG4gICAgICAgICAgICB7IGludml0YXRpb246IGludml0ZVBhcmFtcyB9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiByZXF1ZXN0SW52aXRlIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogcmVxdWVzdEludml0ZSBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG59O1xuXG5MZWFndWVTZXJ2aWNlLiRpbmplY3QgPSBbJyRodHRwJywgJyRsb2cnLCAnJGxvY2F0aW9uJywgJyRxJywgJyRzdGF0ZScsICdhcGlDb25maWcnLCAnbWVzc2FnZU1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IExlYWd1ZVNlcnZpY2U7IiwidmFyIFRlYW1TZXJ2aWNlID0gZnVuY3Rpb24oJGh0dHAsICRsb2csICRsb2NhdGlvbiwgJHN0YXRlLCAkcSwgYXBpQ29uZmlnLCBtZXNzYWdlTW9kZWwpIHtcblxuICAgIHRoaXMuZ2V0VGVhbSA9IGZ1bmN0aW9uKGxlYWd1ZUlkLCB0ZWFtSWQpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImxlYWd1ZXMvXCIgKyBsZWFndWVJZCArIFwiL3RlYW1zL1wiICsgdGVhbUlkKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogZ2V0VGVhbSBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBnZXRUZWFtIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmdldEFsbFRlYW1zID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgICAgIHZhciBhcGlVcmwgPSBhcGlDb25maWcuYmFzZVVSTCArIFwic2Vhc29ucy9cIiArIHBhcmFtcy5zZWFzb25JZCArIFwiL3RlYW1zL2FsbFwiO1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlVcmwpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBnZXRBbGxUZWFtcyBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBnZXRBbGxUZWFtcyBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRBbGl2ZVRlYW1zID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgICAgIHZhciBhcGlVcmwgPSBhcGlDb25maWcuYmFzZVVSTCArIFwic2Vhc29ucy9cIiArIHBhcmFtcy5zZWFzb25JZCArIFwiL3RlYW1zL2FsaXZlXCI7XG4gICAgICAgIGlmIChwYXJhbXMubGVhZ3VlSWQpIHtcbiAgICAgICAgICAgIGFwaVVybCArPSBcIj9sZWFndWVfaWQ9XCIgKyBwYXJhbXMubGVhZ3VlSWQ7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlVcmwpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBnZXRBbGl2ZVRlYW1zIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IGdldEFsaXZlVGVhbXMgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0RGVhZFRlYW1zID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgICAgIHZhciBhcGlVcmwgPSBhcGlDb25maWcuYmFzZVVSTCArIFwic2Vhc29ucy9cIiArIHBhcmFtcy5zZWFzb25JZCArIFwiL3RlYW1zL2RlYWRcIjtcbiAgICAgICAgaWYgKHBhcmFtcy5sZWFndWVJZCkge1xuICAgICAgICAgICAgYXBpVXJsICs9IFwiP2xlYWd1ZV9pZD1cIiArIHBhcmFtcy5sZWFndWVJZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaVVybClcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IGdldERlYWRUZWFtcyBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBnZXREZWFkVGVhbXMgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0TGVhZ3VlVGVhbXMgPSBmdW5jdGlvbihsZWFndWVJZCkge1xuICAgICAgICB2YXIgYXBpVXJsID0gYXBpQ29uZmlnLmJhc2VVUkwgKyBcImxlYWd1ZXMvXCIgKyBsZWFndWVJZCArIFwiL3RlYW1zXCI7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaVVybClcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IGdldExlYWd1ZVRlYW1zIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IGdldExlYWd1ZVRlYW1zIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cblxuICAgIHRoaXMuY3JlYXRlVGVhbSA9IGZ1bmN0aW9uKHRlYW1QYXJhbXMpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5wb3N0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJsZWFndWVzL1wiICsgdGVhbVBhcmFtcy5sZWFndWVfaWQgKyBcIi90ZWFtc1wiLFxuICAgICAgICAgICAgeyB0ZWFtOiB0ZWFtUGFyYW1zIH0pXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBjcmVhdGVUZWFtIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgLy8gdG9kbzogdGhpcyByZWxpZXMgb24gYSBtb25rZXkgcGF0Y2ggYXQgdGhlIG1vbWVudCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyLXVpL3VpLXJvdXRlci9pc3N1ZXMvNTgyXG4gICAgICAgICAgICAgICAgLy8gYnV0IG1heSBiZSByZXNvbHZlZCB3aXRoIGZ1dHVyZSByZWxlYXNlcyBvZiBhbmd1bGFyLXVpLXJvdXRlclxuICAgICAgICAgICAgICAgICRzdGF0ZS5yZWxvYWQoKTsgLy8gcmVsb2FkcyBhbGwgdGhlIHJlc29sdmVzIGZvciB0aGUgdmlldyBsZWFndWUgcGFnZSBhbmQgcmVpbnN0YW50aWF0ZXMgdGhlIGNvbnRyb2xsZXJcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogY3JlYXRlVGVhbSBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVUZWFtID0gZnVuY3Rpb24odGVhbSkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnB1dChhcGlDb25maWcuYmFzZVVSTCArIFwibGVhZ3Vlcy9cIiArIHRlYW0ubGVhZ3VlLmlkICsgXCIvdGVhbXMvXCIgKyB0ZWFtLmlkLFxuICAgICAgICAgICAgeyB0ZWFtOiB0ZWFtIH0pXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiB1cGRhdGVUZWFtIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IHVwZGF0ZVRlYW0gZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMudXBkYXRlVGVhbU1lc3NhZ2UgPSBmdW5jdGlvbih0ZWFtUGFyYW1zLCBlbWFpbE1lc3NhZ2UpIHtcbiAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAkaHR0cC5wdXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImxlYWd1ZXMvXCIgKyB0ZWFtUGFyYW1zLmxlYWd1ZS5pZCArIFwiL3RlYW1zL1wiICsgdGVhbVBhcmFtcy5pZCArIFwiL21lc3NhZ2VcIixcbiAgICAgICAgeyB0ZWFtOiB0ZWFtUGFyYW1zLCBlbWFpbE1lc3NhZ2U6IGVtYWlsTWVzc2FnZSB9KVxuICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiB1cGRhdGVUZWFtTWVzc2FnZSBzdWNjZXNzXCIpO1xuICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUodGVhbVBhcmFtcy5tZXNzYWdlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IHVwZGF0ZVRlYW1NZXNzYWdlIGZhaWxlZFwiKTtcbiAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLnNlbmRDb21taXNoTWVzc2FnZSA9IGZ1bmN0aW9uKHRlYW1QYXJhbXMsIG1lc3NhZ2UpIHtcbiAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAkaHR0cC5wdXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImxlYWd1ZXMvXCIgKyB0ZWFtUGFyYW1zLmxlYWd1ZS5pZCArIFwiL3RlYW1zL1wiICsgdGVhbVBhcmFtcy5pZCArIFwiL2NvbnRhY3RcIixcbiAgICAgICAgeyBjb250YWN0OiBtZXNzYWdlIH0pXG4gICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IHNlbmRDb21taXNoTWVzc2FnZSBzdWNjZXNzXCIpO1xuICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IHNlbmRDb21taXNoTWVzc2FnZSBmYWlsZWRcIik7XG4gICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5hY3RpdmF0ZVRlYW0gPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgICRodHRwLnB1dChhcGlDb25maWcuYmFzZVVSTCArIFwibGVhZ3Vlcy9cIiArIHRlYW0ubGVhZ3VlLmlkICsgXCIvdGVhbXMvXCIgKyB0ZWFtLmlkICsgXCIvYWN0aXZhdGVcIilcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IGFjdGl2YXRlVGVhbSBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IGFjdGl2YXRlVGVhbSBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5kZWFjdGl2YXRlVGVhbSA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAgICAgJGh0dHAucHV0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJsZWFndWVzL1wiICsgdGVhbS5sZWFndWUuaWQgKyBcIi90ZWFtcy9cIiArIHRlYW0uaWQgKyBcIi9kZWFjdGl2YXRlXCIpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBkZWFjdGl2YXRlVGVhbSBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBkZWFjdGl2YXRlVGVhbSBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcblxufTtcblxuVGVhbVNlcnZpY2UuJGluamVjdCA9IFsnJGh0dHAnLCAnJGxvZycsICckbG9jYXRpb24nLCAnJHN0YXRlJywgJyRxJywgJ2FwaUNvbmZpZycsICdtZXNzYWdlTW9kZWwnXTtcbm1vZHVsZS5leHBvcnRzID0gVGVhbVNlcnZpY2U7IiwidmFyIFBpY2tTZXJ2aWNlID0gZnVuY3Rpb24oJGh0dHAsICRsb2csICRzdGF0ZSwgYXBpQ29uZmlnLCBtZXNzYWdlTW9kZWwpIHtcblxuICB0aGlzLmdldFBpY2tzID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgdmFyIGFwaVVybCA9IGFwaUNvbmZpZy5iYXNlVVJMICsgXCJ0ZWFtcy9cIiArIHBhcmFtcy50ZWFtSWQgKyBcIi9waWNrc1wiO1xuXG4gICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpVXJsKVxuICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiUGlja1NlcnZpY2U6IGdldFBpY2tzIHN1Y2Nlc3NcIik7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSlcbiAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJQaWNrU2VydmljZTogZ2V0UGlja3MgZmFpbGVkXCIpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH07XG5cbiAgdGhpcy5jcmVhdGVQaWNrID0gZnVuY3Rpb24ocGlja1BhcmFtcykge1xuICAgIHZhciBhcGlVcmwgPSBhcGlDb25maWcuYmFzZVVSTCArIFwidGVhbXMvXCIgKyBwaWNrUGFyYW1zLnRlYW1faWQgKyBcIi9waWNrc1wiO1xuXG4gICAgdmFyIHByb21pc2UgPSAkaHR0cC5wb3N0KGFwaVVybCwgeyBwaWNrOiBwaWNrUGFyYW1zIH0pXG4gICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJQaWNrU2VydmljZTogY3JlYXRlUGljayBzdWNjZXNzXCIpO1xuICAgICAgICAvLyB0b2RvOiB0aGlzIHJlbGllcyBvbiBhIG1vbmtleSBwYXRjaCBhdCB0aGUgbW9tZW50IC0gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXItdWkvdWktcm91dGVyL2lzc3Vlcy81ODJcbiAgICAgICAgLy8gYnV0IG1heSBiZSByZXNvbHZlZCB3aXRoIGZ1dHVyZSByZWxlYXNlcyBvZiBhbmd1bGFyLXVpLXJvdXRlclxuICAgICAgICAkc3RhdGUucmVsb2FkKCk7IC8vIHJlbG9hZHMgYWxsIHRoZSByZXNvbHZlcyBmb3IgdGhlIHZpZXcgbGVhZ3VlIHBhZ2UgYW5kIHJlaW5zdGFudGlhdGVzIHRoZSBjb250cm9sbGVyXG4gICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pXG4gICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiUGlja1NlcnZpY2U6IGNyZWF0ZVBpY2sgZmFpbGVkXCIpO1xuICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KTtcblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9O1xuXG59O1xuXG5QaWNrU2VydmljZS4kaW5qZWN0ID0gWyckaHR0cCcsICckbG9nJywgJyRzdGF0ZScsICdhcGlDb25maWcnLCAnbWVzc2FnZU1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IFBpY2tTZXJ2aWNlOyIsInZhciBTZWFzb25TZXJ2aWNlID0gZnVuY3Rpb24oJGh0dHAsICRsb2csIGFwaUNvbmZpZywgc2Vhc29uTW9kZWwpIHtcblxuICAgIHRoaXMuZ2V0Q3VycmVudFNlYXNvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlDb25maWcuYmFzZVVSTCArIFwic2Vhc29ucy9jdXJyZW50XCIpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlNlYXNvblNlcnZpY2U6IGdldEN1cnJlbnRTZWFzb24gc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICBzZWFzb25Nb2RlbC5zZXRTZWFzb24oZGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiU2Vhc29uU2VydmljZTogZ2V0Q3VycmVudFNlYXNvbiBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG59O1xuXG5TZWFzb25TZXJ2aWNlLiRpbmplY3QgPSBbJyRodHRwJywgJyRsb2cnLCAnYXBpQ29uZmlnJywgJ3NlYXNvbk1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IFNlYXNvblNlcnZpY2U7IiwidmFyIFdlZWtTZXJ2aWNlID0gZnVuY3Rpb24oJGh0dHAsICRsb2csICRxLCBhcGlDb25maWcsIHNlYXNvbk1vZGVsLCBtZXNzYWdlTW9kZWwpIHtcblxuICAgIHRoaXMuZ2V0QXZhaWxhYmxlV2Vla3MgPSBmdW5jdGlvbihzZWFzb25JZCkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlDb25maWcuYmFzZVVSTCArIFwic2Vhc29ucy9cIiArIHNlYXNvbklkICsgXCIvd2Vla3MvYXZhaWxhYmxlXCIpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIldlZWtTZXJ2aWNlOiBnZXRBdmFpbGFibGVXZWVrcyBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIldlZWtTZXJ2aWNlOiBnZXRBdmFpbGFibGVXZWVrcyBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRXZWVrID0gZnVuY3Rpb24od2Vla0lkKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZWFzb25zL1wiICsgc2Vhc29uTW9kZWwuc2Vhc29uLmlkICsgXCIvd2Vla3MvXCIgKyB3ZWVrSWQpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIldlZWtTZXJ2aWNlOiBnZXRXZWVrIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiV2Vla1NlcnZpY2U6IGdldFdlZWsgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuY29tcGxldGVXZWVrID0gZnVuY3Rpb24od2Vlaykge1xuICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAgICRodHRwLnB1dChhcGlDb25maWcuYmFzZVVSTCArIFwiYWRtaW4vc2Vhc29ucy9cIiArIHdlZWsuc2Vhc29uX2lkICsgXCIvd2Vla3MvXCIgKyB3ZWVrLmlkICsgXCIvY29tcGxldGVcIilcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiV2Vla1NlcnZpY2U6IGNvbXBsZXRlV2VlayBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJXZWVrU2VydmljZTogY29tcGxldGVXZWVrIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH07XG5cbn07XG5cbldlZWtTZXJ2aWNlLiRpbmplY3QgPSBbJyRodHRwJywgJyRsb2cnLCAnJHEnLCAnYXBpQ29uZmlnJywgJ3NlYXNvbk1vZGVsJywgJ21lc3NhZ2VNb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBXZWVrU2VydmljZTtcbiIsInZhciBHYW1lU2VydmljZSA9IGZ1bmN0aW9uKCRodHRwLCAkbG9nLCAkc3RhdGUsIGFwaUNvbmZpZywgbWVzc2FnZU1vZGVsKSB7XG5cbiAgdGhpcy5nZXRDdXJyZW50R2FtZXMgPSBmdW5jdGlvbihsZWFndWVJZCkge1xuICAgIHZhciBhcGlVcmwgPSBhcGlDb25maWcuYmFzZVVSTCArIFwiZ2FtZXMvY3VycmVudD9sZWFndWVfaWQ9XCIgKyBsZWFndWVJZDtcblxuICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaVVybClcbiAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIkdhbWVTZXJ2aWNlOiBnZXRDdXJyZW50R2FtZXMgc3VjY2Vzc1wiKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KVxuICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIkdhbWVTZXJ2aWNlOiBnZXRDdXJyZW50R2FtZXMgZmFpbGVkXCIpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH07XG5cbiAgdGhpcy5nZXRXZWVrR2FtZXMgPSBmdW5jdGlvbih3ZWVrSWQpIHtcbiAgICB2YXIgYXBpVXJsID0gYXBpQ29uZmlnLmJhc2VVUkwgKyBcIndlZWtzL1wiICsgd2Vla0lkICsgXCIvZ2FtZXNcIjtcblxuICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaVVybClcbiAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIkdhbWVTZXJ2aWNlOiBnZXRXZWVrR2FtZXMgc3VjY2Vzc1wiKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KVxuICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIkdhbWVTZXJ2aWNlOiBnZXRXZWVrR2FtZXMgZmFpbGVkXCIpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH07XG5cbiAgdGhpcy51cGRhdGVHYW1lID0gZnVuY3Rpb24oZ2FtZVBhcmFtcykge1xuICAgIHZhciBwcm9taXNlID0gJGh0dHAucHV0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJhZG1pbi93ZWVrcy9cIiArIGdhbWVQYXJhbXMud2Vla19pZCArIFwiL2dhbWVzL1wiICsgZ2FtZVBhcmFtcy5pZCxcbiAgICAgIHsgZ2FtZTogZ2FtZVBhcmFtcyB9KVxuICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiR2FtZVNlcnZpY2U6IHVwZGF0ZUdhbWUgc3VjY2Vzc1wiKTtcbiAgICAgICAgLy8gdG9kbzogdGhpcyByZWxpZXMgb24gYSBtb25rZXkgcGF0Y2ggYXQgdGhlIG1vbWVudCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyLXVpL3VpLXJvdXRlci9pc3N1ZXMvNTgyXG4gICAgICAgIC8vIGJ1dCBtYXkgYmUgcmVzb2x2ZWQgd2l0aCBmdXR1cmUgcmVsZWFzZXMgb2YgYW5ndWxhci11aS1yb3V0ZXJcbiAgICAgICAgJHN0YXRlLnJlbG9hZCgpOyAvLyByZWxvYWRzIGFsbCB0aGUgcmVzb2x2ZXMgZm9yIHRoZSB2aWV3IGxlYWd1ZSBwYWdlIGFuZCByZWluc3RhbnRpYXRlcyB0aGUgY29udHJvbGxlclxuICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KVxuICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIkdhbWVTZXJ2aWNlOiB1cGRhdGVHYW1lIGZhaWxlZFwiKTtcbiAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfTtcblxufTtcblxuR2FtZVNlcnZpY2UuJGluamVjdCA9IFsnJGh0dHAnLCAnJGxvZycsICckc3RhdGUnLCAnYXBpQ29uZmlnJywgJ21lc3NhZ2VNb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBHYW1lU2VydmljZTsiLCJjb21tYW5ndWxhci5jcmVhdGUoJ1NpZ25pbkNvbW1hbmQnLFxuICAgIGZ1bmN0aW9uKCRsb2csIHVzZXJTZXJ2aWNlKSB7XG5cbiAgICByZXR1cm4ge1xuXG4gICAgICAgIGV4ZWN1dGU6IGZ1bmN0aW9uKGVtYWlsLCBwYXNzd29yZCkge1xuICAgICAgICAgICAgJGxvZy5kZWJ1ZygnU2lnbmluQ29tbWFuZDogYXV0aGVudGljYXRpbmcgdXNlci4uLicpO1xuICAgICAgICAgICAgcmV0dXJuIHVzZXJTZXJ2aWNlLnNpZ25pbihlbWFpbCwgcGFzc3dvcmQpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlNpZ25pbkNvbW1hbmQ6IGZhaWx1cmU6IFwiICsgZXJyb3IuZGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmVzdWx0OiBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICRsb2cuZGVidWcoXCJTaWduaW5Db21tYW5kOiBzdWNjZXNzIFwiKTtcbiAgICAgICAgfVxuXG4gICAgfVxufSk7XG4iLCJjb21tYW5ndWxhci5jcmVhdGUoJ1NpZ25vdXRDb21tYW5kJyxcbiAgICBmdW5jdGlvbigkbG9nLCB1c2VyU2VydmljZSkge1xuXG4gICAgICAgIHJldHVybiB7XG5cbiAgICAgICAgICAgIGV4ZWN1dGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoJ1NpZ25vdXRDb21tYW5kOiBzaWduaW5nIG91dCB1c2VyLi4uJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXJTZXJ2aWNlLnNpZ25vdXQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJTaWdub3V0Q29tbWFuZDogZmFpbHVyZTogXCIgKyBlcnJvci5kYXRhKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblJlc3VsdDogZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlNpZ25vdXRDb21tYW5kOiBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9KTtcbiIsIlxuY29tbWFuZ3VsYXIuY3JlYXRlKCdHZXRDdXJyZW50VXNlckNvbW1hbmQnLFxuICAgZnVuY3Rpb24oJGxvZywgdXNlclNlcnZpY2UsIHVzZXJNb2RlbCkge1xuXG4gICAgcmV0dXJuIHtcblxuICAgICAgICBleGVjdXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICRsb2cuZGVidWcoJ0dldEN1cnJlbnRVc2VyQ29tbWFuZDogZ2V0dGluZyBjdXJyZW50IHVzZXIgZGV0YWlscy4uLicpO1xuICAgICAgICAgICAgdmFyIHVzZXJQcm9taXNlID0gdXNlclNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoKTtcbiAgICAgICAgICAgIHJldHVybiB1c2VyUHJvbWlzZTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICRsb2cuZGVidWcoXCJHZXRDdXJyZW50VXNlckNvbW1hbmQ6IGZhaWx1cmU6IFwiICsgZXJyb3IuZGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmVzdWx0OiBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICRsb2cuZGVidWcoXCJHZXRDdXJyZW50VXNlckNvbW1hbmQ6IHN1Y2Nlc3NcIik7XG4gICAgICAgIH1cblxuICAgIH1cbn0pOyIsIlxudmFyIE9mZnNldEZpbHRlciA9IGZ1bmN0aW9uKCRsb2cpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oaW5wdXQsIHN0YXJ0KSB7XG4gICAgICAgIHN0YXJ0ID0gcGFyc2VJbnQoc3RhcnQsIDEwKTtcbiAgICAgICAgcmV0dXJuIGlucHV0LnNsaWNlKHN0YXJ0KTtcbiAgICB9O1xufTtcblxuT2Zmc2V0RmlsdGVyLiRpbmplY3QgPSBbJyRsb2cnXTtcbm1vZHVsZS5leHBvcnRzID0gT2Zmc2V0RmlsdGVyO1xuIiwidmFyIEFjdGl2ZVRlYW1GaWx0ZXIgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRlYW1zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuaW5hY3RpdmUgPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRlYW1zO1xuICAgIH1cbiAgICB2YXIgYWN0aXZlVGVhbXMgPSBfLmZpbHRlcih0ZWFtcywgZnVuY3Rpb24odGVhbSkge1xuICAgICAgcmV0dXJuIHRlYW0uYWN0aXZlO1xuICAgIH0pO1xuICAgIHJldHVybiBhY3RpdmVUZWFtcztcbiAgfTtcbn07XG5cbkFjdGl2ZVRlYW1GaWx0ZXIuJGluamVjdCA9IFtdO1xubW9kdWxlLmV4cG9ydHMgPSBBY3RpdmVUZWFtRmlsdGVyO1xuIiwidmFyIEFsaXZlVGVhbUZpbHRlciA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gZnVuY3Rpb24odGVhbXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5kZWFkID09IHRydWUpIHtcbiAgICAgIHJldHVybiB0ZWFtcztcbiAgICB9XG4gICAgdmFyIGFsaXZlVGVhbXMgPSBfLmZpbHRlcih0ZWFtcywgZnVuY3Rpb24odGVhbSkge1xuICAgICAgcmV0dXJuIHRlYW0uYWxpdmU7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFsaXZlVGVhbXM7XG4gIH07XG59O1xuXG5BbGl2ZVRlYW1GaWx0ZXIuJGluamVjdCA9IFtdO1xubW9kdWxlLmV4cG9ydHMgPSBBbGl2ZVRlYW1GaWx0ZXI7XG4iLCJ2YXIgT3BlbkxlYWd1ZUZpbHRlciA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gZnVuY3Rpb24obGVhZ3Vlcywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmNsb3NlZCA9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gbGVhZ3VlcztcbiAgICB9XG4gICAgdmFyIG9wZW5MZWFndWVzID0gXy5maWx0ZXIobGVhZ3VlcywgZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgICByZXR1cm4gbGVhZ3VlLm9wZW47XG4gICAgfSk7XG4gICAgcmV0dXJuIG9wZW5MZWFndWVzO1xuICB9O1xufTtcblxuT3BlbkxlYWd1ZUZpbHRlci4kaW5qZWN0ID0gW107XG5tb2R1bGUuZXhwb3J0cyA9IE9wZW5MZWFndWVGaWx0ZXI7XG4iLCJ2YXIgTWFuYWdlZExlYWd1ZUZpbHRlciA9IGZ1bmN0aW9uKHVzZXJNb2RlbCkge1xuICByZXR1cm4gZnVuY3Rpb24obGVhZ3Vlcywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLm1hbmFnZWQgPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGxlYWd1ZXM7XG4gICAgfVxuICAgIHZhciBpbkxlYWd1ZXMgPSBfLmZpbHRlcihsZWFndWVzLCBmdW5jdGlvbihsZWFndWUpIHtcbiAgICAgIHJldHVybiBsZWFndWUuY29tbWlzaF9pZHMuaW5kZXhPZih1c2VyTW9kZWwudXNlci5pZCkgPT0gLTE7XG4gICAgfSk7XG4gICAgcmV0dXJuIGluTGVhZ3VlcztcbiAgfTtcbn07XG5cbk1hbmFnZWRMZWFndWVGaWx0ZXIuJGluamVjdCA9IFsndXNlck1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IE1hbmFnZWRMZWFndWVGaWx0ZXI7XG4iLCJcbnZhciBUaW1lRmlsdGVyID0gZnVuY3Rpb24oJGxvZykge1xuICAgcmV0dXJuIGZ1bmN0aW9uKGlucHV0KSB7XG5cbiAgICAgICBpZiAoaW5wdXQgPCAxKSB7XG4gICAgICAgICAgIHJldHVybiBcIjAwOjAwOjAwXCI7XG4gICAgICAgfVxuXG4gICAgICAgZnVuY3Rpb24gZm9ybWF0KHZhbCkge1xuICAgICAgICAgICByZXR1cm4gKHZhbDwxMCA/ICcwJyA6ICcnKSArIHZhbDtcbiAgICAgICB9XG5cbiAgICAgICB2YXIgaCA9IE1hdGguZmxvb3IoKGlucHV0IC8gMTAwMCkgLyAzNjAwKTtcbiAgICAgICB2YXIgbSA9IE1hdGguZmxvb3IoKChpbnB1dCAvIDEwMDApICUgMzYwMCkgLyA2MCk7XG4gICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKChpbnB1dCAvIDEwMDApICUgNjApO1xuICAgICAgIHJldHVybiBmb3JtYXQoaCkgKyBcIjpcIiArIGZvcm1hdChtKSArIFwiOlwiICsgZm9ybWF0KHMpO1xuICAgfVxuXG59O1xuXG5UaW1lRmlsdGVyLiRpbmplY3QgPSBbJyRsb2cnXTtcbm1vZHVsZS5leHBvcnRzID0gVGltZUZpbHRlcjtcbiIsInZhciBIb21lQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJGxvZywgJGxvY2F0aW9uLCAkbW9kYWwsIHNlYXNvbk1vZGVsLCBtZXNzYWdlTW9kZWwsIHdlZWtTZXJ2aWNlLCBsZWFndWVTZXJ2aWNlKSB7XG5cbiAgICAkc2NvcGUuc2Vhc29uID0gc2Vhc29uTW9kZWwuc2Vhc29uO1xuXG4gICAgJHNjb3BlLmNyZWF0ZUxlYWd1ZSA9IGZ1bmN0aW9uKHNlYXNvbikge1xuXG4gICAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL25ldy9sZWFndWUubmV3LnRwbC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ05ld0xlYWd1ZUNvbnRyb2xsZXInLFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgd2Vla3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHdlZWtTZXJ2aWNlLmdldEF2YWlsYWJsZVdlZWtzKHNlYXNvbi5pZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH0pO1xuXG4gICAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgICAgICBsZWFndWVTZXJ2aWNlLmNyZWF0ZUxlYWd1ZShsZWFndWUpO1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKCdDcmVhdGUgbGVhZ3VlIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ0NyZWF0ZSBsZWFndWUgY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgICB9KTtcblxuICAgIH07XG5cbiAgICAkc2NvcGUuam9pbkxlYWd1ZSA9IGZ1bmN0aW9uKHNlYXNvbikge1xuICAgICAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgc2Vhc29uLmlkICsgJy9sZWFndWVzL3B1YmxpYycpO1xuICAgIH07XG5cbiAgICAkc2NvcGUudmlld1RlYW1zID0gZnVuY3Rpb24oc2Vhc29uKSB7XG4gICAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgc2Vhc29uLmlkICsgJy90ZWFtcy9hbGl2ZScpO1xuICAgIH07XG5cbiAgICAkc2NvcGUudmlld0xlYWd1ZXMgPSBmdW5jdGlvbihzZWFzb24pIHtcbiAgICAgICRsb2NhdGlvbi5wYXRoKCcvc2Vhc29uLycgKyBzZWFzb24uaWQgKyAnL2xlYWd1ZXMnKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJob21lIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG59O1xuXG5Ib21lQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZycsICckbG9jYXRpb24nLCAnJG1vZGFsJywgJ3NlYXNvbk1vZGVsJywgJ21lc3NhZ2VNb2RlbCcsICd3ZWVrU2VydmljZScsICdsZWFndWVTZXJ2aWNlJ107XG5tb2R1bGUuZXhwb3J0cyA9IEhvbWVDb250cm9sbGVyO1xuIiwidmFyIEZhcUNvbnRyb2xsZXIgPSBmdW5jdGlvbigkbW9kYWxJbnN0YW5jZSwgJHNjb3BlLCAkbG9nKSB7XG5cbiAgJHNjb3BlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2Nsb3NlJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcImZhcSBjb250cm9sbGVyXCIpO1xuICB9O1xuICBpbml0KCk7XG59O1xuXG5GYXFDb250cm9sbGVyLiRpbmplY3QgPSBbJyRtb2RhbEluc3RhbmNlJywgJyRzY29wZScsICckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IEZhcUNvbnRyb2xsZXI7XG4iLCJ2YXIgQWJ1c2VDb250cm9sbGVyID0gZnVuY3Rpb24oJG1vZGFsSW5zdGFuY2UsICRzY29wZSwgJGxvZykge1xuXG4gICRzY29wZS5hYnVzZU1lc3NhZ2UgPSAnJztcblxuICAkc2NvcGUuY29udGFjdFVzID0gZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKG1lc3NhZ2UpO1xuICB9O1xuXG4gICRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgfTtcblxuICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICB9O1xuXG4gICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwicmVwb3J0IGFidXNlIGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cbkFidXNlQ29udHJvbGxlci4kaW5qZWN0ID0gWyckbW9kYWxJbnN0YW5jZScsICckc2NvcGUnLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBBYnVzZUNvbnRyb2xsZXI7XG4iLCJ2YXIgUmVnaXN0ZXJDb250cm9sbGVyID0gZnVuY3Rpb24oJHNjb3BlLCAkbG9nLCAkbW9kYWwsICRtb2RhbEluc3RhbmNlKSB7XG5cbiAgICAkc2NvcGUubmV3VXNlckRhdGEgPSB7XG4gICAgICAgIGZpcnN0X25hbWU6ICcnLFxuICAgICAgICBsYXN0X25hbWU6ICcnLFxuICAgICAgICBuaWNrbmFtZTogJycsXG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgZW1haWxfY29uZmlybWF0aW9uOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICBwYXNzd29yZF9jb25maXJtYXRpb246ICcnXG4gICAgfTtcblxuICAgICRzY29wZS5yZWdpc3RlciA9IGZ1bmN0aW9uIChuZXdVc2VyKSB7XG4gICAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZShuZXdVc2VyKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICAgICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLnNob3dUZXJtcyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci90ZXJtcy9yZWdpc3Rlci50ZXJtcy50cGwuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdSZWdpc3RlclRlcm1zQ29udHJvbGxlcidcbiAgICAgIH0pO1xuXG4gICAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gZG8gbmFkYVxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKCdUZXJtcyBhbmQgY29uZGl0aW9ucyBtb2RhbCBjbG9zZWQuLi4nKTtcbiAgICAgIH0pO1xuXG4gICAgfTtcblxuICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcInJlZ2lzdGVyIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cblJlZ2lzdGVyQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZycsICckbW9kYWwnLCAnJG1vZGFsSW5zdGFuY2UnXTtcbm1vZHVsZS5leHBvcnRzID0gUmVnaXN0ZXJDb250cm9sbGVyO1xuIiwidmFyIFNpZ25pbkNvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2csICRsb2NhdGlvbiwgJG1vZGFsLCBtZXNzYWdlTW9kZWwsIHVzZXJTZXJ2aWNlKSB7XG5cbiAgICAkc2NvcGUuY3JlZGVudGlhbHMgPSB7XG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgfTtcblxuICAgICRzY29wZS5zaWduaW4gPSBmdW5jdGlvbihjcmVkZW50aWFscykge1xuICAgICAgICAkbG9nLmRlYnVnKFwic2lnbmluIGNyZWRlbnRpYWxzOiBcIiArIGNyZWRlbnRpYWxzKTtcbiAgICAgICAgJHNjb3BlLmRpc3BhdGNoKFwiU2lnbmluRXZlbnRcIiwgY3JlZGVudGlhbHMpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuZm9yZ290UGFzc3dvcmQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gdG9kbzogaW1wbGVtZW50IHRoaXNcbiAgICAgICAgYWxlcnQoJ3RvdWdoIHNoaXQnKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLnJlc2V0UGFzc3dvcmQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL3VzZXIvcmVzZXQvdXNlci5yZXNldC50cGwuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdVc2VyUmVzZXRDb250cm9sbGVyJ1xuICAgICAgfSk7XG5cbiAgICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24gKGVtYWlsKSB7XG4gICAgICAgIHVzZXJTZXJ2aWNlLnJlc2V0VXNlcihlbWFpbCk7XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoJ1Jlc2V0IHBhc3N3b3JkIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ1Jlc2V0IHBhc3N3b3JkIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgICRzY29wZS5yZWdpc3RlciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci9yZWdpc3Rlci50cGwuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdSZWdpc3RlckNvbnRyb2xsZXInXG4gICAgICB9KTtcblxuICAgICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihuZXdVc2VyKSB7XG4gICAgICAgIHVzZXJTZXJ2aWNlLmNyZWF0ZVVzZXIobmV3VXNlcik7XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoJ1JlZ2lzdGVyIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ1JlZ2lzdGVyIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJzaWduaW4gY29udHJvbGxlclwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcblxufTtcblxuU2lnbmluQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZycsICckbG9jYXRpb24nLCAnJG1vZGFsJywgJ21lc3NhZ2VNb2RlbCcsICd1c2VyU2VydmljZSddO1xubW9kdWxlLmV4cG9ydHMgPSBTaWduaW5Db250cm9sbGVyO1xuIiwiXG52YXIgVXNlckNvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2csIHVzZXJNb2RlbCwgdXNlclNlcnZpY2UpIHtcblxuICAgICRzY29wZS51c2VyRGF0YSA9IGFuZ3VsYXIuY29weSh1c2VyTW9kZWwpO1xuXG4gICAgJHNjb3BlLnVwZGF0ZSA9IGZ1bmN0aW9uKHVzZXIpIHtcbiAgICAgICAgdXNlclNlcnZpY2UudXBkYXRlVXNlcih1c2VyKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmhhc0Vycm9yID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gICAgfTtcblxuICAgICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRlcnJvcltwcm9wZXJ0eV07XG4gICAgfTtcblxuICAgICRzY29wZS4kb24oJ3VzZXJNb2RlbDo6dXNlclVwZGF0ZWQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAkc2NvcGUudXNlckRhdGEgPSBhbmd1bGFyLmNvcHkodXNlck1vZGVsKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKFwidXNlciBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5Vc2VyQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZycsICd1c2VyTW9kZWwnLCAndXNlclNlcnZpY2UnXTtcbm1vZHVsZS5leHBvcnRzID0gVXNlckNvbnRyb2xsZXI7XG4iLCJcbnZhciBMZWFndWVDb250cm9sbGVyID0gZnVuY3Rpb24oJHNjb3BlLCAkbG9nKSB7XG5cbiAgICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICAgICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJsZWFndWUgY29udHJvbGxlclwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcblxufTtcblxuTGVhZ3VlQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBMZWFndWVDb250cm9sbGVyO1xuIiwiXG52YXIgTGVhZ3Vlc0NvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2csICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBzZWFzb25Nb2RlbCkge1xuXG4gICAgJHNjb3BlLnNlYXNvbiA9IHNlYXNvbk1vZGVsLnNlYXNvbjtcblxuICAgIC8vIHBhZ2luYXRpb25cbiAgICAkc2NvcGUuY3VycmVudExlYWd1ZVBhZ2UgPSAxO1xuICAgICRzY29wZS5sZWFndWVzUGVyUGFnZSA9IDEwMDtcblxuICAgICRzY29wZS5zZWFzb25JZCA9ICRzdGF0ZVBhcmFtcy5zZWFzb25JZDtcblxuICAgICRzY29wZS5pc1B1YmxpYyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gJHN0YXRlLmN1cnJlbnQubmFtZSA9PSAncHJpdmF0ZS5sZWFndWVzLmpvaW4ucHVibGljJztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJsZWFndWVzIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cbkxlYWd1ZXNDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJywgJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLCAnc2Vhc29uTW9kZWwnXTtcbm1vZHVsZS5leHBvcnRzID0gTGVhZ3Vlc0NvbnRyb2xsZXI7XG5cbiIsInZhciBUZWFtQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJGxvZykge1xuXG4gICAgJHNjb3BlLmhhc0Vycm9yID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gICAgfTtcblxuICAgICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRlcnJvcltwcm9wZXJ0eV07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKFwidGVhbSBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5UZWFtQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBUZWFtQ29udHJvbGxlcjtcbiIsInZhciBUZWFtc0NvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2csICRzdGF0ZSwgJGxvY2F0aW9uLCAkc3RhdGVQYXJhbXMpIHtcblxuICAgICRzY29wZS5zZWFzb25JZCA9ICRzdGF0ZVBhcmFtcy5zZWFzb25JZDtcblxuICAgIC8vIHBhZ2luYXRpb25cbiAgICAkc2NvcGUuY3VycmVudFRlYW1QYWdlID0gMTtcbiAgICAkc2NvcGUudGVhbXNQZXJQYWdlID0gMTAwO1xuXG4gICAgJHNjb3BlLmlzQWxpdmVTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gJHN0YXRlLmN1cnJlbnQubmFtZSA9PSAncHJpdmF0ZS50ZWFtcy5hbGl2ZSc7XG4gICAgfTtcblxuICAgICRzY29wZS5oYXNOb1BpY2sgPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgICByZXR1cm4gdGVhbS5sYXN0X3BpY2tfc3F1YWQubmFtZSA9PSAnTm8gUGljayc7XG4gICAgfTtcblxuICAgICRzY29wZS5jcmVhdGVUZWFtID0gZnVuY3Rpb24oc2Vhc29uSWQpIHtcbiAgICAgICAgJGxvY2F0aW9uLnBhdGgoJy9zZWFzb24vJyArIHNlYXNvbklkICsgJy9sZWFndWVzL3B1YmxpYycpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuYWxpdmVUZWFtcyA9IGZ1bmN0aW9uKHNlYXNvbklkKSB7XG4gICAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgc2Vhc29uSWQgKyAnL3RlYW1zL2FsaXZlJyk7XG4gICAgfTtcblxuICAgICRzY29wZS5kZWFkVGVhbXMgPSBmdW5jdGlvbihzZWFzb25JZCkge1xuICAgICAgJGxvY2F0aW9uLnBhdGgoJy9zZWFzb24vJyArIHNlYXNvbklkICsgJy90ZWFtcy9kZWFkJyk7XG4gICAgfTtcblxuICAgICRzY29wZS5zaG93VGVhbSA9IGZ1bmN0aW9uKHNlYXNvbklkLCB0ZWFtKSB7XG4gICAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgc2Vhc29uSWQgKyAnL2xlYWd1ZS8nICsgdGVhbS5sZWFndWUuaWQgKyAnL3RlYW0vJyArIHRlYW0uaWQpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcInRlYW1zIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cblRlYW1zQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZycsICckc3RhdGUnLCAnJGxvY2F0aW9uJywgJyRzdGF0ZVBhcmFtcyddO1xubW9kdWxlLmV4cG9ydHMgPSBUZWFtc0NvbnRyb2xsZXI7XG4iLCJ2YXIgUGxheUNvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2csICRsb2NhdGlvbiwgJG1vZGFsLCAkc3RhdGUsIHNlYXNvbk1vZGVsLCBtZXNzYWdlTW9kZWwsIHdlZWtTZXJ2aWNlLCBsZWFndWVTZXJ2aWNlKSB7XG5cbiAgJHNjb3BlLnNlYXNvbiA9IHNlYXNvbk1vZGVsLnNlYXNvbjtcblxuICAkc2NvcGUudGVhbU9wdGlvbnMgPSB7IGFsaXZlOiB0cnVlLCBkZWFkOiB0cnVlIH07XG4gICRzY29wZS5sZWFndWVPcHRpb25zID0geyBtYW5hZ2VkOiB0cnVlIH07XG5cbiAgJHNjb3BlLnF1ZXJ5ID0gJyc7XG5cbiAgJHNjb3BlLm15VGVhbXMgPSBmdW5jdGlvbihzZWFzb24pIHtcbiAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgc2Vhc29uLmlkICsgJy9teS90ZWFtcycpO1xuICB9O1xuXG4gICRzY29wZS5teUxlYWd1ZXMgPSBmdW5jdGlvbihzZWFzb24pIHtcbiAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgc2Vhc29uLmlkICsgJy9teS9sZWFndWVzJyk7XG4gIH07XG5cbiAgJHNjb3BlLnJlc2V0U2VhcmNoID0gZnVuY3Rpb24oKSB7XG4gICAgJHNjb3BlLnF1ZXJ5ID0gJyc7XG4gIH07XG5cbiAgJHNjb3BlLmlzU3RhdGUgPSBmdW5jdGlvbihzdGF0ZXMpIHtcbiAgICByZXR1cm4gXy5pbmRleE9mKHN0YXRlcywgJHN0YXRlLmN1cnJlbnQubmFtZSkgPiAtMTtcbiAgfTtcblxuICAkc2NvcGUuY3JlYXRlTGVhZ3VlID0gZnVuY3Rpb24oc2Vhc29uKSB7XG5cbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9uZXcvbGVhZ3VlLm5ldy50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnTmV3TGVhZ3VlQ29udHJvbGxlcicsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIHdlZWtzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gd2Vla1NlcnZpY2UuZ2V0QXZhaWxhYmxlV2Vla3Moc2Vhc29uLmlkKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSk7XG5cbiAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgICAgbGVhZ3VlU2VydmljZS5jcmVhdGVMZWFndWUobGVhZ3VlKTtcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAkbG9nLmRlYnVnKCdDcmVhdGUgbGVhZ3VlIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdDcmVhdGUgbGVhZ3VlIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgIH0pO1xuXG4gIH07XG5cbiAgJHNjb3BlLmpvaW5MZWFndWUgPSBmdW5jdGlvbihzZWFzb24pIHtcbiAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgc2Vhc29uLmlkICsgJy9sZWFndWVzL3B1YmxpYycpO1xuICB9O1xuXG4gICAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcInBsYXkgY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xuXG59O1xuXG5QbGF5Q29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZycsICckbG9jYXRpb24nLCAnJG1vZGFsJywgJyRzdGF0ZScsICdzZWFzb25Nb2RlbCcsICdtZXNzYWdlTW9kZWwnLCAnd2Vla1NlcnZpY2UnLCAnbGVhZ3VlU2VydmljZSddO1xubW9kdWxlLmV4cG9ydHMgPSBQbGF5Q29udHJvbGxlcjtcbiIsInZhciBBZG1pbkNvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUpIHtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuQWRtaW5Db250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZSddO1xubW9kdWxlLmV4cG9ydHMgPSBBZG1pbkNvbnRyb2xsZXI7XG4iLCJ2YXIgSGVhZGVyQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJGxvZywgJGxvY2F0aW9uLCAkbW9kYWwsICRzdGF0ZSwgJGFuY2hvclNjcm9sbCwgd2Vla1NlcnZpY2UsIHVzZXJTZXJ2aWNlLCBsZWFndWVTZXJ2aWNlLCB1c2VyTW9kZWwsIHNlYXNvbk1vZGVsLCBtZXNzYWdlTW9kZWwpIHtcblxuICAgIHZhciBzY3JvbGxUb1RvcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgJGFuY2hvclNjcm9sbCgpOyAvLyBoYWNreT9cbiAgICB9O1xuXG4gICAgdmFyIGNoZWNrSHRtbDVTdG9yYWdlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS50ZXN0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNjAwMDAwMCkgKyAxO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICdkYW5nZXInLCBjb250ZW50OiAnWW91IGFyZSBpbiBQcml2YWN5IE1vZGUuIFRoaXMgYXBwIHdpbGwgbm90IGZ1bmN0aW9uIHByb3Blcmx5LiBUdXJuIG9mZiBQcml2YWN5IE1vZGUuJ30sIGZhbHNlKTtcbiAgICAgIH1cblxuICAgIH07XG5cbiAgICAkc2NvcGUuaXNDb2xsYXBzZWQgPSB0cnVlO1xuXG4gICAgJHNjb3BlLnVzZXJEYXRhID0gdXNlck1vZGVsO1xuXG4gICAgJHNjb3BlLnNlYXNvbiA9IHNlYXNvbk1vZGVsLnNlYXNvbjtcblxuICAgICRzY29wZS5jcmVkZW50aWFscyA9IHtcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJydcbiAgICB9O1xuXG4gICAgJHNjb3BlLmlzU3RhdGUgPSBmdW5jdGlvbihzdGF0ZXMpIHtcbiAgICAgIHJldHVybiBfLmluZGV4T2Yoc3RhdGVzLCAkc3RhdGUuY3VycmVudC5uYW1lKSA+IC0xO1xuICAgIH07XG5cbiAgICAkc2NvcGUuaG9tZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkbG9jYXRpb24ucGF0aCgnLycpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuZmFxID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICRtb2RhbC5vcGVuKHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3B1YmxpYy9mYXEvZmFxLnRwbC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ0ZhcUNvbnRyb2xsZXInXG4gICAgICB9KTtcblxuICAgIH07XG5cbiAgICAkc2NvcGUuY29udGFjdFVzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHVibGljL2FidXNlL2FidXNlLnRwbC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ0FidXNlQ29udHJvbGxlcidcbiAgICAgIH0pO1xuXG4gICAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgdXNlclNlcnZpY2UuY29udGFjdFVzKG1lc3NhZ2UpO1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ0NvbnRhY3QgdXMgY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgICAgICRsb2cuZGVidWcoJ2NvbnRhY3QgdXMgZGlzbWlzc2VkLi4uJyk7XG4gICAgICB9KTtcblxuICAgIH07XG5cbiAgICAkc2NvcGUucmVnaXN0ZXIgPSBmdW5jdGlvbigpIHtcblxuICAgICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXIvcmVnaXN0ZXIudHBsLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnUmVnaXN0ZXJDb250cm9sbGVyJ1xuICAgICAgfSk7XG5cbiAgICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24obmV3VXNlcikge1xuICAgICAgICB1c2VyU2VydmljZS5jcmVhdGVVc2VyKG5ld1VzZXIpO1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ1JlZ2lzdGVyIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgICAgICAkbG9nLmRlYnVnKCdSZWdpc3RlciBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgICRzY29wZS5wbGF5ID0gZnVuY3Rpb24oc2Vhc29uKSB7XG4gICAgICAgICRsb2NhdGlvbi5wYXRoKCcvc2Vhc29uLycgKyBzZWFzb24uaWQgKyAnL215L3RlYW1zJyk7XG4gICAgfTtcblxuICAgICRzY29wZS5qb2luTGVhZ3VlID0gZnVuY3Rpb24oc2Vhc29uKSB7XG4gICAgICAgICRsb2NhdGlvbi5wYXRoKCcvc2Vhc29uLycgKyBzZWFzb24uaWQgKyAnL2xlYWd1ZXMvcHVibGljJyk7XG4gICAgfTtcblxuICAgICRzY29wZS5jcmVhdGVMZWFndWUgPSBmdW5jdGlvbihzZWFzb24pIHtcblxuICAgICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9uZXcvbGVhZ3VlLm5ldy50cGwuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdOZXdMZWFndWVDb250cm9sbGVyJyxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIHdlZWtzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB3ZWVrU2VydmljZS5nZXRBdmFpbGFibGVXZWVrcyhzZWFzb24uaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICB9KTtcblxuICAgICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihsZWFndWUpIHtcbiAgICAgICAgbGVhZ3VlU2VydmljZS5jcmVhdGVMZWFndWUobGVhZ3VlKTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdDcmVhdGUgbGVhZ3VlIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgICAgICAkbG9nLmRlYnVnKCdDcmVhdGUgbGVhZ3VlIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgJHNjb3BlLnVzZXJQcm9maWxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRsb2NhdGlvbi5wYXRoKCcvdXNlcicpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuc2lnbmluID0gZnVuY3Rpb24oY3JlZGVudGlhbHMpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcInNpZ25pbiBjcmVkZW50aWFsczogXCIgKyBjcmVkZW50aWFscyk7XG4gICAgICAgICRzY29wZS5kaXNwYXRjaChcIlNpZ25pbkV2ZW50XCIsIGNyZWRlbnRpYWxzKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLnNpZ25vdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJHNjb3BlLmNyZWRlbnRpYWxzID0ge1xuICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgICAgIH07XG4gICAgICAgICRzY29wZS5kaXNwYXRjaChcIlNpZ25vdXRFdmVudFwiKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLnJlc2V0UGFzc3dvcmQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL3VzZXIvcmVzZXQvdXNlci5yZXNldC50cGwuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdVc2VyUmVzZXRDb250cm9sbGVyJ1xuICAgICAgfSk7XG5cbiAgICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24gKGVtYWlsKSB7XG4gICAgICAgIHVzZXJTZXJ2aWNlLnJlc2V0VXNlcihlbWFpbCk7XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnUmVzZXQgcGFzc3dvcmQgY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgICAgICRsb2cuZGVidWcoJ1Jlc2V0IHBhc3N3b3JkIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiaGVhZGVyIGNvbnRyb2xsZXJcIik7XG4gICAgICAgIHNjcm9sbFRvVG9wKCk7XG4gICAgICAgIGNoZWNrSHRtbDVTdG9yYWdlKCk7XG4gICAgfTtcbiAgICBpbml0KCk7XG59O1xuXG5IZWFkZXJDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJywgJyRsb2NhdGlvbicsICckbW9kYWwnLCAnJHN0YXRlJywgJyRhbmNob3JTY3JvbGwnLCAnd2Vla1NlcnZpY2UnLCAndXNlclNlcnZpY2UnLCAnbGVhZ3VlU2VydmljZScsICd1c2VyTW9kZWwnLCAnc2Vhc29uTW9kZWwnLCAnbWVzc2FnZU1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IEhlYWRlckNvbnRyb2xsZXI7XG4iLCJ2YXIgTWVzc2FnZUNvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2csIG1lc3NhZ2VNb2RlbCkge1xuXG4gICAgJHNjb3BlLm1lc3NhZ2VEYXRhID0gbWVzc2FnZU1vZGVsO1xuXG4gICAgJHNjb3BlLmRpc21pc3NNZXNzYWdlID0gZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICBtZXNzYWdlLnJlc2V0TWVzc2FnZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKFwibWVzc2FnZSBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xufTtcblxuTWVzc2FnZUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnLCAnbWVzc2FnZU1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IE1lc3NhZ2VDb250cm9sbGVyO1xuIiwidmFyIEZvb3RlckNvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2csICRtb2RhbCwgJGxvY2F0aW9uLCB3ZWVrU2VydmljZSwgbGVhZ3VlU2VydmljZSwgc2Vhc29uTW9kZWwsIG1lc3NhZ2VNb2RlbCkge1xuXG4gICRzY29wZS5zZWFzb24gPSBzZWFzb25Nb2RlbC5zZWFzb247XG5cbiAgJHNjb3BlLnBsYXkgPSBmdW5jdGlvbihzZWFzb24pIHtcbiAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgc2Vhc29uLmlkICsgJy9teS90ZWFtcycpO1xuICB9O1xuXG4gICRzY29wZS5qb2luTGVhZ3VlID0gZnVuY3Rpb24oc2Vhc29uKSB7XG4gICAgJGxvY2F0aW9uLnBhdGgoJy9zZWFzb24vJyArIHNlYXNvbi5pZCArICcvbGVhZ3Vlcy9wdWJsaWMnKTtcbiAgfTtcblxuICAkc2NvcGUuY3JlYXRlTGVhZ3VlID0gZnVuY3Rpb24oc2Vhc29uKSB7XG5cbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9uZXcvbGVhZ3VlLm5ldy50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnTmV3TGVhZ3VlQ29udHJvbGxlcicsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIHdlZWtzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gd2Vla1NlcnZpY2UuZ2V0QXZhaWxhYmxlV2Vla3Moc2Vhc29uLmlkKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSk7XG5cbiAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgICAgbGVhZ3VlU2VydmljZS5jcmVhdGVMZWFndWUobGVhZ3VlKTtcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ0NyZWF0ZSBsZWFndWUgY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgICAkbG9nLmRlYnVnKCdDcmVhdGUgbGVhZ3VlIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgIH0pO1xuXG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcImZvb3RlciBjb250cm9sbGVyXCIpO1xuICB9O1xuICBpbml0KCk7XG59O1xuXG5Gb290ZXJDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJywgJyRtb2RhbCcsICckbG9jYXRpb24nLCAnd2Vla1NlcnZpY2UnLCAnbGVhZ3VlU2VydmljZScsICdzZWFzb25Nb2RlbCcsICdtZXNzYWdlTW9kZWwnXTtcbm1vZHVsZS5leHBvcnRzID0gRm9vdGVyQ29udHJvbGxlcjtcbiIsInZhciBBcHBsaWNhdGlvblNlcnZpY2UgPSBmdW5jdGlvbigkd2luZG93LCAkbG9jYXRpb24sICRsb2cpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogIEFwcGxpY2F0aW9uIFN0YXJ0dXAgUHJvY2Vzc1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zdGFydHVwID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzdGFydHVwUHJvY2VzcygpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBzdGFydHVwUHJvY2VzcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGZvcmNlU3NsKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGZvcmNlU3NsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICgkbG9jYXRpb24ucHJvdG9jb2woKSAhPSAnaHR0cHMnKSB7XG4gICAgICAgICAgICAkd2luZG93LmxvY2F0aW9uLmhyZWYgPSAkbG9jYXRpb24uYWJzVXJsKCkucmVwbGFjZSgnaHR0cCcsICdodHRwcycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRsb2cuZGVidWcoXCJBcHBsaWNhdGlvblNlcnZpY2UgaW5pdCBhcHBsaWNhdGlvbiBzZXJ2aWNlXCIpO1xuICAgICAgICB9O1xuICAgICAgICBpbml0KCk7XG5cbiAgICB9O1xuXG5BcHBsaWNhdGlvblNlcnZpY2UuJGluamVjdCA9IFsnJHdpbmRvdycsICckbG9jYXRpb24nLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBBcHBsaWNhdGlvblNlcnZpY2U7XG4iLCJ2YXIgRm9jdXNEaXJlY3RpdmUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgRk9DVVNfQ0xBU1MgPSAnbmctZm9jdXNlZCc7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgICAgcmVxdWlyZTogJ25nTW9kZWwnLFxuICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMsIGN0cmwpIHtcbiAgICAgICAgICAgIGN0cmwuJGZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGVsZW1lbnQuYmluZCgnZm9jdXMnLCBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKEZPQ1VTX0NMQVNTKTtcbiAgICAgICAgICAgICAgICBzY29wZS4kYXBwbHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0cmwuJGZvY3VzZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkuYmluZCgnYmx1cicsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoRk9DVVNfQ0xBU1MpO1xuICAgICAgICAgICAgICAgIHNjb3BlLiRhcHBseShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgY3RybC4kZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZvY3VzRGlyZWN0aXZlO1xuIiwidmFyIE1hdGNoRGlyZWN0aXZlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVxdWlyZTogJ25nTW9kZWwnLFxuICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW0sIGF0dHJzLCBjdHJsKSB7XG4gICAgICAgICAgICBzY29wZS4kd2F0Y2goJ1snICsgYXR0cnMubmdNb2RlbCArICcsICcgKyBhdHRycy5tYXRjaCArICddJywgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IHZhbHVlWzBdIHx8ICcnO1xuICAgICAgICAgICAgICAgIHZhciBiID0gdmFsdWVbMV0gfHwgJyc7XG4gICAgICAgICAgICAgICAgY3RybC4kc2V0VmFsaWRpdHkoJ21hdGNoJywgYSA9PT0gYik7XG4gICAgICAgICAgICB9LCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTWF0Y2hEaXJlY3RpdmU7XG4iLCIvKiBhdHRyaWJ1dGUgd2lsbCBlbmZvcmNlIGEgcmVnIGV4IHBhdHRlcm4gaWYgdGhlIGZpZWxkIGlzIG1hcmtlZCBhcyBuZy1yZXF1aXJlZCAqL1xudmFyIFJlcXVpcmVkUGF0dGVybkRpcmVjdGl2ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiBcIkFcIixcbiAgICAgICAgcmVxdWlyZTogXCJuZ01vZGVsXCIsXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbCwgYXR0cnMsIG5nTW9kZWwpIHtcbiAgICAgICAgICAgIHZhciB2YWxpZGF0b3IsIHBhdHRlcm5WYWxpZGF0b3IsXG4gICAgICAgICAgICAgICAgcGF0dGVybiA9IGF0dHJzLnJwYXR0ZXJuLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYoIHBhdHRlcm4gKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhdHRlcm4ubWF0Y2goL15cXC8oLiopXFwvJC8pKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gPSBuZXcgUmVnRXhwKHBhdHRlcm4uc3Vic3RyKDEsIHBhdHRlcm4ubGVuZ3RoIC0gMikpO1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuVmFsaWRhdG9yID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0ZShwYXR0ZXJuLCB2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm5WYWxpZGF0b3IgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhdHRlcm5PYmogPSBzY29wZS4kZXZhbChwYXR0ZXJuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcGF0dGVybk9iaiB8fCAhcGF0dGVybk9iai50ZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCAnICsgcGF0dGVybiArICcgdG8gYmUgYSBSZWdFeHAgYnV0IHdhcyAnICsgcGF0dGVybk9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdGUocGF0dGVybk9iaiwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmdNb2RlbC4kZm9ybWF0dGVycy5wdXNoKHBhdHRlcm5WYWxpZGF0b3IpO1xuICAgICAgICAgICAgbmdNb2RlbC4kcGFyc2Vycy5wdXNoKHBhdHRlcm5WYWxpZGF0b3IpO1xuXG4gICAgICAgICAgICBhdHRycy4kb2JzZXJ2ZShcInJlcXVpcmVkXCIsIGZ1bmN0aW9uKG5ld3ZhbCkge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkID0gbmV3dmFsO1xuICAgICAgICAgICAgICAgIHBhdHRlcm5WYWxpZGF0b3IobmdNb2RlbC4kdmlld1ZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZShyZWdleHAsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYoIHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09IFwiXCIgfHwgIXJlcXVpcmVkIHx8IHJlZ2V4cC50ZXN0KHZhbHVlKSApIHtcbiAgICAgICAgICAgICAgICAgICAgbmdNb2RlbC4kc2V0VmFsaWRpdHkoJ3BhdHRlcm4nLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmdNb2RlbC4kc2V0VmFsaWRpdHkoJ3BhdHRlcm4nLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlcXVpcmVkUGF0dGVybkRpcmVjdGl2ZTsiLCJ2YXIgUmVnaXN0ZXJUZXJtc0NvbnRyb2xsZXIgPSBmdW5jdGlvbigkbW9kYWxJbnN0YW5jZSwgJHNjb3BlLCAkbG9nKSB7XG5cbiAgJHNjb3BlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2Nsb3NlJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcInJlZ2lzdGVyIHRlcm1zIGFuZCBjb25kaXRpb25zIGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cblJlZ2lzdGVyVGVybXNDb250cm9sbGVyLiRpbmplY3QgPSBbJyRtb2RhbEluc3RhbmNlJywgJyRzY29wZScsICckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IFJlZ2lzdGVyVGVybXNDb250cm9sbGVyO1xuIiwidmFyIE5ld0xlYWd1ZUNvbnRyb2xsZXIgPSBmdW5jdGlvbih3ZWVrcywgJHNjb3BlLCAkbG9nLCAkbW9kYWxJbnN0YW5jZSkge1xuXG4gICAgJHNjb3BlLndlZWtzID0gd2Vla3MuZGF0YTtcblxuICAgICRzY29wZS5uZXdMZWFndWVEYXRhID0ge1xuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgbmlja25hbWU6ICcnLFxuICAgICAgICBzZWFzb25faWQ6ICRzY29wZS53ZWVrc1swXS5zZWFzb25faWQsXG4gICAgICAgIHN0YXJ0X3dlZWtfaWQ6ICRzY29wZS53ZWVrc1swXS5pZCxcbiAgICAgICAgcHVibGljOiB0cnVlLFxuICAgICAgICBtYXhfdGVhbXNfcGVyX3VzZXI6ICcnXG4gICAgfTtcblxuICAgICRzY29wZS5jcmVhdGVMZWFndWUgPSBmdW5jdGlvbihsZWFndWUpIHtcbiAgICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKGxlYWd1ZSk7XG4gICAgfTtcblxuICAgICRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gICAgfTtcblxuICAgICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kZXJyb3JbcHJvcGVydHldO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIm5ldyBsZWFndWUgY29udHJvbGxlclwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcblxufTtcblxuTmV3TGVhZ3VlQ29udHJvbGxlci4kaW5qZWN0ID0gWyd3ZWVrcycsICckc2NvcGUnLCAnJGxvZycsICckbW9kYWxJbnN0YW5jZSddO1xubW9kdWxlLmV4cG9ydHMgPSBOZXdMZWFndWVDb250cm9sbGVyO1xuIiwidmFyIFVzZXJSZXNldENvbnRyb2xsZXIgPSBmdW5jdGlvbigkbW9kYWxJbnN0YW5jZSwgJHNjb3BlLCAkbG9nKSB7XG5cbiAgJHNjb3BlLnVzZXJEYXRhID0ge1xuICAgIGVtYWlsOiBcIlwiXG4gIH07XG5cbiAgJHNjb3BlLnJlc2V0ID0gZnVuY3Rpb24gKGVtYWlsKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuY2xvc2UoZW1haWwpO1xuICB9O1xuXG4gICRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2FuY2VsJyk7XG4gIH07XG5cbiAgJHNjb3BlLmhhc0Vycm9yID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgfTtcblxuICAkc2NvcGUuaGFzUHJvcGVydHlFcnJvciA9IGZ1bmN0aW9uKGlucHV0LCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRlcnJvcltwcm9wZXJ0eV07XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcInVzZXIgcmVzZXQgY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuVXNlclJlc2V0Q29udHJvbGxlci4kaW5qZWN0ID0gWyckbW9kYWxJbnN0YW5jZScsICckc2NvcGUnLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBVc2VyUmVzZXRDb250cm9sbGVyO1xuIiwidmFyIFZpZXdMZWFndWVDb250cm9sbGVyID0gZnVuY3Rpb24obGVhZ3VlLCBhbGl2ZVRlYW1zLCBkZWFkVGVhbXMsICRzY29wZSwgJGxvZywgJG1vZGFsLCAkbG9jYXRpb24sIHVzZXJNb2RlbCwgbWVzc2FnZU1vZGVsLCB1c2VyU2VydmljZSwgd2Vla1NlcnZpY2UsIHRlYW1TZXJ2aWNlLCBsZWFndWVTZXJ2aWNlKSB7XG5cbiAgJHNjb3BlLmxlYWd1ZURhdGEgPSBsZWFndWUuZGF0YTtcblxuICAkc2NvcGUuYWxpdmVUZWFtcyA9IGFsaXZlVGVhbXMuZGF0YTtcbiAgJHNjb3BlLmRlYWRUZWFtcyA9IGRlYWRUZWFtcy5kYXRhO1xuXG4gIC8vIHBhZ2luYXRpb25cbiAgJHNjb3BlLmN1cnJlbnRUZWFtUGFnZSA9IDE7XG4gICRzY29wZS50ZWFtc1BlclBhZ2UgPSAxMDA7XG5cbiAgJHNjb3BlLnRlYW1PcHRpb25zID0geyBhY3RpdmU6IHRydWUsIGluYWN0aXZlOiBmYWxzZSB9O1xuXG4gICRzY29wZS50ZWFtUXVlcnkgPSAnJztcblxuICAkc2NvcGUuc2VhcmNoID0gZnVuY3Rpb24oaXRlbSkge1xuICAgIGlmIChpdGVtLm5hbWUuaW5kZXhPZigkc2NvcGUudGVhbVF1ZXJ5LnRvTG93ZXJDYXNlKCkpICE9IC0xIHx8IGl0ZW0uY29hY2hfbmFtZXMuam9pbignLCAnKS5pbmRleE9mKCRzY29wZS50ZWFtUXVlcnkudG9Mb3dlckNhc2UoKSkgIT0gLTEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgJHNjb3BlLnN0YXJ0cyA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgIHZhciBzdGFydHNMYWJlbCA9IChsZWFndWUuc3RhcnRlZCkgPyAnU3RhcnRlZCAnIDogJ1N0YXJ0cyAnO1xuICAgIHJldHVybiBzdGFydHNMYWJlbCArIGxlYWd1ZS5zdGFydF93ZWVrX2Rpc3BsYXk7XG4gIH07XG5cbiAgJHNjb3BlLmlzQ29tbWlzaCA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgIHJldHVybiBsZWFndWUuY29tbWlzaF9pZHMuaW5kZXhPZih1c2VyTW9kZWwudXNlci5pZCkgPiAtMTtcbiAgfTtcblxuICAkc2NvcGUuaGFzVGVhbUluTGVhZ3VlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGZvdW5kID0gZmFsc2U7XG4gICAgdmFyIHRlYW1zID0gXy51bmlvbigkc2NvcGUuYWxpdmVUZWFtcywgJHNjb3BlLmRlYWRUZWFtcyk7XG4gICAgXy5lYWNoKHRlYW1zLCBmdW5jdGlvbih0ZWFtKSB7XG4gICAgICBpZiAodGVhbS5jb2FjaF9pZHMuaW5kZXhPZih1c2VyTW9kZWwudXNlci5pZCkgPiAtMSkge1xuICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZvdW5kO1xuICB9O1xuXG4gICRzY29wZS5oYXNEZWFjdGl2YXRlZFRlYW1zID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGZvdW5kRGVhY3RpdmF0ZWQgPSBmYWxzZTtcbiAgICB2YXIgdGVhbXMgPSBfLnVuaW9uKCRzY29wZS5hbGl2ZVRlYW1zLCAkc2NvcGUuZGVhZFRlYW1zKTtcbiAgICBfLmVhY2godGVhbXMsIGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAgIGlmICh0ZWFtLmFjdGl2ZSA9PSBmYWxzZSkge1xuICAgICAgICBmb3VuZERlYWN0aXZhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZm91bmREZWFjdGl2YXRlZDtcbiAgfTtcblxuICAkc2NvcGUuaXNDb2FjaCA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICByZXR1cm4gdGVhbS5jb2FjaF9pZHMuaW5kZXhPZih1c2VyTW9kZWwudXNlci5pZCkgPiAtMTtcbiAgfTtcblxuICAkc2NvcGUuY29hY2hOYW1lID0gZnVuY3Rpb24odGVhbSkge1xuICAgIHJldHVybiB0ZWFtLmNvYWNoX25hbWVzLmpvaW4oJywgJyk7XG4gIH07XG5cbiAgJHNjb3BlLmhhc05vUGljayA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICByZXR1cm4gdGVhbS5sYXN0X3BpY2tfc3F1YWQubmFtZSA9PSAnTm8gUGljayc7XG4gIH07XG5cbiAgJHNjb3BlLmVkaXRMZWFndWUgPSBmdW5jdGlvbihsZWFndWUpIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2VkaXQvbGVhZ3VlLmVkaXQudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0VkaXRMZWFndWVDb250cm9sbGVyJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgd2Vla3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB3ZWVrU2VydmljZS5nZXRBdmFpbGFibGVXZWVrcyhsZWFndWUuc2Vhc29uX2lkKTtcbiAgICAgICAgfSxcbiAgICAgICAgbGVhZ3VlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gbGVhZ3VlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9KTtcblxuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgICBsZWFndWVTZXJ2aWNlLnVwZGF0ZUxlYWd1ZShsZWFndWUpO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ0VkaXQgbGVhZ3VlIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdFZGl0IGxlYWd1ZSBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcblxuICB9O1xuXG4gICRzY29wZS5vcGVuTGVhZ3VlID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgbGVhZ3VlU2VydmljZS5vcGVuTGVhZ3VlKGxlYWd1ZSlcbiAgfTtcblxuICAkc2NvcGUuY2xvc2VMZWFndWUgPSBmdW5jdGlvbihsZWFndWUpIHtcbiAgICBsZWFndWVTZXJ2aWNlLmNsb3NlTGVhZ3VlKGxlYWd1ZSlcbiAgfTtcblxuICAkc2NvcGUuc2hvd1RlYW0gPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgJGxvY2F0aW9uLnBhdGgoJGxvY2F0aW9uLnBhdGgoKSArICcvdGVhbS8nICsgdGVhbS5pZCk7XG4gIH07XG5cbiAgJHNjb3BlLmNvbnRhY3RDb21taXNoID0gZnVuY3Rpb24obGVhZ3VlKSB7XG5cbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9jb250YWN0L2xlYWd1ZS5jb250YWN0LnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdMZWFndWVDb250YWN0Q29udHJvbGxlcicsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIGxlYWd1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGxlYWd1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihwYXJhbXMpIHtcbiAgICAgIGxlYWd1ZVNlcnZpY2Uuc2VuZENvbW1pc2hNZXNzYWdlKHBhcmFtcy5sZWFndWUsIHBhcmFtcy5tZXNzYWdlKVxuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ0NvbnRhY3QgbGVhZ3VlIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdDb250YWN0IGNvbW1pc2ggY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAkc2NvcGUucmVwb3J0QWJ1c2UgPSBmdW5jdGlvbigpIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3B1YmxpYy9hYnVzZS9hYnVzZS50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnQWJ1c2VDb250cm9sbGVyJ1xuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICB1c2VyU2VydmljZS5jb250YWN0VXMobWVzc2FnZSk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdDb250YWN0IHVzIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgICAgJGxvZy5kZWJ1ZygnY29udGFjdCB1cyBkaXNtaXNzZWQuLi4nKTtcbiAgICB9KTtcblxuICB9O1xuXG4gICRzY29wZS51cGRhdGVNZXNzYWdlID0gZnVuY3Rpb24obGVhZ3VlKSB7XG5cbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9tZXNzYWdlL2xlYWd1ZS5tZXNzYWdlLnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdMZWFndWVNZXNzYWdlQ29udHJvbGxlcicsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIGxlYWd1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGxlYWd1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihwYXJhbXMpIHtcbiAgICAgIGxlYWd1ZVNlcnZpY2UudXBkYXRlTGVhZ3VlTWVzc2FnZShwYXJhbXMubGVhZ3VlLCBwYXJhbXMuc2VuZEVtYWlsKVxuICAgICAgICAudGhlbihmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgICAgJHNjb3BlLmxlYWd1ZURhdGEubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIH0pO1xuXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnTGVhZ3VlIG1lc3NhZ2UgbW9kYWwgZGlzbWlzc2VkLi4uJyk7XG4gICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ1VwZGF0ZSBsZWFndWUgbWVzc2FnZSBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcblxuICB9O1xuXG4gICRzY29wZS5qb2luTGVhZ3VlID0gZnVuY3Rpb24obGVhZ3VlKSB7XG5cbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9qb2luL2xlYWd1ZS5qb2luLnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdMZWFndWVKb2luQ29udHJvbGxlcicsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIGxlYWd1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGxlYWd1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbih0ZWFtKSB7XG4gICAgICB0ZWFtU2VydmljZS5jcmVhdGVUZWFtKHRlYW0pO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ0pvaW4gbGVhZ3VlIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdKb2luIGxlYWd1ZSBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcblxuICB9O1xuXG4gICRzY29wZS5yZXF1ZXN0SW52aXRlID0gZnVuY3Rpb24obGVhZ3VlKSB7XG5cbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9pbnZpdGUvcmVxdWVzdC9sZWFndWUuaW52aXRlLnJlcXVlc3QudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0xlYWd1ZUludml0ZVJlcXVlc3RDb250cm9sbGVyJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgbGVhZ3VlSWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBsZWFndWUuaWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24gKGludml0YXRpb24pIHtcbiAgICAgIGxlYWd1ZVNlcnZpY2UucmVxdWVzdEludml0ZShpbnZpdGF0aW9uKTtcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAkbG9nLmRlYnVnKCdSZXF1ZXN0IGludml0ZSBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnUmVxdWVzdCBpbnZpdGUgY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAkc2NvcGUuaW52aXRlID0gZnVuY3Rpb24obGVhZ3VlSWQpIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2ludml0ZS9sZWFndWUuaW52aXRlLnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdMZWFndWVJbnZpdGVDb250cm9sbGVyJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgbGVhZ3VlSWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBsZWFndWVJZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbiAoaW52aXRhdGlvbikge1xuICAgICAgbGVhZ3VlU2VydmljZS5jcmVhdGVJbnZpdGUoaW52aXRhdGlvbik7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnSW52aXRlIGNvYWNoIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdJbnZpdGUgY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgJHNjb3BlLnJlc2V0U2VhcmNoID0gZnVuY3Rpb24oKSB7XG4gICAgJHNjb3BlLnRlYW1RdWVyeSA9ICcnO1xuICAgICRzY29wZS5jdXJyZW50VGVhbVBhZ2UgPSAxO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJ2aWV3IGxlYWd1ZSBjb250cm9sbGVyXCIpO1xuICB9O1xuICBpbml0KCk7XG5cbn07XG5cblZpZXdMZWFndWVDb250cm9sbGVyLiRpbmplY3QgPSBbJ2xlYWd1ZScsICdhbGl2ZVRlYW1zJywgJ2RlYWRUZWFtcycsICckc2NvcGUnLCAnJGxvZycsICckbW9kYWwnLCAnJGxvY2F0aW9uJywgJ3VzZXJNb2RlbCcsICdtZXNzYWdlTW9kZWwnLCAndXNlclNlcnZpY2UnLCAnd2Vla1NlcnZpY2UnLCAndGVhbVNlcnZpY2UnLCAnbGVhZ3VlU2VydmljZSddO1xubW9kdWxlLmV4cG9ydHMgPSBWaWV3TGVhZ3VlQ29udHJvbGxlcjtcbiIsInZhciBMZWFndWVKb2luQ29udHJvbGxlciA9IGZ1bmN0aW9uKGxlYWd1ZSwgJG1vZGFsSW5zdGFuY2UsICRzY29wZSwgJGxvZykge1xuXG4gICRzY29wZS5sZWFndWVEYXRhID0gbGVhZ3VlO1xuXG4gICRzY29wZS5uZXdUZWFtRGF0YSA9IHtcbiAgICBuYW1lOiAnJyxcbiAgICBzZWFzb25faWQ6IGxlYWd1ZS5zZWFzb25faWQsXG4gICAgbGVhZ3VlX2lkOiBsZWFndWUuaWRcbiAgfTtcblxuICAkc2NvcGUuam9pbkxlYWd1ZSA9IGZ1bmN0aW9uIChuZXdUZWFtKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuY2xvc2UobmV3VGVhbSk7XG4gIH07XG5cbiAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgfTtcblxuICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICB9O1xuXG4gICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwibGVhZ3VlIGpvaW4gY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuTGVhZ3VlSm9pbkNvbnRyb2xsZXIuJGluamVjdCA9IFsnbGVhZ3VlJywgJyRtb2RhbEluc3RhbmNlJywgJyRzY29wZScsICckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IExlYWd1ZUpvaW5Db250cm9sbGVyO1xuIiwidmFyIEVkaXRMZWFndWVDb250cm9sbGVyID0gZnVuY3Rpb24od2Vla3MsIGxlYWd1ZSwgJHNjb3BlLCAkbG9nLCAkbG9jYXRpb24sICRtb2RhbEluc3RhbmNlKSB7XG5cbiAgICAkc2NvcGUud2Vla3MgPSB3ZWVrcy5kYXRhO1xuXG4gICAgJHNjb3BlLmxlYWd1ZURhdGEgPSBhbmd1bGFyLmNvcHkobGVhZ3VlKTtcblxuICAgICRzY29wZS5zaG93TGVhZ3VlID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgbGVhZ3VlLnNlYXNvbl9pZCArICcvbGVhZ3VlLycgKyBsZWFndWUuaWQpO1xuICAgIH07XG5cbiAgICAkc2NvcGUudXBkYXRlTGVhZ3VlID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZShsZWFndWUpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gICAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmhhc0Vycm9yID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICAgIH07XG5cbiAgICAkc2NvcGUuaGFzUHJvcGVydHlFcnJvciA9IGZ1bmN0aW9uKGlucHV0LCBwcm9wZXJ0eSkge1xuICAgICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJlZGl0IGxlYWd1ZSBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5FZGl0TGVhZ3VlQ29udHJvbGxlci4kaW5qZWN0ID0gWyd3ZWVrcycsICdsZWFndWUnLCAnJHNjb3BlJywgJyRsb2cnLCAnJGxvY2F0aW9uJywgJyRtb2RhbEluc3RhbmNlJ107XG5tb2R1bGUuZXhwb3J0cyA9IEVkaXRMZWFndWVDb250cm9sbGVyO1xuIiwidmFyIExlYWd1ZU1lc3NhZ2VDb250cm9sbGVyID0gZnVuY3Rpb24obGVhZ3VlLCAkbW9kYWxJbnN0YW5jZSwgJHNjb3BlLCAkbG9nKSB7XG5cbiAgJHNjb3BlLmxlYWd1ZURhdGEgPSBhbmd1bGFyLmNvcHkobGVhZ3VlKTtcblxuICAkc2NvcGUubWVzc2FnZU9wdGlvbnMgPSB7IHNlbmRFbWFpbDogZmFsc2UgfTtcblxuICAkc2NvcGUudXBkYXRlTWVzc2FnZSA9IGZ1bmN0aW9uKGxlYWd1ZSwgc2VuZEVtYWlsKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuY2xvc2UoeyBsZWFndWU6IGxlYWd1ZSwgc2VuZEVtYWlsOiBzZW5kRW1haWwgfSk7XG4gIH07XG5cbiAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICB9O1xuXG4gICRzY29wZS5oYXNFcnJvciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gIH07XG5cbiAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kZXJyb3JbcHJvcGVydHldO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJsZWFndWUgbWVzc2FnZSBjb250cm9sbGVyXCIpO1xuICB9O1xuICBpbml0KCk7XG59O1xuXG5MZWFndWVNZXNzYWdlQ29udHJvbGxlci4kaW5qZWN0ID0gWydsZWFndWUnLCAnJG1vZGFsSW5zdGFuY2UnLCAnJHNjb3BlJywgJyRsb2cnXTtcbm1vZHVsZS5leHBvcnRzID0gTGVhZ3VlTWVzc2FnZUNvbnRyb2xsZXI7XG4iLCJ2YXIgTGVhZ3VlQ29udGFjdENvbnRyb2xsZXIgPSBmdW5jdGlvbihsZWFndWUsICRtb2RhbEluc3RhbmNlLCAkc2NvcGUsICRsb2cpIHtcblxuICAkc2NvcGUubGVhZ3VlRGF0YSA9IGxlYWd1ZTtcblxuICAkc2NvcGUuY29tbWlzaE1lc3NhZ2UgPSAnJztcblxuICAkc2NvcGUuY29udGFjdENvbW1pc2ggPSBmdW5jdGlvbihsZWFndWUsIG1lc3NhZ2UpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZSh7IGxlYWd1ZTogbGVhZ3VlLCBtZXNzYWdlOiBtZXNzYWdlIH0pO1xuICB9O1xuXG4gICRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgfTtcblxuICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICB9O1xuXG4gICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwibGVhZ3VlIGNvbnRhY3QgY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuTGVhZ3VlQ29udGFjdENvbnRyb2xsZXIuJGluamVjdCA9IFsnbGVhZ3VlJywgJyRtb2RhbEluc3RhbmNlJywgJyRzY29wZScsICckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IExlYWd1ZUNvbnRhY3RDb250cm9sbGVyO1xuIiwidmFyIExlYWd1ZUludml0ZUNvbnRyb2xsZXIgPSBmdW5jdGlvbihsZWFndWVJZCwgJG1vZGFsSW5zdGFuY2UsICRzY29wZSwgJGxvZykge1xuXG4gICRzY29wZS5pbnZpdGF0aW9uID0ge1xuICAgIGxlYWd1ZV9pZDogbGVhZ3VlSWQsXG4gICAgZW1haWw6IFwiXCIsXG4gICAgbWVzc2FnZTogXCJcIlxuICB9O1xuXG4gICRzY29wZS5pbnZpdGUgPSBmdW5jdGlvbiAoaW52aXRhdGlvbikge1xuICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKGludml0YXRpb24pO1xuICB9O1xuXG4gICRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2FuY2VsJyk7XG4gIH07XG5cbiAgJHNjb3BlLmhhc0Vycm9yID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgfTtcblxuICAkc2NvcGUuaGFzUHJvcGVydHlFcnJvciA9IGZ1bmN0aW9uKGlucHV0LCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRlcnJvcltwcm9wZXJ0eV07XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcImxlYWd1ZSBpbnZpdGUgY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuTGVhZ3VlSW52aXRlQ29udHJvbGxlci4kaW5qZWN0ID0gWydsZWFndWVJZCcsICckbW9kYWxJbnN0YW5jZScsICckc2NvcGUnLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBMZWFndWVJbnZpdGVDb250cm9sbGVyO1xuIiwidmFyIEpvaW5MZWFndWVzQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJGxvZywgJGxvY2F0aW9uLCAkbW9kYWwsIHVzZXJNb2RlbCwgc2Vhc29uTW9kZWwsIG1lc3NhZ2VNb2RlbCwgd2Vla1NlcnZpY2UsIGxlYWd1ZVNlcnZpY2UpIHtcblxuICAkc2NvcGUuc2Vhc29uID0gc2Vhc29uTW9kZWwuc2Vhc29uO1xuXG4gICRzY29wZS5sZWFndWVPcHRpb25zID0geyBjbG9zZWQ6IGZhbHNlIH07XG5cbiAgJHNjb3BlLmxlYWd1ZVF1ZXJ5ID0gJyc7XG5cbiAgJHNjb3BlLnB1YmxpY0xlYWd1ZXMgPSBmdW5jdGlvbihzZWFzb25JZCkge1xuICAgICRsb2NhdGlvbi5wYXRoKCcvc2Vhc29uLycgKyBzZWFzb25JZCArICcvbGVhZ3Vlcy9wdWJsaWMnKTtcbiAgfTtcblxuICAkc2NvcGUucHJpdmF0ZUxlYWd1ZXMgPSBmdW5jdGlvbihzZWFzb25JZCkge1xuICAgICRsb2NhdGlvbi5wYXRoKCcvc2Vhc29uLycgKyBzZWFzb25JZCArICcvbGVhZ3Vlcy9wcml2YXRlJyk7XG4gIH07XG5cbiAgJHNjb3BlLnNlYXJjaCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICBpZiAoaXRlbS5uYW1lLmluZGV4T2YoJHNjb3BlLmxlYWd1ZVF1ZXJ5LnRvTG93ZXJDYXNlKCkpICE9IC0xIHx8IGl0ZW0uY29tbWlzaF9uYW1lcy5qb2luKCcsICcpLmluZGV4T2YoJHNjb3BlLmxlYWd1ZVF1ZXJ5LnRvTG93ZXJDYXNlKCkpICE9IC0xKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gICRzY29wZS5yZXNldFNlYXJjaCA9IGZ1bmN0aW9uKCkge1xuICAgICRzY29wZS5sZWFndWVRdWVyeSA9ICcnO1xuICB9O1xuXG4gICRzY29wZS5pc0NvbW1pc2ggPSBmdW5jdGlvbihsZWFndWUpIHtcbiAgICByZXR1cm4gbGVhZ3VlLmNvbW1pc2hfaWRzLmluZGV4T2YodXNlck1vZGVsLnVzZXIuaWQpID4gLTE7XG4gIH07XG5cbiAgJHNjb3BlLmNyZWF0ZUxlYWd1ZSA9IGZ1bmN0aW9uKHNlYXNvbikge1xuXG4gICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbmV3L2xlYWd1ZS5uZXcudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ05ld0xlYWd1ZUNvbnRyb2xsZXInLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICB3ZWVrczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHdlZWtTZXJ2aWNlLmdldEF2YWlsYWJsZVdlZWtzKHNlYXNvbi5pZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihsZWFndWUpIHtcbiAgICAgIGxlYWd1ZVNlcnZpY2UuY3JlYXRlTGVhZ3VlKGxlYWd1ZSk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnQ3JlYXRlIGxlYWd1ZSBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnQ3JlYXRlIGxlYWd1ZSBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcblxuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJqb2luIGxlYWd1ZXMgY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xuXG59O1xuXG5Kb2luTGVhZ3Vlc0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnLCAnJGxvY2F0aW9uJywgJyRtb2RhbCcsICd1c2VyTW9kZWwnLCAnc2Vhc29uTW9kZWwnLCAnbWVzc2FnZU1vZGVsJywgJ3dlZWtTZXJ2aWNlJywgJ2xlYWd1ZVNlcnZpY2UnXTtcbm1vZHVsZS5leHBvcnRzID0gSm9pbkxlYWd1ZXNDb250cm9sbGVyO1xuIiwidmFyIE1hbmFnZWRMZWFndWVzQ29udHJvbGxlciA9IGZ1bmN0aW9uKG1hbmFnZWRMZWFndWVzLCAkc2NvcGUsICRsb2csICRsb2NhdGlvbiwgJG1vZGFsLCBtZXNzYWdlTW9kZWwsIHdlZWtTZXJ2aWNlLCBsZWFndWVTZXJ2aWNlKSB7XG5cbiAgICAkc2NvcGUubWFuYWdlZExlYWd1ZXMgPSBtYW5hZ2VkTGVhZ3Vlcy5kYXRhO1xuXG4gICAgJHNjb3BlLmNyZWF0ZUxlYWd1ZSA9IGZ1bmN0aW9uKHNlYXNvbikge1xuXG4gICAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL25ldy9sZWFndWUubmV3LnRwbC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ05ld0xlYWd1ZUNvbnRyb2xsZXInLFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgd2Vla3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHdlZWtTZXJ2aWNlLmdldEF2YWlsYWJsZVdlZWtzKHNlYXNvbi5pZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH0pO1xuXG4gICAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgICAgICBsZWFndWVTZXJ2aWNlLmNyZWF0ZUxlYWd1ZShsZWFndWUpO1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKCdDcmVhdGUgbGVhZ3VlIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ0NyZWF0ZSBsZWFndWUgY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgICB9KTtcblxuICAgIH07XG5cbiAgICAkc2NvcGUudmlld0xlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgICAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgbGVhZ3VlLnNlYXNvbl9pZCArICcvbGVhZ3VlLycgKyBsZWFndWUuaWQpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuc3RhcnRzID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgICB2YXIgc3RhcnRzTGFiZWwgPSAobGVhZ3VlLnN0YXJ0ZWQpID8gJ1N0YXJ0ZWQgJyA6ICdTdGFydHMgJztcbiAgICAgIHJldHVybiBzdGFydHNMYWJlbCArIGxlYWd1ZS5zdGFydF93ZWVrO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIm1hbmFnZWQgbGVhZ3VlcyBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5NYW5hZ2VkTGVhZ3Vlc0NvbnRyb2xsZXIuJGluamVjdCA9IFsnbWFuYWdlZExlYWd1ZXMnLCAnJHNjb3BlJywgJyRsb2cnLCAnJGxvY2F0aW9uJywgJyRtb2RhbCcsICdtZXNzYWdlTW9kZWwnLCAnd2Vla1NlcnZpY2UnLCAnbGVhZ3VlU2VydmljZSddO1xubW9kdWxlLmV4cG9ydHMgPSBNYW5hZ2VkTGVhZ3Vlc0NvbnRyb2xsZXI7XG5cbiIsInZhciBNeUxlYWd1ZXNDb250cm9sbGVyID0gZnVuY3Rpb24obGVhZ3VlcywgJHNjb3BlLCAkbG9nLCAkbG9jYXRpb24sICRtb2RhbCwgbWVzc2FnZU1vZGVsLCB3ZWVrU2VydmljZSwgbGVhZ3VlU2VydmljZSkge1xuXG4gICRzY29wZS5sZWFndWVzID0gbGVhZ3Vlcy5kYXRhO1xuXG4gICRzY29wZS5jcmVhdGVMZWFndWUgPSBmdW5jdGlvbihzZWFzb24pIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL25ldy9sZWFndWUubmV3LnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdOZXdMZWFndWVDb250cm9sbGVyJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgd2Vla3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB3ZWVrU2VydmljZS5nZXRBdmFpbGFibGVXZWVrcyhzZWFzb24uaWQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9KTtcblxuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgICBsZWFndWVTZXJ2aWNlLmNyZWF0ZUxlYWd1ZShsZWFndWUpO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ0NyZWF0ZSBsZWFndWUgbW9kYWwgZGlzbWlzc2VkLi4uJyk7XG4gICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ0NyZWF0ZSBsZWFndWUgY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAkc2NvcGUuam9pbkxlYWd1ZSA9IGZ1bmN0aW9uKHNlYXNvbikge1xuICAgICRsb2NhdGlvbi5wYXRoKCcvc2Vhc29uLycgKyBzZWFzb24uaWQgKyAnL2xlYWd1ZXMvcHVibGljJyk7XG4gIH07XG5cbiAgJHNjb3BlLnZpZXdMZWFndWUgPSBmdW5jdGlvbihsZWFndWUpIHtcbiAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgbGVhZ3VlLnNlYXNvbl9pZCArICcvbGVhZ3VlLycgKyBsZWFndWUuaWQpO1xuICB9O1xuXG4gICRzY29wZS5zdGFydHMgPSBmdW5jdGlvbihsZWFndWUpIHtcbiAgICB2YXIgc3RhcnRzTGFiZWwgPSAobGVhZ3VlLnN0YXJ0ZWQpID8gJ1N0YXJ0ZWQgJyA6ICdTdGFydHMgJztcbiAgICByZXR1cm4gc3RhcnRzTGFiZWwgKyBsZWFndWUuc3RhcnRfd2VlaztcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwibXkgbGVhZ3VlcyBjb250cm9sbGVyXCIpO1xuICB9O1xuICBpbml0KCk7XG5cbn07XG5cbk15TGVhZ3Vlc0NvbnRyb2xsZXIuJGluamVjdCA9IFsnbGVhZ3VlcycsICckc2NvcGUnLCAnJGxvZycsICckbG9jYXRpb24nLCAnJG1vZGFsJywgJ21lc3NhZ2VNb2RlbCcsICd3ZWVrU2VydmljZScsICdsZWFndWVTZXJ2aWNlJ107XG5tb2R1bGUuZXhwb3J0cyA9IE15TGVhZ3Vlc0NvbnRyb2xsZXI7XG5cbiIsInZhciBWaWV3VGVhbUNvbnRyb2xsZXIgPSBmdW5jdGlvbih0ZWFtLCBsZWFndWVUZWFtcywgcGlja3MsICRzY29wZSwgJGxvZywgJG1vZGFsLCAkbG9jYXRpb24sIG1lc3NhZ2VNb2RlbCwgdXNlck1vZGVsLCB1c2VyU2VydmljZSwgdGVhbVNlcnZpY2UsIGdhbWVTZXJ2aWNlLCBwaWNrU2VydmljZSkge1xuXG4gICRzY29wZS50ZWFtRGF0YSA9IHRlYW0uZGF0YTtcbiAgJHNjb3BlLmxlYWd1ZVRlYW1zID0gbGVhZ3VlVGVhbXMuZGF0YTtcblxuICAkc2NvcGUucGlja3MgPSBwaWNrcy5kYXRhO1xuXG4gICRzY29wZS5jb250YWN0Q29tbWlzaCA9IGZ1bmN0aW9uKHRlYW0pIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2NvbnRhY3QvbGVhZ3VlLmNvbnRhY3QudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0xlYWd1ZUNvbnRhY3RDb250cm9sbGVyJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgbGVhZ3VlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdGVhbS5sZWFndWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgICB0ZWFtU2VydmljZS5zZW5kQ29tbWlzaE1lc3NhZ2UodGVhbSwgcGFyYW1zLm1lc3NhZ2UpXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnQ29udGFjdCBsZWFndWUgbW9kYWwgZGlzbWlzc2VkLi4uJyk7XG4gICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ0NvbnRhY3QgY29tbWlzaCBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcblxuICB9O1xuXG4gICRzY29wZS5yZXBvcnRBYnVzZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHVibGljL2FidXNlL2FidXNlLnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdBYnVzZUNvbnRyb2xsZXInXG4gICAgfSk7XG5cbiAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgIHVzZXJTZXJ2aWNlLmNvbnRhY3RVcyhtZXNzYWdlKTtcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudDogJ0NvbnRhY3QgdXMgY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgICAkbG9nLmRlYnVnKCdjb250YWN0IHVzIGRpc21pc3NlZC4uLicpO1xuICAgIH0pO1xuXG4gIH07XG5cbiAgJHNjb3BlLnVwZGF0ZU1lc3NhZ2UgPSBmdW5jdGlvbih0ZWFtKSB7XG5cbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL3RlYW0vbWVzc2FnZS90ZWFtLm1lc3NhZ2UudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ1RlYW1NZXNzYWdlQ29udHJvbGxlcicsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIHRlYW06IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB0ZWFtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKHBhcmFtcykge1xuICAgICAgdGVhbVNlcnZpY2UudXBkYXRlVGVhbU1lc3NhZ2UocGFyYW1zLnRlYW0sIHBhcmFtcy5zZW5kRW1haWwpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICAkc2NvcGUudGVhbURhdGEubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIH0pO1xuXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnVGVhbSBtZXNzYWdlIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdVcGRhdGUgdGVhbSBtZXNzYWdlIGNhbmNlbGxlZCcgfSwgZmFsc2UpO1xuICAgIH0pO1xuXG4gIH07XG5cbiAgJHNjb3BlLmFjdGl2YXRlID0gZnVuY3Rpb24odGVhbSkge1xuICAgIHRlYW1TZXJ2aWNlLmFjdGl2YXRlVGVhbSh0ZWFtKVxuICAgICAgLnRoZW4oZnVuY3Rpb24oYWN0aXZlKSB7XG4gICAgICAgIHRlYW0uYWN0aXZlID0gYWN0aXZlO1xuICAgICAgfSk7XG4gIH07XG5cbiAgJHNjb3BlLmRlYWN0aXZhdGUgPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgdGVhbVNlcnZpY2UuZGVhY3RpdmF0ZVRlYW0odGVhbSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uKGFjdGl2ZSkge1xuICAgICAgICB0ZWFtLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgICAgIH0pO1xuICB9O1xuXG4gICRzY29wZS5oYXNOb1BpY2sgPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgcmV0dXJuIHRlYW0ubGFzdF9waWNrX3NxdWFkLm5hbWUgPT0gJ05vIFBpY2snO1xuICB9O1xuXG4gICRzY29wZS5pc0NvbW1pc2ggPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgcmV0dXJuIHRlYW0uY29tbWlzaF9pZHMuaW5kZXhPZih1c2VyTW9kZWwudXNlci5pZCkgPiAtMTtcbiAgfTtcblxuICAkc2NvcGUuaXNDb2FjaCA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICByZXR1cm4gdGVhbS5jb2FjaF9pZHMuaW5kZXhPZih1c2VyTW9kZWwudXNlci5pZCkgPiAtMTtcbiAgfTtcblxuICAkc2NvcGUuc2hvd1RlYW0gPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgdmFyIHRlYW1QYXRoID0gJGxvY2F0aW9uLnBhdGgoKS5yZXBsYWNlKC9bXlxcL10qJC8sIHRlYW0uaWQpO1xuICAgICRsb2NhdGlvbi5wYXRoKHRlYW1QYXRoKTtcbiAgfTtcblxuICAkc2NvcGUuc2hvd0xlYWd1ZSA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgdGVhbS5sZWFndWUuc2Vhc29uX2lkICsgJy9sZWFndWUvJyArIHRlYW0ubGVhZ3VlLmlkKTtcbiAgfTtcblxuICAkc2NvcGUuZWRpdFRlYW0gPSBmdW5jdGlvbih0ZWFtKSB7XG5cbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL3RlYW0vZWRpdC90ZWFtLmVkaXQudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0VkaXRUZWFtQ29udHJvbGxlcicsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIHRlYW06IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB0ZWFtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAgIHRlYW1TZXJ2aWNlLnVwZGF0ZVRlYW0odGVhbSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJHNjb3BlLnRlYW1EYXRhID0gdGVhbTtcbiAgICAgICAgfSk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnRWRpdCB0ZWFtIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQ6ICdFZGl0IHRlYW0gY2FuY2VsbGVkJyB9LCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAkc2NvcGUubWFrZVBpY2sgPSBmdW5jdGlvbih0ZWFtLCBwaWNrKSB7XG5cbiAgICBpZiAoISRzY29wZS5pc0NvYWNoKHRlYW0pIHx8IChwaWNrICYmIHBpY2subG9ja2VkKSkgcmV0dXJuO1xuXG4gICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9waWNrL21ha2UvcGljay5tYWtlLnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdQaWNrTWFrZUNvbnRyb2xsZXInLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICBwaWNrczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuICRzY29wZS5waWNrcztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVudEdhbWVzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gZ2FtZVNlcnZpY2UuZ2V0Q3VycmVudEdhbWVzKHRlYW0ubGVhZ3VlLmlkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihwaWNrKSB7XG4gICAgICBwaWNrLnRlYW1faWQgPSAkc2NvcGUudGVhbURhdGEuaWQ7XG4gICAgICBwaWNrU2VydmljZS5jcmVhdGVQaWNrKHBpY2spO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ01ha2UgcGljayBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnUGljayBsb3NlciBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcblxuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJ2aWV3IHRlYW0gY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xuXG59O1xuXG5WaWV3VGVhbUNvbnRyb2xsZXIuJGluamVjdCA9IFsndGVhbScsICdsZWFndWVUZWFtcycsICdwaWNrcycsICckc2NvcGUnLCAnJGxvZycsICckbW9kYWwnLCAnJGxvY2F0aW9uJywgJ21lc3NhZ2VNb2RlbCcsICd1c2VyTW9kZWwnLCAndXNlclNlcnZpY2UnLCAndGVhbVNlcnZpY2UnLCAnZ2FtZVNlcnZpY2UnLCAncGlja1NlcnZpY2UnXTtcbm1vZHVsZS5leHBvcnRzID0gVmlld1RlYW1Db250cm9sbGVyO1xuIiwidmFyIEVkaXRUZWFtQ29udHJvbGxlciA9IGZ1bmN0aW9uKHRlYW0sICRzY29wZSwgJGxvZywgJG1vZGFsSW5zdGFuY2UpIHtcblxuICAgICRzY29wZS50ZWFtRGF0YSA9IGFuZ3VsYXIuY29weSh0ZWFtKTtcblxuICAgICRzY29wZS5lZGl0VGVhbSA9IGZ1bmN0aW9uICh0ZWFtKSB7XG4gICAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZSh0ZWFtKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gICAgfTtcblxuICAgICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kZXJyb3JbcHJvcGVydHldO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcImVkaXQgdGVhbSBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5FZGl0VGVhbUNvbnRyb2xsZXIuJGluamVjdCA9IFsndGVhbScsICckc2NvcGUnLCAnJGxvZycsICckbW9kYWxJbnN0YW5jZSddO1xubW9kdWxlLmV4cG9ydHMgPSBFZGl0VGVhbUNvbnRyb2xsZXI7XG4iLCJ2YXIgVGVhbU1lc3NhZ2VDb250cm9sbGVyID0gZnVuY3Rpb24odGVhbSwgJG1vZGFsSW5zdGFuY2UsICRzY29wZSwgJGxvZykge1xuXG4gICRzY29wZS50ZWFtRGF0YSA9IGFuZ3VsYXIuY29weSh0ZWFtKTtcblxuICAkc2NvcGUubWVzc2FnZU9wdGlvbnMgPSB7IHNlbmRFbWFpbDogZmFsc2UgfTtcblxuICAkc2NvcGUudXBkYXRlTWVzc2FnZSA9IGZ1bmN0aW9uKHRlYW0sIHNlbmRFbWFpbCkge1xuICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKHsgdGVhbTogdGVhbSwgc2VuZEVtYWlsOiBzZW5kRW1haWx9KTtcbiAgfTtcblxuICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2FuY2VsJyk7XG4gIH07XG5cbiAgJHNjb3BlLmhhc0Vycm9yID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgfTtcblxuICAkc2NvcGUuaGFzUHJvcGVydHlFcnJvciA9IGZ1bmN0aW9uKGlucHV0LCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRlcnJvcltwcm9wZXJ0eV07XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcInRlYW0gbWVzc2FnZSBjb250cm9sbGVyXCIpO1xuICB9O1xuICBpbml0KCk7XG59O1xuXG5UZWFtTWVzc2FnZUNvbnRyb2xsZXIuJGluamVjdCA9IFsndGVhbScsICckbW9kYWxJbnN0YW5jZScsICckc2NvcGUnLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBUZWFtTWVzc2FnZUNvbnRyb2xsZXI7XG4iLCJ2YXIgRGVhZFRlYW1zQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJGxvZywgZGVhZFRlYW1zKSB7XG5cbiAgICAkc2NvcGUuZGVhZFRlYW1zID0gZGVhZFRlYW1zLmRhdGE7XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcImRlYWQgdGVhbXMgY29udHJvbGxlclwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcblxufTtcblxuRGVhZFRlYW1zQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZycsICdkZWFkVGVhbXMnXTtcbm1vZHVsZS5leHBvcnRzID0gRGVhZFRlYW1zQ29udHJvbGxlcjtcbiIsInZhciBBbGl2ZVRlYW1zQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJGxvZywgYWxpdmVUZWFtcykge1xuXG4gICAgJHNjb3BlLmFsaXZlVGVhbXMgPSBhbGl2ZVRlYW1zLmRhdGE7XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcImFsaXZlIHRlYW1zIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cbkFsaXZlVGVhbXNDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJywgJ2FsaXZlVGVhbXMnXTtcbm1vZHVsZS5leHBvcnRzID0gQWxpdmVUZWFtc0NvbnRyb2xsZXI7XG4iLCJ2YXIgUGxheUxlYWd1ZXNDb250cm9sbGVyID0gZnVuY3Rpb24obGVhZ3VlcywgJHNjb3BlLCAkbG9nLCAkbG9jYXRpb24sICRtb2RhbCwgdXNlck1vZGVsLCBtZXNzYWdlTW9kZWwsIHdlZWtTZXJ2aWNlLCBsZWFndWVTZXJ2aWNlKSB7XG5cbiAgJHNjb3BlLmxlYWd1ZXMgPSBsZWFndWVzLmRhdGE7XG5cbiAgLy8gcGFnaW5hdGlvblxuICAkc2NvcGUuY3VycmVudExlYWd1ZVBhZ2UgPSAxO1xuICAkc2NvcGUubGVhZ3Vlc1BlclBhZ2UgPSAxMDA7XG5cbiAgJHNjb3BlLmNyZWF0ZUxlYWd1ZSA9IGZ1bmN0aW9uKHNlYXNvbikge1xuXG4gICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbmV3L2xlYWd1ZS5uZXcudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ05ld0xlYWd1ZUNvbnRyb2xsZXInLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICB3ZWVrczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHdlZWtTZXJ2aWNlLmdldEF2YWlsYWJsZVdlZWtzKHNlYXNvbi5pZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihsZWFndWUpIHtcbiAgICAgIGxlYWd1ZVNlcnZpY2UuY3JlYXRlTGVhZ3VlKGxlYWd1ZSk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnQ3JlYXRlIGxlYWd1ZSBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50OiAnQ3JlYXRlIGxlYWd1ZSBjYW5jZWxsZWQnIH0sIGZhbHNlKTtcbiAgICB9KTtcblxuICB9O1xuXG4gICRzY29wZS5qb2luTGVhZ3VlID0gZnVuY3Rpb24oc2Vhc29uKSB7XG4gICAgJGxvY2F0aW9uLnBhdGgoJy9zZWFzb24vJyArIHNlYXNvbi5pZCArICcvbGVhZ3Vlcy9wdWJsaWMnKTtcbiAgfTtcblxuICAkc2NvcGUudmlld0xlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgICRsb2NhdGlvbi5wYXRoKCcvc2Vhc29uLycgKyBsZWFndWUuc2Vhc29uX2lkICsgJy9sZWFndWUvJyArIGxlYWd1ZS5pZCk7XG4gIH07XG5cbiAgJHNjb3BlLnN0YXJ0cyA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgIHZhciBzdGFydHNMYWJlbCA9IChsZWFndWUuc3RhcnRlZCkgPyAnU3RhcnRlZCAnIDogJ1N0YXJ0cyAnO1xuICAgIHJldHVybiBzdGFydHNMYWJlbCArIGxlYWd1ZS5zdGFydF93ZWVrO1xuICB9O1xuXG4gICRzY29wZS5pc0NvbW1pc2ggPSBmdW5jdGlvbihsZWFndWUpIHtcbiAgICByZXR1cm4gbGVhZ3VlLmNvbW1pc2hfaWRzLmluZGV4T2YodXNlck1vZGVsLnVzZXIuaWQpID4gLTE7XG4gIH07XG5cbiAgJHNjb3BlLnNlYXJjaCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICBpZiAoaXRlbS5uYW1lLmluZGV4T2YoJHNjb3BlLnF1ZXJ5LnRvTG93ZXJDYXNlKCkpICE9IC0xIHx8IGl0ZW0uY29tbWlzaF9uYW1lcy5qb2luKCcsICcpLmluZGV4T2YoJHNjb3BlLnF1ZXJ5LnRvTG93ZXJDYXNlKCkpICE9IC0xKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJteSBsZWFndWVzIGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcblxufTtcblxuUGxheUxlYWd1ZXNDb250cm9sbGVyLiRpbmplY3QgPSBbJ2xlYWd1ZXMnLCAnJHNjb3BlJywgJyRsb2cnLCAnJGxvY2F0aW9uJywgJyRtb2RhbCcsICd1c2VyTW9kZWwnLCAnbWVzc2FnZU1vZGVsJywgJ3dlZWtTZXJ2aWNlJywgJ2xlYWd1ZVNlcnZpY2UnXTtcbm1vZHVsZS5leHBvcnRzID0gUGxheUxlYWd1ZXNDb250cm9sbGVyO1xuXG4iLCJ2YXIgUGxheVRlYW1zQ29udHJvbGxlciA9IGZ1bmN0aW9uKHRlYW1zLCAkc2NvcGUsICRsb2csICRsb2NhdGlvbikge1xuXG4gICRzY29wZS50ZWFtcyA9IHRlYW1zLmRhdGE7XG5cbiAgLy8gcGFnaW5hdGlvblxuICAkc2NvcGUuY3VycmVudFRlYW1QYWdlID0gMTtcbiAgJHNjb3BlLnRlYW1zUGVyUGFnZSA9IDEwMDtcblxuICAkc2NvcGUuc2hvd1RlYW0gPSBmdW5jdGlvbihzZWFzb24sIHRlYW0pIHtcbiAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgc2Vhc29uLmlkICsgJy9sZWFndWUvJyArIHRlYW0ubGVhZ3VlLmlkICsgJy90ZWFtLycgKyB0ZWFtLmlkKTtcbiAgfTtcblxuICAkc2NvcGUuaGFzTm9QaWNrID0gZnVuY3Rpb24odGVhbSkge1xuICAgIHJldHVybiB0ZWFtLmxhc3RfcGlja19zcXVhZC5uYW1lID09ICdObyBQaWNrJztcbiAgfTtcblxuICAkc2NvcGUuc2VhcmNoID0gZnVuY3Rpb24oaXRlbSkge1xuICAgIGlmIChpdGVtLm5hbWUuaW5kZXhPZigkc2NvcGUucXVlcnkudG9Mb3dlckNhc2UoKSkgIT0gLTEgfHwgaXRlbS5sZWFndWUubmFtZS5pbmRleE9mKCRzY29wZS5xdWVyeS50b0xvd2VyQ2FzZSgpKSAhPSAtMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwicGxheSB0ZWFtcyBjb250cm9sbGVyXCIpO1xuICB9O1xuICBpbml0KCk7XG5cbn07XG5cblBsYXlUZWFtc0NvbnRyb2xsZXIuJGluamVjdCA9IFsndGVhbXMnLCAnJHNjb3BlJywgJyRsb2cnLCAnJGxvY2F0aW9uJ107XG5tb2R1bGUuZXhwb3J0cyA9IFBsYXlUZWFtc0NvbnRyb2xsZXI7XG4iLCJ2YXIgUGlja01ha2VDb250cm9sbGVyID0gZnVuY3Rpb24ocGlja3MsIGN1cnJlbnRHYW1lcywgJG1vZGFsSW5zdGFuY2UsICRzY29wZSwgJGxvZykge1xuXG4gIHZhciBwaWNrcyA9IHBpY2tzO1xuXG4gICRzY29wZS5nYW1lcyA9IGN1cnJlbnRHYW1lcy5kYXRhO1xuXG4gICRzY29wZS5nZXRTY29yZSA9IGZ1bmN0aW9uKGdhbWUsIGluZGV4KSB7XG4gICAgLy8gd2FybmluZzogbWFnaWMgbnVtYmVycyBhaGVhZFxuICAgIHZhciBzY29yZSA9IChpbmRleCA9PT0gMCkgPyBnYW1lLnZpc2l0aW5nX3NxdWFkX3Njb3JlIDogZ2FtZS5ob21lX3NxdWFkX3Njb3JlO1xuICAgIHJldHVybiBzY29yZTtcbiAgfTtcblxuICAkc2NvcGUubWFrZVBpY2sgPSBmdW5jdGlvbihnYW1lLCBzcXVhZCkge1xuICAgIGlmIChnYW1lLnN0YXJ0ZWQgfHwgJHNjb3BlLmhhc1NxdWFkQmVlblVzZWQoZ2FtZSwgc3F1YWQpKSByZXR1cm47XG4gICAgdmFyIHBpY2sgPSB7XG4gICAgICB3ZWVrX2lkOiBnYW1lLndlZWtfaWQsXG4gICAgICB3ZWVrX3R5cGVfaWQ6IGdhbWUud2Vla190eXBlX2lkLFxuICAgICAgZ2FtZV9pZDogZ2FtZS5pZCxcbiAgICAgIHRlYW1faWQ6ICcnLFxuICAgICAgc3F1YWRfaWQ6IHNxdWFkLmlkXG4gICAgfTtcbiAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZShwaWNrKTtcbiAgfTtcblxuICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICB9O1xuXG4gICRzY29wZS5zdGFydHMgPSBmdW5jdGlvbihnYW1lKSB7XG4gICAgdmFyIHN0YXJ0c0xhYmVsID0gKGdhbWUuc3RhcnRlZCkgPyAnU3RhcnRlZCAnIDogJ1N0YXJ0cyAnO1xuICAgIHJldHVybiBzdGFydHNMYWJlbCArIGdhbWUuc3RhcnRfZGlzcGxheTtcbiAgfTtcblxuICAkc2NvcGUuaGFzU3F1YWRCZWVuVXNlZCA9IGZ1bmN0aW9uKGdhbWUsIHNxdWFkKSB7XG4gICAgdmFyIHNxdWFkSGFzQmVlblVzZWQgPSBmYWxzZTtcbiAgICBfLmVhY2gocGlja3MsIGZ1bmN0aW9uKHBpY2spIHtcbiAgICAgIGlmIChwaWNrLnNxdWFkLmlkID09IHNxdWFkLmlkICYmIHBpY2sud2Vla190eXBlX2lkID09IGdhbWUud2Vla190eXBlX2lkKSB7XG4gICAgICAgIHNxdWFkSGFzQmVlblVzZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzcXVhZEhhc0JlZW5Vc2VkO1xuICB9O1xuXG4gICRzY29wZS5oYXNFcnJvciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gIH07XG5cbiAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kZXJyb3JbcHJvcGVydHldO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJtYWtlIHBpY2sgY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuUGlja01ha2VDb250cm9sbGVyLiRpbmplY3QgPSBbJ3BpY2tzJywgJ2N1cnJlbnRHYW1lcycsICckbW9kYWxJbnN0YW5jZScsICckc2NvcGUnLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBQaWNrTWFrZUNvbnRyb2xsZXI7XG4iLCJ2YXIgQWRtaW5HYW1lc0NvbnRyb2xsZXIgPSBmdW5jdGlvbih3ZWVrLCBnYW1lcywgJHNjb3BlLCAkbW9kYWwsIGdhbWVTZXJ2aWNlLCB3ZWVrU2VydmljZSkge1xuXG4gICRzY29wZS53ZWVrRGF0YSA9IHdlZWsuZGF0YTtcblxuICAkc2NvcGUuZ2FtZXMgPSBnYW1lcy5kYXRhO1xuXG4gICRzY29wZS5lZGl0R2FtZSA9IGZ1bmN0aW9uKGdhbWUpIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvYWRtaW4vZ2FtZXMvZWRpdC9nYW1lcy5lZGl0LnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdHYW1lc0VkaXRDb250cm9sbGVyJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgZ2FtZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGdhbWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihnYW1lKSB7XG4gICAgICBnYW1lU2VydmljZS51cGRhdGVHYW1lKGdhbWUpO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICB9KTtcblxuICB9O1xuXG4gICRzY29wZS5jb21wbGV0ZVdlZWsgPSBmdW5jdGlvbih3ZWVrKSB7XG4gICAgd2Vla1NlcnZpY2UuY29tcGxldGVXZWVrKHdlZWspXG4gICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgJHNjb3BlLndlZWtEYXRhLmNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICB9O1xuICBpbml0KCk7XG59O1xuXG5BZG1pbkdhbWVzQ29udHJvbGxlci4kaW5qZWN0ID0gWyd3ZWVrJywgJ2dhbWVzJywgJyRzY29wZScsICckbW9kYWwnLCAnZ2FtZVNlcnZpY2UnLCAnd2Vla1NlcnZpY2UnXTtcbm1vZHVsZS5leHBvcnRzID0gQWRtaW5HYW1lc0NvbnRyb2xsZXI7XG4iLCJ2YXIgTGVhZ3VlSW52aXRlUmVxdWVzdENvbnRyb2xsZXIgPSBmdW5jdGlvbihsZWFndWVJZCwgJG1vZGFsSW5zdGFuY2UsICRzY29wZSwgJGxvZywgdXNlck1vZGVsKSB7XG5cbiAgJHNjb3BlLmludml0YXRpb24gPSB7XG4gICAgbGVhZ3VlX2lkOiBsZWFndWVJZCxcbiAgICBlbWFpbDogdXNlck1vZGVsLnVzZXIuZW1haWwsXG4gICAgbWVzc2FnZTogXCJcIlxuICB9O1xuXG4gICRzY29wZS5yZXF1ZXN0SW52aXRlID0gZnVuY3Rpb24gKGludml0YXRpb24pIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZShpbnZpdGF0aW9uKTtcbiAgfTtcblxuICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICB9O1xuXG4gICRzY29wZS5oYXNFcnJvciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gIH07XG5cbiAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kZXJyb3JbcHJvcGVydHldO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJsZWFndWUgaW52aXRlIHJlcXVlc3QgY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuTGVhZ3VlSW52aXRlUmVxdWVzdENvbnRyb2xsZXIuJGluamVjdCA9IFsnbGVhZ3VlSWQnLCAnJG1vZGFsSW5zdGFuY2UnLCAnJHNjb3BlJywgJyRsb2cnLCAndXNlck1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IExlYWd1ZUludml0ZVJlcXVlc3RDb250cm9sbGVyO1xuIiwiXG52YXIgUHVibGljTGVhZ3Vlc0NvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2csICRsb2NhdGlvbiwgcHVibGljTGVhZ3Vlcykge1xuXG4gICAgJHNjb3BlLnB1YmxpY0xlYWd1ZXMgPSBwdWJsaWNMZWFndWVzLmRhdGE7XG5cbiAgICAkc2NvcGUuc2hvd0xlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgICAgJGxvY2F0aW9uLnBhdGgoJy9zZWFzb24vJyArIGxlYWd1ZS5zZWFzb25faWQgKyAnL2xlYWd1ZS8nICsgbGVhZ3VlLmlkKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJwdWJsaWMgbGVhZ3VlcyBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5QdWJsaWNMZWFndWVzQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZycsICckbG9jYXRpb24nLCAncHVibGljTGVhZ3VlcyddO1xubW9kdWxlLmV4cG9ydHMgPSBQdWJsaWNMZWFndWVzQ29udHJvbGxlcjtcblxuIiwidmFyIFByaXZhdGVMZWFndWVzQ29udHJvbGxlciA9IGZ1bmN0aW9uKHByaXZhdGVMZWFndWVzLCAkc2NvcGUsICRsb2csICRsb2NhdGlvbikge1xuXG4gICAgJHNjb3BlLnByaXZhdGVMZWFndWVzID0gcHJpdmF0ZUxlYWd1ZXMuZGF0YTtcblxuICAgICRzY29wZS5zaG93TGVhZ3VlID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgbGVhZ3VlLnNlYXNvbl9pZCArICcvbGVhZ3VlLycgKyBsZWFndWUuaWQpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcInByaXZhdGUgbGVhZ3VlcyBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5Qcml2YXRlTGVhZ3Vlc0NvbnRyb2xsZXIuJGluamVjdCA9IFsncHJpdmF0ZUxlYWd1ZXMnLCAnJHNjb3BlJywgJyRsb2cnLCAnJGxvY2F0aW9uJ107XG5tb2R1bGUuZXhwb3J0cyA9IFByaXZhdGVMZWFndWVzQ29udHJvbGxlcjtcblxuIiwidmFyIEdhbWVzRWRpdENvbnRyb2xsZXIgPSBmdW5jdGlvbihnYW1lLCAkc2NvcGUsICRtb2RhbEluc3RhbmNlKSB7XG5cbiAgJHNjb3BlLmdhbWVEYXRhID0gYW5ndWxhci5jb3B5KGdhbWUpO1xuXG4gICRzY29wZS5lZGl0R2FtZSA9IGZ1bmN0aW9uKGdhbWUpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZShnYW1lKTtcbiAgfTtcblxuICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICB9O1xuICBpbml0KCk7XG59O1xuXG5HYW1lc0VkaXRDb250cm9sbGVyLiRpbmplY3QgPSBbJ2dhbWUnLCAnJHNjb3BlJywgJyRtb2RhbEluc3RhbmNlJ107XG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVzRWRpdENvbnRyb2xsZXI7XG4iXX0=
;