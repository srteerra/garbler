import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../../services/firebase.service';

@Component({
	selector: 'app-signup-view',
	templateUrl: './signup-view.component.html',
	styleUrls: ['./signup-view.component.scss']
})
export class SignupViewComponent {
	isSignedIn = false;
	constructor(public firebaseService: FirebaseService) {}

	async onSignup(email: string, password: string) {
		await this.firebaseService.signup(email, password);
		if (this.firebaseService.isLoggedIn) this.isSignedIn = true;
	}
}
