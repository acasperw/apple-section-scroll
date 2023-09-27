import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBlockFullHeight]'
})
export class BlockFullHeightDirective {

  constructor(private renderer: Renderer2, hostElement: ElementRef) {
    renderer.addClass(hostElement.nativeElement, 'block-full-height');
  }

}
