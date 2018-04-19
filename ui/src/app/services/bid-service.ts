import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Bid} from '../models/bid';
import {Globals} from '../app-properties';

@Injectable()
export class BidService{
    constructor (private http: Http, private globals: Globals) {}
    ENDPOINT = this.globals.endpoint + "/bid";

  getUserBids(userId: string, username: string, token: string): Observable<Bid[]> {
    let headers = new Headers();
    let auth = btoa(username + ":" + token);
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + auth)
    let options = new RequestOptions({headers: headers});
                 return this.http.get(this.ENDPOINT + "/user/" + userId)
                                 .map((res:Response) => res.json())
                                 .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }

  getPropertyBids(propertyId: string, username: string, token: string): Observable<Bid[]> {
    let headers = new Headers();
    let auth = btoa(username + ":" + token);
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + auth)
    let options = new RequestOptions({headers: headers});
        return this.http.get(this.ENDPOINT + "/" + propertyId)
                        .map((res:Response) => res.json())
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }

  getPropertyUserBids(userId: string, propertyId: string, username: string, token: string): Observable<Bid[]> {
    let headers = new Headers();
    let auth = btoa(username + ":" + token);
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + auth)
    let options = new RequestOptions({headers: headers});
        return this.http.get(this.ENDPOINT + "/" + propertyId + "/" + userId)
                        .map((res:Response) => res.json())
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }

  createBid(body: Object, username: string, token: string): Observable<Bid> {
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
}
