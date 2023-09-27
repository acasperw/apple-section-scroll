import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPlayerAndTextComponent } from './video-player-and-text.component';

describe('VideoPlayerAndTextComponent', () => {
  let component: VideoPlayerAndTextComponent;
  let fixture: ComponentFixture<VideoPlayerAndTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoPlayerAndTextComponent]
    });
    fixture = TestBed.createComponent(VideoPlayerAndTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
