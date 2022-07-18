import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	constructor() {}

	navResp: boolean = false;
	nav: boolean = true;
	navBlock: boolean = false;

	changeNav() {
		if (window.innerWidth <= 1000) {
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
