import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-contact-view',
	templateUrl: './contact-view.component.html',
	styleUrls: ['./contact-view.component.scss']
})
export class ContactViewComponent {
	constructor() {}

	msg = new FormControl('', [Validators.required]);
	text = new FormControl('', [Validators.required]);
	email = new FormControl('', [Validators.required, Validators.email]);

	getErrorEmailMessage() {
		if (this.email.hasError('required')) {
			return 'You must enter an email';
		}
		return this.email.hasError('email') ? 'Not a valid email' : '';
	}

	getErrorMessage() {
		if (this.msg.hasError('required')) {
			return 'You must enter a name';
		}
		return this.msg.hasError('name') ? 'Not a valid name' : '';
	}

	getErrorTextMessage() {
		if (this.text.hasError('required')) {
			return 'You must enter a message';
		}
		return this.text.hasError('text') ? 'Not a valid message' : '';
	}
}
