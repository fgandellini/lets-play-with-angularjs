angular.module('MyApp')

.factory('Warehouse', function($resource) {

  var Beers = $resource('http://localhost:3005/beers/:name', {
    name: '@name'
  });

  function beers() {
    return Beers.query();
  }

  function details(name) {
    return Beers.get({
      name: name
    }).$promise;
  }

  return {
    beers: beers,
    details: details
  };

});
