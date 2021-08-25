import { TestBed } from '@angular/core/testing';

import { RestGenericService } from './rest-generic.service';

describe('RestGenericService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestGenericService = TestBed.get(RestGenericService);
    expect(service).toBeTruthy();
  });
});
