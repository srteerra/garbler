import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FirebaseService } from '../../../services/firebase.service';

@Component({
	selector: 'app-signin-view',
	templateUrl: './signin-view.component.html',
	styleUrls: ['./signin-view.component.scss']
})
export class SigninViewComponent {
	FormLogin: FormGroup;

	constructor(private firebaseService: FirebaseService) {
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
			})
			.catch((err) => console.log(err));
	}
}
