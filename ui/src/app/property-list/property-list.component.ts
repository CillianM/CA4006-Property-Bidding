import {Component, OnInit} from '@angular/core';
import {PropertyService} from '../services/property-service';
import {Globals} from '../app-properties';
import {LocalStorageService} from 'angular-2-local-storage';
import {UserService} from '../services/user-service';
import {Property, PropertyInterface} from '../models/property';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css',
    '../app.component.css']
})
export class PropertyListComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private localStorageService: LocalStorageService,
    private userService: UserService,
    private propertyService: PropertyService,
    private globals: Globals) {
  }

  userToken: string;
  userName: string;
  propertyList: Property[];
  propertyForm: FormGroup;
  createdProperty: Property;
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

  getProperties() {
    this.propertyService.getProperties()
      .subscribe(
        returnedPropertyList => {
          this.propertyList = returnedPropertyList,
            console.log(returnedPropertyList)
        });
    err => console.log(err);
  }

  subcribeToFormChanges() {
    const myFormStatusChanges$ = this.propertyForm.statusChanges;
    const myFormValueChanges$ = this.propertyForm.valueChanges;

    myFormStatusChanges$.subscribe(x => this.events.push({event: 'STATUS_CHANGED', object: x}));
    myFormValueChanges$.subscribe(x => this.events.push({event: 'VALUE_CHANGED', object: x}));
  }

  save(model: PropertyInterface, isValid: boolean) {
    console.log(model, isValid);
    if (isValid) {
      let newProperty = new Property();
      newProperty.id = "";
      newProperty.creator = this.userName
      newProperty.name = model.name;
      newProperty.propertyType = model.propertyType;
      newProperty.areaCode = model.areaCode;
      newProperty.price = model.price;
      newProperty.biddingExpiry = new Date(model.biddingExpiry);
      newProperty.bedroomCount = model.bedroomCount;
      this.propertyService.createProperty(newProperty, this.userName, this.userToken)
        .subscribe(
          returnedProperty => {
            this.createdProperty = returnedProperty,
              console.log(returnedProperty)
            this.propertyList.push(returnedProperty);
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
    this.userToken = this.localStorageService.get("token");
    this.userName = this.localStorageService.get("user");
    console.log(this.userName + " " + this.userToken);
    let currentDate = new Date().toISOString().split('T')[0]
    let currentTime = new Date().getHours() + ":" + new Date().getMinutes();

    this.propertyForm = this.formBuilder.group({
      name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      propertyType: ['HOUSE'],
      areaCode: ['D13', [<any>Validators.required, <any>Validators.minLength(2)]],
      bedroomCount: [1, [<any>Validators.required]],
      price: [100.00, [<any>Validators.required]],
      biddingExpiry: [currentDate + "T" + currentTime, [<any>Validators.required]],

    });
    this.subcribeToFormChanges();
    this.getProperties();

  }

}
