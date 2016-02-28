angular.module('MyApp')

.directive('brewery', function() {
  return {
    scope: true,
    templateUrl: 'components/brewery-template.html',
    controller: 'BreweryController'
  };
})

.controller('BreweryController', function($scope, Warehouse) {

  $scope.beers = Warehouse.beers();

  $scope.details = function(name) {
    Warehouse
      .details(name)
      .then(function(beer) {
        $scope.beer = beer;
      });
  };

});
