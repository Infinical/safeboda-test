import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { IDriver } from 'src/app/core/interface/driver.interface';
import { IPassenger } from 'src/app/core/interface/passenger.interface';
import { IRide } from 'src/app/core/interface/rides.interface';
import { DriverService } from 'src/app/core/services/driver.service';
import { GeneralService } from 'src/app/core/services/general.service';
import { PassengerService } from 'src/app/core/services/passenger.service';
import { RidesService } from 'src/app/core/services/rides.service';

declare var UIkit: any;
@Component({
  selector: 'app-list-rides',
  templateUrl: './list-rides.component.html',
  styleUrls: ['./list-rides.component.css'],
})
export class ListRidesComponent implements OnInit {
  rides: any;
  createForm = this.fb.group({
    driver: ['', Validators.required],
    passenger: ['', Validators.required],
    destinationlat: ['', Validators.required],
    destinationlong: ['', Validators.required],
    originlat: ['', Validators.required],
    originlong: ['', Validators.required],
  });

  options: any;
  drivers: Array<IDriver> = [];
  passengers: Array<IPassenger> = [];

  constructor(
    private ridesService: RidesService,
    private fb: FormBuilder,
    private driverService: DriverService,
    private passengerService: PassengerService,
    public general: GeneralService
  ) {}

  ngOnInit(): void {
    this.fetchRides();
    this.fetchDrivers();
    this.fetchPassengers();
  }

  createRide() {
    UIkit.modal('#createRide').show();
  }

  fetchRides() {
    this.general.loading = true;
    this.ridesService.fetchRides().subscribe((resp: any) => {
      this.rides = resp.ride;
      this.general.loading = false;
    });
  }

  fetchDrivers() {
    this.general.loading = true;
    this.driverService.fetchList().subscribe((resp: any) => {
      this.drivers = resp.driver;
      this.general.loading = false;
    });
  }

  fetchPassengers() {
    this.general.loading = true;
    this.passengerService.fetchList().subscribe((resp: any) => {
      this.passengers = resp.passanger;
      this.general.loading = false;
    });
  }

  finishRide(id: String) {
    this.general.loading = true;
    this.ridesService.finishRide(id).subscribe((resp: any) => {
      this.fetchRides();
      this.general.loading = false;
    });
  }

  saveRide() {
    this.general.loading = true;
    const payload: IRide = {
      destinationx: this.createForm.value.destinationlat,
      destinationy: this.createForm.value.destinationlong,
      originx: this.createForm.value.originlat,
      originy: this.createForm.value.originlong,
    };
    this.ridesService
      .createRide(
        payload,
        this.createForm.value.passenger,
        this.createForm.value.driver
      )
      .subscribe((resp: any) => {
        UIkit.modal('#createRide').hide();
        this.general.loading = false;
        this.fetchRides();
      });
  }
}
