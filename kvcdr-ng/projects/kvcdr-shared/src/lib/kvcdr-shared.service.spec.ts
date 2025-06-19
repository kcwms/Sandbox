import { TestBed } from '@angular/core/testing';

import { KvcdrSharedService } from './kvcdr-shared.service';

describe('KvcdrSharedService', () => {
  let service: KvcdrSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KvcdrSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
