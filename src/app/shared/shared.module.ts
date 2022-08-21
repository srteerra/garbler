import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
	declarations: [HeaderComponent, FooterComponent],
	exports: [HeaderComponent, FooterComponent],
	imports: [CommonModule, RouterModule, ReactiveFormsModule, MaterialModule]
})
export class SharedModule {}
