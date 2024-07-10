import { Component, OnInit } from '@angular/core';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-order-esim',
  templateUrl: './order-esim.component.html',
  styleUrls: ['./order-esim.component.css']
})
export class OrderEsimComponent implements OnInit {
  isDefaultSize = true;
  currentHeight = 400;
  countries: any[] = [];
  selectedCountry: any = null;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.loadCountries();

  }

  toggleSize() {
    if (this.isDefaultSize) {
      // Increase size to 4000px
      this.currentHeight = 4000;
      // Load additional countries
      this.loadAdditionalCountries();
    } else {
      // Decrease size back to 400px
      this.currentHeight = 400;
      // Clear additional countries if needed
      this.countries = this.countryService.getCountries();
    }
    // Toggle the state of isDefaultSize
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
