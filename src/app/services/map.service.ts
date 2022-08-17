import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Firebase } from '@angular/fire';

import { GeoJson } from '../map';
import * as mapboxgl from 'mapbox-gl';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class MapService {
	constructor(private db: AngularFireDatabase) {}

	getMarkers() {
		return this.db.list('/items');
	}
}
