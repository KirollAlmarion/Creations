import { TestBed } from '@angular/core/testing';

import { AccomplissementsService } from './accomplissements.service';

describe('AccomplissementsService', () => {
  let service: AccomplissementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccomplissementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
