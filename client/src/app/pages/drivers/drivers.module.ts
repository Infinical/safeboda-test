import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriversRoutingModule } from './drivers-routing.module';
import { ListDriversComponent } from './list-drivers/list-drivers.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListDriversComponent],
  imports: [CommonModule, DriversRoutingModule, ReactiveFormsModule],
})
export class DriversModule {}
