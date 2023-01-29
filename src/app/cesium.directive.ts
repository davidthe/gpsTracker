import { Directive, ElementRef, OnInit } from '@angular/core';
import { SceneMode, Viewer } from 'cesium';

@Directive({
  selector: '[appCesium]'
})
export class CesiumDirective implements OnInit {

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
    });

    viewer.scene.debugShowFramesPerSecond = true;
  }

}
