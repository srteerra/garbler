import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackerRoutingModule } from './tracker-routing.module';
import { TrackerViewComponent } from './components/tracker-view/tracker-view.component';
import { MapComponent } from './components/map/map.component';

@NgModule({
	declarations: [TrackerViewComponent, MapComponent],
	imports: [CommonModule, TrackerRoutingModule]
})
export class TrackerModule {}
