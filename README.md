Assemany AngularJS Reverse Geocode
=======================
This is a simple directive to handle reverse geocode using google maps.

### Demo
[Codepen](http://codepen.io/assemany/pen/JXPqBv)

### How to Installation

Bower: `bower install assemany-angular-reverse-geocode`
You can also simply download the file assemany-angular-reverse-geocode.js and import it to your page.

After this, you should add 'AssemanyAngularReverseGeocode' as a dependency for your project.
```javascript
angular.module('myApplication', ['AssemanyAngularReverseGeocode']);
```

** Important: You should also have the google maps api script on your page! **

### How to use
```html
<reverse-geocode lat="-12.928615" lng="-38.509741"></reverse-geocode>
```

If the latitude and longitude variables are coming from scope variables set in a controller, you need to use curly-brace expression:
```html
<reverse-geocode lat="{{myCtrl.lat}}" lng="{{myCtrl.lng}}"></reverse-geocode>
```
