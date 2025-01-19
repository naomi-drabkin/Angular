import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { enterSiteGuard } from './enter-site.guard';

describe('enterSiteGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => enterSiteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
