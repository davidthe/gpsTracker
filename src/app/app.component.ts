import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<div appCesium></div>'
})
export class AppComponent {



  constructor(){
    
  // The location object.
  // {
  //     // Longitude in degrees.
  //     longitude: 131.723423719132,
  //     // Latitude in degrees.
  //     latitude: -22.40106297456,
  //     // Radius of horizontal uncertainty in metres, with 68% confidence.
  //     accuracy: 11,
  //     // Metres above sea level (or null).
  //     altitude: 65,
  //     // Vertical uncertainty in metres, with 68% confidence (or null).
  //     altitudeAccuracy: 4,
  //     // Deviation from true north in degrees (or null).
  //     bearing: 159.60000610351562,
  //     // True if the location was simulated by software, rather than GPS.
  //     simulated: false,
  //     // Speed in metres per second (or null).
  //     speed: 23.51068878173828,
  //     // Time the location was produced, in milliseconds since the unix epoch.
  //     time: 1562731602000
  // }
  
  // If you just want the current location, try something like this. The longer
  // the timeout, the more accurate the guess will be. I wouldn't go below about
  // 100ms.
  // function guess_location(callback, timeout) {
  //     let last_location;
  //     this.BackgroundGeolocation.addWatcher(
  //         {
  //             requestPermissions: false,
  //             stale: true
  //         },
  //         function (location) {
  //             last_location = location || undefined;
  //         }
  //     ).then(function (id) {
  //         setTimeout(function () {
  //             callback(last_location);
  //             Plugins.BackgroundGeolocation.removeWatcher({id});
  //         }, timeout);
  //     });
  }
  }
// }
