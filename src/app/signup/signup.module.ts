import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupViewComponent } from './components/signup-view/signup-view.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [SignupViewComponent],
	imports: [
		CommonModule,
		SignupRoutingModule,
		SharedModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule
	]
})
export class SignupModule {}
