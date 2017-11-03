import { TestBed, inject } from '@angular/core/testing';

import { NewtonApiService } from './newton-api.service';

describe('NewtonApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewtonApiService]
    });
  });

  it('should be created', inject([NewtonApiService], (service: NewtonApiService) => {
    expect(service).toBeTruthy();
  }));
});
