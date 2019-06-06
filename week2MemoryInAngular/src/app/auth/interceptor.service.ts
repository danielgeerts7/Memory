import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(public auth: AuthService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.auth.getToken()){
      let temp = request.clone({
        setHeaders: {
          'Access-Control-Allow-Headers': '*',
          'Authorization':`Bearer ${this.auth.getToken()}`
        }
      })
      return next.handle(temp).catch((error, caught) => {
      //intercept the respons error and displace it to the console
      console.log('Error Occurred');
     console.log(error);
      //return the error to the method that called it
      return Observable.throw(error);
    });
    }
    else{
      return next.handle(request);
    }
  }
}
