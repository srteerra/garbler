import { Component, ViewChild } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
	selector: 'app-layout-logged-in',
	templateUrl: './layout-logged-in.component.html',
	styleUrls: ['./layout-logged-in.component.scss']
})
export class LayoutLoggedInComponent {
	userName = 'Luis Hernandez';
	userDistrict = 'DISTRICT 5';

	mobileQuery: MediaQueryList;
	@ViewChild(MatSidenav)
	sidenav!: MatSidenav;

	private _mobileQueryListener: () => void;

	constructor(
		private firebaseService: FirebaseService,
		private router: Router,
		private observer: BreakpointObserver,
		changeDetectorRef: ChangeDetectorRef,
		media: MediaMatcher
	) {
		this.mobileQuery = media.matchMedia('(max-width: 900px)');
		this._mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this._mobileQueryListener);
	}
	tlogout() {
		this.firebaseService
			.logout()
			.then(() => {
				this.router.navigate(['/home']);
			})
			.catch((err) => console.log(err));
	}

	ngAfterViewInit() {
		this.observer.observe(['(max-width: 900px)']).subscribe((res) => {
			if (res.matches) {
				this.sidenav.mode = 'over';
				this.sidenav.close();
			} else {
				this.sidenav.mode = 'side';
				this.sidenav.open();
			}
		});
	}
	ngOnDestroy(): void {
		this.mobileQuery.removeListener(this._mobileQueryListener);
	}
}
