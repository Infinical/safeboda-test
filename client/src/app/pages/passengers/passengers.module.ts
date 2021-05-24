import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengersRoutingModule } from './passengers-routing.module';
import { ListPassengersComponent } from './list-passengers/list-passengers.component';

@NgModule({
  declarations: [
    ListPassengersComponent
  ],
  imports: [CommonModule, PassengersRoutingModule],
})
export class PassengersModule {}
