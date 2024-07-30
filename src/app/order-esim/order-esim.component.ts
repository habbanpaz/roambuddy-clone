import { Component, OnInit, Renderer2, Output, EventEmitter } from '@angular/core';
import { CountryService } from '../services/country.service';
import { Router } from '@angular/router';
import { EsimEnabledDevicesServiceService } from '../services/esim-enabled-devices-service.service';

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
  selectedTab: number = 1;
  @Output() openModalEvent = new EventEmitter<void>();

  // openModal() {
  //   this.openModalEvent.emit();
  // }

  openModal(event: Event) {
    this.esimEnabledService.setModalState(true);

    event.preventDefault(); // Prevent the default anchor tag behavior
    this.openModalEvent.emit(); // Emit event to parent component
  }
 
  selectTab(tabNumber: number) {
    this.selectedTab = tabNumber;
  }

  constructor(private countryService: CountryService, private router: Router, private renderer: Renderer2, private esimEnabledService: EsimEnabledDevicesServiceService ) { }

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
