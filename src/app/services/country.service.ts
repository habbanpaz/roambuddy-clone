import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }

  getCountries() {
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

  getAdditionalCountries() {
    return [
      {
        name: "Tuvalu",
        flag: "https://flagcdn.com/tv.svg",
        duration: "5",
        internet: "10",
        price: "30"
      },
      {
        name: "Uganda",
        flag: "https://flagcdn.com/ug.svg",
        duration: "15",
        internet: "30",
        price: "50"
      },
      {
        name: "Ukraine",
        flag: "https://flagcdn.com/ua.svg",
        duration: "10",
        internet: "30",
        price: "50"
      },
      {
        name: "UAE",
        flag: "https://flagcdn.com/ae.svg",
        duration: "5",
        internet: "10",
        price: "30"
      },
      {
        name: "UK",
        flag: "https://flagcdn.com/gb.svg",
        duration: "15",
        internet: "30",
        price: "50"
      },
      {
        name: "US",
        flag: "https://flagcdn.com/us.svg",
        duration: "10",
        internet: "30",
        price: "50"
      },
      {
        name: "Uruguay",
        flag: "https://flagcdn.com/uy.svg",
        duration: "3",
        internet: "30",
        price: "50"
      },
      {
        name: "Uzbekistan",
        flag: "https://flagcdn.com/uz.svg",
        duration: "7",
        internet: "10",
        price: "40"
      },
      {
        name: "Vanuatu",
        flag: "https://flagcdn.com/vu.svg",
        duration: "9",
        internet: "15",
        price: "50"
      },
      {
        name: "Venezuela ",
        flag: "https://flagcdn.com/ve.svg",
        duration: "12",
        internet: "25",
        price: "60"
      },
      {
        name: "Vietnam",
        flag: "https://flagcdn.com/vn.svg",
        duration: "15",
        internet: "30",
        price: "50"
      },
      {
        name: "Wallis",
        flag: "https://flagcdn.com/wf.svg",
        duration: "4",
        internet: "15",
        price: "20"
      },
      {
        name: "Western Sahara",
        flag: "https://flagcdn.com/eh.svg",
        duration: "8",
        internet: "15",
        price: "40"
      },
      {
        name: "Yemen",
        flag: "https://flagcdn.com/ye.svg",
        duration: "12",
        internet: "25",
        price: "60"
      },
      {
        name: "Zambia",
        flag: "https://flagcdn.com/zm.svg",
        duration: "16",
        internet: "30",
        price: "50"
      },
      {
        name: "Zimbabwe",
        flag: "https://flagcdn.com/zw.svg",
        duration: "20",
        internet: "35",
        price: "90"
      },
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
        duration: "7",
        internet: "10",
        price: "40"
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
        duration: "3",
        internet: "30",
        price: "50"
      },
      {
        name: "Antarctica",
        flag: "https://flagcdn.com/aq.svg",
        duration: "12",
        internet: "25",
        price: "60"
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
        duration: "5",
        internet: "10",
        price: "30"
      },
      {
        name: "Tuvalu",
        flag: "https://flagcdn.com/tv.svg",
        duration: "5",
        internet: "10",
        price: "30"
      },
      {
        name: "Uganda",
        flag: "https://flagcdn.com/ug.svg",
        duration: "15",
        internet: "30",
        price: "50"
      },
      {
        name: "Ukraine",
        flag: "https://flagcdn.com/ua.svg",
        duration: "10",
        internet: "30",
        price: "50"
      },
      {
        name: "UAE",
        flag: "https://flagcdn.com/ae.svg",
        duration: "5",
        internet: "10",
        price: "30"
      },
      {
        name: "UK",
        flag: "https://flagcdn.com/gb.svg",
        duration: "15",
        internet: "30",
        price: "50"
      },
      {
        name: "US",
        flag: "https://flagcdn.com/us.svg",
        duration: "10",
        internet: "30",
        price: "50"
      },
      {
        name: "Uruguay",
        flag: "https://flagcdn.com/uy.svg",
        duration: "3",
        internet: "30",
        price: "50"
      },
      {
        name: "Uzbekistan",
        flag: "https://flagcdn.com/uz.svg",
        duration: "7",
        internet: "10",
        price: "40"
      },
      {
        name: "Vanuatu",
        flag: "https://flagcdn.com/vu.svg",
        duration: "8",
        internet: "15",
        price: "40"
      },
      {
        name: "Venezuela ",
        flag: "https://flagcdn.com/ve.svg",
        duration: "12",
        internet: "25",
        price: "60"
      },
      {
        name: "Vietnam",
        flag: "https://flagcdn.com/vn.svg",
        duration: "15",
        internet: "30",
        price: "50"
      },
      {
        name: "Wallis",
        flag: "https://flagcdn.com/wf.svg",
        duration: "4",
        internet: "15",
        price: "20"
      },
      {
        name: "Western Sahara",
        flag: "https://flagcdn.com/eh.svg",
        duration: "8",
        internet: "15",
        price: "40"
      },
      {
        name: "Yemen",
        flag: "https://flagcdn.com/ye.svg",
        duration: "12",
        internet: "25",
        price: "60"
      },
      {
        name: "Zambia",
        flag: "https://flagcdn.com/zm.svg",
        duration: "16",
        internet: "35",
        price: "70"
      },
      {
        name: "Zimbabwe",
        flag: "https://flagcdn.com/zw.svg",
        duration: "20",
        internet: "35",
        price: "90"
      },
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
        duration: "7",
        internet: "10",
        price: "40"
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
        duration: "3",
        internet: "30",
        price: "50"
      },
      {
        name: "Antarctica",
        flag: "https://flagcdn.com/aq.svg",
        duration: "12",
        internet: "25",
        price: "60"
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
        duration: "5",
        internet: "10",
        price: "30"
      },
      {
        name: "Tuvalu",
        flag: "https://flagcdn.com/tv.svg",
        duration: "5",
        internet: "10",
        price: "30"
      },
      {
        name: "Uganda",
        flag: "https://flagcdn.com/ug.svg",
        duration: "15",
        internet: "30",
        price: "50"
      },
      {
        name: "Ukraine",
        flag: "https://flagcdn.com/ua.svg",
        duration: "10",
        internet: "30",
        price: "50"
      },
      {
        name: "UAE",
        flag: "https://flagcdn.com/ae.svg",
        duration: "5",
        internet: "10",
        price: "30"
      },
      {
        name: "UK",
        flag: "https://flagcdn.com/gb.svg",
        duration: "15",
        internet: "30",
        price: "50"
      },
      {
        name: "US",
        flag: "https://flagcdn.com/us.svg",
        duration: "10",
        internet: "30",
        price: "50"
      },
      {
        name: "Uruguay",
        flag: "https://flagcdn.com/uy.svg",
        duration: "3",
        internet: "30",
        price: "50"
      },
      {
        name: "Uzbekistan",
        flag: "https://flagcdn.com/uz.svg",
        duration: "7",
        internet: "10",
        price: "40"
      },
      {
        name: "Vanuatu",
        flag: "https://flagcdn.com/vu.svg",
        duration: "8",
        internet: "15",
        price: "40"
      },
      {
        name: "Venezuela ",
        flag: "https://flagcdn.com/ve.svg",
        duration: "12",
        internet: "25",
        price: "60"
      },
      {
        name: "Vietnam",
        flag: "https://flagcdn.com/vn.svg",
        duration: "15",
        internet: "30",
        price: "50"
      },
      {
        name: "Wallis",
        flag: "https://flagcdn.com/wf.svg",
        duration: "4",
        internet: "15",
        price: "20"
      },
      {
        name: "Western Sahara",
        flag: "https://flagcdn.com/eh.svg",
        duration: "8",
        internet: "15",
        price: "40"
      },
      {
        name: "Yemen",
        flag: "https://flagcdn.com/ye.svg",
        duration: "12",
        internet: "25",
        price: "60"
      },
      {
        name: "Zambia",
        flag: "https://flagcdn.com/zm.svg",
        duration: "16",
        internet: "35",
        price: "70"
      },
      {
        name: "Zimbabwe",
        flag: "https://flagcdn.com/zw.svg",
        duration: "20",
        internet: "35",
        price: "90"
      },
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
        duration: "7",
        internet: "10",
        price: "40"
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
        duration: "3",
        internet: "30",
        price: "50"
      },
      {
        name: "Antarctica",
        flag: "https://flagcdn.com/aq.svg",
        duration: "12",
        internet: "25",
        price: "60"
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
        duration: "5",
        internet: "10",
        price: "30"
      },
      {
        name: "Tuvalu",
        flag: "https://flagcdn.com/tv.svg",
        duration: "5",
        internet: "10",
        price: "30"
      },
      {
        name: "Uganda",
        flag: "https://flagcdn.com/ug.svg",
        duration: "15",
        internet: "30",
        price: "50"
      },
      {
        name: "Ukraine",
        flag: "https://flagcdn.com/ua.svg",
        duration: "10",
        internet: "30",
        price: "50"
      },
      {
        name: "UAE",
        flag: "https://flagcdn.com/ae.svg",
        duration: "5",
        internet: "10",
        price: "30"
      },
      {
        name: "UK",
        flag: "https://flagcdn.com/gb.svg",
        duration: "15",
        internet: "30",
        price: "50"
      },
      {
        name: "US",
        flag: "https://flagcdn.com/us.svg",
        duration: "10",
        internet: "30",
        price: "50"
      },
      {
        name: "Uruguay",
        flag: "https://flagcdn.com/uy.svg",
        duration: "3",
        internet: "30",
        price: "50"
      },
      {
        name: "Uzbekistan",
        flag: "https://flagcdn.com/uz.svg",
        duration: "7",
        internet: "10",
        price: "40"
      },
      {
        name: "Vanuatu",
        flag: "https://flagcdn.com/vu.svg",
        duration: "8",
        internet: "15",
        price: "40"
      },
      {
        name: "Venezuela ",
        flag: "https://flagcdn.com/ve.svg",
        duration: "12",
        internet: "25",
        price: "60"
      },
      {
        name: "Vietnam",
        flag: "https://flagcdn.com/vn.svg",
        duration: "15",
        internet: "30",
        price: "50"
      },
      {
        name: "Wallis",
        flag: "https://flagcdn.com/wf.svg",
        duration: "4",
        internet: "15",
        price: "20"
      },
      {
        name: "Western Sahara",
        flag: "https://flagcdn.com/eh.svg",
        duration: "8",
        internet: "15",
        price: "40"
      },
      {
        name: "Yemen",
        flag: "https://flagcdn.com/ye.svg",
        duration: "12",
        internet: "25",
        price: "60"
      },
      {
        name: "Zambia",
        flag: "https://flagcdn.com/zm.svg",
        duration: "16",
        internet: "35",
        price: "70"
      },
      {
        name: "Zimbabwe",
        flag: "https://flagcdn.com/zw.svg",
        duration: "20",
        internet: "35",
        price: "90"
      },
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
        duration: "7",
        internet: "10",
        price: "40"
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
        duration: "3",
        internet: "30",
        price: "50"
      },
      {
        name: "Antarctica",
        flag: "https://flagcdn.com/aq.svg",
        duration: "12",
        internet: "25",
        price: "60"
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
        duration: "5",
        internet: "10",
        price: "30"
      },
      {
        name: "Tuvalu",
        flag: "https://flagcdn.com/tv.svg",
        duration: "5",
        internet: "10",
        price: "30"
      },
      {
        name: "Uganda",
        flag: "https://flagcdn.com/ug.svg",
        duration: "15",
        internet: "30",
        price: "50"
      },
      {
        name: "Ukraine",
        flag: "https://flagcdn.com/ua.svg",
        duration: "10",
        internet: "30",
        price: "50"
      },
      {
        name: "UAE",
        flag: "https://flagcdn.com/ae.svg",
        duration: "5",
        internet: "10",
        price: "30"
      },
      {
        name: "UK",
        flag: "https://flagcdn.com/gb.svg",
        duration: "15",
        internet: "30",
        price: "50"
      },
      {
        name: "US",
        flag: "https://flagcdn.com/us.svg",
        duration: "10",
        internet: "30",
        price: "50"
      },
      {
        name: "Uruguay",
        flag: "https://flagcdn.com/uy.svg",
        duration: "3",
        internet: "30",
        price: "50"
      },
      {
        name: "Uzbekistan",
        flag: "https://flagcdn.com/uz.svg",
        duration: "7",
        internet: "10",
        price: "40"
      },
      {
        name: "Vanuatu",
        flag: "https://flagcdn.com/vu.svg",
        duration: "8",
        internet: "15",
        price: "40"
      },
      {
        name: "Venezuela ",
        flag: "https://flagcdn.com/ve.svg",
        duration: "12",
        internet: "25",
        price: "60"
      },
      {
        name: "Vietnam",
        flag: "https://flagcdn.com/vn.svg",
        duration: "15",
        internet: "30",
        price: "50"
      },
      {
        name: "Wallis",
        flag: "https://flagcdn.com/wf.svg",
        duration: "4",
        internet: "15",
        price: "20"
      },
      {
        name: "Western Sahara",
        flag: "https://flagcdn.com/eh.svg",
        duration: "8",
        internet: "15",
        price: "40"
      },
      {
        name: "Yemen",
        flag: "https://flagcdn.com/ye.svg",
        duration: "12",
        internet: "25",
        price: "60"
      },
      {
        name: "Zambia",
        flag: "https://flagcdn.com/zm.svg",
        duration: "16",
        internet: "35",
        price: "70"
      },
      {
        name: "Zimbabwe",
        flag: "https://flagcdn.com/zw.svg",
        duration: "20",
        internet: "35",
        price: "90"
      },
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
        duration: "7",
        internet: "10",
        price: "40"
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
        duration: "3",
        internet: "30",
        price: "50"
      },
      {
        name: "Antarctica",
        flag: "https://flagcdn.com/aq.svg",
        duration: "12",
        internet: "25",
        price: "60"
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
        duration: "5",
        internet: "10",
        price: "30"
      },
      {
        name: "Tuvalu",
        flag: "https://flagcdn.com/tv.svg",
        duration: "5",
        internet: "10",
        price: "30"
      },
      {
        name: "Uganda",
        flag: "https://flagcdn.com/ug.svg",
        duration: "15",
        internet: "30",
        price: "50"
      },
      {
        name: "Ukraine",
        flag: "https://flagcdn.com/ua.svg",
        duration: "10",
        internet: "30",
        price: "50"
      },
      {
        name: "UAE",
        flag: "https://flagcdn.com/ae.svg",
        duration: "5",
        internet: "10",
        price: "30"
      },
      {
        name: "UK",
        flag: "https://flagcdn.com/gb.svg",
        duration: "15",
        internet: "30",
        price: "50"
      },
      {
        name: "US",
        flag: "https://flagcdn.com/us.svg",
        duration: "10",
        internet: "30",
        price: "50"
      },
      {
        name: "Uruguay",
        flag: "https://flagcdn.com/uy.svg",
        duration: "3",
        internet: "30",
        price: "50"
      },
      {
        name: "Uzbekistan",
        flag: "https://flagcdn.com/uz.svg",
        duration: "7",
        internet: "10",
        price: "40"
      },
      {
        name: "Vanuatu",
        flag: "https://flagcdn.com/vu.svg",
        duration: "8",
        internet: "15",
        price: "40"
      },
      {
        name: "Venezuela ",
        flag: "https://flagcdn.com/ve.svg",
        duration: "12",
        internet: "25",
        price: "60"
      },
      {
        name: "Vietnam",
        flag: "https://flagcdn.com/vn.svg",
        duration: "15",
        internet: "30",
        price: "50"
      },
      {
        name: "Wallis",
        flag: "https://flagcdn.com/wf.svg",
        duration: "4",
        internet: "15",
        price: "20"
      },
      {
        name: "Western Sahara",
        flag: "https://flagcdn.com/eh.svg",
        duration: "8",
        internet: "15",
        price: "40"
      },
      {
        name: "Yemen",
        flag: "https://flagcdn.com/ye.svg",
        duration: "12",
        internet: "25",
        price: "60"
      },
      {
        name: "Zambia",
        flag: "https://flagcdn.com/zm.svg",
        duration: "16",
        internet: "35",
        price: "70"
      },
      {
        name: "Zimbabwe",
        flag: "https://flagcdn.com/zw.svg",
        duration: "20",
        internet: "35",
        price: "80"
      },
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
        duration: "7",
        internet: "10",
        price: "40"
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
        duration: "3",
        internet: "30",
        price: "50"
      },
      {
        name: "Antarctica",
        flag: "https://flagcdn.com/aq.svg",
        duration: "12",
        internet: "25",
        price: "60"
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
        duration: "5",
        internet: "10",
        price: "30"
      },
      {
        name: "Tuvalu",
        flag: "https://flagcdn.com/tv.svg",
        duration: "5",
        internet: "10",
        price: "30"
      },
      {
        name: "Uganda",
        flag: "https://flagcdn.com/ug.svg",
        duration: "15",
        internet: "30",
        price: "50"
      },
      {
        name: "Ukraine",
        flag: "https://flagcdn.com/ua.svg",
        duration: "10",
        internet: "30",
        price: "50"
      },
      {
        name: "UAE",
        flag: "https://flagcdn.com/ae.svg",
        duration: "5",
        internet: "10",
        price: "30"
      },
      {
        name: "UK",
        flag: "https://flagcdn.com/gb.svg",
        duration: "15",
        internet: "30",
        price: "50"
      },
      {
        name: "US",
        flag: "https://flagcdn.com/us.svg",
        duration: "10",
        internet: "30",
        price: "50"
      },
      {
        name: "Uruguay",
        flag: "https://flagcdn.com/uy.svg",
        duration: "3",
        internet: "30",
        price: "50"
      },
      {
        name: "Uzbekistan",
        flag: "https://flagcdn.com/uz.svg",
        duration: "7",
        internet: "10",
        price: "40"
      },
      {
        name: "Vanuatu",
        flag: "https://flagcdn.com/vu.svg",
        duration: "8",
        internet: "15",
        price: "40"
      },
      {
        name: "Venezuela ",
        flag: "https://flagcdn.com/ve.svg",
        duration: "12",
        internet: "25",
        price: "60"
      },
      {
        name: "Vietnam",
        flag: "https://flagcdn.com/vn.svg",
        duration: "15",
        internet: "30",
        price: "50"
      },
      {
        name: "Wallis",
        flag: "https://flagcdn.com/wf.svg",
        duration: "4",
        internet: "15",
        price: "20"
      },
      {
        name: "Western Sahara",
        flag: "https://flagcdn.com/eh.svg",
        duration: "8",
        internet: "15",
        price: "40"
      },
      {
        name: "Yemen",
        flag: "https://flagcdn.com/ye.svg",
        duration: "12",
        internet: "25",
        price: "60"
      },
      {
        name: "Zambia",
        flag: "https://flagcdn.com/zm.svg",
        duration: "16",
        internet: "30",
        price: "80"
      },
      {
        name: "Zimbabwe",
        flag: "https://flagcdn.com/zw.svg",
        duration: "20",
        internet: "35",
        price: "90"
      },
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
        duration: "7",
        internet: "10",
        price: "40"
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
        duration: "3",
        internet: "30",
        price: "50"
      },
      {
        name: "Antarctica",
        flag: "https://flagcdn.com/aq.svg",
        duration: "12",
        internet: "25",
        price: "60"
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
        duration: "5",
        internet: "10",
        price: "30"
      }

    ]
  }

}
