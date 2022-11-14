import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticatedUser: boolean = false;

  constructor() { }

  isAuthenticated():boolean {
    return this.isAuthenticatedUser;
  }

  

  getUserID():string{
    return '';
  }

}


export class GlobalAuth{
  public static golbalAuth: AuthService = new AuthService();
}
