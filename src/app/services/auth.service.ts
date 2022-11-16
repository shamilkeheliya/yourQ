import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isAuthenticatedUser: boolean = false;
  userID: string = '';

  constructor(private http: HttpClient) {}

  isAuthenticated():boolean {
    return this.isAuthenticatedUser;
  }

  getUserID():string{
    return this.userID;
  }

  createUser(){

  }

  loginUser(){
    return this.http.get('/apii', {});
  }

}


export class GlobalAuth{
  public static golbalAuth: AuthService;
}
