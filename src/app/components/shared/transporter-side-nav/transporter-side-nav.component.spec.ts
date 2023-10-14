import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransporterSideNavComponent } from './transporter-side-nav.component';

describe('TransporterSideNavComponent', () => {
  let component: TransporterSideNavComponent;
  let fixture: ComponentFixture<TransporterSideNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransporterSideNavComponent]
    });
    fixture = TestBed.createComponent(TransporterSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
