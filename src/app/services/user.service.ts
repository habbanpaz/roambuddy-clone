import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient ) { }

  userSignup(data: any){
    console.log("service bulali");
    return this.http.post('http://localhost:3000/seller',data)
  }
}
