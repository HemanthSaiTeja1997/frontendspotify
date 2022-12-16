import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listofsongs',
  templateUrl: './listofsongs.component.html',
  styleUrls: ['./listofsongs.component.css']
})
export class ListofsongsComponent {
  log(){
      alert("Songs Added To Playlist !!!")
      this.route.navigateByUrl("welcome")
  }
  Listofsongs = [{"url":"/assets/01aAfterTheBall.mp3","name":"Hemanth"},{"url":"/assets/Hunson Abadeer.mp3","name":"Hemanth"} ];
constructor(private route:Router){}
}
