import { TestBed } from '@angular/core/testing';

import { EverywhereIMMService } from './everywhere-imm.service';

describe('EverywhereIMMService', () => {
  let service: EverywhereIMMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EverywhereIMMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
