import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackerViewComponent } from './components/tracker-view/tracker-view.component';

const routes: Routes = [
	{
		path: '',
		component: TrackerViewComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TrackerRoutingModule {}
