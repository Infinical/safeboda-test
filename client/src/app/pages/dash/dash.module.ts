import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashRoutingModule } from './dash-routing.module';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashRoutingModule,
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
  ],
})
export class DashModule {}
