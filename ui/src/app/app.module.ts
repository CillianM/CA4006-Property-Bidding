import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule, JsonpModule} from '@angular/http';
import {CookieService} from 'angular2-cookie/services/cookies.service';
import {LocalStorageModule} from 'angular-2-local-storage';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './login/login.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {Globals} from './app-properties';
import {UserService} from './services/user-service';
import {PropertyService} from './services/property-service';
import {BidService} from './services/bid-service';
import {PropertyListComponent} from './property-list/property-list.component';
import {PropertyViewComponent} from './property-view/property-view.component';
import {ProfileComponent} from './profile/profile.component';
import {BookingService} from './services/booking-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagenotfoundComponent,
    PropertyListComponent,
    PropertyViewComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    LocalStorageModule.withConfig({
      prefix: 'ca4006',
      storageType: 'localStorage'
  })
  ],
  providers: [
    CookieService,
    PropertyService,
    BidService,
    UserService,
    BookingService,
    Globals
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
