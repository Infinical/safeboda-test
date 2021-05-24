import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPassengersComponent } from './list-passengers/list-passengers.component';

const routes: Routes = [{ path: '', component: ListPassengersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassengersRoutingModule {}
