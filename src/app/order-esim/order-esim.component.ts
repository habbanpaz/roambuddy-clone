import {
  Component,
  OnInit,
  Renderer2,
  Output,
  EventEmitter,
} from '@angular/core';
import { EsimEnabledDevicesServiceService } from '../services/esim-enabled-devices-service.service';

@Component({
  selector: 'app-order-esim',
  templateUrl: './order-esim.component.html',
  styleUrls: ['./order-esim.component.css'],
})
export class OrderEsimComponent implements OnInit {

  selectedTab: number = 1;
  @Output() openModalEvent = new EventEmitter<void>();

  openModal(event: Event) {
    this.esimEnabledService.setModalState(true);

    event.preventDefault(); // Prevent the default anchor tag behavior
    this.openModalEvent.emit(); // Emit event to parent component
  }

  selectTab(tabNumber: number) {
    this.selectedTab = tabNumber;
  }

  constructor(

    private esimEnabledService: EsimEnabledDevicesServiceService
  ) {}

  ngOnInit(): void {
  }

  
}
