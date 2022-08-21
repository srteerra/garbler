import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDashboardViewComponent } from './component/main-dashboard-view/main-dashboard-view.component';

const routes: Routes = [
	{
		path: '',
		component: MainDashboardViewComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class MainDashboardRoutingModule {}
