import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendantSalesComponent } from './attendant-sales.component';

describe('AttendantSalesComponent', () => {
  let component: AttendantSalesComponent;
  let fixture: ComponentFixture<AttendantSalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttendantSalesComponent]
    });
    fixture = TestBed.createComponent(AttendantSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
