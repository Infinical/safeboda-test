import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IPassenger } from '../interface/passenger.interface';

@Injectable({
  providedIn: 'root',
})
export class PassengerService {
  constructor(private http: HttpClient) {}

  createPassenger(payload: IPassenger) {
    return this.http.post(`${environment.baseurl}passanger`, payload);
  }

  fetchList() {
    return this.http.get(`${environment.baseurl}passanger/list`);
  }
}
