import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioSceneComponent } from './audio-scene.component';

describe('AudioSceneComponent', () => {
  let component: AudioSceneComponent;
  let fixture: ComponentFixture<AudioSceneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AudioSceneComponent]
    });
    fixture = TestBed.createComponent(AudioSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
