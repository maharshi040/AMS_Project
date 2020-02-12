import { TestBed } from '@angular/core/testing';

import { AMSService } from './ams.service';

describe('AMSService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AMSService = TestBed.get(AMSService);
    expect(service).toBeTruthy();
  });
});
