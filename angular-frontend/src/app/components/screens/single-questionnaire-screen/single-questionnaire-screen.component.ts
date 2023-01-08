import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-single-questionnaire-screen',
  templateUrl: './single-questionnaire-screen.component.html',
  styleUrls: ['./single-questionnaire-screen.component.css']
})
export class SingleQuestionnaireScreenComponent implements OnInit {

  answersData: any = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private webSocketService: WebsocketService,
    ) { }

  ngOnInit(): void {
    this.getData();
  }

  onClickShare(){
    this.router.navigate(['/QuestionnaireID/' + this.route.snapshot.paramMap.get('id')!]);
  }

  getData(){
    this.webSocketService.listen('questionnaire').subscribe((data)=>{
      this.answersData = data;
    });

    this.webSocketService.emit('questionnaire', {id: this.route.snapshot.paramMap.get('id')!});
  }



}
