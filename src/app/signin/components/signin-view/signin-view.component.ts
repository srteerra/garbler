import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../../../services/firebase.service';
import { LoggedInService } from '../../../services/logged-in.service';

@Component({
	selector: 'app-signin-view',
	templateUrl: './signin-view.component.html',
	styleUrls: ['./signin-view.component.scss']
})
export class SigninViewComponent implements OnInit {
	FormLogin!: FormGroup;

	constructor(
		private firebaseService: FirebaseService,
		private loggedInService: LoggedInService,
		private router: Router
	) {
		this.FormLogin = new FormGroup({
			email: new FormControl(),
			password: new FormControl()
		});
	}

	ngOnInit(): void {
		const email = new FormControl('', [Validators.required, Validators.email]);
		const password = new FormControl('', [Validators.required]);

		this.FormLogin = new FormGroup({
			email,
			password
		});
	}

	onSignin() {
		this.firebaseService
			.signin(this.FormLogin.value)
			.then((res) => {
				console.log(res);

				if (res.user) {
					this.loggedInService.setCurrentUser(res.user.email || '');
				} else {
					console.log('not response');
				}

				this.router.navigate(['/dashboard']);
			})
			.catch((err) => {
				console.log('1 ' + err);
				console.log('2 ' + err.code);

				if (err.code === 'auth/user-not-found') {
					this.FormLogin.get('email')?.setErrors({
						FormLoginUserNotFound: true
					});
				} else if (err.code === 'auth/wrong-password') {
					this.FormLogin.get('password')?.setErrors({
						FormLoginUserIncorrectPassword: true
					});
				}
			});
	}

	onSigninWithGoogle() {
		this.firebaseService
			.signinGoogle()
			.then((res) => {
				console.log(res);

				if (res.user) {
					this.loggedInService.setCurrentUser(res.user.email || '');
				} else {
					console.log('not response');
				}

				this.router.navigate(['/dashboard']);
			})
			.catch((err) => console.log(err));
	}
}
