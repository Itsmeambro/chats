import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { LoginRequest } from '../model/login-request';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService: HttpService) {}

  tryLogin(ld : any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // const body = JSON.stringify({ username, password });
    
    // return this.http.post<any>(`${this.baseUrl}/auth/login`, body, { headers });
    return this.httpService.login("http://localhost:8890/auth/login",ld);


  }

  isLoggedIn () {
    localStorage.getItem("chats")
    return true;
  }
}
