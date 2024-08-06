import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login, SignUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  isUserLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}

  userSignup(data: SignUp) {
    this.http
      .post('http://localhost:3000/seller', data, { observe: 'response' })
      .subscribe((result) => {
        if (result) {
          localStorage.setItem('user', JSON.stringify(result.body));
          this.isUserLoggedIn.next(true); 
          this.router.navigate(['/']);
        }
      });
  }

  reloadUser() {
    if (localStorage.getItem('user')) {
      this.isUserLoggedIn.next(true);
      // this.router.navigate(['user-home']);
    }
  }

  userLogin(data: Login) {
    this.http
      .get(
        `http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
        {
          observe: 'response',
        }
      )
      .subscribe((result: any) => {
        console.warn(result);
        if (result && result.body && result.body.length) {
          console.warn('user logged in');
          localStorage.setItem('user', JSON.stringify(result.body));
          this.isUserLoggedIn.next(true); 
          this.router.navigate(['/']);
        } else {
          console.warn('login failed');
        }
      });
  }

  logout() {
    localStorage.removeItem('user');
    this.isUserLoggedIn.next(false);
    this.router.navigate(['/']);
  }
}
