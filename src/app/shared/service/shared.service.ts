import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private httpService: HttpService) { }

  trySignUp(ld : any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpService.signUp("http://localhost:8890/createUser",ld);


  }
}
