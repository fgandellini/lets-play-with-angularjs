var MyApp = angular.module('MyApp', []);

MyApp.controller('ToggleController', function($scope) {
  $scope.enabled = false;

  $scope.toggle = function() {
    $scope.enabled = !$scope.enabled;
  };

  $scope.getStatus = function() {
    return $scope.enabled ? 'on' : 'off';
  };

});

MyApp.directive('myToggle', function() {
  return {
    scope: {},
    templateUrl: 'mytoggle-template.html',
    controller: 'ToggleController'
  };
});

MyApp.controller('RangeController', function($scope) {
  $scope.rangeValue = 0;

  $scope.checkUndefined = function() {
    $scope.rangeValue = $scope.rangeValue || 0;
  };

});

MyApp.directive('myRange', function() {
  return {
    scope: {},
    templateUrl: 'myrange-template.html',
    controller: 'RangeController'
  };
});
