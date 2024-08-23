import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCardsComponent } from './country-cards.component';

describe('CountryCityButtonsComponent', () => {
  let component: CountryCardsComponent;
  let fixture: ComponentFixture<CountryCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountryCardsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
