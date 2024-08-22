import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-country-city-buttons',
  templateUrl: './country-city-buttons.component.html',
  styleUrls: ['./country-city-buttons.component.css'],
})
export class CountryCityButtonsComponent implements OnInit {
  selectedCountry: any = null; // Track the selected country
  selectedRow: string | null = null; // Track the selected row
  colorMap: { [key: string]: string } = {};
  showExtraRows = false;

  countries: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('assets/json/countries.json').subscribe((data) => {
      this.countries = data;
    });
  }

  showColor(row: string, country: any) {
    this.selectedCountry = country; // Set the selected country
    this.selectedRow = row; // Set the selected row
    this.colorMap[row] = country.color; // Update the colorMap with the selected country's color
  }

  toggleRows() {
    this.showExtraRows = !this.showExtraRows;
  }

  getBoxes(country: any): any[] {
    return Array(country.boxes).fill({});
  }
}
