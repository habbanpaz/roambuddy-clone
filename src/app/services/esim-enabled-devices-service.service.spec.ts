import { TestBed } from '@angular/core/testing';

import { EsimEnabledDevicesServiceService } from './esim-enabled-devices-service.service';

describe('EsimEnabledDevicesServiceService', () => {
  let service: EsimEnabledDevicesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EsimEnabledDevicesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
