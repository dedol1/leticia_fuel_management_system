import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  private apiEndpoint: string = environment.apiURL;
  private fuelPriceUrl = this.apiEndpoint + 'manager/fuel_prices/';

  constructor(private httpClient: HttpClient) { }


  createFuelPrice(payload: any): Observable<any>{
    return this.httpClient.post<any>(this.fuelPriceUrl, payload);
  }

  getFuelPrices(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.fuelPriceUrl)
  }
}
