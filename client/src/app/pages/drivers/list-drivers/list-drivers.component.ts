import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  createDriver() {
    UIkit.modal('#createDriver').show();
  }

  saveDriver() {
    let formData = this.createForm.value;
    const payload = {
      name: formData.name,
      phone: formData.phone,
    };

    console.log(payload);
  }
}
