import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDriver } from 'src/app/core/interface/driver.interface';
import { DriverService } from 'src/app/core/services/driver.service';
// import { UIkit } from 'uikit';
declare var UIkit: any;

@Component({
  selector: 'app-list-drivers',
  templateUrl: './list-drivers.component.html',
  styleUrls: ['./list-drivers.component.css'],
})
export class ListDriversComponent implements OnInit {
  createForm = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
  });

  drivers: Array<IDriver> = [];

  constructor(private fb: FormBuilder, private driverService: DriverService) {}

  ngOnInit(): void {
    this.fetchDrivers();
  }

  fetchDrivers() {
    this.driverService.fetchList().subscribe((resp: any) => {
      this.drivers = resp.driver;
      console.log(resp);
    });
  }

  suspendDriver(id: String) {
    this.driverService.suspendDriver(id).subscribe((resp: any) => {
      this.fetchDrivers();
    });
  }

  removeSuspension(id: String) {
    this.driverService.removeSuspension(id).subscribe((resp: any) => {
      this.fetchDrivers();
    });
  }
  createDriver() {
    UIkit.modal('#createDriver').show();
  }

  saveDriver() {
    let formData = this.createForm.value;
    const payload: IDriver = {
      id: '',
      name: formData.name,
      phone: formData.phone,
      suspended: false,
    };

    this.driverService.createDriver(payload).subscribe((resp: any) => {
      UIkit.modal('#createDriver').hide();
      this.createForm.reset();
      this.fetchDrivers();
    });
  }
}
