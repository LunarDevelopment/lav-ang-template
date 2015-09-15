'use strict';

/**
 * @ngdoc directive
 * @name ngappApp.directive:passwordMatch
 * @description
 * # passwordMatch
 */
angular.module('ngappApp')
  .directive('passwordMatch', function () {
    return {
      require: 'ngModel',
      scope: {
        otherModelValue: '=passwordMatch'
      },
      link: function (scope, element, attributes, ngModel) {
        ngModel.$validators.compareTo = function (modelValue) {
          return modelValue === scope.otherModelValue;
        };
        scope.$watch('otherModelValue', function () {
          ngModel.$validate();
        });
      }
    };
  });
