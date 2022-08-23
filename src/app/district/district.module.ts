import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistrictRoutingModule } from './district-routing.module';
import { DistrictViewComponent } from './components/district-view/district-view.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [DistrictViewComponent],
	imports: [CommonModule, DistrictRoutingModule, MaterialModule, SharedModule]
})
export class DistrictModule {}
