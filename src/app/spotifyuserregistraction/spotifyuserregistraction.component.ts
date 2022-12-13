import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { SpotifyUser } from './domain/SpotifyUser';

@Component({
  selector: 'app-spotifyuserregistraction',
  templateUrl: './spotifyuserregistraction.component.html',
  styleUrls: ['./spotifyuserregistraction.component.css']
})
export class SpotifyuserregistractionComponent implements OnInit  {
  
  sportifyform = new FormGroup({
  uid: new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(5)]),
  uname: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(15)]),
  mnumber: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(12)]),
  email: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(15)]),
  password: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]),
    pname: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]),
      sid: new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(3)]),
      songurl:new FormControl('',[Validators.required,Validators.minLength(20),Validators.maxLength(100)])
    });
    get uid(){return this.sportifyform.get('uid');}
    get uname(){return this.sportifyform.get('uname');}
    get mnumber(){return this.sportifyform.get('mnumber');}
    get email(){return this.sportifyform.get('email');}
    get password(){return this.sportifyform.get('password');}
    get pname(){return this.sportifyform.get('pname');}
    get sid(){return this.sportifyform.get('sid');}
    get songurl(){return this.sportifyform.get('songurl');}





 obj=new SpotifyUser()
 fun1(){
  this.login.storeData(this.sportifyform.value).subscribe(
    {next(x){alert("Spotify User Data Added")},
     error(x){alert("Error"+x)},
     complete(){alert("FINISHED REGISTRATION")}
  
  }
  )

 }

 
 
 
constructor(private login:LoginService){}
 
  ngOnInit(): void {
   
  }

}
