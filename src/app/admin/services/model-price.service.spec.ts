import { TestBed } from '@angular/core/testing';

import { ModelPriceService } from './model-price.service';

describe('ModelPriceService', () => {
  let service: ModelPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
