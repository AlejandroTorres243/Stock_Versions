import { TestBed } from '@angular/core/testing';

import { ProductoRestService } from './producto-rest.service';

describe('ProductoRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductoRestService = TestBed.get(ProductoRestService);
    expect(service).toBeTruthy();
  });
});
