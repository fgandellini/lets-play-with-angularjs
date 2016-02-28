angular.module('MyApp')

.controller('RangeController', function($scope) {
  $scope.rangeValue = 0;

  $scope.checkUndefined = function() {
    $scope.rangeValue = $scope.rangeValue || 0;
  };

})

.directive('myRange', function() {
  return {
    scope: {},
    templateUrl: 'components/myrange-template.html',
    controller: 'RangeController'
  };
});
