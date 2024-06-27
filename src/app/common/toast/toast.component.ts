import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/shared/service/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  showToast: boolean = false;
  toastMessage = ""
  toastrType = ""

  constructor(private toastr: ToastService) { }

  ngOnInit(): void {
    this.showToast = true;
    this.toastr.status.subscribe((msg: string) => {
      this.toastrType =  localStorage.getItem("toastType") || "";
      if (msg == null) {
        this.showToast = false;
      } else {
        this.showToast = true;
        this.toastMessage = msg
      }
    })
  }
  closeToast() {
    this.showToast = false;
  }

}
