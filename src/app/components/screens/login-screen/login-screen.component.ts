import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  onClickLogin(form: NgForm){
    console.log(form.value.email);
  }

}
