angular.module('MyApp')

.controller('ToggleController', function($scope) {
  $scope.enabled = false;

  $scope.toggle = function() {
    $scope.enabled = !$scope.enabled;
  };

  $scope.getStatus = function() {
    return $scope.enabled ? 'on' : 'off';
  };

})

.directive('myToggle', function() {
  return {
    scope: {},
    templateUrl: 'components/mytoggle-template.html',
    controller: 'ToggleController'
  };
});
