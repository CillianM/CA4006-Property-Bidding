import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Globals } from '../app-properties';
import { User } from '../models/user';
import { Token } from '../models/token';

@Injectable()
export class UserService{
    constructor (private http: Http, private globals: Globals) {}
    ENDPOINT = this.globals.endpoint + "/user";

    getUsers() : Observable<User[]> {
                 return this.http.get(this.ENDPOINT)
                                 .map((res:Response) => res.json())
                                 .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
    }

    getUser(username:string) : Observable<User> {
                 return this.http.get(this.ENDPOINT + "/" + username)
                                 .map((res:Response) => res.json())                               
                                 .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
    }

    loginUser(username:string,password:string) : Observable<Token> {
        let headers = new Headers();
        let auth =  btoa(username + ":" + password);
        console.log(auth)
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic ' + auth)
        let options       = new RequestOptions({ headers: headers }); 

        return this.http.post(this.ENDPOINT + "/login/" + username,null,options)
                        .map((res:Response) => res.json())                               
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }

    logoutUser(username:string,token:string) : Observable<string> {
        let headers = new Headers();
        let auth =  btoa(username + ":" + token);
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic ' + auth)
        let options       = new RequestOptions({ headers: headers }); 

        return this.http.delete(this.ENDPOINT + "/logout/" + username,options)
                        .map((res:Response) => res.json())                               
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }

    createUser(body: Object): Observable<User> {
        let bodyString = JSON.stringify(body); 
        let headers      = new Headers({ 'Content-Type': 'application/json' }); 
        let options       = new RequestOptions({ headers: headers }); 

        return this.http.post(this.ENDPOINT, body,options) 
                         .map((res:Response) => res.json()) 
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
    } 
}