import { TestBed } from '@angular/core/testing';

import { UsermgrService } from './usermgr.service';

describe('UsermgrService', () => {
  let service: UsermgrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsermgrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
