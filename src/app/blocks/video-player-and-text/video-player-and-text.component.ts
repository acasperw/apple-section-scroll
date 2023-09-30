import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-video-player-and-text',
  templateUrl: './video-player-and-text.component.html',
})
export class VideoPlayerAndTextComponent implements AfterViewInit {
  public transformScrollVal = 'matrix(1, 0, 0, 1, 0, 1000)';

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit() {
    window.addEventListener('scroll', () => {

      const element = this.el.nativeElement;
      const contentElement = element.querySelector('.vp-content');
      const percentage = this.getElementScrollThroughPercentage(element);

      const innerContentHeight: number = contentElement.clientHeight;

      if (percentage !== null) {
        // this.transformScrollVal = `matrix(1, 0, 0, 1, 0, ${percentage})`;
        this.transformScrollVal = `matrix(1, 0, 0, 1, 0, ${percentage + innerContentHeight * 2})`;
      }
    });
  }

  getElementScrollThroughPercentage(element: any) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.bottom < 0 || rect.top > windowHeight) {
      return null;  // Element not within screen
    }

    const elementHeight = element.clientHeight;

    const scrolledPast = windowHeight - rect.top;

    return elementHeight - (2 * scrolledPast);
  }

}
