import { TestBed } from '@angular/core/testing';

import { PigmentsService } from './pigments.service';

describe('PigmentsService', () => {
  let service: PigmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PigmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
