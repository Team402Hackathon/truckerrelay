import { TestBed } from '@angular/core/testing';

import { BaselocalService } from './baselocal.service';

describe('BaselocalService', () => {
  let service: BaselocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaselocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
