import { Component, OnInit } from '@angular/core';
import {
	trigger,
	state,
	style,
	animate,
	transition
} from '@angular/animations';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	animations: [
		trigger('inOutAnimation', [
			transition(':enter', [
				style({ width: 0, opacity: 0 }),
				animate('0.5s ease-out', style({ width: 500, opacity: 1 }))
			]),
			transition(':leave', [
				style({ width: 500, opacity: 1 }),
				animate('0.2s ease-in', style({ width: 0, opacity: 0 }))
			])
		])
	]
})
export class HeaderComponent implements OnInit {
	constructor() {}

	navResp: boolean = false;
	nav: boolean = true;
	navBlock: boolean = false;

	changeNav() {
		if (window.innerWidth <= 1250) {
			this.navResp = true;
			this.nav = false;
		} else {
			this.navResp = false;
			this.nav = true;
			this.navBlock = false;
		}
	}

	ngOnInit() {
		this.changeNav();

		window?.addEventListener('resize', () => {
			this.changeNav();
		});
	}

	showNavMenu() {
		if (this.navBlock != null) {
			this.navBlock = !this.navBlock;
		}
	}
}
