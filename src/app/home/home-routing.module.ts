import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './components/home-view/home-view.component';

const routes: Routes = [
	{
		path: '',
		component: HomeViewComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class HomeRoutingModule {}
