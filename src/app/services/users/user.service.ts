import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiEndpoint: string = environment.apiURL;
  private createUserUrl = this.apiEndpoint + 'authentication/register/';
  private getAllUsersUrl = this.apiEndpoint + 'authentication/users/';

  constructor(private httpClient: HttpClient) { }


  addNewUser(payload: any): Observable<any>{
    return this.httpClient.post<any>(this.createUserUrl, payload);
  }

  getAllUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.getAllUsersUrl)
  }
}
