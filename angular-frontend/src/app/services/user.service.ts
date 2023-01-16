import { environment } from '../../environments/environment.prod';
import { UserModel } from '../models/user-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  response: any | undefined;

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router,
    ) {}

  isAuthenticated():boolean {
    return this.cookieService.get('uid') != '';
  }

  getUserID():string{
    return this.cookieService.get('uid');
  }

  async getUserName(){

    return this.http.get(
      environment.env.API_URL + '/user/name/' + this.getUserID(),
      {
        headers: environment.env.API_HEADER,
        responseType: 'json',
        observe: 'response',
      },
    );
  }

  async createUser(userModel: UserModel){

      return this.http.post(
        environment.env.API_URL + '/user/create',
        userModel,
        {
              headers: environment.env.API_HEADER,
              responseType: 'text',
              observe: 'response',
        },
      );
  }

  async loginUser(userModel: UserModel){

    return this.http.post(
      environment.env.API_URL + '/user/login',
      userModel,
      {
            headers: environment.env.API_HEADER,
            responseType: 'json',
            observe: 'response',
      },
    );
  }

  logoutUser(){
    this.cookieService.delete('uid');
    this.cookieService.deleteAll();
    this.router.navigate(['/Login']);
  }

}
