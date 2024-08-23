import { Component, OnInit } from '@angular/core';
import { CountryService } from '../services/country.service';
import { TestimonialService } from '../services/testimonial.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  isDefaultSize = true;
  currentHeight = 400;
  countries: any[] = [];
  selectedCountry: any = null;
  testimonials: any[] = [];
  isModalVisible = false;

  openModal() {
    this.isModalVisible = true;
  }

  constructor(
    private countryService: CountryService,
    private testimonialService: TestimonialService
  ) {}

  ngOnInit(): void {
    this.loadCountries();
    this.testimonials = this.testimonialService.getTestimonial();
  }

  toggleSize() {
    if (this.isDefaultSize) {
      this.currentHeight = 4000;
      this.loadAdditionalCountries();
    } else {
      this.currentHeight = 400;
      this.countries = this.countryService.getCountries();
    }
    this.isDefaultSize = !this.isDefaultSize;
  }

  loadCountries() {
    this.countries = this.countryService.getCountries();
  }

  loadAdditionalCountries() {
    const additionalCountries = this.countryService.getAdditionalCountries();
    this.countries = [...this.countries, ...additionalCountries];
  }

  selectCountry(country: any) {
    this.selectedCountry = country;
  }
}
