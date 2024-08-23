import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OfferComponent } from '../offer/offer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-cards',
  templateUrl: './country-cards.component.html',
  styleUrls: ['./country-cards.component.css'],
})
export class CountryCardsComponent implements OnInit {
  selectedCountry: any = null; // Track the selected country
  selectedRow: string | null = null; // Track the selected row
  colorMap: { [key: string]: string } = {};
  showExtraRows = false;

  countries: any = {};

  constructor(
    private http: HttpClient,
    private modalService: NgbModal,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.http.get('assets/json/countries.json').subscribe((data) => {
      this.countries = data;
    });
  }

  openOfferModal() {
    this.route.navigate(['offer']);
  }

  showColor(row: string, country: any) {
    if (this.selectedCountry === country && this.selectedRow === row) {
      // If the same button is clicked again, toggle off the display
      this.selectedCountry = null;
      this.selectedRow = null;
    } else {
      // Otherwise, show the content for the newly selected button
      this.selectedCountry = country;
      this.selectedRow = row;
      this.colorMap[row] = country.color; // Update the colorMap with the selected country's color
    }
  }

  toggleRows() {
    this.showExtraRows = !this.showExtraRows;
  }

  getBoxes(country: any): any[] {
    return Array(country.boxes).fill({});
  }
}
