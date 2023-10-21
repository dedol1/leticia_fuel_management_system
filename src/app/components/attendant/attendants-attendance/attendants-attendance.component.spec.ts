import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendantsAttendanceComponent } from './attendants-attendance.component';

describe('AttendantsAttendanceComponent', () => {
  let component: AttendantsAttendanceComponent;
  let fixture: ComponentFixture<AttendantsAttendanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttendantsAttendanceComponent]
    });
    fixture = TestBed.createComponent(AttendantsAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
