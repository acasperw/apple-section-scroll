import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-video-player-and-text',
  templateUrl: './video-player-and-text.component.html'
})
export class VideoPlayerAndTextComponent implements AfterViewInit {

  public transformScrollVal = 'matrix(1, 0, 0, 1, 0, 722.5)';

  constructor(private el: ElementRef) {

  }

  ngAfterViewInit() {
    window.addEventListener('scroll', () => {


      const element = this.el.nativeElement;
      const contentElement = element.querySelector('.container__patter_block_inner');
      const percentage = this.getElementScrollThroughPercentage(element);
      
      const contentHeight: number = contentElement.clientHeight;

      if (percentage !== null) {

        // this.transformScrollVal = `matrix(1, 0, 0, 1, 0, ${percentage})`;
        this.transformScrollVal = `matrix(1, 0, 0, 1, 0, ${percentage + contentHeight*2})`;

        console.log('percentage', this.transformScrollVal);

        // console.log(`Element Scroll Through Percentage: ${Math.min(percentage, 100)}%`);
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
