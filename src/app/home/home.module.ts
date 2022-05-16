import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeViewComponent } from './components/home-view/home-view.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [HomeViewComponent],
	imports: [CommonModule, HomeRoutingModule, MaterialModule, SharedModule]
})
export class HomeModule {}
