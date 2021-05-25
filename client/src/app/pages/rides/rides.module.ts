import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RidesRoutingModule } from './rides-routing.module';
import { ListRidesComponent } from './list-rides/list-rides.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { AllRidesComponent } from './all-rides/all-rides.component';

@NgModule({
  declarations: [ListRidesComponent, AllRidesComponent],
  imports: [
    CommonModule,
    RidesRoutingModule,
    ReactiveFormsModule,
    GooglePlaceModule,
  ],
})
export class RidesModule {}
