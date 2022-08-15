import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninViewComponent } from './components/signin-view/signin-view.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SigninViewComponent
  ],
  imports: [
    CommonModule,
    SigninRoutingModule,
		MaterialModule,
		SharedModule
  ]
})
export class SigninModule { }
