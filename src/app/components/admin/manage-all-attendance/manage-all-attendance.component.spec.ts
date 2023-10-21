import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAllAttendanceComponent } from './manage-all-attendance.component';

describe('ManageAllAttendanceComponent', () => {
  let component: ManageAllAttendanceComponent;
  let fixture: ComponentFixture<ManageAllAttendanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageAllAttendanceComponent]
    });
    fixture = TestBed.createComponent(ManageAllAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
