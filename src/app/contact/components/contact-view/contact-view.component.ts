import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import {
	EmailValidator,
	FormControl,
	FormGroup,
	Validators
} from '@angular/forms';

@Component({
	selector: 'app-contact-view',
	templateUrl: './contact-view.component.html',
	styleUrls: ['./contact-view.component.scss']
})
export class ContactViewComponent {
	subjectInput = null;
	emailInput = null;
	nameInput = null;
	msgInput = null;
	isDisabled = false;
	data: FormGroup;
	constructor(private _snackBar: MatSnackBar) {
		this.data = new FormGroup({
			email: this.email,
			msg: this.text,
			subject: this.subject,
			name: this.name
		});
	}

	if() {}

	name = new FormControl('', [Validators.required]);
	subject = new FormControl('', [Validators.required]);
	text = new FormControl('', [Validators.required]);
	email = new FormControl('', [Validators.required, Validators.email]);

	getErrorEmailMessage() {
		if (this.email.hasError('required')) {
			return 'You must enter an email';
		}
		return this.email.hasError('email') ? 'Not a valid email' : '';
	}

	getErrorNameMessage() {
		if (this.name.hasError('required')) {
			return 'You must enter a name';
		}
		return this.name.hasError('name') ? 'Not a valid name' : '';
	}

	getErrorSubjectMessage() {
		if (this.subject.hasError('required')) {
			return 'You must enter a subject';
		}
		return this.subject.hasError('subject') ? 'Not a valid subject' : '';
	}

	getErrorTextMessage() {
		if (this.text.hasError('required')) {
			return 'You must enter a message';
		}
		return this.text.hasError('text') ? 'Not a valid message' : '';
	}

	public sendEmail(e: Event) {
		emailjs
			.sendForm(
				'service_l29wzhl',
				'template_zij4zp8',
				e.target as HTMLFormElement,
				'Wsz09E5AFMaBWXyR9'
			)
			.then(
				(result: EmailJSResponseStatus) => {
					this._snackBar.open('The message was sent succesfully', 'OK', {
						panelClass: ['emailSent', 'login-snackbar']
					});
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		this.data.reset();
	}
}
