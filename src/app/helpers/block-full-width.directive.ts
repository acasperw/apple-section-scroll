import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBlockFullWidth]',
})
export class BlockFullWidthDirective {
  constructor(private renderer: Renderer2, hostElement: ElementRef) {
    renderer.addClass(hostElement.nativeElement, 'wp-block-patter-block-wrapper-000');
    renderer.addClass(hostElement.nativeElement, 'alignfull');
  }
}
