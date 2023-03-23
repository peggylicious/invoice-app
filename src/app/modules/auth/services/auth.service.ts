import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) { }
  isAuthenticated(): boolean {
    const token:any = localStorage.getItem('access_token');
    // Check if token is expired and return
    // true or false
    console.log("Helper is ", !this.jwtHelper.isTokenExpired(token))
    return !this.jwtHelper.isTokenExpired(token);
    // return false;
  }
  registerUser(data:any){
    // return this.http.post('https://invoice-api-0.herokuapp.com/user/signup', data)
    
    return this.http.post('http://localhost:300/user/signup', data) // For local testing purposes
  }
  loginUser(data:any){
    return this.http.post('http://localhost:3000/user/login', data) // For local testing purposes
    // return this.http.post('https://invoice-api-0.herokuapp.com/user/login', data)
  }
}
