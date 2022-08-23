import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninViewComponent } from './components/signin-view/signin-view.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [SigninViewComponent],
	imports: [
		CommonModule,
		SigninRoutingModule,
		SharedModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule
	]
})
export class SigninModule {}
