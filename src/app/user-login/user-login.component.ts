import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  
  showLogin = false

  constructor(    ) { }


  ngOnInit(): void {
   }

   openLogin() {
    this.showLogin = true
  }

  openSignup() {
    this.showLogin = false
  }

  signUp(data: string): void {
    console.log(data);
    
    
  }

  login(data: string): void {
    console.log(data);

  }

}
