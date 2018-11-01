// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
	firebase: {
    apiKey: "AIzaSyCamEikXKKr9dScMumyj99k0zf9j9FeX9I",
    authDomain: "hopping-dc414.firebaseapp.com",
    databaseURL: "https://hopping-dc414.firebaseio.com",
    projectId: "hopping-dc414",
    storageBucket: "hopping-dc414.appspot.com",
    messagingSenderId: "575574559197"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
