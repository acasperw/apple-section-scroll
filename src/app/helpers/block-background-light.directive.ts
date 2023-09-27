import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBlockBackgroundLight]'
})
export class BlockBackgroundLightDirective {

  constructor(private renderer: Renderer2, hostElement: ElementRef) {
    renderer.addClass(hostElement.nativeElement, 'has-light-background-color');
  }

}
