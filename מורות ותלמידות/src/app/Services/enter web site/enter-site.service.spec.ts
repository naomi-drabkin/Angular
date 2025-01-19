import { TestBed } from '@angular/core/testing';

import { EnterSiteService } from '../../Services/enter web site/enter-site.service';

describe('EnterSiteService', () => {
  let service: EnterSiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnterSiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
