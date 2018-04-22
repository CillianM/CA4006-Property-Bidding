import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LocalStorageService} from 'angular-2-local-storage';
import {UserService} from '../services/user-service';
import {PropertyService} from '../services/property-service';
import {Globals} from '../app-properties';
import {Property} from "../models/property";
import {BidService} from "../services/bid-service";
import {Bid, BidInterface} from "../models/bid";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookingService} from '../services/booking-service';
import {Booking, BookingInterface} from '../models/booking';

@Component({
  selector: 'app-property-view',
  templateUrl: './property-view.component.html',
  styleUrls: ['./property-view.component.css',
    '../app.component.css']
})
export class PropertyViewComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private localStorageService: LocalStorageService,
    private userService: UserService,
    private propertyService: PropertyService,
    private bidService: BidService,
    private bookingService: BookingService,
    private globals: Globals) {
  }

  userToken: string;
  userName: string;
  propertyId: string;
  property: Property;
  bidList: Bid[];
  bookingList: Booking[];
  bidForm: FormGroup;
  bookingForm: FormGroup;
  createdBid: Bid;
  public events: any[] = [];
  public submitted: boolean;
  public bookingError: boolean;
  public error: boolean;
  public ready: boolean;
  highestBid: Bid;

  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  timer;


  visible = false;
  visibleAnimate = false;
  visibleBooking = false;
  visibleBookingAnimate = false;

  show(): void {
    this.submitted = false;
    this.error = false;
    if (this.userToken == null && this.userName == null) {
      window.location.href = this.globals.uiPath + "login";
    }
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  showBooking(): void {
    this.submitted = false;
    this.error = false;
    if (this.userToken == null && this.userName == null) {
      window.location.href = this.globals.uiPath + "login";
    }
    this.visibleBooking = true;
    setTimeout(() => this.visibleBookingAnimate = true, 100);
  }

  hideBooking(): void {
    this.visibleBookingAnimate = false;
    setTimeout(() => this.visibleBooking = false, 300);
  }

  onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
      this.hideBooking();
    }
  }

  getProperty() {
    this.propertyService.getProperty(this.propertyId)
      .subscribe(
        returnedProperty => {
          console.log(returnedProperty);
          this.property = returnedProperty,
            console.log(returnedProperty)
          this.setTimer(returnedProperty.biddingExpiry);
        });
    err => console.log(err);
  }

  getPropertyBids() {
    this.bidService.getPropertyBids(this.propertyId, this.userName, this.userToken)
      .subscribe(
        returnedBidList => {
          this.bidList = returnedBidList.sort(this.compare)
          this.findHighestBidder();
          console.log(returnedBidList)
        });
    err => console.log(err);
  }

  getPropertyBookings() {
    this.bookingService.getPropertyBookings(this.propertyId, this.userName, this.userToken)
      .subscribe(
        returnedBookingList => {
          this.bookingList = returnedBookingList.sort(this.compareBooking)
          console.log(returnedBookingList)
        });
    err => console.log(err);
  }

  subscribeToFormChanges() {
    const myFormStatusChanges$ = this.bidForm.statusChanges;
    const myFormValueChanges$ = this.bidForm.valueChanges;

    myFormStatusChanges$.subscribe(x => this.events.push({event: 'STATUS_CHANGED', object: x}));
    myFormValueChanges$.subscribe(x => this.events.push({event: 'VALUE_CHANGED', object: x}));
  }

  subscribeToBookingFormChanges() {
    const myFormStatusChanges$ = this.bookingForm.statusChanges;
    const myFormValueChanges$ = this.bookingForm.valueChanges;

    myFormStatusChanges$.subscribe(x => this.events.push({event: 'STATUS_CHANGED', object: x}));
    myFormValueChanges$.subscribe(x => this.events.push({event: 'VALUE_CHANGED', object: x}));
  }

  deleteBid(index: number) {
    console.log(index)
    if (this.bidList[index].userId == this.userName) {
      this.bidService.deleteBid(this.propertyId, this.userName, this.userToken)
        .subscribe(
          returnedBid => {
            console.log(returnedBid);
          });
      err => console.log(err);
    }
  }

  deleteBooking(index: number) {
    console.log(index)
    if (this.bookingList[index].userId == this.userName) {
      this.bookingService.deleteBooking(this.bookingList[index].id, this.userName, this.userToken)
        .subscribe(
          returnedBid => {
            console.log(returnedBid);
            this.bookingList.splice(index);
          });
      err => console.log(err);
    }
  }

  save(model: BidInterface, isValid: boolean) {
    console.log(model, isValid);
    let bidBoolean = this.bidList.length == 0 && model.value >= this.property.price;
    if (!bidBoolean) {
      console.log("Not first bid")
      bidBoolean = model.value > this.highestBid.value
    }
    if (isValid && bidBoolean) {
      this.error = false;
      let newBid = new Bid();
      newBid.userId = this.userName;
      newBid.propertyId = this.propertyId;
      newBid.value = model.value;
      newBid.createdDate = new Date();
      this.submitted = true;
      this.bidService.createBid(newBid, this.userName, this.userToken)
        .subscribe(
          returnedBid => {
            this.createdBid = returnedBid;
            console.log(returnedBid);
            this.hide();
          });
      err => console.log(err);
    }
    else {
      this.error = true;
    }
  }

  saveBooking(model: BookingInterface, isValid: boolean) {
    console.log(model, isValid);
    let bookingDate = new Date(model.bookingTime);
    if (isValid && this.validBooking(bookingDate)) {
      this.bookingError = false;
      let newBooking = new Booking();
      newBooking.userId = this.userName;
      newBooking.propertyId = this.propertyId;
      newBooking.bookingTime = bookingDate;
      newBooking.id = "";
      this.submitted = true;
      this.bookingService.createBooking(newBooking, this.userName, this.userToken)
        .subscribe(
          returnedBooking => {
            this.bookingList.push(newBooking);
            this.bookingList.sort(this.compareBooking);
            console.log(returnedBooking);
            this.hideBooking();
          });
      err => console.log(err);
    }
    else {
      this.bookingError = true;
    }
  }

  validBooking(potentialBooking: Date) {
    console.log(potentialBooking)
    let propertyDate = new Date(this.property.biddingExpiry);
    console.log(propertyDate)
    if (potentialBooking <= propertyDate) {
      for (let i = 0; i < this.bookingList.length; i++) {
        let bookingDate = this.bookingList[i].bookingTime;
        if (bookingDate == potentialBooking) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  }

  findHighestBidder() {
    let higestBid = 0
    for (let i = 0; i < this.bidList.length; i++) {
      if (this.bidList[i].value > higestBid) {
        this.highestBid = this.bidList[i]
      }
    }
  }

  compareBooking(a: Booking, b: Booking) {
    if (a.bookingTime < b.bookingTime)
      return -1;
    if (a.bookingTime > b.bookingTime)
      return 1;
    return 0;
  }

  compare(a: Bid, b: Bid) {
    if (a.value < b.value)
      return -1;
    if (a.value > b.value)
      return 1;
    return 0;
  }

  logoutUser() {
    this.userService.logoutUser(this.userName, this.userToken)
      .subscribe(
        returnedToken => {
          console.log(returnedToken)
          this.localStorageService.clearAll();
          window.location.href = this.globals.uiPath + "property"
        });
    err => console.log(err);
  }

  setTimer(bidDate) {
    var globalScope = this;

    this.timer = setInterval(function () {
      timeBetweenDates(bidDate);
    }, 1000);

    function timeBetweenDates(toDate) {
      var dateEntered = new Date(toDate);
      var now = new Date();
      var difference = dateEntered.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(globalScope.timer);
        globalScope.seconds = -1;
        globalScope.days = -1;
        globalScope.hours = -1;
        globalScope.minutes = -1;
      } else {

        globalScope.seconds = Math.floor(difference / 1000);
        globalScope.minutes = Math.floor(globalScope.seconds / 60);
        globalScope.hours = Math.floor(globalScope.minutes / 60);
        globalScope.days = Math.floor(globalScope.hours / 24);

        globalScope.hours %= 24;
        globalScope.minutes %= 60;
        globalScope.seconds %= 60;
      }
      globalScope.ready = true;
    }
  }

  subscribeToBidSocket() {
    var address = this.globals.websocket + this.propertyId;
    var connection = new WebSocket(address);
    var globalScope = this;

    connection.onopen = function () {
      console.log("Connected to " + address)
    };

    connection.onclose = function () {
      console.log("Disconnected from to " + address)
    };

    connection.onerror = function (error) {
      console.log("Error occured with " + address + ": " + error)
    };

    connection.onmessage = function (message) {
      try {
        console.log(message.data)
        var json = JSON.parse(message.data);
        console.log(json);
        var audio = new Audio();
        audio.src = globalScope.globals.uiPath + "assets/notification.mp3";
        audio.load();
        audio.play();
        let newList = [];
        newList = json;
        newList.sort(globalScope.compare);
        globalScope.bidList = newList;
        globalScope.findHighestBidder();
      } catch (e) {
        console.log('Error parsing JSON: ', message.data);
        return;
      }
    };
  }

  ngOnInit() {
    this.ready = false;
    this.propertyId = this.route.snapshot.paramMap.get('property');
    this.userToken = this.localStorageService.get("token");
    if (this.userToken == null)
      window.location.href = this.globals.uiPath + "property"
    this.userName = this.localStorageService.get("user");
    console.log(this.propertyId);
    this.property= new Property();
    this.getProperty();
    this.getPropertyBids();
    this.getPropertyBookings();
    this.error = false;
    this.bookingError = false;
    this.highestBid = new Bid();
    this.bidForm = this.formBuilder.group({
      value: [this.highestBid.value, [<any>Validators.required, Validators.min(this.highestBid.value)]],
    });
    this.bookingForm = this.formBuilder.group({
      bookingTime: [new Date(), [<any>Validators.required]],
    });
    this.subscribeToFormChanges();
    this.subscribeToBookingFormChanges();
    this.subscribeToBidSocket();


    /*TODO
    Mess around with this properties bids filter-wise (my bids then a list of the rest of the bids including mine)
    Add websocket to get current bids from other users and add to page
    Add countdown on bids somewhere on the page
    */
  }

}
