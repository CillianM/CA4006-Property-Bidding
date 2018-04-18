import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent} from './pagenotfound/pagenotfound.component'; 
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyViewComponent } from './property-view/property-view.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'property', component: PropertyListComponent },
  {
    path: 'property/:property',
    component: PropertyViewComponent
  },
  { 
    path: '',
    redirectTo: '/login',
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