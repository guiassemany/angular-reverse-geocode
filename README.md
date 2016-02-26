AngularJS Reverse Geocode
=======================
This is a simple module to handle reverse geocode using google maps and AngularJS.

### Demo
[Codepen](http://codepen.io/assemany/pen/JXPqBv)

### How to Install

Bower: `bower install assemany-angular-reverse-geocode`
You can also simply download the file angular-reverse-geocode.js and import it to your page.

Include the main js file to your application
```html
<script src="bower_components/angular-reverse-geocode/dist/angular-reverse-geocode.min.js" charset="utf-8"></script>
```

After this, you should add 'AngularReverseGeocode' as a dependency for your project.
```javascript
angular.module('myApplication', ['AngularReverseGeocode']);
```

**Important: Remeber to include the angular-reverse-geocode.js or the minified version on your page.  You should also have the google maps api script on your page!**



### How to use
The directive
```html
<reverse-geocode lat="-12.928615" lng="-38.509741"></reverse-geocode>
```

If the latitude and longitude variables are coming from scope variables set in a controller, you need to use curly-brace expression:

```html
<reverse-geocode lat="{{myCtrl.lat}}" lng="{{myCtrl.lng}}"></reverse-geocode>
```

---

The service
```javascript
(function() {
    'use strict';

    angular
        .module('myApp', [
            'AngularReverseGeocode'
        ])
        .controller('MyCtrl',['reverseGeocode', '$scope', function(reverseGeocode, $scope){
          var vm = this;
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
```
