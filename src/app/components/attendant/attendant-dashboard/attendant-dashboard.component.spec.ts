import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendantDashboardComponent } from './attendant-dashboard.component';

describe('AttendantDashboardComponent', () => {
  let component: AttendantDashboardComponent;
  let fixture: ComponentFixture<AttendantDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttendantDashboardComponent]
    });
    fixture = TestBed.createComponent(AttendantDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
