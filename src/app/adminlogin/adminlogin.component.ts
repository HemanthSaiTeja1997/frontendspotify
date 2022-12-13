import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  username?:string=''
  password?:string=''
  login(){
    if(this.username==='admin'&&this.password==='123')
    {
      this.loginserver.isLoginSuccess=true;
      alert("LOGIN SUCCESS")
      
      
    }
    else{
      this.loginserver.isLoginSuccess=false
      alert("LOGIN FAILED")
    }
  }

constructor(private loginserver:LoginService) { }

  ngOnInit(): void {
  }
}
