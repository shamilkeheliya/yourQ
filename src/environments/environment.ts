// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { HttpHeaders } from "@angular/common/http";


export const environment = {
  production: false,
  env : {
    API_URL: 'http://localhost:5000/api',

    API_HEADER: new HttpHeaders({
      'API-Key': '!b+6W.$@PKzopN%+6n+6VWT.,_|KzopN%+6W.$@PKzopN%+6n+6V+KzopN%+66@sNL,+iKzopNK+6W.$@PKzopN%+6n+6VzopN%+6%+6VZ*aq1BE6?1f>_f_AaU*VKzopNKzoKzopN%+6pN%+6%+6W.$@PKzopN%+6n+6VZ*aq+6W.$@PKzopN%+6n+6V+6VZ*aq1BE6?1f>_f_AaU*VKzopN1BE6?1f>_f_AaU*VKzopN^',
    }),
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
