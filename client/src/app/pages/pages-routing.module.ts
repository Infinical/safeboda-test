import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./dash/dash.module').then((m) => m.DashModule),
      },
      {
        path: 'driver',
        loadChildren: () =>
          import('./drivers/drivers.module').then((m) => m.DriversModule),
      },
      {
        path: 'passengers',
        loadChildren: () =>
          import('./passengers/passengers.module').then(
            (m) => m.PassengersModule
          ),
      },
      {
        path: 'rides',
        loadChildren: () =>
          import('./rides/rides.module').then((m) => m.RidesModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
