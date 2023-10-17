import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFuelPricesComponent } from './manage-fuel-prices.component';

describe('ManageFuelPricesComponent', () => {
  let component: ManageFuelPricesComponent;
  let fixture: ComponentFixture<ManageFuelPricesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageFuelPricesComponent]
    });
    fixture = TestBed.createComponent(ManageFuelPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
