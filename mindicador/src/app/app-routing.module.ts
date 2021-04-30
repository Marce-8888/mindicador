import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './webComponents/home/home.component';
import { DetailsComponent } from './webComponents/details/details.component';
import { NavBarComponent } from './webComponents/nav-bar/nav-bar.component'

const routes: Routes = [
 {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
{
  path: 'home',
  component:HomeComponent
},
{
  path: 'details/:id',
  component: DetailsComponent
},
{
  path: 'navBar',
  component: NavBarComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
