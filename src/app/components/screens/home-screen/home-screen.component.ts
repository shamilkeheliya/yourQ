import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {
  data: any | undefined

  constructor(private auth: AuthService,
    private cookieService: CookieService,) { }

  async ngOnInit(): Promise<void> {

    // (await this.auth.loginUser()).subscribe((data)=>{
    //   this.data = data.body;
    // });

    this.data=this.cookieService.get('uid');
  }

}
