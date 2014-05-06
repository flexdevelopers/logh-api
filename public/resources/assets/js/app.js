require=(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({"app-templates":[function(require,module,exports){
module.exports=require('0VoVTq');
},{}],"0VoVTq":[function(require,module,exports){
angular.module('app.templates', ['common/modules/header/header.tpl.html', 'common/modules/message/message.tpl.html', 'common/templates/footer.tpl.html', 'common/templates/master.tpl.html', 'modules/league/league.detail.tpl.html', 'modules/league/league.edit.tpl.html', 'modules/league/league.join.tpl.html', 'modules/league/league.new.tpl.html', 'modules/league/league.tpl.html', 'modules/league/leagues.tpl.html', 'modules/public/home/home.tpl.html', 'modules/public/register/register.tpl.html', 'modules/user/user.tpl.html']);

angular.module("common/modules/header/header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/modules/header/header.tpl.html",
    "<nav class=\"navbar navbar-default\" role=\"navigation\">\n" +
    "  <div class=\"container-fluid\">\n" +
    "    <div class=\"navbar-header\">\n" +
    "      <button class=\"navbar-toggle\" type=\"button\" ng-click=\"isCollapsed = !isCollapsed\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "      <a class=\"navbar-brand\" ui-sref=\"public.home\">loseorgohome.com</a>\n" +
    "    </div>\n" +
    "    <div collapse=\"isCollapsed\" class=\"navbar-collapse bs-js-navbar-collapse\">\n" +
    "      <ul ng-show=\"userData.user.loaded\" class=\"nav navbar-nav navbar-right\">\n" +
    "        <li class=\"dropdown\">\n" +
    "          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">{{userData.user.email}} <b class=\"caret\"></b></a>\n" +
    "          <ul class=\"dropdown-menu\">\n" +
    "            <li><a ui-sref=\"app.user\">User Profile</a></li>\n" +
    "            <li><a ui-sref=\"public.home\" ng-click=\"logout()\">Sign Out</a></li>\n" +
    "          </ul>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "      <ul ng-show=\"!userData.user.loaded\" class=\"nav navbar-nav navbar-right\">\n" +
    "        <li><a ui-sref=\"public.register\">Register</a></li>\n" +
    "        <li class=\"dropdown\">\n" +
    "          <a class=\"dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\">Sign In</strong></a>\n" +
    "          <div class=\"dropdown-menu panel panel-default\">\n" +
    "            <div class=\"panel-body\">\n" +
    "              <form role=\"form\" ng-submit=\"login(loginParams); $event.stopPropagation();\">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div class=\"input-group\">\n" +
    "                        <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-envelope\"></i></span>\n" +
    "                        <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\" ng-model=\"loginParams.email\" ng-click=\"$event.stopPropagation();\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div class=\"input-group\">\n" +
    "                        <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n" +
    "                        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" ng-model=\"loginParams.password\" ng-click=\"$event.stopPropagation();\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <button type=\"submit\" class=\"submit-btn btn btn-primary pull-left\">Submit</button>\n" +
    "                <a class=\"forgot-password btn btn-link pull-right\" href=\"#\" role=\"button\" ng-click=\"forgotPassword()\">Forgot Password?</a>\n" +
    "              </form>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </div><!-- /.nav-collapse -->\n" +
    "  </div><!-- /.container-fluid -->\n" +
    "</nav>");
}]);

angular.module("common/modules/message/message.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/modules/message/message.tpl.html",
    "<div class=\"alert alert-dismissable alert-{{messageData.message.type}}\" ng-show=\"messageData.message.loaded\">\n" +
    "    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\" ng-click=\"dismissMessage(messageData)\">&times;</button>\n" +
    "    {{messageData.message.content}}\n" +
    "</div>");
}]);

angular.module("common/templates/footer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/templates/footer.tpl.html",
    "<div class=\"footer\">\n" +
    "    <p>♥ This is the footer</p>\n" +
    "</div>");
}]);

angular.module("common/templates/master.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/templates/master.tpl.html",
    "<div class=\"container\">\n" +
    "\n" +
    "    <!-- Header -->\n" +
    "    <div ui-view=\"header\"></div>\n" +
    "\n" +
    "    <!-- Message -->\n" +
    "    <div ui-view=\"message\"></div>\n" +
    "\n" +
    "    <!-- Content -->\n" +
    "    <div class=\"contentView\" ui-view=\"content\" class=\"row\"></div>\n" +
    "\n" +
    "    <!-- Footer -->\n" +
    "    <div ui-view=\"footer\" class=\"row footer-row\"></div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("modules/league/league.detail.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/league/league.detail.tpl.html",
    "<!-- placeholder for child view content -->\n" +
    "<div ui-view=\"leagueDetailContent\"></div>\n" +
    "");
}]);

angular.module("modules/league/league.edit.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/league/league.edit.tpl.html",
    "<div class=\"panel panel-default\">\n" +
    "\n" +
    "    <div class=\"panel-heading\">\n" +
    "        <h3 class=\"panel-title\">{{leagueData.league.name}} League </h3>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"panel-body\">\n" +
    "        <form name=\"leagueForm\" role=\"form\" novalidate>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6 col-md-6\">\n" +
    "                    <div class=\"form-group\" ng-class=\"{'has-error': hasError(leagueForm.leagueName), 'has-feedback': hasError(leagueForm.leagueName)}\">\n" +
    "                        <label class=\"control-label\" for=\"leagueName\">League Name\n" +
    "                            <small ng-show=\"hasPropertyError(leagueForm.leagueName, 'required')\">[ Required ]</small>\n" +
    "                            <small ng-show=\"hasPropertyError(leagueForm.leagueName, 'maxlength')\">[ Too Long ]</small>\n" +
    "                        </label>\n" +
    "                        <input id=\"leagueName\" name=\"leagueName\" type=\"text\" class=\"form-control\" ng-model=\"leagueData.league.name\" ng-maxlength=\"30\" focus required>\n" +
    "                        <span ng-show=\"hasError(leagueForm.leagueName)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6 col-md-6\">\n" +
    "                    <div class=\"form-group\" ng-class=\"{'has-error': hasError(leagueForm.maxTeams), 'has-feedback': hasError(leagueForm.maxTeams)}\">\n" +
    "                        <label class=\"control-label\" for=\"maxTeams\">Max Teams per User\n" +
    "                            <small ng-show=\"hasPropertyError(leagueForm.maxTeams, 'required')\">[ Number Required ]</small>\n" +
    "                            <small ng-show=\"hasPropertyError(leagueForm.maxTeams, 'min')\">[ 1 - 10 ]</small>\n" +
    "                            <small ng-show=\"hasPropertyError(leagueForm.maxTeams, 'max')\">[ 1 - 10 ]</small>\n" +
    "                        </label>\n" +
    "                        <input id=\"maxTeams\" name=\"maxTeams\" type=\"number\" placeholder=\"Between 1 and 10\" min=\"1\" max=\"10\" class=\"form-control\" ng-model=\"leagueData.league.max_teams_per_user\" focus required>\n" +
    "                        <span ng-show=\"hasError(leagueForm.maxTeams)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6 col-md-6\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label class=\"control-label\" for=\"startWeek\">Start Week</label>\n" +
    "                        <select id=\"startWeek\" name=\"startWeek\" class=\"form-control\" ng-model=\"leagueData.league.start_week_id\" ng-options=\"week.id as week.starts_at for week in weeks\"></select>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <hr>\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6 col-md-6\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label class=\"radio-inline\">\n" +
    "                            <input type=\"radio\" ng-model=\"leagueData.league.public\" ng-click=\"hidePasswordFields(true)\" ng-value=\"true\"> Public League\n" +
    "                        </label>\n" +
    "                        <label class=\"radio-inline\">\n" +
    "                            <input type=\"radio\" ng-model=\"leagueData.league.public\" ng-click=\"hidePasswordFields(false)\" ng-value=\"false\"> Private League\n" +
    "                        </label>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div collapse=\"isPasswordHidden\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-sm-6 col-md-6\">\n" +
    "                        <div class=\"form-group\" ng-class=\"{'has-error': hasError(leagueForm.password), 'has-feedback': hasError(leagueForm.password)}\">\n" +
    "                            <label class=\"control-label\" for=\"password\">New Password\n" +
    "                                <small ng-show=\"hasPropertyError(leagueForm.password, 'required')\">[ Required ]</small>\n" +
    "                                <small ng-show=\"hasPropertyError(leagueForm.password, 'pattern')\">[ Too Short ]</small>\n" +
    "                            </label>\n" +
    "                            <input id=\"password\" name=\"password\" type=\"password\" class=\"form-control\" ng-model=\"leagueData.league.password\" ng-required=\"changedToPrivate()\" rpattern=\"/.{6}/\" focus>\n" +
    "                            <span ng-show=\"hasError(leagueForm.password)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-6 col-md-6\">\n" +
    "                        <div class=\"form-group\" ng-class=\"{'has-error': hasError(leagueForm.confirmPassword), 'has-feedback': hasError(leagueForm.confirmPassword)}\">\n" +
    "                            <label class=\"control-label\" for=\"confirmPassword\">Confirm New Password\n" +
    "                                <small ng-show=\"hasPropertyError(leagueForm.confirmPassword, 'match')\">[ Doesn't Match ]</small>\n" +
    "                            </label>\n" +
    "                            <input id=\"confirmPassword\" name=\"confirmPassword\" type=\"password\" class=\"form-control\" ng-model=\"leagueData.league.password_confirmation\" match=\"leagueData.league.password\">\n" +
    "                            <span ng-show=\"hasError(leagueForm.confirmPassword)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <button type=\"submit\" class=\"btn btn-info btn-block\" ng-disabled=\"leagueForm.$pristine || leagueForm.$invalid\" ng-click=\"updateLeague(leagueData.league)\">Update League</button>\n" +
    "\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("modules/league/league.join.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/league/league.join.tpl.html",
    "<div>This is where you can join the {{leagueData.league.name}} league</div>");
}]);

angular.module("modules/league/league.new.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/league/league.new.tpl.html",
    "<div class=\"panel panel-default\">\n" +
    "\n" +
    "    <div class=\"panel-heading\">\n" +
    "        <h3 class=\"panel-title\">Create League</h3>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"panel-body\">\n" +
    "        <form name=\"newLeagueForm\" role=\"form\" novalidate>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6 col-md-6\">\n" +
    "                    <div class=\"form-group\" ng-class=\"{'has-error': hasError(newLeagueForm.leagueName), 'has-feedback': hasError(newLeagueForm.leagueName)}\">\n" +
    "                        <label class=\"control-label\" for=\"leagueName\">League Name\n" +
    "                            <small ng-show=\"hasPropertyError(newLeagueForm.leagueName, 'required')\">[ Required ]</small>\n" +
    "                            <small ng-show=\"hasPropertyError(newLeagueForm.leagueName, 'maxlength')\">[ Too Long ]</small>\n" +
    "                        </label>\n" +
    "                        <input id=\"leagueName\" name=\"leagueName\" type=\"text\" class=\"form-control\" ng-model=\"newLeagueData.name\" ng-maxlength=\"30\" focus required>\n" +
    "                        <span ng-show=\"hasError(newLeagueForm.leagueName)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6 col-md-6\">\n" +
    "                    <div class=\"form-group\" ng-class=\"{'has-error': hasError(newLeagueForm.maxTeams), 'has-feedback': hasError(newLeagueForm.maxTeams)}\">\n" +
    "                        <label class=\"control-label\" for=\"maxTeams\">Max Teams per User\n" +
    "                            <small ng-show=\"hasPropertyError(newLeagueForm.maxTeams, 'required')\">[ Number Required ]</small>\n" +
    "                            <small ng-show=\"hasPropertyError(newLeagueForm.maxTeams, 'min')\">[ 1 - 10 ]</small>\n" +
    "                            <small ng-show=\"hasPropertyError(newLeagueForm.maxTeams, 'max')\">[ 1 - 10 ]</small>\n" +
    "                        </label>\n" +
    "                        <input id=\"maxTeams\" name=\"maxTeams\" type=\"number\" placeholder=\"Between 1 and 10\" min=\"1\" max=\"10\" class=\"form-control\" ng-model=\"newLeagueData.max_teams_per_user\" focus required>\n" +
    "                        <span ng-show=\"hasError(newLeagueForm.maxTeams)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6 col-md-6\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label class=\"control-label\" for=\"startWeek\">Start Week</label>\n" +
    "                        <select id=\"startWeek\" name=\"startWeek\" class=\"form-control\" ng-model=\"newLeagueData.start_week_id\" ng-options=\"week.id as week.starts_at for week in weeks\"></select>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <hr>\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6 col-md-6\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label class=\"radio-inline\">\n" +
    "                            <input type=\"radio\" ng-model=\"newLeagueData.public\" ng-click=\"hidePasswordFields(true)\" ng-checked=\"true\" ng-value=\"true\"> Public League\n" +
    "                        </label>\n" +
    "                        <label class=\"radio-inline\">\n" +
    "                            <input type=\"radio\" ng-model=\"newLeagueData.public\" ng-click=\"hidePasswordFields(false)\" ng-value=\"false\"> Private League\n" +
    "                        </label>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div collapse=\"isPasswordHidden\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-sm-6 col-md-6\">\n" +
    "                        <div class=\"form-group\" ng-class=\"{'has-error': hasError(newLeagueForm.password), 'has-feedback': hasError(newLeagueForm.password)}\">\n" +
    "                            <label class=\"control-label\" for=\"password\">Password\n" +
    "                                <small ng-show=\"hasPropertyError(newLeagueForm.password, 'required')\">[ Required ]</small>\n" +
    "                                <small ng-show=\"hasPropertyError(newLeagueForm.password, 'pattern')\">[ Too Short ]</small>\n" +
    "                            </label>\n" +
    "                            <input id=\"password\" name=\"password\" type=\"password\" class=\"form-control\" ng-model=\"newLeagueData.password\" ng-required=\"!newLeagueData.public\" rpattern=\"/.{6}/\" focus>\n" +
    "                            <span ng-show=\"hasError(newLeagueForm.password)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-6 col-md-6\">\n" +
    "                        <div class=\"form-group\" ng-class=\"{'has-error': hasError(newLeagueForm.confirmPassword), 'has-feedback': hasError(newLeagueForm.confirmPassword)}\">\n" +
    "                            <label class=\"control-label\" for=\"confirmPassword\">Confirm Password\n" +
    "                                <small ng-show=\"hasPropertyError(newLeagueForm.confirmPassword, 'match')\">[ Doesn't Match ]</small>\n" +
    "                            </label>\n" +
    "                            <input id=\"confirmPassword\" name=\"confirmPassword\" type=\"password\" class=\"form-control\" ng-model=\"newLeagueData.password_confirmation\" match=\"newLeagueData.password\">\n" +
    "                            <span ng-show=\"hasError(newLeagueForm.confirmPassword)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <button type=\"submit\" class=\"btn btn-info btn-block\" ng-disabled=\"newLeagueForm.$invalid\" ng-click=\"createLeague(newLeagueData)\">Create League</button>\n" +
    "\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("modules/league/league.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/league/league.tpl.html",
    "<!-- placeholder for child view content -->\n" +
    "<div ui-view=\"leagueContent\"></div>\n" +
    "");
}]);

angular.module("modules/league/leagues.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/league/leagues.tpl.html",
    "<div>here is your list of leagues {{foo}}</div>\n" +
    "");
}]);

angular.module("modules/public/home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/public/home/home.tpl.html",
    "<div>\n" +
    "\n" +
    "    <div class=\"jumbotron\">\n" +
    "        <h1>Losers Wanted</h1>\n" +
    "        <p class=\"lead\">\n" +
    "            <img src=\"resources/assets/images/loser.png\" alt=\"Hello Loser\"><br>\n" +
    "        </p>\n" +
    "        <div>\n" +
    "            <a class=\"btn btn-primary\" role=\"button\" ui-sref=\"app.leagues({seasonId:season.id})\">Join a League</a>\n" +
    "            <a class=\"btn btn-primary\" role=\"button\" ui-sref=\"app.league.new({seasonId:season.id})\">Create a League</a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--<div ui-view=\"content\"></div>-->\n" +
    "\n" +
    "</div>");
}]);

angular.module("modules/public/register/register.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/public/register/register.tpl.html",
    "<div class=\"panel panel-default\">\n" +
    "\n" +
    "    <div class=\"panel-heading\">\n" +
    "        <h3 class=\"panel-title\">Register</h3>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"panel-body\">\n" +
    "        <form name=\"newUserForm\" role=\"form\" novalidate>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6 col-md-6\">\n" +
    "                    <div class=\"form-group\" ng-class=\"{'has-error': hasError(newUserForm.firstName), 'has-feedback': hasError(newUserForm.firstName)}\">\n" +
    "                        <label class=\"control-label\" for=\"firstName\">First Name\n" +
    "                            <small ng-show=\"hasPropertyError(newUserForm.firstName, 'required')\">[ Required ]</small>\n" +
    "                            <small ng-show=\"hasPropertyError(newUserForm.firstName, 'maxlength')\">[ Too Long ]</small>\n" +
    "                        </label>\n" +
    "                        <input id=\"firstName\" name=\"firstName\" type=\"text\" class=\"form-control\" ng-model=\"newUserData.first_name\" ng-maxlength=\"20\" focus required>\n" +
    "                        <span ng-show=\"hasError(newUserForm.firstName)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6 col-md-6\">\n" +
    "                    <div class=\"form-group\" ng-class=\"{'has-error': hasError(newUserForm.lastName), 'has-feedback': hasError(newUserForm.lastName)}\">\n" +
    "                        <label class=\"control-label\" for=\"lastName\">Last Name\n" +
    "                            <small ng-show=\"hasPropertyError(newUserForm.lastName, 'required')\">[ Required ]</small>\n" +
    "                            <small ng-show=\"hasPropertyError(newUserForm.lastName, 'maxlength')\">[ Too Long ]</small>\n" +
    "                        </label>\n" +
    "                        <input id=\"lastName\" name=\"lastName\" type=\"text\" class=\"form-control\" ng-model=\"newUserData.last_name\" ng-maxlength=\"20\" focus required>\n" +
    "                        <span ng-show=\"hasError(newUserForm.lastName)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(newUserForm.email), 'has-feedback': hasError(newUserForm.email)}\">\n" +
    "                <label class=\"control-label\" for=\"email\">Email\n" +
    "                    <small ng-show=\"hasPropertyError(newUserForm.email, 'required')\">[ Required ]</small>\n" +
    "                    <small ng-show=\"hasPropertyError(newUserForm.email, 'email')\">[ Invalid Email ]</small>\n" +
    "                </label>\n" +
    "                <input id=\"email\" name=\"email\" type=\"email\" class=\"form-control\" ng-model=\"newUserData.email\" focus required>\n" +
    "                <span ng-show=\"hasError(newUserForm.email)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6 col-md-6\">\n" +
    "                    <div class=\"form-group\" ng-class=\"{'has-error': hasError(newUserForm.password), 'has-feedback': hasError(newUserForm.password)}\">\n" +
    "                        <label class=\"control-label\" for=\"password\">Password\n" +
    "                            <small ng-show=\"hasPropertyError(newUserForm.password, 'required')\">[ Required ]</small>\n" +
    "                            <small ng-show=\"hasPropertyError(newUserForm.password, 'minlength')\">[ Too Short ]</small>\n" +
    "                        </label>\n" +
    "                        <input id=\"password\" name=\"password\" type=\"password\" class=\"form-control\" ng-model=\"newUserData.password\" ng-minlength=\"6\" focus required>\n" +
    "                        <span ng-show=\"hasError(newUserForm.password)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6 col-md-6\">\n" +
    "                    <div class=\"form-group\" ng-class=\"{'has-error': hasError(newUserForm.confirmPassword), 'has-feedback': hasError(newUserForm.confirmPassword)}\">\n" +
    "                        <label class=\"control-label\" for=\"confirmPassword\">Confirm Password\n" +
    "                            <small ng-show=\"hasPropertyError(newUserForm.confirmPassword, 'match')\">[ Doesn't Match ]</small>\n" +
    "                        </label>\n" +
    "                        <input id=\"confirmPassword\" name=\"confirmPassword\" type=\"password\" class=\"form-control\" ng-model=\"newUserData.password_confirmation\" match=\"newUserData.password\">\n" +
    "                        <span ng-show=\"hasError(newUserForm.confirmPassword)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <button type=\"submit\" class=\"btn btn-info btn-block\" ng-disabled=\"newUserForm.$invalid\" ng-click=\"register(newUserData)\">Register</button>\n" +
    "\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("modules/user/user.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/user/user.tpl.html",
    "<div class=\"panel panel-default\">\n" +
    "\n" +
    "    <div class=\"panel-heading\">\n" +
    "        <h3 class=\"panel-title\">User Profile</h3>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"panel-body\">\n" +
    "        <form name=\"editUserForm\" role=\"form\" novalidate>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6 col-md-6\">\n" +
    "                    <div class=\"form-group\" ng-class=\"{'has-error': hasError(editUserForm.firstName), 'has-feedback': hasError(editUserForm.firstName)}\">\n" +
    "                        <label class=\"control-label\" for=\"firstName\">First Name\n" +
    "                            <small ng-show=\"hasPropertyError(editUserForm.firstName, 'required')\">[ Required ]</small>\n" +
    "                            <small ng-show=\"hasPropertyError(editUserForm.firstName, 'maxlength')\">[ Too Long ]</small>\n" +
    "                        </label>\n" +
    "                        <input id=\"firstName\" name=\"firstName\" type=\"text\" class=\"form-control\" ng-model=\"userData.user.first_name\" ng-maxlength=\"20\" focus required>\n" +
    "                        <span ng-show=\"hasError(editUserForm.firstName)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6 col-md-6\">\n" +
    "                    <div class=\"form-group\" ng-class=\"{'has-error': hasError(editUserForm.lastName), 'has-feedback': hasError(editUserForm.lastName)}\">\n" +
    "                        <label class=\"control-label\" for=\"lastName\">Last Name\n" +
    "                            <small ng-show=\"hasPropertyError(editUserForm.lastName, 'required')\">[ Required ]</small>\n" +
    "                            <small ng-show=\"hasPropertyError(editUserForm.lastName, 'maxlength')\">[ Too Long ]</small>\n" +
    "                        </label>\n" +
    "                        <input id=\"lastName\" name=\"lastName\" type=\"text\" class=\"form-control\" ng-model=\"userData.user.last_name\" ng-maxlength=\"20\" focus required>\n" +
    "                        <span ng-show=\"hasError(editUserForm.lastName)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(editUserForm.email), 'has-feedback': hasError(editUserForm.email)}\">\n" +
    "                <label class=\"control-label\" for=\"email\">Email\n" +
    "                    <small ng-show=\"hasPropertyError(editUserForm.email, 'required')\">[ Required ]</small>\n" +
    "                    <small ng-show=\"hasPropertyError(editUserForm.email, 'email')\">[ Invalid Email ]</small>\n" +
    "                </label>\n" +
    "                <input id=\"email\" name=\"email\" type=\"email\" class=\"form-control\" ng-model=\"userData.user.email\" focus required>\n" +
    "                <span ng-show=\"hasError(editUserForm.email)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6 col-md-6\">\n" +
    "                    <div class=\"form-group\" ng-class=\"{'has-error': hasError(editUserForm.password), 'has-feedback': hasError(editUserForm.password)}\">\n" +
    "                        <label class=\"control-label\" for=\"password\">New Password\n" +
    "                            <small ng-show=\"hasPropertyError(editUserForm.password, 'required')\">[ Required ]</small>\n" +
    "                            <small ng-show=\"hasPropertyError(editUserForm.password, 'minlength')\">[ Too Short ]</small>\n" +
    "                        </label>\n" +
    "                        <input id=\"password\" name=\"password\" type=\"password\" class=\"form-control\" ng-model=\"userData.user.password\" ng-minlength=\"6\" focus>\n" +
    "                        <span ng-show=\"hasError(editUserForm.password)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6 col-md-6\">\n" +
    "                    <div class=\"form-group\" ng-class=\"{'has-error': hasError(editUserForm.confirmPassword), 'has-feedback': hasError(editUserForm.confirmPassword)}\">\n" +
    "                        <label class=\"control-label\" for=\"confirmPassword\">Confirm New Password\n" +
    "                            <small ng-show=\"hasPropertyError(editUserForm.confirmPassword, 'match')\">[ Doesn't Match ]</small>\n" +
    "                        </label>\n" +
    "                        <input id=\"confirmPassword\" name=\"confirmPassword\" type=\"password\" class=\"form-control\" ng-model=\"userData.user.password_confirmation\" match=\"userData.user.password\">\n" +
    "                        <span ng-show=\"hasError(editUserForm.confirmPassword)\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <button type=\"submit\" class=\"btn btn-info btn-block\" ng-disabled=\"editUserForm.$pristine || editUserForm.$invalid\" ng-click=\"update(userData.user)\">Update</button>\n" +
    "\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>");
}]);

},{}],1:[function(require,module,exports){
'use strict';
require('app-templates');


var App = function($urlRouterProvider) {
    // unmatched urls should be directed back to the start
    $urlRouterProvider.otherwise('/home');
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

    // public modules
    require('./modules/public/home').name,
    require('./modules/public/register').name,

    // app modules
    require('./modules/user').name,
    require('./modules/league').name,

    // helper modules
    require('./common/modules/header').name,
    require('./common/modules/message').name,

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

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('public', {
            abstract: true,
            url: '/',
            templateUrl: 'common/templates/master.tpl.html'
        })
        .state('app', {
            abstract: true,
            url: '/',
            templateUrl: 'common/templates/master.tpl.html',
            resolve: {
                loadUser: function(userService) {
                    return userService.getCurrentUser();
                }
            }
        })
    })

    .run(function($rootScope, $urlRouter, $log, applicationService) {
        $log.log("Application starting up...");
        applicationService.startup();
    })
;

loghApp.factory('authInterceptor', function ($rootScope, $q, $window, messageModel, userModel) {
    return {
        request: function (config) {
            messageModel.resetMessage();
            config.headers = config.headers || {};
            if ($window.sessionStorage.token) {
                config.headers.Authorization = $window.sessionStorage.token;
            }
            return config;
        },
        responseError: function (rejection) {
            messageModel.setMessage(rejection.data.message);
            if (rejection.status === 401) {
                userModel.resetUser();
            }
            return $q.reject(rejection);
        }
    };
});

loghApp.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
});










},{"app-templates":"0VoVTq","./modules/public/home":2,"./modules/public/register":3,"./modules/user":4,"./modules/league":5,"./common/modules/header":6,"./common/modules/message":7,"./common/aspects":8,"./common/models":9,"./common/api":10,"./common/command":11,"./common/service/application":12,"./common/directives/focus":13,"./common/directives/match":14,"./common/directives/requiredPattern":15,"./common/filters":16}],4:[function(require,module,exports){

module.exports = angular.module('loghApp.user', [])
    .controller('UserController', require('./UserController'))
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app.user', {
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
                        templateUrl: 'modules/user/user.tpl.html',
                        controller: 'UserController'
                    },
                    footer: {
                        templateUrl: 'common/templates/footer.tpl.html'
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    });
},{"./UserController":17}],5:[function(require,module,exports){

module.exports = angular.module('loghApp.league', [])
    .controller('LeaguesController', require('./LeaguesController'))
    .controller('LeagueController', require('./LeagueController'))
    .controller('CreateLeagueController', require('./CreateLeagueController'))
    .controller('EditLeagueController', require('./EditLeagueController'))
    .controller('JoinLeagueController', require('./JoinLeagueController'))
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app.leagues', {
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
                        templateUrl: 'modules/league/leagues.tpl.html',
                        controller: 'LeaguesController'
                    },
                    footer: {
                        templateUrl: 'common/templates/footer.tpl.html'
                    }
                }
            })
            .state('app.league', {
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
                        templateUrl: 'modules/league/league.tpl.html',
                        controller: 'LeagueController'
                    },
                    footer: {
                        templateUrl: 'common/templates/footer.tpl.html'
                    }
                },
                resolve: {
                    weeks: ['weekService', '$stateParams', function(weekService, $stateParams) {
                        return weekService.getAvailableWeeks($stateParams.seasonId);
                    }]
                }
            })
            .state('app.league.new', {
                url: '/new',
                views: {
                    leagueContent: {
                        templateUrl: 'modules/league/league.new.tpl.html',
                        controller: 'CreateLeagueController'
                    }
                }
            })
            .state('app.league.detail', {
                abstract: true,
                url: '/{leagueId}',
                views: {
                    leagueContent: {
                        templateUrl: 'modules/league/league.detail.tpl.html'
                    }
                },
                resolve: {
                    loadLeague: ['leagueService', '$stateParams', function(leagueService, $stateParams) {
                        return leagueService.getLeague($stateParams.seasonId, $stateParams.leagueId);
                    }]
                }

            })
            .state('app.league.detail.edit', {
                url: '/edit',
                views: {
                    leagueDetailContent: {
                        templateUrl: 'modules/league/league.edit.tpl.html',
                        controller: 'EditLeagueController'
                    }
                }
            })
            .state('app.league.detail.join', {
                url: '/join',
                views: {
                    leagueDetailContent: {
                        templateUrl: 'modules/league/league.join.tpl.html',
                        controller: 'JoinLeagueController'
                    }
                }
            })
        ;
        $urlRouterProvider.otherwise('/');
    });

},{"./LeaguesController":18,"./LeagueController":19,"./CreateLeagueController":20,"./EditLeagueController":21,"./JoinLeagueController":22}],8:[function(require,module,exports){

require("./TestAspect");

module.exports = angular.module('loghApp.aspects', [])
    .config( function() {

       //TODO aspect config if necessary
    }
);
},{"./TestAspect":23}],9:[function(require,module,exports){
/**
 * Define the application models
 */
module.exports = angular.module('loghApp.models', [])
    //models
    .service('userModel', require('./UserModel'))
    .service('leagueModel', require('./LeagueModel'))
    .service('messageModel', require('./MessageModel'))
;
},{"./UserModel":24,"./LeagueModel":25,"./MessageModel":26}],10:[function(require,module,exports){
/**
 * Define the remote services
 */
module.exports = angular.module('loghApp.api', [])
      .constant('apiConfig', require('./ApiConfig'))
      .service('userService', require('./UserService'))
      .service('leagueService', require('./LeagueService'))
      .service('seasonService', require('./SeasonService'))
      .service('weekService', require('./WeekService'))
;

},{"./ApiConfig":27,"./UserService":28,"./LeagueService":29,"./SeasonService":30,"./WeekService":31}],11:[function(require,module,exports){

// session commands
require('./session/LoginCommand');
require('./session/LogoutCommand');

// user commands
require('./user/GetCurrentUserCommand');
require('./user/CreateUserCommand');
require('./user/UpdateUserCommand');

// league commands
require('./league/CreateLeagueCommand');
require('./league/UpdateLeagueCommand');


module.exports = angular.module('loghApp.commandConfig', [])
    .config(function($commangularProvider) {

        // session events
        $commangularProvider.mapTo('LoginEvent').asSequence()
            .add('LoginCommand');
        $commangularProvider.mapTo('LogoutEvent').asSequence()
            .add('LogoutCommand');

        // user events
        $commangularProvider.mapTo('GetCurrentUserEvent').asSequence()
            .add('GetCurrentUserCommand');
        $commangularProvider.mapTo('CreateUserEvent').asSequence()
            .add('CreateUserCommand');
        $commangularProvider.mapTo('UpdateUserEvent').asSequence()
            .add('UpdateUserCommand');

        // league events
        $commangularProvider.mapTo('CreateLeagueEvent').asSequence()
            .add('CreateLeagueCommand');
        $commangularProvider.mapTo('UpdateLeagueEvent').asSequence()
            .add('UpdateLeagueCommand');

    }
);


},{"./session/LoginCommand":32,"./session/LogoutCommand":33,"./user/GetCurrentUserCommand":34,"./user/CreateUserCommand":35,"./user/UpdateUserCommand":36,"./league/CreateLeagueCommand":37,"./league/UpdateLeagueCommand":38}],16:[function(require,module,exports){
/**
 * Define the application filters
 */
module.exports = angular.module('loghApp.filters', [])
    //models
    .filter('timeFilter', require('./TimeFilter'))
;

},{"./TimeFilter":39}],2:[function(require,module,exports){

module.exports = angular.module('loghApp.public.home', [])
    .controller('HomeController', require('./HomeController'))
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('public.home', {
                url: 'home',
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
                        templateUrl: 'common/templates/footer.tpl.html'
                    }
                },
                resolve: {
                    season: function(seasonService) {
                        return seasonService.getCurrentSeason();
                    }
                }

            });
        $urlRouterProvider.otherwise('/');
    });
},{"./HomeController":40}],3:[function(require,module,exports){

module.exports = angular.module('loghApp.public.register', [])
    .controller('RegisterController', require('./RegisterController'))
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('public.register', {
                url: 'register',
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
                        templateUrl: 'modules/public/register/register.tpl.html',
                        controller: 'RegisterController'
                    },
                    footer: {
                        templateUrl: 'common/templates/footer.tpl.html'
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    });

},{"./RegisterController":41}],6:[function(require,module,exports){
module.exports = angular.module('loghApp.header', [])
    .controller('HeaderController', require('./HeaderController'))
},{"./HeaderController":42}],7:[function(require,module,exports){
module.exports = angular.module('loghApp.message', [])
    .controller('MessageController', require('./MessageController'));
},{"./MessageController":43}],12:[function(require,module,exports){
/**
 * Define the application service
 */
module.exports = angular.module('logh.application', [])
    .service('applicationService', require('./ApplicationService'));
},{"./ApplicationService":44}],13:[function(require,module,exports){
//application directives
module.exports = angular.module('loghApp.directives.focus',[])
    .directive('focus', require('./FocusDirective'))
;

},{"./FocusDirective":45}],14:[function(require,module,exports){
//application directives
module.exports = angular.module('loghApp.directives.match',[])
    .directive('match', require('./MatchDirective'))
;

},{"./MatchDirective":46}],15:[function(require,module,exports){
//application directives
module.exports = angular.module('loghApp.directives.requiredPattern',[])
    .directive('rpattern', require('./RequiredPatternDirective'))
;

},{"./RequiredPatternDirective":47}],17:[function(require,module,exports){

var UserController = function($scope, userModel) {

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
        console.log("user controller");
    };
    init();

};

UserController.$inject = ['$scope', 'userModel'];
module.exports = UserController;

},{}],18:[function(require,module,exports){

var LeaguesController = function($scope, $log) {

    $scope.foo = 'bar';

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.log("leagues controller");
    };
    init();

};

LeaguesController.$inject = ['$scope', '$log'];
module.exports = LeaguesController;


},{}],19:[function(require,module,exports){

var LeagueController = function($scope, $log, leagueModel, weeks) {

    $scope.leagueData = angular.copy(leagueModel);

    $scope.weeks = weeks.data;

    $scope.hasError = function(input) {
        return !input.$focused && input.$dirty && input.$invalid;
    };

    $scope.hasPropertyError = function(input, property) {
        return !input.$focused && input.$dirty && input.$error[property];
    };

    $scope.$on('leagueModel::leagueUpdated', function(event) {
        $scope.leagueData = angular.copy(leagueModel);
    });

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.log("league controller");
    };
    init();

};

LeagueController.$inject = ['$scope', '$log', 'leagueModel', 'weeks'];
module.exports = LeagueController;

},{}],20:[function(require,module,exports){

var CreateLeagueController = function($scope, $log, $stateParams) {

    $scope.newLeagueData = {
        name: '',
        season_id: $stateParams.seasonId,
        start_week_id: $scope.weeks[0].id,
        public: true,
        max_teams_per_user: '',
        password: '',
        password_confirmation: ''
    };

    $scope.createLeague = function(league) {
        $scope.dispatch('CreateLeagueEvent', { leagueParams: league });
    };

    $scope.isPasswordHidden = true;

    $scope.hidePasswordFields = function(value) {
        $scope.isPasswordHidden = value;
        if (value) {
            $scope.newLeagueData.password = '';
            $scope.newLeagueData.password_confirmation = '';
        }
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.log("create league controller");
    };
    init();

};

CreateLeagueController.$inject = ['$scope', '$log', '$stateParams'];
module.exports = CreateLeagueController;

},{}],21:[function(require,module,exports){

var EditLeagueController = function($scope, $log) {

    $scope.isPasswordHidden = $scope.leagueData.league.public;

    $scope.wasPublic = $scope.leagueData.league.public;

    $scope.updateLeague = function(league) {
        $scope.dispatch('UpdateLeagueEvent', { leagueParams: league });
    };

    $scope.hidePasswordFields = function(value) {
        $scope.isPasswordHidden = value;
        if (value) {
            $scope.leagueData.league.password = '';
            $scope.leagueData.league.password_confirmation = '';
        }
    };

    $scope.changedToPrivate = function() {
        return $scope.wasPublic && $scope.leagueData.league.public == false;
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.log("edit league controller");
    };
    init();

};

EditLeagueController.$inject = ['$scope', '$log'];
module.exports = EditLeagueController;

},{}],22:[function(require,module,exports){

var JoinLeagueController = function($scope, $log) {

    $scope.joinLeague = function(team) {
        $scope.dispatch('CreateTeamEvent', {});
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.log("join league controller");
    };
    init();

};

JoinLeagueController.$inject = ['$scope', '$log'];
module.exports = JoinLeagueController;

},{}],23:[function(require,module,exports){

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
},{}],24:[function(require,module,exports){

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
        $log.log("UserModel: setUser: " + user.email);
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
        console.log("creating user model...");
    };
    init();

};

UserModel.$inject = ['$rootScope', '$window', '$log'];
module.exports = UserModel;
},{}],25:[function(require,module,exports){

var LeagueModel = function($rootScope, $window, $log) {

    var league = {};
    league.loaded = false;
    league.id = 0;
    league.name = '';
    league.public = true;
    league.season_id = 0;
    league.start_week_id = 0;
    league.max_teams_per_user = 0;

    this.league = league;

    this.setLeague = function(leagueData) {
        league.loaded = true;
        league = angular.extend(league, leagueData);
        $rootScope.$broadcast('leagueModel::leagueUpdated', league);
        $log.log("LeagueModel: setLeague: " + league.name);
    };

    this.resetLeague = function() {
        league = {};
        league.loaded = false;
        league.id = 0;
        league.name = '';
        league.public = true;
        league.season_id = 0;
        league.start_week_id = 0;
        league.max_teams_per_user = 0;

        this.league = league;
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        console.log("creating league model...");
    };
    init();

};

LeagueModel.$inject = ['$rootScope', '$window', '$log'];
module.exports = LeagueModel;
},{}],27:[function(require,module,exports){
/*
 *  Global config for remote services
 */

var ApiConfig =  {
    baseURL: '/api/'
};

module.exports = ApiConfig;

},{}],26:[function(require,module,exports){

var MessageModel = function($log) {

    var message = {};
    message.loaded = false;
    message.type = ''; // can be success, info, warning or danger
    message.content = '';

    this.message = message;

    this.setMessage = function(messageData) {
        message.loaded = true;
        message = angular.extend(message, messageData);
        $log.log("MessageModel: content: " + message.content);
    };

    this.resetMessage = function() {
        message = {};
        message.loaded = false;
        message.type = '';
        message.content = '';

        this.message = message;
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        console.log("creating message model...");
    };
    init();

};

MessageModel.$inject = ['$log'];
module.exports = MessageModel;

},{}],28:[function(require,module,exports){
var UserService = function($http, $log, $window, apiConfig, messageModel, userModel) {

    this.login = function(email, password) {
        var promise = $http.post(
            apiConfig.baseURL + "sessions",
            { email: email, password: password })
            .success(function(data) {
                $log.log("UserService: login success");
                userModel.setUser(data.payload.user);
                $window.sessionStorage.token = data.payload.token;
                return data;
            })
            .error(function(data) {
                $log.log("UserService: login failure");
                return data;
            });

        return promise;
    };

    this.logout = function() {
        var promise = $http.delete(
            apiConfig.baseURL + 'sessions/destroy')
            .success(function(data) {
                messageModel.setMessage(data.message);
                $log.log("UserService: logout success");
                return data;
            })
            .error(function(data) {
                $log.log("UserService: logout failure");
                return data;
            });

        return promise;

    };

    this.getCurrentUser = function() {
        var promise = $http.get(apiConfig.baseURL + "users/current")
            .success(function(data) {
                $log.log("UserService: getCurrentUser success");
                userModel.setUser(data);
                return data;
            })
            .error(function(data) {
                $log.log("UserService: getCurrentUser failed");
                return data;
            });

        return promise;
    };

    this.createUser = function(userParams) {
        var promise = $http.post(apiConfig.baseURL + "users",
            { user: userParams })
            .success(function(data) {
                $log.log("UserService: createUser success");
                userModel.setUser(data.payload.user);
                $window.sessionStorage.token = data.payload.token;
                messageModel.setMessage(data.message);
                return data;
            })
            .error(function(data) {
                $log.log("UserService: createUser failed");
                return data;
            });

        return promise;
    };

    this.updateUser = function(userParams) {
        var promise = $http.put(apiConfig.baseURL + "users/current",
            { user: userParams })
            .success(function(data) {
                $log.log("UserService: updateUser success");
                userModel.setUser(userParams);
                messageModel.setMessage(data.message);
                return data;
            })
            .error(function(data) {
                $log.log("UserService: updateUser failed");
                return data;
            });

        return promise;
    };

};

UserService.$inject = ['$http', '$log', '$window', 'apiConfig', 'messageModel', 'userModel'];
module.exports = UserService;
},{}],29:[function(require,module,exports){
var LeagueService = function($http, $log, $location, apiConfig, leagueModel, messageModel) {

    this.getLeague = function(seasonId, leagueId) {
        var promise = $http.get(apiConfig.baseURL + "seasons/" + seasonId + "/leagues/" + leagueId)
            .success(function(data) {
                $log.log("LeagueService: getLeague success");
                leagueModel.setLeague(data.payload.league);
                return data;
            })
            .error(function(data) {
                $log.log("LeagueService: getLeague failed");
                return data;
            });

        return promise;
    };

    this.createLeague = function(leagueParams) {
        var promise = $http.post(apiConfig.baseURL + "seasons/" + leagueParams.season_id + "/leagues",
            { league: leagueParams })
            .success(function(data) {
                $log.log("LeagueService: createLeague success");
                // todo: change to this? $state.go('app.league.detail', { leagueId: data.payload.league.id, seasonId: data.payload.league.season_id });
                $location.path('/season/' + leagueParams.season_id + '/league/' + data.payload.league_id + '/edit' );
                messageModel.setMessage(data.message);
                return data;
            })
            .error(function(data) {
                $log.log("LeagueService: createLeague failed");
                return data;
            });

        return promise;
    };

    this.updateLeague = function(leagueParams) {
        var promise = $http.put(apiConfig.baseURL + "seasons/" + leagueParams.season_id + "/leagues/" + leagueParams.id,
            { league: leagueParams })
            .success(function(data) {
                $log.log("LeagueService: updateLeague success");
                leagueModel.setLeague(leagueParams);
                messageModel.setMessage(data.message);
                return data;
            })
            .error(function(data) {
                $log.log("LeagueService: updateLeague failed");
                return data;
            });

        return promise;
    };

};

LeagueService.$inject = ['$http', '$log', '$location', 'apiConfig', 'leagueModel', 'messageModel'];
module.exports = LeagueService;
},{}],30:[function(require,module,exports){
var SeasonService = function($http, $log, apiConfig) {

    this.getCurrentSeason = function() {
        var promise = $http.get(apiConfig.baseURL + "seasons/current")
            .success(function(data) {
                $log.log("SeasonService: getCurrentSeason success");
                return data;
            })
            .error(function(data) {
                $log.log("SeasonService: getCurrentSeason failed");
                return data;
            });

        return promise;
    };

};

SeasonService.$inject = ['$http', '$log', 'apiConfig'];
module.exports = SeasonService;
},{}],31:[function(require,module,exports){
var WeekService = function($http, $log, apiConfig) {

    this.getAvailableWeeks = function(seasonId) {
        var promise = $http.get(apiConfig.baseURL + "seasons/" + seasonId + "/weeks/available")
            .success(function(data) {
                $log.log("WeekService: getAvailableWeeks success");
                return data;
            })
            .error(function(data) {
                $log.log("WeekService: getAvailableWeeks failed");
                return data;
            });

        return promise;
    };

};

WeekService.$inject = ['$http', '$log', 'apiConfig'];
module.exports = WeekService;

},{}],32:[function(require,module,exports){

commangular.create('LoginCommand',
    function($log, userService, userModel) {

    return {

        execute: function(email, password) {
            $log.log('LoginCommand: authenticating user...');
            return userService.login(email, password);
        },
        onError: function(error) {
            $log.log("LoginCommand: failure: " + error.data);
            userModel.resetUser();
        },
        onResult: function(result) {
            $log.log("LoginCommand: success ");
        }

    }
});



},{}],33:[function(require,module,exports){

commangular.create('LogoutCommand',
    function($log, userService, userModel) {

        return {

            execute: function() {
                $log.log('LogoutCommand: logging out user...');
                return userService.logout();
            },
            onError: function(error) {
                $log.log("LogoutCommand: failure: " + error.data);
            },
            onResult: function(result) {
                $log.log("LogoutCommand: success");
                userModel.resetUser();
            }

        }
    });



},{}],34:[function(require,module,exports){

commangular.create('GetCurrentUserCommand',
   function($log, userService, userModel) {

    return {

        execute: function() {
            $log.log('GetCurrentUserCommand: getting current user details...');
            var userPromise = userService.getCurrentUser();
            return userPromise;
        },
        onError: function(error) {
            $log.log("GetCurrentUserCommand: failure: " + error.data);
        },
        onResult: function(result) {
            $log.log("GetCurrentUserCommand: success");
        }

    }
});
},{}],35:[function(require,module,exports){

commangular.create('CreateUserCommand',
    function($log, $state, userService) {

        return {

            execute: function(userParams) {
                $log.log('CreateUserCommand: creating a new user...');
                var userPromise = userService.createUser(userParams);
                return userPromise;
            },
            onError: function(error) {
                $log.log("CreateUserCommand: failure: " + error.data);
            },
            onResult: function(result) {
                $log.log("CreateUserCommand: success");
                $state.go('app.user');
            }

        }
    });
},{}],36:[function(require,module,exports){

commangular.create('UpdateUserCommand',
    function($log, userService) {

        return {

            execute: function(userParams) {
                $log.log('UpdateUserCommand: updating a user...');
                var userPromise = userService.updateUser(userParams);
                return userPromise;
            },
            onError: function(error) {
                $log.log("UpdateUserCommand: failure: " + error.data);
            },
            onResult: function(result) {
                $log.log("UpdateUserCommand: success");
            }

        }
    });

},{}],37:[function(require,module,exports){

commangular.create('CreateLeagueCommand',
    function($log, leagueService) {

        return {

            execute: function(leagueParams) {
                $log.log('CreateLeagueCommand: creating a new league...');
                var promise = leagueService.createLeague(leagueParams);
                return promise;
            },
            onError: function(error) {
                $log.log("CreateLeagueCommand: failure: " + error.data);
            },
            onResult: function(result) {
                $log.log("CreateLeagueCommand: success");
            }

        }
    });
},{}],38:[function(require,module,exports){

commangular.create('UpdateLeagueCommand',
    function($log, leagueService) {

        return {

            execute: function(leagueParams) {
                $log.log('UpdateLeagueCommand: updating a league...');
                var promise = leagueService.updateLeague(leagueParams);
                return promise;
            },
            onError: function(error) {
                $log.log("UpdateLeagueCommand: failure: " + error.data);
            },
            onResult: function(result) {
                $log.log("UpdateLeagueCommand: success");
            }

        }
    });
},{}],39:[function(require,module,exports){

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

},{}],40:[function(require,module,exports){

var HomeController = function($scope, $log, season) {

    $scope.season = season.data;

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        $log.log("main controller");
    };
    init();
};

HomeController.$inject = ['$scope', '$log', 'season'];
module.exports = HomeController;

},{}],41:[function(require,module,exports){

var RegisterController = function($scope) {

    $scope.newUserData = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: ''
    };

    $scope.register = function(newUser) {
        $scope.dispatch('CreateUserEvent', { userParams: newUser } );
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
        console.log("register controller");
    };
    init();

};

RegisterController.$inject = ['$scope'];
module.exports = RegisterController;

},{}],42:[function(require,module,exports){
var HeaderController = function($scope, $log, userModel) {

    $scope.userData = userModel;

    $scope.loginParams = {
        email: '',
        password: ''
    };

    $scope.login = function(loginParams) {
        $log.log("login params: " + loginParams);
        $scope.dispatch("LoginEvent", loginParams);
    };

    $scope.logout = function() {
        $scope.loginParams = {
            email: '',
            password: ''
        };
        $scope.dispatch("LogoutEvent");
    };

    $scope.forgotPassword = function() {
        // todo: implement this
        alert('tough shit');
    };

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        console.log("header controller");
    };
    init();
};

HeaderController.$inject = ['$scope', '$log', 'userModel'];
module.exports = HeaderController;

},{}],43:[function(require,module,exports){
var MessageController = function($scope, $log, messageModel) {

    $scope.messageData = messageModel;

    $scope.dismissMessage = function(message) {
        message.resetMessage();
    }

    /**
     * Invoked on startup, like a constructor.
     */
    var init = function () {
        console.log("message controller");
    };
    init();
};

MessageController.$inject = ['$scope', '$log', 'messageModel'];
module.exports = MessageController;

},{}],44:[function(require,module,exports){
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
            $log.log("ApplicationService init application service");
        };
        init();

    };

ApplicationService.$inject = ['$window', '$location', '$log', '$commangular'];
module.exports = ApplicationService;

},{}],45:[function(require,module,exports){
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

},{}],46:[function(require,module,exports){
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

},{}],47:[function(require,module,exports){
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
},{}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvLnRtcC9hcHAtdGVtcGxhdGVzLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvYXBwLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy91c2VyL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9sZWFndWUvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vYXNwZWN0cy9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9tb2RlbHMvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vYXBpL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2NvbW1hbmQvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vZmlsdGVycy9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHVibGljL2hvbWUvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9tb2R1bGVzL2hlYWRlci9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9tb2R1bGVzL21lc3NhZ2UvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vc2VydmljZS9hcHBsaWNhdGlvbi9pbmRleC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9kaXJlY3RpdmVzL2ZvY3VzL2luZGV4LmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2RpcmVjdGl2ZXMvbWF0Y2gvaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vZGlyZWN0aXZlcy9yZXF1aXJlZFBhdHRlcm4vaW5kZXguanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3VzZXIvVXNlckNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL2xlYWd1ZS9MZWFndWVzQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvbGVhZ3VlL0xlYWd1ZUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL2xlYWd1ZS9DcmVhdGVMZWFndWVDb250cm9sbGVyLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvbW9kdWxlcy9sZWFndWUvRWRpdExlYWd1ZUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL2xlYWd1ZS9Kb2luTGVhZ3VlQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9hc3BlY3RzL1Rlc3RBc3BlY3QuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kZWxzL1VzZXJNb2RlbC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9tb2RlbHMvTGVhZ3VlTW9kZWwuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vYXBpL0FwaUNvbmZpZy5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9tb2RlbHMvTWVzc2FnZU1vZGVsLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2FwaS9Vc2VyU2VydmljZS5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9hcGkvTGVhZ3VlU2VydmljZS5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9hcGkvU2Vhc29uU2VydmljZS5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9hcGkvV2Vla1NlcnZpY2UuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vY29tbWFuZC9zZXNzaW9uL0xvZ2luQ29tbWFuZC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9jb21tYW5kL3Nlc3Npb24vTG9nb3V0Q29tbWFuZC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9jb21tYW5kL3VzZXIvR2V0Q3VycmVudFVzZXJDb21tYW5kLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2NvbW1hbmQvdXNlci9DcmVhdGVVc2VyQ29tbWFuZC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9jb21tYW5kL3VzZXIvVXBkYXRlVXNlckNvbW1hbmQuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vY29tbWFuZC9sZWFndWUvQ3JlYXRlTGVhZ3VlQ29tbWFuZC5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9jb21tYW5kL2xlYWd1ZS9VcGRhdGVMZWFndWVDb21tYW5kLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2ZpbHRlcnMvVGltZUZpbHRlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL21vZHVsZXMvcHVibGljL2hvbWUvSG9tZUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9tb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci9SZWdpc3RlckNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vbW9kdWxlcy9oZWFkZXIvSGVhZGVyQ29udHJvbGxlci5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9tb2R1bGVzL21lc3NhZ2UvTWVzc2FnZUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vc2VydmljZS9hcHBsaWNhdGlvbi9BcHBsaWNhdGlvblNlcnZpY2UuanMiLCIvVXNlcnMvODUyL2NvZGUvbG9naC9jbGllbnQvYXBwL3NyYy9jb21tb24vZGlyZWN0aXZlcy9mb2N1cy9Gb2N1c0RpcmVjdGl2ZS5qcyIsIi9Vc2Vycy84NTIvY29kZS9sb2doL2NsaWVudC9hcHAvc3JjL2NvbW1vbi9kaXJlY3RpdmVzL21hdGNoL01hdGNoRGlyZWN0aXZlLmpzIiwiL1VzZXJzLzg1Mi9jb2RlL2xvZ2gvY2xpZW50L2FwcC9zcmMvY29tbW9uL2RpcmVjdGl2ZXMvcmVxdWlyZWRQYXR0ZXJuL1JlcXVpcmVkUGF0dGVybkRpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnYXBwLnRlbXBsYXRlcycsIFsnY29tbW9uL21vZHVsZXMvaGVhZGVyL2hlYWRlci50cGwuaHRtbCcsICdjb21tb24vbW9kdWxlcy9tZXNzYWdlL21lc3NhZ2UudHBsLmh0bWwnLCAnY29tbW9uL3RlbXBsYXRlcy9mb290ZXIudHBsLmh0bWwnLCAnY29tbW9uL3RlbXBsYXRlcy9tYXN0ZXIudHBsLmh0bWwnLCAnbW9kdWxlcy9sZWFndWUvbGVhZ3VlLmRldGFpbC50cGwuaHRtbCcsICdtb2R1bGVzL2xlYWd1ZS9sZWFndWUuZWRpdC50cGwuaHRtbCcsICdtb2R1bGVzL2xlYWd1ZS9sZWFndWUuam9pbi50cGwuaHRtbCcsICdtb2R1bGVzL2xlYWd1ZS9sZWFndWUubmV3LnRwbC5odG1sJywgJ21vZHVsZXMvbGVhZ3VlL2xlYWd1ZS50cGwuaHRtbCcsICdtb2R1bGVzL2xlYWd1ZS9sZWFndWVzLnRwbC5odG1sJywgJ21vZHVsZXMvcHVibGljL2hvbWUvaG9tZS50cGwuaHRtbCcsICdtb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci9yZWdpc3Rlci50cGwuaHRtbCcsICdtb2R1bGVzL3VzZXIvdXNlci50cGwuaHRtbCddKTtcblxuYW5ndWxhci5tb2R1bGUoXCJjb21tb24vbW9kdWxlcy9oZWFkZXIvaGVhZGVyLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwiY29tbW9uL21vZHVsZXMvaGVhZGVyL2hlYWRlci50cGwuaHRtbFwiLFxuICAgIFwiPG5hdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1kZWZhdWx0XFxcIiByb2xlPVxcXCJuYXZpZ2F0aW9uXFxcIj5cXG5cIiArXG4gICAgXCIgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcIm5hdmJhci1oZWFkZXJcXFwiPlxcblwiICtcbiAgICBcIiAgICAgIDxidXR0b24gY2xhc3M9XFxcIm5hdmJhci10b2dnbGVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgbmctY2xpY2s9XFxcImlzQ29sbGFwc2VkID0gIWlzQ29sbGFwc2VkXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24tYmFyXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICA8L2J1dHRvbj5cXG5cIiArXG4gICAgXCIgICAgICA8YSBjbGFzcz1cXFwibmF2YmFyLWJyYW5kXFxcIiB1aS1zcmVmPVxcXCJwdWJsaWMuaG9tZVxcXCI+bG9zZW9yZ29ob21lLmNvbTwvYT5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY29sbGFwc2U9XFxcImlzQ29sbGFwc2VkXFxcIiBjbGFzcz1cXFwibmF2YmFyLWNvbGxhcHNlIGJzLWpzLW5hdmJhci1jb2xsYXBzZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgPHVsIG5nLXNob3c9XFxcInVzZXJEYXRhLnVzZXIubG9hZGVkXFxcIiBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaSBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiPnt7dXNlckRhdGEudXNlci5lbWFpbH19IDxiIGNsYXNzPVxcXCJjYXJldFxcXCI+PC9iPjwvYT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8bGk+PGEgdWktc3JlZj1cXFwiYXBwLnVzZXJcXFwiPlVzZXIgUHJvZmlsZTwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxsaT48YSB1aS1zcmVmPVxcXCJwdWJsaWMuaG9tZVxcXCIgbmctY2xpY2s9XFxcImxvZ291dCgpXFxcIj5TaWduIE91dDwvYT48L2xpPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8L3VsPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9saT5cXG5cIiArXG4gICAgXCIgICAgICA8L3VsPlxcblwiICtcbiAgICBcIiAgICAgIDx1bCBuZy1zaG93PVxcXCIhdXNlckRhdGEudXNlci5sb2FkZWRcXFwiIGNsYXNzPVxcXCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGxpPjxhIHVpLXNyZWY9XFxcInB1YmxpYy5yZWdpc3RlclxcXCI+UmVnaXN0ZXI8L2E+PC9saT5cXG5cIiArXG4gICAgXCIgICAgICAgIDxsaSBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICA8YSBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiBocmVmPVxcXCIjXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiPlNpZ24gSW48L3N0cm9uZz48L2E+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnUgcGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8Zm9ybSByb2xlPVxcXCJmb3JtXFxcIiBuZy1zdWJtaXQ9XFxcImxvZ2luKGxvZ2luUGFyYW1zKTsgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+PGkgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tZW52ZWxvcGVcXFwiPjwvaT48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgZW1haWxcXFwiIG5nLW1vZGVsPVxcXCJsb2dpblBhcmFtcy5lbWFpbFxcXCIgbmctY2xpY2s9XFxcIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPjxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWxvY2tcXFwiPjwvaT48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiUGFzc3dvcmRcXFwiIG5nLW1vZGVsPVxcXCJsb2dpblBhcmFtcy5wYXNzd29yZFxcXCIgbmctY2xpY2s9XFxcIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcInN1Ym1pdC1idG4gYnRuIGJ0bi1wcmltYXJ5IHB1bGwtbGVmdFxcXCI+U3VibWl0PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJmb3Jnb3QtcGFzc3dvcmQgYnRuIGJ0bi1saW5rIHB1bGwtcmlnaHRcXFwiIGhyZWY9XFxcIiNcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCIgbmctY2xpY2s9XFxcImZvcmdvdFBhc3N3b3JkKClcXFwiPkZvcmdvdCBQYXNzd29yZD88L2E+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgPC9saT5cXG5cIiArXG4gICAgXCIgICAgICA8L3VsPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj48IS0tIC8ubmF2LWNvbGxhcHNlIC0tPlxcblwiICtcbiAgICBcIiAgPC9kaXY+PCEtLSAvLmNvbnRhaW5lci1mbHVpZCAtLT5cXG5cIiArXG4gICAgXCI8L25hdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwiY29tbW9uL21vZHVsZXMvbWVzc2FnZS9tZXNzYWdlLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwiY29tbW9uL21vZHVsZXMvbWVzc2FnZS9tZXNzYWdlLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kaXNtaXNzYWJsZSBhbGVydC17e21lc3NhZ2VEYXRhLm1lc3NhZ2UudHlwZX19XFxcIiBuZy1zaG93PVxcXCJtZXNzYWdlRGF0YS5tZXNzYWdlLmxvYWRlZFxcXCI+XFxuXCIgK1xuICAgIFwiICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGRhdGEtZGlzbWlzcz1cXFwiYWxlcnRcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiBuZy1jbGljaz1cXFwiZGlzbWlzc01lc3NhZ2UobWVzc2FnZURhdGEpXFxcIj4mdGltZXM7PC9idXR0b24+XFxuXCIgK1xuICAgIFwiICAgIHt7bWVzc2FnZURhdGEubWVzc2FnZS5jb250ZW50fX1cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwiY29tbW9uL3RlbXBsYXRlcy9mb290ZXIudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJjb21tb24vdGVtcGxhdGVzL2Zvb3Rlci50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwiZm9vdGVyXFxcIj5cXG5cIiArXG4gICAgXCIgICAgPHA+4pmlIFRoaXMgaXMgdGhlIGZvb3RlcjwvcD5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwiY29tbW9uL3RlbXBsYXRlcy9tYXN0ZXIudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJjb21tb24vdGVtcGxhdGVzL21hc3Rlci50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCIgICAgPCEtLSBIZWFkZXIgLS0+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgdWktdmlldz1cXFwiaGVhZGVyXFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCIgICAgPCEtLSBNZXNzYWdlIC0tPlxcblwiICtcbiAgICBcIiAgICA8ZGl2IHVpLXZpZXc9XFxcIm1lc3NhZ2VcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgICA8IS0tIENvbnRlbnQgLS0+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImNvbnRlbnRWaWV3XFxcIiB1aS12aWV3PVxcXCJjb250ZW50XFxcIiBjbGFzcz1cXFwicm93XFxcIj48L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCIgICAgPCEtLSBGb290ZXIgLS0+XFxuXCIgK1xuICAgIFwiICAgIDxkaXYgdWktdmlldz1cXFwiZm9vdGVyXFxcIiBjbGFzcz1cXFwicm93IGZvb3Rlci1yb3dcXFwiPjwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL2xlYWd1ZS9sZWFndWUuZGV0YWlsLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9sZWFndWUvbGVhZ3VlLmRldGFpbC50cGwuaHRtbFwiLFxuICAgIFwiPCEtLSBwbGFjZWhvbGRlciBmb3IgY2hpbGQgdmlldyBjb250ZW50IC0tPlxcblwiICtcbiAgICBcIjxkaXYgdWktdmlldz1cXFwibGVhZ3VlRGV0YWlsQ29udGVudFxcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvbGVhZ3VlL2xlYWd1ZS5lZGl0LnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9sZWFndWUvbGVhZ3VlLmVkaXQudHBsLmh0bWxcIixcbiAgICBcIjxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxoMyBjbGFzcz1cXFwicGFuZWwtdGl0bGVcXFwiPnt7bGVhZ3VlRGF0YS5sZWFndWUubmFtZX19IExlYWd1ZSA8L2gzPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8Zm9ybSBuYW1lPVxcXCJsZWFndWVGb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKGxlYWd1ZUZvcm0ubGVhZ3VlTmFtZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihsZWFndWVGb3JtLmxlYWd1ZU5hbWUpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImxlYWd1ZU5hbWVcXFwiPkxlYWd1ZSBOYW1lXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGxlYWd1ZUZvcm0ubGVhZ3VlTmFtZSwgJ3JlcXVpcmVkJylcXFwiPlsgUmVxdWlyZWQgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGxlYWd1ZUZvcm0ubGVhZ3VlTmFtZSwgJ21heGxlbmd0aCcpXFxcIj5bIFRvbyBMb25nIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJsZWFndWVOYW1lXFxcIiBuYW1lPVxcXCJsZWFndWVOYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwibGVhZ3VlRGF0YS5sZWFndWUubmFtZVxcXCIgbmctbWF4bGVuZ3RoPVxcXCIzMFxcXCIgZm9jdXMgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IobGVhZ3VlRm9ybS5sZWFndWVOYW1lKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihsZWFndWVGb3JtLm1heFRlYW1zKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKGxlYWd1ZUZvcm0ubWF4VGVhbXMpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcIm1heFRlYW1zXFxcIj5NYXggVGVhbXMgcGVyIFVzZXJcXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobGVhZ3VlRm9ybS5tYXhUZWFtcywgJ3JlcXVpcmVkJylcXFwiPlsgTnVtYmVyIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihsZWFndWVGb3JtLm1heFRlYW1zLCAnbWluJylcXFwiPlsgMSAtIDEwIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihsZWFndWVGb3JtLm1heFRlYW1zLCAnbWF4JylcXFwiPlsgMSAtIDEwIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJtYXhUZWFtc1xcXCIgbmFtZT1cXFwibWF4VGVhbXNcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgcGxhY2Vob2xkZXI9XFxcIkJldHdlZW4gMSBhbmQgMTBcXFwiIG1pbj1cXFwiMVxcXCIgbWF4PVxcXCIxMFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcImxlYWd1ZURhdGEubGVhZ3VlLm1heF90ZWFtc19wZXJfdXNlclxcXCIgZm9jdXMgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IobGVhZ3VlRm9ybS5tYXhUZWFtcylcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwic3RhcnRXZWVrXFxcIj5TdGFydCBXZWVrPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVxcXCJzdGFydFdlZWtcXFwiIG5hbWU9XFxcInN0YXJ0V2Vla1xcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcImxlYWd1ZURhdGEubGVhZ3VlLnN0YXJ0X3dlZWtfaWRcXFwiIG5nLW9wdGlvbnM9XFxcIndlZWsuaWQgYXMgd2Vlay5zdGFydHNfYXQgZm9yIHdlZWsgaW4gd2Vla3NcXFwiPjwvc2VsZWN0PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxocj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcInJhZGlvLWlubGluZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJyYWRpb1xcXCIgbmctbW9kZWw9XFxcImxlYWd1ZURhdGEubGVhZ3VlLnB1YmxpY1xcXCIgbmctY2xpY2s9XFxcImhpZGVQYXNzd29yZEZpZWxkcyh0cnVlKVxcXCIgbmctdmFsdWU9XFxcInRydWVcXFwiPiBQdWJsaWMgTGVhZ3VlXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcInJhZGlvLWlubGluZVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJyYWRpb1xcXCIgbmctbW9kZWw9XFxcImxlYWd1ZURhdGEubGVhZ3VlLnB1YmxpY1xcXCIgbmctY2xpY2s9XFxcImhpZGVQYXNzd29yZEZpZWxkcyhmYWxzZSlcXFwiIG5nLXZhbHVlPVxcXCJmYWxzZVxcXCI+IFByaXZhdGUgTGVhZ3VlXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8ZGl2IGNvbGxhcHNlPVxcXCJpc1Bhc3N3b3JkSGlkZGVuXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihsZWFndWVGb3JtLnBhc3N3b3JkKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKGxlYWd1ZUZvcm0ucGFzc3dvcmQpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJwYXNzd29yZFxcXCI+TmV3IFBhc3N3b3JkXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihsZWFndWVGb3JtLnBhc3N3b3JkLCAncmVxdWlyZWQnKVxcXCI+WyBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGxlYWd1ZUZvcm0ucGFzc3dvcmQsICdwYXR0ZXJuJylcXFwiPlsgVG9vIFNob3J0IF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcInBhc3N3b3JkXFxcIiBuYW1lPVxcXCJwYXNzd29yZFxcXCIgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJsZWFndWVEYXRhLmxlYWd1ZS5wYXNzd29yZFxcXCIgbmctcmVxdWlyZWQ9XFxcImNoYW5nZWRUb1ByaXZhdGUoKVxcXCIgcnBhdHRlcm49XFxcIi8uezZ9L1xcXCIgZm9jdXM+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKGxlYWd1ZUZvcm0ucGFzc3dvcmQpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihsZWFndWVGb3JtLmNvbmZpcm1QYXNzd29yZCksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihsZWFndWVGb3JtLmNvbmZpcm1QYXNzd29yZCl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImNvbmZpcm1QYXNzd29yZFxcXCI+Q29uZmlybSBOZXcgUGFzc3dvcmRcXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGxlYWd1ZUZvcm0uY29uZmlybVBhc3N3b3JkLCAnbWF0Y2gnKVxcXCI+WyBEb2Vzbid0IE1hdGNoIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgbmFtZT1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcImxlYWd1ZURhdGEubGVhZ3VlLnBhc3N3b3JkX2NvbmZpcm1hdGlvblxcXCIgbWF0Y2g9XFxcImxlYWd1ZURhdGEubGVhZ3VlLnBhc3N3b3JkXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IobGVhZ3VlRm9ybS5jb25maXJtUGFzc3dvcmQpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWluZm8gYnRuLWJsb2NrXFxcIiBuZy1kaXNhYmxlZD1cXFwibGVhZ3VlRm9ybS4kcHJpc3RpbmUgfHwgbGVhZ3VlRm9ybS4kaW52YWxpZFxcXCIgbmctY2xpY2s9XFxcInVwZGF0ZUxlYWd1ZShsZWFndWVEYXRhLmxlYWd1ZSlcXFwiPlVwZGF0ZSBMZWFndWU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCIgICAgICAgIDwvZm9ybT5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvbGVhZ3VlL2xlYWd1ZS5qb2luLnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9sZWFndWUvbGVhZ3VlLmpvaW4udHBsLmh0bWxcIixcbiAgICBcIjxkaXY+VGhpcyBpcyB3aGVyZSB5b3UgY2FuIGpvaW4gdGhlIHt7bGVhZ3VlRGF0YS5sZWFndWUubmFtZX19IGxlYWd1ZTwvZGl2PlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL2xlYWd1ZS9sZWFndWUubmV3LnRwbC5odG1sXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFwibW9kdWxlcy9sZWFndWUvbGVhZ3VlLm5ldy50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGgzIGNsYXNzPVxcXCJwYW5lbC10aXRsZVxcXCI+Q3JlYXRlIExlYWd1ZTwvaDM+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgIDxmb3JtIG5hbWU9XFxcIm5ld0xlYWd1ZUZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IobmV3TGVhZ3VlRm9ybS5sZWFndWVOYW1lKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKG5ld0xlYWd1ZUZvcm0ubGVhZ3VlTmFtZSl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwibGVhZ3VlTmFtZVxcXCI+TGVhZ3VlIE5hbWVcXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobmV3TGVhZ3VlRm9ybS5sZWFndWVOYW1lLCAncmVxdWlyZWQnKVxcXCI+WyBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobmV3TGVhZ3VlRm9ybS5sZWFndWVOYW1lLCAnbWF4bGVuZ3RoJylcXFwiPlsgVG9vIExvbmcgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcImxlYWd1ZU5hbWVcXFwiIG5hbWU9XFxcImxlYWd1ZU5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJuZXdMZWFndWVEYXRhLm5hbWVcXFwiIG5nLW1heGxlbmd0aD1cXFwiMzBcXFwiIGZvY3VzIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKG5ld0xlYWd1ZUZvcm0ubGVhZ3VlTmFtZSlcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IobmV3TGVhZ3VlRm9ybS5tYXhUZWFtcyksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihuZXdMZWFndWVGb3JtLm1heFRlYW1zKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJtYXhUZWFtc1xcXCI+TWF4IFRlYW1zIHBlciBVc2VyXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld0xlYWd1ZUZvcm0ubWF4VGVhbXMsICdyZXF1aXJlZCcpXFxcIj5bIE51bWJlciBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobmV3TGVhZ3VlRm9ybS5tYXhUZWFtcywgJ21pbicpXFxcIj5bIDEgLSAxMCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobmV3TGVhZ3VlRm9ybS5tYXhUZWFtcywgJ21heCcpXFxcIj5bIDEgLSAxMCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwibWF4VGVhbXNcXFwiIG5hbWU9XFxcIm1heFRlYW1zXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIHBsYWNlaG9sZGVyPVxcXCJCZXR3ZWVuIDEgYW5kIDEwXFxcIiBtaW49XFxcIjFcXFwiIG1heD1cXFwiMTBcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJuZXdMZWFndWVEYXRhLm1heF90ZWFtc19wZXJfdXNlclxcXCIgZm9jdXMgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IobmV3TGVhZ3VlRm9ybS5tYXhUZWFtcylcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwic3RhcnRXZWVrXFxcIj5TdGFydCBXZWVrPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVxcXCJzdGFydFdlZWtcXFwiIG5hbWU9XFxcInN0YXJ0V2Vla1xcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcIm5ld0xlYWd1ZURhdGEuc3RhcnRfd2Vla19pZFxcXCIgbmctb3B0aW9ucz1cXFwid2Vlay5pZCBhcyB3ZWVrLnN0YXJ0c19hdCBmb3Igd2VlayBpbiB3ZWVrc1xcXCI+PC9zZWxlY3Q+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGhyPlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwicmFkaW8taW5saW5lXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInJhZGlvXFxcIiBuZy1tb2RlbD1cXFwibmV3TGVhZ3VlRGF0YS5wdWJsaWNcXFwiIG5nLWNsaWNrPVxcXCJoaWRlUGFzc3dvcmRGaWVsZHModHJ1ZSlcXFwiIG5nLWNoZWNrZWQ9XFxcInRydWVcXFwiIG5nLXZhbHVlPVxcXCJ0cnVlXFxcIj4gUHVibGljIExlYWd1ZVxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJyYWRpby1pbmxpbmVcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicmFkaW9cXFwiIG5nLW1vZGVsPVxcXCJuZXdMZWFndWVEYXRhLnB1YmxpY1xcXCIgbmctY2xpY2s9XFxcImhpZGVQYXNzd29yZEZpZWxkcyhmYWxzZSlcXFwiIG5nLXZhbHVlPVxcXCJmYWxzZVxcXCI+IFByaXZhdGUgTGVhZ3VlXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8ZGl2IGNvbGxhcHNlPVxcXCJpc1Bhc3N3b3JkSGlkZGVuXFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihuZXdMZWFndWVGb3JtLnBhc3N3b3JkKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKG5ld0xlYWd1ZUZvcm0ucGFzc3dvcmQpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJwYXNzd29yZFxcXCI+UGFzc3dvcmRcXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld0xlYWd1ZUZvcm0ucGFzc3dvcmQsICdyZXF1aXJlZCcpXFxcIj5bIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobmV3TGVhZ3VlRm9ybS5wYXNzd29yZCwgJ3BhdHRlcm4nKVxcXCI+WyBUb28gU2hvcnQgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwicGFzc3dvcmRcXFwiIG5hbWU9XFxcInBhc3N3b3JkXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcIm5ld0xlYWd1ZURhdGEucGFzc3dvcmRcXFwiIG5nLXJlcXVpcmVkPVxcXCIhbmV3TGVhZ3VlRGF0YS5wdWJsaWNcXFwiIHJwYXR0ZXJuPVxcXCIvLns2fS9cXFwiIGZvY3VzPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihuZXdMZWFndWVGb3JtLnBhc3N3b3JkKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IobmV3TGVhZ3VlRm9ybS5jb25maXJtUGFzc3dvcmQpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IobmV3TGVhZ3VlRm9ybS5jb25maXJtUGFzc3dvcmQpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiPkNvbmZpcm0gUGFzc3dvcmRcXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld0xlYWd1ZUZvcm0uY29uZmlybVBhc3N3b3JkLCAnbWF0Y2gnKVxcXCI+WyBEb2Vzbid0IE1hdGNoIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgbmFtZT1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcIm5ld0xlYWd1ZURhdGEucGFzc3dvcmRfY29uZmlybWF0aW9uXFxcIiBtYXRjaD1cXFwibmV3TGVhZ3VlRGF0YS5wYXNzd29yZFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKG5ld0xlYWd1ZUZvcm0uY29uZmlybVBhc3N3b3JkKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvIGJ0bi1ibG9ja1xcXCIgbmctZGlzYWJsZWQ9XFxcIm5ld0xlYWd1ZUZvcm0uJGludmFsaWRcXFwiIG5nLWNsaWNrPVxcXCJjcmVhdGVMZWFndWUobmV3TGVhZ3VlRGF0YSlcXFwiPkNyZWF0ZSBMZWFndWU8L2J1dHRvbj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCIgICAgICAgIDwvZm9ybT5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiPC9kaXY+XCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvbGVhZ3VlL2xlYWd1ZS50cGwuaHRtbFwiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1vZHVsZXMvbGVhZ3VlL2xlYWd1ZS50cGwuaHRtbFwiLFxuICAgIFwiPCEtLSBwbGFjZWhvbGRlciBmb3IgY2hpbGQgdmlldyBjb250ZW50IC0tPlxcblwiICtcbiAgICBcIjxkaXYgdWktdmlldz1cXFwibGVhZ3VlQ29udGVudFxcXCI+PC9kaXY+XFxuXCIgK1xuICAgIFwiXCIpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1vZHVsZXMvbGVhZ3VlL2xlYWd1ZXMudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL2xlYWd1ZS9sZWFndWVzLnRwbC5odG1sXCIsXG4gICAgXCI8ZGl2PmhlcmUgaXMgeW91ciBsaXN0IG9mIGxlYWd1ZXMge3tmb299fTwvZGl2PlxcblwiICtcbiAgICBcIlwiKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtb2R1bGVzL3B1YmxpYy9ob21lL2hvbWUudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3B1YmxpYy9ob21lL2hvbWUudHBsLmh0bWxcIixcbiAgICBcIjxkaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcImp1bWJvdHJvblxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8aDE+TG9zZXJzIFdhbnRlZDwvaDE+XFxuXCIgK1xuICAgIFwiICAgICAgICA8cCBjbGFzcz1cXFwibGVhZFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGltZyBzcmM9XFxcInJlc291cmNlcy9hc3NldHMvaW1hZ2VzL2xvc2VyLnBuZ1xcXCIgYWx0PVxcXCJIZWxsbyBMb3NlclxcXCI+PGJyPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9wPlxcblwiICtcbiAgICBcIiAgICAgICAgPGRpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiByb2xlPVxcXCJidXR0b25cXFwiIHVpLXNyZWY9XFxcImFwcC5sZWFndWVzKHtzZWFzb25JZDpzZWFzb24uaWR9KVxcXCI+Sm9pbiBhIExlYWd1ZTwvYT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiByb2xlPVxcXCJidXR0b25cXFwiIHVpLXNyZWY9XFxcImFwcC5sZWFndWUubmV3KHtzZWFzb25JZDpzZWFzb24uaWR9KVxcXCI+Q3JlYXRlIGEgTGVhZ3VlPC9hPlxcblwiICtcbiAgICBcIiAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgICA8IS0tPGRpdiB1aS12aWV3PVxcXCJjb250ZW50XFxcIj48L2Rpdj4tLT5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy9wdWJsaWMvcmVnaXN0ZXIvcmVnaXN0ZXIudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci9yZWdpc3Rlci50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGgzIGNsYXNzPVxcXCJwYW5lbC10aXRsZVxcXCI+UmVnaXN0ZXI8L2gzPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCIgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICA8Zm9ybSBuYW1lPVxcXCJuZXdVc2VyRm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZT5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihuZXdVc2VyRm9ybS5maXJzdE5hbWUpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IobmV3VXNlckZvcm0uZmlyc3ROYW1lKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJmaXJzdE5hbWVcXFwiPkZpcnN0IE5hbWVcXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobmV3VXNlckZvcm0uZmlyc3ROYW1lLCAncmVxdWlyZWQnKVxcXCI+WyBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobmV3VXNlckZvcm0uZmlyc3ROYW1lLCAnbWF4bGVuZ3RoJylcXFwiPlsgVG9vIExvbmcgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcImZpcnN0TmFtZVxcXCIgbmFtZT1cXFwiZmlyc3ROYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwibmV3VXNlckRhdGEuZmlyc3RfbmFtZVxcXCIgbmctbWF4bGVuZ3RoPVxcXCIyMFxcXCIgZm9jdXMgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IobmV3VXNlckZvcm0uZmlyc3ROYW1lKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihuZXdVc2VyRm9ybS5sYXN0TmFtZSksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihuZXdVc2VyRm9ybS5sYXN0TmFtZSl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwibGFzdE5hbWVcXFwiPkxhc3QgTmFtZVxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihuZXdVc2VyRm9ybS5sYXN0TmFtZSwgJ3JlcXVpcmVkJylcXFwiPlsgUmVxdWlyZWQgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld1VzZXJGb3JtLmxhc3ROYW1lLCAnbWF4bGVuZ3RoJylcXFwiPlsgVG9vIExvbmcgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcImxhc3ROYW1lXFxcIiBuYW1lPVxcXCJsYXN0TmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcIm5ld1VzZXJEYXRhLmxhc3RfbmFtZVxcXCIgbmctbWF4bGVuZ3RoPVxcXCIyMFxcXCIgZm9jdXMgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IobmV3VXNlckZvcm0ubGFzdE5hbWUpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IobmV3VXNlckZvcm0uZW1haWwpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IobmV3VXNlckZvcm0uZW1haWwpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJlbWFpbFxcXCI+RW1haWxcXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld1VzZXJGb3JtLmVtYWlsLCAncmVxdWlyZWQnKVxcXCI+WyBSZXF1aXJlZCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKG5ld1VzZXJGb3JtLmVtYWlsLCAnZW1haWwnKVxcXCI+WyBJbnZhbGlkIEVtYWlsIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcImVtYWlsXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJuZXdVc2VyRGF0YS5lbWFpbFxcXCIgZm9jdXMgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKG5ld1VzZXJGb3JtLmVtYWlsKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKG5ld1VzZXJGb3JtLnBhc3N3b3JkKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKG5ld1VzZXJGb3JtLnBhc3N3b3JkKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJwYXNzd29yZFxcXCI+UGFzc3dvcmRcXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobmV3VXNlckZvcm0ucGFzc3dvcmQsICdyZXF1aXJlZCcpXFxcIj5bIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihuZXdVc2VyRm9ybS5wYXNzd29yZCwgJ21pbmxlbmd0aCcpXFxcIj5bIFRvbyBTaG9ydCBdPC9zbWFsbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwicGFzc3dvcmRcXFwiIG5hbWU9XFxcInBhc3N3b3JkXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcIm5ld1VzZXJEYXRhLnBhc3N3b3JkXFxcIiBuZy1taW5sZW5ndGg9XFxcIjZcXFwiIGZvY3VzIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKG5ld1VzZXJGb3JtLnBhc3N3b3JkKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihuZXdVc2VyRm9ybS5jb25maXJtUGFzc3dvcmQpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IobmV3VXNlckZvcm0uY29uZmlybVBhc3N3b3JkKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiPkNvbmZpcm0gUGFzc3dvcmRcXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIG5nLXNob3c9XFxcImhhc1Byb3BlcnR5RXJyb3IobmV3VXNlckZvcm0uY29uZmlybVBhc3N3b3JkLCAnbWF0Y2gnKVxcXCI+WyBEb2Vzbid0IE1hdGNoIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiIG5hbWU9XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJuZXdVc2VyRGF0YS5wYXNzd29yZF9jb25maXJtYXRpb25cXFwiIG1hdGNoPVxcXCJuZXdVc2VyRGF0YS5wYXNzd29yZFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IobmV3VXNlckZvcm0uY29uZmlybVBhc3N3b3JkKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvIGJ0bi1ibG9ja1xcXCIgbmctZGlzYWJsZWQ9XFxcIm5ld1VzZXJGb3JtLiRpbnZhbGlkXFxcIiBuZy1jbGljaz1cXFwicmVnaXN0ZXIobmV3VXNlckRhdGEpXFxcIj5SZWdpc3RlcjwvYnV0dG9uPlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgICAgICAgPC9mb3JtPlxcblwiICtcbiAgICBcIiAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCI8L2Rpdj5cIik7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKFwibW9kdWxlcy91c2VyL3VzZXIudHBsLmh0bWxcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoXCJtb2R1bGVzL3VzZXIvdXNlci50cGwuaHRtbFwiLFxuICAgIFwiPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGgzIGNsYXNzPVxcXCJwYW5lbC10aXRsZVxcXCI+VXNlciBQcm9maWxlPC9oMz5cXG5cIiArXG4gICAgXCIgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgPGZvcm0gbmFtZT1cXFwiZWRpdFVzZXJGb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1tZC02XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKGVkaXRVc2VyRm9ybS5maXJzdE5hbWUpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IoZWRpdFVzZXJGb3JtLmZpcnN0TmFtZSl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiZmlyc3ROYW1lXFxcIj5GaXJzdCBOYW1lXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGVkaXRVc2VyRm9ybS5maXJzdE5hbWUsICdyZXF1aXJlZCcpXFxcIj5bIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihlZGl0VXNlckZvcm0uZmlyc3ROYW1lLCAnbWF4bGVuZ3RoJylcXFwiPlsgVG9vIExvbmcgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcImZpcnN0TmFtZVxcXCIgbmFtZT1cXFwiZmlyc3ROYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidXNlckRhdGEudXNlci5maXJzdF9uYW1lXFxcIiBuZy1tYXhsZW5ndGg9XFxcIjIwXFxcIiBmb2N1cyByZXF1aXJlZD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihlZGl0VXNlckZvcm0uZmlyc3ROYW1lKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtbWQtNlxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBoYXNFcnJvcihlZGl0VXNlckZvcm0ubGFzdE5hbWUpLCAnaGFzLWZlZWRiYWNrJzogaGFzRXJyb3IoZWRpdFVzZXJGb3JtLmxhc3ROYW1lKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJsYXN0TmFtZVxcXCI+TGFzdCBOYW1lXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGVkaXRVc2VyRm9ybS5sYXN0TmFtZSwgJ3JlcXVpcmVkJylcXFwiPlsgUmVxdWlyZWQgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGVkaXRVc2VyRm9ybS5sYXN0TmFtZSwgJ21heGxlbmd0aCcpXFxcIj5bIFRvbyBMb25nIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJsYXN0TmFtZVxcXCIgbmFtZT1cXFwibGFzdE5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJ1c2VyRGF0YS51c2VyLmxhc3RfbmFtZVxcXCIgbmctbWF4bGVuZ3RoPVxcXCIyMFxcXCIgZm9jdXMgcmVxdWlyZWQ+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IoZWRpdFVzZXJGb3JtLmxhc3ROYW1lKVxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIlxcblwiICtcbiAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKGVkaXRVc2VyRm9ybS5lbWFpbCksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihlZGl0VXNlckZvcm0uZW1haWwpfVxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJlbWFpbFxcXCI+RW1haWxcXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGVkaXRVc2VyRm9ybS5lbWFpbCwgJ3JlcXVpcmVkJylcXFwiPlsgUmVxdWlyZWQgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihlZGl0VXNlckZvcm0uZW1haWwsICdlbWFpbCcpXFxcIj5bIEludmFsaWQgRW1haWwgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwiZW1haWxcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiB0eXBlPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcInVzZXJEYXRhLnVzZXIuZW1haWxcXFwiIGZvY3VzIHJlcXVpcmVkPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8c3BhbiBuZy1zaG93PVxcXCJoYXNFcnJvcihlZGl0VXNlckZvcm0uZW1haWwpXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPC9kaXY+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IoZWRpdFVzZXJGb3JtLnBhc3N3b3JkKSwgJ2hhcy1mZWVkYmFjayc6IGhhc0Vycm9yKGVkaXRVc2VyRm9ybS5wYXNzd29yZCl9XFxcIj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwicGFzc3dvcmRcXFwiPk5ldyBQYXNzd29yZFxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihlZGl0VXNlckZvcm0ucGFzc3dvcmQsICdyZXF1aXJlZCcpXFxcIj5bIFJlcXVpcmVkIF08L3NtYWxsPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgbmctc2hvdz1cXFwiaGFzUHJvcGVydHlFcnJvcihlZGl0VXNlckZvcm0ucGFzc3dvcmQsICdtaW5sZW5ndGgnKVxcXCI+WyBUb28gU2hvcnQgXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcInBhc3N3b3JkXFxcIiBuYW1lPVxcXCJwYXNzd29yZFxcXCIgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJ1c2VyRGF0YS51c2VyLnBhc3N3b3JkXFxcIiBuZy1taW5sZW5ndGg9XFxcIjZcXFwiIGZvY3VzPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImhhc0Vycm9yKGVkaXRVc2VyRm9ybS5wYXNzd29yZClcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLW1kLTZcXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgbmctY2xhc3M9XFxcInsnaGFzLWVycm9yJzogaGFzRXJyb3IoZWRpdFVzZXJGb3JtLmNvbmZpcm1QYXNzd29yZCksICdoYXMtZmVlZGJhY2snOiBoYXNFcnJvcihlZGl0VXNlckZvcm0uY29uZmlybVBhc3N3b3JkKX1cXFwiPlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiPkNvbmZpcm0gTmV3IFBhc3N3b3JkXFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBuZy1zaG93PVxcXCJoYXNQcm9wZXJ0eUVycm9yKGVkaXRVc2VyRm9ybS5jb25maXJtUGFzc3dvcmQsICdtYXRjaCcpXFxcIj5bIERvZXNuJ3QgTWF0Y2ggXTwvc21hbGw+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgbmFtZT1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcInVzZXJEYXRhLnVzZXIucGFzc3dvcmRfY29uZmlybWF0aW9uXFxcIiBtYXRjaD1cXFwidXNlckRhdGEudXNlci5wYXNzd29yZFxcXCI+XFxuXCIgK1xuICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gbmctc2hvdz1cXFwiaGFzRXJyb3IoZWRpdFVzZXJGb3JtLmNvbmZpcm1QYXNzd29yZClcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblwiICtcbiAgICBcIiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8L2Rpdj5cXG5cIiArXG4gICAgXCJcXG5cIiArXG4gICAgXCIgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4taW5mbyBidG4tYmxvY2tcXFwiIG5nLWRpc2FibGVkPVxcXCJlZGl0VXNlckZvcm0uJHByaXN0aW5lIHx8IGVkaXRVc2VyRm9ybS4kaW52YWxpZFxcXCIgbmctY2xpY2s9XFxcInVwZGF0ZSh1c2VyRGF0YS51c2VyKVxcXCI+VXBkYXRlPC9idXR0b24+XFxuXCIgK1xuICAgIFwiXFxuXCIgK1xuICAgIFwiICAgICAgICA8L2Zvcm0+XFxuXCIgK1xuICAgIFwiICAgIDwvZGl2PlxcblwiICtcbiAgICBcIjwvZGl2PlwiKTtcbn1dKTtcbiIsIid1c2Ugc3RyaWN0JztcbnJlcXVpcmUoJ2FwcC10ZW1wbGF0ZXMnKTtcblxuXG52YXIgQXBwID0gZnVuY3Rpb24oJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgLy8gdW5tYXRjaGVkIHVybHMgc2hvdWxkIGJlIGRpcmVjdGVkIGJhY2sgdG8gdGhlIHN0YXJ0XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL2hvbWUnKTtcbn07XG5cbkFwcC4kaW5qZWN0ID0gWyckdXJsUm91dGVyUHJvdmlkZXInXTtcblxudmFyIGxvZ2hBcHAgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcCcsIFtcbiAgICAnbmdDb29raWVzJyxcbiAgICAnbmdSZXNvdXJjZScsXG4gICAgJ25nU2FuaXRpemUnLFxuICAgICduZ1JvdXRlJyxcbiAgICAnY29tbWFuZ3VsYXInLFxuICAgICd1aS5yb3V0ZXInLFxuICAgICd1aS5ib290c3RyYXAnLFxuICAgICdhcHAudGVtcGxhdGVzJyxcbiAgICAndWkucm91dGVyLnN0YXRlSGVscGVyJyxcblxuICAgIC8vIHB1YmxpYyBtb2R1bGVzXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3B1YmxpYy9ob21lJykubmFtZSxcbiAgICByZXF1aXJlKCcuL21vZHVsZXMvcHVibGljL3JlZ2lzdGVyJykubmFtZSxcblxuICAgIC8vIGFwcCBtb2R1bGVzXG4gICAgcmVxdWlyZSgnLi9tb2R1bGVzL3VzZXInKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vbW9kdWxlcy9sZWFndWUnKS5uYW1lLFxuXG4gICAgLy8gaGVscGVyIG1vZHVsZXNcbiAgICByZXF1aXJlKCcuL2NvbW1vbi9tb2R1bGVzL2hlYWRlcicpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9jb21tb24vbW9kdWxlcy9tZXNzYWdlJykubmFtZSxcblxuICAgIHJlcXVpcmUoJy4vY29tbW9uL2FzcGVjdHMnKS5uYW1lLFxuICAgIHJlcXVpcmUoJy4vY29tbW9uL21vZGVscycpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9jb21tb24vYXBpJykubmFtZSxcbiAgICByZXF1aXJlKCcuL2NvbW1vbi9jb21tYW5kJykubmFtZSxcblxuICAgIHJlcXVpcmUoJy4vY29tbW9uL3NlcnZpY2UvYXBwbGljYXRpb24nKS5uYW1lLFxuXG4gICAgLy9kaXJlY3RpdmVzXG4gICAgcmVxdWlyZSgnLi9jb21tb24vZGlyZWN0aXZlcy9mb2N1cycpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9jb21tb24vZGlyZWN0aXZlcy9tYXRjaCcpLm5hbWUsXG4gICAgcmVxdWlyZSgnLi9jb21tb24vZGlyZWN0aXZlcy9yZXF1aXJlZFBhdHRlcm4nKS5uYW1lLFxuXG4gICAgLy9tb2RhbHNcblxuICAgIC8vZmlsdGVyc1xuICAgIHJlcXVpcmUoJy4vY29tbW9uL2ZpbHRlcnMnKS5uYW1lXG5cbiAgICBdLCBBcHApXG5cbiAgICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgLnN0YXRlKCdwdWJsaWMnLCB7XG4gICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgIHVybDogJy8nLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vdGVtcGxhdGVzL21hc3Rlci50cGwuaHRtbCdcbiAgICAgICAgfSlcbiAgICAgICAgLnN0YXRlKCdhcHAnLCB7XG4gICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgIHVybDogJy8nLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vdGVtcGxhdGVzL21hc3Rlci50cGwuaHRtbCcsXG4gICAgICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgICAgICAgbG9hZFVzZXI6IGZ1bmN0aW9uKHVzZXJTZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1c2VyU2VydmljZS5nZXRDdXJyZW50VXNlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgLnJ1bihmdW5jdGlvbigkcm9vdFNjb3BlLCAkdXJsUm91dGVyLCAkbG9nLCBhcHBsaWNhdGlvblNlcnZpY2UpIHtcbiAgICAgICAgJGxvZy5sb2coXCJBcHBsaWNhdGlvbiBzdGFydGluZyB1cC4uLlwiKTtcbiAgICAgICAgYXBwbGljYXRpb25TZXJ2aWNlLnN0YXJ0dXAoKTtcbiAgICB9KVxuO1xuXG5sb2doQXBwLmZhY3RvcnkoJ2F1dGhJbnRlcmNlcHRvcicsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkcSwgJHdpbmRvdywgbWVzc2FnZU1vZGVsLCB1c2VyTW9kZWwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZXF1ZXN0OiBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgICAgICBtZXNzYWdlTW9kZWwucmVzZXRNZXNzYWdlKCk7XG4gICAgICAgICAgICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuICAgICAgICAgICAgaWYgKCR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudG9rZW4pIHtcbiAgICAgICAgICAgICAgICBjb25maWcuaGVhZGVycy5BdXRob3JpemF0aW9uID0gJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS50b2tlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb25maWc7XG4gICAgICAgIH0sXG4gICAgICAgIHJlc3BvbnNlRXJyb3I6IGZ1bmN0aW9uIChyZWplY3Rpb24pIHtcbiAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKHJlamVjdGlvbi5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgaWYgKHJlamVjdGlvbi5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgICAgICAgIHVzZXJNb2RlbC5yZXNldFVzZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAkcS5yZWplY3QocmVqZWN0aW9uKTtcbiAgICAgICAgfVxuICAgIH07XG59KTtcblxubG9naEFwcC5jb25maWcoZnVuY3Rpb24gKCRodHRwUHJvdmlkZXIpIHtcbiAgICAkaHR0cFByb3ZpZGVyLmludGVyY2VwdG9ycy5wdXNoKCdhdXRoSW50ZXJjZXB0b3InKTtcbn0pO1xuXG5cblxuXG5cblxuXG5cblxuIiwiXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLnVzZXInLCBbXSlcbiAgICAuY29udHJvbGxlcignVXNlckNvbnRyb2xsZXInLCByZXF1aXJlKCcuL1VzZXJDb250cm9sbGVyJykpXG4gICAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcC51c2VyJywge1xuICAgICAgICAgICAgICAgIHVybDogJ3VzZXInLFxuICAgICAgICAgICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9oZWFkZXIvaGVhZGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdIZWFkZXJDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL21lc3NhZ2UvbWVzc2FnZS50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTWVzc2FnZUNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy91c2VyL3VzZXIudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1VzZXJDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL3RlbXBsYXRlcy9mb290ZXIudHBsLmh0bWwnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICAgIH0pOyIsIlxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5sZWFndWUnLCBbXSlcbiAgICAuY29udHJvbGxlcignTGVhZ3Vlc0NvbnRyb2xsZXInLCByZXF1aXJlKCcuL0xlYWd1ZXNDb250cm9sbGVyJykpXG4gICAgLmNvbnRyb2xsZXIoJ0xlYWd1ZUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL0xlYWd1ZUNvbnRyb2xsZXInKSlcbiAgICAuY29udHJvbGxlcignQ3JlYXRlTGVhZ3VlQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vQ3JlYXRlTGVhZ3VlQ29udHJvbGxlcicpKVxuICAgIC5jb250cm9sbGVyKCdFZGl0TGVhZ3VlQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vRWRpdExlYWd1ZUNvbnRyb2xsZXInKSlcbiAgICAuY29udHJvbGxlcignSm9pbkxlYWd1ZUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL0pvaW5MZWFndWVDb250cm9sbGVyJykpXG4gICAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcC5sZWFndWVzJywge1xuICAgICAgICAgICAgICAgIHVybDogJ3NlYXNvbi97c2Vhc29uSWR9L2xlYWd1ZXMnLFxuICAgICAgICAgICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9oZWFkZXIvaGVhZGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdIZWFkZXJDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL21lc3NhZ2UvbWVzc2FnZS50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTWVzc2FnZUNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9sZWFndWUvbGVhZ3Vlcy50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTGVhZ3Vlc0NvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vdGVtcGxhdGVzL2Zvb3Rlci50cGwuaHRtbCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcC5sZWFndWUnLCB7XG4gICAgICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgdXJsOiAnc2Vhc29uL3tzZWFzb25JZH0vbGVhZ3VlJyxcbiAgICAgICAgICAgICAgICB2aWV3czoge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvaGVhZGVyL2hlYWRlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnSGVhZGVyQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9tZXNzYWdlL21lc3NhZ2UudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ01lc3NhZ2VDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvbGVhZ3VlL2xlYWd1ZS50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTGVhZ3VlQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi90ZW1wbGF0ZXMvZm9vdGVyLnRwbC5odG1sJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgICAgICAgICAgIHdlZWtzOiBbJ3dlZWtTZXJ2aWNlJywgJyRzdGF0ZVBhcmFtcycsIGZ1bmN0aW9uKHdlZWtTZXJ2aWNlLCAkc3RhdGVQYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3ZWVrU2VydmljZS5nZXRBdmFpbGFibGVXZWVrcygkc3RhdGVQYXJhbXMuc2Vhc29uSWQpO1xuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcC5sZWFndWUubmV3Jywge1xuICAgICAgICAgICAgICAgIHVybDogJy9uZXcnLFxuICAgICAgICAgICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgICAgICAgICAgIGxlYWd1ZUNvbnRlbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9sZWFndWUvbGVhZ3VlLm5ldy50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnQ3JlYXRlTGVhZ3VlQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcC5sZWFndWUuZGV0YWlsJywge1xuICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHVybDogJy97bGVhZ3VlSWR9JyxcbiAgICAgICAgICAgICAgICB2aWV3czoge1xuICAgICAgICAgICAgICAgICAgICBsZWFndWVDb250ZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvbGVhZ3VlL2xlYWd1ZS5kZXRhaWwudHBsLmh0bWwnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZExlYWd1ZTogWydsZWFndWVTZXJ2aWNlJywgJyRzdGF0ZVBhcmFtcycsIGZ1bmN0aW9uKGxlYWd1ZVNlcnZpY2UsICRzdGF0ZVBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxlYWd1ZVNlcnZpY2UuZ2V0TGVhZ3VlKCRzdGF0ZVBhcmFtcy5zZWFzb25JZCwgJHN0YXRlUGFyYW1zLmxlYWd1ZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhdGUoJ2FwcC5sZWFndWUuZGV0YWlsLmVkaXQnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2VkaXQnLFxuICAgICAgICAgICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgICAgICAgICAgIGxlYWd1ZURldGFpbENvbnRlbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9sZWFndWUvbGVhZ3VlLmVkaXQudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0VkaXRMZWFndWVDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwLmxlYWd1ZS5kZXRhaWwuam9pbicsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvam9pbicsXG4gICAgICAgICAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICAgICAgICAgICAgbGVhZ3VlRGV0YWlsQ29udGVudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL2xlYWd1ZS9sZWFndWUuam9pbi50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnSm9pbkxlYWd1ZUNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgICB9KTtcbiIsIlxucmVxdWlyZShcIi4vVGVzdEFzcGVjdFwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5hc3BlY3RzJywgW10pXG4gICAgLmNvbmZpZyggZnVuY3Rpb24oKSB7XG5cbiAgICAgICAvL1RPRE8gYXNwZWN0IGNvbmZpZyBpZiBuZWNlc3NhcnlcbiAgICB9XG4pOyIsIi8qKlxuICogRGVmaW5lIHRoZSBhcHBsaWNhdGlvbiBtb2RlbHNcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5tb2RlbHMnLCBbXSlcbiAgICAvL21vZGVsc1xuICAgIC5zZXJ2aWNlKCd1c2VyTW9kZWwnLCByZXF1aXJlKCcuL1VzZXJNb2RlbCcpKVxuICAgIC5zZXJ2aWNlKCdsZWFndWVNb2RlbCcsIHJlcXVpcmUoJy4vTGVhZ3VlTW9kZWwnKSlcbiAgICAuc2VydmljZSgnbWVzc2FnZU1vZGVsJywgcmVxdWlyZSgnLi9NZXNzYWdlTW9kZWwnKSlcbjsiLCIvKipcbiAqIERlZmluZSB0aGUgcmVtb3RlIHNlcnZpY2VzXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAuYXBpJywgW10pXG4gICAgICAuY29uc3RhbnQoJ2FwaUNvbmZpZycsIHJlcXVpcmUoJy4vQXBpQ29uZmlnJykpXG4gICAgICAuc2VydmljZSgndXNlclNlcnZpY2UnLCByZXF1aXJlKCcuL1VzZXJTZXJ2aWNlJykpXG4gICAgICAuc2VydmljZSgnbGVhZ3VlU2VydmljZScsIHJlcXVpcmUoJy4vTGVhZ3VlU2VydmljZScpKVxuICAgICAgLnNlcnZpY2UoJ3NlYXNvblNlcnZpY2UnLCByZXF1aXJlKCcuL1NlYXNvblNlcnZpY2UnKSlcbiAgICAgIC5zZXJ2aWNlKCd3ZWVrU2VydmljZScsIHJlcXVpcmUoJy4vV2Vla1NlcnZpY2UnKSlcbjtcbiIsIlxuLy8gc2Vzc2lvbiBjb21tYW5kc1xucmVxdWlyZSgnLi9zZXNzaW9uL0xvZ2luQ29tbWFuZCcpO1xucmVxdWlyZSgnLi9zZXNzaW9uL0xvZ291dENvbW1hbmQnKTtcblxuLy8gdXNlciBjb21tYW5kc1xucmVxdWlyZSgnLi91c2VyL0dldEN1cnJlbnRVc2VyQ29tbWFuZCcpO1xucmVxdWlyZSgnLi91c2VyL0NyZWF0ZVVzZXJDb21tYW5kJyk7XG5yZXF1aXJlKCcuL3VzZXIvVXBkYXRlVXNlckNvbW1hbmQnKTtcblxuLy8gbGVhZ3VlIGNvbW1hbmRzXG5yZXF1aXJlKCcuL2xlYWd1ZS9DcmVhdGVMZWFndWVDb21tYW5kJyk7XG5yZXF1aXJlKCcuL2xlYWd1ZS9VcGRhdGVMZWFndWVDb21tYW5kJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5jb21tYW5kQ29uZmlnJywgW10pXG4gICAgLmNvbmZpZyhmdW5jdGlvbigkY29tbWFuZ3VsYXJQcm92aWRlcikge1xuXG4gICAgICAgIC8vIHNlc3Npb24gZXZlbnRzXG4gICAgICAgICRjb21tYW5ndWxhclByb3ZpZGVyLm1hcFRvKCdMb2dpbkV2ZW50JykuYXNTZXF1ZW5jZSgpXG4gICAgICAgICAgICAuYWRkKCdMb2dpbkNvbW1hbmQnKTtcbiAgICAgICAgJGNvbW1hbmd1bGFyUHJvdmlkZXIubWFwVG8oJ0xvZ291dEV2ZW50JykuYXNTZXF1ZW5jZSgpXG4gICAgICAgICAgICAuYWRkKCdMb2dvdXRDb21tYW5kJyk7XG5cbiAgICAgICAgLy8gdXNlciBldmVudHNcbiAgICAgICAgJGNvbW1hbmd1bGFyUHJvdmlkZXIubWFwVG8oJ0dldEN1cnJlbnRVc2VyRXZlbnQnKS5hc1NlcXVlbmNlKClcbiAgICAgICAgICAgIC5hZGQoJ0dldEN1cnJlbnRVc2VyQ29tbWFuZCcpO1xuICAgICAgICAkY29tbWFuZ3VsYXJQcm92aWRlci5tYXBUbygnQ3JlYXRlVXNlckV2ZW50JykuYXNTZXF1ZW5jZSgpXG4gICAgICAgICAgICAuYWRkKCdDcmVhdGVVc2VyQ29tbWFuZCcpO1xuICAgICAgICAkY29tbWFuZ3VsYXJQcm92aWRlci5tYXBUbygnVXBkYXRlVXNlckV2ZW50JykuYXNTZXF1ZW5jZSgpXG4gICAgICAgICAgICAuYWRkKCdVcGRhdGVVc2VyQ29tbWFuZCcpO1xuXG4gICAgICAgIC8vIGxlYWd1ZSBldmVudHNcbiAgICAgICAgJGNvbW1hbmd1bGFyUHJvdmlkZXIubWFwVG8oJ0NyZWF0ZUxlYWd1ZUV2ZW50JykuYXNTZXF1ZW5jZSgpXG4gICAgICAgICAgICAuYWRkKCdDcmVhdGVMZWFndWVDb21tYW5kJyk7XG4gICAgICAgICRjb21tYW5ndWxhclByb3ZpZGVyLm1hcFRvKCdVcGRhdGVMZWFndWVFdmVudCcpLmFzU2VxdWVuY2UoKVxuICAgICAgICAgICAgLmFkZCgnVXBkYXRlTGVhZ3VlQ29tbWFuZCcpO1xuXG4gICAgfVxuKTtcblxuIiwiLyoqXG4gKiBEZWZpbmUgdGhlIGFwcGxpY2F0aW9uIGZpbHRlcnNcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5maWx0ZXJzJywgW10pXG4gICAgLy9tb2RlbHNcbiAgICAuZmlsdGVyKCd0aW1lRmlsdGVyJywgcmVxdWlyZSgnLi9UaW1lRmlsdGVyJykpXG47XG4iLCJcbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2xvZ2hBcHAucHVibGljLmhvbWUnLCBbXSlcbiAgICAuY29udHJvbGxlcignSG9tZUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL0hvbWVDb250cm9sbGVyJykpXG4gICAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ3B1YmxpYy5ob21lJywge1xuICAgICAgICAgICAgICAgIHVybDogJ2hvbWUnLFxuICAgICAgICAgICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9oZWFkZXIvaGVhZGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdIZWFkZXJDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi9tb2R1bGVzL21lc3NhZ2UvbWVzc2FnZS50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTWVzc2FnZUNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wdWJsaWMvaG9tZS9ob21lLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdIb21lQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbW1vbi90ZW1wbGF0ZXMvZm9vdGVyLnRwbC5odG1sJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgICAgICAgICAgIHNlYXNvbjogZnVuY3Rpb24oc2Vhc29uU2VydmljZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlYXNvblNlcnZpY2UuZ2V0Q3VycmVudFNlYXNvbigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICAgIH0pOyIsIlxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5wdWJsaWMucmVnaXN0ZXInLCBbXSlcbiAgICAuY29udHJvbGxlcignUmVnaXN0ZXJDb250cm9sbGVyJywgcmVxdWlyZSgnLi9SZWdpc3RlckNvbnRyb2xsZXInKSlcbiAgICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgncHVibGljLnJlZ2lzdGVyJywge1xuICAgICAgICAgICAgICAgIHVybDogJ3JlZ2lzdGVyJyxcbiAgICAgICAgICAgICAgICB2aWV3czoge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL21vZHVsZXMvaGVhZGVyL2hlYWRlci50cGwuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnSGVhZGVyQ29udHJvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vbW9kdWxlcy9tZXNzYWdlL21lc3NhZ2UudHBsLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ01lc3NhZ2VDb250cm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvcHVibGljL3JlZ2lzdGVyL3JlZ2lzdGVyLnRwbC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdSZWdpc3RlckNvbnRyb2xsZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21tb24vdGVtcGxhdGVzL2Zvb3Rlci50cGwuaHRtbCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gICAgfSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doQXBwLmhlYWRlcicsIFtdKVxuICAgIC5jb250cm9sbGVyKCdIZWFkZXJDb250cm9sbGVyJywgcmVxdWlyZSgnLi9IZWFkZXJDb250cm9sbGVyJykpIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5tZXNzYWdlJywgW10pXG4gICAgLmNvbnRyb2xsZXIoJ01lc3NhZ2VDb250cm9sbGVyJywgcmVxdWlyZSgnLi9NZXNzYWdlQ29udHJvbGxlcicpKTsiLCIvKipcbiAqIERlZmluZSB0aGUgYXBwbGljYXRpb24gc2VydmljZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdsb2doLmFwcGxpY2F0aW9uJywgW10pXG4gICAgLnNlcnZpY2UoJ2FwcGxpY2F0aW9uU2VydmljZScsIHJlcXVpcmUoJy4vQXBwbGljYXRpb25TZXJ2aWNlJykpOyIsIi8vYXBwbGljYXRpb24gZGlyZWN0aXZlc1xubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5kaXJlY3RpdmVzLmZvY3VzJyxbXSlcbiAgICAuZGlyZWN0aXZlKCdmb2N1cycsIHJlcXVpcmUoJy4vRm9jdXNEaXJlY3RpdmUnKSlcbjtcbiIsIi8vYXBwbGljYXRpb24gZGlyZWN0aXZlc1xubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5kaXJlY3RpdmVzLm1hdGNoJyxbXSlcbiAgICAuZGlyZWN0aXZlKCdtYXRjaCcsIHJlcXVpcmUoJy4vTWF0Y2hEaXJlY3RpdmUnKSlcbjtcbiIsIi8vYXBwbGljYXRpb24gZGlyZWN0aXZlc1xubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnbG9naEFwcC5kaXJlY3RpdmVzLnJlcXVpcmVkUGF0dGVybicsW10pXG4gICAgLmRpcmVjdGl2ZSgncnBhdHRlcm4nLCByZXF1aXJlKCcuL1JlcXVpcmVkUGF0dGVybkRpcmVjdGl2ZScpKVxuO1xuIiwiXG52YXIgVXNlckNvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsIHVzZXJNb2RlbCkge1xuXG4gICAgJHNjb3BlLnVzZXJEYXRhID0gYW5ndWxhci5jb3B5KHVzZXJNb2RlbCk7XG5cbiAgICAkc2NvcGUudXBkYXRlID0gZnVuY3Rpb24odXNlcikge1xuICAgICAgICAkc2NvcGUuZGlzcGF0Y2goJ1VwZGF0ZVVzZXJFdmVudCcsIHsgdXNlclBhcmFtczogdXNlciB9KTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmhhc0Vycm9yID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gICAgfTtcblxuICAgICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRlcnJvcltwcm9wZXJ0eV07XG4gICAgfTtcblxuICAgICRzY29wZS4kb24oJ3VzZXJNb2RlbDo6dXNlclVwZGF0ZWQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAkc2NvcGUudXNlckRhdGEgPSBhbmd1bGFyLmNvcHkodXNlck1vZGVsKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInVzZXIgY29udHJvbGxlclwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcblxufTtcblxuVXNlckNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJ3VzZXJNb2RlbCddO1xubW9kdWxlLmV4cG9ydHMgPSBVc2VyQ29udHJvbGxlcjtcbiIsIlxudmFyIExlYWd1ZXNDb250cm9sbGVyID0gZnVuY3Rpb24oJHNjb3BlLCAkbG9nKSB7XG5cbiAgICAkc2NvcGUuZm9vID0gJ2Jhcic7XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5sb2coXCJsZWFndWVzIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cbkxlYWd1ZXNDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IExlYWd1ZXNDb250cm9sbGVyO1xuXG4iLCJcbnZhciBMZWFndWVDb250cm9sbGVyID0gZnVuY3Rpb24oJHNjb3BlLCAkbG9nLCBsZWFndWVNb2RlbCwgd2Vla3MpIHtcblxuICAgICRzY29wZS5sZWFndWVEYXRhID0gYW5ndWxhci5jb3B5KGxlYWd1ZU1vZGVsKTtcblxuICAgICRzY29wZS53ZWVrcyA9IHdlZWtzLmRhdGE7XG5cbiAgICAkc2NvcGUuaGFzRXJyb3IgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICByZXR1cm4gIWlucHV0LiRmb2N1c2VkICYmIGlucHV0LiRkaXJ0eSAmJiBpbnB1dC4kaW52YWxpZDtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmhhc1Byb3BlcnR5RXJyb3IgPSBmdW5jdGlvbihpbnB1dCwgcHJvcGVydHkpIHtcbiAgICAgICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGVycm9yW3Byb3BlcnR5XTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLiRvbignbGVhZ3VlTW9kZWw6OmxlYWd1ZVVwZGF0ZWQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAkc2NvcGUubGVhZ3VlRGF0YSA9IGFuZ3VsYXIuY29weShsZWFndWVNb2RlbCk7XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5sb2coXCJsZWFndWUgY29udHJvbGxlclwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcblxufTtcblxuTGVhZ3VlQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZycsICdsZWFndWVNb2RlbCcsICd3ZWVrcyddO1xubW9kdWxlLmV4cG9ydHMgPSBMZWFndWVDb250cm9sbGVyO1xuIiwiXG52YXIgQ3JlYXRlTGVhZ3VlQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJGxvZywgJHN0YXRlUGFyYW1zKSB7XG5cbiAgICAkc2NvcGUubmV3TGVhZ3VlRGF0YSA9IHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIHNlYXNvbl9pZDogJHN0YXRlUGFyYW1zLnNlYXNvbklkLFxuICAgICAgICBzdGFydF93ZWVrX2lkOiAkc2NvcGUud2Vla3NbMF0uaWQsXG4gICAgICAgIHB1YmxpYzogdHJ1ZSxcbiAgICAgICAgbWF4X3RlYW1zX3Blcl91c2VyOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICBwYXNzd29yZF9jb25maXJtYXRpb246ICcnXG4gICAgfTtcblxuICAgICRzY29wZS5jcmVhdGVMZWFndWUgPSBmdW5jdGlvbihsZWFndWUpIHtcbiAgICAgICAgJHNjb3BlLmRpc3BhdGNoKCdDcmVhdGVMZWFndWVFdmVudCcsIHsgbGVhZ3VlUGFyYW1zOiBsZWFndWUgfSk7XG4gICAgfTtcblxuICAgICRzY29wZS5pc1Bhc3N3b3JkSGlkZGVuID0gdHJ1ZTtcblxuICAgICRzY29wZS5oaWRlUGFzc3dvcmRGaWVsZHMgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAkc2NvcGUuaXNQYXNzd29yZEhpZGRlbiA9IHZhbHVlO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICRzY29wZS5uZXdMZWFndWVEYXRhLnBhc3N3b3JkID0gJyc7XG4gICAgICAgICAgICAkc2NvcGUubmV3TGVhZ3VlRGF0YS5wYXNzd29yZF9jb25maXJtYXRpb24gPSAnJztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5sb2coXCJjcmVhdGUgbGVhZ3VlIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cbkNyZWF0ZUxlYWd1ZUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnLCAnJHN0YXRlUGFyYW1zJ107XG5tb2R1bGUuZXhwb3J0cyA9IENyZWF0ZUxlYWd1ZUNvbnRyb2xsZXI7XG4iLCJcbnZhciBFZGl0TGVhZ3VlQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJGxvZykge1xuXG4gICAgJHNjb3BlLmlzUGFzc3dvcmRIaWRkZW4gPSAkc2NvcGUubGVhZ3VlRGF0YS5sZWFndWUucHVibGljO1xuXG4gICAgJHNjb3BlLndhc1B1YmxpYyA9ICRzY29wZS5sZWFndWVEYXRhLmxlYWd1ZS5wdWJsaWM7XG5cbiAgICAkc2NvcGUudXBkYXRlTGVhZ3VlID0gZnVuY3Rpb24obGVhZ3VlKSB7XG4gICAgICAgICRzY29wZS5kaXNwYXRjaCgnVXBkYXRlTGVhZ3VlRXZlbnQnLCB7IGxlYWd1ZVBhcmFtczogbGVhZ3VlIH0pO1xuICAgIH07XG5cbiAgICAkc2NvcGUuaGlkZVBhc3N3b3JkRmllbGRzID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgJHNjb3BlLmlzUGFzc3dvcmRIaWRkZW4gPSB2YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAkc2NvcGUubGVhZ3VlRGF0YS5sZWFndWUucGFzc3dvcmQgPSAnJztcbiAgICAgICAgICAgICRzY29wZS5sZWFndWVEYXRhLmxlYWd1ZS5wYXNzd29yZF9jb25maXJtYXRpb24gPSAnJztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAkc2NvcGUuY2hhbmdlZFRvUHJpdmF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gJHNjb3BlLndhc1B1YmxpYyAmJiAkc2NvcGUubGVhZ3VlRGF0YS5sZWFndWUucHVibGljID09IGZhbHNlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvZy5sb2coXCJlZGl0IGxlYWd1ZSBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5FZGl0TGVhZ3VlQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBFZGl0TGVhZ3VlQ29udHJvbGxlcjtcbiIsIlxudmFyIEpvaW5MZWFndWVDb250cm9sbGVyID0gZnVuY3Rpb24oJHNjb3BlLCAkbG9nKSB7XG5cbiAgICAkc2NvcGUuam9pbkxlYWd1ZSA9IGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAgICAgJHNjb3BlLmRpc3BhdGNoKCdDcmVhdGVUZWFtRXZlbnQnLCB7fSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9nLmxvZyhcImpvaW4gbGVhZ3VlIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cbkpvaW5MZWFndWVDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IEpvaW5MZWFndWVDb250cm9sbGVyO1xuIiwiXG5jb21tYW5ndWxhci5ldmVudEFzcGVjdCgnQEJlZm9yZSgvLiovKScsIGZ1bmN0aW9uKHByb2Nlc3NvciwgJGxvZykge1xuXG4gICAgcmV0dXJuIHtcblxuICAgICAgICBleGVjdXRlIDogZnVuY3Rpb24gKCkge1xuXG4vLyAgICAgICAgICAgIGlmIChDdXJyZW50VG9kby50b2RvLmxlbmd0aCA9PT0gMCkge1xuLy8gICAgICAgICAgICAgICAgcHJvY2Vzc29yLmNhbmNlbCgnRW1wdHkgdG9kbycpO1xuLy8gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyRsb2cubG9nKCdUZXN0IEFzcGVjdCcpO1xuXG4gICAgICAgIH1cbiAgICB9XG59KTsiLCJcbnZhciBVc2VyTW9kZWwgPSBmdW5jdGlvbigkcm9vdFNjb3BlLCAkd2luZG93LCAkbG9nKSB7XG5cbiAgICB2YXIgdXNlciA9IHt9O1xuICAgIHVzZXIubG9hZGVkID0gZmFsc2U7XG4gICAgdXNlci5pZCA9ICcnO1xuICAgIHVzZXIuZW1haWwgPSAnJztcbiAgICB1c2VyLmZpcnN0X25hbWUgPSAnJztcbiAgICB1c2VyLmxhc3RfbmFtZSA9ICcnO1xuICAgIHVzZXIuYWRtaW4gPSBmYWxzZTtcblxuICAgIHRoaXMudXNlciA9IHVzZXI7XG5cbiAgICB0aGlzLnNldFVzZXIgPSBmdW5jdGlvbih1c2VyRGF0YSkge1xuICAgICAgICB1c2VyLmxvYWRlZCA9IHRydWU7XG4gICAgICAgIHVzZXIgPSBhbmd1bGFyLmV4dGVuZCh1c2VyLCB1c2VyRGF0YSk7XG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgndXNlck1vZGVsOjp1c2VyVXBkYXRlZCcsIHVzZXIpO1xuICAgICAgICAkbG9nLmxvZyhcIlVzZXJNb2RlbDogc2V0VXNlcjogXCIgKyB1c2VyLmVtYWlsKTtcbiAgICB9O1xuXG4gICAgdGhpcy5yZXNldFVzZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xuXG4gICAgICAgIHVzZXIgPSB7fTtcbiAgICAgICAgdXNlci5sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgdXNlci5pZCA9ICcnO1xuICAgICAgICB1c2VyLmVtYWlsID0gJyc7XG4gICAgICAgIHVzZXIuZmlyc3RfbmFtZSA9ICcnO1xuICAgICAgICB1c2VyLmxhc3RfbmFtZSA9ICcnO1xuICAgICAgICB1c2VyLmFkbWluID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRpbmcgdXNlciBtb2RlbC4uLlwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcblxufTtcblxuVXNlck1vZGVsLiRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJHdpbmRvdycsICckbG9nJ107XG5tb2R1bGUuZXhwb3J0cyA9IFVzZXJNb2RlbDsiLCJcbnZhciBMZWFndWVNb2RlbCA9IGZ1bmN0aW9uKCRyb290U2NvcGUsICR3aW5kb3csICRsb2cpIHtcblxuICAgIHZhciBsZWFndWUgPSB7fTtcbiAgICBsZWFndWUubG9hZGVkID0gZmFsc2U7XG4gICAgbGVhZ3VlLmlkID0gMDtcbiAgICBsZWFndWUubmFtZSA9ICcnO1xuICAgIGxlYWd1ZS5wdWJsaWMgPSB0cnVlO1xuICAgIGxlYWd1ZS5zZWFzb25faWQgPSAwO1xuICAgIGxlYWd1ZS5zdGFydF93ZWVrX2lkID0gMDtcbiAgICBsZWFndWUubWF4X3RlYW1zX3Blcl91c2VyID0gMDtcblxuICAgIHRoaXMubGVhZ3VlID0gbGVhZ3VlO1xuXG4gICAgdGhpcy5zZXRMZWFndWUgPSBmdW5jdGlvbihsZWFndWVEYXRhKSB7XG4gICAgICAgIGxlYWd1ZS5sb2FkZWQgPSB0cnVlO1xuICAgICAgICBsZWFndWUgPSBhbmd1bGFyLmV4dGVuZChsZWFndWUsIGxlYWd1ZURhdGEpO1xuICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2xlYWd1ZU1vZGVsOjpsZWFndWVVcGRhdGVkJywgbGVhZ3VlKTtcbiAgICAgICAgJGxvZy5sb2coXCJMZWFndWVNb2RlbDogc2V0TGVhZ3VlOiBcIiArIGxlYWd1ZS5uYW1lKTtcbiAgICB9O1xuXG4gICAgdGhpcy5yZXNldExlYWd1ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZWFndWUgPSB7fTtcbiAgICAgICAgbGVhZ3VlLmxvYWRlZCA9IGZhbHNlO1xuICAgICAgICBsZWFndWUuaWQgPSAwO1xuICAgICAgICBsZWFndWUubmFtZSA9ICcnO1xuICAgICAgICBsZWFndWUucHVibGljID0gdHJ1ZTtcbiAgICAgICAgbGVhZ3VlLnNlYXNvbl9pZCA9IDA7XG4gICAgICAgIGxlYWd1ZS5zdGFydF93ZWVrX2lkID0gMDtcbiAgICAgICAgbGVhZ3VlLm1heF90ZWFtc19wZXJfdXNlciA9IDA7XG5cbiAgICAgICAgdGhpcy5sZWFndWUgPSBsZWFndWU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0aW5nIGxlYWd1ZSBtb2RlbC4uLlwiKTtcbiAgICB9O1xuICAgIGluaXQoKTtcblxufTtcblxuTGVhZ3VlTW9kZWwuJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckd2luZG93JywgJyRsb2cnXTtcbm1vZHVsZS5leHBvcnRzID0gTGVhZ3VlTW9kZWw7IiwiLypcbiAqICBHbG9iYWwgY29uZmlnIGZvciByZW1vdGUgc2VydmljZXNcbiAqL1xuXG52YXIgQXBpQ29uZmlnID0gIHtcbiAgICBiYXNlVVJMOiAnL2FwaS8nXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwaUNvbmZpZztcbiIsIlxudmFyIE1lc3NhZ2VNb2RlbCA9IGZ1bmN0aW9uKCRsb2cpIHtcblxuICAgIHZhciBtZXNzYWdlID0ge307XG4gICAgbWVzc2FnZS5sb2FkZWQgPSBmYWxzZTtcbiAgICBtZXNzYWdlLnR5cGUgPSAnJzsgLy8gY2FuIGJlIHN1Y2Nlc3MsIGluZm8sIHdhcm5pbmcgb3IgZGFuZ2VyXG4gICAgbWVzc2FnZS5jb250ZW50ID0gJyc7XG5cbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuXG4gICAgdGhpcy5zZXRNZXNzYWdlID0gZnVuY3Rpb24obWVzc2FnZURhdGEpIHtcbiAgICAgICAgbWVzc2FnZS5sb2FkZWQgPSB0cnVlO1xuICAgICAgICBtZXNzYWdlID0gYW5ndWxhci5leHRlbmQobWVzc2FnZSwgbWVzc2FnZURhdGEpO1xuICAgICAgICAkbG9nLmxvZyhcIk1lc3NhZ2VNb2RlbDogY29udGVudDogXCIgKyBtZXNzYWdlLmNvbnRlbnQpO1xuICAgIH07XG5cbiAgICB0aGlzLnJlc2V0TWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBtZXNzYWdlID0ge307XG4gICAgICAgIG1lc3NhZ2UubG9hZGVkID0gZmFsc2U7XG4gICAgICAgIG1lc3NhZ2UudHlwZSA9ICcnO1xuICAgICAgICBtZXNzYWdlLmNvbnRlbnQgPSAnJztcblxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIHN0YXJ0dXAsIGxpa2UgYSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGluZyBtZXNzYWdlIG1vZGVsLi4uXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xuXG59O1xuXG5NZXNzYWdlTW9kZWwuJGluamVjdCA9IFsnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBNZXNzYWdlTW9kZWw7XG4iLCJ2YXIgVXNlclNlcnZpY2UgPSBmdW5jdGlvbigkaHR0cCwgJGxvZywgJHdpbmRvdywgYXBpQ29uZmlnLCBtZXNzYWdlTW9kZWwsIHVzZXJNb2RlbCkge1xuXG4gICAgdGhpcy5sb2dpbiA9IGZ1bmN0aW9uKGVtYWlsLCBwYXNzd29yZCkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLnBvc3QoXG4gICAgICAgICAgICBhcGlDb25maWcuYmFzZVVSTCArIFwic2Vzc2lvbnNcIixcbiAgICAgICAgICAgIHsgZW1haWw6IGVtYWlsLCBwYXNzd29yZDogcGFzc3dvcmQgfSlcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmxvZyhcIlVzZXJTZXJ2aWNlOiBsb2dpbiBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHVzZXJNb2RlbC5zZXRVc2VyKGRhdGEucGF5bG9hZC51c2VyKTtcbiAgICAgICAgICAgICAgICAkd2luZG93LnNlc3Npb25TdG9yYWdlLnRva2VuID0gZGF0YS5wYXlsb2FkLnRva2VuO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5sb2coXCJVc2VyU2VydmljZTogbG9naW4gZmFpbHVyZVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLmxvZ291dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmRlbGV0ZShcbiAgICAgICAgICAgIGFwaUNvbmZpZy5iYXNlVVJMICsgJ3Nlc3Npb25zL2Rlc3Ryb3knKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgJGxvZy5sb2coXCJVc2VyU2VydmljZTogbG9nb3V0IHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmxvZyhcIlVzZXJTZXJ2aWNlOiBsb2dvdXQgZmFpbHVyZVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuXG4gICAgfTtcblxuICAgIHRoaXMuZ2V0Q3VycmVudFVzZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5nZXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInVzZXJzL2N1cnJlbnRcIilcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmxvZyhcIlVzZXJTZXJ2aWNlOiBnZXRDdXJyZW50VXNlciBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHVzZXJNb2RlbC5zZXRVc2VyKGRhdGEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5sb2coXCJVc2VyU2VydmljZTogZ2V0Q3VycmVudFVzZXIgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuY3JlYXRlVXNlciA9IGZ1bmN0aW9uKHVzZXJQYXJhbXMpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5wb3N0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJ1c2Vyc1wiLFxuICAgICAgICAgICAgeyB1c2VyOiB1c2VyUGFyYW1zIH0pXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5sb2coXCJVc2VyU2VydmljZTogY3JlYXRlVXNlciBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHVzZXJNb2RlbC5zZXRVc2VyKGRhdGEucGF5bG9hZC51c2VyKTtcbiAgICAgICAgICAgICAgICAkd2luZG93LnNlc3Npb25TdG9yYWdlLnRva2VuID0gZGF0YS5wYXlsb2FkLnRva2VuO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmxvZyhcIlVzZXJTZXJ2aWNlOiBjcmVhdGVVc2VyIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB0aGlzLnVwZGF0ZVVzZXIgPSBmdW5jdGlvbih1c2VyUGFyYW1zKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAucHV0KGFwaUNvbmZpZy5iYXNlVVJMICsgXCJ1c2Vycy9jdXJyZW50XCIsXG4gICAgICAgICAgICB7IHVzZXI6IHVzZXJQYXJhbXMgfSlcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmxvZyhcIlVzZXJTZXJ2aWNlOiB1cGRhdGVVc2VyIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgdXNlck1vZGVsLnNldFVzZXIodXNlclBhcmFtcyk7XG4gICAgICAgICAgICAgICAgbWVzc2FnZU1vZGVsLnNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cubG9nKFwiVXNlclNlcnZpY2U6IHVwZGF0ZVVzZXIgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxufTtcblxuVXNlclNlcnZpY2UuJGluamVjdCA9IFsnJGh0dHAnLCAnJGxvZycsICckd2luZG93JywgJ2FwaUNvbmZpZycsICdtZXNzYWdlTW9kZWwnLCAndXNlck1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IFVzZXJTZXJ2aWNlOyIsInZhciBMZWFndWVTZXJ2aWNlID0gZnVuY3Rpb24oJGh0dHAsICRsb2csICRsb2NhdGlvbiwgYXBpQ29uZmlnLCBsZWFndWVNb2RlbCwgbWVzc2FnZU1vZGVsKSB7XG5cbiAgICB0aGlzLmdldExlYWd1ZSA9IGZ1bmN0aW9uKHNlYXNvbklkLCBsZWFndWVJZCkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlDb25maWcuYmFzZVVSTCArIFwic2Vhc29ucy9cIiArIHNlYXNvbklkICsgXCIvbGVhZ3Vlcy9cIiArIGxlYWd1ZUlkKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cubG9nKFwiTGVhZ3VlU2VydmljZTogZ2V0TGVhZ3VlIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgbGVhZ3VlTW9kZWwuc2V0TGVhZ3VlKGRhdGEucGF5bG9hZC5sZWFndWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5sb2coXCJMZWFndWVTZXJ2aWNlOiBnZXRMZWFndWUgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMuY3JlYXRlTGVhZ3VlID0gZnVuY3Rpb24obGVhZ3VlUGFyYW1zKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAucG9zdChhcGlDb25maWcuYmFzZVVSTCArIFwic2Vhc29ucy9cIiArIGxlYWd1ZVBhcmFtcy5zZWFzb25faWQgKyBcIi9sZWFndWVzXCIsXG4gICAgICAgICAgICB7IGxlYWd1ZTogbGVhZ3VlUGFyYW1zIH0pXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5sb2coXCJMZWFndWVTZXJ2aWNlOiBjcmVhdGVMZWFndWUgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICAvLyB0b2RvOiBjaGFuZ2UgdG8gdGhpcz8gJHN0YXRlLmdvKCdhcHAubGVhZ3VlLmRldGFpbCcsIHsgbGVhZ3VlSWQ6IGRhdGEucGF5bG9hZC5sZWFndWUuaWQsIHNlYXNvbklkOiBkYXRhLnBheWxvYWQubGVhZ3VlLnNlYXNvbl9pZCB9KTtcbiAgICAgICAgICAgICAgICAkbG9jYXRpb24ucGF0aCgnL3NlYXNvbi8nICsgbGVhZ3VlUGFyYW1zLnNlYXNvbl9pZCArICcvbGVhZ3VlLycgKyBkYXRhLnBheWxvYWQubGVhZ3VlX2lkICsgJy9lZGl0JyApO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmxvZyhcIkxlYWd1ZVNlcnZpY2U6IGNyZWF0ZUxlYWd1ZSBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVMZWFndWUgPSBmdW5jdGlvbihsZWFndWVQYXJhbXMpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSAkaHR0cC5wdXQoYXBpQ29uZmlnLmJhc2VVUkwgKyBcInNlYXNvbnMvXCIgKyBsZWFndWVQYXJhbXMuc2Vhc29uX2lkICsgXCIvbGVhZ3Vlcy9cIiArIGxlYWd1ZVBhcmFtcy5pZCxcbiAgICAgICAgICAgIHsgbGVhZ3VlOiBsZWFndWVQYXJhbXMgfSlcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmxvZyhcIkxlYWd1ZVNlcnZpY2U6IHVwZGF0ZUxlYWd1ZSBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIGxlYWd1ZU1vZGVsLnNldExlYWd1ZShsZWFndWVQYXJhbXMpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VNb2RlbC5zZXRNZXNzYWdlKGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmxvZyhcIkxlYWd1ZVNlcnZpY2U6IHVwZGF0ZUxlYWd1ZSBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG59O1xuXG5MZWFndWVTZXJ2aWNlLiRpbmplY3QgPSBbJyRodHRwJywgJyRsb2cnLCAnJGxvY2F0aW9uJywgJ2FwaUNvbmZpZycsICdsZWFndWVNb2RlbCcsICdtZXNzYWdlTW9kZWwnXTtcbm1vZHVsZS5leHBvcnRzID0gTGVhZ3VlU2VydmljZTsiLCJ2YXIgU2Vhc29uU2VydmljZSA9IGZ1bmN0aW9uKCRodHRwLCAkbG9nLCBhcGlDb25maWcpIHtcblxuICAgIHRoaXMuZ2V0Q3VycmVudFNlYXNvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlDb25maWcuYmFzZVVSTCArIFwic2Vhc29ucy9jdXJyZW50XCIpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5sb2coXCJTZWFzb25TZXJ2aWNlOiBnZXRDdXJyZW50U2Vhc29uIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmxvZyhcIlNlYXNvblNlcnZpY2U6IGdldEN1cnJlbnRTZWFzb24gZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxufTtcblxuU2Vhc29uU2VydmljZS4kaW5qZWN0ID0gWyckaHR0cCcsICckbG9nJywgJ2FwaUNvbmZpZyddO1xubW9kdWxlLmV4cG9ydHMgPSBTZWFzb25TZXJ2aWNlOyIsInZhciBXZWVrU2VydmljZSA9IGZ1bmN0aW9uKCRodHRwLCAkbG9nLCBhcGlDb25maWcpIHtcblxuICAgIHRoaXMuZ2V0QXZhaWxhYmxlV2Vla3MgPSBmdW5jdGlvbihzZWFzb25JZCkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldChhcGlDb25maWcuYmFzZVVSTCArIFwic2Vhc29ucy9cIiArIHNlYXNvbklkICsgXCIvd2Vla3MvYXZhaWxhYmxlXCIpXG4gICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5sb2coXCJXZWVrU2VydmljZTogZ2V0QXZhaWxhYmxlV2Vla3Mgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICRsb2cubG9nKFwiV2Vla1NlcnZpY2U6IGdldEF2YWlsYWJsZVdlZWtzIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbn07XG5cbldlZWtTZXJ2aWNlLiRpbmplY3QgPSBbJyRodHRwJywgJyRsb2cnLCAnYXBpQ29uZmlnJ107XG5tb2R1bGUuZXhwb3J0cyA9IFdlZWtTZXJ2aWNlO1xuIiwiXG5jb21tYW5ndWxhci5jcmVhdGUoJ0xvZ2luQ29tbWFuZCcsXG4gICAgZnVuY3Rpb24oJGxvZywgdXNlclNlcnZpY2UsIHVzZXJNb2RlbCkge1xuXG4gICAgcmV0dXJuIHtcblxuICAgICAgICBleGVjdXRlOiBmdW5jdGlvbihlbWFpbCwgcGFzc3dvcmQpIHtcbiAgICAgICAgICAgICRsb2cubG9nKCdMb2dpbkNvbW1hbmQ6IGF1dGhlbnRpY2F0aW5nIHVzZXIuLi4nKTtcbiAgICAgICAgICAgIHJldHVybiB1c2VyU2VydmljZS5sb2dpbihlbWFpbCwgcGFzc3dvcmQpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgJGxvZy5sb2coXCJMb2dpbkNvbW1hbmQ6IGZhaWx1cmU6IFwiICsgZXJyb3IuZGF0YSk7XG4gICAgICAgICAgICB1c2VyTW9kZWwucmVzZXRVc2VyKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmVzdWx0OiBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICRsb2cubG9nKFwiTG9naW5Db21tYW5kOiBzdWNjZXNzIFwiKTtcbiAgICAgICAgfVxuXG4gICAgfVxufSk7XG5cblxuIiwiXG5jb21tYW5ndWxhci5jcmVhdGUoJ0xvZ291dENvbW1hbmQnLFxuICAgIGZ1bmN0aW9uKCRsb2csIHVzZXJTZXJ2aWNlLCB1c2VyTW9kZWwpIHtcblxuICAgICAgICByZXR1cm4ge1xuXG4gICAgICAgICAgICBleGVjdXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmxvZygnTG9nb3V0Q29tbWFuZDogbG9nZ2luZyBvdXQgdXNlci4uLicpO1xuICAgICAgICAgICAgICAgIHJldHVybiB1c2VyU2VydmljZS5sb2dvdXQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICAgICRsb2cubG9nKFwiTG9nb3V0Q29tbWFuZDogZmFpbHVyZTogXCIgKyBlcnJvci5kYXRhKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblJlc3VsdDogZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgJGxvZy5sb2coXCJMb2dvdXRDb21tYW5kOiBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHVzZXJNb2RlbC5yZXNldFVzZXIoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfSk7XG5cblxuIiwiXG5jb21tYW5ndWxhci5jcmVhdGUoJ0dldEN1cnJlbnRVc2VyQ29tbWFuZCcsXG4gICBmdW5jdGlvbigkbG9nLCB1c2VyU2VydmljZSwgdXNlck1vZGVsKSB7XG5cbiAgICByZXR1cm4ge1xuXG4gICAgICAgIGV4ZWN1dGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJGxvZy5sb2coJ0dldEN1cnJlbnRVc2VyQ29tbWFuZDogZ2V0dGluZyBjdXJyZW50IHVzZXIgZGV0YWlscy4uLicpO1xuICAgICAgICAgICAgdmFyIHVzZXJQcm9taXNlID0gdXNlclNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoKTtcbiAgICAgICAgICAgIHJldHVybiB1c2VyUHJvbWlzZTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICRsb2cubG9nKFwiR2V0Q3VycmVudFVzZXJDb21tYW5kOiBmYWlsdXJlOiBcIiArIGVycm9yLmRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICBvblJlc3VsdDogZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICAkbG9nLmxvZyhcIkdldEN1cnJlbnRVc2VyQ29tbWFuZDogc3VjY2Vzc1wiKTtcbiAgICAgICAgfVxuXG4gICAgfVxufSk7IiwiXG5jb21tYW5ndWxhci5jcmVhdGUoJ0NyZWF0ZVVzZXJDb21tYW5kJyxcbiAgICBmdW5jdGlvbigkbG9nLCAkc3RhdGUsIHVzZXJTZXJ2aWNlKSB7XG5cbiAgICAgICAgcmV0dXJuIHtcblxuICAgICAgICAgICAgZXhlY3V0ZTogZnVuY3Rpb24odXNlclBhcmFtcykge1xuICAgICAgICAgICAgICAgICRsb2cubG9nKCdDcmVhdGVVc2VyQ29tbWFuZDogY3JlYXRpbmcgYSBuZXcgdXNlci4uLicpO1xuICAgICAgICAgICAgICAgIHZhciB1c2VyUHJvbWlzZSA9IHVzZXJTZXJ2aWNlLmNyZWF0ZVVzZXIodXNlclBhcmFtcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXJQcm9taXNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5sb2coXCJDcmVhdGVVc2VyQ29tbWFuZDogZmFpbHVyZTogXCIgKyBlcnJvci5kYXRhKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblJlc3VsdDogZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgJGxvZy5sb2coXCJDcmVhdGVVc2VyQ29tbWFuZDogc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2FwcC51c2VyJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH0pOyIsIlxuY29tbWFuZ3VsYXIuY3JlYXRlKCdVcGRhdGVVc2VyQ29tbWFuZCcsXG4gICAgZnVuY3Rpb24oJGxvZywgdXNlclNlcnZpY2UpIHtcblxuICAgICAgICByZXR1cm4ge1xuXG4gICAgICAgICAgICBleGVjdXRlOiBmdW5jdGlvbih1c2VyUGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5sb2coJ1VwZGF0ZVVzZXJDb21tYW5kOiB1cGRhdGluZyBhIHVzZXIuLi4nKTtcbiAgICAgICAgICAgICAgICB2YXIgdXNlclByb21pc2UgPSB1c2VyU2VydmljZS51cGRhdGVVc2VyKHVzZXJQYXJhbXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiB1c2VyUHJvbWlzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICAgICRsb2cubG9nKFwiVXBkYXRlVXNlckNvbW1hbmQ6IGZhaWx1cmU6IFwiICsgZXJyb3IuZGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25SZXN1bHQ6IGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICRsb2cubG9nKFwiVXBkYXRlVXNlckNvbW1hbmQ6IHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH0pO1xuIiwiXG5jb21tYW5ndWxhci5jcmVhdGUoJ0NyZWF0ZUxlYWd1ZUNvbW1hbmQnLFxuICAgIGZ1bmN0aW9uKCRsb2csIGxlYWd1ZVNlcnZpY2UpIHtcblxuICAgICAgICByZXR1cm4ge1xuXG4gICAgICAgICAgICBleGVjdXRlOiBmdW5jdGlvbihsZWFndWVQYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmxvZygnQ3JlYXRlTGVhZ3VlQ29tbWFuZDogY3JlYXRpbmcgYSBuZXcgbGVhZ3VlLi4uJyk7XG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBsZWFndWVTZXJ2aWNlLmNyZWF0ZUxlYWd1ZShsZWFndWVQYXJhbXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5sb2coXCJDcmVhdGVMZWFndWVDb21tYW5kOiBmYWlsdXJlOiBcIiArIGVycm9yLmRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uUmVzdWx0OiBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmxvZyhcIkNyZWF0ZUxlYWd1ZUNvbW1hbmQ6IHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH0pOyIsIlxuY29tbWFuZ3VsYXIuY3JlYXRlKCdVcGRhdGVMZWFndWVDb21tYW5kJyxcbiAgICBmdW5jdGlvbigkbG9nLCBsZWFndWVTZXJ2aWNlKSB7XG5cbiAgICAgICAgcmV0dXJuIHtcblxuICAgICAgICAgICAgZXhlY3V0ZTogZnVuY3Rpb24obGVhZ3VlUGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5sb2coJ1VwZGF0ZUxlYWd1ZUNvbW1hbmQ6IHVwZGF0aW5nIGEgbGVhZ3VlLi4uJyk7XG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBsZWFndWVTZXJ2aWNlLnVwZGF0ZUxlYWd1ZShsZWFndWVQYXJhbXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5sb2coXCJVcGRhdGVMZWFndWVDb21tYW5kOiBmYWlsdXJlOiBcIiArIGVycm9yLmRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uUmVzdWx0OiBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmxvZyhcIlVwZGF0ZUxlYWd1ZUNvbW1hbmQ6IHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH0pOyIsIlxudmFyIFRpbWVGaWx0ZXIgPSBmdW5jdGlvbigkbG9nKSB7XG4gICByZXR1cm4gZnVuY3Rpb24oaW5wdXQpIHtcblxuICAgICAgIGlmIChpbnB1dCA8IDEpIHtcbiAgICAgICAgICAgcmV0dXJuIFwiMDA6MDA6MDBcIjtcbiAgICAgICB9XG5cbiAgICAgICBmdW5jdGlvbiBmb3JtYXQodmFsKSB7XG4gICAgICAgICAgIHJldHVybiAodmFsPDEwID8gJzAnIDogJycpICsgdmFsO1xuICAgICAgIH1cblxuICAgICAgIHZhciBoID0gTWF0aC5mbG9vcigoaW5wdXQgLyAxMDAwKSAvIDM2MDApO1xuICAgICAgIHZhciBtID0gTWF0aC5mbG9vcigoKGlucHV0IC8gMTAwMCkgJSAzNjAwKSAvIDYwKTtcbiAgICAgICB2YXIgcyA9IE1hdGguZmxvb3IoKGlucHV0IC8gMTAwMCkgJSA2MCk7XG4gICAgICAgcmV0dXJuIGZvcm1hdChoKSArIFwiOlwiICsgZm9ybWF0KG0pICsgXCI6XCIgKyBmb3JtYXQocyk7XG4gICB9XG5cbn07XG5cblRpbWVGaWx0ZXIuJGluamVjdCA9IFsnJGxvZyddO1xubW9kdWxlLmV4cG9ydHMgPSBUaW1lRmlsdGVyO1xuIiwiXG52YXIgSG9tZUNvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2csIHNlYXNvbikge1xuXG4gICAgJHNjb3BlLnNlYXNvbiA9IHNlYXNvbi5kYXRhO1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2cubG9nKFwibWFpbiBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xufTtcblxuSG9tZUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnLCAnc2Vhc29uJ107XG5tb2R1bGUuZXhwb3J0cyA9IEhvbWVDb250cm9sbGVyO1xuIiwiXG52YXIgUmVnaXN0ZXJDb250cm9sbGVyID0gZnVuY3Rpb24oJHNjb3BlKSB7XG5cbiAgICAkc2NvcGUubmV3VXNlckRhdGEgPSB7XG4gICAgICAgIGZpcnN0X25hbWU6ICcnLFxuICAgICAgICBsYXN0X25hbWU6ICcnLFxuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uOiAnJ1xuICAgIH07XG5cbiAgICAkc2NvcGUucmVnaXN0ZXIgPSBmdW5jdGlvbihuZXdVc2VyKSB7XG4gICAgICAgICRzY29wZS5kaXNwYXRjaCgnQ3JlYXRlVXNlckV2ZW50JywgeyB1c2VyUGFyYW1zOiBuZXdVc2VyIH0gKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmhhc0Vycm9yID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuICFpbnB1dC4kZm9jdXNlZCAmJiBpbnB1dC4kZGlydHkgJiYgaW5wdXQuJGludmFsaWQ7XG4gICAgfTtcblxuICAgICRzY29wZS5oYXNQcm9wZXJ0eUVycm9yID0gZnVuY3Rpb24oaW5wdXQsIHByb3BlcnR5KSB7XG4gICAgICAgIHJldHVybiAhaW5wdXQuJGZvY3VzZWQgJiYgaW5wdXQuJGRpcnR5ICYmIGlucHV0LiRlcnJvcltwcm9wZXJ0eV07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInJlZ2lzdGVyIGNvbnRyb2xsZXJcIik7XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbn07XG5cblJlZ2lzdGVyQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnXTtcbm1vZHVsZS5leHBvcnRzID0gUmVnaXN0ZXJDb250cm9sbGVyO1xuIiwidmFyIEhlYWRlckNvbnRyb2xsZXIgPSBmdW5jdGlvbigkc2NvcGUsICRsb2csIHVzZXJNb2RlbCkge1xuXG4gICAgJHNjb3BlLnVzZXJEYXRhID0gdXNlck1vZGVsO1xuXG4gICAgJHNjb3BlLmxvZ2luUGFyYW1zID0ge1xuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJ1xuICAgIH07XG5cbiAgICAkc2NvcGUubG9naW4gPSBmdW5jdGlvbihsb2dpblBhcmFtcykge1xuICAgICAgICAkbG9nLmxvZyhcImxvZ2luIHBhcmFtczogXCIgKyBsb2dpblBhcmFtcyk7XG4gICAgICAgICRzY29wZS5kaXNwYXRjaChcIkxvZ2luRXZlbnRcIiwgbG9naW5QYXJhbXMpO1xuICAgIH07XG5cbiAgICAkc2NvcGUubG9nb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRzY29wZS5sb2dpblBhcmFtcyA9IHtcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJ1xuICAgICAgICB9O1xuICAgICAgICAkc2NvcGUuZGlzcGF0Y2goXCJMb2dvdXRFdmVudFwiKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmZvcmdvdFBhc3N3b3JkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIHRvZG86IGltcGxlbWVudCB0aGlzXG4gICAgICAgIGFsZXJ0KCd0b3VnaCBzaGl0Jyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImhlYWRlciBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xufTtcblxuSGVhZGVyQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZycsICd1c2VyTW9kZWwnXTtcbm1vZHVsZS5leHBvcnRzID0gSGVhZGVyQ29udHJvbGxlcjtcbiIsInZhciBNZXNzYWdlQ29udHJvbGxlciA9IGZ1bmN0aW9uKCRzY29wZSwgJGxvZywgbWVzc2FnZU1vZGVsKSB7XG5cbiAgICAkc2NvcGUubWVzc2FnZURhdGEgPSBtZXNzYWdlTW9kZWw7XG5cbiAgICAkc2NvcGUuZGlzbWlzc01lc3NhZ2UgPSBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgIG1lc3NhZ2UucmVzZXRNZXNzYWdlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBzdGFydHVwLCBsaWtlIGEgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibWVzc2FnZSBjb250cm9sbGVyXCIpO1xuICAgIH07XG4gICAgaW5pdCgpO1xufTtcblxuTWVzc2FnZUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnLCAnbWVzc2FnZU1vZGVsJ107XG5tb2R1bGUuZXhwb3J0cyA9IE1lc3NhZ2VDb250cm9sbGVyO1xuIiwidmFyIEFwcGxpY2F0aW9uU2VydmljZSA9XG4gICAgZnVuY3Rpb24oJHdpbmRvdywgJGxvY2F0aW9uLCAkbG9nLCAkY29tbWFuZ3VsYXIpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogIEFwcGxpY2F0aW9uIFN0YXJ0dXAgUHJvY2Vzc1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zdGFydHVwID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzdGFydHVwUHJvY2VzcygpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBzdGFydHVwUHJvY2VzcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gYW55dGhpbmcgeW91IHdhbnQgdG8gaGFwcGVuIG9uIGFwcCBzdGFydHVwXG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludm9rZWQgb24gc3RhcnR1cCwgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkbG9nLmxvZyhcIkFwcGxpY2F0aW9uU2VydmljZSBpbml0IGFwcGxpY2F0aW9uIHNlcnZpY2VcIik7XG4gICAgICAgIH07XG4gICAgICAgIGluaXQoKTtcblxuICAgIH07XG5cbkFwcGxpY2F0aW9uU2VydmljZS4kaW5qZWN0ID0gWyckd2luZG93JywgJyRsb2NhdGlvbicsICckbG9nJywgJyRjb21tYW5ndWxhciddO1xubW9kdWxlLmV4cG9ydHMgPSBBcHBsaWNhdGlvblNlcnZpY2U7XG4iLCJ2YXIgRm9jdXNEaXJlY3RpdmUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgRk9DVVNfQ0xBU1MgPSAnbmctZm9jdXNlZCc7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgICAgcmVxdWlyZTogJ25nTW9kZWwnLFxuICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMsIGN0cmwpIHtcbiAgICAgICAgICAgIGN0cmwuJGZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGVsZW1lbnQuYmluZCgnZm9jdXMnLCBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKEZPQ1VTX0NMQVNTKTtcbiAgICAgICAgICAgICAgICBzY29wZS4kYXBwbHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0cmwuJGZvY3VzZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkuYmluZCgnYmx1cicsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoRk9DVVNfQ0xBU1MpO1xuICAgICAgICAgICAgICAgIHNjb3BlLiRhcHBseShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgY3RybC4kZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZvY3VzRGlyZWN0aXZlO1xuIiwidmFyIE1hdGNoRGlyZWN0aXZlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVxdWlyZTogJ25nTW9kZWwnLFxuICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW0sIGF0dHJzLCBjdHJsKSB7XG4gICAgICAgICAgICBzY29wZS4kd2F0Y2goJ1snICsgYXR0cnMubmdNb2RlbCArICcsICcgKyBhdHRycy5tYXRjaCArICddJywgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IHZhbHVlWzBdIHx8ICcnO1xuICAgICAgICAgICAgICAgIHZhciBiID0gdmFsdWVbMV0gfHwgJyc7XG4gICAgICAgICAgICAgICAgY3RybC4kc2V0VmFsaWRpdHkoJ21hdGNoJywgYSA9PT0gYik7XG4gICAgICAgICAgICB9LCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTWF0Y2hEaXJlY3RpdmU7XG4iLCIvKiBhdHRyaWJ1dGUgd2lsbCBlbmZvcmNlIGEgcmVnIGV4IHBhdHRlcm4gaWYgdGhlIGZpZWxkIGlzIG1hcmtlZCBhcyBuZy1yZXF1aXJlZCAqL1xudmFyIFJlcXVpcmVkUGF0dGVybkRpcmVjdGl2ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiBcIkFcIixcbiAgICAgICAgcmVxdWlyZTogXCJuZ01vZGVsXCIsXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbCwgYXR0cnMsIG5nTW9kZWwpIHtcbiAgICAgICAgICAgIHZhciB2YWxpZGF0b3IsIHBhdHRlcm5WYWxpZGF0b3IsXG4gICAgICAgICAgICAgICAgcGF0dGVybiA9IGF0dHJzLnJwYXR0ZXJuLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYoIHBhdHRlcm4gKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhdHRlcm4ubWF0Y2goL15cXC8oLiopXFwvJC8pKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gPSBuZXcgUmVnRXhwKHBhdHRlcm4uc3Vic3RyKDEsIHBhdHRlcm4ubGVuZ3RoIC0gMikpO1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuVmFsaWRhdG9yID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0ZShwYXR0ZXJuLCB2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm5WYWxpZGF0b3IgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhdHRlcm5PYmogPSBzY29wZS4kZXZhbChwYXR0ZXJuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcGF0dGVybk9iaiB8fCAhcGF0dGVybk9iai50ZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCAnICsgcGF0dGVybiArICcgdG8gYmUgYSBSZWdFeHAgYnV0IHdhcyAnICsgcGF0dGVybk9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdGUocGF0dGVybk9iaiwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmdNb2RlbC4kZm9ybWF0dGVycy5wdXNoKHBhdHRlcm5WYWxpZGF0b3IpO1xuICAgICAgICAgICAgbmdNb2RlbC4kcGFyc2Vycy5wdXNoKHBhdHRlcm5WYWxpZGF0b3IpO1xuXG4gICAgICAgICAgICBhdHRycy4kb2JzZXJ2ZShcInJlcXVpcmVkXCIsIGZ1bmN0aW9uKG5ld3ZhbCkge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkID0gbmV3dmFsO1xuICAgICAgICAgICAgICAgIHBhdHRlcm5WYWxpZGF0b3IobmdNb2RlbC4kdmlld1ZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZShyZWdleHAsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYoIHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09IFwiXCIgfHwgIXJlcXVpcmVkIHx8IHJlZ2V4cC50ZXN0KHZhbHVlKSApIHtcbiAgICAgICAgICAgICAgICAgICAgbmdNb2RlbC4kc2V0VmFsaWRpdHkoJ3BhdHRlcm4nLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmdNb2RlbC4kc2V0VmFsaWRpdHkoJ3BhdHRlcm4nLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlcXVpcmVkUGF0dGVybkRpcmVjdGl2ZTsiXX0=
;