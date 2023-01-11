import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user-model';
import { UserService } from 'src/app/services/user.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css'],
  providers: [UserModel],
})
export class LoginScreenComponent implements OnInit {

  constructor(
    private snackBar: MatSnackBar,
    private userModel: UserModel,
    private userService: UserService,
    private router: Router,
    private cookieService: CookieService,
    ) { }

  ngOnInit(): void {

  }



  async onClickLogin(form: NgForm){
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

    this.userModel.email = form.value.email;
    this.userModel.password = form.value.password;

    (await this.userService.loginUser(this.userModel)).subscribe((response) => {

      if (response.status == 200) {
        this.snackBar.open(
          'Logged in Successfully!',
          'OK',
          { duration: 2000 }
        );

        const data: any = response.body;
        const userid: string = data?.uid;

        this.cookieService.set('uid', userid);
        this.router.navigate(['/Dashboard']);

        return;
      }

    });

  }
}
