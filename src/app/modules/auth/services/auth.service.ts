import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registerUser(data:any){
    return this.http.post('https://invoice-api-0.herokuapp.com/user/signup', data)
  }
  loginUser(data:any){
    return this.http.post('https://invoice-api-0.herokuapp.com/user/login', data)
  }
}
