import { TestBed } from '@angular/core/testing';

import { ListcorService } from './listcor.service';

describe('ListcorService', () => {
  let service: ListcorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListcorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
