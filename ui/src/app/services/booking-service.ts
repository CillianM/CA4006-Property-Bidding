import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Booking} from '../models/booking';
import {Globals} from '../app-properties';

@Injectable()
export class BookingService {
  constructor(private http: Http, private globals: Globals) {
  }

  ENDPOINT = this.globals.endpoint + "/booking";

  getUserBookings(username: string, token: string): Observable<Booking[]> {
    let headers = new Headers();
    let auth = btoa(username + ":" + token);
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + auth)
    let options = new RequestOptions({headers: headers});
    return this.http.get(this.ENDPOINT + "/user/" + username, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  getPropertyBookings(propertyId: string, username: string, token: string): Observable<Booking[]> {
    let headers = new Headers();
    let auth = btoa(username + ":" + token);
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + auth)
    let options = new RequestOptions({headers: headers});
    return this.http.get(this.ENDPOINT + "/" + propertyId, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  getPropertyUserBookings(propertyId: string, username: string, token: string): Observable<Booking[]> {
    let headers = new Headers();
    let auth = btoa(username + ":" + token);
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + auth)
    let options = new RequestOptions({headers: headers});
    return this.http.get(this.ENDPOINT + "/" + propertyId + "/" + username, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  createBooking(body: Object, username: string, token: string): Observable<Booking> {
    let bodyString = JSON.stringify(body);
    let headers = new Headers();
    let auth = btoa(username + ":" + token);
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + auth)
    let options = new RequestOptions({headers: headers});

    return this.http.post(this.ENDPOINT, body, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteBooking(propertyId: string, username: string, token: string): Observable<Booking[]> {
    let headers = new Headers();
    let auth = btoa(username + ":" + token);
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + auth)
    let options = new RequestOptions({headers: headers});

    return this.http.delete(this.ENDPOINT + "/" + propertyId + "/" + username, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
