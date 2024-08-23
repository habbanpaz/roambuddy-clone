import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EsimEnabledDevicesServiceService } from '../services/esim-enabled-devices-service.service';

@Component({
  selector: 'app-unlocked-and-order',
  templateUrl: './unlocked-and-order.component.html',
  styleUrls: ['./unlocked-and-order.component.css'],
})
export class UnlockedAndOrderComponent implements OnInit {
  @Output() openModalEvent = new EventEmitter<void>();

  constructor(private esimEnabledService: EsimEnabledDevicesServiceService) {}

  ngOnInit(): void {}

  openModal(event: Event) {
    this.esimEnabledService.setModalState(true);
    event.preventDefault(); // Prevent the default anchor tag behavior
    this.openModalEvent.emit(); // Emit event to parent component
  }
}
