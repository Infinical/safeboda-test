import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IDriver } from '../interface/driver.interface';

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  constructor(private http: HttpClient) {}

  createDriver(payload: IDriver) {
    return this.http.post(`${environment.baseurl}driver`, payload);
  }

  fetchList() {
    return this.http.get(`${environment.baseurl}driver/list`);
  }

  suspendDriver(id: String) {
    return this.http.post(`${environment.baseurl}driver/${id}/suspend`, {});
  }

  removeSuspension(id: String) {
    return this.http.delete(`${environment.baseurl}driver/${id}/suspend`, {});
  }
}
