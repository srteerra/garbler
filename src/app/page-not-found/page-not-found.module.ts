import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [PageNotFoundComponent],
	imports: [CommonModule, PageNotFoundRoutingModule, SharedModule, RouterModule]
})
export class PageNotFoundModule {}
