import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatTreeModule } from '@angular/material/tree';
import { MatStepperModule } from '@angular/material/stepper';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MatButtonModule,
		MatToolbarModule,
		MatIconModule,
		MatBadgeModule,
		MatCardModule,
		MatSelectModule,
		MatRadioModule,
		MatInputModule,
		MatMenuModule,
		MatTreeModule,
		MatFormFieldModule,
		MatStepperModule,
		MatListModule,
		MatChipsModule,
		MatSidenavModule
	],
	exports: [
		MatButtonModule,
		MatToolbarModule,
		MatIconModule,
		MatBadgeModule,
		MatCardModule,
		MatSelectModule,
		MatRadioModule,
		MatInputModule,
		MatMenuModule,
		MatTreeModule,
		MatFormFieldModule,
		MatStepperModule,
		MatListModule,
		MatChipsModule,
		MatSidenavModule
	]
})
export class MaterialModule {}
