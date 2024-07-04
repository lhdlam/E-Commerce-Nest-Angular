import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // apiUrl = 'http://localhost:3001'
  apiUrl = environment.apiUrl


  constructor(private http: HttpClient) { }

  userLogIn (user: any) {
    return this.http.post(this.apiUrl + '/auth/login', user)
  }

  signupUser(user: any) {
    return this.http.post(this.apiUrl + '/users', user)
  }

  getAuthToken() {
    return window.localStorage.getItem('token')
  }

  verifiedUser(token: any) {
    return this.http.get(this.apiUrl + '/users/auth/' + token)
  }
}
