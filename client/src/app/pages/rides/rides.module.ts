import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RidesRoutingModule } from './rides-routing.module';
import { ListRidesComponent } from './list-rides/list-rides.component';

@NgModule({
  declarations: [
    ListRidesComponent
  ],
  imports: [CommonModule, RidesRoutingModule],
})
export class RidesModule {}
