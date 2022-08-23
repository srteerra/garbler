import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactViewComponent } from './components/contact-view/contact-view.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [ContactViewComponent],
	imports: [
		CommonModule,
		ContactRoutingModule,
		ReactiveFormsModule,
		HttpClientModule,
		MaterialModule,
		SharedModule
	]
})
export class ContactModule {}
