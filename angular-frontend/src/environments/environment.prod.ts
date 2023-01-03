import { HttpHeaders } from "@angular/common/http";

export const environment = {
  production: true,
  env : {
    API_URL: 'http://localhost:3000/api',
    API_HEADER: new HttpHeaders({
      'API-Key': '!b+6W.$@PKzopN%+6n+6VWT.,_|KzopN%+6W.$@PKzopN%+6n+6V+KzopN%+66@sNL,+iKzopNK+6W.$@PKzopN%+6n+6VzopN%+6%+6VZ*aq1BE6?1f>_f_AaU*VKzopNKzoKzopN%+6pN%+6%+6W.$@PKzopN%+6n+6VZ*aq+6W.$@PKzopN%+6n+6V+6VZ*aq1BE6?1f>_f_AaU*VKzopN1BE6?1f>_f_AaU*VKzopN^',
    }),
  }
};
