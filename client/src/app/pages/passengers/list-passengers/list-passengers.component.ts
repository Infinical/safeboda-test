import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IPassenger } from 'src/app/core/interface/passenger.interface';
import { GeneralService } from 'src/app/core/services/general.service';
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
    private passangerService: PassengerService,
    public general: GeneralService
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
    this.general.loading = true;
    this.passangerService.fetchList().subscribe((resp: any) => {
      this.passangers = resp.passanger;
      this.general.loading = false;
    });
  }

  createPassenger() {
    UIkit.modal('#createPassenger').show();
  }

  savePassenger() {
    this.general.loading = true;
    let formData = this.createForm.value;
    const payload = {
      id: '',
      name: formData.name,
      phone: formData.phone,
    };
    this.passangerService.createPassenger(payload).subscribe((resp: any) => {
      this.createForm.reset();
      UIkit.modal('#createPassenger').hide();
      this.general.loading = false;
      this.fetchPassangers();
    });
  }
}
