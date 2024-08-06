


// logout-modal.component.ts
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-logout-modal',
  templateUrl: './logout-modal.component.html',
  styleUrls: ['./logout-modal.component.css']

})
export class LogoutModalComponent implements OnInit {
  constructor(public activeModal: NgbActiveModal, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  logoutFunction2() {
    this.userService.logout();
    this.activeModal.close();
  }
}
