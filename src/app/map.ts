export interface IGeometry {
	type: string;
	coordinates: number[];
}

export interface IGeoJson {
	type: string;
	geometry: IGeometry;
	propieties?: any;
	$key?: string;
}

export class GeoJson implements IGeoJson {
	type = 'Feature';
	geometry: IGeometry;

	constructor(coordinates: any, public propieties?: any) {
		this.geometry = {
			type: 'Point',
			coordinates: coordinates
		};
	}
}

export class FeatureCollection {
	type = 'FeatureCollection';
	constructor(public features: Array<GeoJson>) {}
}
