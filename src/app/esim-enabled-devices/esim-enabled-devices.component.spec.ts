import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsimEnabledDevicesComponent } from './esim-enabled-devices.component';

describe('EsimEnabledDevicesComponent', () => {
  let component: EsimEnabledDevicesComponent;
  let fixture: ComponentFixture<EsimEnabledDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsimEnabledDevicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsimEnabledDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
