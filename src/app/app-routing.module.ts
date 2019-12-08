import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/pending-requests/home',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'home',
  //   redirectTo: '/pending-requests/home',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'authentication',
  //   loadChildren: './authentication/authentication.module#AuthenticationModule',
  // },
  {path: 'home', loadChildren: './home/home.module#HomeModule'},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
