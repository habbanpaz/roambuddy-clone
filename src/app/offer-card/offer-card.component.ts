import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.css'],
})
export class OfferCardComponent implements OnInit {
  constructor(private http: HttpClient) {}

  countries: any = {};

  ngOnInit(): void {
    this.http.get('assets/json/countries.json').subscribe((data) => {
      this.countries = data;
    });
  }
}
