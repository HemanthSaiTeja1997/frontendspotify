import { Component } from '@angular/core';

@Component({
  selector: 'app-listofsongs',
  templateUrl: './listofsongs.component.html',
  styleUrls: ['./listofsongs.component.css']
})
export class ListofsongsComponent {
  Listofsongs: string[] = ['1.Despacito', '2.Candle_in_the_Wind', '2.In_the_Summertime', '4.Silent_Nigh', '5.Rock_Around_the_Clock','6.I_Will_Always_Love_You','7.Something_Just_Like_This','8.As_It_Was','9.Calm_Down','10.Anti_Hero'];
}
