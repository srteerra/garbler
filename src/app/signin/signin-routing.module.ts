import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninViewComponent } from './components/signin-view/signin-view.component';

const routes: Routes = [
	{
		path: '',
		component: SigninViewComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SigninRoutingModule { }
