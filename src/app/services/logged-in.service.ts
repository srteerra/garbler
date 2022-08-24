import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	Router
} from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class LoggedInService implements CanActivate {
	public loggedIn = false;

	constructor(public firebaseAuth: Auth, private router: Router) {
		this.loggedIn = !!sessionStorage.getItem('user');
	}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): boolean {
		if (this.loggedIn !== true) {
			return true;
		}
		this.router.navigate(['/dashboard']);
		return false;
	}

	setisLoggedIn() {
		this.loggedIn = !this.loggedIn;
	}

	setCurrentUser(email: string) {
		sessionStorage.setItem('user', email);
		this.loggedIn = true;
	}

	getCurrentUser(): string | any {
		return sessionStorage.getItem('user') || undefined;
	}
}
