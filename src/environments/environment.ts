// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:4000',
  userUrl: 'http://localhost:7071/api/ullormerchandise',
  //categoryUrl: 'http://localhost:7070/api/ullormerchandise',
  categoryUrl: "https://9db9148959fb.ngrok.io/api/ullormerchandise",
  orderUrl: 'http://localhost:7072/api/ullormerchandise',

  //imageUrl: 'http://localhost:8080/image/upload'
  imageUrl: 'https://50b531ff6242.ngrok.io/image/upload'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
