import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Bid } from '../models/bid';
import { Globals } from '../app-properties';

@Injectable()
export class BidService{
    constructor (private http: Http, private globals: Globals) {}
    ENDPOINT = this.globals.endpoint + "/bid";

    getUserBids(userId:string) : Observable<Bid[]> {
                 return this.http.get(this.ENDPOINT + "/user/" + userId)
                                 .map((res:Response) => res.json())
                                 .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
    }

    getPropertyBids(propertyId:string) : Observable<Bid[]> {
        return this.http.get(this.ENDPOINT + "/" + propertyId)
                        .map((res:Response) => res.json())
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }

    getPropertyUserBids(userId:string,propertyId:string) : Observable<Bid[]> {
        return this.http.get(this.ENDPOINT + "/" + propertyId + "/" + userId)
                        .map((res:Response) => res.json())
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }

    createBid(body: Object): Observable<Bid> {
        let bodyString = JSON.stringify(body); 
        let headers      = new Headers({ 'Content-Type': 'application/json' }); 
        let options       = new RequestOptions({ headers: headers }); 

        return this.http.post(this.ENDPOINT, body) 
                         .map((res:Response) => res.json()) 
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
    } 
}