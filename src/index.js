var MyApp = angular.module('MyApp', []);

MyApp.controller('ToggleController', function() {
  var vm = this;

  vm.enabled = false;

  vm.toggle = function() {
    vm.enabled = !vm.enabled;
  };

  vm.getStatus = function() {
    return vm.enabled ? 'on' : 'off';
  };

});
