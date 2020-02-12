import { TestBed } from '@angular/core/testing';

import { AuthGuardSuperuserService } from './auth-guard-superuser.service';

describe('AuthGuardSuperuserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthGuardSuperuserService = TestBed.get(AuthGuardSuperuserService);
    expect(service).toBeTruthy();
  });
});
