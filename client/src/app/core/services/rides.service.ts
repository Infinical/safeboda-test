import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RidesService {
  constructor(private http: HttpClient) {}

  fetchRides() {
    return this.http.get(`${environment.baseurl}rides/ongoing`);
  }

  allRides() {
    return this.http.get(`${environment.baseurl}rides`);
  }

  createRide(payload: any, passenger: String, driver: String) {
    return this.http.post(
      `${environment.baseurl}ride/${passenger}/${driver}`,
      payload
    );
  }

  finishRide(rideId: String) {
    return this.http.put(`${environment.baseurl}ride/${rideId}/stop`, {});
  }
}
