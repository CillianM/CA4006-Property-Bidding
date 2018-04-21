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
    private globals: Globals) {
  }

  userToken: string;
  userName: string;
  propertyId: string;
  property: Property;
  bidList: Bid[];
  bidForm: FormGroup;
  createdBid: Bid;
  public events: any[] = [];
  public submitted: boolean;
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

  show(): void {
    this.submitted = false;
    this.error = false;
    if (this.userToken == null && this.userName == null) {
      window.location.href = '/ui/login';
    }
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
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

  subscribeToFormChanges() {
    const myFormStatusChanges$ = this.bidForm.statusChanges;
    const myFormValueChanges$ = this.bidForm.valueChanges;

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

  findHighestBidder() {
    let higestBid = 0
    for (let i = 0; i < this.bidList.length; i++) {
      if (this.bidList[i].value > higestBid) {
        this.highestBid = this.bidList[i]
      }
    }
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
          window.location.href = "/ui/property"
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
        globalScope.seconds = 0;
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
    var address = 'ws://localhost:8080/bidSocket/' + this.propertyId;
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
        audio.src = "../../../assets/notification.mp3";
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
    this.userName = this.localStorageService.get("user");
    console.log(this.propertyId);
    this.property= new Property();
    this.getProperty();
    this.getPropertyBids();
    this.error = false;
    this.highestBid = new Bid();
    this.bidForm = this.formBuilder.group({
      value: [this.highestBid.value, [<any>Validators.required, Validators.min(this.highestBid.value)]],
    });
    this.subscribeToFormChanges();
    this.subscribeToBidSocket();


    /*TODO
    Mess around with this properties bids filter-wise (my bids then a list of the rest of the bids including mine)
    Add websocket to get current bids from other users and add to page
    Add countdown on bids somewhere on the page
    */
  }

}
