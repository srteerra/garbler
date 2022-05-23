import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ExamplesComponent } from './examples/examples.component';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{
				path: '',
				redirectTo: '/home',
				pathMatch: 'full'
			},
			{
				path: 'home',
				loadChildren: () =>
					import('./home/home.module').then((m) => m.HomeModule)
			},
			{
				path: 'about',
				loadChildren: () =>
					import('./about/about.module').then((m) => m.AboutModule)
			}
		]
	},
	{
		path: 'example',
		component: ExamplesComponent
	},
	{
		path: '**',
		loadChildren: () =>
			import('./page-not-found/page-not-found-routing.module').then(
				(m) => m.PageNotFoundRoutingModule
			)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
