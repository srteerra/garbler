// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'garbler-365ae',
    appId: '1:634510301893:web:ed68b2473581ba4b32eeac',
    storageBucket: 'garbler-365ae.appspot.com',
    apiKey: 'AIzaSyAqH5R56VlJe7LA29S3_PIKtcSezuHDJU4',
    authDomain: 'garbler-365ae.firebaseapp.com',
    messagingSenderId: '634510301893',
  },
	production: false,
	mapbox: {
		accessToken:
			'pk.eyJ1Ijoic3J0ZWVycmEiLCJhIjoiY2w2MngxOHBvMmJrZjNjbWF5ajBmM2gwayJ9.8yviRb48DNO8Hu2jpgLgFQ'
	}
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
