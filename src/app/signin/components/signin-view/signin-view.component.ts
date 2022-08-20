import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../../../services/firebase.service';

@Component({
	selector: 'app-signin-view',
	templateUrl: './signin-view.component.html',
	styleUrls: ['./signin-view.component.scss']
})
export class SigninViewComponent {
	FormLogin: FormGroup;

	constructor(
		private firebaseService: FirebaseService,
		private router: Router
	) {
		this.FormLogin = new FormGroup({
			email: new FormControl(),
			password: new FormControl()
		});
	}

	onSignin() {
		this.firebaseService
			.signin(this.FormLogin.value)
			.then((res) => {
				console.log(res);
				this.router.navigate(['/main']);
			})
			.catch((err) => console.log(err));
	}
}
