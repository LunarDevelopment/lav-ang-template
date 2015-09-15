'use strict';

describe('Directive: helloUser', function () {

  // load the directive's module
  beforeEach(module('ngappApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<hello-user></hello-user>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the helloUser directive');
  }));
});
