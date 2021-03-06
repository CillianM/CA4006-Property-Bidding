import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {PropertyListComponent} from './property-list/property-list.component';
import {PropertyViewComponent} from './property-view/property-view.component';
import {ProfileComponent} from './profile/profile.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'property', component: PropertyListComponent },
  {path: 'profile', component: ProfileComponent},
  {
    path: 'property/:property',
    component: PropertyViewComponent
  },
  {
    path: '',
    redirectTo: '/property',
    pathMatch: 'full'
  },
  { path: '**', component: PagenotfoundComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
