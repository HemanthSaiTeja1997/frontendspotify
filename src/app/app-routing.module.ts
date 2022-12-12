import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpotifyuserregistractionComponent } from './spotifyuserregistraction/spotifyuserregistraction.component';

const routes: Routes = [
  {path:"spotifyregister",
   component:SpotifyuserregistractionComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
