import { Injectable } from '@angular/core';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
	GoogleAuthProvider,
	signOut,
	Auth
} from '@angular/fire/auth';
import { LoggedInService } from './logged-in.service';

@Injectable({
	providedIn: 'root'
})
export class FirebaseService {
	constructor(public firebaseAuth: Auth, public loggedIn: LoggedInService) {}

	async signup({ email, password }: any) {
		return createUserWithEmailAndPassword(this.firebaseAuth, email, password);
	}

	async signinGoogle() {
		return signInWithPopup(this.firebaseAuth, new GoogleAuthProvider());
	}

	async signin({ email, password }: any) {
		return signInWithEmailAndPassword(this.firebaseAuth, email, password);
	}

	logout() {
		sessionStorage.removeItem('user');
		this.loggedIn.setisLoggedIn();
		return signOut(this.firebaseAuth);
	}
}
