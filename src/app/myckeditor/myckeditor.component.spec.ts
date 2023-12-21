import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyckeditorComponent } from './myckeditor.component';

describe('MyckeditorComponent', () => {
  let component: MyckeditorComponent;
  let fixture: ComponentFixture<MyckeditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyckeditorComponent]
    });
    fixture = TestBed.createComponent(MyckeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
