import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRidesComponent } from './list-rides/list-rides.component';

const routes: Routes = [{ path: '', component: ListRidesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RidesRoutingModule {}
