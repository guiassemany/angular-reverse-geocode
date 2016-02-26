(function() {
    'use strict';

    angular
        .module('myApp', [
            'AngularReverseGeocode'
        ])
        .controller('MyCtrl',['reverseGeocode', '$scope', function(reverseGeocode, $scope){
          var vm = this;
          console.log('a');
          vm.lat = "-12.914090";
          vm.lng = "-38.493835";

          vm.formatted_address = "";

          activate();

          function activate(){
            reverseGeocode.geocodePosition(vm.lat, vm.lng, function(address){
               vm.formatted_address = address;
               $scope.$apply();
            });
          }

        }]);

})();
