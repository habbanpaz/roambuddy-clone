import { Component, OnInit } from '@angular/core';

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

  ngOnInit() {
    this.countries = this.getCountries();
  }


  getCountries(): Country[]  {
    return [
      {
        name: "Afghanistan",
        flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
        duration: "10",
        internet: "30",
        price: "50"
      },
      {
        name: "Al Islands",
        flag: "https://flagcdn.com/ax.svg",
        duration: "5",
        internet: "10",
        price: "30"
      },
      {
        name: "Albania",
        flag: "https://flagcdn.com/al.svg",
        duration: "2",
        internet: "5",
        price: "10"
      },
      {
        name: "Algeria",
        flag: "https://flagcdn.com/dz.svg",
        duration: "1",
        internet: "30",
        price: "50"
      },
      {
        name: "Asamoa",
        flag: "https://flagcdn.com/as.svg",
        duration: "5",
        internet: "10",
        price: "30"
      },
      {
        name: "Andorra",
        flag: "https://flagcdn.com/ad.svg",
        duration: "2",
        internet: "5",
        price: "10"

      },
      {
        name: "Angola",
        flag: "https://flagcdn.com/ao.svg",
        duration: "3",
        internet: "30",
        price: "50"

      },
      {
        name: "Anguilla",
        flag: "https://flagcdn.com/ai.svg",
        duration: "5",
        internet: "10",
        price: "30"

      },
      {
        name: "Antarctica",
        flag: "https://flagcdn.com/aq.svg",
        duration: "12",
        internet: "35",
        price: "70"
      },
      {
        name: "Andrua",
        flag: "https://flagcdn.com/ag.svg",
        duration: "15",
        internet: "30",
        price: "50"
      },
      {
        name: "Argentina",
        flag: "https://flagcdn.com/ar.svg",
        duration: "7",
        internet: "10",
        price: "40"
      },
      {
        name: "Armenia",
        flag: "https://flagcdn.com/am.svg",
        duration: "12",
        internet: "35",
        price: "80"
      }

    ]
  }

  toggleCard(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
