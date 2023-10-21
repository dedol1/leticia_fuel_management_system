import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelDippingComponent } from './fuel-dipping.component';

describe('FuelDippingComponent', () => {
  let component: FuelDippingComponent;
  let fixture: ComponentFixture<FuelDippingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuelDippingComponent]
    });
    fixture = TestBed.createComponent(FuelDippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
