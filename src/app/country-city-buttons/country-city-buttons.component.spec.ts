import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCityButtonsComponent } from './country-city-buttons.component';

describe('CountryCityButtonsComponent', () => {
  let component: CountryCityButtonsComponent;
  let fixture: ComponentFixture<CountryCityButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryCityButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryCityButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
