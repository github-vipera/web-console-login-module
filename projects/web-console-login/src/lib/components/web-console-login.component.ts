import { Component, OnInit } from '@angular/core';
import { AuthService } from 'web-console-core'

@Component({
  selector: 'vip-web-console-login',
  templateUrl: './web-console-login.component.html',
  styleUrls: ['./web-console-login.component.css']
})
export class WebConsoleLoginComponent implements OnInit {

  userName = '';
  userPwd = '';

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  onLoginClick() {
    this.authService.login({ userName: this.userName, password: this.userPwd }).subscribe(()=>{
      console.log("OK")
    }, (error)=>{
      console.log("KO: ", error)
      alert("Login Error: " + error.message);
    });
    
  }

}
