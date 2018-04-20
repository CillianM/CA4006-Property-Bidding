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


  visible = false;
  visibleAnimate = false;

  show(): void {
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
        });
    err => console.log(err);
  }

  getPropertyBids() {
    this.bidService.getPropertyBids(this.propertyId, this.userName, this.userToken)
      .subscribe(
        returnedBidList => {
          this.bidList = returnedBidList,
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

  save(model: BidInterface, isValid: boolean) {
    console.log(model, isValid);
    if (isValid) {
      let newBid = new Bid();
      newBid.userId = this.userName;
      newBid.propertyId = this.propertyId;
      newBid.value = model.value;
      newBid.createdDate = new Date();

      this.bidService.createBid(newBid, this.userName, this.userToken)
        .subscribe(
          returnedBid => {
            this.createdBid = returnedBid;
            console.log(returnedBid);
            this.bidList.push(returnedBid);
            this.hide();
          });
      err => console.log(err);

    }
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

  ngOnInit() {
    this.propertyId = this.route.snapshot.paramMap.get('property');
    this.userToken = this.localStorageService.get("token");
    this.userName = this.localStorageService.get("user");
    console.log(this.propertyId);
    this.property= new Property();
    this.getProperty();

    this.bidForm = this.formBuilder.group({
     value: [[<any>Validators.required]],
    });
    this.getPropertyBids();
    this.subscribeToFormChanges();


    /*TODO
    Mess around with this properties bids filter-wise (my bids then a list of the rest of the bids including mine)
    Add websocket to get current bids from other users and add to page
    Add countdown on bids somewhere on the page
    */
  }

}
