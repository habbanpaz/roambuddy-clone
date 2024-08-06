import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LogoutModalComponent } from '../logout-modal/logout-modal.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuType: String = 'default';
  userName: string = '';
  constructor(private route: Router, private modalService: NgbModal, private user: UserService) {}

  @Output() openModalEvent = new EventEmitter<void>();

  // openModal(event: Event) {
  //   this.logout.setModalState(true);
  //   event.preventDefault();
  //   this.openModalEvent.emit();
  // }

  // ngOnInit(): void {
  //   this.route.events.subscribe((val: any) => {
  //     if (val.url) {
  //       if (localStorage.getItem('user') && val.url.includes('user')) {
  //         console.warn('in user area');
  //         if (localStorage.getItem('user')) {
  //           let userStore = localStorage.getItem('user');
  //           let userData = userStore && JSON.parse(userStore)[0];
  //           this.menuType = 'user';
  //           this.userName = userData.name;
  //         }
  //       } else {
  //         console.warn("outside the user's area");
  //         this.menuType = 'default';
  //       }
  //     }
  //   });
  // }

  ngOnInit(): void {
    this.user.isUserLoggedIn.subscribe((loggedIn) => {
      if (loggedIn && localStorage.getItem('user')) {
        let userStore = localStorage.getItem('user');
        let userData = userStore && JSON.parse(userStore)[0];
        this.menuType = 'user';
        this.userName = userData.name;
      } else {
        this.menuType = 'default';
      }
    });

    this.route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (localStorage.getItem('user')) {
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore)[0];
          this.menuType = 'user';
          this.userName = userData.name;
        } else {
          this.menuType = 'default';
        }
      }
    });
  }

  logoutFunction() {
    this.modalService.open(LogoutModalComponent);
  }

  @Input() isModalOpen: boolean = false;
}
