require=(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({"app-templates":[function(require,module,exports){
module.exports=require('0VoVTq');
},{}],"0VoVTq":[function(require,module,exports){
angular.module('app.templates', ['common/modules/footer/footer.tpl.html', 'common/modules/header/header.tpl.html', 'common/modules/message/message.tpl.html', 'common/templates/master.tpl.html', 'modules/private/league/contact/league.contact.tpl.html', 'modules/private/league/edit/league.edit.tpl.html', 'modules/private/league/invite/league.invite.tpl.html', 'modules/private/league/invite/request/league.invite.request.tpl.html', 'modules/private/league/join/league.join.tpl.html', 'modules/private/league/league.tpl.html', 'modules/private/league/message/league.message.tpl.html', 'modules/private/league/new/league.new.tpl.html', 'modules/private/league/view/league.view.tpl.html', 'modules/private/leagues/join/leagues.join.tpl.html', 'modules/private/leagues/join/private/leagues.join.private.tpl.html', 'modules/private/leagues/join/public/leagues.join.public.tpl.html', 'modules/private/leagues/leagues.tpl.html', 'modules/private/leagues/manage/leagues.manage.tpl.html', 'modules/private/pick/make/pick.make.tpl.html', 'modules/private/team/edit/team.edit.tpl.html', 'modules/private/team/message/team.message.tpl.html', 'modules/private/team/team.tpl.html', 'modules/private/team/view/team.view.tpl.html', 'modules/private/teams/alive/teams.alive.tpl.html', 'modules/private/teams/dead/teams.dead.tpl.html', 'modules/private/teams/teams.tpl.html', 'modules/private/user/reset/user.reset.tpl.html', 'modules/private/user/user.tpl.html', 'modules/public/faq/faq.tpl.html', 'modules/public/home/home.tpl.html', 'modules/public/register/register.tpl.html', 'modules/public/register/terms/register.terms.tpl.html', 'modules/public/signin/signin.tpl.html']);

angular.module("common/modules/footer/footer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/modules/footer/footer.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-sm-8 col-md-8\">\n" +
    "      <div class=\"links\">\n" +
    "        <a ng-click=\"manageTeams(season)\">My Teams</a>\n" +
    "        &nbsp;|&nbsp;\n" +
    "        <a ng-click=\"manageLeagues(season)\">My Leagues</a>\n" +
    "        &nbsp;|&nbsp;\n" +
    "        <a ng-click=\"joinLeague(season)\">Join League</a>\n" +
    "        &nbsp;|&nbsp;\n" +
    "        <a ng-click=\"createLeague(season)\">Create League</a>\n" +
    "        <br>\n" +
    "        © 2014 <a href=\"http://www.flexdevelopers.com\" target=\"_blank\" style=\"color: #444; text-transform: none;\">Flexdevelopers.com LLC</a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-4 col-md-4\">\n" +
    "      <div class=\"links\" style=\"float: right;\">\n" +
    "        <a href=\"https://www.facebook.com/loseorgohome\" target=\"_blank\"><i class=\"fa fa-facebook-square fa-fw\"></i></a>\n" +
    "        <a href=\"https://twitter.com/loseorgohome\" target=\"_blank\"><i class=\"fa fa-twitter fa-fw\"></i></a>\n" +
    "      </div>\n" +
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
    "    <a class=\"navbar-brand\" ng-click=\"home()\">loseorgohome.com</a>\n" +
    "  </div>\n" +
    "  <div collapse=\"isCollapsed\" class=\"navbar-collapse\">\n" +
    "    <ul ng-show=\"userData.user.loaded\" class=\"nav navbar-nav navbar-right\">\n" +
    "      <li><a ng-click=\"faq()\"><i class=\"fa fa-question-circle fa-fw\"></i> FAQ</a></li>\n" +
    "      <li ng-class=\"{'active': isState(['private.teams.alive', 'private.teams.dead'])}\"><a ng-click=\"manageTeams(season)\"><i class=\"fa fa-user fa-fw\"></i>  My teams</a></li>\n" +
    "      <li ng-class=\"{'active': isState(['private.leagues.manage'])}\"><a ng-click=\"manageLeagues(season)\"><i class=\"fa fa-group fa-fw\"></i>  My leagues</a></li>\n" +
    "      <li class=\"dropdown\">\n" +
    "        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-cog fa-fw settings-icon\" title=\"User Settings\"></i> <b class=\"caret\"></b></a>\n" +
    "        <ul class=\"dropdown-menu\">\n" +
    "          <li><a ng-click=\"joinLeague(season)\">Join a league</a></li>\n" +
    "          <li><a ng-click=\"createLeague(season)\">Create a league</a></li>\n" +
    "          <li class=\"divider\"></li>\n" +
    "          <li><a ng-click=\"userProfile()\">User Profile</a></li>\n" +
    "          <li><a ng-click=\"signout()\">Sign Out</a></li>\n" +
    "        </ul>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "    <ul ng-show=\"!userData.user.loaded\" class=\"nav navbar-nav navbar-right\">\n" +
    "      <li><a ng-click=\"faq()\"><i class=\"fa fa-question-circle fa-fw\"></i> FAQ</a></li>\n" +
    "      <li><a ng-click=\"register()\">Register</a></li>\n" +
    "      <li class=\"dropdown\">\n" +
    "        <a class=\"dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\">Sign In</strong></a>\n" +
    "        <div class=\"dropdown-menu panel panel-default\">\n" +
    "          <div class=\"inline-signin-form panel-body\">\n" +
    "            <form name=\"inlineSigninForm\" role=\"form\" ng-submit=\"signin(credentials); $event.stopPropagation();\" novalidate>\n" +
    "              <div class=\"form-group\">\n" +
    "                <div class=\"input-group\">\n" +
    "                  <span class=\"input-group-addon\"><i class=\"fa fa-envelope fa-fw\"></i></span>\n" +
    "                  <input type=\"email\" class=\"form-control\" style=\"cursor:auto;\" placeholder=\"Email\" ng-model=\"credentials.email\" ng-click=\"$event.stopPropagation();\" required>\n" +
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
    "                <button type=\"submit\" class=\"sign-in-btn btn btn-primary pull-right\">Sign in</button>\n" +
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

angular.module("modules/private/league/contact/league.contact.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/league/contact/league.contact.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Contact the commish</h3>\n" +
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
    "  <h3 class=\"modal-title\">Edit league</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <div class=\"well well-sm\"><strong>Note:</strong> <em>Public leagues allow anyone to join. Private leagues require an invitation.</em></div>\n" +
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
    "          <input id=\"leagueName\" name=\"leagueName\" type=\"text\" class=\"form-control\" ng-model=\"leagueData.name\" ng-maxlength=\"25\" required>\n" +
    "          <span ng-show=\"hasError(leagueForm.leagueName)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"control-label\" for=\"startWeek\">Start week:</label>\n" +
    "          <select id=\"startWeek\" name=\"startWeek\" class=\"form-control\" ng-show=\"!leagueData.started\" ng-model=\"leagueData.start_week_id\" ng-options=\"week.id as week.display for week in weeks\"></select>\n" +
    "          <input id=\"startWeekDisplay\" name=\"startWeekDisplay\" type=\"text\" class=\"form-control\" ng-show=\"leagueData.started\" ng-model=\"leagueData.start_week\" ng-disabled=\"true\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\" ng-class=\"{'has-error': hasError(leagueForm.maxTeams), 'has-feedback': hasError(leagueForm.maxTeams)}\">\n" +
    "          <label class=\"control-label\" for=\"maxTeams\">Maximum number of teams a user can have in this league:\n" +
    "            <small ng-show=\"hasPropertyError(leagueForm.maxTeams, 'required')\">[ Number Required ]</small>\n" +
    "            <small ng-show=\"hasPropertyError(leagueForm.maxTeams, 'min')\">[ 1 - 20 ]</small>\n" +
    "            <small ng-show=\"hasPropertyError(leagueForm.maxTeams, 'max')\">[ 1 - 20 ]</small>\n" +
    "          </label>\n" +
    "          <input id=\"maxTeams\" name=\"maxTeams\" type=\"number\" placeholder=\"Between 1 and 20\" min=\"1\" max=\"20\" class=\"form-control\" ng-model=\"leagueData.max_teams_per_user\" logh-focus required>\n" +
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
    "  <h3 class=\"modal-title\">Invite a friend to join</h3>\n" +
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
    "  <h3 class=\"modal-title\">Join {{leagueData.name}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <form name=\"joinForm\" class=\"join-form form-horizontal\" role=\"form\" novalidate>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(joinForm.teamName), 'has-feedback': hasError(joinForm.teamName)}\">\n" +
    "      <label for=\"teamName\" class=\"col-sm-4 col-md-4 control-label\">Give your team a name:</label>\n" +
    "      <div class=\"col-sm-8 col-md-8\">\n" +
    "        <input id=\"teamName\" name=\"teamName\" type=\"text\" class=\"form-control\" placeholder=\"Enter name...\" ng-model=\"newTeamData.name\" ng-maxlength=\"25\" required>\n" +
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
    "  <h3 class=\"modal-title\">Update league message</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <form name=\"messageForm\" class=\"league-message-form form-horizontal\" role=\"form\" novalidate>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(messageForm.message), 'has-feedback': hasError(messageForm.message)}\">\n" +
    "      <label for=\"message\" class=\"col-sm-2 control-label\">Message:</label>\n" +
    "      <div class=\"col-sm-10\">\n" +
    "        <textarea id=\"message\" name=\"message\" class=\"form-control\" placeholder=\"Enter a message for your league to see or leave it blank.\" rows=\"3\" maxlength=\"200\" ng-model=\"leagueData.message\"></textarea>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(messageForm.message, 'maxlength')\">Too Long</small>\n" +
    "        <span ng-show=\"hasError(messageForm.message)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <div class=\"email-league-message-checkbox\">\n" +
    "    <label><input type=\"checkbox\" ng-model=\"messageOptions.sendEmail\"> email message</label>\n" +
    "  </div>\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "  <button class=\"btn btn-primary\" ng-disabled=\"messageForm.$pristine || messageForm.$invalid\" ng-click=\"updateMessage(leagueData, messageOptions.sendEmail)\">Update</button>\n" +
    "</div>");
}]);

angular.module("modules/private/league/new/league.new.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/league/new/league.new.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">Create a league</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <div class=\"well well-sm\"><strong>Note:</strong> <em>Public leagues allow anyone to join. Private leagues require an invitation.</em></div>\n" +
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
    "          <input id=\"leagueName\" name=\"leagueName\" type=\"text\" class=\"form-control\" ng-model=\"newLeagueData.name\" ng-maxlength=\"25\" required>\n" +
    "          <span ng-show=\"hasError(newLeagueForm.leagueName)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
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
    "          <label class=\"control-label\" for=\"maxTeams\">Maximum number of teams a user can have in this league:\n" +
    "            <small ng-show=\"hasPropertyError(newLeagueForm.maxTeams, 'required')\">[ Number Required ]</small>\n" +
    "            <small ng-show=\"hasPropertyError(newLeagueForm.maxTeams, 'min')\">[ 1 - 20 ]</small>\n" +
    "            <small ng-show=\"hasPropertyError(newLeagueForm.maxTeams, 'max')\">[ 1 - 20 ]</small>\n" +
    "          </label>\n" +
    "          <input id=\"maxTeams\" name=\"maxTeams\" type=\"number\" placeholder=\"Between 1 and 20\" min=\"1\" max=\"20\" class=\"form-control\" ng-model=\"newLeagueData.max_teams_per_user\" logh-focus required>\n" +
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
    "<div class=\"alert alert-success\" ng-show=\"hasWinner(leagueData, aliveTeams)\">This league has a winner!! Congrats all around...</div>\n" +
    "<div class=\"header-row row\">\n" +
    "  <div class=\"col-sm-8 col-md-8\">\n" +
    "    <h3 class=\"league-name\">\n" +
    "      <i class=\"fa fa-times\" title=\"Closed league\" ng-show=\"leagueData.closed\"></i>\n" +
    "      <i class=\"fa fa-lock\" title=\"Private league\" ng-show=\"!leagueData.closed && !leagueData.public\"></i>\n" +
    "      <i class=\"fa fa-unlock\" title=\"Public league\" ng-show=\"!leagueData.closed && leagueData.public\"></i>\n" +
    "      {{leagueData.name}} <small class=\"closed-text\" ng-show=\"leagueData.closed && !leagueData.started\">NO NEW TEAMS</small> <br>\n" +
    "      <small>{{starts(leagueData)}} - {{leagueData.max_teams_per_user}} teams max per user</small>\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-4 col-md-4\">\n" +
    "    <button type=\"button\" class=\"join-btn btn btn-primary btn-sm\" ng-show=\"!hasTeamInLeague() && !leagueData.started\" ng-click=\"joinLeague(leagueData)\">Join</button>\n" +
    "    <button type=\"button\" class=\"request-invite-btn btn btn-primary btn-sm\" ng-show=\"!hasTeamInLeague() && !leagueData.started && !leagueData.public && !isCommish(leagueData)\" ng-click=\"requestInvite(leagueData)\">Request Invite</button>\n" +
    "    <div class=\"btn-group league-actions\" ng-show=\"hasTeamInLeague() || isCommish(leagueData)\" dropdown is-open=\"coach.isopen\">\n" +
    "      <button type=\"button\" class=\"league-actions-btn btn btn-default btn-sm dropdown-toggle\">\n" +
    "        <strong>Actions</strong> <span class=\"caret\"></span>\n" +
    "      </button>\n" +
    "      <ul class=\"dropdown-menu league-actions-menu\" role=\"menu\">\n" +
    "        <li ng-show=\"hasTeamInLeague() && !leagueData.started\"><a ng-click=\"joinLeague(leagueData)\">Join again ({{leagueData.max_teams_per_user}} times max)</a></li>\n" +
    "        <li ng-show=\"hasTeamInLeague() && !leagueData.started && !leagueData.public && !isCommish(leagueData)\"><a ng-click=\"requestInvite(leagueData)\">Request an invite</a></li>\n" +
    "        <li><a ng-click=\"contactCommish(leagueData)\">Contact the commish</a></li>\n" +
    "        <li ng-show=\"isCommish(leagueData)\" class=\"divider\"></li>\n" +
    "        <li ng-show=\"isCommish(leagueData) && !leagueData.started\"><a ng-click=\"invite(leagueData.id)\">Invite a friend to join</a></li>\n" +
    "        <li><a ng-show=\"isCommish(leagueData) && !leagueData.started\" ng-click=\"editLeague(leagueData)\">Edit league</a></li>\n" +
    "        <li><a ng-show=\"isCommish(leagueData)\" ng-click=\"updateMessage(leagueData)\">Update league message</a></li>\n" +
    "        <li ng-show=\"isCommish(leagueData) && !leagueData.started && leagueData.closed\"><a ng-click=\"openLeague(leagueData)\">Open league to new teams</a></li>\n" +
    "        <li ng-show=\"isCommish(leagueData) && !leagueData.started && !leagueData.closed\"><a ng-click=\"closeLeague(leagueData)\">Close league to new teams</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"league-message well well-sm\"><strong>From the commish:</strong> <em>{{message(leagueData)}}</em> <a ng-show=\"isCommish(leagueData)\" ng-click=\"updateMessage(leagueData)\">[ Update ]</a></div>\n" +
    "<h4>Teams ({{leagueData.team_count}})</h4>\n" +
    "<hr>\n" +
    "<div class=\"league-container\" style=\"clear:both;\">\n" +
    "  <div class=\"input-group custom-search-form\">\n" +
    "    <input type=\"text\" class=\"form-control\" placeholder=\"Filter by name...\" ng-model=\"search.name\">\n" +
    "        <span class=\"input-group-btn\">\n" +
    "            <button class=\"btn btn-default\" type=\"button\">\n" +
    "              <span class=\"glyphicon glyphicon-search\"></span>\n" +
    "            </button>\n" +
    "        </span>\n" +
    "  </div>\n" +
    "  <tabset>\n" +
    "    <tab select=\"resetSearch()\">\n" +
    "      <tab-heading>\n" +
    "        <i class=\"fa fa-thumbs-up fa-fw\"></i> Alive Teams\n" +
    "      </tab-heading>\n" +
    "      <div class=\"alive-teams list-group\">\n" +
    "        <a ng-repeat=\"team in aliveTeams | activeTeamFilter:teamOptions | filter:search:strict | offsetFilter:(currentTeamPage-1)*teamsPerPage | limitTo:teamsPerPage\" ng-click=\"showTeam(team)\" class=\"list-group-item\">\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"league-name col-sm-6 col-md-6\"><i class=\"fa fa-trophy fa-fw\" ng-show=\"hasWinner(leagueData, aliveTeams)\"></i><i class=\"fa fa-user fa-fw\" ng-show=\"isCoach(team) && !hasWinner(leagueData, aliveTeams)\"></i> {{team.name}} <span class=\"coach-name\">{{coachName(team)}}</span></div>\n" +
    "            <div class=\"col-sm-6 col-md-6\">\n" +
    "              <span class=\"current-pick\" ng-class=\"{'no-pick': hasNoPick(team)}\" ng-show=\"team.active\">Current Pick: [ {{team.last_pick_squad_name}} ]</span>\n" +
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
    "        <div class=\"alive-teams-pagination\" ng-show=\"(aliveTeams | activeTeamFilter:teamOptions | filter:search:strict).length > 0\">\n" +
    "          <pagination boundary-links=\"true\" max-size=\"4\" total-items=\"(aliveTeams | activeTeamFilter:teamOptions | filter:search:strict).length\" items-per-page=\"teamsPerPage\" ng-model=\"currentTeamPage\" class=\"pagination-md\" previous-text=\"&lsaquo;\" next-text=\"&rsaquo;\" first-text=\"&laquo;\" last-text=\"&raquo;\"></pagination>\n" +
    "        </div>\n" +
    "        <div class=\"inactive-teams-checkbox\" ng-show=\"isCommish(leagueData) && aliveTeams.length > 0\">\n" +
    "          <label><input type=\"checkbox\" ng-model=\"teamOptions.inactive\"> show deactivated teams</label>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div style=\"clear: both;\"></div>\n" +
    "    </tab>\n" +
    "    <tab select=\"resetSearch()\">\n" +
    "      <tab-heading>\n" +
    "        <i class=\"fa fa-thumbs-down fa-fw\"></i> Dead Teams\n" +
    "      </tab-heading>\n" +
    "      <div class=\"dead-teams list-group\">\n" +
    "        <a ng-repeat=\"team in deadTeams | activeTeamFilter:teamOptions | filter:search:strict | offsetFilter:(currentTeamPage-1)*teamsPerPage | limitTo:teamsPerPage\" ng-click=\"showTeam(team)\" class=\"list-group-item\">\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"league-name col-sm-4 col-md-4\"><i class=\"fa fa-user fa-fw\" ng-show=\"isCoach(team)\"></i> {{team.name}} <span class=\"coach-name\">{{coachName(team)}}</span></div>\n" +
    "            <div class=\"col-sm-8 col-md-8\">\n" +
    "              <span class=\"current-pick\" ng-class=\"{'no-pick': hasNoPick(team)}\" ng-show=\"team.active\">Last Pick: [ {{team.last_pick_squad_name}} ]</span>\n" +
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
    "        <div class=\"dead-teams-pagination\" ng-show=\"(deadTeams | activeTeamFilter:teamOptions | filter:search:strict).length > 0\">\n" +
    "          <pagination boundary-links=\"true\" max-size=\"4\" total-items=\"(deadTeams | activeTeamFilter:teamOptions | filter:search:strict).length\" items-per-page=\"teamsPerPage\" ng-model=\"currentTeamPage\" class=\"pagination-md\" previous-text=\"&lsaquo;\" next-text=\"&rsaquo;\" first-text=\"&laquo;\" last-text=\"&raquo;\"></pagination>\n" +
    "        </div>\n" +
    "        <div class=\"inactive-teams-checkbox\" ng-show=\"isCommish(leagueData) && deadTeams.length > 0\">\n" +
    "          <label><input type=\"checkbox\" ng-model=\"teamOptions.inactive\"> show deactivated teams</label>\n" +
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
    "      <button type=\"button\" class=\"create-league-btn btn btn-default btn-sm\" ng-click=\"createLeague(season)\"><i class=\"fa fa-plus fa-fw\"></i> <strong>Create League</strong></button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<hr>\n" +
    "<div class=\"leagues-container\">\n" +
    "    <ul class=\"nav nav-tabs\">\n" +
    "        <li ng-class=\"{'active': isPublic()}\" ng-click=\"resetSearch()\">\n" +
    "            <a ng-click=\"publicLeagues(seasonId)\"><i class=\"fa fa-unlock fa-fw\"></i> Public</a>\n" +
    "        </li>\n" +
    "        <li ng-class=\"{'active': !isPublic()}\" ng-click=\"resetSearch()\">\n" +
    "            <a ng-click=\"privateLeagues(seasonId)\"><i class=\"fa fa-lock fa-fw\"></i> Private</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "    <div class=\"input-group custom-search-form\">\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"Filter by name...\" ng-model=\"search.name\">\n" +
    "        <span class=\"input-group-btn\">\n" +
    "            <button class=\"btn btn-default\" type=\"button\">\n" +
    "                <span class=\"glyphicon glyphicon-search\"></span>\n" +
    "            </button>\n" +
    "        </span>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
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
    "            <div class=\"league-name col-sm-6 col-md-6\" ng-class=\"{'closed': league.closed}\"><i class=\"fa fa-times fa-fw\" title=\"Closed league\" ng-show=\"league.closed && !isCommish(league)\"></i><i class=\"fa fa-user fa-fw\" title=\"My league\" ng-show=\"isCommish(league)\"></i> {{league.name}} <span class=\"team-count\">{{league.max_teams_per_user}} teams max per user</span></div>\n" +
    "            <div class=\"col-sm-6 col-md-6\">\n" +
    "                <span class=\"start-week\">Starts {{league.start_week}}</span>\n" +
    "                <span class=\"badge\">{{league.team_count}} teams</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </a>\n" +
    "</div>\n" +
    "\n" +
    "<!--dynamic pagination-->\n" +
    "<div class=\"private-league-pagination\" ng-show=\"(privateLeagues | openLeagueFilter:leagueOptions | filter:search:strict).length > 0\">\n" +
    "    <pagination boundary-links=\"true\" max-size=\"4\" total-items=\"(privateLeagues | openLeagueFilter:leagueOptions | filter:search:strict).length\" items-per-page=\"leaguesPerPage\" ng-model=\"currentLeaguePage\" class=\"pagination-md\" previous-text=\"&lsaquo;\" next-text=\"&rsaquo;\" first-text=\"&laquo;\" last-text=\"&raquo;\"></pagination>\n" +
    "</div>\n" +
    "<div ng-show=\"privateLeagues.length > 0\" class=\"closed-leagues-checkbox\">\n" +
    "  <label><input type=\"checkbox\" ng-model=\"leagueOptions.closed\"> show closed leagues</label>\n" +
    "</div>\n" +
    "<div style=\"clear: both;\"></div>\n" +
    "\n" +
    "<div class=\"alert alert-info\" ng-show=\"(privateLeagues | openLeagueFilter:leagueOptions | filter:search:strict).length == 0\">\n" +
    "  No leagues found\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("modules/private/leagues/join/public/leagues.join.public.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/leagues/join/public/leagues.join.public.tpl.html",
    "<div class=\"public-leagues list-group\">\n" +
    "    <a ng-repeat=\"league in publicLeagues | openLeagueFilter:leagueOptions | filter:search:strict | offsetFilter:(currentLeaguePage-1)*leaguesPerPage | limitTo:leaguesPerPage\" ng-click=\"showLeague(league)\" class=\"list-group-item\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"league-name col-sm-6 col-md-6\" ng-class=\"{'closed': league.closed}\"><i class=\"fa fa-times fa-fw\" title=\"Closed league\" ng-show=\"league.closed && !isCommish(league)\"></i><i class=\"fa fa-user fa-fw\" title=\"My league\" ng-show=\"isCommish(league)\"></i> {{league.name}} <span class=\"team-count\">{{league.max_teams_per_user}} team max per user</span></div>\n" +
    "            <div class=\"col-sm-6 col-md-6\">\n" +
    "                <span class=\"start-week\">Starts {{league.start_week}}</span>\n" +
    "                <span class=\"badge\">{{league.team_count}} teams</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </a>\n" +
    "</div>\n" +
    "\n" +
    "<!--dynamic pagination-->\n" +
    "<div class=\"public-league-pagination\" ng-show=\"(publicLeagues | openLeagueFilter:leagueOptions | filter:search:strict).length > 0\">\n" +
    "    <pagination boundary-links=\"true\" max-size=\"4\" total-items=\"(publicLeagues | openLeagueFilter:leagueOptions |filter:search:strict).length\" items-per-page=\"leaguesPerPage\" ng-model=\"currentLeaguePage\" class=\"pagination-md\" previous-text=\"&lsaquo;\" next-text=\"&rsaquo;\" first-text=\"&laquo;\" last-text=\"&raquo;\"></pagination>\n" +
    "</div>\n" +
    "<div ng-show=\"publicLeagues.length > 0\" class=\"closed-leagues-checkbox\">\n" +
    "  <label><input type=\"checkbox\" ng-model=\"leagueOptions.closed\"> show closed leagues</label>\n" +
    "</div>\n" +
    "<div style=\"clear: both;\"></div>\n" +
    "\n" +
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
    "    <h3>My leagues</h3>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-3 col-md-3\">\n" +
    "    <div class=\"manage-leagues-btn-group\">\n" +
    "      <button type=\"button\" class=\"create-league-btn btn btn-default btn-sm\" ng-click=\"createLeague(season)\"><i class=\"fa fa-plus fa-fw\"></i> <strong>Create League</strong></button>\n" +
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
    "                <div class=\"league-name col-sm-6 col-md-6\"><i class=\"fa fa-times fa-fw\" title=\"Closed league\" ng-show=\"league.closed\"></i><i class=\"fa fa-user fa-fw\" title=\"My league\" ng-show=\"!league.closed\"></i> {{league.name}} <span class=\"team-count\">{{league.team_count}} teams</span></div>\n" +
    "                <div class=\"col-sm-6 col-md-6\">\n" +
    "                    <span class=\"start-week\">{{starts(league)}}</span>\n" +
    "                    <span class=\"badge\">View</span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--dynamic pagination-->\n" +
    "    <div class=\"manage-league-pagination\">\n" +
    "        <pagination boundary-links=\"true\" max-size=\"4\" total-items=\"managedLeagues.length\" items-per-page=\"leaguesPerPage\" ng-model=\"currentLeaguePage\" class=\"pagination-md\" previous-text=\"&lsaquo;\" next-text=\"&rsaquo;\" first-text=\"&laquo;\" last-text=\"&raquo;\"></pagination>\n" +
    "    </div>\n" +
    "    <div style=\"clear: both;\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<!--if you have no managed leagues-->\n" +
    "<div class=\"alert alert-info\" ng-show=\"managedLeagues.length == 0\">\n" +
    "  No managed leagues. <a class=\"alert-link\" ng-click=\"createLeague(season)\">Create one</a> and invite all your friends.\n" +
    "</div>\n" +
    "");
}]);

angular.module("modules/private/pick/make/pick.make.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/pick/make/pick.make.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h4 class=\"modal-title\">Pick a loser for {{games[0].week_display}}</h4>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <div ng-repeat-start=\"game in games\" class=\"week-games list-group\">\n" +
    "    <h4 ng-class=\"{'invalid-game': game.started}\">{{game.display}} <small>{{starts(game)}}</small></h4>\n" +
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
    "        <input id=\"teamName\" name=\"teamName\" type=\"text\" class=\"form-control\" placeholder=\"Enter a team name\" ng-model=\"teamData.name\" ng-maxlength=\"25\" required>\n" +
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
    "  <h3 class=\"modal-title\">Update team message</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <form name=\"messageForm\" class=\"team-message-form form-horizontal\" role=\"form\" novalidate>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': hasError(messageForm.message), 'has-feedback': hasError(messageForm.message)}\">\n" +
    "      <label for=\"message\" class=\"col-sm-2 control-label\">Message:</label>\n" +
    "      <div class=\"col-sm-10\">\n" +
    "        <textarea id=\"message\" name=\"message\" class=\"form-control\" placeholder=\"Enter a message to put on the team's wall...\" rows=\"3\" maxlength=\"200\" ng-model=\"teamData.message\"></textarea>\n" +
    "        <small class=\"input-error\" ng-show=\"hasPropertyError(messageForm.message, 'maxlength')\">Too Long</small>\n" +
    "        <span ng-show=\"hasError(messageForm.message)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <div class=\"email-team-message-checkbox\">\n" +
    "    <label><input type=\"checkbox\" ng-model=\"messageOptions.sendEmail\"> email message</label>\n" +
    "  </div>\n" +
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
    "<div class=\"alert alert-danger\" ng-show=\"!teamData.active\">This team has been deactivated by the commish. <a class=\"alert-link\" ng-click=\"contactCommish(teamData)\">Contact the commish</a> if you have questions.</div>\n" +
    "<div class=\"header-row row\">\n" +
    "  <div class=\"col-sm-8 col-md-8\">\n" +
    "    <h3 class=\"team-name\">\n" +
    "      <i class=\"fa fa-thumbs-up fa-fw\" title=\"Alive\" ng-show=\"teamData.alive\"></i>\n" +
    "      <i class=\"fa fa-thumbs-down fa-fw\" title=\"Dead\" ng-show=\"!teamData.alive\"></i>\n" +
    "      {{teamData.name}} <br>\n" +
    "      <small><a ng-click=\"showLeague(teamData)\">{{teamData.league.name}} league</a></small>\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-4 col-md-4\">\n" +
    "    <button type=\"button\" class=\"make-pick-btn btn btn-primary btn-sm\" ng-show=\"isCoach(teamData)\" ng-click=\"makePick(teamData)\">Make Pick</button>\n" +
    "    <div class=\"btn-group team-actions\" ng-show=\"isCoach(teamData) || isCommish(teamData)\" dropdown is-open=\"coach.isopen\">\n" +
    "      <button type=\"button\" class=\"actions-btn btn btn-default btn-sm dropdown-toggle\">\n" +
    "        <strong>Actions</strong> <span class=\"caret\"></span>\n" +
    "      </button>\n" +
    "      <ul class=\"dropdown-menu team-actions-menu\" role=\"menu\">\n" +
    "        <li><a ng-click=\"editTeam(teamData)\">Edit team</a></li>\n" +
    "        <li><a ng-click=\"contactCommish(teamData)\">Contact the commish</a></li>\n" +
    "        <li ng-show=\"isCommish(teamData)\" class=\"divider\"></li>\n" +
    "        <li><a ng-show=\"isCommish(teamData)\" ng-click=\"updateMessage(teamData)\">Update team message</a></li>\n" +
    "        <li ng-show=\"isCommish(teamData) && !teamData.active\"><a ng-click=\"activate(teamData)\">Reactivate this team</a></li>\n" +
    "        <li ng-show=\"isCommish(teamData) && teamData.active\"><a ng-click=\"deactivate(teamData)\">Deactivate this team</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"team-message well well-sm\"><strong>From the commish:</strong> <em>{{message(teamData)}}</em> <a ng-show=\"isCommish(teamData)\" ng-click=\"updateMessage(teamData)\">[ Update ]</a></div>\n" +
    "<h4>Picks</h4>\n" +
    "<hr>\n" +
    "<div class=\"team-container\" style=\"clear:both;\">\n" +
    "  <tabset>\n" +
    "    <tab>\n" +
    "      <tab-heading>Regular Season</tab-heading>\n" +
    "      <div class=\"regular-picks list-group\">\n" +
    "        <a ng-repeat=\"pick in regularPicks\" class=\"list-group-item\" ng-click=\"makePick(teamData)\">\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"week-name col-sm-8 col-md-8\">\n" +
    "              <i class=\"fa fa-lock fa-fw\" ng-show=\"pick.locked && pick.correct == null\"></i>\n" +
    "              <i class=\"fa fa-unlock fa-fw\" ng-show=\"!pick.locked && pick.correct == null\"></i>\n" +
    "              <i class=\"fa fa-times fa-fw\" ng-show=\"pick.correct === false\"></i>\n" +
    "              <i class=\"fa fa-check fa-fw\" ng-show=\"pick.correct === true\"></i> [ {{pick.squad_name}} ] <span class=\"game\">{{pick.game_display}}</span>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4 col-md-4\">\n" +
    "              <span class=\"week-loser\">{{pick.week_display}}</span>\n" +
    "              <span class=\"badge\" ng-show=\"teamData.alive && !pick.locked && isCoach(teamData)\">Change</span>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </a>\n" +
    "      </div>\n" +
    "      <div class=\"alert alert-info\" ng-show=\"regularPicks.length == 0\">\n" +
    "        No regular season picks\n" +
    "      </div>\n" +
    "    </tab>\n" +
    "    <tab>\n" +
    "      <tab-heading>Playoffs</tab-heading>\n" +
    "      <div class=\"playoff-picks list-group\">\n" +
    "        <a ng-repeat=\"pick in playoffPicks\" class=\"list-group-item\" ng-click=\"makePick(teamData)\">\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"week-name col-sm-8 col-md-8\">\n" +
    "              <i class=\"fa fa-lock fa-fw\" ng-show=\"pick.locked && pick.correct == null\"></i>\n" +
    "              <i class=\"fa fa-unlock fa-fw\" ng-show=\"!pick.locked && pick.correct == null\"></i>\n" +
    "              <i class=\"fa fa-times fa-fw\" ng-show=\"pick.correct === false\"></i>\n" +
    "              <i class=\"fa fa-check fa-fw\" ng-show=\"pick.correct === true\"></i> [ {{pick.squad_name}} ] <span class=\"game\">{{pick.game_display}}</span>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4 col-md-4\">\n" +
    "              <span class=\"week-loser\">{{pick.week_display}}</span>\n" +
    "              <span class=\"badge\" ng-show=\"teamData.alive && !pick.locked && isCoach(teamData)\">Change</span>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </a>\n" +
    "      </div>\n" +
    "      <div class=\"alert alert-info\" ng-show=\"playoffPicks.length == 0\">\n" +
    "        No playoff picks\n" +
    "      </div>\n" +
    "    </tab>\n" +
    "  </tabset>\n" +
    "</div>\n" +
    "");
}]);

angular.module("modules/private/teams/alive/teams.alive.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/private/teams/alive/teams.alive.tpl.html",
    "<div class=\"alive-teams list-group\">\n" +
    "    <a ng-repeat=\"team in aliveTeams | filter:search:strict | offsetFilter:(currentTeamPage-1)*teamsPerPage | limitTo:teamsPerPage\" ng-click=\"showTeam(seasonId, team)\" class=\"list-group-item\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"team-name col-sm-6 col-md-6\"><i class=\"fa fa-user fa-fw\"></i> {{team.name}} <span class=\"team-league\">{{team.league.name}}</span></div>\n" +
    "            <div class=\"col-sm-6 col-md-6\">\n" +
    "                <span class=\"current-pick\" ng-class=\"{'no-pick': hasNoPick(team)}\" ng-show=\"team.active\">Current Pick: [ {{team.last_pick_squad_name}} ]</span>\n" +
    "                <span class=\"inactive-team\" ng-show=\"!team.active\">Contact the commish to reactivate team</span>\n" +
    "                <span class=\"badge\">View</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </a>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"alive-teams-pagination\" ng-show=\"(aliveTeams | filter:search:strict).length > 0\">\n" +
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
    "            <div class=\"team-name col-sm-6 col-md-6\"><i class=\"fa fa-user fa-fw\"></i> {{team.name}} <span class=\"team-league\">{{team.league.name}}</span></div>\n" +
    "            <div class=\"col-sm-6 col-md-6\">\n" +
    "                <span class=\"current-pick\" ng-class=\"{'no-pick': hasNoPick(team)}\" ng-show=\"team.active\">Last Pick: [ {{team.last_pick_squad_name}} ]</span>\n" +
    "                <span class=\"inactive-team\" ng-show=\"!team.active\">Deactivated by the commish</span>\n" +
    "                <span class=\"badge\">View</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </a>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"dead-teams-pagination\" ng-show=\"(deadTeams | filter:search:strict).length > 0\">\n" +
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
    "    <h3>My teams</h3>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-3 col-md-3\">\n" +
    "    <div class=\"teams-btn-group\">\n" +
    "      <button type=\"button\" class=\"create-team-btn btn btn-default btn-sm\" ng-click=\"createTeam(seasonId)\"><strong>Join League</strong></button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<hr>\n" +
    "<div class=\"teams-container\">\n" +
    "  <ul class=\"nav nav-tabs\">\n" +
    "    <li ng-class=\"{'active': isAliveState()}\">\n" +
    "      <a ng-click=\"aliveTeams(seasonId)\"><i class=\"fa fa-thumbs-up fa-fw\"></i> Alive Teams</a>\n" +
    "    </li>\n" +
    "    <li ng-class=\"{'active': !isAliveState()}\">\n" +
    "      <a ng-click=\"deadTeams(seasonId)\"><i class=\"fa fa-thumbs-down fa-fw\"></i> Dead Teams</a>\n" +
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
    "  <h3 class=\"modal-title\">Reset password</h3>\n" +
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
    "                          <small ng-show=\"hasPropertyError(editUserForm.password, 'required')\">[ Required ]</small>\n" +
    "                          <small ng-show=\"hasPropertyError(editUserForm.password, 'minlength')\">[ 6 - 15 Characters ]</small>\n" +
    "                          <small ng-show=\"hasPropertyError(editUserForm.password, 'maxlength')\">[ 6 - 15 Characters ]</small>\n" +
    "                      </label>\n" +
    "                      <input id=\"password\" name=\"password\" type=\"password\" class=\"form-control\" ng-model=\"userData.user.password\" ng-minlength=\"6\" ng-maxlength=\"15\">\n" +
    "                      <span ng-show=\"hasError(editUserForm.password)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "                  </div>\n" +
    "              </div>\n" +
    "              <div class=\"col-sm-6 col-md-6\">\n" +
    "                  <div class=\"form-group\" ng-class=\"{'has-error': hasError(editUserForm.confirmPassword), 'has-feedback': hasError(editUserForm.confirmPassword)}\">\n" +
    "                      <label class=\"control-label\" for=\"confirmPassword\">Confirm New Password\n" +
    "                          <small ng-show=\"hasPropertyError(editUserForm.confirmPassword, 'match')\">[ Doesn't Match ]</small>\n" +
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

angular.module("modules/public/faq/faq.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/public/faq/faq.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"close()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "  <h3 class=\"modal-title\">FAQ</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <p>how to play</p>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"close()\">Close</button>\n" +
    "</div>");
}]);

angular.module("modules/public/home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/public/home/home.tpl.html",
    "\n" +
    "    <div class=\"home-content-container\">\n" +
    "        <h1 class=\"header-jumbo\">Pick One Loser.</h1>\n" +
    "        <p class=\"lead\">Each week pick only one loser. Get it right and move on to the next week. Get it wrong and you're out.</p>\n" +
    "        <div>\n" +
    "          <a class=\"cta btn btn-primary btn-lg\" role=\"button\" ng-click=\"joinLeague(season)\">Join League</a>\n" +
    "        </div>\n" +
    "        <div>\n" +
    "          <a class=\"cta btn btn-primary btn-lg\" role=\"button\" ng-click=\"createLeague(season)\">Create League</a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--<div ui-view=\"content\"></div>-->\n" +
    "\n" +
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
    "    <div class=\"nickname row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"control-label\" for=\"nickname\">Nickname</label>\n" +
    "          <input id=\"nickname\" name=\"nickname\" type=\"text\" class=\"form-control\" ng-model=\"newUserData.nickname\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-12 col-md-12\">\n" +
    "        <div class=\"form-group\" ng-class=\"{'has-error': hasError(newUserForm.email), 'has-feedback': hasError(newUserForm.email)}\">\n" +
    "          <label class=\"control-label\" for=\"email\">Email\n" +
    "            <small ng-show=\"hasPropertyError(newUserForm.email, 'required')\">[ Required ]</small>\n" +
    "            <small ng-show=\"hasPropertyError(newUserForm.email, 'email')\">[ Invalid Email ]</small>\n" +
    "          </label>\n" +
    "          <input id=\"email\" name=\"email\" type=\"email\" class=\"form-control\" ng-model=\"newUserData.email\" placeholder=\"Your email will NOT be shared with anybody...\" logh-focus required>\n" +
    "          <span ng-show=\"hasError(newUserForm.email)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-6 col-md-6\">\n" +
    "        <div class=\"form-group\" ng-class=\"{'has-error': hasError(newUserForm.password), 'has-feedback': hasError(newUserForm.password)}\">\n" +
    "          <label class=\"control-label\" for=\"password\">Password\n" +
    "            <small ng-show=\"hasPropertyError(newUserForm.password, 'required')\">[ Required ]</small>\n" +
    "            <small ng-show=\"hasPropertyError(newUserForm.password, 'minlength')\">[ 6 - 15 Characters ]</small>\n" +
    "            <small ng-show=\"hasPropertyError(newUserForm.password, 'maxlength')\">[ 6 - 15 Characters ]</small>\n" +
    "          </label>\n" +
    "          <input id=\"password\" name=\"password\" type=\"password\" class=\"form-control\" ng-model=\"newUserData.password\" ng-minlength=\"6\" ng-maxlength=\"15\" required>\n" +
    "          <span ng-show=\"hasError(newUserForm.password)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"col-sm-6 col-md-6\">\n" +
    "        <div class=\"form-group\" ng-class=\"{'has-error': hasError(newUserForm.confirmPassword), 'has-feedback': hasError(newUserForm.confirmPassword)}\">\n" +
    "          <label class=\"control-label\" for=\"confirmPassword\">Confirm Password\n" +
    "            <small ng-show=\"hasPropertyError(newUserForm.confirmPassword, 'match')\">[ Doesn't Match ]</small>\n" +
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
    "  <p>a bunch of stuff</p>\n" +
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
    "        <button type=\"submit\" class=\"sign-in-btn btn btn-primary pull-right\">Sign in</button>\n" +
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
    // team
    require('./modules/private/team').name,
    require('./modules/private/team/view').name,
    require('./modules/private/team/edit').name,
    require('./modules/private/team/message').name,
    // teams
    require('./modules/private/teams').name,
    require('./modules/private/teams/alive').name,
    require('./modules/private/teams/dead').name,
    // pick
    require('./modules/private/pick/make').name,

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
            if (rejection.status === 401) {
                var message = rejection.data.message;
                var path = $location.path();
                $timeout(function () {
                  userModel.resetUser();
                  if ($location.path() == '/signin') {
                    messageModel.setMessage(message, false);
                  } else {
                    messageModel.setMessage(message, true);
                    $location.path('/signin').search({ redirect: encodeURIComponent(path) });
                  }
                }, 200);
            }
            return $q.reject(rejection);
        }
    };
});

loghApp.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
});










},{"app-templates":"0VoVTq","./modules/public/home":2,"./modules/public/faq":3,"./modules/public/signin":4,"./modules/public/register":5,"./modules/public/register/terms":6,"./modules/private/user":7,"./modules/private/user/reset":8,"./modules/private/league":9,"./modules/private/league/new":10,"./modules/private/league/view":11,"./modules/private/league/edit":12,"./modules/private/league/contact":13,"./modules/private/league/message":14,"./modules/private/league/join":15,"./modules/private/league/invite":16,"./modules/private/league/invite/request":17,"./modules/private/leagues":18,"./modules/private/leagues/join":19,"./modules/private/leagues/join/public":20,"./modules/private/leagues/join/private":21,"./modules/private/leagues/manage":22,"./modules/private/team":23,"./modules/private/team/view":24,"./modules/private/team/edit":25,"./modules/private/team/message":26,"./modules/private/teams":27,"./modules/private/teams/alive":28,"./modules/private/teams/dead":29,"./modules/private/pick/make":30,"./common/modules/header":31,"./common/modules/message":32,"./common/modules/footer":33,"./common/aspects":34,"./common/models":35,"./common/api":36,"./common/command":37,"./common/service/application":38,"./common/directives/focus":39,"./common/directives/match":40,"./common/directives/requiredPattern":41,"./common/filters":42}],34:[function(require,module,exports){

require("./TestAspect");

module.exports = angular.module('loghApp.aspects', [])
    .config( function() {

       //TODO aspect config if necessary
    }
);
},{"./TestAspect":43}],35:[function(require,module,exports){
/**
 * Define the application models
 */
module.exports = angular.module('loghApp.models', [])
    //models
    .service('userModel', require('./UserModel'))
    .service('seasonModel', require('./SeasonModel'))
    .service('messageModel', require('./MessageModel'))
;
},{"./UserModel":44,"./SeasonModel":45,"./MessageModel":46}],36:[function(require,module,exports){
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

},{"./ApiConfig":47,"./UserService":48,"./LeagueService":49,"./TeamService":50,"./PickService":51,"./SeasonService":52,"./WeekService":53,"./GameService":54}],37:[function(require,module,exports){
// session commands
require('./session/SigninCommand');
require('./session/SignoutCommand');

// user commands
require('./user/GetCurrentUserCommand');
require('./user/UpdateUserCommand');

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
        $commangularProvider.mapTo('UpdateUserEvent').asSequence()
            .add('UpdateUserCommand');

    }
);


},{"./session/SigninCommand":55,"./session/SignoutCommand":56,"./user/GetCurrentUserCommand":57,"./user/UpdateUserCommand":58}],42:[function(require,module,exports){
/**
 * Define the application filters
 */
module.exports = angular.module('loghApp.filters', [])
    //filters
    .filter('offsetFilter', require('./OffsetFilter'))
    .filter('activeTeamFilter', require('./ActiveTeamFilter'))
    .filter('openLeagueFilter', require('./OpenLeagueFilter'))
    .filter('timeFilter', require('./TimeFilter'))
;

},{"./OffsetFilter":59,"./ActiveTeamFilter":60,"./OpenLeagueFilter":61,"./TimeFilter":62}],2:[function(require,module,exports){

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
},{"./HomeController":63}],3:[function(require,module,exports){
module.exports = angular.module('loghApp.faq', [])
  .controller('FaqController', require('./FaqController'));

},{"./FaqController":64}],4:[function(require,module,exports){
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

},{"./SigninController":65}],5:[function(require,module,exports){
module.exports = angular.module('loghApp.register', [])
  .controller('RegisterController', require('./RegisterController'));

},{"./RegisterController":66}],7:[function(require,module,exports){
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

},{"./UserController":67}],9:[function(require,module,exports){
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

},{"./LeagueController":68}],18:[function(require,module,exports){
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


},{"./LeaguesController":69}],23:[function(require,module,exports){
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

},{"./TeamController":70}],27:[function(require,module,exports){
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


},{"./TeamsController":71}],31:[function(require,module,exports){
module.exports = angular.module('loghApp.header', [])
    .controller('HeaderController', require('./HeaderController'))
},{"./HeaderController":72}],32:[function(require,module,exports){
module.exports = angular.module('loghApp.message', [])
    .controller('MessageController', require('./MessageController'));
},{"./MessageController":73}],33:[function(require,module,exports){
module.exports = angular.module('loghApp.footer', [])
  .controller('FooterController', require('./FooterController'))
},{"./FooterController":74}],38:[function(require,module,exports){
/**
 * Define the application service
 */
module.exports = angular.module('logh.application', [])
    .service('applicationService', require('./ApplicationService'));
},{"./ApplicationService":75}],39:[function(require,module,exports){
//application directives
module.exports = angular.module('loghApp.directives.focus',[])
    .directive('loghFocus', require('./FocusDirective'))
;

},{"./FocusDirective":76}],40:[function(require,module,exports){
//application directives
module.exports = angular.module('loghApp.directives.match',[])
    .directive('match', require('./MatchDirective'))
;

},{"./MatchDirective":77}],41:[function(require,module,exports){
//application directives
module.exports = angular.module('loghApp.directives.requiredPattern',[])
    .directive('rpattern', require('./RequiredPatternDirective'))
;

},{"./RequiredPatternDirective":78}],6:[function(require,module,exports){
module.exports = angular.module('loghApp.register.terms', [])
  .controller('RegisterTermsController', require('./RegisterTermsController'));

},{"./RegisterTermsController":79}],8:[function(require,module,exports){
module.exports = angular.module('loghApp.user.reset', [])
  .controller('UserResetController', require('./UserResetController'));

},{"./UserResetController":80}],10:[function(require,module,exports){
module.exports = angular.module('loghApp.league.new', [])
  .controller('NewLeagueController', require('./NewLeagueController'));

},{"./NewLeagueController":81}],11:[function(require,module,exports){
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

},{"./ViewLeagueController":82}],12:[function(require,module,exports){
module.exports = angular.module('loghApp.league.edit', [])
  .controller('EditLeagueController', require('./EditLeagueController'));

},{"./EditLeagueController":83}],13:[function(require,module,exports){
module.exports = angular.module('loghApp.league.contact', [])
  .controller('LeagueContactController', require('./LeagueContactController'));

},{"./LeagueContactController":84}],14:[function(require,module,exports){
module.exports = angular.module('loghApp.league.message', [])
  .controller('LeagueMessageController', require('./LeagueMessageController'));

},{"./LeagueMessageController":85}],15:[function(require,module,exports){
module.exports = angular.module('loghApp.league.join', [])
  .controller('LeagueJoinController', require('./LeagueJoinController'));

},{"./LeagueJoinController":86}],16:[function(require,module,exports){
module.exports = angular.module('loghApp.league.invite', [])
  .controller('LeagueInviteController', require('./LeagueInviteController'));

},{"./LeagueInviteController":87}],19:[function(require,module,exports){
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


},{"./JoinLeaguesController":88}],22:[function(require,module,exports){
module.exports = angular.module('loghApp.leagues.manage', [])
  .controller('ManageLeaguesController', require('./ManageLeaguesController'))
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('private.leagues.manage', {
        url: '',
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


},{"./ManageLeaguesController":89}],24:[function(require,module,exports){
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
          team: function(teamService, $stateParams) {
            return teamService.getTeam($stateParams.leagueId, $stateParams.teamId);
          },
          regularPicks: function(team, pickService) {
            return pickService.getRegularPicks({ teamId: team.data.id });
          },
          playoffPicks: function(team, pickService) {
            return pickService.getPlayoffPicks({ teamId: team.data.id });
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });

},{"./ViewTeamController":90}],25:[function(require,module,exports){
module.exports = angular.module('loghApp.team.edit', [])
  .controller('EditTeamController', require('./EditTeamController'));

},{"./EditTeamController":91}],26:[function(require,module,exports){
module.exports = angular.module('loghApp.team.message', [])
  .controller('TeamMessageController', require('./TeamMessageController'));

},{"./TeamMessageController":92}],28:[function(require,module,exports){
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


},{"./AliveTeamsController":93}],29:[function(require,module,exports){
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


},{"./DeadTeamsController":94}],30:[function(require,module,exports){
module.exports = angular.module('loghApp.pick.make', [])
  .controller('PickMakeController', require('./PickMakeController'));

},{"./PickMakeController":95}],17:[function(require,module,exports){
module.exports = angular.module('loghApp.league.invite.request', [])
  .controller('LeagueInviteRequestController', require('./LeagueInviteRequestController'));

},{"./LeagueInviteRequestController":96}],20:[function(require,module,exports){
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


},{"./PublicLeaguesController":97}],21:[function(require,module,exports){
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


},{"./PrivateLeaguesController":98}],43:[function(require,module,exports){

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
},{}],44:[function(require,module,exports){

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
},{}],45:[function(require,module,exports){
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
},{}],46:[function(require,module,exports){

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

},{}],47:[function(require,module,exports){
/*
 *  Global config for remote services
 */

var ApiConfig =  {
    baseURL: '/api/'
};

module.exports = ApiConfig;

},{}],48:[function(require,module,exports){
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
                  $location.path('/season/' + seasonModel.season.id + '/teams/alive');
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
                } else  {
                  $location.path('/season/' + seasonModel.season.id + '/teams/alive');
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

};

UserService.$inject = ['$http', '$log', '$state', '$location', '$window', '$timeout', 'apiConfig', 'messageModel', 'userModel', 'seasonModel'];
module.exports = UserService;
},{}],49:[function(require,module,exports){
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
},{}],50:[function(require,module,exports){
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
},{}],51:[function(require,module,exports){
var PickService = function($http, $log, $state, apiConfig, messageModel) {

  this.getRegularPicks = function(params) {
    var apiUrl = apiConfig.baseURL + "teams/" + params.teamId + "/picks/regular";

    var promise = $http.get(apiUrl)
      .success(function(data) {
        $log.debug("PickService: getRegularPicks success");
        return data;
      })
      .error(function(data) {
        $log.debug("PickService: getRegularPicks failed");
        return data;
      });

    return promise;
  };

  this.getPlayoffPicks = function(params) {
    var apiUrl = apiConfig.baseURL + "teams/" + params.teamId + "/picks/playoff";

    var promise = $http.get(apiUrl)
      .success(function(data) {
        $log.debug("PickService: getPlayoffPicks success");
        return data;
      })
      .error(function(data) {
        $log.debug("PickService: getPlayoffPicks failed");
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
},{}],52:[function(require,module,exports){
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
},{}],53:[function(require,module,exports){
var WeekService = function($http, $log, apiConfig) {

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

};

WeekService.$inject = ['$http', '$log', 'apiConfig'];
module.exports = WeekService;

},{}],54:[function(require,module,exports){
var GameService = function($http, $log, apiConfig) {

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

};

GameService.$inject = ['$http', '$log', 'apiConfig'];
module.exports = GameService;
},{}],55:[function(require,module,exports){
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

},{}],56:[function(require,module,exports){
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

},{}],57:[function(require,module,exports){

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
},{}],58:[function(require,module,exports){

commangular.create('UpdateUserCommand',
    function($log, userService) {

        return {

            execute: function(userParams) {
                $log.debug('UpdateUserCommand: updating a user...');
                var userPromise = userService.updateUser(userParams);
                return userPromise;
            },
            onError: function(error) {
                $log.debug("UpdateUserCommand: failure: " + error.data);
            },
            onResult: function(result) {
                $log.debug("UpdateUserCommand: success");
            }

        }
    });

},{}],59:[function(require,module,exports){

var OffsetFilter = function($log) {
    return function(input, start) {
        start = parseInt(start, 10);
        return input.slice(start);
    };
};

OffsetFilter.$inject = ['$log'];
module.exports = OffsetFilter;

},{}],60:[function(require,module,exports){
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

},{}],61:[function(require,module,exports){
var OpenLeagueFilter = function() {
  return function(leagues, options) {
    if (options.closed == true) {
      return leagues;
    }
    var openLeagues = _.filter(leagues, function(league) {
      return !league.closed;
    });
    return openLeagues;
  };
};

OpenLeagueFilter.$inject = [];
module.exports = OpenLeagueFilter;

},{}],62:[function(require,module,exports){

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

},{}],63:[function(require,module,exports){
var HomeController = function($scope, $log, $location, $modal, seasonModel, weekService, leagueService) {

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

HomeController.$inject = ['$scope', '$log', '$location', '$modal', 'seasonModel', 'weekService', 'leagueService'];
module.exports = HomeController;

},{}],64:[function(require,module,exports){
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

},{}],65:[function(require,module,exports){
var SigninController = function($scope, $log, $location, $modal, userService) {

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

SigninController.$inject = ['$scope', '$log', '$location', '$modal', 'userService'];
module.exports = SigninController;

},{}],66:[function(require,module,exports){
var RegisterController = function($scope, $log, $modal, $modalInstance) {

    $scope.newUserData = {
        first_name: '',
        last_name: '',
        nickname: '',
        email: '',
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

},{}],67:[function(require,module,exports){

var UserController = function($scope, $log, userModel) {

    $scope.userData = angular.copy(userModel);

    $scope.update = function(user) {
        $scope.dispatch('UpdateUserEvent', { userParams: user });
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

UserController.$inject = ['$scope', '$log', 'userModel'];
module.exports = UserController;

},{}],68:[function(require,module,exports){

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

},{}],69:[function(require,module,exports){

var LeaguesController = function($scope, $log, $state, $stateParams, seasonModel) {

    $scope.season = seasonModel.season;

    // pagination
    $scope.currentLeaguePage = 1;
    $scope.leaguesPerPage = 10;

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


},{}],70:[function(require,module,exports){
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

},{}],71:[function(require,module,exports){
var TeamsController = function($scope, $log, $state, $location, $stateParams) {

    $scope.seasonId = $stateParams.seasonId;

    // pagination
    $scope.currentTeamPage = 1;
    $scope.teamsPerPage = 10;

    $scope.isAliveState = function() {
        return $state.current.name == 'private.teams.alive';
    };

    $scope.hasNoPick = function(team) {
      return team.last_pick_squad_name == 'None';
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

},{}],72:[function(require,module,exports){
var HeaderController = function($scope, $log, $location, $modal, $state, $anchorScroll, weekService, userService, leagueService, userModel, seasonModel) {

    var scrollToTop = function() {
      $anchorScroll(); // hacky?
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

      var modalInstance = $modal.open({
        templateUrl: 'modules/public/faq/faq.tpl.html',
        controller: 'FaqController'
      });

      modalInstance.result.then(function(newUser) {
        userService.createUser(newUser);
      }, function () {
        $log.debug('FAQ modal dismissed...');
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
      });

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
        $log.debug('Create league modal dismissed...');
      });

    };

    $scope.manageTeams = function(season) {
        $location.path('/season/' + season.id + '/teams/alive');
    };

    $scope.manageLeagues = function(season) {
        $location.path('/season/' + season.id + '/leagues');
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
        $log.debug('Reset password modal dismissed...');
      });
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.debug("header controller");
        scrollToTop();
    };
    init();
};

HeaderController.$inject = ['$scope', '$log', '$location', '$modal', '$state', '$anchorScroll', 'weekService', 'userService', 'leagueService', 'userModel', 'seasonModel'];
module.exports = HeaderController;

},{}],73:[function(require,module,exports){
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

},{}],74:[function(require,module,exports){
var FooterController = function($scope, $log, $modal, $location, weekService, leagueService, seasonModel) {

  $scope.season = seasonModel.season;

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
      $log.debug('Create league modal dismissed...');
    });

  };

  $scope.manageTeams = function(season) {
    $location.path('/season/' + season.id + '/teams/alive');
  };

  $scope.manageLeagues = function(season) {
    $location.path('/season/' + season.id + '/leagues');
  };

  /**
   * Invoked on startup, like a constructor.
   */
  var init = function () {
    $log.debug("footer controller");
  };
  init();
};

FooterController.$inject = ['$scope', '$log', '$modal', '$location', 'weekService', 'leagueService', 'seasonModel'];
module.exports = FooterController;

},{}],75:[function(require,module,exports){
var ApplicationService =
    function($window, $location, $log, $commangular) {

        /**
         *  Application Startup Process
         */
        this.startup = function() {
            startupProcess();
        };

        var startupProcess = function() {
            // anything you want to happen on app startup
        };

        /**
         * Invoked on startup, like a constructor.
         */
        var init = function () {
            $log.debug("ApplicationService init application service");
        };
        init();

    };

ApplicationService.$inject = ['$window', '$location', '$log', '$commangular'];
module.exports = ApplicationService;

},{}],76:[function(require,module,exports){
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

},{}],77:[function(require,module,exports){
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

},{}],78:[function(require,module,exports){
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
},{}],79:[function(require,module,exports){
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

},{}],80:[function(require,module,exports){
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

},{}],81:[function(require,module,exports){
var NewLeagueController = function(weeks, $scope, $log, $modalInstance) {

    $scope.weeks = weeks.data;

    $scope.newLeagueData = {
        name: '',
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

},{}],82:[function(require,module,exports){
var ViewLeagueController = function(league, aliveTeams, deadTeams, $scope, $log, $modal, $location, userModel, weekService, teamService, leagueService) {

  $scope.leagueData = league.data;

  $scope.aliveTeams = aliveTeams.data;
  $scope.deadTeams = deadTeams.data;

  // pagination
  $scope.currentTeamPage = 1;
  $scope.teamsPerPage = 10;

  $scope.teamOptions = { active: true, inactive: false };

  $scope.message = function(league) {
    var message = 'I got nothing.';
    if (league.message && league.message.length > 0) {
      message = league.message;
    }
    return message;
  };

  $scope.starts = function(league) {
    var startsLabel = (league.started) ? 'Started ' : 'Starts ';
    return startsLabel + league.start_week;
  };

  $scope.hasWinner = function(league, aliveTeams) {
    return league.started && aliveTeams.length == 1;
  };

  $scope.isCommish = function(league) {
    return league.commish_emails.indexOf(userModel.user.email) > -1;
  };

  $scope.hasTeamInLeague = function() {
    var found = false;
    var teams = _.union($scope.aliveTeams, $scope.deadTeams);
    _.each(teams, function(team) {
      if (team.coach_emails.indexOf(userModel.user.email) > -1) {
        found = true;
      }
    });
    return found;
  };

  $scope.isCoach = function(team) {
    return team.coach_emails.indexOf(userModel.user.email) > -1;
  };

  $scope.coachName = function(team) {
    return team.coach_names[0]; // todo: only handles the first team coach
  };

  $scope.hasNoPick = function(team) {
    return team.last_pick_squad_name == 'None';
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
    });
  };

  $scope.resetSearch = function() {
    $scope.search = {
      name: ""
    };
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

ViewLeagueController.$inject = ['league', 'aliveTeams', 'deadTeams', '$scope', '$log', '$modal', '$location', 'userModel', 'weekService', 'teamService', 'leagueService'];
module.exports = ViewLeagueController;

},{}],83:[function(require,module,exports){
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

},{}],84:[function(require,module,exports){
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

},{}],85:[function(require,module,exports){
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

},{}],86:[function(require,module,exports){
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

},{}],87:[function(require,module,exports){
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

},{}],88:[function(require,module,exports){
var JoinLeaguesController = function($scope, $log, $location, $modal, userModel, seasonModel, weekService, leagueService) {

  $scope.season = seasonModel.season;

  $scope.leagueOptions = { closed: false };

  $scope.publicLeagues = function(seasonId) {
    $location.path('/season/' + seasonId + '/leagues/public');
  };

  $scope.privateLeagues = function(seasonId) {
    $location.path('/season/' + seasonId + '/leagues/private');
  };

  $scope.resetSearch = function() {
    $scope.search = {
      name: ""
    };
  };

  $scope.isCommish = function(league) {
    return league.commish_emails.indexOf(userModel.user.email) > -1;
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

JoinLeaguesController.$inject = ['$scope', '$log', '$location', '$modal', 'userModel', 'seasonModel', 'weekService', 'leagueService'];
module.exports = JoinLeaguesController;

},{}],89:[function(require,module,exports){
var ManagedLeaguesController = function(managedLeagues, $scope, $log, $location, $modal, weekService, leagueService) {

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

ManagedLeaguesController.$inject = ['managedLeagues', '$scope', '$log', '$location', '$modal', 'weekService', 'leagueService'];
module.exports = ManagedLeaguesController;


},{}],90:[function(require,module,exports){
var ViewTeamController = function(team, regularPicks, playoffPicks, $scope, $log, $modal, $location, seasonModel, userModel, teamService, leagueService, gameService, pickService) {

  $scope.teamData = team.data;

  $scope.regularPicks = regularPicks.data;
  $scope.playoffPicks = playoffPicks.data;

  $scope.message = function(team) {
    var message = "Zip. Zilch. Nada";
    if (team.message && team.message.length > 0) {
      message = team.message;
    }
    return message;
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
      leagueService.sendCommishMessage(params.league, params.message)
    }, function () {
      $log.debug('Contact league modal dismissed...');
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

  $scope.isCommish = function(team) {
    return team.commish_emails.indexOf(userModel.user.email) > -1;
  };

  $scope.isCoach = function(team) {
    return team.coach_emails.indexOf(userModel.user.email) > -1;
  };

  $scope.editTeam = function(team) {
    alert('popup a modal'); // todo: what is this doing here?
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
    });

  };

  $scope.makePick = function(team) {

    if (!$scope.isCoach(team)) {
      return;
    }

    var modalInstance = $modal.open({
      templateUrl: 'modules/private/pick/make/pick.make.tpl.html',
      controller: 'PickMakeController',
      resolve: {
        regularPicks: function() {
          return $scope.regularPicks;
        },
        playoffPicks: function() {
          return $scope.playoffPicks;
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

ViewTeamController.$inject = ['team', 'regularPicks', 'playoffPicks', '$scope', '$log', '$modal', '$location', 'seasonModel', 'userModel', 'teamService', 'leagueService', 'gameService', 'pickService'];
module.exports = ViewTeamController;

},{}],91:[function(require,module,exports){
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

},{}],92:[function(require,module,exports){
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

},{}],93:[function(require,module,exports){
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

},{}],94:[function(require,module,exports){
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

},{}],95:[function(require,module,exports){
var PickMakeController = function(regularPicks, playoffPicks, currentGames, $modalInstance, $scope, $log) {

  var regularPicks = regularPicks;
  var playoffPicks = playoffPicks;
  var picks = _.union(regularPicks, playoffPicks);

  $scope.games = currentGames.data;

  $scope.getScore = function(game, index) {
    // warning: magic numbers ahead
    var score = (index === 0) ? game.visiting_squad_score : game.home_squad_score;
    return score;
  };

  $scope.makePick = function(game, squad) {
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
      if (pick.squad_id == squad.id && pick.week_type_id == game.week_type_id) {
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

PickMakeController.$inject = ['regularPicks', 'playoffPicks', 'currentGames', '$modalInstance', '$scope', '$log'];
module.exports = PickMakeController;

},{}],96:[function(require,module,exports){
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

},{}],97:[function(require,module,exports){

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


},{}],98:[function(require,module,exports){
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


},{}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvLnRtcC9hcHAtdGVtcGxhdGVzLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvYXBwLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FzcGVjdHMvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kZWxzL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FwaS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9jb21tYW5kL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2ZpbHRlcnMvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3B1YmxpYy9ob21lL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wdWJsaWMvZmFxL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wdWJsaWMvc2lnbmluL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXIvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdXNlci9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS90ZWFtL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3RlYW1zL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL21vZHVsZXMvaGVhZGVyL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL21vZHVsZXMvbWVzc2FnZS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9tb2R1bGVzL2Zvb3Rlci9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9zZXJ2aWNlL2FwcGxpY2F0aW9uL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2RpcmVjdGl2ZXMvZm9jdXMvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vZGlyZWN0aXZlcy9tYXRjaC9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9kaXJlY3RpdmVzL3JlcXVpcmVkUGF0dGVybi9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHVibGljL3JlZ2lzdGVyL3Rlcm1zL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3VzZXIvcmVzZXQvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL25ldy9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvdmlldy9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvZWRpdC9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvY29udGFjdC9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbWVzc2FnZS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvam9pbi9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL21hbmFnZS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS90ZWFtL3ZpZXcvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdGVhbS9lZGl0L2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3RlYW0vbWVzc2FnZS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS90ZWFtcy9hbGl2ZS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS90ZWFtcy9kZWFkL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3BpY2svbWFrZS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlL3JlcXVlc3QvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL3B1YmxpYy9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4vcHJpdmF0ZS9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9hc3BlY3RzL1Rlc3RBc3BlY3QuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kZWxzL1VzZXJNb2RlbC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9tb2RlbHMvU2Vhc29uTW9kZWwuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kZWxzL01lc3NhZ2VNb2RlbC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9hcGkvQXBpQ29uZmlnLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FwaS9Vc2VyU2VydmljZS5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9hcGkvTGVhZ3VlU2VydmljZS5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9hcGkvVGVhbVNlcnZpY2UuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vYXBpL1BpY2tTZXJ2aWNlLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FwaS9TZWFzb25TZXJ2aWNlLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FwaS9XZWVrU2VydmljZS5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9hcGkvR2FtZVNlcnZpY2UuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vY29tbWFuZC9zZXNzaW9uL1NpZ25pbkNvbW1hbmQuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vY29tbWFuZC9zZXNzaW9uL1NpZ25vdXRDb21tYW5kLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2NvbW1hbmQvdXNlci9HZXRDdXJyZW50VXNlckNvbW1hbmQuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vY29tbWFuZC91c2VyL1VwZGF0ZVVzZXJDb21tYW5kLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2ZpbHRlcnMvT2Zmc2V0RmlsdGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2ZpbHRlcnMvQWN0aXZlVGVhbUZpbHRlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9maWx0ZXJzL09wZW5MZWFndWVGaWx0ZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vZmlsdGVycy9UaW1lRmlsdGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wdWJsaWMvaG9tZS9Ib21lQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHVibGljL2ZhcS9GYXFDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wdWJsaWMvc2lnbmluL1NpZ25pbkNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci9SZWdpc3RlckNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdXNlci9Vc2VyQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvTGVhZ3VlQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL0xlYWd1ZXNDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3RlYW0vVGVhbUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdGVhbXMvVGVhbXNDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL21vZHVsZXMvaGVhZGVyL0hlYWRlckNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kdWxlcy9tZXNzYWdlL01lc3NhZ2VDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL21vZHVsZXMvZm9vdGVyL0Zvb3RlckNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vc2VydmljZS9hcHBsaWNhdGlvbi9BcHBsaWNhdGlvblNlcnZpY2UuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vZGlyZWN0aXZlcy9mb2N1cy9Gb2N1c0RpcmVjdGl2ZS5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9kaXJlY3RpdmVzL21hdGNoL01hdGNoRGlyZWN0aXZlLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2RpcmVjdGl2ZXMvcmVxdWlyZWRQYXR0ZXJuL1JlcXVpcmVkUGF0dGVybkRpcmVjdGl2ZS5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHVibGljL3JlZ2lzdGVyL3Rlcm1zL1JlZ2lzdGVyVGVybXNDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3VzZXIvcmVzZXQvVXNlclJlc2V0Q29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbmV3L05ld0xlYWd1ZUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL3ZpZXcvVmlld0xlYWd1ZUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2VkaXQvRWRpdExlYWd1ZUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2NvbnRhY3QvTGVhZ3VlQ29udGFjdENvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL21lc3NhZ2UvTGVhZ3VlTWVzc2FnZUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2pvaW4vTGVhZ3VlSm9pbkNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2ludml0ZS9MZWFndWVJbnZpdGVDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9Kb2luTGVhZ3Vlc0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9tYW5hZ2UvTWFuYWdlTGVhZ3Vlc0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdGVhbS92aWV3L1ZpZXdUZWFtQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHJpdmF0ZS90ZWFtL2VkaXQvRWRpdFRlYW1Db250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3RlYW0vbWVzc2FnZS9UZWFtTWVzc2FnZUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdGVhbXMvYWxpdmUvQWxpdmVUZWFtc0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvdGVhbXMvZGVhZC9EZWFkVGVhbXNDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL3BpY2svbWFrZS9QaWNrTWFrZUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2ludml0ZS9yZXF1ZXN0L0xlYWd1ZUludml0ZVJlcXVlc3RDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9wdWJsaWMvUHVibGljTGVhZ3Vlc0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL3ByaXZhdGUvUHJpdmF0ZUxlYWd1ZXNDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9vQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ2FwcC50ZW1wbGF0ZXMnLCBbJ2NvbW1vbi9tb2R1bGVzL2Zvb3Rlci9mb290ZXIudHBsLmh0bWwnLCAnY29tbW9uL21vZHVsZXMvaGVhZGVyL2hlYWRlci50cGwuaHRtbCcsICdjb21tb24vbW9kdWxlcy9tZXNzYWdlL21lc3NhZ2UudHBsLmh0bWwnLCAnY29tbW9uL3RlbXBsYXRlcy9tYXN0ZXIudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9jb250YWN0L2xlYWd1ZS5jb250YWN0LnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvZWRpdC9sZWFndWUuZWRpdC50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2ludml0ZS9sZWFndWUuaW52aXRlLnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlL3JlcXVlc3QvbGVhZ3VlLmludml0ZS5yZXF1ZXN0LnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvam9pbi9sZWFndWUuam9pbi50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2xlYWd1ZS50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL21lc3NhZ2UvbGVhZ3VlLm1lc3NhZ2UudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9uZXcvbGVhZ3VlLm5ldy50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL3ZpZXcvbGVhZ3VlLnZpZXcudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9sZWFndWVzLmpvaW4udHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9wcml2YXRlL2xlYWd1ZXMuam9pbi5wcml2YXRlLnRwbC5odG1sJywgJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4vcHVibGljL2xlYWd1ZXMuam9pbi5wdWJsaWMudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvbGVhZ3Vlcy50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9tYW5hZ2UvbGVhZ3Vlcy5tYW5hZ2UudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL3BpY2svbWFrZS9waWNrLm1ha2UudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL3RlYW0vZWRpdC90ZWFtLmVkaXQudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL3RlYW0vbWVzc2FnZS90ZWFtLm1lc3NhZ2UudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL3RlYW0vdGVhbS50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvdGVhbS92aWV3L3RlYW0udmlldy50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvdGVhbXMvYWxpdmUvdGVhbXMuYWxpdmUudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL3RlYW1zL2RlYWQvdGVhbXMuZGVhZC50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvdGVhbXMvdGVhbXMudHBsLmh0bWwnLCAnbW9kdWxlcy9wcml2YXRlL3VzZXIvcmVzZXQvdXNlci5yZXNldC50cGwuaHRtbCcsICdtb2R1bGVzL3ByaXZhdGUvdXNlci91c2VyLnRwbC5odG1sJywgJ21vZHVsZXMvcHVibGljL2ZhcS9mYXEudHBsLmh0bWwnLCAnbW9kdWxlcy9wdWJsaWMvaG9tZS9ob21lLnRwbC5odG1sJywgJ21vZHVsZXMvcHVibGljL3JlZ2lzdGVyL3JlZ2lzdGVyLnRwbC5odG1sJywgJ21vZHVsZXMvcHVibGljL3JlZ2lzdGVyL3Rlcm1zL3JlZ2lzdGVyLnRlcm1zLnRwbC5odG1sJywgJ21vZHVsZXMvcHVibGljL3NpZ25pbi9zaWduaW4udHBsLmh0bWwnXSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwiY29tbW9uL21vZHVsZXMvZm9vdGVyL2Zvb3Rlci50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcImNvbW1vbi9tb2R1bGVzL2Zvb3Rlci9mb290ZXIudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOCBjb2wtbWQtOFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwibGlua3NcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGEgbmctY2xpY2s9XFxcIm1hbmFnZVRlYW1zKHNlYXNvbilcXFwiPk15IFRlYW1zPC9hPlxcblwiICtcbiAgICBcIiAgICAgICAgJm5ic3A7fCZuYnNwO1xcblwiICtcbiAgICBcIiAgICAgICAgPGEgbmctY2xpY2s9XFxcIm1hbmFnZUxlYWd1ZXMoc2Vhc29uKVxcXCI+TXkgTGVhZ3VlczwvYT5cXG5cIiArXG4gICAgXCIgICAgICAgICZuYnNwO3wmbmJzcDtcXG5cIiArXG4gICAgXCIgICAgICAgIDxhIG5nLWNsaWNrPVxcXCJqb2luTGVhZ3VlKHNlYXNvbilcXFwiPkpvaW4gTGVhZ3VlPC9hPlxcblwiICtcbiAgICBcIiAgICAgICAgJm5ic3A7fCZuYnNwO1xcblwiICtcbiAgICBcIiAgICAgICAgPGEgbmctY2xpY2s9XFxcImNyZWF0ZUxlYWd1ZShzZWFzb24pXFxcIj5DcmVhdGUgTGVhZ3VlPC9hPlxcblwiICtcbiAgICBcIiAgICAgICAgPGJyPlxcblwiICtcbiAgICBcIiAgICAgICAgwqkgMjAxNCA8YSBocmVmPVxcXCJodHRwOi8vd3d3LmZsZXhkZXZlbG9wZXJzLmNvbVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIHN0eWxlPVxcXCJjb2xvcjogIzQ0NDsgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxcIj5GbGV4ZGV2ZWxvcGVycy5jb20gTExDPC9hPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTQgY29sLW1kLTRcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImxpbmtzXFxcIiBzdHlsZT1cXFwiZmxvYXQ6IHJpZ2h0O1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8YSBocmVmPVxcXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vbG9zZW9yZ29ob21lXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWZhY2Vib29rLXNxdWFyZSBmYS1md1xcXCI+PC9pPjwvYT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxhIGhyZWY9XFxcImh0dHBzOi8vdHdpdHRlci5jb20vbG9zZW9yZ29ob21lXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXR3aXR0ZXIgZmEtZndcXFwiPjwvaT48L2E+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcImNvbW1vbi9tb2R1bGVzL2hlYWRlci9oZWFkZXIudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJjb21tb24vbW9kdWxlcy9oZWFkZXIvaGVhZGVyLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwibmF2YmFyLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxidXR0b24gY2xhc3M9XFxcIm5hdmJhci10b2dnbGVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgbmctY2xpY2s9XFxcImlzQ29sbGFwc2VkID0gIWlzQ29sbGFwc2VkXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24tYmFyXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24tYmFyXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24tYmFyXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgIDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICA8YSBjbGFzcz1cXFwibmF2YmFyLWJyYW5kXFxcIiBuZy1jbGljaz1cXFwiaG9tZSgpXFxcIj5sb3Nlb3Jnb2hvbWUuY29tPC9hPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNvbGxhcHNlPVxcXCJpc0NvbGxhcHNlZFxcXCIgY2xhc3M9XFxcIm5hdmJhci1jb2xsYXBzZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDx1bCBuZy1zaG93PVxcXCJ1c2VyRGF0YS51c2VyLmxvYWRlZFxcXCIgY2xhc3M9XFxcIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxpPjxhIG5nLWNsaWNrPVxcXCJmYXEoKVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXF1ZXN0aW9uLWNpcmNsZSBmYS1md1xcXCI+PC9pPiBGQVE8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICA8bGkgbmctY2xhc3M9XFxcInsnYWN0aXZlJzogaXNTdGF0ZShbJ3ByaXZhdGUudGVhbXMuYWxpdmUnLCAncHJpdmF0ZS50ZWFtcy5kZWFkJ10pfVxcXCI+PGEgbmctY2xpY2s9XFxcIm1hbmFnZVRlYW1zKHNlYXNvbilcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS11c2VyIGZhLWZ3XFxcIj48L2k+ICBNeSB0ZWFtczwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgIDxsaSBuZy1jbGFzcz1cXFwieydhY3RpdmUnOiBpc1N0YXRlKFsncHJpdmF0ZS5sZWFndWVzLm1hbmFnZSddKX1cXFwiPjxhIG5nLWNsaWNrPVxcXCJtYW5hZ2VMZWFndWVzKHNlYXNvbilcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1ncm91cCBmYS1md1xcXCI+PC9pPiAgTXkgbGVhZ3VlczwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgIDxsaSBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImRyb3Bkb3duLXRvZ2dsZVxcXCIgZGF0YS10b2dnbGU9XFxcImRyb3Bkb3duXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtY29nIGZhLWZ3IHNldHRpbmdzLWljb25cXFwiIHRpdGxlPVxcXCJVc2VyIFNldHRpbmdzXFxcIj48L2k+IDxiIGNsYXNzPVxcXCJjYXJldFxcXCI+PC9iPjwvYT5cXG5cIiArXG4gICAgXCIgICAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsaT48YSBuZy1jbGljaz1cXFwiam9pbkxlYWd1ZShzZWFzb24pXFxcIj5Kb2luIGEgbGVhZ3VlPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsaT48YSBuZy1jbGljaz1cXFwiY3JlYXRlTGVhZ3VlKHNlYXNvbilcXFwiPkNyZWF0ZSBhIGxlYWd1ZTwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGkgY2xhc3M9XFxcImRpdmlkZXJcXFwiPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsaT48YSBuZy1jbGljaz1cXFwidXNlclByb2ZpbGUoKVxcXCI+VXNlciBQcm9maWxlPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsaT48YSBuZy1jbGljaz1cXFwic2lnbm91dCgpXFxcIj5TaWduIE91dDwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgICAgPC91bD5cXG5cIiArXG4gICAgXCIgICAgICA8L2xpPlxcblwiICtcbiAgICBcIiAgICA8L3VsPlxcblwiICtcbiAgICBcIiAgICA8dWwgbmctc2hvdz1cXFwiIXVzZXJEYXRhLnVzZXIubG9hZGVkXFxcIiBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGk+PGEgbmctY2xpY2s9XFxcImZhcSgpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtcXVlc3Rpb24tY2lyY2xlIGZhLWZ3XFxcIj48L2k+IEZBUTwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgIDxsaT48YSBuZy1jbGljaz1cXFwicmVnaXN0ZXIoKVxcXCI+UmVnaXN0ZXI8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICA8bGkgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxhIGNsYXNzPVxcXCJkcm9wZG93bi10b2dnbGVcXFwiIGhyZWY9XFxcIiNcXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCI+U2lnbiBJbjwvc3Ryb25nPjwvYT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnUgcGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlubGluZS1zaWduaW4tZm9ybSBwYW5lbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8Zm9ybSBuYW1lPVxcXCJpbmxpbmVTaWduaW5Gb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBuZy1zdWJtaXQ9XFxcInNpZ25pbihjcmVkZW50aWFscyk7ICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWVudmVsb3BlIGZhLWZ3XFxcIj48L2k+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgc3R5bGU9XFxcImN1cnNvcjphdXRvO1xcXCIgcGxhY2Vob2xkZXI9XFxcIkVtYWlsXFxcIiBuZy1tb2RlbD1cXFwiY3JlZGVudGlhbHMuZW1haWxcXFwiIG5nLWNsaWNrPVxcXCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWFkZG9uXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEta2V5IGZhLWZ3XFxcIj48L2k+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgc3R5bGU9XFxcImN1cnNvcjphdXRvO1xcXCIgcGxhY2Vob2xkZXI9XFxcIlBhc3N3b3JkXFxcIiBuZy1tb2RlbD1cXFwiY3JlZGVudGlhbHMucGFzc3dvcmRcXFwiIG5nLWNsaWNrPVxcXCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxkaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJmb3Jnb3QtcGFzc3dvcmQgYnRuIGJ0bi1saW5rIHB1bGwtbGVmdFxcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIiBuZy1jbGljaz1cXFwicmVzZXRQYXNzd29yZCgpXFxcIj5Gb3Jnb3QgUGFzc3dvcmQ/PC9hPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcInNpZ24taW4tYnRuIGJ0biBidG4tcHJpbWFyeSBwdWxsLXJpZ2h0XFxcIj5TaWduIGluPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XFxcImNsZWFyOiBib3RoO1xcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8aHI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyZWdpc3RlclxcXCI+PGEgbmctY2xpY2s9XFxcInJlZ2lzdGVyKClcXFwiPkRvbid0IGhhdmUgYW4gYWNjb3VudD8gPHN0cm9uZz5SZWdpc3Rlcjwvc3Ryb25nPjwvYT48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9saT5cXG5cIiArXG4gICAgXCIgICAgPC91bD5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJjb21tb24vbW9kdWxlcy9tZXNzYWdlL21lc3NhZ2UudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJjb21tb24vbW9kdWxlcy9tZXNzYWdlL21lc3NhZ2UudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRpc21pc3NhYmxlIGFsZXJ0LXt7bWVzc2FnZURhdGEubWVzc2FnZS50eXBlfX1cXFwiIG5nLXNob3c9XFxcIm1lc3NhZ2VEYXRhLm1lc3NhZ2UubG9hZGVkXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGRhdGEtZGlzbWlzcz1cXFwiYWxlcnRcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiBuZy1jbGljaz1cXFwiZGlzbWlzc01lc3NhZ2UobWVzc2FnZURhdGEpXFxcIj4mdGltZXM7PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICB7e21lc3NhZ2VEYXRhLm1lc3NhZ2UuY29udGVudH19XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcImNvbW1vbi90ZW1wbGF0ZXMvbWFzdGVyLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwiY29tbW9uL3RlbXBsYXRlcy9tYXN0ZXIudHBsLmh0bWxcIixcbiAgICBcIjwhLS0gSGVhZGVyIC0tPlxcblwiICtcbiAgICBcIjxuYXYgY2xhc3M9XFxcIm5hdmJhciBuYXZiYXItaW52ZXJzZVxcXCIgdWktdmlldz1cXFwiaGVhZGVyXFxcIj48L25hdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgPCEtLSBNZXNzYWdlIC0tPlxcblwiICtcbiAgICBcIiAgPGRpdiB1aS12aWV3PVxcXCJtZXNzYWdlXFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCIgIDwhLS0gQ29udGVudCAtLT5cXG5cIiArXG4gICAgXCIgIDxkaXYgdWktdmlldz1cXFwiY29udGVudFxcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiPCEtLSBGb290ZXIgLS0+XFxuXCIgK1xuICAgIFwiPGZvb3RlciBjbGFzcz1cXFwiZm9vdGVyXFxcIiB1aS12aWV3PVxcXCJmb290ZXJcXFwiPjwvZm9vdGVyPlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2NvbnRhY3QvbGVhZ3VlLmNvbnRhY3QudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2NvbnRhY3QvbGVhZ3VlLmNvbnRhY3QudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkNvbnRhY3QgdGhlIGNvbW1pc2g8L2gzPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgPGZvcm0gbmFtZT1cXFwiY29udGFjdEZvcm1cXFwiIGNsYXNzPVxcXCJjb250YWN0LWZvcm0gZm9ybS1ob3Jpem9udGFsXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihjb250YWN0Rm9ybS5tZXNzYWdlKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKGNvbnRhY3RGb3JtLm1lc3NhZ2UpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGZvcj1cXFwibWVzc2FnZVxcXCIgY2xhc3M9XFxcImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPk1lc3NhZ2U6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPHRleHRhcmVhIGlkPVxcXCJtZXNzYWdlXFxcIiBuYW1lPVxcXCJtZXNzYWdlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiU2VuZCBhIGRpcmVjdCBtZXNzYWdlIHRvIHRoZSBjb21taXNoLi4uXFxcIiByb3dzPVxcXCIzXFxcIiBtYXhsZW5ndGg9XFxcIjIwMFxcXCIgbmctbW9kZWw9XFxcImNvbW1pc2hNZXNzYWdlXFxcIiByZXF1aXJlZD48L3RleHRhcmVhPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJpbnB1dC1lcnJvclxcXCIgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihjb250YWN0Rm9ybS5tZXNzYWdlLCAncmVxdWlyZWQnKVxcXCI+UmVxdWlyZWQ8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJpbnB1dC1lcnJvclxcXCIgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihjb250YWN0Rm9ybS5tZXNzYWdlLCAnbWF4bGVuZ3RoJylcXFwiPlRvbyBMb25nPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKGNvbnRhY3RGb3JtLm1lc3NhZ2UpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9mb3JtPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+Q2FuY2VsPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG5nLWRpc2FibGVkPVxcXCJjb250YWN0Rm9ybS4kcHJpc3RpbmUgfHwgY29udGFjdEZvcm0uJGludmFsaWRcXFwiIG5nLWNsaWNrPVxcXCJjb250YWN0Q29tbWlzaChsZWFndWVEYXRhLCBjb21taXNoTWVzc2FnZSlcXFwiPlNlbmQ8L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9lZGl0L2xlYWd1ZS5lZGl0LnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9lZGl0L2xlYWd1ZS5lZGl0LnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5FZGl0IGxlYWd1ZTwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJ3ZWxsIHdlbGwtc21cXFwiPjxzdHJvbmc+Tm90ZTo8L3N0cm9uZz4gPGVtPlB1YmxpYyBsZWFndWVzIGFsbG93IGFueW9uZSB0byBqb2luLiBQcml2YXRlIGxlYWd1ZXMgcmVxdWlyZSBhbiBpbnZpdGF0aW9uLjwvZW0+PC9kaXY+XFxuXCIgK1xuICAgIFwiICA8Zm9ybSBuYW1lPVxcXCJsZWFndWVGb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcInJhZGlvLWlubGluZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInJhZGlvXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5wdWJsaWNcXFwiIG5nLXZhbHVlPVxcXCJ0cnVlXFxcIj4gUHVibGljIExlYWd1ZVxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcInJhZGlvLWlubGluZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInJhZGlvXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5wdWJsaWNcXFwiIG5nLXZhbHVlPVxcXCJmYWxzZVxcXCI+IFByaXZhdGUgTGVhZ3VlXFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihsZWFndWVGb3JtLmxlYWd1ZU5hbWUpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IobGVhZ3VlRm9ybS5sZWFndWVOYW1lKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwibGVhZ3VlTmFtZVxcXCI+TGVhZ3VlIG5hbWU6XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobGVhZ3VlRm9ybS5sZWFndWVOYW1lLCAncmVxdWlyZWQnKVxcXCI+WyBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihsZWFndWVGb3JtLmxlYWd1ZU5hbWUsICdtYXhsZW5ndGgnKVxcXCI+WyBUb28gTG9uZyBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJsZWFndWVOYW1lXFxcIiBuYW1lPVxcXCJsZWFndWVOYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5uYW1lXFxcIiBuZy1tYXhsZW5ndGg9XFxcIjI1XFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IobGVhZ3VlRm9ybS5sZWFndWVOYW1lKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJzdGFydFdlZWtcXFwiPlN0YXJ0IHdlZWs6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNlbGVjdCBpZD1cXFwic3RhcnRXZWVrXFxcIiBuYW1lPVxcXCJzdGFydFdlZWtcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLXNob3c9XFxcIiFsZWFndWVEYXRhLnN0YXJ0ZWRcXFwiIG5nLW1vZGVsPVxcXCJsZWFndWVEYXRhLnN0YXJ0X3dlZWtfaWRcXFwiIG5nLW9wdGlvbnM9XFxcIndlZWsuaWQgYXMgd2Vlay5kaXNwbGF5IGZvciB3ZWVrIGluIHdlZWtzXFxcIj48L3NlbGVjdD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJzdGFydFdlZWtEaXNwbGF5XFxcIiBuYW1lPVxcXCJzdGFydFdlZWtEaXNwbGF5XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1zaG93PVxcXCJsZWFndWVEYXRhLnN0YXJ0ZWRcXFwiIG5nLW1vZGVsPVxcXCJsZWFndWVEYXRhLnN0YXJ0X3dlZWtcXFwiIG5nLWRpc2FibGVkPVxcXCJ0cnVlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKGxlYWd1ZUZvcm0ubWF4VGVhbXMpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IobGVhZ3VlRm9ybS5tYXhUZWFtcyl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcIm1heFRlYW1zXFxcIj5NYXhpbXVtIG51bWJlciBvZiB0ZWFtcyBhIHVzZXIgY2FuIGhhdmUgaW4gdGhpcyBsZWFndWU6XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobGVhZ3VlRm9ybS5tYXhUZWFtcywgJ3JlcXVpcmVkJylcXFwiPlsgTnVtYmVyIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGxlYWd1ZUZvcm0ubWF4VGVhbXMsICdtaW4nKVxcXCI+WyAxIC0gMjAgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobGVhZ3VlRm9ybS5tYXhUZWFtcywgJ21heCcpXFxcIj5bIDEgLSAyMCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJtYXhUZWFtc1xcXCIgbmFtZT1cXFwibWF4VGVhbXNcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgcGxhY2Vob2xkZXI9XFxcIkJldHdlZW4gMSBhbmQgMjBcXFwiIG1pbj1cXFwiMVxcXCIgbWF4PVxcXCIyMFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcImxlYWd1ZURhdGEubWF4X3RlYW1zX3Blcl91c2VyXFxcIiBsb2doLWZvY3VzIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihsZWFndWVGb3JtLm1heFRlYW1zKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJtZXNzYWdlXFxcIj5NZXNzYWdlXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsPlsgT3B0aW9uYWwgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cXFwibWVzc2FnZVxcXCIgbmFtZT1cXFwibWVzc2FnZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVudGVyIGEgbWVzc2FnZSBmb3IgeW91IGxlYWd1ZSBoZXJlLi4uXFxcIiByb3dzPVxcXCIyXFxcIiBtYXhsZW5ndGg9XFxcIjIwMFxcXCIgbmctbW9kZWw9XFxcImxlYWd1ZURhdGEubWVzc2FnZVxcXCI+PC90ZXh0YXJlYT5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZm9ybT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwibGVhZ3VlRm9ybS4kcHJpc3RpbmUgfHwgbGVhZ3VlRm9ybS4kaW52YWxpZFxcXCIgbmctY2xpY2s9XFxcInVwZGF0ZUxlYWd1ZShsZWFndWVEYXRhKVxcXCI+VXBkYXRlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlL2xlYWd1ZS5pbnZpdGUudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2ludml0ZS9sZWFndWUuaW52aXRlLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5JbnZpdGUgYSBmcmllbmQgdG8gam9pbjwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8Zm9ybSBuYW1lPVxcXCJpbnZpdGVGb3JtXFxcIiBjbGFzcz1cXFwiaW52aXRlLWZvcm0gZm9ybS1ob3Jpem9udGFsXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihpbnZpdGVGb3JtLmVtYWlsKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKGludml0ZUZvcm0uZW1haWwpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGZvcj1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIj5FbWFpbDo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8aW5wdXQgaWQ9XFxcImVtYWlsXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciBlbWFpbFxcXCIgbmctbW9kZWw9XFxcImludml0YXRpb24uZW1haWxcXFwiIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJpbnB1dC1lcnJvclxcXCIgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihpbnZpdGVGb3JtLmVtYWlsLCAncmVxdWlyZWQnKVxcXCI+UmVxdWlyZWQ8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJpbnB1dC1lcnJvclxcXCIgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihpbnZpdGVGb3JtLmVtYWlsLCAnZW1haWwnKVxcXCI+SW52YWxpZCBlbWFpbDwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihpbnZpdGVGb3JtLmVtYWlsKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IoaW52aXRlRm9ybS5tZXNzYWdlKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKGludml0ZUZvcm0ubWVzc2FnZSl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgZm9yPVxcXCJtZXNzYWdlXFxcIiBjbGFzcz1cXFwiY29sLXNtLTIgY29udHJvbC1sYWJlbFxcXCI+TWVzc2FnZTo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8dGV4dGFyZWEgaWQ9XFxcIm1lc3NhZ2VcXFwiIG5hbWU9XFxcIm1lc3NhZ2VcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciBhIG9wdGlvbmFsIG1lc3NhZ2UgdG8gZGVsaXZlciB3aXRoIHRoZSBpbnZpdGF0aW9uLi4uXFxcIiByb3dzPVxcXCIzXFxcIiBtYXhsZW5ndGg9XFxcIjIwMFxcXCIgbmctbW9kZWw9XFxcImludml0YXRpb24ubWVzc2FnZVxcXCI+PC90ZXh0YXJlYT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoaW52aXRlRm9ybS5tZXNzYWdlLCAnbWF4bGVuZ3RoJylcXFwiPlRvbyBMb25nPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKGludml0ZUZvcm0ubWVzc2FnZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctZGlzYWJsZWQ9XFxcImludml0ZUZvcm0uJHByaXN0aW5lIHx8IGludml0ZUZvcm0uJGludmFsaWRcXFwiIG5nLWNsaWNrPVxcXCJpbnZpdGUoaW52aXRhdGlvbilcXFwiPkludml0ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2ludml0ZS9yZXF1ZXN0L2xlYWd1ZS5pbnZpdGUucmVxdWVzdC50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlL3JlcXVlc3QvbGVhZ3VlLmludml0ZS5yZXF1ZXN0LnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5SZXF1ZXN0IEludml0ZTwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8Zm9ybSBuYW1lPVxcXCJyZXF1ZXN0SW52aXRlRm9ybVxcXCIgY2xhc3M9XFxcInJlcXVlc3QtaW52aXRlLWZvcm0gZm9ybS1ob3Jpem9udGFsXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihyZXF1ZXN0SW52aXRlRm9ybS5lbWFpbCksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihyZXF1ZXN0SW52aXRlRm9ybS5lbWFpbCl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgZm9yPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPkZvcjo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8aW5wdXQgaWQ9XFxcImVtYWlsXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciBlbWFpbFxcXCIgbmctbW9kZWw9XFxcImludml0YXRpb24uZW1haWxcXFwiIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJpbnB1dC1lcnJvclxcXCIgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihyZXF1ZXN0SW52aXRlRm9ybS5lbWFpbCwgJ3JlcXVpcmVkJylcXFwiPlJlcXVpcmVkPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IocmVxdWVzdEludml0ZUZvcm0uZW1haWwsICdlbWFpbCcpXFxcIj5JbnZhbGlkIGVtYWlsPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKHJlcXVlc3RJbnZpdGVGb3JtLmVtYWlsKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IocmVxdWVzdEludml0ZUZvcm0ubWVzc2FnZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihyZXF1ZXN0SW52aXRlRm9ybS5tZXNzYWdlKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBmb3I9XFxcIm1lc3NhZ2VcXFwiIGNsYXNzPVxcXCJjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIj5NZXNzYWdlOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDx0ZXh0YXJlYSBpZD1cXFwibWVzc2FnZVxcXCIgbmFtZT1cXFwibWVzc2FnZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVudGVyIGEgb3B0aW9uYWwgbWVzc2FnZSBmb3IgdGhlIGNvbW1pc2ggb2YgdGhlIGxlYWd1ZS4uLlxcXCIgcm93cz1cXFwiM1xcXCIgbWF4bGVuZ3RoPVxcXCIyMDBcXFwiIG5nLW1vZGVsPVxcXCJpbnZpdGF0aW9uLm1lc3NhZ2VcXFwiPjwvdGV4dGFyZWE+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKHJlcXVlc3RJbnZpdGVGb3JtLm1lc3NhZ2UsICdtYXhsZW5ndGgnKVxcXCI+VG9vIExvbmc8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IocmVxdWVzdEludml0ZUZvcm0ubWVzc2FnZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctZGlzYWJsZWQ9XFxcInJlcXVlc3RJbnZpdGVGb3JtLiRpbnZhbGlkXFxcIiBuZy1jbGljaz1cXFwicmVxdWVzdEludml0ZShpbnZpdGF0aW9uKVxcXCI+UmVxdWVzdCBJbnZpdGU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9qb2luL2xlYWd1ZS5qb2luLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9qb2luL2xlYWd1ZS5qb2luLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5Kb2luIHt7bGVhZ3VlRGF0YS5uYW1lfX08L2gzPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgPGZvcm0gbmFtZT1cXFwiam9pbkZvcm1cXFwiIGNsYXNzPVxcXCJqb2luLWZvcm0gZm9ybS1ob3Jpem9udGFsXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihqb2luRm9ybS50ZWFtTmFtZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihqb2luRm9ybS50ZWFtTmFtZSl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgZm9yPVxcXCJ0ZWFtTmFtZVxcXCIgY2xhc3M9XFxcImNvbC1zbS00IGNvbC1tZC00IGNvbnRyb2wtbGFiZWxcXFwiPkdpdmUgeW91ciB0ZWFtIGEgbmFtZTo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS04IGNvbC1tZC04XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxpbnB1dCBpZD1cXFwidGVhbU5hbWVcXFwiIG5hbWU9XFxcInRlYW1OYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgbmFtZS4uLlxcXCIgbmctbW9kZWw9XFxcIm5ld1RlYW1EYXRhLm5hbWVcXFwiIG5nLW1heGxlbmd0aD1cXFwiMjVcXFwiIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJpbnB1dC1lcnJvclxcXCIgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihqb2luRm9ybS50ZWFtTmFtZSwgJ3JlcXVpcmVkJylcXFwiPlJlcXVpcmVkPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3Ioam9pbkZvcm0udGVhbU5hbWUsICdtYXhsZW5ndGgnKVxcXCI+VG9vIExvbmc8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3Ioam9pbkZvcm0udGVhbU5hbWUpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9mb3JtPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+Q2FuY2VsPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG5nLWRpc2FibGVkPVxcXCJqb2luRm9ybS4kcHJpc3RpbmUgfHwgam9pbkZvcm0uJGludmFsaWRcXFwiIG5nLWNsaWNrPVxcXCJqb2luTGVhZ3VlKG5ld1RlYW1EYXRhKVxcXCI+Sm9pbjwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2xlYWd1ZS50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbGVhZ3VlLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IHVpLXZpZXc9XFxcImxlYWd1ZUNvbnRlbnRcXFwiIGNsYXNzPVxcXCJsZWFndWUtY29udGVudFxcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbWVzc2FnZS9sZWFndWUubWVzc2FnZS50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbWVzc2FnZS9sZWFndWUubWVzc2FnZS50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+VXBkYXRlIGxlYWd1ZSBtZXNzYWdlPC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxmb3JtIG5hbWU9XFxcIm1lc3NhZ2VGb3JtXFxcIiBjbGFzcz1cXFwibGVhZ3VlLW1lc3NhZ2UtZm9ybSBmb3JtLWhvcml6b250YWxcXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKG1lc3NhZ2VGb3JtLm1lc3NhZ2UpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IobWVzc2FnZUZvcm0ubWVzc2FnZSl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgZm9yPVxcXCJtZXNzYWdlXFxcIiBjbGFzcz1cXFwiY29sLXNtLTIgY29udHJvbC1sYWJlbFxcXCI+TWVzc2FnZTo8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8dGV4dGFyZWEgaWQ9XFxcIm1lc3NhZ2VcXFwiIG5hbWU9XFxcIm1lc3NhZ2VcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciBhIG1lc3NhZ2UgZm9yIHlvdXIgbGVhZ3VlIHRvIHNlZSBvciBsZWF2ZSBpdCBibGFuay5cXFwiIHJvd3M9XFxcIjNcXFwiIG1heGxlbmd0aD1cXFwiMjAwXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5tZXNzYWdlXFxcIj48L3RleHRhcmVhPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJpbnB1dC1lcnJvclxcXCIgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihtZXNzYWdlRm9ybS5tZXNzYWdlLCAnbWF4bGVuZ3RoJylcXFwiPlRvbyBMb25nPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKG1lc3NhZ2VGb3JtLm1lc3NhZ2UpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9mb3JtPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJlbWFpbC1sZWFndWUtbWVzc2FnZS1jaGVja2JveFxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIG5nLW1vZGVsPVxcXCJtZXNzYWdlT3B0aW9ucy5zZW5kRW1haWxcXFwiPiBlbWFpbCBtZXNzYWdlPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwibWVzc2FnZUZvcm0uJHByaXN0aW5lIHx8IG1lc3NhZ2VGb3JtLiRpbnZhbGlkXFxcIiBuZy1jbGljaz1cXFwidXBkYXRlTWVzc2FnZShsZWFndWVEYXRhLCBtZXNzYWdlT3B0aW9ucy5zZW5kRW1haWwpXFxcIj5VcGRhdGU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9uZXcvbGVhZ3VlLm5ldy50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbmV3L2xlYWd1ZS5uZXcudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkNyZWF0ZSBhIGxlYWd1ZTwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJ3ZWxsIHdlbGwtc21cXFwiPjxzdHJvbmc+Tm90ZTo8L3N0cm9uZz4gPGVtPlB1YmxpYyBsZWFndWVzIGFsbG93IGFueW9uZSB0byBqb2luLiBQcml2YXRlIGxlYWd1ZXMgcmVxdWlyZSBhbiBpbnZpdGF0aW9uLjwvZW0+PC9kaXY+XFxuXCIgK1xuICAgIFwiICA8Zm9ybSBuYW1lPVxcXCJuZXdMZWFndWVGb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcInJhZGlvLWlubGluZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInJhZGlvXFxcIiBuZy1tb2RlbD1cXFwibmV3TGVhZ3VlRGF0YS5wdWJsaWNcXFwiIG5nLWNoZWNrZWQ9XFxcInRydWVcXFwiIG5nLXZhbHVlPVxcXCJ0cnVlXFxcIj4gUHVibGljIExlYWd1ZVxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcInJhZGlvLWlubGluZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInJhZGlvXFxcIiBuZy1tb2RlbD1cXFwibmV3TGVhZ3VlRGF0YS5wdWJsaWNcXFwiIG5nLXZhbHVlPVxcXCJmYWxzZVxcXCI+IFByaXZhdGUgTGVhZ3VlXFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihuZXdMZWFndWVGb3JtLmxlYWd1ZU5hbWUpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IobmV3TGVhZ3VlRm9ybS5sZWFndWVOYW1lKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwibGVhZ3VlTmFtZVxcXCI+TGVhZ3VlIG5hbWU6XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobmV3TGVhZ3VlRm9ybS5sZWFndWVOYW1lLCAncmVxdWlyZWQnKVxcXCI+WyBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihuZXdMZWFndWVGb3JtLmxlYWd1ZU5hbWUsICdtYXhsZW5ndGgnKVxcXCI+WyBUb28gTG9uZyBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJsZWFndWVOYW1lXFxcIiBuYW1lPVxcXCJsZWFndWVOYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwibmV3TGVhZ3VlRGF0YS5uYW1lXFxcIiBuZy1tYXhsZW5ndGg9XFxcIjI1XFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IobmV3TGVhZ3VlRm9ybS5sZWFndWVOYW1lKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJzdGFydFdlZWtcXFwiPlN0YXJ0IHdlZWs6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNlbGVjdCBpZD1cXFwic3RhcnRXZWVrXFxcIiBuYW1lPVxcXCJzdGFydFdlZWtcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJuZXdMZWFndWVEYXRhLnN0YXJ0X3dlZWtfaWRcXFwiIG5nLW9wdGlvbnM9XFxcIndlZWsuaWQgYXMgd2Vlay5kaXNwbGF5IGZvciB3ZWVrIGluIHdlZWtzXFxcIj48L3NlbGVjdD5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKG5ld0xlYWd1ZUZvcm0ubWF4VGVhbXMpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IobmV3TGVhZ3VlRm9ybS5tYXhUZWFtcyl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcIm1heFRlYW1zXFxcIj5NYXhpbXVtIG51bWJlciBvZiB0ZWFtcyBhIHVzZXIgY2FuIGhhdmUgaW4gdGhpcyBsZWFndWU6XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobmV3TGVhZ3VlRm9ybS5tYXhUZWFtcywgJ3JlcXVpcmVkJylcXFwiPlsgTnVtYmVyIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld0xlYWd1ZUZvcm0ubWF4VGVhbXMsICdtaW4nKVxcXCI+WyAxIC0gMjAgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobmV3TGVhZ3VlRm9ybS5tYXhUZWFtcywgJ21heCcpXFxcIj5bIDEgLSAyMCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJtYXhUZWFtc1xcXCIgbmFtZT1cXFwibWF4VGVhbXNcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgcGxhY2Vob2xkZXI9XFxcIkJldHdlZW4gMSBhbmQgMjBcXFwiIG1pbj1cXFwiMVxcXCIgbWF4PVxcXCIyMFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcIm5ld0xlYWd1ZURhdGEubWF4X3RlYW1zX3Blcl91c2VyXFxcIiBsb2doLWZvY3VzIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihuZXdMZWFndWVGb3JtLm1heFRlYW1zKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtMTJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJtZXNzYWdlXFxcIj5NZXNzYWdlIFsgT3B0aW9uYWwgXTwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cXFwibWVzc2FnZVxcXCIgbmFtZT1cXFwibWVzc2FnZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVudGVyIGEgbWVzc2FnZSBmb3IgeW91ciBsZWFndWUgaGVyZS4gWW91IGNhbiBjaGFuZ2UgaXQgYXQgYW55IHRpbWUuXFxcIiByb3dzPVxcXCIyXFxcIiBtYXhsZW5ndGg9XFxcIjIwMFxcXCIgbmctbW9kZWw9XFxcIm5ld0xlYWd1ZURhdGEubWVzc2FnZVxcXCI+PC90ZXh0YXJlYT5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZm9ybT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1kaXNhYmxlZD1cXFwibmV3TGVhZ3VlRm9ybS4kaW52YWxpZFxcXCIgbmctY2xpY2s9XFxcImNyZWF0ZUxlYWd1ZShuZXdMZWFndWVEYXRhKVxcXCI+Q3JlYXRlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvdmlldy9sZWFndWUudmlldy50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWUvdmlldy9sZWFndWUudmlldy50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtc3VjY2Vzc1xcXCIgbmctc2hvdz1cXFwiaGFzV2lubmVyKGxlYWd1ZURhdGEsIGFsaXZlVGVhbXMpXFxcIj5UaGlzIGxlYWd1ZSBoYXMgYSB3aW5uZXIhISBDb25ncmF0cyBhbGwgYXJvdW5kLi4uPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwiaGVhZGVyLXJvdyByb3dcXFwiPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTggY29sLW1kLThcXFwiPlxcblwiICtcbiAgICBcIiAgICA8aDMgY2xhc3M9XFxcImxlYWd1ZS1uYW1lXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdGltZXNcXFwiIHRpdGxlPVxcXCJDbG9zZWQgbGVhZ3VlXFxcIiBuZy1zaG93PVxcXCJsZWFndWVEYXRhLmNsb3NlZFxcXCI+PC9pPlxcblwiICtcbiAgICBcIiAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1sb2NrXFxcIiB0aXRsZT1cXFwiUHJpdmF0ZSBsZWFndWVcXFwiIG5nLXNob3c9XFxcIiFsZWFndWVEYXRhLmNsb3NlZCAmJiAhbGVhZ3VlRGF0YS5wdWJsaWNcXFwiPjwvaT5cXG5cIiArXG4gICAgXCIgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdW5sb2NrXFxcIiB0aXRsZT1cXFwiUHVibGljIGxlYWd1ZVxcXCIgbmctc2hvdz1cXFwiIWxlYWd1ZURhdGEuY2xvc2VkICYmIGxlYWd1ZURhdGEucHVibGljXFxcIj48L2k+XFxuXCIgK1xuICAgIFwiICAgICAge3tsZWFndWVEYXRhLm5hbWV9fSA8c21hbGwgY2xhc3M9XFxcImNsb3NlZC10ZXh0XFxcIiBuZy1zaG93PVxcXCJsZWFndWVEYXRhLmNsb3NlZCAmJiAhbGVhZ3VlRGF0YS5zdGFydGVkXFxcIj5OTyBORVcgVEVBTVM8L3NtYWxsPiA8YnI+XFxuXCIgK1xuICAgIFwiICAgICAgPHNtYWxsPnt7c3RhcnRzKGxlYWd1ZURhdGEpfX0gLSB7e2xlYWd1ZURhdGEubWF4X3RlYW1zX3Blcl91c2VyfX0gdGVhbXMgbWF4IHBlciB1c2VyPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgPC9oMz5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTQgY29sLW1kLTRcXFwiPlxcblwiICtcbiAgICBcIiAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImpvaW4tYnRuIGJ0biBidG4tcHJpbWFyeSBidG4tc21cXFwiIG5nLXNob3c9XFxcIiFoYXNUZWFtSW5MZWFndWUoKSAmJiAhbGVhZ3VlRGF0YS5zdGFydGVkXFxcIiBuZy1jbGljaz1cXFwiam9pbkxlYWd1ZShsZWFndWVEYXRhKVxcXCI+Sm9pbjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcInJlcXVlc3QtaW52aXRlLWJ0biBidG4gYnRuLXByaW1hcnkgYnRuLXNtXFxcIiBuZy1zaG93PVxcXCIhaGFzVGVhbUluTGVhZ3VlKCkgJiYgIWxlYWd1ZURhdGEuc3RhcnRlZCAmJiAhbGVhZ3VlRGF0YS5wdWJsaWMgJiYgIWlzQ29tbWlzaChsZWFndWVEYXRhKVxcXCIgbmctY2xpY2s9XFxcInJlcXVlc3RJbnZpdGUobGVhZ3VlRGF0YSlcXFwiPlJlcXVlc3QgSW52aXRlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImJ0bi1ncm91cCBsZWFndWUtYWN0aW9uc1xcXCIgbmctc2hvdz1cXFwiaGFzVGVhbUluTGVhZ3VlKCkgfHwgaXNDb21taXNoKGxlYWd1ZURhdGEpXFxcIiBkcm9wZG93biBpcy1vcGVuPVxcXCJjb2FjaC5pc29wZW5cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwibGVhZ3VlLWFjdGlvbnMtYnRuIGJ0biBidG4tZGVmYXVsdCBidG4tc20gZHJvcGRvd24tdG9nZ2xlXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzdHJvbmc+QWN0aW9uczwvc3Ryb25nPiA8c3BhbiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnUgbGVhZ3VlLWFjdGlvbnMtbWVudVxcXCIgcm9sZT1cXFwibWVudVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGkgbmctc2hvdz1cXFwiaGFzVGVhbUluTGVhZ3VlKCkgJiYgIWxlYWd1ZURhdGEuc3RhcnRlZFxcXCI+PGEgbmctY2xpY2s9XFxcImpvaW5MZWFndWUobGVhZ3VlRGF0YSlcXFwiPkpvaW4gYWdhaW4gKHt7bGVhZ3VlRGF0YS5tYXhfdGVhbXNfcGVyX3VzZXJ9fSB0aW1lcyBtYXgpPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGkgbmctc2hvdz1cXFwiaGFzVGVhbUluTGVhZ3VlKCkgJiYgIWxlYWd1ZURhdGEuc3RhcnRlZCAmJiAhbGVhZ3VlRGF0YS5wdWJsaWMgJiYgIWlzQ29tbWlzaChsZWFndWVEYXRhKVxcXCI+PGEgbmctY2xpY2s9XFxcInJlcXVlc3RJbnZpdGUobGVhZ3VlRGF0YSlcXFwiPlJlcXVlc3QgYW4gaW52aXRlPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGk+PGEgbmctY2xpY2s9XFxcImNvbnRhY3RDb21taXNoKGxlYWd1ZURhdGEpXFxcIj5Db250YWN0IHRoZSBjb21taXNoPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGkgbmctc2hvdz1cXFwiaXNDb21taXNoKGxlYWd1ZURhdGEpXFxcIiBjbGFzcz1cXFwiZGl2aWRlclxcXCI+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaSBuZy1zaG93PVxcXCJpc0NvbW1pc2gobGVhZ3VlRGF0YSkgJiYgIWxlYWd1ZURhdGEuc3RhcnRlZFxcXCI+PGEgbmctY2xpY2s9XFxcImludml0ZShsZWFndWVEYXRhLmlkKVxcXCI+SW52aXRlIGEgZnJpZW5kIHRvIGpvaW48L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaT48YSBuZy1zaG93PVxcXCJpc0NvbW1pc2gobGVhZ3VlRGF0YSkgJiYgIWxlYWd1ZURhdGEuc3RhcnRlZFxcXCIgbmctY2xpY2s9XFxcImVkaXRMZWFndWUobGVhZ3VlRGF0YSlcXFwiPkVkaXQgbGVhZ3VlPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGk+PGEgbmctc2hvdz1cXFwiaXNDb21taXNoKGxlYWd1ZURhdGEpXFxcIiBuZy1jbGljaz1cXFwidXBkYXRlTWVzc2FnZShsZWFndWVEYXRhKVxcXCI+VXBkYXRlIGxlYWd1ZSBtZXNzYWdlPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGkgbmctc2hvdz1cXFwiaXNDb21taXNoKGxlYWd1ZURhdGEpICYmICFsZWFndWVEYXRhLnN0YXJ0ZWQgJiYgbGVhZ3VlRGF0YS5jbG9zZWRcXFwiPjxhIG5nLWNsaWNrPVxcXCJvcGVuTGVhZ3VlKGxlYWd1ZURhdGEpXFxcIj5PcGVuIGxlYWd1ZSB0byBuZXcgdGVhbXM8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaSBuZy1zaG93PVxcXCJpc0NvbW1pc2gobGVhZ3VlRGF0YSkgJiYgIWxlYWd1ZURhdGEuc3RhcnRlZCAmJiAhbGVhZ3VlRGF0YS5jbG9zZWRcXFwiPjxhIG5nLWNsaWNrPVxcXCJjbG9zZUxlYWd1ZShsZWFndWVEYXRhKVxcXCI+Q2xvc2UgbGVhZ3VlIHRvIG5ldyB0ZWFtczwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgIDwvdWw+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibGVhZ3VlLW1lc3NhZ2Ugd2VsbCB3ZWxsLXNtXFxcIj48c3Ryb25nPkZyb20gdGhlIGNvbW1pc2g6PC9zdHJvbmc+IDxlbT57e21lc3NhZ2UobGVhZ3VlRGF0YSl9fTwvZW0+IDxhIG5nLXNob3c9XFxcImlzQ29tbWlzaChsZWFndWVEYXRhKVxcXCIgbmctY2xpY2s9XFxcInVwZGF0ZU1lc3NhZ2UobGVhZ3VlRGF0YSlcXFwiPlsgVXBkYXRlIF08L2E+PC9kaXY+XFxuXCIgK1xuICAgIFwiPGg0PlRlYW1zICh7e2xlYWd1ZURhdGEudGVhbV9jb3VudH19KTwvaDQ+XFxuXCIgK1xuICAgIFwiPGhyPlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImxlYWd1ZS1jb250YWluZXJcXFwiIHN0eWxlPVxcXCJjbGVhcjpib3RoO1xcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cCBjdXN0b20tc2VhcmNoLWZvcm1cXFwiPlxcblwiICtcbiAgICBcIiAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkZpbHRlciBieSBuYW1lLi4uXFxcIiBuZy1tb2RlbD1cXFwic2VhcmNoLm5hbWVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0blxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tc2VhcmNoXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L3NwYW4+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDx0YWJzZXQ+XFxuXCIgK1xuICAgIFwiICAgIDx0YWIgc2VsZWN0PVxcXCJyZXNldFNlYXJjaCgpXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8dGFiLWhlYWRpbmc+XFxuXCIgK1xuICAgIFwiICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdGh1bWJzLXVwIGZhLWZ3XFxcIj48L2k+IEFsaXZlIFRlYW1zXFxuXCIgK1xuICAgIFwiICAgICAgPC90YWItaGVhZGluZz5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGl2ZS10ZWFtcyBsaXN0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxhIG5nLXJlcGVhdD1cXFwidGVhbSBpbiBhbGl2ZVRlYW1zIHwgYWN0aXZlVGVhbUZpbHRlcjp0ZWFtT3B0aW9ucyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0IHwgb2Zmc2V0RmlsdGVyOihjdXJyZW50VGVhbVBhZ2UtMSkqdGVhbXNQZXJQYWdlIHwgbGltaXRUbzp0ZWFtc1BlclBhZ2VcXFwiIG5nLWNsaWNrPVxcXCJzaG93VGVhbSh0ZWFtKVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGVhZ3VlLW5hbWUgY29sLXNtLTYgY29sLW1kLTZcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS10cm9waHkgZmEtZndcXFwiIG5nLXNob3c9XFxcImhhc1dpbm5lcihsZWFndWVEYXRhLCBhbGl2ZVRlYW1zKVxcXCI+PC9pPjxpIGNsYXNzPVxcXCJmYSBmYS11c2VyIGZhLWZ3XFxcIiBuZy1zaG93PVxcXCJpc0NvYWNoKHRlYW0pICYmICFoYXNXaW5uZXIobGVhZ3VlRGF0YSwgYWxpdmVUZWFtcylcXFwiPjwvaT4ge3t0ZWFtLm5hbWV9fSA8c3BhbiBjbGFzcz1cXFwiY29hY2gtbmFtZVxcXCI+e3tjb2FjaE5hbWUodGVhbSl9fTwvc3Bhbj48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY3VycmVudC1waWNrXFxcIiBuZy1jbGFzcz1cXFwieyduby1waWNrJzogaGFzTm9QaWNrKHRlYW0pfVxcXCIgbmctc2hvdz1cXFwidGVhbS5hY3RpdmVcXFwiPkN1cnJlbnQgUGljazogWyB7e3RlYW0ubGFzdF9waWNrX3NxdWFkX25hbWV9fSBdPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImluYWN0aXZlLXRlYW1cXFwiIG5nLXNob3c9XFxcIiF0ZWFtLmFjdGl2ZVxcXCI+RGVhY3RpdmF0ZWQgYnkgdGhlIGNvbW1pc2g8L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYmFkZ2VcXFwiPnt7dGVhbS5jb3JyZWN0X3BpY2tzX2NvdW50fX0gY29ycmVjdDwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2E+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWluZm9cXFwiIG5nLXNob3c9XFxcIihhbGl2ZVRlYW1zIHwgYWN0aXZlVGVhbUZpbHRlcjp0ZWFtT3B0aW9ucyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0KS5sZW5ndGggPT0gMFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIE5vIHRlYW1zIGZvdW5kXFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImFsaXZlLXRlYW1zLXBhZ2luYXRpb25cXFwiIG5nLXNob3c9XFxcIihhbGl2ZVRlYW1zIHwgYWN0aXZlVGVhbUZpbHRlcjp0ZWFtT3B0aW9ucyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0KS5sZW5ndGggPiAwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHBhZ2luYXRpb24gYm91bmRhcnktbGlua3M9XFxcInRydWVcXFwiIG1heC1zaXplPVxcXCI0XFxcIiB0b3RhbC1pdGVtcz1cXFwiKGFsaXZlVGVhbXMgfCBhY3RpdmVUZWFtRmlsdGVyOnRlYW1PcHRpb25zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aFxcXCIgaXRlbXMtcGVyLXBhZ2U9XFxcInRlYW1zUGVyUGFnZVxcXCIgbmctbW9kZWw9XFxcImN1cnJlbnRUZWFtUGFnZVxcXCIgY2xhc3M9XFxcInBhZ2luYXRpb24tbWRcXFwiIHByZXZpb3VzLXRleHQ9XFxcIiZsc2FxdW87XFxcIiBuZXh0LXRleHQ9XFxcIiZyc2FxdW87XFxcIiBmaXJzdC10ZXh0PVxcXCImbGFxdW87XFxcIiBsYXN0LXRleHQ9XFxcIiZyYXF1bztcXFwiPjwvcGFnaW5hdGlvbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5hY3RpdmUtdGVhbXMtY2hlY2tib3hcXFwiIG5nLXNob3c9XFxcImlzQ29tbWlzaChsZWFndWVEYXRhKSAmJiBhbGl2ZVRlYW1zLmxlbmd0aCA+IDBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBuZy1tb2RlbD1cXFwidGVhbU9wdGlvbnMuaW5hY3RpdmVcXFwiPiBzaG93IGRlYWN0aXZhdGVkIHRlYW1zPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgc3R5bGU9XFxcImNsZWFyOiBib3RoO1xcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvdGFiPlxcblwiICtcbiAgICBcIiAgICA8dGFiIHNlbGVjdD1cXFwicmVzZXRTZWFyY2goKVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPHRhYi1oZWFkaW5nPlxcblwiICtcbiAgICBcIiAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXRodW1icy1kb3duIGZhLWZ3XFxcIj48L2k+IERlYWQgVGVhbXNcXG5cIiArXG4gICAgXCIgICAgICA8L3RhYi1oZWFkaW5nPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImRlYWQtdGVhbXMgbGlzdC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8YSBuZy1yZXBlYXQ9XFxcInRlYW0gaW4gZGVhZFRlYW1zIHwgYWN0aXZlVGVhbUZpbHRlcjp0ZWFtT3B0aW9ucyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0IHwgb2Zmc2V0RmlsdGVyOihjdXJyZW50VGVhbVBhZ2UtMSkqdGVhbXNQZXJQYWdlIHwgbGltaXRUbzp0ZWFtc1BlclBhZ2VcXFwiIG5nLWNsaWNrPVxcXCJzaG93VGVhbSh0ZWFtKVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGVhZ3VlLW5hbWUgY29sLXNtLTQgY29sLW1kLTRcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS11c2VyIGZhLWZ3XFxcIiBuZy1zaG93PVxcXCJpc0NvYWNoKHRlYW0pXFxcIj48L2k+IHt7dGVhbS5uYW1lfX0gPHNwYW4gY2xhc3M9XFxcImNvYWNoLW5hbWVcXFwiPnt7Y29hY2hOYW1lKHRlYW0pfX08L3NwYW4+PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTggY29sLW1kLThcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImN1cnJlbnQtcGlja1xcXCIgbmctY2xhc3M9XFxcInsnbm8tcGljayc6IGhhc05vUGljayh0ZWFtKX1cXFwiIG5nLXNob3c9XFxcInRlYW0uYWN0aXZlXFxcIj5MYXN0IFBpY2s6IFsge3t0ZWFtLmxhc3RfcGlja19zcXVhZF9uYW1lfX0gXTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbmFjdGl2ZS10ZWFtXFxcIiBuZy1zaG93PVxcXCIhdGVhbS5hY3RpdmVcXFwiPkRlYWN0aXZhdGVkIGJ5IHRoZSBjb21taXNoPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJhZGdlXFxcIj57e3RlYW0uY29ycmVjdF9waWNrc19jb3VudH19IGNvcnJlY3Q8L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPC9hPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDxkaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1pbmZvXFxcIiBuZy1zaG93PVxcXCIoZGVhZFRlYW1zIHwgYWN0aXZlVGVhbUZpbHRlcjp0ZWFtT3B0aW9ucyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0KS5sZW5ndGggPT0gMFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIE5vIHRlYW1zIGZvdW5kXFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImRlYWQtdGVhbXMtcGFnaW5hdGlvblxcXCIgbmctc2hvdz1cXFwiKGRlYWRUZWFtcyB8IGFjdGl2ZVRlYW1GaWx0ZXI6dGVhbU9wdGlvbnMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCkubGVuZ3RoID4gMFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxwYWdpbmF0aW9uIGJvdW5kYXJ5LWxpbmtzPVxcXCJ0cnVlXFxcIiBtYXgtc2l6ZT1cXFwiNFxcXCIgdG90YWwtaXRlbXM9XFxcIihkZWFkVGVhbXMgfCBhY3RpdmVUZWFtRmlsdGVyOnRlYW1PcHRpb25zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aFxcXCIgaXRlbXMtcGVyLXBhZ2U9XFxcInRlYW1zUGVyUGFnZVxcXCIgbmctbW9kZWw9XFxcImN1cnJlbnRUZWFtUGFnZVxcXCIgY2xhc3M9XFxcInBhZ2luYXRpb24tbWRcXFwiIHByZXZpb3VzLXRleHQ9XFxcIiZsc2FxdW87XFxcIiBuZXh0LXRleHQ9XFxcIiZyc2FxdW87XFxcIiBmaXJzdC10ZXh0PVxcXCImbGFxdW87XFxcIiBsYXN0LXRleHQ9XFxcIiZyYXF1bztcXFwiPjwvcGFnaW5hdGlvbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5hY3RpdmUtdGVhbXMtY2hlY2tib3hcXFwiIG5nLXNob3c9XFxcImlzQ29tbWlzaChsZWFndWVEYXRhKSAmJiBkZWFkVGVhbXMubGVuZ3RoID4gMFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIG5nLW1vZGVsPVxcXCJ0ZWFtT3B0aW9ucy5pbmFjdGl2ZVxcXCI+IHNob3cgZGVhY3RpdmF0ZWQgdGVhbXM8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBzdHlsZT1cXFwiY2xlYXI6IGJvdGg7XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC90YWI+XFxuXCIgK1xuICAgIFwiICA8L3RhYnNldD5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9sZWFndWVzLmpvaW4udHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL2xlYWd1ZXMuam9pbi50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwiam9pbi1sZWFndWVzLWhlYWRlci1yb3cgcm93XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS05IGNvbC1tZC05XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGgzPkpvaW4gYSBsZWFndWUuLi48L2gzPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMyBjb2wtbWQtM1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImpvaW4tbGVhZ3Vlcy1idG4tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY3JlYXRlLWxlYWd1ZS1idG4gYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVxcXCIgbmctY2xpY2s9XFxcImNyZWF0ZUxlYWd1ZShzZWFzb24pXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtcGx1cyBmYS1md1xcXCI+PC9pPiA8c3Ryb25nPkNyZWF0ZSBMZWFndWU8L3N0cm9uZz48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8aHI+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibGVhZ3Vlcy1jb250YWluZXJcXFwiPlxcblwiICtcbiAgICBcIiAgICA8dWwgY2xhc3M9XFxcIm5hdiBuYXYtdGFic1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGkgbmctY2xhc3M9XFxcInsnYWN0aXZlJzogaXNQdWJsaWMoKX1cXFwiIG5nLWNsaWNrPVxcXCJyZXNldFNlYXJjaCgpXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8YSBuZy1jbGljaz1cXFwicHVibGljTGVhZ3VlcyhzZWFzb25JZClcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS11bmxvY2sgZmEtZndcXFwiPjwvaT4gUHVibGljPC9hPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaSBuZy1jbGFzcz1cXFwieydhY3RpdmUnOiAhaXNQdWJsaWMoKX1cXFwiIG5nLWNsaWNrPVxcXCJyZXNldFNlYXJjaCgpXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8YSBuZy1jbGljaz1cXFwicHJpdmF0ZUxlYWd1ZXMoc2Vhc29uSWQpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtbG9jayBmYS1md1xcXCI+PC9pPiBQcml2YXRlPC9hPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9saT5cXG5cIiArXG4gICAgXCIgICAgPC91bD5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgY3VzdG9tLXNlYXJjaC1mb3JtXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRmlsdGVyIGJ5IG5hbWUuLi5cXFwiIG5nLW1vZGVsPVxcXCJzZWFyY2gubmFtZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYnRuXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXNlYXJjaFxcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8IS0tIHBsYWNlaG9sZGVyIGZvciBwdWJsaWMgYW5kIHByaXZhdGUgbGVhZ3VlcyAtLT5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJsZWFndWVzLWNvbnRlbnRcXFwiIHVpLXZpZXc9XFxcImpvaW5MZWFndWVzQ29udGVudFxcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4vcHJpdmF0ZS9sZWFndWVzLmpvaW4ucHJpdmF0ZS50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4vcHJpdmF0ZS9sZWFndWVzLmpvaW4ucHJpdmF0ZS50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwicHJpdmF0ZS1sZWFndWVzIGxpc3QtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICA8YSBuZy1yZXBlYXQ9XFxcImxlYWd1ZSBpbiBwcml2YXRlTGVhZ3VlcyB8IG9wZW5MZWFndWVGaWx0ZXI6bGVhZ3VlT3B0aW9ucyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0IHwgb2Zmc2V0RmlsdGVyOihjdXJyZW50TGVhZ3VlUGFnZS0xKSpsZWFndWVzUGVyUGFnZSB8IGxpbWl0VG86bGVhZ3Vlc1BlclBhZ2VcXFwiIG5nLWNsaWNrPVxcXCJzaG93TGVhZ3VlKGxlYWd1ZSlcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZWFndWUtbmFtZSBjb2wtc20tNiBjb2wtbWQtNlxcXCIgbmctY2xhc3M9XFxcInsnY2xvc2VkJzogbGVhZ3VlLmNsb3NlZH1cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS10aW1lcyBmYS1md1xcXCIgdGl0bGU9XFxcIkNsb3NlZCBsZWFndWVcXFwiIG5nLXNob3c9XFxcImxlYWd1ZS5jbG9zZWQgJiYgIWlzQ29tbWlzaChsZWFndWUpXFxcIj48L2k+PGkgY2xhc3M9XFxcImZhIGZhLXVzZXIgZmEtZndcXFwiIHRpdGxlPVxcXCJNeSBsZWFndWVcXFwiIG5nLXNob3c9XFxcImlzQ29tbWlzaChsZWFndWUpXFxcIj48L2k+IHt7bGVhZ3VlLm5hbWV9fSA8c3BhbiBjbGFzcz1cXFwidGVhbS1jb3VudFxcXCI+e3tsZWFndWUubWF4X3RlYW1zX3Blcl91c2VyfX0gdGVhbXMgbWF4IHBlciB1c2VyPC9zcGFuPjwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInN0YXJ0LXdlZWtcXFwiPlN0YXJ0cyB7e2xlYWd1ZS5zdGFydF93ZWVrfX08L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJiYWRnZVxcXCI+e3tsZWFndWUudGVhbV9jb3VudH19IHRlYW1zPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvYT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8IS0tZHluYW1pYyBwYWdpbmF0aW9uLS0+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwicHJpdmF0ZS1sZWFndWUtcGFnaW5hdGlvblxcXCIgbmctc2hvdz1cXFwiKHByaXZhdGVMZWFndWVzIHwgb3BlbkxlYWd1ZUZpbHRlcjpsZWFndWVPcHRpb25zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aCA+IDBcXFwiPlxcblwiICtcbiAgICBcIiAgICA8cGFnaW5hdGlvbiBib3VuZGFyeS1saW5rcz1cXFwidHJ1ZVxcXCIgbWF4LXNpemU9XFxcIjRcXFwiIHRvdGFsLWl0ZW1zPVxcXCIocHJpdmF0ZUxlYWd1ZXMgfCBvcGVuTGVhZ3VlRmlsdGVyOmxlYWd1ZU9wdGlvbnMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCkubGVuZ3RoXFxcIiBpdGVtcy1wZXItcGFnZT1cXFwibGVhZ3Vlc1BlclBhZ2VcXFwiIG5nLW1vZGVsPVxcXCJjdXJyZW50TGVhZ3VlUGFnZVxcXCIgY2xhc3M9XFxcInBhZ2luYXRpb24tbWRcXFwiIHByZXZpb3VzLXRleHQ9XFxcIiZsc2FxdW87XFxcIiBuZXh0LXRleHQ9XFxcIiZyc2FxdW87XFxcIiBmaXJzdC10ZXh0PVxcXCImbGFxdW87XFxcIiBsYXN0LXRleHQ9XFxcIiZyYXF1bztcXFwiPjwvcGFnaW5hdGlvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IG5nLXNob3c9XFxcInByaXZhdGVMZWFndWVzLmxlbmd0aCA+IDBcXFwiIGNsYXNzPVxcXCJjbG9zZWQtbGVhZ3Vlcy1jaGVja2JveFxcXCI+XFxuXCIgK1xuICAgIFwiICA8bGFiZWw+PGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlT3B0aW9ucy5jbG9zZWRcXFwiPiBzaG93IGNsb3NlZCBsZWFndWVzPC9sYWJlbD5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IHN0eWxlPVxcXCJjbGVhcjogYm90aDtcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWluZm9cXFwiIG5nLXNob3c9XFxcIihwcml2YXRlTGVhZ3VlcyB8IG9wZW5MZWFndWVGaWx0ZXI6bGVhZ3VlT3B0aW9ucyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0KS5sZW5ndGggPT0gMFxcXCI+XFxuXCIgK1xuICAgIFwiICBObyBsZWFndWVzIGZvdW5kXFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4vcHVibGljL2xlYWd1ZXMuam9pbi5wdWJsaWMudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL3B1YmxpYy9sZWFndWVzLmpvaW4ucHVibGljLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJwdWJsaWMtbGVhZ3VlcyBsaXN0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGEgbmctcmVwZWF0PVxcXCJsZWFndWUgaW4gcHVibGljTGVhZ3VlcyB8IG9wZW5MZWFndWVGaWx0ZXI6bGVhZ3VlT3B0aW9ucyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0IHwgb2Zmc2V0RmlsdGVyOihjdXJyZW50TGVhZ3VlUGFnZS0xKSpsZWFndWVzUGVyUGFnZSB8IGxpbWl0VG86bGVhZ3Vlc1BlclBhZ2VcXFwiIG5nLWNsaWNrPVxcXCJzaG93TGVhZ3VlKGxlYWd1ZSlcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZWFndWUtbmFtZSBjb2wtc20tNiBjb2wtbWQtNlxcXCIgbmctY2xhc3M9XFxcInsnY2xvc2VkJzogbGVhZ3VlLmNsb3NlZH1cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS10aW1lcyBmYS1md1xcXCIgdGl0bGU9XFxcIkNsb3NlZCBsZWFndWVcXFwiIG5nLXNob3c9XFxcImxlYWd1ZS5jbG9zZWQgJiYgIWlzQ29tbWlzaChsZWFndWUpXFxcIj48L2k+PGkgY2xhc3M9XFxcImZhIGZhLXVzZXIgZmEtZndcXFwiIHRpdGxlPVxcXCJNeSBsZWFndWVcXFwiIG5nLXNob3c9XFxcImlzQ29tbWlzaChsZWFndWUpXFxcIj48L2k+IHt7bGVhZ3VlLm5hbWV9fSA8c3BhbiBjbGFzcz1cXFwidGVhbS1jb3VudFxcXCI+e3tsZWFndWUubWF4X3RlYW1zX3Blcl91c2VyfX0gdGVhbSBtYXggcGVyIHVzZXI8L3NwYW4+PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwic3RhcnQtd2Vla1xcXCI+U3RhcnRzIHt7bGVhZ3VlLnN0YXJ0X3dlZWt9fTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJhZGdlXFxcIj57e2xlYWd1ZS50ZWFtX2NvdW50fX0gdGVhbXM8L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9hPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjwhLS1keW5hbWljIHBhZ2luYXRpb24tLT5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJwdWJsaWMtbGVhZ3VlLXBhZ2luYXRpb25cXFwiIG5nLXNob3c9XFxcIihwdWJsaWNMZWFndWVzIHwgb3BlbkxlYWd1ZUZpbHRlcjpsZWFndWVPcHRpb25zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aCA+IDBcXFwiPlxcblwiICtcbiAgICBcIiAgICA8cGFnaW5hdGlvbiBib3VuZGFyeS1saW5rcz1cXFwidHJ1ZVxcXCIgbWF4LXNpemU9XFxcIjRcXFwiIHRvdGFsLWl0ZW1zPVxcXCIocHVibGljTGVhZ3VlcyB8IG9wZW5MZWFndWVGaWx0ZXI6bGVhZ3VlT3B0aW9ucyB8ZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aFxcXCIgaXRlbXMtcGVyLXBhZ2U9XFxcImxlYWd1ZXNQZXJQYWdlXFxcIiBuZy1tb2RlbD1cXFwiY3VycmVudExlYWd1ZVBhZ2VcXFwiIGNsYXNzPVxcXCJwYWdpbmF0aW9uLW1kXFxcIiBwcmV2aW91cy10ZXh0PVxcXCImbHNhcXVvO1xcXCIgbmV4dC10ZXh0PVxcXCImcnNhcXVvO1xcXCIgZmlyc3QtdGV4dD1cXFwiJmxhcXVvO1xcXCIgbGFzdC10ZXh0PVxcXCImcmFxdW87XFxcIj48L3BhZ2luYXRpb24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBuZy1zaG93PVxcXCJwdWJsaWNMZWFndWVzLmxlbmd0aCA+IDBcXFwiIGNsYXNzPVxcXCJjbG9zZWQtbGVhZ3Vlcy1jaGVja2JveFxcXCI+XFxuXCIgK1xuICAgIFwiICA8bGFiZWw+PGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlT3B0aW9ucy5jbG9zZWRcXFwiPiBzaG93IGNsb3NlZCBsZWFndWVzPC9sYWJlbD5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IHN0eWxlPVxcXCJjbGVhcjogYm90aDtcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWluZm9cXFwiIG5nLXNob3c9XFxcIihwdWJsaWNMZWFndWVzIHwgb3BlbkxlYWd1ZUZpbHRlcjpsZWFndWVPcHRpb25zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aCA9PSAwXFxcIj5cXG5cIiArXG4gICAgXCIgIE5vIGxlYWd1ZXMgZm91bmRcXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvbGVhZ3Vlcy50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2xlYWd1ZXMudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgdWktdmlldz1cXFwibGVhZ3Vlc0NvbnRlbnRcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9tYW5hZ2UvbGVhZ3Vlcy5tYW5hZ2UudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9tYW5hZ2UvbGVhZ3Vlcy5tYW5hZ2UudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1hbmFnZS1sZWFndWVzLWhlYWRlci1yb3cgcm93XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS05IGNvbC1tZC05XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGgzPk15IGxlYWd1ZXM8L2gzPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMyBjb2wtbWQtM1xcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcIm1hbmFnZS1sZWFndWVzLWJ0bi1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjcmVhdGUtbGVhZ3VlLWJ0biBidG4gYnRuLWRlZmF1bHQgYnRuLXNtXFxcIiBuZy1jbGljaz1cXFwiY3JlYXRlTGVhZ3VlKHNlYXNvbilcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1wbHVzIGZhLWZ3XFxcIj48L2k+IDxzdHJvbmc+Q3JlYXRlIExlYWd1ZTwvc3Ryb25nPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxocj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8IS0taWYgeW91IGhhdmUgbWFuYWdlZCBsZWFndWVzIChpLmUuIGlmIHlvdSdyZSBhIGNvbW1pc2gpLS0+XFxuXCIgK1xuICAgIFwiPGRpdiBuZy1zaG93PVxcXCJtYW5hZ2VkTGVhZ3Vlcy5sZW5ndGggPiAwXFxcIiBjbGFzcz1cXFwibGVhZ3Vlcy1jb250YWluZXJcXFwiPlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJtYW5hZ2VkLWxlYWd1ZXMgbGlzdC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8YSBuZy1yZXBlYXQ9XFxcImxlYWd1ZSBpbiBtYW5hZ2VkTGVhZ3VlcyB8IG9mZnNldEZpbHRlcjooY3VycmVudExlYWd1ZVBhZ2UtMSkqbGVhZ3Vlc1BlclBhZ2UgfCBsaW1pdFRvOmxlYWd1ZXNQZXJQYWdlXFxcIiBuZy1jbGljaz1cXFwidmlld0xlYWd1ZShsZWFndWUpXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZWFndWUtbmFtZSBjb2wtc20tNiBjb2wtbWQtNlxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXRpbWVzIGZhLWZ3XFxcIiB0aXRsZT1cXFwiQ2xvc2VkIGxlYWd1ZVxcXCIgbmctc2hvdz1cXFwibGVhZ3VlLmNsb3NlZFxcXCI+PC9pPjxpIGNsYXNzPVxcXCJmYSBmYS11c2VyIGZhLWZ3XFxcIiB0aXRsZT1cXFwiTXkgbGVhZ3VlXFxcIiBuZy1zaG93PVxcXCIhbGVhZ3VlLmNsb3NlZFxcXCI+PC9pPiB7e2xlYWd1ZS5uYW1lfX0gPHNwYW4gY2xhc3M9XFxcInRlYW0tY291bnRcXFwiPnt7bGVhZ3VlLnRlYW1fY291bnR9fSB0ZWFtczwvc3Bhbj48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInN0YXJ0LXdlZWtcXFwiPnt7c3RhcnRzKGxlYWd1ZSl9fTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJiYWRnZVxcXCI+Vmlldzwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2E+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgICA8IS0tZHluYW1pYyBwYWdpbmF0aW9uLS0+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcIm1hbmFnZS1sZWFndWUtcGFnaW5hdGlvblxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8cGFnaW5hdGlvbiBib3VuZGFyeS1saW5rcz1cXFwidHJ1ZVxcXCIgbWF4LXNpemU9XFxcIjRcXFwiIHRvdGFsLWl0ZW1zPVxcXCJtYW5hZ2VkTGVhZ3Vlcy5sZW5ndGhcXFwiIGl0ZW1zLXBlci1wYWdlPVxcXCJsZWFndWVzUGVyUGFnZVxcXCIgbmctbW9kZWw9XFxcImN1cnJlbnRMZWFndWVQYWdlXFxcIiBjbGFzcz1cXFwicGFnaW5hdGlvbi1tZFxcXCIgcHJldmlvdXMtdGV4dD1cXFwiJmxzYXF1bztcXFwiIG5leHQtdGV4dD1cXFwiJnJzYXF1bztcXFwiIGZpcnN0LXRleHQ9XFxcIiZsYXF1bztcXFwiIGxhc3QtdGV4dD1cXFwiJnJhcXVvO1xcXCI+PC9wYWdpbmF0aW9uPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBzdHlsZT1cXFwiY2xlYXI6IGJvdGg7XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8IS0taWYgeW91IGhhdmUgbm8gbWFuYWdlZCBsZWFndWVzLS0+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtaW5mb1xcXCIgbmctc2hvdz1cXFwibWFuYWdlZExlYWd1ZXMubGVuZ3RoID09IDBcXFwiPlxcblwiICtcbiAgICBcIiAgTm8gbWFuYWdlZCBsZWFndWVzLiA8YSBjbGFzcz1cXFwiYWxlcnQtbGlua1xcXCIgbmctY2xpY2s9XFxcImNyZWF0ZUxlYWd1ZShzZWFzb24pXFxcIj5DcmVhdGUgb25lPC9hPiBhbmQgaW52aXRlIGFsbCB5b3VyIGZyaWVuZHMuXFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS9waWNrL21ha2UvcGljay5tYWtlLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wcml2YXRlL3BpY2svbWFrZS9waWNrLm1ha2UudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPlBpY2sgYSBsb3NlciBmb3Ige3tnYW1lc1swXS53ZWVrX2Rpc3BsYXl9fTwvaDQ+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IG5nLXJlcGVhdC1zdGFydD1cXFwiZ2FtZSBpbiBnYW1lc1xcXCIgY2xhc3M9XFxcIndlZWstZ2FtZXMgbGlzdC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxoNCBuZy1jbGFzcz1cXFwieydpbnZhbGlkLWdhbWUnOiBnYW1lLnN0YXJ0ZWR9XFxcIj57e2dhbWUuZGlzcGxheX19IDxzbWFsbD57e3N0YXJ0cyhnYW1lKX19PC9zbWFsbD48L2g0PlxcblwiICtcbiAgICBcIiAgICA8YSBuZy1yZXBlYXQ9XFxcInNxdWFkIGluIGdhbWUuc3F1YWRzXFxcIiBuZy1jbGljaz1cXFwibWFrZVBpY2soZ2FtZSwgc3F1YWQpXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIiBuZy1jbGFzcz1cXFwieydkaXNhYmxlZCc6IGdhbWUuc3RhcnRlZCB8fCBoYXNTcXVhZEJlZW5Vc2VkKGdhbWUsIHNxdWFkKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzcXVhZC1uYW1lIGNvbC1zbS02IGNvbC1tZC02XFxcIiBuZy1jbGFzcz1cXFwieydpbnZhbGlkLXNxdWFkJzogaGFzU3F1YWRCZWVuVXNlZChnYW1lLCBzcXVhZCl9XFxcIj57e3NxdWFkLm5hbWV9fSA8c3BhbiBuZy1zaG93PVxcXCJnYW1lLnN0YXJ0ZWRcXFwiPlsge3tnZXRTY29yZShnYW1lLCAkaW5kZXgpfX0gXTwvc3Bhbj48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJhZGdlXFxcIiBuZy1zaG93PVxcXCIhZ2FtZS5zdGFydGVkICYmICFoYXNTcXVhZEJlZW5Vc2VkKGdhbWUsIHNxdWFkKVxcXCI+UGljazwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2E+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgbmctcmVwZWF0LWVuZD48L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvdGVhbS9lZGl0L3RlYW0uZWRpdC50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS90ZWFtL2VkaXQvdGVhbS5lZGl0LnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5FZGl0IFRlYW08L2gzPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgPGZvcm0gbmFtZT1cXFwiZWRpdFRlYW1Gb3JtXFxcIiBjbGFzcz1cXFwiZWRpdC10ZWFtLWZvcm0gZm9ybS1ob3Jpem9udGFsXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihlZGl0VGVhbUZvcm0udGVhbU5hbWUpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IoZWRpdFRlYW1Gb3JtLnRlYW1OYW1lKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxsYWJlbCBmb3I9XFxcInRlYW1OYW1lXFxcIiBjbGFzcz1cXFwiY29sLXNtLTMgY29udHJvbC1sYWJlbFxcXCI+VGVhbSBOYW1lOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTlcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGlucHV0IGlkPVxcXCJ0ZWFtTmFtZVxcXCIgbmFtZT1cXFwidGVhbU5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciBhIHRlYW0gbmFtZVxcXCIgbmctbW9kZWw9XFxcInRlYW1EYXRhLm5hbWVcXFwiIG5nLW1heGxlbmd0aD1cXFwiMjVcXFwiIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJpbnB1dC1lcnJvclxcXCIgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihlZGl0VGVhbUZvcm0udGVhbU5hbWUsICdyZXF1aXJlZCcpXFxcIj5SZXF1aXJlZDwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGVkaXRUZWFtRm9ybS50ZWFtTmFtZSwgJ21heGxlbmd0aCcpXFxcIj5Ub28gTG9uZzwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihlZGl0VGVhbUZvcm0udGVhbU5hbWUpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9mb3JtPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+Q2FuY2VsPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG5nLWRpc2FibGVkPVxcXCJlZGl0VGVhbUZvcm0uJGludmFsaWRcXFwiIG5nLWNsaWNrPVxcXCJlZGl0VGVhbSh0ZWFtRGF0YSlcXFwiPlVwZGF0ZTwvYnV0dG9uPlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvdGVhbS9tZXNzYWdlL3RlYW0ubWVzc2FnZS50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS90ZWFtL21lc3NhZ2UvdGVhbS5tZXNzYWdlLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5VcGRhdGUgdGVhbSBtZXNzYWdlPC9oMz5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgIDxmb3JtIG5hbWU9XFxcIm1lc3NhZ2VGb3JtXFxcIiBjbGFzcz1cXFwidGVhbS1tZXNzYWdlLWZvcm0gZm9ybS1ob3Jpem9udGFsXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihtZXNzYWdlRm9ybS5tZXNzYWdlKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKG1lc3NhZ2VGb3JtLm1lc3NhZ2UpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGxhYmVsIGZvcj1cXFwibWVzc2FnZVxcXCIgY2xhc3M9XFxcImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPk1lc3NhZ2U6PC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPHRleHRhcmVhIGlkPVxcXCJtZXNzYWdlXFxcIiBuYW1lPVxcXCJtZXNzYWdlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgYSBtZXNzYWdlIHRvIHB1dCBvbiB0aGUgdGVhbSdzIHdhbGwuLi5cXFwiIHJvd3M9XFxcIjNcXFwiIG1heGxlbmd0aD1cXFwiMjAwXFxcIiBuZy1tb2RlbD1cXFwidGVhbURhdGEubWVzc2FnZVxcXCI+PC90ZXh0YXJlYT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiaW5wdXQtZXJyb3JcXFwiIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobWVzc2FnZUZvcm0ubWVzc2FnZSwgJ21heGxlbmd0aCcpXFxcIj5Ub28gTG9uZzwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihtZXNzYWdlRm9ybS5tZXNzYWdlKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZm9ybT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiZW1haWwtdGVhbS1tZXNzYWdlLWNoZWNrYm94XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcIm1lc3NhZ2VPcHRpb25zLnNlbmRFbWFpbFxcXCI+IGVtYWlsIG1lc3NhZ2U8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+Q2FuY2VsPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG5nLWRpc2FibGVkPVxcXCJtZXNzYWdlRm9ybS4kcHJpc3RpbmUgfHwgbWVzc2FnZUZvcm0uJGludmFsaWRcXFwiIG5nLWNsaWNrPVxcXCJ1cGRhdGVNZXNzYWdlKHRlYW1EYXRhLCBtZXNzYWdlT3B0aW9ucy5zZW5kRW1haWwpXFxcIj5VcGRhdGU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL3RlYW0vdGVhbS50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS90ZWFtL3RlYW0udHBsLmh0bWxcIixcbiAgICBcIjxkaXYgdWktdmlldz1cXFwidGVhbUNvbnRlbnRcXFwiIGNsYXNzPVxcXCJ0ZWFtLWNvbnRlbnRcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvdGVhbS92aWV3L3RlYW0udmlldy50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS90ZWFtL3ZpZXcvdGVhbS52aWV3LnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiIG5nLXNob3c9XFxcIiF0ZWFtRGF0YS5hY3RpdmVcXFwiPlRoaXMgdGVhbSBoYXMgYmVlbiBkZWFjdGl2YXRlZCBieSB0aGUgY29tbWlzaC4gPGEgY2xhc3M9XFxcImFsZXJ0LWxpbmtcXFwiIG5nLWNsaWNrPVxcXCJjb250YWN0Q29tbWlzaCh0ZWFtRGF0YSlcXFwiPkNvbnRhY3QgdGhlIGNvbW1pc2g8L2E+IGlmIHlvdSBoYXZlIHF1ZXN0aW9ucy48L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJoZWFkZXItcm93IHJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOCBjb2wtbWQtOFxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxoMyBjbGFzcz1cXFwidGVhbS1uYW1lXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdGh1bWJzLXVwIGZhLWZ3XFxcIiB0aXRsZT1cXFwiQWxpdmVcXFwiIG5nLXNob3c9XFxcInRlYW1EYXRhLmFsaXZlXFxcIj48L2k+XFxuXCIgK1xuICAgIFwiICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXRodW1icy1kb3duIGZhLWZ3XFxcIiB0aXRsZT1cXFwiRGVhZFxcXCIgbmctc2hvdz1cXFwiIXRlYW1EYXRhLmFsaXZlXFxcIj48L2k+XFxuXCIgK1xuICAgIFwiICAgICAge3t0ZWFtRGF0YS5uYW1lfX0gPGJyPlxcblwiICtcbiAgICBcIiAgICAgIDxzbWFsbD48YSBuZy1jbGljaz1cXFwic2hvd0xlYWd1ZSh0ZWFtRGF0YSlcXFwiPnt7dGVhbURhdGEubGVhZ3VlLm5hbWV9fSBsZWFndWU8L2E+PC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgPC9oMz5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTQgY29sLW1kLTRcXFwiPlxcblwiICtcbiAgICBcIiAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcIm1ha2UtcGljay1idG4gYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVxcXCIgbmctc2hvdz1cXFwiaXNDb2FjaCh0ZWFtRGF0YSlcXFwiIG5nLWNsaWNrPVxcXCJtYWtlUGljayh0ZWFtRGF0YSlcXFwiPk1ha2UgUGljazwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXAgdGVhbS1hY3Rpb25zXFxcIiBuZy1zaG93PVxcXCJpc0NvYWNoKHRlYW1EYXRhKSB8fCBpc0NvbW1pc2godGVhbURhdGEpXFxcIiBkcm9wZG93biBpcy1vcGVuPVxcXCJjb2FjaC5pc29wZW5cXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYWN0aW9ucy1idG4gYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbSBkcm9wZG93bi10b2dnbGVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPHN0cm9uZz5BY3Rpb25zPC9zdHJvbmc+IDxzcGFuIGNsYXNzPVxcXCJjYXJldFxcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgIDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudSB0ZWFtLWFjdGlvbnMtbWVudVxcXCIgcm9sZT1cXFwibWVudVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGk+PGEgbmctY2xpY2s9XFxcImVkaXRUZWFtKHRlYW1EYXRhKVxcXCI+RWRpdCB0ZWFtPC9hPjwvbGk+XFxuXCIgK1xuICAgIFwiICAgICAgICA8bGk+PGEgbmctY2xpY2s9XFxcImNvbnRhY3RDb21taXNoKHRlYW1EYXRhKVxcXCI+Q29udGFjdCB0aGUgY29tbWlzaDwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgICAgPGxpIG5nLXNob3c9XFxcImlzQ29tbWlzaCh0ZWFtRGF0YSlcXFwiIGNsYXNzPVxcXCJkaXZpZGVyXFxcIj48L2xpPlxcblwiICtcbiAgICBcIiAgICAgICAgPGxpPjxhIG5nLXNob3c9XFxcImlzQ29tbWlzaCh0ZWFtRGF0YSlcXFwiIG5nLWNsaWNrPVxcXCJ1cGRhdGVNZXNzYWdlKHRlYW1EYXRhKVxcXCI+VXBkYXRlIHRlYW0gbWVzc2FnZTwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgICAgPGxpIG5nLXNob3c9XFxcImlzQ29tbWlzaCh0ZWFtRGF0YSkgJiYgIXRlYW1EYXRhLmFjdGl2ZVxcXCI+PGEgbmctY2xpY2s9XFxcImFjdGl2YXRlKHRlYW1EYXRhKVxcXCI+UmVhY3RpdmF0ZSB0aGlzIHRlYW08L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaSBuZy1zaG93PVxcXCJpc0NvbW1pc2godGVhbURhdGEpICYmIHRlYW1EYXRhLmFjdGl2ZVxcXCI+PGEgbmctY2xpY2s9XFxcImRlYWN0aXZhdGUodGVhbURhdGEpXFxcIj5EZWFjdGl2YXRlIHRoaXMgdGVhbTwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgIDwvdWw+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwidGVhbS1tZXNzYWdlIHdlbGwgd2VsbC1zbVxcXCI+PHN0cm9uZz5Gcm9tIHRoZSBjb21taXNoOjwvc3Ryb25nPiA8ZW0+e3ttZXNzYWdlKHRlYW1EYXRhKX19PC9lbT4gPGEgbmctc2hvdz1cXFwiaXNDb21taXNoKHRlYW1EYXRhKVxcXCIgbmctY2xpY2s9XFxcInVwZGF0ZU1lc3NhZ2UodGVhbURhdGEpXFxcIj5bIFVwZGF0ZSBdPC9hPjwvZGl2PlxcblwiICtcbiAgICBcIjxoND5QaWNrczwvaDQ+XFxuXCIgK1xuICAgIFwiPGhyPlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcInRlYW0tY29udGFpbmVyXFxcIiBzdHlsZT1cXFwiY2xlYXI6Ym90aDtcXFwiPlxcblwiICtcbiAgICBcIiAgPHRhYnNldD5cXG5cIiArXG4gICAgXCIgICAgPHRhYj5cXG5cIiArXG4gICAgXCIgICAgICA8dGFiLWhlYWRpbmc+UmVndWxhciBTZWFzb248L3RhYi1oZWFkaW5nPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcInJlZ3VsYXItcGlja3MgbGlzdC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8YSBuZy1yZXBlYXQ9XFxcInBpY2sgaW4gcmVndWxhclBpY2tzXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIiBuZy1jbGljaz1cXFwibWFrZVBpY2sodGVhbURhdGEpXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3ZWVrLW5hbWUgY29sLXNtLTggY29sLW1kLThcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWxvY2sgZmEtZndcXFwiIG5nLXNob3c9XFxcInBpY2subG9ja2VkICYmIHBpY2suY29ycmVjdCA9PSBudWxsXFxcIj48L2k+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdW5sb2NrIGZhLWZ3XFxcIiBuZy1zaG93PVxcXCIhcGljay5sb2NrZWQgJiYgcGljay5jb3JyZWN0ID09IG51bGxcXFwiPjwvaT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS10aW1lcyBmYS1md1xcXCIgbmctc2hvdz1cXFwicGljay5jb3JyZWN0ID09PSBmYWxzZVxcXCI+PC9pPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWNoZWNrIGZhLWZ3XFxcIiBuZy1zaG93PVxcXCJwaWNrLmNvcnJlY3QgPT09IHRydWVcXFwiPjwvaT4gWyB7e3BpY2suc3F1YWRfbmFtZX19IF0gPHNwYW4gY2xhc3M9XFxcImdhbWVcXFwiPnt7cGljay5nYW1lX2Rpc3BsYXl9fTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNCBjb2wtbWQtNFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwid2Vlay1sb3NlclxcXCI+e3twaWNrLndlZWtfZGlzcGxheX19PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJhZGdlXFxcIiBuZy1zaG93PVxcXCJ0ZWFtRGF0YS5hbGl2ZSAmJiAhcGljay5sb2NrZWQgJiYgaXNDb2FjaCh0ZWFtRGF0YSlcXFwiPkNoYW5nZTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2E+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtaW5mb1xcXCIgbmctc2hvdz1cXFwicmVndWxhclBpY2tzLmxlbmd0aCA9PSAwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIE5vIHJlZ3VsYXIgc2Vhc29uIHBpY2tzXFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvdGFiPlxcblwiICtcbiAgICBcIiAgICA8dGFiPlxcblwiICtcbiAgICBcIiAgICAgIDx0YWItaGVhZGluZz5QbGF5b2ZmczwvdGFiLWhlYWRpbmc+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwicGxheW9mZi1waWNrcyBsaXN0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxhIG5nLXJlcGVhdD1cXFwicGljayBpbiBwbGF5b2ZmUGlja3NcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiIG5nLWNsaWNrPVxcXCJtYWtlUGljayh0ZWFtRGF0YSlcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndlZWstbmFtZSBjb2wtc20tOCBjb2wtbWQtOFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtbG9jayBmYS1md1xcXCIgbmctc2hvdz1cXFwicGljay5sb2NrZWQgJiYgcGljay5jb3JyZWN0ID09IG51bGxcXFwiPjwvaT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS11bmxvY2sgZmEtZndcXFwiIG5nLXNob3c9XFxcIiFwaWNrLmxvY2tlZCAmJiBwaWNrLmNvcnJlY3QgPT0gbnVsbFxcXCI+PC9pPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXRpbWVzIGZhLWZ3XFxcIiBuZy1zaG93PVxcXCJwaWNrLmNvcnJlY3QgPT09IGZhbHNlXFxcIj48L2k+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY2hlY2sgZmEtZndcXFwiIG5nLXNob3c9XFxcInBpY2suY29ycmVjdCA9PT0gdHJ1ZVxcXCI+PC9pPiBbIHt7cGljay5zcXVhZF9uYW1lfX0gXSA8c3BhbiBjbGFzcz1cXFwiZ2FtZVxcXCI+e3twaWNrLmdhbWVfZGlzcGxheX19PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00IGNvbC1tZC00XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ3ZWVrLWxvc2VyXFxcIj57e3BpY2sud2Vla19kaXNwbGF5fX08L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYmFkZ2VcXFwiIG5nLXNob3c9XFxcInRlYW1EYXRhLmFsaXZlICYmICFwaWNrLmxvY2tlZCAmJiBpc0NvYWNoKHRlYW1EYXRhKVxcXCI+Q2hhbmdlPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvYT5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1pbmZvXFxcIiBuZy1zaG93PVxcXCJwbGF5b2ZmUGlja3MubGVuZ3RoID09IDBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgTm8gcGxheW9mZiBwaWNrc1xcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L3RhYj5cXG5cIiArXG4gICAgXCIgIDwvdGFic2V0PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvdGVhbXMvYWxpdmUvdGVhbXMuYWxpdmUudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvdGVhbXMvYWxpdmUvdGVhbXMuYWxpdmUudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcImFsaXZlLXRlYW1zIGxpc3QtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICA8YSBuZy1yZXBlYXQ9XFxcInRlYW0gaW4gYWxpdmVUZWFtcyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0IHwgb2Zmc2V0RmlsdGVyOihjdXJyZW50VGVhbVBhZ2UtMSkqdGVhbXNQZXJQYWdlIHwgbGltaXRUbzp0ZWFtc1BlclBhZ2VcXFwiIG5nLWNsaWNrPVxcXCJzaG93VGVhbShzZWFzb25JZCwgdGVhbSlcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0ZWFtLW5hbWUgY29sLXNtLTYgY29sLW1kLTZcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS11c2VyIGZhLWZ3XFxcIj48L2k+IHt7dGVhbS5uYW1lfX0gPHNwYW4gY2xhc3M9XFxcInRlYW0tbGVhZ3VlXFxcIj57e3RlYW0ubGVhZ3VlLm5hbWV9fTwvc3Bhbj48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjdXJyZW50LXBpY2tcXFwiIG5nLWNsYXNzPVxcXCJ7J25vLXBpY2snOiBoYXNOb1BpY2sodGVhbSl9XFxcIiBuZy1zaG93PVxcXCJ0ZWFtLmFjdGl2ZVxcXCI+Q3VycmVudCBQaWNrOiBbIHt7dGVhbS5sYXN0X3BpY2tfc3F1YWRfbmFtZX19IF08L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbmFjdGl2ZS10ZWFtXFxcIiBuZy1zaG93PVxcXCIhdGVhbS5hY3RpdmVcXFwiPkNvbnRhY3QgdGhlIGNvbW1pc2ggdG8gcmVhY3RpdmF0ZSB0ZWFtPC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYmFkZ2VcXFwiPlZpZXc8L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9hPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcImFsaXZlLXRlYW1zLXBhZ2luYXRpb25cXFwiIG5nLXNob3c9XFxcIihhbGl2ZVRlYW1zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aCA+IDBcXFwiPlxcblwiICtcbiAgICBcIiAgPHBhZ2luYXRpb24gYm91bmRhcnktbGlua3M9XFxcInRydWVcXFwiIG1heC1zaXplPVxcXCI0XFxcIiB0b3RhbC1pdGVtcz1cXFwiKGFsaXZlVGVhbXMgfCBmaWx0ZXI6c2VhcmNoOnN0cmljdCkubGVuZ3RoXFxcIiBpdGVtcy1wZXItcGFnZT1cXFwidGVhbXNQZXJQYWdlXFxcIiBuZy1tb2RlbD1cXFwiY3VycmVudFRlYW1QYWdlXFxcIiBjbGFzcz1cXFwicGFnaW5hdGlvbi1tZFxcXCIgcHJldmlvdXMtdGV4dD1cXFwiJmxzYXF1bztcXFwiIG5leHQtdGV4dD1cXFwiJnJzYXF1bztcXFwiIGZpcnN0LXRleHQ9XFxcIiZsYXF1bztcXFwiIGxhc3QtdGV4dD1cXFwiJnJhcXVvO1xcXCI+PC9wYWdpbmF0aW9uPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgc3R5bGU9XFxcImNsZWFyOiBib3RoO1xcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtaW5mb1xcXCIgbmctc2hvdz1cXFwiYWxpdmVUZWFtcy5sZW5ndGggPT0gMFxcXCI+XFxuXCIgK1xuICAgIFwiICBObyBhbGl2ZSB0ZWFtcyA6KCBNYXliZSB5b3Ugc2hvdWxkIDxhIGNsYXNzPVxcXCJhbGVydC1saW5rXFxcIiBuZy1jbGljaz1cXFwiY3JlYXRlVGVhbShzZWFzb25JZClcXFwiPmpvaW4gYSBsZWFndWU8L2E+IHByb250byFcXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCJcIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wcml2YXRlL3RlYW1zL2RlYWQvdGVhbXMuZGVhZC50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHJpdmF0ZS90ZWFtcy9kZWFkL3RlYW1zLmRlYWQudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcImRlYWQtdGVhbXMgbGlzdC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICA8YSBuZy1yZXBlYXQ9XFxcInRlYW0gaW4gZGVhZFRlYW1zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QgfCBvZmZzZXRGaWx0ZXI6KGN1cnJlbnRUZWFtUGFnZS0xKSp0ZWFtc1BlclBhZ2UgfCBsaW1pdFRvOnRlYW1zUGVyUGFnZVxcXCIgbmctY2xpY2s9XFxcInNob3dUZWFtKHNlYXNvbklkLCB0ZWFtKVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRlYW0tbmFtZSBjb2wtc20tNiBjb2wtbWQtNlxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXVzZXIgZmEtZndcXFwiPjwvaT4ge3t0ZWFtLm5hbWV9fSA8c3BhbiBjbGFzcz1cXFwidGVhbS1sZWFndWVcXFwiPnt7dGVhbS5sZWFndWUubmFtZX19PC9zcGFuPjwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImN1cnJlbnQtcGlja1xcXCIgbmctY2xhc3M9XFxcInsnbm8tcGljayc6IGhhc05vUGljayh0ZWFtKX1cXFwiIG5nLXNob3c9XFxcInRlYW0uYWN0aXZlXFxcIj5MYXN0IFBpY2s6IFsge3t0ZWFtLmxhc3RfcGlja19zcXVhZF9uYW1lfX0gXTwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImluYWN0aXZlLXRlYW1cXFwiIG5nLXNob3c9XFxcIiF0ZWFtLmFjdGl2ZVxcXCI+RGVhY3RpdmF0ZWQgYnkgdGhlIGNvbW1pc2g8L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJiYWRnZVxcXCI+Vmlldzwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2E+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwiZGVhZC10ZWFtcy1wYWdpbmF0aW9uXFxcIiBuZy1zaG93PVxcXCIoZGVhZFRlYW1zIHwgZmlsdGVyOnNlYXJjaDpzdHJpY3QpLmxlbmd0aCA+IDBcXFwiPlxcblwiICtcbiAgICBcIiAgPHBhZ2luYXRpb24gYm91bmRhcnktbGlua3M9XFxcInRydWVcXFwiIG1heC1zaXplPVxcXCI0XFxcIiB0b3RhbC1pdGVtcz1cXFwiKGRlYWRUZWFtcyB8IGZpbHRlcjpzZWFyY2g6c3RyaWN0KS5sZW5ndGhcXFwiIGl0ZW1zLXBlci1wYWdlPVxcXCJ0ZWFtc1BlclBhZ2VcXFwiIG5nLW1vZGVsPVxcXCJjdXJyZW50VGVhbVBhZ2VcXFwiIGNsYXNzPVxcXCJwYWdpbmF0aW9uLW1kXFxcIiBwcmV2aW91cy10ZXh0PVxcXCImbHNhcXVvO1xcXCIgbmV4dC10ZXh0PVxcXCImcnNhcXVvO1xcXCIgZmlyc3QtdGV4dD1cXFwiJmxhcXVvO1xcXCIgbGFzdC10ZXh0PVxcXCImcmFxdW87XFxcIj48L3BhZ2luYXRpb24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBzdHlsZT1cXFwiY2xlYXI6IGJvdGg7XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1pbmZvXFxcIiBuZy1zaG93PVxcXCJkZWFkVGVhbXMubGVuZ3RoID09IDBcXFwiPlxcblwiICtcbiAgICBcIiAgTm8gZGVhZCB0ZWFtcyA6KVxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3ByaXZhdGUvdGVhbXMvdGVhbXMudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvdGVhbXMvdGVhbXMudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcInRlYW1zLWhlYWRlci1yb3cgcm93XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS05IGNvbC1tZC05XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGgzPk15IHRlYW1zPC9oMz5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTMgY29sLW1kLTNcXFwiPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJ0ZWFtcy1idG4tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY3JlYXRlLXRlYW0tYnRuIGJ0biBidG4tZGVmYXVsdCBidG4tc21cXFwiIG5nLWNsaWNrPVxcXCJjcmVhdGVUZWFtKHNlYXNvbklkKVxcXCI+PHN0cm9uZz5Kb2luIExlYWd1ZTwvc3Ryb25nPjwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxocj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJ0ZWFtcy1jb250YWluZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2LXRhYnNcXFwiPlxcblwiICtcbiAgICBcIiAgICA8bGkgbmctY2xhc3M9XFxcInsnYWN0aXZlJzogaXNBbGl2ZVN0YXRlKCl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YSBuZy1jbGljaz1cXFwiYWxpdmVUZWFtcyhzZWFzb25JZClcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS10aHVtYnMtdXAgZmEtZndcXFwiPjwvaT4gQWxpdmUgVGVhbXM8L2E+XFxuXCIgK1xuICAgIFwiICAgIDwvbGk+XFxuXCIgK1xuICAgIFwiICAgIDxsaSBuZy1jbGFzcz1cXFwieydhY3RpdmUnOiAhaXNBbGl2ZVN0YXRlKCl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8YSBuZy1jbGljaz1cXFwiZGVhZFRlYW1zKHNlYXNvbklkKVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXRodW1icy1kb3duIGZhLWZ3XFxcIj48L2k+IERlYWQgVGVhbXM8L2E+XFxuXCIgK1xuICAgIFwiICAgIDwvbGk+XFxuXCIgK1xuICAgIFwiICA8L3VsPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjwhLS0gcGxhY2Vob2xkZXIgZm9yIGFsaXZlIGFuZCBkZWFkIHRlYW1zIC0tPlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcInRlYW1zLWNvbnRlbnRcXFwiIHVpLXZpZXc9XFxcInRlYW1zQ29udGVudFxcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS91c2VyL3Jlc2V0L3VzZXIucmVzZXQudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvdXNlci9yZXNldC91c2VyLnJlc2V0LnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5SZXNldCBwYXNzd29yZDwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8Zm9ybSBuYW1lPVxcXCJyZXNldFBhc3N3b3JkRm9ybVxcXCIgY2xhc3M9XFxcInJlc2V0LXBhc3N3b3JkLWZvcm0gZm9ybS1ob3Jpem9udGFsXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihyZXNldFBhc3N3b3JkRm9ybS5lbWFpbCksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihyZXNldFBhc3N3b3JkRm9ybS5lbWFpbCl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8bGFiZWwgZm9yPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPkVtYWlsOjwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxpbnB1dCBpZD1cXFwiZW1haWxcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiB0eXBlPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVudGVyIHlvdXIgZW1haWxcXFwiIG5nLW1vZGVsPVxcXCJ1c2VyRGF0YS5lbWFpbFxcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c21hbGwgY2xhc3M9XFxcImlucHV0LWVycm9yXFxcIiBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKHJlc2V0UGFzc3dvcmRGb3JtLmVtYWlsLCAncmVxdWlyZWQnKVxcXCI+UmVxdWlyZWQ8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJpbnB1dC1lcnJvclxcXCIgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihyZXNldFBhc3N3b3JkRm9ybS5lbWFpbCwgJ2VtYWlsJylcXFwiPkludmFsaWQgZW1haWw8L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IocmVzZXRQYXNzd29yZEZvcm0uZW1haWwpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgPC9mb3JtPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJjYW5jZWwoKVxcXCI+Q2FuY2VsPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG5nLWRpc2FibGVkPVxcXCJyZXNldFBhc3N3b3JkRm9ybS4kcHJpc3RpbmUgfHwgcmVzZXRQYXNzd29yZEZvcm0uJGludmFsaWRcXFwiIG5nLWNsaWNrPVxcXCJyZXNldCh1c2VyRGF0YS5lbWFpbClcXFwiPlJlc2V0PC9idXR0b24+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHJpdmF0ZS91c2VyL3VzZXIudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3ByaXZhdGUvdXNlci91c2VyLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxoMyBjbGFzcz1cXFwicGFuZWwtdGl0bGVcXFwiPlVzZXIgUHJvZmlsZTwvaDM+XFxuXCIgK1xuICAgIFwiICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxmb3JtIG5hbWU9XFxcImVkaXRVc2VyRm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihlZGl0VXNlckZvcm0uZmlyc3ROYW1lKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKGVkaXRVc2VyRm9ybS5maXJzdE5hbWUpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJmaXJzdE5hbWVcXFwiPkZpcnN0IE5hbWVcXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGVkaXRVc2VyRm9ybS5maXJzdE5hbWUsICdyZXF1aXJlZCcpXFxcIj5bIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoZWRpdFVzZXJGb3JtLmZpcnN0TmFtZSwgJ21heGxlbmd0aCcpXFxcIj5bIFRvbyBMb25nIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcImZpcnN0TmFtZVxcXCIgbmFtZT1cXFwiZmlyc3ROYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidXNlckRhdGEudXNlci5maXJzdF9uYW1lXFxcIiBuZy1tYXhsZW5ndGg9XFxcIjE1XFxcIiByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IoZWRpdFVzZXJGb3JtLmZpcnN0TmFtZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKGVkaXRVc2VyRm9ybS5sYXN0TmFtZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihlZGl0VXNlckZvcm0ubGFzdE5hbWUpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJsYXN0TmFtZVxcXCI+TGFzdCBOYW1lXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihlZGl0VXNlckZvcm0ubGFzdE5hbWUsICdyZXF1aXJlZCcpXFxcIj5bIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoZWRpdFVzZXJGb3JtLmxhc3ROYW1lLCAnbWF4bGVuZ3RoJylcXFwiPlsgVG9vIExvbmcgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwibGFzdE5hbWVcXFwiIG5hbWU9XFxcImxhc3ROYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidXNlckRhdGEudXNlci5sYXN0X25hbWVcXFwiIG5nLW1heGxlbmd0aD1cXFwiMjBcXFwiIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihlZGl0VXNlckZvcm0ubGFzdE5hbWUpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImVtYWlsXFxcIj5FbWFpbDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcImVtYWlsXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLWRpc2FibGVkPVxcXCJ0cnVlXFxcIiBuZy1tb2RlbD1cXFwidXNlckRhdGEudXNlci5lbWFpbFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKGVkaXRVc2VyRm9ybS5wYXNzd29yZCksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihlZGl0VXNlckZvcm0ucGFzc3dvcmQpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJwYXNzd29yZFxcXCI+TmV3IFBhc3N3b3JkXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihlZGl0VXNlckZvcm0ucGFzc3dvcmQsICdyZXF1aXJlZCcpXFxcIj5bIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoZWRpdFVzZXJGb3JtLnBhc3N3b3JkLCAnbWlubGVuZ3RoJylcXFwiPlsgNiAtIDE1IENoYXJhY3RlcnMgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihlZGl0VXNlckZvcm0ucGFzc3dvcmQsICdtYXhsZW5ndGgnKVxcXCI+WyA2IC0gMTUgQ2hhcmFjdGVycyBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwicGFzc3dvcmRcXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidXNlckRhdGEudXNlci5wYXNzd29yZFxcXCIgbmctbWlubGVuZ3RoPVxcXCI2XFxcIiBuZy1tYXhsZW5ndGg9XFxcIjE1XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IoZWRpdFVzZXJGb3JtLnBhc3N3b3JkKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IoZWRpdFVzZXJGb3JtLmNvbmZpcm1QYXNzd29yZCksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihlZGl0VXNlckZvcm0uY29uZmlybVBhc3N3b3JkKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiY29uZmlybVBhc3N3b3JkXFxcIj5Db25maXJtIE5ldyBQYXNzd29yZFxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IoZWRpdFVzZXJGb3JtLmNvbmZpcm1QYXNzd29yZCwgJ21hdGNoJylcXFwiPlsgRG9lc24ndCBNYXRjaCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiIG5hbWU9XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJ1c2VyRGF0YS51c2VyLnBhc3N3b3JkX2NvbmZpcm1hdGlvblxcXCIgbWF0Y2g9XFxcInVzZXJEYXRhLnVzZXIucGFzc3dvcmRcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihlZGl0VXNlckZvcm0uY29uZmlybVBhc3N3b3JkKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4taW5mbyBidG4tYmxvY2tcXFwiIG5nLWRpc2FibGVkPVxcXCJlZGl0VXNlckZvcm0uJHByaXN0aW5lIHx8IGVkaXRVc2VyRm9ybS4kaW52YWxpZFxcXCIgbmctY2xpY2s9XFxcInVwZGF0ZSh1c2VyRGF0YS51c2VyKVxcXCI+VXBkYXRlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgICAgPC9mb3JtPlxcblwiICtcbiAgICBcIiAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvcHVibGljL2ZhcS9mYXEudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3B1YmxpYy9mYXEvZmFxLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgbmctY2xpY2s9XFxcImNsb3NlKClcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgIDxoMyBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkZBUTwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8cD5ob3cgdG8gcGxheTwvcD5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2xvc2UoKVxcXCI+Q2xvc2U8L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wdWJsaWMvaG9tZS9ob21lLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9wdWJsaWMvaG9tZS9ob21lLnRwbC5odG1sXCIsXG4gICAgXCJcXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwiaG9tZS1jb250ZW50LWNvbnRhaW5lclxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8aDEgY2xhc3M9XFxcImhlYWRlci1qdW1ib1xcXCI+UGljayBPbmUgTG9zZXIuPC9oMT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxwIGNsYXNzPVxcXCJsZWFkXFxcIj5FYWNoIHdlZWsgcGljayBvbmx5IG9uZSBsb3Nlci4gR2V0IGl0IHJpZ2h0IGFuZCBtb3ZlIG9uIHRvIHRoZSBuZXh0IHdlZWsuIEdldCBpdCB3cm9uZyBhbmQgeW91J3JlIG91dC48L3A+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICA8YSBjbGFzcz1cXFwiY3RhIGJ0biBidG4tcHJpbWFyeSBidG4tbGdcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCIgbmctY2xpY2s9XFxcImpvaW5MZWFndWUoc2Vhc29uKVxcXCI+Sm9pbiBMZWFndWU8L2E+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxhIGNsYXNzPVxcXCJjdGEgYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1xcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIiBuZy1jbGljaz1cXFwiY3JlYXRlTGVhZ3VlKHNlYXNvbilcXFwiPkNyZWF0ZSBMZWFndWU8L2E+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiICAgIDwhLS08ZGl2IHVpLXZpZXc9XFxcImNvbnRlbnRcXFwiPjwvZGl2Pi0tPlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci9yZWdpc3Rlci50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHVibGljL3JlZ2lzdGVyL3JlZ2lzdGVyLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgbmctY2xpY2s9XFxcImNhbmNlbCgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5SZWdpc3RlcjwvaDM+XFxuXCIgK1xuICAgIFwiPC9kaXY+XFxuXCIgK1xuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICA8Zm9ybSBuYW1lPVxcXCJuZXdVc2VyRm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZT5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihuZXdVc2VyRm9ybS5maXJzdE5hbWUpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IobmV3VXNlckZvcm0uZmlyc3ROYW1lKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiZmlyc3ROYW1lXFxcIj5GaXJzdCBOYW1lXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobmV3VXNlckZvcm0uZmlyc3ROYW1lLCAncmVxdWlyZWQnKVxcXCI+WyBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihuZXdVc2VyRm9ybS5maXJzdE5hbWUsICdtYXhsZW5ndGgnKVxcXCI+WyBUb28gTG9uZyBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJmaXJzdE5hbWVcXFwiIG5hbWU9XFxcImZpcnN0TmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcIm5ld1VzZXJEYXRhLmZpcnN0X25hbWVcXFwiIG5nLW1heGxlbmd0aD1cXFwiMTVcXFwiIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihuZXdVc2VyRm9ybS5maXJzdE5hbWUpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihuZXdVc2VyRm9ybS5sYXN0TmFtZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihuZXdVc2VyRm9ybS5sYXN0TmFtZSl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImxhc3ROYW1lXFxcIj5MYXN0IE5hbWVcXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihuZXdVc2VyRm9ybS5sYXN0TmFtZSwgJ3JlcXVpcmVkJylcXFwiPlsgUmVxdWlyZWQgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobmV3VXNlckZvcm0ubGFzdE5hbWUsICdtYXhsZW5ndGgnKVxcXCI+WyBUb28gTG9uZyBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJsYXN0TmFtZVxcXCIgbmFtZT1cXFwibGFzdE5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJuZXdVc2VyRGF0YS5sYXN0X25hbWVcXFwiIG5nLW1heGxlbmd0aD1cXFwiMjBcXFwiIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihuZXdVc2VyRm9ybS5sYXN0TmFtZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwibmlja25hbWUgcm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTEyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwibmlja25hbWVcXFwiPk5pY2tuYW1lPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJuaWNrbmFtZVxcXCIgbmFtZT1cXFwibmlja25hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJuZXdVc2VyRGF0YS5uaWNrbmFtZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihuZXdVc2VyRm9ybS5lbWFpbCksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihuZXdVc2VyRm9ybS5lbWFpbCl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImVtYWlsXFxcIj5FbWFpbFxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld1VzZXJGb3JtLmVtYWlsLCAncmVxdWlyZWQnKVxcXCI+WyBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihuZXdVc2VyRm9ybS5lbWFpbCwgJ2VtYWlsJylcXFwiPlsgSW52YWxpZCBFbWFpbCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJlbWFpbFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIHR5cGU9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwibmV3VXNlckRhdGEuZW1haWxcXFwiIHBsYWNlaG9sZGVyPVxcXCJZb3VyIGVtYWlsIHdpbGwgTk9UIGJlIHNoYXJlZCB3aXRoIGFueWJvZHkuLi5cXFwiIGxvZ2gtZm9jdXMgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKG5ld1VzZXJGb3JtLmVtYWlsKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKG5ld1VzZXJGb3JtLnBhc3N3b3JkKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKG5ld1VzZXJGb3JtLnBhc3N3b3JkKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwicGFzc3dvcmRcXFwiPlBhc3N3b3JkXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobmV3VXNlckZvcm0ucGFzc3dvcmQsICdyZXF1aXJlZCcpXFxcIj5bIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld1VzZXJGb3JtLnBhc3N3b3JkLCAnbWlubGVuZ3RoJylcXFwiPlsgNiAtIDE1IENoYXJhY3RlcnMgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobmV3VXNlckZvcm0ucGFzc3dvcmQsICdtYXhsZW5ndGgnKVxcXCI+WyA2IC0gMTUgQ2hhcmFjdGVycyBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwicGFzc3dvcmRcXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwibmV3VXNlckRhdGEucGFzc3dvcmRcXFwiIG5nLW1pbmxlbmd0aD1cXFwiNlxcXCIgbmctbWF4bGVuZ3RoPVxcXCIxNVxcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKG5ld1VzZXJGb3JtLnBhc3N3b3JkKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IobmV3VXNlckZvcm0uY29uZmlybVBhc3N3b3JkKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKG5ld1VzZXJGb3JtLmNvbmZpcm1QYXNzd29yZCl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImNvbmZpcm1QYXNzd29yZFxcXCI+Q29uZmlybSBQYXNzd29yZFxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld1VzZXJGb3JtLmNvbmZpcm1QYXNzd29yZCwgJ21hdGNoJylcXFwiPlsgRG9lc24ndCBNYXRjaCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IGlkPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiIG5hbWU9XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJuZXdVc2VyRGF0YS5wYXNzd29yZF9jb25maXJtYXRpb25cXFwiIG1hdGNoPVxcXCJuZXdVc2VyRGF0YS5wYXNzd29yZFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKG5ld1VzZXJGb3JtLmNvbmZpcm1QYXNzd29yZClcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwidGVybXMgd2VsbCB3ZWxsLXNtXFxcIj48c3Ryb25nPkJ5IGNsaWNraW5nIHJlZ2lzdGVyLCB5b3UgYWdyZWUgdG8gdGhlIDxhIG5nLWNsaWNrPVxcXCJzaG93VGVybXMoKVxcXCI+dGVybXMgb2YgdXNlLjwvYT48L3N0cm9uZz48L2Rpdj5cXG5cIiArXG4gICAgXCIgIDwvZm9ybT5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2FuY2VsKClcXFwiPkNhbmNlbDwvYnV0dG9uPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG5nLWRpc2FibGVkPVxcXCJuZXdVc2VyRm9ybS4kaW52YWxpZFxcXCIgbmctY2xpY2s9XFxcInJlZ2lzdGVyKG5ld1VzZXJEYXRhKVxcXCI+UmVnaXN0ZXI8L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXIvdGVybXMvcmVnaXN0ZXIudGVybXMudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci90ZXJtcy9yZWdpc3Rlci50ZXJtcy50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG5cIiArXG4gICAgXCIgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCJjbG9zZSgpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2U8L3NwYW4+PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICA8aDMgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5UZXJtcyBvZiBVc2U8L2gzPlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgPHA+YSBidW5jaCBvZiBzdHVmZjwvcD5cXG5cIiArXG4gICAgXCI8L2Rpdj5cXG5cIiArXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcblwiICtcbiAgICBcIiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwiY2xvc2UoKVxcXCI+Q2xvc2U8L2J1dHRvbj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wdWJsaWMvc2lnbmluL3NpZ25pbi50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvcHVibGljL3NpZ25pbi9zaWduaW4udHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcInNpZ25pbi1ib3ggcGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxuXCIgK1xuICAgIFwiICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgICAgPGZvcm0gbmFtZT1cXFwic2lnbmluRm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbmctc3VibWl0PVxcXCJzaWduaW4oY3JlZGVudGlhbHMpXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1lbnZlbG9wZSBmYS1md1xcXCI+PC9pPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW1haWxcXFwiIG5nLW1vZGVsPVxcXCJjcmVkZW50aWFscy5lbWFpbFxcXCIgYXV0b2ZvY3VzIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWtleSBmYS1md1xcXCI+PC9pPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiUGFzc3dvcmRcXFwiIG5nLW1vZGVsPVxcXCJjcmVkZW50aWFscy5wYXNzd29yZFxcXCIgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8ZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPGEgY2xhc3M9XFxcImZvcmdvdC1wYXNzd29yZCBidG4gYnRuLWxpbmsgcHVsbC1sZWZ0XFxcIiByb2xlPVxcXCJidXR0b25cXFwiIG5nLWNsaWNrPVxcXCJyZXNldFBhc3N3b3JkKClcXFwiPkZvcmdvdCBQYXNzd29yZD88L2E+XFxuXCIgK1xuICAgIFwiICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcInNpZ24taW4tYnRuIGJ0biBidG4tcHJpbWFyeSBwdWxsLXJpZ2h0XFxcIj5TaWduIGluPC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBzdHlsZT1cXFwiY2xlYXI6IGJvdGg7XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICA8aHI+XFxuXCIgK1xuICAgIFwiICAgICAgPGRpdiBjbGFzcz1cXFwicmVnaXN0ZXJcXFwiPjxhIG5nLWNsaWNrPVxcXCJyZWdpc3RlcigpXFxcIj5Eb24ndCBoYXZlIGFuIGFjY291bnQ/IDxzdHJvbmc+UmVnaXN0ZXI8L3N0cm9uZz48L2E+PC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZm9ybT5cXG5cIiArXG4gICAgXCIgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcbiIsIid1c2Ugc3RyaWN0JztcbnJlcXVpcmUoJ2FwcC10ZW1wbGF0ZXMnKTtcblxuXG52YXIgQXBwID0gZnVuY3Rpb24oJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgLy8gdW5tYXRjaGVkIHVybHMgc2hvdWxkIGJlIGRpcmVjdGVkIGJhY2sgdG8gdGhlIHN0YXJ0XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xufTtcblxuQXBwLiRpbmplY3QgPSBbJyR1cmxSb3V0ZXJQcm92aWRlciddO1xuXG52YXIgbG9naEFwcCA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwJywgW1xuICAgICduZ0Nvb2tpZXMnLFxuICAgICduZ1Jlc291cmNlJyxcbiAgICAnbmdTYW5pdGl6ZScsXG4gICAgJ25nUm91dGUnLFxuICAgICdjb21tYW5ndWxhcicsXG4gICAgJ3VpLnJvdXRlcicsXG4gICAgJ3VpLmJvb3RzdHJhcCcsXG4gICAgJ2FwcC50ZW1wbGF0ZXMnLFxuICAgICd1aS5yb3V0ZXIuc3RhdGVIZWxwZXInLFxuICAgICdhbmd1bGFyLWxvYWRpbmctYmFyJyxcblxuICAgIC8vIHB1YmxpYyBtb2R1bGVzXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3B1YmxpYy9ob21lJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHVibGljL2ZhcScpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3B1YmxpYy9zaWduaW4nKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXInKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXIvdGVybXMnKS5uYW1lLFxuXG4gICAgLy8gcHJpdmF0ZSBtb2R1bGVzXG4gICAgLy8gdXNlclxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL3VzZXInKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL3VzZXIvcmVzZXQnKS5uYW1lLFxuICAgIC8vIGxlYWd1ZVxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2xlYWd1ZScpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL25ldycpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL3ZpZXcnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9lZGl0JykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvY29udGFjdCcpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL21lc3NhZ2UnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9qb2luJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlL3JlcXVlc3QnKS5uYW1lLFxuICAgIC8vIGxlYWd1ZXNcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4nKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9wdWJsaWMnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvam9pbi9wcml2YXRlJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL21hbmFnZScpLm5hbWUsXG4gICAgLy8gdGVhbVxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL3RlYW0nKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL3RlYW0vdmlldycpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvdGVhbS9lZGl0JykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS90ZWFtL21lc3NhZ2UnKS5uYW1lLFxuICAgIC8vIHRlYW1zXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvdGVhbXMnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9wcml2YXRlL3RlYW1zL2FsaXZlJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHJpdmF0ZS90ZWFtcy9kZWFkJykubmFtZSxcbiAgICAvLyBwaWNrXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3ByaXZhdGUvcGljay9tYWtlJykubmFtZSxcblxuICAgIC8vIGhlbHBlciBtb2R1bGVzXG4gICAgcmVxdWlyZSgnLi9jb21tb24vbW9kdWxlcy9oZWFkZXInKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vY29tbW9uL21vZHVsZXMvbWVzc2FnZScpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9jb21tb24vbW9kdWxlcy9mb290ZXInKS5uYW1lLFxuXG4gICAgcmVxdWlyZSgnLi9jb21tb24vYXNwZWN0cycpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9jb21tb24vbW9kZWxzJykubmFtZSxcbiAgICByZXF1aXJlKCcuL2NvbW1vbi9hcGknKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vY29tbW9uL2NvbW1hbmQnKS5uYW1lLFxuXG4gICAgcmVxdWlyZSgnLi9jb21tb24vc2VydmljZS9hcHBsaWNhdGlvbicpLm5hbWUsXG5cbiAgICAvL2RpcmVjdGl2ZXNcbiAgICByZXF1aXJlKCcuL2NvbW1vbi9kaXJlY3RpdmVzL2ZvY3VzJykubmFtZSxcbiAgICByZXF1aXJlKCcuL2NvbW1vbi9kaXJlY3RpdmVzL21hdGNoJykubmFtZSxcbiAgICByZXF1aXJlKCcuL2NvbW1vbi9kaXJlY3RpdmVzL3JlcXVpcmVkUGF0dGVybicpLm5hbWUsXG5cbiAgICAvL21vZGFsc1xuXG4gICAgLy9maWx0ZXJzXG4gICAgcmVxdWlyZSgnLi9jb21tb24vZmlsdGVycycpLm5hbWVcblxuICAgIF0sIEFwcClcblxuICAgIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyLCAkbG9nUHJvdmlkZXIsICR1aVZpZXdTY3JvbGxQcm92aWRlciwgJGFuY2hvclNjcm9sbFByb3ZpZGVyKSB7XG4gICAgICAgIC8vIHVzZSB0aGUgSFRNTDUgSGlzdG9yeSBBUElcbiAgICAgICAgJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKGZhbHNlKTtcblxuICAgICAgICAvLyBkaXNhYmxlcyBhdXRvLXNjcm9sbFxuICAgICAgICAkdWlWaWV3U2Nyb2xsUHJvdmlkZXIudXNlQW5jaG9yU2Nyb2xsKCk7XG4gICAgICAgICRhbmNob3JTY3JvbGxQcm92aWRlci5kaXNhYmxlQXV0b1Njcm9sbGluZygpO1xuXG4gICAgICAgIC8vIHR1cm5zIG9uL29mZiBkZWJ1ZyBjb25zb2xlIGxvZyBzdGF0ZW1lbnRzXG4gICAgICAgICRsb2dQcm92aWRlci5kZWJ1Z0VuYWJsZWQodHJ1ZSk7XG5cbiAgICAgICAgLy8gZGVmaW5lcyByb290IHN0YXRlc1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdwdWJsaWMnLCB7XG4gICAgICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgdXJsOiAnLycsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vdGVtcGxhdGVzL21hc3Rlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2Vhc29uOiBmdW5jdGlvbihzZWFzb25TZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2Vhc29uU2VydmljZS5nZXRDdXJyZW50U2Vhc29uKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdwcml2YXRlJywge1xuICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHVybDogJy8nLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL3RlbXBsYXRlcy9tYXN0ZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFNlYXNvbjogZnVuY3Rpb24oc2Vhc29uU2VydmljZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlYXNvblNlcnZpY2UuZ2V0Q3VycmVudFNlYXNvbigpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB1c2VyOiBmdW5jdGlvbihjdXJyZW50U2Vhc29uLCB1c2VyU2VydmljZSwgdXNlck1vZGVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXNlck1vZGVsLnVzZXIubG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZXJNb2RlbC51c2VyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXNlclNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgfSlcblxuICAgIC5ydW4oZnVuY3Rpb24oJHJvb3RTY29wZSwgJHVybFJvdXRlciwgJGxvZywgYXBwbGljYXRpb25TZXJ2aWNlKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJBcHBsaWNhdGlvbiBzdGFydGluZyB1cC4uLlwiKTtcbiAgICAgICAgYXBwbGljYXRpb25TZXJ2aWNlLnN0YXJ0dXAoKTtcbiAgICB9KVxuO1xuXG5sb2doQXBwLmZhY3RvcnkoJ2F1dGhJbnRlcmNlcHRvcicsIGZ1bmN0aW9uICgkcSwgJHdpbmRvdywgJGxvY2F0aW9uLCAkdGltZW91dCwgdXNlck1vZGVsLCBtZXNzYWdlTW9kZWwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZXF1ZXN0OiBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgICAgICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuICAgICAgICAgICAgaWYgKCR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudG9rZW4pIHtcbiAgICAgICAgICAgICAgICBjb25maWcuaGVhZGVycy5BdXRob3JpemF0aW9uID0gJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS50b2tlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb25maWc7XG4gICAgICAgIH0sXG4gICAgICAgIHJlc3BvbnNlRXJyb3I6IGZ1bmN0aW9uIChyZWplY3Rpb24pIHtcbiAgICAgICAgICAgIGlmIChyZWplY3Rpb24uc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9IHJlamVjdGlvbi5kYXRhLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgdmFyIHBhdGggPSAkbG9jYXRpb24ucGF0aCgpO1xuICAgICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHVzZXJNb2RlbC5yZXNldFVzZXIoKTtcbiAgICAgICAgICAgICAgICAgIGlmICgkbG9jYXRpb24ucGF0aCgpID09ICcvc2lnbmluJykge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShtZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShtZXNzYWdlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgJGxvY2F0aW9uLnBhdGgoJy9zaWduaW4nKS5zZWFyY2goeyByZWRpcmVjdDogZW5jb2RlVVJJQ29tcG9uZW50KHBhdGgpIH0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJHEucmVqZWN0KHJlamVjdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xufSk7XG5cbmxvZ2hBcHAuY29uZmlnKGZ1bmN0aW9uICgkaHR0cFByb3ZpZGVyKSB7XG4gICAgJGh0dHBQcm92aWRlci5pbnRlcmNlcHRvcnMucHVzaCgnYXV0aEludGVyY2VwdG9yJyk7XG59KTtcblxuXG5cblxuXG5cblxuXG5cbiIsIlxucmVxdWlyZShcIi4vVGVzdEFzcGVjdFwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5hc3BlY3RzJywgW10pXG4gICAgLmNvbmZpZyggZnVuY3Rpb24oKSB7XG5cbiAgICAgICAvL1RPRE8gYXNwZWN0IGNvbmZpZyBpZiBuZWNlc3NhcnlcbiAgICB9XG4pOyIsIi8qKlxuICogRGVmaW5lIHRoZSBhcHBsaWNhdGlvbiBtb2RlbHNcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5tb2RlbHMnLCBbXSlcbiAgICAvL21vZGVsc1xuICAgIC5zZXJ2aWNlKCd1c2VyTW9kZWwnLCByZXF1aXJlKCcuL1VzZXJNb2RlbCcpKVxuICAgIC5zZXJ2aWNlKCdzZWFzb25Nb2RlbCcsIHJlcXVpcmUoJy4vU2Vhc29uTW9kZWwnKSlcbiAgICAuc2VydmljZSgnbWVzc2FnZU1vZGVsJywgcmVxdWlyZSgnLi9NZXNzYWdlTW9kZWwnKSlcbjsiLCIvKipcbiAqIERlZmluZSB0aGUgcmVtb3RlIHNlcnZpY2VzXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuYXBpJywgW10pXG4gICAgICAuY29uc3RhbnQoJ2FwaUNvbmZpZycsIHJlcXVpcmUoJy4vQXBpQ29uZmlnJykpXG4gICAgICAuc2VydmljZSgndXNlclNlcnZpY2UnLCByZXF1aXJlKCcuL1VzZXJTZXJ2aWNlJykpXG4gICAgICAuc2VydmljZSgnbGVhZ3VlU2VydmljZScsIHJlcXVpcmUoJy4vTGVhZ3VlU2VydmljZScpKVxuICAgICAgLnNlcnZpY2UoJ3RlYW1TZXJ2aWNlJywgcmVxdWlyZSgnLi9UZWFtU2VydmljZScpKVxuICAgICAgLnNlcnZpY2UoJ3BpY2tTZXJ2aWNlJywgcmVxdWlyZSgnLi9QaWNrU2VydmljZScpKVxuICAgICAgLnNlcnZpY2UoJ3NlYXNvblNlcnZpY2UnLCByZXF1aXJlKCcuL1NlYXNvblNlcnZpY2UnKSlcbiAgICAgIC5zZXJ2aWNlKCd3ZWVrU2VydmljZScsIHJlcXVpcmUoJy4vV2Vla1NlcnZpY2UnKSlcbiAgICAgIC5zZXJ2aWNlKCdnYW1lU2VydmljZScsIHJlcXVpcmUoJy4vR2FtZVNlcnZpY2UnKSlcbjtcbiIsIi8vIHNlc3Npb24gY29tbWFuZHNcbnJlcXVpcmUoJy4vc2Vzc2lvbi9TaWduaW5Db21tYW5kJyk7XG5yZXF1aXJlKCcuL3Nlc3Npb24vU2lnbm91dENvbW1hbmQnKTtcblxuLy8gdXNlciBjb21tYW5kc1xucmVxdWlyZSgnLi91c2VyL0dldEN1cnJlbnRVc2VyQ29tbWFuZCcpO1xucmVxdWlyZSgnLi91c2VyL1VwZGF0ZVVzZXJDb21tYW5kJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuY29tbWFuZENvbmZpZycsIFtdKVxuICAgIC5jb25maWcoZnVuY3Rpb24oJGNvbW1hbmd1bGFyUHJvdmlkZXIpIHtcblxuICAgICAgICAvLyBzZXNzaW9uIGV2ZW50c1xuICAgICAgICAkY29tbWFuZ3VsYXJQcm92aWRlci5tYXBUbygnU2lnbmluRXZlbnQnKS5hc1NlcXVlbmNlKClcbiAgICAgICAgICAgIC5hZGQoJ1NpZ25pbkNvbW1hbmQnKTtcbiAgICAgICAgJGNvbW1hbmd1bGFyUHJvdmlkZXIubWFwVG8oJ1NpZ25vdXRFdmVudCcpLmFzU2VxdWVuY2UoKVxuICAgICAgICAgICAgLmFkZCgnU2lnbm91dENvbW1hbmQnKTtcblxuICAgICAgICAvLyB1c2VyIGV2ZW50c1xuICAgICAgICAkY29tbWFuZ3VsYXJQcm92aWRlci5tYXBUbygnR2V0Q3VycmVudFVzZXJFdmVudCcpLmFzU2VxdWVuY2UoKVxuICAgICAgICAgICAgLmFkZCgnR2V0Q3VycmVudFVzZXJDb21tYW5kJyk7XG4gICAgICAgICRjb21tYW5ndWxhclByb3ZpZGVyLm1hcFRvKCdVcGRhdGVVc2VyRXZlbnQnKS5hc1NlcXVlbmNlKClcbiAgICAgICAgICAgIC5hZGQoJ1VwZGF0ZVVzZXJDb21tYW5kJyk7XG5cbiAgICB9XG4pO1xuXG4iLCIvKipcbiAqIERlZmluZSB0aGUgYXBwbGljYXRpb24gZmlsdGVyc1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmZpbHRlcnMnLCBbXSlcbiAgICAvL2ZpbHRlcnNcbiAgICAuZmlsdGVyKCdvZmZzZXRGaWx0ZXInLCByZXF1aXJlKCcuL09mZnNldEZpbHRlcicpKVxuICAgIC5maWx0ZXIoJ2FjdGl2ZVRlYW1GaWx0ZXInLCByZXF1aXJlKCcuL0FjdGl2ZVRlYW1GaWx0ZXInKSlcbiAgICAuZmlsdGVyKCdvcGVuTGVhZ3VlRmlsdGVyJywgcmVxdWlyZSgnLi9PcGVuTGVhZ3VlRmlsdGVyJykpXG4gICAgLmZpbHRlcigndGltZUZpbHRlcicsIHJlcXVpcmUoJy4vVGltZUZpbHRlcicpKVxuO1xuIiwiXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnB1YmxpYy5ob21lJywgW10pXG4gICAgLmNvbnRyb2xsZXIoJ0hvbWVDb250cm9sbGVyJywgcmVxdWlyZSgnLi9Ib21lQ29udHJvbGxlcicpKVxuICAgIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdwdWJsaWMuaG9tZScsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcnLFxuICAgICAgICAgICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9oZWFkZXIvaGVhZGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdIZWFkZXJDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL21lc3NhZ2UvbWVzc2FnZS50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTWVzc2FnZUNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wdWJsaWMvaG9tZS9ob21lLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdIb21lQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2Zvb3Rlci9mb290ZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0Zvb3RlckNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICAgIH0pOyIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuZmFxJywgW10pXG4gIC5jb250cm9sbGVyKCdGYXFDb250cm9sbGVyJywgcmVxdWlyZSgnLi9GYXFDb250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5wdWJsaWMuc2lnbmluJywgW10pXG4gIC5jb250cm9sbGVyKCdTaWduaW5Db250cm9sbGVyJywgcmVxdWlyZSgnLi9TaWduaW5Db250cm9sbGVyJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3B1YmxpYy5zaWduaW4nLCB7XG4gICAgICAgIHVybDogJ3NpZ25pbicsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL2hlYWRlci9oZWFkZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0hlYWRlckNvbnRyb2xsZXInXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL21lc3NhZ2UvbWVzc2FnZS50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTWVzc2FnZUNvbnRyb2xsZXInXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHVibGljL3NpZ25pbi9zaWduaW4udHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1NpZ25pbkNvbnRyb2xsZXInXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvZm9vdGVyL2Zvb3Rlci50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnRm9vdGVyQ29udHJvbGxlcidcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnJlZ2lzdGVyJywgW10pXG4gIC5jb250cm9sbGVyKCdSZWdpc3RlckNvbnRyb2xsZXInLCByZXF1aXJlKCcuL1JlZ2lzdGVyQ29udHJvbGxlcicpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAudXNlcicsIFtdKVxuICAgIC5jb250cm9sbGVyKCdVc2VyQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vVXNlckNvbnRyb2xsZXInKSlcbiAgICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgncHJpdmF0ZS51c2VyJywge1xuICAgICAgICAgICAgICAgIHVybDogJ3VzZXInLFxuICAgICAgICAgICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9oZWFkZXIvaGVhZGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdIZWFkZXJDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL21lc3NhZ2UvbWVzc2FnZS50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTWVzc2FnZUNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL3VzZXIvdXNlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVXNlckNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9mb290ZXIvZm9vdGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdGb290ZXJDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgICB9KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubGVhZ3VlJywgW10pXG4gICAgLmNvbnRyb2xsZXIoJ0xlYWd1ZUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL0xlYWd1ZUNvbnRyb2xsZXInKSlcbiAgICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgncHJpdmF0ZS5sZWFndWUnLCB7XG4gICAgICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgdXJsOiAnc2Vhc29uL3tzZWFzb25JZH0vbGVhZ3VlJyxcbiAgICAgICAgICAgICAgICB2aWV3czoge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvaGVhZGVyL2hlYWRlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnSGVhZGVyQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9tZXNzYWdlL21lc3NhZ2UudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ01lc3NhZ2VDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbGVhZ3VlLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdMZWFndWVDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvZm9vdGVyL2Zvb3Rlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnRm9vdGVyQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gICAgfSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmxlYWd1ZXMnLCBbXSlcbiAgICAuY29udHJvbGxlcignTGVhZ3Vlc0NvbnRyb2xsZXInLCByZXF1aXJlKCcuL0xlYWd1ZXNDb250cm9sbGVyJykpXG4gICAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ3ByaXZhdGUubGVhZ3VlcycsIHtcbiAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1cmw6ICdzZWFzb24ve3NlYXNvbklkfS9sZWFndWVzJyxcbiAgICAgICAgICAgICAgICB2aWV3czoge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvaGVhZGVyL2hlYWRlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnSGVhZGVyQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9tZXNzYWdlL21lc3NhZ2UudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ01lc3NhZ2VDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2xlYWd1ZXMudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0xlYWd1ZXNDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvZm9vdGVyL2Zvb3Rlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnRm9vdGVyQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gICAgfSk7XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAudGVhbScsIFtdKVxuICAgIC5jb250cm9sbGVyKCdUZWFtQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vVGVhbUNvbnRyb2xsZXInKSlcbiAgICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgncHJpdmF0ZS50ZWFtJywge1xuICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHVybDogJ3NlYXNvbi97c2Vhc29uSWR9L2xlYWd1ZS97bGVhZ3VlSWR9L3RlYW0nLFxuICAgICAgICAgICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9oZWFkZXIvaGVhZGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdIZWFkZXJDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL21lc3NhZ2UvbWVzc2FnZS50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTWVzc2FnZUNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL3RlYW0vdGVhbS50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVGVhbUNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9mb290ZXIvZm9vdGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdGb290ZXJDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICAgIH0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC50ZWFtcycsIFtdKVxuICAgIC5jb250cm9sbGVyKCdUZWFtc0NvbnRyb2xsZXInLCByZXF1aXJlKCcuL1RlYW1zQ29udHJvbGxlcicpKVxuICAgIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdwcml2YXRlLnRlYW1zJywge1xuICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHVybDogJ3NlYXNvbi97c2Vhc29uSWR9L3RlYW1zJyxcbiAgICAgICAgICAgICAgICB2aWV3czoge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvaGVhZGVyL2hlYWRlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnSGVhZGVyQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9tZXNzYWdlL21lc3NhZ2UudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ01lc3NhZ2VDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS90ZWFtcy90ZWFtcy50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVGVhbXNDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvZm9vdGVyL2Zvb3Rlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnRm9vdGVyQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICAgIH0pO1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmhlYWRlcicsIFtdKVxuICAgIC5jb250cm9sbGVyKCdIZWFkZXJDb250cm9sbGVyJywgcmVxdWlyZSgnLi9IZWFkZXJDb250cm9sbGVyJykpIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5tZXNzYWdlJywgW10pXG4gICAgLmNvbnRyb2xsZXIoJ01lc3NhZ2VDb250cm9sbGVyJywgcmVxdWlyZSgnLi9NZXNzYWdlQ29udHJvbGxlcicpKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmZvb3RlcicsIFtdKVxuICAuY29udHJvbGxlcignRm9vdGVyQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vRm9vdGVyQ29udHJvbGxlcicpKSIsIi8qKlxuICogRGVmaW5lIHRoZSBhcHBsaWNhdGlvbiBzZXJ2aWNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2guYXBwbGljYXRpb24nLCBbXSlcbiAgICAuc2VydmljZSgnYXBwbGljYXRpb25TZXJ2aWNlJywgcmVxdWlyZSgnLi9BcHBsaWNhdGlvblNlcnZpY2UnKSk7IiwiLy9hcHBsaWNhdGlvbiBkaXJlY3RpdmVzXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmRpcmVjdGl2ZXMuZm9jdXMnLFtdKVxuICAgIC5kaXJlY3RpdmUoJ2xvZ2hGb2N1cycsIHJlcXVpcmUoJy4vRm9jdXNEaXJlY3RpdmUnKSlcbjtcbiIsIi8vYXBwbGljYXRpb24gZGlyZWN0aXZlc1xubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5kaXJlY3RpdmVzLm1hdGNoJyxbXSlcbiAgICAuZGlyZWN0aXZlKCdtYXRjaCcsIHJlcXVpcmUoJy4vTWF0Y2hEaXJlY3RpdmUnKSlcbjtcbiIsIi8vYXBwbGljYXRpb24gZGlyZWN0aXZlc1xubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5kaXJlY3RpdmVzLnJlcXVpcmVkUGF0dGVybicsW10pXG4gICAgLmRpcmVjdGl2ZSgncnBhdHRlcm4nLCByZXF1aXJlKCcuL1JlcXVpcmVkUGF0dGVybkRpcmVjdGl2ZScpKVxuO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5yZWdpc3Rlci50ZXJtcycsIFtdKVxuICAuY29udHJvbGxlcignUmVnaXN0ZXJUZXJtc0NvbnRyb2xsZXInLCByZXF1aXJlKCcuL1JlZ2lzdGVyVGVybXNDb250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC51c2VyLnJlc2V0JywgW10pXG4gIC5jb250cm9sbGVyKCdVc2VyUmVzZXRDb250cm9sbGVyJywgcmVxdWlyZSgnLi9Vc2VyUmVzZXRDb250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5sZWFndWUubmV3JywgW10pXG4gIC5jb250cm9sbGVyKCdOZXdMZWFndWVDb250cm9sbGVyJywgcmVxdWlyZSgnLi9OZXdMZWFndWVDb250cm9sbGVyJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5sZWFndWUudmlldycsIFtdKVxuICAuY29udHJvbGxlcignVmlld0xlYWd1ZUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL1ZpZXdMZWFndWVDb250cm9sbGVyJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3ByaXZhdGUubGVhZ3VlLnZpZXcnLCB7XG4gICAgICAgIHVybDogJy97bGVhZ3VlSWR9JyxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICBsZWFndWVDb250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvdmlldy9sZWFndWUudmlldy50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnVmlld0xlYWd1ZUNvbnRyb2xsZXInXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgbGVhZ3VlOiBmdW5jdGlvbihsZWFndWVTZXJ2aWNlLCAkc3RhdGVQYXJhbXMpIHtcbiAgICAgICAgICAgIHJldHVybiBsZWFndWVTZXJ2aWNlLmdldExlYWd1ZSgkc3RhdGVQYXJhbXMuc2Vhc29uSWQsICRzdGF0ZVBhcmFtcy5sZWFndWVJZCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhbGl2ZVRlYW1zOiBmdW5jdGlvbihsZWFndWUsIHRlYW1TZXJ2aWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGVhbVNlcnZpY2UuZ2V0QWxpdmVUZWFtcyh7IHNlYXNvbklkOiBsZWFndWUuZGF0YS5zZWFzb25faWQsIGxlYWd1ZUlkOiBsZWFndWUuZGF0YS5pZCB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlYWRUZWFtczogZnVuY3Rpb24obGVhZ3VlLCB0ZWFtU2VydmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRlYW1TZXJ2aWNlLmdldERlYWRUZWFtcyh7IHNlYXNvbklkOiBsZWFndWUuZGF0YS5zZWFzb25faWQsIGxlYWd1ZUlkOiBsZWFndWUuZGF0YS5pZCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmxlYWd1ZS5lZGl0JywgW10pXG4gIC5jb250cm9sbGVyKCdFZGl0TGVhZ3VlQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vRWRpdExlYWd1ZUNvbnRyb2xsZXInKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmxlYWd1ZS5jb250YWN0JywgW10pXG4gIC5jb250cm9sbGVyKCdMZWFndWVDb250YWN0Q29udHJvbGxlcicsIHJlcXVpcmUoJy4vTGVhZ3VlQ29udGFjdENvbnRyb2xsZXInKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmxlYWd1ZS5tZXNzYWdlJywgW10pXG4gIC5jb250cm9sbGVyKCdMZWFndWVNZXNzYWdlQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vTGVhZ3VlTWVzc2FnZUNvbnRyb2xsZXInKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmxlYWd1ZS5qb2luJywgW10pXG4gIC5jb250cm9sbGVyKCdMZWFndWVKb2luQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vTGVhZ3VlSm9pbkNvbnRyb2xsZXInKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmxlYWd1ZS5pbnZpdGUnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0xlYWd1ZUludml0ZUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL0xlYWd1ZUludml0ZUNvbnRyb2xsZXInKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmxlYWd1ZXMuam9pbicsIFtdKVxuICAuY29udHJvbGxlcignSm9pbkxlYWd1ZXNDb250cm9sbGVyJywgcmVxdWlyZSgnLi9Kb2luTGVhZ3Vlc0NvbnRyb2xsZXInKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHJpdmF0ZS5sZWFndWVzLmpvaW4nLCB7XG4gICAgICAgIHVybDogJy8nLFxuICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICBsZWFndWVzQ29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3Vlcy9qb2luL2xlYWd1ZXMuam9pbi50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnSm9pbkxlYWd1ZXNDb250cm9sbGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICA7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9KTtcblxuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5sZWFndWVzLm1hbmFnZScsIFtdKVxuICAuY29udHJvbGxlcignTWFuYWdlTGVhZ3Vlc0NvbnRyb2xsZXInLCByZXF1aXJlKCcuL01hbmFnZUxlYWd1ZXNDb250cm9sbGVyJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3ByaXZhdGUubGVhZ3Vlcy5tYW5hZ2UnLCB7XG4gICAgICAgIHVybDogJycsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgbGVhZ3Vlc0NvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZXMvbWFuYWdlL2xlYWd1ZXMubWFuYWdlLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdNYW5hZ2VMZWFndWVzQ29udHJvbGxlcidcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICBtYW5hZ2VkTGVhZ3VlczogZnVuY3Rpb24odXNlciwgbGVhZ3VlU2VydmljZSwgJHN0YXRlUGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gbGVhZ3VlU2VydmljZS5nZXRNYW5hZ2VkTGVhZ3Vlcygkc3RhdGVQYXJhbXMuc2Vhc29uSWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICA7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9KTtcblxuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC50ZWFtLnZpZXcnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ1ZpZXdUZWFtQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vVmlld1RlYW1Db250cm9sbGVyJykpXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3ByaXZhdGUudGVhbS52aWV3Jywge1xuICAgICAgICB1cmw6ICcve3RlYW1JZH0nLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIHRlYW1Db250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS90ZWFtL3ZpZXcvdGVhbS52aWV3LnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdWaWV3VGVhbUNvbnRyb2xsZXInXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgdGVhbTogZnVuY3Rpb24odGVhbVNlcnZpY2UsICRzdGF0ZVBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuIHRlYW1TZXJ2aWNlLmdldFRlYW0oJHN0YXRlUGFyYW1zLmxlYWd1ZUlkLCAkc3RhdGVQYXJhbXMudGVhbUlkKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlZ3VsYXJQaWNrczogZnVuY3Rpb24odGVhbSwgcGlja1NlcnZpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBwaWNrU2VydmljZS5nZXRSZWd1bGFyUGlja3MoeyB0ZWFtSWQ6IHRlYW0uZGF0YS5pZCB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBsYXlvZmZQaWNrczogZnVuY3Rpb24odGVhbSwgcGlja1NlcnZpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBwaWNrU2VydmljZS5nZXRQbGF5b2ZmUGlja3MoeyB0ZWFtSWQ6IHRlYW0uZGF0YS5pZCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnRlYW0uZWRpdCcsIFtdKVxuICAuY29udHJvbGxlcignRWRpdFRlYW1Db250cm9sbGVyJywgcmVxdWlyZSgnLi9FZGl0VGVhbUNvbnRyb2xsZXInKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnRlYW0ubWVzc2FnZScsIFtdKVxuICAuY29udHJvbGxlcignVGVhbU1lc3NhZ2VDb250cm9sbGVyJywgcmVxdWlyZSgnLi9UZWFtTWVzc2FnZUNvbnRyb2xsZXInKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnRlYW1zLmFsaXZlJywgW10pXG4gIC5jb250cm9sbGVyKCdBbGl2ZVRlYW1zQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vQWxpdmVUZWFtc0NvbnRyb2xsZXInKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHJpdmF0ZS50ZWFtcy5hbGl2ZScsIHtcbiAgICAgICAgdXJsOiAnL2FsaXZlJyxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICB0ZWFtc0NvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL3RlYW1zL2FsaXZlL3RlYW1zLmFsaXZlLnRwbC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBbGl2ZVRlYW1zQ29udHJvbGxlcidcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICBhbGl2ZVRlYW1zOiBmdW5jdGlvbih1c2VyLCB0ZWFtU2VydmljZSwgJHN0YXRlUGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gdGVhbVNlcnZpY2UuZ2V0QWxpdmVUZWFtcyh7IHNlYXNvbklkOiAkc3RhdGVQYXJhbXMuc2Vhc29uSWQgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIDtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnRlYW1zLmRlYWQnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0RlYWRUZWFtc0NvbnRyb2xsZXInLCByZXF1aXJlKCcuL0RlYWRUZWFtc0NvbnRyb2xsZXInKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHJpdmF0ZS50ZWFtcy5kZWFkJywge1xuICAgICAgICB1cmw6ICcvZGVhZCcsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgdGVhbXNDb250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS90ZWFtcy9kZWFkL3RlYW1zLmRlYWQudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0RlYWRUZWFtc0NvbnRyb2xsZXInXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgZGVhZFRlYW1zOiBmdW5jdGlvbih1c2VyLCB0ZWFtU2VydmljZSwgJHN0YXRlUGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gdGVhbVNlcnZpY2UuZ2V0RGVhZFRlYW1zKHsgc2Vhc29uSWQ6ICRzdGF0ZVBhcmFtcy5zZWFzb25JZCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfSk7XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAucGljay5tYWtlJywgW10pXG4gIC5jb250cm9sbGVyKCdQaWNrTWFrZUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL1BpY2tNYWtlQ29udHJvbGxlcicpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAubGVhZ3VlLmludml0ZS5yZXF1ZXN0JywgW10pXG4gIC5jb250cm9sbGVyKCdMZWFndWVJbnZpdGVSZXF1ZXN0Q29udHJvbGxlcicsIHJlcXVpcmUoJy4vTGVhZ3VlSW52aXRlUmVxdWVzdENvbnRyb2xsZXInKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmxlYWd1ZXMuam9pbi5wdWJsaWMnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ1B1YmxpY0xlYWd1ZXNDb250cm9sbGVyJywgcmVxdWlyZSgnLi9QdWJsaWNMZWFndWVzQ29udHJvbGxlcicpKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcml2YXRlLmxlYWd1ZXMuam9pbi5wdWJsaWMnLCB7XG4gICAgICAgIHVybDogJ3B1YmxpYycsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgam9pbkxlYWd1ZXNDb250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4vcHVibGljL2xlYWd1ZXMuam9pbi5wdWJsaWMudHBsLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1B1YmxpY0xlYWd1ZXNDb250cm9sbGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIHB1YmxpY0xlYWd1ZXM6IGZ1bmN0aW9uKHVzZXIsIGxlYWd1ZVNlcnZpY2UsICRzdGF0ZVBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuIGxlYWd1ZVNlcnZpY2UuZ2V0UHVibGljTGVhZ3Vlcygkc3RhdGVQYXJhbXMuc2Vhc29uSWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICA7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9KTtcblxuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5sZWFndWVzLmpvaW4ucHJpdmF0ZScsIFtdKVxuICAuY29udHJvbGxlcignUHJpdmF0ZUxlYWd1ZXNDb250cm9sbGVyJywgcmVxdWlyZSgnLi9Qcml2YXRlTGVhZ3Vlc0NvbnRyb2xsZXInKSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHJpdmF0ZS5sZWFndWVzLmpvaW4ucHJpdmF0ZScsIHtcbiAgICAgICAgdXJsOiAncHJpdmF0ZScsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgam9pbkxlYWd1ZXNDb250ZW50OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWVzL2pvaW4vcHJpdmF0ZS9sZWFndWVzLmpvaW4ucHJpdmF0ZS50cGwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnUHJpdmF0ZUxlYWd1ZXNDb250cm9sbGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIHByaXZhdGVMZWFndWVzOiBmdW5jdGlvbih1c2VyLCBsZWFndWVTZXJ2aWNlLCAkc3RhdGVQYXJhbXMpIHtcbiAgICAgICAgICAgIHJldHVybiBsZWFndWVTZXJ2aWNlLmdldFByaXZhdGVMZWFndWVzKCRzdGF0ZVBhcmFtcy5zZWFzb25JZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIDtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuXG4iLCJcbmNvbW1hbmd1bGFyLmV2ZW50QXNwZWN0KCdAQmVmb3JlKC8uKi8pJywgZnVuY3Rpb24ocHJvY2Vzc29yLCAkbG9nKSB7XG5cbiAgICByZXR1cm4ge1xuXG4gICAgICAgIGV4ZWN1dGUgOiBmdW5jdGlvbiAoKSB7XG5cbi8vICAgICAgICAgICAgaWYgKEN1cnJlbnRUb2RvLnRvZG8ubGVuZ3RoID09PSAwKSB7XG4vLyAgICAgICAgICAgICAgICBwcm9jZXNzb3IuY2FuY2VsKCdFbXB0eSB0b2RvJyk7XG4vLyAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vJGxvZy5sb2coJ1Rlc3QgQXNwZWN0Jyk7XG5cbiAgICAgICAgfVxuICAgIH1cbn0pOyIsIlxudmFyIFVzZXJNb2RlbCA9IGZ1bmN0aW9uKCRyb290U2NvcGUsICR3aW5kb3csICRsb2cpIHtcblxuICAgIHZhciB1c2VyID0ge307XG4gICAgdXNlci5sb2FkZWQgPSBmYWxzZTtcbiAgICB1c2VyLmlkID0gJyc7XG4gICAgdXNlci5lbWFpbCA9ICcnO1xuICAgIHVzZXIuZmlyc3RfbmFtZSA9ICcnO1xuICAgIHVzZXIubGFzdF9uYW1lID0gJyc7XG4gICAgdXNlci5hZG1pbiA9IGZhbHNlO1xuXG4gICAgdGhpcy51c2VyID0gdXNlcjtcblxuICAgIHRoaXMuc2V0VXNlciA9IGZ1bmN0aW9uKHVzZXJEYXRhKSB7XG4gICAgICAgIHVzZXIubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgdXNlciA9IGFuZ3VsYXIuZXh0ZW5kKHVzZXIsIHVzZXJEYXRhKTtcbiAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCd1c2VyTW9kZWw6OnVzZXJVcGRhdGVkJywgdXNlcik7XG4gICAgICAgICRsb2cuZGVidWcoXCJVc2VyTW9kZWw6IHNldFVzZXI6IFwiICsgdXNlci5pZCk7XG4gICAgICAgICRsb2cuZGVidWcoXCJVc2VyTW9kZWw6IHNldFVzZXI6IFwiICsgdXNlci5lbWFpbCk7XG4gICAgfTtcblxuICAgIHRoaXMucmVzZXRVc2VyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcblxuICAgICAgICB1c2VyID0ge307XG4gICAgICAgIHVzZXIubG9hZGVkID0gZmFsc2U7XG4gICAgICAgIHVzZXIuaWQgPSAnJztcbiAgICAgICAgdXNlci5lbWFpbCA9ICcnO1xuICAgICAgICB1c2VyLmZpcnN0X25hbWUgPSAnJztcbiAgICAgICAgdXNlci5sYXN0X25hbWUgPSAnJztcbiAgICAgICAgdXNlci5hZG1pbiA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMudXNlciA9IHVzZXI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiY3JlYXRpbmcgdXNlciBtb2RlbC4uLlwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcblxufTtcblxuVXNlck1vZGVsLiRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJHdpbmRvdycsICckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IFVzZXJNb2RlbDsiLCJ2YXIgU2Vhc29uTW9kZWwgPSBmdW5jdGlvbigkcm9vdFNjb3BlLCAkbG9nKSB7XG5cbiAgICB2YXIgc2Vhc29uID0ge307XG4gICAgc2Vhc29uLmlkID0gJyc7XG4gICAgc2Vhc29uLm5hbWUgPSAnJztcblxuICAgIHRoaXMuc2Vhc29uID0gc2Vhc29uO1xuXG4gICAgdGhpcy5zZXRTZWFzb24gPSBmdW5jdGlvbihzZWFzb25EYXRhKSB7XG4gICAgICAgIHNlYXNvbiA9IGFuZ3VsYXIuZXh0ZW5kKHNlYXNvbiwgc2Vhc29uRGF0YSk7XG4gICAgICAgICRsb2cuZGVidWcoXCJTZWFzb25Nb2RlbDogc2V0U2Vhc29ubjogXCIgKyBzZWFzb24ubmFtZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiY3JlYXRpbmcgc2Vhc29uIG1vZGVsLi4uXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5TZWFzb25Nb2RlbC4kaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRsb2cnXTtcbm1vZHVsZS5leHBvcnRzID0gU2Vhc29uTW9kZWw7IiwiXG52YXIgTWVzc2FnZU1vZGVsID0gZnVuY3Rpb24oJHJvb3RTY29wZSwgJGxvZykge1xuXG4gICAgdmFyIG1vZGVsID0gdGhpcztcbiAgICB2YXIgcXVldWUgPSBbXTtcblxuICAgIHZhciBtZXNzYWdlID0ge307XG4gICAgbWVzc2FnZS5sb2FkZWQgPSBmYWxzZTtcbiAgICBtZXNzYWdlLnR5cGUgPSAnJzsgLy8gY2FuIGJlIHN1Y2Nlc3MsIGluZm8sIHdhcm5pbmcgb3IgZGFuZ2VyXG4gICAgbWVzc2FnZS5jb250ZW50ID0gJyc7XG5cbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuXG4gICAgdGhpcy5zZXRNZXNzYWdlID0gZnVuY3Rpb24obWVzc2FnZURhdGEsIGRlbGF5KSB7XG4gICAgICAgIHZhciBtZXNzYWdlID0ge307XG4gICAgICAgIG1lc3NhZ2UubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgbWVzc2FnZSA9IGFuZ3VsYXIuZXh0ZW5kKG1lc3NhZ2UsIG1lc3NhZ2VEYXRhKTtcbiAgICAgICAgaWYgKGRlbGF5KSB7XG4gICAgICAgICAgICBxdWV1ZVswXSA9IG1lc3NhZ2U7IC8vIHF1ZXVlIGl0IHVwIGZvciBhZnRlciBhIGxvY2F0aW9uIGNoYW5nZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kZWwubWVzc2FnZSA9IG1lc3NhZ2U7IC8vIHNob3cgdGhlIG1lc3NhZ2UgYXNhcFxuICAgICAgICAgICAgcXVldWUgPSBbXTsgLy8gY2xlYXIgdGhlIHF1ZXVlIGFzIG1lc3NhZ2Ugd2lsbCBiZSBzaG93ZWQgaW1tZWRpYXRlbHlcbiAgICAgICAgfVxuICAgICAgICAkbG9nLmRlYnVnKFwiTWVzc2FnZU1vZGVsOiBjb250ZW50OiBcIiArIG1lc3NhZ2UuY29udGVudCk7XG4gICAgfTtcblxuICAgIHRoaXMucmVzZXRNZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1lc3NhZ2UgPSB7fTtcbiAgICAgICAgbWVzc2FnZS5sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgbWVzc2FnZS50eXBlID0gJyc7XG4gICAgICAgIG1lc3NhZ2UuY29udGVudCA9ICcnO1xuXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgfTtcblxuICAgICRyb290U2NvcGUuJG9uKFwiJGxvY2F0aW9uQ2hhbmdlU3RhcnRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIG1vZGVsLnJlc2V0TWVzc2FnZSgpO1xuICAgIH0pO1xuXG4gICAgJHJvb3RTY29wZS4kb24oXCIkbG9jYXRpb25DaGFuZ2VTdWNjZXNzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBtb2RlbC5tZXNzYWdlID0gcXVldWUuc2hpZnQoKSB8fCB7fTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiY3JlYXRpbmcgbWVzc2FnZSBtb2RlbC4uLlwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcblxufTtcblxuTWVzc2FnZU1vZGVsLiRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBNZXNzYWdlTW9kZWw7XG4iLCIvKlxuICogIEdsb2JhbCBjb25maWcgZm9yIHJlbW90ZSBzZXJ2aWNlc1xuICovXG5cbnZhciBBcGlDb25maWcgPSAge1xuICAgIGJhc2VVUkw6ICcvYXBpLydcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQXBpQ29uZmlnO1xuIiwidmFyIFVzZXJTZXJ2aWNlID0gZnVuY3Rpb24oJGh0dHAsICRsb2csICRzdGF0ZSwgJGxvY2F0aW9uLCAkd2luZG93LCAkdGltZW91dCwgYXBpQ29uZmlnLCBtZXNzYWdlTW9kZWwsIHVzZXJNb2RlbCwgc2Vhc29uTW9kZWwpIHtcblxuICAgIHZhciB1c2VyU2VydmljZSA9IHRoaXM7XG5cbiAgICB0aGlzLnNpZ25pbiA9IGZ1bmN0aW9uKGVtYWlsLCBwYXNzd29yZCkge1xuICAgICAgdXNlck1vZGVsLnJlc2V0VXNlcigpO1xuICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5wb3N0KFxuICAgICAgICAgICAgYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlc3Npb25zXCIsXG4gICAgICAgICAgICB7IGVtYWlsOiBlbWFpbCwgcGFzc3dvcmQ6IHBhc3N3b3JkIH0pXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlVzZXJTZXJ2aWNlOiBzaWduaW4gc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICAkd2luZG93LnNlc3Npb25TdG9yYWdlLnRva2VuID0gZGF0YS50b2tlbjtcbiAgICAgICAgICAgICAgICB2YXIgcmVkaXJlY3QgPSBkZWNvZGVVUklDb21wb25lbnQoJGxvY2F0aW9uLnNlYXJjaCgpLnJlZGlyZWN0KTtcbiAgICAgICAgICAgICAgICBpZiAocmVkaXJlY3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2NhdGlvbi5zZWFyY2goJ3JlZGlyZWN0JywgbnVsbCk7IC8vIHJlbW92ZSB0aGUgcmVkaXJlY3QgcXVlcnkgcGFyYW1cbiAgICAgICAgICAgICAgICAgICAgJGxvY2F0aW9uLnBhdGgocmVkaXJlY3QpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoWycvJywgJy9zaWduaW4nLCAnL3JlZ2lzdGVyJ10uaW5kZXhPZihyZWRpcmVjdCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdXNlclNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSAge1xuICAgICAgICAgICAgICAgICAgJGxvY2F0aW9uLnBhdGgoJy9zZWFzb24vJyArIHNlYXNvbk1vZGVsLnNlYXNvbi5pZCArICcvdGVhbXMvYWxpdmUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVXNlclNlcnZpY2U6IHNpZ25pbiBmYWlsdXJlXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuc2lnbm91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmRlbGV0ZShhcGlDb25maWcuYmFzZVVSTCArICdzZXNzaW9ucy9kZXN0cm95JylcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVXNlclNlcnZpY2U6IHNpZ25vdXQgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICB1c2VyTW9kZWwucmVzZXRVc2VyKCk7XG4gICAgICAgICAgICAgICAgaWYgKCRzdGF0ZS5jdXJyZW50Lm5hbWUgPT0gJ3B1YmxpYy5ob21lJykge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAkbG9jYXRpb24ucGF0aCgnLycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJVc2VyU2VydmljZTogc2lnbm91dCBmYWlsdXJlXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMucmVzZXRVc2VyID0gZnVuY3Rpb24oZW1haWwpIHtcbiAgICAgIHZhciBwcm9taXNlID0gJGh0dHAucG9zdChhcGlDb25maWcuYmFzZVVSTCArIFwic2Vzc2lvbnMvcmVzZXRcIiwgeyBlbWFpbDogZW1haWwgfSlcbiAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAkbG9nLmRlYnVnKFwiVXNlclNlcnZpY2U6IHJlc2V0IHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICRsb2cuZGVidWcoXCJVc2VyU2VydmljZTogcmVzZXQgZmFpbHVyZVwiKTtcbiAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmdldEN1cnJlbnRVc2VyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0b2tlbiA9ICRsb2NhdGlvbi5zZWFyY2goKS50b2tlbjtcbiAgICAgICAgaWYgKCFfLmlzVW5kZWZpbmVkKHRva2VuKSkge1xuICAgICAgICAgICR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudG9rZW4gPSB0b2tlbjtcbiAgICAgICAgICAkbG9jYXRpb24uc2VhcmNoKCd0b2tlbicsIG51bGwpOyAvLyByZW1vdmUgdGhlIHRva2VuIHF1ZXJ5IHBhcmFtXG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInVzZXJzL2N1cnJlbnRcIilcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVXNlclNlcnZpY2U6IGdldEN1cnJlbnRVc2VyIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgdXNlck1vZGVsLnNldFVzZXIoZGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVXNlclNlcnZpY2U6IGdldEN1cnJlbnRVc2VyIGZhaWxlZFwiKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5jcmVhdGVVc2VyID0gZnVuY3Rpb24odXNlclBhcmFtcykge1xuICAgICAgdXNlck1vZGVsLnJlc2V0VXNlcigpO1xuICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5wb3N0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJ1c2Vyc1wiLFxuICAgICAgICAgICAgeyB1c2VyOiB1c2VyUGFyYW1zIH0pXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlVzZXJTZXJ2aWNlOiBjcmVhdGVVc2VyIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS50b2tlbiA9IGRhdGEudG9rZW47XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB2YXIgcmVkaXJlY3QgPSBkZWNvZGVVUklDb21wb25lbnQoJGxvY2F0aW9uLnNlYXJjaCgpLnJlZGlyZWN0KTtcbiAgICAgICAgICAgICAgICBpZiAocmVkaXJlY3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2NhdGlvbi5zZWFyY2goJ3JlZGlyZWN0JywgbnVsbCk7IC8vIHJlbW92ZSB0aGUgcmVkaXJlY3QgcXVlcnkgcGFyYW1cbiAgICAgICAgICAgICAgICAgICAgJGxvY2F0aW9uLnBhdGgocmVkaXJlY3QpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSAge1xuICAgICAgICAgICAgICAgICAgJGxvY2F0aW9uLnBhdGgoJy9zZWFzb24vJyArIHNlYXNvbk1vZGVsLnNlYXNvbi5pZCArICcvdGVhbXMvYWxpdmUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVXNlclNlcnZpY2U6IGNyZWF0ZVVzZXIgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMudXBkYXRlVXNlciA9IGZ1bmN0aW9uKHVzZXJQYXJhbXMpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5wdXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInVzZXJzL2N1cnJlbnRcIixcbiAgICAgICAgICAgIHsgdXNlcjogdXNlclBhcmFtcyB9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJVc2VyU2VydmljZTogdXBkYXRlVXNlciBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHVzZXJNb2RlbC5zZXRVc2VyKHVzZXJQYXJhbXMpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlVzZXJTZXJ2aWNlOiB1cGRhdGVVc2VyIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbn07XG5cblVzZXJTZXJ2aWNlLiRpbmplY3QgPSBbJyRodHRwJywgJyRsb2cnLCAnJHN0YXRlJywgJyRsb2NhdGlvbicsICckd2luZG93JywgJyR0aW1lb3V0JywgJ2FwaUNvbmZpZycsICdtZXNzYWdlTW9kZWwnLCAndXNlck1vZGVsJywgJ3NlYXNvbk1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IFVzZXJTZXJ2aWNlOyIsInZhciBMZWFndWVTZXJ2aWNlID0gZnVuY3Rpb24oJGh0dHAsICRsb2csICRsb2NhdGlvbiwgJHEsICRzdGF0ZSwgYXBpQ29uZmlnLCBtZXNzYWdlTW9kZWwpIHtcblxuICAgIHRoaXMuZ2V0TGVhZ3VlID0gZnVuY3Rpb24oc2Vhc29uSWQsIGxlYWd1ZUlkKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZWFzb25zL1wiICsgc2Vhc29uSWQgKyBcIi9sZWFndWVzL1wiICsgbGVhZ3VlSWQpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IGdldExlYWd1ZSBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IGdldExlYWd1ZSBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRNYW5hZ2VkTGVhZ3VlcyA9IGZ1bmN0aW9uKHNlYXNvbklkKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZWFzb25zL1wiICsgc2Vhc29uSWQgKyBcIi9sZWFndWVzL21hbmFnZWRcIilcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogZ2V0TWFuYWdlZExlYWd1ZXMgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBnZXRNYW5hZ2VkTGVhZ3VlcyBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRQdWJsaWNMZWFndWVzID0gZnVuY3Rpb24oc2Vhc29uSWQpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBzZWFzb25JZCArIFwiL2xlYWd1ZXMvcHVibGljXCIpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IGdldFB1YmxpY0xlYWd1ZXMgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBnZXRQdWJsaWNMZWFndWVzIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmdldFByaXZhdGVMZWFndWVzID0gZnVuY3Rpb24oc2Vhc29uSWQpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBzZWFzb25JZCArIFwiL2xlYWd1ZXMvcHJpdmF0ZVwiKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBnZXRQcml2YXRlTGVhZ3VlcyBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IGdldFByaXZhdGVMZWFndWVzIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmNyZWF0ZUxlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZVBhcmFtcykge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnBvc3QoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBsZWFndWVQYXJhbXMuc2Vhc29uX2lkICsgXCIvbGVhZ3Vlc1wiLFxuICAgICAgICAgICAgeyBsZWFndWU6IGxlYWd1ZVBhcmFtcyB9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBjcmVhdGVMZWFndWUgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIHRydWUpO1xuICAgICAgICAgICAgICAgICRsb2NhdGlvbi5wYXRoKCcvc2Vhc29uLycgKyBsZWFndWVQYXJhbXMuc2Vhc29uX2lkICsgJy9sZWFndWUvJyArIGRhdGEubGVhZ3VlX2lkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBjcmVhdGVMZWFndWUgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMudXBkYXRlTGVhZ3VlID0gZnVuY3Rpb24obGVhZ3VlUGFyYW1zKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAucHV0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZWFzb25zL1wiICsgbGVhZ3VlUGFyYW1zLnNlYXNvbl9pZCArIFwiL2xlYWd1ZXMvXCIgKyBsZWFndWVQYXJhbXMuaWQsXG4gICAgICAgICAgICB7IGxlYWd1ZTogbGVhZ3VlUGFyYW1zIH0pXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IHVwZGF0ZUxlYWd1ZSBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgLy8gdG9kbzogdGhpcyByZWxpZXMgb24gYSBtb25rZXkgcGF0Y2ggYXQgdGhlIG1vbWVudCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyLXVpL3VpLXJvdXRlci9pc3N1ZXMvNTgyXG4gICAgICAgICAgICAvLyBidXQgbWF5IGJlIHJlc29sdmVkIHdpdGggZnV0dXJlIHJlbGVhc2VzIG9mIGFuZ3VsYXItdWktcm91dGVyXG4gICAgICAgICAgICAkc3RhdGUucmVsb2FkKCk7IC8vIHJlbG9hZHMgYWxsIHRoZSByZXNvbHZlcyBmb3IgdGhlIHZpZXcgbGVhZ3VlIHBhZ2UgYW5kIHJlaW5zdGFudGlhdGVzIHRoZSBjb250cm9sbGVyXG4gICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiB1cGRhdGVMZWFndWUgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMub3BlbkxlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZVBhcmFtcykge1xuICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBsZWFndWVQYXJhbXMuc2Vhc29uX2lkICsgXCIvbGVhZ3Vlcy9cIiArIGxlYWd1ZVBhcmFtcy5pZCArIFwiL29wZW5cIilcbiAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBvcGVuTGVhZ3VlIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgLy8gdG9kbzogdGhpcyByZWxpZXMgb24gYSBtb25rZXkgcGF0Y2ggYXQgdGhlIG1vbWVudCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyLXVpL3VpLXJvdXRlci9pc3N1ZXMvNTgyXG4gICAgICAgICAgLy8gYnV0IG1heSBiZSByZXNvbHZlZCB3aXRoIGZ1dHVyZSByZWxlYXNlcyBvZiBhbmd1bGFyLXVpLXJvdXRlclxuICAgICAgICAgICRzdGF0ZS5yZWxvYWQoKTsgLy8gcmVsb2FkcyBhbGwgdGhlIHJlc29sdmVzIGZvciB0aGUgdmlldyBsZWFndWUgcGFnZSBhbmQgcmVpbnN0YW50aWF0ZXMgdGhlIGNvbnRyb2xsZXJcbiAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSlcbiAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogb3BlbkxlYWd1ZSBmYWlsZWRcIik7XG4gICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5jbG9zZUxlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZVBhcmFtcykge1xuICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBsZWFndWVQYXJhbXMuc2Vhc29uX2lkICsgXCIvbGVhZ3Vlcy9cIiArIGxlYWd1ZVBhcmFtcy5pZCArIFwiL2Nsb3NlXCIpXG4gICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogY2xvc2VMZWFndWUgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAvLyB0b2RvOiB0aGlzIHJlbGllcyBvbiBhIG1vbmtleSBwYXRjaCBhdCB0aGUgbW9tZW50IC0gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXItdWkvdWktcm91dGVyL2lzc3Vlcy81ODJcbiAgICAgICAgICAvLyBidXQgbWF5IGJlIHJlc29sdmVkIHdpdGggZnV0dXJlIHJlbGVhc2VzIG9mIGFuZ3VsYXItdWktcm91dGVyXG4gICAgICAgICAgJHN0YXRlLnJlbG9hZCgpOyAvLyByZWxvYWRzIGFsbCB0aGUgcmVzb2x2ZXMgZm9yIHRoZSB2aWV3IGxlYWd1ZSBwYWdlIGFuZCByZWluc3RhbnRpYXRlcyB0aGUgY29udHJvbGxlclxuICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KVxuICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBjbG9zZUxlYWd1ZSBmYWlsZWRcIik7XG4gICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVMZWFndWVNZXNzYWdlID0gZnVuY3Rpb24obGVhZ3VlUGFyYW1zLCBlbWFpbE1lc3NhZ2UpIHtcbiAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAkaHR0cC5wdXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBsZWFndWVQYXJhbXMuc2Vhc29uX2lkICsgXCIvbGVhZ3Vlcy9cIiArIGxlYWd1ZVBhcmFtcy5pZCArIFwiL21lc3NhZ2VcIixcbiAgICAgICAgICAgIHsgbGVhZ3VlOiBsZWFndWVQYXJhbXMsIGVtYWlsTWVzc2FnZTogZW1haWxNZXNzYWdlIH0pXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IHVwZGF0ZUxlYWd1ZU1lc3NhZ2Ugc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGxlYWd1ZVBhcmFtcy5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiB1cGRhdGVMZWFndWVNZXNzYWdlIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLnNlbmRDb21taXNoTWVzc2FnZSA9IGZ1bmN0aW9uKGxlYWd1ZVBhcmFtcywgbWVzc2FnZSkge1xuICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgICAkaHR0cC5wdXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBsZWFndWVQYXJhbXMuc2Vhc29uX2lkICsgXCIvbGVhZ3Vlcy9cIiArIGxlYWd1ZVBhcmFtcy5pZCArIFwiL2NvbnRhY3RcIixcbiAgICAgICAgICAgIHsgY29udGFjdDogbWVzc2FnZSB9KVxuICAgICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogc2VuZENvbW1pc2hNZXNzYWdlIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiBzZW5kQ29tbWlzaE1lc3NhZ2UgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcblxuICB0aGlzLmNyZWF0ZUludml0ZSA9IGZ1bmN0aW9uKGludml0ZVBhcmFtcykge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnBvc3QoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImxlYWd1ZXMvXCIgKyBpbnZpdGVQYXJhbXMubGVhZ3VlX2lkICsgXCIvaW52aXRhdGlvbnNcIixcbiAgICAgICAgICAgIHsgaW52aXRhdGlvbjogaW52aXRlUGFyYW1zIH0pXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IGNyZWF0ZUludml0ZSBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkxlYWd1ZVNlcnZpY2U6IGNyZWF0ZUludml0ZSBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5yZXF1ZXN0SW52aXRlID0gZnVuY3Rpb24oaW52aXRlUGFyYW1zKSB7XG4gICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnBvc3QoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImxlYWd1ZXMvXCIgKyBpbnZpdGVQYXJhbXMubGVhZ3VlX2lkICsgXCIvaW52aXRhdGlvbnMvbmV3XCIsXG4gICAgICAgICAgICB7IGludml0YXRpb246IGludml0ZVBhcmFtcyB9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJMZWFndWVTZXJ2aWNlOiByZXF1ZXN0SW52aXRlIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiTGVhZ3VlU2VydmljZTogcmVxdWVzdEludml0ZSBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG59O1xuXG5MZWFndWVTZXJ2aWNlLiRpbmplY3QgPSBbJyRodHRwJywgJyRsb2cnLCAnJGxvY2F0aW9uJywgJyRxJywgJyRzdGF0ZScsICdhcGlDb25maWcnLCAnbWVzc2FnZU1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IExlYWd1ZVNlcnZpY2U7IiwidmFyIFRlYW1TZXJ2aWNlID0gZnVuY3Rpb24oJGh0dHAsICRsb2csICRsb2NhdGlvbiwgJHN0YXRlLCAkcSwgYXBpQ29uZmlnLCBtZXNzYWdlTW9kZWwpIHtcblxuICAgIHRoaXMuZ2V0VGVhbSA9IGZ1bmN0aW9uKGxlYWd1ZUlkLCB0ZWFtSWQpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImxlYWd1ZXMvXCIgKyBsZWFndWVJZCArIFwiL3RlYW1zL1wiICsgdGVhbUlkKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogZ2V0VGVhbSBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBnZXRUZWFtIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmdldEFsaXZlVGVhbXMgPSBmdW5jdGlvbihwYXJhbXMpIHtcbiAgICAgICAgdmFyIGFwaVVybCA9IGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZWFzb25zL1wiICsgcGFyYW1zLnNlYXNvbklkICsgXCIvdGVhbXMvYWxpdmVcIjtcbiAgICAgICAgaWYgKHBhcmFtcy5sZWFndWVJZCkge1xuICAgICAgICAgICAgYXBpVXJsICs9IFwiP2xlYWd1ZV9pZD1cIiArIHBhcmFtcy5sZWFndWVJZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaVVybClcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IGdldEFsaXZlVGVhbXMgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogZ2V0QWxpdmVUZWFtcyBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXREZWFkVGVhbXMgPSBmdW5jdGlvbihwYXJhbXMpIHtcbiAgICAgICAgdmFyIGFwaVVybCA9IGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZWFzb25zL1wiICsgcGFyYW1zLnNlYXNvbklkICsgXCIvdGVhbXMvZGVhZFwiO1xuICAgICAgICBpZiAocGFyYW1zLmxlYWd1ZUlkKSB7XG4gICAgICAgICAgICBhcGlVcmwgKz0gXCI/bGVhZ3VlX2lkPVwiICsgcGFyYW1zLmxlYWd1ZUlkO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpVXJsKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogZ2V0RGVhZFRlYW1zIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IGdldERlYWRUZWFtcyBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG5cbiAgICB0aGlzLmNyZWF0ZVRlYW0gPSBmdW5jdGlvbih0ZWFtUGFyYW1zKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAucG9zdChhcGlDb25maWcuYmFzZVVSTCArIFwibGVhZ3Vlcy9cIiArIHRlYW1QYXJhbXMubGVhZ3VlX2lkICsgXCIvdGVhbXNcIixcbiAgICAgICAgICAgIHsgdGVhbTogdGVhbVBhcmFtcyB9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogY3JlYXRlVGVhbSBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIC8vIHRvZG86IHRoaXMgcmVsaWVzIG9uIGEgbW9ua2V5IHBhdGNoIGF0IHRoZSBtb21lbnQgLSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci11aS91aS1yb3V0ZXIvaXNzdWVzLzU4MlxuICAgICAgICAgICAgICAgIC8vIGJ1dCBtYXkgYmUgcmVzb2x2ZWQgd2l0aCBmdXR1cmUgcmVsZWFzZXMgb2YgYW5ndWxhci11aS1yb3V0ZXJcbiAgICAgICAgICAgICAgICAkc3RhdGUucmVsb2FkKCk7IC8vIHJlbG9hZHMgYWxsIHRoZSByZXNvbHZlcyBmb3IgdGhlIHZpZXcgbGVhZ3VlIHBhZ2UgYW5kIHJlaW5zdGFudGlhdGVzIHRoZSBjb250cm9sbGVyXG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IGNyZWF0ZVRlYW0gZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMudXBkYXRlVGVhbSA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5wdXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcImxlYWd1ZXMvXCIgKyB0ZWFtLmxlYWd1ZS5pZCArIFwiL3RlYW1zL1wiICsgdGVhbS5pZCxcbiAgICAgICAgICAgIHsgdGVhbTogdGVhbSB9KVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogdXBkYXRlVGVhbSBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiB1cGRhdGVUZWFtIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLnVwZGF0ZVRlYW1NZXNzYWdlID0gZnVuY3Rpb24odGVhbVBhcmFtcywgZW1haWxNZXNzYWdlKSB7XG4gICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgJGh0dHAucHV0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJsZWFndWVzL1wiICsgdGVhbVBhcmFtcy5sZWFndWUuaWQgKyBcIi90ZWFtcy9cIiArIHRlYW1QYXJhbXMuaWQgKyBcIi9tZXNzYWdlXCIsXG4gICAgICAgIHsgdGVhbTogdGVhbVBhcmFtcywgZW1haWxNZXNzYWdlOiBlbWFpbE1lc3NhZ2UgfSlcbiAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICRsb2cuZGVidWcoXCJUZWFtU2VydmljZTogdXBkYXRlVGVhbU1lc3NhZ2Ugc3VjY2Vzc1wiKTtcbiAgICAgICAgICBtZXNzYWdlTW9kZWwuc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHRlYW1QYXJhbXMubWVzc2FnZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiB1cGRhdGVUZWFtTWVzc2FnZSBmYWlsZWRcIik7XG4gICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5hY3RpdmF0ZVRlYW0gPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgICRodHRwLnB1dChhcGlDb25maWcuYmFzZVVSTCArIFwibGVhZ3Vlcy9cIiArIHRlYW0ubGVhZ3VlLmlkICsgXCIvdGVhbXMvXCIgKyB0ZWFtLmlkICsgXCIvYWN0aXZhdGVcIilcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IGFjdGl2YXRlVGVhbSBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVGVhbVNlcnZpY2U6IGFjdGl2YXRlVGVhbSBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5kZWFjdGl2YXRlVGVhbSA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAgICAgJGh0dHAucHV0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJsZWFndWVzL1wiICsgdGVhbS5sZWFndWUuaWQgKyBcIi90ZWFtcy9cIiArIHRlYW0uaWQgKyBcIi9kZWFjdGl2YXRlXCIpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBkZWFjdGl2YXRlVGVhbSBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlRlYW1TZXJ2aWNlOiBkZWFjdGl2YXRlVGVhbSBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcblxufTtcblxuVGVhbVNlcnZpY2UuJGluamVjdCA9IFsnJGh0dHAnLCAnJGxvZycsICckbG9jYXRpb24nLCAnJHN0YXRlJywgJyRxJywgJ2FwaUNvbmZpZycsICdtZXNzYWdlTW9kZWwnXTtcbm1vZHVsZS5leHBvcnRzID0gVGVhbVNlcnZpY2U7IiwidmFyIFBpY2tTZXJ2aWNlID0gZnVuY3Rpb24oJGh0dHAsICRsb2csICRzdGF0ZSwgYXBpQ29uZmlnLCBtZXNzYWdlTW9kZWwpIHtcblxuICB0aGlzLmdldFJlZ3VsYXJQaWNrcyA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICAgIHZhciBhcGlVcmwgPSBhcGlDb25maWcuYmFzZVVSTCArIFwidGVhbXMvXCIgKyBwYXJhbXMudGVhbUlkICsgXCIvcGlja3MvcmVndWxhclwiO1xuXG4gICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpVXJsKVxuICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiUGlja1NlcnZpY2U6IGdldFJlZ3VsYXJQaWNrcyBzdWNjZXNzXCIpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pXG4gICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiUGlja1NlcnZpY2U6IGdldFJlZ3VsYXJQaWNrcyBmYWlsZWRcIik7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfTtcblxuICB0aGlzLmdldFBsYXlvZmZQaWNrcyA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICAgIHZhciBhcGlVcmwgPSBhcGlDb25maWcuYmFzZVVSTCArIFwidGVhbXMvXCIgKyBwYXJhbXMudGVhbUlkICsgXCIvcGlja3MvcGxheW9mZlwiO1xuXG4gICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpVXJsKVxuICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiUGlja1NlcnZpY2U6IGdldFBsYXlvZmZQaWNrcyBzdWNjZXNzXCIpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pXG4gICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiUGlja1NlcnZpY2U6IGdldFBsYXlvZmZQaWNrcyBmYWlsZWRcIik7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfTtcblxuICB0aGlzLmNyZWF0ZVBpY2sgPSBmdW5jdGlvbihwaWNrUGFyYW1zKSB7XG4gICAgdmFyIGFwaVVybCA9IGFwaUNvbmZpZy5iYXNlVVJMICsgXCJ0ZWFtcy9cIiArIHBpY2tQYXJhbXMudGVhbV9pZCArIFwiL3BpY2tzXCI7XG5cbiAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnBvc3QoYXBpVXJsLCB7IHBpY2s6IHBpY2tQYXJhbXMgfSlcbiAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIlBpY2tTZXJ2aWNlOiBjcmVhdGVQaWNrIHN1Y2Nlc3NcIik7XG4gICAgICAgIC8vIHRvZG86IHRoaXMgcmVsaWVzIG9uIGEgbW9ua2V5IHBhdGNoIGF0IHRoZSBtb21lbnQgLSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci11aS91aS1yb3V0ZXIvaXNzdWVzLzU4MlxuICAgICAgICAvLyBidXQgbWF5IGJlIHJlc29sdmVkIHdpdGggZnV0dXJlIHJlbGVhc2VzIG9mIGFuZ3VsYXItdWktcm91dGVyXG4gICAgICAgICRzdGF0ZS5yZWxvYWQoKTsgLy8gcmVsb2FkcyBhbGwgdGhlIHJlc29sdmVzIGZvciB0aGUgdmlldyBsZWFndWUgcGFnZSBhbmQgcmVpbnN0YW50aWF0ZXMgdGhlIGNvbnRyb2xsZXJcbiAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSlcbiAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJQaWNrU2VydmljZTogY3JlYXRlUGljayBmYWlsZWRcIik7XG4gICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH07XG5cbn07XG5cblBpY2tTZXJ2aWNlLiRpbmplY3QgPSBbJyRodHRwJywgJyRsb2cnLCAnJHN0YXRlJywgJ2FwaUNvbmZpZycsICdtZXNzYWdlTW9kZWwnXTtcbm1vZHVsZS5leHBvcnRzID0gUGlja1NlcnZpY2U7IiwidmFyIFNlYXNvblNlcnZpY2UgPSBmdW5jdGlvbigkaHR0cCwgJGxvZywgYXBpQ29uZmlnLCBzZWFzb25Nb2RlbCkge1xuXG4gICAgdGhpcy5nZXRDdXJyZW50U2Vhc29uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJzZWFzb25zL2N1cnJlbnRcIilcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiU2Vhc29uU2VydmljZTogZ2V0Q3VycmVudFNlYXNvbiBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHNlYXNvbk1vZGVsLnNldFNlYXNvbihkYXRhKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJTZWFzb25TZXJ2aWNlOiBnZXRDdXJyZW50U2Vhc29uIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbn07XG5cblNlYXNvblNlcnZpY2UuJGluamVjdCA9IFsnJGh0dHAnLCAnJGxvZycsICdhcGlDb25maWcnLCAnc2Vhc29uTW9kZWwnXTtcbm1vZHVsZS5leHBvcnRzID0gU2Vhc29uU2VydmljZTsiLCJ2YXIgV2Vla1NlcnZpY2UgPSBmdW5jdGlvbigkaHR0cCwgJGxvZywgYXBpQ29uZmlnKSB7XG5cbiAgICB0aGlzLmdldEF2YWlsYWJsZVdlZWtzID0gZnVuY3Rpb24oc2Vhc29uSWQpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBzZWFzb25JZCArIFwiL3dlZWtzL2F2YWlsYWJsZVwiKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJXZWVrU2VydmljZTogZ2V0QXZhaWxhYmxlV2Vla3Mgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJXZWVrU2VydmljZTogZ2V0QXZhaWxhYmxlV2Vla3MgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxufTtcblxuV2Vla1NlcnZpY2UuJGluamVjdCA9IFsnJGh0dHAnLCAnJGxvZycsICdhcGlDb25maWcnXTtcbm1vZHVsZS5leHBvcnRzID0gV2Vla1NlcnZpY2U7XG4iLCJ2YXIgR2FtZVNlcnZpY2UgPSBmdW5jdGlvbigkaHR0cCwgJGxvZywgYXBpQ29uZmlnKSB7XG5cbiAgdGhpcy5nZXRDdXJyZW50R2FtZXMgPSBmdW5jdGlvbihsZWFndWVJZCkge1xuICAgIHZhciBhcGlVcmwgPSBhcGlDb25maWcuYmFzZVVSTCArIFwiZ2FtZXMvY3VycmVudD9sZWFndWVfaWQ9XCIgKyBsZWFndWVJZDtcblxuICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KGFwaVVybClcbiAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIkdhbWVTZXJ2aWNlOiBnZXRDdXJyZW50R2FtZXMgc3VjY2Vzc1wiKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KVxuICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIkdhbWVTZXJ2aWNlOiBnZXRDdXJyZW50R2FtZXMgZmFpbGVkXCIpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH07XG5cbn07XG5cbkdhbWVTZXJ2aWNlLiRpbmplY3QgPSBbJyRodHRwJywgJyRsb2cnLCAnYXBpQ29uZmlnJ107XG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVTZXJ2aWNlOyIsImNvbW1hbmd1bGFyLmNyZWF0ZSgnU2lnbmluQ29tbWFuZCcsXG4gICAgZnVuY3Rpb24oJGxvZywgdXNlclNlcnZpY2UpIHtcblxuICAgIHJldHVybiB7XG5cbiAgICAgICAgZXhlY3V0ZTogZnVuY3Rpb24oZW1haWwsIHBhc3N3b3JkKSB7XG4gICAgICAgICAgICAkbG9nLmRlYnVnKCdTaWduaW5Db21tYW5kOiBhdXRoZW50aWNhdGluZyB1c2VyLi4uJyk7XG4gICAgICAgICAgICByZXR1cm4gdXNlclNlcnZpY2Uuc2lnbmluKGVtYWlsLCBwYXNzd29yZCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAkbG9nLmRlYnVnKFwiU2lnbmluQ29tbWFuZDogZmFpbHVyZTogXCIgKyBlcnJvci5kYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25SZXN1bHQ6IGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlNpZ25pbkNvbW1hbmQ6IHN1Y2Nlc3MgXCIpO1xuICAgICAgICB9XG5cbiAgICB9XG59KTtcbiIsImNvbW1hbmd1bGFyLmNyZWF0ZSgnU2lnbm91dENvbW1hbmQnLFxuICAgIGZ1bmN0aW9uKCRsb2csIHVzZXJTZXJ2aWNlKSB7XG5cbiAgICAgICAgcmV0dXJuIHtcblxuICAgICAgICAgICAgZXhlY3V0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZygnU2lnbm91dENvbW1hbmQ6IHNpZ25pbmcgb3V0IHVzZXIuLi4nKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlclNlcnZpY2Uuc2lnbm91dCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlNpZ25vdXRDb21tYW5kOiBmYWlsdXJlOiBcIiArIGVycm9yLmRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uUmVzdWx0OiBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiU2lnbm91dENvbW1hbmQ6IHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH0pO1xuIiwiXG5jb21tYW5ndWxhci5jcmVhdGUoJ0dldEN1cnJlbnRVc2VyQ29tbWFuZCcsXG4gICBmdW5jdGlvbigkbG9nLCB1c2VyU2VydmljZSwgdXNlck1vZGVsKSB7XG5cbiAgICByZXR1cm4ge1xuXG4gICAgICAgIGV4ZWN1dGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJGxvZy5kZWJ1ZygnR2V0Q3VycmVudFVzZXJDb21tYW5kOiBnZXR0aW5nIGN1cnJlbnQgdXNlciBkZXRhaWxzLi4uJyk7XG4gICAgICAgICAgICB2YXIgdXNlclByb21pc2UgPSB1c2VyU2VydmljZS5nZXRDdXJyZW50VXNlcigpO1xuICAgICAgICAgICAgcmV0dXJuIHVzZXJQcm9taXNlO1xuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkdldEN1cnJlbnRVc2VyQ29tbWFuZDogZmFpbHVyZTogXCIgKyBlcnJvci5kYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25SZXN1bHQ6IGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIkdldEN1cnJlbnRVc2VyQ29tbWFuZDogc3VjY2Vzc1wiKTtcbiAgICAgICAgfVxuXG4gICAgfVxufSk7IiwiXG5jb21tYW5ndWxhci5jcmVhdGUoJ1VwZGF0ZVVzZXJDb21tYW5kJyxcbiAgICBmdW5jdGlvbigkbG9nLCB1c2VyU2VydmljZSkge1xuXG4gICAgICAgIHJldHVybiB7XG5cbiAgICAgICAgICAgIGV4ZWN1dGU6IGZ1bmN0aW9uKHVzZXJQYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKCdVcGRhdGVVc2VyQ29tbWFuZDogdXBkYXRpbmcgYSB1c2VyLi4uJyk7XG4gICAgICAgICAgICAgICAgdmFyIHVzZXJQcm9taXNlID0gdXNlclNlcnZpY2UudXBkYXRlVXNlcih1c2VyUGFyYW1zKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlclByb21pc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25FcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKFwiVXBkYXRlVXNlckNvbW1hbmQ6IGZhaWx1cmU6IFwiICsgZXJyb3IuZGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25SZXN1bHQ6IGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoXCJVcGRhdGVVc2VyQ29tbWFuZDogc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfSk7XG4iLCJcbnZhciBPZmZzZXRGaWx0ZXIgPSBmdW5jdGlvbigkbG9nKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGlucHV0LCBzdGFydCkge1xuICAgICAgICBzdGFydCA9IHBhcnNlSW50KHN0YXJ0LCAxMCk7XG4gICAgICAgIHJldHVybiBpbnB1dC5zbGljZShzdGFydCk7XG4gICAgfTtcbn07XG5cbk9mZnNldEZpbHRlci4kaW5qZWN0ID0gWyckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IE9mZnNldEZpbHRlcjtcbiIsInZhciBBY3RpdmVUZWFtRmlsdGVyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBmdW5jdGlvbih0ZWFtcywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmluYWN0aXZlID09IHRydWUpIHtcbiAgICAgIHJldHVybiB0ZWFtcztcbiAgICB9XG4gICAgdmFyIGFjdGl2ZVRlYW1zID0gXy5maWx0ZXIodGVhbXMsIGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAgIHJldHVybiB0ZWFtLmFjdGl2ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gYWN0aXZlVGVhbXM7XG4gIH07XG59O1xuXG5BY3RpdmVUZWFtRmlsdGVyLiRpbmplY3QgPSBbXTtcbm1vZHVsZS5leHBvcnRzID0gQWN0aXZlVGVhbUZpbHRlcjtcbiIsInZhciBPcGVuTGVhZ3VlRmlsdGVyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBmdW5jdGlvbihsZWFndWVzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuY2xvc2VkID09IHRydWUpIHtcbiAgICAgIHJldHVybiBsZWFndWVzO1xuICAgIH1cbiAgICB2YXIgb3BlbkxlYWd1ZXMgPSBfLmZpbHRlcihsZWFndWVzLCBmdW5jdGlvbihsZWFndWUpIHtcbiAgICAgIHJldHVybiAhbGVhZ3VlLmNsb3NlZDtcbiAgICB9KTtcbiAgICByZXR1cm4gb3BlbkxlYWd1ZXM7XG4gIH07XG59O1xuXG5PcGVuTGVhZ3VlRmlsdGVyLiRpbmplY3QgPSBbXTtcbm1vZHVsZS5leHBvcnRzID0gT3BlbkxlYWd1ZUZpbHRlcjtcbiIsIlxudmFyIFRpbWVGaWx0ZXIgPSBmdW5jdGlvbigkbG9nKSB7XG4gICByZXR1cm4gZnVuY3Rpb24oaW5wdXQpIHtcblxuICAgICAgIGlmIChpbnB1dCA8IDEpIHtcbiAgICAgICAgICAgcmV0dXJuIFwiMDA6MDA6MDBcIjtcbiAgICAgICB9XG5cbiAgICAgICBmdW5jdGlvbiBmb3JtYXQodmFsKSB7XG4gICAgICAgICAgIHJldHVybiAodmFsPDEwID8gJzAnIDogJycpICsgdmFsO1xuICAgICAgIH1cblxuICAgICAgIHZhciBoID0gTWF0aC5mbG9vcigoaW5wdXQgLyAxMDAwKSAvIDM2MDApO1xuICAgICAgIHZhciBtID0gTWF0aC5mbG9vcigoKGlucHV0IC8gMTAwMCkgJSAzNjAwKSAvIDYwKTtcbiAgICAgICB2YXIgcyA9IE1hdGguZmxvb3IoKGlucHV0IC8gMTAwMCkgJSA2MCk7XG4gICAgICAgcmV0dXJuIGZvcm1hdChoKSArIFwiOlwiICsgZm9ybWF0KG0pICsgXCI6XCIgKyBmb3JtYXQocyk7XG4gICB9XG5cbn07XG5cblRpbWVGaWx0ZXIuJGluamVjdCA9IFsnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBUaW1lRmlsdGVyO1xuIiwidmFyIEhvbWVDb250cm9sbGVyID0gZnVuY3Rpb24oJHNjb3BlLCAkbG9nLCAkbG9jYXRpb24sICRtb2RhbCwgc2Vhc29uTW9kZWwsIHdlZWtTZXJ2aWNlLCBsZWFndWVTZXJ2aWNlKSB7XG5cbiAgICAkc2NvcGUuc2Vhc29uID0gc2Vhc29uTW9kZWwuc2Vhc29uO1xuXG4gICAgJHNjb3BlLmNyZWF0ZUxlYWd1ZSA9IGZ1bmN0aW9uKHNlYXNvbikge1xuXG4gICAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL25ldy9sZWFndWUubmV3LnRwbC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ05ld0xlYWd1ZUNvbnRyb2xsZXInLFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgd2Vla3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHdlZWtTZXJ2aWNlLmdldEF2YWlsYWJsZVdlZWtzKHNlYXNvbi5pZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH0pO1xuXG4gICAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgICAgICBsZWFndWVTZXJ2aWNlLmNyZWF0ZUxlYWd1ZShsZWFndWUpO1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKCdDcmVhdGUgbGVhZ3VlIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgJHNjb3BlLmpvaW5MZWFndWUgPSBmdW5jdGlvbihzZWFzb24pIHtcbiAgICAgICAgJGxvY2F0aW9uLnBhdGgoJy9zZWFzb24vJyArIHNlYXNvbi5pZCArICcvbGVhZ3Vlcy9wdWJsaWMnKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLnZpZXdUZWFtcyA9IGZ1bmN0aW9uKHNlYXNvbikge1xuICAgICAgJGxvY2F0aW9uLnBhdGgoJy9zZWFzb24vJyArIHNlYXNvbi5pZCArICcvdGVhbXMvYWxpdmUnKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLnZpZXdMZWFndWVzID0gZnVuY3Rpb24oc2Vhc29uKSB7XG4gICAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgc2Vhc29uLmlkICsgJy9sZWFndWVzJyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiaG9tZSBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xufTtcblxuSG9tZUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnLCAnJGxvY2F0aW9uJywgJyRtb2RhbCcsICdzZWFzb25Nb2RlbCcsICd3ZWVrU2VydmljZScsICdsZWFndWVTZXJ2aWNlJ107XG5tb2R1bGUuZXhwb3J0cyA9IEhvbWVDb250cm9sbGVyO1xuIiwidmFyIEZhcUNvbnRyb2xsZXIgPSBmdW5jdGlvbigkbW9kYWxJbnN0YW5jZSwgJHNjb3BlLCAkbG9nKSB7XG5cbiAgJHNjb3BlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2Nsb3NlJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcImZhcSBjb250cm9sbGVyXCIpO1xuICB9O1xuICBpbml0KCk7XG59O1xuXG5GYXFDb250cm9sbGVyLiRpbmplY3QgPSBbJyRtb2RhbEluc3RhbmNlJywgJyRzY29wZScsICckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IEZhcUNvbnRyb2xsZXI7XG4iLCJ2YXIgU2lnbmluQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJGxvZywgJGxvY2F0aW9uLCAkbW9kYWwsIHVzZXJTZXJ2aWNlKSB7XG5cbiAgICAkc2NvcGUuY3JlZGVudGlhbHMgPSB7XG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgfTtcblxuICAgICRzY29wZS5zaWduaW4gPSBmdW5jdGlvbihjcmVkZW50aWFscykge1xuICAgICAgICAkbG9nLmRlYnVnKFwic2lnbmluIGNyZWRlbnRpYWxzOiBcIiArIGNyZWRlbnRpYWxzKTtcbiAgICAgICAgJHNjb3BlLmRpc3BhdGNoKFwiU2lnbmluRXZlbnRcIiwgY3JlZGVudGlhbHMpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuZm9yZ290UGFzc3dvcmQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gdG9kbzogaW1wbGVtZW50IHRoaXNcbiAgICAgICAgYWxlcnQoJ3RvdWdoIHNoaXQnKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLnJlc2V0UGFzc3dvcmQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL3VzZXIvcmVzZXQvdXNlci5yZXNldC50cGwuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdVc2VyUmVzZXRDb250cm9sbGVyJ1xuICAgICAgfSk7XG5cbiAgICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24gKGVtYWlsKSB7XG4gICAgICAgIHVzZXJTZXJ2aWNlLnJlc2V0VXNlcihlbWFpbCk7XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoJ1Jlc2V0IHBhc3N3b3JkIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgICRzY29wZS5yZWdpc3RlciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci9yZWdpc3Rlci50cGwuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdSZWdpc3RlckNvbnRyb2xsZXInXG4gICAgICB9KTtcblxuICAgICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihuZXdVc2VyKSB7XG4gICAgICAgIHVzZXJTZXJ2aWNlLmNyZWF0ZVVzZXIobmV3VXNlcik7XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoJ1JlZ2lzdGVyIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJzaWduaW4gY29udHJvbGxlclwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcblxufTtcblxuU2lnbmluQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZycsICckbG9jYXRpb24nLCAnJG1vZGFsJywgJ3VzZXJTZXJ2aWNlJ107XG5tb2R1bGUuZXhwb3J0cyA9IFNpZ25pbkNvbnRyb2xsZXI7XG4iLCJ2YXIgUmVnaXN0ZXJDb250cm9sbGVyID0gZnVuY3Rpb24oJHNjb3BlLCAkbG9nLCAkbW9kYWwsICRtb2RhbEluc3RhbmNlKSB7XG5cbiAgICAkc2NvcGUubmV3VXNlckRhdGEgPSB7XG4gICAgICAgIGZpcnN0X25hbWU6ICcnLFxuICAgICAgICBsYXN0X25hbWU6ICcnLFxuICAgICAgICBuaWNrbmFtZTogJycsXG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICBwYXNzd29yZF9jb25maXJtYXRpb246ICcnXG4gICAgfTtcblxuICAgICRzY29wZS5yZWdpc3RlciA9IGZ1bmN0aW9uIChuZXdVc2VyKSB7XG4gICAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZShuZXdVc2VyKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICAgICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLnNob3dUZXJtcyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci90ZXJtcy9yZWdpc3Rlci50ZXJtcy50cGwuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdSZWdpc3RlclRlcm1zQ29udHJvbGxlcidcbiAgICAgIH0pO1xuXG4gICAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gZG8gbmFkYVxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKCdUZXJtcyBhbmQgY29uZGl0aW9ucyBtb2RhbCBjbG9zZWQuLi4nKTtcbiAgICAgIH0pO1xuXG4gICAgfTtcblxuICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcInJlZ2lzdGVyIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cblJlZ2lzdGVyQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZycsICckbW9kYWwnLCAnJG1vZGFsSW5zdGFuY2UnXTtcbm1vZHVsZS5leHBvcnRzID0gUmVnaXN0ZXJDb250cm9sbGVyO1xuIiwiXG52YXIgVXNlckNvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2csIHVzZXJNb2RlbCkge1xuXG4gICAgJHNjb3BlLnVzZXJEYXRhID0gYW5ndWxhci5jb3B5KHVzZXJNb2RlbCk7XG5cbiAgICAkc2NvcGUudXBkYXRlID0gZnVuY3Rpb24odXNlcikge1xuICAgICAgICAkc2NvcGUuZGlzcGF0Y2goJ1VwZGF0ZVVzZXJFdmVudCcsIHsgdXNlclBhcmFtczogdXNlciB9KTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmhhc0Vycm9yID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gICAgfTtcblxuICAgICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRlcnJvcltwcm9wZXJ0eV07XG4gICAgfTtcblxuICAgICRzY29wZS4kb24oJ3VzZXJNb2RlbDo6dXNlclVwZGF0ZWQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAkc2NvcGUudXNlckRhdGEgPSBhbmd1bGFyLmNvcHkodXNlck1vZGVsKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKFwidXNlciBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5Vc2VyQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZycsICd1c2VyTW9kZWwnXTtcbm1vZHVsZS5leHBvcnRzID0gVXNlckNvbnRyb2xsZXI7XG4iLCJcbnZhciBMZWFndWVDb250cm9sbGVyID0gZnVuY3Rpb24oJHNjb3BlLCAkbG9nKSB7XG5cbiAgICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICAgICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJsZWFndWUgY29udHJvbGxlclwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcblxufTtcblxuTGVhZ3VlQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBMZWFndWVDb250cm9sbGVyO1xuIiwiXG52YXIgTGVhZ3Vlc0NvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2csICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBzZWFzb25Nb2RlbCkge1xuXG4gICAgJHNjb3BlLnNlYXNvbiA9IHNlYXNvbk1vZGVsLnNlYXNvbjtcblxuICAgIC8vIHBhZ2luYXRpb25cbiAgICAkc2NvcGUuY3VycmVudExlYWd1ZVBhZ2UgPSAxO1xuICAgICRzY29wZS5sZWFndWVzUGVyUGFnZSA9IDEwO1xuXG4gICAgJHNjb3BlLnNlYXNvbklkID0gJHN0YXRlUGFyYW1zLnNlYXNvbklkO1xuXG4gICAgJHNjb3BlLmlzUHVibGljID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAkc3RhdGUuY3VycmVudC5uYW1lID09ICdwcml2YXRlLmxlYWd1ZXMuam9pbi5wdWJsaWMnO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcImxlYWd1ZXMgY29udHJvbGxlclwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcblxufTtcblxuTGVhZ3Vlc0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnLCAnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICdzZWFzb25Nb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBMZWFndWVzQ29udHJvbGxlcjtcblxuIiwidmFyIFRlYW1Db250cm9sbGVyID0gZnVuY3Rpb24oJHNjb3BlLCAkbG9nKSB7XG5cbiAgICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICAgICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJ0ZWFtIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cblRlYW1Db250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IFRlYW1Db250cm9sbGVyO1xuIiwidmFyIFRlYW1zQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJGxvZywgJHN0YXRlLCAkbG9jYXRpb24sICRzdGF0ZVBhcmFtcykge1xuXG4gICAgJHNjb3BlLnNlYXNvbklkID0gJHN0YXRlUGFyYW1zLnNlYXNvbklkO1xuXG4gICAgLy8gcGFnaW5hdGlvblxuICAgICRzY29wZS5jdXJyZW50VGVhbVBhZ2UgPSAxO1xuICAgICRzY29wZS50ZWFtc1BlclBhZ2UgPSAxMDtcblxuICAgICRzY29wZS5pc0FsaXZlU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICRzdGF0ZS5jdXJyZW50Lm5hbWUgPT0gJ3ByaXZhdGUudGVhbXMuYWxpdmUnO1xuICAgIH07XG5cbiAgICAkc2NvcGUuaGFzTm9QaWNrID0gZnVuY3Rpb24odGVhbSkge1xuICAgICAgcmV0dXJuIHRlYW0ubGFzdF9waWNrX3NxdWFkX25hbWUgPT0gJ05vbmUnO1xuICAgIH07XG5cbiAgICAkc2NvcGUuY3JlYXRlVGVhbSA9IGZ1bmN0aW9uKHNlYXNvbklkKSB7XG4gICAgICAgICRsb2NhdGlvbi5wYXRoKCcvc2Vhc29uLycgKyBzZWFzb25JZCArICcvbGVhZ3Vlcy9wdWJsaWMnKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmFsaXZlVGVhbXMgPSBmdW5jdGlvbihzZWFzb25JZCkge1xuICAgICAgJGxvY2F0aW9uLnBhdGgoJy9zZWFzb24vJyArIHNlYXNvbklkICsgJy90ZWFtcy9hbGl2ZScpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuZGVhZFRlYW1zID0gZnVuY3Rpb24oc2Vhc29uSWQpIHtcbiAgICAgICRsb2NhdGlvbi5wYXRoKCcvc2Vhc29uLycgKyBzZWFzb25JZCArICcvdGVhbXMvZGVhZCcpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuc2hvd1RlYW0gPSBmdW5jdGlvbihzZWFzb25JZCwgdGVhbSkge1xuICAgICAgJGxvY2F0aW9uLnBhdGgoJy9zZWFzb24vJyArIHNlYXNvbklkICsgJy9sZWFndWUvJyArIHRlYW0ubGVhZ3VlLmlkICsgJy90ZWFtLycgKyB0ZWFtLmlkKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJ0ZWFtcyBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5UZWFtc0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnLCAnJHN0YXRlJywgJyRsb2NhdGlvbicsICckc3RhdGVQYXJhbXMnXTtcbm1vZHVsZS5leHBvcnRzID0gVGVhbXNDb250cm9sbGVyO1xuIiwidmFyIEhlYWRlckNvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2csICRsb2NhdGlvbiwgJG1vZGFsLCAkc3RhdGUsICRhbmNob3JTY3JvbGwsIHdlZWtTZXJ2aWNlLCB1c2VyU2VydmljZSwgbGVhZ3VlU2VydmljZSwgdXNlck1vZGVsLCBzZWFzb25Nb2RlbCkge1xuXG4gICAgdmFyIHNjcm9sbFRvVG9wID0gZnVuY3Rpb24oKSB7XG4gICAgICAkYW5jaG9yU2Nyb2xsKCk7IC8vIGhhY2t5P1xuICAgIH07XG5cbiAgICAkc2NvcGUuaXNDb2xsYXBzZWQgPSB0cnVlO1xuXG4gICAgJHNjb3BlLnVzZXJEYXRhID0gdXNlck1vZGVsO1xuXG4gICAgJHNjb3BlLnNlYXNvbiA9IHNlYXNvbk1vZGVsLnNlYXNvbjtcblxuICAgICRzY29wZS5jcmVkZW50aWFscyA9IHtcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJydcbiAgICB9O1xuXG4gICAgJHNjb3BlLmlzU3RhdGUgPSBmdW5jdGlvbihzdGF0ZXMpIHtcbiAgICAgIHJldHVybiBfLmluZGV4T2Yoc3RhdGVzLCAkc3RhdGUuY3VycmVudC5uYW1lKSA+IC0xO1xuICAgIH07XG5cbiAgICAkc2NvcGUuaG9tZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkbG9jYXRpb24ucGF0aCgnLycpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuZmFxID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHVibGljL2ZhcS9mYXEudHBsLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnRmFxQ29udHJvbGxlcidcbiAgICAgIH0pO1xuXG4gICAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKG5ld1VzZXIpIHtcbiAgICAgICAgdXNlclNlcnZpY2UuY3JlYXRlVXNlcihuZXdVc2VyKTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZygnRkFRIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgJHNjb3BlLnJlZ2lzdGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHVibGljL3JlZ2lzdGVyL3JlZ2lzdGVyLnRwbC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1JlZ2lzdGVyQ29udHJvbGxlcidcbiAgICAgIH0pO1xuXG4gICAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKG5ld1VzZXIpIHtcbiAgICAgICAgdXNlclNlcnZpY2UuY3JlYXRlVXNlcihuZXdVc2VyKTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZygnUmVnaXN0ZXIgbW9kYWwgZGlzbWlzc2VkLi4uJyk7XG4gICAgICB9KTtcblxuICAgIH07XG5cbiAgICAkc2NvcGUuam9pbkxlYWd1ZSA9IGZ1bmN0aW9uKHNlYXNvbikge1xuICAgICAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgc2Vhc29uLmlkICsgJy9sZWFndWVzL3B1YmxpYycpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuY3JlYXRlTGVhZ3VlID0gZnVuY3Rpb24oc2Vhc29uKSB7XG5cbiAgICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbmV3L2xlYWd1ZS5uZXcudHBsLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnTmV3TGVhZ3VlQ29udHJvbGxlcicsXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICB3ZWVrczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gd2Vla1NlcnZpY2UuZ2V0QXZhaWxhYmxlV2Vla3Moc2Vhc29uLmlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgfSk7XG5cbiAgICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgICAgIGxlYWd1ZVNlcnZpY2UuY3JlYXRlTGVhZ3VlKGxlYWd1ZSk7XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoJ0NyZWF0ZSBsZWFndWUgbW9kYWwgZGlzbWlzc2VkLi4uJyk7XG4gICAgICB9KTtcblxuICAgIH07XG5cbiAgICAkc2NvcGUubWFuYWdlVGVhbXMgPSBmdW5jdGlvbihzZWFzb24pIHtcbiAgICAgICAgJGxvY2F0aW9uLnBhdGgoJy9zZWFzb24vJyArIHNlYXNvbi5pZCArICcvdGVhbXMvYWxpdmUnKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLm1hbmFnZUxlYWd1ZXMgPSBmdW5jdGlvbihzZWFzb24pIHtcbiAgICAgICAgJGxvY2F0aW9uLnBhdGgoJy9zZWFzb24vJyArIHNlYXNvbi5pZCArICcvbGVhZ3VlcycpO1xuICAgIH07XG5cbiAgICAkc2NvcGUudXNlclByb2ZpbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJGxvY2F0aW9uLnBhdGgoJy91c2VyJyk7XG4gICAgfTtcblxuICAgICRzY29wZS5zaWduaW4gPSBmdW5jdGlvbihjcmVkZW50aWFscykge1xuICAgICAgICAkbG9nLmRlYnVnKFwic2lnbmluIGNyZWRlbnRpYWxzOiBcIiArIGNyZWRlbnRpYWxzKTtcbiAgICAgICAgJHNjb3BlLmRpc3BhdGNoKFwiU2lnbmluRXZlbnRcIiwgY3JlZGVudGlhbHMpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuc2lnbm91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkc2NvcGUuY3JlZGVudGlhbHMgPSB7XG4gICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICBwYXNzd29yZDogJydcbiAgICAgICAgfTtcbiAgICAgICAgJHNjb3BlLmRpc3BhdGNoKFwiU2lnbm91dEV2ZW50XCIpO1xuICAgIH07XG5cbiAgICAkc2NvcGUucmVzZXRQYXNzd29yZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvdXNlci9yZXNldC91c2VyLnJlc2V0LnRwbC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1VzZXJSZXNldENvbnRyb2xsZXInXG4gICAgICB9KTtcblxuICAgICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbiAoZW1haWwpIHtcbiAgICAgICAgdXNlclNlcnZpY2UucmVzZXRVc2VyKGVtYWlsKTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZygnUmVzZXQgcGFzc3dvcmQgbW9kYWwgZGlzbWlzc2VkLi4uJyk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJoZWFkZXIgY29udHJvbGxlclwiKTtcbiAgICAgICAgc2Nyb2xsVG9Ub3AoKTtcbiAgICB9O1xuICAgIGluaXQoKTtcbn07XG5cbkhlYWRlckNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnLCAnJGxvY2F0aW9uJywgJyRtb2RhbCcsICckc3RhdGUnLCAnJGFuY2hvclNjcm9sbCcsICd3ZWVrU2VydmljZScsICd1c2VyU2VydmljZScsICdsZWFndWVTZXJ2aWNlJywgJ3VzZXJNb2RlbCcsICdzZWFzb25Nb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBIZWFkZXJDb250cm9sbGVyO1xuIiwidmFyIE1lc3NhZ2VDb250cm9sbGVyID0gZnVuY3Rpb24oJHNjb3BlLCAkbG9nLCBtZXNzYWdlTW9kZWwpIHtcblxuICAgICRzY29wZS5tZXNzYWdlRGF0YSA9IG1lc3NhZ2VNb2RlbDtcblxuICAgICRzY29wZS5kaXNtaXNzTWVzc2FnZSA9IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgbWVzc2FnZS5yZXNldE1lc3NhZ2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIm1lc3NhZ2UgY29udHJvbGxlclwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcbn07XG5cbk1lc3NhZ2VDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJywgJ21lc3NhZ2VNb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBNZXNzYWdlQ29udHJvbGxlcjtcbiIsInZhciBGb290ZXJDb250cm9sbGVyID0gZnVuY3Rpb24oJHNjb3BlLCAkbG9nLCAkbW9kYWwsICRsb2NhdGlvbiwgd2Vla1NlcnZpY2UsIGxlYWd1ZVNlcnZpY2UsIHNlYXNvbk1vZGVsKSB7XG5cbiAgJHNjb3BlLnNlYXNvbiA9IHNlYXNvbk1vZGVsLnNlYXNvbjtcblxuICAkc2NvcGUuam9pbkxlYWd1ZSA9IGZ1bmN0aW9uKHNlYXNvbikge1xuICAgICRsb2NhdGlvbi5wYXRoKCcvc2Vhc29uLycgKyBzZWFzb24uaWQgKyAnL2xlYWd1ZXMvcHVibGljJyk7XG4gIH07XG5cbiAgJHNjb3BlLmNyZWF0ZUxlYWd1ZSA9IGZ1bmN0aW9uKHNlYXNvbikge1xuXG4gICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbmV3L2xlYWd1ZS5uZXcudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ05ld0xlYWd1ZUNvbnRyb2xsZXInLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICB3ZWVrczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHdlZWtTZXJ2aWNlLmdldEF2YWlsYWJsZVdlZWtzKHNlYXNvbi5pZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihsZWFndWUpIHtcbiAgICAgIGxlYWd1ZVNlcnZpY2UuY3JlYXRlTGVhZ3VlKGxlYWd1ZSk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnQ3JlYXRlIGxlYWd1ZSBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICB9KTtcblxuICB9O1xuXG4gICRzY29wZS5tYW5hZ2VUZWFtcyA9IGZ1bmN0aW9uKHNlYXNvbikge1xuICAgICRsb2NhdGlvbi5wYXRoKCcvc2Vhc29uLycgKyBzZWFzb24uaWQgKyAnL3RlYW1zL2FsaXZlJyk7XG4gIH07XG5cbiAgJHNjb3BlLm1hbmFnZUxlYWd1ZXMgPSBmdW5jdGlvbihzZWFzb24pIHtcbiAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgc2Vhc29uLmlkICsgJy9sZWFndWVzJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcImZvb3RlciBjb250cm9sbGVyXCIpO1xuICB9O1xuICBpbml0KCk7XG59O1xuXG5Gb290ZXJDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJywgJyRtb2RhbCcsICckbG9jYXRpb24nLCAnd2Vla1NlcnZpY2UnLCAnbGVhZ3VlU2VydmljZScsICdzZWFzb25Nb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBGb290ZXJDb250cm9sbGVyO1xuIiwidmFyIEFwcGxpY2F0aW9uU2VydmljZSA9XG4gICAgZnVuY3Rpb24oJHdpbmRvdywgJGxvY2F0aW9uLCAkbG9nLCAkY29tbWFuZ3VsYXIpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogIEFwcGxpY2F0aW9uIFN0YXJ0dXAgUHJvY2Vzc1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zdGFydHVwID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzdGFydHVwUHJvY2VzcygpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBzdGFydHVwUHJvY2VzcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gYW55dGhpbmcgeW91IHdhbnQgdG8gaGFwcGVuIG9uIGFwcCBzdGFydHVwXG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkbG9nLmRlYnVnKFwiQXBwbGljYXRpb25TZXJ2aWNlIGluaXQgYXBwbGljYXRpb24gc2VydmljZVwiKTtcbiAgICAgICAgfTtcbiAgICAgICAgaW5pdCgpO1xuXG4gICAgfTtcblxuQXBwbGljYXRpb25TZXJ2aWNlLiRpbmplY3QgPSBbJyR3aW5kb3cnLCAnJGxvY2F0aW9uJywgJyRsb2cnLCAnJGNvbW1hbmd1bGFyJ107XG5tb2R1bGUuZXhwb3J0cyA9IEFwcGxpY2F0aW9uU2VydmljZTtcbiIsInZhciBGb2N1c0RpcmVjdGl2ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBGT0NVU19DTEFTUyA9ICduZy1mb2N1c2VkJztcbiAgICByZXR1cm4ge1xuICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICByZXF1aXJlOiAnbmdNb2RlbCcsXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3RybCkge1xuICAgICAgICAgICAgY3RybC4kZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgZWxlbWVudC5iaW5kKCdmb2N1cycsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoRk9DVVNfQ0xBU1MpO1xuICAgICAgICAgICAgICAgIHNjb3BlLiRhcHBseShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgY3RybC4kZm9jdXNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS5iaW5kKCdibHVyJywgZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDbGFzcyhGT0NVU19DTEFTUyk7XG4gICAgICAgICAgICAgICAgc2NvcGUuJGFwcGx5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBjdHJsLiRmb2N1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRm9jdXNEaXJlY3RpdmU7XG4iLCJ2YXIgTWF0Y2hEaXJlY3RpdmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZXF1aXJlOiAnbmdNb2RlbCcsXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbSwgYXR0cnMsIGN0cmwpIHtcbiAgICAgICAgICAgIHNjb3BlLiR3YXRjaCgnWycgKyBhdHRycy5uZ01vZGVsICsgJywgJyArIGF0dHJzLm1hdGNoICsgJ10nLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBhID0gdmFsdWVbMF0gfHwgJyc7XG4gICAgICAgICAgICAgICAgdmFyIGIgPSB2YWx1ZVsxXSB8fCAnJztcbiAgICAgICAgICAgICAgICBjdHJsLiRzZXRWYWxpZGl0eSgnbWF0Y2gnLCBhID09PSBiKTtcbiAgICAgICAgICAgIH0sIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXRjaERpcmVjdGl2ZTtcbiIsIi8qIGF0dHJpYnV0ZSB3aWxsIGVuZm9yY2UgYSByZWcgZXggcGF0dGVybiBpZiB0aGUgZmllbGQgaXMgbWFya2VkIGFzIG5nLXJlcXVpcmVkICovXG52YXIgUmVxdWlyZWRQYXR0ZXJuRGlyZWN0aXZlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6IFwiQVwiLFxuICAgICAgICByZXF1aXJlOiBcIm5nTW9kZWxcIixcbiAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsLCBhdHRycywgbmdNb2RlbCkge1xuICAgICAgICAgICAgdmFyIHZhbGlkYXRvciwgcGF0dGVyblZhbGlkYXRvcixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuID0gYXR0cnMucnBhdHRlcm4sXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiggcGF0dGVybiApIHtcbiAgICAgICAgICAgICAgICBpZiAocGF0dGVybi5tYXRjaCgvXlxcLyguKilcXC8kLykpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiA9IG5ldyBSZWdFeHAocGF0dGVybi5zdWJzdHIoMSwgcGF0dGVybi5sZW5ndGggLSAyKSk7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm5WYWxpZGF0b3IgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHBhdHRlcm4sIHZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVyblZhbGlkYXRvciA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGF0dGVybk9iaiA9IHNjb3BlLiRldmFsKHBhdHRlcm4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwYXR0ZXJuT2JqIHx8ICFwYXR0ZXJuT2JqLnRlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkICcgKyBwYXR0ZXJuICsgJyB0byBiZSBhIFJlZ0V4cCBidXQgd2FzICcgKyBwYXR0ZXJuT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0ZShwYXR0ZXJuT2JqLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZ01vZGVsLiRmb3JtYXR0ZXJzLnB1c2gocGF0dGVyblZhbGlkYXRvcik7XG4gICAgICAgICAgICBuZ01vZGVsLiRwYXJzZXJzLnB1c2gocGF0dGVyblZhbGlkYXRvcik7XG5cbiAgICAgICAgICAgIGF0dHJzLiRvYnNlcnZlKFwicmVxdWlyZWRcIiwgZnVuY3Rpb24obmV3dmFsKSB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQgPSBuZXd2YWw7XG4gICAgICAgICAgICAgICAgcGF0dGVyblZhbGlkYXRvcihuZ01vZGVsLiR2aWV3VmFsdWUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHJlZ2V4cCwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiggdmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PT0gXCJcIiB8fCAhcmVxdWlyZWQgfHwgcmVnZXhwLnRlc3QodmFsdWUpICkge1xuICAgICAgICAgICAgICAgICAgICBuZ01vZGVsLiRzZXRWYWxpZGl0eSgncGF0dGVybicsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZ01vZGVsLiRzZXRWYWxpZGl0eSgncGF0dGVybicsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVxdWlyZWRQYXR0ZXJuRGlyZWN0aXZlOyIsInZhciBSZWdpc3RlclRlcm1zQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRtb2RhbEluc3RhbmNlLCAkc2NvcGUsICRsb2cpIHtcblxuICAkc2NvcGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2xvc2UnKTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwicmVnaXN0ZXIgdGVybXMgYW5kIGNvbmRpdGlvbnMgY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuUmVnaXN0ZXJUZXJtc0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJG1vZGFsSW5zdGFuY2UnLCAnJHNjb3BlJywgJyRsb2cnXTtcbm1vZHVsZS5leHBvcnRzID0gUmVnaXN0ZXJUZXJtc0NvbnRyb2xsZXI7XG4iLCJ2YXIgVXNlclJlc2V0Q29udHJvbGxlciA9IGZ1bmN0aW9uKCRtb2RhbEluc3RhbmNlLCAkc2NvcGUsICRsb2cpIHtcblxuICAkc2NvcGUudXNlckRhdGEgPSB7XG4gICAgZW1haWw6IFwiXCJcbiAgfTtcblxuICAkc2NvcGUucmVzZXQgPSBmdW5jdGlvbiAoZW1haWwpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZShlbWFpbCk7XG4gIH07XG5cbiAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgfTtcblxuICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICB9O1xuXG4gICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwidXNlciByZXNldCBjb250cm9sbGVyXCIpO1xuICB9O1xuICBpbml0KCk7XG59O1xuXG5Vc2VyUmVzZXRDb250cm9sbGVyLiRpbmplY3QgPSBbJyRtb2RhbEluc3RhbmNlJywgJyRzY29wZScsICckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IFVzZXJSZXNldENvbnRyb2xsZXI7XG4iLCJ2YXIgTmV3TGVhZ3VlQ29udHJvbGxlciA9IGZ1bmN0aW9uKHdlZWtzLCAkc2NvcGUsICRsb2csICRtb2RhbEluc3RhbmNlKSB7XG5cbiAgICAkc2NvcGUud2Vla3MgPSB3ZWVrcy5kYXRhO1xuXG4gICAgJHNjb3BlLm5ld0xlYWd1ZURhdGEgPSB7XG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBzZWFzb25faWQ6ICRzY29wZS53ZWVrc1swXS5zZWFzb25faWQsXG4gICAgICAgIHN0YXJ0X3dlZWtfaWQ6ICRzY29wZS53ZWVrc1swXS5pZCxcbiAgICAgICAgcHVibGljOiB0cnVlLFxuICAgICAgICBtYXhfdGVhbXNfcGVyX3VzZXI6ICcnXG4gICAgfTtcblxuICAgICRzY29wZS5jcmVhdGVMZWFndWUgPSBmdW5jdGlvbihsZWFndWUpIHtcbiAgICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKGxlYWd1ZSk7XG4gICAgfTtcblxuICAgICRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gICAgfTtcblxuICAgICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kZXJyb3JbcHJvcGVydHldO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcIm5ldyBsZWFndWUgY29udHJvbGxlclwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcblxufTtcblxuTmV3TGVhZ3VlQ29udHJvbGxlci4kaW5qZWN0ID0gWyd3ZWVrcycsICckc2NvcGUnLCAnJGxvZycsICckbW9kYWxJbnN0YW5jZSddO1xubW9kdWxlLmV4cG9ydHMgPSBOZXdMZWFndWVDb250cm9sbGVyO1xuIiwidmFyIFZpZXdMZWFndWVDb250cm9sbGVyID0gZnVuY3Rpb24obGVhZ3VlLCBhbGl2ZVRlYW1zLCBkZWFkVGVhbXMsICRzY29wZSwgJGxvZywgJG1vZGFsLCAkbG9jYXRpb24sIHVzZXJNb2RlbCwgd2Vla1NlcnZpY2UsIHRlYW1TZXJ2aWNlLCBsZWFndWVTZXJ2aWNlKSB7XG5cbiAgJHNjb3BlLmxlYWd1ZURhdGEgPSBsZWFndWUuZGF0YTtcblxuICAkc2NvcGUuYWxpdmVUZWFtcyA9IGFsaXZlVGVhbXMuZGF0YTtcbiAgJHNjb3BlLmRlYWRUZWFtcyA9IGRlYWRUZWFtcy5kYXRhO1xuXG4gIC8vIHBhZ2luYXRpb25cbiAgJHNjb3BlLmN1cnJlbnRUZWFtUGFnZSA9IDE7XG4gICRzY29wZS50ZWFtc1BlclBhZ2UgPSAxMDtcblxuICAkc2NvcGUudGVhbU9wdGlvbnMgPSB7IGFjdGl2ZTogdHJ1ZSwgaW5hY3RpdmU6IGZhbHNlIH07XG5cbiAgJHNjb3BlLm1lc3NhZ2UgPSBmdW5jdGlvbihsZWFndWUpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdJIGdvdCBub3RoaW5nLic7XG4gICAgaWYgKGxlYWd1ZS5tZXNzYWdlICYmIGxlYWd1ZS5tZXNzYWdlLmxlbmd0aCA+IDApIHtcbiAgICAgIG1lc3NhZ2UgPSBsZWFndWUubWVzc2FnZTtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH07XG5cbiAgJHNjb3BlLnN0YXJ0cyA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgIHZhciBzdGFydHNMYWJlbCA9IChsZWFndWUuc3RhcnRlZCkgPyAnU3RhcnRlZCAnIDogJ1N0YXJ0cyAnO1xuICAgIHJldHVybiBzdGFydHNMYWJlbCArIGxlYWd1ZS5zdGFydF93ZWVrO1xuICB9O1xuXG4gICRzY29wZS5oYXNXaW5uZXIgPSBmdW5jdGlvbihsZWFndWUsIGFsaXZlVGVhbXMpIHtcbiAgICByZXR1cm4gbGVhZ3VlLnN0YXJ0ZWQgJiYgYWxpdmVUZWFtcy5sZW5ndGggPT0gMTtcbiAgfTtcblxuICAkc2NvcGUuaXNDb21taXNoID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgcmV0dXJuIGxlYWd1ZS5jb21taXNoX2VtYWlscy5pbmRleE9mKHVzZXJNb2RlbC51c2VyLmVtYWlsKSA+IC0xO1xuICB9O1xuXG4gICRzY29wZS5oYXNUZWFtSW5MZWFndWUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZm91bmQgPSBmYWxzZTtcbiAgICB2YXIgdGVhbXMgPSBfLnVuaW9uKCRzY29wZS5hbGl2ZVRlYW1zLCAkc2NvcGUuZGVhZFRlYW1zKTtcbiAgICBfLmVhY2godGVhbXMsIGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAgIGlmICh0ZWFtLmNvYWNoX2VtYWlscy5pbmRleE9mKHVzZXJNb2RlbC51c2VyLmVtYWlsKSA+IC0xKSB7XG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZm91bmQ7XG4gIH07XG5cbiAgJHNjb3BlLmlzQ29hY2ggPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgcmV0dXJuIHRlYW0uY29hY2hfZW1haWxzLmluZGV4T2YodXNlck1vZGVsLnVzZXIuZW1haWwpID4gLTE7XG4gIH07XG5cbiAgJHNjb3BlLmNvYWNoTmFtZSA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICByZXR1cm4gdGVhbS5jb2FjaF9uYW1lc1swXTsgLy8gdG9kbzogb25seSBoYW5kbGVzIHRoZSBmaXJzdCB0ZWFtIGNvYWNoXG4gIH07XG5cbiAgJHNjb3BlLmhhc05vUGljayA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICByZXR1cm4gdGVhbS5sYXN0X3BpY2tfc3F1YWRfbmFtZSA9PSAnTm9uZSc7XG4gIH07XG5cbiAgJHNjb3BlLmVkaXRMZWFndWUgPSBmdW5jdGlvbihsZWFndWUpIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2VkaXQvbGVhZ3VlLmVkaXQudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0VkaXRMZWFndWVDb250cm9sbGVyJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgd2Vla3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB3ZWVrU2VydmljZS5nZXRBdmFpbGFibGVXZWVrcyhsZWFndWUuc2Vhc29uX2lkKTtcbiAgICAgICAgfSxcbiAgICAgICAgbGVhZ3VlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gbGVhZ3VlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9KTtcblxuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgICBsZWFndWVTZXJ2aWNlLnVwZGF0ZUxlYWd1ZShsZWFndWUpO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ0VkaXQgbGVhZ3VlIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgIH0pO1xuXG4gIH07XG5cbiAgJHNjb3BlLm9wZW5MZWFndWUgPSBmdW5jdGlvbihsZWFndWUpIHtcbiAgICBsZWFndWVTZXJ2aWNlLm9wZW5MZWFndWUobGVhZ3VlKVxuICB9O1xuXG4gICRzY29wZS5jbG9zZUxlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgIGxlYWd1ZVNlcnZpY2UuY2xvc2VMZWFndWUobGVhZ3VlKVxuICB9O1xuXG4gICRzY29wZS5zaG93VGVhbSA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAkbG9jYXRpb24ucGF0aCgkbG9jYXRpb24ucGF0aCgpICsgJy90ZWFtLycgKyB0ZWFtLmlkKTtcbiAgfTtcblxuICAkc2NvcGUuY29udGFjdENvbW1pc2ggPSBmdW5jdGlvbihsZWFndWUpIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2NvbnRhY3QvbGVhZ3VlLmNvbnRhY3QudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0xlYWd1ZUNvbnRhY3RDb250cm9sbGVyJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgbGVhZ3VlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gbGVhZ3VlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKHBhcmFtcykge1xuICAgICAgbGVhZ3VlU2VydmljZS5zZW5kQ29tbWlzaE1lc3NhZ2UocGFyYW1zLmxlYWd1ZSwgcGFyYW1zLm1lc3NhZ2UpXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnQ29udGFjdCBsZWFndWUgbW9kYWwgZGlzbWlzc2VkLi4uJyk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAkc2NvcGUudXBkYXRlTWVzc2FnZSA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuXG4gICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvbWVzc2FnZS9sZWFndWUubWVzc2FnZS50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnTGVhZ3VlTWVzc2FnZUNvbnRyb2xsZXInLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICBsZWFndWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBsZWFndWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgICBsZWFndWVTZXJ2aWNlLnVwZGF0ZUxlYWd1ZU1lc3NhZ2UocGFyYW1zLmxlYWd1ZSwgcGFyYW1zLnNlbmRFbWFpbClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgICRzY29wZS5sZWFndWVEYXRhLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB9KTtcblxuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ0xlYWd1ZSBtZXNzYWdlIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgIH0pO1xuXG4gIH07XG5cbiAgJHNjb3BlLmpvaW5MZWFndWUgPSBmdW5jdGlvbihsZWFndWUpIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2pvaW4vbGVhZ3VlLmpvaW4udHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0xlYWd1ZUpvaW5Db250cm9sbGVyJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgbGVhZ3VlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gbGVhZ3VlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAgIHRlYW1TZXJ2aWNlLmNyZWF0ZVRlYW0odGVhbSk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnSm9pbiBsZWFndWUgbW9kYWwgZGlzbWlzc2VkLi4uJyk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAkc2NvcGUucmVxdWVzdEludml0ZSA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuXG4gICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHJpdmF0ZS9sZWFndWUvaW52aXRlL3JlcXVlc3QvbGVhZ3VlLmludml0ZS5yZXF1ZXN0LnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdMZWFndWVJbnZpdGVSZXF1ZXN0Q29udHJvbGxlcicsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIGxlYWd1ZUlkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gbGVhZ3VlLmlkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uIChpbnZpdGF0aW9uKSB7XG4gICAgICBsZWFndWVTZXJ2aWNlLnJlcXVlc3RJbnZpdGUoaW52aXRhdGlvbik7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnUmVxdWVzdCBpbnZpdGUgbW9kYWwgZGlzbWlzc2VkLi4uJyk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAkc2NvcGUuaW52aXRlID0gZnVuY3Rpb24obGVhZ3VlSWQpIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL2ludml0ZS9sZWFndWUuaW52aXRlLnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdMZWFndWVJbnZpdGVDb250cm9sbGVyJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgbGVhZ3VlSWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBsZWFndWVJZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbiAoaW52aXRhdGlvbikge1xuICAgICAgbGVhZ3VlU2VydmljZS5jcmVhdGVJbnZpdGUoaW52aXRhdGlvbik7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnSW52aXRlIGNvYWNoIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgIH0pO1xuICB9O1xuXG4gICRzY29wZS5yZXNldFNlYXJjaCA9IGZ1bmN0aW9uKCkge1xuICAgICRzY29wZS5zZWFyY2ggPSB7XG4gICAgICBuYW1lOiBcIlwiXG4gICAgfTtcbiAgICAkc2NvcGUuY3VycmVudFRlYW1QYWdlID0gMTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwidmlldyBsZWFndWUgY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xuXG59O1xuXG5WaWV3TGVhZ3VlQ29udHJvbGxlci4kaW5qZWN0ID0gWydsZWFndWUnLCAnYWxpdmVUZWFtcycsICdkZWFkVGVhbXMnLCAnJHNjb3BlJywgJyRsb2cnLCAnJG1vZGFsJywgJyRsb2NhdGlvbicsICd1c2VyTW9kZWwnLCAnd2Vla1NlcnZpY2UnLCAndGVhbVNlcnZpY2UnLCAnbGVhZ3VlU2VydmljZSddO1xubW9kdWxlLmV4cG9ydHMgPSBWaWV3TGVhZ3VlQ29udHJvbGxlcjtcbiIsInZhciBFZGl0TGVhZ3VlQ29udHJvbGxlciA9IGZ1bmN0aW9uKHdlZWtzLCBsZWFndWUsICRzY29wZSwgJGxvZywgJGxvY2F0aW9uLCAkbW9kYWxJbnN0YW5jZSkge1xuXG4gICAgJHNjb3BlLndlZWtzID0gd2Vla3MuZGF0YTtcblxuICAgICRzY29wZS5sZWFndWVEYXRhID0gYW5ndWxhci5jb3B5KGxlYWd1ZSk7XG5cbiAgICAkc2NvcGUuc2hvd0xlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgICAgJGxvY2F0aW9uLnBhdGgoJy9zZWFzb24vJyArIGxlYWd1ZS5zZWFzb25faWQgKyAnL2xlYWd1ZS8nICsgbGVhZ3VlLmlkKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLnVwZGF0ZUxlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgICAgJG1vZGFsSW5zdGFuY2UuY2xvc2UobGVhZ3VlKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2FuY2VsJyk7XG4gICAgfTtcblxuICAgICRzY29wZS5oYXNFcnJvciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRlcnJvcltwcm9wZXJ0eV07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiZWRpdCBsZWFndWUgY29udHJvbGxlclwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcblxufTtcblxuRWRpdExlYWd1ZUNvbnRyb2xsZXIuJGluamVjdCA9IFsnd2Vla3MnLCAnbGVhZ3VlJywgJyRzY29wZScsICckbG9nJywgJyRsb2NhdGlvbicsICckbW9kYWxJbnN0YW5jZSddO1xubW9kdWxlLmV4cG9ydHMgPSBFZGl0TGVhZ3VlQ29udHJvbGxlcjtcbiIsInZhciBMZWFndWVDb250YWN0Q29udHJvbGxlciA9IGZ1bmN0aW9uKGxlYWd1ZSwgJG1vZGFsSW5zdGFuY2UsICRzY29wZSwgJGxvZykge1xuXG4gICRzY29wZS5sZWFndWVEYXRhID0gbGVhZ3VlO1xuXG4gICRzY29wZS5jb21taXNoTWVzc2FnZSA9ICcnO1xuXG4gICRzY29wZS5jb250YWN0Q29tbWlzaCA9IGZ1bmN0aW9uKGxlYWd1ZSwgbWVzc2FnZSkge1xuICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKHsgbGVhZ3VlOiBsZWFndWUsIG1lc3NhZ2U6IG1lc3NhZ2UgfSk7XG4gIH07XG5cbiAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICB9O1xuXG4gICRzY29wZS5oYXNFcnJvciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gIH07XG5cbiAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kZXJyb3JbcHJvcGVydHldO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJsZWFndWUgY29udGFjdCBjb250cm9sbGVyXCIpO1xuICB9O1xuICBpbml0KCk7XG59O1xuXG5MZWFndWVDb250YWN0Q29udHJvbGxlci4kaW5qZWN0ID0gWydsZWFndWUnLCAnJG1vZGFsSW5zdGFuY2UnLCAnJHNjb3BlJywgJyRsb2cnXTtcbm1vZHVsZS5leHBvcnRzID0gTGVhZ3VlQ29udGFjdENvbnRyb2xsZXI7XG4iLCJ2YXIgTGVhZ3VlTWVzc2FnZUNvbnRyb2xsZXIgPSBmdW5jdGlvbihsZWFndWUsICRtb2RhbEluc3RhbmNlLCAkc2NvcGUsICRsb2cpIHtcblxuICAkc2NvcGUubGVhZ3VlRGF0YSA9IGFuZ3VsYXIuY29weShsZWFndWUpO1xuXG4gICRzY29wZS5tZXNzYWdlT3B0aW9ucyA9IHsgc2VuZEVtYWlsOiBmYWxzZSB9O1xuXG4gICRzY29wZS51cGRhdGVNZXNzYWdlID0gZnVuY3Rpb24obGVhZ3VlLCBzZW5kRW1haWwpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZSh7IGxlYWd1ZTogbGVhZ3VlLCBzZW5kRW1haWw6IHNlbmRFbWFpbCB9KTtcbiAgfTtcblxuICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2FuY2VsJyk7XG4gIH07XG5cbiAgJHNjb3BlLmhhc0Vycm9yID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgfTtcblxuICAkc2NvcGUuaGFzUHJvcGVydHlFcnJvciA9IGZ1bmN0aW9uKGlucHV0LCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRlcnJvcltwcm9wZXJ0eV07XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcImxlYWd1ZSBtZXNzYWdlIGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cbkxlYWd1ZU1lc3NhZ2VDb250cm9sbGVyLiRpbmplY3QgPSBbJ2xlYWd1ZScsICckbW9kYWxJbnN0YW5jZScsICckc2NvcGUnLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBMZWFndWVNZXNzYWdlQ29udHJvbGxlcjtcbiIsInZhciBMZWFndWVKb2luQ29udHJvbGxlciA9IGZ1bmN0aW9uKGxlYWd1ZSwgJG1vZGFsSW5zdGFuY2UsICRzY29wZSwgJGxvZykge1xuXG4gICRzY29wZS5sZWFndWVEYXRhID0gbGVhZ3VlO1xuXG4gICRzY29wZS5uZXdUZWFtRGF0YSA9IHtcbiAgICBuYW1lOiAnJyxcbiAgICBzZWFzb25faWQ6IGxlYWd1ZS5zZWFzb25faWQsXG4gICAgbGVhZ3VlX2lkOiBsZWFndWUuaWRcbiAgfTtcblxuICAkc2NvcGUuam9pbkxlYWd1ZSA9IGZ1bmN0aW9uIChuZXdUZWFtKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuY2xvc2UobmV3VGVhbSk7XG4gIH07XG5cbiAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgfTtcblxuICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICB9O1xuXG4gICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwibGVhZ3VlIGpvaW4gY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuTGVhZ3VlSm9pbkNvbnRyb2xsZXIuJGluamVjdCA9IFsnbGVhZ3VlJywgJyRtb2RhbEluc3RhbmNlJywgJyRzY29wZScsICckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IExlYWd1ZUpvaW5Db250cm9sbGVyO1xuIiwidmFyIExlYWd1ZUludml0ZUNvbnRyb2xsZXIgPSBmdW5jdGlvbihsZWFndWVJZCwgJG1vZGFsSW5zdGFuY2UsICRzY29wZSwgJGxvZykge1xuXG4gICRzY29wZS5pbnZpdGF0aW9uID0ge1xuICAgIGxlYWd1ZV9pZDogbGVhZ3VlSWQsXG4gICAgZW1haWw6IFwiXCIsXG4gICAgbWVzc2FnZTogXCJcIlxuICB9O1xuXG4gICRzY29wZS5pbnZpdGUgPSBmdW5jdGlvbiAoaW52aXRhdGlvbikge1xuICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKGludml0YXRpb24pO1xuICB9O1xuXG4gICRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2FuY2VsJyk7XG4gIH07XG5cbiAgJHNjb3BlLmhhc0Vycm9yID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgfTtcblxuICAkc2NvcGUuaGFzUHJvcGVydHlFcnJvciA9IGZ1bmN0aW9uKGlucHV0LCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRlcnJvcltwcm9wZXJ0eV07XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcImxlYWd1ZSBpbnZpdGUgY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuTGVhZ3VlSW52aXRlQ29udHJvbGxlci4kaW5qZWN0ID0gWydsZWFndWVJZCcsICckbW9kYWxJbnN0YW5jZScsICckc2NvcGUnLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBMZWFndWVJbnZpdGVDb250cm9sbGVyO1xuIiwidmFyIEpvaW5MZWFndWVzQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJGxvZywgJGxvY2F0aW9uLCAkbW9kYWwsIHVzZXJNb2RlbCwgc2Vhc29uTW9kZWwsIHdlZWtTZXJ2aWNlLCBsZWFndWVTZXJ2aWNlKSB7XG5cbiAgJHNjb3BlLnNlYXNvbiA9IHNlYXNvbk1vZGVsLnNlYXNvbjtcblxuICAkc2NvcGUubGVhZ3VlT3B0aW9ucyA9IHsgY2xvc2VkOiBmYWxzZSB9O1xuXG4gICRzY29wZS5wdWJsaWNMZWFndWVzID0gZnVuY3Rpb24oc2Vhc29uSWQpIHtcbiAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgc2Vhc29uSWQgKyAnL2xlYWd1ZXMvcHVibGljJyk7XG4gIH07XG5cbiAgJHNjb3BlLnByaXZhdGVMZWFndWVzID0gZnVuY3Rpb24oc2Vhc29uSWQpIHtcbiAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgc2Vhc29uSWQgKyAnL2xlYWd1ZXMvcHJpdmF0ZScpO1xuICB9O1xuXG4gICRzY29wZS5yZXNldFNlYXJjaCA9IGZ1bmN0aW9uKCkge1xuICAgICRzY29wZS5zZWFyY2ggPSB7XG4gICAgICBuYW1lOiBcIlwiXG4gICAgfTtcbiAgfTtcblxuICAkc2NvcGUuaXNDb21taXNoID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgcmV0dXJuIGxlYWd1ZS5jb21taXNoX2VtYWlscy5pbmRleE9mKHVzZXJNb2RlbC51c2VyLmVtYWlsKSA+IC0xO1xuICB9O1xuXG4gICRzY29wZS5jcmVhdGVMZWFndWUgPSBmdW5jdGlvbihzZWFzb24pIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvbGVhZ3VlL25ldy9sZWFndWUubmV3LnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdOZXdMZWFndWVDb250cm9sbGVyJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgd2Vla3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB3ZWVrU2VydmljZS5nZXRBdmFpbGFibGVXZWVrcyhzZWFzb24uaWQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9KTtcblxuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgICBsZWFndWVTZXJ2aWNlLmNyZWF0ZUxlYWd1ZShsZWFndWUpO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ0NyZWF0ZSBsZWFndWUgbW9kYWwgZGlzbWlzc2VkLi4uJyk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwiam9pbiBsZWFndWVzIGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcblxufTtcblxuSm9pbkxlYWd1ZXNDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJywgJyRsb2NhdGlvbicsICckbW9kYWwnLCAndXNlck1vZGVsJywgJ3NlYXNvbk1vZGVsJywgJ3dlZWtTZXJ2aWNlJywgJ2xlYWd1ZVNlcnZpY2UnXTtcbm1vZHVsZS5leHBvcnRzID0gSm9pbkxlYWd1ZXNDb250cm9sbGVyO1xuIiwidmFyIE1hbmFnZWRMZWFndWVzQ29udHJvbGxlciA9IGZ1bmN0aW9uKG1hbmFnZWRMZWFndWVzLCAkc2NvcGUsICRsb2csICRsb2NhdGlvbiwgJG1vZGFsLCB3ZWVrU2VydmljZSwgbGVhZ3VlU2VydmljZSkge1xuXG4gICAgJHNjb3BlLm1hbmFnZWRMZWFndWVzID0gbWFuYWdlZExlYWd1ZXMuZGF0YTtcblxuICAgICRzY29wZS5jcmVhdGVMZWFndWUgPSBmdW5jdGlvbihzZWFzb24pIHtcblxuICAgICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9uZXcvbGVhZ3VlLm5ldy50cGwuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdOZXdMZWFndWVDb250cm9sbGVyJyxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIHdlZWtzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB3ZWVrU2VydmljZS5nZXRBdmFpbGFibGVXZWVrcyhzZWFzb24uaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICB9KTtcblxuICAgICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihsZWFndWUpIHtcbiAgICAgICAgbGVhZ3VlU2VydmljZS5jcmVhdGVMZWFndWUobGVhZ3VlKTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZygnQ3JlYXRlIGxlYWd1ZSBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgICRzY29wZS52aWV3TGVhZ3VlID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgICAgICRsb2NhdGlvbi5wYXRoKCcvc2Vhc29uLycgKyBsZWFndWUuc2Vhc29uX2lkICsgJy9sZWFndWUvJyArIGxlYWd1ZS5pZCk7XG4gICAgfTtcblxuICAgICRzY29wZS5zdGFydHMgPSBmdW5jdGlvbihsZWFndWUpIHtcbiAgICAgIHZhciBzdGFydHNMYWJlbCA9IChsZWFndWUuc3RhcnRlZCkgPyAnU3RhcnRlZCAnIDogJ1N0YXJ0cyAnO1xuICAgICAgcmV0dXJuIHN0YXJ0c0xhYmVsICsgbGVhZ3VlLnN0YXJ0X3dlZWs7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmRlYnVnKFwibWFuYWdlZCBsZWFndWVzIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cbk1hbmFnZWRMZWFndWVzQ29udHJvbGxlci4kaW5qZWN0ID0gWydtYW5hZ2VkTGVhZ3VlcycsICckc2NvcGUnLCAnJGxvZycsICckbG9jYXRpb24nLCAnJG1vZGFsJywgJ3dlZWtTZXJ2aWNlJywgJ2xlYWd1ZVNlcnZpY2UnXTtcbm1vZHVsZS5leHBvcnRzID0gTWFuYWdlZExlYWd1ZXNDb250cm9sbGVyO1xuXG4iLCJ2YXIgVmlld1RlYW1Db250cm9sbGVyID0gZnVuY3Rpb24odGVhbSwgcmVndWxhclBpY2tzLCBwbGF5b2ZmUGlja3MsICRzY29wZSwgJGxvZywgJG1vZGFsLCAkbG9jYXRpb24sIHNlYXNvbk1vZGVsLCB1c2VyTW9kZWwsIHRlYW1TZXJ2aWNlLCBsZWFndWVTZXJ2aWNlLCBnYW1lU2VydmljZSwgcGlja1NlcnZpY2UpIHtcblxuICAkc2NvcGUudGVhbURhdGEgPSB0ZWFtLmRhdGE7XG5cbiAgJHNjb3BlLnJlZ3VsYXJQaWNrcyA9IHJlZ3VsYXJQaWNrcy5kYXRhO1xuICAkc2NvcGUucGxheW9mZlBpY2tzID0gcGxheW9mZlBpY2tzLmRhdGE7XG5cbiAgJHNjb3BlLm1lc3NhZ2UgPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgdmFyIG1lc3NhZ2UgPSBcIlppcC4gWmlsY2guIE5hZGFcIjtcbiAgICBpZiAodGVhbS5tZXNzYWdlICYmIHRlYW0ubWVzc2FnZS5sZW5ndGggPiAwKSB7XG4gICAgICBtZXNzYWdlID0gdGVhbS5tZXNzYWdlO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfTtcblxuICAkc2NvcGUuY29udGFjdENvbW1pc2ggPSBmdW5jdGlvbih0ZWFtKSB7XG5cbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL2xlYWd1ZS9jb250YWN0L2xlYWd1ZS5jb250YWN0LnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdMZWFndWVDb250YWN0Q29udHJvbGxlcicsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIGxlYWd1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRlYW0ubGVhZ3VlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKHBhcmFtcykge1xuICAgICAgbGVhZ3VlU2VydmljZS5zZW5kQ29tbWlzaE1lc3NhZ2UocGFyYW1zLmxlYWd1ZSwgcGFyYW1zLm1lc3NhZ2UpXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnQ29udGFjdCBsZWFndWUgbW9kYWwgZGlzbWlzc2VkLi4uJyk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAkc2NvcGUudXBkYXRlTWVzc2FnZSA9IGZ1bmN0aW9uKHRlYW0pIHtcblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvdGVhbS9tZXNzYWdlL3RlYW0ubWVzc2FnZS50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnVGVhbU1lc3NhZ2VDb250cm9sbGVyJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgdGVhbTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRlYW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgICB0ZWFtU2VydmljZS51cGRhdGVUZWFtTWVzc2FnZShwYXJhbXMudGVhbSwgcGFyYW1zLnNlbmRFbWFpbClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgICRzY29wZS50ZWFtRGF0YS5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgfSk7XG5cbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAkbG9nLmRlYnVnKCdUZWFtIG1lc3NhZ2UgbW9kYWwgZGlzbWlzc2VkLi4uJyk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAkc2NvcGUuYWN0aXZhdGUgPSBmdW5jdGlvbih0ZWFtKSB7XG4gICAgdGVhbVNlcnZpY2UuYWN0aXZhdGVUZWFtKHRlYW0pXG4gICAgICAudGhlbihmdW5jdGlvbihhY3RpdmUpIHtcbiAgICAgICAgdGVhbS5hY3RpdmUgPSBhY3RpdmU7XG4gICAgICB9KTtcbiAgfTtcblxuICAkc2NvcGUuZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICB0ZWFtU2VydmljZS5kZWFjdGl2YXRlVGVhbSh0ZWFtKVxuICAgICAgLnRoZW4oZnVuY3Rpb24oYWN0aXZlKSB7XG4gICAgICAgIHRlYW0uYWN0aXZlID0gYWN0aXZlO1xuICAgICAgfSk7XG4gIH07XG5cbiAgJHNjb3BlLmlzQ29tbWlzaCA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICByZXR1cm4gdGVhbS5jb21taXNoX2VtYWlscy5pbmRleE9mKHVzZXJNb2RlbC51c2VyLmVtYWlsKSA+IC0xO1xuICB9O1xuXG4gICRzY29wZS5pc0NvYWNoID0gZnVuY3Rpb24odGVhbSkge1xuICAgIHJldHVybiB0ZWFtLmNvYWNoX2VtYWlscy5pbmRleE9mKHVzZXJNb2RlbC51c2VyLmVtYWlsKSA+IC0xO1xuICB9O1xuXG4gICRzY29wZS5lZGl0VGVhbSA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICBhbGVydCgncG9wdXAgYSBtb2RhbCcpOyAvLyB0b2RvOiB3aGF0IGlzIHRoaXMgZG9pbmcgaGVyZT9cbiAgfTtcblxuICAkc2NvcGUuc2hvd0xlYWd1ZSA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgdGVhbS5sZWFndWUuc2Vhc29uX2lkICsgJy9sZWFndWUvJyArIHRlYW0ubGVhZ3VlLmlkKTtcbiAgfTtcblxuICAkc2NvcGUuZWRpdFRlYW0gPSBmdW5jdGlvbih0ZWFtKSB7XG5cbiAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wcml2YXRlL3RlYW0vZWRpdC90ZWFtLmVkaXQudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0VkaXRUZWFtQ29udHJvbGxlcicsXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIHRlYW06IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB0ZWFtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBtb2RhbEluc3RhbmNlLnJlc3VsdC50aGVuKGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAgIHRlYW1TZXJ2aWNlLnVwZGF0ZVRlYW0odGVhbSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJHNjb3BlLnRlYW1EYXRhID0gdGVhbTtcbiAgICAgICAgfSk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgJGxvZy5kZWJ1ZygnRWRpdCB0ZWFtIG1vZGFsIGRpc21pc3NlZC4uLicpO1xuICAgIH0pO1xuXG4gIH07XG5cbiAgJHNjb3BlLm1ha2VQaWNrID0gZnVuY3Rpb24odGVhbSkge1xuXG4gICAgaWYgKCEkc2NvcGUuaXNDb2FjaCh0ZWFtKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ByaXZhdGUvcGljay9tYWtlL3BpY2subWFrZS50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnUGlja01ha2VDb250cm9sbGVyJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgcmVndWxhclBpY2tzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gJHNjb3BlLnJlZ3VsYXJQaWNrcztcbiAgICAgICAgfSxcbiAgICAgICAgcGxheW9mZlBpY2tzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gJHNjb3BlLnBsYXlvZmZQaWNrcztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVudEdhbWVzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gZ2FtZVNlcnZpY2UuZ2V0Q3VycmVudEdhbWVzKHRlYW0ubGVhZ3VlLmlkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihmdW5jdGlvbihwaWNrKSB7XG4gICAgICBwaWNrLnRlYW1faWQgPSAkc2NvcGUudGVhbURhdGEuaWQ7XG4gICAgICBwaWNrU2VydmljZS5jcmVhdGVQaWNrKHBpY2spO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRsb2cuZGVidWcoJ01ha2UgcGljayBtb2RhbCBkaXNtaXNzZWQuLi4nKTtcbiAgICB9KTtcblxuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJ2aWV3IHRlYW0gY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xuXG59O1xuXG5WaWV3VGVhbUNvbnRyb2xsZXIuJGluamVjdCA9IFsndGVhbScsICdyZWd1bGFyUGlja3MnLCAncGxheW9mZlBpY2tzJywgJyRzY29wZScsICckbG9nJywgJyRtb2RhbCcsICckbG9jYXRpb24nLCAnc2Vhc29uTW9kZWwnLCAndXNlck1vZGVsJywgJ3RlYW1TZXJ2aWNlJywgJ2xlYWd1ZVNlcnZpY2UnLCAnZ2FtZVNlcnZpY2UnLCAncGlja1NlcnZpY2UnXTtcbm1vZHVsZS5leHBvcnRzID0gVmlld1RlYW1Db250cm9sbGVyO1xuIiwidmFyIEVkaXRUZWFtQ29udHJvbGxlciA9IGZ1bmN0aW9uKHRlYW0sICRzY29wZSwgJGxvZywgJG1vZGFsSW5zdGFuY2UpIHtcblxuICAgICRzY29wZS50ZWFtRGF0YSA9IGFuZ3VsYXIuY29weSh0ZWFtKTtcblxuICAgICRzY29wZS5lZGl0VGVhbSA9IGZ1bmN0aW9uICh0ZWFtKSB7XG4gICAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZSh0ZWFtKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gICAgfTtcblxuICAgICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kZXJyb3JbcHJvcGVydHldO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcImVkaXQgdGVhbSBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5FZGl0VGVhbUNvbnRyb2xsZXIuJGluamVjdCA9IFsndGVhbScsICckc2NvcGUnLCAnJGxvZycsICckbW9kYWxJbnN0YW5jZSddO1xubW9kdWxlLmV4cG9ydHMgPSBFZGl0VGVhbUNvbnRyb2xsZXI7XG4iLCJ2YXIgVGVhbU1lc3NhZ2VDb250cm9sbGVyID0gZnVuY3Rpb24odGVhbSwgJG1vZGFsSW5zdGFuY2UsICRzY29wZSwgJGxvZykge1xuXG4gICRzY29wZS50ZWFtRGF0YSA9IGFuZ3VsYXIuY29weSh0ZWFtKTtcblxuICAkc2NvcGUubWVzc2FnZU9wdGlvbnMgPSB7IHNlbmRFbWFpbDogZmFsc2UgfTtcblxuICAkc2NvcGUudXBkYXRlTWVzc2FnZSA9IGZ1bmN0aW9uKHRlYW0sIHNlbmRFbWFpbCkge1xuICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKHsgdGVhbTogdGVhbSwgc2VuZEVtYWlsOiBzZW5kRW1haWx9KTtcbiAgfTtcblxuICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2FuY2VsJyk7XG4gIH07XG5cbiAgJHNjb3BlLmhhc0Vycm9yID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgfTtcblxuICAkc2NvcGUuaGFzUHJvcGVydHlFcnJvciA9IGZ1bmN0aW9uKGlucHV0LCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRlcnJvcltwcm9wZXJ0eV07XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgJGxvZy5kZWJ1ZyhcInRlYW0gbWVzc2FnZSBjb250cm9sbGVyXCIpO1xuICB9O1xuICBpbml0KCk7XG59O1xuXG5UZWFtTWVzc2FnZUNvbnRyb2xsZXIuJGluamVjdCA9IFsndGVhbScsICckbW9kYWxJbnN0YW5jZScsICckc2NvcGUnLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBUZWFtTWVzc2FnZUNvbnRyb2xsZXI7XG4iLCJ2YXIgQWxpdmVUZWFtc0NvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2csIGFsaXZlVGVhbXMpIHtcblxuICAgICRzY29wZS5hbGl2ZVRlYW1zID0gYWxpdmVUZWFtcy5kYXRhO1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJhbGl2ZSB0ZWFtcyBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5BbGl2ZVRlYW1zQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZycsICdhbGl2ZVRlYW1zJ107XG5tb2R1bGUuZXhwb3J0cyA9IEFsaXZlVGVhbXNDb250cm9sbGVyO1xuIiwidmFyIERlYWRUZWFtc0NvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2csIGRlYWRUZWFtcykge1xuXG4gICAgJHNjb3BlLmRlYWRUZWFtcyA9IGRlYWRUZWFtcy5kYXRhO1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJkZWFkIHRlYW1zIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cbkRlYWRUZWFtc0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnLCAnZGVhZFRlYW1zJ107XG5tb2R1bGUuZXhwb3J0cyA9IERlYWRUZWFtc0NvbnRyb2xsZXI7XG4iLCJ2YXIgUGlja01ha2VDb250cm9sbGVyID0gZnVuY3Rpb24ocmVndWxhclBpY2tzLCBwbGF5b2ZmUGlja3MsIGN1cnJlbnRHYW1lcywgJG1vZGFsSW5zdGFuY2UsICRzY29wZSwgJGxvZykge1xuXG4gIHZhciByZWd1bGFyUGlja3MgPSByZWd1bGFyUGlja3M7XG4gIHZhciBwbGF5b2ZmUGlja3MgPSBwbGF5b2ZmUGlja3M7XG4gIHZhciBwaWNrcyA9IF8udW5pb24ocmVndWxhclBpY2tzLCBwbGF5b2ZmUGlja3MpO1xuXG4gICRzY29wZS5nYW1lcyA9IGN1cnJlbnRHYW1lcy5kYXRhO1xuXG4gICRzY29wZS5nZXRTY29yZSA9IGZ1bmN0aW9uKGdhbWUsIGluZGV4KSB7XG4gICAgLy8gd2FybmluZzogbWFnaWMgbnVtYmVycyBhaGVhZFxuICAgIHZhciBzY29yZSA9IChpbmRleCA9PT0gMCkgPyBnYW1lLnZpc2l0aW5nX3NxdWFkX3Njb3JlIDogZ2FtZS5ob21lX3NxdWFkX3Njb3JlO1xuICAgIHJldHVybiBzY29yZTtcbiAgfTtcblxuICAkc2NvcGUubWFrZVBpY2sgPSBmdW5jdGlvbihnYW1lLCBzcXVhZCkge1xuICAgIHZhciBwaWNrID0ge1xuICAgICAgd2Vla19pZDogZ2FtZS53ZWVrX2lkLFxuICAgICAgd2Vla190eXBlX2lkOiBnYW1lLndlZWtfdHlwZV9pZCxcbiAgICAgIGdhbWVfaWQ6IGdhbWUuaWQsXG4gICAgICB0ZWFtX2lkOiAnJyxcbiAgICAgIHNxdWFkX2lkOiBzcXVhZC5pZFxuICAgIH07XG4gICAgJG1vZGFsSW5zdGFuY2UuY2xvc2UocGljayk7XG4gIH07XG5cbiAgJHNjb3BlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgfTtcblxuICAkc2NvcGUuc3RhcnRzID0gZnVuY3Rpb24oZ2FtZSkge1xuICAgIHZhciBzdGFydHNMYWJlbCA9IChnYW1lLnN0YXJ0ZWQpID8gJ1N0YXJ0ZWQgJyA6ICdTdGFydHMgJztcbiAgICByZXR1cm4gc3RhcnRzTGFiZWwgKyBnYW1lLnN0YXJ0X2Rpc3BsYXk7XG4gIH07XG5cbiAgJHNjb3BlLmhhc1NxdWFkQmVlblVzZWQgPSBmdW5jdGlvbihnYW1lLCBzcXVhZCkge1xuICAgIHZhciBzcXVhZEhhc0JlZW5Vc2VkID0gZmFsc2U7XG4gICAgXy5lYWNoKHBpY2tzLCBmdW5jdGlvbihwaWNrKSB7XG4gICAgICBpZiAocGljay5zcXVhZF9pZCA9PSBzcXVhZC5pZCAmJiBwaWNrLndlZWtfdHlwZV9pZCA9PSBnYW1lLndlZWtfdHlwZV9pZCkge1xuICAgICAgICBzcXVhZEhhc0JlZW5Vc2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc3F1YWRIYXNCZWVuVXNlZDtcbiAgfTtcblxuICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRpbnZhbGlkO1xuICB9O1xuXG4gICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAqL1xuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkbG9nLmRlYnVnKFwibWFrZSBwaWNrIGNvbnRyb2xsZXJcIik7XG4gIH07XG4gIGluaXQoKTtcbn07XG5cblBpY2tNYWtlQ29udHJvbGxlci4kaW5qZWN0ID0gWydyZWd1bGFyUGlja3MnLCAncGxheW9mZlBpY2tzJywgJ2N1cnJlbnRHYW1lcycsICckbW9kYWxJbnN0YW5jZScsICckc2NvcGUnLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBQaWNrTWFrZUNvbnRyb2xsZXI7XG4iLCJ2YXIgTGVhZ3VlSW52aXRlUmVxdWVzdENvbnRyb2xsZXIgPSBmdW5jdGlvbihsZWFndWVJZCwgJG1vZGFsSW5zdGFuY2UsICRzY29wZSwgJGxvZywgdXNlck1vZGVsKSB7XG5cbiAgJHNjb3BlLmludml0YXRpb24gPSB7XG4gICAgbGVhZ3VlX2lkOiBsZWFndWVJZCxcbiAgICBlbWFpbDogdXNlck1vZGVsLnVzZXIuZW1haWwsXG4gICAgbWVzc2FnZTogXCJcIlxuICB9O1xuXG4gICRzY29wZS5yZXF1ZXN0SW52aXRlID0gZnVuY3Rpb24gKGludml0YXRpb24pIHtcbiAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZShpbnZpdGF0aW9uKTtcbiAgfTtcblxuICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xuICB9O1xuXG4gICRzY29wZS5oYXNFcnJvciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gIH07XG5cbiAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kZXJyb3JbcHJvcGVydHldO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICRsb2cuZGVidWcoXCJsZWFndWUgaW52aXRlIHJlcXVlc3QgY29udHJvbGxlclwiKTtcbiAgfTtcbiAgaW5pdCgpO1xufTtcblxuTGVhZ3VlSW52aXRlUmVxdWVzdENvbnRyb2xsZXIuJGluamVjdCA9IFsnbGVhZ3VlSWQnLCAnJG1vZGFsSW5zdGFuY2UnLCAnJHNjb3BlJywgJyRsb2cnLCAndXNlck1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IExlYWd1ZUludml0ZVJlcXVlc3RDb250cm9sbGVyO1xuIiwiXG52YXIgUHVibGljTGVhZ3Vlc0NvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2csICRsb2NhdGlvbiwgcHVibGljTGVhZ3Vlcykge1xuXG4gICAgJHNjb3BlLnB1YmxpY0xlYWd1ZXMgPSBwdWJsaWNMZWFndWVzLmRhdGE7XG5cbiAgICAkc2NvcGUuc2hvd0xlYWd1ZSA9IGZ1bmN0aW9uKGxlYWd1ZSkge1xuICAgICAgJGxvY2F0aW9uLnBhdGgoJy9zZWFzb24vJyArIGxlYWd1ZS5zZWFzb25faWQgKyAnL2xlYWd1ZS8nICsgbGVhZ3VlLmlkKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cuZGVidWcoXCJwdWJsaWMgbGVhZ3VlcyBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5QdWJsaWNMZWFndWVzQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZycsICckbG9jYXRpb24nLCAncHVibGljTGVhZ3VlcyddO1xubW9kdWxlLmV4cG9ydHMgPSBQdWJsaWNMZWFndWVzQ29udHJvbGxlcjtcblxuIiwidmFyIFByaXZhdGVMZWFndWVzQ29udHJvbGxlciA9IGZ1bmN0aW9uKHByaXZhdGVMZWFndWVzLCAkc2NvcGUsICRsb2csICRsb2NhdGlvbikge1xuXG4gICAgJHNjb3BlLnByaXZhdGVMZWFndWVzID0gcHJpdmF0ZUxlYWd1ZXMuZGF0YTtcblxuICAgICRzY29wZS5zaG93TGVhZ3VlID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgbGVhZ3VlLnNlYXNvbl9pZCArICcvbGVhZ3VlLycgKyBsZWFndWUuaWQpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5kZWJ1ZyhcInByaXZhdGUgbGVhZ3VlcyBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5Qcml2YXRlTGVhZ3Vlc0NvbnRyb2xsZXIuJGluamVjdCA9IFsncHJpdmF0ZUxlYWd1ZXMnLCAnJHNjb3BlJywgJyRsb2cnLCAnJGxvY2F0aW9uJ107XG5tb2R1bGUuZXhwb3J0cyA9IFByaXZhdGVMZWFndWVzQ29udHJvbGxlcjtcblxuIl19
;