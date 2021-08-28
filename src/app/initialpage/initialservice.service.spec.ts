import { TestBed } from '@angular/core/testing';

import { InitialserviceService } from './initialservice.service';

describe('InitialserviceService', () => {
  let service: InitialserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InitialserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
