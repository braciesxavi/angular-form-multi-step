import { TestBed } from '@angular/core/testing';

import { FormAccountService } from './form-account.service';

describe('FormAccountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormAccountService = TestBed.get(FormAccountService);
    expect(service).toBeTruthy();
  });
});
