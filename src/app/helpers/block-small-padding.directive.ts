import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBlockSmallPadding]'
})
export class BlockSmallPaddingDirective {

  constructor(private renderer: Renderer2, hostElement: ElementRef) {
    renderer.addClass(hostElement.nativeElement, 'small-section');
  }

}
