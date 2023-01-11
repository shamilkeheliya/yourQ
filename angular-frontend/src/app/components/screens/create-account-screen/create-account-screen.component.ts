import { UserModel } from './../../../models/user-model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account-screen',
  templateUrl: './create-account-screen.component.html',
  styleUrls: ['./create-account-screen.component.css'],
  providers: [UserModel]
})
export class CreateAccountScreenComponent implements OnInit {

  constructor(
    private snackBar: MatSnackBar,
    private userModel: UserModel,
    private userService: UserService,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  async onClickCreate(form: NgForm){

    if(form.value.firstname == ''){
      this.snackBar.open(
        'Firstname cannot empty!',
        'OK',
        { duration: 2000 },
      );
      return;
    }

    if(form.value.lastname == ''){
      this.snackBar.open(
        'Lastname cannot empty!',
        'OK',
        { duration: 2000 },
      );
      return;
    }

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

    this.userModel.firstName = form.value.firstname;
    this.userModel.lastName = form.value.lastname;
    this.userModel.email = form.value.email;
    this.userModel.password = form.value.password;

    (await this.userService.createUser(this.userModel)).subscribe((response) => {

      if (response.status == 200) {
        this.snackBar.open(
          'Account created Successfully!',
          'OK',
          { duration: 2000 }
        );

        this.router.navigate(['/Login']);

        return;
      }
      else{
        this.snackBar.open(
          'Cannot create Account!',
          'OK',
          { duration: 2000 }
        );
      }

    });
  }
}

