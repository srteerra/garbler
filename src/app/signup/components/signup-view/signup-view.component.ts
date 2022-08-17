import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../../../services/firebase.service';

@Component({
	selector: 'app-signup-view',
	templateUrl: './signup-view.component.html',
	styleUrls: ['./signup-view.component.scss']
})
export class SignupViewComponent {
	FormSignup: FormGroup;

	constructor(
		private firebaseService: FirebaseService,
		private router: Router
	) {
		this.FormSignup = new FormGroup({
			email: new FormControl(),
			password: new FormControl()
		});
	}

	onSignup() {
		this.firebaseService
			.signup(this.FormSignup.value)
			.then((res) => {
				console.log(res);
				this.router.navigate(['/signin']);
			})
			.catch((err) => console.log(err));
	}
}
