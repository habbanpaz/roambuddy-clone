import { Component } from '@angular/core';
import { EsimEnabledDevicesServiceService } from './services/esim-enabled-devices-service.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isModalOpen: boolean = false
  showHeaderFooter: boolean = true;

  constructor(private modalStateService: EsimEnabledDevicesServiceService, private router: Router, private route: ActivatedRoute) {
    this.modalStateService.modalState$.subscribe(state => {
      this.isModalOpen = state;
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const routeData = this.route.firstChild?.snapshot.data;
        this.showHeaderFooter = routeData?.['showHeaderFooter'] !== false;
      }
    });
  }
  title = 'roambuddyClone';
}
