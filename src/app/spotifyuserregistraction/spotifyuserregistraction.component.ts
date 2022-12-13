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
    })




 obj=new SpotifyUser()
 fun1(){
  this.login.storeData(this.obj).subscribe(
    {next(x){alert("Spotify User Data Added")},
     error(x){alert("Error")},
     complete(){alert("FINISHED REGISTRATION")}
  
  }
  )

 }
 
 
constructor(private login:LoginService){}
 
  ngOnInit(): void {
   
  }

}
