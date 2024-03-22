import { TestBed } from '@angular/core/testing';

import { ValidatorcheckService } from './validatorcheck.service';

describe('ValidatorcheckService', () => {
  let service: ValidatorcheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatorcheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
