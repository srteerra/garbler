import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
	map: mapboxgl.Map | undefined;
	style = 'mapbox://styles/srteerra/cl62y0dr3001i15my49hw1j8o';
	lat2 = 31.63333;
	lng2 = -106.39333;

	position$: Observable<any>;

	constructor(db: AngularFireDatabase) {
		this.position$ = db.object('truck-1').valueChanges();
	}

	ngOnInit() {
		// console.log(this.position);
		this.map = new mapboxgl.Map({
			accessToken: environment.mapbox.accessToken,
			container: 'map',
			style: this.style,
			zoom: 13,
			center: [this.lng2, this.lat2],
			attributionControl: false
		});

		// Add map controls
		this.map.addControl(new mapboxgl.NavigationControl());

		// disable map rotation using right click + drag
		this.map.dragRotate.disable();

		// disable map rotation using touch rotation gesture
		this.map.touchZoomRotate.disableRotation();

		// disable map zoom when using scroll
		this.map.scrollZoom.disable();

		// Set marker options.
		let marker = new mapboxgl.Marker({
			color: '#FFFFFF',
			draggable: false
		})
			.setLngLat([this.lng2, this.lat2])
			.addTo(this.map);
	}
}
