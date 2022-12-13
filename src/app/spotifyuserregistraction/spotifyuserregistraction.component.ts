import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  email: new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(5)]),
  password: new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(5)]),
  playList: new FormGroup({
    pname: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]),
    psongs: new FormGroup({
      sid: new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(4)]),
      songurl:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(12)])
    })
  })
})
 
 
 
 

 
  ngOnInit(): void {
   
  }

}
