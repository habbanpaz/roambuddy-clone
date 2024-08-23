import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { EsimEnabledDevicesServiceService } from '../services/esim-enabled-devices-service.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
})
export class OfferComponent implements OnInit {
  @Output() openModalEvent = new EventEmitter<void>();

  constructor(private esimEnabledService: EsimEnabledDevicesServiceService) {}

  ngOnInit(): void {}

  openModal(event: Event) {
    this.esimEnabledService.setModalState(true);

    event.preventDefault(); // Prevent the default anchor tag behavior
    this.openModalEvent.emit(); // Emit event to parent component
  }

  offer = {
    country: 'Jordan',
    data: '3 GB',
    validity: '30 Days',
    price: '$15',
    total: '$15',
  };

  panels = [
    {
      title: 'Which Devices are e-sim capable?',
      content:
        'iPhone XR, XS, 11, 12, 13 and SE 2020 series; Google Pixel 3 and later models; Samsung S20 and Note 20 series, Fold and Flip; Huawei P40 and P40 pro; Motorola Razr; iPads:10.2, Air, Mini 2019, Pro 11, Pro 12.9. Smartwatches with eSIM capability (except Apple Watch) are also supported',
      isOpen: false,
    },

    {
      title: 'Can I use my physical SIM along with the eSIM?',
      content:
        'Yes! With dual-SIM functionality you can have both your physical SIM and eSIM active at the same time.',
      isOpen: false,
    },
  ];

  togglePanel(index: number) {
    this.panels[index].isOpen = !this.panels[index].isOpen;
  }
}
