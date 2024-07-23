import { Component, OnInit, Renderer2 } from '@angular/core';
import { CountryService } from '../services/country.service';
import { Router } from '@angular/router';

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
  isModalVisible = false;
  

  constructor(private countryService: CountryService, private router: Router, private renderer: Renderer2 ) { }

  ngOnInit(): void {
    this.loadCountries();

  }

  

  openModal() {
    this.isModalVisible = true;
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
