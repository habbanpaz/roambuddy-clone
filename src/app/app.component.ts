import { Component } from '@angular/core';
import { EsimEnabledDevicesServiceService } from './services/esim-enabled-devices-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isModalOpen: boolean = false

  constructor(private modalStateService: EsimEnabledDevicesServiceService) {
    this.modalStateService.modalState$.subscribe(state => {
      this.isModalOpen = state;
    });
  }
  title = 'roambuddyClone';
}
