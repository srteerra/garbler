import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../../services/firebase.service';

@Component({
	selector: 'app-signin-view',
	templateUrl: './signin-view.component.html',
	styleUrls: ['./signin-view.component.scss']
})
export class SigninViewComponent implements OnInit {
	isSignedIn = false;

	constructor(public firebaseService: FirebaseService) {}

	ngOnInit() {
		if (localStorage.getItem('user') !== null) this.isSignedIn = true;
		else this.isSignedIn = false;
	}

	async onSignin(email: string, password: string) {
		await this.firebaseService.signin(email, password);
		if (this.firebaseService.isLoggedIn) this.isSignedIn = true;
	}

	handleLogout() {
		this.isSignedIn = false;
	}
}
