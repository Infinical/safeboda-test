import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { UIkit } from 'uikit';
declare var UIkit: any;

@Component({
  selector: 'app-list-drivers',
  templateUrl: './list-drivers.component.html',
  styleUrls: ['./list-drivers.component.css'],
})
export class ListDriversComponent implements OnInit {
  @ViewChild('createDriver') createModal: ElementRef | undefined;
  constructor() {}

  ngOnInit(): void {}

  createDriver() {
    UIkit.modal('#createDriver').show();
  }
}
