import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

import { User } from '../models/user-model';
import { HttpInterceptorService } from '../shared/http-interceptor.service';

@Injectable()
export class LoginService {

  constructor(public http: HttpInterceptorService){}


  public login (user: User) {
    return this.http
      .post('auth/webLogin', user)
      .map((response: Response) => {
        let user = response.json();
        console.log("user object>"+JSON.stringify(user));
        if(user && user.token){
          localStorage.setItem("currentUser",JSON.stringify(user));
          //this.subject.next(Object.assign({},user));
        }
        return response;
      });
  }

}
