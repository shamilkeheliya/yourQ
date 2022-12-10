import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user-model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  constructor(
    private snackBar: MatSnackBar,
    private userModel: UserModel,
    private authService: AuthService,
    private router: Router,
    ) { }

  ngOnInit(): void {

  }

  onClickLogin(form: NgForm){
    if(form.value.email == ''){
      this.snackBar.open(
        'Email cannot empty!',
        'OK',
        { duration: 2000 },
      );
      return;
    }

    if(form.value.password == ''){
      this.snackBar.open(
        'Password cannot empty!',
        'OK',
        { duration: 2000 },
      );
      return;
    }
  }

}
