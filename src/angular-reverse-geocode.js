/**
 * AngularJS reverse geocoding directive
 * @author Guilherme Assemany <guilhermeassemany@hotmail.com> (http://assemany.com)
 * @version 1.0.0
 */
(function () {
    angular.module('AngularReverseGeocode', [])
    .service('reverseGeocode', ['$http', function($http){

      var vm = this;

      vm.geocodePosition = geocodePosition;

      var geocoder = new google.maps.Geocoder();

      function geocodePosition(lat, lng, fn) {
        var latlng = new google.maps.LatLng(lat, lng);
        geocoder.geocode({
          latLng: latlng
        }, function(responses) {
          if (responses && responses.length > 0) {
             fn(responses[0].formatted_address);
          } else {
             alert('Error while trying to find the location');
          }
        });
      }
    }])
    .directive('reverseGeocode', function () {
        return {
            restrict: 'E',
            template: '<div></div>',
            link: function (scope, element, attrs) {
                var geocoder = new google.maps.Geocoder();
                var latlng = new google.maps.LatLng(attrs.lat, attrs.lng);
                geocoder.geocode({ 'latLng': latlng }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[0]) {
                            element.text(results[0].formatted_address);
                        } else {
                            element.text('Location not found');
                        }
                    } else {
                        element.text('Geocoder failed due to: ' + status);
                    }
                });
            },
            replace: true
        };
    });
})();
