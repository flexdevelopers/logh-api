'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('loghApp'));
  beforeEach(module('ui.bootstrap'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  describe('reverse', function() {
    it('should reverse the league name', inject(function(reverseFilter) {
      expect(reverseFilter('abcd')).toEqual('dcba');
    }));
  });

});
