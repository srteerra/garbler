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
			},
			{
				path: 'tracker',
				loadChildren: () =>
					import('./tracker/tracker.module').then((m) => m.TrackerModule)
			},
			{
				path: 'contact',
				loadChildren: () =>
					import('./contact/contact.module').then((m) => m.ContactModule)
			}
		]
	},
	{
		path: 'example',
		component: ExamplesComponent
	},
	{
		path: 'signup',
		loadChildren: () =>
			import('./signup/signup.module').then((m) => m.SignupModule)
	},
	{
		path: 'signin',
		loadChildren: () =>
			import('./signin/signin.module').then((m) => m.SigninModule)
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
