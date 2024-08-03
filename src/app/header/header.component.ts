import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from '../services/logout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuType: String = 'default';
  userName: string = '';
  constructor(private route: Router, private logout: LogoutService) {}

  @Output() openModalEvent = new EventEmitter<void>();

  openModal(event: Event) {
    this.logout.setModalState(true);
    event.preventDefault();
    this.openModalEvent.emit();
  }

  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('user') && val.url.includes('user')) {
          console.warn('in user area');
          if (localStorage.getItem('user')) {
            let userStore = localStorage.getItem('user');
            let userData = userStore && JSON.parse(userStore)[0];
            this.menuType = 'user';
            this.userName = userData.name;
          }
        } else {
          console.warn("outside the user's area");
          this.menuType = 'default';
        }
      }
    });
  }

  logoutFunction() {
    localStorage.removeItem('user');
    this.route.navigate(['/']);
  }

  @Input() isModalOpen: boolean = false;
}
