import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IPassenger } from 'src/app/core/interface/passenger.interface';
import { PassengerService } from 'src/app/core/services/passenger.service';

declare var UIkit: any;
@Component({
  selector: 'app-list-passengers',
  templateUrl: './list-passengers.component.html',
  styleUrls: ['./list-passengers.component.css'],
})
export class ListPassengersComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private passangerService: PassengerService
  ) {}

  passangers: Array<IPassenger> = [];

  createForm = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
  });

  ngOnInit(): void {
    this.fetchPassangers();
  }

  fetchPassangers() {
    this.passangerService.fetchList().subscribe((resp: any) => {
      this.passangers = resp.passanger;
      console.log(resp);
    });
  }

  createPassenger() {
    UIkit.modal('#createPassenger').show();
  }

  savePassenger() {
    let formData = this.createForm.value;
    const payload = {
      name: formData.name,
      phone: formData.phone,
    };

    console.log(payload);
  }
}
