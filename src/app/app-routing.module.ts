import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogincompComponent } from './logincomp/logincomp.component';
import { SpotifyuserregistractionComponent } from './spotifyuserregistraction/spotifyuserregistraction.component';

const routes: Routes = [
  {path:"spotifyregister",
   component:SpotifyuserregistractionComponent
},
{
  path:"Userlogin",
  component:LogincompComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
