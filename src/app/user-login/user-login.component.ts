import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login, SignUp } from '../data-type';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  showLogin = false;
  authError: string = '';

  constructor(private user: UserService, private route: Router) {}

  ngOnInit(): void {
    this.user.reloadUser();
  }

  openLogin() {
    this.showLogin = true;
  }

  openSignup() {
    this.showLogin = false;
  }

  signUp(data: SignUp): void {
    this.user.userSignup(data);
  }

  login(data: Login): void {
    this.user.userLogin(data);
  }
}
