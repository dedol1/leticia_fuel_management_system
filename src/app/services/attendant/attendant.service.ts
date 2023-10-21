import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FuelPrice } from 'src/app/interfaces/fuel-price';
import { MeterReading } from 'src/app/interfaces/meter-reading';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AttendantService {

  private apiEndpoint: string = environment.apiURL;
  private getCurrentMeterReadingsUrl = this.apiEndpoint + 'fuel_attendant/meter_reading/';
  private getCurrentLastMeterReadingsUrl = this.apiEndpoint + 'fuel_attendant/last_meter_reading/';

  constructor(private httpClient: HttpClient) { }

  getCurrentMeterReading(): Observable<MeterReading>{
    return this.httpClient.get<MeterReading>(this.getCurrentLastMeterReadingsUrl)
  }
  getMeterReadingById(id: number): Observable<MeterReading>{
    return this.httpClient.get<MeterReading>(this.getCurrentMeterReadingsUrl + `${id}/`)
  }
  addNewMeterReading(payload: any): Observable<MeterReading>{
    return this.httpClient.post<MeterReading>(this.getCurrentMeterReadingsUrl, payload)
  }

  updateMeterReading(payload: any): Observable<MeterReading>{
    return this.httpClient.patch<MeterReading>(this.getCurrentMeterReadingsUrl, payload)
  }
  deleteMeterReading(id: number): Observable<MeterReading>{
    return this.httpClient.delete<MeterReading>(this.getCurrentMeterReadingsUrl + `${id}/`)
  }

  getAllMeterReadings(): Observable<MeterReading[]>{
    return this.httpClient.get<MeterReading[]>(this.getCurrentMeterReadingsUrl)
  }

}
