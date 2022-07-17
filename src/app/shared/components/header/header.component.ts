import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	constructor() {}

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
