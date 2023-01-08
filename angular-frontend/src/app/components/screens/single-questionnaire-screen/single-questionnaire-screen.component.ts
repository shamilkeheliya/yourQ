import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-single-questionnaire-screen',
  templateUrl: './single-questionnaire-screen.component.html',
  styleUrls: ['./single-questionnaire-screen.component.css']
})
export class SingleQuestionnaireScreenComponent implements OnInit {
  id: string | undefined
  //ENDPOINT: string = 'http://localhost:3000'

  constructor(
    private route: ActivatedRoute,
    private webSocketService: WebsocketService,
    ) { }

  ngOnChanges(): void{

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    //var socket = io(this.ENDPOINT);
    this.getData();
  }

  getData(){
    this.webSocketService.listen('eventName').subscribe((data)=>{
      console.log(data);
    });
  }

}
