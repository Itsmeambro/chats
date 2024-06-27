import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  public login<T>(url: string,params: any):Observable<T>{
    return this.http.post<T>(url,params);
  }

}
