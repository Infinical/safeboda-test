import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllRidesComponent } from './all-rides/all-rides.component';
import { ListRidesComponent } from './list-rides/list-rides.component';

const routes: Routes = [
  { path: '', component: ListRidesComponent },
  {
    path: 'all',
    component: AllRidesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RidesRoutingModule {}
