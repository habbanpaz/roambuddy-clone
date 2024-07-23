import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  currentHeight = 400;

  constructor() { }

  ngOnInit(): void {
  }

  selectedTab: number = 1;

  selectTab(tabNumber: number) {
    this.selectedTab = tabNumber;
  }

}
