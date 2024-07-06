import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/shared/model/login-request';
import { NewUser } from 'src/app/shared/model/new-user';
import { AuthService } from 'src/app/shared/service/auth.service';
import { SharedService } from 'src/app/shared/service/shared.service';
import { ToastService } from 'src/app/shared/service/toast.service';


declare var $: any;
declare var jQuery: any; 
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  loginData: LoginRequest = new LoginRequest();
  userData : NewUser = new NewUser();
  username: string = "";
  password: string = "";


  constructor(private authService: SharedService, private router: Router, private toastr: ToastService) { }

  ngOnInit(): void {
    this.loginData.username = 'john'
    this.loginData.password = '123'
  }
  
  trySignUp() {
    
    // this.checkFields(this.userData)
    const body = 
      {
        username : this.userData.username,
        password : this.userData.password,
        fullname : this.userData.fullname,
        email : this.userData.email,
        phone : this.userData.phone,
        dob : this.userData.dob,
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
    
    console.log(this.userData.username);


    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // const body = JSON.stringify({ username, password });
    
    // return this.http.post<any>(`${this.baseUrl}/auth/login`, body, { headers });
    // return this.httpService.login("http://localhost:8080/auth/login",ld);


    this.authService.trySignUp(body).subscribe(
      (response: any) => {
        this.toastr.showToast("success","Login successful!")
        console.log('Login successful!', response);
        localStorage.setItem('chats-token', response.token);
        this.router.navigate(['/login']);

      },
      error => {
        this.toastr.showToast("error","Login failed")
        console.error('Login failed', error);
      }
    )
    console.log(this.loginData.password);
  }

  checkFields(){

    var isValid: boolean = true;

    const curDate = new Date();
    const tenYearsAgo = new Date(curDate.setFullYear(curDate.getFullYear() - 10))

    if(this.userData.fullname==""){
      $("#signFullname").css("border","1px red solid")
      isValid = false;
    }else{
      $("#signFullname").css("border","none")
    }

    if(this.userData.username==""){
      $("#signUsername").css("border","1px red solid")
      isValid = false;

    }else{
      $("#signUsername").css("border","none")
    }

    if(this.userData.email==""){
      $("#signEmail").css("border","1px red solid")
      isValid = false;

    }else{
      $("#signEmail").css("border","none")
    }

    if(this.userData.phone==""){
      $("#signPhone").css("border","1px red solid")
      isValid = false;

    }else{
      $("#signPhone").css("border","none")
    }

    if(this.userData.dob >  new Date(curDate.setFullYear(curDate.getFullYear() - 10))){
      $("#signDob").css("border","1px red solid")
      isValid = false;

    }else{
      $("#signDob").css("border","none")
    }

    if(this.userData.password==""){
      $("#signPassword").css("border","1px red solid")
      isValid = false;

    }else{
      $("#signPassword").css("border","none")
    }

    if(isValid){
      this.trySignUp()
    }

  }
}
