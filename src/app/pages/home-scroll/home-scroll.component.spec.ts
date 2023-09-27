import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeScrollComponent } from './home-scroll.component';

describe('HomeScrollComponent', () => {
  let component: HomeScrollComponent;
  let fixture: ComponentFixture<HomeScrollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeScrollComponent]
    });
    fixture = TestBed.createComponent(HomeScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
