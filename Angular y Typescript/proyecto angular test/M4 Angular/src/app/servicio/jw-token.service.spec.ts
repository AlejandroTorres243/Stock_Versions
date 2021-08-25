import { TestBed } from '@angular/core/testing';

import { JwTokenService } from './jw-token.service';

describe('JwTokenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JwTokenService = TestBed.get(JwTokenService);
    expect(service).toBeTruthy();
  });
});
