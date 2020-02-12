import { TestBed } from '@angular/core/testing';

import { AuthGuardPilotService } from './auth-guard-pilot.service';

describe('AuthGuardPilotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthGuardPilotService = TestBed.get(AuthGuardPilotService);
    expect(service).toBeTruthy();
  });
});
