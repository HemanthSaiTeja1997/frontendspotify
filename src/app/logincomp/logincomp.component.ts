import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { SpotifyUser } from '../spotifyuserregistraction/domain/SpotifyUser';

@Component({
  selector: 'app-logincomp',
  templateUrl: './logincomp.component.html',
  styleUrls: ['./logincomp.component.css']
})
export class LogincompComponent implements OnInit {
  User =new SpotifyUser();
  constructor(private loginservice:LoginService){}
  pro(){
    this.loginservice.loginUser(this.User).subscribe(
      {next(x){alert("LOGIN SUCCESSFUL")},
      error(x){alert("ERROR")},
      complete(){alert("COMPLETED")}})
  }
  ngOnInit(): void {}

}
