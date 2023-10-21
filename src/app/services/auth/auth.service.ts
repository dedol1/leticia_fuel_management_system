import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  REST_API_SERVER = environment.apiURL;

  constructor(private httpClient: HttpClient, private router: Router) { }

  

  login(user: any): Observable<any> {
    return this.httpClient.post<any>(this.REST_API_SERVER + 'authentication/login/', user);
  }

  getUser(userId: any): Observable<any> {
    return this.httpClient.get<any>(this.REST_API_SERVER + 'user/' + userId + '/')
  }

  clockIn(userId: any): Observable<any> {
    return this.httpClient.get<any>(this.REST_API_SERVER + 'authentication/clock_in/' + userId + '/')
  }

  clockOut(userId: any): Observable<any> {
    return this.httpClient.get<any>(this.REST_API_SERVER + 'authentication/clock_out/' + userId + '/')
  }


  GetToken() {
    return localStorage.getItem('token') || '';
  }


  logOut() {
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("username")
    sessionStorage.removeItem("id")
    sessionStorage.removeItem("email")
    this.router.navigate(['/home'])
  }
}
