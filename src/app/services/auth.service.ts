import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from './../../environments/environment.prod';
import { UserModel } from './../models/user-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isAuthenticatedUser: boolean = false;
  userID: string = '';

  response: any | undefined;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  isAuthenticated():boolean {
    return this.isAuthenticatedUser;
  }

  getUserID():string{
    return this.userID;
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

}
