import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Globals } from '../app-properties';
import { Property } from '../models/property';

@Injectable()
export class PropertyService{
    constructor (private http: Http, private globals: Globals) {}
    ENDPOINT = this.globals.endpoint + "/property";

    getProperties() : Observable<Property[]> {
        return this.http.get(this.ENDPOINT)
                        .map((res:Response) => res.json())
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }

    getProperty(id:string) : Observable<Property> {
            return this.http.get(this.ENDPOINT + "/" + id)
                            .map((res:Response) => res.json())                               
                            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }

    createProperty(body: Object): Observable<Property> {
    let bodyString = JSON.stringify(body); 
    let headers      = new Headers({ 'Content-Type': 'application/json' }); 
    let options       = new RequestOptions({ headers: headers }); 

    return this.http.post(this.ENDPOINT, body) 
                    .map((res:Response) => res.json()) 
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
    } 
}