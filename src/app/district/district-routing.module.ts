import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistrictViewComponent } from './components/district-view/district-view.component';

const routes: Routes = [
	{
		path: '',
		component: DistrictViewComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DistrictRoutingModule {}
