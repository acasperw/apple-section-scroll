import { Component, OnInit } from '@angular/core';

import AOS from "aos";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  ngOnInit() {
    AOS.init({ delay: 200, offset: 200, anchorPlacement: 'center-bottom' });
    AOS.refresh(); // Setup resize monitor
  }
}
