import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {
  apikey: String | undefined
  data: any | undefined

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.apikey = environment.env.API_KEY;

    this.auth.loginUser().subscribe((data)=>{
      this.data = data;
    });
  }

}
