import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutViewComponent } from './components/about-view/about-view.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AboutViewComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
		MaterialModule,
		SharedModule
  ]
})
export class AboutModule { }
