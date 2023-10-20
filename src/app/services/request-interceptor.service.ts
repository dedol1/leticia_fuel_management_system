import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RequestInterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = sessionStorage.getItem('token');

    if (token != null) {
      console.log("setting token: ", token)
      req = req.clone({
        setHeaders: {
          Authorization: 'Token  ' + token
        }
      });
    }
    return next.handle(req);
   }
 
}
