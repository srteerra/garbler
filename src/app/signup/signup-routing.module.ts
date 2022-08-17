import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupViewComponent } from './components/signup-view/signup-view.component';

const routes: Routes = [
	{
		path: '',
		component: SignupViewComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SignupRoutingModule {}
