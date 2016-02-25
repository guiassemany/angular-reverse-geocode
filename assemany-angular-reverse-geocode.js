/**
 * Assemany AngularJS reverse geocoding directive
 * @author Guilherme Assemany <guilhermeassemany@hotmail.com> (http://assemany.com)
 * @version 1.0.0
 */
(function () {
    angular.module('AssemanyAngularReverseGeocode', [])
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
