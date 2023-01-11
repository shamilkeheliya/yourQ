import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.css']
})
export class AppbarComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.userService.isAuthenticated();
  }

  onClickLogOut(){
    this.userService.logoutUser();
  }
}
