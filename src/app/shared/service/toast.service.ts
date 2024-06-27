import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  status : BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() { }

  showToast(type: string,msg: string) {
    localStorage.setItem("toastType",type)
    this.status.next(msg); 
  }

}
