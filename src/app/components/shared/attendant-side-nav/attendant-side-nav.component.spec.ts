import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendantSideNavComponent } from './attendant-side-nav.component';

describe('AttendantSideNavComponent', () => {
  let component: AttendantSideNavComponent;
  let fixture: ComponentFixture<AttendantSideNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttendantSideNavComponent]
    });
    fixture = TestBed.createComponent(AttendantSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
