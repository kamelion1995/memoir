import { TestBed } from '@angular/core/testing';

import { CanaltrService } from './canaltr.service';

describe('CanaltrService', () => {
  let service: CanaltrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanaltrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
