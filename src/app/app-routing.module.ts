import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ExamplesComponent } from './examples/examples.component';
import { LayoutLoggedInComponent } from './layout-logged-in/layout-logged-in.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { MainDashboardViewComponent } from './main-dashboard/component/main-dashboard-view/main-dashboard-view.component';
import { MainDashboardModule } from './main-dashboard/main-dashboard.module';
import { LoggedInService } from './services/logged-in.service';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		canActivate: [LoggedInService],
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
				path: 'contact',
				loadChildren: () =>
					import('./contact/contact.module').then((m) => m.ContactModule)
			}
		]
	},
	{
		path: 'dashboard',
		component: LayoutLoggedInComponent,
		...canActivate(() => redirectUnauthorizedTo(['/signin'])),
		children: [
			{
				path: '',
				redirectTo: '/dashboard/home',
				pathMatch: 'full'
			},
			{
				path: 'home',
				loadChildren: () =>
					import('./main-dashboard/main-dashboard.module').then(
						(m) => m.MainDashboardModule
					)
			},
			{
				path: 'contact',
				loadChildren: () =>
					import('./contact/contact.module').then((m) => m.ContactModule)
			},
			{
				path: 'district',
				loadChildren: () =>
					import('./district/district.module').then((m) => m.DistrictModule)
			}
		]
	},
	{
		path: 'example',
		component: ExamplesComponent
	},
	{
		path: 'signup',
		canActivate: [LoggedInService],
		loadChildren: () =>
			import('./signup/signup.module').then((m) => m.SignupModule)
	},
	{
		path: 'signin',
		canActivate: [LoggedInService],
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
