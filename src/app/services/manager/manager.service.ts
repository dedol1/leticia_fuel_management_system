import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Attendance } from 'src/app/interfaces/attendance';
import { FuelDipping } from 'src/app/interfaces/fuel-dipping';
import { FuelPrice } from 'src/app/interfaces/fuel-price';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  private apiEndpoint: string = environment.apiURL;
  private fuelPriceUrl = this.apiEndpoint + 'manager/fuel_prices/';
  private getAllAttendanceUrl = this.apiEndpoint + 'authentication/attendance/';
  private getMyAttendaceUrl = this.apiEndpoint + 'authentication/attendance_by_user/';
  private fuelDippingsUrl = this.apiEndpoint + 'manager/dipping/';
  private getfuelDippingByIdUrl = this.apiEndpoint + 'manager/dipping/';

  constructor(private httpClient: HttpClient) { }


  createFuelPrice(payload: any): Observable<FuelPrice>{
    return this.httpClient.post<FuelPrice>(this.fuelPriceUrl, payload);
  }

  getFuelPrices(): Observable<FuelPrice[]>{
    return this.httpClient.get<FuelPrice[]>(this.fuelPriceUrl)
  }

  getMyAttendace(id: any): Observable<Attendance[]>{
    return this.httpClient.get<Attendance[]>(this.getMyAttendaceUrl + `${id}/`)
  }

  getAllAttendace(): Observable<Attendance[]>{
    return this.httpClient.get<Attendance[]>(this.getAllAttendanceUrl)
  }

  getAllFuelDippings(): Observable<FuelDipping[]>{
    return this.httpClient.get<FuelDipping[]>(this.fuelDippingsUrl)
  }
  getFuelDippingById(id: any): Observable<FuelDipping>{
    return this.httpClient.get<FuelDipping>(this.fuelDippingsUrl + `${id}/`)
  }

  createFuelDipping(payload: any): Observable<FuelDipping[]>{
    return this.httpClient.post<FuelDipping[]>(this.fuelDippingsUrl, payload)
  }

  updateFuelDipping(payload: any): Observable<FuelDipping[]>{
    return this.httpClient.patch<FuelDipping[]>(this.fuelDippingsUrl, payload)
  }
  
}
