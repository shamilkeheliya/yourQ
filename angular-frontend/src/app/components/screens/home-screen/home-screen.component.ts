import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  constructor(
    private router: Router,
    ) { }

  async ngOnInit(): Promise<void> {
  }

  onClickCreateQuestionnaire(){
    this.router.navigate(['/Create-Questionnaire']);
  }
}
