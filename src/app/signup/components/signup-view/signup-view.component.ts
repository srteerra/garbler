import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../../../services/firebase.service';

@Component({
	selector: 'app-signup-view',
	templateUrl: './signup-view.component.html',
	styleUrls: ['./signup-view.component.scss']
})
export class SignupViewComponent implements OnInit {
	FormSignup!: FormGroup;

	constructor(
		private firebaseService: FirebaseService,
		private router: Router
	) {
		// this.FormSignup = this.fb.group({
		// 	email: new FormControl('', [Validators.required, Validators.email]),
		// 	password: new FormControl('', [Validators.required])
		// });
	}

	ngOnInit(): void {
		const email = new FormControl('', [Validators.required, Validators.email]);
		const password = new FormControl('', [Validators.required]);

		this.FormSignup = new FormGroup({
			email,
			password
		});
	}

	onSignup() {
		this.firebaseService
			.signup(this.FormSignup.value)
			.then((res) => {
				console.log(res);
				this.router.navigate(['/dashboard']);
			})
			.catch((err) => {
				console.log('1 ' + err);
				console.log('2 ' + err.code);

				if (err.code === 'auth/invalid-email') {
					this.FormSignup.get('email')?.setErrors({
						FormSignupUserInvalidEmail: true
					});
				} else if (err.code === 'auth/email-already-in-use') {
					this.FormSignup.get('email')?.setErrors({
						FormSignupUserAlreadyExists: true
					});
				}
			});
	}

	onSigninWithGoogle() {
		this.firebaseService
			.signinGoogle()
			.then((res) => {
				console.log(res);
				this.router.navigate(['/dashboard']);
			})
			.catch((err) => console.log(err));
	}
}
