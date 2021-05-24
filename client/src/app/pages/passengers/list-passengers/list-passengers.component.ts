import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

declare var UIkit: any;
@Component({
  selector: 'app-list-passengers',
  templateUrl: './list-passengers.component.html',
  styleUrls: ['./list-passengers.component.css'],
})
export class ListPassengersComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  createForm = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
  });

  ngOnInit(): void {}

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
