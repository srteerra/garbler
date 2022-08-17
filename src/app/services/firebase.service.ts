import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	Auth
} from '@angular/fire/auth';

@Injectable({
	providedIn: 'root'
})
export class FirebaseService {
	constructor(public firebaseAuth: Auth) {}

	async signup({ email, password }: any) {
		return createUserWithEmailAndPassword(this.firebaseAuth, email, password);
	}

	async signin({ email, password }: any) {
		return signInWithEmailAndPassword(this.firebaseAuth, email, password);
	}

	logout() {
		return signOut(this.firebaseAuth);
	}
}
