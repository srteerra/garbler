import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
	data: FormGroup;

	constructor(private httpclient: HttpClient) {
		this.data = new FormGroup({
			email: this.email,
			msg: this.text,
			subject: this.subject,
			name: this.name
		});
	}

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
			return 'You must enter a name';
		}
		return this.subject.hasError('subject') ? 'Not a valid subject' : '';
	}

	getErrorTextMessage() {
		if (this.text.hasError('required')) {
			return 'You must enter a message';
		}
		return this.text.hasError('text') ? 'Not a valid message' : '';
	}

	sendEmail() {
		let params = {
			email: this.data.value.email,
			subject: this.data.value.subject,
			//name: this.data.value.name,
			msg: this.data.value.msg
		};
		console.log(params);
		this.httpclient
			.post('http://localhost:4200/send-email', params)
			.subscribe((res) => {
				console.log(res);
			});
	}
}
