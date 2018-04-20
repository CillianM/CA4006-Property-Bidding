import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LocalStorageService} from 'angular-2-local-storage';
import {UserService} from '../services/user-service';
import {PropertyService} from '../services/property-service';
import {Globals} from '../app-properties';
import {BidService} from '../services/bid-service';
import {BookingService} from '../services/booking-service';
import {Booking} from '../models/booking';
import {Bid} from '../models/bid';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css',
    '../app.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private localStorageService: LocalStorageService,
    private userService: UserService,
    private propertyService: PropertyService,
    private bidService: BidService,
    private bookingService: BookingService,
    private globals: Globals) {
  }

  propertyId: string
  userToken: string;
  userName: string;
  bidList: Bid[];
  bookingList: Booking[];

  logoutUser() {
    this.userService.logoutUser(this.userName, this.userToken)
      .subscribe(
        returnedToken => {
          console.log(returnedToken)
          this.localStorageService.clearAll();
          window.location.href = "/ui/property"
        });
    err => console.log(err);
  }

  getBookings() {
    this.bookingService.getUserBookings(this.userName, this.userToken)
      .subscribe(
        returnedBookings => {
          console.log(returnedBookings)
          this.bookingList = returnedBookings;
        });
    err => console.log(err);
  }

  getBids() {
    this.bidService.getUserBids(this.userName, this.userToken)
      .subscribe(
        returnedBids => {
          console.log(returnedBids)
          this.bidList = returnedBids;
        });
    err => console.log(err);
  }

  ngOnInit() {
    this.propertyId = this.route.snapshot.paramMap.get('property');
    this.userToken = this.localStorageService.get("token");
    this.userName = this.localStorageService.get("user");
    console.log(this.propertyId)
    this.getBids();
    this.getBookings();

    /*TODO
    Add header to property view and list pages (includes logout button) [Bidding Platform---------------------------------------------Logout]
    Add method to get this properties data
    Add method to get this properties bids
      This can be messed around with filter-wise (my bids then a list of the rest of the bids including mine)
    Add create bid method
    Add websocket to get current bids from other users and add to page
    Add countdown on bids somewhere on the page
    */
  }

}
