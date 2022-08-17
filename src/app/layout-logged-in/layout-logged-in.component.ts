import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-layout-logged-in',
	templateUrl: './layout-logged-in.component.html',
	styleUrls: ['./layout-logged-in.component.scss']
})
export class LayoutLoggedInComponent {
	constructor(
		private firebaseService: FirebaseService,
		private router: Router
	) {}

	tlogout() {
		this.firebaseService
			.logout()
			.then(() => {
				this.router.navigate(['/home']);
			})
			.catch((err) => console.log(err));
	}
}
