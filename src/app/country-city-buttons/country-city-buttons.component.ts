import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-country-city-buttons',
  templateUrl: './country-city-buttons.component.html',
  styleUrls: ['./country-city-buttons.component.css'],
})
export class CountryCityButtonsComponent implements OnInit {
  selectedColor: string | null = null;
  colorMap: { [key: string]: string } = {};
  showExtraRows = false;

  countries: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('assets/json/countries.json').subscribe((data) => {
      this.countries = data;
      console.log(this.countries.row1);
    });
  }

  showColor(row: string, color: string) {
    this.selectedColor = row;
    this.colorMap[row] = color;
  }

  toggleRows() {
    this.showExtraRows = !this.showExtraRows;
  }

  getBoxes(country: any): any[] {
    return Array(country.boxes).fill({});
  }
}
