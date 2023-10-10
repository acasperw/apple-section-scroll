import { AfterViewInit, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-text-scroll-css',
  templateUrl: './text-scroll-css.component.html'
})
export class TextScrollCssComponent implements AfterViewInit, OnDestroy {

  public ngAfterViewInit(): void {
    window.addEventListener("scroll", this.scroll, true);
  }

  public scroll = (event: any): void => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const ratio = (scrollTop / scrollHeight) * 5;

    // Fallbacks to get correct scroll
    // const number = event.srcElement.scrollTop ?? document.documentElement.scrollTop ?? document.body.scrollTop;
    document.body.style.setProperty("--scroll",(Math.min(Math.max(ratio, 0), 5)).toString());
  };

  public ngOnDestroy(): void {
    window.removeEventListener("scroll", this.scroll);
  }

}
