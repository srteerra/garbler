import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainDashboardRoutingModule } from './main-dashboard-routing.module';
import { MainDashboardViewComponent } from './component/main-dashboard-view/main-dashboard-view.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [MainDashboardViewComponent],
	imports: [
		CommonModule,
		MainDashboardRoutingModule,
		MaterialModule,
		SharedModule
	]
})
export class MainDashboardModule {}
