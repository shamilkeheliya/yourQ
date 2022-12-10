
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-answer-questionnaire-screen',
  templateUrl: './answer-questionnaire-screen.component.html',
  styleUrls: ['./answer-questionnaire-screen.component.css']
})
export class AnswerQuestionnaireScreenComponent implements OnInit {
  id: string | undefined

  constructor(private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!
  }

}
