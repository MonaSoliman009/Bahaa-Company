import { TestBed } from '@angular/core/testing';

import { TestPhaseService } from './test-phase.service';

describe('TestPhaseService', () => {
  let service: TestPhaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestPhaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
