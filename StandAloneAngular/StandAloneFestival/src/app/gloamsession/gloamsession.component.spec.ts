import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GloamsessionComponent } from './gloamsession.component';

describe('GloamsessionComponent', () => {
  let component: GloamsessionComponent;
  let fixture: ComponentFixture<GloamsessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GloamsessionComponent]
    });
    fixture = TestBed.createComponent(GloamsessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
