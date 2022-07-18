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

	ngOnInit() {
		window?.addEventListener('resize', () => {
			if (window.innerWidth <= 1000) {
				this.navResp = true;
				this.nav = false;
			} else {
				this.navResp = false;
				this.nav = true;
			}
		});
	}

	showNavMenu() {
		var navMenu = document.getElementById('navMenu');
		if (navMenu !== null) {
			if (navMenu.style.visibility == 'hidden') {
				navMenu.style.visibility = 'visible';
			} else {
				navMenu.style.visibility = 'hidden';
			}
		}
	}
}
