import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated():boolean {
    //return this.http.get('/auth/isAuthenticated');
    return true;
  }

  getUserID():string{
    return '';
  }
}
