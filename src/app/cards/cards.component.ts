import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CountryService } from '../services/country.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HaveYouUsedModalComponent } from '../have-you-used-modal/have-you-used-modal.component';

// Define the Country interface
interface Country {
  name: string;
  flag: string;
  duration: string,
  internet: string,
  price: string
}
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  countries: Country[] = [];
  activeIndex: number | null = null;
  isDefaultSize = true;
  currentHeight = 400;

  constructor(private country: CountryService,  private modalService: NgbModal) { }
  @Output() openModalEvent = new EventEmitter<void>();

  ngOnInit() {
    this.loadCountries();
  }

  toggleCard(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
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
      this.countries = this.country.getCountries();
    }
    // Toggle the state of isDefaultSize
    this.isDefaultSize = !this.isDefaultSize;
  }

  loadCountries() {
    this.countries = this.country.getCountries();
  }

  loadAdditionalCountries() {
    const additionalCountries = this.country.getAdditionalCountries();
    this.countries = [...this.countries, ...additionalCountries];
  }

  openModalFunction() {
    this.modalService.open(HaveYouUsedModalComponent);
  }
}
