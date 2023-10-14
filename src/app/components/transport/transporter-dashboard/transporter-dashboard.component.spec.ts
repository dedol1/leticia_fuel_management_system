import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransporterDashboardComponent } from './transporter-dashboard.component';

describe('TransporterDashboardComponent', () => {
  let component: TransporterDashboardComponent;
  let fixture: ComponentFixture<TransporterDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransporterDashboardComponent]
    });
    fixture = TestBed.createComponent(TransporterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
