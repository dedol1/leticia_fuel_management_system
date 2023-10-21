import { TestBed } from '@angular/core/testing';

import { AttendantService } from './attendant.service';

describe('AttendantService', () => {
  let service: AttendantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttendantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
