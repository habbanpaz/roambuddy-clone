import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryEsimComponent } from './country-esim.component';

describe('CountryEsimComponent', () => {
  let component: CountryEsimComponent;
  let fixture: ComponentFixture<CountryEsimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryEsimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryEsimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
