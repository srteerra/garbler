import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { environment } from '../../../../environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnChanges {
	map!: mapboxgl.Map;
	style = 'mapbox://styles/srteerra/cl62y0dr3001i15my49hw1j8o';
	lat = 0;
	lng = 0;
	numberOf = 0;
	marker!: mapboxgl.Marker;

	trucks$: Observable<any>;

	constructor(db: AngularFirestore) {
		this.trucks$ = db.collection('trucks').valueChanges();

		this.trucks$.subscribe((res) => {
			console.log(res[0].position);
			this.numberOf = res.length;
			this.lat = res[0].position._lat;
			this.lng = res[0].position._long;
			this.animateMarker(this.lng, this.lat);
		});

		let el = document.createElement('div');
		el.className = 'marker';
		this.marker = new mapboxgl.Marker(el, { draggable: false })
			.setLngLat([this.lng, this.lat])
			.addTo(this.map);
	}

	ngOnInit() {
		this.map = new mapboxgl.Map({
			accessToken: environment.mapbox.accessToken,
			container: 'map',
			style: this.style,
			zoom: 13,
			center: [-106.39333, 31.63333],
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

		this.addMarkers();
	}

	addMarkers(): void {
		// for (var i = 0; i >= this.numberOf; i++) {
		// 	// Set marker options.
		// 	const el = document.createElement('div');
		// 	el.className = 'marker';
		// 	new mapboxgl.Marker(el, { draggable: false })
		// 		.setLngLat([this.lng, this.lat])
		// 		.addTo(this.map);
		// }
		// Set marker options.
		new mapboxgl.Marker({
			color: '#FFFFFF',
			draggable: false
		})
			.setLngLat([this.lng, this.lat])
			.addTo(this.map);
	}

	animateMarker(lng: number, lat: number) {
		this.marker.setLngLat([lng, lat]);

		/*
		Ensure the marker is added to the map.
		This is safe to call if it's already added.
		*/
		this.marker.addTo(this.map);
	}

	ngOnChanges(changes: SimpleChanges): void {
		console.log('changes: ', changes);

		this.addMarkers();
	}
}
