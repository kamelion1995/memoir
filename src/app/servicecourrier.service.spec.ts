import { TestBed } from '@angular/core/testing';

import { ServicecourrierService } from './servicecourrier.service';

describe('ServicecourrierService', () => {
  let service: ServicecourrierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicecourrierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
