import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UserService} from '../services/user-service';
import {User} from '../models/user';
import {CookieService} from 'angular2-cookie/core';
import {Token} from '../models/token';
import {LocalStorageService} from 'angular-2-local-storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor(
    private localStorageService: LocalStorageService,
    private userService:UserService,
    private cookieService:CookieService) { }

  storage:Storage;
  user: User;
  token:Token;
  visible = false;
  visibleAnimate = false;
  visibleId = false;
  visibleAnimateId = false;
  visibleCreate = false;
  visibleAnimateCreate = false;
  mid:string;
  requestTypes:string[];
  viewableRequestTypes:string[];
  selectedType = 0;
  selectedParty = 0;
  updated = false;
  selectedTypes:boolean[];

  updateSelectedType(i:number){
    this.selectedType = i;
  }

  updateParty(i:number){
    this.selectedParty = i;
  }

  updateSelectedTypes(i:number){
    this.selectedTypes[i] = !this.selectedTypes[i];
  }

  setClicked(){
    this.selectedTypes = new Array();
    for(let i = this.viewableRequestTypes.length - 1; i >= 0; i--){
      this.selectedTypes.push(false);
    }
  }

  showCreate(mid:string): void {
    this.mid = mid;
    this.visibleCreate = true;
    setTimeout(() => this.visibleAnimateCreate = true, 100);
    this.visibleAnimateId = false;
    setTimeout(() => this.visibleId = false, 300);
  }

  hideCreate(): void {
    this.visibleAnimateCreate = false;
    setTimeout(() => this.visibleCreate = false, 300);
  }

  show(): void {
    this.hideCreate();
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
    this.visibleId = true;
    setTimeout(() => this.visibleAnimateId = true, 100);
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

  createUser(username:string,password:string){
    this.user = new User;
    this.user.name = username;
    this.user.password = password;

    this.userService.createUser(this.user)
    .subscribe(
      returnedUser => {
        this.user = returnedUser,
        console.log(returnedUser)
        this.hide();
        this.loginUser(username, password)
      });
      err => console.log(err);
  }

  loginUser(username:string,password:string){
    this.user = new User;
    this.user.name = username;
    this.user.password = password;

    this.userService.loginUser(username,password)
    .subscribe(
      returnedToken => {
        this.token = returnedToken,
        console.log(returnedToken)
        this.localStorageService.set("token", returnedToken);
        this.localStorageService.set("user", username);
        window.location.href = "/ui/property"
      });
      err => console.log(err);
  }

  ngOnInit() {
  }

}
