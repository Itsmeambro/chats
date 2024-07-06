import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/shared/model/login-request';
import { AuthService } from 'src/app/shared/service/auth.service';
import { ToastService } from 'src/app/shared/service/toast.service';

declare var $ : any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData: LoginRequest = new LoginRequest();
  username: string = "";
  password: string = "";


  constructor(private authService: AuthService, private router: Router, private toastr: ToastService) { }

  ngOnInit(): void {
    this.loginData.username = 'alan'
    this.loginData.password = '12345'
  }
  
  tryLogin() {

    const body = 
      {
        username : this.loginData.username,
        password : this.loginData.password,
        grant_type: "password"
      }
    // this.authService.tryLogin(body).subscribe((item: any) => {

    //   console.log(item);

    //   // this.commonServiceProvider.setUserDetailsWithToken(item)
    //   // setTimeout(() => {

    //   //   //newly added
    //   //   this.commonServiceProvider.GetLoggedInUser().subscribe((items: any) => {
    //   //     this.userInfo = items;
    //   //     this.commonServiceProvider.SetUserInfo(items);
    //   //     this.router.navigate(['.'+this.userInfo.homeScreenUrl]);
    //   //   }, error => {
    //   //     console.log(error.message);
    //   //   }, () => {
    //   //   });

    //   //  this.router.navigate(['./home/pshCore/incomingTransactionEnquiry']);
    //     // this.router.navigate(['./home/user/landing']);
    //   });
    
    console.log(this.loginData.username);
    this.authService.tryLogin(body).subscribe(
      (response: any) => {
        this.toastr.showToast("success","Login successful!")
        console.log('Login successful!', response);
        localStorage.setItem('chats-token', response.token);
        this.router.navigate(['/home/chats']);
        console.log('Login successful!', response);
      },
      error => {
        this.toastr.showToast("error","Login failed")
        console.error('Login failed', error);
      }
    )
    console.log(this.loginData.password);



  }

}
function tryLogin() {
  throw new Error('Function not implemented.');
}

