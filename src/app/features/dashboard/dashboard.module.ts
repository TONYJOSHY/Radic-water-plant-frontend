import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FlowBoxComponent } from './component/flow-box/flow-box.component';
import { FlowChartComponent } from './component/flow-chart/flow-chart.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    FlowBoxComponent,
    FlowChartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
