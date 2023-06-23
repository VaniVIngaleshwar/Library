import { TestBed } from '@angular/core/testing';

import { ApiSService } from './api-s.service';

describe('ApiSService', () => {
  let service: ApiSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
