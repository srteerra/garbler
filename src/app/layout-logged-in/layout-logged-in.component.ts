import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';

@Component({
	selector: 'app-layout-logged-in',
	templateUrl: './layout-logged-in.component.html',
	styleUrls: ['./layout-logged-in.component.scss']
})
export class LayoutLoggedInComponent implements OnDestroy {
	mobileQuery: MediaQueryList;

	private _mobileQueryListener: () => void;

	constructor(
		private firebaseService: FirebaseService,
		private router: Router,
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

	ngOnDestroy(): void {
		this.mobileQuery.removeListener(this._mobileQueryListener);
	}
}
