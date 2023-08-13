import { Directive, ElementRef, OnInit } from '@angular/core';
import { BackgroundGeolocationPlugin } from '@capacitor-community/background-geolocation';
// import { registerPlugin } from '@capacitor/core';
import { Cartesian2, Cartesian3, Color, IonImageryProvider, IonWorldImageryStyle, LabelStyle, SceneMode, Viewer } from 'cesium';

@Directive({
  selector: '[appCesium]'
})
export class CesiumDirective implements OnInit {
  // private BackgroundGeolocation = registerPlugin<BackgroundGeolocationPlugin>("BackgroundGeolocation");
  private label = null;
  private locationText = ''

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const viewer = new Viewer(this.el.nativeElement, {
      homeButton: false,
      sceneMode: SceneMode.SCENE2D,
      timeline:false,
      automaticallyTrackDataSourceClocks: false,
      animation: false,
      navigationHelpButton: false,
      fullscreenButton: false,
      vrButton: false,
      infoBox: false,
      sceneModePicker: false,
      geocoder : false,
    });

    viewer.scene.debugShowFramesPerSecond = true;

    var layers = viewer.scene.imageryLayers;
    // var blackMarble = layers.addImageryProvider(
    //   new IonImageryProvider({ assetId: 3812 })
    // );

    const camera = viewer.camera;

    
    // blackMarble.alpha = 0.5;
    // blackMarble.brightness = 1.2;


//     this.BackgroundGeolocation.addWatcher(
//       {
//           // If the "backgroundMessage" option is defined, the watcher will
//           // provide location updates whether the app is in the background or the
//           // foreground. If it is not defined, location updates are only
//           // guaranteed in the foreground. This is true on both platforms.
  
//           // On Android, a notification must be shown to continue receiving
//           // location updates in the background. This option specifies the text of
//           // that notification.
//           backgroundMessage: this.locationText,
  
//           // The title of the notification mentioned above. Defaults to "Using
//           // your location".
//           backgroundTitle: "Tracking You.",
  
//           // Whether permissions should be requested from the user automatically,
//           // if they are not already granted. Defaults to "true".
//           requestPermissions: true,

//           // If "true", stale locations may be delivered while the device
//           // obtains a GPS fix. You are responsible for checking the "time"
//           // property. If "false", locations are guaranteed to be up to date.
//           // Defaults to "false".
//           stale: false,
  
//           // The minimum number of metres between subsequent locations. Defaults
//           // to 0.
//           distanceFilter: 50
//       },
//       function callback(this: any, location, error) {


//           if (error) {
//               if (error.code === "NOT_AUTHORIZED") {
//                   if (window.confirm(
//                       "This app needs your location, " +
//                       "but does not have permission.\n\n" +
//                       "Open settings now?"
//                   )) {
//                       // It can be useful to direct the user to their device's
//                       // settings when location permissions have been denied. The
//                       // plugin provides the 'openSettings' method to do exactly
//                       // this.
//                       this.BackgroundGeolocation.openSettings();
//                   }
//               }
//               return console.error(error);
//           }


//           if(this.label){
//             viewer.entities.remove(this.label);
//         }

//         this.locationText = "Lat: "+location?.latitude+", "+"Long: "+location?.longitude;
//         this.BackgroundGeolocation.backgroundMessage = this.locationText;
//         this.label = viewer.entities.add({
//             position: Cartesian3.fromDegrees(location?.longitude ?? 0 , location?.latitude ?? 0),
//             label: {
//                 text: "Lat: "+location?.latitude+", "+"Long: "+location?.longitude,
//                 scale: 0.8,
//                 pixelOffset: new Cartesian2(0, -30),
//                 font: "32px Helvetica",
//                 fillColor: Color.YELLOW,
//                 outlineColor: Color.BLACK,
//                 outlineWidth: 3,
//                 style: LabelStyle.FILL_AND_OUTLINE,
//             }
//         });

// viewer.camera.flyTo({
//   destination: Cartesian3.fromDegrees(
//     location?.longitude ?? 0,
//     location?.latitude?? 0,
//     1005.0
//   ),
// });



//           return console.log(location);
//       }
//   ).then(function after_the_watcher_has_been_added(this: any, watcher_id) {
//       // When a watcher is no longer needed, it should be removed by calling
//       // 'removeWatcher' with an object containing its ID.
//       this.BackgroundGeolocation.removeWatcher({
//           id: watcher_id
//       });
//   });
  

    
  }

}
